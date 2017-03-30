
(function () {
    if (!window.comm100_console) {
        var console = {
            count: 0,
            autoScrollToBottom: false,
            window: window,

            $: function (id) {
                id = id || "";
                return console.window.document.getElementById("comm100_console" + (id.length > 0 ? "_" : "") + id);
            },
            nodeOver: function (node) {
                node.style.backgroundColor = "#eeeeee";
            },
            nodeOut: function (node) {
                node.style.backgroundColor = "white";
            },
            htmlEncode: function (html) {
                if (html === null) {
                    return "null";
                }
                else if (html === undefined) {
                    return "undefined";
                }
                else {
                    var div = document.createElement("div");
                    var txt = document.createTextNode(html);
                    div.appendChild(txt);
                    return div.innerHTML;
                }
            },
            traceHtml: function (html, title, color) {
                console.trace(html, title, color, false, true);
            },
            trace: function (obj, title, color, recursive, isHtml) {
                if (console.status == "running") {
                    var bkColor = (console.count % 2) == 1 ? '#eeeeee' : 'white';

                    if (title) {
                        title = "<div class='filterSubject' style='display:inline;font-size:13px;font-weight:bold;color:" + color + ";'>" + title + "</div>";
                    }
                    else {
                        title = "";
                    }
                    var time = "<div style='display:inline;font-size:11px;font-weight:bold;color:gray'>" + (new Date()).toLocaleTimeString() + "</div>";
                    var content = "<div class='filterSubject' style='font-size:13px;margin-top:3px;color:" + color + "'>" + (isHtml ? obj : console.object2html(obj, recursive)) + "</div>";

                    var node = console.window.document.createElement("div");
                    node.innerHTML = "<div style='padding:5px;border-bottom:solid 1px gray;' onmouseover='window.comm100_console.nodeOver(this)' onmouseout='window.comm100_console.nodeOut(this)'>" + title + content + time + "</div>";

                    if (console.filterRegex && (!title.match(console.filterRegex)) && (!content.match(console.filterRegex))) {
                        node.firstChild.style.display = 'none';
                    }
                    console.$("output").appendChild(node.firstChild);


                    node = null;

                    if (console.autoScrollToBottom) {
                        setTimeout(function () {
                            console.$("output").scrollTop = 5000000;
                        }, 100);
                    }

                    console.count++;
                    console.$("counter").innerHTML = console.count;
                }
            },
            isArray: function (obj) {
                if (obj && obj.constructor) {
                    return console.getFunctionName(obj.constructor).indexOf("Array") != -1;
                }
            },
            array2html: function (arr, recursive) {
                if (arr.length == 0) {
                    return "[]";
                }
                var res = "[<div style='padding-left:2em'>";

                for (var i = 0, len = arr.length; i < len; i++) {
                    res += console.object2html(arr[i], recursive) + ", <br/>";
                }
                return res.substr(0, res.length - (res.length > 0 ? ", <br/>".length : 0)) + "</div>]";
            },
            isObjectEmpty: function (o) {
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        return false;
                    }
                }
                return true;
            },
            object2html: function (obj, recursive) {
                if (obj === null) {
                    return "null";
                }
                else if (typeof obj === "undefined") {
                    return "undefined";
                }
                else if (obj && typeof obj == 'object') {
                    if (console.isArray(obj)) {
                        return console.array2html(obj, recursive);
                    }
                    else {
                        if (console.isObjectEmpty(obj)) {
                            return "{}";
                        }
                        var res = "{<div style='padding-left:2em'>";
                        for (var i in obj) {
                            res += "<b>" + i + ":</b>&nbsp;";
                            if (typeof obj[i] != 'function') {
                                res += ((recursive && recursive > 0) ? console.object2html(obj[i], recursive - 1) : obj[i]);
                            }
                            else {
                                var f = obj[i].toString();
                                res += f.substring(0, f.indexOf("{"));
                            }
                            res += ", <br/>";
                        }
                        res = res.substr(0, res.length - (!console.isObjectEmpty(obj) ? ", <br/>".length : 0));
                        return res + "</div>}";
                    }
                }
                else {
                    if (typeof obj == "string") {
                        return "\"" + console.htmlEncode(obj.toString()) + "\"";
                    }
                    else
                        return obj.toString();
                }
            },
            getFunctionName: function (f) {
                if (typeof f == 'function' || typeof f == 'object') {
                    var str = f.toString();
                    var name = str.substr(0, str.indexOf(")") + 1);
                }
                return name || name[1];
            },
            getStack: function (c) {
                var stack = [];
                while (c) {
                    stack.unshift(console.getFunctionName(c));
                    c = c && c.caller;
                }
                return stack;
            },
            assert: function (b, msg) {
                if (!b) {
                    var stack = console.getStack(arguments.callee.caller);
                    console.trace(stack.join("<br/>"), "assert fail: " + msg, "red");
                    console.show("assert");
                }
                return !!b;
            },
            assertEqual: function (actual, excepted) {
                if (actual != excepted) {
                    var stack = console.getStack(arguments.callee.caller);
                    console.trace(stack.join("<br/>"), "assert fail: except " + console.object2html(excepted) + " but " + console.object2html(actual) + ".", "red");
                    console.show("assert");
                }

                return (actual == excepted);
            },
            error: function (e) {
                if (e instanceof Error)
                    console.traceHtml(e.stack.replace(/\n/ig, '<br>').replace(/at/ig, '&nbsp;&nbsp;&nbsp;&nbsp;at'), "ERROR", "red");
                else
                    console.trace(e, "ERROR", "red");
            },
            stop: function () {
                console.status = "paused";
                console.$("start").value = "start";
                console.$("start").onclick = console.run;
            },
            run: function () {
                console.status = "running";
                console.$("start").value = "stop";
                console.$("start").onclick = console.stop;
            },
            hide: function () {
                console.$("visible").value = "show";
                console.$("output").style.display = "none";
                console.$("filter").style.display = "none";
                console.$("visible").onclick = console.show;
            },
            show: function (filter) {
                if (typeof filter === "string") {
                    console.filter(filter);
                    console.$("filter_input").value = filter;
                }

                console.$("visible").value = "hide";
                console.$("output").style.display = "";
                console.$("filter").style.display = "";
                console.$("visible").onclick = console.hide;
            },
            clear: function () {
                console.$("output").innerHTML = "";
            },
            move: function (x) {
                var div = console.$();
                div.style.left = (parseInt(div.style.left.replace("px", "")) + x) + "px";

            },
            filterRegex: null,
            lastFilterRegex: null,
            filter: function (text) {
                try {
                    console.filterRegex = new RegExp(text, "i");
                }
                catch (e) {
                    return;
                }
                setTimeout(function () {
                    if (console.lastFilterRegex != console.filterRegex) {
                        var nodes = console.$("output").children;
                        var len = nodes.length;
                        for (var i = 0; i < len; i++) {
                            var n = nodes[i];
                            var subjects = n.children;
                            var res = false;
                            for (var j = 0; j < subjects.length; j++) {
                                if (subjects[j].className.indexOf("filterSubject") >= 0) {
                                    res = res || (!!subjects[j].innerHTML.match(console.filterRegex));
                                    if (res) {
                                        break;
                                    }
                                }
                            }
                            n.style.display = res ? "" : "none";
                        }
                        console.lastFilterRegex = console.filterRegex;
                    }
                }, 200);

            },
            info: function (html) {
                console.$("info").innerHTML += html;
            },
            outerHTML: function (node) {
                return node.outerHTML || (function (n) {
                    var div = window.document.createElement("div"), h;
                    div.appendChild(n.cloneNode(true));
                    h = div.innerHTML;
                    div = null;
                    return h;
                })(node);
            },
            newWindow: function () {
                var w = window.open("", "", "height=500,width=620,left=200,top=150,status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no");

                w.document.open();
                w.document.write("<html><head><script type='text/javascript'>window.onunload=function(){if(window.comm100_console.isInNewWindow)window.comm100_console.closeNewWindow();}</script></head><body style='margin:0px;padding:0px'>");
                w.document.write(console.outerHTML(console.$()));
                w.document.write("</body></html>");
                w.document.close();
                w.document.title = "Comm100 Live Chat JS Console";
                if (navigator.userAgent.indexOf("MSIE") < 0)
                    w.document.body.style.paddingRight = "16px"; //don't why
                console.isInNewWindow = true;
                console.clear();
                console.$().style.display = 'none';
                console.window = w;

                console.run();
                console.show();

                var a = console.$("newWindow");
                a.innerHTML = "close window";
                a.onclick = console.closeNewWindow;
                var w = console.$();
                w.style.position = "static";
                console.$("autoScroll").checked = console.autoScrollToBottom;
                console.$("toolbar").style.width = console.$("output").style.width = w.style.width = "100%";
                console.$("visible").style.display = console.$("right").style.display = console.$("left").style.display = "none";
                console.window.comm100_console = console;
            },
            closeNewWindow: function () {
                var saved = console.$().innerHTML;
                console.isInNewWindow = false;
                console.window.close();
                console.window = window;

                console.$().innerHTML = saved;
                console.$().style.display = '';
                //console.$().style.width = "620px";

                console.$("toolbar").style.width = console.$("output").style.width = "620px";
                console.$("visible").style.display = console.$("right").style.display = console.$("left").style.display = "";
                console.$("autoScroll").checked = console.autoScrollToBottom;
                var a = console.$("newWindow");
                a.innerHTML = "new window";
                a.onclick = console.newWindow;

                console.run();
                console.hide();
            }
        }
        var html = "<div id='comm100_console_toolbar' style='border:solid 1px gray;width:620px;padding:6px'><div><input id='comm100_console_start' value='stop' type='button'/>&nbsp;&nbsp;<input value='clear' type='button' onclick='window.comm100_console.clear()''/>&nbsp;&nbsp;<input type='button' value='hide' id='comm100_console_visible' style='width:45px'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='comm100_console_counter'>0</span>&nbsp;items&nbsp;&nbsp;<input id='comm100_console_left' value='&lt;' type='button' onclick='comm100_console.move(-200)' style='width:25px'/>&nbsp;<input id='comm100_console_right' value='&gt;' type='button' onclick='comm100_console.move(200)' style='width:25px'/>&nbsp;&nbsp;<a style='cursor:pointer;text-decoration:underline' id='comm100_console_newWindow' onclick='window.comm100_console.newWindow();'>new window</a></div>"
                    + "<div id='comm100_console_info' style='margin-top:6px;'><div style='margin-bottom:3px'>" + navigator.userAgent + "</div></div></div>"
                    + "<div id='comm100_console_filter' style='margin-top:6px;border:solid 1px gray;padding:6px;'><b>Filter: </b><input type='text' id='comm100_console_filter_input' style='width:200px;font-weight:bold;' onkeyup='comm100_console.filter(this.value)'/>&nbsp;&nbsp;<span>scroll to bottom automatically&nbsp;<input id='comm100_console_autoScroll' type='checkbox' onclick='window.comm100_console.autoScrollToBottom=this.checked'/></span></div>"
                    + "<div id='comm100_console_output' style='border:solid gray 1px;overflow:auto;width:620px;height:400px;margin-top:6px;padding:6px;'></div>";
        var div = window.document.createElement("div");
        div.style.cssText = 'text-align:left;color:black;background-color:white;font-family:Trebuchet MS,Verdana,Helvetica,Arial,sans-serif;font-size:13px;position:fixed;left:400px;top:0px;_position:absolute;_top:expression(offsetParent.scrollTop)';
        div.innerHTML = html;
        window.document.body.insertBefore(div, window.document.body.firstChild);
        div.style.zIndex = 8000;
        div.id = "comm100_console";
        //div.style.filter = "alpha(opacity=50)";

        console.hide();
        console.run();
        window.comm100_console = console;
    }
})();

if (window.comm100_console_loaded)
    window.comm100_console_loaded();