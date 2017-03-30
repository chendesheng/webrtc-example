var filter_charactor = '\u2299';

var field_type = {
    'input': 1,
    'textarea': 2,
    'radiolist': 3,
    'checkbox': 4,
    'select': 5,
    'checkboxlist': 6,
    'file': 7,
    'email': 100,
    'ticket': 101,
    'department': 102,
    'stars': 103
};

var visitor_window = {
    'chat': 0,
    'prechat': 1,
    'offline': 2,
    'login': 3,
    'ban': 4,
    'postchat': 5,
    'prelogin': 6,
    'redirect': 302
};

var visitor_action = {
    heartbeat_for_chat:0,
    submit_prechat: 7,
    try_enter_chat: 8,
    get_operator_info: 16,
    accept_manual_invitation: 17,
    heartbeat_for_manual_invitation: 18,
    login_or_continue: 20,
    heartbeat_for_system_processing: 22
};

var chat_source = {
    chat_button: 0,
    auto_invitation: 1,
    manual_invitation: 2
};

var heartbeat_interval = {
    'prechat': 20 * 1000,
    'offline': 20 * 1000,
    'chat': 2 * 1000
};

var login_window_type = {
    'noLogin': 1,
    'canLogin': 2,
    'needLogin': 3
};

var message_code = {
	system_end_chat: 0,
	system_prompt_offline_mesage: 1,
	system_end_voice: 2,
	system_visitor_not_respond: 3,
	system_visitor_not_respond_and_end_chat: 4,
    system_switch_to_offline: 222,

	visitor_end_chat_request: 49,
	visitor_add_text_message: 50,
	visitor_request_chat: 51,
	visitor_accept_chat: 52,
	visitor_refuse_chat: 53,
	visitor_end_chat: 54,
	visitor_request_voice: 55,
	visitor_accept_voice: 56,
	visitor_refuse_voice: 57,
	visitor_end_voice: 58,
	visitor_set_name: 59,
	visitor_set_email: 60,
	visitor_send_file: 61,
	visitor_send_image: 62,
	visitor_heartbeat_for_chat: 83,
	visitor_is_typing: 0x5d,
	visitor_get_operator_name: 204,
    visitor_submit_secure_form: 303,
    visitor_cancel_secure_form: 304,
    visitor_credit_card_masking: 305,
    visitor_get_secure_form_failure: 302,

	operator_add_text_message: 102,
    operator_add_text_message_via_manual_invitation: 226,
	operator_invite_chat: 103,
	operator_accept_chat: 104,
	operator_refuse_chat: 105,
	operator_end_chat: 106,
	operator_join_chat: 107,
	operator_transfer_chat: 108,
	operator_request_voice: 109,
	operator_accept_voice: 110,
	operator_refuse_voice: 111,
	operator_end_voice: 112,
	operator_send_url: 113,
	operator_is_typing: 139,
    operator_promote_visitor_to_user: 157,
    operator_promote_visitor_to_contact: 158,
    operator_transfer_chat_to_department: 218,
    operator_accept_transfer: 219,
    operator_refuse_transfer: 220,
	operator_send_file: 0x8e,
	operator_send_image: 63,
	operator_send_image_start: 64,
	operator_request_secure_form: 301,
	operator_recover_chat: 205,

	agent_video_chat_request: 320,
	agent_video_chat_cancel_request: 321,
	agent_video_chat_accept: 322,
	agent_video_chat_refuse: 323,
	agent_video_chat_stop: 324,
	visitor_video_chat_request: 325,
	visitor_video_chat_cancel_request: 326,
    visitor_video_chat_accept: 327,
	visitor_video_chat_refuse: 328,
	visitor_video_chat_stop: 329,
	server_video_chat_no_answer: 330,
	server_video_chat_end: 331,
	agent_audio_chat_request: 332,
	agent_audio_chat_cancel_request: 333,
	agent_audio_chat_accept: 334,
	agent_audio_chat_refuse: 335,
	agent_audio_chat_stop: 336,
	visitor_audio_chat_request: 337,
	visitor_audio_chat_cancel_request: 338,
    visitor_audio_chat_accept: 339, 
	visitor_audio_chat_refuse: 340,
	visitor_audio_chat_stop: 341,
	server_audio_chat_no_answer: 342,
	server_audio_chat_end: 343,
    system_if_supportWebrtc: 344
};

