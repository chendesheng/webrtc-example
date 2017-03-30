var Comm100API = (Comm100API || { loaded: false });

(function ($c) {
    if ($c.loaded) return;

    var isTesting = window.location.href.indexOf('comm100IsTesting') != -1;
    if (isTesting) {
        comm100_server='https://ent.comm100.com/chatserver';
    }

    var $l = function () { };


    if (!$c.site_id) {
        $c.loaded = false;
        $l('Comm100API.site_id is required');
        return;
    }

    var server = comm100_server || "https://chatserver.comm100.com";
    var moderator_url = '';
    if (typeof comm100_standby_server != 'undefined') {
        moderator_url = comm100_standby_server + '/moderator.aspx';
    }

    var js_url = server + '/livechat.ashx';
    var window_url = isTesting ? 'chatwindow.html' : server + '/chatwindow.aspx';
    var current_server = -1;  //unknown server
    var sending_requests = {};
    var fault_count = 0;

    $c.dynamic = !!$c.dynamic;
    $c.main_code_plan = $c.main_code_plan || 0;

    //var frame_css = 'div';

    //visitor
    var $v = { id: 0, session: 0, guid: '' };

    var $ = window.document;
    var $$ = function (id) {
        return $.getElementById(id);
    };

    var chatGroup = (+Comm100API.chatGroup >= 0 && Math.floor(+Comm100API.chatGroup) === +Comm100API.chatGroup) ? Comm100API.chatGroup : null;

    var $x = (function () {
        var attached_callback;

        return {
            postMessage: function (message, target_url, target) {

                if (!target_url) {
                    return;
                }

                target = target || parent;  // default to parent

                // the browser supports window.postMessage, so call it with a targetOrigin
                // set appropriately, based on the target_url parameter.
                if (/^file:\/\//i.test(target_url)) {
                    target['postMessage'](message, '*');
                } else {
                    target['postMessage'](message, target_url.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
                }
            },

            receiveMessage: function (callback, source_origin) {
                // this is a fix from shared platform (for IE 8 only). However, this version might not contain the feature that will trigger the bug.
                // However, for safty reasons, add this protection here.
                if (!callback && !attached_callback) return;
                // bind the callback to the actual event associated with window.postMessage
                if (callback) {
                    attached_callback = function (e) {
                        if (isTesting) {
                            callback(e);
                            return;
                        }

                        if ((typeof source_origin === 'string' && source_origin.indexOf(e.origin) == -1)
                        || (Object.prototype.toString.call(source_origin) === "[object Function]" && source_origin(e.origin) === !1)) {
                            return !1;
                        }
                        callback(e);
                    };
                }

                if (window['addEventListener']) {
                    window[callback ? 'addEventListener' : 'removeEventListener']('message', attached_callback, !1);
                } else {
                    window[callback ? 'attachEvent' : 'detachEvent']('onmessage', attached_callback);
                }
            }
        };
    })();

    var $ga = (function () {
        var _enabled = false;
        var title = "Comm100 Live Chat";

        return {
            'send': function (action) {
                var ga = window.ga;
                if (!_enabled) return;
                if (ga) {
                    try {
                        var trackers = ga.getAll();
                        for (var i = 0; i < trackers.length; i += 1) {
                            ga(trackers[i].b.data.values[":name"] + '.send', 'event', title, action, action, 0);
                        }
                    } catch (e) {
                        // do nothing
                    }
                    ga('send', 'event', title, action, action, 0);
                } else if (window._gaq) {
                    window._gaq.push(['_trackEvent', title, action, action]);
                }
            },
            'enable': function (b) {
                _enabled = b;
            }
        };
    })();

    var $d = (function () {
        var _ele;
        var _dragging = false;
        var _ifr;
        var _ifrSize;
        var _savedSize = {};

        var mouseStrat = { x: 0, y: 0 };
        var divStrat = { x: 0, y: 0 };
        var currentPos = { x: 0, y: 0 };
        var bound;
        function startDrag(e) {
            var oEvent = e || event;
            pauseEvent(oEvent);
            mouseStrat.x = oEvent.clientX;
            mouseStrat.y = oEvent.clientY;
            divStrat.x = _ifr.offsetLeft;
            divStrat.y = _ifr.offsetTop;
            var newSpan = $.createElement('SPAN');
            _ele.appendChild(newSpan);
            if (_ele.setCapture) {
                _ele.onmousemove = doDrag;
                _ele.onmouseup = stopDrag;
                _ele.setCapture();
            } else {
                $.addEventListener('mousemove', doDrag, true);
                $.addEventListener('mouseup', stopDrag, true);
            };
            $u.f.stopFloat(_ifr);

            _ifrSize = { w: _ifr.clientWidth, h: _ifr.clientHeight };

            _ele.style.height = '100%';
            _ele.style.left = 0;

            bound = $u.f.clientSize();
            bound.w -= _ifrSize.w;
            bound.h -= _ifrSize.h;
        }
        function doDrag(e) {
            var oEvent = e || event;
            if ($u.ie && event && !event.button) {
                stopDrag();
                return;
            }
            var x = oEvent.clientX - mouseStrat.x + divStrat.x;
            var y = oEvent.clientY - mouseStrat.y + divStrat.y;

            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > bound.w) x = bound.w;
            if (y > bound.h) y = bound.h;

            _ifr.style.left = x + 'px';
            _ifr.style.top = y + 'px';

            _ifr.style.right = 'auto';
            _ifr.style.bottom = 'auto';
        }
        function stopDrag() {
            if (_ele.releaseCapture) {
                _ele.onmousemove = null;
                _ele.onmouseup = null;
                _ele.releaseCapture();
            } else {
                $.removeEventListener('mousemove', doDrag, true);
                $.removeEventListener('mouseup', stopDrag, true);
            }
            _ele.removeChild(_ele.childNodes[0]);

            //$u.f.floatIt(_ifr, _ifrSize, {l:_ifr.offsetLeft,t:_ifr.offsetTop});

            _ele.style.height = '24px';
            _ele.style.left = '-60px';
        }

        function pauseEvent(e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        }

        return {
            draggable: function (ele, ifr) {
                if (ele == null) return;
                _ele = ele;
                _ele.onmousedown = startDrag;

                _ifr = ifr;
            }
        };
    })();

    var $n = (function () {
        var timer = 0;
        var flag = false;
        var savedTitle = $.title;
        var message = '';
        function flashTitle(msg) {
            if (timer == 0) {
                savedTitle = $.title;

                timer = setInterval(function () {
                    if (message != '') {
                        if (flag) {
                            $.title = savedTitle;
                        } else {
                            $.title = message + ' - ' + savedTitle;
                        }
                    } else {
                        $.title = savedTitle;
                    }

                    flag = !flag;
                }, 1000);
            }
            message = msg;
        }
        return { 'flashTitle': flashTitle };
    })();


    var $u = {
        actionType: {
            pageVisit: 1,
            heartbeat: 2,
            refuseInvitation: 3,
            showAutoInvite: 4,
            manualInvitationShowed: 5,
            set_custom_variables: 7,
            set_prechat_fields: 10,
            set_if_skip_prechat: 11,
            get_custom_variable_config: 12
        },
        id: 0,
        getId: function () {
            return ++$u.id;
        },
        getRandom: function () {
            return Math.round(Math.random() * 10);
        },
        getCookie: function (k) {
            var cookie = $.cookie;
            var arr = cookie.split("; ");
            for (var i = 0; i < arr.length; i++) {
                var v = arr[i].split("=");
                if (v != null && v.length == 2 && k == v[0]) {
                    $l(k + ": " + v[1], "get cookie");
                    return v[1];
                }
            }
        },
        getTruncatedTitle: function () {
            return ($.title.length > 256) ? $.title.substring(0, 256) : $.title;
        },
        delCookie: function (k) {
            $l(k, "delete cookie");
            $.cookie = k + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
        },
        setCookie: function (k, v) {
            $.cookie = k + '=' + v + ';path=/;expires=Sat, 01 Jan 10000 00:00:00 GMT';
        },
        setSessionCookie: function (k, v) {
            if (window.ActiveXObject || 'ActiveXObject' in window) $.cookie = k + '=' + v + ';path=/;';
            else $.cookie = k + '=' + v + ';expires=0;path=/;';
        },
        getScrResolution: function () {
            return screen.width + 'x' + screen.height;
        },
        getTimezoneOffset: function () {
            return new Date().getTimezoneOffset();
        },
        getFlashVersion: function () {
            var v = "0.0.0";
            if (navigator.plugins && navigator.mimeTypes.length) {
                var x = navigator.plugins["Shockwave Flash"];
                if (x && x.description) {
                    v = x.description.replace(/([a-z]|[A-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".");
                }
            } else {
                try {
                    var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    for (var i = 3; axo != null; i++) {
                        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                        v = i + ".0.0";
                    }
                } catch (e) {
                }
                try {
                    v = axo.GetVariable("$version").split(" ")[1].split(",").join(".");
                } catch (e) {
                }
            }
            return v;
        },
        preventDefault: function (e) {
            e = e || window.event;
            if (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            }
        },
        stopPropagation: function (e) {
            e = e || window.event;
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        },
        popupWindow: function (url, name, w, h) {
            try {
                var top = 110;
                if (screen.height < 800) {
                    top = 50;
                }

                return window.open(url, name, "height=" + h + ",width=" + w + ",left=200,top=" + top + ",status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no");
            } catch (e) {
            }
        },
        sendRequest: function (url, p) {
            var callId = $u.getId();
            if (url === '') return callId;
            p = p || [];
            p.push(['callId', callId]);
            p.push(['cb', 'Comm100API']);

            var s = $.createElement("script");
            s.type = "text/javascript";
            s.src = url + '?' + $u.parse_query(p);
            s.id = 'comm100-script-' + callId;

            $.getElementsByTagName("head")[0].appendChild(s);
            return callId
        },
        removeRequest: function (id) {
            var obj = $$('comm100-script-' + id);
            if (obj && obj.parentNode) {
                obj.parentNode.removeChild(obj);
            }
        },
        px2int: function (px) {
            if (px == "") {
                return 0;
            }
            return parseInt(px.replace(/^(\d+).*?$/, "$1"));
        },
        createIframe: function (z, w, h) {
            z = z || 0;
            w = w || "0px";
            h = h || "0px";
            var ifr = $.createElement("IFRAME");
            ifr.src = "javascript:false";
            ifr.style.cssText = "display:none;left:0px;top:0px;width:" + w + ";height:" + h + ";position:absolute;z-index:" + z + ";filter:alpha(opacity=0,style=0);";
            ifr.frameborder = 0;
            $.body.insertBefore(ifr, $.body.firstChild);
            return ifr;
        },
        setPos: function (ele, sz, pos) {
            function px(x) { return x + 'px' }
            function percent(x) { return x + '%' }
            function dir(prop) {
                var style = '';
                if (pos[prop] != null) {
                    return px(pos[prop]);
                } else if (pos['p' + prop] != null) {
                    return percent(pos['p' + prop]);
                } else {
                    return 'auto';
                }
            }

            ele.style.position = 'fixed';
            ele.style.left = dir('l');
            ele.style.top = dir('t');
            ele.style.right = dir('r');
            ele.style.bottom = dir('b');
            if (pos.pl || pos.pr || pos.pt || pos.pb) {
                ele.style.marginLeft = '-' + px(sz.w / 2);
                ele.style.marginTop = '-' + px(sz.h / 2);;
            }
        },
        f: {
            supportFixed: function () {
                var f = $u.f;
                if (f.fixed != null) {
                    return f.fixed;
                }
                if ($u.mobile) {
                    f.fixed = !(/Android ([0-9]+)/i.test(navigator.userAgent) && RegExp.$1 < 3) &&
                        !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(ua));
                    return f.fixed;
                }
                if ($.createElement) {
                    try {
                        var b = $.body;
                        var e = $.createElement('div');
                        if (e.getBoundingClientRect) {
                            e.innerHTML = 'x';
                            e.style.cssText = 'position:fixed;top:100px;';
                            b.insertBefore(e, b.firstChild);
                            var originalHeight = b.style.height, originalScrollTop = b.scrollTop;
                            b.style.height = '3000px';
                            b.scrollTop = 500;
                            var elementTop = e.getBoundingClientRect().top;
                            b.style.height = originalHeight;
                            var isSupported = (elementTop === 100);
                            b.removeChild(e);
                            b.scrollTop = originalScrollTop;
                            f.fixed = isSupported;
                            return isSupported;
                        }
                    } catch (e) {
                        f.fixed = false;
                        return false;
                    }
                }
                f.fixed = false;
                return false;
            },
            clientSize: function () {
                var b = $.compatMode && $.compatMode === "CSS1Compat";
                var w = $.documentElement.clientWidth;
                var h = $.documentElement.clientHeight;
                return { w: b && w || $.body.clientWidth || w, h: b && h || $.body.clientHeight || h };
            },
            scrollPos: function () {
                var b = $.body, d = $.documentElement;
                return { x: b.scrollLeft || d.scrollLeft, y: b.scrollTop || d.scrollTop };
            },
            calcPos: function (sz, option) {
                var f = $u.f;
                var cs = f.clientSize();
                var x, y;
                if (option.l) {
                    x = option.l;
                } else {
                    var ws = cs.w - sz.w;
                    x = (option.r != null) ? ws - option.r : (option.pl != null) ? ws * option.pl * 0.01 : (option.pr != null) ? ws - ws * option.pr * 0.01 : 0;
                }
                if (option.t) {
                    y = option.t;
                } else {
                    var hs = cs.h - sz.h;
                    y = (option.b != null) ? hs - option.b : (option.pt != null) ? hs * option.pt * 0.01 : (option.pb != null) ? hs - hs * option.pb * 0.01 : 0;
                }
                if (x > 0) {
                    x = Math.ceil(x);
                }
                if (y > 0) {
                    y = Math.ceil(y);
                }
                return { x: x, y: y };
            },
            setFixPos: function (div, sz, option) {
                if (option.l != null) {
                    div.style.left = option.l + 'px';
                }
                if (option.pl != null) {
                    div.style.left = option.pl + '%';
                    div.style.marginLeft = (-Math.round(sz.w * option.pl * 0.01)) + 'px';
                }
                if (option.r != null) {
                    div.style.right = option.r + 'px';
                }
                if (option.pr != null) {
                    div.style.right = option.pr + '%';
                    div.style.marginRight = (-Math.round(sz.w * option.pr * 0.01)) + 'px';
                }

                if (option.t != null) {
                    div.style.top = option.t + 'px';
                }
                if (option.pt != null) {
                    div.style.top = option.pt + '%';
                    div.style.marginTop = (-Math.round(sz.h * option.pt * 0.01)) + 'px';
                }
                if (option.b != null) {
                    div.style.bottom = option.b + 'px';
                }
                if (option.pb != null) {
                    div.style.bottom = option.pb + '%';
                    div.style.marginBottom = (-Math.round(sz.h * option.pb * 0.01)) + 'px';
                }
            },
            getFloat: function (div) {
                var a = $u.f.floatDivs;
                for (var i = 0; i < a.length; i++) {
                    if (div === a[i].div) {
                        return a[i];
                    }
                }
            },
            smoothMove: function (s, e) {
                var d = e - s;
                if (Math.abs(d) <= 2) {
                    return e;
                } else {
                    return s + d * 0.2;
                }
            },
            doFloat: function () {
                var f = $u.f;
                var arr = f.floatDivs;
                for (var i = 0; i < arr.length; i++) {
                    var div = arr[i].div;
                    var pos = f.calcPos(arr[i].sz, arr[i].option);
                    if (f.fixed) {
                        div.style.position = "fixed";
                        if (!$u.mobile) {
                            div.style.left = pos.x + "px";
                            div.style.top = pos.y + "px";
                        } else {
                            f.setFixPos(div, arr[i].sz, arr[i].option);

                            if (f.timer != null) {
                                clearTimeout(f.timer);
                            }
                        }
                    } else {
                        var sp = f.scrollPos();
                        div.style.position = "absolute";
                        var x = sp.x + pos.x;
                        var y = sp.y + pos.y;
                        if (div.floated) {
                            div.style.left = f.smoothMove($u.px2int(div.style.left), x) + "px";
                            div.style.top = f.smoothMove($u.px2int(div.style.top), y) + "px";
                        } else {
                            div.style.left = x + "px";
                            div.style.top = y + "px";
                            div.floated = true;
                        }
                        var ifr = arr[i].ifr;
                        if (ifr) {
                            ifr.style.left = div.style.left;
                            ifr.style.top = div.style.top;
                        }
                    }
                }

                if (!$u.mobile) {
                    if (f.timer != null) {
                        clearTimeout(f.timer);
                    }
                    f.timer = setTimeout(f.doFloat, f.fixed ? 500 : 30);
                }
            },
            floatDivs: [], floatIt: function (div, sz, option) {
                if (!div || !option) {
                    return;
                }
                var f = $u.f;
                f.supportFixed();
                var o = f.getFloat(div);
                if (o) {
                    o.option = option;
                    if (!o.sz || o.sz.w != sz.w || o.sz.h != sz.h) {
                        o.sz = sz;
                        o.div.floated = false;
                    }
                } else {
                    var ifr = null;
                    if ($u.ie == "6.0") {
                        ifr = $u.createIframe(div.style.zIndex - 1, div.style.width, div.style.height);
                        ifr.style.display = "";
                    }
                    f.floatDivs.push({ div: div, sz: sz, option: option, ifr: ifr });
                }
                f.doFloat();
            },
            stopFloat: function (div) {
                var f = $u.f;
                var arr = f.floatDivs;
                if (arr && arr.length > 0) {
                    for (var i = 0; i < arr.length; i++) {
                        if (div === arr[i].div) {
                            var ifr = arr[i].ifr;
                            if (ifr) {
                                $.body.removeChild(ifr);
                            }
                            arr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        },
        overlay: {
            pageSize: function () {
                var b = $.body, h = $.documentElement;
                return { w: Math.max(b.scrollWidth, b.offsetWidth, h.clientWidth, h.scrollWidth, h.offsetWidth), h: Math.max(b.scrollHeight, b.offsetHeight, h.clientHeight, h.scrollHeight, h.offsetHeight) };
            },
            show: function (zIndex, divId) {
                var ifrId = divId + "ifr";
                var ifr = $$(ifrId);
                var div = $$(divId);
                if (!div) {
                    div = $.createElement("div");
                    div.id = divId;
                    var cssOpacity;
                    if ($u.ie) {
                        cssOpacity = "filter:alpha(opacity=65);opacity:0.65;";
                    } else {
                        cssOpacity = "opacity:0.65;-moz-opacity:0.65";
                    }
                    div.style.cssText = ("position:absolute;left:0px;top:0px;background-color:black;" + cssOpacity);
                    if (zIndex != null) {
                        div.style.zIndex = zIndex;
                    }
                    $.body.insertBefore(div, $.body.firstChild);
                }
                if (!ifr && $u.ie == "6.0") {
                    ifr = $u.createIframe(zIndex - 1);
                    ifr.id = ifrId;
                    ifr.style.display = "";
                }
                div.style.display = "";
                $u.overlay.timer = setInterval(function () {
                    var fixed = $u.f.supportFixed();
                    if (fixed) {
                        div.style.position = "fixed";
                    }
                    var cs = $u.f.clientSize();
                    div.style.width = cs.w + "px";
                    div.style.height = cs.h + "px";
                    if (!fixed) {
                        var ps = $u.overlay.pageSize();
                        var offset = (ps.w <= cs.w + 21) ? -21 : (ps.w <= cs.w + 17) ? -17 : 0;
                        if ($u.ie == "7.0" && $.compatMode != "BackCompat") {
                            offset = 0;
                        }
                        var offsetY = 0;
                        if ($u.ie && $.compatMode == "BackCompat") {
                            offsetY = (ps.h <= cs.h + 4) ? -4 : 0;
                        }
                        div.style.width = ps.w + offset + "px";
                        div.style.height = ps.h + offsetY + "px";
                        if (ifr) {
                            ifr.style.width = div.style.width;
                            ifr.style.height = div.style.height;
                        }
                    }
                }, 500);
            },
            hide: function (divId) {
                var ifrId = divId + "ifr";
                var o = $u.overlay;
                var div = $$(divId);
                if (div) {
                    $.body.removeChild(div);
                }
                var ifr = $$(ifrId);
                if (ifr) {
                    $.body.removeChild(ifr);
                }
                if (o.timer != null) {
                    clearInterval(o.timer);
                }
            }
        },
        imageComplete: function (img, f) {
            var div;
            if (!$u.ie && img.parentNode == null) {
                div = $.createElement("DIV");
                div.style.display = 'none';
                div.innerHTML = "<img src='" + img.src + "'/>";
                $.body.insertBefore(div, $.body.firstChild);
                img = div.firstChild;
            }
            function checkLoaded(img) {
                $l({ readyState: img.readyState, complete: img.complete }, "check image loaded");
                return img.readyState == "complete" || img.readyState == "loaded" || img.complete == true;
            }
            function onload() {
                setTimeout(function () {
                    $l(f.toString(), "on image loaded");
                    if (div)
                        $.body.removeChild(div);
                    f({ w: img.width, h: img.height });
                },
                 100);
            }
            if (!checkLoaded(img) && img.onload == null) {
                img.onreadystatechange = img.onload = function () {
                    if (checkLoaded(img)) {
                        img.onreadystatechange = img.onload = null;
                        onload();
                    }
                }
            } else {
                $l(f.toString(), "load image from cache");
                onload();
            }
        },
        playSound: function (url) {
            function getMimeType() {
                var mimeType = "application/x-mplayer2";
                var agt = navigator.userAgent.toLowerCase();
                if (navigator.mimeTypes) {
                    if (agt.indexOf("windows") == -1) {
                        var plugin = navigator.mimeTypes["audio/mpeg"].enabledPlugin;
                        if (plugin)
                            mimeType = "audio/mpeg";
                    }
                    if (agt.indexOf("opera") > -1) {
                        mimeType = null;
                    }
                }
                return mimeType;
            }
            try {
                var e = $.createElement("embed");
                e.src = url;
                e.hidden = true;
                e.width = 1;
                e.height = 1;
                e.autostart = true;
                e.loop = 0;
                var type = getMimeType();
                if (type)
                    e.type = type;
                $.body.insertBefore(e, $.body.firstChild);
            } catch (e) {
            }
        },
        invitationIframeId: "comm100-ifrInvitation",
        invitationDivId: "comm100-invitationDiv",
        overlayId: "comm100-overlay",
        cookieKey_v5: "comm100_",
        cookieKey_v6: "Comm100_CC_Identity_" + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)),
        sessionCookieKey: "comm100_session_" + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)),
        guid_cookie_key: "comm100_guid2_" + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)),
        standby_id_cookie_key: "comm100standby_id" + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)),
        standby_session_cookie_key: "comm100standby_session" + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)),
        createFloatDiv: function () {
            var divId = 'comm100-float-button-' + $u.getId();
            div = $.createElement("DIV");
            div.id = divId;
            div.style.cssText = 'visibility:hidden;position:absolute;cursor:pointer;z-index:2147483637;';
            $.body.insertBefore(div, $.body.firstChild);
            return div;
        },
        backgroundImage: function (img) {
            return "url('" + img + "') no-repeat scroll 0% 0% transparent";
        },
        removeAd: function () {
            var ad = $$('comm100-powered-by');
            if (ad && ad.parentNode) {
                ad.parentNode.removeChild(ad);
            }
        },
        parse_query: function (d) {
            var s = '';
            for (var i = 0, len = d.length; i < len; i++) {
                var k = d[i][0], v = d[i][1];
                if ((v === null) || (typeof v === 'undefined')) continue;
                if (i > 0) s += '&';
                s += k + '=' + encodeURIComponent(v);
            }
            return s;
        },
        hide: function (id) {
            var e = $$(id);
            if (e) e.style.display = 'none';
        },
        show: function (id, display) {
            var e = $$(id);
            if (e) e.style.display = (display || '');
        },
        set_ele_size: function (e, sz) {
            if (e) {
                e.style.width = sz.w + 'px';
                e.style.height = sz.h + 'px';
            }
        },
        set_ele_pos: function (e, pos, sz) {
            e.style.bottom = pos.b + 'px';
            e.style.right = pos.r + 'px';
            e.style.width = sz.w + 'px';
            e.style.height = sz.h + 'px';
        },
        show_ele: function (e, display) {
            if (e) e.style.display = (display || '');
        },
        hide_ele: function (e) {
            if (e) e.style.display = 'none';
        },
        zero_size: function (e) {
            if (e) {
                e.style.width = 0;
                e.style.height = 0;
                e.style.border = 'none';
                if (e.id.length > 0) {
                    e.setAttribute('id', e.id + 'zero_size' + (new Date).getTime());
                }
                e.style.filter = 'alpha(opacity=0)';
                e.style.opacity = 0;
            }
        },
        addIframeLoadEvent: function (ifr, fnOnload) {
            if ((ifr == null) || (fnOnload == null)) return;

            if (ifr.attachEvent) {
                function onload() {
                    ifr.detachEvent('onload', onload);
                    fnOnload();
                }
                ifr.attachEvent('onload', onload);
            } else {
                ifr.onload = function () {
                    ifr.onload = null;
                    fnOnload();
                };
            }
        },
        add_protocol: function (url) {
            var protocol = 'http://';
            var i = comm100_server.indexOf('://'); //comm100_server's protoal is equal to livechat.ashx but may be different from heartbeat url which is always https.
            if (i > 0) {
                protocol = comm100_server.substring(0, i + 3);
            }

            if (/^https?:\/\//.test(url)) {
                return url.replace(/^https?:\/\//, protocol);
            } else {
                return protocol + url;
            }
        },
        get_image_url: function (siteId, img) {
            //img.a type
            //img.b id
            //img.c url
            var url = '';
            if (img.a == 0) {
                url = $u.add_protocol(img.c);
            } else {
                url = server + '/DBResource/DBImage.ashx?imgId=' + img.b + '&type=' + img.a + (img.a == 1 ? '' : '&siteId=' + siteId);
            }

            return url;
        },
        extract_size: function (text, defaultsz) {
            var match = function (reg) {
                var matches = $u.exec_all(reg, text);
                if (matches) return parseInt(matches[matches.length - 1][1]);
                else return 0;
            }
            //return {w:match(/width\s*:\s*(\d+)px/)||400,h:match(/height\s*:\s*(\d+)px/)||450};
            return {
                w: match(/;width\s*:\s*-?(\d+)px/g) || defaultsz.w,
                h: match(/;height\s*:\s*-?(\d+)px/g) || defaultsz.h
            };
        },
        exec_all: function (re, str) {
            var matches = [];
            str.replace(re, function () {
                var arr = ([]).slice.call(arguments, 0);
                arr.splice(-2);
                matches.push(arr);
            });
            return matches.length ? matches : null;
        },
        quote: function (s) {
            return s.replace(/"/g, '\\"');
        },

        array_tojson: function (arr, fnobj) {
            if (array_empty(arr)) return '[]';

            var d = "[";
            for (var i = 0, len = arr.length; i < len; i++) {
                if (i > 0) d += ",";

                var o = arr[i];
                d += fnobj(o);
            }
            d += "]";
            return d;
        },

        set_transform: function (style, transform) {
            style.transform = transform;

            var vendors = ['webkit', 'moz', 'o', 'ms']
            for (var i = 0, len = vendors.length; i < len; i++) {
                style[vendors[i] + 'Transform'] = transform;
            }
        }
    };
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? $u.ie = s[1] : (s = ua.match(/se 2.x/)) ? $u.sougou = true : 0;
    //    $u.safari = (ua.match(/safari/)&&!ua.match(/chrome/)) ? 1 : 0;
    //    $u.firefox_mac = ua.match(/macintosh.*firefox/);
    $u.mobile = /mobile|android|ipad/i.test(ua);

    var $e = (function () {
        var ifrbox, ifr, dh;
        var ck = 'comm100_embedded_' + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup));
        var ck2 = 'comm100_embedded_m_' + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup));
        var ck_popupped = 'comm100_embedded_ispopup_' + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup));
        var window_size = { w: 400, h: 450 };
        //var isInChat = false; //true if waiting for chat or chatting
        var planId = 0;
        var last_status = $u.getCookie(ck);
        var on_end_chat = null;
        var isChatStarted = false;


        function replace_size(text, sz) {
            text = text.replace(/;width\s*:\s*-?(\d+)px/g, ';width:' + sz.w + 'px');
            text = text.replace(/;height\s*:\s*-?(\d+)px/g, ';height:' + sz.h + 'px');
            return text;
        }

        function remove_pos(text) {
            text = text.replace(/;left\s*:\s*-?(\d+)[px%\s]*;?/g, ';');
            text = text.replace(/;top\s*:\s*-?(\d+)[px%\s]*;?/g, ';');
            text = text.replace(/;right\s*:\s*-?(\d+)[px%\s]*;?/g, ';');
            text = text.replace(/;bottom\s*:\s*-?(\d+)[px%\s]*;?/g, ';');
            return text;
        }

        function get_border_size(text) {
            var dir = ['top', 'right', 'bottom', 'left'];
            var widths = [0, 0, 0, 0];

            function getpx(px) {
                var m = /([0-9]*)px/.exec(px);
                if (m)
                    return parseInt(m[1]);
                if (/\b0\b/.test(px)) {
                    return 0;
                }

                if (/\bnone\b/.test(px)) {
                    return 0;
                }

                return null;
            }

            function split2pxes(text) {
                var pxes = text.split(/\s/);
                var pos = [0, 0, 0, 1];  //copy index if not exists;
                for (var i = pxes.length; i < 4; i++) {
                    pxes.push(pxes[pos[i]]);
                }
                return pxes;
            }

            var matches = $u.exec_all(/([^:\s]*)\s*:\s*([^;]*);?/g, text);
            for (var i = 0; i < matches.length; i++) {
                var k, v;
                k = matches[i][1];
                v = matches[i][2];
                var flag = false;
                for (var j = 0; j < dir.length; j++) {
                    if (k.indexOf('border-' + dir[j]) != -1) {
                        var px = getpx(v);
                        if (px != null) {
                            widths[j] = px;
                            flag = true;
                        }
                    }
                }

                if (!flag) {
                    if (k.indexOf('border-width') != -1) {
                        var pxes = split2pxes(v);

                        for (var j = 0; j < pxes.length; j++) {
                            var px = getpx(pxes[j]);
                            if (px != null) widths[j] = px;
                        }
                    } else {
                        if (/^\s*border\s*$/.test(k)) {
                            var px = getpx(v);
                            if (px != null) {
                                for (var j = 0; j < widths.length; j++) {
                                    widths[j] = px;
                                }
                            }
                        }
                    }
                }
            }

            return { w: widths[1] + widths[3], h: widths[0] + widths[2] }
        }

        function end_chat(success) {
            on_end_chat = success;
            $x.postMessage('endchat', ifr.src, ifr.contentWindow);
        }

        function show_minimized(css) {
            $u.hide_ele(dh);
            ifrbox.style.cssText = css;
        }

        function close() {
            $x.receiveMessage(null, server);
            if (ifrbox != null) {

                if ($u.ie == 8) {
                    //fix IE8 missing custom @font-face bug.
                    $u.zero_size(ifrbox);
                    $u.zero_size(dh);
                } else {
                    $.body.removeChild(ifrbox);
                }
            }

            ifrbox = null;
            ifr = null;
            dh = null;

            $u.setSessionCookie(ck, '');
            isChatStarted = false;
            $n.flashTitle('');//stop flash
            last_status = '';
        }

        function open(query, pId, invitationMessage) {
            var url = window_url + "?embeddedwindow=1&" + query;
            var b = get_button(pId);
            var frame_css = b.j;
            var minimized_frame_css = b.aa;
            window_size = $u.extract_size(frame_css, { w: 400, h: 450 });
            frame_css = replace_size(frame_css, window_size);

            var lastMessageId = $u.getCookie(ck2);
            if (lastMessageId) {
                url += '&lastMessageId=' + lastMessageId;
            }
            isChatStarted = true;
            if (ifr != null) {
                $x.postMessage('restore', ifr.src, ifr.contentWindow);
                return;
            }

            planId = pId;

            function show_chat_button() {
                var b = get_button(planId);
                if (!(b && $$(b.div_id))) {
                    //??div???????
                    b = get_button($c.main_code_plan);
                }

                $u.show(b.div_id);
                //?????
                heartbeat();
            }

            // IE9 ????????????iframe?onload??,????chat window??postMessage????????chat window??load???
            var onEmbeddedWindowLoaded = function () { };

            if (ifrbox == null) {
                ifrbox = $.createElement('SPAN');
                ifrbox.setAttribute('id', 'comm100-chat-window');
                ifrbox.style.cssText = frame_css + ';display:none;overflow:hidden;';

                ifr = $.createElement('IFRAME');
                ifr.setAttribute('frameBorder', '0');
                ifr.style.cssText = 'height:100%;width:100%;';

                $.body.insertBefore(ifrbox, $.body.firstChild);
                ifrbox.appendChild(ifr);

                $x.receiveMessage(function (message) {
                    var d = message.data;
                    //console.log("receive message:" + d);
                    if (d == 'minimize') {
                        show_minimized(minimized_frame_css);

                        if ($u.ie == 6) {
                            $u.f.stopFloat(ifrbox);
                        }

                        var last = $u.getCookie(ck);
                        if (!!last) {
                            $u.setSessionCookie(ck, 'm');
                        }
                    } else if (d == 'restore') {
                        ifrbox.style.cssText = frame_css;
                        $u.set_ele_size(ifrbox, window_size);

                        $u.show_ele(dh, 'block');

                        var last = $u.getCookie(ck);
                        if (!!last) {
                            $u.setSessionCookie(ck, 'n');
                        }
                    } else if (d == 'close') {
                        close();
                        show_chat_button();
                    } else if (d == 'waitingforchat') {
                        var last = $u.getCookie(ck);
                        if (!last) {
                            $u.setSessionCookie(ck, 'n');
                        }
                    } else if (d == 'chat') {
                        $ga.send('Chat');
                    } else if (d == 'endchat') {
                        $u.setSessionCookie(ck, '');
                        $n.flashTitle('');//stop flash
                        isChatStarted = false;
                        if (on_end_chat)
                            on_end_chat();
                    } else if (d == 'restart') {
                        close();

                        if ($c.dynamic) {
                            planId = $c.main_code_plan
                        }

                        var p = $u.parse_query([["planId", planId]
                            , ["siteId", $c.site_id]
                            , ["visitorId", $v.id]
                            , ["visitorGuid", $v.guid]
                            , ["pageTitle", $u.getTruncatedTitle()]
                            , ['pageUrl', $.location]
                            , ['userId', $c.user_id]
                            , ['newurl', 1]
                            , ['r', $u.getRandom()]
                            , ['dynamic', $c.dynamic]
                            , ['chatGroup', chatGroup === null ? '' : chatGroup]
                        ]);

                        $e.open(p, planId);
                        return;
                    } else if (d.indexOf('lastMessageId') == 0) {
                        $u.setSessionCookie(ck2, d.replace('lastMessageId_', ''));
                    } else if (d.indexOf('notify') == 0) {
                        var msg = d.replace('notify_', '');
                        $n.flashTitle(msg);
                    } else if (d == 'prechat') {
                        $ga.send('Pre-chat');
                    } else if (d == 'offlinemessage') {
                        $ga.send('Offline-Message');
                    } else if (d == 'popup') {
                        for (var i = $c.chat_buttons.length - 1; i >= 0; i--) {
                            var b = $c.chat_buttons[i];
                            b.h = 0;
                        }
                        $u.setSessionCookie(ck_popupped, '1');
                        close();
                        show_chat_button();
                    } else if (d == 'invMessage') {
                        if ($u.getCookie(ck) != 'i') {
                            $u.setSessionCookie(ck, '');
                        }
                        $x.postMessage('invMessage:' + invitationMessage, ifr.src, ifr.contentWindow);
                        $u.setSessionCookie(ck_popupped, '0');
                    } else if (d == 'refuse') {
                        close();
                        $i.refuse(null);
                        show_chat_button();
                    } else if (d == 'accept') {
                        $u.setSessionCookie(ck, 'n');
                    } else if (d.indexOf('frameCSS_') == 0) {
                        ifrbox.style.cssText = d.replace('frameCSS_', '') + ';display:' + ifrbox.style.display;
                    } else if (d == 'loaded') {
                        onEmbeddedWindowLoaded();
                        //sso??????loaded???????,???????
                        onEmbeddedWindowLoaded = function () { };
                    } else if (d.indexOf('resize_') == 0) {
                        var size = JSON.parse(d.replace('resize_', ''));
                        window_size.w += size.width;
                        window_size.h += size.height;
                        $u.set_ele_size(ifrbox, window_size);
                    }
                }, server);

                dh = $.createElement('div');
                dh.setAttribute('id', 'comm100-chat-window-drag');
                dh.style.cssText = 'display:none;cursor:move;z-index:2147483639;background-color:rgba(0,0,0,0);position:absolute;left:-60px;top:0;width:100%;height:24px;';
                ifrbox.appendChild(dh);
                $d.draggable(dh, ifrbox);
            }

            if (last_status == 'm') {
                onEmbeddedWindowLoaded = function () {
                    show_minimized(minimized_frame_css);

                    if (ifr == null) {
                        return;
                    }

                    $x.postMessage('minimize', ifr.src, ifr.contentWindow);

                    setTimeout(function () {
                        $u.show_ele(ifrbox, 'block');
                    }, 100);
                };
            } else {
                var ifrLoaded = false;
                var loadingPlayed = false;
                var loadingbox = null;

                function displayEmbeddedWindow() {
                    if (ifrLoaded && loadingPlayed) {
                        if (loadingbox) {
                            $.body.removeChild(loadingbox);
                        }

                        $u.show_ele(ifrbox);
                        $u.show_ele(dh, 'block');

                        _onChatWindowLoaded();
                    }
                }

                if ($u.f.supportFixed()) {
                    loadingbox = $.createElement('SPAN');
                    var sz = get_border_size(frame_css);
                    sz.w += window_size.w;
                    sz.h += window_size.h;
                    loadingbox.style.cssText = replace_size(remove_zindex(frame_css), sz) + ';pointer-events:none;box-shadow:none;border:none;z-index:2147483639;';
                    $.body.insertBefore(loadingbox, $.body.firstChild);

                    _onChatWindowLoadBegin();
                    if (!hideLoadingAnimation) {
                        createLoadingIframe(function (_loading) {
                            var _height = 100;
                            $u.show_ele(loadingbox, 'block');

                            var timer = setInterval(function () {
                                _height = _height * 6 / 8.0;
                                if (_height > 2) {
                                    _loading.style.height = (100 - _height) + '%';
                                } else {
                                    clearInterval(timer);
                                    loadingPlayed = true;
                                    displayEmbeddedWindow();
                                }
                            }, 50);
                        }, b.i, frame_css, loadingbox);
                    } else {
                        loadingPlayed = true;
                    }
                } else {
                    loadingPlayed = true;
                }

                onEmbeddedWindowLoaded = function () {
                    ifrLoaded = true;
                    displayEmbeddedWindow();
                };
            }

            ifr.src = url;
        }

        function getIframeDoc(ifr_ele) {
            var ifr_doc = ifr_ele.document;

            if (ifr_ele.contentDocument) {
                ifr_doc = ifr_ele.contentDocument;
            }
            else if (ifr_ele.contentWindow) {
                ifr_doc = ifr_ele.contentWindow.document;
            }

            return ifr_doc;
        }
        function remove_zindex(text) {
            return text.replace(/z-index\s:\s\d+/, '');
        }

        function createLoadingIframe(fnDone, bg, frame_css, p) {
            var loading = $.createElement('IFRAME');
            loading.src = 'javascript:false';
            loading.setAttribute('frameborder', '0');

            if (p) {
                loading.style.cssText = frame_css + ';position:absolute;left:0;right:0;bottom:0;height:0%;'
                p.appendChild(loading);
            } else {
                loading.style.cssText = frame_css;
                $.body.insertBefore(loading, $.body.firstChild);
            }

            var doc = getIframeDoc(loading);
            doc.open();
            var html = '<!doctype html><html><head><meta charset="utf-8">'
                + '<style type="text/css">body,html{width:100%;height:100%;margin:0;padding:0;overflow:hidden;}</style>'
                + '</head><body style="background:white;border-top:solid ' + bg + ' 24px;">'
                + '<img style="position:absolute;display:block;z-index:1;top:120px;left:50%;margin-left:-16px;" src="' + server + '/images/loading-large.gif"/>'
                + '</body></html>';
            doc.writeln(html);
            doc.close();
            if (fnDone)
                fnDone(loading);
            return loading;
        }

        var hideLoadingAnimation = false;
        return {
            'open': open,
            'end_chat': end_chat,
            'close': close,
            'ifLastOpened': function () {
                return !!last_status;
            },
            'ifManuallyInvitedAndDirectlyChat': function () {
                return last_status === 'i';
            },
            'ispopupped': function () {
                return $u.getCookie(ck_popupped) == '1';
            },
            'hideLoadingAnimation': function (b) {
                hideLoadingAnimation = b;
            },
            'isChatStarted': function () { return isChatStarted; }
        };
    })();

    var $i = {
        siteId: $c.site_id,
        source: 1,   //auto invitation or manual invitation
        autoInvId: 0,
        init: function () {
            if (!$i.div) {
                $i.div = $.createElement("DIV");
                $i.div.style.cssText = 'visibility:hidden;position:fixed;z-index:2147483639;width:auto;height:auto;overflow:hidden;';
                $.body.insertBefore($i.div, $.body.firstChild);
            }
            return $i.div;
        },
        show_window: function (code_plan, source, source_id, msg) {
            // open chat window & register callback message
            if (!$e.isChatStarted() && !$i.isShowing) {
                $i.source = source;
                $i.autoInvId = source_id;

                // for manual invitation, it's allowed to close the window and reopen it (i.e. force to restart the chat, even when previous
                // chat window not closed)
                // for auto invitation, do nothing, if window is already opened
                if (source == 2) $e.close();
                open_chat_window(null, code_plan, source, source_id, msg, false, null, false);
            }
        },
        start_chat: function (code_plan, source_id, msg, guid) {
            if (!$e.isChatStarted() && !$i.isShowing) {
                $i.source = 2; //manual invitation
                $i.autoInvId = 0;

                $u.setSessionCookie('comm100_embedded_' + $c.site_id + (chatGroup === null ? "" : ("_" + chatGroup)), 'i');
                $e.close();
                open_chat_window(null, code_plan, 2, source_id, msg, true, guid, false);
            }
        },
        show_mobile: function (html) {
            if ($i.div || $i.isShowing || $e.isChatStarted()) return;
            $i.div = document.createElement('div');
            $i.div.id = 'Comm100-mobile-invitation';
            $i.div.style.cssText = 'position:absolute;z-index:2147483639;width:auto;height:auto;overflow:hidden;top:0px;bottom:0px;left:0px;right:0px;font-family:"Lucida Grande", "Lucida Sans Unicode", Arial, Sans-serif;background-color:rgba(0,0,0,.65);';
            $.body.insertBefore($i.div, $.body.firstChild);
            $i.div.innerHTML = html;
            $i.div.style.display = "";
            $i.div.style.width = $i.div.style.height = "auto";
            var height = document.getElementById('Comm100-mobile-invitation-content').getBoundingClientRect().height;
            document.getElementById('Comm100-mobile-invitation-content').style.marginTop = height / -2 + 'px';
            $i.isShowing = true;

            //percent width
            var $invcontent = $$('Comm100-mobile-invitation-content');
            $invcontent.style.boxSizing = 'border-box';
            $invcontent.style.width = '88%';
            $invcontent.style.maxWidth = '380px';
            $u.set_transform($invcontent.style, 'translate(-50%,-50%)');
            $invcontent.style.marginLeft = 0;
            $invcontent.style.marginTop = 0;
            [].forEach.call($invcontent.childNodes, function (n) { n.style.width = 'auto'; });
            return;
        },
        hide_mobile: function (source, autoInvId) {
            document.body.removeChild($i.div);
            $i.div = null;
            $i.isShowing = false;
            send_refuse_inv(source, autoInvId);
        },
        show: function (html, pos, overlay, isMove, sound) {
            var siteId = $c.site_id;
            $l({ pos: pos, content: html }, "show invitation", "black", true);
            if ($e.isChatStarted()) return;
            if (!$i.isShowing) {
                var div = $i.init();
                div.innerHTML = html;
                div.style.display = "";
                div.style.width = div.style.height = "auto";
                $i.isShowing = true;
                if (sound) {
                    $u.playSound(sound);
                }
                if (isMove && !$u.sougou) {
                    div.onmouseover = $i.pauseMove;
                    div.onmouseout = $i.continueMove;
                    $i.isStopMove = false;
                    div.style.left = pos.l + "px";
                    div.style.top = pos.t + "px";
                    $i.dir = 1;
                    $i.lastY = 0;
                    $u.imageComplete($$("invitationAcceptImg" + siteId), function (sz) {
                        $l(sz, "Accept Image Complete.");
                        div.style.width = sz.w + "px";
                        div.style.height = sz.h + "px";
                        div.style.visibility = "visible";
                        var ifr;
                        if ($u.ie == "6.0" && !$i.ifr) {
                            ifr = $i.ifr = $u.createIframe(10000);
                        }
                        if (ifr) {
                            ifr.style.display = "";
                            ifr.style.width = div.style.width;
                            ifr.style.height = div.style.height;
                        }
                        $i.move();
                    });
                } else {
                    div.onmouseover = null;
                    div.onmouseout = null;
                    $u.imageComplete($$("invitationAcceptImg" + siteId), function (sz) {
                        $l(sz, "Accept Image Complete.1");
                        $u.setPos(div, sz, pos);
                        div.style.width = sz.w + "px";
                        div.style.height = sz.h + "px";

                        var evt = { DOMElement: div };
                        _onBeforeImageInvitationDisplay(evt);
                        div.style.visibility = "visible";

                        if (overlay) {
                            $u.overlay.show(2147483638, $u.overlayId + siteId);
                        }

                        _onAfterImageInvitationDisplay(evt);
                    });
                }

                $ga.send('Invitation');
            }
        },
        pauseMove: function () {
            $i.isStopMove = true;
        },
        continueMove: function () {
            $i.isStopMove = false;
            $i.move();
        },
        move: function () {
            var div = $i.div;
            var ifr = $i.ifr;
            if (!div)
                return;
            $i.lastY = $i.lastY || 0;
            function doMove() {
                if ($i.isShowing && !$i.isStopMove) {
                    var l = 0;
                    var r = $u.f.clientSize().w - div.offsetWidth;
                    var x = $u.px2int(div.style.left);
                    if (x <= l) {
                        $i.dir = 1;
                    } else if (x >= r) {
                        $i.dir = -1;
                    }
                    div.style.left = x + $i.dir + "px";
                    var currentTop = $u.f.scrollPos().y;
                    var percent = 0.3 * (currentTop - $i.lastY);
                    percent = percent > 0 ? Math.ceil(percent) : Math.floor(percent);
                    $i.lastY += percent;
                    div.style.top = $u.px2int(div.style.top) + percent + "px";
                    if (ifr) {
                        ifr.style.left = div.style.left;
                        ifr.style.top = div.style.top;
                    }
                    $i.moveTimer = setTimeout(doMove, 20);
                }
            }
            doMove();
        },
        hide: function () {
            $l("hide invitation");
            if ($i.moveTimer) {
                clearTimeout($i.moveTimer);
                $i.moveTimer = null;
            }
            var div = $i.div;
            $u.f.stopFloat(div);
            if (div) {
                $i.div = null;
                $.body.removeChild(div);
            }
            var ifr = $i.ifr;
            if (ifr) {
                $i.ifr = null;
                $.body.removeChild(ifr);
            }
            $u.overlay.hide($u.overlayId + $c.site_id);
            setTimeout(function () {
                $i.isShowing = false;
            }, 2000);
        },
        accept: function (source, sourceId) {
            // for image invitation, both auto and manual invitation, will close the previous chat window and reopen it
            // this is different from chat window invitation, as for image invitation, client will need to click the
            // image first to see the chat window. If they click the image, we should believe that they want another
            // chat.
            $l("source: " + source + "source Id: " + sourceId, "accept invitation");
            if (typeof $i.acceptHandler == 'function') {
                $i.acceptHandler();
            }

            if (!$e.isChatStarted()) $e.close();

            open_chat_window(null, null, source, sourceId, undefined, undefined, undefined, false);

            $i.hide();
        },
        accept_mobile: function (source, sourceId) {
            open_chat_window(null, null, source, sourceId, undefined, undefined, undefined, false);
            document.body.removeChild($i.div);
            $i.div = null;
            $i.isShowing = false;
        },
        refuse: function (event, source, autoInvId) {
            $l("", "refuse invitation");
            if (event) $u.stopPropagation(event);
            $i.isChatWindowInvited = false;
            $i.isShowing = false;
            send_refuse_inv(source || $i.source, autoInvId || $i.autoInvId);
            $i.hide();
        }
    };

    $c.inv = $i;

    var $t = {};
    (function ($t) {
        var dur;
        var dur_timer;
        var interval = 0;
        var tick_timer;
        var on_tick = function () { };

        function set_dur(config) {
            var c = config.shift();
            if (c) {
                dur = c.d * 1000;
                if (config.length > 0) {
                    dur_timer = setTimeout(function () {
                        set_dur(config);
                    }, c.t * 1000);
                }
            }
        }

        function stop(after) {
            if (after) {
                setTimeout(stop, after * 1000);
            } else {
                if (dur_timer) {
                    clearTimeout(dur_timer);
                    dur_timer = null;
                }
                if (tick_timer) {
                    clearTimeout(tick_timer);
                    tick_timer = null;
                }
            }
        }

        function set_interval(i) {
            interval = i;
        }

        function tick() {
            var t = dur;
            if (interval) t = interval * 1000;
            tick_timer = setTimeout(function () {
                on_tick && on_tick();
                tick();
            }, t);
        }

        $t.start = function (config, f) {
            $l(config);
            on_tick = f;
            set_dur(config);
            tick();
        };
        $t.set_interval = set_interval;
        $t.stop = stop;
    })($t);

    function get_plan_ids() {
        if ($c.dynamic) return $c.main_code_plan + '';

        var ids = [];
        var exists = {};
        for (var i = $c.chat_buttons.length - 1; i >= 0; i--) {
            var c = $c.chat_buttons[i].code_plan;

            if (!exists[c]) {
                ids.push(c);
                exists[c] = 1;
            }
        };

        if (!exists[$c.main_code_plan]) ids.push(c);

        return ids.join('_');
    }
    function get_local_visitor_id() {
        var oldvId = $u.getCookie($c.site_id);
        var oldvId2 = $u.getCookie($u.cookieKey_v5 + $c.site_id);
        var vId = $u.getCookie($u.cookieKey_v6);
        return vId ? vId : (oldvId2 ? oldvId2 : oldvId);
    }

    function page_visit(cvs) {
        var args = [['action', $u.actionType.pageVisit]
            , ['flash', $u.getFlashVersion()]
            , ['res', $u.getScrResolution()]
            , ['timezone', $u.getTimezoneOffset()]
            , ['planIds', get_plan_ids()]
            , ['pageTitle', $u.getTruncatedTitle()]
            , ['pageUrl', $.location]
            , ['referer', $.referrer]];

        if (cvs) {
            args.push(['cvs', custom_variables_tojson(cvs)]);
        }

        send_request(args);
    }

    function cb_page_visited(id, guid, session, hb_config, hb_offline, hb_stop_dur, plans, cvs, session_cookie, invs, enable_ga, dynamic_plan_id) {
        if (current_server != 0) {  //0?????,-1?1????????
            if (session_cookie) {
                $u.setSessionCookie($u.cookieKey_v6, id);
            } else {
                $u.setCookie($u.cookieKey_v6, id);
            }

            $u.setSessionCookie($u.sessionCookieKey, session);
            $u.setSessionCookie($u.guid_cookie_key, guid);
        } else {
            if (session_cookie) {
                $u.setSessionCookie($u.standby_id_cookie_key, id);
            } else {
                $u.setCookie($u.standby_session_cookie_key, id);
            }

            $u.setSessionCookie($u.standby_session_cookie_key, session);
            $u.setSessionCookie($u.guid_cookie_key, guid);
        }


        $v.id = id;
        $v.session = session;
        $v.guid = guid;

        if ($e.ispopupped()) {
            for (var i = 0; i < plans.length; i++) {
                plans[i].h = 0;
            }
        }

        $c.main_code_plan = dynamic_plan_id;

        if (cvs.length > 0)
            $c.custom_variable_helper.start_timer(cvs);

        render_chat_buttons(plans);


        show_autoinvs(invs);

        //handle heart beat
        $t.stop();   //guarantee not start more than once.

        $c.hb_offline = hb_offline;
        update_hb_rate();

        $t.start(hb_config || [{ t: 1, d: 30 }], heartbeat);

        if (hb_stop_dur) $t.stop(hb_stop_dur);  //stop after xxx seconds.

        $ga.enable(enable_ga);

        if ($c.onLiveChatCodeLoaded) {
            $c.onLiveChatCodeLoaded();
        }
    }

    function array_empty(arr) {
        return !arr || (arr.length == 0);
    }

    function update_hb_rate() {
        for (var i = $c.chat_buttons.length - 1; i >= 0; i--) {
            var b = $c.chat_buttons[i];
            if (b.o) {
                $t.set_interval(0); //online
                return;
            }
        }

        $t.set_interval($c.hb_offline);
    }

    function render_chat_buttons(plans) {
        var bs = $c.chat_buttons;
        if (array_empty(bs)) return;
        if (array_empty(plans)) return;

        var configs = {};
        for (var i = plans.length - 1; i >= 0; i--) {
            var c = plans[i];
            configs[c.code_plan] = c;
        }

        for (var i = 0, len = bs.length; i < len; i++) {
            var b = bs[i];
            b.code_plan = b.code_plan || $c.main_code_plan;   //dynamic code plan?code_plan????
            var c = configs[b.code_plan];
            if (c) {
                for (var k in c) b[k] = c[k];   //copy code plan config to button

                switch (b.t) {
                    case 0: //image
                        render_image_button(b);
                        break;
                    case 1: //text
                        render_text_button(b);
                        break;
                    case 2: //monitor
                        render_monitor_button(b);
                        break;
                    case 3: //float
                        render_float_button(b);
                        break;
                }

                hide_offline_button(b);

                if ($e.isChatStarted()) {
                    $u.hide(b.div_id);
                }
            }
        }
    }
    function render_monitor_button(b) {
        $u.hide(b.div_id);
    }
    function render_image_button(b) {
        var div = $$(b.div_id);
        if (!div) return;
        $u.show(b.div_id);
        var url = b.o ? $u.get_image_url($c.site_id, b.a) : $u.get_image_url($c.site_id, b.b);
        div.innerHTML = '<a href="#" onclick="Comm100API.open_chat_window(event, ' +
            b.code_plan + ');"><img id="' + b.div_id + 'img" src="' + url + '" style="border:none;" alt=""/></a>';

        if (b.h && $e.ifLastOpened() && !$e.ispopupped()) {
            var query = [["planId", b.code_plan]
                , ["siteId", $c.site_id]
                , ["visitorId", $v.id]
                , ["visitorGuid", $v.guid]
                , ["pageTitle", $u.getTruncatedTitle()]
                , ['pageUrl', $.location]
                , ['userId', $c.user_id]
                , ['newurl', 1]
                , ['r', $u.getRandom()]
                , ['chatGroup', chatGroup === null ? '' : chatGroup]
            ];
            if ($e.ifManuallyInvitedAndDirectlyChat()) {
                query.push(["source", 2]); // manual invitation & directly chat
                query.push(['embInv', 1]);
                query.push(['dirChat', 1]);
            } else {
                query.push(['dynamic', $c.dynamic]);
            }
            var p = $u.parse_query(query);
            $e.open(p, b.code_plan);
        }
    }
    function render_text_button(b) {
        var div = $$(b.div_id);
        if (!div) return;
        $u.show(b.div_id);
        div.innerHTML = '<a href="#" onclick="Comm100API.open_chat_window(event, ' + b.code_plan + ');">' + b.c + '</a>';

        if (b.h && $e.ifLastOpened() && !$e.ispopupped()) {
            var query = [["planId", b.code_plan]
                , ["siteId", $c.site_id]
                , ["visitorId", $v.id]
                , ["visitorGuid", $v.guid]
                , ["pageTitle", $u.getTruncatedTitle()]
                , ['pageUrl', $.location]
                , ['userId', $c.user_id]
                , ['newurl', 1]
                , ['r', $u.getRandom()]
                , ['chatGroup', chatGroup === null ? '' : chatGroup]
            ];
            if ($e.ifManuallyInvitedAndDirectlyChat()) {
                query.push(["source", 2]); // manual invitation & directly chat
                query.push(['embInv', 1]);
                query.push(['dirChat', 1]);
            } else {
                query.push(['dynamic', $c.dynamic]);
            }
            var p = $u.parse_query(query);
            $e.open(p, b.code_plan);
        }
    }
    function render_float_button(b) {
        $u.hide(b.div_id);
        $u.removeAd();

        var url = get_button_img(b);

        var div = $u.createFloatDiv();
        b.div_id = div.id;


        if (b.k && $u.mobile) {

            if (b.u === 0) {
                // mobile text button
                div.style.cssText = 'overflow:visible;position:fixed;left:50%;bottom:0;z-index:2147483637;';

                var divInner = $.createElement('div');
                divInner.id = b.div_id + '-inner';

                var css = 'cursor:pointer;position:relative;text-align:center;box-shadow: 0 2px 25px rgba(0,0,0,0.2);font-weight:bold;bottom:0;left:-50%;border-radius:5px 5px 0 0;height:44px;line-height:44px;font-size:20px;padding:0 35px;white-space:nowrap;';
                css += 'background-color:' + b.n + ';';
                css += 'color:' + b.q;
                divInner.style.cssText = css;
                divInner.innerHTML = b.o ? b.l : b.m;

                div.appendChild(divInner);
                divInner.onclick = function (e) { Comm100API.open_chat_window(e, b.code_plan); };
            } else {
                // mobile image button
                var src = server + '/DBResource/DBImage.ashx?imgId=' + (b.o ? b.r : b.s) + '&type=2&siteId=' + $c.site_id;
                var img = $.createElement('IMG');
                img.src = src;
                $u.imageComplete(img, function (sz) {
                    div.appendChild(img);
                    div.style.visibility = 'visible';
                    $u.f.floatIt(div, sz, b.v);

                });
                img.onclick = function (e) { Comm100API.open_chat_window(e, b.code_plan); };
            }
        } else {
            div.onclick = function (e) { Comm100API.open_chat_window(e, b.code_plan); };
            div.style.background = $u.backgroundImage(url);
            var img = $.createElement("IMG");
            img.src = url;
            $u.imageComplete(img, function (sz) {
                div.style.visibility = 'visible';
                div.style.width = sz.w + "px";
                div.style.height = sz.h + "px";
                $u.f.floatIt(div, sz, b.p);

                if (b.h == 'opened') {
                    $u.hide_ele(div);
                }

                if (b.h && $e.ifLastOpened() && !$e.ispopupped()) {
                    $u.hide_ele(div);
                    var query = [["planId", b.code_plan]
                        , ["siteId", $c.site_id]
                        , ["visitorId", $v.id]
                        , ["visitorGuid", $v.guid]
                        , ['newurl', 1]
                        , ["pageTitle", $u.getTruncatedTitle()]
                        , ['pageUrl', $.location]
                        , ['userId', $c.user_id]
                        , ['r', $u.getRandom()]
                        , ['chatGroup', chatGroup === null ? '' : chatGroup]
                    ];
                    if ($e.ifManuallyInvitedAndDirectlyChat()) {
                        query.push(["source", 2]); // manual invitation & directly chat
                        query.push(['embInv', 1]);
                        query.push(['dirChat', 1]);
                    } else {
                        query.push(['dynamic', $c.dynamic]);
                    }
                    var p = $u.parse_query(query);
                    $e.open(p, b.code_plan);
                }
            });
        }
    }
    function get_button(code_plan) {
        for (var i = $c.chat_buttons.length - 1; i >= 0; i--) {
            var b = $c.chat_buttons[i];
            if (b.code_plan == code_plan) {
                return b;
            }
        }
        return null;
    }
    function remove_button(code_plan) {
        for (var i = $c.chat_buttons.length - 1; i >= 0; i--) {
            var b = $c.chat_buttons[i];
            if (b.code_plan == code_plan) {
                $c.chat_buttons.splice(i, 1);
                return;
            }
        }
    }
    function get_button_img(b) {
        return b.o ? $u.get_image_url($c.site_id, b.a) : $u.get_image_url($c.site_id, b.b);
    }
    function open_chat_window(e, plan, source, source_id, msg, if_directly_chat, guid, dynamic) {
        $u.preventDefault(e);

        plan = plan || $c.main_code_plan;

        var b = get_button(plan);

        if (typeof b != undefined && b != null && !b.o
            && !b.e && b.f) {
            if (b.g) {
                window.open(b.f);
            } else {
                window.location.href = b.f;
            }
        } else {
            var p = $u.parse_query([["planId", plan]
                , ["siteId", $c.site_id]
                , ['dynamic', dynamic == null ? $c.dynamic : dynamic]
                , ["visitorId", $v.id]
                , ["visitorGuid", $v.guid]
                , ["source", source]
                , ["autoInvId", source_id]
                , ["pageTitle", $u.getTruncatedTitle()]
                , ['pageUrl', $.location]
                , ['userId', $c.user_id]
                , ['newurl', 1]
                , ['r', $u.getRandom()]
                , ['embInv', msg !== undefined ? 1 : 0]
                , ['dirChat', if_directly_chat ? 1 : 0]
                , ['guid', guid ? guid : '']
                , ['chatGroup', chatGroup === null ? '' : chatGroup]
            ]);

            if (!$u.mobile) {
                if (b.h || msg !== undefined) {
                    b.h = 'opened';
                    if (b.t == 3) $u.hide(b.div_id);
                    $e.open(p, plan, msg);
                } else {
                    if ($e.ispopupped()) {
                        p += '&popupfromembedded=1';
                    }

                    var sz = $u.extract_size(b.j, { w: 540, h: 560 });
                    $u.popupWindow(window_url + "?" + p, "Comm100_" + $c.site_id, sz.w, sz.h);
                }
            } else {
                window.open(window_url + "?" + p, "Comm100_" + $c.site_id);
            }
        }

        $i.hide();
        //??chat window?????heartbeat,??heartbeat???????????,??chat window?????code plan??
        setTimeout(heartbeat, 1000);
        return false;
    }

    function show_autoinv(inv) {
        setTimeout(function () {
            send_request([['action', $u.actionType.showAutoInvite]
                , ['invId', inv.a]]);
        }, inv.b * 1000);
    }
    function show_autoinvs(invs) {
        if (array_empty(invs)) return;

        for (var i = 0; i < invs.length; i++) {
            show_autoinv(invs[i]);
        }
    }

    function heartbeat() {
        callId = send_request([['action', $u.actionType.heartbeat]
            , ['planIds', get_plan_ids()]]);

        sending_requests[callId] = true;
        handle_timeout(callId)
    }
    function handle_timeout(callId) {
        setTimeout(function () {
            if (sending_requests[callId] != null) {
                //timeout
                delete sending_requests[callId];
                fault_count++;
            } else {
                fault_count = 0;
            }

            if (fault_count >= 4) {
                check_moderator();
            }
        }, 5000);
    }
    function hide_offline_button(b) {
        if (b.d && !b.o) {
            $u.hide(b.div_id);
            $u.removeAd();
            return true;
        } else {
            return false;
        }
    }
    // function hide_if_embedded_opened(b) {
    //     if (b.type==3) {
    //         if (b.h == 'opened') {
    //             $u.hide(b.div_id);
    //             return true;
    //         } else {
    //             $u.show(b.div_id);
    //             return false;
    //         }
    //     }

    //     return false;
    // }
    function update_button_status(b, online) {
        $l(online);

        if (!b) return;

        if (b.o !== online) {
            b.o = online;

            if (hide_offline_button(b)) return;

            if (b.t == 0) {
                var e = $$(b.div_id + "img");
                if (e) e.src = get_button_img(b);
            } else if (b.t == 3) {
                var e = $$(b.div_id);
                if (e) {
                    if (b.k && $u.mobile) {
                        if (b.u === 0) e.firstChild.innerHTML = b.o ? b.l : b.m;
                        else {
                            var img = e.lastChild;
                            var src = server + '/DBResource/DBImage.ashx?imgId=' + (b.o ? b.r : b.s) + '&type=2&siteId=' + $c.site_id;
                            img.src = src;
                            $u.imageComplete(img, function (sz) {
                                $u.f.floatIt(e, sz, b.v);
                            });
                        }
                    } else {
                        e.style.background = $u.backgroundImage(get_button_img(b));
                    }
                }

            }

            if (b.h != 'opened')
                $u.show(b.div_id);
        }
    }


    function cb_heartbeated(bs, inv) {
        for (var i = bs.length - 1; i >= 0; i--) {
            var b = bs[i];
            update_button_status(get_button(b.a), b.b);
        }

        update_hb_rate();
    }

    var $cvs = (function () {
        var old_cvs = [],
            diff_array = function (oldArray, newArray) {
                var ret = [];
                if (oldArray.length !== newArray.length) {
                    for (var i = 0; i < newArray.length; i += 1) {
                        if (newArray[i].value !== undefined) {
                            ret.push(newArray[i]);
                        }
                    }
                    return ret;
                    // return newArray.filter(function (node) { return node.value !== undefined; });
                }
                for (var i = oldArray.length - 1; i >= 0; i--) {
                    if (newArray[i].value !== undefined && newArray[i].value !== oldArray[i].value) {
                        ret.push(newArray[i]);
                    }
                }
                return ret;
            },
            i,
            send_request_in_range = function (diff) {
                if (diff.length > 1 && custom_variables_tojson(diff).length > 1000) {
                    send_request_in_range(diff.slice(0, diff.length / 2));
                    send_request_in_range(diff.slice(diff.length / 2));
                    return;
                }
                send_request([["action", $u.actionType.set_custom_variables], ["d", custom_variables_tojson(diff)], ["i", i]]);
            };
        return {
            set_custom_variables: function (cvs, if_not_match_autoinv) {
                $l(cvs);

                var diff = diff_array(old_cvs, cvs);
                if (diff.length !== 0)
                    send_request([["action", $u.actionType.set_custom_variables], ["d", custom_variables_tojson(diff)], ["i", if_not_match_autoinv ? 1 : 0]]);
                old_cvs = cvs;
            },
            find: function (cvs) {
                var res = $c.custom_variable_helper.find(cvs);
                old_cvs = res;
                return res;
            }
        }
    })();

    function custom_variables_tojson(arr) {
        return JSON.stringify(arr);
    }
    function send_refuse_inv(source, autoInvId) {
        send_request([['action', $u.actionType.refuseInvitation], ['source', source], ['autoInvId', autoInvId]]);
    }
    function manual_inv_showed() {
        send_request([["action", $u.actionType.manualInvitationShowed]]);
    }
    function send_request(p) {
        $v.guid = $v.guid || $u.getCookie($u.guid_cookie_key);

        p.unshift(['dynamic', $c.dynamic]);
        p.unshift(['planId', $c.main_code_plan]);
        p.unshift(['visitorId', $v.id]);
        p.unshift(['siteId', $c.site_id]);
        p.unshift(['visitorGuid', $v.guid]);
        if (chatGroup !== null) {
            p.unshift(['chatGroup', Comm100API.chatGroup]);
        }

        return $u.sendRequest(js_url, p);
    }
    function change_current_server(s) {
        current_server = s;
        if (s == 0) {  //standby
            server = comm100_standby_server;
            $v.id = $u.getCookie($u.standby_id_cookie_key);
            $v.session = $u.getCookie($u.standby_session_cookie_key);
        } else {
            server = comm100_server;
            $v.id = get_local_visitor_id();
            $v.session = $u.getCookie($u.sessionCookieKey);
        }
        js_url = server + '/livechat.ashx';
        window_url = server + '/chatwindow.aspx';

        $t.stop();

        if ($c.dynamic) {
            get_custom_variable_config();
        } else {
            page_visit();
        }
    }
    function cb_moderator(s) {
        if (s != current_server) {
            change_current_server(s);
        }
    }

    function check_moderator() {
        if (moderator_url === '') {
            change_current_server(1);
            return;
        }
        fault_count = 0;

        var callId = $u.sendRequest(moderator_url, [['action', 1], ['siteId', $c.site_id], ['r', (new Date).getTime()]]);

        sending_requests[callId] = true;
        setTimeout(function () {
            if (sending_requests[callId] != null) {
                delete sending_requests[callId];

                //check moderator timeout, use main server
                change_current_server(1);
            }
        }, 5000);
    }

    function change_code_plan(plan) {
        if ($c.main_code_plan == plan.code_plan) return;

        var cbold = get_button($c.main_code_plan) || {};
        if (cbold) {
            $u.hide(cbold.div_id);
            if (cbold.div_id.indexOf('comm100-float-button') != -1) {
                var e = $$(cbold.div_id);
                e.parentNode.removeChild(e);
            }
            remove_button($c.main_code_plan);
        }

        var cbnew = get_button(plan.code_plan);

        if (cbnew == null) {
            $c.chat_buttons.push({
                div_id: 'comm100-button-dynamic',
                code_plan: plan.code_plan
            });
        }

        $c.main_code_plan = plan.code_plan;
        render_chat_buttons([plan]);
    }

    function get_custom_variable_config() {
        send_request([['action', $u.actionType.get_custom_variable_config]]);
    }

    function cb_get_custom_variabe_config(cvs) {
        if (cvs.length > 0)
            $c.custom_variable_helper.start_timer(cvs);
        var findcvs = $cvs.find(cvs);
        var hasval = [];
        for (var i = 0; i < findcvs.length; i++) {
            var c = findcvs[i];
            if (c.value != undefined) {
                hasval.push(c)
            }
        }
        page_visit(hasval);
    }

    $c.setPrechatFields = function (fields) {
        var d = $u.array_tojson(fields, function (f) {
            return '{"b":"' + $u.quote(f.name) + '","c":"' + $u.quote(f.value) + '"}';
        });

        send_request([['action', $u.actionType.set_prechat_fields], ['d', d]]);
    };
    $c.setIfSkipPrechat = function (b) {
        send_request([['action', $u.actionType.set_if_skip_prechat], ['b', b ? '1' : '0']]);
    };
    $c.setCustomVariables = function (cvs) {
        $cvs.set_custom_variables(cvs, true);
    };
    $c.set_custom_variables = $cvs.set_custom_variables;
    $c.open_chat_window = open_chat_window;
    $c.page_visit = page_visit;
    $c.manual_inv_showed = manual_inv_showed;
    $c.show_autoinvs = show_autoinvs;

    //callbacks
    //TODO (Roy): ?callback????????,Comm100Callback,????????????,??callback??????????
    $c.a = cb_page_visited;
    $c.b = cb_heartbeated;
    $c.c = cb_moderator;
    $c.d = check_moderator;
    $c.e = change_code_plan;
    $c.f = cb_get_custom_variabe_config;
    $c.cb = function (c) {
        if (sending_requests[c] != null) {
            delete sending_requests[c];  //success
        }
        $u.removeRequest(c);
    };
    $c.stop_custom_variables = function () {
        $c.custom_variable_helper.stop_timer();
    };
    $c.ban = function () {
        $c.banned = true;
        $t.stop();
        $c.stop_custom_variables();
    };
    $c.end_chat = function (success) {
        $e.end_chat(success);
    };

    var _onChatWindowLoadBegin = function () { };
    $c.onChatWindowLoadBegin = function (callback) {
        if (typeof callback === 'function') {
            _onChatWindowLoadBegin = callback;
        }
    };

    var _onChatWindowLoaded = function () { };
    $c.onChatWindowLoaded = function (callback) {
        if (typeof callback === 'function') {
            _onChatWindowLoaded = callback;
        }
    };

    var _onChatWindowStatusChanged = function () { };
    $c.onChatWindowStatusChanged = function (callback) {
        if (typeof callback === 'function') {
            _onChatWindowStatusChanged = callback;
        }
    };

    var _onBeforeImageInvitationDisplay = function () { };
    $c.onBeforeImageInvitationDisplay = function (callback) {
        if (typeof callback === 'function') {
            _onBeforeImageInvitationDisplay = callback;
        }
    };

    var _onAfterImageInvitationDisplay = function () { };
    $c.onAfterImageInvitationDisplay = function (callback) {
        if (typeof callback === 'function') {
            _onAfterImageInvitationDisplay = callback;
        }
    };

    $c.setIfHideChatWindowLoadingAnimation = function (b) {
        $e.hideLoadingAnimation(!!b);
    };

    if (moderator_url) {
        check_moderator();
    } else {
        if ($c.dynamic) {
            get_custom_variable_config();
        } else {
            page_visit();
        }
    }

    $c.show_autoinvs = show_autoinvs;

    $c.loaded = true;
})(Comm100API);



