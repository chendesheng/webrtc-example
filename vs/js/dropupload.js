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
