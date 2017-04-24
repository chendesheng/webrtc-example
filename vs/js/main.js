(function(){/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
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
};﻿
var __formId = 1;
function xform(iframeId, iframeParent, fields, fndone) {
    fndone = fndone || function () { };

    var ifr = document.getElementById(iframeId);
    if (ifr) {
        ifr.parentNode.removeChild(ifr);
        ifr = null;
    }

    var formId = __formId++;

    function createInput(doc, props) {
        var ele = doc.createElement('input');
        for (var i in props) {
            var p = props[i];
            ele[i] = p;
        }

        return ele;
    }

    function createForm(doc) {
        var form = doc.createElement('form');
        form.method = 'post';
        // aspnet的request.Files需要设置multipart
        form.enctype = 'multipart/form-data';
        // IE8提交内容包含文件时一定要设置encoding
        form.encoding = 'multipart/form-data';
        for (var i = 0; i < fields.length; i++) {
            form.appendChild(createInput(doc, fields[i]));
        }

        return form;
    }

    function getIframeDoc(ifr) {
        return ifr.contentDocument || ifr.contentWindow.document;
    }

    function createIframe(fnloaded) {
        var ifr = document.createElement('iframe');
        ifr.setAttribute('id', iframeId);
        ifr.src = 'about:blank';
        ifr.addEventListener('load', ifrLoaded)

        if (iframeParent != null) {
            ifr.setAttribute('style', 'height:24px;width:100%;');
            ifr.setAttribute('frameborder', 0);
            ifr.setAttribute('scrolling', 'no');
            iframeParent.appendChild(ifr);
        } else {
            ifr.setAttribute('style', 'position:absolute;left:-10000px;display:none;');
            document.body.insertBefore(ifr, document.body.firstChild);
        }

        function ifrLoaded() {
            ifr.removeEventListener('load', ifrLoaded);
            var doc = getIframeDoc(ifr);
            doc.body.style.cssText = 'margin:0;padding:0;';
            doc.body.appendChild(createForm(doc));

            fnloaded(ifr);
        }

        return ifr;
    }

    createIframe(function (ifr) {
        var fnstop = null;
        fndone({
            // submit只能调用一次
            submit: function (url, onSubmitSuccess, onSubmitError) {
                var successReceived = false;
                var timer;
                function onmessage(e) {   // 注意onmessage可能会接受到chatButton所在的页面
                    if (url.indexOf(e.origin) >= 0) {
                        var resp = JSON.safeParse(e.data);
                        // server需要传回formId
                        if (resp.formId === formId) {
                            successReceived = true;
                            window.removeEventListener('message', onmessage);
                            clearTimeout(timer);
                            onSubmitSuccess(resp.data);
                        }
                    }
                }

                function onerror() {
                    window.removeEventListener('message', onmessage);
                    clearTimeout(timer);
                    onSubmitError();
                }

                timer = setTimeout(onerror, 3 * 60 * 1000);

                window.addEventListener('message', onmessage);

                // 如果iframe onload已经触发，但是onmessage没有收到，就视为出错
                function ifrOnload() {
                    ifr.removeEventListener('load', ifrOnload);
                    setTimeout(function () {
                        if (!successReceived) {
                            onerror();
                        }
                    }, 200);
                }

                ifr.addEventListener('load', ifrOnload);
                // start timeout timer
                var form = getIframeDoc(ifr).forms[0];
                // 校验form用，server要在返回结果里包含这个formId.
                form.action = url + '&formId=' + formId;
                form.submit();

                fnstop = function () {
                    clearTimeout(timer);
                    window.removeEventListener('message', onmessage);
                    ifr.removeEventListener('load', ifrOnload);
                }
            },
            getIframe: function () {
                return ifr;
            },
            getElement: function (id) {
                return getIframeDoc(ifr).getElementById(id);
            },
            stop: function () {
                if (fnstop) fnstop();
                if (window.ie) {
                    ifr.document.execCommand('Stop');
                } else if (ifr.stop) {
                    ifr.stop();
                }
            }

        })
    });
}


function uploadForm(onchange, fndone) {
    fndone = fndone || function () { };

    xform('ifr-upload', null, [{
        id: 'attachment',
        name: 'attachment',
        type: 'file'
    }], function (form) {
        var attachment = form.getElement('attachment');
        attachment.onchange = function (e) {
            onchange(attachment.value);
        };

        fndone({
            clickUpload: function () {
                attachment.click();
            },
            stopUpload: function () {
                form.stop();
            },
            upload: function (url, fnsuccess, fnerror) {
                form.submit(url, function (resp) {
                    if (resp === "") {
                        fnsuccess();
                    } else {
                        fnerror(resp);
                    }
                },
                function () {
                    fnerror('upload failed');
                });
            }
        });
    });
}
var notification = null
function init_notification(win) {
    win = win || window;

    var PERMISSION_DEFAULT = "default",
        PERMISSION_GRANTED = "granted",
        PERMISSION_DENIED = "denied",
        PERMISSION = [PERMISSION_GRANTED, PERMISSION_DEFAULT, PERMISSION_DENIED],
        empty = {},
        emptyString = "",
        isSupported = (function () {
            var isSupported = false;
            try {
                isSupported = !!(win.Notification || win.webkitNotifications);
            }
            catch (e) { }
            return isSupported;
        }()),
        noop = function () { },
        isFunction = function (value) { return (value && (value).constructor == Function); },
        isString = function (value) { return (value && (value).constructor == String); },
        isObjec = function (value) { return (value && (value).constructor == Object); };
    function requestPermission(callback) {
        if (!isSupported) { return; }
        var callbackFunction = isFunction(callback) ? callback : noop;
        if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            win.webkitNotifications.requestPermission(callbackFunction);
        }
        else if (win.Notification && win.Notification.requestPermission) {
            win.Notification.requestPermission(callbackFunction);
        }
    }
    function isDocumentHidden() {
        return settings
    }
    function permissionLevel() {
        var permission;
        if (!isSupported) { return; }
        if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            permission = PERMISSION[win.webkitNotifications.checkPermission()];
        }
        else if (win.Notification && win.Notification.permissionLevel) {
            permission = win.Notification.permissionLevel();
        }
        else if (win.Notification && win.Notification.permission) {
            permission = win.Notification.permission;
        }
        return permission;
    }
    function getNotification(title, options) {
        var notification;
        if (win.webkitNotifications) {
            notification = win.webkitNotifications.createNotification(options.icon, title, options.body);
            notification.show();
        }
        else if (win.Notification) { /* Safari 6, Chrome 23+ */
            notification = new win.Notification(title, {
                icon: isString(options.icon) ? options.icon : options.icon.x32,
                body: options.body || emptyString,
                tag: options.tag || emptyString
            });
        }
        return notification;
    }
    function createNotification(title, options) {
        var notification;
        if (isSupported && isString(title) && (options && (isString(options.icon) || isObject(options.icon))) && (permissionLevel() === PERMISSION_GRANTED)) {
            notification = getNotification(title, options);
        }
        return notification;
    }




    //client code
    function show(text) {
        if (permissionLevel() == PERMISSION_DENIED)
            return;

        if (permissionLevel() == PERMISSION_DEFAULT) {
            requestNotify.click();
            return;
        }

        var options = {
            icon: "Images/logo60.png",
            body: text,
            tag: "comm100_notify"
        };
        var noti = createNotification(window.location.host, options);
        noti.onclick = function () {
            window.focus();
            noti.close();
        };
        noti.onshow = function () {
            setTimeout(function () {
                noti.close();
            }, 5000);
        };
    }

    var requestNotify = document.createElement('button');
    requestNotify.style.display = 'none';
    requestNotify.id = 'requestNotify';
    document.body.appendChild(requestNotify);
    requestNotify.onclick = function () {
        requestPermission(function () { });
    };

    return {
        'show': show,
        'request_permission': function () {
            requestNotify.click();
        }
    };
}

