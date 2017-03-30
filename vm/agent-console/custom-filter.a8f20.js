webpackJsonp([8],{

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28),
    now = __webpack_require__(1237),
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

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(63);

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

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css__ = __webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__CustomFilter_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FieldCondition__ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_enums_customVariableType__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__ = __webpack_require__(1493);

























var allStatus = [{ text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["a" /* transferring */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["b" /* transferring */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["b" /* waitingForChat */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["c" /* waitingForChat */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["c" /* chatting */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["a" /* chatting */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["d" /* preChat */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["m" /* preChat */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["e" /* invited */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["g" /* invited */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["f" /* autoInvited */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["n" /* autoInvited */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["g" /* offlineMessage */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["o" /* offlineMessage */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["h" /* refusedByAgent */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["p" /* refusedByOperator */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["i" /* refusedByVisitor */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["f" /* refusedByVisitor */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["j" /* chatEnded */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["e" /* chatEnded */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["k" /* inSite */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["q" /* inSite */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["l" /* outOfSite */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["l" /* outOfSite */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["m" /* audioChatRequesting */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["h" /* audioChatRequesting */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["n" /* audioChatting */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["i" /* audioChatting */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["o" /* videoChatRequesting */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["j" /* videoChatRequesting */] }, { text: __WEBPACK_IMPORTED_MODULE_21__constants_languages_visitorStatus__["p" /* videoChatting */], value: __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorStatus__["k" /* videoChatting */] }];
var clearSelect = function clearSelect() {
  var element = document.querySelector('div[data-vmselect="open"]');
  if (element) {
    element.click();
  }
};
var clearSelectDebounce = __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default()(clearSelect, 10);

var convertCustomFilter = function convertCustomFilter(customFilter, customVariables) {
  return customFilter.map(function (item, idx) {
    var cvType = 0;
    if (item.field === __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["j" /* customVariable */]) {
      var cv = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(customVariables, function (f) {
        return f.id === item.variableId;
      });
      if (cv === null) return null;
      cvType = cv.type;
    }
    return {
      id: idx,
      field: item.field,
      op: item.op,
      values: item.values,
      variableId: item.variableId,
      variableType: cvType
    };
  }).filter(function (item) {
    return item !== null;
  });
};

var getAllConditions = function getAllConditions(siteInfo, customVariables) {
  var conditions = [];
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["a" /* status */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["a" /* status */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  if (siteInfo && siteInfo.ifEnableSegmentation) {
    conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["b" /* visitorSegment */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["b" /* visitorSegment */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */] });
  }
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["c" /* agents */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["c" /* agents */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */] });
  if (siteInfo && siteInfo.ifDepartmentEnabled) {
    conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["d" /* department */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["d" /* department */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  }
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["e" /* productService */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["e" /* productService */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["f" /* autoInvitation */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["f" /* autoInvitation */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["g" /* campaign */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["g" /* campaign */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["h" /* countryRegion */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["i" /* countryRegion */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["i" /* city */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["h" /* city */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });
  conditions.push({ name: __WEBPACK_IMPORTED_MODULE_22__constants_languages_filterFieldType__["j" /* state */], field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["k" /* state */], variableId: 0, variableType: 0, op: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] });

  if (siteInfo && siteInfo.ifEnableCustomVariables) {
    conditions = conditions.concat(customVariables.map(function (item) {
      var op = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */];
      if (item.type === __WEBPACK_IMPORTED_MODULE_18__constants_enums_customVariableType__["c" /* plainText */]) {
        op = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */];
      }
      return { name: item.name, field: __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["j" /* customVariable */], variableId: item.id, variableType: item.type, op: op };
    }));
  }
  return conditions;
};

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Add Condition');

var CustomFilterModal = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(CustomFilterModal, _React$Component);

  function CustomFilterModal(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, CustomFilterModal);

    var _this2 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CustomFilterModal.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(CustomFilterModal)).call(this, props));

    _this2.state = {
      customFilterConditions: convertCustomFilter(props.customFilter, props.customVariables)
    };
    _this2.maxId = _this2.state.customFilterConditions.length - 1;
    _this2.addFlag = false;
    var siteInfo = props.siteInfo,
        campaigns = props.campaigns,
        departments = props.departments,
        autoInvitations = props.autoInvitations,
        agents = props.agents,
        customVariables = props.customVariables,
        segments = props.segments,
        currentAgentId = props.currentAgentId;


    _this2.allCodePlans = campaigns.map(function (item) {
      return { text: item.name, value: item.id };
    });
    _this2.allDepartments = departments.map(function (item) {
      return { text: item.name, value: item.id };
    });
    var currentAgent = [{ text: '@me', value: currentAgentId }];
    _this2.allOperators = currentAgent.concat(agents.map(function (item) {
      return { text: item.name, value: item.id };
    }));
    _this2.allSegments = segments.map(function (item) {
      return { text: item.name, value: item.id };
    });
    _this2.allAutoInvitations = autoInvitations.map(function (item) {
      return { text: item.name, value: item.id };
    });
    var allConditions = getAllConditions(siteInfo, customVariables);
    _this2.allConditions = allConditions.map(function (item) {
      switch (item.field) {
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["a" /* status */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [allStatus[0].value] }, item);
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["g" /* campaign */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [_this2.allCodePlans.length > 0 ? _this2.allCodePlans[0].value : -1] }, item);
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["d" /* department */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [_this2.allDepartments.length > 0 ? _this2.allDepartments[0].value : -1] }, item);
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["c" /* agents */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [_this2.allOperators.length > 0 ? _this2.allOperators[0].value : -1] }, item);
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["b" /* visitorSegment */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [_this2.allSegments.length > 0 ? _this2.allSegments[0].value : -1] }, item);
        case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["f" /* autoInvitation */]:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [_this2.allAutoInvitations.length > 0 ? _this2.allAutoInvitations[0].value : -1] }, item);
        default:
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ values: [''] }, item);
      }
    });

    _this2.saveCustomFilters = _this2.saveCustomFilters.bind(_this2);
    _this2.addCondition = _this2.addCondition.bind(_this2);
    _this2.updateCondition = _this2.updateCondition.bind(_this2);
    _this2.updateOperation = _this2.updateOperation.bind(_this2);
    _this2.updateValue = _this2.updateValue.bind(_this2);
    _this2.deleteValue = _this2.deleteValue.bind(_this2);
    _this2.addOption = _this2.addOption.bind(_this2);
    return _this2;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(CustomFilterModal, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.state.customFilterConditions, nextState.customFilterConditions)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this = this;
      setTimeout(function () {
        if (_this.container) {
          if (_this.addFlag) {
            _this.addFlag = false;
            var sTop = _this.container.scrollHeight - _this.container.clientHeight;
            if (sTop > 0) {
              _this.container.scrollTop = sTop;
            }
          } else if (_this.addOptionFlag) {
            _this.addOptionFlag = false;
            var _sTop = _this.container.scrollHeight - _this.container.clientHeight;
            if (_sTop > 0) {
              _this.container.scrollTop += 40;
            }
          }
        }
      }, 0);
    }
  }, {
    key: 'saveCustomFilters',
    value: function saveCustomFilters() {
      this.props.saveCustomFilters(this.state.customFilterConditions.map(function (item) {
        return {
          field: item.field,
          op: item.op,
          values: item.values,
          variableId: item.variableId
        };
      }));
    }
  }, {
    key: 'addCondition',
    value: function addCondition() {
      this.maxId = this.maxId + 1;
      var c = this.allConditions[0];
      var newState = this.state.customFilterConditions.concat([__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ id: this.maxId }, c)]);
      this.addFlag = true;
      this.setState({ customFilterConditions: newState });
    }
  }, {
    key: 'updateCondition',
    value: function updateCondition(conditionId, value) {
      var tempV = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.state.customFilterConditions, function (item) {
        return item.id === conditionId;
      });
      var c = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.allConditions, function (item) {
        return item.field + item.variableId === value;
      });
      if (c) {
        var newFilterCondition = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, tempV, c);
        var newState = this.state.customFilterConditions.map(function (item) {
          if (item.id === conditionId) {
            return newFilterCondition;
          }
          return item;
        });
        this.setState({ customFilterConditions: newState });
      }
    }
  }, {
    key: 'updateOperation',
    value: function updateOperation(conditionId, value) {
      var tempV = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.state.customFilterConditions, function (item) {
        return item.id === conditionId;
      });
      var newFilterCondition = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, tempV, { op: value });
      var newState = this.state.customFilterConditions.map(function (item) {
        if (item.id === conditionId) {
          return newFilterCondition;
        }
        return item;
      });
      this.setState({ customFilterConditions: newState });
    }
  }, {
    key: 'updateValue',
    value: function updateValue(conditionId, valueId, newValue) {
      var tempV = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.state.customFilterConditions, function (item) {
        return item.id === conditionId;
      });
      var newV = tempV.values.map(function (item, idx) {
        if (idx === valueId) return newValue;
        return item;
      });
      var newFilterCondition = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, tempV, { values: newV });
      var newState = this.state.customFilterConditions.map(function (item) {
        if (item.id === conditionId) {
          return newFilterCondition;
        }
        return item;
      });
      this.setState({ customFilterConditions: newState });
    }
  }, {
    key: 'deleteValue',
    value: function deleteValue(conditionId, valueId) {
      var oldV = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.state.customFilterConditions, function (item) {
        return item.id === conditionId;
      });
      var newValues = oldV.values.filter(function (v, idx) {
        return idx !== valueId;
      });
      var newState = void 0;
      if (newValues.length > 0) {
        var newFilterCondition = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, oldV, { values: newValues });
        newState = this.state.customFilterConditions.map(function (item) {
          if (item.id === conditionId) {
            return newFilterCondition;
          }
          return item;
        });
      } else {
        newState = this.state.customFilterConditions.map(function (item) {
          if (item.id === conditionId) return null;
          return item;
        }).filter(function (item) {
          return item !== null;
        });
      }
      this.setState({ customFilterConditions: newState });
    }
  }, {
    key: 'addOption',
    value: function addOption(conditionId) {
      var tempV = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.state.customFilterConditions, function (item) {
        return item.id === conditionId;
      });
      var c = __WEBPACK_IMPORTED_MODULE_9_lodash_find___default()(this.allConditions, function (item) {
        return item.field === tempV.field;
      });
      if (c) {
        var newV = tempV.values.concat(c.values);
        var newFilterCondition = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, tempV, { values: newV });
        var newState = this.state.customFilterConditions.map(function (item) {
          if (item.id === conditionId) return newFilterCondition;
          return item;
        });
        this.addOptionFlag = true;
        this.setState({ customFilterConditions: newState });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allConditions = this.allConditions;
      var allCodePlans = this.allCodePlans;
      var allDepartments = this.allDepartments;
      var allOperators = this.allOperators;
      var allSegments = this.allSegments;
      var allAutoInvitations = this.allAutoInvitations;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        className: __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css___default.a.customFilter,
        title: 'Custom Filter',
        actions: {
          okProps: { text: 'OK', eventClick: this.saveCustomFilters },
          cancelProps: { text: 'Cancel' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css___default.a.containerWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css___default.a.container,
          ref: function ref(element) {
            _this3.container = element;
          },
          onScroll: function onScroll() {
            clearSelectDebounce();
          }
        },
        this.state.customFilterConditions.map(function (fieldCondition, idx) {
          var valueOptions = [];
          var isDDLType = false;
          var operationType = 0;
          switch (fieldCondition.field) {
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["a" /* status */]:
              valueOptions = allStatus;
              isDDLType = true;
              operationType = 0;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["g" /* campaign */]:
              valueOptions = allCodePlans;
              isDDLType = true;
              operationType = 0;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["d" /* department */]:
              valueOptions = allDepartments;
              isDDLType = true;
              operationType = 0;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["c" /* agents */]:
              valueOptions = allOperators;
              isDDLType = true;
              operationType = 1;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["b" /* visitorSegment */]:
              valueOptions = allSegments;
              isDDLType = true;
              operationType = 1;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["f" /* autoInvitation */]:
              valueOptions = allAutoInvitations;
              isDDLType = true;
              operationType = 0;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["i" /* countryRegion */]:
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["h" /* city */]:
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["k" /* state */]:
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["e" /* productService */]:
              isDDLType = false;
              operationType = 2;
              break;
            case __WEBPACK_IMPORTED_MODULE_17__constants_enums_filterFieldType__["j" /* customVariable */]:
              if (fieldCondition.variableType === __WEBPACK_IMPORTED_MODULE_18__constants_enums_customVariableType__["d" /* notDefined */]) {
                operationType = 5;
              } else if (fieldCondition.variableType === __WEBPACK_IMPORTED_MODULE_18__constants_enums_customVariableType__["a" /* integer */] || fieldCondition.variableType === __WEBPACK_IMPORTED_MODULE_18__constants_enums_customVariableType__["b" /* decimal */]) {
                operationType = 4;
              } else {
                operationType = 3;
              }
              isDDLType = false;
              break;
            default:
              isDDLType = false;
              operationType = 0;
              break;
          }
          var isDDLOperation = true;
          var operationText = '';
          var operationOptions = [];
          var operationInputValue = fieldCondition.op;
          switch (operationType) {
            case 0:
              isDDLOperation = false;
              operationText = 'is';
              operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */];
              break;
            case 1:
              isDDLOperation = false;
              operationText = 'contains';
              operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */];
              break;
            case 2:
              operationOptions = [{ text: 'is', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] }, { text: 'is not', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["b" /* isNot */] }];
              if (!operationInputValue) {
                operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */];
              }
              break;
            case 3:
              operationOptions = [{ text: 'contains', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */] }, { text: 'not contains', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["f" /* notContains */] }];
              if (!operationInputValue) {
                operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */];
              }
              break;
            case 4:
              operationOptions = [{ text: 'is', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] }, { text: 'is less than', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["c" /* isLessThan */] }, { text: 'is more than', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["d" /* isMoreThan */] }];
              if (!operationInputValue) {
                operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */];
              }
              break;
            case 5:
              operationOptions = [{ text: 'is', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */] }, { text: 'is not', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["b" /* isNot */] }, { text: 'contains', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["e" /* contains */] }, { text: 'not contains', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["f" /* notContains */] }, { text: 'is less than', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["c" /* isLessThan */] }, { text: 'is more than', value: __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["d" /* isMoreThan */] }];
              if (!operationInputValue) {
                operationInputValue = __WEBPACK_IMPORTED_MODULE_19__constants_enums_filterOperatorType__["a" /* is */];
              }
              break;
          }

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__FieldCondition__["a" /* default */], {
            id: fieldCondition.id,
            conditionOptions: allConditions.map(function (item) {
              return { text: item.name, value: item.field + item.variableId };
            }),
            conditionInput: { value: fieldCondition.field + fieldCondition.variableId, onChange: _this3.updateCondition },
            operationOptions: operationOptions,
            operationInput: { value: operationInputValue, onChange: _this3.updateOperation },
            operationText: operationText,
            isDDLOperation: isDDLOperation,
            isDDLType: isDDLType,
            valueOptions: valueOptions,
            values: fieldCondition.values,
            onValueChange: _this3.updateValue,
            onDelete: _this3.deleteValue,
            addOption: _this3.addOption
          }, idx);
        })
      )), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__CustomFilter_css___default.a.addCondition
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Link_Link__["a" /* default */], {
        onClick: this.addCondition
      }, void 0, _ref)));
    }
  }]);

  return CustomFilterModal;
}(__WEBPACK_IMPORTED_MODULE_11_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomFilterModal);

