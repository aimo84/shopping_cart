(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/form */ "./resources/js/components/form.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _address_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./address.json */ "./resources/js/pages/trueonline/address/address.json");
var _address_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./address.json */ "./resources/js/pages/trueonline/address/address.json", 1);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/trueonline/address/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/trueonline/address/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @utils/image */ "./resources/js/utils/image.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_6__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_7__["default"],
    'form-element': _components_form__WEBPACK_IMPORTED_MODULE_8__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_9__["default"],
    'vuejs-datepicker': vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    data: Object,
    loading: Boolean,
    lang: String,
    token: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_11__,
      Address: _address_json__WEBPACK_IMPORTED_MODULE_10__,
      form: {},
      showFormInvalid: false,
      formValid: true,
      agreeTnc: false,
      addressLoading: true,
      timeslotLoading: true,
      timeslotError: '',
      disabledDates: {
        to: new Date(1903, 0, 1),
        from: new Date()
      },
      ekycError: {
        upload_picture: false,
        upload_id_card: false
      }
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.trueonline.tolProduct.data;
    },
    address: function address() {
      return this.$store.state.address.address[this.lang || this.$i18n.locale];
    },
    computeDropdown: function computeDropdown() {
      var _this = this;

      return function (type, id) {
        return _this.address[type][id].map(function (item) {
          return {
            id: item.id,
            value: item.name
          };
        }).sort(function (a, b) {
          return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
        });
      };
    },
    computePostcode: function computePostcode(city, id) {
      var _this2 = this;

      return function (city, id) {
        id = parseFloat(id);
        if (!_this2.address.district[city]) return '';

        var result = _this2.address.district[city].find(function (item) {
          return item.id === id;
        });

        return result.zip_code;
      };
    },
    valid: function valid() {
      var ekyc = this.data.ekyc.upload_picture && this.data.ekyc.upload_id_card;
      var timeslot = this.data.instl_addr.installation_time.includes(';');
      return ekyc && timeslot && this.formValid && this.agreeTnc;
    }
  },
  watch: {
    'data.instl_addr.identificationType': function dataInstl_addrIdentificationType(value) {
      this.timeslotError = '';
      this.data.instl_addr.identification = '';
      this.data.instl_addr.installation_time = '_';
      var label = value === 'I' ? {
        en: 'Enter your Thai ID (13 Digits)',
        th: 'กรอกหมายเลขบัตรประชาชน'
      } : {
        en: 'Enter your Passport',
        th: 'กรอกหมายเลขพาสปอร์ต'
      };
      this.Address.instl_addr.identification.label = label;
      this.Address.instl_addr.installation_time.options = {
        th: [{
          id: '_',
          value: 'กรุณากรอกหมายเลขบัตรประชาชนก่อน'
        }],
        en: [{
          id: '_',
          value: 'Please enter your passport no./Thai ID first'
        }]
      };
    },
    'data.invoice_addr.province_id': function dataInvoice_addrProvince_id(id) {
      if (this.addressLoading) return;
      this.formChanged('invoice_addr', 'province_id', id);
    },
    'data.invoice_addr.city_id': function dataInvoice_addrCity_id(id) {
      if (this.addressLoading) return;
      this.formChanged('invoice_addr', 'city_id', id);
    },
    'data.invoice_addr.district_id': function dataInvoice_addrDistrict_id(id) {
      if (this.addressLoading) return;
      this.formChanged('invoice_addr', 'district_id', id);
    },
    'data.billing_addr.province_id': function dataBilling_addrProvince_id(id) {
      if (this.addressLoading) return;
      this.formChanged('billing_addr', 'province_id', id);
    },
    'data.billing_addr.city_id': function dataBilling_addrCity_id(id) {
      if (this.addressLoading) return;
      this.formChanged('billing_addr', 'city_id', id);
    },
    'data.billing_addr.district_id': function dataBilling_addrDistrict_id(id) {
      if (this.addressLoading) return;
      this.formChanged('billing_addr', 'district_id', id);
    },
    'loading': function loading(value) {
      if (!value) {
        Object(_utils_addon__WEBPACK_IMPORTED_MODULE_14__["loggerAddon"])({
          type: 'TOL',
          event: 'TOL user address',
          status: 'visit',
          tolProductData: [this.product.contract_code, this.product.entry_fee, this.product.media, this.product.service_code],
          tolPrice: this.product.price,
          tolInvoice: this.product.invoice_tol,
          tolEntryFee: this.product.tol_entry_fee
        });
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([_this3.setAddress('invoice_addr', 'province', _this3.data.invoice_addr.country_id, _this3.data.invoice_addr), _this3.setAddress('invoice_addr', 'city', _this3.data.invoice_addr.province_id, _this3.data.invoice_addr), _this3.setAddress('invoice_addr', 'district', _this3.data.invoice_addr.city_id, _this3.data.invoice_addr)]);

            case 2:
              _context.next = 4;
              return Promise.all([_this3.setAddress('billing_addr', 'province', _this3.data.billing_addr.country_id, _this3.data.billing_addr), _this3.setAddress('billing_addr', 'city', _this3.data.billing_addr.province_id, _this3.data.billing_addr), _this3.setAddress('billing_addr', 'district', _this3.data.billing_addr.city_id, _this3.data.billing_addr)]);

            case 4:
              _this3.addressLoading = false;

              if (!_this3.loading) {
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_14__["loggerAddon"])({
                  type: 'TOL',
                  event: 'TOL user address',
                  status: 'visit',
                  tolProductData: [_this3.product.contract_code, _this3.product.entry_fee, _this3.product.media, _this3.product.service_code],
                  tolPrice: _this3.product.price,
                  tolInvoice: _this3.product.invoice_tol,
                  tolEntryFee: _this3.product.tol_entry_fee
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fileChanged: function fileChanged(event, id) {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var file, output, base64;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.ekycError[id] = false;

                if (!(event.target.files && event.target.files[0])) {
                  _context2.next = 25;
                  break;
                }

                file = event.target.files[0];
                event.target.value = '';

                if (!(file.size <= 5000000)) {
                  _context2.next = 23;
                  break;
                }

                if (!(file.size > 200000)) {
                  _context2.next = 17;
                  break;
                }

                _this4.data.ekyc[id] = 'loading';
                _context2.next = 9;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_13__["forceCompressImage"])(file);

              case 9:
                output = _context2.sent;

                if (output) {
                  _context2.next = 14;
                  break;
                }

                _this4.ekycError[id] = true;
                _this4.data.ekyc[id] = false;
                return _context2.abrupt("return");

              case 14:
                _this4.data.ekyc[id] = output;
                _context2.next = 21;
                break;

              case 17:
                _context2.next = 19;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_13__["toBase64"])(file);

              case 19:
                base64 = _context2.sent;
                _this4.data.ekyc[id] = base64;

              case 21:
                _context2.next = 25;
                break;

              case 23:
                _this4.ekycError[id] = true;
                _this4.data.ekyc[id] = false;

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
    },
    computeDate: function computeDate(date) {
      var lang = this.$i18n.locale === 'th' ? 'th-TH' : 'en-MY';
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString(lang, options);
    },
    fetchTimeslot: function fetchTimeslot() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var identification, isThaiId, result, options, e;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                identification = _this5.data.instl_addr.identification;
                _this5.timeslotError = '';
                _this5.timeslotLoading = true;
                _this5.Address.instl_addr.identificationType.disabled = true;
                _this5.Address.instl_addr.identification.disabled = true;
                _this5.Address.instl_addr.installation_time.disabled = true;
                _this5.Address.instl_addr.installation_time.options = [{
                  id: '_',
                  value: _this5.$i18n.locale === 'th' ? 'กำลังโหลด ...' : 'Loading ...'
                }];
                _this5.data.instl_addr.installation_time = '_';

                if (identification) {
                  _context3.next = 11;
                  break;
                }

                throw new Error('invalid-identification');

              case 11:
                isThaiId = _this5.data.instl_addr.identificationType === 'I';

                if (!(isThaiId && !_this5.validateCitizenId(identification))) {
                  _context3.next = 14;
                  break;
                }

                throw new Error('invalid-identification');

              case 14:
                _context3.next = 16;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_TOL_TIMESLOT"], {
                  correlationId: _this5.token.correlationId,
                  certificateId: _this5.token.certificateId,
                  _identity: _this5.token._identity,
                  id_number: identification
                });

              case 16:
                result = _context3.sent;
                options = result.timeSlotList.filter(function (e) {
                  var cap = e.installationCapacity.split('/');
                  return parseInt(cap[0]) > 0;
                }).map(function (e) {
                  return {
                    id: "".concat(e.appointmentDate, ";").concat(e.timeSlot),
                    value: "".concat(_this5.computeDate(e.appointmentDate), " ").concat(e.timeSlot)
                  };
                });

                if (!(options.length <= 0)) {
                  _context3.next = 20;
                  break;
                }

                throw new Error('no-timeslot');

              case 20:
                _this5.data.instl_addr.installation_time = options[0].id;
                _this5.Address.instl_addr.installation_time.options = options;
                _this5.Address.instl_addr.identificationType.disabled = false;
                _this5.Address.instl_addr.identification.disabled = false;
                _this5.Address.instl_addr.installation_time.disabled = false;
                _this5.timeslotLoading = false;
                _context3.next = 39;
                break;

              case 28:
                _context3.prev = 28;
                _context3.t0 = _context3["catch"](0);
                e = _context3.t0;

                if (e.message === 'invalid-identification') {
                  e.message = _this5.Locale.invalid_identification;
                }

                if (e.message === 'no-timeslot') {
                  e.message = _this5.Locale.no_timeslot;
                }

                _this5.timeslotLoading = true;
                _this5.Address.instl_addr.identificationType.disabled = false;
                _this5.Address.instl_addr.identification.disabled = false;
                _this5.Address.instl_addr.installation_time.disabled = true;
                _this5.Address.instl_addr.installation_time.options = [{
                  id: '_',
                  value: (e === null || e === void 0 ? void 0 : e.message[_this5.$i18n.locale]) || 'ERR'
                }];
                _this5.timeslotError = (e === null || e === void 0 ? void 0 : e.message[_this5.$i18n.locale]) || 'ERR';

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 28]]);
      }))();
    },
    formChanged: function formChanged(form, type, id) {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(id === '_')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                data = JSON.parse(JSON.stringify(_this6.data[form]));
                _context4.t0 = type;
                _context4.next = _context4.t0 === 'province_id' ? 6 : _context4.t0 === 'city_id' ? 10 : _context4.t0 === 'district_id' ? 14 : 17;
                break;

              case 6:
                _this6.setAddressLoading(form, 'city');

                _context4.next = 9;
                return _this6.setAddress(form, 'city', id, data);

              case 9:
                return _context4.abrupt("break", 17);

              case 10:
                _this6.setAddressLoading(form, 'district');

                _context4.next = 13;
                return _this6.setAddress(form, 'district', id, data);

              case 13:
                return _context4.abrupt("break", 17);

              case 14:
                _context4.next = 16;
                return _this6.setPostcode(form);

              case 16:
                return _context4.abrupt("break", 17);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setAddressLoading: function setAddressLoading(form, type) {
      var contentId = "".concat(type, "_id");
      this.data[form][contentId] = '_';
      this.data[form].postcode = '';
      this.Address[form][contentId].disabled = true;
      this.Address[form][contentId].options = [{
        id: '_',
        value: this.$i18n.locale === 'th' ? 'กำลังโหลด ...' : 'Loading ...'
      }];
    },
    fetchAddress: function fetchAddress(type, id) {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5() {
        var payload, types, params;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                payload = {};
                types = {
                  province: 'country_id',
                  city: 'province_id',
                  district: 'city_id'
                };
                payload[types[type]] = id;
                payload.language = _this7.lang || _this7.$i18n.locale;
                params = Object.keys(payload).map(function (item) {
                  return "".concat(item, "=").concat(payload[item]);
                }).join('&');
                return _context5.abrupt("return", _this7.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_ADDRESS"], {
                  type: type,
                  params: params
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setAddress: function setAddress(form, type, id, data) {
      var _this8 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee6() {
        var content, contentId, options, exist;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this8.formValid = false;
                content = _this8.Address[form];
                contentId = "".concat(type, "_id");

                if (_this8.address[type][id]) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 6;
                return _this8.fetchAddress(type, id);

              case 6:
                content[contentId].disabled = form === 'instl_addr' || false;
                content[contentId].options = _this8.computeDropdown(type, id);
                options = content[contentId].options.map(function (option) {
                  return option.id;
                });
                exist = options.includes(parseFloat(data[contentId]));
                _this8.data[form][contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString();
                _this8.formValid = true;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    setPostcode: function setPostcode(name) {
      var _this9 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee7() {
        var form;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                form = _this9.data[name];
                form.postcode = _this9.computePostcode(form.city_id, form.district_id);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    setAddressName: function setAddressName(f) {
      var _this10 = this;

      var address = ['city', 'province', 'district'];
      address.forEach(function (e) {
        var options = _this10.Address[f]["".concat(e, "_id")].options;

        var selected = options.find(function (i) {
          return i.id.toString() === _this10.data[f]["".concat(e, "_id")];
        });
        _this10.data[f][e] = selected.value;
      });
    },
    copyForm: function copyForm(form) {
      this.setAddressName(form);
      if (!this.data["copy_".concat(form)]) return;
      var addr = this.data.instl_addr;
      this.data[form] = {
        name: addr.firstname,
        lastname: addr.lastname,
        houseNo: addr.HOUSE_NO,
        moo: addr.MOO,
        soi: addr.SOI,
        streetName: addr.STREET,
        district_id: '1',
        city_id: '1',
        province_id: '1',
        country_id: '209',
        postcode: addr.ZIP_CODE,
        city: addr.DISTRICT,
        province: addr.PROVINCE,
        district: addr.SUB_DISTRICT
      };
    },
    save: function save() {
      var _this11 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee8() {
        var date;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (_this11.$refs.form.checkValidity()) {
                  _context8.next = 4;
                  break;
                }

                window.scrollTo(0, 0);
                _this11.showFormInvalid = true;
                return _context8.abrupt("return");

              case 4:
                _this11.showFormInvalid = false;

                _this11.copyForm('invoice_addr');

                _this11.copyForm('billing_addr');

                date = new Date(_this11.data.instl_addr.birthDate).setHours(0, 0, 0, 0);
                _this11.data.instl_addr.birthDate = new Date(date);
                _this11.data.address_form_submitted = true;
                Object(_utils_addon__WEBPACK_IMPORTED_MODULE_14__["loggerAddon"])({
                  type: 'TOL',
                  event: 'TOL user address',
                  status: 'verify',
                  tolProductData: [_this11.product.contract_code, _this11.product.entry_fee, _this11.product.media, _this11.product.service_code],
                  tolPrice: _this11.product.price,
                  tolInvoice: _this11.product.invoice_tol,
                  tolEntryFee: _this11.product.tol_entry_fee,
                  tolUserAddress: [_this11.data.billing_addr.name, _this11.data.billing_addr.lastname, _this11.data.billing_addr.houseNo, _this11.data.billing_addr.soi, _this11.data.billing_addr.streetName, _this11.data.billing_addr.district, _this11.data.billing_addr.city, _this11.data.billing_addr.province, _this11.data.billing_addr.postcode]
                });

                _this11.$router.push("/trueonline/order/".concat(_this11.$route.params.id));

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vdp-datepicker__calendar {\n  font-size: 1.2em;\n}\n.info-button {\n  color: #484848;\n  text-decoration: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".address-container[data-v-64d8fab2] {\n  padding: 30px;\n}\n.address-container .address-inner-container[data-v-64d8fab2] {\n  margin: 0 auto;\n}\n.address-container .address-title[data-v-64d8fab2] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  margin-bottom: 18px;\n  color: #000;\n  text-align: center;\n}\n.address-container .forms[data-v-64d8fab2] {\n  display: grid;\n  grid-gap: 48px;\n  margin-bottom: 24px;\n}\n.address-container .form-label[data-v-64d8fab2] {\n  color: #000;\n  font-size: 30px;\n  line-height: 27px;\n}\n.address-container .form-label label[data-v-64d8fab2],\n.address-container .form-label-action label[data-v-64d8fab2] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.address-container .form-label label input[data-v-64d8fab2],\n.address-container .form-label-action label input[data-v-64d8fab2] {\n  margin-right: 8px;\n}\n.address-container .form-container[data-v-64d8fab2] {\n  max-width: 920px;\n  margin: 8px auto;\n}\n.address-container .form-container[data-v-64d8fab2] label {\n  line-height: 27px;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #4a4a4a;\n}\n.address-container .form-container[data-v-64d8fab2] input {\n  background-color: #fff;\n  border-radius: 8px;\n  border: 1px solid #000;\n  font-family: \"TrueBold\";\n  font-size: 24px;\n}\n.address-container .form-container[data-v-64d8fab2] input::-moz-placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-64d8fab2] input::placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-64d8fab2] input[disabled] {\n  border-color: #cccccc;\n}\n.address-container .form-container[data-v-64d8fab2] .error {\n  margin-top: 8px;\n  color: #ff0000;\n}\n.address-container .forms.invalid-form .form-container[data-v-64d8fab2] .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.address-container .installation-form[data-v-64d8fab2] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px 20px;\n}\n.address-container .installation-form[data-v-64d8fab2] .datepicker {\n  width: 100%;\n}\n.address-container .installation-form[data-v-64d8fab2] .datepicker input {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n}\n.address-container .invoice-container[data-v-64d8fab2] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 12px;\n}\n.address-container .invoice-container .customer[data-v-64d8fab2] {\n  justify-self: flex-end;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 12px;\n}\n.address-container .ekyc-container[data-v-64d8fab2] {\n  text-align: center;\n  line-height: 24px;\n  margin: 36px 0;\n}\n.address-container .ekyc-container .title[data-v-64d8fab2] {\n  font-family: \"TrueMedium\";\n  color: #000;\n  margin-bottom: 24px;\n  font-size: 30px;\n  line-height: 30px;\n}\n.address-container .ekyc-container .button-container[data-v-64d8fab2] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  grid-gap: 48px;\n  max-width: 420px;\n  margin: auto;\n}\n.address-container .ekyc-container .button-container .ekyc[data-v-64d8fab2] {\n  color: #31474f;\n}\n.address-container .ekyc-container .button-container .ekyc button[data-v-64d8fab2] {\n  background-color: #fffcfc;\n  border-radius: 20px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  border: none;\n  padding-bottom: 100%;\n  position: relative;\n  width: 100%;\n}\n.address-container .ekyc-container .button-container .ekyc button svg[data-v-64d8fab2],\n.address-container .ekyc-container .button-container .ekyc button img[data-v-64d8fab2] {\n  width: 70%;\n  height: 70%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.address-container .ekyc-container .button-container .ekyc button .done[data-v-64d8fab2] {\n  background-color: #e4a20f;\n  border-radius: 50%;\n  fill: #fff;\n  padding: 36px;\n}\n.address-container .ekyc-container .button-container .ekyc button .loading[data-v-64d8fab2] {\n  margin: auto;\n  border-radius: 100%;\n  border: 6px solid #e4a20f;\n  border-bottom-color: transparent;\n  height: 64px;\n  width: 64px;\n  background: 0 0 !important;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-animation: loading-data-v-64d8fab2 0.9s linear infinite;\n          animation: loading-data-v-64d8fab2 0.9s linear infinite;\n}\n.address-container .ekyc-container .button-container .ekyc .label[data-v-64d8fab2] {\n  margin-top: 12px;\n}\n.address-container .ekyc-container .button-container .ekyc .sublabel[data-v-64d8fab2] {\n  opacity: 0.3;\n}\n.address-container .ekyc-container .button-container .ekyc .error[data-v-64d8fab2] {\n  color: #ff0000;\n}\n.address-container .agreement-container[data-v-64d8fab2] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 12px;\n  font-size: 24px;\n  line-height: 35px;\n  color: #666;\n  padding-top: 24px;\n  max-width: 920px;\n  margin: auto;\n  align-items: center;\n}\n.address-container .agreement-container .info-button[data-v-64d8fab2] {\n  align-items: center;\n  background-color: #f9c947;\n  border-radius: 24px;\n  height: 38px;\n  padding: 8px 20px 8px 8px;\n  display: inline-flex;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: \"TrueMedium\";\n  cursor: pointer;\n}\n.address-container .agreement-container .info-button svg[data-v-64d8fab2] {\n  margin-right: 6px;\n}\n.address-container .agreement-container .agreement[data-v-64d8fab2] {\n  text-align: center;\n}\n.address-container .agreement-container .agreement span[data-v-64d8fab2] {\n  font-family: \"TrueBold\";\n}\n.address-container .agreement-container .agreement label[data-v-64d8fab2] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.address-container .agreement-container .agreement input[data-v-64d8fab2] {\n  margin-right: 8px;\n}\n.address-container .save-button-container[data-v-64d8fab2] {\n  margin-top: 36px;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 200px 200px;\n  grid-gap: 16px;\n  justify-content: center;\n}\n.address-container .save-button-container .button[data-v-64d8fab2] {\n  background: #ff0000;\n}\n.address-container .save-button-container .button[disabled][data-v-64d8fab2] {\n  background: #9e9e9e;\n}\n.address-container .save-button-container .button.back[data-v-64d8fab2] {\n  background: #666;\n}\n@media screen and (max-width: 860px) {\n.address-container[data-v-64d8fab2] {\n    grid-template-columns: 1fr;\n    grid-gap: 4px;\n    padding: 0;\n}\n.address-container .installation-form[data-v-64d8fab2] {\n    grid-template-columns: 1fr;\n    grid-gap: 0;\n}\n.address-container .invoice-container[data-v-64d8fab2] {\n    grid-template-columns: 1fr;\n}\n.address-container .invoice-container .customer[data-v-64d8fab2] {\n    grid-template-columns: 1fr;\n    justify-self: flex-start;\n    grid-gap: 0;\n}\n.address-container .form-container[data-v-64d8fab2] {\n    margin: 12px auto 24px auto;\n}\n.address-container .form-container[data-v-64d8fab2] label {\n    font-size: 20px;\n}\n.address-container .address-title[data-v-64d8fab2] {\n    font-size: 24px;\n    line-height: 30px;\n}\n.address-container .form-label[data-v-64d8fab2] {\n    font-size: 26px;\n}\n.address-container .ekyc-container .button-container[data-v-64d8fab2] {\n    grid-gap: 24px;\n}\n.address-container .save-button-container[data-v-64d8fab2] {\n    grid-template-columns: 200px;\n}\n.address-container .agreement-container[data-v-64d8fab2] {\n    line-height: 20px;\n    font-size: 20px;\n    grid-template-columns: 1fr;\n    text-align: center;\n    grid-gap: 24px;\n}\n.address-container .agreement-container[data-v-64d8fab2] > :nth-child(3) {\n    display: none;\n}\n.address-container .agreement-container label[data-v-64d8fab2] {\n    display: block;\n}\n}\n@-webkit-keyframes loading-data-v-64d8fab2 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-64d8fab2 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true& ***!
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
  return _c(
    "div",
    [
      _vm.loading || _vm.addressLoading
        ? _c("loading-element")
        : _c("div", { staticClass: "address-container" }, [
            _c("div", { staticClass: "address-inner-container" }, [
              _c(
                "form",
                {
                  ref: "form",
                  staticClass: "forms",
                  class: { "invalid-form": _vm.showFormInvalid },
                },
                [
                  _c(
                    "div",
                    { staticClass: "form" },
                    [
                      _c("div", { staticClass: "form-label" }, [
                        _vm._v(
                          _vm._s(
                            _vm.Locale.installation_address[_vm.$i18n.locale]
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "form-element",
                        {
                          staticClass: "form-container installation-form",
                          attrs: {
                            data: _vm.data.instl_addr,
                            form: _vm.Address.instl_addr,
                          },
                        },
                        [
                          _c("template", { slot: "birthDate" }, [
                            _c(
                              "div",
                              { staticClass: "input_container" },
                              [
                                _c("label", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.Address.instl_addr.birthDate.label[
                                          _vm.$i18n.locale
                                        ]
                                      ) +
                                      ":\n                  "
                                  ),
                                  _c("span", { staticClass: "required" }, [
                                    _vm._v("*"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("vuejs-datepicker", {
                                  staticClass: "datepicker",
                                  attrs: {
                                    "disabled-dates": _vm.disabledDates,
                                  },
                                  model: {
                                    value: _vm.data.instl_addr.birthDate,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.data.instl_addr,
                                        "birthDate",
                                        $$v
                                      )
                                    },
                                    expression: "data.instl_addr.birthDate",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("template", { slot: "identification" }, [
                            _c(
                              "div",
                              { staticClass: "input_container" },
                              [
                                _c("label", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.Address.instl_addr.identification
                                          .label[_vm.$i18n.locale]
                                      ) +
                                      ":\n                  "
                                  ),
                                  _c("span", { staticClass: "required" }, [
                                    _vm._v("*"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("input-element", {
                                  attrs: {
                                    disabled:
                                      _vm.Address.instl_addr.identification
                                        .disabled,
                                    type: _vm.Address.instl_addr.identification
                                      .type,
                                    required:
                                      _vm.Address.instl_addr.identification
                                        .required,
                                    pattern:
                                      _vm.Address.instl_addr.identification
                                        .pattern,
                                  },
                                  on: { change: _vm.fetchTimeslot },
                                  model: {
                                    value: _vm.data.instl_addr.identification,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.data.instl_addr,
                                        "identification",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "data.instl_addr.identification",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.timeslotError
                                  ? _c("div", { staticClass: "error" }, [
                                      _vm._v(_vm._s(_vm.timeslotError)),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ]),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ekyc-container" }, [
                        _c("div", { staticClass: "title" }, [
                          _vm._v(
                            _vm._s(_vm.Locale.ekyc.title[_vm.$i18n.locale])
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "button-container" }, [
                          _c("div", { staticClass: "ekyc" }, [
                            _c("input", {
                              ref: "pictureInput",
                              attrs: {
                                accept: "image/*",
                                type: "file",
                                hidden: "",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.fileChanged(
                                    $event,
                                    "upload_picture"
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                attrs: {
                                  type: "button",
                                  disabled:
                                    _vm.data.ekyc.upload_picture === "loading",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$refs.pictureInput.click()
                                  },
                                },
                              },
                              [
                                _vm.data.ekyc.upload_picture === "loading"
                                  ? _c("div", { staticClass: "loading" })
                                  : _vm.data.ekyc.upload_picture
                                  ? [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "done",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M0 0h24v24H0V0z",
                                              fill: "none",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d: "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  : _c("img", {
                                      attrs: {
                                        src: "/images/icons/upload_picture.svg",
                                      },
                                    }),
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "label" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.Locale.ekyc.face_label[_vm.$i18n.locale]
                                ) + " *"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "sublabel" }, [
                              _vm._v(
                                _vm._s(_vm.Locale.ekyc.limit[_vm.$i18n.locale])
                              ),
                            ]),
                            _vm._v(" "),
                            _vm.ekycError.upload_picture
                              ? _c("div", { staticClass: "error" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.Locale.ekyc.limit_error[
                                        _vm.$i18n.locale
                                      ]
                                    )
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "ekyc" }, [
                            _c("input", {
                              ref: "idCardInput",
                              attrs: {
                                accept: "image/*",
                                type: "file",
                                hidden: "",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.fileChanged(
                                    $event,
                                    "upload_id_card"
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                attrs: {
                                  type: "button",
                                  disabled:
                                    _vm.data.ekyc.upload_id_card === "loading",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$refs.idCardInput.click()
                                  },
                                },
                              },
                              [
                                _vm.data.ekyc.upload_id_card === "loading"
                                  ? _c("div", { staticClass: "loading" })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.data.ekyc.upload_id_card
                                  ? [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "done",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M0 0h24v24H0V0z",
                                              fill: "none",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d: "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  : _c("img", {
                                      attrs: {
                                        src: "/images/icons/upload_id_card.svg",
                                      },
                                    }),
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "label" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.Locale.ekyc.id_label[_vm.$i18n.locale]
                                ) + " *"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "sublabel" }, [
                              _vm._v(
                                _vm._s(_vm.Locale.ekyc.limit[_vm.$i18n.locale])
                              ),
                            ]),
                            _vm._v(" "),
                            _vm.ekycError.upload_id_card
                              ? _c("div", { staticClass: "error" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.Locale.ekyc.limit_error[
                                        _vm.$i18n.locale
                                      ]
                                    )
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "agreement-container" }, [
                _c("div"),
                _vm._v(" "),
                _c("div", { staticClass: "agreement" }, [
                  _c(
                    "a",
                    {
                      staticClass: "info-button",
                      attrs: {
                        href: "/files/trueonline-terms.pdf",
                        target: "_blank",
                      },
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
                          _c("path", {
                            attrs: { d: "M0 0h24v24H0z", fill: "none" },
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2\n                12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.Locale.tnc[_vm.$i18n.locale])),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div"),
                _vm._v(" "),
                _c("div"),
                _vm._v(" "),
                _c("div", { staticClass: "agreement" }, [
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
                      "\n            " +
                        _vm._s(_vm.Locale.agreement[_vm.$i18n.locale]) +
                        "\n          "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div"),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "save-button-container" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: "/online-store?trueonline=true",
                        id: "tol-address-back",
                      },
                    },
                    [
                      _c("button-element", { staticClass: "button back" }, [
                        _vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale])),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button-element",
                    {
                      staticClass: "button",
                      attrs: { id: "tol-address-next", disabled: !_vm.valid },
                      on: { click: _vm.save },
                    },
                    [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
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

/***/ "./resources/js/pages/trueonline/address/address.json":
/*!************************************************************!*\
  !*** ./resources/js/pages/trueonline/address/address.json ***!
  \************************************************************/
/*! exports provided: instl_addr, invoice_addr, billing_addr, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"instl_addr\":{\"firstname\":{\"label\":{\"th\":\"ชื่อ\",\"en\":\"Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,32}\"},\"lastname\":{\"label\":{\"th\":\"นามสกุล\",\"en\":\"Family Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,32}\"},\"HOUSE_NO\":{\"label\":{\"th\":\"บ้านเลขที่\",\"en\":\"House Number\"},\"type\":\"text\",\"disabled\":true},\"MOO\":{\"label\":{\"th\":\"หมู่\",\"en\":\"Moo\"},\"type\":\"text\",\"disabled\":true},\"STREET\":{\"label\":{\"th\":\"ถนน\",\"en\":\"Street Name\"},\"type\":\"text\",\"disabled\":true},\"SOI\":{\"label\":{\"th\":\"ซอย\",\"en\":\"Soi\"},\"type\":\"text\",\"disabled\":true},\"PROVINCE\":{\"label\":{\"th\":\"จังหวัด\",\"en\":\"Province\"},\"type\":\"text\",\"disabled\":true},\"DISTRICT\":{\"label\":{\"th\":\"เขต / อำเภอ\",\"en\":\"District\"},\"type\":\"text\",\"disabled\":true},\"SUB_DISTRICT\":{\"label\":{\"th\":\"แขวง / ตำบล\",\"en\":\"Sub-district\"},\"type\":\"text\",\"disabled\":true},\"ZIP_CODE\":{\"label\":{\"th\":\"รหัสไปรษณีย์\",\"en\":\"Postal Code\"},\"type\":\"number\",\"disabled\":true},\"phone\":{\"label\":{\"th\":\"เบอร์โทรศัพท์\",\"en\":\"Mobile phone number\"},\"inputmode\":\"tel\",\"type\":\"text\",\"required\":true,\"pattern\":\"[0-9]{9,10}\"},\"email\":{\"label\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"inputmode\":\"email\",\"type\":\"email\",\"required\":true,\"pattern\":\".{1,50}\"},\"birthDate\":{\"id\":\"birthDate\",\"label\":{\"th\":\"วันเดือนปีเกิด\",\"en\":\"Birthday\"},\"type\":\"text\",\"required\":true},\"gender\":{\"label\":{\"th\":\"เพศ\",\"en\":\"Gender\"},\"type\":\"dropdown\",\"options\":{\"th\":[{\"id\":\"M\",\"value\":\"ชาย\"},{\"id\":\"F\",\"value\":\"หญิง\"}],\"en\":[{\"id\":\"M\",\"value\":\"Male\"},{\"id\":\"F\",\"value\":\"Female\"}]},\"required\":true},\"points\":{\"label\":{\"th\":\"จำนวนจุดที่ติดตั้ง\",\"en\":\"Installation Point\"},\"type\":\"dropdown\",\"options\":[{\"id\":\"1\",\"value\":\"1\"}],\"required\":true},\"identificationType\":{\"label\":{\"th\":\"เลือกบัตรประชาชน หรือ Passport\",\"en\":\"Thai ID/Passsport\"},\"type\":\"dropdown\",\"options\":{\"th\":[{\"id\":\"I\",\"value\":\"บัตรประชาชน\"},{\"id\":\"P\",\"value\":\"หมายเลขพาสปอร์ต\"}],\"en\":[{\"id\":\"I\",\"value\":\"Thai ID\"},{\"id\":\"P\",\"value\":\"Passport Number\"}]},\"required\":true},\"identification\":{\"id\":\"identification\",\"label\":{\"th\":\"กรอกหมายเลขบัตรประชาชน\",\"en\":\"Enter your Thai ID (13 Digits)\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,32}\",\"disabled\":false},\"installation_time\":{\"label\":{\"th\":\"เวลาในการติดตั้ง\",\"en\":\"Installation Date\"},\"type\":\"dropdown\",\"options\":{\"th\":[{\"id\":\"_\",\"value\":\"กรุณากรอกหมายเลขบัตรประชาชนก่อน\"}],\"en\":[{\"id\":\"_\",\"value\":\"Please enter your passport no./Thai ID first\"}]},\"required\":true,\"pattern\":\"[0-9]{1,11}\",\"disabled\":true}},\"invoice_addr\":{\"name\":{\"label\":{\"th\":\"ชื่อ\",\"en\":\"Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,128}\"},\"lastname\":{\"label\":{\"th\":\"นามสกุล\",\"en\":\"Family Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,128}\"},\"houseNo\":{\"label\":{\"th\":\"บ้านเลขที่\",\"en\":\"House Number\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"moo\":{\"label\":{\"th\":\"หมู่\",\"en\":\"Moo\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"soi\":{\"label\":{\"th\":\"ซอย\",\"en\":\"Soi\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"streetName\":{\"label\":{\"th\":\"ถนน\",\"en\":\"Street Name\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"province_id\":{\"label\":{\"th\":\"จังหวัด\",\"en\":\"Province\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"city_id\":{\"label\":{\"th\":\"เขต / อำเภอ\",\"en\":\"District\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"district_id\":{\"label\":{\"th\":\"แขวง / ตำบล\",\"en\":\"Sub-district\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"postcode\":{\"label\":{\"th\":\"รหัสไปรษณีย์\",\"en\":\"Postal Code\"},\"inputmode\":\"numeric\",\"type\":\"number\",\"disabled\":true,\"required\":true,\"min\":\"1\",\"max\":\"9999999999\",\"placeholder\":{\"th\":\"กรอกรหัสไปรษณีย์\",\"en\":\"Enter postal code\"}}},\"billing_addr\":{\"name\":{\"label\":{\"th\":\"ชื่อ\",\"en\":\"Name\"},\"type\":\"text\",\"disabled\":false,\"pattern\":\".{1,32}\",\"required\":true},\"lastname\":{\"label\":{\"th\":\"นามสกุล\",\"en\":\"Family name\"},\"type\":\"text\",\"disabled\":false,\"pattern\":\".{1,32}\",\"required\":true},\"houseNo\":{\"label\":{\"th\":\"บ้านเลขที่\",\"en\":\"House Number\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"moo\":{\"label\":{\"th\":\"หมู่\",\"en\":\"Moo\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"soi\":{\"label\":{\"th\":\"ซอย\",\"en\":\"Soi\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"streetName\":{\"label\":{\"th\":\"ถนน\",\"en\":\"Street Name\"},\"type\":\"text\",\"disabled\":false,\"required\":true,\"pattern\":\".{1,128}\"},\"province_id\":{\"label\":{\"th\":\"จังหวัด\",\"en\":\"Province\"},\"type\":\"search-dropdown\",\"options\":[],\"disabled\":false,\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"city_id\":{\"label\":{\"th\":\"เขต / อำเภอ\",\"en\":\"District\"},\"type\":\"search-dropdown\",\"options\":[],\"disabled\":false,\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"district_id\":{\"label\":{\"th\":\"แขวง / ตำบล\",\"en\":\"Sub-district\"},\"type\":\"search-dropdown\",\"options\":[],\"disabled\":false,\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"postcode\":{\"label\":{\"th\":\"รหัสไปรษณีย์\",\"en\":\"Postal code\"},\"inputmode\":\"numeric\",\"type\":\"number\",\"disabled\":true,\"required\":true,\"min\":\"1\",\"max\":\"9999999999\"}}}");

/***/ }),

/***/ "./resources/js/pages/trueonline/address/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/trueonline/address/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=64d8fab2&scoped=true& */ "./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& */ "./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64d8fab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trueonline/address/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=64d8fab2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/address/index.vue?vue&type=template&id=64d8fab2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_64d8fab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trueonline/address/locale.json":
/*!***********************************************************!*\
  !*** ./resources/js/pages/trueonline/address/locale.json ***!
  \***********************************************************/
/*! exports provided: installation_address, back, next, copy_form, billing_title, invoice_title, agreement, invalid_identification, no_timeslot, tnc, ekyc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"installation_address\":{\"en\":\"Installation Address\",\"th\":\"ที่อยู่ในการติดตั้ง\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"copy_form\":{\"th\":\"ที่อยู่ตามในการติดตั้ง\",\"en\":\"Use the same address as installation address\"},\"billing_title\":{\"th\":\"กรอกที่อยู่จัดส่งใบแจ้งหนี้\",\"en\":\"Billing Address\"},\"invoice_title\":{\"th\":\"ต้องการใบเสร็จ / ใบกำกับภาษี\",\"en\":\"Request Tax Invoice / Receipt\"},\"agreement\":{\"th\":\"ข้าพเจ้ายอมรับเงื่อนไขการสั่งซื้อ\",\"en\":\"Accept Term and Condition\"},\"invalid_identification\":{\"th\":\"บัตรประชาชนหรือพาสปอร์ตของคุณไม่ถูกต้อง\",\"en\":\"Invalid citizen ID number / Passport\"},\"no_timeslot\":{\"th\":\"ขณะนี้มีผู้สมัครใช้บริการจำนวนมากในพื้นที่นี้ กรุณาสมัครใหม่ในภายหลัง\",\"en\":\"Time slot is not available in your area due to high number of TrueOnline registration. Please retry again later.\"},\"tnc\":{\"th\":\"เงื่อนไขสั่งซื้อ\",\"en\":\"Term and Condition\"},\"ekyc\":{\"title\":{\"th\":\"อัพโหลดรูปภาพเพื่อแสดงตัวตน\",\"en\":\"Upload your image in a neutral face expression and facing the camera\"},\"face_label\":{\"th\":\"Upload รูปหน้าตรง\",\"en\":\"Upload your image in a neutral face expression and facing the camera\"},\"id_label\":{\"th\":\"Upload รูปบัตรประชาชน\",\"en\":\"Upload your Thai ID card image\"},\"limit\":{\"th\":\"File ไม่เกิน 5MB\",\"en\":\"Maximum size of 5MB\"},\"limit_error\":{\"th\":\"กรุณาอัปโหลดภาพที่เล็กลง\",\"en\":\"Unable to upload. Please add smaller photo.\"}}}");

/***/ }),

/***/ "./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/address/style.scss?vue&type=style&index=1&id=64d8fab2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_64d8fab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ }),

/***/ "./resources/js/utils/image.js":
/*!*************************************!*\
  !*** ./resources/js/utils/image.js ***!
  \*************************************/
/*! exports provided: toBase64, compressImage, forceCompressImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return toBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCompressImage", function() { return forceCompressImage; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);



function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result.split(',')[1]);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}
function compressImage(file) {
  var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      var img = new Image();

      img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var width = img.width;
        var height = img.height;
        var max = 500;
        var ratio = Math.min(max / width, max / height);
        width = width * ratio;
        height = height * ratio;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };

      img.src = reader.result;
    };

    reader.onerror = function (error) {
      return reject(error);
    };

    reader.readAsDataURL(file);
  });
}
function forceCompressImage(_x) {
  return _forceCompressImage.apply(this, arguments);
}

function _forceCompressImage() {
  _forceCompressImage = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(file) {
    var quality,
        limit,
        output,
        temp,
        fileSize,
        _args = arguments;
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            quality = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0.8;
            limit = _args.length > 2 ? _args[2] : undefined;
            _context.prev = 2;
            _context.next = 5;
            return compressImage(file, quality);

          case 5:
            output = _context.sent;
            temp = output.split(',')[1];
            fileSize = temp.length * (3 / 4);

            if (!(fileSize > limit)) {
              _context.next = 10;
              break;
            }

            throw new Error();

          case 10:
            return _context.abrupt("return", temp);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            if (!(quality - 0.05 <= 0.05)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return");

          case 17:
            _context.next = 19;
            return forceCompressImage(file, quality - 0.05, limit);

          case 19:
            return _context.abrupt("return", _context.sent);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _forceCompressImage.apply(this, arguments);
}

/***/ })

}]);