(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json", 1);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    status: Object,
    packages: Object,
    pricePlan: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_7__,
      loading: false,
      error: false
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    newEkyc: function newEkyc() {
      return this.$store.state.ekyc.newEkyc;
    },
    isInstantSimPrepaid: function isInstantSimPrepaid() {
      return this.product.product_type === 'prepaid';
    },
    mobileNumber: function mobileNumber() {
      return this.status.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    imageUrl: function imageUrl() {
      return this.isInstantSimPrepaid ? this.product.images[0].url : this.packages.package_image_desktop;
    }
  },
  methods: {
    trackAnalytics: function trackAnalytics() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scanInstantSim',
        event_category: 'instant_sim',
        event_action: 'ekyc_redirect',
        event_label: ''
      });
    },
    back: function back() {
      if (this.isInstantSimPrepaid) {
        this.$router.push({
          name: 'online-store-instantsim',
          params: {
            id: this.$route.params.id
          },
          query: Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.$route.query)
        });
      } else {
        this.$parent.goTo('plan');
      }
    },
    createEkyc: function createEkyc() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_EKYC"], {
                  answers: {
                    callback_url: location.href
                  }
                });

              case 3:
                _this.trackAnalytics();

                window.location.href = _this.newEkyc.form_url;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _this.error = {
                  th: 'Something went wrong. Please try again',
                  en: 'Something went wrong. Please try again'
                };
                _this.loading = false;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    activate: function activate() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var action, activeJsonBody, data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.loading = true;
                action = _this2.isInstantSimPrepaid ? _store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CREATE_INSTANT_SIM"] : _store_actions_type__WEBPACK_IMPORTED_MODULE_6__["ACTIVATE_INSTANT_SIM"];
                activeJsonBody = {
                  correlation_id: _this2.$route.query.correlation_id,
                  phone_no: _this2.status.mobile,
                  priceplan: _this2.pricePlan.code,
                  lang: _this2.$i18n.locale.toUpperCase(),
                  sale_id: ""
                };
                data = {};

                if (!localStorage.getItem('saleId')) {
                  _context2.next = 12;
                  break;
                }

                activeJsonBody.sale_id = localStorage.getItem('saleId');
                _context2.next = 9;
                return _this2.$store.dispatch(action, activeJsonBody);

              case 9:
                data = _context2.sent;
                _context2.next = 15;
                break;

              case 12:
                _context2.next = 14;
                return _this2.$store.dispatch(action, activeJsonBody);

              case 14:
                data = _context2.sent;

              case 15:
                if (data.is_pass) {
                  _context2.next = 19;
                  break;
                }

                _this2.error = {
                  th: 'Something went wrong. Please try again',
                  en: 'Something went wrong. Please try again'
                };
                _this2.loading = false;
                return _context2.abrupt("return");

              case 19:
                if (!_this2.isInstantSimPrepaid) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 22;
                return _this2.createEkyc();

              case 22:
                _context2.next = 25;
                break;

              case 24:
                window.location.href = data.deeplink;

              case 25:
                _context2.next = 31;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                _this2.error = _context2.t0.message;
                _this2.loading = false;

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 27]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".verify-container[data-v-366e35da] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  margin: auto 12px;\n}\n.verify-container .title[data-v-366e35da] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  margin: 24px 0 16px 0;\n}\n.verify-container .subtitle[data-v-366e35da] {\n  margin-bottom: 24px;\n  line-height: 24px;\n}\n.verify-container .package-container[data-v-366e35da] {\n  border: 1px solid #DCDDE0;\n  border-radius: 8px;\n  padding: 16px;\n  width: 100%;\n  max-width: 640px;\n  margin: auto auto 16px;\n}\n.verify-container .package-container .label[data-v-366e35da] {\n  color: #666;\n}\n.verify-container .package-container .value[data-v-366e35da] {\n  color: #000;\n  font-family: \"TrueBold\";\n  font-size: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.verify-container .package-container .value a[data-v-366e35da] {\n  line-height: 0;\n}\n.verify-container .package-container .value svg[data-v-366e35da] {\n  width: 18px;\n  height: 18px;\n  margin-left: 12px;\n  margin-bottom: 2px;\n  fill: #1565c0;\n  cursor: pointer;\n}\n.verify-container .package-container img[data-v-366e35da] {\n  margin-top: 8px;\n  max-width: 200px;\n  width: 100%;\n}\n.verify-container .info-text[data-v-366e35da] {\n  margin: 0 auto 24px;\n  max-width: 640px;\n  line-height: 22px;\n}\n.verify-container .error-msg[data-v-366e35da] {\n  margin-top: 16px;\n  color: #ff0000;\n}\n.verify-container .back-link[data-v-366e35da] {\n  margin-top: 16px;\n  text-decoration: underline;\n  cursor: pointer;\n  display: inline-block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "verify-container" },
    [
      _vm.loading
        ? _c("loading-element")
        : [
            _c("div", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.Locale.instantsim.title[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "subtitle" },
              [
                _vm.isInstantSimPrepaid
                  ? [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.instantsim.subtitle_prepaid[
                            _vm.$i18n.locale
                          ]
                        )
                      ),
                    ]
                  : [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.instantsim.subtitle_postpaid[
                            _vm.$i18n.locale
                          ]
                        )
                      ),
                    ],
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "package-container" }, [
              _c("div", { staticClass: "label" }, [
                _vm._v(
                  _vm._s(
                    _vm.Locale.instantsim.selected_number[_vm.$i18n.locale]
                  )
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "value" },
                [
                  _c("div", [_vm._v(_vm._s(_vm.mobileNumber))]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "online-store-instantsim",
                          params: {
                            id: _vm.$route.params.id,
                          },
                          query: Object.assign({}, _vm.$route.query),
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                          },
                        },
                        [
                          _c("path", {
                            attrs: { d: "M0 0h24v24H0z", fill: "none" },
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "package-container" }, [
              _c("div", { staticClass: "label" }, [
                _vm._v(
                  _vm._s(
                    _vm.isInstantSimPrepaid
                      ? _vm.Locale.instantsim.selected_prepaid_plan[
                          _vm.$i18n.locale
                        ]
                      : _vm.Locale.instantsim.selected_plan[_vm.$i18n.locale]
                  )
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "value" }, [
                _vm.isInstantSimPrepaid
                  ? _c("div", [_vm._v(_vm._s(_vm.product.title.th))])
                  : _c("div", [_vm._v(_vm._s(_vm.pricePlan.name))]),
                _vm._v(" "),
                !_vm.isInstantSimPrepaid
                  ? _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$parent.goTo("plan")
                          },
                        },
                      },
                      [
                        _c("path", {
                          attrs: { d: "M0 0h24v24H0z", fill: "none" },
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
                          },
                        }),
                      ]
                    )
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("img", { attrs: { src: _vm.imageUrl } }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "info-text" },
              [
                _vm.isInstantSimPrepaid
                  ? [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.instantsim.msg_prepaid[_vm.$i18n.locale]
                        )
                      ),
                    ]
                  : [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.instantsim.msg_postpaid[_vm.$i18n.locale]
                        )
                      ),
                    ],
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "button-element",
              {
                attrs: { id: "start_activation" },
                on: { click: _vm.activate },
              },
              [_vm._v(_vm._s(_vm.Locale.instantsim.start[_vm.$i18n.locale]))]
            ),
            _vm._v(" "),
            _vm.error
              ? _c("div", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.error[_vm.$i18n.locale])),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "back-link", on: { click: _vm.back } }, [
                _vm._v(_vm._s(_vm.Locale.instantsim.back[_vm.$i18n.locale])),
              ]),
            ]),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true& */ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true&");
