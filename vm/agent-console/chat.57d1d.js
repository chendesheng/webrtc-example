webpackJsonp([1],Array(761).concat([
/* 761 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Resizer_ResizeContainer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChatList__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ChatHeader__ = __webpack_require__(1512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ChatContent__ = __webpack_require__(1511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatAction__ = __webpack_require__(1510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SplitterChatTextEditor__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NoChat__ = __webpack_require__(1516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Default_css__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Default_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Default_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SplitterVisitorDetailsTab__ = __webpack_require__(964);














var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__ChatList__["a" /* default */], {});

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_6__ChatHeader__["a" /* default */], {});

var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__ChatContent__["a" /* default */], {});

var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__ChatAction__["a" /* default */], {});

var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__SplitterChatTextEditor__["a" /* default */], {});

var _ref7 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__SplitterVisitorDetailsTab__["a" /* default */], {});

var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__NoChat__["a" /* default */], {});

var SplitterChat = function SplitterChat(_ref) {
  var selectedChatId = _ref.selectedChatId,
      chatItemWidth = _ref.chatItemWidth,
      onChatItemStopResize = _ref.onChatItemStopResize,
      chatDetailWidth = _ref.chatDetailWidth,
      onChatDetailStopResize = _ref.onChatDetailStopResize;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__components_CommonResources_common_css___default.a.layoutContent,
    id: 'chats'
  }, void 0, selectedChatId ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__components_Resizer_ResizeContainer__["default"], {
    resizerPosition: 'left',
    width: chatItemWidth,
    left_minWidth: 240,
    left_maxWidth: 350,
    right_minWidth: 640,
    onStopResize: onChatItemStopResize
  }, void 0, _ref2, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, _ref3, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__components_CommonResources_common_css___default.a.chatwindowContainer
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__components_Resizer_ResizeContainer__["default"], {
    resizerPosition: 'right',
    width: chatDetailWidth,
    right_minWidth: 265,
    right_maxWidth: 500,
    left_minWidth: 350,
    onStopResize: onChatDetailStopResize
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, _ref4, _ref5, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    style: {
      position: 'absolute',
      width: '100%',
      height: 175,
      bottom: 0,
      minHeight: 40
    }
  }, void 0, _ref6)), _ref7)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a, {
    id: 'chatContainer',
    multiline: true,
    effect: 'solid',
    place: 'bottom',
    'class': __WEBPACK_IMPORTED_MODULE_11__Default_css___default.a.tooltip
  }))) : _ref8);
};

/* harmony default export */ __webpack_exports__["default"] = (SplitterChat);

/***/ }),
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
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(1526)
var ieee754 = __webpack_require__(1671)
var isArray = __webpack_require__(1536)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(541)))

/***/ }),
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatAction":"ChatAction__chatAction--2avGg","chatActionIcon":"ChatAction__chatActionIcon--WDUxk","iconActive":"ChatAction__iconActive--2eXsX","chatActionIconDisabled":"ChatAction__chatActionIconDisabled--3wdpU"};

/***/ }),
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextArea_css__ = __webpack_require__(917);
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
/* 886 */,
/* 887 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatitemcontainer":"ChatItem__chatitemcontainer--3vaYa","acceptStyle":"ChatItem__acceptStyle--8iD0p","selected":"ChatItem__selected--3tHXg","captureitem":"ChatItem__captureitem--2P6yE","statusitem":"ChatItem__statusitem--1sZXs","detailitem":"ChatItem__detailitem--39Qkw","infoitem":"ChatItem__infoitem--iKpEA","segmentitem":"ChatItem__segmentitem--2MEGr","pinnStyle":"ChatItem__pinnStyle--3S_e8","pinned":"ChatItem__pinned--3K6vH","nopinned":"ChatItem__nopinned--9EuB_","deleteIcon":"ChatItem__deleteIcon--yBJ47","nobutton":"ChatItem__nobutton--J4KGQ","chatItemDetail":"ChatItem__chatItemDetail--CsTN4","chatItemPrompt":"ChatItem__chatItemPrompt--1r4Y6","visitorName":"ChatItem__visitorName--hjA5p","visitorDepartment":"ChatItem__visitorDepartment--3nz8W","refuseBtn":"ChatItem__refuseBtn--3WP-K","acceptBtn":"ChatItem__acceptBtn--1IHiU","wrapupbtn":"ChatItem__wrapupbtn--3G4nl","actioncontainer":"ChatItem__actioncontainer--usX52","promptNumber":"ChatItem__promptNumber--1L3Zb","chatItemSegment":"ChatItem__chatItemSegment--3qLnK","chatItemConfig":"ChatItem__chatItemConfig--3EoD2","configitem":"ChatItem__configitem--1lgRL","selectedicon":"ChatItem__selectedicon--1l-hw","chatconfigpanel":"ChatItem__chatconfigpanel--2XWd5","itemContainer":"ChatItem__itemContainer--3Uyme","configPanel":"ChatItem__configPanel--2344w","configicon":"ChatItem__configicon--7WIYr","idleStyle":"ChatItem__idleStyle--37Eqo","idleUnderProptNum":"ChatItem__idleUnderProptNum--1Wopt","showChatViaList":"ChatItem__showChatViaList--2lBhv","showChatViaGroup":"ChatItem__showChatViaGroup--1MV56","groupNameWraper":"ChatItem__groupNameWraper--3TdpC","groupSection":"ChatItem__groupSection--3xKcD","groupSpread":"ChatItem__groupSpread--2X8v4","opened":"ChatItem__opened--2Us0v","noChatSection":"ChatItem__noChatSection--2g_GD"};

/***/ }),
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatContainer":"ChatContent__chatContainer--1oxtQ","chatContentContainer":"ChatContent__chatContentContainer--3fAaw","chatVideoContainer":"ChatContent__chatVideoContainer--2Q872","chatVideoItem":"ChatContent__chatVideoItem--C1bJl","chatContent":"ChatContent__chatContent--3lHVq","directionRTL":"ChatContent__directionRTL--y-RND","systemMeg":"ChatContent__systemMeg--1akET","chatMeg":"ChatContent__chatMeg--1xqJM","translationMsg":"ChatContent__translationMsg--34tcn","attachment":"ChatContent__attachment--1ONEF","chatContentInfo":"ChatContent__chatContentInfo--17_KL","name":"ChatContent__name--2_SRW","time":"ChatContent__time--3BqgY","operator":"ChatContent__operator--13jwF","visitor":"ChatContent__visitor--1vjfa","secureForm":"ChatContent__secureForm--LAEtE","typingIndicator":"ChatContent__typingIndicator--Njccd","chatContentsmall":"ChatContent__chatContentsmall--2nRGa","chatContentmiddle":"ChatContent__chatContentmiddle--1j4wB","chatContentlarge":"ChatContent__chatContentlarge--u101R","notify":"ChatContent__notify--3IFoV","notifyG2M":"ChatContent__notifyG2M--2Kneq","notifyName":"ChatContent__notifyName--2eGs0","error":"ChatContent__error--31HZ8","errorContent":"ChatContent__errorContent--1sK1Q","action":"ChatContent__action--3JAej","avatarContainer":"ChatContent__avatarContainer--1iP34","visitorName":"ChatContent__visitorName--XjBhL","notice":"ChatContent__notice--1NI9M","incoming":"ChatContent__incoming--2VMSc","accept":"ChatContent__accept--2nUzs","refuse":"ChatContent__refuse--1fghu","chattingInfo":"ChatContent__chattingInfo--3Z8YS","videoContainer":"ChatContent__videoContainer--3rse-","localVideo":"ChatContent__localVideo--3H6-Z","remoteVideo":"ChatContent__remoteVideo--ZJRKg","videoChatting":"ChatContent__videoChatting--3JKjR"};

/***/ }),
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAPFBMVEW0tLSxsbGjoqKsrKy/v7+op6fS0tL4+Pj8/Pzz8/Po6Oi7urvY19fu7u7////ExMTLy8u3t7fc3Nzh4eFYEd3tAAACPElEQVR4XuzNRxEAIBAEQX57gYx/r7igeEwb6PIJAAAAYI16mqybPPbMV+0t1lyXZAVhIGyiyEWIoO//rufPqUptzc4gs0n4XqAr0B0DWFOgH5S8GRSbPf1COpV1d09vSJpVn4XeE7Kabg70kaJjs3ZTD39q6BbqE6q1Livb6jJBeLVveooXddhOzylNTncLNMAlJ1yIsdzmncYoUo72NIhQpjKNEmWEPQ0jssuVxkkSwom+QKCLHPQNu22WmAK2K82AkKftfb3Rd2TbMDEJTNsW41edCaCPszU1s84SBp0ZoM8Ck4Xtl3qW8Aqz4gSTGgjCpJaJkz4SFy5/JNBXnG7WIMDCpu6KuM6ZBDKb2rZpNpwzZhZcLc9sTEWYcmjzzi0CHH684HXKwTw6XGSINMTGBZtm+Uacct0UHYKYMCR6SmjoFjmg0ENOxEUSiE+ThLBYKrPuusgCa6Ee4WRdOcBdPT831hXFnZ4+cDnWla75Q9HlQPaVOIDtvas6+VW69tqwe3TQGfBrZ3fVpoKrV6/WmF20Kw4CVw+yZ7hqu9JM0S/YvuSN67V8uj5u6hDuQ0H2CtQn5KbzS0Ifvyv9ktAnirmsRhqjnOaybHC1HzD6BlcJrq7Bt5v+hN9lg6tr8CYgywYX6Be6Bt89CRKuQye4fXxuAsHVMfiZSIlYR4Or6TIOri6/t9HasbLaVicyoAi8jEs97jYyAV6DRCa82msnE+pLyReZkMHU1ExaO6Y2tLVDE9yLMBrxX+4fqbwdFs0D+1MAAAAASUVORK5CYII="

/***/ }),
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__ = __webpack_require__(962);




var Avatar = function Avatar(props) {
  var identityType = props.identityType;
  var avatarLink = __webpack_require__(897); // eslint-disable-line
  var tooltip = 'Visitor';
  if (props.isContactOrUserOpen) {
    switch (identityType) {
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["a" /* visitorIdentityTypeUser */]:
        {
          avatarLink = __webpack_require__(1261); // eslint-disable-line
          tooltip = 'User';
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["b" /* visitorIdentityTypeContact */]:
        {
          avatarLink = __webpack_require__(1260); // eslint-disable-line
          tooltip = 'Contact';
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_2__constants_enums_visitorType__["c" /* visitorIdentityTypeVisitor */]:
        {
          avatarLink = __webpack_require__(897); // eslint-disable-line
          tooltip = 'Visitor';
          break;
        }
      default:
        {
          avatarLink = __webpack_require__(897); // eslint-disable-line
          tooltip = '';
          break;
        }
    }
  }
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('img', {
    'data-tip': tooltip,
    'data-for': 'chatContainer',
    src: props.avatarLink ? props.avatarLink : avatarLink,
    alt: ''
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),
/* 909 */
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
/* 910 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_utils_func__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tooltip_css__ = __webpack_require__(984);
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
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatHeader":"ChatHeader__chatHeader--2Px8C","visitorDetails":"ChatHeader__visitorDetails--2nE2E","avatar":"ChatHeader__avatar--3teOQ","details":"ChatHeader__details--98r8e","name":"ChatHeader__name--1dwu_","others":"ChatHeader__others--1ml66","action":"ChatHeader__action--ODKC9","btnAction":"ChatHeader__btnAction--3J-NO","btnAaction":"ChatHeader__btnAaction--1bGJL","tooltip":"ChatHeader__tooltip--2cHr7","marginRight10":"ChatHeader__marginRight10--1GaZY"};

/***/ }),
/* 917 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"multipleText":"TextArea__multipleText--1J3OF","error":"TextArea__error--3le0n"};

/***/ }),
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */
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
/* 924 */,
/* 925 */,
/* 926 */
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
/* 927 */,
/* 928 */
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
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
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
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatContent_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icons_Avatar__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_p2pChat__ = __webpack_require__(698);

















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
  return __WEBPACK_IMPORTED_MODULE_7_moment__["default"].utc(d).format(d < 3600 * 1000 ? 'mm:ss' : 'HH:mm:ss');
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
      var p2pChat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__services_p2pChat__["a" /* getP2PChat */])();
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
        identityType: props.identityType
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
/* 953 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_immutable__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_fontSize__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ChatContent_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ChatContentMsg__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AudioVideoChatContent__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Resizer_ResizeContainer__ = __webpack_require__(693);

























var getFontSizeClass = function getFontSizeClass(type) {
  var _fontSize$small$fontS;

  return (_fontSize$small$fontS = {}, __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_fontSize__["b" /* small */], __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContentsmall), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_fontSize__["a" /* middle */], __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContentmiddle), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_defineProperty___default()(_fontSize$small$fontS, __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_fontSize__["c" /* large */], __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContentlarge), _fontSize$small$fontS)[type];
};

var getVisitorForNotify = function getVisitorForNotify(messages) {
  if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isArray___default()(messages.last()) || messages.last().length === 0) return '';
  return messages.last()[0].sender;
};
var getMessageForNotify = function getMessageForNotify(messages) {
  if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isArray___default()(messages.last()) || messages.last().length === 0) return '';
  return messages.last()[messages.last().length - 1].message || messages.last()[messages.last().length - 1].fileName;
};

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13_src_components_Button_Button__["a" /* default */], {
  type: 'noborder'
}, void 0, 'Not Now');

var ChatContent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatContent, _React$Component);

  function ChatContent(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatContent);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatContent.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatContent)).call(this, props));

    _this.state = {
      // ifShowNotify: props.ifShowNotify,
      ifShowGotoMeetingNotify: false
    };
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
      // document.onkeydown = (e) => {

      // };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var propsMessage = nextProps.messages;
      this.notifyVisitor = getVisitorForNotify(propsMessage);
      this.notifyMessage = getMessageForNotify(propsMessage);
      if (this.props.g2mStartUrl !== nextProps.g2mStartUrl && !this.state.ifShowGotoMeetingNotify) {
        this.setState({
          ifShowGotoMeetingNotify: true
        });
      }
      this.scrollTop = nextProps.scrollTop;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.id !== this.props.id || nextProps.selectedFontSize !== this.props.selectedFontSize || nextProps.typingMessage !== this.props.typingMessage || nextProps.textDirectionIfRTL !== this.props.textDirectionIfRTL || nextProps.errorMessageForChat !== this.props.errorMessageForChat || nextProps.g2mStartUrl !== this.props.g2mStartUrl || nextProps.ifShowNotify !== this.props.ifShowNotify || nextProps.audioVideoChatWidth !== this.props.audioVideoChatWidth || nextProps.audioVideoChatStatus !== this.props.audioVideoChatStatus || nextProps.audioVideoChatStartTime.getTime() !== this.props.audioVideoChatStartTime.getTime() || nextState.ifShowGotoMeetingNotify !== this.state.ifShowGotoMeetingNotify || !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props.messages.toJS(), nextProps.messages.toJS());
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
        // this.setState({
        //   ifShowNotify: false,
        // });
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
      this.setState({
        ifShowGotoMeetingNotify: false
      });
      this.props.clearG2mStartUrl();
    }
  }, {
    key: 'scrollBottom',
    value: function scrollBottom() {
      this.parent.scrollTop = this.container.getBoundingClientRect().height;
      // this.setState({
      //   ifShowNotify: false,
      // });
      this.ifScrollBottom = true;
      this.props.onScroll(this.props.id, -1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props;
      // let notifyVisitor = '';
      // let notifyMessage = '';
      // const propsLastMessage = props.messages.get(props.messages.size - 1);
      // if (this.state.ifShowNotify && props.messages.size > 0 &&
      //   propsLastMessage[0].type === messageType.visitor) {
      //   // const propsLastMessage = props.messages.get(props.messages.size - 1);
      //   notifyVisitor = propsLastMessage[0].sender;
      //   notifyMessage = propsLastMessage[propsLastMessage.length - 1].message ||
      //   propsLastMessage[propsLastMessage.length - 1].fileName;
      // }
      var chatContentContainer = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContentContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContent, getFontSizeClass(props.selectedFontSize), props.textDirectionIfRTL ? __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.directionRTL : '', 'contentMenu'),
          ref: function ref(element) {
            _this3.parent = element;
          }
        },
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          'div',
          { ref: function ref(element) {
              _this3.container = element;
            } },
          props.messages.map(function (message, i) {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__ChatContentMsg__["a" /* default */], {
              messages: message,
              getSecureFormContent: _this3.props.getSecureFormContent,
              timezone: _this3.props.timezone,
              timezoneOffset: _this3.props.timezoneOffset
            }, i);
          })
        ),
        props.typingMessage !== '' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.typingIndicator
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, props.chatTo, ' is typing: '), props.typingMessage, '...', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_17__constants_enums__["b" /* icons */].typing,
          size: 13
        })) : null
      ), this.props.ifShowNotify && this.props.scrollTop !== -1 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.notify,
        onClick: this.scrollBottom
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.notifyName
      }, void 0, this.notifyVisitor, ':'), ' ', this.notifyMessage), props.g2mStartUrl && this.state.ifShowGotoMeetingNotify ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(__WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.notify, __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.notifyG2M)
      }, void 0, 'You have created a new meeting.', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.action,
        onClick: this.closeGotoMeetingNotify
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Link_Link__["a" /* default */], {
        href: props.g2mStartUrl,
        newWindow: true
      }, void 0, 'Start Meeting Immediately'), _ref)) : '', props.errorMessageForChat ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.error
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.errorContent
      }, void 0, props.errorMessageForChat), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13_src_components_Button_Button__["a" /* default */], {
        type: 'noborder',
        onClick: props.hideErrorMessage
      }, void 0, 'Dismiss')) : '');
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_14__ChatContent_css___default.a.chatContainer
      }, void 0, props.audioVideoChatStatus && props.audioVideoChatStatus !== __WEBPACK_IMPORTED_MODULE_20__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */] ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_21__Resizer_ResizeContainer__["default"], {
        resizerPosition: 'left',
        width: props.audioVideoChatWidth,
        left_minWidth: 110,
        right_minWidth: 110,
        onStopResize: props.onAudioAndVideoStopResize
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__AudioVideoChatContent__["a" /* default */], {
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
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatContent);

/***/ }),
/* 954 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_messageType__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_str__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatContent_css__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ChatContent_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
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
/* 955 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__FileUploadProgress_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_Button__ = __webpack_require__(47);





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
      return props.handleAbortUpload(props.file);
    }
  }, void 0, '\xD7')) : '');
};

/* harmony default export */ __webpack_exports__["a"] = (FileUploadProgress);

/***/ }),
/* 956 */
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
/* 957 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_noop__ = __webpack_require__(1246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_upload__ = __webpack_require__(1252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_helper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FileUploadProgress_FileUploadProgress__ = __webpack_require__(955);



















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["e" /* shouldComponentUpdateGen */])('SendFile', ['disabled'], ['file', 'fileName', 'fileUploadProgressNumber', 'uploadedFileNumber', 'errorMessage']);

var SendFile = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SendFile, _Component);

  function SendFile(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SendFile);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendFile.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SendFile)).call(this, props));

    _this.beforeUpload = function (file) {
      var siteInfo = _this.props.siteInfo;
      if (file.size <= siteInfo.maxFileSize * 1024 * 1024) {
        /**
         * @todo wrong implementation.
         * this.state will not be remembered, when component re-create.
         *
         * example:
         * if switch from one chat to another, and switch back, this.state.uploadedFileNumber
         * will be re-set to 0, as `constructor` is called again.
         */
        if (_this.state.uploadedFileNumber > siteInfo.maxFileNum) {
          _this.showErrorMessage('Error sending file: The max number of files you can send/receive during this chat session is\n                          ' + siteInfo.maxFileNum + '.');
          return false;
        }
      } else {
        _this.showErrorMessage('Error sending file: The max file size is ' + siteInfo.maxFileSize + ' MB.');
        return false;
      }
      return _this.props.beforeUpload ? _this.props.beforeUpload(file) : true;
    };

    _this.onProgress = function (step, file) {
      if (_this.props.onProgress) {
        _this.props.onProgress(step, file, _this.upload);
      }
      _this.setState({
        file: file,
        fileName: file.name,
        fileUploadProgressNumber: step.percent === 100 ? 100 : parseFloat(step.percent.toFixed(1))
      });
    };

    _this.onSuccess = function (rsp, file) {
      if (rsp && (rsp === 'success' || rsp.isSuccess)) {
        _this.setState({
          uploadedFileNumber: _this.state.uploadedFileNumber + 1
        });
        if (_this.props.onSuccess) {
          _this.props.onSuccess(rsp, file, _this.getDownloadUrl(rsp.guid, file.name), _this.props.siteInfo);
        }
        return;
      }
      var errorMsg = rsp.errorMessage || rsp;
      _this.showErrorMessage('Error sending file: ' + errorMsg);
      // this.props.onError(rsp.errorMessage);
    };

    _this.getDownloadUrl = function (guid, name) {
      if (!_this.props.siteInfo) return '';
      var _this$props$siteInfo = _this.props.siteInfo,
          downloadUrl = _this$props$siteInfo.downloadUrl,
          sessionId = _this$props$siteInfo.sessionId,
          siteId = _this$props$siteInfo.siteId,
          privateMessage = _this$props$siteInfo.privateMessage;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_helper__["m" /* formatAgentChatDownloadUrl */])(downloadUrl, sessionId, siteId, privateMessage, guid, name);
    };

    _this.handleAbortUpload = function (file) {
      if (_this.upload) _this.upload.abort(file);
      _this.setState({
        fileUploadProgressNumber: 0
      });
    };

    _this.state = {
      file: null,
      fileName: '',
      fileUploadProgressNumber: 0,
      uploadedFileNumber: 0,
      errorMessage: ''
    };
    _this.upload = null;

    _this.showErrorMessage = props.showErrorMessage.bind(null, props.chatId);

    _this.uploadConfig = {
      action: props.siteInfo.sendFileUploadUrl,
      multiple: false,
      disabled: props.disabled,
      beforeUpload: _this.beforeUpload,
      onStart: props.onStart || __WEBPACK_IMPORTED_MODULE_7_lodash_noop___default.a,
      onSuccess: _this.onSuccess,
      onProgress: _this.onProgress,
      onError: props.onError || __WEBPACK_IMPORTED_MODULE_7_lodash_noop___default.a
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
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdateHelper(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.uploadConfig.disabled = this.props.disabled;
      if (!this.props.disabled) {
        if (this.state.fileUploadProgressNumber !== 100 && this.state.fileUploadProgressNumber !== 0) {
          this.uploadConfig.disabled = true;
        } else {
          this.uploadConfig.disabled = false;
        }
      }
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__FileUploadProgress_FileUploadProgress__["a" /* default */], {
        file: this.state.file,
        fileName: this.state.fileName,
        fileUploadProgressNumber: this.state.fileUploadProgressNumber,
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
/* 958 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_jsx__ = __webpack_require__(317);






var Country = function Country(props) {
  var tooltip = props.city + ', ' + props.state + ', ' + props.countryName;
  if (!props.countryCode) return null;
  var nameLowerCase = props.countryCode.toLowerCase();
  var imgCountry = __webpack_require__(1263)("./" + nameLowerCase + '.svg');
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
/* 959 */
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
/* 960 */,
/* 961 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TextArea_TextArea__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__ = __webpack_require__(686);
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
/* 962 */
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

/***/ }),
/* 963 */,
/* 964 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Widget_Reload__ = __webpack_require__(294);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
    modules: { VisitorDetailsTab: function VisitorDetailsTab() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          __webpack_require__.e/* require.ensure */(6).then((function (require) {
            resolve(__webpack_require__(929));
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
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"uploadProgressContainer":"FileUploadProgress__uploadProgressContainer--2X8I6","uploadProgress":"FileUploadProgress__uploadProgress--z1S5B","uploadProgressPercent":"FileUploadProgress__uploadProgressPercent--2Kuai","uploadProgressBarContainer":"FileUploadProgress__uploadProgressBarContainer--1y0Vz","uploadProgressBar":"FileUploadProgress__uploadProgressBar--1Y9LY","cancelUpload":"FileUploadProgress__cancelUpload--1YVmG","uploadFileName":"FileUploadProgress__uploadFileName--3j-Sc"};

/***/ }),
/* 980 */,
/* 981 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"promptWindow":"Prompt__promptWindow--1pSIE","close":"Prompt__close--1armJ","action":"Prompt__action--8U9t9","dropdown":"Prompt__dropdown--dWvdQ"};

/***/ }),
/* 982 */,
/* 983 */,
/* 984 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"Tooltip__container--202Gq"};

/***/ }),
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ad.2w4fR.svg";

