require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(204);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_21cf3d5a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(205)
  __webpack_require__(206)
  __webpack_require__(207)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21cf3d5a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_21cf3d5a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21cf3d5a", Component.options)
  } else {
    hotAPI.reload("data-v-21cf3d5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_search_box_search_box__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_Homecard__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Homebanner__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Home_HomebookC__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Home_HomebookF__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Home_HomebookH__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Home_HomebookR__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_wechat__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_mixin__ = __webpack_require__(38);
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
  mixins: [__WEBPACK_IMPORTED_MODULE_10__utils_mixin__["a" /* playerMixin */]],
  name: '',
  props: [''],
  data: function data() {
    return {
      data: {},
      hotsearch: null,
      recommend: [],
      freeread: [],
      hotBook: [],
      category: [],
      cardlist: [],
      Rtitle: '为你推荐'
    };
  },

  components: { searchBox: __WEBPACK_IMPORTED_MODULE_1__components_base_search_box_search_box__["a" /* default */], Homecard: __WEBPACK_IMPORTED_MODULE_2__components_Home_Homecard__["a" /* default */], Homebanner: __WEBPACK_IMPORTED_MODULE_3__components_Home_Homebanner__["a" /* default */], HomebookC: __WEBPACK_IMPORTED_MODULE_4__components_Home_HomebookC__["a" /* default */], HomebookR: __WEBPACK_IMPORTED_MODULE_7__components_Home_HomebookR__["a" /* default */], HomebookH: __WEBPACK_IMPORTED_MODULE_6__components_Home_HomebookH__["a" /* default */], HomebookF: __WEBPACK_IMPORTED_MODULE_5__components_Home_HomebookF__["a" /* default */] },
  computed: {},
  beforeMount: function beforeMount() {},
  onLoad: function onLoad() {
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_9__api_wechat__["b" /* getStorageSync */])('openId');
    var shortid = '1234';
    this.getHomeInfo(shortid);
  },
  onShow: function onShow() {
    this.getInfo();
  },
  mounted: function mounted() {},

  methods: {
    getInfo: function getInfo() {
      var _this = this;

      var userflag = false;
      var Idflag = Object(__WEBPACK_IMPORTED_MODULE_9__api_wechat__["b" /* getStorageSync */])('openId');
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_9__api_wechat__["b" /* getStorageSync */])('usnerInfo');
      if (userInfo !== undefined) {
        userflag = true;
      } else {
        userflag = false;
      }
      if (userflag && !this.hotBook.length && Idflag !== '1234') {
        setTimeout(function () {
          _this.getHomeInfo();
          _this.Rtitle = '推荐';
        }, 300);
      } else {}
    },
    getHomeInfo: function getHomeInfo(openId) {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_8__api_index_js__["g" /* getHomeData */])({ openId: openId }).then(function (res) {
        var _res$data$data = res.data.data,
            hotSearch = _res$data$data.hotSearch,
            recommend = _res$data$data.recommend,
            freeRead = _res$data$data.freeRead,
            hotBook = _res$data$data.hotBook,
            category = _res$data$data.category;

        _this2.hotsearch = hotSearch.keyword;
        _this2.recommend = recommend;
        _this2.freeread = freeRead;
        _this2.hotBook = hotBook;
        _this2.category = category;
      }).catch(function () {});
    },
    LoadingMore: function LoadingMore(key) {
      var _this3 = this;

      switch (key) {
        case 'recommend':
          Object(__WEBPACK_IMPORTED_MODULE_8__api_index_js__["r" /* getrecommend */])().then(function (res) {
            _this3.recommend = res.data.data;
          });
          break;
        case 'freeRead':
          Object(__WEBPACK_IMPORTED_MODULE_8__api_index_js__["n" /* getfreeRead */])().then(function (res) {
            _this3.freeread = res.data.data;
          });
          break;
        case 'hotRead':
          Object(__WEBPACK_IMPORTED_MODULE_8__api_index_js__["o" /* gethotBook */])().then(function (res) {
            _this3.hotBook = res.data.data;
          });
          break;
      }
    },
    Search: function Search() {
      this.$router.push('/pages/Search/main');
    },
    Totype: function Totype() {
      global.mpvue.switchTab({
        url: '/pages/type/main'
      });
    },
    Todetail: function Todetail(book) {
      var fileName = book.fileName;

      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: fileName
        }
      });
    },
    changeTodetail: function changeTodetail(book) {
      var fileName = book.fileName;

      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: fileName
        }
      });
    },
    showMessage: function showMessage() {
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_9__api_wechat__["b" /* getStorageSync */])('usnerInfo');
      if (!userInfo) {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('需要登录,才能体验完整功能');
      }
    },
    ToPlayer: function ToPlayer() {
      this.$router.push('/pages/music/main');
    }
  },

  watch: {}

});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homecard_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a9512a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homecard_vue__ = __webpack_require__(219);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a9512a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homecard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a9512a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homecard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\Homecard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Homecard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a9512a6", Component.options)
  } else {
    hotAPI.reload("data-v-5a9512a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 214:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_image_view_image_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wechat__ = __webpack_require__(11);
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
  name: '',
  props: {
    data: {
      type: Array,
      default: []
    },
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      shelf: [],
      avatar: '',
      nickName: '',
      loginflag: true,
      testflag: true,
      mockshelflist: [{
        'id': 67,
        'fileName': '2018_Book_Nanoinformatics',
        'cover': 'https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg',
        'title': 'Nanoinformatics',
        'author': 'Isao Tanaka',
        'publisher': 'Springer Singapore',
        'bookId': '2018_Book_Nanoinformatics',
        'category': 15,
        'categoryText': 'MaterialsScience',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      }, {
        'id': 38,
        'fileName': '2018_Book_DesigningSustainableTechnologi',
        'cover': 'https://www.youbaobao.xyz/book/res/img/Environment/978-3-319-66981-6_CoverFigure.jpg',
        'title': 'Designing Sustainable Technologies, Products and Policies',
        'author': 'Enrico Benetto',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_DesigningSustainableTechnologi',
        'category': 6,
        'categoryText': 'Environment',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      }, {
        'id': 12,
        'fileName': '2018_Book_RESTARTSustainableBusinessMode',
        'cover': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-91971-3_CoverFigure.jpg',
        'title': 'RESTART Sustainable Business Model Innovation',
        'author': 'Sveinung Jørgensen',
        'publisher': 'Springer International Publishing',
        'bookId': '2018_Book_RESTARTSustainableBusinessMode',
        'category': 13,
        'categoryText': 'BusinessandManagement',
        'language': 'en',
        'rootFile': 'OEBPS/package.opf'
      }]
    };
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__base_image_view_image_view__["a" /* default */] },

  computed: {},
  beforeCreate: function beforeCreate() {},
  beforeMount: function beforeMount() {},
  onShow: function onShow() {
    this.getInfo();
  },
  onLoad: function onLoad() {
    this.ISlogin();
    this.getUserInfo();
    this.getshelf();
  },

  methods: {
    ISlogin: function ISlogin() {
      var login = false;
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_2__api_wechat__["b" /* getStorageSync */])('usnerInfo');
      if (userInfo !== undefined && userInfo.nickName) {
        login = true;
      } else {
        login = false;
      }
      this.loginflag = login;
    },
    getInfo: function getInfo() {
      var userflag = false;
      var login = false;
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_2__api_wechat__["b" /* getStorageSync */])('usnerInfo');
      if (userInfo !== undefined && userInfo.nickName) {
        userflag = true;
        login = true;
      } else {
        userflag = false;
        login = false;
      }
      this.loginflag = login;
      console.log(this.loginflag);
      // 用户授权了 切换到首页加载数据
      if (userflag && !this.shelf.length) {
        this.getUserInfo();
        this.getshelf();
      } else {}
    },
    getUserInfo: function getUserInfo() {
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_2__api_wechat__["b" /* getStorageSync */])('usnerInfo');
      var nickName = userInfo.nickName,
          avatarUrl = userInfo.avatarUrl;

      this.avatar = avatarUrl;
      this.nickName = nickName;
    },
    getshelf: function getshelf() {
      var _this = this;

      var openId = Object(__WEBPACK_IMPORTED_MODULE_2__api_wechat__["b" /* getStorageSync */])('openId');
      Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["g" /* getHomeData */])({ openId: openId }).then(function (res) {
        _this.shelf = res.data.data.shelf;
      });
    },
    goToShelf: function goToShelf() {
      global.mpvue.switchTab({
        url: '/pages/shell/main'
      });
    },
    selectBook: function selectBook() {},
    sign: function sign() {},
    feed: function feed() {
      global.mpvue.lin.showMessage({
        content: '反馈功能正在开发中',
        duration: 3000
      });
    },
    ToBookdeatil: function ToBookdeatil(item) {
      this.$emit('Bookdetail', item);
    }
  },

  watch: {}

});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homecard"
  }, [_c('div', {
    staticClass: "homecard-wrapper"
  }, [_c('div', {
    staticClass: "user-info"
  }, [(_vm.loginflag) ? _c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    staticStyle: {
      "border-radius": "50%",
      "width": "20px",
      "height": "20px"
    },
    attrs: {
      "src": _vm.avatar
    }
  })]) : _vm._e(), _vm._v(" "), (!_vm.loginflag) ? _c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    staticStyle: {
      "border-radius": "50%",
      "width": "20px",
      "height": "20px"
    },
    attrs: {
      "src": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.loginflag) ? _c('span', {
    staticClass: "nickName"
  }, [_vm._v(_vm._s(_vm.nickName))]) : _c('span', {
    staticClass: "nickName"
  }, [_vm._v("游客登录")]), _vm._v(" "), (_vm.loginflag) ? _c('span', {
    staticClass: "shelf-desc"
  }, [_vm._v("书架共有三本好书")]) : _c('span', {
    staticClass: "shelf-desc"
  }, [_vm._v("亲亲需要您登录哦")]), _vm._v(" "), _c('div', {
    staticClass: "split"
  }), _vm._v(" "), _c('span', {
    staticClass: "shelf-desc right"
  }, [_vm._v("特别精选")])]), _vm._v(" "), _c('div', {
    staticClass: "book-info"
  }, [(_vm.loginflag) ? _c('div', {
    staticClass: "book-img-wrapper"
  }, _vm._l((_vm.shelf), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "img-wrapper",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.ToBookdeatil(item)
        }
      }
    }, [_c('van-image', {
      attrs: {
        "fit": "cover",
        "width": "72",
        "height": "101",
        "lazy-load": "",
        "src": item.cover,
        "mpcomid": '0_' + index
      }
    })], 1)
  })) : _c('div', {
    staticClass: "book-img-wrapper"
  }, _vm._l((_vm.mockshelflist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "img-wrapper",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.ToBookdeatil(item)
        }
      }
    }, [_c('van-image', {
      attrs: {
        "fit": "cover",
        "width": "72",
        "height": "101",
        "lazy-load": "",
        "src": item.cover,
        "mpcomid": '1_' + index
      }
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "book-shelf",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goToShelf
    }
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("书架")]), _vm._v(" "), _c('l-icon', {
    staticClass: "icon",
    attrs: {
      "name": "right",
      "size": "24",
      "color": "#ccc",
      "mpcomid": '2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "feedback-wrapper",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.feed
    }
  }, [_vm._v("\n     反馈\n    ")])]), _vm._v(" "), _c('l-message', {
    attrs: {
      "content": "content",
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a9512a6", esExports)
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homebanner_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_543640ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homebanner_vue__ = __webpack_require__(229);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-543640ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homebanner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_543640ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homebanner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\Homebanner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Homebanner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-543640ee", Component.options)
  } else {
    hotAPI.reload("data-v-543640ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_mixin__ = __webpack_require__(38);

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
  mixins: [__WEBPACK_IMPORTED_MODULE_3__utils_mixin__["a" /* playerMixin */]],
  name: '',
  props: [''],
  data: function data() {
    return {
      swiperList: [],
      playMusicItem: {}
    };
  },

  components: {},

  computed: {},

  beforeMount: function beforeMount() {},
  created: function created() {
    this.getSwipperList();
  },


  methods: {
    getSwipperList: function getSwipperList() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_2__api_index__["p" /* getmusicBanner */])().then(function (res) {
        _this.swiperList = res.data.banners;
      });
    },
    playmusic: function playmusic(item) {
      var _this2 = this;

      if (item.targetType === 1) {
        console.log('播放歌曲');
        Object(__WEBPACK_IMPORTED_MODULE_2__api_index__["q" /* getmusicDetail */])(item.targetId).then(function (res) {
          var _res$data$songs$ = res.data.songs[0],
              id = _res$data$songs$.id,
              name = _res$data$songs$.name,
              _res$data$songs$$ar = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_res$data$songs$.ar, 1),
              singer = _res$data$songs$$ar[0].name,
              _res$data$songs$$al = _res$data$songs$.al,
              album = _res$data$songs$$al.name,
              picUrl = _res$data$songs$$al.picUrl;

          _this2.playMusicItem = {
            id: id,
            name: name,
            singer: singer,
            picUrl: picUrl,
            album: album,
            src: 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3',
            index: -2
          };
        }).then(function () {
          _this2.$router.push('/pages/music/main');
          _this2.setIsplay(true);
          _this2.setTime(0);
          _this2.setflag(false);
        });
      } else {
        console.log('这是专辑,不能播放');
      }
      setTimeout(function () {
        _this2.setCurrentSong(_this2.playMusicItem);
      }, 700);
      // setTimeout(() => { console.log(this.currentSong) }, 1000)
    }
  },

  watch: {}
});

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swipper-wrapper"
  }, [_c('swiper', {
    staticClass: "swipper",
    attrs: {
      "circular": "true",
      "autoplay": "true",
      "interval": "5000",
      "duration": "500"
    }
  }, _vm._l((_vm.swiperList), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.playmusic(item)
        }
      }
    }, [_c('img', {
      staticClass: "swipper-item",
      attrs: {
        "mode": "widthFix",
        "src": item.imageUrl
      }
    })])
  })), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-543640ee", esExports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookC_vue__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c4bd7ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookC_vue__ = __webpack_require__(233);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c4bd7ad"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookC_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c4bd7ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookC_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\HomebookC.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomebookC.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c4bd7ad", Component.options)
  } else {
    hotAPI.reload("data-v-0c4bd7ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(6);
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
  name: '',
  props: {
    title: {
      type: String,
      default: '为你推荐'
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: '查看更多'
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    // 排版方式 row col cate
    mode: {
      type: String,
      default: 'cate'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      Mode: '',
      Col: 0
    };
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {
    colStyle: function colStyle() {
      if (this.col === 3) {
        return true;
      } else {
        return false;
      }
    },
    bookData: function bookData() {
      // 将数组数据结构转换成想要的数据结构(传入行列)
      if (this.data && this.data.length > 0) {
        this.data.forEach(function (item) {
          // 增加中文分类名属性
          item.text = __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* CATEGORY */][item.categoryText.toLowerCase()];
        });
        var number = this.row * this.col;
        var _bookdata = this.data.slice(0, number);
        var _BookDataByRow = [];
        var _row = 0;
        while (_row < this.row) {
          _BookDataByRow.push(_bookdata.slice(_row * this.col, _row * this.col + this.col));
          _row++;
        }
        return _BookDataByRow;
      } else {
        return [];
      }
    },
    linearStl: function linearStl() {
      if (this.Mode === 'row') {
        return 'background';
      } else {
        return '';
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.Mode = this.mode;
    this.Col = this.col;
  },


  methods: {
    onMoreclick: function onMoreclick() {
      this.$emit('onMoreclick');
    },
    ToDetail: function ToDetail(book) {
      this.$emit('ToDetail', book);
    },
    toTypeList: function toTypeList(book) {
      this.$router.push({
        path: '/pages/Booklist/main',
        query: {
          item: book.category,
          key: 'categoryId',
          title: book.categoryText
        }
      });
    }
  },

  watch: {}
});

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "homeBook",
    staticClass: "home-book",
    class: _vm.linearStl
  }, [_c('div', {
    staticClass: "home-book-header"
  }, [_vm._v("图书分类")]), _vm._v(" "), _c('div', {
    staticClass: "home-book-content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "home-book-row"
    }, _vm._l((item), function(book, index1) {
      return _c('div', {
        key: index1,
        staticClass: "home-book-col",
        style: ({
          flex: '0 0 ' + (100 / _vm.col) + '%'
        })
      }, [(_vm.Mode === 'row' || _vm.Mode === 'col') ? _c('div', {
        staticClass: "home-book-wrapper",
        style: ({
          flexDirection: _vm.Mode === 'col' ? 'row' : 'column'
        })
      }, [(_vm.Mode === 'row' && _vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "101",
          "height": "147",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '0_' + index + '-' + index1,
          "mpcomid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row' && !_vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "68",
          "height": "99",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '1_' + index + '-' + index1,
          "mpcomid": '1_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('van-image', {
        attrs: {
          "width": "64",
          "height": "88",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '2_' + index + '-' + index1,
          "mpcomid": '2_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row') ? _c('div', {
        staticClass: "book-title-wrapper book-title-row"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('div', {
        staticClass: "book-title-wrapper book-title-col"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-author"
      }, [_vm._v("\n              " + _vm._s(book.author) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-cate"
      }, [_vm._v("\n              " + _vm._s(book.categoryText) + "\n            ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.Mode === 'cate') ? _c('div', {
        staticClass: "category-wrappper",
        attrs: {
          "eventid": '3_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.toTypeList(book)
          }
        }
      }, [_c('div', {
        staticClass: "cate-text"
      }, [_vm._v(_vm._s(book.text))]), _vm._v(" "), _c('div', {
        staticClass: "cate-num"
      }, [_vm._v(_vm._s(book.num) + "本书")]), _vm._v(" "), _c('div', {
        staticClass: "image-wrapper"
      }, [_c('div', {
        staticClass: "img1"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover,
          "mpcomid": '3_' + index + '-' + index1
        }
      })], 1), _vm._v(" "), _c('div', {
        staticClass: "img2"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover2,
          "mpcomid": '4_' + index + '-' + index1
        }
      })], 1)])]) : _vm._e()])
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "home-book-footer"
  }, [_c('l-button', {
    attrs: {
      "shape": "semicircle",
      "color": "#ffffff",
      "height": "82",
      "size": "large",
      "plain": "true",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.onMoreclick
    }
  }, [_vm._v("查看全部")])], 1), _vm._v(" "), _c('view', {
    staticClass: "cu-tabbar-height"
  }, [_c('l-loadmore', {
    attrs: {
      "line": "true",
      "show": "true",
      "type": "end",
      "end-text": "我也是有底线的(end)",
      "mpcomid": '6'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c4bd7ad", esExports)
  }
}

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookF_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c761e30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookF_vue__ = __webpack_require__(237);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c761e30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookF_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c761e30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookF_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\HomebookF.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomebookF.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c761e30", Component.options)
  } else {
    hotAPI.reload("data-v-0c761e30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(6);
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
  name: '',
  props: {
    title: {
      type: String,
      default: '为你推荐'
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: '查看更多'
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    // 排版方式 row col cate
    mode: {
      type: String,
      default: 'cate'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      Mode: '',
      Col: 0
    };
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {
    colStyle: function colStyle() {
      if (this.col === 3) {
        return true;
      } else {
        return false;
      }
    },
    bookData: function bookData() {
      // 将数组数据结构转换成想要的数据结构(传入行列)
      if (this.data && this.data.length > 0) {
        this.data.forEach(function (item) {
          // 增加中文分类名属性
          item.text = __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* CATEGORY */][item.categoryText.toLowerCase()];
        });
        var number = this.row * this.col;
        var _bookdata = this.data.slice(0, number);
        var _BookDataByRow = [];
        var _row = 0;
        while (_row < this.row) {
          _BookDataByRow.push(_bookdata.slice(_row * this.col, _row * this.col + this.col));
          _row++;
        }
        return _BookDataByRow;
      } else {
        return [];
      }
    },
    linearStl: function linearStl() {
      if (this.Mode === 'row') {
        return 'background';
      } else {
        return '';
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.Mode = this.mode;
    this.Col = this.col;
  },


  methods: {
    onMoreclick: function onMoreclick() {
      this.$emit('onMoreclick');
    },
    ToDetail: function ToDetail(book) {
      this.$emit('ToDetail', book);
    },
    toTypeList: function toTypeList(book) {
      this.$router.push({
        path: '/pages/Booklist/main',
        query: {
          item: book.category,
          key: 'categoryId',
          title: book.categoryText
        }
      });
    }
  },

  watch: {}
});

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "homeBook",
    staticClass: "home-book",
    class: _vm.linearStl
  }, [_c('div', {
    staticClass: "home-book-header"
  }, [_vm._v("免费热读")]), _vm._v(" "), _c('div', {
    staticClass: "home-book-content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "home-book-row"
    }, _vm._l((item), function(book, index1) {
      return _c('div', {
        key: index1,
        staticClass: "home-book-col",
        style: ({
          flex: '0 0 ' + (100 / _vm.col) + '%'
        })
      }, [(_vm.Mode === 'row' || _vm.Mode === 'col') ? _c('div', {
        staticClass: "home-book-wrapper",
        style: ({
          flexDirection: _vm.Mode === 'col' ? 'row' : 'column'
        })
      }, [(_vm.Mode === 'row' && _vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "101",
          "height": "147",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '0_' + index + '-' + index1,
          "mpcomid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row' && !_vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "68",
          "height": "99",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '1_' + index + '-' + index1,
          "mpcomid": '1_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('van-image', {
        attrs: {
          "width": "64",
          "height": "88",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '2_' + index + '-' + index1,
          "mpcomid": '2_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row') ? _c('div', {
        staticClass: "book-title-wrapper book-title-row"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('div', {
        staticClass: "book-title-wrapper book-title-col"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-author"
      }, [_vm._v("\n              " + _vm._s(book.author) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-cate"
      }, [_vm._v("\n              " + _vm._s(book.categoryText) + "\n            ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.Mode === 'cate') ? _c('div', {
        staticClass: "category-wrappper",
        attrs: {
          "eventid": '3_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.toTypeList(book)
          }
        }
      }, [_c('div', {
        staticClass: "cate-text"
      }, [_vm._v(_vm._s(book.text))]), _vm._v(" "), _c('div', {
        staticClass: "cate-num"
      }, [_vm._v(_vm._s(book.num) + "本书")]), _vm._v(" "), _c('div', {
        staticClass: "image-wrapper"
      }, [_c('div', {
        staticClass: "img1"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover,
          "mpcomid": '3_' + index + '-' + index1
        }
      })], 1), _vm._v(" "), _c('div', {
        staticClass: "img2"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover2,
          "mpcomid": '4_' + index + '-' + index1
        }
      })], 1)])]) : _vm._e()])
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "home-book-footer"
  }, [_c('l-button', {
    attrs: {
      "shape": "semicircle",
      "color": "#ffffff",
      "height": "82",
      "size": "large",
      "plain": "true",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.onMoreclick
    }
  }, [_vm._v("换一批")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c761e30", esExports)
  }
}

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookH_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c924d32_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookH_vue__ = __webpack_require__(241);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(239)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c924d32"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookH_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c924d32_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookH_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\HomebookH.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomebookH.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c924d32", Component.options)
  } else {
    hotAPI.reload("data-v-0c924d32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(6);
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
  name: '',
  props: {
    title: {
      type: String,
      default: '为你推荐'
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: '查看更多'
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    // 排版方式 row col cate
    mode: {
      type: String,
      default: 'cate'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      Mode: '',
      Col: 0
    };
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {
    colStyle: function colStyle() {
      if (this.col === 3) {
        return true;
      } else {
        return false;
      }
    },
    bookData: function bookData() {
      // 将数组数据结构转换成想要的数据结构(传入行列)
      if (this.data && this.data.length > 0) {
        this.data.forEach(function (item) {
          // 增加中文分类名属性
          item.text = __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* CATEGORY */][item.categoryText.toLowerCase()];
        });
        var number = this.row * this.col;
        var _bookdata = this.data.slice(0, number);
        var _BookDataByRow = [];
        var _row = 0;
        while (_row < this.row) {
          _BookDataByRow.push(_bookdata.slice(_row * this.col, _row * this.col + this.col));
          _row++;
        }
        return _BookDataByRow;
      } else {
        return [];
      }
    },
    linearStl: function linearStl() {
      if (this.Mode === 'row') {
        return 'background';
      } else {
        return '';
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.Mode = this.mode;
    this.Col = this.col;
  },


  methods: {
    onMoreclick: function onMoreclick() {
      this.$emit('onMoreclick');
    },
    ToDetail: function ToDetail(book) {
      this.$emit('ToDetail', book);
    },
    toTypeList: function toTypeList(book) {
      this.$router.push({
        path: '/pages/Booklist/main',
        query: {
          item: book.category,
          key: 'categoryId',
          title: book.categoryText
        }
      });
    }
  },

  watch: {}
});

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "homeBook",
    staticClass: "home-book",
    class: _vm.linearStl
  }, [_c('div', {
    staticClass: "home-book-header"
  }, [_vm._v("当前最热")]), _vm._v(" "), _c('div', {
    staticClass: "home-book-content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "home-book-row"
    }, _vm._l((item), function(book, index1) {
      return _c('div', {
        key: index1,
        staticClass: "home-book-col",
        style: ({
          flex: '0 0 ' + (100 / _vm.col) + '%'
        })
      }, [(_vm.Mode === 'row' || _vm.Mode === 'col') ? _c('div', {
        staticClass: "home-book-wrapper",
        style: ({
          flexDirection: _vm.Mode === 'col' ? 'row' : 'column'
        })
      }, [(_vm.Mode === 'row' && _vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "101",
          "height": "147",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '0_' + index + '-' + index1,
          "mpcomid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row' && !_vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "68",
          "height": "99",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '1_' + index + '-' + index1,
          "mpcomid": '1_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('van-image', {
        attrs: {
          "width": "64",
          "height": "88",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '2_' + index + '-' + index1,
          "mpcomid": '2_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row') ? _c('div', {
        staticClass: "book-title-wrapper book-title-row"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('div', {
        staticClass: "book-title-wrapper book-title-col"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-author"
      }, [_vm._v("\n              " + _vm._s(book.author) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-cate"
      }, [_vm._v("\n              " + _vm._s(book.categoryText) + "\n            ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.Mode === 'cate') ? _c('div', {
        staticClass: "category-wrappper",
        attrs: {
          "eventid": '3_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.toTypeList(book)
          }
        }
      }, [_c('div', {
        staticClass: "cate-text"
      }, [_vm._v(_vm._s(book.text))]), _vm._v(" "), _c('div', {
        staticClass: "cate-num"
      }, [_vm._v(_vm._s(book.num) + "本书")]), _vm._v(" "), _c('div', {
        staticClass: "image-wrapper"
      }, [_c('div', {
        staticClass: "img1"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover,
          "mpcomid": '3_' + index + '-' + index1
        }
      })], 1), _vm._v(" "), _c('div', {
        staticClass: "img2"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover2,
          "mpcomid": '4_' + index + '-' + index1
        }
      })], 1)])]) : _vm._e()])
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "home-book-footer"
  }, [_c('l-button', {
    attrs: {
      "shape": "semicircle",
      "color": "#ffffff",
      "height": "82",
      "size": "large",
      "plain": "true",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.onMoreclick
    }
  }, [_vm._v("换一批")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c924d32", esExports)
  }
}

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookR_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d1f383c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookR_vue__ = __webpack_require__(245);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d1f383c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HomebookR_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d1f383c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_HomebookR_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\HomebookR.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomebookR.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d1f383c", Component.options)
  } else {
    hotAPI.reload("data-v-0d1f383c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 243:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(6);
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
  name: '',
  props: {
    title: {
      type: String,
      default: '为你推荐'
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: '查看更多'
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    // 排版方式 row col cate
    mode: {
      type: String,
      default: 'cate'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      Mode: '',
      Col: 0
    };
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__components_base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {
    colStyle: function colStyle() {
      if (this.col === 3) {
        return true;
      } else {
        return false;
      }
    },
    bookData: function bookData() {
      // 将数组数据结构转换成想要的数据结构(传入行列)
      if (this.data && this.data.length > 0) {
        this.data.forEach(function (item) {
          // 增加中文分类名属性
          item.text = __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* CATEGORY */][item.categoryText.toLowerCase()];
        });
        var number = this.row * this.col;
        var _bookdata = this.data.slice(0, number);
        var _BookDataByRow = [];
        var _row = 0;
        while (_row < this.row) {
          _BookDataByRow.push(_bookdata.slice(_row * this.col, _row * this.col + this.col));
          _row++;
        }
        return _BookDataByRow;
      } else {
        return [];
      }
    },
    linearStl: function linearStl() {
      if (this.Mode === 'row') {
        return 'background';
      } else {
        return '';
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.Mode = this.mode;
    this.Col = this.col;
  },


  methods: {
    onMoreclick: function onMoreclick() {
      this.$emit('onMoreclick');
    },
    ToDetail: function ToDetail(book) {
      this.$emit('ToDetail', book);
    },
    toTypeList: function toTypeList(book) {
      this.$router.push({
        path: '/pages/Booklist/main',
        query: {
          item: book.category,
          key: 'categoryId',
          title: book.categoryText
        }
      });
    }
  },

  watch: {}
});

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "homeBook",
    staticClass: "home-book",
    class: _vm.linearStl
  }, [_c('div', {
    staticClass: "home-book-header"
  }, [_vm._v("为你推荐")]), _vm._v(" "), _c('div', {
    staticClass: "home-book-content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "home-book-row"
    }, _vm._l((item), function(book, index1) {
      return _c('div', {
        key: index1,
        staticClass: "home-book-col",
        style: ({
          flex: '0 0 ' + (100 / _vm.col) + '%'
        })
      }, [(_vm.Mode === 'row' || _vm.Mode === 'col') ? _c('div', {
        staticClass: "home-book-wrapper",
        style: ({
          flexDirection: _vm.Mode === 'col' ? 'row' : 'column'
        })
      }, [(_vm.Mode === 'row' && _vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "101",
          "height": "147",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '0_' + index + '-' + index1,
          "mpcomid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row' && !_vm.colStyle) ? _c('van-image', {
        attrs: {
          "width": "68",
          "height": "99",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '1_' + index + '-' + index1,
          "mpcomid": '1_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('van-image', {
        attrs: {
          "width": "64",
          "height": "88",
          "fit": "cover",
          "lazy-load": "",
          "src": book.cover,
          "eventid": '2_' + index + '-' + index1,
          "mpcomid": '2_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.ToDetail(book)
          }
        }
      }) : _vm._e(), _vm._v(" "), (_vm.Mode === 'row') ? _c('div', {
        staticClass: "book-title-wrapper book-title-row"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.Mode === 'col') ? _c('div', {
        staticClass: "book-title-wrapper book-title-col"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("\n              " + _vm._s(book.title) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-author"
      }, [_vm._v("\n              " + _vm._s(book.author) + "\n            ")]), _vm._v(" "), _c('div', {
        staticClass: "book-cate"
      }, [_vm._v("\n              " + _vm._s(book.categoryText) + "\n            ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.Mode === 'cate') ? _c('div', {
        staticClass: "category-wrappper",
        attrs: {
          "eventid": '3_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.toTypeList(book)
          }
        }
      }, [_c('div', {
        staticClass: "cate-text"
      }, [_vm._v(_vm._s(book.text))]), _vm._v(" "), _c('div', {
        staticClass: "cate-num"
      }, [_vm._v(_vm._s(book.num) + "本书")]), _vm._v(" "), _c('div', {
        staticClass: "image-wrapper"
      }, [_c('div', {
        staticClass: "img1"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover,
          "mpcomid": '3_' + index + '-' + index1
        }
      })], 1), _vm._v(" "), _c('div', {
        staticClass: "img2"
      }, [_c('imageview', {
        attrs: {
          "src": book.cover2,
          "mpcomid": '4_' + index + '-' + index1
        }
      })], 1)])]) : _vm._e()])
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "home-book-footer"
  }, [_c('l-button', {
    attrs: {
      "shape": "semicircle",
      "color": "#ffffff",
      "height": "82",
      "size": "large",
      "plain": "true",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.onMoreclick
    }
  }, [_vm._v("换一批")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d1f383c", esExports)
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "home",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.showMessage
    }
  }, [_c('div', {
    staticClass: "top"
  }, [(!_vm.currentSong.id) ? _c('div', {
    staticClass: "muisc-pic"
  }, [_c('van-image', {
    attrs: {
      "width": "50",
      "height": "50",
      "fit": "cover",
      "round": "",
      "lazy-load": "",
      "src": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.ToPlayer
    }
  })], 1) : _c('div', {
    staticClass: "muisc-pic"
  }, [_c('van-image', {
    attrs: {
      "width": "50",
      "height": "50",
      "fit": "cover",
      "round": "",
      "lazy-load": "",
      "src": _vm.currentSong.picUrl,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.ToPlayer
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "search"
  }, [_c('searchBox', {
    attrs: {
      "showbtn": false,
      "hotSearch": _vm.hotsearch,
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "oncatchclick": _vm.Search
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "Homecard"
  }, [_c('Homecard', {
    attrs: {
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "Bookdetail": _vm.changeTodetail
    }
  })], 1), _vm._v(" "), _c('Homebanner', {
    attrs: {
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "book-wrapper"
  }, [_c('HomebookR', {
    attrs: {
      "linearBg": "",
      "mode": "row",
      "row": 1,
      "col": 3,
      "data": _vm.recommend,
      "btnText": "换一批",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "ToDetail": _vm.Todetail,
      "onMoreclick": function($event) {
        _vm.LoadingMore('recommend')
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "book-wrapper"
  }, [_c('HomebookF', {
    attrs: {
      "mode": "col",
      "row": 2,
      "col": 2,
      "data": _vm.freeread,
      "btnText": "换一批",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "ToDetail": _vm.Todetail,
      "onMoreclick": function($event) {
        _vm.LoadingMore('freeRead')
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "book-wrapper"
  }, [_c('HomebookH', {
    attrs: {
      "mode": "row",
      "row": 1,
      "col": 4,
      "data": _vm.hotBook,
      "btnText": "换一批",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "ToDetail": _vm.Todetail,
      "onMoreclick": function($event) {
        _vm.LoadingMore('hotRead')
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "book-wrapper"
  }, [_c('HomebookC', {
    attrs: {
      "row": 3,
      "col": 2,
      "data": _vm.category,
      "btnText": "查看全部",
      "eventid": '7',
      "mpcomid": '8'
    },
    on: {
      "onMoreclick": _vm.Totype
    }
  })], 1)], 1), _vm._v(" "), (!_vm.recommend.length > 0 && !_vm.freeread.length > 0 && !_vm.hotBook.length > 0 && !_vm.category.length > 0) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loading', {
    attrs: {
      "show": "true",
      "type": "flash",
      "size": "large",
      "mpcomid": '9'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '10'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21cf3d5a", esExports)
  }
}

/***/ })

},[203]);