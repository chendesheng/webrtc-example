webpackJsonp([4],{

/***/ 1413:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_css__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__feedback_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_browser__ = __webpack_require__(697);


















var FeedBack = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FeedBack, _React$Component);

  function FeedBack(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FeedBack);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FeedBack.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FeedBack)).call(this, props));

    _this.state = {
      isViewForm: false,
      smooth: 0,
      interface: 0,
      hasProblem: 0,
      problem: '',
      hasFile: false,
      fileName: '',
      errorInfo: '',
      txtAreaFocus: false,
      submitOK: false,
      OSInfo: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_common__["q" /* getOSInfo */])(),
      browser: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_common__["r" /* getBrowserInfo */])(),
      resolution: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_common__["s" /* getResolution */])()
    };
    _this.updateViewFormStatus = _this.updateViewFormStatus.bind(_this);
    _this.deleteFile = _this.deleteFile.bind(_this);
    _this.udpateSmooth = _this.udpateSmooth.bind(_this);
    _this.udpateInterface = _this.udpateInterface.bind(_this);
    _this.udpateHasProblem = _this.udpateHasProblem.bind(_this);
    _this.submitFeedback = _this.submitFeedback.bind(_this);
    _this.attarchFileClick = _this.attarchFileClick.bind(_this);
    _this.updateInitStatus = _this.updateInitStatus.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FeedBack, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.txtArea) {
        setTimeout(this.updateInitStatus, 0);
      }
    }
  }, {
    key: 'onfileChange',
    value: function onfileChange() {
      this.tempFiles = this.upload.files; // .files
      var hasFile = this.upload.files.length > 0;
      var fileName = hasFile ? this.upload.files[0].name : '';
      this.setState({
        hasFile: hasFile,
        fileName: fileName,
        errorInfo: ''
      });
    }
  }, {
    key: 'updateInitStatus',
    value: function updateInitStatus() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_browser__["a" /* supportPlaceholder */])(this.txtArea, 'Type your problems here');
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile() {
      this.setState({
        hasFile: false,
        errorInfo: ''
      });
    }
  }, {
    key: 'updateViewFormStatus',
    value: function updateViewFormStatus(view) {
      this.setState({
        isViewForm: view
      });
    }
  }, {
    key: 'udpateSmooth',
    value: function udpateSmooth(val) {
      this.setState({
        smooth: val
      });
    }
  }, {
    key: 'udpateInterface',
    value: function udpateInterface(val) {
      this.setState({
        interface: val
      });
    }
  }, {
    key: 'udpateHasProblem',
    value: function udpateHasProblem(val) {
      this.setState({
        hasProblem: val
      });
    }
  }, {
    key: 'udpateProblemInfo',
    value: function udpateProblemInfo(tex) {
      this.setState({
        problem: tex
      });
    }
  }, {
    key: 'updateTextAreaStatus',
    value: function updateTextAreaStatus(focus) {
      this.setState({
        txtAreaFocus: focus
      });
    }
  }, {
    key: 'attarchFileClick',
    value: function attarchFileClick() {
      if (this.upload) {
        this.upload.click();
      }
    }
  }, {
    key: 'submitFeedback',
    value: function submitFeedback() {
      var _this2 = this;

      // 参考： https://github.com/mzabriskie/axios/blob/master/examples/upload/index.html
      var data = new FormData();
      if (this.state.hasFile && this.tempFiles[0]) {
        var file = this.tempFiles[0];
        if (file.size >= this.props.maxFileSize * 1024 * 1024) {
          this.setState({
            errorInfo: 'The max file size is ' + this.props.maxFileSize + ' MB.'
          });
          return;
        }
        data.append('file', file);
      }
      data.append('smooth', this.state.smooth);
      data.append('interface', this.state.interface);
      data.append('problem', this.state.problem === 'Type your problems here' ? '' : this.state.problem);
      data.append('agentId', this.props.agentId);
      data.append('siteId', this.props.siteId);
      data.append('OSInfo', this.state.OSInfo);
      data.append('browser', this.state.browser);
      data.append('resolution', this.state.resolution);

      __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_15__constants_login__["c" /* portalLivechatUrl */] + '/FeedbackHandler.ashx', data, {}).then(function () {
        _this2.setState({
          submitOK: true
        });
        setTimeout(function () {
          _this2.updateViewFormStatus(false);
          _this2.setState({
            submitOK: false,
            smooth: 0,
            interface: 0,
            hasProblem: 0,
            problem: '',
            hasFile: false,
            errorInfo: ''
          });
        }, 2000);
      }).catch(function (err) {
        _this2.setState({
          errorInfo: err.message + '.'
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].Container, this.state.isViewForm ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].fromContainer : __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].buttonTransform)
      }, void 0, !this.state.isViewForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].button,
        onClick: function onClick() {
          _this3.updateViewFormStatus(true);
        }
      }), this.state.isViewForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].formContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].formhead
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].close,
        onClick: function onClick() {
          _this3.updateViewFormStatus(false);
        }
      }), 'Feedback'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].form
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].noteInfo
      }, void 0, 'How do you compare the smoothness of the new beta version to the old version?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].singleSelect,
        radioOption: [{ value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].better.toString(),
          text: 'The new beta version is smoother than the old version.',
          checked: this.state.smooth === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].better
        }, {
          value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].same.toString(),
          text: 'The new beta version is almost the same as the old version in terms of smoothness.',
          checked: this.state.smooth === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].same
        }, {
          value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].worse.toString(),
          text: 'The new beta version is less smooth than the old version.',
          checked: this.state.smooth === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].worse
        }],
        handleChange: function handleChange(event) {
          _this3.udpateSmooth(+event.target.value);
        },
        name: 'feedback-smooth',
        horizontal: false
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].noteInfo
      }, void 0, 'How do you compare the interface of the new beta version to the old version?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].singleSelect,
        radioOption: [{ value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].better.toString(),
          text: 'I prefer the interface of the new beta version. ',
          checked: this.state.interface === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].better
        }, {
          value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].same.toString(),
          text: 'I am okay with the interface of both the new beta and old versions.',
          checked: this.state.interface === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].same
        }, {
          value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].worse.toString(),
          text: 'I prefer the interface of the old version. ',
          checked: this.state.interface === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["o" /* compareResult */].worse
        }],
        handleChange: function handleChange(event) {
          _this3.udpateInterface(+event.target.value);
        },
        name: 'interface',
        horizontal: false
      }))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].noteInfo
      }, void 0, 'Have you encountered any problems?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].singleSelect,
        radioOption: [{ value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes.toString(),
          text: 'Yes',
          checked: this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes
        }, {
          value: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].no.toString(),
          text: 'No',
          checked: this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].no
        }],
        handleChange: function handleChange(event) {
          _this3.udpateHasProblem(+event.target.value);
        },
        name: 'problems',
        horizontal: true
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].problemInfo, this.state.txtAreaFocus ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].txtareafocus : '', this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].txtareaenabled : __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].txtareadisbled)
      }, void 0, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('textarea', {
        ref: function ref(element) {
          _this3.txtArea = element;
        },
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].textarea, this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].txtareaenabled : __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].txtareadisbled)
        // placeholder="Type your problems here"
        , onChange: function onChange(ele) {
          _this3.udpateProblemInfo(ele.target.value);
        },
        value: this.state.problem,
        readOnly: this.state.hasProblem !== __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes,
        onFocus: function onFocus() {
          _this3.updateTextAreaStatus(_this3.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes);
        },
        onBlur: function onBlur() {
          _this3.updateTextAreaStatus(false);
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].cover, this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn : '')
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].fileattarched, this.state.hasFile ? '' : __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].sendFile
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].fileName
      }, void 0, this.state.fileName), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].fileDelete,
        onClick: function onClick() {
          _this3.deleteFile();
        }
      })), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn,
        id: 'tempFile', type: 'file',
        ref: function ref(element) {
          _this3.tempFile = element;
        }
      }), !this.state.hasFile && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn,
        id: 'file', type: 'file',
        onChange: function onChange() {
          _this3.onfileChange();
        },
        ref: function ref(element) {
          _this3.upload = _this3.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? element : null;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].sendFile,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].fileattarch, this.state.hasFile ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn : ''),
        onClick: function onClick() {
          _this3.upload && _this3.upload.click();
        },
        disabled: this.state.hasProblem !== __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].success, this.state.submitOK ? '' : __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn)
      }, void 0, 'submit success!'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].error, this.state.errorInfo === '' ? __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].dn : '')
      }, void 0, 'Error: ', this.state.errorInfo), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].submit
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Button_Button__["a" /* default */], {
        text: 'Submit',
        htmlType: 'submit',
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css__["default"].submitButton,
        onClick: this.submitFeedback
      }))))));
    }
  }]);

  return FeedBack;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FeedBack);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css__ = __webpack_require__(1630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Link_Link__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__ = __webpack_require__(1782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png__ = __webpack_require__(1781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_helper__ = __webpack_require__(16);
















var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  src: __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__["default"],
  alt: ''
});

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'You are now using the new beta version of Comm100 Live Chat Agent Console. If you encounter any problems or have any suggestions, please let us know by clicking the Feedback button in the lower left corner.');

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Why am I using the new beta version?');

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, '1. The new beta version is based on HTML5; while the old version is based on Flash. Main browsers, such as Chrome and Firefox, are stopping their full support for Flash; while all browsers support HTML5.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {}), '2. The new beta version has the exact same features as the old version.');

