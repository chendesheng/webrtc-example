//constants
var filter_charactor = '⊙';
var frequencyLimiter = null;
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
    'rating': 103
};
var visitor_window = {
    'chat': 0,
    'prechat': 1,
    'offline': 2,
    'login': 3,
    'ban': 4,
    'prelogin': 6,
    'redirect': 302
};
var heartbeat_interval = {
    'prechat': 20 * 1000,
    'offline': 20 * 1000,
    'chat': 2 * 1000
};
var visitor_action = {
    heartbeat_for_system_processing: 22
};

function get_screen_resolution() {
    return screen.width + 'x' + screen.height;
}

//initialize global variables
var siteId = parseInt(UrlQueryString('siteId', '0'));
var planId = parseInt(UrlQueryString('planId', '0'));
var visitorId = UrlQueryString('visitorId', '0');
var visitorGuid = UrlQueryString('visitorGuid', '');
var sessionId = 0;
var chatId = 0;
var chatGuid = "";
var ifSupportWebrtc = ifSupportWebrtc();

var nav_params = {
    'requesting_page_title': decodeURIComponent(UrlQueryString('pageTitle', '')),
    'requesting_page_url': decodeURIComponent(UrlQueryString('pageUrl', '')),
    'auto_invitation': UrlQueryString('autoInvId', 0),
    'chat_source': UrlQueryString('source', 0),
    'department': UrlQueryString('departmentId', 0),
    'ticket': get_ticket_id_from_query(),
    'user': UrlQueryString('userId', 0),
    'timezone': (new Date).getTimezoneOffset(),
    'flash': '0.0.0',
    'screen-resolution': get_screen_resolution(),
    'ifmobile': 1, // mchat.js is for mobile usage only
    'embeddedwindow': UrlQueryString('embeddedwindow', 0),
    'ssoInfo': JSON.parse(decodeURIComponent(
        UrlQueryString('ssoInfo', null) === null ? null : UrlQueryString('ssoInfo').replace(/\+/g, '%20'))
        ),
    'chatGroup': UrlQueryString('chatGroup', ''),
    'ifSupportWebrtc': ifSupportWebrtc,
};

nav_params.chatGroup = (+nav_params.chatGroup >= 0 && Math.floor(+nav_params.chatGroup) === +nav_params.chatGroup) ? nav_params.chatGroup : null;

function get_ticket_id_from_query() {
    var ticketIdStr = UrlQueryString('ticketId', '');
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

function ifSupportWebrtc() {
  var PC = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;
  var edge = navigator.userAgent.indexOf(' Edge') > 0;
  return !!PC && !!getUserMedia && !edge;
}

function init_social_meida(social_media) {
    var sm = init_data.social_media;
    if (!sm.fb_login && !sm.gp_login) {
        $('#social-logins').hide();
        return;
    }

    if (sm.fb_login) {
        window.facebook = init_fb_login(function () {
            $('#fb-login').show();
            $('#social-login-icons').removeClass('loading');
        }, init_data.fb_app_id);
    }

    if (sm.gp_login) {
        window.googleplus = init_gp_login(function () {
            $('#gp-login').show();
            $('#social-login-icons').removeClass('loading');
        }, init_data.gp_app_id);
    }
}

window.onload = function () {
    init_social_meida(init_data.social_media);
};

//fields
function get_fields_value(id, fields) {
    var res = { 'custom': [] };
    var passed = true;
    for (var i = 0, len = fields.length; i < len; i++) {
        var f = fields[i];
        if (f.type == field_type.file)
            continue;

        var id = f.id;
        var val = check_and_get_field(id, f.required, f.type);

        if (typeof val === 'undefined') {
            passed = false;
            val = '';
        }

        if (!f.is_system) {
            res.custom.push({
                'id': id,
                'value': val,
                'label': f.label
            });
        } else {
            res[f.system_name] = val;
        }
    }
    res.TicketId = res.TicketId || -1;
    return passed ? res : null;
}
function show_hide_required(id, passed) {
    if (passed) {
        $('#field-require-message-' + id).hide();
    } else {
        $('#field-invalid-message-' + id).hide();
        $('#field-require-message-' + id).css('display', 'inline-block');
    }
}
//return undefined means check failed.
function form_field_blur(id, required, type) {
    $(':focus').blur();
    check_and_get_field(id, required, type);
}
function check_and_get_field(id, required, type) {
    var val = null;
    var ele = $('#field-' + id);
    var pass_required = true;
    if (type == field_type.department) {
        val = ele.val();
        if (required)
            pass_required = (val != '-1');
        val = val || '0';
    }
    else if (type == field_type.checkbox) {
        val = ele.is(':checked');
        if (required)
            pass_required = ele.is(':checked');
    }
    else if (type == field_type.rating) {
        //        val = get_list_value(ele).join(filter_charactor);
        //        if (required)
        //            pass_required = ($.trim(val).length > 0);

        //        val = parseInt(val);
        //        if (isNaN(val)) {
        //            val = 0;
        //        }
        val = window['field-' + id + '-stars-control'].selected_rate;  //control.selected_rate;
        if (required)
            pass_required = (val > 0);
    }
    else if ((type == field_type.radiolist) || (type == field_type.checkboxlist)) {
        val = get_list_value(ele).join(filter_charactor);
        if (required)
            pass_required = ($.trim(val).length > 0);
    }
    else {
        val = ele.val();
        if (required)
            pass_required = ($.trim(val).length > 0);
    }

    if (required) {
        show_hide_required(id, pass_required);

        if (!pass_required)
            return;
    }

    //always check email format.
    if (type == field_type.email && !check_email_valid(id, val))
        return;
    return val;
}
//return true if not valid
function check_email_valid(id, val) {
    if (val.isValidEmail() || val.isEmpty()) {
        $('#field-invalid-message-' + id).hide();
        return true;
    } else {
        $('#field-require-message-' + id).hide();
        $('#field-invalid-message-' + id).css('display', 'inline-block');
        return false;
    }
}
function get_list_value(ele) {
    var vals = [];
    ele.find('input').each(function () {
        if (this.checked && $.trim(this.value).length > 0) {
            vals.push(this.value);
        }
    });
    return vals;
}
var field_factory = (function () {

    function create_field_input(id, required, value, max_length) {
        return '<input maxlength="' + max_length + '" id="field-' + id + '" value="' + value + '" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.input + ');" type="text" class="field-control"/>';
    }
    function create_field_select(id, required, options, value) {
        var html = '<select id="field-' + id + '" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.select + ');" type="text" class="field-control">';
        html += '<option value="">' + html_encode(languages_data.LanguageDropdownListDefault) + '</option>';
        for (var i = 0, len = options.length; i < len; i++) {
            var opt = options[i];
            html += '<option value="' + opt.label + '"' + ((opt.label == value) ? ' selected="selected">' : '>') + opt.label + '</option>';
        }
        html += '</select>';
        return html;
    }
    // onchange="this.className =\'field-control \' + this.options[this.selectedIndex].className"
    function create_field_department(id, required, options, value) {
        var html = '<select id="field-' + id + '" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.department + ');" type="text" class="field-control">';
        for (var i = 0, len = options.length; i < len; i++) {
            var opt = options[i];
            html += '<option' + (opt.class_name ? ' class="' + opt.class_name + '"' : '') +
                ' value="' + (opt.value || opt.label) + '"' +
                ((opt.value == value) ? ' selected="selected">' : '>') + opt.label + '</option>';
        }
        html += '</select>';
        return html;
    }
    function create_field_radio_button_list(id, required, options, value, is_rating) {
        var html = '<fieldset id="field-' + id + '" class="field-radio-list field-control" data-role="controlgroup" data-theme="a">';
        for (var i = 0, len = options.length; i < len; i++) {
            var option_id = 'field-option-' + id + '-' + i;
            var opt = options[i];
            html += '<input type="radio" value="' + (is_rating ? opt.id : opt.label) + '"' + ((opt.label == value) ? ' checked="checked"' : '') + ' onclick="form_field_blur(' + id + ', ' + required + ', ' + field_type.radiolist + ');" value="' + opt.label + '" name="field-name-' + id + '" id="' + option_id + '"/><label for="' + option_id + '">' + opt.label + '</label>';
        }
        html += '</fieldset>';
        return html;
    }
    //
    function create_field_checkbox_list(id, required, options, value) {
        var values = value.split(filter_charactor);
        var bag = {};
        for (var i = values.length - 1; i >= 0; i--) {
            bag[values[i]] = 1;
        }

        var html = '<fieldset id="field-' + id + '" class="field-checkbox-list field-control" data-role="controlgroup" data-theme="a">';
        for (var i = 0, len = options.length; i < len; i++) {
            var option_id = 'field-option-' + id + '-' + i;
            var opt = options[i];
            var checked = bag[opt.label];
            html += '<input type="checkbox" value="' + opt.label + '"' + (checked ? ' checked="checked"' : '') + ' onclick="form_field_blur(' + id + ', ' + required + ', ' + field_type.checkboxlist + ');" value="' + opt.label + '" id="' + option_id + '"/><label for="' + option_id + '">' + opt.label + '</label>';
        }
        html += '</fieldset>';
        return html;
    }
    function create_field_ticket_id(id, site_id, required, value, max_length) {
        return '<span class="field-ticket-prefix">S' + site_id + '-T</span><input maxlength="' + max_length + '" id="field-' + id + '" value="' + value + '" type="text" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.ticket + ');" class="field-control field-ticket"/>'
    }
    function create_field_textarea(id, required, value) {
        return '<textarea id="field-' + id + '" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.textarea + ');" type="text" class="field-control">' + value + '</textarea>';
    }
    function create_field_input_email(id, required, value, max_length) {
        return '<input maxlength="' + max_length + '" id="field-' + id + '" value="' + value + '" onblur="form_field_blur(' + id + ', ' + required + ', ' + field_type.email + ');" type="email" class="field-control"/>';
    }
    function create_field_checkbox(id, required, value) {
        var checked = (value == 'true') || (value === true);
        return '<input id="field-' + id + '"' + (checked ? ' checked=checked' : '') + ' onchange="form_field_blur(' + id + ', ' + required + ', ' + field_type.checkbox + ');" type="checkbox" class="field-control"/>';
    }

    function create_field_tr(html) {
        return '<tr><td>' + html + '</td></tr>';
    }

    function create_field(f) {
        if (f.type == field_type.file) {
            return "";
        }

        f = field_html_encode(f);

        var html = '<tr><td class="field-name">' + '<label for="field-' + f.id + '">' + f.label + '<span ' + (f.required ? ' class="field-required">*<span id="field-require-message-' + f.id + '" class="LanguagePromptRequired field-validate-message">' + html_encode(languages_data.LanguagePromptRequired) + '</span>' : '>')
    		+ ((f.type == field_type.email) ? '<span id="field-invalid-message-' + f.id + '" class="field-validate-message lang-invalid-email LanguagePromptInvalidEmail">' + html_encode(languages_data.LanguagePromptInvalidEmail) + '</span>' : '')
        //TODO		//+ ((f.type == field_type.ticket) ? '<span id="field-invalid-message-' + f.id + '" class="field-validate-message lang-invalid-ticket"></span>' : '') 
    		+ '</span></label>' + '</td></tr>';
        switch (f.type) {
            case field_type.input:
                html += create_field_tr(create_field_input(f.id, f.required, f.value || '', f.max_length || 256));
                break;
            case field_type.select:
                html += create_field_tr(create_field_select(f.id, f.required, f.options, f.value || ''));
                break;
            case field_type.rating:
                //html += create_field_radio_button_list(f.id, f.required, f.options, f.value || '', true);
                html += create_field_tr(create_field_stars(f.id, f.required, f.options));
                break;
            case field_type.radiolist:
                html += create_field_tr(create_field_radio_button_list(f.id, f.required, f.options, f.value || '', false));
                break;
            case field_type.checkboxlist:
                html += create_field_tr(create_field_checkbox_list(f.id, f.required, f.options, f.value || ''));
                break;
            case field_type.ticket:
                html += create_field_tr(create_field_ticket_id(f.id, siteId, f.required, ((f.value == -1) ? '' : f.value), f.max_length || 256));
                break;
            case field_type.email:
                html += create_field_tr(create_field_input_email(f.id, f.required, f.value || '', f.max_length || 256));
                break;
            case field_type.textarea:
                html += create_field_tr(create_field_textarea(f.id, f.required, f.value || ''));
                break;
            case field_type.checkbox:
                html += create_field_tr(create_field_checkbox(f.id, f.required, f.value || ''));
                break;
            case field_type.file: //ignore file in mobile
                html = "";
                break;
            case field_type.department:
                html += create_field_tr(create_field_department(f.id, f.required, f.options, f.value || ''));
                break;
        }

        return html;
    }
    return {
        'create_field': create_field
    };
})();

