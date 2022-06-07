(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/form */ "./resources/js/components/form.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _university_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university-input */ "./resources/js/pages/university/verify/university-input.vue");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms */ "./resources/js/pages/university/verify/terms.vue");
/* harmony import */ var _Content_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content.json */ "./resources/js/pages/university/verify/Content.json");
var _Content_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Content.json */ "./resources/js/pages/university/verify/Content.json", 1);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"],
    'university-input': _university_input__WEBPACK_IMPORTED_MODULE_2__["default"],
    'terms-element': _terms__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {
        cardtype: 'idcard',
        id: '',
        name: '',
        msisdn: '',
        university: {}
      },
      university: '',
      agreement: false,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      Content: _Content_json__WEBPACK_IMPORTED_MODULE_4__,
      showFormInvalid: false
    };
  },
  watch: {
    'data.id': function dataId(value) {
      if (this.data.cardtype === 'idcard') {
        this.setThaiIdInvalid(this.validateCitizenId(value));
      }
    },
    'data.cardtype': function dataCardtype(value) {
      if (value === 'passport') {
        this.setThaiIdInvalid(true);
        this.Content.id = {
          "class": 'id-input',
          inputmode: '',
          type: 'text',
          required: true,
          pattern: '.{1,13}',
          placeholder: {
            th: 'หมายเลขพาสปอร์ต',
            en: 'Enter your passport'
          },
          error: {
            th: 'กรุณากรอกพาสปอร์ตให้ถูกต้อง',
            en: 'Please enter correct passport'
          }
        };
      } else {
        this.Content.id = {
          "class": 'id-input',
          inputmode: 'numeric',
          type: 'text',
          required: true,
          pattern: '[0-9]{13,13}',
          placeholder: {
            th: 'หมายเลขบัตรประจำตัวประชาชน 13 หลัก',
            en: 'Enter your Thai ID (13 Digits).'
          },
          error: {
            th: 'กรุณากรอกบัตรประชาชนให้ถูกต้อง',
            en: 'Please enter correct Thai ID'
          }
        };
      }
    }
  },
  methods: {
    setThaiIdInvalid: function setThaiIdInvalid(valid) {
      var value = valid ? '' : 'invalid';
      this.$refs.form.querySelector('input[name="id"]').setCustomValidity(value);
    },
    selectUniversity: function selectUniversity(value) {
      this.university = value.name;
      this.data.university = value;
    },
    verify: function verify() {
      var validId = this.data.cardtype === 'idcard' ? this.validateCitizenId(this.data.id) : true;

      if (!this.$refs.form.checkValidity() || !validId) {
        this.showFormInvalid = true;
        return;
      }

      this.$parent.verify({
        name: this.data.name,
        msisdn: this.data.msisdn,
        channel: "".concat(this.data.university.prefix, "-web"),
        university: this.data.university.name,
        'certificate-number': this.data.id
      });
    },
    validateUniversity: function validateUniversity(value) {
      if (!value) return;

      if (value !== this.data.university.name) {
        this.university = '';
        this.data.university = {};
      }
    },
    validateCitizenId: function validateCitizenId(id) {
      if (id.length !== 13) {
        return false;
      }

      var sum = 0;

      for (var i = 0; i < 12; i++) {
        sum += parseFloat(id.charAt(i)) * (13 - i);
      }

      if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) {
        return false;
      }

      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./resources/js/pages/university/verify/form.vue");
/* harmony import */ var _checking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checking */ "./resources/js/pages/university/verify/checking.vue");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result */ "./resources/js/pages/university/verify/result.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");


