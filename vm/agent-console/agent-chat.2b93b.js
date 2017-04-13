/*
 * version: 9.0.0
 * compiled: 2017-04-13 14:37:45.968
 *
 * Notice:
 * This file contains works from many authors under various (but compatible)
 * licenses. Please visit https://hosted.comm100.com/livechat/newvm/credits.html
 * for more information.
 */
webpackJsonp([2],{

/***/ 1079:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"uploadProgressContainer":"FileUploadProgress__uploadProgressContainer--2X8I6","uploadProgress":"FileUploadProgress__uploadProgress--z1S5B","uploadProgressPercent":"FileUploadProgress__uploadProgressPercent--2Kuai","uploadProgressBarContainer":"FileUploadProgress__uploadProgressBarContainer--1y0Vz","uploadProgressBar":"FileUploadProgress__uploadProgressBar--1Y9LY","cancelUpload":"FileUploadProgress__cancelUpload--1YVmG","uploadFileName":"FileUploadProgress__uploadFileName--3j-Sc"};

/***/ }),

/***/ 1355:
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(33);

var _classnames2 = _interopRequireDefault(_classnames);

var _request = __webpack_require__(1362);

var _request2 = _interopRequireDefault(_request);

var _uid = __webpack_require__(957);

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint react/no-is-mounted:0*/

var AjaxUploader = _react2["default"].createClass({
  displayName: 'AjaxUploader',

  propTypes: {
    component: _react.PropTypes.string,
    style: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    accept: _react.PropTypes.string,
    children: _react.PropTypes.any,
    onStart: _react.PropTypes.func,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    headers: _react.PropTypes.object,
    beforeUpload: _react.PropTypes.func,
    customRequest: _react.PropTypes.func,
    onProgress: _react.PropTypes.func,
    withCredentials: _react.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    this.reqs = {};
    return {
      uid: (0, _uid2["default"])()
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    this.abort();
  },
  onChange: function onChange(e) {
    var files = e.target.files;
    this.uploadFiles(files);
    this.reset();
  },
  onClick: function onClick() {
    var el = this.refs.file;
    if (!el) {
      return;
    }
    el.click();
  },
  onKeyDown: function onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onClick();
    }
  },
  onFileDrop: function onFileDrop(e) {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }

    var files = e.dataTransfer.files;
    this.uploadFiles(files);

    e.preventDefault();
  },
  uploadFiles: function uploadFiles(files) {
    var postFiles = Array.prototype.slice.call(files);
    var len = postFiles.length;
    for (var i = 0; i < len; i++) {
      var file = postFiles[i];
      file.uid = (0, _uid2["default"])();
      this.upload(file, postFiles);
    }
  },
  upload: function upload(file, fileList) {
    var _this = this;

    var props = this.props;

    if (!props.beforeUpload) {
      // always async in case use react state to keep fileList
      return setTimeout(function () {
        return _this.post(file);
      }, 0);
    }

    var before = props.beforeUpload(file, fileList);
    if (before && before.then) {
      before.then(function (processedFile) {
        var processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
          _this.post(processedFile);
        } else {
          _this.post(file);
        }
      })["catch"](function (e) {
        console && console.log(e); // eslint-disable-line
      });
    } else if (before !== false) {
      setTimeout(function () {
        return _this.post(file);
      }, 0);
    }
  },
  post: function post(file) {
    var _this2 = this;

    if (!this.isMounted()) {
      return;
    }
    var props = this.props;
    var data = props.data;
    var onStart = props.onStart,
        onProgress = props.onProgress;

    if (typeof data === 'function') {
      data = data(file);
    }
    var uid = file.uid;

    var request = props.customRequest || _request2["default"];
    this.reqs[uid] = request({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: onProgress ? function (e) {
        onProgress(e, file);
      } : null,
      onSuccess: function onSuccess(ret) {
        delete _this2.reqs[uid];
        props.onSuccess(ret, file);
      },
      onError: function onError(err, ret) {
        delete _this2.reqs[uid];
        props.onError(err, ret, file);
      }
    });
    onStart(file);
  },
  reset: function reset() {
    this.setState({
      uid: (0, _uid2["default"])()
    });
  },
  abort: function abort(file) {
    var reqs = this.reqs;

    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (reqs[uid]) {
        reqs[uid].abort();
        delete reqs[uid];
      }
    } else {
      Object.keys(reqs).forEach(function (uid) {
        if (reqs[uid]) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      });
    }
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        prefixCls = _props.prefixCls,
        className = _props.className,
        disabled = _props.disabled,
        style = _props.style,
        multiple = _props.multiple,
        accept = _props.accept,
        children = _props.children;

    var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      onDrop: this.onFileDrop,
      onDragOver: this.onFileDrop,
      tabIndex: '0'
    };
    return _react2["default"].createElement(
      Tag,
      (0, _extends3["default"])({}, events, {
        className: cls,
        role: 'button',
        style: style
      }),
      _react2["default"].createElement('input', {
        type: 'file',
        ref: 'file',
        key: this.state.uid,
        style: { display: 'none' },
        accept: accept,
        multiple: multiple,
        onChange: this.onChange
      }),
      children
    );
  }
});

exports["default"] = AjaxUploader;
module.exports = exports['default'];

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(33);

var _classnames2 = _interopRequireDefault(_classnames);

var _uid = __webpack_require__(957);

var _uid2 = _interopRequireDefault(_uid);

var _warning = __webpack_require__(1373);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

// diferent from AjaxUpload, can only upload on at one time, serial seriously
var IframeUploader = _react2["default"].createClass({
  displayName: 'IframeUploader',

  propTypes: {
    component: _react.PropTypes.string,
    style: _react.PropTypes.object,
    disabled: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    accept: _react.PropTypes.string,
    onStart: _react.PropTypes.func,
    multiple: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    action: _react.PropTypes.string,
    name: _react.PropTypes.string
  },

  getInitialState: function getInitialState() {
    this.file = {};
    return {
      uploading: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.updateIframeWH();
    this.initIframe();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.updateIframeWH();
  },
  onLoad: function onLoad() {
    if (!this.state.uploading) {
      return;
    }
    var props = this.props,
        file = this.file;

    var response = void 0;
    try {
      var doc = this.getIframeDocument();
      var script = doc.getElementsByTagName('script')[0];
      if (script && script.parentNode === doc.body) {
        doc.body.removeChild(script);
      }
      response = doc.body.innerHTML;
      props.onSuccess(response, file);
    } catch (err) {
      (0, _warning2["default"])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
      response = 'cross-domain';
      props.onError(err, null, file);
    }
    this.endUpload();
  },
  onChange: function onChange() {
    var _this = this;

    var target = this.getFormInputNode();
    // ie8/9 don't support FileList Object
    // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
    var file = this.file = {
      uid: (0, _uid2["default"])(),
      name: target.value
    };
    this.startUpload();
    var props = this.props;

    if (!props.beforeUpload) {
      return this.post(file);
    }
    var before = props.beforeUpload(file);
    if (before && before.then) {
      before.then(function () {
        _this.post(file);
      }, function () {
        _this.endUpload();
      });
    } else if (before !== false) {
      this.post(file);
    } else {
      this.endUpload();
    }
  },
  getIframeNode: function getIframeNode() {
    return this.refs.iframe;
  },
  getIframeDocument: function getIframeDocument() {
    return this.getIframeNode().contentDocument;
  },
  getFormNode: function getFormNode() {
    return this.getIframeDocument().getElementById('form');
  },
  getFormInputNode: function getFormInputNode() {
    return this.getIframeDocument().getElementById('input');
  },
  getFormDataNode: function getFormDataNode() {
    return this.getIframeDocument().getElementById('data');
  },
  getFileForMultiple: function getFileForMultiple(file) {
    return this.props.multiple ? [file] : file;
  },
  getIframeHTML: function getIframeHTML(domain) {
    var domainScript = '';
    var domainInput = '';
    if (domain) {
      var script = 'script';
      domainScript = '<' + script + '>document.domain="' + domain + '";</' + script + '>';
      domainInput = '<input name="_documentDomain" value="' + domain + '" />';
    }
    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
  },
  initIframeSrc: function initIframeSrc() {
    if (this.domain) {
      this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
    }
  },
  initIframe: function initIframe() {
    var iframeNode = this.getIframeNode();
    var win = iframeNode.contentWindow;
    var doc = void 0;
    this.domain = this.domain || '';
    this.initIframeSrc();
    try {
      doc = win.document;
    } catch (e) {
      this.domain = document.domain;
      this.initIframeSrc();
      win = iframeNode.contentWindow;
      doc = win.document;
    }
    doc.open('text/html', 'replace');
    doc.write(this.getIframeHTML(this.domain));
    doc.close();
    this.getFormInputNode().onchange = this.onChange;
  },
  endUpload: function endUpload() {
    if (this.state.uploading) {
      this.file = {};
      // hack avoid batch
      this.state.uploading = false;
      this.setState({
        uploading: false
      });
      this.initIframe();
    }
  },
  startUpload: function startUpload() {
    if (!this.state.uploading) {
      this.state.uploading = true;
      this.setState({
        uploading: true
      });
    }
  },
  updateIframeWH: function updateIframeWH() {
    var rootNode = _reactDom2["default"].findDOMNode(this);
    var iframeNode = this.getIframeNode();
    iframeNode.style.height = rootNode.offsetHeight + 'px';
    iframeNode.style.width = rootNode.offsetWidth + 'px';
  },
  abort: function abort(file) {
    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (uid === this.file.uid) {
        this.endUpload();
      }
    } else {
      this.endUpload();
    }
  },
  post: function post(file) {
    var formNode = this.getFormNode();
    var dataSpan = this.getFormDataNode();
    var data = this.props.data;
    var onStart = this.props.onStart;

    if (typeof data === 'function') {
      data = data(file);
    }
    var inputs = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
      }
    }
    dataSpan.innerHTML = inputs.join('');
    formNode.submit();
    dataSpan.innerHTML = '';
    onStart(file);
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        disabled = _props.disabled,
        className = _props.className,
        prefixCls = _props.prefixCls,
        children = _props.children,
        style = _props.style;

    var iframeStyle = (0, _extends3["default"])({}, IFRAME_STYLE, {
      display: this.state.uploading || disabled ? 'none' : ''
    });
    var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    return _react2["default"].createElement(
      Tag,
      {
        className: cls,
        style: (0, _extends3["default"])({ position: 'relative', zIndex: 0 }, style)
      },
      _react2["default"].createElement('iframe', {
        ref: 'iframe',
        onLoad: this.onLoad,
        style: iframeStyle
      }),
      children
    );
  }
});

