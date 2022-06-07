(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json", 1);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _components_clm_vas_tnc_verify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/clm-vas-tnc-verify */ "./resources/js/components/clm-vas-tnc-verify.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_6__["default"],
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_3__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_4__["default"],
    'clm-vas-tnc-verify': _components_clm_vas_tnc_verify__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      instantLoading: true,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      loading: false,
      showOtpForm: false,
      error: {
        phone: false,
        otp: false,
        tol: false
      },
      instantBenefit: {
        banner: {},
        headline: {},
        message: {},
        term: {}
      }
    };
  },
  computed: {
    validThaiId: function validThaiId() {
      var id = this.data.tol.thai_id;
      if (id.length !== 13) return false;
      var sum = 0;

      for (var i = 0; i < 12; i++) {
        sum += parseFloat(id.charAt(i)) * (13 - i);
      }

      if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) {
        return false;
      }

      return true;
    },
    imageId: function imageId() {
      return this.$route.name === 'clmtmvhvas' ? 'tmvh' : 'tol';
    },
    bannerUrl680webp: function bannerUrl680webp() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return "/images/clm/clm-vas-".concat(this.imageId, "-680.webp");
      }
    },
    bannerUrl680jpg: function bannerUrl680jpg() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return "/images/clm/clm-vas-".concat(this.imageId, "-680.jpg");
      }
    },
    bannerUrlwebp: function bannerUrlwebp() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return "/images/clm/clm-vas-".concat(this.imageId, ".webp");
      }
    },
    bannerUrljpg: function bannerUrljpg() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return "/images/clm/clm-vas-".concat(this.imageId, ".jpg");
      }
    },
    bannerUrl: function bannerUrl() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return "/images/clm/clm-vas-".concat(this.imageId, ".jpg");
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CLM_CAMP_ID"], null);
    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CLM_MOBILE_NO"], null);
    localStorage.removeItem('clm-camp-id');
    localStorage.removeItem('clm-mobile-number');
    localStorage.removeItem('is-clmbundle-campain');
    var campCode = {
      campCode: this.data.campId
    };
    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["GET_INSTANT_BENEFIT"], campCode).then(function (data) {
      var instantBenefitList = data.knowledgeList;
      _this.instantBenefit.banner = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Banner';
      });
      _this.instantBenefit.headline = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Headline';
      });
      _this.instantBenefit.message = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Message';
      });
      _this.instantBenefit.term = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Term and Conditions';
      });
      _this.instantLoading = false;
    });
  },
  methods: {
    fetchOtp: function fetchOtp() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this2.error.phone = false;
                _this2.loading = true;
                _context.next = 5;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["FETCH_OTP"], _this2.data.otp.phoneNumber);

              case 5:
                _this2.loading = false;
                _this2.showOtpForm = true;
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _this2.error.phone = _context.t0.message;
                _this2.loading = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    checkOtp: function checkOtp() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var logData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logData = {
                  event: 'Verify CLM TMVH Vas',
                  status: 'verify',
                  type: 'TMVHVAS',
                  selectedCampId: _this3.data.campId,
                  mobileNumber: _this3.data.otp.phoneNumber
                };
                _context2.prev = 1;

                if (_this3.data.campId) {
                  _context2.next = 4;
                  break;
                }

                throw new Error('no-camp-id');

              case 4:
                _this3.error.otp = false;
                _this3.loading = true;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _context2.next = 9;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["VERIFY_CLM_VAS"], {
                  id: 'tmvh',
                  data: {
                    camp_id: _this3.data.campId,
                    mobile_number: _this3.data.otp.phoneNumber,
                    otp: _this3.data.otp.otp
                  }
                });

              case 9:
                logData.status = 'success';
                localStorage.setItem('clm-camp-id', _this3.data.campId);
                localStorage.setItem('clm-mobile-number', _this3.data.otp.phoneNumber);

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CLM_CAMP_ID"], _this3.data.campId);

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CLM_MOBILE_NO"], _this3.data.otp.phoneNumber);

                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _this3.loading = false;
                _this3.$parent.page = 'package';
                _context2.next = 25;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](1);

                if (_context2.t0.message === 'no-camp-id') {
                  _this3.error.otp = _this3.Locale.error_message.no_campaign_id;
                } else {
                  _this3.error.otp = _context2.t0.message;
                }

                logData.status = 'fail';
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _this3.loading = false;

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 19]]);
      }))();
    },
    verifyTol: function verifyTol() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var logData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                logData = {
                  event: 'Verify CLM TOL Vas',
                  status: 'verify',
                  type: 'TOLVAS',
                  selectedCampId: _this4.data.campId,
                  circuitId: _this4.data.tol.circuit_id,
                  thaiId: _this4.data.tol.thai_id
                };
                _context3.prev = 1;

                if (_this4.data.campId) {
                  _context3.next = 4;
                  break;
                }

                throw new Error('no-camp-id');

              case 4:
                _this4.error.tol = false;
                _this4.loading = true;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _context3.next = 9;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["VERIFY_CLM_VAS"], {
                  id: 'tol',
                  data: {
                    camp_id: _this4.data.campid,
                    circuit_id: _this4.data.tol.circuit_id,
                    thai_id: _this4.data.tol.thai_id
                  }
                });

              case 9:
                logData.status = 'success';
                localStorage.setItem('clm-camp-id', _this4.data.campId);

                _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CLM_CAMP_ID"], _this4.data.campId);

                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _this4.loading = false;
                _this4.$parent.page = 'package';
                _context3.next = 23;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](1);

                if (_context3.t0.message === 'no-camp-id') {
                  _this4.error.tol = _this4.Locale.error_message.no_campaign_id;
                } else {
                  _this4.error.tol = _context3.t0.message;
                }

                logData.status = 'fail';
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])(logData);
                _this4.loading = false;

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 17]]);
      }))();
    },
    showTnC: function showTnC(tnc) {
      this.$refs.tnc.verifytnc = tnc.content;
      this.$refs.tnc.showTermsDialog();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-container[data-v-1bfe17c2] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 500px !important;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.instant-text[data-v-1bfe17c2] {\n  margin-top: 0.8rem;\n  font-size: 1.75rem;\n}\n.banner-container[data-v-1bfe17c2] {\n  margin-bottom: 2.5rem;\n}\n.term-text[data-v-1bfe17c2] {\n  font-size: 23px;\n  color: #48baf8;\n  margin-top: 8px;\n  text-decoration: underline;\n  cursor: pointer;\n}\nform[data-v-1bfe17c2] {\n  margin: 8px auto;\n}\nform .otp[data-v-1bfe17c2] {\n  position: relative;\n}\nform .otp button[data-v-1bfe17c2] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  height: 30px;\n  margin: 0;\n  font-size: 20px;\n  padding: 0 14px;\n  min-width: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner-container img[data-v-1bfe17c2] {\n  width: 100%;\n  display: block;\n}\n.clm-page[data-v-1bfe17c2] {\n  background-color: #fff;\n}\n.page-container[data-v-1bfe17c2] {\n  position: relative;\n  background-color: #fff;\n  max-width: 750px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.title[data-v-1bfe17c2] {\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-1bfe17c2] {\n  font-size: 24px;\n  line-height: 24px;\n}\n.confirm-button[data-v-1bfe17c2] {\n  margin-top: 16px;\n}\nform[data-v-1bfe17c2] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n  width: 100%;\n}\nform[disabled][data-v-1bfe17c2] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-1bfe17c2] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-1bfe17c2] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-1bfe17c2] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-1bfe17c2] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-1bfe17c2] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}\n.text-center[data-v-1bfe17c2] {\n  text-align: center;\n}\n.my-1[data-v-1bfe17c2] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-1bfe17c2] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-1bfe17c2] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-1bfe17c2] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-1bfe17c2] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-1bfe17c2] {\n  margin-left: 1rem;\n}\n.step-container[data-v-1bfe17c2] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-1bfe17c2] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-1bfe17c2] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-1bfe17c2] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-1bfe17c2] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-1bfe17c2] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.personal-info-extend[data-v-1bfe17c2] {\n  display: block;\n  margin-top: 20px;\n}\n.table-header[data-v-1bfe17c2] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-1bfe17c2] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-1bfe17c2] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-1bfe17c2] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-1bfe17c2] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-1bfe17c2] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-1bfe17c2] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-1bfe17c2] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-1bfe17c2] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-1bfe17c2]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-1bfe17c2] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-1bfe17c2] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-1bfe17c2] {\n  flex-direction: column;\n}\n.table .row .col[data-v-1bfe17c2]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-1bfe17c2] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-1bfe17c2] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-1bfe17c2] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-1bfe17c2] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-1bfe17c2] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-1bfe17c2] {\n  color: #e02020;\n}\n.color-lightblue[data-v-1bfe17c2] {\n  color: #0091ff;\n}\n.text-underline[data-v-1bfe17c2] {\n  text-decoration: underline;\n}\n.text-left[data-v-1bfe17c2] {\n  text-align: left;\n}\n.cursor-pointer[data-v-1bfe17c2] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-1bfe17c2] {\n  min-width: unset;\n}\n.min-width-max[data-v-1bfe17c2] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-1bfe17c2] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n  margin: 16px;\n}\n.term-cond .title[data-v-1bfe17c2] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-1bfe17c2] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-1bfe17c2] {\n  display: none;\n  background-color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n  transition: 150ms ease box-shadow;\n}\n.footer-container.is-sticky[data-v-1bfe17c2] {\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n}\n.footer-container.non-sticky[data-v-1bfe17c2] {\n  position: relative;\n}\n.footer-container .footer-actions[data-v-1bfe17c2] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-1bfe17c2] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-1bfe17c2] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-1bfe17c2] {\n  font-size: 2rem;\n}\n.success-container[data-v-1bfe17c2] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-1bfe17c2] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-1bfe17c2] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-1bfe17c2] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-1bfe17c2] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-1bfe17c2] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-1bfe17c2] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-1bfe17c2] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-1bfe17c2]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-1bfe17c2]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-1bfe17c2] {\n  font-size: 16px;\n  color: #ff0000;\n}\n.package_chargetype[data-v-1bfe17c2] {\n  font-size: 18px;\n  color: #808080;\n}\n.warning[data-v-1bfe17c2] {\n  color: #e02020;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-1bfe17c2] {\n    width: 100%;\n}\n.table-header[data-v-1bfe17c2] {\n    font-size: 24px;\n}\n.table .highlight[data-v-1bfe17c2] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-1bfe17c2] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-1bfe17c2] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-1bfe17c2] {\n    display: block;\n}\n.bottom-actions-container[data-v-1bfe17c2] {\n    display: none;\n}\n.step1-grid-row-2[data-v-1bfe17c2] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-1bfe17c2] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-1bfe17c2] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-1bfe17c2] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "clm-page" },
    [
      _vm.instantLoading
        ? _c("loading-element")
        : _c(
            "div",
            [
              _c("clm-vas-tnc-verify", { ref: "tnc" }),
              _vm._v(" "),
              _c("div", { staticClass: "banner-container" }, [
                _c("picture", [
                  _c("source", {
                    attrs: {
                      srcset: _vm.bannerUrl680webp,
                      type: "image/webp",
                      media: "(max-width: 680px)",
                    },
                  }),
                  _vm._v(" "),
                  _c("source", {
                    attrs: {
                      srcset: _vm.bannerUrl680jpg,
                      type: "image/jpeg",
                      media: "(max-width: 680px)",
                    },
                  }),
                  _vm._v(" "),
                  _c("source", {
                    attrs: { srcset: _vm.bannerUrlwebp, type: "image/webp" },
                  }),
                  _vm._v(" "),
                  _c("source", {
                    attrs: { srcset: _vm.bannerUrljpg, type: "image/jpeg" },
                  }),
                  _vm._v(" "),
                  _c("img", { attrs: { src: _vm.bannerUrl } }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "page-container text-center" },
                [
                  _vm.instantBenefit.headline
                    ? _c("div", { staticClass: "instant-text" }, [
                        _vm._v(
                          " " + _vm._s(_vm.instantBenefit.headline.content)
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.name === "clmtmvhvas"
                    ? [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("หมายเลขโทรศัพท์"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { disabled: _vm.showOtpForm || _vm.loading },
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                              },
                            },
                          },
                          [
                            _c("input-element", {
                              attrs: {
                                inputmode: "numeric",
                                placeholder:
                                  _vm.Locale.otp.phone_number_placeholder[
                                    _vm.$i18n.locale
                                  ],
                              },
                              model: {
                                value: _vm.data.otp.phoneNumber,
                                callback: function ($$v) {
                                  _vm.$set(_vm.data.otp, "phoneNumber", $$v)
                                },
                                expression: "data.otp.phoneNumber",
                              },
                            }),
                            _vm._v(" "),
                            _vm.error.phone
                              ? _c("div", { staticClass: "error" }, [
                                  _vm._v(
                                    _vm._s(_vm.error.phone[_vm.$i18n.locale])
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "button-element",
                                  {
                                    attrs: {
                                      disabled: !/^[0-9]{9,10}$/.test(
                                        _vm.data.otp.phoneNumber
                                      ),
                                    },
                                    on: { click: _vm.fetchOtp },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Locale.otp.fetch_otp[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                              },
                            },
                          },
                          [
                            _c("label", [
                              _vm._v(
                                _vm._s(_vm.Locale.otp.otp[_vm.$i18n.locale])
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "otp" },
                              [
                                _c("input-element", {
                                  attrs: {
                                    type: "text",
                                    inputmode: "numeric",
                                    placeholder:
                                      _vm.Locale.otp.otp_placeholder[
                                        _vm.$i18n.locale
                                      ],
                                    disabled: !_vm.showOtpForm,
                                  },
                                  model: {
                                    value: _vm.data.otp.otp,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data.otp, "otp", $$v)
                                    },
                                    expression: "data.otp.otp",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button-element",
                                  {
                                    attrs: {
                                      disabled: _vm.loading || !_vm.showOtpForm,
                                    },
                                    on: { click: _vm.fetchOtp },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Locale.otp.request_otp_again[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.error.otp
                              ? _c("div", { staticClass: "error" }, [
                                  _vm._v(
                                    _vm._s(_vm.error.otp[_vm.$i18n.locale])
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "confirm-button" },
                              [
                                _c(
                                  "button-element",
                                  {
                                    attrs: {
                                      disabled:
                                        !_vm.data.otp.otp ||
                                        !_vm.showOtpForm ||
                                        _vm.loading,
                                    },
                                    on: { click: _vm.checkOtp },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Locale.otp.confirm[_vm.$i18n.locale]
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.name === "clmtolvas"
                    ? [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("หมายเลขทรูออนไลน์และหมายเลขบัตรประชาชน"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { disabled: _vm.showOtpForm || _vm.loading },
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                              },
                            },
                          },
                          [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.Locale.otp.circuit_id[_vm.$i18n.locale]
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("input-element", {
                              attrs: {
                                inputmode: "numeric",
                                placeholder:
                                  _vm.Locale.otp.circuit_id__placeholder[
                                    _vm.$i18n.locale
                                  ],
                              },
                              model: {
                                value: _vm.data.tol.circuit_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.data.tol, "circuit_id", $$v)
                                },
                                expression: "data.tol.circuit_id",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticStyle: { "margin-top": "16px" } },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.Locale.thai_id.label[_vm.$i18n.locale]
                                  )
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("input-element", {
                              attrs: {
                                inputmode: "numeric",
                                placeholder:
                                  _vm.Locale.thai_id.placeholder[
                                    _vm.$i18n.locale
                                  ],
                              },
                              model: {
                                value: _vm.data.tol.thai_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.data.tol, "thai_id", $$v)
                                },
                                expression: "data.tol.thai_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.error.tol
                              ? _c("div", { staticClass: "error" }, [
                                  _vm._v(
                                    _vm._s(_vm.error.tol[_vm.$i18n.locale])
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "confirm-button" },
                              [
                                _c(
                                  "button-element",
                                  {
                                    attrs: {
                                      disabled:
                                        !/\d/.test(_vm.data.tol.circuit_id) ||
                                        !_vm.validThaiId,
                                    },
                                    on: { click: _vm.verifyTol },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Locale.otp.confirm_tol[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.instantBenefit.message
                    ? _c("div", { staticClass: "instant-text" }, [
                        _vm._v(
                          " " + _vm._s(_vm.instantBenefit.message.content)
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.instantBenefit.term
                    ? _c(
                        "div",
                        {
                          staticClass: "term-text",
                          on: {
                            click: function ($event) {
                              return _vm.showTnC(_vm.instantBenefit.term)
                            },
                          },
                        },
                        [_vm._v(" Term and Conditions ")]
                      )
                    : _vm._e(),
                ],
                2
              ),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-verify.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-verify.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true&");
/* harmony import */ var _clm_vas_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clm-vas-verify.vue?vue&type=script&lang=js& */ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& */ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&");
/* harmony import */ var _clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _clm_vas_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bfe17c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/clm/vas/clm-vas-verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=style&index=1&id=1bfe17c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_style_index_1_id_1bfe17c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-verify.vue?vue&type=template&id=1bfe17c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_verify_vue_vue_type_template_id_1bfe17c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=1bfe17c2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1bfe17c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);