var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  src: __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__["default"],
  alt: ''
});

var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'We failed to switch you to the new beta version of Comm100 Live Chat Agent Console. Please upgrade your browser or change to another browser.');

var _ref7 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Why should I switch to the new', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('sup', {}, void 0, 'beta'), ' version?');

var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, '1. The new beta version is based on HTML5; while the old version is based on Flash. Main browsers, such as Chrome, Firefox and IE, have stopped their full support for Flash; while all browsers support HTML5.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {}), '2. The new beta version has the exact same features as the old version.');

var _ref9 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'For your convenience, we have got you here the download link of the latest', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Chrome'), ' and ', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Firefox'));

var _ref10 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'I\u2019ll do it later.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Back to the old version for now.'));

var _ref11 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  alt: '',
  src: __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png__["default"]
});

var VersionPromptBox = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(VersionPromptBox, _React$Component);

  function VersionPromptBox(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, VersionPromptBox);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VersionPromptBox.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(VersionPromptBox)).call(this, props));

    _this.state = {
      open: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_helper__["j" /* getCookie */])('ACBetaUsed_' + props.siteId + '_' + props.agentId) === ''
    };
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(VersionPromptBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_helper__["k" /* setCookie */])('ACBetaUsed_' + this.props.siteId + '_' + this.props.agentId, 'true', 365);
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Modal__["a" /* default */], {
        closeModal: this.closeModal,
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.versionPrompt
      }, void 0, this.props.isBrowserVersionOK && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.contaner
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.banner
      }, void 0, ' ', _ref), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref2), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref3), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content
      }, void 0, _ref4)), !this.props.isBrowserVersionOK && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.contaner
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.banner
      }, void 0, ' ', _ref5), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref6), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref7), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content
      }, void 0, _ref8), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.content, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref9)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.bottomInfo, __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.blockTop)
      }, void 0, _ref10)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default.a.arrow
      }, void 0, _ref11));
    }
  }]);

  return VersionPromptBox;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VersionPromptBox);

