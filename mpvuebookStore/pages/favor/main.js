require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(176);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03e4c082_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03e4c082"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03e4c082_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\favor\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03e4c082", Component.options)
  } else {
    hotAPI.reload("data-v-03e4c082", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_me_favor__ = __webpack_require__(179);

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
      mockdata: {
        'data': {
          'hotSearch': {
            'num': 22,
            'keyword': 'Computer'
          },
          'shelf': [{
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
          }],
          'recommend': [{
            'id': 225,
            'fileName': '2016_Book_MicrofinanceEUStructuralFundsA',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg',
            'title': 'Microfinance, EU Structural Funds and Capacity Building for Managing Authorities',
            'author': 'Giovanni Nicola Pes',
            'publisher': 'Palgrave Macmillan',
            'bookId': '2016_Book_MicrofinanceEUStructuralFundsA',
            'category': 3,
            'categoryText': 'Economics',
            'language': 'en',
            'rootFile': 'OEBPS/9781137536013.opf'
          }, {
            'id': 88,
            'fileName': '2018_Book_BetweenMobilityAndMigration',
            'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg',
            'title': 'Between Mobility and Migration',
            'author': 'Peter Scholten',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_BetweenMobilityAndMigration',
            'category': 2,
            'categoryText': 'SocialSciences',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 24,
            'fileName': '2018_Book_SecurityInComputerAndInformati',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg',
            'title': 'Security in Computer and Information Sciences',
            'author': 'Erol Gelenbe',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_SecurityInComputerAndInformati',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }],
          'freeRead': [{
            'id': 34,
            'fileName': '2018_Book_GeographiesOfTheUniversity',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg',
            'title': 'Geographies of the University',
            'author': 'Peter Meusburger',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_GeographiesOfTheUniversity',
            'category': 7,
            'categoryText': 'Geography',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 59,
            'fileName': '2018_Book_DrinkingInVictorianAndEdwardia',
            'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg',
            'title': 'Drinking in Victorian and Edwardian Britain',
            'author': 'Thora Hands',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_DrinkingInVictorianAndEdwardia',
            'category': 8,
            'categoryText': 'History',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 60,
            'fileName': '2018_Book_HarnessingThePowerOfTheCrimina',
            'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg',
            'title': 'Harnessing the Power of the Criminal Corpse',
            'author': 'Sarah Tarlow',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_HarnessingThePowerOfTheCrimina',
            'category': 8,
            'categoryText': 'History',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 75,
            'fileName': '2018_Book_TheEuropeanBloodAndMarrowTrans',
            'cover': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg',
            'title': 'The European Blood and Marrow Transplantation Textbook for Nurses',
            'author': 'Michelle Kenyon',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_TheEuropeanBloodAndMarrowTrans',
            'category': 17,
            'categoryText': 'MedicineAndPublicHealth',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }],
          'hotBook': [{
            'id': 89,
            'fileName': '2018_Book_ContemporaryPerspectivesOnAgei',
            'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-73820-8_CoverFigure.jpg',
            'title': 'Contemporary Perspectives on Ageism',
            'author': 'Liat Ayalon',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_ContemporaryPerspectivesOnAgei',
            'category': 2,
            'categoryText': 'SocialSciences',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 218,
            'fileName': '2015_Book_PovertyReductionPoliciesAndPra',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/2015_Book_PovertyReductionPoliciesAndPra.jpeg',
            'title': 'Poverty Reduction Policies and Practices in Developing Asia',
            'author': 'Almas Heshmati, Esfandiar Maasoumi and Guanghua Wan',
            'publisher': 'Springer Singapore, Singapore',
            'bookId': '2015_Book_PovertyReductionPoliciesAndPra',
            'category': 3,
            'categoryText': 'Economics',
            'language': 'en',
            'rootFile': 'OEBPS/content.opf'
          }, {
            'id': 6,
            'fileName': '2018_Book_DronesAndTheCreativeIndustry',
            'cover': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg',
            'title': 'Drones and the Creative Industry',
            'author': 'Virginia Santamarina-Campos',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_DronesAndTheCreativeIndustry',
            'category': 13,
            'categoryText': 'BusinessandManagement',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }, {
            'id': 139,
            'fileName': '2018_Book_EvolutionMonitoringAndPredicti',
            'cover': 'https://www.youbaobao.xyz/book/res/img/EarthSciences/2018_Book_EvolutionMonitoringAndPredicti.jpeg',
            'title': 'Evolution, Monitoring and Predicting Models of Rockburst',
            'author': 'Chunlai Wang',
            'publisher': 'Springer Singapore, Singapore',
            'bookId': '2018_Book_EvolutionMonitoringAndPredicti',
            'category': 14,
            'categoryText': 'EarthSciences',
            'language': 'en',
            'rootFile': 'OEBPS/content.opf'
          }],
          'category': [{
            'cover': 'https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg',
            'category': 12,
            'categoryText': 'Biomedicine',
            'num': 14,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-33515-5_CoverFigure.jpg',
            'category': 13,
            'categoryText': 'BusinessandManagement',
            'num': 16,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
            'category': 1,
            'categoryText': 'ComputerScience',
            'num': 56,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg',
            'category': 14,
            'categoryText': 'EarthSciences',
            'num': 16,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/EarthSciences/978-3-319-65633-5_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-69772-7_CoverFigure.jpg',
            'category': 3,
            'categoryText': 'Economics',
            'num': 30,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-91400-8_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Education/978-3-319-39450-3_CoverFigure.jpg',
            'category': 4,
            'categoryText': 'Education',
            'num': 60,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Education/978-3-319-52980-6_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Engineering/978-3-319-91707-8_CoverFigure.jpg',
            'category': 5,
            'categoryText': 'Engineering',
            'num': 23,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Engineering/978-3-319-64816-3_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Environment/978-3-319-29671-5_CoverFigure.jpg',
            'category': 6,
            'categoryText': 'Environment',
            'num': 42,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Environment/978-4-431-54895-9_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg',
            'category': 7,
            'categoryText': 'Geography',
            'num': 7,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-92813-5_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-64337-3_CoverFigure.jpg',
            'category': 8,
            'categoryText': 'History',
            'num': 18,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Laws/978-3-319-71087-7_CoverFigure.jpg',
            'category': 9,
            'categoryText': 'Laws',
            'num': 13,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Laws/978-981-13-1232-8_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/LifeSciences/978-3-319-68152-8_CoverFigure.jpg',
            'category': 10,
            'categoryText': 'LifeSciences',
            'num': 24,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/LifeSciences/978-3-319-69539-6_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Literature/2010_Book_CyborgsInLatinAmerica.jpeg',
            'category': 11,
            'categoryText': 'Literature',
            'num': 6,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Literature/2010_Book_HistoryAndCulturalMemoryInNeo-.jpeg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg',
            'category': 15,
            'categoryText': 'MaterialsScience',
            'num': 2,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/MaterialsScience/2018_Book_ProceedingsOfTheScientific-Pra.jpeg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Mathematics/978-3-319-29439-1_CoverFigure.jpg',
            'category': 16,
            'categoryText': 'Mathematics',
            'num': 9,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Mathematics/2015_Book_InnovationsInQuantitativeRiskM.jpeg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-28624-2_CoverFigure.jpg',
            'category': 17,
            'categoryText': 'MedicineAndPublicHealth',
            'num': 20,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-75019-4_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Philosophy/978-3-319-26300-7_CoverFigure.jpg',
            'category': 18,
            'categoryText': 'Philosophy',
            'num': 16,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Philosophy/978-3-319-94610-8_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Physics/978-3-319-42424-8_CoverFigure.jpg',
            'category': 19,
            'categoryText': 'Physics',
            'num': 10,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Physics/978-3-662-57366-2_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/PoliticalScienceAndInternationalRelations/978-3-319-69929-5_CoverFigure.jpg',
            'category': 20,
            'categoryText': 'PoliticalScienceAndInternationalRelations',
            'num': 26,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/PoliticalScienceAndInternationalRelations/978-981-10-7182-9_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Psychology/978-3-319-78160-0_CoverFigure.jpg',
            'category': 21,
            'categoryText': 'Psychology',
            'num': 3,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Psychology/2015_Book_PromotingSocialDialogueInEurop.jpeg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-72356-3_CoverFigure.jpg',
            'category': 2,
            'categoryText': 'SocialSciences',
            'num': 51,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg'
          }, {
            'cover': 'https://www.youbaobao.xyz/book/res/img/Statistics/2013_Book_ShipAndOffshoreStructureDesign.jpeg',
            'category': 22,
            'categoryText': 'Statistics',
            'num': 1,
            'cover2': 'https://www.youbaobao.xyz/book/res/img/Statistics/2013_Book_ShipAndOffshoreStructureDesign.jpeg'
          }],
          'shelfCount': 0
        }
      }

    };
  },


  components: { favor: __WEBPACK_IMPORTED_MODULE_1__components_me_favor__["a" /* default */] },
  created: function created() {},


  computed: {
    data: function data() {
      var _mockdata$data = this.mockdata.data,
          recommend = _mockdata$data.recommend,
          freeRead = _mockdata$data.freeRead,
          hotBook = _mockdata$data.hotBook;

      return [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(recommend), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(freeRead), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(hotBook));
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    console.log([].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.mockdata.data.recommend), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.mockdata.data.freeRead), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.mockdata.data.hotBook)));
  },


  methods: {},

  watch: {}

});

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_favor_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3515fc69_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_favor_vue__ = __webpack_require__(182);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3515fc69"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_favor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3515fc69_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_favor_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\me\\favor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] favor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3515fc69", Component.options)
  } else {
    hotAPI.reload("data-v-3515fc69", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  props: {
    data: {
      type: Array,
      default: []
    },
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {};
  },


  components: {},
  created: function created() {},


  computed: {
    bookData: function bookData() {
      // 将数组数据结构转换成想要的数据结构(传入行列)
      if (this.data && this.data.length > 0) {
        var number = 10;
        var _bookdata = this.data.slice(0, number);
        var _BookDataByRow = [];
        var _row = 0;
        while (_row < 5) {
          _BookDataByRow.push(_bookdata.slice(_row * 2, _row * 2 + 2));
          _row++;
        }
        return _BookDataByRow;
      } else {
        return [];
      }
    }
  },

  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      console.log(_this.data);
    }, 50);
  },


  methods: {
    Todetail: function Todetail(book) {
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "favor"
  }, [_c('div', {
    staticClass: "title"
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "content-row"
    }, _vm._l((item), function(book, index1) {
      return _c('div', {
        key: index1,
        staticClass: "content-col"
      }, [_c('div', {
        staticClass: "book",
        attrs: {
          "eventid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.Todetail(book)
          }
        }
      }, [_c('van-image', {
        attrs: {
          "width": "125",
          "height": "152",
          "src": book.cover,
          "cover": "fit",
          "lazy-load": "",
          "mpcomid": '0_' + index + '-' + index1
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "bottom"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v("书名:" + _vm._s(book.title))]), _vm._v(" "), _c('div', {
        staticClass: "author"
      }, [_vm._v("作者:" + _vm._s(book.author))])])], 1)])
    }))
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3515fc69", esExports)
  }
}

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('favor', {
    attrs: {
      "data": _vm.data,
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
     require("vue-hot-reload-api").rerender("data-v-03e4c082", esExports)
  }
}

/***/ })

},[175]);