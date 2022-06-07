(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json", 1);
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'thaiid-form': _sections_thaiid_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['updateFormInfo', 'product', 'productInfo', 'isCampaignRedeem', 'isVlearn', 'isCampaignRedeemFreeDevice'],
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {
    next: function next(id, date, expDate, redeemCode) {
      var _arguments = arguments,
          _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var ekycData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ekycData = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : null;

                if (expDate) {
                  _this.updateFormInfo({
                    id: id,
                    date: date,
                    id_card_exp: expDate,
                    redeem_code: redeemCode
                  });
                } else if (_this.isVlearn && _this.isVlearn === true && ekycData) {
                  _this.updateFormInfo({
                    id: id,
                    date: date,
                    redeem_code: redeemCode,
                    ekyc_data: ekycData
                  });
                } else {
                  _this.updateFormInfo({
                    id: id,
                    date: date,
                    redeem_code: redeemCode
                  });
                }

              case 2:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json", 1);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    result: [Object],
    product: [Object]
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_3__
    };
  },
  computed: {
    thaiid: function thaiid() {
      if (!this.result.thaiid) return;
      return this.result.thaiid.substring(0, 3) + 'XXXXXX' + this.result.thaiid.substring(9, 13);
    },
    mobilenumber: function mobilenumber() {
      var e = this.result.mobilenumber;
      var regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/;
      return e.replace(regex, '$1-$2-$3');
    },
    isInstantSimPrepaid: function isInstantSimPrepaid() {
      return this.$route.name === 'online-store-instantsim-verify';
    },
    isNoEkyc: function isNoEkyc() {
      if (this.isDrluckyZodiac) return true;
      var isDrlucky = this.$route.name.includes('drlucky-verify');
      var noEkyc = localStorage.getItem('no_ekyc') === 'true';
      return isDrlucky && noEkyc;
    },
    isDrluckyZodiac: function isDrluckyZodiac() {
      return this.$route.name.includes('drlucky-zodiac-verify');
    },
    skipEkyc: function skipEkyc() {
      if (this.$route.name === 'online-store-lucky-9999-verify' && window.no_ekyc_sim_only) return true;
      if ((this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only) return (this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only;
      var skip = window.no_ekyc_device_bundle;
      return (this.product.product_type === 'device_bundle_new_customer' || this.product.product_type === 'vlearn') && skip;
    },
    isFnF: function isFnF() {
      return window.localStorage.getItem('sim_family_info') !== null;
    }
  },
  methods: {
    linkOutSearchTrueshop: function linkOutSearchTrueshop() {
      window.open('https://www3.truecorp.co.th/cm/shop', '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _checking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checking */ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result */ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json", 1);
/* harmony import */ var _info_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info-form */ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");









//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'checking-element': _checking__WEBPACK_IMPORTED_MODULE_9__["default"],
    'result-element': _result__WEBPACK_IMPORTED_MODULE_10__["default"],
    'info-form': _info_form__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    product: Object,
    pricePlans: Array,
    pricePlan: Object,
    isCampaignRedeem: Boolean,
    isCampaignRedeemFreeDevice: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_11__,
      page: 'checking',
      verifyData: {},
      verifyResult: {},
      ekycStatusRetry: 0,
      formInfoData: {}
    };
  },
  computed: {
    newEkyc: function newEkyc() {
      return this.$store.state.ekyc.newEkyc;
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      this.ekycStatus.answers && this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    },
    isVlearn: function isVlearn() {
      return this.product.product_type === 'vlearn';
    },
    isInstantSimPrepaid: function isInstantSimPrepaid() {
      return this.$route.name === 'online-store-instantsim-verify' && this.product.product_type === 'prepaid';
    },
    skipEkyc: function skipEkyc() {
      if (this.$route.name === 'online-store-lucky-9999-verify' && window.no_ekyc_sim_only) return true;
      if (window.localStorage.getItem('sim_family_info') !== null && (this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.is_f_and_f_remove_ekyc) return true;
      if (window.localStorage.getItem('sim_family_info') === null && (this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only) return true;
      var skip = window.no_ekyc_device_bundle;
      return (this.product.product_type === 'device_bundle_new_customer' || this.product.product_type === 'vlearn') && skip;
    }
  },
  mounted: function mounted() {
    var noEkyc = localStorage.getItem('no_ekyc') === 'true';
    var isDrluckyVerify = this.$route.name.includes('drlucky-verify');
    var isDrluckyZodiacVerify = this.$route.name === 'drlucky-zodiac-verify';
    var isDrluckyZodiacVerifyOffline = this.$route.name === 'drlucky-zodiac-verify-offline';

    if (noEkyc && isDrluckyVerify) {
      this.fetchVerify();
    } else if (isDrluckyZodiacVerify) {
      this.fetchVerify();
    } else if (isDrluckyZodiacVerifyOffline) {
      var zodiacForm = JSON.parse(localStorage.getItem('vhora-zodiac-form'));
      var zodiacPack = localStorage.getItem('truestore-berfuntong-zodiac-pack');
      zodiacForm.package_code = zodiacPack;
      zodiacForm.birthdate = this.convertDateOffline(this.$parent.noEkycCartForm.birth_date);
      localStorage.setItem('vhora-form', JSON.stringify(zodiacForm));
      this.$router.push('/offline-store/berfuntong/pre-validation');
    } else if (this.skipEkyc) {
      this.page = 'info-form';
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
    goTo: function goTo(page) {
      if (page === 'plan') {
        var query = Object.assign({}, this.$route.query);

        if (query.pp || query.hash) {
          delete query.pp;
          delete query.hash;
          this.$router.replace({
            query: query
          });
        }
      }

      this.$parent.goTo(page);
    },
    updatePrivilege: function updatePrivilege() {
      var _this = this;

      if (this.verifyResult.privilege_placeorder) {
        var key = 'privilege-placeorder';
        var privileges = JSON.parse(localStorage.getItem(key)) || [];
        if (!Array.isArray(privileges)) privileges = [];
        var privilege = privileges.filter(function (item) {
          return item.product_id !== _this.product.id;
        });

        if (this.verifyResult.privilege_placeorder[0]) {
          this.verifyResult.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000;
        }

        localStorage.setItem(key, JSON.stringify([].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.verifyResult.privilege_placeorder), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(privilege))));
      }
    },
    setFormatDataEkyc: function setFormatDataEkyc() {
      var tempContent = {};
      var dataEkyc = {
        channel: this.ekycStatus.channel,
        id_number: this.ekycAnswers.national_id,
        face_recog_cust_capture: this.ekycStatus.image_liveness,
        'face-recog-cust-certificate': this.ekycStatus.image_front,
        face_recog_cust_capture_filename: '',
        'face-recog-cust-certificate-filename': '',
        gender: this.ekycAnswers.gender
      };

      if (this.ekycStatus.channel === 'trueagent') {
        tempContent = {
          'temp-content-data': {
            FACE_RECOGNITION_STATUS: this.ekycStatus.face_recognition_status,
            IS_IDENTICAL: this.ekycStatus.is_identical,
            CONFIDENT_RATIO: this.ekycStatus.confident_raito,
            APPROVER: this.ekycStatus.approver,
            CUST_CERTIFICATE_LASER_ID: this.ekycStatus.cust_certificate_laser_id
          }
        };
      }

      ;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, dataEkyc), tempContent);
    },
    computeVerifyTime: function computeVerifyTime() {
      var dt = new Date();
      var year = dt.getFullYear();
      var month = dt.getMonth() + 1;
      month = month < 10 ? "0".concat(month) : month;
      var date = dt.getDate();
      date = date < 10 ? "0".concat(date) : date;
      var hours = dt.getHours();
      hours = hours < 10 ? "0".concat(hours) : hours;
      var mins = dt.getMinutes();
      mins = mins < 10 ? "0".concat(mins) : mins;
      var secs = dt.getSeconds();
      secs = secs < 10 ? "0".concat(secs) : secs;
      return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(mins, ":").concat(secs);
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
    createEkyc: function createEkyc() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var params;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                params = new URLSearchParams(location.search);
                params.set('pp', _this2.pricePlan.id);
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])({
                  event: 'Ekyc',
                  status: 'verify',
                  productId: _this2.$route.params.id,
                  matcode: _this2.$route.params.nas,
                  mobileNumber: _this2.$route.params.number
                });
                _context.next = 6;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_14__["CREATE_NEW_EKYC"], {
                  answers: {
                    callback_url: "".concat(location.origin).concat(_this2.$route.path, "?").concat(params)
                  }
                });

              case 6:
                window.location.href = _this2.newEkyc.form_url;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this2.goTo('plan');

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    fetchEkyc: function fetchEkyc() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var plan;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this3.page = 'checking';

                if (_this3.isInstantSimPrepaid) {
                  _context2.next = 7;
                  break;
                }

                plan = _this3.pricePlans.find(function (e) {
                  return e.id === _this3.$route.query.pp;
                });
                _this3.$parent.selectedPricePlan = plan;

                if (!(!_this3.$route.query.pp || !plan)) {
                  _context2.next = 7;
                  break;
                }

                throw new Error();

              case 7:
                if (!(_this3.ekycStatusRetry < 3)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return _this3.sleep(2000);

              case 10:
                _context2.next = 12;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_14__["FETCH_EKYC_STATUS"], _this3.$route.query.hash);

              case 12:
                if (_this3.ekycStatus.is_pass) {
                  _context2.next = 14;
                  break;
                }

                throw new Error();

              case 14:
                if (_this3.isInstantSimPrepaid) {
                  _this3.submitInstantSimPrepaid();
                } else if (_this3.isVlearn) {
                  _this3.page = 'vlearn';
                } else {
                  _this3.fetchVerify();
                }

                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])({
                  event: 'Ekyc',
                  status: 'success',
                  productId: _this3.$route.params.id,
                  matcode: _this3.$route.params.nas,
                  addressData: [_this3.ekycAnswers.first_name, _this3.ekycAnswers.last_name, _this3.ekycAnswers.email, _this3.ekycAnswers.home_address, _this3.ekycAnswers.home_district, _this3.ekycAnswers.home_subdistrict, _this3.ekycAnswers.home_province, _this3.ekycAnswers.home_zipcode, _this3.ekycAnswers.mobile_no, _this3.ekycAnswers.national_id]
                });
                _context2.next = 28;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                _this3.ekycStatusRetry++;

                if (!(_this3.ekycStatusRetry > 2)) {
                  _context2.next = 26;
                  break;
                }

                _this3.trackAnalytics('verification_failed');

                _this3.verifyResult = {
                  status: false,
                  thaiid: _this3.ekycAnswers.national_id,
                  message: _this3.ekycStatus.message,
                  ekyc: _this3.ekycStatus
                };
                _this3.page = 'result';
                return _context2.abrupt("return");

              case 26:
                _context2.next = 28;
                return _this3.fetchEkyc();

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 18]]);
      }))();
    },
    submitInstantSimPrepaid: function submitInstantSimPrepaid() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var result;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_14__["SUBMIT_INSTANT_SIM"], {
                  correlation_id: _this4.$route.query.correlation_id,
                  ekyc_hash: _this4.$route.query.hash
                });

              case 3:
                result = _context3.sent;
                _this4.verifyResult = {
                  status: result.is_pass,
                  message: result.message,
                  thaiid: result.id_number,
                  mobilenumber: result.subscriber_number,
                  ekyc: _this4.ekycStatus
                };
                _this4.page = 'result';
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                _this4.verifyResult = {
                  status: false,
                  message: _context3.t0.message,
                  ekyc: _this4.ekycStatus
                };
                _this4.page = 'result';

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    verifyVlearn: function verifyVlearn() {
      this.page = 'checking';
      this.fetchVerify();
    },
    fetchVerify: function fetchVerify() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var isDeviceBundle, id, cartid, noEkyc, thaiid, dateOfBirth, matcode, logData, selectedBundle, inventoryId, verifyType, dealerCode, propositionAmdoc, companyCode, vhoraForm, vhoraZodiacForm, propoAmdoc;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.page = 'checking';
                isDeviceBundle = _this5.product.product_type === 'device_bundle_new_customer';
                id = isDeviceBundle ? _this5.product.product_type : 'postpaid';
                cartid = window.localStorage.getItem('cart-id') || '';
                noEkyc = localStorage.getItem('no_ekyc') === 'true' && _this5.$route.name.includes('drlucky-verify');
                thaiid = noEkyc ? _this5.$parent.noEkycCartForm.thai_id : _this5.skipEkyc ? _this5.formInfoData.id : _this5.ekycAnswers.national_id;
                dateOfBirth = noEkyc ? _this5.$parent.noEkycCartForm.birth_date : _this5.skipEkyc ? _this5.formInfoData.date : _this5.ekycAnswers.date_of_birth;
                matcode = '';
                logData = {};
                selectedBundle = {};
                _this5.verifyData = {
                  cart_hash: cartid,
                  id_number: thaiid,
                  date_birth: dateOfBirth ? dateOfBirth.split('-')[0] : '',
                  month_birth: dateOfBirth ? dateOfBirth.split('-')[1] : '',
                  year_birth: dateOfBirth ? dateOfBirth.split('-')[2] : '',
                  product_id: _this5.product.id,
                  nas_code: _this5.$route.params.nas,
                  redeem_code: _this5.formInfoData.redeem_code,
                  source_type: _this5.$route.query.source_type
                };

                if (isDeviceBundle) {
                  _this5.verifyData.product_id_list = [_this5.product.id];
                  _this5.verifyData.product_bundle_id = [_this5.$route.params.bundle];
                  _this5.verifyData.product_nas_code_list = [_this5.$route.params.propo];
                  _this5.verifyData.inventory_id_list = [_this5.$route.params.inventory_id];

                  if (_this5.$route.query.paysmooth_token) {
                    _this5.verifyData['paysmooth-token'] = _this5.$route.query.paysmooth_token;
                  }

                  inventoryId = _this5.$route.params.inventory_id;
                  matcode = _this5.product.inventories.find(function (inventory) {
                    return inventory.id.toString() === inventoryId.toString();
                  }).sku;
                  selectedBundle = _this5.product.bundles.find(function (bundle) {
                    return bundle.id === _this5.$route.params.bundle;
                  });
                  logData = {
                    event: 'Verify New',
                    status: 'verify',
                    productId: _this5.product.id,
                    matcode: matcode,
                    mobileNumber: _this5.$route.params.number,
                    advancePayment: parseInt(selectedBundle.advance_payment)
                  };
                  Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])(logData);
                }

                if (_this5.product.product_type === 'postpaid' || _this5.product.product_type === 'sim') {
                  logData = {
                    event: 'Verify Sim only',
                    status: 'verify',
                    productId: _this5.product.id,
                    matcode: _this5.$route.params.nas,
                    mobileNumber: _this5.$route.params.number
                  };
                  Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])(logData);
                }

                verifyType = _store_actions_type__WEBPACK_IMPORTED_MODULE_14__["VERIFY"];
                dealerCode = '';
                propositionAmdoc = '';
                companyCode = '';

                if (_this5.$route.name.includes('drlucky-verify')) {
                  vhoraForm = window.localStorage.getItem('vhora-form');
                  vhoraForm = JSON.parse(vhoraForm);
                  _this5.verifyData = {
                    sim_type: 'postpaid',
                    id_card: thaiid,
                    shop_code: vhoraForm.dealerCode,
                    company_code: vhoraForm.companyCode,
                    proposition: vhoraForm.proposition_amdoc,
                    birth_date: dateOfBirth.replace(/\//g, '')
                  };
                  dealerCode = vhoraForm.dealerCode;
                  propositionAmdoc = vhoraForm.proposition_amdoc;
                  companyCode = vhoraForm.companyCode;
                  verifyType = _store_actions_type__WEBPACK_IMPORTED_MODULE_14__["VERIFY_SIM_OFFLINE"];
                }

                if (_this5.$route.name === 'drlucky-zodiac-verify') {
                  vhoraZodiacForm = window.localStorage.getItem('vhora-zodiac-form');
                  vhoraZodiacForm = JSON.parse(vhoraZodiacForm);
                  _this5.verifyData = {
                    sim_type: _this5.$route.query.sim_type || 'postpaid',
                    id_card: _this5.$parent.noEkycCartForm.thai_id,
                    shop_code: vhoraZodiacForm.dealerCode,
                    company_code: vhoraZodiacForm.companyCode,
                    proposition: vhoraZodiacForm.proposition_amdoc,
                    birth_date: _this5.$parent.noEkycCartForm.birth_date.replace(/\//g, '')
                  };
                  dealerCode = vhoraZodiacForm.dealerCode;
                  propositionAmdoc = vhoraZodiacForm.proposition_amdoc;
                  companyCode = vhoraZodiacForm.companyCode;
                  verifyType = _store_actions_type__WEBPACK_IMPORTED_MODULE_14__["VERIFY_SIM_OFFLINE"];
                }

                if ((_this5.product.product_type === 'sim' || _this5.product.product_type === 'postpaid' || _this5.isVlearn) && (window.no_ekyc_sim_only || window.is_f_and_f_remove_ekyc) && !_this5.$route.name.includes('drlucky-verify') && !_this5.$route.name.includes('drlucky-zodiac-verify')) {
                  companyCode = localStorage.getItem('company_code');
                  propoAmdoc = localStorage.getItem('proposition_amdoc');
                  _this5.verifyData = {
                    sim_type: 'postpaid',
                    id_card: _this5.formInfoData.id || _this5.ekycAnswers.national_id,
                    proposition: propoAmdoc,
                    birth_date: (_this5.formInfoData.date || _this5.ekycAnswers.date_of_birth).replace(/\//g, ''),
                    company_code: companyCode,
                    validateDopa: 'Y',
                    redeem_code: _this5.formInfoData.redeem_code
                  };

                  if (_this5.product.product_sim && _this5.product.product_sim.sim_type === 'prepaid') {
                    _this5.verifyData.sim_type = 'prepaid';
                  }

                  if (_this5.product.product_sim && _this5.product.product_sim.sim_source_type && _this5.$route.query.source_type) {
                    _this5.verifyData.sim_source_type = _this5.$route.query.source_type;
                  }

                  verifyType = _store_actions_type__WEBPACK_IMPORTED_MODULE_14__["SIM_ACTIVATION_VERIFY"];
                }

                _this5.$store.dispatch(verifyType, {
                  id: id,
                  data: _this5.verifyData,
                  tmvhAuth: _this5.$route.query.token
                }).then(function (result) {
                  var _result$result;

                  result.is_pass = result.is_pass || result.status_code === 200;
                  _this5.verifyResult = {
                    thaiid: thaiid,
                    message: result.message,
                    status: result.is_pass,
                    privilege_placeorder: result.privilege_placeorder,
                    ekyc: _this5.ekycStatus,
                    correlation_id: result === null || result === void 0 ? void 0 : (_result$result = result.result) === null || _result$result === void 0 ? void 0 : _result$result.correlationId,
                    dealer_code: result.dealer_code
                  };

                  if (result.is_pass) {
                    _this5.updatePrivilege();

                    logData.status = 'success';

                    if (isDeviceBundle || _this5.product.product_type === 'postpaid' || _this5.product.product_type === 'sim') {
                      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])(logData);
                    }

                    var _result = {
                      thai_id: thaiid,
                      birth_date: dateOfBirth,
                      verify_time: _this5.computeVerifyTime(),
                      ekyc: _this5.setFormatDataEkyc(),
                      correlation_id: _this5.verifyResult.correlation_id,
                      dealer_code: dealerCode || _this5.verifyResult.dealer_code,
                      proposition_amdoc: propositionAmdoc,
                      company_code: companyCode
                    };

                    if (_this5.isVlearn && thaiid && _this5.formInfoData.ekyc_data) {
                      _result.ekyc.id_number = thaiid;
                      _result.ekyc.vlearn = _this5.formInfoData.ekyc_data.temp.vlearn;
                      _result.ekyc.vlearn_filename = _this5.formInfoData.ekyc_data.filename.vlearn;
                    } else {
                      _this5.trackAnalytics('verification_passed');
                    }

                    _this5.$parent.updatePostpaidResult(_result);

                    localStorage.setItem('no_ekyc', 'true');
                  } else {
                    logData.status = 'fail';

                    if (isDeviceBundle || _this5.product.product_type === 'postpaid' || _this5.product.product_type === 'sim') {
                      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])(logData);
                    }
                  }

                  _this5.page = 'result';
                })["catch"](function (e) {
                  if (e.status_code !== 200) {
                    e.is_pass = false;
                    e.message = e.message || {
                      th: 'ขออภัยในความไม่สะดวก คุณไม่สามารถลงทะเบียนใช้งานได้ กรุณาติดต่อเคาน์เตอร์บริการ',
                      en: 'Sorry, the system cannot process your request at the moment.'
                    };
                  }

                  if (e && e.message && e.is_pass === false) {
                    _this5.verifyResult = {
                      message: e.message,
                      status: e.is_pass,
                      thaiid: _this5.verifyData.id_number,
                      ekyc: _this5.ekycStatus
                    };
                    logData.status = 'fail';
                    Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])(logData);
                    if (!_this5.isVlearn) _this5.trackAnalytics('verification_failed');
                    _this5.page = 'result';
                  } else {
                    _this5.goTo('plan');
                  }
                });

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    updateFormInfo: function updateFormInfo(data) {
      this.formInfoData = data;
      this.fetchVerify();
    },
    convertDateOffline: function convertDateOffline(birthDate) {
      var newbirthDate = birthDate.split('/');
      return newbirthDate[0] + newbirthDate[1] + (Number(newbirthDate[2]) + 543 + '');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checking-container[data-v-ded7117a] {\n  padding: 160px 24px;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  margin: auto 12px;\n}\n.checking-container .checking-icon svg[data-v-ded7117a] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 50px;\n  -webkit-animation: loading-data-v-ded7117a 2s linear infinite;\n          animation: loading-data-v-ded7117a 2s linear infinite;\n  fill: #ff0000;\n}\n.checking-container .checking-label[data-v-ded7117a] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@-webkit-keyframes loading-data-v-ded7117a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-ded7117a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-57be1f74] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  margin: auto 12px;\n  padding: 76px 24px 50px 24px;\n}\n.result-container .icon[data-v-57be1f74] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-57be1f74] {\n  fill: #fff;\n}\n.result-container .icon.success[data-v-57be1f74] {\n  background-color: #54c74c;\n  box-shadow: 1px 1px 0 #1f9716;\n}\n.result-container .icon.failed[data-v-57be1f74] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .result-title[data-v-57be1f74] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  max-width: 600px;\n}\n.result-container .result-title.success[data-v-57be1f74] {\n  color: #e4a20f;\n}\n.result-container .result-title.failed[data-v-57be1f74] {\n  color: #ff0000;\n}\n.result-container .privilege-container[data-v-57be1f74] {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: center;\n  margin: 15px auto;\n}\n.result-container .privilege-container .privilege-label[data-v-57be1f74] {\n  color: #4a4a4a;\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 4px;\n}\n.result-container .privilege-container .privilege-label.instant-sim[data-v-57be1f74] {\n  margin-top: 8px;\n}\n.result-container .privilege-container .privilege-items[data-v-57be1f74] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #000;\n}\n.result-container .result-message[data-v-57be1f74] {\n  margin-top: 16px;\n  font-size: 24px;\n  line-height: 28px;\n  max-width: 620px;\n  text-align: center;\n  color: #4a4a4a;\n}\n.result-container .result-message span[data-v-57be1f74] {\n  font-family: \"TrueBold\";\n}\n.result-container .result-button-container[data-v-57be1f74] {\n  margin-top: 44px;\n  display: flex;\n}\n.result-container .result-button-container .button[data-v-57be1f74] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-57be1f74] {\n  background-color: #666;\n}\n.result-container .result-button-container .button[data-v-57be1f74]:nth-child(2) {\n  margin-left: 8px;\n}\n@media screen and (max-width: 860px) {\n.result-container .result-button-container[data-v-57be1f74] {\n    flex-direction: column;\n}\n.result-container .result-button-container .button[data-v-57be1f74]:nth-child(2) {\n    margin-top: 8px;\n    margin-left: 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".error-container[data-v-8eb7babc] {\n  margin: 0 12px 16px;\n}\n.verify-container[data-v-8eb7babc] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  margin: auto 12px;\n}\n.verify-container .title[data-v-8eb7babc] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  margin: 24px 0 16px 0;\n}\n.verify-container .subtitle[data-v-8eb7babc] {\n  margin-bottom: 24px;\n  line-height: 24px;\n}\n.verify-container .form[data-v-8eb7babc] {\n  max-width: 600px;\n  margin: auto;\n}\n.verify-container .form[data-v-8eb7babc] .input input,\n.verify-container .form[data-v-8eb7babc] .select input {\n  background-color: #fff;\n}\n.verify-container .form[data-v-8eb7babc].invalid-form .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.verify-container .form[data-v-8eb7babc] .input input::-moz-placeholder {\n  color: #b2b2b2;\n}\n.verify-container .form[data-v-8eb7babc] .input input::placeholder {\n  color: #b2b2b2;\n}\n.verify-container .form[data-v-8eb7babc] .birthday-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 8px;\n}\n.verify-container .input_container.text[data-v-8eb7babc] {\n  text-align: left;\n  font-size: 20px;\n  margin-bottom: 16px;\n}\n.verify-container .input_container.text label[data-v-8eb7babc] {\n  width: 100%;\n  min-width: 100%;\n  text-align: left;\n  margin-right: 0;\n  margin-bottom: 4px;\n  font-weight: 500;\n}\n.verify-container .input_container.text .input[data-v-8eb7babc] {\n  flex: 1;\n}\n.verify-container .input_container.text .required[data-v-8eb7babc] {\n  color: #fc5c65;\n  font-weight: 600;\n  font-size: 24px;\n}\n.verify-container .verify-button-container[data-v-8eb7babc] {\n  display: grid;\n  grid-gap: 8px 20px;\n  max-width: 420px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  margin: 24px auto 0 auto;\n}\n.verify-container .verify-button-container .button[data-v-8eb7babc] {\n  background-color: #ff0000;\n}\n.verify-container .verify-button-container .button.cancel[data-v-8eb7babc] {\n  background-color: #666;\n}\n.verify-container .verify-button-container .button[disabled][data-v-8eb7babc] {\n  pointer-events: none;\n  background-color: #666;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "checking-container" }, [
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
    _c("div", { staticClass: "verify-container checking-label" }, [
      _vm._v(_vm._s(_vm.Locale.checking[_vm.$i18n.locale])),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea& ***!
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
    [
      _c("thaiid-form", {
        attrs: {
          next: _vm.next,
          product: _vm.product,
          productInfo: _vm.productInfo,
          isCampaignRedeem: _vm.isCampaignRedeem,
          isVlearn: _vm.isVlearn,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "result-container" },
    [
      _vm.result.status
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
      _vm.result.status
        ? _c("div", { staticClass: "result-title success" }, [
            _vm._v(_vm._s(_vm.Locale.result_success[_vm.$i18n.locale])),
          ])
        : [
            _vm.isDrluckyZodiac
              ? _c("div", { staticClass: "result-title failed" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.result.message[_vm.$i18n.locale]) +
                      "\n    "
                  ),
                ])
              : _c("div", {
                  staticClass: "result-title failed",
                  domProps: {
                    innerHTML: _vm._s(_vm.result.message[_vm.$i18n.locale]),
                  },
                }),
          ],
      _vm._v(" "),
      _vm.thaiid
        ? _c(
            "div",
            { staticClass: "privilege-container" },
            [
              _c("div", { staticClass: "privilege-label" }, [
                _vm._v(_vm._s(_vm.Locale.id_card_number[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "privilege-items" }, [
                _c("div", { staticClass: "privilege-item" }, [
                  _vm._v(_vm._s(_vm.thaiid)),
                ]),
              ]),
              _vm._v(" "),
              _vm.isInstantSimPrepaid && _vm.mobilenumber
                ? [
                    _c("div", { staticClass: "privilege-label instant-sim" }, [
                      _vm._v(
                        _vm._s(_vm.Locale.mobile_number[_vm.$i18n.locale])
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "privilege-items" }, [
                      _c("div", { staticClass: "privilege-item" }, [
                        _vm._v(_vm._s(_vm.mobilenumber)),
                      ]),
                    ]),
                  ]
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isInstantSimPrepaid
        ? [
            _vm.result.status
              ? _c("div", { staticClass: "result-message" }, [
                  _vm._v(
                    _vm._s(_vm.Locale.result_status_success[_vm.$i18n.locale])
                  ),
                ])
              : _c("div", { staticClass: "result-message" }, [
                  _vm._v(
                    _vm._s(_vm.Locale.result_status_fail[_vm.$i18n.locale])
                  ),
                ]),
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "result-button-container" },
        [
          _vm.result.status
            ? [
                _vm.isInstantSimPrepaid
                  ? _c(
                      "router-link",
                      { attrs: { to: "/online-store" } },
                      [
                        _c("button-element", { staticClass: "button next" }, [
                          _vm._v(
                            _vm._s(_vm.Locale.back_homepage[_vm.$i18n.locale])
                          ),
                        ]),
                      ],
                      1
                    )
                  : _c(
                      "button-element",
                      {
                        staticClass: "button next",
                        attrs: { id: "add_package_to_cart" },
                        on: {
                          click: function ($event) {
                            return _vm.$parent.goTo("address")
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
                    ),
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.result.status && _vm.result.ekyc.is_pass
            ? [
                !_vm.isFnF
                  ? _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            _vm.$route.name === "drlucky-verify"
                              ? "/online-store/berfuntong/select"
                              : "/online-store/item/" + _vm.$route.params.id,
                        },
                      },
                      [
                        _c("button-element", { staticClass: "button back" }, [
                          _vm._v(
                            _vm._s(_vm.Locale.back[_vm.$i18n.locale]) +
                              "\n      "
                          ),
                        ]),
                      ],
                      1
                    )
                  : _c(
                      "button-element",
                      {
                        staticClass: "button back",
                        on: {
                          click: function ($event) {
                            return _vm.$parent.goTo("plan")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Locale.back[_vm.$i18n.locale]) + "\n      "
                        ),
                      ]
                    ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isNoEkyc && !_vm.result.correlation_id
            ? [
                _c(
                  "button-element",
                  {
                    staticClass: "button back",
                    on: {
                      click: function ($event) {
                        return _vm.$parent.goTo("address")
                      },
                    },
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.Locale.back[_vm.$i18n.locale]) + "\n      "
                    ),
                  ]
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.result.ekyc.is_pass &&
          !_vm.isNoEkyc &&
          !(_vm.skipEkyc && _vm.result.status)
            ? [
                _vm.isFnF
                  ? [
                      _c(
                        "button-element",
                        {
                          staticClass: "button next",
                          on: {
                            click: function ($event) {
                              return _vm.$parent.goTo("plan")
                            },
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.Locale.retry[_vm.$i18n.locale]) +
                              "\n        "
                          ),
                        ]
                      ),
                    ]
                  : [
                      _c(
                        "button-element",
                        {
                          staticClass: "button next",
                          on: {
                            click: function ($event) {
                              _vm.skipEkyc
                                ? (_vm.$parent.page = "info-form")
                                : _vm.$parent.fetchEkyc()
                            },
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.Locale.retry[_vm.$i18n.locale]) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                _vm._v(" "),
                _c(
                  "button-element",
                  {
                    staticClass: "button next",
                    on: {
                      click: function ($event) {
                        return _vm.linkOutSearchTrueshop()
                      },
                    },
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.Locale.next_trueshop[_vm.$i18n.locale]) +
                        "\n      "
                    ),
                  ]
                ),
              ]
            : _vm._e(),
        ],
        2
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _vm.page === "checking" ? _c("checking-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "result"
        ? _c("result-element", {
            attrs: { result: _vm.verifyResult, product: _vm.product },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.page === "info-form"
        ? _c("info-form", {
            attrs: {
              updateFormInfo: _vm.updateFormInfo,
              product: _vm.product.product_type,
              productInfo: _vm.product,
              isCampaignRedeem: _vm.isCampaignRedeem,
              isCampaignRedeemFreeDevice: _vm.isCampaignRedeemFreeDevice,
              isVlearn: _vm.isVlearn,
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/checking.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checking.vue?vue&type=template&id=ded7117a&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true&");
/* harmony import */ var _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ded7117a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/postpaid/checking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=style&index=0&id=ded7117a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_ded7117a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=template&id=ded7117a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/checking.vue?vue&type=template&id=ded7117a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_ded7117a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-form.vue?vue&type=template&id=7a58adea& */ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea&");
/* harmony import */ var _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-form.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/postpaid/info-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=template&id=7a58adea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/info-form.vue?vue&type=template&id=7a58adea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_7a58adea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/locale.json":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/locale.json ***!
  \***********************************************************************/
/*! exports provided: verify_title, verify_subtitle, cancel, verify, check, result_success, id_card_number, result_status_success, result_status_fail, next, retry, back, per_month, plan_select, plan_selected, choose_package_title, checking, next_trueshop, back_homepage, mobile_number, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"verify_title\":{\"th\":\"ตรวจสอบสิทธิ์การซื้อเบอร์บุคคลธรรมดา\",\"en\":\"Check the privilege to buy SIM for individual type\"},\"verify_subtitle\":{\"th\":\"กรุณากรอกข้อมูลเพื่อตรวจสอบการรับสิทธิ์\",\"en\":\"Please fill out the information to check eligibility.\"},\"cancel\":{\"th\":\"กลับไปหน้าเลือกเบอร์\",\"en\":\"Cancel\"},\"verify\":{\"th\":\"ตรวจสอบสิทธิ์\",\"en\":\"Verify\"},\"check\":{\"th\":\"ตรวจสอบสิทธิ์\",\"en\":\"Check Eligibility\"},\"result_success\":{\"th\":\"ตรวจสอบสิิทธิ์เรียบร้อย\",\"en\":\"Verification Passed\"},\"id_card_number\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"ID card number\"},\"result_status_success\":{\"th\":\"คุณสามารถซื้อเบอร์โทรศัพท์ที่ต้องการได้\",\"en\":\"You can choose to buy the phone number you want.\"},\"result_status_fail\":{\"th\":\"หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\",\"en\":\"If you have any questions, please contact Call center 1242\"},\"next\":{\"th\":\"ต่อไป\",\"en\":\"Next\"},\"retry\":{\"th\":\"ตรวจสอบอีกครั้ง\",\"en\":\"Try Again\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"per_month\":{\"th\":\"รายเดือน\",\"en\":\"per month\"},\"plan_select\":{\"th\":\"เลือก\",\"en\":\"Select\"},\"plan_selected\":{\"th\":\"สินค้าที่เลือก\",\"en\":\"Selected\"},\"choose_package_title\":{\"th\":\"เลือกแพ็กเกจที่ต้องการ\",\"en\":\"Choose the package\"},\"checking\":{\"en\":\"Checking ...\",\"th\":\"กำลังตรวจสอบ ...\"},\"next_trueshop\":{\"en\":\"Search TrueShop\",\"th\":\"ค้นหาทรูช้อป\"},\"back_homepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"mobile_number\":{\"th\":\"หมายเลขโทรศัพท์\",\"en\":\"Mobile Number\"}}");

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/result.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=57be1f74&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57be1f74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/postpaid/result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=style&index=0&id=57be1f74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_57be1f74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=template&id=57be1f74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/result.vue?vue&type=template&id=57be1f74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_57be1f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/verify.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=8eb7babc&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true&");
/* harmony import */ var _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8eb7babc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/postpaid/verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=style&index=0&id=8eb7babc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_style_index_0_id_8eb7babc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=template&id=8eb7babc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/postpaid/verify.vue?vue&type=template&id=8eb7babc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_8eb7babc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);