//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    'form-element': _form__WEBPACK_IMPORTED_MODULE_3__["default"],
    'checking-element': _checking__WEBPACK_IMPORTED_MODULE_4__["default"],
    'result-element': _result__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      page: 'loading',
      data: {},
      result: {}
    };
  },
  watch: {
    page: function page() {
      window.scrollTo(0, 0);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["FETCH_UNIVERSITY"]);

            case 2:
              _this.page = 'form';

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    goTo: function goTo(page) {
      this.page = page;
    },
    verify: function verify(data) {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.data = data;
                _this2.page = 'checking';
                _context2.prev = 2;
                _context2.next = 5;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["VERIFY_VLEARN"], data);

              case 5:
                _this2.result = _context2.sent;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                _this2.result = _context2.t0;

              case 11:
                _this2.page = 'result';

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/university/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    data: [Object],
    result: [Object]
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_1__
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    open: function open() {
      this.$refs.dialog.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.escaperegexp */ "./node_modules/lodash.escaperegexp/index.js");
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    value: String,
    placeholder: Object
  },
  data: function data() {
    return {
      opened: false
    };
  },
  computed: {
    filteredList: function filteredList() {
      if (!this.value) return this.$store.state.vlearn.university.slice(0, 15);
      var exp = new RegExp(lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_1___default()(this.value), 'i');
      return this.$store.state.vlearn.university.filter(function (address) {
        return exp.test(address.name);
      }).slice(0, 15);
    }
  },
  methods: {
    toggle: function toggle(opened) {
      this.$emit(opened ? 'focus' : 'blur');
      this.opened = opened;

      if (!this.opened) {
        this.$emit('blur', this.value);
      }
    },
    input: function input(value) {
      this.$emit('input', value);
      this.$refs.input.$forceUpdate();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checking-container[data-v-7345e5d8] {\n  max-width: 1100px;\n  margin: 36px auto 0;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n}\n.checking-container .checking-inner-container[data-v-7345e5d8] {\n  padding: 160px 0;\n}\n.checking-container .checking-inner-container .checking-icon svg[data-v-7345e5d8] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 50px;\n  -webkit-animation: loading-data-v-7345e5d8 2s linear infinite;\n          animation: loading-data-v-7345e5d8 2s linear infinite;\n  fill: #ff0000;\n}\n.checking-container .checking-inner-container .checking-label[data-v-7345e5d8] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n@media screen and (max-width: 1148px) {\n.checking-outer-container[data-v-7345e5d8] {\n    padding-top: 24px;\n}\n.checking-container[data-v-7345e5d8] {\n    margin: 0 24px;\n}\n}\n@-webkit-keyframes loading-data-v-7345e5d8 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-7345e5d8 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cover[data-v-47da5ac2] {\n  width: 100%;\n  display: block;\n  margin-bottom: 30px;\n}\n.verify-container[data-v-47da5ac2] {\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  padding: 16px 24px 40px 24px;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: auto;\n}\n.verify-container .verify-form-container[data-v-47da5ac2] {\n  max-width: 540px;\n  margin: auto;\n}\n.verify-container .title[data-v-47da5ac2] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  margin: 24px 0 16px 0;\n}\n.verify-container .subtitle[data-v-47da5ac2] {\n  margin-bottom: 24px;\n  line-height: 24px;\n  white-space: pre-line;\n}\n.verify-container .form[data-v-47da5ac2] {\n  max-width: 600px;\n  margin: auto;\n}\n.verify-container .form[data-v-47da5ac2] .input_container.radio {\n  margin-bottom: 8px;\n}\n.verify-container .form[data-v-47da5ac2] .input_container.id-input {\n  min-height: 40px;\n}\n.verify-container .form[data-v-47da5ac2] .input {\n  width: 100%;\n}\n.verify-container .form[data-v-47da5ac2].invalid-form .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.verify-container .form[data-v-47da5ac2].invalid-form .input input:invalid ~ .error {\n  display: block;\n}\n.verify-container .form[data-v-47da5ac2] .input input::-moz-placeholder {\n  color: #b2b2b2;\n}\n.verify-container .form[data-v-47da5ac2] .input input::placeholder {\n  color: #b2b2b2;\n}\n.verify-container .radio-container[data-v-47da5ac2] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  width: 100%;\n  text-align: left;\n}\n.verify-container .radio-container input[data-v-47da5ac2],\n.verify-container .radio-container label[data-v-47da5ac2] {\n  cursor: pointer;\n}\n.verify-container .input_container.text[data-v-47da5ac2] {\n  text-align: left;\n  font-size: 20px;\n  margin-bottom: 16px;\n}\n.verify-container .input_container.text label[data-v-47da5ac2] {\n  width: 100%;\n  min-width: 100%;\n  text-align: left;\n  margin-right: 0;\n  margin-bottom: 4px;\n  font-weight: 500;\n}\n.verify-container .input_container.text .input[data-v-47da5ac2] {\n  flex: 1;\n}\n.verify-container .input_container.text .required[data-v-47da5ac2] {\n  color: #fc5c65;\n  font-weight: 600;\n  font-size: 24px;\n}\n.confirm-container[data-v-47da5ac2] {\n  margin-top: 24px;\n  text-align: center;\n  padding: 0 16px;\n}\n.confirm-container .agreement[data-v-47da5ac2] {\n  margin-bottom: 24px;\n}\n.confirm-container .agreement .agreement-label[data-v-47da5ac2] {\n  line-height: 22px;\n  font-size: 22px;\n  cursor: pointer;\n}\n.confirm-container .agreement .agreement-label label[data-v-47da5ac2] {\n  cursor: pointer;\n}\n.confirm-container .agreement .agreement-label .a[data-v-47da5ac2] {\n  color: #ff0000;\n  text-decoration: underline;\n}\n.confirm-container .verify-button-container[data-v-47da5ac2] {\n  display: grid;\n  grid-gap: 8px 20px;\n  max-width: 420px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  margin: 24px auto 0 auto;\n}\n.confirm-container .verify-button-container .button[data-v-47da5ac2] {\n  width: 100%;\n  background-color: #ff0000;\n}\n.confirm-container .verify-button-container .button.back[data-v-47da5ac2] {\n  background-color: #666;\n}\n.confirm-container .verify-button-container .button[disabled][data-v-47da5ac2] {\n  pointer-events: none;\n  background-color: #666;\n}\n.social-banner[data-v-47da5ac2] {\n  padding: 48px 30px 36px 30px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.21);\n  background-color: #e9242b;\n  max-width: 220px;\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  line-height: 24px;\n  position: fixed;\n  right: 0;\n  bottom: 24px;\n  z-index: 1;\n  transition: 150ms right ease;\n}\n.social-banner[hidden][data-v-47da5ac2] {\n  right: -240px;\n  display: block;\n}\n.social-banner .close-btn[data-v-47da5ac2] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  position: absolute;\n  left: 12px;\n  top: 12px;\n  color: #fff;\n  padding: 4px;\n  cursor: pointer;\n}\n.social-banner .close-btn svg[data-v-47da5ac2] {\n  fill: #fff;\n}\n.social-banner .close-btn[data-v-47da5ac2]:hover {\n  background: rgba(255, 255, 255, 0.3137254902);\n}\n.social-banner img[data-v-47da5ac2] {\n  width: 148px;\n  height: 148px;\n  margin-bottom: 15px;\n  border-radius: 8px;\n}\n.social-banner .bold[data-v-47da5ac2] {\n  font-family: \"TrueBold\";\n}\n@media screen and (max-width: 860px) {\n.social-banner[data-v-47da5ac2] {\n    position: relative;\n    top: 24px;\n    padding: 20px;\n    max-width: 400px;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    border-radius: 20px;\n}\n.social-banner[hidden][data-v-47da5ac2] {\n    right: auto;\n    display: flex;\n}\n.social-banner .close-btn[data-v-47da5ac2] {\n    display: none;\n}\n.social-banner img[data-v-47da5ac2] {\n    margin: 0 16px 0 0;\n}\n.social-banner .social-banner-text[data-v-47da5ac2] {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n}\n@media screen and (max-width: 400px) {\n.social-banner[data-v-47da5ac2] {\n    margin: 0 20px;\n    font-size: 20px;\n    line-height: 20px;\n}\n.social-banner img[data-v-47da5ac2] {\n    width: 100px;\n    height: 100px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-1a1131c4] {\n  padding: 16px 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-47d1ffca] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: 24px auto;\n  padding: 76px 24px 50px 24px;\n}\n.result-container .icon[data-v-47d1ffca] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-47d1ffca] {\n  fill: #fff;\n}\n.result-container .icon.success[data-v-47d1ffca] {\n  background-color: #54c74c;\n  box-shadow: 1px 1px 0 #1f9716;\n}\n.result-container .icon.failed[data-v-47d1ffca] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .result-title[data-v-47d1ffca] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  max-width: 600px;\n}\n.result-container .result-title.success[data-v-47d1ffca] {\n  color: #e4a20f;\n}\n.result-container .result-title.failed[data-v-47d1ffca] {\n  color: #ff0000;\n}\n.result-container .privilege-container[data-v-47d1ffca] {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: center;\n  margin: 20px auto;\n}\n.result-container .privilege-container.failed[data-v-47d1ffca] {\n  border: solid 1px #ff0000;\n  background-color: rgba(255, 0, 0, 0.1);\n}\n.result-container .privilege-container .privilege-label[data-v-47d1ffca] {\n  color: #4a4a4a;\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 4px;\n}\n.result-container .privilege-container .privilege-items[data-v-47d1ffca] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #000;\n}\n.result-container .result-button-container[data-v-47d1ffca] {\n  margin-top: 32px;\n  display: flex;\n}\n.result-container .result-button-container .button[data-v-47d1ffca] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-47d1ffca] {\n  background-color: #666;\n}\n@media screen and (max-width: 1148px) {\n.result-outer-container[data-v-47d1ffca] {\n    padding-top: 24px;\n}\n.result-container[data-v-47d1ffca] {\n    margin: 0 auto;\n}\n}\n@media screen and (max-width: 640px) {\n.result-container[data-v-47d1ffca] {\n    padding: 30px 24px 50px 24px;\n}\n.result-container .icon[data-v-47d1ffca] {\n    margin-bottom: 16px;\n}\n.result-container .result-title[data-v-47d1ffca] {\n    font-size: 30px;\n    line-height: 30px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terms-dialog[data-v-77e2200e] .content {\n  max-width: 860px;\n}\n.terms-dialog[data-v-77e2200e] .content .terms {\n  padding: 36px 24px;\n}\n.terms-dialog[data-v-77e2200e] .content .terms .title {\n  text-align: center;\n  font-size: 26px;\n  font-family: \"TrueBold\";\n}\n.terms-dialog[data-v-77e2200e] .content .terms .sub {\n  padding-top: 16px;\n  padding-left: 20px;\n}\n.terms-dialog[data-v-77e2200e] .content .terms a {\n  color: #ff0000;\n}\n.terms-dialog[data-v-77e2200e] .content .terms ol {\n  padding-left: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".adb[data-v-0a7e3d49] {\n  position: relative;\n}\n.adb-s[data-v-0a7e3d49] {\n  position: absolute;\n  top: 40px;\n  right: 0;\n  left: 0;\n  z-index: 3;\n  overflow-y: auto;\n  margin-bottom: 24px;\n  border: 1px solid gray;\n  max-height: 220px;\n  background-color: white;\n  border-radius: 0 0 4px 4px;\n}\n.adb-i[data-v-0a7e3d49] {\n  overflow: hidden;\n  padding: 8px 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  text-align: left;\n}\n.adb-i[data-v-0a7e3d49]:hover {\n  background-color: gray;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/lodash.escaperegexp/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.escaperegexp/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true& ***!
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
      _c("terms-element", { ref: "terms" }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "verify-container" }, [
        _c("div", { staticClass: "verify-form-container" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.Locale.verify_title[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "subtitle" }, [
            _vm._v(_vm._s(_vm.Locale.verify_subtitle[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c(
            "form",
            { ref: "form" },
            [
              _c(
                "form-element",
                {
                  staticClass: "form",
                  class: { "invalid-form": _vm.showFormInvalid },
                  attrs: { data: _vm.data, form: _vm.Content },
                  scopedSlots: _vm._u([
                    {
                      key: "cardtype",
                      fn: function (item) {
                        return [
                          _c("div", { staticClass: "input_container radio" }, [
                            _c("label", [
                              _vm._v(
                                _vm._s(item.data.label[_vm.$i18n.locale]) + ": "
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*"),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "radio-container" }, [
                              _c("div", { staticClass: "radio" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.cardtype,
                                      expression: "data.cardtype",
                                    },
                                  ],
                                  attrs: {
                                    type: "radio",
                                    value: "idcard",
                                    id: "idcard",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.data.cardtype,
                                      "idcard"
                                    ),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.data,
                                        "cardtype",
                                        "idcard"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "idcard" } }, [
                                  _vm._v(
                                    _vm._s(
                                      item.data.value.idcard[_vm.$i18n.locale]
                                    )
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "radio" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.cardtype,
                                      expression: "data.cardtype",
                                    },
                                  ],
                                  attrs: {
                                    type: "radio",
                                    value: "passport",
                                    id: "passport",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.data.cardtype,
                                      "passport"
                                    ),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.data,
                                        "cardtype",
                                        "passport"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "passport" } }, [
                                  _vm._v(
                                    _vm._s(
                                      item.data.value.passport[_vm.$i18n.locale]
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      },
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("template", { slot: "university" }, [
                    _c(
                      "div",
                      { staticClass: "input_container" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.Content.university.label[_vm.$i18n.locale]
                            ) + ": "
                          ),
                          _c("span", { staticClass: "required" }, [
                            _vm._v("*"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("university-input", {
                          staticClass: "input",
                          attrs: {
                            type: "text",
                            placeholder: _vm.Content.university.placeholder,
                          },
                          on: {
                            select: _vm.selectUniversity,
                            blur: _vm.validateUniversity,
                          },
                          model: {
                            value: _vm.university,
                            callback: function ($$v) {
                              _vm.university = $$v
                            },
                            expression: "university",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                2
              ),
            ],
            1
          ),
        ]),
      ]),
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
              _vm._v(_vm._s(_vm.Locale.tnc_1[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "a",
                on: {
                  click: function ($event) {
                    return _vm.$refs.terms.open()
                  },
                },
              },
              [_vm._v(_vm._s(_vm.Locale.tnc_2[_vm.$i18n.locale]))]
            ),
            _vm._v(" "),
            _c("label", { attrs: { for: "agreement" } }, [
              _vm._v(_vm._s(_vm.Locale.tnc_3[_vm.$i18n.locale])),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "verify-button-container" },
          [
            _c(
              "a",
              { attrs: { href: "/online-store" } },
              [
                _c("button-element", { staticClass: "button back" }, [
                  _vm._v(_vm._s(_vm.Locale.backHomepage[_vm.$i18n.locale])),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button-element",
              {
                staticClass: "button",
                attrs: { disabled: !_vm.agreement },
                on: { click: _vm.verify },
              },
              [_vm._v(_vm._s(_vm.Locale.verify[_vm.$i18n.locale]))]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { ref: "social", staticClass: "social-banner" }, [
        _c(
          "div",
          {
            staticClass: "close-btn",
            on: {
              click: function ($event) {
                return _vm.$refs.social.setAttribute("hidden", "")
              },
            },
          },
          [
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
                    d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
                  },
                }),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c("img", {
          attrs: { src: "/images/university/supercooltrueteen.png" },
        }),
        _vm._v(" "),
        _vm._m(1),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("picture", [
      _c("source", {
        attrs: {
          srcset: "/images/university/StirpEDU_sendTMH.jpg",
          media: "(min-width: 640px)",
        },
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "cover",
        attrs: { srcset: "/images/university/StirpEDU_sendTMH.jpg" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-banner-text" }, [
      _c("span", [_vm._v("ติดตามสิทธิพิเศษ")]),
      _vm._v(" "),
      _c("span", [_vm._v("สำหรับวัยทีนที่แท้ทรู ")]),
      _vm._v(" "),
      _c("span", [_vm._v("ได้ที่ Line")]),
      _vm._v(" "),
      _c("span", { staticClass: "bold" }, [_vm._v("@supercooltrueteens")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true& ***!
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
    { staticClass: "container" },
    [
      _vm.page === "loading" ? _c("loading-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "form" ? _c("form-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "checking" ? _c("checking-element") : _vm._e(),
      _vm._v(" "),
      _vm.page === "result"
        ? _c("result-element", {
            attrs: { data: _vm.data, result: _vm.result },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _vm._v(_vm._s(_vm.result.message[_vm.$i18n.locale])),
          ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "privilege-container",
          class: { failed: _vm.result.message },
        },
        [
          _c("div", { staticClass: "privilege-label" }, [
            _vm._v("Truemove H Number"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "privilege-items" }, [
            _vm._v(_vm._s(_vm.data.msisdn)),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "result-button-container" },
        [
          _vm.result.is_pass
            ? _c(
                "a",
                { attrs: { href: "/online-store" } },
                [
                  _c("button-element", { staticClass: "button next" }, [
                    _vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale])),
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
                      return _vm.$parent.goTo("form")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true& ***!
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
    "dialog-element",
    {
      ref: "dialog",
      staticClass: "terms-dialog",
      attrs: { "show-close-button": "" },
    },
    [
      _c(
        "div",
        { staticClass: "terms", attrs: { slot: "content" }, slot: "content" },
        [
          _c("div", { staticClass: "title" }, [_vm._v("ข้อกำหนดและเงื่อนไข")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "สิทธิพิเศษในการเข้าใช้งานอินเทอร์เน็ตการเรียนทางไกล DLTV (Distance Learning Television) ผ่านแอปพลิเคชั่นทรูไอดี และ เวปไซค์ DLTV และ เวปไซค์สถาบันการศึกษา โดยไม่มีค่าใช้จ่าย เป็นระยะเวลา 90 วัน (นับตั้งแต่วันที่สมัครและได้รับการยืนยันผ่าน SMS) นี้ สำหรับผู้ใช้บริการที่ใช้บริการเลขหมายโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช ของบริษัท ทรูมูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด (“บริษัท”) ระบบรายเดือน หรือ ระบบเติมเงิน"
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "สิทธิพิเศษตามข้อ 1 สำหรับผู้ใช้บริการที่มีสถานะเป็นนักเรียน นิสิต-นักศึกษา หรือบุคลากรทางการศึกษาของสถาบันการศึกษาโดยมีรายละเอียดของเว็บไซต์ที่สามารถใช้บริการได้ปรากฏตามตารางรายชื่อสถานศึกษาด้านล่างนี้โดยผู้ใช้บริการต้องคงสถานะของการใช้บริการเลขหมายโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช ของบริษัท ในระบบรายเดือน หรือ ระบบเติมเงินได้เป็นปกติ (Active)"
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "ผู้ใช้บริการสามารถขอรับสิทธิได้ในระหว่างวันที่ 25 มีนาคม 2563 ถึงวันที่ 31 กรกฎาคม 2563  หรือจนกว่าจะมีการแจ้งเปลี่ยนแปลงเป็นอย่างอื่น"
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sub" }, [
            _c("div", [_vm._v("เงื่อนไขการรับสิทธิ")]),
            _vm._v(" "),
            _c("ol", [
              _c("li", [
                _vm._v("ผู้ใช้บริการจะต้องกดรับสิทธิพิเศษดังกล่าว ผ่านทาง "),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "https://www.truecorp.co.th",
                      target: "_blank",
                      rel: "noreferrer noopener",
                    },
                  },
                  [_vm._v("www.truecorp.co.th หรือ")]
                ),
                _vm._v(
                  " ทรูไอดีแอปพลิเคชั่น และต้องได้รับการยืนยันเพื่อใช้บริการเว็บไซต์โดยไม่มีค่าใช้จ่ายเพิ่มเติม ผ่าน SMS ตามเลขหมายที่ได้ลงทะเบียนไว้แล้วเท่านั้น"
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "ผู้ใช้บริการจะได้รับสิทธิใช้อินเตอร์เน็ตไม่จำกัดสำหรับใช้บริการกลุ่มเว็บไซต์เพื่อการศึกษาที่ความเร็วสูงสุด 4 เมกกะบิตต่อวินาที (Mbps)(ความเร็วในการใช้บริการ4G/3G/EDGE/GPRS ขึ้นอยู่กับพื้นที่ให้บริการและจำนวนผู้ใช้บริการข้อมูลในพื้นที่ ณ เวลานั้น รวมถึงลักษณะของการใช้งาน ซึ่งอาจมีความเร็วต่ำกว่าที่ระบุในแพ็กเกจ)"
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "ผู้ใช้บริการสามารถใช้บริการกลุ่มเว็บไซต์เพื่อการศึกษารวมทั้งสิ้น 4,490 เว็บไซต์ ที่ลงท้ายด้วย .ac.th และ .edu เท่านั้น ในกรณีที่ ผู้ใช้บริการใช้เว็บไซต์อื่นหรือลิงค์อื่นที่ปรากฏบนหน้ากลุ่มเว็บไซต์เพื่อการศึกษาที่ไม่ได้ลงท้ายด้วย .ac.th และ .edu ผู้ใช้บริการจะต้องชำระค่าใช้บริการเพิ่มเติม (ถ้ามี) ตามอัตราที่ระบุในแพ็กเกจที่ผู้ใช้บริการเลือกใช้งานอยู่ ณ ขณะนั้น หรือหากในแพ็กเกจที่เลือกใช้ ไม่ได้ระบุไว้ ให้คิดค่าบริการตามเงื่อนไขที่บริษัทกำหนด โดยสามารถตรวจสอบรายชื่อของสถานศึกษาที่เข้าร่วมได้ โดย "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "/files/university/University_URL_website.pdf",
                      download: "",
                    },
                  },
                  [_vm._v("Download จาก PDF file")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "ผู้ใช้บริการสามารถเรียนการศึกษาทางไกลผ่านทางทรูไอดีแอปพลิเคชั่นได้ทุกวัน ตั้งแต่เวลา 06:00-18:00 น. โดยสามารถตรวจสอบรายชื่อของสถานศึกษาที่เข้าร่วมได้ โดย "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "/files/university/รายชื่อสถานศึกษา V2.pdf",
                      download: "",
                    },
                  },
                  [_vm._v("Download จาก PDF file")]
                ),
              ]),
            ]),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "adb" },
      [
        _c("input-element", {
          ref: "input",
          attrs: {
            type: "text",
            value: _vm.value,
            placeholder: _vm.placeholder,
            required: "",
          },
          on: {
            input: _vm.input,
            focus: function ($event) {
              return _vm.toggle(true)
            },
            blur: function ($event) {
              return _vm.toggle(false)
            },
          },
        }),
        _vm._v(" "),
        _vm.opened && _vm.filteredList.length
          ? _c(
              "div",
              { staticClass: "adb-s" },
              _vm._l(_vm.filteredList, function (university, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "adb-i",
                    on: {
                      mousedown: function ($event) {
                        return _vm.$emit("select", university)
                      },
                    },
                  },
                  [_vm._v("\n        " + _vm._s(university.name) + "\n      ")]
                )
              }),
              0
            )
          : _vm._e(),
      ],
      1
    ),
  ])
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

/***/ "./resources/js/pages/university/verify/Content.json":
/*!***********************************************************!*\
  !*** ./resources/js/pages/university/verify/Content.json ***!
  \***********************************************************/
/*! exports provided: cardtype, id, name, university, msisdn, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cardtype\":{\"id\":\"cardtype\",\"label\":{\"th\":\"กรุณาเลือกและกรอกหมายเลขบัตรประชาชน หรือ พาสปอร์ต\",\"en\":\"Please select and insert your ID card or passport\"},\"value\":{\"idcard\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"ID Card\"},\"passport\":{\"th\":\"พาสปอร์ต\",\"en\":\"Passport\"}}},\"id\":{\"class\":\"id-input\",\"type\":\"text\",\"required\":true,\"pattern\":\"[0-9]{13,13}\",\"placeholder\":{\"th\":\"หมายเลขบัตรประจำตัวประชาชน 13 หลัก\",\"en\":\"Enter your Thai ID (13 Digits).\"},\"error\":{\"th\":\"กรุณากรอกบัตรประชาชนให้ถูกต้อง\",\"en\":\"Please enter correct Thai ID\"}},\"name\":{\"label\":{\"th\":\"ชื่อ-นามสกุล\",\"en\":\"Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,100}\",\"placeholder\":{\"th\":\"กรอกชื่อ - นามสกุล ของคุณ\",\"en\":\"Enter your Name and Surname\"},\"error\":{\"th\":\"กรุณากรอกชื่อ-นามสกุล\",\"en\":\"Please input full name\"}},\"university\":{\"id\":\"university\",\"label\":{\"th\":\"สถานศึกษา\",\"en\":\"School/College/University\"},\"placeholder\":{\"th\":\"เลือกสถานศึกษาของคุณ\",\"en\":\"Choose your School/College/University\"}},\"msisdn\":{\"label\":{\"th\":\"หมายเลขทรูมูฟ เอช\",\"en\":\"Truemove H number\"},\"placeholder\":{\"th\":\"กรอกหมายเลขทรูมูฟ เอช\",\"en\":\"Enter your existing Truemove H mobile number.\"},\"inputmode\":\"tel\",\"type\":\"text\",\"required\":true,\"pattern\":\"[0-9]{10,10}\",\"error\":{\"th\":\"กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง\",\"en\":\"Please enter a valid phone number\"}}}");

/***/ }),

/***/ "./resources/js/pages/university/verify/checking.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/university/verify/checking.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checking.vue?vue&type=template&id=7345e5d8&scoped=true& */ "./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true&");
/* harmony import */ var _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7345e5d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/checking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=style&index=0&id=7345e5d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_style_index_0_id_7345e5d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checking.vue?vue&type=template&id=7345e5d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/checking.vue?vue&type=template&id=7345e5d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checking_vue_vue_type_template_id_7345e5d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/university/verify/form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/university/verify/form.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=47da5ac2&scoped=true& */ "./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47da5ac2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=style&index=0&id=47da5ac2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_47da5ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=47da5ac2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/form.vue?vue&type=template&id=47da5ac2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_47da5ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/university/verify/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/university/verify/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a1131c4&scoped=true& */ "./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a1131c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=style&index=0&id=1a1131c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a1131c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a1131c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/index.vue?vue&type=template&id=1a1131c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a1131c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/university/verify/locale.json":
/*!**********************************************************!*\
  !*** ./resources/js/pages/university/verify/locale.json ***!
  \**********************************************************/
/*! exports provided: verify_title, verify_subtitle, tnc_1, tnc_2, tnc_3, result_success, verify, back, backHomepage, next, checking, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"verify_title\":{\"th\":\"กรุณากรอกข้อมูลเพื่อรับเน็ตฟรี 3 เดือน\",\"en\":\"Please fill your information to get 3-month free data\"},\"verify_subtitle\":{\"th\":\"1. สิทธิพิเศษเข้าเว็ปไซต์สถาบันการศึกษา ที่ลงท้ายด้วย .ac.th  และ  .edu \\n 2. เรียนการศึกษาทางไกลผ่าน True ID application ช่วงเวลา 06:00-18:00 น.\",\"en\":\"1. Privilege for accessing educational websites which end with .ac.th and .edu \\n 2. Distance Learning service on True ID application from 6 a.m. to 6 p.m.\"},\"tnc_1\":{\"en\":\"I have read and agree to the\",\"th\":\"ข้าพเจ้าได้อ่านและยอมรับ\"},\"tnc_2\":{\"en\":\"Terms and Conditions\",\"th\":\"เงื่อนไขของบริการ\"},\"tnc_3\":{\"en\":\"for the above mentioned service\",\"th\":\"ดังที่ได้กล่าวด้านบนแล้ว\"},\"result_success\":{\"en\":\"The system is processing your request please wait until receiving SMS confirmation\",\"th\":\"ระบบกำลังทำรายการ กรุณารอรับ SMS ยืนยัน\"},\"verify\":{\"en\":\"Submit\",\"th\":\"รับสิทธิ์\"},\"back\":{\"en\":\"Back\",\"th\":\"ย้อนกลับ\"},\"backHomepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"next\":{\"en\":\"Next\",\"th\":\"ต่อไป\"},\"checking\":{\"en\":\"Checking ...\",\"th\":\"กำลังตรวจสอบ ...\"}}");

/***/ }),

/***/ "./resources/js/pages/university/verify/result.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/university/verify/result.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=47d1ffca&scoped=true& */ "./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47d1ffca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=style&index=0&id=47d1ffca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_47d1ffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=template&id=47d1ffca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/result.vue?vue&type=template&id=47d1ffca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_47d1ffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/university/verify/terms.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/university/verify/terms.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.vue?vue&type=template&id=77e2200e&scoped=true& */ "./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true&");
/* harmony import */ var _terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77e2200e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/terms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./terms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=style&index=0&id=77e2200e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_77e2200e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./terms.vue?vue&type=template&id=77e2200e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/terms.vue?vue&type=template&id=77e2200e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_template_id_77e2200e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/university/verify/university-input.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/university/verify/university-input.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-input.vue?vue&type=template&id=0a7e3d49&scoped=true& */ "./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true&");
/* harmony import */ var _university_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-input.vue?vue&type=script&lang=js& */ "./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& */ "./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _university_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a7e3d49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/university/verify/university-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./university-input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=style&index=0&id=0a7e3d49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_style_index_0_id_0a7e3d49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./university-input.vue?vue&type=template&id=0a7e3d49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/university/verify/university-input.vue?vue&type=template&id=0a7e3d49&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_university_input_vue_vue_type_template_id_0a7e3d49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);