exports["default"] = IframeUploader;
module.exports = exports['default'];

/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AjaxUploader = __webpack_require__(1358);

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = __webpack_require__(1359);

var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function empty() {}

var Upload = _react2["default"].createClass({
  displayName: 'Upload',

  propTypes: {
    component: _react.PropTypes.string,
    style: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    action: _react.PropTypes.string,
    name: _react.PropTypes.string,
    multipart: _react.PropTypes.bool,
    onError: _react.PropTypes.func,
    onSuccess: _react.PropTypes.func,
    onProgress: _react.PropTypes.func,
    onStart: _react.PropTypes.func,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    headers: _react.PropTypes.object,
    accept: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    beforeUpload: _react.PropTypes.func,
    customRequest: _react.PropTypes.func,
    onReady: _react.PropTypes.func,
    withCredentials: _react.PropTypes.bool,
    supportServerRender: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'span',
      prefixCls: 'rc-upload',
      data: {},
      headers: {},
      name: 'file',
      multipart: false,
      onReady: empty,
      onStart: empty,
      onError: empty,
      onSuccess: empty,
      supportServerRender: false,
      multiple: false,
      beforeUpload: null,
      customRequest: null,
      withCredentials: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      Component: null
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.supportServerRender) {
      /* eslint react/no-did-mount-set-state:0 */
      this.setState({
        Component: this.getComponent()
      }, this.props.onReady);
    }
  },
  getComponent: function getComponent() {
    return typeof FormData !== 'undefined' ? _AjaxUploader2["default"] : _IframeUploader2["default"];
  },
  abort: function abort(file) {
    this.refs.inner.abort(file);
  },
  render: function render() {
    if (this.props.supportServerRender) {
      var _Component = this.state.Component;

      if (_Component) {
        return _react2["default"].createElement(_Component, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
      }
      return null;
    }
    var Component = this.getComponent();
    return _react2["default"].createElement(Component, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
  }
});

exports["default"] = Upload;
module.exports = exports['default'];

/***/ }),

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export this package's api
module.exports = __webpack_require__(1360);

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = upload;
function getError(option, xhr) {
  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
function upload(option) {
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr));
  };

  xhr.open('post', option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ 1371:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkU4OUI5NzlFNTIyMTFFMjkzRDY5M0EzRUFGNUY4ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkU4OUI5N0FFNTIyMTFFMjkzRDY5M0EzRUFGNUY4ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRTg5Qjk3N0U1MjIxMUUyOTNENjkzQTNFQUY1Rjg4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRTg5Qjk3OEU1MjIxMUUyOTNENjkzQTNFQUY1Rjg4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjKuj5kAAAZ+SURBVHjazJlbbBRVGMf3zG13Lp2dvdNuS1sWKZe0QYFwTUw0CvggkYvGRIkoMRK5PPkkJvigIG01PggP+iA+UF9IeCDRFxN4oaCJoZhigkVLo2gv0m13d3Zn5+Y3e9rptnSXmelWONlOzmznnPM7//Odb873LTJN0/f4FQr+bvX/QpIUQSCCIB4himEVU9e11WvaLSxgoigSyiPH0nV9Ri3QiSwVhNAjxMKjA5yNZRX4diFqlduot+kBECaZwlpgMcsKnqRnMrssSB5sDbjIsnzk6LHDh49qmmaZ7sI2OLUQJijZbLan59u2thUffXxyYGCAIMi+vpsdHe14A6FS+Z+wMBCocv58z+nOrkwmIwh8NpuDf+m6sXvP3l27Xjx29Ehzc7Ntsm7hEMz7zsBtmqZtc3PCND4+fujQu73XrlV6zO/3JxKJ7q7O9evXEdPFSc+qqqaWryA8rN3IyMievfuqMEFRFGVoaGjfy68cePPg2NgYHnJRTB4zgWm/ceCtO3d+d9jq8uXL23e8cPv2b67IXGN1dXX39/e70hjUeu31/WNj/9pOpGYmj5kGBwe/PncOf8PQ1PF3Xt393NZEWIJ9pxSLY+lMfTQk8CzyoYJS7O379cDxT/8euQ8PDw8Pd3Z2njp10uHedGry8Bg4p09Od545cxZun1qVuvJNZ8DPVO9d0/Udb39w5aebUIchfrzeG4lEYA41M3ms1o0bfVBf2dp0teezhzJZa0GSl86c4NgA1GE82CUO19HdThwdHYXrpbMfko7fnkDf/d5BXB+6O7QoJq8UCm0tjc0NcVeTWbtqGa7cu3fPoVruvDzP8/t3bnb7VmhJLsGVXC5Xe7VgB0XC0ob2FW6xopLY2miRhSMRh4cLd7YVj0VjUtDDazTVVA/XbVu3OHw5ulMrtayVZRkPWEvr49C8o6OjxmrhvlKplJxXPGA1N8Q2rG0XRbHGauHt075mdf/AXU9YiWe2rCNMp+9EypWDWB/R0qLgAaslmYjHE4yR133+2mMhn7mpY6UHrOVLGzieyyGy9mqBWWiIFAXOA1YiIpk+lCYD1GL4rTzioHdvx38FMXB+rrHJ4wOJTAc1H+mByfChDCU5P9S7wIJONZrPEYInqfwFRnIeaLhbRCCTadED1iQdtkO0RcEyaE5GnFurKtJ1rmJGd+9ETAZTd9UqTUfdpoNcY0FRaT6DnFpYFvEKJbgNr13nIPAAkzqjmg9vq5pkRqM8RNWusaaPl0jOF/WqzXWTkGWFIEjncZhHLDthVCfwhmFmc0XNmF8GVfdlZMUwTTG6xDB0t2TuIh+IyTRNC9cJjGidM2HUjFzMK7pRNiLc5Ap6Nq+WNCWoYFxiCAh7oK3zBBPlXCGMFeJZPhSDIQiGNYp5eKCgGvAhCct8YNhyRH+sifYHpOTywOTo8PgkLKedXapubUR1GjuxBtNlGH+ysSkYT5ZiUYpLzjrUg0iaMYsJESTf2IY9AyfFmppaWI4DsXGHWLlK4lHVk45WY5+P4/hgMMQwDJ4haSlDsEtaCyODWm6i0sS45BOknyt1aF0oiozFEpIUnpycyOWywFeesJ0jHjWvQvgK8ohBEYKwaeXLXYRVE9s2jt/4wTT0B5loMcIl26Yb4KyCNQKE/OFwNBSKyHIO+IpKAWe45zhb6kEm6ILnRUGoIykSoTmWMGtWIIa0Zlv61lVTV2cx1YWDq7b4ZgsAd9Y50mdiSlgBluWKxWI6fV8p5HFiwl5TYs5GY5hAPNEg1IkEOZdpXjOlhFB47bNMMGYPztangBUMaz5XbF1wpfRBYBjRaCIcgTAdwegz6epyLJYTpFCkJCnCzXD76lEUwQSCq7eSrRuHVQG1bBJa2sHaK78kbLKZIQIBNhavp2gGk00tImYCdwx2DX6JpKiyZSu/Viwn3u+6eOF7XN+4+ckvvjwFBl6FDK9mqVsTDwUA4XBs+J+/DEObwsLbNRQOlX4LMpFhlASbicTgtooXzExmLl74zr693vtzenw8KAUr5bHKIzy8aJazg0EJgmX5QiE/gwUbAfYd/iVIKRQCbMA0ka1zhSyZZbx5WQ6w7NKWxrt//DmVPhFY2L/ZTJYX+CqLP02FE0EKRdPgMhh/YOY3H3CVvCDCFTsCVStSGmUDVepYVaEfDRYLJrPrpec/7/4Kf79959OlAZiJ9AT4T+jyoYKpahHWEztagqSmkpS+x6/8J8AAhsiCQV+tXy4AAAAASUVORK5CYII="

/***/ }),

