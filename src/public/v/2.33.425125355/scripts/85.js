(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/input.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
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
    title: String,
    name: String,
    type: String,
    placeholder: [Object, String],
    error: [Object, String],
    disabled: [Boolean, String],
    ariaLabel: String,
    autocomplete: String,
    required: [Boolean, String],
    value: [String, Number],
    suffix: String,
    pattern: String,
    min: String,
    max: String,
    maxlength: String,
    inputmode: String,
    customCSS: Object
  },
  computed: {
    customVars: function customVars() {
      if (this.customCSS === undefined) {
        return {
          '--border-color': '#000',
          '--font-family': 'TrueMedium',
          '--font-size': '24px',
          '--line-height': 'normal',
          '--font-weight': 'lighter'
        };
      }

      return {
        '--border-color': this.customCSS.borderColor,
        '--font-family': this.customCSS.fontFamily,
        '--font-size': this.customCSS.fontSize,
        '--line-height': this.customCSS.lineHeight,
        '--font-weight': this.customCSS.fontWeight,
        'padding': this.customCSS.padding
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    if ('OTPCredential' in window && this.$refs.input.getAttribute('autocomplete') === 'one-time-code') {
      navigator.credentials.get({
        otp: {
          transport: ['sms']
        }
      }).then(function (otp) {
        _this.$emit('input', otp.code);
      });
    }
  },
  methods: {
    input: function input(event) {
      this.$emit('input', event.target.value);
    }
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/uppack/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/uppack/content.json", 1);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_2__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_3__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      isLoading: true,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_4__,
      error: false,
      errorMessage: ''
    };
  },
  computed: {
    campId: function campId() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_6__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    },
    userData: function userData() {
      var _this$$store$state$cl;

      return (_this$$store$state$cl = this.$store.state.clm.clmPackageList.clm_verify_redis_data_json_decode) === null || _this$$store$state$cl === void 0 ? void 0 : _this$$store$state$cl.input;
    },
    locale: function locale() {
      if (!this.$i18n || this.$i18n.locale === undefined) return 'TH';
      return this.$i18n.locale.toUpperCase();
    },
    selectedPackage: function selectedPackage() {
      var _this = this;

      var selectedOffer = localStorage.getItem('selectedOffer');
      return this.$store.state.clm.clmPackageList.tierBeanList ? this.$store.state.clm.clmPackageList.tierBeanList.map(function (tier) {
        var offerList = _this.$store.state.clm.clmPackageList.moiTierList ? _this.$store.state.clm.clmPackageList.moiTierList.offerSummaryList.filter(function (offer) {
          if (tier.offeringBeanList.some(function (e) {
            return e.pricePlanCode === offer.offerSummaryInfo[0].offerInfo.offerName;
          })) return true;
        }) : [];
        return offerList.map(function (offer) {
          var _offer$messageInfo$bu, _offer$messageInfo$bu2, _offer$messageInfo$bu3, _offer$messageInfo$co;

          var fixSpeedData = offer.offerSummaryInfo[0].bundleInfo.data.filter(function (d) {
            return d.dataGroup === 'FIX SPEED' && d.subKey === 'Internet Vol';
          });
          var checkFixSpeed = false;

          var fixSpeedWording = _content_json__WEBPACK_IMPORTED_MODULE_4__.packages.fix_speed[_this.locale.toLowerCase()];

          if (fixSpeedData.length > 0) {
            checkFixSpeed = true;

            if (fixSpeedData[0].maxSpeedUnit === 'Kbps') {
              var result = parseInt(fixSpeedData[0].maxSpeed) / 1024;

              if (result >= 1024) {
                fixSpeedWording += (result / 1024).toString() + ' Gbps';
              } else {
                fixSpeedWording += result.toString() + ' Mbps';
              }
            } else {
              fixSpeedWording += fixSpeedData[0].maxSpeed + ' ' + fixSpeedData[0].maxSpeedUnit;
            }
          }

          return {
            name: offer.offerSummaryInfo[0].offerInfo.offerDescription,
            voice: offer.messageInfo.bundle.voice ? (_offer$messageInfo$bu = offer.messageInfo.bundle.voice.filter(function (v) {
              return v.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu === void 0 ? void 0 : _offer$messageInfo$bu.message : '-',
            data: checkFixSpeed ? fixSpeedWording : (_offer$messageInfo$bu2 = offer.messageInfo.bundle.data.filter(function (d) {
              return d.subKey == 'Internet Vol' && d.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu2 === void 0 ? void 0 : _offer$messageInfo$bu2.message,
            wifi: (_offer$messageInfo$bu3 = offer.messageInfo.bundle.data.filter(function (d) {
              return d.subKey == 'WiFi' && d.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu3 === void 0 ? void 0 : _offer$messageInfo$bu3.message,
            price: (_offer$messageInfo$co = offer.messageInfo.cost.filter(function (c) {
              return c.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$co === void 0 ? void 0 : _offer$messageInfo$co.message,
            offerName: offer.offerSummaryInfo[0].offerInfo.offerName
          };
        }).find(function (m) {
          return m.offerName === selectedOffer;
        });
      }).find(function (list) {
        return list !== undefined;
      }) : {};
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!('selectedOffer' in localStorage)) {
                _this2.$router.push('/uppack?campId=' + _this2.campId);
              }

              _this2.fetchClmPackages();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    validateNumber: _utils_common__WEBPACK_IMPORTED_MODULE_6__["validateNumber"],
    fetchClmPackages: function fetchClmPackages() {
      var _this3 = this;

      var data = {
        'identity': localStorage.getItem('clm-identity') || '',
        'camp_id': this.campId
      };
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["GET_LIST_PACKAGE"], data).then(function (data) {
        _this3.isLoading = false;

        if (!_this3.selectedPackage.name) {
          _this3.$router.push('/uppack?campId=' + _this3.campId);
        }
      })["catch"](function (error) {
        _this3.isLoading = false;
        _this3.error = true;
        _this3.errorMessage = error.message[_this3.$i18n.locale];

        _this3.$router.push('/uppack?campId=' + _this3.campId);
      });
      this.isLoading = false;
    },
    submitOffer: function submitOffer() {
      var _this4 = this;

      var selectedOffer = localStorage.getItem('selectedOffer');
      var clmPackageData = [this.selectedPackage.name, this.selectedPackage.offerName, this.selectedPackage.voice, this.selectedPackage.wifi];
      var submitData = {
        'identity': localStorage.getItem('clm-identity') || '',
        'camp_id': this.campId,
        'selected_offer': selectedOffer,
        'selected_package': clmPackageData.join(','),
        'selected_price': this.selectedPackage.price
      };
      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
        event: 'CLM uppack package',
        status: 'confirm',
        type: 'UPPACK',
        selectedCampId: this.campId,
        mobileNumber: this.userData.mobile_number,
        clmPackageData: clmPackageData,
        clmPrice: this.selectedPackage.price
      });
      this.isLoading = true;
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["ORDER_NEW_PACKAGE"], submitData).then(function (data) {
        _this4.isLoading = false;

        if (data.clm_verify_redis_data_json_decode.is_pass && data['3gw'] && data['3gw'].correlationId) {
          localStorage.setItem('correlationId', data['3gw'].correlationId);

          _this4.$router.push({
            name: 'uppack-success',
            query: {
              campId: _this4.campId
            }
          });
        } else {
          _this4.isLoading = false;
          _this4.error = true;
          _this4.errorMessage = error[_this4.$i18n.locale];
        }
      })["catch"](function (error) {
        _this4.isLoading = false;
        _this4.error = true;
        _this4.errorMessage = error.message[_this4.$i18n.locale];
      });
    },
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".input[data-v-7eba88e2] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n.input input[data-v-7eba88e2] {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  box-sizing: border-box;\n  border-radius: 8px;\n  transition: 150ms border-color ease;\n  font-family: var(--font-family);\n  line-height: var(--line-height);\n  font-weight: var(--font-weight);\n}\n.input input[data-v-7eba88e2]:focus {\n  border-color: #000;\n  outline: none;\n}\n.input input[data-v-7eba88e2]::-moz-placeholder {\n  font-family: \"TrueLight\";\n  color: #9b9b9b;\n}\n.input input[data-v-7eba88e2]::placeholder {\n  font-family: \"TrueLight\";\n  color: #9b9b9b;\n}\n.input input[disabled][data-v-7eba88e2] {\n  color: #949494;\n  border-color: #ccc;\n  -webkit-text-fill-color: #949494;\n}\n.input .error[data-v-7eba88e2] {\n  text-align: left;\n  color: #ff0000;\n  display: none;\n}\n@media screen and (max-width: 860px) {\n.input input[data-v-7eba88e2] {\n    padding: 0 10px;\n}\n}", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".err-msg[data-v-00452796] {\n  font-size: 24px !important;\n}\n@media screen and (max-width: 860px) {\n.footer-container .footer-actions button[data-v-00452796] {\n    min-width: 50%;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner_container[data-v-00452796] {\n  border-bottom: 6px solid #666;\n}\n.banner_container img[data-v-00452796] {\n  width: 100%;\n  display: block;\n}\n.page-container[data-v-00452796] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 750px;\n  margin: auto;\n}\n.text-center[data-v-00452796] {\n  text-align: center;\n}\n.my-1[data-v-00452796] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-00452796] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-00452796] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-00452796] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-00452796] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-00452796] {\n  margin-left: 1rem;\n}\n.step-container[data-v-00452796] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-00452796] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-00452796] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-00452796] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-00452796] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-00452796] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.table-header[data-v-00452796] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-00452796] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-00452796] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-00452796] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-00452796] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-00452796] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-00452796] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-00452796] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-00452796] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-00452796]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-00452796] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-00452796] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-00452796] {\n  flex-direction: column;\n}\n.table .row .col[data-v-00452796]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-00452796] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-00452796] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-00452796] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-00452796] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-00452796] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-00452796] {\n  color: #e02020;\n}\n.color-lightblue[data-v-00452796] {\n  color: #0091ff;\n}\n.text-underline[data-v-00452796] {\n  text-decoration: underline;\n}\n.text-left[data-v-00452796] {\n  text-align: left;\n}\n.cursor-pointer[data-v-00452796] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-00452796] {\n  min-width: unset;\n}\n.min-width-max[data-v-00452796] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-00452796] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n}\n.term-cond .title[data-v-00452796] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-00452796] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-00452796] {\n  display: none;\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n}\n.footer-container .footer-actions[data-v-00452796] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-00452796] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-00452796] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-00452796] {\n  font-size: 2rem;\n}\n.success-container[data-v-00452796] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-00452796] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-00452796] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-00452796] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-00452796] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-00452796] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-00452796] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-00452796] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-00452796]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-00452796]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-00452796] {\n  font-size: 16px;\n  color: #ff0000;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-00452796] {\n    width: 100%;\n}\n.table-header[data-v-00452796] {\n    font-size: 24px;\n}\n.table .highlight[data-v-00452796] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-00452796] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-00452796] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-00452796] {\n    display: block;\n}\n.bottom-actions-container[data-v-00452796] {\n    display: none;\n}\n.step1-grid-row-2[data-v-00452796] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-00452796] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-00452796] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-00452796] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: "input" + (_vm.suffix ? " suffix" : "") }, [
    _c("input", {
      ref: "input",
      style: _vm.customVars,
      attrs: {
        type: _vm.type,
        placeholder:
          (_vm.placeholder && _vm.placeholder[_vm.$i18n.locale]) ||
          _vm.placeholder,
        disabled: _vm.disabled,
        title: _vm.title,
        name: _vm.name,
        "aria-label": _vm.ariaLabel,
        autocomplete: _vm.autocomplete,
        required: _vm.required,
        pattern: _vm.pattern,
        min: _vm.min,
        max: _vm.max,
        maxlength: _vm.maxlength,
        inputmode: _vm.inputmode,
      },
      domProps: { value: _vm.value },
      on: {
        input: _vm.input,
        keyup: function ($event) {
          return _vm.$emit("keyup", $event)
        },
        keydown: function ($event) {
          return _vm.$emit("keydown", $event)
        },
        blur: function ($event) {
          return _vm.$emit("blur", $event)
        },
        focus: function ($event) {
          return _vm.$emit("focus", $event)
        },
        change: function ($event) {
          return _vm.$emit("change", $event)
        },
        keypress: function ($event) {
          return _vm.$emit("keypress", $event)
        },
      },
    }),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "error" }, [
          _vm._v(
            _vm._s((_vm.error && _vm.error[_vm.$i18n.locale]) || _vm.error)
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true& ***!
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
      _c("div", { staticClass: "table-header" }, [_vm._v("สรุปแพ็กเกจใหม่")]),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element", { attrs: { fitHeight: "" } })
        : _c("div", { staticClass: "my-1" }, [
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("Package : ")]),
              _vm._v(" "),
              _c("span", { staticClass: "color-red" }, [
                _vm._v(_vm._s(_vm.selectedPackage.name)),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("Voice : ")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.selectedPackage.voice))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("Data : ")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.selectedPackage.data))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("Wifi : ")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.selectedPackage.wifi))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "personal-info" }, [
              _c("span", { staticClass: "font-bold" }, [_vm._v("Price : ")]),
              _vm._v(" "),
              _c("span", { staticClass: "color-red" }, [
                _vm._v(_vm._s(_vm.selectedPackage.price)),
              ]),
            ]),
          ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element", { attrs: { fitHeight: "" } })
        : _vm._e(),
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
                _vm._v("ยอมรับ"),
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
                _vm._v("ยอมรับ"),
              ]),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "term-cond" }, [
      _c("div", { staticClass: "title" }, [_vm._v("Terms and Conditions")]),
      _vm._v(" "),
      _c("p", { staticClass: "content" }, [
        _vm._v(
          "\n      เงื่อนไขและรายละเอียดรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล"
        ),
        _c("br"),
        _vm._v(
          "\n\n      1. ข้อเสนอและสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายโครงการ ทรู สเปเชียล นี้สำหรับลูกค้าผู้ใช้บริการทรูปัจจุบัน “ลูกค้า” ที่ใช้บริการต่างๆ อันได้แก่ บริการอินเทอร์เน็ต ของบริษัท ทรู อินเทอร์เน็ต คอร์ปอเรชั่น จำกัด (“ทรู อินเทอร์เน็ต”), บริการโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช ทั้งแบบรายเดือนและแบบเติมเงิน ของบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด(“ทรูมูฟ เอช”) และ บริการโทรทัศน์ในระบบบอกรับเป็นสมาชิก จากบริษัท ทรู วิชั่นส์ กรุ๊ป จำกัด (“ทรู วิชั่นส์”) และ/หรือบุคคลที่สาม (ถ้ามี) รวมเรียกว่า “บริษัท”"
        ),
        _c("br"),
        _vm._v(
          "\n\n      2. ข้อเสนอและสิทธิพิเศษต่างๆในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้จะถูกแบ่งเป็นรายการส่งเสริมการขายย่อยตามประเภทการสมัครบริการในรูปแบบต่อไปนี้"
        ),
        _c("br"),
        _vm._v(" \n        - การสมัครเปิดใช้บริการใหม่"),
        _c("br"),
        _vm._v(
          "\n        - การสมัครเพิ่มบริการ หรือ การเปลี่ยนแปลงแพ็กเกจที่สูงขึ้น"
        ),
        _c("br"),
        _vm._v("\n        - การซื้อบริการเสริมหรือแพ็กเกจเสริมต่างๆ "),
        _c("br"),
        _vm._v(
          "\n\n      โดยข้อเสนอบริการต่างๆ ในรายการส่งเสริมการขายย่อยถือเป็นส่วนหนึ่งตามเงื่อนไขและข้อกำหนดของรายการส่งเสริมการขายต่างๆ ของบริษัท ที่เสนอให้กับบุคคลทั่วไป หรือ ลูกค้าปัจจุบัน ที่ใช้รายการส่งเสริมการขายอื่นนอกจากรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล"
        ),
        _c("br"),
        _vm._v(
          "\n\n      3. การรับข้อเสนอรูปแบบต่างๆ ที่ระบุไว้ในรายการส่งเสริมการขายย่อย อาจมีสิทธิพิเศษเพิ่มเติมและข้อกำหนดแตกต่างกันไป โดยสิทธิพิเศษต่างๆ ลูกค้าจะได้รับต่อเมื่อลูกค้ามีการปฏิบัติตามข้อเสนอที่มีการแจ้งไว้ในสื่อประชาสัมพันธ์แล้วเท่านั้น"
        ),
        _c("br"),
        _vm._v(
          "\n\n      4. ข้อเสนอ และหรือสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายย่อยในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียลไม่สามารถใช้ร่วมกับรายการส่งเสริมการขาย โปรโมชั่น หรือส่วนลดอื่น ๆ ได้"
        ),
        _c("br"),
        _vm._v(
          "\n\n      5. ข้อเสนอและสิทธิพิเศษ ดังกล่าว เป็นการเสนอระบุให้เฉพาะตัวบุคคล ไม่สามารถโอนสิทธิ์หรือส่งต่อให้กับผู้อื่นได้ เว้นแต่มีการกำหนดไว้เป็นกรณีไป อันได้แก่ การโอนสิทธิ์ส่งต่อให้กับ บุคคลในครอบครัว และบุคคลที่มีการระบุตัวตนชัดเจน"
        ),
        _c("br"),
        _vm._v(
          "\n\n      6. กรณีที่ลูกค้ามีการเปลี่ยนแปลงรายละเอียดการใช้งานที่ไม่เป็นไปตามเงื่อนไขของรายการส่งเสริมการขายย่อยรวมถึงมีค่าบริการค้างชำระ หรือค่าธรรมเนียมใด ๆ ที่เกี่ยวข้องกับการใช้บริการตามบริการแพ็กเกจหลัก จนทำให้เกิดการระงับสัญญาณ หรือกระทำผิดเงื่อนไขของการใช้บริการของ บริษัท สิทธิพิเศษต่างๆ ที่ได้รับเพิ่มจะสิ้นสุดลงทันที"
        ),
        _c("br"),
        _vm._v(
          "\n\n      7. ช่องทางในการประชาสัมพันธ์และ การรับข้อเสนอของลูกค้า ประกอบด้วย ศูนย์บริการข้อมูลลูกค้าทางโทรศัพท์ (Call Center), ทรูช้อป, เว็บไซด์, ข้อความสั้น (SMS), แอพพลิเคชั่นต่างๆ ของบริษัท ซึ่งขึ้นอยู่กับการให้บริการแต่ละประเภทตามรายการส่งเสริมการขายที่กำหนด"
        ),
        _c("br"),
        _vm._v(
          "\n\n      8. ระยะเวลา ของรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้ เริ่มตั้งแต่วันที่ 1 มิถุนายน 2563 ถึงวันที่ 31 ธันวาคม 2563  โดยที่แต่ละรายการส่งเสริมการขายย่อยจะมีเวลาเริ่มต้นและสิ้นสุดไม่เท่ากัน ซึ่งบริษัทจะมีการระบุไว้ในข้อความหรือชิ้นงานโฆษณาประชาสัมพันธ์ตามแต่ละรายการส่งเสริมการขายย่อย"
        ),
        _c("br"),
        _vm._v(
          "\n\n      9. หากลูกค้ากระทำการอันเป็นการอย่างใดอย่างหนึ่งดังต่อไปนี้ บริษัท มีสิทธิในการยกเลิกการให้บริการตามสัญญาได้ทันที"
        ),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1" }, [
          _vm._v(
            '9.1 กระทำการฝ่าฝืนข้อห้ามในสัญญา: หากลูกค้ากระทำผิดวัตถุประสงค์แห่งสัญญา ให้ถือเป็นการฝ่าฝืนข้อห้ามในสัญญา\n        "วัตถุประสงค์แห่งสัญญา": ลูกค้าจะต้อง'
          ),
          _c("br"),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1" }, [
          _vm._v(
            "(ก.) ใช้บริการตามรายการส่งเสริมการขายนี้เพื่อการสื่อสารเฉพาะตนโดยมีเจตนาสุจริตตามวิธีการใช้ บริการเยี่ยงปกติประเพณีของบุคคลธรรมดาทั่วไปที่จะพึงกระทำเท่านั้น มิใช่เพื่อประโยชน์ หรือสิ่งอื่นใดที่อาจถือเอาประโยชน์ได้ และจะไม่นำบริการไปใช้แสวงหาประโยชน์ไม่ว่าในลักษณะใด ๆ ในเชิงพาณิชย์หรือนำไปให้บริการต่อ"
          ),
          _c("br"),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1" }, [
          _vm._v(
            "(ข.) ไม่ใช้ ไม่นำบริการมาใช้ ไม่ดัดแปลง หรือไม่กระทำการใดๆ ในเทคโนโลยีหรือระบบหรือสิ่งอื่นใดเพื่อเชื่อมต่อหรือเกี่ยวข้องกับการใช้บริการดังกล่าว รวมทั้งไม่กระทำการ อันมีลักษณะหรือคาดหมายได้หรือ เชื่อได้ว่าจะก่อให้เกิดการผิดศีลธรรมหรือเกิดความเสียหายหรือเกิดความไม่เป็นธรรมต่อบริษัท หรือบุคคลอื่นใด ทั้งในทางตรงและทางอ้อม หรือไม่ทำการรบกวน หรือก่อความไม่สะดวก หรือเป็นอันตรายต่อเครือข่าย หรือทำให้ประสิทธิภาพการปฏิบัติงานของเครือข่ายหรือส่วนใดๆ ของเครือข่าย เกิดความขัดข้องไม่เป็นไปตามปกติ"
          ),
          _c("br"),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1" }, [
          _vm._v(
            "(ค.) ลูกค้าจะโอนสิทธิการใช้บริการตามสัญญานี้ให้แก่บุคคลอื่นก่อนครบกำหนดระยะเวลาตามสัญญามิได้ เว้นแต่จะได้รับความยินยอมจากบริษัท"
          ),
          _c("br"),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1" }, [
          _vm._v(
            "9.2 กระทำการที่มีเหตุผลอันเชื่อได้ว่าลูกค้าทุจริตหรือมีการปลอมแปลงเอกสารในการสมัครใช้หรือรับข้อเสนอของบริการหรือมีพฤติกรรมฉ้อฉลในการใช้บริการหรือนำบริการไปใช้โดยผิดกฎหมาย"
          ),
          _c("br"),
        ]),
        _vm._v(
          "\n\n      10. บริษัท มีสิทธิในการแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อกำหนดและเงื่อนไขใดๆ โดยจะแจ้งให้ทราบล่วงหน้าผ่านช่องทางตามที่บริษัท พิจารณาเห็นสมควร และเว้นแต่จะได้ระบุไว้โดยแจ้งชัดเป็นอย่างอื่น กรณีข้อกำหนดและเงื่อนไขการใช้บริการข้างต้นของโครงการนี้ ขัดหรือแย้งกับข้อกำหนดของเงื่อนไขฉบับเต็ม ให้ยึดตามข้อกำหนดและเงื่อนไขฉบับเต็มเป็นหลัก"
        ),
        _c("br"),
        _vm._v(
          "\n      11. รายการส่งเสริมการขายนี้อยู่ภายใต้เงื่อนไขที่บริษัทกำหนด ลูกค้าจะต้องศึกษาข้อมูลเพิ่มเติมก่อนเลือกใช้บริการที่ www.truemoveh.com หรือ ทรูมูฟ เอช แคร์ โทร 1242 หรือสอบถามพนักงานขาย"
        ),
        _c("br"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/input.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/input.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.vue?vue&type=template&id=7eba88e2&scoped=true& */ "./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true&");
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.vue?vue&type=script&lang=js& */ "./resources/js/components/input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& */ "./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7eba88e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/input.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/input.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=style&index=0&id=7eba88e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_7eba88e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=template&id=7eba88e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/input.vue?vue&type=template&id=7eba88e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_7eba88e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/pages/uppack/content.json":
/*!************************************************!*\
  !*** ./resources/js/pages/uppack/content.json ***!
  \************************************************/
/*! exports provided: thai_id, mobile_no, otp, error_message, packages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"thai_id\":{\"placeholder\":{\"th\":\"กรอกหมายเลขบัตรประชาชนที่ได้ลงทะเบียนไว้\",\"en\":\"Enter your Thai ID (13 Digits)\"}},\"mobile_no\":{\"placeholder\":{\"th\":\"กรอกเบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Enter your existing Truemove H mobile number\"}},\"otp\":{\"request\":{\"th\":\"ขอรหัส OTP\",\"en\":\"Request OTP\"},\"resend\":{\"th\":\"ขอรหัสอีกครั้ง\",\"en\":\"Resend OTP\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Confirm\"}},\"error_message\":{\"no_campaign_id\":{\"th\":\"ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ\",\"en\":\"Sorry, This phone number is unable to change promotional package\"}},\"packages\":{\"fix_speed\":{\"th\":\"อินเตอร์เน็ตไม่อั้น|ความเร็วคงที่ \",\"en\":\"Unlimited Fix Speed|\"},\"term_not_found\":{\"th\":\"ขออภัย ไม่พบข้อมูลที่ท่านเลือก\",\"en\":\"Sorry, this price plan detail is not available\"}}}");

/***/ }),

