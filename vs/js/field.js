var attachment_control_blur = function () { };

function set_resource_value(ele, val, isHTML) {
    if (ele == null) {
        return;
    }
    switch (ele.tagName.toLowerCase()) {
        case 'input':
            ele.value = val;
            break;
        case 'textarea':
            ele.placeholder = val;
            break;
        case 'span':
            if (ele.className.contains('icon')) {
                ele.title = val;
                break;
            }
        case 'div':
        case 'td':
        case 'p':
        case 'a':
        case 'label':
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

function newElement(tag, id, className) {
    var e = document.createElement(tag)
    if (id != null) e.id = id;
    if (className != null) e.className = className;
    return e;
}

function stars_control(id, options, fn_blur, field_id) {
    var control = {};
    control.current_rate_mouseover = 0;
    control.selected_rate = 0;
    control.id = id;
    control.fn_blur = fn_blur;
    control.field_id = field_id;
    function onmousein(ele) {
        var nodes = $(control.id).childNodes;
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];

            remove_class(n, 'icon-no-rating-large');
            add_class(n, 'icon-rating-large');

            if (n == ele) {
                control.current_rate_mouseover = parseInt(ele.id.replace(control.id + '-option-', ''));

                // console.log(n);
                for (++i; i < nodes.length; i++) {
                    var n = nodes[i];
                    remove_class(n, 'icon-rating-large');
                    add_class(n, 'icon-no-rating-large');
                }
            }
        }
    };
    function onmouseout() {
        // console.log('onmoseout');
        var nodes = $(control.id).childNodes;
        for (var i = nodes.length - 1; i >= 0; i--) {
            var n = nodes[i];

            if (n.id == control.id + '-option-' + control.selected_rate) {
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
    control.onclick = function onclick() {
        if (fn_blur) fn_blur(control.field_id, true, field_type.stars);

        control.selected_rate = control.current_rate_mouseover;
    };
    control.setValue = function (v) {
        control.selected_rate = v;
        onmouseout();
    };
    window[id+'-stars-control'] = control;

    var len = options.length;
    var stars = newElement('span', id, 'box-stars');
    stars.onclick = function () { control.onclick() };
    stars.onmouseout = onmouseout;

    for (var i = len - 1; i >= 0; i--) {
        var props = options[i];
        var star = newElement('span', id + '-option-' + props.id, 'icon-large icon-no-rating-large');
        star.onmouseover = function () {
            onmousein(this);
        };
        star.title = props.label;
        stars.appendChild(star);
    }
    return stars;
}


var rating_control = (function() {
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
            if (if_rating_required || if_comment_required)
                $('btn-submit-rating').validated = false;

            var stars = stars_control('rating-grades', rating_grades, function () {
                setTimeout(function () {
                    if ((if_rating_required && rating_control.get_selected_rate() == 0) || (if_comment_required && $('rating-comment-control').value == "")) {
                        $('btn-submit-rating').validated = false;
                    }
                    else {
                        $('btn-submit-rating').validated = true;
                    }
                }, 10);
            });
            $('rating-comment-control').onblur = function () {
                setTimeout(function () {
                    if ((if_rating_required && rating_control.get_selected_rate() == 0) || (if_comment_required && $('rating-comment-control').value == "")) {
                        $('btn-submit-rating').validated = false;
                    }
                    else
                        $('btn-submit-rating').validated = true;
                }, 10);
            };
            $('box-rating-grades').appendChild(stars);
            if (if_rating_required) {
                var spanRequired = newElement('span', null, 'red required');
                set_text(spanRequired, '*');
                $('box-rating-grades').appendChild(spanRequired);
            }

            if (!placeholder_supported()) {
                function change_placeholder() {
                    var ele = $('rating-comment-control');
                    if (!!ele.value) {
                        hide_element('rating-comment-placeholder');
                    } else {
                        show_element('rating-comment-placeholder', 'block');
                    }
                }
                setInterval(change_placeholder, 50);
            }
        }
    }

    function get_selected_rate() {
        // alert(window['rating-grades-stars-control'].selected_rate);

        return window['rating-grades-stars-control'].selected_rate;
    }
   
    return {
        'init': init,
        'get_selected_rate': get_selected_rate
    };
})();

function get_fields_value(id, fields) {
    var ele_table = $(id);
    var res = {'custom': []};
    var passed = true;
    for (var i = 0, len = fields.length; i < len; i++) {
        var f = fields[i];
        var id = f.id;
        var val = check_and_get_field(id, f.required, f.type);
        if (typeof val === 'undefined') {
            val = '';
            passed = false;
        }
        if (!f.is_system) {
            res.custom.push({'id': id,'value': val,'label': f.label});
        } else {
            res[f.system_name] = val;
        }
    }
    res.TicketId = res.TicketId || -1;
    return passed ? res : null;
}

function show_hide_required(id, passed) {
    if (passed) {
        // hide_element('field-require-message-' + id);
        setTimeout(function() {
            remove_class($('box-field-'+id), 'required');
        }, 100);
    } else {
        setTimeout(function() {
            add_class($('box-field-'+id), 'required');
        }, 100);
        
        // hide_element('field-invalid-message-' + id);
        // show_element('field-require-message-' + id, 'inline-block');
    }
}

window['form_field_blur'] = function form_field_blur(id, required, type) {
    setTimeout(function() {
        // console.log(flag_window_closing);
        if (flag_window_closing) return;
        check_and_get_field(id, required, type);
    }, 200);
}

function check_and_get_field(id, required, type) {
    var val = null;
    var ele = $('field-' + id);
    var pass_required = true;
    if (type == field_type.department) {
        val = ele.value;
        if (required)
            pass_required = (val != '-1');
        val = val || '0';
    } else if (type == field_type.checkbox) {
        val = ele.checked;
        if (required)
            pass_required = ele.checked;
    } else if ((type == field_type.radiolist) || (type == field_type.checkboxlist)) {
        val = get_list_value(ele).join(filter_charactor);
        if (required)
            pass_required = (val.trim().length > 0);
    } else if (type == field_type.file) {
        if (required) {
            var attachmentName = offlineMessageForm.getElement('attachment').value;
            pass_required = attachmentName != null && attachmentName != '';
        }
    } else if (type == field_type.stars) {
        var control = window['field-'+id+'-stars-control'];
        val = control.selected_rate;
        if (required)
            pass_required = (val > 0);
    } else {
        val = ele.value;
        if (required)
            pass_required = (val.trim().length > 0);
    }
    if (type == field_type.email) {
        var pass_valid = check_email_valid(id, val);
        show_hide_required(id, pass_valid);
        if (!pass_valid) {
            return;
        }
    }
    if (required) {
        show_hide_required(id, pass_required);
        if (!pass_required)
            return;
    }
    return val;
}

function check_email_valid(id, val) {
    if (val.isValidEmail()||val.isEmpty()) {
        setTimeout(function() {
            hide_element('field-invalid-message-' + id);
            show_element('field-require-message-' + id, 'inline'); 
        }, 100);                                                                                              
        return true;  //empty is also valid
    } else {
        setTimeout(function() {
            hide_element('field-require-message-' + id);
            show_element('field-invalid-message-' + id, 'inline');
        }, 100);
        return false;
    }
}

function get_list_value(ele) {
    var list = ele.getElementsByTagName('INPUT');
    var vals = [];
    for (var i = 0, len = list.length; i < len; i++) {
        var ele = list[i];
        if (ele.checked && ele.value.trim().length > 0) {
            vals.push(ele.value);
        }
    }
    return vals;
}

function init_fields(id, fields, form_style) {
    var table = document.createElement('table');
    table.cellSpacing = 0;
    table.className = 'field-table ' + (form_style == 0 ? 'form-style-hor' : 'form-style-ver');

    for (var i = 0, len = fields.length; i < len; i++) {
        var f = fields[i];
        if (form_style == 0) { //hor
            //make tr
            var trClassName = 'box-field';
            if (f.is_system) trClassName += ' system-field';
            if (f.type == field_type.checkbox) trClassName += ' checkbox-field-label-hor';
            var tr = newElement('tr', 'box-field-' + f.id, trClassName);

            //field name
            var tdFieldName = newElement('td', null, 'field-name');
            var fieldName = newElement('label');
            set_text(fieldName, f.label);
            tdFieldName.appendChild(fieldName);

            //field control
            var tdFieldCtrl = newElement('td', null, 'td-field-control');
            //control
            var cpf = f;
            if (f.type == field_type.checkbox) {
			    cpf = copy_obj(f);
			    cpf.label = ''; //hor checkbox don't display label
			}
            tdFieldCtrl.appendChild(create_field(cpf));
            //validation message
            var divValidation = newElement('div', null, 'validation-message');
            if (f.required) {
                var spanRequired = newElement('span', 'field-require-message-' + f.id, 'red LanguagePromptRequired');
                divValidation.appendChild(spanRequired);
            }

            if (f.type == field_type.email) {
                var spanInvalidEmail = newElement('span', 'field-invalid-message-' + f.id, 'red lang-invalid-email LanguagePromptInvalidEmail');
                divValidation.appendChild(spanInvalidEmail);
            }

            tdFieldCtrl.appendChild(divValidation);

            var tdAsterisk = newElement('td');
            if (f.required) {
                var spanAsterisk = newElement('span', null, 'red star');
                set_text(spanAsterisk, '*');
                tdAsterisk.appendChild(spanAsterisk);
            }

            tr.appendChild(tdFieldName)
            tr.appendChild(tdFieldCtrl);
            tr.appendChild(tdAsterisk);
            table.appendChild(tr);
        } else {
            //make tr
            var trClassName = 'box-field';
            if (f.is_system) trClassName += ' system-field';
            if (f.type == field_type.checkbox) trClassName += ' checkbox-field-label-hor';
            var tr = newElement('tr', 'box-field-' + f.id, trClassName);

            //field name
            var tdFieldName = newElement('td', null, 'field-name');
            var fieldName = newElement('label');
            set_text(fieldName, f.label);
            tdFieldName.appendChild(fieldName);

            //validation message
            if (f.required) {
                var spanAsterisk = newElement('span', null, 'red star');
                set_text(spanAsterisk, '*');
                tdFieldName.appendChild(spanAsterisk);
            }
            var spanValidation = newElement('span', null, 'validation-message');
            if (f.required) {
                var spanRequired = newElement('span', 'field-require-message-' + f.id, 'red LanguagePromptRequired');
                spanValidation.appendChild(spanRequired);
            }
            if (f.type == field_type.email) {
                var spanInvalidEmail = newElement('span', 'field-invalid-message-' + f.id, 'red lang-invalid-email LanguagePromptInvalidEmail');
                spanValidation.appendChild(spanInvalidEmail);
            }
            tdFieldName.appendChild(spanValidation);

            //field control
            var trFieldCtrlClassName = '';
            if (f.is_system)trFieldCtrlClassName += ' system-field';
            var trFieldCtrl = newElement('tr', trFieldCtrlClassName);
            var tdFieldCtrl = newElement('td', null, 'td-field-control');
            tdFieldCtrl.appendChild(create_field(f));
            trFieldCtrl.appendChild(tdFieldCtrl);

            tr.appendChild(tdFieldName)
            table.appendChild(tr);
            table.appendChild(trFieldCtrl);
        }

    }

    var form = $(id);
    form.appendChild(table);
    init_custom_ctrl(form);
}

function create_field(f) {
    function create_field_input(f, fieldType) {
        var ele = newElement('input', 'field-' + f.id, 'field-control');
        ele.maxLength = f.max_length || 256;
        ele.value = f.value;
        ele.type = 'text';
        ele.onblur = function () {
            form_field_blur(f.id, f.required, fieldType || field_type.input);
        };
        return ele;
    }

    function create_field_select(f, fieldType) {
        fieldType = fieldType || field_type.select;
        var div = newElement('div', null, 'dropdown field-control');
        var select = newElement('select', 'field-' + f.id);
        if (fieldType == field_type.select) {
            var option = newElement('option');
            option.value = '';
            set_text(option, languages_data.LanguageDropdownListDefault);
            select.appendChild(option);
        }
        for (var i = 0; i < f.options.length; i++) {
            var props = f.options[i];
            var option = newElement('option');
            option.className = props.class_name;
            option.value = props.value || props.label;
            if (option.value == f.value) {
                option.selected = true;
            }
            set_text(option, props.label);
            select.appendChild(option);
        }
        select.onblur = function () {
            form_field_blur(f.id, f.required, fieldType);
        };
        div.appendChild(select);
        return div;
    }

    function create_field_department(f) {
        return create_field_select(f, field_type.department);
    }

    function create_field_radio_button_list(f) {
        var div = newElement('div', 'field-' + f.id);
        div.className = 'field-radio-list field-control';
        for (var i = 0; i < f.options.length; i++) {
            var props = f.options[i];
            var option = newElement('div', null, 'field-control-row');
            var input = newElement('input', 'field-option-' + f.id + '-' + i, 'field-control-input');
            input.type = 'radio';
            input.checked = props.label == f.value;
            input.value = props.label;
            input.name = 'field-name-' + f.id;
            input.onclick = function () {
                form_field_blur(f.id, f.required, field_type.radiolist);
            }

            var label = newElement('label', null, 'radio-label');
            label.htmlFor = input.id;
            set_text(label, props.label);

            option.appendChild(input);
            option.appendChild(label);
            div.appendChild(option);
        }
        return div;
    }

    function create_field_checkbox_list(f) {
        var values = f.value.split(filter_charactor);
        var bag = {};
        for (var i = values.length - 1; i >= 0; i--) {
            bag[values[i]] = 1;
        }

        var div = newElement('div', 'field-' + f.id);
        div.className = 'field-checkbox-list field-control';
        for (var i = 0; i < f.options.length; i++) {
            var props = f.options[i];
            var option = newElement('div', null, 'field-control-row');
            var input = newElement('input', 'field-option-' + f.id + '-' + i, 'field-control-input');
            input.type = 'checkbox';
            input.checked = bag[props.label];
            input.value = props.label;
            input.name = 'field-name-' + f.id;
            input.onclick = function () {
                form_field_blur(f.id, f.required, field_type.checkboxlist);
            }

            var label = newElement('label', null, 'checkbox-label');
            label.htmlFor = input.id;
            set_text(label, props.label);

            option.appendChild(input);
            option.appendChild(label);
            div.appendChild(option);
        }
        return div;
    }

    function create_field_ticket_id(f) {
        var span = newElement('span', null, 'field-ticket-prefix');
        set_text(span, 'S' + siteId + '-T');
        var input = newElement('input', 'field-' + f.id, 'field-control field-ticket');
        input.type = 'text';
        input.onblur = function () {
            form_field_blur(f.id, f.required, field_type.ticket);
        }
        input.value = f.value == -1 ? '' : f.value;
        input.maxLength = f.max_length || 256;
        var div = newElement('div');
        div.appendChild(span);
        div.appendChild(input);
        return div;
    }

    function create_field_textarea(f) {
        var area = newElement('textarea', 'field-' + f.id, 'field-control');
        area.onblur = function () {
            form_field_blur(f.id, f.required, field_type.textarea);
        }
        set_text(area, f.value);
        return area;
    }

    function create_field_input_email(f) {
        return create_field_input(f, field_type.email);
    }

    function create_field_file(f) {
        attachment_control_blur = function () {
            form_field_blur(f.id, f.required, field_type.file);
        };

        return newElement('span', 'ifr-offline-control', 'field-control field-attachment');
    }

    function create_field_stars(f) {
        return stars_control('field-' + f.id, f.options, f.required ? form_field_blur : null, f.id);
    }

    function create_field_checkbox(f) {
        var div = newElement('div', null, 'field-checkbox-list field-control');
        var divRow = newElement('div', null, 'field-control-row');
        var input = newElement('input', 'field-' + f.id, 'field-control-input');
        input.type = 'checkbox';
        input.onchange = function () {
            form_field_blur(f.id, f.required, field_type.checkbox);
        };
        var label = newElement('label', null, 'checkbox-label');
        label.htmlFor = input.id;
        set_text(label, f.label);

        divRow.appendChild(input);
        divRow.appendChild(label);
        div.appendChild(divRow);
        return div;
    }

    switch (f.type) {
        case field_type.input:
            return create_field_input(f);
        case field_type.select:
            return create_field_select(f);
        case field_type.radiolist:
            return create_field_radio_button_list(f);
        case field_type.checkboxlist:
            return create_field_checkbox_list(f);
        case field_type.ticket:
            return create_field_ticket_id(f);
        case field_type.email:
            return create_field_input_email(f);
        case field_type.textarea:
            return create_field_textarea(f);
        case field_type.checkbox:
            return create_field_checkbox(f);
        case field_type.file:
            return create_field_file(f);
        case field_type.department:
            return create_field_department(f);
        case field_type.stars:
            return create_field_stars(f);
    }
}

// this is requried to be called when field has been added in HTML, otherwise DOM cannot be found
var fieldTypeFactory = function fieldTypeFactory(field) {
    // cache field settings, in case `field` object get changed outside context
    var cachedField = {};
    var originalField = field;

    var init = function init() {
        var i, j;
        cachedField.domElementId = 'field-' + field.id;
        var element = document.getElementById(cachedField.domElementId);
        for (var key in field) {
            if (!field.hasOwnProperty(key)) continue;
            if (field[key].slice !== undefined) {
                // duck type check: is array
                cachedField[key] = field[key].slice();
            } else {
                cachedField[key] = field[key];
            }
        }
        // dom element is for hide/show, hence is the root element
        // which might be different as domElementId, which represents the actual element
        if (field.type === field_type.select || field.type === field_type.department) {
            cachedField.dom = element.parentNode;
        } else if (field.type === field_type.checkbox) {
            cachedField.dom = element.parentNode.parentNode;
        } else {
            cachedField.dom = element;
        }

        if (field.type === field_type.department) {
            for (i = 0; i < cachedField.options.length; i += 1) {
                for (j = 0; j < init_data.department_info.length; j += 1) {
                    if (cachedField.options[i].id === init_data.department_info[j].id) {
                        cachedField.options[i].name = init_data.department_info[j].name;
                    }
                }
            }
        }
    };

    function first_tag(ele, tag) {
        return ele.getElementsByTagName(tag)[0];
    }
    function parent_first_tag_inner_text(ele, tag) {
        return inner_text(first_tag(ele.parentNode, tag));
    }

    // TODO: since type is determined when initialize, getValue function can be settled down 
    // without switch during run time
    var getValue = function getValue() {
        var dom = cachedField.dom, type = cachedField.type, list, ret = [], i;
        if (type === field_type.input || type === field_type.textarea || type === field_type.email || type === field_type.ticket) return dom.value;
        else if (type === field_type.select || type === field_type.department) {
            dom = first_tag(dom, 'select');
            return dom.value;
        }
        else if (type === field_type.radiolist || type === field_type.checkboxlist) {
            list = dom.getElementsByTagName('input');
            for (i = 0; i < list.length; i += 1) {
                if (list[i].checked) ret.push(parent_first_tag_inner_text(list[i], 'label'));
            }
            return ret;
        }
        else if (type === field_type.stars) {
            return window['field-' + cachedField.id + '-stars-control'].selected_rate + '';
        } else if (type === field_type.checkbox) {
            dom = first_tag(dom, 'input');
            return dom.checked ? cachedField.label : null;
        } else if (type === field_type.select) {
            return dom.value === '' ? '' : parent_first_tag_inner_text(dom, 'span');
        } else if (type === field_type.department) {
            return +dom.value < 0 ? '' : parent_first_tag_inner_text(dom, 'span');
        }
    };

    var getOptions = function getOptions() {
        var parseOptions = function parseOptions(options) {
            var ret = [], i;
            for (i = 0; i < options.length; i += 1) {
                ret.push(options[i].label);
            }
            return ret;
        }, type = cachedField.type, department = [], i;
        if (type === field_type.select || type === field_type.stars ||
            type === field_type.radiolist || type === field_type.checkboxlist) {
            return parseOptions(cachedField.options);
        } else if (type === field_type.checkbox) {
            return [cachedField.label];
        } else if (type === field_type.department) {
            for (i = 0; i < cachedField.options.length; i += 1) {
                if (cachedField.options[i].name !== undefined) {
                    department.push(cachedField.options[i].name);
                }
            }
            return department;
        } else {
            return null;
        }
    };

    var setValue = function setValue(value) {
        var dom = cachedField.dom, type = cachedField.type, inputList, list, i, j;
        if (type === field_type.input || type === field_type.textarea || type === field_type.email || type == field_type.ticket) {
            dom.value = value; return;
        } else if (type === field_type.radiolist || type === field_type.checkboxlist) {
            inputList = [].concat(value);
            list = dom.getElementsByTagName('input');
            for (i = 0; i < list.length; i += 1) {
                list[i].checked = false;
                var val = parent_first_tag_inner_text(list[i], 'label');
                for (j = 0; j < inputList.length; j += 1) {
                    if (inputList[j] === val) {
                        list[i].checked = true;
                        break;
                    }
                }
            }
        }
        else if (type === field_type.stars) {
            window['field-' + cachedField.id + '-stars-control'].setValue(value);
            return;
        }
        else if (type === field_type.checkbox) {
            dom = first_tag(dom, 'input');
            dom.checked = !!value;
            return;
        } else if (type === field_type.select) {
            dom = first_tag(dom, 'select');
            dom.value = (typeof value !== 'string' ? '' : value);
            update_dropdownlist_selected(dom);
            return;
        } else if (type === field_type.department) {
            dom = first_tag(dom, 'select');
            for (i = 0; i < cachedField.options.length; i += 1) {
                if (value === cachedField.options[i].name) {
                    dom.value = cachedField.options[i].id;
                    update_dropdownlist_selected(dom);
                    return;
                }
            }
        }
    };

    init();
    return {
        // assume following fields are all provided by default
        getId: function () { return cachedField.id; },
        getName: function () { return cachedField.label; },
        getIfSystem: function () { return cachedField.is_system; },
        getDefaultValue: function () { return cachedField.value; },
        getIfRequired: function () { return cachedField.required; },
        getDomElementId: function () { return cachedField.domElementId; },
        getType: function () { return cachedField.type; },
        hide: function () {
            document.getElementById('box-field-' + cachedField.id).style.display = 'none';
            cachedField.dom.parentNode.parentNode.style.display = 'none';
            return;
        },
        show: function () {
            document.getElementById('box-field-' + cachedField.id).style.display = '';
            cachedField.dom.parentNode.parentNode.style.display = '';
            return;
        },
        // dynamic calls
        getValue: getValue,
        setValue: setValue,
        hasValue: function (value) {
            var result = [].concat(getValue()), ret = false, i, j;
            value = [].concat(value);
            for (i = 0; i < value.length; i += 1) {
                for (j = 0; j < result.length; j += 1) {
                    if (result[j] === value[i]) break;
                }
                if (j === result.length) return false;
            }
            return true;
        },
        getOptions: getOptions
    };
};