/***/ 1372:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzFEM0MwQURFNTIyMTFFMkEzODlDQjFGNjhGMUJFRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzFEM0MwQUVFNTIyMTFFMkEzODlDQjFGNjhGMUJFRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMUQzQzBBQkU1MjIxMUUyQTM4OUNCMUY2OEYxQkVFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMUQzQzBBQ0U1MjIxMUUyQTM4OUNCMUY2OEYxQkVFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYSkgMAAAiiSURBVHjazJl7UFTXHcfv++7rsrssLCuggK7hYYrio1WCbSYREjKjtHViJ3bSatI/bJ2knWnTSf5oaGNqZprWTjKTRk3sH6mJYwL+IcTJKAnt2AYD6KhABJ+8kl1YHsK+7969t797z927gBHuAo453D3e9/nc7+93fuf8jrgkSdi3r1Dw+7KrgyQpgsAJgriPKKJcpHhcKFn1HRkLmCiKhHLfseLxeFIt0IlUCo7j9xELtQ5wGpZc4OzC1QJPnfe3ARAiUbEWXiSlaFioLOSFxAJpkEOg0tHRUX/ihOy3CcoF9cSFMEF97dr1UCg47PO98867X3zRumzZsrVlZchT5y0bNW+TAZMgCHV19X96Zd+qVSWTE35/wA9Xd+165o03/r65ooKmaeSv84DDoYEb16/CKzR308l0q7f3d799of38eaPRGBfFdHu6wWgIBAKyWQXBZDZXVVW++PsX4KrWpXTELTEWi61wP0DMQydwo89bWrZu3QZMLMsCAU3RNEPDR+bl5ZlMpmX5+XBbc/N/nt717MFDh3meh0dQz78nLo90am1tA0tFItHsnByLxaL0PvhWaWjIO+n3Z7lcIz4fwzBOpxN2zjR9tvOnTw8MDCAxFt+ISKfh4eGqx6pB6mAw6FqyZGx0FOJgNBLh0tLgjnA4DKwD/f2swQADh9VmCwYCNps9FuM/+uh4Tnb2LEF7qhGpVKV6Zd+r4+PjdrsdDr0ejzs385F1hRk2LhCOdtwYzLSlVaxebuce9Y37T53ramq9ApR9fb0Wjvv18785fvwYMAHZovVExNTX39/Y+DEc+v3+HY+u/+Mz1WlG5m6PPPmD0vFAZMfL//xKkvyTk23t7Z81N1du2aJnJEjNt06fPoPiZO3u6gN7a+5kwgkSJykQBFMatlsMp17f43JY0dWTJxt0RloiJSN6PB7YAavtrv7utLfQDGWxsunOxJbFOlx0mo1gWJok3nv55+i2S5cu64z+KRgR6vHx21Dv31OTlAcmRWaOoFlQSJZKmbUpXytJNEsazPFoqBAnjCwTjvLQVRdfLVTSzIZcB6c+DGKk2aEmYBYJG0UTFEMCDWugWBNlMFGskTJYjLb09SX5Sl+T7knccqTbN5e6NSbKxCkKkbJU4FIESciOJfORjIE0mOSaYUnaUPpAHjwCYWiRx0Q0rjkcDufKXPkQGjaakcnkDVc2MF9iH8PlP8X9KZyiilcshafcbrfO8TG1oTovP0+I9UNzlMmstE0ovHKN4Qr8lHCCdpTrZF62E46Kigp1jtmpGXF5QQHM+ME6WAIF4SAmbdAEKEmMyxvsKO6U68qAetPGjTrVSg2roKDgdogHr0qioCYk9JOAC1OZ1BoO4Vq2084y9Pcf2nhPXJ6NDNsdDs3fEkAYApJRZCZRZYqrggEZRRKV5aszBc/ixy0oTOCrNe4c7ZTyQwrJIoF0sjy4pPpYYmqm4ErbKzdhQlhnGpKay4sYmZtlnwqLgDAJgCSMUMgkzbIISxXs4bWFAs7iicRrcYyIXFU0WJOPKEwJFxeTLiUlHStRyxsBwNZcnT0xRbVMmTQ9gGGCQiWLhMu14mCiEh+SFlTjhIZFUXTc5Fjknqgmt0a7yLmmGFFUpVKcHdOcPbklzsA/ZiehO3FPoSciMiEtf9r4rWaFqO242gHj03YwMS4SDJ9Roj8FolLFEllzzJBBR0YSZCIOYGp0xZOBA9M8D6wsRS1LSYrWk//Mx7cQGW/N17BUzaQ4XJFwjSmJJe8RtGhdRulmSjmcqumoycEbM+8IbDMcS9QiZ8S2EiY8KSWxKc+3EFmEyxdxXUpHSZNgyU41sZ7n0kg8Fh4baJtzHIG0dezW2SmWvWdYKAUyEJLIhyc8neLdxzg+GpwYaLM4CnB+ItU1HCJVIMhgo+FQb7/XsuRBKS76h3oEPnTnnYAc9N2kKJN1RUVTY4MgCCg71QlH6AdCTD7fyN5n955uuWbMr2AYC0Uw0dve0Gh/5LYnOjEUmfCGxwZDI71iNMwwZoMlkyv43qHj//trbW0kEkErEXrgCD2LM2hVLRQKvXvkWGXVzk/PdXu8I3b3BqM1h2E42GAGTWIUIRGkBDN5mFlZ0HlbSRVrNIbD4YMffLpt2+6GhjMIDvHNYllqFiANy+Md/vDDhqNHT4yMjKEbQDOGZZniqmhn411DIpdhWVmupOBBqHuu3nzu+T9kZjpqaqp+/KPqoiL31KW5Gf105tKIhgJ1MBhqbv68rq7x7H9b4fOmPrZ2ben5801y5thxJvp15zfEEcjI1mznHFlyDpe23O8PzLhhw/rVO3f+8IknHmFZVmtaWxqZhiVPXZRy61b/P95+r7GxKRyOfKMSGRnpPl830tXf/e/I119O8wzGZCh+zJKRDfvwbRxXcDdjuVzOX/3yZ089VcMwDHobdI5pWEhGsPqRI8f+8vrbPB+b3SsnJ29ynAXth4Zu8IMX45FJkIl1upncMsZoRpcuXLi8bt2W2V9VXOR+7bWXSkuLgQGw3CsLiRndrbb2b6/++c05maB0dFzR9k1ZK9jiai9ZGHKVG5dv0pigdHX1zPmqK93Xn9yxp67uYxAF6UpN9fH29kv/OlrP0DQfmxsLZCgv34D2PYOeY/sOXmm5CAPT5p9UP/6L7eDaieWQLp1x8cWX9i9duqSs7EE1QGgh4MCBwwCnZ1kMSmvrBeSIXu/wW8/t72m7bLZxMFaffOuDyGRgdHQcXQX6OV8lt6jkIocOv4/+20fGiiv+39nZ3XLuAhyCdVlm7sUCkBbuDAQC4BAWq7yCCkOfkTNBG/aMdLgE3QXqixc75nyVgWVjAkzEpbNnz3k8wyqWEIOTQn39KZSCxoQYIyeo0uzb1avXfb7Rvr5BjjNv3PowQVMw3+Kj/KqH1hA0CSf7+gZ6em4oa0+zvQfHUH4mKR1O/OSTZjVuYd++8n8BBgAdGp8vDEHQhQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_identity__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Item__ = __webpack_require__(1479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);














var List = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(List, _React$Component);

  function List() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, List);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (List.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(List)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(List, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(nextProps.agents, this.props.agents);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.listsection
      }, void 0, this.props.agents.map(function (agent) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Item__["a" /* default */], {
          agent: agent,
          onItemClick: _this2.props.onItemClick
        }, agent.id);
      }));
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ 1476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(1388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Department__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);







var AgentsLeft = function AgentsLeft(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__agents_css___default.a.agentsSection
  }, void 0, props.isDepartment ? props.agentData.map(function (agent) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__Department__["a" /* default */], {
      department: agent,
      onDepartmentClick: props.onDepartmentClick,
      onItemClick: props.onItemClick
    }, agent.id);
  }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */], {
    agents: props.agentData,
    onItemClick: props.onItemClick
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AgentsLeft);

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icons_Avatar__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__KickOff__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Button_Button__ = __webpack_require__(86);















var ChatHeader = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatHeader, _Component);

  function ChatHeader(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatHeader);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatHeader.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatHeader)).call(this));

    _this.avatarLink = __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default()(props.agent.avatarLink) ? '' : props.agent.avatarLink + '&' + Date.now();
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatHeader, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (__WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default()(nextProps.agent.avatarLink)) {
        this.avatarLink = '';
        return;
      }
      this.avatarLink = nextProps.agent.avatarLink + '&' + Date.now();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.agent.avatarLink !== nextProps.agent.avatarLink || this.props.agent.name !== nextProps.agent.name || this.props.agent.ifDisableKickOff !== nextProps.agent.ifDisableKickOff || this.props.agent.ifDisableSetAway !== nextProps.agent.ifDisableSetAway;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.avatar
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icons_Avatar__["a" /* default */], {
        avatarLink: this.avatarLink
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, this.props.agent.name)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.toolbar
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__KickOff__["a" /* default */], {
        onKickOff: function onKickOff() {
          return _this2.props.onKickOff(_this2.props.agent);
        },
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.commonbtn,
        disabled: this.props.agent.ifDisableKickOff
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
        text: 'Set Away',
        type: 'default',
        disabled: this.props.agent.ifDisableSetAway,
        onClick: function onClick() {
          return _this2.props.onSetAway(_this2.props.agent);
        },
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.commonbtn, this.props.agent.ifDisableSetAway && __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.disable)
      })));
    }
  }]);

  return ChatHeader;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChatHeader);

/***/ }),

/***/ 1478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__List__ = __webpack_require__(1388);















var Department = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Department, _React$Component);

  function Department() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Department);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Department.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Department)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Department, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.department.name !== this.props.department.name || nextProps.department.selected !== this.props.department.selected || nextProps.department.opened !== this.props.department.opened || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.department.agents, nextProps.department.agents);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.departmentsection, this.props.department.selected && __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.selectedDpt, this.props.department.opened && __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.opened)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.departmentitem,
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onDepartmentClick(_this2.props.department);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.icon
      }, void 0, this.props.department.agents.length > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].arrowDown,
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.depSpread
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.description
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, this.props.department.name), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.departmentNum
      }, void 0, '(Online: ' + this.props.department.onlineNum + ', Away: ' + this.props.department.awayNum + ')'))), this.props.department.opened && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__List__["a" /* default */], {
        agents: this.props.department.agents,
        onItemClick: this.props.onItemClick
      }));
    }
  }]);

  return Department;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Department);

/***/ }),

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icons_PromptNumber__ = __webpack_require__(746);















var Item = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Item, _React$Component);

  function Item() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Item);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Item.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Item)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Item, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(nextProps.agent, this.props.agent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.agentitem, this.props.agent.selected && __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.selected),
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onItemClick(_this2.props.agent);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: this.props.agent.icon.type,
        color: this.props.agent.icon.color,
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.agentName
      }, void 0, this.props.agent.name), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.agentDescription
      }, void 0, this.props.agent.description), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icons_PromptNumber__["a" /* default */], {
        number: this.props.agent.unreadMessage,
        customClass: __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.unreadmessage
      }));
    }
  }]);

  return Item;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Button_Button__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Modal_KickOff_KickOff__ = __webpack_require__(1516);













var KickOff = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(KickOff, _React$Component);

  function KickOff() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, KickOff);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (KickOff.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(KickOff)).call(this));

    _this.state = {
      open: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(KickOff, [{
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ open: false });
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ open: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: this.props.className
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Button_Button__["a" /* default */], {
        text: 'Kick Off',
        type: 'default',
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.btnAction, this.props.disabled && __WEBPACK_IMPORTED_MODULE_9__agents_css___default.a.disable),
        disabled: this.props.disabled,
        onClick: function onClick() {
          return _this2.openModal();
        }
      }), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Modal_KickOff_KickOff__["a" /* default */], {
        onKickOff: this.props.onKickOff,
        closeModal: this.closeModal
      }));
    }
  }]);

  return KickOff;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (KickOff);

/***/ }),

/***/ 1481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__agents_css__);




var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h1', {}, void 0, 'You are alone here :(');

var NoAgents = function NoAgents(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__agents_css___default.a.noDataSection
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, _ref, 'Need more hands? ', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    onClick: function onClick() {
      return props.addMoreAgents(props.siteInfo);
    }
  }, void 0, 'Add Agents Now.')));
};

/* harmony default export */ __webpack_exports__["a"] = (NoAgents);

/***/ }),

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_css__);







// import classnames from 'classnames';




var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {});

