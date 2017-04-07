webpackJsonp([3],{

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TextArea_TextArea__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Shortcut__ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_schema__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Modal_css__);


















var SendShortcutSelector = [{ text: 'Press Enter to Send', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["g" /* shortcutSend */].enter }, { text: 'Press Ctrl+Enter to Send', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["g" /* shortcutSend */].enterctrl }];

var MacroSelector = [{ text: 'Insert Macro', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].insertMacro }, { text: '{!Visitor.Name}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorName }, { text: '{!Visitor.Email}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorEmail }, { text: '{!Visitor.IP}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorIp }, { text: '{!Visitor.Country/Region}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorCountry }, { text: '{!Visitor.State/Province}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorState }, { text: '{!Visitor.City}', value: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].visitorCity }];

var enumMacroReverse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_schema__["a" /* reverseSchema */])(__WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */]);
var macroName = function macroName(type) {
  return __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["i" /* macrosText */][enumMacroReverse[type]];
};

function insertMacro(selectedMacro, msg, insertStartPos, insertEndPos) {
  var macroText = selectedMacro === __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].insertMacro ? '' : macroName(selectedMacro);
  return msg.substring(0, insertStartPos).concat(macroText, msg.substring(insertEndPos));
}

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Keyboard shortcut for \'Send\'')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Keyboard shortcut for \'Next Chat\'')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Keyboard shortcut for \'Next Response\'')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Keyboard shortcut for \'Search Canned Message\'')));

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {});

var ChatTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ChatTab, _React$Component);

  function ChatTab(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ChatTab);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatTab.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ChatTab)).call(this, props));

    _this.state = {
      selectedMacro: __WEBPACK_IMPORTED_MODULE_14__constants_enums_preference__["h" /* macros */].insertMacro,
      insertStartPos: 0,
      insertEndPos: 0
    };

    _this.handleChangeSendShortcut = _this.handleChangeSendShortcut.bind(_this);
    _this.handleChangeMacro = _this.handleChangeMacro.bind(_this);
    _this.handlePreDefinedChange = _this.handlePreDefinedChange.bind(_this);
    _this.handleChangeAutoSendMsg = _this.handleChangeAutoSendMsg.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleChangeSCNextChat = _this.handleChangeSCNextChat.bind(_this);
    _this.handleChangeSCNextResponse = _this.handleChangeSCNextResponse.bind(_this);
    _this.handleChangeSCCannedMsg = _this.handleChangeSCCannedMsg.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ChatTab, [{
    key: 'handleChangeSendShortcut',
    value: function handleChangeSendShortcut(value) {
      this.setState({
        shortcutSend: value
      });
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.info, { shortcutSend: value });
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleChangeAutoSendMsg',
    value: function handleChangeAutoSendMsg(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.info);
      newInfo.ifAutoSendMessage = value;
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleChangeSCNextChat',
    value: function handleChangeSCNextChat(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { shortcutNextChat: value });
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleChangeSCNextResponse',
    value: function handleChangeSCNextResponse(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { shortcutNextResponse: value });
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleChangeSCCannedMsg',
    value: function handleChangeSCCannedMsg(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { shortcutCannedMessage: value });
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleChangeMacro',
    value: function handleChangeMacro(value) {
      var newPos = this.state.insertStartPos + macroName(value).length;
      this.setState({
        insertStartPos: newPos,
        insertEndPos: newPos
      });
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info);
      newInfo.messageWhenAcceptChat = insertMacro(value, newInfo.messageWhenAcceptChat, this.state.insertStartPos, this.state.insertEndPos);
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      this.setState({
        insertStartPos: event.target.selectionStart,
        insertEndPos: event.target.selectionEnd
      });
    }
  }, {
    key: 'handlePreDefinedChange',
    value: function handlePreDefinedChange(event) {
      this.setState({
        insertStartPos: event.target.selectionStart,
        insertEndPos: event.target.selectionStart
      });
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.info);
      newInfo.messageWhenAcceptChat = event.target.value;
      this.props.updateChatTab(newInfo);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.settingsContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.configCols
      }, void 0, _ref), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__style_css___default.a.configCols, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.rightCols)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Select_Select__["a" /* default */], {
        input: {
          value: this.props.info.shortcutSend,
          onChange: this.handleChangeSendShortcut
        },
        options: SendShortcutSelector,
        width: 200,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_16__Modal_css___default.a.dropdown
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Shortcut__["a" /* default */], {
        keys: this.props.info.shortcutNextChat.length === 0 ? [17, 69] : this.props.info.shortcutNextChat,
        handleChange: this.handleChangeSCNextChat
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Shortcut__["a" /* default */], {
        keys: this.props.info.shortcutNextResponse.length === 0 ? [17, 82] : this.props.info.shortcutNextResponse,
        handleChange: this.handleChangeSCNextResponse
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.width40
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Shortcut__["a" /* default */], {
        keys: this.props.info.shortcutCannedMessage.length === 0 ? [17, 70] : this.props.info.shortcutCannedMessage,
        handleChange: this.handleChangeSCCannedMsg
      }))))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__style_css___default.a.configCols, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.fullWidth)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifAutoSendMessage,
          onChange: this.handleChangeAutoSendMsg },
        text: 'Automatically send a pre-defined message after a chat request is accepted'
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { display: this.props.info.ifAutoSendMessage ? 'block' : 'none' },
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.preDefinedMessage
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Select_Select__["a" /* default */], {
        input: {
          value: this.state.selectedMacro,
          onChange: this.handleChangeMacro
        },
        options: MacroSelector,
        width: 200,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_16__Modal_css___default.a.dropdown
      }), _ref2, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__TextArea_TextArea__["a" /* default */], {
        meta: {},
        input: {
          value: this.props.info.messageWhenAcceptChat,
          onChange: this.handlePreDefinedChange,
          onClick: this.handleFocus
        },
        name: 'preDefinedMessage',
        rows: '4'
      }))))));
    }
  }]);

  return ChatTab;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatTab);

/***/ }),

/***/ 1434:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Transfer_Transfer__ = __webpack_require__(1486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_schema__ = __webpack_require__(108);







// import classnames from 'classnames';





var getCustomVariableName = function getCustomVariableName(variableId, variables) {
  var tmp = variables.filter(function (item) {
    return item.id === variableId;
  });
  var name = '';
  if (tmp.length > 0) {
    name = tmp[0].name;
  }
  return name;
};

var enumColumnReverse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_schema__["a" /* reverseSchema */])(__WEBPACK_IMPORTED_MODULE_9__constants_enums_preference__["c" /* enumColumn */]);

var columnToColumnName = function columnToColumnName(enumColumn, variableId, variables) {
  var name = '';
  if (enumColumn === __WEBPACK_IMPORTED_MODULE_9__constants_enums_preference__["c" /* enumColumn */].CustomVariable) {
    name = getCustomVariableName(variableId, variables) + '\n      (' + __WEBPACK_IMPORTED_MODULE_9__constants_enums_preference__["a" /* enumColumnName */].CustomVariable + ')';
  } else {
    name = __WEBPACK_IMPORTED_MODULE_9__constants_enums_preference__["a" /* enumColumnName */][enumColumnReverse[enumColumn]];
  }
  return name;
};

var filterValidColumns = function filterValidColumns(columns, variables) {
  var i = 0;
  var validColumns = [];
  columns.forEach(function (item) {
    if (item.ifVisible) {
      var displayName = columnToColumnName(item.enumColumn, item.customVariableId, variables);
      if (displayName && displayName !== '') {
        validColumns.push({
          id: i,
          name: displayName,
          data: item,
          ifSelected: item.ifVisible
        });
        i += 1;
      }
    }
  });
  columns.forEach(function (item) {
    if (!item.ifVisible) {
      var displayName = columnToColumnName(item.enumColumn, item.customVariableId, variables);
      if (displayName && displayName !== '') {
        validColumns.push({
          id: i,
          name: displayName,
          data: item,
          ifSelected: item.ifVisible
        });
        i += 1;
      }
    }
  });
  return validColumns;
};

var ColumnsTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ColumnsTab, _React$Component);

  function ColumnsTab(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ColumnsTab);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColumnsTab.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ColumnsTab)).call(this, props));

    _this.state = {
      // ifTestG2ASuccess: props.ifTestG2ASuccess,
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ColumnsTab, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.settingsContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.columnsTitle
      }, void 0, 'Select which columns to display in your Agent Console window.'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Transfer_Transfer__["a" /* default */], {
        unselectedTitle: 'Hide these columns',
        selectedTitle: 'Display these columns',
        items: filterValidColumns(this.props.info, this.props.siteInfo.customVariables),
        selected: filterValidColumns(this.props.info, this.props.siteInfo.customVariables).filter(function (item) {
          return item.ifSelected === true;
        }),
        unselected: filterValidColumns(this.props.info, this.props.siteInfo.customVariables).filter(function (item) {
          return item.ifSelected !== true;
        }),
        onChange: this.props.updateColumnsTab
      }));
    }
  }]);

  return ColumnsTab;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ColumnsTab);

/***/ }),

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_language__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Modal_css__);
















var translateLanguages = function translateLanguages() {
  return __WEBPACK_IMPORTED_MODULE_13__constants_enums_preference__["f" /* translateLanguageNames */].map(function (item, index) {
    return {
      text: item,
      value: index + 1
    };
  });
};

var TextDirectionSelect = [{ text: 'Left to Right', value: 0 }, { text: 'Right to Left', value: 1 }];

var SpellLanguageSelect = [{ text: 'English', value: __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_language__["a" /* english */] }, { text: 'Spanish', value: __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_language__["b" /* spanish */] }, { text: 'French', value: __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_language__["c" /* french */] }, { text: 'German', value: __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_language__["d" /* german */] }];

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Text Direction'));

var LanguageTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(LanguageTab, _React$Component);

  function LanguageTab(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, LanguageTab);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LanguageTab.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(LanguageTab)).call(this, props));

    _this.handleChangeTextDiretion = _this.handleChangeTextDiretion.bind(_this);
    _this.handleEnableSpellCheck = _this.handleEnableSpellCheck.bind(_this);
    _this.handleChangeLanguageSpellCheck = _this.handleChangeLanguageSpellCheck.bind(_this);
    _this.handleEnableTranslation = _this.handleEnableTranslation.bind(_this);
    _this.handleChangeTranslateToLanguage = _this.handleChangeTranslateToLanguage.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(LanguageTab, [{
    key: 'handleChangeTextDiretion',
    value: function handleChangeTextDiretion(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        textDirectionIfRTL: value === 1
      });
      this.props.updateLanguageTab(newInfo);
    }
  }, {
    key: 'handleEnableSpellCheck',
    value: function handleEnableSpellCheck(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        ifEnableSpellCheck: value
      });
      this.props.updateLanguageTab(newInfo);
    }
  }, {
    key: 'handleChangeLanguageSpellCheck',
    value: function handleChangeLanguageSpellCheck(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        languageSpellCheck: value
      });
      this.props.updateLanguageTab(newInfo);
    }
  }, {
    key: 'handleEnableTranslation',
    value: function handleEnableTranslation(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        ifEnableTranslate: value
      });
      this.props.updateLanguageTab(newInfo);
    }
  }, {
    key: 'handleChangeTranslateToLanguage',
    value: function handleChangeTranslateToLanguage(value) {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        translateLanguage: value
      });
      this.props.updateLanguageTab(newInfo);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__style_css___default.a.settingsContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__style_css___default.a.configCols
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifEnableSpellCheck,
          onChange: this.handleEnableSpellCheck },
        text: 'Enable Spell Check'
      }))), this.props.ifEnableChatIntegration && this.props.ifEnableChatTranslation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifEnableTranslate,
          onChange: this.handleEnableTranslation },
        text: 'Enable Auto Chat Translation to'
      })))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__style_css___default.a.configCols, __WEBPACK_IMPORTED_MODULE_11__style_css___default.a.rightCols)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Select_Select__["a" /* default */], {
        input: {
          value: this.props.info.textDirectionIfRTL ? 1 : 0,
          onChange: this.handleChangeTextDiretion
        },
        options: TextDirectionSelect,
        width: 200,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.dropdown
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Select_Select__["a" /* default */], {
        input: {
          value: this.props.info.languageSpellCheck,
          onChange: this.handleChangeLanguageSpellCheck
        },
        options: SpellLanguageSelect,
        width: 200,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.dropdown
      })))), this.props.ifEnableChatIntegration && this.props.ifEnableChatTranslation && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Select_Select__["a" /* default */], {
        input: {
          value: this.props.info.translateLanguage,
          onChange: this.handleChangeTranslateToLanguage
        },
        options: translateLanguages(),
        width: 200,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.dropdown
      }))))));
    }
  }]);

  return LanguageTab;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LanguageTab);

/***/ }),

/***/ 1436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_utils_reporter__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Input_Input_css__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Icons_Icon_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Icons_Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Icons_Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_joinme__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__Modal_css__);





















var CloseActionSelect = [{ text: 'Exit', value: 0 }, { text: 'Minimize window to system tray', value: 1 }];

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'minutes after a chat session ends.');

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'minutes of no mouse or keyboard input.');

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'minutes of no mouse or keyboard input.');

var OthersTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(OthersTab, _React$Component);

  function OthersTab(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, OthersTab);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OthersTab.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(OthersTab)).call(this, props));

    _this.state = {
      ifJoinMeConnnected: false,
      joinMeAccount: '',
      checkingJoinMe: true,
      ifWeb: true
    };

    _this.handleAutoRun = _this.handleAutoRun.bind(_this);
    _this.handleAutoLogin = _this.handleAutoLogin.bind(_this);
    _this.handleAutoAway = _this.handleAutoAway.bind(_this);
    _this.handleAutoAwayMinutes = _this.handleAutoAwayMinutes.bind(_this);
    _this.handleAutoLogoff = _this.handleAutoLogoff.bind(_this);
    _this.handleLogoffMinutes = _this.handleLogoffMinutes.bind(_this);
    _this.handleAutoMonitor = _this.handleAutoMonitor.bind(_this);
    _this.handleAutoCloseChatWindow = _this.handleAutoCloseChatWindow.bind(_this);
    _this.handleCloseChatDelayMinutes = _this.handleCloseChatDelayMinutes.bind(_this);
    _this.handleChangeG2MEmail = _this.handleChangeG2MEmail.bind(_this);
    _this.handleChangeG2MPassword = _this.handleChangeG2MPassword.bind(_this);
    _this.handleChangeClosingAction = _this.handleChangeClosingAction.bind(_this);
    _this.clickG2MConnection = _this.clickG2MConnection.bind(_this);
    _this.clickResetG2M = _this.clickResetG2M.bind(_this);
    _this.clickResetJoinMe = _this.clickResetJoinMe.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(OthersTab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.focusElement === 'autoCloseChatDelayMinutes') {
        this.autoCloseChatDelayMinutes.focus();
      } else if (this.props.focusElement === 'autoAwayMinutes') {
        this.autoAwayMinutes.focus();
      } else if (this.props.focusElement === 'autoLogoffMinutes') {
        this.autoLogoffMinutes.focus();
      }
      if (this.props.ifEnableJoinMe) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__services_joinme__["a" /* joinMeConnect */])(this.props.info.joinMeIntegrationServer, this.props.info.agentInfo).then(function (_ref) {
          var connected = _ref.connected,
              accountName = _ref.accountName;

          if (connected) {
            _this2.setState({
              ifJoinMeConnnected: connected,
              joinMeAccount: accountName,
              checkingJoinMe: false
            });
          } else {
            _this2.setState({
              ifJoinMeConnnected: connected,
              joinMeAccount: '',
              checkingJoinMe: false
            });
          }
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_9_src_utils_reporter__["a" /* error */](error, 'OthersTab', 73, 0);
        });
      }
    }
  }, {
    key: 'handleAutoMonitor',
    value: function handleAutoMonitor(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifEnableAutoMonitor: value }));
    }
  }, {
    key: 'handleAutoRun',
    value: function handleAutoRun(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifAutoStartup: value }));
    }
  }, {
    key: 'handleAutoLogin',
    value: function handleAutoLogin(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifAutoLogin: value }));
    }
  }, {
    key: 'handleAutoAway',
    value: function handleAutoAway(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifAutoAway: value }));
    }
  }, {
    key: 'handleAutoAwayMinutes',
    value: function handleAutoAwayMinutes(e) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { autoAwayMinutes: e.target.value }));
    }
  }, {
    key: 'handleAutoLogoff',
    value: function handleAutoLogoff(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifAutoLogoff: value }));
    }
  }, {
    key: 'handleLogoffMinutes',
    value: function handleLogoffMinutes(e) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { autoLogoffMinutes: e.target.value }));
    }
  }, {
    key: 'handleAutoCloseChatWindow',
    value: function handleAutoCloseChatWindow(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { autoCloseChatWindow: value }));
    }
  }, {
    key: 'handleCloseChatDelayMinutes',
    value: function handleCloseChatDelayMinutes(e) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { autoCloseChatDelayMinutes: e.target.value }));
    }
  }, {
    key: 'handleChangeG2MEmail',
    value: function handleChangeG2MEmail(e) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { g2mEmail: e.target.value }));
    }
  }, {
    key: 'handleChangeG2MPassword',
    value: function handleChangeG2MPassword(e) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { g2mPassword: e.target.value }));
    }
  }, {
    key: 'handleChangeClosingAction',
    value: function handleChangeClosingAction(value) {
      this.props.updateOthersTab(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, { ifExitCloseWindow: value === 0 }));
    }
  }, {
    key: 'clickG2MConnection',
    value: function clickG2MConnection() {
      this.props.testG2MConnect(this.props.info.g2mEmail, this.props.info.g2mPassword);
    }
  }, {
    key: 'clickResetG2M',
    value: function clickResetG2M() {
      var newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.props.info, {
        g2mEmail: '',
        g2mPassword: '',
        ifG2MConnected: false
      });
      this.props.updateOthersTab(newInfo);
    }
  }, {
    key: 'clickResetJoinMe',
    value: function clickResetJoinMe() {
      var _this3 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__services_joinme__["b" /* resetJoinMe */])(this.props.info.joinMeIntegrationServer, this.props.info.agentInfo).then(function () {
        _this3.setState({
          ifJoinMeConnnected: false,
          joinMeAccount: '',
          checkingJoinMe: false
        });
      }).catch(function (error) {
        __WEBPACK_IMPORTED_MODULE_9_src_utils_reporter__["a" /* error */](error, 'OthersTab', 156, 0);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.settingsContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, !true && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifAutoStartup,
          onChange: this.handleAutoRun
        },
        text: 'Start Agent Console as your machine starts up.'
      }))), this.props.info.ifMonitorChatPermission && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifEnableAutoMonitor,
          onChange: this.handleAutoMonitor },
        text: 'Automatically monitor all ongoing and new incoming chats.'
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.autoCloseChatWindow,
          onChange: this.handleAutoCloseChatWindow },
        text: 'Automatically close the chat window '
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.shortInput),
        input: {
          value: this.props.info.autoCloseChatDelayMinutes,
          onChange: this.handleCloseChatDelayMinutes
        },
        inputRef: function inputRef(input) {
          _this4.autoCloseChatDelayMinutes = input;
        }
      }), _ref2)), !true && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifAutoAway,
          onChange: this.handleAutoAway },
        text: 'Auto away: Automatically switch to Away after'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.shortInput),
        input: {
          value: this.props.info.autoAwayMinutes,
          onChange: this.handleAutoAwayMinutes
        },
        inputRef: function inputRef(input) {
          _this4.autoAwayMinutes = input;
        }
      }), _ref3)), !true && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifAutoLogoff,
          onChange: this.handleAutoLogoff },
        text: 'Auto Logout: Automatically logout out after'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.shortInput),
        input: {
          value: this.props.info.autoLogoffMinutes,
          onChange: this.handleLogoffMinutes
        },
        inputRef: function inputRef(input) {
          _this4.autoLogoffMinutes = input;
        }
      }), _ref4)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Checkbox_Checkbox__["a" /* default */], {
        input: {
          value: this.props.info.ifAutoLogin,
          onChange: this.handleAutoLogin },
        text: 'Automatically login with last login information.'
      }))), !true && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        style: { paddingLeft: 20 }
      }, void 0, 'What action to take when closing Agent Console: '), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { paddingLeft: 10, display: 'inline-block' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__Select_Select__["a" /* default */], {
        input: {
          value: this.props.info.ifExitCloseWindow ? 0 : 1,
          onChange: this.handleChangeClosingAction
        },
        options: CloseActionSelect,
        width: 240,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_19__Modal_css___default.a.dropdown
      })))), this.props.ifEnableScreenSharing && this.props.ifEnableGotoMeeting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.screenSharing
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__style_css___default.a.screenSharingTitle, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.testMsg)
      }, void 0, 'GoToMeeting Integration'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__style_css___default.a.loading, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.successMsg),
        style: { display: this.props.isTesting ? 'inline-block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_16__constants_enums__["b" /* icons */].loadingGreen,
        className: __WEBPACK_IMPORTED_MODULE_15__Icons_Icon_css___default.a.g2mTestLoading,
        size: 14
      })), !this.props.isTesting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.testMsg
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.successMsg,
        style: { display: this.props.ifTestG2ASuccess ? 'block' : 'none' }
      }, void 0, 'Successful connection test.'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.errorMsg,
        style: { display: !this.props.ifTestG2ASuccess ? 'block' : 'none' }
      }, void 0, this.props.errorMsg)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { display: this.props.info.ifG2MConnected ? 'none' : 'block' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.title
      }, void 0, 'Email:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.inputWidth),
        input: {
          value: this.props.info.g2mEmail,
          onChange: this.handleChangeG2MEmail
        }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.title
      }, void 0, 'Password:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        type: 'password',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_13__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.inputWidth),
        input: {
          value: this.props.info.g2mPassword,
          onChange: this.handleChangeG2MPassword
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.linkBtn,
        onClick: this.clickG2MConnection
      }, void 0, 'Test Connection')))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        style: { display: this.props.info.ifG2MConnected ? 'block' : 'none' }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.title
      }, void 0, 'Email:'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        style: { color: '#888' }
      }, void 0, this.props.info.g2mEmail), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.linkBtn,
        onClick: this.clickResetG2M
      }, void 0, 'Reset Account')))))), this.props.ifEnableScreenSharing && this.props.ifEnableJoinMe && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.screenSharing
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.screenSharingTitle
      }, void 0, 'Join.Me Integration'), this.state.checkingJoinMe && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.joinMeInfo
      }, void 0, 'Loading...'), !this.state.checkingJoinMe && !this.state.ifJoinMeConnnected && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.joinMeInfo
      }, void 0, 'No associated account was found.'), !this.state.checkingJoinMe && this.state.ifJoinMeConnnected && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.title
      }, void 0, 'Email:'), this.state.joinMeAccount, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_10__style_css___default.a.linkBtn,
        onClick: this.clickResetJoinMe
      }, void 0, 'Reset Account')))));
    }
  }]);

  return OthersTab;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OthersTab);

