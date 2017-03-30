// ajax html载入5s超时
// 每次网络错误后开始计时20s，20s内没有任何成功的记录就check moderator, report main server disconnect
// check moderator 操作10s超时
// 每隔一分钟report main server disconnect

var connectionErrorReporter = (function () {
    var timer = null;
    var errorFunc;

    return {
        record: function () {
            if (timer !== null) return;
            timer = setTimeout(function () {
                timer = null;
                if (errorFunc) errorFunc();
            }, 20 * 1000);
        },
        onerror: function (error) {
            errorFunc = error;
        },
        reset: function () {
            clearTimeout(timer);
            timer = null;
        }
    }
})();

function initServer() {
    var main_server, standby_server, onSwitchServer;
    var moderator;
    var if_switching = false;  // if_switching=true表示已经问过moderator了，确定要改服务器，current_server已经改了，正在等待VM端恢复
    var current_server = -1; //0-standby 1-main -1 - unknown
    var ajax;
    var scheme = window.location.href.indexOf('localhost') > 0 ? 'http://' : 'https://';
    var main_server_disconnected = false;
    var main_server_report_timer = 0;

    function globalSuccess(data) {
        if (data) {
            if (data.v) {
                visitorId = parseInt(data.v);
            }

            if (data.t && data.t != sessionId) {
                sessionId = parseInt(data.t);
            }

            if (data.chat_id) {
                chatId = data.chat_id;
            }

            if (data.g) {
                visitorGuid = data.g;
            }

            if (check_if_ban_error(data)) {
                goto_window(visitor_window.ban);
                show_error(data.e);
                return;
            }

            if (data.c == 314) {
                check_moderator();
                return;
            }

            if (if_switching) {
                //正在切换服务器时忽略错误
                if (data.c == 0) {
                    if_switching = false; //switch success
                }
            } else {
                //不是正在切换时处理错误
                if (data.c == 1036 ||  //chat guid not match
                    data.c == 1004  // visitor not in site
                ) {
                    //一般是服务器重启了，聊天窗口没有关，这时候要停止heartbeat
                    stop_heartbeat();
                    clearInterval(main_server_report_timer);
                    connectionErrorReporter.reset();
                }

                if (data.c > 0) {
                    show_error(data.e);
                }
            }
        }
    }

    function post(data, params, onsuccess, onerror, has_timeout) {
        // 该请求是发送给哪个服务器的
        var savedCurrentServer = current_server;
        ajax.post(get_url('/liveChatVisitorHandler.ashx?siteId=' + siteId + '&planId=' + planId + '&' + params),
            data,
            function (resp) {
                // 服务器已经切换过了，就忽略
                if (current_server != savedCurrentServer) return;

                globalSuccess(resp);

                if (onsuccess) {
                    onsuccess(resp);
                }

                connectionErrorReporter.reset();
                if (current_server === 1) {
                    main_server_disconnected = false;
                }
            },
            function (err) {
                // 服务器已经切换过了，就忽略
                if (current_server != savedCurrentServer) return;

                if (onerror) onerror(err);

                if (err === 'ajax.html not ready') return;

                connectionErrorReporter.record();
                if (current_server === 1) {
                    main_server_disconnected = true;
                }
            },
            has_timeout ? 20 * 1000 : 0);
    }

    function get_url(path) {
        if (current_server === 0) {
            return scheme + standby_server + path;
        } else {
            return scheme + main_server + path;
        }
    }

    function switch_server(s) {
        if (current_server != s) {
            var old_server = current_server;
            current_server = s;
            if_switching = true;
            if (onSwitchServer) onSwitchServer(old_server, current_server);
        }
    }

    function reportMainServerStatus() {
        if (moderator && current_server === 1) {
            ajax.post(moderator
                    + '&action=4'
                    + '&mainDisconnected=' + (main_server_disconnected ? '1' : '0')
                    + '&visitorId=' + visitorId
            , null);
        }
    }

    function check_moderator() {
        connectionErrorReporter.reset();

        if (moderator) {
            ajax.post(moderator + '&action=1',
                '',
                function (s) {
                    switch_server(s);
                },
                function () {
                    switch_server(1);
                },
                10 * 1000);
        }
    }

    function setup(main, standby, fnswitch) {
        main_server = main;
        standby_server = standby;
        onSwitchServer = fnswitch;
        if (standby_server) {
            moderator = scheme + standby_server + '/moderator.aspx?siteId=' + siteId;
            ajax = new xdomain([main, standby]);
            check_moderator();
            connectionErrorReporter.onerror(function () {
                reportMainServerStatus();
                check_moderator();
            });
            main_server_report_timer = setInterval(reportMainServerStatus, 1000 * 60);
        } else {
            ajax = new xdomain([main]);
            switch_server(1);
        }
    }

    return {
        setup: setup,
        post: post,
        get_url: get_url
    };
}