var KickOff = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(KickOff, _React$Component);

  function KickOff(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, KickOff);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (KickOff.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(KickOff)).call(this, props));

    _this.handleKickOff = _this.handleKickOff.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(KickOff, [{
    key: 'handleKickOff',
    value: function handleKickOff() {
      this.props.onKickOff();
      this.props.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        title: 'Comm100 Live Chat',
        actions: {
          okProps: { text: 'Yes', eventClick: function eventClick() {
              _this2.handleKickOff();
            } },
          cancelProps: { text: 'No' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.description
      }, void 0, 'If you kick off this agent, his ongoing chats will be ended.', _ref, 'Are you sure you want to continue?'));
    }
  }]);

  return KickOff;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (KickOff);

/***/ }),

/***/ 1595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNull__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isNull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Icons_ChatAction_SendFile__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Business_agentChat__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_seq__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_agentChat__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_agent__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_guid__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);















var previousState = {};
function getUploadUrl(uploadUrl, sessionId, siteId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_helper__["l" /* formatAgentChatUploadUrl */])(uploadUrl, sessionId, siteId, 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_guid__["a" /* createGUID */])());
}
var mapStateToProps = function mapStateToProps(state) {
  if (__WEBPACK_IMPORTED_MODULE_2_lodash_isNull___default()(__WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_43" /* getSelectedIdForAgents */](state)) || __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_43" /* getSelectedIdForAgents */](state) === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["l" /* noSelectedForAgent */]) {
    return {
      chatId: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["l" /* noSelectedForAgent */],
      ifDisplay: true,
      disabled: true,
      siteInfo: {},
      files: []
    };
  }

  var _chatBusiness$getAgen = __WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["a" /* getAgentOrDepartmentId */](state),
      _chatBusiness$getAgen2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_chatBusiness$getAgen, 2),
      isAgent = _chatBusiness$getAgen2[0],
      id = _chatBusiness$getAgen2[1];

  if (!__WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["b" /* isActiveStatus */](state, isAgent, id)) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, previousState);
    newState.disabled = true;
    return newState;
  }
  var uploadUrl = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_74" /* getFileUploadUrl */](state);
  var sessionId = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_75" /* getCurrentAgentSession */](state);
  var siteId = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["F" /* getSiteId */](state);
  var sendFileUploadUrl = getUploadUrl(uploadUrl, sessionId, siteId);

  previousState = {
    chatId: id,
    ifDisplay: true,
    disabled: !__WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["c" /* ifChatIsAvalable */](state, isAgent, id),
    siteInfo: {
      id: id,
      isAgent: isAgent,
      sendFileUploadUrl: sendFileUploadUrl,
      sessionId: sessionId,
      siteId: siteId,
      privateMessage: 1,
      sendToIds: __WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["d" /* getSendToIds */](state, isAgent, id),
      downloadUrl: __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_79" /* getFileDownloadUrl */](state),
      maxFileSize: __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["Z" /* getAgentChatFileSize */](state)
    },
    files: __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_80" /* getAgentChatUploadFiles */](state, id)
  };
  return previousState;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onStart: function onStart(id, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["a" /* startUpload */](id, filename, guid));
    },
    onProgress: function onProgress(id, percentage, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["b" /* uploadFile */](id, percentage, filename, guid));
    },
    onSuccess: function onSuccess(id, filename, fid, siteInfo, url, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["b" /* uploadFile */](id, 100, filename, fid));
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["c" /* appendFile */](__WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["e" /* filterSendToIds */](siteInfo.id, siteInfo.sendToIds, siteInfo.isAgent), url, filename, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_seq__["b" /* isImage */])(filename)));
      siteInfo.sendToIds.forEach(function (agentId) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["u" /* sendFileToAgent */](agentId, filename, guid));
      });
    },
    onCancel: function onCancel(id, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["d" /* cancelUpload */](id, filename, guid));
    },
    showErrorMessage: function showErrorMessage(chatId, errorMsg) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agentChat__["e" /* setErrorMessageForAgentChat */](chatId, errorMsg));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__components_Icons_ChatAction_SendFile__["a" /* default */]));

/***/ }),

/***/ 1596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isNull__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isNull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isNull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChatSection_ChatContent_ChatContent__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_agentChat__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Business_agentChat__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums_fontSize__ = __webpack_require__(318);












var mapStateToProps = function mapStateToProps(state) {
  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isNull___default()(__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state)) || __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state) === __WEBPACK_IMPORTED_MODULE_8__constants_enums__["l" /* noSelectedForAgent */]) {
    return {
      id: __WEBPACK_IMPORTED_MODULE_8__constants_enums__["l" /* noSelectedForAgent */],
      selectedFontSize: __WEBPACK_IMPORTED_MODULE_9__constants_enums_fontSize__["a" /* middle */],
      chatTo: '',
      typingMessage: '',
      scrollTop: -1,
      messages: __WEBPACK_IMPORTED_MODULE_3_immutable___default.a.List(),
      textDirectionIfRTL: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_78" /* textDirectionIfRTL */](state),
      errorMessageForChat: ''
    };
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Business_agentChat__["f" /* mapToChatContentState */])(state);
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;


  var dispatchObject = {
    onScroll: function onScroll(id, scrollTop) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agentChat__["h" /* updateScrollTop */](id, scrollTop));
    },
    hideErrorMessage: function hideErrorMessage() {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agentChat__["e" /* setErrorMessageForAgentChat */](stateProps.id, ''));
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_4__components_ChatSection_ChatContent_ChatContent__["a" /* default */]));

/***/ }),

/***/ 1597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isNull__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isNull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isNull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Agents_ChatHeader__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Business_agentChat__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_agent__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_agents__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(5);










var mapStateToProps = function mapStateToProps(state) {
  if (__WEBPACK_IMPORTED_MODULE_0_lodash_isNull___default()(__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state)) || __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state) === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["l" /* noSelectedForAgent */]) {
    return {
      agent: {
        id: __WEBPACK_IMPORTED_MODULE_5__constants_enums__["l" /* noSelectedForAgent */],
        ifCurrentAgent: false,
        avatarLink: '',
        name: '',
        ifDisableKickOff: true,
        ifDisableSetAway: true
      }
    };
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Business_agentChat__["g" /* mapToChatHeader */])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // bug: 18832
    onKickOff: function onKickOff(agent) {
      if (agent.ifCurrentAgent) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["a" /* logout */])());
        return;
      }
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["w" /* setAnotherAgentStatus */])(agent.id, __WEBPACK_IMPORTED_MODULE_5__constants_enums__["a" /* agentStatus */].offline));
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actions_agents__["b" /* updateAgent */])(agent.id, true));
    },
    onSetAway: function onSetAway(agent) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["w" /* setAnotherAgentStatus */])(agent.id, __WEBPACK_IMPORTED_MODULE_5__constants_enums__["a" /* agentStatus */].away));
      if (agent.ifCurrentAgent) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["c" /* initCurrentAgent */])({ status: __WEBPACK_IMPORTED_MODULE_5__constants_enums__["a" /* agentStatus */].away }));
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_Agents_ChatHeader__["a" /* default */]));

/***/ }),

/***/ 1598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Agents_AgentsLeft__ = __webpack_require__(1476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Business_agents__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_agents__ = __webpack_require__(558);





var mapStateToProps = function mapStateToProps(state) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Business_agents__["b" /* default */])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onDepartmentClick: function onDepartmentClick(info) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Business_agents__["a" /* updateCheckUnreadMsgFlag */])(false);
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agents__["c" /* updateDepartment */])(info.id));
    },
    onItemClick: function onItemClick(info) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agents__["b" /* updateAgent */])(info.id));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Agents_AgentsLeft__["a" /* default */]));

/***/ }),

/***/ 1599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Agents_NoAgents__ = __webpack_require__(1481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Business_common__ = __webpack_require__(319);




var mapStateToProps = function mapStateToProps(state) {
  var _common$getAgentUrls = __WEBPACK_IMPORTED_MODULE_2__Business_common__["b" /* getAgentUrls */](state),
      isWeb = _common$getAgentUrls.isWeb,
      loginUrl = _common$getAgentUrls.loginUrl,
      autoLoginUrl = _common$getAgentUrls.autoLoginUrl,
      addAgentsUrl = _common$getAgentUrls.addAgentsUrl;

  return {
    siteInfo: {
      isWeb: isWeb,
      loginUrl: loginUrl,
      autoLoginUrl: autoLoginUrl,
      addAgentsUrl: addAgentsUrl
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {
    addMoreAgents: function addMoreAgents(siteInfo) {
      __WEBPACK_IMPORTED_MODULE_2__Business_common__["e" /* gotoAgentsList */](siteInfo);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Agents_NoAgents__["a" /* default */]));

/***/ }),

/***/ 1611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__ = __webpack_require__(323);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
    modules: { AgentChatTextEditor: function AgentChatTextEditor() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          __webpack_require__.e/* require.ensure */(6).then((function (require) {
            resolve(__webpack_require__(1398));
          }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).catch(reject);
        }));
      } },
    loading: __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__["a" /* default */]
  }, void 0, function (_ref) {
    var AgentChatTextEditor = _ref.AgentChatTextEditor;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(AgentChatTextEditor, {});
  });
});

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Resizer_ResizeContainer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AgentsTab_Agents__ = __webpack_require__(1598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AgentsTab_AgentChatHeader__ = __webpack_require__(1597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SplitterAgentChatTextEditor__ = __webpack_require__(1611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AgentsTab_AgentChatContent__ = __webpack_require__(1596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AgentsTab_AgentChatAction__ = __webpack_require__(1595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AgentsTab_NoAgents__ = __webpack_require__(1599);


















var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__AgentsTab_Agents__["a" /* default */], {});

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__AgentsTab_AgentChatHeader__["a" /* default */], {});

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__AgentsTab_AgentChatContent__["a" /* default */], {});

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__AgentsTab_AgentChatAction__["a" /* default */], {}));

var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__SplitterAgentChatTextEditor__["a" /* default */], {});

var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__AgentsTab_NoAgents__["a" /* default */], {});