/***/ }),
/* 990 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ae.QKKnW.svg";

/***/ }),
/* 991 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/af.34HyY.svg";

/***/ }),
/* 992 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ag.3oxDo.svg";

/***/ }),
/* 993 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ai.1ePWR.svg";

/***/ }),
/* 994 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/al.1vueq.svg";

/***/ }),
/* 995 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/am.47rmP.svg";

/***/ }),
/* 996 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ao.3jr2Q.svg";

/***/ }),
/* 997 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/aq.3EaFW.svg";

/***/ }),
/* 998 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ar.2ETX6.svg";

/***/ }),
/* 999 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/as.1p0xc.svg";

/***/ }),
/* 1000 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/at.2q7_9.svg";

/***/ }),
/* 1001 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/au.3DiLj.svg";

/***/ }),
/* 1002 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/aw.4BBWc.svg";

/***/ }),
/* 1003 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ax.36jxg.svg";

/***/ }),
/* 1004 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/az.1qUdn.svg";

/***/ }),
/* 1005 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ba.25bIN.svg";

/***/ }),
/* 1006 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bb.BcX82.svg";

/***/ }),
/* 1007 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bd.2fEO9.svg";

/***/ }),
/* 1008 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/be.26Thv.svg";

/***/ }),
/* 1009 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bf.2lL_M.svg";

/***/ }),
/* 1010 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bg.3FL0Z.svg";

/***/ }),
/* 1011 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bh.2P2db.svg";

/***/ }),
/* 1012 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bi.xNOIF.svg";

/***/ }),
/* 1013 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bj.2RzLF.svg";

/***/ }),
/* 1014 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bl.AXPio.svg";

/***/ }),
/* 1015 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bm.9mtgH.svg";

/***/ }),
/* 1016 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bn.3SkJy.svg";

/***/ }),
/* 1017 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bo.3Pn4G.svg";

/***/ }),
/* 1018 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bq.2b5iS.svg";

/***/ }),
/* 1019 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/br.31kAh.svg";

/***/ }),
/* 1020 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bs.3x6BN.svg";

/***/ }),
/* 1021 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bt.BqUXg.svg";

/***/ }),
/* 1022 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bv.1omMS.svg";

/***/ }),
/* 1023 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bw.fXfB3.svg";

/***/ }),
/* 1024 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/by.fkEtY.svg";

/***/ }),
/* 1025 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/bz.3zcxn.svg";

/***/ }),
/* 1026 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ca.3yloD.svg";

/***/ }),
/* 1027 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cc.1BE1c.svg";

/***/ }),
/* 1028 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cd.1aL94.svg";

/***/ }),
/* 1029 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cf.1KZPZ.svg";

/***/ }),
/* 1030 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cg.5-Xxi.svg";

/***/ }),
/* 1031 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ch.WYetg.svg";

/***/ }),
/* 1032 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ci.1IYx6.svg";

/***/ }),
/* 1033 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ck.3tyQv.svg";

/***/ }),
/* 1034 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cl.2NI88.svg";

/***/ }),
/* 1035 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cm.9MohG.svg";

/***/ }),
/* 1036 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cn.1N1to.svg";

/***/ }),
/* 1037 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/co.1RsuP.svg";

/***/ }),
/* 1038 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cr.3Yju6.svg";

/***/ }),
/* 1039 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cu.3p081.svg";

/***/ }),
/* 1040 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cv.1ygJ9.svg";

/***/ }),
/* 1041 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cw.1RthL.svg";

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cx.38aoS.svg";

/***/ }),
/* 1043 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cy.uMX3m.svg";

/***/ }),
/* 1044 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/cz.eJUf5.svg";

/***/ }),
/* 1045 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/de.2Ts3w.svg";

/***/ }),
/* 1046 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dj.1fpHg.svg";

/***/ }),
/* 1047 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dk.3juVM.svg";

/***/ }),
/* 1048 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dm.1rpAy.svg";

/***/ }),
/* 1049 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/do.1DAN7.svg";

/***/ }),
/* 1050 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/dz.1vHVr.svg";

/***/ }),
/* 1051 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ec.hwbbX.svg";

/***/ }),
/* 1052 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ee.KILMu.svg";

/***/ }),
/* 1053 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eg.3U_QX.svg";

/***/ }),
/* 1054 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eh.2skcW.svg";

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/er.3T2BO.svg";

/***/ }),
/* 1056 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/es.1iqTD.svg";

/***/ }),
/* 1057 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/et.17Ajh.svg";

/***/ }),
/* 1058 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/eu.3bw_3.svg";

/***/ }),
/* 1059 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fi.3ztSq.svg";

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fj.1cU11.svg";

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fk.2QJ47.svg";

/***/ }),
/* 1062 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fm.1CfPN.svg";

/***/ }),
/* 1063 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fo.3iKwE.svg";

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/fr.2piL-.svg";

/***/ }),
/* 1065 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ga.3NQKi.svg";

/***/ }),
/* 1066 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-eng.3CFDF.svg";

/***/ }),
/* 1067 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-nir.36y8P.svg";

/***/ }),
/* 1068 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-sct.1ByLH.svg";

/***/ }),
/* 1069 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb-wls._syZw.svg";

/***/ }),
/* 1070 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gb.14AVo.svg";

/***/ }),
/* 1071 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gd.1Stf-.svg";

/***/ }),
/* 1072 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ge.2zNqV.svg";

/***/ }),
/* 1073 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gf.qc_td.svg";

/***/ }),
/* 1074 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gg.31NRj.svg";

/***/ }),
/* 1075 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gh.1Tgnf.svg";

/***/ }),
/* 1076 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gi.1nA7a.svg";

/***/ }),
/* 1077 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gl.hATVw.svg";

/***/ }),
/* 1078 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gm.xpnyt.svg";

/***/ }),
/* 1079 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gn.1aCvk.svg";

/***/ }),
/* 1080 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gp.2piL-.svg";

/***/ }),
/* 1081 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gq.1oDwE.svg";

/***/ }),
/* 1082 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gr.4ZgKs.svg";

/***/ }),
/* 1083 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gs.2543W.svg";

/***/ }),
/* 1084 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gt.35oze.svg";

/***/ }),
/* 1085 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gu.2dYTQ.svg";

/***/ }),
/* 1086 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gw.1LVc9.svg";

/***/ }),
/* 1087 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/gy.2vj9x.svg";

/***/ }),
/* 1088 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hk.2v-pS.svg";

/***/ }),
/* 1089 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hm.2wnFl.svg";

/***/ }),
/* 1090 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hn.2ttXd.svg";

/***/ }),
/* 1091 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hr.2lFUr.svg";

/***/ }),
/* 1092 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ht.3E_g7.svg";

/***/ }),
/* 1093 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/hu.3JCUx.svg";

/***/ }),
/* 1094 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/id.ZZ8zx.svg";

/***/ }),
/* 1095 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ie.3jKk2.svg";

/***/ }),
/* 1096 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/il.2IR-H.svg";

/***/ }),
/* 1097 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/im.2T3ee.svg";

/***/ }),
/* 1098 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/in.zCN5C.svg";

/***/ }),
/* 1099 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/io.3Hueg.svg";

/***/ }),
/* 1100 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/iq.2-x9U.svg";

/***/ }),
/* 1101 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ir.1FkmY.svg";

/***/ }),
/* 1102 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/is.2-htH.svg";

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/it.1pZzK.svg";

/***/ }),
/* 1104 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/je.1BsCZ.svg";

/***/ }),
/* 1105 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jm.2Ls7t.svg";

/***/ }),
/* 1106 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jo.1f_fj.svg";

/***/ }),
/* 1107 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/jp.UXaTU.svg";

/***/ }),
/* 1108 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ke.hvJXJ.svg";

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kg.2mryN.svg";

/***/ }),
/* 1110 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kh.2fKfl.svg";

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ki.rop2G.svg";

/***/ }),
/* 1112 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/km.DTOdx.svg";

/***/ }),
/* 1113 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kn.EftCL.svg";

/***/ }),
/* 1114 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kp.4J00M.svg";

/***/ }),
/* 1115 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kr.pR_NP.svg";

/***/ }),
/* 1116 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kw.2obiU.svg";

/***/ }),
/* 1117 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ky.z-Miu.svg";

/***/ }),
/* 1118 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/kz.DQkxo.svg";

/***/ }),
/* 1119 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/la.2eB4J.svg";

/***/ }),
/* 1120 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lb.30pnU.svg";

/***/ }),
/* 1121 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lc.EKPVR.svg";

/***/ }),
/* 1122 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/li.2WpEC.svg";

/***/ }),
/* 1123 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lk.k1C0H.svg";

/***/ }),
/* 1124 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lr.2Uw0P.svg";

/***/ }),
/* 1125 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ls.VBEQt.svg";

/***/ }),
/* 1126 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lt.-y825.svg";

/***/ }),
/* 1127 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lu.3uxLI.svg";

/***/ }),
/* 1128 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/lv.ZvSWw.svg";

/***/ }),
/* 1129 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ly.3sE_g.svg";

/***/ }),
/* 1130 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ma.1EL7B.svg";

/***/ }),
/* 1131 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mc.2WhRw.svg";

/***/ }),
/* 1132 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/md.vsh0e.svg";

/***/ }),
/* 1133 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/me.1qPvt.svg";

/***/ }),
/* 1134 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mf.2piL-.svg";

/***/ }),
/* 1135 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mg.3xRR5.svg";

/***/ }),
/* 1136 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mh.2wUrT.svg";

/***/ }),
/* 1137 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mk.2BczB.svg";

/***/ }),
/* 1138 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ml.1kv7-.svg";

/***/ }),
/* 1139 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mm.2ffBN.svg";

/***/ }),
/* 1140 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mn.lruf-.svg";

/***/ }),
/* 1141 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mo.3sSWi.svg";

/***/ }),
/* 1142 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mp.1O98X.svg";

/***/ }),
/* 1143 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mq.1j0c-.svg";

/***/ }),
/* 1144 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mr.2nSlc.svg";

/***/ }),
/* 1145 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ms.2S4dH.svg";

/***/ }),
/* 1146 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mt.3YVu7.svg";

/***/ }),
/* 1147 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mu.2xe4w.svg";

/***/ }),
/* 1148 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mv.1pAcK.svg";

/***/ }),
/* 1149 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mw.2u2G-.svg";

/***/ }),
/* 1150 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mx.3HHm5.svg";

/***/ }),
/* 1151 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/my.2ROqC.svg";

/***/ }),
/* 1152 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/mz.1madv.svg";

/***/ }),
/* 1153 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/na.3b9ka.svg";

/***/ }),
/* 1154 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nc.2SMtj.svg";

/***/ }),
/* 1155 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ne.2AJeB.svg";

/***/ }),
/* 1156 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nf.3jVrH.svg";

/***/ }),
/* 1157 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ng.1m-Ff.svg";

/***/ }),
/* 1158 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ni.3edd4.svg";

/***/ }),
/* 1159 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nl.2bwMS.svg";

/***/ }),
/* 1160 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/no.1IabM.svg";

/***/ }),
/* 1161 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/np.IB5s7.svg";

/***/ }),
/* 1162 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nr.3s4iU.svg";

/***/ }),
/* 1163 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nu.2WiGe.svg";

/***/ }),
/* 1164 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/nz.gV5t6.svg";

/***/ }),
/* 1165 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/om.2IQ-j.svg";

/***/ }),
/* 1166 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pa.22K2M.svg";

/***/ }),
/* 1167 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pe.1_GS_.svg";

/***/ }),
/* 1168 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pf.3tk8E.svg";

/***/ }),
/* 1169 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pg.3w7D2.svg";

/***/ }),
/* 1170 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ph.1K-EN.svg";

/***/ }),
/* 1171 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pk.7QViU.svg";

/***/ }),
/* 1172 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pl.2a9yb.svg";

/***/ }),
/* 1173 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pm.2SMtj.svg";

/***/ }),
/* 1174 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pn.3mRNc.svg";

/***/ }),
/* 1175 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pr.TkG0b.svg";

/***/ }),
/* 1176 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ps.BcoId.svg";

/***/ }),
/* 1177 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pt.3XLbQ.svg";

/***/ }),
/* 1178 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/pw.3J0Gx.svg";

/***/ }),
/* 1179 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/py.2SA6U.svg";

/***/ }),
/* 1180 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/qa.3CXHK.svg";

/***/ }),
/* 1181 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/re.2SMtj.svg";

/***/ }),
/* 1182 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ro.1xgq6.svg";

/***/ }),
/* 1183 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/rs.28IQy.svg";

/***/ }),
/* 1184 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ru.3RAq4.svg";

/***/ }),
/* 1185 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/rw.34cXU.svg";

/***/ }),
/* 1186 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sa.2bh1V.svg";

/***/ }),
/* 1187 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sb.2zDCO.svg";

/***/ }),
/* 1188 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sc.1AnTz.svg";

/***/ }),
/* 1189 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sd.c8kmJ.svg";

/***/ }),
/* 1190 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/se.31NU3.svg";

/***/ }),
/* 1191 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sg.8o5QE.svg";

/***/ }),
/* 1192 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sh.1nwc1.svg";

/***/ }),
/* 1193 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/si.s4x5x.svg";

/***/ }),
/* 1194 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sj.2HjXs.svg";

/***/ }),
/* 1195 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sk.1xk77.svg";

/***/ }),
/* 1196 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sl.DGVaX.svg";

/***/ }),
/* 1197 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sm.2jefN.svg";

/***/ }),
/* 1198 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sn.1N8aE.svg";

/***/ }),
/* 1199 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/so.2wReU.svg";

/***/ }),
/* 1200 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sr.tPEMt.svg";

/***/ }),
/* 1201 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ss.3Geds.svg";

/***/ }),
/* 1202 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/st.1gBcE.svg";

/***/ }),
/* 1203 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sv.3MFAg.svg";

/***/ }),
/* 1204 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sx.1QgmA.svg";

/***/ }),
/* 1205 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sy.EZ4pb.svg";

/***/ }),
/* 1206 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/sz.3eOag.svg";

/***/ }),
/* 1207 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tc.2Q-RA.svg";

/***/ }),
/* 1208 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/td.XwVK8.svg";

/***/ }),
/* 1209 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tf.3xaTz.svg";

/***/ }),
/* 1210 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tg.Jykqh.svg";

/***/ }),
/* 1211 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/th.3ETCo.svg";

/***/ }),
/* 1212 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tj.3zkP-.svg";

/***/ }),
/* 1213 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tk.1YQsC.svg";

/***/ }),
/* 1214 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tl.1GOaM.svg";

/***/ }),
/* 1215 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tm.2Ekpc.svg";

/***/ }),
/* 1216 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tn.3KaBy.svg";

/***/ }),
/* 1217 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/to.WnJJp.svg";

/***/ }),
/* 1218 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tr.2NjR_.svg";

/***/ }),
/* 1219 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tt.TUf9C.svg";

/***/ }),
/* 1220 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tv.36m3F.svg";

/***/ }),
/* 1221 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tw.2wleo.svg";

/***/ }),
/* 1222 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/tz.V_aqs.svg";

/***/ }),
/* 1223 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ua.2llWW.svg";

/***/ }),
/* 1224 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ug.3XVhp.svg";

/***/ }),
/* 1225 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/um.1Qc3K.svg";

/***/ }),
/* 1226 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/un.2zA6C.svg";

/***/ }),
/* 1227 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/us.1Qc3K.svg";

/***/ }),
/* 1228 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/uy.1Y1mC.svg";

/***/ }),
/* 1229 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/uz.2nIPH.svg";

/***/ }),
/* 1230 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/va.H-TnN.svg";

/***/ }),
/* 1231 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vc.cEOJq.svg";

/***/ }),
/* 1232 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ve.1-rAI.svg";

/***/ }),
/* 1233 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vg.27WC7.svg";

/***/ }),
/* 1234 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vi.j0S1B.svg";

/***/ }),
/* 1235 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vn.2F_Zc.svg";

/***/ }),
/* 1236 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/vu.3UgNZ.svg";

/***/ }),
/* 1237 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/wf.3Mk2v.svg";

/***/ }),
/* 1238 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ws.3o3sr.svg";

/***/ }),
/* 1239 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/ye.2ilYd.svg";

/***/ }),
/* 1240 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/yt.2SMtj.svg";

/***/ }),
/* 1241 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/za.3BjEA.svg";

/***/ }),
/* 1242 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zm.lNiy4.svg";

/***/ }),
/* 1243 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zw.2-n04.svg";

/***/ }),
/* 1244 */
/***/ (function(module, exports) {

module.exports = "agent-console/./resources/flags/zz.1ITA-.svg";

/***/ }),
/* 1245 */,
/* 1246 */
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
/* 1247 */,
/* 1248 */,
/* 1249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _request = __webpack_require__(1253);

var _request2 = _interopRequireDefault(_request);

var _uid = __webpack_require__(923);

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
/* 1250 */
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

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _uid = __webpack_require__(923);

var _uid2 = _interopRequireDefault(_uid);

