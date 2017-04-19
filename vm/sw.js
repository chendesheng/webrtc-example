/*
 * compiled: 2017-04-14 18:14:14.505
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isArray__);
/* harmony export (immutable) */ __webpack_exports__["a"] = convert;




/**
 * 转换对象属性的名称，网络包里json对象属性都是a,b,c之类的，需要转成可读的变量
 * @param {Object} target The object to convert
 * @param {Object} schema Convert object by this schema
 * @returns {Object} Returns new object with new schema
 * @example
 *
 *  const customVariable = {
 *    a: 'id',
 *    b: 'value',
 *  }
 *
 *  const visitor = {
 *    a: 'visitorId',
 *    b: 'status',
 *    c: 'email',
 *    //嵌套对象用数组表示第一个项是名字,第二项是嵌套的schema
 *    x: ['customVariables', customVariable],
 *  };
 *
 *  convert({
 *    a:123,
 *    b:3,
 *    c:'a@b.com',
 *    x:[{a:1,b:'123'}, {a:2,b:'ddd'}]
 *  }, visitor);
 *
 *  //returns this object
 *  {
 *    visitorId: 123,
 *    status: 3,
 *    email: 'a@b.com',
 *    customVariables: [{id:1, value:'123'}, {id:2, value: 'ddd'}]
 * }
 */
function convert(target, schema) {
  if (target == null) {
    return target;
  } else if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(target)) {
    return target.map(o => convert(o, schema));
  } else if (__WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(target)) {
    /* eslint-disable no-use-before-define */
    return convertObject(target, schema);
  }

  throw new Error('target must be an object or array');
}

// returns [key, nestSchema]
function getConvertKey(schema, p) {
  const s = schema[p];
  if (s == null) {
    return [p, null];
  } else if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(s)) {
    return s;
  }

  return [s, null];
}

const convertObject = (target, schema) => Object.keys(target).reduce((res, p) => {
  const [key, nestSchema] = getConvertKey(schema, p);
  const val = nestSchema == null ? target[p] : convert(target[p], nestSchema);
  const next = res;
  next[key] = val;
  return next;
}, {});

// returns [key, value, nestSchema]
function getReverseKey(schema, key) {
  const val = schema[key];
  return __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(val) ? [val[0], key, val[1]] : [val, key, null];
}

/**
 * 反转schema的key value, 向服务器发送请求时需要把有意义的key转回成a,b,c
 *
 * @param {Object} schema The schema to reverse
 * @returns {Object} Reversed schema
 * @example
 * reverseSchema({a:'visitorId', b:['customVariables', {a:'id', b:'value'}]})
 * returns
 * {visitorId:'a', customVariables:['b', {id:'a', value:'b'}]}
 */
const reverseSchema = schema => Object.keys(schema).reduce((res, key) => {
  const [key1, val1, nest] = getReverseKey(schema, key);
  const next = res;
  next[key1] = nest == null ? val1 : [val1, reverseSchema(nest)];
  return next;
}, {});
/* harmony export (immutable) */ __webpack_exports__["b"] = reverseSchema;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_schema__ = __webpack_require__(0);


const field = {
  a: 'id',
  b: 'name',
  c: 'value'
};

const fieldOption = {
  a: 'id',
  b: 'fieldId',
  c: 'displayText',
  d: 'order',
  f: 'groupName',
  e: 'groupId'
};

const fieldConfig = {
  a: 'id',
  b: 'type',
  c: 'ifRequired',
  d: 'displayText',
  e: ['options', fieldOption]
};

const visitorLessDiff = {
  a: 'id',
  c: 'status',
  w: 'numOfPages',
  x: 'currentPage',
  ak: 'chatBeginTime',
  ay: 'currentPageEnterTime',
  az: 'currentPageTitle'
};

const sfFieldValue = {
  Name: 'name',
  Value: 'value',
  DisplayValue: 'displayValue'
};
/* unused harmony export sfFieldValue */


