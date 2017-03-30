function check_if_ban_error(err) {
    var code = err.c;
    if (code)
        return (code == 1024) || (code == 1032) || (code == 1037)/*ban bbs code*/;
    return false;
}

function truncate(str, max_len) {
    if (str.length < max_len) return str;
    else return str.substring(0,max_len)+'...';
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

var cookie = {
	set: function(k, v, siteId) {
		if (siteId) {
			k += "_" + siteId;
		}
		var c = k + "=" + v + ";expires=Wed, 30 Dec 7007 03:23:45 GMT";
		document.cookie = c;
	},
	get: function(k) {
		var cookie = document.cookie;
		var arr = cookie.split("; ");
		for (var i = 0; i < arr.length; i++) {
			var v = arr[i].split("=");
			if (v != null && v.length == 2 && k == v[0]) {
				return v[1];
			}
		}
	},
	setSessionCookie: function(k, v) {
		// if()
		// var c = k + '=' + v + ';expires=0';
		// document.cookie = c;

		if (window.ie) document.cookie = k+'='+v+';';
		else document.cookie = k + '=' + v + ';expires=0;';
	}
};

function is_enter(evt) {
	evt = (evt) ? evt : window.event;
	var keyCode = (evt.charCode) ? evt.charCode : ((evt.which) ? evt.which : evt.keyCode);
	return keyCode == 13;
}

var flash_title = {
	title: document.title,
	speed: 1000,
	timer: null,
	start: function() {
		if (flash_title.timer == null) {
			var even = true;
			flash_title.timer = setInterval(function() {
				document.title = even ? "-" : flash_title.title;
				even = !even;
			}, flash_title.speed);
		}
	},
	stop: function() {
		document.title = flash_title.title;
		if (flash_title.timer) {
			try {
				clearInterval(flash_title.timer);
			} catch (e) {} finally {
				flash_title.timer = null;
			}
		}
	}
};

var agent = navigator.userAgent;
(s = agent.match(/msie ([\d.]+)/i)) ? window.ie = parseFloat(s[1]) : 0;

function replace_class(ele, from, to) {
	ele.className = ele.className.replace(from, to);
}
function show_element(id, display) {
	var ele = id;
	if (typeof id == 'string') ele = $(id);
	if (ele) ele.style.display = display || '';
}
function hide_element(id) {
	var ele = id;
	if (typeof id == 'string') ele = $(id);
	if (ele) ele.style.display = 'none';
}
function toggle_display(ele, display) {
	if (ele.style.display != 'none') {
		ele.style.display = 'none';
	} else {
		ele.style.display = display||'';
	}
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
function toggle_class(ele, cls) {
	if (has_class(ele, cls)) {
		remove_class(ele, cls);
	} else {
		add_class(ele, cls);
	}
}

var flag_window_closing = false;

function $(id) {
	if ( !! id === false) return null;
	return document.getElementById(id);
}

function $$(className, ele) {
	if ( !! className === false) return null;
	if (document.getElementsByClassName) return document.getElementsByClassName(className);
	else if (document.querySelectorAll) return document.querySelectorAll('.' + className);
	else {
		ele = ele || document;
		var all = ele.getElementsByTagName('*');
		var eles = [];
		for (var i = 0, len = all.length; i < len; i++) {
			var ele = all[i];
			if ((' ' + ele.className + ' ').indexOf(' ' + className + ' ') >= 0) eles.push(ele);
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

function placeholder_supported() {
    var ele = document.createElement('input');
    return 'placeholder' in ele;
}

function blank_iframe_src() {
    if (navigator.userAgent.contains("firefox", true)) { //fix firefox cert contains unencrypt elements issue
        return server.get_url('/blank.html?domain='+document.domain);
    } else {
        return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();';
    }
}

function focus_first_input(id) {
    var all = $(id).getElementsByTagName('*');
    for (var i = 0, len = all.length; i < len; i++) {
        var ele = all[i];
        var tagName = ele.tagName || '';
        var type = ele.type || '';
        tagName = tagName.toLowerCase();
        type = type.toLowerCase();
        if (tagName == 'input' && type == 'text' || tagName == 'textarea') {
            if (window.ie) {
                setTimeout(function () {
                    ele.focus();
                }, 300);
            } else {
                ele.focus();
            }
            break;
        }
    }
}

String.prototype.parseUrl = function() {
	var reg = /((www\.|http:\/\/|https:\/\/|ftp:\/\/|news:\/\/|rtsp:\/\/|mss:\/\/)[a-zA-Z0-9$%][0-9a-zA-Z_!~*'();?:@&=+$,%#-./]*[0-9a-zA-Z_!~*'();?:@&=+$%#-]\/?)/ig;
	var temp = this.replace(reg, "<a href=\"$1\" class='parsedlink' target='_blank'>$1</a>");
	return temp.replace(/<a href=\"www\./g, "<a href=\"http://www.");
};

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

function copy_obj(obj) {
    var res = {};
	for (var p in obj) {
		if (obj.hasOwnProperty(p)) {
            res[p] = obj[p];
		}
	}
	return res;
}

function set_text(ele, text) {
	//firefox use textContent
	if (typeof ele.textContent != 'undefined') {
		ele.textContent = text;
	} else {
		ele.innerText = text;
	}
}

!window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
	WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
		var target = this;

		registry.unshift([target, type, listener, function (event) {
			event.currentTarget = target;
			event.preventDefault = function () { event.returnValue = false };
			event.stopPropagation = function () { event.cancelBubble = true };
			event.target = event.srcElement || target;

			listener.call(target, event);
		}]);

		this.attachEvent("on" + type, registry[0][3]);
	};

	WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
		for (var index = 0, register; register = registry[index]; ++index) {
			if (register[0] == this && register[1] == type && register[2] == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
			}
		}
	};

	WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
		return this.fireEvent("on" + eventObject.type, eventObject);
	};
})(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);

function getLabelByFor(n) {
	var labels = document.getElementsByTagName('LABEL');
	for (var i = 0; i < labels.length; i++) {
		var l = labels[i];
		if (l.htmlFor == n) {
			return l;
		}
	}

	return null;
}

function getRadiosByName(n) {
	var radios = document.getElementsByTagName('INPUT');
	var res = []
	for (var i = 0; i < radios.length; i++) {
		var r = radios[i];
		if (r.type=='radio' && r.name == n) {
			res.push(r);
		}
	}

	return res;
}

function inner_text(ele) {
    return ele.innerText || ele.textContent || '';
}

function is_blank(id) {
	return inner_text($(id)).trim().length == 0;
}


function onDomReady(fn) {
    window.addEventListener('load', fn);
}

JSON.safeParse = function (str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
};