var siteId = parseInt(url_query('siteId', '0'));
var planId = parseInt(url_query('planId', '0'));
var visitorId = url_query('visitorId', '0');
var visitorGuid = url_query('visitorGuid', '');
var sessionId = 0;
var chatId = 0;
var chatGuid = url_query('guid', '');
var nav_params = {
    'requesting_page_title': decodeURIComponent(url_query('pageTitle', '')),
    'requesting_page_url': decodeURIComponent(url_query('pageUrl', '')),
    'auto_invitation': url_query('autoInvId', 0),
    'chat_source': url_query('source', 0),
    'department': url_query('departmentId', 0),
    'ticket': get_ticket_id_from_query(),
    'user': url_query('userId', 0),
    'timezone': (new Date).getTimezoneOffset(),
    'flash': get_flash_version(),
    'embedded_invitation': url_query('embInv', 0),
    'directly_chat': url_query('dirChat', 0),
    'ifmobile': 0, // init.js is for PC usage only
    'screen-resolution': get_screen_resolution(),
    'embeddedwindow': url_query('embeddedwindow', 0),
    'ssoInfo': JSON.parse(decodeURIComponent(
        url_query('ssoInfo', null) === null ? null : url_query('ssoInfo').replace(/\+/g, '%20'))
        ),
    'chatGroup': url_query('chatGroup', ''),
    'ifSupportWebrtc': false
};

nav_params.chatGroup = (+nav_params.chatGroup >= 0 && Math.floor(+nav_params.chatGroup) === +nav_params.chatGroup) ? nav_params.chatGroup : null;

var is_popup_window = !url_query('embeddedwindow', 0);
var cookie_last_message_id = url_query('lastMessageId', '');
var current_window = visitor_window.chat;

function get_ticket_id_from_query() {
    var ticketIdStr = url_query('ticketId', '');
    if (!ticketIdStr) {
        return -1;
    }
    var match = /S\d+[-]T(\d+)/.exec(ticketIdStr);
    if (match) {
        return parseInt(match[1]);
    } else {
        return parseInt(ticketIdStr) || -1;
    }
}

function get_flash_version() {
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
}

function get_screen_resolution() {
    return screen.width + 'x' + screen.height;
}

function url_query(param, defaultValue) {
	var url = location.href;
	var paramString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paramObj = {};
	for (var i = 0; j = paramString[i]; i++) {
		paramObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	}
	var returnValue = paramObj[param.toLowerCase()];
	if (typeof(returnValue) == "undefined") {
		return defaultValue;
	} else {
		return returnValue;
	}
}

var snapshot_params;
var init_data;
var languages_data;

function initlanguages(languages) {
    languages_data = {};
    for (var i = 0; i < languages.length; ++i) {
        languages_data[languages[i].key] = languages[i].value;
    }
    languages_data.LanguageTitleChatWindow = truncate(languages_data.LanguageTitleChatWindow, 50);
    languages_data.LanguageTitlePreChatWindow = truncate(languages_data.LanguageTitlePreChatWindow, 50);
    languages_data.LanguageTitleOfflineMessageWindow = truncate(languages_data.LanguageTitleOfflineMessageWindow, 50);
}

function initialize(data) {
    init_data = data;

    if (is_popup_window) {
        add_class(document.body, "popup-window");
    } else {
        add_class(document.body, "embedded-window");
    }


    initlanguages(init_data.languages);

    snapshot_params = data.snapshot_params;

    init_sound_alert();
}

