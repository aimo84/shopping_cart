(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/mnp/verify/locale.json", 1);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_4__
    };
  },
  computed: {
    message: function message() {
      return this.mnpInfo.message || {
        th: 'Something went wrong. Please try again.',
        en: 'Something went wrong. Please try again.'
      };
    },
    ekycStatus: function ekycStatus() {
      return this.$store.state.ekyc.ekycStatus;
    },
    ekycAnswers: function ekycAnswers() {
      var answers = {};
      if (!this.ekycStatus.answers) return {};
      this.ekycStatus.answers.forEach(function (e) {
        answers[e.question] = e.value;
      });
      return answers;
    },
    identifyId: function identifyId() {
      return this.ekycAnswers.national_id;
    },
    mnpInfo: function mnpInfo() {
      return this.$store.state.mnp.mnpInfo;
    },
    mnpOtp: function mnpOtp() {
      return this.$store.state.mnp.mnpOtp;
    },
    isMnpBundle: function isMnpBundle() {
      return this.$route.name === 'mnp-bundle-verify';
    },
    isMNPAutoRoute: function isMNPAutoRoute() {
      return this.$route.name === 'mnp-auto-verify';
    },
    isMnpOneStep: function isMnpOneStep() {
      return this.data.bundle.bundle.campaign_mnp_type === 'one_step';
    },
    isMnpSharePlan: function isMnpSharePlan() {
      return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify';
    },
    success: function success() {
      if (this.isMnpBundle || this.isMNPAutoRoute) return this.mnpInfo.is_pass;
      return this.mnpInfo.status === 'success';
    },
    simProduct: function simProduct() {
      var _this = this;

      return this.isMNPAutoRoute ? this.data.bundle.bundle.inventories.find(function (inventory) {
        return inventory.product_id === _this.$route.params.id;
      }) : this.data.bundle.bundle.inventories.find(function (inventory) {
        return inventory.product_id !== _this.$route.params.id;
      });
    },
    skipEkyc: function skipEkyc() {
      var skip = window.no_ekyc_device_bundle;
      return (this.isMnpOneStep || this.isMnpSharePlan) && skip;
    },
    isCampaignFreeDevice: function isCampaignFreeDevice() {
      return this.$attrs.isCampaignFreeDevice || false;
    }
  },
  methods: {
    updatePrivilege: function updatePrivilege() {
      var privilegePlaceorder = this.mnpInfo.privilege_placeorder;

      if (privilegePlaceorder) {
        var key = 'privilege-placeorder';
        var privileges = JSON.parse(localStorage.getItem(key)) || [];
        if (!Array.isArray(privileges)) privileges = [];
        var privilege = privileges.filter(function (item) {
          return item.product_id !== privilegePlaceorder[0].product_id;
        });
        if (privilegePlaceorder[0]) privilegePlaceorder[0].timestamp_expired = Date.now() + 172800000;
        localStorage.setItem(key, JSON.stringify([].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(privilegePlaceorder), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(privilege))));
      }
    },
    setEkyc: function setEkyc(id) {
      var key = 'postpaid-ekyc-data';
      var data = JSON.parse(localStorage.getItem(key)) || {};
      if (Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data) !== 'object') data = {};
      var dataEkyc = {
        channel: this.ekycStatus.channel,
        id_number: this.identifyId,
        face_recog_cust_capture: this.ekycStatus.image_liveness,
        'face-recog-cust-certificate': this.ekycStatus.image_front,
        face_recog_cust_capture_filename: '',
        'face-recog-cust-certificate-filename': ''
      };
      var tempContent = {};

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
      data[id] = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dataEkyc), tempContent);
      localStorage.setItem(key, JSON.stringify(data));
    },
    next: function next() {
      if (this.isMnpBundle || this.isMNPAutoRoute) {
        this.setEkyc(this.simProduct.product_id);
        this.updatePrivilege();
      }

      var securityKey = this.skipEkyc ? this.mnpOtp.security_key : this.ekycStatus.additional_data.security_key;
      localStorage.setItem('mnp-security-key', securityKey);
      var referenceProductId = this.$route.query.reference_product_id;

      if (referenceProductId) {
        localStorage.setItem('mnp-reference-product-id', referenceProductId);
      } else {
        localStorage.removeItem('mnp-reference-product-id', referenceProductId);
      }

      if (this.data.entPack.error) {
        this.$router.push("/cart?id=".concat(this.mnpInfo.cart_hash, "&error=030"));
      } else {
        this.$router.push("/address?id=".concat(this.mnpInfo.cart_hash));
      }
    },
    linkOutSearchTrueshop: function linkOutSearchTrueshop() {
      window.open('https://www3.truecorp.co.th/cm/shop', '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-004a5ad8] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  margin: auto 12px;\n  padding: 76px 24px 50px 24px;\n}\n.result-container .icon[data-v-004a5ad8] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-004a5ad8] {\n  fill: #fff;\n}\n.result-container .icon.success[data-v-004a5ad8] {\n  background-color: #54c74c;\n  box-shadow: 1px 1px 0 #1f9716;\n}\n.result-container .icon.failed[data-v-004a5ad8] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .result-title[data-v-004a5ad8] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  max-width: 600px;\n}\n.result-container .result-title.success[data-v-004a5ad8] {\n  color: #e4a20f;\n}\n.result-container .result-title.failed[data-v-004a5ad8] {\n  color: #ff0000;\n}\n.result-container .privilege-container[data-v-004a5ad8] {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: center;\n  margin: 15px auto;\n}\n.result-container .privilege-container .privilege-label[data-v-004a5ad8] {\n  color: #4a4a4a;\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 4px;\n}\n.result-container .privilege-container .privilege-items[data-v-004a5ad8] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #000;\n}\n.result-container .result-message[data-v-004a5ad8] {\n  margin-top: 16px;\n  font-size: 24px;\n  line-height: 28px;\n  max-width: 620px;\n  text-align: center;\n  color: #4a4a4a;\n}\n.result-container .result-message span[data-v-004a5ad8] {\n  font-family: \"TrueBold\";\n}\n.result-container .result-button-container[data-v-004a5ad8] {\n  margin-top: 44px;\n  display: flex;\n}\n.result-container .result-button-container .button[data-v-004a5ad8] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-004a5ad8] {\n  background-color: #666;\n}\n.result-container .result-button-container .button[data-v-004a5ad8]:nth-child(2) {\n  margin-left: 8px;\n}\n@media screen and (max-width: 860px) {\n.result-container .result-button-container[data-v-004a5ad8] {\n    flex-direction: column;\n}\n.result-container .result-button-container .button[data-v-004a5ad8]:nth-child(2) {\n    margin-top: 8px;\n    margin-left: 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "result-container" }, [
    _vm.success
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
    _vm.success
      ? _c("div", { staticClass: "result-title success" }, [
          _vm._v(_vm._s(_vm.Locale.result.result_success[_vm.$i18n.locale])),
        ])
      : _c("div", {
          staticClass: "result-title failed",
          domProps: { innerHTML: _vm._s(_vm.message[_vm.$i18n.locale]) },
        }),
    _vm._v(" "),
    _vm.identifyId
      ? _c("div", { staticClass: "privilege-container" }, [
          _c("div", { staticClass: "privilege-label" }, [
            _vm._v(_vm._s(_vm.Locale.result.thai_id[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "privilege-items" }, [
            _c("div", { staticClass: "privilege-item" }, [
              _vm._v(_vm._s(_vm.identifyId)),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.success
      ? _c("div", { staticClass: "result-message" }, [
          _vm._v(
            _vm._s(_vm.Locale.result.result_status_success[_vm.$i18n.locale])
          ),
        ])
      : _c("div", { staticClass: "result-message" }, [
          _vm._v(
            _vm._s(_vm.Locale.result.result_status_fail[_vm.$i18n.locale])
          ),
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "result-button-container" },
      [
        _vm.success
          ? _c(
              "button-element",
              {
                staticClass: "button next",
                attrs: { id: "add_package_to_cart" },
                on: { click: _vm.next },
              },
              [_vm._v(_vm._s(_vm.Locale.ekyc.next[_vm.$i18n.locale]))]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.success && _vm.ekycStatus.is_pass
          ? _c(
              "router-link",
              {
                attrs: {
                  to: _vm.isMNPAutoRoute
                    ? {
                        name: "online-store-mnp-auto-share-plan",
                        params: {
                          id: _vm.$route.params.id,
                          nas_code: _vm.$route.params.nas_code,
                          bundle_id: _vm.$route.params.bundle_id,
                        },
                        query: {
                          token: _vm.$route.query.token,
                        },
                      }
                    : {
                        name: "online-store-detail",
                        params: {
                          id: _vm.$route.params.id,
                        },
                        query: {
                          token: _vm.$route.query.token,
                        },
                      },
                },
              },
              [
                _c("button-element", { staticClass: "button back" }, [
                  _vm._v(_vm._s(_vm.Locale.ekyc.back[_vm.$i18n.locale])),
                ]),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.ekycStatus.is_pass && !(_vm.skipEkyc && _vm.success)
          ? [
              _c(
                "button-element",
                {
                  staticClass: "button next",
                  on: {
                    click: function ($event) {
                      return _vm.$emit("route", "ekyc")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.Locale.result.retry[_vm.$i18n.locale]))]
              ),
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
                    _vm._s(_vm.Locale.ekyc.next_trueshop[_vm.$i18n.locale]) +
                      "\n      "
                  ),
                ]
              ),
            ]
          : _vm._e(),
      ],
      2
    ),
  ])
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

/***/ "./resources/js/pages/mnp/verify/mnp-result.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-result.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true&");
/* harmony import */ var _mnp_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mnp-result.vue?vue&type=script&lang=js& */ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& */ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mnp_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "004a5ad8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mnp/verify/mnp-result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=style&index=0&id=004a5ad8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_style_index_0_id_004a5ad8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mnp/verify/mnp-result.vue?vue&type=template&id=004a5ad8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mnp_result_vue_vue_type_template_id_004a5ad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);