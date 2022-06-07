(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/video-player.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      type: String,
      "default": function _default() {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      type: ''
    };
  },
  methods: {
    open: function open(type) {
      this.type = type;
      this.$refs.dialog.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog */ "./resources/js/pages/drlucky/home/dialog.vue");
/* harmony import */ var _dropdown_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown.json */ "./resources/js/pages/drlucky/home/dropdown.json");
var _dropdown_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dropdown.json */ "./resources/js/pages/drlucky/home/dropdown.json", 1);
/* harmony import */ var _components_video_player_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/video-player.vue */ "./resources/js/components/video-player.vue");
/* harmony import */ var _card_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card.vue */ "./resources/js/pages/drlucky/home/card.vue");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_14__);








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'dialog-element': _dialog__WEBPACK_IMPORTED_MODULE_8__["default"],
    'video-player': _components_video_player_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    'card': _card_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_12__["Datetime"]
  },
  data: function data() {
    return {
      dropdown: _dropdown_json__WEBPACK_IMPORTED_MODULE_9__,
      loaded: false,
      form: {
        birthdate: '',
        birthtime: '',
        timezone: '+0700',
        province: 'กรุงเทพฯ',
        flag_unknow_time: true
      },
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      valid: {
        birthdate: true,
        birthtime: true
      },
      error: false,
      loading: false,
      cebirthdate: ''
    };
  },
  computed: {
    vhoraVerify: function vhoraVerify() {
      return this.$store.state.vhora.vhoraVerify;
    },
    showTab: function showTab() {
      var _shopConfig$config, _window$berfuntong;

      var shopConfig = JSON.parse(localStorage.getItem('vhora-offline-shop'));
      var isShopDisableLowTier = (shopConfig === null || shopConfig === void 0 ? void 0 : (_shopConfig$config = shopConfig.config) === null || _shopConfig$config === void 0 ? void 0 : _shopConfig$config.low_tier_disable) && this.isOffline;
      var LowTierEnable = (_window$berfuntong = window.berfuntong) === null || _window$berfuntong === void 0 ? void 0 : _window$berfuntong.LOWTIER;
      return LowTierEnable && !isShopDisableLowTier;
    },
    birthdate: function birthdate() {
      var options = {
        calendar: 'buddhist',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var d = new Date(this.date.year, this.date.month, this.date.day + 1);
      return d.toLocaleDateString('th', options);
    },
    birthtime: function birthtime() {
      if (!this.form.birthtime) return '06:18';
      var options = {
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(this.form.birthtime).toLocaleTimeString('th', options);
    },
    currentYear: function currentYear() {
      return new Date().getFullYear();
    },
    years: function years() {
      var years = [];

      for (var year = this.currentYear; year > 1899; year--) {
        years.push(year);
      }

      return years;
    },
    months: function months() {
      return ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    },
    days: function days() {
      var total = new Date(this.date.year, this.date.month + 1, 0).getDate();
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Array(total).keys());
    },
    timezoneText: function timezoneText() {
      var _this = this;

      return this.dropdown.timezones.find(function (e) {
        return e.value === _this.form.timezone;
      }).text;
    },
    tabUrl: function tabUrl() {
      return "/".concat(this.isOffline ? 'offline-store' : 'online-store', "/berfuntong-zodiac");
    },
    isSelectPage: function isSelectPage() {
      return this.$route.path.includes('/berfuntong/select');
    },
    isOffline: function isOffline() {
      return this.$route.path.includes('offline-store');
    }
  },
  watch: {
    birthdate: function birthdate() {
      var optionsCE = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var nd = new Date(this.date.year, this.date.month, this.date.day + 1);
      this.cebirthdate = nd.toLocaleDateString('en-GB', optionsCE);
    },
    'date.day': function dateDay() {
      sessionStorage.setItem('previousSelectedDay', this.date.day);
    },
    'date.month': function dateMonth() {
      sessionStorage.setItem('previousSelectedMonth', this.date.month);
      if (this.date.day <= this.days.length) return;
      this.date.day = 0;
    },
    'date.year': function dateYear() {
      sessionStorage.setItem('previousSelectedYear', this.date.year);
      if (this.date.day <= this.days.length) return;
      this.date.day = 0;
    },
    'form.flag_unknow_time': function formFlag_unknow_time(e) {
      if (e) {
        sessionStorage.setItem('timePopupIsOpen', false);
        this.form.birthtime = '';
        this.form.timezone = '+0700';
        this.form.province = 'กรุงเทพฯ';
      } else {
        this.$refs.datetime.isOpen = true;
        sessionStorage.setItem('timePopupIsOpen', true);
      }
    },
    'form.birthtime': function formBirthtime() {
      sessionStorage.setItem('previousSelectedBirthTime', this.form.birthtime);
    },
    'form.timezone': function formTimezone() {
      sessionStorage.setItem('previousSelectedTimezone', this.form.timezone);
    },
    'form.province': function formProvince() {
      sessionStorage.setItem('previousSelectedProvince', this.form.province);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      var _shopConfig$config2, shopConfig, isShopDisableHighTier, day, month, year, timePopupIsOpen, birthtime, timezone, province;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                _this2.date.year = _this2.currentYear;
                _this2.loaded = true;

                _this2.$emit('loading', false);

                vue_datetime__WEBPACK_IMPORTED_MODULE_12__["Datetime"].methods.cancel = _this2.onDatetimeCancel;
                shopConfig = JSON.parse(localStorage.getItem('vhora-offline-shop'));
                isShopDisableHighTier = shopConfig === null || shopConfig === void 0 ? void 0 : (_shopConfig$config2 = shopConfig.config) === null || _shopConfig$config2 === void 0 ? void 0 : _shopConfig$config2.high_tier_disable;
                day = sessionStorage.getItem('previousSelectedDay');
                month = sessionStorage.getItem('previousSelectedMonth');
                year = sessionStorage.getItem('previousSelectedYear');

                if (day || month || year) {
                  _this2.date.day = day ? parseInt(day) : _this2.date.day;
                  _this2.date.month = month ? parseInt(month) : _this2.date.month;
                  _this2.date.year = year ? parseInt(year) : _this2.date.year;
                }

                timePopupIsOpen = JSON.parse(sessionStorage.getItem('timePopupIsOpen'));

                if (timePopupIsOpen) {
                  _this2.form.flag_unknow_time = false;
                  birthtime = sessionStorage.getItem('previousSelectedBirthTime');
                  timezone = sessionStorage.getItem('previousSelectedTimezone');
                  province = sessionStorage.getItem('previousSelectedProvince');

                  if (birthtime || timezone || province) {
                    _this2.form.birthtime = birthtime ? birthtime : _this2.form.birthtime;
                    _this2.form.timezone = timezone ? timezone : _this2.form.timezone;
                    _this2.form.province = province ? province : _this2.form.province;
                  }
                }

                if (isShopDisableHighTier && _this2.isOffline) {
                  _this2.$router.push(_this2.tabUrl);
                }
              } catch (e) {
                console.log('e', e);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onDatetimeCancel: function onDatetimeCancel() {
      this.$refs.datetime.close();
      this.form.flag_unknow_time = !this.form.birthtime;
    },
    trackAnalyticsVerify: function trackAnalyticsVerify() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'drluck_event',
        event_category: 'dr_luck_sim',
        event_action: 'confirm_birthdate_name',
        event_label: 'ค้นหาเบอร์ฟันธง',
        ecommerce: {
          click: {
            actionField: {
              list: 'Dr Luck numbers'
            },
            products: [{
              name: 'berfuntong',
              id: '',
              price: '',
              category: 'SIM',
              variant: 'Postpaid',
              dimension6: '',
              dimension7: '',
              dimension9: 'Postpaid SIM',
              dimension14: '',
              dimension17: this.birthdate,
              dimension18: this.birthtime,
              dimension19: this.form.timezone
            }]
          }
        }
      });
    },
    trackAnalyticsTnc: function trackAnalyticsTnc() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event_category: 'dr_luck_sim',
        event_action: 'view_terms_policy',
        event_label: 'นโยบายคุ้มครองข้อมูลส่วนบุคคล'
      });
    },
    openTncDialog: function openTncDialog() {
      this.trackAnalyticsTnc();
      this.$refs.dialog.open('tnc');
    },
    verify: function verify() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this3.loading = true;
                _this3.error = false;
                _this3.form.birthdate = _this3.cebirthdate;
                _this3.valid.birthtime = _this3.form.flag_unknow_time ? true : _this3.birthtime;

                if (_this3.valid.birthtime) {
                  _context2.next = 7;
                  break;
                }

                throw new Error('invalid-form');

              case 7:
                _this3.trackAnalyticsVerify();

                data = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.form), {}, {
                  birthdate: _this3.form.birthdate.replace(/\//g, ''),
                  birthtime: _this3.birthtime,
                  flag_unknow_time: _this3.form.flag_unknow_time,
                  is_thailand: _this3.form.timezone === '+0700'
                });
                if (data.timezone !== '+0700') delete data.province;
                _context2.next = 12;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_13__["VERIFY_VHORA"], data);

              case 12:
                window.localStorage.setItem('truestore-berfuntong-ctoken', _this3.vhoraVerify.data.ctoken);
                window.localStorage.setItem('truestore-berfuntong-refcode', _this3.vhoraVerify.data.ref_code);
                window.localStorage.setItem('truestore-berfuntong-form', JSON.stringify(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.form), {}, {
                  birthtime: _this3.birthtime
                })));
                _this3.loading = false;

                if (_this3.$route.name === 'drlucky-select' || _this3.$route.name === 'drlucky-select-offline') {
                  window.location.reload();
                } else {
                  _this3.$router.push({
                    name: 'drlucky-select' + (_this3.isOffline ? '-offline' : '')
                  });
                }

                _context2.next = 31;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                window.localStorage.removeItem('truestore-berfuntong-refcode');
                window.localStorage.removeItem('truestore-berfuntong-ctoken');
                window.localStorage.removeItem('truestore-berfuntong-form');
                _context2.t1 = _context2.t0.message;
                _context2.next = _context2.t1 === 'invalid-form' ? 27 : _context2.t1 === 'otp-failed' ? 27 : 29;
                break;

              case 27:
                _this3.error = 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ!';
                return _context2.abrupt("break", 30);

              case 29:
                _this3.error = _context2.t0.errors.message[_this3.$i18n.locale];

              case 30:
                _this3.loading = false;

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }))();
    },
    cleanup: function cleanup() {
      this.form.birthdate = '';
      this.form.birthtime = '';
      this.form.timezone = '+0700';
      this.form.province = 'กรุงเทพฯ';
      this.form.flag_unknow_time = true;
      this.date.day = 0;
      this.date.month = 0;
      this.valid.birthdate = true, this.valid.birthdate = true;
      this.date.year = this.currentYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video[data-v-76868284] {\n  position: relative;\n  padding-bottom: 56.25%;\n}\niframe[data-v-76868284] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dialog-container[data-v-0543d5aa] {\n  max-width: 320px;\n  padding: 48px 0;\n  margin: auto;\n  text-align: center;\n  display: grid;\n  grid-gap: 24px;\n}\n.dialog-container .title[data-v-0543d5aa] {\n  font-family: \"TrueBold\";\n  color: #424242;\n  font-size: 24px;\n}\n.dialog-container button[data-v-0543d5aa] {\n  height: 50px;\n  background-color: #E63129;\n  border-radius: 6px;\n  cursor: pointer;\n  border: none;\n  color: #fff;\n  padding: 0 32px;\n  margin-top: 24px;\n  font-family: \"TrueBold\";\n  font-size: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-0f4019f2]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.container[data-v-0f4019f2] {\n  width: 100%;\n  max-width: 1199px;\n  margin: auto;\n}\n.container .player[data-v-0f4019f2] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 1.15fr 1fr;\n  grid-gap: 4px 7px;\n  margin: 16px auto;\n}\n.container .card[data-v-0f4019f2] {\n  background: #ffffff;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n.container .card .card-header-text[data-v-0f4019f2] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 36px;\n  text-align: center;\n}\n.container .card .card-header-text span[data-v-0f4019f2] {\n  color: #e62626;\n}\n.container .card .card-inner-content[data-v-0f4019f2] {\n  padding: 0px 50px;\n}\n.container .card .card-inner-content .card-inner-content-container[data-v-0f4019f2] {\n  display: flex;\n  align-items: center;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-light[data-v-0f4019f2] {\n  font-family: \"TrueLight\";\n  color: #404040;\n  margin: 0;\n  font-size: 24px;\n  line-height: 22px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-bold[data-v-0f4019f2] {\n  font-family: \"TrueBold\";\n  color: #000000;\n  margin: 0;\n  font-size: 24px;\n  line-height: 22px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-number[data-v-0f4019f2] {\n  font-family: \"TrueBold\";\n  font-size: 48px;\n  color: #e62627;\n}\n.container .card .card-inner-content .card-inner-content-container .horizontal-divider[data-v-0f4019f2] {\n  width: 40px;\n  height: 0px;\n  border: 1px solid #e62627;\n  transform: rotate(90deg);\n  margin-left: -10px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-description[data-v-0f4019f2] {\n  margin-left: -10px;\n}\n.container .verify-container[data-v-0f4019f2] {\n  background: #f7f7f7;\n}\n.container .verify-container .verify-header-container[data-v-0f4019f2] {\n  background: #fdfdff;\n  grid-template-columns: 1fr 1.6fr;\n  justify-content: space-between;\n  grid-gap: 24px;\n  padding: 24px 0 24px 24px;\n}\n.container .verify-container .verify-header-container .title-container .title[data-v-0f4019f2] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 35px;\n}\n.container .verify-container .verify-header-container .tabs-container[data-v-0f4019f2] {\n  display: flex;\n  justify-content: inherit;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media screen and (max-width: 1097px) {\n.container .verify-container .verify-header-container .tabs-container[data-v-0f4019f2] {\n    align-items: end;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-0f4019f2] {\n  color: #404040;\n  font-family: \"TrueLight\";\n  font-size: 24px;\n  line-height: 28px;\n  padding-right: 10px;\n}\n@media screen and (max-width: 860px) {\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-0f4019f2] {\n    text-align: center;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-0f4019f2] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1097px) {\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-0f4019f2] {\n    flex-direction: column;\n    align-items: end;\n}\n}\n@media screen and (max-width: 926px) {\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-0f4019f2] {\n    align-items: center;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .tab-header-text[data-v-0f4019f2] {\n  margin: 0 0.5rem 0 0;\n  line-height: 28px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab-container[data-v-0f4019f2] {\n  display: flex;\n}\n.container .verify-container .verify-header-container .tabs-container .tab[data-v-0f4019f2] {\n  margin-right: 0.5rem;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-inner-container[data-v-0f4019f2] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #cccccc;\n  padding: 6px 9px;\n  border-radius: 10px;\n  width: 220px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-inner-container.active[data-v-0f4019f2] {\n  border: 1px solid #FF0000;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-text[data-v-0f4019f2] {\n  display: contents;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n  padding-top: 2px;\n  color: #000000;\n  font-family: \"TrueBold\";\n  text-decoration: none;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .grid[data-v-0f4019f2] {\n  display: grid;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .ms-1[data-v-0f4019f2] {\n  margin-left: 0.5rem;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .place-items-center[data-v-0f4019f2] {\n  place-items: center;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border[data-v-0f4019f2] {\n  border: 1px solid #F0F0F0;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .bg-red-500[data-v-0f4019f2] {\n  background-color: #E12836;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border-red-500[data-v-0f4019f2] {\n  border-color: #E12836;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border-gray-80[data-v-0f4019f2] {\n  border-color: #CCCCCC;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .rounded-full[data-v-0f4019f2] {\n  border-radius: 9999px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .w-\\[20px\\][data-v-0f4019f2] {\n  width: 20px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .h-\\[20px\\][data-v-0f4019f2] {\n  height: 20px;\n}\n.container .verify-container .form-card-container[data-v-0f4019f2] {\n  padding: 20px 35px;\n}\n.container .verify-container .form-card-container .divider[data-v-0f4019f2] {\n  height: 1px;\n  width: 100%;\n  background-color: #cccccc;\n}\n.container .verify-container .form-card-container .form-heading-container[data-v-0f4019f2] {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  justify-items: space-between;\n  grid-gap: 30px;\n  border-bottom: 1px solid #bdbdbd;\n}\n.container .verify-container .form-card-container .title[data-v-0f4019f2] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 35px;\n}\n.container .verify-container .form-card-container .subtitle[data-v-0f4019f2] {\n  color: #404040;\n  font-family: \"TrueLight\";\n  font-size: 24px;\n  line-height: 28px;\n  margin-top: 13px;\n  margin-bottom: 27px;\n}\n.container .verify-container .form-container[data-v-0f4019f2] {\n  max-width: 800px;\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n}\n.container .verify-container form[data-v-0f4019f2] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 24px 36px;\n  margin: auto;\n  max-width: 860px;\n  padding: 32px 16px;\n}\n.container .verify-container form[loading] input[data-v-0f4019f2],\n.container .verify-container form[loading] select[data-v-0f4019f2] {\n  pointer-events: none;\n}\n.container .verify-container form[loading] .button button[data-v-0f4019f2] {\n  background: #dedede;\n  color: #979797;\n  cursor: wait;\n}\n.container .verify-container form .input[data-v-0f4019f2] {\n  display: grid;\n  grid-gap: 4px;\n  grid-template-rows: auto 1fr;\n}\n.container .verify-container form .input.error > label[data-v-0f4019f2] {\n  color: #ff0000;\n}\n.container .verify-container form .input.error input[data-v-0f4019f2],\n.container .verify-container form .input.error .datetime-picker[data-v-0f4019f2] {\n  border-color: #ff0000;\n  background-color: #FFECEC;\n}\n.container .verify-container form .input.time-input.show-timepicker[data-v-0f4019f2] {\n  grid-template-columns: 1fr auto;\n}\n.container .verify-container form .input.time-input .red[data-v-0f4019f2] {\n  color: #ff0000;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 20px;\n}\n.container .verify-container form .input.time-input .blue[data-v-0f4019f2] {\n  color: #29ABE2;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 19px;\n  font-family: \"TrueLight\";\n}\n.container .verify-container form .input.time-input .highlight[data-v-0f4019f2] {\n  font-weight: bold;\n  font-style: italic;\n}\n.container .verify-container form .input.time-input .highlight span[data-v-0f4019f2] {\n  text-decoration: underline;\n}\n.container .verify-container form .input.time-input .sub-label[data-v-0f4019f2] {\n  font-family: \"TrueLight\";\n  margin-left: 10px;\n  color: #404040;\n}\n.container .verify-container form .datetime[data-v-0f4019f2] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4px 36px;\n}\n.container .verify-container form .datetime .date[data-v-0f4019f2] {\n  display: grid;\n  grid-template-columns: 2fr 4fr 3fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-0f4019f2] {\n  display: flex;\n  grid-column: 1/-1;\n  align-items: center;\n  justify-content: flex-end;\n  grid-area: b;\n}\n.container .verify-container form .datetime .disable-time-checkbox input[data-v-0f4019f2] {\n  margin-right: 8px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-checkbox label[data-v-0f4019f2] {\n  font-size: 22px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-label[data-v-0f4019f2] {\n  color: #ff0000;\n  font-size: 18px;\n  text-align: right;\n  text-decoration: underline;\n  cursor: pointer;\n  grid-column: 1/-1;\n}\n.container .verify-container form .geo[data-v-0f4019f2] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .geo.th[data-v-0f4019f2] {\n  grid-template-columns: 1fr 1fr;\n  grid-column: 1/-1;\n  grid-gap: 36px;\n}\n.container .verify-container form label[data-v-0f4019f2] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  color: #333;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] {\n  grid-column: 1/-1;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup > * {\n  font-family: \"TrueBold\";\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__actions {\n  padding: 20px 0;\n  text-align: center;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__actions .vdatetime-popup__actions__button {\n  font-size: 24px;\n  width: 146px;\n  height: 38px;\n  border-radius: 40px;\n  padding: 4px;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__actions .vdatetime-popup__actions__button.vdatetime-popup__actions__button--confirm {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  color: white;\n  border: 2px solid transparent;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__actions .vdatetime-popup__actions__button.vdatetime-popup__actions__button--cancel {\n  background-color: #ffffff;\n  color: #e62627;\n  border: 2px solid #e62627;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-calendar__month__weekday,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-calendar__month__day,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__year {\n  font-size: 22px;\n  font-family: \"TrueMedium\";\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item {\n  font-size: 24px;\n  line-height: 28px;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-time-picker__item--selected, .container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-time-picker__item:hover, .container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-year-picker__item--selected, .container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-year-picker__item:hover, .container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-month-picker__item--selected, .container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item.vdatetime-month-picker__item:hover {\n  font-size: 36px;\n  line-height: 43px;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__title {\n  text-align: center;\n  font-size: 24px;\n  margin: 0;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__header,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-calendar__month__day--selected > span > span,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-calendar__month__day--selected:hover > span > span {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-0f4019f2] .vdatetime-popup__actions__button {\n  color: #e62627;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n  color: #333;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] input::-moz-placeholder {\n  font-family: \"TrueLight\";\n  color: #cccccc;\n}\n.container .verify-container form .datetime-picker[data-v-0f4019f2] input::placeholder, .container .verify-container form .datetime-picker[data-v-0f4019f2] input[disabled] {\n  font-family: \"TrueLight\";\n  color: #cccccc;\n}\n.container .verify-container form input[type=text][data-v-0f4019f2],\n.container .verify-container form select[data-v-0f4019f2],\n.container .verify-container form button[data-v-0f4019f2],\n.container .verify-container form .datetime-picker[data-v-0f4019f2] {\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  background-color: #ffffff;\n  color: #333;\n  padding: 0 12px;\n  outline: none;\n  min-width: 0;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 12px);\n}\n.container .verify-container form input[type=text][data-v-0f4019f2]::-moz-placeholder, .container .verify-container form select[data-v-0f4019f2]::-moz-placeholder, .container .verify-container form button[data-v-0f4019f2]::-moz-placeholder, .container .verify-container form .datetime-picker[data-v-0f4019f2]::-moz-placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[type=text][data-v-0f4019f2]::placeholder,\n.container .verify-container form select[data-v-0f4019f2]::placeholder,\n.container .verify-container form button[data-v-0f4019f2]::placeholder,\n.container .verify-container form .datetime-picker[data-v-0f4019f2]::placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[type=text][disabled][data-v-0f4019f2], .container .verify-container form input[type=text].disabled[data-v-0f4019f2],\n.container .verify-container form select[disabled][data-v-0f4019f2],\n.container .verify-container form select.disabled[data-v-0f4019f2],\n.container .verify-container form button[disabled][data-v-0f4019f2],\n.container .verify-container form button.disabled[data-v-0f4019f2],\n.container .verify-container form .datetime-picker[disabled][data-v-0f4019f2],\n.container .verify-container form .datetime-picker.disabled[data-v-0f4019f2] {\n  background-color: #dedede;\n  color: #979797;\n  -webkit-text-fill-color: #949494;\n}\n.container .verify-container form input[type=text].date[data-v-0f4019f2],\n.container .verify-container form select.date[data-v-0f4019f2],\n.container .verify-container form button.date[data-v-0f4019f2],\n.container .verify-container form .datetime-picker.date[data-v-0f4019f2] {\n  background-image: url(\"/images/drlucky/date.svg\");\n}\n.container .verify-container form input[type=text].time[data-v-0f4019f2],\n.container .verify-container form select.time[data-v-0f4019f2],\n.container .verify-container form button.time[data-v-0f4019f2],\n.container .verify-container form .datetime-picker.time[data-v-0f4019f2] {\n  background-image: url(\"/images/drlucky/time.svg\");\n}\n.container .verify-container form .dropdown[data-v-0f4019f2] {\n  position: relative;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-0f4019f2] {\n  pointer-events: none;\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueLight\";\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  background-color: #ffffff;\n  color: #404040;\n  padding: 0 12px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  grid-gap: 4px;\n}\n.container .verify-container form .dropdown .dropdown-label span[data-v-0f4019f2] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-0f4019f2]:after {\n  content: \"\";\n  width: 7px;\n  height: 14px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MTVfMzMzMikiPgo8cGF0aCBkPSJNNy40IDkuNUgwLjYwMDAwM0MwLjUwMDAwMyA5LjUgMC40MDAwMDMgOS41IDAuNDAwMDAzIDkuNUMwLjMwMDAwMyA5LjUgMC4zMDAwMDMgOS42IDAuMjAwMDAzIDkuNkMzLjA1NDc0ZS0wNiA5LjggMy4wNTQ3NGUtMDYgMTAuMiAwLjIwMDAwMyAxMC40TDMuNiAxMy44QzMuNyAxNCAzLjggMTQgNCAxNEM0LjEgMTQgNC4zIDE0IDQuNCAxMy44TDcuOCAxMC40QzcuOSAxMC4zIDggMTAuMSA4IDEwQzcuOSA5LjggNy43IDkuNSA3LjQgOS41WiIgZmlsbD0iI0U2MjYyNyIvPgo8cGF0aCBkPSJNMC42IDQuNUg3LjRDNy41IDQuNSA3LjYgNC41IDcuNiA0LjVDNy43IDQuNSA3LjcgNC40IDcuOCA0LjRDOCA0LjEgOCAzLjggNy43IDMuNkw0LjQgMC4yQzQuMiAwIDQuMSAwIDQgMEMzLjggMCAzLjcgMCAzLjYgMC4yTDAuMiAzLjZDMC4xIDMuNyAwIDMuOCAwIDRDMCA0LjMgMC4yIDQuNSAwLjYgNC41WiIgZmlsbD0iI0U2MjYyNyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUxNV8zMzMyIj4KPHJlY3Qgd2lkdGg9IjcuOSIgaGVpZ2h0PSIxNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\");\n}\n.container .verify-container form .dropdown select[data-v-0f4019f2] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  opacity: 0;\n  font-size: 16px;\n  font-family: Arial;\n}\n.container .verify-container form .button[data-v-0f4019f2] {\n  grid-column: 1/-1;\n  text-align: center;\n}\n.container .verify-container form .button .error[data-v-0f4019f2] {\n  color: #ff0000;\n}\n.container .verify-container form .button .berfuntong-button[data-v-0f4019f2] {\n  border-radius: 40px;\n  cursor: pointer;\n  border: none;\n  padding: 0 32px;\n  height: 40px;\n  width: 180px;\n}\n@media screen and (max-width: 480px) {\n.container .verify-container form .button .berfuntong-button[data-v-0f4019f2] {\n    width: 150px;\n    padding: 0 10px;\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 365px) {\n.container .verify-container form .button .berfuntong-button[data-v-0f4019f2] {\n    width: 140px;\n}\n}\n@media screen and (max-width: 345px) {\n.container .verify-container form .button .berfuntong-button[data-v-0f4019f2] {\n    width: 127px;\n}\n}\n.container .verify-container form .button #search-berfuntong[data-v-0f4019f2] {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  color: #fff;\n}\n.container .verify-container form .button #clear-berfuntong[data-v-0f4019f2] {\n  background: #f7f7f7;\n  color: #E62627;\n  border: 2px solid #E62627;\n}\n.container .verify-container form .checkbox[data-v-0f4019f2] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  grid-gap: 4px;\n  margin-top: 4px;\n}\n.container .verify-container form .checkbox input[data-v-0f4019f2],\n.container .verify-container form .checkbox label[data-v-0f4019f2] {\n  cursor: pointer;\n}\n.container .verify-container .policy-container[data-v-0f4019f2] {\n  font-family: \"TrueLight\";\n  font-size: 19px;\n  line-height: 23px;\n  margin-left: 35px;\n  margin-right: 35px;\n  color: #000;\n  max-width: 100%;\n  padding-bottom: 30px;\n}\n.container .verify-container .policy-container .tnc[data-v-0f4019f2] {\n  display: inline-block;\n  color: #28abe2;\n  font-size: 19px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.container .description[data-v-0f4019f2] {\n  margin: 16px auto;\n}\n.container .description > img[data-v-0f4019f2] {\n  display: none;\n}\n.container .description img[data-v-0f4019f2] {\n  width: 100%;\n}\n@media screen and (max-width: 1024px) {\n.container .card .card-inner-content[data-v-0f4019f2] {\n    padding: 0 20px;\n}\n}\n@media screen and (max-width: 860px) {\n.container[data-v-0f4019f2] {\n    padding: 0;\n}\n.container .player[data-v-0f4019f2] {\n    grid-template-columns: 1fr;\n    padding: 0 16px;\n}\n.container .player img[data-v-0f4019f2] {\n    display: none;\n}\n.container .card .card-inner-content[data-v-0f4019f2] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.container .verify-container .verify-header-container[data-v-0f4019f2] {\n    grid-template-columns: 1fr;\n    grid-gap: 13px;\n    justify-items: center;\n    padding: 11px;\n}\n.container .verify-container .verify-header-container .title-container .title[data-v-0f4019f2] {\n    text-align: center;\n}\n.container .verify-container .verify-header-container .title-container .subtitle[data-v-0f4019f2] {\n    text-align: center;\n}\n.container .verify-container .verify-header-container .tabs-container[data-v-0f4019f2] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.container .verify-container .verify-header-container .tabs-container .tab-header-text[data-v-0f4019f2] {\n    margin: 0.5rem;\n}\n.container .verify-container .title-container[data-v-0f4019f2] {\n    text-align: left;\n}\n.container .verify-container .title-container .title span[data-v-0f4019f2] {\n    display: block;\n}\n.container .verify-container .form-card-container[data-v-0f4019f2] {\n    padding: 13px;\n}\n.container .verify-container .form-card-container .form-heading-container[data-v-0f4019f2] {\n    grid-template-columns: 1fr;\n}\n.container .verify-container form[data-v-0f4019f2] {\n    padding: 16px;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n}\n.container .verify-container form .datetime[data-v-0f4019f2] {\n    grid-template-columns: 1fr;\n    grid-gap: 16px 12px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-0f4019f2] {\n    margin-top: 4px;\n}\n.container .verify-container form .geo.th[data-v-0f4019f2] {\n    grid-gap: 16px;\n}\n.container .description > img[data-v-0f4019f2] {\n    display: block;\n}\n}\n@media screen and (max-width: 480px) {\n.container .verify-container .tabs-container[data-v-0f4019f2] {\n    grid-gap: 0;\n    font-size: 18px;\n}\n.container .verify-container .tabs-container .tab[data-v-0f4019f2] {\n    margin-right: 0;\n}\n.container .verify-container .tabs-container .tab .tab-inner-container[data-v-0f4019f2] {\n    padding: 5px;\n    width: auto !important;\n}\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-0f4019f2] {\n    display: flex;\n    flex-direction: column;\n}\n.container .card .card-inner-content[data-v-0f4019f2] {\n    align-items: flex-start;\n    padding: 0px 10px;\n}\n}\n@media screen and (max-width: 340px) {\n.drlucky-container .container .verify-container .verify-header-container .title-container .title[data-v-0f4019f2] {\n    font-size: 26px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-8c469140]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.container[data-v-8c469140] {\n  width: 100%;\n  max-width: 1199px;\n  margin: auto;\n}\n.container .player[data-v-8c469140] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 1.15fr 1fr;\n  grid-gap: 4px 7px;\n  margin: 16px auto;\n}\n.container .card[data-v-8c469140] {\n  background: #ffffff;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n.container .card .card-header-text[data-v-8c469140] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 36px;\n  text-align: center;\n}\n.container .card .card-header-text span[data-v-8c469140] {\n  color: #e62626;\n}\n.container .card .card-inner-content[data-v-8c469140] {\n  padding: 0px 50px;\n}\n.container .card .card-inner-content .card-inner-content-container[data-v-8c469140] {\n  display: flex;\n  align-items: center;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-light[data-v-8c469140] {\n  font-family: \"TrueLight\";\n  color: #404040;\n  margin: 0;\n  font-size: 24px;\n  line-height: 22px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-bold[data-v-8c469140] {\n  font-family: \"TrueBold\";\n  color: #000000;\n  margin: 0;\n  font-size: 24px;\n  line-height: 22px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-text-number[data-v-8c469140] {\n  font-family: \"TrueBold\";\n  font-size: 48px;\n  color: #e62627;\n}\n.container .card .card-inner-content .card-inner-content-container .horizontal-divider[data-v-8c469140] {\n  width: 40px;\n  height: 0px;\n  border: 1px solid #e62627;\n  transform: rotate(90deg);\n  margin-left: -10px;\n}\n.container .card .card-inner-content .card-inner-content-container .card-description[data-v-8c469140] {\n  margin-left: -10px;\n}\n.container .verify-container[data-v-8c469140] {\n  background: #f7f7f7;\n}\n.container .verify-container .verify-header-container[data-v-8c469140] {\n  background: #fdfdff;\n  grid-template-columns: 1fr 1.6fr;\n  justify-content: space-between;\n  grid-gap: 24px;\n  padding: 24px 0 24px 24px;\n}\n.container .verify-container .verify-header-container .title-container .title[data-v-8c469140] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 35px;\n}\n.container .verify-container .verify-header-container .tabs-container[data-v-8c469140] {\n  display: flex;\n  justify-content: inherit;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media screen and (max-width: 1097px) {\n.container .verify-container .verify-header-container .tabs-container[data-v-8c469140] {\n    align-items: end;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-8c469140] {\n  color: #404040;\n  font-family: \"TrueLight\";\n  font-size: 24px;\n  line-height: 28px;\n  padding-right: 10px;\n}\n@media screen and (max-width: 860px) {\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-8c469140] {\n    text-align: center;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-8c469140] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1097px) {\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-8c469140] {\n    flex-direction: column;\n    align-items: end;\n}\n}\n@media screen and (max-width: 926px) {\n.container .verify-container .verify-header-container .tabs-container .tab-right[data-v-8c469140] {\n    align-items: center;\n}\n}\n.container .verify-container .verify-header-container .tabs-container .tab-header-text[data-v-8c469140] {\n  margin: 0 0.5rem 0 0;\n  line-height: 28px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab-container[data-v-8c469140] {\n  display: flex;\n}\n.container .verify-container .verify-header-container .tabs-container .tab[data-v-8c469140] {\n  margin-right: 0.5rem;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-inner-container[data-v-8c469140] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #cccccc;\n  padding: 6px 9px;\n  border-radius: 10px;\n  width: 220px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-inner-container.active[data-v-8c469140] {\n  border: 1px solid #FF0000;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n}\n.container .verify-container .verify-header-container .tabs-container .tab .tab-text[data-v-8c469140] {\n  display: contents;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n  padding-top: 2px;\n  color: #000000;\n  font-family: \"TrueBold\";\n  text-decoration: none;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .grid[data-v-8c469140] {\n  display: grid;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .ms-1[data-v-8c469140] {\n  margin-left: 0.5rem;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .place-items-center[data-v-8c469140] {\n  place-items: center;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border[data-v-8c469140] {\n  border: 1px solid #F0F0F0;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .bg-red-500[data-v-8c469140] {\n  background-color: #E12836;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border-red-500[data-v-8c469140] {\n  border-color: #E12836;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .border-gray-80[data-v-8c469140] {\n  border-color: #CCCCCC;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .rounded-full[data-v-8c469140] {\n  border-radius: 9999px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .w-\\[20px\\][data-v-8c469140] {\n  width: 20px;\n}\n.container .verify-container .verify-header-container .tabs-container .tab .h-\\[20px\\][data-v-8c469140] {\n  height: 20px;\n}\n.container .verify-container .form-card-container[data-v-8c469140] {\n  padding: 20px 35px;\n}\n.container .verify-container .form-card-container .divider[data-v-8c469140] {\n  height: 1px;\n  width: 100%;\n  background-color: #cccccc;\n}\n.container .verify-container .form-card-container .form-heading-container[data-v-8c469140] {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  justify-items: space-between;\n  grid-gap: 30px;\n  border-bottom: 1px solid #bdbdbd;\n}\n.container .verify-container .form-card-container .title[data-v-8c469140] {\n  color: #000000;\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 35px;\n}\n.container .verify-container .form-card-container .subtitle[data-v-8c469140] {\n  color: #404040;\n  font-family: \"TrueLight\";\n  font-size: 24px;\n  line-height: 28px;\n  margin-top: 13px;\n  margin-bottom: 27px;\n}\n.container .verify-container .form-container[data-v-8c469140] {\n  max-width: 800px;\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n}\n.container .verify-container form[data-v-8c469140] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 24px 36px;\n  margin: auto;\n  max-width: 860px;\n  padding: 32px 16px;\n}\n.container .verify-container form[loading] input[data-v-8c469140],\n.container .verify-container form[loading] select[data-v-8c469140] {\n  pointer-events: none;\n}\n.container .verify-container form[loading] .button button[data-v-8c469140] {\n  background: #dedede;\n  color: #979797;\n  cursor: wait;\n}\n.container .verify-container form .input[data-v-8c469140] {\n  display: grid;\n  grid-gap: 4px;\n  grid-template-rows: auto 1fr;\n}\n.container .verify-container form .input.error > label[data-v-8c469140] {\n  color: #ff0000;\n}\n.container .verify-container form .input.error input[data-v-8c469140],\n.container .verify-container form .input.error .datetime-picker[data-v-8c469140] {\n  border-color: #ff0000;\n  background-color: #FFECEC;\n}\n.container .verify-container form .input.time-input.show-timepicker[data-v-8c469140] {\n  grid-template-columns: 1fr auto;\n}\n.container .verify-container form .input.time-input .red[data-v-8c469140] {\n  color: #ff0000;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 20px;\n}\n.container .verify-container form .input.time-input .blue[data-v-8c469140] {\n  color: #29ABE2;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 19px;\n  font-family: \"TrueLight\";\n}\n.container .verify-container form .input.time-input .highlight[data-v-8c469140] {\n  font-weight: bold;\n  font-style: italic;\n}\n.container .verify-container form .input.time-input .highlight span[data-v-8c469140] {\n  text-decoration: underline;\n}\n.container .verify-container form .input.time-input .sub-label[data-v-8c469140] {\n  font-family: \"TrueLight\";\n  margin-left: 10px;\n  color: #404040;\n}\n.container .verify-container form .datetime[data-v-8c469140] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4px 36px;\n}\n.container .verify-container form .datetime .date[data-v-8c469140] {\n  display: grid;\n  grid-template-columns: 2fr 4fr 3fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-8c469140] {\n  display: flex;\n  grid-column: 1/-1;\n  align-items: center;\n  justify-content: flex-end;\n  grid-area: b;\n}\n.container .verify-container form .datetime .disable-time-checkbox input[data-v-8c469140] {\n  margin-right: 8px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-checkbox label[data-v-8c469140] {\n  font-size: 22px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-label[data-v-8c469140] {\n  color: #ff0000;\n  font-size: 18px;\n  text-align: right;\n  text-decoration: underline;\n  cursor: pointer;\n  grid-column: 1/-1;\n}\n.container .verify-container form .geo[data-v-8c469140] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .geo.th[data-v-8c469140] {\n  grid-template-columns: 1fr 1fr;\n  grid-column: 1/-1;\n  grid-gap: 36px;\n}\n.container .verify-container form label[data-v-8c469140] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  color: #333;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] {\n  grid-column: 1/-1;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup > * {\n  font-family: \"TrueBold\";\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__actions {\n  padding: 20px 0;\n  text-align: center;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__actions .vdatetime-popup__actions__button {\n  font-size: 24px;\n  width: 146px;\n  height: 38px;\n  border-radius: 40px;\n  padding: 4px;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__actions .vdatetime-popup__actions__button.vdatetime-popup__actions__button--confirm {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  color: white;\n  border: 2px solid transparent;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__actions .vdatetime-popup__actions__button.vdatetime-popup__actions__button--cancel {\n  background-color: #ffffff;\n  color: #e62627;\n  border: 2px solid #e62627;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-calendar__month__weekday,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-calendar__month__day,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__year {\n  font-size: 22px;\n  font-family: \"TrueMedium\";\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item {\n  font-size: 24px;\n  line-height: 28px;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-time-picker__item--selected, .container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-time-picker__item:hover, .container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-year-picker__item--selected, .container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-year-picker__item:hover, .container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-month-picker__item--selected, .container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item.vdatetime-month-picker__item:hover {\n  font-size: 36px;\n  line-height: 43px;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__title {\n  text-align: center;\n  font-size: 24px;\n  margin: 0;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__header,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-calendar__month__day--selected > span > span,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-calendar__month__day--selected:hover > span > span {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-8c469140] .vdatetime-popup__actions__button {\n  color: #e62627;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n  color: #333;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] input::-moz-placeholder {\n  font-family: \"TrueLight\";\n  color: #cccccc;\n}\n.container .verify-container form .datetime-picker[data-v-8c469140] input::placeholder, .container .verify-container form .datetime-picker[data-v-8c469140] input[disabled] {\n  font-family: \"TrueLight\";\n  color: #cccccc;\n}\n.container .verify-container form input[type=text][data-v-8c469140],\n.container .verify-container form select[data-v-8c469140],\n.container .verify-container form button[data-v-8c469140],\n.container .verify-container form .datetime-picker[data-v-8c469140] {\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  background-color: #ffffff;\n  color: #333;\n  padding: 0 12px;\n  outline: none;\n  min-width: 0;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 12px);\n}\n.container .verify-container form input[type=text][data-v-8c469140]::-moz-placeholder, .container .verify-container form select[data-v-8c469140]::-moz-placeholder, .container .verify-container form button[data-v-8c469140]::-moz-placeholder, .container .verify-container form .datetime-picker[data-v-8c469140]::-moz-placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[type=text][data-v-8c469140]::placeholder,\n.container .verify-container form select[data-v-8c469140]::placeholder,\n.container .verify-container form button[data-v-8c469140]::placeholder,\n.container .verify-container form .datetime-picker[data-v-8c469140]::placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[type=text][disabled][data-v-8c469140], .container .verify-container form input[type=text].disabled[data-v-8c469140],\n.container .verify-container form select[disabled][data-v-8c469140],\n.container .verify-container form select.disabled[data-v-8c469140],\n.container .verify-container form button[disabled][data-v-8c469140],\n.container .verify-container form button.disabled[data-v-8c469140],\n.container .verify-container form .datetime-picker[disabled][data-v-8c469140],\n.container .verify-container form .datetime-picker.disabled[data-v-8c469140] {\n  background-color: #dedede;\n  color: #979797;\n  -webkit-text-fill-color: #949494;\n}\n.container .verify-container form input[type=text].date[data-v-8c469140],\n.container .verify-container form select.date[data-v-8c469140],\n.container .verify-container form button.date[data-v-8c469140],\n.container .verify-container form .datetime-picker.date[data-v-8c469140] {\n  background-image: url(\"/images/drlucky/date.svg\");\n}\n.container .verify-container form input[type=text].time[data-v-8c469140],\n.container .verify-container form select.time[data-v-8c469140],\n.container .verify-container form button.time[data-v-8c469140],\n.container .verify-container form .datetime-picker.time[data-v-8c469140] {\n  background-image: url(\"/images/drlucky/time.svg\");\n}\n.container .verify-container form .dropdown[data-v-8c469140] {\n  position: relative;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-8c469140] {\n  pointer-events: none;\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueLight\";\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  background-color: #ffffff;\n  color: #404040;\n  padding: 0 12px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  grid-gap: 4px;\n}\n.container .verify-container form .dropdown .dropdown-label span[data-v-8c469140] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-8c469140]:after {\n  content: \"\";\n  width: 7px;\n  height: 14px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MTVfMzMzMikiPgo8cGF0aCBkPSJNNy40IDkuNUgwLjYwMDAwM0MwLjUwMDAwMyA5LjUgMC40MDAwMDMgOS41IDAuNDAwMDAzIDkuNUMwLjMwMDAwMyA5LjUgMC4zMDAwMDMgOS42IDAuMjAwMDAzIDkuNkMzLjA1NDc0ZS0wNiA5LjggMy4wNTQ3NGUtMDYgMTAuMiAwLjIwMDAwMyAxMC40TDMuNiAxMy44QzMuNyAxNCAzLjggMTQgNCAxNEM0LjEgMTQgNC4zIDE0IDQuNCAxMy44TDcuOCAxMC40QzcuOSAxMC4zIDggMTAuMSA4IDEwQzcuOSA5LjggNy43IDkuNSA3LjQgOS41WiIgZmlsbD0iI0U2MjYyNyIvPgo8cGF0aCBkPSJNMC42IDQuNUg3LjRDNy41IDQuNSA3LjYgNC41IDcuNiA0LjVDNy43IDQuNSA3LjcgNC40IDcuOCA0LjRDOCA0LjEgOCAzLjggNy43IDMuNkw0LjQgMC4yQzQuMiAwIDQuMSAwIDQgMEMzLjggMCAzLjcgMCAzLjYgMC4yTDAuMiAzLjZDMC4xIDMuNyAwIDMuOCAwIDRDMCA0LjMgMC4yIDQuNSAwLjYgNC41WiIgZmlsbD0iI0U2MjYyNyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUxNV8zMzMyIj4KPHJlY3Qgd2lkdGg9IjcuOSIgaGVpZ2h0PSIxNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\");\n}\n.container .verify-container form .dropdown select[data-v-8c469140] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  opacity: 0;\n  font-size: 16px;\n  font-family: Arial;\n}\n.container .verify-container form .button[data-v-8c469140] {\n  grid-column: 1/-1;\n  text-align: center;\n}\n.container .verify-container form .button .error[data-v-8c469140] {\n  color: #ff0000;\n}\n.container .verify-container form .button .berfuntong-button[data-v-8c469140] {\n  border-radius: 40px;\n  cursor: pointer;\n  border: none;\n  padding: 0 32px;\n  height: 40px;\n  width: 180px;\n}\n@media screen and (max-width: 480px) {\n.container .verify-container form .button .berfuntong-button[data-v-8c469140] {\n    width: 150px;\n    padding: 0 10px;\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 365px) {\n.container .verify-container form .button .berfuntong-button[data-v-8c469140] {\n    width: 140px;\n}\n}\n@media screen and (max-width: 345px) {\n.container .verify-container form .button .berfuntong-button[data-v-8c469140] {\n    width: 127px;\n}\n}\n.container .verify-container form .button #search-berfuntong[data-v-8c469140] {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  color: #fff;\n}\n.container .verify-container form .button #clear-berfuntong[data-v-8c469140] {\n  background: #f7f7f7;\n  color: #E62627;\n  border: 2px solid #E62627;\n}\n.container .verify-container form .checkbox[data-v-8c469140] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  grid-gap: 4px;\n  margin-top: 4px;\n}\n.container .verify-container form .checkbox input[data-v-8c469140],\n.container .verify-container form .checkbox label[data-v-8c469140] {\n  cursor: pointer;\n}\n.container .verify-container .policy-container[data-v-8c469140] {\n  font-family: \"TrueLight\";\n  font-size: 19px;\n  line-height: 23px;\n  margin-left: 35px;\n  margin-right: 35px;\n  color: #000;\n  max-width: 100%;\n  padding-bottom: 30px;\n}\n.container .verify-container .policy-container .tnc[data-v-8c469140] {\n  display: inline-block;\n  color: #28abe2;\n  font-size: 19px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.container .description[data-v-8c469140] {\n  margin: 16px auto;\n}\n.container .description > img[data-v-8c469140] {\n  display: none;\n}\n.container .description img[data-v-8c469140] {\n  width: 100%;\n}\n@media screen and (max-width: 1024px) {\n.container .card .card-inner-content[data-v-8c469140] {\n    padding: 0 20px;\n}\n}\n@media screen and (max-width: 860px) {\n.container[data-v-8c469140] {\n    padding: 0;\n}\n.container .player[data-v-8c469140] {\n    grid-template-columns: 1fr;\n    padding: 0 16px;\n}\n.container .player img[data-v-8c469140] {\n    display: none;\n}\n.container .card .card-inner-content[data-v-8c469140] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.container .verify-container .verify-header-container[data-v-8c469140] {\n    grid-template-columns: 1fr;\n    grid-gap: 13px;\n    justify-items: center;\n    padding: 11px;\n}\n.container .verify-container .verify-header-container .title-container .title[data-v-8c469140] {\n    text-align: center;\n}\n.container .verify-container .verify-header-container .title-container .subtitle[data-v-8c469140] {\n    text-align: center;\n}\n.container .verify-container .verify-header-container .tabs-container[data-v-8c469140] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.container .verify-container .verify-header-container .tabs-container .tab-header-text[data-v-8c469140] {\n    margin: 0.5rem;\n}\n.container .verify-container .title-container[data-v-8c469140] {\n    text-align: left;\n}\n.container .verify-container .title-container .title span[data-v-8c469140] {\n    display: block;\n}\n.container .verify-container .form-card-container[data-v-8c469140] {\n    padding: 13px;\n}\n.container .verify-container .form-card-container .form-heading-container[data-v-8c469140] {\n    grid-template-columns: 1fr;\n}\n.container .verify-container form[data-v-8c469140] {\n    padding: 16px;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n}\n.container .verify-container form .datetime[data-v-8c469140] {\n    grid-template-columns: 1fr;\n    grid-gap: 16px 12px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-8c469140] {\n    margin-top: 4px;\n}\n.container .verify-container form .geo.th[data-v-8c469140] {\n    grid-gap: 16px;\n}\n.container .description > img[data-v-8c469140] {\n    display: block;\n}\n}\n@media screen and (max-width: 480px) {\n.container .verify-container .tabs-container[data-v-8c469140] {\n    grid-gap: 0;\n    font-size: 18px;\n}\n.container .verify-container .tabs-container .tab[data-v-8c469140] {\n    margin-right: 0;\n}\n.container .verify-container .tabs-container .tab .tab-inner-container[data-v-8c469140] {\n    padding: 5px;\n    width: auto !important;\n}\n.container .verify-container .verify-header-container .tabs-container .subtitle[data-v-8c469140] {\n    display: flex;\n    flex-direction: column;\n}\n.container .card .card-inner-content[data-v-8c469140] {\n    align-items: flex-start;\n    padding: 0px 10px;\n}\n}\n@media screen and (max-width: 340px) {\n.drlucky-container .container .verify-container .verify-header-container .title-container .title[data-v-8c469140] {\n    font-size: 26px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "video" }, [
    _c("iframe", {
      attrs: {
        src: _vm.url,
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        frameborder: "0",
        allowfullscreen: "",
        loading: "lazy",
        scrolling: "no",
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-content" }, [
      _c("div", { staticClass: "card-header-text" }, [
        _vm._v("\n    ขั้นตอนง่ายๆ ในการเลือก "),
        _c("span", { staticClass: "card-header-highlight-text" }, [
          _vm._v("เบอร์ฟันธง"),
        ]),
        _vm._v(" ตามดวงเฉพาะคุณ\n  "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-inner-content" }, [
        _c(
          "div",
          { staticClass: "card-inner-content-container card-inner-content-1" },
          [
            _c("div", [
              _c("h1", { staticClass: "card-text-number" }, [_vm._v("1")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "horizontal-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "card-description" }, [
              _c("div", [
                _c("p", { staticClass: "card-text-light" }, [
                  _vm._v("กรอกข้อมูลวันเดือนปีเกิดของคุณ"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "card-text-bold" }, [
                  _vm._v("เพื่อผูกดวง วางลัคณา"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-inner-content-container card-inner-content-2" },
          [
            _c("div", [
              _c("h1", { staticClass: "card-text-number" }, [_vm._v("2")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "horizontal-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "card-description" }, [
              _c("div", [
                _c("p", { staticClass: "card-text-light" }, [
                  _vm._v("เลือกหัวข้อที่คุณต้องการหาเบอร์มา เสริมดวง"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "card-text-bold" }, [
                  _vm._v("ชะตา การงาน การเงิน ความรัก และโชคลาภ"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-inner-content-container card-inner-content-3" },
          [
            _c("div", [
              _c("h1", { staticClass: "card-text-number" }, [_vm._v("3")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "horizontal-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "card-description" }, [
              _c("div", [
                _c("p", { staticClass: "card-text-light" }, [
                  _vm._v("เลือก "),
                  _c("span", { staticClass: "card-text-bold" }, [
                    _vm._v("เบอร์ฟันธง"),
                  ]),
                  _vm._v("และ แพ็กเกจรายเดือน"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-inner-content-container card-inner-content-4" },
          [
            _c("div", [
              _c("h1", { staticClass: "card-text-number" }, [_vm._v("4")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "horizontal-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "card-description" }, [
              _c("div", [
                _c("p", { staticClass: "card-text-light" }, [
                  _vm._v("เปิดเบอร์พร้อม "),
                  _c("span", { staticClass: "card-text-bold" }, [
                    _vm._v("รับคำทำนาย"),
                  ]),
                  _vm._v(" และจุดเปิดดวง"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "card-text-bold" }, [
                  _vm._v("เพื่อเสริมมงคลให้กับชีวิตคุณโดยเฉพาะ"),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true& ***!
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
    "dialog-element",
    { ref: "dialog", attrs: { "show-close-button": "" } },
    [
      _c("template", { slot: "content" }, [
        _c(
          "div",
          { staticClass: "dialog-container" },
          [
            _vm.type === "unknown-birthtime"
              ? [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("เบอร์ฟันธง ตามลัคนาราศี"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "subtitle" }, [
                    _c("div", [
                      _vm._v("โปรแกรมจะกำหนดเวลาเกิดที่เวลา 06.18น."),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "ทั้งนี้อาจเกิดความคลาดเคลื่อนในการคำนวณได้ ซึ่งเป็นข้อจำกัดตามการดูพื้นดวงชะตาตามลัคนาราศี"
                      ),
                    ]),
                  ]),
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.type === "tnc"
              ? [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("นโยบายคุ้มครองข้อมูลส่วนบุคคล"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "subtitle" }, [
                    _c("div", [
                      _vm._v(
                        "เพื่อความแม่นยำในการเลือกเบอร์ตามลัคนาราศี จำเป็นต้องใช้ข้อมูลของท่านเพื่อ"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v("การคำนวณหาเบอร์ฟันธงที่เหมาะสมกับท่านเท่านั้น "),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "ทั้งนี้ตามนโยบายคุ้มครองข้อมูลส่วนบุคคล ข้อมูลของท่านจะไม่ถูกเก็บ รวบรวม และ/หรือนำไปใช้ เพื่อการอื่นแต่อย่างใด"
                      ),
                    ]),
                  ]),
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                on: {
                  click: function ($event) {
                    return _vm.$refs.dialog.close()
                  },
                },
              },
              [_vm._v("ยอมรับ")]
            ),
          ],
          2
        ),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _vm.loaded
    ? _c(
        "div",
        { staticClass: "container" },
        [
          _c("dialog-element", { ref: "dialog" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "player" },
            [
              _c("video-player", {
                attrs: { url: "https://movie.trueid.net/embed/rpgOkNy2Dokp" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [_c("card")], 1),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "verify-container" }, [
            _c("div", { staticClass: "verify-header-container" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.showTab
                ? _c("div", { staticClass: "tabs-container" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "tab-right" }, [
                      _c("p", { staticClass: "tab-header-text" }, [
                        _vm._v("เลือกประเภทเบอร์ฟันธง"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tab-container" }, [
                        _c("div", { staticClass: "tab" }, [
                          _c(
                            "div",
                            { staticClass: "tab-inner-container active" },
                            [
                              _c("div", { staticClass: "tab-text" }, [
                                _vm._v("เบอร์ฟันธง ตรงดวงคุณ"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "grid bg-red-500 border-red-500 place-items-center border rounded-full w-[20px] h-[20px] ms-1",
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "14",
                                        height: "10",
                                        fill: "#fff",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tab" }, [
                          _c(
                            "div",
                            { staticClass: "tab-inner-container" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "tab-text",
                                  attrs: { to: _vm.tabUrl },
                                },
                                [
                                  _c("span", [_vm._v("เบอร์ฟันธง มงคลราศี")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px] ms-1",
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          attrs: {
                                            width: "14",
                                            height: "10",
                                            fill: "#ccc",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-card-container" }, [
              _c("div", { staticClass: "form-container" }, [
                _c(
                  "form",
                  {
                    attrs: { loading: _vm.loading },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "datetime" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input",
                          class: { error: !_vm.valid.birthdate },
                        },
                        [
                          _c("label", { attrs: { for: "date" } }, [
                            _vm._v("วันเกิด"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "date" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c("div", { staticClass: "dropdown-label" }, [
                                _c("span", [_vm._v(_vm._s(_vm.date.day + 1))]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.date.day,
                                      expression: "date.day",
                                    },
                                  ],
                                  attrs: { id: "day" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.date,
                                        "day",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                _vm._l(_vm.days, function (day, key) {
                                  return _c(
                                    "option",
                                    { key: key, domProps: { value: day } },
                                    [_vm._v(_vm._s(day + 1))]
                                  )
                                }),
                                0
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown" }, [
                              _c("div", { staticClass: "dropdown-label" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.months[_vm.date.month])),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.date.month,
                                      expression: "date.month",
                                    },
                                  ],
                                  attrs: { id: "month" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.date,
                                        "month",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                _vm._l(_vm.months, function (month, key) {
                                  return _c(
                                    "option",
                                    { key: key, domProps: { value: key } },
                                    [_vm._v(_vm._s(month))]
                                  )
                                }),
                                0
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown" }, [
                              _c("div", { staticClass: "dropdown-label" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.date.year + 543)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.date.year,
                                      expression: "date.year",
                                    },
                                  ],
                                  attrs: { id: "year" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.date,
                                        "year",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                _vm._l(_vm.years, function (year, key) {
                                  return _c(
                                    "option",
                                    { key: key, domProps: { value: year } },
                                    [_vm._v(_vm._s(year + 543))]
                                  )
                                }),
                                0
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input time-input",
                          class: {
                            "show-timepicker": !_vm.form.flag_unknow_time,
                          },
                        },
                        [
                          _vm.form.flag_unknow_time
                            ? _c(
                                "div",
                                {
                                  staticClass: "input time-input",
                                  on: {
                                    click: function ($event) {
                                      _vm.form.flag_unknow_time =
                                        !_vm.form.flag_unknow_time
                                    },
                                  },
                                },
                                [
                                  _c("label", { attrs: { for: "time" } }, [
                                    _vm._v("เวลาเกิด"),
                                  ]),
                                  _vm._v(" "),
                                  _c("datetime", {
                                    staticClass: "datetime-picker time",
                                    attrs: {
                                      "backdrop-click": false,
                                      placeholder:
                                        "หากไม่ระบุเวลาเกิด โปรแกรมจะลงเวลา 06.18 น.",
                                      type: "time",
                                      title: "เวลาเกิด",
                                      local: "",
                                      disabled: "",
                                    },
                                    model: {
                                      value: _vm.form.birthtime,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "birthtime", $$v)
                                      },
                                      expression: "form.birthtime",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "sub-label" }, [
                                    _vm._v(
                                      "ระบุเวลาเกิด เพื่อความแม่นยำในการเลือกเบอร์"
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.form.flag_unknow_time
                            ? _c("label", { attrs: { for: "time" } }, [
                                _vm._v(
                                  "\n                เวลาเกิด\n              "
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", [
                            !_vm.form.flag_unknow_time
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "blue",
                                    on: {
                                      click: function ($event) {
                                        _vm.form.flag_unknow_time =
                                          !_vm.form.flag_unknow_time
                                      },
                                    },
                                  },
                                  [_vm._v("คลิกเพื่อกลับไปค่าเริ่มต้น")]
                                )
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("datetime", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.form.flag_unknow_time,
                                expression: "!form.flag_unknow_time",
                              },
                            ],
                            ref: "datetime",
                            staticClass: "datetime-picker time",
                            attrs: {
                              "backdrop-click": false,
                              id: "time",
                              placeholder:
                                "หากไม่ระบุเวลาเกิด โปรแกรมจะลงเวลา 06.18 น.",
                              type: "time",
                              title: "เวลาเกิด",
                              local: "",
                            },
                            model: {
                              value: _vm.form.birthtime,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "birthtime", $$v)
                              },
                              expression: "form.birthtime",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.form.flag_unknow_time,
                            expression: "!form.flag_unknow_time",
                          },
                        ],
                        staticClass: "geo",
                        class: { th: _vm.form.timezone === "+0700" },
                      },
                      [
                        _c("div", { staticClass: "input" }, [
                          _c("label", [_vm._v("เขตประเทศเกิด")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown" }, [
                            _c("div", { staticClass: "dropdown-label" }, [
                              _c("span", [_vm._v(_vm._s(_vm.timezoneText))]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.timezone,
                                    expression: "form.timezone",
                                  },
                                ],
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "timezone",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                },
                              },
                              _vm._l(
                                _vm.dropdown.timezones,
                                function (tz, key) {
                                  return _c(
                                    "option",
                                    { key: key, domProps: { value: tz.value } },
                                    [_vm._v(_vm._s(tz.text))]
                                  )
                                }
                              ),
                              0
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm.form.timezone === "+0700"
                          ? _c("div", { staticClass: "input" }, [
                              _c("label", [_vm._v("จังหวัดที่เกิด")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "dropdown" }, [
                                _c("div", { staticClass: "dropdown-label" }, [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.form.province)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.province,
                                        expression: "form.province",
                                      },
                                    ],
                                    on: {
                                      change: function ($event) {
                                        var $$selectedVal =
                                          Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function (o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function (o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                        _vm.$set(
                                          _vm.form,
                                          "province",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                    },
                                  },
                                  _vm._l(
                                    _vm.dropdown.provinces,
                                    function (province, key) {
                                      return _c(
                                        "option",
                                        {
                                          key: key,
                                          domProps: { value: province },
                                        },
                                        [_vm._v(_vm._s(province))]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "button" }, [
                      _vm.error
                        ? _c("div", { staticClass: "error" }, [
                            _vm._v(_vm._s(_vm.error)),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "berfuntong-button",
                          attrs: { id: "clear-berfuntong", type: "button" },
                          on: { click: _vm.cleanup },
                        },
                        [_vm._v("ล้างข้อมูล")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "berfuntong-button",
                          attrs: {
                            id: "search-berfuntong",
                            type: "button",
                            disabled: _vm.loading,
                          },
                          on: { click: _vm.verify },
                        },
                        [_vm._v("ค้นหาเบอร์ฟันธง")]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "policy-container" }, [
              _c("div", [
                _vm._v(
                  "\n        ข้อมูลของท่านที่กรอก จะใช้เพื่อการคำนวณค้นหาเบอร์ฟันธงเท่านั้น โดยระบบจะไม่ทำการเก็บ รวบรวม และ/หรือนำไปใช้เพื่อการอื่นแต่อย่างใด               เบอร์ฟันธง เป็นความเชื่อส่วนบุคคล โปรดใช้วิจารณญาณในการรับคำทำนายและเลือกซื้อ และคำทำนายไม่ได้การันตีผลของการใช้ ซึ่งเป็นเรื่องเฉพาะบุคคล\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tnc",
                  attrs: { id: "policy-popup" },
                  on: { click: _vm.openTncDialog },
                },
                [_vm._v("นโยบายคุ้มครองข้อมูลส่วนบุคคล")]
              ),
            ]),
          ]),
          _vm._v(" "),
          !_vm.isSelectPage
            ? _c("div", { staticClass: "description" }, [_vm._m(2)])
            : _vm._e(),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-container" }, [
      _c("div", { staticClass: "title" }, [
        _vm._v("กรอกข้อมูลเพื่อหาเบอร์มงคลเฉพาะคุณ"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "subtitle" }, [
      _c("span", [_vm._v("และรับคำทำนายดวงชะตา โดย")]),
      _vm._v(" "),
      _c("span", [_vm._v("อาจารย์ลักษณ์ ราชสีห์ โหรฟันธง")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("picture", [
      _c("source", {
        attrs: {
          srcset: "/images/drlucky/information-mobile.png",
          type: "image/jpeg",
          media: "(max-width: 860px)",
        },
      }),
      _vm._v(" "),
      _c("img", { attrs: { src: "/images/drlucky/information-desktop.png" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/video-player.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/video-player.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player.vue?vue&type=template&id=76868284&scoped=true& */ "./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true&");
/* harmony import */ var _video_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-player.vue?vue&type=script&lang=js& */ "./resources/js/components/video-player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& */ "./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76868284",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/video-player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/video-player.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/video-player.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./video-player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=style&index=0&id=76868284&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_style_index_0_id_76868284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./video-player.vue?vue&type=template&id=76868284&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/video-player.vue?vue&type=template&id=76868284&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_player_vue_vue_type_template_id_76868284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/drlucky/home/card.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/drlucky/home/card.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=0f4019f2&scoped=true& */ "./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& */ "./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f4019f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/drlucky/home/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=0f4019f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/card.vue?vue&type=template&id=0f4019f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_0f4019f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/drlucky/home/dialog.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/drlucky/home/dialog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.vue?vue&type=template&id=0543d5aa&scoped=true& */ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true&");
/* harmony import */ var _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.vue?vue&type=script&lang=js& */ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& */ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0543d5aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/drlucky/home/dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=style&index=0&id=0543d5aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_0543d5aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=template&id=0543d5aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/dialog.vue?vue&type=template&id=0543d5aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_0543d5aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/drlucky/home/dropdown.json":
/*!*******************************************************!*\
  !*** ./resources/js/pages/drlucky/home/dropdown.json ***!
  \*******************************************************/
/*! exports provided: timezones, provinces, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"timezones\":[{\"value\":\"-1200\",\"text\":\"(GMT -12:00) Eniwetok, Kwajalein\"},{\"value\":\"-1100\",\"text\":\"(GMT -11:00) Midway Island, Samoa\"},{\"value\":\"-1000\",\"text\":\"(GMT -10:00) Hawaii\"},{\"value\":\"-0900\",\"text\":\"(GMT -9:00) Alaska\"},{\"value\":\"-0800\",\"text\":\"(GMT -8:00) Pacific Time (US & Canada)\"},{\"value\":\"-0700\",\"text\":\"(GMT -7:00) Mountain Time (US & Canada)\"},{\"value\":\"-0600\",\"text\":\"(GMT -6:00) Central Time (US & Canada), Mexico City\"},{\"value\":\"-0500\",\"text\":\"(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima\"},{\"value\":\"-0400\",\"text\":\"(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz\"},{\"value\":\"-0330\",\"text\":\"(GMT -3:30) Newfoundland\"},{\"value\":\"-0300\",\"text\":\"(GMT -3:00) Brazil, Buenos Aires, Georgetown\"},{\"value\":\"-0200\",\"text\":\"(GMT -2:00) Mid-Atlantic\"},{\"value\":\"-0100\",\"text\":\"(GMT -1:00) Azores, Cape Verde Islands\"},{\"value\":\"+0000\",\"text\":\"(GMT) Western Europe Time, London, Lisbon, Casablanca\"},{\"value\":\"+0100\",\"text\":\"(GMT +1:00) Brussels, Copenhagen, Madrid, Paris\"},{\"value\":\"+0200\",\"text\":\"(GMT +2:00) Kaliningrad, South Africa\"},{\"value\":\"+0300\",\"text\":\"(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg\"},{\"value\":\"+0330\",\"text\":\"(GMT +3:30) Tehran\"},{\"value\":\"+0400\",\"text\":\"(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi\"},{\"value\":\"+0430\",\"text\":\"(GMT +4:30) Kabul\"},{\"value\":\"+0500\",\"text\":\"(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent\"},{\"value\":\"+0530\",\"text\":\"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi\"},{\"value\":\"+0545\",\"text\":\"(GMT +5:45) Kathmandu\"},{\"value\":\"+0600\",\"text\":\"(GMT +6:00) Almaty, Dhaka, Colombo\"},{\"value\":\"+0700\",\"text\":\"(GMT +7:00) Thailand\"},{\"value\":\"+0800\",\"text\":\"(GMT +8:00) Beijing, Perth, Singapore, Hong Kong\"},{\"value\":\"+0900\",\"text\":\"(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk\"},{\"value\":\"+0930\",\"text\":\"(GMT +9:30) Adelaide, Darwin\"},{\"value\":\"+1000\",\"text\":\"(GMT +10:00) Eastern Australia, Guam, Vladivostok\"},{\"value\":\"+1100\",\"text\":\"(GMT +11:00) Magadan, Solomon Islands, New Caledonia\"},{\"value\":\"+1200\",\"text\":\"(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka\"}],\"provinces\":[\"กรุงเทพฯ\",\"กระบี่\",\"กาญจนบุรี\",\"กาฬสินธุ์\",\"กำแพงเพชร\",\"ขอนแก่น\",\"จันทบุรี\",\"ฉะเชิงเทรา\",\"ชลบุรี\",\"ชัยนาท\",\"ชัยภูมิ\",\"ชุมพร\",\"เชียงราย\",\"เชียงใหม่\",\"ตรัง\",\"ตราด\",\"ตาก\",\"นครนายก\",\"นครปฐม\",\"นครพนม\",\"นครราชสีมา\",\"นครศรีธรรมราช\",\"นครสวรรค์\",\"นนทบุรี\",\"นราธิวาส\",\"น่าน\",\"บึงกาฬ\",\"บุรีรัมย์\",\"ปทุมธานี\",\"ประจวบคีรีขันธ์\",\"ปราจีนบุรี\",\"ปัตตานี\",\"พะเยา\",\"พังงา\",\"พัทลุง\",\"พิจิตร\",\"พิษณุโลก\",\"เพชรบุรี\",\"เพชรบูรณ์\",\"แพร่\",\"ภูเก็ต\",\"มหาสารคาม\",\"มุกดาหาร\",\"แม่ฮ่องสอน\",\"ยโสธร\",\"ยะลา\",\"ร้อยเอ็ด\",\"ระนอง\",\"ระยอง\",\"ราชบุรี\",\"ลพบุรี\",\"ลำปาง\",\"ลำพูน\",\"เลย\",\"ศรีสะเกษ\",\"สกลนคร\",\"สงขลา\",\"สตูล\",\"สมุทรปราการ\",\"สมุทรสงคราม\",\"สมุทรสาคร\",\"สระแก้ว\",\"สระบุรี\",\"สิงห์บุรี\",\"สุโขทัย\",\"สุพรรณบุรี\",\"สุราษฎร์ธานี\",\"สุรินทร์\",\"หนองคาย\",\"หนองบัวลำภู\",\"อยุธยา\",\"อ่างทอง\",\"อำนาจเจริญ\",\"อุดรธานี\",\"อุตรดิตถ์\",\"อุทัยธานี\",\"อุบลราชธานี\"]}");

/***/ }),

/***/ "./resources/js/pages/drlucky/home/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/drlucky/home/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8c469140&scoped=true& */ "./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& */ "./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8c469140",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/drlucky/home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8c469140&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/drlucky/home/index.vue?vue&type=template&id=8c469140&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c469140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=0f4019f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_0f4019f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/drlucky/home/styles.scss?vue&type=style&index=0&id=8c469140&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_8c469140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);