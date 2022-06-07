(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/checkout/payment/error/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/checkout/payment/error/content.json", 1);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      Content: _content_json__WEBPACK_IMPORTED_MODULE_3__,
      errors: [],
      errorCode: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.errorCode = _this.$route.query.error;

              if (_this.errorCode in _content_json__WEBPACK_IMPORTED_MODULE_3__.errorCode) {
                _this.errors = [_content_json__WEBPACK_IMPORTED_MODULE_3__.errorCode[_this.errorCode]];
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mt-\\[15px\\][data-v-006d78a2] {\n  margin-top: 15px;\n}\n.mt-\\[70px\\][data-v-006d78a2] {\n  margin-top: 70px;\n}\n.mt-\\[80px\\][data-v-006d78a2] {\n  margin-top: 80px;\n}\n.d-flex[data-v-006d78a2] {\n  display: flex;\n}\n.column[data-v-006d78a2] {\n  flex-direction: column;\n}\n.align-items-center[data-v-006d78a2] {\n  align-items: center;\n}\n.text-center[data-v-006d78a2] {\n  text-align: center;\n}\n.payment-error-container[data-v-006d78a2] {\n  padding-top: 65px;\n}\n.payment-error-container .x-cross-icon[data-v-006d78a2] {\n  background-image: linear-gradient(286.62deg, #df1584 10.96%, #df1e5f 36.51%, #e02542 61.07%, #e02932 82.54%, #e02b2c 98.54%);\n  width: 80px;\n  height: 80px;\n  margin-bottom: 4px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.payment-error-container .title[data-v-006d78a2] {\n  font-family: \"TrueBold\";\n  font-size: 44px;\n}\n.payment-error-container .info[data-v-006d78a2] {\n  font-size: 30px;\n}\n.payment-error-container .info a[data-v-006d78a2]:visited {\n  color: #3fbaef;\n}\n.payment-error-container .d-info[data-v-006d78a2] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 35px;\n}\n.payment-error-container .button-container[data-v-006d78a2] {\n  display: flex;\n  justify-content: space-around;\n}\n.payment-error-container .button-container button[data-v-006d78a2] {\n  min-width: 250px;\n  width: 100%;\n  padding: 5px;\n  background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  border-radius: 20px;\n  font-size: 22px;\n}\n.payment-error-container .button-container button[disabled][data-v-006d78a2] {\n  color: #989898;\n  background: #D9D9D9;\n}\n@media screen and (max-width: 1280px) {\n.payment-error-container[data-v-006d78a2] {\n    margin-top: 0rem;\n    padding-top: 80px;\n}\n}\n@media screen and (max-width: 823px) {\n.payment-error-container .x-cross-icon[data-v-006d78a2] {\n    width: 74px;\n    height: 74px;\n}\n.payment-error-container .title[data-v-006d78a2] {\n    font-size: 38px;\n}\n.payment-error-container .info[data-v-006d78a2] {\n    font-size: 24px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _vm.errorCode === "invalid_paynext_payment"
    ? _c("div", { staticClass: "payment-error-container" }, [
        _c(
          "div",
          { staticClass: "d-flex column align-items-center" },
          [
            _c("div", { staticClass: "x-cross-icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "45",
                    height: "45",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "#fff",
                      d: "M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08\n              c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469\n              c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304\n              c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z",
                      "stroke-linejoin": "round",
                      stroke: "white",
                      "stroke-width": "1",
                      "stroke-miterlimit": "10",
                    },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm._l(_vm.errors, function (error, key) {
              return _c("div", { key: key, staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    _vm.Content.errorCode.invalid_paynext_payment.title[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "info d-info" }, [
              _c("span", { staticClass: "text-center" }, [
                _vm._v(
                  _vm._s(
                    _vm.Content.errorCode.invalid_paynext_payment.message_1[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-center" }, [
                _vm._v(
                  _vm._s(
                    _vm.Content.errorCode.invalid_paynext_payment.message_2[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-[15px] text-center" }, [
              _c("span", { staticClass: "info" }, [
                _c("span", { staticClass: "text-center" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://tmn.app.link/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000030%3Ftype%3Dsmartpay&deeplink_no_attribution=true",
                        target: "_blank",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.Content.errorCode.invalid_paynext_payment
                            .link_status[_vm.$i18n.locale]
                        )
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "text-center" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://tmn.app.link/paynext",
                        target: "_blank",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.Content.errorCode.invalid_paynext_payment
                            .link_setting[_vm.$i18n.locale]
                        )
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "button-container mt-[70px]" },
              [
                _c(
                  "router-link",
                  {
                    attrs: { to: "/payment" },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.trackAnalytics(
                          "track_event",
                          "personal_information_and_address",
                          "back",
                          "Back"
                        )
                      },
                    },
                  },
                  [
                    _c(
                      "button-element",
                      { attrs: { id: "go_order_summary" } },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.Content.go_checkout[_vm.$i18n.locale]) +
                            "\n        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          2
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/checkout/payment/error/content.json":
/*!****************************************************************!*\
  !*** ./resources/js/pages/checkout/payment/error/content.json ***!
  \****************************************************************/
/*! exports provided: errorCode, go_checkout, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"errorCode\":{\"invalid_paynext_payment\":{\"title\":{\"th\":\"ชำระเงินไม่สำเร็จ\",\"en\":\"Payment Failed\"},\"message_1\":{\"th\":\"เนื่องจากคุณยังไม่ได้เปิดใช้บริการเพย์เน็กซ์\",\"en\":\"Unable to process your payment transaction. you may not have the PayNext account, \"},\"message_2\":{\"th\":\"หรือยังไม่ได้ตั้งค่าสมาร์ทเพย์หรือวงเงินไม่พอ\",\"en\":\"or have not set up a SmartPay, or the amount exceeds your credit limit.\"},\"link_status\":{\"th\":\"ตรวจสอบสถานะเพย์เน็กซ์\",\"en\":\"Check your Paynext status\"},\"link_setting\":{\"th\":\"ตั้งค่าสมาร์ทเพย์\",\"en\":\"Set up SmartPay\"}}},\"go_checkout\":{\"th\":\"ย้อนกลับหน้าชำระเงิน\",\"en\":\"Back to payments\"}}");

/***/ }),

/***/ "./resources/js/pages/checkout/payment/error/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/checkout/payment/error/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=006d78a2&scoped=true& */ "./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& */ "./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "006d78a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/checkout/payment/error/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout/payment/error/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=006d78a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout/payment/error/index.vue?vue&type=template&id=006d78a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_006d78a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/checkout/payment/error/style.scss?vue&type=style&index=0&id=006d78a2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_006d78a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);