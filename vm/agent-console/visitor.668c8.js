webpackJsonp([0],Array(74).concat([
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(555);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ModalClass":"Modal__ModalClass--1VYu4","close":"Modal__close--1efW7","OverlayClass":"Modal__OverlayClass--2EUvY","action":"Modal__action--2Jb-1","agentContainer":"Modal__agentContainer--1pGPK","selectDepartment":"Modal__selectDepartment--2y0Vy","transferChoose":"Modal__transferChoose--1o7Y3","transferButton":"Modal__transferButton--1uYSp","transferName":"Modal__transferName--1IL6S","availableList":"Modal__availableList--3y0xo","active":"Modal__active--CbzQD","description":"Modal__description--2xy0Y","modalTransfer":"Modal__modalTransfer--J3gLz","modalSendTranscript":"Modal__modalSendTranscript--1gHG4","formTranscriptLine":"Modal__formTranscriptLine--3Nc8D","input":"Modal__input--3A-ea","bodyLayout":"Modal__bodyLayout--1XPOl","bodyContainer":"Modal__bodyContainer--2XjFO","formTranscriptAdditionalInfo":"Modal__formTranscriptAdditionalInfo--sQbLL","additionalInfoContent":"Modal__additionalInfoContent--1JM7C","attachmentsContainer":"Modal__attachmentsContainer--1V5CE","RichEditor-hidePlaceholder":"Modal__RichEditor-hidePlaceholder--C_hTy","editorDisable":"Modal__editorDisable--1gtPW","transcriptAdditionInfo":"Modal__transcriptAdditionInfo--2Tzg-","forceLoginModal":"Modal__forceLoginModal--2vzeV","loginModal":"Modal__loginModal--2YLgt","siteSelectModal":"Modal__siteSelectModal--VgZkZ","siteList":"Modal__siteList--2N9Kl","siteId":"Modal__siteId--2Igh_","lastLogin":"Modal__lastLogin--1WWyq","accountCreate":"Modal__accountCreate--26KsB","ModalLoading":"Modal__ModalLoading--1idhu","activateIPButton":"Modal__activateIPButton--Tpquh","okButton":"Modal__okButton--1Xr3o","trialExpiredModal":"Modal__trialExpiredModal--2WX1Y","siteDunningModal":"Modal__siteDunningModal--ZvxKI","expiredText":"Modal__expiredText--3o2KJ","expireDays":"Modal__expireDays--gl1le","trialExpiredButton":"Modal__trialExpiredButton--JVClr","expiredImageWrapper":"Modal__expiredImageWrapper--2wCZv","contextWrapper":"Modal__contextWrapper--3fvoe","dunningImageWrapper":"Modal__dunningImageWrapper--1JRnK","dunningOKButton":"Modal__dunningOKButton--5luvr","dashboard":"Modal__dashboard--1Engt","dashboardoverLay":"Modal__dashboardoverLay--b5EU3","checkboxPanel":"Modal__checkboxPanel--2XG3t","buttonsPanel":"Modal__buttonsPanel--1sNE2","modalAttachtTicket":"Modal__modalAttachtTicket--iY9fZ","fadeIn":"Modal__fadeIn--2YCpT","fadeScale":"Modal__fadeScale--qH2Dg","fadeOut":"Modal__fadeOut--dt2uL","fadeShrink":"Modal__fadeShrink--1ybUr","dropdown":"Modal__dropdown--x-bj5","errorContainer":"Modal__errorContainer--1DusD","successContainer":"Modal__successContainer--1WqmL","message":"Modal__message--3H4-2","standbyNotice":"Modal__standbyNotice--2Ybm_","leavechataftertransfer":"Modal__leavechataftertransfer--189xi"};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_modal__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modal_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);


















/**
 * @todo if props.ifOpen is false, no need to render ReactModal
 * Currently, this optimization has been done on each position where Modal is rendered.
 * Optimization can also be made here.
 *
 * It will causing a bit more render works, but made optimization much easier.
 * Should test the tradeoffs later, which solution is better.
 */

var Modal = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Modal, _React$Component);

  function Modal(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Modal);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Modal.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Modal)).call(this, props));

    _this.state = {
      isOpen: true
    };
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Modal, [{
    key: 'closeModal',
    value: function closeModal() {
      var _this2 = this;

      this.setState({
        isOpen: false
      });
      setTimeout(function () {
        return _this2.props.closeModal();
      }, 300);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_react_modal___default.a, {
        isOpen: this.state.isOpen,
        onRequestClose: this.closeModal,
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Modal_css___default.a.ModalClass, props.className),
        overlayClassName: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Modal_css___default.a.OverlayClass, props.overlayClassName),
        shouldCloseOnOverlayClick: true,
        closeTimeoutMS: 300
      }, void 0, props.ifShowCloseIcon && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('button', {
        className: __WEBPACK_IMPORTED_MODULE_11__Modal_css___default.a.close,
        onClick: this.closeModal
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].close
      })), props.title ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h3', {}, void 0, props.title) : '', props.children, props.actions ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Modal_css___default.a.action, props.actions.className)
      }, void 0, props.actions.okProps && (__WEBPACK_IMPORTED_MODULE_7_lodash_isArray___default()(props.actions.okProps) ? __WEBPACK_IMPORTED_MODULE_6_lodash_map___default()(props.actions.okProps, function (okPropsValue, key) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
          text: okPropsValue.text,
          type: okPropsValue.type ? okPropsValue.type : 'primary',
          disabled: okPropsValue.disabled,
          onClick: okPropsValue.eventClick,
          className: okPropsValue.className,
          loading: okPropsValue.loading
        }, key);
      }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
        text: props.actions.okProps.text,
        type: 'primary',
        disabled: props.actions.okProps.disabled,
        onClick: props.actions.okProps.eventClick,
        className: props.actions.okProps.className,
        loading: props.actions.okProps.loading
      })), props.actions.cancelProps ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
        text: props.actions.cancelProps.text,
        type: 'default',
        onClick: this.closeModal
      }) : '') : ''));
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* const Modal = props => (
  <div>
    <ReactModal
      isOpen={props.ifOpen}
      onRequestClose={props.closeModal}
      className={classnames(ModalStyle.ModalClass, props.className)}
      overlayClassName={classnames(ModalStyle.OverlayClass, props.overlayClassName)}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      closeTimeoutMS={300}
    >
      { props.ifShowCloseIcon &&
        <button
          className={ModalStyle.close}
          onClick={props.closeModal}
        >
          <Icon type={icons.close} />
        </button>
      }
      {props.children}
    </ReactModal>
  </div>
);*/

Modal.defaultProps = {
  shouldCloseOnOverlayClick: true,
  ifShowCloseIcon: true
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(728);

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NoVisitor__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VisitorList__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SplitterVisitorDetailsTab__ = __webpack_require__(954);







var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__VisitorList__["a" /* default */], {});

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__NoVisitor__["a" /* default */], {});

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__SplitterVisitorDetailsTab__["a" /* default */], {});

var SplitterVisitorList = function SplitterVisitorList(_ref) {
  var hasVisitors = _ref.hasVisitors,
      visitorListShowDetails = _ref.visitorListShowDetails,
      onHideVisitorListDetailsClick = _ref.onHideVisitorListDetailsClick;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css___default.a.layoutContent,
    id: 'visitors',
    style: { overflow: 'hidden' }
  }, void 0, hasVisitors ? _ref2 : _ref3, visitorListShowDetails && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css___default.a.visitorDetailsContainer
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    onClick: onHideVisitorListDetailsClick,
    className: __WEBPACK_IMPORTED_MODULE_2__components_CommonResources_common_css___default.a.close
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: '#fff'
    }
  }, void 0, _ref4)));
};

/* harmony default export */ __webpack_exports__["default"] = (SplitterVisitorList);

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onDetailsTabSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return onDetailsWidthChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onPreChatEditIconClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onPreChatCancelClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleSubmitpreChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleSubmitCustomFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleSubmitComment; });
/* unused harmony export initPreChatForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onCustomFieldEditIconClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onCustomFieldCancelClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resetForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onCurrentBrowsingIconClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onCommentEditIconClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onCommentCancelClick; });
/* unused harmony export initCommentForm */



var onDetailsTabSelect = function onDetailsTabSelect(tab) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["a" /* detailsTabSelect */],
    payload: {
      visitorDetailsTabSelected: tab
    }
  };
};

var onDetailsWidthChanged = function onDetailsWidthChanged(width) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["b" /* chatDetailsWidthChanged */],
    payload: {
      chatDetailsWidth: width
    }
  };
};

var onPreChatEditIconClick = function onPreChatEditIconClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifpreChatEdit: true
    }
  };
};

var onPreChatCancelClick = function onPreChatCancelClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifpreChatEdit: false
    }
  };
};

var handleSubmitpreChat = function handleSubmitpreChat() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifpreChatLoading: true
    }
  };
};

var handleSubmitCustomFields = function handleSubmitCustomFields() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifcustomFieldLoading: true
    }
  };
};

var handleSubmitComment = function handleSubmitComment() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      isNoteLoading: true
    }
  };
};

var initPreChatForm = function initPreChatForm(initialValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_form__["initialize"])('infoPrechat', initialValues);
};

var onCustomFieldEditIconClick = function onCustomFieldEditIconClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifcustomFieldEdit: true
    }
  };
};

var onCustomFieldCancelClick = function onCustomFieldCancelClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifcustomFieldEdit: false
    }
  };
};

var resetForms = function resetForms() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      ifpreChatEdit: false,
      ifcustomFieldEdit: false,
      isNoteEdit: false,
      ifpreChatLoading: false,
      ifcustomFieldLoading: false,
      isNoteLoading: false
    }
  };
};

var onCurrentBrowsingIconClick = function onCurrentBrowsingIconClick(flag) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      isCurrentBrowsingShowTitle: flag === 0 || flag === 2,
      isCurrentBrowsingShowUrl: flag === 1 || flag === 2
    }
  };
};

var onCommentEditIconClick = function onCommentEditIconClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      isNoteEdit: true
    }
  };
};

var onCommentCancelClick = function onCommentCancelClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["c" /* infoState */],
    payload: {
      isNoteEdit: false
    }
  };
};

var initCommentForm = function initCommentForm(initialValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_form__["initialize"])('AgentComment', initialValues);
};

/***/ }),
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(74);
var normalizeHeaderName = __webpack_require__(742);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(551);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(551);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createConfigAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return togglePin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setSelectedViaVisitorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return wrapUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return chatItemWidthChanged; });


var createConfigAction = function createConfigAction(code, type) {
  return {
    type: type,
    payload: code
  };
};
var togglePin = function togglePin(chatId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__["b" /* togglePin */],
    payload: chatId
  };
};
var setSelected = function setSelected(chatId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__["a" /* setSelected */],
    payload: chatId
  };
};
/**
 * This is for manual invitation only.
 *
 * It's required to jump to chat when embedded manual invitation is sent out.
 * However, the server only provides visitor id in response. As a result, provide this API
 * here for this feature. See issue 4066 for details.
 * @param {number} visitorId - Visitor id.
 * @return {{type:string,payload:number,meta:number}} result is an action where payload and meta
 * are all visitor id.
 */
var setSelectedViaVisitorId = function setSelectedViaVisitorId(visitorId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__["c" /* setSelectedViaVisitorId */],
    payload: visitorId,
    meta: visitorId
  };
};
var wrapUp = function wrapUp(visitorId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__["d" /* wrapUp */],
    payload: visitorId
  };
};
var chatItemWidthChanged = function chatItemWidthChanged(info) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_chatList__["e" /* chatItemWidthChanged */],
    payload: info
  };
};

/***/ }),
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/webpack/node_modules/process/browser.js");

/***/ }),
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);
var settle = __webpack_require__(734);
var buildURL = __webpack_require__(737);
var parseHeaders = __webpack_require__(743);
var isURLSameOrigin = __webpack_require__(741);
var createError = __webpack_require__(554);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(736);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(739);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(733);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Modal_css__);




// import Button from '../../Button/Button';

var ConfirmationModal = function ConfirmationModal(props) {
  return props.ifOpen && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
    closeModal: props.onCancel,
    className: __WEBPACK_IMPORTED_MODULE_3__Modal_css___default.a.forceLoginModal,
    title: props.title,
    actions: {
      okProps: { text: 'OK', eventClick: props.onConfirm },
      cancelProps: { text: 'Cancel' }
    }
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {
    dangerouslySetInnerHTML: { __html: props.message }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ConfirmationModal);

ConfirmationModal.defaultProps = {
  title: 'Comm100 Live Chat'
};

/***/ }),
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_css__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__RadioButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css__);













var RadioButton = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(RadioButton, _React$Component);

  function RadioButton() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, RadioButton);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RadioButton.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(RadioButton)).call(this));

    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(RadioButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.radioOption, nextProps.radioOption) || this.props.selectedVal !== nextProps.selectedVal;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css___default.a.clearfix
      }, void 0, this.props.radioOption.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('label', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__RadioButton_css___default.a.control, __WEBPACK_IMPORTED_MODULE_9__RadioButton_css___default.a.controlRadio, _this2.props.className, _this2.props.horizontal ? __WEBPACK_IMPORTED_MODULE_9__RadioButton_css___default.a.horizontal : '')
        }, index, item.text || item, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('input', {
          type: 'radio',
          name: _this2.props.name,
          value: item.value || item,
          checked: _this2.props.selectedVal === item.value || item.checked,
          onChange: _this2.props.handleChange ? _this2.props.handleChange : function () {}
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9__RadioButton_css___default.a.controlIndicator
        }), item.component ? item.component : '');
      }));
    }
  }]);

  return RadioButton;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (RadioButton);

/***/ }),
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return empty; });
/* unused harmony export identity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return everyfns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onceEachTick; });
var empty = function empty() {};
var identity = function identity(input) {
  return input;
};
var everyfns = function everyfns() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var i = 0; i < fns.length; i += 1) {
      if (!fns[i].apply(fns, arguments)) return false;
    }
    return true;
  };
};
/**
 * Wrapped a function to make sure that no matter how many times this function is called,
 * it will only be triggered once in each tick. (use setTimout internally).
 *
 * @param {function} f - function that will be triggered.
 * @return {function} wrapped function
 */
var onceEachTick = function onceEachTick(f) {
  return function () {
    var timer = null;
    return function () {
      if (timer) return;
      timer = setTimeout(function () {
        f();
        timer = null;
      }, 0);
    };
  }();
};

/***/ }),
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"control":"RadioButton__control--15uqa","controlIndicator":"RadioButton__controlIndicator--3yqbO","controlRadio":"RadioButton__controlRadio--3vKph","horizontal":"RadioButton__horizontal--3Fbsv"};

/***/ }),
/* 727 */,
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);
var bind = __webpack_require__(555);
var Axios = __webpack_require__(730);
var defaults = __webpack_require__(326);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(552);
axios.CancelToken = __webpack_require__(729);
axios.isCancel = __webpack_require__(553);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(744);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(552);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(326);
var utils = __webpack_require__(74);
var InterceptorManager = __webpack_require__(731);
var dispatchRequest = __webpack_require__(732);
var isAbsoluteURL = __webpack_require__(740);
var combineURLs = __webpack_require__(738);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);
var transformData = __webpack_require__(735);
var isCancel = __webpack_require__(553);
var defaults = __webpack_require__(326);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(554);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(74);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 745 */,
/* 746 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_Icon_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Icons_Icon_css__);








var ModalLoading = function ModalLoading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
    ifOpen: props.ifOpen,
    shouldCloseOnOverlayClick: false,
    ifShowCloseIcon: false,
    className: __WEBPACK_IMPORTED_MODULE_3__Modal_css___default.a.ModalLoading
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_4__constants_enums__["b" /* icons */].loadingBlue,
    className: __WEBPACK_IMPORTED_MODULE_6__Icons_Icon_css___default.a.loadingBlue
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (ModalLoading);

/***/ }),
/* 747 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Widget_Reload__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__(85);





var ModalReload = function ModalReload(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */], {
    ifOpen: true,
    shouldCloseOnOverlayClick: false,
    ifShowCloseIcon: false
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_src_components_Widget_Reload__["a" /* default */], {
    onRetry: props.onRetry
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ModalReload);

/***/ }),
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/react-modal/lib/index.js");

/***/ }),
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1763);

/***/ }),
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextArea_css__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextArea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TextArea_css__);





var TextArea = function TextArea(props) {
  var input = props.input,
      rows = props.rows,
      cols = props.cols,
      isDisabled = props.isDisabled,
      placeholder = props.placeholder,
      type = props.type,
      maxLength = props.maxLength,
      className = props.className,
      meta = props.meta;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, {
    cols: cols,
    rows: rows,
    disabled: isDisabled ? 'disabled' : false,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, __WEBPACK_IMPORTED_MODULE_3__TextArea_css___default.a.multipleText, meta.touched && meta.invalid && __WEBPACK_IMPORTED_MODULE_3__TextArea_css___default.a.error),
    type: type,
    placeholder: placeholder,
    maxLength: maxLength
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_config__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeVisitorListColumnOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeVisitorListColumnSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updatePreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateSendType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateCustomFilter; });


/**
 * Action to change order of visitor list columns.
 *
 * @param {boolean} leftToRight - Whether column was dragged from left to right.
 * @param {number} startEnumColumn - enumColumn of columnConfig in start position
 * @param {number} startCustomVariableId - customVariableId of columnConfig in start position
 * @param {number} endEnumColumn - enumColumn of columnConfig in end position
 * @param {number} endCustomVariableId - customVariableId of columnConfig in end position
 * @return {object} action. Each column config requires both `enumColumn` and `customVariable` to
 * determine, thus both will be provided in payload, with prefix `start` and `end` indicating the
 * order position.
 */
var changeVisitorListColumnOrder = function changeVisitorListColumnOrder(leftToRight, startEnumColumn, startCustomVariableId, endEnumColumn, endCustomVariableId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_config__["c" /* changeVisitorListColumnOrder */],
    payload: {
      startEnumColumn: startEnumColumn,
      startCustomVariableId: startCustomVariableId,
      endEnumColumn: endEnumColumn,
      endCustomVariableId: endCustomVariableId
    },
    meta: {
      leftToRight: leftToRight
    }
  };
};

var changeVisitorListColumnSize = function changeVisitorListColumnSize(enumColumn, customVariableId, width) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_config__["b" /* changeVisitorListColumnSize */],
    payload: width,
    meta: {
      enumColumn: enumColumn,
      customVariableId: customVariableId
    }
  };
};

var updatePreference = function updatePreference(preference) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_config__["d" /* updatePreference */],
    payload: preference
  };
};

var updateSendType = function updateSendType(sendType) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_config__["e" /* changeSendType */],
    payload: sendType
  };
};

var updateCustomFilter = function updateCustomFilter(customFilter) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_config__["a" /* updateCustomFilter */],
    payload: customFilter
  };
};

/***/ }),
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headerContainer":"style__headerContainer--1zrCD","top":"style__top--1EZjb","topInfo":"style__topInfo--3Plsa","topInfoLine":"style__topInfoLine--2bjUP","tab":"style__tab--oF4IT","selected":"style__selected--1mqmS","headerCell":"style__headerCell--3CZ7C","dragging":"style__dragging--1u2m_","headerCellContent":"style__headerCellContent--2Q4xR","headerStatusCell":"style__headerStatusCell--sSFzA","visitorInfoLine":"style__visitorInfoLine--3LmR1","visitorInfoName":"style__visitorInfoName--15zb9","visitorCountry":"style__visitorCountry--3B_vR","visitorInfoExtraLine":"style__visitorInfoExtraLine--1fBaB","columnRow":"style__columnRow--UMf1e","odd":"style__odd--dwriq","even":"style__even--1IG2z","columnCellHeight":"style__columnCellHeight--S01r-","customerSegmentationCell":"style__customerSegmentationCell--3fJ-f","tooltip":"style__tooltip--2kg2g","segmentBlock":"style__segmentBlock---jHdj","contentContainer":"style__contentContainer--Zw2uM","nofilterDiv":"style__nofilterDiv--2nSAd","nofilterImgWrapper":"style__nofilterImgWrapper--Se4Eq","popuicon":"style__popuicon--2rs9v","visitorstopmenu":"style__visitorstopmenu--7d2Gx"};

/***/ }),
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_utils_func__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tooltip_css__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tooltip_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Tooltip_css__);






var Tooltip = function Tooltip(_ref) {
  var effect = _ref.effect,
      place = _ref.place,
      id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a, {
    effect: effect,
    place: place,
    'class': __WEBPACK_IMPORTED_MODULE_4__Tooltip_css___default.a.container,
    id: id
  });
};

Tooltip.rebuild = __WEBPACK_IMPORTED_MODULE_3_src_utils_func__["a" /* onceEachTick */](__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a.rebuild);
Tooltip.show = __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a.show;
/**
 * should only fire hide once, in each time tick.
 * As multiple hide will not have any extra effects, but rather slow down the system.
 *
 * NOTICE: parameter is NOT accepted yet. If you need to pass in parameter, use ReactTooltip.hide
 * at the moment, or change this API.
 *
 * @todo
 * change this API to accept parameter. That means, hide should only fire once in each time tick,
 * when param passed in is the same.
 */
Tooltip.hide = __WEBPACK_IMPORTED_MODULE_3_src_utils_func__["a" /* onceEachTick */](__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a.hide);

/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"multipleText":"TextArea__multipleText--1J3OF","error":"TextArea__error--3le0n"};

/***/ }),
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return waitingForChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return chatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return preChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return autoInvited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return offlineMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return refusedByAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return refusedByVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return chatEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return inSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return outOfSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transferring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return manuallyInvitedAndWaitingVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return systemProcessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return invitedAndWaitingForChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return monitorChatEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return monitorChatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return audioChatRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return videoChatRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return audioChatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return videoChatting; });
var waitingForChat = 'Waiting for Chat';
// export const audioChatting = 'Voice Chatting';
var chatting = 'Chatting';
var preChat = 'Prechat';
var invited = 'Manually Invited';
var autoInvited = 'Auto Invited';
var offlineMessage = 'Offline Message';
var refusedByAgent = 'Refused by Agent';
var refusedByVisitor = 'Refused by Visitor';
var chatEnded = 'Chat Ended';
var inSite = 'In Site';
var outOfSite = 'Out of Site';
var transferring = 'Transferring';
var manuallyInvitedAndWaitingVisitor = 'Manually Invited';
var systemProcessing = 'System Processing';
var invitedAndWaitingForChat = 'Waiting for Chat (Source: Invitation)';
var monitorChatEnded = 'Monitoring (Chat Ended)';
var monitorChatting = 'Monitoring (Chatting)';

var audioChatRequesting = 'Requesting Audio Chat';
var videoChatRequesting = 'Requesting Video Chat';
var audioChatting = 'Audio Chatting';
var videoChatting = 'Video Chatting';

/***/ }),
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* unused harmony export arrayMove */
/* harmony export (immutable) */ __webpack_exports__["b"] = omit;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return vendorPrefix; });
/* harmony export (immutable) */ __webpack_exports__["c"] = closest;
/* harmony export (immutable) */ __webpack_exports__["g"] = limit;
/* harmony export (immutable) */ __webpack_exports__["d"] = getElementMargin;
/* harmony export (immutable) */ __webpack_exports__["a"] = provideDisplayName;

function arrayMove(arr, previousIndex, newIndex) {
    var array = arr.slice(0);
    if (newIndex >= array.length) {
        var k = newIndex - array.length;
        while (k-- + 1) {
            array.push(undefined);
        }
    }
    array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
    return array;
}

function omit(obj) {
    for (var _len = arguments.length, keysToOmit = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keysToOmit[_key - 1] = arguments[_key];
    }

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(obj).reduce(function (acc, key) {
        if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key];
        return acc;
    }, {});
}

var events = {
    start: ['touchstart', 'mousedown'],
    move: ['touchmove', 'mousemove'],
    end: ['touchend', 'touchcancel', 'mouseup']
};

var vendorPrefix = function () {
    if (typeof window === 'undefined' || typeof document === 'undefined') return ''; // server environment
    // fix for:
    //    https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //    window.getComputedStyle() returns null inside an iframe with display: none
    // in this case return an array with a fake mozilla style in it.
    var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
    var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

    switch (pre) {
        case 'ms':
            return 'ms';
        default:
            return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
    }
}();

function closest(el, fn) {
    while (el) {
        if (fn(el)) return el;
        el = el.parentNode;
    }
}

function limit(min, max, value) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

function getCSSPixelValue(stringValue) {
    if (stringValue.substr(-2) === 'px') {
        return parseFloat(stringValue);
    }
    return 0;
}

function getElementMargin(element) {
    var style = window.getComputedStyle(element);

    return {
        top: getCSSPixelValue(style.marginTop),
        right: getCSSPixelValue(style.marginRight),
        bottom: getCSSPixelValue(style.marginBottom),
        left: getCSSPixelValue(style.marginLeft)
    };
}

function provideDisplayName(prefix, Component) {
    var componentName = Component.displayName || Component.name;

    return componentName ? prefix + '(' + componentName + ')' : prefix;
}

/***/ }),
/* 937 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid__ = __webpack_require__(1340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellRangeRenderer__ = __webpack_require__(1341);
/* unused harmony reexport defaultCellRangeRenderer */







/***/ }),
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_jsx__ = __webpack_require__(316);






var Country = function Country(props) {
  var tooltip = props.city + ', ' + props.state + ', ' + props.countryName;
  if (!props.countryCode) return null;
  var nameLowerCase = props.countryCode.toLowerCase();
  var imgCountry = __webpack_require__(1253)("./" + nameLowerCase + '.svg');
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    'data-tip': tooltip,
    'data-for': props['data-for'] || 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__Icon_jsx__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Icon_css___default.a.iconSmaller, __WEBPACK_IMPORTED_MODULE_3__Icon_css___default.a.iconOffsetDown),
    style: { backgroundImage: 'url(' + imgCountry + ')' }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Country);

/***/ }),
/* 949 */,
/* 950 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);






var MenuTab = function MenuTab(_ref) {
  var tabs = _ref.tabs,
      selectedTab = _ref.selectedTab,
      onSelect = _ref.onSelect,
      onIconClick = _ref.onIconClick,
      _ref$ifEqualWidth = _ref.ifEqualWidth,
      ifEqualWidth = _ref$ifEqualWidth === undefined ? true : _ref$ifEqualWidth,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__style_css___default.a.tab, className)
  }, void 0, tabs.map(function (tab) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
      style: ifEqualWidth ? { width: tabs.length > 0 ? 100 / tabs.length + '%' : '100%' } : {
        width: tab.width ? tab.width : 'auto',
        paddingLeft: tab.icon ? 15 : 0,
        paddingRight: tab.icon ? 15 : 0
      },
      className: tab.type === selectedTab && __WEBPACK_IMPORTED_MODULE_4__style_css___default.a.selected,
      onClick: tab.type !== selectedTab && function () {
        onSelect(tab.type);
      }
    }, tab.type, tab.name, tab.icon && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_Icon_Icon__["a" /* default */], {
      type: tab.icon,
      size: 9,
      onClick: function onClick() {
        return onIconClick(tab.type);
      },
      style: { paddingLeft: 10, cursor: 'pointer' }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (MenuTab);

/***/ }),
/* 951 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TextArea_TextArea__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_helper__ = __webpack_require__(16);







// import classnames from 'classnames';


// import ModalStyle from '../Modal.css';

// import Button from '../../Button/Button';



var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_helper__["e" /* shouldComponentUpdateGen */])('ModalBanChat', ['visitorId', 'realVisitorId', 'visitorIP', 'ifOpen'], ['banType', 'comment']);

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Comment:');

var ModalBanChat = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ModalBanChat, _React$Component);

  function ModalBanChat(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModalBanChat);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ModalBanChat.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ModalBanChat)).call(this, props));

    _this.state = {
      banType: '0',
      comment: ''
    };
    _this.handleRadioChange = _this.handleRadioChange.bind(_this);
    _this.handleTextAreaChange = _this.handleTextAreaChange.bind(_this);
    _this.handleBanChat = _this.handleBanChat.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ModalBanChat, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if (nextProps.ifOpen === false && this.props.ifOpen === false) return false;
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'handleRadioChange',
    value: function handleRadioChange(event) {
      this.setState({
        banType: event.target.value
      });
    }
  }, {
    key: 'handleTextAreaChange',
    value: function handleTextAreaChange(event) {
      this.setState({
        comment: event.target.value
      });
    }
  }, {
    key: 'handleBanChat',
    value: function handleBanChat() {
      var banInfo = {
        banType: this.state.banType,
        ip: this.props.visitorIP,
        comment: this.state.comment
      };
      this.props.onBanChat(this.props.visitorId, banInfo);
      this.props.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.realVisitorId;
      var text = id > 0 ? ' (Visitor Id: ' + id + ')' : '';
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        title: 'Ban Visitor',
        actions: {
          okProps: { text: 'OK', eventClick: this.handleBanChat },
          cancelProps: { text: 'Cancel' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__["a" /* default */], {
        name: 'banvisitor',
        radioOption: [{
          text: 'Ban visitor from this Visitor Id.' + text,
          value: '0',
          checked: this.state.banType === '0'
        }, {
          text: 'Ban visitor from this IP. (IP: ' + this.props.visitorIP + ')',
          value: '1',
          checked: this.state.banType === '1'
        }],
        handleChange: this.handleRadioChange
      }), _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__TextArea_TextArea__["a" /* default */], {
        meta: {},
        input: { onChange: this.handleTextAreaChange },
        name: 'bancomment',
        cols: '40',
        rows: '5'
      }));
    }
  }]);

  return ModalBanChat;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalBanChat);

/***/ }),
/* 952 */,
/* 953 */,
/* 954 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Widget_Reload__ = __webpack_require__(293);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
    modules: { VisitorDetailsTab: function VisitorDetailsTab() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          __webpack_require__.e/* require.ensure */(6).then((function (require) {
            resolve(__webpack_require__(919));
          }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).catch(reject);
        }));
      } },
    loading: __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__["a" /* default */],
    retry: __WEBPACK_IMPORTED_MODULE_5_src_components_Widget_Reload__["a" /* default */]
  }, void 0, function (_ref) {
    var VisitorDetailsTab = _ref.VisitorDetailsTab;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(VisitorDetailsTab, {});
  });
});

/***/ }),
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tab":"style__tab--1Xwp7","selected":"style__selected--2SB81"};

/***/ }),
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"Tooltip__container--202Gq"};

/***/ }),
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ad.2w4fR.svg";

