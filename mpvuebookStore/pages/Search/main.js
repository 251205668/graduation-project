require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search__ = __webpack_require__(277);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__search__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58cf654d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__(300);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(278)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58cf654d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58cf654d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Search\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58cf654d", Component.options)
  } else {
    hotAPI.reload("data-v-58cf654d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 278:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_search_box_search_box__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Search_Taggroup__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Search_suggest__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_wechat__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vant_weapp_dist_dialog_dialog__ = __webpack_require__(21);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var HISTORY_KEY = '_HSITORY';
/* harmony default export */ __webpack_exports__["a"] = ({

  name: '',
  props: [''],
  data: function data() {
    return {
      hotkeys: [],
      searchlist: {},
      query: '',
      keyword: '',
      page: 1,
      history: [],
      focus: false,
      IsLoading: false,
      isBottom: false
    };
  },


  components: { searchbox: __WEBPACK_IMPORTED_MODULE_1__components_base_search_box_search_box__["a" /* default */], tagGroup: __WEBPACK_IMPORTED_MODULE_2__components_Search_Taggroup__["a" /* default */], suggest: __WEBPACK_IMPORTED_MODULE_4__components_Search_suggest__["a" /* default */] },
  created: function created() {
    this.list = [];
  },


  computed: {},
  onPageScroll: function onPageScroll() {
    if (!this.query) {
      return;
    }
    this.focus = false;
  },
  onReachBottom: function onReachBottom() {
    var _this = this;

    var keyword = this.$refs.box.getvalue();
    if (keyword) {
      console.log(this.IsLoading);
      this.page++;
      Object(__WEBPACK_IMPORTED_MODULE_3__api_index__["t" /* onSearch */])({
        keyword: keyword,
        openId: this.openId,
        page: this.page
      }).then(function (res) {
        var book = res.data.data.book;

        if (book && book.length > 0) {
          var _searchlist$book;

          (_searchlist$book = _this.searchlist.book).push.apply(_searchlist$book, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(book));
          _this.IsLoading = true;
          _this.isBottom = false;
        } else {
          _this.isBottom = true;
        }
      });
    }
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_5__api_wechat__["b" /* getStorageSync */])('openId');
    this.gethotKey();
    this.history = Object(__WEBPACK_IMPORTED_MODULE_5__api_wechat__["b" /* getStorageSync */])(HISTORY_KEY);
    this.query = '';
  },

  // todo: 4.阅读器跳转 5.书架开发 6.个人中心开发
  // error: 登录时需要点击两下按钮才能加载数据
  methods: {
    addInput: function addInput(item) {
      this.$refs.box.setvalue(item);
      this.query = item;
      this.search(item);
      this.focus = true;
    },
    todetail: function todetail(item) {
      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: item
        }
      });
    },
    clearHistory: function clearHistory() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_6_vant_weapp_dist_dialog_dialog__["a" /* default */].confirm({
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        message: '确定要清空历史记录吗'
      }).then(function () {
        _this2.history = '';
        Object(__WEBPACK_IMPORTED_MODULE_5__api_wechat__["d" /* setStorageSync */])(HISTORY_KEY, '');
      }).catch(function () {});
    },
    changeHotKey: function changeHotKey() {
      this.gethotKey();
    },
    gethotKey: function gethotKey() {
      var _this3 = this;

      Object(__WEBPACK_IMPORTED_MODULE_3__api_index__["h" /* getHotKey */])().then(function (res) {
        _this3.hotkeys = res.data.data;
      });
    },
    searchbegin: function searchbegin(keyword) {
      this.query = keyword;
      if (!keyword || keyword.trim().length === 0) {
        this.searchList = null;
        return;
      }
      this.search(keyword);
    },
    deletequery: function deletequery() {
      this.query = '';
    },
    search: function search(keyword) {
      var _this4 = this;

      Object(__WEBPACK_IMPORTED_MODULE_3__api_index__["t" /* onSearch */])({
        keyword: keyword,
        openId: this.openId,
        page: this.page
      }).then(function (res) {
        if (res && res.data && res.data.error_code === 0) {
          _this4.searchlist = res.data.data;
        }
      });
    },
    onConfirm: function onConfirm(keyword) {
      if (!keyword || keyword.trim().length === 0) {
        this.$refs.box.setvalue('computer');
        this.query = 'computer';
        this.search('computer');
      }
      if (!this.history.includes(keyword) && keyword !== '') {
        // 缓存
        console.log(keyword);
        this.list.push(keyword);
        this.history = this.list;
        Object(__WEBPACK_IMPORTED_MODULE_5__api_wechat__["d" /* setStorageSync */])(HISTORY_KEY, this.history);
      }
      this.search(keyword);
    }
  },

  watch: {}

});

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Taggroup_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd8d2a8c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Taggroup_vue__ = __webpack_require__(287);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bd8d2a8c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Taggroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd8d2a8c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Taggroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Search\\Taggroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Taggroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd8d2a8c", Component.options)
  } else {
    hotAPI.reload("data-v-bd8d2a8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_tag_tag__ = __webpack_require__(283);
//
//
//
//
//
//
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
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    value: {
      type: Object
    }
  },
  data: function data() {
    return {};
  },


  components: { tag: __WEBPACK_IMPORTED_MODULE_0__base_tag_tag__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {
    onTagClick: function onTagClick(item) {
      this.$emit('Tobookdetail', item);
    },
    onHistoryTagClick: function onHistoryTagClick(item) {
      this.$emit('addinput', item);
    },
    onBtnClick: function onBtnClick() {
      this.$emit('_handle');
    }
  },

  watch: {}

});

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tag_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_142c0a6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tag_vue__ = __webpack_require__(286);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-142c0a6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tag_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_142c0a6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tag_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\base\\tag\\tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142c0a6e", Component.options)
  } else {
    hotAPI.reload("data-v-142c0a6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 284:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: {
    text: {
      type: String,
      default: ''
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
    selectTag: function selectTag() {
      this.$emit('SelectTag');
    }
  },

  watch: {}

});

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tag-wrapper",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.selectTag
    }
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.text))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-142c0a6e", esExports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tag-group"
  }, [_c('div', {
    staticClass: "tag-group-header"
  }, [_c('div', {
    staticClass: "left-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "right-title",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onBtnClick
    }
  }, [_vm._v(_vm._s(_vm.btnText))])]), _vm._v(" "), _c('div', {
    staticClass: "tag-group-wrapper"
  }, _vm._l((_vm.value), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tag-item"
    }, [(item.title) ? _c('tag', {
      attrs: {
        "text": item.title,
        "eventid": '1_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "SelectTag": function($event) {
          _vm.onTagClick(item.fileName)
        }
      }
    }) : _vm._e(), _vm._v(" "), (!item.title) ? _c('tag', {
      attrs: {
        "text": item,
        "eventid": '2_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "SelectTag": function($event) {
          _vm.onHistoryTagClick(item)
        }
      }
    }) : _vm._e()], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd8d2a8c", esExports)
  }
}

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_suggest_vue__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fc496dc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_suggest_vue__ = __webpack_require__(299);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(289)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fc496dc2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_suggest_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fc496dc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_suggest_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Search\\suggest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] suggest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc496dc2", Component.options)
  } else {
    hotAPI.reload("data-v-fc496dc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Search_searchitem__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search_searchlist__ = __webpack_require__(295);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: Object
  },
  data: function data() {
    return {};
  },


  components: { searchItem: __WEBPACK_IMPORTED_MODULE_0__Search_searchitem__["a" /* default */], searchList: __WEBPACK_IMPORTED_MODULE_1__Search_searchlist__["a" /* default */] },
  created: function created() {},


  computed: {
    category: function category() {
      if (this.data && this.data.category && this.data.category.length > 0) {
        return this.data.category[0].categoryText;
      } else {
        return null;
      }
    },
    author: function author() {
      if (this.data && this.data.author && this.data.author.length > 0) {
        return this.data.author[0].author;
      } else {
        return null;
      }
    },
    publisher: function publisher() {
      if (this.data && this.data.publisher && this.data.publisher.length > 0) {
        return this.data.publisher[0].publisher;
      } else {
        return null;
      }
    },
    list: function list() {
      if (this.data && this.data.book && this.data.book.length > 0) {
        return this.data.book;
      } else {
        return null;
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {
    showList: function showList(item, key) {
      this.$router.push({
        path: '/pages/Booklist/main',
        query: {
          item: item,
          key: key,
          title: item
        }
      });
    },
    showBook: function showBook(book) {
      var fileName = book.fileName;

      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: fileName
        }
      });
    }
  },

  watch: {}

});

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchitem_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7834ddf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchitem_vue__ = __webpack_require__(294);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7834ddf0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchitem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7834ddf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchitem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Search\\searchitem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] searchitem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7834ddf0", Component.options)
  } else {
    hotAPI.reload("data-v-7834ddf0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 293:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: {
    title: String,
    subTitle: String,
    icon: String
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
    onClick: function onClick() {
      this.$emit('selectItem');
    }
  },

  watch: {}

});

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "search-icon"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('l-icon', {
    attrs: {
      "name": _vm.icon,
      "color": "rgba(0,0,0,.5)",
      "size": "40",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v(_vm._s(_vm.subTitle))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7834ddf0", esExports)
  }
}

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchlist_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb8b540a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchlist_vue__ = __webpack_require__(298);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fb8b540a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_searchlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb8b540a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_searchlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Search\\searchlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] searchlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb8b540a", Component.options)
  } else {
    hotAPI.reload("data-v-fb8b540a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_image_view_image_view__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: { type: Array }
  },
  data: function data() {
    return {};
  },


  components: { imageView: __WEBPACK_IMPORTED_MODULE_0__base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {
    selectbook: function selectbook(item) {
      this.$emit('selectBook', item);
    }
  },

  watch: {}

});

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-list"
  }, [_c('div', {
    staticClass: "search-list-wrapper"
  }, _vm._l((_vm.data), function(item, index) {
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
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb8b540a", esExports)
  }
}

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suggest"
  }, [(_vm.category) ? _c('searchItem', {
    attrs: {
      "icon": "order",
      "title": _vm.category,
      "sub-title": "category",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "selectItem": function($event) {
        _vm.showList(_vm.category, 'category')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.author) ? _c('searchItem', {
    attrs: {
      "icon": "user",
      "title": _vm.author,
      "sub-title": "author",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "selectItem": function($event) {
        _vm.showList(_vm.author, 'author')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.publisher) ? _c('searchItem', {
    attrs: {
      "icon": "address",
      "title": _vm.publisher,
      "sub-title": "publisher",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "selectItem": function($event) {
        _vm.showList(_vm.publisher, 'publisher')
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "list-wrapper"
  }, [(_vm.list) ? _c('searchList', {
    attrs: {
      "data": _vm.list,
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "selectBook": _vm.showBook
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc496dc2", esExports)
  }
}

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search bg-white"
  }, [_c('searchbox', {
    ref: "box",
    attrs: {
      "focus": _vm.focus,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "confirm": _vm.onConfirm,
      "deleted": _vm.deletequery,
      "onChange": _vm.searchbegin
    }
  }), _vm._v(" "), (_vm.hotkeys.length > 0 && !_vm.query) ? _c('div', {
    staticClass: "tagGroup-wrapper"
  }, [_c('tagGroup', {
    attrs: {
      "title": "热门搜索",
      "btnText": "换一批",
      "value": _vm.hotkeys,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "Tobookdetail": _vm.todetail,
      "_handle": _vm.changeHotKey
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.query) ? _c('div', {
    staticClass: "tagGroup-wrapper"
  }, [_c('tagGroup', {
    attrs: {
      "title": "历史搜索",
      "btnText": "清空",
      "value": _vm.history,
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "addinput": _vm.addInput,
      "_handle": _vm.clearHistory
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.query && _vm.searchlist) ? _c('suggest', {
    attrs: {
      "data": _vm.searchlist,
      "mpcomid": '3'
    }
  }) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '4'
    }
  }), _vm._v(" "), (_vm.IsLoading && _vm.searchlist && _vm.searchlist.book.length > 0) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loadmore', {
    attrs: {
      "line": "true",
      "color": "#3963bc",
      "show": "true",
      "type": "loading",
      "loading-text": "努力加载中",
      "mpcomid": '5'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.hotkeys),
      expression: "!hotkeys"
    }],
    staticClass: "full-load"
  }, [_c('l-loading', {
    attrs: {
      "type": "flip",
      "size": "large",
      "bg-color": "#fff",
      "z-index": "2000",
      "show": "true",
      "full-screen": "true",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), (_vm.isBottom && _vm.searchlist && _vm.searchlist.book.length > 0) ? _c('div', {
    staticClass: "loading"
  }, [_c('l-loadmore', {
    attrs: {
      "line": "true",
      "show": "true",
      "type": "end",
      "end-text": "我也是有底线的(end)",
      "mpcomid": '7'
    }
  })], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58cf654d", esExports)
  }
}

/***/ })

},[276]);