var _warning = __webpack_require__(1262);

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
/* 1251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AjaxUploader = __webpack_require__(1249);

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = __webpack_require__(1250);

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
/* 1252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export this package's api
module.exports = __webpack_require__(1251);

/***/ }),
/* 1253 */
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
/* 1254 */,
/* 1255 */,
/* 1256 */,
/* 1257 */,
/* 1258 */,
/* 1259 */,
/* 1260 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkU4OUI5NzlFNTIyMTFFMjkzRDY5M0EzRUFGNUY4ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkU4OUI5N0FFNTIyMTFFMjkzRDY5M0EzRUFGNUY4ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRTg5Qjk3N0U1MjIxMUUyOTNENjkzQTNFQUY1Rjg4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRTg5Qjk3OEU1MjIxMUUyOTNENjkzQTNFQUY1Rjg4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjKuj5kAAAZ+SURBVHjazJlbbBRVGMf3zG13Lp2dvdNuS1sWKZe0QYFwTUw0CvggkYvGRIkoMRK5PPkkJvigIG01PggP+iA+UF9IeCDRFxN4oaCJoZhigkVLo2gv0m13d3Zn5+Y3e9rptnSXmelWONlOzmznnPM7//Odb873LTJN0/f4FQr+bvX/QpIUQSCCIB4himEVU9e11WvaLSxgoigSyiPH0nV9Ri3QiSwVhNAjxMKjA5yNZRX4diFqlduot+kBECaZwlpgMcsKnqRnMrssSB5sDbjIsnzk6LHDh49qmmaZ7sI2OLUQJijZbLan59u2thUffXxyYGCAIMi+vpsdHe14A6FS+Z+wMBCocv58z+nOrkwmIwh8NpuDf+m6sXvP3l27Xjx29Ehzc7Ntsm7hEMz7zsBtmqZtc3PCND4+fujQu73XrlV6zO/3JxKJ7q7O9evXEdPFSc+qqqaWryA8rN3IyMievfuqMEFRFGVoaGjfy68cePPg2NgYHnJRTB4zgWm/ceCtO3d+d9jq8uXL23e8cPv2b67IXGN1dXX39/e70hjUeu31/WNj/9pOpGYmj5kGBwe/PncOf8PQ1PF3Xt393NZEWIJ9pxSLY+lMfTQk8CzyoYJS7O379cDxT/8euQ8PDw8Pd3Z2njp10uHedGry8Bg4p09Od545cxZun1qVuvJNZ8DPVO9d0/Udb39w5aebUIchfrzeG4lEYA41M3ms1o0bfVBf2dp0teezhzJZa0GSl86c4NgA1GE82CUO19HdThwdHYXrpbMfko7fnkDf/d5BXB+6O7QoJq8UCm0tjc0NcVeTWbtqGa7cu3fPoVruvDzP8/t3bnb7VmhJLsGVXC5Xe7VgB0XC0ob2FW6xopLY2miRhSMRh4cLd7YVj0VjUtDDazTVVA/XbVu3OHw5ulMrtayVZRkPWEvr49C8o6OjxmrhvlKplJxXPGA1N8Q2rG0XRbHGauHt075mdf/AXU9YiWe2rCNMp+9EypWDWB/R0qLgAaslmYjHE4yR133+2mMhn7mpY6UHrOVLGzieyyGy9mqBWWiIFAXOA1YiIpk+lCYD1GL4rTzioHdvx38FMXB+rrHJ4wOJTAc1H+mByfChDCU5P9S7wIJONZrPEYInqfwFRnIeaLhbRCCTadED1iQdtkO0RcEyaE5GnFurKtJ1rmJGd+9ETAZTd9UqTUfdpoNcY0FRaT6DnFpYFvEKJbgNr13nIPAAkzqjmg9vq5pkRqM8RNWusaaPl0jOF/WqzXWTkGWFIEjncZhHLDthVCfwhmFmc0XNmF8GVfdlZMUwTTG6xDB0t2TuIh+IyTRNC9cJjGidM2HUjFzMK7pRNiLc5Ap6Nq+WNCWoYFxiCAh7oK3zBBPlXCGMFeJZPhSDIQiGNYp5eKCgGvAhCct8YNhyRH+sifYHpOTywOTo8PgkLKedXapubUR1GjuxBtNlGH+ysSkYT5ZiUYpLzjrUg0iaMYsJESTf2IY9AyfFmppaWI4DsXGHWLlK4lHVk45WY5+P4/hgMMQwDJ4haSlDsEtaCyODWm6i0sS45BOknyt1aF0oiozFEpIUnpycyOWywFeesJ0jHjWvQvgK8ohBEYKwaeXLXYRVE9s2jt/4wTT0B5loMcIl26Yb4KyCNQKE/OFwNBSKyHIO+IpKAWe45zhb6kEm6ILnRUGoIykSoTmWMGtWIIa0Zlv61lVTV2cx1YWDq7b4ZgsAd9Y50mdiSlgBluWKxWI6fV8p5HFiwl5TYs5GY5hAPNEg1IkEOZdpXjOlhFB47bNMMGYPztangBUMaz5XbF1wpfRBYBjRaCIcgTAdwegz6epyLJYTpFCkJCnCzXD76lEUwQSCq7eSrRuHVQG1bBJa2sHaK78kbLKZIQIBNhavp2gGk00tImYCdwx2DX6JpKiyZSu/Viwn3u+6eOF7XN+4+ckvvjwFBl6FDK9mqVsTDwUA4XBs+J+/DEObwsLbNRQOlX4LMpFhlASbicTgtooXzExmLl74zr693vtzenw8KAUr5bHKIzy8aJazg0EJgmX5QiE/gwUbAfYd/iVIKRQCbMA0ka1zhSyZZbx5WQ6w7NKWxrt//DmVPhFY2L/ZTJYX+CqLP02FE0EKRdPgMhh/YOY3H3CVvCDCFTsCVStSGmUDVepYVaEfDRYLJrPrpec/7/4Kf79959OlAZiJ9AT4T+jyoYKpahHWEztagqSmkpS+x6/8J8AAhsiCQV+tXy4AAAAASUVORK5CYII="

/***/ }),
/* 1261 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzFEM0MwQURFNTIyMTFFMkEzODlDQjFGNjhGMUJFRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzFEM0MwQUVFNTIyMTFFMkEzODlDQjFGNjhGMUJFRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMUQzQzBBQkU1MjIxMUUyQTM4OUNCMUY2OEYxQkVFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMUQzQzBBQ0U1MjIxMUUyQTM4OUNCMUY2OEYxQkVFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYSkgMAAAiiSURBVHjazJl7UFTXHcfv++7rsrssLCuggK7hYYrio1WCbSYREjKjtHViJ3bSatI/bJ2knWnTSf5oaGNqZprWTjKTRk3sH6mJYwL+IcTJKAnt2AYD6KhABJ+8kl1YHsK+7969t797z927gBHuAo453D3e9/nc7+93fuf8jrgkSdi3r1Dw+7KrgyQpgsAJgriPKKJcpHhcKFn1HRkLmCiKhHLfseLxeFIt0IlUCo7j9xELtQ5wGpZc4OzC1QJPnfe3ARAiUbEWXiSlaFioLOSFxAJpkEOg0tHRUX/ihOy3CcoF9cSFMEF97dr1UCg47PO98867X3zRumzZsrVlZchT5y0bNW+TAZMgCHV19X96Zd+qVSWTE35/wA9Xd+165o03/r65ooKmaeSv84DDoYEb16/CKzR308l0q7f3d799of38eaPRGBfFdHu6wWgIBAKyWQXBZDZXVVW++PsX4KrWpXTELTEWi61wP0DMQydwo89bWrZu3QZMLMsCAU3RNEPDR+bl5ZlMpmX5+XBbc/N/nt717MFDh3meh0dQz78nLo90am1tA0tFItHsnByLxaL0PvhWaWjIO+n3Z7lcIz4fwzBOpxN2zjR9tvOnTw8MDCAxFt+ISKfh4eGqx6pB6mAw6FqyZGx0FOJgNBLh0tLgjnA4DKwD/f2swQADh9VmCwYCNps9FuM/+uh4Tnb2LEF7qhGpVKV6Zd+r4+PjdrsdDr0ejzs385F1hRk2LhCOdtwYzLSlVaxebuce9Y37T53ramq9ApR9fb0Wjvv18785fvwYMAHZovVExNTX39/Y+DEc+v3+HY+u/+Mz1WlG5m6PPPmD0vFAZMfL//xKkvyTk23t7Z81N1du2aJnJEjNt06fPoPiZO3u6gN7a+5kwgkSJykQBFMatlsMp17f43JY0dWTJxt0RloiJSN6PB7YAavtrv7utLfQDGWxsunOxJbFOlx0mo1gWJok3nv55+i2S5cu64z+KRgR6vHx21Dv31OTlAcmRWaOoFlQSJZKmbUpXytJNEsazPFoqBAnjCwTjvLQVRdfLVTSzIZcB6c+DGKk2aEmYBYJG0UTFEMCDWugWBNlMFGskTJYjLb09SX5Sl+T7knccqTbN5e6NSbKxCkKkbJU4FIESciOJfORjIE0mOSaYUnaUPpAHjwCYWiRx0Q0rjkcDufKXPkQGjaakcnkDVc2MF9iH8PlP8X9KZyiilcshafcbrfO8TG1oTovP0+I9UNzlMmstE0ovHKN4Qr8lHCCdpTrZF62E46Kigp1jtmpGXF5QQHM+ME6WAIF4SAmbdAEKEmMyxvsKO6U68qAetPGjTrVSg2roKDgdogHr0qioCYk9JOAC1OZ1BoO4Vq2084y9Pcf2nhPXJ6NDNsdDs3fEkAYApJRZCZRZYqrggEZRRKV5aszBc/ixy0oTOCrNe4c7ZTyQwrJIoF0sjy4pPpYYmqm4ErbKzdhQlhnGpKay4sYmZtlnwqLgDAJgCSMUMgkzbIISxXs4bWFAs7iicRrcYyIXFU0WJOPKEwJFxeTLiUlHStRyxsBwNZcnT0xRbVMmTQ9gGGCQiWLhMu14mCiEh+SFlTjhIZFUXTc5Fjknqgmt0a7yLmmGFFUpVKcHdOcPbklzsA/ZiehO3FPoSciMiEtf9r4rWaFqO242gHj03YwMS4SDJ9Roj8FolLFEllzzJBBR0YSZCIOYGp0xZOBA9M8D6wsRS1LSYrWk//Mx7cQGW/N17BUzaQ4XJFwjSmJJe8RtGhdRulmSjmcqumoycEbM+8IbDMcS9QiZ8S2EiY8KSWxKc+3EFmEyxdxXUpHSZNgyU41sZ7n0kg8Fh4baJtzHIG0dezW2SmWvWdYKAUyEJLIhyc8neLdxzg+GpwYaLM4CnB+ItU1HCJVIMhgo+FQb7/XsuRBKS76h3oEPnTnnYAc9N2kKJN1RUVTY4MgCCg71QlH6AdCTD7fyN5n955uuWbMr2AYC0Uw0dve0Gh/5LYnOjEUmfCGxwZDI71iNMwwZoMlkyv43qHj//trbW0kEkErEXrgCD2LM2hVLRQKvXvkWGXVzk/PdXu8I3b3BqM1h2E42GAGTWIUIRGkBDN5mFlZ0HlbSRVrNIbD4YMffLpt2+6GhjMIDvHNYllqFiANy+Md/vDDhqNHT4yMjKEbQDOGZZniqmhn411DIpdhWVmupOBBqHuu3nzu+T9kZjpqaqp+/KPqoiL31KW5Gf105tKIhgJ1MBhqbv68rq7x7H9b4fOmPrZ2ben5801y5thxJvp15zfEEcjI1mznHFlyDpe23O8PzLhhw/rVO3f+8IknHmFZVmtaWxqZhiVPXZRy61b/P95+r7GxKRyOfKMSGRnpPl830tXf/e/I119O8wzGZCh+zJKRDfvwbRxXcDdjuVzOX/3yZ089VcMwDHobdI5pWEhGsPqRI8f+8vrbPB+b3SsnJ29ynAXth4Zu8IMX45FJkIl1upncMsZoRpcuXLi8bt2W2V9VXOR+7bWXSkuLgQGw3CsLiRndrbb2b6/++c05maB0dFzR9k1ZK9jiai9ZGHKVG5dv0pigdHX1zPmqK93Xn9yxp67uYxAF6UpN9fH29kv/OlrP0DQfmxsLZCgv34D2PYOeY/sOXmm5CAPT5p9UP/6L7eDaieWQLp1x8cWX9i9duqSs7EE1QGgh4MCBwwCnZ1kMSmvrBeSIXu/wW8/t72m7bLZxMFaffOuDyGRgdHQcXQX6OV8lt6jkIocOv4/+20fGiiv+39nZ3XLuAhyCdVlm7sUCkBbuDAQC4BAWq7yCCkOfkTNBG/aMdLgE3QXqixc75nyVgWVjAkzEpbNnz3k8wyqWEIOTQn39KZSCxoQYIyeo0uzb1avXfb7Rvr5BjjNv3PowQVMw3+Kj/KqH1hA0CSf7+gZ6em4oa0+zvQfHUH4mKR1O/OSTZjVuYd++8n8BBgAdGp8vDEHQhQAAAABJRU5ErkJggg=="

/***/ }),
/* 1262 */
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
/* 1263 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ad.svg": 989,
	"./ae.svg": 990,
	"./af.svg": 991,
	"./ag.svg": 992,
	"./ai.svg": 993,
	"./al.svg": 994,
	"./am.svg": 995,
	"./ao.svg": 996,
	"./aq.svg": 997,
	"./ar.svg": 998,
	"./as.svg": 999,
	"./at.svg": 1000,
	"./au.svg": 1001,
	"./aw.svg": 1002,
	"./ax.svg": 1003,
	"./az.svg": 1004,
	"./ba.svg": 1005,
	"./bb.svg": 1006,
	"./bd.svg": 1007,
	"./be.svg": 1008,
	"./bf.svg": 1009,
	"./bg.svg": 1010,
	"./bh.svg": 1011,
	"./bi.svg": 1012,
	"./bj.svg": 1013,
	"./bl.svg": 1014,
	"./bm.svg": 1015,
	"./bn.svg": 1016,
	"./bo.svg": 1017,
	"./bq.svg": 1018,
	"./br.svg": 1019,
	"./bs.svg": 1020,
	"./bt.svg": 1021,
	"./bv.svg": 1022,
	"./bw.svg": 1023,
	"./by.svg": 1024,
	"./bz.svg": 1025,
	"./ca.svg": 1026,
	"./cc.svg": 1027,
	"./cd.svg": 1028,
	"./cf.svg": 1029,
	"./cg.svg": 1030,
	"./ch.svg": 1031,
	"./ci.svg": 1032,
	"./ck.svg": 1033,
	"./cl.svg": 1034,
	"./cm.svg": 1035,
	"./cn.svg": 1036,
	"./co.svg": 1037,
	"./cr.svg": 1038,
	"./cu.svg": 1039,
	"./cv.svg": 1040,
	"./cw.svg": 1041,
	"./cx.svg": 1042,
	"./cy.svg": 1043,
	"./cz.svg": 1044,
	"./de.svg": 1045,
	"./dj.svg": 1046,
	"./dk.svg": 1047,
	"./dm.svg": 1048,
	"./do.svg": 1049,
	"./dz.svg": 1050,
	"./ec.svg": 1051,
	"./ee.svg": 1052,
	"./eg.svg": 1053,
	"./eh.svg": 1054,
	"./er.svg": 1055,
	"./es.svg": 1056,
	"./et.svg": 1057,
	"./eu.svg": 1058,
	"./fi.svg": 1059,
	"./fj.svg": 1060,
	"./fk.svg": 1061,
	"./fm.svg": 1062,
	"./fo.svg": 1063,
	"./fr.svg": 1064,
	"./ga.svg": 1065,
	"./gb-eng.svg": 1066,
	"./gb-nir.svg": 1067,
	"./gb-sct.svg": 1068,
	"./gb-wls.svg": 1069,
	"./gb.svg": 1070,
	"./gd.svg": 1071,
	"./ge.svg": 1072,
	"./gf.svg": 1073,
	"./gg.svg": 1074,
	"./gh.svg": 1075,
	"./gi.svg": 1076,
	"./gl.svg": 1077,
	"./gm.svg": 1078,
	"./gn.svg": 1079,
	"./gp.svg": 1080,
	"./gq.svg": 1081,
	"./gr.svg": 1082,
	"./gs.svg": 1083,
	"./gt.svg": 1084,
	"./gu.svg": 1085,
	"./gw.svg": 1086,
	"./gy.svg": 1087,
	"./hk.svg": 1088,
	"./hm.svg": 1089,
	"./hn.svg": 1090,
	"./hr.svg": 1091,
	"./ht.svg": 1092,
	"./hu.svg": 1093,
	"./id.svg": 1094,
	"./ie.svg": 1095,
	"./il.svg": 1096,
	"./im.svg": 1097,
	"./in.svg": 1098,
	"./io.svg": 1099,
	"./iq.svg": 1100,
	"./ir.svg": 1101,
	"./is.svg": 1102,
	"./it.svg": 1103,
	"./je.svg": 1104,
	"./jm.svg": 1105,
	"./jo.svg": 1106,
	"./jp.svg": 1107,
	"./ke.svg": 1108,
	"./kg.svg": 1109,
	"./kh.svg": 1110,
	"./ki.svg": 1111,
	"./km.svg": 1112,
	"./kn.svg": 1113,
	"./kp.svg": 1114,
	"./kr.svg": 1115,
	"./kw.svg": 1116,
	"./ky.svg": 1117,
	"./kz.svg": 1118,
	"./la.svg": 1119,
	"./lb.svg": 1120,
	"./lc.svg": 1121,
	"./li.svg": 1122,
	"./lk.svg": 1123,
	"./lr.svg": 1124,
	"./ls.svg": 1125,
	"./lt.svg": 1126,
	"./lu.svg": 1127,
	"./lv.svg": 1128,
	"./ly.svg": 1129,
	"./ma.svg": 1130,
	"./mc.svg": 1131,
	"./md.svg": 1132,
	"./me.svg": 1133,
	"./mf.svg": 1134,
	"./mg.svg": 1135,
	"./mh.svg": 1136,
	"./mk.svg": 1137,
	"./ml.svg": 1138,
	"./mm.svg": 1139,
	"./mn.svg": 1140,
	"./mo.svg": 1141,
	"./mp.svg": 1142,
	"./mq.svg": 1143,
	"./mr.svg": 1144,
	"./ms.svg": 1145,
	"./mt.svg": 1146,
	"./mu.svg": 1147,
	"./mv.svg": 1148,
	"./mw.svg": 1149,
	"./mx.svg": 1150,
	"./my.svg": 1151,
	"./mz.svg": 1152,
	"./na.svg": 1153,
	"./nc.svg": 1154,
	"./ne.svg": 1155,
	"./nf.svg": 1156,
	"./ng.svg": 1157,
	"./ni.svg": 1158,
	"./nl.svg": 1159,
	"./no.svg": 1160,
	"./np.svg": 1161,
	"./nr.svg": 1162,
	"./nu.svg": 1163,
	"./nz.svg": 1164,
	"./om.svg": 1165,
	"./pa.svg": 1166,
	"./pe.svg": 1167,
	"./pf.svg": 1168,
	"./pg.svg": 1169,
	"./ph.svg": 1170,
	"./pk.svg": 1171,
	"./pl.svg": 1172,
	"./pm.svg": 1173,
	"./pn.svg": 1174,
	"./pr.svg": 1175,
	"./ps.svg": 1176,
	"./pt.svg": 1177,
	"./pw.svg": 1178,
	"./py.svg": 1179,
	"./qa.svg": 1180,
	"./re.svg": 1181,
	"./ro.svg": 1182,
	"./rs.svg": 1183,
	"./ru.svg": 1184,
	"./rw.svg": 1185,
	"./sa.svg": 1186,
	"./sb.svg": 1187,
	"./sc.svg": 1188,
	"./sd.svg": 1189,
	"./se.svg": 1190,
	"./sg.svg": 1191,
	"./sh.svg": 1192,
	"./si.svg": 1193,
	"./sj.svg": 1194,
	"./sk.svg": 1195,
	"./sl.svg": 1196,
	"./sm.svg": 1197,
	"./sn.svg": 1198,
	"./so.svg": 1199,
	"./sr.svg": 1200,
	"./ss.svg": 1201,
	"./st.svg": 1202,
	"./sv.svg": 1203,
	"./sx.svg": 1204,
	"./sy.svg": 1205,
	"./sz.svg": 1206,
	"./tc.svg": 1207,
	"./td.svg": 1208,
	"./tf.svg": 1209,
	"./tg.svg": 1210,
	"./th.svg": 1211,
	"./tj.svg": 1212,
	"./tk.svg": 1213,
	"./tl.svg": 1214,
	"./tm.svg": 1215,
	"./tn.svg": 1216,
	"./to.svg": 1217,
	"./tr.svg": 1218,
	"./tt.svg": 1219,
	"./tv.svg": 1220,
	"./tw.svg": 1221,
	"./tz.svg": 1222,
	"./ua.svg": 1223,
	"./ug.svg": 1224,
	"./um.svg": 1225,
	"./un.svg": 1226,
	"./us.svg": 1227,
	"./uy.svg": 1228,
	"./uz.svg": 1229,
	"./va.svg": 1230,
	"./vc.svg": 1231,
	"./ve.svg": 1232,
	"./vg.svg": 1233,
	"./vi.svg": 1234,
	"./vn.svg": 1235,
	"./vu.svg": 1236,
	"./wf.svg": 1237,
	"./ws.svg": 1238,
	"./ye.svg": 1239,
	"./yt.svg": 1240,
	"./za.svg": 1241,
	"./zm.svg": 1242,
	"./zw.svg": 1243,
	"./zz.svg": 1244
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
webpackContext.id = 1263;

/***/ }),
/* 1264 */,
/* 1265 */,
/* 1266 */,
/* 1267 */,
/* 1268 */,
/* 1269 */,
/* 1270 */,
/* 1271 */,
/* 1272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatItem__ = __webpack_require__(1390);





var ShowChatViaList = function ShowChatViaList(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__ChatItem_css___default.a.showChatViaList
  }, void 0, props.chats.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__ChatItem__["a" /* default */], {
      chatItem: item,
      enableRefuseChat: props.enableRefuseChat,
      ifEnableSegmentation: props.ifEnableSegmentation,
      isShowUnreposiveTime: props.isShowUnreposiveTime,
      isShowDepartment: props.isShowDepartment,
      onClickPin: props.onClickPin,
      onItemClick: props.onItemClick,
      onAcceptChat: props.onAcceptChat,
      onRefusedChat: props.onRefusedChat,
      onWrapUp: props.onWrapUp,
      onDeleteItem: props.onDeleteItem
    }, item.chatId);
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ShowChatViaList);

/***/ }),
/* 1273 */,
/* 1274 */,
/* 1275 */,
/* 1276 */,
/* 1277 */,
/* 1278 */,
/* 1279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PromoteToContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoteToUser; });
var PromoteToContact = 1;
var PromoteToUser = 2;

/***/ }),
/* 1280 */,
/* 1281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return googlePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Zendesk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Salesforce; });
var Facebook = 1;
var googlePlus = 2;
var Zendesk = 3;
var Salesforce = 4;

/***/ }),
/* 1282 */,
/* 1283 */,
/* 1284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_chunk__ = __webpack_require__(1693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_chunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_chunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_guid__ = __webpack_require__(543);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestSecureForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSecureFormContent; });








/**
 * @param {string} serverPath - secure form server path, https://secureForm.comm100.com
 * @param {object} secureForm - secure form object
 * @param {object} config
 * config:
 * {
 *  siteId: 10000,
 *  visitorId: 1,
 *  authToken: '[sessionId]',
 *  authProvider: 'chatserver.comm100.com',
 *  themeColor: '#ff0000',
 * }
 * @returns {Promise} -
 */

var requestSecureForm = function requestSecureForm(serverPath, secureForm, config) {
  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
    __webpack_require__.e/* require.ensure */(7).then((function (require) {
      resolve(__webpack_require__(1330));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }).then(function (NodeRSA) {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      var rsaKey = new NodeRSA({ b: 512 }, null, {
        environment: 'browser',
        encryptionScheme: 'pkcs1'
      });
      var token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_guid__["a" /* createGUID */])();
      var url = serverPath + '/formbuilder.ashx';
      var data = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, config, {
        accessToken: token,
        publicKey: rsaKey.exportKey('pkcs8-public-pem'),
        formName: secureForm.name,
        jsonFormFields: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(secureForm.fields)
      }));
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(url, data).then(function (res) {
        if (res.data.success) {
          resolve({ token: token, rsaKey: rsaKey });
        } else {
          reject(res.error_message);
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  });
};

/**
 * @param {string} serverPath - secure form server path, https://secureForm.comm100.com
 * @param {object} config
 * {
 *  siteId: 10000,
 *  visitorId: 1,
 *  accessToken: token,
 *  authToken: '[sessionId]'
 * }
 * @param {NodeRSA} rsaKey -
 * @returns {Promise} -
 */
var getSecureFormContent = function getSecureFormContent(serverPath, config, rsaKey) {
  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var url = serverPath + '/formconsumer.ashx';
    var data = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(config);
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(url, data).then(function (res) {
      var _res$data = res.data,
          errorCode = _res$data.error_code,
          errorMessage = _res$data.error_message,
          formContent = _res$data.formContent;

      if (errorCode === 0) {
        var baseLength = 88; // (512/48 + 1) * 8;
        var encryptTexts = __WEBPACK_IMPORTED_MODULE_3_lodash_chunk___default()(formContent, baseLength).map(function (chars) {
          return chars.join('');
        });
        var bufferContent = Buffer.concat(encryptTexts.map(function (texts) {
          return rsaKey.decrypt(texts);
        }));
        var encodedContent = new Buffer(bufferContent).toString('utf8');
        var content = new Buffer(encodedContent, 'base64').toString();
        var fields = JSON.parse(content).fields;
        resolve(fields);
      } else {
        reject(errorMessage);
      }
    }).catch(function (err) {
      reject(err);
    });
  });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(868).Buffer))

/***/ }),
/* 1285 */,
/* 1286 */,
/* 1287 */,
/* 1288 */,
/* 1289 */,
/* 1290 */,
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
/* 1332 */,
/* 1333 */,
/* 1334 */,
/* 1335 */,
/* 1336 */,
/* 1337 */,
/* 1338 */,
/* 1339 */,
/* 1340 */,
/* 1341 */,
/* 1342 */,
/* 1343 */,
/* 1344 */,
/* 1345 */,
/* 1346 */,
/* 1347 */,
/* 1348 */,
/* 1349 */,
/* 1350 */,
/* 1351 */,
/* 1352 */,
/* 1353 */,
/* 1354 */,
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
/* 1390 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Tooltip_Tooltip__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatStatus_ChatStatus__ = __webpack_require__(1404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ChatItemDetail__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ChatItemPrompt__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ChatItemSegment__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);





















var ChatItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatItem, _React$Component);

  function ChatItem() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatItem);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatItem.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatItem)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_10_src_components_Tooltip_Tooltip__["a" /* default */].rebuild();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_7_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      __WEBPACK_IMPORTED_MODULE_10_src_components_Tooltip_Tooltip__["a" /* default */].rebuild();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tooltipId = 'chatlist';
      var chatItem = this.props.chatItem;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.chatitemcontainer, (chatItem.isShowAcceptAndRefuse || chatItem.audioVideoStatus === __WEBPACK_IMPORTED_MODULE_18__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || chatItem.audioVideoStatus === __WEBPACK_IMPORTED_MODULE_18__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]) && __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.acceptStyle, chatItem.isSelected && __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.selected, !chatItem.isShowAcceptAndRefuse && !chatItem.isShowWrapUp && (this.props.isShowDepartment && __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default()(chatItem.visitor.department) || !this.props.isShowDepartment && __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default()(chatItem.visitor.agentName)) && __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.nobutton),
        onClick: function onClick() {
          return _this2.props.onItemClick(chatItem);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.captureitem
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_13__constants_enums__["b" /* icons */].pin,
        size: 14,
        'data-tip': chatItem.isPinned ? 'Unpin' : 'Pin',
        'data-for': tooltipId,
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.pinnStyle, chatItem.isPinned ? __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.pinned : __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.nopinned),
        onClick: function onClick() {
          _this2.props.onClickPin(chatItem);
        }
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.statusitem
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__ChatStatus_ChatStatus__["a" /* default */], {
        statusCode: chatItem.currentStatus,
        audioVideoStatus: chatItem.audioVideoStatus,
        dataFor: tooltipId
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.detailitem
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__ChatItemDetail__["a" /* default */], {
        chatItem: chatItem,
        enableRefuseChat: this.props.enableRefuseChat,
        isShowDepartment: this.props.isShowDepartment,
        onAcceptChat: this.props.onAcceptChat,
        onRefusedChat: this.props.onRefusedChat,
        onWrapUp: this.props.onWrapUp
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.infoitem
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__ChatItemPrompt__["a" /* default */], {
        chatItem: chatItem,
        isShowUnreposiveTime: this.props.isShowUnreposiveTime,
        onDeleteItem: this.props.onDeleteItem
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_11__ChatItem_css___default.a.segmentitem
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__ChatItemSegment__["a" /* default */], {
        chatItem: chatItem,
        ifEnableSegmentation: this.props.ifEnableSegmentation,
        dataFor: tooltipId
      })));
    }
  }]);

  return ChatItem;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatItem);

/***/ }),
/* 1391 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);














var ChatItemConfig = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatItemConfig, _React$Component);

  function ChatItemConfig() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatItemConfig);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatItemConfig.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatItemConfig)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatItemConfig, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.chatItemConfig
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
        className: __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.chatconfigpanel
      }, void 0, this.props.ifDepartmentEnabled && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onClickConfig(__WEBPACK_IMPORTED_MODULE_11__constants_enums__["k" /* chatListConfig */].showDepartment);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].success,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.configitem, this.props.isShowDepartment && __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.selectedicon)
      }), 'Show department'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onClickConfig(__WEBPACK_IMPORTED_MODULE_11__constants_enums__["k" /* chatListConfig */].showUnreposiveTime);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].success,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.configitem, this.props.isShowUnreposiveTime && __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.selectedicon)
      }), 'Show agent unresponsive time'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onClickConfig(__WEBPACK_IMPORTED_MODULE_11__constants_enums__["k" /* chatListConfig */].showByStatus);
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].success,
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.configitem, this.props.isShowChatItemsViaStatus && __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.selectedicon)
      }), 'Group chat by status')));
    }
  }]);

  return ChatItemConfig;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatItemConfig);

/***/ }),
/* 1392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChatItemConfig__ = __webpack_require__(1391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ShowChatViaGroup__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShowChatViaList__ = __webpack_require__(1272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_Icon__ = __webpack_require__(58);











var ChatItemContainer = function ChatItemContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__ChatItem_css___default.a.itemContainer
  }, void 0, props.isShowChatItemsViaStatus ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_6__ShowChatViaGroup__["a" /* default */], {
    groupItems: props.groupItems,
    enableRefuseChat: props.enableRefuseChat,
    ifEnableSegmentation: props.ifEnableSegmentation,
    isShowUnreposiveTime: props.isShowUnreposiveTime,
    isShowDepartment: props.isShowDepartment,
    onClickPin: props.onClickPin,
    onItemClick: props.onItemClick,
    onAcceptChat: props.onAcceptChat,
    onRefusedChat: props.onRefusedChat,
    onWrapUp: props.onWrapUp,
    onDeleteItem: props.onDeleteItem,
    onClickArrow: props.onClickArrow
  }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__ShowChatViaList__["a" /* default */], {
    chats: props.chats,
    enableRefuseChat: props.enableRefuseChat,
    ifEnableSegmentation: props.ifEnableSegmentation,
    isShowUnreposiveTime: props.isShowUnreposiveTime,
    isShowDepartment: props.isShowDepartment,
    onClickPin: props.onClickPin,
    onItemClick: props.onItemClick,
    onAcceptChat: props.onAcceptChat,
    onRefusedChat: props.onRefusedChat,
    onWrapUp: props.onWrapUp,
    onDeleteItem: props.onDeleteItem
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__ChatItem_css___default.a.configPanel
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_8__constants_enums__["b" /* icons */].chatListSetting,
    size: 14,
    tabIndex: 0,
    className: __WEBPACK_IMPORTED_MODULE_4__ChatItem_css___default.a.configicon
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__ChatItemConfig__["a" /* default */], {
    isShowChatItemsViaStatus: props.isShowChatItemsViaStatus,
    isShowUnreposiveTime: props.isShowUnreposiveTime,
    ifDepartmentEnabled: props.ifDepartmentEnabled,
    isShowDepartment: props.isShowDepartment,
    onClickConfig: props.onClickConfig
  })))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a, {
    id: 'chatlist',
    effect: 'solid',
    place: 'bottom',
    'class': __WEBPACK_IMPORTED_MODULE_3__CommonResources_common_css___default.a.tooltipInfoNoCapitalize
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ChatItemContainer);

