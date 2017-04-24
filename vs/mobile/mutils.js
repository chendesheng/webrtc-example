
function init_fb_login(_onload, _appid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info(id) {
        FB.api("/" + id, { 'fields': 'name,email,link,picture' },
            function (resp) {
                _success({
                    'name': resp.name,
                    'email': resp.email,
                    'profile': resp.link,
                    'avatar': resp.picture.data.url,
                    'source': 1
                });
            }
        );
    }

    function login(callback) {
        _success = callback || function(){};

        if (_userid) {
            get_info(_userid);
        } else {
            FB.login(function(response) {
                if (response.authResponse && response.authResponse.userID) {
                    _userid = response.authResponse.userID;
                    get_info(_userid);
                }
            }, {'scope': 'email'});
        }
    }

    var _userid;

    window.fbAsyncInit = function() {
        FB.init({
            appId      : _appid,
            cookie     : true,  // enable cookies to allow the server to access 
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5'
        });

        FB.getLoginStatus(function(response) {
            if (response.authResponse && response.authResponse.userID) {
                _userid = response.authResponse.userID;
            }

            _onload();
        });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); 
        js.id = id;
        js.async = true;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return {
        'login': login
    };
}

function init_gp_login(_onload, _clientid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info() {
        gapi.client.load('plus', 'v1', function() {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                if (resp.error) {
                    alert(resp.message);
                    return;
                }
                _success({
                    'name': resp.displayName,
                    'email': get_primary_email(resp),
                    'profile': resp.url,
                    'avatar': resp.image.url,
                    'source': 2
                });
            });
        });
    }
    function get_primary_email(resp) {
        var email = '';
        for (var i=0; i < resp.emails.length; i++) {
            if (resp.emails[i].type === 'account') 
                email = resp.emails[i].value;
        }

        return email;
    }

    var _login_initialized = false;

    function login(success) {
        _success = success || function(){};

        _login_initialized = false;

        gapi.auth.signIn({
            'callback': 'googleplus_login_callback',
            'clientid': _clientid,
            'cookiepolicy': 'single_host_origin',
            'requestvisibleactions': 'http://schema.org/AddAction',
            'scope': 'https://www.googleapis.com/auth/plus.login email'
        });
    }

    window['googleplus_login_callback'] = function (resp) {

        if (resp.status.signed_in) {
            if (_login_initialized) return;
            _login_initialized = true;
            
            get_info();
        }
    };


    window['gponload'] = _onload;

    var po = document.createElement('script');
        po.type = 'text/javascript'; 
        po.async = true;
        po.src = 'https://apis.google.com/js/client:plusone.js?onload=gponload';
    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);

    return {
        'login': login
    };
}

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
    var if_switching = false;
    var current_server = -1; //0-standby 1-main -1 - unknown
    var ajax;
    var scheme = window.location.href.indexOf('localhost') > 0 ? 'http://' : 'https://';
    var main_server_disconnected = false;
    var main_server_report_timer = 0;

    var error_1004_cnt = 0;

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
                $('#ban-error').html(data.e);
                return;
            }

            if (data.c == 0) {
                if_switching = false; //switch success
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
                    if (error_1004_cnt > 0)
                        return;

                    error_1004_cnt++;
                    stop_heartbeat();
                    clearInterval(main_server_report_timer);
                    connectionErrorReporter.reset();

                    if (confirm(data.e)) {
                        chat_window.change_current_visitor_status_chat_ended();
                        close_window();
                    }
                    return
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

    function get_server_host() {
        if (current_server === 0) {
            return standby_server.substr(0, standby_server.indexOf('/'));
        } else {
            return main_server.substr(0, main_server.indexOf('/'));
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
            ajax.post(moderator + '&action=4' + '&mainDisconnected=' + (main_server_disconnected ? '1' : '0'), null);
        }
    }

    function check_moderator() {
        connectionErrorReporter.reset();

        if (moderator) {
            ajax.post(moderator + '&action=1',
                '',
                function (s) {
                    switch_server(s);
                }, function () {
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
            setInterval(reportMainServerStatus, 1000 * 60);
        } else {
            ajax = new xdomain([main]);
            switch_server(1);
        }
    }

    return {
        setup: setup,
        post: post,
        get_url: get_url,
        get_server_host: get_server_host
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



function GetWindowWidth() {
    return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
}
function GetWindowHeight() {
    return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
}
function html_encode(html) {
    var div = document.createElement("div");
    var txt = document.createTextNode(html);
    div.appendChild(txt);
    return div.innerHTML.replace(/"/g, '&#34;').replace(/'/g, '&#39;');
}
function handle_exception(e, method) {
    if (e && e.message) {
        alert(e.message + " [" + method + "]");
    }
}
function confirmHTML(html) {
    return confirm(HtmlDecode(html));
}
function alertHTML(html) {
    return alert(HtmlDecode(html));
}
function UrlQueryString(param, defaultValue) {
    var url = location.href;
    var paramString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paramObj = {};
    for (var i = 0; j = paramString[i]; i++) {
        paramObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paramObj[param.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return defaultValue;
    } else {
        return returnValue;
    }
}
var dot_dot_dot_timer;
function start_dot_dot_dot(btn) {
    var submitProgress = 0;
    var text = btn.value;
    function start() {
        btn.disabled = true;
        btn.value = text;
        var value = "";
        for (var i = 0; i < submitProgress; i++) {
            value += ".";
        }
        btn.value = text + value;
        if (submitProgress >= 3) {
            submitProgress = 1;
        } else {
            submitProgress++;
        }
    }
    dot_dot_dot_timer = setInterval(start, 1000);
}
function end_dot_dot_dot(btn) {
    btn.value = btn.value.replace(/[.]?[.]?[.]?$/, '');
    btn.disabled = false;
    if (dot_dot_dot_timer)
        clearInterval(dot_dot_dot_timer);
}

String.prototype.formatDate = function() {
	var seconds = parseInt(this.match(/Date\((\d+)\)/)[1]);
	//convert to local
	seconds -= (new Date).getTimezoneOffset();
	var d = new Date(seconds);
	var hour = d.getHours();
	var minutes = d.getMinutes();

	function fix2(d) {
		return d<10 ? '0'+d : ''+d;
	}

	var am = hour < 12 ? ' AM' : ' PM';
	hour = hour%12 || 12;

	return fix2(hour) + ':' + fix2(minutes) + am;
};


String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
String.prototype.contains = function(s, ignorCase) {
    if (typeof s == "string") {
        if (ignorCase) {
            return this.toLowerCase().indexOf(s.toLowerCase()) >= 0;
        } else {
            return this.indexOf(s) >= 0;
        }
    }
};
String.prototype.parseUrl = function() {
    var reg = /((www\.|http:\/\/|https:\/\/|ftp:\/\/|news:\/\/|rtsp:\/\/|mss:\/\/)[a-zA-Z0-9$%][0-9a-zA-Z_!~*'();?:@&=+$,%#-./]*)/ig;
    var temp = this.replace(reg, "<a href=\"$1\" class='parsedlink' target='_blank'>$1</a>");
    return temp.replace(/<a href=\"www\./ig, "<a href=\"http://www.");
};
String.prototype.isValidEmail = function() {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*/.test(this.trim());
};
String.prototype.isEmpty = function() {
    return this.trim().length == 0;
};

function empty_return(ret) {
	var empty = {};
	for (var p in ret) {
		if (ret.hasOwnProperty(p)) {
			if (ret[p] instanceof Function) {
				empty[p] = function(){};
			}
		}
	}
	return empty;
}

function render_template(tpl, obj) {
	var html = tpl;
	for (var p in obj) {
		if (obj.hasOwnProperty(p)) {
			html = html.replace(new RegExp('\{'+p+'\}', 'g'), obj[p]);
		}
	}
	return html;
}

function set_text(ele, text) {
	//firefox use textContent
	if (ele.textContent || (typeof ele.textContent != 'undefined')) {
		ele.textContent = text;
	} else {
		ele.innerText = text;
	}
}

var cookie = {set: function(k, v, siteId) {
        if (siteId) {
            k += "_" + siteId;
        }
        var c = k + "=" + v + ";expires=Wed, 30 Dec 7007 03:23:45 GMT";
        document.cookie = c;
    },get: function(k) {
        var cookie = document.cookie;
        var arr = cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
            var v = arr[i].split("=");
            if (v != null && v.length == 2 && k == v[0]) {
                return v[1];
            }
        }
    }};
function is_enter(evt) {
    evt = (evt) ? evt : window.event;
    var keyCode = (evt.charCode) ? evt.charCode : ((evt.which) ? evt.which : evt.keyCode);
    return keyCode == 13;
}
var flash_title = {title: document.title,speed: 1000,timer: null,start: function() {
        if (flash_title.timer == null) {
            var even = true;
            flash_title.timer = setInterval(function() {
                document.title = even ? "-" : flash_title.title;
                even = !even;
            }, flash_title.speed);
        }
    },stop: function() {
        document.title = flash_title.title;
        if (flash_title.timer) {
            try {
                clearInterval(flash_title.timer);
            } catch (e) {
            }finally {
                flash_title.timer = null;
            }
        }
    }};
var agent = navigator.userAgent;
(s = agent.match(/msie ([\d.]+)/i)) ? window.ie = s[1] : 0;
function replace_class(ele, from, to) {
    ele.className = ele.className.replace(from, to);
}

var flag_window_closing = false;
function close_window() {
    flag_window_closing = true;
    // popup mobile window cannot be closed
    // window.close();
    window.opener = null;
}

function $$(className, ele) {
    if (!!className === false)
        return null;
    if (document.getElementsByClassName)
        return document.getElementsByClassName(className);
    else {
        ele = ele || document;
        var all = ele.getElementsByTagName('*');
        var eles = [];
        for (var i = 0, len = all.length; i < len; i++) {
            var ele = all[i];
            if (ele.className.indexOf(className) >= 0)
                eles.push(ele);
        }
        return eles;
    }
}
function px2int(px) {
    if (px == "") {
        return 0;
    }
    return parseInt(px.replace(/^(\d+).*?$/, "$1"));
}
function clientHeight() {
    var b = document.compatMode && document.compatMode === "CSS1Compat";
    var h = document.documentElement.clientHeight;
    return b && h || document.body.clientHeight || h;
}
function clientWidth() {
    var b = document.compatMode && document.compatMode === "CSS1Compat";
    var w = document.documentElement.clientWidth;
    return b && w || document.body.clientWidth || w;
}
function divHeight(div) {
    try {
        if (div.nodeName != "DIV" || div.style.display == "none") {
            return 0;
        } else {
            var h = div.offsetHeight || div.clientHeight || px2int(div.style.height);
            return isNaN(h) ? 0 : h;
        }
    } catch (e) {
        return 0;
    }
}
function get_stretch_ele_height(parent_ele, stretch_ele_id, ch) {
    ch = ch || clientHeight();
    var nds = parent_ele.childNodes;
    var len = nds.length;
    for (var i = 0; i < len; i++) {
        if (nds[i].id != stretch_ele_id) {
            var dh = divHeight(nds[i]);
            ch -= dh;
        }
    }
    ch = ch > 0 ? ch : 0;
    return ch;
}
function set_window_title(title) {
    flash_title.title = title;
    setTimeout(function() {
        document.title = title;
    }, 50);
}
function refresh() {
    window.location.href = window.location.href;
}
function px2int(px) {
    if (px == "") {
        return 0;
    }
    return parseInt(px.replace(/^(\d+).*?$/, "$1"));
}

function placeholder_supported() {
    var ele = document.createElement('input');
    return 'placeholder' in ele;
}
function add_class(ele, c) {
	if (ele.className.indexOf(c) == -1) ele.className += ' ' + c;
}
function remove_class(ele, c) {
	ele.className = ele.className.replace(' ' + c, '').replace(c, '');
}
function has_class(ele, cls) {
	var clsName = ' ' + ele.className + ' ';
	return clsName.indexOf(' ' + cls + ' ') >= 0;
}

JSON.safeParse = function (str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
};

var __formId = 1;
function xform(iframeId, iframeParent, fields, fndone) {
    fndone = fndone || function () { };

    var ifr = document.getElementById(iframeId);
    if (ifr) {
        ifr.parentNode.removeChild(ifr);
        ifr = null;
    }

    var formId = __formId++;

    function createInput(doc, props) {
        var ele = doc.createElement('input');
        for (var i in props) {
            var p = props[i];
            ele[i] = p;
        }

        return ele;
    }

    function createForm(doc) {
        var form = doc.createElement('form');
        form.method = 'post';
        // aspnet的request.Files需要设置multipart
        form.enctype = 'multipart/form-data';
        for (var i = 0; i < fields.length; i++) {
            form.appendChild(createInput(doc, fields[i]));
        }

        return form;
    }

    function getIframeDoc(ifr) {
        return ifr.contentDocument || ifr.contentWindow.document;
    }

    function createIframe(fndone) {
        var ifr = document.createElement('iframe');
        ifr.setAttribute('id', iframeId);
        if (iframeParent) {
            ifr.setAttribute('style', 'height:23px;width:100%;');
            ifr.setAttribute('width', '237px');
            ifr.setAttribute('height', '23px');
            ifr.setAttribute('frameborder', 0);
            ifr.setAttribute('scrolling', 'no');
            iframeParent.appendChild(ifr);
        } else {
            ifr.setAttribute('style', 'position:absolute;left:-10000px;display:none;');
            document.body.insertBefore(ifr, document.body.firstChild);
        }

        function ifrLoaded() {
            ifr.removeEventListener('load', ifrLoaded);
            var doc = getIframeDoc(ifr);
            doc.body.style.cssText = 'margin:0;padding:0;';
            doc.body.appendChild(createForm(doc));

            fndone(ifr);
        }

        ifr.addEventListener('load', ifrLoaded)
        ifr.src = 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();';
        return ifr;
    }

    createIframe(function (ifr) {
        var fnstop = null;
        fndone({
            // submit只能调用一次
            submit: function (url, onSubmitSuccess, onSubmitError) {
                var successReceived = false;
                var timer;
                function onmessage(e) {   // 注意onmessage可能会接受到chatButton所在的页面
                    if (url.indexOf(e.origin) >= 0) {
                        var resp = JSON.safeParse(e.data);
                        // server需要传回formId
                        if (resp.formId === formId) {
                            successReceived = true;
                            window.removeEventListener('message', onmessage);
                            clearTimeout(timer);
                            onSubmitSuccess(resp.data);
                        }
                    }
                }

                function onerror() {
                    window.removeEventListener('message', onmessage);
                    clearTimeout(timer);
                    onSubmitError();
                }

                timer = setTimeout(onerror, 3 * 60 * 1000);

                window.addEventListener('message', onmessage);

                // 如果iframe onload已经触发，但是onmessage没有收到，就视为出错
                function ifrOnload() {
                    ifr.removeEventListener('load', ifrOnload);
                    setTimeout(function () {
                        if (!successReceived) {
                            onerror();
                        }
                    }, 2000);
                }

                ifr.addEventListener('load', ifrOnload);
                // start timeout timer
                var form = getIframeDoc(ifr).forms[0];
                // 校验form用，server要在返回结果里包含这个formId.
                form.action = url + '&formId=' + formId;
                form.submit();

                fnstop = function () {
                    clearTimeout(timer);
                    window.removeEventListener('message', onmessage);
                    ifr.removeEventListener('load', ifrOnload);
                }
            },
            getIframe: function () {
                return ifr;
            },
            getElement: function (id) {
                return getIframeDoc(ifr).getElementById(id);
            },
            stop: function () {
                if (fnstop) fnstop();
                if (window.ie) {
                    ifr.document.execCommand('Stop');
                } else if (ifr.stop) {
                    ifr.stop();
                }
            }

        })
    });
}

function uploadForm(onchange, fndone) {
    fndone = fndone || function () { };

    xform('ifr-upload', null, [{
        id: 'attachment',
        name: 'attachment',
        type: 'file'
    }], function (form) {
        var attachment = form.getElement('attachment');
        attachment.onchange = function (e) {
            onchange(attachment.value);
        };

        fndone({
            clickUpload: function () {
                attachment.click();
            },
            stopUpload: function () {
                form.stop();
            },
            upload: function (url, fnsuccess, fnerror) {
                form.submit(url, function (resp) {
                    if (resp === "") {
                        fnsuccess();
                    } else {
                        fnerror(resp);
                    }
                },
                function () {
                    fnerror('upload failed');
                });
            }
        });
    });
}