/***/ }),

/***/ 1311:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"customFilter":"CustomFilter__customFilter--1LcRb","container":"CustomFilter__container--s_r1U","action":"CustomFilter__action--2xKtG","addCondition":"CustomFilter__addCondition--Kf9i1","addOption":"CustomFilter__addOption--3Nxau","fieldConditionWrapper":"CustomFilter__fieldConditionWrapper--2SiT8","fieldCondition":"CustomFilter__fieldCondition--4CGrW","operationText":"CustomFilter__operationText--3_jOE","conditionOptions":"CustomFilter__conditionOptions--3PS6b","conditionValueWrapper":"CustomFilter__conditionValueWrapper--3WVjV","conditionValue":"CustomFilter__conditionValue--1UDPG","closeIcon":"CustomFilter__closeIcon--2IcAM","conditionOptionsWrapper":"CustomFilter__conditionOptionsWrapper--11r3L","input":"CustomFilter__input--2GUha"};

/***/ }),

/***/ 1412:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css__ = __webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__CustomFilter_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Select_Select__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Input_Input__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);














var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Add Option');

var FieldCondition = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FieldCondition, _React$Component);

  function FieldCondition() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FieldCondition);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FieldCondition.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FieldCondition)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FieldCondition, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          conditionOptions = _props.conditionOptions,
          conditionInput = _props.conditionInput,
          operationOptions = _props.operationOptions,
          operationInput = _props.operationInput,
          operationText = _props.operationText,
          isDDLOperation = _props.isDDLOperation,
          isDDLType = _props.isDDLType,
          values = _props.values,
          valueOptions = _props.valueOptions;

      var w = isDDLOperation ? 132 : operationText == 'is' ? 31 : 74;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.fieldConditionWrapper
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.fieldCondition
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Select_Select__["a" /* default */], {
        options: conditionOptions,
        input: { value: conditionInput.value, onChange: function onChange(value) {
            conditionInput.onChange(id, value);
          } },
        width: 155
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionOptionsWrapper
      }, void 0, isDDLType && values.map(function (item, idx) {
        var canRemove = idx !== 0;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionValueWrapper
        }, idx, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionOptions,
          style: { width: w }
        }, void 0, !canRemove && isDDLOperation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Select_Select__["a" /* default */], {
          options: operationOptions,
          input: { value: operationInput.value, onChange: function onChange(value) {
              operationInput.onChange(id, value);
            } },
          width: 110
        }), !canRemove && !isDDLOperation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.operationText
        }, void 0, operationText), canRemove && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.operationText
        }, void 0, 'or')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionValue
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Select_Select__["a" /* default */], {
          options: valueOptions,
          input: { value: item, onChange: function onChange(newValue) {
              _this2.props.onValueChange(id, idx, newValue);
            } },
          width: 200
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.closeIcon,
          type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
          color: '#666',
          size: 10,
          onClick: function onClick() {
            _this2.props.onDelete(id, idx);
          }
        })));
      }), !isDDLType && values.map(function (item, idx) {
        var canRemove = idx !== 0;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionValueWrapper
        }, idx, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionOptions,
          style: { width: w }
        }, void 0, !canRemove && isDDLOperation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Select_Select__["a" /* default */], {
          options: operationOptions,
          input: { value: operationInput.value, onChange: function onChange(value) {
              operationInput.onChange(id, value);
            } },
          width: 110
        }), !canRemove && !isDDLOperation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.operationText
        }, void 0, operationText), canRemove && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.operationText
        }, void 0, 'or')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.conditionValue
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Input_Input__["a" /* default */], {
          input: { value: item, onChange: function onChange(e) {
              _this2.props.onValueChange(id, idx, e.target.value);
            } },
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.input,
          width: 200,
          meta: {}
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.closeIcon,
          type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
          color: '#666',
          size: 10,
          onClick: function onClick() {
            _this2.props.onDelete(id, idx);
          }
        })));
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__CustomFilter_css___default.a.addOption,
        style: { marginLeft: w }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Link_Link__["a" /* default */], {
        onClick: function onClick() {
          _this2.props.addOption(_this2.props.id);
        }
      }, void 0, _ref))));
    }
  }]);

  return FieldCondition;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FieldCondition);