/* harmony import */ var _instantsim_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instantsim-confirm.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _instantsim_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "366e35da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/instantsim-confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./instantsim-confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=style&index=0&id=366e35da&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_style_index_0_id_366e35da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/instantsim-confirm.vue?vue&type=template&id=366e35da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instantsim_confirm_vue_vue_type_template_id_366e35da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/locale.json":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/locale.json ***!
  \**************************************************************/
/*! exports provided: checking, passedCheck, passedFailed, privilegedCustomer, resultNext, back, warning1, warning2, warning_and, otp, backHomepage, next, verify, address_next, agreement1, agreement2, agreement3, instantsim, user_information_form, option_Page, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"checking\":{\"en\":\"Checking ...\",\"th\":\"กำลังตรวจสอบ ...\"},\"passedCheck\":{\"en\":\"Verification Passed\",\"th\":\"การตรวจสอบสิทธิ์สำเร็จ\"},\"passedFailed\":{\"en\":\"Verification Failed\",\"th\":\"การตรวจสอบสิทธิ์ล้มเหลว\"},\"privilegedCustomer\":{\"en\":\"Congratulations! You can enjoy the following privileges.\",\"th\":\"ยินดีด้วย! คุณสามารถรับสิทธิพิเศษดังต่อไปนี้\"},\"resultNext\":{\"en\":\"Click “Next” to continue ordering.\",\"th\":\"กด \\\"ถัดไป\\\" เพื่อทำรายการต่อ\"},\"back\":{\"en\":\"Back\",\"th\":\"ย้อนกลับ\"},\"warning1\":{\"en\":\"You did not pass the authorization to purchase \",\"th\":\"คุณไม่สามารถทำการสั่งซื้อได้เนื่องจากการตรวจสอบสิทธิ์ล้มเหลว \"},\"warning2\":{\"en\":\" If you have any questions, please contact Call center 1242\",\"th\":\" หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\"},\"warning_and\":{\"en\":\"and\",\"th\":\"และ\"},\"otp\":{\"en\":\"You did not pass the authorization to purchase due to not eligible to get the privilege.\",\"th\":\"คุณไม่สามารถรับสิทธิ์พิเศษนี้ เนื่องจากหมายเลขสมาชิกของคุณ ไม่เป็นไปตามเงื่อนไข\"},\"backHomepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"next\":{\"en\":\"Next\",\"th\":\"ต่อไป\"},\"verify\":{\"en\":\"Verify\",\"th\":\"ตรวจสอบสิทธิ์\"},\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"agreement1\":{\"th\":\"กรอกข้อมูลให้ครบถ้วน และกด \\\"ดำเนินการต่อ\\\" เพื่อบันทึก\",\"en\":\"Please complete the information. Click \\\"Next\\\" to save the information.\"},\"agreement2\":{\"th\":\"ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี\",\"en\":\"I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.\"},\"agreement3\":{\"th\":\"ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี\",\"en\":\"The company reserves the right to cancel the order and refund all cases.\"},\"instantsim\":{\"title\":{\"th\":\"ก่อนเปิดใช้งานซิม\",\"en\":\"Ready to start?\"},\"subtitle_postpaid\":{\"th\":\"กรุณาตรวจเช็กว่าเบอร์ และค่าบริการรายเดือนตรงกับที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"subtitle_prepaid\":{\"th\":\"กรุณาตรวจเช็คว่าเบอร์ และบริการที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"selected_number\":{\"th\":\"เบอร์ที่เลือก\",\"en\":\"Selected number\"},\"selected_plan\":{\"th\":\"ค่าบริการรายเดือนที่เลือก\",\"en\":\"Selected price plan\"},\"selected_prepaid_plan\":{\"th\":\"บริการที่เลือก\",\"en\":\"Selected price plan\"},\"msg_postpaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และค่าบริการรายเดือนใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"msg_prepaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และบริการที่เลือกใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"start\":{\"th\":\"เปิดใช้งานซิม\",\"en\":\"Start activation\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"}},\"user_information_form\":{\"title\":{\"th\":\"เบอร์รายเดือน ทรูมูฟ เอช\",\"en\":\"TrueMove H Postpaid\"},\"title_prepaid\":{\"th\":\"เบอร์เติมเงิน ทรูมูฟ เอช\",\"en\":\"TrueMove H Prepaid\"},\"sub_title_1\":{\"th\":\"กรุณากรอกข้อมูลส่วนตัวของผู้ที่จะใช้งานเบอร์นี้\",\"en\":\"Please enter personal information for the mobile number\"},\"sub_title_2\":{\"th\":\"(สำหรับผู้มีอายุ 17 ปี ขึ้นไป)\",\"en\":\"(you must be at least 17 years old)\"},\"date_of_birth\":{\"th\":\"วันเกิด\",\"en\":\"Date of Birth\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Terms and Condition\"},\"read_agreement\":{\"th\":\"อ่านข้อกำหนดและเงื่อนไข\",\"en\":\"Read terms and conditions\"},\"customerDetail\":{\"thai_id\":{\"placeholder\":{\"th\":\"13 หลัก\",\"en\":\"13 digits of Thai ID number\"},\"error\":{\"th\":\"กรุณากรอกข้อมูลให้ถูกต้อง\",\"en\":\"Please enter 13-digit Thai ID number\"},\"type\":\"text\",\"required\":true}}},\"option_Page\":{\"option_page_header_line_1\":{\"en\":\"กรุณาเลือกทำรายการ\",\"th\":\"กรุณาเลือกทำรายการ\"},\"option_page_header_line_2\":{\"en\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\",\"th\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\"},\"option_page_button_1_1\":{\"en\":\"ซื้อเครื่องพร้อม\",\"th\":\"ซื้อเครื่องพร้อม\"},\"option_page_button_1_2\":{\"en\":\"พร้อมเบอร์ฟันธง\",\"th\":\"พร้อมเบอร์ฟันธง\"},\"option_page_button_1_3\":{\"en\":\"(Device Bundling)\",\"th\":\"(Device Bundling)\"},\"option_page_button_2_1\":{\"en\":\"เปิดเบอร์ฟันธง\",\"th\":\"เปิดเบอร์ฟันธง\"},\"option_page_button_2_2\":{\"en\":\"(SIM Only)\",\"th\":\"(SIM Only)\"}}}");

/***/ })

}]);