/***/ }),
/* 1393 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Button_Button__ = __webpack_require__(47);












var ChatItemDetail = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatItemDetail, _React$Component);

  function ChatItemDetail() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatItemDetail);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatItemDetail.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatItemDetail)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatItemDetail, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.chatItemDetail
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.visitorName
      }, void 0, this.props.chatItem.visitor.name), !this.props.isShowDepartment && this.props.chatItem.visitor.agentName && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.visitorDepartment
      }, void 0, '(', this.props.chatItem.visitor.agentName, ')'), this.props.isShowDepartment && this.props.chatItem.visitor.department && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.visitorDepartment
      }, void 0, '(', this.props.chatItem.visitor.department, ')'), this.props.chatItem.isShowAcceptAndRefuse && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.actioncontainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
        type: 'primary',
        text: 'Accept',
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onAcceptChat(_this2.props.chatItem);
        },
        size: 'small',
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.acceptBtn
      }), this.props.enableRefuseChat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
        text: 'Refuse',
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onRefusedChat(_this2.props.chatItem);
        },
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.refuseBtn
      })), this.props.chatItem.isShowWrapUp && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
        type: 'primary',
        text: 'Wrap up',
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.props.onWrapUp(_this2.props.chatItem);
        },
        size: 'small',
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.wrapupbtn
      }));
    }
  }]);

  return ChatItemDetail;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatItemDetail);

/***/ }),
/* 1394 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icons_PromptNumber__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_time__ = __webpack_require__(74);















var ifShowTime = function ifShowTime(currentStatus, isShowUnresponsiveTime) {
  if (currentStatus === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["d" /* chatStatus */].waitingForChat || currentStatus === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["d" /* chatStatus */].transferring || currentStatus === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["d" /* chatStatus */].invitedAndWaitingForChat) {
    return true;
  }
  if (currentStatus === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["d" /* chatStatus */].chatting && isShowUnresponsiveTime) {
    return true;
  }
  return false;
};

var ChatItemPrompt = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatItemPrompt, _Component);

  function ChatItemPrompt(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatItemPrompt);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatItemPrompt.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatItemPrompt)).call(this, props));

    _this.timer = null;
    _this.unresponseBeginTime = props.chatItem.unresponseBeginTime;
    _this.updateUnresponsiveTime = _this.updateUnresponsiveTime.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatItemPrompt, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (ifShowTime(this.props.chatItem.currentStatus, this.props.isShowUnreposiveTime)) {
        this.updateUnresponsiveTime();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.chatItem.unresponseBeginTime !== this.props.chatItem.unresponseBeginTime) {
        if (nextProps.chatItem.unresponseBeginTime === null) {
          clearTimeout(this.timer);
          this.timer = null;
          this.unresponseBeginTime = 0;
          this.timestamp.textContent = '';
        } else {
          this.unresponseBeginTime = nextProps.chatItem.unresponseBeginTime;
          if (ifShowTime(nextProps.chatItem.currentStatus, nextProps.isShowUnreposiveTime)) {
            this.updateUnresponsiveTime();
          }
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var shouldShow = ifShowTime(this.props.chatItem.currentStatus, this.props.isShowUnreposiveTime);
      var prevShouldShow = ifShowTime(prevProps.chatItem.currentStatus, prevProps.isShowUnreposiveTime);
      if (!prevShouldShow && shouldShow) {
        this.updateUnresponsiveTime();
      } else if (prevShouldShow && !shouldShow && this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
        this.timestamp.textContent = '';
      }
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
    key: 'updateUnresponsiveTime',
    value: function updateUnresponsiveTime() {
      var _this2 = this;

      if (!this.unresponseBeginTime) {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        return;
      }
      var ticks = Date.now() - this.unresponseBeginTime;
      this.timestamp.textContent = ticks < 1000 ? '' : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_time__["j" /* formatWaitingTimeWithMillsecond */])(ticks);
      this.timer = setTimeout(function () {
        if (!_this2.timestamp) {
          _this2.timer = null;
          return;
        }
        _this2.updateUnresponsiveTime();
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.chatItemPrompt
      }, void 0, this.props.chatItem.messageNumber > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icons_PromptNumber__["a" /* default */], {
        customClass: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.promptNumber,
        number: this.props.chatItem.messageNumber
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.idleStyle, ref: function ref(span) {
          _this3.timestamp = span;
        } }), this.props.chatItem.isShowDeleteIcon && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].close,
        size: 10,
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.deleteIcon,
        onClick: function onClick(e) {
          e.stopPropagation();
          _this3.props.onDeleteItem(_this3.props.chatItem);
        }
      }));
    }
  }]);

  return ChatItemPrompt;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChatItemPrompt);

/***/ }),
/* 1395 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatItem_css__);











var ChatItemSegment = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatItemSegment, _React$Component);

  function ChatItemSegment() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatItemSegment);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatItemSegment.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatItemSegment)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatItemSegment, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var height = 10;
      if (this.props.chatItem.segments.length <= 2) {
        height = 15;
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatItem_css___default.a.chatItemSegment
      }, void 0, this.props.ifEnableSegmentation && this.props.chatItem.segments.map(function (segment, i) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('i', {
          'data-tip': segment.name,
          'data-for': _this2.props.dataFor,
          'data-place': 'right',
          style: { backgroundColor: segment.color, height: height }
        }, 'segment_' + i);
      }));
    }
  }]);

  return ChatItemSegment;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatItemSegment);

/***/ }),
/* 1396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ChatItem_css__);




var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h1', {}, void 0, 'You have no chats now.');

var NoChat = function NoChat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__ChatItem_css___default.a.noChatSection
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
    onClick: props.goToVisitors
  }, void 0, 'Go to Visitor list'), ' to invite a visitor to chat'));
};

/* harmony default export */ __webpack_exports__["a"] = (NoChat);

/***/ }),
/* 1397 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatItem_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ShowChatViaList__ = __webpack_require__(1272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);















var ShowChatViaGroup = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ShowChatViaGroup, _React$Component);

  function ShowChatViaGroup(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ShowChatViaGroup);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ShowChatViaGroup.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ShowChatViaGroup)).call(this, props));

    _this.timer = null;
    _this.clickArrow = _this.clickArrow.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ShowChatViaGroup, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'clickArrow',
    value: function clickArrow(id) {
      this.props.onClickArrow(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.showChatViaGroup
      }, void 0, this.props.groupItems.filter(function (item) {
        return item.chats.length > 0;
      }).map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.groupSection
        }, item.id, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.groupNameWraper, item.opened && __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.opened),
          onClick: function onClick() {
            return _this2.clickArrow(item.id);
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].arrowDown,
          className: __WEBPACK_IMPORTED_MODULE_9__ChatItem_css___default.a.groupSpread
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, item.description + '(' + item.chats.length + ')')), item.opened && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__ShowChatViaList__["a" /* default */], {
          chats: item.chats,
          enableRefuseChat: _this2.props.enableRefuseChat,
          ifEnableSegmentation: _this2.props.ifEnableSegmentation,
          isShowUnreposiveTime: _this2.props.isShowUnreposiveTime,
          isShowDepartment: _this2.props.isShowDepartment,
          onClickPin: _this2.props.onClickPin,
          onItemClick: _this2.props.onItemClick,
          onAcceptChat: _this2.props.onAcceptChat,
          onRefusedChat: _this2.props.onRefusedChat,
          onWrapUp: _this2.props.onWrapUp,
          onDeleteItem: _this2.props.onDeleteItem
        }));
      }));
    }
  }]);

  return ShowChatViaGroup;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ShowChatViaGroup);

/***/ }),
/* 1398 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Modal_ModalBanChat_ModalBanChat__ = __webpack_require__(961);












var BanChat = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(BanChat, _React$Component);

  function BanChat() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, BanChat);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BanChat.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(BanChat)).call(this));

    _this.state = {
      open: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(BanChat, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Button_Button__["a" /* default */], {
        text: 'Ban',
        className: __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css___default.a.btnAction,
        onClick: this.openModal,
        disabled: this.props.disabled
      }), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Modal_ModalBanChat_ModalBanChat__["a" /* default */], {
        openModal: this.openModal,
        closeModal: this.closeModal,
        onBanChat: this.props.onBanChat,
        realVisitorId: this.props.realVisitorId,
        visitorId: this.props.visitorId,
        visitorIP: this.props.visitorIP
      }));
    }
  }]);

  return BanChat;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (BanChat);

/***/ }),
/* 1399 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icons_ChatAction_Font__ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icons_ChatAction_Transfer__ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icons_ChatAction_SendFile__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icons_ChatAction_SendEmail__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icons_ChatAction_AttachTicket__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icons_ChatAction_Translate__ = __webpack_require__(1418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Icons_ChatAction_GoToMeeting__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Icons_ChatAction_Joinme__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Icons_ChatAction_SecureForm__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Icons_ChatAction_AudioChat__ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Icons_ChatAction_VideoChat__ = __webpack_require__(1419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_helper__ = __webpack_require__(16);






















var shouldComponentUpdateHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__utils_helper__["e" /* shouldComponentUpdateGen */])('ChatAction', [
// 'siteId', // site id should never be changed
'selectedFontSize', 'visitorId', 'chatId', 'ticketId', 'chatActionDisplay', 'chatActionEnable', 'transcriptInfo', 'responseErrorMessage', 'sendEmailSuccessMessage', 'autoTranslateInfo', 'pciForm', 'transfer', 'joinMeIntegrationServer']);

var relative = { position: 'relative' };

var ChatAction = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatAction, _React$Component);

  function ChatAction() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatAction);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatAction.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatAction)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatAction, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return shouldComponentUpdateHelper(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__ChatAction_css___default.a.chatAction
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
        className: __WEBPACK_IMPORTED_MODULE_7__CommonResources_common_css___default.a.clearfix
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icons_ChatAction_Font__["a" /* default */], {
        selectedFontSize: props.selectedFontSize,
        onFontSelect: props.onFontSelect
      })), props.chatActionDisplay.transfer && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icons_ChatAction_Transfer__["a" /* default */], {
        ifEnable: props.chatActionEnable.transfer,
        visitorId: props.visitorId,
        transfer: props.transfer,
        onTransferChat: props.onTransferChat,
        onTransferIconClick: props.onTransferIconClick
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icons_ChatAction_SendFile__["a" /* default */], {
        disabled: !props.chatActionEnable.sendFile,
        siteInfo: props.siteInfo,
        chatId: props.chatId,
        beforeUpload: props.beforeUpload,
        onStart: props.onSendFileStart,
        onSuccess: props.onSendFileSuccess,
        onProgress: props.onSendFileProgress,
        onError: props.onSendFileError,
        showErrorMessage: props.showErrorMessage
      })), props.chatActionDisplay.sendTranscript && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icons_ChatAction_SendEmail__["a" /* default */], {
        ifEnable: props.chatActionEnable.sendTranscript,
        visitorId: props.visitorId,
        chatId: props.chatId,
        handleSendTranscript: props.handleSendTranscript,
        transcriptInfo: props.transcriptInfo,
        initialSendTranscriptForm: props.initialSendTranscriptForm,
        responseErrorMessage: props.responseErrorMessage,
        sendEmailSuccessMessage: props.sendEmailSuccessMessage,
        showResponseErrorMessage: props.showResponseErrorMessage,
        hideResponseErrorMessage: props.hideResponseErrorMessage,
        hideSendEmailSuccessMessage: props.hideSendEmailSuccessMessage
      })), props.chatActionDisplay.attachTicket && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icons_ChatAction_AttachTicket__["a" /* default */], {
        ifEnable: props.chatActionEnable.attachTicket,
        siteId: props.siteId,
        visitorId: props.visitorId,
        ticketId: props.ticketId,
        handleAttachTicket: props.handleAttachTicket,
        gotoAttachTicket: props.gotoAttachTicket,
        ifUseMainServer: props.ifUseMainServer,
        responseErrorMessage: props.responseErrorMessage,
        hideResponseErrorMessage: props.hideResponseErrorMessage
      })), props.chatActionDisplay.autoTranslate && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        style: relative
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icons_ChatAction_Translate__["a" /* default */], {
        ifEnable: props.chatActionEnable.autoTranslate,
        visitorId: props.visitorId,
        chatId: props.chatId,
        autoTranslateInfo: props.autoTranslateInfo,
        onToggleAutoTranslate: props.onToggleAutoTranslate,
        onUpdateIfPopTranslation: props.onUpdateIfPopTranslation
      })), props.chatActionDisplay.gotoMeeting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        style: relative
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Icons_ChatAction_GoToMeeting__["a" /* default */], {
        ifEnable: props.chatActionEnable.gotoMeeting,
        visitorId: props.visitorId,
        onRequestGotoMeeting: props.onRequestGotoMeeting
      })), props.chatActionDisplay.joinMe && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Icons_ChatAction_Joinme__["a" /* default */], {
        ifEnable: props.chatActionEnable.joinMe,
        joinMeIntegrationServer: props.joinMeIntegrationServer,
        siteId: props.siteId,
        visitorId: props.visitorId,
        currentAgentId: props.currentAgentId,
        agentSession: props.agentSession
      })), props.chatActionDisplay.pciForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
        style: relative
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__Icons_ChatAction_SecureForm__["a" /* default */], {
        ifDisplay: props.chatActionDisplay.pciForm,
        ifEnable: props.chatActionEnable.pciForm,
        visitorId: props.visitorId,
        chatId: props.chatId,
        pciForm: props.pciForm,
        onRequestPCIForm: props.onRequestPCIForm
      })), props.chatActionDisplay.audioChat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__Icons_ChatAction_AudioChat__["a" /* default */], {
        ifEnable: props.chatActionEnable.audioChat,
        chatId: props.chatId,
        onClick: props.onRequestAudioChat
      })), props.chatActionDisplay.videoChat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__Icons_ChatAction_VideoChat__["a" /* default */], {
        ifEnable: props.chatActionEnable.videoChat,
        chatId: props.chatId,
        onClick: props.onRequestVideoChat
      })))));
    }
  }]);

  return ChatAction;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatAction);

/***/ }),
/* 1400 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ChatHeader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icons_Avatar__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Icons_Country__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icons_OS__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icons_Browser__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Icons_Social__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Promote_Promote__ = __webpack_require__(1403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__BanChat_BanChat__ = __webpack_require__(1398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__LeaveChat_LeaveChat__ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CloseChat_CloseChat__ = __webpack_require__(1401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_enums_socialType__ = __webpack_require__(1281);


























var ChatHeader = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatHeader, _React$Component);

  function ChatHeader() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatHeader);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatHeader.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatHeader)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatHeader, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.chatHeader, __WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css___default.a.clearfix)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.visitorDetails, __WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css___default.a.clearfix)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.avatar
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icons_Avatar__["a" /* default */], {
        isContactOrUserOpen: this.props.isContactOrUserOpen,
        avatarLink: this.props.visitorInfo.avatar,
        identityType: this.props.visitorInfo.identityType
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.details
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.name
      }, void 0, this.props.visitorInfo.latestName), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.others, __WEBPACK_IMPORTED_MODULE_9__CommonResources_common_css___default.a.clearfix)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Icons_Country__["a" /* default */], {
        countryName: this.props.visitorInfo.country,
        city: this.props.visitorInfo.city,
        state: this.props.visitorInfo.state,
        countryCode: this.props.visitorInfo.countryCode
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icons_OS__["a" /* default */], {
        name: this.props.visitorInfo.operatingSystem
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Icons_Browser__["a" /* default */], {
        name: this.props.visitorInfo.browser
      }), this.props.saleforceURL !== '' && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Icons_Social__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_20__constants_enums_socialType__["a" /* Salesforce */],
        socialUrl: this.props.saleforceURL
      }), this.props.visitorInfo.zendeskUrl !== '' && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Icons_Social__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_20__constants_enums_socialType__["b" /* Zendesk */],
        socialUrl: this.props.visitorInfo.zendeskUrl
      }), this.props.visitorInfo.socialType > 0 && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_15__Icons_Social__["a" /* default */], {
        type: this.props.visitorInfo.socialType,
        socialUrl: this.props.visitorInfo.socialUrl
      })))), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_10__ChatHeader_css___default.a.action
      }, void 0, this.props.chatHeaderToolBarDisplay.displayPromote && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_16__Promote_Promote__["a" /* default */], {
        onPromote: this.props.onPromote,
        visitorId: this.props.visitorInfo.id,
        preChatEmail: this.props.visitorInfo.prechatEmail,
        disabled: this.props.disabledPromote,
        ifUseMainServer: this.props.ifUseMainServer
      }), this.props.chatHeaderToolBarDisplay.displayBan && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_17__BanChat_BanChat__["a" /* default */], {
        onBanChat: this.props.onBanChat,
        realVisitorId: this.props.visitorInfo.realVisitorId,
        visitorId: this.props.visitorInfo.id,
        visitorIP: this.props.visitorInfo.ip,
        disabled: this.props.disabledBan
      }), this.props.chatHeaderToolBarDisplay.displayLeave && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_18__LeaveChat_LeaveChat__["a" /* default */], {
        visitorId: this.props.visitorInfo.id,
        onLeaveChat: this.props.onLeaveChat
      }), this.props.chatHeaderToolBarDisplay.displayCloseChat && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_19__CloseChat_CloseChat__["a" /* default */], {
        chatId: this.props.chatId,
        visitorId: this.props.visitorInfo.id,
        status: this.props.visitorInfo.status,
        onCloseChat: this.props.onCloseChat
      })));
    }
  }]);

  return ChatHeader;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatHeader);

/***/ }),
/* 1401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatHeader_ChatHeader_css__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatHeader_ChatHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ChatHeader_ChatHeader_css__);





var CloseChat = function CloseChat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    text: 'Close Chat Window',
    className: __WEBPACK_IMPORTED_MODULE_3__ChatHeader_ChatHeader_css___default.a.btnAction,
    onClick: function onClick() {
      return props.onCloseChat(props.chatId, props.status, props.visitorId);
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (CloseChat);

/***/ }),
/* 1402 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Modal_ModalLeaveChat_ModalLeaveChat__ = __webpack_require__(1426);












var LeaveChat = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(LeaveChat, _React$Component);

  function LeaveChat() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, LeaveChat);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LeaveChat.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(LeaveChat)).call(this));

    _this.state = {
      open: false
    };
    _this.onLeaveChat = _this.onLeaveChat.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(LeaveChat, [{
    key: 'onLeaveChat',
    value: function onLeaveChat() {
      this.props.onLeaveChat(this.props.visitorId);
      this.closeModal();
    }
  }, {
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
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Button_Button__["a" /* default */], {
        text: 'Leave Chat',
        className: __WEBPACK_IMPORTED_MODULE_8__ChatHeader_ChatHeader_css___default.a.btnAction,
        onClick: this.openModal
      }), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Modal_ModalLeaveChat_ModalLeaveChat__["a" /* default */], {
        openModal: this.openModal,
        closeModal: this.closeModal,
        onLeaveChat: this.onLeaveChat
      }));
    }
  }]);

  return LeaveChat;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LeaveChat);

/***/ }),
/* 1403 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatHeader_ChatHeader_css__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatHeader_ChatHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ChatHeader_ChatHeader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_constants_enums_promote__ = __webpack_require__(1279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Modal_StandbyNotice_StandbyNotice__ = __webpack_require__(926);
















var Promote = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Promote, _React$Component);

  function Promote() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Promote);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Promote.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Promote)).call(this));

    _this.state = {
      isOpen: false,
      isOpenModalStandbyNotice: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.onPromote = _this.onPromote.bind(_this);
    _this.popUpStandbyWindow = _this.popUpStandbyWindow.bind(_this);
    _this.closeStandbyWindow = _this.closeStandbyWindow.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Promote, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'onPromote',
    value: function onPromote(promoteType) {
      this.setState({ isOpen: false });
      if (this.props.ifUseMainServer) {
        this.props.onPromote(this.props.visitorId, promoteType);
      } else {
        this.popUpStandbyWindow();
      }
    }
  }, {
    key: 'popUpStandbyWindow',
    value: function popUpStandbyWindow() {
      this.setState({ isOpenModalStandbyNotice: true });
    }
  }, {
    key: 'closeStandbyWindow',
    value: function closeStandbyWindow() {
      this.setState({ isOpenModalStandbyNotice: false });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var container = this.container;
      if (container && !container.contains(event.target) && this.state.isOpen) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.container = element;
          } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
          text: 'Promote',
          className: __WEBPACK_IMPORTED_MODULE_10__ChatHeader_ChatHeader_css___default.a.btnAction,
          onClick: this.toggle,
          disabled: this.props.disabled
        }),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css___default.a.popupList, this.state.isOpen && __WEBPACK_IMPORTED_MODULE_11__CommonResources_common_css___default.a.open)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__["a" /* default */], {
          onClick: function onClick() {
            return _this2.onPromote(__WEBPACK_IMPORTED_MODULE_12_src_constants_enums_promote__["b" /* PromoteToContact */]);
          }
        }, void 0, 'Promote to Contact')), this.props.preChatEmail !== '' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__["a" /* default */], {
          onClick: function onClick() {
            return _this2.onPromote(__WEBPACK_IMPORTED_MODULE_12_src_constants_enums_promote__["a" /* PromoteToUser */]);
          }
        }, void 0, 'Promote to User')) : ''),
        this.state.isOpenModalStandbyNotice && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Modal_StandbyNotice_StandbyNotice__["a" /* default */], {
          ifOpen: this.state.isOpenModalStandbyNotice,
          closeModal: this.closeStandbyWindow,
          text: 'Live Chat is running on the secondary server. We\'re sorry but you\'re\n          unable to perform this action now. Please try again after Live Chat goes back\n          to the primary server.'
        })
      );
    }
  }]);

  return Promote;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Promote);

/***/ }),
/* 1404 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);












function getAudioVideoChatStatusIconAndTitle(avStatus) {
  switch (avStatus) {
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]:
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */]:
      return {
        type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].audioChatRequesting,
        title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["m" /* audioChatRequesting */]
      };
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["f" /* agentRequestVideoChat */]:
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]:
      return {
        type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].videoChatRequesting,
        title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["o" /* videoChatRequesting */]
      };
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */]:
      return {
        type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].audioChatRequesting,
        title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["n" /* audioChatting */]
      };
    case __WEBPACK_IMPORTED_MODULE_10__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */]:
      return {
        type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].videoChatRequesting,
        title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["p" /* videoChatting */]
      };
    default:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].chatting, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["c" /* chatting */] };
  }
}

function getClassNameByCode(code, avStatus) {
  switch (code) {
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].waitingForChat:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].waitting, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["b" /* waitingForChat */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].chatting:
      return getAudioVideoChatStatusIconAndTitle(avStatus);
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].preChat:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].prechat, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["d" /* preChat */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].invited:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].invited, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["e" /* invited */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].autoInvited:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].invited, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["f" /* autoInvited */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].offlineMessage:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].offline, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["g" /* offlineMessage */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].refusedByAgent:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].refused, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["h" /* refusedByAgent */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].refusedByVisitor:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].refused, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["i" /* refusedByVisitor */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].chatEnded:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].chatEnd, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["j" /* chatEnded */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].inSite:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].insite, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["k" /* inSite */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].outOfSite:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].outOfSite, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["l" /* outOfSite */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].transferring:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].transferring, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["a" /* transferring */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].manuallyInvitedAndWatingVisitor:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].inviteWaiting, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["q" /* manuallyInvitedAndWaitingVisitor */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].invitedAndWaitingForChat:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].waitingInvite, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["s" /* invitedAndWaitingForChat */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].monitorChatEnded:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].monitorEnded, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["t" /* monitorChatEnded */] };
    case __WEBPACK_IMPORTED_MODULE_7__constants_enums__["d" /* chatStatus */].monitorChatting:
      return { type: __WEBPACK_IMPORTED_MODULE_7__constants_enums__["b" /* icons */].monitorChatting, title: __WEBPACK_IMPORTED_MODULE_9__constants_languages_visitorStatus__["u" /* monitorChatting */] };
    default:
      return { type: '', color: '', title: '' };
  }
}

var ChatStatus = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatStatus, _React$Component);

  function ChatStatus() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ChatStatus);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChatStatus.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatStatus)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatStatus, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.statusCode !== this.props.statusCode || nextProps.audioVideoStatus !== this.props.audioVideoStatus;
    }
  }, {
    key: 'render',
    value: function render() {
      var _getClassNameByCode = getClassNameByCode(this.props.statusCode, this.props.audioVideoStatus),
          type = _getClassNameByCode.type,
          title = _getClassNameByCode.title;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Icon_Icon__["a" /* default */], {
        type: type,
        size: this.props.size,
        'data-tip': title,
        'data-for': this.props.dataFor
      });
    }
  }]);

  return ChatStatus;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

ChatStatus.defaultProps = {
  size: 18
};

/* harmony default export */ __webpack_exports__["a"] = (ChatStatus);

/***/ }),
/* 1405 */,
/* 1406 */,
/* 1407 */,
/* 1408 */,
/* 1409 */,
/* 1410 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal_ModalAttachTicket_ModalAttachTicket__ = __webpack_require__(1425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Modal_StandbyNotice_StandbyNotice__ = __webpack_require__(926);
















var dataFor = 'chatContainer';
var dataTip = 'Attach this chat to a ticket.';

var AttachTicket = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AttachTicket, _React$Component);

  function AttachTicket() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AttachTicket);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AttachTicket.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AttachTicket)).call(this));

    _this.state = {
      open: false,
      dataFor: dataFor,
      dataTip: dataTip,
      isOpenModalStandbyNotice: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.closeStandbyWindow = _this.closeStandbyWindow.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AttachTicket, [{
    key: 'closeModal',
    value: function closeModal() {
      /** @todo why is dataFor and dataTip useful here? */
      this.setState({ open: false, dataFor: dataFor, dataTip: dataTip });
    }
  }, {
    key: 'closeStandbyWindow',
    value: function closeStandbyWindow() {
      this.setState({
        isOpenModalStandbyNotice: false,
        dataFor: dataFor,
        dataTip: dataTip
      });
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      if (this.props.ifUseMainServer) {
        this.setState({ open: true, dataFor: '', dataTip: '' });
      } else {
        this.setState({ isOpenModalStandbyNotice: true, dataFor: '', dataTip: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
        type: 'noborder',
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
        onClick: this.props.ifEnable ? this.openModal : undefined,
        'data-tip': this.state.dataTip,
        'data-for': this.state.dataFor
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].attachticket
      })), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Modal_ModalAttachTicket_ModalAttachTicket__["a" /* default */], {
        closeModal: this.closeModal,
        siteId: this.props.siteId,
        visitorId: this.props.visitorId,
        ticketId: this.props.ticketId,
        handleAttachTicket: this.props.handleAttachTicket,
        gotoAttachTicket: this.props.gotoAttachTicket,
        responseErrorMessage: this.props.responseErrorMessage,
        hideResponseErrorMessage: this.props.hideResponseErrorMessage
      }), this.state.isOpenModalStandbyNotice && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Modal_StandbyNotice_StandbyNotice__["a" /* default */], {
        closeModal: this.closeStandbyWindow,
        text: 'Live Chat is running on the secondary server. We\'re sorry but you\'re\n                unable to perform this action now. Please try again after Live Chat\n                goes back to the primary server.'
      }));
    }
  }]);

  return AttachTicket;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AttachTicket);

