(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/pre2post/order/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/pre2post/order/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixin.js */ "./resources/js/pages/pre2post/mixin.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixin_js__WEBPACK_IMPORTED_MODULE_7__["Mixins"]],
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      loaded: false,
      error: false
    };
  },
  computed: {
    product: function product() {
      var _this$$store$state$pr, _this$$store$state$pr2;

      return (_this$$store$state$pr = this.$store.state.products.productInfo) === null || _this$$store$state$pr === void 0 ? void 0 : (_this$$store$state$pr2 = _this$$store$state$pr.data) === null || _this$$store$state$pr2 === void 0 ? void 0 : _this$$store$state$pr2.record;
    },
    packageInfo: function packageInfo() {
      return this.$store.state.postpaid["package"].record[0];
    },
    verify: function verify() {
      return this.$store.state.verify.verify;
    },
    placeorder: function placeorder() {
      return this.$store.state.placeorder.pre2postPlaceorder;
    },
    description: function description() {
      return {
        th: this.product.description_th,
        en: this.product.description_en
      };
    },
    mobileNumber: function mobileNumber() {
      var e = this.verify.creditok_data.tmp_check_result.input.mobile_number;
      var regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/;
      return e.replace(regex, '$1-$2-$3');
    },
    thaiId: function thaiId() {
      return this.getThaiId();
    },
    address: function address() {
      var e = this.data.billing_addr;
      var address = [e.address1, e.address2].filter(function (e) {
        return e;
      }).join(' ');
      return "".concat(address, ",\n").concat(e.district, ",\n").concat(e.city, ",\n").concat(e.province, " ").concat(e.postcode);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.$emit('loading', true);

              if (_this.data.ekyc_passed) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", _this.$router.push({
                name: 'pre2post-address',
                params: _this.$route.params,
                query: _this.$route.query
              }));

            case 4:
              _this.loaded = true;

              _this.$emit('loading', false);

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              _this.$router.push({
                name: 'pre2post-verify'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  },
  methods: {
    next: function next() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                _this2.$emit('loading', true);

                _this2.error = false;
                _context2.next = 5;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CREATE_PRE2POST_PLACEORDER"], {
                  cart_id: _this2.$route.query.id,
                  billing_address: _this2.data.billing_addr
                });

              case 5:
                if (_this2.placeorder.is_pass) {
                  _context2.next = 7;
                  break;
                }

                throw new Error();

              case 7:
                _this2.$router.push({
                  name: 'pre2post-success',
                  params: {
                    secure_key: _this2.placeorder.submit_data.secure_key
                  }
                });

                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                if (!_this2.placeorder.is_pass && _this2.placeorder.message) _this2.error = _this2.placeorder.message;

                _this2.$emit('loading', false);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid[data-v-6f10603a] {\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: 1fr 1fr;\n  color: #666;\n  line-height: 1em;\n  margin: 24px 0;\n}\n.grid .black[data-v-6f10603a] {\n  color: #000;\n}\n.grid .red[data-v-6f10603a] {\n  color: #F32525;\n}\n.grid .bold[data-v-6f10603a] {\n  font-family: \"TrueBold\";\n}\n.grid .error-container[data-v-6f10603a] {\n  grid-column: 1/-1;\n}\n.grid .grid-item[data-v-6f10603a] {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-gap: 16px;\n}\n.grid .grid-item .label[data-v-6f10603a] {\n  font-size: 32px;\n}\n.grid .grid-item .card[data-v-6f10603a] {\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 16px;\n}\n.grid .grid-item .card .package-info[data-v-6f10603a] {\n  background-color: #F5F6F4;\n  border-radius: 8px;\n  padding: 16px;\n}\n.grid .grid-item .card.address a[data-v-6f10603a] {\n  text-decoration: underline;\n}\n.grid .grid-item .card.address > div[data-v-6f10603a]:first-child {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-bottom: 8px;\n}\n.grid .grid-item .card.address .address-text[data-v-6f10603a] {\n  white-space: pre-line;\n}\n.grid .button[data-v-6f10603a] {\n  grid-column: 1/-1;\n  max-width: 250px;\n  width: 100%;\n  margin: auto;\n}\n@media screen and (max-width: 860px) {\n.grid[data-v-6f10603a] {\n    grid-template-columns: 1fr;\n}\n.grid .button[data-v-6f10603a] {\n    max-width: initial;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _vm.loaded
    ? _c("div", [
        _c(
          "div",
          { staticClass: "grid" },
          [
            _vm.error
              ? _c("div", { staticClass: "error-container" }, [
                  _c("ul", [
                    _c("li", [_vm._v(_vm._s(_vm.error[_vm.$i18n.locale]))]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "grid-item" }, [
              _c("div", { staticClass: "label black bold" }, [
                _vm._v(_vm._s(_vm.Locale.product_items[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "package-info" }, [
                  _c("div", { staticClass: "black bold" }, [
                    _vm._v(_vm._s(_vm.Locale.pre2post_title[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "red bold" }, [
                    _vm._v(
                      _vm._s(_vm.mobileNumber) +
                        " (" +
                        _vm._s(_vm.packageInfo.contract) +
                        " " +
                        _vm._s(_vm.Locale.months_contract[_vm.$i18n.locale]) +
                        ")"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      _vm._s(_vm.Locale.thai_id_number[_vm.$i18n.locale]) +
                        ": " +
                        _vm._s(_vm.thaiId)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold" }, [
                    _vm._v(_vm._s(_vm.Locale.package[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.packageInfo.term_short))]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "grid-item" }, [
              _c("div", { staticClass: "label black bold" }, [
                _vm._v(_vm._s(_vm.Locale.billing_address[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card address" }, [
                _c(
                  "div",
                  { staticClass: "black bold" },
                  [
                    _c("div", [
                      _vm._v(
                        _vm._s(this.data.billing_addr.firstname) +
                          " " +
                          _vm._s(this.data.billing_addr.lastname)
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "black",
                        attrs: {
                          to: {
                            name: "pre2post-address",
                            param: _vm.$route.param,
                            query: _vm.$route.query,
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.Locale.edit[_vm.$i18n.locale]))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "address-text" }, [
                  _vm._v(_vm._s(_vm.address)),
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.Locale.mobile_number[_vm.$i18n.locale]) +
                      ": " +
                      _vm._s(this.data.billing_addr.phone)
                  ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.Locale.email[_vm.$i18n.locale]) +
                      ": " +
                      _vm._s(this.data.billing_addr.email)
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "button-element",
              { staticClass: "button", on: { click: _vm.next } },
              [_vm._v(_vm._s(_vm.Locale.confirm[_vm.$i18n.locale]))]
            ),
          ],
          1
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/pre2post/mixin.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/pre2post/mixin.js ***!
  \**********************************************/
/*! exports provided: Mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");





var Mixins = {
  computed: {
    packages: function packages() {
      var _this$$store$state$po, _this$$store$state$po2;

      return (_this$$store$state$po = this.$store.state.postpaid["package"]) === null || _this$$store$state$po === void 0 ? void 0 : (_this$$store$state$po2 = _this$$store$state$po.record) === null || _this$$store$state$po2 === void 0 ? void 0 : _this$$store$state$po2[0];
    },
    plans: function plans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    plan: function plan() {
      var _this = this;

      return this.plans.find(function (e) {
        return e.id === _this.$route.query.pp;
      });
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    preToPostEkycStatus: function preToPostEkycStatus() {
      return this.$store.state.ekyc.preToPostEkycStatus;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return {};
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    }
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.$route.query.hash) {
                  _context.next = 2;
                  break;
                }

                throw new Error();

              case 2:
                if (_this2.$route.query.pp) {
                  _context.next = 4;
                  break;
                }

                throw new Error();

              case 4:
                _context.next = 6;
                return Promise.all([_this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PACKAGE"], _this2.$route.params.nas_code), _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRICE_PLAN"], {
                  section: 'wemall',
                  sim_type: 'postpaid',
                  nas_code: _this2.$route.params.nas_code
                })]);

              case 6:
                if (!(!_this2.packages || !_this2.plan)) {
                  _context.next = 8;
                  break;
                }

                throw new Error();

              case 8:
                _context.next = 10;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_EKYC_STATUS"], _this2.$route.query.hash);

              case 10:
                _context.next = 12;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRE_TO_POST_EKYC"], {
                  is_pre2post_ss: 1,
                  cart_hash: _this2.$route.query.id,
                  answers: _this2.ekycStatus.answers,
                  image_liveness: _this2.ekycStatus.image_liveness,
                  image_front: _this2.ekycStatus.image_front,
                  image_front_face: _this2.ekycStatus.image_front_face
                });

              case 12:
                _context.next = 14;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["VERIFY"], {
                  id: 'pre_to_post',
                  data: {
                    id_number: _this2.ekycAnswers.national_id,
                    service_name: 'truemove',
                    mobile_number: _this2.ekycAnswers.mobile_no,
                    birthday: _this2.ekycAnswers.date_of_birth,
                    priceplan: _this2.plan.code,
                    cart_hash: _this2.$route.query.id,
                    is_pre2post_ss: 1,
                    nas_code: _this2.$route.params.nas_code
                  }
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAddress: function getAddress() {
      return {
        firstname: this.ekycAnswers.first_name,
        lastname: this.ekycAnswers.last_name,
        address1: this.ekycAnswers.home_address,
        address2: '',
        district_id: this.ekycAnswers.home_subdistrict_id.toString(),
        city_id: this.ekycAnswers.home_district_id.toString(),
        province_id: this.ekycAnswers.home_province_id.toString(),
        postcode: this.ekycAnswers.home_zipcode,
        country_id: '209',
        phone: this.ekycAnswers.mobile_no,
        email: this.ekycAnswers.email
      };
    },
    getThaiId: function getThaiId() {
      return this.ekycAnswers.national_id;
    }
  }
};

/***/ }),

/***/ "./resources/js/pages/pre2post/order/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/pre2post/order/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6f10603a&scoped=true& */ "./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& */ "./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f10603a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pre2post/order/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=style&index=0&id=6f10603a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f10603a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6f10603a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/order/index.vue?vue&type=template&id=6f10603a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6f10603a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/pre2post/order/locale.json":
/*!*******************************************************!*\
  !*** ./resources/js/pages/pre2post/order/locale.json ***!
  \*******************************************************/
/*! exports provided: product_items, pre2post_title, months_contract, thai_id_number, package, billing_address, fullname, email, mobile_number, edit, confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"product_items\":{\"th\":\"Product Items\",\"en\":\"Product Items\"},\"pre2post_title\":{\"th\":\"Prepaid number switch to postpaid:\",\"en\":\"Prepaid number switch to postpaid:\"},\"months_contract\":{\"th\":\"months contract\",\"en\":\"months contract\"},\"thai_id_number\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID number\"},\"package\":{\"th\":\"แพ็กเกจ\",\"en\":\"Package\"},\"billing_address\":{\"th\":\"จัดส่งเอกสาร\",\"en\":\"Billing Address\"},\"fullname\":{\"th\":\"ชื่อและข้อมูลส่วนตัว\",\"en\":\"Name\"},\"email\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"mobile_number\":{\"th\":\"หมายเลขติดต่อ\",\"en\":\"Mobile Number\"},\"edit\":{\"th\":\"แก้ไข\",\"en\":\"Edit\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Confirm\"}}");

/***/ })

}]);