const visitorMoreDiff = Object.assign({
  // session info
  n: 'latestName',
  o: 'latestEmail',

  v: 'chatTimes',

  // pre-chat
  z: 'prechatName',
  aa: 'prechatEmail',
  ab: 'prechatPhone',
  ac: 'prechatCompany',
  ad: 'prechatProductService',

  ae: 'chatInvolvedAgents',
  af: 'chatActiveAgents',
  ah: 'voiceChatId',

  ai: 'agentComment',
  al: 'ticketId',
  am: 'chatMonitorAgents',
  an: 'departmentId',
  aq: 'autoInvitationId',
  ar: 'codePlanId',
  av: 'identityType',
  aw: 'visitorUserContactId', // visitorId, userId or contactId
  ax: 'chatRequestingUrl',

  ba: 'captured',
  bb: 'chatRequestingTitle',
  bc: ['customFields', field],
  bd: 'chatId',
  be: 'realVisitorId',
  bg: 'salesforceUrl',
  bi: 'customVariables',
  bk: 'chatGuid',
  bl: 'avatar',
  bm: 'socialType',
  bn: 'socialUrl',
  bo: 'zendeskUrl',
  bp: 'chatRequestTime',
  bq: 'ifEnterQueue',
  br: ['wrapupFields', field],
  bs: 'wrapupCategoryId',
  bt: 'transferTime',
  bu: 'ssoId',
  ca: 'segmentIds',

  // salesforce
  cb: ['salesforceContactFields', sfFieldValue],
  cc: ['salesforceAccountFields', sfFieldValue],
  ci: ['salesforceLeadFields', sfFieldValue],
  cj: 'salesforcePurposeInManualMode',
  ck: 'salesforceChatEndedErrorMessage',
  co: 'audioVideoChatStatus',
  cp: 'audioVideoChatAgentId',
  cq: 'audioVideoChatStartTime'
}, visitorLessDiff);

const visitor = Object.assign({
  b: 'session',

  // session info
  d: 'browser',
  e: 'operatingSystem',
  f: 'flashVersion',
  g: 'screenResolution',
  h: 'language',

  // client info
  i: 'ip',
  j: 'country',
  k: 'state',
  l: 'city',
  m: 'timezone',

  s: 'sessionStartTime',
  t: 'firstVisitTime',
  u: 'visitorTimes',
  y: 'referrer',
  ao: 'searchEngine',
  ap: 'searchEngineKeywords',
  at: 'landingPageUrl',
  au: 'landingPageTitle',
  bh: 'countryCode',
  bj: 'guid'
}, visitorMoreDiff);

const visitors = {
  n: 'noUpdates',
  v: ['full', visitor],
  l: ['lessDiff', visitor], // schema里的字段多一点没有关系但是不能少
  m: ['moreDiff', visitor],
  t: 'time',
  f: ['visitorsForMobile', visitor]
};

const agent = {
  a: 'id',
  b: 'status',
  c: 'chatCount',
  d: 'name',
  e: 'lastStatusChangeTime'
};

const agentOtherPreference = {
  a: 'shortcutNextChat',
  b: 'shortcutNextResponse',
  c: 'ifAutoAway',
  d: 'autoAwayMinutes',
  e: 'shortcutCannedMessage',
  f: 'ifEnableAutoMonitor',
  g: 'ifAutoLogoff',
  h: 'autoLogoffMinutes',
  i: 'ifShowDepartment',
  j: 'ifGroupChats',
  k: 'autoCloseChatWindow',
  l: 'autoCloseChatDelayMinutes',
  m: 'ifShowUnresponseTime',
  aa: 'ifSegmentationSoundOn',
  ab: 'segmentationSoundId',
  ac: 'segmentationSoundVolume',
  ad: 'ifSegmentationPopup',
  ae: 'ifVisitorListPopup',
  cfs: 'customFilterSettings',
  avii: 'audioVideoChatRequestSoundId',
  aviv: 'audioVideoChatRequestSoundVolume',
  avip: 'ifAudioVideoChatRequestPopup',
  avis: 'ifAudioVideoChatRequestSoundOn',
  avei: 'audioVideoChatEndSoundId',
  avev: 'audioVideoChatEndSoundVolume',
  avep: 'ifAudioVideoChatEndPopup',
  aves: 'ifAudioVideoChatEndSoundOn'
};
/* unused harmony export agentOtherPreference */


const visitorListColumn = {
  a: 'enumColumn',
  b: 'ifVisible',
  c: 'width',
  d: 'customVariableId'
};

