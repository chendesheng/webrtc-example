/*
 * version: 9.0.0
 * compiled: 2017-04-12 14:24:43.205
 *
 * Notice:
 * This file contains works from many authors under various (but compatible)
 * licenses. Please visit https://hosted.comm100.com/livechat/newvm/credits.html
 * for more information.
 */
webpackJsonp([4],{

/***/ 1514:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_css__ = __webpack_require__(1655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__feedback_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Button_Button__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_browser__ = __webpack_require__(698);


















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
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.Container, this.state.isViewForm ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.fromContainer : __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.buttonTransform)
      }, void 0, !this.state.isViewForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.button,
        onClick: function onClick() {
          _this3.updateViewFormStatus(true);
        }
      }), this.state.isViewForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.formContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.formhead
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.close,
        onClick: function onClick() {
          _this3.updateViewFormStatus(false);
        }
      }), 'Feedback'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.form
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.noteInfo
      }, void 0, 'How do you compare the smoothness of the new beta version to the old version?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.singleSelect,
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
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.noteInfo
      }, void 0, 'How do you compare the interface of the new beta version to the old version?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.singleSelect,
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
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.noteInfo
      }, void 0, 'Have you encountered any problems?'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__RadioButton_RadioButton__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.singleSelect,
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
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.problemInfo, this.state.txtAreaFocus ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.txtareafocus : '', this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.txtareaenabled : __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.txtareadisbled)
      }, void 0, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('textarea', {
        ref: function ref(element) {
          _this3.txtArea = element;
        },
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.textarea, this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.txtareaenabled : __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.txtareadisbled)
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
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.cover, this.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn : '')
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.fileattarched, this.state.hasFile ? '' : __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].sendFile
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.fileName
      }, void 0, this.state.fileName), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.fileDelete,
        onClick: function onClick() {
          _this3.deleteFile();
        }
      })), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn,
        id: 'tempFile', type: 'file',
        ref: function ref(element) {
          _this3.tempFile = element;
        }
      }), !this.state.hasFile && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn,
        id: 'file', type: 'file',
        onChange: function onChange() {
          _this3.onfileChange();
        },
        ref: function ref(element) {
          _this3.upload = _this3.state.hasProblem === __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes ? element : null;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].sendFile,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.fileattarch, this.state.hasFile ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn : ''),
        onClick: function onClick() {
          if (_this3.upload) _this3.upload.click();
        },
        disabled: this.state.hasProblem !== __WEBPACK_IMPORTED_MODULE_12__constants_enums__["p" /* YesOrNo */].yes
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.success, this.state.submitOK ? '' : __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn)
      }, void 0, 'submit success!'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.error, this.state.errorInfo === '' ? __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.dn : '')
      }, void 0, 'Error: ', this.state.errorInfo), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.submit
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Button_Button__["a" /* default */], {
        text: 'Submit',
        htmlType: 'submit',
        className: __WEBPACK_IMPORTED_MODULE_9__feedback_css___default.a.submitButton,
        onClick: this.submitFeedback
      }))))));
    }
  }]);

  return FeedBack;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FeedBack);

/***/ }),

/***/ 1535:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css__ = __webpack_require__(1656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__versionPromptBox_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Link_Link__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__ = __webpack_require__(1793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png__ = __webpack_require__(1792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_helper__ = __webpack_require__(16);
















var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  src: __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png___default.a,
  alt: ''
});

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'You are now using the new beta version of Comm100 Live Chat Agent Console. If you encounter any problems or have any suggestions, please let us know by clicking the Feedback button in the lower left corner.');

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Why am I using the new beta version?');

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, '1. The new beta version is based on HTML5; while the old version is based on Flash. Main browsers, such as Chrome and Firefox, are stopping their full support for Flash; while all browsers support HTML5.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {}), '2. The new beta version has the exact same features as the old version.');

var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  src: __WEBPACK_IMPORTED_MODULE_11__components_Image_versionSwitchBanner_png___default.a,
  alt: ''
});

var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'We failed to switch you to the new beta version of Comm100 Live Chat Agent Console. Please upgrade your browser or change to another browser.');

var _ref7 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Why should I switch to the new', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('sup', {}, void 0, 'beta'), ' version?');

var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, '1. The new beta version is based on HTML5; while the old version is based on Flash. Main browsers, such as Chrome, Firefox and IE, have stopped their full support for Flash; while all browsers support HTML5.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('br', {}), '2. The new beta version has the exact same features as the old version.');

var _ref9 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'For your convenience, we have got you here the download link of the latest', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Chrome'), ' and ', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Firefox'));

var _ref10 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'I\u2019ll do it later.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Link_Link__["a" /* default */], {}, void 0, 'Back to the old version for now.'));

