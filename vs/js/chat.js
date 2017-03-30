var notification_type = {
    'waiting_for_chat': 0,
    'chat': 1,
    'new_response': 2,
    'chat_ended': 3,
    'loaded': 4
};
var frequencyLimiter;
var error_timer;

var heartbeat_timer = null;
function stop_heartbeat() {
    if (heartbeat_timer != null) {
        clearInterval(heartbeat_timer);
        heartbeat_timer = null;
    }
}

function start_heartbeat(action, interval, success) {
    stop_heartbeat();

    heartbeat_timer = setInterval(function () {
        send_action(action, null, success);
    }, interval)
}

function start_prechat_heartbeat() {
    start_heartbeat(1, heartbeat_interval.prechat);
}

function start_chat_click() {
    PreChat.submit();
}

function chat_as_visitor_click() {
    sso_continue(false);
}

function sso_login_click() {
    //TODO
    //var data = {
    //    'ifLogin': true,  //iflogin
    //    'ssoInfo': nav_params.ssoInfo
    //};
    sso_continue(true);
}

function sso_continue(loginOrContinue) {
    nav_params.loginOrContinue = loginOrContinue;

    $('btn-start-chat').disabled = 'disabled';
    send_action(visitor_action.login_or_continue, nav_params, request_chat_handler(function () {
        $('btn-start-chat').disabled = '';
    }, function () {
        $('btn-start-chat').disabled = '';
    }));
}

function close_click() {
    if (current_window == visitor_window.chat) {
        if (chat_window.is_waiting_for_chat()) {
            chat_window.end_waiting();
        } else if (chat_window.is_chatting()) {
            chat_window.end_chat();
        } else if (chat_window.is_invited()) {
            chat_window.refuse_invitation();
        } else {
            close_window();
        }
    } else {
        prechat_offline_window_close_click();
    }
}

var prechatDone = (window.location.href.indexOf('prechatDone=1') != -1);

function try_enter_chat(param) {
    send_action(param && param.action_type ? param.action_type : 8, nav_params,
        request_chat_handler(function (data) {
            if (data.chat_id > 0) {
                if (param && param.onsuccess) param.onsuccess();
            }
        }),
        param && param.onerror ? param.onerror : null, prechatDone ? '&prechatDone=1' : '');
}

function start_system_processing(fn_chat_started) {
    start_heartbeat(visitor_action.heartbeat_for_system_processing, heartbeat_interval.chat, function (resp) {
        if (resp.w != visitor_window.chat || resp.chat_id > 0) {
            fn_chat_started(resp);
        }
    });
}

function set_frequency_limiter(args) {
    frequencyLimiter = args ? frequency_limit({
        VisitorMsgRestrictDuration: args[0],
        VisitorMsgRestrictCount: args[1],
        VisitorMsgRestrictTime: args[2],
        VisitorMsgRestrictRepeatCount: args[3]
    }) : (frequencyLimiter ? frequencyLimiter : null);
}

function request_chat_handler(fncomplete, fnerror) {
    return function (res) {
        if (res.c) {
            if (fnerror) fnerror(res);
            return;
        }

        function complete_request_chat(res) {
            if (res.chat_id > 0) {
                chatGuid = res.cg;
                chatId = res.chat_id;
                chat_window.start_chat_heartbeat();
            } else {
                goto_window(res.w, res.rp);
            }

            goto_window(res.w, res.rp);

            if (fncomplete) fncomplete(res);

        }

        if (res.w == visitor_window.chat) {
            init_data.attachment_max_size = res.attachment_max_size;
            init_data.lang_too_large_error = res.lang_too_large_error;
            init_data.attachmentDownloadToken = res.at;
            set_frequency_limiter(eval(res.fl));

            if (res.chat_greeting) {
                show_element('chat-greeting');
                $('chat-greeting').innerHTML = res.chat_greeting;
            }

            if (res.user_name) {
                $('rename-control').value = res.user_name;
            }
            if (res.user_email) {
                $('send-email-control').value = res.user_email;
            }
        }

        if (res.chat_id > 0) {
            complete_request_chat(res);
        } else {
            if (res.w != null && res.w != visitor_window.chat) {
                goto_window(res.w, res.rp);

                if (fncomplete) fncomplete(res);
                return;
            }

            start_system_processing(complete_request_chat);
        }
    }
}