var show_notification = (function () {
    var lasttext;
    var timer;
    return function (text, name) {
        if (text == '' || text == null) return;

        lasttext = (typeof name === 'string') ? name + ": " + text : text;

        clearTimeout(timer);
        timer = setTimeout(function () {
            if (!chat_window.is_input_focus()) {
                notification.show(lasttext);
            }
        }, 50);
    }
})();
function init_custom_ctrl(form) {
	var eles = form.getElementsByTagName('SELECT');
	for (var i = 0; i < eles.length; i++) {
		var ele = eles[i];
		var sp = document.createElement('SPAN');
		sp.className='selected';
		var selected = ele.options[ele.selectedIndex];
        if (selected) set_text(sp, inner_text(selected));

		ele.parentNode.appendChild(sp);

		ele.addEventListener('change', function() {
		    update_dropdownlist_selected(this);
		});
		ele.addEventListener('focus', function() {
			add_class(this.parentNode, 'active');
		});
		ele.addEventListener('blur', function() {
			remove_class(this.parentNode, 'active');
		});
	}
}

function update_dropdownlist_selected(ele, val) {
    var sp = ele.parentNode.lastChild;
    var selected = ele.options[ele.selectedIndex];
    if (selected) set_text(sp, inner_text(selected));
}﻿function soundManager(btn_id, sound_resources) {
    this.soundUrls = sound_resources;
    this.players = sound_resources.map(function(resource) {        
        return {
            type: resource.type,
            src: resource.url,
            player: new window.Audio(resource.url)
        };
    });

    function setStatus(status) {
        replace_class($(btn_id), /sound-on|sound-off/, 'sound-' + status);
        cookie.set('sound', status);
    }
    function getStatus() {
        return cookie.get('sound') || 'on';
    }
    function isStatusOn() {
        return getStatus() == 'on';
    }

    setStatus(getStatus());  // 初始化界面
    this.toggle = function () {
        setStatus(isStatusOn() ? 'off' : 'on');
        this.stop();
    };

    // try {
    //     this.play = playByHTML5(type, ifLoop);
    // } catch (e) {
    //     this.play = playByFlash();
    // }

    this.play = function(type, ifLoop) {
        try {
            var tmp;
            this.players.forEach(function(item) {
                if(item.type === type) {
                    tmp = item;
                    return false;
                }
            });
            if(typeof tmp !== 'undefined') {
                if (isStatusOn()) {
                    tmp.player.loop = ifLoop ? 'loop' : '';
                    tmp.player.play();
                }
            }
        } catch (e) {}
    };

    this.stop = function() {
        this.players.forEach(function(item) {            
            item.player.loop = '';
        });
    };

    function playByHTML5(type, ifLoop) {
        var tmp;
        this.players.forEach(function(item) {
            if(item.type === type) {
                tmp = item;
                return false;
            }
        });
        console.log('normal: ', sound_type.normal);
        if(typeof tmp !== 'undefined') {
            if (isStatusOn()) {
                tmp.player.loop = ifLoop ? 'loop' : '';
                tmp.player.play();
            }
        }
    }

    function playByFlash() {
        window.soundPlayerIOError = function soundPlayerIOError(msg) {}
        function getFlashMovie(id) {
            return document[id] || (document.embeds && document.embeds[id]) || document.getElementById(id);
        }

        function safePlay(success) {
            if (isStatusOn()) {
                try {
                    getFlashMovie('div-sound-player').playMP3(this.src, 'soundPlayerIOError');
                } catch (e) {
                    return; //wait until it's working
                }

                if (success) success();
            }
        }

        var loadFlash = false; // prevent load mutiple times
        return function () {
            if (!loadFlash) {
                loadFlash = true;

                swfobject.embedSWF('Sound/SoundPlayer2.swf', 'div-sound-player', '1', '1', '9.0.0');
                var timer = setInterval(function () {
                    safePlay(function () {
                        clearInterval(timer);
                    });
                }, 100);
                return;
            }
            safePlay();
        };
    }
}