var SplitterAgentChat = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SplitterAgentChat, _React$Component);

  function SplitterAgentChat() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SplitterAgentChat);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SplitterAgentChat.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SplitterAgentChat)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SplitterAgentChat, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.agentNumber !== this.props.agentNumber || nextProps.selectedAgentChatId !== this.props.selectedAgentChatId || nextProps.agentsWidth !== this.props.agentsWidth;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          agentsWidth = _props.agentsWidth,
          agentNumber = _props.agentNumber,
          onAgentsStopResize = _props.onAgentsStopResize;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css___default.a.layoutContent, __WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css___default.a.agenttabStyle),
        id: 'agents'
      }, void 0, agentNumber > 1 ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__components_Resizer_ResizeContainer__["default"], {
        resizerPosition: 'left',
        width: agentsWidth,
        left_minWidth: 190,
        left_maxWidth: 350,
        right_minWidth: 360,
        onStopResize: onAgentsStopResize
      }, void 0, _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css___default.a.headerSection, __WEBPACK_IMPORTED_MODULE_8__components_CommonResources_common_css___default.a.clearfix)
      }, void 0, _ref2), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css___default.a.chatWindowContainer
      }, void 0, _ref3, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__components_Agents_agents_css___default.a.toolbarSection
      }, void 0, _ref4), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: {
          position: 'absolute',
          width: '100%',
          height: 175,
          bottom: 0,
          minHeight: 40
        }
      }, void 0, _ref5)))) : _ref6);
    }
  }]);

  return SplitterAgentChat;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SplitterAgentChat);

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"agentsSection":"agents__agentsSection--1KkTb","agentitem":"agents__agentitem--SS3Ah","selected":"agents__selected--sUXrP","unreadmessage":"agents__unreadmessage--2cbvf","description":"agents__description--37w0c","departmentsection":"agents__departmentsection--UCbdl","departmentitem":"agents__departmentitem--tAErL","selectedDpt":"agents__selectedDpt--3IyOf","agentName":"agents__agentName--2BEiY","listsection":"agents__listsection--7IpN9","opened":"agents__opened--3Kpp0","depSpread":"agents__depSpread--ZQjQ7","icon":"agents__icon--2EXnq","departmentNum":"agents__departmentNum--22zw1","agentDescription":"agents__agentDescription--aVF_w","chatContainer":"agents__chatContainer--1PjMq","headerSection":"agents__headerSection--1lCQD","messagesSection":"agents__messagesSection--37nkw","toolbarSection":"agents__toolbarSection--k6wTG","inputSection":"agents__inputSection--3Hrwt","avatar":"agents__avatar--ulse_","toolbar":"agents__toolbar--3991m","commonbtn":"agents__commonbtn--2Seh-","disable":"agents__disable--22B9f","noDataSection":"agents__noDataSection--gf-of","chatWindowContainer":"agents__chatWindowContainer--2RFOV"};

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatContainer":"ChatContent__chatContainer--1oxtQ","chatContentContainer":"ChatContent__chatContentContainer--3fAaw","chatVideoContainer":"ChatContent__chatVideoContainer--2Q872","chatVideoItem":"ChatContent__chatVideoItem--C1bJl","chatContent":"ChatContent__chatContent--3lHVq","directionRTL":"ChatContent__directionRTL--y-RND","systemMeg":"ChatContent__systemMeg--1akET","chatMeg":"ChatContent__chatMeg--1xqJM","translationMsg":"ChatContent__translationMsg--34tcn","attachment":"ChatContent__attachment--1ONEF","chatContentInfo":"ChatContent__chatContentInfo--17_KL","name":"ChatContent__name--2_SRW","time":"ChatContent__time--3BqgY","operator":"ChatContent__operator--13jwF","visitor":"ChatContent__visitor--1vjfa","secureForm":"ChatContent__secureForm--LAEtE","typingIndicator":"ChatContent__typingIndicator--Njccd","chatContentsmall":"ChatContent__chatContentsmall--2nRGa","chatContentmiddle":"ChatContent__chatContentmiddle--1j4wB","chatContentlarge":"ChatContent__chatContentlarge--u101R","notify":"ChatContent__notify--3IFoV","notifyG2M":"ChatContent__notifyG2M--2Kneq","notifyName":"ChatContent__notifyName--2eGs0","error":"ChatContent__error--31HZ8","errorContent":"ChatContent__errorContent--1sK1Q","action":"ChatContent__action--3JAej","avatarContainer":"ChatContent__avatarContainer--1iP34","visitorName":"ChatContent__visitorName--XjBhL","notice":"ChatContent__notice--1NI9M","incoming":"ChatContent__incoming--2VMSc","accept":"ChatContent__accept--2nUzs","refuse":"ChatContent__refuse--1fghu","chattingInfo":"ChatContent__chattingInfo--3Z8YS","videoContainer":"ChatContent__videoContainer--3rse-","localVideo":"ChatContent__localVideo--3H6-Z","remoteVideo":"ChatContent__remoteVideo--ZJRKg","videoChatting":"ChatContent__videoChatting--3JKjR"};

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAPFBMVEW0tLSxsbGjoqKsrKy/v7+op6fS0tL4+Pj8/Pzz8/Po6Oi7urvY19fu7u7////ExMTLy8u3t7fc3Nzh4eFYEd3tAAACPElEQVR4XuzNRxEAIBAEQX57gYx/r7igeEwb6PIJAAAAYI16mqybPPbMV+0t1lyXZAVhIGyiyEWIoO//rufPqUptzc4gs0n4XqAr0B0DWFOgH5S8GRSbPf1COpV1d09vSJpVn4XeE7Kabg70kaJjs3ZTD39q6BbqE6q1Livb6jJBeLVveooXddhOzylNTncLNMAlJ1yIsdzmncYoUo72NIhQpjKNEmWEPQ0jssuVxkkSwom+QKCLHPQNu22WmAK2K82AkKftfb3Rd2TbMDEJTNsW41edCaCPszU1s84SBp0ZoM8Ck4Xtl3qW8Aqz4gSTGgjCpJaJkz4SFy5/JNBXnG7WIMDCpu6KuM6ZBDKb2rZpNpwzZhZcLc9sTEWYcmjzzi0CHH684HXKwTw6XGSINMTGBZtm+Uacct0UHYKYMCR6SmjoFjmg0ENOxEUSiE+ThLBYKrPuusgCa6Ee4WRdOcBdPT831hXFnZ4+cDnWla75Q9HlQPaVOIDtvas6+VW69tqwe3TQGfBrZ3fVpoKrV6/WmF20Kw4CVw+yZ7hqu9JM0S/YvuSN67V8uj5u6hDuQ0H2CtQn5KbzS0Ifvyv9ktAnirmsRhqjnOaybHC1HzD6BlcJrq7Bt5v+hN9lg6tr8CYgywYX6Be6Bt89CRKuQye4fXxuAsHVMfiZSIlYR4Or6TIOri6/t9HasbLaVicyoAi8jEs97jYyAV6DRCa82msnE+pLyReZkMHU1ExaO6Y2tLVDE9yLMBrxX+4fqbwdFs0D+1MAAAAASUVORK5CYII="

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__ = __webpack_require__(996);




var Avatar = function Avatar(props) {
  var identityType = props.identityType;
  var avatarLink = __webpack_require__(911); // eslint-disable-line
  var tooltip = 'Visitor';
  if (props.isContactOrUserOpen) {
    switch (identityType) {
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["a" /* visitorIdentityTypeUser */]:
        {
          avatarLink = __webpack_require__(1372); // eslint-disable-line
          tooltip = 'User';
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["b" /* visitorIdentityTypeContact */]:
        {
          avatarLink = __webpack_require__(1371); // eslint-disable-line
          tooltip = 'Contact';
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["c" /* visitorIdentityTypeVisitor */]:
        {
          avatarLink = __webpack_require__(911); // eslint-disable-line
          tooltip = 'Visitor';
          break;
        }
      default:
        {
          avatarLink = __webpack_require__(911); // eslint-disable-line
          tooltip = '';
          break;
        }
    }
  }
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
    'data-tip': props.ifShowTooltip ? tooltip : '',
    'data-for': 'chatContainer',
    src: props.avatarLink ? props.avatarLink : avatarLink,
    alt: ''
  });
};

Avatar.defaultProps = {
  ifShowTooltip: true
};

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_parseInt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums_fontSize__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums_messageType__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_liveChatPermission__ = __webpack_require__(290);
/* harmony export (immutable) */ __webpack_exports__["f"] = mapToChatContentState;
/* harmony export (immutable) */ __webpack_exports__["g"] = mapToChatHeader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAgentOrDepartmentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ifChatIsAvalable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSendToIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return filterSendToIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isActiveStatus; });













var previousState = {};
function getMessages(state, chat) {
  var currentAgent = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["O" /* getCurrentAgent */](state);
  return chat.get('messages').map(function (msgs) {
    return msgs.map(function (msg, i) {
      var newMessage = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, msg, {
        id: msg.agentId + '_' + i,
        type: msg.agentId === currentAgent.id ? __WEBPACK_IMPORTED_MODULE_8__constants_enums_messageType__["c" /* agent */] : __WEBPACK_IMPORTED_MODULE_8__constants_enums_messageType__["a" /* visitor */],
        sender: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, msg.agentId).name
      });
      return newMessage;
    });
  });
}

function generateContentObject(state, obj, agentOrDpt) {
  var isAgent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(agentOrDpt)) {
    return previousState.content;
  }
  var key = isAgent ? agentOrDpt.id : -agentOrDpt.id;
  previousState.content = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, obj);
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(agentOrDpt)) {
    previousState.content.id = key;
    previousState.content.chatTo = agentOrDpt.name;
    var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_45" /* getAgentChat */](state, key);
    if (chat) {
      previousState.content.messages = getMessages(state, chat);
      previousState.content.scrollTop = chat.get('scrollTop');
      previousState.content.errorMessageForChat = chat.get('errorMessageForChat');
    }
  }
  return previousState.content;
}

function mapToChatContentState(state) {
  var contentState = {
    id: -1,
    selectedFontSize: __WEBPACK_IMPORTED_MODULE_6__constants_enums_fontSize__["a" /* middle */],
    chatTo: '',
    typingMessage: '',
    scrollTop: -1,
    messages: __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.List(),
    textDirectionIfRTL: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_78" /* textDirectionIfRTL */](state),
    errorMessageForChat: '',
    timezone: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_27" /* getTimezone */](state),
    timezoneOffset: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_28" /* getTimezoneOffset */](state)
  };
  var selectedInfo = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state).toString().split('_');
  if (selectedInfo.length > 1) {
    /* agentId */
    var selectedAgent = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default()(selectedInfo[1]));
    return generateContentObject(state, contentState, selectedAgent);
  } else if (selectedInfo[0] !== '0') {
    var selectedDpt = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["h" /* getDepartmentById */](state, Math.abs(selectedInfo[0]));
    return generateContentObject(state, contentState, selectedDpt, false);
  }
  /* all Available */
  return generateContentObject(state, contentState, {
    id: __WEBPACK_IMPORTED_MODULE_9__constants_enums__["m" /* allAvailableId */],
    name: 'All Available'
  }, false);
}

