var CustomEvents = {};
function onBeforePostChatDisplay(paraFunc) {
    CustomEvents["beforePostChatDisplay"] = paraFunc;
}

function onAfterPostChatDisplay(paraFunc) {
    CustomEvents["afterPostChatDisplay"] = paraFunc;
}

function onBeforePreChatDisplay(paraFunc) {
    CustomEvents["beforePreChatDisplay"] = paraFunc;
}

function onAfterPreChatDisplay(paraFunc) {
    CustomEvents["afterPreChatDisplay"] = paraFunc;
}

function onBeforeOfflineMessageDisplay(paraFunc) {
    CustomEvents["beforeOfflineMessageDisplay"] = paraFunc;
}

function onAfterOfflineMessageDisplay(paraFunc) {
    CustomEvents["afterOfflineMessageDisplay"] = paraFunc;
}

function onBeforeChatDisplay(f) {
    CustomEvents["beforeChatDisplay"] = f;
}

function onAfterChatDisplay(f) {
    CustomEvents["afterChatDisplay"] = f;
}

function onChatQueueChanged(f) {
    CustomEvents["onChatQueueChanged"] = f;
}

function onChatEnded(f) {
    CustomEvents["onChatEnded"] = f;
}

function onOperatorJoinedChat(f) {
    CustomEvents["onOperatorJoinedChat"] = f;
}

function fireEvent(name, args) {
    var f = CustomEvents[name];
    if (typeof f == 'function') {
        f(args);
    }
}

function show_window(className) {
    var events = {
        "ui-prechat": "PreChat",
        "ui-postchat": "PostChat",
        "ui-offline": "OfflineMessage"
    }
    if (CustomEvents["before" + events[className] + "Display"] && typeof CustomEvents["before" + events[className] + "Display"] === "function")
    {
        CustomEvents["before" + events[className] + "Display"]();
    }
    replace_class(document.body, /ui-prechat|ui-offline|ui-login|ui-ban|ui-loading|ui-chatting|ui-chat-not-start|ui-postchat|ui-prelogin/i, className);
    if (CustomEvents["after" + events[className] + "Display"] && typeof CustomEvents["after" + events[className] + "Display"] === "function")
    { 
        CustomEvents["after" + events[className] + "Display"]();
    }
}

function onFieldChangeGenerator(getFields) {
    return function (change) {
        if (typeof change !== 'function') change = function () { };
        var fields = getFields();
        var func = function (event) {
            var domElementId = event.target.id;
            if (event.target.type === "checkbox" && event.target.id.indexOf("option") > 0
                || event.target.type === "radio" && event.target.id.indexOf("option") > 0) {
                domElementId = event.target.parentNode.parentNode.id;
            }
            
            for (var i = 0; i < fields.length; i += 1) {
                if (domElementId === fields[i].getDomElementId())
                    change(fields[i], fields[i].getValue());
            }
        };
        for (var i = 0; i < fields.length; ++i) {
            if (fields[i].getType() === field_type.stars) {
                document.getElementById(fields[i].getDomElementId()).onclick = (function () {
                    var id = fields[i].getDomElementId();
                    return function (event) {
                        window[id + '-stars-control'].onclick();
                        func({ target: { id: id } });
                    };
                }());
            } else {
                document.getElementById(fields[i].getDomElementId()).onchange = func;
            }
        }
    }
}

var PostChat = (function () {
    function submit(success, error) {
        // guarantee that error & success are function and save to call
        if (typeof error !== 'function') error = function () { };
        if (typeof success !== 'function') success = function () { };
        // should call error when code run into errors
        try {
            if (!chat_window.is_chat_ended()) {
                // should notify via error, when submit called before chat ends
                error('Chat is not ended.');
                return;
            }
            var postchat_data = get_fields_value('postchat-fields', init_data.postchat_fields);
        
            if (postchat_data == null) {
                error("Some field(s) required.");
                return;
            }
            postchat_data.chat_id = chatId;
            $('btn-submit-postchat').disabled = 'disabled';
            send_action(13, postchat_data, function (res) {
                try {
                    $('btn-submit-postchat').disabled = '';
                    if (res.c) {
                        // copied from Prechat part
                        error(res.e);
                        return;
                    }

                    show_window('ui-chat-not-start');

                    chat_content.add_system_message(languages_data.LanguagePostChatSuccess, true);
                    if (chat_window.is_chat_ended() && init_data.if_can_send_email && !chat_window.has_send_email_flag()) {
                        chat_window.show_send_email();
                    }
                    chat_window.set_has_rating_flag();//has_rating_flag = true;

                    chat_window.show_start_chat_again();
                    $('chat-content-bottom').style.height = '132px';
                    chat_content.scroll_to_bottom();
                    success();
                } catch (e) {
                    error(e);
                }
            });
        } catch (e) {
            error(e);
        }
    }
    function getFields() {
        return init_data.postchat_fields_forcustomer;
    }
    return {
        'submit': submit,
        'getDomElementId': function () {
            return "postchat-window";
        },
        'getFields': getFields,
        'onFieldChange': onFieldChangeGenerator(getFields)
    };
})();