const defaultOtherPreference = {
  shortcutNextChat: [17, 69],
  shortcutNextResponse: [17, 82],
  ifAutoAway: false,
  autoAwayMinutes: 5,
  shortcutCannedMessage: [17, 70],
  ifEnableAutoMonitor: false,
  ifAutoLogoff: false,
  autoLogoffMinutes: 15,
  ifShowDepartment: false,
  ifGroupChats: false,
  autoCloseChatWindow: true,
  autoCloseChatDelayMinutes: 1,
  ifShowUnresponseTime: false,
  ifSegmentationSoundOn: true,
  segmentationSoundId: 11,
  segmentationSoundVolume: 50,
  ifSegmentationPopup: true,
  customFilterSettings: [],
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
};
/* unused harmony export defaultOtherPreference */


const currentAgent = {
  a: 'id',
  b: 'name',
  c: 'status',

  d: 'ifVisitorEnterSiteSoundOn',
  e: 'visitorEnterSiteSoundId',
  f: 'visitorEnterSiteSoundVolume',

  g: 'ifNewChatRequestSoundOn',
  h: 'newChatRequestSoundId',
  i: 'newChatRequestSoundVolume',

  j: 'ifTransferSoundOn',
  k: 'transferSoundId',
  l: 'transferSoundVolume',

  m: 'ifNewResponseSoundOn',
  n: 'newResponseSoundId',
  o: 'newResponseSoundVolume',

  p: 'ifPrivateMessageSoundOn',
  q: 'privateMessageSoundId',
  r: 'privateMessageSoundVolume',

  s: 'ifChatEndedSoundOn',
  t: 'chatEndedSoundId',
  u: 'chatEndedSoundVolume',

  v: 'ifExceptionSoundOn',
  w: 'exceptionSoundId',
  x: 'exceptionSoundVolume',

  z: 'textDirectionIfRTL',

  aa: 'ifEnableSpellCheck',
  ab: 'ifAutoSendMessage',
  ac: 'messageWhenAcceptChat',

  // additional info when send transcript
  ad: 'ifAddVisitorInfo',
  ae: 'ifAddNavigationInfo',
  af: 'ifAddGeoInfo',
  ag: 'ifAddRating',

  ah: ['visitorMonitorColumns', visitorListColumn],
  ai: 'timeZone',

  aj: 'shortcutSend',
  ak: 'ifAddClientInfo',
  al: 'ifAddOperatorComment',
  am: 'email',
  an: 'permission',

  ao: 'ifVisitorEnterSitePopup',
  ap: 'ifNewChatRequestPopup',
  aq: 'ifTransferPopup',
  ar: 'ifNewResponsePopup',
  at: 'ifPrivateMessagePopup',
  au: 'ifChatEndedPopup',
  av: 'ifExceptionPopup',
  aw: 'dateTimeFormat',
  ax: 'ifAdmin',

  ay: 'languageSpellCheck',

  ba: 'ifVisitorEnterSiteNotification',
  bb: 'ifNewChatRequestNotification',
  bc: 'ifNewResponseNotification',
  bd: 'ifTransferNotification',
  be: 'ifChatEndedNotification',

  bf: 'newFeatureNotify',
  bg: 'currentPageDisplay',
  bh: 'chatWindowFontSize',

  bi: 'others', // json string agentOtherPreference

  bj: 'offset',
  bk: 'ifEnableTranslate',
  bl: 'translateLanguage',

  bm: 'ifG2MConnected',
  bn: 'g2mEmail',
  bo: 'g2mPassword',

  bq: 'ifChatInQueueSoundOn',
  br: 'chatInQueueSoundId',
  bs: 'chatInQueueSoundVolume',
  bt: 'ifChatInQueuePopup',
  bu: 'ifChatInQueueNotification'
};
/* unused harmony export currentAgent */


const canned = {
  a: 'id',
  b: 'title',
  c: 'content',
  d: 'categoryId',
  e: 'ifPrivate',
  f: 'shortcut'
};

const navigation = {
  b: 'ifSaved',
  c: 'pageUrl',
  d: 'title',
  e: 'time'
};

const sessionInfo = {
  a: 'sessionStartTime',
  b: ['navigations', navigation],
  c: 'ip',
  d: 'country',
  e: 'state',
  f: 'city',
  g: 'searchEngine',
  h: 'keywords',
  i: 'operatingSystem',
  j: 'flashVersion',
  k: 'screenResolution',
  l: 'language',
  m: 'referrerUrl',
  n: 'landingPageTitle',
  o: 'landingPageUrl',
  p: 'browser',
  q: 'timeZone',
  r: 'codePlanId'
};