function field_html_encode(field) {
    field = JSON.parse(JSON.stringify(field));
    field.label = html_encode(field.label);
    if (field.options) {
        for (var j = 0; j < field.options.length; j++) {
            field.options[j].label = html_encode(field.options[j].label);
        }
    }
    return field;
}

function init_fields(id, fields) {
    $(id).on('pageinit', function () {
        var html = '<table>';
        for (var i = 0, len = fields.length; i < len; i++) {
            html += field_factory.create_field(fields[i]);
        }
        html += '</table>';

        $(this).find('.form').html(html).trigger('create');
    });
}

function set_resource_value(ele, val, isHTML) {
    if (ele == null) {
        return;
    }
    switch (ele.tagName.toLowerCase()) {
        case 'li':
            break;
        case 'input':
            ele.value = val;
            break;
        case 'span':
        case 'div':
        case 'a':
        case 'button':
        case 'p':
        case 'label':
        case 'h1':
            if (isHTML) {
                ele.innerHTML = val;
            } else {
                set_text(ele, val);
            }
            break;
        case 'img':
            ele.title = val;
            break;
    }
}


//post chat
// function postchat_submit_click() {
//     var vals = get_fields_value('postchat-fields', init_data.postchat_fields);
//     if (vals == null)
//         return;
//     chat_window.submit_postchat();
// }
// function submit_postchat(data) {
//     $('#btn-submit-postchat').addClass('ui-disabled');
// }

//offline message
function enter_offline() {
    send_action(9, '', function () {
        chat_window.change_current_visitor_status_chat_ended();
        goto_window(visitor_window.offline);
    });
}

var offlineMessageForm;
function load_offline_iframe() {
    xform('ifr-offline', null, [{
        id: 'offline-submit-value',
        name: 'offline-submit-value',
        type: 'hidden'
    }, {
        id: 'attachment',
        name: 'attachment',
        type: 'file'
    }],
    function (form) {
        var dosubmit = form.submit;
        form.submit = function (url, data, fnsuccess, fnerror) {
            form.getElement('offline-submit-value').value = JSON.stringify(data);
            return dosubmit(url, fnsuccess, fnerror);
        }
        offlineMessageForm = form;
    });

    $('#btn-submit-offline')
        .prop('disabled', false)
        .removeClass('ui-disabled');
}

function getOfflineMessageData() {
    var data = get_fields_value('offline-fields', init_data.offline_fields);
    if (data == null) return;
    data.source_chat = chatId;
    data.nav_params = nav_params;
    if (data.TicketId === -1)
        data.TicketId = nav_params.ticket;
    return data;
}

function getOfflineMessageFormAction() {
    return server.get_url('/liveChatVisitorHandler.ashx?a=10&siteId=' + siteId + '&planId=' + planId
        + '&visitorId=' + visitorId + '&visitorGuid=' + visitorGuid
        + (nav_params.chatGroup === null ? '' : ('&chatGroup=' + nav_params.chatGroup)));
}

function offline_submit_click() {

    var data = getOfflineMessageData();
    if (data == null) {
        return;
    }

    function onError(message) {
        load_offline_iframe();
        $('offline-window').scrollTop = 0;
        show_error(message);
    }

    $('#btn-submit-offline')
        .prop('disabled', true)
        .addClass('ui-disabled');

    offlineMessageForm.submit(
        getOfflineMessageFormAction(),
        data,
        function (resp) {
            if (resp.c) {
                if (resp.c == 2002)
                    onError("Your message should not exceed 2048 characters in length.");
                else
                    onError(resp.e);
            } else {
                alert(resp.message);
                close_window();
            }
        },
        function () {
            onError('Submit offline message error');
        }
    );
}


function get_offline_field_id(system_name) {
    var offline_fields = init_data.offline_fields;
    for (var i = 0, len = offline_fields.length; i < len; i++) {
        var f = offline_fields[i];
        if (system_name == f.system_name) {
            return f.id;
        }
    }

    return null;
}
function set_offline_field_value(prechat_data, system_name) {
    if (prechat_data == null) return;

    var val = prechat_data[system_name];
    if (val) {
        $('#field-' + get_offline_field_id(system_name)).val(val);
    }
}

function init_offline_fields_from_prechat(prechat_data) {
    if (prechat_data == null) return;

    //手机版和桌面浏览器不一样，手机版这个时候offline message界面还没有初始化的。
    $.each(init_data.offline_fields, function (i, f) {
        if (f.is_system) {
            if (prechat_data[f.system_name]) {
                f.value = prechat_data[f.system_name];
            }
        } else {
            $.each(prechat_data.custom, function (i, pf) {
                if (!pf.is_system && f.label == pf.label) {
                    f.value = pf.value;
                    return false;
                }
            })
        }
    });
}



//rating
function init_rating(rating_grades) {
    if (rating_grades) {
        var html = create_rating_grades_control(rating_grades);
        $('#rating-grades').html(html).trigger('html');
    }
}
function create_rating_grades_control(options) {
    var html = '<fieldset data-role="controlgroup" data-theme="a">';
    for (var i = 0, len = options.length; i < len; i++) {
        var opt = options[i];
        var opt_id = 'grade-' + opt.id;
        html += '<input onclick="$(\'#btn-submit-rating\').removeClass(\'ui-disabled\')" name="rating-grade" type="radio" id="' + opt_id + '" value="'
        + opt.id + '"/><label for="' + opt_id + '">' + opt.label + '</label>';
    }
    html += '</fieldset>';
    return html;
}
function create_field_stars(id, required, options) {
    return stars_control('field-' + id, options, required ? form_field_blur : null, id);
}

var rating_control = (function () {
    function init(rating_grades, postchat_fields) {
        var if_rating_required = false;
        var if_comment_required = false;
        for (var i = 0; i < postchat_fields.length; ++i) {
            if (postchat_fields[i].is_system == true && postchat_fields[i].system_name == "Rating") {
                if_rating_required = postchat_fields[i].required;
                continue;
            }
            if (postchat_fields[i].is_system == true && postchat_fields[i].system_name == "RatingComment") {
                if_comment_required = postchat_fields[i].required;
                continue;
            }
        }
        if (rating_grades) {
            if (if_rating_required || if_comment_required) {
                $('#btn-submit-rating').addClass('ui-disabled');
                $('#btn-submit-rating').parent().removeClass('ui-state-disabled');
            }

            var html = stars_control('rating-grades', rating_grades, function () {
                setTimeout(function () {
                    if ((if_rating_required && rating_control.get_selected_rate() == 0) || (if_comment_required && $('#rating-comment-control')[0].value == "")) {
                        $('#btn-submit-rating').addClass('ui-disabled');
                    }
                    else
                        $('#btn-submit-rating').removeClass('ui-disabled');
                }, 10);
            });
            if (if_rating_required) html += '<span class="required">*</span>';
            $('#rating-comment-control')[0].onblur = function () {
                setTimeout(function () {
                    if ((if_rating_required && rating_control.get_selected_rate() == 0) || (if_comment_required && $('#rating-comment-control')[0].value == "")) {
                        $('#btn-submit-rating').addClass('ui-disabled');
                    }
                    else
                        $('#btn-submit-rating').removeClass('ui-disabled');
                }, 10);
            };
            $('#rating-grades')[0].innerHTML = html;

            if (!placeholder_supported()) {
                function change_placeholder() {
                    var ele = $('rating-comment-control');
                    if (!!ele.value) {
                        $('#rating-comment-placeholder').hide();
                    } else {
                        $('#rating-comment-placeholder').show();
                    }
                }
                setInterval(change_placeholder, 50);
            }
        }
    }

    function get_selected_rate() {
        return window['rating-grades-stars-control'].selected_rate;
    }

    return {
        'init': init,
        'get_selected_rate': get_selected_rate
    };
})();