/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MenuTab_Tab__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ChatTab__ = __webpack_require__(1433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__LanguageTab__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__SoundPopupTab__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ColumnsTab__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__OthersTab__ = __webpack_require__(1436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__StandbyNotice_StandbyNotice__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__utils_helper__ = __webpack_require__(16);


























var initSoundArray = function initSoundArray(_ref, siteInfo) {
  var visitorEnterSiteSoundId = _ref.visitorEnterSiteSoundId,
      visitorEnterSiteSoundVolume = _ref.visitorEnterSiteSoundVolume,
      ifVisitorEnterSitePopup = _ref.ifVisitorEnterSitePopup,
      ifVisitorEnterSiteSoundOn = _ref.ifVisitorEnterSiteSoundOn,
      newChatRequestSoundId = _ref.newChatRequestSoundId,
      newChatRequestSoundVolume = _ref.newChatRequestSoundVolume,
      ifNewChatRequestPopup = _ref.ifNewChatRequestPopup,
      ifNewChatRequestSoundOn = _ref.ifNewChatRequestSoundOn,
      chatInQueueSoundId = _ref.chatInQueueSoundId,
      chatInQueueSoundVolume = _ref.chatInQueueSoundVolume,
      ifChatInQueuePopup = _ref.ifChatInQueuePopup,
      ifChatInQueueSoundOn = _ref.ifChatInQueueSoundOn,
      newResponseSoundId = _ref.newResponseSoundId,
      newResponseSoundVolume = _ref.newResponseSoundVolume,
      ifNewResponsePopup = _ref.ifNewResponsePopup,
      ifNewResponseSoundOn = _ref.ifNewResponseSoundOn,
      chatEndedSoundId = _ref.chatEndedSoundId,
      chatEndedSoundVolume = _ref.chatEndedSoundVolume,
      ifChatEndedPopup = _ref.ifChatEndedPopup,
      ifChatEndedSoundOn = _ref.ifChatEndedSoundOn,
      transferSoundId = _ref.transferSoundId,
      transferSoundVolume = _ref.transferSoundVolume,
      ifTransferPopup = _ref.ifTransferPopup,
      ifTransferSoundOn = _ref.ifTransferSoundOn,
      privateMessageSoundId = _ref.privateMessageSoundId,
      privateMessageSoundVolume = _ref.privateMessageSoundVolume,
      ifPrivateMessageSoundOn = _ref.ifPrivateMessageSoundOn,
      ifPrivateMessagePopup = _ref.ifPrivateMessagePopup,
      exceptionSoundId = _ref.exceptionSoundId,
      exceptionSoundVolume = _ref.exceptionSoundVolume,
      ifExceptionPopup = _ref.ifExceptionPopup,
      ifExceptionSoundOn = _ref.ifExceptionSoundOn,
      segmentationSoundId = _ref.segmentationSoundId,
      segmentationSoundVolume = _ref.segmentationSoundVolume,
      ifSegmentationPopup = _ref.ifSegmentationPopup,
      ifSegmentationSoundOn = _ref.ifSegmentationSoundOn,
      audioVideoChatRequestSoundId = _ref.audioVideoChatRequestSoundId,
      audioVideoChatRequestSoundVolume = _ref.audioVideoChatRequestSoundVolume,
      ifAudioVideoChatRequestPopup = _ref.ifAudioVideoChatRequestPopup,
      ifAudioVideoChatRequestSoundOn = _ref.ifAudioVideoChatRequestSoundOn,
      audioVideoChatEndSoundId = _ref.audioVideoChatEndSoundId,
      audioVideoChatEndSoundVolume = _ref.audioVideoChatEndSoundVolume,
      ifAudioVideoChatEndPopup = _ref.ifAudioVideoChatEndPopup,
      ifAudioVideoChatEndSoundOn = _ref.ifAudioVideoChatEndSoundOn;

  var array = [{
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumVisitorEnterSite,
    id: visitorEnterSiteSoundId,
    volume: visitorEnterSiteSoundVolume,
    ifSoundOn: ifVisitorEnterSiteSoundOn,
    ifPopup: ifVisitorEnterSitePopup
  }, {
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumIncomingChat,
    id: newChatRequestSoundId,
    volume: newChatRequestSoundVolume,
    ifSoundOn: ifNewChatRequestSoundOn,
    ifPopup: ifNewChatRequestPopup
  }];
  if (siteInfo.ifAutoAcceptChat || siteInfo.ifEnableAutoAllocation) {
    array.push({
      type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumChatInQueue,
      id: chatInQueueSoundId,
      volume: chatInQueueSoundVolume,
      ifSoundOn: ifChatInQueueSoundOn,
      ifPopup: ifChatInQueuePopup
    });
  }
  array.push({
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumNewResponse,
    id: newResponseSoundId,
    volume: newResponseSoundVolume,
    ifSoundOn: ifNewResponseSoundOn,
    ifPopup: ifNewResponsePopup
  });
  array.push({
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumChatEnded,
    id: chatEndedSoundId,
    volume: chatEndedSoundVolume,
    ifSoundOn: ifChatEndedSoundOn,
    ifPopup: ifChatEndedPopup
  });
  if (siteInfo.ifEnableTeamWork) {
    array.push({
      type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumTransferingChat,
      id: transferSoundId,
      volume: transferSoundVolume,
      ifSoundOn: ifTransferSoundOn,
      ifPopup: ifTransferPopup
    });
    array.push({
      type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumOperatorMessage,
      id: privateMessageSoundId,
      volume: privateMessageSoundVolume,
      ifSoundOn: ifPrivateMessageSoundOn,
      ifPopup: ifPrivateMessagePopup
    });
  }
  if (siteInfo.ifEnableSegmentation) {
    array.push({
      type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumSegmentation,
      id: segmentationSoundId,
      volume: segmentationSoundVolume,
      ifSoundOn: ifSegmentationSoundOn,
      ifPopup: ifSegmentationPopup
    });
  }
  array.push({
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumException,
    id: exceptionSoundId,
    volume: exceptionSoundVolume,
    ifSoundOn: ifExceptionSoundOn,
    ifPopup: ifExceptionPopup
  });

  array.push({
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumIncomingAudioVideoChat,
    id: audioVideoChatRequestSoundId,
    volume: audioVideoChatRequestSoundVolume,
    ifSoundOn: ifAudioVideoChatRequestSoundOn,
    ifPopup: ifAudioVideoChatRequestPopup
  });
  array.push({
    type: __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumEndAudioVideoChat,
    id: audioVideoChatEndSoundId,
    volume: audioVideoChatEndSoundVolume,
    ifSoundOn: ifAudioVideoChatEndSoundOn,
    ifPopup: ifAudioVideoChatEndPopup
  });
  return array;
};

var Column = function Column(col, visible, columnWidth) {
  var variableId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    enumColumn: col,
    ifVisible: visible,
    width: columnWidth,
    customVariableId: variableId
  };
};

var showShortcutConflictError = function showShortcutConflictError(name1, name2) {
  return 'Shortcut for "' + name1 + '" conflict with "' + name2 + '"';
};

var isValidNumber = function isValidNumber(value) {
  var reg = new RegExp('^\\d{1,3}$');
  return !(reg.exec(value) === null || value === '0');
};

var isEqualShortcut = function isEqualShortcut(shortcut1, shortcut2) {
  return __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(shortcut1, shortcut2);
};

var isValidShortcut = function isValidShortcut(keys) {
  var actionKey = keys[keys.length - 1];
  return !(actionKey === 17 || actionKey === 18 || actionKey === 16 || actionKey === 0);
};

var isClashSend = function isClashSend(keys) {
  return __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(keys, [17, 13]);
};

var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__utils_helper__["e" /* shouldComponentUpdateGen */])('Settings', ['selectedTab', 'isTesting', 'ifTestG2ASuccess', 'errorMsg']);