const chatInfo = {
  a: 'name',
  b: 'email',
  c: 'company',
  d: 'phone',
  e: 'service',
  f: 'agentComment',
  g: 'chatStartTime',
  h: 'chatEndTime',
  i: 'agentNames',

  k: 'chatContent',
  l: 'attachments',
  m: 'department',
  n: 'source',
  o: 'autoInvitation',

  p: 'requestingPageUrl',
  q: 'requestingPageTitle',
  r: ['preChatFields', field],
  s: 'rating',
  t: 'ratingComment',
  u: 'customVariables',
  v: ['postChatFields', field],
  w: ['wrapupFields', field],
  x: 'codePlanId'
};

const offlineMessageInfo = {
  a: 'submitTime',
  b: 'name',
  c: 'company',
  d: 'phone',
  e: 'email',
  f: 'title',
  g: 'content',
  h: 'department',
  i: 'attachment',
  j: 'source',
  k: 'autoInvitation',
  l: 'requestingPageTitle',
  m: 'requestingPageUrl',
  n: ['customFields', field],
  u: 'customVariables'
};

const history = {
  a: 'type',
  b: 'id',
  c: 'visitorId',
  d: 'sessionStartTime',
  e: 'name',
  f: 'email',
  g: 'agentNames',
  h: 'department',

  i: ['sessionInfo', sessionInfo],
  j: ['chatInfo', chatInfo],
  k: ['offlineMessageInfo', offlineMessageInfo],

  l: 'chatCategory',
  m: 'sessionId'
};

const dashboard = {
  a: 'id',
  b: 'title',
  c: 'content'
};

const department = {
  a: 'id',
  b: 'name',
  c: 'agentIds',
  d: 'ifOnline'
};

const campaign = {
  a: 'id',
  b: 'name',
  c: 'invitationIfAddText',
  d: 'invitationDefaultText',

  e: ['customFields', fieldConfig],
  f: 'version',
  g: ['wrapupFields', fieldConfig],
  h: 'ifWrapupRequired',
  i: 'themeColor',
  j: 'ifEnableAudioChat',
  k: 'ifEnableVideoChat'
};

const autoInvitation = {
  a: 'id',
  b: 'name'
};

const category = {
  a: 'id',
  b: 'type',
  c: 'name',
  d: 'ifPrivate',
  e: 'parentId'
};

const siteInfo = {
  a: 'siteId',
  b: 'ifTicketOpen',
  c: 'ifUserOpened',
  d: 'ifContactOpened',
  e: 'ifDisplayTimeInChat',
  f: 'ifShowTypingContent',
  g: 'ifDepartmentEnabled',
  h: 'ifAutoAcceptChat',
  i: 'ifCanCustomAutoInvitationRules',
  j: 'ifCanCustomStyle',
  k: 'ifCanCustomFields',
  l: 'ifRatingEnable',
  m: 'ifCanUseAdvanceReport',
  n: 'ifRecordNavigation',
  o: 'ifPasteCode',
  p: 'ifEnableMultipleCodePlan',
  q: 'ifEnableCustomVariables',
  r: 'ifCanQueryAllTranscript',
  s: 'ifEnableTeamWork',
  t: 'ifEnableInvitation',
  u: 'ifCanBan',
  v: 'ifCanUseAdvancedChatFunc',
  w: 'ifCanEmailTranscript',
  x: 'maxFileNum',
  y: 'maxFileSize',
  z: 'ifEnableMaxOn',
  aa: 'ifEnableChatIntegration',
  ab: 'ifEnableChatTranslation',
  ac: 'ifEnableScreenSharing',
  ad: 'ifEnableGotoMeeting',
  ae: 'ifEnableWrapupChat',
  af: 'ifEnableCannedMessageShortcuts',
  ag: 'ifEnableCustomAwayStatus',
  ah: 'ifEnablePCIForm',
  ai: 'secureFormServer',
  aj: 'ifCanTransferToDepartment',
  ak: 'operatorChatFileSize'
};

const sound = {
  a: 'id',
  b: 'name'
};

// message between agent and visitor
const message = {
  a: 'visitorId',
  b: 'message',
  c: 'sender',
  d: 'type',
  e: 'id',
  f: 'time',
  g: 'translatedMessage'
};
/* unused harmony export message */


const segment = {
  a: 'id',
  b: 'name',
  c: 'color',
  d: 'alertToIds',
  e: 'priority'
};