/***/ }),
/* 980 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ae.QKKnW.svg";

/***/ }),
/* 981 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/af.34HyY.svg";

/***/ }),
/* 982 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ag.3oxDo.svg";

/***/ }),
/* 983 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ai.1ePWR.svg";

/***/ }),
/* 984 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/al.1vueq.svg";

/***/ }),
/* 985 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/am.47rmP.svg";

/***/ }),
/* 986 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ao.3jr2Q.svg";

/***/ }),
/* 987 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/aq.3EaFW.svg";

/***/ }),
/* 988 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ar.2ETX6.svg";

/***/ }),
/* 989 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/as.1p0xc.svg";

/***/ }),
/* 990 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/at.2q7_9.svg";

/***/ }),
/* 991 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/au.3DiLj.svg";

/***/ }),
/* 992 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/aw.4BBWc.svg";

/***/ }),
/* 993 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ax.36jxg.svg";

/***/ }),
/* 994 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/az.1qUdn.svg";

/***/ }),
/* 995 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ba.25bIN.svg";

/***/ }),
/* 996 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bb.BcX82.svg";

/***/ }),
/* 997 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bd.2fEO9.svg";

/***/ }),
/* 998 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/be.26Thv.svg";

/***/ }),
/* 999 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bf.2lL_M.svg";

/***/ }),
/* 1000 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bg.3FL0Z.svg";

/***/ }),
/* 1001 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bh.2P2db.svg";

/***/ }),
/* 1002 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bi.xNOIF.svg";

/***/ }),
/* 1003 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bj.2RzLF.svg";

/***/ }),
/* 1004 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bl.AXPio.svg";

/***/ }),
/* 1005 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bm.9mtgH.svg";

/***/ }),
/* 1006 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bn.3SkJy.svg";

/***/ }),
/* 1007 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bo.3Pn4G.svg";

/***/ }),
/* 1008 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bq.2b5iS.svg";

/***/ }),
/* 1009 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/br.31kAh.svg";

/***/ }),
/* 1010 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bs.3x6BN.svg";

/***/ }),
/* 1011 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bt.BqUXg.svg";

/***/ }),
/* 1012 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bv.1omMS.svg";

/***/ }),
/* 1013 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bw.fXfB3.svg";

/***/ }),
/* 1014 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/by.fkEtY.svg";

/***/ }),
/* 1015 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bz.3zcxn.svg";

/***/ }),
/* 1016 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ca.3yloD.svg";

/***/ }),
/* 1017 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cc.1BE1c.svg";

/***/ }),
/* 1018 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cd.1aL94.svg";

/***/ }),
/* 1019 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cf.1KZPZ.svg";

/***/ }),
/* 1020 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cg.5-Xxi.svg";

/***/ }),
/* 1021 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ch.WYetg.svg";

/***/ }),
/* 1022 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ci.1IYx6.svg";

/***/ }),
/* 1023 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ck.3tyQv.svg";

/***/ }),
/* 1024 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cl.2NI88.svg";

/***/ }),
/* 1025 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cm.9MohG.svg";

/***/ }),
/* 1026 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cn.1N1to.svg";

/***/ }),
/* 1027 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/co.1RsuP.svg";

/***/ }),
/* 1028 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cr.3Yju6.svg";

/***/ }),
/* 1029 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cu.3p081.svg";

/***/ }),
/* 1030 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cv.1ygJ9.svg";

/***/ }),
/* 1031 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cw.1RthL.svg";

/***/ }),
/* 1032 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cx.38aoS.svg";

/***/ }),
/* 1033 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cy.uMX3m.svg";

/***/ }),
/* 1034 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cz.eJUf5.svg";

/***/ }),
/* 1035 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/de.2Ts3w.svg";

/***/ }),
/* 1036 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dj.1fpHg.svg";

/***/ }),
/* 1037 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dk.3juVM.svg";

/***/ }),
/* 1038 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dm.1rpAy.svg";

/***/ }),
/* 1039 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/do.1DAN7.svg";

/***/ }),
/* 1040 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dz.1vHVr.svg";

/***/ }),
/* 1041 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ec.hwbbX.svg";

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ee.KILMu.svg";

/***/ }),
/* 1043 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eg.3U_QX.svg";

/***/ }),
/* 1044 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eh.2skcW.svg";

/***/ }),
/* 1045 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/er.3T2BO.svg";

/***/ }),
/* 1046 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/es.1iqTD.svg";

/***/ }),
/* 1047 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/et.17Ajh.svg";

/***/ }),
/* 1048 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eu.3bw_3.svg";

/***/ }),
/* 1049 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fi.3ztSq.svg";

/***/ }),
/* 1050 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fj.1cU11.svg";

/***/ }),
/* 1051 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fk.2QJ47.svg";

/***/ }),
/* 1052 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fm.1CfPN.svg";

/***/ }),
/* 1053 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fo.3iKwE.svg";

/***/ }),
/* 1054 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fr.2piL-.svg";

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ga.3NQKi.svg";

/***/ }),
/* 1056 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-eng.3CFDF.svg";

/***/ }),
/* 1057 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-nir.36y8P.svg";

/***/ }),
/* 1058 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-sct.1ByLH.svg";

/***/ }),
/* 1059 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-wls._syZw.svg";

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb.14AVo.svg";

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gd.1Stf-.svg";

/***/ }),
/* 1062 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ge.2zNqV.svg";

/***/ }),
/* 1063 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gf.qc_td.svg";

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gg.31NRj.svg";

/***/ }),
/* 1065 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gh.1Tgnf.svg";

/***/ }),
/* 1066 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gi.1nA7a.svg";

/***/ }),
/* 1067 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gl.hATVw.svg";

/***/ }),
/* 1068 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gm.xpnyt.svg";

/***/ }),
/* 1069 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gn.1aCvk.svg";

/***/ }),
/* 1070 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gp.2piL-.svg";

/***/ }),
/* 1071 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gq.1oDwE.svg";

/***/ }),
/* 1072 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gr.4ZgKs.svg";

/***/ }),
/* 1073 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gs.2543W.svg";

/***/ }),
/* 1074 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gt.35oze.svg";

/***/ }),
/* 1075 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gu.2dYTQ.svg";

/***/ }),
/* 1076 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gw.1LVc9.svg";

/***/ }),
/* 1077 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gy.2vj9x.svg";

/***/ }),
/* 1078 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hk.2v-pS.svg";

/***/ }),
/* 1079 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hm.2wnFl.svg";

/***/ }),
/* 1080 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hn.2ttXd.svg";

/***/ }),
/* 1081 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hr.2lFUr.svg";

/***/ }),
/* 1082 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ht.3E_g7.svg";

/***/ }),
/* 1083 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hu.3JCUx.svg";

/***/ }),
/* 1084 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/id.ZZ8zx.svg";

/***/ }),
/* 1085 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ie.3jKk2.svg";

/***/ }),
/* 1086 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/il.2IR-H.svg";

/***/ }),
/* 1087 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/im.2T3ee.svg";

/***/ }),
/* 1088 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/in.zCN5C.svg";

/***/ }),
/* 1089 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/io.3Hueg.svg";

/***/ }),
/* 1090 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/iq.2-x9U.svg";

/***/ }),
/* 1091 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ir.1FkmY.svg";

/***/ }),
/* 1092 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/is.2-htH.svg";

/***/ }),
/* 1093 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/it.1pZzK.svg";

/***/ }),
/* 1094 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/je.1BsCZ.svg";

/***/ }),
/* 1095 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jm.2Ls7t.svg";

/***/ }),
/* 1096 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jo.1f_fj.svg";

/***/ }),
/* 1097 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jp.UXaTU.svg";

/***/ }),
/* 1098 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ke.hvJXJ.svg";

/***/ }),
/* 1099 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kg.2mryN.svg";

/***/ }),
/* 1100 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kh.2fKfl.svg";

/***/ }),
/* 1101 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ki.rop2G.svg";

/***/ }),
/* 1102 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/km.DTOdx.svg";

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kn.EftCL.svg";

/***/ }),
/* 1104 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kp.4J00M.svg";

/***/ }),
/* 1105 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kr.pR_NP.svg";

/***/ }),
/* 1106 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kw.2obiU.svg";

/***/ }),
/* 1107 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ky.z-Miu.svg";

/***/ }),
/* 1108 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kz.DQkxo.svg";

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/la.2eB4J.svg";

/***/ }),
/* 1110 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lb.30pnU.svg";

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lc.EKPVR.svg";

/***/ }),
/* 1112 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/li.2WpEC.svg";

/***/ }),
/* 1113 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lk.k1C0H.svg";

/***/ }),
/* 1114 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lr.2Uw0P.svg";

/***/ }),
/* 1115 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ls.VBEQt.svg";

/***/ }),
/* 1116 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lt.-y825.svg";

/***/ }),
/* 1117 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lu.3uxLI.svg";

/***/ }),
/* 1118 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lv.ZvSWw.svg";

/***/ }),
/* 1119 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ly.3sE_g.svg";

/***/ }),
/* 1120 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ma.1EL7B.svg";

/***/ }),
/* 1121 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mc.2WhRw.svg";

/***/ }),
/* 1122 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/md.vsh0e.svg";

/***/ }),
/* 1123 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/me.1qPvt.svg";

/***/ }),
/* 1124 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mf.2piL-.svg";

/***/ }),
/* 1125 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mg.3xRR5.svg";

/***/ }),
/* 1126 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mh.2wUrT.svg";

/***/ }),
/* 1127 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mk.2BczB.svg";

/***/ }),
/* 1128 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ml.1kv7-.svg";

/***/ }),
/* 1129 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mm.2ffBN.svg";

/***/ }),
/* 1130 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mn.lruf-.svg";

/***/ }),
/* 1131 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mo.3sSWi.svg";

/***/ }),
/* 1132 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mp.1O98X.svg";

/***/ }),
/* 1133 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mq.1j0c-.svg";

/***/ }),
/* 1134 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mr.2nSlc.svg";

/***/ }),
/* 1135 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ms.2S4dH.svg";

/***/ }),
/* 1136 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mt.3YVu7.svg";

/***/ }),
/* 1137 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mu.2xe4w.svg";

/***/ }),
/* 1138 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mv.1pAcK.svg";

/***/ }),
/* 1139 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mw.2u2G-.svg";

/***/ }),
/* 1140 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mx.3HHm5.svg";

/***/ }),
/* 1141 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/my.2ROqC.svg";

/***/ }),
/* 1142 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mz.1madv.svg";

/***/ }),
/* 1143 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/na.3b9ka.svg";

/***/ }),
/* 1144 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nc.2SMtj.svg";

/***/ }),
/* 1145 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ne.2AJeB.svg";

/***/ }),
/* 1146 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nf.3jVrH.svg";

/***/ }),
/* 1147 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ng.1m-Ff.svg";

/***/ }),
/* 1148 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ni.3edd4.svg";

/***/ }),
/* 1149 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nl.2bwMS.svg";

/***/ }),
/* 1150 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/no.1IabM.svg";

/***/ }),
/* 1151 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/np.IB5s7.svg";

/***/ }),
/* 1152 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nr.3s4iU.svg";

/***/ }),
/* 1153 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nu.2WiGe.svg";

/***/ }),
/* 1154 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nz.gV5t6.svg";

/***/ }),
/* 1155 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/om.2IQ-j.svg";

/***/ }),
/* 1156 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pa.22K2M.svg";

/***/ }),
/* 1157 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pe.1_GS_.svg";

/***/ }),
/* 1158 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pf.3tk8E.svg";

/***/ }),
/* 1159 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pg.3w7D2.svg";

/***/ }),
/* 1160 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ph.1K-EN.svg";

/***/ }),
/* 1161 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pk.7QViU.svg";

/***/ }),
/* 1162 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pl.2a9yb.svg";

/***/ }),
/* 1163 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pm.2SMtj.svg";

/***/ }),
/* 1164 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pn.3mRNc.svg";

/***/ }),
/* 1165 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pr.TkG0b.svg";

/***/ }),
/* 1166 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ps.BcoId.svg";

/***/ }),
/* 1167 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pt.3XLbQ.svg";

/***/ }),
/* 1168 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pw.3J0Gx.svg";

/***/ }),
/* 1169 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/py.2SA6U.svg";

/***/ }),
/* 1170 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/qa.3CXHK.svg";

/***/ }),
/* 1171 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/re.2SMtj.svg";

/***/ }),
/* 1172 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ro.1xgq6.svg";

/***/ }),
/* 1173 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/rs.28IQy.svg";

/***/ }),
/* 1174 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ru.3RAq4.svg";

/***/ }),
/* 1175 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/rw.34cXU.svg";

/***/ }),
/* 1176 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sa.2bh1V.svg";

/***/ }),
/* 1177 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sb.2zDCO.svg";

/***/ }),
/* 1178 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sc.1AnTz.svg";

/***/ }),
/* 1179 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sd.c8kmJ.svg";

/***/ }),
/* 1180 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/se.31NU3.svg";

/***/ }),
/* 1181 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sg.8o5QE.svg";

/***/ }),
/* 1182 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sh.1nwc1.svg";

/***/ }),
/* 1183 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/si.s4x5x.svg";

/***/ }),
/* 1184 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sj.2HjXs.svg";

/***/ }),
/* 1185 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sk.1xk77.svg";

/***/ }),
/* 1186 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sl.DGVaX.svg";

/***/ }),
/* 1187 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sm.2jefN.svg";

/***/ }),
/* 1188 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sn.1N8aE.svg";

/***/ }),
/* 1189 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/so.2wReU.svg";

/***/ }),
/* 1190 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sr.tPEMt.svg";

/***/ }),
/* 1191 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ss.3Geds.svg";

/***/ }),
/* 1192 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/st.1gBcE.svg";

/***/ }),
/* 1193 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sv.3MFAg.svg";

/***/ }),
/* 1194 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sx.1QgmA.svg";

/***/ }),
/* 1195 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sy.EZ4pb.svg";

/***/ }),
/* 1196 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sz.3eOag.svg";

/***/ }),
/* 1197 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tc.2Q-RA.svg";

/***/ }),
/* 1198 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/td.XwVK8.svg";

/***/ }),
/* 1199 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tf.3xaTz.svg";

/***/ }),
/* 1200 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tg.Jykqh.svg";

/***/ }),
/* 1201 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/th.3ETCo.svg";

/***/ }),
/* 1202 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tj.3zkP-.svg";

/***/ }),
/* 1203 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tk.1YQsC.svg";

/***/ }),
/* 1204 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tl.1GOaM.svg";

/***/ }),
/* 1205 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tm.2Ekpc.svg";

/***/ }),
/* 1206 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tn.3KaBy.svg";

/***/ }),
/* 1207 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/to.WnJJp.svg";

/***/ }),
/* 1208 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tr.2NjR_.svg";

/***/ }),
/* 1209 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tt.TUf9C.svg";

/***/ }),
/* 1210 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tv.36m3F.svg";

/***/ }),
/* 1211 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tw.2wleo.svg";

/***/ }),
/* 1212 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tz.V_aqs.svg";

/***/ }),
/* 1213 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ua.2llWW.svg";

/***/ }),
/* 1214 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ug.3XVhp.svg";

/***/ }),
/* 1215 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/um.1Qc3K.svg";

/***/ }),
/* 1216 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/un.2zA6C.svg";

/***/ }),
/* 1217 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/us.1Qc3K.svg";

/***/ }),
/* 1218 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/uy.1Y1mC.svg";

/***/ }),
/* 1219 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/uz.2nIPH.svg";

/***/ }),
/* 1220 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/va.H-TnN.svg";

/***/ }),
/* 1221 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vc.cEOJq.svg";

/***/ }),
/* 1222 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ve.1-rAI.svg";

/***/ }),
/* 1223 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vg.27WC7.svg";

/***/ }),
/* 1224 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vi.j0S1B.svg";

/***/ }),
/* 1225 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vn.2F_Zc.svg";

/***/ }),
/* 1226 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vu.3UgNZ.svg";

/***/ }),
/* 1227 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/wf.3Mk2v.svg";

/***/ }),
/* 1228 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ws.3o3sr.svg";

/***/ }),
/* 1229 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ye.2ilYd.svg";

/***/ }),
/* 1230 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/yt.2SMtj.svg";

/***/ }),
/* 1231 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/za.3BjEA.svg";

/***/ }),
/* 1232 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zm.lNiy4.svg";

/***/ }),
/* 1233 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zw.2-n04.svg";

/***/ }),
/* 1234 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zz.1ITA-.svg";

/***/ }),
/* 1235 */,
/* 1236 */,
/* 1237 */,
/* 1238 */,
/* 1239 */,
/* 1240 */,
/* 1241 */,
/* 1242 */,
/* 1243 */,
/* 1244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * Default CellMeasurer `cellSizeCache` implementation.
 * Permanently caches all cell sizes (identified by column and row index) unless explicitly cleared.
 * Can be configured to handle uniform cell widths and/or heights as a way of optimizing certain use cases.
 */
var DefaultCellSizeCache = function () {
  function DefaultCellSizeCache() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$uniformRowHeight = _ref.uniformRowHeight;
    var uniformRowHeight = _ref$uniformRowHeight === undefined ? false : _ref$uniformRowHeight;
    var _ref$uniformColumnWid = _ref.uniformColumnWidth;
    var uniformColumnWidth = _ref$uniformColumnWid === undefined ? false : _ref$uniformColumnWid;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DefaultCellSizeCache);

    this._uniformRowHeight = uniformRowHeight;
    this._uniformColumnWidth = uniformColumnWidth;

    this._cachedColumnWidth = undefined;
    this._cachedRowHeight = undefined;

    this._cachedColumnWidths = {};
    this._cachedRowHeights = {};
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DefaultCellSizeCache, [{
    key: "clearAllColumnWidths",
    value: function clearAllColumnWidths() {
      this._cachedColumnWidth = undefined;
      this._cachedColumnWidths = {};
    }
  }, {
    key: "clearAllRowHeights",
    value: function clearAllRowHeights() {
      this._cachedRowHeight = undefined;
      this._cachedRowHeights = {};
    }
  }, {
    key: "clearColumnWidth",
    value: function clearColumnWidth(index) {
      this._cachedColumnWidth = undefined;

      delete this._cachedColumnWidths[index];
    }
  }, {
    key: "clearRowHeight",
    value: function clearRowHeight(index) {
      this._cachedRowHeight = undefined;

      delete this._cachedRowHeights[index];
    }
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(index) {
      return this._uniformColumnWidth ? this._cachedColumnWidth : this._cachedColumnWidths[index];
    }
  }, {
    key: "getRowHeight",
    value: function getRowHeight(index) {
      return this._uniformRowHeight ? this._cachedRowHeight : this._cachedRowHeights[index];
    }
  }, {
    key: "setColumnWidth",
    value: function setColumnWidth(index, width) {
      this._cachedColumnWidth = width;
      this._cachedColumnWidths[index] = width;
    }
  }, {
    key: "setRowHeight",
    value: function setRowHeight(index, height) {
      this._cachedRowHeight = height;
      this._cachedRowHeights[index] = height;
    }
  }]);

  return DefaultCellSizeCache;
}();

/* harmony default export */ __webpack_exports__["a"] = (DefaultCellSizeCache);

/***/ }),
/* 1245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ __webpack_exports__["a"] = (SortDirection);

/***/ }),
/* 1246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createCallbackMemoizer;

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback;
    var indices = _ref.indices;

    var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),
/* 1247 */,
/* 1248 */,
/* 1249 */,
/* 1250 */,
/* 1251 */,
/* 1252 */,
/* 1253 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ad.svg": 979,
	"./ae.svg": 980,
	"./af.svg": 981,
	"./ag.svg": 982,
	"./ai.svg": 983,
	"./al.svg": 984,
	"./am.svg": 985,
	"./ao.svg": 986,
	"./aq.svg": 987,
	"./ar.svg": 988,
	"./as.svg": 989,
	"./at.svg": 990,
	"./au.svg": 991,
	"./aw.svg": 992,
	"./ax.svg": 993,
	"./az.svg": 994,
	"./ba.svg": 995,
	"./bb.svg": 996,
	"./bd.svg": 997,
	"./be.svg": 998,
	"./bf.svg": 999,
	"./bg.svg": 1000,
	"./bh.svg": 1001,
	"./bi.svg": 1002,
	"./bj.svg": 1003,
	"./bl.svg": 1004,
	"./bm.svg": 1005,
	"./bn.svg": 1006,
	"./bo.svg": 1007,
	"./bq.svg": 1008,
	"./br.svg": 1009,
	"./bs.svg": 1010,
	"./bt.svg": 1011,
	"./bv.svg": 1012,
	"./bw.svg": 1013,
	"./by.svg": 1014,
	"./bz.svg": 1015,
	"./ca.svg": 1016,
	"./cc.svg": 1017,
	"./cd.svg": 1018,
	"./cf.svg": 1019,
	"./cg.svg": 1020,
	"./ch.svg": 1021,
	"./ci.svg": 1022,
	"./ck.svg": 1023,
	"./cl.svg": 1024,
	"./cm.svg": 1025,
	"./cn.svg": 1026,
	"./co.svg": 1027,
	"./cr.svg": 1028,
	"./cu.svg": 1029,
	"./cv.svg": 1030,
	"./cw.svg": 1031,
	"./cx.svg": 1032,
	"./cy.svg": 1033,
	"./cz.svg": 1034,
	"./de.svg": 1035,
	"./dj.svg": 1036,
	"./dk.svg": 1037,
	"./dm.svg": 1038,
	"./do.svg": 1039,
	"./dz.svg": 1040,
	"./ec.svg": 1041,
	"./ee.svg": 1042,
	"./eg.svg": 1043,
	"./eh.svg": 1044,
	"./er.svg": 1045,
	"./es.svg": 1046,
	"./et.svg": 1047,
	"./eu.svg": 1048,
	"./fi.svg": 1049,
	"./fj.svg": 1050,
	"./fk.svg": 1051,
	"./fm.svg": 1052,
	"./fo.svg": 1053,
	"./fr.svg": 1054,
	"./ga.svg": 1055,
	"./gb-eng.svg": 1056,
	"./gb-nir.svg": 1057,
	"./gb-sct.svg": 1058,
	"./gb-wls.svg": 1059,
	"./gb.svg": 1060,
	"./gd.svg": 1061,
	"./ge.svg": 1062,
	"./gf.svg": 1063,
	"./gg.svg": 1064,
	"./gh.svg": 1065,
	"./gi.svg": 1066,
	"./gl.svg": 1067,
	"./gm.svg": 1068,
	"./gn.svg": 1069,
	"./gp.svg": 1070,
	"./gq.svg": 1071,
	"./gr.svg": 1072,
	"./gs.svg": 1073,
	"./gt.svg": 1074,
	"./gu.svg": 1075,
	"./gw.svg": 1076,
	"./gy.svg": 1077,
	"./hk.svg": 1078,
	"./hm.svg": 1079,
	"./hn.svg": 1080,
	"./hr.svg": 1081,
	"./ht.svg": 1082,
	"./hu.svg": 1083,
	"./id.svg": 1084,
	"./ie.svg": 1085,
	"./il.svg": 1086,
	"./im.svg": 1087,
	"./in.svg": 1088,
	"./io.svg": 1089,
	"./iq.svg": 1090,
	"./ir.svg": 1091,
	"./is.svg": 1092,
	"./it.svg": 1093,
	"./je.svg": 1094,
	"./jm.svg": 1095,
	"./jo.svg": 1096,
	"./jp.svg": 1097,
	"./ke.svg": 1098,
	"./kg.svg": 1099,
	"./kh.svg": 1100,
	"./ki.svg": 1101,
	"./km.svg": 1102,
	"./kn.svg": 1103,
	"./kp.svg": 1104,
	"./kr.svg": 1105,
	"./kw.svg": 1106,
	"./ky.svg": 1107,
	"./kz.svg": 1108,
	"./la.svg": 1109,
	"./lb.svg": 1110,
	"./lc.svg": 1111,
	"./li.svg": 1112,
	"./lk.svg": 1113,
	"./lr.svg": 1114,
	"./ls.svg": 1115,
	"./lt.svg": 1116,
	"./lu.svg": 1117,
	"./lv.svg": 1118,
	"./ly.svg": 1119,
	"./ma.svg": 1120,
	"./mc.svg": 1121,
	"./md.svg": 1122,
	"./me.svg": 1123,
	"./mf.svg": 1124,
	"./mg.svg": 1125,
	"./mh.svg": 1126,
	"./mk.svg": 1127,
	"./ml.svg": 1128,
	"./mm.svg": 1129,
	"./mn.svg": 1130,
	"./mo.svg": 1131,
	"./mp.svg": 1132,
	"./mq.svg": 1133,
	"./mr.svg": 1134,
	"./ms.svg": 1135,
	"./mt.svg": 1136,
	"./mu.svg": 1137,
	"./mv.svg": 1138,
	"./mw.svg": 1139,
	"./mx.svg": 1140,
	"./my.svg": 1141,
	"./mz.svg": 1142,
	"./na.svg": 1143,
	"./nc.svg": 1144,
	"./ne.svg": 1145,
	"./nf.svg": 1146,
	"./ng.svg": 1147,
	"./ni.svg": 1148,
	"./nl.svg": 1149,
	"./no.svg": 1150,
	"./np.svg": 1151,
	"./nr.svg": 1152,
	"./nu.svg": 1153,
	"./nz.svg": 1154,
	"./om.svg": 1155,
	"./pa.svg": 1156,
	"./pe.svg": 1157,
	"./pf.svg": 1158,
	"./pg.svg": 1159,
	"./ph.svg": 1160,
	"./pk.svg": 1161,
	"./pl.svg": 1162,
	"./pm.svg": 1163,
	"./pn.svg": 1164,
	"./pr.svg": 1165,
	"./ps.svg": 1166,
	"./pt.svg": 1167,
	"./pw.svg": 1168,
	"./py.svg": 1169,
	"./qa.svg": 1170,
	"./re.svg": 1171,
	"./ro.svg": 1172,
	"./rs.svg": 1173,
	"./ru.svg": 1174,
	"./rw.svg": 1175,
	"./sa.svg": 1176,
	"./sb.svg": 1177,
	"./sc.svg": 1178,
	"./sd.svg": 1179,
	"./se.svg": 1180,
	"./sg.svg": 1181,
	"./sh.svg": 1182,
	"./si.svg": 1183,
	"./sj.svg": 1184,
	"./sk.svg": 1185,
	"./sl.svg": 1186,
	"./sm.svg": 1187,
	"./sn.svg": 1188,
	"./so.svg": 1189,
	"./sr.svg": 1190,
	"./ss.svg": 1191,
	"./st.svg": 1192,
	"./sv.svg": 1193,
	"./sx.svg": 1194,
	"./sy.svg": 1195,
	"./sz.svg": 1196,
	"./tc.svg": 1197,
	"./td.svg": 1198,
	"./tf.svg": 1199,
	"./tg.svg": 1200,
	"./th.svg": 1201,
	"./tj.svg": 1202,
	"./tk.svg": 1203,
	"./tl.svg": 1204,
	"./tm.svg": 1205,
	"./tn.svg": 1206,
	"./to.svg": 1207,
	"./tr.svg": 1208,
	"./tt.svg": 1209,
	"./tv.svg": 1210,
	"./tw.svg": 1211,
	"./tz.svg": 1212,
	"./ua.svg": 1213,
	"./ug.svg": 1214,
	"./um.svg": 1215,
	"./un.svg": 1216,
	"./us.svg": 1217,
	"./uy.svg": 1218,
	"./uz.svg": 1219,
	"./va.svg": 1220,
	"./vc.svg": 1221,
	"./ve.svg": 1222,
	"./vg.svg": 1223,
	"./vi.svg": 1224,
	"./vn.svg": 1225,
	"./vu.svg": 1226,
	"./wf.svg": 1227,
	"./ws.svg": 1228,
	"./ye.svg": 1229,
	"./yt.svg": 1230,
	"./za.svg": 1231,
	"./zm.svg": 1232,
	"./zw.svg": 1233,
	"./zz.svg": 1234
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1253;

/***/ }),
/* 1254 */,
/* 1255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/invariant/browser.js");

/***/ }),
/* 1256 */,
/* 1257 */,
/* 1258 */,
/* 1259 */,
/* 1260 */,
/* 1261 */,
/* 1262 */,
/* 1263 */,
/* 1264 */,
/* 1265 */,
/* 1266 */,
/* 1267 */,
/* 1268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_once__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_once___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_once__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_escape__ = __webpack_require__(1685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_escape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_padStart__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_padStart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_padStart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_flow__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_flow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_fp_flow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_fp_filter__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_fp_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_fp_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_fp_map__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_fp_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_fp_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_utils_time__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__TimeCell__ = __webpack_require__(1484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__VisitorInfoCell__ = __webpack_require__(1485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Referrer__ = __webpack_require__(1482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__style_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getColumn;
/* harmony export (immutable) */ __webpack_exports__["b"] = getHeaderProps;







var _statusIconMapping, _config;























var baseCellGen = function baseCellGen(mapF) {
  return function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, mapF(props.visitor, props));
  };
}; // eslint-disable-line

var simpleCellGen = function simpleCellGen(key) {
  return baseCellGen(function (visitor) {
    return visitor.get(key);
  });
};

var linkCellGen = function linkCellGen(linkKey, titleKey) {
  return function (_ref) {
    var visitor = _ref.visitor;
    return (// eslint-disable-line
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        href: visitor.get(linkKey),
        'data-tip': visitor.get(linkKey),
        'data-for': 'visitorListTooltip',
        newWindow: true
      }, void 0, visitor.get(titleKey) || visitor.get(linkKey))
    );
  };
};

var referrerGen = function referrerGen(_ref2) {
  var visitor = _ref2.visitor;
  return (// eslint-disable-line
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_21__Referrer__["a" /* default */], {
      referrer: visitor.get('referrer'),
      searchEngine: visitor.get('searchEngine'),
      searchEngineKeywords: visitor.get('searchEngineKeywords')
    })
  );
};

var timeCellGen = function timeCellGen(key) {
  return function (_ref3) {
    var visitor = _ref3.visitor,
        delay = _ref3.delay;
    return (// eslint-disable-line
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__TimeCell__["a" /* default */], {
        time: __WEBPACK_IMPORTED_MODULE_13_src_utils_time__["c" /* parseDate */](visitor.get(key)),
        delay: delay
      })
    );
  };
};

var dateCellGen = function dateCellGen(key) {
  return baseCellGen(function (visitor, _ref4) {
    var dateTimeFormat = _ref4.dateTimeFormat,
        timezone = _ref4.timezone,
        timezoneOffset = _ref4.timezoneOffset;

    /**
     * @type {Date}
     */
    var date = __WEBPACK_IMPORTED_MODULE_13_src_utils_time__["c" /* parseDate */](visitor.get(key));
    if (!date) return '';
    return __WEBPACK_IMPORTED_MODULE_13_src_utils_time__["f" /* dateToString */](date, dateTimeFormat, timezone, timezoneOffset);
  });
};

