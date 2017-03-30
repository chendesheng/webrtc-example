var chat_content;
function init_chat_content(div) {
    var bubble = 0, simple = 1, classic = 2;
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
		div.scrollTop = div.scrollHeight;
	}

	function if_scrollbar_at_bottom() {
		return div.scrollTop == div.scrollHeight;
	}

	function add_item(html) {
		try {
			var warp = document.createElement('DIV');
			warp.innerHTML = html;
			var node = warp.childNodes[0];
			if (div != null) {
				var o = $('chat-content-bottom');
				div.insertBefore(node, o);
			}
			scroll_to_bottom();
		} catch (e) {
		}
	}

	var tpl_with_name_translation = '<div class="chat-{type}"><div class="chat-{type}-name">{name}</div><div class="chat-{type}-message">{translation}<span class="translation-tag">&nbsp;({translation_tag})</span><br /><span class="original-message">{message}</span><span class="original-tag">&nbsp;({original_tag})</span></div><div class="chat-time">{time}</div></div>';
	var tpl_no_name_translation = '<div class="chat-{type} chat-same-sender"><div class="chat-{type}-message">{translation}<span class="translation-tag">&nbsp;({translation_tag})</span><br /><span class="original-message">{message}</span><span class="original-tag">&nbsp;({original_tag})</span></div><div class="chat-time">{time}</div></div>';
	var tpl_with_name = '<div class="chat-{type}"><div class="chat-{type}-name">{name}</div><div class="chat-{type}-message">{message}</div><div class="chat-time">{time}</div></div>';
	var tpl_with_nameid = '<div class="chat-{type}"><div id="{nameid}" class="chat-{type}-name">{name}</div><div class="chat-{type}-message">{message}</div><div class="chat-time">{time}</div></div>';
    var tpl_no_name = '<div class="chat-{type} chat-same-sender"><div class="chat-{type}-message">{message}</div><div class="chat-time">{time}</div></div>';
    var tpl_system = '<div class="chat-system-message {classname}" id="{id}">{message}</div>';
    var tpl_system_noid = '<div class="chat-system-message {classname}">{message}</div>';

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
			var sender_changed = set_last_sender(null);
            var data = { id: id, message: (encode ? html_encode(message) : message), classname: (sender_changed ? '' : 'chat-same-sender') };
            var tpl = (typeof id == 'undefined') ? tpl_system_noid : tpl_system;
			add_item(render_template(tpl, data));
        }
	}

	function add_system_message_element(ele) {
	    var sender_changed = set_last_sender(null);
	    var div = document.createElement('DIV');
	    div.className = 'chat-system-message';
        if(!sender_changed) div.className += ' chat-same-sender';
	    div.appendChild(ele);
	    add_element(div);
	    return div;
    }

	function add_element(ele) {
	    try{
	        if (ele != null) {
	            div.insertBefore(ele, $('chat-content-bottom'));
	            scroll_to_bottom();
	        }
	    } catch (e) {}
	}

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

	function add_operator_message(name, message, time, is_html, translation) {
        var tpl = get_template('o' + name, time);
		add_message(tpl, 'operator', name, message, time, is_html, translation);
    }

	var INVITATION_SENDER = 'invitation-message-sender';
	function add_invitation_message(name, message, time) {
	    message = encodeAndParseBreakline(message);
	    var data = { nameid:INVITATION_SENDER, type: 'operator', time: time.formatDate(), name: html_encode(name), message: message };
	    var html = render_template(tpl_with_nameid, data);
	    add_item(html);
	}

    // operator join chat 时修改下
	function update_invitation_message_sender(newname) {
	    var ele = $(INVITATION_SENDER);
	    if (ele) {
	        set_text(ele, newname);
	        ele.id = ''; //只能修改一次
	    }
	}

	function add_visitor_message(name, message, time, is_html, translation) {
        var tpl = get_template('v' + name, time);
		add_message(tpl, 'visitor', name, message, time, is_html, translation);
	}

	function add_image_placeholder(name, guid, time) {
		message = '<a href="#' + guid + '"><img style="margin-top: 5px;" alt="" id="' + guid + '" src="images/loading.gif"/></a>';
		add_operator_message(name, message, time, true);
	}

	function add_image(sender, message, time, is_visitor) {
		var args = sender.split(filter_charactor);
		var url = args[0];
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

		img = document.getElementById(guid);
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
		}

    }

    function mask_credit_card_number(message) {
        return message.replace(/(?:3[4|7]\d{2}\s{0,1}\d{6}\s{0,1}\d{1}|3[0|6|8]\d{2}\s{0,1}\d{6}\s{0,1}|(?:6011\s{0,1}\d{4}\s{0,1}|65\d{2}\s{0,1}\d{4}\s{0,1}|622(?:(?:1\s{0,1}2[6-9]|1\s{0,1}[3-9]\d|[2-8]\d{2})\d{2}\s{0,1}|9\s{0,1}2[0-5]\d{2}\s{0,1}|9\s{0,1}[0-1]\d{3}))\d{4}\s{0,1}|(?:2014|2149)\s{0,1}\d{7}\s{0,1}|(?:(?:3088|3096|3112|3158|3337)\s{0,1}\d{4}\s{0,1}|35(?:2[89]\s{0,1}\d{4}\s{0,1}|[3-8]\d\s{0,1}\d{4}\s{0,1}))\d{4}\s{0,1}|5[1-5]\d{2}\s{0,1}\d{4}\s{0,1}\d{4}\s{0,1}|4\d{3}\s{0,1}\d{4}\s{0,1}\d(?:\d{3})?\s{0,1})(\d{4})/g, function (all_digits, last_digits) {
            return repeatStar(all_digits.length - 4) + last_digits;
        });
    }

    function repeatStar(length) {
        var stars = "";
        if (typeof "*".repeat === "undefined") {
            for (var i = 0; i < length; ++i) {
                stars += "*";
            }
            return stars;
        }
        else
            return "*".repeat(length);
	}
	return {
		add_image: add_image,
		add_image_placeholder: add_image_placeholder,
		add_system_message: add_system_message,
		add_operator_message: add_operator_message,
		add_visitor_message: add_visitor_message,
        add_invitation_message: add_invitation_message,
        update_invitation_message_sender: update_invitation_message_sender,
        mask_credit_card_number: mask_credit_card_number,
		if_scrollbar_at_bottom: if_scrollbar_at_bottom,
		scroll_to_bottom: scroll_to_bottom,
		add_system_message_element: add_system_message_element,
		set_div: function (d) {
			div = d;
		},
		set_last_sender: set_last_sender
	};
}
