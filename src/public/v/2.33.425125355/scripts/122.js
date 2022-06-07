(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sections/postpaid-address */ "./resources/js/sections/postpaid-address/index.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_8__["default"],
    'postpaid-address': _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_10__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    verifyForm: Object,
    verifyResult: Object,
    postpaidResult: Object,
    product: Object,
    packages: Object,
    selectedPricePlan: Object,
    isPrepaid: Boolean,
    isCampaignRedeemFreeDevice: {
      type: Boolean,
      "default": false
    },
    pricePlans: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    isCampaignFreeDevice: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_11__,
      formLoading: true,
      formValid: true,
      agreeTnc: false,
      agreeCancel: false,
      loading: true,
      "package": {}
    };
  },
  computed: {
    allowAddcart: function allowAddcart() {
      return this.$store.state.products.productStatus.data;
    },
    valid: function valid() {
      return this.formValid && this.agreeTnc && this.agreeCancel;
    },
    isPostpaid: function isPostpaid() {
      return ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'device_bundle_new_customer'].includes(this.product.product_type);
    },
    isPaysmooth: function isPaysmooth() {
      return this.$route.query.paysmooth_token;
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      return skip && this.product.product_type === 'device_bundle_new_customer';
    },
    simSourceType: function simSourceType() {
      return this.$route.query.source_type || '';
    }
  },
  mounted: function () {
    var _mounted = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchPackage();

            case 2:
              if (!(this.simSourceType === 'e-sim')) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (!(this.isPrepaid && localStorage.getItem('prepaid-sim-number'))) {
                _context.next = 13;
                break;
              }

              _context.next = 7;
              return this.checkAllowAddcart();

            case 7:
              if (_context.sent) {
                _context.next = 10;
                break;
              }

              this.$router.push('/cart?error=012');
              return _context.abrupt("return");

            case 10:
              this.setPrepaidDataMeta();
              _context.next = 14;
              break;

            case 13:
              if (this.isPrepaid) {
                location.replace("/online-store/prepaid/".concat(this.$route.params.id, "?nas_code=").concat(this.$route.params.nas));
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    fetchPackage: function fetchPackage() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_PACKAGE"], _this.$route.params.nas || _this.luckyNas);

              case 2:
                data = _context2.sent;
                _this["package"] = data.record[0];

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    trackAnalytics: function trackAnalytics(e) {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee3() {
        var sim, simProduct;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_PRODUCT_INFO"], {
                  id: e.sim.product_id
                });

              case 2:
                sim = _context3.sent;
                simProduct = sim.data.record;
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'ecommerce_event',
                  event_category: 'bundle_add_to_cart',
                  event_action: 'product_add_to_cart',
                  event_label: "".concat(e.product.title.en || e.product.title.th, " | ").concat(simProduct.title.en || simProduct.title.th),
                  ecommerce: {
                    currencyCode: 'THB',
                    add: {
                      actionField: {
                        list: 'bundle'
                      },
                      products: [{
                        name: e.product.title.en || e.product.title.th,
                        id: e.product.id,
                        price: parseFloat(e.product.inventory.price).toFixed(2),
                        category: 'device',
                        brand: '',
                        variant: e.product.inventory.options.find(function (e) {
                          return e.title.th === 'สี';
                        }) ? e.product.inventory.options.find(function (e) {
                          return e.title.th === 'สี';
                        }).values.title.th : '',
                        quantity: 1,
                        dimension6: parseFloat(e.product.inventory.compare_at_price).toFixed(2),
                        dimension7: parseFloat(e.product.inventory.price).toFixed(2),
                        dimension8: '',
                        dimension13: e.product.inventory.options.find(function (e) {
                          return e.title.th === 'ความจุ';
                        }) ? e.product.inventory.options.find(function (e) {
                          return e.title.th === 'ความจุ';
                        }).values.title.th : '',
                        dimension14: e.product.status,
                        dimension30: 'New Customer',
                        dimension31: '',
                        dimension32: e.bundle.price_after_discount_device_bundle_new_customer.toFixed(2),
                        dimension33: "".concat(e.bundle.name, " \u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32: ").concat(e.bundle.advance_payment, "\u0E3F"),
                        metric2: e.bundle.advance_payment
                      }, {
                        name: simProduct.title.en || simProduct.title.th,
                        id: simProduct.id,
                        price: parseFloat(simProduct.inventories[0].price).toFixed(2),
                        category: 'SIM card',
                        variant: 'Postpaid',
                        quantity: 1,
                        dimension6: parseFloat(simProduct.inventories[0].compare_at_price).toFixed(2),
                        dimension7: parseFloat(simProduct.inventories[0].price).toFixed(2),
                        dimension9: 'Postpaid SIM',
                        dimension10: '',
                        // TODO: SIM Package
                        dimension11: e.bundle.proposition_mobile[0].name,
                        dimension12: parseFloat(e.meta.price_plan.price).toFixed(2),
                        dimension14: true,
                        dimension22: '',
                        // TODO: Package Download Speed
                        dimension24: '',
                        // TODO: Talk Time Allowance
                        dimension25: '' // TODO: Mobile Internet Allowance

                      }]
                    }
                  }
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    prefillForm: function prefillForm() {
      var postpaidSim = ['sim', 'postpaid', 'vlearn', 'device_bundle_new_customer'].includes(this.product.product_type);

      if (postpaidSim && this.ekycAnswers) {
        if (this.ekycAnswers.home_province_id && this.ekycAnswers.home_subdistrict_id && this.ekycAnswers.home_district_id) {
          this.id_card_form.province_id = this.ekycAnswers.home_province_id.toString();
          this.id_card_form.city_id = this.ekycAnswers.home_district_id.toString();
          this.id_card_form.district_id = this.ekycAnswers.home_subdistrict_id.toString();
          this.id_card_form.postcode = this.ekycAnswers.home_zipcode;
          this.billing_address.province_id = this.ekycAnswers.home_province_id.toString();
          this.billing_address.city_id = this.ekycAnswers.home_district_id.toString();
          this.billing_address.district_id = this.ekycAnswers.home_subdistrict_id.toString();
          this.billing_address.postcode = this.ekycAnswers.home_zipcode;
        }

        var idExpiration = this.ekycAnswers.date_of_expiration ? this.ekycAnswers.date_of_expiration.split('-') : '';
        this.user_details.thai_id_expire_year = idExpiration ? (parseFloat(idExpiration[2]) + 543).toString().padStart(2, 0) : '';
        this.user_details.thai_id_expire_month = idExpiration ? parseFloat(idExpiration[1]).toString().padStart(2, 0) : '';
        this.user_details.thai_id_expire_day = idExpiration ? parseFloat(idExpiration[0]).toString().padStart(2, 0) : '';
        this.user_details.first_name = this.ekycAnswers.first_name;
        this.user_details.last_name = this.ekycAnswers.last_name;
        this.user_details.email = this.ekycAnswers.email;
        this.user_details.telephone = this.ekycAnswers.mobile_no;
        this.id_card_form.address = this.ekycAnswers.home_address;
        this.billing_address.address = this.ekycAnswers.home_address;
        var prefix = {
          นาย: 'mr',
          นาง: 'mrs',
          นางสาว: 'miss'
        };

        if (this.ekycAnswers.prefix in prefix) {
          this.user_details.title = prefix[this.ekycAnswers.prefix];
        } else {
          this.user_details.title = '';
          this.user_details.txt_title_other = this.ekycAnswers.prefix;
        }
      }
    },
    generateYear: function generateYear() {
      var currentYear = new Date().getFullYear() + 543;
      var years = [];

      for (var year = currentYear; year < 2644; year++) {
        years.push(year);
      }

      this.AddressForm.date.year = years.map(function (year) {
        return {
          id: year,
          value: year
        };
      });
      this.user_details.thai_id_expire_year = currentYear.toString();
    },
    generateDay: function generateDay(year, month) {
      var total = new Date(year - 543, parseInt(month), 0).getDate();
      this.AddressForm.date.day = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(total).keys()).map(function (day) {
        return {
          id: (day + 1).toString().padStart(2, 0),
          value: day + 1
        };
      });

      if (parseFloat(this.user_details.thai_id_expire_day) > total) {
        this.user_details.thai_id_expire_day = total.toString().padStart(2, 0);
      }
    },
    formChanged: function formChanged(form, type, id) {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee4() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this3.loading) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                if (!(id === '_')) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                data = JSON.parse(JSON.stringify(_this3[form]));
                _context4.t0 = type;
                _context4.next = _context4.t0 === 'province_id' ? 8 : _context4.t0 === 'city_id' ? 12 : _context4.t0 === 'district_id' ? 16 : 19;
                break;

              case 8:
                _this3.setAddressLoading(form, 'city');

                _context4.next = 11;
                return _this3.setAddress(form, 'city', id, data);

              case 11:
                return _context4.abrupt("break", 19);

              case 12:
                _this3.setAddressLoading(form, 'district');

                _context4.next = 15;
                return _this3.setAddress(form, 'district', id, data);

              case 15:
                return _context4.abrupt("break", 19);

              case 16:
                _context4.next = 18;
                return _this3.setPostcode(form);

              case 18:
                return _context4.abrupt("break", 19);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setAddressLoading: function setAddressLoading(form, type) {
      var contentId = "".concat(type, "_id");
      this[form][contentId] = '_';
      this[form].postcode = '';
      this.AddressForm[form][contentId].disabled = true;
      this.AddressForm[form][contentId].options = [{
        id: '_',
        value: 'Loading ...'
      }];
    },
    fetchAddress: function fetchAddress(type, id) {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee5() {
        var payload, types, params;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                payload = {};
                types = {
                  province: 'country_id',
                  city: 'province_id',
                  district: 'city_id'
                };
                payload[types[type]] = id;
                payload.language = _this4.$i18n.locale || 'th';
                params = Object.keys(payload).map(function (item) {
                  return "".concat(item, "=").concat(payload[item]);
                }).join('&');
                return _context5.abrupt("return", _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_ADDRESS"], {
                  type: type,
                  params: params
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setAddress: function setAddress(form, type, id, data) {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee6() {
        var content, contentId, options, exist;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.formValid = false;
                content = _this5.AddressForm[form];
                contentId = "".concat(type, "_id");

                if (_this5.address[type][id]) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 6;
                return _this5.fetchAddress(type, id);

              case 6:
                content[contentId].disabled = false;
                content[contentId].options = _this5.computeDropdown(type, id);
                options = content[contentId].options.map(function (option) {
                  return option.id;
                });
                exist = options.includes(parseFloat(data[contentId]));
                _this5[form][contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString();
                _this5.formValid = true;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    setPostcode: function setPostcode(form) {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee7() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this6[form].postcode = _this6.computePostcode(_this6[form].city_id, _this6[form].district_id);

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    checkAllowAddcart: function checkAllowAddcart() {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee8() {
        var productStatusData, cartid, hash, addCart;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this7.$route.name.includes('drlucky-verify')) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", true);

              case 2:
                productStatusData = {
                  product_id: _this7.$route.params.id
                };
                cartid = window.localStorage.getItem('cart-id');
                if (cartid) productStatusData.hash = cartid;
                _context8.next = 7;
                return _this7.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_PRODUCT_STATUS"], productStatusData);

              case 7:
                hash = _this7.allowAddcart.hash;
                if (hash) window.localStorage.setItem('cart-id', hash);
                addCart = _this7.allowAddcart.allow_addcart;

                if (!(addCart.shop === false)) {
                  _context8.next = 12;
                  break;
                }

                return _context8.abrupt("return", false);

              case 12:
                _context8.t0 = _this7.product.product_type;
                _context8.next = _context8.t0 === 'device_bundle_existing' ? 15 : _context8.t0 === 'device_bundle_new_customer' ? 16 : 17;
                break;

              case 15:
                return _context8.abrupt("return", addCart.ext);

              case 16:
                return _context8.abrupt("return", addCart["new"]);

              case 17:
                return _context8.abrupt("return", addCart.sim_only);

              case 18:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    setEkyc: function setEkyc(ekyc, id) {
      var key = 'postpaid-ekyc-data';
      var data = JSON.parse(localStorage.getItem(key)) || {};
      if (Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data) !== 'object') data = {};
      data[id] = ekyc;
      localStorage.setItem(key, JSON.stringify(data));
    },
    computeCart: function computeCart(meta) {
      var _this8 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee9() {
        var _meta$ekyc;

        var inventoryId, gender, postpaidAddress, postpaidAddressForm, drluckNumber, form, checkSimFamilyInfo, companyCode, propoAmdoc, simFamilyInfo, data, hash, result, _e$message;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                inventoryId = _this8.product.inventories[0].id.toString();
                gender = (_meta$ekyc = meta.ekyc) === null || _meta$ekyc === void 0 ? void 0 : _meta$ekyc.gender;

                if (!_this8.isPrepaid) {
                  _this8.setEkyc(meta.ekyc, _this8.product.id);

                  delete meta.ekyc;
                  delete meta.price_plan.long_description;
                  delete meta.price_plan.proposition_term_long;
                  meta.sim_image = _this8.packages.package_image_desktop;
                }

                meta.sim_source_type = _this8.simSourceType;

                if (_this8.$route.name === 'drlucky-verify') {
                  postpaidAddress = _this8.$refs.postpaidAddress;
                  postpaidAddressForm = postpaidAddress.getFormValue();
                  drluckNumber = window.localStorage.getItem('truestore-berfuntong-number');
                  form = window.localStorage.getItem('truestore-berfuntong-form');
                  form = JSON.parse(form);
                  drluckNumber = JSON.parse(drluckNumber);
                  meta.campaign_type = 'vhora';
                  meta.birth_date = form.birthdate;
                  meta.thai_id_expire_year = postpaidAddressForm.userDetails.thai_id_expire_year - 543;
                  meta.birth_time = form.birthtime;
                  meta.timezone = form.timezone;
                  meta.correlation_id = _this8.postpaidResult.correlation_id;
                  meta.dealer_code = _this8.postpaidResult.dealer_code;
                  meta.price_plan.proposition_amdoc = _this8.postpaidResult.proposition_amdoc;
                  meta.price_plan.company_code = _this8.postpaidResult.company_code;
                  meta.user_information.iden_type = 'I';
                  meta.berfuntong = {
                    first_name: form.firstname,
                    last_name: form.lastname,
                    grade: drluckNumber.grade,
                    group: drluckNumber.group,
                    subgroup: drluckNumber.subgroup,
                    group_title: drluckNumber.group_title,
                    subgroup_title: drluckNumber.subgroup_title
                  };
                  meta.user_information.gender = gender === 'ชาย' ? '1' : '2';
                }

                checkSimFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'));
                companyCode = localStorage.getItem('company_code');
                propoAmdoc = localStorage.getItem('proposition_amdoc');

                if ((_this8.$route.name === 'online-store-postpaid-verify' || _this8.$route.name === 'online-store-lucky-verify' || _this8.$route.name === 'online-store-lucky-9999-verify') && (window.no_ekyc_sim_only || checkSimFamilyInfo !== null)) {
                  meta.campaign_type = checkSimFamilyInfo !== null ? 'sim_only_epp' : 'sim_only';
                  meta.correlation_id = _this8.postpaidResult.correlation_id; // No need for esim

                  meta.dealer_code = _this8.postpaidResult.dealer_code; // No need for esim

                  meta.user_information.iden_type = 'I';
                  meta.price_plan.company_code = companyCode;
                  meta.sim_info = {
                    proposition_amdoc: propoAmdoc,
                    proposition_rms: _this8["package"].proposition_rms,
                    product_name: _this8["package"].product_name,
                    campaign_name: _this8["package"].campaign_name,
                    discount: _this8["package"].discount,
                    discount_code: _this8["package"].discount_code,
                    other_pay_amount_code: _this8["package"].other_pay_amount_code,
                    other_pay_amount: _this8["package"].other_pay_amount
                  };

                  if (_this8.sim_source_type === 'physical-sim') {
                    meta.price_plan.nas_code = _this8["package"].external_nas_code;
                  }

                  if (_this8.simSourceType === 'e-sim') {
                    meta.sim_info.proposition_nas_code = _this8["package"].external_nas_code;
                    meta.sim_info.promotion_set = _this8["package"].promotion_set;
                    meta.price_plan.nas_code = _this8["package"].external_nas_code;
                    meta.advance_payment = _this8["package"].advance_payment;
                  }

                  if (_this8.postpaidResult.ekyc_hash && meta.campaign_type === 'sim_only_epp') meta.ekyc_hash = _this8.postpaidResult.ekyc_hash;
                }

                if (window.localStorage.getItem('sim_family_info')) {
                  simFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'));
                  meta.sim_family_info = {
                    hdr_cp_fan_emp_thai_id: _this8.postpaidResult.thai_id,
                    hdr_cp_fan_emp_id: simFamilyInfo.hdr_cp_fan_emp_id,
                    hdr_cp_fan_company_group: simFamilyInfo.hdr_cp_fan_company_group
                  };
                  if (simFamilyInfo.hdr_cp_fan_ref_code) meta.sim_family_info.hdr_cp_fan_ref_code = simFamilyInfo.hdr_cp_fan_ref_code;
                }

                if (_this8.$route.name === 'online-store-prepaid-verify') {
                  if (_this8.simSourceType === 'e-sim' && _this8.pricePlans.length === 1) {
                    if (window.localStorage.getItem('ref_id')) {
                      meta.ref_id = window.localStorage.getItem('ref_id');
                    }

                    meta.correlation_id = _this8.postpaidResult.correlation_id; // No need for esim

                    meta.dealer_code = _this8.postpaidResult.dealer_code; // No need for esim

                    meta.user_information.iden_type = 'I';
                    meta.price_plan = {
                      id: _this8.pricePlans[0].id,
                      code: _this8.pricePlans[0].code,
                      sim_type: _this8.pricePlans[0].sim_type,
                      nas_code: _this8.pricePlans[0].external_code,
                      proposition_nas_code: _this8.pricePlans[0].proposition_nas_code,
                      campaign_code: _this8.pricePlans[0].campaign_code,
                      company_code: companyCode
                    };
                    meta.sim_info = {
                      proposition_nas_code: _this8["package"].external_nas_code,
                      proposition_amdoc: propoAmdoc,
                      proposition_rms: _this8["package"].proposition_rms,
                      promotion_set: _this8["package"].promotion_set,
                      product_name: _this8["package"].product_name,
                      campaign_name: _this8["package"].campaign_name,
                      discount: _this8["package"].discount,
                      discount_code: _this8["package"].discount_code,
                      other_pay_amount_code: _this8["package"].other_pay_amount_code,
                      other_pay_amount: _this8["package"].other_pay_amount
                    };
                    meta.campaign_type = 'sim_only';
                  }
                }

                data = {
                  product_id: _this8.$route.params.id,
                  inventory_id: inventoryId,
                  store_id: _this8.product.store_id,
                  section: _this8.product.section,
                  quantity: 1,
                  sim_meta: [meta],
                  channel: 'tmh-website'
                };

                if (_this8.product.product_type === 'sim' && _this8.simSourceType) {
                  data.meta = {
                    sim_source_type: _this8.simSourceType
                  };
                }

                hash = window.localStorage.getItem('cart-id');
                if (hash) data.hash = hash;
                _context9.prev = 15;
                _context9.next = 18;
                return _this8.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["UPDATE_POSTPAID_CART"], {
                  data: data
                });

              case 18:
                result = _context9.sent;
                window.localStorage.setItem('cart-id', result.cart_hash); // Add log for add to cart

                _this8.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_CART"], {
                  id: result.cart_hash
                }).then(function (_ref) {
                  var data = _ref.data;
                  data.record[0].products.forEach(function (product) {
                    var amount = product.inventory.price;
                    var quantity = product.quantity;
                    Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])({
                      event: 'Cart',
                      status: 'add',
                      productId: product.id,
                      matcode: product.inventory.sku,
                      quantity: quantity,
                      amount: amount
                    });
                  });
                });

                _context9.next = 23;
                return Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["updateEntPack"])(_this8.$route.query.ep, _this8.$route.query, _this8.product, result.cart_hash, {
                  id: inventoryId,
                  nas: _this8.$route.params.nas
                });

              case 23:
                if (_this8.isPrepaid) {
                  localStorage.removeItem('prepaid-sim-number');
                }

                _this8.$router.push("/cart?id=".concat(result.cart_hash));

                _context9.next = 36;
                break;

              case 27:
                _context9.prev = 27;
                _context9.t0 = _context9["catch"](15);

                if (!((_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) === 'err-ent-pack')) {
                  _context9.next = 33;
                  break;
                }

                return _context9.abrupt("return", _this8.$router.push('/cart?error=030'));

              case 33:
                if (!((_context9.t0 === null || _context9.t0 === void 0 ? void 0 : (_e$message = _context9.t0.message) === null || _e$message === void 0 ? void 0 : _e$message.en) === 'sku_limit')) {
                  _context9.next = 35;
                  break;
                }

                return _context9.abrupt("return", _this8.$router.push('/cart?error=020'));

              case 35:
                _this8.loading = false;

              case 36:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[15, 27]]);
      }))();
    },
    updateBundleCart: function updateBundleCart(meta) {
      var _this9 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee10() {
        var bundle, deviceProduct, simProduct, simFamilyInfo, data, addons, _data$products$, hash, result, _e$message2;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                bundle = _this9.product.bundles.find(function (bundle) {
                  return bundle.id === _this9.$route.params.bundle;
                });
                deviceProduct = bundle.inventories.find(function (inventory) {
                  return inventory.product_id === _this9.product.id;
                });
                simProduct = bundle.inventories.find(function (inventory) {
                  return inventory.product_id !== _this9.product.id;
                });
                meta.product_info.product_id = simProduct.product_id.replace(/\D/g, '');
                meta.advance_payment = bundle.advance_payment;

                _this9.setEkyc(meta.ekyc, simProduct.product_id);

                delete meta.ekyc;
                delete meta.price_plan.long_description;
                delete meta.price_plan.proposition_term_long;
                meta.sim_image = _this9.packages.package_image_desktop;
                meta.sim_source_type = _this9.simSourceType; // e-sim or physical-sim
                // set meta for case esim only

                if (_this9.simSourceType === 'e-sim') {
                  meta.campaign_type = 'device_bundling'; // e-sim = device_bundling
                }

                if (window.localStorage.getItem('sim_family_info')) {
                  simFamilyInfo = JSON.parse(window.localStorage.getItem('sim_family_info'));
                  meta.sim_family_info = {
                    hdr_cp_fan_emp_thai_id: _this9.postpaidResult.thai_id,
                    hdr_cp_fan_emp_id: simFamilyInfo.hdr_cp_fan_emp_id,
                    hdr_cp_fan_company_group: simFamilyInfo.hdr_cp_fan_company_group
                  };
                  if (simFamilyInfo.hdr_cp_fan_ref_code) meta.sim_family_info.hdr_cp_fan_ref_code = simFamilyInfo.hdr_cp_fan_ref_code;
                }

                data = {
                  bundle_channel: 'tmvh-official-website',
                  products: [{
                    product_id: deviceProduct.product_id,
                    inventory_id: _this9.$route.params.inventory_id ? _this9.$route.params.inventory_id : deviceProduct.inventory_id,
                    store_id: _this9.product.store_id,
                    bundle_hash: bundle.id,
                    bundle_ref_code: bundle.ref_code,
                    quantity: '1',
                    lang: 'th',
                    section: 'wemall',
                    user_id: '0',
                    channel: 'tmh-website'
                  }, {
                    product_id: simProduct.product_id,
                    inventory_id: simProduct.inventory_id,
                    store_id: _this9.product.store_id,
                    bundle_hash: bundle.id,
                    bundle_ref_code: bundle.ref_code,
                    sim_meta: [meta],
                    quantity: '1',
                    lang: 'th',
                    section: 'wemall',
                    user_id: '0',
                    is_catalog: 'false',
                    channel: 'tmh-website'
                  }],
                  user_id: '0',
                  section: 'wemall'
                };
                addons = !_this9.isPaysmooth ? Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["computeAddons"])(_this9.$route.query, _this9.product) : [];
                data.products = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.products), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(addons));
                data.products[1].meta = {
                  sim_source_type: _this9.simSourceType || 'physical-sim'
                };
                if (_this9.isPaysmooth) data.products = data.products.map(function (product) {
                  return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product), {}, {
                    meta: {
                      pay_smooth: true
                    }
                  });
                });

                if (localStorage.getItem('iot-package')) {
                  data.products[0].meta = JSON.parse(localStorage.getItem('iot-package'));
                }

                if (_this9.isCampaignRedeemFreeDevice || _this9.isCampaignFreeDevice) {
                  if ((_data$products$ = data.products[0]) !== null && _data$products$ !== void 0 && _data$products$.meta) {
                    data.products[0].meta.free_device = _this9.product.config_free_device[_this9.product.product_type];
                  } else {
                    data.products[0].meta = {
                      free_device: _this9.product.config_free_device[_this9.product.product_type]
                    };
                  }
                }

                _context10.next = 22;
                return _this9.trackAnalytics({
                  meta: meta,
                  bundle: bundle,
                  sim: simProduct,
                  product: Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    inventory: _this9.product.inventories.find(function (e) {
                      return e.id === deviceProduct.inventory_id;
                    })
                  }, _this9.product)
                });

              case 22:
                hash = window.localStorage.getItem('cart-id');
                if (hash) data.hash = hash;
                _context10.prev = 24;
                _context10.next = 27;
                return _this9.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["UPDATE_BUNDLE_CART"], {
                  data: data
                });

              case 27:
                result = _context10.sent;

                // Add log for add to cart
                _this9.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_CART"], {
                  id: hash
                }).then(function (_ref2) {
                  var data = _ref2.data;

                  if (data && data.record && data.record[0]) {
                    data.record[0].products.forEach(function (product) {
                      var amount = product.inventory.price;
                      var quantity = product.quantity;
                      var advancePayment = '';

                      if (product.product_type === 'device_bundle_new_customer') {
                        amount -= product.bundles[0].discount;
                        advancePayment = product.bundles[0].advance_payment;
                      }

                      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])({
                        event: 'Cart',
                        status: 'add',
                        productId: product.id,
                        matcode: product.inventory.sku,
                        quantity: quantity,
                        amount: amount,
                        advancePayment: advancePayment
                      });
                    });
                  }
                });

                window.localStorage.setItem('cart-id', result.cart_hash);
                _context10.next = 32;
                return Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["updateEntPack"])(_this9.$route.query.ep, _this9.$route.query, _this9.product, result.cart_hash, {
                  id: deviceProduct.inventory_id
                });

              case 32:
                _this9.$router.push("/cart?id=".concat(result.cart_hash));

                _context10.next = 44;
                break;

              case 35:
                _context10.prev = 35;
                _context10.t0 = _context10["catch"](24);

                if (!((_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) === 'err-ent-pack')) {
                  _context10.next = 41;
                  break;
                }

                return _context10.abrupt("return", _this9.$router.push('/cart?error=030'));

              case 41:
                if (!((_context10.t0 === null || _context10.t0 === void 0 ? void 0 : (_e$message2 = _context10.t0.message) === null || _e$message2 === void 0 ? void 0 : _e$message2.en) === 'sku_limit')) {
                  _context10.next = 43;
                  break;
                }

                return _context10.abrupt("return", _this9.$router.push('/cart?error=020'));

              case 43:
                _this9.loading = false;

              case 44:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[24, 35]]);
      }))();
    },
    removeProduct: function removeProduct() {
      var _this10 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee11() {
        var cartId, error, removeProducts, store, result, i, j, item, sim, bundle, deviceProduct, sameProductId, sameInventoryId, sameMat, isDevBundle, isSim, _isDevBundle, _isSim, _i, _item;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                cartId = window.localStorage.getItem('cart-id');

                if (!cartId) {
                  _context11.next = 19;
                  break;
                }

                error = '';
                removeProducts = [];
                _context11.next = 6;
                return _this10.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_CART"], {
                  id: cartId
                });

              case 6:
                store = _this10.$store.state.cart.cart;

                if (store && store.data && store.data.record) {
                  result = store.data.record;

                  for (i in result) {
                    for (j in result[i].products) {
                      item = result[i].products[j];
                      sim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard'];

                      if (_this10.product.product_type === 'device_bundle_new_customer') {
                        bundle = _this10.product.bundles.find(function (e) {
                          return e.id === _this10.$route.params.bundle;
                        });
                        deviceProduct = bundle.inventories.find(function (e) {
                          return e.product_id === _this10.product.id;
                        });
                        sameProductId = item.id === _this10.product.id;
                        sameInventoryId = item.inventory.id.toString() === deviceProduct.inventory_id.toString();
                        sameMat = sameProductId && sameInventoryId;
                        isDevBundle = item.product_type.startsWith('device_bundle_');
                        isSim = sim.includes(item.product_type);
                        if (isDevBundle) error = sameMat ? '010' : '011';
                        if (isSim && error !== '010') error = '011';
                      }

                      if (sim.includes(_this10.product.product_type)) {
                        _isDevBundle = item.product_type.startsWith('device_bundle_');
                        _isSim = sim.includes(item.product_type);
                        if (_isDevBundle || _isSim) error = '011';
                      }
                    }
                  }
                }

                if (!error) {
                  _context11.next = 10;
                  break;
                }

                return _context11.abrupt("return", error);

              case 10:
                if (!(removeProducts.length > 0)) {
                  _context11.next = 19;
                  break;
                }

                _context11.t0 = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().keys(removeProducts);

              case 12:
                if ((_context11.t1 = _context11.t0()).done) {
                  _context11.next = 19;
                  break;
                }

                _i = _context11.t1.value;
                _item = removeProducts[_i];
                _context11.next = 17;
                return _this10.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["DELETE_CART"], {
                  id: cartId,
                  data: {
                    product_id: _item.product_id,
                    inventory_id: _item.inventory_id
                  }
                });

              case 17:
                _context11.next = 12;
                break;

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    setPrepaidDataMeta: function setPrepaidDataMeta() {
      var _this11 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee12() {
        var form;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this11.loading = true;
                form = {
                  number: _this11.$route.params.number,
                  sim_type: 'prepaid',
                  product_info: {
                    product_id: _this11.$route.params.id.replace(/\D/g, ''),
                    product_type: 'sim',
                    propo_code: _this11.$route.params.nas,
                    store_id: _this11.product.store_id,
                    inventory_id: _this11.product.inventories[0].id.toString()
                  }
                };
                _context12.next = 4;
                return _this11.computeCart(form);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    save: function save() {
      var _this12 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee13() {
        var error, postpaidAddress, postpaidAddressForm, userDetails, idCardForm, billingAddress, useIdForm, userData, form, user, billing, postpaidAddress1, postpaidBilling;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                error = '';
                postpaidAddress = _this12.$refs.postpaidAddress;

                _this12.prefillShippingAddress(postpaidAddress.getFormValue());

                if (postpaidAddress.checkValidity()) {
                  _context13.next = 7;
                  break;
                }

                window.scrollTo(0, 0);
                postpaidAddress.showFormInvalid = true;
                return _context13.abrupt("return");

              case 7:
                _this12.loading = true;
                postpaidAddress.showFormInvalid = false;
                postpaidAddressForm = postpaidAddress.getFormValue();
                userDetails = postpaidAddressForm.userDetails;
                idCardForm = postpaidAddressForm.idCardForm;
                billingAddress = postpaidAddressForm.billingAddress;
                useIdForm = postpaidAddressForm.useIdForm;
                _context13.t0 = _this12.isPostpaid;

                if (!_context13.t0) {
                  _context13.next = 19;
                  break;
                }

                _context13.next = 18;
                return _this12.checkAllowAddcart();

              case 18:
                _context13.t0 = !_context13.sent;

              case 19:
                if (!_context13.t0) {
                  _context13.next = 22;
                  break;
                }

                _this12.$router.push('/cart?error=012');

                return _context13.abrupt("return");

              case 22:
                userData = _this12.isPostpaid ? {
                  thai_id: _this12.postpaidResult.thai_id,
                  verify_time: _this12.postpaidResult.verify_time,
                  birth_date: _this12.postpaidResult.birth_date
                } : {
                  thai_id: _this12.verifyForm.id_number,
                  verify_time: _this12.verifyResult.verify_time,
                  birth_date: "".concat(_this12.verifyForm.date_birth, "/").concat(_this12.verifyForm.month_birth, "/").concat(_this12.verifyForm.year_birth)
                };
                form = {
                  number: _this12.$route.params.number,
                  sim_type: _this12.product.sim_data ? _this12.product.sim_data.sim_type : 'postpaid',
                  product_info: {
                    product_id: _this12.$route.params.id.replace(/\D/g, ''),
                    product_type: 'sim',
                    propo_code: _this12.$route.params.nas,
                    store_id: _this12.product.store_id,
                    inventory_id: _this12.product.inventories[0].id.toString()
                  },
                  price_plan: _this12.selectedPricePlan,
                  is_verify: 'true',
                  thai_id: userData.thai_id,
                  verify_time: userData.verify_time,
                  birth_date: userData.birth_date,
                  user_information: {
                    thai_id: userData.thai_id,
                    title: userDetails.title,
                    txt_title_other: userDetails.txt_title_other,
                    first_name: userDetails.first_name,
                    last_name: userDetails.last_name,
                    thai_id_expire_day: userDetails.thai_id_expire_day,
                    thai_id_expire_month: userDetails.thai_id_expire_month,
                    thai_id_expire_year: userDetails.thai_id_expire_year - 543,
                    email: userDetails.email,
                    telephone: userDetails.telephone,
                    address: idCardForm.address,
                    swine: '',
                    village: idCardForm.village,
                    building: idCardForm.building,
                    floor: idCardForm.floor,
                    room_number: idCardForm.room,
                    alley: idCardForm.alley,
                    street_name: idCardForm.road,
                    province: idCardForm.province_id,
                    district: idCardForm.city_id,
                    sub_district: idCardForm.district_id,
                    zip_code: idCardForm.postcode,
                    billing_address: {},
                    invoice_address_type: 'other_address'
                  }
                };

                if (useIdForm === 'true') {
                  form.user_information.billing_address = {
                    address: idCardForm.address,
                    swine: '',
                    village: idCardForm.village,
                    building: idCardForm.building,
                    floor: idCardForm.floor,
                    room_number: idCardForm.room,
                    alley: idCardForm.alley,
                    street_name: idCardForm.road,
                    province: idCardForm.province_id,
                    district: idCardForm.city_id,
                    sub_district: idCardForm.district_id,
                    zip_code: idCardForm.postcode
                  };
                } else {
                  form.user_information.billing_address = {
                    address: billingAddress.address,
                    swine: '',
                    village: billingAddress.village,
                    building: billingAddress.building,
                    floor: billingAddress.floor,
                    room_number: billingAddress.room,
                    alley: billingAddress.alley,
                    street_name: billingAddress.road,
                    province: billingAddress.province_id,
                    district: billingAddress.city_id,
                    sub_district: billingAddress.district_id,
                    zip_code: billingAddress.postcode
                  };
                }

                if (!_this12.isPostpaid) {
                  _context13.next = 32;
                  break;
                }

                _context13.next = 28;
                return _this12.removeProduct();

              case 28:
                error = _context13.sent;
                form.ekyc = _this12.postpaidResult.ekyc;
                _context13.next = 33;
                break;

              case 32:
                form.ekyc = {
                  id_number: _this12.verifyForm.id_number,
                  face_recog_cust_capture: _this12.verifyForm.face_recog_cust_capture,
                  'face-recog-cust-certificate': _this12.verifyForm['face-recog-cust-certificate'],
                  face_recog_cust_capture_filename: _this12.verifyForm.face_recog_cust_capture_filename,
                  'face-recog-cust-certificate-filename': _this12.verifyForm['face-recog-cust-certificate-filename']
                };

              case 33:
                user = form.user_information;
                billing = form.user_information.billing_address;
                postpaidAddress1 = [billing.address, billing.village, billing.building, billing.floor, billing.room_number, billing.street_name].filter(function (item) {
                  return item;
                }).join(', ');
                postpaidBilling = {
                  district_id: billing.sub_district,
                  city_id: billing.district,
                  province_id: billing.province,
                  country_id: '209',
                  postcode: billing.zip_code,
                  firstname: user.first_name,
                  lastname: user.last_name,
                  address1: postpaidAddress1,
                  address2: billing.alley,
                  phone: user.telephone,
                  email: user.email
                };

                if (!(error && _this12.$route.name !== 'drlucky-verify')) {
                  _context13.next = 41;
                  break;
                }

                _this12.$router.push("/cart?error=".concat(error));

                _context13.next = 54;
                break;

              case 41:
                localStorage.setItem('postpaid-billing', JSON.stringify(postpaidBilling));

                if (!_this12.isPostpaid) {
                  _context13.next = 52;
                  break;
                }

                if (!(_this12.product.product_type === 'device_bundle_new_customer')) {
                  _context13.next = 48;
                  break;
                }

                _context13.next = 46;
                return _this12.updateBundleCart(form);

              case 46:
                _context13.next = 50;
                break;

              case 48:
                _context13.next = 50;
                return _this12.computeCart(form);

              case 50:
                _context13.next = 54;
                break;

              case 52:
                _this12.$parent.setSimMeta(form);

                _this12.$parent.goTo('result');

              case 54:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    prefillShippingAddress: function prefillShippingAddress(data) {
      var deliveryAddress = {
        district_id: data.idCardForm.district_id,
        city_id: data.idCardForm.city_id,
        province_id: data.idCardForm.province_id,
        country_id: '209',
        postcode: data.idCardForm.district_id,
        firstname: data.userDetails.first_name,
        lastname: data.userDetails.last_name,
        phone: data.userDetails.telephone,
        email: data.userDetails.email,
        address1: data.idCardForm.address,
        address2: data.idCardForm.alley,
        useIdForm: data.useIdForm
      };
      var prefillAddress = {
        delivery_address: deliveryAddress
      };

      if (data.useIdForm !== 'true') {
        prefillAddress.billing_address = {
          district_id: data.billingAddress.district_id,
          city_id: data.billingAddress.city_id,
          province_id: data.billingAddress.province_id,
          country_id: '209',
          postcode: data.billingAddress.postcode,
          firstname: data.userDetails.first_name,
          lastname: data.userDetails.last_name,
          phone: data.userDetails.telephone,
          email: data.userDetails.email,
          address1: data.billingAddress.address,
          address2: data.billingAddress.alley,
          account_type: 'individual'
        };
      } else {
        prefillAddress.billing_address = {
          district_id: data.billingAddress.district_id,
          city_id: data.billingAddress.city_id,
          province_id: data.billingAddress.province_id,
          country_id: '209',
          postcode: data.billingAddress.postcode,
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          address1: '',
          address2: '',
          account_type: 'individual'
        };
      }

      localStorage.setItem('address', JSON.stringify(prefillAddress));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".address-container[data-v-b72337cc] {\n  background-color: #fff;\n  padding: 30px 30px 60px 30px;\n  border-radius: 8px;\n}\n.address-container .address-inner-container[data-v-b72337cc] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.address-container .address-title[data-v-b72337cc] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  margin-bottom: 18px;\n  color: #000;\n  text-align: center;\n}\n.address-container .address-form[data-v-b72337cc] {\n  padding-bottom: 16px;\n}\n.address-container .form-label[data-v-b72337cc] {\n  color: #000;\n  font-size: 30px;\n  line-height: 27px;\n  margin: 6px 0;\n}\n.address-container .form-container[data-v-b72337cc] {\n  margin-bottom: 26px;\n}\n.address-container .form-container[data-v-b72337cc] label {\n  line-height: 27px;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #4a4a4a;\n}\n.address-container .form-container[data-v-b72337cc] input {\n  background-color: #fff;\n  border-radius: 8px;\n  border: 1px solid #000;\n  font-family: \"TrueBold\";\n  font-size: 24px;\n}\n.address-container .form-container[data-v-b72337cc] input::-moz-placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-b72337cc] input::placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-b72337cc] input[disabled] {\n  border-color: #cccccc;\n}\n.address-container .form.invalid-form .form-container[data-v-b72337cc] .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.address-container .user-details-form[data-v-b72337cc] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px 20px;\n}\n.address-container .user-details-form[data-v-b72337cc] .form:nth-child(1),\n.address-container .user-details-form[data-v-b72337cc] .form:nth-child(4) {\n  grid-column: 1/-1;\n}\n.address-container .user-details-form[data-v-b72337cc] .name-title-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  width: 100%;\n  grid-gap: 20px;\n  color: #4a4a4a;\n  font-size: 24px;\n}\n.address-container .user-details-form[data-v-b72337cc] .name-title-container input[type=radio] {\n  margin-right: 8px;\n}\n.address-container .user-details-form[data-v-b72337cc] .name-title-container .radio-input-container {\n  display: flex;\n  align-items: center;\n  grid-column-end: span 2;\n}\n.address-container .user-details-form[data-v-b72337cc] .name-title-container .radio-input-container:last-child {\n  grid-column: 7/-1;\n}\n.address-container .user-details-form[data-v-b72337cc] .name-title-container .custom-name-title-input {\n  margin-left: 10px;\n}\n.address-container .user-details-form[data-v-b72337cc] .expiration-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 100%;\n  grid-gap: 20px;\n}\n.address-container .id-card-form[data-v-b72337cc] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px 20px;\n}\n.address-container .id-card-form[data-v-b72337cc] .form:first-child {\n  grid-column: 1/-1;\n}\n.address-container .billing-address-same[data-v-b72337cc] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 20px;\n  margin: 10px 0;\n}\n.address-container .billing-address-same label[data-v-b72337cc] {\n  font-size: 24px;\n  line-height: 27px;\n  color: #4a4a4a;\n  margin-left: 10px;\n}\n.address-container .agreement-container[data-v-b72337cc] {\n  font-size: 24px;\n  line-height: 35px;\n  color: #666;\n  border-top: 1px solid #ddd;\n  padding-top: 16px;\n}\n.address-container .agreement-container span[data-v-b72337cc] {\n  font-family: \"TrueBold\";\n}\n.address-container .agreement-container label[data-v-b72337cc] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.address-container .agreement-container input[data-v-b72337cc] {\n  margin-right: 8px;\n}\n.address-container .agreement-container a[data-v-b72337cc] {\n  margin: 0 4px;\n  color: #ff0000;\n}\n.address-container .save-button-container[data-v-b72337cc] {\n  margin-top: 36px;\n  text-align: center;\n}\n.address-container .save-button-container .button[data-v-b72337cc] {\n  background: #ff0000;\n}\n.address-container .save-button-container .button[disabled][data-v-b72337cc] {\n  background: #9e9e9e;\n}\n@media screen and (max-width: 860px) {\n.address-container[data-v-b72337cc] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 4px;\n    padding: 24px 16px;\n}\n.address-container .billing-address-same label[data-v-b72337cc] {\n    font-size: 20px;\n}\n.address-container .id-card-form[data-v-b72337cc] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 0;\n}\n.address-container .form-container[data-v-b72337cc] label {\n    font-size: 20px;\n}\n.address-container .address-title[data-v-b72337cc] {\n    font-size: 24px;\n    line-height: 30px;\n}\n.address-container .form-label[data-v-b72337cc] {\n    font-size: 22px;\n}\n.address-container .user-details-form[data-v-b72337cc] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 0;\n}\n.address-container .user-details-form .name-title-container[data-v-b72337cc] {\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 12px;\n}\n.address-container .user-details-form .name-title-container .radio-input-container[data-v-b72337cc] {\n    grid-column-end: auto;\n}\n.address-container .user-details-form .name-title-container .radio-input-container[data-v-b72337cc]:last-child {\n    grid-column: 1/-1;\n}\n.address-container .user-details-form .expiration-container[data-v-b72337cc] {\n    grid-gap: 8px;\n}\n.address-container .billing-address-same[data-v-b72337cc] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 8px;\n}\n.address-container .agreement-container[data-v-b72337cc] {\n    line-height: 20px;\n    font-size: 20px;\n}\n.address-container .agreement-container > div[data-v-b72337cc] {\n    margin-bottom: 8px;\n}\n.address-container .agreement-container label[data-v-b72337cc] {\n    display: block;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true& ***!
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
    [
      _c("loading-element", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading",
          },
        ],
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                !_vm.loading &&
                (!_vm.isPrepaid || _vm.simSourceType === "e-sim"),
              expression:
                "!loading && (!isPrepaid || simSourceType === 'e-sim')",
            },
          ],
          staticClass: "address-container",
        },
        [
          _c(
            "div",
            { staticClass: "address-inner-container" },
            [
              _c("postpaid-address", {
                ref: "postpaidAddress",
                on: {
                  loading: function ($event) {
                    _vm.formValid = !$event
                  },
                  ready: function ($event) {
                    _vm.loading = false
                  },
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "agreement-container" }, [
                _c("div", [
                  _vm._v(_vm._s(_vm.Locale.agreement1[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.agreeTnc,
                          expression: "agreeTnc",
                        },
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.agreeTnc)
                          ? _vm._i(_vm.agreeTnc, null) > -1
                          : _vm.agreeTnc,
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.agreeTnc,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.agreeTnc = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.agreeTnc = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.agreeTnc = $$c
                          }
                        },
                      },
                    }),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.Locale.agreement2[_vm.$i18n.locale]) +
                        "\n          "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.agreeCancel,
                          expression: "agreeCancel",
                        },
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.agreeCancel)
                          ? _vm._i(_vm.agreeCancel, null) > -1
                          : _vm.agreeCancel,
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.agreeCancel,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.agreeCancel = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.agreeCancel = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.agreeCancel = $$c
                          }
                        },
                      },
                    }),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.Locale.agreement3[_vm.$i18n.locale]) +
                        "\n          "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "save-button-container" },
                [
                  _c(
                    "button-element",
                    {
                      staticClass: "button",
                      attrs: { disabled: !_vm.valid },
                      on: { click: _vm.save },
                    },
                    [_vm._v(_vm._s(_vm.Locale.address_next[_vm.$i18n.locale]))]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/address.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/address.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=b72337cc&scoped=true& */ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true&");
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b72337cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=style&index=0&id=b72337cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_b72337cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=template&id=b72337cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/address.vue?vue&type=template&id=b72337cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_b72337cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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