var server = initServer();

function xdomain(trustDomains) {
    // use XMLHttpRequest directly
    function postMaster(url, data, success, error, timeout) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        if (xhr.timeout > 0) xhr.timeout = timeout;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (success) success(JSON.safeParse(xhr.responseText));
                } else {
                    if (error) error('HTTP error ' + xhr.status);
                }
            }
        };
        xhr.send(JSON.stringify(data));
        xhr.ontimeout = function () {
            if (error) error('Request timeout');
        };
        return {
            abort: function () {
                xhr.abort();
            }
        };
    }

    var ajaxRequestsId = 0;

    function checkIfTrustDomains(origin) {
        origin = origin.replace(/^https?:\/\//ig, '').toLowerCase();
        for (var i = 0; i < trustDomains.length; i++) {
            if (trustDomains[i].toLowerCase().indexOf(origin) >= 0) {
                return true;
            }
        }

        return false;
    }

    function postSlaveAjax(ifr, url, data, success, error, timeout) {
        var ajaxId = ++ajaxRequestsId;
        function onAjaxResponse(e) {
            if (!checkIfTrustDomains(e.origin)) return;

            var json = JSON.safeParse(e.data);
            if (json && json.ajaxId == ajaxId) {  // json.ajaxId用于区分这个是从ajax.html返回的
                window.removeEventListener('message', onAjaxResponse);

                if (json.err == null) {
                    if (success) success(json.resp);
                } else {
                    if (error) error(json.err);
                }
            }
        }

        window.addEventListener('message', onAjaxResponse);

        try {
            ifr.contentWindow.postMessage(JSON.stringify({
                ajaxId: ajaxId,
                url: url,
                data: data,
                timeout: timeout
            }), url);
        } catch (exp) {
            if (error) error(exp.toString());
        }
    }

    var ifr;
    var ifrReady = false;  // ajax.html 如果没有load完，ifrReady=false，这个时候发请求就按失败处理
    function postSlave(url, data, success, error, timeout) {
        if (ifr == null) {  //ifr!=null表示正在loading
            ifr = document.createElement('iframe');
            ifr.setAttribute('id', 'ifr-ajax');
            ifr.setAttribute('style', 'display:none');
            document.body.insertBefore(ifr, document.body.firstChild);

            //载入失败要重置iframe，这样后面再有请求会重新尝试载入ajax.html
            function resetAjaxIFrame() {
                if (ifr != null) {
                    document.body.removeChild(ifr);
                    ifr = null;
                }
            }

            function clearEvents() {
                window.removeEventListener('message', onAjaxIframeReady);
                ifr.removeEventListener('load', onAjaxIframeLoad);
                clearTimeout(timeoutTimer);
            }

            var timeoutTimer = setTimeout(function () {
                clearEvents();
                resetAjaxIFrame();
                if (error) error('ajax.html load timeout');
            }, 5000);

            // iframe load事件不能保证iframe是加载成功的，域名找不到/网络连不上也会有load事件
            // 通过接收ajax.html发送的ajax-proxy-ready来确定加载完成
            function onAjaxIframeReady(e) {
                if (checkIfTrustDomains(e.origin) && e.data === 'ajax-proxy-ready') {
                    clearEvents();
                    postSlaveAjax(ifr, url, data, success, error, timeout);
                    ifrReady = true;
                }
            }
            window.addEventListener('message', onAjaxIframeReady);

            // 同时监听load事件是为了更快捕获到加载失败
            // 如果只通过有没有收到ajax-proxy-ready来判断就需要等待5s超时
            function onAjaxIframeLoad() {
                setTimeout(function () {
                    if (!ifrReady) {
                        clearEvents();
                        resetAjaxIFrame();
                        if (error) error('ajax.html load failed');
                    }
                }, 100);
            }
            ifr.addEventListener('load', onAjaxIframeLoad);

            ifr.src = getSlaveProxy(url);
        } else {
            if (ifrReady) {
                postSlaveAjax(ifr, url, data, success, error, timeout);
            } else {
                if (error) error('ajax.html not ready');
            }
        }
    }

    function getSlaveProxy(url) {
        url = url.split('?')[0];
        var i = url.lastIndexOf('/');
        return url.substr(0, i) + '/ajax2.html';
    }

    function ifMaster(url) {
        var reg = /https?:\/\/([^\/]*)/i;
        var m1 = url.match(reg);
        var m2 = window.location.href.match(reg);
        return m1[1].toLowerCase() == m2[1].toLowerCase();
    }

    function post(url, data, success, error, timeout) {
        if (ifMaster(url)) {
            postMaster(url, data, success, error, timeout);
        } else {
            postSlave(url, data, success, error, timeout);
        }
    }

    return { post: post };
}