﻿var filter_charactor = '\u2299';

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

var sound_type = {
    'normal': 0,
    'mediaChatWaiting': 1,
    'mediaChatEnd': 2
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
var ifSupportWebrtc = ifSupportWebrtc();
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
    'ifSupportWebrtc': ifSupportWebrtc,
};

nav_params.chatGroup = (+nav_params.chatGroup >= 0 && Math.floor(+nav_params.chatGroup) === +nav_params.chatGroup) ? nav_params.chatGroup : null;

var is_popup_window = !url_query('embeddedwindow', 0);
var cookie_last_message_id = url_query('lastMessageId', '');
var current_window = visitor_window.chat;

window.onbeforeunload = function() {
    if (typeof MediaChat !== 'undefined') 
        MediaChat.deleteBeforeUnload();
}

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
var time_delay = 0;

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

    // var media_chat;
    //TESTCODE
    init_data.if_can_audio_chat = true;
    init_data.if_can_video_chat = true;
    if (ifSupportWebrtc && (init_data.if_can_audio_chat || init_data.if_can_video_chat)) {
        var script = document.createElement('script');
        script.src = 'js/mediachat.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'css/mediachat.css';
        style.type = 'text/css';
        document.head.appendChild(style);

        window.comm100_siteId = siteId;
        window.comm100_media_chat_loaded = main;
        window.comm100_chat_window = chat_window;
        window.comm100_embedded_window = embedded_window;
        window.if_can_audio_chat = init_data.if_can_audio_chat;
        window.if_can_video_chat = init_data.if_can_video_chat;
        window.if_popup_window = is_popup_window;
        window.comm100_get_server = server.get_server_host;
    }
    else {
        main();
        hide_element($('btn-audio-chat'));
        hide_element($('btn-video-chat'));
    }
}

var sound;
function init_sound_alert() {
    var sound_urls = [];
    if (init_data.sound_url) {
        sound_urls.push({
            type: sound_type.normal,
            url: init_data.sound_url
        });
    }
    if (ifSupportWebrtc)
    {
        var soundHandler = init_data.sound_url.substring(0, init_data.sound_url.indexOf('?'));
        init_data.audio_video_waiting_soundUrl = soundHandler + '?soundName=Notifier_10.mp3';
        init_data.audio_video_end_soundUrl = soundHandler + '?soundName=Notifier_11.mp3';
        sound_urls.push({
            type: sound_type.mediaChatWaiting,
            url: init_data.audio_video_waiting_soundUrl
        });
        sound_urls.push({
            type: sound_type.mediaChatEnd,
            url: init_data.audio_video_end_soundUrl
        });
    }
    sound = new soundManager('btn-sound', sound_urls);
}

function get_snapshot_params() {
    snapshot_params.UploadURL = server.get_url('/FileUpload.aspx?isImage=true&siteId=' + siteId + '&sessionId=' + sessionId + '&visitorId=' + visitorId + '&planId=' + planId);
    return snapshot_params;
}


function ifSupportWebrtc() {
  var PC = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;
  var edge = navigator.userAgent.indexOf(' Edge') > 0;
  return !!PC && !!getUserMedia && !edge;
}

﻿// ajax html载入5s超时
// 每次网络错误后开始计时20s，20s内没有任何成功的记录就check moderator, report main server disconnect
// check moderator 操作10s超时
// 每隔一分钟report main server disconnect

