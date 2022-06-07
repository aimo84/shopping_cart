(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dropdown_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown.json */ "./resources/js/pages/fundtong/resend-email/dropdown.json");
var _dropdown_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dropdown.json */ "./resources/js/pages/fundtong/resend-email/dropdown.json", 1);
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_zodiac__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/zodiac */ "./resources/js/components/zodiac.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/loading */ "./resources/js/components/loading.vue");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_8__["Datetime"],
    'zodiac-element': _components_zodiac__WEBPACK_IMPORTED_MODULE_11__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      dropdown: _dropdown_json__WEBPACK_IMPORTED_MODULE_7__,
      form: {
        birthdate: '',
        birthtime: '',
        timezone: '+0700',
        province: 'กรุงเทพฯ',
        flag_unknown_time: true,
        email: '',
        select_number: '',
        password: ''
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
      cebirthdate: '',
      errors: {
        email: '',
        select_number: '',
        password: ''
      },
      zodiac: false,
      formData: {},
      formButtonDisable: true
    };
  },
  computed: {
    birthdate: function birthdate() {
      var options = {
        calendar: 'buddhist',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var d = new Date(this.date.year + 543, this.date.month, this.date.day + 1);
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
      return "/".concat(this.$parent.isOffline ? 'offline-store' : 'online-store', "/berfuntong-zodiac");
    }
  },
  watch: {
    birthdate: function birthdate() {
      var optionsCE = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var nd = new Date(this.date.year + 543, this.date.month, this.date.day + 1);
      this.cebirthdate = nd.toLocaleDateString('en-GB', optionsCE);
    },
    'date.month': function dateMonth() {
      if (this.date.day <= this.days.length) return;
      this.date.day = 0;
    },
    'date.year': function dateYear() {
      if (this.date.day <= this.days.length) return;
      this.date.day = 0;
    },
    'form.flag_unknown_time': function formFlag_unknown_time(e) {
      if (e) {
        this.form.birthtime = '';
        this.form.timezone = '+0700';
        this.form.province = 'กรุงเทพฯ';
      } else {
        this.$refs.datetime.isOpen = true;
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                _this2.date.year = _this2.currentYear;
                vue_datetime__WEBPACK_IMPORTED_MODULE_8__["Datetime"].methods.cancel = _this2.onDatetimeCancel;
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
      this.form.flag_unknown_time = !this.form.birthtime;
    },
    submit: function submit(e) {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.checkForm()) {
                  _context2.next = 10;
                  break;
                }

                _this3.loading = true;
                _this3.form.birthdate = _this3.cebirthdate;
                _this3.valid.birthtime = _this3.form.flag_unknown_time ? true : _this3.birthtime;

                if (_this3.valid.birthtime) {
                  _context2.next = 6;
                  break;
                }

                throw new Error('invalid-form');

              case 6:
                _this3.formData = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.form), {}, {
                  birthdate: _this3.form.birthdate.replace(/\//g, ''),
                  birthtime: _this3.birthtime,
                  flag_unknown_time: _this3.form.flag_unknown_time,
                  is_thailand: _this3.form.timezone === '+0700',
                  select_number: _this3.form.select_number,
                  email: _this3.form.email,
                  password: _this3.form.password
                });
                if (_this3.formData.timezone !== '+0700') delete _this3.formData.province;
                _context2.next = 10;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["POST_PROPHECY"], _this3.formData).then(function (res) {
                  if (res.status_code === 200) {
                    _this3.zodiac = {
                      ascendant: res.data
                    };
                    _this3.loading = false;
                  } else if (res.status_code === 404) {
                    alert('Wrong Password!!!');
                    _this3.loading = false;
                  } else {
                    alert('Resend Email Fail!! (1)');
                    _this3.loading = false;
                  }
                })["catch"](function (err) {
                  if (err.status_code === 404) {
                    alert('Wrong Password!!!');
                  } else {
                    alert('Resend Email Fail!! (1)');
                  }

                  _this3.loading = false;
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sendEmail: function sendEmail() {
      var _this4 = this;

      if (this.zodiac) {
        this.loading = true;
        this.formData.fortune_funtong = this.zodiac;
        this.formData.vhora_image = this.$refs.zodiac.getBase64();
        this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["POST_VHORA_RESEND_EMAIL"], this.formData).then(function (data) {
          if (data.status_code === 200) {
            _this4.clearForm();

            alert('Resend Email Success!!');
            _this4.loading = false;
          } else {
            alert('Resend Email Fail!! (2)');
            _this4.loading = false;
          }
        })["catch"](function (err) {
          alert('Resend Email Fail!! (3)');
          _this4.loading = false;
        });
      }
    },
    checkForm: function checkForm(e) {
      this.errors = {
        email: '',
        select_number: '',
        password: ''
      };

      if (!this.form.email) {
        this.errors.email = 'กรุณากรอกอีเมล';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'กรุณากรอกอีีเมลให้ถูกต้อง';
      }

      if (!this.form.select_number || !/^[0-9]{9,10}$/.test(this.form.select_number)) {
        this.errors.select_number = 'กรุณากรอกเบอร์โทรศัพท์';
      }

      if (!this.form.password) {
        this.errors.password = 'กรุณากรอกรหัสผ่าน';
      }

      if (!this.errors.email && !this.errors.select_number && !this.errors.password) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    buttonStatus: function buttonStatus(e) {
      if (this.form.password !== '') {
        this.formButtonDisable = false;
      } else {
        this.formButtonDisable = true;
      }
    },
    clearForm: function clearForm() {
      this.form = {
        birthdate: '',
        birthtime: '',
        timezone: '+0700',
        province: 'กรุงเทพฯ',
        flag_unknown_time: true,
        email: '',
        select_number: '',
        password: ''
      };
      this.date = {
        day: 0,
        month: 0,
        year: this.currentYear
      };
      this.formButtonDisable = true;
      this.zodiac = false;
    },
    isNumber: function isNumber(e) {
      e = e || window.event;
      var charCode = e.which ? e.which : e.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      } else {
        return true;
      }
    },
    clearError: function clearError(type) {
      if (type === 'email') {
        this.errors.email = '';
      }

      if (type === 'select_number') {
        this.errors.select_number = '';
      }
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-2c30506c]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.container[data-v-2c30506c] {\n  width: 100%;\n  max-width: 1100px;\n  margin: auto;\n}\n.container .player[data-v-2c30506c] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 2fr 1fr;\n  grid-gap: 4px 4px;\n  margin: 16px auto;\n}\n.container .verify-container[data-v-2c30506c] {\n  background: #fdf5ee;\n  display: grid;\n  grid-gap: 24px;\n  padding: 24px;\n}\n.container .verify-container .title-container[data-v-2c30506c] {\n  font-family: \"TrueBold\";\n  color: #000;\n  text-align: center;\n  line-height: 28px;\n}\n.container .verify-container .title-container .title[data-v-2c30506c] {\n  font-size: 26px;\n}\n.container .verify-container .title-container .title span[data-v-2c30506c] {\n  color: #E63129;\n  font-size: 36px;\n}\n.container .verify-container .title-container .subtitle[data-v-2c30506c] {\n  font-size: 24px;\n}\n.container .verify-container .form-container[data-v-2c30506c] {\n  max-width: 800px;\n  width: 100%;\n  margin: auto;\n  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 8px;\n}\n.container .verify-container .tabs-container[data-v-2c30506c] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 24px;\n  align-items: center;\n  height: 60px;\n  box-shadow: inset 0 -1px 0px 0px #bdbdbd;\n}\n.container .verify-container .tabs-container .tab[data-v-2c30506c] {\n  display: grid;\n  justify-content: flex-start;\n  height: 100%;\n}\n.container .verify-container .tabs-container .tab[data-v-2c30506c]:first-child {\n  justify-content: flex-end;\n}\n.container .verify-container .tabs-container .tab .tab-text[data-v-2c30506c] {\n  display: grid;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n  padding-top: 2px;\n  border-bottom: 2px solid transparent;\n  color: #595959;\n  text-decoration: none;\n}\n.container .verify-container .tabs-container .tab .tab-text.active[data-v-2c30506c] {\n  font-family: \"TrueBold\";\n  color: #FF0000;\n  border-color: #FF0000;\n}\n.container .verify-container form[data-v-2c30506c] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 24px 36px;\n  margin: auto;\n  max-width: 860px;\n  padding: 32px 16px;\n}\n.container .verify-container form[loading] input[data-v-2c30506c],\n.container .verify-container form[loading] select[data-v-2c30506c] {\n  pointer-events: none;\n}\n.container .verify-container form[loading] .button button[data-v-2c30506c] {\n  background: #dedede;\n  color: #979797;\n  cursor: wait;\n}\n.container .verify-container form .input[data-v-2c30506c] {\n  display: grid;\n  grid-gap: 4px;\n  grid-template-rows: auto 1fr;\n}\n.container .verify-container form .input.error > label[data-v-2c30506c] {\n  color: #ff0000;\n}\n.container .verify-container form .input.error input[data-v-2c30506c],\n.container .verify-container form .input.error .datetime-picker[data-v-2c30506c] {\n  border-color: #ff0000;\n  background-color: #FFECEC;\n}\n.container .verify-container form .input.time-input.show-timepicker[data-v-2c30506c] {\n  grid-template-columns: 1fr auto;\n}\n.container .verify-container form .input.time-input .red[data-v-2c30506c] {\n  color: #ff0000;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 20px;\n}\n.container .verify-container form .input.time-input .highlight[data-v-2c30506c] {\n  font-weight: bold;\n  font-style: italic;\n}\n.container .verify-container form .input.time-input .highlight span[data-v-2c30506c] {\n  text-decoration: underline;\n}\n.container .verify-container form .input.time-input .sub-label[data-v-2c30506c] {\n  margin-left: 10px;\n  color: #777777;\n}\n.container .verify-container form .datetime[data-v-2c30506c] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4px 36px;\n}\n.container .verify-container form .datetime .date[data-v-2c30506c] {\n  display: grid;\n  grid-template-columns: 2fr 4fr 3fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-2c30506c] {\n  display: flex;\n  grid-column: 1/-1;\n  align-items: center;\n  justify-content: flex-end;\n  grid-area: b;\n}\n.container .verify-container form .datetime .disable-time-checkbox input[data-v-2c30506c] {\n  margin-right: 8px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-checkbox label[data-v-2c30506c] {\n  font-size: 22px;\n  cursor: pointer;\n}\n.container .verify-container form .datetime .disable-time-label[data-v-2c30506c] {\n  color: #ff0000;\n  font-size: 18px;\n  text-align: right;\n  text-decoration: underline;\n  cursor: pointer;\n  grid-column: 1/-1;\n}\n.container .verify-container form .geo[data-v-2c30506c] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 8px;\n}\n.container .verify-container form .geo.th[data-v-2c30506c] {\n  grid-template-columns: 1fr 1fr;\n  grid-column: 1/-1;\n  grid-gap: 36px;\n}\n.container .verify-container form label[data-v-2c30506c] {\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #333;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] {\n  grid-column: 1/-1;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup > * {\n  font-family: \"TrueBold\";\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup__actions__button {\n  font-size: 24px;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-calendar__month__weekday,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-calendar__month__day,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup__year {\n  font-size: 22px;\n  font-family: \"TrueMedium\";\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item {\n  font-size: 26px;\n  line-height: 20px;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-time-picker__item--selected, .container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-time-picker__item:hover, .container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-year-picker__item--selected, .container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-year-picker__item:hover, .container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-month-picker__item--selected, .container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item.vdatetime-month-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-time-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-year-picker__item:hover,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item.vdatetime-month-picker__item:hover {\n  font-size: 44px;\n  line-height: 36px;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup__title {\n  font-size: 28px;\n  margin: 0;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup__header,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-calendar__month__day--selected > span > span,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-calendar__month__day--selected:hover > span > span {\n  background-color: #ff0000;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-year-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-month-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-time-picker__item--selected,\n.container .verify-container form .datetime-picker[data-v-2c30506c] .vdatetime-popup__actions__button {\n  color: #ff0000;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n  color: #333;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] input::-moz-placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form .datetime-picker[data-v-2c30506c] input::placeholder, .container .verify-container form .datetime-picker[data-v-2c30506c] input[disabled] {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[data-v-2c30506c],\n.container .verify-container form select[data-v-2c30506c],\n.container .verify-container form button[data-v-2c30506c],\n.container .verify-container form .datetime-picker[data-v-2c30506c] {\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 8px;\n  border: 1px solid #F0EBEB;\n  background-color: #F5F5F5;\n  color: #333;\n  padding: 0 12px;\n  outline: none;\n  min-width: 0;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 12px);\n}\n.container .verify-container form input[data-v-2c30506c]::-moz-placeholder, .container .verify-container form select[data-v-2c30506c]::-moz-placeholder, .container .verify-container form button[data-v-2c30506c]::-moz-placeholder, .container .verify-container form .datetime-picker[data-v-2c30506c]::-moz-placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[data-v-2c30506c]::placeholder,\n.container .verify-container form select[data-v-2c30506c]::placeholder,\n.container .verify-container form button[data-v-2c30506c]::placeholder,\n.container .verify-container form .datetime-picker[data-v-2c30506c]::placeholder {\n  font-family: \"TrueMedium\";\n  color: #979797;\n}\n.container .verify-container form input[disabled][data-v-2c30506c], .container .verify-container form input.disabled[data-v-2c30506c],\n.container .verify-container form select[disabled][data-v-2c30506c],\n.container .verify-container form select.disabled[data-v-2c30506c],\n.container .verify-container form button[disabled][data-v-2c30506c],\n.container .verify-container form button.disabled[data-v-2c30506c],\n.container .verify-container form .datetime-picker[disabled][data-v-2c30506c],\n.container .verify-container form .datetime-picker.disabled[data-v-2c30506c] {\n  background-color: #dedede;\n  color: #979797;\n  -webkit-text-fill-color: #949494;\n}\n.container .verify-container form input.date[data-v-2c30506c],\n.container .verify-container form select.date[data-v-2c30506c],\n.container .verify-container form button.date[data-v-2c30506c],\n.container .verify-container form .datetime-picker.date[data-v-2c30506c] {\n  background-image: url(\"/images/drlucky/date.svg\");\n}\n.container .verify-container form input.time[data-v-2c30506c],\n.container .verify-container form select.time[data-v-2c30506c],\n.container .verify-container form button.time[data-v-2c30506c],\n.container .verify-container form .datetime-picker.time[data-v-2c30506c] {\n  background-image: url(\"/images/drlucky/time.svg\");\n}\n.container .verify-container form .dropdown[data-v-2c30506c] {\n  position: relative;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-2c30506c] {\n  pointer-events: none;\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 8px;\n  border: 1px solid #F0EBEB;\n  background-color: #F5F5F5;\n  color: #333;\n  padding: 0 12px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  grid-gap: 4px;\n}\n.container .verify-container form .dropdown .dropdown-label span[data-v-2c30506c] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.container .verify-container form .dropdown .dropdown-label[data-v-2c30506c]:after {\n  content: \"\";\n  width: 11px;\n  height: 6px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDUuNSA1LjVMMTIgMSIgc3Ryb2tlPSIjMjIyMjIzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=\");\n}\n.container .verify-container form .dropdown select[data-v-2c30506c] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  opacity: 0;\n  font-size: 16px;\n  font-family: Arial;\n}\n.container .verify-container form .button[data-v-2c30506c] {\n  display: grid;\n  grid-gap: 8px;\n  justify-content: center;\n  grid-column: 1/-1;\n  text-align: center;\n}\n.container .verify-container form .button .error[data-v-2c30506c] {\n  color: #ff0000;\n}\n.container .verify-container form .button button[data-v-2c30506c] {\n  background-color: #FF0000;\n  border-radius: 6px;\n  cursor: pointer;\n  border: none;\n  color: #fff;\n  padding: 0 32px;\n  height: 50px;\n}\n.container .verify-container form .button button[disabled][data-v-2c30506c] {\n  background-color: #dedede;\n}\n.container .verify-container form .checkbox[data-v-2c30506c] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  grid-gap: 4px;\n  margin-top: 4px;\n}\n.container .verify-container form .checkbox input[data-v-2c30506c],\n.container .verify-container form .checkbox label[data-v-2c30506c] {\n  cursor: pointer;\n}\n.container .verify-container .policy-container[data-v-2c30506c] {\n  font-size: 18px;\n  line-height: 20px;\n  color: #000;\n  text-align: center;\n  max-width: 720px;\n  width: 100%;\n  margin: auto;\n}\n.container .verify-container .policy-container .tnc[data-v-2c30506c] {\n  font-size: 18px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.container .description[data-v-2c30506c] {\n  margin: 16px auto;\n}\n.container .description > img[data-v-2c30506c] {\n  display: none;\n}\n.container .description img[data-v-2c30506c] {\n  width: 100%;\n}\n.container .errors[data-v-2c30506c] {\n  padding-left: 10px;\n}\n.container .errors small[data-v-2c30506c] {\n  color: red;\n}\n@media screen and (max-width: 860px) {\n.container[data-v-2c30506c] {\n    padding: 0;\n}\n.container .player[data-v-2c30506c] {\n    grid-template-columns: 1fr;\n    padding: 0 16px;\n}\n.container .player img[data-v-2c30506c] {\n    display: none;\n}\n.container .verify-container[data-v-2c30506c] {\n    padding: 16px;\n    grid-gap: 16px;\n}\n.container .verify-container .title-container[data-v-2c30506c] {\n    text-align: left;\n}\n.container .verify-container .title-container .title span[data-v-2c30506c] {\n    display: block;\n}\n.container .verify-container form[data-v-2c30506c] {\n    padding: 16px;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n}\n.container .verify-container form .datetime[data-v-2c30506c] {\n    grid-template-columns: 1fr;\n    grid-gap: 16px 12px;\n}\n.container .verify-container form .datetime .disable-time-checkbox[data-v-2c30506c] {\n    margin-top: 4px;\n}\n.container .verify-container form .geo.th[data-v-2c30506c] {\n    grid-gap: 16px;\n}\n.container .description > img[data-v-2c30506c] {\n    display: block;\n}\n}\n@media screen and (max-width: 480px) {\n.container .verify-container .tabs-container[data-v-2c30506c] {\n    grid-gap: 0;\n    font-size: 20px;\n}\n.container .verify-container .tabs-container .tab[data-v-2c30506c],\n.container .verify-container .tabs-container .tab[data-v-2c30506c]:first-child {\n    text-align: center;\n    justify-content: center;\n    line-height: 18px;\n    padding: 0 4px;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      !_vm.loading
        ? _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "verify-container" }, [
              _c("div", { staticClass: "form-container" }, [
                _c("form", { ref: "resendEmailForm" }, [
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
                              _c("span", [_vm._v(_vm._s(_vm.date.year + 543))]),
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
                          "show-timepicker": !_vm.form.flag_unknown_time,
                        },
                      },
                      [
                        _vm.form.flag_unknown_time
                          ? _c(
                              "div",
                              {
                                staticClass: "input time-input",
                                on: {
                                  click: function ($event) {
                                    _vm.form.flag_unknown_time =
                                      !_vm.form.flag_unknown_time
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
                        !_vm.form.flag_unknown_time
                          ? _c("label", { attrs: { for: "time" } }, [
                              _vm._v(
                                "\n                            เวลาเกิด\n                        "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", [
                          !_vm.form.flag_unknown_time
                            ? _c(
                                "span",
                                {
                                  staticClass: "red",
                                  on: {
                                    click: function ($event) {
                                      _vm.form.flag_unknown_time =
                                        !_vm.form.flag_unknown_time
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
                              value: !_vm.form.flag_unknown_time,
                              expression: "!form.flag_unknown_time",
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
                          value: !_vm.form.flag_unknown_time,
                          expression: "!form.flag_unknown_time",
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
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
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
                            _vm._l(_vm.dropdown.timezones, function (tz, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: tz.value } },
                                [_vm._v(_vm._s(tz.text))]
                              )
                            }),
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
                                _c("span", [_vm._v(_vm._s(_vm.form.province))]),
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
                  _c("div", { staticClass: "input" }, [
                    _c("label", [
                      _vm._v(
                        "\n                        อีเมล\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      attrs: { type: "text", name: "email", id: "email" },
                      domProps: { value: _vm.form.email },
                      on: {
                        change: function ($event) {
                          return _vm.clearError("email")
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("div", { staticClass: "errors" }, [
                          _c("small", [
                            _vm._v(" " + _vm._s(_vm.errors.email) + " "),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input" }, [
                    _c("label", [
                      _vm._v(
                        "\n                        เบอร์โทรศัพท์\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.select_number,
                          expression: "form.select_number",
                        },
                      ],
                      attrs: {
                        type: "number",
                        name: "select_number",
                        id: "select_number",
                      },
                      domProps: { value: _vm.form.select_number },
                      on: {
                        change: function ($event) {
                          return _vm.clearError("select_number")
                        },
                        keypress: function ($event) {
                          return _vm.isNumber()
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "select_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.errors.select_number
                      ? _c("div", { staticClass: "errors" }, [
                          _c("small", [
                            _vm._v(
                              " " + _vm._s(_vm.errors.select_number) + " "
                            ),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input" }, [
                    _c("label", [
                      _vm._v(
                        "\n                        รหัสผ่าน\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "password",
                      },
                      domProps: { value: _vm.form.password },
                      on: {
                        keyup: _vm.buttonStatus,
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("div", { staticClass: "errors" }, [
                          _c("small", [
                            _vm._v(" " + _vm._s(_vm.errors.password) + " "),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
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
                        attrs: {
                          id: "search-berfuntong",
                          type: "button",
                          disabled: _vm.formButtonDisable,
                        },
                        on: { click: _vm.submit },
                      },
                      [_vm._v("ส่งอีเมล")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm.zodiac
                  ? _c(
                      "div",
                      [
                        _c("zodiac-element", {
                          ref: "zodiac",
                          attrs: {
                            funtong: _vm.zodiac,
                            showAscendant: true,
                            hidden: "",
                          },
                          on: {
                            "resend-email": function ($event) {
                              return _vm.sendEmail()
                            },
                          },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
              ]),
            ]),
          ])
        : _c("loading-element"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("small", [_vm._v("กรุณาระบุเฉพาะตัวเลขเท่านั้น")])])
  },
]
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

/***/ "./resources/js/pages/fundtong/resend-email/dropdown.json":
/*!****************************************************************!*\
  !*** ./resources/js/pages/fundtong/resend-email/dropdown.json ***!
  \****************************************************************/
/*! exports provided: timezones, provinces, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"timezones\":[{\"value\":\"-1200\",\"text\":\"(GMT -12:00) Eniwetok, Kwajalein\"},{\"value\":\"-1100\",\"text\":\"(GMT -11:00) Midway Island, Samoa\"},{\"value\":\"-1000\",\"text\":\"(GMT -10:00) Hawaii\"},{\"value\":\"-0900\",\"text\":\"(GMT -9:00) Alaska\"},{\"value\":\"-0800\",\"text\":\"(GMT -8:00) Pacific Time (US & Canada)\"},{\"value\":\"-0700\",\"text\":\"(GMT -7:00) Mountain Time (US & Canada)\"},{\"value\":\"-0600\",\"text\":\"(GMT -6:00) Central Time (US & Canada), Mexico City\"},{\"value\":\"-0500\",\"text\":\"(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima\"},{\"value\":\"-0400\",\"text\":\"(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz\"},{\"value\":\"-0330\",\"text\":\"(GMT -3:30) Newfoundland\"},{\"value\":\"-0300\",\"text\":\"(GMT -3:00) Brazil, Buenos Aires, Georgetown\"},{\"value\":\"-0200\",\"text\":\"(GMT -2:00) Mid-Atlantic\"},{\"value\":\"-0100\",\"text\":\"(GMT -1:00) Azores, Cape Verde Islands\"},{\"value\":\"+0000\",\"text\":\"(GMT) Western Europe Time, London, Lisbon, Casablanca\"},{\"value\":\"+0100\",\"text\":\"(GMT +1:00) Brussels, Copenhagen, Madrid, Paris\"},{\"value\":\"+0200\",\"text\":\"(GMT +2:00) Kaliningrad, South Africa\"},{\"value\":\"+0300\",\"text\":\"(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg\"},{\"value\":\"+0330\",\"text\":\"(GMT +3:30) Tehran\"},{\"value\":\"+0400\",\"text\":\"(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi\"},{\"value\":\"+0430\",\"text\":\"(GMT +4:30) Kabul\"},{\"value\":\"+0500\",\"text\":\"(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent\"},{\"value\":\"+0530\",\"text\":\"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi\"},{\"value\":\"+0545\",\"text\":\"(GMT +5:45) Kathmandu\"},{\"value\":\"+0600\",\"text\":\"(GMT +6:00) Almaty, Dhaka, Colombo\"},{\"value\":\"+0700\",\"text\":\"(GMT +7:00) Thailand\"},{\"value\":\"+0800\",\"text\":\"(GMT +8:00) Beijing, Perth, Singapore, Hong Kong\"},{\"value\":\"+0900\",\"text\":\"(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk\"},{\"value\":\"+0930\",\"text\":\"(GMT +9:30) Adelaide, Darwin\"},{\"value\":\"+1000\",\"text\":\"(GMT +10:00) Eastern Australia, Guam, Vladivostok\"},{\"value\":\"+1100\",\"text\":\"(GMT +11:00) Magadan, Solomon Islands, New Caledonia\"},{\"value\":\"+1200\",\"text\":\"(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka\"}],\"provinces\":[\"กรุงเทพฯ\",\"กระบี่\",\"กาญจนบุรี\",\"กาฬสินธุ์\",\"กำแพงเพชร\",\"ขอนแก่น\",\"จันทบุรี\",\"ฉะเชิงเทรา\",\"ชลบุรี\",\"ชัยนาท\",\"ชัยภูมิ\",\"ชุมพร\",\"เชียงราย\",\"เชียงใหม่\",\"ตรัง\",\"ตราด\",\"ตาก\",\"นครนายก\",\"นครปฐม\",\"นครพนม\",\"นครราชสีมา\",\"นครศรีธรรมราช\",\"นครสวรรค์\",\"นนทบุรี\",\"นราธิวาส\",\"น่าน\",\"บึงกาฬ\",\"บุรีรัมย์\",\"ปทุมธานี\",\"ประจวบคีรีขันธ์\",\"ปราจีนบุรี\",\"ปัตตานี\",\"พะเยา\",\"พังงา\",\"พัทลุง\",\"พิจิตร\",\"พิษณุโลก\",\"เพชรบุรี\",\"เพชรบูรณ์\",\"แพร่\",\"ภูเก็ต\",\"มหาสารคาม\",\"มุกดาหาร\",\"แม่ฮ่องสอน\",\"ยโสธร\",\"ยะลา\",\"ร้อยเอ็ด\",\"ระนอง\",\"ระยอง\",\"ราชบุรี\",\"ลพบุรี\",\"ลำปาง\",\"ลำพูน\",\"เลย\",\"ศรีสะเกษ\",\"สกลนคร\",\"สงขลา\",\"สตูล\",\"สมุทรปราการ\",\"สมุทรสงคราม\",\"สมุทรสาคร\",\"สระแก้ว\",\"สระบุรี\",\"สิงห์บุรี\",\"สุโขทัย\",\"สุพรรณบุรี\",\"สุราษฎร์ธานี\",\"สุรินทร์\",\"หนองคาย\",\"หนองบัวลำภู\",\"อยุธยา\",\"อ่างทอง\",\"อำนาจเจริญ\",\"อุดรธานี\",\"อุตรดิตถ์\",\"อุทัยธานี\",\"อุบลราชธานี\"]}");

/***/ }),

/***/ "./resources/js/pages/fundtong/resend-email/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/fundtong/resend-email/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2c30506c&scoped=true& */ "./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& */ "./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c30506c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/fundtong/resend-email/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2c30506c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/fundtong/resend-email/index.vue?vue&type=template&id=2c30506c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c30506c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/fundtong/resend-email/styles.scss?vue&type=style&index=0&id=2c30506c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_styles_scss_vue_type_style_index_0_id_2c30506c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);