(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.json */ "./resources/js/sections/priceplan-info/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/sections/priceplan-info/locale.json", 1);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    packages: Object,
    verifyForm: Object,
    postpaidResult: Object,
    isExisting: Boolean,
    bundle: Boolean
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_3__
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    packageInfo: function packageInfo() {
      return this.$store.state.postpaid["package"].record[0];
    },
    pricePlans: function pricePlans() {
      return this.$store.state.postpaid.pricePlan.data.record;
    },
    isTyphoon: function isTyphoon() {
      var _this$data, _this$data$bundle;

      var bundle = (_this$data = this.data) === null || _this$data === void 0 ? void 0 : (_this$data$bundle = _this$data.bundle) === null || _this$data$bundle === void 0 ? void 0 : _this$data$bundle.bundle;
      if (!bundle) return;
      return bundle.is_typhoon && bundle.campaign_mnp_type !== 'one_step';
    },
    isMnp: function isMnp() {
      return this.product.product_type === 'mnp' || this.product.is_mnp_bundling;
    },
    isBundle: function isBundle() {
      return ['bundle_existing_verify', 'device_bundle_new_customer'].includes(this.product.product_type);
    },
    name: function name() {
      var _this$data2, _this$data2$bundle;

      return ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : (_this$data2$bundle = _this$data2.bundle) === null || _this$data2$bundle === void 0 ? void 0 : _this$data2$bundle.custom_name) || this.packageInfo.name;
    },
    thaiid: function thaiid() {
      var id = this.isExisting ? this.verifyForm.id_number : this.postpaidResult.thai_id;
      return id.substring(0, 3) + 'XXXXXX' + id.substring(9, 13);
    },
    birthday: function birthday() {
      if (this.isExisting) {
        return "".concat(this.verifyForm.date_birth, "/").concat(this.verifyForm.month_birth, "/").concat(this.verifyForm.year_birth);
      }

      return this.postpaidResult.birth_date;
    },
    startTime: function startTime() {
      if (!this.data.updated_at) return;
      return this.computeTime(this.data.updated_at.replace(/-/g, '/'));
    },
    endTime: function endTime() {
      if (!this.data.hold_expired_date) return;
      return this.computeTime(this.data.hold_expired_date.replace(/-/g, '/'));
    },
    price: function price() {
      var plans = this.pricePlans.map(function (item) {
        return item.price;
      });
      return Math.min.apply(Math, Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(plans));
    },
    image: function image() {
      if (this.bundle || !this.isBundle) return this.packageInfo.package_image_desktop;
      return this.packages.package_image_desktop;
    },
    terms: function terms() {
      return this.packageInfo.term_short;
    },
    mnpRandomNumber: function mnpRandomNumber() {
      return this.$store.state.mnp.mnpRandomNumber;
    },
    mobileNumber: function mobileNumber() {
      var number = this.isTyphoon ? this.mnpRandomNumber.number_random_result : this.data.mobile;
      return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    isPrepaid: function isPrepaid() {
      var _this$product$sim_dat;

      return ((_this$product$sim_dat = this.product.sim_data) === null || _this$product$sim_dat === void 0 ? void 0 : _this$product$sim_dat.sim_type) === 'prepaid';
    }
  },
  methods: {
    computeTime: function computeTime(time) {
      var dt = new Date(time);
      var hours = dt.getHours();
      hours = hours < 10 ? "0".concat(hours) : hours;
      var mins = dt.getMinutes();
      mins = mins < 10 ? "0".concat(mins) : mins;
      var secs = dt.getSeconds();
      secs = secs < 10 ? "0".concat(secs) : secs;
      return "".concat(hours, ":").concat(mins, ":").concat(secs);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title-container[data-v-021f5e1f] {\n  text-align: center;\n  max-width: 960px;\n  margin: 0 auto 24px auto;\n  color: #000;\n}\n.title-container .title[data-v-021f5e1f] {\n  font-family: \"TrueBold\";\n  font-size: 40px;\n  line-height: 30px;\n  margin-bottom: 16px;\n}\n.title-container .description[data-v-021f5e1f] {\n  font-size: 24px;\n  line-height: 24px;\n}\n.package-container[data-v-021f5e1f] {\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.12), 0 10px 20px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.package-container .top-container[data-v-021f5e1f] {\n  display: flex;\n  background-color: #000;\n  height: 110px;\n}\n.package-container .top-container .top-info-container[data-v-021f5e1f] {\n  padding: 20px 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.package-container .top-container .top-info-container .info-container[data-v-021f5e1f] {\n  font-family: \"TrueBold\";\n}\n.package-container .top-container .top-info-container .info-container[data-v-021f5e1f]:first-child {\n  margin-right: 76px;\n}\n.package-container .top-container .top-info-container .info-container .info-label[data-v-021f5e1f] {\n  font-size: 24px;\n  line-height: 24px;\n  margin-bottom: 4px;\n}\n.package-container .top-container .top-info-container .info-container .info-value[data-v-021f5e1f] {\n  font-size: 40px;\n  line-height: 40px;\n}\n.package-container .top-container .top-triangle[data-v-021f5e1f] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 0 110px 30px;\n  border-color: transparent transparent #d0d0d0 transparent;\n}\n.package-container .top-container .top-timer-container[data-v-021f5e1f] {\n  background-color: #d0d0d0;\n  padding: 20px 24px 20px 16px;\n  display: flex;\n  align-items: center;\n}\n.package-container .top-container .top-timer-container .timer-divider[data-v-021f5e1f] {\n  margin: 0 20px;\n  width: 1px;\n  height: 60px;\n  background-color: #6a6a6a;\n}\n.package-container .top-container .top-timer-container .timer-container[data-v-021f5e1f] {\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.package-container .top-container .top-timer-container .timer-container .timer-label[data-v-021f5e1f] {\n  font-size: 20px;\n  line-height: 30px;\n  margin-bottom: 8px;\n  color: #000;\n}\n.package-container .top-container .top-timer-container .timer-container .timer-value[data-v-021f5e1f] {\n  color: #ff0000;\n  font-size: 30px;\n  line-height: 30px;\n}\n.package-container .product-container[data-v-021f5e1f] {\n  padding: 30px;\n  background-color: #ba2a26;\n}\n.package-container .product-container .product-info-container[data-v-021f5e1f] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container[data-v-021f5e1f] {\n  display: flex;\n  flex: 1;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-image[data-v-021f5e1f] {\n  margin-right: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-image img[data-v-021f5e1f] {\n  max-width: 120px;\n  display: block;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container[data-v-021f5e1f] {\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-info-title[data-v-021f5e1f] {\n  font-size: 40px;\n  line-height: 40px;\n  margin-bottom: 10px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-info-chip[data-v-021f5e1f] {\n  padding: 0 14px;\n  color: #ff0000;\n  background: #fff;\n  display: inline-flex;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  font-family: \"TrueBold\";\n  font-size: 18px;\n  line-height: 14px;\n  margin-bottom: 12px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-price-container[data-v-021f5e1f] {\n  display: flex;\n  align-items: flex-end;\n  flex: 1;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-price-container .product-price[data-v-021f5e1f] {\n  font-size: 30px;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 6px;\n  align-items: baseline;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-price-container .product-price .price[data-v-021f5e1f] {\n  font-size: 48px;\n}\n.package-container .product-container .product-info-container .product-number-container[data-v-021f5e1f] {\n  text-align: center;\n  color: #fff;\n}\n.package-container .product-container .product-info-container .product-number-container .product-number-title[data-v-021f5e1f] {\n  margin-bottom: 10px;\n  font-size: 24px;\n  line-height: 24px;\n}\n.package-container .product-container .product-info-container .product-number-container .product-number-value[data-v-021f5e1f] {\n  font-family: \"TrueBold\";\n  font-size: 48px;\n  line-height: 30px;\n}\n.package-container .product-container .product-detail-container[data-v-021f5e1f] {\n  font-size: 24px;\n  line-height: 24px;\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n}\n.package-container .product-container .product-detail-container .product-text-container[data-v-021f5e1f] {\n  margin-right: 96px;\n  display: flex;\n}\n.package-container .product-container .product-detail-container .product-detail-label[data-v-021f5e1f] {\n  font-family: \"TrueBold\";\n  margin-right: 8px;\n  white-space: nowrap;\n  color: #ff0000;\n}\n.package-container .product-container .product-detail-container .product-detail-description[data-v-021f5e1f] {\n  color: #000;\n}\n.package-container .product-container .product-detail-container .button[data-v-021f5e1f] {\n  background-color: #e4a20f;\n  min-width: 150px;\n  height: 38px;\n  line-height: 38px;\n  padding: 0 16px;\n}\n@media screen and (max-width: 860px) {\n.package-outer-container[data-v-021f5e1f] {\n    padding: 0 16px;\n    margin-bottom: 24px;\n}\n.title-container[data-v-021f5e1f] {\n    margin-bottom: 16px;\n}\n.title-container .title[data-v-021f5e1f] {\n    line-height: 30px;\n    font-size: 24px;\n    margin-bottom: 4px;\n}\n.title-container .description[data-v-021f5e1f] {\n    line-height: 20px;\n    font-size: 20px;\n    max-width: 600px;\n    margin: auto;\n}\n.package-container .top-container[data-v-021f5e1f] {\n    height: 122px;\n}\n.package-container .top-container .top-info-container[data-v-021f5e1f] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 10px 10px 10px 20px;\n}\n.package-container .top-container .top-info-container .info-container[data-v-021f5e1f] {\n    margin-bottom: 4px;\n    margin-right: 0;\n}\n.package-container .top-container .top-info-container .info-container .info-label[data-v-021f5e1f] {\n    font-size: 18px;\n    line-height: 24px;\n    margin-bottom: 0;\n}\n.package-container .top-container .top-info-container .info-container .info-value[data-v-021f5e1f] {\n    font-size: 24px;\n    line-height: 24px;\n}\n.package-container .top-container .top-triangle[data-v-021f5e1f] {\n    border-width: 0 0 122px 30px;\n}\n.package-container .top-container .top-timer-container[data-v-021f5e1f] {\n    flex-direction: column;\n    padding: 8px 16px 8px 8px;\n    justify-content: center;\n}\n.package-container .top-container .top-timer-container .timer-divider[data-v-021f5e1f] {\n    width: 100%;\n    height: 1px;\n    margin: 4px 0;\n    min-height: 1px;\n}\n.package-container .top-container .top-timer-container .timer-container .timer-label[data-v-021f5e1f] {\n    font-size: 18px;\n    line-height: 24px;\n    margin-bottom: 0;\n}\n.package-container .top-container .top-timer-container .timer-container .timer-value[data-v-021f5e1f] {\n    font-size: 30px;\n    line-height: 24px;\n}\n.package-container .product-container[data-v-021f5e1f] {\n    padding: 20px;\n}\n.package-container .product-container .product-detail-container[data-v-021f5e1f] {\n    padding: 14px 12px;\n    font-size: 18px;\n    line-height: 18px;\n}\n.package-container .product-container .product-detail-container .product-text-container[data-v-021f5e1f] {\n    flex-direction: column;\n}\n.package-container .product-container .product-info-container[data-v-021f5e1f] {\n    flex-direction: column;\n    min-height: 100px;\n    margin-bottom: 18px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container[data-v-021f5e1f] {\n    margin-bottom: 16px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-price-container .product-price[data-v-021f5e1f] {\n    font-size: 24px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-price-container .product-price .price[data-v-021f5e1f] {\n    font-size: 30px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-text-container .product-info-title[data-v-021f5e1f] {\n    font-size: 24px;\n    line-height: 24px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-image[data-v-021f5e1f] {\n    margin-right: 20px;\n}\n.package-container .product-container .product-info-container .product-info-inner-container .product-info-image img[data-v-021f5e1f] {\n    max-width: 80px;\n}\n.package-container .product-container .product-info-container .product-number-container[data-v-021f5e1f] {\n    text-align: left;\n}\n.package-container .product-container .product-info-container .product-number-container .product-number-title[data-v-021f5e1f] {\n    font-size: 18px;\n    line-height: 24px;\n    margin-bottom: 0;\n}\n.package-container .product-container .product-info-container .product-number-container .product-number-value[data-v-021f5e1f] {\n    font-size: 30px;\n    line-height: 30px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true& ***!
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
  return _c("div", { staticClass: "package-outer-container" }, [
    _c("div", { staticClass: "title-container" }, [
      _c("div", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.Locale.address_title[_vm.$i18n.locale])),
      ]),
      _vm._v(" "),
      !_vm.isMnp
        ? _c("div", { staticClass: "description" }, [
            _vm._v(
              _vm._s(_vm.Locale.search_result_description[_vm.$i18n.locale])
            ),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "package-container" }, [
      _vm.isExisting || _vm.postpaidResult
        ? _c(
            "div",
            { staticClass: "top-container" },
            [
              _c("div", { staticClass: "top-info-container" }, [
                _c("div", { staticClass: "info-container" }, [
                  _c("div", { staticClass: "info-label" }, [
                    _vm._v(_vm._s(_vm.Locale.thai_id[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value" }, [
                    _vm._v(_vm._s(_vm.thaiid)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "info-container" }, [
                  _c("div", { staticClass: "info-label" }, [
                    _vm._v(_vm._s(_vm.Locale.birthday[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value" }, [
                    _vm._v(_vm._s(_vm.birthday)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm.startTime && _vm.endTime
                ? [
                    _c("div", { staticClass: "top-triangle" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "top-timer-container" }, [
                      _c("div", { staticClass: "timer-container" }, [
                        _c("div", { staticClass: "timer-label" }, [
                          _vm._v(
                            _vm._s(_vm.Locale.start_time[_vm.$i18n.locale])
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timer-value" }, [
                          _vm._v(_vm._s(_vm.startTime)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "timer-divider" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "timer-container" }, [
                        _c("div", { staticClass: "timer-label" }, [
                          _vm._v(_vm._s(_vm.Locale.end_time[_vm.$i18n.locale])),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timer-value" }, [
                          _vm._v(_vm._s(_vm.endTime)),
                        ]),
                      ]),
                    ]),
                  ]
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "product-container" }, [
        _c("div", { staticClass: "product-info-container" }, [
          _c("div", { staticClass: "product-info-inner-container" }, [
            _c("div", { staticClass: "product-info-image" }, [
              _c("img", { attrs: { src: _vm.image } }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-info-text-container" }, [
              _c("div", { staticClass: "product-info-title" }, [
                _vm._v(_vm._s(_vm.name)),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm.isPrepaid
                  ? _c("div", { staticClass: "product-info-chip" }, [
                      _vm._v(_vm._s(_vm.Locale.prepaid[_vm.$i18n.locale])),
                    ])
                  : _c("div", { staticClass: "product-info-chip" }, [
                      _vm._v(_vm._s(_vm.Locale.postpaid[_vm.$i18n.locale])),
                    ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-price-container" }, [
                _c("div", { staticClass: "product-price" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.Locale.start[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "price" }, [
                    _vm._v(_vm._s(_vm.price) + " ฿"),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.isTyphoon || _vm.data.mobile
            ? _c("div", { staticClass: "product-number-container" }, [
                _c("div", { staticClass: "product-number-title" }, [
                  _vm._v(_vm._s(_vm.Locale.selected_number[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-number-value" }, [
                  _vm._v(_vm._s(_vm.mobileNumber)),
                ]),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product-detail-container" }, [
          _c("div", { staticClass: "product-text-container" }, [
            _c("div", { staticClass: "product-detail-label" }, [
              _vm._v(_vm._s(_vm.Locale.your_package[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-detail-description" }, [
              _vm._v(_vm._s(_vm.terms)),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/sections/priceplan-info/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/sections/priceplan-info/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=021f5e1f&scoped=true& */ "./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& */ "./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "021f5e1f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/sections/priceplan-info/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-info/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=021f5e1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-info/index.vue?vue&type=template&id=021f5e1f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_021f5e1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/sections/priceplan-info/locale.json":
/*!**********************************************************!*\
  !*** ./resources/js/sections/priceplan-info/locale.json ***!
  \**********************************************************/
/*! exports provided: address_title, search_result_description, prepaid, postpaid, start, selected_number, your_package, thai_id, birthday, start_time, end_time, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"address_title\":{\"th\":\"กรอกข้อมูลเพื่อสั่งซื้อซิม\",\"en\":\"Please insert your information\"},\"search_result_description\":{\"th\":\"กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้เสร็จสิ้นภายใน 2 ชั่วโมง ในกรณีที่มีการทำรายการเข้ามาเป็นจำนวนมาก เบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้\",\"en\":\"Please select the number and fill in the user details within 2 hours after you have verified the privileges. In case of over-transaction, the reserved number will be canceled immediately\"},\"prepaid\":{\"th\":\"เติมเงิน\",\"en\":\"Prepaid\"},\"postpaid\":{\"th\":\"รายเดือน\",\"en\":\"Postpaid\"},\"start\":{\"th\":\"แพ็กเกจเริ่มต้น\",\"en\":\"Start\"},\"selected_number\":{\"th\":\"เบอร์โทรศัพท์ที่คุณเลือก\",\"en\":\"The number you selected\"},\"your_package\":{\"th\":\"แพ็กเกจของคุณ:\",\"en\":\"Your Package:\"},\"thai_id\":{\"en\":\"Thai ID\",\"th\":\"หมายเลขบัตรประชาชน\"},\"birthday\":{\"en\":\"Day / Month / Year of birth\",\"th\":\"วัน / เดือน / ปีเกิด\"},\"start_time\":{\"en\":\"Start Time\",\"th\":\"เริ่มนับเวลา\"},\"end_time\":{\"en\":\"End Time\",\"th\":\"หมดเวลา\"}}");

/***/ }),

/***/ "./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-info/style.scss?vue&type=style&index=0&id=021f5e1f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_021f5e1f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);