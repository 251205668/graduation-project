require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(257);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3fc4bee6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(268);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fc4bee6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3fc4bee6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\me\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fc4bee6", Component.options)
  } else {
    hotAPI.reload("data-v-3fc4bee6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 258:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_wechat__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_me_about__ = __webpack_require__(260);
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
      userInfo: []

    };
  },

  components: { about: __WEBPACK_IMPORTED_MODULE_1__components_me_about__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.userInfo = Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["b" /* getStorageSync */])('usnerInfo');
  },


  methods: {},

  watch: {}

});

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_about_vue__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4faea238_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_about_vue__ = __webpack_require__(267);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4faea238"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_about_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4faea238_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_about_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\me\\about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4faea238", Component.options)
  } else {
    hotAPI.reload("data-v-4faea238", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_wechat__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_weapp_dist_dialog_dialog__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_auth_auth__ = __webpack_require__(263);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInformation: {},
      Show: false,
      authLoginFlag: false,
      loginflag: false,
      showlog: true
    };
  },


  components: { auth: __WEBPACK_IMPORTED_MODULE_3__components_base_auth_auth__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  onShow: function onShow() {
    this.IsLogined();
  },
  onLoad: function onLoad() {
    this.IsLogined();
  },

  methods: {
    onClose: function onClose() {
      this.showlog = false;
    },
    ToAbout: function ToAbout() {
      this.$router.push('/pages/about/main');
    },
    ToNotice: function ToNotice() {
      this.$router.push('/pages/attention/main');
    },
    Tolog: function Tolog() {
      this.$router.push('/pages/log/main');
    },
    ToFavoriate: function ToFavoriate() {
      this.$router.push('/pages/favor/main');
    },

    // 关注
    ToAttention: function ToAttention() {
      this.$router.push('/pages/guanzhu/main');
    },
    ToHonner: function ToHonner() {
      this.$router.push('/pages/honor/main');
    },
    showImage: function showImage() {
      this.$router.push('/pages/donate/main');
    },
    Toteacher: function Toteacher() {
      this.$router.push('/pages/teacher/main');
    },
    changeColor: function changeColor() {
      __WEBPACK_IMPORTED_MODULE_2_vant_weapp_dist_dialog_dialog__["a" /* default */].alert({
        message: '该功能开发中'
      }).then(function () {});
    },
    getUserInfo: function getUserInfo() {
      this.getUInfo();
    },
    getUInfo: function getUInfo() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["c" /* getUserInformation */])(function (userInfo) {
        setTimeout(function () {
          _this.showlog = false;
          _this.userInformation = Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["b" /* getStorageSync */])('usnerInfo');
          global.mpvue.lin.showToast({
            title: '登录成功',
            icon: 'success'
          });
        }, 50);
        Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["d" /* setStorageSync */])('usnerInfo', userInfo);
        var openId = Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["b" /* getStorageSync */])('openId');
        if (!openId || openId.length === 0) {
          Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["a" /* getOpenId */])();
        } else {
          // 已获得openid的回调执行
          Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["u" /* register */])(openId, userInfo);
        }
      }, function () {
        console.log('failed');
      });
    },
    IsLogined: function IsLogined() {
      var login = false;
      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["b" /* getStorageSync */])('openId');
      if (userInfo !== '') {
        login = false;
      } else {
        login = true;
      }
      this.showlog = login;
      // console.log(this.showlog)
      this.userInformation = Object(__WEBPACK_IMPORTED_MODULE_0__api_wechat__["b" /* getStorageSync */])('usnerInfo');
    }
  }

});

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_auth_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_62286cd3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_auth_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62286cd3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_auth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_62286cd3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_auth_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\base\\auth\\auth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62286cd3", Component.options)
  } else {
    hotAPI.reload("data-v-62286cd3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: [''],
  data: function data() {
    return {};
  },


  components: { imageview: __WEBPACK_IMPORTED_MODULE_0__base_image_view_image_view__["a" /* default */] },
  created: function created() {},


  computed: {},

  beforeMount: function beforeMount() {},
  mounted: function mounted() {},


  methods: {
    getUserInfo: function getUserInfo() {
      this.$emit('getUserInfo');
    },
    cancel: function cancel() {
      this.$emit('cancel');
    }
  },

  watch: {}

});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "auth"
  }, [_c('div', {
    staticClass: "dialog"
  }, [_c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "image-wrapper"
  }, [_c('imageview', {
    attrs: {
      "src": "https://i.loli.net/2020/02/07/6TiVX1GcpwE8tJv.jpg",
      "round": "",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("登陆东理悦读")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("更多好书等你阅读")])]), _vm._v(" "), _c('button', {
    staticClass: "login-button",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("授权登录")]), _vm._v(" "), _c('button', {
    staticClass: "cancel-button",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消登录")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62286cd3", esExports)
  }
}

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "scrollPage",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('view', {
    staticClass: "UCenter-bg"
  }, [_c('image', {
    staticClass: "png",
    attrs: {
      "src": "https://i.loli.net/2020/02/17/qKnZz13REVmvP6x.png",
      "mode": "widthFix"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "text-xl title"
  }, [_vm._v("东理悦读\n      "), _c('text', {
    staticClass: "text-df"
  }, [_vm._v("v1.0.6")])]), _vm._v(" "), _c('image', {
    staticClass: "gif-wave",
    attrs: {
      "src": "https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif",
      "mode": "scaleToFill"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "cu-list menu margin-bottom-xl shadow-lg radius"
  }, [(!_vm.showlog) ? _c('view', {
    staticClass: "cu-item"
  }, [_c('view', {
    staticClass: "content user"
  }, [_c('div', {
    ref: "avatar",
    staticClass: "cu-avatar radius lg avatar ",
    style: ({
      backgroundImage: 'url' + '(' + _vm.userInformation.avatarUrl + ')'
    })
  }, [_c('view', {
    staticClass: "cu-tag badge",
    class: _vm.userInformation.gender === 2 ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'
  })]), _vm._v(" "), _c('div', {
    staticClass: "userinfo"
  }, [_c('div', {
    staticClass: "userName"
  }, [_vm._v(_vm._s(_vm.userInformation.nickName))]), _vm._v(" "), _c('div', {
    staticClass: "desc text-grey"
  }, [_vm._v("阅读等级:书虫一枚")])])])]) : _vm._e(), _vm._v(" "), (_vm.showlog) ? _c('view', {
    staticClass: "us-item"
  }, [_c('view', {
    staticClass: "cu-bar btn-group"
  }, [_c('button', {
    staticClass: "cu-btn text-blue line-blue shadow",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("绑定账号")])], 1)]) : _vm._e(), _vm._v(" "), _c('l-toast', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius"
  }, [_c('view', {
    staticClass: "cu-item arrow",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.ToAbout
    }
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "cuIcon-info text-blue"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("关于")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.ToNotice
    }
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "cuIcon-notificationfill text-purple"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("通告")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.ToFavoriate
    }
  }, [_c('text', {
    staticClass: "cuIcon-favorfill text-red"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("个人收藏")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.Tolog
    }
  }, [_c('view', {
    staticClass: "content"
  }, [_c('text', {
    staticClass: "cuIcon-formfill text-cyan"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("日志")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.Toteacher
    }
  }, [_c('text', {
    staticClass: "cuIcon-profile text-blue"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("教师入口")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.ToAttention
    }
  }, [_c('text', {
    staticClass: "cuIcon-like text-pink"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("我的关注")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('button', {
    staticClass: "cu-btn content",
    attrs: {
      "open-type": "feedback"
    }
  }, [_c('text', {
    staticClass: "cuIcon-writefill text-orange"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("意见反馈")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.ToHonner
    }
  }, [_c('text', {
    staticClass: "cuIcon-upstage text-yellow"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("荣誉")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.showImage
    }
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "cuIcon-vipcard text-brown"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("赞赏作者")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.changeColor
    }
  }, [_c('view', {
    staticClass: "content",
    attrs: {
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "cuIcon-clothes text-pink"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("个性换肤")])])]), _vm._v(" "), _c('view', {
    staticClass: "cu-item arrow"
  }, [_c('button', {
    staticClass: "cu-btn content",
    attrs: {
      "open-type": "share"
    }
  }, [_c('text', {
    staticClass: "cuIcon-share text-red"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("分享")])])], 1), _vm._v(" "), _c('l-message', {
    attrs: {
      "content": "content",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '2'
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
     require("vue-hot-reload-api").rerender("data-v-4faea238", esExports)
  }
}

/***/ }),

/***/ 268:
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
     require("vue-hot-reload-api").rerender("data-v-3fc4bee6", esExports)
  }
}

/***/ })

},[256]);