function stars_control(id, options, fn_blur, field_id) {
    options = JSON.parse(JSON.stringify(options));
    for (var i = 0; i < options.length; i++) {
        options[i].label = html_encode(options[i].label);
    }

    var name = id + '-stars-control';

    var len = options.length;
    var html = '<span class="box-stars" id="' + id + '-options" >';
    for (var i = len - 1; i >= 0; i--) {
        var opt = options[i];
        html += '<span id="' + id + '-option-' + opt.id + '" class="icon-large icon-no-rating-large" onclick="window[\'' + name + '\'].onclick(this);" title="' + opt.label + '"></span>';
    }
    html += '</span>';

    var control = {};
    control.current_rate_mouseover = 0;
    control.selected_rate = 0;
    control.id = id;
    control.fn_blur = fn_blur;
    control.field_id = field_id;
    //    control.onmousein = function onmousein(ele) {
    //        var nodes = $('#' + this.id + '-options').children();
    //        for (var i = 0; i < nodes.length; i++) {
    //            var n = nodes[i];

    //            remove_class(n, 'icon-no-rating-large');
    //            add_class(n, 'icon-rating-large');

    //            if (n == ele) {
    //                this.current_rate_mouseover = parseInt(ele.id.replace(this.id + '-option-', ''));

    //                // console.log(n);
    //                for (++i; i < nodes.length; i++) {
    //                    var n = nodes[i];
    //                    remove_class(n, 'icon-rating-large');
    //                    add_class(n, 'icon-no-rating-large');
    //                }
    //            }
    //        }
    //    };
    function onmouseout() {
        // console.log('onmoseout');
        var nodes = $('#' + this.id + '-options').children();
        for (var i = nodes.length - 1; i >= 0; i--) {
            var n = nodes[i];

            if (n.id == this.id + '-option-' + this.selected_rate) {
                for (; i >= 0; i--) {
                    var n = nodes[i];
                    remove_class(n, 'icon-no-rating-large');
                    add_class(n, 'icon-rating-large');
                }
            } else {
                remove_class(n, 'icon-rating-large');
                add_class(n, 'icon-no-rating-large');
            }
        }
    }
    control.onmouseout = onmouseout;
    control.onclick = function onclick(ele) {
        //if (this.fn_blur)
        //    this.fn_blur(control.field_id, true, field_type.stars);

        //this.selected_rate = this.current_rate_mouseover;
        var nodes = $('#' + this.id + '-options').children();
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];

            remove_class(n, 'icon-no-rating-large');
            add_class(n, 'icon-rating-large');

            if (n == ele) {
                this.current_rate_mouseover = parseInt(ele.id.replace(this.id + '-option-', ''));

                // console.log(n);
                for (++i; i < nodes.length; i++) {
                    var n = nodes[i];
                    remove_class(n, 'icon-rating-large');
                    add_class(n, 'icon-no-rating-large');
                }
            }
        }
        if (this.fn_blur)
            this.fn_blur(control.field_id, true, field_type.stars);

        this.selected_rate = this.current_rate_mouseover;
    };
    control.setValue = function (v) {
        this.selected_rate = v;
        onmouseout.call(this);
    };

    window[id + '-stars-control'] = control;

    return html;
}

// frequency limiter for input limitation
var frequency_limit = function (config) {
    var recentMsgSentTime = [];
    var isLimited = false;
    var visitorMsgRestrictUnlockTimeKey = 'visitorMsgRestrictUnlockTime';
    var visitorMsgSentTimeKey = 'recentVisitorMsgSent';
    var penaltyFactorKey = 'penaltyFactory';
    var messageDisplayTimer = null;
    var penaltyFactor = 1;
    var message = '';

    var getVisitorMsgRestrictUnlockTime = function () {
        var previousRestrictTimeUnlockString = cookie.get(visitorMsgRestrictUnlockTimeKey);
        if (previousRestrictTimeUnlockString !== undefined && previousRestrictTimeUnlockString !== '') {
            return new Date(+previousRestrictTimeUnlockString);
        }
        return null;
    }

    var clearNotification = function () {
        $('#input-limited').hide();
        messageDisplayTimer = null;
    };

    var modifyPenaltyFactory = function () {
        penaltyFactor *= 2;
        if (penaltyFactor > Math.pow(2, config.VisitorMsgRestrictRepeatCount - 1)) penaltyFactor = 1;
        cookie.set(penaltyFactorKey, penaltyFactor);
        return penaltyFactor;
    }

    var setRecentMessageToCookie = function () {
        cookie.set(visitorMsgSentTimeKey, recentMsgSentTime.join(':'));
    }

    var clearLimit = function () {
        isLimited = false;
        recentMsgSentTime = [];
        cookie.set(visitorMsgRestrictUnlockTimeKey, '');
        cookie.set(visitorMsgSentTimeKey, '');
        if (messageDisplayTimer) clearNotification();
    };

    var setLimit = function () {
        var timespan = config.VisitorMsgRestrictTime * penaltyFactor * 1000;
        isLimited = true;
        cookie.set(visitorMsgRestrictUnlockTimeKey, Date.now() + timespan);
        setTimeout(clearLimit, timespan);
        message = 'You\'re sending messages too frequently. Please wait for ' +
      config.VisitorMsgRestrictTime * penaltyFactor + ' seconds and try again.'
        modifyPenaltyFactory();
    };

    var ifShouldLimit = function () {
        if (isLimited) return true;
        if (recentMsgSentTime.length <= config.VisitorMsgRestrictCount) return false;
        setLimit();
        return true;
    };

    var clearMessage = function () {
        recentMsgSentTime.shift();
        setRecentMessageToCookie();
    };

    var addMessage = function () {
        if (isLimited) {
            $('#input-limited').html('You\'re sending messages too frequently. Please wait for ' +
        Math.floor((getVisitorMsgRestrictUnlockTime() - Date.now()) / 1000) + ' second(s) and try again.');
            return;
        }
        recentMsgSentTime.push(Date.now());
        setRecentMessageToCookie();
        setTimeout(clearMessage, config.VisitorMsgRestrictDuration * 1000);
    };

    var addNotification = function () {
        if (isLimited) {
            if ($('#input-limited').css('display') === 'none') {
                $('#input-limited').show();
                $('#operator-typing').hide();
                $('#input-limited').html('You\'re sending messages too frequently. Please wait for ' +
          Math.floor((getVisitorMsgRestrictUnlockTime() - Date.now()) / 1000) + ' second(s) and try again.');
                $.mobile.silentScroll(100000);
            }
            if (messageDisplayTimer) clearTimeout(messageDisplayTimer);
            messageDisplayTimer = setTimeout(function () {
                clearNotification();
            }, 10000);
        }
    }

    var canSendMessage = function () {
        addMessage();
        var ret = !ifShouldLimit();
        addNotification();
        return ret;
    };

    var init = function () {
        var listString = cookie.get(visitorMsgSentTimeKey);
        if (listString !== undefined && listString !== '') {
            var list = listString.split(':');
            for (var i = 0; i < list.length; i += 1) {
                var time = new Date(+list[i]);
                if (Date.now() - time > config.VisitorMsgRestrictTime * 1000) continue;
                recentMsgSentTime.push(+list[i]);
                setTimeout(clearMessage, config.VisitorMsgRestrictTime * 1000 - (Date.now() - time));
            }
            setRecentMessageToCookie();
        }
        var previousRestrictUnlockTime = getVisitorMsgRestrictUnlockTime();
        if (previousRestrictUnlockTime && Date.now() < previousRestrictUnlockTime) {
            isLimited = true;
            var timespan = previousRestrictUnlockTime - Date.now();
            setTimeout(clearLimit, timespan);
            message = 'You\'re sending messages too frequently. Please wait for ' +
          Math.floor(timespan / 1000) + ' seconds and try again.';
        } else {
            cookie.set(visitorMsgRestrictUnlockTimeKey, '');
        }
        var penaltyFactorString = cookie.get(penaltyFactorKey);
        if (isNaN(+penaltyFactorString)) penaltyFactor = 1;
        else penaltyFactor = +penaltyFactorString;
    };

    init();

    return {
        'can_send_message': canSendMessage,
        'clear': function () {
            clearLimit();
            cookie.set(penaltyFactorKey, 1);
        }
    };
}