/***/ }),

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return visitorSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return agents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return department; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return productService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return autoInvitation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return campaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return city; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return countryRegion; });
var status = 'Status';
var visitorSegment = 'Visitor Segment';
var agents = 'Agents';
var department = 'Department';
var productService = 'Product/Service';
var autoInvitation = 'Auto Invitation';
var campaign = 'Campaign';
var city = 'City';
var state = 'State';
var countryRegion = 'Country/Region';

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propertyUtils = __webpack_require__(708);

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

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"select":"Select__select--zF9hu","active":"Select__active--Y-VoF","dropdown":"Select__dropdown--Sxy1D","dropdown-menu":"Select__dropdown-menu--3Mo1T","dropdown-menu-item":"Select__dropdown-menu-item--3Pfku","dropdown-menu-item-selected":"Select__dropdown-menu-item-selected--3fbaf","selectLabel":"Select__selectLabel--2D1LR","selectArrow":"Select__selectArrow--WmzLP","controlDisabled":"Select__controlDisabled--3wRV5"};

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(108),
    castSlice = __webpack_require__(295),
    charsEndIndex = __webpack_require__(687),
    charsStartIndex = __webpack_require__(710),
    stringToArray = __webpack_require__(296),
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

var _EventObject = __webpack_require__(691);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css__ = __webpack_require__(287);
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

