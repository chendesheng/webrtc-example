
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
