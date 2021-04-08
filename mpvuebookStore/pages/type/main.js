require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(328);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6914f12f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(339);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(329)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6914f12f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6914f12f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\type\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6914f12f", Component.options)
  } else {
    hotAPI.reload("data-v-6914f12f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_classify_classify__ = __webpack_require__(331);
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


  components: { classify: __WEBPACK_IMPORTED_MODULE_0__components_classify_classify__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {},

  watch: {}

});

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_classify_vue__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_655005bd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_classify_vue__ = __webpack_require__(338);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(332)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-655005bd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_classify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_655005bd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_classify_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\classify\\classify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] classify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-655005bd", Component.options)
  } else {
    hotAPI.reload("data-v-655005bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 332:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_Homebook__ = __webpack_require__(334);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: [''],
  data: function data() {
    return {
      category: []
    };
  },

  components: { Homebook: __WEBPACK_IMPORTED_MODULE_0__Home_Homebook__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  onLoad: function onLoad() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["m" /* getcatalogueList */])().then(function (res) {
      _this.category = res.data.data;
    });
  },


  methods: {},

  watch: {}

});

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homebook_vue__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4aafa206_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homebook_vue__ = __webpack_require__(337);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(335)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4aafa206"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Homebook_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4aafa206_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Homebook_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Home\\Homebook.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Homebook.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aafa206", Component.options)
  } else {
    hotAPI.reload("data-v-4aafa206", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 336:
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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "homeBook",
    staticClass: "home-book",
    class: _vm.linearStl
  }, [(_vm.showTitle) ? _c('div', {
    staticClass: "home-book-header"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
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
  })), _vm._v(" "), (_vm.showBtn) ? _c('div', {
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
  }, [_vm._v(_vm._s(_vm.btnText))])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4aafa206", esExports)
  }
}

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "type"
  }, [_c('div', {
    staticClass: "homebook"
  }, [_c('Homebook', {
    attrs: {
      "row": _vm.category.length / 2,
      "col": 2,
      "data": _vm.category,
      "showTitle": false,
      "showBtn": false,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), (!_vm.category.length) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loading', {
    attrs: {
      "show": "true",
      "full-screen": "true",
      "size": "large",
      "type": "change",
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-655005bd", esExports)
  }
}

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('classify', {
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
     require("vue-hot-reload-api").rerender("data-v-6914f12f", esExports)
  }
}

/***/ })

},[327]);