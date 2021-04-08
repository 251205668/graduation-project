require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(79);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dff2364_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(86);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dff2364"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dff2364_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\about\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dff2364", Component.options)
  } else {
    hotAPI.reload("data-v-1dff2364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_me_guanyu__ = __webpack_require__(82);
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
    return {};
  },


  components: { about: __WEBPACK_IMPORTED_MODULE_0__components_me_guanyu__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {},

  watch: {}

});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_guanyu_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ca680dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_guanyu_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ca680dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_guanyu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ca680dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_guanyu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\me\\guanyu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guanyu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ca680dc", Component.options)
  } else {
    hotAPI.reload("data-v-4ca680dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: [''],
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "background",
    attrs: {
      "src": "https://cdn.nlark.com/yuque/0/2019/jpeg/280373/1551799188571-assets/web-upload/9d73921e-c4e4-4231-a07a-4caca0d26b64.jpeg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": "https://i.loli.net/2020/02/17/qKnZz13REVmvP6x.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "cu-bar justify-center bg-white"
  }, [_c('view', {
    staticClass: "action sub-title"
  }, [_c('text', {
    staticClass: "text-xl text-bold text-blue"
  }, [_vm._v("简介")]), _vm._v(" "), _c('text', {
    staticClass: "text-ABC text-blue"
  }, [_vm._v("about")])])]), _vm._v(" "), _c('view', {
    staticClass: "margin-xl bg-white padding-xl radius shadow-lg"
  }, [_c('view', {
    staticClass: "text-center margin-bottom text-lg  text-grey"
  }, [_vm._v("关于悦读ECUT")]), _vm._v(" "), _c('view', {
    staticClass: "text-content"
  }, [_c('view', [_vm._v("Hi！欢迎使用悦读ECUT！")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("该项目是我(杨志豪)在20年1月份开发出来的一款书城小程序，它集成了vant-weapp color-ui lin-ui多个优秀的组件库 采用的是mpvue开发多端小程序框架(加部分原生小程API)开发的，由衷感谢这些ui框架和mpvue框架")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("项目需要您绑定一下账号授权,不然书架和阅读功能可能无法使用")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("小程序是免费的，不收取任何费用，如果这个书城有帮到你，或者你觉得很赞，可以在GitHub里扫描赞赏码支持一下！")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("书城包含了首页,推荐,轮播,免费热读,热门更新,图书分类,图书搜索,图书列表,书架，播放音乐等功能")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("合作微信:Ynulinulizainuli0918")]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm"
  }, [_vm._v("更多好玩的功能敬请期待！")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ca680dc", esExports)
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('about', {
    attrs: {
      "mpcomid": '0'
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
     require("vue-hot-reload-api").rerender("data-v-1dff2364", esExports)
  }
}

/***/ })

},[78]);