/***/ }),
/* 1411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums__ = __webpack_require__(3);








var AudioChat = function AudioChat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_Button_Button__["a" /* default */], {
    type: 'noborder',
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !props.ifEnable && __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
    onClick: props.ifEnable ? props.onClick : undefined,
    'data-tip': 'Audio Chat',
    'data-for': 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_6__constants_enums__["b" /* icons */].audioChat
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (AudioChat);

/***/ }),
/* 1412 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);
















var Font = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Font, _React$Component);

  function Font(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Font);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Font.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Font)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.toggle = _this.toggle.bind(_this);
    _this.selectSmall = _this.onSelect.bind(_this, __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["b" /* small */]);
    _this.selectMiddle = _this.onSelect.bind(_this, __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["a" /* middle */]);
    _this.selectLarge = _this.onSelect.bind(_this, __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["c" /* large */]);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Font, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'onSelect',
    value: function onSelect(type) {
      this.setState({ isOpen: false });
      this.props.onFontSelect(type);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var container = this.container;
      if (this.state.isOpen && container && !container.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var selectedFontSize = this.props.selectedFontSize;

      var isSmall = selectedFontSize === __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["b" /* small */];
      var isMiddle = selectedFontSize === __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["a" /* middle */];
      var isLarge = selectedFontSize === __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_fontSize__["c" /* large */];
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.container = element;
          } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_12__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, isOpen && __WEBPACK_IMPORTED_MODULE_12__ChatSection_ChatAction_ChatAction_css___default.a.iconActive),
          onClick: this.toggle,
          'data-tip': 'Adjust font size of chat messages.',
          'data-for': 'chatContainer'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].font
        })),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.cover, isOpen && __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.coverOpen),
          onClick: this.toggle
        }),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fontList, isOpen && __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fontOpen)
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: isSmall && __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fontActive
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__["a" /* default */], {
          onClick: this.selectSmall
        }, void 0, 'Small')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: isMiddle && __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fontActive
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__["a" /* default */], {
          onClick: this.selectMiddle
        }, void 0, 'Middle')), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {
          className: isLarge && __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.fontActive
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Link_Link__["a" /* default */], {
          onClick: this.selectLarge
        }, void 0, 'Large')))
      );
    }
  }]);

  return Font;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Font);

/***/ }),
/* 1413 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Prompt_PromptGotoMeeting_PromptGotoMeeting__ = __webpack_require__(1446);















var GotoMeeting = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(GotoMeeting, _React$Component);

  function GotoMeeting() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, GotoMeeting);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (GotoMeeting.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(GotoMeeting)).call(this));

    _this.state = {
      isOpenGotoMeeting: false
    };
    _this.toggleOpenPrompt = _this.toggleOpenPrompt.bind(_this);
    _this.closeOpenPrompt = _this.closeOpenPrompt.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(GotoMeeting, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var container = this.container;
      if (container && !container.contains(event.target) && this.state.isOpenGotoMeeting) {
        this.setState({ isOpenGotoMeeting: false });
      }
    }
  }, {
    key: 'toggleOpenPrompt',
    value: function toggleOpenPrompt() {
      this.setState({
        isOpenGotoMeeting: !this.state.isOpenGotoMeeting
      });
    }
  }, {
    key: 'closeOpenPrompt',
    value: function closeOpenPrompt() {
      this.setState({
        isOpenGotoMeeting: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.container = element;
          } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled, this.state.isOpen && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.iconActive),
          onClick: this.props.ifEnable ? this.toggleOpenPrompt : function () {},
          'data-tip': 'Start screen sharing session with your visitors through GoToMeeting.',
          'data-for': 'chatContainer'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].gotomeeting
        })),
        this.state.isOpenGotoMeeting && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Prompt_PromptGotoMeeting_PromptGotoMeeting__["a" /* default */], {
          closePrompt: this.closeOpenPrompt,
          visitorId: this.props.visitorId,
          onRequestGotoMeeting: this.props.onRequestGotoMeeting
        })
      );
    }
  }]);

  return GotoMeeting;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (GotoMeeting);

/***/ }),
/* 1414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Link_Link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums__ = __webpack_require__(3);








var Joinme = function Joinme(props) {
  var joinMeIntegrationServer = props.joinMeIntegrationServer,
      siteId = props.siteId,
      visitorId = props.visitorId,
      currentAgentId = props.currentAgentId,
      agentSession = props.agentSession;

  var url = joinMeIntegrationServer + '/auth.aspx?siteId=' + siteId + '&visitorId=' + visitorId + '&operatorId=' + currentAgentId + '&token=' + agentSession;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_Link_Link__["a" /* default */], {
    type: 'noborder',
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !props.ifEnable && __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
    href: props.ifEnable ? url : '',
    newWindow: true,
    'data-tip': 'Start screen sharing session with your visitors through Join.Me.',
    'data-for': 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_6__constants_enums__["b" /* icons */].joinMe
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Joinme);

/***/ }),
/* 1415 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Prompt_PromptSecureForm_PromptSecureForm__ = __webpack_require__(1447);














var SecureForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SecureForm, _React$Component);

  function SecureForm() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SecureForm);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SecureForm.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SecureForm)).call(this));

    _this.state = {
      isOpenSecureForm: false
    };
    _this.toggleOpenPrompt = _this.toggleOpenPrompt.bind(_this);
    _this.closeOpenPrompt = _this.closeOpenPrompt.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SecureForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var container = this.container;
      if (container && !container.contains(event.target) && this.state.isOpenSecureForm) {
        this.setState({ isOpenSecureForm: false });
      }
    }
  }, {
    key: 'toggleOpenPrompt',
    value: function toggleOpenPrompt() {
      this.setState({
        isOpenSecureForm: !this.state.isOpenSecureForm
      });
    }
  }, {
    key: 'closeOpenPrompt',
    value: function closeOpenPrompt() {
      this.setState({
        isOpenSecureForm: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { ref: function ref(element) {
            _this2.container = element;
          } },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled, this.state.isOpenSecureForm && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.iconActive),
          onClick: this.props.ifEnable ? this.toggleOpenPrompt : undefined,
          'data-tip': 'Request a PCI form from your visitor.',
          'data-for': 'chatContainer'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].secureForm
        })),
        this.state.isOpenSecureForm && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Prompt_PromptSecureForm_PromptSecureForm__["a" /* default */], {
          closePrompt: this.closeOpenPrompt,
          visitorId: this.props.visitorId,
          chatId: this.props.chatId,
          pciForm: this.props.pciForm,
          onRequestPCIForm: this.props.onRequestPCIForm
        })
      );
    }
  }]);

  return SecureForm;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SecureForm);

/***/ }),
/* 1416 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal_SendTranscript_SendTranscript__ = __webpack_require__(1433);














var SendEmail = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SendEmail, _React$Component);

  function SendEmail() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SendEmail);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendEmail.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SendEmail)).call(this));

    _this.state = {
      open: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SendEmail, [{
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ open: false });
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      var props = this.props;
      props.initialSendTranscriptForm(props.visitorId, props.chatId, props.transcriptInfo);
      this.setState({ open: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
        type: 'noborder',
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
        onClick: this.props.ifEnable ? this.openModal : undefined,
        'data-tip': 'Send transcript to a specified email account.',
        'data-for': 'chatContainer'
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].sendEmail
      })), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Modal_SendTranscript_SendTranscript__["a" /* default */], {
        closeModal: this.closeModal,
        handleSendTranscript: this.props.handleSendTranscript,
        transcriptInfo: this.props.transcriptInfo,
        responseErrorMessage: this.props.responseErrorMessage,
        sendEmailSuccessMessage: this.props.sendEmailSuccessMessage,
        showResponseErrorMessage: this.props.showResponseErrorMessage,
        hideResponseErrorMessage: this.props.hideResponseErrorMessage,
        hideSendEmailSuccessMessage: this.props.hideSendEmailSuccessMessage
      }));
    }
  }]);

  return SendEmail;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SendEmail);

/***/ }),
/* 1417 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal_ModalTransfer_ModalTransfer__ = __webpack_require__(1427);














var Transfer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Transfer, _React$Component);

  function Transfer(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Transfer);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Transfer.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Transfer)).call(this, props));

    _this.state = {
      open: false
    };
    _this.openModal = _this.toggleModal.bind(_this, true);
    _this.closeModal = _this.toggleModal.bind(_this, false);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Transfer, [{
    key: 'toggleModal',
    value: function toggleModal(ifOpen) {
      this.setState({ open: ifOpen });
      if (ifOpen && this.props.onTransferIconClick) {
        this.props.onTransferIconClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
        type: 'noborder',
        onClick: this.props.ifEnable ? this.openModal : undefined,
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_9__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
        'data-tip': 'Transfer the chat to another agent or department.',
        'data-for': 'chatContainer'
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].transfer
      })), this.state.open && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Modal_ModalTransfer_ModalTransfer__["a" /* default */], {
        closeModal: this.closeModal,
        visitorId: this.props.visitorId,
        ifDepartmentEnabled: this.props.transfer.ifDepartmentEnabled,
        onlineDepartments: this.props.transfer.onlineDepartments,
        onlineDepartmentOptions: this.props.transfer.onlineDepartmentComponent,
        allAvailableAgents: this.props.transfer.allAvailableAgents,
        onTransferChat: this.props.onTransferChat
      }));
    }
  }]);

  return Transfer;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Transfer);

/***/ }),
/* 1418 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Prompt_AutoTranslate_AutoTranslate__ = __webpack_require__(1445);















var Translate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Translate, _React$Component);

  function Translate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Translate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Translate.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Translate)).call(this, props));

    _this.state = {
      isOpen: props.autoTranslateInfo.ifOpenAutoTranslation
    };
    _this.togglePrompt = _this.togglePrompt.bind(_this);
    _this.closePrompt = _this.closePrompt.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Translate, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isOpen: nextProps.autoTranslateInfo.ifOpenAutoTranslation
      });
    }
  }, {
    key: 'togglePrompt',
    value: function togglePrompt() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'closePrompt',
    value: function closePrompt() {
      this.setState({
        isOpen: false
      });
      if (!this.props.autoTranslateInfo.ifAutoPopTranslation) {
        this.props.onUpdateIfPopTranslation(this.props.chatId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          ref: function ref(element) {
            _this2.container = element;
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !this.props.ifEnable && __WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled, this.state.isOpen && __WEBPACK_IMPORTED_MODULE_10__ChatSection_ChatAction_ChatAction_css___default.a.iconActive),
          onClick: this.props.ifEnable ? this.togglePrompt : undefined,
          'data-tip': 'Automatically translate chat messages to a target language in real time.',
          'data-for': 'chatContainer'
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].translate
        })),
        this.state.isOpen && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Prompt_AutoTranslate_AutoTranslate__["a" /* default */], {
          closePrompt: this.closePrompt,
          visitorId: this.props.visitorId,
          detectedVisitorLanguage: this.props.autoTranslateInfo.detectedVisitorLanguage,
          onToggleAutoTranslate: this.props.onToggleAutoTranslate
        })
      );
    }
  }]);

  return Translate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Translate);

/***/ }),
/* 1419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums__ = __webpack_require__(3);








var VideoChat = function VideoChat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_Button_Button__["a" /* default */], {
    type: 'noborder',
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIcon, !props.ifEnable && __WEBPACK_IMPORTED_MODULE_4__ChatSection_ChatAction_ChatAction_css___default.a.chatActionIconDisabled),
    onClick: props.ifEnable ? props.onClick : undefined,
    'data-tip': 'Video Chat',
    'data-for': 'chatContainer'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_6__constants_enums__["b" /* icons */].videoChat
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoChat);

/***/ }),
/* 1420 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums_socialType__ = __webpack_require__(1281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Icon__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Link_Link__ = __webpack_require__(146);














var Social = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Social, _React$Component);

  function Social() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Social);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Social.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Social)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Social, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // force tooltip re-render to be after children mount
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(function () {
        return __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a.rebuild();
      }, 0);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.type !== this.props.type && nextProps.socialUrl !== this.props.socialUrl;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(function () {
        return __WEBPACK_IMPORTED_MODULE_8_react_tooltip___default.a.rebuild();
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
    key: 'render',
    value: function render() {
      var tooltip = '';
      var classname = '';
      switch (this.props.type) {
        case __WEBPACK_IMPORTED_MODULE_9__constants_enums_socialType__["c" /* Facebook */]:
          {
            classname = 'facebook';
            tooltip = 'Facebook';
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_9__constants_enums_socialType__["d" /* googlePlus */]:
          {
            classname = 'googlePlus';
            tooltip = 'GooglePlus';
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_9__constants_enums_socialType__["b" /* Zendesk */]:
          {
            classname = 'zendesk';
            tooltip = 'Zendesk';
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_9__constants_enums_socialType__["a" /* Salesforce */]:
          {
            classname = 'salesforce';
            tooltip = 'Salesforce';
            break;
          }
        default:
          break;
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        'data-tip': tooltip,
        'data-for': 'chatContainer'
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Link_Link__["a" /* default */], {
        newWindow: true,
        href: this.props.socialUrl
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Icon__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a['social-' + classname], __WEBPACK_IMPORTED_MODULE_11__Icon_css___default.a.iconOffsetDown)
      })));
    }
  }]);

  return Social;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Social);

/***/ }),
/* 1421 */,
/* 1422 */,
/* 1423 */,
/* 1424 */,
/* 1425 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input_Input_css__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input_Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Input_Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Input_Input__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_components_Link_Link__ = __webpack_require__(146);







// import classnames from 'classnames';

// import ReactModal from 'react-modal';








var ModalAttachTicket = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ModalAttachTicket, _React$Component);

  function ModalAttachTicket(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModalAttachTicket);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ModalAttachTicket.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ModalAttachTicket)).call(this, props));

    _this.state = {
      attachType: '0',
      ifAttachNewTicket: true,
      ifAttachTicketButtonEnabled: true,
      ticketId: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.changeTicketId = _this.changeTicketId.bind(_this);
    _this.handleAttachTicket = _this.handleAttachTicket.bind(_this);
    _this.hideResponseErrorMessage = _this.hideResponseErrorMessage.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ModalAttachTicket, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.responseErrorMessage) {
        if (this.timeoutId !== undefined) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(this.hideResponseErrorMessage, 4000);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      switch (event.target.value) {
        case '0':
          {
            this.setState({
              attachType: '0',
              ifAttachNewTicket: true,
              ifAttachTicketButtonEnabled: true
            });
            break;
          }
        case '1':
          {
            this.setState({
              attachType: '1',
              ifAttachNewTicket: false,
              ifAttachTicketButtonEnabled: false
            });
            break;
          }
        default:
          break;
      }
    }
  }, {
    key: 'changeTicketId',
    value: function changeTicketId(event) {
      this.setState({
        ifAttachTicketButtonEnabled: event.target.value,
        ticketId: event.target.value
      });
    }
  }, {
    key: 'handleAttachTicket',
    value: function handleAttachTicket(attachTicketId) {
      this.props.handleAttachTicket(this.props.visitorId, attachTicketId);
      this.setState({
        ifAttachTicketButtonEnabled: false
      });
    }
  }, {
    key: 'hideResponseErrorMessage',
    value: function hideResponseErrorMessage() {
      this.props.hideResponseErrorMessage();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var inputElement = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Input_Input__["a" /* default */], {
        meta: {},
        input: { onChange: this.changeTicketId, value: this.state.ticketId },
        className: __WEBPACK_IMPORTED_MODULE_11__Input_Input_css___default.a.attachTicket,
        isDisabled: this.state.ifAttachNewTicket
      });
      var attachTicketId = '';
      if (this.state.ifAttachNewTicket) {
        attachTicketId = 0;
      } else {
        attachTicketId = this.state.ticketId;
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        title: 'Attach to Ticket',
        actions: !this.props.ticketId ? {
          okProps: { text: 'OK', disabled: !this.state.ifAttachTicketButtonEnabled, eventClick: function eventClick() {
              _this2.handleAttachTicket(attachTicketId);
            } },
          cancelProps: { text: 'Cancel' }
        } : {
          cancelProps: { text: 'Close' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.modalAttachtTicket
      }, void 0, !this.props.ticketId ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__["a" /* default */], {
        name: 'attachTicket',
        radioOption: [{
          text: 'A new ticket.',
          value: '0',
          checked: this.state.attachType === '0'
        }, {
          text: 'An existing ticket Id: S' + this.props.siteId + '-T',
          value: '1',
          checked: this.state.attachType === '1',
          component: inputElement
        }],
        handleChange: this.handleChange
      })) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, 'You have attached a ticket with id: ', this.props.ticketId), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13_src_components_Link_Link__["a" /* default */], {
        href: '#',
        onClick: this.props.gotoAttachTicket
      }, void 0, '>> Go to the ticket')), this.props.responseErrorMessage ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.errorContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.message
      }, void 0, this.props.responseErrorMessage)) : ''));
    }
  }]);

  return ModalAttachTicket;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalAttachTicket);

/***/ }),
/* 1426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(86);


// import ReactModal from 'react-modal';

// import ModalStyle from '../Modal.css';
// import Button from '../../Button/Button';

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {}, void 0, 'Are you sure you want to leave this chat?');

var ModalLeaveChat = function ModalLeaveChat(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
    closeModal: props.closeModal,
    title: 'Comm100 Live Chat',
    actions: {
      okProps: { text: 'Yes', eventClick: props.onLeaveChat },
      cancelProps: { text: 'No' }
    }
  }, void 0, _ref);
};

/* harmony default export */ __webpack_exports__["a"] = (ModalLeaveChat);

/***/ }),
/* 1427 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SelectDepartment__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SelectAgentByDepartmentId__ = __webpack_require__(1428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__ = __webpack_require__(316);







// import classnames from 'classnames';

// import ReactModal from 'react-modal';









var ModalTransfer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ModalTransfer, _React$Component);

  function ModalTransfer(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModalTransfer);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ModalTransfer.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ModalTransfer)).call(this, props));

    _this.state = {
      transferTo: props.ifDepartmentEnabled ? '0' : '1',
      departmentId: 0,
      selectedDepartmentIndex: -1,
      agentId: 0,
      selectedAgentIndex: -1,
      enableCloseChat: false
    };
    _this.handleChangeTransferTo = _this.handleChangeTransferTo.bind(_this);
    _this.handleSelectDepartment = _this.handleSelectDepartment.bind(_this);
    _this.handleSelectAgent = _this.handleSelectAgent.bind(_this);
    _this.switchCloseChatFlag = _this.switchCloseChatFlag.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ModalTransfer, [{
    key: 'handleChangeTransferTo',
    value: function handleChangeTransferTo(event) {
      this.setState({
        transferTo: event.target.value
      });
    }
  }, {
    key: 'handleSelectDepartment',
    value: function handleSelectDepartment(departmentId, index) {
      this.setState({
        departmentId: departmentId,
        selectedDepartmentIndex: index
      });
    }
  }, {
    key: 'handleSelectAgent',
    value: function handleSelectAgent(agentId, index) {
      this.setState({
        agentId: agentId,
        selectedAgentIndex: index
      });
    }
  }, {
    key: 'switchCloseChatFlag',
    value: function switchCloseChatFlag(tag) {
      this.setState({ enableCloseChat: tag });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          closeModal = _props.closeModal,
          ifDepartmentEnabled = _props.ifDepartmentEnabled,
          onlineDepartments = _props.onlineDepartments,
          onlineDepartmentOptions = _props.onlineDepartmentOptions,
          allAvailableAgents = _props.allAvailableAgents;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        closeModal: closeModal,
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.modalTransfer,
        title: ifDepartmentEnabled ? 'Transfer the Chat to' : 'Choose an Agent to Transfer',
        actions: {
          okProps: {
            text: 'Transfer',
            eventClick: function eventClick() {
              _this2.props.closeModal();
              _this2.props.onTransferChat(_this2.state.transferTo, _this2.props.visitorId, _this2.state.departmentId, _this2.state.agentId, _this2.state.enableCloseChat);
            }
          },
          cancelProps: { text: 'Cancel' }
        }
      }, void 0, ifDepartmentEnabled ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__RadioButton_RadioButton__["a" /* default */], {
        name: 'transfer',
        radioOption: [{
          text: 'Department',
          value: '0',
          checked: this.state.transferTo === '0'
        }, {
          text: 'Agent',
          value: '1',
          checked: this.state.transferTo === '1'
        }],
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.transferChoose,
        handleChange: this.handleChangeTransferTo
      }) : '', this.state.transferTo === '0' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__SelectDepartment__["a" /* default */], {
        onlineDepartments: onlineDepartments,
        handleSelectDepartment: this.handleSelectDepartment,
        selectedDepartmentIndex: this.state.selectedDepartmentIndex
      }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__SelectAgentByDepartmentId__["a" /* default */], {
        ifDepartmentEnabled: ifDepartmentEnabled,
        allAvailableAgents: allAvailableAgents,
        onlineDepartments: onlineDepartments,
        onlineDepartmentOptions: onlineDepartmentOptions,
        handleSelectAgent: this.handleSelectAgent,
        selectedAgentIndex: this.state.selectedAgentIndex
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Checkbox_Checkbox__["a" /* default */], {
        input: { value: this.state.enableCloseChat, onChange: this.switchCloseChatFlag },
        text: 'Leave chat after transfer',
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.leavechataftertransfer
      }));
    }
  }]);

  return ModalTransfer;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalTransfer);

/***/ }),
/* 1428 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__ = __webpack_require__(47);













// import Link from 'src/components/Link/Link';


var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, 'There are no other agents available. You cannot transfer the ongoing chat to another agent.');

var SelectAgentByDepartmentId = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SelectAgentByDepartmentId, _React$Component);

  function SelectAgentByDepartmentId(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SelectAgentByDepartmentId);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SelectAgentByDepartmentId.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SelectAgentByDepartmentId)).call(this, props));

    _this.state = {
      selectedDepartmentValue: -1,
      allAvailableAgentsByDepartmentId: props.allAvailableAgents
    };
    _this.handleChangeDepartment = _this.handleChangeDepartment.bind(_this);
    _this.getAvailableAgentsByDepartmentId = _this.getAvailableAgentsByDepartmentId.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SelectAgentByDepartmentId, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(nextProps.allAvailableAgents, this.props.allAvailableAgents)) {
        this.setState({
          // selectedDepartmentValue: -1,
          allAvailableAgentsByDepartmentId: this.getAvailableAgentsByDepartmentId(this.state.selectedDepartmentValue, nextProps.allAvailableAgents)
        });
      }
    }
  }, {
    key: 'getAvailableAgentsByDepartmentId',
    value: function getAvailableAgentsByDepartmentId(departmentId, allAvailableAgents) {
      var self = this.props;
      var allAvailableAgentsByDepartmentId = [];
      if (departmentId !== -1) {
        var onlineDepartmentById = self.onlineDepartments.filter(function (onlineDepartment) {
          return onlineDepartment.id === departmentId;
        });
        if (onlineDepartmentById.length > 0) {
          onlineDepartmentById[0].agentIds.forEach(function (agentId) {
            var filterAvailableAgent = allAvailableAgents.filter(function (allAvailableAgent) {
              return allAvailableAgent.id === agentId && (allAvailableAgent.status === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["a" /* agentStatus */].online || allAvailableAgent.status === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["a" /* agentStatus */].away || allAvailableAgent.status >= 100);
            });
            if (filterAvailableAgent.length > 0) {
              allAvailableAgentsByDepartmentId.push(filterAvailableAgent[0]);
            }
          });
        }
      } else {
        allAvailableAgentsByDepartmentId = allAvailableAgents;
      }
      return allAvailableAgentsByDepartmentId;
    }
  }, {
    key: 'handleChangeDepartment',
    value: function handleChangeDepartment(value) {
      this.setState({
        selectedDepartmentValue: value,
        allAvailableAgentsByDepartmentId: this.getAvailableAgentsByDepartmentId(value, this.props.allAvailableAgents)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.props.allAvailableAgents.length ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.agentContainer
      }, void 0, this.props.ifDepartmentEnabled && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.selectDepartment
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Select_Select__["a" /* default */], {
        input: {
          value: this.state.selectedDepartmentValue,
          onChange: this.handleChangeDepartment
        },
        options: this.props.onlineDepartmentOptions,
        width: 350,
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.dropdown
      })), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
        className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.availableList
      }, void 0, this.state.allAvailableAgentsByDepartmentId.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, index, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: _this2.props.selectedAgentIndex === index ? __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.active : '',
          onClick: function onClick() {
            return _this2.props.handleSelectAgent(item.id, index);
          }
        }, void 0, item.status === __WEBPACK_IMPORTED_MODULE_11__constants_enums__["a" /* agentStatus */].online ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].statusOnline,
          size: 16,
          color: '#329fd9'
        }) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_11__constants_enums__["b" /* icons */].statusAway,
          size: 16,
          color: '#fe8e14'
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_8__Modal_css___default.a.transferName
        }, void 0, item.name)));
      }))) : _ref;
    }
  }]);

  return SelectAgentByDepartmentId;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SelectAgentByDepartmentId);