var connectionErrorReporter = (function () {
    var timer = null;
    var errorFunc;

    return {
        record: function () {
            if (timer !== null) return;
            timer = setTimeout(function () {
                timer = null;
                if (errorFunc) errorFunc();
            }, 20 * 1000);
        },
        onerror: function (error) {
            errorFunc = error;
        },
        reset: function () {
            clearTimeout(timer);
            timer = null;
        }
    }
})();

function initServer() {
    var main_server, standby_server, onSwitchServer;
    var moderator;
    var if_switching = false;  // if_switching=true表示已经问过moderator了，确定要改服务器，current_server已经改了，正在等待VM端恢复
    var current_server = -1; //0-standby 1-main -1 - unknown
    var ajax;
    var scheme = window.location.href.indexOf('localhost') > 0 ? 'http://' : 'https://';
    var main_server_disconnected = false;
    var main_server_report_timer = 0;

    function globalSuccess(data) {
        if (data) {
            if (data.v) {
                visitorId = parseInt(data.v);
            }

            if (data.t && data.t != sessionId) {
                sessionId = parseInt(data.t);
            }

            if (data.chat_id) {
                chatId = data.chat_id;
            }

            if (data.g) {
                visitorGuid = data.g;
            }

            if (check_if_ban_error(data)) {
                goto_window(visitor_window.ban);
                show_error(data.e);
                if(typeof MediaChat !== 'undefined') {
                    MediaChat.forceStopP2PChat();
                }
                return;
            }

            if (data.c == 314) {
                check_moderator();
                return;
            }

            if (if_switching) {
                //正在切换服务器时忽略错误
                if (data.c == 0) {
                    if_switching = false; //switch success
                }
            } else {
                //不是正在切换时处理错误
                if (data.c == 1036 ||  //chat guid not match
                    data.c == 1004  // visitor not in site
                ) {
                    //一般是服务器重启了，聊天窗口没有关，这时候要停止heartbeat
                    stop_heartbeat();
                    clearInterval(main_server_report_timer);
                    connectionErrorReporter.reset();
                }

                if (data.c > 0) {
                    show_error(data.e);
                }
            }
        }
    }

    function post(data, params, onsuccess, onerror, has_timeout) {
        // 该请求是发送给哪个服务器的
        var savedCurrentServer = current_server;
        ajax.post(get_url('/liveChatVisitorHandler.ashx?siteId=' + siteId + '&planId=' + planId + '&' + params),
            data,
            function (resp) {
                // 服务器已经切换过了，就忽略
                if (current_server != savedCurrentServer) return;

                globalSuccess(resp);

                if (onsuccess) {
                    onsuccess(resp);
                }

                connectionErrorReporter.reset();
                if (current_server === 1) {
                    main_server_disconnected = false;
                }
            },
            function (err) {
                // 服务器已经切换过了，就忽略
                if (current_server != savedCurrentServer) return;

                if (onerror) onerror(err);

                if (err === 'ajax.html not ready') return;

                connectionErrorReporter.record();
                if (current_server === 1) {
                    main_server_disconnected = true;
                }
            },
            has_timeout ? 20 * 1000 : 0);
    }

    function get_url(path) {
        if (current_server === 0) {
            return scheme + standby_server + path;
        } else {
            return scheme + main_server + path;
        }
    }

    function get_server_host() {
        if (current_server === 0) {
            return standby_server.split('/')[0];
        } else {
            return main_server.split('/')[0];
        }
    }

    function switch_server(s) {
        if (current_server != s) {
            var old_server = current_server;
            current_server = s;
            if_switching = true;
            if (onSwitchServer) onSwitchServer(old_server, current_server);
        }
    }

    function reportMainServerStatus() {
        if (moderator && current_server === 1) {
            ajax.post(moderator
                    + '&action=4'
                    + '&mainDisconnected=' + (main_server_disconnected ? '1' : '0')
                    + '&visitorId=' + visitorId
            , null);
        }
    }

    function check_moderator() {
        connectionErrorReporter.reset();

        if (moderator) {
            ajax.post(moderator + '&action=1',
                '',
                function (s) {
                    switch_server(s);
                },
                function () {
                    switch_server(1);
                },
                10 * 1000);
        }
    }

    function setup(main, standby, fnswitch) {
        main_server = main;
        standby_server = standby;
        onSwitchServer = fnswitch;
        if (standby_server) {
            moderator = scheme + standby_server + '/moderator.aspx?siteId=' + siteId;
            ajax = new xdomain([main, standby]);
            check_moderator();
            connectionErrorReporter.onerror(function () {
                reportMainServerStatus();
                check_moderator();
            });
            main_server_report_timer = setInterval(reportMainServerStatus, 1000 * 60);
        } else {
            ajax = new xdomain([main]);
            switch_server(1);
        }
    }

    return {
        setup: setup,
        post: post,
        get_url: get_url,
        get_server_host: get_server_host
    };
}

var server = initServer();

