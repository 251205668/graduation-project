require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(270);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6547dae6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(275);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
  __webpack_require__(272)
  __webpack_require__(273)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6547dae6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6547dae6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\music\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6547dae6", Component.options)
  } else {
    hotAPI.reload("data-v-6547dae6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_mixin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vant_weapp_dist_toast_toast__ = __webpack_require__(59);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_mixin__["a" /* playerMixin */]],
  name: 'player',
  props: [''],
  data: function data() {
    return {
      songsUrl: [],
      // 歌曲信息加载成功
      recommendlist: [],
      songReady: false,
      currentTime: 0,
      currentShow: 'cd',
      currntsong: {},
      show: false,
      duration: 0,
      playMusicItem: {},
      innerAudioContext: {},
      time: 0,
      lyric: '',
      CustomBar: 0,
      songindex: 0
    };
  },


  components: {},

  computed: {
    current: function current() {
      var time = this.format(this.playingTime);
      return time;
    },
    durationTime: function durationTime() {
      var time = this.format(this.duration);
      return time;
    },
    precent: function precent() {
      return this.currentTime / this.songsTime;
    },
    cdCLs: function cdCLs() {
      return this.isplay ? 'play' : 'play pause';
    },
    playIcon: function playIcon() {
      return !this.isplay ? 'iconbofang1' : 'iconzhengzaibofang';
    },
    iconMode: function iconMode() {
      return this.mode === __WEBPACK_IMPORTED_MODULE_3__utils_config__["b" /* playMode */].sequence ? 'iconshunxu' : this.mode === __WEBPACK_IMPORTED_MODULE_3__utils_config__["b" /* playMode */].loop ? 'icondanquxunhuan' : 'iconsuiji';
    }
  },
  beforeMount: function beforeMount() {},
  created: function created() {
    this.getSonglist();
    this.innerAudioContext = wx.getBackgroundAudioManager();
  },
  mounted: function mounted() {
    var _this = this;

    this.value = this.playingTime;
    this.$nextTick(function () {
      setTimeout(function () {
        _this.songindex = _this.currentSong.index;
        if (_this.songindex === -2) {
          console.log(_this.flag);
          if (_this.innerAudioContext.currentTime > 0 && _this.flag === false) {
            console.log('同一首歌曲哦');
            _this.play(_this.currentSong);
          } else {
            _this.innerAudioContext.stop();
            setTimeout(function () {
              _this.play(_this.currentSong);
            }, 300);
          }
        }
      }, 1000);
    });
  },

  methods: {
    onChange: function onChange(event) {
      this.innerAudioContext.seek(event.mp.detail.value);
    },
    showPopu: function showPopu() {
      this.show = true;
    },
    onClose: function onClose() {
      this.show = false;
    },
    selectmusic: function selectmusic(item, index) {
      var id = item.id,
          name = item.name,
          _item$ar = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(item.ar, 1),
          singer = _item$ar[0].name,
          _item$al = item.al,
          album = _item$al.name,
          picUrl = _item$al.picUrl;

      this.playMusicItem = {
        id: id,
        name: name,
        singer: singer,
        picUrl: picUrl,
        album: album,
        index: index,
        src: 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3'
      };

      this.setCurrentSong(this.playMusicItem);
      this.setflag(true);
      if (this.flag) {
        this.play(this.currentSong);
      }
    },


    // 获取歌曲列表并且将歌曲对象改造
    getSonglist: function getSonglist() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_2__api_index__["s" /* getrecommendList */])().then(function (res) {
        _this2.recommendlist = res.data.playlist.tracks;
        _this2.setSequenceList(_this2.recommendlist);
        _this2.setPlaylist(_this2.recommendlist);
      });
    },
    play: function play(item) {
      var _this3 = this;

      this.time = 0;
      __WEBPACK_IMPORTED_MODULE_5_vant_weapp_dist_toast_toast__["a" /* default */].loading({
        mask: true,
        message: '加载中...'
      });
      this.innerAudioContext.title = item.name;
      this.innerAudioContext.autoplay = true;
      this.innerAudioContext.src = item.src;
      this.innerAudioContext.play();
      this.innerAudioContext.onPlay(function () {
        // 正在播放
        _this3.setIsplay(true);
        _this3.setTime(0);
      });
      this.innerAudioContext.onPause(function () {});
      this.innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
      });
      this.innerAudioContext.onTimeUpdate(function () {
        _this3.currentTime = _this3.innerAudioContext.currentTime;
        _this3.duration = _this3.innerAudioContext.duration;
        _this3.setTime(_this3.currentTime);
        _this3.time = _this3.currentTime;
      });
      this.innerAudioContext.onCanplay(function () {
        __WEBPACK_IMPORTED_MODULE_5_vant_weapp_dist_toast_toast__["a" /* default */].clear();
        _this3.duration = _this3.innerAudioContext.duration;
        _this3.songReady = true;
      });

      this.innerAudioContext.onEnded(function () {
        if (_this3.mode === __WEBPACK_IMPORTED_MODULE_3__utils_config__["b" /* playMode */].loop) {
          _this3.innerAudioContext.loop = true;
          _this3.setTime(_this3.innerAudioContext.currentTime);
        } else {
          _this3.next();
        }
        _this3.time = 0;
      });
    },
    tooglePlay: function tooglePlay() {
      if (this.isplay) {
        this.innerAudioContext.pause();
        this.setTime(this.innerAudioContext.currentTime);
        this.setIsplay(false);
      } else {
        this.innerAudioContext.play();
        this.setTime(this.innerAudioContext.currentTime);
        this.setIsplay(true);
      }
    },

    // 格式化时间
    format: function format(inteval) {
      // 向下取整
      inteval = inteval | 0;
      var minute = inteval / 60 | 0;
      var second = this._pad(inteval % 60);
      return minute + ':' + second;
    },
    _pad: function _pad(num) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      // 如果秒的字符串长度小于2 就补0
      var len = num.toString().length;
      while (len < n) {
        num = '0' + num;
        len++;
      }
      return num;
    },

    // 下一首播放
    next: function next() {
      var _this4 = this;

      this.setTime(0);
      if (!this.songReady) {
        return;
      }
      var index = this.currentSong.index + 1;
      if (index === this.playlist.length) {
        index = 0;
      }
      setTimeout(function () {
        _this4.selectmusic(_this4.playlist[index], index);
      }, 300);
      if (!this.isplay) {
        this.tooglePlay();
      }
    },
    prev: function prev() {
      var _this5 = this;

      this.setTime(0);
      if (!this.songReady) {
        return;
      }
      var index = this.currentSong.index - 1;
      if (index === -1) {
        index = this.playlist.length - 1;
      }
      setTimeout(function () {
        _this5.selectmusic(_this5.playlist[index], index);
      }, 300);
      if (!this.isplay) {
        this.tooglePlay();
      }
    },
    changeMode: function changeMode() {
      var _this6 = this;

      var mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      var list = null;
      if (this.mode === __WEBPACK_IMPORTED_MODULE_3__utils_config__["b" /* playMode */].random) {
        list = Object(__WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* shuffle */])(this.sequencelist);
        setTimeout(function () {
          // this.resetCurrentIndex(list)
          _this6.setPlaylist(list);
        }, 300);
      } else {
        list = this.sequencelist;
        // this.resetCurrentIndex(list)
        this.setPlaylist(list);
      }
    }
  },
  watch: {
    // playing (val) {
    //   if (val === true) {
    //     this.play(this.currentSong)
    //   }
    // }
  }

});

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "player"
  }, [_c('div', {
    staticClass: "normal-player",
    style: ([{
      top: _vm.CustomBar + 'px'
    }])
  }, [_c('div', {
    staticClass: "background"
  }, [(_vm.currentSong.id) ? _c('div', {
    staticClass: "img-wrapper"
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "height": "100%",
      "src": _vm.currentSong.picUrl
    }
  })]) : _c('div', {
    staticClass: "img-wrapper"
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "height": "100%",
      "src": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
    }
  })])]), _vm._v(" "), (_vm.currentSong.id) ? _c('div', {
    staticClass: "top"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\r\n      " + _vm._s(_vm.currentSong.name) + "\r\n    ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.currentSong.singer))])], 1) : _c('div', {
    staticClass: "top"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\r\n      悦读音乐\r\n    ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("读书与音乐更配哦")])], 1), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_c('div', {
    ref: "middleL",
    staticClass: "middle-l"
  }, [_c('div', {
    ref: "cdWrapper",
    staticClass: "cd-wrapper"
  }, [(_vm.currentSong.id) ? _c('div', {
    staticClass: "cd",
    class: _vm.cdCLs
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.currentSong.picUrl,
      "alt": ""
    }
  })]) : _c('div', {
    staticClass: "cd",
    class: _vm.cdCLs
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
      "alt": ""
    }
  })]), _vm._v(" "), _vm._m(0)])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "progress-wrapper"
  }, [_c('span', {
    staticClass: "time time-l"
  }, [_vm._v(_vm._s(_vm.current))]), _vm._v(" "), _c('div', {
    staticClass: "progress-bar-wrapper"
  }, [_c('van-slider', {
    attrs: {
      "bar-height": "4px",
      "max": _vm.duration,
      "active-color": "#34495e",
      "inactive-color": "#7f8c8d",
      "value": _vm.time,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "drag": _vm.onChange
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "time time-r"
  }, [_vm._v(_vm._s(_vm.durationTime))])]), _vm._v(" "), _c('div', {
    staticClass: "operators"
  }, [_c('div', {
    staticClass: "icon i-left"
  }, [_c('i', {
    staticClass: "iconfont",
    class: _vm.iconMode,
    staticStyle: {
      "font-size": "30px"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.changeMode
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "icon i-left"
  }, [_c('i', {
    staticClass: "iconfont iconshangyishou",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.prev
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "icon i-center",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.tooglePlay
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: _vm.playIcon
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "icon i-right"
  }, [_c('i', {
    staticClass: "iconfont iconxiayishou",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.next
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "icon i-right",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.showPopu
    }
  }, [_c('i', {
    staticClass: "iconfont iconbofangliebiao",
    staticStyle: {
      "font-size": "30px"
    }
  })], 1)])]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.show,
      "round": "",
      "position": "bottom",
      "custom-style": "height: 60%;",
      "eventid": '7',
      "mpcomid": '1'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "list-wrapper wrapper"
  }, [_c('div', {
    staticClass: "title",
    staticStyle: {
      "padding-left": "15px"
    }
  }, [_vm._v("\r\n    播放列表" + _vm._s(_vm.recommendlist.length) + "\r\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "cu-list menu-avatar"
  }, _vm._l((_vm.recommendlist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "cu-item",
      class: _vm.modalName == 'move-box-' + index ? 'move-cur' : '',
      attrs: {
        "data-target": 'move-box-' + index,
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectmusic(item, index)
        }
      }
    }, [_c('div', {
      staticClass: "cu-avatar round lg",
      style: ([{
        backgroundImage: 'url(' + (item.al.picUrl) + ')'
      }])
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "text-white text-lg"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "text-white text-df"
    }, [_c('text', {
      staticClass: "cuIcon-profile text-blue  margin-right-xs"
    }), _vm._v(" " + _vm._s(item.ar[0].name))])]), _vm._v(" "), _c('div', {
      staticClass: "action"
    }, [_c('div', {
      staticClass: "text-gray text-sm"
    }, [_vm._v(_vm._s(item.al.name))])])])
  }))])]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '2'
    }
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "play-lyric-wrapper"
  }, [_c('div', {
    staticClass: "playing-lyric",
    staticStyle: {
      "color": "#bdc3c7"
    }
  }, [_vm._v("\r\n           歌词功能即将上线\r\n          ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6547dae6", esExports)
  }
}

/***/ })

},[269]);