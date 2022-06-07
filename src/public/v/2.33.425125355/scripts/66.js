(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _sections_priceplan_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sections/priceplan-info */ "./resources/js/sections/priceplan-info/index.vue");
/* harmony import */ var _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sections/postpaid-address */ "./resources/js/sections/postpaid-address/index.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_0__["default"],
    'priceplan-info': _sections_priceplan_info__WEBPACK_IMPORTED_MODULE_1__["default"],
    'postpaid-address': _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_2__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    formInfo: Object,
    skipEkyc: Boolean
  },
  data: function data() {
    return {
      agreeTnc: false,
      agreeCancel: false,
      formValid: false,
      loading: true,
      status: {},
      Locale: {
        next: {
          th: 'ดำเนินการต่อ',
          en: 'Next'
        },
        agreement1: {
          th: 'กรอกข้อมูลให้ครบถ้วน และกด "ดำเนินการต่อ" เพื่อบันทึก',
          en: 'Please complete the information. Click "Next" to save the information.'
        },
        agreement2: {
          th: 'ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี',
          en: 'I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.'
        },
        agreement3: {
          th: 'ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี',
          en: 'The company reserves the right to cancel the order and refund all cases.'
        }
      }
    };
  },
  computed: {
    valid: function valid() {
      return this.formValid && this.agreeTnc && this.agreeCancel;
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return;
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    },
    postpaidResult: function postpaidResult() {
      return {
        thai_id: this.ekycAnswers.national_id,
        birth_date: this.ekycAnswers.date_of_birth
      };
    }
  },
  methods: {
    next: function next() {
      var postpaidAddress = this.$refs.postpaidAddress;
      this.prefillShippingAddress(postpaidAddress.getFormValue());

      if (!postpaidAddress.checkValidity()) {
        window.scrollTo(0, 0);
        postpaidAddress.showFormInvalid = true;
        return;
      }

      this.$parent.page = 'checking';
      this.$parent.computeCart();
      this.loading = true;
      postpaidAddress.showFormInvalid = false;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_0__
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_1__
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form */ "./resources/js/pages/store/privilege/verify/form.vue");
/* harmony import */ var _trueonline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trueonline */ "./resources/js/pages/store/privilege/verify/trueonline.vue");
/* harmony import */ var _checking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checking */ "./resources/js/pages/store/privilege/verify/checking.vue");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./result */ "./resources/js/pages/store/privilege/verify/result.vue");
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./package */ "./resources/js/pages/store/privilege/verify/package.vue");
/* harmony import */ var _package_failed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./package-failed */ "./resources/js/pages/store/privilege/verify/package-failed.vue");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./address */ "./resources/js/pages/store/privilege/verify/address.vue");
/* harmony import */ var _verify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./verify */ "./resources/js/pages/store/privilege/verify/verify.vue");
/* harmony import */ var _info_form_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info-form.vue */ "./resources/js/pages/store/privilege/verify/info-form.vue");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./checklist */ "./resources/js/pages/store/privilege/verify/checklist.vue");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_8__["default"],
    'form-element': _form__WEBPACK_IMPORTED_MODULE_9__["default"],
    'trueonline-element': _trueonline__WEBPACK_IMPORTED_MODULE_10__["default"],
    'checking-element': _checking__WEBPACK_IMPORTED_MODULE_11__["default"],
    'result-element': _result__WEBPACK_IMPORTED_MODULE_12__["default"],
    'package-element': _package__WEBPACK_IMPORTED_MODULE_13__["default"],
    'package-failed-element': _package_failed__WEBPACK_IMPORTED_MODULE_14__["default"],
    'address-element': _address__WEBPACK_IMPORTED_MODULE_15__["default"],
    'verify-element': _verify__WEBPACK_IMPORTED_MODULE_16__["default"],
    'info-form': _info_form_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    'checklist-element': _checklist__WEBPACK_IMPORTED_MODULE_18__["default"]
  },
  data: function data() {
    return {
      page: 'loading',
      data: {},
      result: {},
      pricePlan: false,
      existingCampaign: false,
      ekycStatusRetry: 0,
      formInfo: {},
      pricePlans: {}
    };
  },
  computed: {
    allowAddcart: function allowAddcart() {
      return this.$store.state.products.productStatus.data;
    },
    newEkyc: function newEkyc() {
      return this.$store.state.ekyc.newEkyc;
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    preToPostEkycStatus: function preToPostEkycStatus() {
      return this.$store.state.ekyc.preToPostEkycStatus;
    },
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    plans: function plans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    productId: function productId() {
      return this.$route.params.product;
    },
    inventoryId: function inventoryId() {
      return this.$route.params.inventory;
    },
    promotionId: function promotionId() {
      return this.$route.params.promotion;
    },
    verifyData: function verifyData() {
      var _this$$route$query, _this$$route$query2;

      return {
        advance_payment: (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.advance_payment,
        contract: (_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.contract
      };
    },
    typeId: function typeId() {
      return this.$route.query.type;
    },
    ppId: function ppId() {
      return this.$route.query.pp;
    },
    isRestriction: function isRestriction() {
      return this.product.product_type === 'restriction';
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return {};
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    },
    config: function config() {
      if (this.product.product_type === 'restriction') {
        if (this.typeId) return;
        return {
          path: 'restriction',
          options: {
            truemoveh: true
          }
        };
      }

      if (this.typeId === '4') {
        return {
          path: 'device_bundle_existing',
          options: {
            truemoveh: true
          }
        };
      }

      if (this.typeId === '5') {
        return {
          path: 'pre_to_post',
          options: {
            truemoveh: true
          }
        };
      }

      var config = this.$store.state.config.verifyConfig;
      return config.campaigns[this.promotionId];
    },
    answers: function answers() {
      var url = "".concat(location.origin).concat(this.$route.path);
      var params = new URLSearchParams(location.search);
      params.set('pp', this.pricePlan.id);
      return {
        answers: {
          callback_url: "".concat(url, "?").concat(params)
        }
      };
    },
    inventory: function inventory() {
      var _this = this;

      return this.product.inventories.find(function (e) {
        return e.id.toString() === _this.inventoryId;
      });
    },
    promotion: function promotion() {
      var _this2 = this;

      return this.product.promotion.find(function (item) {
        return item.id.toString() === _this2.promotionId;
      });
    },
    multiCampaign: function multiCampaign() {
      return this.product.promotion && this.product.promotion.length > 0 && this.promotion;
    },
    campaign: function campaign() {
      var _this3 = this;

      return this.product.bundle_existing.find(function (e) {
        return e.campaign_type === _this3.typeId;
      });
    },
    discountList: function discountList() {
      var id = this.campaign.campaign_type === '3' ? this.ppId : this.promotionId;
      return this.campaign.discount_list.find(function (e) {
        return e.id.toString() === id;
      });
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      return skip && this.typeId === '5';
    },
    formProductType: function formProductType() {
      return this.typeId === '5' ? 'pre_to_post' : '';
    },
    isPaysmooth: function isPaysmooth() {
      return this.$route.query.paysmooth_token;
    },
    isCampaignRedeem: function isCampaignRedeem() {
      return this.discountList && this.discountList.meta === 'campaign_redeem';
    },
    isCampaignRedeemFreeDevice: function isCampaignRedeemFreeDevice() {
      return this.discountList && this.discountList.meta === 'campaign_redeem_free_device' && typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[this.$route.query.camptype] !== 'undefined';
    },
    isCampaignFreeDevice: function isCampaignFreeDevice() {
      var _this$$route$query3;

      var campaignType = this.$route.query.camptype;

      if (this.campaign.campaign_type === '1' && ((_this$$route$query3 = this.$route.query) === null || _this$$route$query3 === void 0 ? void 0 : _this$$route$query3.campaign_redeem) == 'free') {
        return typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[campaignType] !== 'undefined';
      } else {
        return this.discountList && this.discountList.meta === 'campaign_free_device' && typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[campaignType] !== 'undefined';
      }
    }
  },
  watch: {
    page: function page() {
      window.scrollTo(0, 0);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
      var priceplan, ekyc, result;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this4.pricePlans = _this4.$store.state.store.selectedPricePlanData;
              _context.prev = 1;
              _context.next = 4;
              return Promise.all([_this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_VERIFY_CONFIG"]), _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PRODUCT_INFO"], {
                id: _this4.productId,
                tmvhAuth: _this4.$route.query.token,
                paysmoothToken: _this4.$route.query.paysmooth_token,
                useThaiId: 1
              })]);

            case 4:
              if (!(!window.localStorage.getItem('cart-id') && _this4.typeId === '5')) {
                _context.next = 6;
                break;
              }

              throw new Error('no-cart-id');

            case 6:
              if (_this4.config) {
                _context.next = 8;
                break;
              }

              throw new Error('no-config');

            case 8:
              if (!(_this4.multiCampaign && !_this4.config.options[_this4.typeId])) {
                _context.next = 10;
                break;
              }

              throw new Error();

            case 10:
              if (!['device_bundle_existing', 'pre_to_post'].includes(_this4.config.path)) {
                _context.next = 62;
                break;
              }

              if (_this4.campaign) {
                _context.next = 13;
                break;
              }

              throw new Error('no-campaign');

            case 13:
              if (!(['3', '4', '5'].includes(_this4.campaign.campaign_type) && !_this4.discountList)) {
                _context.next = 15;
                break;
              }

              throw new Error('no-discount-list');

            case 15:
              _this4.existingCampaign = true;

              if (!(_this4.campaign.campaign_type === '4')) {
                _context.next = 31;
                break;
              }

              if (!(Object.keys(_this4.pricePlans).lenght !== 0)) {
                _context.next = 21;
                break;
              }

              _this4.setPricePlan(_this4.pricePlans);

              _this4.page = 'verify';
              return _context.abrupt("return");

            case 21:
              _context.next = 23;
              return _this4.fetchPackage(_this4.discountList);

            case 23:
              if (!_this4.$route.query.pp) {
                _context.next = 29;
                break;
              }

              priceplan = _this4.plans.find(function (item) {
                return item.id === _this4.$route.query.pp;
              });

              if (!priceplan) {
                _context.next = 29;
                break;
              }

              _this4.setPricePlan(priceplan);

              _this4.page = 'verify';
              return _context.abrupt("return");

            case 29:
              _this4.page = 'package';
              return _context.abrupt("return");

            case 31:
              if (!(_this4.campaign.campaign_type === '5')) {
                _context.next = 62;
                break;
              }

              if (!(Object.keys(_this4.pricePlans).lenght !== 0)) {
                _context.next = 42;
                break;
              }

              _this4.setPricePlan(_this4.pricePlans);

              if (!_this4.skipEkyc) {
                _context.next = 40;
                break;
              }

              _this4.updateURLQuery('pp', _this4.pricePlans.id);

              _this4.page = 'info-form';
              return _context.abrupt("return");

            case 40:
              _this4.createEkyc();

              return _context.abrupt("return");

            case 42:
              if (_this4.$route.query.hash) {
                _context.next = 45;
                break;
              }

              _this4.page = 'verify';
              return _context.abrupt("return");

            case 45:
              if (_this4.$route.query.pp) {
                _context.next = 47;
                break;
              }

              throw new Error('no-pp-query');

            case 47:
              _this4.pricePlan = _this4.plans.find(function (e) {
                return e.id.toString() === _this4.$route.query.pp;
              });

              if (_this4.pricePlan) {
                _context.next = 50;
                break;
              }

              throw new Error('no-priceplan');

            case 50:
              _context.next = 52;
              return _this4.fetchEkyc();

            case 52:
              ekyc = _context.sent;

              if (ekyc) {
                _context.next = 55;
                break;
              }

              return _context.abrupt("return");

            case 55:
              _context.next = 57;
              return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["VERIFY"], {
                id: 'pre_to_post',
                data: {
                  id_number: _this4.ekycAnswers.national_id,
                  service_name: 'truemove',
                  mobile_number: _this4.ekycAnswers.mobile_no,
                  birthday: _this4.ekycAnswers.date_of_birth,
                  priceplan: _this4.pricePlan.code,
                  cart_hash: window.localStorage.getItem('cart-id'),
                  is_pre2post_bundle: 1,
                  campaign_code_list: [_this4.discountList.campaign_code],
                  product_id_list: [_this4.productId],
                  product_sku_list: [_this4.inventory.sku]
                }
              });

            case 57:
              result = _context.sent;

              if (result.is_pass) {
                _context.next = 60;
                break;
              }

              return _context.abrupt("return", _this4.$router.push({
                name: 'online-store-existing-verify-fail',
                query: {
                  product_id: _this4.$route.params.product
                }
              }));

            case 60:
              _this4.page = 'address';
              return _context.abrupt("return");

            case 62:
              if (_this4.inventory) {
                _context.next = 64;
                break;
              }

              throw new Error('no-inventory');

            case 64:
              if (!['1', '2', '3'].includes(_this4.typeId)) {
                _context.next = 74;
                break;
              }

              _this4.result = _this4.$store.state.store.verifyResultData;

              if (!(_this4.typeId === '1')) {
                _context.next = 69;
                break;
              }

              _this4.computeCart();

              return _context.abrupt("return");

            case 69:
              if (!(Object.keys(_this4.pricePlans).lenght !== 0 && _this4.typeId === '3')) {
                _context.next = 72;
                break;
              }

              _this4.verifyBundle(_this4.pricePlans);

              return _context.abrupt("return");

            case 72:
              _this4.page = 'verify';
              return _context.abrupt("return");

            case 74:
              _this4.page = 'form';
              _context.next = 82;
              break;

            case 77:
              _context.prev = 77;
              _context.t0 = _context["catch"](1);

              if (!(!_context.t0.is_pass && _this4.typeId === '5')) {
                _context.next = 81;
                break;
              }

              return _context.abrupt("return", _this4.$router.push({
                name: 'online-store-existing-verify-fail',
                query: {
                  product_id: _this4.$route.params.product
                }
              }));

            case 81:
              _this4.$router.push({
                name: 'online-store-detail',
                params: {
                  id: _this4.productId
                },
                query: {
                  token: _this4.$route.query.token,
                  paysmooth_token: _this4.$route.query.paysmooth_token
                }
              });

            case 82:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 77]]);
    }))();
  },
  methods: {
    updateURLQuery: function updateURLQuery(key, value) {
      var query = this.$route.query;
      query[key] = value;
      var newurl = "".concat(window.location.origin).concat(window.location.pathname, "?").concat(qs__WEBPACK_IMPORTED_MODULE_19___default.a.stringify(query));
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    },
    sleep: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    },
    trackAnalytics: function trackAnalytics(label) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'track_event',
        event_category: 'EKYC_verification',
        event_action: 'EKYC_result',
        event_label: label
      });
    },
    fetchEkyc: function fetchEkyc() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this5.page = 'loading';

                if (!(_this5.ekycStatusRetry < 3)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this5.sleep(2000);

              case 5:
                _context2.next = 7;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_EKYC_STATUS"], _this5.$route.query.hash);

              case 7:
                if (_this5.ekycStatus.is_pass) {
                  _context2.next = 9;
                  break;
                }

                throw new Error('ekyc-not-passed');

              case 9:
                _context2.next = 11;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PRE_TO_POST_EKYC"], {
                  cart_hash: window.localStorage.getItem('cart-id'),
                  answers: _this5.ekycStatus.answers,
                  image_liveness: _this5.ekycStatus.image_liveness,
                  is_pre2post_bundle: 1
                });

              case 11:
                if (_this5.preToPostEkycStatus.is_pass) {
                  _context2.next = 13;
                  break;
                }

                throw new Error('pre2post-ekyc-not-passed');

              case 13:
                _this5.trackAnalytics('verification_passed');

                return _context2.abrupt("return", true);

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                _this5.ekycStatusRetry++;

                if (!(_this5.ekycStatusRetry > 2)) {
                  _context2.next = 25;
                  break;
                }

                _this5.trackAnalytics('verification_failed');

                _this5.result = {
                  is_pass: false,
                  is_ekyc: true,
                  message: _this5.ekycStatus.message || {
                    th: 'Error',
                    en: 'Error'
                  }
                };
                _this5.page = 'result';
                return _context2.abrupt("return");

              case 25:
                _context2.next = 27;
                return _this5.fetchEkyc();

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }))();
    },
    createEkyc: function createEkyc() {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this6.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["CREATE_NEW_EKYC"], _this6.answers);

              case 3:
                window.location.href = _this6.newEkyc.form_url;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                _this6.page = 'form';

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    checkAllowAddCart: function checkAllowAddCart() {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
        var productStatusData, cartid, hash, addCart;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                productStatusData = {
                  product_id: _this7.productId
                };
                cartid = window.localStorage.getItem('cart-id');
                if (cartid) productStatusData.hash = cartid;
                _context4.next = 5;
                return _this7.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PRODUCT_STATUS"], productStatusData);

              case 5:
                hash = _this7.allowAddcart.hash;
                if (hash) window.localStorage.setItem('cart-id', hash);
                addCart = _this7.allowAddcart.allow_addcart;

                if (!(addCart.shop === false)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", false);

              case 10:
                if (!_this7.multiCampaign) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", addCart.bdbc);

              case 12:
                return _context4.abrupt("return", addCart.ext);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setPricePlan: function setPricePlan(e) {
      this.pricePlan = e;
      window.dataLayer.push({
        event: 'track_event',
        event_category: 'choose_the_package',
        event_action: 'verify',
        event_label: "".concat(e.name, " ").concat(e.price, " Baht")
      });
    },
    goTo: function goTo(page) {
      this.page = page;
    },
    updatePrivilege: function updatePrivilege() {
      var _this8 = this;

      if (this.result.privilege_placeorder) {
        var key = 'privilege-placeorder';
        var privileges = JSON.parse(localStorage.getItem(key)) || [];
        if (!Array.isArray(privileges)) privileges = [];
        var privilege = privileges.filter(function (item) {
          return item.product_id !== _this8.product.id;
        });

        if (this.result.privilege_placeorder[0]) {
          this.result.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000;
        }

        localStorage.setItem(key, JSON.stringify([].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.result.privilege_placeorder), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(privilege))));
      }
    },
    cartRedirect: function cartRedirect(id) {
      var _this9 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
        var store, error, result, i, j, item, sameProductId, isDevBundle, sameInventoryId, sameMat, sim, isSim;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (id) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", false);

              case 2:
                if (!(_this9.product.product_type !== 'device_bundle_new_customer' && _this9.product.product_type !== 'device_bundle_existing')) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", false);

              case 4:
                _context5.next = 6;
                return _this9.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_CART"], {
                  id: id
                });

              case 6:
                store = _this9.$store.state.cart.cart;
                error = '';

                if (store && store.data && store.data.record) {
                  result = store.data.record;

                  for (i in result) {
                    for (j in result[i].products) {
                      item = result[i].products[j];
                      sameProductId = item.id === _this9.product.id;
                      isDevBundle = item.product_type.startsWith('device_bundle_');
                      sameInventoryId = item.inventory.id.toString() === _this9.product.inventories[0].id.toString();
                      sameMat = sameProductId && sameInventoryId;
                      sim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard'];
                      isSim = sim.includes(item.product_type);
                      if (isDevBundle) error = sameMat ? '010' : '011';
                      if (isSim && error !== '010') error = '011';
                    }
                  }
                }

                return _context5.abrupt("return", error);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    verifyBundle: function verifyBundle(pricePlan) {
      var _this10 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee6() {
        var hash, stepHOutput, bundleCampaignVerifyData, paysmoothData, response;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _this10.page = 'checking';
                hash = _this10.result.cart_hash || window.localStorage.getItem('cart-id');
                stepHOutput = _this10.result.passed_output_H;
                bundleCampaignVerifyData = {
                  product_code: _this10.inventory.sku,
                  mobile: _this10.$store.state.store.verifyMobileNumber,
                  thai_id: _this10.data.id_number,
                  rc: pricePlan.price,
                  campaign_type: '3',
                  cart_hash: hash,
                  product_id: _this10.productId,
                  aging: _this10.$route.query.aging,
                  proposition_nas_code_verify: _this10.result.passed_output_H[Object.keys(stepHOutput)[0]].proposition_nas_code
                };

                if (_this10.$route.query.paysmooth_token && localStorage.getItem('paysmooth-data')) {
                  paysmoothData = JSON.parse(localStorage.getItem('paysmooth-data'));
                  bundleCampaignVerifyData.tenor = parseInt(paysmoothData.tenor);
                  bundleCampaignVerifyData.down_payment_rate = parseInt(paysmoothData.down_rate);
                }

                bundleCampaignVerifyData.check_bundle_again = true;

                if (_this10.$route.query.token) {
                  bundleCampaignVerifyData.tmvh_token = _this10.$route.query.token;
                }

                _context6.next = 10;
                return _this10.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["BUNDLE_CAMPAIGNS_VERIFY"], bundleCampaignVerifyData);

              case 10:
                response = _context6.sent;

                _this10.computeCart({
                  id: response.data[0].id,
                  pricePlanCode: pricePlan.code,
                  pricePlanCampaignCode: response.data[0].campaign_code
                });

                _context6.next = 17;
                break;

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](0);
                _this10.page = 'package-failed';

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 14]]);
      }))();
    },
    computeCart: function computeCart(e) {
      var _this11 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee7() {
        var iotData, id, isRedirect, data, product, addons, result;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                iotData = JSON.parse(window.localStorage.getItem('iot-package'));
                id = _this11.result.cart_hash || window.localStorage.getItem('cart-id');
                _context7.next = 4;
                return _this11.cartRedirect(id);

              case 4:
                isRedirect = _context7.sent;

                if (!isRedirect) {
                  _context7.next = 9;
                  break;
                }

                _this11.$router.push("/cart?error=".concat(isRedirect));

                _context7.next = 33;
                break;

              case 9:
                data = [];
                product = {
                  product_id: _this11.productId,
                  inventory_id: _this11.inventoryId,
                  store_id: _this11.product.store_id,
                  quantity: 1,
                  channel: 'tmh-website',
                  section: 'wemall'
                };

                if (_this11.multiCampaign) {
                  product.campaign_id = _this11.promotionId;

                  if (iotData) {
                    product.meta = {
                      cloud: iotData.cloud,
                      iot_type: iotData.iot_type,
                      cloud_description: {
                        th: iotData.cloud_description.th,
                        en: iotData.cloud_description.en
                      }
                    };
                  }
                }

                if (_this11.existingCampaign) {
                  if (_this11.typeId === '3') {
                    product.existing_campaign = {
                      id: e.id,
                      price_plan_code: e.pricePlanCode
                    };

                    if (e.pricePlanCampaignCode) {
                      _this11.result.privilege_placeorder[0].campaign_code = e.pricePlanCampaignCode;
                      _this11.result.privilege_placeorder[0]['campaign_code_to_check[0]'] = e.pricePlanCampaignCode;
                      _this11.result.privilege_placeorder[0]['campaigns[0]'] = e.pricePlanCampaignCode;
                    }
                  } else if (_this11.typeId === '4') {
                    product.existing_campaign = {
                      id: _this11.result.passed_output_H[_this11.inventory.sku].id,
                      price_plan_code: e.pricePlanCode
                    };
                  } else if (_this11.typeId === '5') {
                    product.existing_campaign = {
                      id: _this11.discountList.id,
                      price_plan_code: _this11.pricePlan.code
                    };
                  } else {
                    product.existing_campaign = {
                      id: _this11.result.passed_output_H[_this11.inventory.sku].id
                    };
                  }
                }

                if (localStorage.getItem('iot-package')) {
                  product.meta = JSON.parse(localStorage.getItem('iot-package'));
                }

                if (_this11.existingCampaign && (_this11.isCampaignRedeemFreeDevice || _this11.isCampaignFreeDevice)) {
                  if (product !== null && product !== void 0 && product.meta) {
                    product.meta.free_device = _this11.product.config_free_device[_this11.$route.query.camptype];
                  } else {
                    product.meta = {
                      free_device: _this11.product.config_free_device[_this11.$route.query.camptype]
                    };
                  }
                }

                addons = !_this11.isPaysmooth ? Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["computeAddons"])(_this11.$route.query, _this11.product) : [];
                data.push(product);
                data = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(addons));
                if (_this11.isPaysmooth) data[0].meta = {
                  pay_smooth: true
                };
                _context7.prev = 19;
                _context7.next = 22;
                return _this11.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["UPDATE_CART"], {
                  id: id,
                  data: data
                });

              case 22:
                result = _context7.sent;

                _this11.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_CART"], {
                  id: id
                }).then(function (_ref) {
                  var data = _ref.data;
                  data.record[0].products.forEach(function (product) {
                    var amount = product.inventory.price;
                    var quantity = product.quantity;
                    var discount = '';
                    var rcDiff = '';
                    var advancePayment = '';

                    if (product.product_type === 'device_bundle_existing' || product.product_type === 'mnp_two_step') {
                      amount -= product.existing_campaign.discount;
                      discount = product.existing_campaign.discount;
                      advancePayment = product.existing_campaign.advance_payment;

                      if (product.existing_campaign.price_plan) {
                        rcDiff = product.existing_campaign.price_plan.price - product.existing_campaign.rc;
                      }
                    }

                    Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["loggerAddon"])({
                      event: 'Cart',
                      status: 'add',
                      productId: product.id,
                      matcode: product.inventory.sku,
                      quantity: quantity,
                      amount: amount,
                      discount: discount,
                      rcDiff: rcDiff,
                      advancePayment: advancePayment
                    });
                  });
                });

                _this11.updatePrivilege();

                _context7.next = 27;
                return Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["updateEntPack"])(_this11.$route.query.ep, _this11.$route.query, _this11.product, result.cart_hash, {
                  id: _this11.inventoryId
                });

              case 27:
                _this11.$router.push("/cart?id=".concat(result.cart_hash, "&privilege-id=").concat(_this11.productId));

                _context7.next = 33;
                break;

              case 30:
                _context7.prev = 30;
                _context7.t0 = _context7["catch"](19);

                if ((_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message) === 'err-ent-pack') {
                  _this11.$router.push("/cart?error=030&privilege-id=".concat(_this11.productId));
                } else {
                  _this11.$router.push('/cart');
                }

              case 33:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[19, 30]]);
      }))();
    },
    fetchPackage: function fetchPackage(e) {
      var _this12 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee8() {
        var stepHOutput, param, _param;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this12.result.passed_output_H) {
                  _context8.next = 7;
                  break;
                }

                stepHOutput = _this12.result.passed_output_H;
                param = {
                  section: 'wemall',
                  nas_code: _this12.result.passed_output_H[Object.keys(stepHOutput)[0]].proposition_nas_code
                };
                _context8.next = 5;
                return Promise.all([_this12.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PACKAGE"], _this12.result.passed_output_H[Object.keys(stepHOutput)[0]].proposition_nas_code), _this12.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PRICE_PLAN"], param)]);

              case 5:
                _context8.next = 10;
                break;

              case 7:
                _param = {
                  section: 'wemall',
                  nas_code: e.proposition_nas_code
                };
                _context8.next = 10;
                return Promise.all([_this12.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PACKAGE"], e.proposition_nas_code), _this12.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["FETCH_PRICE_PLAN"], _param)]);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    checkVerify: function checkVerify(data) {
      var _this13 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee9() {
        var paysmoothData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this13.data = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data), {
                  product_id_list: [_this13.productId],
                  product_sku_list: [_this13.inventory.sku]
                });

                if (_this13.$route.query.paysmooth_token && localStorage.getItem('paysmooth-data')) {
                  paysmoothData = JSON.parse(localStorage.getItem('paysmooth-data'));
                  _this13.data.tenor = parseInt(paysmoothData.tenor);
                  _this13.data.down_payment_rate = parseInt(paysmoothData.down_rate);
                }

                if (!(data.service_name === 'trueonline')) {
                  _context9.next = 16;
                  break;
                }

                _context9.prev = 3;
                _this13.page = 'checking';
                _context9.next = 7;
                return _this13.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["GET_TOL_LIST"], {
                  thai_id: _this13.data.id_number,
                  otp: _this13.data.otp,
                  mobile_number: _this13.data.mobile_number
                });

              case 7:
                _this13.page = 'trueonline';
                _context9.next = 14;
                break;

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](3);
                _this13.result = {
                  is_pass: false,
                  message: {
                    th: 'ไม่พบหมายเลขลูกค้าทรูออนไลน์ โปรดลองอีกครั้งด้วยหมายเลขบัตรประชาชน และเลขหมายโทรศัพท์มือถือที่ถูกต้อง',
                    en: 'There is no TrueOnline Circuit number found. Please retry again with correct Thai ID and mobile number.'
                  }
                };
                _this13.page = 'result';

              case 14:
                _context9.next = 17;
                break;

              case 16:
                _this13.verify();

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[3, 10]]);
      }))();
    },
    verify: function verify(trueonline, hash) {
      var _this14 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee10() {
        var logData, _this14$verifyData, _this14$verifyData2, cartId, _e$tmp_check_mini_ste;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                logData = {};
                _context10.prev = 1;
                if (_this14.typeId !== '4') _this14.page = 'checking';
                _context10.next = 5;
                return _this14.checkAllowAddCart();

              case 5:
                if (_context10.sent) {
                  _context10.next = 8;
                  break;
                }

                _this14.$router.push('/cart?error=012');

                return _context10.abrupt("return");

              case 8:
                if (_this14.multiCampaign) _this14.data.campaign_id_list = [_this14.promotionId];

                if (_this14.existingCampaign && _this14.typeId === '4') {
                  _this14.data.campaign_type = _this14.typeId;
                  _this14.data.campaign_code_list = [_this14.discountList.campaign_code];
                  _this14.data.rc = _this14.pricePlan.price; // if (this.typeId === '3') this.data.rc = this.discountList.rc
                }

                if (trueonline) {
                  _this14.data.trueonline_number = trueonline;
                  _this14.data.random_hash_for_otp = hash;
                }

                if (_this14.isRestriction) {
                  _this14.data = {
                    id_number: _this14.data.id_number,
                    product_id: _this14.data.product_id_list[0],
                    product_sku: _this14.data.product_sku_list[0],
                    g_recaptcha: _this14.data.g_recaptcha
                  };
                }

                cartId = window.localStorage.getItem('cart-id');
                if (cartId) _this14.data.cart_hash = cartId;

                if (((_this14$verifyData = _this14.verifyData) === null || _this14$verifyData === void 0 ? void 0 : _this14$verifyData.advance_payment) !== undefined && ((_this14$verifyData2 = _this14.verifyData) === null || _this14$verifyData2 === void 0 ? void 0 : _this14$verifyData2.contract) !== undefined) {
                  _this14.data.verify_data = _this14.verifyData;
                }

                logData = {
                  event: "Verify Existing (type ".concat(_this14.typeId, ")"),
                  status: 'verify',
                  productId: _this14.productId,
                  matcode: _this14.inventory.sku,
                  mobileNumber: _this14.data.mobile_number
                };
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["loggerAddon"])(logData);
                _context10.next = 19;
                return _this14.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["VERIFY"], {
                  id: _this14.config.path,
                  tmvhAuth: _this14.$route.query.token,
                  data: _this14.data
                });

              case 19:
                _this14.result = _context10.sent;

                if (!_this14.result.is_pass) {
                  _context10.next = 32;
                  break;
                }

                logData.status = 'success';
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["loggerAddon"])(logData);

                if (!(_this14.existingCampaign && _this14.typeId === '4')) {
                  _context10.next = 28;
                  break;
                }

                _context10.next = 26;
                return _this14.computeCart({
                  pricePlanCode: _this14.pricePlan.code
                });

              case 26:
                _context10.next = 30;
                break;

              case 28:
                _context10.next = 30;
                return _this14.computeCart();

              case 30:
                _context10.next = 35;
                break;

              case 32:
                logData.status = 'fail';
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["loggerAddon"])(logData);
                _this14.page = 'result';

              case 35:
                _context10.next = 50;
                break;

              case 37:
                _context10.prev = 37;
                _context10.t0 = _context10["catch"](1);

                if (!((_context10.t0 === null || _context10.t0 === void 0 ? void 0 : (_e$tmp_check_mini_ste = _context10.t0.tmp_check_mini_step_result) === null || _e$tmp_check_mini_ste === void 0 ? void 0 : _e$tmp_check_mini_ste.A) === false)) {
                  _context10.next = 42;
                  break;
                }

                _this14.$refs.verify.otpFailed();

                return _context10.abrupt("return");

              case 42:
                if (!(_context10.t0.is_truemoveh && _context10.t0.is_prepaid)) {
                  _context10.next = 44;
                  break;
                }

                return _context10.abrupt("return", _this14.$router.push({
                  name: 'online-store-existing-verify-fail',
                  query: {
                    product_id: _this14.$route.params.product,
                    error: 'existing_prepaid'
                  }
                }));

              case 44:
                if (!(_context10.t0.is_truemoveh && !_context10.t0.is_prepaid && !_context10.t0.is_prever_mnp)) {
                  _context10.next = 46;
                  break;
                }

                return _context10.abrupt("return", _this14.$router.push({
                  name: 'online-store-existing-verify-fail',
                  query: {
                    product_id: _this14.$route.params.product,
                    error: 'existing_postpaid'
                  }
                }));

              case 46:
                if (!_context10.t0.is_prepaid) {
                  _context10.next = 48;
                  break;
                }

                return _context10.abrupt("return", _this14.$router.push({
                  name: 'online-store-existing-verify-fail',
                  query: {
                    product_id: _this14.$route.params.product,
                    error: 'not_true_customer_existing'
                  }
                }));

              case 48:
                _this14.result = {
                  is_pass: false,
                  is_truemoveh: _context10.t0.is_truemoveh,
                  is_prever_mnp: _this14.typeId === '4' && _context10.t0.is_prever_mnp,
                  prever_mnp_sim_product_id: _context10.t0.prever_mnp_sim_product_id,
                  price_plan: _this14.pricePlan,
                  message: _context10.t0.message || {
                    th: 'Something went wrong. Please try again later.',
                    en: 'Something went wrong. Please try again later.'
                  }
                };

                if (_this14.result.is_prever_mnp && !_this14.result.is_truemoveh) {
                  _this14.result.mnp_otp_key = _context10.t0.mnp_otp_key;
                  _this14.page = 'checklist';
                } else {
                  logData.status = 'fail';
                  Object(_utils_addon__WEBPACK_IMPORTED_MODULE_21__["loggerAddon"])(logData);
                  _this14.page = 'result';
                }

              case 50:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 37]]);
      }))();
    },
    updateFormInfo: function updateFormInfo(data) {
      var _this15 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee11() {
        var result;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this15.formInfo = {
                  thai_id: data.id,
                  birth_date: data.date,
                  mobile: _this15.$route.query.mobile,
                  redeem_code: data.redeem_code
                };

                if (!(_this15.campaign.campaign_type === '5')) {
                  _context11.next = 24;
                  break;
                }

                _this15.page = 'loading';
                _context11.next = 5;
                return _this15.fetchPackage(_this15.discountList);

              case 5:
                if (_this15.$route.query.pp) {
                  _context11.next = 7;
                  break;
                }

                throw new Error('no-pp-query');

              case 7:
                _this15.pricePlan = _this15.plans.find(function (e) {
                  return e.id.toString() === _this15.$route.query.pp;
                });

                if (_this15.pricePlan) {
                  _context11.next = 10;
                  break;
                }

                throw new Error('no-priceplan');

              case 10:
                result = null;
                _context11.prev = 11;
                _context11.next = 14;
                return _this15.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_20__["VERIFY"], {
                  id: 'pre_to_post',
                  data: {
                    id_number: data.id,
                    service_name: 'truemove',
                    mobile_number: _this15.$route.query.mobile,
                    birthday: data.date,
                    priceplan: _this15.pricePlan.code,
                    cart_hash: window.localStorage.getItem('cart-id'),
                    is_pre2post_bundle: 1,
                    campaign_code_list: [_this15.discountList.campaign_code],
                    product_id_list: [_this15.productId],
                    product_sku_list: [_this15.inventory.sku],
                    redeem_code: data.redeem_code
                  }
                });

              case 14:
                result = _context11.sent;
                _context11.next = 20;
                break;

              case 17:
                _context11.prev = 17;
                _context11.t0 = _context11["catch"](11);
                result = _context11.t0;

              case 20:
                if (result.is_pass) {
                  _context11.next = 22;
                  break;
                }

                return _context11.abrupt("return", _this15.$router.push({
                  name: 'online-store-existing-verify-fail',
                  query: {
                    product_id: _this15.$route.params.product
                  }
                }));

              case 22:
                _this15.formInfo.thai_id = result.tmp_check_result.input.id_number;
                _this15.page = 'address';

              case 24:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[11, 17]]);
      }))();
    },
    moveToOneStep: function moveToOneStep() {
      var _this16 = this;

      try {
        var discountList = this.product.bundle_existing.filter(function (product) {
          return product.campaign_type === '4';
        })[0].discount_list;
        var campaignCode = discountList.filter(function (list) {
          return list.id === parseInt(_this16.promotionId);
        })[0].campaign_code;
        var bundleId = this.product.bundles.filter(function (bundle) {
          return bundle.campaign_code === campaignCode;
        })[0].id;
        this.updateURLQuery('pp', this.pricePlan.id);
        this.$router.push({
          name: 'mnp-bundle-verify',
          params: {
            id: this.productId,
            inventory: this.inventoryId,
            bundle: bundleId
          },
          query: {
            accs: this.$route.query.accs,
            token: this.$route.query.token,
            pp: this.pricePlan.id,
            flow: 'mnp-two',
            mobile: this.data.mobile_number,
            otp: this.data.otp,
            mnp_otp_key: this.result.mnp_otp_key,
            promotion: this.promotionId,
            camptype: 'mnp_bundling_existing'
          }
        });
      } catch (e) {
        this.$router.push({
          name: 'online-store-mnp-one-step-fail',
          query: {
            product_id: this.productId,
            token: this.$route.query.token,
            paysmooth_token: this.$route.query.paysmooth_token
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _sections_thaiid_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sections/thaiid-form */ "./resources/js/sections/thaiid-form/index.vue");


//
//
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
    'thaiid-form': _sections_thaiid_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['updateFormInfo', 'product', 'isCampaignRedeem', 'isCampaignRedeemFreeDevice'],
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {
    next: function next(id, date, redeem_code) {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.updateFormInfo({
                  id: id,
                  date: date,
                  redeem_code: redeem_code
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: [Object],
    result: [Object],
    product: [Object]
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_2__
    };
  },
  computed: {
    typeId: function typeId() {
      return this.$route.query.type;
    },
    preverUrl: function preverUrl() {
      var id = this.result.prever_mnp_sim_product_id;
      var code = this.result.price_plan.code;
      /* refactor because add 'verify-device-bundle-existing' COMPONENT :
      const ref = this.$route.params.product
      */

      var ref = this.$parent.productId;
      return "/mnp/verify/".concat(id, "/").concat(code, "?reference_product_id=").concat(ref);
    },
    thaiid: function thaiid() {
      if (!this.data.id_number) return;
      return this.data.id_number.substring(0, 3) + 'XXXXXX' + this.data.id_number.substring(9, 13);
    }
  },
  methods: {
    back: function back() {
      if (['1', '2', '3', '4'].includes(this.typeId)) {
        return this.$parent.goTo('verify');
      }

      return this.$parent.goTo('form');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/form */ "./resources/js/components/form.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _Content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.json */ "./resources/js/pages/store/privilege/verify/Content.json");
var _Content_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Content.json */ "./resources/js/pages/store/privilege/verify/Content.json", 1);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'form-element': _components_form__WEBPACK_IMPORTED_MODULE_0__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      data: {
        trueonline: ''
      },
      agreement: false,
      Content: _Content_json__WEBPACK_IMPORTED_MODULE_2__,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_3__
    };
  },
  computed: {
    tol: function tol() {
      return this.$store.state.verify.tolList;
    },
    tolList: function tolList() {
      return this.tol.trueonline_number_list;
    },
    hash: function hash() {
      return this.tol.random_hash_for_otp;
    }
  },
  mounted: function mounted() {
    var options = this.tolList.map(function (e) {
      return {
        id: e.tol_number,
        value: "Circuit ID: ".concat(e.tol_number, " (").concat(e.address, " ...)")
      };
    });
    this.Content.trueonline.trueonline.options = options;
    this.data.trueonline = options[0].id;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['isCampaignRedeem', 'isCampaignRedeemFreeDevice', 'isCampaignFreeDevice'],
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      page: 'mobile',
      mobileNumber: '',
      redeemCode: '',
      otp: ['', '', '', ''],
      loading: false,
      mobileError: false,
      otpError: false,
      redeemCodeError: false
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    productId: function productId() {
      if (this.$parent.productId) {
        return this.$parent.productId;
      }

      return this.$route.params.product;
    },
    inventoryId: function inventoryId() {
      if (this.$parent.inventory) {
        return this.$parent.inventory ? this.$parent.inventory.id : '';
      }

      return this.$route.params.inventory;
    },
    typeId: function typeId() {
      if (this.$parent.typeId) {
        return this.$parent.typeId;
      }

      return this.$route.query.type;
    },
    ppId: function ppId() {
      if (this.$parent.ppId) {
        return this.$parent.ppId;
      }

      return this.$route.query.pp;
    },
    inventory: function inventory() {
      var _this = this;

      return this.product.inventories.find(function (e) {
        return e.id.toString() === _this.inventoryId;
      });
    },
    parsedMobileNumber: function parsedMobileNumber() {
      return this.mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    validOtp: function validOtp() {
      return this.otp.filter(function (e) {
        return e;
      }).length === 4;
    },
    config: function config() {
      var config = this.$store.state.config.verifyConfig;
      /* refactor because add 'verify-device-bundle-existing' COMPONENT :
      return config.campaigns[this.$route.params.promotion]
      */

      return config.campaigns[this.$parent.promotionId];
    },
    campaign: function campaign() {
      var _this2 = this;

      return this.product.bundle_existing.find(function (e) {
        return e.campaign_type === _this2.typeId;
      });
    },
    discountList: function discountList() {
      var id = this.campaign.campaign_type === '3' ? this.ppId : this.promotionId;
      return this.campaign.discount_list.find(function (e) {
        return e.id.toString() === id;
      });
    },
    promotionId: function promotionId() {
      /* refactor because add 'verify-device-bundle-existing' COMPONENT :
      return this.$route.params.promotion
      */
      if (this.$parent.promotionId) {
        return this.$parent.promotionId;
      }

      return this.$route.params.promotion;
    },
    verifyData: function verifyData() {
      var _this$$route$query, _this$$route$query2;

      if (this.$parent.queryString) {
        return {
          advance_payment: this.$parent.queryString.advance_payment ? this.$parent.queryString.advance_payment : '',
          contract: this.$parent.queryString.contract ? this.$parent.queryString.contract : ''
        };
      }

      return {
        advance_payment: (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.advance_payment,
        contract: (_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.contract
      };
    },
    Mnp2StepPackageName: function Mnp2StepPackageName() {
      var _this3 = this;

      var discountList = this.product.bundle_existing.filter(function (product) {
        return product.campaign_type === '4';
      })[0].discount_list;
      var packages = discountList.filter(function (list) {
        return list.id === parseInt(_this3.promotionId);
      })[0];
      return packages.package_name;
    },
    aging: function aging() {
      var aging = '';

      if (this.campaign.campaign_type === '3') {
        if (this.$parent.queryString) {
          return this.$parent.queryString.aging ? this.$parent.queryString.aging : '';
        }

        return this.$route.query.aging;
      }

      if (this.campaign.campaign_type === '1') {
        var objList = this.campaign.discount_list && this.campaign.discount_list.find(function (item) {
          return item.aging !== '';
        });

        if (objList) {
          aging = objList.aging;
          return aging;
        }
      }

      return aging;
    }
  },
  methods: {
    requestOtp: function requestOtp() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!_this4.loading) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this4.mobileError = false;
                _this4.redeemCodeError = false;
                _this4.loading = true;

                if (!((_this4.typeId === '3' || _this4.typeId === '4') && (_this4.isCampaignRedeem || _this4.isCampaignRedeemFreeDevice) && !_this4.redeemCode)) {
                  _context.next = 10;
                  break;
                }

                _this4.redeemCodeError = true;
                _this4.loading = false;
                return _context.abrupt("return");

              case 10:
                if (/^[0-9]{10,10}$/.test(_this4.mobileNumber)) {
                  _context.next = 12;
                  break;
                }

                throw new Error('input-invalid');

              case 12:
                _context.next = 14;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_OTP"], _this4.mobileNumber);

              case 14:
                _this4.loading = false;
                _this4.page = 'otp';
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                _this4.loading = false;
                _this4.mobileError = true;

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      }))();
    },
    resendOtp: function resendOtp() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.loading = true;
                _context2.next = 3;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_OTP"], _this5.mobileNumber);

              case 3:
                _this5.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    verifyOtp: function verifyOtp() {
      if (this.typeId === '5') return this.verifyPreToPost();
      if (this.typeId === '4') return this.verifyMnpTwoStep();
      this.verifyExisting();
    },
    verifyPreToPost: function verifyPreToPost() {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var result, _e$tmp_check_result, _e$tmp_check_result$A;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!_this6.loading) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _this6.otpError = false;
                _this6.loading = true;
                _context3.next = 7;
                return _this6.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["VERIFY"], {
                  id: 'pre_to_post/pre_ekyc',
                  data: {
                    mobile_number: _this6.mobileNumber,
                    otp: _this6.otp.join(''),
                    is_pre2post_bundle: true
                  }
                });

              case 7:
                result = _context3.sent;

                if (result.is_pass) {
                  _context3.next = 10;
                  break;
                }

                throw new Error();

              case 10:
                window.localStorage.setItem('cart-id', result.cart_hash);

                _this6.updateURLQuery('mobile', _this6.mobileNumber);

                _this6.$parent.goTo('package');

                _context3.next = 22;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                _this6.loading = false;

                if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : (_e$tmp_check_result = _context3.t0['tmp_check_result']) === null || _e$tmp_check_result === void 0 ? void 0 : (_e$tmp_check_result$A = _e$tmp_check_result.A) === null || _e$tmp_check_result$A === void 0 ? void 0 : _e$tmp_check_result$A['is_pass']) === false)) {
                  _context3.next = 21;
                  break;
                }

                _this6.otpError = true;
                return _context3.abrupt("return");

              case 21:
                return _context3.abrupt("return", _this6.$router.push({
                  name: 'online-store-existing-verify-fail',
                  query: {
                    /* refactor because add 'verify-device-bundle-existing' COMPONENT :
                    product_id: this.$route.params.product,
                    */
                    product_id: _this6.$parent.productId,
                    error: _context3.t0.is_not_found_thai_id ? 'not_true_customer' : 'not_prepaid'
                  }
                }));

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }))();
    },
    verifyExisting: function verifyExisting() {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var _this7$verifyData, _this7$verifyData2, data, paysmoothData, result, _e$tmp_check_result2, _e$tmp_check_result2$;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _this7.page = 'checking';
                _this7.otpError = false;
                data = {
                  service_name: 'truemove',
                  mobile_number: _this7.mobileNumber,
                  otp: _this7.otp.join(''),
                  product_id_list: [_this7.productId],
                  product_sku_list: [_this7.inventory ? _this7.inventory.sku : null],
                  campaign_type: _this7.typeId,
                  cart_hash: window.localStorage.getItem('cart-id'),
                  redeem_code: _this7.redeemCode,
                  is_trueblack: _this7.$route.query.trueblack
                };

                if (_this7.aging !== '') {
                  data.aging = _this7.aging;
                }

                if (_this7.$route.query.paysmooth_token && localStorage.getItem('paysmooth-data')) {
                  paysmoothData = JSON.parse(localStorage.getItem('paysmooth-data'));
                  data.tenor = parseInt(paysmoothData.tenor);
                  data.down_payment_rate = parseInt(paysmoothData.down_rate);
                }

                if (((_this7$verifyData = _this7.verifyData) === null || _this7$verifyData === void 0 ? void 0 : _this7$verifyData.advance_payment) !== undefined && ((_this7$verifyData2 = _this7.verifyData) === null || _this7$verifyData2 === void 0 ? void 0 : _this7$verifyData2.contract) !== undefined) {
                  data.verify_data = _this7.verifyData;
                }

                if (_this7.typeId === '3') data.rc = _this7.discountList.rc;
                _context4.next = 10;
                return _this7.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["VERIFY"], {
                  id: _this7.config.path,
                  tmvhAuth: _this7.$route.query.token,
                  data: data
                });

              case 10:
                result = _context4.sent;

                if (result.is_pass) {
                  _context4.next = 13;
                  break;
                }

                throw new Error();

              case 13:
                _this7.$parent.data.mobile_number = _this7.mobileNumber;
                _this7.$parent.result = result;

                if (!(_this7.typeId === '3')) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 18;
                return _this7.$parent.fetchPackage(_this7.discountList);

              case 18:
                return _context4.abrupt("return", _this7.$parent.goTo('package'));

              case 19:
                _context4.next = 21;
                return _this7.$parent.computeCart();

              case 21:
                _context4.next = 31;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](0);

                if (!((_context4.t0 === null || _context4.t0 === void 0 ? void 0 : (_e$tmp_check_result2 = _context4.t0['tmp_check_result']) === null || _e$tmp_check_result2 === void 0 ? void 0 : (_e$tmp_check_result2$ = _e$tmp_check_result2.A) === null || _e$tmp_check_result2$ === void 0 ? void 0 : _e$tmp_check_result2$['is_pass']) === false)) {
                  _context4.next = 29;
                  break;
                }

                _this7.otpError = true;
                _this7.page = 'otp';
                return _context4.abrupt("return");

              case 29:
                _this7.$parent.result = {
                  is_pass: false,
                  prever_mnp_sim_product_id: _context4.t0.prever_mnp_sim_product_id,
                  message: _context4.t0.message || {
                    th: 'Something went wrong. Please try again later.',
                    en: 'Something went wrong. Please try again later.'
                  }
                };

                _this7.$parent.goTo('result');

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 23]]);
      }))();
    },
    verifyMnpTwoStep: function verifyMnpTwoStep() {
      this.loading = true;
      var data = {
        service_name: this.mnpTwoStepService(),
        mobile_number: this.mobileNumber,
        otp: this.otp.join(''),
        redeem_code: this.redeemCode
      };
      this.$parent.checkVerify(data);
    },
    mnpTwoStepService: function mnpTwoStepService() {
      var options = this.$parent.config.options;

      if (this.$parent.multiCampaign) {
        var type = this.$route.query.type;
        return type === 'truemoveh' ? 'truemove' : type;
      } else {
        if (options.trueonline) {
          return 'trueonline';
        }

        if (options.truemoveh) {
          return 'truemove';
        }
      }
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
      var newurl = "".concat(window.location.origin).concat(window.location.pathname, "?").concat(qs__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(query));
      window.history.replaceState({
        path: newurl
      }, '', newurl);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".price-plan[data-v-431958da] {\n  max-width: 1100px;\n  margin: 24px auto;\n}\n.address-container[data-v-431958da] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: auto;\n}\n.address-container .address-form-container[data-v-431958da] {\n  max-width: 720px;\n  margin: auto;\n  text-align: left;\n  padding: 24px 0;\n}\n.address-container .agreement-container[data-v-431958da] {\n  font-size: 24px;\n  line-height: 35px;\n  color: #666;\n  border-top: 1px solid #ddd;\n  padding-top: 16px;\n}\n.address-container .agreement-container span[data-v-431958da] {\n  font-family: \"TrueBold\";\n}\n.address-container .agreement-container label[data-v-431958da] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.address-container .agreement-container input[data-v-431958da] {\n  margin-right: 8px;\n}\n.address-container .agreement-container a[data-v-431958da] {\n  margin: 0 4px;\n  color: #ff0000;\n}\n.address-container .save-button-container[data-v-431958da] {\n  margin-top: 36px;\n  text-align: center;\n}\n.address-container .save-button-container .button[data-v-431958da] {\n  background: #ff0000;\n}\n.address-container .save-button-container .button[disabled][data-v-431958da] {\n  background: #9e9e9e;\n}\n@media screen and (max-width: 1148px) {\n.price-plan[data-v-431958da] {\n    margin: 24px 16px;\n}\n}\n@media screen and (max-width: 860px) {\n.price-plan[data-v-431958da] {\n    margin: 16px auto;\n}\n.address-container .agreement-container[data-v-431958da] {\n    line-height: 20px;\n    font-size: 20px;\n}\n.address-container .agreement-container > div[data-v-431958da] {\n    margin-bottom: 8px;\n}\n.address-container .agreement-container label[data-v-431958da] {\n    display: block;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checking-container[data-v-2011a56a] {\n  max-width: 1100px;\n  margin: 36px auto 0;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n}\n.checking-container .checking-inner-container[data-v-2011a56a] {\n  padding: 160px 0;\n}\n.checking-container .checking-inner-container .checking-icon svg[data-v-2011a56a] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 50px;\n  -webkit-animation: loading-data-v-2011a56a 2s linear infinite;\n          animation: loading-data-v-2011a56a 2s linear infinite;\n  fill: #ff0000;\n}\n.checking-container .checking-inner-container .checking-label[data-v-2011a56a] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@media screen and (max-width: 1148px) {\n.checking-outer-container[data-v-2011a56a] {\n    padding-top: 24px;\n}\n.checking-container[data-v-2011a56a] {\n    margin: 0 24px;\n}\n}\n@-webkit-keyframes loading-data-v-2011a56a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-2011a56a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mnp-checklist[data-v-5646ba85] {\n  display: grid;\n  grid-gap: 32px;\n  line-height: 20px;\n}\n.mnp-checklist .main-icon[data-v-5646ba85] {\n  text-align: center;\n}\n.mnp-checklist .main-icon img[data-v-5646ba85] {\n  width: 200px;\n}\n.mnp-checklist .title[data-v-5646ba85] {\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  margin-bottom: 8px;\n}\n.mnp-checklist .checklists[data-v-5646ba85] {\n  border-radius: 8px;\n  padding: 24px;\n  background-color: #f5f6f4;\n  display: grid;\n  grid-gap: 16px;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  width: 100%;\n  max-width: 400px;\n}\n.mnp-checklist .checklists .checklist[data-v-5646ba85] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  grid-gap: 8px;\n  text-align: left;\n}\n.mnp-checklist .checklists .checklist svg[data-v-5646ba85] {\n  fill: #e93732;\n  width: 28px;\n  height: 28px;\n}\n.mnp-checklist .buttons[data-v-5646ba85] {\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: auto auto;\n  justify-content: center;\n}\n.mnp-checklist .buttons .back[data-v-5646ba85] {\n  background-color: #666;\n}\n.checklist-container[data-v-5646ba85] {\n  max-width: 1100px;\n  margin: 36px auto 0;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n}\n.checklist-container .checklist-inner-container[data-v-5646ba85] {\n  padding: 160px 0;\n}\n@media screen and (max-width: 480px) {\n.mnp-checklist .buttons[data-v-5646ba85] {\n    display: flex;\n    flex-direction: column-reverse;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-05b9519e] {\n  padding: 16px 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-5b49884e] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: 24px auto;\n  padding: 76px 24px 50px 24px;\n}\n.result-container .icon[data-v-5b49884e] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-5b49884e] {\n  fill: #fff;\n}\n.result-container .icon.success[data-v-5b49884e] {\n  background-color: #54c74c;\n  box-shadow: 1px 1px 0 #1f9716;\n}\n.result-container .icon.failed[data-v-5b49884e] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .result-title[data-v-5b49884e] {\n  font-size: 38px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  max-width: 600px;\n}\n.result-container .result-title.success[data-v-5b49884e] {\n  color: #e4a20f;\n}\n.result-container .result-title.failed[data-v-5b49884e] {\n  color: #ff0000;\n}\n.result-container .privilege-container[data-v-5b49884e] {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: center;\n  margin: 20px auto;\n}\n.result-container .privilege-container.failed[data-v-5b49884e] {\n  border: solid 1px #ff0000;\n  background-color: rgba(255, 0, 0, 0.1);\n}\n.result-container .privilege-container .privilege-label[data-v-5b49884e] {\n  color: #4a4a4a;\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 4px;\n}\n.result-container .privilege-container .privilege-items[data-v-5b49884e] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #000;\n}\n.result-container .result-button-container[data-v-5b49884e] {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.result-container .result-button-container .button[data-v-5b49884e] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-5b49884e] {\n  background-color: #666;\n}\n.result-container .result-button-container .button[data-v-5b49884e]:nth-child(2) {\n  margin-top: 8px;\n}\n@media screen and (max-width: 1148px) {\n.result-outer-container[data-v-5b49884e] {\n    padding-top: 24px;\n}\n.result-container[data-v-5b49884e] {\n    margin: 0 auto;\n}\n}\n@media screen and (max-width: 640px) {\n.result-container[data-v-5b49884e] {\n    padding: 30px 24px 50px 24px;\n}\n.result-container .icon[data-v-5b49884e] {\n    margin-bottom: 16px;\n}\n.result-container .result-title[data-v-5b49884e] {\n    font-size: 30px;\n    line-height: 30px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".verify-container[data-v-fd6bd9dc] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: auto;\n}\n.verify-container .verify-form-container[data-v-fd6bd9dc] {\n  max-width: 540px;\n  margin: auto;\n}\n.verify-container .title[data-v-fd6bd9dc] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  margin: 24px 0 16px 0;\n}\n.verify-container .subtitle[data-v-fd6bd9dc] {\n  margin-bottom: 24px;\n  line-height: 24px;\n}\n.verify-container .form[data-v-fd6bd9dc] {\n  max-width: 600px;\n  margin: auto;\n}\n.confirm-container[data-v-fd6bd9dc] {\n  margin-top: 24px;\n  text-align: center;\n  padding: 0 16px;\n}\n.confirm-container .agreement[data-v-fd6bd9dc] {\n  margin-bottom: 24px;\n}\n.confirm-container .agreement .agreement-label[data-v-fd6bd9dc] {\n  line-height: 22px;\n  font-size: 22px;\n  cursor: pointer;\n}\n.confirm-container .agreement .agreement-label label[data-v-fd6bd9dc] {\n  cursor: pointer;\n}\n.confirm-container .agreement .agreement-label .a[data-v-fd6bd9dc] {\n  color: #ff0000;\n  text-decoration: underline;\n}\n.confirm-container .verify-button-container[data-v-fd6bd9dc] {\n  display: grid;\n  grid-gap: 8px 20px;\n  max-width: 420px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  margin: 24px auto 0 auto;\n}\n.confirm-container .verify-button-container .button[data-v-fd6bd9dc] {\n  width: 100%;\n  background-color: #ff0000;\n}\n.confirm-container .verify-button-container .button.back[data-v-fd6bd9dc] {\n  background-color: #666;\n}\n.confirm-container .verify-button-container .button[disabled][data-v-fd6bd9dc] {\n  pointer-events: none;\n  background-color: #666;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".verify-container[data-v-3fccbaaa] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: auto;\n  display: grid;\n  grid-gap: 16px;\n}\n.verify-container .title[data-v-3fccbaaa] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #EC1D24;\n}\n.verify-container .title.otp[data-v-3fccbaaa] {\n  font-size: 24px;\n  line-height: 20px;\n  color: #000;\n  padding-top: 16px;\n}\n.verify-container .title.otp .number[data-v-3fccbaaa] {\n  font-size: 40px;\n  line-height: 40px;\n  color: #EC1D24;\n}\n.verify-container .divider[data-v-3fccbaaa] {\n  width: 100%;\n  height: 1px;\n  background-color: #DCDDE0;\n}\n.verify-container .divider.otp[data-v-3fccbaaa] {\n  margin: 16px 0;\n}\n.verify-container .form[data-v-3fccbaaa] {\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  max-width: 400px;\n  margin: auto;\n}\n.verify-container .form label[data-v-3fccbaaa] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  line-height: 24px;\n  color: #000;\n}\n.verify-container .form label.otp[data-v-3fccbaaa] {\n  color: #979797;\n  grid-column: 1/-1;\n  text-align: left;\n  font-family: \"TrueMedium\";\n  font-size: 22px;\n}\n.verify-container .form .input[data-v-3fccbaaa] {\n  display: grid;\n  grid-gap: 8px;\n}\n.verify-container .form .input input[data-v-3fccbaaa] {\n  border-radius: 8px;\n  height: 45px;\n  border: 1px solid #000000;\n  padding: 0 12px;\n  font-family: \"TrueMedium\";\n  font-size: 22px;\n}\n.verify-container .form .input input[data-v-3fccbaaa]:focus {\n  outline: none;\n}\n.verify-container .form .input .error[data-v-3fccbaaa] {\n  color: #F32525;\n  font-size: 20px;\n  line-height: 20px;\n  text-align: left;\n}\n.verify-container .form .input .error.otp[data-v-3fccbaaa] {\n  grid-column: 1/-1;\n}\n.verify-container .form .input.otp[data-v-3fccbaaa] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 8px 12px;\n}\n.verify-container .form .input.otp input[data-v-3fccbaaa] {\n  min-width: 0;\n  height: 60px;\n  border-radius: 8px;\n  border: 1px solid #929292;\n  font-family: \"TrueMedium\";\n  font-size: 36px;\n  text-align: center;\n}\n.verify-container .form .input.otp input[data-v-3fccbaaa]:focus {\n  outline: none;\n}\n.verify-container .form .input.otp input[error][data-v-3fccbaaa] {\n  border-color: #F32525;\n}\n.verify-container .form button[data-v-3fccbaaa] {\n  cursor: pointer;\n  border-radius: 8px;\n  font-family: \"TrueBold\";\n  font-size: 26px;\n  height: 50px;\n  background-color: #F32525;\n  color: #fff;\n  border: none;\n}\n.verify-container .form button[disabled][data-v-3fccbaaa] {\n  background-color: #9e9e9e;\n}\n.verify-container .form .resend[data-v-3fccbaaa] {\n  color: #666;\n  font-size: 22px;\n}\n.verify-container .form .resend span[data-v-3fccbaaa] {\n  color: #F32525;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.verify-container .checking[data-v-3fccbaaa] {\n  padding: 160px 0;\n}\n.verify-container .checking .checking-icon[data-v-3fccbaaa] {\n  margin-bottom: 50px;\n}\n.verify-container .checking .checking-icon svg[data-v-3fccbaaa] {\n  width: 40px;\n  height: 40px;\n  -webkit-animation: loading-data-v-3fccbaaa 2s linear infinite;\n          animation: loading-data-v-3fccbaaa 2s linear infinite;\n  fill: #ff0000;\n}\n.verify-container .checking .checking-label[data-v-3fccbaaa] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@-webkit-keyframes loading-data-v-3fccbaaa {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-3fccbaaa {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("priceplan-info", {
        staticClass: "price-plan",
        attrs: {
          data: _vm.status,
          "postpaid-result": _vm.skipEkyc ? _vm.formInfo : _vm.postpaidResult,
          bundle: "",
        },
      }),
      _vm._v(" "),
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
              value: !_vm.loading,
              expression: "!loading",
            },
          ],
          staticClass: "address-container",
        },
        [
          _c("div", { staticClass: "address-container" }, [
            _c(
              "div",
              { staticClass: "address-form-container" },
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
                        "\n              " +
                          _vm._s(_vm.Locale.agreement2[_vm.$i18n.locale]) +
                          "\n            "
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
                        "\n              " +
                          _vm._s(_vm.Locale.agreement3[_vm.$i18n.locale]) +
                          "\n            "
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
                        attrs: {
                          id: "confirm_personal_info",
                          disabled: !_vm.valid,
                        },
                        on: { click: _vm.next },
                      },
                      [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "checking-outer-container" }, [
    _c("div", { staticClass: "checking-container" }, [
      _c("div", { staticClass: "checking-inner-container" }, [
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
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "checklist-outer-container" }, [
    _c("div", { staticClass: "checklist-container" }, [
      _c("div", { staticClass: "mnp-checklist" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.Locale.checklist.title[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(_vm._s(_vm.Locale.checklist.subtitle[_vm.$i18n.locale])),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "checklists" }, [
          _c("div", { staticClass: "checklist" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  "enable-background": "new 0 0 24 24",
                  viewBox: "0 0 24 24",
                },
              },
              [
                _c("g", [
                  _c("path", { attrs: { d: "M0,0h24v24H0V0z", fill: "none" } }),
                ]),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M16.95,10.23l-5.66,5.66 c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95 c0.39-0.39,1.02-0.39,1.41,0C17.34,9.21,17.34,9.84,16.95,10.23z",
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.Locale.checklist.checklist1[_vm.$i18n.locale])),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "checklist" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  "enable-background": "new 0 0 24 24",
                  viewBox: "0 0 24 24",
                },
              },
              [
                _c("g", [
                  _c("path", { attrs: { d: "M0,0h24v24H0V0z", fill: "none" } }),
                ]),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M16.95,10.23l-5.66,5.66 c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95 c0.39-0.39,1.02-0.39,1.41,0C17.34,9.21,17.34,9.84,16.95,10.23z",
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.Locale.checklist.checklist2[_vm.$i18n.locale])),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "button-element",
              {
                staticClass: "back",
                on: {
                  click: function ($event) {
                    return _vm.$parent.goTo("package")
                  },
                },
              },
              [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
            ),
            _vm._v(" "),
            _c(
              "button-element",
              {
                on: {
                  click: function ($event) {
                    return _vm.$parent.moveToOneStep()
                  },
                },
              },
              [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
            ),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-icon" }, [
      _c("img", { attrs: { src: "/images/icons/move_to_us.png" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _vm.page === "loading" ? _c("loading-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "form"
        ? _c("form-element", {
            attrs: {
              config: _vm.config,
              product: _vm.product,
              "multi-campaign": _vm.multiCampaign,
              "existing-campaign": _vm.existingCampaign,
              "type-id": _vm.typeId,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "trueonline" ? _c("trueonline-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "checking" ? _c("checking-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "result"
        ? _c("result-element", {
            attrs: { data: _vm.data, result: _vm.result, product: _vm.product },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "package"
        ? _c("package-element", {
            attrs: { "type-id": _vm.typeId, data: _vm.data },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "package-failed" ? _c("package-failed-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "address"
        ? _c("address-element", {
            attrs: { formInfo: _vm.formInfo, skipEkyc: _vm.skipEkyc },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "verify"
        ? _c("verify-element", {
            ref: "verify",
            attrs: {
              isCampaignRedeem: _vm.isCampaignRedeem,
              isCampaignRedeemFreeDevice: _vm.isCampaignRedeemFreeDevice,
              isCampaignFreeDevice: _vm.isCampaignFreeDevice,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "info-form"
        ? _c("info-form", {
            attrs: {
              updateFormInfo: _vm.updateFormInfo,
              product: _vm.formProductType,
              isCampaignRedeem: _vm.isCampaignRedeem,
              isCampaignRedeemFreeDevice: _vm.isCampaignRedeemFreeDevice,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "checklist" ? _c("checklist-element") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2& ***!
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
  return _c(
    "div",
    [
      _c("thaiid-form", {
        attrs: {
          next: _vm.next,
          product: _vm.product,
          isCampaignRedeem: _vm.isCampaignRedeem,
          isCampaignRedeemFreeDevice: _vm.isCampaignRedeemFreeDevice,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true& ***!
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
  return _c("div", { staticClass: "result-outer-container" }, [
    _c("div", { staticClass: "result-container" }, [
      _vm.result.is_pass
        ? _c("div", { staticClass: "icon success" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                },
              },
              [
                _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                    stroke: "#fff",
                  },
                }),
              ]
            ),
          ])
        : _c("div", { staticClass: "icon failed" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                },
              },
              [
                _c("path", { attrs: { d: "M0 0h24v24H0V0z", fill: "none" } }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    stroke: "#fff",
                    d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
                  },
                }),
              ]
            ),
          ]),
      _vm._v(" "),
      _vm.result.is_pass
        ? _c("div", { staticClass: "result-title success" }, [
            _vm._v(_vm._s(_vm.Locale.result_success[_vm.$i18n.locale])),
          ])
        : _c("div", { staticClass: "result-title failed" }, [
            _vm._v(_vm._s(_vm.result.message[_vm.$i18n.locale]) + " "),
          ]),
      _vm._v(" "),
      !_vm.result.is_prever_mnp && _vm.thaiid
        ? _c(
            "div",
            {
              staticClass: "privilege-container",
              class: { failed: !_vm.result.is_pass },
            },
            [
              _c("div", { staticClass: "privilege-label" }, [
                _vm._v(_vm._s(_vm.Locale.thai_id[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "privilege-items" }, [
                _vm._v(_vm._s(_vm.thaiid)),
              ]),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "result-button-container" },
        [
          _vm.result.is_pass
            ? _c(
                "button-element",
                {
                  staticClass: "button next",
                  on: {
                    click: function ($event) {
                      return _vm.$parent.computeCart()
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
              )
            : [
                _vm.result.is_ekyc
                  ? _c(
                      "button-element",
                      {
                        staticClass: "button next",
                        on: {
                          click: function ($event) {
                            return _vm.$parent.fetchEkyc()
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Locale.retry[_vm.$i18n.locale]) +
                            "\n        "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.result.is_prever_mnp && !_vm.result.is_truemoveh
                  ? _c(
                      "router-link",
                      { attrs: { to: _vm.preverUrl } },
                      [
                        _c("button-element", { staticClass: "button" }, [
                          _vm._v(
                            _vm._s(_vm.Locale.super_khum[_vm.$i18n.locale])
                          ),
                        ]),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button-element",
                  { staticClass: "button back", on: { click: _vm.back } },
                  [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
                ),
              ],
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "verify-container" },
      [
        _c("div", { staticClass: "verify-form-container" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.Locale.verify_title[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "subtitle" }, [
            _vm._v(_vm._s(_vm.Locale.verify_subtitle[_vm.$i18n.locale])),
          ]),
        ]),
        _vm._v(" "),
        _c("form-element", {
          staticClass: "form",
          attrs: { data: _vm.data, form: _vm.Content.trueonline },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "confirm-container" }, [
      _c("div", { staticClass: "agreement" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.agreement,
              expression: "agreement",
            },
          ],
          attrs: { name: "agreement", id: "agreement", type: "checkbox" },
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
        _c("span", { staticClass: "agreement-label" }, [
          _c("label", { attrs: { for: "agreement" } }, [
            _vm._v(_vm._s(_vm.Locale.tnc[_vm.$i18n.locale])),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "verify-button-container" },
        [
          _c(
            "button-element",
            {
              staticClass: "button back",
              on: {
                click: function ($event) {
                  return _vm.$parent.goTo("form")
                },
              },
            },
            [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
          ),
          _vm._v(" "),
          _c(
            "button-element",
            {
              staticClass: "button",
              attrs: { disabled: !_vm.agreement },
              on: {
                click: function ($event) {
                  return _vm.$parent.verify(_vm.data.trueonline, _vm.hash)
                },
              },
            },
            [_vm._v(_vm._s(_vm.Locale.submit[_vm.$i18n.locale]))]
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true& ***!
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
    { staticClass: "verify-container" },
    [
      _vm.page === "mobile"
        ? [
            _c("div", [
              _c("div", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    this.typeId === "5"
                      ? _vm.Locale.verify.mobile.pre2post_title[
                          _vm.$i18n.locale
                        ]
                      : this.typeId === "4"
                      ? this.Mnp2StepPackageName
                      : _vm.Locale.verify.mobile.title[_vm.$i18n.locale]
                  )
                ),
              ]),
              _vm._v(" "),
              _vm.typeId === "4"
                ? _c("div", { staticClass: "subtitle" }, [
                    _vm._v(_vm._s(this.$parent.pricePlan.name)),
                  ])
                : _vm._e(),
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
                (this.typeId === "3" || this.typeId === "4") &&
                (_vm.isCampaignRedeem || _vm.isCampaignRedeemFreeDevice)
                  ? _c("label", { attrs: { for: "" } }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.Locale.redeem_code[_vm.$i18n.locale]) +
                          "\n      "
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "input" }, [
                  (this.typeId === "3" || this.typeId === "4") &&
                  (_vm.isCampaignRedeem || _vm.isCampaignRedeemFreeDevice)
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.redeemCode,
                            expression: "redeemCode",
                          },
                        ],
                        attrs: {
                          disabled: _vm.loading,
                          placeholder:
                            _vm.Locale.redeem_code.placeholder[
                              _vm.$i18n.locale
                            ],
                          type: "text",
                        },
                        domProps: { value: _vm.redeemCode },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.redeemCode = $event.target.value
                          },
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.redeemCodeError
                    ? _c("div", { staticClass: "error" }, [
                        _vm._v(
                          _vm._s(_vm.Locale.redeem_code.error[_vm.$i18n.locale])
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(
                    _vm._s(
                      this.typeId === "5"
                        ? _vm.Locale.verify.mobile.pre2post_label[
                            _vm.$i18n.locale
                          ]
                        : this.typeId === "4"
                        ? _vm.Locale.verify.mobile.mnp2step_label[
                            _vm.$i18n.locale
                          ]
                        : _vm.Locale.verify.mobile.label[_vm.$i18n.locale]
                    )
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
                    attrs: {
                      disabled: _vm.loading,
                      placeholder:
                        this.typeId === "4"
                          ? _vm.Locale.verify.mobile.mnp2step_placeholder[
                              _vm.$i18n.locale
                            ]
                          : _vm.Locale.verify.mobile.placeholder[
                              _vm.$i18n.locale
                            ],
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

/***/ "./resources/js/pages/store/privilege/verify/address.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/address.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=431958da&scoped=true& */ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true&");
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "431958da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=style&index=0&id=431958da&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_style_index_0_id_431958da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=template&id=431958da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/address.vue?vue&type=template&id=431958da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_431958da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checking.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checking.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checking.vue?vue&type=template&id=2011a56a&scoped=true& */ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true&");
/* harmony import */ var _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2011a56a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/checking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=style&index=0&id=2011a56a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_2011a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=template&id=2011a56a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checking.vue?vue&type=template&id=2011a56a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_2011a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checklist.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checklist.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist.vue?vue&type=template&id=5646ba85&scoped=true& */ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true&");
/* harmony import */ var _checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5646ba85",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/checklist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=style&index=0&id=5646ba85&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_id_5646ba85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=template&id=5646ba85&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/checklist.vue?vue&type=template&id=5646ba85&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_5646ba85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=05b9519e&scoped=true& */ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05b9519e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=style&index=0&id=05b9519e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05b9519e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=05b9519e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/index.vue?vue&type=template&id=05b9519e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b9519e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/info-form.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/info-form.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-form.vue?vue&type=template&id=074cb8e2& */ "./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2&");
/* harmony import */ var _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-form.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/info-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=template&id=074cb8e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/info-form.vue?vue&type=template&id=074cb8e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_074cb8e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/result.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/result.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=5b49884e&scoped=true& */ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b49884e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=style&index=0&id=5b49884e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_5b49884e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=template&id=5b49884e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/result.vue?vue&type=template&id=5b49884e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_5b49884e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/trueonline.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/trueonline.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true& */ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true&");
/* harmony import */ var _trueonline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trueonline.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _trueonline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fd6bd9dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/trueonline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./trueonline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=style&index=0&id=fd6bd9dc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_style_index_0_id_fd6bd9dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/trueonline.vue?vue&type=template&id=fd6bd9dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueonline_vue_vue_type_template_id_fd6bd9dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/verify.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/verify.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=3fccbaaa&scoped=true& */ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true&");
/* harmony import */ var _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fccbaaa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=style&index=0&id=3fccbaaa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_3fccbaaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=template&id=3fccbaaa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/verify.vue?vue&type=template&id=3fccbaaa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_3fccbaaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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