/***/ }),
/* 1429 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Button_Button__ = __webpack_require__(47);












var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, 'No department is available at the moment.');

var SelectDepartment = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(SelectDepartment, _React$Component);

  function SelectDepartment() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SelectDepartment);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SelectDepartment.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(SelectDepartment)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(SelectDepartment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.props.onlineDepartments.length ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7__Modal_css___default.a.agentContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('ul', {
        className: __WEBPACK_IMPORTED_MODULE_7__Modal_css___default.a.availableList
      }, void 0, this.props.onlineDepartments.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('li', {}, index, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_Button_Button__["a" /* default */], {
          type: 'noborder',
          className: _this2.props.selectedDepartmentIndex === index ? __WEBPACK_IMPORTED_MODULE_7__Modal_css___default.a.active : '',
          onClick: function onClick() {
            return _this2.props.handleSelectDepartment(item.id, index);
          }
        }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_8__Icon_Icon__["a" /* default */], {
          type: __WEBPACK_IMPORTED_MODULE_9__constants_enums__["b" /* icons */].statusOnline,
          size: 16,
          color: '#329fd9'
        }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
          className: __WEBPACK_IMPORTED_MODULE_7__Modal_css___default.a.transferName
        }, void 0, item.name)));
      }))) : _ref;
    }
  }]);

  return SelectDepartment;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SelectDepartment);

/***/ }),
/* 1430 */,
/* 1431 */,
/* 1432 */,
/* 1433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_replace__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_Icons_LoadingComponent__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Modal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Input_Input__ = __webpack_require__(684);










// import { reduxForm, Field } from 'redux-form';






// import CommonStyle from '../../CommonResources/common.css';

// import Button from '../../Button/Button';
// import RadioButton from '../../RadioButton/RadioButton';

var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'To:');

var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Subject:');

var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Body:');

var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Attachment:');

var SendTranscript = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SendTranscript, _React$Component);

  function SendTranscript(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SendTranscript);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SendTranscript.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SendTranscript)).call(this, props));

    _this.state = {
      to: props.transcriptInfo.to,
      subject: props.transcriptInfo.subject,
      body: props.transcriptInfo.body.content,
      isSending: false
    };
    _this.hideResponseErrorMessage = _this.hideResponseErrorMessage.bind(_this);
    _this.hideSendEmailSuccessMessage = _this.hideSendEmailSuccessMessage.bind(_this);
    _this.onToChange = _this.onToChange.bind(_this);
    _this.onSubjectChange = _this.onSubjectChange.bind(_this);
    _this.onBodyChange = _this.onBodyChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(SendTranscript, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.responseErrorMessage) {
        this.setState({
          isSending: false
        });
        if (this.timeoutId !== undefined) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(this.hideResponseErrorMessage, 5000);
      }
      if (nextProps.sendEmailSuccessMessage) {
        if (this.successTimeoutId !== undefined) {
          clearTimeout(this.successTimeoutId);
        }
        this.successTimeoutId = setTimeout(function () {
          _this2.hideSendEmailSuccessMessage();
          _this2.setState({
            isSending: false
          });
        }, 5000);
      }
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isEqual___default()(this.props.transcriptInfo.body.content, nextProps.transcriptInfo.body.content)) {
        this.setState({
          body: nextProps.transcriptInfo.body.content
        });
      }
    }
  }, {
    key: 'onToChange',
    value: function onToChange(e) {
      this.setState({
        to: e.target.value
      });
    }
  }, {
    key: 'onSubjectChange',
    value: function onSubjectChange(e) {
      this.setState({
        subject: e.target.value
      });
    }
  }, {
    key: 'onBodyChange',
    value: function onBodyChange(body) {
      this.setState({
        body: body
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      if (!this.state.to) {
        this.props.showResponseErrorMessage('Email to is required');
        return;
      } else if (this.state.to.indexOf('@') < 0) {
        this.props.showResponseErrorMessage('Email to is invalid');
        return;
      }
      this.setState({
        isSending: true
      });
      var bodyReplaceStartP = __WEBPACK_IMPORTED_MODULE_7_lodash_replace___default()(this.state.body, new RegExp('<p>', 'g'), '<tr><td>');
      var bodyReplaceEndP = __WEBPACK_IMPORTED_MODULE_7_lodash_replace___default()(bodyReplaceStartP, new RegExp('</p>', 'g'), '</td></tr>');
      var bodyAddColor = __WEBPACK_IMPORTED_MODULE_7_lodash_replace___default()(bodyReplaceEndP, new RegExp('<td><strong>', 'g'), '<td style="color:#329fd9"><strong>');
      var form = {
        to: this.state.to,
        subject: this.state.subject,
        body: '<table cellspacing="0" cellpadding="0"><tr><td>' + bodyAddColor + '</td></tr></table>',
        attachment: this.props.transcriptInfo.body.attachments
      };
      this.props.handleSendTranscript(this.props.transcriptInfo.chatId, form);
    }
  }, {
    key: 'hideResponseErrorMessage',
    value: function hideResponseErrorMessage() {
      this.props.hideResponseErrorMessage();
    }
  }, {
    key: 'hideSendEmailSuccessMessage',
    value: function hideSendEmailSuccessMessage() {
      this.props.hideSendEmailSuccessMessage();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_12__Modal__["a" /* default */], {
        closeModal: this.props.closeModal,
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.modalSendTranscript,
        title: 'Send Transcript',
        actions: {
          okProps: { text: 'OK', disabled: this.state.isSending, eventClick: this.onSubmit },
          cancelProps: { text: 'Cancel' }
        }
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.formTranscriptLine
      }, void 0, _ref, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Input_Input__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.input,
        type: 'text',
        meta: {},
        input: {
          value: this.state.to,
          onChange: this.onToChange
        }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.formTranscriptLine
      }, void 0, _ref2, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_14__Input_Input__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.input,
        type: 'text',
        meta: {},
        input: {
          value: this.state.subject,
          onChange: this.onSubjectChange
        }
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.formTranscriptLine
      }, void 0, _ref3, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
        modules: { SendTranscriptBody: function SendTranscriptBody() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              __webpack_require__.e/* require.ensure */(5).then((function (require) {
                resolve(__webpack_require__(1275));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).catch(reject);
            }));
          } },
        loading: __WEBPACK_IMPORTED_MODULE_11_src_components_Icons_LoadingComponent__["a" /* default */]
      }, void 0, function (_ref4) {
        var SendTranscriptBody = _ref4.SendTranscriptBody;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(SendTranscriptBody, {
          transcriptBodyAdditionInfo: _this3.props.transcriptInfo,
          input: {
            value: _this3.state.body,
            onChange: function onChange(body) {
              _this3.onBodyChange(body);
            }
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.formTranscriptLine
      }, void 0, _ref5, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.attachmentsContainer
      }, void 0, this.props.transcriptInfo.body.attachments)), this.props.responseErrorMessage ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.errorContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.message
      }, void 0, this.props.responseErrorMessage)) : '', this.props.sendEmailSuccessMessage ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.successContainer
      }, void 0, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()('span', {
        className: __WEBPACK_IMPORTED_MODULE_13__Modal_css___default.a.message
      }, void 0, this.props.sendEmailSuccessMessage)) : '');
    }
  }]);

  return SendTranscript;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SendTranscript);

/***/ }),
/* 1434 */,
/* 1435 */,
/* 1436 */,
/* 1437 */,
/* 1438 */,
/* 1439 */,
/* 1440 */,
/* 1441 */,
/* 1442 */,
/* 1443 */,
/* 1444 */,
/* 1445 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Prompt_css__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Prompt_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AutoTranslate_css__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AutoTranslate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__AutoTranslate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Select_Select__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums_chatAction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_enums__ = __webpack_require__(3);

















var languages = [{ text: 'Afrikaans', value: '1' }, { text: 'Albanian', value: '2' }, { text: 'Arabic', value: '3' }, { text: 'Armenian', value: '4' }, { text: 'Azerbaijani', value: '5' }, { text: 'Basque', value: '6' }, { text: 'Belarusian', value: '7' }, { text: 'Bengali', value: '8' }, { text: 'Bosnian', value: '9' }, { text: 'Bulgarian', value: '10' }, { text: 'Catalan', value: '11' }, { text: 'Cebuano', value: '12' }, { text: 'Chichewa', value: '13' }, { text: 'Chinese Simplified', value: '14' }, { text: 'Chinese Traditional', value: '15' }, { text: 'Croatian', value: '16' }, { text: 'Czech', value: '17' }, { text: 'Danish', value: '18' }, { text: 'Dutch', value: '19' }, { text: 'English', value: '20' }, { text: 'Esperanto', value: '21' }, { text: 'Estonian', value: '22' }, { text: 'Filipino', value: '23' }, { text: 'Finnish', value: '24' }, { text: 'French', value: '25' }, { text: 'Galician', value: '26' }, { text: 'Georgian', value: '27' }, { text: 'German', value: '28' }, { text: 'Greek', value: '29' }, { text: 'Gujarati', value: '30' }, { text: 'Haitian Creole', value: '31' }, { text: 'Hausa', value: '32' }, { text: 'Hebrew', value: '33' }, { text: 'Hindi', value: '34' }, { text: 'Hmong', value: '35' }, { text: 'Hungarian', value: '36' }, { text: 'Icelandic', value: '37' }, { text: 'Igbo', value: '38' }, { text: 'Indonesian', value: '39' }, { text: 'Irish', value: '40' }, { text: 'Italian', value: '41' }, { text: 'Japanese', value: '42' }, { text: 'Javanese', value: '43' }, { text: 'Kannada', value: '44' }, { text: 'Kazakh', value: '45' }, { text: 'Khmer', value: '46' }, { text: 'Korean', value: '47' }, { text: 'Lao', value: '48' }, { text: 'Latin', value: '49' }, { text: 'Latvian', value: '50' }, { text: 'Lithuanian', value: '51' }, { text: 'Macedonian', value: '52' }, { text: 'Malagasy', value: '53' }, { text: 'Malay', value: '54' }, { text: 'Malayalam', value: '55' }, { text: 'Maltese', value: '56' }, { text: 'Maori', value: '57' }, { text: 'Marathi', value: '58' }, { text: 'Mongolian', value: '59' }, { text: 'Myanmar Burmese', value: '60' }, { text: 'Nepali', value: '61' }, { text: 'Norwegian', value: '62' }, { text: 'Persian', value: '63' }, { text: 'Polish', value: '64' }, { text: 'Portuguese', value: '65' }, { text: 'Punjabi', value: '66' }, { text: 'Romanian', value: '67' }, { text: 'Russian', value: '68' }, { text: 'Serbian', value: '69' }, { text: 'Sesotho', value: '70' }, { text: 'Sinhala', value: '71' }, { text: 'Slovak', value: '72' }, { text: 'Slovenian', value: '73' }, { text: 'Somali', value: '74' }, { text: 'Spanish', value: '75' }, { text: 'Sundanese', value: '76' }, { text: 'Swahili', value: '77' }, { text: 'Swedish', value: '78' }, { text: 'Tajik', value: '79' }, { text: 'Tamil', value: '80' }, { text: 'Telugu', value: '81' }, { text: 'Thai', value: '82' }, { text: 'Turkish', value: '83' }, { text: 'Ukrainian', value: '84' }, { text: 'Urdu', value: '85' }, { text: 'Uzbek', value: '86' }, { text: 'Vietnamese', value: '87' }, { text: 'Welsh', value: '88' }, { text: 'Yiddish', value: '89' }, { text: 'Yoruba', value: '90' }, { text: 'Zulu', value: '91' }];

var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h3', {}, void 0, 'Auto Translation');

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('span', {}, void 0, 'Detected visitor language: ');

var AutoTranslate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AutoTranslate, _React$Component);

  function AutoTranslate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AutoTranslate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AutoTranslate.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AutoTranslate)).call(this, props));

    _this.state = {
      selectedLanguageValue: props.detectedVisitorLanguage === '0' ? '20' : props.detectedVisitorLanguage
    };
    _this.handleChangeLanguage = _this.handleChangeLanguage.bind(_this);
    _this.handleTurnOnAutoTranslate = _this.handleTurnOnAutoTranslate.bind(_this);
    _this.handleTurnOffAutoTranslate = _this.handleTurnOffAutoTranslate.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AutoTranslate, [{
    key: 'handleChangeLanguage',
    value: function handleChangeLanguage(value) {
      this.setState({
        selectedLanguageValue: value
      });
    }
  }, {
    key: 'handleTurnOnAutoTranslate',
    value: function handleTurnOnAutoTranslate() {
      this.props.closePrompt();
      this.props.onToggleAutoTranslate(__WEBPACK_IMPORTED_MODULE_12__constants_enums_chatAction__["_74" /* turnOnAutoTranslate */], this.props.visitorId, this.state.selectedLanguageValue);
    }
  }, {
    key: 'handleTurnOffAutoTranslate',
    value: function handleTurnOffAutoTranslate() {
      this.props.closePrompt();
      this.props.onToggleAutoTranslate(__WEBPACK_IMPORTED_MODULE_12__constants_enums_chatAction__["_75" /* turnOffAutoTranslate */], this.props.visitorId, this.state.selectedLanguageValue);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.promptWindow, __WEBPACK_IMPORTED_MODULE_9__AutoTranslate_css___default.a.autoTranslate)
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('button', {
        className: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.close,
        onClick: this.props.closePrompt
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_13__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_14__constants_enums__["b" /* icons */].close,
        size: 10
      })), _ref, _ref2, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__components_Select_Select__["a" /* default */], {
        options: languages,
        width: 170,
        input: {
          value: this.state.selectedLanguageValue,
          onChange: this.handleChangeLanguage
        },
        dropdownClassName: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.dropdown,
        customizeStyle: { top: 10, marginLeft: 5 }
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.action
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Button_Button__["a" /* default */], {
        type: 'primary',
        text: 'Turn On',
        onClick: this.handleTurnOnAutoTranslate
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__Button_Button__["a" /* default */], {
        type: 'default',
        text: 'Turn Off',
        onClick: this.handleTurnOffAutoTranslate
      })));
    }
  }]);

  return AutoTranslate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AutoTranslate);

/***/ }),
/* 1446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Prompt_css__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Prompt_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Prompt_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);








var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, 'Would you like to request a screen sharing session with the visitor?');

var PromptGotoMeeting = function PromptGotoMeeting(props) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Prompt_css___default.a.promptWindow
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('button', {
    className: __WEBPACK_IMPORTED_MODULE_2__Prompt_css___default.a.close,
    onClick: props.closePrompt
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_4__Icon_Icon__["a" /* default */], {
    type: __WEBPACK_IMPORTED_MODULE_5__constants_enums__["b" /* icons */].close,
    size: 10
  })), _ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Prompt_css___default.a.action
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Button_Button__["a" /* default */], {
    type: 'primary',
    text: 'Yes',
    onClick: function onClick() {
      props.onRequestGotoMeeting(props.visitorId);
      props.closePrompt();
    }
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3__Button_Button__["a" /* default */], {
    type: 'default',
    text: 'No',
    onClick: props.closePrompt
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (PromptGotoMeeting);

/***/ }),
/* 1447 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Prompt_css__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Prompt_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Button_Button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RadioButton_RadioButton__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_enums__ = __webpack_require__(3);








// import classnames from 'classnames';








var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('h3', {}, void 0, 'Request PCI Form');

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('p', {}, void 0, 'You have no PCI Forms.');

var PromptSecureForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PromptSecureForm, _React$Component);

  function PromptSecureForm(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PromptSecureForm);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PromptSecureForm.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PromptSecureForm)).call(this, props));

    _this.state = {
      pciFormId: props.pciForm.pciFormList.length ? props.pciForm.pciFormList[0].id.toString() : '0'
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PromptSecureForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        pciFormId: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var pciFormList = [];
      if (this.props.pciForm.pciFormList.length) {
        this.props.pciForm.pciFormList.forEach(function (item) {
          pciFormList.push({
            value: item.id.toString(),
            text: item.name
          });
        });
      }

      var selectedPCIForm = __WEBPACK_IMPORTED_MODULE_6_lodash_find___default()(this.props.pciForm.pciFormList, function (pciForm) {
        return pciForm.id === parseInt(_this2.state.pciFormId, 10);
      });
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.promptWindow
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('button', {
        className: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.close,
        onClick: this.props.closePrompt
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_11__Icon_Icon__["a" /* default */], {
        type: __WEBPACK_IMPORTED_MODULE_12__constants_enums__["b" /* icons */].close,
        size: 10
      })), _ref, pciFormList.length ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_10__RadioButton_RadioButton__["a" /* default */], {
        name: 'pciforms',
        radioOption: pciFormList,
        selectedVal: this.state.pciFormId.toString(),
        handleChange: this.handleChange
      }) : _ref2, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()('div', {
        className: __WEBPACK_IMPORTED_MODULE_8__Prompt_css___default.a.action
      }, void 0, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
        type: 'primary',
        text: 'OK',
        onClick: selectedPCIForm ? function () {
          _this2.props.onRequestPCIForm(_this2.props.pciForm.secureFormServer, selectedPCIForm, _this2.props.pciForm.secureFormConfig, _this2.props.visitorId, _this2.props.chatId, selectedPCIForm.name);
          _this2.props.closePrompt();
        } : this.props.closePrompt
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_9__Button_Button__["a" /* default */], {
        type: 'default',
        text: 'Cancel',
        onClick: this.props.closePrompt
      })));
    }
  }]);

  return PromptSecureForm;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PromptSecureForm);

/***/ }),
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
/* 1481 */,
/* 1482 */,
/* 1483 */,
/* 1484 */,
/* 1485 */,
/* 1486 */,
/* 1487 */,
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
/* 1500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Operator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Contact; });
/* unused harmony export Visitor */
var Operator = 1;
var User = 2;
var Contact = 3;
var Visitor = 4;

/***/ }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isUndefined__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lru_memoize__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lru_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lru_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_enums_liveChatPermission__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_memoryStore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_memoryStore__ = __webpack_require__(35);
/* unused harmony export getSegmentations */
/* unused harmony export mapToComponentProps */
/* harmony export (immutable) */ __webpack_exports__["a"] = createChatListState;











function getOpenedStatusById() {
  var openedStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = arguments[1];

  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isUndefined___default()(openedStatus[id])) return true;
  return openedStatus[id];
}
/* refresh status */
function getStatus(visitor, agentId) {
  var status = visitor.get('status');
  if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].waitingForChat) {
    return visitor.get('autoInvitationId') > 0 ? __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].invitedAndWaitingForChat : __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].waitingForChat;
  } else if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring;
  } else if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatting) {
    return __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["g" /* isAgentInMonitorList */](visitor, agentId) ? __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].monitorChatting : __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatting;
  } else if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatEnded) {
    return __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["g" /* isAgentInMonitorList */](visitor, agentId) ? __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].monitorChatEnded : __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatEnded;
  } else if (__WEBPACK_IMPORTED_MODULE_2_src_utils_common__["d" /* checkIfWaitingVisitorAcceptInvitationFromMe */](visitor, agentId)) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].manuallyInvitedAndWatingVisitor;
  } else if (__WEBPACK_IMPORTED_MODULE_2_src_utils_common__["w" /* checkIfVisitorRefuseMyInvitation */](visitor, agentId)) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].refusedByVisitor;
  }
  return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatEnded;
}

function getGroupType(visitor, agentId, isGroup) {
  if (!isGroup) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].noGroup;
  }
  var status = visitor.get('status');
  if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatting || status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring && __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, agentId)) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].onGoing;
  } else if (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].waitingForChat || status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].inComing;
  } else if (__WEBPACK_IMPORTED_MODULE_2_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, agentId) && (status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].manuallyInvitedAndWatingVisitor || status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].refusedByVisitor)) {
    return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].invited;
  }
  return __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].chatEnded;
}

function getUnresponseBeginTime(visitor, chat, delay, isOpened) {
  if (!isOpened) return null;
  var beginTime = null;
  var realDelay = delay;
  switch (visitor.get('status')) {
    case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].waitingForChat:
      beginTime = visitor.get('chatRequestTime');
      break;
    case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring:
      beginTime = visitor.get('transferTime');
      break;
    default:
      realDelay = 0;
      beginTime = chat.get('lastRepliedTime');
      break;
  }
  if (!(beginTime instanceof Date)) return null;

  return beginTime.getTime() + realDelay * 1000;
}

var getSegmentations = function getSegmentations(segments, ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  return segments.filter(function (seg) {
    return ids.indexOf(seg.id) >= 0;
  }).map(function (seg) {
    return { name: seg.name, color: '#' + seg.color.toString(16) };
  });
};

function mapToComponentProps(visitor, chat, selectedChatId, agents, agentId, departments, segments, delay) {
  var status = visitor.get('status');
  var chatId = chat.get('id');
  var isWaiting = __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["x" /* isWaiting */](visitor, agentId, departments);
  var isVisitorChatting = __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["u" /* isChatting */](visitor);
  var isMonitoring = isVisitorChatting && __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["g" /* isAgentInMonitorList */](visitor, agentId);
  var isChatting = isVisitorChatting && __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, agentId);
  var isShowClose = __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["y" /* isChatEnded */](visitor) || status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatEnded && __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["g" /* isAgentInMonitorList */](visitor, agentId) || __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["h" /* isAgentInInvolvedList */](visitor, agentId) && !(isVisitorChatting && __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, agentId)) && !isMonitoring && status !== __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].transferring;

  var departmentId = visitor.get('departmentId');
  var department = __WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(departments, function (dep) {
    return departmentId === dep.id;
  });
  var showUnreadMessages = isChatting || isMonitoring || status === __WEBPACK_IMPORTED_MODULE_4__constants_enums__["d" /* chatStatus */].chatEnded;

  return {
    status: status,
    waitingChatOrChatBegins: visitor.get('waitingChatOrChatBegins'),
    visitorId: visitor.get('id'),
    chatId: chatId,
    visitor: {
      name: visitor.get('latestName'),
      agentName: __WEBPACK_IMPORTED_MODULE_2_src_utils_common__["z" /* getAgentNames */](visitor, agentId, agents),
      department: department ? department.name : null
    },
    segments: getSegmentations(segments, visitor.get('segmentIds')),
    isPinned: chat.get('isPinned'),
    isShowWrapUp: !isWaiting && chat.get('ifShowWrapupButton') && !chat.get('wrapupSubmitted') && chatId !== selectedChatId,
    isShowAcceptAndRefuse: isWaiting,
    isShowDeleteIcon: isShowClose,
    unresponseBeginTime: getUnresponseBeginTime(visitor, chat, delay, isWaiting || isChatting),
    currentStatus: getStatus(visitor, agentId),
    messageNumber: showUnreadMessages ? chat.get('unreadMessages') : 0,
    isSelected: chatId === selectedChatId,
    audioVideoStatus: visitor.get('audioVideoChatStatus')
  };
}

function getDefaultStructure(opendStatus) {
  return {
    chats: [],
    groupItems: [{
      id: 'ongoingChats',
      description: 'Ongoing Chats',
      opened: getOpenedStatusById(opendStatus, 'ongoingChats'),
      chats: []
    }, {
      id: 'incomingChats',
      description: 'Incoming Chats',
      opened: getOpenedStatusById(opendStatus, 'incomingChats'),
      chats: []
    }, {
      id: 'manuallyInvited',
      description: 'Manually Invited',
      opened: getOpenedStatusById(opendStatus, 'manuallyInvited'),
      chats: []
    }, {
      id: 'endedChats',
      description: 'Ended Chats',
      opened: getOpenedStatusById(opendStatus, 'endedChats'),
      chats: []
    }],
    ifDepartmentEnabled: true,
    isShowChatItemsViaStatus: false,
    isShowUnreposiveTime: true,
    isShowDepartment: true,
    ifEnableSegmentation: true,
    enableRefuseChat: true
  };
}