function initconfigs(configs) {
    init_data.attachment_max_size = configs.attachment_max_size;
    init_data.lang_too_large_error = configs.lang_too_large_error;
    init_data.prechat_fields = configs.prechat_fields;
    init_data.offline_fields = configs.offline_fields;
    init_data.postchat_fields = configs.postchat_fields;
    init_data.postchat_has_custom_fields = configs.postchat_has_custom_fields;
    init_data.postchat_has_rating_field = configs.postchat_has_rating_field;
    init_data.postchat_has_comment = configs.postchat_has_comment;
    init_data.form_style = configs.form_style;
    init_data.if_can_rating = configs.if_can_rating;
    init_data.if_can_send_email = configs.if_can_send_email;
    init_data.if_show_typing_content = configs.if_show_typing_content;
	init_data.chat_window_theme_type = configs.chat_window_theme_type;
    init_data.if_credit_card_masking = configs.if_credit_card_masking;
    init_data.if_can_send_file = configs.if_can_send_file;
    init_data.department_info = configs.departments;
    init_data.if_popup_notifiaction = configs.if_popup_notifiaction;
    init_data.if_can_audio_chat = configs.if_can_audio_chat;
    init_data.if_can_video_chat = configs.if_can_video_chat;

    embedded_window.set_frame_css(configs.frame_css);

    var prechat_fields = configs.prechat_fields;
    var offline_fields = configs.offline_fields;
    var postchat_fields = configs.postchat_fields;

    init_fields('prechat-fields', prechat_fields, configs.form_style);
    init_fields('offline-fields', offline_fields, configs.form_style);
    init_fields('postchat-fields', postchat_fields, configs.form_style);

    //init fieldTypeFactory
    var i = 0, name = '', email = '';
    init_data.prechat_fields_forcustomer = [];
    for (; i < prechat_fields.length; ++i) {
        init_data.prechat_fields_forcustomer.push(fieldTypeFactory(prechat_fields[i]));
        if (prechat_fields[i].system_name === 'Name') name = prechat_fields[i].value || '';
        else if (prechat_fields[i].system_name === 'Email') email = prechat_fields[i].value || '';
    }

    chat_window.init_name_email(name, email);

    init_data.offline_fields_forcustomer = [];
    for (i = 0; i < offline_fields.length; ++i) {
        init_data.offline_fields_forcustomer.push(fieldTypeFactory(offline_fields[i]));
    }

    init_data.postchat_fields_forcustomer = [];
    for (i = 0; i < postchat_fields.length; ++i) {
        init_data.postchat_fields_forcustomer.push(fieldTypeFactory(postchat_fields[i]));
    }

    rating_control.init(configs.rating_grades, configs.postchat_fields);


    if (configs.social_media) { 
        var sm = configs.social_media;
        if (!sm.fb_login && !sm.gp_login) {
            hide_element($('social-logins'));
        }
        init_data.social_media = configs.social_media;
    } else {
        //no social_media only happens when chatServerCore is old version
        hide_element($('social-logins'));
    }

    var resources_id = configs.resources_id;
    resources_id['prechat-greeting'] = languages_data.LanguageGreetingPreChatWindow;
    resources_id['postchat-greeting'] = languages_data.LanguageGreetingRating;
    resources_id['offline-greeting'] = languages_data.LanguageGreetingOfflineMessageWindow;
    for (var item in resources_id) {
        var val = resources_id[item];
        if (typeof val == 'function')
            continue;
        var ele = $(item);
        set_resource_value(ele, val, true);
    }

    //var resources_class = init_data.resources_class;    
    for (var item in languages_data) {
        var val = languages_data[item];
        if (typeof val == 'function')
            continue;
        var eles = $$(item);
        for (var i = 0, len = eles.length; i < len; i++) {
            var ele = eles[i];
            set_resource_value(ele, val);
        }
    }

    main();

    var media_chat;
    if (init_data.if_can_audio_chat || init_data.if_can_video_chat) {
        var script = document.createElement('script');
        script.src = 'js/mediachat.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'css/mediachat.css';
        style.type = 'text/css';
        document.head.appendChild(style);

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    media_chat = MediaChat.initialize(chat_window, init_data.if_can_audio_chat, init_data.if_can_video_chat,
                        is_popup_window, embedded_window, languages_data.LanguageAudioChatCalling, languages_data.LanguageVideoChatCalling);
                    nav_params.ifSupportWebrtc = MediaChat.ifSupportWebrtc();
                }
            }
        } else {
            script.onload = function () {
                media_chat = MediaChat.initialize(chat_window, init_data.if_can_audio_chat, init_data.if_can_video_chat,
                    is_popup_window, embedded_window, languages_data.LanguageAudioChatCalling, languages_data.LanguageVideoChatCalling);
                nav_params.ifSupportWebrtc = MediaChat.ifSupportWebrtc();
            }
        }
    }
}

var sound;
function init_sound_alert() {
    if (init_data.sound_url) {
        sound = new soundManager('btn-sound', init_data.sound_url);
    }
}

function get_snapshot_params() {
    snapshot_params.UploadURL = server.get_url('/FileUpload.aspx?isImage=true&siteId=' + siteId + '&sessionId=' + sessionId + '&visitorId=' + visitorId + '&planId=' + planId);
    return snapshot_params;
}