function xdomain(trustDomains) {
    // use XMLHttpRequest directly
    function postMaster(url, data, success, error, timeout) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        if (xhr.timeout > 0) xhr.timeout = timeout;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (success) success(JSON.safeParse(xhr.responseText));
                } else {
                    if (error) error('HTTP error ' + xhr.status);
                }
            }
        };
        xhr.send(JSON.stringify(data));
        xhr.ontimeout = function () {
            if (error) error('Request timeout');
        };
        return {
            abort: function () {
                xhr.abort();
            }
        };
    }

    var ajaxRequestsId = 0;

    function checkIfTrustDomains(origin) {
        origin = origin.replace(/^https?:\/\//ig, '').toLowerCase();
        for (var i = 0; i < trustDomains.length; i++) {
            if (trustDomains[i].toLowerCase().indexOf(origin) >= 0) {
                return true;
            }
        }

        return false;
    }

    function postSlaveAjax(ifr, url, data, success, error, timeout) {
        var ajaxId = ++ajaxRequestsId;
        function onAjaxResponse(e) {
            if (!checkIfTrustDomains(e.origin)) return;

            var json = JSON.safeParse(e.data);
            if (json && json.ajaxId == ajaxId) {  // json.ajaxId用于区分这个是从ajax.html返回的
                window.removeEventListener('message', onAjaxResponse);

                if (json.err == null) {
                    if (success) success(json.resp);
                } else {
                    if (error) error(json.err);
                }
            }
        }

        window.addEventListener('message', onAjaxResponse);

        try {
            ifr.contentWindow.postMessage(JSON.stringify({
                ajaxId: ajaxId,
                url: url,
                data: data,
                timeout: timeout
            }), url);
        } catch (exp) {
            if (error) error(exp.toString());
        }
    }

    var ifr;
    var ifrReady = false;  // ajax.html 如果没有load完，ifrReady=false，这个时候发请求就按失败处理
    function postSlave(url, data, success, error, timeout) {
        if (ifr == null) {  //ifr!=null表示正在loading
            ifr = document.createElement('iframe');
            ifr.setAttribute('id', 'ifr-ajax');
            ifr.setAttribute('style', 'display:none');
            document.body.insertBefore(ifr, document.body.firstChild);

            //载入失败要重置iframe，这样后面再有请求会重新尝试载入ajax.html
            function resetAjaxIFrame() {
                if (ifr != null) {
                    document.body.removeChild(ifr);
                    ifr = null;
                }
            }

            function clearEvents() {
                window.removeEventListener('message', onAjaxIframeReady);
                ifr.removeEventListener('load', onAjaxIframeLoad);
                clearTimeout(timeoutTimer);
            }

            var timeoutTimer = setTimeout(function () {
                clearEvents();
                resetAjaxIFrame();
                if (error) error('ajax.html load timeout');
            }, 5000);

            // iframe load事件不能保证iframe是加载成功的，域名找不到/网络连不上也会有load事件
            // 通过接收ajax.html发送的ajax-proxy-ready来确定加载完成
            function onAjaxIframeReady(e) {
                if (checkIfTrustDomains(e.origin) && e.data === 'ajax-proxy-ready') {
                    clearEvents();
                    postSlaveAjax(ifr, url, data, success, error, timeout);
                    ifrReady = true;
                }
            }
            window.addEventListener('message', onAjaxIframeReady);

            // 同时监听load事件是为了更快捕获到加载失败
            // 如果只通过有没有收到ajax-proxy-ready来判断就需要等待5s超时
            function onAjaxIframeLoad() {
                setTimeout(function () {
                    if (!ifrReady) {
                        clearEvents();
                        resetAjaxIFrame();
                        if (error) error('ajax.html load failed');
                    }
                }, 100);
            }
            ifr.addEventListener('load', onAjaxIframeLoad);

            ifr.src = getSlaveProxy(url);
        } else {
            if (ifrReady) {
                postSlaveAjax(ifr, url, data, success, error, timeout);
            } else {
                if (error) error('ajax.html not ready');
            }
        }
    }

    function getSlaveProxy(url) {
        url = url.split('?')[0];
        var i = url.lastIndexOf('/');
        return url.substr(0, i) + '/ajax2.html';
    }

    function ifMaster(url) {
        var reg = /https?:\/\/([^\/]*)/i;
        var m1 = url.match(reg);
        var m2 = window.location.href.match(reg);
        return m1[1].toLowerCase() == m2[1].toLowerCase();
    }

    function post(url, data, success, error, timeout) {
        if (ifMaster(url)) {
            postMaster(url, data, success, error, timeout);
        } else {
            postSlave(url, data, success, error, timeout);
        }
    }

    return { post: post };
}
var dropupload = (function() {
    var _tests = {
		dnd: 'draggable' in document.createElement('span'),
		formdata: !!window.FormData,
		filereader: typeof FileReader != 'undefined'
    };
	function is_support() {
		return !!_tests.dnd && !!_tests.formdata;
	}

	var _holder, _maxsize, _url;
	var _onstart, _onsuccess, _onerror, _disabled;
	var _xhr;
	//var _uploading = false;
	function init(url, holder, maxsize, onstart, onsuccess, onerror, disabled) {		
		document.body.ondragover = ondragover;
		document.body.ondrop = ondrop;

		_url = url;
		_holder = holder;
		_maxsize = maxsize;
		_onstart = onstart;
		_onsuccess = onsuccess;
		_onerror = onerror;
		_disabled = disabled;
	}

	function get_file(d, callback) {
		if (d.files.length != 1) {
			return;
		}

    	var f = d.files[0];
    	if (f.size == 0) {
    		return;
    	}
    	if (f.size > _maxsize) {
    		_onerror('toolarge');
    		return;
    	}

    	if (window.opera) {
    		callback(f);
    		return;
    	}

    	if (d.items) {
			for (var i = d.items.length - 1; i >= 0; i--) {
				var item = d.items[i];
				var entry;
				if (item.getAsEntry)
					entry = item.getAsEntry();
				else if (item.webkitGetAsEntry)
					entry = item.webkitGetAsEntry();
				else entry = item;

				if (!entry.isFile) {
					return;
				}
			}
		} else {
			if (!f.type && f.size <= 102400) {
				var reader = new FileReader();
				reader.onload = function() {
					callback(f);
				};

				reader.readAsBinaryString(f);
				return;
			}
		}

		callback(f);
	}

	function checkServerError(resp) {
        // response contains html page indicates IIS error page
	    return /^\s*<!DOCTYPE html/i.test(resp);
	}

	function upload_file(f) {
	    if (frequencyLimiter && !frequencyLimiter.can_send_message()) return;
	    var form_data = new FormData();
    	form_data.append('file', f);

    	_onstart(f);

	    // now post a new XHR request
		_xhr = new XMLHttpRequest();
		_xhr.onreadystatechange = function() {
			if (_xhr.readyState == 4) {
				if (_xhr.responseText == 'success') {
					_onsuccess();
				} else if (checkServerError(_xhr.responseText)) {
				    _onerror('upload failed');
				} else {
				    _onerror(_xhr.responseText);
				}
				_xhr = null;
            }
		};
		_xhr.open('POST', _url);
		_xhr.send(form_data);
	}

	function add_hold_class() {
		add_class($(_holder), 'hold');
	}
	function remove_hold_class() {
		remove_class($(_holder), 'hold');
	}

	var _dragover_timeout;

	function ondragover() {
		if (_disabled()) return false;

		add_hold_class();

		if (_dragover_timeout) {
			clearTimeout(_dragover_timeout);
		}

		var dur = window.opera ? 2000 : 200;
		_dragover_timeout = setTimeout(function() {
			remove_hold_class();
		}, dur);

		return false;
	}

	function ondrop(e) {
		e.preventDefault();
		if (_disabled()) return;

		remove_hold_class();

		get_file(e.dataTransfer, function(f) {
			upload_file(f);
		});
	}

	function cancel_upload() {
		if (_xhr) {
			_onsuccess();
			_xhr.abort();
		}
	}

	return {
		'init': init,
		'is_support': is_support,
		'cancel_upload': cancel_upload
	};
})();
﻿// 只用于和chat button所在的页面通信
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
        var href = window.location.href;
        if(window.location.hash !== '') { href = href.replace(window.location.hash, ''); }
        return window.open(href.replace('embeddedwindow=1&', '').replace('&embInv=1', '')+'&popupfromembedded=1' + window.location.hash, 'comm100_popup_' + siteId, 'height=' + h + ',width=' + w + ',left=200,top=' + top + ',status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no');
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
        console.log('receive_message: ', msg);
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
        } else if (msg.data.indexOf('setMainWidth_') == 0) {
            var width = parseInt(msg.data.substr(13, msg.data.length - 13));
            document.getElementById('main').style.width = width + 'px';
            console.log(msg);
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
}function init_fb_login(_onload, _appid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info(id) {
        FB.api("/" + id, {'fields': 'name,email,link,picture'},
            function(resp) {
                _success({
                    'name': resp.name,
                    'email': resp.email,
                    'profile': resp.link,
                    'avatar': resp.picture.data.url,
                    'source': 1
                });
            }
        );
    }

    function login(callback) {
        _success = callback || function(){};

        if (_userid) {
            get_info(_userid);
        } else {
            FB.login(function(response) {
                if (response.authResponse && response.authResponse.userID) {
                    _userid = response.authResponse.userID;
                    get_info(_userid);
                }
            }, {'scope': 'email'});
        }
    }

    var _userid;

    window.fbAsyncInit = function() {
        FB.init({
            appId      : _appid,
            cookie     : true,  // enable cookies to allow the server to access 
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5'
        });

        FB.getLoginStatus(function(response) {
            if (response.authResponse && response.authResponse.userID) {
                _userid = response.authResponse.userID;
            }

            _onload();
        });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); 
        js.id = id;
        js.async = true;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return {
        'login': login
    };
}

