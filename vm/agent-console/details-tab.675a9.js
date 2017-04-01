webpackJsonp([6],{

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28),
    now = __webpack_require__(1247),
    toNumber = __webpack_require__(330);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextArea_TextArea__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RadioBox_RadioBox__ = __webpack_require__(1448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Checkbox_CheckboxList__ = __webpack_require__(1405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_css__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Form_css__);













var RenderField = function RenderField(props) {
  var input = props.input,
      fieldInfo = props.fieldInfo,
      disable = props.disable,
      meta = props.meta,
      name = props.name,
      others = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(props, ['input', 'fieldInfo', 'disable', 'meta', 'name']);

  var touched = meta.touched,
      error = meta.error;
  var type = fieldInfo.type,
      displayText = fieldInfo.displayText,
      ifRequired = fieldInfo.ifRequired,
      options = fieldInfo.options;

  var prepend = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    id: 'error_' + name,
    className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.fieldTitle
  }, void 0, displayText, ifRequired && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.required
  }, void 0, '*'), touched && error && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.required
  }, void 0, error));
  if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["h" /* Text */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Input_Input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      maxLength: 512,
      type: 'text',
      isDisabled: disable,
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.inputWidth,
      input: input, meta: meta
    }, others)));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["g" /* TextArea */] || type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["f" /* WrapupComment */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TextArea_TextArea__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      rows: '5',
      maxLength: 512,
      type: 'text',
      isDisabled: disable,
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.inputWidth,
      input: input,
      meta: meta
    }, others)));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["c" /* Radio */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RadioBox_RadioBox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      name: name,
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.radio,
      isDisabled: disable,
      radioOption: options.map(function (item) {
        return { text: item.displayText, value: item.id.toString() };
      }),
      input: input }, others)));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["a" /* CheckBox */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Checkbox_Checkbox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ input: input }, others, { isDisabled: disable })));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["b" /* DropDownList */]) {
    var defaultSelectOption = [{ text: ' -select an option- ', value: '' }];
    var optionArray = defaultSelectOption.concat(options.map(function (item) {
      return { text: item.displayText, value: item.id.toString() };
    }));
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Select_Select__["a" /* default */], {
      input: input,
      isDisabled: disable,
      options: optionArray
    }));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["d" /* WrapupCategory */]) {
    var _defaultSelectOption = [{ text: ' -select an option- ', value: -1 }];
    var _optionArray = _defaultSelectOption.concat(options.map(function (item) {
      return { text: item.displayText, value: item.id };
    }));
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Select_Select__["a" /* default */], {
      input: input,
      isDisabled: disable,
      options: _optionArray
    }));
  } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_fieldType__["e" /* CheckBoxList */]) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
    }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Checkbox_CheckboxList__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      options: options.map(function (item) {
        return { id: item.id.toString(), text: item.displayText };
      }),
      input: input }, others, {
      isDisabled: disable
    })));
  }
  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (RenderField);

/***/ }),

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_assign__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_animate__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rc_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Tooltip_Tooltip__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Tree_css__ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Tree_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Tree_css__);



















/**
 * TreeNode
 */

var TreeNode = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(TreeNode, _React$Component);

  function TreeNode(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, TreeNode);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (TreeNode.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(TreeNode)).call(this, props));

    _this.state = {
      dataLoading: false
    };
    _this.isdbClick = false;
    _this.checkClick = false;
    _this.onCheck = _this.onCheck.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onExpand = _this.onExpand.bind(_this);
    _this.onDoubleClick = _this.onDoubleClick.bind(_this);
    _this.timer = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(TreeNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.root._treeNodeInstances) {
        this.props.root._treeNodeInstances = [];
      }
      this.props.root._treeNodeInstances.push(this);
      __WEBPACK_IMPORTED_MODULE_12_src_components_Tooltip_Tooltip__["a" /* default */].rebuild();
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
    key: 'onCheck',
    value: function onCheck() {
      this.checkClick = true;
      this.props.root.onCheck(this);
    }
  }, {
    key: 'onSelect',
    value: function onSelect() {
      this.props.root.onSelect(this.props.id, this.props.value || this.props.title);
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick() {
      this.props.root.onDoubleClick(this.props.id, this.props.value || this.props.title);
    }
  }, {
    key: 'onExpand',
    value: function onExpand() {
      var _self = this;

      var callbackPromise = this.props.root.onExpand(this);
      if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : typeof callbackPromise === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(callbackPromise)) === 'object') {
        (function () {
          var setLoading = function setLoading(dataLoading) {
            _self.setState({ dataLoading: dataLoading });
          };
          setLoading(true);
          callbackPromise.then(function () {
            setLoading(false);
          }, function () {
            setLoading(false);
          });
        })();
      }
    }
    // keyboard event support

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      e.preventDefault();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(props) {
      var renderFirst = this.renderFirst;
      this.renderFirst = 1;
      var transitionAppear = true;
      if (!renderFirst && props.expanded) {
        transitionAppear = false;
      }
      var children = props.children;
      var newChildren = children;
      if (children && children.length > 0) {
        var animProps = {};
        if (props.openTransitionName) {
          animProps.transitionName = props.openTransitionName;
        } else if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(props.openAnimation) === 'object') {
          animProps.animation = __WEBPACK_IMPORTED_MODULE_8_lodash_assign___default()({}, props.openAnimation);
          if (!transitionAppear) {
            delete animProps.animation.appear;
          }
        }
        newChildren = __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_rc_animate___default.a,
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, animProps, {
            showProp: 'data-expanded',
            transitionAppear: transitionAppear,
            component: ''
          }),
          !props.expanded ? null : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('ul', {
            className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-child-tree'], props.expanded && __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-child-tree-open']),
            'data-expanded': props.expanded
          }, void 0, __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.map(children, function (item, index) {
            return props.root.renderTreeNode(item, index, props.pos);
          }, props.root))
        );
      }
      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var tip = {};
      var content = props.title;
      var canRenderSwitcher = true;
      var newChildren = this.renderChildren(props);
      if (!newChildren || newChildren === props.children) {
        // content = newChildren;
        newChildren = null;
        if (!newChildren || props.isLeaf) {
          canRenderSwitcher = false;
        }
      }
      if (props.tooltip) {
        tip['data-tip'] = props.value;
        tip['data-for'] = 'vmtree';
      }
      // const title = <span className={style['vm-tree-title']}>{content}</span>;
      var paddingLeft = props.paddingLeft + 17 * (props.pos.split('-').length - 2) + (canRenderSwitcher ? 0 : 17);
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('li', {
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(props.className, !canRenderSwitcher && __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-leaf'], props.disabled && __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-treenode-disabled'])
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-itemWrapper'],
        style: { paddingLeft: paddingLeft },
        tabIndex: -1,
        onClick: function onClick(e) {
          e.nativeEvent.preventDefault();
          e.nativeEvent.stopPropagation();
          if (_this2.checkClick) {
            _this2.checkClick = false;
            return;
          }
          if (props.isLeaf) {
            _this2.isdbClick = false;
            if (_this2.timer !== null) {
              clearTimeout(_this2.timer);
            }
            _this2.timer = window.setTimeout(function () {
              if (_this2.isdbClick) return;
              _this2.onSelect();
            }, 300);
          } else if (canRenderSwitcher) {
            _this2.onExpand();
          }
        },
        onDoubleClick: function onDoubleClick(e) {
          e.nativeEvent.preventDefault();
          e.nativeEvent.stopPropagation();
          if (!props.disabled) {
            if (props.isLeaf) {
              _this2.isdbClick = true;
              _this2.onDoubleClick();
            } else if (canRenderSwitcher) {
              _this2.onExpand();
            }
          }
        }
      }, void 0, canRenderSwitcher && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-switcher'],
        onClick: this.onExpand
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_15__constants_enums__["b" /* icons */].arrowDown,
        className: !props.expanded ? __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a.depSpread : ''
      })), props.checkable && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__["a" /* default */], {
        input: { value: props.checked, onChange: this.onCheck }
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('a', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-node-content-wrapper']
      }, void 0, this.state.dataLoading ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-icon']
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_15__constants_enums__["b" /* icons */].loading,
        size: 8
      })) : props.isShowIcon ? props.isLeaf ? props.leafIcon && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-icon']
      }, void 0, props.leafIcon) : props.expanded ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-icon']
      }, void 0, props.expandedIcon) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-icon']
      }, void 0, props.defaultIcon) : null, props.tooltip && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, tip, {
          className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-title-wrapper']
        }),
        content
      ), !props.tooltip && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_16__Tree_css___default.a['vm-tree-title-wrapper']
      }, void 0, content))), newChildren);
    }
  }]);

  return TreeNode;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

TreeNode.defaultProps = {
  paddingLeft: 15,
  expandedIcon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_15__constants_enums__["b" /* icons */].folderOpen,
    size: 16,
    color: '#888'
  }),
  defaultIcon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_15__constants_enums__["b" /* icons */].folder,
    size: 16,
    color: '#888'
  })
};

TreeNode.isTreeNode = 1;

/* harmony default export */ __webpack_exports__["a"] = (TreeNode);

/***/ }),

/***/ 1321:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"salesforceLookup__title--3EvaJ","noteinfo":"salesforceLookup__noteinfo--2yXlY","noresult":"salesforceLookup__noresult--3M7C0","listtitle":"salesforceLookup__listtitle--2_AqQ","infoList":"salesforceLookup__infoList--hfRTv","infoContact":"salesforceLookup__infoContact--2S4MC","lookupWin":"salesforceLookup__lookupWin--qEQ6X","lookupTool":"salesforceLookup__lookupTool--2-wIz","lookupToolspan":"salesforceLookup__lookupToolspan--1o9xx","relativePosition":"salesforceLookup__relativePosition--2mGGv","searchIcon":"salesforceLookup__searchIcon--3SoNv","searchInput":"salesforceLookup__searchInput--qr_q4","lookupType":"salesforceLookup__lookupType--2iRTg","cancelButton":"salesforceLookup__cancelButton--1b4yp","input":"salesforceLookup__input--2863i","error":"salesforceLookup__error--1Bjdp","inputStyle":"salesforceLookup__inputStyle--ARJiz","lookupnoInfo":"salesforceLookup__lookupnoInfo--dbtSq","lookupError":"salesforceLookup__lookupError--1rgUC","Loading":"salesforceLookup__Loading--2TWjI","resultList":"salesforceLookup__resultList--3mroC","head":"salesforceLookup__head--29k4O","line":"salesforceLookup__line--2Aiuu"};

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"vm-tree":"Tree__vm-tree--2eNgx","vm-tree-node-content-wrapper":"Tree__vm-tree-node-content-wrapper--1MKvj","vm-tree-switcher":"Tree__vm-tree-switcher--2GX5s","vm-tree-icon":"Tree__vm-tree-icon--27Ym3","vm-tree-switcher-noop":"Tree__vm-tree-switcher-noop--3S6iL","vm-tree-child-tree":"Tree__vm-tree-child-tree--4HNJB","vm-tree-child-tree-open":"Tree__vm-tree-child-tree-open--1ZYBI","vm-tree-treenode-disabled":"Tree__vm-tree-treenode-disabled--3Ma9e","vm-tree-node-selected":"Tree__vm-tree-node-selected--2NMR3","depSpread":"Tree__depSpread--olufU","vm-tree-itemWrapper":"Tree__vm-tree-itemWrapper--1ItCh","vm-tree-title-wrapper":"Tree__vm-tree-title-wrapper--2XtEg"};

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(215),
    eq = __webpack_require__(210);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(1806);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 1336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  DATE_ROW_COUNT: 6,
  DATE_COL_COUNT: 7
};
module.exports = exports['default'];

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthFormat: 'MMMM',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _DecadePanel = __webpack_require__(1731);

var _DecadePanel2 = _interopRequireDefault(_DecadePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ROW = 4;
var COL = 3;

function goYear(direction) {
  var value = this.state.value.clone();
  value.add(direction, 'year');
  this.setState({
    value: value
  });
}

function chooseYear(year) {
  var value = this.state.value.clone();
  value.year(year);
  value.month(this.state.value.month());
  this.props.onSelect(value);
}

var YearPanel = function (_React$Component) {
  (0, _inherits3["default"])(YearPanel, _React$Component);

  function YearPanel(props) {
    (0, _classCallCheck3["default"])(this, YearPanel);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

    _this.prefixCls = props.rootPrefixCls + '-year-panel';
    _this.state = {
      value: props.value || props.defaultValue
    };
    _this.nextDecade = goYear.bind(_this, 10);
    _this.previousDecade = goYear.bind(_this, -10);
    ['showDecadePanel', 'onDecadePanelSelect'].forEach(function (method) {
      _this[method] = _this[method].bind(_this);
    });
    return _this;
  }

  YearPanel.prototype.onDecadePanelSelect = function onDecadePanelSelect(current) {
    this.setState({
      value: current,
      showDecadePanel: 0
    });
  };

  YearPanel.prototype.years = function years() {
    var value = this.state.value;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var previousYear = startYear - 1;
    var years = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      years[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var year = previousYear + index;
        var content = String(year);
        years[rowIndex][colIndex] = {
          content: content,
          year: year,
          title: content
        };
        index++;
      }
    }
    return years;
  };

  YearPanel.prototype.showDecadePanel = function showDecadePanel() {
    this.setState({
      showDecadePanel: 1
    });
  };

  YearPanel.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var locale = props.locale;
    var years = this.years();
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var endYear = startYear + 9;
    var prefixCls = this.prefixCls;

    var yeasEls = years.map(function (row, index) {
      var tds = row.map(function (yearData) {
        var _classNameMap;

        var classNameMap = (_classNameMap = {}, (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-cell', 1), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-selected-cell', yearData.year === currentYear), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-last-decade-cell', yearData.year < startYear), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-next-decade-cell', yearData.year > endYear), _classNameMap);
        var clickHandler = void 0;
        if (yearData.year < startYear) {
          clickHandler = _this2.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this2.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this2, yearData.year);
        }
        return _react2["default"].createElement(
          'td',
          {
            role: 'gridcell',
            title: yearData.title,
            key: yearData.content,
            onClick: clickHandler,
            className: (0, _classnames2["default"])(classNameMap)
          },
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-year'
            },
            yearData.content
          )
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    var decadePanel = void 0;
    if (this.state.showDecadePanel) {
      decadePanel = _react2["default"].createElement(_DecadePanel2["default"], {
        locale: locale,
        value: value,
        rootPrefixCls: props.rootPrefixCls,
        onSelect: this.onDecadePanelSelect
      });
    }

    return _react2["default"].createElement(
      'div',
      { className: this.prefixCls },
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2["default"].createElement('a', {
            className: prefixCls + '-prev-decade-btn',
            role: 'button',
            onClick: this.previousDecade,
            title: locale.previousDecade
          }),
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-decade-select',
              role: 'button',
              onClick: this.showDecadePanel,
              title: locale.decadeSelect
            },
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-decade-select-content' },
              startYear,
              '-',
              endYear
            ),
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-decade-select-arrow' },
              'x'
            )
          ),
          _react2["default"].createElement('a', {
            className: prefixCls + '-next-decade-btn',
            role: 'button',
            onClick: this.nextDecade,
            title: locale.nextDecade
          })
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            _react2["default"].createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              yeasEls
            )
          )
        )
      ),
      decadePanel
    );
  };

  return YearPanel;
}(_react2["default"].Component);

exports["default"] = YearPanel;


YearPanel.propTypes = {
  rootPrefixCls: _react.PropTypes.string,
  value: _react.PropTypes.object,
  defaultValue: _react.PropTypes.object
};

YearPanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 1339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

function mirror(o) {
  return o;
}

module.exports = function mapSelf(children) {
  // return ReactFragment
  return React.Children.map(children, mirror);
};

/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

module.exports = KeyCode;

/***/ }),

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleNavigationRefreshing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleUpdateIfNavigationLoading; });


var handleNavigationRefreshing = function handleNavigationRefreshing(visitorId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["m" /* navigationUpdate */],
    payload: visitorId
  };
};

var handleUpdateIfNavigationLoading = function handleUpdateIfNavigationLoading(status) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["n" /* updateIfNavigationLoading */],
    payload: status
  };
};

/***/ }),

/***/ 1382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleUpdateHistoryChatId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleUpdateHistoryMessageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleUpdateHistoryRefreshingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleUpdateHistoryViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleUdpateIsViewAllChats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleUdpateIsViewAllMessages; });


var handleUpdateHistoryChatId = function handleUpdateHistoryChatId(visitorId, historyChatId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["g" /* updateHistoryChatId */],
    payload: historyChatId,
    meta: visitorId
  };
};

var handleUpdateHistoryMessageId = function handleUpdateHistoryMessageId(visitorId, messageId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["h" /* updateHistoryMessageId */],
    payload: messageId,
    meta: visitorId
  };
};

var handleUpdateHistoryRefreshingStatus = function handleUpdateHistoryRefreshingStatus(visitorId, status) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["i" /* updateHistoryRefreshingStatus */],
    payload: status,
    meta: visitorId
  };
};

var handleUpdateHistoryViewType = function handleUpdateHistoryViewType(visitorId, type) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["j" /* updateHistoryViewType */],
    payload: type,
    meta: visitorId
  };
};

var handleUdpateIsViewAllChats = function handleUdpateIsViewAllChats(visitorId, status) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["k" /* updateIsViewAllChats */],
    payload: status,
    meta: visitorId
  };
};

var handleUdpateIsViewAllMessages = function handleUdpateIsViewAllMessages(visitorId, status) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["l" /* updateIsViewAllMessages */],
    payload: status,
    meta: visitorId
  };
};

/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleSubmitWrapup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return discardWrapup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wrapupHistoryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wrapupDetailsOpen; });


var handleSubmitWrapup = function handleSubmitWrapup(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["d" /* handleSubmitWrapup */],
    meta: id,
    payload: {
      ifWrapupLoading: true,
      ifWrapupSubmitSuccess: false,
      wrapupSubmitError: '',
      showWrapupRequired: false
    }
  };
};
var discardWrapup = function discardWrapup(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["d" /* handleSubmitWrapup */],
    meta: id,
    payload: {
      ifWrapupSubmitSuccess: false,
      wrapupSubmitError: ''
    }
  };
};
var wrapupHistoryLoading = function wrapupHistoryLoading(id, ifWrapupHistoryLoading) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["e" /* wrapupHistory */],
    meta: id,
    payload: {
      ifWrapupHistoryLoading: ifWrapupHistoryLoading
    }
  };
};

var wrapupDetailsOpen = function wrapupDetailsOpen(chatId, id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_types_visitorDetails__["f" /* wrapupDetails */],
    meta: chatId,
    payload: {
      wrapupDetailsOpenId: id
    }
  };
};

/***/ }),

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_pull__ = __webpack_require__(1697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_pull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_pull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_indexOf__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Checkbox_css__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Checkbox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Checkbox_css__);
















/**
 * CheckboxList
 */

var CheckboxList = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(CheckboxList, _React$Component);

  function CheckboxList(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, CheckboxList);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CheckboxList.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(CheckboxList)).call(this, props));

    _this.Change = _this.Change.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(CheckboxList, [{
    key: 'Change',
    value: function Change(value, text, id) {
      var values = this.props.input.value;
      var listValues = values.split('⊙');

      if (value) {
        if (__WEBPACK_IMPORTED_MODULE_9_lodash_indexOf___default()(listValues, id) === -1) {
          if (values.length > 0) {
            values = values + '\u2299' + id;
          } else {
            values = id;
          }
        }
      } else if (__WEBPACK_IMPORTED_MODULE_9_lodash_indexOf___default()(listValues, id) !== -1) {
        values = __WEBPACK_IMPORTED_MODULE_8_lodash_pull___default()(listValues, id).join('⊙');
      }
      var onChange = this.props.input.onChange;
      if (onChange) {
        onChange(values);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          options = _props.options,
          align = _props.align,
          rest = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'options', 'align']);

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Checkbox_css___default.a.container, className)
      }, void 0, options.map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: align === 'horizontal' ? __WEBPACK_IMPORTED_MODULE_13__Checkbox_css___default.a.horizontal : __WEBPACK_IMPORTED_MODULE_13__Checkbox_css___default.a.vertical
        }, index, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Checkbox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, { id: option.id.toString(), text: option.text, input: { value: __WEBPACK_IMPORTED_MODULE_9_lodash_indexOf___default()(_this2.props.input.value.split('⊙'), option.id.toString()) !== -1, onChange: _this2.Change } })));
      }));
    }
  }]);

  return CheckboxList;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component);

CheckboxList.defaultProps = {};

/* harmony default export */ __webpack_exports__["a"] = (CheckboxList);

/***/ }),

/***/ 1406:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_merge__ = __webpack_require__(1695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_calendar__ = __webpack_require__(1732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_calendar_lib_Picker__ = __webpack_require__(1721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_calendar_lib_Picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rc_calendar_lib_Picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rc_time_picker_lib_Panel__ = __webpack_require__(1740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rc_time_picker_lib_Panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rc_time_picker_lib_Panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rc_calendar_lib_locale_en_US__ = __webpack_require__(1337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rc_calendar_lib_locale_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rc_calendar_lib_locale_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment_src_locale_en_gb__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rc_calendar_assets_index_css__ = __webpack_require__(1649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rc_calendar_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rc_calendar_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rc_time_picker_assets_index_css__ = __webpack_require__(1650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rc_time_picker_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rc_time_picker_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datePicker_css__ = __webpack_require__(1636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__datePicker_css__);





















var getDisableLargeArrary = function getDisableLargeArrary(base, max) {
  var current = base;
  var arr = [];
  while (current < max) {
    current += 1;
    arr.push(current);
  }
  return arr;
};

var disabledTime = function disabledTime(date) {
  var startDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var endDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (!date) {
    // allow empty select
    return {};
  }
  var disabledHour = [];
  var _disabledMinutes = [];
  var _disabledSeconds = [];

  if (startDate !== undefined) {
    if (date.year() === startDate.getFullYear() && date.month() === startDate.getMonth() && date.date() === startDate.getDate()) {
      var hour = startDate.getHours();
      __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(disabledHour, getDisableLargeArrary(0, hour));
      if (date.hours() === startDate.getHours()) {
        var minutes = startDate.getMinutes();
        __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(_disabledMinutes, getDisableLargeArrary(0, minutes));
        if (date.minute() === startDate.getMinutes()) {
          var seconds = startDate.getSeconds();
          __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(_disabledSeconds, getDisableLargeArrary(0, seconds));
        }
      }
    }
  }

  if (endDate !== undefined) {
    if (date.year() === endDate.getFullYear() && date.month() === endDate.getMonth() && date.date() === endDate.getDate()) {
      var _hour = endDate.getHours();
      __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(disabledHour, getDisableLargeArrary(_hour, 24));
      if (date.hours() === endDate.getHours()) {
        var _minutes = endDate.getMinutes();
        __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(_disabledMinutes, getDisableLargeArrary(_minutes, 60));
        if (date.minutes() === endDate.getMinutes()) {
          var _seconds = endDate.getSeconds();
          __WEBPACK_IMPORTED_MODULE_7_lodash_merge___default()(_disabledSeconds, getDisableLargeArrary(_seconds, 60));
        }
      }
    }
  }

  return {
    disabledHours: function disabledHours() {
      return disabledHour;
    },
    disabledMinutes: function disabledMinutes() {
      return _disabledMinutes;
    },
    disabledSeconds: function disabledSeconds() {
      return _disabledSeconds;
    }
  };
};

var disabledDate = function disabledDate(current) {
  var startDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var endDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (!current) {
    // allow empty select
    return false;
  }
  var attemp = new Date(current.year(), current.month() + 1, current.date());
  return startDate !== undefined && attemp.getTime() < startDate.getTime() || endDate !== undefined && attemp.getTime() > endDate.getTime();
};

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_rc_time_picker_lib_Panel___default.a, {});

var DatePicker = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DatePicker, _Component);

  function DatePicker(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DatePicker);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DatePicker.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DatePicker)).call(this, props));

    if (props.minDateTime !== undefined) {
      _this.minDateTime = new Date(props.minDateTime);
      _this.minDate = new Date(props.minDateTime.year(), props.minDateTime.month() + 1, props.minDateTime.date());
    }
    if (props.minDateTime !== undefined) {
      _this.maxDateTime = new Date(props.maxDateTime);
      _this.maxDate = new Date(props.maxDateTime.year(), props.maxDateTime.month() + 1, props.maxDateTime.date());
    }
    _this.onChange = _this.onChange.bind(_this);
    _this.getFormat = _this.getFormat.bind(_this);
    _this.funcDisableDate = _this.funcDisableDate.bind(_this);
    _this.funcDisabledTime = _this.funcDisabledTime.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DatePicker, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.dateFormatter !== nextProps.dateFormatter || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.input.value, nextProps.input.value) || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.meta, nextProps.meta)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.props.input.onChange(value);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      return this.props.dateFormatter;
    }
  }, {
    key: 'funcDisableDate',
    value: function funcDisableDate(date) {
      return disabledDate(date, this.minDate, this.maxDate);
    }
  }, {
    key: 'funcDisabledTime',
    value: function funcDisabledTime(date) {
      return disabledTime(date, this.minDateTime, this.maxDateTime);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var timePickerElement = _ref;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_rc_calendar_lib_Picker___default.a, {
        animation: 'slide-up',
        disabled: false,
        calendar: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_rc_calendar___default.a, {
          locale: __WEBPACK_IMPORTED_MODULE_13_rc_calendar_lib_locale_en_US___default.a,
          style: { zIndex: 1000 },
          dateInputPlaceholder: 'please input',
          formatter: 'yyyy-MM-dd HH:mm:ss',
          timePicker: this.props.isShowTime ? timePickerElement : null,
          defaultValue: this.props.input.value || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_moment__["default"])(),
          showDateInput: false,
          disabledDate: this.funcDisableDate,
          disabledTime: this.funcDisabledTime
        }),
        value: this.props.input.value || null,
        onChange: this.onChange
      }, void 0, function (_ref2) {
        var value = _ref2.value;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          tabIndex: '0'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('input', {
          type: 'text',
          placeholder: 'please select',
          disabled: false,
          readOnly: true,
          tabIndex: '-1',
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_18__datePicker_css___default.a.input, _this2.props.className, _this2.props.meta.touched && _this2.props.meta.invalid && __WEBPACK_IMPORTED_MODULE_18__datePicker_css___default.a.error),
          value: value && value.format(_this2.getFormat(null)) || ''
        }));
      });
    }
  }]);

  return DatePicker;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

DatePicker.defaultProps = {
  isShowTime: false
};
/* harmony default export */ __webpack_exports__["a"] = (DatePicker);

/***/ }),

/***/ 1407:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_css__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Form_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__ = __webpack_require__(24);















var memoryKeyOpened = 'advancewrapupopenedgroup';
var memoryKeySelectedValue = 'advancewrapupselectedValue';

var AdvanceCategory = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AdvanceCategory, _React$Component);

  function AdvanceCategory(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AdvanceCategory);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AdvanceCategory.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AdvanceCategory)).call(this, props));

    _this.state = {
      openeds: __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].get(memoryKeyOpened + '_' + props.chatId, null, {}),
      values: __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].get(memoryKeySelectedValue + '_' + props.chatId, null, [])
    };
    _this.clickArrow = _this.clickArrow.bind(_this);
    _this.valueChange = _this.valueChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AdvanceCategory, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.chatId !== nextProps.chatId) {
        var newState = {
          openeds: __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].get(memoryKeyOpened + '_' + nextProps.chatId, null, {}),
          values: __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].get(memoryKeySelectedValue + '_' + nextProps.chatId, null, [])
        };
        this.setState(newState);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].set(memoryKeyOpened + '_' + this.props.chatId, this.state.openeds);
      __WEBPACK_IMPORTED_MODULE_12__services_memoryStore__["a" /* default */].set(memoryKeySelectedValue + '_' + this.props.chatId, this.state.values);
    }
  }, {
    key: 'clickArrow',
    value: function clickArrow(groupName) {
      var openedGroup = this.state.openeds;
      openedGroup[groupName] = !!this.state.openeds[groupName] === false;
      this.setState({
        openeds: openedGroup
      });
    }
  }, {
    key: 'valueChange',
    value: function valueChange(id) {
      var selectedValues = this.state.values;
      var i = selectedValues.indexOf(id);
      if (i >= 0) {
        selectedValues.splice(i, 1);
      } else {
        selectedValues.push(id);
      }
      this.setState({
        values: selectedValues
      });
      this.props.valueChange(selectedValues);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fieldInfo = _props.fieldInfo,
          disable = _props.disable,
          meta = _props.meta,
          fieldId = _props.fieldId;
      var touched = meta.touched,
          error = meta.error;
      var displayText = fieldInfo.displayText,
          ifRequired = fieldInfo.ifRequired,
          groups = fieldInfo.groups;

      var prepend = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        id: 'error_' + fieldId,
        className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.fieldTitle
      }, void 0, displayText, ifRequired && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.required
      }, void 0, '*'), touched && error && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.required
      }, void 0, error));
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.field
      }, void 0, prepend, groups.map(function (grp) {
        var groupName = fieldId + '_' + grp.id;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.groupsection
        }, groupName, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.groupdesc, _this2.state.openeds[groupName] && __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.opened),
          onClick: function onClick() {
            return _this2.clickArrow(groupName);
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.arrow
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_8__constants_enums__["b" /* icons */].arrowDown,
          size: 14
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.groupdesc
        }, void 0, grp.displayText)), _this2.state.openeds[groupName] && grp.options.map(function (opt) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Checkbox_Checkbox__["a" /* default */], {
            input: {
              value: _this2.state.values.indexOf(opt.id) >= 0,
              onChange: function onChange(val) {
                return _this2.valueChange(opt.id, val);
              }
            },
            text: opt.displayText,
            isDisabled: disable,
            initialValue: false,
            className: __WEBPACK_IMPORTED_MODULE_11__Form_css___default.a.item
          }, opt.id);
        }));
      }));
    }
  }]);

  return AdvanceCategory;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AdvanceCategory);

/***/ }),

/***/ 1408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RenderField__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_css__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Form_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_helper__ = __webpack_require__(16);



















var CustomFieldsForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(CustomFieldsForm, _React$Component);

  function CustomFieldsForm(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, CustomFieldsForm);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CustomFieldsForm.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(CustomFieldsForm)).call(this, props));

    _this.initValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_helper__["f" /* getInitValues */])(props.fields, props.fieldsValue);
    var cacheState = __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__["c" /* getObject */]('customFields_FormState');
    if (cacheState) {
      _this.state = cacheState;
    } else {
      _this.state = {
        values: _this.initValues,
        errors: {}
      };
    }
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(CustomFieldsForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.ifSubmitLoading !== nextProps.ifSubmitLoading || this.props.disable !== nextProps.disable || this.props.submitError !== nextProps.submitError || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, nextState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, nextState.errors)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.ifSubmitLoading && !this.props.ifSubmitLoading && this.props.submitError) {
        var errorElement = this.errorMessageDiv;
        if (errorElement) {
          if (errorElement.scrollIntoViewIfNeeded) errorElement.scrollIntoViewIfNeeded();else errorElement.scrollIntoView();
        }
      }
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, prevState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, prevState.errors)) {
        __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__["d" /* setObject */]('customFields_FormState', this.state);
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_helper__["g" /* defaultValidate */])(this.state.values, this.props.fields);
      if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e).length === 0) {
        this.props.onSubmit(this.state.values);
      } else {
        var name = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e)[0];
        var errorElement = document.getElementById('error_' + name);
        if (errorElement) {
          if (errorElement.scrollIntoViewIfNeeded) errorElement.scrollIntoViewIfNeeded();else errorElement.scrollIntoView();
        }
      }
      this.setState({
        errors: e
      });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__["b" /* deleteItem */]('customFields_FormState');
      this.props.onCancel();
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(name, value) {
      var e = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.errors);
      if (e[name]) {
        e[name] = '';
      }
      var temp = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.values);
      temp[name] = value;
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(temp, this.state.values)) {
        this.setState({
          values: temp,
          errors: e
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: props.className
      }, void 0, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.errorMessageDiv = element;
          }, className: __WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.errorMessage, style: { display: !props.ifSubmitLoading && props.submitError ? 'block' : 'none' } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.submitError)
      ), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.fields.map(function (field, idx) {
        var name = field.displayText + '_' + field.id;
        if (field.type === __WEBPACK_IMPORTED_MODULE_15__constants_enums_fieldType__["g" /* TextArea */] || field.type === __WEBPACK_IMPORTED_MODULE_15__constants_enums_fieldType__["f" /* WrapupComment */] || field.type === __WEBPACK_IMPORTED_MODULE_15__constants_enums_fieldType__["h" /* Text */]) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || '',
              onChange: function onChange(e) {
                return _this2.handleValueChange(name, e.target.value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_15__constants_enums_fieldType__["a" /* CheckBox */]) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || false,
              onChange: function onChange(value) {
                return _this2.handleValueChange(name, value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || '',
              onChange: function onChange(value) {
                return _this2.handleValueChange(name, value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.buttonWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Button_Button__["a" /* default */], {
        onClick: this.onSubmit,
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.marginRight20, __WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.okButton),
        disabled: props.ifSubmitLoading || __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.initValues, this.state.values),
        loading: props.ifSubmitLoading,
        iconPosition: 'right',
        text: 'OK',
        type: 'primary',
        htmlType: 'button'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Button_Button__["a" /* default */], {
        onClick: this.onCancel,
        text: 'Cancel',
        htmlType: 'button'
      })));
    }
  }]);

  return CustomFieldsForm;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CustomFieldsForm);

/***/ }),

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RenderField__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_css__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Form_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AdvanceCategory__ = __webpack_require__(1407);




















function checkIfAdvanceCategory() {
  var ifEnableAdvancedCategoryMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var field = arguments[1];

  if (!ifEnableAdvancedCategoryMode) return field;
  var keyMap = {};
  var groups = [];
  field.options.forEach(function (opt) {
    var index = keyMap[opt.groupId];
    var temp = { displayText: opt.groupName, id: opt.groupId, options: [] };
    if (__WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default()(index)) {
      index = groups.length;
      keyMap[opt.groupId] = index;
    } else {
      temp = groups[index];
    }
    temp.options.push(opt);
    groups[index] = temp;
  });
  return {
    id: field.id,
    type: field.type,
    displayText: field.displayText,
    ifRequired: field.ifRequired,
    groups: groups
  };
}

var WrapupForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(WrapupForm, _React$Component);

  function WrapupForm(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, WrapupForm);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WrapupForm.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(WrapupForm)).call(this, props));

    _this.defaultValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_helper__["f" /* getInitValues */])(props.fields, props.fieldsValue, _this.props.ifEnableAdvancedCategoryMode);
    var cacheInitValues = __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].get('Wrapup_initValues_' + props.chatId);
    _this.initValues = cacheInitValues || _this.defaultValues;
    var cacheState = __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].get('Wrapup_FormState_' + props.chatId);
    if (cacheState) {
      _this.state = cacheState;
    } else {
      _this.state = {
        values: _this.initValues,
        errors: {}
      };
    }
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(WrapupForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.chatId !== nextProps.chatId) {
        var cacheState = __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].get('Wrapup_FormState_' + nextProps.chatId);
        var cacheInitValues = __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].get('Wrapup_initValues_' + nextProps.chatId);
        this.initValues = cacheInitValues || this.defaultValues;
        if (cacheState) {
          this.setState(cacheState);
        } else {
          this.setState({
            values: this.initValues,
            errors: {}
          });
        }
      } else if (nextProps.ifSubmitSuccess && nextProps.ifSubmitSuccess !== this.props.ifSubmitSuccess) {
        this.initValues = this.state.values;
        __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].set('Wrapup_initValues_' + nextProps.chatId, this.state.values);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.chatId !== nextProps.chatId || this.props.ifSubmitLoading !== nextProps.ifSubmitLoading || this.props.disable !== nextProps.disable || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, nextState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, nextState.errors)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.chatId === prevProps.chatId && (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, prevState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, prevState.errors))) {
        __WEBPACK_IMPORTED_MODULE_16__services_memoryStore__["a" /* default */].set('Wrapup_FormState_' + this.props.chatId, this.state);
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_helper__["g" /* defaultValidate */])(this.state.values, this.props.fields, this.props.ifEnableAdvancedCategoryMode);
      if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e).length === 0) {
        this.props.onSubmit(this.state.values);
      } else {
        var name = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e)[0];
        var errorElement = document.getElementById('error_' + name);
        if (errorElement) {
          if (errorElement.scrollIntoViewIfNeeded) errorElement.scrollIntoViewIfNeeded();else errorElement.scrollIntoView();
        }
      }
      this.setState({
        errors: e
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.props.onCancel();
      this.setState({
        values: this.initValues || {},
        errors: {}
      });
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(name, value) {
      var fieldId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var e = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.errors);
      var key = name || fieldId;
      if (e[key]) {
        e[key] = '';
      }
      var temp = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.values);
      temp[key] = value;
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(temp, this.state.values)) {
        this.setState({
          values: temp,
          errors: e
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: props.className
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.fields.map(function (field, idx) {
        var name = field.displayText + '_' + field.id;
        if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["g" /* TextArea */] || field.type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["f" /* WrapupComment */] || field.type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["h" /* Text */]) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || '',
              onChange: function onChange(e) {
                return _this2.handleValueChange(name, e.target.value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["a" /* CheckBox */]) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || false,
              onChange: function onChange(value) {
                return _this2.handleValueChange(name, value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["d" /* WrapupCategory */]) {
          var newField = checkIfAdvanceCategory(props.ifEnableAdvancedCategoryMode, field);
          if (!props.ifEnableAdvancedCategoryMode) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
              disable: props.disable,
              name: name,
              fieldInfo: newField,
              input: { value: _this2.state.values[name] || '',
                onChange: function onChange(value) {
                  return _this2.handleValueChange(name, value);
                } },
              meta: { touched: true, invalid: !!_this2.state.errors[name], error: _this2.state.errors[name] || '' }
            }, idx);
          }
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__AdvanceCategory__["a" /* default */], {
            chatId: props.chatId,
            fieldInfo: newField,
            disable: props.disable,
            fieldId: field.id,
            meta: { touched: true, invalid: !!_this2.state.errors[name], error: _this2.state.errors[name] || '' },
            valueChange: function valueChange(val) {
              return _this2.handleValueChange(null, val, field.id);
            }
          }, field.id);
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__RenderField__["a" /* default */], {
            disable: props.disable,
            name: name,
            fieldInfo: field,
            input: { value: _this2.state.values[name] || '',
              onChange: function onChange(value) {
                return _this2.handleValueChange(name, value);
              } },
            meta: { touched: true, invalid: _this2.state.errors[name] ? true : false, error: _this2.state.errors[name] || '' }
          }, idx);
        }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.buttonWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Button_Button__["a" /* default */], {
        onClick: this.onSubmit,
        className: __WEBPACK_IMPORTED_MODULE_12__Form_css___default.a.marginRight20,
        disabled: props.disable || props.ifSubmitLoading || __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.initValues, this.state.values),
        loading: props.ifSubmitLoading,
        iconPosition: 'right',
        text: props.loading ? 'Loading' : 'Save',
        type: 'primary',
        htmlType: 'button'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Button_Button__["a" /* default */], {
        onClick: this.reset,
        text: 'Discard',
        disabled: props.disable || props.ifSubmitLoading || __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.initValues, this.state.values),
        htmlType: 'button'
      })));
    }
  }]);

  return WrapupForm;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WrapupForm);

/***/ }),

/***/ 1431:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css__ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Modal_css__);


















var SalesforceLookup = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SalesforceLookup, _Component);

  function SalesforceLookup(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SalesforceLookup);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SalesforceLookup.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SalesforceLookup)).call(this, props));

    _this.onKeyup = function (e) {
      e.keyCode === 13 && _this.searchHandler();
    };

    _this.searchHandler = function () {
      _this.setState({ isRequesting: true });
      _this.props.onSalesforcelookUp(_this.state.searchType, _this.state.searchKeyWord, _this.updateList);
    };

    _this.state = {
      searchType: props.selectOptions ? props.selectOptions[0] : '',
      searchKeyWord: '',
      props: [],
      list: [],
      isRequesting: true,
      errorInfo: ''
    };
    _this.searchTypeChange = _this.searchTypeChange.bind(_this);
    _this.searchTextChanged = _this.searchTextChanged.bind(_this);
    _this.updateList = _this.updateList.bind(_this);
    _this.onKeyup = _this.onKeyup.bind(_this);
    _this.searchHandler = _this.searchHandler.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SalesforceLookup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onSalesforcelookUp(this.props.selectOptions ? this.props.selectOptions[0] : '', '', this.updateList);
    }
  }, {
    key: 'searchTypeChange',
    value: function searchTypeChange(val) {
      this.setState({ searchType: val });
    }
  }, {
    key: 'searchTextChanged',
    value: function searchTextChanged(e) {
      this.setState({ searchKeyWord: e.target.value });
    }
  }, {
    key: 'updateList',
    value: function updateList(listInfo) {
      this.setState({ isRequesting: false });
      if (listInfo.errorCode === 0) {
        this.setState({ errorInfo: '',
          props: listInfo.props.filter(function (item) {
            return item.name !== 'id';
          }),
          list: listInfo.list });
      } else {
        this.setState({ errorInfo: listInfo.errorString });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.title
      }, void 0, 'Lookup'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.lookupTool
      }, void 0, this.props.selectOptions.length > 1 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.lookupToolspan
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Select_Select__["a" /* default */], {
        input: { onChange: this.searchTypeChange, value: this.state.searchType },
        isDisabled: false,
        options: this.props.selectOptions.map(function (item) {
          return { text: item, value: item };
        }),
        width: 100,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_16__Modal_css___default.a.dropdown,
        customizeStyle: { height: 30, top: 10 }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.lookupToolspan
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].search,
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.searchIcon,
        onClick: this.searchHandler
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Input_Input__["a" /* default */], {
        maxLength: 512,
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.searchInput,
        input: { onChange: this.searchTextChanged, value: this.state.searchKeyWord },
        meta: {},
        onKeyUp: this.onKeyup,
        placeholder: 'search'
      }))), this.state.isRequesting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.Loading
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].loading
      }), ' Loading...'), !this.state.isRequesting && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_str__["a" /* isNullOrEmpty */])(this.state.errorInfo) && (this.state.list === null || this.state.list.length === 0) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.noresult
      }, void 0, 'No resaults were found for your search.'), !this.state.isRequesting && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_str__["a" /* isNullOrEmpty */])(this.state.errorInfo) && this.state.list !== null && this.state.list.length > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.listtitle
      }, void 0, 'Search Resaults'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.infoList
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.head
      }, void 0, this.state.props.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, item.name, item.label);
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.resultList
      }, void 0, this.state.list != null && this.state.list.length > 0 && this.state.list.map(function (item, idx) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.line
        }, idx, _this2.state.props.map(function (label, idx) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, idx + ' ' + item[label.name], label.name === 'name' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Link_Link__["a" /* default */], {
            onClick: function onClick() {
              _this2.props.closeModal();
              _this2.props.onItemSelected(item.id, item[label.name]);
            }
          }, void 0, item[label.name]) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('lable', {}, void 0, item[label.name]));
        }));
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.noteinfo
      }, void 0, 'Only 20 results are displayed at most.')), !(this.state.isRequesting || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_str__["a" /* isNullOrEmpty */])(this.state.errorInfo)) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.lookupError
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Error searching Salesforce records: ' + this.state.errorInfo)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__salesforceLookup_css___default.a.cancelButton
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Button_Button__["a" /* default */], {
        text: 'Cancel',
        className: 'grayButton',
        onClick: function onClick() {
          _this2.props.closeModal();
        }
      })));
    }
  }]);

  return SalesforceLookup;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SalesforceLookup);

// <div className={style.noteinfo}>Not what you are searching for? Please try to use more precise
// key words for search.</div>

/***/ }),

/***/ 1432:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SalesforceLookup__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css__ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
















var SalesforceLookupModel = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SalesforceLookupModel, _Component);

  function SalesforceLookupModel(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SalesforceLookupModel);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SalesforceLookupModel.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SalesforceLookupModel)).call(this, props));

    _this.state = {
      isLookupOpen: false,
      searchType: 1
    };
    _this.onClose = _this.onClose.bind(_this);
    _this.onItemSelected = _this.onItemSelected.bind(_this);
    _this.handlerChange = _this.handlerChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SalesforceLookupModel, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.selectOptions, nextProps.selectOptions) || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.input.value, nextProps.input.value) || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.meta, nextProps.meta) || this.state.isLookupOpen !== nextState.isLookupOpen || this.state.searchType !== nextState.searchType) {
        return true;
      }
      return false;
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      this.setState({ isLookupOpen: false });
    }
  }, {
    key: 'onItemSelected',
    value: function onItemSelected(id, val) {
      var result = { id: id, value: val };
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.input.value, result)) this.props.input.onChange(result);
    }
  }, {
    key: 'handlerChange',
    value: function handlerChange(e) {
      var result = { id: e.target.value, value: e.target.value };
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.input.value, result)) this.props.input.onChange(result);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.relativePosition,
        tabIndex: '0'
      }, void 0, this.props.isNeedSelector && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].search,
        className: __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.searchIcon,
        onClick: function onClick() {
          return _this2.setState({ isLookupOpen: true });
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('input', {
        readOnly: this.props.isNeedSelector,
        tabIndex: '-1',
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.input, __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.inputStyle, this.props.meta.touched && this.props.meta.invalid && __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.error),
        value: this.props.input.value.value || '',
        onChange: this.props.isNeedSelector ? undefined : this.handlerChange
      }))), this.state.isLookupOpen && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Modal__["a" /* default */], {
        closeModal: this.onClose,
        className: __WEBPACK_IMPORTED_MODULE_11__salesforceLookup_css___default.a.lookupWin,
        ifShowCloseIcon: true
      }, void 0, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SalesforceLookup__["a" /* default */], {
        closeModal: this.onClose,
        selectOptions: this.props.selectOptions,
        onItemSelected: this.onItemSelected,
        onSalesforcelookUp: this.props.onSalesforcelookUp
      })));
    }
  }]);

  return SalesforceLookupModel;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SalesforceLookupModel);

/***/ }),

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css__);





/**
 * RadioBox
 */

var RadioBox = function RadioBox(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: props.className
  }, void 0, props.radioOption.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('label', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css___default.a.control, __WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css___default.a.controlRadio)
    }, index, item.text || item, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('input', {
      type: 'radio',
      name: props.name,
      value: item.value || item,
      disabled: props.isDisabled ? 'disabled' : false,
      checked: props.input.value === (item.value || item),
      onChange: function onChange(event) {
        if (props.input && props.input.onChange) {
          props.input.onChange(event.target.value);
        }
      }
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__RadioButton_RadioButton_css___default.a.controlIndicator
    }), item.component ? item.component : '');
  }));
};

RadioBox.defaultProps = {};

/* harmony default export */ __webpack_exports__["a"] = (RadioBox);

/***/ }),

/***/ 1450:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_trim__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_trim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_trim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css__ = __webpack_require__(1643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__CannedMessage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Tree_Tree__ = __webpack_require__(1488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__FeatureHelp_FeatureHelp__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__HighLight__ = __webpack_require__(1451);
























var createCannedMessageTree = function createCannedMessageTree(cannedMessages, categories, ifPrivate) {
  var prefix = ifPrivate ? 1 : 0;
  var nocateMessages = cannedMessages.filter(function (message) {
    return message.ifPrivate === ifPrivate && message.categoryId === 0;
  });
  var temp = nocateMessages.map(function (mes, i) {
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
      id: mes.id,
      title: mes.title,
      value: mes.content,
      tooltip: true,
      isLeaf: true
    }, '0-' + prefix + '-' + i);
  });
  var len = nocateMessages.length;
  var temp1 = createCannedMessageCategoryTree(cannedMessages, categories, ifPrivate, 0, '0-' + prefix, len);
  var filterResult = temp1 ? temp1.filter(function (c) {
    return !!c;
  }) : [];
  if (filterResult.length > 0) return temp.concat(filterResult);
  return temp;
};

var createCannedMessageCategoryTree = function createCannedMessageCategoryTree(cannedMessages, categories, ifPrivate, parentId, key, start) {
  var temp = categories.filter(function (item) {
    return item.ifPrivate === ifPrivate && item.parentId === parentId;
  });
  if (temp.length === 0) return null;
  var temp1 = temp.map(function (category, index) {
    var messages = cannedMessages.filter(function (message) {
      return message.ifPrivate === ifPrivate && message.categoryId === category.id;
    });
    var children = createCannedMessageCategoryTree(cannedMessages, categories, ifPrivate, category.id, key + '-' + (start + index), messages.length);
    var mess = messages.map(function (mes, i) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
        id: mes.id,
        title: mes.title,
        value: mes.content,
        tooltip: true,
        isLeaf: true
      }, key + '-' + (start + index) + '-' + i);
    });
    var filterChildren = children ? children.filter(function (c) {
      return !!c;
    }) : [];
    var result = mess.concat(filterChildren);
    if (result.length > 0) return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
      title: category.name,
      isShowIcon: true
    }, key + '-' + (start + index), result);
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
      title: category.name,
      isShowIcon: true
    }, key + '-' + (start + index));
  });
  return temp1;
};

var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__utils_helper__["e" /* shouldComponentUpdateGen */])('CannedMessage Tab', ['newFeatureNotify', 'ifCannedMessageLoading', 'shouldFocus'], ['searchText', 'selectIndex']);

var CannedMessage = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CannedMessage, _React$Component);

  function CannedMessage(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CannedMessage);

    var _this2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CannedMessage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CannedMessage)).call(this, props));

    _this2.state = {
      searchText: __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].get('cannedMessage_searchText') || '',
      selectIndex: 0
    };
    _this2.searchTextChanged = _this2.searchTextChanged.bind(_this2);
    _this2.closeIconClick = _this2.closeIconClick.bind(_this2);
    _this2.onClick = _this2.onClick.bind(_this2);
    _this2.onTreeNodeClick = _this2.onTreeNodeClick.bind(_this2);
    _this2.onTreeNodeDoubleClick = _this2.onTreeNodeDoubleClick.bind(_this2);
    _this2.onKeyDown = _this2.onKeyDown.bind(_this2);
    _this2.onFeatrueClick = _this2.onFeatrueClick.bind(_this2);
    _this2.onRefreshCannedMessage = _this2.onRefreshCannedMessage.bind(_this2);
    _this2.selectItem = null;
    _this2.searchCannedMeaasge = [];
    _this2.timer = null;
    _this2.shouldFocus = __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].get('shouldFocusInput');
    return _this2;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CannedMessage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.shouldFocus) {
        this.searchInput.focus();
        __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('shouldFocusInput', false);
      }
      var sTop = __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].get('cannedMessage_ScrollTop');
      if (sTop) this.scrollDiv.scrollTop = sTop;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if ((!this.props.isChatting && this.state.selectIndex !== prevState.selectIndex || this.props.shouldFocus) && this.searchInput) {
        this.searchInput.focus();
        if (this.props.shouldFocus) {
          __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('shouldFocusInput', false);
        }
      }
      if (__WEBPACK_IMPORTED_MODULE_6_lodash_trim___default()(this.state.searchText) && !__WEBPACK_IMPORTED_MODULE_6_lodash_trim___default()(prevState.searchText) || !__WEBPACK_IMPORTED_MODULE_6_lodash_trim___default()(this.state.searchText) && __WEBPACK_IMPORTED_MODULE_6_lodash_trim___default()(prevState.searchText)) {
        this.scrollDiv.scrollTop = 0;
      }
      __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a.rebuild();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('cannedMessage_ScrollTop', this.scrollDiv.scrollTop);
    }
  }, {
    key: 'onTreeNodeClick',
    value: function onTreeNodeClick(id, value) {
      if (!this.props.isChatting) return;
      this.props.onClick(id, value, this.props.editorState);
    }
  }, {
    key: 'onTreeNodeDoubleClick',
    value: function onTreeNodeDoubleClick(id, value) {
      if (!this.props.isChatting) return;
      this.props.onDoubleClick(id, value);
    }
  }, {
    key: 'onClick',
    value: function onClick(index, id, content) {
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
        if (!this.props.isChatting) return;
        this.props.onDoubleClick(id, content);
      } else {
        var _this = this;
        this.timer = setTimeout(function () {
          _this.timer = null;
          if (_this.state.selectIndex !== index) {
            _this.setState({
              selectIndex: index
            });
          }
          if (!_this.props.isChatting) return;
          _this.props.onClick(id, content, _this.props.editorState);
        }, 300);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      switch (event.nativeEvent.keyCode) {
        case 13:
          event.preventDefault();
          event.stopPropagation();
          if (this.selectItem) {
            if (!this.props.isChatting) return;
            if (this.searchInput) this.searchInput.blur();
            this.props.onClick(this.selectItem.id, this.selectItem.content, this.props.editorState);
          }
          break;
        case 27:
          event.preventDefault();
          event.stopPropagation();
          this.setState({
            searchText: '',
            selectIndex: 0
          });
          break;
        case 38:
          event.preventDefault();
          event.stopPropagation();
          if (this.searchCannedMeaasge.length > 0 && this.state.selectIndex > 0) {
            this.setState({
              selectIndex: this.state.selectIndex - 1
            });
            var element = document.getElementById('searchItem_' + (this.state.selectIndex - 1));
            if (element) {
              if (element.scrollIntoViewIfNeeded) element.scrollIntoViewIfNeeded();else element.scrollIntoView(false);
            }
          }
          break;
        case 40:
          event.preventDefault();
          event.stopPropagation();
          if (this.searchCannedMeaasge.length > 0 && this.state.selectIndex < this.searchCannedMeaasge.length - 1) {
            this.setState({
              selectIndex: this.state.selectIndex + 1
            });
            var _element = document.getElementById('searchItem_' + (this.state.selectIndex + 1));
            if (_element) {
              if (_element.scrollIntoViewIfNeeded) _element.scrollIntoViewIfNeeded();else _element.scrollIntoView(false);
            }
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: 'onFeatrueClick',
    value: function onFeatrueClick() {
      this.props.onFeatrueClick(this.props.newFeatureNotify + 4);
    }
  }, {
    key: 'onRefreshCannedMessage',
    value: function onRefreshCannedMessage() {
      this.props.onRefreshCannedMessage();
    }
  }, {
    key: 'searchTextChanged',
    value: function searchTextChanged(e) {
      __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('cannedMessage_searchText', e.target.value);
      this.setState({
        searchText: e.target.value,
        selectIndex: 0
      });
    }
  }, {
    key: 'closeIconClick',
    value: function closeIconClick(event) {
      event.preventDefault();
      event.stopPropagation();
      __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('cannedMessage_searchText', '');
      this.setState({
        searchText: '',
        selectIndex: 0
      });
      this.searchInput.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          categories = _props.categories,
          cannedMessages = _props.cannedMessages,
          ifCannedMessageLoading = _props.ifCannedMessageLoading,
          newFeatureNotify = _props.newFeatureNotify;

      var saveExpandedKeys = __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].get('cannedMessage_expandedKeys', null, ['0-0']);
      this.searchCannedMeaasge = [];
      var text = __WEBPACK_IMPORTED_MODULE_6_lodash_trim___default()(this.state.searchText);
      if (text) {
        this.searchCannedMeaasge = cannedMessages.filter(function (message) {
          var pattStr = text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
          var patt = new RegExp(pattStr, 'igm');
          return patt.test(message.title) || patt.test(message.content);
        });
        if (this.searchCannedMeaasge.length === 0) {
          this.selectItem = null;
        }
      } else {
        this.selectItem = null;
      }
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.CannedMessageContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.container
      }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.featrue
      }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__FeatureHelp_FeatureHelp__["a" /* default */], {
        ifShow: (newFeatureNotify & 4) == 0,
        text: 'Click a message to insert into the typing area or double click the message to send it out directly.',
        featrueNumber: 4,
        onGotitClick: this.onFeatrueClick
      })), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Link_Link__["a" /* default */], {
        onClick: this.onRefreshCannedMessage
      }, void 0, 'Refresh'), ifCannedMessageLoading && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.Loading
      }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].loading
      }), ' Loading...')), !ifCannedMessageLoading && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.container, __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.searchInput)
      }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Input_Input__["a" /* default */], {
        inputRef: function inputRef(input) {
          _this3.searchInput = input;
        },
        maxLength: 512,
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.inputWidth,
        input: { value: this.state.searchText, onChange: this.searchTextChanged },
        meta: {},
        placeholder: 'Search',
        onKeyDown: this.onKeyDown
      }), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.closeIcon, text && __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.visible),
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].close,
        color: '#666',
        size: 10,
        onMouseDown: this.closeIconClick
      })), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this3.scrollDiv = element;
          }, className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.contentWrapper, style: { top: (newFeatureNotify & 4) == 0 ? 170 : 80 } },
        !text && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Tree_Tree__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.tree,
          defaultExpandedKeys: saveExpandedKeys,
          onSelect: this.onTreeNodeClick,
          onDoubleClick: this.onTreeNodeDoubleClick,
          onExpand: function onExpand(expandedKeys) {
            __WEBPACK_IMPORTED_MODULE_18__services_memoryStore__["a" /* default */].set('cannedMessage_expandedKeys', expandedKeys);
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
          title: 'Public',
          isShowIcon: true
        }, void 0, createCannedMessageTree(cannedMessages, categories, false)), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Tree_TreeNode__["a" /* default */], {
          title: 'Private',
          isShowIcon: true
        }, void 0, createCannedMessageTree(cannedMessages, categories, true))),
        text && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.search
        }, void 0, this.searchCannedMeaasge.length > 0 ? this.searchCannedMeaasge.map(function (item, index) {
          var pattStr = text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
          var patt = new RegExp('(' + pattStr + ')', 'igm');
          var tempTitle = item.title;
          var tempContent = item.content;
          var i = 0;
          var result = void 0;
          if ((result = patt.exec(item.title)) != null) {
            i = patt.lastIndex;
            if (result.length > 0 && item.title.length > 100) {
              if (i > 20) {
                tempTitle = '...' + item.title.substring(i - 20, i) + tempTitle.substring(i + 1);
              }
            }
          }
          i = 0;
          if ((result = patt.exec(item.content)) != null) {
            i = patt.lastIndex;
            if (result.length > 0 && item.content.length > 100) {
              if (i > 20) {
                tempContent = '...' + item.content.substring(i - 20, i) + tempContent.substring(i + 1);
              }
            }
          }
          // const title = htmlEncode(tempTitle).replace(patt, "<span style='background: #ffff00'>$1</span>");
          // const content = htmlEncode(tempContent).replace(patt, "<span style='background: #ffff00'>$1</span>");
          if (index === _this3.state.selectIndex) _this3.selectItem = item;
          return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
            id: 'searchItem_' + index,
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.searchItem, index === _this3.state.selectIndex && __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.select),
            onClick: function onClick() {
              _this3.onClick(index, item.id, item.content);
            },
            'data-tip': item.content,
            'data-for': 'vmtree'
          }, index, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
            className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.title
          }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_21__HighLight__["a" /* default */], {
            text: tempTitle,
            patt: patt
          })), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
            className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.content
          }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_21__HighLight__["a" /* default */], {
            text: tempContent,
            patt: patt
          })));
        }) : __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.noSearchResult
        }, void 0, 'No results were found.'))
      )), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a, {
        id: 'vmtree',
        effect: 'solid',
        place: 'left',
        multiline: true,
        'class': __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__CannedMessage_css___default.a.tooltip, __WEBPACK_IMPORTED_MODULE_17__CommonResources_common_css___default.a.tooltipInfo)
      }));
    }
  }]);

  return CannedMessage;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CannedMessage);

/***/ }),

/***/ 1451:
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








var HighLight = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(HighLight, _React$Component);

  function HighLight() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, HighLight);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HighLight.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(HighLight)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(HighLight, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          patt = _props.patt;

      var result = void 0;
      var i = 0;
      var companents = [];
      while ((result = patt.exec(text)) != null) {
        var temp = text.substring(i, result.index);
        companents.push(temp);
        companents.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          style: { fontStyle: 'normal', background: '#ffff00' }
        }, i, result[0]));
        i = patt.lastIndex;
      }
      if (i <= text.length) {
        companents.push(text.substring(i));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, companents);
    }
  }]);

  return HighLight;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HighLight);

/***/ }),

/***/ 1452:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TextArea_TextArea__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FeatureHelp_FeatureHelp__ = __webpack_require__(925);
















var AgentComment = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AgentComment, _React$Component);

  function AgentComment(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AgentComment);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AgentComment.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AgentComment)).call(this, props));

    _this.state = {
      agentComment: props.agentComment || '',
      errors: ''
    };

    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.onSubmitComment = _this.onSubmitComment.bind(_this);
    _this.onCommentEditIconClick = _this.onCommentEditIconClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AgentComment, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.agentComment !== nextProps.agentComment || this.props.readOnly !== nextProps.readOnly || this.props.isNoteEdit !== nextProps.isNoteEdit || this.props.isNoteLoading !== nextProps.isNoteLoading || this.props.newFeatureNotify !== nextProps.newFeatureNotify || this.props.ifEnableWrapupChat !== nextProps.ifEnableWrapupChat || this.state.agentComment !== nextState.agentComment || this.state.errors !== nextState.errors) {
        return true;
      }
      return false;
    }
  }, {
    key: 'onSubmitComment',
    value: function onSubmitComment() {
      var e = '';
      if (this.state.agentComment) {
        this.props.handleSubmitComment({ comment: this.state.agentComment });
      } else {
        e = 'Required';
      }
      this.setState({
        errors: e
      });
    }
  }, {
    key: 'onCommentEditIconClick',
    value: function onCommentEditIconClick() {
      this.setState({
        agentComment: this.props.agentComment || '',
        errors: ''
      });
      this.props.onCommentEditIconClick();
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(e) {
      this.setState({
        agentComment: e.target.value,
        errors: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ifEnableWrapupChat = _props.ifEnableWrapupChat,
          agentComment = _props.agentComment,
          isNoteEdit = _props.isNoteEdit,
          readOnly = _props.readOnly,
          newFeatureNotify = _props.newFeatureNotify,
          onFeatrueClick = _props.onFeatrueClick;

      if (!ifEnableWrapupChat && !readOnly) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.featrue
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__FeatureHelp_FeatureHelp__["a" /* default */], {
          ifShow: !isNoteEdit && !readOnly && (newFeatureNotify & 2) == 0,
          text: 'Add a note to this chat. It saves time when you review the chats later.',
          featrueNumber: 2,
          onGotitClick: function onGotitClick() {
            if (onFeatrueClick) onFeatrueClick(newFeatureNotify + 2);
          }
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editable, !isNoteEdit && __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.title
        }, void 0, 'Note to this Chat'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          style: { display: isNoteEdit ? 'none' : 'block' }
        }, void 0, agentComment ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          tabIndex: -1,
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.line, __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editIconWrapper)
        }, void 0, agentComment, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].typing,
          color: '#aaa',
          size: 14,
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editIcon, __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.commentEditIcon),
          onClick: this.onCommentEditIconClick
        })) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.line
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          onClick: this.onCommentEditIconClick
        }, void 0, '(Click here to add...)'))), isNoteEdit && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.formWrapper
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.line
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__TextArea_TextArea__["a" /* default */], {
          name: 'comment',
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.commentTextarea,
          rows: '5',
          maxLength: 512,
          type: 'text',
          input: {
            value: this.state.agentComment,
            onChange: this.handleValueChange
          },
          meta: { touched: true, invalid: this.state.errors ? true : false, error: this.state.errors || '' },
          isDisabled: this.props.isNoteLoading
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.buttonWrapper
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.okButton,
          onClick: this.onSubmitComment,
          disabled: this.props.isNoteLoading || this.props.agentComment === this.state.agentComment,
          loading: this.props.isNoteLoading,
          iconPosition: 'right',
          text: 'OK',
          type: 'primary',
          htmlType: 'button'
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Button_Button__["a" /* default */], {
          onClick: this.props.onCommentCancelClick,
          text: 'Cancel',
          htmlType: 'button'
        }))))));
      }
      return null;
    }
  }]);

  return AgentComment;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

AgentComment.defaultProps = {
  isNoteEdit: false
};

/* harmony default export */ __webpack_exports__["a"] = (AgentComment);

/***/ }),

/***/ 1453:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__info_css__);














var CurrentBrowsing = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CurrentBrowsing, _React$Component);

  function CurrentBrowsing() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CurrentBrowsing);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CurrentBrowsing.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CurrentBrowsing)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CurrentBrowsing, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.isCurrentBrowsingShowTitle !== nextProps.isCurrentBrowsingShowTitle || this.props.currentPageUrl !== nextProps.currentPageUrl || this.props.currentPageTitle !== nextProps.currentPageTitle || this.props.isCurrentBrowsingShowUrl !== nextProps.isCurrentBrowsingShowUrl) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentPageUrl = _props.currentPageUrl,
          currentPageTitle = _props.currentPageTitle,
          isCurrentBrowsingShowTitle = _props.isCurrentBrowsingShowTitle,
          isCurrentBrowsingShowUrl = _props.isCurrentBrowsingShowUrl,
          onCurrentBrowsingIconClick = _props.onCurrentBrowsingIconClick;

      if (currentPageUrl) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.title
        }, void 0, 'Current Browsing', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.arrowIconWrapper,
          tabIndex: -1
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.arrowIcon,
          type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].arrowDown
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.popmenuWrapper
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.popmenu
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: isCurrentBrowsingShowTitle && !isCurrentBrowsingShowUrl ? __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.active : null,
          onMouseDown: function onMouseDown(e) {
            e.nativeEvent.stopPropagation();
            if (isCurrentBrowsingShowTitle && !isCurrentBrowsingShowUrl) return;
            onCurrentBrowsingIconClick(0);
          }
        }, void 0, 'Title Only'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: !isCurrentBrowsingShowTitle && isCurrentBrowsingShowUrl ? __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.active : null,
          onMouseDown: function onMouseDown(e) {
            e.nativeEvent.stopPropagation();
            if (!isCurrentBrowsingShowTitle && isCurrentBrowsingShowUrl) return;
            onCurrentBrowsingIconClick(1);
          }
        }, void 0, 'URL Only'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: isCurrentBrowsingShowTitle && isCurrentBrowsingShowUrl ? __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.active : null,
          onMouseDown: function onMouseDown(e) {
            e.nativeEvent.stopPropagation();
            if (isCurrentBrowsingShowTitle && isCurrentBrowsingShowUrl) return;
            onCurrentBrowsingIconClick(2);
          }
        }, void 0, 'Title & URL')))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.line,
          style: { display: isCurrentBrowsingShowTitle && currentPageTitle ? 'block' : 'none' }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          newWindow: true,
          href: currentPageUrl,
          className: __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.currentBrowsingLink,
          'data-tip': currentPageUrl,
          'data-for': 'CurrentBrowsing'
        }, void 0, currentPageTitle)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          tabIndex: -1,
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__info_css___default.a.line, 'contentMenu'),
          style: { display: isCurrentBrowsingShowUrl ? 'block' : 'none' }
        }, void 0, currentPageUrl), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_react_tooltip___default.a, {
          id: 'CurrentBrowsing',
          effect: 'solid',
          place: 'bottom',
          'class': __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.tooltip
        }));
      }
      return null;
    }
  }]);

  return CurrentBrowsing;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

CurrentBrowsing.defaultProps = {
  isCurrentBrowsingShowTitle: true,
  isCurrentBrowsingShowUrl: true
};


/* harmony default export */ __webpack_exports__["a"] = (CurrentBrowsing);

/***/ }),

/***/ 1454:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__info_css__);











var getDeviceInfo = function getDeviceInfo(language, screenResolution, timezone, flashVersion) {
  var result = '';
  if (language) {
    result += language + ', ';
  }
  if (screenResolution) {
    result += screenResolution + ', ';
  }
  if (timezone) {
    result += timezone + ', ';
  }
  if (flashVersion) {
    result += 'Flash ' + flashVersion + ', ';
  }
  if (result.length > 0) {
    result = result.substring(0, result.length - 2);
  }
  return result;
};

var getDeviceInfoTooltip = function getDeviceInfoTooltip(language, screenResolution, timezone, flashVersion) {
  var result = '';
  if (language) {
    result += 'Language: ' + language + '<br>';
  }
  if (screenResolution) {
    result += 'Screen Resolution: ' + screenResolution + '<br>';
  }
  if (timezone) {
    result += 'Time Zone: ' + timezone + '<br>';
  }
  if (flashVersion) {
    result += 'Flash Version: ' + flashVersion + '<br>';
  }
  if (result.length > 0) {
    result = result.substring(0, result.length - 4);
  }
  return result;
};

var DeviceInfo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DeviceInfo, _React$Component);

  function DeviceInfo() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DeviceInfo);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DeviceInfo.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DeviceInfo)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DeviceInfo, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.language !== nextProps.language || this.props.screenResolution !== nextProps.screenResolution || this.props.timezone !== nextProps.timezone || this.props.flashVersion !== nextProps.flashVersion) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          language = _props.language,
          screenResolution = _props.screenResolution,
          timezone = _props.timezone,
          flashVersion = _props.flashVersion;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.notEdit)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.title
      }, void 0, 'Device Info'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__info_css___default.a.line, 'contentMenu'),
        tabIndex: -1
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.inlineBlock,
        'data-tip': getDeviceInfoTooltip(language, screenResolution, timezone, flashVersion),
        'data-for': 'DeviceInfo'
      }, void 0, getDeviceInfo(language, screenResolution, timezone, flashVersion))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_react_tooltip___default.a, {
        id: 'DeviceInfo',
        effect: 'solid',
        place: 'bottom',
        multiline: true,
        'class': __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.tooltip
      }));
    }
  }]);

  return DeviceInfo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DeviceInfo);

/***/ }),

/***/ 1455:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__InfoPrechat__ = __webpack_require__(1459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__InfoCustomFields__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__InfoCustomVariables__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__InfoVisitorSegment__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__VisitorLocation__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__WhereFrom__ = __webpack_require__(1464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CurrentBrowsing__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__InfoHistory__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DeviceInfo__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AgentComment__ = __webpack_require__(1452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__OsBrowserImage__ = __webpack_require__(1462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_memoryStore__ = __webpack_require__(24);

























var Info = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Info, _React$Component);

  function Info(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Info);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Info.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Info)).call(this, props));

    _this.scrollTop = __WEBPACK_IMPORTED_MODULE_22__services_memoryStore__["a" /* default */].get('infoDivScrollTop') || 0;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Info, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.scrollTop !== 0 && this.container) {
        this.container.scrollTop = this.scrollTop;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.visitorId !== nextProps.visitorId || this.props.chatId !== nextProps.chatId) {
        return true;
      } else if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.visitorInfo, nextProps.visitorInfo)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.visitorId !== prevProps.visitorId || this.props.chatId !== prevProps.chatId) {
        __WEBPACK_IMPORTED_MODULE_22__services_memoryStore__["a" /* default */].set('infoDivScrollTop', 0);
        if (this.container) {
          this.container.scrollTop = 0;
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var scrollT = 0;
      if (this.container) {
        scrollT = this.container.scrollTop;
      }
      __WEBPACK_IMPORTED_MODULE_22__services_memoryStore__["a" /* default */].set('infoDivScrollTop', scrollT);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.visitorId) return null;
      if (!this.props.visitorInfo) return null;

      var _props = this.props,
          className = _props.className,
          visitorInfo = _props.visitorInfo,
          onCurrentBrowsingIconClick = _props.onCurrentBrowsingIconClick,
          onChatTimesClick = _props.onChatTimesClick,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'visitorInfo', 'onCurrentBrowsingIconClick', 'onChatTimesClick']);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_21__info_css___default.a.info, className),
          ref: function ref(element) {
            _this2.container = element;
          }
        },
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__InfoPrechat__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, visitorInfo, rest)),
        visitorInfo.fieldsInfo && visitorInfo.fieldsInfo.length > 0 && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__InfoCustomFields__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, visitorInfo, rest)),
        visitorInfo.customVariables && visitorInfo.customVariables.length > 0 && visitorInfo.ifEnableCustomVariables && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__InfoCustomVariables__["a" /* default */], visitorInfo),
        visitorInfo.ifEnableSegmentation && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__InfoVisitorSegment__["a" /* default */], visitorInfo),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__VisitorLocation__["a" /* default */], visitorInfo),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__WhereFrom__["a" /* default */], visitorInfo),
        visitorInfo.currentPageUrl && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__CurrentBrowsing__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, visitorInfo, {
          onCurrentBrowsingIconClick: onCurrentBrowsingIconClick
        })),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__InfoHistory__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, visitorInfo, {
          onChatTimesClick: onChatTimesClick
        })),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__DeviceInfo__["a" /* default */], visitorInfo),
        !visitorInfo.ifEnableWrapupChat && !visitorInfo.readOnly && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__AgentComment__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, visitorInfo, rest)),
        visitorInfo.ifOsBrowserImageShow && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__OsBrowserImage__["a" /* default */], visitorInfo)
      );
    }
  }]);

  return Info;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Info);

/***/ }),

/***/ 1456:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_CustomFieldsForm__ = __webpack_require__(1408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_localStorage__ = __webpack_require__(56);


















var InfoCustomFields = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(InfoCustomFields, _React$Component);

  function InfoCustomFields(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, InfoCustomFields);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoCustomFields.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(InfoCustomFields)).call(this, props));

    _this.state = {
      showForm: props.ifcustomFieldEdit
    };
    if (!props.ifcustomFieldEdit) {
      __WEBPACK_IMPORTED_MODULE_15__utils_localStorage__["b" /* deleteItem */]('customFields_FormState');
    }
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(InfoCustomFields, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visitorId !== nextProps.visitorId || this.props.chatId !== nextProps.chatId) {
        this.setState({
          showForm: false
        });
      } else {
        this.setState({
          showForm: nextProps.ifcustomFieldEdit
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.showForm !== nextState.showForm || this.props.readOnly !== nextProps.readOnly || this.props.ifcustomFieldLoading !== nextProps.ifcustomFieldLoading || !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.customFields, nextProps.customFields) || !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.fieldsInfo, nextProps.fieldsInfo)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.state.showForm) {
        __WEBPACK_IMPORTED_MODULE_15__utils_localStorage__["b" /* deleteItem */]('customFields_FormState');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fieldsInfo = _props.fieldsInfo,
          customFields = _props.customFields,
          onCustomFieldEditIconClick = _props.onCustomFieldEditIconClick,
          onCustomFieldCancelClick = _props.onCustomFieldCancelClick,
          handleSubmitCustomFields = _props.handleSubmitCustomFields,
          ifcustomFieldLoading = _props.ifcustomFieldLoading,
          readOnly = _props.readOnly;

      if (fieldsInfo.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editable, !this.state.showForm && __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editIconWrapper, __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.title)
        }, void 0, 'Custom Field', !readOnly && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].typing,
          color: '#aaa',
          size: 14,
          className: __WEBPACK_IMPORTED_MODULE_13__info_css___default.a.editIcon,
          onClick: onCustomFieldEditIconClick
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          tabIndex: -1,
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__info_css___default.a.line, 'contentMenu'),
          style: { display: this.state.showForm ? 'none' : 'block' }
        }, void 0, fieldsInfo.map(function (customField, index) {
          var result = '';
          var temp = __WEBPACK_IMPORTED_MODULE_6_lodash_find___default()(customFields, function (field) {
            return field.id === customField.id;
          });
          if (temp) {
            if (typeof temp.value !== 'undefined') {
              var type = customField.type;
              if (type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["b" /* DropDownList */] || type === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["d" /* WrapupCategory */]) {
                result = temp.value;
              } else {
                result = temp.value.toString().replace(/⊙/g, ',');
              }
            }
          }
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'customField' + index, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, customField.displayText, ': '), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, ' ', result));
        })), this.state.showForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Form_CustomFieldsForm__["a" /* default */], {
          fields: fieldsInfo,
          onSubmit: handleSubmitCustomFields,
          onCancel: onCustomFieldCancelClick,
          ifSubmitLoading: ifcustomFieldLoading,
          fieldsValue: customFields
        }));
      }
      return null;
    }
  }]);

  return InfoCustomFields;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

InfoCustomFields.defaultProps = {
  ifcustomFieldEdit: false
};

/* harmony default export */ __webpack_exports__["a"] = (InfoCustomFields);

/***/ }),

/***/ 1457:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__info_css__);













var InfoCustomVariables = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(InfoCustomVariables, _React$Component);

  function InfoCustomVariables() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, InfoCustomVariables);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoCustomVariables.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(InfoCustomVariables)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(InfoCustomVariables, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.customVariables, nextProps.customVariables)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ifEnableCustomVariables = _props.ifEnableCustomVariables,
          customVariables = _props.customVariables;

      var CustomVariablesVisible = customVariables.length > 0;
      if (CustomVariablesVisible && ifEnableCustomVariables) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_10__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_10__info_css___default.a.title
        }, void 0, 'Custom Variable'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__info_css___default.a.line, __WEBPACK_IMPORTED_MODULE_10__info_css___default.a.customVariable, 'contentMenu'),
          tabIndex: -1
        }, void 0, customVariables.map(function (customVariable) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, customVariable.name, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, customVariable.name, ': '), customVariable.value && customVariable.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
            newWindow: true,
            href: customVariable.url
          }, void 0, customVariable.value), customVariable.value && !customVariable.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, customVariable.value));
        })));
      }
      return null;
    }
  }]);

  return InfoCustomVariables;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

InfoCustomVariables.defaultProps = {
  ifEnableCustomVariables: false
};


/* harmony default export */ __webpack_exports__["a"] = (InfoCustomVariables);

/***/ }),

/***/ 1458:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__info_css__);











var InfoHistory = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(InfoHistory, _React$Component);

  function InfoHistory() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, InfoHistory);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoHistory.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(InfoHistory)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(InfoHistory, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.chatTimes !== nextProps.chatTimes || this.props.visitorTimes !== nextProps.visitorTimes) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chatTimes = _props.chatTimes,
          visitorTimes = _props.visitorTimes,
          onChatTimesClick = _props.onChatTimesClick;

      var chatText = chatTimes + (chatTimes > 1 ? ' Chats' : ' Chat');
      var visitorText = visitorTimes + (visitorTimes > 1 ? ' Visits' : ' Visit');
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.notEdit)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.title
      }, void 0, 'History'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.line,
        tabIndex: -1
      }, void 0, chatTimes > 0 ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Link_Link__["a" /* default */], {
        onClick: onChatTimesClick
      }, void 0, chatText) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, chatText), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.seperator
      }, void 0, '|'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: 'contentMenu'
      }, void 0, visitorText)));
    }
  }]);

  return InfoHistory;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InfoHistory);

/***/ }),

/***/ 1459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__InfoPrechatForm__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FeatureHelp_FeatureHelp__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__ = __webpack_require__(56);


















var InfoPrechat = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(InfoPrechat, _React$Component);

  function InfoPrechat(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, InfoPrechat);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoPrechat.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(InfoPrechat)).call(this, props));

    _this.state = {
      showForm: props.ifpreChatEdit
    };
    if (!props.ifpreChatEdit) {
      __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('prechatFormState');
    }
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(InfoPrechat, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visitorId !== nextProps.visitorId || this.props.chatId !== nextProps.chatId) {
        this.setState({
          showForm: false
        });
      } else {
        this.setState({
          showForm: nextProps.ifpreChatEdit
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.ifpreChatLoading !== nextProps.ifpreChatLoading || this.state.showForm !== nextState.showForm || this.props.latestName !== nextProps.latestName || this.props.ip !== nextProps.ip || this.props.latestEmail !== nextProps.latestEmail || this.props.prechatPhone !== nextProps.prechatPhone || this.props.prechatCompany !== nextProps.prechatCompany || this.props.prechatProductService !== nextProps.prechatProductService || this.props.departmentId !== nextProps.departmentId || this.props.preChatReadOnly !== nextProps.preChatReadOnly || this.props.newFeatureNotify !== nextProps.newFeatureNotify) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.state.showForm) {
        __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('prechatFormState');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          latestName = _props.latestName,
          ip = _props.ip,
          latestEmail = _props.latestEmail,
          prechatPhone = _props.prechatPhone,
          prechatCompany = _props.prechatCompany,
          departmentSelected = _props.departmentSelected,
          departmentId = _props.departmentId,
          prechatProductService = _props.prechatProductService,
          onPreChatEditIconClick = _props.onPreChatEditIconClick,
          preChatReadOnly = _props.preChatReadOnly,
          newFeatureNotify = _props.newFeatureNotify,
          onFeatrueClick = _props.onFeatrueClick,
          rest = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['latestName', 'ip', 'latestEmail', 'prechatPhone', 'prechatCompany', 'departmentSelected', 'departmentId', 'prechatProductService', 'onPreChatEditIconClick', 'preChatReadOnly', 'newFeatureNotify', 'onFeatrueClick']);

      var initValues = {
        name: latestName || ip,
        email: latestEmail,
        phone: prechatPhone,
        company: prechatCompany,
        departmentId: departmentId,
        productService: prechatProductService
      };
      var ifShowFeature = !this.state.showForm && !preChatReadOnly && (newFeatureNotify & 1) == 0;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, ifShowFeature && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.featrue
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__FeatureHelp_FeatureHelp__["a" /* default */], {
        ifShow: ifShowFeature,
        text: 'Click to edit Pre-chat info.',
        featrueNumber: 1,
        onGotitClick: function onGotitClick() {
          if (onFeatrueClick) onFeatrueClick(newFeatureNotify + 1);
        }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_14__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.editable, 'contentMenu', !this.state.showForm && __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.notEdit)
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.editIconWrapper,
        style: { display: this.state.showForm ? 'none' : 'block' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        tabIndex: -1,
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_14__info_css___default.a.line, __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.title)
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('h3', {}, void 0, latestName || ip)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        tabIndex: -1,
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.wrapper,
        style: { display: latestEmail ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.icon,
        'data-tip': 'Email',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].sendEmail,
        color: '#aaa',
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.text
      }, void 0, latestEmail)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.wrapper,
        style: { display: prechatPhone ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.icon,
        'data-tip': 'Phone',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].waitting,
        color: '#aaa',
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_14__info_css___default.a.phone, __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.text)
      }, void 0, prechatPhone)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.wrapper,
        style: { display: prechatCompany ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.icon,
        'data-tip': 'Company',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].company,
        color: '#aaa',
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.text
      }, void 0, prechatCompany)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.wrapper,
        style: { display: prechatProductService ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.icon,
        'data-tip': 'Product and Service',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].productService,
        color: '#aaa',
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.text
      }, void 0, prechatProductService)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.wrapper,
        style: { display: departmentSelected ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.icon,
        'data-tip': 'Department',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].department,
        color: '#aaa',
        size: 16
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.text
      }, void 0, rest.ifDepartmentEnabled && departmentSelected))), !preChatReadOnly && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].typing,
        color: '#aaa',
        size: 14,
        className: __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.editIcon,
        onClick: onPreChatEditIconClick
      })), this.state.showForm && __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__InfoPrechatForm__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        initValues: initValues
      }, rest)), !this.state.showForm && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_react_tooltip___default.a, {
        id: 'prechatTooltip',
        effect: 'solid',
        place: 'bottom',
        'class': __WEBPACK_IMPORTED_MODULE_14__info_css___default.a.tooltip
      })));
    }
  }]);

  return InfoPrechat;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

InfoPrechat.defaultProps = {
  ifDepartmentEnabled: false,
  ifpreChatEdit: false
};

/* harmony default export */ __webpack_exports__["a"] = (InfoPrechat);

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Input_IconInput__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_localStorage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Select_Select__ = __webpack_require__(683);























var validate = function validate(values) {
  var errors = {};
  if (!values.name) {
    errors.name = 'Name is Required!';
    errors._error = 'Name is Required!';
  }
  if (values.email && !__WEBPACK_IMPORTED_MODULE_18__utils_str__["b" /* isEmail */](values.email)) {
    errors.email = 'Email is invalid!';
    errors._error = 'Email is invalid!';
  }
  return errors;
};

var InfoPrechatForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(InfoPrechatForm, _React$Component);

  function InfoPrechatForm(props) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, InfoPrechatForm);

    var _this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoPrechatForm.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(InfoPrechatForm)).call(this, props));

    var cacheState = __WEBPACK_IMPORTED_MODULE_19__utils_localStorage__["c" /* getObject */]('prechatFormState');
    if (cacheState) {
      _this.state = cacheState;
    } else {
      _this.state = {
        values: props.initValues,
        errors: {}
      };
    }

    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.onSubmitPreChat = _this.onSubmitPreChat.bind(_this);
    _this.onCancelClick = _this.onCancelClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(InfoPrechatForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.ifpreChatLoading !== nextProps.ifpreChatLoading || !__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(this.state.values, nextState.values) || !__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(this.state.errors, nextState.errors)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(this.state.values, prevState.values) || !__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(this.state.errors, prevState.errors)) {
        __WEBPACK_IMPORTED_MODULE_19__utils_localStorage__["d" /* setObject */]('prechatFormState', this.state);
      }
      if (this.state.errors._error) {
        var errorElement = this.errorMessageDiv;
        if (errorElement) {
          if (errorElement.scrollIntoViewIfNeeded) errorElement.scrollIntoViewIfNeeded();else errorElement.scrollIntoView();
        }
      }
    }
  }, {
    key: 'onSubmitPreChat',
    value: function onSubmitPreChat() {
      var e = validate(this.state.values);
      if (__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(e).length === 0) {
        this.props.handleSubmitpreChat(this.state.values);
      }
      this.setState({
        errors: e
      });
    }
  }, {
    key: 'onCancelClick',
    value: function onCancelClick() {
      __WEBPACK_IMPORTED_MODULE_19__utils_localStorage__["b" /* deleteItem */]('prechatFormState');
      this.props.onPreChatCancelClick();
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(name, value) {
      var e = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, this.state.errors);
      if (e[name]) {
        e[name] = '';
      }
      e._error = '';
      var temp = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, this.state.values);
      temp[name] = value;
      if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(temp, this.state.values)) {
        this.setState({
          values: temp,
          errors: e
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var departments = this.props.departments.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name;
        return { text: name, value: id };
      });
      var defaultSelectOption = { text: ' --Select a department-- ', value: -1 };
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.formWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.errorMessageDiv = element;
          }, className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.errorMessage, style: { display: this.state.errors._error ? 'block' : 'none' } },
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, this.state.errors._error)
      ), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Input_IconInput__["a" /* default */], {
        name: 'name',
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.input,
        icon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
          'data-tip': 'Name',
          'data-for': 'prechatTooltip',
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].loginUser,
          color: '#aaa',
          size: 'small'
        }),
        placeholder: 'Name',
        type: 'text',
        maxLength: 64,
        input: { value: this.state.values.name || '',
          onChange: function onChange(e) {
            return _this2.handleValueChange('name', e.target.value);
          } },
        meta: { touched: true, invalid: this.state.errors.name ? true : false, error: this.state.errors.name || '' }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Input_IconInput__["a" /* default */], {
        name: 'email',
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.input,
        icon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
          'data-tip': 'Email',
          'data-for': 'prechatTooltip',
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].sendEmail,
          color: '#aaa',
          size: 'small'
        }),
        placeholder: 'Email',
        type: 'email',
        maxLength: 64,
        input: { value: this.state.values.email || '',
          onChange: function onChange(e) {
            return _this2.handleValueChange('email', e.target.value);
          } },
        meta: { touched: true, invalid: this.state.errors.email ? true : false, error: this.state.errors.email || '' }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Input_IconInput__["a" /* default */], {
        name: 'phone',
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.input,
        icon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
          'data-tip': 'Phone',
          'data-for': 'prechatTooltip',
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].waitting,
          color: '#aaa',
          size: 'small'
        }),
        placeholder: 'Phone',
        type: 'tel',
        maxLength: 32,
        input: { value: this.state.values.phone || '',
          onChange: function onChange(e) {
            return _this2.handleValueChange('phone', e.target.value);
          } },
        meta: { touched: true, invalid: this.state.errors.phone ? true : false, error: this.state.errors.phone || '' }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Input_IconInput__["a" /* default */], {
        name: 'company',
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.input,
        icon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
          'data-tip': 'Company',
          'data-for': 'prechatTooltip',
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].company,
          color: '#aaa',
          size: 'small'
        }),
        placeholder: 'Company',
        type: 'text',
        maxLength: 64,
        input: { value: this.state.values.company || '',
          onChange: function onChange(e) {
            return _this2.handleValueChange('company', e.target.value);
          } },
        meta: { touched: true, invalid: this.state.errors.company ? true : false, error: this.state.errors.company || '' }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Input_IconInput__["a" /* default */], {
        name: 'productService',
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.input,
        icon: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
          'data-tip': 'Product and Service',
          'data-for': 'prechatTooltip',
          type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].productService,
          color: '#aaa',
          size: 'small'
        }),
        placeholder: 'Product Service',
        type: 'text',
        maxLength: 256,
        input: { value: this.state.values.productService || '',
          onChange: function onChange(e) {
            return _this2.handleValueChange('productService', e.target.value);
          } },
        meta: { touched: true, invalid: this.state.errors.productService ? true : false, error: this.state.errors.productService || '' }
      })), this.props.ifDepartmentEnabled && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.line
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.preIConWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
        'data-tip': 'Department',
        'data-for': 'prechatTooltip',
        type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].department,
        color: '#aaa',
        size: 20
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.select
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_20__Select_Select__["a" /* default */], {
        input: { value: this.state.values.departmentId || -1,
          onChange: function onChange(value) {
            return _this2.handleValueChange('departmentId', value);
          } },
        options: [defaultSelectOption].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(departments))
      }))), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(__WEBPACK_IMPORTED_MODULE_17__info_css___default.a.buttonWrapper, __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.preInfoEdit)
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Button_Button__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.okButton,
        onClick: this.onSubmitPreChat,
        disabled: this.props.ifpreChatLoading || __WEBPACK_IMPORTED_MODULE_9_lodash_isEqual___default()(this.state.values, this.props.initValues),
        loading: this.props.ifpreChatLoading,
        iconPosition: 'right',
        text: 'OK',
        type: 'primary',
        htmlType: 'button'
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Button_Button__["a" /* default */], {
        onClick: this.onCancelClick,
        text: 'Cancel',
        htmlType: 'button'
      }))), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_react_tooltip___default.a, {
        id: 'prechatTooltip',
        effect: 'solid',
        place: 'bottom',
        'class': __WEBPACK_IMPORTED_MODULE_17__info_css___default.a.tooltip
      }));
    }
  }]);

  return InfoPrechatForm;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InfoPrechatForm);

/***/ }),

/***/ 1461:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__info_css__);












var InfoVisitorSegment = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(InfoVisitorSegment, _React$Component);

  function InfoVisitorSegment() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, InfoVisitorSegment);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfoVisitorSegment.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(InfoVisitorSegment)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(InfoVisitorSegment, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props.segments, nextProps.segments)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ifEnableSegmentation = _props.ifEnableSegmentation,
          segments = _props.segments;
      // const SegmentVisible = segments.length > 0;

      if (ifEnableSegmentation) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.title
        }, void 0, 'Visitor Segment'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__info_css___default.a.line, 'contentMenu'),
          tabIndex: -1
        }, void 0, segments.map(function (segment, i) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
            className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.segmentWrapper
          }, 'segmenti_' + i, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('i', {
            className: __WEBPACK_IMPORTED_MODULE_9__info_css___default.a.segments,
            style: { backgroundColor: segment.color }
          }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, segment.name));
        })));
      }
      return null;
    }
  }]);

  return InfoVisitorSegment;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

InfoVisitorSegment.defaultProps = {
  ifEnableSegmentation: false
};


/* harmony default export */ __webpack_exports__["a"] = (InfoVisitorSegment);

/***/ }),

/***/ 1462:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icons_OS__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icons_Browser__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__info_css__);














var OsBrowserImage = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(OsBrowserImage, _React$Component);

  function OsBrowserImage() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, OsBrowserImage);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OsBrowserImage.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(OsBrowserImage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(OsBrowserImage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.browser !== nextProps.browser || this.props.operatingSystem !== nextProps.operatingSystem || this.props.ifOsBrowserImageShow !== nextProps.ifOsBrowserImageShow) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          browser = _props.browser,
          operatingSystem = _props.operatingSystem,
          ifOsBrowserImageShow = _props.ifOsBrowserImageShow;

      if (ifOsBrowserImageShow) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__info_css___default.a.osIconWrapper, __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css___default.a.clearfix)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icons_OS__["a" /* default */], {
          name: operatingSystem
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icons_Browser__["a" /* default */], {
          name: browser
        })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_react_tooltip___default.a, {
          id: 'chatContainer',
          effect: 'solid',
          place: 'bottom',
          'class': __WEBPACK_IMPORTED_MODULE_12__info_css___default.a.tooltip
        }));
      }
      return null;
    }
  }]);

  return OsBrowserImage;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OsBrowserImage);

/***/ }),

/***/ 1463:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__info_css__);










var getLocation = function getLocation(country, state, city, ip) {
  var result = '';
  if (city && city !== '-') {
    result += city + ', ';
  }
  if (state && state !== '-') {
    result += state + ', ';
  }
  if (country && country !== '-') {
    result += country + ', ';
  }
  if (result.length > 0) {
    result = result.substring(0, result.length - 2);
    if (ip) {
      result += '(' + ip + ')';
    }
  } else {
    result = ip;
  }
  return result;
};

var VisitorLocation = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(VisitorLocation, _React$Component);

  function VisitorLocation() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, VisitorLocation);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorLocation.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(VisitorLocation)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(VisitorLocation, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.country !== nextProps.country || this.props.state !== nextProps.state || this.props.city !== nextProps.city || this.props.ip !== nextProps.ip) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          country = _props.country,
          state = _props.state,
          city = _props.city,
          ip = _props.ip;

      var location = getLocation(country, state, city, ip);
      if (location) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_8__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__info_css___default.a.title
        }, void 0, 'Location'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__info_css___default.a.line, 'contentMenu'),
          tabIndex: -1
        }, void 0, location));
      }
      return null;
    }
  }]);

  return VisitorLocation;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VisitorLocation);

/***/ }),

/***/ 1464:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_css__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_electronAPI__ = __webpack_require__(57);














var getReferrer = function getReferrer(referrer, searchEngine, searchEngineKeywords, tooltipData) {
  var result = '';
  if (searchEngine || searchEngineKeywords) {
    result = searchEngine;
    if (searchEngineKeywords) {
      result += ' (' + searchEngineKeywords + ')';
    }
    if (referrer) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
        'data-tip': tooltipData,
        'data-for': 'wherefrom',
        className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.wherefromLink,
        newWindow: true,
        href: referrer
      }, void 0, result);
    }
  } else if (referrer) {
    result = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
      'data-tip': tooltipData,
      'data-for': 'wherefrom',
      className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.wherefromLink,
      newWindow: true,
      href: referrer
    }, void 0, referrer);
  }
  return result;
};

var getReferrerTooltip = function getReferrerTooltip(referrer, searchEngine, searchEngineKeywords) {
  var result = '';
  if (referrer) {
    result += 'Referrer:<br>' + referrer + '<br>';
  }
  if (searchEngine) {
    result += 'Search Engine: ' + searchEngine + '<br>';
  }
  if (searchEngineKeywords) {
    result += 'Keywords: ' + searchEngineKeywords + '<br>';
  }
  if (result.length > 0) {
    result = result.substring(0, result.length - 4);
  }
  return result;
};

var WhereFrom = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WhereFrom, _React$Component);

  function WhereFrom(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WhereFrom);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WhereFrom.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WhereFrom)).call(this, props));

    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WhereFrom, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.referrer !== nextProps.referrer || this.props.searchEngine !== nextProps.searchEngine || this.props.searchEngineKeywords !== nextProps.searchEngineKeywords || this.state.x !== nextState.x || this.state.y !== nextState.y) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          referrer = _props.referrer,
          searchEngine = _props.searchEngine,
          searchEngineKeywords = _props.searchEngineKeywords;

      var tooltipData = getReferrerTooltip(referrer, searchEngine, searchEngineKeywords);
      var data = getReferrer(referrer, searchEngine, searchEngineKeywords, tooltipData);
      if (data) {
        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__info_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.notEdit)
        }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.title
        }, void 0, 'Where From'), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          id: 'wherefromDiv',
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__info_css___default.a.wherefromDiv, __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.line),
          tabIndex: -1
        }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.inlineBlock,
          onMouseDown: function onMouseDown(e) {
            if (e.nativeEvent.button == 2) {
              document.getElementById("wherefromDiv").focus();
              var tempX = e.nativeEvent.x;
              var tempY = e.nativeEvent.y;
              if (window.innerWidth - e.nativeEvent.x < 150) {
                tempX = window.innerWidth - 150;
                tempY = e.nativeEvent.y + 10;
              }
              _this2.setState({ x: tempX, y: tempY });
            } else {
              _this2.setState({ x: -9999, y: -9999 });
            }
          }
        }, void 0, data, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.wherefromMenuWrapper,
          style: { left: this.state.x, top: this.state.y }
        }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('ul', {
          className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.wherefromMenu
        }, void 0, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('li', {
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();
            _this2.setState({ x: -9999, y: -9999 });
            __WEBPACK_IMPORTED_MODULE_12__services_electronAPI__["b" /* shell */].openExternal(referrer);
          }
        }, void 0, 'Open in browser'), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('li', {
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();
            var copyElement = document.getElementById('copyDiv');
            copyElement.select();
            document.execCommand('copy');
          }
        }, void 0, 'Copy the link'))))), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()('textarea', {
          id: 'copyDiv',
          className: __WEBPACK_IMPORTED_MODULE_11__info_css___default.a.copyArea,
          defaultValue: referrer
        }), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_react_tooltip___default.a, {
          id: 'wherefrom',
          effect: 'solid',
          place: 'bottom',
          multiline: true,
          'class': __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__info_css___default.a.tooltip, __WEBPACK_IMPORTED_MODULE_10__CommonResources_common_css___default.a.tooltipInfo)
        }));
      }
      return null;
    }
  }]);

  return WhereFrom;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WhereFrom);

/***/ }),

/***/ 1465:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_css__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AgentTab_css__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AgentTab_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__AgentTab_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__NavigationFirstItem__ = __webpack_require__(1466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__NavigationItem__ = __webpack_require__(1467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_helper__ = __webpack_require__(16);



















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__utils_helper__["e" /* shouldComponentUpdateGen */])('visitor navigation', ['visitorId', 'ifNavigationLoading', 'timezoneoffset']);

var Navigation = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Navigation, _Component);

  function Navigation() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Navigation);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Navigation.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Navigation)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.navigationItems.length === 0) {
        this.props.refreshNavigation(this.props.visitorId);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.navigationItems.length !== nextProps.navigationItems.length || shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prvProps) {
      if (prvProps.visitorId !== this.props.visitorId && this.props.navigationItems.length === 0) {
        this.props.refreshNavigation(this.props.visitorId);
      }
      __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a.rebuild();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__navigation_css___default.a.navigation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__navigation_css___default.a.infoline
      }, void 0, this.props.ifNavigationLoading ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__AgentTab_css___default.a.loading
      }, void 0, 'Loading...') : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Link_Link__["a" /* default */], {
        onClick: function onClick() {
          return _this2.props.refreshNavigation(_this2.props.visitorId);
        },
        className: __WEBPACK_IMPORTED_MODULE_13__AgentTab_css___default.a.refresh
      }, void 0, 'Refresh'))), !this.props.ifNavigationLoading && (this.props.navigationItems === undefined || this.props.navigationItems.length === 0 ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__navigation_css___default.a.infoline
      }, void 0, 'Oops! This visitor has no navigation records yet.') : this.props.navigationItems.map(function (item, i, list) {
        return item.isCurrentPage ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__NavigationFirstItem__["a" /* default */], {
          title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_str__["a" /* isNullOrEmpty */])(item.title) ? item.pageURL : item.title,
          pageURL: item.pageURL,
          timezoneoffset: _this2.props.timezoneoffset,
          time: item.time
        }, 'navigation_' + item.id) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__NavigationItem__["a" /* default */], {
          title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_str__["a" /* isNullOrEmpty */])(item.title) ? item.pageURL : item.title,
          pageURL: item.pageURL,
          time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_time__["d" /* formatTimeWithMillSecondKeep2Unit */])(list[i - 1].time - item.time)
        }, 'navigation_' + item.id);
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a, {
        id: 'visitUrl',
        effect: 'solid',
        place: 'bottom',
        multiline: true,
        'class': __WEBPACK_IMPORTED_MODULE_12__navigation_css___default.a.tooltip
      }));
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ 1466:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_css__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_time__ = __webpack_require__(74);












var NavigationFirstItem = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(NavigationFirstItem, _Component);

  function NavigationFirstItem(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, NavigationFirstItem);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NavigationFirstItem.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(NavigationFirstItem)).call(this, props));

    _this.timer = null;
    _this.state = {
      currentTimeInterval: new Date() - props.time - props.timezoneoffset * 1000
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(NavigationFirstItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.timer !== null) {
        clearInterval(this.timer);
      }

      this.timer = setInterval(function () {
        _this2.setState({
          currentTimeInterval: new Date() - _this2.props.time - _this2.props.timezoneoffset * 1000
        });
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageURL = _props.pageURL,
          title = _props.title;


      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        'data-tip': pageURL,
        'data-for': 'visitUrl',
        className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.infoline
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.info
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.title, __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.withCurrent)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Link_Link__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.preview,
        href: pageURL,
        newWindow: true
      }, void 0, title)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.current
      }, void 0, '(Current Page)')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.date
      }, void 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_time__["d" /* formatTimeWithMillSecondKeep2Unit */])(this.state.currentTimeInterval)));
    }
  }]);

  return NavigationFirstItem;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NavigationFirstItem);

/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_css__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__navigation_css__);







var NavigationItem = function NavigationItem(props) {
  var pageURL = props.pageURL,
      time = props.time,
      title = props.title,
      others = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(props, ['pageURL', 'time', 'title']);

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'div',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, others, {
      'data-tip': pageURL,
      'data-for': 'visitUrl',
      className: __WEBPACK_IMPORTED_MODULE_5__navigation_css___default.a.infoline
    }),
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_5__navigation_css___default.a.info
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_5__navigation_css___default.a.title
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__Link_Link__["a" /* default */], {
      className: __WEBPACK_IMPORTED_MODULE_5__navigation_css___default.a.preview,
      href: pageURL,
      newWindow: true
    }, void 0, title))),
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_5__navigation_css___default.a.date
    }, void 0, time)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NavigationItem);

/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CommonResources_common_css__);






var AccountInfo = function AccountInfo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.accountinfo
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.accountTitle
  }, void 0, 'Account Details'), props.salesforceAccountFields.map(function (item, idx) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CommonResources_common_css___default.a.clearfix, __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.fieldInfo)
    }, idx, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.accountName
    }, void 0, item.label + ' '), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.accountValue
    }, void 0, item.value));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AccountInfo);

/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RenderField__ = __webpack_require__(1470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__ = __webpack_require__(56);



















var defaultValidate = function defaultValidate(values, props) {
  if (values) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["f" /* reduceArray */])(props.fields.filter(function (field) {
      return field.type !== __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].bool;
    }).map(function (field) {
      if (field.required) {
        if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].reference) {
          if (!values[field.systemName] || values[field.systemName] && !values[field.systemName].value) {
            return { name: field.systemName, value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["g" /* getDisplayText */])(field) + ' is required!' };
          }
        } else if (!values[field.systemName]) {
          return { name: field.systemName, value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["g" /* getDisplayText */])(field) + ' is required!' };
        }
      } else if (values[field.systemName]) {
        if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].percent || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].currency || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].double) {
          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["h" /* isSalesforceDouble */])(values[field.systemName])) {
            return { name: field.systemName, value: 'Please enter a number.' };
          }
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].email) {
          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["i" /* isSalesforceEmail */])(values[field.systemName])) {
            return { name: field.systemName, value: 'Incorrect email format.' };
          }
        }
      }
    }));
  }
  return {};
};

var CustomForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(CustomForm, _React$Component);

  function CustomForm(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, CustomForm);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CustomForm.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(CustomForm)).call(this, props));

    var cacheState = __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["c" /* getObject */]('salesforceFormState');
    _this.scrollTop = __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["a" /* getNumber */]('salesforceFormScrollTop');
    if (cacheState) {
      _this.state = cacheState;
    } else {
      _this.state = {
        values: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["j" /* getInitValues */])(props.fields, props.fieldsValues),
        errors: {}
      };
    }
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.onSubmitSalesforce = _this.onSubmitSalesforce.bind(_this);
    _this.onCancelClick = _this.onCancelClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(CustomForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.scrollTop) {
        this.formWrapper.scrollTop = this.scrollTop;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.ifSalesforceLoading !== nextProps.ifSalesforceLoading || this.props.disable !== nextProps.disable || this.props.salesforceSubmitError !== nextProps.salesforceSubmitError || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, nextState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, nextState.errors)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.ifSalesforceLoading && !this.props.ifSalesforceLoading && this.props.salesforceSubmitError) {
        this.formWrapper.scrollTop = 0;
      }
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.values, prevState.values) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.errors, prevState.errors)) {
        __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["d" /* setObject */]('salesforceFormState', this.state);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["e" /* set */]('salesforceFormScrollTop', this.formWrapper.scrollTop);
    }
  }, {
    key: 'onSubmitSalesforce',
    value: function onSubmitSalesforce() {
      var e = defaultValidate(this.state.values, this.props);
      if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e).length === 0) {
        this.props.onSubmitSalesforceForm(this.state.values);
      } else {
        var name = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(e)[0];
        var errorElement = document.getElementById('error_' + name);
        if (errorElement) {
          if (errorElement.scrollIntoViewIfNeeded) errorElement.scrollIntoViewIfNeeded();else errorElement.scrollIntoView();
        }
      }
      this.setState({
        errors: e
      });
    }
  }, {
    key: 'onCancelClick',
    value: function onCancelClick() {
      __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('salesforceFormState');
      this.props.onCancelClick();
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(name, value) {
      var e = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.errors);
      if (e[name]) {
        e[name] = '';
      }
      var temp = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.state.values);
      temp[name] = value;
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(temp, this.state.values)) {
        this.setState({
          values: temp,
          errors: e
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.relativeDiv
      }, void 0, props.ifSalesforceLoading && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.loadingDiv
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.formWrapper = element;
          }, className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.formWrapper },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.errorMessage,
          style: { display: !props.ifSalesforceLoading && props.salesforceSubmitError ? 'block' : 'none' }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.salesforceSubmitError)),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.fields.map(function (field, idx) {
          if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].percent || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].currency || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].double) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              input: { value: _this2.state.values[field.systemName] || '',
                onChange: function onChange(e) {
                  return _this2.handleValueChange(field.systemName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["k" /* normalizeDecimal */])(e.target.value));
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].int) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              input: { value: _this2.state.values[field.systemName] || '',
                onChange: function onChange(e) {
                  return _this2.handleValueChange(field.systemName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["l" /* normalizeInt */])(e.target.value));
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].date) {
            var dateV = _this2.state.values[field.systemName];
            var inputV = void 0;
            if (typeof dateV === 'string' && dateV) {
              inputV = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_moment__["default"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* convertSFDateToLocalDate */])(dateV));
            } else {
              inputV = dateV;
            }
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              dateFormatter: props.dateFormatter,
              name: field.systemName,
              fieldInfo: field,
              input: { value: inputV,
                onChange: function onChange(value) {
                  return _this2.handleValueChange(field.systemName, value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].dateTime) {
            var dateTimeV = _this2.state.values[field.systemName];
            var inputTV = void 0;
            if (typeof dateTimeV === 'string' && dateTimeV) {
              inputTV = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_moment__["default"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* convertSFDateTimeToLocalDate */])(dateTimeV));
            } else {
              inputTV = dateTimeV;
            }
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              dateFormatter: props.dateTimeFormatter,
              name: field.systemName,
              fieldInfo: field,
              input: { value: inputTV,
                onChange: function onChange(value) {
                  return _this2.handleValueChange(field.systemName, value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].reference) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              onSalesforcelookUp: props.onSalesforcelookUp,
              input: { value: _this2.state.values[field.systemName] || '',
                onChange: function onChange(value) {
                  return _this2.handleValueChange(field.systemName, value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].bool) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              input: { value: _this2.state.values[field.systemName] || false,
                onChange: function onChange(value) {
                  return _this2.handleValueChange(field.systemName, value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].picklist || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_salesforce__["a" /* fieldType */].multiPicklist) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              input: { value: _this2.state.values[field.systemName] || '',
                onChange: function onChange(value) {
                  return _this2.handleValueChange(field.systemName, value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RenderField__["a" /* default */], {
              disable: props.disable,
              name: field.systemName,
              fieldInfo: field,
              input: { value: _this2.state.values[field.systemName] || '',
                onChange: function onChange(e) {
                  return _this2.handleValueChange(field.systemName, e.target.value);
                } },
              meta: { touched: true, invalid: _this2.state.errors[field.systemName] ? true : false, error: _this2.state.errors[field.systemName] || '' }
            }, idx);
          }
        }))
      ), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.buttonWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Button_Button__["a" /* default */], {
        onClick: this.onSubmitSalesforce,
        className: __WEBPACK_IMPORTED_MODULE_14__salesforce_css___default.a.marginRight20,
        disabled: props.ifSalesforceLoading,
        loading: props.ifSalesforceLoading,
        iconPosition: 'right',
        text: props.ifSalesforceLoading ? 'Loading' : 'Save',
        type: 'primary',
        htmlType: 'button'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Button_Button__["a" /* default */], {
        onClick: this.onCancelClick,
        text: 'Cancel',
        htmlType: 'button'
      })));
    }
  }]);

  return CustomForm;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CustomForm);

/***/ }),

/***/ 1470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__TextArea_TextArea__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DatePicker_DatePicker__ = __webpack_require__(1406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Transfer_FormTransfer__ = __webpack_require__(1486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__util__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Modal_SalesforceLookup_SalesforceLookupModel__ = __webpack_require__(1432);























var RenderField = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(RenderField, _React$Component);

  function RenderField() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, RenderField);

    return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RenderField.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(RenderField)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(RenderField, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.props.meta, nextProps.meta) || this.props.input.value !== nextProps.input.value) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var input = props.input,
          fieldInfo = props.fieldInfo,
          disable = props.disable,
          meta = props.meta,
          others = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(props, ['input', 'fieldInfo', 'disable', 'meta']);

      var touched = meta.touched,
          error = meta.error;
      var type = fieldInfo.type,
          label = fieldInfo.label,
          required = fieldInfo.required,
          picklistValues = fieldInfo.picklistValues,
          systemName = fieldInfo.systemName;

      var prepend = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        id: 'error_' + systemName,
        className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.fieldName
      }, void 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__util__["g" /* getDisplayText */])(fieldInfo), required && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.required
      }, void 0, '*'), touched && error && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.required
      }, void 0, error));
      if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].percent || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].currency || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].email || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].phone || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].text || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].double || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].string || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].id || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].int) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          type: 'text',
          isDisabled: disable,
          className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.inputWidth, __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.input),
          input: input, meta: meta
        }, others)));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].textarea) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__TextArea_TextArea__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          rows: '4',
          type: 'text',
          isDisabled: disable,
          className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.inputWidth, __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.textArea),
          input: input,
          meta: meta
        }, others)));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].bool) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          id: 'error_' + systemName,
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.fieldName
        }, void 0, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ input: input }, others, { isDisabled: disable })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__util__["g" /* getDisplayText */])(fieldInfo), required && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.required
        }, void 0, '*'), touched && error && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.required
        }, void 0, error)));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].picklist) {
        var defaultSelectOption = [{ text: ' --None-- ', value: '' }];
        var options = picklistValues.map(function (item) {
          return { text: item, value: item };
        });
        if (!required) {
          options = defaultSelectOption.concat(options);
        }
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Select_Select__["a" /* default */], {
          input: input,
          isDisabled: disable,
          options: options
        }));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].date || type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].dateTime) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__DatePicker_DatePicker__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.inputWidth, __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.input),
          dateFormatter: others.dateFormatter,
          isShowTime: type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].dateTime,
          input: input,
          meta: meta
        }));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].multiPicklist) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Transfer_FormTransfer__["a" /* default */], {
          input: input,
          items: picklistValues ? picklistValues.map(function (item, index) {
            return { id: index, name: item, value: item };
          }) : []
        }));
      } else if (type === __WEBPACK_IMPORTED_MODULE_17__constants_salesforce__["a" /* fieldType */].reference) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.field
        }, void 0, prepend, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_20__Modal_SalesforceLookup_SalesforceLookupModel__["a" /* default */], {
          input: input,
          meta: meta,
          inputStyle: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.inputWidth, __WEBPACK_IMPORTED_MODULE_18__salesforce_css___default.a.input),
          isNeedSelector: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__util__["m" /* isNeedSelector */])(fieldInfo),
          selectOptions: fieldInfo.relatedObjects,
          onSalesforcelookUp: props.onSalesforcelookUp
        }));
      }
      return null;
    }
  }]);

  return RenderField;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (RenderField);

/***/ }),

/***/ 1471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SalesforceInfo__ = __webpack_require__(1473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AccountInfo__ = __webpack_require__(1468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SalesforceButtonGroup__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_salesforceInfoType__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CustomForm__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__ = __webpack_require__(56);


















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["e" /* shouldComponentUpdateGen */])('Salesforce', ['visitorId', 'editType', 'ifSalesforceLoading', 'salesforceSubmitError', 'ifShowLoading', 'leadId', 'contactId', 'statusInfo', 'salesforceAccountFields', 'salesforceContactFields', 'salesforceLeadFields', 'waiting', 'errorMessage', 'getSFObjectFieldsError'], ['showForm']);

var Salesforce = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Salesforce, _Component);

  function Salesforce(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Salesforce);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Salesforce.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Salesforce)).call(this, props));

    _this.state = {
      showForm: props.showForm
    };
    if (!props.showForm) {
      __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('salesforceFormState');
      __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('salesforceFormScrollTop');
    }
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Salesforce, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visitorId !== nextProps.visitorId || this.props.chatId !== nextProps.chatId) {
        this.setState({
          showForm: false
        });
      } else {
        this.setState({
          showForm: nextProps.showForm
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.state.showForm) {
        __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('salesforceFormState');
        __WEBPACK_IMPORTED_MODULE_16__utils_localStorage__["b" /* deleteItem */]('salesforceFormScrollTop');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.visitorId) return null;

      var _props = this.props,
          statusInfo = _props.statusInfo,
          salesforceAccountFields = _props.salesforceAccountFields,
          salesforceContactFields = _props.salesforceContactFields,
          salesforceLeadFields = _props.salesforceLeadFields,
          onEditOrCreate = _props.onEditOrCreate,
          onCreateCase = _props.onCreateCase,
          visitorId = _props.visitorId,
          ifShowLoading = _props.ifShowLoading,
          onAttachToContact = _props.onAttachToContact,
          onAttachToLead = _props.onAttachToLead,
          leadId = _props.leadId,
          contactId = _props.contactId,
          editType = _props.editType,
          ifSalesforceLoading = _props.ifSalesforceLoading,
          onCancelClick = _props.onCancelClick,
          onSubmitSalesforceForm = _props.onSubmitSalesforceForm,
          salesforceSubmitError = _props.salesforceSubmitError,
          waiting = _props.waiting,
          errorMessage = _props.errorMessage,
          chatExists = _props.chatExists,
          getSFObjectFieldsError = _props.getSFObjectFieldsError,
          rest = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['statusInfo', 'salesforceAccountFields', 'salesforceContactFields', 'salesforceLeadFields', 'onEditOrCreate', 'onCreateCase', 'visitorId', 'ifShowLoading', 'onAttachToContact', 'onAttachToLead', 'leadId', 'contactId', 'editType', 'ifSalesforceLoading', 'onCancelClick', 'onSubmitSalesforceForm', 'salesforceSubmitError', 'waiting', 'errorMessage', 'chatExists', 'getSFObjectFieldsError']);

      var formTitle = '';
      if (editType === __WEBPACK_IMPORTED_MODULE_13__constants_enums_salesforceInfoType__["a" /* contactInfo */]) {
        if (contactId) {
          formTitle = 'Edit Contact';
        } else {
          formTitle = 'Create Contact & Attach Case';
        }
      } else if (editType === __WEBPACK_IMPORTED_MODULE_13__constants_enums_salesforceInfoType__["b" /* LeadInfo */]) {
        if (leadId) {
          formTitle = 'Edit Lead';
        } else {
          formTitle = 'Create Lead & Attach Task';
        }
      }
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__salesforce_css___default.a.Loading,
        style: { display: ifShowLoading ? 'block' : 'none' }
      }, void 0, 'Loading...'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        style: { display: !ifShowLoading ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__salesforce_css___default.a.salesforce,
        style: { display: this.state.showForm ? 'none' : 'block' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__salesforce_css___default.a.errorMessage,
        style: { display: !waiting && (errorMessage || getSFObjectFieldsError) ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, errorMessage || getSFObjectFieldsError)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__SalesforceButtonGroup__["a" /* default */], {
        statusInfo: statusInfo,
        onCreateContact: function onCreateContact(type) {
          onEditOrCreate(type);
        },
        onCreateLead: function onCreateLead(type) {
          onEditOrCreate(type);
        },
        onCreateCase: onCreateCase,
        onAttachToLead: onAttachToLead,
        onAttachToContact: onAttachToContact,
        visitorId: visitorId,
        leadId: leadId,
        contactId: contactId,
        disabled: waiting || !chatExists || !!getSFObjectFieldsError
      }), statusInfo.matchToContact && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__SalesforceInfo__["a" /* default */], {
        infoType: __WEBPACK_IMPORTED_MODULE_13__constants_enums_salesforceInfoType__["a" /* contactInfo */],
        Fields: salesforceContactFields,
        editInfo: function editInfo(type) {
          onEditOrCreate(type);
        }
      }), statusInfo.matchToLead && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__SalesforceInfo__["a" /* default */], {
        infoType: __WEBPACK_IMPORTED_MODULE_13__constants_enums_salesforceInfoType__["b" /* LeadInfo */],
        Fields: salesforceLeadFields,
        editInfo: function editInfo(type) {
          onEditOrCreate(type);
        }
      }), salesforceAccountFields !== undefined && salesforceAccountFields.length > 0 && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__AccountInfo__["a" /* default */], {
        salesforceAccountFields: salesforceAccountFields
      })), this.state.showForm && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__salesforce_css___default.a.formTitle
      }, void 0, formTitle), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__CustomForm__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        ifSalesforceLoading: ifSalesforceLoading, salesforceSubmitError: salesforceSubmitError,
        onSubmitSalesforceForm: onSubmitSalesforceForm, onCancelClick: onCancelClick
      })))));
    }
  }]);

  return Salesforce;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Salesforce);

/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums_salesforceInfoType__ = __webpack_require__(927);








var SalesforceBuggonGroup = function SalesforceBuggonGroup(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonGroup
  }, void 0, !(props.statusInfo.matchToContact || props.statusInfo.matchToLead || props.statusInfo.taskCreated || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.infoline
  }, void 0, 'This visitor is not available in your Salesforce.'), (props.statusInfo.taskCreated || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.infoline2
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.statusInfo.successInfo)), !(props.statusInfo.matchToContact || props.statusInfo.matchToLead || props.statusInfo.taskCreated || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonContaner
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    disabled: props.disabled,
    text: 'Create Lead & Attach Task',
    type: 'primary',
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.button,
    onClick: function onClick() {
      props.onCreateLead(__WEBPACK_IMPORTED_MODULE_6__constants_enums_salesforceInfoType__["b" /* LeadInfo */]);
    }
  })), !(props.statusInfo.matchToContact || props.statusInfo.matchToLead || props.statusInfo.taskCreated || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonContaner
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    disabled: props.disabled,
    text: 'Create Case',
    type: 'primary',
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.button,
    onClick: function onClick() {
      props.onCreateCase(props.visitorId);
    }
  })), !(props.statusInfo.matchToContact || props.statusInfo.matchToLead || props.statusInfo.taskCreated || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonContaner
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    disabled: props.disabled,
    text: 'Create Contact & Attach Case',
    type: 'primary',
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.button,
    onClick: function onClick() {
      props.onCreateContact(__WEBPACK_IMPORTED_MODULE_6__constants_enums_salesforceInfoType__["a" /* contactInfo */]);
    }
  })), !(!props.statusInfo.matchToLead || props.statusInfo.taskCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonContaner
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    disabled: props.disabled,
    text: 'Attach Task to This Lead',
    type: 'primary',
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.button,
    onClick: function onClick() {
      props.onAttachToLead(props.visitorId, props.leadId);
    }
  })), !(!props.statusInfo.matchToContact || props.statusInfo.caseCreated) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.buttonContaner
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    disabled: props.disabled,
    text: 'Attach Case to This Contact',
    type: 'primary',
    className: __WEBPACK_IMPORTED_MODULE_3__salesforce_css___default.a.button,
    onClick: function onClick() {
      props.onAttachToContact(props.visitorId, props.contactId);
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SalesforceBuggonGroup);

/***/ }),

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_enums_salesforceInfoType__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__salesforce_css__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__salesforce_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css__);









var SalesforceInfo = function SalesforceInfo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.Container, __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.editable, __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.notEdit)
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.editIconWrapper
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_3__constants_enums__["b" /* icons */].typing,
    color: '#aaa',
    size: 14,
    className: __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.editIcon,
    onClick: function onClick() {
      props.editInfo(props.infoType);
    }
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.accountTitle
  }, void 0, props.infoType === __WEBPACK_IMPORTED_MODULE_4__constants_enums_salesforceInfoType__["a" /* contactInfo */] ? 'Contact' : 'Lead', ' Details'), props.Fields.map(function (item, idx) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css___default.a.clearfix, __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.fieldInfo)
    }, idx, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.leadInfo
    }, void 0, item.label + ' '), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_6__salesforce_css___default.a.leadValue
    }, void 0, item.value));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SalesforceInfo);

/***/ }),

/***/ 1474:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce__ = __webpack_require__(1245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css__ = __webpack_require__(1644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css__);
















/**
 * Configuration of ordered tabs
 */
var order = [{
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].info,
  text: 'Info',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].info,
  color: '#329FD9',
  tooltip: 'Visitor Info'
}, {
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].salesforce,
  text: 'Salesforce',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].salesforce,
  color: '#0b9dd6',
  tooltip: 'Salesforce'
}, {
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].wrapup,
  text: 'Wrap-up',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].wrapup,
  color: '#7ac2b7',
  tooltip: 'Wrap-up'
}, {
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].cannedMessage,
  text: 'Canned',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].canned,
  color: '#fcb603',
  tooltip: 'Canned'
}, {
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].nav,
  text: 'Navigation',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].navigation,
  color: '#7ebd3a',
  tooltip: 'Navigation'
}, {
  key: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["g" /* visitorDetailsTabs */].history,
  text: 'History',
  icon: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].history,
  color: '#f05030',
  tooltip: 'History'
}];

var clearSelect = function clearSelect() {
  var element = document.querySelector('div[data-vmselect="open"]');
  if (element) {
    element.click();
  }
};
var clearSelectDebounce = __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default()(clearSelect, 10);
/**
 * Create Unselected Icon for tab
 * @param {Object} config - One of element in `order` array
 * @param {Function} onTabSelect - Callback when this tab is selected
 * @returns {Object} React Component
 */
var getUnselectedIcon = function getUnselectedIcon(config, onTabSelect) {
  return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.unselected, __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.icon),
    'data-tip': config.tooltip,
    'data-for': 'visitordetails',
    onClick: function onClick() {
      __WEBPACK_IMPORTED_MODULE_9_react_tooltip___default.a.hide(document.getElementById(config.key));
      onTabSelect(config.key);
    },
    id: config.key
  }, config.key, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
    type: config.icon,
    size: 'normal',
    color: '#888',
    hoverColor: config.color
  }));
};

/**
 * Create Selected Icon for tab
 * @param {Object} config - One of element in `order` array
 * @returns {Object} React Component
 */
var getSelectedIcon = function getSelectedIcon(config) {
  return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.selected
  }, config.key, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
    type: config.icon,
    size: 'normal',
    color: config.color
  }), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('span', {}, void 0, config.text));
};

/**
 * Get selected tab.
 *
 * It's possible that new provided props missing currently selected tab.
 * In this case, use the first tab as selected one.
 *
 * @param {string} selected - Previous selected
 * @param {object} components - Components configuration
 * @returns {string} selected tab
 */
var getSelected = function getSelected(selected, components) {
  if (components[selected]) return selected;
  return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(components)[0];
};

var VisitorDetailsTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(VisitorDetailsTab, _React$Component);

  function VisitorDetailsTab() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, VisitorDetailsTab);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorDetailsTab.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(VisitorDetailsTab)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(VisitorDetailsTab, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        __WEBPACK_IMPORTED_MODULE_9_react_tooltip___default.a.rebuild();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          components = _props.components,
          selected = _props.selected,
          onTabSelect = _props.onTabSelect;

      var selectedTab = getSelected(selected, components);
      return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.container
      }, void 0, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.header
      }, void 0, order.filter(function (config) {
        return components[config.key];
      }).map(function (config) {
        if (config.key === selectedTab) return getSelectedIcon(config);
        return getUnselectedIcon(config, onTabSelect);
      })), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.content,
        onScroll: function onScroll() {
          clearSelectDebounce();
        }
      }, void 0, order.filter(function (config) {
        return config.key === selectedTab;
      }).map(function (config) {
        return components[config.key];
      }).map(function (config) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(config.component, config.props);
      })[0]), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9_react_tooltip___default.a, {
        id: 'visitordetails',
        effect: 'solid',
        place: 'bottom',
        'class': __WEBPACK_IMPORTED_MODULE_13__VisitorDetailsTab_css___default.a.tooltip
      }));
    }
  }]);

  return VisitorDetailsTab;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VisitorDetailsTab);

/***/ }),

/***/ 1475:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RadioButton_RadioButton__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AgentTab_css__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AgentTab_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__AgentTab_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__visitorHistory_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__VisitorHistoryChatDetails__ = __webpack_require__(1476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__VisitorHistoryMessageDetails__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__containers_Business_common__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__CommonResources_common_css__);






















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__utils_helper__["e" /* shouldComponentUpdateGen */])('VisitorHistory', ['visitorId', 'historyMessageId', 'historyChatId', 'historyRefreshing', 'historyViewType', 'isViewAllItems', 'ifUseMainServer', 'historyChatDetailRefreshing', 'historyMessageDetailRefreshing']);

var VisitorHistory = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(VisitorHistory, _Component);

  function VisitorHistory(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, VisitorHistory);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VisitorHistory.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(VisitorHistory)).call(this, props));

    _this.gotoVisitorChatDetail = _this.gotoVisitorChatDetail.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(VisitorHistory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /**
       * @todo is it required to call, even when `historyViewType` is chat already?
       * if history has been loaded from server, re-selecting History tab will causing rendering
       * twice. One of them caused by tab changing and one of them caused by following lin.
       * Seems unnecessary.
       */
      this.historyViewTypeChanged(__WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat);
      if (this.props.chatItems === undefined) {
        this.getHistoryLists();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visitorId !== this.props.visitorId) {
        this.historyViewTypeChanged(__WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat);
      }
      if (prevProps.visitorId !== this.props.visitorId && (this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat && this.props.chatItems === undefined || this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage && this.props.messageItems === undefined)) {
        this.getHistoryLists();
      } else if (prevProps.historyChatId !== this.props.historyChatId && this.props.historyChatId !== 0 && this.props.chatInfo === undefined) {
        this.props.getChatHistoryDetails(this.props.visitorId, this.props.historyChatId, __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat);
      } else if (prevProps.historyMessageId !== this.props.historyMessageId && this.props.historyMessageId !== 0 && this.props.offLineMessage === undefined) {
        this.props.getChatHistoryDetails(this.props.visitorId, this.props.historyMessageId, __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage);
      }
    }
  }, {
    key: 'getHistoryLists',
    value: function getHistoryLists() {
      var historyViewType = this.props.historyViewType;
      if (arguments.length > 0) {
        historyViewType = arguments.length <= 0 ? undefined : arguments[0];
      }
      this.props.refreshHistory(this.props.visitorId, historyViewType);
    }
  }, {
    key: 'getHistoryDetails',
    value: function getHistoryDetails(itemId) {
      this.props.refreshHistoryDetail(this.props.visitorId, itemId, this.props.historyViewType);
    }
  }, {
    key: 'updateViewAllStatus',
    value: function updateViewAllStatus() {
      if (this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat) {
        this.props.updateIsViewAllChats(this.props.visitorId, true);
      } else if (this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage) {
        this.props.updateIsViewAllMessages(this.props.visitorId, true);
      }
    }
  }, {
    key: 'historyItemClicked',
    value: function historyItemClicked(id) {
      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat) {
        if (this.props.chatInfo === undefined || this.props.historyChatId !== id || forceUpdate) {
          this.getHistoryDetails(id);
        } else {
          this.props.updateHistoryChatId(this.props.visitorId, 0);
        }
      } else if (this.props.offLineMessage === undefined || this.props.historyMessageId !== id || forceUpdate) {
        this.getHistoryDetails(id);
      } else {
        this.props.updateHistoryMessageId(this.props.visitorId, 0);
      }
    }
  }, {
    key: 'gotoVisitorChatDetail',
    value: function gotoVisitorChatDetail(purchaseUrl) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__containers_Business_common__["c" /* gotoVisitorChatDetail */])({
        purchaseUrl: purchaseUrl,
        loginUrl: this.props.loginUrl,
        autoLoginUrl: this.props.autoLoginUrl });
    }
  }, {
    key: 'historyViewTypeChanged',
    value: function historyViewTypeChanged(value) {
      this.props.updateHistoryViewType(this.props.visitorId, value);
      if (value === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat) {
        if (this.props.chatItems === undefined) {
          this.getHistoryLists(value);
        }
      } else if (this.props.messageItems === undefined) {
        this.getHistoryLists(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.history
      }, void 0, this.props.historyRefreshing && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_12__AgentTab_css___default.a.loading
      }, void 0, 'Loading...')), !this.props.historyRefreshing && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
        onClick: function onClick() {
          _this2.getHistoryLists();
        },
        className: __WEBPACK_IMPORTED_MODULE_12__AgentTab_css___default.a.refresh
      }, void 0, 'Refresh')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline, __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.historyType)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__RadioButton_RadioButton__["a" /* default */], {
        radioOption: [{ value: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat.toString(),
          text: 'Chats',
          checked: this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat
        }, {
          value: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage.toString(),
          text: 'Messages',
          checked: this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage
        }],
        handleChange: function handleChange(event) {
          _this2.historyViewTypeChanged(+event.target.value);
        },
        name: 'Chats_Messages',
        horizontal: true
      }))), this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, !this.props.historyRefreshing && !this.props.ifUseMainServer && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, 'Live Chat is running on the secondary server. We\'re sorry but you\'re unable to get chat records.'), !this.props.historyRefreshing && this.props.ifUseMainServer && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, (this.props.chatItems === undefined || this.props.chatItems.length === 0) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getChatHistoryError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, 'This visitor has no chat records yet.'), !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getChatHistoryError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailError
      }, void 0, ' ', this.props.errorInfo.getChatHistoryError, ' ')), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getChatHistoryError) && this.props.chatItems !== undefined && this.props.chatItems.length > 0 && this.props.chatItems.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          id: 'chat_' + item.chatId
        }, 'visitorHistoryChat_' + item.chatId, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.historyItem,
          'data-tip': item.operator,
          'data-for': 'historyTitle'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          href: '#chat_' + item.chatId,
          onClick: function onClick() {
            _this2.historyItemClicked(item.chatId);
          },
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.listItem
        }, void 0, item.time, '\xA0\xA0\xA0\xA0', item.operator)), item.chatId === _this2.props.historyChatId && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          style: { position: 'relative' }
        }, void 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(_this2.props.errorInfo.getChatHistoryDetailsError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__VisitorHistoryChatDetails__["a" /* default */], {
          refreshing: _this2.props.historyChatDetailRefreshing,
          chatInfo: _this2.props.chatInfo,
          gotoVisitorChatDetail: _this2.gotoVisitorChatDetail,
          ifEnableWrapupChat: _this2.props.ifEnableWrapupChat
        }), !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(_this2.props.errorInfo.getChatHistoryDetailsError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          id: '',
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailError
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, _this2.props.errorInfo.getChatHistoryDetailsError), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          onClick: function onClick() {
            _this2.props.getChatHistoryDetails(_this2.props.visitorId, item.chatId, __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].chat);
          },
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailErrorRrefresh
        }, void 0, 'Refresh'))));
      }))), this.props.historyViewType === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, !this.props.historyRefreshing && !this.props.ifUseMainServer && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, 'Live Chat is running on the secondary server. We\'re sorry but you\'re unable to get chat records.'), !this.props.historyRefreshing && this.props.ifUseMainServer && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, (this.props.messageItems === undefined || this.props.messageItems.length === 0) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getOfflineMessageHistoryError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.infoline
      }, void 0, 'This visitor has no message records yet.'), !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getOfflineMessageHistoryError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailError
      }, void 0, this.props.errorInfo.getOfflineMessageHistoryError)), this.props.messageItems !== undefined && this.props.messageItems.length > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(this.props.errorInfo.getOfflineMessageHistoryError) && this.props.messageItems.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          id: 'message_' + item.messageId
        }, 'visitorHistoryMessage_' + item.messageId, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.historyItem
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          href: '#message_' + item.messageId,
          onClick: function onClick() {
            _this2.historyItemClicked(item.messageId);
          },
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.listItem
        }, void 0, 'Message at ', item.time)), item.messageId === _this2.props.historyMessageId && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          style: { position: 'relative' }
        }, void 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(_this2.props.errorInfo.getOfflineMessageDetailsError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__VisitorHistoryMessageDetails__["a" /* default */], {
          refreshing: _this2.props.historyMessageDetailRefreshing,
          offLineMessage: _this2.props.offLineMessage
        }), !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__utils_str__["a" /* isNullOrEmpty */])(_this2.props.errorInfo.getOfflineMessageDetailsError) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailError
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, _this2.props.errorInfo.getOfflineMessageDetailsError), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
          onClick: function onClick() {
            _this2.props.getChatHistoryDetails(_this2.props.visitorId, item.messageId, __WEBPACK_IMPORTED_MODULE_11__constants_enums__["j" /* historyType */].offlineMessage);
          },
          className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.detailErrorRrefresh
        }, void 0, 'Refresh'))));
      }))), !this.props.isViewAllItems && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.moreChat
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
        onClick: function onClick() {
          _this2.updateViewAllStatus();
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__components_Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].arrowDown
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.moreText
      }, void 0, 'MORE'))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a, {
        id: 'historyTitle',
        effect: 'solid',
        place: 'bottom',
        multiline: true,
        'class': __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__visitorHistory_css___default.a.tooltip, __WEBPACK_IMPORTED_MODULE_20__CommonResources_common_css___default.a.tooltipInfo)
      }));
    }
  }]);

  return VisitorHistory;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

// VisitorHistory.examples = {
//   'Default Example': {
//     description: 'History',
//     component:
//       <VisitorHistory
//         chatItems={[
//           { time: '2016-12-12 12:12', visitor: 'visitor1' },
//           { time: '2016-12-13 12:12', visitor: 'visitor2' },
//           { time: '2016-12-14 12:12', visitor: 'visitor3' }]}
//         messageItems={[
//           { time: '2016-12-12 12:12' },
//           { time: '2016-12-13 12:12' },
//           { time: '2016-12-14 12:12' }]}
//         historyViewType={historyType.chat}
//       />,
//   },
// };


/* harmony default export */ __webpack_exports__["a"] = (VisitorHistory);

/***/ }),

/***/ 1476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_enums_senderType__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__visitorHistory_css__);










var HistoryChatDetals = function HistoryChatDetals(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.refreshing && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.detailLoading
  }, void 0, 'Loading...'), !props.refreshing && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.detail
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.detailLink
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Link_Link__["a" /* default */], {
    onClick: function onClick() {
      props.gotoVisitorChatDetail(props.chatInfo.detailUrl);
    }
  }, void 0, 'Details')), props.ifEnableWrapupChat && (props.chatInfo.wrap_up !== undefined && props.chatInfo.wrap_up.length > 0 || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(props.chatInfo.chatCategory.value) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(props.chatInfo.agentComment.value)) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.title
  }, void 0, 'Wrap-up Info:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(props.chatInfo.chatCategory.value) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + props.chatInfo.chatCategory.value, props.chatInfo.chatCategory.name + ': ' + props.chatInfo.chatCategory.value), !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(props.chatInfo.agentComment.value) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + props.chatInfo.agentComment.value, props.chatInfo.agentComment.name + ': ' + props.chatInfo.agentComment.value), props.chatInfo.wrap_up && props.chatInfo.wrap_up.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + item.id, item.name, ': ', item.value);
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.splitLine
  })), props.chatInfo.customVariables !== undefined && props.chatInfo.customVariables.length > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.title
  }, void 0, 'Custom Variable:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, props.chatInfo.customVariables.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + item.name, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, item.name, ': '), item.value && item.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Link_Link__["a" /* default */], {
      newWindow: true,
      href: item.url
    }, void 0, item.value), item.value && !item.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, item.value));
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.splitLine
  })), (props.chatInfo.pre_chat !== undefined && props.chatInfo.pre_chat.length > 0 || props.chatInfo.pre_chat_ser !== undefined && props.chatInfo.pre_chat_ser.length > 0) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.title
  }, void 0, 'Pre-chat:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, props.chatInfo.pre_chat_ser.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + item.id, item.name, ': ', item.value);
  }), props.chatInfo.pre_chat.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + item.id, item.name, ': ', item.value);
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.splitLine
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.title
  }, void 0, 'Chat Content:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, props.chatInfo.chatContent.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, item.info + ' ' + item.id, !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(item.sendMessageTime) && '[' + item.sendMessageTime + '] ', item.sendertype === __WEBPACK_IMPORTED_MODULE_7__constants_enums_senderType__["a" /* operator */] && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.agentMessage
    }, void 0, item.senderName), item.sendertype === __WEBPACK_IMPORTED_MODULE_7__constants_enums_senderType__["b" /* visitor */] && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
      className: __WEBPACK_IMPORTED_MODULE_8__visitorHistory_css___default.a.visitorMessage
    }, void 0, item.senderName), (item.sendertype === __WEBPACK_IMPORTED_MODULE_7__constants_enums_senderType__["b" /* visitor */] || item.sendertype === __WEBPACK_IMPORTED_MODULE_7__constants_enums_senderType__["a" /* operator */]) && ': ', !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(item.infoPrefix) && '' + item.infoPrefix, !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(item.info) && '' + item.info, !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_str__["a" /* isNullOrEmpty */])(item.endTime) && '(' + item.endTime + ')');
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (HistoryChatDetals);

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__visitorHistory_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link_Link__ = __webpack_require__(146);








var HistoryMessageDetals = function HistoryMessageDetals(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.refreshing ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.detailLoading
  }, void 0, 'Loading...') : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.detail
  }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(props.offLineMessage.customVariables) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.title
  }, void 0, 'Custom Variable:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, props.offLineMessage.customVariables.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, 'visitorHistoryChat_' + item.name, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, item.name, ': '), item.value && item.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Link_Link__["a" /* default */], {
      newWindow: true,
      href: item.url
    }, void 0, item.value), item.value && !item.url && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, item.value));
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.splitLine
  })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.title
  }, void 0, 'Content:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__visitorHistory_css___default.a.information, 'contentMenu')
  }, void 0, props.offLineMessage.content)));
};

/* harmony default export */ __webpack_exports__["a"] = (HistoryMessageDetals);

/***/ }),

/***/ 1478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WrapupFormWrapper__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WrapupHistory__ = __webpack_require__(1481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Wrapup_css__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Wrapup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FeatureHelp_FeatureHelp__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__ = __webpack_require__(24);


















var Wrapup = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Wrapup, _React$Component);

  function Wrapup() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Wrapup);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Wrapup.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Wrapup)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Wrapup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var t = __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__["a" /* default */].get('wrapupDivScrollTop');
      if (t && this.container) {
        this.container.scrollTop = t;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.chatId !== nextProps.chatId) {
        return true;
      } else if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.wrapups, nextProps.wrapups) || this.props.disableWrapupForm !== nextProps.disableWrapupForm || this.props.ifWrapupLoading !== nextProps.ifWrapupLoading || this.props.ifWrapupSubmitSuccess !== nextProps.ifWrapupSubmitSuccess || this.props.wrapupSubmitError !== nextProps.wrapupSubmitError || this.props.ifWrapupHistoryLoading !== nextProps.ifWrapupHistoryLoading || this.props.autoRefreshDataFlag !== nextProps.autoRefreshDataFlag || this.props.wrapupDetailsOpenId !== nextProps.wrapupDetailsOpenId || this.props.newFeatureNotify !== nextProps.newFeatureNotify || this.props.showWrapupRequired !== nextProps.showWrapupRequired) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.chatId !== prevProps.chatId) {
        __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__["a" /* default */].set('wrapupDivScrollTop', 0);
        if (this.container) {
          this.container.scrollTop = 0;
        }
      } else if (prevProps.ifWrapupLoading && !this.props.ifWrapupLoading && (this.props.ifWrapupSubmitSuccess || !this.props.ifWrapupSubmitSuccess && this.props.wrapupSubmitError)) {
        if (this.container) {
          this.container.scrollTop = 0;
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__["a" /* default */].set('wrapupDivScrollTop', this.container.scrollTop);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.chatId) return null;

      var _props = this.props,
          className = _props.className,
          newFeatureNotify = _props.newFeatureNotify,
          onFeatrueClick = _props.onFeatrueClick,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'newFeatureNotify', 'onFeatrueClick']);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.container = element;
          }, className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.wrapupWrapper },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.wrapup, className)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.featrue
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__FeatureHelp_FeatureHelp__["a" /* default */], {
          ifShow: (newFeatureNotify & 8) == 0,
          text: 'Fill out the wrap-up form to save time locating, organizing and reviewing your chats.',
          featrueNumber: 8,
          onGotitClick: function onGotitClick() {
            if (onFeatrueClick) onFeatrueClick(newFeatureNotify + 8);
          }
        })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__WrapupFormWrapper__["a" /* default */], rest)), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__WrapupHistory__["a" /* default */], rest)),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_react_tooltip___default.a, {
          id: 'wrapupHistory',
          effect: 'solid',
          place: 'bottom',
          multiline: true,
          'class': __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.tooltip
        })
      );
    }
  }]);

  return Wrapup;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Wrapup);

/***/ }),

/***/ 1479:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Wrapup_css__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Wrapup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_Business_common__ = __webpack_require__(320);












var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h4', {}, void 0, 'Wrap-up Info');

var WrapupDetail = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WrapupDetail, _React$Component);

  function WrapupDetail(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, WrapupDetail);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WrapupDetail.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(WrapupDetail)).call(this, props));

    _this.gotoWrapupDetailUrl = _this.gotoWrapupDetailUrl.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(WrapupDetail, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.id !== nextProps.id || this.props.siteId !== nextProps.siteId || this.props.sessionId !== nextProps.sessionId || this.props.ifOpen !== nextProps.ifOpen || this.props.ifWrapupDetailsLoading !== nextProps.ifWrapupDetailsLoading || this.props.sessionType !== nextProps.sessionType) {
        return true;
      }
      return false;
    }
  }, {
    key: 'gotoWrapupDetailUrl',
    value: function gotoWrapupDetailUrl(wrapupDetailUrl) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__containers_Business_common__["a" /* gotoSpecificUrl */])(false, wrapupDetailUrl, this.props.loginUrl, this.props.autoLoginUrl);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ifOpen = _props.ifOpen,
          className = _props.className,
          wrapupContent = _props.wrapupContent,
          siteId = _props.siteId,
          id = _props.id,
          sessionType = _props.sessionType,
          sessionId = _props.sessionId,
          liveChatReportUrl = _props.liveChatReportUrl,
          ifWrapupDetailsLoading = _props.ifWrapupDetailsLoading;

      var wrapupDetailUrl = liveChatReportUrl + '/TranscriptsDetailsWithoutBase.aspx?date=' + id + '_' + sessionType + '_' + sessionId + '&siteId=' + siteId;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.relative
      }, void 0, ifWrapupDetailsLoading && ifOpen && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.Loading
      }, void 0, 'Loading...'), !ifWrapupDetailsLoading && wrapupContent && wrapupContent.length > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { display: ifOpen ? 'block' : 'none' },
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(className, __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.WrapupDetailContainer)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.detailsContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.WrapupDetailsHeader
      }, void 0, _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          _this2.gotoWrapupDetailUrl(wrapupDetailUrl);
        },
        className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.detailsLink
      }, void 0, 'Details')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.WrapupDetailContent, 'contentMenu')
      }, void 0, wrapupContent.map(function (item) {
        if (item.split('\n').length > 0) {
          return item.split('\n').map(function (line) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, line);
          });
        }
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, item);
      })))));
    }
  }]);

  return WrapupDetail;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WrapupDetail);

/***/ }),

/***/ 1480:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Form_WrapupForm__ = __webpack_require__(1409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Wrapup_css__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Wrapup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);













var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Please complete the Wrap-up form below.');

var WrapupFormWrapper = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WrapupFormWrapper, _React$Component);

  function WrapupFormWrapper() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, WrapupFormWrapper);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WrapupFormWrapper.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(WrapupFormWrapper)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(WrapupFormWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.ifWrapupLoading !== nextProps.ifWrapupLoading || this.props.chatId !== nextProps.chatId || this.props.disableWrapupForm !== nextProps.disableWrapupForm || this.props.ifWrapupSubmitSuccess !== nextProps.ifWrapupSubmitSuccess || this.props.showWrapupRequired !== nextProps.showWrapupRequired || this.props.wrapupSubmitError !== nextProps.wrapupSubmitError) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chatId = _props.chatId,
          wrapupFields = _props.wrapupFields,
          handleSubmitWrapup = _props.handleSubmitWrapup,
          onDiscardWrapup = _props.onDiscardWrapup,
          ifWrapupLoading = _props.ifWrapupLoading,
          disableWrapupForm = _props.disableWrapupForm;

      if (wrapupFields.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.wrapupFormWrapper
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          id: 'errorMessageDiv'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.errorMessage,
          style: { display: !this.props.ifWrapupSubmitSuccess && this.props.wrapupSubmitError ? 'block' : 'none' }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, this.props.wrapupSubmitError)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.required,
          style: { display: this.props.showWrapupRequired ? 'block' : 'none' }
        }, void 0, _ref), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.successMessage,
          style: { display: this.props.ifWrapupSubmitSuccess ? 'block' : 'none' }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_9__constants_enums__["b" /* icons */].success
        }), 'Wrap-up saved successfully.'))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Form_WrapupForm__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.Container,
          fields: wrapupFields,
          fieldsValue: [],
          chatId: chatId,
          onSubmit: handleSubmitWrapup,
          onCancel: onDiscardWrapup,
          ifSubmitLoading: ifWrapupLoading,
          disable: disableWrapupForm,
          ifSubmitSuccess: this.props.ifWrapupSubmitSuccess,
          ifEnableAdvancedCategoryMode: this.props.ifEnableAdvancedCategoryMode
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Wrapup_css___default.a.nowrapupForm
        }, void 0, 'No wrap-up form for this chat. You can contact the account administrator to set up the wrap-up form.');
      }
    }
  }]);

  return WrapupFormWrapper;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WrapupFormWrapper);

/***/ }),

/***/ 1481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_endsWith__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_endsWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_endsWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_trimEnd__ = __webpack_require__(1701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_trimEnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_trimEnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Wrapup_css__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Wrapup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__WrapupDetail__ = __webpack_require__(1479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Icon_Icon__ = __webpack_require__(58);





















var formatData = function formatData(_ref, timezone, timezoneoffset, datefmt) {
  var sessionStartTime = _ref.sessionStartTime,
      agentNames = _ref.agentNames,
      department = _ref.department,
      chatCategory = _ref.chatCategory;

  var nowDate = new Date();
  var result = '';
  var time = __WEBPACK_IMPORTED_MODULE_16__utils_time__["a" /* formatTimeForHistory */](timezone, timezoneoffset, sessionStartTime, datefmt);
  var trimOperatorNames = __WEBPACK_IMPORTED_MODULE_10_lodash_trimEnd___default()(agentNames);
  if (__WEBPACK_IMPORTED_MODULE_9_lodash_endsWith___default()(trimOperatorNames, ',')) {
    trimOperatorNames = trimOperatorNames.substr(0, trimOperatorNames.length - 1);
  }
  result += time + '      ' + trimOperatorNames;
  if (department) result += '   |   ' + department;
  if (chatCategory) result += '  |   ' + chatCategory;
  return result;
};

var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('h4', {}, void 0, 'Wrap-up History');

var WrapupHistory = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(WrapupHistory, _React$Component);

  function WrapupHistory() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, WrapupHistory);

    return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WrapupHistory.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(WrapupHistory)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(WrapupHistory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoRefreshDataFlag) return;
      this.props.onRefreshWrapupHistory(this.props.chatId, this.props.visitorId);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.chatId !== nextProps.chatId || this.props.ifWrapupHistoryLoading !== nextProps.ifWrapupHistoryLoading || this.props.wrapupDetailsOpenId !== nextProps.wrapupDetailsOpenId || !__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.props.wrapups, nextProps.wrapups)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.props.autoRefreshDataFlag) {
        this.props.onRefreshWrapupHistory(this.props.chatId, this.props.visitorId);
      }
      __WEBPACK_IMPORTED_MODULE_12_react_tooltip___default.a.rebuild();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          wrapups = _props.wrapups,
          ifWrapupHistoryLoading = _props.ifWrapupHistoryLoading,
          onRefreshWrapupHistory = _props.onRefreshWrapupHistory,
          onWrapupDetailsClick = _props.onWrapupDetailsClick,
          wrapupDetailsOpenId = _props.wrapupDetailsOpenId,
          datefmt = _props.datefmt,
          timezone = _props.timezone,
          timezoneoffset = _props.timezoneoffset,
          rest = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['wrapups', 'ifWrapupHistoryLoading', 'onRefreshWrapupHistory', 'onWrapupDetailsClick', 'wrapupDetailsOpenId', 'datefmt', 'timezone', 'timezoneoffset']);

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.WrapupHistoryContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.WrapupHistoryHeader
      }, void 0, _ref2, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Link_Link__["a" /* default */], {
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          onRefreshWrapupHistory(_this2.props.chatId, _this2.props.visitorId);
        }
      }, void 0, 'Refresh')), ifWrapupHistoryLoading && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.Loading
      }, void 0, 'Loading...'), wrapups.length > 0 && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('ul', {
        className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.List
      }, void 0, wrapups.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('li', {}, index, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('a', {
          'data-tip': formatData(item, timezone, timezoneoffset, datefmt),
          'data-for': 'wrapupHistory',
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.historyItem,
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            onWrapupDetailsClick(index, item.id, _this2.props.chatId, _this2.props.visitorId);
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, formatData(item, timezone, timezoneoffset, datefmt))), item.wrapupDetailsErrorString && index !== wrapupDetailsOpenId && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.Loading
        }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__Icon_Icon__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.refreshIcon,
          type: __WEBPACK_IMPORTED_MODULE_17__constants_enums__["b" /* icons */].refresh,
          color: '#aaa',
          size: 14,
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            onWrapupDetailsClick(index, item.id, _this2.props.chatId, _this2.props.visitorId);
          }
        }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.wrapupDetailsError
        }, void 0, item.wrapupDetailsErrorString)), index === wrapupDetailsOpenId && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__WrapupDetail__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          className: __WEBPACK_IMPORTED_MODULE_13__Wrapup_css___default.a.WrapupDetail,
          id: item.id,
          ifOpen: index === wrapupDetailsOpenId,
          sessionType: item.type,
          sessionId: item.sessionId,
          ifWrapupDetailsLoading: item.wrapupDetails && item.wrapupDetails.length > 0 ? false : item.ifWrapupDetailsLoading,
          wrapupContent: item.wrapupDetails
        }, rest)));
      })));
    }
  }]);

  return WrapupHistory;
}(__WEBPACK_IMPORTED_MODULE_11_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WrapupHistory);

/***/ }),

/***/ 1486:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css__ = __webpack_require__(1645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(58);















var FormTransfer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FormTransfer, _React$Component);

  function FormTransfer(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FormTransfer);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FormTransfer.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FormTransfer)).call(this, props));

    _this.state = {
      selectedIndex: -1,
      unselectedIndex: -1
    };

    _this.selectAll = _this.selectAll.bind(_this);
    _this.unselectAll = _this.unselectAll.bind(_this);
    _this.selectOptionClick = _this.selectOptionClick.bind(_this);
    _this.unSelectOptionClick = _this.unSelectOptionClick.bind(_this);
    _this.selectOne = _this.selectOne.bind(_this);
    _this.unselectOne = _this.unselectOne.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FormTransfer, [{
    key: 'selectOptionClick',
    value: function selectOptionClick(index) {
      this.setState({
        selectedIndex: index
      });
    }
  }, {
    key: 'unSelectOptionClick',
    value: function unSelectOptionClick(index) {
      this.setState({
        unselectedIndex: index
      });
    }
  }, {
    key: 'selectAll',
    value: function selectAll() {
      var result = this.props.items.map(function (item) {
        return item.value;
      });
      this.props.input.onChange(result.join(';'));
      this.setState({
        unselectedIndex: -1,
        selectedIndex: -1
      });
    }
  }, {
    key: 'unselectAll',
    value: function unselectAll() {
      this.props.input.onChange('');
      this.setState({
        unselectedIndex: -1,
        selectedIndex: -1
      });
    }
  }, {
    key: 'selectOne',
    value: function selectOne() {
      if (this.state.unselectedIndex < 0) {
        return;
      }
      var temp = this.props.input.value.split(';');
      var selectedIndex = this.state.unselectedIndex;
      var s = __WEBPACK_IMPORTED_MODULE_7_lodash_find___default()(this.props.items, function (item) {
        return item.id === selectedIndex;
      });
      if (__WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default()(temp, s.value) === -1) {
        temp.push(s.value);
        this.props.input.onChange(temp.join(';'));
      }
      this.setState({
        unselectedIndex: -1
      });
    }
  }, {
    key: 'unselectOne',
    value: function unselectOne() {
      if (this.state.selectedIndex < 0) {
        return;
      }
      var temp = this.props.input.value.split(';');
      var selectedIndex = this.state.selectedIndex;
      var s = __WEBPACK_IMPORTED_MODULE_7_lodash_find___default()(this.props.items, function (item) {
        return item.id === selectedIndex;
      });
      var result = temp.filter(function (item) {
        return item !== s.value;
      });
      if (result.length > 0) this.props.input.onChange(result.join(';'));else this.props.input.onChange('');
      this.setState({
        selectedIndex: -1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var temp = this.props.input.value.split(';');
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.container, this.props.className)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.wrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h4', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.header
      }, void 0, 'Available'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.rightMargin, __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.optionsWrapper)
      }, void 0, this.props.items.filter(function (item) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default()(temp, item.value) === -1;
      }).map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.option, _this2.state.unselectedIndex === option.id && __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.selected),
          onClick: function onClick() {
            return _this2.unSelectOptionClick(option.id);
          }
        }, 'option_' + index, option.name);
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.operations
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].transferSelectAll,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.icons,
        onClick: this.selectAll
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].transferSelect,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.icons,
        onClick: this.selectOne
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].transferUnselect,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.icons,
        onClick: this.unselectOne
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].transferUnselectAll,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.icons,
        onClick: this.unselectAll
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.wrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h4', {
        className: __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.header
      }, void 0, 'Chosen'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.leftMargin, __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.optionsWrapper)
      }, void 0, this.props.items.filter(function (item) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash_indexOf___default()(temp, item.value) !== -1;
      }).map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.option, _this2.state.selectedIndex === option.id && __WEBPACK_IMPORTED_MODULE_10__FormTransfer_css___default.a.selected),
          onClick: function onClick() {
            return _this2.selectOptionClick(option.id);
          }
        }, 'option_' + index, option.name);
      }))));
    }
  }]);

  return FormTransfer;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FormTransfer);

/***/ }),

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__TreeNode__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(1489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Tree_css__ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Tree_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Tree_css__);









/* eslint no-console:0 */






function noop() {}

var Tree = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(Tree, _React$Component);

  function Tree(props) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Tree);

    var _this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Tree.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(Tree)).call(this, props));

    ['onKeyDown', 'onCheck'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.checkedKeysChange = true;

    _this.state = {
      expandedKeys: _this.getDefaultExpandedKeys(props),
      checkedKeys: _this.getDefaultCheckedKeys(props)
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Tree, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
      var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
      var st = {};
      if (expandedKeys) {
        st.expandedKeys = expandedKeys;
      }
      if (checkedKeys) {
        if (nextProps.checkedKeys === this.props.checkedKeys) {
          this.checkedKeysChange = false;
        } else {
          this.checkedKeysChange = true;
        }
        st.checkedKeys = checkedKeys;
      }
      this.setState(st);
    }
  }, {
    key: 'onExpand',
    value: function onExpand(treeNode) {
      var _this2 = this;

      var expanded = !treeNode.props.expanded;
      var controlled = 'expandedKeys' in this.props;
      var expandedKeys = [].concat(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray___default()(this.state.expandedKeys));
      var index = expandedKeys.indexOf(treeNode.props.eventKey);
      if (expanded && index === -1) {
        expandedKeys.push(treeNode.props.eventKey);
      } else if (!expanded && index > -1) {
        expandedKeys.splice(index, 1);
      }
      if (!controlled) {
        this.setState({ expandedKeys: expandedKeys });
      }
      this.props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });

      // after data loaded, need set new expandedKeys
      if (expanded && this.props.loadData) {
        return this.props.loadData(treeNode).then(function () {
          if (!controlled) {
            _this2.setState({ expandedKeys: expandedKeys });
          }
        });
      }
    }
  }, {
    key: 'onCheck',
    value: function onCheck(treeNode) {
      var _this3 = this;

      var checked = !treeNode.props.checked;
      if (treeNode.props.halfChecked) {
        checked = true;
      }
      var key = treeNode.props.eventKey;
      var checkedKeys = [].concat(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray___default()(this.state.checkedKeys));
      var index = checkedKeys.indexOf(key);

      var newSt = {
        event: 'check',
        node: treeNode,
        checked: checked
      };

      if (this.props.checkStrictly && 'checkedKeys' in this.props) {
        if (checked && index === -1) {
          checkedKeys.push(key);
        }
        if (!checked && index > -1) {
          checkedKeys.splice(index, 1);
        }
        newSt.checkedNodes = [];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* loopAllChildren */])(this.props.children, function (item, ind, pos, keyOrPos) {
          if (checkedKeys.indexOf(keyOrPos) !== -1) {
            newSt.checkedNodes.push(item);
          }
        });
        this.props.onCheck(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* getStrictlyValue */])(checkedKeys, this.props.checkedKeys.halfChecked), newSt);
      } else {
        if (checked && index === -1) {
          this.treeNodesStates[treeNode.props.pos].checked = true;
          var checkedPositions = [];
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.treeNodesStates).forEach(function (i) {
            if (_this3.treeNodesStates[i].checked) {
              checkedPositions.push(i);
            }
          });
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["c" /* handleCheckState */])(this.treeNodesStates, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["d" /* filterParentPosition */])(checkedPositions), true);
        }
        if (!checked) {
          this.treeNodesStates[treeNode.props.pos].checked = false;
          this.treeNodesStates[treeNode.props.pos].halfChecked = false;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["c" /* handleCheckState */])(this.treeNodesStates, [treeNode.props.pos], false);
        }
        var checkKeys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["e" /* getCheck */])(this.treeNodesStates);
        newSt.checkedNodes = checkKeys.checkedNodes;
        newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
        newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
        this.checkKeys = checkKeys;

        this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
        if (!('checkedKeys' in this.props)) {
          this.setState({
            checkedKeys: checkedKeys
          });
        }
        this.props.onCheck(checkedKeys, newSt);
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(id, value) {
      this.props.onSelect(id, value);
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(id, value) {
      this.props.onDoubleClick(id, value);
    }

    // all keyboard events callbacks run from here at first

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      e.preventDefault();
    }
  }, {
    key: 'getFilterExpandedKeys',
    value: function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
      var keys = props[expandKeyProp];
      if (!expandAll && !props.autoExpandParent) {
        return keys || [];
      }
      var expandedPositionArr = [];
      if (props.autoExpandParent) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* loopAllChildren */])(props.children, function (item, index, pos, newKey) {
          if (keys.indexOf(newKey) > -1) {
            expandedPositionArr.push(pos);
          }
        });
      }
      var filterExpandedKeys = [];
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* loopAllChildren */])(props.children, function (item, index, pos, newKey) {
        if (expandAll) {
          filterExpandedKeys.push(newKey);
        } else if (props.autoExpandParent) {
          expandedPositionArr.forEach(function (p) {
            if ((p.split('-').length > pos.split('-').length && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["f" /* isInclude */])(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
              filterExpandedKeys.push(newKey);
            }
          });
        }
      });
      return filterExpandedKeys.length ? filterExpandedKeys : keys;
    }
  }, {
    key: 'getDefaultExpandedKeys',
    value: function getDefaultExpandedKeys(props, willReceiveProps) {
      var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
      if ('expandedKeys' in props) {
        expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
      }
      return expandedKeys;
    }
  }, {
    key: 'getDefaultCheckedKeys',
    value: function getDefaultCheckedKeys(props, willReceiveProps) {
      var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
      if ('checkedKeys' in props) {
        checkedKeys = props.checkedKeys || [];
        if (props.checkStrictly) {
          if (props.checkedKeys.checked) {
            checkedKeys = props.checkedKeys.checked;
          } else if (!Array.isArray(props.checkedKeys)) {
            checkedKeys = [];
          }
        }
      }
      return checkedKeys;
    }
  }, {
    key: 'getRawExpandedKeys',
    value: function getRawExpandedKeys() {
      if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
        this._rawExpandedKeys = [].concat(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray___default()(this.state.expandedKeys));
      }
    }
  }, {
    key: 'getOpenTransitionName',
    value: function getOpenTransitionName() {
      var props = this.props;
      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;
      if (!transitionName && typeof animationName === 'string') {
        transitionName = 'vm-tree-open-' + animationName;
      }
      return transitionName;
    }
  }, {
    key: 'getExpandedKeys',
    value: function getExpandedKeys(treeNode, expand) {
      var key = treeNode.props.eventKey;
      var expandedKeys = this.state.expandedKeys;
      var expandedIndex = expandedKeys.indexOf(key);
      var exKeys = void 0;
      if (expandedIndex > -1 && !expand) {
        exKeys = [].concat(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_toConsumableArray___default()(expandedKeys));
        exKeys.splice(expandedIndex, 1);
        return exKeys;
      }
      if (expand && expandedKeys.indexOf(key) === -1) {
        return expandedKeys.concat([key]);
      }
    }
  }, {
    key: 'filterTreeNode',
    value: function filterTreeNode(treeNode) {
      var filterTreeNode = this.props.filterTreeNode;
      if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
        return false;
      }
      return filterTreeNode.call(this, treeNode);
    }
  }, {
    key: 'renderTreeNode',
    value: function renderTreeNode(child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var pos = level + '-' + index;
      var key = child.key || pos;
      var state = this.state;
      var props = this.props;

      var cloneProps = {
        ref: 'treeNode-' + key,
        root: this,
        eventKey: key,
        pos: pos,
        isShowIcon: props.isShowIcon,
        loadData: props.loadData,
        expanded: state.expandedKeys.indexOf(key) !== -1,
        openTransitionName: this.getOpenTransitionName(),
        openAnimation: props.openAnimation,
        filterTreeNode: this.filterTreeNode.bind(this)
      };
      if (props.checkable) {
        cloneProps.checkable = props.checkable;
        if (props.checkStrictly) {
          if (state.checkedKeys) {
            cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
          }
          if (props.checkedKeys.halfChecked) {
            cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
          } else {
            cloneProps.halfChecked = false;
          }
        } else {
          if (this.checkedKeys) {
            cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
          }
          cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
        }
      }
      if (this.treeNodesStates && this.treeNodesStates[pos]) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(cloneProps, this.treeNodesStates[pos].siblingPosition);
      }
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.cloneElement(child, cloneProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var domProps = {
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(props.className, __WEBPACK_IMPORTED_MODULE_13__Tree_css___default.a['vm-tree']),
        role: 'tree-node'
      };
      if (props.focusable) {
        domProps.tabIndex = '0';
        domProps.onKeyDown = this.onKeyDown;
      }
      var getTreeNodesStates = function getTreeNodesStates() {
        _this4.treeNodesStates = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* loopAllChildren */])(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
          _this4.treeNodesStates[pos] = {
            siblingPosition: siblingPosition
          };
        });
      };
      if (props.checkable && (this.checkedKeysChange || props.loadData)) {
        if (props.checkStrictly) {
          getTreeNodesStates();
        } else if (props._treeNodesStates) {
          this.treeNodesStates = props._treeNodesStates.treeNodesStates;
          this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
          this.checkedKeys = props._treeNodesStates.checkedKeys;
        } else {
          var checkedKeys = this.state.checkedKeys;
          var checkKeys = void 0;
          if (!props.loadData && this.checkKeys && this._checkedKeys && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["g" /* arraysEqual */])(this._checkedKeys, checkedKeys)) {
            // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
            checkKeys = this.checkKeys;
          } else {
            var checkedPositions = [];
            this.treeNodesStates = {};
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* loopAllChildren */])(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
              _this4.treeNodesStates[pos] = {
                node: item,
                key: keyOrPos,
                checked: false,
                halfChecked: false,
                siblingPosition: siblingPosition
              };
              if (checkedKeys.indexOf(keyOrPos) !== -1) {
                _this4.treeNodesStates[pos].checked = true;
                checkedPositions.push(pos);
              }
            });
            // if the parent node's key exists, it all children node will be checked
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["c" /* handleCheckState */])(this.treeNodesStates, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["d" /* filterParentPosition */])(checkedPositions), true);
            checkKeys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["e" /* getCheck */])(this.treeNodesStates);
          }
          this.halfCheckedKeys = checkKeys.halfCheckedKeys;
          this.checkedKeys = checkKeys.checkedKeys;
        }
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'ul',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, domProps, { unselectable: true, ref: 'tree' }),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.map(props.children, this.renderTreeNode, this)
      );
    }
  }]);

  return Tree;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

Tree.defaultProps = {
  isShowIcon: true,
  checkable: false,
  checkStrictly: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop
};
Tree.TreeNode = __WEBPACK_IMPORTED_MODULE_11__TreeNode__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (Tree);

/***/ }),

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* unused harmony export browser */
/* unused harmony export getOffset */
/* harmony export (immutable) */ __webpack_exports__["a"] = loopAllChildren;
/* harmony export (immutable) */ __webpack_exports__["f"] = isInclude;
/* harmony export (immutable) */ __webpack_exports__["d"] = filterParentPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = handleCheckState;
/* harmony export (immutable) */ __webpack_exports__["e"] = getCheck;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStrictlyValue;
/* harmony export (immutable) */ __webpack_exports__["g"] = arraysEqual;

/* eslint no-loop-func: 0*/



function browser(navigator) {
  var tem = void 0;
  var ua = navigator.userAgent;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem) {
    M.splice(1, 1, tem[1]);
  }
  return M.join(' ');
}

// export function getOffset(el) {
//   const obj = el.getBoundingClientRect();
//   return {
//     left: obj.left + document.body.scrollLeft,
//     top: obj.top + document.body.scrollTop,
//     width: obj.width,
//     height: obj.height
//   };
// }

// // iscroll offset
// offset = function (el) {
//   var left = -el.offsetLeft,
//     top = -el.offsetTop;

//   // jshint -W084
//   while (el = el.offsetParent) {
//     left -= el.offsetLeft;
//     top -= el.offsetTop;
//   }
//   // jshint +W084

//   return {
//     left: left,
//     top: top
//   };
// }

/* eslint-disable */
function getOffset(ele) {
  var doc = void 0,
      win = void 0,
      docElem = void 0,
      rect = void 0;

  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = ele.getBoundingClientRect();

  if (rect.width || rect.height) {
    doc = ele.ownerDocument;
    win = doc.defaultView;
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}
/* eslint-enable */

function getChildrenlength(children) {
  var len = 1;
  if (Array.isArray(children)) {
    len = children.length;
  }
  return len;
}

function getSiblingPosition(index, len, siblingPosition) {
  if (len === 1) {
    siblingPosition.first = true;
    siblingPosition.last = true;
  } else {
    siblingPosition.first = index === 0;
    siblingPosition.last = index === len - 1;
  }
  return siblingPosition;
}

function loopAllChildren(childs, callback, parent) {
  var loop = function loop(children, level, _parent) {
    var len = getChildrenlength(children);
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.forEach(children, function (item, index) {
      var pos = level + '-' + index;
      if (item.props.children && item.type && item.type.isTreeNode) {
        loop(item.props.children, pos, { node: item, pos: pos });
      }
      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
    });
  };
  loop(childs, 0, parent);
}

function isInclude(smallArray, bigArray) {
  return smallArray.every(function (ii, i) {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
function filterParentPosition(arr) {
  var levelObj = {};
  arr.forEach(function (item) {
    var posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  var levelArr = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(levelObj).sort();

  var _loop = function _loop(i) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(function (ii) {
        var _loop2 = function _loop2(j) {
          levelObj[levelArr[j]].forEach(function (_i, index) {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
            return p;
          });
        };

        for (var j = i + 1; j < levelArr.length; j++) {
          _loop2(j);
        }
      });
    }
  };

  for (var i = 0; i < levelArr.length; i++) {
    _loop(i);
  }
  var nArr = [];
  levelArr.forEach(function (i) {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function stripTail(str) {
  var arr = str.match(/(.+)(-[^-]+)$/);
  var st = '';
  if (arr && arr.length === 3) {
    st = arr[1];
  }
  return st;
}
function splitPosition(pos) {
  return pos.split('-');
}

function handleCheckState(obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  var objKeys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(obj);
  // let s = Date.now();
  objKeys.forEach(function (i, index) {
    var iArr = splitPosition(i);
    var saved = false;
    checkedPositionArr.forEach(function (_pos) {
      // 设置子节点，全选或全不选
      var _posArr = splitPosition(_pos);
      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
        obj[i].halfChecked = false;
        obj[i].checked = checkIt;
        objKeys[index] = null;
      }
      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
        // 如果
        saved = true;
      }
    });
    if (!saved) {
      objKeys[index] = null;
    }
  });
  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
  objKeys = objKeys.filter(function (i) {
    return i;
  }); // filter non null;

  var _loop3 = function _loop3(_pIndex) {
    // 循环设置父节点的 选中 或 半选状态
    var loop = function loop(__pos) {
      var _posLen = splitPosition(__pos).length;
      if (_posLen <= 2) {
        // e.g. '0-0', '0-1'
        return;
      }
      var sibling = 0;
      var siblingChecked = 0;
      var parentPosition = stripTail(__pos);
      objKeys.forEach(function (i /* , index*/) {
        var iArr = splitPosition(i);
        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
          sibling++;
          if (obj[i].checked) {
            siblingChecked++;
            var _i = checkedPositionArr.indexOf(i);
            if (_i > -1) {
              checkedPositionArr.splice(_i, 1);
              if (_i <= _pIndex) {
                _pIndex--;
              }
            }
          } else if (obj[i].halfChecked) {
            siblingChecked += 0.5;
          }
          // objKeys[index] = null;
        }
      });
      // objKeys = objKeys.filter(i => i); // filter non null;
      var parent = obj[parentPosition];
      // sibling 不会等于0
      // 全不选 - 全选 - 半选
      if (siblingChecked === 0) {
        parent.checked = false;
        parent.halfChecked = false;
      } else if (siblingChecked === sibling) {
        parent.checked = true;
        parent.halfChecked = false;
      } else {
        parent.halfChecked = true;
        parent.checked = false;
      }
      loop(parentPosition);
    };
    loop(checkedPositionArr[_pIndex], _pIndex);
    pIndex = _pIndex;
  };

  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
    _loop3(pIndex);
  }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

function getCheck(treeNodesStates) {
  var halfCheckedKeys = [];
  var checkedKeys = [];
  var checkedNodes = [];
  var checkedNodesPositions = [];
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(treeNodesStates).forEach(function (item) {
    var itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
  };
}

function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SFSDoNoting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SFSCreateCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SFAttachCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SFSAttachTask; });
var SFSDoNoting = 0;
var SFSCreateCase = 1;
var SFAttachCase = 2;
var SFSAttachTask = 3;

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return visitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return operator; });
/* unused harmony export system */
var visitor = 0;
var operator = 1;
var system = 3;

/***/ }),

/***/ 1509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tabs_CannedMessage_CannedMessage__ = __webpack_require__(1450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_config__ = __webpack_require__(889);


/* import * as perf from 'src/utils/perf'; */









var isSendingMessageToSelectedVisitorAllowed = function isSendingMessageToSelectedVisitorAllowed(state) {
  var chat = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["q" /* getSelectedChat */](state);
  var visitor = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["r" /* getVisitorByChatId */](state, chat && chat.get('id'));
  var currentAgentId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["u" /* getCurrentAgentId */](state);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_common__["k" /* isSendingMessageAllowed */])(visitor, currentAgentId);
};

var mapStateToProps = function mapStateToProps(state) {
  var chat = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["q" /* getSelectedChat */](state);
  var chatId = chat.get('id');
  var editorState = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["L" /* getChatEditorState */](state, chatId);
  var visitorId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["M" /* getVisitorIdByChatId */](state, chatId);
  var visitor = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["s" /* getVisitor */](state, visitorId);
  var ifCannedMessageLoading = state.ui.mychats.ifCannedMessageLoading;
  var categories = state.config.settings.categories;
  var cannedMessages = state.config.settings.cannedMessages;
  var newFeatureNotify = state.config.preference.newFeatureNotify;
  var agent = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["N" /* getCurrentAgent */](state);
  var shouldFocus = __WEBPACK_IMPORTED_MODULE_6__services_memoryStore__["a" /* default */].get('shouldFocusInput');
  return {
    categories: categories,
    cannedMessages: cannedMessages,
    chatId: chatId,
    visitorId: visitorId,
    visitor: visitor,
    isChatting: isSendingMessageToSelectedVisitorAllowed(state),
    ifCannedMessageLoading: ifCannedMessageLoading,
    newFeatureNotify: newFeatureNotify,
    agent: agent,
    shouldFocus: shouldFocus,
    editorState: editorState
  };
};

if (true) {
  /* mapStateToProps = perf.markFunctionCall('CannedMessage: mapStateToProps', mapStateToProps); */
}

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;

  var dispatchObject = {
    onRefreshCannedMessage: function onRefreshCannedMessage() {
      __WEBPACK_IMPORTED_MODULE_6__services_memoryStore__["a" /* default */].set('cannedMessage_expandedKeys', ['0-0']);
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_ui__["f" /* refreshCannedMessage */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["d" /* getCannedMessages */]());
    },
    onClick: function onClick(id, value, editorState) {
      var realValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_common__["l" /* replaceMacros */])(value, stateProps.visitor, stateProps.agent);
      __webpack_require__.e/* require.ensure */(5).then((function (require) {
        var _require = __webpack_require__(951),
            insertContent = _require.insertContent;

        dispatch(insertContent(stateProps.chatId, realValue, editorState));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["e" /* agentUseCannedMessage */](stateProps.chatId, id));
    },
    onDoubleClick: function onDoubleClick(id, value) {
      var realValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_common__["l" /* replaceMacros */])(value, stateProps.visitor, stateProps.agent);
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["f" /* sendText */](stateProps.visitorId, realValue));
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["e" /* agentUseCannedMessage */](stateProps.chatId, id));
    },
    onFeatrueClick: function onFeatrueClick(newFeature) {
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_config__["a" /* updatePreference */]({ newFeatureNotify: newFeature }));
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_agent__["g" /* setPreference */]());
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

if (true) {
  /* mergeProps = perf.markFunctionCall('CannedMessage: mergeProps', mergeProps); */
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_2__components_Tabs_CannedMessage_CannedMessage__["a" /* default */]));

/***/ }),

/***/ 1514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_indexOf__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_uniq__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Tabs_Info_Info__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_config__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Business_visitorDetailsTab__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums_fieldType__ = __webpack_require__(318);














var mapStateToProps = function mapStateToProps(state) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Business_visitorDetailsTab__["d" /* createInfoProps */])(state);
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;

  var dispatchObject = {
    onPreChatEditIconClick: function onPreChatEditIconClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["b" /* onPreChatEditIconClick */]());
    },
    onPreChatCancelClick: function onPreChatCancelClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["c" /* onPreChatCancelClick */]());
    },
    onCustomFieldEditIconClick: function onCustomFieldEditIconClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["d" /* onCustomFieldEditIconClick */]());
    },
    onCustomFieldCancelClick: function onCustomFieldCancelClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["e" /* onCustomFieldCancelClick */]());
    },
    onCurrentBrowsingIconClick: function onCurrentBrowsingIconClick(flag) {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["f" /* onCurrentBrowsingIconClick */](flag));
    },
    onCommentEditIconClick: function onCommentEditIconClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["g" /* onCommentEditIconClick */]());
    },
    onCommentCancelClick: function onCommentCancelClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["h" /* onCommentCancelClick */]());
    },
    onChatTimesClick: function onChatTimesClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["a" /* onDetailsTabSelect */](__WEBPACK_IMPORTED_MODULE_8__constants_enums__["g" /* visitorDetailsTabs */].history));
    },
    handleSubmitpreChat: function handleSubmitpreChat(preChat) {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["i" /* handleSubmitpreChat */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["k" /* setPreChatForm */](stateProps.visitorId, preChat));
    },
    handleSubmitCustomFields: function handleSubmitCustomFields(form) {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["j" /* handleSubmitCustomFields */]());
      var fields = stateProps.visitorInfo.fieldsInfo.map(function (field) {
        var value = form[field.displayText + '_' + field.id];
        if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_enums_fieldType__["e" /* CheckBoxList */]) {
          if (value) {
            value = __WEBPACK_IMPORTED_MODULE_3_lodash_uniq___default()(field.options.filter(function (option) {
              return __WEBPACK_IMPORTED_MODULE_2_lodash_indexOf___default()(value.split('⊙'), option.id.toString()) !== -1;
            }).map(function (option) {
              return option.displayText;
            })).join('⊙');
          } else {
            value = '';
          }
        }
        if (field.type === __WEBPACK_IMPORTED_MODULE_11__constants_enums_fieldType__["b" /* DropDownList */] || field.type === __WEBPACK_IMPORTED_MODULE_11__constants_enums_fieldType__["c" /* Radio */]) {
          if (value) {
            var opt = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(field.options, function (option) {
              return option.id.toString() === value;
            });
            value = opt.displayText;
          } else {
            value = '';
          }
        }
        return {
          id: field.id,
          name: field.displayText,
          value: value
        };
      });
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["l" /* setCustomFields */](stateProps.visitorId, fields));
    },
    handleSubmitComment: function handleSubmitComment(form) {
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["k" /* handleSubmitComment */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["m" /* setAgentComment */](stateProps.visitorId, form.comment));
    },
    onFeatrueClick: function onFeatrueClick(newFeature) {
      dispatch(__WEBPACK_IMPORTED_MODULE_7__actions_config__["a" /* updatePreference */]({ newFeatureNotify: newFeature }));
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["g" /* setPreference */]());
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ownProps, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_5__components_Tabs_Info_Info__["a" /* default */]));

/***/ }),

/***/ 1515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Tabs_Navigation_Navigation__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_web__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_navigation__ = __webpack_require__(1381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums_page__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_time__ = __webpack_require__(74);








var createNavigationProps = function createNavigationProps(state) {
  var page = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["p" /* getPage */](state);
  var ifNavigationLoading = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_11" /* getIfNavigationLoading */](state);
  var timezoneoffset = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_12" /* getTimeDelay */](state);
  var visitorId = void 0;
  if (page === __WEBPACK_IMPORTED_MODULE_5__constants_enums_page__["a" /* chats */]) {
    var chat = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["q" /* getSelectedChat */](state);
    if (typeof chat === 'undefined') {
      return { navigationItems: [], visitorId: 0, ifNavigationLoading: ifNavigationLoading, timezoneoffset: timezoneoffset };
    }
    visitorId = chat.get('visitorId');
  } else {
    visitorId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["t" /* getSelectedVisitorId */](state);
  }
  var visitor = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["s" /* getVisitor */](state, visitorId);
  if (!visitor) {
    return { navigationItems: [], visitorId: 0, chatId: 0, ifNavigationLoading: ifNavigationLoading, timezoneoffset: timezoneoffset };
  }
  var navigations = (visitor.get('navigation') || []).sort(function (a, b) {
    return b.time - a.time;
  });
  var navigationItems = navigations.map(function (item, i) {
    return {
      id: i,
      isCurrentPage: i === 0,
      pageURL: item.pageUrl,
      title: item.title,
      time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_time__["c" /* parseDate */])(item.time)
    };
  });
  return { navigationItems: navigationItems, visitorId: visitorId, ifNavigationLoading: ifNavigationLoading, timezoneoffset: timezoneoffset };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    refreshNavigation: function refreshNavigation(visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_navigation__["a" /* handleUpdateIfNavigationLoading */](true));
      dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_navigation__["b" /* handleNavigationRefreshing */](visitorId));
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_web__["n" /* getNavigation */](visitorId));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(createNavigationProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Tabs_Navigation_Navigation__["a" /* default */]));

/***/ }),

/***/ 1518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_src_locale_zh_cn__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_src_locale_en_gb__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Tabs_Salesforce_Salesforce__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_enums_page__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums_SFPurposeInManualMode__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_salesforce__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__ = __webpack_require__(322);

















var fiedsFilter = function fiedsFilter(fields, filterfields, layoutfields, dateFormat) {
  return fields === undefined || fields === null ? undefined : fields.filter(function (item) {
    return filterfields.some(function (element) {
      return element.sfFeildSystemName === item.name;
    });
  }).map(function (item) {
    var label = item.name;
    var value = item.value;
    layoutfields.some(function (layout) {
      var isExist = layout.systemName === item.name;
      if (isExist) {
        label = layout.label;
        if (layout.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].dateTime && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(value)) {
          value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_time__["e" /* format */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["a" /* convertSFDateTimeToLocalDate */])(value), dateFormat);
        } else if (layout.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].date && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(value)) {
          value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_time__["e" /* format */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["b" /* convertSFDateToLocalDate */])(value), dateFormat);
        } else if (layout.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].reference) {
          value = item.displayValue;
          label = label.replace(' ID', '');
        }
      }
      return isExist;
    });
    return {
      name: item.name,
      label: label,
      value: value,
      displayValue: item.displayValue
    };
  });
};

var getLayoutfields = function getLayoutfields(fields) {
  return fields === undefined ? [] : fields.filter(function (item) {
    return item.visible;
  });
};

var createCaseSuccessInfo = 'A new case will be created when the chat ends.';
var attachCaseSuccessInfo = 'A new case will be created and attached to this contact when the chat ends.';
var attachTaskSuccessInfo = 'A new task will be created and attached to this lead when the chat ends.';

var getSalesforceStatus = function getSalesforceStatus(salesforceContactFields, salesforceLeadFields, salesforcePurposeInManualMode) {
  var matchToContact = false;
  var matchToLead = false;
  var caseCreated = false;
  var taskCreated = false;
  var successInfo = '';

  if (salesforceContactFields !== undefined && salesforceContactFields.length > 0) {
    matchToContact = true;
    matchToLead = false;
  } else {
    matchToContact = false;
    if (salesforceLeadFields !== undefined && salesforceLeadFields.length > 0) {
      matchToLead = true;
    } else {
      matchToLead = false;
    }
  }

  switch (salesforcePurposeInManualMode) {
    case __WEBPACK_IMPORTED_MODULE_8__constants_enums_SFPurposeInManualMode__["a" /* SFSDoNoting */]:
      taskCreated = false;
      caseCreated = false;
      successInfo = '';
      break;
    case __WEBPACK_IMPORTED_MODULE_8__constants_enums_SFPurposeInManualMode__["b" /* SFSCreateCase */]:
      taskCreated = false;
      caseCreated = true;
      successInfo = createCaseSuccessInfo;
      break;
    case __WEBPACK_IMPORTED_MODULE_8__constants_enums_SFPurposeInManualMode__["c" /* SFAttachCase */]:
      taskCreated = false;
      caseCreated = true;
      successInfo = attachCaseSuccessInfo;
      break;
    case __WEBPACK_IMPORTED_MODULE_8__constants_enums_SFPurposeInManualMode__["d" /* SFSAttachTask */]:
      taskCreated = true;
      caseCreated = false;
      successInfo = attachTaskSuccessInfo;
      break;
    default:
      taskCreated = false;
      caseCreated = false;
      successInfo = '';
      break;
  }

  return {
    matchToContact: matchToContact,
    matchToLead: matchToLead,
    caseCreated: caseCreated,
    taskCreated: taskCreated,
    successInfo: successInfo
  };
};

var createSalesforceProps = function createSalesforceProps(state) {
  // const timezoneoffset = selectors.getTimeDelay(state);
  var datefmt = state.config.preference.dateTimeFormat;
  var page = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["p" /* getPage */](state);
  var visitor = void 0;
  var chatId = void 0;
  if (page === __WEBPACK_IMPORTED_MODULE_7__constants_enums_page__["a" /* chats */]) {
    var chat = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["q" /* getSelectedChat */](state) ? __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["q" /* getSelectedChat */](state) : undefined;
    if (chat) {
      chatId = chat.get('id');
      visitor = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["r" /* getVisitorByChatId */](state, chatId);
    }
  } else if (page === __WEBPACK_IMPORTED_MODULE_7__constants_enums_page__["d" /* visitors */]) {
    visitor = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["s" /* getVisitor */](state, __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["t" /* getSelectedVisitorId */](state));
  }
  if (!visitor) return {};
  var showForm = state.ui.mychats.salesforce.showForm;
  var ifShowLoading = !state.ui.mychats.salesforce.getSFIntegrationConfig;
  var editType = state.ui.mychats.salesforce.editType;
  var contactFields = state.config.salesforce.contactFields;
  var leadFields = state.config.salesforce.leadFields;

  var layoutContactFields = state.config.salesforce.contactFields === undefined ? [] : state.config.salesforce.contactFields;

  var layoutLeadFields = state.config.salesforce.leadFields === undefined ? [] : state.config.salesforce.leadFields;

  var layoutAccountFields = state.config.salesforce.accountFields === undefined ? [] : state.config.salesforce.accountFields;
  var leadId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["c" /* getSFObjectId */])(visitor.get('salesforceLeadFields'));
  var contactId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["c" /* getSFObjectId */])(visitor.get('salesforceContactFields'));

  var salesforceAccountFields = [];
  var salesforceLeadFields = [];
  var salesforceContactFields = [];
  if (state.config.salesforce.integrationConfig !== undefined) {
    var filterAccountFields = getLayoutfields(state.config.salesforce.integrationConfig.accountFields);
    var filterContactFields = getLayoutfields(state.config.salesforce.integrationConfig.contactFields);
    var filterLeadFields = getLayoutfields(state.config.salesforce.integrationConfig.leadFields);
    salesforceContactFields = fiedsFilter(visitor.get('salesforceContactFields'), filterContactFields, layoutContactFields, datefmt);
    salesforceLeadFields = fiedsFilter(visitor.get('salesforceLeadFields'), filterLeadFields, layoutLeadFields, datefmt);
    salesforceAccountFields = fiedsFilter(visitor.get('salesforceAccountFields'), filterAccountFields, layoutAccountFields, datefmt);
  }
  var departmentName = '';
  if (visitor.get('departmentId') > 0) {
    departmentName = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["C" /* getDepartmentNameById */](state, visitor.get('departmentId'));
  }
  var integrationConfig = state.config.salesforce.integrationConfig;
  var contactComm100fieldValues = [];
  var leadComm100fieldValues = [];
  if (integrationConfig) {
    contactComm100fieldValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["d" /* getComm100fieldValues */])(integrationConfig.contactFields, visitor, departmentName);
    leadComm100fieldValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["d" /* getComm100fieldValues */])(integrationConfig.leadFields, visitor, departmentName);
  }

  var fields = [];
  var fieldsValues = [];
  var sfContactFormValue = [];
  var sfLeadFormValue = [];
  var contactShowFields = void 0;
  var leadShowFields = void 0;
  if (contactFields && contactFields.length > 0) {
    contactShowFields = contactFields.filter(function (field) {
      return field.layoutId >= 0 && field.createable;
    }).sort(function (a, b) {
      return a.layoutId - b.layoutId;
    });
    sfContactFormValue = contactShowFields.map(function (field) {
      var temp = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(visitor.get('salesforceContactFields'), function (contact) {
        return contact.name === field.systemName;
      });
      if (temp) {
        return { name: temp.name, value: temp.value, displayValue: temp.displayValue };
      }
      var v = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(contactComm100fieldValues, function (contact) {
        return contact.name === field.systemName;
      });
      if (v) {
        return { name: field.systemName, value: v.value, displayValue: v.displayValue };
      }
      return null;
    }).filter(function (field) {
      return field !== null;
    });
  }
  if (leadFields && leadFields.length > 0) {
    leadShowFields = leadFields.filter(function (field) {
      return field.layoutId >= 0 && field.createable;
    }).sort(function (a, b) {
      return a.layoutId - b.layoutId;
    });
    sfLeadFormValue = leadShowFields.map(function (field) {
      var temp = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(visitor.get('salesforceLeadFields'), function (contact) {
        return contact.name === field.systemName;
      });
      if (temp) {
        return { name: temp.name, value: temp.value, displayValue: temp.displayValue };
      }
      var v = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(leadComm100fieldValues, function (lead) {
        return lead.name === field.systemName;
      });
      if (v) {
        return { name: field.systemName, value: v.value, displayValue: v.displayValue };
      }
      return null;
    }).filter(function (field) {
      return field !== null;
    });
  }
  if (editType === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["a" /* contactInfo */]) {
    fields = contactShowFields;
    fieldsValues = sfContactFormValue;
  } else if (editType === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["b" /* LeadInfo */]) {
    fields = leadShowFields;
    fieldsValues = sfLeadFormValue;
  }
  var statusInfo = getSalesforceStatus(salesforceContactFields, salesforceLeadFields, visitor.get('salesforcePurposeInManualMode'));
  var chatExists = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_13" /* ifChatExists */](state, chatId);
  return {
    getSFObjectFieldsError: state.ui.mychats.getSFObjectFieldsError ? 'Server Exception: Get Salesforce Object Fields Error' : '',
    statusInfo: statusInfo,
    chatId: chatId,
    visitorId: visitor.get('id'),
    leadId: leadId,
    contactId: contactId,
    salesforceContactFields: salesforceContactFields || [],
    salesforceLeadFields: salesforceLeadFields || [],
    salesforceAccountFields: salesforceAccountFields || [],
    fields: fields || [],
    fieldsValues: fieldsValues || [],
    dateFormatter: 'YYYY-MM-DD',
    dateTimeFormatter: 'YYYY-MM-DD HH:mm',
    showForm: showForm,
    ifShowLoading: ifShowLoading,
    editType: editType,
    ifSalesforceLoading: state.ui.mychats.salesforce.ifSalesforceLoading,
    salesforceSubmitError: state.ui.mychats.salesforce.salesforceSubmitError,
    waiting: state.ui.mychats.salesforce.waiting,
    chatExists: chatExists,
    errorMessage: state.ui.mychats.salesforce.errorMessage
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;


  var dispatchObject = {
    onSubmitSalesforceForm: function onSubmitSalesforceForm(form) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["a" /* handleSubmitSalesforce */]());
      var type = stateProps.editType;
      var id = '';
      if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["a" /* contactInfo */]) {
        id = stateProps.contactId;
      } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["b" /* LeadInfo */]) {
        id = stateProps.leadId;
      }
      var result = stateProps.fields.map(function (field) {
        var formValue = '';
        if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].reference) {
          var temp = form[field.systemName];
          formValue = temp ? temp.id : '';
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].date || field.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].dateTime) {
          var tempTime = form[field.systemName];
          if (tempTime) {
            if (typeof tempTime === 'string') {
              formValue = tempTime;
            } else {
              formValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__components_Tabs_Salesforce_util__["e" /* getSFUTCTime */])(tempTime.toDate());
            }
          } else {
            formValue = '';
          }
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].bool) {
          formValue = !!form[field.systemName];
        } else {
          formValue = form[field.systemName] || '';
        }
        if (field.required && field.type !== __WEBPACK_IMPORTED_MODULE_14__constants_salesforce__["a" /* fieldType */].bool && !formValue) {
          formValue = '-';
        }
        return { name: field.systemName, value: formValue, displayValue: '' };
      });
      if (id) {
        result.push({ name: 'Id', value: id, displayValue: '' });
        if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["a" /* contactInfo */]) {
          dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["b" /* agentEditSFContact */](stateProps.visitorId, result));
        } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["b" /* LeadInfo */]) {
          dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["c" /* agentEditSFLead */](stateProps.visitorId, result));
        }
      } else {
        if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["a" /* contactInfo */]) {
          dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["d" /* agentCreateSFContact */](stateProps.visitorId, result));
        } else if (type === __WEBPACK_IMPORTED_MODULE_10__constants_enums_salesforceInfoType__["b" /* LeadInfo */]) {
          dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["e" /* agentCreateSFLead */](stateProps.visitorId, result));
        }
      }
    },
    onCancelClick: function onCancelClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["f" /* onCancelClick */]());
    },
    onEditOrCreate: function onEditOrCreate(type) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["g" /* onEditOrCreate */](type));
    },
    onAttachToLead: function onAttachToLead(visitorId, leadId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["h" /* handleAttach */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["i" /* agentAttachSFTaskToLead */](visitorId, leadId));
    },
    onAttachToContact: function onAttachToContact(visitorId, contactId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["h" /* handleAttach */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["j" /* agentAttachSFCaseToContact */](visitorId, contactId));
    },
    onCreateCase: function onCreateCase(visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["h" /* handleAttach */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["k" /* agentCreateSFCase */](visitorId));
    },
    onSalesforcelookUp: function onSalesforcelookUp(type, keyword, next) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_salesforce__["l" /* agentLookupSFObject */](type, keyword, next));
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(createSalesforceProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_6__components_Tabs_Salesforce_Salesforce__["a" /* default */]));

/***/ }),

/***/ 1521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Tabs_VisitorHistory_VisitorHistory__ = __webpack_require__(1475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_web__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__ = __webpack_require__(1382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_selectors_urlsManager__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_config__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums_page__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_Business_common__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__ = __webpack_require__(318);

















var getHistoryChatContent = function getHistoryChatContent(currentAgent, str, timezone, timezoneoffset) {
  try {
    var jsonObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_helper__["h" /* jsonString2Object */])(str);
    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isArray___default()(jsonObj)) {
      return jsonObj.map(function (item) {
        var id = item.g;
        var senderName = '';
        var sendertype = 3;
        var infoPrefix = '';
        var sendMessageTime = '';
        var endTime = '';
        var info = '';
        if (currentAgent && (item.b === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["i" /* commandTypeMap */].agentSendText || item.b === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["i" /* commandTypeMap */].visitorAddTextMessage || item.b === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["i" /* commandTypeMap */].agentSendUrl)) {
          sendMessageTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_time__["b" /* formatDateFromSpamTime */])(item.g, timezone, timezoneoffset);
          sendertype = item.d;
          senderName = item.e;
        }

        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(item.i)) {
          infoPrefix = item.i + ' (Original)';
          info = item.c + ' (Translation)';
        } else {
          info = item.c;
        }
        if (item.b === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["i" /* commandTypeMap */].systemEndChat) {
          endTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_time__["b" /* formatDateFromSpamTime */])(item.g, timezone, timezoneoffset);
        }
        return {
          id: id,
          senderName: senderName,
          sendertype: sendertype,
          infoPrefix: infoPrefix,
          sendMessageTime: sendMessageTime,
          endTime: endTime,
          info: info
        };
      });
    }
  } catch (e) {}
  return str.split(__WEBPACK_IMPORTED_MODULE_10__constants_config__["b" /* splitter */]).map(function (item) {
    return {
      senderName: '',
      sendertype: 3,
      infoPrefix: '',
      sendMessageTime: '',
      endTime: '',
      info: item
    };
  });
};

var getWrapupFieldName = function getWrapupFieldName(state, codePlanId, type, defaultName) {
  var codePlan = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["A" /* getCodePlan */](state, codePlanId);
  var fields = codePlan ? codePlan.wrapupFields.filter(function (item) {
    return item.type === type;
  }) : [];
  return fields.length > 0 ? fields[0].displayText : defaultName;
};

var getPreChatServerCustoms = function getPreChatServerCustoms(chatInfo) {
  var preChatServerCustoms = [];
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(chatInfo.name)) {
    preChatServerCustoms.push({ id: -1,
      name: 'Name',
      value: chatInfo.name });
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(chatInfo.email)) {
    preChatServerCustoms.push({ id: -2,
      name: 'Email',
      value: chatInfo.email });
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(chatInfo.phone)) {
    preChatServerCustoms.push({ id: -3,
      name: 'Phone',
      value: chatInfo.phone });
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(chatInfo.company)) {
    preChatServerCustoms.push({ id: -4,
      name: 'Company',
      value: chatInfo.company });
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(chatInfo.service)) {
    preChatServerCustoms.push({ id: -5,
      name: 'Product/service',
      value: chatInfo.service });
  }
  return preChatServerCustoms;
};

var createHistoryProps = function createHistoryProps(state) {
  var currentAgent = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["N" /* getCurrentAgent */](state);
  var page = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["p" /* getPage */](state);
  var historyRefreshing = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_0" /* getVisitorsHistoryRefreshing */](state);
  // const errorInfo = selectors.getVisitorsHistoryErrorInfo(state);
  var historyMessageId = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_1" /* getVisitorsHistoryMessageId */](state);
  var historyChatId = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_2" /* getVisitorsHistoryChatId */](state);
  var historyViewType = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_3" /* getHistoryViewType */](state);
  var datefmt = state.config.preference.dateTimeFormat;
  var ifUseMainServer = state.config.ifUseMainServer;
  var timezoneoffset = state.config.preference.offset;
  var timezone = state.config.preference.timeZone;
  var visitorId = 0;
  if (page === __WEBPACK_IMPORTED_MODULE_11__constants_enums_page__["a" /* chats */]) {
    var chat = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["q" /* getSelectedChat */](state);
    if (typeof chat === 'undefined') {
      return {
        errorInfo: undefined,
        chatItems: undefined,
        messageItems: undefined,
        offLineMessage: undefined,
        chatInfo: undefined,
        visitorId: 0,
        historyViewType: historyViewType,
        historyRefreshing: historyRefreshing,
        historyMessageId: historyMessageId,
        historyChatId: historyChatId,
        isViewAllItems: true,
        ifUseMainServer: ifUseMainServer
      };
    }
    visitorId = chat.get('visitorId');
  } else {
    visitorId = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["t" /* getSelectedVisitorId */](state);
  }
  var isViewAllChats = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_4" /* getHitoryIsViewAllChats */](state, visitorId);
  var isViewAllMessages = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_5" /* getHitoryIsViewAllMessages */](state, visitorId);
  var chats = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_6" /* getVisitorChatHistory */](state, visitorId);
  var errorInfo = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_7" /* getHistoryError */](state, visitorId, historyChatId, historyMessageId);
  var messages = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_8" /* getVisitorMessageHistory */](state, visitorId);

  var messageDetail = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_9" /* getMessageDetails */](state, visitorId, historyMessageId);
  var chatDetail = __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["_10" /* getChatDetails */](state, visitorId, historyChatId);
  var chatItems = typeof chats === 'undefined' ? undefined : chats.map(function (item) {
    return {
      time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_time__["a" /* formatTimeForHistory */])(timezone, timezoneoffset, item.sessionStartTime, datefmt),
      operator: item.agentNames + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(item.department) ? '' : ' | ' + item.department) + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(item.chatCategory) ? '' : ' | ' + item.chatCategory),
      chatId: item.id
    };
  });
  var messageItems = typeof messages === 'undefined' ? undefined : messages.map(function (item) {
    return {
      time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_time__["a" /* formatTimeForHistory */])(timezone, timezoneoffset, item.sessionStartTime, datefmt),
      messageId: item.id
    };
  });
  var offLineMessage = typeof messageDetail === 'undefined' ? undefined : {
    messageId: messageDetail.id,
    content: messageDetail.offlineMessageInfo.content,
    customVariables: messageDetail.offlineMessageInfo.customVariables
  };
  var chatInfo = typeof chatDetail === 'undefined' || typeof chatDetail.chatInfo === 'undefined' ? undefined : {
    id: chatDetail.id,
    detailUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducers_selectors_urlsManager__["i" /* getChatHistoryUrl */])(state, chatDetail.id, chatDetail.type, chatDetail.sessionId, __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["F" /* getSiteId */](state)),
    customVariables: chatDetail.chatInfo.customVariables,
    chatContent: getHistoryChatContent(currentAgent, chatDetail.chatInfo.chatContent, timezone, timezoneoffset),
    pre_chat_ser: chatDetail.chatInfo === undefined ? [] : getPreChatServerCustoms(chatDetail.chatInfo),
    pre_chat: chatDetail.chatInfo.preChatFields === undefined ? [] : chatDetail.chatInfo.preChatFields.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        value: item.value.replace(/⊙/g, ', ')
      };
    }),
    wrap_up: chatDetail.chatInfo.wrapupFields === undefined ? [] : chatDetail.chatInfo.wrapupFields.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        value: item.value.replace(/⊙/g, ', ')
      };
    }),
    chatCategory: { name: getWrapupFieldName(state, chatDetail.chatInfo.codePlanId, __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["d" /* WrapupCategory */], 'Category'),
      value: chatDetail.chatCategory },
    agentComment: { name: getWrapupFieldName(state, chatDetail.chatInfo.codePlanId, __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["f" /* WrapupComment */], 'Comment'),
      value: chatDetail.chatInfo.agentComment }
  };
  var isViewAllItems = historyRefreshing || !ifUseMainServer || historyViewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].chat && (isViewAllChats || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(errorInfo.getChatHistoryError) || chatItems === undefined || chatItems.length < 11) || historyViewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].offlineMessage && (isViewAllMessages || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(errorInfo.getOfflineMessageHistoryError) || messageItems === undefined || messageItems.length < 11);

  if (!isViewAllItems) {
    if (historyViewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].chat) {
      chatItems = chatItems.slice(0, 10);
    } else if (historyViewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].offlineMessage) {
      messageItems = messageItems.slice(0, 10);
    }
  }

  var historyChatDetailRefreshing = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(errorInfo.getChatHistoryDetailsError) && (chatInfo === undefined || chatInfo.id !== historyChatId);
  var historyMessageDetailRefreshing = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_str__["a" /* isNullOrEmpty */])(errorInfo.getOfflineMessageDetailsError) && (offLineMessage === undefined || offLineMessage.messageId !== historyMessageId);

  var _getAgentUrls = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__containers_Business_common__["b" /* getAgentUrls */])(state),
      loginUrl = _getAgentUrls.loginUrl,
      autoLoginUrl = _getAgentUrls.autoLoginUrl;

  return {
    loginUrl: loginUrl,
    autoLoginUrl: autoLoginUrl,
    errorInfo: errorInfo,
    chatItems: chatItems,
    messageItems: messageItems,
    offLineMessage: offLineMessage,
    chatInfo: chatInfo,
    visitorId: visitorId,
    historyMessageId: historyMessageId,
    historyChatId: historyChatId,
    historyViewType: historyViewType,
    historyRefreshing: historyRefreshing,
    historyChatDetailRefreshing: historyChatDetailRefreshing,
    historyMessageDetailRefreshing: historyMessageDetailRefreshing,
    isViewAllItems: isViewAllItems,
    ifUseMainServer: ifUseMainServer,
    ifEnableWrapupChat: __WEBPACK_IMPORTED_MODULE_2__reducers_selectors__["y" /* getIfEnableWrapupChat */](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    refreshHistory: function refreshHistory(visitorId, viewType) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["a" /* handleUpdateHistoryRefreshingStatus */](visitorId, true));
      if (viewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].offlineMessage) {
        dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["b" /* handleUpdateHistoryMessageId */](visitorId, 0));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_web__["j" /* getOfflineMessageHistory */](visitorId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["c" /* handleUpdateHistoryChatId */](visitorId, 0));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_web__["k" /* getChatHistory */](visitorId));
      }
    },
    refreshHistoryDetail: function refreshHistoryDetail(visitorId, itemId, viewType) {
      if (viewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].chat) {
        dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["c" /* handleUpdateHistoryChatId */](visitorId, itemId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["b" /* handleUpdateHistoryMessageId */](visitorId, itemId));
      }
    },
    getChatHistoryDetails: function getChatHistoryDetails(visitorId, itemId, viewType) {
      if (viewType === __WEBPACK_IMPORTED_MODULE_7__constants_enums__["j" /* historyType */].chat) {
        dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_web__["l" /* getChatHistoryDetails */](visitorId, itemId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_4__actions_web__["m" /* getOfflineMessageDetails */](visitorId, itemId));
      }
    },
    updateHistoryMessageId: function updateHistoryMessageId(visitorId, itemId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["b" /* handleUpdateHistoryMessageId */](visitorId, itemId));
    },
    updateHistoryChatId: function updateHistoryChatId(visitorId, itemId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["c" /* handleUpdateHistoryChatId */](visitorId, itemId));
    },
    updateHistoryViewType: function updateHistoryViewType(visitorId, type) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["d" /* handleUpdateHistoryViewType */](visitorId, type));
    },
    updateIsViewAllChats: function updateIsViewAllChats(visitorId, status) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["e" /* handleUdpateIsViewAllChats */](visitorId, status));
    },
    updateIsViewAllMessages: function updateIsViewAllMessages(visitorId, status) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_visitorHistory__["f" /* handleUdpateIsViewAllMessages */](visitorId, status));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(createHistoryProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__components_Tabs_VisitorHistory_VisitorHistory__["a" /* default */]));

/***/ }),

/***/ 1523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_indexOf__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Tabs_Wrapup_Wrapup__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_wrapup__ = __webpack_require__(1383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_config__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Business_visitorDetailsTab__ = __webpack_require__(963);















var mapStateToProps = function mapStateToProps(state) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__Business_visitorDetailsTab__["c" /* createWrapupProps */])(state);
};
var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;

  var dispatchObject = {
    handleSubmitWrapup: function handleSubmitWrapup(form) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_wrapup__["a" /* handleSubmitWrapup */](stateProps.chatId));
      var fields = stateProps.wrapupFields.map(function (field) {
        var temp = {};
        var name = field.displayText + '_' + field.id;
        if (field.type === __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__["d" /* WrapupCategory */]) {
          if (stateProps.ifEnableAdvancedCategoryMode) {
            temp.categoryList = form[field.id];
          } else {
            temp.categoryId = form[name];
          }
        } else if (field.type === __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__["f" /* WrapupComment */]) {
          temp.comment = form[name];
        } else {
          var value = form[name];
          if (field.type === __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__["e" /* CheckBoxList */]) {
            if (value) {
              value = __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(field.options.filter(function (option) {
                return __WEBPACK_IMPORTED_MODULE_4_lodash_indexOf___default()(value.split('⊙'), option.id.toString()) !== -1;
              }).map(function (option) {
                return option.displayText;
              })).join('⊙');
            } else {
              value = '';
            }
          }
          if (field.type === __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__["b" /* DropDownList */] || field.type === __WEBPACK_IMPORTED_MODULE_9__constants_enums_fieldType__["c" /* Radio */]) {
            if (value) {
              var opt = __WEBPACK_IMPORTED_MODULE_3_lodash_find___default()(field.options, function (option) {
                return option.id.toString() === value;
              });
              value = opt.displayText;
            } else {
              value = '';
            }
          }
          temp.customFields = { id: field.id,
            name: field.displayText,
            value: typeof value === 'undefined' ? '' : value };
        }
        return temp;
      });
      var wrapup = {};
      var customFields = [];
      __WEBPACK_IMPORTED_MODULE_2_lodash_each___default()(fields, function (item) {
        if (item.customFields) {
          customFields.push(item.customFields);
        } else {
          wrapup = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(wrapup, item);
        }
      });
      wrapup.customFields = customFields;
      wrapup.chatId = stateProps.chatId;
      wrapup.visitorId = stateProps.visitorId;
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agent__["h" /* setWrapupForm */](stateProps.visitorId, wrapup));
    },
    onDiscardWrapup: function onDiscardWrapup() {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_wrapup__["b" /* discardWrapup */](stateProps.chatId));
    },
    onRefreshWrapupHistory: function onRefreshWrapupHistory(chatId, visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_wrapup__["c" /* wrapupHistoryLoading */](chatId, true));
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agent__["i" /* getWrapupHistory */](visitorId));
    },
    onWrapupDetailsClick: function onWrapupDetailsClick(id, chatId, ownChatId, visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_wrapup__["d" /* wrapupDetailsOpen */](ownChatId, id));
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agent__["j" /* getWrapupDetails */](visitorId, chatId));
    },
    onFeatrueClick: function onFeatrueClick(newFeature) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_config__["a" /* updatePreference */]({ newFeatureNotify: newFeature }));
      dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_agent__["g" /* setPreference */]());
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ownProps, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_7__components_Tabs_Wrapup_Wrapup__["a" /* default */]));

/***/ }),

/***/ 1636:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"datePicker__input--1W-KX","error":"datePicker__error--j50PF"};

/***/ }),

/***/ 1637:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Container":"FeatureHelp__Container--3yL3Q","text":"FeatureHelp__text--QZG9h","action":"FeatureHelp__action--2JjlM"};

/***/ }),

/***/ 1643:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"CannedMessageContainer":"CannedMessage__CannedMessageContainer--1RUN7","tree":"CannedMessage__tree--xaFyL","container":"CannedMessage__container--39YjF","searchInput":"CannedMessage__searchInput--PSc8l","tooltip":"CannedMessage__tooltip--1Pmvv","inputWidth":"CannedMessage__inputWidth--3Ptgd","Loading":"CannedMessage__Loading--3_SmU","search":"CannedMessage__search--3zsdE","contentWrapper":"CannedMessage__contentWrapper--2I4TL","searchItem":"CannedMessage__searchItem--Acysh","title":"CannedMessage__title--R5X5f","content":"CannedMessage__content--13QGs","select":"CannedMessage__select--DAtdM","noSearchResult":"CannedMessage__noSearchResult--e-O6S","closeIcon":"CannedMessage__closeIcon--1oa0k","visible":"CannedMessage__visible--36QYJ"};

/***/ }),

/***/ 1644:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"VisitorDetailsTab__container--2r0Ho","content":"VisitorDetailsTab__content--3IKkv","header":"VisitorDetailsTab__header--jSPai","icon":"VisitorDetailsTab__icon--393k1","selected":"VisitorDetailsTab__selected--XWgAI","unselected":"VisitorDetailsTab__unselected--1Jcxs","tooltip":"VisitorDetailsTab__tooltip--2EtgV"};

/***/ }),

/***/ 1645:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"FormTransfer__container--3oSZm","optionsWrapper":"FormTransfer__optionsWrapper--1rh_z","option":"FormTransfer__option--1cgoH","selected":"FormTransfer__selected--IUerq","operations":"FormTransfer__operations--1eFhn","icons":"FormTransfer__icons--2cgJo","operation":"FormTransfer__operation--1Zt90","rightMargin":"FormTransfer__rightMargin--28jLP","leftMargin":"FormTransfer__leftMargin--1FGkK","header":"FormTransfer__header--3sRme","wrapper":"FormTransfer__wrapper--1sAAJ"};

/***/ }),

/***/ 1649:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1650:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 1679:
/***/ (function(module, exports) {

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOfWith;


/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(155),
    assignMergeValue = __webpack_require__(1326),
    baseFor = __webpack_require__(1805),
    baseMergeDeep = __webpack_require__(1682),
    isObject = __webpack_require__(28),
    keysIn = __webpack_require__(329);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 1682:
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(1326),
    cloneBuffer = __webpack_require__(337),
    cloneTypedArray = __webpack_require__(1688),
    copyArray = __webpack_require__(113),
    initCloneObject = __webpack_require__(339),
    isArguments = __webpack_require__(217),
    isArray = __webpack_require__(9),
    isArrayLikeObject = __webpack_require__(1807),
    isBuffer = __webpack_require__(156),
    isFunction = __webpack_require__(301),
    isObject = __webpack_require__(28),
    isPlainObject = __webpack_require__(295),
    isTypedArray = __webpack_require__(212),
    toPlainObject = __webpack_require__(1700);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(181),
    baseIndexOf = __webpack_require__(180),
    baseIndexOfWith = __webpack_require__(1679),
    baseUnary = __webpack_require__(332),
    copyArray = __webpack_require__(113);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

module.exports = basePullAll;


/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(1676);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1687);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(1681),
    createAssigner = __webpack_require__(338);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 1697:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(331),
    pullAll = __webpack_require__(1698);

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = baseRest(pullAll);

module.exports = pull;


/***/ }),

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

var basePullAll = __webpack_require__(1685);

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values)
    : array;
}

module.exports = pullAll;


/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(77),
    keysIn = __webpack_require__(329);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 1701:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(109),
    castSlice = __webpack_require__(296),
    charsEndIndex = __webpack_require__(688),
    stringToArray = __webpack_require__(297),
    toString = __webpack_require__(50);

/** Used to match leading and trailing whitespace. */
var reTrimEnd = /\s+$/;

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimEnd(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimEnd, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

  return castSlice(strSymbols, 0, end).join('');
}

module.exports = trimEnd;


/***/ }),

/***/ 1720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyCode = __webpack_require__(1340);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _DateTable = __webpack_require__(1730);

var _DateTable2 = _interopRequireDefault(_DateTable);

var _CalendarHeader = __webpack_require__(1723);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = __webpack_require__(1722);

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _CalendarMixin = __webpack_require__(1733);

var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

var _CommonMixin = __webpack_require__(1734);

var _CommonMixin2 = _interopRequireDefault(_CommonMixin);

var _DateInput = __webpack_require__(1727);

var _DateInput2 = _interopRequireDefault(_DateInput);

var _index = __webpack_require__(922);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function goStartMonth() {
  var next = this.state.value.clone();
  next.startOf('month');
  this.setValue(next);
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.endOf('month');
  this.setValue(next);
}

function goTime(direction, unit) {
  var next = this.state.value.clone();
  next.add(direction, unit);
  this.setValue(next);
}

function goMonth(direction) {
  return goTime.call(this, direction, 'months');
}

function goYear(direction) {
  return goTime.call(this, direction, 'years');
}

function goWeek(direction) {
  return goTime.call(this, direction, 'weeks');
}

function goDay(direction) {
  return goTime.call(this, direction, 'days');
}

var Calendar = _react2["default"].createClass({
  displayName: 'Calendar',

  propTypes: {
    disabledDate: _react.PropTypes.func,
    disabledTime: _react.PropTypes.any,
    value: _react.PropTypes.object,
    selectedValue: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    showWeekNumber: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    showToday: _react.PropTypes.bool,
    showDateInput: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    onOk: _react.PropTypes.func,
    showOk: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    onKeyDown: _react.PropTypes.func,
    timePicker: _react.PropTypes.element,
    dateInputPlaceholder: _react.PropTypes.any,
    onClear: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    renderFooter: _react.PropTypes.func,
    renderSidebar: _react.PropTypes.func
  },

  mixins: [_CommonMixin2["default"], _CalendarMixin2["default"]],

  getDefaultProps: function getDefaultProps() {
    return {
      showToday: true,
      showDateInput: true,
      timePicker: null,
      onOk: noop
    };
  },
  getInitialState: function getInitialState() {
    return {
      showTimePicker: false
    };
  },
  onKeyDown: function onKeyDown(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    switch (keyCode) {
      case _KeyCode2["default"].DOWN:
        goWeek.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].UP:
        goWeek.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].LEFT:
        if (ctrlKey) {
          goYear.call(this, -1);
        } else {
          goDay.call(this, -1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].RIGHT:
        if (ctrlKey) {
          goYear.call(this, 1);
        } else {
          goDay.call(this, 1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].HOME:
        goStartMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].END:
        goEndMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_DOWN:
        goMonth.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_UP:
        goMonth.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].ENTER:
        this.onSelect(this.state.value, {
          source: 'keyboard'
        });
        event.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(event);
        return 1;
    }
  },
  onClear: function onClear() {
    this.onSelect(null);
    this.props.onClear();
  },
  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDate(selectedValue)) {
      this.props.onOk(selectedValue);
    }
  },
  onDateInputChange: function onDateInputChange(value) {
    this.onSelect(value, {
      source: 'dateInput'
    });
  },
  onDateTableSelect: function onDateTableSelect(value) {
    this.onSelect(value);
  },
  onToday: function onToday() {
    var value = this.state.value;

    var now = (0, _index.getTodayTime)(value);
    this.onSelect(now, {
      source: 'todayButton'
    });
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  openTimePicker: function openTimePicker() {
    this.setState({
      showTimePicker: true
    });
  },
  closeTimePicker: function closeTimePicker() {
    this.setState({
      showTimePicker: false
    });
  },
  render: function render() {
    var props = this.props;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        disabledDate = props.disabledDate,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime;

    var state = this.state;
    var value = state.value,
        selectedValue = state.selectedValue,
        showTimePicker = state.showTimePicker;

    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;

    var timePickerEle = timePicker && showTimePicker ? _react2["default"].cloneElement(timePicker, (0, _extends3["default"])({
      showHour: true,
      showSecond: true,
      showMinute: true
    }, timePicker.props, disabledTimeConfig, {
      onChange: this.onDateInputChange,
      defaultOpenValue: value,
      value: selectedValue,
      disabledTime: disabledTime
    })) : null;
    var dateInputElement = props.showDateInput ? _react2["default"].createElement(_DateInput2["default"], {
      ref: 'dateInput',
      format: this.getFormat(),
      key: 'date-input',
      value: value,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange
    }) : null;
    var children = [props.renderSidebar(), _react2["default"].createElement(
      'div',
      { className: prefixCls + '-panel', key: 'panel' },
      dateInputElement,
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-date-panel' },
        _react2["default"].createElement(_CalendarHeader2["default"], {
          locale: locale,
          onValueChange: this.setValue,
          value: value,
          showTimePicker: showTimePicker,
          prefixCls: prefixCls
        }),
        timePicker && showTimePicker ? _react2["default"].createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(_DateTable2["default"], {
            locale: locale,
            value: value,
            selectedValue: selectedValue,
            prefixCls: prefixCls,
            dateRender: props.dateRender,
            onSelect: this.onDateTableSelect,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          })
        ),
        _react2["default"].createElement(_CalendarFooter2["default"], {
          showOk: props.showOk,
          renderFooter: props.renderFooter,
          locale: locale,
          prefixCls: prefixCls,
          showToday: props.showToday,
          disabledTime: disabledTime,
          showTimePicker: showTimePicker,
          showDateInput: props.showDateInput,
          timePicker: timePicker,
          selectedValue: selectedValue,
          value: value,
          disabledDate: disabledDate,
          okDisabled: !this.isAllowedDate(selectedValue),
          onOk: this.onOk,
          onSelect: this.onSelect,
          onToday: this.onToday,
          onOpenTimePicker: this.openTimePicker,
          onCloseTimePicker: this.closeTimePicker
        })
      )
    )];

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  }
});

exports["default"] = Calendar;
module.exports = exports['default'];

/***/ }),

/***/ 1721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createChainedFunction = __webpack_require__(1742);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _KeyCode = __webpack_require__(1340);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _placements = __webpack_require__(1737);

var _placements2 = _interopRequireDefault(_placements);

var _rcTrigger = __webpack_require__(690);

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = _react2["default"].createClass({
  displayName: 'Picker',

  propTypes: {
    animation: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    disabled: _react.PropTypes.bool,
    transitionName: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onOpenChange: _react.PropTypes.func,
    children: _react.PropTypes.func,
    getCalendarContainer: _react.PropTypes.func,
    calendar: _react.PropTypes.element,
    style: _react.PropTypes.object,
    open: _react.PropTypes.bool,
    defaultOpen: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    placement: _react.PropTypes.any,
    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
    align: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-calendar-picker',
      style: {},
      align: {},
      placement: 'bottomLeft',
      defaultOpen: false,
      onChange: noop,
      onOpenChange: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var open = void 0;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    return {
      open: open,
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({
        open: open
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    if (!prevState.open && this.state.open) {
      this.focusCalendar();
    }
  },
  onCalendarKeyDown: function onCalendarKeyDown(event) {
    if (event.keyCode === _KeyCode2["default"].ESC) {
      event.stopPropagation();
      this.close(this.focus);
    }
  },
  onCalendarSelect: function onCalendarSelect(value) {
    var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    if (cause.source === 'keyboard' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
      this.close(this.focus);
    }
    props.onChange(value);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode === _KeyCode2["default"].DOWN && !this.state.open) {
      this.open();
      event.preventDefault();
    }
  },
  onCalendarOk: function onCalendarOk() {
    this.close(this.focus);
  },
  onCalendarClear: function onCalendarClear() {
    this.close(this.focus);
  },
  onVisibleChange: function onVisibleChange(open) {
    this.setOpen(open);
  },
  getCalendarElement: function getCalendarElement() {
    var props = this.props;
    var state = this.state;
    var calendarProps = props.calendar.props;
    var value = state.value;

    var defaultValue = void 0;
    // RangeCalendar
    if (Array.isArray(value)) {
      defaultValue = value[0];
    } else {
      defaultValue = value;
    }
    var extraProps = {
      ref: this.saveCalendarRef,
      defaultValue: defaultValue || calendarProps.defaultValue,
      selectedValue: value,
      onKeyDown: this.onCalendarKeyDown,
      onOk: (0, _createChainedFunction2["default"])(calendarProps.onOk, this.onCalendarOk),
      onSelect: (0, _createChainedFunction2["default"])(calendarProps.onSelect, this.onCalendarSelect),
      onClear: (0, _createChainedFunction2["default"])(calendarProps.onClear, this.onCalendarClear)
    };

    return _react2["default"].cloneElement(props.calendar, extraProps);
  },
  setOpen: function setOpen(open, callback) {
    var onOpenChange = this.props.onOpenChange;

    if (this.state.open !== open) {
      if (!('open' in this.props)) {
        this.setState({
          open: open
        }, callback);
      }
      onOpenChange(open);
    }
  },
  open: function open(callback) {
    this.setOpen(true, callback);
  },
  close: function close(callback) {
    this.setOpen(false, callback);
  },
  focus: function focus() {
    if (!this.state.open) {
      _reactDom2["default"].findDOMNode(this).focus();
    }
  },
  focusCalendar: function focusCalendar() {
    if (this.state.open && this.calendarInstance !== null) {
      this.calendarInstance.focus();
    }
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        placement = props.placement,
        style = props.style,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        transitionName = props.transitionName,
        children = props.children;

    var state = this.state;
    return _react2["default"].createElement(
      _rcTrigger2["default"],
      {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: _placements2["default"],
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls
      },
      _react2["default"].cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
    );
  }
});

exports["default"] = Picker;
module.exports = exports['default'];

/***/ }),

/***/ 1722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mapSelf = __webpack_require__(1339);

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _TodayButton = __webpack_require__(1726);

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _OkButton = __webpack_require__(1724);

var _OkButton2 = _interopRequireDefault(_OkButton);

var _TimePickerButton = __webpack_require__(1725);

var _TimePickerButton2 = _interopRequireDefault(_TimePickerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarFooter = _react2["default"].createClass({
  displayName: 'CalendarFooter',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    showDateInput: _react.PropTypes.bool,
    disabledTime: _react.PropTypes.any,
    timePicker: _react.PropTypes.element,
    selectedValue: _react.PropTypes.any,
    showOk: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    value: _react.PropTypes.object,
    renderFooter: _react.PropTypes.func,
    defaultValue: _react.PropTypes.object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  render: function render() {
    var props = this.props;
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter;

    var footerEl = null;
    var extraFooter = renderFooter();
    if (props.showToday || timePicker || extraFooter) {
      var _cx;

      var nowEl = void 0;
      if (props.showToday) {
        nowEl = _react2["default"].createElement(_TodayButton2["default"], (0, _extends3["default"])({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = _react2["default"].createElement(_OkButton2["default"], props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = _react2["default"].createElement(_TimePickerButton2["default"], props);
      }

      var footerBtn = void 0;
      if (nowEl || okBtn) {
        footerBtn = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          (0, _mapSelf2["default"])([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = (0, _classnames2["default"])((_cx = {}, (0, _defineProperty3["default"])(_cx, prefixCls + '-footer', true), (0, _defineProperty3["default"])(_cx, prefixCls + '-footer-show-ok', okBtn), _cx));
      footerEl = _react2["default"].createElement(
        'div',
        { className: cls },
        extraFooter,
        footerBtn
      );
    }
    return footerEl;
  }
});

exports["default"] = CalendarFooter;
module.exports = exports['default'];

/***/ }),

/***/ 1723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _MonthPanel = __webpack_require__(1735);

var _MonthPanel2 = _interopRequireDefault(_MonthPanel);

var _YearPanel = __webpack_require__(1338);

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _mapSelf = __webpack_require__(1339);

var _mapSelf2 = _interopRequireDefault(_mapSelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function goMonth(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'months');
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'years');
  this.props.onValueChange(next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

var CalendarHeader = _react2["default"].createClass({
  displayName: 'CalendarHeader',

  propTypes: {
    enablePrev: _react.PropTypes.any,
    enableNext: _react.PropTypes.any,
    prefixCls: _react.PropTypes.string,
    showTimePicker: _react.PropTypes.bool,
    locale: _react.PropTypes.object,
    value: _react.PropTypes.object,
    onValueChange: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1
    };
  },
  getInitialState: function getInitialState() {
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {};
  },
  onSelect: function onSelect(value) {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 0
    });
    this.props.onValueChange(value);
  },
  monthYearElement: function monthYearElement(showTimePicker) {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var year = _react2["default"].createElement(
      'a',
      {
        className: prefixCls + '-year-select',
        role: 'button',
        onClick: showTimePicker ? null : this.showYearPanel,
        title: locale.yearSelect
      },
      value.format(locale.yearFormat)
    );
    var month = _react2["default"].createElement(
      'a',
      {
        className: prefixCls + '-month-select',
        role: 'button',
        onClick: showTimePicker ? null : this.showMonthPanel,
        title: locale.monthSelect
      },
      value.format(locale.monthFormat)
    );
    var day = void 0;
    if (showTimePicker) {
      day = _react2["default"].createElement(
        'a',
        {
          className: prefixCls + '-day-select',
          role: 'button'
        },
        value.format(locale.dayFormat)
      );
    }
    var my = [];
    if (monthBeforeYear) {
      my = [month, day, year];
    } else {
      my = [year, month, day];
    }
    return _react2["default"].createElement(
      'span',
      { className: selectClassName },
      (0, _mapSelf2["default"])(my)
    );
  },
  showMonthPanel: function showMonthPanel() {
    this.setState({
      showMonthPanel: 1,
      showYearPanel: 0
    });
  },
  showYearPanel: function showYearPanel() {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 1
    });
  },
  render: function render() {
    var props = this.props;
    var enableNext = props.enableNext,
        enablePrev = props.enablePrev,
        prefixCls = props.prefixCls,
        locale = props.locale,
        value = props.value,
        showTimePicker = props.showTimePicker;

    var state = this.state;
    var PanelClass = null;
    if (state.showMonthPanel) {
      PanelClass = _MonthPanel2["default"];
    } else if (state.showYearPanel) {
      PanelClass = _YearPanel2["default"];
    }
    var panel = void 0;
    if (PanelClass) {
      panel = _react2["default"].createElement(PanelClass, {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onSelect
      });
    }
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-header' },
      _react2["default"].createElement(
        'div',
        { style: { position: 'relative' } },
        showIf(enablePrev && !showTimePicker, _react2["default"].createElement('a', {
          className: prefixCls + '-prev-year-btn',
          role: 'button',
          onClick: this.previousYear,
          title: locale.previousYear
        })),
        showIf(enablePrev && !showTimePicker, _react2["default"].createElement('a', {
          className: prefixCls + '-prev-month-btn',
          role: 'button',
          onClick: this.previousMonth,
          title: locale.previousMonth
        })),
        this.monthYearElement(showTimePicker),
        showIf(enableNext && !showTimePicker, _react2["default"].createElement('a', {
          className: prefixCls + '-next-month-btn',
          onClick: this.nextMonth,
          title: locale.nextMonth
        })),
        showIf(enableNext && !showTimePicker, _react2["default"].createElement('a', {
          className: prefixCls + '-next-year-btn',
          onClick: this.nextYear,
          title: locale.nextYear
        }))
      ),
      panel
    );
  }
});

exports["default"] = CalendarHeader;
module.exports = exports['default'];

/***/ }),

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OkButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function OkButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      okDisabled = _ref.okDisabled,
      onOk = _ref.onOk;

  var className = prefixCls + "-ok-btn";
  if (okDisabled) {
    className += " " + prefixCls + "-ok-btn-disabled";
  }
  return _react2["default"].createElement(
    "a",
    {
      className: className,
      role: "button",
      onClick: okDisabled ? null : onOk
    },
    locale.ok
  );
}
module.exports = exports['default'];

/***/ }),

/***/ 1725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports["default"] = TimePickerButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(32);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TimePickerButton(_ref) {
  var _classnames;

  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      showTimePicker = _ref.showTimePicker,
      onOpenTimePicker = _ref.onOpenTimePicker,
      onCloseTimePicker = _ref.onCloseTimePicker,
      timePickerDisabled = _ref.timePickerDisabled;

  var className = (0, _classnames3["default"])((_classnames = {}, (0, _defineProperty3["default"])(_classnames, prefixCls + '-time-picker-btn', true), (0, _defineProperty3["default"])(_classnames, prefixCls + '-time-picker-btn-disabled', timePickerDisabled), _classnames));
  var onClick = null;
  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }
  return _react2["default"].createElement(
    'a',
    {
      className: className,
      role: 'button',
      onClick: onClick
    },
    showTimePicker ? locale.dateSelect : locale.timeSelect
  );
}
module.exports = exports['default'];

/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodayButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(922);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TodayButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      value = _ref.value,
      timePicker = _ref.timePicker,
      disabled = _ref.disabled,
      disabledDate = _ref.disabledDate,
      onToday = _ref.onToday,
      text = _ref.text;

  var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
  var disabledToday = disabledDate && !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? prefixCls + '-today-btn-disabled' : '';
  return _react2["default"].createElement(
    'a',
    {
      className: prefixCls + '-today-btn ' + disabledTodayClass,
      role: 'button',
      onClick: isDisabled ? null : onToday,
      title: (0, _util.getTodayTimeStr)(value)
    },
    localeNow
  );
}
module.exports = exports['default'];

/***/ }),

/***/ 1727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DateInput = _react2["default"].createClass({
  displayName: 'DateInput',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    timePicker: _react.PropTypes.object,
    value: _react.PropTypes.object,
    disabledTime: _react.PropTypes.any,
    format: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    disabledDate: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    selectedValue: _react.PropTypes.object
  },

  getInitialState: function getInitialState() {
    var selectedValue = this.props.selectedValue;
    return {
      str: selectedValue && selectedValue.format(this.props.format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    this.setState({
      str: selectedValue && selectedValue.format(nextProps.format) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = void 0;
    var _props = this.props,
        disabledDate = _props.disabledDate,
        format = _props.format,
        onChange = _props.onChange;

    if (str) {
      var parsed = (0, _moment2["default"])(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value = this.props.value.clone();
      value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      if (value && (!disabledDate || !disabledDate(value))) {
        var originalValue = this.props.selectedValue;
        if (originalValue && value) {
          if (!originalValue.isSame(value)) {
            onChange(value);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        this.setState({
          invalid: true
        });
        return;
      }
    } else {
      onChange(null);
    }
    this.setState({
      invalid: false
    });
  },
  onClear: function onClear() {
    this.setState({
      str: ''
    });
    this.props.onClear(null);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  focus: function focus() {
    this.refs.dateInput.focus();
  },
  render: function render() {
    var props = this.props;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        placeholder = props.placeholder;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        _react2["default"].createElement('input', {
          ref: 'dateInput',
          className: prefixCls + '-input ' + invalidClass,
          value: str,
          disabled: props.disabled,
          placeholder: placeholder,
          onChange: this.onInputChange
        })
      ),
      props.showClear ? _react2["default"].createElement('a', {
        className: prefixCls + '-clear-btn',
        role: 'button',
        title: locale.clear,
        onClick: this.onClear
      }) : null
    );
  }
});

exports["default"] = DateInput;
module.exports = exports['default'];

/***/ }),

/***/ 1728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _DateConstants = __webpack_require__(1336);

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _util = __webpack_require__(922);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() > today.month();
}

function getIdFromDate(date) {
  return 'rc-calendar-' + date.year() + '-' + date.month() + '-' + date.date();
}

var DateTBody = _react2["default"].createClass({
  displayName: 'DateTBody',

  propTypes: {
    contentRender: _react.PropTypes.func,
    dateRender: _react.PropTypes.func,
    disabledDate: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.object)]),
    value: _react.PropTypes.object,
    hoverValue: _react.PropTypes.any,
    showWeekNumber: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hoverValue: []
    };
  },
  render: function render() {
    var props = this.props;
    var contentRender = props.contentRender,
        prefixCls = props.prefixCls,
        selectedValue = props.selectedValue,
        value = props.value,
        showWeekNumber = props.showWeekNumber,
        dateRender = props.dateRender,
        disabledDate = props.disabledDate,
        hoverValue = props.hoverValue;

    var iIndex = void 0;
    var jIndex = void 0;
    var current = void 0;
    var dateTable = [];
    var today = (0, _util.getTodayTime)(value);
    var cellClass = prefixCls + '-cell';
    var weekNumberCellClass = prefixCls + '-week-number-cell';
    var dateClass = prefixCls + '-date';
    var todayClass = prefixCls + '-today';
    var selectedClass = prefixCls + '-selected-day';
    var selectedDateClass = prefixCls + '-selected-date'; // do not move with mouse operation
    var inRangeClass = prefixCls + '-in-range-cell';
    var lastMonthDayClass = prefixCls + '-last-month-cell';
    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
    var disabledClass = prefixCls + '-disabled-cell';
    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
    var month1 = value.clone();
    month1.date(1);
    var day = month1.day();
    var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7;
    // calculate last month
    var lastMonth1 = month1.clone();
    lastMonth1.add(0 - lastMonthDiffDay, 'days');
    var passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2["default"].DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < _DateConstants2["default"].DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;
        if (passed) {
          current = current.clone();
          current.add(passed, 'days');
        }
        dateTable.push(current);
        passed++;
      }
    }
    var tableHtml = [];
    passed = 0;

    for (iIndex = 0; iIndex < _DateConstants2["default"].DATE_ROW_COUNT; iIndex++) {
      var isCurrentWeek = void 0;
      var weekNumberCell = void 0;
      var dateCells = [];
      if (showWeekNumber) {
        weekNumberCell = _react2["default"].createElement(
          'td',
          {
            key: dateTable[passed].week(),
            role: 'gridcell',
            className: weekNumberCellClass
          },
          dateTable[passed].week()
        );
      }
      for (jIndex = 0; jIndex < _DateConstants2["default"].DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];
        if (jIndex < _DateConstants2["default"].DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }
        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }
        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += ' ' + todayClass;
          isCurrentWeek = true;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          var rangeValue = hoverValue.length ? hoverValue : selectedValue;
          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = rangeValue[0];
            var endValue = rangeValue[1];
            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
              }
            }
            if (startValue && endValue) {
              if (isSameDay(current, endValue)) {
                selected = true;
              } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
                cls += ' ' + inRangeClass;
              }
            }
          }
        } else if (isSameDay(current, value)) {
          // keyboard change value, highlight works
          selected = true;
        }

        if (isSameDay(current, selectedValue)) {
          cls += ' ' + selectedDateClass;
        }

        if (isBeforeCurrentMonthYear) {
          cls += ' ' + lastMonthDayClass;
        }
        if (isAfterCurrentMonthYear) {
          cls += ' ' + nextMonthDayClass;
        }

        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += ' ' + firstDisableClass;
            }

            if (!next || !disabledDate(next, value)) {
              cls += ' ' + lastDisableClass;
            }
          }
        }

        if (selected) {
          cls += ' ' + selectedClass;
        }

        if (disabled) {
          cls += ' ' + disabledClass;
        }

        var dateHtml = void 0;
        if (dateRender) {
          dateHtml = dateRender(current, value);
        } else {
          var content = contentRender ? contentRender(current, value) : current.date();
          dateHtml = _react2["default"].createElement(
            'div',
            {
              key: getIdFromDate(current),
              className: dateClass,
              'aria-selected': selected,
              'aria-disabled': disabled
            },
            content
          );
        }

        dateCells.push(_react2["default"].createElement(
          'td',
          {
            key: passed,
            onClick: disabled ? undefined : props.onSelect.bind(null, current),
            onMouseEnter: disabled ? undefined : props.onDayHover && props.onDayHover.bind(null, current) || undefined,
            role: 'gridcell',
            title: (0, _util.getTitleString)(current), className: cls
          },
          dateHtml
        ));

        passed++;
      }
      tableHtml.push(_react2["default"].createElement(
        'tr',
        {
          key: iIndex,
          role: 'row',
          className: isCurrentWeek && prefixCls + '-current-week'
        },
        weekNumberCell,
        dateCells
      ));
    }
    return _react2["default"].createElement(
      'tbody',
      { className: prefixCls + '-tbody' },
      tableHtml
    );
  }
});

exports["default"] = DateTBody;
module.exports = exports['default'];

/***/ }),

/***/ 1729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _DateConstants = __webpack_require__(1336);

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DateTHead = function (_React$Component) {
  (0, _inherits3["default"])(DateTHead, _React$Component);

  function DateTHead() {
    (0, _classCallCheck3["default"])(this, DateTHead);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  DateTHead.prototype.render = function render() {
    var props = this.props;
    var value = props.value;
    var localeData = value.localeData();
    var prefixCls = props.prefixCls;
    var veryShortWeekdays = [];
    var weekDays = [];
    var firstDayOfWeek = localeData.firstDayOfWeek();
    var showWeekNumberEl = void 0;
    var now = (0, _moment2["default"])();
    for (var dateColIndex = 0; dateColIndex < _DateConstants2["default"].DATE_COL_COUNT; dateColIndex++) {
      var index = (firstDayOfWeek + dateColIndex) % _DateConstants2["default"].DATE_COL_COUNT;
      now.day(index);
      veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
      weekDays[dateColIndex] = localeData.weekdaysShort(now);
    }

    if (props.showWeekNumber) {
      showWeekNumberEl = _react2["default"].createElement(
        'th',
        {
          role: 'columnheader',
          className: prefixCls + '-column-header ' + prefixCls + '-week-number-header'
        },
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-column-header-inner' },
          'x'
        )
      );
    }
    var weekDaysEls = weekDays.map(function (day, xindex) {
      return _react2["default"].createElement(
        'th',
        {
          key: xindex,
          role: 'columnheader',
          title: day,
          className: prefixCls + '-column-header'
        },
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-column-header-inner' },
          veryShortWeekdays[xindex]
        )
      );
    });
    return _react2["default"].createElement(
      'thead',
      null,
      _react2["default"].createElement(
        'tr',
        { role: 'row' },
        showWeekNumberEl,
        weekDaysEls
      )
    );
  };

  return DateTHead;
}(_react2["default"].Component);

exports["default"] = DateTHead;
module.exports = exports['default'];

/***/ }),

/***/ 1730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _DateTHead = __webpack_require__(1729);

var _DateTHead2 = _interopRequireDefault(_DateTHead);

var _DateTBody = __webpack_require__(1728);

var _DateTBody2 = _interopRequireDefault(_DateTBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DateTable = function (_React$Component) {
  (0, _inherits3["default"])(DateTable, _React$Component);

  function DateTable() {
    (0, _classCallCheck3["default"])(this, DateTable);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  DateTable.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    return _react2["default"].createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      _react2["default"].createElement(_DateTHead2["default"], props),
      _react2["default"].createElement(_DateTBody2["default"], props)
    );
  };

  return DateTable;
}(_react2["default"].Component);

exports["default"] = DateTable;
module.exports = exports['default'];

/***/ }),

/***/ 1731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ROW = 4;
var COL = 3;


function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'years');
  this.setState({
    value: next
  });
}

function chooseDecade(year, event) {
  var next = this.state.value.clone();
  next.year(year);
  next.month(this.state.value.month());
  this.props.onSelect(next);
  event.preventDefault();
}

var DecadePanel = function (_React$Component) {
  (0, _inherits3["default"])(DecadePanel, _React$Component);

  function DecadePanel(props) {
    (0, _classCallCheck3["default"])(this, DecadePanel);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };

    // bind methods
    _this.prefixCls = props.rootPrefixCls + '-decade-panel';
    _this.nextCentury = goYear.bind(_this, 100);
    _this.previousCentury = goYear.bind(_this, -100);
    return _this;
  }

  DecadePanel.prototype.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    var locale = this.props.locale;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 100, 10) * 100;
    var preYear = startYear - 10;
    var endYear = startYear + 99;
    var decades = [];
    var index = 0;
    var prefixCls = this.prefixCls;

    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      decades[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var startDecade = preYear + index * 10;
        var endDecade = preYear + index * 10 + 9;
        decades[rowIndex][colIndex] = {
          startDecade: startDecade,
          endDecade: endDecade
        };
        index++;
      }
    }

    var decadesEls = decades.map(function (row, decadeIndex) {
      var tds = row.map(function (decadeData) {
        var _classNameMap;

        var dStartDecade = decadeData.startDecade;
        var dEndDecade = decadeData.endDecade;
        var isLast = dStartDecade < startYear;
        var isNext = dEndDecade > endYear;
        var classNameMap = (_classNameMap = {}, (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-cell', 1), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-selected-cell', dStartDecade <= currentYear && currentYear <= dEndDecade), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-last-century-cell', isLast), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-next-century-cell', isNext), _classNameMap);
        var content = dStartDecade + '-' + dEndDecade;
        var clickHandler = void 0;
        if (isLast) {
          clickHandler = _this2.previousCentury;
        } else if (isNext) {
          clickHandler = _this2.nextCentury;
        } else {
          clickHandler = chooseDecade.bind(_this2, dStartDecade);
        }
        return _react2["default"].createElement(
          'td',
          {
            key: dStartDecade,
            onClick: clickHandler,
            role: 'gridcell',
            className: (0, _classnames2["default"])(classNameMap)
          },
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-decade'
            },
            content
          )
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: decadeIndex, role: 'row' },
        tds
      );
    });

    return _react2["default"].createElement(
      'div',
      { className: this.prefixCls },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-header' },
        _react2["default"].createElement('a', {
          className: prefixCls + '-prev-century-btn',
          role: 'button',
          onClick: this.previousCentury,
          title: locale.previousCentury
        }),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-century' },
          startYear,
          '-',
          endYear
        ),
        _react2["default"].createElement('a', {
          className: prefixCls + '-next-century-btn',
          role: 'button',
          onClick: this.nextCentury,
          title: locale.nextCentury
        })
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-body' },
        _react2["default"].createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          _react2["default"].createElement(
            'tbody',
            { className: prefixCls + '-tbody' },
            decadesEls
          )
        )
      )
    );
  };

  return DecadePanel;
}(_react2["default"].Component);

exports["default"] = DecadePanel;


DecadePanel.propTypes = {
  locale: _react.PropTypes.object,
  value: _react.PropTypes.object,
  defaultValue: _react.PropTypes.object,
  rootPrefixCls: _react.PropTypes.string
};

DecadePanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 1732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Calendar = __webpack_require__(1720);

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Calendar2["default"];
module.exports = exports['default'];

/***/ }),

/***/ 1733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

var _index = __webpack_require__(922);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function getNow() {
  return (0, _moment2["default"])();
}

function getNowByCurrentStateValue(value) {
  var ret = void 0;
  if (value) {
    ret = (0, _index.getTodayTime)(value);
  } else {
    ret = getNow();
  }
  return ret;
}

var CalendarMixin = {
  propTypes: {
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    onKeyDown: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onKeyDown: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var value = props.value || props.defaultValue || getNow();
    return {
      value: value,
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var selectedValue = nextProps.selectedValue;

    if ('value' in nextProps) {
      value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
      this.setState({
        value: value
      });
    }
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: selectedValue
      });
    }
  },
  onSelect: function onSelect(value, cause) {
    if (value) {
      this.setValue(value);
    }
    this.setSelectedValue(value, cause);
  },
  renderRoot: function renderRoot(newProps) {
    var _className;

    var props = this.props;
    var prefixCls = props.prefixCls;

    var className = (_className = {}, (0, _defineProperty3["default"])(_className, prefixCls, 1), (0, _defineProperty3["default"])(_className, prefixCls + '-hidden', !props.visible), (0, _defineProperty3["default"])(_className, props.className, !!props.className), (0, _defineProperty3["default"])(_className, newProps.className, !!newProps.className), _className);

    return _react2["default"].createElement(
      'div',
      {
        ref: 'root',
        className: '' + (0, _classnames2["default"])(className),
        style: this.props.style,
        tabIndex: '0',
        onKeyDown: this.onKeyDown
      },
      newProps.children
    );
  },
  setSelectedValue: function setSelectedValue(selectedValue, cause) {
    // if (this.isAllowedDate(selectedValue)) {
    if (!('selectedValue' in this.props)) {
      this.setState({
        selectedValue: selectedValue
      });
    }
    this.props.onSelect(selectedValue, cause);
    // }
  },
  setValue: function setValue(value) {
    var originalValue = this.state.value;
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
      this.props.onChange(value);
    }
  },
  isAllowedDate: function isAllowedDate(value) {
    var disabledDate = this.props.disabledDate;
    var disabledTime = this.props.disabledTime;
    return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
  }
};

exports["default"] = CalendarMixin;
module.exports = exports['default'];

/***/ }),

/***/ 1734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _en_US = __webpack_require__(1337);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

exports["default"] = {
  propTypes: {
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    style: _react.PropTypes.object,
    visible: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onOk: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      locale: _en_US2["default"],
      style: {},
      visible: true,
      prefixCls: 'rc-calendar',
      className: '',
      onSelect: noop,
      onChange: noop,
      onClear: noop,
      renderFooter: function renderFooter() {
        return null;
      },
      renderSidebar: function renderSidebar() {
        return null;
      }
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },
  getFormat: function getFormat() {
    var format = this.props.format;
    var _props = this.props,
        locale = _props.locale,
        timePicker = _props.timePicker;

    if (!format) {
      if (timePicker) {
        format = locale.dateTimeFormat;
      } else {
        format = locale.dateFormat;
      }
    }
    return format;
  },
  focus: function focus() {
    if (this.refs.root) {
      this.refs.root.focus();
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 1735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _YearPanel = __webpack_require__(1338);

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _MonthTable = __webpack_require__(1736);

var _MonthTable2 = _interopRequireDefault(_MonthTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'year');
  this.setAndChangeValue(next);
}

function noop() {}

var MonthPanel = _react2["default"].createClass({
  displayName: 'MonthPanel',

  propTypes: {
    onChange: _react.PropTypes.func,
    disabledDate: _react.PropTypes.func,
    onSelect: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: noop,
      onSelect: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    // bind methods
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    this.prefixCls = props.rootPrefixCls + '-month-panel';
    return {
      value: props.value || props.defaultValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  onYearPanelSelect: function onYearPanelSelect(current) {
    this.setState({
      showYearPanel: 0
    });
    this.setAndChangeValue(current);
  },
  setAndChangeValue: function setAndChangeValue(value) {
    this.setValue(value);
    this.props.onChange(value);
  },
  setAndSelectValue: function setAndSelectValue(value) {
    this.setValue(value);
    this.props.onSelect(value);
  },
  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
  },
  showYearPanel: function showYearPanel() {
    this.setState({
      showYearPanel: 1
    });
  },
  render: function render() {
    var props = this.props;
    var value = this.state.value;
    var cellRender = props.cellRender;
    var contentRender = props.contentRender;
    var locale = props.locale;
    var year = value.year();
    var prefixCls = this.prefixCls;
    var yearPanel = void 0;
    if (this.state.showYearPanel) {
      yearPanel = _react2["default"].createElement(_YearPanel2["default"], {
        locale: locale,
        value: value,
        rootPrefixCls: props.rootPrefixCls,
        onSelect: this.onYearPanelSelect
      });
    }
    return _react2["default"].createElement(
      'div',
      { className: prefixCls, style: props.style },
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2["default"].createElement('a', {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          }),
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-year-select',
              role: 'button',
              onClick: this.showYearPanel,
              title: locale.yearSelect
            },
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          _react2["default"].createElement('a', {
            className: prefixCls + '-next-year-btn',
            role: 'button',
            onClick: this.nextYear,
            title: locale.nextYear
          })
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(_MonthTable2["default"], {
            disabledDate: props.disabledDate,
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            cellRender: cellRender,
            contentRender: contentRender,
            prefixCls: prefixCls
          })
        )
      ),
      yearPanel
    );
  }
});

exports["default"] = MonthPanel;
module.exports = exports['default'];

/***/ }),

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(922);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ROW = 4;
var COL = 3;

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.month(month);
  this.setAndSelectValue(next);
}

function noop() {}

var MonthTable = function (_Component) {
  (0, _inherits3["default"])(MonthTable, _Component);

  function MonthTable(props) {
    (0, _classCallCheck3["default"])(this, MonthTable);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  MonthTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  MonthTable.prototype.setAndSelectValue = function setAndSelectValue(value) {
    this.setState({
      value: value
    });
    this.props.onSelect(value);
  };

  MonthTable.prototype.months = function months() {
    var value = this.state.value;
    var current = value.clone();
    var months = [];
    var localeData = value.localeData();
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      months[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        current.month(index);
        var content = localeData.monthsShort(current);
        months[rowIndex][colIndex] = {
          value: index,
          content: content,
          title: content
        };
        index++;
      }
    }
    return months;
  };

  MonthTable.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var today = (0, _index.getTodayTime)(value);
    var months = this.months();
    var currentMonth = value.month();
    var prefixCls = props.prefixCls,
        locale = props.locale,
        contentRender = props.contentRender,
        cellRender = props.cellRender;

    var monthsEls = months.map(function (month, index) {
      var tds = month.map(function (monthData) {
        var _classNameMap;

        var disabled = false;
        if (props.disabledDate) {
          var testValue = value.clone();
          testValue.month(monthData.value);
          disabled = props.disabledDate(testValue);
        }
        var classNameMap = (_classNameMap = {}, (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-cell', 1), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-cell-disabled', disabled), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-selected-cell', monthData.value === currentMonth), (0, _defineProperty3["default"])(_classNameMap, prefixCls + '-current-cell', today.year() === value.year() && monthData.value === today.month()), _classNameMap);
        var cellEl = void 0;
        if (cellRender) {
          var currentValue = value.clone();
          currentValue.month(monthData.value);
          cellEl = cellRender(currentValue, locale);
        } else {
          var content = void 0;
          if (contentRender) {
            var _currentValue = value.clone();
            _currentValue.month(monthData.value);
            content = contentRender(_currentValue, locale);
          } else {
            content = monthData.content;
          }
          cellEl = _react2["default"].createElement(
            'a',
            { className: prefixCls + '-month' },
            content
          );
        }
        return _react2["default"].createElement(
          'td',
          {
            role: 'gridcell',
            key: monthData.value,
            onClick: disabled ? null : chooseMonth.bind(_this2, monthData.value),
            title: monthData.title,
            className: (0, _classnames2["default"])(classNameMap)
          },
          cellEl
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    return _react2["default"].createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      _react2["default"].createElement(
        'tbody',
        { className: prefixCls + '-tbody' },
        monthsEls
      )
    );
  };

  return MonthTable;
}(_react.Component);

MonthTable.defaultProps = {
  onSelect: noop
};
MonthTable.propTypes = {
  onSelect: _react.PropTypes.func,
  cellRender: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  value: _react.PropTypes.object
};
exports["default"] = MonthTable;
module.exports = exports['default'];

/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

exports["default"] = placements;
module.exports = exports['default'];

/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(1741);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = _react2["default"].createClass({
  displayName: 'Combobox',

  propTypes: {
    format: _react.PropTypes.string,
    defaultOpenValue: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    showHour: _react.PropTypes.bool,
    showMinute: _react.PropTypes.bool,
    showSecond: _react.PropTypes.bool,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onCurrentSelectPanelChange: _react.PropTypes.func,
    use12Hours: _react.PropTypes.bool
  },

  onItemChange: function onItemChange(type, itemValue) {
    var _props = this.props,
        onChange = _props.onChange,
        defaultOpenValue = _props.defaultOpenValue,
        use12Hours = _props.use12Hours;

    var value = (this.props.value || defaultOpenValue).clone();

    if (type === 'hour') {
      if (use12Hours) {
        if (this.isAM()) {
          value.hour(+itemValue % 12);
        } else {
          value.hour(+itemValue % 12 + 12);
        }
      } else {
        value.hour(+itemValue);
      }
    } else if (type === 'minute') {
      value.minute(+itemValue);
    } else if (type === 'ampm') {
      var ampm = itemValue.toUpperCase();
      if (use12Hours) {
        if (ampm === 'PM' && value.hour() < 12) {
          value.hour(value.hour() % 12 + 12);
        }

        if (ampm === 'AM') {
          if (value.hour() >= 12) {
            value.hour(value.hour() - 12);
          }
        }
      }
    } else {
      value.second(+itemValue);
    }
    onChange(value);
  },
  onEnterSelectPanel: function onEnterSelectPanel(range) {
    this.props.onCurrentSelectPanelChange(range);
  },
  getHourSelect: function getHourSelect(hour) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        hourOptions = _props2.hourOptions,
        disabledHours = _props2.disabledHours,
        showHour = _props2.showHour,
        use12Hours = _props2.use12Hours;

    if (!showHour) {
      return null;
    }
    var disabledOptions = disabledHours();
    var hourOptionsAdj = void 0;
    var hourAdj = void 0;
    if (use12Hours) {
      hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
        return h < 12 && h > 0;
      }));
      hourAdj = hour % 12 || 12;
    } else {
      hourOptionsAdj = hourOptions;
      hourAdj = hour;
    }

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: hourOptionsAdj.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: hourOptionsAdj.indexOf(hourAdj),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
    });
  },
  getMinuteSelect: function getMinuteSelect(minute) {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        minuteOptions = _props3.minuteOptions,
        disabledMinutes = _props3.disabledMinutes,
        defaultOpenValue = _props3.defaultOpenValue,
        showMinute = _props3.showMinute;

    if (!showMinute) {
      return null;
    }
    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledMinutes(value.hour());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
    });
  },
  getSecondSelect: function getSecondSelect(second) {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        secondOptions = _props4.secondOptions,
        disabledSeconds = _props4.disabledSeconds,
        showSecond = _props4.showSecond,
        defaultOpenValue = _props4.defaultOpenValue;

    if (!showSecond) {
      return null;
    }
    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledSeconds(value.hour(), value.minute());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
    });
  },
  getAMPMSelect: function getAMPMSelect() {
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        use12Hours = _props5.use12Hours,
        format = _props5.format;

    if (!use12Hours) {
      return null;
    }

    var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
    .map(function (c) {
      return format.match(/\sA/) ? c.toUpperCase() : c;
    }).map(function (c) {
      return { value: c };
    });

    var selected = this.isAM() ? 0 : 1;

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: AMPMOptions,
      selectedIndex: selected,
      type: 'ampm',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'ampm')
    });
  },
  isAM: function isAM() {
    var value = this.props.value || this.props.defaultOpenValue;
    return value.hour() >= 0 && value.hour() < 12;
  },
  render: function render() {
    var _props6 = this.props,
        prefixCls = _props6.prefixCls,
        defaultOpenValue = _props6.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.hour()),
      this.getMinuteSelect(value.minute()),
      this.getSecondSelect(value.second()),
      this.getAMPMSelect(value.hour())
    );
  }
});

exports["default"] = Combobox;
module.exports = exports['default'];

/***/ }),

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _react2["default"].createClass({
  displayName: 'Header',

  propTypes: {
    format: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    disabledDate: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    clearText: _react.PropTypes.string,
    value: _react.PropTypes.object,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    onEsc: _react.PropTypes.func,
    allowEmpty: _react.PropTypes.bool,
    defaultOpenValue: _react.PropTypes.object,
    currentSelectPanel: _react.PropTypes.string
  },

  getInitialState: function getInitialState() {
    var _props = this.props,
        value = _props.value,
        format = _props.format;

    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        format = nextProps.format;

    this.setState({
      str: value && value.format(format) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var _props2 = this.props,
        format = _props2.format,
        hourOptions = _props2.hourOptions,
        minuteOptions = _props2.minuteOptions,
        secondOptions = _props2.secondOptions,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        onChange = _props2.onChange,
        allowEmpty = _props2.allowEmpty;


    if (str) {
      var originalValue = this.props.value;
      var value = this.getProtoValue().clone();
      var parsed = (0, _moment2["default"])(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true
      });
      return;
    }

    this.setState({
      invalid: false
    });
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.onEsc();
    }
  },
  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear();
  },
  getClearButton: function getClearButton() {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        allowEmpty = _props3.allowEmpty;

    if (!allowEmpty) {
      return null;
    }
    return _react2["default"].createElement('a', {
      className: prefixCls + '-clear-btn',
      role: 'button',
      title: this.props.clearText,
      onMouseDown: this.onClear
    });
  },
  getProtoValue: function getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  },
  getInput: function getInput() {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        placeholder = _props4.placeholder;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2["default"].createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: 'input',
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder,
      onChange: this.onInputChange
    });
  },
  render: function render() {
    var prefixCls = this.props.prefixCls;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput(),
      this.getClearButton()
    );
  }
});

exports["default"] = Header;
module.exports = exports['default'];

/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(1739);

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = __webpack_require__(1738);

var _Combobox2 = _interopRequireDefault(_Combobox);

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var arr = [];
  for (var value = 0; value < length; value++) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = _react2["default"].createClass({
  displayName: 'Panel',

  propTypes: {
    clearText: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    defaultOpenValue: _react.PropTypes.object,
    value: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    format: _react.PropTypes.string,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    hideDisabledOptions: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onEsc: _react.PropTypes.func,
    allowEmpty: _react.PropTypes.bool,
    showHour: _react.PropTypes.bool,
    showMinute: _react.PropTypes.bool,
    showSecond: _react.PropTypes.bool,
    onClear: _react.PropTypes.func,
    use12Hours: _react.PropTypes.bool,
    addon: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-time-picker-panel',
      onChange: noop,
      onClear: noop,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      defaultOpenValue: (0, _moment2["default"])(),
      use12Hours: false,
      addon: noop
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      selectionRange: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    if (value) {
      this.setState({
        value: value
      });
    }
  },
  onChange: function onChange(newValue) {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  },
  onClear: function onClear() {
    this.props.onClear();
  },
  onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
    this.setState({ currentSelectPanel: currentSelectPanel });
  },
  close: function close() {
    this.props.onEsc();
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        placeholder = _props.placeholder,
        disabledHours = _props.disabledHours,
        disabledMinutes = _props.disabledMinutes,
        disabledSeconds = _props.disabledSeconds,
        hideDisabledOptions = _props.hideDisabledOptions,
        allowEmpty = _props.allowEmpty,
        showHour = _props.showHour,
        showMinute = _props.showMinute,
        showSecond = _props.showSecond,
        format = _props.format,
        defaultOpenValue = _props.defaultOpenValue,
        clearText = _props.clearText,
        onEsc = _props.onEsc,
        addon = _props.addon,
        use12Hours = _props.use12Hours;
    var _state = this.state,
        value = _state.value,
        currentSelectPanel = _state.currentSelectPanel;

    var disabledHourOptions = disabledHours();
    var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);

    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-inner', true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames)) },
      _react2["default"].createElement(_Header2["default"], {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: defaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        onClear: this.onClear,
        allowEmpty: allowEmpty
      }),
      _react2["default"].createElement(_Combobox2["default"], {
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: defaultOpenValue,
        format: format,
        onChange: this.onChange,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
        use12Hours: use12Hours
      }),
      addon(this)
    );
  }
});

exports["default"] = Panel;
module.exports = exports['default'];

/***/ }),

/***/ 1741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames3 = __webpack_require__(32);

var _classnames4 = _interopRequireDefault(_classnames3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = _react2["default"].createClass({
  displayName: 'Select',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    options: _react.PropTypes.array,
    selectedIndex: _react.PropTypes.number,
    type: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  componentDidMount: function componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    // smooth scroll to selected option
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.scrollToSelected(120);
    }
  },
  onSelect: function onSelect(value) {
    var _props = this.props,
        onSelect = _props.onSelect,
        type = _props.type;

    onSelect(type, value);
  },
  getOptions: function getOptions() {
    var _this = this;

    var _props2 = this.props,
        options = _props2.options,
        selectedIndex = _props2.selectedIndex,
        prefixCls = _props2.prefixCls;

    return options.map(function (item, index) {
      var _classnames;

      var cls = (0, _classnames4["default"])((_classnames = {}, (0, _defineProperty3["default"])(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), (0, _defineProperty3["default"])(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
      var onclick = null;
      if (!item.disabled) {
        onclick = _this.onSelect.bind(_this, item.value);
      }
      return _react2["default"].createElement(
        'li',
        {
          className: cls,
          key: index,
          onClick: onclick,
          disabled: item.disabled
        },
        item.value
      );
    });
  },
  scrollToSelected: function scrollToSelected(duration) {
    // move to selected item
    var select = _reactDom2["default"].findDOMNode(this);
    var list = _reactDom2["default"].findDOMNode(this.refs.list);
    if (!list) {
      return;
    }
    var index = this.props.selectedIndex;
    if (index < 0) {
      index = 0;
    }
    var topOption = list.children[index];
    var to = topOption.offsetTop;
    scrollTo(select, to, duration);
  },
  handleMouseEnter: function handleMouseEnter(e) {
    this.setState({ active: true });
    this.props.onMouseEnter(e);
  },
  handleMouseLeave: function handleMouseLeave() {
    this.setState({ active: false });
  },
  render: function render() {
    var _classnames2;

    if (this.props.options.length === 0) {
      return null;
    }

    var prefixCls = this.props.prefixCls;

    var cls = (0, _classnames4["default"])((_classnames2 = {}, (0, _defineProperty3["default"])(_classnames2, prefixCls + '-select', 1), (0, _defineProperty3["default"])(_classnames2, prefixCls + '-select-active', this.state.active), _classnames2));

    return _react2["default"].createElement(
      'div',
      {
        className: cls,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      _react2["default"].createElement(
        'ul',
        { ref: 'list' },
        this.getOptions()
      )
    );
  }
});

exports["default"] = Select;
module.exports = exports['default'];

/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = arguments;
  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

module.exports = createChainedFunction;

/***/ }),

/***/ 1805:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/lodash/_baseFor.js");

/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/lodash/_baseUniq.js");

/***/ }),

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/lodash/isArrayLikeObject.js");

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propertyUtils = __webpack_require__(710);

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

function force(x, y) {
  return x + y;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = elem.ownerDocument;
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  force(elem.offsetTop, elem.offsetLeft);
  if ('left' in offset || 'top' in offset) {
    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  (0, _propertyUtils.setTransformXY)(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
    setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

exports["default"] = utils;
module.exports = exports['default'];

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"select":"Select__select--zF9hu","active":"Select__active--Y-VoF","dropdown":"Select__dropdown--Sxy1D","dropdown-menu":"Select__dropdown-menu--3Mo1T","dropdown-menu-item":"Select__dropdown-menu-item--3Pfku","dropdown-menu-item-selected":"Select__dropdown-menu-item-selected--3fbaf","selectLabel":"Select__selectLabel--2D1LR","selectArrow":"Select__selectArrow--WmzLP","controlDisabled":"Select__controlDisabled--3wRV5"};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkbox_css__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Checkbox_css__);






/**
 * Checkbox
 */

var Checkbox = function Checkbox(props) {
  var _classnames;

  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.container, props.isDisabled && __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.disable, props.className),
    onClick: function onClick() {
      if (props.isDisabled) return;
      var v = typeof props.input.value === 'undefined' ? props.initialValue : props.input.value;
      if (props.onChange) props.onChange(!v);
      props.input.onChange(!v, props.text, props.id);
    }
  }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('input', {
    type: 'Checkbox',
    className: __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.checkbox,
    disabled: props.isDisabled ? 'disabled' : false,
    checked: typeof props.input.value === 'undefined' ? props.initialValue : props.input.value,
    onChange: function onChange() {}
  }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('i', {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.selected, props.input.value), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.unselected, !props.input.value), _classnames))
  }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
    className: __WEBPACK_IMPORTED_MODULE_4__Checkbox_css___default.a.text
  }, void 0, props.text));
};

Checkbox.defaultProps = {
  initialValue: false
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_electronAPI__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_simpleEncrypt__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTrialInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAgentUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAttachTicketURL; });
/* harmony export (immutable) */ __webpack_exports__["a"] = gotoSpecificUrl;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return gotoVisitorChatDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return gotoPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return gotoBuyNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return gotoDashboad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return gotoAgentsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return gotoAttachTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getChatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getAgentNumber; });
/* unused harmony export checkAgentChatFileSixe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSoundUrl; });






var getTrialInfo = function getTrialInfo(state) {
  var trialInfo = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["O" /* getTrialInfo */](state);
  if (!trialInfo) return '';

  if (trialInfo.trialPeriodReminderDays > 0 && !trialInfo.haveBillingInfo) {
    return 'Free trial ' + trialInfo.trialPeriodReminderDays + ' days left';
  } else if (trialInfo.trialPeriodReminderDays === 0) {
    return 'You free trial will expire today!';
  }
  return '';
};

var getAgentUrls = function getAgentUrls(state) {
  var isWeb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var siteId = state.agent.siteId;
  var email = state.agent.email;
  var password = escape(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_simpleEncrypt__["a" /* encrypt */])(state.agent.password));
  var purchaseUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["P" /* getBillingURL */](state) + '/BuyNowRedirect.aspx?siteId=' + siteId;
  var dashBoardUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["Q" /* getLiveChatDashboardUrl */](state) + '?siteId=' + siteId;
  var addAgentsUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["R" /* getAdminAddAgentsUrl */](state) + '?siteId=' + siteId;
  var loginUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["G" /* getLoginUrl */](state);
  if (isWeb) return [isWeb, dashBoardUrl, purchaseUrl];
  var autoLoginUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["H" /* getAutoLoginManagerUrl */](state) + '?siteId=' + siteId + '&email=' + email + '&password=' + password;
  return { isWeb: isWeb,
    dashBoardUrl: dashBoardUrl,
    purchaseUrl: purchaseUrl,
    // attachTicketUrl,
    loginUrl: loginUrl,
    autoLoginUrl: autoLoginUrl,
    addAgentsUrl: addAgentsUrl };
};

var getAttachTicketURL = function getAttachTicketURL(state, ticketId) {
  var isWeb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var siteId = state.agent.siteId;
  var email = state.agent.email;
  var password = escape(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_simpleEncrypt__["a" /* encrypt */])(state.agent.password));
  var attachTicketUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["S" /* getAttachTicketURL */](state) + '?siteId=' + siteId + '#ticket' + ticketId;
  var loginUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["G" /* getLoginUrl */](state);
  if (isWeb) return [isWeb];
  var autoLoginUrl = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["H" /* getAutoLoginManagerUrl */](state) + '?siteId=' + siteId + '&email=' + email + '&password=' + password;
  return {
    isWeb: isWeb,
    attachTicketUrl: attachTicketUrl,
    loginUrl: loginUrl,
    autoLoginUrl: autoLoginUrl
  };
};

function gotoSpecificUrl(isWeb, url, loginUrl, autoLoginUrl) {
  var currentWindow =  true ? window.open('') : null;
  if (isWeb) {
    currentWindow.location = url;
    return;
  }
  __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(autoLoginUrl).then(function (rsp) {
    var skipUrl = loginUrl + '?sessionId=' + rsp.data + '&retUrl=' + escape(url);
    if (true) {
      currentWindow.location = skipUrl;
    } else {
      shell.openExternal(skipUrl);
    }
  });
}

var gotoVisitorChatDetail = function gotoVisitorChatDetail(_ref) {
  var purchaseUrl = _ref.purchaseUrl,
      loginUrl = _ref.loginUrl,
      autoLoginUrl = _ref.autoLoginUrl;

  gotoSpecificUrl(false, purchaseUrl, loginUrl, autoLoginUrl);
};

var gotoPurchase = function gotoPurchase(_ref2) {
  var isWeb = _ref2.isWeb,
      purchaseUrl = _ref2.purchaseUrl,
      loginUrl = _ref2.loginUrl,
      autoLoginUrl = _ref2.autoLoginUrl;

  gotoSpecificUrl(isWeb, purchaseUrl, loginUrl, autoLoginUrl);
};

var gotoBuyNow = function gotoBuyNow(_ref3) {
  var isWeb = _ref3.isWeb,
      buyNowUrl = _ref3.buyNowUrl,
      loginUrl = _ref3.loginUrl,
      autoLoginUrl = _ref3.autoLoginUrl;

  gotoSpecificUrl(isWeb, buyNowUrl, loginUrl, autoLoginUrl);
};

var gotoDashboad = function gotoDashboad(_ref4) {
  var isWeb = _ref4.isWeb,
      dashBoardUrl = _ref4.dashBoardUrl,
      loginUrl = _ref4.loginUrl,
      autoLoginUrl = _ref4.autoLoginUrl;

  gotoSpecificUrl(isWeb, dashBoardUrl, loginUrl, autoLoginUrl);
};

var gotoAgentsList = function gotoAgentsList(_ref5) {
  var isWeb = _ref5.isWeb,
      addAgentsUrl = _ref5.addAgentsUrl,
      loginUrl = _ref5.loginUrl,
      autoLoginUrl = _ref5.autoLoginUrl;

  gotoSpecificUrl(isWeb, addAgentsUrl, loginUrl, autoLoginUrl);
};

var gotoAttachTicket = function gotoAttachTicket(_ref6) {
  var isWeb = _ref6.isWeb,
      attachTicketUrl = _ref6.attachTicketUrl,
      loginUrl = _ref6.loginUrl,
      autoLoginUrl = _ref6.autoLoginUrl;

  gotoSpecificUrl(isWeb, attachTicketUrl, loginUrl, autoLoginUrl);
};

var getChatNumber = function getChatNumber(state) {
  if (__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["T" /* getCurrentTab */](state) === __WEBPACK_IMPORTED_MODULE_2__constants_enums__["e" /* agentTabs */].chat) return 0;
  return __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["U" /* getChats */](state).reduce(function (count, val) {
    if (__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["V" /* getIsUnfinishedWrapup */](state, val.get('id')) && !__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["W" /* getWrapupSubmitted */](state, val.get('id'))) {
      return count + 1;
    }
    var status = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["r" /* getVisitorByChatId */](state, val.get('id')).get('status');
    if (status === __WEBPACK_IMPORTED_MODULE_2__constants_enums__["d" /* chatStatus */].waitingForChat || status === __WEBPACK_IMPORTED_MODULE_2__constants_enums__["d" /* chatStatus */].transferring) {
      return count + 1;
    }
    return count + val.get('unreadMessages');
  }, 0);
};

var getAgentNumber = function getAgentNumber(state) {
  if (__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["T" /* getCurrentTab */](state) === __WEBPACK_IMPORTED_MODULE_2__constants_enums__["e" /* agentTabs */].agent) return 0;
  return __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["X" /* getAgentChats */](state).reduce(function (sum, val) {
    return sum + val.get('unreadMessages');
  }, 0);
};
var checkAgentChatFileSixe = function checkAgentChatFileSixe(state, file) {
  return __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["Y" /* getAgentChatFileSize */](state) * 1024 * 1024 < file.size;
};

var getSoundUrl = function getSoundUrl(state) {
  return __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["Z" /* getSoundUrl */](state);
};

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return objectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fieldType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return condition_Chats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return condition_City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return condition_Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return condition_CurrentPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return condition_Keywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return condition_ReferrerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return condition_SearchEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return condition_State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return condition_Visits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return condition_Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return condition_Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return condition_Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return condition_Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return condition_IP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return condition_Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return condition_TimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return condition_LandingPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return condition_ChatRequestingPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return condition_PreChat_ProductServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return condition_StateOrProvince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return condition_Browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return condition_OperatingSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return condition_ScreenResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return condition_FlashVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return condition_Department; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return condition_StartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return condition_EndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return condition_Transcript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return condition_CustomVariablePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return condition_PreChat_CustomFieldPrefix; });


var objectType = {
  unknown: -1,
  contact: 0,
  account: 1,
  lead: 2,
  case: 3,
  task: 4
};

var fieldType = {
  bool: 0,
  percent: 1,
  currency: 2,
  reference: 3,
  date: 4,
  dateTime: 5,
  location: 6,
  email: 7,
  phone: 8,
  text: 9,
  textarea: 10,
  picklist: 11,
  multiPicklist: 12,
  double: 13,
  string: 14,
  id: 15,
  int: 16
};

var object = {
  id: 'id',
  name: 'name'
};

var contact = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
  accountsite: 'accountsite',
  accountname: 'accountname'
}, object);

var account = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
  site: 'site',
  owner: 'owner',
  type: 'type'
}, object);

var user = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
  role: 'role'
}, object);

var condition_Chats = 'Chats';
var condition_City = 'City';
var condition_Country = 'Country';
var condition_CurrentPageUrl = 'CurrentPageUrl';
var condition_Keywords = 'Keywords';
var condition_ReferrerUrl = 'ReferrerUrl';
var condition_SearchEngine = 'SearchEngine';
var condition_State = 'State';
var condition_Visits = 'Visits';
var condition_Email = 'Email';
var condition_Name = 'Name';
var condition_Phone = 'Phone';
var condition_Company = 'Company';
var condition_IP = 'IP';
var condition_Language = 'Language';
var condition_TimeZone = 'TimeZone';
var condition_LandingPageUrl = 'LandingPageUrl';
var condition_ChatRequestingPageUrl = 'ChatRequestingPageUrl';
var condition_PreChat_ProductServices = 'ProductServices';
var condition_StateOrProvince = 'State/Province';
var condition_Browser = 'Browser';
var condition_OperatingSystem = 'OperatingSystem';
var condition_ScreenResolution = 'ScreenResolution';
var condition_FlashVersion = 'FlashVersion';
var condition_Department = 'Department';
var condition_StartTime = 'StartTime';
var condition_EndTime = 'EndTime';
var condition_Transcript = 'Transcript';
var condition_CustomVariablePrefix = '__CustomVariable__';
var condition_PreChat_CustomFieldPrefix = '__PreChat_CustomField__';

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(109),
    castSlice = __webpack_require__(296),
    charsEndIndex = __webpack_require__(688),
    charsStartIndex = __webpack_require__(712),
    stringToArray = __webpack_require__(297),
    toString = __webpack_require__(50);

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createGUID;
var charCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
/* eslint-disable no-plusplus*/
function createGUID() {
  var uid = new Array(36);
  var index = 0;

  for (var i = 0; i < 8; i++) {
    uid[index++] = charCodes[Math.floor(Math.random() * 16)];
  }
  for (var _i = 0; _i < 3; _i++) {
    uid[index++] = 45;
    for (var j = 0; j < 4; j++) {
      uid[index++] = charCodes[Math.floor(Math.random() * 16)];
    }
  }
  uid[index++] = 45;

  var time = Date.now();
  var timeString = ("0000000" + time.toString(16).toUpperCase()).substr(-8);
  for (var _i2 = 0; _i2 < 8; _i2++) {
    uid[index++] = timeString.charCodeAt(_i2);
  }
  for (var _i3 = 0; _i3 < 4; _i3++) {
    uid[index++] = charCodes[Math.floor(Math.random() * 16)];
  }
  return String.fromCharCode.apply(null, uid);
}

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"Input__input--IK_v3","attachTicket":"Input__attachTicket--2WXZL","error":"Input__error--BLFyS","prependContainer":"Input__prependContainer--5Bnrv","prepend":"Input__prepend--17Ixw","prependIcon":"Input__prependIcon--1kx84","defaultIcon":"Input__defaultIcon--2IPt7"};

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(692);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Select_css__);





var Option = function Option(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
    unselectable: 'unselectable',
    onMouseDown: function onMouseDown() {
      props.onChange(props.value);
    },
    id: props.value === props.selectedValue ? props.id : '',
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Select_css___default.a['dropdown-menu-item'], props.value === props.selectedValue && __WEBPACK_IMPORTED_MODULE_3__Select_css___default.a['dropdown-menu-item-selected'], props.className),
    role: 'menuitem'
  }, void 0, props.text);
};

/* harmony default export */ __webpack_exports__["a"] = (Option);

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(199);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = element.ownerDocument;
  var body = doc.body;
  var parent = void 0;
  var positionStyle = _utils2["default"].css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = _utils2["default"].css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

exports["default"] = getOffsetParent;
module.exports = exports['default'];

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
exports["default"] = util;
module.exports = exports['default'];

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LazyRenderBox = _react2["default"].createClass({
  displayName: 'LazyRenderBox',

  propTypes: {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    visible: _react.PropTypes.bool,
    hiddenClassName: _react.PropTypes.string
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  },
  render: function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = (0, _objectWithoutProperties3["default"])(_props, ['hiddenClassName', 'visible']);


    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return _react2["default"].createElement('div', props);
    }

    return _react2["default"].Children.only(props.children);
  }
});

exports["default"] = LazyRenderBox;
module.exports = exports['default'];

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return agentGetSFIntegrationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return agentGetSFContactFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return agentGetSFAccountFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return agentGetSFLeadFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return agentCreateSFContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return agentEditSFContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return agentCreateSFLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return agentEditSFLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return agentCreateSFCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return agentAttachSFCaseToContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return agentAttachSFTaskToLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return agentLookupSFObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return agentCheckSFAutoIntegrationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onCancelClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onEditOrCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleSubmitSalesforce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleAttach; });




var agentGetSFIntegrationConfig = function agentGetSFIntegrationConfig(siteId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_13" /* agentGetSFIntegrationConfig */], siteId);
};
var agentGetSFContactFields = function agentGetSFContactFields(siteId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_14" /* agentGetSFContactFields */], siteId);
};
var agentGetSFAccountFields = function agentGetSFAccountFields(siteId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_15" /* agentGetSFAccountFields */], siteId);
};
var agentGetSFLeadFields = function agentGetSFLeadFields(siteId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_16" /* agentGetSFLeadFields */], siteId);
};

var agentCreateSFContact = function agentCreateSFContact(visitorId, fieldValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_17" /* agentCreateSFContact */], { visitorId: visitorId, fieldValues: fieldValues });
};
var agentEditSFContact = function agentEditSFContact(visitorId, fieldValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_18" /* agentEditSFContact */], { visitorId: visitorId, fieldValues: fieldValues });
};

var agentCreateSFLead = function agentCreateSFLead(visitorId, fieldValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_19" /* agentCreateSFLead */], { visitorId: visitorId, fieldValues: fieldValues });
};
var agentEditSFLead = function agentEditSFLead(visitorId, fieldValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_20" /* agentEditSFLead */], { visitorId: visitorId, fieldValues: fieldValues });
};

var agentCreateSFCase = function agentCreateSFCase(visitorId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_21" /* agentCreateSFCase */], visitorId);
};
var agentAttachSFCaseToContact = function agentAttachSFCaseToContact(visitorId, contactId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_22" /* agentAttachSFCaseToContact */], { visitorId: visitorId, contactId: contactId });
};
var agentAttachSFTaskToLead = function agentAttachSFTaskToLead(visitorId, leadId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_23" /* agentAttachSFTaskToLead */], { visitorId: visitorId, leadId: leadId });
};

var agentLookupSFObject = function agentLookupSFObject(type, keyword, next) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_24" /* agentLookupSFObject */], { type: type, keyword: keyword }, next);
};

var agentCheckSFAutoIntegrationResult = function agentCheckSFAutoIntegrationResult(visitorId) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__web__["o" /* createWebRequest */])(__WEBPACK_IMPORTED_MODULE_0__constants_enums_chatAction__["_25" /* agentCheckSFAutoIntegrationResult */], visitorId);
};

var onCancelClick = function onCancelClick() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["o" /* updateSalesforce */],
    payload: {
      showForm: false
    }
  };
};
var onEditOrCreate = function onEditOrCreate(type) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["o" /* updateSalesforce */],
    payload: {
      showForm: true,
      editType: type,
      ifSalesforceLoading: false,
      salesforceSubmitError: ''
    }
  };
};

var reset = function reset() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["o" /* updateSalesforce */],
    payload: {
      showForm: false,
      editType: 0,
      ifSalesforceLoading: false,
      salesforceSubmitError: '',
      waiting: false,
      errorMessage: ''
    }
  };
};

var handleSubmitSalesforce = function handleSubmitSalesforce() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["o" /* updateSalesforce */],
    payload: {
      ifSalesforceLoading: true,
      salesforceSubmitError: ''
    }
  };
};

var handleAttach = function handleAttach() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_visitorDetails__["o" /* updateSalesforce */],
    payload: {
      waiting: true,
      errorMessage: ''
    }
  };
};

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Input_css__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IconInput_css__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IconInput_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__IconInput_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums__ = __webpack_require__(3);











var IconInput = function IconInput(props) {
  var icon = props.icon,
      inputProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(props, ['icon']);

  var className = inputProps.className,
      otherProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(inputProps, ['className']);

  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Input_css___default.a.prependContainer, className, props.showError && props.error && __WEBPACK_IMPORTED_MODULE_5__Input_css___default.a.error)
  }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_5__Input_css___default.a.prependIcon
  }, void 0, icon), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    className: __WEBPACK_IMPORTED_MODULE_6__IconInput_css___default.a.input
  }, otherProps)));
};

IconInput.defaultProps = {};

/* harmony default export */ __webpack_exports__["a"] = (IconInput);

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(181),
    baseClone = __webpack_require__(138),
    baseUnset = __webpack_require__(751),
    castPath = __webpack_require__(112),
    copyObject = __webpack_require__(77),
    customOmitClone = __webpack_require__(752),
    flatRest = __webpack_require__(139),
    getAllKeysIn = __webpack_require__(298);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 683:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_trim__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_trim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_trim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_trigger__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_trigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_trigger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__DropdownMenu__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Select_css__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_helper__ = __webpack_require__(16);



















var cache = void 0;
var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_helper__["e" /* shouldComponentUpdateGen */])('Select', ['options', 'isDisabled'], ['selectValue', 'active']);
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 1],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -1],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Icon_Icon__["a" /* default */], {
  type: 'arrow-down'
});

var Select = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Select, _React$Component);

  function Select(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Select);

    var _this2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Select.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Select)).call(this, props));

    _this2.state = {
      active: false,
      selectValue: _this2.props.input.value
    };
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.onDropdownVisibleChange = _this2.onDropdownVisibleChange.bind(_this2);
    _this2.onPopupFocus = _this2.onPopupFocus.bind(_this2);
    _this2.maybeFocus = _this2.maybeFocus.bind(_this2);
    return _this2;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var active = this.state.active;
      if (nextProps.dropdownHidden && active) {
        active = false;
        this.lastDropdownHidden = true;
      }
      if (nextProps.input.value !== this.props.input.value) {
        this.setState({ selectValue: nextProps.input.value });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dropdownDOMNode = this.refs.trigger.getPopupDomNode();
      if (dropdownDOMNode) {
        dropdownDOMNode.style.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom__["findDOMNode"])(this).offsetWidth + 'px';
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cache = null;
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.input.value !== value) {
        this.props.input.onChange(value);
      }
      this.setState({ active: false });
    }
  }, {
    key: 'onDropdownVisibleChange',
    value: function onDropdownVisibleChange(open) {
      var _this3 = this;

      var state = this.state;

      if (state.active === open) {
        this.maybeFocus(open, false);
        return;
      }
      var nextState = {
        active: open
      };
      if (!open) {
        this.maybeFocus(open, false);
      }
      this.setState(nextState, function () {
        if (open) {
          _this3.maybeFocus(open, false);
        }
      });
    }
  }, {
    key: 'onPopupFocus',
    value: function onPopupFocus() {
      // fix ie scrollbar, focus element again
      this.maybeFocus(true, true);
    }
  }, {
    key: 'maybeFocus',
    value: function maybeFocus(open, needFocus) {
      if (needFocus || open) {
        var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom__["findDOMNode"])(this.container);
        var _document = document,
            activeElement = _document.activeElement;

        if (input && activeElement !== input) {
          input.focus();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          className = _props.className,
          _props$width = _props.width,
          width = _props$width === undefined ? '' : _props$width,
          input = _props.input,
          options = _props.options,
          isDisabled = _props.isDisabled,
          customizeStyle = _props.customizeStyle,
          dropdownClassName = _props.dropdownClassName;

      var optionsMapping = options.reduce(function (_obj, option) {
        var obj = _obj;
        obj[option.value] = option.text || option.value;
        return obj;
      }, {});
      var defaultOptionText = options[0] ? options[0].text || options[0].value : '';
      var text = optionsMapping[input.value] || defaultOptionText;
      var ownStyle = this.props.customizeStyle ? this.props.customizeStyle : {};
      ownStyle.width = width && width > 0 ? width : '100%';
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10_rc_trigger___default.a,
        {
          ref: 'trigger',
          showAction: isDisabled ? [] : ['click'],
          hideAction: ['click'],
          popupPlacement: 'bottomLeft',
          builtinPlacements: BUILT_IN_PLACEMENTS,
          popup: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__DropdownMenu__["a" /* default */], {
            onChange: this.onChange,
            onPopupFocus: this.onPopupFocus,
            options: options,
            selectedValue: this.state.selectValue,
            visible: this.state.active,
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.dropdown, dropdownClassName)
          }),
          popupVisible: this.state.active,
          onPopupVisibleChange: this.onDropdownVisibleChange
        },
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          {
            tabIndex: -1,
            'data-vmselect': this.state.active ? 'open' : 'close',
            style: ownStyle,
            ref: function ref(container) {
              _this4.container = container;
            },
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.select, this.state.active && __WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.active, isDisabled && __WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.controlDisabled, className),
            onBlur: function onBlur() {
              // fix IE ISSUE
              var _this = _this4;
              setTimeout(function () {
                if (_this.state.active) {
                  var containerDOM = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom__["findDOMNode"])(_this.container);
                  if (containerDOM && document.activeElement !== containerDOM) {
                    containerDOM.focus();
                  }
                }
              }, 100);
            },
            onKeyPress: function onKeyPress(event) {
              var keyEv = event.nativeEvent.key.toLowerCase();
              if (!cache || cache.key !== keyEv) {
                cache = { key: keyEv, value: options.filter(function (item) {
                    var temp = __WEBPACK_IMPORTED_MODULE_7_lodash_trim___default()(item.text).substr(0, 1);
                    return temp.toLowerCase() === keyEv;
                  }) };
              }
              if (cache.value.length === 0) return;
              var selectV = _this4.state.selectValue;
              var selectIndex = __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default()(cache.value, function (o) {
                return o.value === selectV;
              });
              if (selectIndex === -1 || selectIndex === cache.value.length - 1) {
                selectIndex = 0;
                selectV = cache.value[selectIndex].value;
              } else {
                selectV = cache.value[selectIndex + 1].value;
              }
              if (_this4.state.active) {
                _this4.setState({
                  selectValue: selectV
                });
              } else {
                _this4.onChange(selectV);
              }
            },
            onKeyDown: function onKeyDown(event) {
              var selectV = _this4.state.selectValue;
              var selectIndex = __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default()(options, function (o) {
                return o.value === selectV;
              });
              switch (event.nativeEvent.keyCode) {
                case 13:
                  event.preventDefault();
                  event.stopPropagation();
                  _this4.onChange(_this4.state.selectValue);
                  _this4.setState({ active: false });
                  break;
                case 27:
                  event.preventDefault();
                  event.stopPropagation();
                  _this4.setState({
                    active: false,
                    selectValue: _this4.props.input.value
                  });
                  break;
                case 40:
                  event.preventDefault();
                  event.stopPropagation();
                  if (selectIndex < options.length - 1) {
                    selectV = options[selectIndex + 1].value;
                  }
                  if (_this4.state.active) {
                    _this4.setState({
                      selectValue: selectV
                    });
                  } else {
                    _this4.onChange(selectV);
                  }
                  break;
                case 38:
                  event.preventDefault();
                  event.stopPropagation();
                  if (selectIndex > 0) {
                    selectV = options[selectIndex - 1].value;
                  }
                  if (_this4.state.active) {
                    _this4.setState({
                      selectValue: selectV
                    });
                  } else {
                    _this4.onChange(selectV);
                  }
                  break;
                default:
                  break;
              }
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
            className: __WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.selectLabel
          }, void 0, text),
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
            className: __WEBPACK_IMPORTED_MODULE_15__Select_css___default.a.selectArrow
          }, void 0, _ref)
        )
      );
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ 684:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Input_css__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Input_css__);











var Input = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Input, _React$Component);

  function Input() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Input);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Input.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Input)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Input, [{
    key: 'render',


    // componentDidMount() {
    //   if (this.props.focusOnMount) {
    //     this.input.focus();
    //   }
    // }

    value: function render() {
      var _props = this.props,
          isDisabled = _props.isDisabled,
          placeholder = _props.placeholder,
          input = _props.input,
          type = _props.type,
          autoComplete = _props.autoComplete,
          maxLength = _props.maxLength,
          className = _props.className,
          meta = _props.meta,
          isReadOnly = _props.isReadOnly,
          inputRef = _props.inputRef,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['isDisabled', 'placeholder', 'input', 'type', 'autoComplete', 'maxLength', 'className', 'meta', 'isReadOnly', 'inputRef']);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, {
        readOnly: isReadOnly ? 'readOnly' : false,
        disabled: isDisabled ? 'disabled' : false,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(className, __WEBPACK_IMPORTED_MODULE_9__Input_css___default.a.input, meta.touched && meta.invalid && __WEBPACK_IMPORTED_MODULE_9__Input_css___default.a.error),
        type: type,
        placeholder: placeholder,
        autoComplete: autoComplete ? 'on' : 'off',
        maxLength: maxLength,
        ref: inputRef
      }, rest));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

Input.defaultProps = {
  type: 'text',
  autoComplete: false
};


/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/object-assign/index.js");

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(180);

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export this package's api
module.exports = __webpack_require__(717);

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(722);

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(691);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(685);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ 694:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_forEach__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_forEach__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scrollIntoView__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Option__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__OptGroup__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Select_css__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_guid__ = __webpack_require__(543);


















function staticSelectGenerator(_ref, gid) {
  var options = _ref.options,
      selectedValue = _ref.selectedValue,
      onChange = _ref.onChange;

  var optionGroups = options.reduce(function (_obj, option, idx) {
    var obj = _obj;
    var group = option.group || '';
    var text = option.text || option.value;
    var component = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Option__["a" /* default */], {
      value: option.value,
      id: gid,
      selectedValue: selectedValue,
      text: text,
      onChange: onChange
    }, gid + '_' + idx);
    if (obj[group]) obj[group].push(component);else obj[group] = [component];
    return obj;
  }, {});
  var optionComponents = [];
  __WEBPACK_IMPORTED_MODULE_8_lodash_forEach___default()(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(optionGroups), function (key) {
    if (key === '') {
      optionComponents = optionComponents.concat(optionGroups[key]);
    } else {
      optionComponents.push(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__OptGroup__["a" /* default */], {
        label: key
      }, void 0, optionGroups[key]));
    }
  });
  return optionComponents;
}

var DropdownMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DropdownMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DropdownMenu.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(DropdownMenu)).call(this, props));

    _this.gid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_guid__["a" /* createGUID */])();
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(DropdownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;
      if (props.visible) {
        this.scrollActiveItemToView();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.selectedValue !== nextProps.selectedValue || this.props.visible !== nextProps.visible || !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.options, nextProps.options)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var props = this.props;
      if (props.visible) {
        this.scrollActiveItemToView();
      }
    }
  }, {
    key: 'scrollActiveItemToView',
    value: function scrollActiveItemToView() {
      // scroll into view
      var activeItem = document.getElementById(this.gid);
      if (activeItem) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__scrollIntoView__["a" /* default */])(activeItem, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_dom__["findDOMNode"])(this.refs.menuWrapper), {
          onlyScrollIfNeeded: true,
          alignWithTop: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.options && this.props.options.length) {
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          'div',
          {
            ref: 'menuWrapper',
            className: this.props.className,
            style: { overflow: 'auto' },
            onFocus: this.props.onPopupFocus,
            onMouseDown: function onMouseDown(event) {
              event.preventDefault();
            }
          },
          __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_jsx___default()('ul', {
            className: __WEBPACK_IMPORTED_MODULE_14__Select_css___default.a['dropdown-menu']
          }, this.gid, staticSelectGenerator(this.props, this.gid))
        );
      }
      return null;
    }
  }]);

  return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Option__ = __webpack_require__(546);






var OptGroup = function OptGroup(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
    unselectable: 'unselectable',
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Select_css___default.a['dropdown-menu-item-group'], props.className),
    role: 'menuitem'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Select_css___default.a['dropdown-menu-item-group-title']
  }, void 0, props.label), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
    className: __WEBPACK_IMPORTED_MODULE_3__Select_css___default.a['dropdown-menu-item-group-list']
  }, void 0, props.children));
};

OptGroup.type = 1;
/* harmony default export */ __webpack_exports__["a"] = (OptGroup);

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(697);


function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].getWindow(container);
  }

  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var offsetTop = config.offsetTop || 0;
  var offsetBottom = config.offsetBottom || 0;

  var isWin = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isWindow(container);
  var elemOffset = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].offset(elem);
  var eh = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].outerHeight(elem);
  var containerOffset = void 0;
  var ch = void 0;
  var containerScroll = void 0;
  var diffTop = void 0;
  var diffBottom = void 0;
  var win = void 0;
  var winScroll = void 0;
  var wh = void 0;

  if (isWin) {
    win = container;
    wh = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].height(win);
    winScroll = {
      top: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].offset(container);
    ch = container.clientHeight;
    containerScroll = {
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      top: elemOffset.top - (containerOffset.top + (parseFloat(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }
  if (onlyScrollIfNeeded) {
    if (diffTop.top >= 0 && diffTop.top + eh <= ch) {
      return;
    }
  }
  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }
}
/* harmony default export */ __webpack_exports__["a"] = (scrollIntoView);

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = void 0;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val = void 0;
  var args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = void 0;
  var key = void 0;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}

var util = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var _i in obj) {
        if (obj.hasOwnProperty(_i)) {
          ret.overflow[_i] = obj.overflow[_i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },

  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(547);
} catch (err) {
  var index = __webpack_require__(547);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports["default"] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(702);

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__(701);

var _componentClasses2 = _interopRequireDefault(_componentClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = (0, _componentClasses2["default"])(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

exports["default"] = cssAnimation;
module.exports = exports['default'];

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(199);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = _utils2["default"].clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return _utils2["default"].mix(pos, size);
}

exports["default"] = adjustForViewport;
module.exports = exports['default'];

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = void 0;
  var y = void 0;

  x = region.left;
  y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

exports["default"] = getAlignOffset;
module.exports = exports['default'];

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getAlignOffset = __webpack_require__(705);

var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var xy = void 0;
  var diff = void 0;
  var p1 = void 0;
  var p2 = void 0;

  xy = {
    left: elRegion.left,
    top: elRegion.top
  };

  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

  diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: xy.left - diff[0] + offset[0] - targetOffset[0],
    top: xy.top - diff[1] + offset[1] - targetOffset[1]
  };
}

exports["default"] = getElFuturePos;
module.exports = exports['default'];

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(199);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
    offset = _utils2["default"].offset(node);
    w = _utils2["default"].outerWidth(node);
    h = _utils2["default"].outerHeight(node);
  } else {
    var win = _utils2["default"].getWindow(node);
    offset = {
      left: _utils2["default"].getWindowScrollLeft(win),
      top: _utils2["default"].getWindowScrollTop(win)
    };
    w = _utils2["default"].viewportWidth(win);
    h = _utils2["default"].viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

exports["default"] = getRegion;
module.exports = exports['default'];

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(199);

var _utils2 = _interopRequireDefault(_utils);

var _getOffsetParent = __webpack_require__(548);

var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = (0, _getOffsetParent2["default"])(element);
  var scrollX = void 0;
  var scrollY = void 0;
  var winSize = void 0;
  var doc = element.ownerDocument;
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
      var pos = _utils2["default"].offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = (0, _getOffsetParent2["default"])(el);
  }

  // Clip by window's viewport.
  scrollX = _utils2["default"].getWindowScrollLeft(win);
  scrollY = _utils2["default"].getWindowScrollTop(win);
  visibleRect.left = Math.max(visibleRect.left, scrollX);
  visibleRect.top = Math.max(visibleRect.top, scrollY);
  winSize = {
    width: _utils2["default"].viewportWidth(win),
    height: _utils2["default"].viewportHeight(win)
  };
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

exports["default"] = getVisibleRectForElement;
module.exports = exports['default'];

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(199);

var _utils2 = _interopRequireDefault(_utils);

var _getOffsetParent = __webpack_require__(548);

var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

var _getVisibleRectForElement = __webpack_require__(708);

var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

var _adjustForViewport = __webpack_require__(704);

var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

var _getRegion = __webpack_require__(707);

var _getRegion2 = _interopRequireDefault(_getRegion);

var _getElFuturePos = __webpack_require__(706);

var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// http://yiminghe.iteye.com/blog/1124720

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  _utils2["default"].each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

function domAlign(el, refNode, align) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var target = align.target || refNode;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};

  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = (0, _getRegion2["default"])(source);
  // 参照节点所占的区域, left/top/width/height
  var refNodeRegion = (0, _getRegion2["default"])(target);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, refNodeRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
      _utils2["default"].mix(newElRegion, elFuturePos);
    }

    // 检查反下后的位置是否可以放下了
    // 如果仍然放不下只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  _utils2["default"].offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

domAlign.__getOffsetParent = _getOffsetParent2["default"];

domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

exports["default"] = domAlign;
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

module.exports = exports['default'];

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransformName = getTransformName;
exports.setTransitionProperty = setTransitionProperty;
exports.getTransitionProperty = getTransitionProperty;
exports.getTransformXY = getTransformXY;
exports.setTransformXY = setTransformXY;
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(180);

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domAlign = __webpack_require__(709);

var _domAlign2 = _interopRequireDefault(_domAlign);

var _addEventListener = __webpack_require__(716);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _isWindow = __webpack_require__(715);

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

var Align = _react2["default"].createClass({
  displayName: 'Align',

  propTypes: {
    childrenProps: _react.PropTypes.object,
    align: _react.PropTypes.object.isRequired,
    target: _react.PropTypes.func,
    onAlign: _react.PropTypes.func,
    monitorBufferTime: _react.PropTypes.number,
    monitorWindowResize: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    children: _react.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      target: function target() {
        return window;
      },
      onAlign: function onAlign() {},

      monitorBufferTime: 50,
      monitorWindowResize: false,
      disabled: false
    };
  },
  componentDidMount: function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      if (prevProps.disabled || prevProps.align !== props.align) {
        reAlign = true;
      } else {
        var lastTarget = prevProps.target();
        var currentTarget = props.target();
        if ((0, _isWindow2["default"])(lastTarget) && (0, _isWindow2["default"])(currentTarget)) {
          reAlign = false;
        } else if (lastTarget !== currentTarget) {
          reAlign = true;
        }
      }
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.stopMonitorWindowResize();
  },
  startMonitorWindowResize: function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = (0, _addEventListener2["default"])(window, 'resize', this.bufferMonitor);
    }
  },
  stopMonitorWindowResize: function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  },
  forceAlign: function forceAlign() {
    var props = this.props;
    if (!props.disabled) {
      var source = _reactDom2["default"].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2["default"])(source, props.target(), props.align));
    }
  },
  render: function render() {
    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = _react2["default"].Children.only(children);
    if (childrenProps) {
      var newProps = {};
      for (var prop in childrenProps) {
        if (childrenProps.hasOwnProperty(prop)) {
          newProps[prop] = this.props[childrenProps[prop]];
        }
      }
      return _react2["default"].cloneElement(child, newProps);
    }
    return child;
  }
});

exports["default"] = Align;
module.exports = exports['default'];

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Align = __webpack_require__(713);

var _Align2 = _interopRequireDefault(_Align);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Align2["default"]; // export this package's api

module.exports = exports['default'];

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isWindow;
function isWindow(obj) {
  /* eslint no-eq-null: 0 */
  /* eslint eqeqeq: 0 */
  return obj != null && obj == obj.window;
}
module.exports = exports['default'];

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(545);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2["default"].unstable_batchedUpdates ? function run(e) {
    _reactDom2["default"].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2["default"])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ChildrenUtils = __webpack_require__(719);

var _AnimateChild = __webpack_require__(718);

var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

var _util = __webpack_require__(549);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (_react2["default"].isValidElement(children)) {
    if (!children.key) {
      return _react2["default"].cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = _react2["default"].createClass({
  displayName: 'Animate',

  propTypes: {
    component: _react2["default"].PropTypes.any,
    componentProps: _react2["default"].PropTypes.object,
    animation: _react2["default"].PropTypes.object,
    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
    transitionEnter: _react2["default"].PropTypes.bool,
    transitionAppear: _react2["default"].PropTypes.bool,
    exclusive: _react2["default"].PropTypes.bool,
    transitionLeave: _react2["default"].PropTypes.bool,
    onEnd: _react2["default"].PropTypes.func,
    onEnter: _react2["default"].PropTypes.func,
    onLeave: _react2["default"].PropTypes.func,
    onAppear: _react2["default"].PropTypes.func,
    showProp: _react2["default"].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: {},
      component: 'span',
      componentProps: {},
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: false,
      onEnd: noop,
      onEnter: noop,
      onLeave: noop,
      onAppear: noop
    };
  },
  getInitialState: function getInitialState() {
    this.currentlyAnimatingKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
    return {
      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var showProp = this.props.showProp;
    var children = this.state.children;
    if (showProp) {
      children = children.filter(function (child) {
        return !!child.props[showProp];
      });
    }
    children.forEach(function (child) {
      if (child) {
        _this.performAppear(child.key);
      }
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    this.nextProps = nextProps;
    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
    var props = this.props;
    // exclusive needs immediate response
    if (props.exclusive) {
      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
        _this2.stop(key);
      });
    }
    var showProp = props.showProp;
    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
    // last props children if exclusive
    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
    // in case destroy in showProp mode
    var newChildren = [];
    if (showProp) {
      currentChildren.forEach(function (currentChild) {
        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
        var newChild = void 0;
        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
        } else {
          newChild = nextChild;
        }
        if (newChild) {
          newChildren.push(newChild);
        }
      });
      nextChildren.forEach(function (nextChild) {
        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
          newChildren.push(nextChild);
        }
      });
    } else {
      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
    }

    // need render to avoid update
    this.setState({
      children: newChildren
    });

    nextChildren.forEach(function (child) {
      var key = child && child.key;
      if (child && currentlyAnimatingKeys[key]) {
        return;
      }
      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
      if (showProp) {
        var showInNext = child.props[showProp];
        if (hasPrev) {
          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
          if (!showInNow && showInNext) {
            _this2.keysToEnter.push(key);
          }
        } else if (showInNext) {
          _this2.keysToEnter.push(key);
        }
      } else if (!hasPrev) {
        _this2.keysToEnter.push(key);
      }
    });

    currentChildren.forEach(function (child) {
      var key = child && child.key;
      if (child && currentlyAnimatingKeys[key]) {
        return;
      }
      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
      if (showProp) {
        var showInNow = child.props[showProp];
        if (hasNext) {
          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
          if (!showInNext && showInNow) {
            _this2.keysToLeave.push(key);
          }
        } else if (showInNow) {
          _this2.keysToLeave.push(key);
        }
      } else if (!hasNext) {
        _this2.keysToLeave.push(key);
      }
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);
    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  },
  performEnter: function performEnter(key) {
    // may already remove by exclusive
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
    }
  },
  performAppear: function performAppear(key) {
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
    }
  },
  handleDoneAdding: function handleDoneAdding(key, type) {
    var props = this.props;
    delete this.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== this.nextProps) {
      return;
    }
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    if (!this.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      this.performLeave(key);
    } else {
      if (type === 'appear') {
        if (_util2["default"].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (_util2["default"].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  },
  performLeave: function performLeave(key) {
    // may already remove by exclusive
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
    }
  },
  handleDoneLeaving: function handleDoneLeaving(key) {
    var props = this.props;
    delete this.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== this.nextProps) {
      return;
    }
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    // in case state change is too fast
    if (this.isValidChildByKey(currentChildren, key)) {
      this.performEnter(key);
    } else {
      var end = function end() {
        if (_util2["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      /* eslint react/no-is-mounted:0 */
      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
        this.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  },
  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
    var showProp = this.props.showProp;
    if (showProp) {
      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
    }
    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
  },
  stop: function stop(key) {
    delete this.currentlyAnimatingKeys[key];
    var component = this.refs[key];
    if (component) {
      component.stop();
    }
  },
  render: function render() {
    var props = this.props;
    this.nextProps = props;
    var stateChildren = this.state.children;
    var children = null;
    if (stateChildren) {
      children = stateChildren.map(function (child) {
        if (child === null || child === undefined) {
          return child;
        }
        if (!child.key) {
          throw new Error('must set key for <rc-animate> children');
        }
        return _react2["default"].createElement(
          _AnimateChild2["default"],
          {
            key: child.key,
            ref: child.key,
            animation: props.animation,
            transitionName: props.transitionName,
            transitionEnter: props.transitionEnter,
            transitionAppear: props.transitionAppear,
            transitionLeave: props.transitionLeave
          },
          child
        );
      });
    }
    var Component = props.component;
    if (Component) {
      var passedProps = props;
      if (typeof Component === 'string') {
        passedProps = _extends({
          className: props.className,
          style: props.style
        }, props.componentProps);
      }
      return _react2["default"].createElement(
        Component,
        passedProps,
        children
      );
    }
    return children[0] || null;
  }
});

exports["default"] = Animate;
module.exports = exports['default'];

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cssAnimation = __webpack_require__(703);

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _util = __webpack_require__(549);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = _react2["default"].createClass({
  displayName: 'AnimateChild',

  propTypes: {
    children: _react2["default"].PropTypes.any
  },

  componentWillUnmount: function componentWillUnmount() {
    this.stop();
  },
  componentWillEnter: function componentWillEnter(done) {
    if (_util2["default"].isEnterSupported(this.props)) {
      this.transition('enter', done);
    } else {
      done();
    }
  },
  componentWillAppear: function componentWillAppear(done) {
    if (_util2["default"].isAppearSupported(this.props)) {
      this.transition('appear', done);
    } else {
      done();
    }
  },
  componentWillLeave: function componentWillLeave(done) {
    if (_util2["default"].isLeaveSupported(this.props)) {
      this.transition('leave', done);
    } else {
      // always sync, do not interupt with react component life cycle
      // update hidden -> animate hidden ->
      // didUpdate -> animate leave -> unmount (if animate is none)
      done();
    }
  },
  transition: function transition(animationType, finishCallback) {
    var _this = this;

    var node = _reactDom2["default"].findDOMNode(this);
    var props = this.props;
    var transitionName = props.transitionName;
    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
    this.stop();
    var end = function end() {
      _this.stopper = null;
      finishCallback();
    };
    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
      var activeName = name + '-active';
      if (nameIsObj && transitionName[animationType + 'Active']) {
        activeName = transitionName[animationType + 'Active'];
      }
      this.stopper = (0, _cssAnimation2["default"])(node, {
        name: name,
        active: activeName
      }, end);
    } else {
      this.stopper = props.animation[animationType](node, end);
    }
  },
  stop: function stop() {
    var stopper = this.stopper;
    if (stopper) {
      this.stopper = null;
      stopper.stop();
    }
  },
  render: function render() {
    return this.props.children;
  }
});

exports["default"] = AnimateChild;
module.exports = exports['default'];

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArrayChildren = toArrayChildren;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
exports.isSameChildren = isSameChildren;
exports.mergeChildren = mergeChildren;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = __webpack_require__(714);

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = __webpack_require__(689);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = __webpack_require__(721);

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = __webpack_require__(550);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Popup = _react2["default"].createClass({
  displayName: 'Popup',

  propTypes: {
    visible: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    getClassNameFromAlign: _react.PropTypes.func,
    onAlign: _react.PropTypes.func,
    getRootDomNode: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func,
    align: _react.PropTypes.any,
    destroyPopupOnHide: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    onMouseLeave: _react.PropTypes.func
  },

  componentDidMount: function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  },
  onAlign: function onAlign(popupDomNode, align) {
    var props = this.props;
    var alignClassName = props.getClassNameFromAlign(props.align);
    var currentAlignClassName = props.getClassNameFromAlign(align);
    if (alignClassName !== currentAlignClassName) {
      this.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = this.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  },
  getPopupDomNode: function getPopupDomNode() {
    return _reactDom2["default"].findDOMNode(this.refs.popup);
  },
  getTarget: function getTarget() {
    return this.props.getRootDomNode();
  },
  getMaskTransitionName: function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  },
  getTransitionName: function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  },
  getClassName: function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  },
  getPopupElement: function getPopupElement() {
    var props = this.props;
    var align = props.align,
        style = props.style,
        visible = props.visible,
        prefixCls = props.prefixCls,
        destroyPopupOnHide = props.destroyPopupOnHide;

    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';
    if (!visible) {
      this.currentAlignClassName = null;
    }
    var newStyle = (0, _extends3["default"])({}, style, this.getZIndexStyle());
    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: 'popup',
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return _react2["default"].createElement(
        _rcAnimate2["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? _react2["default"].createElement(
          _rcAlign2["default"],
          {
            target: this.getTarget,
            key: 'popup',
            ref: this.saveAlign,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          _react2["default"].createElement(
            _PopupInner2["default"],
            (0, _extends3["default"])({
              visible: true
            }, popupInnerProps),
            props.children
          )
        ) : null
      );
    }
    return _react2["default"].createElement(
      _rcAnimate2["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      _react2["default"].createElement(
        _rcAlign2["default"],
        {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlign,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        _react2["default"].createElement(
          _PopupInner2["default"],
          (0, _extends3["default"])({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          props.children
        )
      )
    );
  },
  getZIndexStyle: function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  },
  getMaskElement: function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = _react2["default"].createElement(
          _rcAnimate2["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  },
  saveAlign: function saveAlign(align) {
    this.alignInstance = align;
  },
  render: function render() {
    return _react2["default"].createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  }
});

exports["default"] = Popup;
module.exports = exports['default'];

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _LazyRenderBox = __webpack_require__(550);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopupInner = _react2["default"].createClass({
  displayName: 'PopupInner',

  propTypes: {
    hiddenClassName: _react.PropTypes.string,
    className: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    children: _react.PropTypes.any
  },
  render: function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return _react2["default"].createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      _react2["default"].createElement(
        _LazyRenderBox2["default"],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  }
});

exports["default"] = PopupInner;
module.exports = exports['default'];

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contains = __webpack_require__(725);

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = __webpack_require__(724);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = __webpack_require__(720);

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = __webpack_require__(723);

var _getContainerRenderMixin = __webpack_require__(726);

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

var Trigger = _react2["default"].createClass({
  displayName: 'Trigger',

  propTypes: {
    children: _react.PropTypes.any,
    action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    showAction: _react.PropTypes.any,
    hideAction: _react.PropTypes.any,
    getPopupClassNameFromAlign: _react.PropTypes.any,
    onPopupVisibleChange: _react.PropTypes.func,
    afterPopupVisibleChange: _react.PropTypes.func,
    popup: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]).isRequired,
    popupStyle: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    popupClassName: _react.PropTypes.string,
    popupPlacement: _react.PropTypes.string,
    builtinPlacements: _react.PropTypes.object,
    popupTransitionName: _react.PropTypes.string,
    popupAnimation: _react.PropTypes.any,
    mouseEnterDelay: _react.PropTypes.number,
    mouseLeaveDelay: _react.PropTypes.number,
    zIndex: _react.PropTypes.number,
    focusDelay: _react.PropTypes.number,
    blurDelay: _react.PropTypes.number,
    getPopupContainer: _react.PropTypes.func,
    getDocument: _react.PropTypes.func,
    destroyPopupOnHide: _react.PropTypes.bool,
    mask: _react.PropTypes.bool,
    maskClosable: _react.PropTypes.bool,
    onPopupAlign: _react.PropTypes.func,
    popupAlign: _react.PropTypes.object,
    popupVisible: _react.PropTypes.bool,
    maskTransitionName: _react.PropTypes.string,
    maskAnimation: _react.PropTypes.string
  },

  mixins: [(0, _getContainerRenderMixin2["default"])({
    autoMount: false,

    isVisible: function isVisible(instance) {
      return instance.state.popupVisible;
    },
    getContainer: function getContainer(instance) {
      var props = instance.props;

      var popupContainer = document.createElement('div');
      // Make sure default popup container will never cause scrollbar appearing
      // https://github.com/react-component/trigger/issues/41
      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      return popupContainer;
    }
  })],

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop,
      afterPopupVisibleChange: noop,
      onPopupAlign: noop,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return {
      popupVisible: popupVisible
    };
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    this.renderComponent(null, function () {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    });

    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && this.isClickToHide()) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = (0, _addEventListener2["default"])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = (0, _addEventListener2["default"])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      return;
    }

    this.clearOutsideHandler();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  },
  onMouseEnter: function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },
  onMouseLeave: function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onPopupMouseEnter: function onPopupMouseEnter() {
    this.clearDelayTimer();
  },
  onPopupMouseLeave: function onPopupMouseLeave(e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onFocus: function onFocus(e) {
    this.fireEvents('onFocus', e);
    // incase focusin and focusout
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  },
  onMouseDown: function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  },
  onTouchStart: function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  },
  onBlur: function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  },
  onClick: function onClick(event) {
    this.fireEvents('onClick', event);
    // focus will trigger click
    if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  },
  onDocumentClick: function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = (0, _reactDom.findDOMNode)(this);
    var popupNode = this.getPopupDomNode();
    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
      this.close();
    }
  },
  getPopupDomNode: function getPopupDomNode() {
    // for test
    if (this._component) {
      return this._component.isMounted() ? this._component.getPopupDomNode() : null;
    }
    return null;
  },
  getRootDomNode: function getRootDomNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },
  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },
  getComponent: function getComponent() {
    var props = this.props,
        state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return _react2["default"].createElement(
      _Popup2["default"],
      (0, _extends3["default"])({
        prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: this.getPopupAlign(),
        onAlign: props.onPopupAlign,
        animation: props.popupAnimation,
        getClassNameFromAlign: this.getPopupClassNameFromAlign
      }, mouseProps, {
        getRootDomNode: this.getRootDomNode,
        style: props.popupStyle,
        mask: props.mask,
        zIndex: props.zIndex,
        transitionName: props.popupTransitionName,
        maskAnimation: props.maskAnimation,
        maskTransitionName: props.maskTransitionName
      }),
      typeof props.popup === 'function' ? props.popup() : props.popup
    );
  },
  setPopupVisible: function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },
  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },
  clearDelayTimer: function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  },
  clearOutsideHandler: function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  },
  createTwoChains: function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  },
  isClickToShow: function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  },
  isClickToHide: function isClickToHide() {
    var _props2 = this.props,
        action = _props2.action,
        hideAction = _props2.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  },
  isMouseEnterToShow: function isMouseEnterToShow() {
    var _props3 = this.props,
        action = _props3.action,
        showAction = _props3.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  },
  isMouseLeaveToHide: function isMouseLeaveToHide() {
    var _props4 = this.props,
        action = _props4.action,
        hideAction = _props4.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  },
  isFocusToShow: function isFocusToShow() {
    var _props5 = this.props,
        action = _props5.action,
        showAction = _props5.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  },
  isBlurToHide: function isBlurToHide() {
    var _props6 = this.props,
        action = _props6.action,
        hideAction = _props6.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  },
  forcePopupAlign: function forcePopupAlign() {
    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
      this.popupInstance.alignInstance.forceAlign();
    }
  },
  fireEvents: function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  },
  close: function close() {
    this.setPopupVisible(false);
  },
  render: function render() {
    var props = this.props;
    var children = props.children;
    var child = _react2["default"].Children.only(children);
    var newChildProps = {};
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    return _react2["default"].cloneElement(child, newChildProps);
  }
});

exports["default"] = Trigger;
module.exports = exports['default'];

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0, _extends3["default"])({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(545);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2["default"].unstable_batchedUpdates ? function run(e) {
    _reactDom2["default"].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2["default"])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = contains;
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = getContainerRenderMixin;

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;


  var mixin = void 0;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }
      var component = void 0;
      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }
      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;
        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = _extends({}, mixin, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = _extends({}, mixin, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;
      _reactDom2["default"].unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = _extends({}, mixin, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = _extends({}, mixin, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}
module.exports = exports['default'];

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"Checkbox__container--2AJn4","disable":"Checkbox__disable--1Gn1Z","selected":"Checkbox__selected--1lTtc","checkbox":"Checkbox__checkbox--2BJA6","unselected":"Checkbox__unselected--2N3zC","horizontal":"Checkbox__horizontal--1Ka7s","vertical":"Checkbox__vertical--16EO5","text":"Checkbox__text--3pAcZ"};

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"agenttabwraper":"AgentTab__agenttabwraper--5n5Hb","ultab":"AgentTab__ultab--XQljl","tabItem":"AgentTab__tabItem--2gTJn","content":"AgentTab__content--3EbBd","selected":"AgentTab__selected--1vPZi","info":"AgentTab__info--A9kEd","tabDisplay":"AgentTab__tabDisplay--23xct","refresh":"AgentTab__refresh--2WrFk","loading":"AgentTab__loading--2fY-H"};

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"IconInput__input--3wYmw"};

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(112),
    last = __webpack_require__(756),
    parent = __webpack_require__(753),
    toKey = __webpack_require__(140);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(295);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(185),
    baseSlice = __webpack_require__(206);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 756:
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 875:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"info":"info__info--2c78j","Container":"info__Container--10AVR","featrue":"info__featrue--3dqdA","editIconWrapper":"info__editIconWrapper--2xMZs","title":"info__title--IG50B","line":"info__line--3mfqa","customVariable":"info__customVariable--1LRKO","select":"info__select--37KUJ","editIcon":"info__editIcon--32TvI","editable":"info__editable--10BSf","notEdit":"info__notEdit--2Yiu8","seperator":"info__seperator--E6O6M","inlineBlock":"info__inlineBlock--5bqUq","osIconWrapper":"info__osIconWrapper--2kDCC","arrowIcon":"info__arrowIcon--kxqDV","segments":"info__segments--3h6UX","segmentWrapper":"info__segmentWrapper--168oV","input":"info__input--1n4fo","marginRight20":"info__marginRight20--2jT31","buttonWrapper":"info__buttonWrapper--1oBK-","preInfoEdit":"info__preInfoEdit--1kMUL","errorMessage":"info__errorMessage--3DjCx","preIConWrapper":"info__preIConWrapper--3mVDI","popmenuWrapper":"info__popmenuWrapper--3dURC","popmenu":"info__popmenu--2kc50","active":"info__active--2TuFC","arrowIconWrapper":"info__arrowIconWrapper--1q8Dg","commentTextarea":"info__commentTextarea--2aWAS","commentEditIcon":"info__commentEditIcon--3ijYb","okButton":"info__okButton--3bWpK","copyArea":"info__copyArea--28IvP","wherefromMenuWrapper":"info__wherefromMenuWrapper--2vtxJ","wherefromMenu":"info__wherefromMenu--2MhRp","tooltip":"info__tooltip--2CBEx","currentBrowsingLink":"info__currentBrowsingLink--1fCDn","wherefromDiv":"info__wherefromDiv--26swR","wherefromLink":"info__wherefromLink--3Dwze","wrapper":"info__wrapper--16O8b","icon":"info__icon--vMRTH","text":"info__text--1S3yx"};

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_types_config__ = __webpack_require__(203);
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

/***/ 901:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"salesforce":"salesforce__salesforce--3Yn0Z","Loading":"salesforce__Loading--81-Kr","infoline":"salesforce__infoline--3HS9D","infoline2":"salesforce__infoline2--12fij","button":"salesforce__button--2p5IP","accountinfo":"salesforce__accountinfo--3klP4","accountTitle":"salesforce__accountTitle--38zZ1","accountName":"salesforce__accountName--gKvl1","accountValue":"salesforce__accountValue--2Dsue","field":"salesforce__field--K_3eS","fieldName":"salesforce__fieldName--2j3Rd","required":"salesforce__required--y53pf","radio":"salesforce__radio--1K4Jw","inputWidth":"salesforce__inputWidth--2yxiy","input":"salesforce__input--2jgLC","buttonWrapper":"salesforce__buttonWrapper--6Grgx","errorMessage":"salesforce__errorMessage--Pu_nG","marginRight20":"salesforce__marginRight20--UyHiE","successMessage":"salesforce__successMessage--1Lri4","success":"salesforce__success--pwuZY","Container":"salesforce__Container--1SZJG","editIconWrapper":"salesforce__editIconWrapper--3Jl3q","editable":"salesforce__editable--oYb6p","notEdit":"salesforce__notEdit--oo2ve","editIcon":"salesforce__editIcon--3wMmr","leadInfo":"salesforce__leadInfo--3aXn0","leadValue":"salesforce__leadValue--lgQmU","textArea":"salesforce__textArea--3BjJe","buttonGroup":"salesforce__buttonGroup--1n6CS","formTitle":"salesforce__formTitle--3fGC0","relativeDiv":"salesforce__relativeDiv--3fu0E","loadingDiv":"salesforce__loadingDiv--3AS3R","formWrapper":"salesforce__formWrapper--1esNB","fieldInfo":"salesforce__fieldInfo--2ShOf"};

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_time__ = __webpack_require__(74);
/* unused harmony export isSystem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDisplayText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isNeedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return normalizeInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return normalizeDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isSalesforceEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isSalesforceDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSFUTCTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertSFDateTimeToLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertSFDateToLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getComm100fieldValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reduceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getInitValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSFObjectId; });







var isSystem = function isSystem(systemName) {
  if (systemName) {
    var ci = systemName.lastIndexOf('__c');
    if (ci == -1 || ci != systemName.length - 3) {
      return true;
    }
  }
  return false;
};
var getDisplayText = function getDisplayText(_ref) {
  var type = _ref.type,
      label = _ref.label,
      systemName = _ref.systemName;

  if (isSystem(systemName)) {
    if (type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].reference) {
      return label.replace(' ID', '');
    }
  }
  return label;
};

var isNeedSelector = function isNeedSelector(field) {
  if (!isSystem(field.systemName) && field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].reference) {
    if (field.relatedObjects != null && field.relatedObjects.length > 0) {
      var objName = field.relatedObjects[0];
      if (objName == 'Account' || objName == 'Contact' || objName == 'Queue' || objName == 'User' || objName.substr(objName.length > 3 ? objName.length - 3 : 0) == '__c') {
        return true;
      }
    }
    return false;
  }
  return true;
};

var normalizeInt = function normalizeInt(value) {
  if (!value) {
    return value;
  }
  return value.replace(/[^\d]/g, '');
};
var normalizeDecimal = function normalizeDecimal(value) {
  if (!value) {
    return value;
  }
  return value.replace(/[^\d\-\.]/g, '');
};

var emailPattern = /^(\w)+(\.\w+)*@(\w)+(\.\w+)+$/;
var isSalesforceEmail = function isSalesforceEmail(input) {
  return emailPattern.test(input);
};

var floatPattern = /^-?\d+(\.\d*)?$/;
var isSalesforceDouble = function isSalesforceDouble(input) {
  return floatPattern.test(input);
};

var getSFUTCTime = function getSFUTCTime(d) {
  if (!d) return '';
  var mms = d.valueOf();
  mms += d.getTimezoneOffset() * 60 * 1000;
  var utcDate = new Date(mms);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_time__["e" /* format */])(utcDate, 'yyyy-MM-ddThh:mm:00.000Z');
};

var convertSFDateTimeToLocalDate = function convertSFDateTimeToLocalDate(d) {
  var year = parseInt(d.substr(0, 4));
  var month = parseInt(d.substr(5, 2));
  var day = parseInt(d.substr(8, 2));
  var h = parseInt(d.substr(11, 2));
  var m = parseInt(d.substr(14, 2));
  var date = new Date(year, month - 1, day, h, m, 0, 0);
  var mms = date.valueOf();
  mms = mms - date.getTimezoneOffset() * 60000;
  var localDate = new Date(mms);
  return localDate;
};

var convertSFDateToLocalDate = function convertSFDateToLocalDate(d) {
  var year = parseInt(d.substr(0, 4));
  var month = parseInt(d.substr(5, 2));
  var day = parseInt(d.substr(8, 2));
  var date = new Date(year, month - 1, day, 0, 0, 0, 0);
  var mms = date.valueOf();
  mms = mms - date.getTimezoneOffset() * 60000;
  var localDate = new Date(mms);
  return localDate;
};

var getVisitorVariableValue = function getVisitorVariableValue(visitor, variableName, departmentName) {
  var realValue = '';
  switch (variableName) {
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["b" /* condition_Chats */]:
      realValue = visitor.get('chatTimes');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["c" /* condition_City */]:
      realValue = visitor.get('city');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["d" /* condition_Country */]:
      realValue = visitor.get('country');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["e" /* condition_CurrentPageUrl */]:
      realValue = visitor.get('currentPage');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["f" /* condition_Keywords */]:
      realValue = visitor.get('searchEngineKeywords');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["g" /* condition_ReferrerUrl */]:
      realValue = visitor.get('referrer');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["h" /* condition_SearchEngine */]:
      realValue = visitor.get('searchEngine');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["i" /* condition_State */]:
      realValue = visitor.get('state');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["j" /* condition_Visits */]:
      realValue = visitor.get('visitorTimes');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["k" /* condition_Email */]:
      realValue = visitor.get('latestEmail');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["l" /* condition_Name */]:
      realValue = visitor.get('latestName');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["m" /* condition_Phone */]:
      realValue = visitor.get('prechatPhone');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["n" /* condition_Company */]:
      realValue = visitor.get('prechatCompany');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["o" /* condition_IP */]:
      realValue = visitor.get('ip');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["p" /* condition_Language */]:
      realValue = visitor.get('language');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["q" /* condition_TimeZone */]:
      realValue = visitor.get('timezone');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["r" /* condition_LandingPageUrl */]:
      realValue = visitor.get('landingPageUrl');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["s" /* condition_ChatRequestingPageUrl */]:
      realValue = visitor.get('chatRequestingUrl');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["t" /* condition_PreChat_ProductServices */]:
      realValue = visitor.get('prechatProductService');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["u" /* condition_StateOrProvince */]:
      realValue = visitor.get('state');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["v" /* condition_Browser */]:
      realValue = visitor.get('browser');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["w" /* condition_OperatingSystem */]:
      realValue = visitor.get('operatingSystem');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["x" /* condition_ScreenResolution */]:
      realValue = visitor.get('screenResolution');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["y" /* condition_FlashVersion */]:
      realValue = visitor.get('flashVersion');
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["z" /* condition_Department */]:
      realValue = departmentName;
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["A" /* condition_StartTime */]:
      realValue = getSFUTCTime(visitor.get('chatBeginTime'));
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["B" /* condition_EndTime */]:
      realValue = '';
      break;
    case __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["C" /* condition_Transcript */]:
      realValue = '';
      break;
    default:
      break;
  }
  if (variableName.indexOf(__WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["D" /* condition_CustomVariablePrefix */])) {
    var realName = variableName.substr(__WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["D" /* condition_CustomVariablePrefix */].length);
    var temp = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(visitor.get('customVariables'), function (item) {
      return item.name === realName;
    });
    if (temp) {
      realValue = temp.value;
    }
  } else if (variableName.indexOf(__WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["E" /* condition_PreChat_CustomFieldPrefix */])) {
    var _realName = variableName.substr(__WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["E" /* condition_PreChat_CustomFieldPrefix */].length);
    var _temp = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(visitor.get('customFields'), function (item) {
      return item.name === _realName;
    });
    if (_temp) {
      realValue = _temp.value;
      if (realValue) {
        realValue = realValue.replace(/⊙/g, ';');
      }
    }
  }
  return realValue;
};
var getComm100fieldValues = function getComm100fieldValues(configFields, visitor, departmentName) {
  var temp = configFields.filter(function (item) {
    return item.comm100FieldName;
  }).map(function (item) {
    var v = getVisitorVariableValue(visitor, item.comm100FieldName, departmentName);
    if (v) {
      return { name: item.sfFeildSystemName, value: v, displayValue: '' };
    }
    return null;
  });
  return temp.filter(function (item) {
    return item;
  });
};

var reduceArray = function reduceArray(array) {
  return array.reduce(function (accumulatedMap, item) {
    var obj = {};
    if (item) {
      obj[item.name] = item.value;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(accumulatedMap, obj);
    }
    return accumulatedMap;
  }, {});
};

var getInitValues = function getInitValues(fields, fieldsValue) {
  return reduceArray(fields.map(function (field) {
    var temp = void 0;
    if (fieldsValue && fieldsValue.length > 0) {
      temp = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(fieldsValue, function (item) {
        return item.name === field.systemName;
      });
    }
    if (field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].bool) {
      return { name: field.systemName, value: temp ? typeof temp.value === 'boolean' ? temp.value : temp.value == 'true' : false };
    } else if (field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].dateTime) {
      if (temp && temp.value) {
        return { name: field.systemName, value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_moment__["default"])(convertSFDateTimeToLocalDate(temp.value)) };
      }
      return { name: field.systemName, value: '' };
    } else if (field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].date) {
      if (temp && temp.value) {
        return { name: field.systemName, value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_moment__["default"])(convertSFDateToLocalDate(temp.value)) };
      }
      return { name: field.systemName, value: '' };
    } else if (field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].reference) {
      return { name: field.systemName, value: temp ? { id: temp.value, value: temp.displayValue } : { id: '', value: '' } };
    } else if (field.type === __WEBPACK_IMPORTED_MODULE_3__constants_salesforce__["a" /* fieldType */].picklist && field.required) {
      if (field.picklistValues.length > 0) {
        return { name: field.systemName, value: temp ? temp.value : field.picklistValues[0] };
      }
    }
    return { name: field.systemName, value: temp ? temp.value : '' };
  }));
};

var getSFObjectId = function getSFObjectId(fields) {
  if (fields) {
    var filterItem = fields.find(function (item) {
      return item.name === 'Id';
    });
    return filterItem ? filterItem.value : '';
  }
  return '';
};

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

exports.getTodayTime = getTodayTime;
exports.getTitleString = getTitleString;
exports.getTodayTimeStr = getTodayTimeStr;
exports.syncTime = syncTime;
exports.getTimeConfig = getTimeConfig;
exports.isTimeValidByConfig = isTimeValidByConfig;
exports.isTimeValid = isTimeValid;
exports.isAllowedDate = isAllowedDate;

var _moment = __webpack_require__(147);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDisabledTime = {
  disabledHours: function disabledHours() {
    return [];
  },
  disabledMinutes: function disabledMinutes() {
    return [];
  },
  disabledSeconds: function disabledSeconds() {
    return [];
  }
};

function getTodayTime(value) {
  var today = (0, _moment2["default"])();
  today.locale(value.locale()).utcOffset(value.utcOffset());
  return today;
}

function getTitleString(value) {
  return value.year() + '-' + (value.month() + 1) + '-' + value.date();
}

function getTodayTimeStr(value) {
  var today = getTodayTime(value);
  return getTitleString(today);
}

function syncTime(from, to) {
  to.hour(from.hour());
  to.minute(from.minute());
  to.second(from.second());
}

function getTimeConfig(value, disabledTime) {
  var disabledTimeConfig = disabledTime ? disabledTime(value) : {};
  disabledTimeConfig = (0, _extends3["default"])({}, defaultDisabledTime, disabledTimeConfig);
  return disabledTimeConfig;
}

function isTimeValidByConfig(value, disabledTimeConfig) {
  var invalidTime = false;
  if (value) {
    var hour = value.hour();
    var minutes = value.minute();
    var seconds = value.second();
    var disabledHours = disabledTimeConfig.disabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}

function isTimeValid(value, disabledTime) {
  var disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}

function isAllowedDate(value, disabledDate, disabledTime) {
  if (disabledDate) {
    if (disabledDate(value)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ 925:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css__ = __webpack_require__(1637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums__ = __webpack_require__(3);











var FeatureHelp = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FeatureHelp, _React$Component);

  function FeatureHelp(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FeatureHelp);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FeatureHelp.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FeatureHelp)).call(this, props));

    _this.state = {
      hide: false
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FeatureHelp, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.text !== nextProps.text || this.props.ifShow !== nextProps.ifShow || this.props.featrueNumber !== nextProps.featrueNumber || this.state.hide !== nextState.hide) {
        return true;
      }
      return false;
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      this.setState({ hide: true });
      this.props.onGotitClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ifShow = _props.ifShow,
          text = _props.text;

      if (ifShow) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css___default.a.Container,
          style: { display: this.state.hide ? 'none' : 'flex' }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css___default.a.text
        }, void 0, text), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_7__FeatureHelp_css___default.a.action,
          onClick: this.onClick
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_9__constants_enums__["b" /* icons */].close,
          color: '#b6924e',
          size: 10
        })));
      }
      return null;
    }
  }]);

  return FeatureHelp;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FeatureHelp);

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LeadInfo; });
var contactInfo = 1;
var LeadInfo = 2;

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Tabs_VisitorDetailsTab__ = __webpack_require__(1474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Business_visitorDetailsTab__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_visitorDetails__ = __webpack_require__(323);

/* import * as perf from 'src/utils/perf'; */





var mapStateToProps = function mapStateToProps(state) {
  return {
    selected: __WEBPACK_IMPORTED_MODULE_2__Business_visitorDetailsTab__["a" /* getSelectedTab */](state),
    components: __WEBPACK_IMPORTED_MODULE_2__Business_visitorDetailsTab__["b" /* getTabs */](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTabSelect: function onTabSelect(tab) {
      dispatch(__WEBPACK_IMPORTED_MODULE_3__actions_visitorDetails__["a" /* onDetailsTabSelect */](tab));
    }
  };
};

if (true) {
  /* mapStateToProps = perf.markFunctionCall('VisitorDetailsTab: mapStateToProps', mapStateToProps); */
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Tabs_VisitorDetailsTab__["a" /* default */]));

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"field":"Form__field--3WqnJ","required":"Form__required--3TPK-","inputWidth":"Form__inputWidth--2rw3p","radio":"Form__radio--1hZtG","fieldTitle":"Form__fieldTitle--38FnJ","marginRight20":"Form__marginRight20--2jRRL","buttonWrapper":"Form__buttonWrapper--lvuJR","okButton":"Form__okButton--2a2LW","groupdesc":"Form__groupdesc--3d_OQ","arrow":"Form__arrow--3H2Rh","opened":"Form__opened--3oVid","item":"Form__item--2FkqG"};

/***/ }),

/***/ 942:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapup":"Wrapup__wrapup--1-I-M","wrapupFormWrapper":"Wrapup__wrapupFormWrapper--sodQE","Container":"Wrapup__Container--2rp5p","buttonWrapper":"Wrapup__buttonWrapper--lgaSd","errorMessage":"Wrapup__errorMessage--2X4ap","marginRight20":"Wrapup__marginRight20--TRwKm","successMessage":"Wrapup__successMessage--3glFe","WrapupHistoryContainer":"Wrapup__WrapupHistoryContainer--1tD2Y","WrapupHistoryHeader":"Wrapup__WrapupHistoryHeader--28anv","WrapupDetailsHeader":"Wrapup__WrapupDetailsHeader--3UDJg","Loading":"Wrapup__Loading--2uQil","List":"Wrapup__List--2ZSV1","WrapupDetail":"Wrapup__WrapupDetail--7yDaO","detailsLink":"Wrapup__detailsLink--EfSLp","detailsContent":"Wrapup__detailsContent--1XzMf","nowrapupForm":"Wrapup__nowrapupForm--cV0Ny","featrue":"Wrapup__featrue--2mTQF","required":"Wrapup__required--1FTEN","wrapupWrapper":"Wrapup__wrapupWrapper--GHdrM","relative":"Wrapup__relative--36ijc","historyItem":"Wrapup__historyItem--Jp0is","WrapupDetailContent":"Wrapup__WrapupDetailContent--2RcnU","tooltip":"Wrapup__tooltip--1k4pj","wrapupDetailsError":"Wrapup__wrapupDetailsError--2wqEw","refreshIcon":"Wrapup__refreshIcon--1TYVX"};

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Icon_css__);






var Browser = function Browser(props) {
  var tooltip = props.name !== '-' ? props.name : 'Unknown';
  var classname = '';
  var nameLowerCase = props.name.toLowerCase();
  if (nameLowerCase.indexOf('chrome') !== -1) {
    classname = 'chrome';
  } else if (nameLowerCase.indexOf('ie') !== -1) {
    classname = 'ie';
  } else if (nameLowerCase.indexOf('edge') !== -1) {
    classname = 'edge';
  } else if (nameLowerCase.indexOf('firefox') !== -1) {
    classname = 'firefox';
  } else if (nameLowerCase.indexOf('safari') !== -1) {
    classname = 'safari';
  } else if (nameLowerCase.indexOf('opera') !== -1) {
    classname = 'opera';
  } else {
    classname = 'default';
  }
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    'data-tip': tooltip,
    'data-for': 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Icon__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__Icon_css___default.a['browser-' + classname], __WEBPACK_IMPORTED_MODULE_4__Icon_css___default.a.iconOffsetDown)
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Browser);

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Icon_css__);






var OS = function OS(props) {
  var tooltip = props.name !== '-' ? props.name : 'Unknown';
  var classname = '';
  var nameLowerCase = props.name.toLowerCase();
  if (nameLowerCase.indexOf('windows') !== -1) {
    classname = 'windows';
    if (nameLowerCase.indexOf('windows 10') !== -1 || nameLowerCase.indexOf('windows 8') !== -1) {
      classname = 'windows8';
    }
  } else if (nameLowerCase.indexOf('mac') !== -1) {
    classname = 'mac';
  } else if (nameLowerCase.indexOf('android') !== -1) {
    classname = 'android';
  } else if (nameLowerCase.indexOf('ios') !== -1) {
    classname = 'ios';
  } else if (nameLowerCase.indexOf('linux') !== -1) {
    classname = 'linux';
  } else {
    classname = 'default';
  }

  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    'data-tip': tooltip,
    'data-for': 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Icon__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__Icon_css___default.a['os-' + classname], __WEBPACK_IMPORTED_MODULE_4__Icon_css___default.a.iconOffsetDown)
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (OS);

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_omit__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_some__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_constants_enums_visitorStatus__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Info__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Navigation__ = __webpack_require__(1515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__VisitorHistory__ = __webpack_require__(1521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Salesforce__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Wrapup__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CannedMessage__ = __webpack_require__(1509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_memoryStore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_simpleEncrypt__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createInfoProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createWrapupProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelectedTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTabs; });




















var createInfoProps = function createInfoProps(state) {
  var page = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["p" /* getPage */](state);
  var visitor = void 0;
  var isUnfinishedWrapup = false;
  var chatId = void 0;
  if (page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["a" /* chats */]) {
    var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) ? __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) : undefined;
    if (chat) {
      chatId = chat.get('id');
      visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chatId);
      isUnfinishedWrapup = __WEBPACK_IMPORTED_MODULE_2_lodash_some___default()(state.config.settings.unfinishedWrapups, function (wrapupItem) {
        return wrapupItem.visitor && wrapupItem.visitor.id === visitor.get('id') && wrapupItem.visitor.chatId === chatId;
      });
    }
  } else if (page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["d" /* visitors */]) {
    visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["s" /* getVisitor */](state, __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["t" /* getSelectedVisitorId */](state));
  }
  if (!visitor) return {};
  var agentId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var _state$ui$mychats = state.ui.mychats,
      ifpreChatEdit = _state$ui$mychats.ifpreChatEdit,
      ifcustomFieldEdit = _state$ui$mychats.ifcustomFieldEdit,
      isNoteEdit = _state$ui$mychats.isNoteEdit,
      ifpreChatLoading = _state$ui$mychats.ifpreChatLoading,
      ifcustomFieldLoading = _state$ui$mychats.ifcustomFieldLoading,
      isNoteLoading = _state$ui$mychats.isNoteLoading,
      isCurrentBrowsingShowTitle = _state$ui$mychats.isCurrentBrowsingShowTitle,
      isCurrentBrowsingShowUrl = _state$ui$mychats.isCurrentBrowsingShowUrl;


  var customFields = visitor.get('customFields');
  var customVariables = visitor.get('customVariables');
  var country = visitor.get('country');
  var locationState = visitor.get('state');
  var city = visitor.get('city');
  var ip = visitor.get('ip');
  var latestName = visitor.get('latestName');
  var latestEmail = visitor.get('latestEmail');
  var prechatPhone = visitor.get('prechatPhone');
  var prechatCompany = visitor.get('prechatCompany');
  var prechatProductService = visitor.get('prechatProductService');
  var departmentId = visitor.get('departmentId');
  var referrer = visitor.get('referrer');
  var searchEngine = visitor.get('searchEngine');
  var searchEngineKeywords = visitor.get('searchEngineKeywords');
  var currentPageUrl = visitor.get('currentPage');
  var currentPageTitle = visitor.get('currentPageTitle');
  var chatTimes = visitor.get('chatTimes');
  var visitorTimes = visitor.get('visitorTimes');
  var language = visitor.get('language');
  var screenResolution = visitor.get('screenResolution');
  var timezone = visitor.get('timezone');
  var flashVersion = visitor.get('flashVersion');
  var agentComment = visitor.get('agentComment');
  var browser = visitor.get('browser');
  var operatingSystem = visitor.get('operatingSystem');

  var newFeatureNotify = state.config.preference.newFeatureNotify;
  var ifDepartmentEnabled = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["v" /* getifDepartmentEnabled */](state); // state.config.settings.siteInfo.ifDepartmentEnabled;
  var ifEnableSegmentation = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["w" /* getIfEnableVisitorSegmentation */](state); // state.config.settings.siteInfo.ifEnableSegmentation;
  var ifEnableCustomVariables = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["x" /* getIfEnableCustomVariable */](state); // state.config.settings.siteInfo.ifEnableCustomVariables;
  var ifEnableWrapupChat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["y" /* getIfEnableWrapupChat */](state); // state.config.settings.siteInfo.ifEnableWrapupChat;
  var ifChatting = __WEBPACK_IMPORTED_MODULE_3_src_utils_common__["b" /* isChattingWithAgent */](visitor, agentId);
  var ifChatted = __WEBPACK_IMPORTED_MODULE_3_src_utils_common__["i" /* isChattedWithAgent */](visitor, agentId);
  var status = visitor.get('status');
  var ifWaitingAndHavePermission = __WEBPACK_IMPORTED_MODULE_3_src_utils_common__["f" /* isHavePermissionDealChat */](status, visitor.get('chatInvolvedAgents'), __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["h" /* getDepartmentById */](state, visitor.get('departmentId')), agentId);
  /** @todo previous implementation of following line is wrong? */
  var ifWaitingVisitorAcceptInvitation = status === __WEBPACK_IMPORTED_MODULE_4_src_constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */];

  var ifOsBrowserImageShow = state.ui.page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["d" /* visitors */];
  var segments = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["z" /* getSegmentsByIds */](state, visitor.get('segmentIds'));
  var codeplan = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["A" /* getCodePlan */](state, visitor.get('codePlanId'));
  var fieldsInfo = codeplan && codeplan.customFields;
  var departments = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["B" /* getDepartments */](state);
  var departmentSelected = '';
  if (departmentId > 0) {
    departmentSelected = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["C" /* getDepartmentNameById */](state, departmentId);
  }
  var p = {
    chatId: chatId,
    visitorId: visitor.get('id'),
    visitorInfo: {
      readOnly: isUnfinishedWrapup || !(ifChatting || ifChatted || ifWaitingAndHavePermission),
      preChatReadOnly: isUnfinishedWrapup || !(ifChatting || ifChatted || ifWaitingVisitorAcceptInvitation || ifWaitingAndHavePermission),
      ifDepartmentEnabled: ifDepartmentEnabled,
      ifEnableSegmentation: ifEnableSegmentation,
      ifEnableCustomVariables: ifEnableCustomVariables,
      ifEnableWrapupChat: ifEnableWrapupChat,
      ifOsBrowserImageShow: ifOsBrowserImageShow,
      ifpreChatEdit: ifpreChatEdit,
      ifpreChatLoading: ifpreChatLoading,
      ifcustomFieldEdit: ifcustomFieldEdit,
      ifcustomFieldLoading: ifcustomFieldLoading,
      customFields: customFields || [],
      fieldsInfo: fieldsInfo || [],
      customVariables: customVariables || [],
      segments: segments || [],
      country: country,
      state: locationState,
      city: city,
      ip: ip,
      latestName: latestName,
      latestEmail: latestEmail,
      prechatPhone: prechatPhone,
      prechatCompany: prechatCompany,
      prechatProductService: prechatProductService,
      departmentId: departmentId,
      departmentSelected: departmentSelected,
      departments: departments,
      referrer: referrer,
      searchEngine: searchEngine,
      searchEngineKeywords: searchEngineKeywords,
      currentPageUrl: currentPageUrl,
      currentPageTitle: currentPageTitle,
      isCurrentBrowsingShowTitle: isCurrentBrowsingShowTitle,
      isCurrentBrowsingShowUrl: isCurrentBrowsingShowUrl,
      chatTimes: chatTimes,
      visitorTimes: visitorTimes,
      language: language,
      screenResolution: screenResolution,
      timezone: timezone,
      flashVersion: flashVersion,
      isNoteEdit: isNoteEdit,
      isNoteLoading: isNoteLoading,
      agentComment: agentComment,
      browser: browser,
      operatingSystem: operatingSystem,
      newFeatureNotify: newFeatureNotify
    }
  };
  return p;
};

var getFieldDisplayText = function getFieldDisplayText(codePlan, fieldType) {
  if (codePlan) {
    var field = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(codePlan.wrapupFields, function (item) {
      return item.type === fieldType;
    });
    if (field) return field.displayText;
  }
  if (fieldType === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["d" /* WrapupCategory */]) return 'Category';
  if (fieldType === __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["f" /* WrapupComment */]) return 'Comment';
  return '';
};
/* eslint-disable prefer-template */
var createWrapupProps = function createWrapupProps(state) {
  var agentId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) ? __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) : undefined;
  if (!chat) return {};
  var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat && chat.get('id'));
  if (!visitor) return {};
  var codeplan = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["A" /* getCodePlan */](state, visitor.get('codePlanId'));
  var wrapupFields = codeplan && codeplan.wrapupFields;
  var status = visitor.get('status');
  var disableWrapupForm = status === __WEBPACK_IMPORTED_MODULE_4_src_constants_enums_visitorStatus__["f" /* refusedByVisitor */] || __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["D" /* checkIfWaitingVisitorAcceptInvitation */](status) || __WEBPACK_IMPORTED_MODULE_3_src_utils_common__["c" /* isMonitorWithAgent */](visitor, agentId) || __WEBPACK_IMPORTED_MODULE_3_src_utils_common__["j" /* isMonitorChatEndedWithAgent */](visitor, agentId) || !__WEBPACK_IMPORTED_MODULE_3_src_utils_common__["h" /* isAgentInInvolvedList */](visitor, agentId);

  if (disableWrapupForm) {
    disableWrapupForm = !__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["E" /* ifRequireWrapup */](state, chat.get('id'));
  }

  var visitorId = chat.get('visitorId');
  var chatId = chat.get('id');
  var siteId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["F" /* getSiteId */](state); // state.config.settings.siteInfo.siteId;
  var ifWrapupLoading = chat.get('ifWrapupLoading');
  var ifWrapupSubmitSuccess = chat.get('ifWrapupSubmitSuccess');
  var wrapupSubmitError = chat.get('wrapupSubmitError');
  var showWrapupRequired = chat.get('showWrapupRequired');
  var ifWrapupHistoryLoading = chat.get('ifWrapupHistoryLoading');
  var autoRefreshDataFlag = chat.get('autoRefreshDataFlag');
  var wrapupDetailsOpenId = chat.get('wrapupDetailsOpenId');
  var liveChatReportUrl = state.config.settings.urls.controlPanel + '/livechatreport';
  var email = state.agent.email;
  var password = escape(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__utils_simpleEncrypt__["a" /* encrypt */])(state.agent.password));
  var loginUrl = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["G" /* getLoginUrl */](state);
  var autoLoginUrl = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["H" /* getAutoLoginManagerUrl */](state) + '?siteId=' + siteId + '&email=' + email + '&password=' + password;

  var codePlan = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["A" /* getCodePlan */](state, visitor.get('codePlanId'));
  var newFeatureNotify = state.config.preference.newFeatureNotify;
  var stateWrapups = visitor.get('wrapups') || [];
  var wrapups = stateWrapups.map(function (item) {
    var temp = __WEBPACK_IMPORTED_MODULE_0_lodash_omit___default()(item, ['chatInfo']);
    if (item.chatInfo) {
      var details = [];
      details.push(getFieldDisplayText(codePlan, __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["d" /* WrapupCategory */]) + ': ' + item.chatCategory);
      details.push(getFieldDisplayText(codePlan, __WEBPACK_IMPORTED_MODULE_14__constants_enums_fieldType__["f" /* WrapupComment */]) + ': ' + item.chatInfo.agentComment);
      temp.ifWrapupDetailsLoading = false;
      temp.wrapupDetails = details.concat(item.chatInfo.wrapupFields.map(function (field) {
        return field.name + ': ' + field.value.toString().replace(/⊙/g, ',');
      }));
    } else {
      temp.ifWrapupDetailsLoading = true;
      temp.wrapupDetails = [];
    }
    return temp;
  });
  return { chatId: chatId,
    visitorId: visitorId,
    siteId: siteId,
    disableWrapupForm: disableWrapupForm,
    ifWrapupLoading: ifWrapupLoading,
    wrapupFields: wrapupFields || [],
    ifWrapupSubmitSuccess: ifWrapupSubmitSuccess,
    wrapupSubmitError: wrapupSubmitError,
    wrapups: wrapups || [],
    ifWrapupHistoryLoading: ifWrapupHistoryLoading,
    autoRefreshDataFlag: autoRefreshDataFlag,
    liveChatReportUrl: liveChatReportUrl,
    wrapupDetailsOpenId: wrapupDetailsOpenId,
    newFeatureNotify: newFeatureNotify,
    showWrapupRequired: showWrapupRequired,
    loginUrl: loginUrl,
    autoLoginUrl: autoLoginUrl,
    datefmt: state.config.preference.dateTimeFormat,
    timezoneoffset: state.config.preference.offset,
    timezone: state.config.preference.timeZone,
    ifEnableAdvancedCategoryMode: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["I" /* ifEnableAdvancedCategoryMode */](state)
  };
};

var getSelectedTab = function getSelectedTab(state) {
  var page = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["p" /* getPage */](state);
  var ifEnableWrapupChat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["y" /* getIfEnableWrapupChat */](state); // state.config.settings.siteInfo.ifEnableWrapupChat;
  if (page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["a" /* chats */]) {
    var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) ? __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state) : undefined;
    if (chat) {
      var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat.get('id'));
      if (visitor && __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["J" /* checkIfVisitorStatusChatEndedVisitor */](visitor.get('status'))) {
        var cacheWrapupTabSelected = __WEBPACK_IMPORTED_MODULE_15__services_memoryStore__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_16__constants_memoryStore__["e" /* cacheWrapupTabSelected */], chat.get('id'), false);
        if (ifEnableWrapupChat && cacheWrapupTabSelected) {
          return __WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].wrapup;
        }
      }
    }
    return state.ui.mychats.visitorDetailsTabSelected;
  } else if (page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["d" /* visitors */]) {
    return state.ui.visitors.visitorDetailsTabSelected;
  }
  return __WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].info;
};

var getTabs = function getTabs(state) {
  var components = {};
  components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].info] = {
    component: __WEBPACK_IMPORTED_MODULE_8__Info__["a" /* default */] };
  if (state.ui.page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["a" /* chats */] && __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["K" /* getIfSalesforceManually */](state)) {
    components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].salesforce] = { component: __WEBPACK_IMPORTED_MODULE_11__Salesforce__["a" /* default */] };
  }
  components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].nav] = {
    component: __WEBPACK_IMPORTED_MODULE_9__Navigation__["a" /* default */] };
  components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].history] = {
    component: __WEBPACK_IMPORTED_MODULE_10__VisitorHistory__["a" /* default */] };
  if (__WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["y" /* getIfEnableWrapupChat */](state) && state.ui.page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["a" /* chats */]) {
    components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].wrapup] = { component: __WEBPACK_IMPORTED_MODULE_12__Wrapup__["a" /* default */] };
  }
  if (state.ui.page === __WEBPACK_IMPORTED_MODULE_6__constants_enums_page__["a" /* chats */]) {
    components[__WEBPACK_IMPORTED_MODULE_5__constants_enums__["g" /* visitorDetailsTabs */].cannedMessage] = { component: __WEBPACK_IMPORTED_MODULE_13__CannedMessage__["a" /* default */] };
  }

  return components;
};

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navigation":"navigation__navigation--3FSc5","infoline":"navigation__infoline--2E79L","info":"navigation__info--3XDsf","title":"navigation__title--NrD4n","withCurrent":"navigation__withCurrent--2DlIu","preview":"navigation__preview--3E7qX","current":"navigation__current--3zYNQ","date":"navigation__date--1kY0y","tooltip":"navigation__tooltip--20tV0"};

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history":"visitorHistory__history--3H_9j","infoline":"visitorHistory__infoline--3Xob-","historyType":"visitorHistory__historyType--2teYe","viewTypeSwitch":"visitorHistory__viewTypeSwitch--1q8uo","historyItem":"visitorHistory__historyItem--HmtPz","detailLoading":"visitorHistory__detailLoading--3fKYg","listItem":"visitorHistory__listItem--XupLw","detail":"visitorHistory__detail--3a_Ob","detailError":"visitorHistory__detailError--253I6","detailErrorRrefresh":"visitorHistory__detailErrorRrefresh--1zJ8U","title":"visitorHistory__title--2Ckd0","information":"visitorHistory__information--2nGQo","splitLine":"visitorHistory__splitLine--27i90","detailLink":"visitorHistory__detailLink--jw9KF","Loading":"visitorHistory__Loading--3XBqd","moreChat":"visitorHistory__moreChat--ijPIu","moreText":"visitorHistory__moreText--Wlu_u","visitorMessage":"visitorHistory__visitorMessage--1Oj8g","agentMessage":"visitorHistory__agentMessage--1qfBl","tooltip":"visitorHistory__tooltip--1WcdX"};

/***/ })

});
//# sourceMappingURL=details-tab.675a9.js.map