function initData(chats, visitors, selectedChatId, siteInfo, preferenceOther, enableRefuseChat, delay, agentId, agents, departments, segments, openedStatus) {
  var chatList = getDefaultStructure(openedStatus);
  /* init global setting */
  chatList.ifDepartmentEnabled = siteInfo.ifDepartmentEnabled;
  chatList.isShowChatItemsViaStatus = preferenceOther.ifGroupChats;
  chatList.isShowUnreposiveTime = preferenceOther.ifShowUnresponseTime;
  chatList.isShowDepartment = preferenceOther.ifShowDepartment;
  chatList.ifEnableSegmentation = siteInfo.ifEnableSegmentation;
  chatList.enableRefuseChat = enableRefuseChat;

  return chats.reduce(function (lists, chat, key) {
    var visitor = chat.get('isUnfinishedWrapup') ? visitors.get('v' + chat.get('visitorId') + 'c' + key) : visitors.get(chat.get('visitorId'));
    if (!visitor) return lists;
    var groupType = getGroupType(visitor, agentId, lists.isShowChatItemsViaStatus);
    var item = mapToComponentProps(visitor, chat, selectedChatId, agents, agentId, departments, segments, delay);
    switch (groupType) {
      case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].onGoing:
        lists.groupItems[0].chats.splice(0, 0, item);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].inComing:
        lists.groupItems[1].chats.push(item);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].invited:
        lists.groupItems[2].chats.splice(0, 0, item);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__constants_enums__["q" /* chatListGroup */].chatEnded:
        lists.groupItems[3].chats.splice(0, 0, item);
        break;
      default:
        lists.chats.splice(0, 0, item);
        break;
    }
    return lists;
  }, chatList);
}

var memoizedInitData = __WEBPACK_IMPORTED_MODULE_3_lru_memoize___default()(1)(initData);

function createChatListState(state) {
  var siteInfo = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_37" /* getSiteInfo */](state);
  var preferenceOther = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_113" /* getPreferenceOthers */](state);
  var enableRefuseChat = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_6__constants_enums_liveChatPermission__["d" /* refuseChat */]);
  var delay = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_12" /* getTimeDelay */](state) || 0;
  var agentId = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var chats = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["U" /* getChats */](state);
  var selectedChatId = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_40" /* getSelectedChatId */](state);
  var agents = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_33" /* getAgents */](state);
  var departments = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["B" /* getDepartments */](state);
  var segments = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["_35" /* getSegmentations */](state);
  var visitors = __WEBPACK_IMPORTED_MODULE_5__reducers_selectors__["m" /* getVisitors */](state);
  var openedGroupStatus = __WEBPACK_IMPORTED_MODULE_7__services_memoryStore__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_8__constants_memoryStore__["f" /* openedGroupStatus */], null, {});
  return memoizedInitData(chats, visitors, selectedChatId, siteInfo, preferenceOther, enableRefuseChat, delay, agentId, agents, departments, segments, openedGroupStatus);
}

/***/ }),
/* 1509 */,
/* 1510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lru_memoize__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lru_memoize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_ChatSection_ChatAction_ChatAction__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_utils_time__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_messageType__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_visitorStatus__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_constants_enums_liveChatPermission__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_chat__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_web__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_enums_chatAction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_secureForm__ = __webpack_require__(1284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Business_common__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_p2pChat__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reducers_selectors_urlsManager__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);







/* import * as perf from 'src/utils/perf'; */


















var getInitialTranscriptBody = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (visitor, chatId, chatMessages, chatInfo, dateTimeFormat, ifDepartmentEnabled) {
  var chatInfoMsg = '';
  var chatInfoDetail = '';
  var chatContent = '<tr><td></td></tr>';
  var chatAttachments = '';
  var customVariables = '';
  var customFields = '';
  if (chatInfo) {
    chatMessages.forEach(function (message) {
      __WEBPACK_IMPORTED_MODULE_2_lodash_each___default()(message, function (item) {
        if (item.type === __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_messageType__["b" /* system */]) {
          chatInfoMsg += item.message + '<br/>';
        }
        if ((item.type === __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_messageType__["c" /* agent */] || item.type === __WEBPACK_IMPORTED_MODULE_8_src_constants_enums_messageType__["a" /* visitor */]) && item.message) {
          chatInfoMsg += '[' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_time__["i" /* toHHMMSS */])(item.time) + '] ' + item.sender + ': ' + item.message + '<br/>';
        }
      });
    });
    __WEBPACK_IMPORTED_MODULE_2_lodash_each___default()(chatInfo.customVariables, function (item) {
      customVariables += item.name + ': ' + item.value + '<br/>';
    });
    __WEBPACK_IMPORTED_MODULE_2_lodash_each___default()(chatInfo.preChatFields, function (item) {
      customFields += item.name + ': ' + item.value + '<br/>';
    });

    chatInfoDetail = '<tr><td>Id: ' + chatId + '</td></tr><tr><td>Name: ' + chatInfo.name + '</td></tr><tr><td>Email: ' + chatInfo.email + '</td></tr><tr><td>Department: ' + (ifDepartmentEnabled ? chatInfo.department : '') + '</td></tr><tr><td>Agent: ' + chatInfo.agentNames + '</td></tr><tr><td>Chat Start Time: ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_time__["e" /* format */])(chatInfo.chatStartTime, dateTimeFormat) + '</td></tr><tr><td>End Time: ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_time__["e" /* format */])(chatInfo.chatEndTime, dateTimeFormat) + '</td></tr><tr><td>Product/Service: ' + chatInfo.service + '</td></tr><tr><td>Phone: ' + chatInfo.phone + '</td></tr><tr><td>Company: ' + chatInfo.company + '</td></tr><tr><td>Source: ' + chatInfo.source + '</td></tr><tr><td>Auto Invitation: ' + chatInfo.autoInvitation + '</td></tr><tr><td>Request Page: ' + chatInfo.requestingPageUrl + '</td></tr><tr><td>Custom Variables: <br/>' + customVariables.substr(0, customVariables.length - 5) + '</td></tr><tr><td>Custom Fields: <br/>' + customFields + '<br/></td></tr>';

    chatContent = '<tr><td style="color:#329fd9;font-family: SourceSans Pro Bold,Arial;"><strong>Chat Info</strong></td></tr><tr><td>' + chatInfoMsg + '</td></tr>' + chatInfoDetail;
    chatAttachments = chatInfo.attachments.join(', ');
  }

  return {
    content: '<table cellspacing="0" cellpadding="0">' + chatContent + '</table>',
    attachments: chatAttachments
  };
});

var getTranscriptVisitorInfo = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (visitor, dateTimeFormat) {
  return '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>Visitor Info</b></td></tr><tr><td>Visitor Id: ' + visitor.get('id') + '</td></tr><tr><td>Latest Name: ' + visitor.get('latestName') + '</td></tr><tr><td>Latest Email: ' + visitor.get('latestEmail') + '</td></tr><tr><td>First Visit Time: ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_time__["e" /* format */])(visitor.get('firstVisitTime'), dateTimeFormat) + '</td></tr><tr><td>Chat Times: ' + visitor.get('chatTimes') + '</td></tr><tr><td>Visit Times: ' + visitor.get('visitorTimes') + '<br/></td></tr></table>';
});

var getTranscriptNavigation = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (sessionInfo, dateTimeFormat) {
  return sessionInfo ? '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>Navigation</b></td></tr><tr><td>Start Time: ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_src_utils_time__["e" /* format */])(sessionInfo.sessionStartTime, dateTimeFormat) + '</td></tr><tr><td>Referrer: ' + sessionInfo.referrerUrl + '</td></tr><tr><td>Search Engine: ' + sessionInfo.searchEngine + '</td></tr><tr><td>Keywords: ' + sessionInfo.keywords + '<br/></td></tr></table>' : '';
});

var getTranscriptGEOInfo = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (sessionInfo) {
  return sessionInfo ? '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>GEO Info</b></td></tr><tr><td>IP: ' + sessionInfo.ip + '</p></td></tr><tr><td>Country/Region: ' + sessionInfo.country + '</p></td></tr><tr><td>State/Province: ' + sessionInfo.state + '</p></td></tr><tr><td>City: ' + sessionInfo.city + '<br/></p></td></tr></table>' : '';
});

var getTranscriptClientInfo = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (sessionInfo) {
  return sessionInfo ? '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>Client Info</b></td></tr><tr><td>Operating System: ' + sessionInfo.operatingSystem + '</td></tr><tr><td>Browser: ' + sessionInfo.browser + '</td></tr><tr><td>Flash Version: ' + sessionInfo.flashVersion + '</td></tr><tr><td>Screen Resolution: ' + sessionInfo.screenResolution + '</td></tr><tr><td>Language: ' + sessionInfo.language + '</td></tr><tr><td>Time Zone: ' + sessionInfo.timeZone + '<br/></td></tr></table>' : '';
});

var getTranscriptRating = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (chatInfo) {
  return chatInfo ? '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>Rating</b></td></tr><tr><td>Rating: ' + chatInfo.rating + '</td></tr><tr><td>Rating Comment: ' + chatInfo.ratingComment + '<br/></td></tr></table>' : '';
});

var getTranscriptAgentComment = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (chatInfo) {
  return chatInfo ? '<table cellspacing="0" cellpadding="0"><tr><td style="color:#329fd9"><b>Agent Comment</b></td></tr><tr><td>' + chatInfo.agentComment + '</td></tr></table>' : '';
});

/**
 * @todo
 * This is a very ugly implementation of cache pure function result.
 *
 * The main idea is: if input is the same, do not call genStaticSelect again to create a new
 * component.
 *
 * The code need to be improved later.
 */
var cachedDepartment = [];

var getOnlineDepartmentComponent = function getOnlineDepartmentComponent(state) {
  var chatId = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_40" /* getSelectedChatId */](state);
  var visitor = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["r" /* getVisitorByChatId */](state, chatId); // TODO
  var departments = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["B" /* getDepartments */](state).map(function (_ref) {
    var id = _ref.id,
        name = _ref.name;

    var availableAgentNumberByDepartmentId = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_86" /* getAvailableAgentsNumberByDepartmentId */](state, id, visitor);
    return {
      /** @todo notice that following two lines are not actually aligned, could be an issue */
      text: name + ' (Online: ' + availableAgentNumberByDepartmentId.onlineAgentNumber + ',\n                          Away: ' + availableAgentNumberByDepartmentId.awayAgentNumber + ')',
      value: id
    };
  });
  var onlineAgentNumber = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_87" /* getOnlineAvailableAgents */](state, visitor).length;
  var awayAgentNumber = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_88" /* getAwayAvailableAgents */](state, visitor).length;
  var defaultSelectOption = [{
    text: 'All Available (Online: ' + onlineAgentNumber + ', Away: ' + awayAgentNumber + ')',
    value: -1
  }];
  var options = defaultSelectOption.concat(departments);
  if (options.length !== cachedDepartment.length) {
    cachedDepartment = options;
  } else {
    for (var i = 0; i < options.length; i += 1) {
      if (options[i].text !== cachedDepartment[i].text || options[i].id !== cachedDepartment[i].id) {
        cachedDepartment = options;
        break;
      }
    }
  }
  return cachedDepartment;
};

var getChatActionDisplay = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (siteInfo, ifHaveTransferPermission, ifEnableTranslate, ifG2MConnected, campaign) {
  return {
    transfer: siteInfo.ifEnableTeamWork && ifHaveTransferPermission,
    /** @todo following is not used in <SendFile />, could be an issue */
    sendFile: siteInfo.ifCanUseAdvancedChatFunc,
    sendTranscript: siteInfo.ifCanEmailTranscript,
    attachTicket: siteInfo.ifTicketOpen,
    autoTranslate: siteInfo.ifEnableChatTranslation && siteInfo.ifEnableChatIntegration && ifEnableTranslate,
    gotoMeeting: siteInfo.ifEnableScreenSharing && siteInfo.ifEnableGotoMeeting && ifG2MConnected,
    joinMe: siteInfo.ifEnableJoinMeScreenSharing,
    pciForm: siteInfo.ifEnablePCIForm,
    audioChat: __WEBPACK_IMPORTED_MODULE_6_src_utils_common__["p" /* ifSupportWebrtc */] && campaign && campaign.ifEnableAudioChat,
    videoChat: __WEBPACK_IMPORTED_MODULE_6_src_utils_common__["p" /* ifSupportWebrtc */] && campaign && campaign.ifEnableVideoChat
  };
});

var getChatActionEnable = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (visitor, currentAgentId, ifUseMainServer, ifEnableAudioVideoChat) {
  var isSendingMessageAllowed = __WEBPACK_IMPORTED_MODULE_6_src_utils_common__["k" /* isSendingMessageAllowed */](visitor, currentAgentId);
  var status = visitor.get('status');
  var ifManuallyInvitedAndWaiting = status === __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */];
  var isActuallyChatting = isSendingMessageAllowed && !ifManuallyInvitedAndWaiting;
  return {
    transfer: isActuallyChatting,
    sendFile: isActuallyChatting,
    sendTranscript: status === __WEBPACK_IMPORTED_MODULE_9_src_constants_enums_visitorStatus__["e" /* chatEnded */],
    attachTicket: __WEBPACK_IMPORTED_MODULE_6_src_utils_common__["t" /* isAttachTicketAllowed */](visitor, currentAgentId),
    autoTranslate: isActuallyChatting,
    gotoMeeting: isActuallyChatting,
    joinMe: isActuallyChatting && ifUseMainServer,
    pciForm: isSendingMessageAllowed,
    audioChat: isActuallyChatting && ifEnableAudioVideoChat, // agent 是否在audio/video chatting
    videoChat: isActuallyChatting && ifEnableAudioVideoChat };
});

var getTranscriptInfo = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (visitor, chatId, chatMessages, currentAgentName, currentAgentEmail, sessionInfo, chatInfo, dateTimeFormat, ifDepartmentEnabled) {
  var transcriptVisitorInfo = getTranscriptVisitorInfo(visitor, dateTimeFormat);

  var transcriptNavigation = getTranscriptNavigation(sessionInfo, dateTimeFormat);
  var transcriptGEOInfo = getTranscriptGEOInfo(sessionInfo);
  var transcriptClientInfo = getTranscriptClientInfo(sessionInfo);
  var transcriptRating = getTranscriptRating(chatInfo);
  var transcriptAgentComment = getTranscriptAgentComment(chatInfo);
  var transcriptBody = getInitialTranscriptBody(visitor, chatId, chatMessages, chatInfo, dateTimeFormat, ifDepartmentEnabled);
  return {
    chatId: chatId,
    transcriptVisitorInfo: transcriptVisitorInfo,
    transcriptNavigation: transcriptNavigation,
    transcriptGEOInfo: transcriptGEOInfo,
    transcriptClientInfo: transcriptClientInfo,
    transcriptRating: transcriptRating,
    transcriptAgentComment: transcriptAgentComment,
    to: currentAgentName + ' <' + currentAgentEmail + '>',
    subject: 'Chat_' + chatId,
    body: transcriptBody
  };
});

var getAutoTranslateInfo = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (detectedVisitorLanguage, ifAutoPopTranslation, ifEnable, agentTranslationLanguage) {
  var ifOpenAutoTranslation = !ifAutoPopTranslation && !ifEnable && detectedVisitorLanguage !== '0' && /** @todo what does '0' stands for? */
  detectedVisitorLanguage !== agentTranslationLanguage;
  return {
    detectedVisitorLanguage: detectedVisitorLanguage,
    ifAutoPopTranslation: ifAutoPopTranslation,
    ifOpenAutoTranslation: ifOpenAutoTranslation
  };
});

var getPCIForm = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (secureFormServer, secureFormConfig, pciFormList) {
  return {
    secureFormServer: secureFormServer,
    secureFormConfig: secureFormConfig,
    pciFormList: pciFormList
  };
});

var getTransfer = __WEBPACK_IMPORTED_MODULE_4_lru_memoize___default()(1)(function (ifDepartmentEnabled, onlineDepartments, onlineDepartmentComponent, allAvailableAgents) {
  return {
    ifDepartmentEnabled: ifDepartmentEnabled,
    onlineDepartments: onlineDepartments,
    onlineDepartmentComponent: onlineDepartmentComponent,
    allAvailableAgents: allAvailableAgents
  };
});

function ifEnableAudioVideoChatButton(state, chat, currentAgentId) {
  if (!chat.get('ifVisitorSupportWebrtc')) {
    return false;
  }

  var visitor = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["s" /* getVisitor */](state, chat.get('visitorId'));
  var avStatus = visitor ? visitor.get('audioVideoChatStatus') : __WEBPACK_IMPORTED_MODULE_21__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */];
  if (avStatus !== __WEBPACK_IMPORTED_MODULE_21__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */]) {
    return false;
  }

  if (__WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_89" /* getIfAgentAudioVideoChatting */](state, currentAgentId)) {
    return false;
  }

  if (__WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_90" /* getIfAgentRequestAudioVideoChat */](state, currentAgentId)) {
    return false;
  }

  return true;
}

var mapStateToProps = function mapStateToProps(state) {
  var chatId = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_40" /* getSelectedChatId */](state);
  if (!chatId) {
    return {};
  }
  /* perf.markBegin('ChatAction: mapStateToProps'); */

  var siteId = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["F" /* getSiteId */](state);
  var visitor = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["r" /* getVisitorByChatId */](state, chatId);
  var visitorId = visitor.get('id');
  var ifDepartmentEnabled = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["v" /* getifDepartmentEnabled */](state);
  var currentAgentId = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var onlineDepartments = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_91" /* getTransferOnlineDepartments */](state, visitorId);
  var allAvailableAgents = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_92" /* getAllAvailableAgents */](state, visitor);
  var currentAgentName = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_82" /* getCurrentAgentName */](state);
  var currentAgentEmail = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_14" /* getCurrentAgentEmail */](state);
  var agentSession = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_55" /* getCurrentAgentSession */](state);
  var joinMeIntegrationServer = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_73" /* getJoinMeIntegrationServer */](state);
  var chat = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["q" /* getSelectedChat */](state);
  var secureFormServer = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_93" /* getSecureFormServer */](state);
  var campaign = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["A" /* getCodePlan */](state, visitor.get('codePlanId'));
  var ifUseMainServer = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_94" /* ifUseMainServer */](state);
  var chatDetails = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_10" /* getChatDetails */](state, visitorId, chatId);
  var dateTimeFormat = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_26" /* getDateTimeFormat */](state);
  var siteInfo = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_37" /* getSiteInfo */](state);
  var ifHaveTransferPermission = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_10_src_constants_enums_liveChatPermission__["k" /* transferChat */]);

  var chatInfo = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(chatDetails, 'chatInfo');
  var sessionInfo = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(chatDetails, 'sessionInfo');

  var onlineDepartmentComponent = getOnlineDepartmentComponent(state);

  var authProvider = ifUseMainServer ? __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_95" /* getChatServerUrl */](state).replace('https://', '').replace('http://', '') : __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_96" /* getStandbyChatServer */](state).replace('https://', '').replace('http://', '');
  var ifAutoPopTranslation = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_97" /* ifPopTranslation */](state, chatId);
  var enableChatTranslation = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_98" /* getIfChatEnableTransaltion */](state, chatId);

  var secureFormConfig = {
    siteId: siteId,
    visitorId: visitorId,
    authToken: agentSession,
    authProvider: authProvider,
    themeColor: campaign ? campaign.themeColor : ''
  };
  var detectedVisitorLanguage = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_99" /* getVisitorLanguage */](state, chatId).toString();
  var agentTranslationLanguage = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_100" /* getAgentTranslationLanguage */](state).toString();
  var fileUploadUrl = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_78" /* getFileUploadUrl */](state);
  var sendFileUploadUrl = fileUploadUrl + '?sessionId=' + agentSession + '&visitorId=' + visitorId + '&siteId=' + siteId;

  var _common$getAttachTick = __WEBPACK_IMPORTED_MODULE_18__Business_common__["f" /* getAttachTicketURL */](state, visitor.get('ticketId').split('-T')[1]),
      isWeb = _common$getAttachTick.isWeb,
      attachTicketUrl = _common$getAttachTick.attachTicketUrl,
      loginUrl = _common$getAttachTick.loginUrl,
      autoLoginUrl = _common$getAttachTick.autoLoginUrl;

  var responseErrorMessage = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_101" /* getResponseErrorMessage */](state);
  var sendEmailSuccessMessage = __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_102" /* getSendEmailSuccessMessage */](state);

  var transcriptInfo = getTranscriptInfo(visitor, chatId, chat.get('messages'), currentAgentName, currentAgentEmail, sessionInfo, chatInfo, dateTimeFormat, ifDepartmentEnabled);

  var ret = {
    responseErrorMessage: responseErrorMessage,
    sendEmailSuccessMessage: sendEmailSuccessMessage,
    chatActionDisplay: getChatActionDisplay(siteInfo, ifHaveTransferPermission, __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_103" /* getIfEnableTranslate */](state), __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_104" /* getConfigIfG2MConnected */](state), __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["A" /* getCodePlan */](state, visitor.get('codePlanId'))),
    chatActionEnable: getChatActionEnable(visitor, currentAgentId, __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_105" /* getIfUseMainServer */](state), ifEnableAudioVideoChatButton(state, chat, currentAgentId)),
    siteId: siteId,
    agentSession: agentSession,
    ifUseMainServer: ifUseMainServer,
    selectedFontSize: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_85" /* getFontSize */](state),
    siteInfo: {
      visitorId: visitorId,
      uploadUrl: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_78" /* getFileUploadUrl */](state),
      downloadUrl: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_79" /* getFileDownloadUrl */](state),
      sessionId: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_55" /* getCurrentAgentSession */](state),
      siteId: siteId,
      privateMessage: 1,
      maxFileSize: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_83" /* getMaxFileSize */](state),
      maxFileNum: __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_84" /* getMaxFileNum */](state),
      sendFileUploadUrl: sendFileUploadUrl
    },
    visitorId: visitorId,
    chatId: chatId,
    ticketId: visitor.get('ticketId'),
    joinMeIntegrationServer: joinMeIntegrationServer,
    currentAgentId: currentAgentId,
    transfer: getTransfer(ifDepartmentEnabled, onlineDepartments, onlineDepartmentComponent, allAvailableAgents),
    transcriptInfo: transcriptInfo,
    pciForm: getPCIForm(secureFormServer, secureFormConfig, __WEBPACK_IMPORTED_MODULE_11__reducers_selectors__["_106" /* getPCIForms */](state)),
    autoTranslateInfo: getAutoTranslateInfo(detectedVisitorLanguage, ifAutoPopTranslation, enableChatTranslation, agentTranslationLanguage),
    gotoAttachTicket: function gotoAttachTicket() {
      __WEBPACK_IMPORTED_MODULE_18__Business_common__["g" /* gotoAttachTicket */]({
        isWeb: isWeb,
        attachTicketUrl: attachTicketUrl,
        loginUrl: loginUrl,
        autoLoginUrl: autoLoginUrl
      });
    },

    chatGuid: visitor.get('chatGuid'),
    webrtcSignalingServiceUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__reducers_selectors_urlsManager__["l" /* getWebrtcSignalingServiceUrl */])(state)
  };
  /* perf.markEnd('ChatAction: mapStateToProps'); */

  return ret;
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;


  var dispatchObject = {
    onFontSelect: function onFontSelect(selectedFontSize) {
      dispatch(__WEBPACK_IMPORTED_MODULE_13__actions_ui__["q" /* changeFontSize */](selectedFontSize));
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["f" /* setPreference */]());
    },
    handleAttachTicket: function handleAttachTicket(visitorId, ticketId) {
      if (ticketId === 0) {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["M" /* attachNewTicket */](visitorId));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["N" /* attachToExistTicket */](visitorId, ticketId));
      }
    },
    onRequestGotoMeeting: function onRequestGotoMeeting(visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["O" /* createG2MMeeting */](visitorId));
    },
    onTransferIconClick: function onTransferIconClick() {
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["C" /* getAgents */]());
    },
    onTransferChat: function onTransferChat(transferType, visitorId, departmentId, agentId, ifCloseChat) {
      if (transferType === '0' && departmentId > 0) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_agent__["y" /* transferChatToDepartment */](visitorId, departmentId, ifCloseChat));
      } else if (transferType === '1' && agentId > 0) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_agent__["z" /* transferChatToAgent */](visitorId, agentId, ifCloseChat)); // todo
      }
    },
    onToggleAutoTranslate: function onToggleAutoTranslate(turnOnOrTurnOff, visitorId, language) {
      if (turnOnOrTurnOff === __WEBPACK_IMPORTED_MODULE_16__constants_enums_chatAction__["_74" /* turnOnAutoTranslate */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_14__actions_agent__["A" /* enableTranslation */](visitorId, language));
      }
    },
    handleSendTranscript: function handleSendTranscript(chatId, form) {
      console.log(form);
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["P" /* sendEmail */](chatId, form));
    },
    showResponseErrorMessage: function showResponseErrorMessage(errorMsg) {
      dispatch(__WEBPACK_IMPORTED_MODULE_13__actions_ui__["r" /* setResponseErrorMessage */](errorMsg));
    },
    hideResponseErrorMessage: function hideResponseErrorMessage() {
      dispatch(__WEBPACK_IMPORTED_MODULE_13__actions_ui__["r" /* setResponseErrorMessage */](''));
    },
    hideSendEmailSuccessMessage: function hideSendEmailSuccessMessage() {
      dispatch(__WEBPACK_IMPORTED_MODULE_13__actions_ui__["s" /* setSendEmailSuccessMessage */](''));
    },
    onUpdateIfPopTranslation: function onUpdateIfPopTranslation(chatId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_chat__["b" /* onUpdateIfPopTranslation */](chatId));
    },
    initialSendTranscriptForm: function initialSendTranscriptForm(visitorId, chatId, transcriptInfo) {
      /** @todo following code could be improved */
      dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["l" /* getChatHistoryDetails */](visitorId, chatId));
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_chat__["c" /* initSendTranscriptForm */]({
        to: transcriptInfo.to,
        subject: transcriptInfo.subject,
        body: transcriptInfo.body.content
      }));
    },
    onRequestPCIForm: function onRequestPCIForm(serverPath, secureForm, config, visitorId, chatId, pciFormName) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__services_secureForm__["a" /* requestSecureForm */])(serverPath, secureForm, config).then(function (_ref2) {
        var token = _ref2.token,
            rsaKey = _ref2.rsaKey;

        dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["Q" /* requestSecureForm */](visitorId, pciFormName, token));
        dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_chat__["d" /* onRequestedSecureForm */](chatId, token, rsaKey));
      }).catch(function (error) {
        dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_chat__["a" /* setErrorMessageForChat */](chatId, 'Request PCI Form failed: ' + error.message));
      });
    },
    showErrorMessage: function showErrorMessage(chatId, errorMsg) {
      dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_chat__["a" /* setErrorMessageForChat */](chatId, errorMsg));
    },
    onRequestAudioChat: function onRequestAudioChat() {
      var p2pChat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["a" /* getP2PChat */])() || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["b" /* newP2PChat */])({
        url: stateProps.webrtcSignalingServiceUrl,
        chat: stateProps.chatGuid,
        localVideo: document.createElement('VIDEO'),
        remoteVideo: document.createElement('VIDEO')
      });
      p2pChat.setChat(stateProps.chatGuid);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["c" /* setP2PChat */])(p2pChat);
      p2pChat.requirePermission(false).then(function () {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["R" /* onRequestAudioChat */](stateProps.visitorId));
      });
    },
    onRequestVideoChat: function onRequestVideoChat() {
      var p2pChat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["a" /* getP2PChat */])() || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["b" /* newP2PChat */])({
        url: stateProps.webrtcSignalingServiceUrl,
        chat: stateProps.chatGuid,
        localVideo: document.createElement('VIDEO'),
        remoteVideo: document.createElement('VIDEO')
      });
      p2pChat.setChat(stateProps.chatGuid);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__services_p2pChat__["c" /* setP2PChat */])(p2pChat);
      p2pChat.requirePermission(true).then(function () {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__actions_web__["S" /* onRequestVideoChat */](stateProps.visitorId));
      });
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