/***/ }),

/***/ 1629:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: The system cannot find the path specified.\r\n\n    at notFoundError (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:11:11)\n    at verifyENOENT (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:46:16)\n    at ChildProcess.cp.emit (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:33:19)\n    at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)\n    at runLoaders (C:\\Users\\roy\\comm100\\vm\\node_modules\\webpack\\lib\\NormalModule.js:176:19)\n    at C:\\Users\\roy\\comm100\\vm\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\roy\\comm100\\vm\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\roy\\comm100\\vm\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at imagemin.buffer.then.catch.err (C:\\Users\\roy\\comm100\\vm\\node_modules\\image-webpack-loader\\index.js:74:9)");

/***/ }),

/***/ 1630:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"versionPrompt":"versionPromptBox__versionPrompt--PZE0W","contaner":"versionPromptBox__contaner--HfFsq","banner":"versionPromptBox__banner--1vZRa","content":"versionPromptBox__content--myF7g","bottomInfo":"versionPromptBox__bottomInfo--2FXXK","blockTop":"versionPromptBox__blockTop--HGYnO","arrow":"versionPromptBox__arrow--19cEN","feedbackbtn":"versionPromptBox__feedbackbtn--2_N6s"};

/***/ }),

/***/ 1781:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: The system cannot find the path specified.\r\n\n    at notFoundError (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:11:11)\n    at verifyENOENT (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:46:16)\n    at ChildProcess.cp.emit (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:33:19)\n    at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)");

/***/ }),

/***/ 1782:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: The system cannot find the path specified.\r\n\n    at notFoundError (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:11:11)\n    at verifyENOENT (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:46:16)\n    at ChildProcess.cp.emit (C:\\Users\\roy\\comm100\\vm\\node_modules\\exec-buffer\\node_modules\\cross-spawn\\lib\\enoent.js:33:19)\n    at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)");

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal_VersionPromptBox_VersionPromptBox__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Modal_Feedback_Feedback__ = __webpack_require__(1413);





var SplitterBetaFeature = function SplitterBetaFeature(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__components_Modal_VersionPromptBox_VersionPromptBox__["a" /* default */], {
    isBrowserVersionOK: true,
    siteId: props.siteId,
    agentId: props.agentId
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__components_Modal_Feedback_Feedback__["a" /* default */], {
    maxFileSize: 5,
    siteId: props.siteId,
    agentId: props.agentId
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SplitterBetaFeature);

/***/ })

});
//# sourceMappingURL=beta.8ec5a.js.map