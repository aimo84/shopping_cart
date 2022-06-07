(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/paysmooth/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/paysmooth/content.json", 1);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_8__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      Locale: _content_json__WEBPACK_IMPORTED_MODULE_6__,
      page: 'mobile',
      mobileNumber: '',
      otp: ['', '', '', ''],
      loading: false,
      mobileError: false,
      otpError: false,
      verifyError: '0'
    };
  },
  computed: {
    productInfo: function productInfo() {
      if (!this.$store.state.products.productInfo.data) return;
      return this.$store.state.products.productInfo.data.record;
    },
    parsedMobileNumber: function parsedMobileNumber() {
      return this.mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    validOtp: function validOtp() {
      return this.otp.filter(function (e) {
        return e;
      }).length === 4;
    },
    minPrice: function minPrice() {
      var minPriceExisting = this.productInfo.price_min - Math.max.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.productInfo.bundle_existing.reduce(function (prev, cur) {
        return [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prev), [Math.max.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cur.discount_list.reduce(function (previ, curr) {
          return [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(previ), [curr.discount]);
        }, [])))]);
      }, [])));
      var minPriceBundles = Math.min.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.productInfo.bundles.reduce(function (prev, cur) {
        return [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prev), [cur.price_after_discount_device_bundle_new_customer]);
      }, [])));
      return Math.min(minPriceExisting, minPriceBundles);
    },
    minAR: function minAR() {
      return this.minPrice * (100 - Math.max.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.productInfo.pay_smooth.down_payment_rate))) / 100;
    },
    registerLink: function registerLink() {
      if (this.isMobile) return 'https://tmn.app.link/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000022%3Ftype%3Dcontent%26method%3D%257B%250A%2522url%2522%253A%2522https%253A%252F%252Fstudentloan-frontend.truemoneyservices.com%252Fapi%252Fv1%252Fentrypoint%253Fdata%253DewogICJ0eXBlIjoib25saW5lIgp9%2522%252C%250A%2520%2520%2522title_th%2522%253A%2522Truemoney%2522%252C%250A%2520%2520%2522title_en%2522%253A%2522Truemoney%2522%250A%257D&deeplink_no_attribution=true';
      return 'https://www.truemoney.com/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000022%3Ftype%3Dcontent%26method%3D%257B%250A%2522url%2522%253A%2522https%253A%252F%252Fstudentloan-frontend.truemoneyservices.com%252Fapi%252Fv1%252Fentrypoint%253Fdata%253DewogICJ0eXBlIjoib25saW5lIgp9%2522%252C%250A%2520%2520%2522title_th%2522%253A%2522Truemoney%2522%252C%250A%2520%2520%2522title_en%2522%253A%2522Truemoney%2522%250A%257D&deeplink_no_attribution=true&_branch_match_id=984356425047063031&_branch_referrer=H4sIAAAAAAAAA42RUU%2FDIBDHPw2%2B2VaadtFkMW5Nk%2Fpsom8NK7cVpUDgumXf3gNtjU9KyP8Ojv%2FlB4yILjzkOU4mE85lWpmP%2FFECuJhtRRjAyMkauLLyifGW5kVoDZihnyEVssFmOFKB%2FKR1XXwPzlnZ4tUBK5vBGgSDjNcT4GglbTFebXYkBfWtOJ%2B9TpGk%2FNoZI9u6bJMEnCX10VaY26NPTeUPSgB%2FVgMEQprSceFUiue7FMjpr86qCFKVrRQoYtLAxZ66%2FXMBbzvdvVt14FUQr5XuTu5%2BgeL7lbVYhaNCDX28%2Fi%2F0l4XoP24wf7mTcdPcLP%2FSG9sLRK8OMyprtvEBPgH7b5QmygEAAA%3D%3D';
    },
    isMobile: function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  },
  methods: {
    closeDialog: function closeDialog() {
      window.location.href = 'https://www.true.th/truemoveh/site/true-pay-next-extra-you';
    },
    requestOtp: function requestOtp() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!_this.loading) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.mobileError = false;
                _this.loading = true;

                if (/^[0-9]{10,10}$/.test(_this.mobileNumber)) {
                  _context.next = 7;
                  break;
                }

                throw new Error('input-invalid');

              case 7:
                _context.next = 9;
                return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_5__["FETCH_OTP"], _this.mobileNumber);

              case 9:
                _this.loading = false;
                _this.page = 'otp';
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                _this.loading = false;
                _this.mobileError = true;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }))();
    },
    resendOtp: function resendOtp() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.next = 3;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_5__["FETCH_OTP"], _this2.mobileNumber);

              case 3:
                _this2.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    verifyOtp: function verifyOtp() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var result, productId;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!_this3.loading) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _this3.loading = true;
                _context3.next = 6;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_5__["PAYSMOOTH_VERIFY"], {
                  mobile_number: _this3.mobileNumber,
                  otp: _this3.otp.join('')
                });

              case 6:
                result = _context3.sent;

                if (result.is_pass) {
                  _context3.next = 9;
                  break;
                }

                throw new Error();

              case 9:
                productId = _this3.$route.params.id.replace(/[^\w\s]/gi, '');
                _context3.next = 12;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_5__["FETCH_PRODUCT_INFO"], {
                  id: productId,
                  tmvhAuth: _this3.$route.query.token,
                  paysmoothToken: result.paysmooth_token
                });

              case 12:
                _this3.loading = false;

                if (!(result.credit / 100 < _this3.minAR)) {
                  _context3.next = 19;
                  break;
                }

                _this3.page = 'mobile';
                _this3.verifyError = '0';

                _this3.$refs.paysmoothErrorDialog.open();

                _context3.next = 20;
                break;

              case 19:
                return _context3.abrupt("return", _this3.$router.push({
                  name: 'online-store-detail',
                  params: {
                    id: _this3.$route.params.id
                  },
                  query: {
                    token: _this3.$route.query.token,
                    paysmooth_token: result.paysmooth_token
                  }
                }));

              case 20:
                _context3.next = 27;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](0);
                _this3.loading = false;

                if ((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0['is_pass']) === false) {
                  _this3.otpFailed();
                }

                if (_context3.t0.result_code) {
                  _this3.page = 'mobile';
                  _this3.otpError = false;
                  _this3.verifyError = _context3.t0.result_code.toString();

                  _this3.$refs.paysmoothErrorDialog.open();
                }

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 22]]);
      }))();
    },
    otpFailed: function otpFailed() {
      this.loading = false;
      this.otpError = true;
    },
    otpPaste: function otpPaste(e) {
      e.preventDefault();
      var value = e.clipboardData.getData('Text');
      if (!/^\d{4}$/.test(value)) return;
      this.otp = value.split('');
      this.$refs.otp.querySelectorAll('input')[3].focus();
    },
    otpKeydown: function otpKeydown(e, i) {
      if (e.key === 'Ctrl' || e.key === 'Meta' || e.key === 'v' || e.key === 'Enter') return;
      e.preventDefault();

      if (e.key === 'ArrowLeft' && i > 0) {
        this.$refs.otp.querySelectorAll('input')[i - 1].focus();
      } else if (e.key === 'ArrowRight' && i < 3) {
        this.$refs.otp.querySelectorAll('input')[i + 1].focus();
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        this.$set(this.otp, i, '');
        if (i === 0) return;
        var input = this.$refs.otp.querySelectorAll('input')[i - 1];
        input.focus();
        input.value && input.select();
      } else if (/^\d$/.test(e.key)) {
        this.$set(this.otp, i, e.key);
        if (i === 3) return;
        var _input = this.$refs.otp.querySelectorAll('input')[i + 1];

        _input.focus();

        _input.value && _input.select();
      }
    },
    otpOnclick: function otpOnclick(e) {
      if (e.target.value) e.target.select();
    },
    updateURLQuery: function updateURLQuery(key, value) {
      var query = this.$route.query;
      query[key] = value;
      var newurl = "".concat(window.location.origin).concat(window.location.pathname, "?").concat(qs__WEBPACK_IMPORTED_MODULE_7___default.a.stringify(query));
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".verify-container[data-v-177150bb] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: auto;\n  display: grid;\n  grid-gap: 16px;\n}\n.verify-container .title[data-v-177150bb] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #EC1D24;\n}\n.verify-container .title.otp[data-v-177150bb] {\n  font-size: 24px;\n  line-height: 20px;\n  color: #000;\n  padding-top: 16px;\n}\n.verify-container .title.otp .number[data-v-177150bb] {\n  font-size: 40px;\n  line-height: 40px;\n  color: #EC1D24;\n}\n.verify-container .divider[data-v-177150bb] {\n  width: 100%;\n  height: 1px;\n  background-color: #DCDDE0;\n}\n.verify-container .divider.otp[data-v-177150bb] {\n  margin: 16px 0;\n}\n.verify-container .form[data-v-177150bb] {\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  max-width: 400px;\n  margin: auto;\n}\n.verify-container .form label[data-v-177150bb] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  line-height: 24px;\n  color: #000;\n}\n.verify-container .form label.otp[data-v-177150bb] {\n  color: #979797;\n  grid-column: 1/-1;\n  text-align: left;\n  font-family: \"TrueMedium\";\n  font-size: 22px;\n}\n.verify-container .form .input[data-v-177150bb] {\n  display: grid;\n  grid-gap: 8px;\n}\n.verify-container .form .input input[data-v-177150bb] {\n  border-radius: 8px;\n  height: 45px;\n  border: 1px solid #000000;\n  padding: 0 12px;\n  font-family: \"TrueMedium\";\n  font-size: 22px;\n}\n.verify-container .form .input input[data-v-177150bb]:focus {\n  outline: none;\n}\n.verify-container .form .input .text-center[data-v-177150bb] {\n  text-align: center;\n}\n.verify-container .form .input .error[data-v-177150bb] {\n  color: #F32525;\n  font-size: 20px;\n  line-height: 20px;\n  text-align: left;\n}\n.verify-container .form .input .error.otp[data-v-177150bb] {\n  grid-column: 1/-1;\n}\n.verify-container .form .input.otp[data-v-177150bb] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 8px 12px;\n}\n.verify-container .form .input.otp input[data-v-177150bb] {\n  min-width: 0;\n  height: 60px;\n  border-radius: 8px;\n  border: 1px solid #929292;\n  font-family: \"TrueMedium\";\n  font-size: 36px;\n  text-align: center;\n}\n.verify-container .form .input.otp input[data-v-177150bb]:focus {\n  outline: none;\n}\n.verify-container .form .input.otp input[error][data-v-177150bb] {\n  border-color: #F32525;\n}\n.verify-container .form button[data-v-177150bb] {\n  cursor: pointer;\n  border-radius: 8px;\n  font-family: \"TrueBold\";\n  font-size: 26px;\n  height: 50px;\n  background-color: #F32525;\n  color: #fff;\n  border: none;\n}\n.verify-container .form button[disabled][data-v-177150bb] {\n  background-color: #9e9e9e;\n}\n.verify-container .form .resend[data-v-177150bb] {\n  color: #666;\n  font-size: 22px;\n}\n.verify-container .form .resend span[data-v-177150bb] {\n  color: #F32525;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.verify-container .notApplyYet[data-v-177150bb] {\n  color: #1EACD9;\n  font-size: 26px;\n  display: grid;\n  margin: 15px auto 0px auto;\n  max-width: 450px;\n  width: 100%;\n}\n.verify-container .checking[data-v-177150bb] {\n  padding: 160px 0;\n}\n.verify-container .checking .checking-icon[data-v-177150bb] {\n  margin-bottom: 50px;\n}\n.verify-container .checking .checking-icon svg[data-v-177150bb] {\n  width: 40px;\n  height: 40px;\n  -webkit-animation: loading-data-v-177150bb 2s linear infinite;\n          animation: loading-data-v-177150bb 2s linear infinite;\n  fill: #ff0000;\n}\n.verify-container .checking .checking-label[data-v-177150bb] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@-webkit-keyframes loading-data-v-177150bb {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-177150bb {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.confirm-payment-dialog[data-v-177150bb] {\n  text-align: center;\n  padding: 50px 5px 5px 5px;\n}\n.confirm-payment-dialog .dialog-title[data-v-177150bb] {\n  font-size: 30px;\n  font-weight: 700;\n  margin: 20px 0;\n}\n.confirm-payment-dialog .dialog-subtitle[data-v-177150bb] {\n  font-size: 26px;\n  white-space: pre-wrap;\n  line-height: 1;\n}\n.confirm-payment-dialog .red-bg-button[data-v-177150bb] {\n  margin-top: 30px;\n  width: 100%;\n  background: #EA3019;\n  border-radius: 7px;\n  font-size: 26px;\n  font-family: \"TrueBold\";\n  margin-bottom: 20px;\n}\n.confirm-payment-dialog .paysmooth-register[data-v-177150bb] {\n  color: #1EACD9;\n  font-size: 26px;\n}\n.confirm-payment-dialog .error-image[data-v-177150bb] {\n  width: 120px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c(
        "dialog-element",
        {
          key: "paysmoothErrorDialog",
          ref: "paysmoothErrorDialog",
          attrs: { extendClass: "paysmooth-error-dialog" },
        },
        [
          _c(
            "div",
            {
              staticClass: "confirm-payment-dialog",
              attrs: { slot: "content" },
              slot: "content",
            },
            [
              _c("div", { staticClass: "image" }, [
                _c("img", {
                  staticClass: "error-image",
                  attrs: { src: "/images/icons/paysmooth-error.png" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dialog-title" }, [
                _vm._v(_vm._s(_vm.Locale.verify_error.title[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dialog-subtitle" }, [
                _vm._v(
                  _vm._s(
                    _vm.Locale.verify_error.message[_vm.verifyError][
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
              _vm._v(" "),
              _c(
                "button-element",
                {
                  staticClass: "red-bg-button",
                  attrs: { id: "accept-ekyc" },
                  on: {
                    click: function ($event) {
                      return _vm.closeDialog()
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.verifyError === "0"
                        ? _vm.Locale.verify_error.reselect[_vm.$i18n.locale]
                        : _vm.Locale.verify_error.close[_vm.$i18n.locale]
                    )
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.verifyError === "3"
                ? _c(
                    "a",
                    {
                      staticClass: "paysmooth-register",
                      attrs: { href: _vm.registerLink },
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.verify_error.register[_vm.$i18n.locale]
                        )
                      ),
                    ]
                  )
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.page === "mobile"
        ? [
            _c("div", [
              _c("div", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(_vm.Locale.verify.mobile.title[_vm.$i18n.locale])
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "divider" }),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                  },
                },
              },
              [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(
                    _vm._s(_vm.Locale.verify.mobile.label[_vm.$i18n.locale])
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mobileNumber,
                        expression: "mobileNumber",
                      },
                    ],
                    class: "text-center",
                    attrs: {
                      disabled: _vm.loading,
                      placeholder:
                        _vm.Locale.verify.mobile.placeholder[_vm.$i18n.locale],
                      inputmode: "tel",
                      type: "text",
                    },
                    domProps: { value: _vm.mobileNumber },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.mobileNumber = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.mobileError
                    ? _c("div", { staticClass: "error" }, [
                        _vm._v(
                          _vm._s(
                            _vm.Locale.verify.mobile.error[_vm.$i18n.locale]
                          )
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    attrs: { id: "get-otp", disabled: _vm.loading },
                    on: { click: _vm.requestOtp },
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.Locale.verify.mobile.button[_vm.$i18n.locale])
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "notApplyYet", attrs: { href: _vm.registerLink } },
              [_vm._v(_vm._s(_vm.Locale.notApplyYet[_vm.$i18n.locale]))]
            ),
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "otp"
        ? [
            _c("div", { staticClass: "title otp" }, [
              _vm._v(
                _vm._s(_vm.Locale.verify.otp.title[_vm.$i18n.locale]) + " "
              ),
              _c("div", { staticClass: "number" }, [
                _vm._v(_vm._s(_vm.parsedMobileNumber) + " "),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                  },
                },
              },
              [
                _c("div", { ref: "otp", staticClass: "input otp" }, [
                  _c("label", { staticClass: "otp" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.verify.otp.label[_vm.$i18n.locale])
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.otp[0],
                        expression: "otp[0]",
                      },
                    ],
                    attrs: {
                      autocomplete: "one-time-code",
                      type: "number",
                      inputmode: "decimal",
                      disabled: _vm.loading,
                      error: _vm.otpError,
                      autofocus: "",
                    },
                    domProps: { value: _vm.otp[0] },
                    on: {
                      paste: _vm.otpPaste,
                      click: _vm.otpOnclick,
                      keydown: function ($event) {
                        return _vm.otpKeydown($event, 0)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.otp, 0, $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.otp[1],
                        expression: "otp[1]",
                      },
                    ],
                    attrs: {
                      type: "number",
                      inputmode: "decimal",
                      disabled: _vm.loading,
                      error: _vm.otpError,
                    },
                    domProps: { value: _vm.otp[1] },
                    on: {
                      click: _vm.otpOnclick,
                      keydown: function ($event) {
                        return _vm.otpKeydown($event, 1)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.otp, 1, $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.otp[2],
                        expression: "otp[2]",
                      },
                    ],
                    attrs: {
                      type: "number",
                      inputmode: "decimal",
                      disabled: _vm.loading,
                      error: _vm.otpError,
                    },
                    domProps: { value: _vm.otp[2] },
                    on: {
                      click: _vm.otpOnclick,
                      keydown: function ($event) {
                        return _vm.otpKeydown($event, 2)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.otp, 2, $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.otp[3],
                        expression: "otp[3]",
                      },
                    ],
                    attrs: {
                      type: "number",
                      inputmode: "decimal",
                      disabled: _vm.loading,
                      error: _vm.otpError,
                    },
                    domProps: { value: _vm.otp[3] },
                    on: {
                      click: _vm.otpOnclick,
                      keydown: function ($event) {
                        return _vm.otpKeydown($event, 3)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.otp, 3, $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.otpError
                    ? _c("div", { staticClass: "error otp" }, [
                        _vm._v(
                          _vm._s(_vm.Locale.verify.otp.error[_vm.$i18n.locale])
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "divider otp" }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    attrs: {
                      id: "verify-otp",
                      disabled: !_vm.validOtp || _vm.loading,
                    },
                    on: { click: _vm.verifyOtp },
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.Locale.verify.otp.button[_vm.$i18n.locale])
                    ),
                  ]
                ),
                _vm._v(" "),
                !_vm.loading
                  ? _c("div", { staticClass: "resend" }, [
                      _vm._v(
                        _vm._s(_vm.Locale.verify.otp.resend[_vm.$i18n.locale]) +
                          " "
                      ),
                      _c("span", { on: { click: _vm.resendOtp } }, [
                        _vm._v(
                          _vm._s(
                            _vm.Locale.verify.otp.resend_action[
                              _vm.$i18n.locale
                            ]
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            ),
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "checking"
        ? [
            _c("div", { staticClass: "checking" }, [
              _c("div", { staticClass: "checking-icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      width: "512",
                      height: "512",
                      viewBox: "0 0 512 512",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "checking-label" }, [
                _vm._v(_vm._s(_vm.Locale.checking[_vm.$i18n.locale])),
              ]),
            ]),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/paysmooth/content.json":
/*!***************************************************!*\
  !*** ./resources/js/pages/paysmooth/content.json ***!
  \***************************************************/
/*! exports provided: title, description, condition1, condition2, condition3, buttonRegister, buttonCheckout, error, notApplyYet, verify, verify_error, payment, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"th\":\"Pay Later\",\"en\":\"Pay Later\"},\"description\":{\"th\":\"วงเงินพร้อมใช้ เพื่อการใช้จ่าย\",\"en\":\"วงเงินพร้อมใช้ เพื่อการใช้จ่าย\"},\"condition1\":{\"th\":\"กดรับวงเงินทันที ไม่ขอเอกสาร\",\"en\":\"กดรับวงเงินทันที ไม่ขอเอกสาร\"},\"condition2\":{\"th\":\"ดอกเบี้ย 0% (หากชำระคืนเต็มจำนวน ภายในเวลาที่กำหนด)\",\"en\":\"ดอกเบี้ย 0% (หากชำระคืนเต็มจำนวน ภายในเวลาที่กำหนด)\"},\"condition3\":{\"th\":\"รู้ผลอนุมัติทันที ไม่ต้องรอ\",\"en\":\"รู้ผลอนุมัติทันที ไม่ต้องรอ\"},\"buttonRegister\":{\"th\":\"สมัครสินเชื่อ PayLater\",\"en\":\"Apply TrueMoney PayLater\"},\"buttonCheckout\":{\"th\":\"สมัครเรียบร้อยแล้วดำเนินการหน้าชำระเงิน\",\"en\":\"Already approved and continue to payment.\"},\"error\":{\"th\":\"มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง\",\"en\":\"One or more fields contain have an error. Please check and try again.\"},\"notApplyYet\":{\"th\":\"หากยังไม่ได้สมัครเข้าร่วม เพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา คลิกเลย\",\"en\":\"Click Here to apply for Pay Next Extra for students loan\"},\"verify\":{\"mobile\":{\"title\":{\"en\":\"Eligible for Pay Next Extra for students loan users with the credit loan\",\"th\":\"สำหรับลูกค้าที่สมัครและได้รับวงเงิน เพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา\"},\"label\":{\"en\":\"Please login by entering your registered mobile number\",\"th\":\"กรอกหมายเลขโทรศัพท์เพื่อเข้าสู่ระบบ\"},\"placeholder\":{\"en\":\"10 digits of mobile number\",\"th\":\"กรอกหมายเลขโทรศัพท์ 10 หลัก\"},\"button\":{\"en\":\"request OTP\",\"th\":\"ขอรหัส OTP\"},\"error\":{\"en\":\"Please enter correct phone number (10 digits)\",\"th\":\"กรุณากรอกเบอร์โทรศัพท์ 10 หลัก\"}},\"otp\":{\"title\":{\"en\":\"OTP has been sent to\",\"th\":\"OTP ถูกส่งไปยังเบอร์นี้\"},\"label\":{\"en\":\"Enter OTP\",\"th\":\"กรอก OTP\"},\"button\":{\"en\":\"Submit\",\"th\":\"ยืนยัน\"},\"error\":{\"en\":\"Please enter correct OTP.\",\"th\":\"OTP ไม่ถูกต้อง ลองใหม่นะ\"},\"resend\":{\"en\":\"Didn’t get OTP?\",\"th\":\"ไม่ได้รับ OTP ?\"},\"resend_action\":{\"en\":\"Resend\",\"th\":\"ขอ OTP ใหม่\"}}},\"verify_error\":{\"title\":{\"en\":\"Sorry for inconvenience\",\"th\":\"ขออภัยในความไม่สะดวก\"},\"close\":{\"en\":\"Close\",\"th\":\"ปิด\"},\"reselect\":{\"en\":\"choose new product\",\"th\":\"เลือกสินค้าใหม่\"},\"register\":{\"en\":\"Register for Pay Next Extra for students loan\",\"th\":\"สมัครเพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา \"},\"message\":{\"0\":{\"en\":\"Your credit is not enough.\\nPlease select other product.\",\"th\":\"คุณไม่สามารถเลือกซื้อสินค้านี้ได้\\nเนื่องจากเครดิตไม่พอ กรุณาเลือกสินค้าใหม่\"},\"1\":{\"en\":\"Your Pay Next Extra for students loan is rejected.\",\"th\":\"คุณไม่ผ่านเกณฑ์การอนุมัติ \\nเพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา\"},\"2\":{\"en\":\"Your Pay Next Extra for students loan is in the approval process. Please wait for the approval result via SMS everyday during business hours (10.00-20.30)\",\"th\":\"เพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา\\nของคุณอยู่ใน\\nขั้นตอนการอนุมัติ\\nกรุณารอผลการอนุมัติผ่าน SMS\\nทุกวันในเวลาทำการ (10.00-20.30 น.)\"},\"3\":{\"en\":\"Please register for Pay Next Extra for students loan before your processing\",\"th\":\"กรุณาทำการลงทะเบียนโครงการ\\nเพย์ เน็กซ์ เอ็กซ์ตร้า วงเงินสำหรับนักศึกษา \\nก่อนทำรายการ\"},\"9\":{\"en\":\"Something went wrong.\\nPlease try again later.\",\"th\":\"ไม่สามารถดำเนินการได้ในณะนี้\\nกรุณาทำรายใหม่อีกครั้งในภายหลัง\"}}},\"payment\":{\"title\":{\"en\":\"Please scan QR code via your mobile\",\"th\":\"สแกน คิวอาร์โค้ดนี้\"},\"subtitle\":{\"en\":\"for process to pay by\",\"th\":\"เพื่อดำเนินการผ่านช่องทาง\"},\"save\":{\"en\":\"Save QR code\",\"th\":\"บันทึกคิวอาร์โค้ดนี้\"},\"contact\":{\"en\":\"QR problem please contact 1240 press 3 press 9\",\"th\":\"พบปัญหา QR code กรุณาติดต่อ 1240 กด 3 กด 9\"}}}");

/***/ }),

/***/ "./resources/js/pages/paysmooth/verify.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/paysmooth/verify.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=177150bb&scoped=true& */ "./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true&");
/* harmony import */ var _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js& */ "./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& */ "./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "177150bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/paysmooth/verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=style&index=0&id=177150bb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_177150bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=template&id=177150bb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/paysmooth/verify.vue?vue&type=template&id=177150bb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_177150bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);