var _utils = __webpack_require__(197);

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

/***/ 682:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_trim__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_trim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_trim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_trigger__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_trigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_trigger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rc_trigger_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__DropdownMenu__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Select_css__ = __webpack_require__(287);
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

/***/ 683:
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

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/object-assign/index.js");

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(178);

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

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export this package's api
module.exports = __webpack_require__(715);

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(720);

/***/ }),

/***/ 690:
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

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(690);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(684);

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

/***/ 693:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_forEach__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_forEach__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scrollIntoView__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Option__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__OptGroup__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Select_css__ = __webpack_require__(287);
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

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Select_css__ = __webpack_require__(287);
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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(696);


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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(200);
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

/***/ 699:
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

/***/ 700:
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

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(700);

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__(699);

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

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(197);

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

/***/ 703:
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

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getAlignOffset = __webpack_require__(703);

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

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(197);

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

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(197);

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

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(197);

var _utils2 = _interopRequireDefault(_utils);

var _getOffsetParent = __webpack_require__(548);

var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

var _getVisibleRectForElement = __webpack_require__(706);

var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

var _adjustForViewport = __webpack_require__(702);

var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

var _getRegion = __webpack_require__(705);

var _getRegion2 = _interopRequireDefault(_getRegion);

var _getElFuturePos = __webpack_require__(704);

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

/***/ 708:
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

/***/ 709:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(178);

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

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domAlign = __webpack_require__(707);

var _domAlign2 = _interopRequireDefault(_domAlign);

var _addEventListener = __webpack_require__(714);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _isWindow = __webpack_require__(713);

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

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Align = __webpack_require__(711);

var _Align2 = _interopRequireDefault(_Align);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Align2["default"]; // export this package's api

module.exports = exports['default'];

/***/ }),

/***/ 713:
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

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(545);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(72);

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

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ChildrenUtils = __webpack_require__(717);

var _AnimateChild = __webpack_require__(716);

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

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cssAnimation = __webpack_require__(701);

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

/***/ 717:
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

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = __webpack_require__(712);

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = __webpack_require__(688);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = __webpack_require__(719);

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

/***/ 719:
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

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contains = __webpack_require__(723);

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = __webpack_require__(722);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = __webpack_require__(718);

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = __webpack_require__(721);

var _getContainerRenderMixin = __webpack_require__(724);

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

/***/ 721:
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

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(545);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(72);

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

/***/ 723:
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

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = getContainerRenderMixin;

var _reactDom = __webpack_require__(72);

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

/***/ })

});
//# sourceMappingURL=custom-filter.a8f20.js.map