function init_gp_login(_onload, _clientid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info() {
        gapi.client.load('plus', 'v1', function() {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                _success({
                    'name': resp.displayName,
                    'email': get_primary_email(resp),
                    'profile': resp.url,
                    'avatar': resp.image.url,
                    'source': 2
                });
            });
        });
    }
    function get_primary_email(resp) {
        var email = '';
        for (var i=0; i < resp.emails.length; i++) {
            if (resp.emails[i].type === 'account') 
                email = resp.emails[i].value;
        }

        return email;
    }

    var _login_initialized = false;

    function login(success) {
        _success = success || function(){};

        _login_initialized = false;

        gapi.auth.signIn({
            'callback': 'googleplus_login_callback',
            'clientid': _clientid,
            'cookiepolicy': 'single_host_origin',
            'requestvisibleactions': 'http://schema.org/AddAction',
            'scope': 'https://www.googleapis.com/auth/plus.login email'
        });
    }

    window['googleplus_login_callback'] = function (resp) {

        if (resp.status.signed_in) {
            if (_login_initialized) return;
            _login_initialized = true;
            
            get_info();
        }
    };


    window['gponload'] = _onload;

    var po = document.createElement('script');
        po.type = 'text/javascript'; 
        po.async = true;
        po.src = 'https://apis.google.com/js/client:plusone.js?onload=gponload';
    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);

    return {
        'login': login
    };
}