function getAgentAvatarUrl(state, agentId) {
  return __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_82" /* getAdminAgentAvatarUrl */](state) + '?siteId=' + __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["F" /* getSiteId */](state) + '&operatorId=' + agentId;
}

function mapToChatHeader(state) {
  var strId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state).toString();
  var ids = strId.split('_');
  var agentOrDepartment = ids.length > 1 ? __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default()(ids[1])) : __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["h" /* getDepartmentById */](state, Math.abs(ids[0]));
  if (!__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(previousState.header) && __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(agentOrDepartment) && (ids.length !== 1 || Math.abs(ids[0]) !== __WEBPACK_IMPORTED_MODULE_9__constants_enums__["m" /* allAvailableId */])) {
    var newState = { agent: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, previousState.header.agent) };
    newState.agent.ifDisableKickOff = true;
    newState.agent.ifDisableSetAway = true;
    return newState;
  }
  var intId = __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default()(ids.length > 1 ? ids[1] : ids[0]);
  previousState.header = {
    agent: {
      id: intId,
      ifCurrentAgent: intId === __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state),
      avatarLink: ids.length > 1 ? getAgentAvatarUrl(state, ids[1]) : '',
      name: __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(agentOrDepartment) ? 'All Available' : agentOrDepartment.name,
      ifDisableKickOff: !__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_31" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_10__constants_enums_liveChatPermission__["h" /* logOff */]) || ids.length === 1 || ids.length > 1 && __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, intId).status === __WEBPACK_IMPORTED_MODULE_9__constants_enums__["a" /* agentStatus */].offline,
      ifDisableSetAway: !__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_31" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_10__constants_enums_liveChatPermission__["i" /* setAway */]) || ids.length === 1 || ids.length > 1 && __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, intId).status !== __WEBPACK_IMPORTED_MODULE_9__constants_enums__["a" /* agentStatus */].online
    }
  };
  return previousState.header;
}

/* chat text editor */
var getAgentOrDepartmentId = function getAgentOrDepartmentId(state) {
  var selectedInfo = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_43" /* getSelectedIdForAgents */](state).toString().split('_');
  if (selectedInfo.length > 1) {
    return [true, __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default()(selectedInfo[1])];
  }
  return [false, __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default()(selectedInfo[0])];
};

var ifChatIsAvalable = function ifChatIsAvalable(state, isAgent, id) {
  if (isAgent) {
    if (!__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_31" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_10__constants_enums_liveChatPermission__["j" /* chatWithOtherAgents */])) return false;
    var agent = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, id);
    if (agent && id !== __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state)) {
      return agent.status !== __WEBPACK_IMPORTED_MODULE_9__constants_enums__["a" /* agentStatus */].offline;
    }
    return false;
  }
  return true;
};

/* get sendToIds */
var getSendToIds = function getSendToIds(state, isAgent, id) {
  if (isAgent) return [id];
  var currentAgentId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var ids = [];
  if (id === __WEBPACK_IMPORTED_MODULE_9__constants_enums__["m" /* allAvailableId */]) {
    __WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_36" /* getAgents */](state), function (agent) {
      if (currentAgentId !== agent.id && agent.status !== __WEBPACK_IMPORTED_MODULE_9__constants_enums__["a" /* agentStatus */].offline) {
        ids.push(agent.id);
      }
    });
    return ids;
  }
  var department = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["h" /* getDepartmentById */](state, id);
  if (!department) return [];
  __WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(department.agentIds, function (agentId) {
    var temp = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, agentId);
    if (!temp) return;
    if (currentAgentId !== temp.id && temp.status !== __WEBPACK_IMPORTED_MODULE_9__constants_enums__["a" /* agentStatus */].offline) {
      ids.push(agentId);
    }
  });
  return ids;
};

var filterSendToIds = function filterSendToIds(chatId, ids, isAgent) {
  if (!isAgent) {
    return ids.concat(chatId);
  }
  return ids;
};

var isActiveStatus = function isActiveStatus(state, isAgent, id) {
  var currId = Math.abs(id);
  var obj = isAgent ? __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_81" /* getAgentById */](state, currId) : __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["h" /* getDepartmentById */](state, currId);
  if (__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(obj) && currId === __WEBPACK_IMPORTED_MODULE_9__constants_enums__["m" /* allAvailableId */]) return true;
  return !__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default()(obj);
};

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uid;
var now = +new Date();
var index = 0;

function uid() {
  return "rc-upload-" + now + "-" + ++index;
}
module.exports = exports['default'];

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__ = __webpack_require__(327);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return appendOwnMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setErrorMessageForAgentChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cancelUpload; });


var updateContent = function updateContent(id, editorState) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["a" /* updateContent */],
    payload: editorState,
    meta: id
  };
};
var appendOwnMessage = function appendOwnMessage(appendIds, line) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["g" /* appendOwnMessage */],
    payload: line,
    meta: appendIds
  };
};
var updateScrollTop = function updateScrollTop(id, scrollTop) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["b" /* updateScrollTop */],
    payload: scrollTop,
    meta: id
  };
};
var appendFile = function appendFile(appendIds, url, fileName, isImage) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["h" /* appendFile */],
    payload: { fileName: fileName, url: url, isImage: isImage },
    meta: appendIds
  };
};
var setErrorMessageForAgentChat = function setErrorMessageForAgentChat(id, errorMsg) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["c" /* setErrorMessageForAgentChat */],
    payload: errorMsg,
    meta: id
  };
};
var startUpload = function startUpload(chatId, filename, guid) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["d" /* startUpload */],
    payload: {
      filename: filename,
      guid: guid,
      percentage: 0
    },
    meta: chatId
  };
};
var uploadFile = function uploadFile(chatId, percentage, filename, guid) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["e" /* uploadFile */],
    payload: {
      filename: filename,
      guid: guid,
      percentage: percentage
    },
    meta: chatId
  };
};
var cancelUpload = function cancelUpload(chatId, filename, guid) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_agentChat__["f" /* cancelUpload */],
    payload: { filename: filename, guid: guid },
    meta: chatId
  };
};

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatContent_css__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icons_Avatar__ = __webpack_require__(923);
















var statusText = function statusText(status) {
  switch (status) {
    case __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]:
      return 'Audio Chat';
    case __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */]:
      return 'Audio Chat...';
    case __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]:
      return 'Video Chat';
    case __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["f" /* agentRequestVideoChat */]:
      return 'Video Chat...';
    case __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */]:
      return 'Audio Chat';
    default:
      return '';
  }
};

var showAcceptButton = function showAcceptButton(status) {
  return status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */];
};

var showRefuseButton = function showRefuseButton(status) {
  return status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["f" /* agentRequestVideoChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */];
};

var isVideoChatting = function isVideoChatting(status) {
  return status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */];
};
var isAudioChatting = function isAudioChatting(status) {
  return status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */];
};
var isChatting = function isChatting(status) {
  return status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */];
};
var audioVideoIcon = function audioVideoIcon(status) {
  if (status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]) {
    return __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].requestAudioChat;
  }
  return __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].requestVideoChat;
};

var diffTime = function diffTime(a, b) {
  var a1 = a.getTime();
  var b1 = b.getTime();
  if (a1 < b1) {
    return '';
  }

  var d = a1 - b1;
  var dd = Math.floor(d / (24 * 3600 * 1000));
  var hms = d - dd * 24 * 3600 * 1000;

  return '' + (dd > 0 ? dd + '.' : '') + __WEBPACK_IMPORTED_MODULE_7_moment__["default"].utc(hms).format(hms < 3600 * 1000 && dd <= 0 ? 'mm:ss' : 'HH:mm:ss');
};

var AudioVideoChatContent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AudioVideoChatContent, _React$Component);

  function AudioVideoChatContent(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AudioVideoChatContent);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AudioVideoChatContent.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AudioVideoChatContent)).call(this, props));

    if (isChatting(props.audioVideoChatStatus)) {
      _this.state = { timespan: diffTime(new Date(), props.audioVideoChatStartTime) };
    } else {
      _this.state = { timespan: '' };
    }
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AudioVideoChatContent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.startClock();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.insertVideoObject(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        timespan: diffTime(new Date(), nextProps.audioVideoChatStartTime)
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.insertVideoObject(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.clock);
    }
  }, {
    key: 'insertVideoObject',
    value: function insertVideoObject(props) {
      var p2pChat = props.p2pChat;
      if (p2pChat != null && isVideoChatting(props.audioVideoChatStatus) && this.videoContainer) {
        var localVideo = p2pChat.getLocalVideo();
        if (localVideo) {
          localVideo.className = __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.localVideo;
          if (document.getElementById('localVideo') == null) {
            localVideo.id = 'localVideo';
            this.videoContainer.appendChild(localVideo);
          }
          localVideo.play();
        }

        var remoteVideo = p2pChat.getRemoteVideo();
        if (remoteVideo) {
          remoteVideo.className = __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.remoteVideo;
          if (document.getElementById('remoteVideo') == null) {
            remoteVideo.id = 'remoteVideo';
            this.videoContainer.appendChild(remoteVideo);
          }
          remoteVideo.play();
        }
      }
    }
  }, {
    key: 'startClock',
    value: function startClock() {
      var _this2 = this;

      this.clock = setInterval(function () {
        return _this2.setState({
          timespan: diffTime(new Date(), _this2.props.audioVideoChatStartTime)
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var videoChatting = isVideoChatting(props.audioVideoChatStatus);
      var audioChatting = isAudioChatting(props.audioVideoChatStatus);
      // console.log('AudioVideoChatContent:', props);
      // console.log('videoChatting:', videoChatting);
      // console.log('statusText', statusText(props.audioVideoChatStatus));
      // console.log('icon:', audioVideoIcon(props.audioVideoChatStatus));
      // console.log('showAcceptButton:', showAcceptButton(props.audioVideoChatStatus));
      // console.log('showRefuseButton:', showRefuseButton(props.audioVideoChatStatus));
      var timespan = this.state.timespan;
      var incoming = showAcceptButton(props.audioVideoChatStatus);
      // console.log('p2pChat:', p2pChat);
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.chatVideoContainer, videoChatting && __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.videoChatting)
      }, void 0, videoChatting && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.videoContainer,
        ref: function ref(element) {
          _this3.videoContainer = element;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.chatVideoItem
      }, void 0, videoChatting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.chattingInfo
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.time
      }, void 0, timespan.toString())), !videoChatting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.avatarContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icons_Avatar__["a" /* default */], {
        isContactOrUserOpen: props.isContactOrUserOpen,
        avatarLink: props.avatarLink,
        identityType: props.identityType,
        ifShowTooltip: false
      })), !videoChatting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.visitorName
      }, void 0, props.chatTo), !videoChatting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.notice
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: audioVideoIcon(props.audioVideoChatStatus)
      }), '' + statusText(props.audioVideoChatStatus), audioChatting ? ' ' + timespan : ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.action, incoming ? __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.incoming : null)
      }, void 0, incoming && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.accept,
        onClick: props.onAcceptClick,
        type: 'noborder'
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].acceptChat
      })), showRefuseButton(props.audioVideoChatStatus) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default.a.refuse,
        type: 'noborder',
        onClick: props.onRefuseClick
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].refuseChat
      })))));
    }
  }]);

  return AudioVideoChatContent;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AudioVideoChatContent);

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_immutable__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_constants_enums_fontSize__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_src_components_Button_Button__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ChatContent_css__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Link_Link__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ChatContentMsg__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__AudioVideoChatContent__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Resizer_ResizeContainer__ = __webpack_require__(693);


























