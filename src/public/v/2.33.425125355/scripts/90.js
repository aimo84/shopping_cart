(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_3__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      isLoading: false,
      error: false,
      errorMessage: '',
      footerObserver: false
    };
  },
  computed: {
    clmVasVerify: function clmVasVerify() {
      return this.$store.state.clm.clmVasVerify;
    },
    packageList: function packageList() {
      return this.$store.state.clm.clmVasPackageList;
    },
    selectedPackage: function selectedPackage() {
      var _this = this;

      var data = this.$store.state.clm.clmVasPackageList.tierBeanList[this.data["package"].tier].offeringBeanList;
      var offer = data.find(function (d) {
        return d.campOfferingID === _this.data["package"].id;
      });
      return {
        name: this.isTol ? offer.vasDesc : offer.convertDesc,
        chargeType: offer.chargeType,
        price: offer.chargeAmount ? offer.chargeAmount.toFixed(2) : 'N/A',
        vat: offer.chargeAmount ? (offer.chargeAmount * 0.07).toFixed(2) : 'N/A',
        totalPrice: offer.chargeAmount ? (offer.chargeAmount * (this.isTmvhPrepaid ? 1 : 1.07)).toFixed(2) : 'N/A'
      };
    },
    isTol: function isTol() {
      return this.$route.name === 'clmtolvas';
    },
    isTmvhPostpaid: function isTmvhPostpaid() {
      return this.$route.name === 'clmtmvhvas' && this.packageList.type === 'postpaid';
    },
    isTmvhPrepaid: function isTmvhPrepaid() {
      return this.$route.name === 'clmtmvhvas' && this.packageList.type === 'prepaid';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.stickyFooter();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.footerObserver) this.footerObserver.disconnect();
  },
  methods: {
    stickyFooter: function stickyFooter() {
      var _this3 = this;

      if (!('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window) || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) return;
      this.footerObserver = new IntersectionObserver(function (_ref) {
        var _ref2 = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
            e = _ref2[0];

        _this3.$refs.footer.classList.toggle('is-sticky', e.intersectionRatio < 1);
      }, {
        threshold: [1]
      });
      this.footerObserver.observe(this.$refs.footerIO);
    },
    submitOffer: function submitOffer() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var clmPackageData, logData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this4.isLoading = true;
                clmPackageData = [_this4.selectedPackage.name, _this4.selectedPackage.chargeType];
                logData = {
                  status: 'confirm',
                  selectedCampId: _this4.data.campid,
                  clmPackageData: clmPackageData,
                  clmPrice: _this4.selectedPackage.price
                };

                if (_this4.$route.name === 'clmtolvas') {
                  logData.event = 'CLM TOL Vas package';
                  logData.type = 'TOLVAS';
                  logData.circuitId = _this4.data.tol.circuit_id;
                  logData.thaiId = _this4.data.tol.thai_id;
                } else {
                  logData.event = 'CLM TMVH Vas package';
                  logData.type = 'TMVHVAS';
                  logData.mobileNumber = _this4.data.otp.phoneNumber;
                }

                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_7__["loggerAddon"])(logData);
                _context2.next = 8;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["POST_CLM_VAS_CONFIRM_PACKAGE"], {
                  id: _this4.isTol ? 'tol' : 'tmvh',
                  data: {
                    identity: _this4.clmVasVerify.identity,
                    camp_id: _this4.data.campId,
                    selected_offer: _this4.data["package"].id,
                    selected_package: clmPackageData.join(','),
                    selected_price: _this4.selectedPackage.price
                  }
                });

              case 8:
                _this4.$parent.page = 'result';
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                _this4.isLoading = false;
                _this4.error = true;
                _this4.errorMessage = _context2.t0.message[_this4.$i18n.locale];

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    goBack: function goBack() {
      this.$parent.page = 'package';
    }
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".err-msg[data-v-21e6c372] {\n  font-size: 24px !important;\n}\n@media screen and (max-width: 860px) {\n.footer-container .footer-actions button[data-v-21e6c372] {\n    min-width: 50%;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner-container img[data-v-21e6c372] {\n  width: 100%;\n  display: block;\n}\n.clm-page[data-v-21e6c372] {\n  background-color: #fff;\n}\n.page-container[data-v-21e6c372] {\n  position: relative;\n  background-color: #fff;\n  max-width: 750px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.title[data-v-21e6c372] {\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-21e6c372] {\n  font-size: 24px;\n  line-height: 24px;\n}\n.confirm-button[data-v-21e6c372] {\n  margin-top: 16px;\n}\nform[data-v-21e6c372] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n  width: 100%;\n}\nform[disabled][data-v-21e6c372] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-21e6c372] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-21e6c372] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-21e6c372] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-21e6c372] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-21e6c372] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}\n.text-center[data-v-21e6c372] {\n  text-align: center;\n}\n.my-1[data-v-21e6c372] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-21e6c372] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-21e6c372] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-21e6c372] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-21e6c372] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-21e6c372] {\n  margin-left: 1rem;\n}\n.step-container[data-v-21e6c372] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-21e6c372] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-21e6c372] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-21e6c372] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-21e6c372] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-21e6c372] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.personal-info-extend[data-v-21e6c372] {\n  display: block;\n  margin-top: 20px;\n}\n.table-header[data-v-21e6c372] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-21e6c372] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-21e6c372] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-21e6c372] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-21e6c372] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-21e6c372] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-21e6c372] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-21e6c372] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-21e6c372] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-21e6c372]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-21e6c372] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-21e6c372] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-21e6c372] {\n  flex-direction: column;\n}\n.table .row .col[data-v-21e6c372]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-21e6c372] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-21e6c372] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-21e6c372] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-21e6c372] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-21e6c372] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-21e6c372] {\n  color: #e02020;\n}\n.color-lightblue[data-v-21e6c372] {\n  color: #0091ff;\n}\n.text-underline[data-v-21e6c372] {\n  text-decoration: underline;\n}\n.text-left[data-v-21e6c372] {\n  text-align: left;\n}\n.cursor-pointer[data-v-21e6c372] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-21e6c372] {\n  min-width: unset;\n}\n.min-width-max[data-v-21e6c372] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-21e6c372] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n  margin: 16px;\n}\n.term-cond .title[data-v-21e6c372] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-21e6c372] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-21e6c372] {\n  display: none;\n  background-color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n  transition: 150ms ease box-shadow;\n}\n.footer-container.is-sticky[data-v-21e6c372] {\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n}\n.footer-container.non-sticky[data-v-21e6c372] {\n  position: relative;\n}\n.footer-container .footer-actions[data-v-21e6c372] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-21e6c372] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-21e6c372] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-21e6c372] {\n  font-size: 2rem;\n}\n.success-container[data-v-21e6c372] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-21e6c372] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-21e6c372] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-21e6c372] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-21e6c372] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-21e6c372] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-21e6c372] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-21e6c372] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-21e6c372]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-21e6c372]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-21e6c372] {\n  font-size: 16px;\n  color: #ff0000;\n}\n.package_chargetype[data-v-21e6c372] {\n  font-size: 18px;\n  color: #808080;\n}\n.warning[data-v-21e6c372] {\n  color: #e02020;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-21e6c372] {\n    width: 100%;\n}\n.table-header[data-v-21e6c372] {\n    font-size: 24px;\n}\n.table .highlight[data-v-21e6c372] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-21e6c372] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-21e6c372] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-21e6c372] {\n    display: block;\n}\n.bottom-actions-container[data-v-21e6c372] {\n    display: none;\n}\n.step1-grid-row-2[data-v-21e6c372] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-21e6c372] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-21e6c372] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-21e6c372] {\n    display: revert;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "page-container text-center" },
    [
      _c(
        "div",
        { staticClass: "step-container" },
        [
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/personal-info.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("ข้อมูลส่วนตัว")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/choose-package.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("เลือกแพ็กเกจ")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/summary.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("สรุปรายการ")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-header" }, [
        _vm._v("สรุปรายการแพ็กเกจเสริมที่สั่งซื้อ"),
      ]),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element")
        : _c("div", { staticClass: "my-1" }, [
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("แพ็กเกจ : ")]),
              _vm._v(" "),
              _c("span", { staticClass: "color-red" }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.selectedPackage.name) + "\n        "
                ),
                _vm.selectedPackage.chargeType === "RC"
                  ? _c("span", { staticClass: "package_chargetype" }, [
                      _c("br"),
                      _vm._v("(แบบต่อเนื่อง ตามรอบบิลของแพ็คเกจหลัก)"),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.selectedPackage.chargeType === "OC"
                  ? _c("span", { staticClass: "package_chargetype" }, [
                      _c("br"),
                      _vm._v("(แบบรายครั้ง)"),
                    ])
                  : _vm._e(),
              ]),
            ]),
            _vm._v(" "),
            _vm.isTol || _vm.isTmvhPostpaid
              ? _c("div", { staticClass: "personal-info" }, [
                  _c("span", { staticClass: "font-bold" }, [_vm._v("ราคา : ")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "color-red" }, [
                    _vm._v(_vm._s(_vm.selectedPackage.price) + " ฿"),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isTol || _vm.isTmvhPostpaid
              ? _c("div", { staticClass: "personal-info" }, [
                  _c("span", { staticClass: "font-bold" }, [
                    _vm._v("ภาษีมูลค่าเพิ่ม (Vat 7%): "),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "color-red" }, [
                    _vm._v(_vm._s(_vm.selectedPackage.vat) + " ฿"),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("ราคารวม : ")]),
              _vm._v(" "),
              _c("span", { staticClass: "color-red" }, [
                _vm._v(_vm._s(_vm.selectedPackage.totalPrice) + " ฿"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info personal-info-extend" }, [
              _vm.isTol
                ? _c("span", [
                    _vm._v("คิดค่าบริการต่อเนื่องบนใบแจ้งค่าบริการ ทรูออนไลน์"),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isTmvhPostpaid
                ? _c("span", [
                    _vm._v("เรียกเก็บค่าบริการบนใบแจ้งค่าบริการทรูมูฟ เอช"),
                  ])
                : _vm._e(),
            ]),
          ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isLoading,
              expression: "!isLoading",
            },
          ],
          ref: "footer",
          staticClass: "footer-container",
        },
        [
          _vm.error
            ? _c("div", { staticClass: "footer-actions" }, [
                _c("div", { staticClass: "err-msg text-center my-1" }, [
                  _vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n      "),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "footer-actions grid-row-2" },
            [
              _c(
                "button-element",
                { staticClass: "bg-secondary", on: { click: _vm.goBack } },
                [_vm._v("ย้อนกลับ")]
              ),
              _vm._v(" "),
              _c("button-element", { on: { click: _vm.submitOffer } }, [
                _vm._v(
                  _vm._s(_vm.isTol ? "ยืนยันการสั่งซื้อแพ็กเกจ" : "ยอมรับ")
                ),
              ]),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isLoading,
              expression: "!isLoading",
            },
          ],
          staticClass: "bottom-actions-container my-2",
        },
        [
          _vm.error
            ? _c("div", { staticClass: "footer-actions" }, [
                _c("div", { staticClass: "err-msg text-center my-1" }, [
                  _vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n      "),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "footer-actions grid-row-2" },
            [
              _c(
                "button-element",
                { staticClass: "bg-secondary", on: { click: _vm.goBack } },
                [_vm._v("ย้อนกลับ")]
              ),
              _vm._v(" "),
              _c("button-element", { on: { click: _vm.submitOffer } }, [
                _vm._v(
                  _vm._s(_vm.isTol ? "ยืนยันการสั่งซื้อแพ็กเกจ" : "ยอมรับ")
                ),
              ]),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { ref: "footerIO" }),
    ],
    1
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

/***/ "./resources/js/pages/clm/vas/clm-vas-confirm.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-confirm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true&");
/* harmony import */ var _clm_vas_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clm-vas-confirm.vue?vue&type=script&lang=js& */ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& */ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _clm_vas_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21e6c372",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/clm/vas/clm-vas-confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=style&index=0&id=21e6c372&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_style_index_0_id_21e6c372_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-confirm.vue?vue&type=template&id=21e6c372&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_confirm_vue_vue_type_template_id_21e6c372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=1&id=21e6c372&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_21e6c372_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);