var chat_window = (function () {
    var visitor_status = {
        waiting: 0,
        chatting: 1,
        chat_ended: 2,
        refused: 3,
        invited: 4,
        system_processing: 5 //system processing目前只有在source是自动邀请才有用
    };
    var current_visitor_status = nav_params.embedded_invitation === "1" ? visitor_status.invited : visitor_status.waiting;

    var visitor_typing_flag = false;
    function set_visitor_typing() {
        visitor_typing_flag = true;
    }

    var latest_received_message_id = -1;
    var message_queue = new (function () {
        this.max_cmd_id = 0;
        messages = [];
        this.add = function (code, content) {
            this.max_cmd_id++;
            messages.push({ 'c': code, 'a': content || '', 'd': this.max_cmd_id });
        };
        this.remove = function (cmd_id) {
            for (var i = 0, len = messages.length; i < len; i++) {
                if (messages[i].d == cmd_id) {
                    messages.splice(0, i + 1);
                    break;
                }
            }
        };
        this.get = function () {
            return messages.slice(0);
        };
        this.empty = function () {
            return messages.length == 0;
        };
        this.check_close_action = function () {
            for (var i = 0, len = messages.length; i < len; i++) {
                if (messages[i].c == message_code.visitor_end_chat) {
                    return true;
                }
            }
            return false;
        };
    });

    function start_chat_heartbeat() {
        stop_heartbeat();
        repeat_heartbeat();
    }

    function repeat_heartbeat() {
        if (visitor_typing_flag && current_visitor_status !== visitor_status.invited) {
            visitor_typing_flag = false;
            var val = '';
            if (init_data.if_show_typing_content) {
                val = $("chat-input-control").value || "";
                var len = val.length;
                if (len > 500)
                    val = $("chat-input-control").value.substr(0, 500) + "...";
            }
            if (init_data.if_credit_card_masking) {
                val = val.replace(/\d{3}(\d+)/, "******");
            }
            message_queue.add(message_code.visitor_is_typing, val);
        }

        if (current_visitor_status != visitor_status.banned) {
            send_action_chat_heartbeat();
            heartbeat_timer = setTimeout(repeat_heartbeat, heartbeat_interval.chat);
        }
    }

    function send_action_chat_heartbeat() {
        var input = { l: latest_received_message_id, m: message_queue.get(), cg: chatGuid };
        send_action(current_visitor_status == visitor_status.invited ? visitor_action.heartbeat_for_manual_invitation : visitor_action.heartbeat_for_chat, input, heartbeat_callback);
    }

    var secure_form = (function () {
        var _origin = '';
        var _forms = {};

        window.addEventListener('message', function (event) {
            if (event.origin.toLowerCase().indexOf('comm100.com') != -1) {
                try {
                    var data = JSON.parse(event.message || event.data);
                    var form = _forms[data.token] || { ele: null, handler: function () { } };
                    form.handler(form.ele, data);
                }
                catch (e) {
                }
            }
        });

        return {
            'receive_message': function (form, token, handler) {
                _forms[token] = {
                    ele: form,
                    handler: handler
                };
                _origin = location.href.replace(/([^:]+:\/\/[^\/]+).*/, '$1').toLowerCase();
            }
        }
    })();

    function start_chat() {
        input_focuse_flag = false;
        embedded_window.notification(notification_type.waiting_for_chat);

        set_window_title(languages_data.LanguageTitleChatWindow);
        if (current_visitor_status != visitor_status.invited) current_visitor_status = visitor_status.waiting;
        init_window_events();
        init_dropupload();

        notification.request_permission();

        focus_chat_input();
    }

    function init_dropupload() {
        if (dropupload.is_support() && init_data.if_can_send_file) {
            var uploadurl = server.get_url('/liveChatVisitorHandler.ashx?a=31&ajax=true&siteId=' + siteId + '&sessionId=' + sessionId + '&visitorId=' + visitorId + '&planId=' + planId);
            dropupload.init(uploadurl, 'drag-holder', init_data.attachment_max_size,
                function (f) {
                    set_text($('uploading-file-name'), f.name);
                    show_element('uploading-message');
                    chat_content.scroll_to_bottom();

                    $('btn-upload').className = 'disabled';
                },
                function (f) {
                    $('btn-upload').className = '';
                },
                function (err) {
                    if (err == 'toolarge') {
                        err = init_data.lang_too_large_error;
                    }
                    show_upload_error(err)
                },
                function () {
                    return current_visitor_status != visitor_status.chatting || has_class($('btn-upload'), 'disabled');
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener("dragover", function (e) { e = e || event; e.preventDefault(); }, false);
            window.addEventListener("drop", function (e) { e = e || event; e.preventDefault(); }, false);
        }
    }

    var visitor_typing_flag;
    function show_typing_prompt() {
        if ($('operator-typing').style.display == 'none') {
            show_element('operator-typing');
            chat_content.scroll_to_bottom();
        }
        hide_element('input-limited');
    }

    function hide_typing_prompt() {
        hide_element('operator-typing');
    }
    var operator_typing_timeout_timer;
    function handle_operator_typing(prompt) {
        show_typing_prompt(prompt, "");
        clearTimeout(operator_typing_timeout_timer);
        operator_typing_timeout_timer = setTimeout(function () {
            hide_typing_prompt();
        }, 10 * 1000);
    }

    function add_operator_url(sender, message, time) {
        var url = message;
        if (!message) {
            return;
        }
        if (!/^https:\/\/|http:\/\/|ftp:\/\//i.test(message)) {
            url = "http://" + message;
        }
        var urlMessage = '<a href="' + url + '" target="_blank" class="parsedlink">' + message + '</a>';

        chat_content.add_operator_message(sender, urlMessage, time, true);
        show_notification(message, sender)
    }

    function prompt_goto_offline(msg, linkText) {
        var div = document.createElement('div');
        var parts = msg.split(/{linkText}/gi);
        for (var i = 0; i < parts.length; i++) {
            var txt = document.createTextNode(parts[i]);
            div.appendChild(txt);

            if (i < parts.length - 1) {
                var a = document.createElement('A');
                set_text(a, init_data.goto_offline_link_text);
                if (init_data.offline_message_if_enable) {
                    a.onclick = enter_offline;
                } else {
                    a.href = init_data.offline_message_url;
                    a.target = '_blank'; //聊天窗口里的custom offline message总是打开新窗口的。
                }
                div.appendChild(a);
            }
        }

        div = chat_content.add_system_message_element(div);
        div.id = 'goto-offline-prompt';
    }

    function heartbeat_callback(response) {
        try {
            if (!response)
                return;
            if (current_visitor_status == visitor_status.chat_ended
                && (response.s == 1 || response.s == 2/*chatting or voice chatting*/)) {
                embedded_window.restart();
                return;
            }
            var error_code = response.c;
            if ((error_code == 1004 || error_code == 1036) && message_queue.check_close_action()) {
                current_visitor_status = visitor_status.chat_ended;
                close_window();
                return;
            }
            if (response.w) {
                close_window();
                return;
            }
            var msgs = response.m;
            if (!msgs) {
                return;
            }
            if (message_queue.empty() && msgs && msgs.length > 0) {
                var server_max = msgs[msgs.length - 1].d;
                if (message_queue.max_cmd_id < server_max)
                    message_queue.max_cmd_id = server_max;
            } else {
                message_queue.remove(response.x);
            }
            for (var i = 0, len = msgs.length; i < len; i++) {
                var m = msgs[i];
                var id = m.d;
                if (id > latest_received_message_id) {
                    latest_received_message_id = id;
                    handle_message(m.c, m.b, m.e, m.a, m.d, m.g, m.f);

                    if (current_visitor_status == visitor_status.chatting
                        || current_visitor_status == visitor_status.waiting
                        || current_visitor_status == visitor_status.chat_ended
                        || current_visitor_status == visitor_status.invited) {
                        heartbeat_interval.chat = 2000;
                    } else {
                        heartbeat_interval.chat = 20000;
                    }

                }
            }

            //update queue position
            if (response.q || response.qw) {
                update_queue(response.q, response.qw);
            }
        } catch (e) {
            handle_exception(e, "heartbeat_callback");
        }
    }

    var update_queue = (function () {
        var queue = {
            queuePosition: 0xfffff,
            estimatedWaitTime: -1
        };
        return function (position, wait_time) {
            var queue_changed = false;
            //new position can't be larger than current one
            if (position > 0 && queue.queuePosition > position) {
                queue_changed = true;
                queue.queuePosition = position;

                var ele = $('queue-position');
                if (ele) {
                    set_text(ele, position);
                }
            }

            if (queue.estimatedWaitTime != wait_time) {
                queue_changed = true;
                queue.estimatedWaitTime = wait_time;

                var ele = $('queue-estimated-wait-time');
                if (ele) {
                    var wait_time_min = Math.ceil(wait_time / 60);
                    set_text(ele, (wait_time_min < 1) ? 1 : wait_time_min);
                }
            }

            if (queue_changed) {
                fireEvent('onChatQueueChanged', queue);
            }
        }
    })();

    function handle_message(code, sender, time, message, message_id, translation, info) {
        try {
            if (message != null) {
                if (code == message_code.operator_add_text_message && ignore_first_operator_message_flag) {
                    ignore_first_operator_message_flag = false;
                    return;
                }

                if (code != message_code.operator_send_url
                    && code != message_code.visitor_add_text_message
                    && code != message_code.operator_add_text_message
                    && code != message_code.operator_is_typing
                    && code != message_code.visitor_is_typing
                    && code != message_code.operator_send_file
                    && code != message_code.visitor_send_file
                    && code != message_code.visitor_send_image
                    && code != message_code.operator_send_image
                    && code != message_code.system_prompt_offline_mesage
                    && code != message_code.visitor_request_chat
                    && code != message_code.operator_send_image_start
                    && code != message_code.operator_add_text_message_via_manual_invitation
                    && code != message_code.system_if_supportWebrtc) {
                    chat_content.add_system_message(message, true);
                }

                if (code == message_code.operator_add_text_message
                    || code == message_code.operator_add_text_message_via_manual_invitation
                    || code == message_code.operator_join_chat
                    || code == message_code.operator_send_file
                    || code == message_code.operator_send_url
                    || code == message_code.operator_accept_chat
                    || code == message_code.operator_refuse_chat
                    || code == message_code.system_visitor_not_respond
                    || code == message_code.operator_end_chat
                    || code == message_code.operator_promote_visitor_to_user
                    || code == message_code.operator_promote_visitor_to_contact
                    || code == message_code.operator_end_chat
                    || code == message_code.operator_transfer_chat_to_department
                    || code == message_code.operator_accept_transfer
                    || code == message_code.operator_refuse_transfer
                    || code == message_code.system_visitor_not_respond_and_end_chat) {

                    if (code != message_code.operator_accept_chat) {
                        embedded_window.notification(notification_type.new_response, message_id);
                        show_notification(message);
                    }

                    if (typeof sound != 'undefined') {
                        var lastPlaySoundMessageId_key = 'lastPlaySoundMessageId' + chatId;
                        var lastPlaySoundMessageId = parseInt(cookie.get(lastPlaySoundMessageId_key) || 0);

                        if (message_id > lastPlaySoundMessageId) {
                            cookie.setSessionCookie(lastPlaySoundMessageId_key, message_id);
                            sound.play();
                        }
                    }
                }
            }
            switch (code) {
                case message_code.visitor_request_chat:
                    handle_request_chat(message);
                    break;
                case message_code.visitor_end_chat:
                    clearTimeout(error_timer);
                    if (current_visitor_status == visitor_status.waiting) {
                        close_window();
                    }
                    break;
                case message_code.system_end_chat:
                    handle_end_chat();
                    break;
                case message_code.system_prompt_offline_mesage:
                    prompt_goto_offline(message, sender);
                    break;
                case message_code.visitor_add_text_message:
                    chat_content.add_visitor_message(sender, message, time, false, translation);
                    break;
                case message_code.visitor_set_email:
                    has_send_email_flag = true;
                    break;
                case message_code.operator_add_text_message:
                case message_code.operator_add_text_message_via_manual_invitation:
                    hide_typing_prompt();
                    chat_content.add_operator_message(sender, message, time, false, translation);
                    break;
                case message_code.operator_accept_chat:
                    handle_operator_accept_chat(info);
                    fireEvent('onOperatorJoinedChat');
                    break;
                case message_code.operator_refuse_chat:
                    embedded_window.notification(notification_type.chat_ended);
                    current_visitor_status = visitor_status.refused;
                    xd.post_message('endchat');
                    break;
                case message_code.operator_send_url:
                    add_operator_url(sender, message, time);
                    break;
                case message_code.operator_send_file:
                    handle_receive_file(sender, message, time, false);
                    break;
                case message_code.visitor_send_file:
                    handle_receive_file(sender, message, time, true);
                    break;
                case message_code.operator_is_typing:
                    handle_operator_typing(message);
                    break;
                case message_code.visitor_send_image:
                    chat_content.add_image(sender, message, time, true);
                    break;
                case message_code.operator_send_image:
                    chat_content.add_image(sender, message, time, false);
                    break;
                case message_code.operator_join_chat:
                    embedded_window.notification(notification_type.chat, sender);
                    fireEvent('onOperatorJoinedChat');
                    break;
                case message_code.visitor_get_operator_name:
                    embedded_window.notification(notification_type.chat, sender);
                    break;
                case message_code.operator_send_image_start:
                    chat_content.add_image_placeholder(sender, message, time);
                    break;
                case message_code.operator_request_secure_form:
                    if (sender != '') {
                        handle_operator_request_secure_form(sender, message);
                        show_notification(message);
                    }
                    break;
                case message_code.system_switch_to_offline:
                    var container = document.createElement('div');
                    container.innerHTML = languages_data.GotoOfflineMessageHTML;
                    var a = container.firstChild;
                    if (!!a.onclick) {
                        // switch to offline
                        goto_offline();
                        // add message in invitation
                        fillin_offline_message();
                    } else if (!!a.href) {
                        // open specific link, if should use that as offline form
                        if (!!a.target) {
                            window.open(a.href);
                        } else {
                            window.top.location.href = a.href;
                        }
                    }
                    break;
                case message_code.operator_recover_chat:
                    init_data.attachmentDownloadToken = sender;
                    break;
                default:
                    break;
            }
            if( MediaChat && (code >= message_code.agent_video_chat_request && code <= message_code.system_if_supportWebrtc)) {
                MediaChat.handleMessages(code, sender, time, message, message_id, info);
            }
        } catch (e) {
            handle_exception(e, 'handle_message');
        }
    }

    function handle_request_chat(message) {
        if (message) {
            var div = document.createElement('div');
            var parts = message.split(/(?={queuePosition}|{estimatedWaitTime})/gi);
            for (var i = 0; i < parts.length; i++) {
                var partsi = parts[i];

                var spanid;
                if (partsi.indexOf('{queuePosition}') == 0) {
                    spanid = 'queue-position';
                    partsi = partsi.substr(15);
                } else if (partsi.indexOf('{estimatedWaitTime}') == 0) {
                    spanid = 'queue-estimated-wait-time';
                    partsi = partsi.substr(19);
                }

                if (spanid) {
                    var span = document.createElement('span');
                    span.id = spanid;
                    div.appendChild(span);
                }

                var txt = document.createTextNode(partsi);
                div.appendChild(txt);
            }

            div = chat_content.add_system_message_element(div);
            div.id = 'system-queue-position';
        }
    }

    function handle_end_chat() {
        xd.post_message('endchat');
        if (frequencyLimiter !== null && frequencyLimiter !== undefined) {
            frequencyLimiter.clear();
        }
        embedded_window.notification(notification_type.chat_ended);

        current_visitor_status = visitor_status.chat_ended;
        $('chat-input-control').blur();
        $('chat-input').style.display = 'none';

        show_window('ui-chat-not-start');
        change_chat_end_to_close();
        hide_element('chat-input');
        $('chat-window').style.bottom = '30px';

        if ($$('secure-form').length > 0) {
            for (var i = 0; i < $$('secure-form').length; ++i) {
                var ele = $$('secure-form')[i];
                if (!has_class(ele, 'submit')) {
                    hide_element(ele);
                }
            }
        }

        if (init_data.if_can_rating) {
            if (!has_rating_flag) {
                goto_postchat();
            } else if (init_data.postchat_has_custom_fields) {
                postchat_setRatingDefault(rating_control.get_selected_rate(),
                    $('rating-comment-control').value);
                goto_postchat();
            } else {
                //不需要跳到post chat
                show_start_chat_again();
                $('chat-content-bottom').style.height = '72px';

                if (init_data.if_can_send_email && !has_send_email_flag)
                    show_send_email();
            }
        } else if (init_data.if_can_send_email && !has_send_email_flag) {
            show_start_chat_again();
            $('chat-content-bottom').style.height = '72px';
            show_send_email();
        } else {
            show_start_chat_again();
        }

        chat_content.scroll_to_bottom();

        fireEvent('onChatEnded');
    }

    function postchat_setRatingDefault(rate, comment) {
        for (var i = 0; i < init_data.postchat_fields.length; i++) {
            var f = init_data.postchat_fields[i];
            if (f.is_system) {
                if (f.type == field_type.stars) {
                    var c = window['field-' + f.id + '-stars-control'];
                    if (c) {
                        c.setValue(rate);
                    }
                } else if (f.type == field_type.textarea) {
                    $('field-' + f.id).value = comment;
                }
            }
        }
    }


    function handle_operator_accept_chat(info) {
        var operator_name = (info && info[1]) ? info[1] : '';
        xd.post_message('chat');

        current_visitor_status = visitor_status.chatting;
        show_window('ui-chatting');
        change_close_to_chat_end();
        hide_element('goto-offline-prompt');
        focus_chat_input();

        if (info && info.length > 0) {
            if (info[0]) {
                if (!!$('operator-avatar')) {
                    $('operator-avatar').src = info[0];
                }
            }
            if (operator_name !== '') {
                set_text($('operator-name'), operator_name);
            }
            if (info[2]) {
                if (!!$('operator-title')) {
                    set_text($('operator-title'), info[2]);
                }
            }
        }
    }

    function handle_receive_file(sender, message, time, is_visitor) {
        var args = sender.split(filter_charactor);
        var fileUrl = args[0];
        var fileName = args[1];
        var senderName = args[2];

        if (/.*[.](jpg|gif|jpeg|png)$/i.test(fileName)) {
            chat_content.add_image(sender, '', time, is_visitor)
        } else {
            var message = '<a href="' + fileUrl + '&attachmentDownloadToken=' + init_data.attachmentDownloadToken + '&visitorId=' + visitorId + '" target="_blank" class="attachment"><span class="attachment-name">' + fileName + '</span><span class="iconfont icon-attachment"></span></a>';
            if (is_visitor) {
                chat_content.add_visitor_message(senderName, message, time, true, "");
            } else {
                chat_content.add_operator_message(senderName, message, time, true, "");
            }
        }

        if (is_visitor) {
            hide_element('uploading-message');
        } else {
            show_notification(fileName, senderName)
        }
    }

    function send_text_message_if_enter(evt) {
        if (is_enter(evt)) {
            visitor_typing_flag = false;
            send_text_message();
            return false;
        }
        return true;
    }

    function add_text_message(message) {
        if (message.length > 10000) {
            dialog.info(languages_data.LanguagePromptInputLimit);
            return false;
        }

        if (frequencyLimiter && !frequencyLimiter.can_send_message())
            return false;

        if (init_data.if_credit_card_masking) {
            var saved_message = message;
            message = chat_content.mask_credit_card_number(message);
            message_queue.add(message_code.visitor_add_text_message, message);
            if (message != saved_message)
                message_queue.add(message_code.visitor_credit_card_masking, "");
        } else {
            message_queue.add(message_code.visitor_add_text_message, message);
        }

        return true;
    }

    var messages_before_accept_invitation = [];

    function send_text_message() {
        var ele = $('chat-input-control');
        if (current_visitor_status == visitor_status.chatting ||
            current_visitor_status == visitor_status.waiting ||
            current_visitor_status == visitor_status.system_processing) {
            if (!ele || ele.value == '')
                return;

            if (add_text_message(ele.value)) {
                if (current_visitor_status != visitor_status.system_processing) {
                    send_action_chat_heartbeat();
                }
                ele.value = '';
            }
        } else if (ele && ele.value != '' && current_visitor_status == visitor_status.invited) {
            if (nav_params.chat_source == chat_source.manual_invitation
                || nav_params.chat_source == chat_source.auto_invitation) {
                // 手动邀请，try_enter_chat没有完成时heartbeat发送消息服务器不会插入到聊天消息里
                //（heartbeat操作不会报错但是消息不会插入到聊天里），所以这里不能直接插入到message_queue里
                if (messages_before_accept_invitation.length > 0) {
                    messages_before_accept_invitation.push(ele.value)
                    ele.value = '';
                    // try_enter_chat只执行一次
                    return;
                }
                messages_before_accept_invitation.push(ele.value)
            }

            ele.value = '';

            current_visitor_status = nav_params.chat_source == chat_source.manual_invitation ? visitor_status.invited : visitor_status.system_processing;
            chatGuid = "";
            try_enter_chat({
                onsuccess: function () {
                    for (var i = 0; i < messages_before_accept_invitation.length; i++) {
                        add_text_message(messages_before_accept_invitation[i]);
                    }
                    messages_before_accept_invitation = [];

                    if (current_visitor_status == visitor_status.system_processing) {
                        current_visitor_status = visitor_status.waiting;
                    }

                    init_dropupload();

                    //如果不是直接开始聊天的情况，需要跳过第一条消息
                    chat_window.set_ignore_first_operator_message(nav_params.directly_chat == 0);

                    send_action_chat_heartbeat();

                    var list = $$('btn-popup');
                    for (var i = 0; i < list.length; i += 1) {
                        list[i].style.display = '';
                    }
                    xd.post_message('accept');
                },
                onerror: function (error) {
                    if (error === 314) { // switch server, hide previous invitation message
                        var elements = $$('chat-operator');
                        for (var i = 0; i < elements.length; i += 1) {
                            elements[i].parentNode.removeChild(elements[i]);
                        }
                    }
                },

                action_type: nav_params.directly_chat != 0 ? visitor_action.accept_manual_invitation : visitor_action.try_enter_chat
            });
        }
    }

    function end_chat() {
        dialog.confirm(languages_data.LanguagePromptStopChat, function () {
            message_queue.add(message_code.visitor_end_chat, "");
            // send_action_chat_heartbeat();
            error_timer = setTimeout(function () {
                current_visitor_status = visitor_status.chat_ended;
                close_window();
            }, 10 * 1000);
        });
    }

    function send_end_chat() {
        message_queue.add(message_code.visitor_end_chat, "");
        send_action_chat_heartbeat();
    }

    function end_waiting() {
        if (current_visitor_status == visitor_status.waiting) {
            message_queue.add(message_code.visitor_end_chat, "");
            // send_action_chat_heartbeat();
            error_timer = setTimeout(function () {
                current_visitor_status = visitor_status.chat_ended;
                close_window();
            }, 10 * 1000);
        } else {
            close_window();
        }
    }

    var input_focuse_flag = false;
    function focus_chat_input() {
        try {
            $('chat-input-control').focus();
        } catch (e) {
        }
    }

    function init_window_events(argument) {
        refresh_upload();

        window.onfocus = function (e) {
            if (!window.opera) {
                focus_chat_input();
                input_focuse_flag = true;
            }
        };
        $('chat-input-control').onfocus = function () {
            input_focuse_flag = true;

            embedded_window.stop_flash();
        };
        window.onblur = $('chat-input-control').onblur = function () {
            input_focuse_flag = false;
        };
        document.body.onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement;
            if (target.className.indexOf('icon') == -1) {
                hide_current_popup(true);
            }
        };
        $('popup-mask').onclick = function (event) {
            event = event || window.event;
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        };

        $('popup-close').onclick = function () {
            hide_current_popup(true);
        };
    }

    var current_popup = null;
    function show_popup(id) {
        if (current_popup) {
            hide_popup(current_popup);
        }
        current_popup = id;
        show_element(id, 'block');
        show_element(id + '-arrow', 'block');
        show_element('popup-mask', 'block');
    }

    function hide_popup(id, not_focus_input) {
        if (id && $(id).style.display == 'none') {
            return;
        }
        hide_element(id);
        hide_element(id + '-arrow');
        hide_element('popup-mask');
        if (!not_focus_input) {
            focus_chat_input();
        }
    }

    function hide_current_popup(not_focus_input) {
        hide_popup(current_popup, not_focus_input);
    }

    var sendFileForm;
    var uploading_flag = false;
    function refresh_upload() {
        $('btn-upload').className = '';

        uploadForm(upload_control_changed, function (form) {
            sendFileForm = form;
        });
    }

    function show_upload() {
        if (current_visitor_status != visitor_status.chatting)
            return;
        sendFileForm.clickUpload();
    }

    function upload_control_changed(name) {
        if (current_visitor_status != visitor_status.chatting)
            return;
        if (name == '') {
            return;
        }
        if (frequencyLimiter && !frequencyLimiter.can_send_message()) return;
        name = name.substring(name.lastIndexOf('\\') + 1);
        set_text($('uploading-file-name'), name);
        show_element('uploading-message');
        chat_content.scroll_to_bottom();

        sendFileForm.upload(server.get_url(
            '/liveChatVisitorHandler.ashx?a=31&siteId=' + siteId +
            '&sessionId=' + sessionId +
            '&visitorId=' + visitorId +
            '&planId=' + planId),
            function () {
                refresh_upload();
            },
            function (err) {
                show_upload_error(err);
            });

        $('btn-upload').className = 'disabled';
    }

    window['chatWindowHideUpload'] = function hide_upload() {
        $('btn-upload').className = '';
        send_action_chat_heartbeat();
    }

    function show_upload_error(err) {
        hide_element('uploading-message');
        set_text($('chat-window-error-content'), err);
        show_element('chat-window-error-box');
        refresh_upload();
    }

    window['chatWindowShowUploadError'] = show_upload_error;

    function cancel_upload() {
        hide_element('uploading-message');
        sendFileForm.stopUpload();
        refresh_upload();

        dropupload.cancel_upload();
    }

    function show_rating() {
        if (current_visitor_status != visitor_status.chatting && current_visitor_status != visitor_status.chat_ended)
            return;

        show_popup('popup-rating');
    }

    function hide_rating() {
        hide_popup('popup-rating');
    }

    var has_rating_flag = false;
    function submit_rating() {
        if (current_visitor_status != visitor_status.chatting && current_visitor_status != visitor_status.chat_ended)
            return;
        if (!$('btn-submit-rating').validated) return;
        var input = {
            'c': chatId,
            'g': rating_control.get_selected_rate(),
            'o': $('rating-comment-control').value
        };
        $('btn-submit-rating').validated = false;
        send_action(4, input, function (res) {
            $('btn-submit-rating').validated = true;
            if (!res.c) {
                hide_rating();
                chat_content.add_system_message(languages_data.LanguageEventRatingSubmitSuccess, true);
                if (current_visitor_status == visitor_status.chat_ended && init_data.if_can_send_email && !has_send_email_flag) {
                    show_send_email();
                }
                has_rating_flag = true;
                focus_chat_input();
            }
        });
    }

    function submit_postchat() {
        if (current_visitor_status != visitor_status.chat_ended)
            return;

        var postchat_data = get_fields_value('postchat-fields', init_data.postchat_fields);
        if (postchat_data == null)
            return;

        postchat_data.chat_id = chatId;
        $('btn-submit-postchat').disabled = 'disabled';
        send_action(13, postchat_data, function (res) {
            $('btn-submit-postchat').disabled = '';
            if (res.c)
                return;

            show_window('ui-chat-not-start');

            chat_content.add_system_message(languages_data.LanguagePostChatSuccess, true);
            if (current_visitor_status == visitor_status.chat_ended && init_data.if_can_send_email && !has_send_email_flag) {
                show_send_email();
            }
            has_rating_flag = true;

            show_start_chat_again();

            $('chat-content-bottom').style.height = '72px';
            chat_content.scroll_to_bottom();
        });
    }

    var show_start_chat_again = function show_start_chat_again() { }
    if (!is_popup_window) {
        show_start_chat_again = function () {
            var a = document.createElement('a');
            set_text(a, languages_data.LanguageStartChatAgain);
            chat_content.add_system_message_element(a);
            a.onclick = function (e) {
                embedded_window.restart();
            };
        }
    }

    var has_send_email_flag = false;
    function show_send_email() {
        if (current_visitor_status != visitor_status.chatting && current_visitor_status != visitor_status.chat_ended)
            return;
        show_popup('popup-email');
        var ele = $('send-email-control');
        remove_class(ele, 'required');
        ele.focus();
        ele.select();
    }

    function hide_send_email() {
        hide_popup('popup-email');
    }

    function send_email() {
        if (current_visitor_status != visitor_status.chatting && current_visitor_status != visitor_status.chat_ended)
            return;
        var email = $('send-email-control').value.trim();
        if (!email.isValidEmail()) {
            var ele = $('send-email-control');
            add_class(ele, 'required');
            ele.focus();
            return;
        }
        hide_element('send-email-invalid-email');
        if (current_visitor_status == visitor_status.chatting) {
            message_queue.add(message_code.visitor_set_email, email);
            hide_send_email();
        } else if (current_visitor_status == visitor_status.chat_ended) {
            var input = { c: chatId, e: email, s: sessionId, p: planId, a: -1 };
            $('btn-send-email').disabled = true;
            send_action(3, input, function (res) {
                $('btn-send-email').disabled = false;
                if (!res.c) {
                    hide_send_email();
                    chat_content.add_system_message(languages_data.LanguageEventSendTranscript.replace(languages_data.MacroEmail, email), true);
                    has_send_email_flag = true;
                }
            });
        }
    }

    function init_name_email(name, email) {
        $('rename-control').value = name || '';
        $('send-email-control').value = email || '';
    }

    function toggle_sound() {
        if (typeof sound != 'undefined') {
            sound.toggle();
        }
    }

    function show_rename() {
        if (current_visitor_status != visitor_status.chatting)
            return;
        show_popup('popup-rename');
        var ele = $('rename-control');
        remove_class(ele, 'required');
        ele.focus();
        ele.select();
    }

    function hide_rename() {
        hide_popup('popup-rename');
    }

    function rename() {
        if (current_visitor_status != visitor_status.chatting)
            return;
        var ele = $('rename-control');
        var name = ele.value;
        if (name.isEmpty()) {
            ele.focus();
            add_class(ele, 'required');
            return;
        }
        message_queue.add(message_code.visitor_set_name, name);
        hide_rename();
    }

    function fillin_offline_message() {
        var messageList = [], list = $$('chat-visitor-message'),
            inputMessage = $('chat-input-control').value;
        for (var i = 0; i < list.length; i += 1) {
            if (inner_text(list[i]).trim() !== '') {
                messageList.push(inner_text(list[i]));
            }
        }
        messageList.push(inputMessage);
        var message = messageList.join('\n'),
            textarea = $$('field-control'),
            fields = init_data.offline_fields,
            offlineMessageFieldId = 0;
        for (var i = 0; i < fields.length; ++i) {
            if (fields[i].is_system && fields[i].system_name === "Content") {
                offlineMessageFieldId = fields[i].id;
                break;
            }
        }
        if (message !== "" && offlineMessageFieldId > 0) {
            $('field-' + offlineMessageFieldId).value = message;
        }
        return;
    }

    function refuse_invitation() {
        if (current_visitor_status != visitor_status.invited) return;
        xd.post_message('refuse');
    }

    function change_current_visitor_status_chat_ended() {
        current_visitor_status = visitor_status.chat_ended;
    }

    function print_transcript() {
        if (current_visitor_status != visitor_status.chat_ended && current_visitor_status != visitor_status.chatting)
            return;

        var styleurl = server.get_url('/livechatvisitorhandler.ashx?a=12&siteId=' + siteId + '&planId=' + planId + '&embedddedwindow=' + nav_params.embedded_window);
        var chatcssurl = server.get_url('/css/chat7_4.css?v20170209');
        var html = '<html><head>'
                   + '<meta charset="utf-8" />'
                   + '<title></title>'
                   + '<link href="' + chatcssurl + '" rel="stylesheet" type="text/css" />'
                   + '<link href="' + styleurl + '" rel="stylesheet" type="text/css" />'
                   + '<style>'
                   + '.chat{position:initial;box-sizing:border-box;}body{height:auto;overflow:auto;}'
                   + '.chat-visitor-message:before,.chat-visitor-message:after,.chat-operator-message:before,.chat-operator-message:after{display:none;}'
                   + '</style>'
                   + '</head><body onload="focus();print();close();" class="chat">'
                   + $('chat-window').innerHTML
                   + '</body></html>';

        if (/Chrome/.test(navigator.userAgent)) {
            // chrome需要另外打开一个窗口不然预览会盖住当前界面，而且如果是弹出式的聊天窗口会大小不够
            var print_window = window.open('about:blank', '_blank', 'width=800,height=600,status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no');
            print_window.document.write(html);
            print_window.document.close();
        } else {
            var ifr = $('ifr-print');
            if (ifr) {
                document.body.removeChild(ifr);
            }

            ifr = document.createElement('iframe');
            ifr.id = 'ifr-print';
            ifr.style.display = 'none';
            document.body.appendChild(ifr);
            var doc = ifr.contentDocument || ifr.contentWindow.document;
            doc.open();
            doc.writeln(html);
            doc.close();
        }
    }

    function handle_operator_request_secure_form(sender, message) {
        var form = document.createElement('div');
        $('chat-window').insertBefore(form, $('chat-content-bottom'));

        var loading = document.createElement('DIV');
        loading.className = 'loading-secure';
        loading.innerHTML = '<img src="images/loading-large.gif" />';
        form.appendChild(loading);

        var wrap = document.createElement('DIV');
        var ifr_secure = document.createElement('iframe');
        ifr_secure.id = 'secure-form';
        ifr_secure.frameBorder = 0;
        ifr_secure.style.width = '100%';
        ifr_secure.style.paddingBottom = '15px';
        add_class(ifr_secure, 'secure-form');
        ifr_secure.scrolling = 'no';
        ifr_secure.src = sender + '&target=' + decodeURIComponent(location.href.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
        ifr_secure.style.display = 'none';
        form.appendChild(ifr_secure);

        var paramString = sender.substring(sender.indexOf("?") + 1, sender.length).split("&");
        var paramObj = {};
        var j;
        for (var i = 0; j = paramString[i]; i++) {
            paramObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var t = paramObj['otk'];

        secure_form.receive_message(form, t, function (form, data) {
            switch (data.type) {
                case 'height':
                    var loading = form.childNodes[0];
                    var ifr = form.childNodes[1];
                    hide_element(loading);
                    ifr.style.height = data.height + 'px';
                    show_element(ifr);
                    if (data.scroll) {
                        chat_content.scroll_to_bottom();
                    }
                    break;
                case 'submit':
                    var ifr = form.childNodes[1];
                    add_class(ifr, 'submit');
                    //hide_element(ifr);
                    message_queue.add(message_code.visitor_submit_secure_form, t + '\u2299' + data.name);
                    send_action_chat_heartbeat();
                    break;
                case 'cancel':
                    var ifr = form.childNodes[1];
                    hide_element(ifr);
                    message_queue.add(message_code.visitor_cancel_secure_form, "");
                    send_action_chat_heartbeat();
                    break;
                case 'get_failure':
                    var loading = form.childNodes[0];
                    hide_element(loading);
                    var ifr = form.childNodes[1];
                    show_element(ifr);
                    message_queue.add(message_code.visitor_get_secure_form_failure, "");
                    send_action_chat_heartbeat();
                    break;
                case 'close':
                    var ifr = form.childNodes[1];
                    hide_element(ifr);
                default:
                    break;
            }
        });
    }

    // 窗口式的自动邀请需要忽略第一条消息，也不要有notification和声音
    var ignore_first_operator_message_flag = false;

    function add_message(code, content) {
        message_queue.add(code, content);
    }

    return {
        'start': start_chat,
        'send_text_message': send_text_message,
        'send_text_message_if_enter': send_text_message_if_enter,
        'set_visitor_typing': set_visitor_typing,
        'end_chat': end_chat,
        'end_waiting': end_waiting,
        'show_upload': show_upload,
        'cancel_upload': cancel_upload,
        'show_rating': show_rating,
        'hide_rating': hide_rating,
        'send_email': send_email,
        'show_send_email': show_send_email,
        'hide_send_email': hide_send_email,
        'submit_rating': submit_rating,
        'toggle_sound': toggle_sound,
        'init_name_email': init_name_email,
        'show_rename': show_rename,
        'hide_rename': hide_rename,
        'rename': rename,
        'refuse_invitation': refuse_invitation,
        'change_current_visitor_status_chat_ended': change_current_visitor_status_chat_ended,
        'print_transcript': print_transcript,
        'refresh_upload': refresh_upload,
        'is_waiting_for_chat': function () {
            return current_visitor_status == visitor_status.waiting;
        },
        'is_chatting': function () {
            return current_visitor_status == visitor_status.chatting;
        },
        'is_invited': function () {
            return current_visitor_status == visitor_status.invited;
        },
        'is_chat_ended': function () {
            return current_visitor_status == visitor_status.chat_ended;
        },
        'focus_chat_input': focus_chat_input,
        'scroll_to_bottom': function () {
            chat_content.scroll_to_bottom();
        },
        'submit_postchat': submit_postchat,
        'is_input_focus': function () {
            return input_focuse_flag;
        },
        'send_end_chat': send_end_chat,
        'heartbeat_callback': heartbeat_callback,
        'start_chat_heartbeat': start_chat_heartbeat,
        'fillin_offline_message': fillin_offline_message,
        'has_rating_flag': function () {
            return has_rating_flag;
        },
        'set_has_rating_flag': function () {
            has_rating_flag = true;
        },
        'show_start_chat_again': show_start_chat_again,
        'has_send_email_flag': function () {
            return has_send_email_flag;
        },
        'reset_latest_received_message_id': function () {
            latest_received_message_id = -1;
        },
        'set_ignore_first_operator_message': function (b) {
            ignore_first_operator_message_flag = b;
        },
        'get_agent_avatar_and_name': function () {
            return {
                name: $('operator-name') ? inner_text(($('operator-name'))) : '',
                src: $('operator-avatar') ? $('operator-avatar').src : 'Images/avatar.png',
            }
        },
        'add_message': add_message,
    };
})();


function prechat_offline_window_close_click(event) {
    flag_window_closing = true;
    send_action(5, '', function () {
        close_window();
    });
}

function send_action(action, data, success, error, query) {
    var has_timeout = !(action == 7 || action == 8 || action == 9 || action == 15);
    server.post(data || '',
        'visitorId=' + visitorId + '&visitorGuid=' + visitorGuid + '&sessionId=' + sessionId + '&a=' + action + (query || '') + (nav_params.chatGroup === null ? '' : '&chatGroup=' + nav_params.chatGroup),
        success, error, has_timeout);
}

function install_events() {
    $('embedded-close').onclick = close_click;
    $('embedded-end-chat').onclick = close_click;
    $('embedded-popup').onclick = embedded_window.popup;
    $('embedded-minimize').onclick = embedded_window.minimize;
    $('popup-window-end-chat').onclick = close_click;
    $('popup-window-close').onclick = close_click;
    $('sso-login').onclick = sso_login_click;
    $('chat-as-visitor').onclick = chat_as_visitor_click;
    $('fb-login').onclick = function () { facebook.login(submit_social_info) };
    $('gp-login').onclick = function () { googleplus.login(submit_social_info) };
    $('btn-start-chat').onclick = start_chat_click;
    $('btn-submit-offline').onclick = function () { submit_offline_message() };
    $('uploading-cancel').onclick = chat_window.cancel_upload;
    $('btn-submit-postchat').onclick = chat_window.submit_postchat;
    $('btn-send-message').onclick = chat_window.send_text_message;
    $('btn-upload-start').onclick = chat_window.show_upload;
    $('btn-show-send-email').onclick = chat_window.show_send_email;
    $('btn-show-rating').onclick = chat_window.show_rating;
    $('btn-sound').onclick = chat_window.toggle_sound;
    $('btn-show-rename').onclick = chat_window.show_rename;
    $('btn-print').onclick = chat_window.print_transcript;
    $('chat-window-error-close').onclick = function () { hide_element('chat-window-error-box') };
    $('btn-submit-rating').onclick = chat_window.submit_rating;
    $('btn-send-email').onclick = chat_window.send_email;
    $('btn-rename').onclick = chat_window.rename;
    $('btn-close-confirm').onclick = function () { dialog.close(this); };
    $('btn-close-confirm2').onclick = function () { dialog.close(this); };
    $('embedded-window-minimized').onclick = embedded_window.restore;
    $('chat-input-control').onkeypress = function (e) { return chat_window.send_text_message_if_enter(e) };
    $('chat-input-control').onkeydown = function (e) { return chat_window.set_visitor_typing(e) };
    $('send-email-control').onkeypress = function (e) { if (is_enter(e)) { chat_window.send_email();} };
    $('rename-control').onkeypress = function (e) { if (is_enter(e)) { chat_window.rename(); } };
}

var server;
function main() {
    install_events();
    embedded_window.loaded()
    chat_content = init_chat_content($('chat-window'));

    if (init_data.if_popup_notifiaction) {
        notification = init_notification(window);
    } else {
        show_notification = function () { };
        notification = {
            show: function () { },
            request_permission: function () { }
        };
    }

    server.setup(init_data.server, init_data.standby_server, function (old_server, new_server) {
        load_offline_iframe();

        if (old_server != -1) {
            visitorId = 0;
            sessionId = 0;
            chatId = 0;

            if (chat_window.is_waiting_for_chat())
                chat_window.reset_latest_received_message_id();
            return;
        }

        if (current_window == visitor_window.chat && chat_window.is_waiting_for_chat()) {
            chatGuid = "";
            try_enter_chat();
        } else if (current_window == visitor_window.chat && chat_window.is_invited()) {
            var count = 0;
            goto_window(visitor_window.chat);
            show_element('chat-input', 'block');
            var list = $$('btn-popup');
            for (var i = 0; i < list.length; i += 1) list[i].style.display = 'none';
            if (nav_params.embedded_invitation === "1") {
                if (nav_params.directly_chat == 1 && nav_params.chat_source == chat_source.manual_invitation) {
                    chat_window.start_chat_heartbeat();
                } else {
                    if (nav_params.chat_source == chat_source.manual_invitation) {
                        send_action(visitor_action.get_operator_info, {}, function (respond) {
                            if (!respond) return;
                            // if switch server due to maximumon, it will return 1004 as error
                            // display that error
                            if (respond.c === 1004 && respond.e) {
                                show_error(respond.e);
                                return;
                            }
                            var avatar = respond.a;
                            var name = respond.b;
                            var title = respond.c;
                            if (!!$('operator-avatar')) {
                                $('operator-avatar').src = avatar;
                            }
                            if (!!$('operator-avatar')) {
                                set_text($('operator-name'), name);
                                languages_data.LanguageOperatorDefaultName = name;
                                embedded_window.notification(notification_type.chat, name);
                            }
                            if (!!$('operator-title')) {
                                set_text($('operator-title'), title);
                            }
                        });
                    }
                    if (nav_params.directly_chat == 1) {
                        chat_window.start_chat_heartbeat();
                    } else {
                        xd.post_message('invMessage');
                    }
                }
                embedded_window.notification(notification_type.chat, languages_data.LanguageOperatorDefaultName);
            }
        }
    });
}