var Settings = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Settings, _React$Component);

  function Settings(props) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Settings);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Settings.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Settings)).call(this, props));

    _this.timer = null;
    _this.state = {
      ifOpen: true,
      chatInfo: props.chatInfo,
      languageInfo: props.languageInfo,
      soundpopupInfo: props.soundpopupInfo,
      columnsInfo: props.columnsInfo,
      othersInfo: props.othersInfo,
      ifShowValidationMsg: false,
      validationMsg: '',
      focusElement: ''
    };

    _this.saveClick = _this.saveClick.bind(_this);
    _this.cancelClick = _this.cancelClick.bind(_this);
    _this.restoreSoundInfo = _this.restoreSoundInfo.bind(_this);
    _this.updateChatTab = _this.updateChatTab.bind(_this);
    _this.updateLanguageTab = _this.updateLanguageTab.bind(_this);
    _this.updateSoundTab = _this.updateSoundTab.bind(_this);
    _this.updateOthersTab = _this.updateOthersTab.bind(_this);
    _this.updateColumnsTab = _this.updateColumnsTab.bind(_this);
    _this.restoreClick = _this.restoreClick.bind(_this);
    _this.toErrorTab = _this.toErrorTab.bind(_this);
    _this.setError = _this.setError.bind(_this);
    _this.resetError = _this.resetError.bind(_this);
    _this.checkShortcut = _this.checkShortcut.bind(_this);
    _this.checkNumbers = _this.checkNumbers.bind(_this);
    _this.tabClick = _this.tabClick.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Settings, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps) || this.state !== nextState;
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
    key: 'setError',
    value: function setError(message) {
      var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this.setState({
        validationMsg: message,
        ifShowValidationMsg: true,
        focusElement: propName
      });
    }
  }, {
    key: 'resetError',
    value: function resetError() {
      this.setState({
        validationMsg: '',
        ifShowValidationMsg: false,
        focusElement: ''
      });
    }
  }, {
    key: 'toErrorTab',
    value: function toErrorTab(tab) {
      this.props.clickTab(tab);
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(this.resetError, 3 * 1000);
    }
  }, {
    key: 'tabClick',
    value: function tabClick(tab) {
      this.resetError();
      this.props.clickTab(tab);
    }
  }, {
    key: 'checkShortcut',
    value: function checkShortcut() {
      var shortcuts = [];
      shortcuts.push({
        name: 'Next Chat',
        keys: this.state.chatInfo.shortcutNextChat
      });
      shortcuts.push({
        name: 'Next Response',
        keys: this.state.chatInfo.shortcutNextResponse
      });
      shortcuts.push({
        name: 'Search Canned Message',
        keys: this.state.chatInfo.shortcutCannedMessage
      });

      var isValid = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(shortcuts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (!isValidShortcut(item.keys)) {
            this.setError('Invalid shortcut for \'' + item.name + '\'');
            this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].chat);
            isValid = false;
            break;
          }

          if (isClashSend(item.keys)) {
            this.setError(showShortcutConflictError(item.name, 'Send'));
            this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].chat);
            isValid = false;
            break;
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(shortcuts), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item2 = _step2.value;

              if (item.name !== item2.name && isEqualShortcut(item.keys, item2.keys)) {
                this.setError(showShortcutConflictError(item.name, item2.name));
                this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].chat);
                return false;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return isValid;
    }
  }, {
    key: 'checkNumbers',
    value: function checkNumbers() {
      var invalidNumberMessage = 'You should input a positive number(1-999).';
      if (!isValidNumber(this.state.othersInfo.autoCloseChatDelayMinutes)) {
        this.setError(invalidNumberMessage, 'autoCloseChatDelayMinutes');
        this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].others);
        return false;
      }

      if (!isValidNumber(this.state.othersInfo.autoAwayMinutes)) {
        this.setError(invalidNumberMessage, 'autoAwayMinutes');
        this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].others);
        return false;
      }

      if (!isValidNumber(this.state.othersInfo.autoLogoffMinutes)) {
        this.setError(invalidNumberMessage, 'autoLogoffMinutes');
        this.toErrorTab(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].others);
        return false;
      }
      return true;
    }
  }, {
    key: 'saveClick',
    value: function saveClick() {
      if (this.checkShortcut() && this.checkNumbers()) {
        this.props.saveSettings(this.state, this.props.siteInfo);
        this.close();
      }
    }
  }, {
    key: 'updateChatTab',
    value: function updateChatTab(newInfo) {
      this.setState({
        chatInfo: newInfo
      });
    }
  }, {
    key: 'updateLanguageTab',
    value: function updateLanguageTab(newInfo) {
      this.setState({
        languageInfo: newInfo
      });
    }
  }, {
    key: 'updateSoundTab',
    value: function updateSoundTab(_ref2) {
      var type = _ref2.type,
          id = _ref2.id,
          volume = _ref2.volume,
          ifSoundOn = _ref2.ifSoundOn,
          ifPopup = _ref2.ifPopup;

      var newInfo = {};
      switch (type) {
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumVisitorEnterSite:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            visitorEnterSiteSoundId: id,
            visitorEnterSiteSoundVolume: volume,
            ifVisitorEnterSiteSoundOn: ifSoundOn,
            ifVisitorEnterSitePopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumIncomingChat:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            newChatRequestSoundId: id,
            newChatRequestSoundVolume: volume,
            ifNewChatRequestSoundOn: ifSoundOn,
            ifNewChatRequestPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumChatInQueue:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            chatInQueueSoundId: id,
            chatInQueueSoundVolume: volume,
            ifChatInQueueSoundOn: ifSoundOn,
            ifChatInQueuePopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumTransferingChat:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            transferSoundId: id,
            transferSoundVolume: volume,
            ifTransferSoundOn: ifSoundOn,
            ifTransferPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumNewResponse:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            newResponseSoundId: id,
            newResponseSoundVolume: volume,
            ifNewResponseSoundOn: ifSoundOn,
            ifNewResponsePopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumOperatorMessage:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            privateMessageSoundId: id,
            privateMessageSoundVolume: volume,
            ifPrivateMessageSoundOn: ifSoundOn,
            ifPrivateMessagePopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumChatEnded:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            chatEndedSoundId: id,
            chatEndedSoundVolume: volume,
            ifChatEndedSoundOn: ifSoundOn,
            ifChatEndedPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumException:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            exceptionSoundId: id,
            exceptionSoundVolume: volume,
            ifExceptionSoundOn: ifSoundOn,
            ifExceptionPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumSegmentation:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            segmentationSoundId: id,
            segmentationSoundVolume: volume,
            ifSegmentationSoundOn: ifSoundOn,
            ifSegmentationPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumIncomingAudioVideoChat:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            audioVideoChatRequestSoundId: id,
            audioVideoChatRequestSoundVolume: volume,
            ifAudioVideoChatRequestSoundOn: ifSoundOn,
            ifAudioVideoChatRequestPopup: ifPopup
          });
          break;
        case __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["d" /* soundType */].enumEndAudioVideoChat:
          newInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.soundpopupInfo, {
            audioVideoChatEndSoundId: id,
            audioVideoChatEndSoundVolume: volume,
            ifAudioVideoChatEndSoundOn: ifSoundOn,
            ifAudioVideoChatEndPopup: ifPopup
          });
          break;
        default:
          break;
      }
      this.setState({
        soundpopupInfo: newInfo
      });
    }
  }, {
    key: 'updateColumnsTab',
    value: function updateColumnsTab(newInfo) {
      this.setState({
        columnsInfo: newInfo
      });
    }
  }, {
    key: 'updateOthersTab',
    value: function updateOthersTab(newInfo) {
      this.setState({
        othersInfo: newInfo
      });
    }
  }, {
    key: 'cancelClick',
    value: function cancelClick() {
      this.setState({
        chatInfo: this.props.chatInfo,
        languageInfo: this.props.languageInfo,
        soundpopupInfo: this.props.soundpopupInfo,
        columnsInfo: this.props.columnsInfo,
        othersInfo: this.props.othersInfo
      });
      this.close();
    }
  }, {
    key: 'testG2MConnect',
    value: function testG2MConnect() {
      this.props.testG2MConnect(this.state.othersInfo.g2mEmail, this.state.othersInfo.g2mPassword);
    }
  }, {
    key: 'restoreClick',
    value: function restoreClick() {
      if (this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].soundpopup) {
        this.restoreSoundInfo();
      } else if (this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].columns) {
        this.restoreColumns();
      }
    }
  }, {
    key: 'restoreSoundInfo',
    value: function restoreSoundInfo() {
      this.setState({
        soundpopupInfo: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
          visitorEnterSiteSoundId: 4,
          visitorEnterSiteSoundVolume: 50,
          ifVisitorEnterSitePopup: false,
          ifVisitorEnterSiteSoundOn: true,
          newChatRequestSoundId: 1,
          newChatRequestSoundVolume: 50,
          ifNewChatRequestPopup: true,
          ifNewChatRequestSoundOn: true,
          // newchatinqueue
          chatInQueueSoundId: 12,
          chatInQueueSoundVolume: 50,
          ifChatInQueuePopup: false,
          ifChatInQueueSoundOn: false,
          // newresponse
          newResponseSoundId: 3,
          newResponseSoundVolume: 50,
          ifNewResponsePopup: true,
          ifNewResponseSoundOn: true,
          // chatend
          chatEndedSoundId: 2,
          chatEndedSoundVolume: 50,
          ifChatEndedPopup: true,
          ifChatEndedSoundOn: true,
          // transferringchat
          transferSoundId: 7,
          transferSoundVolume: 50,
          ifTransferPopup: true,
          ifTransferSoundOn: true,
          // operatormessage
          privateMessageSoundId: 6,
          privateMessageSoundVolume: 50,
          ifPrivateMessageSoundOn: true,
          ifPrivateMessagePopup: true,
          // exception
          exceptionSoundId: 5,
          exceptionSoundVolume: 50,
          ifExceptionPopup: true,
          ifExceptionSoundOn: true,
          // visitorsegment
          segmentationSoundId: 11,
          segmentationSoundVolume: 50,
          ifSegmentationPopup: true,
          ifSegmentationSoundOn: true,

          // imcoming audio/video chat
          audioVideoChatRequestSoundId: 13,
          audioVideoChatRequestSoundVolume: 50,
          ifAudioVideoChatRequestPopup: true,
          ifAudioVideoChatRequestSoundOn: true,
          // audio/video chat ended
          audioVideoChatEndSoundId: 14,
          audioVideoChatEndSoundVolume: 50,
          ifAudioVideoChatEndPopup: true,
          ifAudioVideoChatEndSoundOn: true

        })
      });
    }
  }, {
    key: 'restoreColumns',
    value: function restoreColumns() {
      var defaultDisplayColumns = [];
      var defaultHideColumns = [];
      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Status, true, 30));
      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Info, true, 320));

      if (this.props.siteInfo.ifEnableSegmentation) {
        defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Segment, true, 120));
      } //

      if (this.props.siteInfo.ifTicketEnable) {
        defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].TicketId, false, 100));
      } //

      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Operators, true, 100));
      if (this.props.siteInfo.ifDepartmentEnable) {
        defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Department, false, 100));
      }

      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].ProductService, false, 100));
      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].CurrentPage, true, 250));
      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Referrer, true, 250));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].SearchEngine, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].Keywords, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].LandingPage, false, 250));

      if (this.props.siteInfo.ifCanCustomAutoInvitationRules) {
        defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].AutoInvitation, false, 200));
      } //

      if (this.props.siteInfo.ifMultipleCodePlan) {
        defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].WebsiteIntegrationPlan, false, 200));
      } //

      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].VisitTime, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].CurrentPageBrowsingTime, false, 200));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].WaitTime, false, 200));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].ChatTime, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].TotalTime, false, 100));

      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].VisitTimes, true, 200));
      defaultDisplayColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].ChatTimes, true, 100));

      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].TimeZone, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].City, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].StateProvince, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].CountryRegion, false, 100));
      defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].OfPages, false, 100));

      this.props.siteInfo.customVariables.map(function (item) {
        defaultHideColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["c" /* enumColumn */].CustomVariable, false, 100, item.id));
        return item;
      });

      this.setState({
        columnsInfo: defaultDisplayColumns.concat(defaultHideColumns)
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({
        ifOpen: false
      });
      this.props.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var okProps = [];
      var actionRestore = {
        text: 'Restore Default',
        className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.restoreButton,
        eventClick: this.restoreClick,
        type: 'default'
      };
      var actionOK = { text: 'OK', eventClick: this.saveClick };
      okProps = this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].soundpopup || this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].columns ? okProps.concat([actionRestore]) : okProps;
      okProps = okProps.concat([actionOK]);
      return (
        /**
         * @todo
         * what should it display, when ifUseMainServer is true, but this.state.ifOpen is false?
         * consider return null, if Modal is not required to be loaded.
         */
        props.siteInfo.ifUseMainServer ? this.state.ifOpen && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Modal__["a" /* default */], {
          closeModal: this.close,
          className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.modelHeight,
          title: 'Preference Settings',
          actions: {
            className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.modelButtons,
            okProps: okProps,
            cancelProps: { text: 'Cancel' }
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__MenuTab_Tab__["a" /* default */], {
          tabs: props.tabs,
          selectedTab: props.selectedTab,
          onSelect: this.tabClick
        }), this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].chat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__ChatTab__["a" /* default */], {
          info: this.state.chatInfo,
          updateChatTab: this.updateChatTab
        }), this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].language && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__LanguageTab__["a" /* default */], {
          info: this.state.languageInfo,
          updateLanguageTab: this.updateLanguageTab,
          ifEnableChatIntegration: props.siteInfo.ifEnableChatIntegration,
          ifEnableChatTranslation: props.siteInfo.ifEnableChatTranslation
        }), this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].soundpopup && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__SoundPopupTab__["a" /* default */], {
          info: initSoundArray(this.state.soundpopupInfo, this.props.siteInfo),
          siteInfo: props.siteInfo,
          updateSoundTab: this.updateSoundTab,
          ifSupportNotification: this.props.ifSupportNotification
        }), this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].columns && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__ColumnsTab__["a" /* default */], {
          info: this.state.columnsInfo,
          siteInfo: props.siteInfo,
          updateColumnsTab: this.updateColumnsTab
        }), this.props.selectedTab === __WEBPACK_IMPORTED_MODULE_22__constants_enums_preference__["b" /* preferenceTabs */].others && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__OthersTab__["a" /* default */], {
          info: this.state.othersInfo,
          ifEnableScreenSharing: props.siteInfo.ifEnableScreenSharing,
          ifEnableGotoMeeting: props.siteInfo.ifEnableGotoMeeting,
          ifEnableJoinMe: props.siteInfo.ifEnableJoinMe,
          testG2MConnect: props.testG2MConnect,
          updateOthersTab: this.updateOthersTab,
          isTesting: props.isTesting,
          ifTestG2ASuccess: props.ifTestG2ASuccess,
          errorMsg: props.errorMsg,
          checkJoinMeConnection: props.checkJoinMeConnection,
          focusElement: this.state.focusElement
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          style: { display: this.state.ifShowValidationMsg ? 'block' : 'none' },
          className: __WEBPACK_IMPORTED_MODULE_21__style_css___default.a.validationError
        }, void 0, this.state.validationMsg)) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_20__StandbyNotice_StandbyNotice__["a" /* default */], {
          ifOpen: !this.props.siteInfo.ifUseMainServer,
          closeModal: this.close,
          text: 'Live Chat is running on the secondary server. We\'re sorry but you\'re\n          unable to change the configuration now. Please try again after Live Chat\n          goes back to the primary server.'
        })
      );
    }
  }]);

  return Settings;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Settings);