/***/ "./resources/js/pages/uppack/step3.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/uppack/step3.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step3.vue?vue&type=template&id=00452796&scoped=true& */ "./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true&");
/* harmony import */ var _step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step3.vue?vue&type=script&lang=js& */ "./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& */ "./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& */ "./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00452796",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/uppack/step3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=style&index=0&id=00452796&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_00452796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=template&id=00452796&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/step3.vue?vue&type=template&id=00452796&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_00452796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=00452796&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_00452796_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/utils/addon.js":
/*!*************************************!*\
  !*** ./resources/js/utils/addon.js ***!
  \*************************************/
/*! exports provided: updateEntPack, computeAddons, computeAddon, loggerAddon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntPack", function() { return updateEntPack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddons", function() { return computeAddons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddon", function() { return computeAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerAddon", function() { return loggerAddon; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");








function updateEntPack(_x, _x2, _x3, _x4) {
  return _updateEntPack.apply(this, arguments);
}

function _updateEntPack() {
  _updateEntPack = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(matcode, query, product, hash) {
    var inventory,
        data,
        packages,
        _args = arguments;
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inventory = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};

            if (query.token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            data = {
              cart_hash: hash,
              product_id: product.id,
              inventory_id: inventory.id
            };
            if (inventory.nas) data.nas_code = inventory.nas;

            if (matcode) {
              packages = product.entertainment_packages;

              if (packages.find(function (e) {
                return e.matcode === matcode;
              })) {
                data.matcode = matcode;
              }
            }

            _context.prev = 6;
            _context.next = 9;
            return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ENT_PACK"], {
              tmvhAuth: query.token,
              data: data
            });

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            throw new Error('err-ent-pack');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 11]]);
  }));
  return _updateEntPack.apply(this, arguments);
}

function computeAddons(query, product) {
  var products = [];

  if (query.accs) {
    var accessories = query.accs.split(',');
    if (product.only_one_accessory && accessories.length > 1) return products;
    accessories.forEach(function (accessory) {
      var accs = computeAddon(accessory, 'accessories', product);
      if (accs) products.push(accs);
    });
  }

  return products;
}
function computeAddon(matcode, key, product) {
  var addon = product[key].find(function (e) {
    return e.matcode === matcode;
  });
  return addon ? {
    product_id: addon.product_id,
    inventory_id: addon.inventory_id,
    quantity: 1,
    store_id: addon.store_id,
    section: addon.section || 'wemall',
    channel: 'tmh-website'
  } : false;
}
function loggerAddon(data) {
  try {
    var type = data.type,
        event = data.event,
        _data$status = data.status,
        status = _data$status === void 0 ? '' : _data$status,
        _data$productId = data.productId,
        productId = _data$productId === void 0 ? '' : _data$productId,
        _data$matcode = data.matcode,
        matcode = _data$matcode === void 0 ? '' : _data$matcode,
        _data$quantity = data.quantity,
        quantity = _data$quantity === void 0 ? '' : _data$quantity,
        _data$amount = data.amount,
        amount = _data$amount === void 0 ? '' : _data$amount,
        _data$discount = data.discount,
        discount = _data$discount === void 0 ? '' : _data$discount,
        _data$thaiId = data.thaiId,
        thaiId = _data$thaiId === void 0 ? '' : _data$thaiId,
        _data$circuitId = data.circuitId,
        circuitId = _data$circuitId === void 0 ? '' : _data$circuitId,
        _data$mobileNumber = data.mobileNumber,
        mobileNumber = _data$mobileNumber === void 0 ? '' : _data$mobileNumber,
        _data$tolProductData = data.tolProductData,
        tolProductData = _data$tolProductData === void 0 ? [] : _data$tolProductData,
        _data$tolPrice = data.tolPrice,
        tolPrice = _data$tolPrice === void 0 ? '' : _data$tolPrice,
        _data$tolInvoice = data.tolInvoice,
        tolInvoice = _data$tolInvoice === void 0 ? '' : _data$tolInvoice,
        _data$tolEntryFee = data.tolEntryFee,
        tolEntryFee = _data$tolEntryFee === void 0 ? '' : _data$tolEntryFee,
        _data$tolAddress = data.tolAddress,
        tolAddress = _data$tolAddress === void 0 ? [] : _data$tolAddress,
        _data$tolUserAddress = data.tolUserAddress,
        tolUserAddress = _data$tolUserAddress === void 0 ? [] : _data$tolUserAddress,
        _data$clmPackageData = data.clmPackageData,
        clmPackageData = _data$clmPackageData === void 0 ? [] : _data$clmPackageData,
        _data$addressData = data.addressData,
        addressData = _data$addressData === void 0 ? [] : _data$addressData,
        _data$clmPrice = data.clmPrice,
        clmPrice = _data$clmPrice === void 0 ? '' : _data$clmPrice,
        _data$selectedCampId = data.selectedCampId,
        selectedCampId = _data$selectedCampId === void 0 ? '' : _data$selectedCampId,
        _data$advancePayment = data.advancePayment,
        advancePayment = _data$advancePayment === void 0 ? '' : _data$advancePayment,
        _data$rcDiff = data.rcDiff,
        rcDiff = _data$rcDiff === void 0 ? '' : _data$rcDiff,
        _data$campName = data.campName,
        campName = _data$campName === void 0 ? '' : _data$campName,
        _data$clmName = data.clmName,
        clmName = _data$clmName === void 0 ? '' : _data$clmName,
        _data$vasCode = data.vasCode,
        vasCode = _data$vasCode === void 0 ? '' : _data$vasCode;
    var typhoonGroupType = localStorage.getItem('typhoon-group') || '';
    var campId = localStorage.getItem('clm-camp-id') || '';
    var log = '';
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var UTM = queryString.includes('utm') ? ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'].map(function (key) {
      return "".concat(key, "=").concat(urlParams.get(key));
    }).join('&') : '';

    switch (type) {
      case 'TOL':
        log = [event, status, tolProductData.join(','), tolPrice, tolInvoice, tolEntryFee, tolAddress.join(','), tolUserAddress.join(','), campId, UTM].join('|');
        break;

      case 'TOLVAS':
        log = [event, status, selectedCampId, vasCode, thaiId, circuitId, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'TMVHVAS':
        log = [event, status, selectedCampId, clmPrice, mobileNumber, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'UPPACK':
        log = [event, status, selectedCampId, thaiId, mobileNumber, encodeURIComponent(clmPackageData.join(',')), clmPrice, UTM].join('|');
        break;

      default:
        log = [event, status, productId, matcode, quantity, amount, discount, advancePayment, rcDiff, campId, campName, typhoonGroupType, addressData.join(',') || mobileNumber, UTM].join('|');
        break;
    }

    return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_LOG"], {
      data: log
    });
  } catch (e) {}
}

/***/ })

}]);