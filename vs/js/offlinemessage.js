function enter_offline() {
    send_action(9, '', function () {
        chat_window.change_current_visitor_status_chat_ended();
        goto_window(visitor_window.offline);
    });
}

function start_offline_heartbeat() {
    start_heartbeat(2, heartbeat_interval.offline);
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
    var val = prechat_data[system_name];
    if (val) {
        var id = 'field-' + get_offline_field_id(system_name);
        var ele = $(id);
        if (ele) {
            ele.value = val;
            if (system_name == 'Department') {
                update_dropdownlist_selected(ele);
            }
        }
    }
}

function init_offline_fields_from_prechat(prechat_data) {
    set_offline_field_value(prechat_data, 'Name');
    set_offline_field_value(prechat_data, 'Company');
    set_offline_field_value(prechat_data, 'Phone');
    set_offline_field_value(prechat_data, 'Email');
    var val = prechat_data['TicketId'];
    if (val != '-1') {
        set_offline_field_value(prechat_data, 'TicketId');
    }
    set_offline_field_value(prechat_data, 'Department');
    set_offline_field_value(prechat_data, 'ProductService');

    //copy custom fields
    for (var i = 0, leni = init_data.prechat_fields_forcustomer.length; i < leni; i++) {
        var pf = init_data.prechat_fields_forcustomer[i];
        if (!pf.getIfSystem()) {
            var val = pf.getValue();
            var name = pf.getName();
            for (var j = 0, lenj = init_data.offline_fields_forcustomer.length; j < lenj; j++) {
                var of = init_data.offline_fields_forcustomer[j];
                if (!of.getIfSystem() && of.getName() == name) {
                    of.setValue(val);
                    break;
                }
            }
        }
    }
}


var offlineMessageForm;
function load_offline_iframe() {
    // 只包含两个字段，一个用于上传文件，一个用于提交数据
    xform('ifr-offline', $('ifr-offline-control'), [{
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
        var attachment = form.getElement('attachment');
        attachment.onblur = attachment_control_blur;
        attachment.onchange = attachment_control_blur;
        offlineMessageForm = form;
    });
    $('btn-submit-offline').disabled = '';
}

function getOfflineMessageFormAction() {
    return server.get_url('/liveChatVisitorHandler.ashx?a=10&siteId=' + siteId + '&planId=' + planId
        + '&visitorId=' + visitorId + '&visitorGuid=' + visitorGuid
        + (nav_params.chatGroup === null ? '' : ('&chatGroup=' + nav_params.chatGroup)));
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

function submit_offline_message(success, error) {
    hide_error();

    var data = getOfflineMessageData();
    if (data == null) {
        if (error) error();
        return;
    }

    var errorFunc = function (err) {
        $('offline-window').scrollTop = 0;
        show_error(err)

        if (error) error(err);
    }

    var successFunc = function (resp) {
        if (success) success();
        xd.post_message('offlinemessage');
        dialog.info(resp.message, close_window);
    }

    $('btn-submit-offline').disabled = 'disabled';
    offlineMessageForm.submit(
        getOfflineMessageFormAction(),
        data,
        function (resp) {
            load_offline_iframe();

            if (resp.c) {
                if (resp.c == 2002)
                    errorFunc("Your message should not exceed 2048 characters in length.");
                else
                    errorFunc(resp.e);
            } else {
                successFunc(resp);
            }
        },
        function () {
            load_offline_iframe();

            errorFunc('Submit offline message error');
        }
    );
}