function init_social_meida() {
    if (typeof (init_data) == 'undefined' || !init_data.social_media) return;

    var sm = init_data.social_media;
    if (!sm.fb_login && !sm.gp_login) {
        hide_element($('social-logins'));
        return;
    }

    if (sm.fb_login) {
        window.facebook = init_fb_login(function () {
            show_element('fb-login');
            remove_class($('social-login-icons'), 'loading');
        }, init_data.fb_app_id);
    }

    if (sm.gp_login) {
        window.googleplus = init_gp_login(function () {
            show_element('gp-login');
            remove_class($('social-login-icons'), 'loading');
        }, init_data.gp_app_id);
    }
}

function submit_social_info(data) {
    chat_window.init_name_email(data.name || '', data.email || '');
    data.nav_params = nav_params;

    $('btn-start-chat').disabled = 'disabled';
    
    send_action(15, data, request_chat_handler(function (res) {
        $('btn-start-chat').disabled = '';
    }, function (res) {
        $('btn-start-chat').disabled = '';
    }));
}

﻿function enter_offline() {
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


﻿var chat_content;
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
; var frequency_limit = function (config) {
    var recentMsgSentTime = [];
    var isLimited = false;
    var visitorMsgRestrictUnlockTimeKey = 'visitorMsgRestrictUnlockTime_' + siteId + '_' + (nav_params.chatGroup || '');
    var visitorMsgSentTimeKey = 'recentVisitorMsgSent_' + siteId + '_' + (nav_params.chatGroup || '');
    var penaltyFactorKey = 'penaltyFactory_' + siteId + '_' + (nav_params.chatGroup || '');
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
        hide_element('input-limited');
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
        cookie.set(visitorMsgRestrictUnlockTimeKey, (new Date()).getTime() + timespan);
        setTimeout(clearLimit, timespan);
        message = 'You\'re sending messages too frequently. Please wait for ' +
      Math.max(0, config.VisitorMsgRestrictTime * penaltyFactor) + ' second(s) and try again.'
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
            set_text($('input-limited'), 'You\'re sending messages too frequently. Please wait for ' + Math.max(0, Math.floor((getVisitorMsgRestrictUnlockTime() - (new Date()).getTime()) / 1000)) + ' second(s) and try again.');
            return;
        }
        recentMsgSentTime.push((new Date()).getTime());
        setRecentMessageToCookie();
        setTimeout(clearMessage, config.VisitorMsgRestrictDuration * 1000);
    };

    var addNotification = function () {
        if (isLimited) {
            if ($('input-limited').style.display === 'none') {
                show_element('input-limited');
                hide_element('operator-typing');
                set_text($('input-limited'), 'You\'re sending messages too frequently. Please wait for ' + Math.max(0, Math.floor((getVisitorMsgRestrictUnlockTime() - (new Date()).getTime()) / 1000)) + ' second(s) and try again.');
                chat_content.scroll_to_bottom();
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
                if ((new Date()).getTime() - time > config.VisitorMsgRestrictTime * 1000) continue;
                recentMsgSentTime.push(+list[i]);
                setTimeout(clearMessage, config.VisitorMsgRestrictTime * 1000 - ((new Date()).getTime() - time));
            }
            setRecentMessageToCookie();
        }
        var previousRestrictUnlockTime = getVisitorMsgRestrictUnlockTime();
        if (previousRestrictUnlockTime && (new Date()).getTime() < previousRestrictUnlockTime) {
            isLimited = true;
            var timespan = previousRestrictUnlockTime - (new Date()).getTime();
            setTimeout(clearLimit, timespan);
            message = 'You\'re sending messages too frequently. Please wait for ' +
          Math.max(0, Math.floor(timespan / 1000)) + ' second(s) and try again.';
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
};﻿var notification_type = {
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
        
        if(typeof res.server_current_time !== 'undefined') {
            var seconds = parseInt(res.server_current_time.match(/Date\((\d+)\)/)[1]);
            var now = new Date();
            seconds -= now.getTimezoneOffset() * 60;
            time_delay = seconds - now.getTime();
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
        if (input.m.length > 0 && input.m[0].c === 339) console.log('action send');
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
                    || code == message_code.system_visitor_not_respond_and_end_chat
                    || code == message_code.agent_video_chat_request
                    || code == message_code.agent_video_chat_cancel_request
                    || code == message_code.agent_video_chat_accept
                    || code == message_code.agent_video_chat_refuse
                    || code == message_code.agent_video_chat_stop
                    || code == message_code.visitor_video_chat_request
                    || code == message_code.visitor_video_chat_cancel_request
                    || code == message_code.visitor_video_chat_accept
                    || code == message_code.visitor_video_chat_refuse
                    || code == message_code.visitor_video_chat_stop
                    || code == message_code.server_video_chat_no_answer
                    || code == message_code.server_video_chat_end
                    || code == message_code.agent_audio_chat_request
                    || code == message_code.agent_audio_chat_cancel_request
                    || code == message_code.agent_audio_chat_accept
                    || code == message_code.agent_audio_chat_refuse
                    || code == message_code.agent_audio_chat_stop
                    || code == message_code.visitor_audio_chat_request
                    || code == message_code.visitor_audio_chat_cancel_request
                    || code == message_code.visitor_audio_chat_accept
                    || code == message_code.visitor_audio_chat_refuse
                    || code == message_code.visitor_audio_chat_stop
                    || code == message_code.server_audio_chat_no_answer
                    || code == message_code.server_audio_chat_end) {

                    if (code != message_code.operator_accept_chat) {
                        embedded_window.notification(notification_type.new_response, message_id);
                        show_notification(message);
                    }

                    if (typeof sound != 'undefined') {
                        var lastPlaySoundMessageId_key = 'lastPlaySoundMessageId' + chatId;
                        var lastPlaySoundMessageId = parseInt(cookie.get(lastPlaySoundMessageId_key) || 0);

                        if (ifMediaChatEnd(code))
                            sound.stop();
                        if (message_id > lastPlaySoundMessageId) {
                            cookie.setSessionCookie(lastPlaySoundMessageId_key, message_id);                      
                            if(ifSupportWebrtc && (code == message_code.visitor_audio_chat_request ||
                                code == message_code.agent_audio_chat_request ||
                                code == message_code.visitor_video_chat_request ||
                                code == message_code.agent_video_chat_request)) {
                                sound.play(sound_type.mediaChatWaiting, true);
                            }
                            else if (ifMediaChatEnd(code)) {                                    
                                    sound.play(sound_type.mediaChatEnd);
                                }
                            else
                                sound.play(sound_type.normal);
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
            if( ifSupportWebrtc && MediaChat && (code >= message_code.agent_video_chat_request && code <= message_code.system_if_supportWebrtc)) {
                MediaChat.handleMessages(code, sender, time, message, info);
            }
        } catch (e) {
            handle_exception(e, 'handle_message');
        }
    }

    function ifMediaChatEnd(code) {
        return (ifSupportWebrtc &&
            (code == message_code.server_audio_chat_end ||
             code == message_code.server_video_chat_end ||
             code == message_code.server_audio_chat_no_answer ||
             code == message_code.server_video_chat_no_answer ||
             code == message_code.visitor_audio_chat_accept ||
             code == message_code.visitor_audio_chat_cancel_request ||
             code == message_code.visitor_audio_chat_refuse ||
             code == message_code.visitor_audio_chat_stop ||
             code == message_code.agent_audio_chat_accept ||
             code == message_code.agent_audio_chat_cancel_request ||
             code == message_code.agent_audio_chat_refuse ||
             code == message_code.agent_audio_chat_stop ||
             code == message_code.visitor_video_chat_accept ||
             code == message_code.visitor_video_chat_cancel_request ||
             code == message_code.visitor_video_chat_refuse ||
             code == message_code.visitor_video_chat_stop ||
             code == message_code.agent_video_chat_accept ||
             code == message_code.agent_video_chat_cancel_request ||
             code == message_code.agent_video_chat_refuse ||
             code == message_code.agent_video_chat_stop));
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
            if(typeof MediaChat !== 'undefined') {
                MediaChat.forceStopP2PChat();
            }
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
        'get_chatguid': function() {
            return chatGuid;
        },
        'get_time_delay': function() {
            return time_delay;
        },
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
window['onBeforePreChatDisplay'] = onBeforePreChatDisplay;
window['onAfterPreChatDisplay'] = onAfterPreChatDisplay;

window['onBeforePostChatDisplay'] = onBeforePostChatDisplay;
window['onAfterPostChatDisplay'] = onAfterPostChatDisplay;

window['onBeforeOfflineMessageDisplay'] = onBeforeOfflineMessageDisplay;
window['onAfterOfflineMessageDisplay'] = onAfterOfflineMessageDisplay;
window['onBeforeChatDisplay'] = onBeforeChatDisplay;
window['onAfterChatDisplay'] = onAfterChatDisplay;

window['PostChat'] = PostChat;
window['PreChat'] = PreChat;
window['OfflineMessage'] = OfflineMessage;
window['Chat'] = {
    getId: function () { return chatId },
    onQueueChanged: onChatQueueChanged,
    onChatEnded: onChatEnded,
    onOperatorJoined: onOperatorJoinedChat,
    getGreetingMessageDomElementId: function() {return "chat-greeting"}
};

window['switchToOfflineMessage'] = enter_offline;

window['initconfigs'] = initconfigs;
window['initialize'] = initialize;
window['onDomReady'] = onDomReady;
window['FieldType'] = field_type;
})();