var statusIconMapping = (_statusIconMapping = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["c" /* waitingForChat */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].waitting,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["b" /* waitingForChat */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["a" /* chatting */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].chatting,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["c" /* chatting */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["m" /* preChat */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].prechat,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["d" /* preChat */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["g" /* invited */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].invited,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["e" /* invited */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["n" /* autoInvited */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].invited,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["f" /* autoInvited */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["o" /* offlineMessage */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].offline,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["g" /* offlineMessage */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["p" /* refusedByOperator */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].refused,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["h" /* refusedByAgent */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["f" /* refusedByVisitor */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].refused,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["i" /* refusedByVisitor */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["e" /* chatEnded */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].chatEnd,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["j" /* chatEnded */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["q" /* inSite */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].insite,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["k" /* inSite */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["l" /* outOfSite */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].outOfSite,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["l" /* outOfSite */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["b" /* transferring */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].transferring,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["a" /* transferring */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].inviteWaiting,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["q" /* manuallyInvitedAndWaitingVisitor */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["r" /* systemProcessing */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].systemProcessing,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["r" /* systemProcessing */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["s" /* invitedAndWaitingForChat */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].waitingInvite,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["s" /* invitedAndWaitingForChat */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["t" /* monitorChatEnded */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].monitorEnded,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["t" /* monitorChatEnded */]
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_statusIconMapping, __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["u" /* monitorChatting */], {
  type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].monitorChatting,
  text: __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["u" /* monitorChatting */]
}), _statusIconMapping);

var customVariableCellGen = function customVariableCellGen(_ref5, columnConfig) {
  var customVariables = _ref5.customVariables,
      visitor = _ref5.visitor;
  // eslint-disable-line
  var customVariableName = __WEBPACK_IMPORTED_MODULE_5_lodash_find___default()(customVariables, function (cv) {
    return cv.id === columnConfig.customVariableId;
  }).name;
  var values = visitor.get('customVariables');
  var value = __WEBPACK_IMPORTED_MODULE_5_lodash_find___default()(values, function (v) {
    return v.name === customVariableName;
  });
  if (value && value.url) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
      newWindow: true,
      href: value.url,
      'data-tip': value.url,
      'data-for': 'visitorListTooltip'
    }, void 0, value.value);
  }
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, value ? value.value : '');
};

var statusCell = function statusCell(_ref6) {
  var visitor = _ref6.visitor;
  // eslint-disable-line
  var status = visitor.get('status');
  var _statusIconMapping$st = statusIconMapping[status],
      type = _statusIconMapping$st.type,
      text = _statusIconMapping$st.text;

  if (status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["c" /* waitingForChat */] && visitor.get('autoInvitationId') > 0) {
    type = __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].waitingInvite;
    text = __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["s" /* invitedAndWaitingForChat */];
  } else if (status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["a" /* chatting */]) {
    var audioVideoChatStatus = visitor.get('audioVideoChatStatus');
    switch (audioVideoChatStatus) {
      case __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]:
        type = __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].audioChatRequesting;
        text = __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["m" /* audioChatRequesting */];
        break;
      case __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]:
        type = __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].videoChatRequesting;
        text = __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["o" /* videoChatRequesting */];
        break;
      case __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */]:
        type = __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].audioChatRequesting;
        text = __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["n" /* audioChatting */];
        break;
      case __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */]:
        type = __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].videoChatRequesting;
        text = __WEBPACK_IMPORTED_MODULE_18__constants_languages_visitorStatus__["p" /* videoChatting */];
        break;
      default:
        break;
    }
  }
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__["a" /* default */], {
    size: 'smaller',
    type: type,
    'data-tip': text,
    'data-for': 'visitorListTooltip'
  });
};

var needSearchCellGen = function needSearchCellGen(idKey, dictKey) {
  return function (props) {
    var ids = [].concat(props.visitor.get(idKey)); // eslint-disable-line
    var name = __WEBPACK_IMPORTED_MODULE_7_lodash_fp_flow___default()(__WEBPACK_IMPORTED_MODULE_9_lodash_fp_map___default()(function (id) {
      return __WEBPACK_IMPORTED_MODULE_5_lodash_find___default()(props[dictKey], function (prop) {
        return prop.id === id;
      });
    }), __WEBPACK_IMPORTED_MODULE_8_lodash_fp_filter___default()(function (element) {
      return element;
    }), __WEBPACK_IMPORTED_MODULE_9_lodash_fp_map___default()(function (element) {
      return element.name;
    }))(ids).join(', ');
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, name);
  };
};

var campaignCellGen = needSearchCellGen('codePlanId', 'campaigns');
var departmentCellGen = needSearchCellGen('departmentId', 'departments');
var autoInvitationCellGen = needSearchCellGen('autoInvitationId', 'autoInvitations');
var agentCellGen = needSearchCellGen('chatInvolvedAgents', 'agents');

var waitTimeCell = function waitTimeCell(props) {
  var visitor = props.visitor; // eslint-disable-line
  var status = visitor.get('status');
  if (status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["c" /* waitingForChat */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__TimeCell__["a" /* default */], {
      time: visitor.get('chatBeginTime')
    });
  } else if (status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["b" /* transferring */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__TimeCell__["a" /* default */], {
      time: visitor.get('transferTime')
    });
  }
  return null;
};

var chatTimeCell = function chatTimeCell(props) {
  var visitor = props.visitor; // eslint-disable-line
  var status = visitor.get('status');
  if (status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["a" /* chatting */] || status === __WEBPACK_IMPORTED_MODULE_16__constants_enums_visitorStatus__["b" /* transferring */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__TimeCell__["a" /* default */], {
      time: visitor.get('chatBeginTime')
    });
  }
  return null;
};

var visitorInfoRendererGen = function visitorInfoRendererGen(props) {
  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__VisitorInfoCell__["a" /* default */], props);
};

var padHex = function padHex(num) {
  return __WEBPACK_IMPORTED_MODULE_4_lodash_padStart___default()(num.toString(16), 2, '0');
};
var segmentCellGen = function segmentCellGen(props) {
  var ids = props.visitor.get('segmentIds'); // eslint-disable-line
  var segmentList = __WEBPACK_IMPORTED_MODULE_7_lodash_fp_flow___default()(__WEBPACK_IMPORTED_MODULE_9_lodash_fp_map___default()(function (id) {
    return __WEBPACK_IMPORTED_MODULE_5_lodash_find___default()(props.segments, function (segment) {
      return segment.id === id;
    });
  }), __WEBPACK_IMPORTED_MODULE_8_lodash_fp_filter___default()(function (segment) {
    return segment && segment.color !== undefined;
  }), __WEBPACK_IMPORTED_MODULE_9_lodash_fp_map___default()(function (_ref7) {
    var color = _ref7.color,
        name = _ref7.name;

    var b = color % 256;
    var g = Math.floor(color / 256) % 256;
    var r = (color - b - 256 * g) / (256 * 256);
    return {
      color: '#' + padHex(r) + padHex(g) + padHex(b),
      name: name
    };
  }))(ids);
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_22__style_css___default.a.customerSegmentationCell
  }, void 0, segmentList.map(function (seg) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
      style: { backgroundColor: seg.color },
      'data-tip': '<span class=' + __WEBPACK_IMPORTED_MODULE_22__style_css___default.a.segmentBlock + ' style="background-color:' + seg.color + '"></span> ' + __WEBPACK_IMPORTED_MODULE_3_lodash_escape___default()(seg.name),
      'data-for': 'visitorListTooltip',
      'data-html': true
    }, seg.color);
  }));
};

var config = (_config = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["b" /* customVariable */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].CustomVariable,
  cell: customVariableCellGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["g" /* status */], {
  header: '',
  cell: statusCell,
  minWidth: 36
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["h" /* contactUserIcon */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].ContactUserIcon,
  cell: function cell() {
    return null;
  },
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["i" /* name */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Name,
  cell: simpleCellGen('latestName'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["j" /* email */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Email,
  cell: simpleCellGen('latestEmail'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["e" /* ticketId */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].TicketId,
  cell: simpleCellGen('ticketId'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["c" /* department */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Department,
  cell: departmentCellGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["k" /* visits */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].VisitTimes,
  cell: simpleCellGen('visitorTimes'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["l" /* productService */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].ProductService,
  cell: simpleCellGen('prechatProductService'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["m" /* chats */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].ChatTimes,
  cell: simpleCellGen('chatTimes'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["n" /* currentPage */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].CurrentPage,
  cell: linkCellGen('currentPage', 'currentPageTitle'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["o" /* currentPageBrowsingTime */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].CurrentPageBrowsingTime,
  cell: timeCellGen('currentPageEnterTime'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["p" /* referrer */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Referrer,
  cell: referrerGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["q" /* searchEngine */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].SearchEngine,
  cell: simpleCellGen('searchEngine'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["r" /* keywords */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Keywords,
  cell: simpleCellGen('searchEngineKeywords'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["d" /* autoInvitation */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].AutoInvitation,
  cell: autoInvitationCellGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["f" /* campaign */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].WebsiteIntegrationPlan,
  cell: campaignCellGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["s" /* landingPage */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].LandingPage,
  cell: linkCellGen('landingPageUrl', 'landingPageTitle'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["t" /* agents */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Operators,
  cell: agentCellGen,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["u" /* visitTime */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].VisitTime,
  cell: dateCellGen('sessionStartTime'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["v" /* waitTime */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].WaitTime,
  cell: waitTimeCell,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["w" /* chatTime */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].ChatTime,
  cell: chatTimeCell,
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["x" /* totalTime */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].TotalTime,
  cell: timeCellGen('sessionStartTime'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["y" /* timezone */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].TimeZone,
  cell: simpleCellGen('timezone'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["z" /* city */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].City,
  cell: simpleCellGen('city'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["A" /* state */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].StateProvince,
  cell: simpleCellGen('state'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["B" /* countryRegion */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].CountryRegion,
  cell: simpleCellGen('country'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["C" /* numOfPages */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].OfPages,
  cell: simpleCellGen('numOfPages'),
  minWidth: 50
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["D" /* visitorInfo */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Info,
  cell: visitorInfoRendererGen,
  minWidth: 260
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_config, __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["a" /* visitorSegmentation */], {
  header: __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_preference__["a" /* enumColumnName */].Segment,
  cell: segmentCellGen,
  minWidth: 50
}), _config);

var outputWarning = __WEBPACK_IMPORTED_MODULE_2_lodash_once___default()(function (column) {
  console.warn('Receive unkown column type: ' + column.enumColumn + ', ignored!');
});

function getColumn(column, key, props) {
  var renderer = function renderer() {
    return undefined;
  };
  var minWidth = 0;
  if (config[column.enumColumn]) {
    renderer = config[column.enumColumn].cell;
    minWidth = config[column.enumColumn].minWidth;
  } else if (true) {
    outputWarning(column);
    return null;
  }
  var width = Math.max(column.width, minWidth) + 1; // border-width: 1px
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    style: {
      width: width,
      minWidth: width,
      display: column.enumColumn === __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["D" /* visitorInfo */] ? 'inline-block' : undefined,
      height: column.enumColumn === __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["D" /* visitorInfo */] ? undefined : 35
    }
  }, key, renderer(props, column));
}

function getHeaderProps(column, customVariables) {
  if (!config[column.enumColumn]) {
    if (true) {
      outputWarning(column);
    }
    return null;
  }
  var columnName = config[column.enumColumn].header;
  if (column.enumColumn === __WEBPACK_IMPORTED_MODULE_15__constants_enums_columnType__["b" /* customVariable */]) {
    var id = column.customVariableId;
    var customVariable = __WEBPACK_IMPORTED_MODULE_5_lodash_find___default()(customVariables, function (cv) {
      return cv.id === id;
    });
    columnName = customVariable ? customVariable.name : '';
  }
  var minWidth = config[column.enumColumn].minWidth;
  var width = Math.max(column.width, minWidth);
  return { columnName: columnName, minWidth: minWidth, width: width };
}

/***/ }),
/* 1269 */,
/* 1270 */,
/* 1271 */,
/* 1272 */,
/* 1273 */,
/* 1274 */,
/* 1275 */,
/* 1276 */,
/* 1277 */,
/* 1278 */,
/* 1279 */,
/* 1280 */,
/* 1281 */,
/* 1282 */,
/* 1283 */,
/* 1284 */,
/* 1285 */,
/* 1286 */,
/* 1287 */,
/* 1288 */,
/* 1289 */,
/* 1290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(1537);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),
/* 1291 */,
/* 1292 */,
/* 1293 */,
/* 1294 */,
/* 1295 */,
/* 1296 */,
/* 1297 */,
/* 1298 */,
/* 1299 */,
/* 1300 */,
/* 1301 */,
/* 1302 */,
/* 1303 */,
/* 1304 */,
/* 1305 */,
/* 1306 */,
/* 1307 */,
/* 1308 */,
/* 1309 */,
/* 1310 */,
/* 1311 */,
/* 1312 */,
/* 1313 */,
/* 1314 */,
/* 1315 */,
/* 1316 */,
/* 1317 */,
/* 1318 */,
/* 1319 */,
/* 1320 */,
/* 1321 */,
/* 1322 */,
/* 1323 */,
/* 1324 */,
/* 1325 */,
/* 1326 */,
/* 1327 */,
/* 1328 */,
/* 1329 */,
/* 1330 */,
/* 1331 */,
/* 1332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_invariant__ = __webpack_require__(1255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Manager__ = __webpack_require__(1736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__(936);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortableContainer;















// Export Higher Order Sortable Container Component
function sortableContainer(WrappedComponent) {
	var _class, _temp;

	var config = arguments.length <= 1 || arguments[1] === undefined ? { withRef: false } : arguments[1];

	return _temp = _class = function (_Component) {
		__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(_class, _Component);

		function _class(props) {
			__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, _class);

			var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(_class).call(this, props));

			_this.handleStart = function (e) {
				var _this$props = _this.props;
				var distance = _this$props.distance;
				var shouldCancelStart = _this$props.shouldCancelStart;


				if (e.button === 2 || shouldCancelStart(e)) {
					return false;
				}

				_this._touched = true;
				_this._pos = {
					x: e.clientX,
					y: e.clientY
				};

				var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["c" /* closest */])(e.target, function (el) {
					return el.sortableInfo != null;
				});

				if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
					var useDragHandle = _this.props.useDragHandle;
					var _node$sortableInfo = node.sortableInfo;
					var index = _node$sortableInfo.index;
					var collection = _node$sortableInfo.collection;


					if (useDragHandle && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["c" /* closest */])(e.target, function (el) {
						return el.sortableHandle != null;
					})) return;

					_this.manager.active = { index: index, collection: collection };

					/*
      * Fixes a bug in Firefox where the :active state of anchor tags
      * prevent subsequent 'mousemove' events from being fired
      * (see https://github.com/clauderic/react-sortable-hoc/issues/118)
      */
					if (e.target.tagName.toLowerCase() === 'a') {
						e.preventDefault();
					}

					if (!distance) {
						if (_this.props.pressDelay === 0) {
							_this.handlePress(e);
						} else {
							_this.pressTimer = setTimeout(function () {
								return _this.handlePress(e);
							}, _this.props.pressDelay);
						}
					}
				}
			};

			_this.nodeIsChild = function (node) {
				return node.sortableInfo.manager == _this.manager;
			};

			_this.handleMove = function (e) {
				var distance = _this.props.distance;


				if (!_this.state.sorting && _this._touched) {
					_this._delta = {
						x: _this._pos.x - e.clientX,
						y: _this._pos.y - e.clientY
					};
					var delta = Math.abs(_this._delta.x) + Math.abs(_this._delta.y);

					if (!distance) {
						clearTimeout(_this.cancelTimer);
						_this.cancelTimer = setTimeout(_this.cancel, 0);
					} else if (delta >= distance) {
						_this.handlePress(e);
					}
				}
			};

			_this.handleEnd = function () {
				var distance = _this.props.distance;


				_this._touched = false;

				if (!distance) {
					_this.cancel();
				}
			};

			_this.cancel = function () {
				if (!_this.state.sorting) {
					clearTimeout(_this.pressTimer);
					_this.manager.active = null;
				}
			};

			_this.handlePress = function (e) {
				var active = _this.manager.getActive();

				if (active) {
					(function () {
						var _this$props2 = _this.props;
						var axis = _this$props2.axis;
						var getHelperDimensions = _this$props2.getHelperDimensions;
						var helperClass = _this$props2.helperClass;
						var hideSortableGhost = _this$props2.hideSortableGhost;
						var onSortStart = _this$props2.onSortStart;
						var useWindowAsScrollContainer = _this$props2.useWindowAsScrollContainer;
						var node = active.node;
						var collection = active.collection;
						var index = node.sortableInfo.index;

						var margin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["d" /* getElementMargin */])(node);

						var containerBoundingRect = _this.container.getBoundingClientRect();
						var dimensions = getHelperDimensions({ index: index, node: node, collection: collection });

						_this.node = node;
						_this.margin = margin;
						_this.width = dimensions.width;
						_this.height = dimensions.height;
						_this.marginOffset = {
							x: _this.margin.left + _this.margin.right,
							y: Math.max(_this.margin.top, _this.margin.bottom)
						};
						_this.boundingClientRect = node.getBoundingClientRect();
						_this.containerBoundingRect = containerBoundingRect;
						_this.index = index;
						_this.newIndex = index;

						_this.axis = {
							x: axis.indexOf('x') >= 0,
							y: axis.indexOf('y') >= 0
						};
						_this.offsetEdge = _this.getEdgeOffset(node);
						_this.initialOffset = _this.getOffset(e);
						_this.initialScroll = {
							top: _this.scrollContainer.scrollTop,
							left: _this.scrollContainer.scrollLeft
						};

						var fields = node.querySelectorAll('input, textarea, select');
						var clonedNode = node.cloneNode(true);
						var clonedFields = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(clonedNode.querySelectorAll('input, textarea, select'))); // Convert NodeList to Array

						clonedFields.forEach(function (field, index) {
							return field.value = fields[index] && fields[index].value;
						});

						_this.helper = _this.document.body.appendChild(clonedNode);

						_this.helper.style.position = 'fixed';
						_this.helper.style.top = _this.boundingClientRect.top - margin.top + 'px';
						_this.helper.style.left = _this.boundingClientRect.left - margin.left + 'px';
						_this.helper.style.width = _this.width + 'px';
						_this.helper.style.height = _this.height + 'px';
						_this.helper.style.boxSizing = 'border-box';

						if (hideSortableGhost) {
							_this.sortableGhost = node;
							node.style.visibility = 'hidden';
						}

						_this.minTranslate = {};
						_this.maxTranslate = {};
						if (_this.axis.x) {
							_this.minTranslate.x = (useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
							_this.maxTranslate.x = (useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
						}
						if (_this.axis.y) {
							_this.minTranslate.y = (useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
							_this.maxTranslate.y = (useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
						}

						if (helperClass) {
							var _this$helper$classLis;

							(_this$helper$classLis = _this.helper.classList).add.apply(_this$helper$classLis, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(helperClass.split(' ')));
						}

						_this.listenerNode = e.touches ? node : _this.contentWindow;
						__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */].move.forEach(function (eventName) {
							return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
						});
						__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */].end.forEach(function (eventName) {
							return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
						});

						_this.setState({
							sorting: true,
							sortingIndex: index
						});

						if (onSortStart) onSortStart({ node: node, index: index, collection: collection }, e);
					})();
				}
			};

			_this.handleSortMove = function (e) {
				var onSortMove = _this.props.onSortMove;

				e.preventDefault(); // Prevent scrolling on mobile

				_this.updatePosition(e);
				_this.animateNodes();
				_this.autoscroll();

				if (onSortMove) onSortMove(e);
			};

			_this.handleSortEnd = function (e) {
				var _this$props3 = _this.props;
				var hideSortableGhost = _this$props3.hideSortableGhost;
				var onSortEnd = _this$props3.onSortEnd;
				var collection = _this.manager.active.collection;

				// Remove the event listeners if the node is still in the DOM

				if (_this.listenerNode) {
					__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */].move.forEach(function (eventName) {
						return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
					});
					__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */].end.forEach(function (eventName) {
						return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
					});
				}

				// Remove the helper from the DOM
				_this.helper.parentNode.removeChild(_this.helper);

				if (hideSortableGhost && _this.sortableGhost) {
					_this.sortableGhost.style.visibility = '';
				}

				var nodes = _this.manager.refs[collection];
				for (var i = 0, len = nodes.length; i < len; i++) {
					var node = nodes[i];
					var el = node.node;

					// Clear the cached offsetTop / offsetLeft value
					node.edgeOffset = null;

					// Remove the transforms / transitions
					el.style[__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* vendorPrefix */] + 'Transform'] = '';
					el.style[__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* vendorPrefix */] + 'TransitionDuration'] = '';
				}

				// Stop autoscroll
				clearInterval(_this.autoscrollInterval);
				_this.autoscrollInterval = null;

				// Update state
				_this.manager.active = null;

				_this.setState({
					sorting: false,
					sortingIndex: null
				});

				if (typeof onSortEnd === 'function') {
					onSortEnd({
						oldIndex: _this.index,
						newIndex: _this.newIndex,
						collection: collection
					}, e);
				}

				_this._touched = false;
			};

			_this.autoscroll = function () {
				var translate = _this.translate;
				var direction = {
					x: 0,
					y: 0
				};
				var speed = {
					x: 1,
					y: 1
				};
				var acceleration = {
					x: 10,
					y: 10
				};

				if (translate.y >= _this.maxTranslate.y - _this.height / 2) {
					direction.y = 1; // Scroll Down
					speed.y = acceleration.y * Math.abs((_this.maxTranslate.y - _this.height / 2 - translate.y) / _this.height);
				} else if (translate.x >= _this.maxTranslate.x - _this.width / 2) {
					direction.x = 1; // Scroll Right
					speed.x = acceleration.x * Math.abs((_this.maxTranslate.x - _this.width / 2 - translate.x) / _this.width);
				} else if (translate.y <= _this.minTranslate.y + _this.height / 2) {
					direction.y = -1; // Scroll Up
					speed.y = acceleration.y * Math.abs((translate.y - _this.height / 2 - _this.minTranslate.y) / _this.height);
				} else if (translate.x <= _this.minTranslate.x + _this.width / 2) {
					direction.x = -1; // Scroll Left
					speed.x = acceleration.x * Math.abs((translate.x - _this.width / 2 - _this.minTranslate.x) / _this.width);
				}

				if (_this.autoscrollInterval) {
					clearInterval(_this.autoscrollInterval);
					_this.autoscrollInterval = null;
					_this.isAutoScrolling = false;
				}

				if (direction.x !== 0 || direction.y !== 0) {
					_this.autoscrollInterval = setInterval(function () {
						_this.isAutoScrolling = true;
						var offset = {
							left: 1 * speed.x * direction.x,
							top: 1 * speed.y * direction.y
						};
						_this.scrollContainer.scrollTop += offset.top;
						_this.scrollContainer.scrollLeft += offset.left;
						_this.translate.x += offset.left;
						_this.translate.y += offset.top;
						_this.animateNodes();
					}, 5);
				}
			};

			_this.manager = new __WEBPACK_IMPORTED_MODULE_11__Manager__["a" /* default */]();
			_this.events = {
				start: _this.handleStart,
				move: _this.handleMove,
				end: _this.handleEnd
			};

			__WEBPACK_IMPORTED_MODULE_10_invariant___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');

			_this.state = {};
			return _this;
		}

		__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(_class, [{
			key: 'getChildContext',
			value: function getChildContext() {
				return {
					manager: this.manager
				};
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var _props = this.props;
				var contentWindow = _props.contentWindow;
				var getContainer = _props.getContainer;
				var useWindowAsScrollContainer = _props.useWindowAsScrollContainer;


				this.container = typeof getContainer === 'function' ? getContainer(this.getWrappedInstance()) : __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(this);
				this.document = this.container.ownerDocument || document;
				this.scrollContainer = useWindowAsScrollContainer ? this.document.body : this.container;
				this.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;

				var _loop = function _loop(key) {
					__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */][key].forEach(function (eventName) {
						return _this2.container.addEventListener(eventName, _this2.events[key], false);
					});
				};

				for (var key in this.events) {
					_loop(key);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var _this3 = this;

				var _loop2 = function _loop2(key) {
					__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* events */][key].forEach(function (eventName) {
						return _this3.container.removeEventListener(eventName, _this3.events[key]);
					});
				};

				for (var key in this.events) {
					_loop2(key);
				}
			}
		}, {
			key: 'getEdgeOffset',
			value: function getEdgeOffset(node) {
				var offset = arguments.length <= 1 || arguments[1] === undefined ? { top: 0, left: 0 } : arguments[1];

				// Get the actual offsetTop / offsetLeft value, no matter how deep the node is nested
				if (node) {
					var nodeOffset = {
						top: offset.top + node.offsetTop,
						left: offset.left + node.offsetLeft
					};
					if (node.parentNode !== this.container) {
						return this.getEdgeOffset(node.parentNode, nodeOffset);
					} else {
						return nodeOffset;
					}
				}
			}
		}, {
			key: 'getOffset',
			value: function getOffset(e) {
				return {
					x: e.touches ? e.touches[0].clientX : e.clientX,
					y: e.touches ? e.touches[0].clientY : e.clientY
				};
			}
		}, {
			key: 'getLockPixelOffsets',
			value: function getLockPixelOffsets() {
				var lockOffset = this.props.lockOffset;


				if (!Array.isArray(lockOffset)) {
					lockOffset = [lockOffset, lockOffset];
				}

				__WEBPACK_IMPORTED_MODULE_10_invariant___default()(lockOffset.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

				var _lockOffset = lockOffset;

				var _lockOffset2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_lockOffset, 2);

				var minLockOffset = _lockOffset2[0];
				var maxLockOffset = _lockOffset2[1];


				return [this.getLockPixelOffset(minLockOffset), this.getLockPixelOffset(maxLockOffset)];
			}
		}, {
			key: 'getLockPixelOffset',
			value: function getLockPixelOffset(lockOffset) {
				var offsetX = lockOffset;
				var offsetY = lockOffset;
				var unit = 'px';

				if (typeof lockOffset === 'string') {
					var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);

					__WEBPACK_IMPORTED_MODULE_10_invariant___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);

					offsetX = offsetY = parseFloat(lockOffset);
					unit = match[1];
				}

				__WEBPACK_IMPORTED_MODULE_10_invariant___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

				if (unit === '%') {
					offsetX = offsetX * this.width / 100;
					offsetY = offsetY * this.height / 100;
				}

				return {
					x: offsetX,
					y: offsetY
				};
			}
		}, {
			key: 'updatePosition',
			value: function updatePosition(e) {
				var _props2 = this.props;
				var lockAxis = _props2.lockAxis;
				var lockToContainerEdges = _props2.lockToContainerEdges;

				var offset = this.getOffset(e);
				var translate = {
					x: offset.x - this.initialOffset.x,
					y: offset.y - this.initialOffset.y
				};
				this.translate = translate;

				if (lockToContainerEdges) {
					var _getLockPixelOffsets = this.getLockPixelOffsets();

					var _getLockPixelOffsets2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_getLockPixelOffsets, 2);

					var minLockOffset = _getLockPixelOffsets2[0];
					var maxLockOffset = _getLockPixelOffsets2[1];

					var minOffset = {
						x: this.width / 2 - minLockOffset.x,
						y: this.height / 2 - minLockOffset.y
					};
					var maxOffset = {
						x: this.width / 2 - maxLockOffset.x,
						y: this.height / 2 - maxLockOffset.y
					};

					translate.x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["g" /* limit */])(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
					translate.y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["g" /* limit */])(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
				}

				switch (lockAxis) {
					case 'x':
						translate.y = 0;
						break;
					case 'y':
						translate.x = 0;
						break;
				}

				this.helper.style[__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* vendorPrefix */] + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px, 0)';
			}
		}, {
			key: 'animateNodes',
			value: function animateNodes() {
				var _props3 = this.props;
				var transitionDuration = _props3.transitionDuration;
				var hideSortableGhost = _props3.hideSortableGhost;

				var nodes = this.manager.getOrderedRefs();
				var deltaScroll = {
					left: this.scrollContainer.scrollLeft - this.initialScroll.left,
					top: this.scrollContainer.scrollTop - this.initialScroll.top
				};
				var sortingOffset = {
					left: this.offsetEdge.left + this.translate.x + deltaScroll.left,
					top: this.offsetEdge.top + this.translate.y + deltaScroll.top
				};
				this.newIndex = null;

				for (var i = 0, len = nodes.length; i < len; i++) {
					var _nodes$i = nodes[i];
					var node = _nodes$i.node;
					var edgeOffset = _nodes$i.edgeOffset;

					var index = node.sortableInfo.index;
					var width = node.offsetWidth;
					var height = node.offsetHeight;
					var offset = {
						width: this.width > width ? width / 2 : this.width / 2,
						height: this.height > height ? height / 2 : this.height / 2
					};
					var translate = {
						x: 0,
						y: 0
					};

					// If we haven't cached the node's offsetTop / offsetLeft value
					if (!edgeOffset) {
						nodes[i].edgeOffset = edgeOffset = this.getEdgeOffset(node);
					}

					// Get a reference to the next and previous node
					var nextNode = i < nodes.length - 1 && nodes[i + 1];
					var prevNode = i > 0 && nodes[i - 1];

					// Also cache the next node's edge offset if needed.
					// We need this for calculating the animation in a grid setup
					if (nextNode && !nextNode.edgeOffset) {
						nextNode.edgeOffset = this.getEdgeOffset(nextNode.node);
					}

					// If the node is the one we're currently animating, skip it
					if (index === this.index) {
						if (hideSortableGhost) {
							/*
        * With windowing libraries such as `react-virtualized`, the sortableGhost
        * node may change while scrolling down and then back up (or vice-versa),
        * so we need to update the reference to the new node just to be safe.
        */
							this.sortableGhost = node;
							node.style.visibility = 'hidden';
						}
						continue;
					}

					if (transitionDuration) {
						node.style[__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* vendorPrefix */] + 'TransitionDuration'] = transitionDuration + 'ms';
					}

					if (this.axis.x) {
						if (this.axis.y) {
							// Calculations for a grid setup
							if (index < this.index && (sortingOffset.left - offset.width <= edgeOffset.left && sortingOffset.top <= edgeOffset.top + offset.height || sortingOffset.top + offset.height <= edgeOffset.top)) {
								// If the current node is to the left on the same row, or above the node that's being dragged
								// then move it to the right
								translate.x = this.width + this.marginOffset.x;
								if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
									// If it moves passed the right bounds, then animate it to the first position of the next row.
									// We just use the offset of the next node to calculate where to move, because that node's original position
									// is exactly where we want to go
									translate.x = nextNode.edgeOffset.left - edgeOffset.left;
									translate.y = nextNode.edgeOffset.top - edgeOffset.top;
								}
								if (this.newIndex === null) {
									this.newIndex = index;
								}
							} else if (index > this.index && (sortingOffset.left + offset.width >= edgeOffset.left && sortingOffset.top + offset.height >= edgeOffset.top || sortingOffset.top + offset.height >= edgeOffset.top + height)) {
								// If the current node is to the right on the same row, or below the node that's being dragged
								// then move it to the left
								translate.x = -(this.width + this.marginOffset.x);
								if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
									// If it moves passed the left bounds, then animate it to the last position of the previous row.
									// We just use the offset of the previous node to calculate where to move, because that node's original position
									// is exactly where we want to go
									translate.x = prevNode.edgeOffset.left - edgeOffset.left;
									translate.y = prevNode.edgeOffset.top - edgeOffset.top;
								}
								this.newIndex = index;
							}
						} else {
							if (index > this.index && sortingOffset.left + offset.width >= edgeOffset.left) {
								translate.x = -(this.width + this.marginOffset.x);
								this.newIndex = index;
							} else if (index < this.index && sortingOffset.left <= edgeOffset.left + offset.width) {
								translate.x = this.width + this.marginOffset.x;
								if (this.newIndex == null) {
									this.newIndex = index;
								}
							}
						}
					} else if (this.axis.y) {
						if (index > this.index && sortingOffset.top + offset.height >= edgeOffset.top) {
							translate.y = -(this.height + this.marginOffset.y);
							this.newIndex = index;
						} else if (index < this.index && sortingOffset.top <= edgeOffset.top + offset.height) {
							translate.y = this.height + this.marginOffset.y;
							if (this.newIndex == null) {
								this.newIndex = index;
							}
						}
					}
					node.style[__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* vendorPrefix */] + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px,0)';
				}

				if (this.newIndex == null) {
					this.newIndex = this.index;
				}
			}
		}, {
			key: 'getWrappedInstance',
			value: function getWrappedInstance() {
				__WEBPACK_IMPORTED_MODULE_10_invariant___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
				return this.refs.wrappedInstance;
			}
		}, {
			key: 'render',
			value: function render() {
				var ref = config.withRef ? 'wrappedInstance' : null;

				return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
					ref: ref
				}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["b" /* omit */])(this.props, 'contentWindow', 'useWindowAsScrollContainer', 'distance', 'helperClass', 'hideSortableGhost', 'transitionDuration', 'useDragHandle', 'pressDelay', 'shouldCancelStart', 'onSortStart', 'onSortMove', 'onSortEnd', 'axis', 'lockAxis', 'lockOffset', 'lockToContainerEdges', 'getContainer')));
			}
		}]);

		return _class;
	}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]), _class.displayName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils__["a" /* provideDisplayName */])('sortableList', WrappedComponent), _class.defaultProps = {
		axis: 'y',
		transitionDuration: 300,
		pressDelay: 0,
		distance: 0,
		useWindowAsScrollContainer: false,
		hideSortableGhost: true,
		contentWindow: typeof window !== 'undefined' ? window : null,
		shouldCancelStart: function shouldCancelStart(e) {
			// Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
			if (['input', 'textarea', 'select', 'option'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
				return true; // Return true to cancel sorting
			}
		},
		lockToContainerEdges: false,
		lockOffset: '50%',
		getHelperDimensions: function getHelperDimensions(_ref) {
			var node = _ref.node;
			return {
				width: node.offsetWidth,
				height: node.offsetHeight
			};
		}
	}, _class.propTypes = {
		axis: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOf(['x', 'y', 'xy']),
		distance: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,
		lockAxis: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,
		helperClass: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,
		transitionDuration: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,
		contentWindow: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].any,
		onSortStart: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,
		onSortMove: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,
		onSortEnd: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,
		shouldCancelStart: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,
		pressDelay: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,
		useDragHandle: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,
		useWindowAsScrollContainer: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,
		hideSortableGhost: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,
		lockToContainerEdges: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,
		lockOffset: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string]))]),
		getContainer: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,
		getHelperDimensions: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func
	}, _class.childContextTypes = {
		manager: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].object.isRequired
	}, _temp;
}

