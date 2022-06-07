(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/trueonline/order/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/trueonline/order/locale.json", 1);
/* harmony import */ var _components_clm_benefit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/clm-benefit */ "./resources/js/components/clm-benefit.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_3__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    'clm-benefit-element': _components_clm_benefit__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    data: Object,
    loading: Boolean,
    token: Object,
    lang: String
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      orderLoading: true,
      error: false
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.trueonline.tolProduct.data;
    },
    description: function description() {
      return {
        th: this.product.description_th,
        en: this.product.description_en
      };
    },
    billingAddr: function billingAddr() {
      return this.computeAddress('billing_addr');
    },
    invoiceAddr: function invoiceAddr() {
      return this.computeAddress('invoice_addr');
    },
    installationAddr: function installationAddr() {
      var addr = this.data.instl_addr;
      var addressArr = [addr.HOUSE_NO, addr.MOO, addr.STREET, addr.SOI];
      var address = addressArr.filter(function (e) {
        return e;
      }).join(' ');
      return "".concat(address, ", ").concat(addr.SUB_DISTRICT, ", ").concat(addr.DISTRICT, ", ").concat(addr.PROVINCE, " ").concat(addr.ZIP_CODE);
    }
  },
  mounted: function mounted() {
    if (!this.data.address_form_submitted) {
      this.$router.push("/trueonline/address/".concat(this.$route.params.id));
      return;
    }

    this.error = false;
    this.orderLoading = false;

    if (!this.loading) {
      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
        type: 'TOL',
        event: 'TOL user order',
        status: 'pending',
        tolProductData: [this.product.contract_code, this.product.entry_fee, this.product.media, this.product.service_code],
        tolPrice: this.product.price,
        tolInvoice: this.product.invoice_tol,
        tolEntryFee: this.product.tol_entry_fee,
        tolUserAddress: [this.data.billing_addr.name, this.data.billing_addr.lastname, this.data.billing_addr.houseNo, this.data.billing_addr.soi, this.data.billing_addr.streetName, this.data.billing_addr.district, this.data.billing_addr.city, this.data.billing_addr.province, this.data.billing_addr.postcode]
      });
    }
  },
  methods: {
    computeAddress: function computeAddress(value) {
      var addr = this.data[value];
      var addressArr = [addr.houseNo, addr.moo, addr.streetName, addr.soi];
      var address = addressArr.filter(function (e) {
        return e;
      }).join(' ');
      return "".concat(addr.name, " ").concat(addr.lastname, ",\n").concat(address, ",\n").concat(addr.district, ",\n").concat(addr.city, ",\n").concat(addr.province, " ").concat(addr.postcode);
    },
    registerOrder: function registerOrder() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var timeslot, data, clmUpsell, result;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.orderLoading = true;
                timeslot = _this.data.instl_addr.installation_time.split(';');
                data = {
                  correlationId: _this.token.correlationId,
                  certificateId: _this.token.certificateId,
                  _identity: _this.token._identity,
                  id_number: _this.data.instl_addr.identification,
                  mobilePhone: _this.data.instl_addr.phone,
                  appointmentDate: timeslot[0],
                  timeSlot: timeslot[1],
                  product_id: _this.$route.params.id,
                  customerContactList: {
                    firstname: _this.data.instl_addr.firstname,
                    lastname: _this.data.instl_addr.lastname,
                    mobilePhone: _this.data.instl_addr.phone,
                    serviceName: {
                      title: 'T0037',
                      name: _this.data.instl_addr.firstname,
                      lastname: _this.data.instl_addr.lastname
                    },
                    billingName: {
                      title: 'T0037',
                      name: _this.data.billing_addr.name,
                      lastname: _this.data.billing_addr.lastname
                    },
                    billingAddress: {
                      amphur: _this.data.billing_addr.city,
                      city: _this.data.billing_addr.province,
                      houseNo: _this.data.billing_addr.houseNo || '-',
                      moo: _this.data.billing_addr.moo || '-',
                      soi: _this.data.billing_addr.soi || '-',
                      streetName: _this.data.billing_addr.streetName || '-',
                      tumbon: _this.data.billing_addr.district,
                      zip: _this.data.billing_addr.postcode
                    },
                    taxName: {
                      title: 'T0037',
                      name: _this.data.invoice_addr.name,
                      lastname: _this.data.invoice_addr.lastname
                    },
                    taxAddress: {
                      amphur: _this.data.invoice_addr.city,
                      city: _this.data.invoice_addr.province,
                      houseNo: _this.data.invoice_addr.houseNo || '-',
                      moo: _this.data.invoice_addr.moo || '-',
                      soi: _this.data.invoice_addr.soi || '-',
                      streetName: _this.data.invoice_addr.streetName || '-',
                      tumbon: _this.data.invoice_addr.district,
                      zip: _this.data.invoice_addr.postcode
                    },
                    billMediaInfo: {
                      billMedia: 'E',
                      email: _this.data.instl_addr.email,
                      billLanguage: _this.lang === 'en' ? 'EN' : 'TH'
                    },
                    customerIndyName: {
                      title: 'T0037',
                      firstName: _this.data.instl_addr.firstname,
                      lastName: _this.data.instl_addr.lastname,
                      maritalStatus: 'N',
                      gender: _this.data.instl_addr.gender,
                      language: _this.lang === 'en' ? 'EN' : 'TH',
                      identification: _this.data.instl_addr.identification,
                      identificationType: _this.data.instl_addr.identificationType
                    }
                  },
                  customerGeneralInfo: {
                    contactLang: _this.lang === 'en' ? 'EN' : 'TH',
                    grading: 'NON-TOP',
                    identification: _this.data.instl_addr.identification,
                    identificationExpDate: '2098-12-31T17:00:00Z',
                    identificationType: _this.data.instl_addr.identificationType,
                    birthDate: _this.data.instl_addr.birthDate,
                    occupation: 'N',
                    nationality: 'THA',
                    initTimeInAddress: '0101'
                  },
                  ekyc: _this.data.ekyc
                }; // Add clm_upsell if exist from CLM Verify

                clmUpsell = localStorage.getItem('clm-upsell');

                if (clmUpsell) {
                  data.clm_upsell = clmUpsell;
                }

                _context.prev = 5;
                _this.orderLoading = true;
                _context.next = 9;
                return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["TOL_REGISTER"], data);

              case 9:
                result = _context.sent;

                if (!(result.status === 'success')) {
                  _context.next = 19;
                  break;
                }

                _this.data.result = result;
                _this.data.order_form_submitted = true;
                localStorage.removeItem('tol-certificate-id');
                localStorage.removeItem('tol-correlation-id');
                localStorage.removeItem('tol-identity');
                localStorage.removeItem('clm-upsell');

                _this.$router.push("/trueonline/success/".concat(_this.$route.params.id));

                return _context.abrupt("return");

              case 19:
                throw new Error('err');

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](5);
                window.scrollTo(0, 0);
                _this.error = _context.t0.message.th ? _context.t0.message : {
                  th: 'Something went wrong.',
                  en: 'Something went wrong.'
                };
                _this.orderLoading = false;

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 22]]);
      }))();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".order-container[data-v-87b86b68] {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  line-height: 24px;\n}\n.order-container .order[data-v-87b86b68] {\n  padding: 16px 24px;\n}\n.order-container .order[data-v-87b86b68]:first-child {\n  border-right: 1px solid #e7e7e8;\n}\n.order-container .order .title[data-v-87b86b68] {\n  margin-bottom: 24px;\n  font-size: 28px;\n  line-height: 28px;\n}\n.order-container .order .bold[data-v-87b86b68] {\n  font-family: \"TrueBold\";\n}\n.order-container .order .red[data-v-87b86b68] {\n  color: #ff0000;\n}\n.order-container .order .right[data-v-87b86b68] {\n  text-align: right;\n}\n.order-container .order .product-container[data-v-87b86b68] {\n  border-bottom: 1px solid #e7e7e8;\n  padding-bottom: 24px;\n}\n.order-container .order .product-container .product[data-v-87b86b68] {\n  background-color: #f7f7f7;\n  padding: 24px;\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  grid-gap: 16px;\n  align-items: flex-start;\n}\n.order-container .order .product-container .product img[data-v-87b86b68] {\n  width: 100%;\n}\n.order-container .order .product-container .product .info[data-v-87b86b68] {\n  color: #454545;\n  font-size: 24px;\n  display: grid;\n  grid-gap: 8px;\n}\n.order-container .order .product-container .product .info .name[data-v-87b86b68] {\n  color: #3c3c3c;\n  font-family: \"TrueBold\";\n  font-size: 28px;\n}\n.order-container .order .product-container .product .info .price[data-v-87b86b68] {\n  font-family: \"TrueBold\";\n}\n.order-container .order .price-container[data-v-87b86b68] {\n  border-bottom: 1px solid #e7e7e8;\n  padding: 24px 0;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 8px;\n}\n.order-container .order .address-container[data-v-87b86b68] {\n  padding-top: 24px;\n}\n.order-container .order .address-container .address[data-v-87b86b68] {\n  margin-left: 32px;\n  white-space: pre-line;\n}\n.order-container .order .detail-container .info-container[data-v-87b86b68] {\n  margin-left: 32px;\n  margin-bottom: 24px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n}\n.order-container .order .detail-container .installation-container[data-v-87b86b68] {\n  margin-left: 32px;\n}\n.order-container .button-container[data-v-87b86b68] {\n  grid-column: 1/-1;\n  display: grid;\n  grid-template-columns: 1fr auto auto 1fr;\n  grid-gap: 16px;\n  margin-top: 36px;\n}\n.order-container .button-container .back[data-v-87b86b68] {\n  background-color: #9e9e9e;\n}\n.order-container .sticky-container[data-v-87b86b68] {\n  display: none;\n}\n@media screen and (max-width: 860px) {\n.order-container[data-v-87b86b68] {\n    grid-template-columns: 1fr;\n}\n.order-container .order[data-v-87b86b68] {\n    padding: 8px;\n}\n.order-container .order .title[data-v-87b86b68] {\n    margin-bottom: 20px;\n}\n.order-container .order[data-v-87b86b68]:first-child {\n    border-right: none;\n}\n.order-container .order .product-container .product[data-v-87b86b68] {\n    grid-template-columns: 120px 1fr;\n    padding: 16px;\n}\n.order-container .order .address-container[data-v-87b86b68] {\n    border-bottom: 1px solid #e7e7e8;\n    padding: 24px 0;\n}\n.order-container .order .address-container .address[data-v-87b86b68] {\n    margin-left: 20px;\n}\n.order-container .order .detail-container .info-container[data-v-87b86b68],\n.order-container .order .detail-container .installation-container[data-v-87b86b68] {\n    margin-left: 20px;\n}\n.order-container .button-container[data-v-87b86b68] {\n    grid-template-columns: 1fr;\n    text-align: center;\n    margin-bottom: 24px;\n}\n.order-container .button-container button[data-v-87b86b68] {\n    width: 100%;\n}\n.order-container .button-container > div[data-v-87b86b68]:first-child, .order-container .button-container > button[data-v-87b86b68]:last-child {\n    display: none;\n}\n.order-container .sticky-container[data-v-87b86b68] {\n    display: block;\n    padding: 16px;\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    background: #fff;\n    width: calc(100% + 32px);\n    margin: 0 -16px 0 -16px;\n    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);\n}\n.order-container .sticky-container button[data-v-87b86b68] {\n    width: 100%;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true& ***!
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
    [
      _vm.loading || _vm.orderLoading
        ? _c("loading-element")
        : _c("div", [
            _vm.error
              ? _c("div", { staticClass: "error-container" }, [
                  _c("ul", [
                    _c("li", [_vm._v(_vm._s(_vm.error[_vm.$i18n.locale]))]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "order-container" }, [
              _c("div", { staticClass: "order" }, [
                _c("div", { staticClass: "product-container" }, [
                  _c("div", { staticClass: "title bold" }, [
                    _vm._v(_vm._s(_vm.Locale.summary[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product" }, [
                    _c("img", { attrs: { src: _vm.product.image.url } }),
                    _vm._v(" "),
                    _c("div", { staticClass: "info" }, [
                      _c("div", { staticClass: "name" }, [
                        _vm._v(_vm._s(_vm.description[_vm.$i18n.locale])),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "price" }, [
                        _vm._v(_vm._s(_vm.product.price) + " ฿"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("clm-benefit-element", {
                      attrs: { type: "trueonline" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "price-container" }, [
                  _c("div", { staticClass: "bold" }, [
                    _vm._v(_vm._s(_vm.Locale.package_price[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold red right" }, [
                    _vm._v(_vm._s(_vm.product.price) + " ฿"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.installation_cost[_vm.$i18n.locale])
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold red right" }, [
                    _vm._v(_vm._s(_vm.Locale.free[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold" }, [
                    _vm._v(_vm._s(_vm.Locale.admission_fee[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bold red right" }, [
                    _vm._v("890 ฿"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "address-container" }, [
                  _c("div", { staticClass: "title bold" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.billing_address[_vm.$i18n.locale])
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "address" }, [
                    _vm._v(_vm._s(_vm.billingAddr)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "address-container" }, [
                  _c("div", { staticClass: "title bold" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.invoice_address[_vm.$i18n.locale])
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "address" }, [
                    _vm._v(_vm._s(_vm.invoiceAddr)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "order" }, [
                _c("div", { staticClass: "detail-container" }, [
                  _c("div", { staticClass: "title bold" }, [
                    _vm._v(_vm._s(_vm.Locale.order_detail[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-container" }, [
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.Locale.fullname[_vm.$i18n.locale]) + ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(this.data.instl_addr.firstname) +
                          " " +
                          _vm._s(this.data.instl_addr.lastname)
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.Locale.identity[_vm.$i18n.locale]) + ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(_vm._s(this.data.instl_addr.identification)),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.Locale.firstname[_vm.$i18n.locale]) + ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(this.data.instl_addr.firstname))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.Locale.lastname[_vm.$i18n.locale]) + ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(this.data.instl_addr.lastname))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(_vm._s(_vm.Locale.email[_vm.$i18n.locale]) + ":"),
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(this.data.instl_addr.email))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.Locale.contact_number_1[_vm.$i18n.locale]) +
                          ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(this.data.instl_addr.phone))]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "installation-container" }, [
                    _c("div", [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.installation_location[_vm.$i18n.locale]
                        ) + ":"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.installationAddr))]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-container" },
                [
                  _c("div"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: "/trueonline/address/" + _vm.$route.params.id,
                        id: "tol-register-back",
                      },
                    },
                    [
                      _c("button-element", { staticClass: "back" }, [
                        _vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale])),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("button-element", { on: { click: _vm.registerOrder } }, [
                    _vm._v(_vm._s(_vm.Locale.submit[_vm.$i18n.locale])),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "sticky-container" },
                [
                  _c(
                    "button-element",
                    {
                      attrs: { id: "tol-register" },
                      on: { click: _vm.registerOrder },
                    },
                    [_vm._v(_vm._s(_vm.Locale.submit[_vm.$i18n.locale]))]
                  ),
                ],
                1
              ),
            ]),
          ]),
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

/***/ "./resources/js/pages/trueonline/order/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/trueonline/order/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=87b86b68&scoped=true& */ "./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& */ "./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87b86b68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trueonline/order/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=style&index=0&id=87b86b68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87b86b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=87b86b68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/order/index.vue?vue&type=template&id=87b86b68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_87b86b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trueonline/order/locale.json":
/*!*********************************************************!*\
  !*** ./resources/js/pages/trueonline/order/locale.json ***!
  \*********************************************************/
/*! exports provided: summary, back, submit, free, package_price, installation_cost, admission_fee, billing_address, invoice_address, order_detail, fullname, identity, firstname, lastname, email, contact_number_1, installation_location, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"summary\":{\"th\":\"สรุปและยืนยันรายการ\",\"en\":\"Order Summary\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"submit\":{\"th\":\"สมัครบริการ\",\"en\":\"Register\"},\"free\":{\"th\":\"ฟรี\",\"en\":\"Free\"},\"package_price\":{\"th\":\"ราคาแพ็คเก็จ\",\"en\":\"Package Detail\"},\"installation_cost\":{\"th\":\"ค่าติดตั้ง\",\"en\":\"Installation Fee\"},\"admission_fee\":{\"th\":\"ค่าธรรมเนียมแรกเข้า ชำระ ณ วันติดตั้ง\",\"en\":\"Admission fee in cash (pay to the installation technician)\"},\"billing_address\":{\"th\":\"จัดส่งเอกสาร\",\"en\":\"Billing Address\"},\"invoice_address\":{\"th\":\"ใบเสร็จ / ใบกำกับภาษี\",\"en\":\"Invoice Address\"},\"order_detail\":{\"th\":\"รายละเอียด\",\"en\":\"Detail\"},\"fullname\":{\"th\":\"ชื่อและข้อมูลส่วนตัว\",\"en\":\"Name\"},\"identity\":{\"th\":\"เลขบัตรประชาชนหรือพาสปอร์ต\",\"en\":\"Thai ID / Passsport\"},\"firstname\":{\"th\":\"ชื่อ\",\"en\":\"Name\"},\"lastname\":{\"th\":\"นามสกุล\",\"en\":\"Family Name\"},\"email\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"contact_number_1\":{\"th\":\"หมายเลขติดต่อ\",\"en\":\"Mobile Number\"},\"installation_location\":{\"th\":\"สถานที่ติดตั้ง\",\"en\":\"Installation Location\"}}");

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