/***/ }),

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input_Input_css__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input_Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Input_Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__ = __webpack_require__(290);














function getKeyName(keycode) {
  var name = '';
  if (__WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__["j" /* KeycodeDic */][keycode]) {
    name = __WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__["j" /* KeycodeDic */][keycode];
  } else {
    name = '';
  }
  return name;
}

var isValidActionKey = function isValidActionKey(keycode) {
  if (keycode === 17 || keycode === 16 || keycode === 18) {
    return 0;
  }
  return keycode;
};

var getKeyNames = function getKeyNames(keysInfo) {
  var names = [];
  names.push(getKeyName(17));
  if (keysInfo.shiftKey) {
    names.push(getKeyName(16));
  }
  if (keysInfo.altKey) {
    names.push(getKeyName(18));
  }
  names.push(getKeyName(keysInfo.actionKey));
  return names.join(' + ');
};

function init(keycodeArray) {
  var keysInfo = {
    commandKey: false,
    controlKey: true,
    altKey: false, // mac option key
    shiftKey: false,
    actionKey: 0
  };
  keycodeArray.forEach(function (key) {
    if (key === 17) {
      keysInfo.controlKey = true;
    } else if (key === 16) {
      keysInfo.shiftKey = true;
    } else if (key === 18) {
      keysInfo.altKey = true;
    } else {
      keysInfo.actionKey = isValidActionKey(key);
    }
  });
  return keysInfo;
}

function getKeycodeArray(pressedKeys) {
  var keys = [];
  keys.push(17); // always with Ctrl Pressed
  if (pressedKeys.shiftKey) {
    keys.push(16);
  }
  if (pressedKeys.altKey) {
    keys.push(18);
  }
  keys.push(isValidActionKey(pressedKeys.actionKey));
  return keys;
}

var Shortcut = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Shortcut, _React$Component);

  function Shortcut(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Shortcut);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Shortcut.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Shortcut)).call(this, props));

    _this.state = init(props.keys);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Shortcut, [{
    key: 'handleKeypress',
    value: function handleKeypress(event) {
      var _this2 = this;

      var keyPressInfo = {};
      event.target.addEventListener('keydown', function (e) {
        e.preventDefault();
        keyPressInfo = {
          controlKey: e.ctrlKey,
          altKey: e.altKey,
          shiftKey: e.shiftKey,
          actionKey: isValidActionKey(e.keyCode), // Avoid duplications of ctrl/alt/shift keys
          commandKey: false };
        _this2.setState(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, keyPressInfo), function () {
          _this2.props.handleChange(getKeycodeArray(_this2.state));
        });
      }, false);
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.props.handleChange(getKeycodeArray(this.state));
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Input_Input__["a" /* default */], {
        meta: {},
        type: 'text',
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Input_Input_css___default.a.input, __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.inputWidth),
        input: {
          value: getKeyNames(this.state),
          onFocus: this.handleKeypress,
          onChange: this.props.handleChange
        }
      });
    }
  }]);

  return Shortcut;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Shortcut);

/***/ }),

/***/ 1439:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CommonResources_common_css__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__CommonResources_common_css__);









// import Tooltip from '../../Tooltip/Tooltip';