/***/ }),
/* 1333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_invariant__ = __webpack_require__(1255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(936);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortableElement;












// Export Higher Order Sortable Element Component
function sortableElement(WrappedComponent) {
    var _class, _temp;

    var config = arguments.length <= 1 || arguments[1] === undefined ? { withRef: false } : arguments[1];

    return _temp = _class = function (_Component) {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(_class, _Component);

        function _class() {
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, _class);

            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(_class).apply(this, arguments));
        }

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _props = this.props;
                var collection = _props.collection;
                var disabled = _props.disabled;
                var index = _props.index;


                if (!disabled) {
                    this.setDraggable(collection, index);
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (this.props.index !== nextProps.index && this.node) {
                    this.node.sortableInfo.index = nextProps.index;
                }
                if (this.props.disabled !== nextProps.disabled) {
                    var collection = nextProps.collection;
                    var disabled = nextProps.disabled;
                    var index = nextProps.index;

                    if (disabled) {
                        this.removeDraggable(collection);
                    } else {
                        this.setDraggable(collection, index);
                    }
                } else if (this.props.collection !== nextProps.collection) {
                    this.removeDraggable(this.props.collection);
                    this.setDraggable(nextProps.collection, nextProps.index);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var _props2 = this.props;
                var collection = _props2.collection;
                var disabled = _props2.disabled;


                if (!disabled) this.removeDraggable(collection);
            }
        }, {
            key: 'setDraggable',
            value: function setDraggable(collection, index) {
                var node = this.node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_dom__["findDOMNode"])(this);

                node.sortableInfo = {
                    index: index,
                    collection: collection,
                    manager: this.context.manager
                };

                this.ref = { node: node };
                this.context.manager.add(collection, this.ref);
            }
        }, {
            key: 'removeDraggable',
            value: function removeDraggable(collection) {
                this.context.manager.remove(collection, this.ref);
            }
        }, {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
                __WEBPACK_IMPORTED_MODULE_8_invariant___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
                return this.refs.wrappedInstance;
            }
        }, {
            key: 'render',
            value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null;

                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                    ref: ref
                }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["b" /* omit */])(this.props, 'collection', 'disabled', 'index')));
            }
        }]);

        return _class;
    }(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]), _class.displayName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["a" /* provideDisplayName */])('sortableElement', WrappedComponent), _class.contextTypes = {
        manager: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].object.isRequired
    }, _class.propTypes = {
        index: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,
        collection: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string]),
        disabled: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].bool
    }, _class.defaultProps = {
        collection: 0
    }, _temp;
}

/***/ }),
/* 1334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_invariant__ = __webpack_require__(1255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(936);
/* unused harmony export default */












// Export Higher Order Sortable Element Component
function sortableHandle(WrappedComponent) {
    var _class, _temp;

    var config = arguments.length <= 1 || arguments[1] === undefined ? { withRef: false } : arguments[1];

    return _temp = _class = function (_Component) {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(_class, _Component);

        function _class() {
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, _class);

            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(_class).apply(this, arguments));
        }

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_dom__["findDOMNode"])(this);
                node.sortableHandle = true;
            }
        }, {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
                __WEBPACK_IMPORTED_MODULE_8_invariant___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
                return this.refs.wrappedInstance;
            }
        }, {
            key: 'render',
            value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null;
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ ref: ref }, this.props));
            }
        }]);

        return _class;
    }(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]), _class.displayName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["a" /* provideDisplayName */])('sortableHandle', WrappedComponent), _temp;
}

/***/ }),
/* 1335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);








/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ArrowKeyStepper, _Component);

  function ArrowKeyStepper(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ArrowKeyStepper);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ArrowKeyStepper.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ArrowKeyStepper)).call(this, props, context));

    _this.state = {
      scrollToColumn: props.scrollToColumn,
      scrollToRow: props.scrollToRow
    };

    _this._columnStartIndex = 0;
    _this._columnStopIndex = 0;
    _this._rowStartIndex = 0;
    _this._rowStopIndex = 0;

    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ArrowKeyStepper, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var scrollToColumn = nextProps.scrollToColumn;
      var scrollToRow = nextProps.scrollToRow;


      if (this.props.scrollToColumn !== scrollToColumn) {
        this.setState({ scrollToColumn: scrollToColumn });
      }

      if (this.props.scrollToRow !== scrollToRow) {
        this.setState({ scrollToRow: scrollToRow });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var _state = this.state;
      var scrollToColumn = _state.scrollToColumn;
      var scrollToRow = _state.scrollToRow;


      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          className: className,
          onKeyDown: this._onKeyDown
        },
        children({
          onSectionRendered: this._onSectionRendered,
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        })
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _props2 = this.props;
      var columnCount = _props2.columnCount;
      var disabled = _props2.disabled;
      var mode = _props2.mode;
      var rowCount = _props2.rowCount;


      if (disabled) {
        return;
      }

      var _state2 = this.state;
      var scrollToColumnPrevious = _state2.scrollToColumn;
      var scrollToRowPrevious = _state2.scrollToRow;
      var _state3 = this.state;
      var scrollToColumn = _state3.scrollToColumn;
      var scrollToRow = _state3.scrollToRow;

      // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.

      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref) {
      var columnStartIndex = _ref.columnStartIndex;
      var columnStopIndex = _ref.columnStopIndex;
      var rowStartIndex = _ref.rowStartIndex;
      var rowStopIndex = _ref.rowStopIndex;

      this._columnStartIndex = columnStartIndex;
      this._columnStopIndex = columnStopIndex;
      this._rowStartIndex = rowStartIndex;
      this._rowStopIndex = rowStopIndex;
    }
  }]);

  return ArrowKeyStepper;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
/* unused harmony default export */ var _unused_webpack_default_export = (ArrowKeyStepper);
 true ? ArrowKeyStepper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string,
  columnCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,
  disabled: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].bool.isRequired,
  mode: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].oneOf(['cells', 'edges']),
  rowCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,
  scrollToColumn: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,
  scrollToRow: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_detectElementResize__ = __webpack_require__(1762);









/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */

var AutoSizer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AutoSizer, _Component);

  function AutoSizer(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AutoSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AutoSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AutoSizer)).call(this, props));

    _this.state = {
      height: 0,
      width: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Delay access of parentNode until mount.
      // This handles edge-cases where the component has already been unmounted before its ref has been set,
      // As well as libraries like react-lite which have a slightly different lifecycle.
      this._parentNode = this._autoSizer.parentNode;

      // Defer requiring resize handler in order to support server-side rendering.
      // See issue #41
      this._detectElementResize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_detectElementResize__["a" /* default */])();
      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

      this._onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var disableHeight = _props.disableHeight;
      var disableWidth = _props.disableWidth;
      var _state = this.state;
      var height = _state.height;
      var width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };

      if (!disableHeight) {
        outerStyle.height = 0;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          ref: this._setRef,
          style: outerStyle
        },
        children({ height: height, width: width })
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var onResize = this.props.onResize;

      // Gaurd against AutoSizer component being removed from the DOM immediately after being added.
      // This can result in invalid style values which can result in NaN values if we don't handle them.
      // See issue #150 for more context.

      var boundingRect = this._parentNode.getBoundingClientRect();
      var height = boundingRect.height || 0;
      var width = boundingRect.width || 0;

      var style = window.getComputedStyle(this._parentNode) || {};
      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
      var paddingRight = parseInt(style.paddingRight, 10) || 0;
      var paddingTop = parseInt(style.paddingTop, 10) || 0;
      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

      this.setState({
        height: height - paddingTop - paddingBottom,
        width: width - paddingLeft - paddingRight
      });

      onResize({ height: height, width: width });
    }
  }, {
    key: '_setRef',
    value: function _setRef(autoSizer) {
      this._autoSizer = autoSizer;
    }
  }]);

  return AutoSizer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

AutoSizer.defaultProps = {
  onResize: function onResize() {}
};
/* harmony default export */ __webpack_exports__["a"] = (AutoSizer);
 true ? AutoSizer.propTypes = {
  /**
  * Function responsible for rendering children.
  * This function should implement the following signature:
  * ({ height, width }) => PropTypes.element
  */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /** Disable dynamic :height property */
  disableHeight: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].bool,

  /** Disable dynamic :width property */
  disableWidth: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].bool,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired
} : void 0;

/***/ }),
/* 1337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defaultCellSizeCache__ = __webpack_require__(1244);










/**
 * Measures a Grid cell's contents by rendering them in a way that is not visible to the user.
 * Either a fixed width or height may be provided if it is desirable to measure only in one direction.
 */

var CellMeasurer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CellMeasurer, _Component);

  function CellMeasurer(props, state) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CellMeasurer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CellMeasurer)).call(this, props, state));

    _this._cellSizeCache = props.cellSizeCache || new __WEBPACK_IMPORTED_MODULE_8__defaultCellSizeCache__["a" /* default */]();

    _this.getColumnWidth = _this.getColumnWidth.bind(_this);
    _this.getRowHeight = _this.getRowHeight.bind(_this);
    _this.resetMeasurements = _this.resetMeasurements.bind(_this);
    _this.resetMeasurementForColumn = _this.resetMeasurementForColumn.bind(_this);
    _this.resetMeasurementForRow = _this.resetMeasurementForRow.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CellMeasurer, [{
    key: 'getColumnWidth',
    value: function getColumnWidth(_ref) {
      var index = _ref.index;

      var columnWidth = this._cellSizeCache.getColumnWidth(index);
      if (columnWidth != null) {
        return columnWidth;
      }

      var rowCount = this.props.rowCount;


      var maxWidth = 0;

      for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        var _measureCell2 = this._measureCell({
          clientWidth: true,
          columnIndex: index,
          rowIndex: rowIndex
        });

        var width = _measureCell2.width;


        maxWidth = Math.max(maxWidth, width);
      }

      this._cellSizeCache.setColumnWidth(index, maxWidth);

      return maxWidth;
    }
  }, {
    key: 'getRowHeight',
    value: function getRowHeight(_ref2) {
      var index = _ref2.index;

      var rowHeight = this._cellSizeCache.getRowHeight(index);
      if (rowHeight != null) {
        return rowHeight;
      }

      var columnCount = this.props.columnCount;


      var maxHeight = 0;

      for (var columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        var _measureCell3 = this._measureCell({
          clientHeight: true,
          columnIndex: columnIndex,
          rowIndex: index
        });

        var height = _measureCell3.height;


        maxHeight = Math.max(maxHeight, height);
      }

      this._cellSizeCache.setRowHeight(index, maxHeight);

      return maxHeight;
    }
  }, {
    key: 'resetMeasurementForColumn',
    value: function resetMeasurementForColumn(columnIndex) {
      this._cellSizeCache.clearColumnWidth(columnIndex);
    }
  }, {
    key: 'resetMeasurementForRow',
    value: function resetMeasurementForRow(rowIndex) {
      this._cellSizeCache.clearRowHeight(rowIndex);
    }
  }, {
    key: 'resetMeasurements',
    value: function resetMeasurements() {
      this._cellSizeCache.clearAllColumnWidths();
      this._cellSizeCache.clearAllRowHeights();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderAndMount();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var cellSizeCache = this.props.cellSizeCache;


      if (cellSizeCache !== nextProps.cellSizeCache) {
        this._cellSizeCache = nextProps.cellSizeCache;
      }

      this._updateDivDimensions(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unmountContainer();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        getColumnWidth: this.getColumnWidth,
        getRowHeight: this.getRowHeight,
        resetMeasurements: this.resetMeasurements,
        resetMeasurementForColumn: this.resetMeasurementForColumn,
        resetMeasurementForRow: this.resetMeasurementForRow
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_getContainerNode',
    value: function _getContainerNode(props) {
      var container = props.container;


      if (container) {
        return __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(typeof container === 'function' ? container() : container);
      } else {
        return document.body;
      }
    }
  }, {
    key: '_measureCell',
    value: function _measureCell(_ref3) {
      var _ref3$clientHeight = _ref3.clientHeight;
      var clientHeight = _ref3$clientHeight === undefined ? false : _ref3$clientHeight;
      var _ref3$clientWidth = _ref3.clientWidth;
      var clientWidth = _ref3$clientWidth === undefined ? true : _ref3$clientWidth;
      var columnIndex = _ref3.columnIndex;
      var rowIndex = _ref3.rowIndex;
      var cellRenderer = this.props.cellRenderer;


      var rendered = cellRenderer({
        columnIndex: columnIndex,
        index: rowIndex, // Simplify List :rowRenderer use case
        rowIndex: rowIndex
      });

      // Handle edge case where this method is called before the CellMeasurer has completed its initial render (and mounted).
      this._renderAndMount();

      // @TODO Keep an eye on this for future React updates as the interface may change:
      // https://twitter.com/soprano/status/737316379712331776
      __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, rendered, this._div);

      var measurements = {
        height: clientHeight && this._div.clientHeight,
        width: clientWidth && this._div.clientWidth
      };

      __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.unmountComponentAtNode(this._div);

      return measurements;
    }
  }, {
    key: '_renderAndMount',
    value: function _renderAndMount() {
      if (!this._div) {
        this._div = document.createElement('div');
        this._div.style.display = 'inline-block';
        this._div.style.position = 'absolute';
        this._div.style.visibility = 'hidden';
        this._div.style.zIndex = -1;

        this._updateDivDimensions(this.props);

        this._containerNode = this._getContainerNode(this.props);
        this._containerNode.appendChild(this._div);
      }
    }
  }, {
    key: '_unmountContainer',
    value: function _unmountContainer() {
      if (this._div) {
        this._containerNode.removeChild(this._div);

        this._div = null;
      }

      this._containerNode = null;
    }
  }, {
    key: '_updateDivDimensions',
    value: function _updateDivDimensions(props) {
      var height = props.height;
      var width = props.width;


      if (height && height !== this._divHeight) {
        this._divHeight = height;
        this._div.style.height = height + 'px';
      }

      if (width && width !== this._divWidth) {
        this._divWidth = width;
        this._div.style.width = width + 'px';
      }
    }
  }]);

  return CellMeasurer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (CellMeasurer);
 true ? CellMeasurer.propTypes = {
  /**
   * Renders a cell given its indices.
   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
   */
  cellRenderer: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /**
   * Optional, custom caching strategy for cell sizes.
   */
  cellSizeCache: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].object,

  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ getColumnWidth, getRowHeight, resetMeasurements }) => PropTypes.element
   */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /**
   * Number of columns in grid.
   */
  columnCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,

  /**
   * A Node, Component instance, or function that returns either.
   * If this property is not specified the document body will be used.
   */
  container: __WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.func, __WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.node]),

  /**
   * Assign a fixed :height in order to measure dynamic text :width only.
   */
  height: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number,

  /**
   * Number of rows in grid.
   */
  rowCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,

  /**
   * Assign a fixed :width in order to measure dynamic text :height only.
   */
  width: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number
} : void 0;

/***/ }),
/* 1338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CollectionView__ = __webpack_require__(1742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionData__ = __webpack_require__(1746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_getUpdatedOffsetForIndex__ = __webpack_require__(1761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare__);













/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Collection, _Component);

  function Collection(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Collection);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Collection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Collection)).call(this, props, context));

    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];

    // Cell cache during scroll (for perforamnce)
    _this._cellCache = [];

    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
    return _this;
  }

  /** See Collection#recomputeCellSizesAndPositions */


  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Collection, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }

    /** React lifecycle methods */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CollectionView__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: function ref(_ref) {
          _this2._collectionView = _ref;
        }
      }, props));
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }

    /** CellLayoutManager interface */

  }, {
    key: 'calculateSizeAndPositionData',
    value: function calculateSizeAndPositionData() {
      var _props = this.props;
      var cellCount = _props.cellCount;
      var cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter;
      var sectionSize = _props.sectionSize;


      var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionData__["a" /* default */])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }

    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: 'getLastRenderedIndices',
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: 'getScrollPositionForCell',
    value: function getScrollPositionForCell(_ref2) {
      var align = _ref2.align;
      var cellIndex = _ref2.cellIndex;
      var height = _ref2.height;
      var scrollLeft = _ref2.scrollLeft;
      var scrollTop = _ref2.scrollTop;
      var width = _ref2.width;
      var cellCount = this.props.cellCount;


      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];

        scrollLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });

        scrollTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: 'cellRenderers',
    value: function cellRenderers(_ref3) {
      var _this3 = this;

      var height = _ref3.height;
      var isScrolling = _ref3.isScrolling;
      var width = _ref3.width;
      var x = _ref3.x;
      var y = _ref3.y;
      var _props2 = this.props;
      var cellGroupRenderer = _props2.cellGroupRenderer;
      var cellRenderer = _props2.cellRenderer;

      // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });

      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref4) {
          var index = _ref4.index;
          return _this3._sectionManager.getCellMetadata({ index: index });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: '_isScrollingChange',
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }]);

  return Collection;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Collection.defaultProps = {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
};
/* unused harmony default export */ var _unused_webpack_default_export = (Collection);
 true ? Collection.propTypes = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].string,

  /**
   * Number of cells in Collection.
   */
  cellCount: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].number.isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].func.isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].func.isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].func.isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].number
} : void 0;


function defaultCellGroupRenderer(_ref5) {
  var cellCache = _ref5.cellCache;
  var cellRenderer = _ref5.cellRenderer;
  var cellSizeAndPositionGetter = _ref5.cellSizeAndPositionGetter;
  var indices = _ref5.indices;
  var isScrolling = _ref5.isScrolling;

  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({ index: index });

    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };

    // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.
    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}

/***/ }),
/* 1339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColumnSizer, _Component);

  function ColumnSizer(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColumnSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColumnSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColumnSizer)).call(this, props, context));

    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColumnSizer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props;
      var columnMaxWidth = _props.columnMaxWidth;
      var columnMinWidth = _props.columnMinWidth;
      var columnCount = _props.columnCount;
      var width = _props.width;


      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var columnMaxWidth = _props2.columnMaxWidth;
      var columnMinWidth = _props2.columnMinWidth;
      var columnCount = _props2.columnCount;
      var width = _props2.width;


      var safeColumnMinWidth = columnMinWidth || 1;

      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);

      var adjustedWidth = Math.min(width, columnWidth * columnCount);

      return children({
        adjustedWidth: adjustedWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (ColumnSizer);
 true ? ColumnSizer.propTypes = {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number,

  /** Optional minimum allowed column width */
  columnMinWidth: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number,

  /** Number of columns in Grid or Table child */
  columnCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,

  /** Width of Grid or Table child */
  width: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__ = __webpack_require__(1750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__(1749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_createCallbackMemoizer__ = __webpack_require__(1246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__ = __webpack_require__(1751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_dom_helpers_util_scrollbarSize__ = __webpack_require__(1290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_updateScrollIndexHelper__ = __webpack_require__(1752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__defaultCellRangeRenderer__ = __webpack_require__(1341);
/* unused harmony export DEFAULT_SCROLLING_RESET_TIME_INTERVAL */

















/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */

var Grid = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Grid, _Component);

  function Grid(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Grid);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Grid.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Grid)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollDirectionHorizontal: __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */],
      scrollDirectionVertical: __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */],
      scrollLeft: 0,
      scrollTop: 0
    };

    // Invokes onSectionRendered callback only when start/stop row or column indices change
    _this._onGridRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around
    _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this);
    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this);
    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this);

    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

    _this._columnSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_9__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._columnWidthGetter(params);
      },
      estimatedCellSize: _this._getEstimatedColumnSize(props)
    });
    _this._rowSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_9__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._rowHeightGetter(params);
      },
      estimatedCellSize: _this._getEstimatedRowSize(props)
    });

    // See defaultCellRangeRenderer() for more information on the usage of these caches
    _this._cellCache = {};
    _this._styleCache = {};
    return _this;
  }

  /**
   * Pre-measure all columns and rows in a Grid.
   * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
   * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Grid, [{
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props = this.props;
      var columnCount = _props.columnCount;
      var rowCount = _props.rowCount;


      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$columnIndex = _ref.columnIndex;
      var columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex;
      var _ref$rowIndex = _ref.rowIndex;
      var rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

      this._columnSizeAndPositionManager.resetCell(columnIndex);
      this._rowSizeAndPositionManager.resetCell(rowIndex);

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._cellCache = {};
      this._styleCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref2) {
      var columnIndex = _ref2.columnIndex;
      var rowIndex = _ref2.rowIndex;

      var props = this.props;
      this._updateScrollLeftForScrollToColumn(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        scrollToColumn: columnIndex
      }));
      this._updateScrollTopForScrollToRow(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        scrollToRow: rowIndex
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props;
      var scrollLeft = _props2.scrollLeft;
      var scrollToColumn = _props2.scrollToColumn;
      var scrollTop = _props2.scrollTop;
      var scrollToRow = _props2.scrollToRow;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_12_dom_helpers_util_scrollbarSize___default()();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      if (scrollToColumn >= 0 || scrollToRow >= 0) {
        this._updateScrollLeftForScrollToColumn();
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
      });
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props3 = this.props;
      var autoHeight = _props3.autoHeight;
      var columnCount = _props3.columnCount;
      var height = _props3.height;
      var rowCount = _props3.rowCount;
      var scrollToAlignment = _props3.scrollToAlignment;
      var scrollToColumn = _props3.scrollToColumn;
      var scrollToRow = _props3.scrollToRow;
      var width = _props3.width;
      var _state = this.state;
      var scrollLeft = _state.scrollLeft;
      var scrollPositionChangeReason = _state.scrollPositionChangeReason;
      var scrollTop = _state.scrollTop;

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218

      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_updateScrollIndexHelper__["a" /* default */])({
        cellSizeAndPositionManager: this._columnSizeAndPositionManager,
        previousCellsCount: prevProps.columnCount,
        previousCellSize: prevProps.columnWidth,
        previousScrollToAlignment: prevProps.scrollToAlignment,
        previousScrollToIndex: prevProps.scrollToColumn,
        previousSize: prevProps.width,
        scrollOffset: scrollLeft,
        scrollToAlignment: scrollToAlignment,
        scrollToIndex: scrollToColumn,
        size: width,
        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
          return _this2._updateScrollLeftForScrollToColumn(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this2.props, { scrollToColumn: scrollToColumn }));
        }
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_updateScrollIndexHelper__["a" /* default */])({
        cellSizeAndPositionManager: this._rowSizeAndPositionManager,
        previousCellsCount: prevProps.rowCount,
        previousCellSize: prevProps.rowHeight,
        previousScrollToAlignment: prevProps.scrollToAlignment,
        previousScrollToIndex: prevProps.scrollToRow,
        previousSize: prevProps.height,
        scrollOffset: scrollTop,
        scrollToAlignment: scrollToAlignment,
        scrollToIndex: scrollToRow,
        size: height,
        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
          return _this2._updateScrollTopForScrollToRow(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this2.props, { scrollToRow: scrollToRow }));
        }
      });

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()
      this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_12_dom_helpers_util_scrollbarSize___default()();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }

      this._calculateChildrenToRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var _this3 = this;

      if (nextProps.columnCount === 0 && nextState.scrollLeft !== 0 || nextProps.rowCount === 0 && nextState.scrollTop !== 0) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null) {
          newState.scrollLeft = nextProps.scrollLeft;
        }
        if (nextProps.scrollTop != null) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this._setScrollPosition(newState);
      }

      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
        this._styleCache = {};
      }

      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

      this._columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
      });
      this._rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: this._getEstimatedRowSize(nextProps)
      });

      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: this.props.columnCount,
        cellSize: this.props.columnWidth,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: nextProps.columnWidth,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: this.props.scrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollLeftForScrollToColumn(nextProps, nextState);
        }
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: this.props.rowCount,
        cellSize: this.props.rowHeight,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: nextProps.rowHeight,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: this.props.scrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollTopForScrollToRow(nextProps, nextState);
        }
      });

      this._calculateChildrenToRender(nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props4 = this.props;
      var autoContainerWidth = _props4.autoContainerWidth;
      var autoHeight = _props4.autoHeight;
      var className = _props4.className;
      var containerStyle = _props4.containerStyle;
      var height = _props4.height;
      var id = _props4.id;
      var noContentRenderer = _props4.noContentRenderer;
      var style = _props4.style;
      var tabIndex = _props4.tabIndex;
      var width = _props4.width;
      var isScrolling = this.state.isScrolling;


      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          ref: function ref(_ref3) {
            _this4._scrollingContainer = _ref3;
          },
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: 'grid',
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, style),
          tabIndex: tabIndex
        },
        childrenToDisplay.length > 0 && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : ''
            }, containerStyle)
          },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_13_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer;
      var cellRangeRenderer = props.cellRangeRenderer;
      var columnCount = props.columnCount;
      var height = props.height;
      var overscanColumnCount = props.overscanColumnCount;
      var overscanRowCount = props.overscanRowCount;
      var rowCount = props.rowCount;
      var width = props.width;
      var isScrolling = state.isScrolling;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal;
      var scrollDirectionVertical = state.scrollDirectionVertical;
      var scrollLeft = state.scrollLeft;
      var scrollTop = state.scrollTop;


      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["b" /* default */])({
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: this._renderedColumnStartIndex,
          stopIndex: this._renderedColumnStopIndex
        });

        var overscanRowIndices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["b" /* default */])({
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: this._renderedRowStartIndex,
          stopIndex: this._renderedRowStopIndex
        });

        // Store for _invokeOnGridRenderedHelper()
        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
          columnStartIndex: this._columnStartIndex,
          columnStopIndex: this._columnStopIndex,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
          rowStartIndex: this._rowStartIndex,
          rowStopIndex: this._rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceScrollEndedCallback',
    value: function _debounceScrollEndedCallback() {
      this._disablePointerEventsTimeoutId = null;

      var styleCache = this._styleCache;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];
        }
      }

      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: '_invokeOnGridRenderedHelper',
    value: function _invokeOnGridRenderedHelper() {
      var onSectionRendered = this.props.onSectionRendered;


      this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: this._columnStartIndex,
          columnOverscanStopIndex: this._columnStopIndex,
          columnStartIndex: this._renderedColumnStartIndex,
          columnStopIndex: this._renderedColumnStopIndex,
          rowOverscanStartIndex: this._rowStartIndex,
          rowOverscanStopIndex: this._rowStopIndex,
          rowStartIndex: this._renderedRowStartIndex,
          rowStopIndex: this._renderedRowStopIndex
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref4) {
      var _this5 = this;

      var scrollLeft = _ref4.scrollLeft;
      var scrollTop = _ref4.scrollTop;
      var totalColumnsWidth = _ref4.totalColumnsWidth;
      var totalRowsHeight = _ref4.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref5) {
          var scrollLeft = _ref5.scrollLeft;
          var scrollTop = _ref5.scrollTop;
          var _props5 = _this5.props;
          var height = _props5.height;
          var onScroll = _props5.onScroll;
          var width = _props5.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref6) {
      var scrollLeft = _ref6.scrollLeft;
      var scrollTop = _ref6.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["c" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["c" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_wrapPropertyGetter',
    value: function _wrapPropertyGetter(value) {
      return value instanceof Function ? value : function () {
        return value;
      };
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(size) {
      return this._wrapPropertyGetter(size);
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var columnCount = props.columnCount;
      var scrollToAlignment = props.scrollToAlignment;
      var scrollToColumn = props.scrollToColumn;
      var width = props.width;
      var scrollLeft = state.scrollLeft;


      if (scrollToColumn >= 0 && columnCount > 0) {
        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));

        var calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });

        if (scrollLeft !== calculatedScrollLeft) {
          this._setScrollPosition({
            scrollLeft: calculatedScrollLeft
          });
        }
      }
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = props.height;
      var rowCount = props.rowCount;
      var scrollToAlignment = props.scrollToAlignment;
      var scrollToRow = props.scrollToRow;
      var scrollTop = state.scrollTop;


      if (scrollToRow >= 0 && rowCount > 0) {
        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));

        var calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });

        if (scrollTop !== calculatedScrollTop) {
          this._setScrollPosition({
            scrollTop: calculatedScrollTop
          });
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _props6 = this.props;
      var autoHeight = _props6.autoHeight;
      var height = _props6.height;
      var width = _props6.width;

      var scrollbarSize = this._scrollbarSize;
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        var scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["c" /* SCROLL_DIRECTION_BACKWARD */];
        var scrollDirectionVertical = scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_11__utils_getOverscanIndices__["c" /* SCROLL_DIRECTION_BACKWARD */];

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
    }
  }]);

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Grid.defaultProps = {
  'aria-label': 'grid',
  cellRangeRenderer: __WEBPACK_IMPORTED_MODULE_15__defaultCellRangeRenderer__["a" /* default */],
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  overscanColumnCount: 0,
  overscanRowCount: 10,
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  style: {},
  tabIndex: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Grid);
 true ? Grid.propTypes = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  autoContainerWidth: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].bool,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].bool,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
   */
  cellRenderer: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Responsible for rendering a group of cells given their index ranges.
   * Should implement the following interface: ({
   *   cellCache: Map,
   *   cellRenderer: Function,
   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
   *   columnStartIndex: number,
   *   columnStopIndex: number,
   *   isScrolling: boolean,
   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
   *   rowStartIndex: number,
   *   rowStopIndex: number,
   *   scrollLeft: number,
   *   scrollTop: number
   * }): Array<PropTypes.node>
   */
  cellRangeRenderer: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Optional custom CSS class name to attach to root Grid element.
   */
  className: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Number of columns in grid.
   */
  columnCount: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Either a fixed column width (number) or a function that returns the width of a column given its index.
   * Should implement the following interface: (index: number): number
   */
  columnWidth: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func]).isRequired,

  /** Optional inline style applied to inner cell-container */
  containerStyle: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].object,

  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  estimatedColumnSize: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
   */
  height: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Optional custom id to attach to root Grid element.
   */
  id: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
   */
  noContentRenderer: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Callback invoked with information about the section of the Grid that was just rendered.
   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
   */
  onSectionRendered: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanColumnCount: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanRowCount: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  rowHeight: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func]).isRequired,

  /**
   * Number of rows in grid.
   */
  rowCount: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  scrollingResetTimeInterval: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /** Horizontal offset. */
  scrollLeft: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Column index to ensure visible (by forcefully scrolling if necessary)
   */
  scrollToColumn: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /** Vertical offset. */
  scrollTop: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Row index to ensure visible (by forcefully scrolling if necessary)
   */
  scrollToRow: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /** Optional inline style */
  style: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].object,

  /** Tab index for focus */
  tabIndex: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
   */
  width: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRangeRenderer;

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache;
  var cellRenderer = _ref.cellRenderer;
  var columnSizeAndPositionManager = _ref.columnSizeAndPositionManager;
  var columnStartIndex = _ref.columnStartIndex;
  var columnStopIndex = _ref.columnStopIndex;
  var horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment;
  var isScrolling = _ref.isScrolling;
  var rowSizeAndPositionManager = _ref.rowSizeAndPositionManager;
  var rowStartIndex = _ref.rowStartIndex;
  var rowStopIndex = _ref.rowStopIndex;
  var scrollLeft = _ref.scrollLeft;
  var scrollTop = _ref.scrollTop;
  var styleCache = _ref.styleCache;
  var verticalOffsetAdjustment = _ref.verticalOffsetAdjustment;
  var visibleColumnIndices = _ref.visibleColumnIndices;
  var visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];
  var offsetAdjusted = verticalOffsetAdjustment || horizontalOffsetAdjustment;
  var canCacheStyle = !isScrolling || !offsetAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        style = {
          height: rowDatum.size,
          left: columnDatum.offset + horizontalOffsetAdjustment,
          position: 'absolute',
          top: rowDatum.offset + verticalOffsetAdjustment,
          width: columnDatum.size
        };

        styleCache[key] = style;
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

