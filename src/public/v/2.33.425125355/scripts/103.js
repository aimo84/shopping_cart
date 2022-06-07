(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
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
  props: {
    isProcessing: [Boolean],
    fitHeight: Boolean
  },
  data: function data() {
    return {
      loading: {
        en: 'Loading ...',
        th: 'กำลังโหลด ...'
      },
      processing: {
        en: 'Processing ...',
        th: 'กำลังประมวลผล ...'
      },
      noRefresh: {
        en: 'DO NOT refresh the page or click on the BACK button.',
        th: 'กรุณาอย่าทำการรีเฟรช หรือ กดปุ่มย้อนกลับ'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/success/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/success/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/progress */ "./resources/js/components/progress.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _Content_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content.json */ "./resources/js/pages/success/Content.json");
var _Content_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Content.json */ "./resources/js/pages/success/Content.json", 1);
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./success */ "./resources/js/pages/success/success.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'progress-element': _components_progress__WEBPACK_IMPORTED_MODULE_4__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_5__["default"],
    'drlucky-element': function drluckyElement() {
      return Promise.all(/*! import() */[__webpack_require__.e(14), __webpack_require__.e(108)]).then(__webpack_require__.bind(null, /*! ./drlucky */ "./resources/js/pages/success/drlucky.vue"));
    },
    'order-element': function orderElement() {
      return Promise.all(/*! import() */[__webpack_require__.e(35), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, /*! ./order */ "./resources/js/pages/success/order.vue"));
    }
  },
  mixins: [_success__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      Content: _Content_json__WEBPACK_IMPORTED_MODULE_6__,
      loading: true,
      ft: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var successCode;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.checkFirstTimeQuery();

              successCode = _this.$route.query.success_code;

              if (successCode) {
                _context.next = 5;
                break;
              }

              throw new Error('no-success-code');

            case 5:
              _context.next = 7;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["FETCH_TRACKING_SUCCESS"], successCode);

            case 7:
              _this.loading = false;
              window.addEventListener('beforeprint', _this.setPrint);
              window.addEventListener('afterprint', _this.removePrint);
              if (_this.ft) _this.firstTime();
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('beforeprint', this.setPrint);
    window.removeEventListener('afterprint', this.removePrint);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-container[data-v-664164c1] {\n  padding: 24px 0;\n  width: 100%;\n  min-height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loading-container[fitHeight][data-v-664164c1] {\n  min-height: unset;\n}\n.loading-container .loading[data-v-664164c1] {\n  margin-right: 2px;\n  border-radius: 100%;\n  border: 4px solid #ff0000;\n  border-bottom-color: transparent;\n  height: 36px;\n  width: 36px;\n  background: 0 0 !important;\n  -webkit-animation: loading-data-v-664164c1 0.9s linear infinite;\n          animation: loading-data-v-664164c1 0.9s linear infinite;\n}\n.loading-container .loading-text[data-v-664164c1],\n.loading-container .processing-text[data-v-664164c1] {\n  line-height: 24px;\n  text-align: center;\n  margin-left: 2px;\n  margin-top: 20px;\n  font-size: 22px;\n  color: #777777;\n}\n.loading-container .processing-text[data-v-664164c1] {\n  color: #484848;\n  font-size: 24px;\n}\n@-webkit-keyframes loading-data-v-664164c1 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-664164c1 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "loading-container", attrs: { fitHeight: _vm.fitHeight } },
    [
      _c("div", { staticClass: "loading" }),
      _vm._v(" "),
      _vm.isProcessing
        ? _c("div", { staticClass: "processing-text" }, [
            _c("div", [_vm._v(_vm._s(_vm.processing[_vm.$i18n.locale]))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.noRefresh[_vm.$i18n.locale]))]),
          ])
        : _c("div", { staticClass: "loading-text" }, [
            _vm._v(_vm._s(_vm.loading[_vm.$i18n.locale])),
          ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6& ***!
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
      _c("div", { staticClass: "block-header" }, [
        _c("h1", [_vm._v(_vm._s(_vm.Content.title[_vm.$i18n.locale]))]),
      ]),
      _vm._v(" "),
      _c("progress-element", { attrs: { step: 4 } }),
      _vm._v(" "),
      _vm.loading
        ? _c("loading-element")
        : [
            _vm.success.fortune_funtong
              ? _c("drlucky-element", {
                  attrs: {
                    funtong: _vm.success.fortune_funtong,
                    products: _vm.orderProducts,
                  },
                })
              : _c("order-element", {
                  attrs: { products: _vm.orderProducts },
                  on: { print: _vm.print },
                }),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/loading.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/loading.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=664164c1&scoped=true& */ "./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/components/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "664164c1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=664164c1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/success/Content.json":
/*!*************************************************!*\
  !*** ./resources/js/pages/success/Content.json ***!
  \*************************************************/
/*! exports provided: title, paymentcompleted, ordersubmited, orderreceived, suborderreceived, ordermessage, ordertrackingtitle, ordertrackingclaimedcondition1, ordertrackingclaimedcondition2, ordertrackingnote, ordersummary, ordernumber, shipping_address, tax_invoice, tax, thai_id, company, branch, phone, email, pdf, print, backHomepage, viewDetails, item, items, shipping, total_price, advance_payment, save, cannot_move_to_us_title, cannot_move_to_us_content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"th\":\"ขั้นตอนการสั่งซื้อ\",\"en\":\"Order Process\"},\"paymentcompleted\":{\"th\":\"ชำระเงินเรียบร้อย\",\"en\":\"Payment completed\"},\"ordersubmited\":{\"th\":\"สั่งซื้อสำเร็จ\",\"en\":\"Order Submitted\"},\"orderreceived\":{\"th\":\"ร้านค้าได้รับคำสั่งซื้อของคุณแล้ว\",\"en\":\"The tracking number displayed below can be used\"},\"suborderreceived\":{\"th\":\"หมายเลขการสั่งซื้อ และติดตามสถานะการจัดส่งของคุณคือ\",\"en\":\"to track and monitor your current shipment.\"},\"ordermessage\":{\"th\":\"ระบบได้ส่งอีเมลยืนยันการสั่งซื้อให้คุณเรียบร้อย\",\"en\":\"The system has sent you an SMS and a confirmation email.\"},\"ordertrackingtitle\":{\"th\":\"หลังจากได้รับสินค้า กรุณาตรวจสอบสินค้าภายในเวลาที่กำหนด เพื่อรักษาสิทธิประโยชน์สูงสุดจาก TRUE STORE\",\"en\":\"Upon receiving your device, kindly open and check your device as per the allotted timeline in order to maintain the following privileges with True Store:\"},\"ordertrackingclaimedcondition1\":{\"th\":\"ตรวจสอบสินค้าภายใน 24 ชั่วโมง เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี สินค้าเกิดรอยขีดข่วน หรือ เสียหายจากการขนส่ง\",\"en\":\"Return or change your device if you notice scratches and/or other physical damages on your device within 24 hours\"},\"ordertrackingclaimedcondition2\":{\"th\":\"ตรวจสอบสินค้าภายใน 7 วัน เพื่อรับสิทธิ์เปลี่ยน/คืนสินค้าในกรณี ระบบภายในตัวเครื่องมีปัญหา\",\"en\":\"Return or change your device if you experience any software malfunctions within 7 days\"},\"ordertrackingnote\":{\"th\":\"**เงื่อนไขในการเปลี่ยน/คืนสินค้า เป็นไปตามที่บริษัทฯ กำหนด\",\"en\":\"**Returning or changing devices are subject to True’s terms and conditions\"},\"ordersummary\":{\"th\":\"สรุปรายการสั่งซื้อ\",\"en\":\"Order summary\"},\"ordernumber\":{\"th\":\"หมายเลขการสั่งซื้อ:\",\"en\":\"Order number:\"},\"shipping_address\":{\"th\":\"ที่อยู่จัดส่ง\",\"en\":\"Shipping Address\"},\"tax_invoice\":{\"th\":\"ที่อยู่ในการออกใบเสร็จ/ใบกำกับภาษี\",\"en\":\"Tax invoice\"},\"tax\":{\"th\":\"เลขประจำตัวผู้เสียภาษี\",\"en\":\"Tax No\"},\"thai_id\":{\"th\":\"เลขบัตรประชาชน\",\"en\":\"Thai ID Card\"},\"company\":{\"th\":\"ชื่อบริษัท\",\"en\":\"Company\"},\"branch\":{\"th\":\"สำนักงานใหญ่/รหัสสาขา\",\"en\":\"Branch\"},\"phone\":{\"th\":\"เบอร์โทรศัพท์\",\"en\":\"Mobile\"},\"email\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"pdf\":{\"th\":\"เซฟเป็น PDF\",\"en\":\"Save as PDF\"},\"print\":{\"th\":\"พิมพ์เอกสารการสั่งซื้อ\",\"en\":\"Print order detail\"},\"backHomepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"viewDetails\":{\"en\":\"View order details\",\"th\":\"พิมพ์เอกสารการสั่งซื้อ\"},\"item\":{\"th\":\"รายการ\",\"en\":\"Item\"},\"items\":{\"th\":\"รายการ\",\"en\":\"Items\"},\"shipping\":{\"th\":\"ค่าจัดส่ง\",\"en\":\"Shipping\"},\"total_price\":{\"th\":\"มูลค่าสินค้า\",\"en\":\"Total Price\"},\"advance_payment\":{\"th\":\"ชำระค่าบริการล่วงหน้า\",\"en\":\"Advance Payment\"},\"save\":{\"th\":\"ประหยัด\",\"en\":\"Save\"},\"cannot_move_to_us_title\":{\"th\":\"หากการย้ายค่ายไม่สำเร็จ\",\"en\":\"What happens if your number cannot be moved to us?\"},\"cannot_move_to_us_content\":{\"th\":\"วงเงินที่กันไว้จะไม่ถูกเรียกเก็บ และจะคืนตามช่องทางที่คุณเลือกชำระไว้\",\"en\":\"You’ll not be charged and the amount will be returned to your original payment method.\"}}");

/***/ }),

/***/ "./resources/js/pages/success/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/success/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3f9e13a6& */ "./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/success/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/success/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/success/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3f9e13a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/success/index.vue?vue&type=template&id=3f9e13a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f9e13a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/success/success.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/success/success.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    success: function success() {
      return _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.tracking.trackingSuccess;
    },
    successData: function successData() {
      return this.success.body.data[0];
    },
    orderProducts: function orderProducts() {
      var _this = this;

      var products = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.successData.order_product);

      products.forEach(function (product) {
        var isSim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'mnp'];

        if (isSim.includes(product.product_type) && product.sim_meta) {
          var meta = _this.isString(product.sim_meta) ? JSON.parse(product.sim_meta) : product.sim_meta;
          product.postpaid = {
            meta: meta[0]
          };
        }

        var isTruecard = product.product_type === 'truecard';
        if (isTruecard && product.meta && _this.isString(product.meta)) product.meta = JSON.parse(product.meta);
      });

      if (this.successData.advance_payment && this.successData.contract) {
        products.push({
          image_url: '/images/icons/cart-placeholder.png',
          title: "".concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["computePrice"])(this.successData.advance_payment), "\u0E3F advance payment with ").concat(this.successData.contract, " months contract"),
          compare_at_price: 0,
          price: this.successData.advance_payment,
          quantity: 1,
          product_type: 'advancepayment'
        });
      }

      if (this.successData.entertainment) {
        products.push({
          image_url: this.successData.entertainment.image_url,
          title: this.successData.entertainment.name,
          hide_price: true,
          compare_at_price: 0,
          price: 0,
          quantity: 1,
          product_type: 'entertainment'
        });
      }

      return products.filter(function (product) {
        return product.id;
      });
    },
    productTypes: function productTypes() {
      return this.orderProducts.map(function (e) {
        return e.product_type;
      });
    }
  },
  methods: {
    isString: function isString(str) {
      return typeof str === 'string' || str instanceof String;
    },
    setPrint: function setPrint() {
      document.body.setAttribute('print', '');
    },
    removePrint: function removePrint() {
      document.body.removeAttribute('print');
    },
    checkFirstTimeQuery: function checkFirstTimeQuery() {
      var query = Object.assign({}, this.$route.query);

      if (query.ft) {
        this.ft = true;
        delete query.ft;
        this.$router.replace({
          query: query
        });
      }
    },
    firstTime: function firstTime() {
      this.clearLocalStorage();
      window.dispatchEvent(new CustomEvent('cart-updated', {
        detail: {
          cart: 0
        }
      }));
      this.trackAnalytics();
    },
    clearLocalStorage: function clearLocalStorage() {
      window.localStorage.removeItem('agreement');
      window.localStorage.removeItem('cart-id');
      window.localStorage.removeItem('cart-v1');
      window.localStorage.removeItem('verify-form');
      window.localStorage.removeItem('verify-result');
      window.localStorage.removeItem('postpaid-ekyc');
      window.localStorage.removeItem('sim-meta');
      window.localStorage.removeItem('sim-meta-postpaid');
      window.localStorage.removeItem('postpaid-data');
      window.localStorage.removeItem('postpaid-sim-data');
      window.localStorage.removeItem('privilege-placeorder');
      window.localStorage.removeItem('family-black-verify-form');
      window.localStorage.removeItem('postpaid-ekyc-data');
      window.localStorage.removeItem('clm-upsell');
      window.localStorage.removeItem('truestore-campaign-weomni');
      window.localStorage.removeItem('truestore-berfuntong-timestamp');
      window.localStorage.removeItem('ekyc_hash');
      window.localStorage.removeItem('paysmooth-data');
      window.localStorage.removeItem('sim_family_info');
      window.localStorage.removeItem('company_code');
      window.localStorage.removeItem('proposition_amdoc');
      window.localStorage.removeItem('installments');
      window.localStorage.removeItem('iot-package');
    },
    print: function print() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'track_event',
        event_category: 'ThankYouPage',
        event_action: 'Print'
      });
      window.print();
    },
    trackAnalytics: function trackAnalytics() {
      var _this2 = this;

      var billingTax = this.successData.order_address.billing_tax_no;
      var billingBranch = this.successData.order_address.billing_branch;
      var eventLabel = this.successData.order_product.map(function (e) {
        return e.title;
      }).join('_');
      var products = this.orderProducts.map(function (e) {
        var isSim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'mnp'];
        var promo = e.order_product_promotion ? e.order_product_promotion[0] : '';
        var coupon = promo && promo.order_promotion.type === '6' ? {
          coupon: promo.order_promotion_code,
          metric3: (parseFloat(promo.discount) || 0).toFixed(2)
        } : {};
        var price = e.price;
        var originalPrice = e.price;

        if (['device_bundle_new_customer', 'device_bundle_existing', 'pre_to_post', 'device_mnp_bundle', 'mnp_one_step', 'mnp_two_step'].includes(e.product_type)) {
          if (_this2.successData.advance_payment) {
            price -= parseInt(_this2.successData.advance_payment);
          }

          originalPrice = e.compare_at_price;
        }

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
          name: e.title,
          id: e.product_id,
          price: parseFloat(price).toFixed(2),
          category: isSim.includes(e.product_type) ? 'SIM' : 'device',
          brand: '',
          variant: e.sku || '',
          quantity: e.quantity,
          dimension6: parseFloat(e.compare_at_price).toFixed(2),
          dimension7: parseFloat(originalPrice).toFixed(2),
          dimension8: '',
          dimension13: e.capacity || '',
          dimension14: e.status || true
        }, _this2.getEcommerceProductDimensions(e)), coupon);
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'purchase_thankyou',
        event_action: 'purchase_success',
        event_label: eventLabel,
        request_tax_invoice: billingTax ? 'yes' : 'no',
        customer_type: billingTax ? billingBranch === '-' ? 'individual' : 'cooperate' : '',
        ecommerce: {
          currencyCode: 'THB',
          purchase: {
            actionField: {
              id: this.successData.order_id,
              revenue: parseFloat(this.successData.price).toFixed(2),
              shipping: parseFloat(this.successData.shipping_price).toFixed(2),
              tax: '',
              coupon: ''
            },
            products: products
          }
        }
      });
    },
    getEcommerceProductDimensions: function getEcommerceProductDimensions(e) {
      var _e$order_product_prom, _e$order_product_prom2;

      var bundle = (_e$order_product_prom = e.order_product_promotion) === null || _e$order_product_prom === void 0 ? void 0 : (_e$order_product_prom2 = _e$order_product_prom[0]) === null || _e$order_product_prom2 === void 0 ? void 0 : _e$order_product_prom2.order_promotion;

      switch (e.product_type) {
        case 'pre_to_post':
          {
            var _this$successData, _this$successData2;

            return {
              dimension30: 'Switch to Postpaid',
              dimension31: '',
              dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
              dimension33: "".concat(e.title, " \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E15\u0E34\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08 ").concat((_this$successData = this.successData) === null || _this$successData === void 0 ? void 0 : _this$successData.existing_campaign.rc, " \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat((((_this$successData2 = this.successData) === null || _this$successData2 === void 0 ? void 0 : _this$successData2.existing_campaign.advance_payment) || 0).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment).toFixed(2)
            };
          }

        case 'device_mnp_bundle':
          {
            return {
              dimension30: 'Move to Us Online Exclusive',
              dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
              dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
              dimension33: "".concat(bundle.name, " \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat(parseFloat(this.successData.advance_payment).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment).toFixed(2)
            };
          }

        case 'mnp_one_step':
          {
            return {
              dimension30: 'Move to TrueMove H',
              dimension31: '',
              dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
              dimension33: "".concat(bundle.name, " \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat(parseFloat(this.successData.advance_payment).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment).toFixed(2)
            };
          }

        case 'device_bundle_prepaid':
          {
            return {
              dimension30: 'Device with Free Prepaid SIM',
              dimension31: '',
              dimension32: parseFloat(e.price).toFixed(2),
              dimension33: '',
              metric2: '0.00'
            };
          }

        case 'device_bundle_existing':
          {
            var _this$successData3, _this$successData4;

            return {
              dimension30: 'Existing TrueMove H Postpaid',
              dimension31: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only',
              dimension32: parseFloat(e.price - parseFloat(this.successData.advance_payment || 0)).toFixed(2),
              dimension33: "".concat(e.title, " \u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08 ").concat((_this$successData3 = this.successData) === null || _this$successData3 === void 0 ? void 0 : _this$successData3.existing_campaign.rc, " \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat((((_this$successData4 = this.successData) === null || _this$successData4 === void 0 ? void 0 : _this$successData4.existing_campaign.advance_payment) || 0).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment || 0).toFixed(2)
            };
          }

        case 'mnp_two_step':
          {
            var _this$successData5, _this$successData6;

            return {
              dimension30: 'Move to Us',
              dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
              dimension32: parseFloat(e.price - parseFloat(this.successData.advance_payment || 0)).toFixed(2),
              dimension33: "".concat(e.title, " \u0E22\u0E49\u0E32\u0E22\u0E04\u0E48\u0E32\u0E22\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E40\u0E14\u0E34\u0E21 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08 ").concat((_this$successData5 = this.successData) === null || _this$successData5 === void 0 ? void 0 : _this$successData5.existing_campaign.rc, " \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat((((_this$successData6 = this.successData) === null || _this$successData6 === void 0 ? void 0 : _this$successData6.existing_campaign.advance_payment) || 0).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment || 0).toFixed(2)
            };
          }

        case 'device_bundle_new_customer':
          {
            return {
              dimension30: 'New Customer',
              dimension31: '',
              dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
              dimension33: "".concat(bundle.name, " \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat(parseFloat(this.successData.advance_payment).toFixed(2), "\u0E3F"),
              metric2: parseFloat(this.successData.advance_payment).toFixed(2)
            };
          }

        case 'product':
          {
            return {
              dimension30: 'Handset only',
              dimension31: '',
              dimension32: '',
              dimension33: '',
              metric2: '0.00'
            };
          }

        case 'mnp':
        case 'sim':
          {
            var result = {};

            if (e.postpaid.meta) {
              result = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, result), {}, {
                dimension9: e.postpaid.meta.sim_type === 'prepaid' ? 'Prepaid SIM' : 'Postpaid SIM',
                dimension10: '',
                // TODO: SIM Package
                dimension11: e.postpaid.meta.price_plan.name,
                dimension12: parseFloat(e.postpaid.meta.price_plan.price).toFixed(2),
                dimension22: '',
                // TODO: Package Download Speed
                dimension24: '',
                // TODO: Talk Time Allowance
                dimension25: '' // TODO: Mobile Internet Allowance

              });
            }

            if (e.postpaid.meta.campaign_type === 'vhora') {
              result = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, result), {}, {
                dimension17: e.postpaid.meta.birth_date,
                dimension18: e.postpaid.meta.birth_time,
                dimension19: e.postpaid.meta.timezone,
                dimension20: e.postpaid.meta.berfuntong.group_title,
                dimension21: e.postpaid.meta.berfuntong.subgroup_title,
                dimension40: e.postpaid.meta.berfuntong.grade,
                dimension41: e.postpaid.meta.number
              });
            }

            return result;
          }

        default:
          {
            return {};
          }
      }
    }
  }
});

/***/ })

}]);