var _ref11 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
  alt: '',
  src: __WEBPACK_IMPORTED_MODULE_12__components_Image_arraw_min_png___default.a
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

/***/ 1655:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Container":"feedback__Container--2lovO","buttonTransform":"feedback__buttonTransform--AnIth","fromContainer":"feedback__fromContainer--229jR","button":"feedback__button--204-6","feedbackIcon":"feedback__feedbackIcon--3l5e9","feedBackTitle":"feedback__feedBackTitle--WodIM","formContainer":"feedback__formContainer--udm4g","form":"feedback__form--NB1tA","formhead":"feedback__formhead--3aO9g","close":"feedback__close--1gv8g","singleSelect":"feedback__singleSelect--1HdU4","noteInfo":"feedback__noteInfo--30iv2","problemInfo":"feedback__problemInfo--3bzRl","txtareafocus":"feedback__txtareafocus--ZLuI1","txtareadisbled":"feedback__txtareadisbled--2T91w","txtareaenabled":"feedback__txtareaenabled--1F3OV","textarea":"feedback__textarea--1HQeJ","cover":"feedback__cover--2-vmQ","fileattarch":"feedback__fileattarch--3ypnB","fileattarched":"feedback__fileattarched--2B7mx","fileName":"feedback__fileName--WrdVL","fileDelete":"feedback__fileDelete--2rH5y","submit":"feedback__submit--2XaIE","submitButton":"feedback__submitButton--2E1d7","success":"feedback__success--2PyRr","error":"feedback__error--3SEAc","dn":"feedback__dn--3P3mw"};

/***/ }),

/***/ 1656:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"versionPrompt":"versionPromptBox__versionPrompt--PZE0W","contaner":"versionPromptBox__contaner--HfFsq","banner":"versionPromptBox__banner--1vZRa","content":"versionPromptBox__content--myF7g","bottomInfo":"versionPromptBox__bottomInfo--2FXXK","blockTop":"versionPromptBox__blockTop--HGYnO","arrow":"versionPromptBox__arrow--19cEN","feedbackbtn":"versionPromptBox__feedbackbtn--2_N6s"};

/***/ }),

/***/ 1792:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAB6CAMAAAD9JD+2AAAAgVBMVEVHcEz19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fVl1tDVAAAAKnRSTlMAJDJH9T1V/PnsKVzk8nxrmMLfd2NNH+dxOC4FEEGF1Iy4Z6EJyqYYsKtghwSZAAACUElEQVR4Xq3YWW7CMBSFYUJCZiAECCSEeaz3v8A+9MFClY/te/wv4FNVXQUdT2CjMjZOiAazO2XcrdlNGXdpdteMezG7DeP+mN0V4z7Nbsu4hdnNDnL2oUCR3C2RG8vdGLlLuXtD7kXunpD7kbsv5J7l7gq5idytFeotZQ8ZdHupGylYJXWP2F1I3Q1279z5hv9S3rG7I84X9hC6rcINxPmitjK3U5b2MndmcxuZW9ncq8xdAJL5UjY2N5e5V2WrI84XdRS5udXdSNi3snaSuL3dfUnc1O4+Je7a7hbE+cJG6nzDjpcz8JjxkgCPGC8j4Jgv5dTFvVLnG3S87AEHxgsxCbnx8nFyY+J8UUtiEqIuxPkGHS+Dm3smXjRQc+JFA/YmzhfVEy8aIcfL09FdEOeLuhMvGgHHS+nq1sSLRsDxcnN2S2IShhsvL2d3T0xCUNYQLxqoKz8J+S9lpJzL+RcNfrxsPNwZfb78eLl7uCf6fPnx0nq4T/Z8+fHSKZ9G8kWDHy+Vl5uSLxr8eGm83Ab8baFbAJhi8cDG4f94eHgPNhXJ8jCeMsvgLA/j4XULwt48ftPY36RNRqqZZr+qODirNAVhntUww4JSKZylE1iai9gcshjGrLWtP5zjMYBhzNIwZnGxD5zHHrMwcWYTzbIwZnFHNzg5AgPAIhY3m1vZud4WNIxZHsYsrkfwvLcDAAYs0bQwsMWUUDWMWR7WLN3wHy4GBtQwYJnK3Re7K1lQw4DlYMAyRbX6qwYsAdfRJHBRC1imrlVtxwBGeOXB/gICewDoS4qoPgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1793:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal_VersionPromptBox_VersionPromptBox__ = __webpack_require__(1535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Modal_Feedback_Feedback__ = __webpack_require__(1514);





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
//# sourceMappingURL=http://localhost:8000/beta.b0e62.js.map