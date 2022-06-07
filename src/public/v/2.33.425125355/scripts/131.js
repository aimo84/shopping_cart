(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/form */ "./resources/js/components/form.vue");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _components_terms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/terms */ "./resources/js/components/terms.vue");
/* harmony import */ var _address_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address.json */ "./resources/js/pages/pre2post/address/address.json");
var _address_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./address.json */ "./resources/js/pages/pre2post/address/address.json", 1);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/pre2post/address/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/pre2post/address/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixin.js */ "./resources/js/pages/pre2post/mixin.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_4__["default"],
    'form-element': _components_form__WEBPACK_IMPORTED_MODULE_5__["default"],
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    'terms-element': _components_terms__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixin_js__WEBPACK_IMPORTED_MODULE_11__["Mixins"]],
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_9__,
      Address: _address_json__WEBPACK_IMPORTED_MODULE_8__,
      form: {},
      showFormInvalid: false,
      formValid: true,
      agreeTnc: false,
      addressLoading: true,
      loaded: false
    };
  },
  computed: {
    packages: function packages() {
      return this.$store.state.postpaid["package"].record[0];
    },
    plans: function plans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    address: function address() {
      return this.$store.state.address.address[this.$i18n.locale];
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
    computePostcode: function computePostcode() {
      var _this2 = this;

      return function (city, id) {
        if (!id) return '';
        id = parseFloat(id);
        if (!_this2.address.district[city]) return '';

        var result = _this2.address.district[city].find(function (item) {
          return item.id === id;
        });

        return result.zip_code;
      };
    },
    valid: function valid() {
      return this.formValid && this.agreeTnc;
    }
  },
  watch: {
    'data.billing_addr.province_id': function dataBilling_addrProvince_id(id) {
      if (this.addressLoading) return;
      this.formChanged('province_id', id);
    },
    'data.billing_addr.city_id': function dataBilling_addrCity_id(id) {
      if (this.addressLoading) return;
      this.formChanged('city_id', id);
    },
    'data.billing_addr.district_id': function dataBilling_addrDistrict_id(id) {
      if (this.addressLoading) return;
      this.formChanged('district_id', id);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var requestAddress;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this3.$emit('loading', true);

              if (_this3.data.ekyc_passed) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return _this3.loadData();

            case 5:
              _this3.data.billing_addr = _this3.getAddress();

            case 6:
              requestAddress = [_this3.setAddress('province', _this3.data.billing_addr.country_id, _this3.data.billing_addr), _this3.setAddress('city', _this3.data.billing_addr.province_id, _this3.data.billing_addr)];

              if (_this3.data.billing_addr.city_id) {
                requestAddress.push(_this3.setAddress('district', _this3.data.billing_addr.city_id, _this3.data.billing_addr));
              }

              if (!_this3.data.billing_addr.city_id || !_this3.data.billing_addr.district_id) {
                _this3.data.billing_addr.postcode = '';
              }

              _context.next = 11;
              return Promise.all(requestAddress);

            case 11:
              _this3.addressLoading = false;
              _this3.data.ekyc_passed = true;
              _this3.loaded = true;

              _this3.$emit('loading', false);

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);

              _this3.$router.push({
                name: 'pre2post-noneligible',
                query: {
                  verify_fail: true
                }
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }))();
  },
  methods: {
    showTermsDialog: function showTermsDialog() {
      this.$refs.dialog.open();
    },
    formChanged: function formChanged(type, id) {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(id === '_')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                data = JSON.parse(JSON.stringify(_this4.data.billing_addr));
                _context2.t0 = type;
                _context2.next = _context2.t0 === 'province_id' ? 6 : _context2.t0 === 'city_id' ? 10 : _context2.t0 === 'district_id' ? 14 : 17;
                break;

              case 6:
                _this4.setAddressLoading('city');

                _context2.next = 9;
                return _this4.setAddress('city', id, data);

              case 9:
                return _context2.abrupt("break", 17);

              case 10:
                _this4.setAddressLoading('district');

                _context2.next = 13;
                return _this4.setAddress('district', id, data);

              case 13:
                return _context2.abrupt("break", 17);

              case 14:
                _context2.next = 16;
                return _this4.setPostcode();

              case 16:
                return _context2.abrupt("break", 17);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setAddressLoading: function setAddressLoading(type) {
      var contentId = "".concat(type, "_id");
      this.data.billing_addr[contentId] = '_';
      this.data.billing_addr.postcode = '';
      this.Address.billing_addr[contentId].disabled = true;
      this.Address.billing_addr[contentId].options = [{
        id: '_',
        value: this.$i18n.locale === 'th' ? 'กำลังโหลด ...' : 'Loading ...'
      }];
    },
    fetchAddress: function fetchAddress(type, id) {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var payload, types, params;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {};
                types = {
                  province: 'country_id',
                  city: 'province_id',
                  district: 'city_id'
                };
                payload[types[type]] = id;
                payload.language = _this5.$i18n.locale;
                params = Object.keys(payload).map(function (item) {
                  return "".concat(item, "=").concat(payload[item]);
                }).join('&');
                return _context3.abrupt("return", _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_10__["FETCH_ADDRESS"], {
                  type: type,
                  params: params
                }));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setAddress: function setAddress(type, id, data) {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var content, contentId, options, exist;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this6.formValid = false;
                content = _this6.Address.billing_addr;
                contentId = "".concat(type, "_id");

                if (_this6.address[type][id]) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 6;
                return _this6.fetchAddress(type, id);

              case 6:
                content[contentId].disabled = false;
                content[contentId].options = _this6.computeDropdown(type, id);
                options = content[contentId].options.map(function (option) {
                  return option.id;
                });
                exist = options.includes(parseFloat(data[contentId]));
                _this6.data.billing_addr[contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString();
                _this6.formValid = true;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setPostcode: function setPostcode() {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5() {
        var form;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                form = _this7.data.billing_addr;
                form.postcode = _this7.computePostcode(form.city_id, form.district_id);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setAddressName: function setAddressName() {
      var _this8 = this;

      var address = ['city', 'province', 'district'];
      address.forEach(function (e) {
        var options = _this8.Address.billing_addr["".concat(e, "_id")].options;

        var selected = options.find(function (i) {
          return i.id.toString() === _this8.data.billing_addr["".concat(e, "_id")];
        });
        _this8.data.billing_addr[e] = selected.value;
      });
    },
    next: function next() {
      var _this9 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee6() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this9.$refs.form.checkValidity()) {
                  _context6.next = 4;
                  break;
                }

                window.scrollTo(0, 0);
                _this9.showFormInvalid = true;
                return _context6.abrupt("return");

              case 4:
                _this9.setAddressName();

                _this9.$router.push({
                  name: 'pre2post-order',
                  params: _this9.$route.params,
                  query: _this9.$route.query
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terms-dialog .content {\n  max-height: 85%;\n  max-width: 860px;\n}\n.terms-dialog .content .dialog-content {\n  padding: 36px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-0ef7cd20] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 36px 16px;\n  line-height: 1em;\n}\n.container form[data-v-0ef7cd20] {\n  max-width: 800px;\n  margin: auto;\n}\n.container form.invalid-form .form-container[data-v-0ef7cd20] .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.container form .label[data-v-0ef7cd20] {\n  margin-bottom: 16px;\n  font-size: 28px;\n}\n.container form .billing-form[data-v-0ef7cd20] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 0 16px;\n  width: calc(100% - 48px);\n  margin: auto;\n}\n.container .agreement-grid[data-v-0ef7cd20] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  margin-top: 24px;\n  align-items: center;\n}\n.container .agreement-grid .info-button[data-v-0ef7cd20] {\n  align-items: center;\n  background-color: #f9c947;\n  border-radius: 24px;\n  height: 38px;\n  padding: 8px 20px 8px 8px;\n  display: inline-flex;\n  line-height: 26px;\n  font-size: 22px;\n  cursor: pointer;\n  color: #484848;\n  text-decoration: none;\n}\n.container .agreement-grid .info-button svg[data-v-0ef7cd20] {\n  margin-right: 6px;\n}\n.container .agreement-grid .checkbox[data-v-0ef7cd20] {\n  justify-self: center;\n}\n.container .agreement-grid .checkbox input[data-v-0ef7cd20] {\n  margin-right: 12px;\n}\n.container .agreement-grid .checkbox input[data-v-0ef7cd20], .container .agreement-grid .checkbox label[data-v-0ef7cd20] {\n  cursor: pointer;\n}\n.container .button[data-v-0ef7cd20] {\n  display: grid;\n  place-items: center;\n  margin-top: 24px;\n}\n@media screen and (max-width: 1000px) {\n.container[data-v-0ef7cd20] {\n    padding: 16px;\n}\n.container .agreement-grid[data-v-0ef7cd20] {\n    grid-template-columns: 1fr;\n    justify-items: center;\n    grid-gap: 16px;\n}\n.container form .billing-form[data-v-0ef7cd20] {\n    grid-template-columns: 1fr;\n    width: 100%;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true& ***!
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
  return _vm.loaded
    ? _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "dialog-element",
            {
              ref: "dialog",
              staticClass: "terms-dialog",
              attrs: { "show-close-button": "" },
            },
            [
              _c(
                "div",
                { attrs: { slot: "content" }, slot: "content" },
                [_c("terms-element")],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "form",
            { ref: "form", class: { "invalid-form": _vm.showFormInvalid } },
            [
              _c("div", { staticClass: "label" }, [
                _vm._v(_vm._s(_vm.Locale.billing_title[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("form-element", {
                staticClass: "form-container billing-form",
                attrs: {
                  data: _vm.data.billing_addr,
                  form: _vm.Address.billing_addr,
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "agreement-grid" }, [
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "info-button",
                      on: { click: _vm.showTermsDialog },
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
                              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2\n              12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
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
                _c("div", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.agreeTnc,
                        expression: "agreeTnc",
                      },
                    ],
                    attrs: { type: "checkbox", id: "agreement" },
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
                  _vm._v(" "),
                  _c("label", { attrs: { for: "agreement" } }, [
                    _vm._v(_vm._s(_vm.Locale.agreement[_vm.$i18n.locale])),
                  ]),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "button" },
            [
              _c(
                "button-element",
                {
                  attrs: { type: "button", disabled: !_vm.valid },
                  on: { click: _vm.next },
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.Locale.next[_vm.$i18n.locale]) +
                      "\n    "
                  ),
                ]
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/pre2post/address/address.json":
/*!**********************************************************!*\
  !*** ./resources/js/pages/pre2post/address/address.json ***!
  \**********************************************************/
/*! exports provided: billing_addr, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"billing_addr\":{\"firstname\":{\"label\":{\"th\":\"ชื่อ\",\"en\":\"Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,32}\"},\"lastname\":{\"label\":{\"th\":\"นามสกุล\",\"en\":\"Family Name\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,32}\"},\"address1\":{\"label\":{\"th\":\"ที่อยู่\",\"en\":\"Address\"},\"type\":\"text\",\"required\":true,\"pattern\":\".{1,128}\"},\"address2\":{\"label\":{\"th\":\"ซอย\",\"en\":\"Soi\"},\"type\":\"text\",\"pattern\":\".{1,128}\"},\"province_id\":{\"label\":{\"th\":\"จังหวัด\",\"en\":\"Province\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"city_id\":{\"label\":{\"th\":\"เขต / อำเภอ\",\"en\":\"District\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"district_id\":{\"label\":{\"th\":\"แขวง / ตำบล\",\"en\":\"Sub-district\"},\"type\":\"search-dropdown\",\"options\":[],\"required\":true,\"pattern\":\"[0-9]{1,11}\"},\"postcode\":{\"label\":{\"th\":\"รหัสไปรษณีย์\",\"en\":\"Postal code\"},\"inputmode\":\"numeric\",\"type\":\"number\",\"required\":true,\"min\":\"1\",\"max\":\"9999999999\"},\"phone\":{\"label\":{\"th\":\"เบอร์โทรศัพท์\",\"en\":\"Mobile phone number\"},\"inputmode\":\"tel\",\"type\":\"text\",\"required\":true,\"pattern\":\"[0-9]{9,10}\"},\"email\":{\"label\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"inputmode\":\"email\",\"type\":\"email\",\"required\":true,\"pattern\":\".{1,50}\"}}}");

/***/ }),

/***/ "./resources/js/pages/pre2post/address/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/pre2post/address/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0ef7cd20&scoped=true& */ "./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& */ "./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ef7cd20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pre2post/address/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=style&index=1&id=0ef7cd20&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_0ef7cd20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0ef7cd20&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/address/index.vue?vue&type=template&id=0ef7cd20&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ef7cd20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/pre2post/address/locale.json":
/*!*********************************************************!*\
  !*** ./resources/js/pages/pre2post/address/locale.json ***!
  \*********************************************************/
/*! exports provided: installation_address, back, next, copy_form, billing_title, invoice_title, agreement, invalid_identification, no_timeslot, tnc, ekyc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"installation_address\":{\"en\":\"Installation Address\",\"th\":\"ที่อยู่ในการติดตั้ง\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"copy_form\":{\"th\":\"ที่อยู่ตามในการติดตั้ง\",\"en\":\"Use the same address as installation address\"},\"billing_title\":{\"th\":\"กรอกที่อยู่จัดส่งใบแจ้งหนี้\",\"en\":\"Billing Address\"},\"invoice_title\":{\"th\":\"ต้องการใบเสร็จ / ใบกำกับภาษี\",\"en\":\"Request Tax Invoice / Receipt\"},\"agreement\":{\"th\":\"ข้าพเจ้ายอมรับเงื่อนไขการสั่งซื้อ\",\"en\":\"Accept Term and Condition\"},\"invalid_identification\":{\"th\":\"บัตรประชาชนหรือพาสปอร์ตของคุณไม่ถูกต้อง\",\"en\":\"Invalid citizen ID number / Passport\"},\"no_timeslot\":{\"th\":\"ขณะนี้มีผู้สมัครใช้บริการจำนวนมากในพื้นที่นี้ กรุณาสมัครใหม่ในภายหลัง\",\"en\":\"Time slot is not available in your area due to high number of TrueOnline registration. Please retry again later.\"},\"tnc\":{\"th\":\"เงื่อนไขสั่งซื้อ\",\"en\":\"Term and Condition\"},\"ekyc\":{\"title\":{\"th\":\"อัพโหลดรูปภาพเพื่อแสดงตัวตน\",\"en\":\"Upload your image in a neutral face expression and facing the camera\"},\"face_label\":{\"th\":\"Upload รูปหน้าตรง\",\"en\":\"Upload your image in a neutral face expression and facing the camera\"},\"id_label\":{\"th\":\"Upload รูปบัตรประชาชน\",\"en\":\"Upload your Thai ID card image\"},\"limit\":{\"th\":\"File ไม่เกิน 5MB\",\"en\":\"Maximum size of 5MB\"},\"limit_error\":{\"th\":\"กรุณาอัปโหลดภาพที่เล็กลง\",\"en\":\"Unable to upload. Please add smaller photo.\"}}}");

/***/ }),

/***/ "./resources/js/pages/pre2post/mixin.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/pre2post/mixin.js ***!
  \**********************************************/
/*! exports provided: Mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");





var Mixins = {
  computed: {
    packages: function packages() {
      var _this$$store$state$po, _this$$store$state$po2;

      return (_this$$store$state$po = this.$store.state.postpaid["package"]) === null || _this$$store$state$po === void 0 ? void 0 : (_this$$store$state$po2 = _this$$store$state$po.record) === null || _this$$store$state$po2 === void 0 ? void 0 : _this$$store$state$po2[0];
    },
    plans: function plans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    plan: function plan() {
      var _this = this;

      return this.plans.find(function (e) {
        return e.id === _this.$route.query.pp;
      });
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    preToPostEkycStatus: function preToPostEkycStatus() {
      return this.$store.state.ekyc.preToPostEkycStatus;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return {};
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    }
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.$route.query.hash) {
                  _context.next = 2;
                  break;
                }

                throw new Error();

              case 2:
                if (_this2.$route.query.pp) {
                  _context.next = 4;
                  break;
                }

                throw new Error();

              case 4:
                _context.next = 6;
                return Promise.all([_this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PACKAGE"], _this2.$route.params.nas_code), _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRICE_PLAN"], {
                  section: 'wemall',
                  sim_type: 'postpaid',
                  nas_code: _this2.$route.params.nas_code
                })]);

              case 6:
                if (!(!_this2.packages || !_this2.plan)) {
                  _context.next = 8;
                  break;
                }

                throw new Error();

              case 8:
                _context.next = 10;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_EKYC_STATUS"], _this2.$route.query.hash);

              case 10:
                _context.next = 12;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRE_TO_POST_EKYC"], {
                  is_pre2post_ss: 1,
                  cart_hash: _this2.$route.query.id,
                  answers: _this2.ekycStatus.answers,
                  image_liveness: _this2.ekycStatus.image_liveness,
                  image_front: _this2.ekycStatus.image_front,
                  image_front_face: _this2.ekycStatus.image_front_face
                });

              case 12:
                _context.next = 14;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_4__["VERIFY"], {
                  id: 'pre_to_post',
                  data: {
                    id_number: _this2.ekycAnswers.national_id,
                    service_name: 'truemove',
                    mobile_number: _this2.ekycAnswers.mobile_no,
                    birthday: _this2.ekycAnswers.date_of_birth,
                    priceplan: _this2.plan.code,
                    cart_hash: _this2.$route.query.id,
                    is_pre2post_ss: 1,
                    nas_code: _this2.$route.params.nas_code
                  }
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAddress: function getAddress() {
      return {
        firstname: this.ekycAnswers.first_name,
        lastname: this.ekycAnswers.last_name,
        address1: this.ekycAnswers.home_address,
        address2: '',
        district_id: this.ekycAnswers.home_subdistrict_id.toString(),
        city_id: this.ekycAnswers.home_district_id.toString(),
        province_id: this.ekycAnswers.home_province_id.toString(),
        postcode: this.ekycAnswers.home_zipcode,
        country_id: '209',
        phone: this.ekycAnswers.mobile_no,
        email: this.ekycAnswers.email
      };
    },
    getThaiId: function getThaiId() {
      return this.ekycAnswers.national_id;
    }
  }
};

/***/ })

}]);