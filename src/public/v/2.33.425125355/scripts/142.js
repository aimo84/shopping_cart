(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_clm_benefit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/clm-benefit */ "./resources/js/components/clm-benefit.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _clm_vas_tnc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clm-vas-tnc */ "./resources/js/pages/clm/vas/clm-vas-tnc.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/clm/vas/locale.json", 1);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_2__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    'clm-benefit-element': _components_clm_benefit__WEBPACK_IMPORTED_MODULE_3__["default"],
    'clm-vas-tnc': _clm_vas_tnc__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      isLoading: true,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_6__,
      error: false,
      errorMessage: ''
    };
  },
  computed: {
    clmVasVerify: function clmVasVerify() {
      return this.$store.state.clm.clmVasVerify;
    },
    packageList: function packageList() {
      return this.$store.state.clm.clmVasPackageList;
    },
    isTol: function isTol() {
      return this.$route.name === 'clmtolvas';
    },
    isPrepaid: function isPrepaid() {
      return this.$route.name === 'clmtmvhvas' && this.packageList.type === 'prepaid';
    },
    locale: function locale() {
      if (!this.$i18n || this.$i18n.locale === undefined) return 'TH';
      return this.$i18n.locale.toUpperCase();
    },
    packages: function packages() {
      var _this = this;

      return this.$store.state.clm.clmVasPackageList.tierBeanList.map(function (pack) {
        return pack.offeringBeanList.map(function (e) {
          return {
            id: e.campOfferingID,
            chargeType: e.chargeType,
            name: _this.isTol ? e.vasDesc : e.convertDesc,
            vasCode: e.vasCode,
            price: e.chargeAmount ? e.chargeAmount.toFixed(2) : 'N/A',
            disabled: _this.isPrepaid ? parseFloat(e.chargeAmount) > parseFloat(_this.packageList.prepaid_balance) : false
          };
        }).filter(function (e) {
          return !e.disabled;
        });
      });
    },
    prepaidBalanceWarning: function prepaidBalanceWarning() {
      if (!this.isPrepaid) return '';
      if (this.packages.length === 0) return 'กรุณาเติมเงินเพื่อสั่งซื้อแพ็กเกจ';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.fetchClmPackages();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    validateNumber: _utils_common__WEBPACK_IMPORTED_MODULE_7__["validateNumber"],
    fetchClmPackages: function fetchClmPackages() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _this3$packageList$mo, data, mobileNumber;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                data = {
                  identity: _this3.clmVasVerify.identity,
                  camp_id: _this3.data.campId
                };
                _context2.next = 4;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["GET_VAS_LIST_PACKAGE"], {
                  id: _this3.isTol ? 'tol' : 'tmvh',
                  data: data
                });

              case 4:
                mobileNumber = (_this3$packageList$mo = _this3.packageList.mobile_phone) !== null && _this3$packageList$mo !== void 0 ? _this3$packageList$mo : null;
                localStorage.setItem('clm-mobile-number', mobileNumber);

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["UPDATE_CLM_MOBILE_NO"], mobileNumber);

                _this3.isLoading = false;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                _this3.isLoading = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    showTnC: function showTnC(packageName) {
      this.$refs.tnc.packageName = packageName;
      this.$refs.tnc.isTol = this.isTol;
      this.$refs.tnc.showTermsDialog();
    },
    nextStep: function nextStep(id, index, key) {
      this.data["package"].id = id;
      this.data["package"].tier = index;
      var logData = {
        status: 'select',
        selectedCampId: this.data.campid,
        clmPackageData: [this.packages[index][key].convertDesc, this.packages[index][key].chargeType],
        clmPrice: this.packages[index][key].price,
        clmName: this.packages[index][key].name,
        vasCode: this.packages[index][key].vasCode
      };

      if (this.$route.name === 'clmtolvas') {
        logData.event = 'CLM TOL Vas package';
        logData.type = 'TOLVAS';
        logData.circuitId = this.data.tol.circuit_id;
        logData.thaiId = this.data.tol.thai_id;
      } else {
        logData.event = 'CLM TMVH Vas package';
        logData.type = 'TMVHVAS';
        logData.mobileNumber = this.data.otp.phoneNumber;
      }

      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])(logData);
      this.$parent.page = 'confirm';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-container[data-v-10b2b8cd] {\n  margin-top: 20px;\n}\n.table.table-step1 th[data-v-10b2b8cd], .table.table-step1 td[data-v-10b2b8cd] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.table.table-step1 td[data-v-10b2b8cd]:first-child {\n  width: 33.33%;\n  text-align: center;\n  color: #e02020;\n  font-weight: 600;\n}\n.table.table-step1 td[data-v-10b2b8cd]:last-child {\n  width: 33.33%;\n}\n.table.table-step1 td .tnc[data-v-10b2b8cd] {\n  color: #48baf8;\n  margin-top: 8px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.vas-package-container[data-v-10b2b8cd] {\n  padding: 0 16px 16px;\n}\n.vas-package-container[data-v-10b2b8cd] .headline {\n  margin-bottom: 12px;\n}\n.clm-benefit[data-v-10b2b8cd] {\n  border: 1px solid #ddd;\n  margin-bottom: 12px;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean {\n  text-align: center;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean .headline {\n  font-size: 2.5rem;\n  line-height: 2rem;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean .sub-headline {\n  font-size: 1.75rem;\n  line-height: 1.8rem;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean img {\n  max-width: 400px;\n}\n.min-w-100[data-v-10b2b8cd] {\n  min-width: 100px;\n}\n@media screen and (max-width: 860px) {\n.table.table-step1 th[data-v-10b2b8cd]:first-child, .table.table-step1 td[data-v-10b2b8cd]:first-child {\n    width: 50%;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean .headline {\n    font-size: 2rem;\n    line-height: 1.7rem;\n}\n.clm-benefit[data-v-10b2b8cd] .camp-bean .sub-headline {\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner-container img[data-v-10b2b8cd] {\n  width: 100%;\n  display: block;\n}\n.clm-page[data-v-10b2b8cd] {\n  background-color: #fff;\n}\n.page-container[data-v-10b2b8cd] {\n  position: relative;\n  background-color: #fff;\n  max-width: 750px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.title[data-v-10b2b8cd] {\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-10b2b8cd] {\n  font-size: 24px;\n  line-height: 24px;\n}\n.confirm-button[data-v-10b2b8cd] {\n  margin-top: 16px;\n}\nform[data-v-10b2b8cd] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n  width: 100%;\n}\nform[disabled][data-v-10b2b8cd] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-10b2b8cd] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-10b2b8cd] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-10b2b8cd] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-10b2b8cd] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-10b2b8cd] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}\n.text-center[data-v-10b2b8cd] {\n  text-align: center;\n}\n.my-1[data-v-10b2b8cd] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-10b2b8cd] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-10b2b8cd] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-10b2b8cd] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-10b2b8cd] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-10b2b8cd] {\n  margin-left: 1rem;\n}\n.step-container[data-v-10b2b8cd] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-10b2b8cd] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-10b2b8cd] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-10b2b8cd] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-10b2b8cd] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-10b2b8cd] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.personal-info-extend[data-v-10b2b8cd] {\n  display: block;\n  margin-top: 20px;\n}\n.table-header[data-v-10b2b8cd] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-10b2b8cd] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-10b2b8cd] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-10b2b8cd] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-10b2b8cd] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-10b2b8cd] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-10b2b8cd] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-10b2b8cd] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-10b2b8cd] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-10b2b8cd]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-10b2b8cd] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-10b2b8cd] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-10b2b8cd] {\n  flex-direction: column;\n}\n.table .row .col[data-v-10b2b8cd]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-10b2b8cd] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-10b2b8cd] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-10b2b8cd] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-10b2b8cd] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-10b2b8cd] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-10b2b8cd] {\n  color: #e02020;\n}\n.color-lightblue[data-v-10b2b8cd] {\n  color: #0091ff;\n}\n.text-underline[data-v-10b2b8cd] {\n  text-decoration: underline;\n}\n.text-left[data-v-10b2b8cd] {\n  text-align: left;\n}\n.cursor-pointer[data-v-10b2b8cd] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-10b2b8cd] {\n  min-width: unset;\n}\n.min-width-max[data-v-10b2b8cd] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-10b2b8cd] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n  margin: 16px;\n}\n.term-cond .title[data-v-10b2b8cd] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-10b2b8cd] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-10b2b8cd] {\n  display: none;\n  background-color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n  transition: 150ms ease box-shadow;\n}\n.footer-container.is-sticky[data-v-10b2b8cd] {\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n}\n.footer-container.non-sticky[data-v-10b2b8cd] {\n  position: relative;\n}\n.footer-container .footer-actions[data-v-10b2b8cd] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-10b2b8cd] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-10b2b8cd] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-10b2b8cd] {\n  font-size: 2rem;\n}\n.success-container[data-v-10b2b8cd] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-10b2b8cd] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-10b2b8cd] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-10b2b8cd] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-10b2b8cd] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-10b2b8cd] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-10b2b8cd] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-10b2b8cd] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-10b2b8cd]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-10b2b8cd]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-10b2b8cd] {\n  font-size: 16px;\n  color: #ff0000;\n}\n.package_chargetype[data-v-10b2b8cd] {\n  font-size: 18px;\n  color: #808080;\n}\n.warning[data-v-10b2b8cd] {\n  color: #e02020;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-10b2b8cd] {\n    width: 100%;\n}\n.table-header[data-v-10b2b8cd] {\n    font-size: 24px;\n}\n.table .highlight[data-v-10b2b8cd] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-10b2b8cd] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-10b2b8cd] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-10b2b8cd] {\n    display: block;\n}\n.bottom-actions-container[data-v-10b2b8cd] {\n    display: none;\n}\n.step1-grid-row-2[data-v-10b2b8cd] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-10b2b8cd] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-10b2b8cd] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-10b2b8cd] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true& ***!
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
        { staticClass: "step-container my-2" },
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
          _c("button-element", { staticClass: "step not-reached" }, [
            _c("img", { attrs: { src: "/images/icons/summary.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("สรุปรายการ")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element")
        : _c(
            "div",
            { staticClass: "vas-package-container" },
            [
              _c("clm-vas-tnc", { ref: "tnc" }),
              _vm._v(" "),
              _c("div", { staticClass: "my-2" }, [
                _c("div", { staticClass: "personal-info" }, [
                  _c("span", { staticClass: "font-bold" }, [
                    _vm._v("เบอร์โทรทรูมูฟ เอช ของคุณ : "),
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.packageList.mobile_phone || "-")),
                  ]),
                ]),
                _vm._v(" "),
                !_vm.isTol && _vm.packageList.type === "prepaid"
                  ? _c("div", { staticClass: "personal-info" }, [
                      _c("span", { staticClass: "font-bold" }, [
                        _vm._v("เงินคงเหลือ : "),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.packageList.prepaid_balance) +
                            " บาท "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "warning" }, [
                          _vm._v(_vm._s(_vm.prepaidBalanceWarning)),
                        ]),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.isTol
                  ? _c("div", { staticClass: "personal-info" }, [
                      _c("span", { staticClass: "font-bold" }, [
                        _vm._v("เบอร์ทรูออนไลน์ของคุณ : "),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.packageList.circuit_id))]),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("clm-benefit-element", {
                staticClass: "clm-benefit",
                attrs: { type: "clmvas" },
              }),
              _vm._v(" "),
              _vm._l(_vm.packages, function (packs, index) {
                return [
                  _c("div", { key: index, staticClass: "table-container" }, [
                    _c("div", { staticClass: "table-header" }, [
                      _vm._v("แพ็กเกจเสริม " + _vm._s(index + 1)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table table-step1" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("แพ็กเกจ")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                _vm._s(
                                  _vm.packageList.type === "prepaid"
                                    ? "ราคารวมภาษีมูลค่าเพิ่ม"
                                    : "ราคาไม่รวมภาษีมูลค่าเพิ่ม"
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                _vm._s(
                                  _vm.isTol
                                    ? "คิดค่าบริการต่อเนื่องบนใบแจ้งค่าบริการ ทรูออนไลน์"
                                    : ""
                                )
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(packs, function (item, key) {
                              return [
                                _c("tr", { key: "package_" + key }, [
                                  _c("td", [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(item.name) +
                                        "\n                    "
                                    ),
                                    item.chargeType === "RC"
                                      ? _c(
                                          "div",
                                          { staticClass: "package_chargetype" },
                                          [
                                            _vm._v(
                                              "(แบบต่อเนื่อง ตามรอบบิลของแพ็คเกจหลัก)"
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.chargeType === "OC"
                                      ? _c(
                                          "div",
                                          { staticClass: "package_chargetype" },
                                          [_vm._v("(แบบรายครั้ง)")]
                                        )
                                      : _vm._e(),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.price) + " ฿")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "button-element",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.nextStep(
                                                item.id,
                                                index,
                                                key
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("เลือกแพ็กเกจ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "tnc",
                                          on: {
                                            click: function ($event) {
                                              return _vm.showTnC(item.name)
                                            },
                                          },
                                        },
                                        [_vm._v("ข้อกำหนดและเงื่อนไข")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ]
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.error,
                      expression: "error",
                    },
                  ],
                  staticClass: "err-msg text-center my-1",
                },
                [_vm._v(_vm._s(_vm.errorMessage))]
              ),
            ],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-package.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-package.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true&");
/* harmony import */ var _clm_vas_package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clm-vas-package.vue?vue&type=script&lang=js& */ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& */ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&");
/* harmony import */ var _clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _clm_vas_package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10b2b8cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/clm/vas/clm-vas-package.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-package.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=style&index=1&id=10b2b8cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_style_index_1_id_10b2b8cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-package.vue?vue&type=template&id=10b2b8cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_package_vue_vue_type_template_id_10b2b8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/clm/vas/style.scss?vue&type=style&index=0&id=10b2b8cd&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_10b2b8cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);