const unfinishedWrapup = {
  a: ['visitor', visitor],
  b: ['message', message]
};

const customAwayStatus = {
  a: 'id',
  b: 'name',
  c: 'ifSystem',
  d: 'ifVisible'
};

/** @todo should use fieldConfig & fieldOption instead of re-define */
const secureForm = {
  a: 'siteId',
  b: 'id',
  c: 'name',
  d: ['fields', {
    a: 'id',
    b: 'type',
    c: 'required',
    d: 'label',
    e: ['options', {
      a: 'id',
      b: 'fieldId',
      c: 'label',
      d: 'order'
    }]
  }]
};

const customVariableConfig = {
  a: 'id',
  b: 'name',
  c: 'type'
};

const loginResponse = {
  a: 'code',
  b: 'verficationCodeUrl',
  c: 'loginSessionId',
  d: 'message'
};

const trialInfo = {
  a: 'haveBillingInfo',
  b: 'daysRemaining',
  c: 'trialPeriodReminderDays'
};

const recoverVisitorId = {
  a: 'oldVisitorId',
  b: 'visitorId',
  c: 'chatId'
};

const dunningInfo = {
  a: 'status',
  b: 'message'
};

const fieldMapping = {
  a: 'sfFeildSystemName',
  b: 'comm100FieldName',
  c: 'visible'
};

const sfConfig = {
  a: 'instanceUrl',
  b: ['contactFields', fieldMapping],
  c: ['leadFields', fieldMapping],
  d: ['accountFields', fieldMapping],
  e: 'ifManually',
  f: ['caseFields', fieldMapping],
  g: ['taskFields', fieldMapping]
};

const sfObjectField = {
  a: 'systemName',
  b: 'label',
  c: 'type',
  d: 'createable',
  e: 'layoutId',
  f: 'required',
  g: 'picklistValues',
  h: 'relatedObjects'
};

const sfObject = {
  Contact: ['contact', sfFieldValue],
  Account: ['account', sfFieldValue],
  lead: ['lead', sfFieldValue]
};

const extend = {
  a: ['currentAgent', currentAgent],
  b: ['agents', agent],
  c: ['cannedMessages', canned],
  d: ['cannedUrls', canned],
  e: ['navigations', navigation],
  f: ['history', history],
  g: ['dashboard', dashboard],
  h: ['departments', department],
  i: ['codePlans', campaign],
  j: ['autoInvitation', autoInvitation],
  k: ['categories', category],
  l: ['siteInfo', siteInfo],
  m: ['sound', sound],
  p: ['loginResponse', loginResponse],
  q: ['trialInfo', trialInfo],
  r: ['recoverVisitorIds', recoverVisitorId],
  s: ['dunningInfo', dunningInfo],
  t: ['unfinishedWrapups', unfinishedWrapup],
  u: ['customAways', customAwayStatus],
  v: ['secureForms', secureForm],
  x: ['customVariables', customVariableConfig],
  aa: ['segments', segment],
  ab: ['sfConfig', sfConfig],
  ac: ['sfObjectFields', sfObjectField],
  ad: ['sfObject', sfObject],
  ae: 'sfLookupResult'
};

const privateMessage = {
  a: 'agentId',
  b: 'message',
  c: 'time',
  d: 'type',
  e: 'guid'
};

// agent command response
const command = {
  a: 'type',
  b: 'id',
  c: 'errorCode',
  d: 'errorString',
  g: 'visitorId',
  e: ['extend', extend],
  v: ['visitors', visitors]
};

const agentResponse = {
  c: 'errorCode',
  e: 'errorString',
  o: ['commands', command],
  m: ['chatMessages', message],
  p: ['privateMessages', privateMessage]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = agentResponse;


const agentRequest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'siteId',
  o: 'agentId',
  s: 'session',
  l: ['localChats', { a: 'visitorId', b: 'maxMessageId' }],
  m: ['commands', message]
});
/* unused harmony export agentRequest */


const routeRequest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'email',
  b: 'encryptedPassword',
  c: 'verificationCode',
  d: 'loginSession'
});
/* unused harmony export routeRequest */


const routeResponse = {
  c: 'errorCode',
  d: 'message',
  e: ['sites', {
    a: 'siteId',
    d: 'chatServer',
    i: 'liveChatFunc',
    j: 'registerTime',
    k: 'lastLoginTime',
    m: 'standbyChatServer', /** @todo n is standby chat server? */
    p: 'controlPanel'
  }],
  f: ['loginResponse', loginResponse]
};
/* unused harmony export routeResponse */


const preChatForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'comment',
  b: 'name',
  c: 'email',
  d: 'company',
  e: 'phone',
  f: 'productService',
  g: ['customFields', field],
  h: 'departmentId'
});
/* unused harmony export preChatForm */


const wrapupForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'visitorId',
  b: 'chatId',
  c: 'categoryId',
  d: ['customFields', field],
  e: 'comment',
  f: 'categoryList'
});
/* unused harmony export wrapupForm */


const ban = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'banType',
  b: 'ip',
  c: 'comment'
});
/* unused harmony export ban */


const chatEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: 'from',
  b: 'to',
  c: 'subject',
  d: 'body',
  e: 'ifAddVisitorInfo',
  f: 'ifAddNavigationInfo',
  g: 'ifAddGeoInfo',
  h: 'ifAddClientInfo',
  i: 'ifAddRatingInfo',
  j: 'ifAddAgentComment'
});
/* unused harmony export chatEmail */


const recoverChat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["b" /* reverseSchema */])({
  a: ['visitor', visitor],
  b: 'messages'
});
/* unused harmony export recoverChat */


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_schema__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_schema__ = __webpack_require__(1);
/* service worker */
/* eslint-disable compat/compat */

/**
 * [NOTICE]: You need to run `npm run build:sw` if you modify the following code.
 * try `npm run build:sw -- --watch` if you would like webpack to continue building.
 */

/**
 * [WARNING]: When you want to upgrade service worker, consider the following situation:
 * If client having multiple tab opened, service worker will get updated whenever there is a page
 * get refreshed, and new updated service worker will affect ALL opened tabs.
 *
 * In a word, make sure your ugprade will works with previous version of web/desktop application
 */




const CACHE_NAME = 'comm100_v1';
/**
 * https://xxxx/FileUploadHandler.ashx?xxx&fileDisplayName=xxx.png should not be cached.
 * use regex to determine if .png is actually the suffix.
 *
 * Only "/xxxx.png" will be considered as suffix, it can follow with ? or end directly.
 */
const suffixes =
/**
 * notice that .json is not in list.
 * If .json should also be included, please exclude sw.json somewhere,
 * as this is the file to control whether using service worker, it should never
 * be cached.
 */
['.svg', '.css', '.js', '.png', '.jpg', '.gif', 'woff'].map(suffix => new RegExp(`/[^/&?]+\\${suffix}($|\\?)`));
let chatServerUrl;
let standbyChatServerUrl;

self.addEventListener('install', event => {
  /** new service worker should be in charge ASAP */
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(
  /**
   * remove unused caches
   * @todo this part can be improved: optimize what to delete and what to keep
   */
  global.caches.keys().then(keys => Promise.all(keys.map(key => {
    if (key !== CACHE_NAME) return global.caches.delete(key);
    return Promise.resolve();
  }))).then(() =>
  /** service worker should take in charge whenever it's ready */
  self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const fetchRequest = event.request.clone();
  const url = fetchRequest.url;

  if (suffixes.some(suffix => suffix.test(url))) {
    event.respondWith(global.caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type === 'error' || response.type === 'opaque') {
          return response;
        }
        const responseToCache = response.clone();
        return global.caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
          return response;
        });
      });
    }).catch(console.error.bind(console)));
  } else if (url.indexOf(chatServerUrl) === 0 || url.indexOf(standbyChatServerUrl) === 0) {
    event.respondWith(fetch(fetchRequest).then(response => response.json().then(json => ({ json, headers: response.headers }))).then(({ json, headers }) => {
      const ret = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_schema__["a" /* convert */])(json, __WEBPACK_IMPORTED_MODULE_1__constants_schema__["a" /* agentResponse */]);
      ret.hasConverted = true;
      const blob = new Blob([JSON.stringify(ret)], { type: 'application/json' });
      return new Response(blob, { headers });
    }).catch(console.error.bind(console)));
  }
});

self.addEventListener('message', event => {
  const command = event.data;
  chatServerUrl = `${command.payload.chatServer}/livechathandler3.ashx`;
  standbyChatServerUrl = `${command.payload.standbyChatServer}/livechathandler3.ashx`;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ })
/******/ ]);
//# sourceMappingURL=http://localhost:8000/sw.js.map