/***/ }),
/* 1342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__ = __webpack_require__(1246);
/* unused harmony export isRangeVisible */
/* unused harmony export scanForUnloadedRanges */
/* unused harmony export forceUpdateReactVirtualizedComponent */









/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(InfiniteLoader, _Component);

  function InfiniteLoader(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, InfiniteLoader);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfiniteLoader.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(InfiniteLoader, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;


      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var _this3 = this;

      var startIndex = _ref.startIndex;
      var stopIndex = _ref.stopIndex;
      var _props = this.props;
      var isRowLoaded = _props.isRowLoaded;
      var minimumBatchSize = _props.minimumBatchSize;
      var rowCount = _props.rowCount;
      var threshold = _props.threshold;


      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
      }, []);

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
/* unused harmony default export */ var _unused_webpack_default_export = (InfiniteLoader);
 true ? InfiniteLoader.propTypes = {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].number.isRequired
} : void 0;
function isRangeVisible(_ref2) {
  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex;
  var lastRenderedStopIndex = _ref2.lastRenderedStopIndex;
  var startIndex = _ref2.startIndex;
  var stopIndex = _ref2.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref3) {
  var isRowLoaded = _ref3.isRowLoaded;
  var minimumBatchSize = _ref3.minimumBatchSize;
  var rowCount = _ref3.rowCount;
  var startIndex = _ref3.startIndex;
  var stopIndex = _ref3.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component);
  } else {
    component.forceUpdate();
  }
}

/***/ }),
/* 1343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(1798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Grid__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare__);













/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(List, _Component);

  function List(props, context) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, List);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (List.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(List)).call(this, props, context));

    _this._cellRenderer = _this._cellRenderer.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      this.Grid.forceUpdate();
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      this.Grid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.recomputeGridSize({
        rowIndex: index
      });
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var noRowsRenderer = _props.noRowsRenderer;
      var scrollToIndex = _props.scrollToIndex;
      var width = _props.width;


      var classNames = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ReactVirtualized__List', className);

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: function ref(_ref) {
          _this2.Grid = _ref;
        },
        scrollToRow: scrollToIndex
      }));
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_11_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_cellRenderer',
    value: function _cellRenderer(_ref2) {
      var rowIndex = _ref2.rowIndex;
      var style = _ref2.style;

      var rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['rowIndex', 'style']);

      var rowRenderer = this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(style, 'width');

      var writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        index: rowIndex,
        style: style
      }, rest));
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref3) {
      var clientHeight = _ref3.clientHeight;
      var scrollHeight = _ref3.scrollHeight;
      var scrollTop = _ref3.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex;
      var rowOverscanStopIndex = _ref4.rowOverscanStopIndex;
      var rowStartIndex = _ref4.rowStartIndex;
      var rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

List.defaultProps = {
  estimatedRowSize: 30,
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (List);
 true ? List.propTypes = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].bool,

  /** Optional CSS class name */
  className: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].string,

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number.isRequired,

  /** Height constraint for list (determines how many actual rows are rendered) */
  height: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number.isRequired,

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].func.isRequired,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].func]).isRequired,

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].func.isRequired,

  /** Number of rows in list. */
  rowCount: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number.isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number,

  /** Vertical offset. */
  scrollTop: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number,

  /** Optional inline style */
  style: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].object,

  /** Tab index for focus */
  tabIndex: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number,

  /** Width of list */
  width: __WEBPACK_IMPORTED_MODULE_9_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Grid__ = __webpack_require__(937);











/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(MultiGrid, _Component);

  function MultiGrid(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MultiGrid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MultiGrid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(MultiGrid)).call(this, props, context));

    _this.state = {
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._bottomLeftGridRef = _this._bottomLeftGridRef.bind(_this);
    _this._bottomRightGridRef = _this._bottomRightGridRef.bind(_this);
    _this._cellRendererBottomLeftGrid = _this._cellRendererBottomLeftGrid.bind(_this);
    _this._cellRendererBottomRightGrid = _this._cellRendererBottomRightGrid.bind(_this);
    _this._cellRendererTopRightGrid = _this._cellRendererTopRightGrid.bind(_this);
    _this._columnWidthRightGrid = _this._columnWidthRightGrid.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._rowHeightBottomGrid = _this._rowHeightBottomGrid.bind(_this);
    _this._topLeftGridRef = _this._topLeftGridRef.bind(_this);
    _this._topRightGridRef = _this._topRightGridRef.bind(_this);
    return _this;
  }

  /** See Grid#measureAllCells */


  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(MultiGrid, [{
    key: 'measureAllCells',
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }

    /** See issue #546 */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      console.warn('MultiGrid measureAllRows() is deprecated; use measureAllCells() instead.');

      this.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$columnIndex = _ref.columnIndex;
      var columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex;
      var _ref$rowIndex = _ref.rowIndex;
      var rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;
      var _props = this.props;
      var fixedColumnCount = _props.fixedColumnCount;
      var fixedRowCount = _props.fixedRowCount;


      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);

      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });

      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(null, this.props);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._maybeCalculateCachedStyles(null, this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props2 = this.props;
      var columnWidth = _props2.columnWidth;
      var fixedColumnCount = _props2.fixedColumnCount;
      var fixedRowCount = _props2.fixedRowCount;
      var rowHeight = _props2.rowHeight;


      if (columnWidth !== nextProps.columnWidth || fixedColumnCount !== nextProps.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (fixedRowCount !== nextProps.fixedRowCount || rowHeight !== nextProps.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var onScroll = _props3.onScroll;
      var onSectionRendered = _props3.onSectionRendered;
      var scrollLeftProp = _props3.scrollLeft;
      var scrollToColumn = _props3.scrollToColumn;
      var scrollTopProp = _props3.scrollTop;
      var scrollToRow = _props3.scrollToRow;

      var rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props3, ['onScroll', 'onSectionRendered', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);

      // scrollTop and scrollToRow props are explicitly filtered out and ignored

      var _state = this.state;
      var scrollLeft = _state.scrollLeft;
      var scrollTop = _state.scrollTop;


      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { style: this._containerOuterStyle },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { style: this._containerTopStyle },
          this._renderTopLeftGrid(rest),
          this._renderTopRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            scrollLeft: scrollLeft
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { style: this._containerBottomStyle },
          this._renderBottomLeftGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            scrollTop: scrollTop
          })),
          this._renderBottomRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            onSectionRendered: onSectionRendered,
            scrollLeft: scrollLeft,
            scrollToColumn: scrollToColumn,
            scrollToRow: scrollToRow,
            scrollTop: scrollTop
          }))
        )
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_bottomLeftGridRef',
    value: function _bottomLeftGridRef(ref) {
      this._bottomLeftGrid = ref;
    }
  }, {
    key: '_bottomRightGridRef',
    value: function _bottomRightGridRef(ref) {
      this._bottomRightGrid = ref;
    }
  }, {
    key: '_cellRendererBottomLeftGrid',
    value: function _cellRendererBottomLeftGrid(_ref2) {
      var rowIndex = _ref2.rowIndex;

      var rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['rowIndex']);

      var _props4 = this.props;
      var cellRenderer = _props4.cellRenderer;
      var fixedRowCount = _props4.fixedRowCount;


      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: '_cellRendererBottomRightGrid',
    value: function _cellRendererBottomRightGrid(_ref3) {
      var columnIndex = _ref3.columnIndex;
      var rowIndex = _ref3.rowIndex;

      var rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['columnIndex', 'rowIndex']);

      var _props5 = this.props;
      var cellRenderer = _props5.cellRenderer;
      var fixedColumnCount = _props5.fixedColumnCount;
      var fixedRowCount = _props5.fixedRowCount;


      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: '_cellRendererTopRightGrid',
    value: function _cellRendererTopRightGrid(_ref4) {
      var columnIndex = _ref4.columnIndex;

      var rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['columnIndex']);

      var _props6 = this.props;
      var cellRenderer = _props6.cellRenderer;
      var fixedColumnCount = _props6.fixedColumnCount;


      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount
      }));
    }
  }, {
    key: '_columnWidthRightGrid',
    value: function _columnWidthRightGrid(_ref5) {
      var index = _ref5.index;
      var _props7 = this.props;
      var fixedColumnCount = _props7.fixedColumnCount;
      var columnWidth = _props7.columnWidth;


      return columnWidth instanceof Function ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
    }
  }, {
    key: '_getBottomGridHeight',
    value: function _getBottomGridHeight(props) {
      var height = props.height;


      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: '_getLeftGridWidth',
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount;
      var columnWidth = props.columnWidth;


      if (this._leftGridWidth == null) {
        if (columnWidth instanceof Function) {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({ index: index });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: '_getRightGridWidth',
    value: function _getRightGridWidth(props) {
      var width = props.width;


      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: '_getTopGridHeight',
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount;
      var rowHeight = props.rowHeight;


      if (this._topGridHeight == null) {
        if (rowHeight instanceof Function) {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({ index: index });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }

    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: '_maybeCalculateCachedStyles',
    value: function _maybeCalculateCachedStyles(prevProps, props) {
      var columnWidth = props.columnWidth;
      var height = props.height;
      var fixedColumnCount = props.fixedColumnCount;
      var fixedRowCount = props.fixedRowCount;
      var rowHeight = props.rowHeight;
      var style = props.style;
      var styleBottomLeftGrid = props.styleBottomLeftGrid;
      var styleBottomRightGrid = props.styleBottomRightGrid;
      var styleTopLeftGrid = props.styleTopLeftGrid;
      var styleTopRightGrid = props.styleTopRightGrid;
      var width = props.width;


      var firstRender = !prevProps;
      var sizeChange = firstRender || height !== prevProps.height || width !== prevProps.width;
      var leftSizeChange = firstRender || columnWidth !== prevProps.columnWidth || fixedColumnCount !== prevProps.fixedColumnCount;
      var topSizeChange = firstRender || fixedRowCount !== prevProps.fixedRowCount || rowHeight !== prevProps.rowHeight;

      if (firstRender || sizeChange || style !== prevProps.style) {
        this._containerOuterStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          height: height,
          width: width
        }, style);
      }

      if (firstRender || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(props),
          position: 'relative',
          width: width
        };

        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(props),
          overflow: 'hidden',
          position: 'relative',
          width: width
        };
      }

      if (firstRender || styleBottomLeftGrid !== prevProps.styleBottomLeftGrid) {
        this._bottomLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          outline: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (firstRender || leftSizeChange || styleBottomRightGrid !== prevProps.styleBottomRightGrid) {
        this._bottomRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          outline: 0,
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (firstRender || styleTopLeftGrid !== prevProps.styleTopLeftGrid) {
        this._topLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          outline: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (firstRender || leftSizeChange || styleTopRightGrid !== prevProps.styleTopRightGrid) {
        this._topRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          outline: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;
      var scrollTop = scrollInfo.scrollTop;

      this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = this.props.onScroll;
      if (onScroll) {
        onScroll(scrollInfo);
      }
    }
  }, {
    key: '_renderBottomLeftGrid',
    value: function _renderBottomLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount;
      var fixedRowCount = props.fixedRowCount;
      var rowCount = props.rowCount;
      var scrollTop = props.scrollTop;


      if (!fixedColumnCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getBottomGridHeight(props),
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollTop: scrollTop,
        style: this._bottomLeftGridStyle,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderBottomRightGrid',
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount;
      var fixedColumnCount = props.fixedColumnCount;
      var fixedRowCount = props.fixedRowCount;
      var rowCount = props.rowCount;
      var scrollToColumn = props.scrollToColumn;
      var scrollToRow = props.scrollToRow;


      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopLeftGrid',
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount;
      var fixedRowCount = props.fixedRowCount;


      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopRightGrid',
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount;
      var fixedColumnCount = props.fixedColumnCount;
      var fixedRowCount = props.fixedRowCount;
      var scrollLeft = props.scrollLeft;


      if (!fixedRowCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        height: this._getTopGridHeight(props),
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: this._topRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_rowHeightBottomGrid',
    value: function _rowHeightBottomGrid(_ref6) {
      var index = _ref6.index;
      var _props8 = this.props;
      var fixedRowCount = _props8.fixedRowCount;
      var rowHeight = _props8.rowHeight;


      return rowHeight instanceof Function ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
    }
  }, {
    key: '_topLeftGridRef',
    value: function _topLeftGridRef(ref) {
      this._topLeftGrid = ref;
    }
  }, {
    key: '_topRightGridRef',
    value: function _topRightGridRef(ref) {
      this._topRightGrid = ref;
    }
  }]);

  return MultiGrid;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

MultiGrid.defaultProps = {
  fixedColumnCount: 0,
  fixedRowCount: 0,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (MultiGrid);
 true ? MultiGrid.propTypes = {
  fixedColumnCount: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].number.isRequired,
  fixedRowCount: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].number.isRequired,
  style: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].object.isRequired,
  styleBottomLeftGrid: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].object.isRequired,
  styleBottomRightGrid: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].object.isRequired,
  styleTopLeftGrid: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].object.isRequired,
  styleTopRightGrid: __WEBPACK_IMPORTED_MODULE_7_react__["PropTypes"].object.isRequired
} : void 0;

/***/ }),
/* 1345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollSync, _Component);

  function ScrollSync(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollSync);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollSync.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state;
      var clientHeight = _state.clientHeight;
      var clientWidth = _state.clientWidth;
      var scrollHeight = _state.scrollHeight;
      var scrollLeft = _state.scrollLeft;
      var scrollTop = _state.scrollTop;
      var scrollWidth = _state.scrollWidth;


      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_6_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight;
      var clientWidth = _ref.clientWidth;
      var scrollHeight = _ref.scrollHeight;
      var scrollLeft = _ref.scrollLeft;
      var scrollTop = _ref.scrollTop;
      var scrollWidth = _ref.scrollWidth;

      this.setState({ clientHeight: clientHeight, clientWidth: clientWidth, scrollHeight: scrollHeight, scrollLeft: scrollLeft, scrollTop: scrollTop, scrollWidth: scrollWidth });
    }
  }]);

  return ScrollSync;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (ScrollSync);
 true ? ScrollSync.propTypes = {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired
} : void 0;

/***/ }),
/* 1346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultHeaderRenderer__ = __webpack_require__(1351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultCellRenderer__ = __webpack_require__(1350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaultCellDataGetter__ = __webpack_require__(1349);









/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Column, _Component);

  function Column() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Column);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Column.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Column)).apply(this, arguments));
  }

  return Column;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

Column.defaultProps = {
  cellDataGetter: __WEBPACK_IMPORTED_MODULE_7__defaultCellDataGetter__["a" /* default */],
  cellRenderer: __WEBPACK_IMPORTED_MODULE_6__defaultCellRenderer__["a" /* default */],
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: __WEBPACK_IMPORTED_MODULE_5__defaultHeaderRenderer__["a" /* default */],
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Column);
 true ? Column.propTypes = {
  /** Optional aria-label value to set on the column header */
  'aria-label': __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].string,

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].func,

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].func,

  /** Optional CSS class to apply to cell */
  className: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].string,

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].object,

  /** Uniquely identifies the row-data attribute correspnding to this cell */
  dataKey: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].any.isRequired,

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].bool,

  /** Flex grow style; defaults to 0 */
  flexGrow: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].number,

  /** Flex shrink style; defaults to 1 */
  flexShrink: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].number,

  /** Optional CSS class to apply to this column's header */
  headerClassName: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].string,

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].func.isRequired,

  /** Header label for this column */
  label: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].string,

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].number,

  /** Minimum width of column. */
  minWidth: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].number,

  /** Optional inline style to apply to cell */
  style: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].object,

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: __WEBPACK_IMPORTED_MODULE_4_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SortDirection__ = __webpack_require__(1245);
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIndicator;




/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === __WEBPACK_IMPORTED_MODULE_2__SortDirection__["a" /* default */].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === __WEBPACK_IMPORTED_MODULE_2__SortDirection__["a" /* default */].DESC
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    {
      className: classNames,
      width: 18,
      height: 18,
      viewBox: '0 0 24 24'
    },
    sortDirection === __WEBPACK_IMPORTED_MODULE_2__SortDirection__["a" /* default */].ASC ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M7 14l5-5 5 5z' }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M7 10l5 5 5-5z' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
}

 true ? SortIndicator.propTypes = {
  sortDirection: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOf([__WEBPACK_IMPORTED_MODULE_2__SortDirection__["a" /* default */].ASC, __WEBPACK_IMPORTED_MODULE_2__SortDirection__["a" /* default */].DESC])
} : void 0;

/***/ }),
/* 1348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Column__ = __webpack_require__(1346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Grid__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__ = __webpack_require__(1352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__SortDirection__ = __webpack_require__(1245);















/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Table, _Component);

  function Table(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Table);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Table.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      this.Grid.forceUpdate();
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      this.Grid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.recomputeGridSize({
        rowIndex: index
      });
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var disableHeader = _props.disableHeader;
      var gridClassName = _props.gridClassName;
      var gridStyle = _props.gridStyle;
      var headerHeight = _props.headerHeight;
      var height = _props.height;
      var id = _props.id;
      var noRowsRenderer = _props.noRowsRenderer;
      var rowClassName = _props.rowClassName;
      var rowStyle = _props.rowStyle;
      var scrollToIndex = _props.scrollToIndex;
      var style = _props.style;
      var width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = rowClassName instanceof Function ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = rowStyle instanceof Function ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      __WEBPACK_IMPORTED_MODULE_8_react___default.a.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, flexStyles, {
          overflow: 'hidden'
        });
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table', className),
          id: id,
          style: style
        },
        !disableHeader && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerRow', rowClass),
            style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rowStyleObject, {
              height: headerHeight,
              overflow: 'hidden',
              paddingRight: scrollbarWidth,
              width: width
            })
          },
          this._getRenderedHeaderRow()
        ),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
          autoContainerWidth: true,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: this._createRow,
          columnWidth: width,
          columnCount: 1,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          onSectionRendered: this._onSectionRendered,
          ref: function ref(_ref) {
            _this2.Grid = _ref;
          },
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref2) {
      var column = _ref2.column;
      var columnIndex = _ref2.columnIndex;
      var isScrolling = _ref2.isScrolling;
      var rowData = _ref2.rowData;
      var rowIndex = _ref2.rowIndex;
      var _column$props = column.props;
      var cellDataGetter = _column$props.cellDataGetter;
      var cellRenderer = _column$props.cellRenderer;
      var className = _column$props.className;
      var columnData = _column$props.columnData;
      var dataKey = _column$props.dataKey;


      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({ cellData: cellData, columnData: columnData, dataKey: dataKey, isScrolling: isScrolling, rowData: rowData, rowIndex: rowIndex });

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        {
          key: 'Row' + rowIndex + '-Col' + columnIndex,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__rowColumn', className),
          style: style,
          title: title
        },
        renderedCell
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref3) {
      var column = _ref3.column;
      var index = _ref3.index;
      var _props2 = this.props;
      var headerClassName = _props2.headerClassName;
      var headerStyle = _props2.headerStyle;
      var onHeaderClick = _props2.onHeaderClick;
      var sort = _props2.sort;
      var sortBy = _props2.sortBy;
      var sortDirection = _props2.sortDirection;
      var _column$props2 = column.props;
      var dataKey = _column$props2.dataKey;
      var disableSort = _column$props2.disableSort;
      var headerRenderer = _column$props2.headerRenderer;
      var label = _column$props2.label;
      var columnData = _column$props2.columnData;

      var sortEnabled = !disableSort && sort;

      var classNames = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        'ReactVirtualized__Table__sortableHeaderColumn': sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, headerStyle);

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var a11yProps = {};

      if (sortEnabled || onHeaderClick) {
        (function () {
          // If this is a sortable header, clicking it should update the table data's sorting.
          var newSortDirection = sortBy !== dataKey || sortDirection === __WEBPACK_IMPORTED_MODULE_13__SortDirection__["a" /* default */].DESC ? __WEBPACK_IMPORTED_MODULE_13__SortDirection__["a" /* default */].ASC : __WEBPACK_IMPORTED_MODULE_13__SortDirection__["a" /* default */].DESC;

          var onClick = function onClick() {
            sortEnabled && sort({
              sortBy: dataKey,
              sortDirection: newSortDirection
            });
            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey });
          };

          var onKeyDown = function onKeyDown(event) {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick();
            }
          };

          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
          a11yProps.role = 'rowheader';
          a11yProps.tabIndex = 0;
          a11yProps.onClick = onClick;
          a11yProps.onKeyDown = onKeyDown;
        })();
      }

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
          key: 'Header-Col' + index,
          className: classNames,
          style: style
        }),
        renderedHeader
      );
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref4) {
      var _this3 = this;

      var index = _ref4.rowIndex;
      var isScrolling = _ref4.isScrolling;
      var key = _ref4.key;
      var style = _ref4.style;
      var _props3 = this.props;
      var children = _props3.children;
      var onRowClick = _props3.onRowClick;
      var onRowDoubleClick = _props3.onRowDoubleClick;
      var onRowMouseOver = _props3.onRowMouseOver;
      var onRowMouseOut = _props3.onRowMouseOut;
      var rowClassName = _props3.rowClassName;
      var rowGetter = _props3.rowGetter;
      var rowRenderer = _props3.rowRenderer;
      var rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;


      var rowClass = rowClassName instanceof Function ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = rowStyle instanceof Function ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = __WEBPACK_IMPORTED_MODULE_8_react___default.a.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, rowStyleObject, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      });

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getRenderedHeaderRow',
    value: function _getRenderedHeaderRow() {
      var _this4 = this;

      var _props4 = this.props;
      var children = _props4.children;
      var disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : __WEBPACK_IMPORTED_MODULE_8_react___default.a.Children.toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return rowHeight instanceof Function ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref5) {
      var clientHeight = _ref5.clientHeight;
      var scrollHeight = _ref5.scrollHeight;
      var scrollTop = _ref5.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref6) {
      var rowOverscanStartIndex = _ref6.rowOverscanStartIndex;
      var rowOverscanStopIndex = _ref6.rowOverscanStopIndex;
      var rowStartIndex = _ref6.rowStartIndex;
      var rowStopIndex = _ref6.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      var Grid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_dom__["findDOMNode"])(this.Grid);
      var clientWidth = Grid.clientWidth || 0;
      var offsetWidth = Grid.offsetWidth || 0;
      var scrollbarWidth = offsetWidth - clientWidth;

      this.setState({ scrollbarWidth: scrollbarWidth });
    }
  }]);

  return Table;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanRowCount: 10,
  rowRenderer: __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__["a" /* default */],
  rowStyle: {},
  scrollToAlignment: 'auto',
  style: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (Table);
 true ? Table.propTypes = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,

  /** One or more Columns describing the data displayed in this row */
  children: function children(props, propName, componentName) {
    var children = __WEBPACK_IMPORTED_MODULE_8_react___default.a.Children.toArray(props.children);
    for (var i = 0; i < children.length; i++) {
      if (children[i].type !== __WEBPACK_IMPORTED_MODULE_7__Column__["a" /* default */]) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /** Disable rendering the header at all */
  disableHeader: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].bool,

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].object,

  /** Optional CSS class to apply to all column headers */
  headerClassName: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /** Fixed height of header row */
  headerHeight: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired,

  /** Fixed/available height for out DOM element */
  height: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired,

  /** Optional id */
  id: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
  * Optional callback when a column's header is clicked.
  * ({ columnData: any, dataKey: string }): void
  */
  onHeaderClick: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].object,

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func]).isRequired,

  /** Number of rows in table. */
  rowCount: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /** Optional custom inline style to attach to table rows. */
  rowStyle: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].object, __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,

  /** Vertical offset. */
  scrollTop: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,

  /**
   * Sort function to be called if a sortable header is clicked.
   * ({ sortBy: string, sortDirection: SortDirection }): void
   */
  sort: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].func,

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].string,

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].oneOf([__WEBPACK_IMPORTED_MODULE_13__SortDirection__["a" /* default */].ASC, __WEBPACK_IMPORTED_MODULE_13__SortDirection__["a" /* default */].DESC]),

  /** Optional inline style */
  style: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].object,

  /** Tab index for focus */
  tabIndex: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number,

  /** Width of list */
  width: __WEBPACK_IMPORTED_MODULE_8_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellDataGetter;


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var columnData = _ref.columnData;
  var dataKey = _ref.dataKey;
  var rowData = _ref.rowData;

  if (rowData.get instanceof Function) {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

/***/ }),
/* 1350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRenderer;


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;
  var cellDataKey = _ref.cellDataKey;
  var columnData = _ref.columnData;
  var rowData = _ref.rowData;
  var rowIndex = _ref.rowIndex;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

/***/ }),
/* 1351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortIndicator__ = __webpack_require__(1347);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRenderer;




/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var columnData = _ref.columnData;
  var dataKey = _ref.dataKey;
  var disableSort = _ref.disableSort;
  var label = _ref.label;
  var sortBy = _ref.sortBy;
  var sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      className: 'ReactVirtualized__Table__headerTruncatedText',
      key: 'label',
      title: label
    },
    label
  )];

  if (showSortIndicator) {
    children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SortIndicator__["a" /* default */], {
      key: 'SortIndicator',
      sortDirection: sortDirection
    }));
  }

  return children;
}

