(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sections/postpaid-address */ "./resources/js/sections/postpaid-address/index.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'postpaid-address': _sections_postpaid_address__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['setCustomEkyc', 'ekycAnswer', 'data'],
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_2__,
      agreeTnc: false,
      agreeCancel: false,
      formValid: true
    };
  },
  computed: {
    valid: function valid() {
      return this.formValid && this.agreeTnc && this.agreeCancel;
    },
    isMnpOneStep: function isMnpOneStep() {
      return this.data.bundle.bundle.campaign_mnp_type === 'one_step';
    },
    isMnpSharePlan: function isMnpSharePlan() {
      return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify';
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      return (this.isMnpOneStep || this.isMnpSharePlan) && skip;
    }
  },
  methods: {
    save: function save() {
      var postpaidAddress = this.$refs.postpaidAddress;

      if (!postpaidAddress.checkValidity()) {
        window.scrollTo(0, 0);
        postpaidAddress.showFormInvalid = true;
        return;
      }

      this.prefillShippingAddress(postpaidAddress.getFormValue());
      var postpaidAddressData = postpaidAddress.getFormValue();
      var userDetails = postpaidAddressData.userDetails;
      var idCardForm = postpaidAddressData.idCardForm;
      var prefix = {
        mr: 'นาย',
        mrs: 'นาง',
        miss: 'นางสาว'
      };
      var formAddress = {
        callback_url: this.skipEkyc ? null : this.ekycAnswer.callback_url,
        national_id: this.skipEkyc ? this.data.formInfo.id : this.ekycAnswer.national_id,
        prefix: userDetails.title in prefix ? prefix[userDetails.title] : userDetails.title,
        txt_title_other: userDetails.txt_title_other,
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        gender: this.skipEkyc ? userDetails.title in prefix ? prefix[userDetails.title] === 'นาย' ? 'ชาย' : 'หญิง' : 'อื่นๆ' : this.ekycAnswer.gender,
        date_of_birth: this.skipEkyc ? this.data.formInfo.date : this.ekycAnswer.date_of_birth,
        date_of_expiration: "".concat(userDetails.thai_id_expire_day, "-").concat(userDetails.thai_id_expire_month, "-").concat(userDetails.thai_id_expire_year - 543),
        mobile_no: userDetails.telephone,
        email: userDetails.email,
        home_address: idCardForm.address,
        home_district_id: idCardForm.city_id,
        home_province_id: idCardForm.province_id,
        home_subdistrict_id: idCardForm.district_id,
        home_zipcode: idCardForm.postcode,
        idCardForm: idCardForm,
        billingAddress: postpaidAddressData.useIdForm === 'true' ? idCardForm : postpaidAddressData.billingAddress
      };
      this.setCustomEkyc(formAddress);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".address-container[data-v-4ce65b6e] {\n  background-color: #fff;\n  padding: 30px 30px 60px 30px;\n  border-radius: 8px;\n}\n.address-container .address-inner-container[data-v-4ce65b6e] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.address-container .address-title[data-v-4ce65b6e] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  margin-bottom: 18px;\n  color: #000;\n  text-align: center;\n}\n.address-container .address-form[data-v-4ce65b6e] {\n  padding-bottom: 16px;\n}\n.address-container .form-label[data-v-4ce65b6e] {\n  color: #000;\n  font-size: 30px;\n  line-height: 27px;\n  margin: 6px 0;\n}\n.address-container .form-container[data-v-4ce65b6e] {\n  margin-bottom: 26px;\n}\n.address-container .form-container[data-v-4ce65b6e] label {\n  line-height: 27px;\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #4a4a4a;\n}\n.address-container .form-container[data-v-4ce65b6e] input {\n  background-color: #fff;\n  border-radius: 8px;\n  border: 1px solid #000;\n  font-family: \"TrueBold\";\n  font-size: 24px;\n}\n.address-container .form-container[data-v-4ce65b6e] input::-moz-placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-4ce65b6e] input::placeholder {\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n}\n.address-container .form-container[data-v-4ce65b6e] input[disabled] {\n  border-color: #cccccc;\n}\n.address-container .form.invalid-form .form-container[data-v-4ce65b6e] .input input:invalid {\n  border-color: #ff0000;\n  color: #ff0000;\n}\n.address-container .user-details-form[data-v-4ce65b6e] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px 20px;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .form:nth-child(1),\n.address-container .user-details-form[data-v-4ce65b6e] .form:nth-child(4) {\n  grid-column: 1/-1;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .name-title-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  width: 100%;\n  grid-gap: 20px;\n  color: #4a4a4a;\n  font-size: 24px;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .name-title-container input[type=radio] {\n  margin-right: 8px;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .name-title-container .radio-input-container {\n  display: flex;\n  align-items: center;\n  grid-column-end: span 2;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .name-title-container .radio-input-container:last-child {\n  grid-column: 7/-1;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .name-title-container .custom-name-title-input {\n  margin-left: 10px;\n}\n.address-container .user-details-form[data-v-4ce65b6e] .expiration-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 100%;\n  grid-gap: 20px;\n}\n.address-container .id-card-form[data-v-4ce65b6e] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px 20px;\n}\n.address-container .id-card-form[data-v-4ce65b6e] .form:first-child {\n  grid-column: 1/-1;\n}\n.address-container .billing-address-same[data-v-4ce65b6e] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 20px;\n  margin: 10px 0;\n}\n.address-container .billing-address-same label[data-v-4ce65b6e] {\n  font-size: 24px;\n  line-height: 27px;\n  color: #4a4a4a;\n  margin-left: 10px;\n}\n.address-container .agreement-container[data-v-4ce65b6e] {\n  font-size: 24px;\n  line-height: 35px;\n  color: #666;\n  border-top: 1px solid #ddd;\n  padding-top: 16px;\n}\n.address-container .agreement-container span[data-v-4ce65b6e] {\n  font-family: \"TrueBold\";\n}\n.address-container .agreement-container label[data-v-4ce65b6e] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.address-container .agreement-container input[data-v-4ce65b6e] {\n  margin-right: 8px;\n}\n.address-container .agreement-container a[data-v-4ce65b6e] {\n  margin: 0 4px;\n  color: #ff0000;\n}\n.address-container .save-button-container[data-v-4ce65b6e] {\n  margin-top: 36px;\n  text-align: center;\n}\n.address-container .save-button-container .button[data-v-4ce65b6e] {\n  background: #ff0000;\n}\n.address-container .save-button-container .button[disabled][data-v-4ce65b6e] {\n  background: #9e9e9e;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "address-container" }, [
      _c(
        "div",
        { staticClass: "address-inner-container" },
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
                  "\n            " +
                    _vm._s(_vm.Locale.agreement2[_vm.$i18n.locale]) +
                    "\n          "
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
                  "\n            " +
                    _vm._s(_vm.Locale.agreement3[_vm.$i18n.locale]) +
                    "\n          "
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
                  attrs: { disabled: !_vm.valid },
                  on: { click: _vm.save },
                },
                [_vm._v(_vm._s(_vm.Locale.address_next[_vm.$i18n.locale]))]
              ),
            ],
            1
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

/***/ "./resources/js/pages/mnp/verify/mnp-address.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-address.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true&");
/* harmony import */ var _mnp_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mnp-address.vue?vue&type=script&lang=js& */ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mnp_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ce65b6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mnp/verify/mnp-address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=style&index=0&id=4ce65b6e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_style_index_0_id_4ce65b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-address.vue?vue&type=template&id=4ce65b6e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_address_vue_vue_type_template_id_4ce65b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);