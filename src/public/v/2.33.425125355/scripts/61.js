(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'clm-vas-verify': function clmVasVerify() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(42), __webpack_require__.e(143)]).then(__webpack_require__.bind(null, /*! ./clm-vas-verify */ "./resources/js/pages/clm/vas/clm-vas-verify.vue"));
    },
    'clm-vas-package': function clmVasPackage() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(42), __webpack_require__.e(49), __webpack_require__.e(142)]).then(__webpack_require__.bind(null, /*! ./clm-vas-package */ "./resources/js/pages/clm/vas/clm-vas-package.vue"));
    },
    'clm-vas-confirm': function clmVasConfirm() {
      return Promise.all(/*! import() */[__webpack_require__.e(42), __webpack_require__.e(90)]).then(__webpack_require__.bind(null, /*! ./clm-vas-confirm */ "./resources/js/pages/clm/vas/clm-vas-confirm.vue"));
    },
    'clm-vas-result': function clmVasResult() {
      return __webpack_require__.e(/*! import() */ 166).then(__webpack_require__.bind(null, /*! ./clm-vas-result */ "./resources/js/pages/clm/vas/clm-vas-result.vue"));
    }
  },
  data: function data() {
    return {
      page: 'verify',
      data: {
        campId: '',
        otp: {
          phoneNumber: '',
          otp: ''
        },
        tol: {
          circuit_id: '',
          thai_id: ''
        },
        "package": {
          id: '',
          tier: null
        }
      }
    };
  },
  computed: {
    campId: function campId() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    }
  },
  watch: {
    page: function page() {
      window.scrollTo(0, 0);
    }
  },
  mounted: function mounted() {
    this.data.campId = this.campId;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.page === "verify"
        ? _c("clm-vas-verify", { attrs: { data: _vm.data } })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "package"
        ? _c("clm-vas-package", { attrs: { data: _vm.data } })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "confirm"
        ? _c("clm-vas-confirm", { attrs: { data: _vm.data } })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "result"
        ? _c("clm-vas-result", { attrs: { data: _vm.data } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/clm/vas/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/clm/vas/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=55a56d32& */ "./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/clm/vas/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=55a56d32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/index.vue?vue&type=template&id=55a56d32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55a56d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);