/***/ }),
/* 1352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultRowRenderer;




/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className;
  var columns = _ref.columns;
  var index = _ref.index;
  var isScrolling = _ref.isScrolling;
  var key = _ref.key;
  var onRowClick = _ref.onRowClick;
  var onRowDoubleClick = _ref.onRowDoubleClick;
  var onRowMouseOver = _ref.onRowMouseOver;
  var onRowMouseOut = _ref.onRowMouseOut;
  var rowData = _ref.rowData;
  var style = _ref.style;

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) {
    a11yProps['aria-label'] = 'row';
    a11yProps.role = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function () {
        return onRowClick({ index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function () {
        return onRowDoubleClick({ index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function () {
        return onRowMouseOut({ index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function () {
        return onRowMouseOver({ index: index, rowData: rowData });
      };
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
      className: className,
      key: key,
      style: style
    }),
    columns
  );
}

/***/ }),
/* 1353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_onScroll__ = __webpack_require__(1354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_dimensions__ = __webpack_require__(1759);











var WindowScroller = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WindowScroller, _Component);

  function WindowScroller(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WindowScroller);

    // Handle server-side rendering case
    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WindowScroller.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WindowScroller)).call(this, props));

    var height = typeof window !== 'undefined' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getHeight */])(props.scrollElement || window) : 0;

    _this.state = {
      height: height,
      isScrolling: false,
      scrollTop: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
    return _this;
  }

  // Can’t use defaultProps for scrollElement without breaking server-side rendering


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition(scrollElement) {
      var onResize = this.props.onResize;
      var height = this.state.height;


      scrollElement = scrollElement || this.props.scrollElement || window;
      this._positionFromTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["b" /* getPositionFromTop */])(__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this), scrollElement);

      var newHeight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getHeight */])(scrollElement);
      if (height !== newHeight) {
        this.setState({
          height: newHeight
        });
        onResize({
          height: newHeight
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement || window;

      this.updatePosition(scrollElement);

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, scrollElement);

      window.addEventListener('resize', this._onResize, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollElement = this.props.scrollElement || window;
      var nextScrollElement = nextProps.scrollElement || window;

      if (scrollElement !== nextScrollElement) {
        this.updatePosition(nextScrollElement);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, scrollElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, nextScrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, this.props.scrollElement || window);

      window.removeEventListener('resize', this._onResize, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state;
      var isScrolling = _state.isScrolling;
      var scrollTop = _state.scrollTop;
      var height = _state.height;


      return children({
        height: height,
        isScrolling: isScrolling,
        scrollTop: scrollTop
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_7_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: '_onResize',
    value: function _onResize(event) {
      this.updatePosition();
    }

    // Referenced by utils/onScroll

  }, {
    key: '__handleWindowScrollEvent',
    value: function __handleWindowScrollEvent(event) {
      var onScroll = this.props.onScroll;


      var scrollElement = this.props.scrollElement || window;
      var scrollTop = Math.max(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["c" /* getScrollTop */])(scrollElement) - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollTop: scrollTop
      });

      onScroll({
        scrollTop: scrollTop
      });
    }

    // Referenced by utils/onScroll

  }, {
    key: '__resetIsScrolling',
    value: function __resetIsScrolling() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: 'scrollElement',
    get: function get() {
      return this.props.scrollElement || window;
    }
  }]);

  return WindowScroller;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (WindowScroller);
 true ? WindowScroller.propTypes = {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollTop }) => PropTypes.element
   */
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /** Callback to be invoked on-resize: ({ height }) */
  onResize: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /** Callback to be invoked on-scroll: ({ scrollTop }) */
  onScroll: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].any
} : void 0;

/***/ }),
/* 1354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IS_SCROLLING_TIMEOUT */
/* harmony export (immutable) */ __webpack_exports__["a"] = registerScrollListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = unregisterScrollListener;
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    document.body.style.pointerEvents = originalBodyPointerEvents;

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    clearTimeout(disablePointerEventsTimeoutId);
  }

  disablePointerEventsTimeoutId = setTimeout(enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent(event);
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      clearTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),
/* 1355 */,
/* 1356 */,
/* 1357 */,
/* 1358 */,
/* 1359 */,
/* 1360 */,
/* 1361 */,
/* 1362 */,
/* 1363 */,
/* 1364 */,
/* 1365 */,
/* 1366 */,
/* 1367 */,
/* 1368 */,
/* 1369 */,
/* 1370 */,
/* 1371 */,
/* 1372 */,
/* 1373 */,
/* 1374 */,
/* 1375 */,
/* 1376 */,
/* 1377 */,
/* 1378 */,
/* 1379 */,
/* 1380 */,
/* 1381 */,
/* 1382 */,
/* 1383 */,
/* 1384 */,
/* 1385 */,
/* 1386 */,
/* 1387 */,
/* 1388 */,
/* 1389 */,
/* 1390 */,
/* 1391 */,
/* 1392 */,
/* 1393 */,
/* 1394 */,
/* 1395 */,
/* 1396 */,
/* 1397 */,
/* 1398 */,
/* 1399 */,
/* 1400 */,
/* 1401 */,
/* 1402 */,
/* 1403 */,
/* 1404 */,
/* 1405 */,
/* 1406 */,
/* 1407 */,
/* 1408 */,
/* 1409 */,
/* 1410 */,
/* 1411 */,
/* 1412 */,
/* 1413 */,
/* 1414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TextArea_TextArea__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Button_Button__ = __webpack_require__(47);












var ModalInvitation = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ModalInvitation, _React$Component);

  function ModalInvitation(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModalInvitation);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ModalInvitation.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ModalInvitation)).call(this, props));

    _this.state = { message: props.message };
    _this.handleTextAreaChange = _this.handleTextAreaChange.bind(_this);
    _this.handleInvite = _this.handleInvite.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ModalInvitation, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.message === nextProps.message) return;
      this.setState({ message: nextProps.message });
    }
  }, {
    key: 'handleTextAreaChange',
    value: function handleTextAreaChange(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: 'handleInvite',
    value: function handleInvite() {
      this.props.onInvite(this.props.visitorId, this.state.message);
      this.props.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        title: 'Enter an Invitation Message',
        actions: {
          okProps: { text: 'OK', eventClick: this.handleInvite },
          cancelProps: { text: 'Cancel' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__TextArea_TextArea__["a" /* default */], {
        meta: {},
        input: {
          onChange: this.handleTextAreaChange,
          value: this.state.message
        },
        cols: '40',
        rows: '5'
      }));
    }
  }]);

  return ModalInvitation;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalInvitation);

/***/ }),
/* 1415 */,
/* 1416 */,
/* 1417 */,
/* 1418 */,
/* 1419 */,
/* 1420 */,
/* 1421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_Button__ = __webpack_require__(47);






var ConfirmationModal = function ConfirmationModal(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
    closeModal: props.onCancel,
    className: __WEBPACK_IMPORTED_MODULE_3__Modal_css___default.a.ModalClass,
    title: props.title,
    actions: {
      cancelProps: { text: 'Cancel' }
    }
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, props.message));
};

/* harmony default export */ __webpack_exports__["a"] = (ConfirmationModal);

ConfirmationModal.defaultProps = {
  title: 'Comm100 Live Chat'
};

/***/ }),
/* 1422 */,
/* 1423 */,
/* 1424 */,
/* 1425 */,
/* 1426 */,
/* 1427 */,
/* 1428 */,
/* 1429 */,
/* 1430 */,
/* 1431 */,
/* 1432 */,
/* 1433 */,
/* 1434 */,
/* 1435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NoVisitor_css__ = __webpack_require__(1631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NoVisitor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NoVisitor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_helper__ = __webpack_require__(16);






var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h1', {}, void 0, 'You have no visitors now.');

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'your live chat code.');

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'a visitor.');

var NoVisitor = function NoVisitor(_ref) {
  var ifPasteCode = _ref.ifPasteCode,
      onSimulateVisitorLinkClick = _ref.onSimulateVisitorLinkClick,
      onInstallCodeLinkClick = _ref.onInstallCodeLinkClick;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_helper__["d" /* isChildWindow */])()) return null;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NoVisitor_css___default.a.flexContainer
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NoVisitor_css___default.a.container
  }, void 0, _ref2, !ifPasteCode && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_src_components_Link_Link__["a" /* default */], {
    onClick: onInstallCodeLinkClick
  }, void 0, 'Install'), _ref3), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_src_components_Link_Link__["a" /* default */], {
    onClick: onSimulateVisitorLinkClick
  }, void 0, 'Simulate'), _ref4)));
};

/* harmony default export */ __webpack_exports__["a"] = (NoVisitor);

/***/ }),
/* 1436 */,
/* 1437 */,
/* 1438 */,
/* 1439 */,
/* 1440 */,
/* 1441 */,
/* 1442 */,
/* 1443 */,
/* 1444 */,
/* 1445 */,
/* 1446 */,
/* 1447 */,
/* 1448 */,
/* 1449 */,
/* 1450 */,
/* 1451 */,
/* 1452 */,
/* 1453 */,
/* 1454 */,
/* 1455 */,
/* 1456 */,
/* 1457 */,
/* 1458 */,
/* 1459 */,
/* 1460 */,
/* 1461 */,
/* 1462 */,
/* 1463 */,
/* 1464 */,
/* 1465 */,
/* 1466 */,
/* 1467 */,
/* 1468 */,
/* 1469 */,
/* 1470 */,
/* 1471 */,
/* 1472 */,
/* 1473 */,
/* 1474 */,
/* 1475 */,
/* 1476 */,
/* 1477 */,
/* 1478 */,
/* 1479 */,
/* 1480 */,
/* 1481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_sortable_hoc__ = __webpack_require__(1737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_resizable_box__ = __webpack_require__(1734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_resizable_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_resizable_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__columnConfig__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_helper__ = __webpack_require__(16);

















var Cell = function Cell(_ref) {
  var columnName = _ref.columnName,
      width = _ref.width,
      sortOrder = _ref.sortOrder,
      onSort = _ref.onSort,
      _onResizeStop = _ref.onResizeStop,
      minWidth = _ref.minWidth,
      columnType = _ref.columnType,
      customVariableId = _ref.customVariableId;

  var component = null;
  if (columnName === '') {
    component = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
      onClick: function onClick() {
        return onSort(columnType, customVariableId, sortOrder === 'asc' ? 'desc' : 'asc');
      },
      style: { width: width },
      className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.headerStatusCell
    }, void 0, sortOrder && __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__["a" /* default */], {
      type: __WEBPACK_IMPORTED_MODULE_11_src_constants_enums__["b" /* icons */].arrowDown,
      style: { transform: sortOrder === 'asc' ? 'rotateX(180deg)' : undefined }
    }));
  } else {
    component = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
      onClick: function onClick() {
        return onSort(columnType, customVariableId, sortOrder === 'asc' ? 'desc' : 'asc');
      },
      className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.headerCellContent
    }, void 0, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('span', {
      style: { fontFamily: sortOrder ? 'SourceSans Pro Bold' : 'SourceSans Pro' },
      'data-tip': columnName,
      'data-for': 'visitorListTooltip'
    }, void 0, columnName), sortOrder && __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__["a" /* default */], {
      type: __WEBPACK_IMPORTED_MODULE_11_src_constants_enums__["b" /* icons */].arrowDown,
      style: { transform: sortOrder === 'asc' ? 'rotateX(180deg)' : undefined }
    }));
  }
  return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_react_resizable_box___default.a, {
    width: width,
    minWidth: minWidth,
    height: 33,
    isResizable: { right: true },
    customClass: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.headerCell,
    onResizeStop: function onResizeStop(direction, styleObject) {
      return _onResizeStop(columnType, customVariableId, styleObject.width);
    }
  }, void 0, component);
};

var HeaderCell = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_sortable_hoc__["a" /* SortableElement */])(Cell);

var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["e" /* shouldComponentUpdateGen */])('VisitorList - Header', ['columnsConfig', 'sortColumn', 'sortOrder', 'totalWidth']);

var _ref2 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {});

var Header = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Header, _React$Component);

  function Header(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Header);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Header)).call(this, props));

    _this.updateWidth = _this.updateWidth.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.updateWidth();
      this.props.getScrollLeftCallback(function (scrollLeft) {
        if (!_this2.container) return;
        _this2.container.style.transform = 'translateX(-' + scrollLeft + 'px)';
      });
      window.addEventListener('resize', this.updateWidth);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // this.updateWidth();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWidth);
    }
  }, {
    key: 'updateWidth',
    value: function updateWidth() {
      if (!this.container) return;
      var columnsConfig = this.props.columnsConfig;
      var length = columnsConfig.length;
      if (length === 0) return;
      var containerWidth = this.container.getBoundingClientRect().width;
      if (this.props.totalWidth >= containerWidth) return;
      this.props.onResizeStop(length - 1, columnsConfig[length - 1].width + (containerWidth - this.props.totalWidth));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          columnsConfig = _props.columnsConfig,
          sortColumn = _props.sortColumn,
          sortOrder = _props.sortOrder,
          onSort = _props.onSort,
          customVariables = _props.customVariables,
          onResizeStop = _props.onResizeStop;

      if (columnsConfig.length === 0) return _ref2;
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.headerContainer,
          ref: function ref(container) {
            _this3.container = container;
          },
          style: { width: this.props.totalWidth }
        },
        columnsConfig.map(function (column, index) {
          var headerProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__columnConfig__["b" /* getHeaderProps */])(column, customVariables);
          if (!headerProps) return null;
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(HeaderCell, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            key: index,
            index: index,
            columnType: column.enumColumn,
            customVariableId: column.customVariableId,
            sortOrder: column.enumColumn === sortColumn.enumColumn && column.customVariableId === sortColumn.customVariableId ? sortOrder : undefined,
            onSort: onSort,
            onResizeStop: onResizeStop
          }, headerProps));
        })
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_sortable_hoc__["b" /* SortableContainer */])(Header));

/***/ }),
/* 1482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_Link_Link__ = __webpack_require__(145);









var Referrer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Referrer, _React$Component);

  function Referrer() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Referrer);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Referrer.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Referrer)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Referrer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          referrer = _props.referrer,
          searchEngine = _props.searchEngine,
          searchEngineKeywords = _props.searchEngineKeywords;

      if (searchEngine && searchEngine.length > 0 || searchEngineKeywords && searchEngineKeywords.length > 0) {
        var tooltip = [searchEngine.length > 0 && 'Search Engine: ' + searchEngine, searchEngineKeywords.length > 0 && 'Keywords: ' + searchEngineKeywords].filter(function ($) {
          return $;
        }).join('<br>');
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_src_components_Link_Link__["a" /* default */], {
          newWindow: true,
          href: referrer,
          'data-tip': tooltip,
          'data-for': 'visitorListTooltip',
          'data-multiline': true
        }, void 0, searchEngine.length > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('b', {}, void 0, searchEngine + '\xA0'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, searchEngineKeywords ? '(' + searchEngineKeywords + ')' : ''));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_src_components_Link_Link__["a" /* default */], {
        newWindow: true,
        href: referrer,
        'data-tip': 'Referrer Page URL: ' + referrer,
        'data-for': 'visitorListTooltip'
      }, void 0, referrer);
    }
  }]);

  return Referrer;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Referrer);

/***/ }),
/* 1483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_immutable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Tooltip_Tooltip__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__columnConfig__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(324);























var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_helper__["e" /* shouldComponentUpdateGen */])('Row', ['visitor', 'index', 'columnsConfig', 'selected', 'waiting', 'transferring', 'delay', 'style.height', 'style.top', 'audioVideoChatStatus']);

var Row = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Row, _React$PureComponent);

  function Row() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Row);

    return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Row.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Row)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Row, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      /** @todo `selected` change might cause unnecessary render */
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      /**
       * This is to fix issue 18117.
       *
       * @todo
       *
       * Not a good solution, as it will hide ALL tooltips when one row is removed, including tooltip
       * that is outside of <VisitorList />.
       *
       * Better to include <Tooltip /> in <Row />, however that might cause tooltip to be in wrong
       * location (could be a CSS bug).
       *
       * Also, could pass a target in hide() function to only hide certain tooltip. However, that
       * requires too much work. Will do it later.
       */
      __WEBPACK_IMPORTED_MODULE_12_src_components_Tooltip_Tooltip__["a" /* default */].hide();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var visitor = props.visitor;


      var id = visitor.get('id');
      var status = visitor.get('status');
      var ifSelected = id === props.selected;
      var shouldHighlight = !!(props.waiting[id] || props.transferring[id]);
      var showGoToChatButton = __WEBPACK_IMPORTED_MODULE_16__utils_common__["n" /* showGoToChatButton */](visitor, props.agentId);
      var departmentId = visitor.get('departmentId');
      var department = __WEBPACK_IMPORTED_MODULE_8_lodash_find___default()(props.departments, function (dep) {
        return dep.id === departmentId;
      });
      var chatInvolvedAgents = visitor.get('chatInvolvedAgents');
      var ifHavePermissionToChat = __WEBPACK_IMPORTED_MODULE_16__utils_common__["f" /* isHavePermissionDealChat */](status, chatInvolvedAgents, department, props.agentId);
      var showAcceptButton = __WEBPACK_IMPORTED_MODULE_16__utils_common__["o" /* showAcceptButton */](visitor, department, props.agentId);

      var avStatus = visitor.get('audioVideoChatStatus');
      var backgroundColor = void 0;
      if (shouldHighlight || avStatus === __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || avStatus === __WEBPACK_IMPORTED_MODULE_17__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]) {
        backgroundColor = '#fedb9e';
      }
      if (ifSelected) backgroundColor = '#cce7f5';

      var passedThruProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ shouldHighlight: shouldHighlight, ifSelected: ifSelected, showGoToChatButton: showGoToChatButton, ifHavePermissionToChat: ifHavePermissionToChat, showAcceptButton: showAcceptButton }, props);

      var onDoubleClick = void 0;
      if (showGoToChatButton) {
        onDoubleClick = function onDoubleClick() {
          props.onGoToChat(visitor.get('chatId'));
        };
      } else if (showAcceptButton) {
        onDoubleClick = function onDoubleClick() {
          props.onAccept(id, visitor.get('chatId'), status);
        };
      }

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        style: shouldHighlight ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style, {
          backgroundColor: backgroundColor,
          // border-width: 1px for each cell need to be included
          width: props.width + props.columnsConfig.length,
          borderBottom: 1,
          borderBottomColor: '#feedce',
          borderBottomStyle: 'solid'
        }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style, { backgroundColor: backgroundColor, width: props.width + props.columnsConfig.length }),
        className: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__style_css___default.a.columnRow, props.index % 2 ? __WEBPACK_IMPORTED_MODULE_13__style_css___default.a.odd : __WEBPACK_IMPORTED_MODULE_13__style_css___default.a.even),
        onClick: ifSelected ? undefined : function () {
          props.onSelect(visitor.get('id'));
        },
        onDoubleClick: onDoubleClick
      }, visitor.get('id'), props.columnsConfig.map(function (config, i) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__columnConfig__["a" /* getColumn */])(config, i, passedThruProps);
      }));
    }
  }]);

  return Row;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),
/* 1484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_utils_time__ = __webpack_require__(73);








var updateTimespan = 1 * 1e3;

var TimeCell = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(TimeCell, _React$Component);

  function TimeCell(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TimeCell);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (TimeCell.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(TimeCell)).call(this, props));

    _this.timer = null;
    _this.tick = _this.tick.bind(_this);
    _this.text = _this.props.time ? __WEBPACK_IMPORTED_MODULE_6_src_utils_time__["g" /* dateSubsToString */](new Date(), _this.props.time, _this.props.delay) : '';
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(TimeCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.time) this.tick();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.time && this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else if (nextProps.time && !this.timer) {
        this.tick();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) clearTimeout(this.timer);
    }
  }, {
    key: 'tick',
    value: function tick() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        if (_this2.props.time && _this2.span) {
          /**
           * Instead of using this.setState, directly manipulate DOM here.
           * This is not React way to do things, but it will be much more effecient,
           * especially when there are tons of <TimeCell /> available on viewport, where each will
           * need to update itself every second.
           */
          _this2.text = __WEBPACK_IMPORTED_MODULE_6_src_utils_time__["g" /* dateSubsToString */](new Date(), _this2.props.time, _this2.props.delay);
          _this2.span.textContent = _this2.text;
          _this2.tick();
        }
      }, updateTimespan - Date.now() % updateTimespan);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'span',
        { style: { color: '#666', fontSize: 15 }, ref: function ref(span) {
            _this3.span = span;
          } },
        this.text
      );
    }
  }]);

  return TimeCell;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (TimeCell);

/***/ }),
/* 1485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_Icons_Country__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__style_css__);




















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_helper__["e" /* shouldComponentUpdateGen */])('VisitorCell', ['visitor', 'ifSelected', 'shouldHighlight']);

var VisitorInfoCell = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(VisitorInfoCell, _React$Component);

  function VisitorInfoCell() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, VisitorInfoCell);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorInfoCell.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(VisitorInfoCell)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(VisitorInfoCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var visitor = props.visitor;
      var agentId = props.agentId;

      var captured = visitor.get('captured');
      var status = visitor.get('status');
      var chatMonitorAgents = visitor.get('chatMonitorAgents');
      var chatActiveAgents = visitor.get('chatActiveAgents');
      var visitorId = visitor.get('id');
      var chatId = visitor.get('chatId');

      /** @todo should abstract following methods to common helper functions */

      var isAgentActiveInChat = __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default()(chatActiveAgents, agentId) >= 0;
      var isAgentInvolvedInMonitor = __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default()(chatMonitorAgents, agentId) >= 0;
      var waitingVisitorAcceptInvitationFromMe = status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */] && isAgentActiveInChat;

      var showInvitation = status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["q" /* inSite */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["e" /* chatEnded */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["o" /* offlineMessage */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["p" /* refusedByOperator */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["f" /* refusedByVisitor */];
      var isChatting = status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["a" /* chatting */] || status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["b" /* transferring */];

      var ifHavePermissionToChat = props.ifHavePermissionToChat;

      var showAccept = props.showAcceptButton;

      var showGoToChatButton = props.showGoToChatButton;

      var latestName = visitor.get('latestName');
      var latestEmail = visitor.get('latestEmail');

      var displayName = latestEmail === '' ? latestName : latestName + ' (' + latestEmail + ')';

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { position: 'relative' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_16__style_css___default.a.visitorInfoLine
      }, void 0, visitor.get('country') !== '' && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_src_components_Icons_Country__["a" /* default */], {
        countryName: visitor.get('country'),
        countryCode: visitor.get('countryCode'),
        state: visitor.get('state'),
        city: visitor.get('city'),
        'data-for': 'visitorListTooltip'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__style_css___default.a.visitorInfoName,
        style: { paddingLeft: visitor.get('country') === '' ? 0 : 15 },
        'data-tip': displayName,
        'data-for': 'visitorListTooltip'
      }, void 0, displayName), captured && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].capture,
        style: { paddingLeft: 10 }
      }), (props.ifSelected || props.shouldHighlight) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          return props.onDetailsClick(visitor.get('id'));
        },
        'data-tip': 'View detailed information of a visitor.',
        'data-for': 'visitorListTooltip'
      }, void 0, 'Details')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_16__style_css___default.a.visitorInfoExtraLine
      }, void 0, showAccept && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__["a" /* default */], {
        text: 'Accept',
        size: 'small',
        type: 'primary',
        'data-tip': 'Accept a visitor\'s chat request.',
        'data-for': 'visitorListTooltip',
        onClick: function onClick() {
          return props.onAccept(visitorId, chatId, status);
        }
      }), showAccept && props.ifCanRefuse && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          return props.onRefuse(visitorId, status);
        },
        'data-tip': 'Refuse a visitor\'s chat request.',
        'data-for': 'visitorListTooltip'
      }, void 0, 'Refuse'), waitingVisitorAcceptInvitationFromMe && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__["a" /* default */], {
        text: 'Send Message',
        size: 'small',
        type: 'primary',
        onClick: function onClick() {
          return props.onGoToChat(chatId);
        }
      }), props.ifCanInvite && props.ifEnableInvitation && showInvitation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__["a" /* default */], {
        text: 'Invite',
        size: 'small',
        type: 'primary',
        'data-tip': 'Invite a visitor to chat.',
        'data-for': 'visitorListTooltip',
        onClick: function onClick() {
          if (status === __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["f" /* refusedByVisitor */]) {
            props.onConfirmInvitation(visitorId);
          } else {
            props.onInvite(visitorId);
          }
        }
      }), showGoToChatButton && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__["a" /* default */], {
        text: 'Go to Chat',
        size: 'small',
        type: 'primary',
        onClick: function onClick() {
          return props.onGoToChat(chatId);
        }
      }), isChatting && !isAgentActiveInChat && ifHavePermissionToChat && props.ifEnableTeamWork && (status !== __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorStatus__["b" /* transferring */] || isAgentInvolvedInMonitor) && props.ifCanJoin && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          props.onJoin(visitorId, chatId);
        },
        'data-tip': 'Join an ongoing chat.',
        'data-for': 'visitorListTooltip'
      }, void 0, 'Join'), isChatting && !isAgentActiveInChat && ifHavePermissionToChat && props.ifEnableTeamWork && !isAgentInvolvedInMonitor && props.ifCanMonitor && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          return props.onMonitor(visitorId, chatId);
        },
        'data-tip': 'Invisibly monitor an ongoing chat.',
        'data-for': 'visitorListTooltip'
      }, void 0, 'Monitor'), props.ifCanCapture && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          return props.onCaptureClick(visitorId, !captured);
        },
        'data-tip': !captured ? 'Captured visitors will still be displayed in the visitor list after they leave your website.' : 'Release captured visitors so they will disappear from the visitor list after they leave your website.',
        'data-for': 'visitorListTooltip'
      }, void 0, !captured ? 'Capture' : 'Release'), props.ifCanBan && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: function onClick() {
          props.onBan(visitorId);
        },
        'data-tip': 'Ban a visitor from live chat. A banned visitor cannot initiate chats and is not displayed in Agent Console.',
        'data-for': 'visitorListTooltip'
      }, void 0, 'Ban')));
    }
  }]);

  return VisitorInfoCell;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VisitorInfoCell);

/***/ }),
/* 1486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_immutable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Tooltip_Tooltip__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_MenuTab_Tab__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_src_components_Modal_ModalLoading__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_src_components_Modal_ModalReload__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__VisitorListContent__ = __webpack_require__(1487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Header__ = __webpack_require__(1481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_enums_visitorStatus__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__constants_enums_columnType__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorTab__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_CommonResources_common_css__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Icon_Icon__ = __webpack_require__(58);



























var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_helper__["e" /* shouldComponentUpdateGen */])('VisitorList', ['list', 'columnsConfig', 'sortColumn', 'sortOrder', 'filter', 'selected', 'visitors', 'waiting', 'transferring', 'delay', 'ifOpenCustomFilter', 'errorMessage', 'ifPopupWindowForVisitors']);

var showPopupIcon = function showPopupIcon(isShow, cb) {
  if (false) {
    if (isChildWindow()) {
      return _jsx(Icon, {
        type: icons.embet,
        size: 14,
        onClick: cb,
        className: style.popuicon
      });
    } else if (!isChildWindow() && isShow) {
      return _jsx(Icon, {
        type: icons.popup,
        size: 14,
        onClick: cb,
        className: style.popuicon
      });
    }
  }
  return null;
};

var _ref2 = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('h1', {}, void 0, 'You haven\'t set up custom filter conditions yet.');

var _ref3 = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('h1', {}, void 0, 'Please click the Settings icon next to "Custom Filter" to add conditions first.');

var _ref4 = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Tooltip_Tooltip__["a" /* default */], {
  id: 'visitorListTooltip',
  effect: 'solid',
  place: 'bottom'
});

var _ref5 = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14_src_components_Modal_ModalLoading__["a" /* default */], {
  ifOpen: true
});

var VisitorList = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(VisitorList, _React$Component);

  function VisitorList(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, VisitorList);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorList.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(VisitorList)).call(this, props));

    _this.state = {
      VisitorListScrollLeft: 0
    };
    _this.onHorizontalScroll = _this.onHorizontalScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(VisitorList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // force tooltip re-render to be after children mount
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(function () {
        return __WEBPACK_IMPORTED_MODULE_11_src_components_Tooltip_Tooltip__["a" /* default */].rebuild();
      }, 0);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps) || this.state.VisitorListScrollLeft !== nextState.VisitorListScrollLeft;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(function () {
        return __WEBPACK_IMPORTED_MODULE_11_src_components_Tooltip_Tooltip__["a" /* default */].rebuild();
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: 'onHorizontalScroll',
    value: function onHorizontalScroll(scrollLeft) {
      this.onScrollLeft(scrollLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var columnsConfig = props.columnsConfig;
      var waitingNumber = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(props.waiting).length;
      var shouldShowNoFilter = props.filter === __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorTab__["d" /* customized */] && (!props.customFilters || props.customFilters.length === 0);
      return __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        style: { height: '100%' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.top
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.topInfo
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.topInfoLine
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.insiteVisitorNumber), 'Visitor' + (props.insiteVisitorNumber > 1 ? 's' : '') + ' in Site'), __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.topInfoLine
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('span', {}, void 0, waitingNumber), 'Visitor' + (waitingNumber > 1 ? 's' : '') + ' Waiting for Chat')), __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_23__components_CommonResources_common_css___default.a.topTab
      }, void 0, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_MenuTab_Tab__["a" /* default */], {
        tabs: props.tabs,
        selectedTab: props.filter,
        onSelect: props.onTabSelect,
        onIconClick: props.openCustomFilterModal,
        ifEqualWidth: false,
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.visitorstopmenu
      }), showPopupIcon(!props.ifPopupWindowForVisitors, props.switchSingleWindow))), __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__Header__["a" /* default */], {
        columnsConfig: props.columnsConfig,
        axis: 'x',
        lockAxis: 'x',
        distance: 5,
        shouldCancelStart: function shouldCancelStart(e) {
          if (e.target.parentNode.children[0] === e.target) return false;
          return true;
        },
        sortColumn: props.sortColumn,
        sortOrder: props.sortOrder,
        onSort: props.onSort,
        onResizeStop: props.onResizeStop,
        onSortEnd: function onSortEnd(_ref) {
          var oldIndex = _ref.oldIndex,
              newIndex = _ref.newIndex;

          var columnConfigInStartPoint = columnsConfig[oldIndex];
          var columnConfigInEndPoint = columnsConfig[newIndex];
          props.onOrder(newIndex > oldIndex, columnConfigInStartPoint.enumColumn, columnConfigInStartPoint.customVariableId, columnConfigInEndPoint.enumColumn, columnConfigInEndPoint.customVariableId);
        },
        helperClass: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.dragging,
        customVariables: props.customVariables,
        totalWidth: props.totalWidth,
        scrollLeft: this.state.VisitorListScrollLeft,
        getScrollLeftCallback: function getScrollLeftCallback(callback) {
          _this2.onScrollLeft = callback;
        }
      }), shouldShowNoFilter && __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.nofilterDiv
      }, void 0, _ref2, _ref3, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.nofilterImgWrapper
      })), !shouldShowNoFilter && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__VisitorListContent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
        totalWidth: props.totalWidth,
        onHorizontalScroll: this.onHorizontalScroll
      })), _ref4, props.ifOpenCustomFilter && __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
        modules: { CustomFilterModal: function CustomFilterModal() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              __webpack_require__.e/* require.ensure */(8).then((function (require) {
                resolve(__webpack_require__(1264));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).catch(reject);
            }));
          } },
        loading: _ref5,
        retry: __WEBPACK_IMPORTED_MODULE_15_src_components_Modal_ModalReload__["a" /* default */]
      }, void 0, function (_ref6) {
        var CustomFilterModal = _ref6.CustomFilterModal;
        return props.ifOpenCustomFilter && __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_jsx___default()(CustomFilterModal, {
          siteInfo: props.siteInfo,
          campaigns: props.campaigns,
          departments: props.departments,
          autoInvitations: props.autoInvitations,
          agents: props.agents.filter(function (agent) {
            return agent.id !== props.currentAgentId;
          }),
          customVariables: props.customVariables,
          segments: props.segments,
          customFilter: props.customFilters,
          closeModal: props.closeCustomFilterModal,
          saveCustomFilters: props.saveCustomFilters,
          currentAgentId: props.currentAgentId
        });
      }));
    }
  }]);

  return VisitorList;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VisitorList);