var getFontSizeClass = function getFontSizeClass(type) {
  var _fontSize$small$fontS;

  return (_fontSize$small$fontS = {}, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_13_src_constants_enums_fontSize__["b" /* small */], __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContentsmall), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_13_src_constants_enums_fontSize__["a" /* middle */], __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContentmiddle), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_13_src_constants_enums_fontSize__["c" /* large */], __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContentlarge), _fontSize$small$fontS)[type];
};

var getVisitorForNotify = function getVisitorForNotify(messages) {
  var preVisitor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var tempArray = messages.last();
  if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isArray___default()(tempArray) || tempArray.length === 0) return '';
  var sender = tempArray[0].sender;
  if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default()(sender)) {
    return sender;
  }
  return preVisitor;
};
var getMessageForNotify = function getMessageForNotify(messages) {
  var preMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var tempArray = messages.last();
  if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isArray___default()(tempArray) || tempArray.length === 0) return '';
  var sender = tempArray[0].sender;
  if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default()(sender)) {
    return tempArray[tempArray.length - 1].message || tempArray[tempArray.length - 1].fileName;
  }
  return preMessage;
};

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14_src_components_Button_Button__["a" /* default */], {
  type: 'noborder'
}, void 0, 'Not Now');

var ChatContent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatContent, _React$Component);

  function ChatContent(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatContent);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatContent.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatContent)).call(this, props));

    _this.update = _this.update.bind(_this);
    _this.selectChatMessage = _this.selectChatMessage.bind(_this);
    _this.closeGotoMeetingNotify = _this.closeGotoMeetingNotify.bind(_this);
    _this.scrollBottom = _this.scrollBottom.bind(_this);
    _this.getScrollHeight = _this.getScrollHeight.bind(_this);
    _this.canShowNotify = false;
    _this.scrollTop = props.scrollTop;
    _this.timer = null;
    _this.ifScrollBottom = false;
    _this.notifyVisitor = getVisitorForNotify(props.messages);
    _this.notifyMessage = getMessageForNotify(props.messages);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.parent.scrollTop = this.getScrollHeight();
      this.parent.addEventListener('scroll', this.update, false);
      document.body.addEventListener('keydown', this.selectChatMessage, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var propsMessage = nextProps.messages;
      this.notifyVisitor = getVisitorForNotify(propsMessage, this.notifyVisitor);
      this.notifyMessage = getMessageForNotify(propsMessage, this.notifyMessage);
      this.scrollTop = nextProps.scrollTop;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.id !== this.props.id || nextProps.selectedFontSize !== this.props.selectedFontSize || nextProps.typingMessage !== this.props.typingMessage || nextProps.textDirectionIfRTL !== this.props.textDirectionIfRTL || nextProps.errorMessageForChat !== this.props.errorMessageForChat || nextProps.g2mStartUrl !== this.props.g2mStartUrl || nextProps.ifShowNotify !== this.props.ifShowNotify || nextProps.audioVideoChatWidth !== this.props.audioVideoChatWidth || nextProps.audioVideoChatStatus !== this.props.audioVideoChatStatus || (nextProps.audioVideoChatStartTime && nextProps.audioVideoChatStartTime.getTime()) !== (this.props.audioVideoChatStartTime && this.props.audioVideoChatStartTime.getTime()) || nextProps.ifShowGotoMeetingNotify !== this.props.ifShowGotoMeetingNotify
      /**
       * @todo
       * following line is problematic and slow. Should use strict equality instead:
       *   this.props.messages !== nextProps.messages;
       * however, not sure if this will introduce new bugs, need investigate.
       */
      || !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.messages.toJS(), nextProps.messages.toJS());
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var propsMessage = this.props.messages;
      if (propsMessage !== prevProps.messages || this.props.typingMessage !== prevProps.typingMessage) {
        this.parent.scrollTop = this.getScrollHeight();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.parent.removeEventListener('scroll', this.update);
      document.body.removeEventListener('keydown', this.selectChatMessage);
    }
  }, {
    key: 'getScrollHeight',
    value: function getScrollHeight() {
      return this.scrollTop === -1 ? this.parent.scrollHeight : this.scrollTop;
    }
  }, {
    key: 'update',
    value: function update(event) {
      var _this2 = this;

      this.scrollTop = event.target.scrollTop;
      var clientHeight = event.target.clientHeight;
      var messageScrollHeight = event.target.scrollHeight;
      this.canShowNotify = this.scrollTop + clientHeight < messageScrollHeight - 20;
      if (!this.canShowNotify && this.props.ifShowNotify) {
        this.props.updateIfShowNotify(false);
      }
      if (!this.canShowNotify) {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.ifScrollBottom = true;
        this.props.onScroll(this.props.id, -1);
      } else {
        this.ifScrollBottom = false;
      }
      if (this.props.onScroll && !this.ifScrollBottom) {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(function () {
          _this2.props.onScroll(_this2.props.id, _this2.scrollTop);
        }, 500);
      }
    }
  }, {
    key: 'selectChatMessage',
    value: function selectChatMessage(e) {
      if (e.ctrlKey && (e.keyCode === 65 || e.keyCode === 97) && (e.target === document.body || e.target === this.parent)) {
        if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(this.parent);
          range.select();
        } else if (window.getSelection) {
          var windowSelection = window.getSelection();
          if (windowSelection.rangeCount > 0) {
            windowSelection.removeAllRanges();
          }
          var _range = document.createRange();
          _range.selectNode(this.parent);
          windowSelection.addRange(_range);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'closeGotoMeetingNotify',
    value: function closeGotoMeetingNotify() {
      this.props.clearG2mStartUrl();
    }
  }, {
    key: 'scrollBottom',
    value: function scrollBottom() {
      this.parent.scrollTop = this.container.getBoundingClientRect().height;
      this.ifScrollBottom = true;
      this.props.onScroll(this.props.id, -1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var chatContentContainer = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContentContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(__WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContent, getFontSizeClass(props.selectedFontSize), props.textDirectionIfRTL ? __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.directionRTL : '', 'contentMenu'),
          ref: function ref(element) {
            _this3.parent = element;
          }
        },
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'div',
          { ref: function ref(element) {
              _this3.container = element;
            } },
          props.messages.map(function (message, i) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__ChatContentMsg__["a" /* default */], {
              messages: message,
              getSecureFormContent: _this3.props.getSecureFormContent,
              timezone: _this3.props.timezone,
              timezoneOffset: _this3.props.timezoneOffset
            }, i);
          })
        ),
        props.typingMessage !== '' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.typingIndicator
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.chatTo, ' is typing: '), props.typingMessage, '...', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_18__constants_enums__["b" /* icons */].typing,
          size: 13
        })) : null
      ), this.props.ifShowNotify && this.props.scrollTop !== -1 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.notify,
        onClick: this.scrollBottom
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.notifyName
      }, void 0, this.notifyVisitor, ':'), ' ', this.notifyMessage), props.g2mStartUrl && this.props.ifShowGotoMeetingNotify ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(__WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.notify, __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.notifyG2M)
      }, void 0, 'You have created a new meeting.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.action,
        onClick: this.closeGotoMeetingNotify
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Link_Link__["a" /* default */], {
        href: props.g2mStartUrl,
        newWindow: true
      }, void 0, 'Start Meeting Immediately'), _ref)) : '', props.errorMessageForChat ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.error
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.errorContent
      }, void 0, props.errorMessageForChat), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14_src_components_Button_Button__["a" /* default */], {
        type: 'noborder',
        onClick: props.hideErrorMessage
      }, void 0, 'Dismiss')) : '');
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_15__ChatContent_css___default.a.chatContainer
      }, void 0, props.audioVideoChatStatus && props.audioVideoChatStatus !== __WEBPACK_IMPORTED_MODULE_21__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */] ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_22__Resizer_ResizeContainer__["default"], {
        resizerPosition: 'left',
        width: props.audioVideoChatWidth,
        left_minWidth: 110,
        right_minWidth: 110,
        onStopResize: props.onAudioAndVideoStopResize
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_20__AudioVideoChatContent__["a" /* default */], {
        audioVideoChatStatus: props.audioVideoChatStatus,
        chatTo: props.chatTo,
        avatarLink: props.visitorAvatar,
        isContactOrUserOpen: props.isContactOrUserOpen,
        identityType: props.identityType,
        onAcceptClick: this.props.onAudioVideoChatAccept,
        onRefuseClick: this.props.onAudioVideoChatRefuse,
        p2pChat: props.p2pChat,
        audioVideoChatStartTime: props.audioVideoChatStartTime
      }), chatContentContainer) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, chatContentContainer));
    }
  }]);

  return ChatContent;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatContent);

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_utils_time__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_str__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatContent_css__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);

















var _ref = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('i', {}, void 0, '(Translation)');

var _ref2 = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('br', {});

var _ref3 = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('i', {}, void 0, '(Original)');

