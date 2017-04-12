/*
 * version: 9.0.0
 * compiled: 2017-04-12 14:24:43.205
 *
 * Notice:
 * This file contains works from many authors under various (but compatible)
 * licenses. Please visit https://hosted.comm100.com/livechat/newvm/credits.html
 * for more information.
 */
webpackJsonp([6],{

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function combineOrderedStyles(customMap, defaults) {
  if (customMap == null) {
    return defaults;
  }

  var _defaults = _slicedToArray(defaults, 2);

  var defaultStyleMap = _defaults[0];
  var defaultStyleOrder = _defaults[1];

  var styleMap = _extends({}, defaultStyleMap);
  var styleOrder = [].concat(_toConsumableArray(defaultStyleOrder));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(customMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _styleName = _step.value;

      if (defaultStyleMap.hasOwnProperty(_styleName)) {
        var defaultStyles = defaultStyleMap[_styleName];
        styleMap[_styleName] = _extends({}, defaultStyles, customMap[_styleName]);
      } else {
        styleMap[_styleName] = customMap[_styleName];
        styleOrder.push(_styleName);
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

  return [styleMap, styleOrder];
}

exports.default = combineOrderedStyles;

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
var ATTR_NAME_MAP = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function normalizeAttributes(attributes) {
  if (attributes == null) {
    return attributes;
  }
  var normalized = {};
  var didNormalize = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      var newName = name;
      if (ATTR_NAME_MAP.hasOwnProperty(name)) {
        newName = ATTR_NAME_MAP[name];
        didNormalize = true;
      }
      normalized[newName] = attributes[name];
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

  return didNormalize ? normalized : attributes;
}

exports.default = normalizeAttributes;

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(1382);

var VENDOR_PREFIX = /^(moz|ms|o|webkit)-/;

var NUMERIC_STRING = /^\d+$/;
var UPPERCASE_PATTERN = /([A-Z])/g;

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/CSSPropertyOperations.js
function processStyleName(name) {
  return name.replace(UPPERCASE_PATTERN, '-$1').toLowerCase().replace(VENDOR_PREFIX, '-$1-');
}

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/dangerousStyleValue.js
function processStyleValue(name, value) {
  var isNumeric = void 0;
  if (typeof value === 'string') {
    isNumeric = NUMERIC_STRING.test(value);
  } else {
    isNumeric = true;
    value = String(value);
  }
  if (!isNumeric || value === '0' || _CSSProperty.isUnitlessNumber[name] === true) {
    return value;
  } else {
    return value + 'px';
  }
}

function styleToCSS(styleDescr) {
  return Object.keys(styleDescr).map(function (name) {
    var styleValue = processStyleValue(name, styleDescr[name]);
    var styleName = processStyleName(name);
    return styleName + ': ' + styleValue;
  }).join('; ');
}

exports.default = styleToCSS;

/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DEFAULT_STYLE_MAP, _ENTITY_ATTR_MAP, _DATA_TO_ATTR;

exports.default = stateToHTML;

var _combineOrderedStyles3 = __webpack_require__(1004);

var _combineOrderedStyles4 = _interopRequireDefault(_combineOrderedStyles3);

var _normalizeAttributes = __webpack_require__(1005);

var _normalizeAttributes2 = _interopRequireDefault(_normalizeAttributes);

var _styleToCSS = __webpack_require__(1006);

var _styleToCSS2 = _interopRequireDefault(_styleToCSS);

var _draftJs = __webpack_require__(873);

var _draftJsUtils = __webpack_require__(928);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
var CODE = _draftJsUtils.INLINE_STYLE.CODE;
var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;


var INDENT = '  ';
var BREAK = '<br>';
var DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/;

var DEFAULT_STYLE_MAP = (_DEFAULT_STYLE_MAP = {}, _defineProperty(_DEFAULT_STYLE_MAP, BOLD, { element: 'strong' }), _defineProperty(_DEFAULT_STYLE_MAP, CODE, { element: 'code' }), _defineProperty(_DEFAULT_STYLE_MAP, ITALIC, { element: 'em' }), _defineProperty(_DEFAULT_STYLE_MAP, STRIKETHROUGH, { element: 'del' }), _defineProperty(_DEFAULT_STYLE_MAP, UNDERLINE, { element: 'ins' }), _DEFAULT_STYLE_MAP);

// Order: inner-most style to outer-most.
// Examle: <em><strong>foo</strong></em>
var DEFAULT_STYLE_ORDER = [BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE];

// Map entity data to element attributes.
var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.LINK, { url: 'href', rel: 'rel', target: 'target', title: 'title', className: 'class' }), _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.IMAGE, { src: 'src', height: 'height', width: 'width', alt: 'alt', className: 'class' }), _ENTITY_ATTR_MAP);

// Map entity data to element attributes.
var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.LINK, function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var dataKey = _step.value;

      var dataValue = data[dataKey];
      if (attrMap.hasOwnProperty(dataKey)) {
        var attrKey = attrMap[dataKey];
        attrs[attrKey] = dataValue;
      } else if (DATA_ATTRIBUTE.test(dataKey)) {
        attrs[dataKey] = dataValue;
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

  return attrs;
}), _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.IMAGE, function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var dataKey = _step2.value;

      var dataValue = data[dataKey];
      if (attrMap.hasOwnProperty(dataKey)) {
        var attrKey = attrMap[dataKey];
        attrs[attrKey] = dataValue;
      } else if (DATA_ATTRIBUTE.test(dataKey)) {
        attrs[dataKey] = dataValue;
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

  return attrs;
}), _DATA_TO_ATTR);

// The reason this returns an array is because a single block might get wrapped
// in two tags.
function getTags(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
      return ['h1'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
      return ['h2'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
      return ['h3'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
      return ['h4'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
      return ['h5'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
      return ['h6'];
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return ['li'];
    case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
      return ['blockquote'];
    case _draftJsUtils.BLOCK_TYPE.CODE:
      return ['pre', 'code'];
    case _draftJsUtils.BLOCK_TYPE.ATOMIC:
      return ['figure'];
    default:
      return ['p'];
  }
}

function getWrapperTag(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
      return 'ul';
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return 'ol';
    default:
      return null;
  }
}

var MarkupGenerator = function () {
  // These are related to state.
  function MarkupGenerator(contentState, options) {
    _classCallCheck(this, MarkupGenerator);

    if (options == null) {
      options = {};
    }
    this.contentState = contentState;
    this.options = options;

    var _combineOrderedStyles = (0, _combineOrderedStyles4.default)(options.inlineStyles, [DEFAULT_STYLE_MAP, DEFAULT_STYLE_ORDER]);

    var _combineOrderedStyles2 = _slicedToArray(_combineOrderedStyles, 2);

    var inlineStyles = _combineOrderedStyles2[0];
    var styleOrder = _combineOrderedStyles2[1];

    this.inlineStyles = inlineStyles;
    this.styleOrder = styleOrder;
  }
  // These are related to user-defined options.


  _createClass(MarkupGenerator, [{
    key: 'generate',
    value: function generate() {
      this.output = [];
      this.blocks = this.contentState.getBlocksAsArray();
      this.totalBlocks = this.blocks.length;
      this.currentBlock = 0;
      this.indentLevel = 0;
      this.wrapperTag = null;
      while (this.currentBlock < this.totalBlocks) {
        this.processBlock();
      }
      this.closeWrapperTag();
      return this.output.join('').trim();
    }
  }, {
    key: 'processBlock',
    value: function processBlock() {
      var blockRenderers = this.options.blockRenderers;

      var block = this.blocks[this.currentBlock];
      var blockType = block.getType();
      var newWrapperTag = getWrapperTag(blockType);
      if (this.wrapperTag !== newWrapperTag) {
        if (this.wrapperTag) {
          this.closeWrapperTag();
        }
        if (newWrapperTag) {
          this.openWrapperTag(newWrapperTag);
        }
      }
      this.indent();
      // Allow blocks to be rendered using a custom renderer.
      var customRenderer = blockRenderers != null && blockRenderers.hasOwnProperty(blockType) ? blockRenderers[blockType] : null;
      var customRendererOutput = customRenderer ? customRenderer(block) : null;
      // Renderer can return null, which will cause processing to continue as normal.
      if (customRendererOutput != null) {
        this.output.push(customRendererOutput);
        this.output.push('\n');
        this.currentBlock += 1;
        return;
      }
      this.writeStartTag(block);
      this.output.push(this.renderBlockContent(block));
      // Look ahead and see if we will nest list.
      var nextBlock = this.getNextBlock();
      if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
        this.output.push('\n');
        // This is a litle hacky: temporarily stash our current wrapperTag and
        // render child list(s).
        var thisWrapperTag = this.wrapperTag;
        this.wrapperTag = null;
        this.indentLevel += 1;
        this.currentBlock += 1;
        this.processBlocksAtDepth(nextBlock.getDepth());
        this.wrapperTag = thisWrapperTag;
        this.indentLevel -= 1;
        this.indent();
      } else {
        this.currentBlock += 1;
      }
      this.writeEndTag(block);
    }
  }, {
    key: 'processBlocksAtDepth',
    value: function processBlocksAtDepth(depth) {
      var block = this.blocks[this.currentBlock];
      while (block && block.getDepth() === depth) {
        this.processBlock();
        block = this.blocks[this.currentBlock];
      }
      this.closeWrapperTag();
    }
  }, {
    key: 'getNextBlock',
    value: function getNextBlock() {
      return this.blocks[this.currentBlock + 1];
    }
  }, {
    key: 'writeStartTag',
    value: function writeStartTag(block) {
      var tags = getTags(block.getType());

      var attrString = void 0;
      if (this.options.blockStyleFn) {
        var _ref = this.options.blockStyleFn(block) || {};

        var _attributes = _ref.attributes;
        var _style = _ref.style;
        // Normalize `className` -> `class`, etc.

        _attributes = (0, _normalizeAttributes2.default)(_attributes);
        if (_style != null) {
          var styleAttr = (0, _styleToCSS2.default)(_style);
          _attributes = _attributes == null ? { style: styleAttr } : _extends({}, _attributes, { style: styleAttr });
        }
        attrString = stringifyAttrs(_attributes);
      } else {
        attrString = '';
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tag = _step3.value;

          this.output.push('<' + tag + attrString + '>');
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'writeEndTag',
    value: function writeEndTag(block) {
      var tags = getTags(block.getType());
      if (tags.length === 1) {
        this.output.push('</' + tags[0] + '>\n');
      } else {
        var output = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var tag = _step4.value;

            output.unshift('</' + tag + '>');
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        this.output.push(output.join('') + '\n');
      }
    }
  }, {
    key: 'openWrapperTag',
    value: function openWrapperTag(wrapperTag) {
      this.wrapperTag = wrapperTag;
      this.indent();
      this.output.push('<' + wrapperTag + '>\n');
      this.indentLevel += 1;
    }
  }, {
    key: 'closeWrapperTag',
    value: function closeWrapperTag() {
      var wrapperTag = this.wrapperTag;

      if (wrapperTag) {
        this.indentLevel -= 1;
        this.indent();
        this.output.push('</' + wrapperTag + '>\n');
        this.wrapperTag = null;
      }
    }
  }, {
    key: 'indent',
    value: function indent() {
      this.output.push(INDENT.repeat(this.indentLevel));
    }
  }, {
    key: 'renderBlockContent',
    value: function renderBlockContent(block) {
      var _this = this;

      var blockType = block.getType();
      var text = block.getText();
      if (text === '') {
        // Prevent element collapse if completely empty.
        return BREAK;
      }
      text = this.preserveWhitespace(text);
      var charMetaList = block.getCharacterList();
      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
      return entityPieces.map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2);

        var entityKey = _ref3[0];
        var stylePieces = _ref3[1];

        var content = stylePieces.map(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2);

          var text = _ref5[0];
          var styleSet = _ref5[1];

          var content = encodeContent(text);
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _this.styleOrder[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _styleName = _step5.value;

              // If our block type is CODE then don't wrap inline code elements.
              if (_styleName === CODE && blockType === _draftJsUtils.BLOCK_TYPE.CODE) {
                continue;
              }
              if (styleSet.has(_styleName)) {
                var _inlineStyles$_styleN = _this.inlineStyles[_styleName];
                var _element = _inlineStyles$_styleN.element;
                var _attributes2 = _inlineStyles$_styleN.attributes;
                var _style2 = _inlineStyles$_styleN.style;

                if (_element == null) {
                  _element = 'span';
                }
                // Normalize `className` -> `class`, etc.
                _attributes2 = (0, _normalizeAttributes2.default)(_attributes2);
                if (_style2 != null) {
                  var styleAttr = (0, _styleToCSS2.default)(_style2);
                  _attributes2 = _attributes2 == null ? { style: styleAttr } : _extends({}, _attributes2, { style: styleAttr });
                }
                var attrString = stringifyAttrs(_attributes2);
                content = '<' + _element + attrString + '>' + content + '</' + _element + '>';
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return content;
        }).join('');
        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
        // Note: The `toUpperCase` below is for compatability with some libraries that use lower-case for image blocks.
        var entityType = entity == null ? null : entity.getType().toUpperCase();
        if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.LINK) {
          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var attrString = stringifyAttrs(attrs);
          return '<a' + attrString + '>' + content + '</a>';
        } else if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.IMAGE) {
          var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var _attrString = stringifyAttrs(_attrs);
          return '<img' + _attrString + '/>';
        } else {
          return content;
        }
      }).join('');
    }
  }, {
    key: 'preserveWhitespace',
    value: function preserveWhitespace(text) {
      var length = text.length;
      // Prevent leading/trailing/consecutive whitespace collapse.
      var newText = new Array(length);
      for (var i = 0; i < length; i++) {
        if (text[i] === ' ' && (i === 0 || i === length - 1 || text[i - 1] === ' ')) {
          newText[i] = '\xA0';
        } else {
          newText[i] = text[i];
        }
      }
      return newText.join('');
    }
  }]);

  return MarkupGenerator;
}();

function stringifyAttrs(attrs) {
  if (attrs == null) {
    return '';
  }
  var parts = [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = Object.keys(attrs)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var name = _step6.value;

      var value = attrs[name];
      if (value != null) {
        parts.push(' ' + name + '="' + encodeAttr(value + '') + '"');
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return parts.join('');
}

function canHaveDepth(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join(BREAK + '\n');
}

function encodeAttr(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
}

function stateToHTML(content, options) {
  return new MarkupGenerator(content, options).generate();
}

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceTextWithMeta;
function replaceTextWithMeta(subject, searchText, replaceText) {
  var text = subject.text;
  var characterMeta = subject.characterMeta;

  var searchTextLength = searchText.length;
  var replaceTextLength = replaceText.length;
  var resultTextParts = [];
  // Get empty set of same kind as characterMeta.
  var resultCharMeta = characterMeta.slice(0, 0);
  var lastEndIndex = 0;
  var index = text.indexOf(searchText);
  while (index !== -1) {
    resultTextParts.push(text.slice(lastEndIndex, index) + replaceText);
    resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex, index),
    // Use the metadata of the first char we are replacing.
    repeatSeq(characterMeta.slice(index, index + 1), replaceTextLength));
    lastEndIndex = index + searchTextLength;
    index = text.indexOf(searchText, lastEndIndex);
  }
  resultTextParts.push(text.slice(lastEndIndex));
  resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex));
  return { text: resultTextParts.join(''), characterMeta: resultCharMeta };
}

function repeatSeq(seq, count) {
  var result = seq.slice(0, 0);
  while (count-- > 0) {
    result = result.concat(seq);
  }
  return result;
}

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateFromElement = __webpack_require__(1010);

Object.defineProperty(exports, 'stateFromElement', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stateFromElement).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = stateFromElement;

var _replaceTextWithMeta3 = __webpack_require__(1008);

var _replaceTextWithMeta4 = _interopRequireDefault(_replaceTextWithMeta3);

var _draftJs = __webpack_require__(873);

var _immutable = __webpack_require__(106);

var _draftJsUtils = __webpack_require__(928);

var _syntheticDom = __webpack_require__(1369);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A ParsedBlock has two purposes:
//   1) to keep data about the block (textFragments, type)
//   2) to act as some context for storing parser state as we parse its contents
var NO_STYLE = (0, _immutable.OrderedSet)();
var NO_ENTITY = null;

var EMPTY_BLOCK = new _draftJs.ContentBlock({
  key: (0, _draftJs.genKey)(),
  text: '',
  type: _draftJsUtils.BLOCK_TYPE.UNSTYLED,
  characterList: (0, _immutable.List)(),
  depth: 0
});

var LINE_BREAKS = /(\r\n|\r|\n)/g;
// We use `\r` because that character is always stripped from source (normalized
// to `\n`), so it's safe to assume it will only appear in the text content when
// we put it there as a placeholder.
var SOFT_BREAK_PLACEHOLDER = '\r';
var ZERO_WIDTH_SPACE = '\u200B';
var DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/;

// Map element attributes to entity data.
var ELEM_ATTR_MAP = {
  a: { href: 'url', rel: 'rel', target: 'target', title: 'title' },
  img: { src: 'src', alt: 'alt' }
};

var getEntityData = function getEntityData(tagName, element) {
  var data = {};
  if (ELEM_ATTR_MAP.hasOwnProperty(tagName)) {
    var attrMap = ELEM_ATTR_MAP[tagName];
    for (var i = 0; i < element.attributes.length; i++) {
      var _element$attributes$i = element.attributes[i];
      var name = _element$attributes$i.name;
      var value = _element$attributes$i.value;

      if (value != null) {
        if (attrMap.hasOwnProperty(name)) {
          var newName = attrMap[name];
          data[newName] = value;
        } else if (DATA_ATTRIBUTE.test(name)) {
          data[name] = value;
        }
      }
    }
  }
  return data;
};

// Functions to convert elements to entities.
var ELEM_TO_ENTITY = {
  a: function a(tagName, element) {
    var data = getEntityData(tagName, element);
    // Don't add `<a>` elements with no href.
    if (data.url != null) {
      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, 'MUTABLE', data);
    }
  },
  img: function img(tagName, element) {
    var data = getEntityData(tagName, element);
    // Don't add `<img>` elements with no src.
    if (data.src != null) {
      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, 'MUTABLE', data);
    }
  }
};

// TODO: Move this out to a module.
var INLINE_ELEMENTS = {
  a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1,
  canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1,
  embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1,
  label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1,
  progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1,
  span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, var: 1,
  video: 1, wbr: 1, acronym: 1, applet: 1, basefont: 1, big: 1, font: 1,
  isindex: 1, strike: 1, style: 1, tt: 1
};

// These elements are special because they cannot contain text as a direct
// child (some cannot contain childNodes at all).
var SPECIAL_ELEMENTS = {
  area: 1, base: 1, br: 1, col: 1, colgroup: 1, command: 1, dl: 1, embed: 1,
  head: 1, hgroup: 1, hr: 1, iframe: 1, img: 1, input: 1, keygen: 1, link: 1,
  meta: 1, ol: 1, optgroup: 1, option: 1, param: 1, script: 1, select: 1,
  source: 1, style: 1, table: 1, tbody: 1, textarea: 1, tfoot: 1, thead: 1,
  title: 1, tr: 1, track: 1, ul: 1, wbr: 1, basefont: 1, dialog: 1, dir: 1,
  isindex: 1
};

// These elements are special because they cannot contain childNodes.
var SELF_CLOSING_ELEMENTS = { img: 1 };

var BlockGenerator = function () {
  function BlockGenerator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BlockGenerator);

    this.options = options;
    // This represents the hierarchy as we traverse nested elements; for
    // example [body, ul, li] where we must know li's parent type (ul or ol).
    this.blockStack = [];
    // This is a linear list of blocks that will form the output; for example
    // [p, li, li, blockquote].
    this.blockList = [];
    this.depth = 0;
  }

  _createClass(BlockGenerator, [{
    key: 'process',
    value: function process(element) {
      this.processBlockElement(element);
      var contentBlocks = [];
      this.blockList.forEach(function (block) {
        var _concatFragments = concatFragments(block.textFragments);

        var text = _concatFragments.text;
        var characterMeta = _concatFragments.characterMeta;

        var includeEmptyBlock = false;
        // If the block contains only a soft break then don't discard the block,
        // but discard the soft break.
        if (text === SOFT_BREAK_PLACEHOLDER) {
          includeEmptyBlock = true;
          text = '';
        }
        if (block.tagName === 'pre') {
          var _trimLeadingNewline = trimLeadingNewline(text, characterMeta);

          text = _trimLeadingNewline.text;
          characterMeta = _trimLeadingNewline.characterMeta;
        } else {
          var _collapseWhiteSpace = collapseWhiteSpace(text, characterMeta);

          text = _collapseWhiteSpace.text;
          characterMeta = _collapseWhiteSpace.characterMeta;
        }
        // Previously we were using a placeholder for soft breaks. Now that we
        // have collapsed whitespace we can change it back to normal line breaks.
        text = text.split(SOFT_BREAK_PLACEHOLDER).join('\n');
        // Discard empty blocks (unless otherwise specified).
        if (text.length || includeEmptyBlock) {
          contentBlocks.push(new _draftJs.ContentBlock({
            key: (0, _draftJs.genKey)(),
            text: text,
            type: block.type,
            characterList: characterMeta.toList(),
            depth: block.depth,
            data: block.data ? (0, _immutable.Map)(block.data) : (0, _immutable.Map)()
          }));
        }
      });
      if (contentBlocks.length) {
        return contentBlocks;
      } else {
        return [EMPTY_BLOCK];
      }
    }
  }, {
    key: 'getBlockTypeFromTagName',
    value: function getBlockTypeFromTagName(tagName) {
      var blockTypes = this.options.blockTypes;

      if (blockTypes && blockTypes[tagName]) {
        return blockTypes[tagName];
      }
      switch (tagName) {
        case 'li':
          {
            var parent = this.blockStack.slice(-1)[0];
            return parent.tagName === 'ol' ? _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM : _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM;
          }
        case 'blockquote':
          {
            return _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE;
          }
        case 'h1':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_ONE;
          }
        case 'h2':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_TWO;
          }
        case 'h3':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_THREE;
          }
        case 'h4':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_FOUR;
          }
        case 'h5':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_FIVE;
          }
        case 'h6':
          {
            return _draftJsUtils.BLOCK_TYPE.HEADER_SIX;
          }
        case 'pre':
          {
            return _draftJsUtils.BLOCK_TYPE.CODE;
          }
        case 'figure':
          {
            return _draftJsUtils.BLOCK_TYPE.ATOMIC;
          }
        default:
          {
            return _draftJsUtils.BLOCK_TYPE.UNSTYLED;
          }
      }
    }
  }, {
    key: 'processBlockElement',
    value: function processBlockElement(element) {
      if (!element) {
        return;
      }
      var customBlockFn = this.options.customBlockFn;

      var tagName = element.nodeName.toLowerCase();
      var type = void 0;
      var data = void 0;
      if (customBlockFn) {
        var customBlock = customBlockFn(element);
        if (customBlock != null) {
          type = customBlock.type;
          data = customBlock.data;
        }
      }
      if (type == null) {
        type = this.getBlockTypeFromTagName(tagName);
      }
      var hasDepth = canHaveDepth(type);
      var allowRender = !SPECIAL_ELEMENTS.hasOwnProperty(tagName);
      var block = {
        tagName: tagName,
        textFragments: [],
        type: type,
        styleStack: [NO_STYLE],
        entityStack: [NO_ENTITY],
        depth: hasDepth ? this.depth : 0,
        data: data
      };
      if (allowRender) {
        this.blockList.push(block);
        if (hasDepth) {
          this.depth += 1;
        }
      }
      this.blockStack.push(block);
      if (element.childNodes != null) {
        Array.from(element.childNodes).forEach(this.processNode, this);
      }
      this.blockStack.pop();
      if (allowRender && hasDepth) {
        this.depth -= 1;
      }
    }
  }, {
    key: 'processInlineElement',
    value: function processInlineElement(element) {
      var tagName = element.nodeName.toLowerCase();
      if (tagName === 'br') {
        this.processText(SOFT_BREAK_PLACEHOLDER);
        return;
      }
      var block = this.blockStack.slice(-1)[0];
      var style = block.styleStack.slice(-1)[0];
      var entityKey = block.entityStack.slice(-1)[0];
      style = addStyleFromTagName(style, tagName, this.options.elementStyles);
      if (ELEM_TO_ENTITY.hasOwnProperty(tagName)) {
        // If the to-entity function returns nothing, use the existing entity.
        entityKey = ELEM_TO_ENTITY[tagName](tagName, element) || entityKey;
      }
      block.styleStack.push(style);
      block.entityStack.push(entityKey);
      if (element.childNodes != null) {
        Array.from(element.childNodes).forEach(this.processNode, this);
      }
      if (SELF_CLOSING_ELEMENTS.hasOwnProperty(tagName)) {
        this.processText('\xA0');
      }
      block.entityStack.pop();
      block.styleStack.pop();
    }
  }, {
    key: 'processTextNode',
    value: function processTextNode(node) {
      var text = node.nodeValue;
      // This is important because we will use \r as a placeholder for a soft break.
      text = text.replace(LINE_BREAKS, '\n');
      // Replace zero-width space (we use it as a placeholder in markdown) with a
      // soft break.
      // TODO: The import-markdown package should correctly turn breaks into <br>
      // elements so we don't need to include this hack.
      text = text.split(ZERO_WIDTH_SPACE).join(SOFT_BREAK_PLACEHOLDER);
      this.processText(text);
    }
  }, {
    key: 'processText',
    value: function processText(text) {
      var block = this.blockStack.slice(-1)[0];
      var style = block.styleStack.slice(-1)[0];
      var entity = block.entityStack.slice(-1)[0];
      var charMetadata = _draftJs.CharacterMetadata.create({
        style: style,
        entity: entity
      });
      var seq = (0, _immutable.Repeat)(charMetadata, text.length);
      block.textFragments.push({
        text: text,
        characterMeta: seq
      });
    }
  }, {
    key: 'processNode',
    value: function processNode(node) {
      if (node.nodeType === _syntheticDom.NODE_TYPE_ELEMENT) {
        var _element = node;
        var _tagName = _element.nodeName.toLowerCase();
        if (INLINE_ELEMENTS.hasOwnProperty(_tagName)) {
          this.processInlineElement(_element);
        } else {
          this.processBlockElement(_element);
        }
      } else if (node.nodeType === _syntheticDom.NODE_TYPE_TEXT) {
        this.processTextNode(node);
      }
    }
  }]);

  return BlockGenerator;
}();

function trimLeadingNewline(text, characterMeta) {
  if (text.charAt(0) === '\n') {
    text = text.slice(1);
    characterMeta = characterMeta.slice(1);
  }
  return { text: text, characterMeta: characterMeta };
}

function trimLeadingSpace(text, characterMeta) {
  while (text.charAt(0) === ' ') {
    text = text.slice(1);
    characterMeta = characterMeta.slice(1);
  }
  return { text: text, characterMeta: characterMeta };
}

function trimTrailingSpace(text, characterMeta) {
  while (text.slice(-1) === ' ') {
    text = text.slice(0, -1);
    characterMeta = characterMeta.slice(0, -1);
  }
  return { text: text, characterMeta: characterMeta };
}

function collapseWhiteSpace(text, characterMeta) {
  text = text.replace(/[ \t\n]/g, ' ');

  var _trimLeadingSpace = trimLeadingSpace(text, characterMeta);

  text = _trimLeadingSpace.text;
  characterMeta = _trimLeadingSpace.characterMeta;

  var _trimTrailingSpace = trimTrailingSpace(text, characterMeta);

  text = _trimTrailingSpace.text;
  characterMeta = _trimTrailingSpace.characterMeta;

  var i = text.length;
  while (i--) {
    if (text.charAt(i) === ' ' && text.charAt(i - 1) === ' ') {
      text = text.slice(0, i) + text.slice(i + 1);
      characterMeta = characterMeta.slice(0, i).concat(characterMeta.slice(i + 1));
    }
  }
  // There could still be one space on either side of a softbreak.

  var _replaceTextWithMeta = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, SOFT_BREAK_PLACEHOLDER + ' ', SOFT_BREAK_PLACEHOLDER);

  text = _replaceTextWithMeta.text;
  characterMeta = _replaceTextWithMeta.characterMeta;

  var _replaceTextWithMeta2 = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, ' ' + SOFT_BREAK_PLACEHOLDER, SOFT_BREAK_PLACEHOLDER);

  text = _replaceTextWithMeta2.text;
  characterMeta = _replaceTextWithMeta2.characterMeta;

  return { text: text, characterMeta: characterMeta };
}

function canHaveDepth(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      {
        return true;
      }
    default:
      {
        return false;
      }
  }
}

function concatFragments(fragments) {
  var text = '';
  var characterMeta = (0, _immutable.Seq)();
  fragments.forEach(function (textFragment) {
    text = text + textFragment.text;
    characterMeta = characterMeta.concat(textFragment.characterMeta);
  });
  return { text: text, characterMeta: characterMeta };
}

function addStyleFromTagName(styleSet, tagName, elementStyles) {
  switch (tagName) {
    case 'b':
    case 'strong':
      {
        return styleSet.add(_draftJsUtils.INLINE_STYLE.BOLD);
      }
    case 'i':
    case 'em':
      {
        return styleSet.add(_draftJsUtils.INLINE_STYLE.ITALIC);
      }
    case 'ins':
      {
        return styleSet.add(_draftJsUtils.INLINE_STYLE.UNDERLINE);
      }
    case 'code':
      {
        return styleSet.add(_draftJsUtils.INLINE_STYLE.CODE);
      }
    case 'del':
      {
        return styleSet.add(_draftJsUtils.INLINE_STYLE.STRIKETHROUGH);
      }
    default:
      {
        // Allow custom styles to be provided.
        if (elementStyles && elementStyles[tagName]) {
          return styleSet.add(elementStyles[tagName]);
        }

        return styleSet;
      }
  }
}

function stateFromElement(element, options) {
  var blocks = new BlockGenerator(options).process(element);
  return _draftJs.ContentState.createFromBlockArray(blocks);
}

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateFromHTML = __webpack_require__(1013);

Object.defineProperty(exports, 'stateFromHTML', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stateFromHTML).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseHTML;
function parseHTML(html) {
  var doc = void 0;
  if (typeof DOMParser !== 'undefined') {
    var parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');
  } else {
    doc = document.implementation.createHTMLDocument('');
    doc.documentElement.innerHTML = html;
  }
  return doc.body;
}

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateFromHTML;

var _draftJsImportElement = __webpack_require__(1009);

var _parseHTML = __webpack_require__(1012);

var _parseHTML2 = _interopRequireDefault(_parseHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stateFromHTML(html, options) {
  var parser = options == null || options.parser == null ? _parseHTML2.default : options.parser;
  var element = parser(html);
  return (0, _draftJsImportElement.stateFromElement)(element, options);
}

/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BLOCK_TYPE = exports.BLOCK_TYPE = {
  // This is used to represent a normal text block (paragraph).
  UNSTYLED: 'unstyled',
  HEADER_ONE: 'header-one',
  HEADER_TWO: 'header-two',
  HEADER_THREE: 'header-three',
  HEADER_FOUR: 'header-four',
  HEADER_FIVE: 'header-five',
  HEADER_SIX: 'header-six',
  UNORDERED_LIST_ITEM: 'unordered-list-item',
  ORDERED_LIST_ITEM: 'ordered-list-item',
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
  CODE: 'code-block',
  ATOMIC: 'atomic'
};

var ENTITY_TYPE = exports.ENTITY_TYPE = {
  LINK: 'LINK',
  IMAGE: 'IMAGE'
};

var INLINE_STYLE = exports.INLINE_STYLE = {
  BOLD: 'BOLD',
  CODE: 'CODE',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE'
};

exports.default = {
  BLOCK_TYPE: BLOCK_TYPE,
  ENTITY_TYPE: ENTITY_TYPE,
  INLINE_STYLE: INLINE_STYLE
};

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(873);

var _getSelectedBlocks = __webpack_require__(895);

var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calls a provided `modifier` function with a selection for each
 * selected block in the current editor selection. Passes through additional
 * arguments to the modifier.
 *
 * Note: At the moment it will retain the original selection and override
 * possible selection changes from modifiers
 *
 * @param  {object} editorState The current draft.js editor state object
 *
 * @param  {function} modifier  A modifier function to be executed.
 *                              Must have the signature (editorState, selection, ...)
 *
 * @param  {mixed} ...args      Additional arguments to be passed through to the modifier
 *
 * @return {object} The new editor state
 */
exports.default = function (editorState, modifier) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var contentState = editorState.getCurrentContent();
  var currentSelection = editorState.getSelection();

  var startKey = currentSelection.getStartKey();
  var endKey = currentSelection.getEndKey();
  var startOffset = currentSelection.getStartOffset();
  var endOffset = currentSelection.getEndOffset();

  var isSameBlock = startKey === endKey;
  var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);

  var finalEditorState = editorState;
  selectedBlocks.forEach(function (block) {
    var currentBlockKey = block.getKey();
    var selectionStart = startOffset;
    var selectionEnd = endOffset;

    if (currentBlockKey === startKey) {
      selectionStart = startOffset;
      selectionEnd = isSameBlock ? endOffset : block.getText().length;
    } else if (currentBlockKey === endKey) {
      selectionStart = isSameBlock ? startOffset : 0;
      selectionEnd = endOffset;
    } else {
      selectionStart = 0;
      selectionEnd = block.getText().length;
    }

    var selection = new _draftJs.SelectionState({
      anchorKey: currentBlockKey,
      anchorOffset: selectionStart,
      focusKey: currentBlockKey,
      focusOffset: selectionEnd
    });

    finalEditorState = modifier.apply(undefined, [finalEditorState, selection].concat(args));
  });

  return _draftJs.EditorState.forceSelection(finalEditorState, currentSelection);
};

/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_SET = undefined;
exports.default = getEntityRanges;

var _immutable = __webpack_require__(106);

var EMPTY_SET = exports.EMPTY_SET = new _immutable.OrderedSet();
function getEntityRanges(text, charMetaList) {
  var charEntity = null;
  var prevCharEntity = null;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharEntity = charEntity;
    var meta = charMetaList.get(i);
    charEntity = meta ? meta.getEntity() : null;
    if (i > 0 && charEntity !== prevCharEntity) {
      ranges.push([prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i))]);
      rangeStart = i;
    }
  }
  ranges.push([charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart))]);
  return ranges;
}

function getStyleRanges(text, charMetaList) {
  var charStyle = EMPTY_SET;
  var prevCharStyle = EMPTY_SET;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharStyle = charStyle;
    var meta = charMetaList.get(i);
    charStyle = meta ? meta.getStyle() : EMPTY_SET;
    if (i > 0 && !(0, _immutable.is)(charStyle, prevCharStyle)) {
      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
      rangeStart = i;
    }
  }
  ranges.push([text.slice(rangeStart), charStyle]);
  return ranges;
}

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSelectedBlocks = __webpack_require__(895);

var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
  return function (editorState, selection) {
    var contentState = editorState.getCurrentContent();
    var currentSelection = selection || editorState.getSelection();
    var startKey = currentSelection.getStartKey();
    var endKey = currentSelection.getEndKey();
    var startOffset = currentSelection.getStartOffset();
    var endOffset = currentSelection.getEndOffset();

    var isSameBlock = startKey === endKey;
    var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);
    var entityFound = false;

    // We have to shift the offset to not get false positives when selecting
    // a character just before or after an entity
    var finalStartOffset = startOffset + 1;
    var finalEndOffset = endOffset - 1;

    selectedBlocks.forEach(function (block) {
      strategy(block, function (start, end) {
        if (entityFound) {
          return;
        }

        var blockKey = block.getKey();

        if (isSameBlock && (end < finalStartOffset || start > finalEndOffset)) {
          return;
        } else if (blockKey === startKey && end < finalStartOffset) {
          return;
        } else if (blockKey === endKey && start > finalEndOffset) {
          return;
        }

        entityFound = true;
      });
    });

    return entityFound;
  };
};

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AtomicBlockUtils
 * @typechecks
 * 
 */



var BlockMapBuilder = __webpack_require__(880);
var CharacterMetadata = __webpack_require__(867);
var ContentBlock = __webpack_require__(872);
var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var Immutable = __webpack_require__(106);

var generateRandomKey = __webpack_require__(868);

var List = Immutable.List;
var Repeat = Immutable.Repeat;


var AtomicBlockUtils = {
  insertAtomicBlock: function insertAtomicBlock(editorState, entityKey, character) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();

    var afterRemoval = DraftModifier.removeRange(contentState, selectionState, 'backward');

    var targetSelection = afterRemoval.getSelectionAfter();
    var afterSplit = DraftModifier.splitBlock(afterRemoval, targetSelection);
    var insertionTarget = afterSplit.getSelectionAfter();

    var asAtomicBlock = DraftModifier.setBlockType(afterSplit, insertionTarget, 'atomic');

    var charData = CharacterMetadata.create({ entity: entityKey });

    var fragmentArray = [new ContentBlock({
      key: generateRandomKey(),
      type: 'atomic',
      text: character,
      characterList: List(Repeat(charData, character.length))
    }), new ContentBlock({
      key: generateRandomKey(),
      type: 'unstyled',
      text: '',
      characterList: List()
    })];

    var fragment = BlockMapBuilder.createFromArray(fragmentArray);

    var withAtomicBlock = DraftModifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);

    var newContent = withAtomicBlock.merge({
      selectionBefore: selectionState,
      selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
    });

    return EditorState.push(editorState, newContent, 'insert-fragment');
  }
};

module.exports = AtomicBlockUtils;

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CompositeDraftDecorator
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Immutable = __webpack_require__(106);

var List = Immutable.List;


var DELIMITER = '.';

/**
 * A CompositeDraftDecorator traverses through a list of DraftDecorator
 * instances to identify sections of a ContentBlock that should be rendered
 * in a "decorated" manner. For example, hashtags, mentions, and links may
 * be intended to stand out visually, be rendered as anchors, etc.
 *
 * The list of decorators supplied to the constructor will be used in the
 * order they are provided. This allows the caller to specify a priority for
 * string matching, in case of match collisions among decorators.
 *
 * For instance, I may have a link with a `#` in its text. Though this section
 * of text may match our hashtag decorator, it should not be treated as a
 * hashtag. I should therefore list my link DraftDecorator
 * before my hashtag DraftDecorator when constructing this composite
 * decorator instance.
 *
 * Thus, when a collision like this is encountered, the earlier match is
 * preserved and the new match is discarded.
 */

var CompositeDraftDecorator = function () {
  function CompositeDraftDecorator(decorators) {
    _classCallCheck(this, CompositeDraftDecorator);

    // Copy the decorator array, since we use this array order to determine
    // precedence of decoration matching. If the array is mutated externally,
    // we don't want to be affected here.
    this._decorators = decorators.slice();
  }

  CompositeDraftDecorator.prototype.getDecorations = function getDecorations(block) {
    var decorations = Array(block.getText().length).fill(null);

    this._decorators.forEach(function ( /*object*/decorator, /*number*/ii) {
      var counter = 0;
      var strategy = decorator.strategy;
      strategy(block, function ( /*number*/start, /*number*/end) {
        // Find out if any of our matching range is already occupied
        // by another decorator. If so, discard the match. Otherwise, store
        // the component key for rendering.
        if (canOccupySlice(decorations, start, end)) {
          occupySlice(decorations, start, end, ii + DELIMITER + counter);
          counter++;
        }
      });
    });

    return List(decorations);
  };

  CompositeDraftDecorator.prototype.getComponentForKey = function getComponentForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].component;
  };

  CompositeDraftDecorator.prototype.getPropsForKey = function getPropsForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].props;
  };

  return CompositeDraftDecorator;
}();

/**
 * Determine whether we can occupy the specified slice of the decorations
 * array.
 */


function canOccupySlice(decorations, start, end) {
  for (var ii = start; ii < end; ii++) {
    if (decorations[ii] != null) {
      return false;
    }
  }
  return true;
}

/**
 * Splice the specified component into our decoration array at the desired
 * range.
 */
function occupySlice(targetArr, start, end, componentKey) {
  for (var ii = start; ii < end; ii++) {
    targetArr[ii] = componentKey;
  }
}

module.exports = CompositeDraftDecorator;

/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentStateInlineStyle
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);

var _require = __webpack_require__(106);

var Map = _require.Map;


var ContentStateInlineStyle = {
  add: function add(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, true);
  },

  remove: function remove(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, false);
  }
};

function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  var newBlocks = blockMap.skipUntil(function (_, k) {
    return k === startKey;
  }).takeUntil(function (_, k) {
    return k === endKey;
  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
    var sliceStart;
    var sliceEnd;

    if (startKey === endKey) {
      sliceStart = startOffset;
      sliceEnd = endOffset;
    } else {
      sliceStart = blockKey === startKey ? startOffset : 0;
      sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    }

    var chars = block.getCharacterList();
    var current;
    while (sliceStart < sliceEnd) {
      current = chars.get(sliceStart);
      chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata.applyStyle(current, inlineStyle) : CharacterMetadata.removeStyle(current, inlineStyle));
      sliceStart++;
    }

    return block.set('characterList', chars);
  });

  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}

module.exports = ContentStateInlineStyle;

/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditor.react
 * @typechecks
 * 
 */



var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultDraftBlockRenderMap = __webpack_require__(897);
var DefaultDraftInlineStyle = __webpack_require__(930);
var DraftEditorCompositionHandler = __webpack_require__(1022);
var DraftEditorContents = __webpack_require__(1023);
var DraftEditorDragHandler = __webpack_require__(1024);
var DraftEditorEditHandler = __webpack_require__(1025);
var DraftEditorPlaceholder = __webpack_require__(1027);
var EditorState = __webpack_require__(862);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(73);
var Scroll = __webpack_require__(951);
var Style = __webpack_require__(905);
var UserAgent = __webpack_require__(869);

var cx = __webpack_require__(883);
var emptyFunction = __webpack_require__(912);
var generateRandomKey = __webpack_require__(868);
var getDefaultKeyBinding = __webpack_require__(936);
var nullthrows = __webpack_require__(866);
var getScrollPosition = __webpack_require__(907);

var isIE = UserAgent.isBrowser('IE');

// IE does not support the `input` event on contentEditable, so we can't
// observe spellcheck behavior.
var allowSpellCheck = !isIE;

// Define a set of handler objects to correspond to each possible `mode`
// of editor behavior.
var handlerMap = {
  'edit': DraftEditorEditHandler,
  'composite': DraftEditorCompositionHandler,
  'drag': DraftEditorDragHandler,
  'cut': null,
  'render': null
};

/**
 * `DraftEditor` is the root editor component. It composes a `contentEditable`
 * div, and provides a wide variety of useful function props for managing the
 * state of the editor. See `DraftEditorProps` for details.
 */
var DraftEditor = function (_React$Component) {
  _inherits(DraftEditor, _React$Component);

  function DraftEditor(props) {
    _classCallCheck(this, DraftEditor);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this._blockSelectEvents = false;
    _this._clipboard = null;
    _this._guardAgainstRender = false;
    _this._handler = null;
    _this._dragCount = 0;
    _this._editorKey = generateRandomKey();
    _this._placeholderAccessibilityID = 'placeholder-' + _this._editorKey;

    _this._onBeforeInput = _this._buildHandler('onBeforeInput');
    _this._onBlur = _this._buildHandler('onBlur');
    _this._onCharacterData = _this._buildHandler('onCharacterData');
    _this._onCompositionEnd = _this._buildHandler('onCompositionEnd');
    _this._onCompositionStart = _this._buildHandler('onCompositionStart');
    _this._onCopy = _this._buildHandler('onCopy');
    _this._onCut = _this._buildHandler('onCut');
    _this._onDragEnd = _this._buildHandler('onDragEnd');
    _this._onDragOver = _this._buildHandler('onDragOver');
    _this._onDragStart = _this._buildHandler('onDragStart');
    _this._onDrop = _this._buildHandler('onDrop');
    _this._onInput = _this._buildHandler('onInput');
    _this._onFocus = _this._buildHandler('onFocus');
    _this._onKeyDown = _this._buildHandler('onKeyDown');
    _this._onKeyPress = _this._buildHandler('onKeyPress');
    _this._onKeyUp = _this._buildHandler('onKeyUp');
    _this._onMouseDown = _this._buildHandler('onMouseDown');
    _this._onMouseUp = _this._buildHandler('onMouseUp');
    _this._onPaste = _this._buildHandler('onPaste');
    _this._onSelect = _this._buildHandler('onSelect');

    // Manual binding for public and internal methods.
    _this.focus = _this._focus.bind(_this);
    _this.blur = _this._blur.bind(_this);
    _this.setMode = _this._setMode.bind(_this);
    _this.exitCurrentMode = _this._exitCurrentMode.bind(_this);
    _this.restoreEditorDOM = _this._restoreEditorDOM.bind(_this);
    _this.setRenderGuard = _this._setRenderGuard.bind(_this);
    _this.removeRenderGuard = _this._removeRenderGuard.bind(_this);
    _this.setClipboard = _this._setClipboard.bind(_this);
    _this.getClipboard = _this._getClipboard.bind(_this);
    _this.getEditorKey = function () {
      return _this._editorKey;
    };
    _this.update = _this._update.bind(_this);
    _this.onDragEnter = _this._onDragEnter.bind(_this);
    _this.onDragLeave = _this._onDragLeave.bind(_this);

    // See `_restoreEditorDOM()`.
    _this.state = { containerKey: 0 };
    return _this;
  }

  /**
   * Build a method that will pass the event to the specified handler method.
   * This allows us to look up the correct handler function for the current
   * editor mode, if any has been specified.
   */


  /**
   * Define proxies that can route events to the current handler.
   */


  DraftEditor.prototype._buildHandler = function _buildHandler(eventName) {
    var _this2 = this;

    return function (e) {
      if (!_this2.props.readOnly) {
        var method = _this2._handler && _this2._handler[eventName];
        method && method.call(_this2, e);
      }
    };
  };

  DraftEditor.prototype._showPlaceholder = function _showPlaceholder() {
    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
  };

  DraftEditor.prototype._renderPlaceholder = function _renderPlaceholder() {
    if (this._showPlaceholder()) {
      return React.createElement(DraftEditorPlaceholder, {
        text: nullthrows(this.props.placeholder),
        editorState: this.props.editorState,
        textAlignment: this.props.textAlignment,
        accessibilityID: this._placeholderAccessibilityID
      });
    }
    return null;
  };

  DraftEditor.prototype.render = function render() {
    var _props = this.props;
    var readOnly = _props.readOnly;
    var textAlignment = _props.textAlignment;

    var rootClass = cx({
      'DraftEditor/root': true,
      'DraftEditor/alignLeft': textAlignment === 'left',
      'DraftEditor/alignRight': textAlignment === 'right',
      'DraftEditor/alignCenter': textAlignment === 'center'
    });

    var contentStyle = {
      outline: 'none',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word'
    };

    return React.createElement(
      'div',
      { className: rootClass },
      this._renderPlaceholder(),
      React.createElement(
        'div',
        {
          className: cx('DraftEditor/editorContainer'),
          key: 'editor' + this.state.containerKey,
          ref: 'editorContainer' },
        React.createElement(
          'div',
          {
            'aria-activedescendant': readOnly ? null : this.props.ariaActiveDescendantID,
            'aria-autocomplete': readOnly ? null : this.props.ariaAutoComplete,
            'aria-describedby': this._showPlaceholder() ? this._placeholderAccessibilityID : null,
            'aria-expanded': readOnly ? null : this.props.ariaExpanded,
            'aria-haspopup': readOnly ? null : this.props.ariaHasPopup,
            'aria-label': this.props.ariaLabel,
            'aria-owns': readOnly ? null : this.props.ariaOwneeID,
            className: cx('public/DraftEditor/content'),
            contentEditable: !readOnly,
            'data-testid': this.props.webDriverTestID,
            onBeforeInput: this._onBeforeInput,
            onBlur: this._onBlur,
            onCompositionEnd: this._onCompositionEnd,
            onCompositionStart: this._onCompositionStart,
            onCopy: this._onCopy,
            onCut: this._onCut,
            onDragEnd: this._onDragEnd,
            onDragEnter: this.onDragEnter,
            onDragLeave: this.onDragLeave,
            onDragOver: this._onDragOver,
            onDragStart: this._onDragStart,
            onDrop: this._onDrop,
            onFocus: this._onFocus,
            onInput: this._onInput,
            onKeyDown: this._onKeyDown,
            onKeyPress: this._onKeyPress,
            onKeyUp: this._onKeyUp,
            onMouseUp: this._onMouseUp,
            onPaste: this._onPaste,
            onSelect: this._onSelect,
            ref: 'editor',
            role: readOnly ? null : this.props.role || 'textbox',
            spellCheck: allowSpellCheck && this.props.spellCheck,
            style: contentStyle,
            suppressContentEditableWarning: true,
            tabIndex: this.props.tabIndex },
          React.createElement(DraftEditorContents, {
            blockRenderMap: this.props.blockRenderMap,
            blockRendererFn: this.props.blockRendererFn,
            blockStyleFn: this.props.blockStyleFn,
            customStyleMap: _extends({}, DefaultDraftInlineStyle, this.props.customStyleMap),
            customStyleFn: this.props.customStyleFn,
            editorKey: this._editorKey,
            editorState: this.props.editorState
          })
        )
      )
    );
  };

  DraftEditor.prototype.componentDidMount = function componentDidMount() {
    this.setMode('edit');

    /**
     * IE has a hardcoded "feature" that attempts to convert link text into
     * anchors in contentEditable DOM. This breaks the editor's expectations of
     * the DOM, and control is lost. Disable it to make IE behave.
     * See: http://blogs.msdn.com/b/ieinternals/archive/2010/09/15/
     * ie9-beta-minor-change-list.aspx
     */
    if (isIE) {
      document.execCommand('AutoUrlDetect', false, false);
    }
  };

  /**
   * Prevent selection events from affecting the current editor state. This
   * is mostly intended to defend against IE, which fires off `selectionchange`
   * events regardless of whether the selection is set via the browser or
   * programmatically. We only care about selection events that occur because
   * of browser interaction, not re-renders and forced selections.
   */


  DraftEditor.prototype.componentWillUpdate = function componentWillUpdate() {
    this._blockSelectEvents = true;
  };

  DraftEditor.prototype.componentDidUpdate = function componentDidUpdate() {
    this._blockSelectEvents = false;
  };

  /**
   * Used via `this.focus()`.
   *
   * Force focus back onto the editor node.
   *
   * Forcing focus causes the browser to scroll to the top of the editor, which
   * may be undesirable when the editor is taller than the viewport. To solve
   * this, either use a specified scroll position (in cases like `cut` behavior
   * where it should be restored to a known position) or store the current
   * scroll state and put it back in place after focus has been forced.
   */


  DraftEditor.prototype._focus = function _focus(scrollPosition) {
    var editorState = this.props.editorState;

    var alreadyHasFocus = editorState.getSelection().getHasFocus();
    var editorNode = ReactDOM.findDOMNode(this.refs.editor);

    var scrollParent = Style.getScrollParent(editorNode);

    var _ref = scrollPosition || getScrollPosition(scrollParent);

    var x = _ref.x;
    var y = _ref.y;


    editorNode.focus();
    if (scrollParent === window) {
      window.scrollTo(x, y);
    } else {
      Scroll.setTop(scrollParent, y);
    }

    // On Chrome and Safari, calling focus on contenteditable focuses the
    // cursor at the first character. This is something you don't expect when
    // you're clicking on an input element but not directly on a character.
    // Put the cursor back where it was before the blur.
    if (!alreadyHasFocus) {
      this.update(EditorState.forceSelection(editorState, editorState.getSelection()));
    }
  };

  DraftEditor.prototype._blur = function _blur() {
    ReactDOM.findDOMNode(this.refs.editor).blur();
  };

  /**
   * Used via `this.setMode(...)`.
   *
   * Set the behavior mode for the editor component. This switches the current
   * handler module to ensure that DOM events are managed appropriately for
   * the active mode.
   */


  DraftEditor.prototype._setMode = function _setMode(mode) {
    this._handler = handlerMap[mode];
  };

  DraftEditor.prototype._exitCurrentMode = function _exitCurrentMode() {
    this.setMode('edit');
  };

  /**
   * Used via `this.restoreEditorDOM()`.
   *
   * Force a complete re-render of the editor based on the current EditorState.
   * This is useful when we know we are going to lose control of the DOM
   * state (cut command, IME) and we want to make sure that reconciliation
   * occurs on a version of the DOM that is synchronized with our EditorState.
   */


  DraftEditor.prototype._restoreEditorDOM = function _restoreEditorDOM(scrollPosition) {
    var _this3 = this;

    this.setState({ containerKey: this.state.containerKey + 1 }, function () {
      _this3._focus(scrollPosition);
    });
  };

  /**
   * Guard against rendering. Intended for use when we need to manually
   * reset editor contents, to ensure that no outside influences lead to
   * React reconciliation when we are in an uncertain state.
   */


  DraftEditor.prototype._setRenderGuard = function _setRenderGuard() {
    this._guardAgainstRender = true;
  };

  DraftEditor.prototype._removeRenderGuard = function _removeRenderGuard() {
    this._guardAgainstRender = false;
  };

  /**
   * Used via `this.setClipboard(...)`.
   *
   * Set the clipboard state for a cut/copy event.
   */


  DraftEditor.prototype._setClipboard = function _setClipboard(clipboard) {
    this._clipboard = clipboard;
  };

  /**
   * Used via `this.getClipboard()`.
   *
   * Retrieve the clipboard state for a cut/copy event.
   */


  DraftEditor.prototype._getClipboard = function _getClipboard() {
    return this._clipboard;
  };

  /**
   * Used via `this.update(...)`.
   *
   * Propagate a new `EditorState` object to higher-level components. This is
   * the method by which event handlers inform the `DraftEditor` component of
   * state changes. A component that composes a `DraftEditor` **must** provide
   * an `onChange` prop to receive state updates passed along from this
   * function.
   */


  DraftEditor.prototype._update = function _update(editorState) {
    this.props.onChange(editorState);
  };

  /**
   * Used in conjunction with `_onDragLeave()`, by counting the number of times
   * a dragged element enters and leaves the editor (or any of its children),
   * to determine when the dragged element absolutely leaves the editor.
   */


  DraftEditor.prototype._onDragEnter = function _onDragEnter() {
    this._dragCount++;
  };

  /**
   * See `_onDragEnter()`.
   */


  DraftEditor.prototype._onDragLeave = function _onDragLeave() {
    this._dragCount--;
    if (this._dragCount === 0) {
      this.exitCurrentMode();
    }
  };

  return DraftEditor;
}(React.Component);

DraftEditor.defaultProps = {
  blockRenderMap: DefaultDraftBlockRenderMap,
  blockRendererFn: emptyFunction.thatReturnsNull,
  blockStyleFn: emptyFunction.thatReturns(''),
  keyBindingFn: getDefaultKeyBinding,
  readOnly: false,
  spellCheck: false,
  stripPastedStyles: false
};


module.exports = DraftEditor;

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorCompositionHandler
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var Keys = __webpack_require__(904);

var getEntityKeyForSelection = __webpack_require__(900);
var isSelectionAtLeafStart = __webpack_require__(945);

/**
 * Millisecond delay to allow `compositionstart` to fire again upon
 * `compositionend`.
 *
 * This is used for Korean input to ensure that typing can continue without
 * the editor trying to render too quickly. More specifically, Safari 7.1+
 * triggers `compositionstart` a little slower than Chrome/FF, which
 * leads to composed characters being resolved and re-render occurring
 * sooner than we want.
 */
var RESOLVE_DELAY = 20;

/**
 * A handful of variables used to track the current composition and its
 * resolution status. These exist at the module level because it is not
 * possible to have compositions occurring in multiple editors simultaneously,
 * and it simplifies state management with respect to the DraftEditor component.
 */
var resolved = false;
var stillComposing = false;
var textInputData = '';

var DraftEditorCompositionHandler = {
  onBeforeInput: function onBeforeInput(e) {
    textInputData = (textInputData || '') + e.data;
  },

  /**
   * A `compositionstart` event has fired while we're still in composition
   * mode. Continue the current composition session to prevent a re-render.
   */
  onCompositionStart: function onCompositionStart() {
    stillComposing = true;
  },

  /**
   * Attempt to end the current composition session.
   *
   * Defer handling because browser will still insert the chars into active
   * element after `compositionend`. If a `compositionstart` event fires
   * before `resolveComposition` executes, our composition session will
   * continue.
   *
   * The `resolved` flag is useful because certain IME interfaces fire the
   * `compositionend` event multiple times, thus queueing up multiple attempts
   * at handling the composition. Since handling the same composition event
   * twice could break the DOM, we only use the first event. Example: Arabic
   * Google Input Tools on Windows 8.1 fires `compositionend` three times.
   */
  onCompositionEnd: function onCompositionEnd() {
    var _this = this;

    resolved = false;
    stillComposing = false;
    setTimeout(function () {
      if (!resolved) {
        DraftEditorCompositionHandler.resolveComposition.call(_this);
      }
    }, RESOLVE_DELAY);
  },

  /**
   * In Safari, keydown events may fire when committing compositions. If
   * the arrow keys are used to commit, prevent default so that the cursor
   * doesn't move, otherwise it will jump back noticeably on re-render.
   */
  onKeyDown: function onKeyDown(e) {
    if (e.which === Keys.RIGHT || e.which === Keys.LEFT) {
      e.preventDefault();
    }
  },

  /**
   * Keypress events may fire when committing compositions. In Firefox,
   * pressing RETURN commits the composition and inserts extra newline
   * characters that we do not want. `preventDefault` allows the composition
   * to be committed while preventing the extra characters.
   */
  onKeyPress: function onKeyPress(e) {
    if (e.which === Keys.RETURN) {
      e.preventDefault();
    }
  },

  /**
   * Attempt to insert composed characters into the document.
   *
   * If we are still in a composition session, do nothing. Otherwise, insert
   * the characters into the document and terminate the composition session.
   *
   * If no characters were composed -- for instance, the user
   * deleted all composed characters and committed nothing new --
   * force a re-render. We also re-render when the composition occurs
   * at the beginning of a leaf, to ensure that if the browser has
   * created a new text node for the composition, we will discard it.
   *
   * Resetting innerHTML will move focus to the beginning of the editor,
   * so we update to force it back to the correct place.
   */
  resolveComposition: function resolveComposition() {
    if (stillComposing) {
      return;
    }

    resolved = true;
    var composedChars = textInputData;
    textInputData = '';

    var editorState = EditorState.set(this.props.editorState, {
      inCompositionMode: false
    });

    var currentStyle = editorState.getCurrentInlineStyle();
    var entityKey = getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection());

    var mustReset = !composedChars || isSelectionAtLeafStart(editorState) || currentStyle.size > 0 || entityKey !== null;

    if (mustReset) {
      this.restoreEditorDOM();
    }

    this.exitCurrentMode();
    this.removeRenderGuard();

    if (composedChars) {
      // If characters have been composed, re-rendering with the update
      // is sufficient to reset the editor.
      var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), composedChars, currentStyle, entityKey);
      this.update(EditorState.push(editorState, contentState, 'insert-characters'));
      return;
    }

    if (mustReset) {
      this.update(EditorState.set(editorState, {
        nativelyRenderedContent: null,
        forceSelection: true
      }));
    }
  }
};

module.exports = DraftEditorCompositionHandler;

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorContents.react
 * @typechecks
 * 
 */



var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraftEditorBlock = __webpack_require__(931);
var DraftOffsetKey = __webpack_require__(886);
var EditorState = __webpack_require__(862);
var React = __webpack_require__(1);

var cx = __webpack_require__(883);
var joinClasses = __webpack_require__(1096);
var nullthrows = __webpack_require__(866);

/**
 * `DraftEditorContents` is the container component for all block components
 * rendered for a `DraftEditor`. It is optimized to aggressively avoid
 * re-rendering blocks whenever possible.
 *
 * This component is separate from `DraftEditor` because certain props
 * (for instance, ARIA props) must be allowed to update without affecting
 * the contents of the editor.
 */
var DraftEditorContents = function (_React$Component) {
  _inherits(DraftEditorContents, _React$Component);

  function DraftEditorContents() {
    _classCallCheck(this, DraftEditorContents);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DraftEditorContents.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var prevEditorState = this.props.editorState;
    var nextEditorState = nextProps.editorState;

    var prevDirectionMap = prevEditorState.getDirectionMap();
    var nextDirectionMap = nextEditorState.getDirectionMap();

    // Text direction has changed for one or more blocks. We must re-render.
    if (prevDirectionMap !== nextDirectionMap) {
      return true;
    }

    var didHaveFocus = prevEditorState.getSelection().getHasFocus();
    var nowHasFocus = nextEditorState.getSelection().getHasFocus();

    if (didHaveFocus !== nowHasFocus) {
      return true;
    }

    var nextNativeContent = nextEditorState.getNativelyRenderedContent();

    var wasComposing = prevEditorState.isInCompositionMode();
    var nowComposing = nextEditorState.isInCompositionMode();

    // If the state is unchanged or we're currently rendering a natively
    // rendered state, there's nothing new to be done.
    if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
      return false;
    }

    var prevContent = prevEditorState.getCurrentContent();
    var nextContent = nextEditorState.getCurrentContent();
    var prevDecorator = prevEditorState.getDecorator();
    var nextDecorator = nextEditorState.getDecorator();
    return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
  };

  DraftEditorContents.prototype.render = function render() {
    var _props = this.props;
    var blockRenderMap = _props.blockRenderMap;
    var blockRendererFn = _props.blockRendererFn;
    var customStyleMap = _props.customStyleMap;
    var customStyleFn = _props.customStyleFn;
    var editorState = _props.editorState;


    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var forceSelection = editorState.mustForceSelection();
    var decorator = editorState.getDecorator();
    var directionMap = nullthrows(editorState.getDirectionMap());

    var blocksAsArray = content.getBlocksAsArray();
    var processedBlocks = [];
    var currentDepth = null;
    var lastWrapperTemplate = null;

    for (var ii = 0; ii < blocksAsArray.length; ii++) {
      var _block = blocksAsArray[ii];
      var key = _block.getKey();
      var blockType = _block.getType();

      var customRenderer = blockRendererFn(_block);
      var CustomComponent = void 0,
          customProps = void 0,
          customEditable = void 0;
      if (customRenderer) {
        CustomComponent = customRenderer.component;
        customProps = customRenderer.props;
        customEditable = customRenderer.editable;
      }

      var direction = directionMap.get(key);
      var offsetKey = DraftOffsetKey.encode(key, 0, 0);
      var componentProps = {
        block: _block,
        blockProps: customProps,
        customStyleMap: customStyleMap,
        customStyleFn: customStyleFn,
        decorator: decorator,
        direction: direction,
        forceSelection: forceSelection,
        key: key,
        offsetKey: offsetKey,
        selection: selection,
        tree: editorState.getBlockTree(key)
      };

      var configForType = blockRenderMap.get(blockType);
      var wrapperTemplate = configForType.wrapper;

      var _Element = configForType.element || blockRenderMap.get('unstyled').element;

      var depth = _block.getDepth();
      var className = this.props.blockStyleFn(_block);

      // List items are special snowflakes, since we handle nesting and
      // counters manually.
      if (_Element === 'li') {
        var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || currentDepth === null || depth > currentDepth;
        className = joinClasses(className, getListItemClasses(blockType, depth, shouldResetCount, direction));
      }

      var Component = CustomComponent || DraftEditorBlock;
      var childProps = {
        className: className,
        'data-block': true,
        'data-editor': this.props.editorKey,
        'data-offset-key': offsetKey,
        key: key
      };
      if (customEditable !== undefined) {
        childProps = _extends({}, childProps, {
          contentEditable: customEditable,
          suppressContentEditableWarning: true
        });
      }

      var child = React.createElement(_Element, childProps, React.createElement(Component, componentProps));

      processedBlocks.push({
        block: child,
        wrapperTemplate: wrapperTemplate,
        key: key,
        offsetKey: offsetKey
      });

      if (wrapperTemplate) {
        currentDepth = _block.getDepth();
      } else {
        currentDepth = null;
      }
      lastWrapperTemplate = wrapperTemplate;
    }

    // Group contiguous runs of blocks that have the same wrapperTemplate
    var outputBlocks = [];
    for (var _ii = 0; _ii < processedBlocks.length;) {
      var info = processedBlocks[_ii];
      if (info.wrapperTemplate) {
        var blocks = [];
        do {
          blocks.push(processedBlocks[_ii].block);
          _ii++;
        } while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
        var wrapperElement = React.cloneElement(info.wrapperTemplate, {
          key: info.key + '-wrap',
          'data-offset-key': info.offsetKey
        }, blocks);
        outputBlocks.push(wrapperElement);
      } else {
        outputBlocks.push(info.block);
        _ii++;
      }
    }

    return React.createElement(
      'div',
      { 'data-contents': 'true' },
      outputBlocks
    );
  };

  return DraftEditorContents;
}(React.Component);

/**
 * Provide default styling for list items. This way, lists will be styled with
 * proper counters and indentation even if the caller does not specify
 * their own styling at all. If more than five levels of nesting are needed,
 * the necessary CSS classes can be provided via `blockStyleFn` configuration.
 */


function getListItemClasses(type, depth, shouldResetCount, direction) {
  return cx({
    'public/DraftStyleDefault/unorderedListItem': type === 'unordered-list-item',
    'public/DraftStyleDefault/orderedListItem': type === 'ordered-list-item',
    'public/DraftStyleDefault/reset': shouldResetCount,
    'public/DraftStyleDefault/depth0': depth === 0,
    'public/DraftStyleDefault/depth1': depth === 1,
    'public/DraftStyleDefault/depth2': depth === 2,
    'public/DraftStyleDefault/depth3': depth === 3,
    'public/DraftStyleDefault/depth4': depth === 4,
    'public/DraftStyleDefault/listLTR': direction === 'LTR',
    'public/DraftStyleDefault/listRTL': direction === 'RTL'
  });
}

module.exports = DraftEditorContents;

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorDragHandler
 * @typechecks
 * 
 */



var DataTransfer = __webpack_require__(950);
var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);

var findAncestorOffsetKey = __webpack_require__(899);
var getTextContentFromFiles = __webpack_require__(942);
var getUpdatedSelectionState = __webpack_require__(943);
var nullthrows = __webpack_require__(866);

var isEventHandled = __webpack_require__(889);

/**
 * Get a SelectionState for the supplied mouse event.
 */
function getSelectionForEvent(event, editorState) {
  var node = null;
  var offset = null;

  if (typeof document.caretRangeFromPoint === 'function') {
    var dropRange = document.caretRangeFromPoint(event.x, event.y);
    node = dropRange.startContainer;
    offset = dropRange.startOffset;
  } else if (event.rangeParent) {
    node = event.rangeParent;
    offset = event.rangeOffset;
  } else {
    return null;
  }

  node = nullthrows(node);
  offset = nullthrows(offset);
  var offsetKey = nullthrows(findAncestorOffsetKey(node));

  return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
}

var DraftEditorDragHandler = {
  /**
   * Drag originating from input terminated.
   */
  onDragEnd: function onDragEnd() {
    this.exitCurrentMode();
  },

  /**
   * Handle data being dropped.
   */
  onDrop: function onDrop(e) {
    var _this = this;

    var data = new DataTransfer(e.nativeEvent.dataTransfer);

    var editorState = this.props.editorState;
    var dropSelection = getSelectionForEvent(e.nativeEvent, editorState);

    e.preventDefault();
    this.exitCurrentMode();

    if (dropSelection == null) {
      return;
    }

    var files = data.getFiles();
    if (files.length > 0) {
      if (this.props.handleDroppedFiles && isEventHandled(this.props.handleDroppedFiles(dropSelection, files))) {
        return;
      }

      getTextContentFromFiles(files, function (fileText) {
        fileText && _this.update(insertTextAtSelection(editorState, nullthrows(dropSelection), // flow wtf
        fileText));
      });
      return;
    }

    var dragType = this._internalDrag ? 'internal' : 'external';
    if (this.props.handleDrop && isEventHandled(this.props.handleDrop(dropSelection, data, dragType))) {
      return;
    }

    if (this._internalDrag) {
      this.update(moveText(editorState, dropSelection));
      return;
    }

    this.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
  }

};

function moveText(editorState, targetSelection) {
  var newContentState = DraftModifier.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
  return EditorState.push(editorState, newContentState, 'insert-fragment');
}

/**
 * Insert text at a specified selection.
 */
function insertTextAtSelection(editorState, selection, text) {
  var newContentState = DraftModifier.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
  return EditorState.push(editorState, newContentState, 'insert-fragment');
}

module.exports = DraftEditorDragHandler;

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorEditHandler
 * 
 */



var onBeforeInput = __webpack_require__(1042);
var onBlur = __webpack_require__(1043);
var onCompositionStart = __webpack_require__(1044);
var onCopy = __webpack_require__(1045);
var onCut = __webpack_require__(1046);
var onDragOver = __webpack_require__(1047);
var onDragStart = __webpack_require__(1048);
var onFocus = __webpack_require__(1049);
var onInput = __webpack_require__(1050);
var onKeyDown = __webpack_require__(1051);
var onPaste = __webpack_require__(1052);
var onSelect = __webpack_require__(1053);

var DraftEditorEditHandler = {
  onBeforeInput: onBeforeInput,
  onBlur: onBlur,
  onCompositionStart: onCompositionStart,
  onCopy: onCopy,
  onCut: onCut,
  onDragOver: onDragOver,
  onDragStart: onDragStart,
  onFocus: onFocus,
  onInput: onInput,
  onKeyDown: onKeyDown,
  onPaste: onPaste,
  onSelect: onSelect
};

module.exports = DraftEditorEditHandler;

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorLeaf.react
 * @typechecks
 * 
 */



var _assign = __webpack_require__(683);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraftEditorTextNode = __webpack_require__(1028);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(73);
var SelectionState = __webpack_require__(876);

var setDraftEditorSelection = __webpack_require__(1076);

/**
 * All leaf nodes in the editor are spans with single text nodes. Leaf
 * elements are styled based on the merging of an optional custom style map
 * and a default style map.
 *
 * `DraftEditorLeaf` also provides a wrapper for calling into the imperative
 * DOM Selection API. In this way, top-level components can declaratively
 * maintain the selection state.
 */
var DraftEditorLeaf = function (_React$Component) {
  _inherits(DraftEditorLeaf, _React$Component);

  function DraftEditorLeaf() {
    _classCallCheck(this, DraftEditorLeaf);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  /**
   * By making individual leaf instances aware of their context within
   * the text of the editor, we can set our selection range more
   * easily than we could in the non-React world.
   *
   * Note that this depends on our maintaining tight control over the
   * DOM structure of the TextEditor component. If leaves had multiple
   * text nodes, this would be harder.
   */
  DraftEditorLeaf.prototype._setSelection = function _setSelection() {
    var selection = this.props.selection;

    // If selection state is irrelevant to the parent block, no-op.

    if (selection == null || !selection.getHasFocus()) {
      return;
    }

    var _props = this.props;
    var blockKey = _props.blockKey;
    var start = _props.start;
    var text = _props.text;

    var end = start + text.length;
    if (!selection.hasEdgeWithin(blockKey, start, end)) {
      return;
    }

    // Determine the appropriate target node for selection. If the child
    // is not a text node, it is a <br /> spacer. In this case, use the
    // <span> itself as the selection target.
    var node = ReactDOM.findDOMNode(this);
    var child = node.firstChild;
    var targetNode = void 0;

    if (child.nodeType === Node.TEXT_NODE) {
      targetNode = child;
    } else if (child.tagName === 'BR') {
      targetNode = node;
    } else {
      targetNode = child.firstChild;
    }

    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
  };

  DraftEditorLeaf.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return ReactDOM.findDOMNode(this.refs.leaf).textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
  };

  DraftEditorLeaf.prototype.componentDidUpdate = function componentDidUpdate() {
    this._setSelection();
  };

  DraftEditorLeaf.prototype.componentDidMount = function componentDidMount() {
    this._setSelection();
  };

  DraftEditorLeaf.prototype.render = function render() {
    var text = this.props.text;

    // If the leaf is at the end of its block and ends in a soft newline, append
    // an extra line feed character. Browsers collapse trailing newline
    // characters, which leaves the cursor in the wrong place after a
    // shift+enter. The extra character repairs this.

    if (text.endsWith('\n') && this.props.isLast) {
      text += '\n';
    }

    var _props2 = this.props;
    var customStyleMap = _props2.customStyleMap;
    var customStyleFn = _props2.customStyleFn;
    var offsetKey = _props2.offsetKey;
    var styleSet = _props2.styleSet;

    var styleObj = styleSet.reduce(function (map, styleName) {
      var mergedStyles = {};
      var style = customStyleMap[styleName];

      if (style !== undefined && map.textDecoration !== style.textDecoration) {
        // .trim() is necessary for IE9/10/11 and Edge
        mergedStyles.textDecoration = [map.textDecoration, style.textDecoration].join(' ').trim();
      }

      return _assign(map, style, mergedStyles);
    }, {});

    if (customStyleFn) {
      var newStyles = customStyleFn(styleSet);
      styleObj = _assign(styleObj, newStyles);
    }

    return React.createElement(
      'span',
      {
        'data-offset-key': offsetKey,
        ref: 'leaf',
        style: styleObj },
      React.createElement(
        DraftEditorTextNode,
        null,
        text
      )
    );
  };

  return DraftEditorLeaf;
}(React.Component);

module.exports = DraftEditorLeaf;

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorPlaceholder.react
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);

var cx = __webpack_require__(883);

/**
 * This component is responsible for rendering placeholder text for the
 * `DraftEditor` component.
 *
 * Override placeholder style via CSS.
 */
var DraftEditorPlaceholder = function (_React$Component) {
  _inherits(DraftEditorPlaceholder, _React$Component);

  function DraftEditorPlaceholder() {
    _classCallCheck(this, DraftEditorPlaceholder);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DraftEditorPlaceholder.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
  };

  DraftEditorPlaceholder.prototype.render = function render() {
    var hasFocus = this.props.editorState.getSelection().getHasFocus();

    var className = cx({
      'public/DraftEditorPlaceholder/root': true,
      'public/DraftEditorPlaceholder/hasFocus': hasFocus
    });

    return React.createElement(
      'div',
      { className: className },
      React.createElement(
        'div',
        {
          className: cx('public/DraftEditorPlaceholder/inner'),
          id: this.props.accessibilityID },
        this.props.text
      )
    );
  };

  return DraftEditorPlaceholder;
}(React.Component);

module.exports = DraftEditorPlaceholder;

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorTextNode.react
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(73);
var UserAgent = __webpack_require__(869);

// In IE, spans with <br> tags render as two newlines. By rendering a span
// with only a newline character, we can be sure to render a single line.
var useNewlineChar = UserAgent.isBrowser('IE <= 11');

/**
 * Check whether the node should be considered a newline.
 */
function isNewline(node) {
  return useNewlineChar ? node.textContent === '\n' : node.tagName === 'BR';
}

/**
 * Placeholder elements for empty text content.
 *
 * What is this `data-text` attribute, anyway? It turns out that we need to
 * put an attribute on the lowest-level text node in order to preserve correct
 * spellcheck handling. If the <span> is naked, Chrome and Safari may do
 * bizarre things to do the DOM -- split text nodes, create extra spans, etc.
 * If the <span> has an attribute, this appears not to happen.
 * See http://jsfiddle.net/9khdavod/ for the failure case, and
 * http://jsfiddle.net/7pg143f7/ for the fixed case.
 */
var NEWLINE_A = useNewlineChar ? React.createElement(
  'span',
  { key: 'A', 'data-text': 'true' },
  '\n'
) : React.createElement('br', { key: 'A', 'data-text': 'true' });

var NEWLINE_B = useNewlineChar ? React.createElement(
  'span',
  { key: 'B', 'data-text': 'true' },
  '\n'
) : React.createElement('br', { key: 'B', 'data-text': 'true' });

/**
 * The lowest-level component in a `DraftEditor`, the text node component
 * replaces the default React text node implementation. This allows us to
 * perform custom handling of newline behavior and avoid re-rendering text
 * nodes with DOM state that already matches the expectations of our immutable
 * editor state.
 */
var DraftEditorTextNode = function (_React$Component) {
  _inherits(DraftEditorTextNode, _React$Component);

  function DraftEditorTextNode(props) {
    _classCallCheck(this, DraftEditorTextNode);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this._forceFlag = false;
    return _this;
  }

  DraftEditorTextNode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var node = ReactDOM.findDOMNode(this);
    var shouldBeNewline = nextProps.children === '';
    if (shouldBeNewline) {
      return !isNewline(node);
    }
    return node.textContent !== nextProps.children;
  };

  DraftEditorTextNode.prototype.componentWillUpdate = function componentWillUpdate() {
    // By flipping this flag, we also keep flipping keys which forces
    // React to remount this node every time it rerenders.
    this._forceFlag = !this._forceFlag;
  };

  DraftEditorTextNode.prototype.render = function render() {
    if (this.props.children === '') {
      return this._forceFlag ? NEWLINE_A : NEWLINE_B;
    }
    return React.createElement(
      'span',
      { key: this._forceFlag ? 'A' : 'B', 'data-text': 'true' },
      this.props.children
    );
  };

  return DraftEditorTextNode;
}(React.Component);

module.exports = DraftEditorTextNode;

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEntitySegments
 * @typechecks
 * 
 */



/**
 * Identify the range to delete from a segmented entity.
 *
 * Rules:
 *
 *  Example: 'John F. Kennedy'
 *
 *   - Deletion from within any non-whitespace (i.e. ['John', 'F.', 'Kennedy'])
 *     will return the range of that text.
 *
 *       'John F. Kennedy' -> 'John F.'
 *                  ^
 *
 *   - Forward deletion of whitespace will remove the following section:
 *
 *       'John F. Kennedy' -> 'John Kennedy'
 *            ^
 *
 *   - Backward deletion of whitespace will remove the previous section:
 *
 *       'John F. Kennedy' -> 'F. Kennedy'
 *            ^
 */
var DraftEntitySegments = {
  getRemovalRange: function getRemovalRange(selectionStart, selectionEnd, text, entityStart, direction) {
    var segments = text.split(' ');
    segments = segments.map(function ( /*string*/segment, /*number*/ii) {
      if (direction === 'forward') {
        if (ii > 0) {
          return ' ' + segment;
        }
      } else if (ii < segments.length - 1) {
        return segment + ' ';
      }
      return segment;
    });

    var segmentStart = entityStart;
    var segmentEnd;
    var segment;
    var removalStart = null;
    var removalEnd = null;

    for (var jj = 0; jj < segments.length; jj++) {
      segment = segments[jj];
      segmentEnd = segmentStart + segment.length;

      // Our selection overlaps this segment.
      if (selectionStart < segmentEnd && segmentStart < selectionEnd) {
        if (removalStart !== null) {
          removalEnd = segmentEnd;
        } else {
          removalStart = segmentStart;
          removalEnd = segmentEnd;
        }
      } else if (removalStart !== null) {
        break;
      }

      segmentStart = segmentEnd;
    }

    var entityEnd = entityStart + text.length;
    var atStart = removalStart === entityStart;
    var atEnd = removalEnd === entityEnd;

    if (!atStart && atEnd || atStart && !atEnd) {
      if (direction === 'forward') {
        if (removalEnd !== entityEnd) {
          removalEnd++;
        }
      } else if (removalStart !== entityStart) {
        removalStart--;
      }
    }

    return {
      start: removalStart,
      end: removalEnd
    };
  }
};

module.exports = DraftEntitySegments;

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftPasteProcessor
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);
var ContentBlock = __webpack_require__(872);
var Immutable = __webpack_require__(106);

var convertFromHTMLtoContentBlocks = __webpack_require__(935);
var generateRandomKey = __webpack_require__(868);
var getSafeBodyFromHTML = __webpack_require__(940);
var sanitizeDraftText = __webpack_require__(902);

var List = Immutable.List;
var Repeat = Immutable.Repeat;


var DraftPasteProcessor = {
  processHTML: function processHTML(html, blockRenderMap) {
    return convertFromHTMLtoContentBlocks(html, getSafeBodyFromHTML, blockRenderMap);
  },
  processText: function processText(textBlocks, character) {
    return textBlocks.map(function (textLine) {
      textLine = sanitizeDraftText(textLine);
      return new ContentBlock({
        key: generateRandomKey(),
        type: 'unstyled',
        text: textLine,
        characterList: List(Repeat(character, textLine.length))
      });
    });
  }
};

module.exports = DraftPasteProcessor;

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EditorBidiService
 * @typechecks
 * 
 */



var Immutable = __webpack_require__(106);
var UnicodeBidiService = __webpack_require__(1088);

var nullthrows = __webpack_require__(866);

var OrderedMap = Immutable.OrderedMap;


var bidiService;

var EditorBidiService = {
  getDirectionMap: function getDirectionMap(content, prevBidiMap) {
    if (!bidiService) {
      bidiService = new UnicodeBidiService();
    } else {
      bidiService.reset();
    }

    var blockMap = content.getBlockMap();
    var nextBidi = blockMap.valueSeq().map(function (block) {
      return nullthrows(bidiService).getDirection(block.getText());
    });
    var bidiMap = OrderedMap(blockMap.keySeq().zip(nextBidi));

    if (prevBidiMap != null && Immutable.is(prevBidiMap, bidiMap)) {
      return prevBidiMap;
    }

    return bidiMap;
  }
};

module.exports = EditorBidiService;

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RichTextEditorUtil
 * @typechecks
 * 
 */



var DraftEntity = __webpack_require__(871);
var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var SelectionState = __webpack_require__(876);

var adjustBlockDepthForContentState = __webpack_require__(1034);
var nullthrows = __webpack_require__(866);

var RichTextEditorUtil = {
  currentBlockContainsLink: function currentBlockContainsLink(editorState) {
    var selection = editorState.getSelection();
    return editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function (v) {
      var entity = v.getEntity();
      return !!entity && DraftEntity.get(entity).getType() === 'LINK';
    });
  },

  getCurrentBlockType: function getCurrentBlockType(editorState) {
    var selection = editorState.getSelection();
    return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  },

  getDataObjectForLinkURL: function getDataObjectForLinkURL(uri) {
    return { url: uri.toString() };
  },

  handleKeyCommand: function handleKeyCommand(editorState, command) {
    switch (command) {
      case 'bold':
        return RichTextEditorUtil.toggleInlineStyle(editorState, 'BOLD');
      case 'italic':
        return RichTextEditorUtil.toggleInlineStyle(editorState, 'ITALIC');
      case 'underline':
        return RichTextEditorUtil.toggleInlineStyle(editorState, 'UNDERLINE');
      case 'code':
        return RichTextEditorUtil.toggleCode(editorState);
      case 'backspace':
      case 'backspace-word':
      case 'backspace-to-start-of-line':
        return RichTextEditorUtil.onBackspace(editorState);
      case 'delete':
      case 'delete-word':
      case 'delete-to-end-of-block':
        return RichTextEditorUtil.onDelete(editorState);
      default:
        return null;
    }
  },

  insertSoftNewline: function insertSoftNewline(editorState) {
    var contentState = DraftModifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), '\n', editorState.getCurrentInlineStyle(), null);

    var newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

    return EditorState.forceSelection(newEditorState, contentState.getSelectionAfter());
  },

  /**
   * For collapsed selections at the start of styled blocks, backspace should
   * just remove the existing style.
   */
  onBackspace: function onBackspace(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) {
      return null;
    }

    // First, try to remove a preceding atomic block.
    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var blockBefore = content.getBlockBefore(startKey);

    if (blockBefore && blockBefore.getType() === 'atomic') {
      var atomicBlockTarget = selection.merge({
        anchorKey: blockBefore.getKey(),
        anchorOffset: 0
      });
      var asCurrentStyle = DraftModifier.setBlockType(content, atomicBlockTarget, content.getBlockForKey(startKey).getType());
      var withoutAtomicBlock = DraftModifier.removeRange(asCurrentStyle, atomicBlockTarget, 'backward');
      if (withoutAtomicBlock !== content) {
        return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
      }
    }

    // If that doesn't succeed, try to remove the current block style.
    var withoutBlockStyle = RichTextEditorUtil.tryToRemoveBlockStyle(editorState);

    if (withoutBlockStyle) {
      return EditorState.push(editorState, withoutBlockStyle, 'change-block-type');
    }

    return null;
  },

  onDelete: function onDelete(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      return null;
    }

    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var block = content.getBlockForKey(startKey);
    var length = block.getLength();

    // The cursor is somewhere within the text. Behave normally.
    if (selection.getStartOffset() < length) {
      return null;
    }

    var blockAfter = content.getBlockAfter(startKey);

    if (!blockAfter || blockAfter.getType() !== 'atomic') {
      return null;
    }

    var atomicBlockTarget = selection.merge({
      focusKey: blockAfter.getKey(),
      focusOffset: blockAfter.getLength()
    });

    var withoutAtomicBlock = DraftModifier.removeRange(content, atomicBlockTarget, 'forward');

    if (withoutAtomicBlock !== content) {
      return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
    }

    return null;
  },

  onTab: function onTab(event, editorState, maxDepth) {
    var selection = editorState.getSelection();
    var key = selection.getAnchorKey();
    if (key !== selection.getFocusKey()) {
      return editorState;
    }

    var content = editorState.getCurrentContent();
    var block = content.getBlockForKey(key);
    var type = block.getType();
    if (type !== 'unordered-list-item' && type !== 'ordered-list-item') {
      return editorState;
    }

    event.preventDefault();

    // Only allow indenting one level beyond the block above, and only if
    // the block above is a list item as well.
    var blockAbove = content.getBlockBefore(key);
    if (!blockAbove) {
      return editorState;
    }

    var typeAbove = blockAbove.getType();
    if (typeAbove !== 'unordered-list-item' && typeAbove !== 'ordered-list-item') {
      return editorState;
    }

    var depth = block.getDepth();
    if (!event.shiftKey && depth === maxDepth) {
      return editorState;
    }

    maxDepth = Math.min(blockAbove.getDepth() + 1, maxDepth);

    var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);

    return EditorState.push(editorState, withAdjustment, 'adjust-depth');
  },

  toggleBlockType: function toggleBlockType(editorState, blockType) {
    var selection = editorState.getSelection();
    var startKey = selection.getStartKey();
    var endKey = selection.getEndKey();
    var content = editorState.getCurrentContent();
    var target = selection;

    // Triple-click can lead to a selection that includes offset 0 of the
    // following block. The `SelectionState` for this case is accurate, but
    // we should avoid toggling block type for the trailing block because it
    // is a confusing interaction.
    if (startKey !== endKey && selection.getEndOffset() === 0) {
      var blockBefore = nullthrows(content.getBlockBefore(endKey));
      endKey = blockBefore.getKey();
      target = target.merge({
        anchorKey: startKey,
        anchorOffset: selection.getStartOffset(),
        focusKey: endKey,
        focusOffset: blockBefore.getLength(),
        isBackward: false
      });
    }

    var hasAtomicBlock = content.getBlockMap().skipWhile(function (_, k) {
      return k !== startKey;
    }).reverse().skipWhile(function (_, k) {
      return k !== endKey;
    }).some(function (v) {
      return v.getType() === 'atomic';
    });

    if (hasAtomicBlock) {
      return editorState;
    }

    var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? 'unstyled' : blockType;

    return EditorState.push(editorState, DraftModifier.setBlockType(content, target, typeToSet), 'change-block-type');
  },

  toggleCode: function toggleCode(editorState) {
    var selection = editorState.getSelection();
    var anchorKey = selection.getAnchorKey();
    var focusKey = selection.getFocusKey();

    if (selection.isCollapsed() || anchorKey !== focusKey) {
      return RichTextEditorUtil.toggleBlockType(editorState, 'code-block');
    }

    return RichTextEditorUtil.toggleInlineStyle(editorState, 'CODE');
  },

  /**
   * Toggle the specified inline style for the selection. If the
   * user's selection is collapsed, apply or remove the style for the
   * internal state. If it is not collapsed, apply the change directly
   * to the document state.
   */
  toggleInlineStyle: function toggleInlineStyle(editorState, inlineStyle) {
    var selection = editorState.getSelection();
    var currentStyle = editorState.getCurrentInlineStyle();

    // If the selection is collapsed, toggle the specified style on or off and
    // set the result as the new inline style override. This will then be
    // used as the inline style for the next character to be inserted.
    if (selection.isCollapsed()) {
      return EditorState.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
    }

    // If characters are selected, immediately apply or remove the
    // inline style on the document state itself.
    var content = editorState.getCurrentContent();
    var newContent;

    // If the style is already present for the selection range, remove it.
    // Otherwise, apply it.
    if (currentStyle.has(inlineStyle)) {
      newContent = DraftModifier.removeInlineStyle(content, selection, inlineStyle);
    } else {
      newContent = DraftModifier.applyInlineStyle(content, selection, inlineStyle);
    }

    return EditorState.push(editorState, newContent, 'change-inline-style');
  },

  toggleLink: function toggleLink(editorState, targetSelection, entityKey) {
    var withoutLink = DraftModifier.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);

    return EditorState.push(editorState, withoutLink, 'apply-entity');
  },

  /**
   * When a collapsed cursor is at the start of an empty styled block, allow
   * certain key commands (newline, backspace) to simply change the
   * style of the block instead of the default behavior.
   */
  tryToRemoveBlockStyle: function tryToRemoveBlockStyle(editorState) {
    var selection = editorState.getSelection();
    var offset = selection.getAnchorOffset();
    if (selection.isCollapsed() && offset === 0) {
      var key = selection.getAnchorKey();
      var content = editorState.getCurrentContent();
      var block = content.getBlockForKey(key);
      if (block.getLength() > 0) {
        return null;
      }

      var type = block.getType();
      var blockBefore = content.getBlockBefore(key);
      if (type === 'code-block' && blockBefore && blockBefore.getType() === 'code-block') {
        return null;
      }

      if (type !== 'unstyled') {
        return DraftModifier.setBlockType(content, selection, 'unstyled');
      }
    }
    return null;
  }
};

module.exports = RichTextEditorUtil;

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SecondaryClipboard
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);

var getContentStateFragment = __webpack_require__(888);
var nullthrows = __webpack_require__(866);

var clipboard = null;

/**
 * Some systems offer a "secondary" clipboard to allow quick internal cut
 * and paste behavior. For instance, Ctrl+K (cut) and Ctrl+Y (paste).
 */
var SecondaryClipboard = {
  cut: function cut(editorState) {
    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var targetRange = null;

    if (selection.isCollapsed()) {
      var anchorKey = selection.getAnchorKey();
      var blockEnd = content.getBlockForKey(anchorKey).getLength();

      if (blockEnd === selection.getAnchorOffset()) {
        return editorState;
      }

      targetRange = selection.set('focusOffset', blockEnd);
    } else {
      targetRange = selection;
    }

    targetRange = nullthrows(targetRange);
    clipboard = getContentStateFragment(content, targetRange);

    var afterRemoval = DraftModifier.removeRange(content, targetRange, 'forward');

    if (afterRemoval === content) {
      return editorState;
    }

    return EditorState.push(editorState, afterRemoval, 'remove-range');
  },

  paste: function paste(editorState) {
    if (!clipboard) {
      return editorState;
    }

    var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);

    return EditorState.push(editorState, newContent, 'insert-fragment');
  }
};

module.exports = SecondaryClipboard;

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adjustBlockDepthForContentState
 * @typechecks
 * 
 */



function adjustBlockDepthForContentState(contentState, selectionState, adjustment, maxDepth) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var blocks = blockMap.toSeq().skipUntil(function (_, k) {
    return k === startKey;
  }).takeUntil(function (_, k) {
    return k === endKey;
  }).concat([[endKey, blockMap.get(endKey)]]).map(function (block) {
    var depth = block.getDepth() + adjustment;
    depth = Math.max(0, Math.min(depth, maxDepth));
    return block.set('depth', depth);
  });

  blockMap = blockMap.merge(blocks);

  return contentState.merge({
    blockMap: blockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}

module.exports = adjustBlockDepthForContentState;

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule applyEntityToContentBlock
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);

function applyEntityToContentBlock(contentBlock, start, end, entityKey) {
  var characterList = contentBlock.getCharacterList();
  while (start < end) {
    characterList = characterList.set(start, CharacterMetadata.applyEntity(characterList.get(start), entityKey));
    start++;
  }
  return contentBlock.set('characterList', characterList);
}

module.exports = applyEntityToContentBlock;

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule applyEntityToContentState
 * @typechecks
 * 
 */



var Immutable = __webpack_require__(106);

var applyEntityToContentBlock = __webpack_require__(1035);

function applyEntityToContentState(contentState, selectionState, entityKey) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  var newBlocks = blockMap.skipUntil(function (_, k) {
    return k === startKey;
  }).takeUntil(function (_, k) {
    return k === endKey;
  }).toOrderedMap().merge(Immutable.OrderedMap([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
    var sliceStart = blockKey === startKey ? startOffset : 0;
    var sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
  });

  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}

module.exports = applyEntityToContentState;

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule convertFromDraftStateToRaw
 * 
 */



var DraftEntity = __webpack_require__(871);
var DraftStringKey = __webpack_require__(934);

var encodeEntityRanges = __webpack_require__(1054);
var encodeInlineStyleRanges = __webpack_require__(1055);

function convertFromDraftStateToRaw(contentState) {
  var entityStorageKey = 0;
  var entityStorageMap = {};
  var rawBlocks = [];

  contentState.getBlockMap().forEach(function (block, blockKey) {
    block.findEntityRanges(function (character) {
      return character.getEntity() !== null;
    }, function (start) {
      // Stringify to maintain order of otherwise numeric keys.
      var stringifiedEntityKey = DraftStringKey.stringify(block.getEntityAt(start));
      if (!entityStorageMap.hasOwnProperty(stringifiedEntityKey)) {
        entityStorageMap[stringifiedEntityKey] = '' + entityStorageKey++;
      }
    });

    rawBlocks.push({
      key: blockKey,
      text: block.getText(),
      type: block.getType(),
      depth: block.getDepth(),
      inlineStyleRanges: encodeInlineStyleRanges(block),
      entityRanges: encodeEntityRanges(block, entityStorageMap),
      data: block.getData().toObject()
    });
  });

  // Flip storage map so that our storage keys map to global
  // DraftEntity keys.
  var entityKeys = Object.keys(entityStorageMap);
  var flippedStorageMap = {};
  entityKeys.forEach(function (key, jj) {
    var entity = DraftEntity.get(DraftStringKey.unstringify(key));
    flippedStorageMap[jj] = {
      type: entity.getType(),
      mutability: entity.getMutability(),
      data: entity.getData()
    };
  });

  return {
    entityMap: flippedStorageMap,
    blocks: rawBlocks
  };
}

module.exports = convertFromDraftStateToRaw;

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule convertFromRawToDraftState
 * 
 */



var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ContentBlock = __webpack_require__(872);
var ContentState = __webpack_require__(896);
var DraftEntity = __webpack_require__(871);
var Immutable = __webpack_require__(106);

var createCharacterList = __webpack_require__(1039);
var decodeEntityRanges = __webpack_require__(1040);
var decodeInlineStyleRanges = __webpack_require__(1041);
var generateRandomKey = __webpack_require__(868);

var Map = Immutable.Map;


function convertFromRawToDraftState(rawState) {
  var blocks = rawState.blocks;
  var entityMap = rawState.entityMap;


  var fromStorageToLocal = {};
  Object.keys(entityMap).forEach(function (storageKey) {
    var encodedEntity = entityMap[storageKey];
    var type = encodedEntity.type;
    var mutability = encodedEntity.mutability;
    var data = encodedEntity.data;

    var newKey = DraftEntity.create(type, mutability, data || {});
    fromStorageToLocal[storageKey] = newKey;
  });

  var contentBlocks = blocks.map(function (block) {
    var key = block.key;
    var type = block.type;
    var text = block.text;
    var depth = block.depth;
    var inlineStyleRanges = block.inlineStyleRanges;
    var entityRanges = block.entityRanges;
    var data = block.data;

    key = key || generateRandomKey();
    depth = depth || 0;
    inlineStyleRanges = inlineStyleRanges || [];
    entityRanges = entityRanges || [];
    data = Map(data);

    var inlineStyles = decodeInlineStyleRanges(text, inlineStyleRanges);

    // Translate entity range keys to the DraftEntity map.
    var filteredEntityRanges = entityRanges.filter(function (range) {
      return fromStorageToLocal.hasOwnProperty(range.key);
    }).map(function (range) {
      return _extends({}, range, { key: fromStorageToLocal[range.key] });
    });

    var entities = decodeEntityRanges(text, filteredEntityRanges);
    var characterList = createCharacterList(inlineStyles, entities);

    return new ContentBlock({ key: key, type: type, text: text, depth: depth, characterList: characterList, data: data });
  });

  return ContentState.createFromBlockArray(contentBlocks);
}

module.exports = convertFromRawToDraftState;

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createCharacterList
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);
var Immutable = __webpack_require__(106);

var List = Immutable.List;


function createCharacterList(inlineStyles, entities) {
  var characterArray = inlineStyles.map(function (style, ii) {
    var entity = entities[ii];
    return CharacterMetadata.create({ style: style, entity: entity });
  });
  return List(characterArray);
}

module.exports = createCharacterList;

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule decodeEntityRanges
 * @typechecks
 * 
 */



var UnicodeUtils = __webpack_require__(874);

var substr = UnicodeUtils.substr;

/**
 * Convert to native JavaScript string lengths to determine ranges.
 */

function decodeEntityRanges(text, ranges) {
  var entities = Array(text.length).fill(null);
  if (ranges) {
    ranges.forEach(function (range) {
      // Using Unicode-enabled substrings converted to JavaScript lengths,
      // fill the output array with entity keys.
      var start = substr(text, 0, range.offset).length;
      var end = start + substr(text, range.offset, range.length).length;
      for (var ii = start; ii < end; ii++) {
        entities[ii] = range.key;
      }
    });
  }
  return entities;
}

module.exports = decodeEntityRanges;

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule decodeInlineStyleRanges
 * @typechecks
 * 
 */



var UnicodeUtils = __webpack_require__(874);

var _require = __webpack_require__(106);

var OrderedSet = _require.OrderedSet;
var substr = UnicodeUtils.substr;


var EMPTY_SET = OrderedSet();

/**
 * Convert to native JavaScript string lengths to determine ranges.
 */
function decodeInlineStyleRanges(text, ranges) {
  var styles = Array(text.length).fill(EMPTY_SET);
  if (ranges) {
    ranges.forEach(function ( /*object*/range) {
      var cursor = substr(text, 0, range.offset).length;
      var end = cursor + substr(text, range.offset, range.length).length;
      while (cursor < end) {
        styles[cursor] = styles[cursor].add(range.style);
        cursor++;
      }
    });
  }
  return styles;
}

module.exports = decodeInlineStyleRanges;

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnBeforeInput
 * 
 */



var BlockTree = __webpack_require__(929);
var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var UserAgent = __webpack_require__(869);

var getEntityKeyForSelection = __webpack_require__(900);
var isSelectionAtLeafStart = __webpack_require__(945);
var nullthrows = __webpack_require__(866);

var isEventHandled = __webpack_require__(889);

// When nothing is focused, Firefox regards two characters, `'` and `/`, as
// commands that should open and focus the "quickfind" search bar. This should
// *never* happen while a contenteditable is focused, but as of v28, it
// sometimes does, even when the keypress event target is the contenteditable.
// This breaks the input. Special case these characters to ensure that when
// they are typed, we prevent default on the event to make sure not to
// trigger quickfind.
var FF_QUICKFIND_CHAR = '\'';
var FF_QUICKFIND_LINK_CHAR = '\/';
var isFirefox = UserAgent.isBrowser('Firefox');

function mustPreventDefaultForCharacter(character) {
  return isFirefox && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
}

/**
 * Replace the current selection with the specified text string, with the
 * inline style and entity key applied to the newly inserted text.
 */
function replaceText(editorState, text, inlineStyle, entityKey) {
  var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
  return EditorState.push(editorState, contentState, 'insert-characters');
}

/**
 * When `onBeforeInput` executes, the browser is attempting to insert a
 * character into the editor. Apply this character data to the document,
 * allowing native insertion if possible.
 *
 * Native insertion is encouraged in order to limit re-rendering and to
 * preserve spellcheck highlighting, which disappears or flashes if re-render
 * occurs on the relevant text nodes.
 */
function editOnBeforeInput(e) {
  var chars = e.data;

  // In some cases (ex: IE ideographic space insertion) no character data
  // is provided. There's nothing to do when this happens.
  if (!chars) {
    return;
  }

  // Allow the top-level component to handle the insertion manually. This is
  // useful when triggering interesting behaviors for a character insertion,
  // Simple examples: replacing a raw text ':)' with a smile emoji or image
  // decorator, or setting a block to be a list item after typing '- ' at the
  // start of the block.
  if (this.props.handleBeforeInput && isEventHandled(this.props.handleBeforeInput(chars))) {
    e.preventDefault();
    return;
  }

  // If selection is collapsed, conditionally allow native behavior. This
  // reduces re-renders and preserves spellcheck highlighting. If the selection
  // is not collapsed, we will re-render.
  var editorState = this.props.editorState;
  var selection = editorState.getSelection();

  if (!selection.isCollapsed()) {
    e.preventDefault();
    this.update(replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())));
    return;
  }

  var mayAllowNative = !isSelectionAtLeafStart(editorState);
  var newEditorState = replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection()));

  if (!mayAllowNative) {
    e.preventDefault();
    this.update(newEditorState);
    return;
  }

  var anchorKey = selection.getAnchorKey();
  var anchorTree = editorState.getBlockTree(anchorKey);

  // Check the old and new "fingerprints" of the current block to determine
  // whether this insertion requires any addition or removal of text nodes,
  // in which case we would prevent the native character insertion.
  var originalFingerprint = BlockTree.getFingerprint(anchorTree);
  var newFingerprint = BlockTree.getFingerprint(newEditorState.getBlockTree(anchorKey));

  if (mustPreventDefaultForCharacter(chars) || originalFingerprint !== newFingerprint || nullthrows(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows(editorState.getDirectionMap()).get(anchorKey)) {
    e.preventDefault();
  } else {
    // The native event is allowed to occur.
    newEditorState = EditorState.set(newEditorState, {
      nativelyRenderedContent: newEditorState.getCurrentContent()
    });
  }

  this.update(newEditorState);
}

module.exports = editOnBeforeInput;

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnBlur
 * 
 */



var EditorState = __webpack_require__(862);
var UserAgent = __webpack_require__(869);

var getActiveElement = __webpack_require__(959);

var isWebKit = UserAgent.isEngine('WebKit');

function editOnBlur(e) {
  // Webkit has a bug in which blurring a contenteditable by clicking on
  // other active elements will trigger the `blur` event but will not remove
  // the DOM selection from the contenteditable. We therefore force the
  // issue to be certain, checking whether the active element is `body`
  // to force it when blurring occurs within the window (as opposed to
  // clicking to another tab or window).
  if (isWebKit && getActiveElement() === document.body) {
    global.getSelection().removeAllRanges();
  }

  var editorState = this.props.editorState;
  var currentSelection = editorState.getSelection();
  if (!currentSelection.getHasFocus()) {
    return;
  }

  var selection = currentSelection.set('hasFocus', false);
  this.props.onBlur && this.props.onBlur(e);
  this.update(EditorState.acceptSelection(editorState, selection));
}

module.exports = editOnBlur;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnCompositionStart
 * 
 */



var EditorState = __webpack_require__(862);

/**
 * The user has begun using an IME input system. Switching to `composite` mode
 * allows handling composition input and disables other edit behavior.
 */
function editOnCompositionStart() {
  this.setRenderGuard();
  this.setMode('composite');
  this.update(EditorState.set(this.props.editorState, { inCompositionMode: true }));
}

module.exports = editOnCompositionStart;

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnCopy
 * 
 */



var getFragmentFromSelection = __webpack_require__(938);

/**
 * If we have a selection, create a ContentState fragment and store
 * it in our internal clipboard. Subsequent paste events will use this
 * fragment if no external clipboard data is supplied.
 */
function editOnCopy(e) {
  var editorState = this.props.editorState;
  var selection = editorState.getSelection();

  // No selection, so there's nothing to copy.
  if (selection.isCollapsed()) {
    e.preventDefault();
    return;
  }

  this.setClipboard(getFragmentFromSelection(this.props.editorState));
}

module.exports = editOnCopy;

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnCut
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var Style = __webpack_require__(905);

var getFragmentFromSelection = __webpack_require__(938);
var getScrollPosition = __webpack_require__(907);

/**
 * On `cut` events, native behavior is allowed to occur so that the system
 * clipboard is set properly. This means that we need to take steps to recover
 * the editor DOM state after the `cut` has occurred in order to maintain
 * control of the component.
 *
 * In addition, we can keep a copy of the removed fragment, including all
 * styles and entities, for use as an internal paste.
 */
function editOnCut(e) {
  var _this = this;

  var editorState = this.props.editorState;
  var selection = editorState.getSelection();

  // No selection, so there's nothing to cut.
  if (selection.isCollapsed()) {
    e.preventDefault();
    return;
  }

  // Track the current scroll position so that it can be forced back in place
  // after the editor regains control of the DOM.
  var scrollParent = Style.getScrollParent(e.target);

  var _getScrollPosition = getScrollPosition(scrollParent);

  var x = _getScrollPosition.x;
  var y = _getScrollPosition.y;


  var fragment = getFragmentFromSelection(editorState);
  this.setClipboard(fragment);

  // Set `cut` mode to disable all event handling temporarily.
  this.setRenderGuard();
  this.setMode('cut');

  // Let native `cut` behavior occur, then recover control.
  setTimeout(function () {
    _this.restoreEditorDOM({ x: x, y: y });
    _this.removeRenderGuard();
    _this.exitCurrentMode();
    _this.update(removeFragment(editorState));
  }, 0);
}

function removeFragment(editorState) {
  var newContent = DraftModifier.removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'forward');
  return EditorState.push(editorState, newContent, 'remove-range');
}

module.exports = editOnCut;

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnDragOver
 * 
 */



/**
 * Drag behavior has begun from outside the editor element.
 */

function editOnDragOver(e) {
  this._internalDrag = false;
  this.setMode('drag');
  e.preventDefault();
}

module.exports = editOnDragOver;

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnDragStart
 * 
 */



/**
 * A `dragstart` event has begun within the text editor component.
 */

function editOnDragStart() {
  this._internalDrag = true;
  this.setMode('drag');
}

module.exports = editOnDragStart;

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnFocus
 * 
 */



var EditorState = __webpack_require__(862);

function editOnFocus(e) {
  var editorState = this.props.editorState;
  var currentSelection = editorState.getSelection();
  if (currentSelection.getHasFocus()) {
    return;
  }

  var selection = currentSelection.set('hasFocus', true);
  this.props.onFocus && this.props.onFocus(e);

  // When the tab containing this text editor is hidden and the user does a
  // find-in-page in a _different_ tab, Chrome on Mac likes to forget what the
  // selection was right after sending this focus event and (if you let it)
  // moves the cursor back to the beginning of the editor, so we force the
  // selection here instead of simply accepting it in order to preserve the
  // old cursor position. See https://crbug.com/540004.
  this.update(EditorState.forceSelection(editorState, selection));
}

module.exports = editOnFocus;

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnInput
 * 
 */



var DraftModifier = __webpack_require__(865);
var DraftOffsetKey = __webpack_require__(886);
var EditorState = __webpack_require__(862);
var Entity = __webpack_require__(871);
var UserAgent = __webpack_require__(869);

var findAncestorOffsetKey = __webpack_require__(899);
var nullthrows = __webpack_require__(866);

var isGecko = UserAgent.isEngine('Gecko');

var DOUBLE_NEWLINE = '\n\n';

/**
 * This function is intended to handle spellcheck and autocorrect changes,
 * which occur in the DOM natively without any opportunity to observe or
 * interpret the changes before they occur.
 *
 * The `input` event fires in contentEditable elements reliably for non-IE
 * browsers, immediately after changes occur to the editor DOM. Since our other
 * handlers override or otherwise handle cover other varieties of text input,
 * the DOM state should match the model in all controlled input cases. Thus,
 * when an `input` change leads to a DOM/model mismatch, the change should be
 * due to a spellcheck change, and we can incorporate it into our model.
 */
function editOnInput() {
  var domSelection = global.getSelection();

  var anchorNode = domSelection.anchorNode;
  var isCollapsed = domSelection.isCollapsed;

  if (anchorNode.nodeType !== Node.TEXT_NODE) {
    return;
  }

  var domText = anchorNode.textContent;
  var editorState = this.props.editorState;

  var offsetKey = nullthrows(findAncestorOffsetKey(anchorNode));

  var _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey);

  var blockKey = _DraftOffsetKey$decod.blockKey;
  var decoratorKey = _DraftOffsetKey$decod.decoratorKey;
  var leafKey = _DraftOffsetKey$decod.leafKey;

  var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);

  var start = _editorState$getBlock.start;
  var end = _editorState$getBlock.end;


  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var modelText = block.getText().slice(start, end);

  // Special-case soft newlines here. If the DOM text ends in a soft newline,
  // we will have manually inserted an extra soft newline in DraftEditorLeaf.
  // We want to remove this extra newline for the purpose of our comparison
  // of DOM and model text.
  if (domText.endsWith(DOUBLE_NEWLINE)) {
    domText = domText.slice(0, -1);
  }

  // No change -- the DOM is up to date. Nothing to do here.
  if (domText === modelText) {
    return;
  }

  var selection = editorState.getSelection();

  // We'll replace the entire leaf with the text content of the target.
  var targetRange = selection.merge({
    anchorOffset: start,
    focusOffset: end,
    isBackward: false
  });

  var entityKey = block.getEntityAt(start);
  var entity = entityKey && Entity.get(entityKey);
  var entityType = entity && entity.getMutability();
  var preserveEntity = entityType === 'MUTABLE';

  // Immutable or segmented entities cannot properly be handled by the
  // default browser undo, so we have to use a different change type to
  // force using our internal undo method instead of falling through to the
  // native browser undo.
  var changeType = preserveEntity ? 'spellcheck-change' : 'apply-entity';

  var newContent = DraftModifier.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);

  var anchorOffset, focusOffset, startOffset, endOffset;

  if (isGecko) {
    // Firefox selection does not change while the context menu is open, so
    // we preserve the anchor and focus values of the DOM selection.
    anchorOffset = domSelection.anchorOffset;
    focusOffset = domSelection.focusOffset;
    startOffset = start + Math.min(anchorOffset, focusOffset);
    endOffset = startOffset + Math.abs(anchorOffset - focusOffset);
    anchorOffset = startOffset;
    focusOffset = endOffset;
  } else {
    // Browsers other than Firefox may adjust DOM selection while the context
    // menu is open, and Safari autocorrect is prone to providing an inaccurate
    // DOM selection. Don't trust it. Instead, use our existing SelectionState
    // and adjust it based on the number of characters changed during the
    // mutation.
    var charDelta = domText.length - modelText.length;
    startOffset = selection.getStartOffset();
    endOffset = selection.getEndOffset();

    anchorOffset = isCollapsed ? endOffset + charDelta : startOffset;
    focusOffset = endOffset + charDelta;
  }

  // Segmented entities are completely or partially removed when their
  // text content changes. For this case we do not want any text to be selected
  // after the change, so we are not merging the selection.
  var contentWithAdjustedDOMSelection = newContent.merge({
    selectionBefore: content.getSelectionAfter(),
    selectionAfter: selection.merge({ anchorOffset: anchorOffset, focusOffset: focusOffset })
  });

  this.update(EditorState.push(editorState, contentWithAdjustedDOMSelection, changeType));
}

module.exports = editOnInput;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnKeyDown
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);
var KeyBindingUtil = __webpack_require__(898);
var Keys = __webpack_require__(904);
var SecondaryClipboard = __webpack_require__(1033);
var UserAgent = __webpack_require__(869);

var keyCommandBackspaceToStartOfLine = __webpack_require__(1064);
var keyCommandBackspaceWord = __webpack_require__(1065);
var keyCommandDeleteWord = __webpack_require__(1066);
var keyCommandInsertNewline = __webpack_require__(1067);
var keyCommandPlainBackspace = __webpack_require__(1070);
var keyCommandPlainDelete = __webpack_require__(1071);
var keyCommandMoveSelectionToEndOfBlock = __webpack_require__(1068);
var keyCommandMoveSelectionToStartOfBlock = __webpack_require__(1069);
var keyCommandTransposeCharacters = __webpack_require__(1072);
var keyCommandUndo = __webpack_require__(1073);

var isEventHandled = __webpack_require__(889);

var isOptionKeyCommand = KeyBindingUtil.isOptionKeyCommand;

var isChrome = UserAgent.isBrowser('Chrome');

/**
 * Map a `DraftEditorCommand` command value to a corresponding function.
 */
function onKeyCommand(command, editorState) {
  switch (command) {
    case 'redo':
      return EditorState.redo(editorState);
    case 'delete':
      return keyCommandPlainDelete(editorState);
    case 'delete-word':
      return keyCommandDeleteWord(editorState);
    case 'backspace':
      return keyCommandPlainBackspace(editorState);
    case 'backspace-word':
      return keyCommandBackspaceWord(editorState);
    case 'backspace-to-start-of-line':
      return keyCommandBackspaceToStartOfLine(editorState);
    case 'split-block':
      return keyCommandInsertNewline(editorState);
    case 'transpose-characters':
      return keyCommandTransposeCharacters(editorState);
    case 'move-selection-to-start-of-block':
      return keyCommandMoveSelectionToStartOfBlock(editorState);
    case 'move-selection-to-end-of-block':
      return keyCommandMoveSelectionToEndOfBlock(editorState);
    case 'secondary-cut':
      return SecondaryClipboard.cut(editorState);
    case 'secondary-paste':
      return SecondaryClipboard.paste(editorState);
    default:
      return editorState;
  }
}

/**
 * Intercept keydown behavior to handle keys and commands manually, if desired.
 *
 * Keydown combinations may be mapped to `DraftCommand` values, which may
 * correspond to command functions that modify the editor or its contents.
 *
 * See `getDefaultKeyBinding` for defaults. Alternatively, the top-level
 * component may provide a custom mapping via the `keyBindingFn` prop.
 */
function editOnKeyDown(e) {
  var keyCode = e.which;
  var editorState = this.props.editorState;

  switch (keyCode) {
    case Keys.RETURN:
      e.preventDefault();
      // The top-level component may manually handle newline insertion. If
      // no special handling is performed, fall through to command handling.
      if (this.props.handleReturn && isEventHandled(this.props.handleReturn(e))) {
        return;
      }
      break;
    case Keys.ESC:
      e.preventDefault();
      this.props.onEscape && this.props.onEscape(e);
      return;
    case Keys.TAB:
      this.props.onTab && this.props.onTab(e);
      return;
    case Keys.UP:
      this.props.onUpArrow && this.props.onUpArrow(e);
      return;
    case Keys.DOWN:
      this.props.onDownArrow && this.props.onDownArrow(e);
      return;
    case Keys.SPACE:
      // Handling for OSX where option + space scrolls.
      if (isChrome && isOptionKeyCommand(e)) {
        e.preventDefault();
        // Insert a nbsp into the editor.
        var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), ' ');
        this.update(EditorState.push(editorState, contentState, 'insert-characters'));
        return;
      }
  }

  var command = this.props.keyBindingFn(e);

  // If no command is specified, allow keydown event to continue.
  if (!command) {
    return;
  }

  if (command === 'undo') {
    // Since undo requires some special updating behavior to keep the editor
    // in sync, handle it separately.
    keyCommandUndo(e, editorState, this.update);
    return;
  }

  // At this point, we know that we're handling a command of some kind, so
  // we don't want to insert a character following the keydown.
  e.preventDefault();

  // Allow components higher up the tree to handle the command first.
  if (this.props.handleKeyCommand && isEventHandled(this.props.handleKeyCommand(command))) {
    return;
  }

  var newState = onKeyCommand(command, editorState);
  if (newState !== editorState) {
    this.update(newState);
  }
}

module.exports = editOnKeyDown;

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnPaste
 * 
 */



var BlockMapBuilder = __webpack_require__(880);
var CharacterMetadata = __webpack_require__(867);
var DataTransfer = __webpack_require__(950);
var DraftModifier = __webpack_require__(865);
var DraftPasteProcessor = __webpack_require__(1030);
var EditorState = __webpack_require__(862);

var getEntityKeyForSelection = __webpack_require__(900);
var getTextContentFromFiles = __webpack_require__(942);
var splitTextIntoTextBlocks = __webpack_require__(1078);

var isEventHandled = __webpack_require__(889);

/**
 * Paste content.
 */
function editOnPaste(e) {
  var _this = this;

  e.preventDefault();
  var data = new DataTransfer(e.clipboardData);

  // Get files, unless this is likely to be a string the user wants inline.
  if (!data.isRichText()) {
    var files = data.getFiles();
    var defaultFileText = data.getText();
    if (files.length > 0) {
      // Allow customized paste handling for images, etc. Otherwise, fall
      // through to insert text contents into the editor.
      if (this.props.handlePastedFiles && isEventHandled(this.props.handlePastedFiles(files))) {
        return;
      }

      getTextContentFromFiles(files, function ( /*string*/fileText) {
        fileText = fileText || defaultFileText;
        if (!fileText) {
          return;
        }

        var editorState = _this.props.editorState;

        var blocks = splitTextIntoTextBlocks(fileText);
        var character = CharacterMetadata.create({
          style: editorState.getCurrentInlineStyle(),
          entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
        });

        var text = DraftPasteProcessor.processText(blocks, character);
        var fragment = BlockMapBuilder.createFromArray(text);

        var withInsertedText = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);

        _this.update(EditorState.push(editorState, withInsertedText, 'insert-fragment'));
      });

      return;
    }
  }

  var textBlocks = [];
  var text = data.getText();
  var html = data.getHTML();

  if (this.props.handlePastedText && isEventHandled(this.props.handlePastedText(text, html))) {
    return;
  }

  if (text) {
    textBlocks = splitTextIntoTextBlocks(text);
  }

  if (!this.props.stripPastedStyles) {
    // If the text from the paste event is rich content that matches what we
    // already have on the internal clipboard, assume that we should just use
    // the clipboard fragment for the paste. This will allow us to preserve
    // styling and entities, if any are present. Note that newlines are
    // stripped during comparison -- this is because copy/paste within the
    // editor in Firefox and IE will not include empty lines. The resulting
    // paste will preserve the newlines correctly.
    var internalClipboard = this.getClipboard();
    if (data.isRichText() && internalClipboard) {
      if (
      // If the editorKey is present in the pasted HTML, it should be safe to
      // assume this is an internal paste.
      html.indexOf(this.getEditorKey()) !== -1 ||
      // The copy may have been made within a single block, in which case the
      // editor key won't be part of the paste. In this case, just check
      // whether the pasted text matches the internal clipboard.
      textBlocks.length === 1 && internalClipboard.size === 1 && internalClipboard.first().getText() === text) {
        this.update(insertFragment(this.props.editorState, internalClipboard));
        return;
      }
    } else if (internalClipboard && data.types.includes('com.apple.webarchive') && !data.types.includes('text/html') && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) {
      // Safari does not properly store text/html in some cases.
      // Use the internalClipboard if present and equal to what is on
      // the clipboard. See https://bugs.webkit.org/show_bug.cgi?id=19893.
      this.update(insertFragment(this.props.editorState, internalClipboard));
      return;
    }

    // If there is html paste data, try to parse that.
    if (html) {
      var htmlFragment = DraftPasteProcessor.processHTML(html, this.props.blockRenderMap);
      if (htmlFragment) {
        var htmlMap = BlockMapBuilder.createFromArray(htmlFragment);
        this.update(insertFragment(this.props.editorState, htmlMap));
        return;
      }
    }

    // Otherwise, create a new fragment from our pasted text. Also
    // empty the internal clipboard, since it's no longer valid.
    this.setClipboard(null);
  }

  if (textBlocks) {
    var editorState = this.props.editorState;

    var character = CharacterMetadata.create({
      style: editorState.getCurrentInlineStyle(),
      entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
    });

    var textFragment = DraftPasteProcessor.processText(textBlocks, character);

    var textMap = BlockMapBuilder.createFromArray(textFragment);
    this.update(insertFragment(this.props.editorState, textMap));
  }
}

function insertFragment(editorState, fragment) {
  var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
  return EditorState.push(editorState, newContent, 'insert-fragment');
}

function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
  return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function (block, ii) {
    return block.getText() === textBlocks[ii];
  });
}

module.exports = editOnPaste;

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnSelect
 * 
 */



var EditorState = __webpack_require__(862);
var ReactDOM = __webpack_require__(73);

var getDraftEditorSelection = __webpack_require__(1058);

function editOnSelect() {
  if (this._blockSelectEvents) {
    return;
  }

  var editorState = this.props.editorState;
  var documentSelection = getDraftEditorSelection(editorState, ReactDOM.findDOMNode(this.refs.editorContainer).firstChild);
  var updatedSelectionState = documentSelection.selectionState;

  if (updatedSelectionState !== editorState.getSelection()) {
    if (documentSelection.needsRecovery) {
      editorState = EditorState.forceSelection(editorState, updatedSelectionState);
    } else {
      editorState = EditorState.acceptSelection(editorState, updatedSelectionState);
    }
    this.update(editorState);
  }
}

module.exports = editOnSelect;

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule encodeEntityRanges
 * @typechecks
 * 
 */



var DraftStringKey = __webpack_require__(934);
var UnicodeUtils = __webpack_require__(874);

var strlen = UnicodeUtils.strlen;

/**
 * Convert to UTF-8 character counts for storage.
 */

function encodeEntityRanges(block, storageMap) {
  var encoded = [];
  block.findEntityRanges(function (character) {
    return !!character.getEntity();
  }, function ( /*number*/start, /*number*/end) {
    var text = block.getText();
    var key = block.getEntityAt(start);
    encoded.push({
      offset: strlen(text.slice(0, start)),
      length: strlen(text.slice(start, end)),
      // Encode the key as a number for range storage.
      key: Number(storageMap[DraftStringKey.stringify(key)])
    });
  });
  return encoded;
}

module.exports = encodeEntityRanges;

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule encodeInlineStyleRanges
 * 
 */



var UnicodeUtils = __webpack_require__(874);

var findRangesImmutable = __webpack_require__(887);

var areEqual = function areEqual(a, b) {
  return a === b;
};
var isTruthy = function isTruthy(a) {
  return !!a;
};
var EMPTY_ARRAY = [];

/**
 * Helper function for getting encoded styles for each inline style. Convert
 * to UTF-8 character counts for storage.
 */
function getEncodedInlinesForType(block, styleList, styleToEncode) {
  var ranges = [];

  // Obtain an array with ranges for only the specified style.
  var filteredInlines = styleList.map(function (style) {
    return style.has(styleToEncode);
  }).toList();

  findRangesImmutable(filteredInlines, areEqual,
  // We only want to keep ranges with nonzero style values.
  isTruthy, function (start, end) {
    var text = block.getText();
    ranges.push({
      offset: UnicodeUtils.strlen(text.slice(0, start)),
      length: UnicodeUtils.strlen(text.slice(start, end)),
      style: styleToEncode
    });
  });

  return ranges;
}

/*
 * Retrieve the encoded arrays of inline styles, with each individual style
 * treated separately.
 */
function encodeInlineStyleRanges(block) {
  var styleList = block.getCharacterList().map(function (c) {
    return c.getStyle();
  }).toList();
  var ranges = styleList.flatten().toSet().map(function (style) {
    return getEncodedInlinesForType(block, styleList, style);
  });

  return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
}

module.exports = encodeInlineStyleRanges;

/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule expandRangeToStartOfLine
 * @typechecks
 * 
 */

var UnicodeUtils = __webpack_require__(874);

var getRangeClientRects = __webpack_require__(939);
var invariant = __webpack_require__(864);

/**
 * Return the computed line height, in pixels, for the provided element.
 */
function getLineHeightPx(element) {
  var computed = getComputedStyle(element);
  var div = document.createElement('div');
  div.style.fontFamily = computed.fontFamily;
  div.style.fontSize = computed.fontSize;
  div.style.fontStyle = computed.fontStyle;
  div.style.fontWeight = computed.fontWeight;
  div.style.lineHeight = computed.lineHeight;
  div.style.position = 'absolute';
  div.textContent = 'M';

  // forced layout here
  document.body.appendChild(div);
  var rect = div.getBoundingClientRect();
  document.body.removeChild(div);

  return rect.height;
}

/**
 * Return whether every ClientRect in the provided list lies on the same line.
 *
 * We assume that the rects on the same line all contain the baseline, so the
 * lowest top line needs to be above the highest bottom line (i.e., if you were
 * to project the rects onto the y-axis, their intersection would be nonempty).
 *
 * In addition, we require that no two boxes are lineHeight (or more) apart at
 * either top or bottom, which helps protect against false positives for fonts
 * with extremely large glyph heights (e.g., with a font size of 17px, Zapfino
 * produces rects of height 58px!).
 */
function areRectsOnOneLine(rects, lineHeight) {
  var minTop = Infinity;
  var minBottom = Infinity;
  var maxTop = -Infinity;
  var maxBottom = -Infinity;

  for (var ii = 0; ii < rects.length; ii++) {
    var rect = rects[ii];
    if (rect.width === 0 || rect.width === 1) {
      // When a range starts or ends a soft wrap, many browsers (Chrome, IE,
      // Safari) include an empty rect on the previous or next line. When the
      // text lies in a container whose position is not integral (e.g., from
      // margin: auto), Safari makes these empty rects have width 1 (instead of
      // 0). Having one-pixel-wide characters seems unlikely (and most browsers
      // report widths in subpixel precision anyway) so it's relatively safe to
      // skip over them.
      continue;
    }
    minTop = Math.min(minTop, rect.top);
    minBottom = Math.min(minBottom, rect.bottom);
    maxTop = Math.max(maxTop, rect.top);
    maxBottom = Math.max(maxBottom, rect.bottom);
  }

  return maxTop <= minBottom && maxTop - minTop < lineHeight && maxBottom - minBottom < lineHeight;
}

/**
 * Return the length of a node, as used by Range offsets.
 */
function getNodeLength(node) {
  // http://www.w3.org/TR/dom/#concept-node-length
  switch (node.nodeType) {
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    case Node.TEXT_NODE:
    case Node.PROCESSING_INSTRUCTION_NODE:
    case Node.COMMENT_NODE:
      return node.length;
    default:
      return node.childNodes.length;
  }
}

/**
 * Given a collapsed range, move the start position backwards as far as
 * possible while the range still spans only a single line.
 */
function expandRangeToStartOfLine(range) {
  !range.collapsed ?  true ? invariant(false, 'expandRangeToStartOfLine: Provided range is not collapsed.') : invariant(false) : void 0;
  range = range.cloneRange();

  var containingElement = range.startContainer;
  if (containingElement.nodeType !== 1) {
    containingElement = containingElement.parentNode;
  }
  var lineHeight = getLineHeightPx(containingElement);

  // Imagine our text looks like:
  //   <div><span>once upon a time, there was a <em>boy
  //   who lived</em> </span><q><strong>under^ the
  //   stairs</strong> in a small closet.</q></div>
  // where the caret represents the cursor. First, we crawl up the tree until
  // the range spans multiple lines (setting the start point to before
  // "<strong>", then before "<div>"), then at each level we do a search to
  // find the latest point which is still on a previous line. We'll find that
  // the break point is inside the span, then inside the <em>, then in its text
  // node child, the actual break point before "who".

  var bestContainer = range.endContainer;
  var bestOffset = range.endOffset;
  range.setStart(range.startContainer, 0);

  while (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
    bestContainer = range.startContainer;
    bestOffset = range.startOffset;
    !bestContainer.parentNode ?  true ? invariant(false, 'Found unexpected detached subtree when traversing.') : invariant(false) : void 0;
    range.setStartBefore(bestContainer);
    if (bestContainer.nodeType === 1 && getComputedStyle(bestContainer).display !== 'inline') {
      // The start of the line is never in a different block-level container.
      break;
    }
  }

  // In the above example, range now spans from "<div>" to "under",
  // bestContainer is <div>, and bestOffset is 1 (index of <q> inside <div>)].
  // Picking out which child to recurse into here is a special case since we
  // don't want to check past <q> -- once we find that the final range starts
  // in <span>, we can look at all of its children (and all of their children)
  // to find the break point.

  // At all times, (bestContainer, bestOffset) is the latest single-line start
  // point that we know of.
  var currentContainer = bestContainer;
  var maxIndexToConsider = bestOffset - 1;

  do {
    var nodeValue = currentContainer.nodeValue;

    for (var ii = maxIndexToConsider; ii >= 0; ii--) {
      if (nodeValue != null && ii > 0 && UnicodeUtils.isSurrogatePair(nodeValue, ii - 1)) {
        // We're in the middle of a surrogate pair -- skip over so we never
        // return a range with an endpoint in the middle of a code point.
        continue;
      }

      range.setStart(currentContainer, ii);
      if (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
        bestContainer = currentContainer;
        bestOffset = ii;
      } else {
        break;
      }
    }

    if (ii === -1 || currentContainer.childNodes.length === 0) {
      // If ii === -1, then (bestContainer, bestOffset), which is equal to
      // (currentContainer, 0), was a single-line start point but a start
      // point before currentContainer wasn't, so the line break seems to
      // have occurred immediately after currentContainer's start tag
      //
      // If currentContainer.childNodes.length === 0, we're already at a
      // terminal node (e.g., text node) and should return our current best.
      break;
    }

    currentContainer = currentContainer.childNodes[ii];
    maxIndexToConsider = getNodeLength(currentContainer);
  } while (true);

  range.setStart(bestContainer, bestOffset);
  return range;
}

module.exports = expandRangeToStartOfLine;

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getCharacterRemovalRange
 * @typechecks
 * 
 */



var DraftEntity = __webpack_require__(871);
var DraftEntitySegments = __webpack_require__(1029);

var getRangesForDraftEntity = __webpack_require__(1060);
var invariant = __webpack_require__(864);

/**
 * Given a SelectionState and a removal direction, determine the entire range
 * that should be removed from a ContentState. This is based on any entities
 * within the target, with their `mutability` values taken into account.
 *
 * For instance, if we are attempting to remove part of an "immutable" entity
 * range, the entire entity must be removed. The returned `SelectionState`
 * will be adjusted accordingly.
 */
function getCharacterRemovalRange(block, selectionState, direction) {
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  var entityKey = block.getEntityAt(start);
  if (!entityKey) {
    return selectionState;
  }

  var entity = DraftEntity.get(entityKey);
  var mutability = entity.getMutability();

  // `MUTABLE` entities can just have the specified range of text removed
  // directly. No adjustments are needed.
  if (mutability === 'MUTABLE') {
    return selectionState;
  }

  // Find the entity range that overlaps with our removal range.
  var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function (range) {
    return start < range.end && end > range.start;
  });

  !(entityRanges.length == 1) ?  true ? invariant(false, 'There should only be one entity range within this removal range.') : invariant(false) : void 0;

  var entityRange = entityRanges[0];

  // For `IMMUTABLE` entity types, we will remove the entire entity range.
  if (mutability === 'IMMUTABLE') {
    return selectionState.merge({
      anchorOffset: entityRange.start,
      focusOffset: entityRange.end,
      isBackward: false
    });
  }

  // For `SEGMENTED` entity types, determine the appropriate segment to
  // remove.
  var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);

  return selectionState.merge({
    anchorOffset: removalRange.start,
    focusOffset: removalRange.end,
    isBackward: false
  });
}

module.exports = getCharacterRemovalRange;

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getDraftEditorSelection
 * @typechecks
 * 
 */



var getDraftEditorSelectionWithNodes = __webpack_require__(937);

/**
 * Convert the current selection range to an anchor/focus pair of offset keys
 * and values that can be interpreted by components.
 */
function getDraftEditorSelection(editorState, root) {
  var selection = global.getSelection();

  // No active selection.
  if (selection.rangeCount === 0) {
    return {
      selectionState: editorState.getSelection().set('hasFocus', false),
      needsRecovery: false
    };
  }

  return getDraftEditorSelectionWithNodes(editorState, root, selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
}

module.exports = getDraftEditorSelection;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getRangeBoundingClientRect
 * @typechecks
 * 
 */



var getRangeClientRects = __webpack_require__(939);

/**
 * Like range.getBoundingClientRect() but normalizes for browser bugs.
 */
function getRangeBoundingClientRect(range) {
  // "Return a DOMRect object describing the smallest rectangle that includes
  // the first rectangle in list and all of the remaining rectangles of which
  // the height or width is not zero."
  // http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
  var rects = getRangeClientRects(range);
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;

  if (rects.length) {
    var _rects$ = rects[0];
    top = _rects$.top;
    right = _rects$.right;
    bottom = _rects$.bottom;
    left = _rects$.left;

    for (var ii = 1; ii < rects.length; ii++) {
      var rect = rects[ii];
      if (rect.height !== 0 || rect.width !== 0) {
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
        left = Math.min(left, rect.left);
      }
    }
  }

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: right - left,
    height: bottom - top
  };
}

module.exports = getRangeBoundingClientRect;

/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getRangesForDraftEntity
 * @typechecks
 * 
 */



var invariant = __webpack_require__(864);

/**
 * Obtain the start and end positions of the range that has the
 * specified entity applied to it.
 *
 * Entity keys are applied only to contiguous stretches of text, so this
 * method searches for the first instance of the entity key and returns
 * the subsequent range.
 */
function getRangesForDraftEntity(block, key) {
  var ranges = [];
  block.findEntityRanges(function (c) {
    return c.getEntity() === key;
  }, function (start, end) {
    ranges.push({ start: start, end: end });
  });

  !!!ranges.length ?  true ? invariant(false, 'Entity key not found in this range.') : invariant(false) : void 0;

  return ranges;
}

module.exports = getRangesForDraftEntity;

/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVisibleSelectionRect
 * @typechecks
 * 
 */



var getRangeBoundingClientRect = __webpack_require__(1059);

/**
 * Return the bounding ClientRect for the visible DOM selection, if any.
 * In cases where there are no selected ranges or the bounding rect is
 * temporarily invalid, return null.
 */
function getVisibleSelectionRect(global) {
  var selection = global.getSelection();
  if (!selection.rangeCount) {
    return null;
  }

  var range = selection.getRangeAt(0);
  var boundingRect = getRangeBoundingClientRect(range);
  var top = boundingRect.top;
  var right = boundingRect.right;
  var bottom = boundingRect.bottom;
  var left = boundingRect.left;

  // When a re-render leads to a node being removed, the DOM selection will
  // temporarily be placed on an ancestor node, which leads to an invalid
  // bounding rect. Discard this state.

  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
    return null;
  }

  return boundingRect;
}

module.exports = getVisibleSelectionRect;

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule insertFragmentIntoContentState
 * @typechecks
 * 
 */



var BlockMapBuilder = __webpack_require__(880);

var generateRandomKey = __webpack_require__(868);
var insertIntoList = __webpack_require__(944);
var invariant = __webpack_require__(864);

function insertFragmentIntoContentState(contentState, selectionState, fragment) {
  !selectionState.isCollapsed() ?  true ? invariant(false, '`insertFragment` should only be called with a collapsed selection state.') : invariant(false) : void 0;

  var targetKey = selectionState.getStartKey();
  var targetOffset = selectionState.getStartOffset();

  var blockMap = contentState.getBlockMap();

  var fragmentSize = fragment.size;
  var finalKey;
  var finalOffset;

  if (fragmentSize === 1) {
    var targetBlock = blockMap.get(targetKey);
    var pastedBlock = fragment.first();
    var text = targetBlock.getText();
    var chars = targetBlock.getCharacterList();

    var newBlock = targetBlock.merge({
      text: text.slice(0, targetOffset) + pastedBlock.getText() + text.slice(targetOffset),
      characterList: insertIntoList(chars, pastedBlock.getCharacterList(), targetOffset),
      data: pastedBlock.getData()
    });

    blockMap = blockMap.set(targetKey, newBlock);

    finalKey = targetKey;
    finalOffset = targetOffset + pastedBlock.getText().length;

    return contentState.merge({
      blockMap: blockMap.set(targetKey, newBlock),
      selectionBefore: selectionState,
      selectionAfter: selectionState.merge({
        anchorKey: finalKey,
        anchorOffset: finalOffset,
        focusKey: finalKey,
        focusOffset: finalOffset,
        isBackward: false
      })
    });
  }

  var newBlockArr = [];

  contentState.getBlockMap().forEach(function (block, blockKey) {
    if (blockKey !== targetKey) {
      newBlockArr.push(block);
      return;
    }

    var text = block.getText();
    var chars = block.getCharacterList();

    // Modify head portion of block.
    var blockSize = text.length;
    var headText = text.slice(0, targetOffset);
    var headCharacters = chars.slice(0, targetOffset);
    var appendToHead = fragment.first();

    var modifiedHead = block.merge({
      text: headText + appendToHead.getText(),
      characterList: headCharacters.concat(appendToHead.getCharacterList()),
      type: headText ? block.getType() : appendToHead.getType(),
      data: appendToHead.getData()
    });

    newBlockArr.push(modifiedHead);

    // Insert fragment blocks after the head and before the tail.
    fragment.slice(1, fragmentSize - 1).forEach(function (fragmentBlock) {
      newBlockArr.push(fragmentBlock.set('key', generateRandomKey()));
    });

    // Modify tail portion of block.
    var tailText = text.slice(targetOffset, blockSize);
    var tailCharacters = chars.slice(targetOffset, blockSize);
    var prependToTail = fragment.last();
    finalKey = generateRandomKey();

    var modifiedTail = prependToTail.merge({
      key: finalKey,
      text: prependToTail.getText() + tailText,
      characterList: prependToTail.getCharacterList().concat(tailCharacters),
      data: prependToTail.getData()
    });

    newBlockArr.push(modifiedTail);
  });

  finalOffset = fragment.last().getLength();

  return contentState.merge({
    blockMap: BlockMapBuilder.createFromArray(newBlockArr),
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: finalKey,
      anchorOffset: finalOffset,
      focusKey: finalKey,
      focusOffset: finalOffset,
      isBackward: false
    })
  });
}

module.exports = insertFragmentIntoContentState;

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule insertTextIntoContentState
 * @typechecks
 * 
 */



var Immutable = __webpack_require__(106);

var insertIntoList = __webpack_require__(944);
var invariant = __webpack_require__(864);

var Repeat = Immutable.Repeat;


function insertTextIntoContentState(contentState, selectionState, text, characterMetadata) {
  !selectionState.isCollapsed() ?  true ? invariant(false, '`insertText` should only be called with a collapsed range.') : invariant(false) : void 0;

  var len = text.length;
  if (!len) {
    return contentState;
  }

  var blockMap = contentState.getBlockMap();
  var key = selectionState.getStartKey();
  var offset = selectionState.getStartOffset();
  var block = blockMap.get(key);
  var blockText = block.getText();

  var newBlock = block.merge({
    text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
    characterList: insertIntoList(block.getCharacterList(), Repeat(characterMetadata, len).toList(), offset)
  });

  var newOffset = offset + len;

  return contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: newOffset,
      focusOffset: newOffset
    })
  });
}

module.exports = insertTextIntoContentState;

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandBackspaceToStartOfLine
 * 
 */



var EditorState = __webpack_require__(862);

var expandRangeToStartOfLine = __webpack_require__(1056);
var getDraftEditorSelectionWithNodes = __webpack_require__(937);
var moveSelectionBackward = __webpack_require__(901);
var removeTextWithStrategy = __webpack_require__(881);

function keyCommandBackspaceToStartOfLine(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
    var selection = strategyState.getSelection();
    if (selection.isCollapsed() && selection.getAnchorOffset() === 0) {
      return moveSelectionBackward(strategyState, 1);
    }

    var domSelection = global.getSelection();
    var range = domSelection.getRangeAt(0);
    range = expandRangeToStartOfLine(range);

    return getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
  }, 'backward');

  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }

  return EditorState.push(editorState, afterRemoval, 'remove-range');
}

module.exports = keyCommandBackspaceToStartOfLine;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandBackspaceWord
 * 
 */



var DraftRemovableWord = __webpack_require__(933);
var EditorState = __webpack_require__(862);

var moveSelectionBackward = __webpack_require__(901);
var removeTextWithStrategy = __webpack_require__(881);

/**
 * Delete the word that is left of the cursor, as well as any spaces or
 * punctuation after the word.
 */
function keyCommandBackspaceWord(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    // If there are no words before the cursor, remove the preceding newline.
    if (offset === 0) {
      return moveSelectionBackward(strategyState, 1);
    }
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(0, offset);
    var toRemove = DraftRemovableWord.getBackward(text);
    return moveSelectionBackward(strategyState, toRemove.length || 1);
  }, 'backward');

  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }

  return EditorState.push(editorState, afterRemoval, 'remove-range');
}

module.exports = keyCommandBackspaceWord;

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandDeleteWord
 * 
 */



var DraftRemovableWord = __webpack_require__(933);
var EditorState = __webpack_require__(862);

var moveSelectionForward = __webpack_require__(946);
var removeTextWithStrategy = __webpack_require__(881);

/**
 * Delete the word that is right of the cursor, as well as any spaces or
 * punctuation before the word.
 */
function keyCommandDeleteWord(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(offset);
    var toRemove = DraftRemovableWord.getForward(text);

    // If there are no words in front of the cursor, remove the newline.
    return moveSelectionForward(strategyState, toRemove.length || 1);
  }, 'forward');

  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }

  return EditorState.push(editorState, afterRemoval, 'remove-range');
}

module.exports = keyCommandDeleteWord;

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandInsertNewline
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);

function keyCommandInsertNewline(editorState) {
  var contentState = DraftModifier.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
  return EditorState.push(editorState, contentState, 'split-block');
}

module.exports = keyCommandInsertNewline;

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandMoveSelectionToEndOfBlock
 * 
 */



var EditorState = __webpack_require__(862);

/**
 * See comment for `moveSelectionToStartOfBlock`.
 */
function keyCommandMoveSelectionToEndOfBlock(editorState) {
  var selection = editorState.getSelection();
  var endKey = selection.getEndKey();
  var content = editorState.getCurrentContent();
  var textLength = content.getBlockForKey(endKey).getLength();
  return EditorState.set(editorState, {
    selection: selection.merge({
      anchorKey: endKey,
      anchorOffset: textLength,
      focusKey: endKey,
      focusOffset: textLength,
      isBackward: false
    }),
    forceSelection: true
  });
}

module.exports = keyCommandMoveSelectionToEndOfBlock;

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandMoveSelectionToStartOfBlock
 * 
 */



var EditorState = __webpack_require__(862);

/**
 * Collapse selection at the start of the first selected block. This is used
 * for Firefox versions that attempt to navigate forward/backward instead of
 * moving the cursor. Other browsers are able to move the cursor natively.
 */
function keyCommandMoveSelectionToStartOfBlock(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  return EditorState.set(editorState, {
    selection: selection.merge({
      anchorKey: startKey,
      anchorOffset: 0,
      focusKey: startKey,
      focusOffset: 0,
      isBackward: false
    }),
    forceSelection: true
  });
}

module.exports = keyCommandMoveSelectionToStartOfBlock;

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandPlainBackspace
 * 
 */



var EditorState = __webpack_require__(862);
var UnicodeUtils = __webpack_require__(874);

var moveSelectionBackward = __webpack_require__(901);
var removeTextWithStrategy = __webpack_require__(881);

/**
 * Remove the selected range. If the cursor is collapsed, remove the preceding
 * character. This operation is Unicode-aware, so removing a single character
 * will remove a surrogate pair properly as well.
 */
function keyCommandPlainBackspace(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
    var selection = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection.getAnchorKey();
    var offset = selection.getAnchorOffset();
    var charBehind = content.getBlockForKey(key).getText()[offset - 1];
    return moveSelectionBackward(strategyState, charBehind ? UnicodeUtils.getUTF16Length(charBehind, 0) : 1);
  }, 'backward');

  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }

  var selection = editorState.getSelection();
  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'backspace-character' : 'remove-range');
}

module.exports = keyCommandPlainBackspace;

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandPlainDelete
 * 
 */



var EditorState = __webpack_require__(862);
var UnicodeUtils = __webpack_require__(874);

var moveSelectionForward = __webpack_require__(946);
var removeTextWithStrategy = __webpack_require__(881);

/**
 * Remove the selected range. If the cursor is collapsed, remove the following
 * character. This operation is Unicode-aware, so removing a single character
 * will remove a surrogate pair properly as well.
 */
function keyCommandPlainDelete(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
    var selection = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection.getAnchorKey();
    var offset = selection.getAnchorOffset();
    var charAhead = content.getBlockForKey(key).getText()[offset];
    return moveSelectionForward(strategyState, charAhead ? UnicodeUtils.getUTF16Length(charAhead, 0) : 1);
  }, 'forward');

  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }

  var selection = editorState.getSelection();

  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'delete-character' : 'remove-range');
}

module.exports = keyCommandPlainDelete;

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandTransposeCharacters
 * 
 */



var DraftModifier = __webpack_require__(865);
var EditorState = __webpack_require__(862);

var getContentStateFragment = __webpack_require__(888);

/**
 * Transpose the characters on either side of a collapsed cursor, or
 * if the cursor is at the end of the block, transpose the last two
 * characters.
 */
function keyCommandTransposeCharacters(editorState) {
  var selection = editorState.getSelection();
  if (!selection.isCollapsed()) {
    return editorState;
  }

  var offset = selection.getAnchorOffset();
  if (offset === 0) {
    return editorState;
  }

  var blockKey = selection.getAnchorKey();
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var length = block.getLength();

  // Nothing to transpose if there aren't two characters.
  if (length <= 1) {
    return editorState;
  }

  var removalRange;
  var finalSelection;

  if (offset === length) {
    // The cursor is at the end of the block. Swap the last two characters.
    removalRange = selection.set('anchorOffset', offset - 1);
    finalSelection = selection;
  } else {
    removalRange = selection.set('focusOffset', offset + 1);
    finalSelection = removalRange.set('anchorOffset', offset + 1);
  }

  // Extract the character to move as a fragment. This preserves its
  // styling and entity, if any.
  var movedFragment = getContentStateFragment(content, removalRange);
  var afterRemoval = DraftModifier.removeRange(content, removalRange, 'backward');

  // After the removal, the insertion target is one character back.
  var selectionAfter = afterRemoval.getSelectionAfter();
  var targetOffset = selectionAfter.getAnchorOffset() - 1;
  var targetRange = selectionAfter.merge({
    anchorOffset: targetOffset,
    focusOffset: targetOffset
  });

  var afterInsert = DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);

  var newEditorState = EditorState.push(editorState, afterInsert, 'insert-fragment');

  return EditorState.acceptSelection(newEditorState, finalSelection);
}

module.exports = keyCommandTransposeCharacters;

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyCommandUndo
 * 
 */



var EditorState = __webpack_require__(862);

function keyCommandUndo(e, editorState, updateFn) {
  var undoneState = EditorState.undo(editorState);

  // If the last change to occur was a spellcheck change, allow the undo
  // event to fall through to the browser. This allows the browser to record
  // the unwanted change, which should soon lead it to learn not to suggest
  // the correction again.
  if (editorState.getLastChangeType() === 'spellcheck-change') {
    var nativelyRenderedContent = undoneState.getCurrentContent();
    updateFn(EditorState.set(undoneState, { nativelyRenderedContent: nativelyRenderedContent }));
    return;
  }

  // Otheriwse, manage the undo behavior manually.
  e.preventDefault();
  if (!editorState.getNativelyRenderedContent()) {
    updateFn(undoneState);
    return;
  }

  // Trigger a re-render with the current content state to ensure that the
  // component tree has up-to-date props for comparison.
  updateFn(EditorState.set(editorState, { nativelyRenderedContent: null }));

  // Wait to ensure that the re-render has occurred before performing
  // the undo action.
  setTimeout(function () {
    updateFn(undoneState);
  }, 0);
}

module.exports = keyCommandUndo;

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule modifyBlockForContentState
 * @typechecks
 * 
 */



var Immutable = __webpack_require__(106);

var Map = Immutable.Map;


function modifyBlockForContentState(contentState, selectionState, operation) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
    return k === startKey;
  }).takeUntil(function (_, k) {
    return k === endKey;
  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(operation);

  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}

module.exports = modifyBlockForContentState;

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeRangeFromContentState
 * 
 */



var Immutable = __webpack_require__(106);

function removeRangeFromContentState(contentState, selectionState) {
  if (selectionState.isCollapsed()) {
    return contentState;
  }

  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  var startBlock = blockMap.get(startKey);
  var endBlock = blockMap.get(endKey);
  var characterList;

  if (startBlock === endBlock) {
    characterList = removeFromList(startBlock.getCharacterList(), startOffset, endOffset);
  } else {
    characterList = startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
  }

  var modifiedStart = startBlock.merge({
    text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
    characterList: characterList
  });

  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
    return k === startKey;
  }).takeUntil(function (_, k) {
    return k === endKey;
  }).concat(Immutable.Map([[endKey, null]])).map(function (_, k) {
    return k === startKey ? modifiedStart : null;
  });

  blockMap = blockMap.merge(newBlocks).filter(function (block) {
    return !!block;
  });

  return contentState.merge({
    blockMap: blockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: startKey,
      anchorOffset: startOffset,
      focusKey: startKey,
      focusOffset: startOffset,
      isBackward: false
    })
  });
}

/**
 * Maintain persistence for target list when removing characters on the
 * head and tail of the character list.
 */
function removeFromList(targetList, startOffset, endOffset) {
  if (startOffset === 0) {
    while (startOffset < endOffset) {
      targetList = targetList.shift();
      startOffset++;
    }
  } else if (endOffset === targetList.count()) {
    while (endOffset > startOffset) {
      targetList = targetList.pop();
      endOffset--;
    }
  } else {
    var head = targetList.slice(0, startOffset);
    var tail = targetList.slice(endOffset);
    targetList = head.concat(tail).toList();
  }
  return targetList;
}

module.exports = removeRangeFromContentState;

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setDraftEditorSelection
 * @typechecks
 * 
 */



var containsNode = __webpack_require__(958);
var getActiveElement = __webpack_require__(959);

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 */
function setDraftEditorSelection(selectionState, node, blockKey, nodeStart, nodeEnd) {
  // It's possible that the editor has been removed from the DOM but
  // our selection code doesn't know it yet. Forcing selection in
  // this case may lead to errors, so just bail now.
  if (!containsNode(document.documentElement, node)) {
    return;
  }

  var selection = global.getSelection();
  var anchorKey = selectionState.getAnchorKey();
  var anchorOffset = selectionState.getAnchorOffset();
  var focusKey = selectionState.getFocusKey();
  var focusOffset = selectionState.getFocusOffset();
  var isBackward = selectionState.getIsBackward();

  // IE doesn't support backward selection. Swap key/offset pairs.
  if (!selection.extend && isBackward) {
    var tempKey = anchorKey;
    var tempOffset = anchorOffset;
    anchorKey = focusKey;
    anchorOffset = focusOffset;
    focusKey = tempKey;
    focusOffset = tempOffset;
    isBackward = false;
  }

  var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset;

  var hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;

  // If the selection is entirely bound within this node, set the selection
  // and be done.
  if (hasAnchor && hasFocus) {
    selection.removeAllRanges();
    addPointToSelection(selection, node, anchorOffset - nodeStart);
    addFocusToSelection(selection, node, focusOffset - nodeStart);
    return;
  }

  if (!isBackward) {
    // If the anchor is within this node, set the range start.
    if (hasAnchor) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart);
    }

    // If the focus is within this node, we can assume that we have
    // already set the appropriate start range on the selection, and
    // can simply extend the selection.
    if (hasFocus) {
      addFocusToSelection(selection, node, focusOffset - nodeStart);
    }
  } else {
    // If this node has the focus, set the selection range to be a
    // collapsed range beginning here. Later, when we encounter the anchor,
    // we'll use this information to extend the selection.
    if (hasFocus) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, focusOffset - nodeStart);
    }

    // If this node has the anchor, we may assume that the correct
    // focus information is already stored on the selection object.
    // We keep track of it, reset the selection range, and extend it
    // back to the focus point.
    if (hasAnchor) {
      var storedFocusNode = selection.focusNode;
      var storedFocusOffset = selection.focusOffset;

      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart);
      addFocusToSelection(selection, storedFocusNode, storedFocusOffset);
    }
  }
}

/**
 * Extend selection towards focus point.
 */
function addFocusToSelection(selection, node, offset) {
  if (selection.extend && containsNode(getActiveElement(), node)) {
    // If `extend` is called while another element has focus, an error is
    // thrown. We therefore disable `extend` if the active element is somewhere
    // other than the node we are selecting. This should only occur in Firefox,
    // since it is the only browser to support multiple selections.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=921444.
    selection.extend(node, offset);
  } else {
    // IE doesn't support extend. This will mean no backward selection.
    // Extract the existing selection range and add focus to it.
    // Additionally, clone the selection range. IE11 throws an
    // InvalidStateError when attempting to access selection properties
    // after the range is detached.
    var range = selection.getRangeAt(0);
    range.setEnd(node, offset);
    selection.addRange(range.cloneRange());
  }
}

function addPointToSelection(selection, node, offset) {
  var range = document.createRange();
  range.setStart(node, offset);
  selection.addRange(range);
}

module.exports = setDraftEditorSelection;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule splitBlockInContentState
 * @typechecks
 * 
 */



var Immutable = __webpack_require__(106);

var generateRandomKey = __webpack_require__(868);
var invariant = __webpack_require__(864);

var Map = Immutable.Map;


function splitBlockInContentState(contentState, selectionState) {
  !selectionState.isCollapsed() ?  true ? invariant(false, 'Selection range must be collapsed.') : invariant(false) : void 0;

  var key = selectionState.getAnchorKey();
  var offset = selectionState.getAnchorOffset();
  var blockMap = contentState.getBlockMap();
  var blockToSplit = blockMap.get(key);

  var text = blockToSplit.getText();
  var chars = blockToSplit.getCharacterList();

  var blockAbove = blockToSplit.merge({
    text: text.slice(0, offset),
    characterList: chars.slice(0, offset)
  });

  var keyBelow = generateRandomKey();
  var blockBelow = blockAbove.merge({
    key: keyBelow,
    text: text.slice(offset),
    characterList: chars.slice(offset),
    data: Map()
  });

  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
    return v === blockToSplit;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
    return v === blockToSplit;
  }).rest();
  var newBlocks = blocksBefore.concat([[blockAbove.getKey(), blockAbove], [blockBelow.getKey(), blockBelow]], blocksAfter).toOrderedMap();

  return contentState.merge({
    blockMap: newBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: keyBelow,
      anchorOffset: 0,
      focusKey: keyBelow,
      focusOffset: 0,
      isBackward: false
    })
  });
}

module.exports = splitBlockInContentState;

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule splitTextIntoTextBlocks
 * 
 */



var NEWLINE_REGEX = /\r\n?|\n/g;

function splitTextIntoTextBlocks(text) {
  return text.split(NEWLINE_REGEX);
}

module.exports = splitTextIntoTextBlocks;

/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
var PhotosMimeType = {
  isImage: function isImage(mimeString) {
    return getParts(mimeString)[0] === 'image';
  },
  isJpeg: function isJpeg(mimeString) {
    var parts = getParts(mimeString);
    return PhotosMimeType.isImage(mimeString) && (
    // see http://fburl.com/10972194
    parts[1] === 'jpeg' || parts[1] === 'pjpeg');
  }
};

function getParts(mimeString) {
  return mimeString.split('/');
}

module.exports = PhotosMimeType;

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @stub
 * 
 */



// \u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf
//             is latin supplement punctuation except fractions and superscript
//             numbers
// \u2010-\u2027\u2030-\u205e
//             is punctuation from the general punctuation block:
//             weird quotes, commas, bullets, dashes, etc.
// \u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f
//             is CJK punctuation
// \uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65
//             is some full-width/half-width punctuation
// \u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d\uFD3e\uFD3F
//             is some Arabic punctuation marks
// \u1801\u0964\u104a\u104b
//             is misc. other language punctuation marks

var PUNCTUATION = '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;' + '\u30FB\u3001\u3002\u3008-\u3011\u3014-\u301F\uFF1A-\uFF1F\uFF01-\uFF0F' + '\uFF3B-\uFF40\uFF5B-\uFF65\u2E2E\u061F\u066A-\u066C\u061B\u060C\u060D' + '\uFD3E\uFD3F\u1801\u0964\u104A\u104B\u2010-\u2027\u2030-\u205E' + '\xA1-\xB1\xB4-\xB8\xBA\xBB\xBF]';

module.exports = {
  getPunctuation: function getPunctuation() {
    return PUNCTUATION;
  }
};

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URI = function () {
  function URI(uri) {
    _classCallCheck(this, URI);

    this._uri = uri;
  }

  URI.prototype.toString = function toString() {
    return this._uri;
  };

  return URI;
}();

module.exports = URI;

/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/**
 * Stateful API for text direction detection
 *
 * This class can be used in applications where you need to detect the
 * direction of a sequence of text blocks, where each direction shall be used
 * as the fallback direction for the next one.
 *
 * NOTE: A default direction, if not provided, is set based on the global
 *       direction, as defined by `UnicodeBidiDirection`.
 *
 * == Example ==
 * ```
 * var UnicodeBidiService = require('UnicodeBidiService');
 *
 * var bidiService = new UnicodeBidiService();
 *
 * ...
 *
 * bidiService.reset();
 * for (var para in paragraphs) {
 *   var dir = bidiService.getDirection(para);
 *   ...
 * }
 * ```
 *
 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnicodeBidi = __webpack_require__(952);
var UnicodeBidiDirection = __webpack_require__(906);

var invariant = __webpack_require__(864);

var UnicodeBidiService = function () {

  /**
   * Stateful class for paragraph direction detection
   *
   * @param defaultDir  Default direction of the service
   */
  function UnicodeBidiService(defaultDir) {
    _classCallCheck(this, UnicodeBidiService);

    if (!defaultDir) {
      defaultDir = UnicodeBidiDirection.getGlobalDir();
    } else {
      !UnicodeBidiDirection.isStrong(defaultDir) ?  true ? invariant(false, 'Default direction must be a strong direction (LTR or RTL)') : invariant(false) : void 0;
    }
    this._defaultDir = defaultDir;
    this.reset();
  }

  /**
   * Reset the internal state
   *
   * Instead of creating a new instance, you can just reset() your instance
   * everytime you start a new loop.
   */


  UnicodeBidiService.prototype.reset = function reset() {
    this._lastDir = this._defaultDir;
  };

  /**
   * Returns the direction of a block of text, and remembers it as the
   * fall-back direction for the next paragraph.
   *
   * @param str  A text block, e.g. paragraph, table cell, tag
   * @return     The resolved direction
   */


  UnicodeBidiService.prototype.getDirection = function getDirection(str) {
    this._lastDir = UnicodeBidi.getDirection(str, this._lastDir);
    return this._lastDir;
  };

  return UnicodeBidiService;
}();

module.exports = UnicodeBidiService;

/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Usage note:
 * This module makes a best effort to export the same data we would internally.
 * At Facebook we use a server-generated module that does the parsing and
 * exports the data for the client to use. We can't rely on a server-side
 * implementation in open source so instead we make use of an open source
 * library to do the heavy lifting and then make some adjustments as necessary.
 * It's likely there will be some differences. Some we can smooth over.
 * Others are going to be harder.
 */



var UAParser = __webpack_require__(1370);

var UNKNOWN = 'Unknown';

var PLATFORM_MAP = {
  'Mac OS': 'Mac OS X'
};

/**
 * Convert from UAParser platform name to what we expect.
 */
function convertPlatformName(name) {
  return PLATFORM_MAP[name] || name;
}

/**
 * Get the version number in parts. This is very naive. We actually get major
 * version as a part of UAParser already, which is generally good enough, but
 * let's get the minor just in case.
 */
function getBrowserVersion(version) {
  if (!version) {
    return {
      major: '',
      minor: ''
    };
  }
  var parts = version.split('.');
  return {
    major: parts[0],
    minor: parts[1]
  };
}

/**
 * Get the UA data fom UAParser and then convert it to the format we're
 * expecting for our APIS.
 */
var parser = new UAParser();
var results = parser.getResult();

// Do some conversion first.
var browserVersionData = getBrowserVersion(results.browser.version);
var uaData = {
  browserArchitecture: results.cpu.architecture || UNKNOWN,
  browserFullVersion: results.browser.version || UNKNOWN,
  browserMinorVersion: browserVersionData.minor || UNKNOWN,
  browserName: results.browser.name || UNKNOWN,
  browserVersion: results.browser.major || UNKNOWN,
  deviceName: results.device.model || UNKNOWN,
  engineName: results.engine.name || UNKNOWN,
  engineVersion: results.engine.version || UNKNOWN,
  platformArchitecture: results.cpu.architecture || UNKNOWN,
  platformName: convertPlatformName(results.os.name) || UNKNOWN,
  platformVersion: results.os.version || UNKNOWN,
  platformFullVersion: results.os.version || UNKNOWN
};

module.exports = uaData;

/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var invariant = __webpack_require__(864);

var componentRegex = /\./;
var orRegex = /\|\|/;
var rangeRegex = /\s+\-\s+/;
var modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
var numericRegex = /^(\d*)(.*)/;

/**
 * Splits input `range` on "||" and returns true if any subrange matches
 * `version`.
 *
 * @param {string} range
 * @param {string} version
 * @returns {boolean}
 */
function checkOrExpression(range, version) {
  var expressions = range.split(orRegex);

  if (expressions.length > 1) {
    return expressions.some(function (range) {
      return VersionRange.contains(range, version);
    });
  } else {
    range = expressions[0].trim();
    return checkRangeExpression(range, version);
  }
}

/**
 * Splits input `range` on " - " (the surrounding whitespace is required) and
 * returns true if version falls between the two operands.
 *
 * @param {string} range
 * @param {string} version
 * @returns {boolean}
 */
function checkRangeExpression(range, version) {
  var expressions = range.split(rangeRegex);

  !(expressions.length > 0 && expressions.length <= 2) ?  true ? invariant(false, 'the "-" operator expects exactly 2 operands') : invariant(false) : void 0;

  if (expressions.length === 1) {
    return checkSimpleExpression(expressions[0], version);
  } else {
    var startVersion = expressions[0],
        endVersion = expressions[1];

    !(isSimpleVersion(startVersion) && isSimpleVersion(endVersion)) ?  true ? invariant(false, 'operands to the "-" operator must be simple (no modifiers)') : invariant(false) : void 0;

    return checkSimpleExpression('>=' + startVersion, version) && checkSimpleExpression('<=' + endVersion, version);
  }
}

/**
 * Checks if `range` matches `version`. `range` should be a "simple" range (ie.
 * not a compound range using the " - " or "||" operators).
 *
 * @param {string} range
 * @param {string} version
 * @returns {boolean}
 */
function checkSimpleExpression(range, version) {
  range = range.trim();
  if (range === '') {
    return true;
  }

  var versionComponents = version.split(componentRegex);

  var _getModifierAndCompon = getModifierAndComponents(range),
      modifier = _getModifierAndCompon.modifier,
      rangeComponents = _getModifierAndCompon.rangeComponents;

  switch (modifier) {
    case '<':
      return checkLessThan(versionComponents, rangeComponents);
    case '<=':
      return checkLessThanOrEqual(versionComponents, rangeComponents);
    case '>=':
      return checkGreaterThanOrEqual(versionComponents, rangeComponents);
    case '>':
      return checkGreaterThan(versionComponents, rangeComponents);
    case '~':
    case '~>':
      return checkApproximateVersion(versionComponents, rangeComponents);
    default:
      return checkEqual(versionComponents, rangeComponents);
  }
}

/**
 * Checks whether `a` is less than `b`.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkLessThan(a, b) {
  return compareComponents(a, b) === -1;
}

/**
 * Checks whether `a` is less than or equal to `b`.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkLessThanOrEqual(a, b) {
  var result = compareComponents(a, b);
  return result === -1 || result === 0;
}

/**
 * Checks whether `a` is equal to `b`.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkEqual(a, b) {
  return compareComponents(a, b) === 0;
}

/**
 * Checks whether `a` is greater than or equal to `b`.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkGreaterThanOrEqual(a, b) {
  var result = compareComponents(a, b);
  return result === 1 || result === 0;
}

/**
 * Checks whether `a` is greater than `b`.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkGreaterThan(a, b) {
  return compareComponents(a, b) === 1;
}

/**
 * Checks whether `a` is "reasonably close" to `b` (as described in
 * https://www.npmjs.org/doc/misc/semver.html). For example, if `b` is "1.3.1"
 * then "reasonably close" is defined as ">= 1.3.1 and < 1.4".
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {boolean}
 */
function checkApproximateVersion(a, b) {
  var lowerBound = b.slice();
  var upperBound = b.slice();

  if (upperBound.length > 1) {
    upperBound.pop();
  }
  var lastIndex = upperBound.length - 1;
  var numeric = parseInt(upperBound[lastIndex], 10);
  if (isNumber(numeric)) {
    upperBound[lastIndex] = numeric + 1 + '';
  }

  return checkGreaterThanOrEqual(a, lowerBound) && checkLessThan(a, upperBound);
}

/**
 * Extracts the optional modifier (<, <=, =, >=, >, ~, ~>) and version
 * components from `range`.
 *
 * For example, given `range` ">= 1.2.3" returns an object with a `modifier` of
 * `">="` and `components` of `[1, 2, 3]`.
 *
 * @param {string} range
 * @returns {object}
 */
function getModifierAndComponents(range) {
  var rangeComponents = range.split(componentRegex);
  var matches = rangeComponents[0].match(modifierRegex);
  !matches ?  true ? invariant(false, 'expected regex to match but it did not') : invariant(false) : void 0;

  return {
    modifier: matches[1],
    rangeComponents: [matches[2]].concat(rangeComponents.slice(1))
  };
}

/**
 * Determines if `number` is a number.
 *
 * @param {mixed} number
 * @returns {boolean}
 */
function isNumber(number) {
  return !isNaN(number) && isFinite(number);
}

/**
 * Tests whether `range` is a "simple" version number without any modifiers
 * (">", "~" etc).
 *
 * @param {string} range
 * @returns {boolean}
 */
function isSimpleVersion(range) {
  return !getModifierAndComponents(range).modifier;
}

/**
 * Zero-pads array `array` until it is at least `length` long.
 *
 * @param {array} array
 * @param {number} length
 */
function zeroPad(array, length) {
  for (var i = array.length; i < length; i++) {
    array[i] = '0';
  }
}

/**
 * Normalizes `a` and `b` in preparation for comparison by doing the following:
 *
 * - zero-pads `a` and `b`
 * - marks any "x", "X" or "*" component in `b` as equivalent by zero-ing it out
 *   in both `a` and `b`
 * - marks any final "*" component in `b` as a greedy wildcard by zero-ing it
 *   and all of its successors in `a`
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {array<array<string>>}
 */
function normalizeVersions(a, b) {
  a = a.slice();
  b = b.slice();

  zeroPad(a, b.length);

  // mark "x" and "*" components as equal
  for (var i = 0; i < b.length; i++) {
    var matches = b[i].match(/^[x*]$/i);
    if (matches) {
      b[i] = a[i] = '0';

      // final "*" greedily zeros all remaining components
      if (matches[0] === '*' && i === b.length - 1) {
        for (var j = i; j < a.length; j++) {
          a[j] = '0';
        }
      }
    }
  }

  zeroPad(b, a.length);

  return [a, b];
}

/**
 * Returns the numerical -- not the lexicographical -- ordering of `a` and `b`.
 *
 * For example, `10-alpha` is greater than `2-beta`.
 *
 * @param {string} a
 * @param {string} b
 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
 * or greater than `b`, respectively
 */
function compareNumeric(a, b) {
  var aPrefix = a.match(numericRegex)[1];
  var bPrefix = b.match(numericRegex)[1];
  var aNumeric = parseInt(aPrefix, 10);
  var bNumeric = parseInt(bPrefix, 10);

  if (isNumber(aNumeric) && isNumber(bNumeric) && aNumeric !== bNumeric) {
    return compare(aNumeric, bNumeric);
  } else {
    return compare(a, b);
  }
}

/**
 * Returns the ordering of `a` and `b`.
 *
 * @param {string|number} a
 * @param {string|number} b
 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
 * or greater than `b`, respectively
 */
function compare(a, b) {
  !(typeof a === typeof b) ?  true ? invariant(false, '"a" and "b" must be of the same type') : invariant(false) : void 0;

  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * Compares arrays of version components.
 *
 * @param {array<string>} a
 * @param {array<string>} b
 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
 * or greater than `b`, respectively
 */
function compareComponents(a, b) {
  var _normalizeVersions = normalizeVersions(a, b),
      aNormalized = _normalizeVersions[0],
      bNormalized = _normalizeVersions[1];

  for (var i = 0; i < bNormalized.length; i++) {
    var result = compareNumeric(aNormalized[i], bNormalized[i]);
    if (result) {
      return result;
    }
  }

  return 0;
}

var VersionRange = {
  /**
   * Checks whether `version` satisfies the `range` specification.
   *
   * We support a subset of the expressions defined in
   * https://www.npmjs.org/doc/misc/semver.html:
   *
   *    version   Must match version exactly
   *    =version  Same as just version
   *    >version  Must be greater than version
   *    >=version Must be greater than or equal to version
   *    <version  Must be less than version
   *    <=version Must be less than or equal to version
   *    ~version  Must be at least version, but less than the next significant
   *              revision above version:
   *              "~1.2.3" is equivalent to ">= 1.2.3 and < 1.3"
   *    ~>version Equivalent to ~version
   *    1.2.x     Must match "1.2.x", where "x" is a wildcard that matches
   *              anything
   *    1.2.*     Similar to "1.2.x", but "*" in the trailing position is a
   *              "greedy" wildcard, so will match any number of additional
   *              components:
   *              "1.2.*" will match "1.2.1", "1.2.1.1", "1.2.1.1.1" etc
   *    *         Any version
   *    ""        (Empty string) Same as *
   *    v1 - v2   Equivalent to ">= v1 and <= v2"
   *    r1 || r2  Passes if either r1 or r2 are satisfied
   *
   * @param {string} range
   * @param {string} version
   * @returns {boolean}
   */
  contains: function contains(range, version) {
    return checkOrExpression(range.trim(), version.trim());
  }
};

module.exports = VersionRange;

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var isWebkit = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('AppleWebKit') > -1;

/**
 * Gets the element with the document scroll properties such as `scrollLeft` and
 * `scrollHeight`. This may differ across different browsers.
 *
 * NOTE: The return value can be null if the DOM is not yet ready.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getDocumentScrollElement(doc) {
  doc = doc || document;
  return !isWebkit && doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;
}

module.exports = getDocumentScrollElement;

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var getElementRect = __webpack_require__(1093);

/**
 * Gets an element's position in pixels relative to the viewport. The returned
 * object represents the position of the element's top left corner.
 *
 * @param {DOMElement} element
 * @return {object}
 */
function getElementPosition(element) {
  var rect = getElementRect(element);
  return {
    x: rect.left,
    y: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}

module.exports = getElementPosition;

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var containsNode = __webpack_require__(958);

/**
 * Gets an element's bounding rect in pixels relative to the viewport.
 *
 * @param {DOMElement} elem
 * @return {object}
 */
function getElementRect(elem) {
  var docElem = elem.ownerDocument.documentElement;

  // FF 2, Safari 3 and Opera 9.5- do not support getBoundingClientRect().
  // IE9- will throw if the element is not in the document.
  if (!('getBoundingClientRect' in elem) || !containsNode(docElem, elem)) {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
  }

  // Subtracts clientTop/Left because IE8- added a 2px border to the
  // <html> element (see http://fburl.com/1493213). IE 7 in
  // Quicksmode does not report clientLeft/clientTop so there
  // will be an unaccounted offset of 2px when in quirksmode
  var rect = elem.getBoundingClientRect();

  return {
    left: Math.round(rect.left) - docElem.clientLeft,
    right: Math.round(rect.right) - docElem.clientLeft,
    top: Math.round(rect.top) - docElem.clientTop,
    bottom: Math.round(rect.bottom) - docElem.clientTop
  };
}

module.exports = getElementRect;

/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var camelize = __webpack_require__(1376);
var hyphenate = __webpack_require__(1379);

function asString(value) /*?string*/{
  return value == null ? value : String(value);
}

function getStyleProperty( /*DOMNode*/node, /*string*/name) /*?string*/{
  var computedStyle = void 0;

  // W3C Standard
  if (window.getComputedStyle) {
    // In certain cases such as within an iframe in FF3, this returns null.
    computedStyle = window.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
  }
  // Safari
  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = document.defaultView.getComputedStyle(node, null);
    // A Safari bug causes this to return null for `display: none` elements.
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
    if (name === 'display') {
      return 'none';
    }
  }
  // Internet Explorer
  if (node.currentStyle) {
    if (name === 'float') {
      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
    }
    return asString(node.currentStyle[camelize(name)]);
  }
  return asString(node.style && node.style[camelize(name)]);
}

module.exports = getStyleProperty;

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getViewportWidth() {
  var width = void 0;
  if (document.documentElement) {
    width = document.documentElement.clientWidth;
  }

  if (!width && document.body) {
    width = document.body.clientWidth;
  }

  return width || 0;
} /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   * @typechecks
   */

function getViewportHeight() {
  var height = void 0;
  if (document.documentElement) {
    height = document.documentElement.clientHeight;
  }

  if (!height && document.body) {
    height = document.body.clientHeight;
  }

  return height || 0;
}

/**
 * Gets the viewport dimensions including any scrollbars.
 */
function getViewportDimensions() {
  return {
    width: window.innerWidth || getViewportWidth(),
    height: window.innerHeight || getViewportHeight()
  };
}

/**
 * Gets the viewport dimensions excluding any scrollbars.
 */
getViewportDimensions.withoutScrollbars = function () {
  return {
    width: getViewportWidth(),
    height: getViewportHeight()
  };
};

module.exports = getViewportDimensions;

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */



/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} className
 * @return {string}
 */

function joinClasses(className /*, ... */) {
  if (!className) {
    className = '';
  }
  var nextClass = void 0;
  var argLength = arguments.length;
  if (argLength > 1) {
    for (var ii = 1; ii < argLength; ii++) {
      nextClass = arguments[ii];
      if (nextClass) {
        className = (className ? className + ' ' : '') + nextClass;
      }
    }
  }
  return className;
}

module.exports = joinClasses;

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;

/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMPTY_ATTR_LIST = [];

var NODE_TYPE_ELEMENT = exports.NODE_TYPE_ELEMENT = 1;
var NODE_TYPE_TEXT = exports.NODE_TYPE_TEXT = 3;
var NODE_TYPE_FRAGMENT = exports.NODE_TYPE_FRAGMENT = 11;
var SELF_CLOSING = exports.SELF_CLOSING = {
  area: true, base: true, br: true, col: true, embed: true, hr: true, img: true,
  input: true, keygen: true, link: true, meta: true, param: true, source: true,
  track: true, wbr: true
};

var Node = exports.Node = function Node() {
  _classCallCheck(this, Node);
};

var TextNode = exports.TextNode = function (_Node) {
  _inherits(TextNode, _Node);

  function TextNode(value) {
    _classCallCheck(this, TextNode);

    var _this = _possibleConstructorReturn(this, (TextNode.__proto__ || Object.getPrototypeOf(TextNode)).apply(this, arguments));

    _this.nodeType = NODE_TYPE_TEXT;
    _this.nodeName = '#text';
    _this.nodeValue = value;
    return _this;
  }

  _createClass(TextNode, [{
    key: 'toString',
    value: function toString() {
      return escape(this.nodeValue);
    }
  }]);

  return TextNode;
}(Node);

var ElementNode = exports.ElementNode = function (_Node2) {
  _inherits(ElementNode, _Node2);

  function ElementNode(name, attributes, childNodes) {
    _classCallCheck(this, ElementNode);

    var _this2 = _possibleConstructorReturn(this, (ElementNode.__proto__ || Object.getPrototypeOf(ElementNode)).apply(this, arguments));

    if (attributes == null) {
      attributes = EMPTY_ATTR_LIST;
    }
    var isSelfClosing = SELF_CLOSING[name] === true;
    _this2.nodeType = NODE_TYPE_ELEMENT;
    _this2.nodeName = name;
    _this2.attributes = attributes;
    _this2.attrMap = new Map(attributes.map(function (attr) {
      return [attr.name, attr];
    }));
    _this2.childNodes = [];
    _this2.isSelfClosing = isSelfClosing;
    if (!isSelfClosing && childNodes) {
      childNodes.forEach(_this2.appendChild, _this2);
    }
    return _this2;
  }

  _createClass(ElementNode, [{
    key: 'appendChild',
    value: function appendChild(node) {
      if (node.nodeType === NODE_TYPE_FRAGMENT) {
        if (node.childNodes != null) {
          var _childNodes;

          // $FlowIssue - Flow doesn't realize that node is a FragmentNode.
          var childNodes = node.childNodes;
          (_childNodes = this.childNodes).push.apply(_childNodes, _toConsumableArray(childNodes));
        }
      } else {
        this.childNodes.push(node);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      var attr = this.attrMap.get(name);
      if (attr) {
        return attr.value;
      }
    }
  }, {
    key: 'toString',
    value: function toString(isXHTML) {
      var attributes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value;
          var _name = _step$value.name;
          var _value = _step$value.value;

          attributes.push(_name + (_value ? '="' + escapeAttr(_value) + '"' : ''));
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

      var attrString = attributes.length ? ' ' + attributes.join(' ') : '';
      if (this.isSelfClosing) {
        return '<' + this.nodeName + attrString + (isXHTML ? '/>' : '>');
      }
      var childNodes = this.childNodes.map(function (node) {
        return node.toString(isXHTML);
      }).join('');
      return '<' + this.nodeName + attrString + '>' + childNodes + '</' + this.nodeName + '>';
    }
  }]);

  return ElementNode;
}(Node);

var FragmentNode = exports.FragmentNode = function (_Node3) {
  _inherits(FragmentNode, _Node3);

  function FragmentNode(childNodes) {
    _classCallCheck(this, FragmentNode);

    var _this3 = _possibleConstructorReturn(this, (FragmentNode.__proto__ || Object.getPrototypeOf(FragmentNode)).apply(this, arguments));

    _this3.nodeType = NODE_TYPE_FRAGMENT;
    _this3.childNodes = [];
    if (childNodes) {
      childNodes.forEach(_this3.appendChild, _this3);
    }
    return _this3;
  }

  _createClass(FragmentNode, [{
    key: 'appendChild',
    value: function appendChild(node) {
      if (node.nodeType === NODE_TYPE_FRAGMENT) {
        if (node.childNodes != null) {
          var _childNodes2;

          // $FlowIssue - Flow doesn't realize that node is a FragmentNode.
          var childNodes = node.childNodes;
          (_childNodes2 = this.childNodes).push.apply(_childNodes2, _toConsumableArray(childNodes));
        }
      } else {
        this.childNodes.push(node);
      }
    }
  }, {
    key: 'toString',
    value: function toString(isXHTML) {
      return this.childNodes.map(function (node) {
        return node.toString(isXHTML);
      }).join('');
    }
  }]);

  return FragmentNode;
}(Node);

function escape(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.12',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function () {

            var result, i = 0, j, k, p, q, matches, match, args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],       // even sequence (0,2,4,..)
                    props = args[i + 1];   // odd sequence (1,3,5,..)

                // construct object barebones
                if (typeof result === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        if (props.hasOwnProperty(p)){
                            q = props[p];
                            if (typeof q === OBJ_TYPE) {
                                result[q[0]] = undefined;
                            } else {
                                result[q] = undefined;
                            }
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /android.+samsungbrowser\/([\w\.]+)/i,
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            /(qqbrowser)[\/\s]?([\w\.]+)/i
                                                                                // QQBrowser
            ], [NAME, VERSION], [

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /juc.+(ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS
            ], [VERSION, [NAME, 'Facebook']], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL]

            /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(R1001)/i                                                          // Oppo R1001
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
            /(X9006)/i                                                          // Oppo Find 7a
            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R2001)/i                                                          // Oppo YOYO R2001
            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R815)/i                                                           // Oppo Clover R815
            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
             /(U707)/i                                                          // Oppo Find Way S
            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////


    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = mapper.rgx.apply(this, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function() {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };


    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(1374)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ 1374:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/camelize.js");

/***/ }),

/***/ 1377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/createArrayFromMixed.js");

/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/getUnboundedScrollPosition.js");

/***/ }),

/***/ 1379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/hyphenate.js");

/***/ }),

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/memoizeStringOnly.js");

/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/react-dom/lib/CSSProperty.js");

/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_findIndex__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_partition__ = __webpack_require__(1700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_partition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_partition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_filter__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_immutable__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_draft_js_dist_Draft_css__ = __webpack_require__(1665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_draft_js_dist_Draft_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_draft_js_dist_Draft_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_src_constants_enums_fontSize__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_src_utils_file__ = __webpack_require__(1618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_src_constants_enums_sendType__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_src_utils_func__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_src_utils_browser__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_src_utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_src_utils_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_src_services_upload__ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__TextEditor_css__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__TextEditor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Media__ = __webpack_require__(1574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Selection__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__SendButton__ = __webpack_require__(1577);


































/** Whether editor can use `drag and drop` feature to upload file */
var isUploadSupport = __WEBPACK_IMPORTED_MODULE_23_src_utils_browser__["b" /* isDraggableSupport */] && __WEBPACK_IMPORTED_MODULE_23_src_utils_browser__["c" /* isFileReaderSupport */];

var mediaBlockRenderer = function mediaBlockRenderer(block) {
  if (block.getType() !== 'atomic') return null;
  return {
    component: __WEBPACK_IMPORTED_MODULE_29__Media__["a" /* default */],
    editable: false
  };
};

var allowedChar = /\w/;
/**
 * Whether this char is part of token
 *
 * @param {string} char - Current character
 * @return {boolean} Test result
 */
var isCharAllowed = function isCharAllowed(char) {
  return allowedChar.test(char);
};
/**
 * Find first char that is not part of this token
 *
 * @param {string} text - Search text
 * @param {number} start - Start index
 * @param {number} step - Step, should be either 1 or -1
 *
 * @return {number} index of first invalid char, could be -1 or text.length if all satisified
 */
var getIndex = function getIndex(text, start, step) {
  var i = start;
  var length = text.length;
  for (; i < length && i >= 0 && isCharAllowed(text[i]); i += step) {}
  return i;
};

/**
 * Get position of token which contains current cursor; Will return `null` if current state is not
 * cursor.
 *
 * @param {object} editorState - Current EditorState
 * @return {{ start: number, end: number, text: string, key: string }} Info of current token.
 */
var getTokenPosition = function getTokenPosition(editorState) {
  var cursor = __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["e" /* getCursorPosition */](editorState);
  if (cursor === null) return cursor;
  var text = __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["f" /* getText */](editorState, cursor.key);
  var i = getIndex(text, cursor.index - 1, -1);
  var j = getIndex(text, cursor.index, 1);
  return { start: i, end: j, text: text, key: cursor.key };
};

/**
 * Get token that contains current cursor. Will return `null` if current state is not cursor.
 *
 * @param {object} editorState - Current EditorState
 * @return {?string} Token that contains current cursor; `null` if current state is not cursor.
 */
var getTokenText = function getTokenText(editorState) {
  var position = getTokenPosition(editorState);
  if (position === null) return null;
  if (position.text[position.start] !== '#') return null;
  return position.text.substr(position.start, position.end - position.start);
};

var findCannedMessages = function findCannedMessages(token, messages) {
  if (!token) return [];
  var key = token.slice(1); // remove '#' at the beginning
  return __WEBPACK_IMPORTED_MODULE_12_lodash_filter___default()(messages, function (msg) {
    return msg.shortcut.toLowerCase().indexOf(key.toLowerCase()) === 0;
  });
};

function cleanSelection() {
  if (true && __WEBPACK_IMPORTED_MODULE_23_src_utils_browser__["d" /* isIE */]) {
    /**
     * Workaround for IE browsers. Details, check issue 18804
     *
     * Explaination:
     * IE forgets to re-draw the area to hide <Select />, causing some part still displaying.
     * Following workaround force the browser to re-draw.
     * This is bad for performance, but works to avoid this bug.
     */
    setTimeout(function () {
      if (document.querySelector('#workaround')) {
        document.body.removeChild(document.querySelector('#workaround'));
        return;
      }
      var element = document.createElement('div');
      element.id = 'workaround';
      var elementStyle = element.style;
      elementStyle.position = 'fixed';
      elementStyle.top = 0;
      elementStyle.bottom = 0;
      elementStyle.left = 0;
      elementStyle.right = 0;
      elementStyle.backgroundColor = 'transparent';
      document.body.insertBefore(element, document.body.firstChild);
    }, 0);
  }
}

var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25_src_utils_helper__["e" /* shouldComponentUpdateGen */])('TextEditor', ['sendType', 'height', 'disabled', 'selectedFontSize', 'textDirectionIfRTL', 'files'], ['editorState', 'isDragging', 'selected']);

var getFontSizeClass = function getFontSizeClass(type) {
  var _fontSize$small$fontS;

  return (_fontSize$small$fontS = {}, __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_19_src_constants_enums_fontSize__["b" /* small */], __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.chatContentsmall), __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_19_src_constants_enums_fontSize__["a" /* middle */], __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.chatContentmiddle), __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_19_src_constants_enums_fontSize__["c" /* large */], __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.chatContentlarge), _fontSize$small$fontS)[type];
};

var TextEditor = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(TextEditor, _React$Component);

  function TextEditor(props) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, TextEditor);

    var _this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (TextEditor.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(TextEditor)).call(this, props));

    _this.state = {
      isDragging: false,
      cannedMessages: [],
      selected: undefined,
      /** @todo add default state when not provided */
      editorState: props.editorState
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.handleReturn = _this.handleReturn.bind(_this);
    _this.onUpArrow = _this.onUpArrow.bind(_this);
    _this.onDownArrow = _this.onDownArrow.bind(_this);
    _this.onArrowMove = _this.onArrowMove.bind(_this);
    _this.onTab = _this.onTab.bind(_this);
    _this.onEscape = _this.onEscape.bind(_this);
    _this.selectCannedMessage = _this.selectCannedMessage.bind(_this);
    _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
    _this.onScroll = _this.onScroll.bind(_this);
    if (isUploadSupport) {
      _this.showDragging = _this.showDragging.bind(_this);
      _this.hideDragging = _this.hideDragging.bind(_this);
      _this.onUpload = _this.onUpload.bind(_this);
    } else {
      _this.showDragging = _this.hideDragging = _this.onUpload = __WEBPACK_IMPORTED_MODULE_22_src_utils_func__["b" /* empty */];
    }
    _this.onPaste = _this.onPaste.bind(_this);
    _this.updateEditorStateTimer = null;
    _this.scrollTop = 0;
    _this.cancelToken = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(TextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.editor.refs.editor.style.height = this.props.height + 'px';
      this.editor.focus();
      this.editor.refs.editor.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.editorState === nextProps.editorState) return;
      this.shouldScroll = this.shouldScroll || __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["g" /* getHasFocus */](nextProps.editorState);
      this.setState({ editorState: nextProps.editorState });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.editor.refs.editor.style.height = this.props.height + 'px';
      if (prevProps.id !== this.props.id) this.editor.focus();
      if (!this.state.selected && prevState.selected) cleanSelection();
      if (true && __WEBPACK_IMPORTED_MODULE_23_src_utils_browser__["e" /* isFirefox */]) {
        /**
         * Workaround for Firefox browsers. Details, check issue 18738
         */
        var isHavingFocus = !__WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["g" /* getHasFocus */](prevState.editorState) && __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["g" /* getHasFocus */](this.state.editorState);
        if (isHavingFocus) {
          this.editor.focus();
        }
      }
      if (this.shouldScroll) {
        /**
         * scroll to cursor when pasted. Draft-js will not do that automatically, instead,
         * manually calculate the offset and scroll the position.
         */
        this.shouldScroll = false;
        var selection = window.getSelection();
        if (!selection || selection.rangeCount <= 0) return;
        var rect = selection.getRangeAt(0).getClientRects()[0];
        if (!rect) return;
        var containerRect = this.container.getBoundingClientRect();
        var offset = rect.bottom - containerRect.bottom + 45;
        this.editor.refs.editor.scrollTop = this.scrollTop + offset;
      }
      if (this.props.files.length < prevProps.files.length && this.cancelToken) {
        this.cancelToken.cancel('');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.editor.refs.editor.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'onChange',
    value: function onChange(editorState) {
      var _this2 = this;

      if (__WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["g" /* getHasFocus */](editorState)) {
        if (this.updateEditorStateTimer) clearTimeout(this.updateEditorStateTimer);
        var token = getTokenText(editorState);
        var cannedMessages = findCannedMessages(token, this.props.cannedMessages);
        if (cannedMessages.length !== this.state.cannedMessages.length || this.state.cannedMessages.every(function (msg, i) {
          return msg !== cannedMessages[i];
        })) {
          this.setState({
            cannedMessages: cannedMessages,
            selected: cannedMessages[0],
            editorState: editorState
          });
        }
      } else {
        if (this.updateEditorStateTimer) return;
        this.updateEditorStateTimer = setTimeout(function () {
          _this2.updateEditorStateTimer = null;
          _this2.props.onChange(_this2.props.id, editorState);
        }, 20); /** @todo do not use magic number here */
      }
    }
  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      this.scrollTop = event.target.scrollTop;
    }
  }, {
    key: 'onPaste',
    value: function onPaste(files) {
      var _this3 = this;

      var maxFileSize = this.props.siteInfo.maxFileSize;

      var _partition2 = __WEBPACK_IMPORTED_MODULE_11_lodash_partition___default()(files, __WEBPACK_IMPORTED_MODULE_20_src_utils_file__["a" /* isFileExceedMaxSize */](maxFileSize * Math.pow(1024, 2))),
          _partition3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_partition2, 2),
          toolarge = _partition3[0],
          others = _partition3[1];

      if (toolarge.length > 0) {
        this.props.setErrorMessage(this.props.id, 'Error sending file: The max file size is ' + maxFileSize + ' MB');
        return 'handled';
      }
      var images = __WEBPACK_IMPORTED_MODULE_12_lodash_filter___default()(others, __WEBPACK_IMPORTED_MODULE_20_src_utils_file__["b" /* isImageFile */]);
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all(images.map(function (img) {
        return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function () {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(img);
        });
      })).then(function (results) {
        return results.map(function (result, i) {
          return {
            dataUrl: result,
            file: images[i]
          };
        });
      }).then(function (data) {
        return data.reduce(function (prev, curr) {
          return __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["b" /* insertImage */](prev, curr.dataUrl, { file: curr.file });
        }, _this3.state.editorState);
      }).then(function (editorState) {
        _this3.setState({ editorState: editorState });
      });
      return 'handled';
    }
  }, {
    key: 'onUpload',
    value: function onUpload(files) {
      var _this4 = this;

      if (this.cancelToken) return 'handled';
      if (files.length > 1) {
        this.props.setErrorMessage(this.props.id, 'Error sending files: you can only send one file at a time');
        return 'handled';
      }
      var uploadFile = files[0];
      var maxFileSize = this.props.siteInfo.maxFileSize;
      if (__WEBPACK_IMPORTED_MODULE_20_src_utils_file__["a" /* isFileExceedMaxSize */](maxFileSize * Math.pow(1024, 2))(uploadFile)) {
        this.props.setErrorMessage(this.props.id, 'Error sending file: The max file size is ' + maxFileSize + ' MB');
        return 'handled';
      }
      var guid = Date.now();
      this.cancelToken = __WEBPACK_IMPORTED_MODULE_15_axios__["CancelToken"].source();
      this.props.onStart(this.props.id, uploadFile.name, guid);
      __WEBPACK_IMPORTED_MODULE_27_src_services_upload__["a" /* uploadFile */](uploadFile, this.props.getUploadUrl(), {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          _this4.props.onProgress(_this4.props.id, progress, uploadFile.name, guid);
        },
        cancelToken: this.cancelToken.token
      }).then(function (resp) {
        _this4.cancelToken = null;
        _this4.props.onSuccess(_this4.props.id, uploadFile.name, guid, resp, _this4.props.sendToIds);
      }).catch(function (err) {
        _this4.cancelToken = null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_axios__["isCancel"])(err)) return;
        _this4.props.onCancel(_this4.props.id, uploadFile.name, guid);
        _this4.props.setErrorMessage(_this4.props.id, err);
      });
      return 'handled';
    }
  }, {
    key: 'onArrowMove',
    value: function onArrowMove(event, direction) {
      var _state = this.state,
          cannedMessages = _state.cannedMessages,
          selected = _state.selected;

      if (!selected) return;
      event.preventDefault();
      var length = cannedMessages.length;
      var index = __WEBPACK_IMPORTED_MODULE_10_lodash_findIndex___default()(cannedMessages, function (msg) {
        return msg === selected;
      });
      this.setState({
        selected: cannedMessages[(index + direction + length) % length]
      });
    }
  }, {
    key: 'onDownArrow',
    value: function onDownArrow(event) {
      this.onArrowMove(event, 1);
    }
  }, {
    key: 'onUpArrow',
    value: function onUpArrow(event) {
      this.onArrowMove(event, -1);
    }
  }, {
    key: 'onTab',
    value: function onTab(event) {
      if (this.selectCannedMessage()) event.preventDefault();
    }
  }, {
    key: 'onEscape',
    value: function onEscape(event) {
      var selected = this.state.selected;

      if (!selected) return;
      event.preventDefault();
      this.setState({ selected: undefined, cannedMessages: [] });
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      var _props = this.props,
          onChange = _props.onChange,
          id = _props.id;

      var state = __WEBPACK_IMPORTED_MODULE_14_draft_js__["RichUtils"].handleKeyCommand(this.state.editorState, command);
      if (!state) return 'unhandled';
      onChange(id, state);
      return 'handled';
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(event) {
      if (this.selectCannedMessage()) return 'handled';
      var ctrlEnter = !event.altKey && event.ctrlKey && !event.metaKey && !event.shiftKey;
      var _props2 = this.props,
          sendType = _props2.sendType,
          onSendOut = _props2.onSendOut,
          id = _props2.id,
          sendToIds = _props2.sendToIds,
          siteInfo = _props2.siteInfo;

      if (ctrlEnter && sendType === __WEBPACK_IMPORTED_MODULE_21_src_constants_enums_sendType__["a" /* ctrlEnter */] || !ctrlEnter && sendType === __WEBPACK_IMPORTED_MODULE_21_src_constants_enums_sendType__["b" /* enter */]) {
        onSendOut(id, sendToIds, this.state.editorState, siteInfo);
        return 'handled';
      }
      return 'unhandled';
    }
  }, {
    key: 'selectCannedMessage',
    value: function selectCannedMessage() {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.selected;

      if (!selected) return false;
      var _props3 = this.props,
          id = _props3.id,
          visitor = _props3.visitor,
          agent = _props3.agent,
          onCannedMessageUse = _props3.onCannedMessageUse;

      var editorState = this.state.editorState;
      var position = getTokenPosition(editorState);
      if (!position) return false;
      if (selected && selected.id && onCannedMessageUse) {
        onCannedMessageUse(id, selected.id);
        this.shouldScroll = true;
      }
      this.setState({
        selected: undefined,
        cannedMessages: [],
        editorState: __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["h" /* replaceText */](editorState, position.key, position.start, position.end, __WEBPACK_IMPORTED_MODULE_26_src_utils_common__["l" /* replaceMacros */](selected.content, visitor, agent))
      });
      return true;
    }
  }, {
    key: 'showDragging',
    value: function showDragging(event) {
      if (this.cancelToken) return;
      if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(event.dataTransfer.types).some(function (type) {
        return type === 'Files';
      }) > 0) {
        this.setState({ isDragging: true });
      }
    }
  }, {
    key: 'hideDragging',
    value: function hideDragging() {
      this.setState({ isDragging: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props4 = this.props,
          sendType = _props4.sendType,
          onSendTypeSelect = _props4.onSendTypeSelect,
          onSendOut = _props4.onSendOut,
          sendToIds = _props4.sendToIds,
          id = _props4.id,
          siteInfo = _props4.siteInfo,
          disabled = _props4.disabled,
          selectedFontSize = _props4.selectedFontSize,
          textDirectionIfRTL = _props4.textDirectionIfRTL,
          disablePaste = _props4.disablePaste;
      var _state2 = this.state,
          isDragging = _state2.isDragging,
          cannedMessages = _state2.cannedMessages,
          selected = _state2.selected,
          editorState = _state2.editorState;

      var isFocused = __WEBPACK_IMPORTED_MODULE_24_src_utils_editor__["g" /* getHasFocus */](editorState);
      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_17_classnames___default()(__WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.container, disabled && __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.disabled, !disabled && isFocused && __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.focused, !disabled && isDragging && __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.dragging, getFontSizeClass(selectedFontSize), textDirectionIfRTL ? __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.directionRTL : ''),
          onDragOver: !disabled && this.showDragging,
          onDragLeave: !disabled && this.hideDragging,
          onDragEnd: !disabled && this.hideDragging,
          onDrop: !disabled && this.hideDragging,
          ref: function ref(container) {
            _this5.container = container;
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_30__Selection__["a" /* default */], {
          display: !disabled && isFocused,
          selected: selected,
          cannedMessages: cannedMessages,
          onSelect: this.selectCannedMessage,
          cleanSelection: cleanSelection
        }),
        __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_draft_js__["Editor"], {
          editorState: editorState,
          onChange: this.onChange,
          spellCheck: true,
          handleKeyCommand: this.handleKeyCommand,
          blockRendererFn: mediaBlockRenderer,
          handleReturn: this.handleReturn,
          onUpArrow: this.onUpArrow,
          onDownArrow: this.onDownArrow,
          onTab: this.onTab,
          onEscape: this.onEscape,
          ref: function ref(element) {
            _this5.editor = element;
          },
          handleDroppedFiles: function handleDroppedFiles(selection, files) {
            return _this5.onUpload(files);
          },
          stripPastedStyles: true,
          handlePastedFiles: function handlePastedFiles(files) {
            if (disablePaste) return;
            _this5.onPaste(files);
          },
          handlePastedText: function handlePastedText() {
            _this5.shouldScroll = true;
          },
          readOnly: disabled
        }),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_31__SendButton__["a" /* default */], {
          id: id,
          sendToIds: sendToIds,
          editorState: editorState,
          className: __WEBPACK_IMPORTED_MODULE_28__TextEditor_css___default.a.buttonGroup,
          onSelect: onSendTypeSelect,
          type: sendType,
          onClick: function onClick(i, s, e) {
            return onSendOut(i, s, e, siteInfo);
          },
          disabled: disabled
        })
      );
    }
  }]);

  return TextEditor;
}(__WEBPACK_IMPORTED_MODULE_13_react___default.a.Component);

/* istanbul ignore next */

/* harmony default export */ __webpack_exports__["a"] = (TextEditor);

/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ctrlEnter; });
var enter = 0;
var ctrlEnter = 1;

/***/ }),

/***/ 1398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNull__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isNull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_utils_guid__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums_fontSize__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_TextEditor_TextEditor__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_agentChat__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_agent__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Business_agentChat__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_editor__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_config__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_seq__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_str__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_enums__ = __webpack_require__(3);





















var previousState = {};
var emptyEditorState = __WEBPACK_IMPORTED_MODULE_4_draft_js__["EditorState"].createEmpty();
var emptyEditorStateFocused = __WEBPACK_IMPORTED_MODULE_14__utils_editor__["c" /* createEmpty */]();
var mapStateToProps = function mapStateToProps(state) {
  var getUploadUrl = function getUploadUrl() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_helper__["l" /* formatAgentChatUploadUrl */])(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_74" /* getFileUploadUrl */](state), __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_75" /* getCurrentAgentSession */](state), __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["F" /* getSiteId */](state), 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_src_utils_guid__["a" /* createGUID */])());
  };
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isNull___default()(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_43" /* getSelectedIdForAgents */](state)) || __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_43" /* getSelectedIdForAgents */](state) === __WEBPACK_IMPORTED_MODULE_18__constants_enums__["l" /* noSelectedForAgent */]) {
    return {
      id: __WEBPACK_IMPORTED_MODULE_18__constants_enums__["l" /* noSelectedForAgent */],
      isAgent: false,
      sendToIds: [],
      editorState: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_76" /* getAgentChatEditorState */](state, __WEBPACK_IMPORTED_MODULE_18__constants_enums__["l" /* noSelectedForAgent */]) || emptyEditorState,
      sendType: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_77" /* getSendType */](state),
      cannedMessages: [],
      disabled: true,
      siteInfo: {},
      textDirectionIfRTL: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_78" /* textDirectionIfRTL */](state),
      selectedFontSize: __WEBPACK_IMPORTED_MODULE_8__constants_enums_fontSize__["a" /* middle */],
      disablePaste: true,
      files: [],
      getUploadUrl: getUploadUrl
    };
  }

  var _chatBusiness$getAgen = __WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["a" /* getAgentOrDepartmentId */](state),
      _chatBusiness$getAgen2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_chatBusiness$getAgen, 2),
      isAgent = _chatBusiness$getAgen2[0],
      id = _chatBusiness$getAgen2[1];

  if (!__WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["b" /* isActiveStatus */](state, isAgent, id)) {
    var newState = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, previousState);
    newState.disabled = true;
    return newState;
  }
  var disabled = !__WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["c" /* ifChatIsAvalable */](state, isAgent, id);
  var editorState = emptyEditorState;
  if (!disabled) {
    editorState = __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_76" /* getAgentChatEditorState */](state, id);
    if (!editorState) editorState = emptyEditorStateFocused;
  }
  previousState = {
    id: id,
    isAgent: isAgent,
    sendToIds: __WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["d" /* getSendToIds */](state, isAgent, id),
    editorState: editorState,
    sendType: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_77" /* getSendType */](state),
    cannedMessages: [],
    disabled: disabled,
    siteInfo: {
      uploadUrl: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_74" /* getFileUploadUrl */](state),
      downloadUrl: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_79" /* getFileDownloadUrl */](state),
      siteId: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["F" /* getSiteId */](state),
      sessionId: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_75" /* getCurrentAgentSession */](state),
      maxFileSize: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["Z" /* getAgentChatFileSize */](state)
    },
    textDirectionIfRTL: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_78" /* textDirectionIfRTL */](state),
    selectedFontSize: __WEBPACK_IMPORTED_MODULE_8__constants_enums_fontSize__["a" /* middle */],
    disablePaste: true,
    getUploadUrl: getUploadUrl,
    files: __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["_80" /* getAgentChatUploadFiles */](state, id)
  };
  return previousState;
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;

  var dispatchObject = {
    onStart: function onStart(chatId, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["a" /* startUpload */](chatId, filename, guid));
    },
    onProgress: function onProgress(chatId, percentage, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["b" /* uploadFile */](chatId, percentage, filename, guid));
    },
    onSuccess: function onSuccess(chatId, filename, fid, respond, sendToIds) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["b" /* uploadFile */](chatId, 100, filename, fid));
      var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_helper__["m" /* formatAgentChatDownloadUrl */])(stateProps.siteInfo.downloadUrl, stateProps.siteInfo.sessionId, stateProps.siteInfo.siteId, 1, respond.data.guid, filename);
      var guid = respond.data.guid;
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["c" /* appendFile */](__WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["e" /* filterSendToIds */](chatId, sendToIds, stateProps.isAgent), url, filename, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_seq__["b" /* isImage */])(filename)));
      sendToIds.forEach(function (agentId) {
        dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_agent__["u" /* sendFileToAgent */](agentId, filename, guid));
      });
    },
    onCancel: function onCancel(chatId, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["d" /* cancelUpload */](chatId, filename, guid));
    },
    setErrorMessage: function setErrorMessage(chatId, message) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["e" /* setErrorMessageForAgentChat */](chatId, message));
    },
    onChange: function onChange(id, editorState) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["f" /* updateContent */](id, editorState));
    },
    onSendOut: function onSendOut(id, sendToIds, editorState) {
      var lines = __WEBPACK_IMPORTED_MODULE_14__utils_editor__["d" /* convertToList */](editorState);
      if (lines.length > 0 && !__WEBPACK_IMPORTED_MODULE_17__utils_str__["d" /* isEmptyMessage */](lines[0])) {
        dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["f" /* updateContent */](id, __WEBPACK_IMPORTED_MODULE_14__utils_editor__["c" /* createEmpty */]()));
        lines.forEach(function (line) {
          if (typeof line === 'string') {
            dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agentChat__["g" /* appendOwnMessage */](__WEBPACK_IMPORTED_MODULE_13__Business_agentChat__["e" /* filterSendToIds */](id, sendToIds, stateProps.isAgent), line));
            sendToIds.forEach(function (agentId) {
              dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_agent__["v" /* sendPrivateMessageToAgent */](agentId, line));
            });
          }
        });
      }
    },
    onSendTypeSelect: function onSendTypeSelect(type) {
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_config__["e" /* updateSendType */](type));
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_agent__["g" /* setPreference */]());
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_9__components_TextEditor_TextEditor__["a" /* default */]));

/***/ }),

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_filter__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_utils_reporter__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_TextEditor_TextEditor__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_utils_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_chat__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_chatEditor__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_agent__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_config__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_editor__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_upload__ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_guid__ = __webpack_require__(544);





/* import * as perf from 'src/utils/perf'; */













var emptyEditorState = __WEBPACK_IMPORTED_MODULE_3_draft_js__["EditorState"].createEmpty();
var emptyEditorStateFocused = __WEBPACK_IMPORTED_MODULE_13__utils_editor__["c" /* createEmpty */]();

var mapStateToProps = function mapStateToProps(state) {
  var id = __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_42" /* getSelectedChatId */](state);
  if (!id) return {};
  var visitor = __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["r" /* getVisitorByChatId */](state, id);
  var agentId = __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var disabled = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_common__["k" /* isSendingMessageAllowed */])(visitor, agentId);
  var editorState = emptyEditorState;
  if (!disabled) {
    editorState = __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["M" /* getChatEditorState */](state, id) || emptyEditorStateFocused;
  }
  var visitorId = __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["N" /* getVisitorIdByChatId */](state, id);
  return {
    id: id,
    disabled: disabled,
    sendToIds: visitorId,
    editorState: editorState,
    sendType: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_77" /* getSendType */](state),
    cannedMessages: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_83" /* getCannedMessagesWithShortcuts */](state),
    visitor: visitor,
    agent: {
      name: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_84" /* getCurrentAgentName */](state),
      email: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_15" /* getCurrentAgentEmail */](state)
    },
    siteInfo: {
      uploadUrl: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_74" /* getFileUploadUrl */](state),
      downloadUrl: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_79" /* getFileDownloadUrl */](state),
      siteId: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["F" /* getSiteId */](state),
      agentId: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["u" /* getCurrentAgentId */](state),
      sessionId: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_75" /* getCurrentAgentSession */](state),
      maxFileSize: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_85" /* getMaxFileSize */](state),
      maxFileNum: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_86" /* getMaxFileNum */](state)
    },
    selectedFontSize: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_87" /* getFontSize */](state),
    textDirectionIfRTL: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_78" /* textDirectionIfRTL */](state),
    files: __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_88" /* getUploadedFiles */](state, id),
    getUploadUrl: function getUploadUrl() {
      return __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_74" /* getFileUploadUrl */](state) + '?sessionId=' + __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["_75" /* getCurrentAgentSession */](state) + '&visitorId=' + visitorId + '&siteId=' + __WEBPACK_IMPORTED_MODULE_8__reducers_selectors__["F" /* getSiteId */](state);
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(id, editorState) {
      dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_chatEditor__["updateContent"](id, editorState));
    },
    onSendOut: function onSendOut(id, visitorId, editorState, _ref) {
      var uploadUrl = _ref.uploadUrl,
          siteId = _ref.siteId,
          agentId = _ref.agentId,
          sessionId = _ref.sessionId,
          maxFileNum = _ref.maxFileNum;

      var lines = __WEBPACK_IMPORTED_MODULE_13__utils_editor__["d" /* convertToList */](editorState);
      if (lines.length > 1 || !/^\s*$/.test(lines[0])) {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash_filter___default()(lines, function (line) {
          return line instanceof Blob;
        }).length > maxFileNum) {
          dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["a" /* setErrorMessageForChat */](id, 'Error sending image: The max number of images you can paste at a time is ' + maxFileNum));
        } else {
          dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_chatEditor__["updateContent"](id, __WEBPACK_IMPORTED_MODULE_13__utils_editor__["c" /* createEmpty */]()));
          __WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(lines, function (line) {
            if (typeof line === 'string') {
              if (line !== null && !/^\s*$/.test(line)) {
                dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agent__["f" /* sendText */](visitorId, line));
              }
            } else if (line instanceof Blob) {
              var imageId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_guid__["a" /* createGUID */])();
              dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agent__["x" /* sendImageStart */](visitorId, imageId, function (guid) {
                if ((typeof guid === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(guid)) === 'object' && guid.errorString) {
                  dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["a" /* setErrorMessageForChat */](id, 'Error sending image: ' + guid.errorString));
                } else {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__services_upload__["b" /* uploadImage */])(line, uploadUrl, guid, siteId, sessionId, visitorId, agentId);
                }
              }));
            } else if (true) {
              __WEBPACK_IMPORTED_MODULE_5_src_utils_reporter__["a" /* error */](new Error('unkown line'), 'ChatTextEditor', 82, 0);
            }
          });
        }
      }
    },
    onStart: function onStart(chatId, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["b" /* startUpload */](chatId, filename, guid));
    },
    onProgress: function onProgress(chatId, percentage, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["c" /* uploadFile */](chatId, percentage, filename, guid));
    },
    onSuccess: function onSuccess(chatId, filename, guid, resp) {
      if (resp && resp.data !== 'success') {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["d" /* cancelUpload */](chatId, filename, guid));
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["a" /* setErrorMessageForChat */](chatId, 'Error sending file: ' + resp.data));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["c" /* uploadFile */](chatId, 100, filename, guid));
      }
    },
    onCancel: function onCancel(chatId, filename, guid) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["d" /* cancelUpload */](chatId, filename, guid));
    },
    setErrorMessage: function setErrorMessage(chatId, message) {
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["a" /* setErrorMessageForChat */](chatId, message));
    },
    onSendTypeSelect: function onSendTypeSelect(type) {
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_config__["e" /* updateSendType */](type));
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agent__["g" /* setPreference */]());
    },
    onCannedMessageUse: function onCannedMessageUse(chatId, cannedMessageId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_11__actions_agent__["e" /* agentUseCannedMessage */](chatId, cannedMessageId));
    }
  };
};

if (true) {
  /* mapStateToProps = perf.markFunctionCall('ChatTextEditor: mapStateToProp', mapStateToProps); */
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_6_src_components_TextEditor_TextEditor__["a" /* default */]));

/***/ }),

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_guid__ = __webpack_require__(544);
/* unused harmony export agentChatUpload */
/* harmony export (immutable) */ __webpack_exports__["a"] = uploadFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = uploadImage;





function agentChatUpload(file, uploadUrlBase, downloadUrlBase, siteId, sessionId, onUploadProgress) {
  var uploadUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_helper__["l" /* formatAgentChatUploadUrl */])(uploadUrlBase, sessionId, siteId, 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_guid__["a" /* createGUID */])());
  var data = new FormData();
  data.append('file', file);
  var config = {};
  if (onUploadProgress) {
    config.onUploadProgress = function (progressEvent) {
      var progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      onUploadProgress(progress);
    };
  }
  return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(uploadUrl, data, config).then(function (respond) {
    return {
      url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_helper__["m" /* formatAgentChatDownloadUrl */])(downloadUrlBase, sessionId, siteId, 1, respond.data.guid, file.name),
      guid: respond.data.guid
    };
  });
}

function uploadFile(file, uploadUrl, config) {
  var data = new FormData();
  data.append('file', file);
  return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(uploadUrl, data, config);
}

var readBlobToArrayBuffer = function readBlobToArrayBuffer(blob) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    try {
      var fileReader = new FileReader();
      fileReader.onload = function () {
        return resolve(fileReader.result);
      };
      fileReader.readAsArrayBuffer(blob);
    } catch (e) {
      reject(e);
    }
  });
};

function uploadImage(image, uploadUrlBase, guid, siteId, sessionId, visitorId, agentId, onUploadProgress) {
  var uploadUrl = uploadUrlBase + '?siteId=' + siteId + '&operatorId=' + agentId + '&visitorId=' + visitorId + '&sessionId=' + sessionId + '&isImage=true&guid=' + guid + '&fileDisplayName=' + guid + '.png';
  var config = {};
  if (onUploadProgress) {
    config.onUploadProgress = function (progressEvent) {
      var progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      onUploadProgress(progress);
    };
  }
  return readBlobToArrayBuffer(image).then(function (data) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(uploadUrl, data, config);
  });
}

/***/ }),

/***/ 1574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_enums__ = __webpack_require__(3);





/**
 * Currently, this component is for displaying image inside editor only
 */

var Media = function Media(props) {
  var entity = __WEBPACK_IMPORTED_MODULE_2_draft_js__["Entity"].get(props.block.getEntityAt(0));

  var _entity$getData = entity.getData(),
      src = _entity$getData.src;

  var type = entity.getType();

  if (type === __WEBPACK_IMPORTED_MODULE_3__constants_enums__["h" /* mediaType */].image) return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
    src: src,
    alt: 'uploaded'
  });
  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (Media);

/***/ }),

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_utils_browser__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TextEditor_css__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__TextEditor_css__);












/** line-height property of each line */
var lineHeight = 25;
/** total number of lines displayed in panel */
var lineCount = 8;
/** above two values will determine how height the component is */
var containerMaxHeight = lineHeight * lineCount;

var getContainerHeight = function getContainerHeight(cannedMessageLength) {
  return Math.min(lineHeight * cannedMessageLength, containerMaxHeight);
};

var Selection = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Selection, _React$Component);

  function Selection(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Selection);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Selection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Selection)).call(this, props));

    _this.container = null;
    _this.updatePosition = _this.updatePosition.bind(_this);
    _this.cleanSelection = _this.cleanSelection.bind(_this);
    _this.timer = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Selection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updatePosition);
      window.addEventListener('click', this.cleanSelection);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (!this.container) return;
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      // need to update after this cycle, otherwise deleting char will causing `rect` to be undefined
      this.timer = setTimeout(function () {
        _this2.updatePosition();
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updatePosition);
      window.removeEventListener('click', this.cleanSelection);
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      var selection = window.getSelection();
      // Do not modify position, if focus is inside this component
      // usually happend when mouse click on one canned message
      if (!this.container || this.container.contains(selection.anchorNode)) {
        return;
      }
      if (!this.props.display) {
        this.container.style.display = 'none';
        return;
      }

      var containerHeight = getContainerHeight(this.props.cannedMessages.length);
      var rect = selection.getRangeAt(0).getClientRects()[0];
      this.container.style.top = rect.top - containerHeight + 'px';
      this.container.style.left = rect.left + 20 + 'px';

      // show element only after position modified
      this.container.style.display = 'block';

      // modify scrollbar
      // Use Math.round here, as this.container.scrollTop might be slightly smaller than lineHeight
      // e.g. this.container.scrollTop = 24.666, while lineHeight = 25
      var currentTopIndex = Math.round(this.container.scrollTop / lineHeight);
      var selectedIndex = this.index;
      if (selectedIndex < currentTopIndex) {
        // selected is higher than viewport, need to scroll up
        this.container.scrollTop = selectedIndex * lineHeight;
      } else if (currentTopIndex + lineCount <= selectedIndex) {
        // selected is lower than viewport, need to scroll down
        this.container.scrollTop = (selectedIndex - lineCount + 1) * lineHeight;
      }
    }
  }, {
    key: 'cleanSelection',
    value: function cleanSelection(event) {
      if (this.container && event.target !== this.container) {
        this.props.cleanSelection();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          selected = _props.selected,
          cannedMessages = _props.cannedMessages,
          onSelect = _props.onSelect,
          cleanSelection = _props.cleanSelection;
      // no need to show component, if potential cannedmessage list is empty

      if (!cannedMessages || cannedMessages.length === 0) return null;
      var containerHeight = getContainerHeight(cannedMessages.length);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        {
          ref: function ref(container) {
            _this3.container = container;
          },
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.selection, __WEBPACK_IMPORTED_MODULE_9_src_utils_browser__["d" /* isIE */] && __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.ie),
          style: {
            /**
             * `this.container` does not exists indicate the initial position of this component is
             * still unkown (`componentDidMount` hasn't been called yet).
             *
             * Thus, hide this component first. `componentDidMount` will display this component after
             * position has been updated.
             */
            display: !this.container && 'none',
            height: containerHeight,
            overflowY: cannedMessages.length > lineCount ? 'scroll' : 'auto'
          }
        },
        cannedMessages.map(function (msg, i) {
          var _classnames;

          var chosen = msg === selected;
          // cache selected index. Can be used later and also in `componentDidMount`
          if (chosen) _this3.index = i;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
            className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.selected, chosen), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.unselected, !chosen), _classnames)),
            style: {
              height: lineHeight,
              lineHeight: lineHeight + 'px',
              /**
               * IE (some version) has issue when selecting canned message via click
               * blur event triggeres first from TextEditor, which causes re-render
               * onClick event is then possibly (not always) not triggered as DOM re-draw
               * (also possible due to workaround for issue 18804)
               *
               * Anyway, disable CSS style of hover and cursor here. Not to emphasis that mouse
               * click is possible.
               */
              cursor: __WEBPACK_IMPORTED_MODULE_9_src_utils_browser__["d" /* isIE */] ? 'default' : 'pointer'
            },
            onClick: function onClick(e) {
              e.preventDefault();
              e.stopPropagation();
              onSelect(msg);
              cleanSelection();
            }
          }, msg.id, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
            className: __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.key
          }, void 0, '#' + msg.shortcut.toLowerCase()), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
            className: __WEBPACK_IMPORTED_MODULE_10__TextEditor_css___default.a.value
          }, void 0, msg.content));
        })
      );
    }
  }]);

  return Selection;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Selection);

/***/ }),

/***/ 1576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Icons_Icon__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_constants_iconTypes__ = __webpack_require__(1593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextEditor_css__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TextEditor_css__);






var SelectionLine = function SelectionLine(_ref) {
  var text = _ref.text,
      selected = _ref.selected,
      onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: selected ? __WEBPACK_IMPORTED_MODULE_4__TextEditor_css___default.a.selectedLine : __WEBPACK_IMPORTED_MODULE_4__TextEditor_css___default.a.unselectedLine,
    onClick: !selected && onClick
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_src_components_Icons_Icon__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3_src_constants_iconTypes__["a" /* default */].success
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, text));
};

/* harmony default export */ __webpack_exports__["a"] = (SelectionLine);

/***/ }),

/***/ 1577:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_Button_Button__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_sendType__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SelectionLine__ = __webpack_require__(1576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TextEditor_css__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TextEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__TextEditor_css__);














var SendButton = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SendButton, _React$Component);

  function SendButton(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SendButton);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendButton.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SendButton)).call(this, props));

    _this.state = { toggle: false };
    _this.onToggle = _this.onToggle.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SendButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.listener = function (event) {
        if (_this2.selection && !_this2.selection.contains(event.target) && _this2.state.toggle) {
          _this2.setState({ toggle: false });
        }
      };
      window.addEventListener('click', this.listener, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.listener);
    }
  }, {
    key: 'onToggle',
    value: function onToggle(e) {
      e.stopPropagation();
      this.setState({ toggle: !this.state.toggle });
    }
  }, {
    key: 'onSelect',
    value: function onSelect(type) {
      this.props.onSelect(type);
      this.setState({ toggle: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          type = _props.type,
          _onClick = _props.onClick,
          id = _props.id,
          sendToIds = _props.sendToIds,
          editorState = _props.editorState,
          disabled = _props.disabled;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this3.selection = element;
          } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          style: { display: !disabled && this.state.toggle ? 'block' : 'none' },
          className: __WEBPACK_IMPORTED_MODULE_12__TextEditor_css___default.a.sendType
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__SelectionLine__["a" /* default */], {
          text: 'Press Enter to Send',
          onClick: function onClick() {
            return _this3.onSelect(__WEBPACK_IMPORTED_MODULE_8_src_constants_enums_sendType__["b" /* enter */]);
          },
          selected: type === __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_sendType__["b" /* enter */]
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__SelectionLine__["a" /* default */], {
          text: 'Press Ctrl+Enter to Send',
          onClick: function onClick() {
            return _this3.onSelect(__WEBPACK_IMPORTED_MODULE_8_src_constants_enums_sendType__["a" /* ctrlEnter */]);
          },
          selected: type === __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_sendType__["a" /* ctrlEnter */]
        })),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: className
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_src_components_Button_Button__["a" /* default */], {
          type: 'primary',
          text: 'Send',
          onClick: function onClick() {
            return _onClick(id, sendToIds, editorState);
          },
          disabled: disabled
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7_src_components_Button_Button__["a" /* default */], {
          type: 'primary',
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_12__TextEditor_css___default.a.arrowDownIcon,
          icon: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
            type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].arrowDown
          }),
          onClick: this.onToggle
        }))
      );
    }
  }]);

  return SendButton;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SendButton);

/***/ }),

/***/ 1593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css__);


/* harmony default export */ __webpack_exports__["a"] = ({
  loading: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.loading,
  loginuser: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.loginuser,
  loginpassword: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.loginpassword,
  loginhelp: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.loginhelp,
  settingsIcon: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.settingsIcon,
  statusOnline: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.statusOnline,
  statusAway: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.statusAway,
  controlIcon: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.controlIcon,
  arrowDown: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.arrowDown,
  success: __WEBPACK_IMPORTED_MODULE_0__components_Icons_Icon_css___default.a.success
});

/***/ }),

/***/ 1618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* unused harmony export readAsDataURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isImageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFileExceedMaxSize; });

var readAsDataURL = function readAsDataURL(file) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result, file);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

var isImageFile = function isImageFile(file) {
  return file.type.indexOf('image') === 0;
};

var isFileExceedMaxSize = function isFileExceedMaxSize(maxSize) {
  return function (file) {
    return file.size > maxSize;
  };
};

/***/ }),

/***/ 1665:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1681:
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 1682:
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(1681),
    baseAggregator = __webpack_require__(1682),
    baseIteratee = __webpack_require__(149),
    isArray = __webpack_require__(9);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

var createAggregator = __webpack_require__(1695);

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * _.partition(users, function(o) { return o.active; });
 * // => objects for [['fred'], ['barney', 'pebbles']]
 *
 * // The `_.matches` iteratee shorthand.
 * _.partition(users, { 'age': 1, 'active': false });
 * // => objects for [['pebbles'], ['barney', 'fred']]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.partition(users, ['active', false]);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * // The `_.property` iteratee shorthand.
 * _.partition(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = error;
/* unused harmony export track */
function error(e, source, line, column) {
  if (true) {
    console.error(e, source, line, column);
  } else if (window.monitor && typeof window.monitor.error === 'function') {
    window.monitor.error(e, source, line, column);
  }
}

function track(action) {
  if (true) {
    console.debug('Track Action:', action);
  } else if (window.monitor && typeof window.monitor.track === 'function') {
    window.monitor.track(action);
  }
}

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return newChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return deleteChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return chatVisitorLeaved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return chatEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return tryCloseChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return newUnfinishedWrapup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onRequestedSecureForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return onGetSecureFormContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return initSendTranscriptForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onUpdateIfPopTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setErrorMessageForChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return clearG2mStartUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateIfShowNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return audioAndVideoWidthChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setP2PChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return startUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cancelUpload; });



var newChat = function newChat(id, visitorId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["b" /* newChat */],
    payload: visitorId,
    meta: id
  };
};

var deleteChat = function deleteChat(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["c" /* deleteChat */],
    meta: id
  };
};

var chatVisitorLeaved = function chatVisitorLeaved(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["t" /* chatVisitorLeaved */],
    meta: id
  };
};

var chatEnded = function chatEnded(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["h" /* chatEnded */],
    meta: id
  };
};

var tryCloseChat = function tryCloseChat(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["d" /* tryCloseChat */],
    meta: id
  };
};

var newUnfinishedWrapup = function newUnfinishedWrapup(unfinishedWrapup) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["g" /* newUnfinishedWrapup */],
    payload: unfinishedWrapup
  };
};

var onRequestedSecureForm = function onRequestedSecureForm(id, token, rsaKey) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["i" /* requestedSecureForm */],
    payload: { token: token, rsaKey: rsaKey },
    meta: id
  };
};

var onGetSecureFormContent = function onGetSecureFormContent(id, token, content) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["j" /* getSecureFormContent */],
    payload: { token: token, content: content },
    meta: id
  };
};

var initSendTranscriptForm = function initSendTranscriptForm(initialValues) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_form__["initialize"])('sendTranscript', initialValues);
};

var onUpdateIfPopTranslation = function onUpdateIfPopTranslation(chatId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["k" /* updateIfPopTranslation */],
    payload: chatId
  };
};

var setErrorMessageForChat = function setErrorMessageForChat(id, errorMsg) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["l" /* setErrorMessageForChat */],
    payload: errorMsg,
    meta: id
  };
};
var clearG2mStartUrl = function clearG2mStartUrl(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["m" /* clearG2mStartUrl */],
    meta: id
  };
};
var updateScrollTop = function updateScrollTop(id, scrollTop) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["f" /* updateScrollTop */],
    payload: scrollTop,
    meta: id
  };
};
var updateIfShowNotify = function updateIfShowNotify(id, ifShowNotify) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["n" /* updateIfShowNotify */],
    payload: ifShowNotify,
    meta: id
  };
};
var audioAndVideoWidthChanged = function audioAndVideoWidthChanged(id, info) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["o" /* audioAndVideoWidthChanged */],
    payload: info,
    meta: id
  };
};
var setP2PChat = function setP2PChat(id, p2pChat) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["p" /* setP2PChat */],
    payload: p2pChat,
    meta: id
  };
};

var startUpload = function startUpload(chatId, filename, guid) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["q" /* startUpload */],
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
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["r" /* uploadFile */],
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
    type: __WEBPACK_IMPORTED_MODULE_1__constants_types_chat__["s" /* cancelUpload */],
    payload: { filename: filename, guid: guid },
    meta: chatId
  };
};

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDraggableSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFileReaderSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServiceWorkerSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supportPlaceholder; });
var isDraggableSupport = function () {
  var div = document.createElement('div');
  return 'draggable' in div || 'ondragstart' in div && 'ondrop' in div;
}();

var isFileReaderSupport = 'FileReader' in window;

var isIE =
/** for IE < 11 */
navigator && navigator.userAgent.indexOf('MSIE') >= 0 ||
/**
 * IE 11 has special userAgent, use following way to detect
 * see: [http://stackoverflow.com/questions/21825157/internet-explorer-11-detection]
 */
!!window.MSInputMethodContext && !!document.documentMode;

var isFirefox = navigator.userAgent.indexOf('Firefox') >= 0;

var isServiceWorkerSupport = 'serviceWorker' in navigator;

// 为text area 提供兼容性所有浏览器的 place holder.
var supportPlaceholder = function supportPlaceholder(ele, tips) {
  var elem = ele;
  if (elem && document.activeElement !== elem) {
    // && !('placeholder' in elem)
    var txt = tips; // elem.getAttribute('data_placeholder');
    if (elem.value === '') {
      elem.value = txt;
      elem.setAttribute('style', 'color: #bbb !important');
    } // ele.getAttribute('text');
    elem.onfocus = function () {
      if (elem.value === txt) {
        elem.value = '';
      }
      elem.setAttribute('style', 'color: #000 !important');
    };
    elem.onblur = function () {
      if (elem.value === '') {
        elem.value = txt;
        elem.setAttribute('style', 'color: #bbb !important');
      }
    };
  }
};

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EditorState
 * 
 */



var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlockTree = __webpack_require__(929);
var ContentState = __webpack_require__(896);
var EditorBidiService = __webpack_require__(1031);
var Immutable = __webpack_require__(106);
var SelectionState = __webpack_require__(876);

var OrderedSet = Immutable.OrderedSet;
var Record = Immutable.Record;
var Stack = Immutable.Stack;


var defaultRecord = {
  allowUndo: true,
  currentContent: null,
  decorator: null,
  directionMap: null,
  forceSelection: false,
  inCompositionMode: false,
  inlineStyleOverride: null,
  lastChangeType: null,
  nativelyRenderedContent: null,
  redoStack: Stack(),
  selection: null,
  treeMap: null,
  undoStack: Stack()
};

var EditorStateRecord = Record(defaultRecord);

var EditorState = function () {
  EditorState.createEmpty = function createEmpty(decorator) {
    return EditorState.createWithContent(ContentState.createFromText(''), decorator);
  };

  EditorState.createWithContent = function createWithContent(contentState, decorator) {
    var firstKey = contentState.getBlockMap().first().getKey();
    return EditorState.create({
      currentContent: contentState,
      undoStack: Stack(),
      redoStack: Stack(),
      decorator: decorator || null,
      selection: SelectionState.createEmpty(firstKey)
    });
  };

  EditorState.create = function create(config) {
    var currentContent = config.currentContent;
    var decorator = config.decorator;

    var recordConfig = _extends({}, config, {
      treeMap: generateNewTreeMap(currentContent, decorator),
      directionMap: EditorBidiService.getDirectionMap(currentContent)
    });
    return new EditorState(new EditorStateRecord(recordConfig));
  };

  EditorState.set = function set(editorState, put) {
    var map = editorState.getImmutable().withMutations(function (state) {
      var existingDecorator = state.get('decorator');
      var decorator = existingDecorator;
      if (put.decorator === null) {
        decorator = null;
      } else if (put.decorator) {
        decorator = put.decorator;
      }

      var newContent = put.currentContent || editorState.getCurrentContent();

      if (decorator !== existingDecorator) {
        var treeMap = state.get('treeMap');
        var newTreeMap;
        if (decorator && existingDecorator) {
          newTreeMap = regenerateTreeForNewDecorator(newContent.getBlockMap(), treeMap, decorator, existingDecorator);
        } else {
          newTreeMap = generateNewTreeMap(newContent, decorator);
        }

        state.merge({
          decorator: decorator,
          treeMap: newTreeMap,
          nativelyRenderedContent: null
        });
        return;
      }

      var existingContent = editorState.getCurrentContent();
      if (newContent !== existingContent) {
        state.set('treeMap', regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), decorator));
      }

      state.merge(put);
    });

    return new EditorState(map);
  };

  EditorState.prototype.toJS = function toJS() {
    return this.getImmutable().toJS();
  };

  EditorState.prototype.getAllowUndo = function getAllowUndo() {
    return this.getImmutable().get('allowUndo');
  };

  EditorState.prototype.getCurrentContent = function getCurrentContent() {
    return this.getImmutable().get('currentContent');
  };

  EditorState.prototype.getUndoStack = function getUndoStack() {
    return this.getImmutable().get('undoStack');
  };

  EditorState.prototype.getRedoStack = function getRedoStack() {
    return this.getImmutable().get('redoStack');
  };

  EditorState.prototype.getSelection = function getSelection() {
    return this.getImmutable().get('selection');
  };

  EditorState.prototype.getDecorator = function getDecorator() {
    return this.getImmutable().get('decorator');
  };

  EditorState.prototype.isInCompositionMode = function isInCompositionMode() {
    return this.getImmutable().get('inCompositionMode');
  };

  EditorState.prototype.mustForceSelection = function mustForceSelection() {
    return this.getImmutable().get('forceSelection');
  };

  EditorState.prototype.getNativelyRenderedContent = function getNativelyRenderedContent() {
    return this.getImmutable().get('nativelyRenderedContent');
  };

  EditorState.prototype.getLastChangeType = function getLastChangeType() {
    return this.getImmutable().get('lastChangeType');
  };

  /**
   * While editing, the user may apply inline style commands with a collapsed
   * cursor, intending to type text that adopts the specified style. In this
   * case, we track the specified style as an "override" that takes precedence
   * over the inline style of the text adjacent to the cursor.
   *
   * If null, there is no override in place.
   */


  EditorState.prototype.getInlineStyleOverride = function getInlineStyleOverride() {
    return this.getImmutable().get('inlineStyleOverride');
  };

  EditorState.setInlineStyleOverride = function setInlineStyleOverride(editorState, inlineStyleOverride) {
    return EditorState.set(editorState, { inlineStyleOverride: inlineStyleOverride });
  };

  /**
   * Get the appropriate inline style for the editor state. If an
   * override is in place, use it. Otherwise, the current style is
   * based on the location of the selection state.
   */


  EditorState.prototype.getCurrentInlineStyle = function getCurrentInlineStyle() {
    var override = this.getInlineStyleOverride();
    if (override != null) {
      return override;
    }

    var content = this.getCurrentContent();
    var selection = this.getSelection();

    if (selection.isCollapsed()) {
      return getInlineStyleForCollapsedSelection(content, selection);
    }

    return getInlineStyleForNonCollapsedSelection(content, selection);
  };

  EditorState.prototype.getBlockTree = function getBlockTree(blockKey) {
    return this.getImmutable().getIn(['treeMap', blockKey]);
  };

  EditorState.prototype.isSelectionAtStartOfContent = function isSelectionAtStartOfContent() {
    var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
    return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
  };

  EditorState.prototype.isSelectionAtEndOfContent = function isSelectionAtEndOfContent() {
    var content = this.getCurrentContent();
    var blockMap = content.getBlockMap();
    var last = blockMap.last();
    var end = last.getLength();
    return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
  };

  EditorState.prototype.getDirectionMap = function getDirectionMap() {
    return this.getImmutable().get('directionMap');
  };

  /**
   * Incorporate native DOM selection changes into the EditorState. This
   * method can be used when we simply want to accept whatever the DOM
   * has given us to represent selection, and we do not need to re-render
   * the editor.
   *
   * To forcibly move the DOM selection, see `EditorState.forceSelection`.
   */


  EditorState.acceptSelection = function acceptSelection(editorState, selection) {
    return updateSelection(editorState, selection, false);
  };

  /**
   * At times, we need to force the DOM selection to be where we
   * need it to be. This can occur when the anchor or focus nodes
   * are non-text nodes, for instance. In this case, we want to trigger
   * a re-render of the editor, which in turn forces selection into
   * the correct place in the DOM. The `forceSelection` method
   * accomplishes this.
   *
   * This method should be used in cases where you need to explicitly
   * move the DOM selection from one place to another without a change
   * in ContentState.
   */


  EditorState.forceSelection = function forceSelection(editorState, selection) {
    if (!selection.getHasFocus()) {
      selection = selection.set('hasFocus', true);
    }
    return updateSelection(editorState, selection, true);
  };

  /**
   * Move selection to the end of the editor without forcing focus.
   */


  EditorState.moveSelectionToEnd = function moveSelectionToEnd(editorState) {
    var content = editorState.getCurrentContent();
    var lastBlock = content.getLastBlock();
    var lastKey = lastBlock.getKey();
    var length = lastBlock.getLength();

    return EditorState.acceptSelection(editorState, new SelectionState({
      anchorKey: lastKey,
      anchorOffset: length,
      focusKey: lastKey,
      focusOffset: length,
      isBackward: false
    }));
  };

  /**
   * Force focus to the end of the editor. This is useful in scenarios
   * where we want to programmatically focus the input and it makes sense
   * to allow the user to continue working seamlessly.
   */


  EditorState.moveFocusToEnd = function moveFocusToEnd(editorState) {
    var afterSelectionMove = EditorState.moveSelectionToEnd(editorState);
    return EditorState.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
  };

  /**
   * Push the current ContentState onto the undo stack if it should be
   * considered a boundary state, and set the provided ContentState as the
   * new current content.
   */


  EditorState.push = function push(editorState, contentState, changeType) {
    if (editorState.getCurrentContent() === contentState) {
      return editorState;
    }

    var forceSelection = changeType !== 'insert-characters';
    var directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());

    if (!editorState.getAllowUndo()) {
      return EditorState.set(editorState, {
        currentContent: contentState,
        directionMap: directionMap,
        lastChangeType: changeType,
        selection: contentState.getSelectionAfter(),
        forceSelection: forceSelection,
        inlineStyleOverride: null
      });
    }

    var selection = editorState.getSelection();
    var currentContent = editorState.getCurrentContent();
    var undoStack = editorState.getUndoStack();
    var newContent = contentState;

    if (selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType)) {
      undoStack = undoStack.push(currentContent);
      newContent = newContent.set('selectionBefore', selection);
    } else if (changeType === 'insert-characters' || changeType === 'backspace-character' || changeType === 'delete-character') {
      // Preserve the previous selection.
      newContent = newContent.set('selectionBefore', currentContent.getSelectionBefore());
    }

    var inlineStyleOverride = editorState.getInlineStyleOverride();

    // Don't discard inline style overrides on block type or depth changes.
    if (changeType !== 'adjust-depth' && changeType !== 'change-block-type') {
      inlineStyleOverride = null;
    }

    var editorStateChanges = {
      currentContent: newContent,
      directionMap: directionMap,
      undoStack: undoStack,
      redoStack: Stack(),
      lastChangeType: changeType,
      selection: contentState.getSelectionAfter(),
      forceSelection: forceSelection,
      inlineStyleOverride: inlineStyleOverride
    };

    return EditorState.set(editorState, editorStateChanges);
  };

  /**
   * Make the top ContentState in the undo stack the new current content and
   * push the current content onto the redo stack.
   */


  EditorState.undo = function undo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }

    var undoStack = editorState.getUndoStack();
    var newCurrentContent = undoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }

    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

    return EditorState.set(editorState, {
      currentContent: newCurrentContent,
      directionMap: directionMap,
      undoStack: undoStack.shift(),
      redoStack: editorState.getRedoStack().push(currentContent),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: 'undo',
      nativelyRenderedContent: null,
      selection: currentContent.getSelectionBefore()
    });
  };

  /**
   * Make the top ContentState in the redo stack the new current content and
   * push the current content onto the undo stack.
   */


  EditorState.redo = function redo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }

    var redoStack = editorState.getRedoStack();
    var newCurrentContent = redoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }

    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

    return EditorState.set(editorState, {
      currentContent: newCurrentContent,
      directionMap: directionMap,
      undoStack: editorState.getUndoStack().push(currentContent),
      redoStack: redoStack.shift(),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: 'redo',
      nativelyRenderedContent: null,
      selection: newCurrentContent.getSelectionAfter()
    });
  };

  /**
   * Not for public consumption.
   */


  function EditorState(immutable) {
    _classCallCheck(this, EditorState);

    this._immutable = immutable;
  }

  /**
   * Not for public consumption.
   */


  EditorState.prototype.getImmutable = function getImmutable() {
    return this._immutable;
  };

  return EditorState;
}();

/**
 * Set the supplied SelectionState as the new current selection, and set
 * the `force` flag to trigger manual selection placement by the view.
 */


function updateSelection(editorState, selection, forceSelection) {
  return EditorState.set(editorState, {
    selection: selection,
    forceSelection: forceSelection,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  });
}

/**
 * Regenerate the entire tree map for a given ContentState and decorator.
 * Returns an OrderedMap that maps all available ContentBlock objects.
 */
function generateNewTreeMap(contentState, decorator) {
  return contentState.getBlockMap().map(function (block) {
    return BlockTree.generate(block, decorator);
  }).toOrderedMap();
}

/**
 * Regenerate tree map objects for all ContentBlocks that have changed
 * between the current editorState and newContent. Returns an OrderedMap
 * with only changed regenerated tree map objects.
 */
function regenerateTreeForNewBlocks(editorState, newBlockMap, decorator) {
  var prevBlockMap = editorState.getCurrentContent().getBlockMap();
  var prevTreeMap = editorState.getImmutable().get('treeMap');
  return prevTreeMap.merge(newBlockMap.toSeq().filter(function (block, key) {
    return block !== prevBlockMap.get(key);
  }).map(function (block) {
    return BlockTree.generate(block, decorator);
  }));
}

/**
 * Generate tree map objects for a new decorator object, preserving any
 * decorations that are unchanged from the previous decorator.
 *
 * Note that in order for this to perform optimally, decoration Lists for
 * decorators should be preserved when possible to allow for direct immutable
 * List comparison.
 */
function regenerateTreeForNewDecorator(blockMap, previousTreeMap, decorator, existingDecorator) {
  return previousTreeMap.merge(blockMap.toSeq().filter(function (block) {
    return decorator.getDecorations(block) !== existingDecorator.getDecorations(block);
  }).map(function (block) {
    return BlockTree.generate(block, decorator);
  }));
}

/**
 * Return whether a change should be considered a boundary state, given
 * the previous change type. Allows us to discard potential boundary states
 * during standard typing or deletion behavior.
 */
function mustBecomeBoundary(editorState, changeType) {
  var lastChangeType = editorState.getLastChangeType();
  return changeType !== lastChangeType || changeType !== 'insert-characters' && changeType !== 'backspace-character' && changeType !== 'delete-character';
}

function getInlineStyleForCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);

  // If the cursor is not at the start of the block, look backward to
  // preserve the style of the preceding character.
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }

  // The caret is at position zero in this block. If the block has any
  // text at all, use the style of the first character.
  if (startBlock.getLength()) {
    return startBlock.getInlineStyleAt(0);
  }

  // Otherwise, look upward in the document to find the closest character.
  return lookUpwardForInlineStyle(content, startKey);
}

function getInlineStyleForNonCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);

  // If there is a character just inside the selection, use its style.
  if (startOffset < startBlock.getLength()) {
    return startBlock.getInlineStyleAt(startOffset);
  }

  // Check if the selection at the end of a non-empty block. Use the last
  // style in the block.
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }

  // Otherwise, look upward in the document to find the closest character.
  return lookUpwardForInlineStyle(content, startKey);
}

function lookUpwardForInlineStyle(content, fromKey) {
  var previousBlock = content.getBlockBefore(fromKey);
  var previousLength;

  while (previousBlock) {
    previousLength = previousBlock.getLength();
    if (previousLength) {
      return previousBlock.getInlineStyleAt(previousLength - 1);
    }
    previousBlock = content.getBlockBefore(previousBlock.getKey());
  }

  return OrderedSet();
}

module.exports = EditorState;

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/invariant.js");

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftModifier
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);
var ContentStateInlineStyle = __webpack_require__(1020);
var Immutable = __webpack_require__(106);

var applyEntityToContentState = __webpack_require__(1036);
var getCharacterRemovalRange = __webpack_require__(1057);
var getContentStateFragment = __webpack_require__(888);
var insertFragmentIntoContentState = __webpack_require__(1062);
var insertTextIntoContentState = __webpack_require__(1063);
var invariant = __webpack_require__(864);
var modifyBlockForContentState = __webpack_require__(1074);
var removeEntitiesAtEdges = __webpack_require__(947);
var removeRangeFromContentState = __webpack_require__(1075);
var splitBlockInContentState = __webpack_require__(1077);

var OrderedSet = Immutable.OrderedSet;

/**
 * `DraftModifier` provides a set of convenience methods that apply
 * modifications to a `ContentState` object based on a target `SelectionState`.
 *
 * Any change to a `ContentState` should be decomposable into a series of
 * transaction functions that apply the required changes and return output
 * `ContentState` objects.
 *
 * These functions encapsulate some of the most common transaction sequences.
 */

var DraftModifier = {
  replaceText: function replaceText(contentState, rangeToReplace, text, inlineStyle, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace);
    var withoutText = removeRangeFromContentState(withoutEntities, rangeToReplace);

    var character = CharacterMetadata.create({
      style: inlineStyle || OrderedSet(),
      entity: entityKey || null
    });

    return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
  },

  insertText: function insertText(contentState, targetRange, text, inlineStyle, entityKey) {
    !targetRange.isCollapsed() ?  true ? invariant(false, 'Target range must be collapsed for `insertText`.') : invariant(false) : void 0;
    return DraftModifier.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
  },

  moveText: function moveText(contentState, removalRange, targetRange) {
    var movedFragment = getContentStateFragment(contentState, removalRange);

    var afterRemoval = DraftModifier.removeRange(contentState, removalRange, 'backward');

    return DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);
  },

  replaceWithFragment: function replaceWithFragment(contentState, targetRange, fragment) {
    var withoutEntities = removeEntitiesAtEdges(contentState, targetRange);
    var withoutText = removeRangeFromContentState(withoutEntities, targetRange);

    return insertFragmentIntoContentState(withoutText, withoutText.getSelectionAfter(), fragment);
  },

  removeRange: function removeRange(contentState, rangeToRemove, removalDirection) {
    // Check whether the selection state overlaps with a single entity.
    // If so, try to remove the appropriate substring of the entity text.
    if (rangeToRemove.getAnchorKey() === rangeToRemove.getFocusKey()) {
      var key = rangeToRemove.getAnchorKey();
      var startOffset = rangeToRemove.getStartOffset();
      var endOffset = rangeToRemove.getEndOffset();
      var block = contentState.getBlockForKey(key);

      var startEntity = block.getEntityAt(startOffset);
      var endEntity = block.getEntityAt(endOffset - 1);
      if (startEntity && startEntity === endEntity) {
        var adjustedRemovalRange = getCharacterRemovalRange(block, rangeToRemove, removalDirection);
        return removeRangeFromContentState(contentState, adjustedRemovalRange);
      }
    }

    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
    return removeRangeFromContentState(withoutEntities, rangeToRemove);
  },

  splitBlock: function splitBlock(contentState, selectionState) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    var withoutText = removeRangeFromContentState(withoutEntities, selectionState);

    return splitBlockInContentState(withoutText, withoutText.getSelectionAfter());
  },

  applyInlineStyle: function applyInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
  },

  removeInlineStyle: function removeInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
  },

  setBlockType: function setBlockType(contentState, selectionState, blockType) {
    return modifyBlockForContentState(contentState, selectionState, function (block) {
      return block.merge({ type: blockType, depth: 0 });
    });
  },

  setBlockData: function setBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function (block) {
      return block.merge({ data: blockData });
    });
  },

  mergeBlockData: function mergeBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function (block) {
      return block.merge({ data: block.getData().merge(blockData) });
    });
  },

  applyEntity: function applyEntity(contentState, selectionState, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    return applyEntityToContentState(withoutEntities, selectionState, entityKey);
  }
};

module.exports = DraftModifier;

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }
  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CharacterMetadata
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(106);

var Map = _require.Map;
var OrderedSet = _require.OrderedSet;
var Record = _require.Record;


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  style: EMPTY_SET,
  entity: null
};

var CharacterMetadataRecord = Record(defaultRecord);

var CharacterMetadata = function (_CharacterMetadataRec) {
  _inherits(CharacterMetadata, _CharacterMetadataRec);

  function CharacterMetadata() {
    _classCallCheck(this, CharacterMetadata);

    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
  }

  CharacterMetadata.prototype.getStyle = function getStyle() {
    return this.get('style');
  };

  CharacterMetadata.prototype.getEntity = function getEntity() {
    return this.get('entity');
  };

  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
    return this.getStyle().has(style);
  };

  CharacterMetadata.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set('style', record.getStyle().add(style));
    return CharacterMetadata.create(withStyle);
  };

  CharacterMetadata.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set('style', record.getStyle().remove(style));
    return CharacterMetadata.create(withoutStyle);
  };

  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
    return CharacterMetadata.create(withEntity);
  };

  /**
   * Use this function instead of the `CharacterMetadata` constructor.
   * Since most content generally uses only a very small number of
   * style/entity permutations, we can reuse these objects as often as
   * possible.
   */


  CharacterMetadata.create = function create(config) {
    if (!config) {
      return EMPTY;
    }

    // Fill in unspecified properties, if necessary.
    var configMap = Map({ style: EMPTY_SET, entity: null }).merge(config);

    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }

    var newCharacter = new CharacterMetadata(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };

  return CharacterMetadata;
}(CharacterMetadataRecord);

var EMPTY = new CharacterMetadata();
var pool = Map([[Map(defaultRecord), EMPTY]]);

CharacterMetadata.EMPTY = EMPTY;

module.exports = CharacterMetadata;

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule generateRandomKey
 * @typechecks
 * 
 */



var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);

function generateRandomKey() {
  var key = void 0;
  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}

module.exports = generateRandomKey;

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var UserAgentData = __webpack_require__(1089);
var VersionRange = __webpack_require__(1090);

var mapObject = __webpack_require__(1097);
var memoizeStringOnly = __webpack_require__(1380);

/**
 * Checks to see whether `name` and `version` satisfy `query`.
 *
 * @param {string} name Name of the browser, device, engine or platform
 * @param {?string} version Version of the browser, engine or platform
 * @param {string} query Query of form "Name [range expression]"
 * @param {?function} normalizer Optional pre-processor for range expression
 * @return {boolean}
 */
function compare(name, version, query, normalizer) {
  // check for exact match with no version
  if (name === query) {
    return true;
  }

  // check for non-matching names
  if (!query.startsWith(name)) {
    return false;
  }

  // full comparison with version
  var range = query.slice(name.length);
  if (version) {
    range = normalizer ? normalizer(range) : range;
    return VersionRange.contains(range, version);
  }

  return false;
}

/**
 * Normalizes `version` by stripping any "NT" prefix, but only on the Windows
 * platform.
 *
 * Mimics the stripping performed by the `UserAgentWindowsPlatform` PHP class.
 *
 * @param {string} version
 * @return {string}
 */
function normalizePlatformVersion(version) {
  if (UserAgentData.platformName === 'Windows') {
    return version.replace(/^\s*NT/, '');
  }

  return version;
}

/**
 * Provides client-side access to the authoritative PHP-generated User Agent
 * information supplied by the server.
 */
var UserAgent = {
  /**
   * Check if the User Agent browser matches `query`.
   *
   * `query` should be a string like "Chrome" or "Chrome > 33".
   *
   * Valid browser names include:
   *
   * - ACCESS NetFront
   * - AOL
   * - Amazon Silk
   * - Android
   * - BlackBerry
   * - BlackBerry PlayBook
   * - Chrome
   * - Chrome for iOS
   * - Chrome frame
   * - Facebook PHP SDK
   * - Facebook for iOS
   * - Firefox
   * - IE
   * - IE Mobile
   * - Mobile Safari
   * - Motorola Internet Browser
   * - Nokia
   * - Openwave Mobile Browser
   * - Opera
   * - Opera Mini
   * - Opera Mobile
   * - Safari
   * - UIWebView
   * - Unknown
   * - webOS
   * - etc...
   *
   * An authoritative list can be found in the PHP `BrowserDetector` class and
   * related classes in the same file (see calls to `new UserAgentBrowser` here:
   * https://fburl.com/50728104).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isBrowser: function isBrowser(query) {
    return compare(UserAgentData.browserName, UserAgentData.browserFullVersion, query);
  },


  /**
   * Check if the User Agent browser uses a 32 or 64 bit architecture.
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "32" or "64".
   * @return {boolean}
   */
  isBrowserArchitecture: function isBrowserArchitecture(query) {
    return compare(UserAgentData.browserArchitecture, null, query);
  },


  /**
   * Check if the User Agent device matches `query`.
   *
   * `query` should be a string like "iPhone" or "iPad".
   *
   * Valid device names include:
   *
   * - Kindle
   * - Kindle Fire
   * - Unknown
   * - iPad
   * - iPhone
   * - iPod
   * - etc...
   *
   * An authoritative list can be found in the PHP `DeviceDetector` class and
   * related classes in the same file (see calls to `new UserAgentDevice` here:
   * https://fburl.com/50728332).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name"
   * @return {boolean}
   */
  isDevice: function isDevice(query) {
    return compare(UserAgentData.deviceName, null, query);
  },


  /**
   * Check if the User Agent rendering engine matches `query`.
   *
   * `query` should be a string like "WebKit" or "WebKit >= 537".
   *
   * Valid engine names include:
   *
   * - Gecko
   * - Presto
   * - Trident
   * - WebKit
   * - etc...
   *
   * An authoritative list can be found in the PHP `RenderingEngineDetector`
   * class related classes in the same file (see calls to `new
   * UserAgentRenderingEngine` here: https://fburl.com/50728617).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isEngine: function isEngine(query) {
    return compare(UserAgentData.engineName, UserAgentData.engineVersion, query);
  },


  /**
   * Check if the User Agent platform matches `query`.
   *
   * `query` should be a string like "Windows" or "iOS 5 - 6".
   *
   * Valid platform names include:
   *
   * - Android
   * - BlackBerry OS
   * - Java ME
   * - Linux
   * - Mac OS X
   * - Mac OS X Calendar
   * - Mac OS X Internet Account
   * - Symbian
   * - SymbianOS
   * - Windows
   * - Windows Mobile
   * - Windows Phone
   * - iOS
   * - iOS Facebook Integration Account
   * - iOS Facebook Social Sharing UI
   * - webOS
   * - Chrome OS
   * - etc...
   *
   * An authoritative list can be found in the PHP `PlatformDetector` class and
   * related classes in the same file (see calls to `new UserAgentPlatform`
   * here: https://fburl.com/50729226).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isPlatform: function isPlatform(query) {
    return compare(UserAgentData.platformName, UserAgentData.platformFullVersion, query, normalizePlatformVersion);
  },


  /**
   * Check if the User Agent platform is a 32 or 64 bit architecture.
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "32" or "64".
   * @return {boolean}
   */
  isPlatformArchitecture: function isPlatformArchitecture(query) {
    return compare(UserAgentData.platformArchitecture, null, query);
  }
};

module.exports = mapObject(UserAgent, memoizeStringOnly);

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEntity
 * @typechecks
 * 
 */

var DraftEntityInstance = __webpack_require__(932);
var Immutable = __webpack_require__(106);

var invariant = __webpack_require__(864);

var Map = Immutable.Map;


var instances = Map();
var instanceKey = 0;

/**
 * A "document entity" is an object containing metadata associated with a
 * piece of text in a ContentBlock.
 *
 * For example, a `link` entity might include a `uri` property. When a
 * ContentBlock is rendered in the browser, text that refers to that link
 * entity may be rendered as an anchor, with the `uri` as the href value.
 *
 * In a ContentBlock, every position in the text may correspond to zero
 * or one entities. This correspondence is tracked using a key string,
 * generated via DraftEntity.create() and used to obtain entity metadata
 * via DraftEntity.get().
 */
var DraftEntity = {
  /**
   * Create a DraftEntityInstance and store it for later retrieval.
   *
   * A random key string will be generated and returned. This key may
   * be used to track the entity's usage in a ContentBlock, and for
   * retrieving data about the entity at render time.
   */
  create: function create(type, mutability, data) {
    return DraftEntity.add(new DraftEntityInstance({ type: type, mutability: mutability, data: data || {} }));
  },

  /**
   * Add an existing DraftEntityInstance to the DraftEntity map. This is
   * useful when restoring instances from the server.
   */
  add: function add(instance) {
    var key = '' + ++instanceKey;
    instances = instances.set(key, instance);
    return key;
  },

  /**
   * Retrieve the entity corresponding to the supplied key string.
   */
  get: function get(key) {
    var instance = instances.get(key);
    !!!instance ?  true ? invariant(false, 'Unknown DraftEntity key.') : invariant(false) : void 0;
    return instance;
  },

  /**
   * Entity instances are immutable. If you need to update the data for an
   * instance, this method will merge your data updates and return a new
   * instance.
   */
  mergeData: function mergeData(key, toMerge) {
    var instance = DraftEntity.get(key);
    var newData = _extends({}, instance.getData(), toMerge);
    var newInstance = instance.set('data', newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  },

  /**
   * Completely replace the data for a given instance.
   */
  replaceData: function replaceData(key, newData) {
    var instance = DraftEntity.get(key);
    var newInstance = instance.set('data', newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  }
};

module.exports = DraftEntity;

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentBlock
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Immutable = __webpack_require__(106);

var findRangesImmutable = __webpack_require__(887);

var List = Immutable.List;
var Map = Immutable.Map;
var OrderedSet = Immutable.OrderedSet;
var Record = Immutable.Record;


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  key: '',
  type: 'unstyled',
  text: '',
  characterList: List(),
  depth: 0,
  data: Map()
};

var ContentBlockRecord = Record(defaultRecord);

var ContentBlock = function (_ContentBlockRecord) {
  _inherits(ContentBlock, _ContentBlockRecord);

  function ContentBlock() {
    _classCallCheck(this, ContentBlock);

    return _possibleConstructorReturn(this, _ContentBlockRecord.apply(this, arguments));
  }

  ContentBlock.prototype.getKey = function getKey() {
    return this.get('key');
  };

  ContentBlock.prototype.getType = function getType() {
    return this.get('type');
  };

  ContentBlock.prototype.getText = function getText() {
    return this.get('text');
  };

  ContentBlock.prototype.getCharacterList = function getCharacterList() {
    return this.get('characterList');
  };

  ContentBlock.prototype.getLength = function getLength() {
    return this.getText().length;
  };

  ContentBlock.prototype.getDepth = function getDepth() {
    return this.get('depth');
  };

  ContentBlock.prototype.getData = function getData() {
    return this.get('data');
  };

  ContentBlock.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET;
  };

  ContentBlock.prototype.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };

  /**
   * Execute a callback for every contiguous range of styles within the block.
   */


  ContentBlock.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };

  /**
   * Execute a callback for every contiguous range of entities within the block.
   */


  ContentBlock.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };

  return ContentBlock;
}(ContentBlockRecord);

function haveEqualStyle(charA, charB) {
  return charA.getStyle() === charB.getStyle();
}

function haveEqualEntity(charA, charB) {
  return charA.getEntity() === charB.getEntity();
}

module.exports = ContentBlock;

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Draft
 */



var AtomicBlockUtils = __webpack_require__(1018);
var BlockMapBuilder = __webpack_require__(880);
var CharacterMetadata = __webpack_require__(867);
var CompositeDraftDecorator = __webpack_require__(1019);
var ContentBlock = __webpack_require__(872);
var ContentState = __webpack_require__(896);
var DefaultDraftBlockRenderMap = __webpack_require__(897);
var DefaultDraftInlineStyle = __webpack_require__(930);
var DraftEditor = __webpack_require__(1021);
var DraftEditorBlock = __webpack_require__(931);
var DraftModifier = __webpack_require__(865);
var DraftEntity = __webpack_require__(871);
var DraftEntityInstance = __webpack_require__(932);
var EditorState = __webpack_require__(862);
var KeyBindingUtil = __webpack_require__(898);
var RichTextEditorUtil = __webpack_require__(1032);
var SelectionState = __webpack_require__(876);

var convertFromDraftStateToRaw = __webpack_require__(1037);
var convertFromHTMLToContentBlocks = __webpack_require__(935);
var convertFromRawToDraftState = __webpack_require__(1038);
var generateRandomKey = __webpack_require__(868);
var getDefaultKeyBinding = __webpack_require__(936);
var getVisibleSelectionRect = __webpack_require__(1061);

var DraftPublic = {
  Editor: DraftEditor,
  EditorBlock: DraftEditorBlock,
  EditorState: EditorState,

  CompositeDecorator: CompositeDraftDecorator,
  Entity: DraftEntity,
  EntityInstance: DraftEntityInstance,

  BlockMapBuilder: BlockMapBuilder,
  CharacterMetadata: CharacterMetadata,
  ContentBlock: ContentBlock,
  ContentState: ContentState,
  SelectionState: SelectionState,

  AtomicBlockUtils: AtomicBlockUtils,
  KeyBindingUtil: KeyBindingUtil,
  Modifier: DraftModifier,
  RichUtils: RichTextEditorUtil,

  DefaultDraftBlockRenderMap: DefaultDraftBlockRenderMap,
  DefaultDraftInlineStyle: DefaultDraftInlineStyle,

  convertFromHTML: convertFromHTMLToContentBlocks,
  convertFromRaw: convertFromRawToDraftState,
  convertToRaw: convertFromDraftStateToRaw,
  genKey: generateRandomKey,
  getDefaultKeyBinding: getDefaultKeyBinding,
  getVisibleSelectionRect: getVisibleSelectionRect
};

module.exports = DraftPublic;

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * Unicode-enabled replacesments for basic String functions.
 *
 * All the functions in this module assume that the input string is a valid
 * UTF-16 encoding of a Unicode sequence. If it's not the case, the behavior
 * will be undefined.
 *
 * WARNING: Since this module is typechecks-enforced, you may find new bugs
 * when replacing normal String functions with ones provided here.
 */



var invariant = __webpack_require__(864);

// These two ranges are consecutive so anything in [HIGH_START, LOW_END] is a
// surrogate code unit.
var SURROGATE_HIGH_START = 0xD800;
var SURROGATE_HIGH_END = 0xDBFF;
var SURROGATE_LOW_START = 0xDC00;
var SURROGATE_LOW_END = 0xDFFF;
var SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/;

/**
 * @param {number} codeUnit   A Unicode code-unit, in range [0, 0x10FFFF]
 * @return {boolean}          Whether code-unit is in a surrogate (hi/low) range
 */
function isCodeUnitInSurrogateRange(codeUnit) {
  return SURROGATE_HIGH_START <= codeUnit && codeUnit <= SURROGATE_LOW_END;
}

/**
 * Returns whether the two characters starting at `index` form a surrogate pair.
 * For example, given the string s = "\uD83D\uDE0A", (s, 0) returns true and
 * (s, 1) returns false.
 *
 * @param {string} str
 * @param {number} index
 * @return {boolean}
 */
function isSurrogatePair(str, index) {
  !(0 <= index && index < str.length) ?  true ? invariant(false, 'isSurrogatePair: Invalid index %s for string length %s.', index, str.length) : invariant(false) : void 0;
  if (index + 1 === str.length) {
    return false;
  }
  var first = str.charCodeAt(index);
  var second = str.charCodeAt(index + 1);
  return SURROGATE_HIGH_START <= first && first <= SURROGATE_HIGH_END && SURROGATE_LOW_START <= second && second <= SURROGATE_LOW_END;
}

/**
 * @param {string} str  Non-empty string
 * @return {boolean}    True if the input includes any surrogate code units
 */
function hasSurrogateUnit(str) {
  return SURROGATE_UNITS_REGEX.test(str);
}

/**
 * Return the length of the original Unicode character at given position in the
 * String by looking into the UTF-16 code unit; that is equal to 1 for any
 * non-surrogate characters in BMP ([U+0000..U+D7FF] and [U+E000, U+FFFF]); and
 * returns 2 for the hi/low surrogates ([U+D800..U+DFFF]), which are in fact
 * representing non-BMP characters ([U+10000..U+10FFFF]).
 *
 * Examples:
 * - '\u0020' => 1
 * - '\u3020' => 1
 * - '\uD835' => 2
 * - '\uD835\uDDEF' => 2
 * - '\uDDEF' => 2
 *
 * @param {string} str  Non-empty string
 * @param {number} pos  Position in the string to look for one code unit
 * @return {number}      Number 1 or 2
 */
function getUTF16Length(str, pos) {
  return 1 + isCodeUnitInSurrogateRange(str.charCodeAt(pos));
}

/**
 * Fully Unicode-enabled replacement for String#length
 *
 * @param {string} str  Valid Unicode string
 * @return {number}     The number of Unicode characters in the string
 */
function strlen(str) {
  // Call the native functions if there's no surrogate char
  if (!hasSurrogateUnit(str)) {
    return str.length;
  }

  var len = 0;
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    len++;
  }
  return len;
}

/**
 * Fully Unicode-enabled replacement for String#substr()
 *
 * @param {string} str      Valid Unicode string
 * @param {number} start    Location in Unicode sequence to begin extracting
 * @param {?number} length  The number of Unicode characters to extract
 *                          (default: to the end of the string)
 * @return {string}         Extracted sub-string
 */
function substr(str, start, length) {
  start = start || 0;
  length = length === undefined ? Infinity : length || 0;

  // Call the native functions if there's no surrogate char
  if (!hasSurrogateUnit(str)) {
    return str.substr(start, length);
  }

  // Obvious cases
  var size = str.length;
  if (size <= 0 || start > size || length <= 0) {
    return '';
  }

  // Find the actual starting position
  var posA = 0;
  if (start > 0) {
    for (; start > 0 && posA < size; start--) {
      posA += getUTF16Length(str, posA);
    }
    if (posA >= size) {
      return '';
    }
  } else if (start < 0) {
    for (posA = size; start < 0 && 0 < posA; start++) {
      posA -= getUTF16Length(str, posA - 1);
    }
    if (posA < 0) {
      posA = 0;
    }
  }

  // Find the actual ending position
  var posB = size;
  if (length < size) {
    for (posB = posA; length > 0 && posB < size; length--) {
      posB += getUTF16Length(str, posB);
    }
  }

  return str.substring(posA, posB);
}

/**
 * Fully Unicode-enabled replacement for String#substring()
 *
 * @param {string} str    Valid Unicode string
 * @param {number} start  Location in Unicode sequence to begin extracting
 * @param {?number} end   Location in Unicode sequence to end extracting
 *                        (default: end of the string)
 * @return {string}       Extracted sub-string
 */
function substring(str, start, end) {
  start = start || 0;
  end = end === undefined ? Infinity : end || 0;

  if (start < 0) {
    start = 0;
  }
  if (end < 0) {
    end = 0;
  }

  var length = Math.abs(end - start);
  start = start < end ? start : end;
  return substr(str, start, length);
}

/**
 * Get a list of Unicode code-points from a String
 *
 * @param {string} str        Valid Unicode string
 * @return {array<number>}    A list of code-points in [0..0x10FFFF]
 */
function getCodePoints(str) {
  var codePoints = [];
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    codePoints.push(str.codePointAt(pos));
  }
  return codePoints;
}

var UnicodeUtils = {
  getCodePoints: getCodePoints,
  getUTF16Length: getUTF16Length,
  hasSurrogateUnit: hasSurrogateUnit,
  isCodeUnitInSurrogateRange: isCodeUnitInSurrogateRange,
  isSurrogatePair: isSurrogatePair,
  strlen: strlen,
  substring: substring,
  substr: substr
};

module.exports = UnicodeUtils;

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectionState
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Immutable = __webpack_require__(106);

var Record = Immutable.Record;


var defaultRecord = {
  anchorKey: '',
  anchorOffset: 0,
  focusKey: '',
  focusOffset: 0,
  isBackward: false,
  hasFocus: false
};

var SelectionStateRecord = Record(defaultRecord);

var SelectionState = function (_SelectionStateRecord) {
  _inherits(SelectionState, _SelectionStateRecord);

  function SelectionState() {
    _classCallCheck(this, SelectionState);

    return _possibleConstructorReturn(this, _SelectionStateRecord.apply(this, arguments));
  }

  SelectionState.prototype.serialize = function serialize() {
    return 'Anchor: ' + this.getAnchorKey() + ':' + this.getAnchorOffset() + ', ' + 'Focus: ' + this.getFocusKey() + ':' + this.getFocusOffset() + ', ' + 'Is Backward: ' + String(this.getIsBackward()) + ', ' + 'Has Focus: ' + String(this.getHasFocus());
  };

  SelectionState.prototype.getAnchorKey = function getAnchorKey() {
    return this.get('anchorKey');
  };

  SelectionState.prototype.getAnchorOffset = function getAnchorOffset() {
    return this.get('anchorOffset');
  };

  SelectionState.prototype.getFocusKey = function getFocusKey() {
    return this.get('focusKey');
  };

  SelectionState.prototype.getFocusOffset = function getFocusOffset() {
    return this.get('focusOffset');
  };

  SelectionState.prototype.getIsBackward = function getIsBackward() {
    return this.get('isBackward');
  };

  SelectionState.prototype.getHasFocus = function getHasFocus() {
    return this.get('hasFocus');
  };

  /**
   * Return whether the specified range overlaps with an edge of the
   * SelectionState.
   */


  SelectionState.prototype.hasEdgeWithin = function hasEdgeWithin(blockKey, start, end) {
    var anchorKey = this.getAnchorKey();
    var focusKey = this.getFocusKey();

    if (anchorKey === focusKey && anchorKey === blockKey) {
      var selectionStart = this.getStartOffset();
      var selectionEnd = this.getEndOffset();
      return start <= selectionEnd && selectionStart <= end;
    }

    if (blockKey !== anchorKey && blockKey !== focusKey) {
      return false;
    }

    var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();

    return start <= offsetToCheck && end >= offsetToCheck;
  };

  SelectionState.prototype.isCollapsed = function isCollapsed() {
    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
  };

  SelectionState.prototype.getStartKey = function getStartKey() {
    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
  };

  SelectionState.prototype.getStartOffset = function getStartOffset() {
    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
  };

  SelectionState.prototype.getEndKey = function getEndKey() {
    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
  };

  SelectionState.prototype.getEndOffset = function getEndOffset() {
    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
  };

  SelectionState.createEmpty = function createEmpty(key) {
    return new SelectionState({
      anchorKey: key,
      anchorOffset: 0,
      focusKey: key,
      focusOffset: 0,
      isBackward: false,
      hasFocus: false
    });
  };

  return SelectionState;
}(SelectionStateRecord);

module.exports = SelectionState;

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BlockMapBuilder
 * 
 */



var Immutable = __webpack_require__(106);

var OrderedMap = Immutable.OrderedMap;


var BlockMapBuilder = {
  createFromArray: function createFromArray(blocks) {
    return OrderedMap(blocks.map(function (block) {
      return [block.getKey(), block];
    }));
  }
};

module.exports = BlockMapBuilder;

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeTextWithStrategy
 * 
 */



var DraftModifier = __webpack_require__(865);

/**
 * For a collapsed selection state, remove text based on the specified strategy.
 * If the selection state is not collapsed, remove the entire selected range.
 */
function removeTextWithStrategy(editorState, strategy, direction) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var target = selection;
  if (selection.isCollapsed()) {
    if (direction === 'forward') {
      if (editorState.isSelectionAtEndOfContent()) {
        return content;
      }
    } else if (editorState.isSelectionAtStartOfContent()) {
      return content;
    }

    target = strategy(editorState);
    if (target === selection) {
      return content;
    }
  }
  return DraftModifier.removeRange(content, target, direction);
}

module.exports = removeTextWithStrategy;

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
function cx(classNames) {
  if (typeof classNames == 'object') {
    return Object.keys(classNames).filter(function (className) {
      return classNames[className];
    }).map(replace).join(' ');
  }
  return Array.prototype.map.call(arguments, replace).join(' ');
}

function replace(str) {
  return str.replace(/\//g, '-');
}

module.exports = cx;

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftOffsetKey
 * 
 */



var KEY_DELIMITER = '-';

var DraftOffsetKey = {
  encode: function encode(blockKey, decoratorKey, leafKey) {
    return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
  },

  decode: function decode(offsetKey) {
    var _offsetKey$split = offsetKey.split(KEY_DELIMITER);

    var blockKey = _offsetKey$split[0];
    var decoratorKey = _offsetKey$split[1];
    var leafKey = _offsetKey$split[2];

    return {
      blockKey: blockKey,
      decoratorKey: parseInt(decoratorKey, 10),
      leafKey: parseInt(leafKey, 10)
    };
  }
};

module.exports = DraftOffsetKey;

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findRangesImmutable
 * 
 */



/**
 * Search through an array to find contiguous stretches of elements that
 * match a specified filter function.
 *
 * When ranges are found, execute a specified `found` function to supply
 * the values to the caller.
 */
function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }

  var cursor = 0;

  haystack.reduce(function (value, nextValue, nextIndex) {
    /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
    if (!areEqualFn(value, nextValue)) {
      /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });

  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}

module.exports = findRangesImmutable;

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getContentStateFragment
 * @typechecks
 * 
 */



var generateRandomKey = __webpack_require__(868);
var removeEntitiesAtEdges = __webpack_require__(947);

function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  // Edge entities should be stripped to ensure that we don't preserve
  // invalid partial entities when the fragment is reused. We do, however,
  // preserve entities that are entirely within the selection range.
  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;

  var slice = blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
    var newKey = generateRandomKey();

    var text = block.getText();
    var chars = block.getCharacterList();

    if (startKey === endKey) {
      return block.merge({
        key: newKey,
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }

    if (blockKey === startKey) {
      return block.merge({
        key: newKey,
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }

    if (blockKey === endKey) {
      return block.merge({
        key: newKey,
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }

    return block.set('key', newKey);
  });

  return slice.toOrderedMap();
}

module.exports = getContentStateFragment;

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventHandled
 * @typechecks
 * 
 */



/**
 * Utility method for determining whether or not the value returned
 * from a handler indicates that it was handled.
 */
function isEventHandled(value) {
  return value === 'handled' || value === true;
}

module.exports = isEventHandled;

/***/ }),

/***/ 893:
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

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Returns an array of all `ContentBlock` instances within two block keys
 *
 * @param  {object} contentState A draft.js `ContentState` instance
 * @param  {string} anchorKey    The block key to start searching from
 * @param  {string} focusKey     The block key until which to search
 *
 * @return {array} An array containing the found content blocks
 */
exports.default = function (contentState, anchorKey, focusKey) {
  var isSameBlock = anchorKey === focusKey;
  var startingBlock = contentState.getBlockForKey(anchorKey);

  if (!startingBlock) {
    return [];
  }

  var selectedBlocks = [startingBlock];

  if (!isSameBlock) {
    var blockKey = anchorKey;

    while (blockKey !== focusKey) {
      var nextBlock = contentState.getBlockAfter(blockKey);

      if (!nextBlock) {
        selectedBlocks = [];
        break;
      }

      selectedBlocks.push(nextBlock);
      blockKey = nextBlock.getKey();
    }
  }

  return selectedBlocks;
};

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentState
 * @typechecks
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockMapBuilder = __webpack_require__(880);
var CharacterMetadata = __webpack_require__(867);
var ContentBlock = __webpack_require__(872);
var Immutable = __webpack_require__(106);
var SelectionState = __webpack_require__(876);

var generateRandomKey = __webpack_require__(868);
var sanitizeDraftText = __webpack_require__(902);

var List = Immutable.List;
var Record = Immutable.Record;
var Repeat = Immutable.Repeat;


var defaultRecord = {
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
};

var ContentStateRecord = Record(defaultRecord);

var ContentState = function (_ContentStateRecord) {
  _inherits(ContentState, _ContentStateRecord);

  function ContentState() {
    _classCallCheck(this, ContentState);

    return _possibleConstructorReturn(this, _ContentStateRecord.apply(this, arguments));
  }

  ContentState.prototype.getBlockMap = function getBlockMap() {
    return this.get('blockMap');
  };

  ContentState.prototype.getSelectionBefore = function getSelectionBefore() {
    return this.get('selectionBefore');
  };

  ContentState.prototype.getSelectionAfter = function getSelectionAfter() {
    return this.get('selectionAfter');
  };

  ContentState.prototype.getBlockForKey = function getBlockForKey(key) {
    var block = this.getBlockMap().get(key);
    return block;
  };

  ContentState.prototype.getKeyBefore = function getKeyBefore(key) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function (v) {
      return v === key;
    }).skip(1).first();
  };

  ContentState.prototype.getKeyAfter = function getKeyAfter(key) {
    return this.getBlockMap().keySeq().skipUntil(function (v) {
      return v === key;
    }).skip(1).first();
  };

  ContentState.prototype.getBlockAfter = function getBlockAfter(key) {
    return this.getBlockMap().skipUntil(function (_, k) {
      return k === key;
    }).skip(1).first();
  };

  ContentState.prototype.getBlockBefore = function getBlockBefore(key) {
    return this.getBlockMap().reverse().skipUntil(function (_, k) {
      return k === key;
    }).skip(1).first();
  };

  ContentState.prototype.getBlocksAsArray = function getBlocksAsArray() {
    return this.getBlockMap().toArray();
  };

  ContentState.prototype.getFirstBlock = function getFirstBlock() {
    return this.getBlockMap().first();
  };

  ContentState.prototype.getLastBlock = function getLastBlock() {
    return this.getBlockMap().last();
  };

  ContentState.prototype.getPlainText = function getPlainText(delimiter) {
    return this.getBlockMap().map(function (block) {
      return block ? block.getText() : '';
    }).join(delimiter || '\n');
  };

  ContentState.prototype.hasText = function hasText() {
    var blockMap = this.getBlockMap();
    return blockMap.size > 1 || blockMap.first().getLength() > 0;
  };

  ContentState.createFromBlockArray = function createFromBlockArray(blocks) {
    var blockMap = BlockMapBuilder.createFromArray(blocks);
    var selectionState = SelectionState.createEmpty(blockMap.first().getKey());
    return new ContentState({
      blockMap: blockMap,
      selectionBefore: selectionState,
      selectionAfter: selectionState
    });
  };

  ContentState.createFromText = function createFromText(text) {
    var delimiter = arguments.length <= 1 || arguments[1] === undefined ? /\r\n?|\n/g : arguments[1];

    var strings = text.split(delimiter);
    var blocks = strings.map(function (block) {
      block = sanitizeDraftText(block);
      return new ContentBlock({
        key: generateRandomKey(),
        text: block,
        type: 'unstyled',
        characterList: List(Repeat(CharacterMetadata.EMPTY, block.length))
      });
    });
    return ContentState.createFromBlockArray(blocks);
  };

  return ContentState;
}(ContentStateRecord);

module.exports = ContentState;

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultDraftBlockRenderMap
 * 
 */



var _require = __webpack_require__(106);

var Map = _require.Map;

var React = __webpack_require__(1);

var cx = __webpack_require__(883);

var UL_WRAP = React.createElement('ul', { className: cx('public/DraftStyleDefault/ul') });
var OL_WRAP = React.createElement('ol', { className: cx('public/DraftStyleDefault/ol') });
var PRE_WRAP = React.createElement('pre', { className: cx('public/DraftStyleDefault/pre') });

module.exports = Map({
  'header-one': {
    element: 'h1'
  },
  'header-two': {
    element: 'h2'
  },
  'header-three': {
    element: 'h3'
  },
  'header-four': {
    element: 'h4'
  },
  'header-five': {
    element: 'h5'
  },
  'header-six': {
    element: 'h6'
  },
  'unordered-list-item': {
    element: 'li',
    wrapper: UL_WRAP
  },
  'ordered-list-item': {
    element: 'li',
    wrapper: OL_WRAP
  },
  'blockquote': {
    element: 'blockquote'
  },
  'atomic': {
    element: 'figure'
  },
  'code-block': {
    element: 'pre',
    wrapper: PRE_WRAP
  },
  'unstyled': {
    element: 'div'
  }
});

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule KeyBindingUtil
 * @typechecks
 * 
 */



var UserAgent = __webpack_require__(869);

var isOSX = UserAgent.isPlatform('Mac OS X');

var KeyBindingUtil = {
  /**
   * Check whether the ctrlKey modifier is *not* being used in conjunction with
   * the altKey modifier. If they are combined, the result is an `altGraph`
   * key modifier, which should not be handled by this set of key bindings.
   */
  isCtrlKeyCommand: function isCtrlKeyCommand(e) {
    return !!e.ctrlKey && !e.altKey;
  },

  isOptionKeyCommand: function isOptionKeyCommand(e) {
    return isOSX && e.altKey;
  },

  hasCommandModifier: function hasCommandModifier(e) {
    return isOSX ? !!e.metaKey && !e.altKey : KeyBindingUtil.isCtrlKeyCommand(e);
  }
};

module.exports = KeyBindingUtil;

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findAncestorOffsetKey
 * @typechecks
 * 
 */



var getSelectionOffsetKeyForNode = __webpack_require__(941);

/**
 * Get the key from the node's nearest offset-aware ancestor.
 */
function findAncestorOffsetKey(node) {
  var searchNode = node;
  while (searchNode && searchNode !== document.documentElement) {
    var key = getSelectionOffsetKeyForNode(searchNode);
    if (key != null) {
      return key;
    }
    searchNode = searchNode.parentNode;
  }
  return null;
}

module.exports = findAncestorOffsetKey;

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEntityKeyForSelection
 * @typechecks
 * 
 */



var DraftEntity = __webpack_require__(871);

/**
 * Return the entity key that should be used when inserting text for the
 * specified target selection, only if the entity is `MUTABLE`. `IMMUTABLE`
 * and `SEGMENTED` entities should not be used for insertion behavior.
 */
function getEntityKeyForSelection(contentState, targetSelection) {
  var entityKey;

  if (targetSelection.isCollapsed()) {
    var key = targetSelection.getAnchorKey();
    var offset = targetSelection.getAnchorOffset();
    if (offset > 0) {
      entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1);
      return filterKey(entityKey);
    }
    return null;
  }

  var startKey = targetSelection.getStartKey();
  var startOffset = targetSelection.getStartOffset();
  var startBlock = contentState.getBlockForKey(startKey);

  entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset);

  return filterKey(entityKey);
}

/**
 * Determine whether an entity key corresponds to a `MUTABLE` entity. If so,
 * return it. If not, return null.
 */
function filterKey(entityKey) {
  if (entityKey) {
    var entity = DraftEntity.get(entityKey);
    return entity.getMutability() === 'MUTABLE' ? entityKey : null;
  }
  return null;
}

module.exports = getEntityKeyForSelection;

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule moveSelectionBackward
 * 
 */



/**
 * Given a collapsed selection, move the focus `maxDistance` backward within
 * the selected block. If the selection will go beyond the start of the block,
 * move focus to the end of the previous block, but no further.
 *
 * This function is not Unicode-aware, so surrogate pairs will be treated
 * as having length 2.
 */
function moveSelectionBackward(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();

  var focusKey = key;
  var focusOffset = 0;

  if (maxDistance > offset) {
    var keyBefore = content.getKeyBefore(key);
    if (keyBefore == null) {
      focusKey = key;
    } else {
      focusKey = keyBefore;
      var blockBefore = content.getBlockForKey(keyBefore);
      focusOffset = blockBefore.getText().length;
    }
  } else {
    focusOffset = offset - maxDistance;
  }

  return selection.merge({
    focusKey: focusKey,
    focusOffset: focusOffset,
    isBackward: true
  });
}

module.exports = moveSelectionBackward;

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule sanitizeDraftText
 * 
 */



var REGEX_BLOCK_DELIMITER = new RegExp('\r', 'g');

function sanitizeDraftText(input) {
  return input.replace(REGEX_BLOCK_DELIMITER, '');
}

module.exports = sanitizeDraftText;

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

module.exports = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  COMMA: 188,
  PERIOD: 190,
  A: 65,
  Z: 90,
  ZERO: 48,
  NUMPAD_0: 96,
  NUMPAD_9: 105
};

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var getStyleProperty = __webpack_require__(1094);

/**
 * @param {DOMNode} element [description]
 * @param {string} name Overflow style property name.
 * @return {boolean} True if the supplied ndoe is scrollable.
 */
function _isNodeScrollable(element, name) {
  var overflow = Style.get(element, name);
  return overflow === 'auto' || overflow === 'scroll';
}

/**
 * Utilities for querying and mutating style properties.
 */
var Style = {
  /**
   * Gets the style property for the supplied node. This will return either the
   * computed style, if available, or the declared style.
   *
   * @param {DOMNode} node
   * @param {string} name Style property name.
   * @return {?string} Style property value.
   */
  get: getStyleProperty,

  /**
   * Determines the nearest ancestor of a node that is scrollable.
   *
   * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
   *
   * @param {?DOMNode} node Node from which to start searching.
   * @return {?DOMWindow|DOMElement} Scroll parent of the supplied node.
   */
  getScrollParent: function getScrollParent(node) {
    if (!node) {
      return null;
    }
    var ownerDocument = node.ownerDocument;
    while (node && node !== ownerDocument.body) {
      if (_isNodeScrollable(node, 'overflow') || _isNodeScrollable(node, 'overflowY') || _isNodeScrollable(node, 'overflowX')) {
        return node;
      }
      node = node.parentNode;
    }
    return ownerDocument.defaultView || ownerDocument.parentWindow;
  }

};

module.exports = Style;

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/**
 * Constants to represent text directionality
 *
 * Also defines a *global* direciton, to be used in bidi algorithms as a
 * default fallback direciton, when no better direction is found or provided.
 *
 * NOTE: Use `setGlobalDir()`, or update `initGlobalDir()`, to set the initial
 *       global direction value based on the application.
 *
 * Part of the implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */



var invariant = __webpack_require__(864);

var NEUTRAL = 'NEUTRAL'; // No strong direction
var LTR = 'LTR'; // Left-to-Right direction
var RTL = 'RTL'; // Right-to-Left direction

var globalDir = null;

// == Helpers ==

/**
 * Check if a directionality value is a Strong one
 */
function isStrong(dir) {
  return dir === LTR || dir === RTL;
}

/**
 * Get string value to be used for `dir` HTML attribute or `direction` CSS
 * property.
 */
function getHTMLDir(dir) {
  !isStrong(dir) ?  true ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  return dir === LTR ? 'ltr' : 'rtl';
}

/**
 * Get string value to be used for `dir` HTML attribute or `direction` CSS
 * property, but returns null if `dir` has same value as `otherDir`.
 * `null`.
 */
function getHTMLDirIfDifferent(dir, otherDir) {
  !isStrong(dir) ?  true ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  !isStrong(otherDir) ?  true ? invariant(false, '`otherDir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  return dir === otherDir ? null : getHTMLDir(dir);
}

// == Global Direction ==

/**
 * Set the global direction.
 */
function setGlobalDir(dir) {
  globalDir = dir;
}

/**
 * Initialize the global direction
 */
function initGlobalDir() {
  setGlobalDir(LTR);
}

/**
 * Get the global direction
 */
function getGlobalDir() {
  if (!globalDir) {
    this.initGlobalDir();
  }
  !globalDir ?  true ? invariant(false, 'Global direction not set.') : invariant(false) : void 0;
  return globalDir;
}

var UnicodeBidiDirection = {
  // Values
  NEUTRAL: NEUTRAL,
  LTR: LTR,
  RTL: RTL,
  // Helpers
  isStrong: isStrong,
  getHTMLDir: getHTMLDir,
  getHTMLDirIfDifferent: getHTMLDirIfDifferent,
  // Global Direction
  setGlobalDir: setGlobalDir,
  initGlobalDir: initGlobalDir,
  getGlobalDir: getGlobalDir
};

module.exports = UnicodeBidiDirection;

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var getDocumentScrollElement = __webpack_require__(1091);
var getUnboundedScrollPosition = __webpack_require__(1378);

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are bounded. This means that if the scroll position is
 * negative or exceeds the element boundaries (which is possible using inertial
 * scrolling), you will get zero or the maximum scroll position, respectively.
 *
 * If you need the unbound scroll position, use `getUnboundedScrollPosition`.
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
function getScrollPosition(scrollable) {
  var documentScrollElement = getDocumentScrollElement(scrollable.ownerDocument || scrollable.document);
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    scrollable = documentScrollElement;
  }
  var scrollPosition = getUnboundedScrollPosition(scrollable);

  var viewport = scrollable === documentScrollElement ? scrollable.ownerDocument.documentElement : scrollable;

  var xMax = scrollable.scrollWidth - viewport.clientWidth;
  var yMax = scrollable.scrollHeight - viewport.clientHeight;

  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));

  return scrollPosition;
}

module.exports = getScrollPosition;

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/emptyFunction.js");

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_parseInt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_parseInt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(106);
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

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Constants = __webpack_require__(1014);

Object.keys(_Constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Constants[key];
    }
  });
});
Object.defineProperty(exports, 'Constants', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Constants).default;
  }
});

var _getEntityRanges = __webpack_require__(1016);

Object.defineProperty(exports, 'getEntityRanges', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getEntityRanges).default;
  }
});

var _getSelectedBlocks = __webpack_require__(895);

Object.defineProperty(exports, 'getSelectedBlocks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getSelectedBlocks).default;
  }
});

var _selectionContainsEntity = __webpack_require__(1017);

Object.defineProperty(exports, 'selectionContainsEntity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectionContainsEntity).default;
  }
});

var _callModifierForSelectedBlocks = __webpack_require__(1015);

Object.defineProperty(exports, 'callModifierForSelectedBlocks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_callModifierForSelectedBlocks).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BlockTree
 * 
 */



var Immutable = __webpack_require__(106);

var emptyFunction = __webpack_require__(912);
var findRangesImmutable = __webpack_require__(887);

var List = Immutable.List;
var Repeat = Immutable.Repeat;
var Record = Immutable.Record;


var returnTrue = emptyFunction.thatReturnsTrue;

var FINGERPRINT_DELIMITER = '-';

var defaultLeafRange = {
  start: null,
  end: null
};

var LeafRange = Record(defaultLeafRange);

var defaultDecoratorRange = {
  start: null,
  end: null,
  decoratorKey: null,
  leaves: null
};

var DecoratorRange = Record(defaultDecoratorRange);

var BlockTree = {
  /**
   * Generate a block tree for a given ContentBlock/decorator pair.
   */
  generate: function generate(block, decorator) {
    var textLength = block.getLength();
    if (!textLength) {
      return List.of(new DecoratorRange({
        start: 0,
        end: 0,
        decoratorKey: null,
        leaves: List.of(new LeafRange({ start: 0, end: 0 }))
      }));
    }

    var leafSets = [];
    var decorations = decorator ? decorator.getDecorations(block) : List(Repeat(null, textLength));

    var chars = block.getCharacterList();

    findRangesImmutable(decorations, areEqual, returnTrue, function (start, end) {
      leafSets.push(new DecoratorRange({
        start: start,
        end: end,
        decoratorKey: decorations.get(start),
        leaves: generateLeaves(chars.slice(start, end).toList(), start)
      }));
    });

    return List(leafSets);
  },

  /**
   * Create a string representation of the given tree map. This allows us
   * to rapidly determine whether a tree has undergone a significant
   * structural change.
   */
  getFingerprint: function getFingerprint(tree) {
    return tree.map(function (leafSet) {
      var decoratorKey = leafSet.get('decoratorKey');
      var fingerprintString = decoratorKey !== null ? decoratorKey + '.' + (leafSet.get('end') - leafSet.get('start')) : '';
      return '' + fingerprintString + '.' + leafSet.get('leaves').size;
    }).join(FINGERPRINT_DELIMITER);
  }
};

/**
 * Generate LeafRange records for a given character list.
 */
function generateLeaves(characters, offset) {
  var leaves = [];
  var inlineStyles = characters.map(function (c) {
    return c.getStyle();
  }).toList();
  findRangesImmutable(inlineStyles, areEqual, returnTrue, function (start, end) {
    leaves.push(new LeafRange({
      start: start + offset,
      end: end + offset
    }));
  });
  return List(leaves);
}

function areEqual(a, b) {
  return a === b;
}

module.exports = BlockTree;

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultDraftInlineStyle
 * 
 */



module.exports = {
  BOLD: {
    fontWeight: 'bold'
  },

  CODE: {
    fontFamily: 'monospace',
    wordWrap: 'break-word'
  },

  ITALIC: {
    fontStyle: 'italic'
  },

  STRIKETHROUGH: {
    textDecoration: 'line-through'
  },

  UNDERLINE: {
    textDecoration: 'underline'
  }
};

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorBlock.react
 * @typechecks
 * 
 */



var _assign = __webpack_require__(683);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentBlock = __webpack_require__(872);
var DraftEditorLeaf = __webpack_require__(1026);
var DraftOffsetKey = __webpack_require__(886);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(73);
var Scroll = __webpack_require__(951);
var SelectionState = __webpack_require__(876);
var Style = __webpack_require__(905);
var UnicodeBidi = __webpack_require__(952);
var UnicodeBidiDirection = __webpack_require__(906);

var cx = __webpack_require__(883);
var getElementPosition = __webpack_require__(1092);
var getScrollPosition = __webpack_require__(907);
var getViewportDimensions = __webpack_require__(1095);
var nullthrows = __webpack_require__(866);

var SCROLL_BUFFER = 10;

/**
 * The default block renderer for a `DraftEditor` component.
 *
 * A `DraftEditorBlock` is able to render a given `ContentBlock` to its
 * appropriate decorator and inline style components.
 */
var DraftEditorBlock = function (_React$Component) {
  _inherits(DraftEditorBlock, _React$Component);

  function DraftEditorBlock() {
    _classCallCheck(this, DraftEditorBlock);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DraftEditorBlock.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
  };

  /**
   * When a block is mounted and overlaps the selection state, we need to make
   * sure that the cursor is visible to match native behavior. This may not
   * be the case if the user has pressed `RETURN` or pasted some content, since
   * programatically creating these new blocks and setting the DOM selection
   * will miss out on the browser natively scrolling to that position.
   *
   * To replicate native behavior, if the block overlaps the selection state
   * on mount, force the scroll position. Check the scroll state of the scroll
   * parent, and adjust it to align the entire block to the bottom of the
   * scroll parent.
   */


  DraftEditorBlock.prototype.componentDidMount = function componentDidMount() {
    var selection = this.props.selection;
    var endKey = selection.getEndKey();
    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
      return;
    }

    var blockNode = ReactDOM.findDOMNode(this);
    var scrollParent = Style.getScrollParent(blockNode);
    var scrollPosition = getScrollPosition(scrollParent);
    var scrollDelta;

    if (scrollParent === window) {
      var nodePosition = getElementPosition(blockNode);
      var nodeBottom = nodePosition.y + nodePosition.height;
      var viewportHeight = getViewportDimensions().height;
      scrollDelta = nodeBottom - viewportHeight;
      if (scrollDelta > 0) {
        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
      }
    } else {
      var blockBottom = blockNode.offsetHeight + blockNode.offsetTop;
      var scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
      scrollDelta = blockBottom - scrollBottom;
      if (scrollDelta > 0) {
        Scroll.setTop(scrollParent, Scroll.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
      }
    }
  };

  DraftEditorBlock.prototype._renderChildren = function _renderChildren() {
    var _this2 = this;

    var block = this.props.block;
    var blockKey = block.getKey();
    var text = block.getText();
    var lastLeafSet = this.props.tree.size - 1;
    var hasSelection = isBlockOnSelectionEdge(this.props.selection, blockKey);

    return this.props.tree.map(function (leafSet, ii) {
      var leavesForLeafSet = leafSet.get('leaves');
      var lastLeaf = leavesForLeafSet.size - 1;
      var leaves = leavesForLeafSet.map(function (leaf, jj) {
        var offsetKey = DraftOffsetKey.encode(blockKey, ii, jj);
        var start = leaf.get('start');
        var end = leaf.get('end');
        return React.createElement(DraftEditorLeaf, {
          key: offsetKey,
          offsetKey: offsetKey,
          blockKey: blockKey,
          start: start,
          selection: hasSelection ? _this2.props.selection : undefined,
          forceSelection: _this2.props.forceSelection,
          text: text.slice(start, end),
          styleSet: block.getInlineStyleAt(start),
          customStyleMap: _this2.props.customStyleMap,
          customStyleFn: _this2.props.customStyleFn,
          isLast: ii === lastLeafSet && jj === lastLeaf
        });
      }).toArray();

      var decoratorKey = leafSet.get('decoratorKey');
      if (decoratorKey == null) {
        return leaves;
      }

      if (!_this2.props.decorator) {
        return leaves;
      }

      var decorator = nullthrows(_this2.props.decorator);

      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
      if (!DecoratorComponent) {
        return leaves;
      }

      var decoratorProps = decorator.getPropsForKey(decoratorKey);
      var decoratorOffsetKey = DraftOffsetKey.encode(blockKey, ii, 0);
      var decoratedText = text.slice(leavesForLeafSet.first().get('start'), leavesForLeafSet.last().get('end'));

      // Resetting dir to the same value on a child node makes Chrome/Firefox
      // confused on cursor movement. See http://jsfiddle.net/d157kLck/3/
      var dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);

      return React.createElement(
        DecoratorComponent,
        _extends({}, decoratorProps, {
          decoratedText: decoratedText,
          dir: dir,
          key: decoratorOffsetKey,
          entityKey: block.getEntityAt(leafSet.get('start')),
          offsetKey: decoratorOffsetKey }),
        leaves
      );
    }).toArray();
  };

  DraftEditorBlock.prototype.render = function render() {
    var _props = this.props;
    var direction = _props.direction;
    var offsetKey = _props.offsetKey;

    var className = cx({
      'public/DraftStyleDefault/block': true,
      'public/DraftStyleDefault/ltr': direction === 'LTR',
      'public/DraftStyleDefault/rtl': direction === 'RTL'
    });

    return React.createElement(
      'div',
      { 'data-offset-key': offsetKey, className: className },
      this._renderChildren()
    );
  };

  return DraftEditorBlock;
}(React.Component);

/**
 * Return whether a block overlaps with either edge of the `SelectionState`.
 */


function isBlockOnSelectionEdge(selection, key) {
  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
}

module.exports = DraftEditorBlock;

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEntityInstance
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Immutable = __webpack_require__(106);

var Record = Immutable.Record;


var DraftEntityInstanceRecord = Record({
  type: 'TOKEN',
  mutability: 'IMMUTABLE',
  data: Object
});

/**
 * An instance of a document entity, consisting of a `type` and relevant
 * `data`, metadata about the entity.
 *
 * For instance, a "link" entity might provide a URI, and a "mention"
 * entity might provide the mentioned user's ID. These pieces of data
 * may be used when rendering the entity as part of a ContentBlock DOM
 * representation. For a link, the data would be used as an href for
 * the rendered anchor. For a mention, the ID could be used to retrieve
 * a hovercard.
 */

var DraftEntityInstance = function (_DraftEntityInstanceR) {
  _inherits(DraftEntityInstance, _DraftEntityInstanceR);

  function DraftEntityInstance() {
    _classCallCheck(this, DraftEntityInstance);

    return _possibleConstructorReturn(this, _DraftEntityInstanceR.apply(this, arguments));
  }

  DraftEntityInstance.prototype.getType = function getType() {
    return this.get('type');
  };

  DraftEntityInstance.prototype.getMutability = function getMutability() {
    return this.get('mutability');
  };

  DraftEntityInstance.prototype.getData = function getData() {
    return this.get('data');
  };

  return DraftEntityInstance;
}(DraftEntityInstanceRecord);

module.exports = DraftEntityInstance;

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftRemovableWord
 * @typechecks
 * 
 */



var TokenizeUtil = __webpack_require__(1086);

var punctuation = TokenizeUtil.getPunctuation();

// The apostrophe and curly single quotes behave in a curious way: when
// surrounded on both sides by word characters, they behave as word chars; when
// either neighbor is punctuation or an end of the string, they behave as
// punctuation.
var CHAMELEON_CHARS = '[\'‘’]';

// Remove the underscore, which should count as part of the removable word. The
// "chameleon chars" also count as punctuation in this regex.
var WHITESPACE_AND_PUNCTUATION = '\\s|(?![_])' + punctuation;

var DELETE_STRING = '^' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)';
var DELETE_REGEX = new RegExp(DELETE_STRING);

var BACKSPACE_STRING = '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '$';
var BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING);

function getRemovableWord(text, isBackward) {
  var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
  return matches ? matches[0] : text;
}

var DraftRemovableWord = {
  getBackward: function getBackward(text) {
    return getRemovableWord(text, true);
  },

  getForward: function getForward(text) {
    return getRemovableWord(text, false);
  }
};

module.exports = DraftRemovableWord;

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftStringKey
 * @typechecks
 * 
 */



var DraftStringKey = {
  stringify: function stringify(key) {
    return '_' + String(key);
  },

  unstringify: function unstringify(key) {
    return key.slice(1);
  }
};

module.exports = DraftStringKey;

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule convertFromHTMLToContentBlocks
 * @typechecks
 * 
 */



var CharacterMetadata = __webpack_require__(867);
var ContentBlock = __webpack_require__(872);
var DefaultDraftBlockRenderMap = __webpack_require__(897);
var DraftEntity = __webpack_require__(871);
var Immutable = __webpack_require__(106);
var URI = __webpack_require__(1087);

var generateRandomKey = __webpack_require__(868);
var getSafeBodyFromHTML = __webpack_require__(940);
var invariant = __webpack_require__(864);
var nullthrows = __webpack_require__(866);
var sanitizeDraftText = __webpack_require__(902);

var List = Immutable.List;
var OrderedSet = Immutable.OrderedSet;


var NBSP = '&nbsp;';
var SPACE = ' ';

// Arbitrary max indent
var MAX_DEPTH = 4;

// used for replacing characters in HTML
var REGEX_CR = new RegExp('\r', 'g');
var REGEX_LF = new RegExp('\n', 'g');
var REGEX_NBSP = new RegExp(NBSP, 'g');
var REGEX_CARRIAGE = new RegExp('&#13;?', 'g');
var REGEX_ZWS = new RegExp('&#8203;?', 'g');

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
var boldValues = ['bold', 'bolder', '500', '600', '700', '800', '900'];
var notBoldValues = ['light', 'lighter', '100', '200', '300', '400'];

// Block tag flow is different because LIs do not have
// a deterministic style ;_;
var inlineTags = {
  b: 'BOLD',
  code: 'CODE',
  del: 'STRIKETHROUGH',
  em: 'ITALIC',
  i: 'ITALIC',
  s: 'STRIKETHROUGH',
  strike: 'STRIKETHROUGH',
  strong: 'BOLD',
  u: 'UNDERLINE'
};

var anchorAttr = ['className', 'href', 'rel', 'target', 'title'];

var lastBlock;

function getEmptyChunk() {
  return {
    text: '',
    inlines: [],
    entities: [],
    blocks: []
  };
}

function getWhitespaceChunk(inEntity) {
  var entities = new Array(1);
  if (inEntity) {
    entities[0] = inEntity;
  }
  return {
    text: SPACE,
    inlines: [OrderedSet()],
    entities: entities,
    blocks: []
  };
}

function getSoftNewlineChunk() {
  return {
    text: '\n',
    inlines: [OrderedSet()],
    entities: new Array(1),
    blocks: []
  };
}

function getBlockDividerChunk(block, depth) {
  return {
    text: '\r',
    inlines: [OrderedSet()],
    entities: new Array(1),
    blocks: [{
      type: block,
      depth: Math.max(0, Math.min(MAX_DEPTH, depth))
    }]
  };
}

function getListBlockType(tag, lastList) {
  if (tag === 'li') {
    return lastList === 'ol' ? 'ordered-list-item' : 'unordered-list-item';
  }
  return null;
}

function getBlockMapSupportedTags(blockRenderMap) {
  var unstyledElement = blockRenderMap.get('unstyled').element;
  return blockRenderMap.map(function (config) {
    return config.element;
  }).valueSeq().toSet().filter(function (tag) {
    return tag && tag !== unstyledElement;
  }).toArray().sort();
}

// custom element conversions
function getMultiMatchedType(tag, lastList, multiMatchExtractor) {
  for (var ii = 0; ii < multiMatchExtractor.length; ii++) {
    var matchType = multiMatchExtractor[ii](tag, lastList);
    if (matchType) {
      return matchType;
    }
  }
  return null;
}

function getBlockTypeForTag(tag, lastList, blockRenderMap) {
  var matchedTypes = blockRenderMap.filter(function (config) {
    return config.element === tag || config.wrapper === tag;
  }).keySeq().toSet().toArray().sort();

  // if we dont have any matched type, return unstyled
  // if we have one matched type return it
  // if we have multi matched types use the multi-match function to gather type
  switch (matchedTypes.length) {
    case 0:
      return 'unstyled';
    case 1:
      return matchedTypes[0];
    default:
      return getMultiMatchedType(tag, lastList, [getListBlockType]) || 'unstyled';
  }
}

function processInlineTag(tag, node, currentStyle) {
  var styleToCheck = inlineTags[tag];
  if (styleToCheck) {
    currentStyle = currentStyle.add(styleToCheck).toOrderedSet();
  } else if (node instanceof HTMLElement) {
    (function () {
      var htmlElement = node;
      currentStyle = currentStyle.withMutations(function (style) {
        var fontWeight = htmlElement.style.fontWeight;
        var fontStyle = htmlElement.style.fontStyle;
        var textDecoration = htmlElement.style.textDecoration;

        if (boldValues.indexOf(fontWeight) >= 0) {
          style.add('BOLD');
        } else if (notBoldValues.indexOf(fontWeight) >= 0) {
          style.remove('BOLD');
        }

        if (fontStyle === 'italic') {
          style.add('ITALIC');
        } else if (fontStyle === 'normal') {
          style.remove('ITALIC');
        }

        if (textDecoration === 'underline') {
          style.add('UNDERLINE');
        }
        if (textDecoration === 'line-through') {
          style.add('STRIKETHROUGH');
        }
        if (textDecoration === 'none') {
          style.remove('UNDERLINE');
          style.remove('STRIKETHROUGH');
        }
      }).toOrderedSet();
    })();
  }
  return currentStyle;
}

function joinChunks(A, B) {
  // Sometimes two blocks will touch in the DOM and we need to strip the
  // extra delimiter to preserve niceness.
  var lastInA = A.text.slice(-1);
  var firstInB = B.text.slice(0, 1);

  if (lastInA === '\r' && firstInB === '\r') {
    A.text = A.text.slice(0, -1);
    A.inlines.pop();
    A.entities.pop();
    A.blocks.pop();
  }

  // Kill whitespace after blocks
  if (lastInA === '\r') {
    if (B.text === SPACE || B.text === '\n') {
      return A;
    } else if (firstInB === SPACE || firstInB === '\n') {
      B.text = B.text.slice(1);
      B.inlines.shift();
      B.entities.shift();
    }
  }

  return {
    text: A.text + B.text,
    inlines: A.inlines.concat(B.inlines),
    entities: A.entities.concat(B.entities),
    blocks: A.blocks.concat(B.blocks)
  };
}

/**
 * Check to see if we have anything like <p> <blockquote> <h1>... to create
 * block tags from. If we do, we can use those and ignore <div> tags. If we
 * don't, we can treat <div> tags as meaningful (unstyled) blocks.
 */
function containsSemanticBlockMarkup(html, blockTags) {
  return blockTags.some(function (tag) {
    return html.indexOf('<' + tag) !== -1;
  });
}

function hasValidLinkText(link) {
  !(link instanceof HTMLAnchorElement) ?  true ? invariant(false, 'Link must be an HTMLAnchorElement.') : invariant(false) : void 0;
  var protocol = link.protocol;
  return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:';
}

function genFragment(node, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, inEntity) {
  var nodeName = node.nodeName.toLowerCase();
  var newBlock = false;
  var nextBlockType = 'unstyled';
  var lastLastBlock = lastBlock;

  // Base Case
  if (nodeName === '#text') {
    var text = node.textContent;
    if (text.trim() === '' && inBlock !== 'pre') {
      return getWhitespaceChunk(inEntity);
    }
    if (inBlock !== 'pre') {
      // Can't use empty string because MSWord
      text = text.replace(REGEX_LF, SPACE);
    }

    // save the last block so we can use it later
    lastBlock = nodeName;

    return {
      text: text,
      inlines: Array(text.length).fill(inlineStyle),
      entities: Array(text.length).fill(inEntity),
      blocks: []
    };
  }

  // save the last block so we can use it later
  lastBlock = nodeName;

  // BR tags
  if (nodeName === 'br') {
    if (lastLastBlock === 'br' && (!inBlock || getBlockTypeForTag(inBlock, lastList, blockRenderMap) === 'unstyled')) {
      return getBlockDividerChunk('unstyled', depth);
    }
    return getSoftNewlineChunk();
  }

  var chunk = getEmptyChunk();
  var newChunk = null;

  // Inline tags
  inlineStyle = processInlineTag(nodeName, node, inlineStyle);

  // Handle lists
  if (nodeName === 'ul' || nodeName === 'ol') {
    if (lastList) {
      depth += 1;
    }
    lastList = nodeName;
  }

  // Block Tags
  if (!inBlock && blockTags.indexOf(nodeName) !== -1) {
    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
    inBlock = nodeName;
    newBlock = true;
  } else if (lastList && inBlock === 'li' && nodeName === 'li') {
    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
    inBlock = nodeName;
    newBlock = true;
    nextBlockType = lastList === 'ul' ? 'unordered-list-item' : 'ordered-list-item';
  }

  // Recurse through children
  var child = node.firstChild;
  if (child != null) {
    nodeName = child.nodeName.toLowerCase();
  }

  var entityId = null;

  while (child) {
    if (child instanceof HTMLAnchorElement && child.href && hasValidLinkText(child)) {
      (function () {
        var anchor = child;
        var entityConfig = {};

        anchorAttr.forEach(function (attr) {
          var anchorAttribute = anchor.getAttribute(attr);
          if (anchorAttribute) {
            entityConfig[attr] = anchorAttribute;
          }
        });

        entityConfig.url = new URI(anchor.href).toString();

        entityId = DraftEntity.create('LINK', 'MUTABLE', entityConfig);
      })();
    } else {
      entityId = undefined;
    }

    newChunk = genFragment(child, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, entityId || inEntity);

    chunk = joinChunks(chunk, newChunk);
    var sibling = child.nextSibling;

    // Put in a newline to break up blocks inside blocks
    if (sibling && blockTags.indexOf(nodeName) >= 0 && inBlock) {
      chunk = joinChunks(chunk, getSoftNewlineChunk());
    }
    if (sibling) {
      nodeName = sibling.nodeName.toLowerCase();
    }
    child = sibling;
  }

  if (newBlock) {
    chunk = joinChunks(chunk, getBlockDividerChunk(nextBlockType, depth));
  }

  return chunk;
}

function getChunkForHTML(html, DOMBuilder, blockRenderMap) {
  html = html.trim().replace(REGEX_CR, '').replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, '').replace(REGEX_ZWS, '');

  var supportedBlockTags = getBlockMapSupportedTags(blockRenderMap);

  var safeBody = DOMBuilder(html);
  if (!safeBody) {
    return null;
  }
  lastBlock = null;

  // Sometimes we aren't dealing with content that contains nice semantic
  // tags. In this case, use divs to separate everything out into paragraphs
  // and hope for the best.
  var workingBlocks = containsSemanticBlockMarkup(html, supportedBlockTags) ? supportedBlockTags : ['div'];

  // Start with -1 block depth to offset the fact that we are passing in a fake
  // UL block to start with.
  var chunk = genFragment(safeBody, OrderedSet(), 'ul', null, workingBlocks, -1, blockRenderMap);

  // join with previous block to prevent weirdness on paste
  if (chunk.text.indexOf('\r') === 0) {
    chunk = {
      text: chunk.text.slice(1),
      inlines: chunk.inlines.slice(1),
      entities: chunk.entities.slice(1),
      blocks: chunk.blocks
    };
  }

  // Kill block delimiter at the end
  if (chunk.text.slice(-1) === '\r') {
    chunk.text = chunk.text.slice(0, -1);
    chunk.inlines = chunk.inlines.slice(0, -1);
    chunk.entities = chunk.entities.slice(0, -1);
    chunk.blocks.pop();
  }

  // If we saw no block tags, put an unstyled one in
  if (chunk.blocks.length === 0) {
    chunk.blocks.push({ type: 'unstyled', depth: 0 });
  }

  // Sometimes we start with text that isn't in a block, which is then
  // followed by blocks. Need to fix up the blocks to add in
  // an unstyled block for this content
  if (chunk.text.split('\r').length === chunk.blocks.length + 1) {
    chunk.blocks.unshift({ type: 'unstyled', depth: 0 });
  }

  return chunk;
}

function convertFromHTMLtoContentBlocks(html) {
  var DOMBuilder = arguments.length <= 1 || arguments[1] === undefined ? getSafeBodyFromHTML : arguments[1];
  var blockRenderMap = arguments.length <= 2 || arguments[2] === undefined ? DefaultDraftBlockRenderMap : arguments[2];

  // Be ABSOLUTELY SURE that the dom builder you pass here won't execute
  // arbitrary code in whatever environment you're running this in. For an
  // example of how we try to do this in-browser, see getSafeBodyFromHTML.

  var chunk = getChunkForHTML(html, DOMBuilder, blockRenderMap);

  if (chunk == null) {
    return null;
  }
  var start = 0;
  return chunk.text.split('\r').map(function (textBlock, ii) {
    // Make absolutely certain that our text is acceptable.
    textBlock = sanitizeDraftText(textBlock);
    var end = start + textBlock.length;
    var inlines = nullthrows(chunk).inlines.slice(start, end);
    var entities = nullthrows(chunk).entities.slice(start, end);
    var characterList = List(inlines.map(function (style, ii) {
      var data = { style: style, entity: null };
      if (entities[ii]) {
        data.entity = entities[ii];
      }
      return CharacterMetadata.create(data);
    }));
    start = end + 1;

    return new ContentBlock({
      key: generateRandomKey(),
      type: nullthrows(chunk).blocks[ii].type,
      depth: nullthrows(chunk).blocks[ii].depth,
      text: textBlock,
      characterList: characterList
    });
  });
}

module.exports = convertFromHTMLtoContentBlocks;

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getDefaultKeyBinding
 * @typechecks
 * 
 */



var KeyBindingUtil = __webpack_require__(898);
var Keys = __webpack_require__(904);
var UserAgent = __webpack_require__(869);

var isOSX = UserAgent.isPlatform('Mac OS X');
var isWindows = UserAgent.isPlatform('Windows');

// Firefox on OSX had a bug resulting in navigation instead of cursor movement.
// This bug was fixed in Firefox 29. Feature detection is virtually impossible
// so we just check the version number. See #342765.
var shouldFixFirefoxMovement = isOSX && UserAgent.isBrowser('Firefox < 29');

var hasCommandModifier = KeyBindingUtil.hasCommandModifier;
var isCtrlKeyCommand = KeyBindingUtil.isCtrlKeyCommand;


function shouldRemoveWord(e) {
  return isOSX && e.altKey || isCtrlKeyCommand(e);
}

/**
 * Get the appropriate undo/redo command for a Z key command.
 */
function getZCommand(e) {
  if (!hasCommandModifier(e)) {
    return null;
  }
  return e.shiftKey ? 'redo' : 'undo';
}

function getDeleteCommand(e) {
  // Allow default "cut" behavior for Windows on Shift + Delete.
  if (isWindows && e.shiftKey) {
    return null;
  }
  return shouldRemoveWord(e) ? 'delete-word' : 'delete';
}

function getBackspaceCommand(e) {
  if (hasCommandModifier(e) && isOSX) {
    return 'backspace-to-start-of-line';
  }
  return shouldRemoveWord(e) ? 'backspace-word' : 'backspace';
}

/**
 * Retrieve a bound key command for the given event.
 */
function getDefaultKeyBinding(e) {
  switch (e.keyCode) {
    case 66:
      // B
      return hasCommandModifier(e) ? 'bold' : null;
    case 68:
      // D
      return isCtrlKeyCommand(e) ? 'delete' : null;
    case 72:
      // H
      return isCtrlKeyCommand(e) ? 'backspace' : null;
    case 73:
      // I
      return hasCommandModifier(e) ? 'italic' : null;
    case 74:
      // J
      return hasCommandModifier(e) ? 'code' : null;
    case 75:
      // K
      return !isWindows && isCtrlKeyCommand(e) ? 'secondary-cut' : null;
    case 77:
      // M
      return isCtrlKeyCommand(e) ? 'split-block' : null;
    case 79:
      // O
      return isCtrlKeyCommand(e) ? 'split-block' : null;
    case 84:
      // T
      return isOSX && isCtrlKeyCommand(e) ? 'transpose-characters' : null;
    case 85:
      // U
      return hasCommandModifier(e) ? 'underline' : null;
    case 87:
      // W
      return isOSX && isCtrlKeyCommand(e) ? 'backspace-word' : null;
    case 89:
      // Y
      if (isCtrlKeyCommand(e)) {
        return isWindows ? 'redo' : 'secondary-paste';
      }
      return null;
    case 90:
      // Z
      return getZCommand(e) || null;
    case Keys.RETURN:
      return 'split-block';
    case Keys.DELETE:
      return getDeleteCommand(e);
    case Keys.BACKSPACE:
      return getBackspaceCommand(e);
    // LEFT/RIGHT handlers serve as a workaround for a Firefox bug.
    case Keys.LEFT:
      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-start-of-block' : null;
    case Keys.RIGHT:
      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-end-of-block' : null;
    default:
      return null;
  }
}

module.exports = getDefaultKeyBinding;

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getDraftEditorSelectionWithNodes
 * @typechecks
 * 
 */



var findAncestorOffsetKey = __webpack_require__(899);
var getSelectionOffsetKeyForNode = __webpack_require__(941);
var getUpdatedSelectionState = __webpack_require__(943);
var invariant = __webpack_require__(864);
var nullthrows = __webpack_require__(866);

/**
 * Convert the current selection range to an anchor/focus pair of offset keys
 * and values that can be interpreted by components.
 */
function getDraftEditorSelectionWithNodes(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset) {
  var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE;
  var focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;

  // If the selection range lies only on text nodes, the task is simple.
  // Find the nearest offset-aware elements and use the
  // offset values supplied by the selection range.
  if (anchorIsTextNode && focusIsTextNode) {
    return {
      selectionState: getUpdatedSelectionState(editorState, nullthrows(findAncestorOffsetKey(anchorNode)), anchorOffset, nullthrows(findAncestorOffsetKey(focusNode)), focusOffset),
      needsRecovery: false
    };
  }

  var anchorPoint = null;
  var focusPoint = null;
  var needsRecovery = true;

  // An element is selected. Convert this selection range into leaf offset
  // keys and offset values for consumption at the component level. This
  // is common in Firefox, where select-all and triple click behavior leads
  // to entire elements being selected.
  //
  // Note that we use the `needsRecovery` parameter in the callback here. This
  // is because when certain elements are selected, the behavior for subsequent
  // cursor movement (e.g. via arrow keys) is uncertain and may not match
  // expectations at the component level. For example, if an entire <div> is
  // selected and the user presses the right arrow, Firefox keeps the selection
  // on the <div>. If we allow subsequent keypresses to insert characters
  // natively, they will be inserted into a browser-created text node to the
  // right of that <div>. This is obviously undesirable.
  //
  // With the `needsRecovery` flag, we inform the caller that it is responsible
  // for manually setting the selection state on the rendered document to
  // ensure proper selection state maintenance.

  if (anchorIsTextNode) {
    anchorPoint = {
      key: nullthrows(findAncestorOffsetKey(anchorNode)),
      offset: anchorOffset
    };
    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);
  } else if (focusIsTextNode) {
    focusPoint = {
      key: nullthrows(findAncestorOffsetKey(focusNode)),
      offset: focusOffset
    };
    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
  } else {
    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);

    // If the selection is collapsed on an empty block, don't force recovery.
    // This way, on arrow key selection changes, the browser can move the
    // cursor from a non-zero offset on one block, through empty blocks,
    // to a matching non-zero offset on other text blocks.
    if (anchorNode === focusNode && anchorOffset === focusOffset) {
      needsRecovery = !!anchorNode.firstChild && anchorNode.firstChild.nodeName !== 'BR';
    }
  }

  return {
    selectionState: getUpdatedSelectionState(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
    needsRecovery: needsRecovery
  };
}

/**
 * Identify the first leaf descendant for the given node.
 */
function getFirstLeaf(node) {
  while (node.firstChild && getSelectionOffsetKeyForNode(node.firstChild)) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Identify the last leaf descendant for the given node.
 */
function getLastLeaf(node) {
  while (node.lastChild && getSelectionOffsetKeyForNode(node.lastChild)) {
    node = node.lastChild;
  }
  return node;
}

function getPointForNonTextNode(editorRoot, startNode, childOffset) {
  var node = startNode;
  var offsetKey = findAncestorOffsetKey(node);

  !(offsetKey != null || editorRoot && (editorRoot === node || editorRoot.firstChild === node)) ?  true ? invariant(false, 'Unknown node in selection range.') : invariant(false) : void 0;

  // If the editorRoot is the selection, step downward into the content
  // wrapper.
  if (editorRoot === node) {
    node = node.firstChild;
    !(node instanceof Element && node.getAttribute('data-contents') === 'true') ?  true ? invariant(false, 'Invalid DraftEditorContents structure.') : invariant(false) : void 0;
    if (childOffset > 0) {
      childOffset = node.childNodes.length;
    }
  }

  // If the child offset is zero and we have an offset key, we're done.
  // If there's no offset key because the entire editor is selected,
  // find the leftmost ("first") leaf in the tree and use that as the offset
  // key.
  if (childOffset === 0) {
    var key = null;
    if (offsetKey != null) {
      key = offsetKey;
    } else {
      var firstLeaf = getFirstLeaf(node);
      key = nullthrows(getSelectionOffsetKeyForNode(firstLeaf));
    }
    return { key: key, offset: 0 };
  }

  var nodeBeforeCursor = node.childNodes[childOffset - 1];
  var leafKey = null;
  var textLength = null;

  if (!getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
    // Our target node may be a leaf or a text node, in which case we're
    // already where we want to be and can just use the child's length as
    // our offset.
    leafKey = nullthrows(offsetKey);
    textLength = getTextContentLength(nodeBeforeCursor);
  } else {
    // Otherwise, we'll look at the child to the left of the cursor and find
    // the last leaf node in its subtree.
    var lastLeaf = getLastLeaf(nodeBeforeCursor);
    leafKey = nullthrows(getSelectionOffsetKeyForNode(lastLeaf));
    textLength = getTextContentLength(lastLeaf);
  }

  return {
    key: leafKey,
    offset: textLength
  };
}

/**
 * Return the length of a node's textContent, regarding single newline
 * characters as zero-length. This allows us to avoid problems with identifying
 * the correct selection offset for empty blocks in IE, in which we
 * render newlines instead of break tags.
 */
function getTextContentLength(node) {
  var textContent = node.textContent;
  return textContent === '\n' ? 0 : textContent.length;
}

module.exports = getDraftEditorSelectionWithNodes;

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getFragmentFromSelection
 * 
 */



var getContentStateFragment = __webpack_require__(888);

function getFragmentFromSelection(editorState) {
  var selectionState = editorState.getSelection();

  if (selectionState.isCollapsed()) {
    return null;
  }

  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
}

module.exports = getFragmentFromSelection;

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getRangeClientRects
 * @typechecks
 * 
 */



var UserAgent = __webpack_require__(869);

var invariant = __webpack_require__(864);

var isChrome = UserAgent.isBrowser('Chrome');

// In Chrome, the client rects will include the entire bounds of all nodes that
// begin (have a start tag) within the selection, even if the selection does
// not overlap the entire node. To resolve this, we split the range at each
// start tag and join the client rects together.
// https://code.google.com/p/chromium/issues/detail?id=324437
/* eslint-disable consistent-return */
function getRangeClientRectsChrome(range) {
  var tempRange = range.cloneRange();
  var clientRects = [];

  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
    // If we've climbed up to the common ancestor, we can now use the
    // original start point and stop climbing the tree.
    var atCommonAncestor = ancestor === range.commonAncestorContainer;
    if (atCommonAncestor) {
      tempRange.setStart(range.startContainer, range.startOffset);
    } else {
      tempRange.setStart(tempRange.endContainer, 0);
    }
    var rects = Array.from(tempRange.getClientRects());
    clientRects.push(rects);
    if (atCommonAncestor) {
      var _ref;

      clientRects.reverse();
      return (_ref = []).concat.apply(_ref, clientRects);
    }
    tempRange.setEndBefore(ancestor);
  }

   true ?  true ? invariant(false, 'Found an unexpected detached subtree when getting range client rects.') : invariant(false) : void 0;
}
/* eslint-enable consistent-return */

/**
 * Like range.getClientRects() but normalizes for browser bugs.
 */
var getRangeClientRects = isChrome ? getRangeClientRectsChrome : function (range) {
  return Array.from(range.getClientRects());
};

module.exports = getRangeClientRects;

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getSafeBodyFromHTML
 * 
 */



var UserAgent = __webpack_require__(869);

var isOldIE = UserAgent.isBrowser('IE <= 9');

// Provides a dom node that will not execute scripts
// https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation.createHTMLDocument
// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/HTML_to_DOM

function getSafeBodyFromHTML(html) {
  var doc;
  var root = null;
  // Provides a safe context
  if (!isOldIE && document.implementation && document.implementation.createHTMLDocument) {
    doc = document.implementation.createHTMLDocument('foo');
    doc.documentElement.innerHTML = html;
    root = doc.getElementsByTagName('body')[0];
  }
  return root;
}

module.exports = getSafeBodyFromHTML;

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getSelectionOffsetKeyForNode
 * @typechecks
 * 
 */



/**
 * Get offset key from a node or it's child nodes. Return the first offset key
 * found on the DOM tree of given node.
 */

function getSelectionOffsetKeyForNode(node) {
  if (node instanceof Element) {
    var offsetKey = node.getAttribute('data-offset-key');
    if (offsetKey) {
      return offsetKey;
    }
    for (var ii = 0; ii < node.childNodes.length; ii++) {
      var childOffsetKey = getSelectionOffsetKeyForNode(node.childNodes[ii]);
      if (childOffsetKey) {
        return childOffsetKey;
      }
    }
  }
  return null;
}

module.exports = getSelectionOffsetKeyForNode;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentFromFiles
 * 
 */



var TEXT_CLIPPING_REGEX = /\.textClipping$/;

var TEXT_TYPES = {
  'text/plain': true,
  'text/html': true,
  'text/rtf': true
};

// Somewhat arbitrary upper bound on text size. Let's not lock up the browser.
var TEXT_SIZE_UPPER_BOUND = 5000;

/**
 * Extract the text content from a file list.
 */
function getTextContentFromFiles(files, callback) {
  var readCount = 0;
  var results = [];
  files.forEach(function ( /*blob*/file) {
    readFile(file, function ( /*string*/text) {
      readCount++;
      text && results.push(text.slice(0, TEXT_SIZE_UPPER_BOUND));
      if (readCount == files.length) {
        callback(results.join('\r'));
      }
    });
  });
}

/**
 * todo isaac: Do work to turn html/rtf into a content fragment.
 */
function readFile(file, callback) {
  if (!global.FileReader || file.type && !(file.type in TEXT_TYPES)) {
    callback('');
    return;
  }

  if (file.type === '') {
    var contents = '';
    // Special-case text clippings, which have an empty type but include
    // `.textClipping` in the file name. `readAsText` results in an empty
    // string for text clippings, so we force the file name to serve
    // as the text value for the file.
    if (TEXT_CLIPPING_REGEX.test(file.name)) {
      contents = file.name.replace(TEXT_CLIPPING_REGEX, '');
    }
    callback(contents);
    return;
  }

  var reader = new FileReader();
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function () {
    callback('');
  };
  reader.readAsText(file);
}

module.exports = getTextContentFromFiles;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(542)))

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUpdatedSelectionState
 * 
 */



var DraftOffsetKey = __webpack_require__(886);

var nullthrows = __webpack_require__(866);

function getUpdatedSelectionState(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
  var selection = nullthrows(editorState.getSelection());
  if (true) {
    if (!anchorKey || !focusKey) {
      /*eslint-disable no-console */
      console.warn('Invalid selection state.', arguments, editorState.toJS());
      /*eslint-enable no-console */
      return selection;
    }
  }

  var anchorPath = DraftOffsetKey.decode(anchorKey);
  var anchorBlockKey = anchorPath.blockKey;
  var anchorLeaf = editorState.getBlockTree(anchorBlockKey).getIn([anchorPath.decoratorKey, 'leaves', anchorPath.leafKey]);

  var focusPath = DraftOffsetKey.decode(focusKey);
  var focusBlockKey = focusPath.blockKey;
  var focusLeaf = editorState.getBlockTree(focusBlockKey).getIn([focusPath.decoratorKey, 'leaves', focusPath.leafKey]);

  var anchorLeafStart = anchorLeaf.get('start');
  var focusLeafStart = focusLeaf.get('start');

  var anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null;
  var focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null;

  var areEqual = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;

  if (areEqual) {
    return selection;
  }

  var isBackward = false;
  if (anchorBlockKey === focusBlockKey) {
    var anchorLeafEnd = anchorLeaf.get('end');
    var focusLeafEnd = focusLeaf.get('end');
    if (focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd) {
      isBackward = focusOffset < anchorOffset;
    } else {
      isBackward = focusLeafStart < anchorLeafStart;
    }
  } else {
    var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function (v) {
      return v === anchorBlockKey || v === focusBlockKey;
    }).first();
    isBackward = startKey === focusBlockKey;
  }

  return selection.merge({
    anchorKey: anchorBlockKey,
    anchorOffset: anchorBlockOffset,
    focusKey: focusBlockKey,
    focusOffset: focusBlockOffset,
    isBackward: isBackward
  });
}

module.exports = getUpdatedSelectionState;

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule insertIntoList
 * 
 */



/**
 * Maintain persistence for target list when appending and prepending.
 */
function insertIntoList(targetList, toInsert, offset) {
  if (offset === targetList.count()) {
    toInsert.forEach(function (c) {
      targetList = targetList.push(c);
    });
  } else if (offset === 0) {
    toInsert.reverse().forEach(function (c) {
      targetList = targetList.unshift(c);
    });
  } else {
    var head = targetList.slice(0, offset);
    var tail = targetList.slice(offset);
    targetList = head.concat(toInsert, tail).toList();
  }
  return targetList;
}

module.exports = insertIntoList;

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isSelectionAtLeafStart
 * @typechecks
 * 
 */



function isSelectionAtLeafStart(editorState) {
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var blockTree = editorState.getBlockTree(anchorKey);
  var offset = selection.getStartOffset();

  var isAtStart = false;

  blockTree.some(function (leafSet) {
    if (offset === leafSet.get('start')) {
      isAtStart = true;
      return true;
    }

    if (offset < leafSet.get('end')) {
      return leafSet.get('leaves').some(function (leaf) {
        var leafStart = leaf.get('start');
        if (offset === leafStart) {
          isAtStart = true;
          return true;
        }

        return false;
      });
    }

    return false;
  });

  return isAtStart;
}

module.exports = isSelectionAtLeafStart;

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule moveSelectionForward
 * 
 */



/**
 * Given a collapsed selection, move the focus `maxDistance` forward within
 * the selected block. If the selection will go beyond the end of the block,
 * move focus to the start of the next block, but no further.
 *
 * This function is not Unicode-aware, so surrogate pairs will be treated
 * as having length 2.
 */
function moveSelectionForward(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();
  var content = editorState.getCurrentContent();

  var focusKey = key;
  var focusOffset;

  var block = content.getBlockForKey(key);

  if (maxDistance > block.getText().length - offset) {
    focusKey = content.getKeyAfter(key);
    focusOffset = 0;
  } else {
    focusOffset = offset + maxDistance;
  }

  return selection.merge({ focusKey: focusKey, focusOffset: focusOffset });
}

module.exports = moveSelectionForward;

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeEntitiesAtEdges
 * 
 */



var CharacterMetadata = __webpack_require__(867);
var DraftEntity = __webpack_require__(871);

var findRangesImmutable = __webpack_require__(887);
var invariant = __webpack_require__(864);

function removeEntitiesAtEdges(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();

  var updatedBlocks = {};

  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(startBlock, startOffset);

  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }

  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }

  var updatedEnd = removeForBlock(endBlock, endOffset);

  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }

  if (!Object.keys(updatedBlocks).length) {
    return contentState.set('selectionAfter', selectionState);
  }

  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}

function getRemovalRange(characters, key, offset) {
  var removalRange;
  findRangesImmutable(characters, function (a, b) {
    return a.getEntity() === b.getEntity();
  }, function (element) {
    return element.getEntity() === key;
  }, function (start, end) {
    if (start <= offset && end >= offset) {
      removalRange = { start: start, end: end };
    }
  });
  !(typeof removalRange === 'object') ?  true ? invariant(false, 'Removal range must exist within character list.') : invariant(false) : void 0;
  return removalRange;
}

function removeForBlock(block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = DraftEntity.get(entityAfterCursor);
    if (entity.getMutability() !== 'MUTABLE') {
      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset);

      var start = _getRemovalRange.start;
      var end = _getRemovalRange.end;

      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
        start++;
      }
      return block.set('characterList', chars);
    }
  }

  return block;
}

module.exports = removeEntitiesAtEdges;

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var PhotosMimeType = __webpack_require__(1085);

var createArrayFromMixed = __webpack_require__(1377);
var emptyFunction = __webpack_require__(912);

var CR_LF_REGEX = new RegExp('\r\n', 'g');
var LF_ONLY = '\n';

var RICH_TEXT_TYPES = {
  'text/rtf': 1,
  'text/html': 1
};

/**
 * If DataTransferItem is a file then return the Blob of data.
 *
 * @param {object} item
 * @return {?blob}
 */
function getFileFromDataTransfer(item) {
  if (item.kind == 'file') {
    return item.getAsFile();
  }
}

var DataTransfer = function () {
  /**
   * @param {object} data
   */
  function DataTransfer(data) {
    _classCallCheck(this, DataTransfer);

    this.data = data;

    // Types could be DOMStringList or array
    this.types = data.types ? createArrayFromMixed(data.types) : [];
  }

  /**
   * Is this likely to be a rich text data transfer?
   *
   * @return {boolean}
   */


  DataTransfer.prototype.isRichText = function isRichText() {
    // If HTML is available, treat this data as rich text. This way, we avoid
    // using a pasted image if it is packaged with HTML -- this may occur with
    // pastes from MS Word, for example.  However this is only rich text if
    // there's accompanying text.
    if (this.getHTML() && this.getText()) {
      return true;
    }

    // When an image is copied from a preview window, you end up with two
    // DataTransferItems one of which is a file's metadata as text.  Skip those.
    if (this.isImage()) {
      return false;
    }

    return this.types.some(function (type) {
      return RICH_TEXT_TYPES[type];
    });
  };

  /**
   * Get raw text.
   *
   * @return {?string}
   */


  DataTransfer.prototype.getText = function getText() {
    var text;
    if (this.data.getData) {
      if (!this.types.length) {
        text = this.data.getData('Text');
      } else if (this.types.indexOf('text/plain') != -1) {
        text = this.data.getData('text/plain');
      }
    }
    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
  };

  /**
   * Get HTML paste data
   *
   * @return {?string}
   */


  DataTransfer.prototype.getHTML = function getHTML() {
    if (this.data.getData) {
      if (!this.types.length) {
        return this.data.getData('Text');
      } else if (this.types.indexOf('text/html') != -1) {
        return this.data.getData('text/html');
      }
    }
  };

  /**
   * Is this a link data transfer?
   *
   * @return {boolean}
   */


  DataTransfer.prototype.isLink = function isLink() {
    return this.types.some(function (type) {
      return type.indexOf('Url') != -1 || type.indexOf('text/uri-list') != -1 || type.indexOf('text/x-moz-url');
    });
  };

  /**
   * Get a link url.
   *
   * @return {?string}
   */


  DataTransfer.prototype.getLink = function getLink() {
    if (this.data.getData) {
      if (this.types.indexOf('text/x-moz-url') != -1) {
        var url = this.data.getData('text/x-moz-url').split('\n');
        return url[0];
      }
      return this.types.indexOf('text/uri-list') != -1 ? this.data.getData('text/uri-list') : this.data.getData('url');
    }

    return null;
  };

  /**
   * Is this an image data transfer?
   *
   * @return {boolean}
   */


  DataTransfer.prototype.isImage = function isImage() {
    var isImage = this.types.some(function (type) {
      // Firefox will have a type of application/x-moz-file for images during
      // dragging
      return type.indexOf('application/x-moz-file') != -1;
    });

    if (isImage) {
      return true;
    }

    var items = this.getFiles();
    for (var i = 0; i < items.length; i++) {
      var type = items[i].type;
      if (!PhotosMimeType.isImage(type)) {
        return false;
      }
    }

    return true;
  };

  DataTransfer.prototype.getCount = function getCount() {
    if (this.data.hasOwnProperty('items')) {
      return this.data.items.length;
    } else if (this.data.hasOwnProperty('mozItemCount')) {
      return this.data.mozItemCount;
    } else if (this.data.files) {
      return this.data.files.length;
    }
    return null;
  };

  /**
   * Get files.
   *
   * @return {array}
   */


  DataTransfer.prototype.getFiles = function getFiles() {
    if (this.data.items) {
      // createArrayFromMixed doesn't properly handle DataTransferItemLists.
      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction.thatReturnsArgument);
    } else if (this.data.files) {
      return Array.prototype.slice.call(this.data.files);
    } else {
      return [];
    }
  };

  /**
   * Are there any files to fetch?
   *
   * @return {boolean}
   */


  DataTransfer.prototype.hasFiles = function hasFiles() {
    return this.getFiles().length > 0;
  };

  return DataTransfer;
}();

module.exports = DataTransfer;

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * @param {DOMElement} element
 * @param {DOMDocument} doc
 * @return {boolean}
 */
function _isViewportScrollElement(element, doc) {
  return !!doc && (element === doc.documentElement || element === doc.body);
}

/**
 * Scroll Module. This class contains 4 simple static functions
 * to be used to access Element.scrollTop/scrollLeft properties.
 * To solve the inconsistencies between browsers when either
 * document.body or document.documentElement is supplied,
 * below logic will be used to alleviate the issue:
 *
 * 1. If 'element' is either 'document.body' or 'document.documentElement,
 *    get whichever element's 'scroll{Top,Left}' is larger.
 * 2. If 'element' is either 'document.body' or 'document.documentElement',
 *    set the 'scroll{Top,Left}' on both elements.
 */

var Scroll = {
  /**
   * @param {DOMElement} element
   * @return {number}
   */
  getTop: function getTop(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ?
    // In practice, they will either both have the same value,
    // or one will be zero and the other will be the scroll position
    // of the viewport. So we can use `X || Y` instead of `Math.max(X, Y)`
    doc.body.scrollTop || doc.documentElement.scrollTop : element.scrollTop;
  },

  /**
   * @param {DOMElement} element
   * @param {number} newTop
   */
  setTop: function setTop(element, newTop) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollTop = doc.documentElement.scrollTop = newTop;
    } else {
      element.scrollTop = newTop;
    }
  },

  /**
   * @param {DOMElement} element
   * @return {number}
   */
  getLeft: function getLeft(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
  },

  /**
   * @param {DOMElement} element
   * @param {number} newLeft
   */
  setLeft: function setLeft(element, newLeft) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft;
    } else {
      element.scrollLeft = newLeft;
    }
  }
};

module.exports = Scroll;

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/**
 * Basic (stateless) API for text direction detection
 *
 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */



var UnicodeBidiDirection = __webpack_require__(906);

var invariant = __webpack_require__(864);

/**
 * RegExp ranges of characters with a *Strong* Bidi_Class value.
 *
 * Data is based on DerivedBidiClass.txt in UCD version 7.0.0.
 *
 * NOTE: For performance reasons, we only support Unicode's
 *       Basic Multilingual Plane (BMP) for now.
 */
var RANGE_BY_BIDI_TYPE = {

  L: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BB' + '\u01BC-\u01BF\u01C0-\u01C3\u01C4-\u0293\u0294\u0295-\u02AF\u02B0-\u02B8' + '\u02BB-\u02C1\u02D0-\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376-\u0377' + '\u037A\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1' + '\u03A3-\u03F5\u03F7-\u0481\u0482\u048A-\u052F\u0531-\u0556\u0559' + '\u055A-\u055F\u0561-\u0587\u0589\u0903\u0904-\u0939\u093B\u093D' + '\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0950\u0958-\u0961\u0964-\u0965' + '\u0966-\u096F\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098C' + '\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD' + '\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09CE\u09D7\u09DC-\u09DD' + '\u09DF-\u09E1\u09E6-\u09EF\u09F0-\u09F1\u09F4-\u09F9\u09FA\u0A03' + '\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33' + '\u0A35-\u0A36\u0A38-\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F' + '\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0' + '\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0AD0' + '\u0AE0-\u0AE1\u0AE6-\u0AEF\u0AF0\u0B02-\u0B03\u0B05-\u0B0C\u0B0F-\u0B10' + '\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40' + '\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0B5C-\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F' + '\u0B70\u0B71\u0B72-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95' + '\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9' + '\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7' + '\u0BE6-\u0BEF\u0BF0-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10' + '\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C59\u0C60-\u0C61' + '\u0C66-\u0C6F\u0C7F\u0C82-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8' + '\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CBE\u0CBF\u0CC0-\u0CC4\u0CC6' + '\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0CDE\u0CE0-\u0CE1\u0CE6-\u0CEF' + '\u0CF1-\u0CF2\u0D02-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D' + '\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D61' + '\u0D66-\u0D6F\u0D70-\u0D75\u0D79\u0D7A-\u0D7F\u0D82-\u0D83\u0D85-\u0D96' + '\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF' + '\u0DE6-\u0DEF\u0DF2-\u0DF3\u0DF4\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45' + '\u0E46\u0E4F\u0E50-\u0E59\u0E5A-\u0E5B\u0E81-\u0E82\u0E84\u0E87-\u0E88' + '\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7' + '\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6' + '\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F01-\u0F03\u0F04-\u0F12\u0F13\u0F14' + '\u0F15-\u0F17\u0F1A-\u0F1F\u0F20-\u0F29\u0F2A-\u0F33\u0F34\u0F36\u0F38' + '\u0F3E-\u0F3F\u0F40-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C' + '\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FCF\u0FD0-\u0FD4\u0FD5-\u0FD8' + '\u0FD9-\u0FDA\u1000-\u102A\u102B-\u102C\u1031\u1038\u103B-\u103C\u103F' + '\u1040-\u1049\u104A-\u104F\u1050-\u1055\u1056-\u1057\u105A-\u105D\u1061' + '\u1062-\u1064\u1065-\u1066\u1067-\u106D\u106E-\u1070\u1075-\u1081' + '\u1083-\u1084\u1087-\u108C\u108E\u108F\u1090-\u1099\u109A-\u109C' + '\u109E-\u109F\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FB\u10FC' + '\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288' + '\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5' + '\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u1368' + '\u1369-\u137C\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166D-\u166E' + '\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EB-\u16ED\u16EE-\u16F0' + '\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735-\u1736' + '\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5' + '\u17C7-\u17C8\u17D4-\u17D6\u17D7\u17D8-\u17DA\u17DC\u17E0-\u17E9' + '\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18A8\u18AA' + '\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930-\u1931' + '\u1933-\u1938\u1946-\u194F\u1950-\u196D\u1970-\u1974\u1980-\u19AB' + '\u19B0-\u19C0\u19C1-\u19C7\u19C8-\u19C9\u19D0-\u19D9\u19DA\u1A00-\u1A16' + '\u1A19-\u1A1A\u1A1E-\u1A1F\u1A20-\u1A54\u1A55\u1A57\u1A61\u1A63-\u1A64' + '\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AA6\u1AA7\u1AA8-\u1AAD' + '\u1B04\u1B05-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B45-\u1B4B' + '\u1B50-\u1B59\u1B5A-\u1B60\u1B61-\u1B6A\u1B74-\u1B7C\u1B82\u1B83-\u1BA0' + '\u1BA1\u1BA6-\u1BA7\u1BAA\u1BAE-\u1BAF\u1BB0-\u1BB9\u1BBA-\u1BE5\u1BE7' + '\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1BFC-\u1BFF\u1C00-\u1C23\u1C24-\u1C2B' + '\u1C34-\u1C35\u1C3B-\u1C3F\u1C40-\u1C49\u1C4D-\u1C4F\u1C50-\u1C59' + '\u1C5A-\u1C77\u1C78-\u1C7D\u1C7E-\u1C7F\u1CC0-\u1CC7\u1CD3\u1CE1' + '\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF2-\u1CF3\u1CF5-\u1CF6\u1D00-\u1D2B' + '\u1D2C-\u1D6A\u1D6B-\u1D77\u1D78\u1D79-\u1D9A\u1D9B-\u1DBF\u1E00-\u1F15' + '\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D' + '\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC' + '\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E' + '\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D' + '\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2135-\u2138\u2139' + '\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2182\u2183-\u2184' + '\u2185-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF' + '\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7C-\u2C7D\u2C7E-\u2CE4' + '\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F' + '\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE' + '\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005\u3006\u3007' + '\u3021-\u3029\u302E-\u302F\u3031-\u3035\u3038-\u303A\u303B\u303C' + '\u3041-\u3096\u309D-\u309E\u309F\u30A1-\u30FA\u30FC-\u30FE\u30FF' + '\u3105-\u312D\u3131-\u318E\u3190-\u3191\u3192-\u3195\u3196-\u319F' + '\u31A0-\u31BA\u31F0-\u31FF\u3200-\u321C\u3220-\u3229\u322A-\u3247' + '\u3248-\u324F\u3260-\u327B\u327F\u3280-\u3289\u328A-\u32B0\u32C0-\u32CB' + '\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5' + '\u4E00-\u9FCC\uA000-\uA014\uA015\uA016-\uA48C\uA4D0-\uA4F7\uA4F8-\uA4FD' + '\uA4FE-\uA4FF\uA500-\uA60B\uA60C\uA610-\uA61F\uA620-\uA629\uA62A-\uA62B' + '\uA640-\uA66D\uA66E\uA680-\uA69B\uA69C-\uA69D\uA6A0-\uA6E5\uA6E6-\uA6EF' + '\uA6F2-\uA6F7\uA722-\uA76F\uA770\uA771-\uA787\uA789-\uA78A\uA78B-\uA78E' + '\uA790-\uA7AD\uA7B0-\uA7B1\uA7F7\uA7F8-\uA7F9\uA7FA\uA7FB-\uA801' + '\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA823-\uA824\uA827\uA830-\uA835' + '\uA836-\uA837\uA840-\uA873\uA880-\uA881\uA882-\uA8B3\uA8B4-\uA8C3' + '\uA8CE-\uA8CF\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8F8-\uA8FA\uA8FB\uA900-\uA909' + '\uA90A-\uA925\uA92E-\uA92F\uA930-\uA946\uA952-\uA953\uA95F\uA960-\uA97C' + '\uA983\uA984-\uA9B2\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uA9C1-\uA9CD' + '\uA9CF\uA9D0-\uA9D9\uA9DE-\uA9DF\uA9E0-\uA9E4\uA9E6\uA9E7-\uA9EF' + '\uA9F0-\uA9F9\uA9FA-\uA9FE\uAA00-\uAA28\uAA2F-\uAA30\uAA33-\uAA34' + '\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F\uAA60-\uAA6F' + '\uAA70\uAA71-\uAA76\uAA77-\uAA79\uAA7A\uAA7B\uAA7D\uAA7E-\uAAAF\uAAB1' + '\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAADD\uAADE-\uAADF' + '\uAAE0-\uAAEA\uAAEB\uAAEE-\uAAEF\uAAF0-\uAAF1\uAAF2\uAAF3-\uAAF4\uAAF5' + '\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E' + '\uAB30-\uAB5A\uAB5B\uAB5C-\uAB5F\uAB64-\uAB65\uABC0-\uABE2\uABE3-\uABE4' + '\uABE6-\uABE7\uABE9-\uABEA\uABEB\uABEC\uABF0-\uABF9\uAC00-\uD7A3' + '\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uF8FF\uF900-\uFA6D\uFA70-\uFAD9' + '\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF6F\uFF70' + '\uFF71-\uFF9D\uFF9E-\uFF9F\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF' + '\uFFD2-\uFFD7\uFFDA-\uFFDC',

  R: '\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05D0-\u05EA\u05EB-\u05EF' + '\u05F0-\u05F2\u05F3-\u05F4\u05F5-\u05FF\u07C0-\u07C9\u07CA-\u07EA' + '\u07F4-\u07F5\u07FA\u07FB-\u07FF\u0800-\u0815\u081A\u0824\u0828' + '\u082E-\u082F\u0830-\u083E\u083F\u0840-\u0858\u085C-\u085D\u085E' + '\u085F-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB37\uFB38-\uFB3C' + '\uFB3D\uFB3E\uFB3F\uFB40-\uFB41\uFB42\uFB43-\uFB44\uFB45\uFB46-\uFB4F',

  AL: '\u0608\u060B\u060D\u061B\u061C\u061D\u061E-\u061F\u0620-\u063F\u0640' + '\u0641-\u064A\u066D\u066E-\u066F\u0671-\u06D3\u06D4\u06D5\u06E5-\u06E6' + '\u06EE-\u06EF\u06FA-\u06FC\u06FD-\u06FE\u06FF\u0700-\u070D\u070E\u070F' + '\u0710\u0712-\u072F\u074B-\u074C\u074D-\u07A5\u07B1\u07B2-\u07BF' + '\u08A0-\u08B2\u08B3-\u08E3\uFB50-\uFBB1\uFBB2-\uFBC1\uFBC2-\uFBD2' + '\uFBD3-\uFD3D\uFD40-\uFD4F\uFD50-\uFD8F\uFD90-\uFD91\uFD92-\uFDC7' + '\uFDC8-\uFDCF\uFDF0-\uFDFB\uFDFC\uFDFE-\uFDFF\uFE70-\uFE74\uFE75' + '\uFE76-\uFEFC\uFEFD-\uFEFE'

};

var REGEX_STRONG = new RegExp('[' + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

var REGEX_RTL = new RegExp('[' + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

/**
 * Returns the first strong character (has Bidi_Class value of L, R, or AL).
 *
 * @param str  A text block; e.g. paragraph, table cell, tag
 * @return     A character with strong bidi direction, or null if not found
 */
function firstStrongChar(str) {
  var match = REGEX_STRONG.exec(str);
  return match == null ? null : match[0];
}

/**
 * Returns the direction of a block of text, based on the direction of its
 * first strong character (has Bidi_Class value of L, R, or AL).
 *
 * @param str  A text block; e.g. paragraph, table cell, tag
 * @return     The resolved direction
 */
function firstStrongCharDir(str) {
  var strongChar = firstStrongChar(str);
  if (strongChar == null) {
    return UnicodeBidiDirection.NEUTRAL;
  }
  return REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection.RTL : UnicodeBidiDirection.LTR;
}

/**
 * Returns the direction of a block of text, based on the direction of its
 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
 * direction, if no strong character is found.
 *
 * This function is supposed to be used in respect to Higher-Level Protocol
 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
 *
 * @param str       A text block; e.g. paragraph, table cell, tag
 * @param fallback  Fallback direction, used if no strong direction detected
 *                  for the block (default = NEUTRAL)
 * @return          The resolved direction
 */
function resolveBlockDir(str, fallback) {
  fallback = fallback || UnicodeBidiDirection.NEUTRAL;
  if (!str.length) {
    return fallback;
  }
  var blockDir = firstStrongCharDir(str);
  return blockDir === UnicodeBidiDirection.NEUTRAL ? fallback : blockDir;
}

/**
 * Returns the direction of a block of text, based on the direction of its
 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
 * direction, if no strong character is found.
 *
 * NOTE: This function is similar to resolveBlockDir(), but uses the global
 * direction as the fallback, so it *always* returns a Strong direction,
 * making it useful for integration in places that you need to make the final
 * decision, like setting some CSS class.
 *
 * This function is supposed to be used in respect to Higher-Level Protocol
 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
 *
 * @param str             A text block; e.g. paragraph, table cell
 * @param strongFallback  Fallback direction, used if no strong direction
 *                        detected for the block (default = global direction)
 * @return                The resolved Strong direction
 */
function getDirection(str, strongFallback) {
  if (!strongFallback) {
    strongFallback = UnicodeBidiDirection.getGlobalDir();
  }
  !UnicodeBidiDirection.isStrong(strongFallback) ?  true ? invariant(false, 'Fallback direction must be a strong direction') : invariant(false) : void 0;
  return resolveBlockDir(str, strongFallback);
}

/**
 * Returns true if getDirection(arguments...) returns LTR.
 *
 * @param str             A text block; e.g. paragraph, table cell
 * @param strongFallback  Fallback direction, used if no strong direction
 *                        detected for the block (default = global direction)
 * @return                True if the resolved direction is LTR
 */
function isDirectionLTR(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection.LTR;
}

/**
 * Returns true if getDirection(arguments...) returns RTL.
 *
 * @param str             A text block; e.g. paragraph, table cell
 * @param strongFallback  Fallback direction, used if no strong direction
 *                        detected for the block (default = global direction)
 * @return                True if the resolved direction is RTL
 */
function isDirectionRTL(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection.RTL;
}

var UnicodeBidi = {
  firstStrongChar: firstStrongChar,
  firstStrongCharDir: firstStrongCharDir,
  resolveBlockDir: resolveBlockDir,
  getDirection: getDirection,
  isDirectionLTR: isDirectionLTR,
  isDirectionRTL: isDirectionRTL
};

module.exports = UnicodeBidi;

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

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/containsNode.js");

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/fbjs/lib/getActiveElement.js");

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

/***/ 962:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_import_html__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_import_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_draft_js_import_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_draft_js_export_html__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Modal_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Modal_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoryKey", function() { return memoryKey; });








// import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';

// import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';







var memoryKey = 'sendTranscriptBody';

var SendTranscriptBody = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SendTranscriptBody, _React$Component);

  function SendTranscriptBody(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SendTranscriptBody);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendTranscriptBody.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SendTranscriptBody)).call(this, props));

    var cacheState = __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].get(memoryKey + '_' + props.transcriptBodyAdditionInfo.chatId, null, null);
    if (!cacheState) {
      var editorState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].createWithContent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_draft_js_import_html__["stateFromHTML"])(props.input.value));
      cacheState = {
        ifBodyLoading: !editorState.getCurrentContent().hasText(),
        editorState: editorState,
        bodyContentArray: [props.input.value, '', '', '', '', '', ''],
        additionalInfoIfOpen: false,
        ifHaveVisitorInfo: false,
        ifHaveNavigation: false,
        ifHaveGEOInfo: false,
        ifHaveClientInfo: false,
        ifHaveRating: false,
        ifHaveAgentComment: false,
        renderWithProps: true
      };
      __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].set(memoryKey + '_' + _this.props.transcriptBodyAdditionInfo.chatId, cacheState);
    }
    _this.state = cacheState;
    _this.onChange = _this.onChange.bind(_this);
    _this.onTab = _this.onTab.bind(_this);
    _this.toggleAdditionalInfo = _this.toggleAdditionalInfo.bind(_this);
    _this.toggleVisitorInfo = _this.toggleVisitorInfo.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SendTranscriptBody, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var cacheState = __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].get(memoryKey + '_' + nextProps.transcriptBodyAdditionInfo.chatId, null, null);
      if (nextProps.input.value !== this.props.input.value && this.state.ifBodyLoading) {
        var editorState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].createWithContent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_draft_js_import_html__["stateFromHTML"])(nextProps.input.value));
        cacheState.editorState = editorState;
        cacheState.bodyContentArray = [nextProps.input.value, '', '', '', '', '', ''];
        this.setState({
          ifBodyLoading: false,
          editorState: cacheState.editorState,
          bodyContentArray: cacheState.bodyContentArray
        });
        __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].set(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId, cacheState);
      } else {
        this.setState({
          ifBodyLoading: false,
          editorState: cacheState.editorState,
          bodyContentArray: cacheState.bodyContentArray
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(editorState) {
      var cacheState = __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].get(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId);
      this.props.input.onChange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_draft_js_export_html__["stateToHTML"])(editorState.getCurrentContent()));
      this.setState({
        editorState: editorState
      });
      cacheState.editorState = editorState;
      __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].set(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId, cacheState);
    }
  }, {
    key: 'onTab',
    value: function onTab(e) {
      var maxDepth = 4;
      this.onChange(__WEBPACK_IMPORTED_MODULE_8_draft_js__["RichUtils"].onTab(e, this.state.editorState, maxDepth));
    }

    // handleKeyCommand(command) {
    //   const { editorState } = this.state;
    //   const newState = RichUtils.handleKeyCommand(editorState, command);
    //   if (newState) {
    //     this.onChange(newState);
    //     return true;
    //   }
    //   return false;
    // }

  }, {
    key: 'toggleAdditionalInfo',
    value: function toggleAdditionalInfo() {
      var cacheState = __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].get(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId);
      this.setState({
        additionalInfoIfOpen: !this.state.additionalInfoIfOpen
      });
      cacheState.additionalInfoIfOpen = !this.state.additionalInfoIfOpen;
      __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].set(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId, cacheState);
    }
  }, {
    key: 'toggleVisitorInfo',
    value: function toggleVisitorInfo(additionInfoId) {
      var cacheState = __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].get(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId);
      // this.props.change('additionalInfo_visitorInfo', value);
      var visitorInfo = this.props.transcriptBodyAdditionInfo.transcriptVisitorInfo;
      var navigation = this.props.transcriptBodyAdditionInfo.transcriptNavigation;
      var geoInfo = this.props.transcriptBodyAdditionInfo.transcriptGEOInfo;
      var clientInfo = this.props.transcriptBodyAdditionInfo.transcriptClientInfo;
      var rating = this.props.transcriptBodyAdditionInfo.transcriptRating;
      var agentComment = this.props.transcriptBodyAdditionInfo.transcriptAgentComment;
      var bodyContentArray = this.state.bodyContentArray;
      switch (additionInfoId) {
        case '1':
          {
            if (!this.state.ifHaveVisitorInfo) {
              // bodyContentArray.splice(1, 0, visitorInfo);
              bodyContentArray[1] = visitorInfo;
            } else {
              // bodyContentArray.splice(1, 1);
              bodyContentArray[1] = '';
            }
            this.setState({
              ifHaveVisitorInfo: !this.state.ifHaveVisitorInfo,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveVisitorInfo = !this.state.ifHaveVisitorInfo;
            break;
          }
        case '2':
          {
            if (!this.state.ifHaveNavigation) {
              bodyContentArray[2] = navigation;
            } else {
              bodyContentArray[2] = '';
            }
            this.setState({
              ifHaveNavigation: !this.state.ifHaveNavigation,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveNavigation = !this.state.ifHaveNavigation;
            break;
          }
        case '3':
          {
            if (!this.state.ifHaveGEOInfo) {
              bodyContentArray[3] = geoInfo;
            } else {
              bodyContentArray[3] = '';
            }
            this.setState({
              ifHaveGEOInfo: !this.state.ifHaveGEOInfo,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveGEOInfo = !this.state.ifHaveGEOInfo;
            break;
          }
        case '4':
          {
            if (!this.state.ifHaveClientInfo) {
              bodyContentArray[4] = clientInfo;
            } else {
              bodyContentArray[4] = '';
            }
            this.setState({
              ifHaveClientInfo: !this.state.ifHaveClientInfo,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveClientInfo = !this.state.ifHaveClientInfo;
            break;
          }
        case '5':
          {
            if (!this.state.ifHaveRating) {
              bodyContentArray[5] = rating;
            } else {
              bodyContentArray[5] = '';
            }
            this.setState({
              ifHaveRating: !this.state.ifHaveRating,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveRating = !this.state.ifHaveRating;
            break;
          }
        case '6':
          {
            if (!this.state.ifHaveAgentComment) {
              bodyContentArray[6] = agentComment;
            } else {
              bodyContentArray[6] = '';
            }
            this.setState({
              ifHaveAgentComment: !this.state.ifHaveAgentComment,
              bodyContentArray: bodyContentArray
            });
            cacheState.ifHaveAgentComment = !this.state.ifHaveAgentComment;
            break;
          }
        default:
          break;
      }
      var afterAddVisitorInfoHTML = bodyContentArray.join(' '); // this.state.bodyContentArray.join(' ');
      var afterAddVisitorInfoEditorState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].createWithContent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_draft_js_import_html__["stateFromHTML"])(afterAddVisitorInfoHTML));
      afterAddVisitorInfoEditorState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].moveFocusToEnd(afterAddVisitorInfoEditorState);

      this.setState({
        editorState: afterAddVisitorInfoEditorState,
        bodyContentArray: bodyContentArray
      });
      cacheState.editorState = afterAddVisitorInfoEditorState;
      cacheState.bodyContentArray = bodyContentArray;
      __WEBPACK_IMPORTED_MODULE_13__services_memoryStore__["a" /* default */].set(memoryKey + '_' + this.props.transcriptBodyAdditionInfo.chatId, cacheState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var editorState = this.state.editorState;

      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.
      /**
       * @todo
       * className is unused and thus comment out. Check if there is any issue here.
       */
      // let className = 'RichEditor-editor';

      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        // if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        // className += ' RichEditor-hidePlaceholder';
        // }
      }

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.bodyLayout
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.formTranscriptAdditionalInfo
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11_src_components_Link_Link__["a" /* default */], {
        onClick: this.toggleAdditionalInfo
      }, void 0, 'Additional Information'), this.state.additionalInfoIfOpen ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.additionalInfoContent
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_visitorInfo',
        input: {
          value: this.state.ifHaveVisitorInfo,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('1');
          }
        },
        text: 'Visitor Info (First Visit Time, Chat Times, Visit Times)',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_navigation',
        input: {
          value: this.state.ifHaveNavigation,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('2');
          }
        },
        text: 'Navigation (Referrer, Search Engine, Search Keywords, Landing Page,\n                  Navigation Pages)',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_geo',
        input: {
          value: this.state.ifHaveGEOInfo,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('3');
          }
        },
        text: 'GEO Info (IP, Country, State, City)',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_client',
        input: {
          value: this.state.ifHaveClientInfo,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('4');
          }
        },
        text: 'Client Info (Operating System, Browser, Flash Version,\n                  Screen Resolution, Language, Time Zone)',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_rating',
        input: {
          value: this.state.ifHaveRating,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('5');
          }
        },
        text: 'Rating (Rating, Comment)',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Checkbox_Checkbox__["a" /* default */], {
        name: 'additionalInfo_agentComment',
        input: {
          value: this.state.ifHaveAgentComment,
          onChange: function onChange() {
            return _this2.toggleVisitorInfo('6');
          }
        },
        text: 'Agent Comment',
        className: __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.transcriptAdditionInfo
      })) : ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: this.state.ifBodyLoading && !contentState.hasText() ? __WEBPACK_IMPORTED_MODULE_7_classnames___default()('RichEditor-root', __WEBPACK_IMPORTED_MODULE_14__Modal_css___default.a.editorDisable) : 'RichEditor-root'
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_draft_js__["Editor"], {
        editorState: editorState,
        onChange: this.onChange,
        placeholder: '',
        spellCheck: true
      })));
    }
  }]);

  return SendTranscriptBody;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SendTranscriptBody);

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isString__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_enums__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getHasFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return replaceText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCursorPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return convertToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insertImage; });
/* unused harmony export moveFocusToEnd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insertText; });





var getHasFocus = function getHasFocus(editorState) {
  return editorState.getSelection().getHasFocus();
};
/**
 * Replace range of text with new one and *focus at the end of new text*
 *
 * @param {object} editorState - Current EditorState
 * @param {string} key - Key of ContentBlock where old text exists
 * @param {number} start - Start index of old text
 * @param {number} end - End index of old text
 * @param {string} text - Text that should be used instead
 * @return {object} Modified EditorState after replacing the text and focus at the end of new text
 */
var replaceText = function replaceText(editorState, key, start, end, text) {
  var selection = __WEBPACK_IMPORTED_MODULE_1_draft_js__["SelectionState"].createEmpty('canned-message').merge({
    anchorKey: key,
    anchorOffset: start,
    focusKey: key,
    focusOffset: end
  });
  var content = __WEBPACK_IMPORTED_MODULE_1_draft_js__["Modifier"].replaceText(editorState.getCurrentContent(), selection, text);
  return __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].forceSelection(__WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].push(editorState, content, 'change-block-data'), __WEBPACK_IMPORTED_MODULE_1_draft_js__["SelectionState"].createEmpty('canned-message').merge({
    anchorKey: key,
    anchorOffset: start + text.length,
    focusKey: key,
    focusOffset: start + text.length
  }));
};

var getCursorPosition = function getCursorPosition(editorState) {
  var selection = editorState.getSelection();
  if (!selection.isCollapsed()) return null;
  var key = selection.getStartKey();
  var index = selection.getStartOffset();
  var text = editorState.getCurrentContent().getBlockForKey(key).getText();
  return { key: key, index: index, text: text };
};

var getText = function getText(editorState, key) {
  return editorState.getCurrentContent().getBlockForKey(key).getText();
};

var convertToList = function convertToList(editorState) {
  var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_draft_js__["convertToRaw"])(editorState.getCurrentContent());
  var result = state.blocks.map(function (block) {
    if (block.type === 'unstyled') return block.text;
    if (block.type === 'atomic') {
      return block.entityRanges
      // only one image per line
      .map(function (entity) {
        return state.entityMap[entity.key].data.payload.file;
      })[0];
    }
    return undefined;
  }).reduce(function (previous, current) {
    if (current === undefined) return previous;
    if (previous.length === 0) return [current];
    var last = previous[previous.length - 1];
    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isString___default()(current) && __WEBPACK_IMPORTED_MODULE_0_lodash_isString___default()(last)) {
      previous[previous.length - 1] = last + '\n' + current; // eslint-disable-line
      return previous;
    }
    return previous.concat(current);
  }, []);
  return result;
};

var insertImage = function insertImage(editorState, src, payload) {
  var entityKey = __WEBPACK_IMPORTED_MODULE_1_draft_js__["Entity"].create(__WEBPACK_IMPORTED_MODULE_2__constants_enums__["h" /* mediaType */].image, 'IMMUTABLE', { src: src, payload: payload });
  return __WEBPACK_IMPORTED_MODULE_1_draft_js__["AtomicBlockUtils"].insertAtomicBlock(editorState, entityKey, ' ');
};

var moveFocusToEnd = function moveFocusToEnd(editorState) {
  return __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].moveFocusToEnd(editorState);
};

var createEmpty = function createEmpty() {
  return __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].moveFocusToEnd(__WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].createEmpty());
};

var insertText = function insertText(text, editorState) {
  var selection = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var nextEditorState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].createEmpty();
  if (selection.isCollapsed()) {
    var nextContentState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["Modifier"].insertText(contentState, selection, text);
    nextEditorState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].push(editorState, nextContentState, 'insert-cannedMessage');
  } else {
    var _nextContentState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["Modifier"].replaceText(contentState, selection, text);
    nextEditorState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].push(editorState, _nextContentState, 'insert-cannedMessage');
  }
  return __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].forceSelection(nextEditorState, nextEditorState.getSelection());
};

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateToHTML = __webpack_require__(1007);

Object.defineProperty(exports, 'stateToHTML', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stateToHTML).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"TextEditor__container--1GEDE","focused":"TextEditor__focused--I39Rd","disabled":"TextEditor__disabled--2SAnt","dragging":"TextEditor__dragging--378do","dnd":"TextEditor__dnd--1UhCg","selection":"TextEditor__selection--3OgRV","selected":"TextEditor__selected--iD-ko","unselected":"TextEditor__unselected--3gnQm","ie":"TextEditor__ie--1sK-K","key":"TextEditor__key--2sjGU","value":"TextEditor__value--fpY3t","buttonGroup":"TextEditor__buttonGroup--1xyF1","arrowDownIcon":"TextEditor__arrowDownIcon--3XCLT","sendType":"TextEditor__sendType--UVlvS","unselectedLine":"TextEditor__unselectedLine--13pjX","selectedLine":"TextEditor__selectedLine--169mA","chatContentsmall":"TextEditor__chatContentsmall--uPBaG","chatContentmiddle":"TextEditor__chatContentmiddle--3fpKT","chatContentlarge":"TextEditor__chatContentlarge--3Pxk0","directionRTL":"TextEditor__directionRTL--3MtCe"};

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_utils_editor__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_types_chat__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContent", function() { return updateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertContent", function() { return insertContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertImages", function() { return insertImages; });





var updateContent = function updateContent(id, editorState) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants_types_chat__["a" /* updateContent */],
    payload: editorState,
    meta: id
  };
};

var insertContent = function insertContent(id, message, editorState) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants_types_chat__["a" /* updateContent */],
    payload: __WEBPACK_IMPORTED_MODULE_2_src_utils_editor__["a" /* insertText */](message, editorState || __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].createEmpty()),
    meta: id
  };
};

var insertImages = function insertImages(id, files, editorState) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants_types_chat__["a" /* updateContent */],
    payload: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(files.map(function (file) {
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })).then(function (results) {
      return results.map(function (result, i) {
        return {
          dataUrl: result,
          file: files[i]
        };
      });
    }).then(function (data) {
      return data.reduce(function (prev, curr) {
        return __WEBPACK_IMPORTED_MODULE_2_src_utils_editor__["b" /* insertImage */](prev, curr.dataUrl, { file: curr.file });
      }, editorState);
    }),
    meta: id
  };
};

/***/ })

});
//# sourceMappingURL=http://localhost:8000/editor.46994.js.map