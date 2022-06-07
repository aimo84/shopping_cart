(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mnp_checking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mnp-checking */ "./resources/js/pages/mnp/verify/mnp-checking.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _store_mutations_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/mutations.type */ "./resources/js/store/mutations.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_9__);





//
//
//
//
//
//
//
//
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
    'mnp-checking': _mnp_checking__WEBPACK_IMPORTED_MODULE_5__["default"],
    'priceplan-info': function priceplanInfo() {
      return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(59)]).then(__webpack_require__.bind(null, /*! @sections/priceplan-info */ "./resources/js/sections/priceplan-info/index.vue"));
    },
    'address-element': function addressElement() {
      return Promise.all(/*! import() */[__webpack_require__.e(31), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, /*! ./mnp-address.vue */ "./resources/js/pages/mnp/verify/mnp-address.vue"));
    }
  },
  props: {
    data: Object,
    isCampaignFreeDevice: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      loading: true,
      status: {},
      packages: {},
      verifyForm: {},
      formEkyc: {}
    };
  },
  computed: {
    mnpOtp: function mnpOtp() {
      return this.$store.state.mnp.mnpOtp;
    },
    mnpPin: function mnpPin() {
      return this.$store.state.mnp.mnpPin;
    },
    mnpRandomNumber: function mnpRandomNumber() {
      return this.$store.state.mnp.mnpRandomNumber;
    },
    newEkyc: function newEkyc() {
      return this.$store.state.ekyc.newEkyc;
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    mnpInfo: function mnpInfo() {
      return this.$store.state.mnp.mnpInfo;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return {};
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    },
    productInfo: function productInfo() {
      return this.$store.state.products.productInfo.data.record;
    },
    user: function user() {
      return this.$store.state.auth.profile.data;
    },
    userId: function userId() {
      return this.user && this.user.user_id;
    },
    mnpType: function mnpType() {
      if (this.isMnpBundle || this.isMnpAuto) return 'mnpoposs2';
      var simType = this.productInfo.sim_data.sim_type;
      return simType === 'postpaid' ? 'mnpoposs2' : 'mnpopres2';
    },
    mnpPackage: function mnpPackage() {
      var _this = this;

      if (this.isMnpBundle || this.isMnpAuto) return this.data.bundle.plan;
      return this.productInfo.mnp_package.find(function (e) {
        return e.code === _this.$route.params.code;
      });
    },
    fullName: function fullName() {
      var prefix = this.formEkyc.prefix ? this.formEkyc.prefix : this.formEkyc.txt_title_other ? this.formEkyc.txt_title_other : '-';
      var firstName = this.formEkyc.first_name ? this.formEkyc.first_name : '-';
      var lastName = this.formEkyc.last_name ? this.formEkyc.last_name : '-';
      return "".concat(prefix, " ").concat(firstName, " ").concat(lastName);
    },
    inventory: function inventory() {
      var _this2 = this;

      return this.productInfo.inventories.find(function (inventory) {
        return inventory.id.toString() === _this2.$route.params.inventory;
      });
    },
    inventoryId: function inventoryId() {
      if (this.isMnpBundle) return this.$route.params.inventory;
      return this.productInfo.inventories[0].id;
    },
    callbackUrl: function callbackUrl() {
      var url = "".concat(location.origin).concat(this.$route.path);
      var params = new URLSearchParams(location.search);
      if (this.isMnpBundle || this.isMnpAuto) params.set('pp', this.data.bundle.plan.id);
      return "".concat(url, "?").concat(params);
    },
    answers: function answers() {
      var answers = {
        callback_url: this.callbackUrl,
        security_key: this.mnpOtp.security_key,
        ussd_pin_code: this.data.ussd.code
      };

      if ((this.isMnpBundle || this.isMnpAuto) && !this.isMnpOneStep) {
        answers.new_cust_random_number_ticket_hash = this.mnpRandomNumber.number_random_ticket_hash;
      }

      return {
        answers: answers
      };
    },
    isMnpBundle: function isMnpBundle() {
      return this.$route.name === 'mnp-bundle-verify';
    },
    isMnpAuto: function isMnpAuto() {
      return this.$route.name === 'mnp-auto-verify';
    },
    isMnpOneStep: function isMnpOneStep() {
      return this.data.bundle.bundle.campaign_mnp_type === 'one_step';
    },
    simProduct: function simProduct() {
      var _this3 = this;

      return this.data.bundle.bundle.inventories.find(function (inventory) {
        return inventory.product_id !== _this3.$route.params.id;
      });
    },
    packageInfo: function packageInfo() {
      return this.$store.state.postpaid["package"].record[0];
    },
    isMnpSharePlan: function isMnpSharePlan() {
      return this.$route.query.mobile_number !== undefined;
    },
    hasPackage: function hasPackage() {
      return this.$store.state.postpaid["package"].record !== undefined;
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      var shareplan = this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify';
      return (shareplan || this.isMnpOneStep) && skip;
    }
  },
  mounted: function mounted() {
    if (this.skipEkyc) {
      this.loading = false;
    } else {
      this.$route.query.hash ? this.fetchEkyc() : this.createEkyc();
    }
  },
  methods: {
    sleep: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    },
    computeDate: function computeDate(e, format) {
      var date = e.split(/[/-]/);

      switch (format) {
        case 'string':
          return "".concat(date[2]).concat(date[1]).concat(date[0]);

        default:
          return date;
      }
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
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var params, data, birthdate;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(_this4.data.ekyc.retry < 3)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return _this4.sleep(2000);

              case 4:
                _context.next = 6;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["FETCH_EKYC_STATUS"], _this4.$route.query.hash);

              case 6:
                if (_this4.ekycStatus.is_pass) {
                  _context.next = 8;
                  break;
                }

                throw new Error();

              case 8:
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Ekyc',
                  status: 'success',
                  productId: _this4.$route.params.id,
                  addressData: [_this4.ekycAnswers.first_name, _this4.ekycAnswers.last_name, _this4.ekycAnswers.email, _this4.ekycAnswers.home_address, _this4.ekycAnswers.home_district, _this4.ekycAnswers.home_subdistrict, _this4.ekycAnswers.home_province, _this4.ekycAnswers.home_zipcode, _this4.ekycAnswers.mobile_no, _this4.ekycAnswers.national_id]
                });

                if (!_this4.$route.query.mobile_number) {
                  _context.next = 21;
                  break;
                }

                params = qs__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
                  mobiles: _this4.$route.query.mobile_number
                });
                _context.next = 13;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CHECK_NUMBER"], params);

              case 13:
                data = _context.sent;
                data.record[0].bundle = {
                  custom_name: _this4.data.bundle.custom_name
                };
                _this4.status = data.record[0];
                birthdate = _this4.ekycAnswers.date_of_birth.split('/');
                _this4.verifyForm = {
                  id_number: _this4.ekycAnswers.national_id,
                  date_birth: birthdate[0],
                  month_birth: birthdate[1],
                  year_birth: birthdate[2]
                };
                _this4.packages = _this4.packageInfo;
                _context.next = 22;
                break;

              case 21:
                _this4.status = _this4.data;

              case 22:
                _this4.loading = false;
                _context.next = 35;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](0);
                _this4.data.ekyc.retry++;

                if (!(_this4.data.ekyc.retry > 2)) {
                  _context.next = 33;
                  break;
                }

                _this4.$store.commit(_store_mutations_type__WEBPACK_IMPORTED_MODULE_7__["SET_MNP_INFO"], {
                  status: false,
                  message: _this4.ekycStatus.message
                });

                _this4.trackAnalytics('verification_failed');

                _this4.$emit('route', 'result');

                return _context.abrupt("return");

              case 33:
                _context.next = 35;
                return _this4.fetchEkyc();

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 25]]);
      }))();
    },
    createEkyc: function createEkyc() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Ekyc',
                  status: 'verify',
                  productId: _this5.$route.params.id,
                  mobileNumber: _this5.data.otp.phoneNumber
                });
                _context2.next = 4;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_EKYC"], _this5.answers);

              case 4:
                window.location.href = _this5.newEkyc.form_url;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _this5.$router.push("/online-store/item/".concat(_this5.$route.params.id));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    checkInfo: function checkInfo() {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var dateOfBirth, dateOfExpiration, path, data, accs;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                dateOfBirth = _this6.formEkyc.date_of_birth;
                dateOfExpiration = _this6.formEkyc.date_of_expiration;
                path = _this6.isMnpBundle || _this6.isMnpAuto ? 'bundling/verify' : 'verify-personal-information';
                data = {
                  security_key: _this6.skipEkyc ? _this6.mnpOtp.security_key : _this6.ekycStatus.additional_data.security_key,
                  user_id: _this6.userId || 0,
                  mobile_number: _this6.formEkyc.mobile_no,
                  identity_id: _this6.formEkyc.national_id,
                  identity_type: 'I',
                  customer_fullname_thai: _this6.$i18n.locale === 'th' ? _this6.fullName : '',
                  customer_fullname_eng: _this6.$i18n.locale === 'en' ? _this6.fullName : '',
                  lang: _this6.$i18n.locale,
                  gender: _this6.formEkyc.gender === 'ชาย' ? '1' : '2',
                  mnp_type: _this6.mnpType,
                  birth_date: dateOfBirth ? _this6.computeDate(dateOfBirth, 'string') : '',
                  identity_expire_date: dateOfExpiration ? _this6.computeDate(dateOfExpiration, 'string') : '',
                  ussd_pin_code: _this6.skipEkyc ? _this6.data.ussd.code : _this6.ekycStatus.additional_data.ussd_pin_code,
                  product: {
                    product_id: _this6.productInfo.id,
                    inventory_id: _this6.inventoryId,
                    store_id: _this6.productInfo.store.id,
                    section: _this6.productInfo.store.section,
                    quantity: '1'
                  },
                  price_plan: {
                    id: _this6.mnpPackage.id,
                    name: _this6.mnpPackage.name,
                    description: _this6.mnpPackage.description,
                    code: _this6.mnpPackage.code,
                    sim_type: _this6.mnpPackage.sim_type,
                    price: _this6.mnpPackage.price,
                    recommended: _this6.mnpPackage.recommended,
                    proposition_nas_code: _this6.mnpPackage.proposition_nas_code,
                    campaign_code: _this6.mnpPackage.campaign_code
                  },
                  user_information: {
                    gender: _this6.formEkyc.gender === 'ชาย' ? '1' : '2',
                    thai_id: _this6.formEkyc.national_id,
                    title: _this6.formEkyc.prefix,
                    txt_title_other: _this6.formEkyc.txt_title_other,
                    first_name: _this6.formEkyc.first_name,
                    last_name: _this6.formEkyc.last_name,
                    email: _this6.formEkyc.email,
                    telephone: _this6.formEkyc.mobile_no,
                    thai_id_expire_day: dateOfExpiration ? _this6.computeDate(dateOfExpiration)[0].padStart(2, 0) : '',
                    thai_id_expire_month: dateOfExpiration ? _this6.computeDate(dateOfExpiration)[1].padStart(2, 0) : '',
                    thai_id_expire_year: dateOfExpiration ? _this6.computeDate(dateOfExpiration)[2].padStart(2, 0) : '',
                    swine: '',
                    birth_date: dateOfBirth,
                    idCardForm: _this6.formEkyc.idCardForm,
                    billingAddress: _this6.formEkyc.billingAddress
                  },
                  ekyc: {
                    id_card_picture: !_this6.skipEkyc && _this6.ekycStatus.image_front,
                    profile_picture: !_this6.skipEkyc && _this6.ekycStatus.image_liveness
                  }
                };

                if (_this6.isMnpBundle) {
                  data.cart_hash = localStorage.getItem('cart-id');
                  data.ekyc_hash = _this6.$route.query.hash;
                  data.new_cust_product_bundle_id = _this6.$route.params.bundle;
                  data.new_cust_product_nas_code_list = _this6.productInfo.bundles.find(function (bundle) {
                    return bundle.id === _this6.$route.params.bundle;
                  }).propo_code;
                  data.new_cust_random_number_ticket_hash = _this6.skipEkyc ? _this6.mnpRandomNumber.number_random_ticket_hash : _this6.ekycStatus.additional_data.new_cust_random_number_ticket_hash;
                  data.new_cust_product_bundle_ref_code = _this6.data.bundle.bundle.ref_code;
                  data.new_cust_product_id_list = _this6.productInfo.id;
                  data.new_cust_inventory_id = _this6.inventoryId;
                  data.new_cust_product_bundle_ref_code = _this6.productInfo.bundles.find(function (bundle) {
                    return bundle.id === _this6.$route.params.bundle;
                  }).ref_code;
                  data.new_cust_product_id_sim = _this6.simProduct.product_id;
                  data.new_cust_inventory_id_sim = _this6.simProduct.inventory_id;
                  data.campaign_mnp_type = 'share_plan';
                }

                if (_this6.isMnpAuto) {
                  data.cart_hash = localStorage.getItem('cart-id');
                  data.ekyc_hash = _this6.$route.query.hash;
                  data.new_cust_product_bundle_id = _this6.$route.params.bundle_id;
                  data.new_cust_product_nas_code_list = _this6.productInfo.bundles.find(function (bundle) {
                    return bundle.id === _this6.$route.params.bundle_id;
                  }).propo_code;
                  data.new_cust_random_number_ticket_hash = _this6.skipEkyc ? _this6.mnpRandomNumber.number_random_ticket_hash : _this6.ekycStatus.additional_data.new_cust_random_number_ticket_hash;
                  data.new_cust_product_id_list = _this6.productInfo.id;
                  data.new_cust_inventory_id = _this6.inventoryId;
                  data.new_cust_product_bundle_ref_code = _this6.productInfo.bundles.find(function (bundle) {
                    return bundle.id === _this6.$route.params.bundle_id;
                  }).ref_code;
                  data.campaign_mnp_type = 'share_plan';
                  data.is_mnp_auto = true;
                }

                if (_this6.isMnpOneStep) {
                  data.new_cust_product_code = _this6.inventory.sku;
                  data.campaign_mnp_type = 'one_step';

                  if (localStorage.getItem('iot-package')) {
                    data.meta = JSON.parse(localStorage.getItem('iot-package'));
                    data.product['meta'] = JSON.parse(localStorage.getItem('iot-package'));
                  }
                }

                if (_this6.isCampaignFreeDevice) {
                  if (data !== null && data !== void 0 && data.meta) {
                    data.meta.free_device = _this6.productInfo.config_free_device[_this6.$route.query.camptype];
                  } else if (data.product['meta']) {
                    data.product['meta'].free_device = _this6.productInfo.config_free_device[_this6.$route.query.camptype];
                  } else {
                    data.meta = {
                      free_device: _this6.productInfo.config_free_device[_this6.$route.query.camptype]
                    };
                    data.product['meta'] = {
                      free_device: _this6.productInfo.config_free_device[_this6.$route.query.camptype]
                    };
                  }
                }

                accs = Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["computeAddons"])(_this6.$route.query, _this6.productInfo);
                if (accs.length > 0) data.accessories = accs;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify personal information',
                  productId: _this6.$route.params.id,
                  mobileNumber: _this6.formEkyc.mobile_no
                });
                _context3.next = 14;
                return _this6.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["CHECK_MNP_INFO"], {
                  path: path,
                  data: data
                });

              case 14:
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify personal information success',
                  productId: _this6.$route.params.id,
                  mobileNumber: _this6.formEkyc.mobile_no
                });
                _context3.next = 17;
                return Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["updateEntPack"])(_this6.$route.query.ep, _this6.$route.query, _this6.productInfo, _this6.mnpInfo.cart_hash, {
                  id: _this6.inventoryId
                });

              case 17:
                _this6.trackAnalytics('verification_passed');

                _this6.$emit('route', 'result');

                _context3.next = 27;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](0);
                if (_context3.t0.message === 'err-ent-pack') _this6.data.entPack.error = true;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_8__["loggerAddon"])({
                  event: 'Verify MNP Sim only',
                  status: 'verify personal information fail',
                  productId: _this6.$route.params.id,
                  mobileNumber: _this6.formEkyc.mobile_no
                });

                _this6.trackAnalytics('verification_failed');

                _this6.$emit('route', 'result');

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 21]]);
      }))();
    },
    setCustomEkyc: function setCustomEkyc(data) {
      this.loading = true;
      this.formEkyc = data;
      this.checkInfo();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checking[data-v-580d8555] {\n  padding: 160px 0;\n}\n.checking .checking-icon svg[data-v-580d8555] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 50px;\n  -webkit-animation: loading-data-v-580d8555 2s linear infinite;\n          animation: loading-data-v-580d8555 2s linear infinite;\n  fill: #ff0000;\n}\n.checking .checking-label[data-v-580d8555] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@-webkit-keyframes loading-data-v-580d8555 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-580d8555 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-5d9a282b] {\n  margin-bottom: 8px;\n}\n.address-container[data-v-5d9a282b] {\n  text-align: left;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-580d8555] {\n  margin-top: 24px;\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-580d8555] {\n  font-size: 24px;\n  line-height: 24px;\n}\nform[data-v-580d8555] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n}\nform[disabled][data-v-580d8555] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-580d8555] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-580d8555] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-580d8555] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-580d8555] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-580d8555] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-5d9a282b] {\n  margin-top: 24px;\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.subtitle[data-v-5d9a282b] {\n  font-size: 24px;\n  line-height: 24px;\n}\nform[data-v-5d9a282b] {\n  display: grid;\n  grid-gap: 4px;\n  margin: 0 auto 16px;\n  max-width: 420px;\n  text-align: center;\n}\nform[disabled][data-v-5d9a282b] {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: saturate(0);\n}\nform.invalid-form .input[data-v-5d9a282b] input:invalid,\nform.invalid-form .datepicker.invalid[data-v-5d9a282b] input {\n  border-color: #ff0000;\n  color: #ff0000;\n}\nform label[data-v-5d9a282b] {\n  margin-top: 12px;\n  font-size: 24px;\n  line-height: 28px;\n}\nform button[data-v-5d9a282b] {\n  margin-top: 8px;\n  height: 40px;\n  padding: 0 16px;\n  min-width: 120px;\n  border-radius: 4px;\n}\nform .error[data-v-5d9a282b] {\n  margin: 8px 0;\n  color: #ff0000;\n  font-size: 22px;\n  line-height: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "title" }, [
      _vm._v(_vm._s(_vm.Locale.ekyc.title[_vm.$i18n.locale])),
    ]),
    _vm._v(" "),
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
        _vm._v(_vm._s(_vm.Locale.checking.label[_vm.$i18n.locale])),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true& ***!
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
    { staticClass: "ekyc-wrap" },
    [
      _c("mnp-checking", {
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
      !_vm.loading
        ? _c(
            "div",
            { staticClass: "address-container" },
            [
              _vm.hasPackage
                ? _c("priceplan-info", {
                    attrs: {
                      data: _vm.status,
                      packages: _vm.packages,
                      "verify-form": _vm.verifyForm,
                      isExisting: _vm.isMnpSharePlan,
                      bundle: "",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("address-element", {
                attrs: {
                  setCustomEkyc: _vm.setCustomEkyc,
                  ekycAnswer: _vm.ekycAnswers,
                  data: _vm.data,
                },
              }),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/mnp/verify/locale.json":
/*!***************************************************!*\
  !*** ./resources/js/pages/mnp/verify/locale.json ***!
  \***************************************************/
/*! exports provided: checklist, otp, ussd, ekyc, checking, result, address_next, agreement1, agreement2, agreement3, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"checklist\":{\"title\":{\"th\":\"เช็กความพร้อมก่อนย้ายมาทรู\",\"en\":\"Ready to move to us?\"},\"subtitle\":{\"th\":\"เบอร์ที่จะย้ายค่ายต้อง\",\"en\":\"Please check that your mobile number:\"},\"checklist1\":{\"th\":\"ไม่มียอดค้างชำระ\",\"en\":\"has no outstanding bill\"},\"checklist2\":{\"th\":\"ไม่ติดสัญญาณกับค่ายเดิม\",\"en\":\"is not under any contract\"}},\"otp\":{\"title\":{\"th\":\"เบอร์ที่ต้องการย้ายค่ายมาทรู\",\"en\":\"Number moving to TrueMove H\"},\"phone_number\":{\"th\":\"เบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Registered Phone Number\"},\"phone_number_placeholder\":{\"th\":\"กรอกเบอร์มือถือ\",\"en\":\"Enter your mobile number\"},\"fetch_otp\":{\"th\":\"ขอรหัส OTP\",\"en\":\"Request OTP\"},\"otp\":{\"th\":\"กรอกรหัส OTP\",\"en\":\"Enter the OTP that you received\"},\"otp_placeholder\":{\"th\":\"กรอกรหัส OTP\",\"en\":\"Enter the OTP code\"},\"request_otp_again\":{\"th\":\"ขอรหัสอีกครั้ง\",\"en\":\"Resend\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Submit\"}},\"ussd\":{\"mobile_number\":{\"th\":\"เบอร์ที่ต้องการย้ายค่ายมาทรู\",\"en\":\"Number moving to TrueMove H\"},\"title\":{\"th\":\"การขอรับ PIN Code\",\"en\":\"Get your PIN code\"},\"subtitle\":{\"th\":\"ผู้ให้บริการปัจจุบันของคุณจะส่งรหัสย้ายค่ายให้ทาง SMS จึงอาจใช้เวลาประมาณ 3-5 นาที\\nสำหรับลูกค้าชาวต่างชาติ กรุณาพิมพ์ SMS หมายเลขพาสปอร์ต แล้วส่งมาที่เบอร์ 444415\",\"en\":\"Your current carrier will send PIN code to you via SMS. This might take 3-5 minutes.\\nFor foreigner, send your passport number via SMS to 4444151\"},\"ussd\":{\"th\":\"กรอกรหัสย้ายค่ายที่ได้รับ\",\"en\":\"Enter PIN code sent to your mobile\"},\"ussd_placeholder\":{\"th\":\"รหัสย้ายค่าย 8 หลัก\",\"en\":\"8-digit PIN code\"},\"tnc\":{\"th\":\"ข้อกำหนดและเงื่อนไข\",\"en\":\"Term and Condition\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Term and Condition\"},\"move_number\":{\"th\":\"ดำเนินการย้ายค่ายมาทรู\",\"en\":\"Move my number to True\"}},\"ekyc\":{\"title\":{\"th\":\"ตรวจสอบการขอย้ายค่ายเบอร์เดิม\",\"en\":\"Check the privilege to move to True network\"},\"next\":{\"th\":\"ต่อไป\",\"en\":\"Next\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"next_trueshop\":{\"en\":\"Search TrueShop\",\"th\":\"ค้นหาทรูช้อป\"}},\"checking\":{\"label\":{\"th\":\"กำลังตรวจสอบ ...\",\"en\":\"Checking ...\"}},\"result\":{\"result_success\":{\"th\":\"คุณสามารถทำการขอย้ายค่ายเบอร์เดิมได้\",\"en\":\"You have the right to move to True network.\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID Number\"},\"passport\":{\"th\":\"หมายเลขพาสปอร์ต\",\"en\":\"Passport Number\"},\"result_status_success\":{\"th\":\"คุณสามารถซื้อเบอร์โทรศัพท์ที่ต้องการได้\",\"en\":\"You can choose to buy the phone number you want.\"},\"result_status_fail\":{\"th\":\"หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\",\"en\":\"If you have any questions, please contact Call center 1242\"},\"retry\":{\"th\":\"ตรวจสอบอีกครั้ง\",\"en\":\"Try Again\"}},\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"agreement1\":{\"th\":\"กรอกข้อมูลให้ครบถ้วน และกด \\\"ดำเนินการต่อ\\\" เพื่อบันทึก\",\"en\":\"Please complete the information. Click \\\"Next\\\" to save the information.\"},\"agreement2\":{\"th\":\"ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี\",\"en\":\"I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.\"},\"agreement3\":{\"th\":\"ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี\",\"en\":\"The company reserves the right to cancel the order and refund all cases.\"}}");

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-checking.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-checking.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mnp-checking.vue?vue&type=template&id=580d8555&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true&");
/* harmony import */ var _mnp_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mnp-checking.vue?vue&type=script&lang=js& */ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&");
/* harmony import */ var _mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _mnp_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "580d8555",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mnp/verify/mnp-checking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-checking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=style&index=1&id=580d8555&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_style_index_1_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-checking.vue?vue&type=template&id=580d8555&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-checking.vue?vue&type=template&id=580d8555&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_checking_vue_vue_type_template_id_580d8555_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ekyc.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ekyc.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true&");
/* harmony import */ var _mnp_ekyc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mnp-ekyc.vue?vue&type=script&lang=js& */ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&");
/* harmony import */ var _mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _mnp_ekyc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d9a282b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mnp/verify/mnp-ekyc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ekyc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=style&index=1&id=5d9a282b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_style_index_1_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-ekyc.vue?vue&type=template&id=5d9a282b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_ekyc_vue_vue_type_template_id_5d9a282b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=580d8555&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_580d8555_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/mnp/verify/style.scss?vue&type=style&index=0&id=5d9a282b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_5d9a282b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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