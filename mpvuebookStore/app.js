require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_SEQUENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_PLAY_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CURRENTINDEX; });
/* unused harmony export SET_PLAY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_ISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_CURRENTSONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_PLAYINGTIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return STE_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_FLAG; });
var SET_PLAYING = 'SET_PLAYING';

var SET_PLAYLIST = 'SET_PLAYLIST';

var SET_SEQUENCE = 'SET_SEQUENCE';

var SET_PLAY_MODE = 'SET_PLAY_MODE';

var SET_CURRENTINDEX = 'SET_CURRENTINDEX';

var SET_PLAY = 'SET_PLAY';

var SET_ISPLAY = 'SET_ISPLAY';

var SET_CURRENTSONG = 'SET_CURRENTSONG';
var SET_PLAYINGTIME = 'SET_PLAYINGTIME';

var STE_AUDIO = 'SET_AUDIO';
var SET_FLAG = 'SET_FLAG';

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_router_patch__ = __webpack_require__(77);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_mpvue_router_patch__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ade920a", Component.options)
  } else {
    hotAPI.reload("data-v-6ade920a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// import Vue from 'vue'
/* harmony default export */ __webpack_exports__["a"] = ({
  // onLaunch () {
  //   wx.getSystemInfo({
  //     success: function (e) {
  //       // #ifndef MP
  //       Vue.prototype.StatusBar = e.statusBarHeight
  //       if (mpvuePlatform === 'android') {
  //         Vue.prototype.CustomBar = e.statusBarHeight + 50
  //       } else {
  //         Vue.prototype.CustomBar = e.statusBarHeight + 45
  //       };
  //       // #endif
  //       // #ifdef MP-WEIXIN
  //       Vue.prototype.StatusBar = e.statusBarHeight
  //       let custom = wx.getMenuButtonBoundingClientRect()
  //       Vue.prototype.Custom = custom
  //       Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight
  //       // #endif
  //       // #ifdef MP-ALIPAY
  //       Vue.prototype.StatusBar = e.statusBarHeight
  //       Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight
  //       // #endif
  //     }
  //   })
  // }
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(70);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  state: __WEBPACK_IMPORTED_MODULE_4__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */]
}));

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlay", function() { return selectPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPlay", function() { return randomPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSong", function() { return insertSong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutations_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(42);



function findIndex(list, song) {
  return list.findIndex(function (item) {
    return item.id === song.id;
  });
}
var selectPlay = function selectPlay(_ref, _ref2) {
  var commit = _ref.commit,
      state = _ref.state;
  var list = _ref2.list,
      index = _ref2.index;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["i" /* SET_SEQUENCE */], list);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["g" /* SET_PLAYLIST */], list);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["a" /* SET_CURRENTINDEX */], index);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["e" /* SET_PLAYING */], true);
};

var randomPlay = function randomPlay(_ref3, _ref4) {
  var commit = _ref3.commit;
  var list = _ref4.list;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["h" /* SET_PLAY_MODE */], __WEBPACK_IMPORTED_MODULE_1__utils_config__["b" /* playMode */].random);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["i" /* SET_SEQUENCE */], list);
  var randomlist = Object(__WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* shuffle */])(list);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["a" /* SET_CURRENTINDEX */], 0);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["g" /* SET_PLAYLIST */], randomlist);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["e" /* SET_PLAYING */], true);
};

// 插入单曲进入playlist 如果以前的有 就插入删除以前的存在的相同歌曲的元素
var insertSong = function insertSong(_ref5, song) {
  var commit = _ref5.commit,
      state = _ref5.state;

  // 需要使用slice生成一个副本 不然我能在action里面直接修改state里面的参数
  var playlist = state.playlist.slice();
  var sequencelist = state.sequencelist.slice();
  var currentIndex = state.currentIndex;
  var currentSong = playlist[currentIndex];
  var fpIndex = findIndex(playlist, song);
  currentIndex++;
  playlist.splice(currentIndex, 0, song);
  if (fpIndex > -1) {
    // 当前歌曲索引在以前存在歌曲的后面
    if (currentIndex > fpIndex) {
      // 如果存在歌曲索引在前面 想要删除掉它的索引currentindex必须-1 这时fpIndex才正确
      currentIndex--;
      playlist.splice(fpIndex, 1);
    } else {
      // 当存在歌曲在后面 插入歌曲在前面 只需要fpindex+1即可
      playlist.splice(fpIndex + 1, 1);
    }
  }
  // 当前歌曲在sequencelist的索引 因为是顺序列表 所以加一
  var currentSIndex = findIndex(sequencelist, currentSong) + 1;
  var fsIndex = findIndex(sequencelist, song);
  sequencelist.splice(currentSIndex, 0, song);
  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequencelist.splice(fsIndex, 1);
    } else {
      sequencelist.splice(fsIndex + 1, 1);
    }
  }

  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["g" /* SET_PLAYLIST */], playlist);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["i" /* SET_SEQUENCE */], sequencelist);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["a" /* SET_CURRENTINDEX */], currentIndex);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutations_type__["e" /* SET_PLAYING */], true);
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playing", function() { return playing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return playlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencelist", function() { return sequencelist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mode", function() { return mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentIndex", function() { return currentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playingTime", function() { return playingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isplay", function() { return isplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSong", function() { return currentSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flag", function() { return flag; });

var playing = function playing(state) {
  return state.playing;
};

var playlist = function playlist(state) {
  return state.playlist;
};

var sequencelist = function sequencelist(state) {
  return state.sequencelist;
};

var mode = function mode(state) {
  return state.mode;
};

var currentIndex = function currentIndex(state) {
  return state.currentIndex;
};

var playingTime = function playingTime(state) {
  return state.playingTime;
};

var audio = function audio(state) {
  return state.audio;
};
var isplay = function isplay(state) {
  return state.isplay;
};

var currentSong = function currentSong(state) {
  return state.currentSong;
};
var flag = function flag(state) {
  return state.flag;
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(6);

var state = {
  playing: false, // 播放暂停
  playlist: [], // 播放列表
  sequencelist: [], // 顺序播放的列表
  mode: __WEBPACK_IMPORTED_MODULE_0__utils_config__["b" /* playMode */].sequence, // 默认顺序播放
  currentIndex: -1, // 当前播放的歌曲下标
  playingTime: 0,
  audio: {},
  isplay: false, // 是否播放
  currentSong: {},
  flag: true
};
/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations_type__ = __webpack_require__(41);


var _mutations;


// ! import * as types 这里是定义一个types 通过数组的方式取出定义常量作为函数名  关联mutation就是mutations-type的作用
var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["e" /* SET_PLAYING */], function (state, flag) {
  state.playing = flag;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["g" /* SET_PLAYLIST */], function (state, list) {
  state.playlist = list;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["i" /* SET_SEQUENCE */], function (state, list) {
  state.sequencelist = list;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["h" /* SET_PLAY_MODE */], function (state, mode) {
  state.mode = mode;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["a" /* SET_CURRENTINDEX */], function (state, index) {
  state.currentIndex = index;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["d" /* SET_ISPLAY */], function (state, flag) {
  state.isplay = flag;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["b" /* SET_CURRENTSONG */], function (state, music) {
  state.currentSong = music;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["f" /* SET_PLAYINGTIME */], function (state, time) {
  state.playingTime = time;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["j" /* STE_AUDIO */], function (state, audio) {
  state.audio = audio;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_type__["c" /* SET_FLAG */], function (state, flag) {
  state.flag = flag;
}), _mutations);
/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ })

},[62]);