// export default connect(mapStateToProps, mapDispatchToProps)(ChatAction);
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_5_src_components_ChatSection_ChatAction_ChatAction__["a" /* default */]));

/***/ }),
/* 1511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_utils_reporter__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChatSection_ChatContent_ChatContent__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_chat__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_secureForm__ = __webpack_require__(1284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_web__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_p2pChat__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers_selectors_urlsManager__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_time__ = __webpack_require__(74);


/* import * as perf from 'src/utils/perf'; */













var getIsContactOrUserOpen = function getIsContactOrUserOpen(state) {
  if (state.config.settings.siteInfo) {
    return state.config.settings.siteInfo.ifContactOpened && state.config.settings.siteInfo.ifUserOpened;
  }
  return false;
};

function getAVStatusForUI(state, visitor, currentAgentId) {
  if (!__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_107" /* checkIfAgentInVisitorActiveIds */]({ chatActiveAgents: visitor.get('chatActiveAgents') }, currentAgentId)) {
    return __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */];
  }

  var avStatus = visitor.get('audioVideoChatStatus');
  if (avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */] || avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["f" /* agentRequestVideoChat */] || avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */] || avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */]) {
    var avChatAgentId = visitor.get('audioVideoChatAgentId');
    if (avChatAgentId === currentAgentId) {
      return avStatus;
    }

    return __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */];
  }

  if (avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || avStatus === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]) {
    var activeAgents = visitor.get('chatActiveAgents');
    // 当聊天里有多个agent时，当前agent如果正在语音视频，不显示访客请求语音视频界面
    if (activeAgents && activeAgents.length > 1) {
      if (__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_89" /* getIfAgentAudioVideoChatting */](state, currentAgentId)) {
        return __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["g" /* notStart */];
      }
    }
  }

  return avStatus;
}

var mapStateToProps = function mapStateToProps(state, _ref) {
  var dispatch = _ref.dispatch;

  var chatId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_40" /* getSelectedChatId */](state);
  if (!chatId) return {};
  /* perf.markBegin('ChatContent: mapStateToProps'); */

  var chat = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_39" /* getChat */](state, chatId);
  if (!chat) return {};
  var g2mStartUrl = chat.get('g2mStartUrl');
  var visitorId = chat.get('visitorId');
  var visitor = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["r" /* getVisitorByChatId */](state, chatId);
  var chatGuid = visitor.get('chatGuid');
  var secureFormServer = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_93" /* getSecureFormServer */](state);
  var siteId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["F" /* getSiteId */](state);
  var agentSession = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_55" /* getCurrentAgentSession */](state);
  var timezone = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_24" /* getTimezone */](state);
  var timezoneOffset = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_25" /* getTimezoneOffset */](state);
  var textDirectionIfRTL = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_76" /* textDirectionIfRTL */](state);
  var errorMessageForChat = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_108" /* getErrorMessageForChat */](state, chat && chat.get('id'));
  var ifShowNotify = chat.get('ifShowNotify');
  var audioVideoChatWidth = chat.get('audioVideoChatWidth');
  var audioVideoChatStartTime = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_109" /* serverDateToLocal */](state, visitor.get('audioVideoChatStartTime'));
  var currentAgentId = __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var avStatus = getAVStatusForUI(state, visitor, currentAgentId);
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_common__["b" /* isChattingWithAgent */])(visitor, currentAgentId)) {
    g2mStartUrl = null;
  }

  var ret = {
    id: chat.get('id'),
    g2mStartUrl: g2mStartUrl,
    siteId: siteId,
    visitorId: visitorId,
    chatGuid: chatGuid,
    agentSession: agentSession,
    selectedFontSize: __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_85" /* getFontSize */](state),
    messages: __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_110" /* getChatMessages */](state, __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["_40" /* getSelectedChatId */](state)),
    typingMessage: chat.get('typingMessage'),
    isContactOrUserOpen: getIsContactOrUserOpen(state),
    chatTo: visitor.get('latestName'),
    visitorAvatar: visitor.get('avatar'),
    identityType: visitor.get('identityType'),
    secureFormServer: secureFormServer,
    timezone: timezone,
    timezoneOffset: timezoneOffset,
    textDirectionIfRTL: textDirectionIfRTL,
    errorMessageForChat: errorMessageForChat,
    scrollTop: chat.get('scrollTop'),
    ifShowNotify: ifShowNotify,
    audioVideoChatWidth: audioVideoChatWidth,
    audioVideoChatStatus: avStatus,
    webrtcSignalingServiceUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__reducers_selectors_urlsManager__["l" /* getWebrtcSignalingServiceUrl */])(state),
    audioVideoChatStartTime: audioVideoChatStartTime
  };
  /* perf.markEnd('ChatContent: mapStateToProps'); */

  return ret;
};

var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var dispatch = dispatchProps.dispatch;


  var dispatchObject = {
    getSecureFormContent: function getSecureFormContent(token, rsaKey) {
      var config = {
        siteId: stateProps.siteId,
        visitorId: stateProps.visitorId,
        accessToken: token,
        authToken: stateProps.agentSession
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_secureForm__["b" /* getSecureFormContent */])(stateProps.secureFormServer, config, rsaKey).then(function (content) {
        dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["e" /* onGetSecureFormContent */](stateProps.id, token, content));
      }).catch(function (error) {
        __WEBPACK_IMPORTED_MODULE_2_src_utils_reporter__["a" /* error */](error, 'ChatContent', 67, 0);
      });
    },
    onScroll: function onScroll(id, scrollTop) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["f" /* updateScrollTop */](id, scrollTop));
    },
    hideErrorMessage: function hideErrorMessage() {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["a" /* setErrorMessageForChat */](stateProps.id, ''));
    },
    clearG2mStartUrl: function clearG2mStartUrl() {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["g" /* clearG2mStartUrl */](stateProps.id));
    },
    updateIfShowNotify: function updateIfShowNotify(ifShowNotify) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["h" /* updateIfShowNotify */](stateProps.id, ifShowNotify));
    },
    onAudioAndVideoStopResize: function onAudioAndVideoStopResize(info) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_chat__["i" /* audioAndVideoWidthChanged */](stateProps.id, info));
    },
    onAudioVideoChatAccept: function onAudioVideoChatAccept() {
      var status = stateProps.audioVideoChatStatus;
      var visitorId = stateProps.visitorId;
      if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */] || status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]) {
        var p2pChat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__services_p2pChat__["a" /* getP2PChat */])() || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__services_p2pChat__["b" /* newP2PChat */])({
          url: stateProps.webrtcSignalingServiceUrl,
          localVideo: document.createElement('VIDEO'),
          remoteVideo: document.createElement('VIDEO'),
          chat: stateProps.chatGuid
        });
        p2pChat.setChat(stateProps.chatGuid);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__services_p2pChat__["c" /* setP2PChat */])(p2pChat);
        p2pChat.requirePermission(status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]).then(function () {
          if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]) {
            dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["W" /* onAcceptAudioChat */](visitorId));
          } else {
            dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["X" /* onAcceptVideoChat */](visitorId));
          }
        });
      }
    },
    onAudioVideoChatRefuse: function onAudioVideoChatRefuse() {
      var status = stateProps.audioVideoChatStatus;
      var visitorId = stateProps.visitorId;
      console.log('onAudioVideoChatRefuse:', status);
      if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["a" /* visitorRequestAudioChat */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["Y" /* onRefuseAudioChat */](visitorId));
      } else if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["c" /* visitorRequestVideoChat */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["Z" /* onRefuseVideoChat */](visitorId));
      } else if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["e" /* agentRequestAudioChat */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["_0" /* onCancelAudioChatRequest */](visitorId));
      } else if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["f" /* agentRequestVideoChat */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["_1" /* onCancelVideoChatRequest */](visitorId));
      } else if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["b" /* audioChatting */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["_2" /* onStopAudioChat */](visitorId));
      } else if (status === __WEBPACK_IMPORTED_MODULE_8__constants_enums_visitorAudioVideoChatStatus__["d" /* videoChatting */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_web__["_3" /* onStopVideoChat */](visitorId));
      }
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, stateProps, dispatchObject);
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null, mergeProps)(__WEBPACK_IMPORTED_MODULE_4__components_ChatSection_ChatContent_ChatContent__["a" /* default */]));

/***/ }),
/* 1512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_constants_enums_promote__ = __webpack_require__(1279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_constants_enums_userType__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_constants_enums_liveChatPermission__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_utils_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ChatSection_ChatHeader_ChatHeader__ = __webpack_require__(1400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_chat__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_enums_visitorStatus__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Tabs_Salesforce_util__ = __webpack_require__(909);


/* import * as perf from 'src/utils/perf'; */










 // @todo place it elsewhere

var ifDisplayPromote = function ifDisplayPromote(state) {
  var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state);
  var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat && chat.get('id'));
  var siteInfo = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_37" /* getSiteInfo */](state);
  var ifHavePromotePermission = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_3_src_constants_enums_liveChatPermission__["e" /* promoteVisitor */]);
  if (visitor.get('identityType') !== __WEBPACK_IMPORTED_MODULE_2_src_constants_enums_userType__["a" /* User */] && visitor.get('identityType') !== __WEBPACK_IMPORTED_MODULE_2_src_constants_enums_userType__["b" /* Contact */] && siteInfo.ifContactOpened && siteInfo.ifUserOpened && ifHavePromotePermission) {
    return true;
  }
  return false;
};

var ifDisplayBan = function ifDisplayBan(state) {
  var siteInfo = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_37" /* getSiteInfo */](state);
  var ifHaveBanPermission = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_28" /* getPermission */](state, __WEBPACK_IMPORTED_MODULE_3_src_constants_enums_liveChatPermission__["f" /* manageBan */]);
  if (siteInfo.ifCanBan && ifHaveBanPermission) {
    return true;
  }
  return false;
};

var ifDisplayLeaveChat = function ifDisplayLeaveChat(state) {
  var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state);
  if (!chat) return false;
  var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat.get('id'));
  var currentAgentId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state);
  var isMonitoring = __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["c" /* isMonitorWithAgent */](visitor, currentAgentId);
  var isChattingWithAgent = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_59" /* checkIfVisitorStatusChatting */](visitor.get('status')) && __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, currentAgentId);

  if (isMonitoring || isChattingWithAgent) {
    return true;
  }
  return false;
};

var isDisplayCloseChat = function isDisplayCloseChat(state) {
  var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["q" /* getSelectedChat */](state);
  if (!chat) return false;
  var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat.get('id'));
  var agentId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["u" /* getCurrentAgentId */](state);

  var status = visitor.get('status');
  var isMonitoring = __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["u" /* isChatting */](visitor) && __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["c" /* isMonitorWithAgent */](visitor, agentId);

  var isChatEnded = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_111" /* isChatEnded */](status) || __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["v" /* isVisitorChattedWithAgent */](visitor, agentId) && !(__WEBPACK_IMPORTED_MODULE_4_src_utils_common__["u" /* isChatting */](visitor) && __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["e" /* isAgentInChatActiveList */](visitor, agentId));
  var isTransferring = status === __WEBPACK_IMPORTED_MODULE_9__constants_enums_visitorStatus__["b" /* transferring */];

  var isMonitorEnded = status === __WEBPACK_IMPORTED_MODULE_9__constants_enums_visitorStatus__["e" /* chatEnded */] && __WEBPACK_IMPORTED_MODULE_4_src_utils_common__["g" /* isAgentInMonitorList */](visitor, agentId);

  return isChatEnded && !isMonitoring && !isTransferring || isMonitorEnded || status === __WEBPACK_IMPORTED_MODULE_9__constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */];
};

var getSalesforceURL = function getSalesforceURL(state, visitor) {
  var salesforceInteConfig = state.config.salesforce.integrationConfig;
  if (!salesforceInteConfig) {
    return '';
  }
  var instanceUrl = salesforceInteConfig.instanceUrl;
  if (!instanceUrl) return '';
  if (visitor.get('salesforceContactFields') != null && visitor.get('salesforceContactFields').length) {
    return 'https://' + instanceUrl.replace('https://', '').replace('http://', '') + '/' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__components_Tabs_Salesforce_util__["c" /* getSFObjectId */])(visitor.get('salesforceContactFields'));
  } else if (visitor.get('salesforceAccountFields') != null && visitor.get('salesforceAccountFields').length) {
    return 'https://' + instanceUrl.replace('https://', '').replace('http://', '') + '/' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__components_Tabs_Salesforce_util__["c" /* getSFObjectId */])(visitor.get('salesforceAccountFields'));
  } else if (visitor.get('salesforceLeadFields') != null && visitor.get('salesforceLeadFields').length) {
    return 'https://' + instanceUrl.replace('https://', '').replace('http://', '') + '/' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__components_Tabs_Salesforce_util__["c" /* getSFObjectId */])(visitor.get('salesforceLeadFields'));
  }
  return '';
};

var getIsContactOrUserOpen = function getIsContactOrUserOpen(state) {
  if (state.config.settings.siteInfo) {
    return state.config.settings.siteInfo.ifContactOpened && state.config.settings.siteInfo.ifUserOpened;
  }
  return false;
};

var mapStateToProps = function mapStateToProps(state) {
  var chatId = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_40" /* getSelectedChatId */](state);
  if (!chatId) {
    return {};
  }
  /* perf.markBegin('ChatHeader: mapStateToProps'); */

  var chat = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_39" /* getChat */](state, chatId);
  var visitor = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["r" /* getVisitorByChatId */](state, chat && chat.get('id'));

  var saleforceURL = getSalesforceURL(state, visitor);
  var checkChatExisted = chat.get('id') !== visitor.get('chatId');
  var isVisitorExists = __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_112" /* isVisitorExists */](state, visitor.get('id'));

  var isContactOrUserOpen = getIsContactOrUserOpen(state);
  var ret = {
    isContactOrUserOpen: isContactOrUserOpen,
    chatId: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_40" /* getSelectedChatId */](state),
    visitorInfo: visitor ? {
      avatar: visitor.get('avatar'),
      identityType: visitor.get('identityType'),
      latestName: visitor.get('latestName'),
      country: visitor.get('country'),
      city: visitor.get('city'),
      state: visitor.get('state'),
      countryCode: visitor.get('countryCode'),
      operatingSystem: visitor.get('operatingSystem'),
      browser: visitor.get('browser'),
      zendeskUrl: visitor.get('zendeskUrl'),
      socialType: visitor.get('socialType'),
      socialUrl: visitor.get('socialUrl'),
      id: visitor.get('id'),
      prechatEmail: visitor.get('prechatEmail'),
      realVisitorId: visitor.get('realVisitorId'),
      ip: visitor.get('ip'),
      status: visitor.get('status')
    } : {},
    saleforceURL: saleforceURL,
    disabledPromote: checkChatExisted || !isVisitorExists,
    disabledBan: checkChatExisted || !isVisitorExists,
    chatHeaderToolBarDisplay: {
      displayPromote: ifDisplayPromote(state),
      displayBan: ifDisplayBan(state),
      displayLeave: ifDisplayLeaveChat(state),
      displayCloseChat: isDisplayCloseChat(state)
    },
    ifUseMainServer: __WEBPACK_IMPORTED_MODULE_7__reducers_selectors__["_94" /* ifUseMainServer */](state)
  };
  /* perf.markEnd('ChatHeader: mapStateToProps'); */

  return ret;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onPromote: function onPromote(visitorId, promoteType) {
      switch (promoteType) {
        case __WEBPACK_IMPORTED_MODULE_1_src_constants_enums_promote__["a" /* PromoteToUser */]:
          {
            dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agent__["B" /* promoteToUser */](visitorId));
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1_src_constants_enums_promote__["b" /* PromoteToContact */]:
          {
            dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agent__["C" /* promoteToContact */](visitorId));
            break;
          }
        default:
          break;
      }
    },
    onBanChat: function onBanChat(visitorId, banInfo) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agent__["D" /* banVisitor */](visitorId, banInfo));
    },
    onLeaveChat: function onLeaveChat(visitorId) {
      dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_agent__["E" /* leaveChat */](visitorId));
    },
    onCloseChat: function onCloseChat(chatId, status, visitorId) {
      if (status === __WEBPACK_IMPORTED_MODULE_9__constants_enums_visitorStatus__["d" /* manuallyInvitedAndWaitingVisitor */]) {
        dispatch(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["t" /* switchConfirmBeforeCloseWindow */](true, 'ManuallyInvited', 'Are you sure you want to cancel the invitation?', {
          visitorId: visitorId
        }));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_8__actions_chat__["j" /* tryCloseChat */](chatId));
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_6__components_ChatSection_ChatHeader_ChatHeader__["a" /* default */]));

/***/ }),
/* 1513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatItem_ChatItemContainer__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_chatList__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_agent__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Business_chatList__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_enums__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_salesforce__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_types_chatList__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_chat__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_ui__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__ = __webpack_require__(56);

/* import * as perf from 'src/utils/perf'; */













var mapStateToProps = function mapStateToProps(state) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Business_chatList__["a" /* createChatListState */])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClickConfig: function onClickConfig(code) {
      if (code === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["k" /* chatListConfig */].showUnreposiveTime) {
        dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["d" /* createConfigAction */](code, __WEBPACK_IMPORTED_MODULE_8__constants_types_chatList__["f" /* showUnreposiveTime */]));
      } else if (code === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["k" /* chatListConfig */].showDepartment) {
        dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["d" /* createConfigAction */](code, __WEBPACK_IMPORTED_MODULE_8__constants_types_chatList__["g" /* showDepartment */]));
      } else if (code === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["k" /* chatListConfig */].showByStatus) {
        dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["d" /* createConfigAction */](code, __WEBPACK_IMPORTED_MODULE_8__constants_types_chatList__["h" /* showByStatus */]));
      }
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agent__["g" /* setPreference */])());
    },
    onClickPin: function onClickPin(visitor) {
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["e" /* togglePin */](visitor.chatId));
    },
    onItemClick: function onItemClick(visitor) {
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["a" /* setSelected */](visitor.chatId));
      dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_visitorDetails__["l" /* resetForms */]());
      dispatch(__WEBPACK_IMPORTED_MODULE_7__actions_salesforce__["n" /* reset */]());
      __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["b" /* deleteItem */]('salesforceFormState');
      __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["b" /* deleteItem */]('prechatFormState');
      __WEBPACK_IMPORTED_MODULE_11__utils_localStorage__["b" /* deleteItem */]('customFields_FormState');
    },
    onAcceptChat: function onAcceptChat(visitor) {
      if (visitor.currentStatus === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["d" /* chatStatus */].transferring) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agent__["F" /* acceptTransfer */])(visitor.visitorId));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agent__["G" /* acceptChat */])(visitor.visitorId));
      }
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["a" /* setSelected */](visitor.chatId));
    },
    onRefusedChat: function onRefusedChat(visitor) {
      if (visitor.currentStatus === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["d" /* chatStatus */].transferring) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agent__["H" /* refuseTransfer */])(visitor.visitorId));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_agent__["I" /* refuseChat */])(visitor.visitorId));
      }
      dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["j" /* tryCloseChat */](visitor.chatId));
    },
    onWrapUp: function onWrapUp(visitor) {
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["a" /* setSelected */](visitor.chatId));
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_chatList__["f" /* wrapUp */](visitor.visitorId));
    },
    onDeleteItem: function onDeleteItem(visitor) {
      if (visitor.status === __WEBPACK_IMPORTED_MODULE_5__constants_enums__["d" /* chatStatus */].manuallyInvitedAndWatingVisitor) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["t" /* switchConfirmBeforeCloseWindow */])(true, 'ManuallyInvited', 'Are you sure you want to cancel the invitation?', {
          visitorId: visitor.visitorId
        }));
      } else {
        dispatch(__WEBPACK_IMPORTED_MODULE_9__actions_chat__["j" /* tryCloseChat */](visitor.chatId));
      }
    },
    onClickArrow: function onClickArrow(id) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__actions_ui__["u" /* operateGroupArrow */])(id));
    }
  };
};

if (true) {
  /* mapStateToProps = perf.markFunctionCall('ChatList: mapStateToProps', mapStateToProps); */
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_ChatItem_ChatItemContainer__["a" /* default */]));

/***/ }),
/* 1514 */,
/* 1515 */,
/* 1516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatItem_NoChat__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_ui__ = __webpack_require__(34);




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    goToVisitors: function goToVisitors() {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_ui__["p" /* showVisitor */])());
    }
  };
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(undefined, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_ChatItem_NoChat__["a" /* default */]));

/***/ }),
/* 1517 */,
/* 1518 */,
/* 1519 */,
/* 1520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Widget_Reload__ = __webpack_require__(294);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["a" /* default */], {
    modules: { ChatTextEditor: function ChatTextEditor() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_src_components_LazilyLoad_LazilyLoad__["b" /* importLazy */])(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          __webpack_require__.e/* require.ensure */(5).then((function (require) {
            resolve(__webpack_require__(1283));
          }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).catch(reject);
        }));
      } },
    loading: __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_LoadingComponent__["a" /* default */],
    retry: __WEBPACK_IMPORTED_MODULE_5_src_components_Widget_Reload__["a" /* default */]
  }, void 0, function (_ref) {
    var ChatTextEditor = _ref.ChatTextEditor;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_jsx___default()(ChatTextEditor, {});
  });
});

/***/ }),
/* 1521 */,
/* 1522 */,
/* 1523 */,
/* 1524 */,
/* 1525 */,
/* 1526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 1527 */,
/* 1528 */,
/* 1529 */,
/* 1530 */,
/* 1531 */,
/* 1532 */,
/* 1533 */,
/* 1534 */,
/* 1535 */,
/* 1536 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 1537 */,
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
/* 1631 */,
/* 1632 */,
/* 1633 */,
/* 1634 */,
/* 1635 */,
/* 1636 */,
/* 1637 */,
/* 1638 */,
/* 1639 */,
/* 1640 */,
/* 1641 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"autoTranslate":"AutoTranslate__autoTranslate--2MLy-","overlay":"AutoTranslate__overlay--39FoE"};

/***/ }),
/* 1642 */,
/* 1643 */,
/* 1644 */,
/* 1645 */,
/* 1646 */,
/* 1647 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tooltip":"Default__tooltip--1H-e9"};

/***/ }),
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

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 1672 */,
/* 1673 */,
/* 1674 */,
/* 1675 */,
/* 1676 */,
/* 1677 */,
/* 1678 */,
/* 1679 */,
/* 1680 */,
/* 1681 */,
/* 1682 */,
/* 1683 */,
/* 1684 */,
/* 1685 */,
/* 1686 */,
/* 1687 */,
/* 1688 */,
/* 1689 */,
/* 1690 */,
/* 1691 */,
/* 1692 */,
/* 1693 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(206),
    isIterateeCall = __webpack_require__(207),
    toInteger = __webpack_require__(36);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ })
]));
//# sourceMappingURL=chat.57d1d.js.map