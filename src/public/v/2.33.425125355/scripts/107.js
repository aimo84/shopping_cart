(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/form */ "./resources/js/components/form.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/fundtong/confirm/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/fundtong/confirm/content.json", 1);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_5__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    'form-element': _components_form__WEBPACK_IMPORTED_MODULE_3__["default"],
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      loading: false,
      data: {
        email: '',
        phone: ''
      },
      dataContact: {
        thai_id: ''
      },
      mobileNumber: '',
      mobileError: false,
      errors: [],
      selectedNumber: '',
      packageName: '',
      shopName: '',
      showFormInvalid: false,
      showPhoneInvalid: false,
      formData: {},
      pricePlanData: {},
      offlineData: {},
      idData: {},
      shopData: {},
      shopDataName: '',
      isShopData: false,
      isLowTier: false,
      posBranchText: '',
      remarkShopText: '',
      highTitleShopText: '',
      lowTitleShopText: '',
      Content: _content_json__WEBPACK_IMPORTED_MODULE_6__
    };
  },
  watch: {
    'data.email': function dataEmail(value) {
      this.validateEmailInput(this.validateEmail(value));
    },
    'data.phone': function dataPhone(value) {
      this.validateMobileInput(this.validateMobile(value));
    }
  },
  mounted: function mounted() {
    this.noLocalData = false;
    this.checkDataVhora();
    this.loading = false;
  },
  methods: {
    verify: function verify() {
      this.errors = [];

      if (this.isLowTier) {
        if (this.checkMobileValid()) {
          this.submitPlaceOrder();
        }

        return false;
      }

      if (!this.validateEmail(this.data.email) && this.data.email !== '') {
        this.checkMobileValid();
        this.showFormInvalid = true;
      } else if (this.data.email == '') {
        this.showFormInvalid = false;

        if (this.checkMobileValid()) {
          this.$refs.dialog.open();
        }
      } else {
        this.showFormInvalid = false;

        if (this.checkMobileValid()) {
          this.submitPlaceOrder();
        }
      }
    },
    checkMobileValid: function checkMobileValid() {
      var result = true;

      if (this.isShopData) {
        this.showPhoneInvalid = false;

        if (!this.validateMobile(this.data.phone)) {
          this.showPhoneInvalid = true;
          result = false;
        }
      }

      return result;
    },
    back: function back() {
      this.$refs.dialog.close();
    },
    next: function next() {
      this.showFormInvalid = false;
      this.submitPlaceOrder();
    },
    validateEmail: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateEmailInput: function validateEmailInput(type, value) {
      var element = this.$refs.confirmSimForm.querySelector('input[name="email"]');

      if (element) {
        value ? element.removeAttribute('invalid') : element.setAttribute('invalid', '');
      }
    },
    validateMobile: function validateMobile(phone) {
      var re = /^[0-9]{9,10}$/;
      return re.test(phone);
    },
    validateMobileInput: function validateMobileInput(type, value) {
      var element = this.$refs.confirmSimForm.querySelector('input[name="phone"]');

      if (element) {
        value ? element.removeAttribute('invalid') : element.setAttribute('invalid', '');
      }
    },
    checkDataVhora: function checkDataVhora() {
      this.formData = JSON.parse(localStorage.getItem('vhora-form'));
      this.pricePlanData = JSON.parse(localStorage.getItem('vhora-priceplan'));
      this.offlineData = JSON.parse(localStorage.getItem('vhora-offline-data'));
      this.idData = JSON.parse(localStorage.getItem('vhora-id-data'));
      this.shopData = JSON.parse(localStorage.getItem('vhora-offline-shop'));

      if (this.formData === null || this.pricePlanData === null || this.offlineData === null || this.idData === null || this.idData.id === undefined || this.formData.selected_msisdn === undefined || this.offlineData.shopName === undefined || this.offlineData.shopName.th === undefined) {
        this.errors.push(this.Content.error);
      } else {
        this.dataContact.thai_id = this.idData.id;
        this.selectedNumber = this.formData.selected_msisdn;
        this.packageName = this.pricePlanData.name;
        this.shopName = this.offlineData.shopName.th;
      }

      if (this.formData.package_code) {
        this.isLowTier = true;
      }

      if (this.shopData !== null) {
        var _this$shopData, _this$shopData2, _this$shopData3, _this$shopData3$confi, _this$shopData4, _this$shopData4$confi, _this$shopData5, _this$shopData5$confi, _this$shopData6, _this$shopData6$confi;

        this.isShopData = (_this$shopData = this.shopData) === null || _this$shopData === void 0 ? void 0 : _this$shopData.is_shop;
        this.shopDataName = (_this$shopData2 = this.shopData) === null || _this$shopData2 === void 0 ? void 0 : _this$shopData2.shop;
        this.posBranchText = (_this$shopData3 = this.shopData) === null || _this$shopData3 === void 0 ? void 0 : (_this$shopData3$confi = _this$shopData3.config) === null || _this$shopData3$confi === void 0 ? void 0 : _this$shopData3$confi.txt_confirm;
        this.remarkShopText = (_this$shopData4 = this.shopData) === null || _this$shopData4 === void 0 ? void 0 : (_this$shopData4$confi = _this$shopData4.config) === null || _this$shopData4$confi === void 0 ? void 0 : _this$shopData4$confi.txt_remark_confirm;
        this.highTitleShopText = (_this$shopData5 = this.shopData) === null || _this$shopData5 === void 0 ? void 0 : (_this$shopData5$confi = _this$shopData5.config) === null || _this$shopData5$confi === void 0 ? void 0 : _this$shopData5$confi.txt_high_title_confirm;
        this.lowTitleShopText = (_this$shopData6 = this.shopData) === null || _this$shopData6 === void 0 ? void 0 : (_this$shopData6$confi = _this$shopData6.config) === null || _this$shopData6$confi === void 0 ? void 0 : _this$shopData6$confi.txt_low_title_confirm;
      }
    },
    getError: function getError(code) {
      var codeError = code.toLowerCase();
      var errorMsgTH = this.Content.error.th + ' (' + code + ')';
      var errorMsgEN = this.Content.error.en + ' (' + code + ')';
      var errorMsg = {
        th: errorMsgTH,
        en: errorMsgEN
      };

      if (this.Content[codeError] != undefined) {
        errorMsg = this.Content[codeError];
      }

      return errorMsg;
    },
    submitPlaceOrder: function submitPlaceOrder() {
      var _this = this;

      var form = this.formData || {};
      var pricePlan = this.pricePlanData;
      var shopOffline = this.offlineData;
      var id = this.idData;

      if (this.data.email) {
        form.email = this.data.email;
      }

      if (this.data.phone && this.shopDataName) {
        form.phone_submit = this.data.phone;
        form.shop_data_name = this.shopDataName;
      }

      var request = {
        form: form,
        pricePlan: pricePlan,
        shopOffline: shopOffline,
        id: id
      };
      request.cToken = localStorage.getItem('truestore-berfuntong-ctoken');
      request.image = localStorage.getItem('truestore-berfuntong-vhora-image');
      this.loading = true;
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["CREATE_PLACEORDER_OFFLINE"], request).then( /*#__PURE__*/function () {
        var _ref = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(res) {
          return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (res.status_code === 200) {
                    if (res.data.offline_skip) {
                      delete request.id;
                      request.payment_method = 'STOREOFFLINE';
                      request.secure_key = _this.idData.correlationId;
                      request.offline_skip = 1;
                      request.correlation_id = _this.idData.correlationId;

                      _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["OFFLINE_THANK_YOU"], request).then( /*#__PURE__*/function () {
                        var _ref2 = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(res2) {
                          return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  window.loadingPlaceorder = false;
                                  location.replace(res2.data.redirect_url);

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x2) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                    } else {
                      window.loadingPlaceorder = false;
                      window.location.href = res.data.redirectUrl;
                    }
                  } else {
                    _this.errors.push(_this.Content.error);

                    _this.loading = false;
                  }

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        var errorMessage = _this.Content.error;

        if (typeof error.data.code !== 'undefined' && error.data.code) {
          errorMessage = _this.getError(error.data.code);
        }

        _this.loading = false;

        _this.errors.push(errorMessage);
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dialog.error-popup .content {\n  top: 45% !important;\n  max-width: 520px;\n}\n.dialog.error-popup .backdrop {\n  background-color: rgba(0, 0, 0, 0.4);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".confirm-fundtong-section[data-v-78d36916] {\n  max-width: 950px;\n  margin: 30px auto;\n  padding: 16px 16px 36px 16px;\n  background: white;\n  font-size: 20px;\n}\n.confirm-fundtong-section .text-grey[data-v-78d36916] {\n  color: #666666;\n}\n.confirm-fundtong-section .button[data-v-78d36916] {\n  padding: 9px 24px;\n}\n.confirm-fundtong-section .content[data-v-78d36916] {\n  text-align: center;\n}\n.confirm-fundtong-section .content .content-section[data-v-78d36916] {\n  padding-bottom: 30px;\n  border-bottom: 1px solid #E0E0E0;\n}\n.confirm-fundtong-section .content .mobile-number-block[data-v-78d36916] {\n  max-width: 400px;\n  margin: 0 auto;\n  border: 1px solid #E0E0E0;\n  margin-top: 25px;\n  padding: 10px 10px 0px 10px;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n.confirm-fundtong-section .content .mobile-number-block span[data-v-78d36916] {\n  font-size: 20px;\n}\n.confirm-fundtong-section .content .mobile-number-block .mobile-number[data-v-78d36916] {\n  color: #FF0000;\n  font-size: 36px;\n}\n.confirm-fundtong-section .content .confirm-detail[data-v-78d36916] {\n  margin: auto;\n  text-align: left;\n  max-width: 500px;\n  font-size: 24px;\n}\n.confirm-fundtong-section .content .text-red[data-v-78d36916] {\n  color: #FF0000;\n}\n.confirm-fundtong-section .content .title-text[data-v-78d36916] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 32px;\n  line-height: 43px;\n  color: #374754 !important;\n  margin-bottom: 32px;\n  margin-top: 10px;\n}\n.confirm-fundtong-section .content .bottom-line[data-v-78d36916] {\n  border-bottom: 1px solid #e0e0e0;\n  margin-top: 20px;\n}\n.confirm-fundtong-section .content .button-section[data-v-78d36916] {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.confirm-fundtong-section .content .button-section .button-back[data-v-78d36916] {\n  background: #FFFFFF;\n  border: 3px solid #FF0000;\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 6px 24px;\n  color: #FF0000;\n  margin-right: 20px;\n}\n.confirm-fundtong-section .content .button-section .bottom-line-dialog[data-v-78d36916] {\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 20px;\n  margin-bottom: 25px;\n}\n.confirm-fundtong-section .content .button-section .img-dialog[data-v-78d36916] {\n  max-width: 90px;\n}\n@media screen and (max-width: 520px) {\n.confirm-fundtong-section .content .button-back[data-v-78d36916] {\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] {\n  max-width: 500px;\n  margin: auto;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .bottom-line {\n  border-bottom: 1px solid #E0E0E0;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .input_container {\n  font-size: 24px;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .input input[disabled] {\n  background-color: #E0E0E0;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .input {\n  width: 100%;\n}\n@media screen and (min-width: 860px) {\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .data-contact {\n    margin-right: 20px;\n    width: 240px;\n    float: left;\n}\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .invalid-form .form .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .invalid-form .form .input .error {\n  display: block;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .input input::-moz-placeholder {\n  color: #b2b2b2;\n}\n.confirm-fundtong-section .content .form-confirm[data-v-78d36916] .input input::placeholder {\n  color: #b2b2b2;\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./global.scss?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true& ***!
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
    { staticClass: "confirm-fundtong-section" },
    [
      !_vm.loading && _vm.errors.length > 0
        ? _c("div", { staticClass: "error-container" }, [
            _c(
              "ul",
              _vm._l(_vm.errors, function (error, key) {
                return _c("li", { key: key }, [
                  _vm._v(_vm._s(error[_vm.$i18n.locale])),
                ])
              }),
              0
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loading ? _c("loading-element") : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c("div", { staticClass: "content" }, [
            _c("div", { staticClass: "content-section" }, [
              _c("div", { staticClass: "title-text" }, [
                _vm._v("เบอร์ฟันธง ตามลัคนาราศี"),
              ]),
              _vm._v(" "),
              !_vm.isLowTier && !this.isShopData
                ? _c("p", { staticClass: "text-grey" }, [
                    _vm._v(
                      "กรุณากรอกอีเมลเพื่อรับคำทำนายดวงชะตาตามลัคนาราศีเกิด"
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isLowTier && this.isShopData
                ? _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(this.highTitleShopText)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isLowTier && this.isShopData
                ? _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(this.lowTitleShopText)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isLowTier || _vm.isShopData
                ? _c("div", [
                    _c(
                      "form",
                      {
                        ref: "confirmSimForm",
                        staticClass: "form-confirm bottom-line",
                      },
                      [
                        !_vm.isLowTier
                          ? _c(
                              "div",
                              [
                                _c("form-element", {
                                  staticClass: "form-container",
                                  class: {
                                    "invalid-form": _vm.showFormInvalid,
                                  },
                                  attrs: {
                                    data: _vm.data,
                                    form: _vm.Content.dataEmail,
                                  },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isShopData
                          ? _c(
                              "div",
                              [
                                _c("form-element", {
                                  staticClass: "form-container",
                                  class: {
                                    "invalid-form": _vm.showPhoneInvalid,
                                  },
                                  attrs: {
                                    data: _vm.data,
                                    form: _vm.Content.dataPhone,
                                  },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                      ]
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "mobile-number-block top-line" }, [
                _c("span", [_vm._v("เบอร์โทรศัพท์ที่คุณเลือก")]),
                _vm._v(" "),
                _c("div", { staticClass: "mobile-number" }, [
                  _vm._v(_vm._s(this.selectedNumber)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "form",
                { staticClass: "form-confirm" },
                [
                  _c("form-element", {
                    staticClass: "form-container",
                    attrs: {
                      data: _vm.dataContact,
                      form: _vm.Content.dataContact,
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "confirm-detail" }, [
                  _c("span", { staticClass: "text-red" }, [
                    _vm._v("แพ็กเกจของคุณ: "),
                  ]),
                  _vm._v(_vm._s(this.packageName)),
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: this.shopName && !this.isShopData,
                        expression: "this.shopName && !this.isShopData",
                      },
                    ],
                    staticClass: "confirm-detail",
                  },
                  [
                    _c("span", { staticClass: "text-red" }, [_vm._v("สาขา: ")]),
                    _vm._v(_vm._s(this.shopName)),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: this.shopName && this.isShopData,
                        expression: "this.shopName && this.isShopData",
                      },
                    ],
                    staticClass: "confirm-detail",
                  },
                  [
                    _c("span", { staticClass: "text-red" }, [
                      _vm._v(_vm._s(this.posBranchText)),
                    ]),
                    _vm._v(" " + _vm._s(this.shopName)),
                  ]
                ),
                _vm._v(" "),
                !this.isShopData
                  ? _c("span", { staticClass: "confirm-detail text-red" }, [
                      _vm._v(
                        "*ระบบจะทำการจองเบอร์ที่ท่านเลือกไว้เป็นเวลา 24 ชั่วโมง*"
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                this.isShopData
                  ? _c("span", { staticClass: "confirm-detail text-red" }, [
                      _vm._v(_vm._s(this.remarkShopText)),
                    ])
                  : _vm._e(),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "button-section" },
              [
                _c(
                  "button-element",
                  { staticClass: "button", on: { click: _vm.verify } },
                  [_vm._v("ยืนยันข้อมูล")]
                ),
                _vm._v(" "),
                _c(
                  "dialog-element",
                  { ref: "dialog", staticClass: "error-popup" },
                  [
                    _c("div", { attrs: { slot: "content" }, slot: "content" }, [
                      _c("div", [
                        _c("h2", { staticClass: "text-red" }, [
                          _vm._v(
                            "\n                    ขออภัย\n                  "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "img-dialog",
                          attrs: {
                            src: "/images/icons/clarity_alert-line.png",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "bottom-line-dialog" }, [
                          _vm._v("\n                    กรุณากรอก อีเมล "),
                          _c("br"),
                          _vm._v(
                            "\n                    เพื่อรับผลคำทำนายและจุดเปิดดวงเฉพาะคุณ "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                    ต้องการดำเนินการต่อหรือไม่\n                  "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "button-element",
                              {
                                staticClass: "button-back",
                                on: { click: _vm.back },
                              },
                              [
                                _vm._v(
                                  "\n                      กลับไปกรอกอีเมล\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("button-element", { on: { click: _vm.next } }, [
                              _vm._v(
                                "\n                      ดำเนินการต่อ\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
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

/***/ "./resources/js/pages/fundtong/confirm/content.json":
/*!**********************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/content.json ***!
  \**********************************************************/
/*! exports provided: dataEmail, dataPhone, dataContact, error, nas201, nas301, nas305, verify, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dataEmail\":{\"email\":{\"label\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"inputmode\":\"email\",\"type\":\"email\",\"required\":false,\"pattern\":\".{1,50}\",\"placeholder\":{\"th\":\"กรุณากรอกอีเมล\",\"en\":\"Enter your email\"},\"error\":{\"th\":\"กรุณากรอกอีเมลให้ถูกต้อง\",\"en\":\"Please enter correct an email\"}}},\"dataPhone\":{\"phone\":{\"label\":{\"th\":\"เบอร์โทรศัพท์\",\"en\":\"Mobile phone number\"},\"inputmode\":\"tel\",\"type\":\"text\",\"required\":true,\"pattern\":\"[0-9]{9,10}\",\"placeholder\":{\"th\":\"กรุณากรอกเบอร์มือถือ 10 หลัก\",\"en\":\"Please enter 10 digits of mobile number\"},\"error\":{\"th\":\"กรุณากรอกเบอร์โทรศัพท์ 10 หลัก\",\"en\":\"Please enter correct phone number (10 digits)\"}}},\"dataContact\":{\"thai_id\":{\"label\":{\"th\":\"เลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"inputmode\":\"numeric\",\"type\":\"text\",\"disabled\":\"disabled\"}},\"error\":{\"th\":\"เกิดข้อผิดพลาดในการจองเบอร์มงคล กรุณาติดต่อพนักงาน\",\"en\":\"Something went wrong, Please contact staff.\"},\"nas201\":{\"th\":\"ขออภัย หมายเลขที่ท่านเลือกไม่สามารถทำรายการได้ขณะนี้\",\"en\":\"Sorry, this number has been reserved\"},\"nas301\":{\"th\":\"ขออภัย ท่านได้จองหมายเลขครบจำนวนที่กำหนดแล้ว\",\"en\":\"Sorry, you have reached reserved number quota limit\"},\"nas305\":{\"th\":\"ขออภัย รายการส่งเสริมการขายที่ท่านเลือก ไม่สามารถใช้คู่กับหมายเลขนี้ได้\",\"en\":\"Sorry, this promotion is not allow for this number\"},\"verify\":{\"mobile\":{\"placeholder\":{\"en\":\"Please enter 10 digits of mobile number\",\"th\":\"กรุณากรอกเบอร์มือถือ 10 หลัก\"},\"error\":{\"en\":\"Please enter correct phone number (10 digits)\",\"th\":\"กรุณากรอกเบอร์โทรศัพท์ 10 หลัก\"}}}}");

/***/ }),

/***/ "./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./global.scss?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/fundtong/confirm/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=78d36916&scoped=true& */ "./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& */ "./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&");
/* harmony import */ var _global_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.scss?vue&type=style&index=1&lang=scss& */ "./resources/js/pages/fundtong/confirm/global.scss?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78d36916",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/fundtong/confirm/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/confirm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=78d36916&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/confirm/index.vue?vue&type=template&id=78d36916&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78d36916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/confirm/style.scss?vue&type=style&index=0&id=78d36916&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_78d36916_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);