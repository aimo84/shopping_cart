(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json", 1);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_3__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      loading: false,
      agreement: false,
      error: {
        pin: false
      }
    };
  },
  computed: {
    mnpOtp: function mnpOtp() {
      return this.$store.state.mnp.mnpOtp;
    },
    productInfo: function productInfo() {
      return this.$store.state.products.productInfo.data.record;
    },
    mnpType: function mnpType() {
      if (this.$route.name === 'mnp-bundle-verify') return 'mnpoposs2';
      var simType = this.productInfo.sim_data.sim_type;
      return simType === 'postpaid' ? 'mnpoposs2' : 'mnpopres2';
    },
    mobileNumber: function mobileNumber() {
      var number = this.data.otp.phoneNumber;
      var regex = number.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/;
      return number.replace(regex, '$1-$2-$3');
    },
    tnc: function tnc() {
      if (this.$route.name === 'mnp-bundle-verify') return '/files/mnp/MNP_Post_T_C.pdf';
      var simType = this.productInfo.sim_data.sim_type;

      if (simType === 'postpaid') {
        return '/files/mnp/MNP_Post_T_C.pdf';
      } else {
        return '/files/mnp/MNP_Pre_T_C.pdf';
      }
    },
    isMnpOneStep: function isMnpOneStep() {
      return this.data.bundle.bundle.campaign_mnp_type === 'one_step';
    },
    isMnpSharePlan: function isMnpSharePlan() {
      return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify';
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      return (this.isMnpOneStep || this.isMnpSharePlan) && skip;
    }
  },
  methods: {
    trackAnalytics: function trackAnalytics() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'track_event',
        event_category: 'Move to True',
        event_action: 'Click',
        event_label: 'move_number_to_true'
      });
    },
    checkPin: function checkPin() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.trackAnalytics();

                _this.error.pin = false;
                _this.loading = true;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify ussd',
                  productId: _this.$route.params.id,
                  mobileNumber: _this.data.otp.phoneNumber
                });
                _context.next = 7;
                return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["CHECK_MNP_PIN"], {
                  mobile_number: _this.$route.query.flow === 'mnp-two' && _this.$route.query.mobile ? _this.$route.query.mobile : _this.data.otp.phoneNumber,
                  pin_code: _this.data.ussd.code,
                  security_key: _this.mnpOtp.security_key,
                  mnp_type: _this.mnpType
                });

              case 7:
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify ussd success',
                  productId: _this.$route.params.id,
                  mobileNumber: _this.data.otp.phoneNumber
                });
                _this.loading = false;
                _this.skipEkyc ? _this.$emit('route', 'info-form') : _this.$emit('route', 'ekyc');
                _context.next = 18;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify ussd fail',
                  productId: _this.$route.params.id,
                  mobileNumber: _this.data.otp.phoneNumber
                });
                if (_this.$route.query.flow === 'mnp-two') _this.swapToMnp2StepURLQuery();
                _this.error.pin = _context.t0.message;
                _this.loading = false;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    swapToMnp2StepURLQuery: function swapToMnp2StepURLQuery() {
      var query = {
        type: '4',
        camptype: 'mnp_bundling_existing',
        pp: this.$route.query.pp,
        token: this.$route.query.token,
        accs: this.$route.query.accs
      };
      var newurl = "".concat(window.location.origin, "/online-store/privilege/verify/").concat(this.$route.params.id, "/").concat(this.$route.params.inventory, "/").concat(this.$route.query.promotion, "?").concat(qs__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(query));
      window.history.replaceState({
        path: newurl
      }, '', newurl);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mobile-number[data-v-78afd3ea] {\n  margin-top: 8px;\n  line-height: 24px;\n}\n.mobile-number span[data-v-78afd3ea] {\n  font-family: \"TrueBold\";\n  color: #ff0000;\n}\n.banner[data-v-78afd3ea] {\n  display: block;\n  max-width: 480px;\n  margin: 24px auto;\n  width: 100%;\n}\n.subtitle[data-v-78afd3ea] {\n  max-width: 420px;\n  margin: auto;\n  white-space: pre-line;\n}\n.ussd[data-v-78afd3ea] {\n  font-family: \"TrueBold\";\n  color: #ff0000;\n  font-size: 48px;\n  margin: 16px 0;\n  line-height: 40px;\n}\n.terms-container[data-v-78afd3ea] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 32px 0 24px 0;\n}\n.terms-container .info-button[data-v-78afd3ea] {\n  color: #484848;\n  text-decoration: none;\n  align-items: center;\n  background-color: #f9c947;\n  border-radius: 24px;\n  height: 38px;\n  padding: 8px 20px 8px 8px;\n  display: inline-flex;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: \"TrueMedium\";\n  cursor: pointer;\n  margin-bottom: 8px;\n}\n.terms-container .info-button svg[data-v-78afd3ea] {\n  margin-right: 6px;\n}\n.terms-container label[data-v-78afd3ea] {\n  display: inline-grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  grid-gap: 8px;\n  cursor: pointer;\n}\n@media screen and (max-width: 860px) {\n.ussd[data-v-78afd3ea] {\n    font-size: 40px;\n    line-height: 32px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-78afd3ea] {\n  margin-top: 24px;\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-78afd3ea] {\n  font-size: 24px;\n  line-height: 24px;\n}\nform[data-v-78afd3ea] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n}\nform[disabled][data-v-78afd3ea] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-78afd3ea] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-78afd3ea] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-78afd3ea] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-78afd3ea] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-78afd3ea] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "mobile-number" }, [
        _vm._v(_vm._s(_vm.Locale.ussd.mobile_number[_vm.$i18n.locale]) + " "),
        _c("span", [_vm._v(_vm._s(_vm.mobileNumber))]),
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "banner",
        attrs: { src: "/images/mnp/ussd-banner-" + _vm.$i18n.locale + ".jpg" },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "subtitle" }, [
        _vm._v(_vm._s(_vm.Locale.ussd.subtitle[_vm.$i18n.locale])),
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { disabled: _vm.loading },
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c("label", [_vm._v(_vm._s(_vm.Locale.ussd.ussd[_vm.$i18n.locale]))]),
          _vm._v(" "),
          _c("input-element", {
            attrs: {
              placeholder: _vm.Locale.ussd.ussd_placeholder[_vm.$i18n.locale],
            },
            model: {
              value: _vm.data.ussd.code,
              callback: function ($$v) {
                _vm.$set(_vm.data.ussd, "code", $$v)
              },
              expression: "data.ussd.code",
            },
          }),
          _vm._v(" "),
          _vm.error.pin
            ? _c("div", { staticClass: "error" }, [
                _vm._v(_vm._s(_vm.error.pin[_vm.$i18n.locale])),
              ])
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "terms-container" }, [
        _c(
          "a",
          {
            staticClass: "info-button",
            attrs: { href: _vm.tnc, target: "_blank" },
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                },
              },
              [
                _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2\n          12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.Locale.ussd.tnc[_vm.$i18n.locale]))]),
          ]
        ),
        _vm._v(" "),
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.agreement,
                expression: "agreement",
              },
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.agreement)
                ? _vm._i(_vm.agreement, null) > -1
                : _vm.agreement,
            },
            on: {
              change: function ($event) {
                var $$a = _vm.agreement,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.agreement = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.agreement = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.agreement = $$c
                }
              },
            },
          }),
          _vm._v(" "),
          _c("span", [
            _vm._v(_vm._s(_vm.Locale.ussd.agreement[_vm.$i18n.locale])),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "button-element",
        {
          attrs: {
            id: "mnp_number",
            disabled: !_vm.data.ussd.code || !_vm.agreement || _vm.loading,
          },
          on: { click: _vm.checkPin },
        },
        [_vm._v(_vm._s(_vm.Locale.ussd.move_number[_vm.$i18n.locale]))]
      ),
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/pages/mnp/verify/locale.json":
/*!***************************************************!*\
  !*** ./resources/js/pages/mnp/verify/locale.json ***!
  \***************************************************/
/*! exports provided: checklist, otp, ussd, ekyc, checking, result, address_next, agreement1, agreement2, agreement3, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"checklist\":{\"title\":{\"th\":\"เช็กความพร้อมก่อนย้ายมาทรู\",\"en\":\"Ready to move to us?\"},\"subtitle\":{\"th\":\"เบอร์ที่จะย้ายค่ายต้อง\",\"en\":\"Please check that your mobile number:\"},\"checklist1\":{\"th\":\"ไม่มียอดค้างชำระ\",\"en\":\"has no outstanding bill\"},\"checklist2\":{\"th\":\"ไม่ติดสัญญาณกับค่ายเดิม\",\"en\":\"is not under any contract\"}},\"otp\":{\"title\":{\"th\":\"เบอร์ที่ต้องการย้ายค่ายมาทรู\",\"en\":\"Number moving to TrueMove H\"},\"phone_number\":{\"th\":\"เบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Registered Phone Number\"},\"phone_number_placeholder\":{\"th\":\"กรอกเบอร์มือถือ\",\"en\":\"Enter your mobile number\"},\"fetch_otp\":{\"th\":\"ขอรหัส OTP\",\"en\":\"Request OTP\"},\"otp\":{\"th\":\"กรอกรหัส OTP\",\"en\":\"Enter the OTP that you received\"},\"otp_placeholder\":{\"th\":\"กรอกรหัส OTP\",\"en\":\"Enter the OTP code\"},\"request_otp_again\":{\"th\":\"ขอรหัสอีกครั้ง\",\"en\":\"Resend\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Submit\"}},\"ussd\":{\"mobile_number\":{\"th\":\"เบอร์ที่ต้องการย้ายค่ายมาทรู\",\"en\":\"Number moving to TrueMove H\"},\"title\":{\"th\":\"การขอรับ PIN Code\",\"en\":\"Get your PIN code\"},\"subtitle\":{\"th\":\"ผู้ให้บริการปัจจุบันของคุณจะส่งรหัสย้ายค่ายให้ทาง SMS จึงอาจใช้เวลาประมาณ 3-5 นาที\\nสำหรับลูกค้าชาวต่างชาติ กรุณาพิมพ์ SMS หมายเลขพาสปอร์ต แล้วส่งมาที่เบอร์ 444415\",\"en\":\"Your current carrier will send PIN code to you via SMS. This might take 3-5 minutes.\\nFor foreigner, send your passport number via SMS to 4444151\"},\"ussd\":{\"th\":\"กรอกรหัสย้ายค่ายที่ได้รับ\",\"en\":\"Enter PIN code sent to your mobile\"},\"ussd_placeholder\":{\"th\":\"รหัสย้ายค่าย 8 หลัก\",\"en\":\"8-digit PIN code\"},\"tnc\":{\"th\":\"ข้อกำหนดและเงื่อนไข\",\"en\":\"Term and Condition\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Term and Condition\"},\"move_number\":{\"th\":\"ดำเนินการย้ายค่ายมาทรู\",\"en\":\"Move my number to True\"}},\"ekyc\":{\"title\":{\"th\":\"ตรวจสอบการขอย้ายค่ายเบอร์เดิม\",\"en\":\"Check the privilege to move to True network\"},\"next\":{\"th\":\"ต่อไป\",\"en\":\"Next\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"next_trueshop\":{\"en\":\"Search TrueShop\",\"th\":\"ค้นหาทรูช้อป\"}},\"checking\":{\"label\":{\"th\":\"กำลังตรวจสอบ ...\",\"en\":\"Checking ...\"}},\"result\":{\"result_success\":{\"th\":\"คุณสามารถทำการขอย้ายค่ายเบอร์เดิมได้\",\"en\":\"You have the right to move to True network.\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID Number\"},\"passport\":{\"th\":\"หมายเลขพาสปอร์ต\",\"en\":\"Passport Number\"},\"result_status_success\":{\"th\":\"คุณสามารถซื้อเบอร์โทรศัพท์ที่ต้องการได้\",\"en\":\"You can choose to buy the phone number you want.\"},\"result_status_fail\":{\"th\":\"หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\",\"en\":\"If you have any questions, please contact Call center 1242\"},\"retry\":{\"th\":\"ตรวจสอบอีกครั้ง\",\"en\":\"Try Again\"}},\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"agreement1\":{\"th\":\"กรอกข้อมูลให้ครบถ้วน และกด \\\"ดำเนินการต่อ\\\" เพื่อบันทึก\",\"en\":\"Please complete the information. Click \\\"Next\\\" to save the information.\"},\"agreement2\":{\"th\":\"ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี\",\"en\":\"I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.\"},\"agreement3\":{\"th\":\"ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี\",\"en\":\"The company reserves the right to cancel the order and refund all cases.\"}}");

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ussd.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ussd.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true&");
/* harmony import */ var _mnp_ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mnp-ussd.vue?vue&type=script&lang=js& */ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&");
/* harmony import */ var _mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _mnp_ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78afd3ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mnp/verify/mnp-ussd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ussd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=style&index=1&id=78afd3ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_style_index_1_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ussd.vue?vue&type=template&id=78afd3ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ussd_vue_vue_type_template_id_78afd3ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=78afd3ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78afd3ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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