var Sound = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Sound, _React$Component);

  function Sound(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Sound);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Sound.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Sound)).call(this, props));

    _this.audioSource = null;
    _this.clickPlay = _this.clickPlay.bind(_this);
    _this.clickMute = _this.clickMute.bind(_this);
    _this.setVolume = _this.setVolume.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Sound, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.volumeInput.addEventListener('change', function () {
        _this2.setVolume(event);
      });
    }
  }, {
    key: 'setVolume',
    value: function setVolume(event) {
      var volume = parseInt(event.target.value, 10);
      var ifMute = this.props.mute;
      ifMute = volume === 0;
      this.props.changeHandle({
        vol: volume,
        mute: ifMute
      });
    }
  }, {
    key: 'clickPlay',
    value: function clickPlay() {
      if (this.props.mute) {
        return;
      }
      this.audioSource.volume = this.props.volume / 100;
      this.audioSource.load();
      this.audioSource.play();
    }
  }, {
    key: 'clickMute',
    value: function clickMute() {
      this.props.changeHandle({
        vol: this.props.volume,
        mute: !this.props.mute
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.configCols
      }, void 0, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'audio',
        {
          ref: function ref(resource) {
            _this3.audioSource = resource;
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('source', {
          src: this.props.url,
          type: 'audio/mpeg'
        })
      ), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundItem, __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundIconBtn)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        style: {
          display: this.props.mute ? 'block' : 'none'
        },
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].soundPlay,
        className: __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default.a.soundMute,
        size: 20,
        onClick: this.clickMute
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        style: {
          display: this.props.volume <= 50 && !this.props.mute ? 'block' : 'none'
        },
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].soundPlay,
        className: __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default.a.soundVolumeLow,
        size: 20,
        onClick: this.clickMute
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        style: {
          display: this.props.volume > 50 && !this.props.mute ? 'block' : 'none'
        },
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].soundPlay,
        className: __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default.a.soundVolumeHigh,
        size: 20,
        onClick: this.clickMute
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundItem, this.props.mute && __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.disable)
      }, void 0, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', {
        type: 'range',
        min: '0',
        max: '100',
        step: '1',
        value: this.props.volume,
        onChange: this.setVolume,
        style: { width: 120 },
        ref: function ref(element) {
          _this3.volumeInput = element;
        }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundItem, __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundIconBtn)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].soundMute,
        className: this.props.mute ? __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default.a.soundPlayDisable : __WEBPACK_IMPORTED_MODULE_12__Icons_Icon_css___default.a.soundPlay,
        style: { marginLeft: 20 },
        size: 16,
        disabled: this.props.mute,
        onClick: this.clickPlay,
        'data-tip': 'Play',
        'data-for': 'sound'
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a, {
        id: 'sound',
        effect: 'solid',
        place: 'bottom',
        'class': __WEBPACK_IMPORTED_MODULE_13__CommonResources_common_css___default.a.tooltipInfo
      })));
    }
  }]);

  return Sound;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Sound);

/***/ }),

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Sound__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Switch_Switch__ = __webpack_require__(1448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_schema__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Modal_css__);

















var soundList = function soundList(soundArray) {
  var arr = [];
  soundArray.map(function (item) {
    arr.push({
      text: item.name.split('.')[0],
      value: item.id
    });
    return item;
  });
  return arr;
};

var enumSoundTypeReverse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_schema__["a" /* reverseSchema */])(__WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__["d" /* soundType */]);
var soundTypeName = function soundTypeName(type) {
  return __WEBPACK_IMPORTED_MODULE_12__constants_enums_preference__["e" /* soundTypeName */][enumSoundTypeReverse[type]];
};

var SoundItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SoundItem, _React$Component);

  function SoundItem(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SoundItem);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SoundItem.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SoundItem)).call(this, props));

    _this.handleSoundIdChange = _this.handleSoundIdChange.bind(_this);
    _this.handleSoundChange = _this.handleSoundChange.bind(_this);
    _this.handlePopupChange = _this.handlePopupChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(SoundItem, [{
    key: 'handleSoundIdChange',
    value: function handleSoundIdChange(value) {
      this.props.onChange(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.soundInfo, {
        id: value
      }));
    }
  }, {
    key: 'handleSoundChange',
    value: function handleSoundChange(_ref) {
      var vol = _ref.vol,
          mute = _ref.mute;

      this.props.onChange(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.soundInfo, {
        volume: vol,
        ifSoundOn: !mute
      }));
    }
  }, {
    key: 'handlePopupChange',
    value: function handlePopupChange(value) {
      this.props.onChange(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.soundInfo, {
        ifPopup: value
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('tr', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('td', {
        className: __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundTitle
      }, void 0, soundTypeName(this.props.soundInfo.type)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('td', {
        className: __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundConfig
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__style_css___default.a.soundSelector, __WEBPACK_IMPORTED_MODULE_9__style_css___default.a.configCols)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Select_Select__["a" /* default */], {
        options: soundList(this.props.systemSounds),
        width: 98,
        input: {
          value: this.props.soundInfo.id,
          onChange: this.handleSoundIdChange
        },
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_15__Modal_css___default.a.dropdown,
        customizeStyle: { border: 'none', background: 'transparent' }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Sound__["a" /* default */], {
        url: this.props.soundUrl + '?soundId=' + this.props.soundInfo.id,
        volume: this.props.soundInfo.volume,
        mute: !this.props.soundInfo.ifSoundOn,
        changeHandle: this.handleSoundChange
      })), this.props.ifSupportNotification && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('td', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Switch_Switch__["a" /* default */], {
        checked: this.props.soundInfo.ifPopup,
        handleChange: this.handlePopupChange,
        id: this.props.soundInfo.type.toString()
      })));
    }
  }]);

  return SoundItem;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SoundItem);

/***/ }),

/***/ 1441:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SoundItem__ = __webpack_require__(1440);











var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('th', {}, void 0, 'Scenario');

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('th', {}, void 0, 'Alert Sound');

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('th', {}, void 0, 'Alert Popup');

var SoundPopupTab = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SoundPopupTab, _React$Component);

  function SoundPopupTab(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SoundPopupTab);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SoundPopupTab.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SoundPopupTab)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SoundPopupTab, [{
    key: 'handleChange',
    value: function handleChange(item) {
      this.props.updateSoundTab(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__style_css___default.a.settingsContent, __WEBPACK_IMPORTED_MODULE_8__style_css___default.a.soundSettings)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('table', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('thead', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('tr', {}, void 0, _ref, _ref2, this.props.ifSupportNotification && _ref3)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('tbody', {}, void 0, this.props.info.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__SoundItem__["a" /* default */], {
          soundInfo: item,
          systemSounds: _this2.props.siteInfo.systemSounds,
          soundUrl: _this2.props.siteInfo.soundUrl,
          onChange: _this2.handleChange,
          ifSupportNotification: _this2.props.ifSupportNotification
        }, 'item_' + i);
      }))));
    }
  }]);

  return SoundPopupTab;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SoundPopupTab);

/***/ }),

/***/ 1448:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);










var Switch = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Switch, _React$Component);

  function Switch(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Switch);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Switch.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Switch)).call(this, props));

    _this.state = {
      label: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Switch, [{
    key: 'onChange',
    value: function onChange(event) {
      this.props.handleChange(event.target.checked);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__style_css___default.a.switch, __WEBPACK_IMPORTED_MODULE_8__style_css___default.a.switchFlatRound)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('input', {
        id: this.props.id,
        checked: this.props.checked,
        onChange: this.onChange,
        type: 'checkbox'
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('label', { htmlFor: this.props.id }, this.state.label));
    }
  }]);

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transfer_css__ = __webpack_require__(1645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transfer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__transfer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(59);












// import iconStyle from '../Icons/Icon.css';

var swap = function swap(array, first, second) {
  var final = array.slice();
  var temp = final[first];
  final[first] = final[second];
  final[second] = temp;
  return final;
};

var Transfer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Transfer, _React$Component);

  function Transfer(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Transfer);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Transfer.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Transfer)).call(this, props));

    _this.state = {
      selected: props.items.filter(function (item) {
        return item.ifSelected === true;
      }),
      unselected: props.items.filter(function (item) {
        return item.ifSelected === false;
      }),
      selectedIndex: -1,
      unselectedIndex: -1
    };

    _this.selectAll = _this.selectAll.bind(_this);
    _this.unselectAll = _this.unselectAll.bind(_this);
    _this.selectOptionClick = _this.selectOptionClick.bind(_this);
    _this.unSelectOptionClick = _this.unSelectOptionClick.bind(_this);
    _this.selectDoubleClick = _this.selectDoubleClick.bind(_this);
    _this.selectOne = _this.selectOne.bind(_this);
    _this.unselectOne = _this.unselectOne.bind(_this);
    _this.moveToFirst = _this.moveToFirst.bind(_this);
    _this.moveUp = _this.moveUp.bind(_this);
    _this.moveDown = _this.moveDown.bind(_this);
    _this.moveToLast = _this.moveToLast.bind(_this);
    _this.updateValue = _this.updateValue.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Transfer, [{
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
      var selectedItem = [];
      this.props.selected.forEach(function (item) {
        selectedItem.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(item.data));
      });
      this.props.unselected.forEach(function (item) {
        selectedItem.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(item.data, { ifVisible: true }));
      });
      this.setState({
        unselectedIndex: -1,
        selectedIndex: -1
      }, this.props.onChange(selectedItem));
    }
  }, {
    key: 'unselectAll',
    value: function unselectAll() {
      var selectedItem = [];
      this.props.unselected.forEach(function (item) {
        selectedItem.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(item.data));
      });
      this.props.selected.forEach(function (item) {
        selectedItem.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(item.data, { ifVisible: false }));
      });
      this.setState({
        unselectedIndex: -1,
        selectedIndex: -1
      }, this.props.onChange(selectedItem));
    }
  }, {
    key: 'selectOne',
    value: function selectOne() {
      var _this2 = this;

      if (this.state.unselectedIndex < 0) {
        return;
      }
      var selectedIndex = this.state.unselectedIndex;
      var allItems = [];
      this.props.selected.forEach(function (item) {
        allItems.push(item.data);
      });
      allItems.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.items[selectedIndex].data, { ifVisible: true }));
      this.props.unselected.forEach(function (item, index) {
        if (index !== selectedIndex - _this2.props.selected.length) {
          allItems.push(item.data);
        }
      });
      this.setState({
        unselectedIndex: -1
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'unselectOne',
    value: function unselectOne() {
      if (this.state.selectedIndex < 0) {
        return;
      }
      var selectedIndex = this.state.selectedIndex;
      var allItems = [];
      this.props.items.forEach(function (item, index) {
        if (index !== selectedIndex) {
          allItems.push(item.data);
        }
      });
      allItems.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.props.items[selectedIndex].data, { ifVisible: false }));
      this.setState({
        selectedIndex: -1
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'unSelectDoubleClick',
    value: function unSelectDoubleClick(index) {
      this.setState({
        selectedIndex: -1,
        unselectedIndex: index
      });
      this.selectOne();
    }
  }, {
    key: 'selectDoubleClick',
    value: function selectDoubleClick(index) {
      this.setState({
        selectedIndex: index,
        unselectedIndex: -1
      });
      this.unselectOne();
    }
  }, {
    key: 'moveToFirst',
    value: function moveToFirst() {
      if (this.state.selectedIndex <= 0) {
        return;
      }
      var selectedIndex = this.state.selectedIndex;
      var allItems = [];
      allItems.push(this.props.items[selectedIndex].data);
      this.props.items.forEach(function (item, index) {
        if (index !== selectedIndex) {
          allItems.push(item.data);
        }
      });
      this.setState({
        selectedIndex: 0
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      if (this.state.selectedIndex < 0) {
        return;
      }
      var selectedIndex = this.state.selectedIndex;
      var newItems = swap(this.props.items, this.state.selectedIndex - 1, this.state.selectedIndex);
      var allItems = [];
      newItems.forEach(function (item) {
        allItems.push(item.data);
      });
      this.setState({
        selectedIndex: selectedIndex - 1
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      if (this.state.selectedIndex < 0 || this.state.selectedIndex >= this.props.selected.length - 1) {
        return;
      }
      var selectedIndex = this.state.selectedIndex;
      var newItems = swap(this.props.items, this.state.selectedIndex, this.state.selectedIndex + 1);
      var allItems = [];
      newItems.forEach(function (item) {
        allItems.push(item.data);
      });
      this.setState({
        selectedIndex: selectedIndex + 1
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'moveToLast',
    value: function moveToLast() {
      if (this.state.selectedIndex < 0 || this.state.selectedIndex === this.props.selected.length - 1) {
        return;
      }
      var selectedIndex = this.state.selectedIndex;
      var targetIndex = this.props.selected.length - 1;
      var allItems = [];
      this.props.selected.forEach(function (item, index) {
        if (index !== selectedIndex) {
          allItems.push(item.data);
        }
      });
      allItems.push(this.props.items[selectedIndex].data);
      this.props.unselected.forEach(function (item) {
        allItems.push(item.data);
      });
      this.setState({
        selectedIndex: targetIndex
      }, this.props.onChange(allItems));
    }
  }, {
    key: 'updateValue',
    value: function updateValue() {
      this.props.onChange(this.state.selected.concat(this.state.unselected));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.halfWidth)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.list, __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.col)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.header
      }, void 0, this.props.unselectedTitle), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.optionsWrapper
      }, void 0, this.props.unselected.map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.option, _this3.state.unselectedIndex === option.id && __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.selected),
          onClick: function onClick() {
            return _this3.unSelectOptionClick(option.id);
          },
          onDoubleClick: function onDoubleClick() {
            return _this3.unSelectDoubleClick(option.id);
          }
        }, 'option_' + index, option.name);
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operations, __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.col)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferSelectAll,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.selectAll
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferSelect,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.selectOne
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferUnselect,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.unselectOne
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferUnselectAll,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.unselectAll
      })))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.halfWidth)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.list, __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.col)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.header
      }, void 0, this.props.selectedTitle), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.optionsWrapper
      }, void 0, this.props.selected.map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.option, _this3.state.selectedIndex === option.id && __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.selected),
          onClick: function onClick() {
            return _this3.selectOptionClick(option.id);
          },
          onDoubleClick: function onDoubleClick() {
            return _this3.selectDoubleClick(option.id);
          }
        }, 'option_' + index, option.name);
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operations, __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.col)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferUpFirst,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.moveToFirst
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferUp,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.moveUp
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferDown,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.moveDown
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.operation
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_10__constants_enums__["b" /* icons */].transferDownLast,
        size: 20,
        className: __WEBPACK_IMPORTED_MODULE_9__transfer_css___default.a.icons,
        onClick: this.moveToLast
      })))));
    }
  }]);

  return Transfer;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Transfer);

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return english; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spanish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return french; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return german; });
var english = 0;
var spanish = 3;
var french = 5;
var german = 6;

