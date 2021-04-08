require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(145);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dbbdb06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(165);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dbbdb06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dbbdb06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dbbdb06", Component.options)
  } else {
    hotAPI.reload("data-v-4dbbdb06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_dialog_dialog__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_detail_detail_desc_detail_desc__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_detail_detail_count_detail_count__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_detail_detail_bottom_detail_bottom__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_wechat__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_detail_detail_catalogue_detail_catalogue__ = __webpack_require__(161);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: [''],
  data: function data() {
    return {
      data: {},
      readers: [],
      readerNum: 0,
      rankNum: 0,
      rankAvg: 0,
      rateValue: 0,
      contents: [],
      isOnShelf: false,
      title: ''
    };
  },


  components: { detailDesc: __WEBPACK_IMPORTED_MODULE_1__components_detail_detail_desc_detail_desc__["a" /* default */], detailCount: __WEBPACK_IMPORTED_MODULE_2__components_detail_detail_count_detail_count__["a" /* default */], detailContent: __WEBPACK_IMPORTED_MODULE_6__components_detail_detail_catalogue_detail_catalogue__["a" /* default */], detailBottom: __WEBPACK_IMPORTED_MODULE_3__components_detail_detail_bottom_detail_bottom__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  onShow: function onShow() {
    var _this = this;

    this.openId = Object(__WEBPACK_IMPORTED_MODULE_5__api_wechat__["b" /* getStorageSync */])('openId');
    this.getDetail();
    this.getBookIsInShelf();
    Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["d" /* getBookContents */])({
      fileName: this.$route.query.fileName
    }).then(function (res) {
      _this.contents = res.data.data;
    });
  },

  methods: {
    getDetail: function getDetail() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["e" /* getBookDeatil */])({
        fileName: this.$route.query.fileName,
        openId: this.openId
      }).then(function (res) {
        _this2.readers = res.data.data.readers;
        var _res$data$data = res.data.data,
            readerNum = _res$data$data.readerNum,
            rankNum = _res$data$data.rankNum,
            rankAvg = _res$data$data.rankAvg,
            title = _res$data$data.title;

        _this2.data = res.data.data;
        _this2.title = title;
        _this2.readerNum = readerNum;
        _this2.rankNum = rankNum;
        _this2.rankAvg = rankAvg;
      }).catch(function () {});
    },
    hanlderate: function hanlderate(value) {
      var _this3 = this;

      this.rateValue = value;
      Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* Rate */])({
        fileName: this.$route.query.fileName,
        openId: this.openId,
        rank: value
      }).then(function () {
        _this3.getDetail();
      });
    },
    getBookIsInShelf: function getBookIsInShelf() {
      var _this4 = this;

      Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["k" /* getShellInfo */])({
        fileName: this.$route.query.fileName,
        openId: this.openId
      }).then(function (res) {
        var data = res.data.data;

        if (data.length === 0) {
          _this4.isOnShelf = false;
        } else {
          _this4.isOnShelf = true;
        }
      });
    },
    handleshelf: function handleshelf() {
      var _this5 = this;

      if (!this.isOnShelf) {
        Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["b" /* addBookToShell */])({
          fileName: this.$route.query.fileName,
          openId: this.openId
        }).then(function () {
          _this5.getBookIsInShelf();
        });
        global.mpvue.lin.showMessage({
          type: 'success',
          content: '加入书架成功'
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_dialog_dialog__["a" /* default */].confirm({
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          message: '确定将这本书移出书架吗'
        }).then(function () {
          Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["c" /* deleteBookFromShell */])({
            fileName: _this5.$route.query.fileName,
            openId: _this5.openId
          }).then(function () {
            _this5.getBookIsInShelf();
          });
          global.mpvue.lin.showMessage({
            type: 'error',
            content: '书籍已从书架移除'
          });
        }).catch(function () {});
      }
    },
    readBook: function readBook() {
      var filename = this.$route.query.fileName;
      this.$router.push({
        path: '/pages/book/main',
        query: {
          fileName: filename,
          title: this.title
        }
      });
    }
  },

  watch: {}

});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_desc_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7773fd2f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_desc_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7773fd2f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_desc_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7773fd2f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_desc_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\detail\\detail-desc\\detail-desc.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail-desc.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7773fd2f", Component.options)
  } else {
    hotAPI.reload("data-v-7773fd2f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
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
    book: {
      type: Object
    }
  },
  data: function data() {
    return {};
  },


  components: {},
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {},

  watch: {}

});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-desc"
  }, [_c('div', {
    staticClass: "img-wrapper"
  }, [_c('van-image', {
    attrs: {
      "width": "108",
      "height": "157",
      "src": _vm.book.cover,
      "lazy-load": "",
      "fit": "cover",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.book.title))]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.book.author))]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v(_vm._s(_vm.book.categoryText))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7773fd2f", esExports)
  }
}

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_count_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2fd9aa9a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_count_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2fd9aa9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_count_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2fd9aa9a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_count_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\detail\\detail-count\\detail-count.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail-count.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fd9aa9a", Component.options)
  } else {
    hotAPI.reload("data-v-2fd9aa9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    reader: {
      type: Array
    },
    readerNum: {
      type: Number,
      default: 0
    },
    rankNum: {
      type: Number,
      default: 0
    },
    rankAvg: {
      type: Number,
      default: 0
    },
    rateValue: {
      type: Number
    }
  },
  data: function data() {
    return {};
  },


  components: {},
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    console.log(this.reader);
  },


  methods: {
    onRateChange: function onRateChange(e) {
      this.$emit('rate', e.mp.detail);
    }
  },

  watch: {}
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-count"
  }, [_c('div', {
    staticClass: "book-info"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    staticClass: "stars-score"
  }, [_c('div', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.rankAvg))]), _vm._v(" "), _c('div', {
    staticClass: "rate"
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.rankAvg,
      "size": 16,
      "color": "#e74c3c",
      "void-color": "#DEE0E2",
      "void-icon": "star",
      "readonly": "true",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "components"
  }, [_vm._v("\n        " + _vm._s(_vm.rankNum) + "人点评\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "readBook-count"
  }, [_c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.readerNum))]), _c('span', {
    staticClass: "text"
  }, [_vm._v("人在此读书")])]), _vm._v(" "), _c('div', {
    staticClass: "avatar-group"
  }, _vm._l((_vm.reader), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "readers-avatar"
    }, [_c('van-image', {
      attrs: {
        "round": "",
        "lazy-load": "",
        "width": "20",
        "height": "20",
        "fit": "cover",
        "src": item.avatarUrl,
        "mpcomid": '1_' + index
      }
    })], 1)
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "touch-rate"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("轻点评分")]), _vm._v(" "), _c('div', {
    staticClass: "rate-wrapper"
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.rateValue,
      "size": 25,
      "color": "#1D89EE",
      "void-color": "#DEE0E2",
      "void-icon": "star",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.onRateChange
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fd9aa9a", esExports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_bottom_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_513bf963_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_bottom_vue__ = __webpack_require__(160);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-513bf963"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_bottom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_513bf963_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_bottom_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\detail\\detail-bottom\\detail-bottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail-bottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-513bf963", Component.options)
  } else {
    hotAPI.reload("data-v-513bf963", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
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
    isInShelf: {
      type: Boolean
    }
  },
  data: function data() {
    return {};
  },


  components: {},
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {
    hanldeShelf: function hanldeShelf() {
      this.$emit('hanldeShelf');
    },
    readBook: function readBook() {
      this.$emit('readbook');
    }
  },

  watch: {}

});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-bottom"
  }, [_c('div', {
    staticClass: "btn-wrapper"
  }, [_c('l-button', {
    attrs: {
      "width": "320",
      "height": "80",
      "l-class": _vm.isInShelf ? 'Notexit' : 'exit',
      "shape": "circle",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.hanldeShelf
    }
  }, [_vm._v("\n     " + _vm._s(_vm.isInShelf ? '移除书架' : '加入书架') + "\n     ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-wrapper"
  }, [_c('l-button', {
    attrs: {
      "width": "320",
      "height": "80",
      "l-class": "read",
      "shape": "circle",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.readBook
    }
  }, [_vm._v("立即阅读")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-513bf963", esExports)
  }
}

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_catalogue_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8402001a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_catalogue_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8402001a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_catalogue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8402001a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_catalogue_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\detail\\detail-catalogue\\detail-catalogue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail-catalogue.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8402001a", Component.options)
  } else {
    hotAPI.reload("data-v-8402001a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
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
  props: {
    contents: Array
  },
  methods: {
    readBook: function readBook(nav) {
      this.$emit('readBook', nav);
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.contents) ? _c('div', {
    staticClass: "detail-contents-wrapper"
  }, [_c('div', {
    staticClass: "detail-contents-title"
  }, [_vm._v("目录")]), _vm._v(" "), _vm._l((_vm.contents), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "detail-contents",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function () { return _vm.readBook(item.href); }
      }
    }, [_c('div', {
      staticClass: "detail-contents-label",
      style: ({
        marginLeft: (15 * item.level) + 'px'
      })
    }, [_vm._v("\n      " + _vm._s(item.label) + "\n    ")])])
  })], 2) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8402001a", esExports)
  }
}

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail bg-white"
  }, [_c('detailDesc', {
    attrs: {
      "book": _vm.data,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('detailCount', {
    attrs: {
      "data": _vm.data,
      "reader": this.readers,
      "readerNum": _vm.readerNum,
      "rankNum": _vm.rankNum,
      "rankAvg": _vm.rankAvg,
      "rateValue": _vm.rateValue,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "rate": _vm.hanlderate
    }
  }), _vm._v(" "), _c('detailContent', {
    attrs: {
      "contents": _vm.contents,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('detailBottom', {
    attrs: {
      "isInShelf": _vm.isOnShelf,
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "hanldeShelf": _vm.handleshelf,
      "readbook": _vm.readBook
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('l-message', {
    attrs: {
      "content": "content",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.readers.length || !_vm.contents.length),
      expression: "!readers.length || !contents.length"
    }],
    staticClass: "loading"
  }, [_c('l-loading', {
    attrs: {
      "type": "rotate",
      "bg-color": "#f3f3f3",
      "z-index": "900",
      "show": "true",
      "full-screen": "true",
      "mpcomid": '6'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dbbdb06", esExports)
  }
}

/***/ })

},[144]);