/***/ }),
/* 1487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_virtualized_styles_css__ = __webpack_require__(1642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_virtualized_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_virtualized_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_virtualized__ = __webpack_require__(1760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Modal_ModalBanChat_ModalBanChat__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Modal_Confirmation_Confirmation__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_components_Modal_Invitation_Invitation__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_src_components_Modal_PopupMessage_PopupMessage__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_src_utils_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Row__ = __webpack_require__(1483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__style_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_helper__ = __webpack_require__(16);





















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_helper__["e" /* shouldComponentUpdateGen */])('VisitorListContent', ['visitors', 'list', 'waiting', 'transferring', 'selected', 'selectedIndex', 'columnsConfig', 'sortColumn', 'sortOrder', 'totalWidth', 'campaigns', 'errorMessage'], ['modalType', 'visitorId']);

var modalType = {
  none: 0,
  ban: 1,
  invitation: 2,
  confirmInvitation: 3,
  maximumInvolved: 4
};

var VisitorListContent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(VisitorListContent, _React$Component);

  function VisitorListContent(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, VisitorListContent);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorListContent.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(VisitorListContent)).call(this, props));

    _this.state = {
      modalType: modalType.none,
      visitorId: null
    };
    _this.onBan = _this.onBan.bind(_this);
    _this.onConfirmInvitation = _this.onConfirmInvitation.bind(_this);
    _this.onInvite = _this.onInvite.bind(_this);
    _this.onScroll = _this.onScroll.bind(_this);
    /*
     * following comment code (and some other commended code below) implement the feature
     * that will lock selected visitor in viewport when it is visible (no matter how list updated),
     * and lock scrollbar when selected visitor is not visible.
     * Though this feature is not required at the moment, code is remained as comment here
     * in case it is required in future.
     */
    // this.onRowsRendered = this.onRowsRendered.bind(this);
    // this.renderStartIndex = -1;
    // this.renderStopIndex = -1;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(VisitorListContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.container) {
        this.container.addEventListener('scroll', this.onScroll);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // this.isSelectedVisible = this.renderStartIndex <= this.props.selectedIndex &&
      //   this.renderStopIndex >= this.props.selectedIndex;
      if (!this.list) return;
      if (nextProps.selected !== this.props.selected || nextProps.sortColumn !== this.props.sortColumn || nextProps.sortOrder !== this.props.sortOrder || nextProps.transferring !== this.props.transferring || nextProps.waiting !== this.props.waiting || nextProps.selectedIndex !== this.props.selectedIndex) {
        /** @todo this implementation is really slow, try to calculate the correct starting index */
        this.list.recomputeRowHeights(0);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        this.container.removeEventListener('scroll', this.onScroll);
      }
    }
  }, {
    key: 'onBan',
    value: function onBan(visitorId) {
      this.setState({ visitorId: visitorId, modalType: modalType.ban });
    }
  }, {
    key: 'onConfirmInvitation',
    value: function onConfirmInvitation(visitorId) {
      this.setState({ visitorId: visitorId, modalType: modalType.confirmInvitation });
    }
  }, {
    key: 'onInvite',
    value: function onInvite(visitorId) {
      this.setState({ visitorId: visitorId, modalType: modalType.invitation });
    }
  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      this.props.onHorizontalScroll(event.target.scrollLeft);
    }

    // onRowsRendered({ startIndex, stopIndex }) {
    //   this.renderStartIndex = startIndex;
    //   this.renderStopIndex = stopIndex;
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visitors = _props.visitors,
          list = _props.list,
          selected = _props.selected,
          totalWidth = _props.totalWidth,
          waiting = _props.waiting,
          transferring = _props.transferring,
          columnsConfig = _props.columnsConfig,
          selectedIndex = _props.selectedIndex;

      if (columnsConfig.length === 0) return null;
      var visitorId = this.state.visitorId;
      var visitor = visitors.get(visitorId);
      var realVisitorId = visitorId ? visitor.get('realVisitorId') : -1;
      var ip = visitorId ? visitor.get('ip') : undefined;
      var codePlanId = visitorId ? visitors.get(visitorId).get('codePlanId') : undefined;
      var campaign = visitorId ? __WEBPACK_IMPORTED_MODULE_7_lodash_find___default()(this.props.campaigns, function (c) {
        return c.id === codePlanId;
      }) : undefined;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_react_virtualized__["a" /* AutoSizer */], {
        disableWidth: true
      }, void 0, function (_ref) {
        var height = _ref.height,
            width = _ref.width;
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_17__style_css___default.a.contentContainer,
            ref: function ref(parent) {
              _this2.container = parent ? parent.firstChild : null;
            }
          },
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_virtualized__["b" /* List */], {
            height: height - 90,
            style: { overflowX: 'auto' },
            rowCount:
            /**
             * You can enlarge this number here, so that more visitors will be shown.
             */
            list.length,
            rowHeight: function rowHeight(_ref2) {
              var index = _ref2.index;

              if (selectedIndex === index) {
                return 70;
              }
              var id = list[index];
              if (waiting[id] || transferring[id]) {
                return 70;
              }
              return 40;
            },
            scrollToIndex: undefined
            /* selectedIndex >= 0 && this.isSelectedVisible ? selectedIndex : undefined */
            ,
            rowRenderer: function rowRenderer(props) {
              return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Row__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, _this2.props, {
                width: Math.max(totalWidth, width),
                selectedId: selected,
                visitor: visitors.get(list[props.index % list.length]),
                onBan: _this2.onBan,
                onConfirmInvitation: _this2.onConfirmInvitation,
                onInvite: _this2.onInvite
              }));
            },
            onRowRendered: undefined /* this.onRowsRendered */,
            width: width,
            ref: function ref(element) {
              _this2.list = element;
            },
            overscanRowCount: undefined /* seems not required for optimization */
          }),
          _this2.state.modalType === modalType.ban && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Modal_ModalBanChat_ModalBanChat__["a" /* default */], {
            ifOpen: _this2.state.modalType === modalType.ban,
            openModal: function openModal() {
              _this2.setState({ modalType: modalType.ban });
            },
            closeModal: function closeModal() {
              _this2.setState({ modalType: modalType.none });
            },
            realVisitorId: realVisitorId,
            visitorId: visitorId,
            visitorIP: ip,
            onBanChat: _this2.props.onBan
          }),
          _this2.state.modalType === modalType.invitation && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13_src_components_Modal_Invitation_Invitation__["a" /* default */], {
            ifOpen: _this2.state.modalType === modalType.invitation,
            visitorId: _this2.state.visitorId,
            openModal: function openModal() {
              _this2.setState({ modalType: modalType.invitation });
            },
            closeModal: function closeModal() {
              _this2.setState({ modalType: modalType.none });
            },
            message: campaign ? __WEBPACK_IMPORTED_MODULE_15_src_utils_common__["m" /* replaceVisitorInfoMacros */](campaign.invitationDefaultText, visitor) : '',
            onInvite: _this2.props.onInvite
          }),
          _this2.state.modalType === modalType.confirmInvitation && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Modal_Confirmation_Confirmation__["a" /* default */], {
            ifOpen: _this2.state.modalType === modalType.confirmInvitation,
            message: 'This visitor has refused a previous invitation. Are you sure you want to try again?',
            onConfirm: function onConfirm() {
              return _this2.setState({ modalType: modalType.invitation });
            },
            onCancel: function onCancel() {
              return _this2.setState({ modalType: modalType.none });
            }
          }),
          _this2.props.errorMessage && _this2.state.modalType === modalType.maximumInvolved && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14_src_components_Modal_PopupMessage_PopupMessage__["a" /* default */], {
            title: 'Comm100 Live Chat',
            onCancel: _this2.props.onErrorClose,
            message: _this2.props.errorMessage
          })
        );
      });
    }
  }]);

  return VisitorListContent;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VisitorListContent);

/***/ }),
/* 1488 */,
/* 1489 */,
/* 1490 */,
/* 1491 */,
/* 1492 */,
/* 1493 */,
/* 1494 */,
/* 1495 */,
/* 1496 */,
/* 1497 */,
/* 1498 */,
/* 1499 */,
/* 1500 */,
/* 1501 */,
/* 1502 */,
/* 1503 */,
/* 1504 */,
/* 1505 */,
/* 1506 */,
/* 1507 */,
/* 1508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NoVisitor_NoVisitor__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_openPortalWithSession__ = __webpack_require__(1516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_electronAPI__ = __webpack_require__(57);






var mapStateToProps = function mapStateToProps(state) {
  function openExternalLink(link) {
    var siteId = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["F" /* getSiteId */](state);
    var email = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_14" /* getCurrentAgentEmail */](state);
    var password = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_15" /* getCurrentAgentPassword */](state);
    var controlPanelUrl = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_16" /* getControlPanelURL */](state);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_openPortalWithSession__["a" /* default */])(link, controlPanelUrl, siteId, email, password);
  }
  return {
    ifPasteCode: __WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_17" /* getIfPasteCode */](state),
    onSimulateVisitorLinkClick: function onSimulateVisitorLinkClick() {
      __WEBPACK_IMPORTED_MODULE_4__services_electronAPI__["b" /* shell */].openExternal(__WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_18" /* getSimulateVisitorLink */](state));
    },
    onInstallCodeLinkClick: function onInstallCodeLinkClick() {
      openExternalLink(__WEBPACK_IMPORTED_MODULE_2__reducers_selectors_index__["_19" /* getInstallCodeLink */](state));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__components_NoVisitor_NoVisitor__["a" /* default */]));

/***/ }),
/* 1509 */,
/* 1510 */,
/* 1511 */,
/* 1512 */,
/* 1513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_indexOf__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lru_memoize__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lru_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lru_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_VisitorList_VisitorList__ = __webpack_require__(1486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_enums_visitorStatus__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_config__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_web__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_chatList__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_visitorDetails__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_localStorage__ = __webpack_require__(56);




















var getWaitingAndTransferring = function () {
  var previousList = void 0;
  var previousVisitors = void 0;
  var cacheResult = void 0;
  return function (list, visitors) {
    if (list === previousList && previousVisitors === visitors) return cacheResult;
    previousList = list;
    previousVisitors = visitors;

    var _reduce2 = __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(list, function (result, visitorId) {
      var status = visitors.get(visitorId).get('status');
      var audioVideoChatStatus = visitors.get(visitorId).get('audioVideoChatStatus');
      if (status === __WEBPACK_IMPORTED_MODULE_7__constants_enums_visitorStatus__["c" /* waitingForChat */]) {
        result.waiting[visitorId] = visitorId; // eslint-disable-line no-param-reassign
      } else if (status === __WEBPACK_IMPORTED_MODULE_7__constants_enums_visitorStatus__["b" /* transferring */]) {
        result.transferring[visitorId] = visitorId; // eslint-disable-line no-param-reassign
      }
      return result;
    }, { waiting: {}, transferring: {} }),
        waiting = _reduce2.waiting,
        transferring = _reduce2.transferring;

    cacheResult = cacheResult ? {
      waiting: __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(waiting, cacheResult.waiting) ? cacheResult.waiting : waiting,
      transferring: __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(transferring, cacheResult.transferring) ? cacheResult.transferring : transferring
    } : {
      waiting: waiting, transferring: transferring
    };
    return cacheResult;
  };
}();

var getSelectedIndex = __WEBPACK_IMPORTED_MODULE_5_lru_memoize___default()(1)(function (list, selected) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_indexOf___default()(list, selected);
});

var getTotalWidth = __WEBPACK_IMPORTED_MODULE_5_lru_memoize___default()(1)(function (columnsConfig) {
  return columnsConfig.reduce(function (sum, config) {
    return sum + config.width;
  }, 0) + 5;
});

var mapStateToProps = function mapStateToProps(state) {
  var visitors = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["m" /* getVisitors */](state);
  var agentId = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["u" /* getCurrentAgentId */](state);
  var uiConfig = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_20" /* getVisitorsUiConfig */](state);
  var columnsConfig = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_21" /* getVisibleVisitorListColumns */](state);
  var list = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_22" /* getVisibleVisitorsList */](state);
  var insiteVisitorNumber = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_23" /* getInsiteVisitorNumber */](state);
  var selectedIndex = getSelectedIndex(list, uiConfig.selected);
  var totalWidth = getTotalWidth(columnsConfig);
  var timezone = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_24" /* getTimezone */](state);
  var timezoneOffset = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_25" /* getTimezoneOffset */](state);
  var dateTimeFormat = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_26" /* getDateTimeFormat */](state);
  var tabs = __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_27" /* getVisitorTabs */](state);
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
    visitors: visitors,
    agentId: agentId,
    list: list,
    selectedIndex: selectedIndex,
    insiteVisitorNumber: insiteVisitorNumber,
    timezone: timezone,
    timezoneOffset: timezoneOffset,
    dateTimeFormat: dateTimeFormat,
    ifCanInvite: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["c" /* invite */]),
    ifCanRefuse: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["d" /* refuseChat */]),
    ifCanCapture: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["e" /* promoteVisitor */]),
    ifCanBan: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["f" /* manageBan */]),
    ifCanJoin: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["g" /* joinChat */]),
    ifCanMonitor: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_13__constants_enums_liveChatPermission__["a" /* monitorChat */]),
    ifEnableInvitation: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_29" /* getIfEnableInvitation */](state),
    ifEnableTeamWork: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_30" /* getIfEnableTeamWork */](state),
    tabs: tabs,
    columnsConfig: columnsConfig,
    totalWidth: totalWidth,
    campaigns: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_31" /* getCampaigns */](state),
    departments: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["B" /* getDepartments */](state),
    autoInvitations: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_32" /* getAutoInvitations */](state),
    agents: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_33" /* getAgents */](state),
    customVariables: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_34" /* getCustomVariables */](state),
    segments: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_35" /* getSegmentations */](state),
    delay: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_12" /* getTimeDelay */](state),
    customFilters: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_36" /* getCustomFilter */](state),
    siteInfo: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_37" /* getSiteInfo */](state),
    currentAgentId: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["u" /* getCurrentAgentId */](state),
    ifPopupWindowForVisitors: __WEBPACK_IMPORTED_MODULE_9__reducers_selectors_index__["_38" /* getIfPopupWindowForVisitors */](state)
  }, uiConfig,
  // waiting and transferring are always exists in first three tabs,
  // so it's fine to directly use `list` to calculate waiting and transferring numbers
  getWaitingAndTransferring(list, visitors));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onOrder: function onOrder(leftToRight, startEnumColumn, startCustomVariableId, endEnumColumn, endCustomVariableId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_config__["b" /* changeVisitorListColumnOrder */](leftToRight, startEnumColumn, startCustomVariableId, endEnumColumn, endCustomVariableId));
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["f" /* setPreference */]());
    },
    onErrorClose: function onErrorClose() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["g" /* closeError */]());
    },
    onSort: function onSort(columnType, customVariableId, order) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["h" /* changeVisitorListOrderBy */](columnType, customVariableId, order));
    },
    onTabSelect: function onTabSelect(tab) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["i" /* changeVisitorListFilter */](tab));
    },
    onResizeStop: function onResizeStop(columnType, customVariableId, width) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_config__["c" /* changeVisitorListColumnSize */](columnType, customVariableId, width));
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["f" /* setPreference */]());
    },
    onSelect: function onSelect(visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["j" /* selectVisitorListRow */](visitorId));
      dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_visitorDetails__["l" /* resetForms */]());
      __WEBPACK_IMPORTED_MODULE_17__utils_localStorage__["b" /* deleteItem */]('prechatFormState');
      __WEBPACK_IMPORTED_MODULE_17__utils_localStorage__["b" /* deleteItem */]('customFields_FormState');
    },
    onAccept: function onAccept(visitorId, chatId, status) {
      if (status === __WEBPACK_IMPORTED_MODULE_7__constants_enums_visitorStatus__["b" /* transferring */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["s" /* acceptTransfer */](visitorId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["t" /* acceptChat */](visitorId));
      }
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_chatList__["a" /* setSelected */](chatId));
    },
    onRefuse: function onRefuse(visitorId, status) {
      if (status === __WEBPACK_IMPORTED_MODULE_7__constants_enums_visitorStatus__["b" /* transferring */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["u" /* refuseTransfer */](visitorId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["v" /* refuseChat */](visitorId));
      }
    },
    onInvite: function onInvite(visitorId, message) {
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["w" /* inviteVisitorWithText */](visitorId, message, function (payload) {
        /** do not jump to chat panel if manual invitation is not embedded */
        if (!payload.showChatWindow) return;
        /** select this visitor in chat panel. But should wait until visitor get updated */
        setTimeout(function () {
          dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_chatList__["b" /* setSelectedViaVisitorId */](payload.visitorId));
        }, 0);
      }));
    },
    onGoToChat: function onGoToChat(chatId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_chatList__["a" /* setSelected */](chatId));
    },
    onJoin: function onJoin(visitorId, chatId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["x" /* joinChat */](visitorId));
      // dispatch(chatListActions.setSelected(chatId));
    },
    onMonitor: function onMonitor(visitorId, chatId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["y" /* monitorChat */](visitorId));
      // dispatch(chatListActions.setSelected(chatId));
    },
    onCaptureClick: function onCaptureClick(visitorId, shouldCapture) {
      if (shouldCapture) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["z" /* captureVisitor */](visitorId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["A" /* releaseVisitor */](visitorId));
      }
    },
    onBan: function onBan(visitorId, banInfo) {
      dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_web__["B" /* banVisitor */](visitorId, banInfo));
    },
    onDetailsClick: function onDetailsClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["e" /* toggleVisitorDetails */]());
    },
    openCustomFilterModal: function openCustomFilterModal() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["k" /* handleCustomFilterModal */](true));
    },
    closeCustomFilterModal: function closeCustomFilterModal() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["k" /* handleCustomFilterModal */](false));
    },
    saveCustomFilters: function saveCustomFilters(newCustomFilter) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_config__["d" /* updateCustomFilter */]({ customFilterSettings: newCustomFilter }));
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_agent__["g" /* setPreference */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["k" /* handleCustomFilterModal */](false));
    },
    switchSingleWindow: function switchSingleWindow() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["l" /* openNewWindow */]());
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_6__components_VisitorList_VisitorList__["a" /* default */]));

/***/ }),
/* 1514 */,
/* 1515 */,
/* 1516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electronAPI__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_str__ = __webpack_require__(133);




function openPortalWithSession(link, controlPanelLink, siteId, email, password) {
  if (true) {
    __WEBPACK_IMPORTED_MODULE_1__electronAPI__["b" /* shell */].openExternal(link);
  } else {
    var autoLoginManagerUrl = (controlPanelLink + '/adminManage/AutoLoginManager.ashx').replace('http://', 'https://');
    var encryptedPassword = str.passwordConvert(password);
    var loginUrl = controlPanelLink + '/adminManage/login.aspx';
    axios.get(autoLoginManagerUrl + '?siteId=' + siteId + '&email=' + email + '&password=' + encryptedPassword).then(function (respond) {
      shell.openExternal(loginUrl + '?sessionId=' + respond.data + '&retUrl=' + encodeURIComponent(link));
    }).catch(function () {
      shell.openExternal(link);
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (openPortalWithSession);

/***/ }),
/* 1517 */,
/* 1518 */,
/* 1519 */,
/* 1520 */,
/* 1521 */,
/* 1522 */,
/* 1523 */,
/* 1524 */,
/* 1525 */,
/* 1526 */,
/* 1527 */,
/* 1528 */,
/* 1529 */,
/* 1530 */,
/* 1531 */,
/* 1532 */,
/* 1533 */,
/* 1534 */,
/* 1535 */,
/* 1536 */,
/* 1537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 1538 */,
/* 1539 */,
/* 1540 */,
/* 1541 */,
/* 1542 */,
/* 1543 */,
/* 1544 */,
/* 1545 */,
/* 1546 */,
/* 1547 */,
/* 1548 */,
/* 1549 */,
/* 1550 */,
/* 1551 */,
/* 1552 */,
/* 1553 */,
/* 1554 */,
/* 1555 */,
/* 1556 */,
/* 1557 */,
/* 1558 */,
/* 1559 */,
/* 1560 */,
/* 1561 */,
/* 1562 */,
/* 1563 */,
/* 1564 */,
/* 1565 */,
/* 1566 */,
/* 1567 */,
/* 1568 */,
/* 1569 */,
/* 1570 */,
/* 1571 */,
/* 1572 */,
/* 1573 */,
/* 1574 */,
/* 1575 */,
/* 1576 */,
/* 1577 */,
/* 1578 */,
/* 1579 */,
/* 1580 */,
/* 1581 */,
/* 1582 */,
/* 1583 */,
/* 1584 */,
/* 1585 */,
/* 1586 */,
/* 1587 */,
/* 1588 */,
/* 1589 */,
/* 1590 */,
/* 1591 */,
/* 1592 */,
/* 1593 */,
/* 1594 */,
/* 1595 */,
/* 1596 */,
/* 1597 */,
/* 1598 */,
/* 1599 */,
/* 1600 */,
/* 1601 */,
/* 1602 */,
/* 1603 */,
/* 1604 */,
/* 1605 */,
/* 1606 */,
/* 1607 */,
/* 1608 */,
/* 1609 */,
/* 1610 */,
/* 1611 */,
/* 1612 */,
/* 1613 */,
/* 1614 */,
/* 1615 */,
/* 1616 */,
/* 1617 */,
/* 1618 */,
/* 1619 */,
/* 1620 */,
/* 1621 */,
/* 1622 */,
/* 1623 */,
/* 1624 */,
/* 1625 */,
/* 1626 */,
/* 1627 */,
/* 1628 */,
/* 1629 */,
/* 1630 */,
/* 1631 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"flexContainer":"NoVisitor__flexContainer--b_G0n","container":"NoVisitor__container--2cuVp"};

/***/ }),
/* 1632 */,
/* 1633 */,
/* 1634 */,
/* 1635 */,
/* 1636 */,
/* 1637 */,
/* 1638 */,
/* 1639 */,
/* 1640 */,
/* 1641 */,
/* 1642 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1643 */,
/* 1644 */,
/* 1645 */,
/* 1646 */,
/* 1647 */,
/* 1648 */,
/* 1649 */,
/* 1650 */,
/* 1651 */,
/* 1652 */,
/* 1653 */,
/* 1654 */,
/* 1655 */,
/* 1656 */,
/* 1657 */,
/* 1658 */,
/* 1659 */,
/* 1660 */,
/* 1661 */,
/* 1662 */,
/* 1663 */,
/* 1664 */,
/* 1665 */,
/* 1666 */,
/* 1667 */,
/* 1668 */,
/* 1669 */,
/* 1670 */,
/* 1671 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 1672 */,
/* 1673 */,
/* 1674 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(179),
    baseIteratee = __webpack_require__(151),
    baseMap = __webpack_require__(1671),
    baseSortBy = __webpack_require__(1677),
    baseUnary = __webpack_require__(332),
    compareMultiple = __webpack_require__(1681),
    identity = __webpack_require__(139);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 1675 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 1676 */,
/* 1677 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 1678 */,
/* 1679 */,
/* 1680 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(89);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 1681 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(1680);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 1682 */,
/* 1683 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(1675);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

module.exports = escapeHtmlChar;


/***/ }),
/* 1684 */,
/* 1685 */
/***/ (function(module, exports, __webpack_require__) {

var escapeHtmlChar = __webpack_require__(1683),
    toString = __webpack_require__(50);

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ }),
/* 1686 */,
/* 1687 */,
/* 1688 */,
/* 1689 */,
/* 1690 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(214),
    baseOrderBy = __webpack_require__(1674),
    baseRest = __webpack_require__(331),
    isIterateeCall = __webpack_require__(205);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 1691 */,
