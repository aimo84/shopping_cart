(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.json */ "./resources/js/sections/lucky-priceplan-info/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/sections/lucky-priceplan-info/locale.json", 1);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'package-detail': function packageDetail() {
      return __webpack_require__.e(/*! import() */ 160).then(__webpack_require__.bind(null, /*! ../../pages/store/postpaid/package-detail */ "./resources/js/pages/store/postpaid/package-detail.vue"));
    }
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    packages: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_4__,
      showDetail: false
    };
  },
  computed: {
    isDrLucky: function isDrLucky() {
      return this.$route.name === 'drlucky-verify' || this.$route.name.includes('drlucky-zodiac-verify');
    },
    isDrLucky9999: function isDrLucky9999() {
      return this.$route.name === 'online-store-lucky-9999-verify';
    },
    isDrLuckyPrepaid: function isDrLuckyPrepaid() {
      return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid';
    },
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    packageInfo: function packageInfo() {
      return this.$store.state.postpaid["package"].record[0];
    },
    pricePlans: function pricePlans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    name: function name() {
      return this.packageInfo.name;
    },
    price: function price() {
      var plans = this.pricePlans.map(function (item) {
        return item.price;
      });
      return Math.min.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(plans));
    },
    image: function image() {
      return this.packages.package_image_desktop;
    },
    mobileNumber: function mobileNumber() {
      return this.data.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  },
  mounted: function mounted() {
    this.showDetail = this.isDrLuckyPrepaid;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".package-container[data-v-1a54c124] {\n  font-size: 1.5em;\n  color: #212121;\n}\n.package-container .page-container[data-v-1a54c124] {\n  max-width: 1300px;\n  margin: auto;\n}\n.package-container .package-banner[data-v-1a54c124] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n.package-container .package-banner > .title[data-v-1a54c124] {\n  display: none;\n}\n.package-container .package-banner .package-cover[data-v-1a54c124] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  padding: 32px;\n  min-height: 280px;\n}\n.package-container .package-banner .package-cover img[data-v-1a54c124] {\n  width: 100%;\n  max-width: 240px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.package-container .package-banner .package-information[data-v-1a54c124] {\n  padding: 32px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  color: #333;\n}\n.package-container .package-banner .package-information .title[data-v-1a54c124] {\n  font-family: \"TrueBold\";\n  font-size: 40px;\n  line-height: 30px;\n  margin-bottom: 16px;\n}\n.package-container .package-banner .package-information .description[data-v-1a54c124] {\n  line-height: 32px;\n  font-size: 32px;\n}\n.package-container .package-banner .package-information .mobile-number[data-v-1a54c124] {\n  font-size: 60px;\n  line-height: 60px;\n  font-family: \"TrueBold\";\n  margin-top: 4px;\n  flex: 1;\n}\n.package-container .package-banner .package-information .price-container[data-v-1a54c124] {\n  margin-top: 8px;\n  font-size: 30px;\n}\n.package-container .package-banner .package-information .price-container .price[data-v-1a54c124] {\n  color: #f00;\n  font-family: \"TrueBold\";\n  font-size: 48px;\n  line-height: 48px;\n}\n.package-container .package-banner .package-information .price-container .baht[data-v-1a54c124] {\n  color: #f00;\n  font-family: \"TrueBold\";\n}\n.package-container .package-banner .package-information .button-container[data-v-1a54c124] {\n  display: flex;\n  margin-top: 16px;\n}\n.package-container .package-banner .package-information .button-container .button[data-v-1a54c124] {\n  color: #fff;\n  padding: 0 24px;\n  font-size: 24px;\n  border-radius: 8px;\n  background-color: #ff0000;\n  min-width: 200px;\n  font-weight: 500;\n  font-family: \"TrueMedium\";\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n.package-container .package-banner .package-information .button-container .button[active][data-v-1a54c124] {\n  background-color: #000;\n}\n.package-container .package-detail[data-v-1a54c124] {\n  margin-bottom: 24px;\n}\n@media screen and (max-width: 860px) {\n.package-container .package-banner[data-v-1a54c124] {\n    grid-template-columns: 30% 1fr;\n    padding: 0 24px 24px;\n}\n.package-container .package-banner > .title[data-v-1a54c124] {\n    display: block;\n    grid-column: 1/-1;\n    font-size: 34px;\n    line-height: 30px;\n    font-family: \"TrueBold\";\n    padding: 8px 0 16px;\n    color: #212121;\n}\n.package-container .package-banner .package-cover[data-v-1a54c124] {\n    padding: 4px 20px 0 0;\n    min-height: 0;\n    align-items: flex-start;\n}\n.package-container .package-banner .package-cover img[data-v-1a54c124] {\n    max-width: 180px;\n}\n.package-container .package-banner .package-information[data-v-1a54c124] {\n    padding: 0;\n}\n.package-container .package-banner .package-information .title[data-v-1a54c124] {\n    display: none;\n}\n.package-container .package-banner .package-information .description[data-v-1a54c124] {\n    line-height: 24px;\n    font-size: 24px;\n}\n.package-container .package-banner .package-information .mobile-number[data-v-1a54c124] {\n    font-size: 40px;\n    line-height: 40px;\n}\n.package-container .package-banner .package-information .price-container[data-v-1a54c124] {\n    margin: 8px 0;\n}\n.package-container .package-banner .package-information .price-container .price[data-v-1a54c124] {\n    font-size: 30px;\n    line-height: 30px;\n}\n.package-container .package-banner .package-information .button-container[data-v-1a54c124] {\n    margin-top: 0;\n}\n.package-container .package-banner .package-information .button-container .button[data-v-1a54c124] {\n    height: 40px;\n    line-height: 40px;\n    min-width: 0;\n}\n}\n@media screen and (max-width: 480px) {\n.package-container .package-banner[data-v-1a54c124] {\n    grid-template-columns: 35% 1fr;\n    padding: 0 24px 24px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "package-container" },
    [
      _c("div", { staticClass: "page-container" }, [
        _c("div", { staticClass: "package-banner" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.packages.name)),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "package-cover" }, [
            _c("img", { attrs: { src: _vm.image } }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "package-information" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.packages.name)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "description" }, [
              _vm._v(_vm._s(_vm.packages.term_short)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mobile-number" }, [
              _vm._v(_vm._s(_vm.mobileNumber)),
            ]),
            _vm._v(" "),
            !_vm.isDrLuckyPrepaid
              ? _c("div", { staticClass: "price-container" }, [
                  _c("div", [
                    _vm._v(_vm._s(_vm.Locale.start[_vm.$i18n.locale]) + " "),
                    _c("span", { staticClass: "baht" }, [_vm._v("฿")]),
                    _c("span", { staticClass: "price" }, [
                      _vm._v(_vm._s(_vm.price)),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isDrLucky || _vm.isDrLucky9999
              ? _c("div", { staticClass: "button-container" }, [
                  _vm.isDrLuckyPrepaid
                    ? _c(
                        "div",
                        {
                          staticClass: "button",
                          on: {
                            click: function ($event) {
                              return _vm.$emit("select-drlucky-prepaid-plan")
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.Locale.buy_now[_vm.$i18n.locale]))]
                      )
                    : _c(
                        "div",
                        {
                          staticClass: "button",
                          attrs: { active: _vm.showDetail },
                          on: {
                            click: function ($event) {
                              _vm.showDetail = !_vm.showDetail
                            },
                          },
                        },
                        [
                          _vm.showDetail
                            ? [
                                _vm._v(
                                  _vm._s(
                                    _vm.Locale.hide_detail[_vm.$i18n.locale]
                                  )
                                ),
                              ]
                            : [
                                _vm._v(
                                  _vm._s(
                                    _vm.Locale.show_detail[_vm.$i18n.locale]
                                  )
                                ),
                              ],
                        ],
                        2
                      ),
                ])
              : _vm._e(),
          ]),
        ]),
      ]),
      _vm._v(" "),
      (_vm.isDrLucky || _vm.isDrLucky9999) && _vm.showDetail
        ? _c("package-detail", {
            staticClass: "package-detail",
            attrs: { packages: _vm.packages, product: _vm.product },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/sections/lucky-priceplan-info/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/sections/lucky-priceplan-info/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a54c124&scoped=true& */ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& */ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a54c124",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/sections/lucky-priceplan-info/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=style&index=0&id=1a54c124&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a54c124_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a54c124&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/lucky-priceplan-info/index.vue?vue&type=template&id=1a54c124&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a54c124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/sections/lucky-priceplan-info/locale.json":
/*!****************************************************************!*\
  !*** ./resources/js/sections/lucky-priceplan-info/locale.json ***!
  \****************************************************************/
/*! exports provided: address_title, search_result_description, start, selected_number, your_package, show_detail, hide_detail, buy_now, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"address_title\":{\"th\":\"กรอกข้อมูลเพื่อสั่งซื้อซิม\",\"en\":\"Please insert your information\"},\"search_result_description\":{\"th\":\"กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้เสร็จสิ้นภายใน 2 ชั่วโมง ในกรณีที่มีการทำรายการเข้ามาเป็นจำนวนมาก เบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้\",\"en\":\"Please select the number and fill in the user details within 2 hours after you have verified the privileges. In case of over-transaction, the reserved number will be canceled immediately\"},\"start\":{\"th\":\"แพ็กเกจเริ่มต้น\",\"en\":\"Start at\"},\"selected_number\":{\"th\":\"เบอร์โทรศัพท์ที่คุณเลือก\",\"en\":\"The number you selected\"},\"your_package\":{\"th\":\"แพ็กเกจของคุณ:\",\"en\":\"Your Package:\"},\"show_detail\":{\"th\":\"รายละเอียดแพ็กเกจ\",\"en\":\"Package Detail\"},\"hide_detail\":{\"th\":\"ซ่อนหน้าข้อมูล\",\"en\":\"Hide Detail\"},\"buy_now\":{\"th\":\"ซื้อสินค้า\",\"en\":\"Buy now\"}}");

/***/ })

}]);