//chat
var chat_window = (function () {
    var visitor_status = {
        waiting: 0,
        chatting: 1,
        chat_ended: 2,
        refused: 3
    };
    var current_visitor_status = visitor_status.waiting;
    var message_code = {
        system_end_chat: 0,
        system_prompt_offline_mesage: 1,
        system_end_voice: 2,
        system_visitor_not_respond: 3,
        system_visitor_not_respond_and_end_chat: 4,
        visitor_end_chat_request: 49,
        visitor_add_text_message: 50,
        visitor_request_chat: 51, //the corresponding message is the plani,
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
        visitor_submit_secure_form: 303,
        visitor_cancel_secure_form: 304,
        visitor_credit_card_masking: 305,
        visitor_get_secure_form_failure: 302,

        operator_add_text_message: 102,
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
        operator_send_file: 0x8e,
        operator_send_image: 63,
        operator_send_image_start: 64,
        operator_request_secure_form: 301,

        system_switch_to_offline: 222,
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
            messages.push({
                'c': code,
                'a': content || '',
                'd': this.max_cmd_id
            });
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
        if (visitor_typing_flag) {
            visitor_typing_flag = false; //clear the flag

            var val = '';
            if (init_data.if_show_typing_content) {
                val = $("#chat-input-control").val();
                var len = val.length;
                if (len > 500)
                    val = val.substr(0, 500) + "...";
            }
            if (init_data.if_credit_card_masking) {
                val = val.replace(/\d{3}(\d+)/, "******");
            }
            message_queue.add(message_code.visitor_is_typing, val);
        }

        if (current_visitor_status != visitor_status.banned &&
            current_visitor_status != visitor_status.chat_ended &&
            current_visitor_status != visitor_status.refused) {
            send_action_chat_heartbeat();
            heartbeat_timer = setTimeout(repeat_heartbeat, heartbeat_interval.chat);
        }
    }
    function send_action_chat_heartbeat() {
        var input = {
            l: latest_received_message_id,
            m: message_queue.get(),
            cg: chatGuid
        };

        send_action(0, input, heartbeat_callback);
    }

    var secure_form = (function () {
        var _origin = '';
        var _forms = {};

        var _addEvent = window.addEventListener || window.attachEvent;
        var _eventName = window.addEventListener ? 'message' : 'onmessage';

        _addEvent(_eventName, function (event) {
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
        set_window_title(languages_data.LanguageTitleChatWindow);

        update_visitor_status(visitor_status.waiting);

        init_window_events();

        start_chat_heartbeat();
    }

    function update_visitor_status(status) {
        current_visitor_status = status;
        switch (status) {
            case visitor_status.waiting:
                $('#chat-input-control').prop('disable', true);
                $('#chat-window-header h1').html(html_encode(languages_data.LanguageMobileWaiting));
                break;
            case visitor_status.chatting:
                $('#chat-input-control').prop('disable', false);
                $('#chat-window-header h1').html(html_encode(languages_data.LanguageMobileChatting));
                break;
            case visitor_status.chat_ended:
            case visitor_status.refused:
                $('#chat-input-control').prop('disable', true);
                $('#chat-window-header h1').html(html_encode(languages_data.LanguageMobileChatEnded));
                $('#btn-end-chat').hide();
                stop_heartbeat();
                break;
        }
    }

    //typing         
    var visitor_typing_flag;
    function show_typing_prompt() {
        $('#operator-typing').show();
        $.mobile.silentScroll(100000);
        $('#input-limited').hide();
    }
    function hide_typing_prompt() {
        $('#operator-typing').hide();
    }

    var operator_typing_timeout_timer; //timeout id for the Operator_is_typing Prompt.

    /* Show Operator is typing prompt and set timeout.*/
    function handle_operator_typing(prompt) {
        show_typing_prompt(prompt, "");

        clearTimeout(operator_typing_timeout_timer);
        operator_typing_timeout_timer = setTimeout(function () {
            hide_typing_prompt();
        }, 10 * 1000);
    }




    //chat_content region

    function add_operator_url(sender, message, time) {
        var url = message;
        if (!message) {
            return;
        }
        if (!/^https:\/\/|http:\/\/|ftp:\/\//i.test(message)) {
            url = "http://" + message;
        }

        var urlMessage = '<a href="' + url + '" target="_blank" class="parsedlink">' + message + '</a>';
        chat_content.add_operator_message(sender, urlMessage, time, true, "");
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


    var chat_content = (function (div) {
        function encodeAndParseBreakline(text) {
            if (text.trim().length == 0) {
                return '&nbsp;';
            }
            var result = '';
            var i = 0;
            while ((i = text.search(/\r\n|\r|\n/)) >= 0) {
                result += html_encode(text.substring(0, i)).parseUrl() + '<br>';
                text = text.slice(i).replace(/\r\n|\r|\n/, '');
            }
            result += html_encode(text).parseUrl();
            return result;
        }
        var bubble = 0, simple = 1, classic = 2;

        var last_sender = '';
        var last_time = null;
        function set_last_sender(sender) {
            var changed = last_sender != sender;
            last_sender = sender;
            return changed
        }

        function set_last_time(seconds) {
            var m = Math.floor(seconds / 60);
            var changed = last_time == null || m != last_time;
            last_time = m;
            return changed;
        }

        function scroll_to_bottom() {
            $('html, body').scrollTop(10000);
        }
        function add_item(html) {
            try {
                $(html).insertBefore($('#chat-content-bottom'));

                scroll_to_bottom();
            }
            catch (e) {
            }
        }


        var tpl_with_name_translation = '<div class="chat-{type}"><div class="chat-{type}-name">{name}</div><div class="chat-{type}-message">{translation}<span class="translation-tag">&nbsp;({translation_tag})</span><br /><span class="original-message">{message}</span><span class="original-tag">&nbsp;({original_tag})</span></div><div class="chat-time">{time}</div></div>';
        var tpl_no_name_translation = '<div class="chat-{type} chat-same-sender"><div class="chat-{type}-message">{translation}<span class="translation-tag">&nbsp;({translation_tag})</span><br /><span class="original-message">{message}</span><span class="original-tag">&nbsp;({original_tag})</span></div><div class="chat-time">{time}</div></div>';
        var tpl_with_name = '<div class="chat-{type}"><div class="chat-{type}-name">{name}</div><div class="chat-{type}-message">{message}</div><div class="chat-time">{time}</div></div>';
        var tpl_no_name = '<div class="chat-{type} chat-same-sender"><div class="chat-{type}-message">{message}</div><div class="chat-time">{time}</div></div>';
        var tpl_system = '<div class="chat-system-message {classname}" id="{id}">{message}</div>';
        var tpl_system_noid = '<div class="chat-system-message {classname}">{message}</div>';

        function get_template(sender, time) {
            var sender_changed = set_last_sender(sender);
            if (init_data.chat_window_theme_type == simple) {
                var seconds = parseInt(time.match(/\d+/)[0]) / 1000;
                var time_changed = set_last_time(seconds);
                return (sender_changed || time_changed) ? tpl_with_name : tpl_no_name;
            } else {
                return sender_changed ? tpl_with_name : tpl_no_name;
            }
        }

        function add_message(tpl, type, name, message, time, is_html, translation) {
            is_html = (typeof is_html !== 'undefined') && is_html;
            message = is_html ? message : encodeAndParseBreakline(message);
            var html;
            if (translation != "" && translation != null) {
                translation = is_html ? translation : encodeAndParseBreakline(translation);
                var data = { type: type, time: time.formatDate(), name: html_encode(name), message: message, translation: translation, translation_tag: languages_data.LanguageTranslation, original_tag: languages_data.LanguageOriginal };
                html = tpl == tpl_with_name ? render_template(tpl_with_name_translation, data) : render_template(tpl_no_name_translation, data);
            }
            else {
                var data = { type: type, time: time.formatDate(), name: html_encode(name), message: message };
                html = tpl == tpl_with_name ? render_template(tpl_with_name, data) : render_template(tpl_no_name, data);
            }
            add_item(html);
        }
        function add_system_message(message, encode, id) {
            if (message && (typeof message == 'string') && message.length > 0) {
                var data = { id: id, message: (encode ? html_encode(message) : message), classname: (last_sender == null ? 'chat-same-sender' : '') };
                var tpl = (typeof id == 'undefined') ? tpl_system_noid : tpl_system;
                add_item(render_template(tpl, data));
                last_sender = null;
            }
        }

        function add_system_message_element(ele) {
            var sender_changed = set_last_sender(null);
            var div = document.createElement('DIV');
            div.className = 'chat-system-message';
            if (!sender_changed) div.className += ' chat-same-sender';
            div.appendChild(ele);
            return add_element(div);
        }

        function add_element(ele) {
            try {
                if (ele != null) {
                    $(ele).insertBefore($('#chat-content-bottom'));
                    scroll_to_bottom();
                    return ele;
                }
            } catch (e) { }
        }


        function add_operator_message(name, message, time, is_html, translation) {
            var tpl = get_template('o' + name, time);
            add_message(tpl, 'operator', name, message, time, is_html, translation);
        }

        function add_visitor_message(name, message, time, is_html, translation) {
            var tpl = get_template('v' + name, time);
            add_message(tpl, 'visitor', name, message, time, is_html, translation);
        }

        function add_image_placeholder(name, guid, time) {
            message = '<a href="#' + guid + '"><img style="margin-top: 5px;" alt="" id="' + guid + '" src="images/loading.gif"/></a>';
            add_operator_message(name, message, time, true);
        }

        var img_id = 0;
        function add_image(sender, message, time, is_visitor) {
            var args = sender.split(filter_charactor);
            var url = args[0].replace('http://', 'https://');
            if (init_data.attachmentDownloadToken) url += '&attachmentDownloadToken=' + init_data.attachmentDownloadToken + '&visitorId=' + visitorId;
            var guid = /[?].*file=([^&]*)&/.exec(url)[1];
            var filename = args[1];
            var name = args[2];
            var imgSrc = url + '&maxWidth=200&maxHeight=200';

            var img = document.getElementById(guid);
            if (img) {
                img.src = imgSrc;
                var a = img.parentNode;
                a.href = url;
                a.target = '_blank';
            } else {
                message = '<a href="' + url + '" target="_blank"><img style="margin-top: 5px;" alt="' + filename + '" id="' + guid + '" src="' + imgSrc + '"/></a>';
                if (is_visitor)
                    add_visitor_message(name, message, time, true, "");
                else
                    add_operator_message(name, message, time, true, "");
            }

            var img = document.getElementById('chatContentImg' + img_id) || document.getElementById(guid);
            if (img) {
                img.onload = img.onerror = img.onreadystatechange = function () {
                    if (img && img.readyState && img.readyState != 'loaded' && img.readyState != 'complete') {
                        return false;
                    }
                    setTimeout(function () {
                        scroll_to_bottom();
                    }, 10);

                    img = img.onload = img.onerror = img.onreadystatechange = null;
                };
                img_id++;
            }
        }

        function mask_credit_card_number(message) {
            return message.replace(/(?:3[4|7]\d{2}\s{0,1}\d{6}\s{0,1}\d{1}|3[0|6|8]\d{2}\s{0,1}\d{6}\s{0,1}|(?:6011\s{0,1}\d{4}\s{0,1}|65\d{2}\s{0,1}\d{4}\s{0,1}|622(?:(?:1\s{0,1}2[6-9]|1\s{0,1}[3-9]\d|[2-8]\d{2})\d{2}\s{0,1}|9\s{0,1}2[0-5]\d{2}\s{0,1}|9\s{0,1}[0-1]\d{3}))\d{4}\s{0,1}|(?:2014|2149)\s{0,1}\d{7}\s{0,1}|(?:(?:3088|3096|3112|3158|3337)\s{0,1}\d{4}\s{0,1}|35(?:2[89]\s{0,1}\d{4}\s{0,1}|[3-8]\d\s{0,1}\d{4}\s{0,1}))\d{4}\s{0,1}|5[1-5]\d{2}\s{0,1}\d{4}\s{0,1}\d{4}\s{0,1}|4\d{3}\s{0,1}\d{4}\s{0,1}\d(?:\d{3})?\s{0,1})(\d{4})/g, function (all_digits, last_digits) {
                return "*".repeat(all_digits.length - 4) + last_digits;
            });
        }

        return {
            add_image: add_image,
            add_image_placeholder: add_image_placeholder,
            add_system_message: add_system_message,
            add_system_message_element: add_system_message_element,
            add_operator_message: add_operator_message,
            add_visitor_message: add_visitor_message,
            set_last_sender: set_last_sender,
            scroll_to_bottom: scroll_to_bottom,
            mask_credit_card_number: mask_credit_card_number
        };
    })($('chat-content'));


    function set_chat_greeting(html) {
        $('#chat-greeting').html(html);
        if ($('#chat-greeting').text().trim() != '') {
            $('#chat-greeting').show();
            chat_content.set_last_sender(null);
        } else {
            $('#chat-greeting').hide();
        }
    }
    //communication 

    function heartbeat_callback(response) {
        try {
            if (!response)
                return;
            if (current_visitor_status == visitor_status.chat_ended
                && (response.s == 1 || response.s == 2/*chatting or voice chatting*/)) {
                window.location.reload();
                return;
            }

            var error_code = response.c;
            if ((error_code == 1004 || error_code == 1036) && message_queue.check_close_action()) {
                current_visitor_status = visitor_status.chat_ended;
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
            }
            else {
                //Remove sent command id from queue
                message_queue.remove(response.x);
            }



            for (var i = 0, len = msgs.length; i < len; i++) {
                var m = msgs[i];
                var id = m.d;

                if (id > latest_received_message_id) {
                    latest_received_message_id = id;

                    handle_message(m.c, m.b, m.e, m.a, m.g, m.f);

                    if (current_visitor_status == visitor_status.chatting
                        || current_visitor_status == visitor_status.waiting
                        || current_visitor_status == visitor_status.chat_ended) {
                        heartbeat_interval.chat = 2000;
                    } else {
                        heartbeat_interval.chat = 20000;
                    }
                }
            } //for

            //update queue position
            if (response.q && response.q > 0) {
                $('#queue-position').text(response.q);
            }
        }
        catch (e) {
            handle_exception(e, "heartbeat_callback");
        }
    }


    function handle_message(code, sender, time, message, translation, info) {
        try {
            if (message != null) {
                if (code != message_code.operator_send_url
                && code != message_code.visitor_add_text_message && code != message_code.operator_add_text_message
                && code != message_code.operator_accept_voice && code != message_code.visitor_accept_voice
                && code != message_code.operator_is_typing && code != message_code.visitor_is_typing
                && code != message_code.operator_send_file && code != message_code.visitor_send_file
                && code != message_code.visitor_send_image
                && code != message_code.operator_send_image
                && code != message_code.system_prompt_offline_mesage
                && code != message_code.visitor_request_chat
                && code != message_code.operator_send_image_start
                && code != message_code.system_if_supportWebrtc) {
                    chat_content.add_system_message(message, true);
                }
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
                        bottom_tabs.addPrompt();
                    }
            switch (code) {
                case message_code.visitor_request_chat:
                    handle_request_chat(message);
                    break;
                case message_code.visitor_end_chat:
                    update_visitor_status(visitor_status.refused);
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
                    has_send_email_flag = true; //so after chat do not popup send email div automatically
                    break;
                case message_code.operator_add_text_message:
                    hide_typing_prompt();
                    if (!chat_window.is_waiting_for_chat()) {
                        chat_content.add_operator_message(sender, message, time, false, translation);
                    }
                    break;
                case message_code.operator_accept_chat:
                    handle_operator_accept_chat(info);
                    break;
                case message_code.operator_refuse_chat:
                    update_visitor_status(visitor_status.refused);
                    break;
                case message_code.operator_send_url:
                    add_operator_url(sender, message, time);
                    break;
                case message_code.operator_send_file:
                    handle_receive_file(sender, time, false);
                    break;
                case message_code.visitor_send_file:
                    handle_receive_file(sender, time, true);
                    break;
                case message_code.operator_is_typing:
                    handle_operator_typing(message);
                    break;
                case message_code.visitor_send_image:
                    handle_receive_file(sender, time, false);
                    break;
                case message_code.operator_send_image:
                    handle_receive_file(sender, time, true);
                    break;

                case message_code.visitor_accept_voice:
                    handle_visitor_accept_voice(message);
                    break;
                case message_code.visitor_refuse_voice:
                    hide_voice_request();
                    break;
                case message_code.operator_request_voice:
                    show_voice_request(message);
                    break;
                case message_code.operator_accept_voice:
                    handle_operator_accept_voice('Operator', message);
                    break;
                case message_code.operator_refuse_voice:
                    handler_operator_refuse_voice();
                    break;
                case message_code.system_end_voice:
                case message_code.visitor_end_voice:
                case message_code.operator_end_voice:
                    handle_system_end_voice();
                    break;
                case message_code.operator_request_secure_form:
                    if (sender != '') {
                        handle_operator_request_secure_form(sender, message);
                    }
                    break;
                case message_code.system_switch_to_offline:
                    var container = document.createElement('div');
                    container.innerHTML = init_data.goto_offline_html;
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
            if( ifSupportWebrtc && MediaChat && (code >= message_code.agent_video_chat_request && code <= message_code.system_if_supportWebrtc)) {
                MediaChat.handleMessages(code, sender, time, message, info);
            }
        }
        catch (e) {
            handle_exception(e, 'handle_message');
        }
    }

    //
    //callback from server
    //
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
        update_visitor_status(visitor_status.chat_ended);
        if (frequencyLimiter !== null && frequencyLimiter !== undefined) {
            frequencyLimiter.clear();
        }
        // //change end chat button to close button
        // if (init_data.if_can_rating && !has_rating_flag) {
        //     show_rating();
        // } 
        // else if (init_data.if_can_send_email && !has_send_email_flag) {
        //     show_send_email();
        // }

        if ($$('secure-form').length > 0) {
            for (var i = 0; i < $$('secure-form').length; ++i) {
                var ele = $$('secure-form')[i];
                if (!has_class(ele, 'submit')) {
                    ele.style.display = "none";
                }
            }
        }

        if (init_data.if_can_rating) {
            if (!has_rating_flag) {
                //聊天过程中没有rating过
                goto_postchat();
            } else if (init_data.postchat_has_custom_fields) {
                //聊天过程中rating过了，但是还有自定义的post chat字段，就隐藏系统字段
                //postchat_hide_system_fields();
                goto_postchat();
                var comment = $('#rating-comment-control').val();
                postchat_setRatingDefault(rating_control.get_selected_rate(),
                    comment);
            } else {
                //不需要跳到post chat
                show_send_email();
            }
        } else if (init_data.if_can_send_email && !has_send_email_flag) {
            show_send_email();
        }
    }

    function postchat_setRatingDefault(rate, comment) {
        for (var i = 0; i < init_data.postchat_fields.length; i++) {
            var f = init_data.postchat_fields[i];
            if (f.is_system) {
                if (f.type == field_type.rating) {
                    var c = window['field-' + f.id + '-stars-control'];
                    if (c) {
                        c.setValue(rate);
                    }
                } else if (f.type == field_type.textarea) {
                    $('#field-' + f.id).val(comment);
                }
            }
        }
    }

    //function handle_operator_accept_chat() {
    //    update_visitor_status(visitor_status.chatting);
    //    // change_close_to_chat_end();
    //}

    function handle_operator_accept_chat(info) {
        update_visitor_status(visitor_status.chatting);
        $('#goto-offline-prompt').css('display', 'none');

        if (info && info.length > 0) {
            if (info[0]) {
                $('.header-operator-avatar-image').prop('src', info[0]);
            }
            if (info[1]) {
                $('.header-operator-name').text(info[1]);
            }
            if (info[2]) {
                $('.header-operator-title').text(info[2]);
            }
        }
        else {
            //$('.branding + .chat-greeting-message')[0].style.paddingTop = "38px";
        }
    }


    //function handle_receive_file(sender, message) {
    //    var args = sender.split(filter_charactor);
    //    var fileUrl = args[0];
    //    var fileName = args[1];
    //    var atag = "<a href='" + fileUrl + "' target='_blank' class='parsedlink'>" + fileName + "</a>";
    //    message = message.replace(fileName, atag);

    //    chat_content.add_system_message(message);
    //}
    function handle_receive_file(sender, time, is_visitor) {
        var args = sender.split(filter_charactor);
        var fileUrl = args[0];
        var fileName = args[1];

        if (/.*[.](jpg|gif|jpeg|png)$/i.test(fileName)) {
            chat_content.add_image(sender, '', time, is_visitor)
        } else {
            var message = '<a href="' + fileUrl + '&attachmentDownloadToken=' + init_data.attachmentDownloadToken + '&visitorId=' + visitorId + '" target="_blank" class="attachment"><span class="attachment-name">' + fileName + '</span><span class="iconfont icon-attachment"></span></a>';
            if (is_visitor) {
                chat_content.add_visitor_message(args[2], message, time, true, "");
            } else {
                chat_content.add_operator_message(args[2], message, time, true, "");
            }
        }

        if (is_visitor) {
            $('#uploading-message').hide();
        }
    }

    //
    //client send message
    //
    function send_text_message_if_enter(evt) {
        // alert(evt);

        if (is_enter(evt)) {
            visitor_typing_flag = false;
            send_text_message();
            return false;
        }
        return true;
    }


    function send_text_message() {
        //If is not chatting, not to send
        if (current_visitor_status == visitor_status.chatting) {
            var ele = document.getElementById('chat-input-control');
            if (!ele || ele.value == '')
                return;
            if (ele.value.length > 10000) {
                alert(languages_data.LanguagePromptInputLimit);
                return;
            }
            if (frequencyLimiter && !frequencyLimiter.can_send_message()) return;
            //add message to queue
            var message = ele.value;
            if (init_data.if_credit_card_masking) {
                message = chat_content.mask_credit_card_number(message);
                message_queue.add(message_code.visitor_add_text_message, message);
                if (message != ele.value)
                    message_queue.add(message_code.visitor_credit_card_masking, "");
            }
            else {
                message_queue.add(message_code.visitor_add_text_message, message);
            }
            send_action_chat_heartbeat();

            ele.value = '';
        }
    }

    function end_chat() {
        if (current_visitor_status == visitor_status.waiting) {
            message_queue.add(message_code.visitor_end_chat, "");
            // send_action_chat_heartbeat();
            return;
        }

        if (current_visitor_status == visitor_status.chatting) {
            if (confirm(languages_data.LanguagePromptStopChat) == true) {
                message_queue.add(message_code.visitor_end_chat, "");
                // send_action_chat_heartbeat();
            }
            return;
        }
    }
    function end_waiting() {
    }







    //window relate

    function focus_chat_input() {
        try {
            $('#chat-input-control').focus(); //ie will throw exception when current window is not in front.
        }
        catch (e) {
        }
    }

    function blur_chat_input() {
        try {
            $('#chat-input-control').blur();
        }
        catch(e) {}
    }

    function init_window_events(argument) {
        refresh_upload();
        window.onbeforeunload = function () {
            if (current_visitor_status == visitor_status.chatting) {
                return languages_data.LanguagePromptStopChat;
            }
        };
    }

    ///
    //chat tools
    //

    var sendFileForm;
    function refresh_upload() {
        $('#tool-file-upload').attr('onclick', 'chat_window.show_upload();');
        uploadForm(upload_control_changed, function (form) {
            sendFileForm = form;
        });
    }

    function show_upload() {
        if (current_visitor_status !== visitor_status.chatting) return;
        sendFileForm.clickUpload();
    }

    function upload_control_changed(name) {
        if (current_visitor_status !== visitor_status.chatting) return;
        if (name === '') return;
        if (frequencyLimiter && !frequencyLimiter.can_send_message()) return;
        name = name.substring(name.lastIndexOf('\\') + 1);
        $('#uploading-file-name').html(name);
        $('#uploading-message').show();
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

        $('#tool-file-upload').attr('onclick', null);
        $('#popupMenu').hide();
    }

    window['chatWindowHideUpload'] = function hide_upload() {
        $('#tool-file-upload').attr('onclick', 'chat_window.show_upload();');
        send_action_chat_heartbeat();
    }

    function show_upload_error(err) {
        $('#uploading-message').hide();
        refresh_upload();
        show_error(err);
    }

    function cancel_upload() {
        $('#uploading-message').hide();

        refresh_upload();
    }

    function show_rating() {
        $('#popupMenu').hide();
        $('#chat-tools').removeClass('on').addClass('off');

        if (current_visitor_status != visitor_status.chatting
        && current_visitor_status != visitor_status.chat_ended)
            return;
        changePage('#rating');

        //if (!get_list_value($('#rating-grades'))[0]) {
        //    $('#btn-submit-rating').addClass('ui-disabled');
        //} else {
        //    $('#btn-submit-rating').removeClass('ui-disabled');
        //}
    }
    function hide_rating() {
        changePage('#chat-window');

        setTimeout(function () {
            $.mobile.silentScroll(100000);
        }, 10);
    }
    var has_rating_flag = false;
    function submit_rating() {
        if (current_visitor_status != visitor_status.chatting
        && current_visitor_status != visitor_status.chat_ended)
            return;

        var input = {
            'c': chatId,
            'g': rating_control.get_selected_rate(), //get_list_value($('#rating-grades'))[0],
            'o': $('#rating-comment-control').val()
        };

        send_action(4, input, function (res) {
            if (!res.c) {
                chat_content.add_system_message(languages_data.LanguageEventRatingSubmitSuccess, true);

                if (current_visitor_status == visitor_status.chat_ended
                && init_data.if_can_send_email && !has_send_email_flag) {
                    show_send_email();
                } else {
                    hide_rating();
                }
                has_rating_flag = true;
            }
        });
    }

    var has_send_email_flag = false;
    function show_send_email() {
        $('#popupMenu').hide();
        $('#chat-tools').removeClass('on').addClass('off');
        if (current_visitor_status != visitor_status.chatting
        && current_visitor_status != visitor_status.chat_ended)
            return;

        $('#send-email-control-wrap').removeClass('required');
        changePage('#transcript');
        // hide_element('send-email-invalid-email');

        // show_popup('popup-email');

        // var ele = $('#send-email-control');
        // ele.focus();
        // ele.select();
    }
    function hide_send_email() {
        changePage('#chat-window');
    }
    function send_email() {
        if (current_visitor_status != visitor_status.chatting
        && current_visitor_status != visitor_status.chat_ended)
            return;

        var email = $.trim($('#send-email-control').val());
        if (!email.isValidEmail()) {
            $('#send-email-control-wrap').addClass('required');
            $('#send-email-control').focus();
            return;
        } else {
            $('#send-email-control-wrap').removeClass('required');
        }

        if (current_visitor_status == visitor_status.chatting) {
            message_queue.add(message_code.visitor_set_email, email);
            hide_send_email();
        }
        else if (current_visitor_status == visitor_status.chat_ended) {
            var input = {
                c: chatId,
                e: email,
                s: sessionId,
                p: planId,
                a: -1
            };

            $('#btn-send-email').disabled = true;
            send_action(3, input, function (res) {
                $('#btn-send-email').disabled = false;
                if (!res.c) {
                    hide_send_email();
                    chat_content.add_system_message(languages_data.LanguageEventSendTranscript.replace(languages_data.MacroEmail, email), true);
                    has_send_email_flag = true;
                }
            });
        }

    }

    function init_name_email(name, email) {
        $('#rename-control').val(name);
        $('#send-email-control').val(email);
    }

    function show_rename() {
        $('#popupMenu').hide();
        $('#chat-tools').removeClass('on').addClass('off');
        if (current_visitor_status != visitor_status.chatting)
            return;

        $('#rename-control-wrap').removeClass('required');
        changePage('#rename');
    }
    function hide_rename() {
        changePage('#chat-window');
    }
    function rename() {
        if (current_visitor_status != visitor_status.chatting)
            return;

        var name = $.trim($('#rename-control').val());
        if (name.isEmpty()) {
            $('#rename-control-wrap').addClass('required');
            $('#rename-control').focus();
            return;
        } else {
            $('#rename-control-wrap').removeClass('required');
        }

        message_queue.add(message_code.visitor_set_name, name);
        hide_rename();
    }


    function fillin_offline_message() {
        var messageList = [], list = $('.chat-visitor-message'),
            inputMessage = $('#chat-input-control').val();
        for (var i = 0; i < list.length; i += 1) {
            if ($(list[i]).text().trim() !== '') {
                messageList.push($(list[i]).text());
            }
        }
        messageList.push(inputMessage);
        var message = messageList.join('\n'),
            fields = init_data.offline_fields,
            offlineMessageFieldId = 0;
        for (var i = 0; i < fields.length; ++i) {
            if (fields[i].is_system && fields[i].system_name === "Content") {
                offlineMessageFieldId = fields[i].id;
                break;
            }
        }
        if (message !== "" && offlineMessageFieldId > 0) {
            $('#field-' + offlineMessageFieldId).val(message);
        }
        return;
    }

    function change_current_visitor_status_chat_ended() {
        current_visitor_status = visitor_status.chat_ended;
    }

    function submit_postchat() {
        if (current_visitor_status != visitor_status.chat_ended)
            return;

        var postchat_data = get_fields_value('postchat-fields', init_data.postchat_fields);
        if (postchat_data == null)
            return;

        postchat_data.chat_id = chatId;
        // init_offline_fields_from_prechat(postchat_data);
        // chat_window.init_name_email(postchat_data.Name || '', postchat_data.Email || '');
        // postchat_data.nav_params = nav_params;

        $('#btn-submit-postchat').addClass('ui-disabled');

        send_action(13, postchat_data, function (res) {
            $('#btn-submit-postchat').removeClass('ui-disabled');
            if (res.c)
                return;

            changePage('#chat-window');

            chat_content.add_system_message(languages_data.LanguagePostChatSuccess, true);
            if (current_visitor_status == visitor_status.chat_ended && init_data.if_can_send_email && !has_send_email_flag) {
                show_send_email();
            }
            has_rating_flag = true;

            chat_content.scroll_to_bottom();
        });
    }
    function handle_operator_request_secure_form(sender, message) {
        var form = document.createElement('div');
        $('#chat-content-bottom').before(form);

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
                    loading.style.display = "none";
                    ifr.style.height = data.height + 'px';
                    ifr.style.display = "";
                    if (data.scroll) {
                        chat_content.scroll_to_bottom();
                    }
                    break;
                case 'submit':
                    var ifr = form.childNodes[1];
                    add_class(ifr, 'submit');
                    message_queue.add(message_code.visitor_submit_secure_form, t + '\u2299' + data.name);
                    send_action_chat_heartbeat();
                    break;
                case 'cancel':
                    var ifr = form.childNodes[1];
                    ifr.style.display = "none";
                    message_queue.add(message_code.visitor_cancel_secure_form, "");
                    send_action_chat_heartbeat();
                    break;
                case 'get_failure':
                    var loading = form.childNodes[0];
                    loading.hidden = true;
                    var ifr = form.childNodes[1];
                    ifr.style.display = "";
                    message_queue.add(message_code.visitor_get_secure_form_failure, "");
                    send_action_chat_heartbeat();
                    break;
                case 'close':
                    var ifr = form.childNodes[1];
                    ifr.style.display = "none";
                default:
                    break;
            }
        });
    }

    function message_queue_add(code, content) {
        message_queue.add(code, content);
    }

    var bottom_tabs = (function () {
        var tabs = [];
        var promptNum = 0;
        
        $('.chattingTab').click(function(){
            $('#popupMenu').hide();
            $('.tab').removeClass('selected');
            $(this).addClass('selected');
            tabs.forEach(function(divId){
                $('#' + divId).hide();
            });
            resetPromptNum();
        });

        function show(contentId, iconName) {
            if(!$('#bottom-tab').is(':visible')) {
                $('#bottom-tab').show();
                $('#text-input').animate({
                    bottom: '34px'
                }, 100);
                var dis = $('#chat-content').css('padding-bottom');
                var bottom = 0;
                if(dis.indexOf('px')>0) {
                    bottom = parseInt(dis.substring(0, dis.indexOf('px')), 10) + 35;
                } else {
                    bottom = parseInt(dis, 10) + 35;
                }
                $('#chat-content').css('padding-bottom', bottom);

                setSelectedTab(contentId, iconName);
            }            
            resetPromptNum();
        }

        function hide() {
            if($('#bottom-tab').is(':visible')) {
                $('#bottom-tab').hide();
                $('#text-input').animate({
                    bottom: '0'
                }, 100);
                var dis = $('#chat-content').css('padding-bottom');
                var bottom = 0;
                if(dis.indexOf('px')>0) {
                    bottom = parseInt(dis.substring(0, dis.indexOf('px')), 10) - 35;
                } else {
                    bottom = parseInt(dis, 10) - 35;
                }
                $('#chat-content').css('padding-bottom', bottom);
            }
        }

        function setSelectedTab(contentId, iconName) {
            blur_chat_input();
            if(typeof iconName !== 'undefined') {
                $('.' + contentId + 'Tab .ui-icon').remove();
                var icon = $("<span></span>");
                icon.addClass("ui-icon " + iconName);
                $('.' + contentId + 'Tab').append(icon);
            }
            $('.tab').removeClass('selected');
            $('.' + contentId + 'Tab').addClass('selected');
            tabs.forEach(function(id){
                if(id === contentId){
                    $('#' + id).show();
                } else {
                    $('#' + id).hide();
                }
            });       
        }

        function addTab(contentId, iconName) {
            tabs.push(contentId);
            var tab = $("<div class='" + contentId + "Tab'></div>");
            tab.addClass('tab');
            var icon = $("<span></span>");
            icon.addClass("ui-icon " + iconName);
            tab.append(icon);
            tab.click(function(){
                $('#popupMenu').hide();
                $('.tab').removeClass('selected');
                $(this).addClass('selected');
                tabs.forEach(function(id){
                    if(id === contentId){
                        $('#' + id).show();
                    } else {
                        $('#' + id).hide();
                    }
                });
            });
            tab.insertBefore(".chattingTab");
        }

        function resetPromptNum(){
            $('.promptNum').hide();
            promptNum = 0;
        }

        function addPrompt(){
            if($('#bottom-tab').is(':visible') &&
                !$('.chattingTab').hasClass('selected')) {
                promptNum += 1;
                if(promptNum > 0) {
                    $('.promptNum').html(promptNum).show();
                }
            }
        }

        return  {
            show: show,
            hide: hide,
            addTab: addTab,
            setSelectedTab: setSelectedTab,
            addPrompt: addPrompt
        };
        //promptNumber
    })();
    
    return {
        'start': start_chat,
        'send_text_message': send_text_message,
        'send_text_message_if_enter': send_text_message_if_enter,
        'set_visitor_typing': set_visitor_typing,
        'end_chat': end_chat,
        'end_waiting': end_waiting,
        'show_rating': show_rating,
        'hide_rating': hide_rating,
        'send_email': send_email,
        'show_send_email': show_send_email,
        'hide_send_email': hide_send_email,
        'submit_rating': submit_rating,
        'init_name_email': init_name_email,
        'show_rename': show_rename,
        'hide_rename': hide_rename,
        'show_upload': show_upload,
        'refresh_upload': refresh_upload,
        'cancel_upload': cancel_upload,
        'rename': rename,
        'change_current_visitor_status_chat_ended': change_current_visitor_status_chat_ended,
        'update_visitor_status': update_visitor_status,
        'submit_postchat': submit_postchat,
        'set_chat_greeting': set_chat_greeting,
        'is_waiting_for_chat': function () {
            return current_visitor_status == visitor_status.waiting;
        },
        'is_chatting': function () {
            return current_visitor_status == visitor_status.chatting;
        },
        'message_queue_add': message_queue_add,
        'get_chatguid': function() {
            return chatGuid;
        },
        'get_time_delay': function() {
            return window.time_delay;
        },
        'bottom_tabs': bottom_tabs,
    };
})();












//heartbeat
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
function start_offline_heartbeat() {
    start_heartbeat(2, heartbeat_interval.offline);
}





//prechat
function start_chat_click() {
    try {
        var vals = get_fields_value('prechat-fields', init_data.prechat_fields);
        if (vals == null)
            return;
        submit_prechat(vals);
    } catch (e) {
        //enable submit, hide loading indicator.
    }
}

//pre-login
function chat_as_visitor_click() {
    try {
        nav_params.loginOrContinue = false;  //iflogin

        send_action(20, nav_params, function (res) {
            $('btn-start-chat').disabled = '';
            if (res.c)
                return;
            var list = eval(res.fl);
            frequencyLimiter = list ? frequency_limit({
                VisitorMsgRestrictDuration: list[0],
                VisitorMsgRestrictCount: list[1],
                VisitorMsgRestrictTime: list[2],
                VisitorMsgRestrictRepeatCount: list[3]
            }) : (frequencyLimiter ? frequencyLimiter : null);
            init_data.attachmentDownloadToken = res.at;
            chatGuid = res.cg;
            $('chat-greeting').innerHTML = res.chat_greeting || '';
            chatId = res.chat_id;

            if ((window.ie == 6) || (window.ie == 7)) {
                $('prechat-window').innerHTML = '';
                setTimeout(function () {
                    goto_window(res.w);
                }, 100);
            } else {
                goto_window(res.w);
            }
        });
    } catch (e) {
    }
}

function sso_login_click() {
    nav_params.loginOrContinue = true;

    $('#btn-start-chat').addClass('ui-disabled');
    send_action(20, nav_params, request_chat_handler(function (res) {
        $('#btn-start-chat').removeClass('ui-disabled');
    }, function (res) {
        $('#btn-start-chat').removeClass('ui-disabled');
    }));
}

function request_chat_handler(fncomplete, fnerror) {
    return function (res) {
        if (res.c) {
            if (fnerror) fnerror(res);
            return;
        }

        if(typeof res.server_current_time !== 'undefined') {
            var seconds = parseInt(res.server_current_time.match(/Date\((\d+)\)/)[1]);
            seconds -= (new Date).getTimezoneOffset() * 60;
            window.time_delay = seconds - Date.now();
        }

        function complete_request_chat(res) {
            if (fncomplete) fncomplete(res);

            if (res.chat_id > 0) {
                chatGuid = res.cg;
                chatId = res.chat_id;
            }

            goto_window(res.w, res.rp);
        }

        if (res.w == visitor_window.chat) {
            init_data.attachment_max_size = res.attachment_max_size;
            init_data.lang_too_large_error = res.lang_too_large_error;
            init_data.attachmentDownloadToken = res.at;
            set_frequency_limiter(eval(res.fl));

            if (res.chat_greeting) {
                chat_window.set_chat_greeting(res.chat_greeting);
            }

            if (res.user_name) {
                $('#rename-control').val(res.user_name);
            }
            if (res.user_email) {
                $('#send-email-control').val(res.user_email);
            }
        }

        if (res.chat_id > 0) {
            complete_request_chat(res);
        } else {
            if (res.w != null && res.w != visitor_window.chat) {
                goto_window(res.w, res.rp);
                return;
            }
            start_system_processing(complete_request_chat);
        }
    }
}

function submit_prechat(prechat_data) {
    init_offline_fields_from_prechat(prechat_data);
    chat_window.init_name_email(prechat_data.Name || '', prechat_data.Email || '');

    prechat_data.nav_params = nav_params;
    if (prechat_data.TicketId == -1)
        prechat_data.TicketId = nav_params.ticket;

    $('#btn-start-chat').addClass('ui-disabled');
    changePage('#loading-window');
    send_action(7, prechat_data, request_chat_handler(function (res) {
        prechatDone = true;
        $('#btn-start-chat').removeClass('ui-disabled');
    }, function (res) {
        prechatDone = true;
        $('#btn-start-chat').removeClass('ui-disabled');
    }));
}

function submit_social_info(data) {
    chat_window.init_name_email(data.name || '', data.email || '');

    data.nav_params = nav_params;

    $('#btn-start-chat').addClass('ui-disabled');
    send_action(15, data, request_chat_handler(function (res) {
        $('#btn-start-chat').removeClass('ui-disabled');
    }, function (res) {
        $('#btn-start-chat').removeClass('ui-disabled');
    }));
}

var prechatDone = false;

function set_frequency_limiter(args) {
    frequencyLimiter = args ? frequency_limit({
        VisitorMsgRestrictDuration: args[0],
        VisitorMsgRestrictCount: args[1],
        VisitorMsgRestrictTime: args[2],
        VisitorMsgRestrictRepeatCount: args[3]
    }) : (frequencyLimiter ? frequencyLimiter : null);
}

function try_enter_chat() {
    send_action(8, nav_params, request_chat_handler(), null, prechatDone ? '&prechatDone=1' : '');
}

function start_system_processing(fn_chat_started) {
    start_heartbeat(visitor_action.heartbeat_for_system_processing, heartbeat_interval.chat, function (resp) {
        if (resp.w != visitor_window.chat || resp.chat_id > 0) {
            fn_chat_started(resp);
        }
    });
}

function initlanguages(languages) {
    var languages_data = {};
    for (var i = 0; i < languages.length; ++i) {
        languages_data[languages[i].key] = languages[i].value;
    }
    return languages_data;
}

function initialize(data) {
    window.init_data = data;
    window.languages_data = initlanguages(init_data.languages);

    $('#send-email-control').attr('placeholder', languages_data.LanguageMobileEnterYourEmailHere);
    $('#rename-control').attr('placeholder', languages_data.LanguageMobileEnterYourNameHere);



    // if (!$('#tool-rating').is(':visible') && !$('#tool-email').is(':visible') 
    //     && !$('#tool-rename').is(':visible')) {
    //     $('#chat-tools').hide();
    //     // $('#chat-tools-wrap').width('8px');
    // }
}


function initconfigs(configs) {
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
    init_data.if_can_audio_chat = configs.if_can_audio_chat;
    init_data.if_can_video_chat = configs.if_can_video_chat;

    var prechat_fields = configs.prechat_fields;
    var offline_fields = configs.offline_fields;
    var postchat_fields = configs.postchat_fields;

    init_fields('#prechat-window', prechat_fields);
    init_fields('#offline-window', offline_fields);
    init_fields('#postchat-window', postchat_fields);

    if (configs.social_media) {
        var sm = configs.social_media;
        if (!sm.fb_login && !sm.gp_login) {
            $('#social-logins').hide();
        }
        init_data.social_media = configs.social_media;
    } else {
        //no social_media only happens when chatServerCore is old version
        $('#social-logins').hide();
    }

    var resources_id = configs.resources_id;
    $('#prechat-greeting').html(languages_data.LanguageGreetingPreChatWindow);
    $('#postchat-greeting').html(languages_data.LanguageGreetingRating);
    $('#offline-greeting').html(languages_data.LanguageGreetingOfflineMessageWindow);
    $('.branding').html(configs.resources_id.branding);

    //init_rating(configs.rating_grades);
    rating_control.init(configs.rating_grades, configs.postchat_fields);

    //var resources_class = init_data.resources_class;
    for (var item in languages_data) {
        var val = languages_data[item];
        if (typeof val == 'function')
            continue;

        $('.' + item).each(function () {
            set_resource_value(this, val);
        });
    }

    $('#tester-icon-rename').html('');
    $('#tester-icon-email').html('');
    $('#tester-icon-rating').html('');
    $('#tester-icon-upload').html('');
    $('#start-window').on('pageshow', function () {
        if (!$('#tester-icon-rename').is(':visible') &&
            !$('#tester-icon-email').is(':visible') &&
            !$('#tester-icon-rating').is(':visible') &&
            !$('#tester-icon-upload').is(':visible')) {
            $('#chat-tools').hide();
        }
    });

    if(ifSupportWebrtc && (init_data.if_can_audio_chat || init_data.if_can_video_chat)) {
        var script = document.createElement('script');
        script.src = 'mobile/mmediachat.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'mobile/mmediachat.css';
        style.type = 'text/css';
        document.head.appendChild(style);

        window.comm100_media_chat_loaded = main;
        window.comm100_chat_window = chat_window;
        window.if_can_audio_chat = init_data.if_can_audio_chat;
        window.if_can_video_chat = init_data.if_can_video_chat;
        window.comm100_server_origin = init_data.server.substring(0, init_data.server.indexOf('/'));
        $('#popupMenu').addClass('high');
    }
    else {
        main();
        $('.icon-audio-chat').hide();
        $('.icon-video-chat').hide();
    }
}

var s;
var ua = navigator.userAgent,
	chrome_ios = (ua.indexOf('CriOS') != -1);

var android = null;
if (s = ua.match(/Android ([\d.]+)/))
    android = parseFloat(s[1]);

var iPhone = null;
if (s = ua.match(/iPhone OS ([\d_]+)/)) {
    var v = s[1].split('_');
    iPhone = parseFloat(v[0] + '.' + v[1] + v[2]);
}
var safari = null;
if (s = ua.match(/Safari[\/]([\d.]+)/)) {
    var v = s[1].split('.');
    safari = parseFloat(v[0] + '.' + v[1] + v[2]);
}
//alert(iPhone);
function check_android_less(version) {
    if (isNaN(android))
        return false;

    return android < version;
}
function check_iPhone_less(version) {
    if (isNaN(iPhone))
        return false;

    return iPhone < version;
}

var supportFix = true;//!check_android_less(5) || !check_iPhone_less(5);
if (!supportFix) {
    $('#text-input').css({ 'position': 'absolute', 'bottom': '0px' });
}
// if (chrome) {
//     $('#chat-content-bottom').css('height', '44px');
// }
//
$('#chat-window').on('pageinit', function () {
    $('.btn-back').click(function () {
        changePage('#chat-window', { reverse: true });
    });

    if (supportFix) {
        $('#chat-input-control').focus(function () {
            $('#chat-window').toggleClass('keyboard-up', true);
            $('html, body').scrollTop(10000);
        });
        $('#chat-input-control').blur(function () {
            $('#chat-window').toggleClass('keyboard-up', false);
        });
    }

    $('#chat-content').on('tap', function () {
        var o = $('#popupMenu');
        if (o.is(':visible')) {
            o.hide();
            $('#chat-tools').removeClass('on').addClass('off');
        }
    });

    $('#chat-tools-wrap').touchstart(function (e) {
        if ($('#chat-input-control').is(':focus')) {
            $('#chat-input-control').focus();
        }
        var o = $('#chat-tools');
        if (o.hasClass('on')) {
            o.removeClass('on').addClass('off');
        } else {
            o.removeClass('off').addClass('on');
        }

        var p = $('#popupMenu');
        if (p.is(':visible')) {
            p.hide();
        } else {
            var bottom = $('#bottom-tab').is(':visible') ? '97px' : '62px';
            if (supportFix) {
                p.css({ position: 'fixed', bottom: bottom, left: '15px', display: 'block' });
            } else {
                p.css({ position: 'absolute', bottom: bottom, left: '15px', display: 'block' });
            }
        }
        return false;
    });

    $('#btn-send-td').touchstart(function (e) {
        chat_window.send_text_message();
        $('#chat-input-control').focus();
        return false;
    });

    $('#btn-end-chat').touchstart(function (e) {
        chat_window.end_chat();
        return false;
    });
});

$('#chat-window').on('pageshow', function () {
    $('html, body').scrollTop(10000);
});


//window switch
var current_window = visitor_window.chat;
function show_window(className) {
    replace_class(document.body, /ui-prechat|ui-offline|ui-login|ui-ban|ui-loading|ui-chatting|ui-chat-not-start|ui-prelogin/i, className);
}
function goto_prechat() {
    changePage('#prechat-window');

    focus_first_input('prechat-window');

    current_window = visitor_window.prechat;
    start_prechat_heartbeat();

    set_window_title(languages_data.LanguageTitlePreChatWindow);
}
function changePage(selector) {
    try {
        $.mobile.changePage(selector);
    } catch (e) {
        //seems jQuery mobile has a bug here
        setTimeout(function () {
            $.mobile.changePage(selector);
        }, 2000);
    }
}
function goto_chat() {
    changePage('#chat-window');

    current_window = visitor_window.chat;

    chat_window.start();
}
function goto_postchat() {
    // stop_heartbeat();
    changePage('#postchat-window');
    $('#postchat-window-header h1').html($('#chat-window-header h1').html());
}
function goto_offline() {
    if (init_data && languages_data.GotoOfflineMessageHTML) {
        var match = /<a.*href="([^"]+)">/.exec(languages_data.GotoOfflineMessageHTML);
        if (match) {
            var url = match[1];
            window.resizeTo(1024, 768);
            window.location.href = url;
            return;
        }
    }

    changePage('#offline-window');
    focus_first_input('offline-window');

    current_window = visitor_window.offline;
    start_offline_heartbeat();
}
function goto_ban() {
    changePage('#ban-window');
    if(typeof MediaChat !== 'undefined') {
        MediaChat.forceStopP2PChat();
    }
    current_window = visitor_window.ban;
    stop_heartbeat();
}
function goto_login() {
}
function goto_prelogin() {
    changePage('#prelogin-window');
    current_window = visitor_window.prelogin;
    set_window_title(languages_data.LanguageTitlePreChatWindow);
}
function goto_window(w, rp) {
    switch (w) {
        case visitor_window.login:
            goto_login();
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
}

function change_close_to_chat_end() {
    // replace_class($('btn-chat-close'), 'end-waiting', 'end-chat');
}
function change_chat_end_to_close() {
    // replace_class($('btn-chat-close'), 'end-chat', 'end-waiting');
}
function focus_first_input(id) {

}



//main

function send_action(action, data, success, error, query) {
    var has_timeout = !(action == 7 || action == 8 || action == 9 || action == 15);
    server.post(data || '', 'visitorId=' + visitorId + '&visitorGuid=' + visitorGuid + '&sessionId=' + sessionId + '&a=' + action + (nav_params.chatGroup === null ? '' : '&chatGroup=' + nav_params.chatGroup),
        success, error, has_timeout);
}

function check_if_ban_error(err) {
    var code = err.c;
    if (code)
        return (code == 1024) || (code == 1032) || (code == 1037);
    return false;
}

function show_error(message) {
    alert(message);
}


function main() {
    server.setup(init_data.server, init_data.standby_server, function (current_server) {
        if (current_server != -1) {
            visitorId = 0;
            sessionId = 0;
            chatId = 0;
        }

        load_offline_iframe();

        if (current_window == visitor_window.chat && chat_window.is_waiting_for_chat()) {
            chatGuid = "";
            try_enter_chat();
        }
    });
}

function onDomReady(f) {
    $(document).ready(f);
}

function postchat_hide_system_fields() {
    var removed = [];
    for (var i = 0; i < init_data.postchat_fields.length; i++) {
        var f = init_data.postchat_fields[i];
        if (f.is_system) {
            f.required = false;
            removed.push('#field-' + f.id);
            removed.push('label[for="field-' + f.id + '"]');
        }
    }

    setTimeout(function () {
        $(removed.join(',')).hide();
    }, 100);

    // $('#postchat-window .system-field').hide();
    // var nodes = $('postchat-fields').getElementsByTagName('tr');
    // log(nodes);

    // for (var i = 0,len = nodes.length; i<len; i++) {
    //     var n = nodes[i];
    //     if (has_class(n, 'system-field')) {
    //         hide_element(n);
    //     }
    // }
}