var text = function text(message) {
  if (message.translatedMessage && message.translatedMessage !== '') {
    var translateMsg = '';
    var orignalMsg = '';
    translateMsg = __WEBPACK_IMPORTED_MODULE_11__utils_str__["e" /* handleLinks */](message.translatedMessage, function (content, i) {
      var link = content.indexOf('www.') === 0 ? 'http://' + content : content;
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__["a" /* default */], {
        href: link,
        newWindow: true
      }, i, content);
    });
    orignalMsg = __WEBPACK_IMPORTED_MODULE_11__utils_str__["e" /* handleLinks */](message.message, function (content, i) {
      var link = content.indexOf('www.') === 0 ? 'http://' + content : content;
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__["a" /* default */], {
        href: link,
        newWindow: true
      }, i, content);
    });
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('p', {}, message.id, translateMsg, ' ', _ref, _ref2, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.translationMsg
    }, void 0, orignalMsg), ' ', _ref3);
    // buildedMessage = `${translateMsg} <i>(Translation)</i>\r\n<i>${orignalMsg} (Original)</i>`;
  }
  return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('p', {}, message.id, __WEBPACK_IMPORTED_MODULE_11__utils_str__["e" /* handleLinks */](message.message, function (content, i) {
    var link = content.indexOf('www.') === 0 ? 'http://' + content : content;
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__["a" /* default */], {
      href: link,
      newWindow: true
    }, i, content);
  }));
};
var image = function image(message) {
  return message.url ? __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, message.id, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__["a" /* default */], {
    href: message.url,
    newWindow: true
  }, message.id, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('img', {
    src: message.url,
    alt: message.filename,
    style: { maxWidth: 400, maxHeight: 400 }
  }))) : null;
};
var file = function file(message) {
  return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, message.id, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.attachment,
    href: message.url,
    newWindow: true
  }, message.id, message.fileName));
};

var getMessageComponent = function getMessageComponent(message) {
  if (message.message) return text(message);
  if (message.url) {
    if (message.isImage) return image(message);
    return file(message);
  }
  return null;
};

var ChatContentMsg = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ChatContentMsg, _React$Component);

  function ChatContentMsg() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ChatContentMsg);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatContentMsg.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ChatContentMsg)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ChatContentMsg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var firstMessageObj = this.props.messages[0];
      if (firstMessageObj.type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__["d" /* secureForm */] && firstMessageObj.message.status === __WEBPACK_IMPORTED_MODULE_14__constants_enums__["n" /* secureFormStatus */].init) {
        this.props.getSecureFormContent(firstMessageObj.message.token, firstMessageObj.message.rsaKey);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.messages !== this.props.messages;
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.props.messages;
      var name = messages[0].sender;
      var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_src_utils_time__["f" /* dateToString */])(messages[0].time, 'HH:mm', this.props.timezone, this.props.timezoneOffset);
      var type = messages[0].type;
      if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__["b" /* system */]) {
        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.systemMeg)
        }, void 0, messages[0].message);
      }
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.chatContentInfo, type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__["c" /* agent */] ? __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.operator : __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.visitor)
      }, void 0, type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__["d" /* secureForm */] ? __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.secureForm
      }, void 0, messages[0].message.status === __WEBPACK_IMPORTED_MODULE_14__constants_enums__["n" /* secureFormStatus */].downloading || messages[0].message.status === __WEBPACK_IMPORTED_MODULE_14__constants_enums__["n" /* secureFormStatus */].init ? __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].loading,
        size: 'small'
      }) : messages[0].message.content.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, void 0, item.name, ': ', item.value);
      })) : __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.name
      }, void 0, name + ': '), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.time
      }, void 0, time)), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default.a.chatMeg
      }, void 0, messages.map(function (message) {
        return getMessageComponent(message);
      }))));
    }
  }]);

  return ChatContentMsg;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatContentMsg);

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css__);




var FileUploadProgress = function FileUploadProgress(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default.a.uploadProgressContainer
  }, void 0, props.fileUploadProgressNumber > 0 && props.fileUploadProgressNumber < 100 ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default.a.uploadProgress
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default.a.uploadFileName
  }, void 0, props.fileName), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default.a.uploadProgressPercent
  }, void 0, props.fileUploadProgressNumber, '%'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('button', {
    className: __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default.a.cancelUpload,
    onClick: function onClick() {
      return props.handleAbortUpload(props.file, props.fileName);
    }
  }, void 0, '\xD7')) : '');
};

/* harmony default export */ __webpack_exports__["a"] = (FileUploadProgress);

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_noop__ = __webpack_require__(1355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_upload__ = __webpack_require__(1361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FileUploadProgress_FileUploadProgress__ = __webpack_require__(989);



















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["e" /* shouldComponentUpdateGen */])('SendFile', ['disabled', 'files']);

var emptyConfig = { filename: '', guid: 0, percentage: 0 };
var getFile = function getFile(files) {
  var last = files[files.length - 1];
  if (!last || last.percentage >= 100) return emptyConfig;
  return last;
};

var SendFile = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SendFile, _Component);

  function SendFile(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SendFile);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendFile.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SendFile)).call(this, props));

    _this.upload = null;
    _this.file = null;
    _this.guid = 0;

    _this.showErrorMessage = props.showErrorMessage.bind(null, props.chatId);
    _this.beforeUpload = _this.beforeUpload.bind(_this);
    _this.onProgress = _this.onProgress.bind(_this);
    _this.onSuccess = _this.onSuccess.bind(_this);
    _this.onError = _this.onError.bind(_this);
    _this.getDownloadUrl = _this.getDownloadUrl.bind(_this);
    _this.handleAbortUpload = _this.handleAbortUpload.bind(_this);

    _this.uploadConfig = {
      action: props.siteInfo.sendFileUploadUrl,
      multiple: false,
      disabled: props.disabled,
      beforeUpload: _this.beforeUpload,
      onStart: __WEBPACK_IMPORTED_MODULE_7_lodash_noop___default.a,
      onSuccess: _this.onSuccess,
      onProgress: _this.onProgress,
      onError: _this.onError
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(SendFile, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.uploadConfig.action = nextProps.siteInfo.sendFileUploadUrl;
      this.uploadConfig.disabled = nextProps.disabled;
      if (nextProps.chatId !== this.props.chatId) {
        this.showErrorMessage = this.props.showErrorMessage.bind(null, nextProps.chatId);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'onProgress',
    value: function onProgress(step, file) {
      this.props.onProgress(this.props.chatId, step.percent === 100 ? 100 : parseFloat(step.percent.toFixed(1)), file.name, this.guid);
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(rsp, file) {
      this.file = null;
      if (rsp && (rsp === 'success' || rsp.isSuccess)) {
        this.props.onSuccess(this.props.chatId, file.name, this.guid, this.props.siteInfo, this.getDownloadUrl(rsp.guid, file.name), rsp.guid);
        return;
      }
      var errorMsg = rsp.errorMessage || rsp;
      this.showErrorMessage('Error sending file: ' + errorMsg);
      this.props.onCancel(this.props.chatId, file.name, this.guid);
    }
  }, {
    key: 'onError',
    value: function onError(e, file) {
      // todo
      this.file = null;
      this.props.onCancel(file.name, this.guid);
    }
  }, {
    key: 'getDownloadUrl',
    value: function getDownloadUrl(guid, name) {
      if (!this.props.siteInfo) return '';
      var _props$siteInfo = this.props.siteInfo,
          downloadUrl = _props$siteInfo.downloadUrl,
          sessionId = _props$siteInfo.sessionId,
          siteId = _props$siteInfo.siteId,
          privateMessage = _props$siteInfo.privateMessage;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["m" /* formatAgentChatDownloadUrl */])(downloadUrl, sessionId, siteId, privateMessage, guid, name);
    }
  }, {
    key: 'beforeUpload',
    value: function beforeUpload(file) {
      var siteInfo = this.props.siteInfo;
      if (file.size <= siteInfo.maxFileSize * 1024 * 1024) {
        if (this.props.files.length >= siteInfo.maxFileNum) {
          this.showErrorMessage('Error sending file: The max number of files you can send/receive during this chat session is ' + siteInfo.maxFileNum + '.');
          return false;
        }
      } else {
        this.showErrorMessage('Error sending file: The max file size is ' + siteInfo.maxFileSize + ' MB.');
        return false;
      }
      var shouldUpload = this.props.beforeUpload ? this.props.beforeUpload(file) : true;
      if (shouldUpload) {
        this.guid = Date.now();
        this.props.onStart(this.props.chatId, file.name, this.guid);
        this.file = file;
      }
      return shouldUpload;
    }
  }, {
    key: 'handleAbortUpload',
    value: function handleAbortUpload(file, filename) {
      if (this.upload && this.file === file) this.upload.abort(file);
      this.file = null;
      this.props.onCancel(this.props.chatId, filename, this.guid);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.uploadConfig.disabled = this.props.disabled;

      var _getFile = getFile(this.props.files),
          filename = _getFile.filename,
          percentage = _getFile.percentage,
          guid = _getFile.guid;

      this.guid = guid;
      if (!this.props.disabled) {
        if (percentage !== 100 && percentage !== 0) {
          this.uploadConfig.disabled = true;
        } else {
          this.uploadConfig.disabled = false;
        }
      }
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__FileUploadProgress_FileUploadProgress__["a" /* default */], {
        file: this.file,
        fileName: filename,
        fileUploadProgressNumber: percentage,
        handleAbortUpload: this.handleAbortUpload
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fileupload, this.props.className),
        'data-tip': 'Send a file from your local machine.',
        'data-for': 'chatContainer'
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10_rc_upload___default.a,
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          ref: function ref(element) {
            _this2.upload = element;
          }
        }, this.uploadConfig),
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].sendFile
        })
      )));
    }
  }]);

  return SendFile;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SendFile);

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export visitorIdentityTypeNone */
/* unused harmony export visitorIdentityTypeOperator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return visitorIdentityTypeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return visitorIdentityTypeContact; });
/* unused harmony export visitorIdentityTypeEmailAddress */
/* unused harmony export visitorIdentityTypeCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return visitorIdentityTypeVisitor; });
var visitorIdentityTypeNone = 0;
var visitorIdentityTypeOperator = 1;
var visitorIdentityTypeUser = 2;
var visitorIdentityTypeContact = 3;
var visitorIdentityTypeEmailAddress = 4;
var visitorIdentityTypeCookie = 5;
var visitorIdentityTypeVisitor = 6;

/***/ })

});
//# sourceMappingURL=http://localhost:8000/agent-chat.2b93b.js.map