// 只用于和chat button所在的页面通信
var xd = function(){
    var targeturl;
    function getTargetUrl() {
        if (!targeturl) {
            if (nav_params.requesting_page_url) {
                targeturl = decodeURIComponent(nav_params.requesting_page_url);
            } else {
                targeturl = document.referrer;
            }

            targeturl = targeturl.replace(/([^:]+:\/\/[^\/]+).*/, '$1');
        }
        return targeturl;
    }

    var ret = {
        post_message : function(message) {
            window.parent.postMessage(message, /^file:\/\//i.test(getTargetUrl()) ? '*' : getTargetUrl());
        },
  
        receive_message : function(callback) {
            window.addEventListener('message', function (e) {
                if (e.origin === getTargetUrl()) {
                    callback(e);
                }
            });
        }
    };

	return is_popup_window ? empty_return(ret) : ret;
}();


var embedded_window = (function () {
    var message_number = 0;
    var last_message_id = 0;
    //var cookie_key = 'embedded_last_message_id_'+siteId;

    function popup() {
        xd.post_message('popup');

        var top = 110;
        if (screen.height < 800) {
            top = 50;
        }

        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return window.open(window.location.href.replace('embeddedwindow=1&', '').replace('&embInv=1', '')+'&popupfromembedded=1', 'comm100_popup_' + siteId, 'height=' + h + ',width=' + w + ',left=200,top=' + top + ',status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no');
    }

    function minimize() {
        xd.post_message('minimize');

        if (current_window == visitor_window.chat) {
            if (!chat_window.is_waiting_for_chat())
                notification(notification_type.chat, operator);
        }

        hide_element('main');
        show_element('embedded-window-minimized', 'block');
    }

    function restore() {
        xd.post_message('restore');

        hide_element('embedded-window-minimized');
        show_element('main', 'block');

        setTimeout(function () {
            chat_window.scroll_to_bottom();
            chat_window.focus_chat_input();
        }, 100);
    }

    function set_notification(text) {
        var ele = $('embedded-window-notification');
        if (ele) {
            set_text(ele, text);
        }
    }

    function notification(type, data) {
        switch (type) {
            case notification_type.waiting_for_chat:
                message_number = 0;
                operator = '';
                if (nav_params.embedded_invitation == "1") {
                    var content = languages_data.LanguageEmbeddedWindowChattingWithOperator
                        .replace('{operator}', init_data.operator_name)
                        .replace('{agent}', init_data.operator_name);
                    set_notification(content);
                } else {
                    set_notification(languages_data.LanguageEmbeddedWindowWaitingForChat);
                }
                break;
            case notification_type.chat:
                operator = data || operator;
                // cookie_key = 'embedded_last_message_id_'+siteId + '_' + chatId;
                if (cookie_last_message_id.contains(chatId + '_'))
                    last_message_id = parseInt(cookie_last_message_id.replace(chatId + '_', '')) || 0;

                if (operator) {
                    chat_content.update_invitation_message_sender(operator);

                    var content = languages_data.LanguageEmbeddedWindowChattingWithOperator
                        .replace('{operator}', operator)
                        .replace('{agent}', operator);
                    set_notification(content);
                }
                break;
            case notification_type.new_response:
                if (last_message_id < data) {
                    last_message_id = data;
                    message_number++;
                }
                break;
            case notification_type.chat_ended:
                message_number = 0;
                operator = '';
                set_notification(languages_data.LanguageEmbeddedWindowChatEnded);
                break;
        }
    }

    function restart() {
        xd.post_message('restart');
    }

    xd.receive_message(function (msg) {
        if (msg.data === 'minimize') {
            if (current_window != visitor_window.chat)
                xd.post_message('close');
            else
                minimize();
        } else if (msg.data === 'restore') {
            restore();
        } else if (msg.data === 'endchat') {
            chat_window.send_end_chat();
        } else if (typeof(msg.data) === 'string' && msg.data.indexOf('invMessage:') == 0) {
            var content = msg.data.substr(11, msg.data.length - 11);
            var sender = languages_data.LanguageOperatorDefaultName || "Agent";
            chat_content.add_invitation_message(
                sender,
                content,
                '/Date(' + (new Date).getTime() + ')/'
            );
            show_notification(content, sender);
        }
    });

    function flash_title(msg) {
        if (!chat_window.is_input_focus()) {
            msg = msg || '';
            xd.post_message('notify_' + msg);
        } else {
            xd.post_message('notify_');
        }
    }

    var operator = '';
    var timer_id = 0, timer_flag = false;
    timer_id = setInterval(function () {
        if (timer_flag) {
            if (message_number > 0) {
                var content = languages_data.LanguageEmbeddedWindowNewMessages.replace('{count}', message_number);
                set_notification(content);

                flash_title(content);
            } else {
                flash_title('');
            }
        } else {
            if (operator != '') {
                var content = languages_data.LanguageEmbeddedWindowChattingWithOperator
                        .replace('{operator}', operator)
                        .replace('{agent}', operator);
                set_notification(content);
            }
        }

        timer_flag = !timer_flag;
    }, 1000);

    var ret = {
        'minimize': function () {
            message_number = 0;
            // cookie.setSessionCookie(cookie_key, last_message_id, siteId);

            xd.post_message('lastMessageId_' + chatId + '_' + last_message_id);
            minimize();
        },
        'restore': restore,
        'notification': notification,
        'restart': restart,
        'stop_flash': function () {
            message_number = 0;
        },
        'popup': popup,
        'set_frame_css': function (framecss) {
            xd.post_message('frameCSS_'+framecss);
        },
        'loaded': function () {
            xd.post_message('loaded');
        },
        'resize': function (widthDiff, heightDiff) {
            var size = { width: widthDiff ? widthDiff : 0, height: heightDiff ? heightDiff : 0}
            xd.post_message('resize_' + JSON.stringify(size));
        }
    };

    return is_popup_window ? empty_return(ret) : ret;
})();


var dialog = (function () {
    function confirm(msg, fn_close) {
        show_element('popup-confirm-dialog', 'block');
        set_text($('confirm-message'), msg);

        $('confirm-yes').onclick = function() {
            close(this);
            fn_close();
        };
    }

    function info(msg, fn_close) {
        show_element('popup-info-dialog', 'block');
        set_text($('info-message'), msg);

        $('info-close').onclick = function() {
            close(this);
            if (fn_close) fn_close();
        };
    }

    function close(ele) {
        var p = ele.parentNode;
        while(p!=null && !has_class(p, 'popup-dialog')) {
            p = p.parentNode;
        }
        hide_element(p);
    }

    return {
        'confirm': confirm,
        'info': info,
        'close': close
    }
})();


//TODO: flag_window_closing for popup only
var flag_window_closing = false;
function close_window() {
    if (frequencyLimiter !== null && frequencyLimiter !== undefined) {
        frequencyLimiter.clear();
    }
	if (is_popup_window) {
		flag_window_closing = true;
		window.close();
		window.opener = null;
	} else {
		xd.post_message('close');
	}
}

function set_window_title(title) {
	if (!is_popup_window) {
		set_text($('embedded-window-title'), title);
	}

	flash_title.title = title;
	setTimeout(function() {
		document.title = title;
	}, 50);
}