//TODO (Roy): ??????Comm100API????
//??var f = new Function('return '+cv.expression);f();???????????????
Comm100API.custom_variable_helper = (function () {
    if (typeof Comm100API.custom_variable_helper !== 'undefined') {
        return Comm100API.custom_variable_helper;
    }

    var timer = null;

    function find(cvs) {
        var res = [], cv, obj;
        for (var i = 0; i < cvs.length; i += 1) {
            cv = cvs[i];
            try {
                var val = eval(cv.expression);
                if (val != null) val = val.toString();

                obj = {
                    'name': cv.name,
                    'value': val
                }
            } catch (e) {
                obj = {
                    'name': cv.name
                }
            } finally {
                res.push(obj);
            }
        }

        return res;
    }

    function start_timer(cvs) {
        stop_timer();

        Comm100API.set_custom_variables([]); // clean up
        timer = setInterval(function () {
            Comm100API.set_custom_variables(find(cvs));
        }, 1000);
    }

    function stop_timer() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    return {
        start_timer: start_timer,
        stop_timer: stop_timer,
        find: find
    };
})();

/*
 * Comm100 Live Chat
 * version: 8.2.1
 * compiled: 2017-03-28T20:18:30.255Z
 */
 
 
/*
 * Comm100 Live Chat
 * version: 1.0.0
 * compiled: 2017-03-30T18:15:48.675Z
 */
 
 