/***/ }),

/***/ 1523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetJoinMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return joinMeConnect; });



var getUrl = function getUrl(server, action, siteId, agentId, token) {
  return server + '/accountService.ashx?action=' + action + '&siteId=' + siteId + '&operatorId=' + agentId + '&token=' + token;
};

var resetJoinMe = function resetJoinMe(server, _ref) {
  var siteId = _ref.siteId,
      agentId = _ref.agentId,
      token = _ref.token;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var url = getUrl(server, 'ResetAccount', siteId, agentId, token);
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function () {
      return resolve();
    }).catch(function (err) {
      return reject(err);
    });
  });
};

var joinMeConnect = function joinMeConnect(server, _ref2) {
  var siteId = _ref2.siteId,
      agentId = _ref2.agentId,
      token = _ref2.token;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var url = getUrl(server, 'GetAccountName', siteId, agentId, token);
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (resp) {
      resolve({
        connected: resp.data.errorCode === 0,
        accountName: resp.data.accountName
      });
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/***/ }),

/***/ 1641:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"switch":"style__switch--1ntvy","disabled":"style__disabled--2UWQ8","switchFlatRound":"style__switchFlatRound--1oQLS"};

/***/ }),

/***/ 1645:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"halfWidth":"transfer__halfWidth--2NliG","list":"transfer__list--fx5O7","col":"transfer__col--cewmF","header":"transfer__header--CkZcc","optionsWrapper":"transfer__optionsWrapper--27bMv","option":"transfer__option--uifh8","selected":"transfer__selected--IVTsv","operations":"transfer__operations--1MMeJ","icons":"transfer__icons--1b5au","operation":"transfer__operation--44lID"};

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_pick__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_each__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Modal_Settings_Settings__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_agent__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Business_common__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_localStorage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_electronAPI__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums_channels__ = __webpack_require__(79);

















var Column = function Column(col, visible, columnWidth) {
  var variableId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    enumColumn: col,
    ifVisible: visible,
    width: columnWidth,
    customVariableId: variableId
  };
};

var ifValidCustomVariable = function ifValidCustomVariable(variableId, variables) {
  return variables.filter(function (item) {
    return item.id === variableId;
  }).length > 0;
};

var ifNewCustomVariable = function ifNewCustomVariable(variableId, columns) {
  return columns.filter(function (item) {
    return item.customVariableId === variableId;
  }).length === 0;
};

var getValidColumns = function getValidColumns(columns, variables, siteInfo) {
  var validColumns = [];
  var segmentColumn = void 0;
  var ticketColumn = void 0;
  var departmentColumn = void 0;
  var autoInvitationColumn = void 0;
  var campaignColumn = void 0;
  /** @todo consider using selectors.getVisibleVisitorListColumns */
  __WEBPACK_IMPORTED_MODULE_3_lodash_each___default()(columns, function (soureItem) {
    var item = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, soureItem);
    switch (item.enumColumn) {
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].CustomVariable:
        if (ifValidCustomVariable(item.customVariableId, variables)) {
          validColumns.push(item);
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].Segment:
        if (siteInfo.ifEnableSegmentation) {
          segmentColumn = item;
          validColumns.push(item);
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].Department:
        if (siteInfo.ifDepartmentEnable) {
          departmentColumn = item;
          validColumns.push(item);
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].TicketId:
        if (siteInfo.ifTicketEnable) {
          ticketColumn = item;
          validColumns.push(item);
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].AutoInvitation:
        if (siteInfo.ifCanCustomAutoInvitationRules) {
          autoInvitationColumn = item;
          validColumns.push(item);
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].WebsiteIntegrationPlan:
        if (siteInfo.ifMultipleCodePlan) {
          campaignColumn = item;
          validColumns.push(item);
        }
        break;
      default:
        validColumns.push(item);
        break;
    }
  });
  if (!segmentColumn && siteInfo.ifEnableSegmentation) {
    validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].Segment, true, 120));
  }
  if (!departmentColumn && siteInfo.ifDepartmentEnable) {
    validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].Department, false, 100));
  }
  if (!ticketColumn && siteInfo.ifTicketEnable) {
    validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].TicketId, false, 100));
  }
  if (!autoInvitationColumn && siteInfo.ifCanCustomAutoInvitationRules) {
    validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].AutoInvitation, false, 200));
  }
  if (!campaignColumn && siteInfo.ifMultipleCodePlan) {
    validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].WebsiteIntegrationPlan, false, 200));
  }
  __WEBPACK_IMPORTED_MODULE_3_lodash_each___default()(variables, function (item) {
    if (ifNewCustomVariable(item.id, columns)) {
      validColumns.push(new Column(__WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["c" /* enumColumn */].CustomVariable, false, 100, item.id));
    }
  });
  return validColumns;
};