/* 1692 */,
/* 1693 */,
/* 1694 */,
/* 1695 */,
/* 1696 */,
/* 1697 */,
/* 1698 */,
/* 1699 */,
/* 1700 */,
/* 1701 */,
/* 1702 */,
/* 1703 */,
/* 1704 */,
/* 1705 */,
/* 1706 */,
/* 1707 */,
/* 1708 */,
/* 1709 */,
/* 1710 */,
/* 1711 */,
/* 1712 */,
/* 1713 */,
/* 1714 */,
/* 1715 */,
/* 1716 */,
/* 1717 */,
/* 1718 */,
/* 1719 */,
/* 1720 */,
/* 1721 */,
/* 1722 */,
/* 1723 */,
/* 1724 */,
/* 1725 */,
/* 1726 */,
/* 1727 */,
/* 1728 */,
/* 1729 */,
/* 1730 */,
/* 1731 */,
/* 1732 */,
/* 1733 */,
/* 1734 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _resizer = __webpack_require__(1735);

var _resizer2 = _interopRequireDefault(_resizer);

var _lodash = __webpack_require__(101);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clamp = function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
};
var snap = function snap(n, size) {
  return Math.round(n / size) * size;
};
var directions = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

var Resizable = function (_Component) {
  _inherits(Resizable, _Component);

  function Resizable(props) {
    _classCallCheck(this, Resizable);

    var _this = _possibleConstructorReturn(this, (Resizable.__proto__ || Object.getPrototypeOf(Resizable)).call(this, props));

    var width = props.width;
    var height = props.height;

    _this.state = {
      isActive: false,
      width: width,
      height: height
    };

    _this.onResizeStartWithDirection = {};
    directions.forEach(function (d) {
      _this.onResizeStartWithDirection[d] = _this.onResizeStart.bind(_this, d);
    });
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    if (typeof window !== 'undefined') {
      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('touchmove', _this.onTouchMove);
      window.addEventListener('touchend', _this.onMouseUp);
    }
    return _this;
  }

  _createClass(Resizable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var size = this.getBoxSize();
      this.setSize(size);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var width = _ref.width;
      var height = _ref.height;

      if (width !== this.props.width) this.setState({ width: width });
      if (height !== this.props.height) this.setState({ height: height });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _lodash2.default)(this.props, nextProps) || !(0, _lodash2.default)(this.state, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('touchmove', this.onTouchMove);
        window.removeEventListener('touchend', this.onMouseUp);
      }
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(event) {
      this.onMouseMove(event.touches[0]);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(_ref2) {
      var clientX = _ref2.clientX;
      var clientY = _ref2.clientY;

      if (!this.state.isActive) return;
      var _state = this.state;
      var direction = _state.direction;
      var original = _state.original;
      var width = _state.width;
      var height = _state.height;
      var _props = this.props;
      var minWidth = _props.minWidth;
      var maxWidth = _props.maxWidth;
      var minHeight = _props.minHeight;
      var maxHeight = _props.maxHeight;
      var lockAspectRatio = _props.lockAspectRatio;

      var ratio = original.height / original.width;
      var newWidth = original.width;
      var newHeight = original.height;
      if (/right/i.test(direction)) {
        newWidth = original.width + clientX - original.x;
        var min = minWidth < 0 || typeof minWidth === 'undefined' ? 0 : minWidth;
        var max = maxWidth < 0 || typeof maxWidth === 'undefined' ? newWidth : maxWidth;
        newWidth = clamp(newWidth, min, max);
        newWidth = snap(newWidth, this.props.grid[0]);
      }
      if (/left/i.test(direction)) {
        newWidth = original.width - clientX + original.x;
        var _min = minWidth < 0 || typeof minWidth === 'undefined' ? 0 : minWidth;
        var _max = maxWidth < 0 || typeof maxWidth === 'undefined' ? newWidth : maxWidth;
        newWidth = clamp(newWidth, _min, _max);
        newWidth = snap(newWidth, this.props.grid[0]);
      }
      if (/bottom/i.test(direction)) {
        newHeight = original.height + clientY - original.y;
        var _min2 = minHeight < 0 || typeof minHeight === 'undefined' ? 0 : minHeight;
        var _max2 = maxHeight < 0 || typeof maxHeight === 'undefined' ? newHeight : maxHeight;
        newHeight = clamp(newHeight, _min2, _max2);
        newHeight = snap(newHeight, this.props.grid[1]);
      }
      if (/top/i.test(direction)) {
        newHeight = original.height - clientY + original.y;
        var _min3 = minHeight < 0 || typeof minHeight === 'undefined' ? 0 : minHeight;
        var _max3 = maxHeight < 0 || typeof maxHeight === 'undefined' ? newHeight : maxHeight;
        newHeight = clamp(newHeight, _min3, _max3);
        newHeight = snap(newHeight, this.props.grid[1]);
      }
      if (lockAspectRatio) {
        var deltaWidth = Math.abs(newWidth - original.width);
        var deltaHeight = Math.abs(newHeight - original.height);
        newWidth = newHeight / ratio;
        newHeight = newWidth * ratio;
      }
      this.setState({
        width: width !== 'auto' ? newWidth : 'auto',
        height: height !== 'auto' ? newHeight : 'auto'
      });
      var resizable = this.refs.resizable;
      var styleSize = {
        width: newWidth || this.state.width,
        height: newHeight || this.state.height
      };
      var clientSize = {
        width: resizable.clientWidth,
        height: resizable.clientHeight
      };
      var delta = {
        width: newWidth - original.width,
        height: newHeight - original.height
      };
      this.props.onResize(direction, styleSize, clientSize, delta);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      var _state2 = this.state;
      var isActive = _state2.isActive;
      var direction = _state2.direction;
      var original = _state2.original;

      if (!isActive) return;
      var resizable = this.refs.resizable;
      var styleSize = this.getBoxSize();
      var clientSize = {
        width: resizable.clientWidth,
        height: resizable.clientHeight
      };
      var delta = {
        width: styleSize.width - original.width,
        height: styleSize.height - original.height
      };
      this.props.onResizeStop(direction, styleSize, clientSize, delta);
      this.setState({ isActive: false });
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(direction, e) {
      var ev = e.touches ? e.touches[0] : e;
      var clientSize = {
        width: this.refs.resizable.clientWidth,
        height: this.refs.resizable.clientHeight
      };
      this.props.onResizeStart(direction, this.getBoxSize(), clientSize, e);
      var size = this.getBoxSize();
      this.setState({
        original: {
          x: ev.clientX,
          y: ev.clientY,
          width: size.width,
          height: size.height
        },
        isActive: true,
        direction: direction
      });
    }
  }, {
    key: 'getBoxSize',
    value: function getBoxSize() {
      var width = '0';
      var height = '0';
      if (typeof window !== 'undefined') {
        var style = window.getComputedStyle(this.refs.resizable, null);
        width = ~~style.getPropertyValue('width').replace('px', '');
        height = ~~style.getPropertyValue('height').replace('px', '');
      }
      return { width: width, height: height };
    }
  }, {
    key: 'setSize',
    value: function setSize(size) {
      this.setState({
        width: this.state.width || size.width,
        height: this.state.height || size.height
      });
    }
  }, {
    key: 'getBoxStyle',
    value: function getBoxStyle() {
      var _this2 = this;

      var getSize = function getSize(key) {
        if (typeof _this2.state[key] === 'undefined' || _this2.state[key] === 'auto') return 'auto';else if (/px$/.test(_this2.state[key].toString())) return _this2.state[key];else if (/%$/.test(_this2.state[key].toString())) return _this2.state[key];
        return _this2.state[key] + 'px';
      };
      return {
        width: getSize('width'),
        height: getSize('height')
      };
    }
  }, {
    key: 'updateSize',
    value: function updateSize(_ref3) {
      var width = _ref3.width;
      var height = _ref3.height;

      this.setState({ width: width, height: height });
    }
  }, {
    key: 'renderResizer',
    value: function renderResizer() {
      var _this3 = this;

      var _props2 = this.props;
      var isResizable = _props2.isResizable;
      var handleStyle = _props2.handleStyle;
      var handleClass = _props2.handleClass;

      return Object.keys(isResizable).map(function (dir) {
        if (isResizable[dir] !== false) {
          return _react2.default.createElement(_resizer2.default, {
            key: dir,
            type: dir,
            onResizeStart: _this3.onResizeStartWithDirection[dir],
            replaceStyles: handleStyle[dir],
            className: handleClass[dir]
          });
        }
        return null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var userSelect = this.state.isActive ? {
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        MsUserSelect: 'none'
      } : {
        userSelect: 'auto',
        MozUserSelect: 'auto',
        WebkitUserSelect: 'auto',
        MsUserSelect: 'auto'
      };
      var style = this.getBoxStyle();
      var _props3 = this.props;
      var onClick = _props3.onClick;
      var customStyle = _props3.customStyle;
      var customClass = _props3.customClass;
      var onMouseDown = _props3.onMouseDown;
      var onDoubleClick = _props3.onDoubleClick;
      var onTouchStart = _props3.onTouchStart;

      return _react2.default.createElement(
        'div',
        _extends({
          ref: 'resizable',
          style: _extends({
            position: 'relative'
          }, userSelect, customStyle, style),
          className: customClass,
          onClick: onClick,
          onMouseDown: onMouseDown,
          onDoubleClick: onDoubleClick,
          onTouchStart: onTouchStart
        }, this.props.extendsProps),
        this.props.children,
        this.renderResizer()
      );
    }
  }]);

  return Resizable;
}(_react.Component);

Resizable.propTypes = {
  children: _react.PropTypes.any,
  onClick: _react.PropTypes.func,
  onDoubleClick: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onResizeStop: _react.PropTypes.func,
  onResizeStart: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onResize: _react.PropTypes.func,
  customStyle: _react.PropTypes.object,
  handleStyle: _react.PropTypes.shape({
    top: _react.PropTypes.object,
    right: _react.PropTypes.object,
    bottom: _react.PropTypes.object,
    left: _react.PropTypes.object,
    topRight: _react.PropTypes.object,
    bottomRight: _react.PropTypes.object,
    bottomLeft: _react.PropTypes.object,
    topLeft: _react.PropTypes.object
  }),
  handleClass: _react.PropTypes.shape({
    top: _react.PropTypes.string,
    right: _react.PropTypes.string,
    bottom: _react.PropTypes.string,
    left: _react.PropTypes.string,
    topRight: _react.PropTypes.string,
    bottomRight: _react.PropTypes.string,
    bottomLeft: _react.PropTypes.string,
    topLeft: _react.PropTypes.string
  }),
  isResizable: _react.PropTypes.shape({
    top: _react.PropTypes.bool,
    right: _react.PropTypes.bool,
    bottom: _react.PropTypes.bool,
    left: _react.PropTypes.bool,
    topRight: _react.PropTypes.bool,
    bottomRight: _react.PropTypes.bool,
    bottomLeft: _react.PropTypes.bool,
    topLeft: _react.PropTypes.bool
  }),
  customClass: _react.PropTypes.string,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  minWidth: _react.PropTypes.number,
  minHeight: _react.PropTypes.number,
  maxWidth: _react.PropTypes.number,
  maxHeight: _react.PropTypes.number,
  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
  lockAspectRatio: _react.PropTypes.bool.isRequired,
  extendsProps: _react.PropTypes.object
};
Resizable.defaultProps = {
  onResizeStart: function onResizeStart() {
    return null;
  },
  onResize: function onResize() {
    return null;
  },
  onResizeStop: function onResizeStop() {
    return null;
  },
  isResizable: {
    top: true, right: true, bottom: true, left: true,
    topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
  },
  customStyle: {},
  handleStyle: {},
  handleClass: {},
  grid: [1, 1],
  lockAspectRatio: false
};
exports.default = Resizable;
module.exports = exports['default'];

/***/ }),
/* 1735 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(101);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    position: 'absolute'
  },
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize'
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize'
  },
  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'sw-resize'
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'nw-resize'
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'ne-resize'
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'se-resize'
  }
};

var Resizer = function (_Component) {
  _inherits(Resizer, _Component);

  function Resizer(props) {
    _classCallCheck(this, Resizer);

    var _this = _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).call(this, props));

    _this.onTouchStart = _this.onTouchStart.bind(_this);
    return _this;
  }

  _createClass(Resizer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _lodash2.default)(this.props, nextProps);
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(event) {
      this.props.onResizeStart(event);
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      if (this.props.replaceStyles) return this.props.replaceStyles;
      return _extends({}, styles.base, styles[this.props.type]);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: this.props.className,
        style: this.getStyle(),
        onMouseDown: this.props.onResizeStart,
        onTouchStart: this.onTouchStart
      });
    }
  }]);

  return Resizer;
}(_react.Component);

Resizer.propTypes = {
  onResizeStart: _react.PropTypes.func,
  type: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft']).isRequired,
  replaceStyles: _react.PropTypes.object,
  className: _react.PropTypes.string
};
exports.default = Resizer;
module.exports = exports['default'];

/***/ }),
/* 1736 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_sortBy__ = __webpack_require__(1690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_sortBy__);





var Manager = function () {
	function Manager() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Manager);

		this.refs = {};
	}

	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Manager, [{
		key: 'add',
		value: function add(collection, ref) {
			if (!this.refs[collection]) this.refs[collection] = [];

			this.refs[collection].push(ref);
		}
	}, {
		key: 'remove',
		value: function remove(collection, ref) {
			var index = this.getIndex(collection, ref);

			if (index !== -1) {
				this.refs[collection].splice(index, 1);
			}
		}
	}, {
		key: 'getActive',
		value: function getActive() {
			var _this = this;

			return __WEBPACK_IMPORTED_MODULE_2_lodash_find___default()(this.refs[this.active.collection], function (_ref) {
				var node = _ref.node;
				return node.sortableInfo.index == _this.active.index;
			});
		}
	}, {
		key: 'getIndex',
		value: function getIndex(collection, ref) {
			return this.refs[collection].indexOf(ref);
		}
	}, {
		key: 'getOrderedRefs',
		value: function getOrderedRefs() {
			var collection = arguments.length <= 0 || arguments[0] === undefined ? this.active.collection : arguments[0];

			return __WEBPACK_IMPORTED_MODULE_3_lodash_sortBy___default()(this.refs[collection], function (_ref2) {
				var node = _ref2.node;
				return node.sortableInfo.index;
			});
		}
	}]);

	return Manager;
}();

/* harmony default export */ __webpack_exports__["a"] = (Manager);

/***/ }),
/* 1737 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SortableContainer__ = __webpack_require__(1332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__SortableContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortableElement__ = __webpack_require__(1333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__SortableElement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SortableHandle__ = __webpack_require__(1334);
/* unused harmony reexport SortableHandle */
/* unused harmony reexport sortableContainer */
/* unused harmony reexport sortableElement */
/* unused harmony reexport sortableHandle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(936);
/* unused harmony reexport arrayMove */
















/***/ }),
/* 1738 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(1335);
/* unused harmony reexport default */
/* unused harmony reexport ArrowKeyStepper */





/***/ }),
/* 1739 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoSizer__ = __webpack_require__(1336);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AutoSizer__["a"]; });





/***/ }),
/* 1740 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultCellSizeCache__ = __webpack_require__(1244);
/* unused harmony export default */


/**
 * Alternate CellMeasurer `cellSizeCache` implementation.
 * Similar to `defaultCellSizeCache` except that sizes are tied to data id rather than index.
 * Requires an index-to-id map function (passed in externally) to operate.
 */
function idCellSizeCache(_ref) {
  var indexToIdMap = _ref.indexToIdMap;
  var _ref$uniformColumnWid = _ref.uniformColumnWidth;
  var uniformColumnWidth = _ref$uniformColumnWid === undefined ? false : _ref$uniformColumnWid;
  var _ref$uniformRowHeight = _ref.uniformRowHeight;
  var uniformRowHeight = _ref$uniformRowHeight === undefined ? false : _ref$uniformRowHeight;

  var cellSizeCache = new __WEBPACK_IMPORTED_MODULE_0__defaultCellSizeCache__["a" /* default */]({
    uniformColumnWidth: uniformColumnWidth,
    uniformRowHeight: uniformRowHeight
  });

  return {
    clearAllColumnWidths: function clearAllColumnWidths() {
      cellSizeCache.clearAllColumnWidths();
    },
    clearAllRowHeights: function clearAllRowHeights() {
      cellSizeCache.clearAllRowHeights();
    },
    clearColumnWidth: function clearColumnWidth(index) {
      cellSizeCache.clearColumnWidth(indexToIdMap(index));
    },
    clearRowHeight: function clearRowHeight(index) {
      cellSizeCache.clearRowHeight(indexToIdMap(index));
    },
    getColumnWidth: function getColumnWidth(index) {
      return cellSizeCache.getColumnWidth(indexToIdMap(index));
    },
    getRowHeight: function getRowHeight(index) {
      return cellSizeCache.getRowHeight(indexToIdMap(index));
    },
    setColumnWidth: function setColumnWidth(index, width) {
      cellSizeCache.setColumnWidth(indexToIdMap(index), width);
    },
    setRowHeight: function setRowHeight(index, height) {
      cellSizeCache.setRowHeight(indexToIdMap(index), height);
    }
  };
}

/***/ }),
/* 1741 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__ = __webpack_require__(1337);
/* unused harmony reexport default */
/* unused harmony reexport CellMeasurer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellSizeCache__ = __webpack_require__(1244);
/* unused harmony reexport defaultCellSizeCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idCellSizeCache__ = __webpack_require__(1740);
/* unused harmony reexport idCellSizeCache */









/***/ }),
/* 1742 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_createCallbackMemoizer__ = __webpack_require__(1246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize__ = __webpack_require__(1290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare__);












// @TODO It would be nice to refactor Grid to use this code as well.

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CollectionView, _Component);

  function CollectionView(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CollectionView);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CollectionView.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CollectionView)).call(this, props, context));

    _this.state = {
      calculateSizeAndPositionDataOnNextUpdate: false,
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    // Invokes callbacks only when their values have changed.
    _this._onSectionRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around.
    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
    return _this;
  }

  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CollectionView, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this.setState({
        calculateSizeAndPositionDataOnNextUpdate: true
      });
    }

    /* ---------------------------- Component lifecycle methods ---------------------------- */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var cellLayoutManager = _props.cellLayoutManager;
      var scrollLeft = _props.scrollLeft;
      var scrollToCell = _props.scrollToCell;
      var scrollTop = _props.scrollTop;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default()();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Update onSectionRendered callback.
      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize();

      var totalHeight = _cellLayoutManager$ge.height;
      var totalWidth = _cellLayoutManager$ge.width;

      // Initialize onScroll callback.

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props;
      var height = _props2.height;
      var scrollToAlignment = _props2.scrollToAlignment;
      var scrollToCell = _props2.scrollToCell;
      var width = _props2.width;
      var _state = this.state;
      var scrollLeft = _state.scrollLeft;
      var scrollPositionChangeReason = _state.scrollPositionChangeReason;
      var scrollTop = _state.scrollTop;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToCell values requires it
      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var cellLayoutManager = this.props.cellLayoutManager;


      cellLayoutManager.calculateSizeAndPositionData();

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()
      this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default()();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.cellCount === 0 && (nextState.scrollLeft !== 0 || nextState.scrollTop !== 0)) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        this._setScrollPosition({
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        });
      }

      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || nextState.calculateSizeAndPositionDataOnNextUpdate) {
        nextProps.cellLayoutManager.calculateSizeAndPositionData();
      }

      if (nextState.calculateSizeAndPositionDataOnNextUpdate) {
        this.setState({
          calculateSizeAndPositionDataOnNextUpdate: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var autoHeight = _props3.autoHeight;
      var cellCount = _props3.cellCount;
      var cellLayoutManager = _props3.cellLayoutManager;
      var className = _props3.className;
      var height = _props3.height;
      var horizontalOverscanSize = _props3.horizontalOverscanSize;
      var id = _props3.id;
      var noContentRenderer = _props3.noContentRenderer;
      var style = _props3.style;
      var verticalOverscanSize = _props3.verticalOverscanSize;
      var width = _props3.width;
      var _state2 = this.state;
      var isScrolling = _state2.isScrolling;
      var scrollLeft = _state2.scrollLeft;
      var scrollTop = _state2.scrollTop;

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize();

      var totalHeight = _cellLayoutManager$ge2.height;
      var totalWidth = _cellLayoutManager$ge2.width;

      // Safely expand the rendered area by the specified overscan amount

      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];

      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      };

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          ref: function ref(_ref) {
            _this2._scrollingContainer = _ref;
          },
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ReactVirtualized__Collection', className),
          id: id,
          onScroll: this._onScroll,
          role: 'grid',
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, collectionStyle, style),
          tabIndex: 0
        },
        cellCount > 0 && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Collection__innerScrollContainer',
            style: {
              height: totalHeight,
              maxHeight: totalHeight,
              maxWidth: totalWidth,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              width: totalWidth
            }
          },
          childrenToDisplay
        ),
        cellCount === 0 && noContentRenderer()
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_10_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }

    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_enablePointerEventsAfterDelay',
    value: function _enablePointerEventsAfterDelay() {
      var _this3 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this3.props.isScrollingChange;


        isScrollingChange(false);

        _this3._disablePointerEventsTimeoutId = null;
        _this3.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: '_invokeOnSectionRenderedHelper',
    value: function _invokeOnSectionRenderedHelper() {
      var _props4 = this.props;
      var cellLayoutManager = _props4.cellLayoutManager;
      var onSectionRendered = _props4.onSectionRendered;


      this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref2) {
      var _this4 = this;

      var scrollLeft = _ref2.scrollLeft;
      var scrollTop = _ref2.scrollTop;
      var totalHeight = _ref2.totalHeight;
      var totalWidth = _ref2.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref3) {
          var scrollLeft = _ref3.scrollLeft;
          var scrollTop = _ref3.scrollTop;
          var _props5 = _this4.props;
          var height = _props5.height;
          var onScroll = _props5.onScroll;
          var width = _props5.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref4) {
      var scrollLeft = _ref4.scrollLeft;
      var scrollTop = _ref4.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_updateScrollPositionForScrollToCell',
    value: function _updateScrollPositionForScrollToCell() {
      var _props6 = this.props;
      var cellLayoutManager = _props6.cellLayoutManager;
      var height = _props6.height;
      var scrollToAlignment = _props6.scrollToAlignment;
      var scrollToCell = _props6.scrollToCell;
      var width = _props6.width;
      var _state3 = this.state;
      var scrollLeft = _state3.scrollLeft;
      var scrollTop = _state3.scrollTop;


      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          this._setScrollPosition(scrollPosition);
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._enablePointerEventsAfterDelay();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _props7 = this.props;
      var cellLayoutManager = _props7.cellLayoutManager;
      var height = _props7.height;
      var isScrollingChange = _props7.isScrollingChange;
      var width = _props7.width;

      var scrollbarSize = this._scrollbarSize;

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize();

      var totalHeight = _cellLayoutManager$ge3.height;
      var totalWidth = _cellLayoutManager$ge3.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
        if (!this.state.isScrolling) {
          isScrollingChange(true);
        }

        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    }
  }]);

  return CollectionView;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  style: {},
  verticalOverscanSize: 0
};
/* harmony default export */ __webpack_exports__["a"] = (CollectionView);
 true ? CollectionView.propTypes = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].bool,

  /**
   * Number of cells in collection.
   */
  cellCount: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].object.isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  isScrollingChange: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Vertical offset.
   */
  scrollTop: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].object,

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number.isRequired
} : void 0;

/***/ }),
/* 1743 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section = function () {
  function Section(_ref) {
    var height = _ref.height;
    var width = _ref.width;
    var x = _ref.x;
    var y = _ref.y;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this._indexMap = {};
    this._indices = [];
  }

  /** Add a cell to this section. */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Section, [{
    key: 'addCellIndex',
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }

    /** Get all cell indices that have been added to this section. */

  }, {
    key: 'getCellIndices',
    value: function getCellIndices() {
      return this._indices;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
    }
  }]);

  return Section;
}(); /** @rlow */


/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),
/* 1744 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Section__ = __webpack_require__(1743);



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */



var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SectionManager);

    this._sectionSize = sectionSize;

    this._cellMetadata = [];
    this._sections = {};
  }

  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SectionManager, [{
    key: 'getCellIndices',
    value: function getCellIndices(_ref) {
      var height = _ref.height;
      var width = _ref.width;
      var x = _ref.x;
      var y = _ref.y;

      var indices = {};

      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      });

      // Object keys are strings; this function returns numbers
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices).map(function (index) {
        return indices[index];
      });
    }

    /** Get size and position information for the cell specified. */

  }, {
    key: 'getCellMetadata',
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;

      return this._cellMetadata[index];
    }

    /** Get all Sections overlapping the specified region. */

  }, {
    key: 'getSections',
    value: function getSections(_ref3) {
      var height = _ref3.height;
      var width = _ref3.width;
      var x = _ref3.x;
      var y = _ref3.y;

      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = sectionX + '.' + sectionY;

          if (!this._sections[key]) {
            this._sections[key] = new __WEBPACK_IMPORTED_MODULE_3__Section__["a" /* default */]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }

    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: 'getTotalSectionCount',
    value: function getTotalSectionCount() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).length;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }

    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: 'registerCell',
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum;
      var index = _ref4.index;

      this._cellMetadata[index] = cellMetadatum;

      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({ index: index });
      });
    }
  }]);

  return SectionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (SectionManager);

/***/ }),
/* 1745 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collection__ = __webpack_require__(1338);
/* unused harmony reexport default */
/* unused harmony reexport Collection */





/***/ }),
/* 1746 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionManager__ = __webpack_require__(1744);
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionData;


function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount;
  var cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter;
  var sectionSize = _ref.sectionSize;

  var cellMetadata = [];
  var sectionManager = new __WEBPACK_IMPORTED_MODULE_0__SectionManager__["a" /* default */](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),
/* 1747 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__ = __webpack_require__(1339);
/* unused harmony reexport default */
/* unused harmony reexport ColumnSizer */





/***/ }),
/* 1748 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager = function () {
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount;
    var cellSizeGetter = _ref.cellSizeGetter;
    var estimatedCellSize = _ref.estimatedCellSize;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellSizeAndPositionManager);

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;

    // Cache of size and position data for cells, mapped by cell index.
    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
    this._cellSizeAndPositionData = {};

    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
    this._lastMeasuredIndex = -1;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellSizeAndPositionManager, [{
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount;
      var estimatedCellSize = _ref2.estimatedCellSize;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          if (_size == null || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          }

          this._cellSizeAndPositionData[i] = {
            offset: _offset,
            size: _size
          };

          _offset += _size;
        }

        this._lastMeasuredIndex = index;
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completedly estimated initially.
     * As cells as measured the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();

      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align;
      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
      var containerSize = _ref3.containerSize;
      var currentOffset = _ref3.currentOffset;
      var targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize;
      var offset = _ref4.offset;

      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(_ref5) {
      var high = _ref5.high;
      var low = _ref5.low;
      var offset = _ref5.offset;

      var middle = void 0;
      var currentOffset = void 0;

      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(_ref6) {
      var index = _ref6.index;
      var offset = _ref6.offset;

      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch({
        high: Math.min(index, this._cellCount - 1),
        low: Math.floor(index / 2),
        offset: offset
      });
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch({
          high: lastMeasuredIndex,
          low: 0,
          offset: offset
        });
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch({
          index: lastMeasuredIndex,
          offset: offset
        });
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellSizeAndPositionManager);

/***/ }),
/* 1749 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__ = __webpack_require__(1748);
/* unused harmony export DEFAULT_MAX_SCROLL_SIZE */





/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */
var DEFAULT_MAX_SCROLL_SIZE = 1500000;

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */

var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize;
    var maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize;

    var params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['maxScrollSize']);

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__["a" /* default */](params);
    this._maxScrollSize = maxScrollSize;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScalingCellSizeAndPositionManager, [{
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scalled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize;
      var offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align;
      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
      var containerSize = _ref3.containerSize;
      var currentOffset = _ref3.currentOffset;
      var targetIndex = _ref3.targetIndex;
      var totalSize = _ref3.totalSize;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex,
        totalSize: totalSize
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize;
      var offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize;
      var offset = _ref5.offset;
      var totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize;
      var offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize;
      var offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ScalingCellSizeAndPositionManager);

/***/ }),
/* 1750 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionDataAndUpdateScrollOffset;
/**
 * Helper method that determines when to recalculate row or column metadata.
 *
 * @param cellCount Number of rows or columns in the current axis
 * @param cellsSize Width or height of cells for the current axis
 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
 * @param nextCellsCount Newly updated number of rows or columns in the current axis
 * @param nextCellsSize Newly updated width or height of cells for the current axis
 * @param nextScrollToIndex Newly updated scroll-to-index
 * @param scrollToIndex Scroll-to-index
 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount;
  var cellSize = _ref.cellSize;
  var computeMetadataCallback = _ref.computeMetadataCallback;
  var computeMetadataCallbackProps = _ref.computeMetadataCallbackProps;
  var nextCellsCount = _ref.nextCellsCount;
  var nextCellSize = _ref.nextCellSize;
  var nextScrollToIndex = _ref.nextScrollToIndex;
  var scrollToIndex = _ref.scrollToIndex;
  var updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),
/* 1751 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCROLL_DIRECTION_FORWARD; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getOverscanIndices;
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 *
 * @param cellCount Number of rows or columns in the current axis
 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD
 * @param overscanCellsCount Maximum number of cells to over-render in either direction
 * @param startIndex Begin of range of visible cells
 * @param stopIndex End of range of visible cells
 */
function getOverscanIndices(_ref) {
  var cellCount = _ref.cellCount;
  var overscanCellsCount = _ref.overscanCellsCount;
  var scrollDirection = _ref.scrollDirection;
  var startIndex = _ref.startIndex;
  var stopIndex = _ref.stopIndex;

  var overscanStartIndex = void 0;
  var overscanStopIndex = void 0;

  switch (scrollDirection) {
    case SCROLL_DIRECTION_FORWARD:
      overscanStartIndex = startIndex;
      overscanStopIndex = stopIndex + overscanCellsCount;
      break;
    case SCROLL_DIRECTION_BACKWARD:
      overscanStartIndex = startIndex - overscanCellsCount;
      overscanStopIndex = stopIndex;
      break;
  }

  return {
    overscanStartIndex: Math.max(0, overscanStartIndex),
    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
  };
}

/***/ }),
/* 1752 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateScrollIndexHelper;
/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 *
 * @param cellsSize Width or height of cells for the current axis
 * @param cellSizeAndPositionManager Manages size and position metadata of cells
 * @param previousCellsCount Previous number of rows or columns
 * @param previousCellsSize Previous width or height of cells
 * @param previousScrollToIndex Previous scroll-to-index
 * @param previousSize Previous width or height of the virtualized container
 * @param scrollOffset Current scrollLeft or scrollTop
 * @param scrollToIndex Scroll-to-index
 * @param size Width or height of the virtualized container
 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
 */
function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize;
  var cellSizeAndPositionManager = _ref.cellSizeAndPositionManager;
  var previousCellsCount = _ref.previousCellsCount;
  var previousCellSize = _ref.previousCellSize;
  var previousScrollToAlignment = _ref.previousScrollToAlignment;
  var previousScrollToIndex = _ref.previousScrollToIndex;
  var previousSize = _ref.previousSize;
  var scrollOffset = _ref.scrollOffset;
  var scrollToAlignment = _ref.scrollToAlignment;
  var scrollToIndex = _ref.scrollToIndex;
  var size = _ref.size;
  var updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),
/* 1753 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__ = __webpack_require__(1342);
/* unused harmony reexport default */
/* unused harmony reexport InfiniteLoader */





/***/ }),
/* 1754 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(1343);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__List__["a"]; });





/***/ }),
/* 1755 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MultiGrid__ = __webpack_require__(1344);
/* unused harmony reexport default */
/* unused harmony reexport MultiGrid */





/***/ }),
/* 1756 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollSync__ = __webpack_require__(1345);
/* unused harmony reexport default */
/* unused harmony reexport ScrollSync */





/***/ }),
/* 1757 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__(1348);
/* unused harmony reexport default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellDataGetter__ = __webpack_require__(1349);
/* unused harmony reexport defaultCellDataGetter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCellRenderer__ = __webpack_require__(1350);
/* unused harmony reexport defaultCellRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultHeaderRenderer__ = __webpack_require__(1351);
/* unused harmony reexport defaultHeaderRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultRowRenderer__ = __webpack_require__(1352);
/* unused harmony reexport defaultRowRenderer */
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Column__ = __webpack_require__(1346);
/* unused harmony reexport Column */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SortDirection__ = __webpack_require__(1245);
/* unused harmony reexport SortDirection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SortIndicator__ = __webpack_require__(1347);
/* unused harmony reexport SortIndicator */



















/***/ }),
/* 1758 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WindowScroller__ = __webpack_require__(1353);
/* unused harmony reexport default */
/* unused harmony reexport WindowScroller */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_onScroll__ = __webpack_require__(1354);
/* unused harmony reexport IS_SCROLLING_TIMEOUT */







/***/ }),
/* 1759 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHeight;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionFromTop;
/* harmony export (immutable) */ __webpack_exports__["c"] = getScrollTop;
/**
 * Gets the height of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
function getHeight(element) {
  return element === window ? window.innerHeight : element.getBoundingClientRect().height;
}

/**
 * Gets the vertical position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top position will be a negative number and this element’s top will be increased (by that amount).
 */
function getPositionFromTop(element, container) {
  var offset = container === window ? 0 : getScrollTop(container);
  var containerElement = container === window ? document.documentElement : container;
  return element.getBoundingClientRect().top + offset - containerElement.getBoundingClientRect().top;
}

/**
 * Gets the vertical scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollTop(element) {
  if (element === window) {
    return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
  } else {
    return element.scrollTop;
  }
}

/***/ }),
/* 1760 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(1738);
/* unused harmony reexport ArrowKeyStepper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoSizer__ = __webpack_require__(1739);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__AutoSizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__(1741);
/* unused harmony reexport CellMeasurer */
/* unused harmony reexport defaultCellMeasurerCellSizeCache */
/* unused harmony reexport uniformSizeCellMeasurerCellSizeCache */
/* unused harmony reexport idCellMeasurerCellSizeCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collection__ = __webpack_require__(1745);
/* unused harmony reexport Collection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ColumnSizer__ = __webpack_require__(1747);
/* unused harmony reexport ColumnSizer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Table__ = __webpack_require__(1757);
/* unused harmony reexport defaultTableCellDataGetter */
/* unused harmony reexport defaultTableCellRenderer */
/* unused harmony reexport defaultTableHeaderRenderer */
/* unused harmony reexport defaultTableRowRenderer */
/* unused harmony reexport Table */
/* unused harmony reexport Column */
/* unused harmony reexport SortDirection */
/* unused harmony reexport SortIndicator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Grid__ = __webpack_require__(937);
/* unused harmony reexport defaultCellRangeRenderer */
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__InfiniteLoader__ = __webpack_require__(1753);
/* unused harmony reexport InfiniteLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List__ = __webpack_require__(1754);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MultiGrid__ = __webpack_require__(1755);
/* unused harmony reexport MultiGrid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollSync__ = __webpack_require__(1756);
/* unused harmony reexport ScrollSync */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WindowScroller__ = __webpack_require__(1758);
/* unused harmony reexport WindowScroller */













/***/ }),
/* 1761 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUpdatedOffsetForIndex;
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align;
  var align = _ref$align === undefined ? 'auto' : _ref$align;
  var cellOffset = _ref.cellOffset;
  var cellSize = _ref.cellSize;
  var containerSize = _ref.containerSize;
  var currentOffset = _ref.currentOffset;

  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),
/* 1762 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 **/

function createDetectElementResize() {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = this;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles() {
    if (!document.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) element.attachEvent('onresize', fn);else {
      if (!element.__resizeTriggers__) {
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles();
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) resetTriggers(element);
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) element.detachEvent('onresize', fn);else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),
/* 1763 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowEqual = __webpack_require__(1804);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ }),
/* 1764 */,
/* 1765 */,
/* 1766 */,
/* 1767 */,
/* 1768 */,
/* 1769 */,
/* 1770 */,
/* 1771 */,
/* 1772 */,
/* 1773 */,
/* 1774 */,
/* 1775 */,
/* 1776 */,
/* 1777 */,
/* 1778 */,
/* 1779 */,
/* 1780 */,
/* 1781 */,
/* 1782 */,
/* 1783 */,
/* 1784 */,
/* 1785 */,
/* 1786 */,
/* 1787 */,
/* 1788 */,
/* 1789 */,
/* 1790 */,
/* 1791 */,
/* 1792 */,
/* 1793 */,
/* 1794 */,
/* 1795 */,
/* 1796 */,
/* 1797 */,
/* 1798 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

/***/ }),
/* 1799 */,
/* 1800 */,
/* 1801 */,
/* 1802 */,
/* 1803 */,
/* 1804 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/shallowEqual.js");

/***/ })
]));
//# sourceMappingURL=visitor.668c8.js.map