var PreChat = (function () {
    function submit(success, error) {
        if (typeof error !== 'function') error = function () { };
        if (typeof success !== 'function') success = function () { };
        try {
            var prechat_data = get_fields_value('prechat-fields', init_data.prechat_fields);
            if (prechat_data === null) {
                error("Some field(s) required.");
                return;
            }
            prechat_data.nav_params = nav_params;
            if (prechat_data.TicketId === -1)
                prechat_data.TicketId = nav_params.ticket;

            $('btn-start-chat').disabled = 'disabled';
            show_window('ui-loading');

            send_action(visitor_action.submit_prechat, prechat_data, request_chat_handler(function (res) {
                prechatDone = true;
                xd.post_message('prechat');
                $('btn-start-chat').disabled = '';

                success();
            }, function (res) {
                prechatDone = true;
                $('btn-start-chat').disabled = '';

                error(res.e);
            }));

            chat_window.init_name_email(prechat_data.Name || '', prechat_data.Email || '');
            init_offline_fields_from_prechat(prechat_data);

        } catch (e) {
            error(e);
        }
    }
    function getFields() {
        return init_data.prechat_fields_forcustomer;
    }
    return {
        'submit': submit,
        'getFields': getFields,
        'getDomElementId': function () {
            return "prechat-window";
        },
        'onFieldChange': onFieldChangeGenerator(getFields)
    };
})();

var OfflineMessage = (function () {
    var errorFunc, successFunc;
    function submit(success, error) {
        errorFunc = typeof error === 'function' ? error : function () { };
        successFunc = typeof success === 'function' ? success : function () { };
        submit_offline_message(successFunc, errorFunc)
    }
    function getFields() {
        return init_data.offline_fields_forcustomer;
    }
    return {
        'submit': submit,
        'getFields': getFields,
        'getDomElementId': function () {
            return "offline-window";
        },
        'onFieldChange': onFieldChangeGenerator(getFields)
    };
})();

function goto_prechat() {
    init_social_meida();

    if (!is_blank('prechat-greeting')) {
		show_element('prechat-greeting', 'block');
	}
    show_window('ui-prechat');

    current_window = visitor_window.prechat;
    start_prechat_heartbeat();
    set_window_title(languages_data.LanguageTitlePreChatWindow);

    //embedded_window.restore();
    
	focus_first_input('prechat-window');
}

function goto_chat() {
    fireEvent('beforeChatDisplay');

	if (!is_blank('chat-greeting')) {
		show_element('chat-greeting', 'block');
		//make next system message same-sender
		chat_content.set_last_sender(null);
	}

    if (!chat_window.is_chatting()) {
        xd.post_message('waitingforchat');

        show_window('ui-chat-not-start');
        current_window = visitor_window.chat;
        chat_window.start();
    }

    fireEvent('afterChatDisplay');
}

function goto_offline() {
	if (!is_blank('offline-greeting')) {
		show_element('offline-greeting', 'block');
    }

    xd.post_message('endchat');

    if (init_data && languages_data.GotoOfflineMessageHTML) {
        var match = /<a.*href="([^"]+)">/.exec(languages_data.GotoOfflineMessageHTML.replace('chatwindow.aspx', 'chatwindowembedded.aspx'));
        if (match) {
            var url = match[1];
            window.top.location.href = url;
            return;
        }
    }

    show_window('ui-offline');
    if ($('chat-input').style.display === 'block') $('chat-input').style.display = 'none';

	focus_first_input('offline-window');

    current_window = visitor_window.offline;
    start_offline_heartbeat();
    change_chat_end_to_close();
    set_window_title(languages_data.LanguageTitleOfflineMessageWindow);

    if (!chat_window.is_chatting()) {
        chat_window.fillin_offline_message();
    }
}

function goto_ban() {
    xd.post_message('endchat');

    show_window('ui-ban');
    current_window = visitor_window.ban;
    stop_heartbeat();
    hide_element('chat-input');
}

function goto_postchat() {
	if (!is_blank('postchat-greeting')) {
		show_element('postchat-greeting', 'block');
	}

    show_window('ui-postchat');
	$('postchat-window').scrollTop = 0;
    focus_first_input('postchat-window');
    current_window = visitor_window.postchat;
}

function goto_prelogin() {
    show_window('ui-prelogin');
    current_window = visitor_window.prelogin;
    set_window_title(languages_data.LanguageTitlePreChatWindow);
}

function goto_window(w, rp) {
    switch (w) {
        case visitor_window.login:
            break;
        case visitor_window.prechat:
            goto_prechat();
            break;
        case visitor_window.chat:
            goto_chat();
            break;
        case visitor_window.offline:
            goto_offline();
            break;
        case visitor_window.ban:
            goto_ban();
            break;
        case visitor_window.prelogin:
            goto_prelogin();
            break;
        case visitor_window.redirect:
            window.location.href = rp;
            break;
        default:
            break;
    }
    hide_error();
}

function change_close_to_chat_end() {
    //replace_class($('btn-chat-close'), 'end-waiting', 'end-chat');
}

function change_chat_end_to_close() {
    //replace_class($('btn-chat-close'), 'end-chat', 'end-waiting');
}

function show_error(message) {
    if (!message) return;

    var eles = $$('error');
    for (var i = 0, len = eles.length; i < len; i++) {
        var ele = eles[i];
        set_text(ele, message);
        show_element(ele, 'inline-block');
    }
    if (current_window == visitor_window.chat) {
        set_text($('chat-window-error-content'), message);
        show_element('chat-window-error-box');
    }
}

function hide_error() {
    var eles = $$('error');
    for (var i = 0, len = eles.length; i < len; i++) {
        var ele = eles[i];
        hide_element(ele);
    }
    if (current_window == visitor_window.chat) {
        hide_element('chat-window-error-box');
    }
}