var mapStateToProps = function mapStateToProps(state) {
  var ifCanNotification = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_66" /* getIfSupportNotification */]();
  return {
    ifOpen: state.ui.preference.ifOpen,
    selectedTab: state.ui.preference.selectedTab,
    isTesting: state.ui.preference.isTesting,
    ifTestG2ASuccess: state.ui.preference.ifTestG2ASuccess,
    errorMsg: state.ui.preference.errorMsg,
    ifSupportNotification: ifCanNotification,
    tabs: [{ name: 'Chat', type: __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["b" /* preferenceTabs */].chat }, { name: 'Language', type: __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["b" /* preferenceTabs */].language }, {
      name: ifCanNotification ? 'Sound & Popup' : 'Sound',
      type: __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["b" /* preferenceTabs */].soundpopup
    }, { name: 'Columns', type: __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["b" /* preferenceTabs */].columns }, { name: 'Others', type: __WEBPACK_IMPORTED_MODULE_6__constants_enums_preference__["b" /* preferenceTabs */].others }],
    siteInfo: {
      soundUrl: __WEBPACK_IMPORTED_MODULE_10__Business_common__["d" /* getSoundUrl */](state),
      ifEnableChatIntegration: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableChatIntegration,
      ifEnableChatTranslation: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableChatTranslation,
      ifAutoAcceptChat: state.config.settings.siteInfo && state.config.settings.siteInfo.ifAutoAcceptChat,
      ifEnableAutoAllocation: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableAutoAllocation,
      ifEnableTeamWork: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableTeamWork,
      ifEnableSegmentation: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableSegmentation,
      ifEnableScreenSharing: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableScreenSharing,
      ifEnableGotoMeeting: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableGotoMeeting,
      ifEnableJoinMe: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableJoinMeScreenSharing,
      ifTicketEnable: state.config.settings.siteInfo && state.config.settings.siteInfo.ifTicketOpen,
      ifDepartmentEnable: state.config.settings.siteInfo && state.config.settings.siteInfo.ifDepartmentEnabled,
      ifMultipleCodePlan: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableMultipleCodePlan,
      ifCanCustomAutoInvitationRules: state.config.settings.siteInfo && state.config.settings.siteInfo.ifCanCustomAutoInvitationRules,
      ifRecordNavigation: state.config.settings.siteInfo && state.config.settings.siteInfo.ifRecordNavigation,
      systemSounds: state.config.settings.sound,
      customVariables: state.config.settings.customVariables,
      ifUseMainServer: state.config.ifUseMainServer
    },
    chatInfo: {
      shortcutSend: state.config.preference.shortcutSend,
      shortcutCannedMessage: state.config.preference.others.shortcutCannedMessage,
      shortcutNextChat: state.config.preference.others.shortcutNextChat,
      shortcutNextResponse: state.config.preference.others.shortcutNextResponse,
      ifAutoSendMessage: state.config.preference.ifAutoSendMessage,
      messageWhenAcceptChat: state.config.preference.messageWhenAcceptChat
    },
    languageInfo: {
      textDirectionIfRTL: state.config.preference.textDirectionIfRTL,
      ifEnableSpellCheck: state.config.preference.ifEnableSpellCheck,
      languageSpellCheck: state.config.preference.languageSpellCheck,
      ifEnableTranslate: state.config.preference.ifEnableTranslate,
      translateLanguage: state.config.preference.translateLanguage
    },
    soundpopupInfo: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_pick___default()(state.config.preference, ['visitorEnterSiteSoundId', 'visitorEnterSiteSoundVolume', 'ifVisitorEnterSitePopup', 'ifVisitorEnterSiteSoundOn', 'newChatRequestSoundId', 'newChatRequestSoundVolume', 'ifNewChatRequestPopup', 'ifNewChatRequestSoundOn', 'chatInQueueSoundId', 'chatInQueueSoundVolume', 'ifChatInQueuePopup', 'ifChatInQueueSoundOn', 'newResponseSoundId', 'newResponseSoundVolume', 'ifNewResponsePopup', 'ifNewResponseSoundOn', 'chatEndedSoundId', 'chatEndedSoundVolume', 'ifChatEndedPopup', 'ifChatEndedSoundOn', 'transferSoundId', 'transferSoundVolume', 'ifTransferPopup', 'ifTransferSoundOn', 'privateMessageSoundId', 'privateMessageSoundVolume', 'ifPrivateMessageSoundOn', 'ifPrivateMessagePopup', 'exceptionSoundId', 'exceptionSoundVolume', 'ifExceptionPopup', 'ifExceptionSoundOn']), __WEBPACK_IMPORTED_MODULE_2_lodash_pick___default()(state.config.preference.others, ['segmentationSoundId', 'segmentationSoundVolume', 'ifSegmentationPopup', 'ifSegmentationSoundOn', 'audioVideoChatRequestSoundId', 'audioVideoChatRequestSoundVolume', 'ifAudioVideoChatRequestPopup', 'ifAudioVideoChatRequestSoundOn', 'audioVideoChatEndSoundId', 'audioVideoChatEndSoundVolume', 'ifAudioVideoChatEndPopup', 'ifAudioVideoChatEndSoundOn'])),
    columnsInfo: getValidColumns(state.config.preference.visitorMonitorColumns, state.config.settings.customVariables, {
      ifTicketEnable: state.config.settings.siteInfo && state.config.settings.siteInfo.ifTicketOpen,
      ifDepartmentEnable: state.config.settings.siteInfo && state.config.settings.siteInfo.ifDepartmentEnabled,
      ifMultipleCodePlan: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableMultipleCodePlan,
      ifCanCustomAutoInvitationRules: state.config.settings.siteInfo && state.config.settings.siteInfo.ifCanCustomAutoInvitationRules,
      ifEnableSegmentation: state.config.settings.siteInfo && state.config.settings.siteInfo.ifEnableSegmentation
    }),
    othersInfo: {
      ifAutoStartup: __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["g" /* get */](__WEBPACK_IMPORTED_MODULE_12__constants_localStorage__["g" /* ifAutoRun */], true) === 'true',
      ifAutoLogin: __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["f" /* getBool */](__WEBPACK_IMPORTED_MODULE_12__constants_localStorage__["c" /* rememberMe */]),
      ifExitCloseWindow: __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["g" /* get */](__WEBPACK_IMPORTED_MODULE_12__constants_localStorage__["h" /* ifExitCloseWindow */], true) === 'true',
      ifEnableAutoMonitor: state.config.preference.others.ifEnableAutoMonitor,
      ifMonitorChatPermission: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_67" /* ifHavePermissionMonitorChat */](state),
      autoCloseChatDelayMinutes: state.config.preference.others.autoCloseChatDelayMinutes,
      autoCloseChatWindow: state.config.preference.others.autoCloseChatWindow,
      g2mEmail: state.config.preference.g2mEmail,
      g2mPassword: state.config.preference.g2mPassword,
      ifG2MConnected: state.config.preference.ifG2MConnected,
      joinMeIntegrationServer: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_68" /* getJoinMeIntegrationServer */](state),
      agentInfo: {
        siteId: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["F" /* getSiteId */](state),
        agentId: state.agent.id,
        token: state.agent.session
      },
      ifAutoAway: state.config.preference.others.ifAutoAway,
      autoAwayMinutes: state.config.preference.others.autoAwayMinutes,
      ifAutoLogoff: state.config.preference.others.ifAutoLogoff,
      autoLogoffMinutes: state.config.preference.others.autoLogoffMinutes
    }
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;


  var dispatchObject = {
    closeModal: function closeModal() {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_ui__["m" /* hideSettingsModal */])());
    },
    clickTab: function clickTab(item) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_ui__["n" /* showSettingsModal */])(item));
    },
    saveSettings: function saveSettings(preference, siteInfo) {
      var enableAutoMonitor = !stateProps.othersInfo.ifEnableAutoMonitor && preference.othersInfo.ifEnableAutoMonitor;
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["q" /* updatePreference */])(preference));
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["g" /* setPreference */])());
      if (enableAutoMonitor) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["r" /* agentMonitorAllChats */])());
      }
      if (siteInfo.ifEnableScreenSharing && siteInfo.ifEnableGotoMeeting) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["s" /* connectG2MAccount */])(preference.othersInfo.g2mEmail, preference.othersInfo.g2mPassword));
      }
      __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["e" /* set */](__WEBPACK_IMPORTED_MODULE_12__constants_localStorage__["c" /* rememberMe */], preference.othersInfo.ifAutoLogin);
      if (false) {
        localStorage.set(localStorageKeys.ifAutoRun, preference.othersInfo.ifAutoStartup);
        localStorage.set(localStorageKeys.ifExitCloseWindow, preference.othersInfo.ifExitCloseWindow);
        ipcRenderer.send(channelsType.preferanceSettings, {
          autoLogin: preference.othersInfo.ifAutoLogin,
          autoStartup: preference.othersInfo.ifAutoStartup,
          autoAwayMinutes: preference.othersInfo.autoAwayMinutes,
          autoLogoffMinutes: preference.othersInfo.autoLogoffMinutes
        });
      }
    },
    testG2MConnect: function testG2MConnect(email, password) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_ui__["o" /* testG2MConnection */])());
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_agent__["t" /* checkG2MAccount */])(email, password));
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Settings);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_5__components_Modal_Settings_Settings__["a" /* default */]));

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextArea_css__ = __webpack_require__(916);
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

/***/ 887:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modelHeight":"style__modelHeight--21c6u","modelButtons":"style__modelButtons--2Urmv","settingsContent":"style__settingsContent--2Mz1V","configCols":"style__configCols--3i51Z","rightCols":"style__rightCols--29y92","fullWidth":"style__fullWidth--2kG5-","inputWidth":"style__inputWidth--3LgXU","preDefinedMessage":"style__preDefinedMessage--3FwcY","selectLabel":"style__selectLabel--1_UlO","button":"style__button--nnWcd","soundSettings":"style__soundSettings--3i3mY","soundConfig":"style__soundConfig--R_uXy","soundTitle":"style__soundTitle--5Z1c7","select":"style__select--wZqeT","active":"style__active--gFjyG","selectDropDownList":"style__selectDropDownList--1rXso","soundPlayIcon":"style__soundPlayIcon--2aWM2","soundItem":"style__soundItem--wG7q1","soundIconBtn":"style__soundIconBtn--ZT3Im","columnsTitle":"style__columnsTitle--2Fs_o","disable":"style__disable--2aQ2w","restoreButton":"style__restoreButton--39bMm","shortInput":"style__shortInput--3jJWl","screenSharing":"style__screenSharing--VFI3q","screenSharingTitle":"style__screenSharingTitle--1y-xP","loading":"style__loading--32LQP","testMsg":"style__testMsg--1Qtmk","title":"style__title--54mZo","linkBtn":"style__linkBtn--23oy0","loadingIcon":"style__loadingIcon--fSYeb","successMsg":"style__successMsg--37FFp","errorMsg":"style__errorMsg--GFhoq","joinMeInfo":"style__joinMeInfo--3VbZU","validationError":"style__validationError--3ZYBL","soundSelector":"style__soundSelector--35hhT"};

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"multipleText":"TextArea__multipleText--1J3OF","error":"TextArea__error--3le0n"};

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Modal_css__);


// import ReactModal from 'react-modal';


// import Button from '../../Button/Button';

var StandbyNotice = function StandbyNotice(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
    closeModal: props.closeModal,
    className: __WEBPACK_IMPORTED_MODULE_3__Modal_css___default.a.standbyNotice,
    title: 'Notice',
    actions: {
      cancelProps: { text: 'OK' }
    }
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, props.text));
};

/* harmony default export */ __webpack_exports__["a"] = (StandbyNotice);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icon_Icon__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(979);
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

/***/ 979:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tab":"style__tab--1Xwp7","selected":"style__selected--2SB81"};

/***/ })

});
//# sourceMappingURL=settings.d9829.js.map