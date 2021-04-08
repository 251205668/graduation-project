require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(248);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d9069276_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(255);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d9069276"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d9069276_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\log\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9069276", Component.options)
  } else {
    hotAPI.reload("data-v-d9069276", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_me_log__ = __webpack_require__(251);
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


  components: { log: __WEBPACK_IMPORTED_MODULE_0__components_me_log__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {},

  watch: {}

});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_log_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cdc11a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_log_vue__ = __webpack_require__(254);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cdc11a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_log_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cdc11a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_log_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\me\\log.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] log.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cdc11a2", Component.options)
  } else {
    hotAPI.reload("data-v-1cdc11a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 253:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  // todo: 关于页面 提示信息 修改颜色 调整高度 删除多余组件 上线
  components: {},
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {},

  watch: {}

});

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "cu-timeline"
  }, [_c('view', {
    staticClass: "cu-item text-cyan"
  }, [_c('view', {
    staticClass: "bg-cyan content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-green"
  }, [_vm._v("v1.0.1")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2020-2-15")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("1.首页搜索栏")]), _vm._v(" "), _c('view', [_vm._v("2.首页免费阅读,换一批")]), _vm._v(" "), _c('view', [_vm._v("3.首页读书卡片")]), _vm._v(" "), _c('view', [_vm._v("4.热门推荐,换一批")]), _vm._v(" "), _c('view', [_vm._v("5.当前最热,换一批")]), _vm._v(" "), _c('view', [_vm._v("6.搜索:分类,作者,出版社,搜索书单列表")]), _vm._v(" "), _c('view', [_vm._v("7.热搜词搜索 历史记录清空")]), _vm._v(" "), _c('view', [_vm._v("8.触底 上拉加载")]), _vm._v(" "), _c('view', [_vm._v("9.收藏图书,移除图书出书架")]), _vm._v(" "), _c('view', [_vm._v("10.图书阅读敬请期待")]), _vm._v(" "), _c('view', [_vm._v("11.更多实用好玩功能敬请期待")])])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item text-blue"
  }, [_c('view', {
    staticClass: "bg-blue content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-blue"
  }, [_vm._v("v1.0.1")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2020-3-14")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("1.添加通知页面")]), _vm._v(" "), _c('view', [_vm._v("2.添加荣誉区 开发者页面")]), _vm._v(" "), _c('view', [_vm._v("3.添加首页头像图标")]), _vm._v(" "), _c('view', [_vm._v("即将上线:电子阅读器")]), _vm._v(" "), _c('view', [_vm._v("即将上线:音乐播放器")])])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item text-blue"
  }, [_c('view', {
    staticClass: "bg-blue content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-blue"
  }, [_vm._v("v1.0.4")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2020-3-16")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("1.增加音乐播放器")]), _vm._v(" "), _c('view', [_vm._v("2.首页导航添加音乐链接,可以直接播放音乐")]), _vm._v(" "), _c('view', [_vm._v("3.阅读器组件完善中")])])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item text-blue"
  }, [_c('view', {
    staticClass: "bg-blue content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-blue"
  }, [_vm._v("v1.0.5")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2020-3-18")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("1.阅读器组件体验版上线")]), _vm._v(" "), _c('view', [_vm._v("2.优化播放器组件")]), _vm._v(" "), _c('view', [_vm._v("3.添加教师入口页面")])])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item text-blue"
  }, [_c('view', {
    staticClass: "bg-blue content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-blue"
  }, [_vm._v("v1.0.6")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2020-7-05")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("修复音乐轮播无法跳转播放问题")])])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item text-blue"
  }, [_c('view', {
    staticClass: "bg-blue content shadow"
  }, [_c('view', {
    staticClass: "cu-capsule radius"
  }, [_c('view', {
    staticClass: "cu-tag bg-white text-blue"
  }, [_vm._v("v1.0.7")]), _vm._v(" "), _c('view', {
    staticClass: "cu-tag line-white"
  }, [_vm._v("2021-03-30")])]), _vm._v(" "), _c('view', {
    staticClass: "margin-top-sm text-content"
  }, [_c('view', [_vm._v("修复小程序接口问题，新功能即将上线")])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1cdc11a2", esExports)
  }
}

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('log', {
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
     require("vue-hot-reload-api").rerender("data-v-d9069276", esExports)
  }
}

/***/ })

},[247]);