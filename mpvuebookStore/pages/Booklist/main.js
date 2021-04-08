require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d6ed848_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d6ed848"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d6ed848_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Booklist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d6ed848", Component.options)
  } else {
    hotAPI.reload("data-v-2d6ed848", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index__ = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      booklist: [],
      page: 1,
      showLoading: false,
      showBottom: false

    };
  },


  components: {},
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.page = 1;
    this.getlist();
    console.log(this.$route.query.title);
  },
  onReachBottom: function onReachBottom() {
    var _this = this;

    this.page++;
    var _$route$query = this.$route.query,
        item = _$route$query.item,
        key = _$route$query.key;

    var params = {};
    var pageKey = 'page';
    if (item && key) {
      params[key] = item;
      params[pageKey] = this.page;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["f" /* getBooklist */])(params).then(function (res) {
      var data = res.data.data;

      if (data && data.length > 0) {
        var _booklist;

        (_booklist = _this.booklist).push.apply(_booklist, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(data));
        _this.showLoading = true;
        _this.showBottom = false;
      } else {
        _this.showBottom = true;
        _this.showLoading = false;
      }
    });
  },

  methods: {
    selectbook: function selectbook(item) {
      var fileName = item.fileName;

      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: fileName
        }
      });
    },
    getlist: function getlist() {
      var _this2 = this;

      var _$route$query2 = this.$route.query,
          item = _$route$query2.item,
          key = _$route$query2.key;

      var params = {};
      var pageKey = 'page';
      if (item && key) {
        params[key] = item;
        params[pageKey] = this.page;
      }
      Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["f" /* getBooklist */])(params).then(function (res) {
        _this2.booklist = res.data.data;
      });
    }
  },

  watch: {}

});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-list bg-white"
  }, [_c('div', {
    staticClass: "search-list-wrapper"
  }, _vm._l((_vm.booklist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "search-table",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectbook(item)
        }
      }
    }, [_c('div', {
      staticClass: "image-wrapper"
    }, [_c('van-image', {
      attrs: {
        "width": "47",
        "height": "68.5",
        "lazy-load": "",
        "fit": "cover",
        "src": item.cover,
        "mpcomid": '0_' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "book-desc"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "author"
    }, [_vm._v(_vm._s(item.author))]), _vm._v(" "), _c('div', {
      staticClass: "cate"
    }, [_vm._v(_vm._s(item.categoryText))])])])
  })), _vm._v(" "), (_vm.showLoading && _vm.booklist.length > 0) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loadmore', {
    attrs: {
      "line": "true",
      "color": "#3963bc",
      "show": "true",
      "type": "loading",
      "loading-text": "努力加载中",
      "mpcomid": '1'
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.showBottom && _vm.booklist.length > 0) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loadmore', {
    attrs: {
      "line": "true",
      "show": "true",
      "type": "end",
      "end-text": "我也是有底线的(end)",
      "mpcomid": '2'
    }
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d6ed848", esExports)
  }
}

/***/ })

},[101]);