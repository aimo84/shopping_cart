(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/trueonline/success/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/trueonline/success/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: Object,
    loading: Boolean
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_2__,
      orderLoading: true
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.trueonline.tolProduct.data;
    },
    description: function description() {
      return {
        th: this.product.description_th,
        en: this.product.description_en
      };
    },
    billingAddr: function billingAddr() {
      return this.computeAddress('billing_addr');
    },
    invoiceAddr: function invoiceAddr() {
      return this.computeAddress('invoice_addr');
    },
    installationAddr: function installationAddr() {
      var addr = this.data.instl_addr;
      var addressArr = [addr.HOUSE_NO, addr.MOO, addr.STREET, addr.SOI];
      var address = addressArr.filter(function (e) {
        return e;
      }).join(' ');
      return "".concat(address, ", ").concat(addr.SUB_DISTRICT, ", ").concat(addr.DISTRICT, ", ").concat(addr.PROVINCE, " ").concat(addr.ZIP_CODE, " .");
    }
  },
  mounted: function mounted() {
    if (!this.data.order_form_submitted) {
      this.$router.push("/trueonline/order/".concat(this.$route.params.id));
      return;
    }

    window.addEventListener('beforeprint', this.setPrint);
    window.addEventListener('afterprint', this.removePrint);
    this.orderLoading = false;
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('beforeprint', this.setPrint);
    window.removeEventListener('afterprint', this.removePrint);
  },
  methods: {
    print: function print() {
      window.print();
    },
    setPrint: function setPrint() {
      document.body.setAttribute('print', '');
    },
    removePrint: function removePrint() {
      document.body.removeAttribute('print');
    },
    computeAddress: function computeAddress(value) {
      var addr = this.data[value];
      var addressArr = [addr.houseNo, addr.moo, addr.streetName, addr.soi];
      var address = addressArr.filter(function (e) {
        return e;
      }).join(' ');
      return "".concat(addr.name, " ").concat(addr.lastname, ",\n").concat(address, ",\n").concat(addr.district, ",\n").concat(addr.city, ",\n").concat(addr.province, " ").concat(addr.postcode, ".");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-container[data-v-75a01801] {\n  font-family: \"TrueMedium\";\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 8px;\n  padding-bottom: 48px;\n}\n.page-container .inner-page-container[data-v-75a01801] {\n  max-width: 726px;\n  margin: auto;\n}\n.success-container[data-v-75a01801] {\n  text-align: center;\n  font-size: 26px;\n  line-height: 28px;\n  padding: 36px 16px;\n  width: 100%;\n  border-bottom: 1px dashed #ccc;\n}\n.success-container .success-icon[data-v-75a01801] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-container .success-icon svg[data-v-75a01801] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.success-container .success-message[data-v-75a01801] {\n  color: #000;\n  font-size: 42px;\n  line-height: 48px;\n  margin: 24px 0 8px 0;\n  font-family: \"TrueBold\";\n}\n.success-container .order-id[data-v-75a01801] {\n  color: #212121;\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n}\n.delivery-container[data-v-75a01801] {\n  width: 100%;\n  padding: 16px 0;\n  font-size: 26px;\n  line-height: 28px;\n  margin-bottom: 36px;\n}\n.delivery-container .delivery-description.title[data-v-75a01801] {\n  margin-top: 24px;\n}\n.delivery-container .delivery-description.bold[data-v-75a01801] {\n  font-family: \"TrueBold\";\n  color: #000;\n}\n.delivery-container .delivery-description.gold[data-v-75a01801] {\n  color: #e4a20f;\n}\n.delivery-container .address[data-v-75a01801] {\n  font-size: 24px;\n  line-height: 24px;\n  color: #666;\n}\n.delivery-container .address .address-container[data-v-75a01801] {\n  display: flex;\n  flex-wrap: wrap;\n  white-space: pre-line;\n  margin-right: 4px;\n}\n.delivery-container .address .contact-container[data-v-75a01801] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 0 24px;\n}\n.delivery-container .address .address-country[data-v-75a01801] {\n  margin-bottom: 12px;\n}\n.product-container[data-v-75a01801] {\n  margin-bottom: 36px;\n}\n.product-container .product[data-v-75a01801] {\n  background-color: #f7f7f7;\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  grid-gap: 16px;\n  align-items: flex-start;\n  max-width: 480px;\n  margin: auto;\n  padding: 16px;\n}\n.product-container .product img[data-v-75a01801] {\n  width: 100%;\n}\n.product-container .product .info[data-v-75a01801] {\n  color: #454545;\n  font-size: 24px;\n  display: grid;\n  grid-gap: 8px;\n  line-height: 28px;\n}\n.product-container .product .info .name[data-v-75a01801] {\n  color: #3c3c3c;\n  font-family: \"TrueBold\";\n  font-size: 28px;\n}\n.product-container .product .info .price[data-v-75a01801] {\n  font-family: \"TrueBold\";\n}\n.terms-container[data-v-75a01801] {\n  margin-bottom: 36px;\n  background-color: #f5f5f5;\n  padding: 20px;\n  color: #31474f;\n  font-size: 20px;\n  border-radius: 8px;\n}\n.terms-container .title[data-v-75a01801] {\n  font-family: \"TrueBold\";\n}\n.terms-container p[data-v-75a01801] {\n  margin: 0;\n}\n.button-container[data-v-75a01801] {\n  margin-top: 32px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button-container span[data-v-75a01801] {\n  display: block;\n  margin: 0 8px;\n}\n.button-container .back[data-v-75a01801] {\n  background-color: #666;\n}\n@media screen and (max-width: 860px) {\n.page-container[data-v-75a01801] {\n    padding-bottom: 36px;\n}\n.page-container .inner-page-container[data-v-75a01801] {\n    padding: 0 16px;\n}\n.success-container[data-v-75a01801] {\n    padding: 24px 0;\n}\n.success-container .success-icon[data-v-75a01801] {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 16px;\n}\n.success-container .success-icon svg[data-v-75a01801] {\n    width: 24px;\n    height: 24px;\n}\n.success-container .success-message[data-v-75a01801] {\n    margin-top: 0;\n}\n.delivery-container[data-v-75a01801] {\n    padding: 24px 0;\n}\n.delivery-container .address .contact-container[data-v-75a01801] {\n    grid-template-columns: 1fr;\n}\n.product-container .product[data-v-75a01801] {\n    grid-template-columns: 80px 1fr;\n}\n.button-container[data-v-75a01801] {\n    flex-direction: column-reverse;\n}\n.button-container > *[data-v-75a01801],\n.button-container .button[data-v-75a01801] {\n    width: 100%;\n}\n.button-container span ~ span[data-v-75a01801] {\n    margin-bottom: 20px;\n}\n}\n@media print {\nbody[print] .page-container[data-v-75a01801] {\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\nbody[print] .success-icon[data-v-75a01801],\nbody[print] .button-container[data-v-75a01801] {\n    display: none;\n}\nbody[print] .success-container[data-v-75a01801] {\n    padding-top: 0;\n}\nbody[print] .success-container .success-message[data-v-75a01801] {\n    margin-top: 0;\n}\nbody[print] .print-break[data-v-75a01801] {\n    page-break-after: always;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true& ***!
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
      _vm.loading || _vm.orderLoading ? _c("loading-element") : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c("div", { staticClass: "page-container" }, [
            _c("div", { staticClass: "inner-page-container" }, [
              _c("div", { staticClass: "success-container" }, [
                _c("div", { staticClass: "success-icon" }, [
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
                      _c("path", {
                        attrs: { d: "M0 0h24v24H0z", fill: "none" },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                          stroke: "#fff",
                        },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "success-message" }, [
                  _vm._v(_vm._s(_vm.Locale.title[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "success-description" }, [
                  _vm._v(_vm._s(_vm.Locale.orderreceived[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "order-id" }, [
                  _vm._v(_vm._s(_vm.data.result.order_id)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "success-description" }, [
                  _vm._v(_vm._s(_vm.Locale.ordermessage[_vm.$i18n.locale])),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "delivery-container" }, [
                _c("div", { staticClass: "delivery-description bold title" }, [
                  _vm._v(_vm._s(_vm.Locale.ordersummary[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "delivery-description bold gold" }, [
                  _vm._v(
                    _vm._s(_vm.Locale.ordernumber[_vm.$i18n.locale]) +
                      " " +
                      _vm._s(_vm.data.result.order_id)
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "delivery-description bold title" }, [
                  _vm._v(
                    _vm._s(_vm.Locale.installation_location[_vm.$i18n.locale])
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "address" }, [
                  _c("div", [
                    _vm._v(
                      _vm._s(_vm.data.instl_addr.firstname) +
                        " " +
                        _vm._s(_vm.data.instl_addr.lastname) +
                        ","
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "address-container" }, [
                    _vm._v(_vm._s(_vm.installationAddr)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "delivery-description bold title" }, [
                  _vm._v(_vm._s(_vm.Locale.billing_address[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "address" }, [
                  _c("div", { staticClass: "address-container" }, [
                    _vm._v(_vm._s(_vm.billingAddr)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "delivery-description bold title" }, [
                  _vm._v(_vm._s(_vm.Locale.invoice_address[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "address" }, [
                  _c("div", { staticClass: "address-container" }, [
                    _vm._v(_vm._s(_vm.invoiceAddr)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-container" }, [
                _c("div", { staticClass: "product" }, [
                  _c("img", { attrs: { src: _vm.product.image.url } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "info" }, [
                    _c("div", { staticClass: "name" }, [
                      _vm._v(_vm._s(_vm.description[_vm.$i18n.locale])),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "price" }, [
                      _vm._v(_vm._s(_vm.product.price) + " ฿"),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "button-container" }, [
                _c(
                  "span",
                  [
                    _c(
                      "button-element",
                      { staticClass: "button", on: { click: _vm.print } },
                      [_vm._v(_vm._s(_vm.Locale.print[_vm.$i18n.locale]))]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "terms-container" }, [
      _c("div", { staticClass: "title" }, [_vm._v("ข้อกำหนดและเงื่อนไข")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "บริษัทฯ จะทำการคืนเงินค่าสินค้าให้กับลูกค้า ในกรณีที่บริษัทฯ ไม่สามารถจัดส่งสินค้าตามที่ลูกค้าสั่งซื้อได้ โดยระยะเวลาการคืนเงินค่าสินค้า มีรายละเอียดดังนี้"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีลูกค้าชำระเงินเต็มจำนวนหรือผ่อนชำระ ตัดผ่านบัตรเครดิตของธนาคารพาณิชย์ที่จดทะเบียนในประเทศไทย บริษัทฯ จะส่งเรื่องขอคืนเงินไปยังธนาคาร โดยการคืนเงินจะขึ้นอยู่กับนโยบายของแต่ละธนาคาร ตามปกติแล้วผู้ถือบัตรจะได้รับเงินคืนในรอบบิลถัดไป"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีลูกค้าชำระเงินเต็มจำนวน ตัดผ่านช่องทาง True Money Wallet จะทำการคืนเงินกลับไปยัง True Money Wallet ที่ลูกค้าใช้ในการชำระเงิน โดยใช้ระยะเวลาประมาณ 7-14 วันทำการ"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีลูกค้าชำระเงินเต็มจำนวน ตัดผ่านบัตรเดบิตของธนาคารพาณิชย์ที่จดทะเบียนในประเทศไทย บริษัทจะส่งเรื่องขอคืนเงินไปยังธนาคาร โดยการคืนเงินจะขึ้นอยู่กับนโยบายของแต่ละธนาคาร ซึ่งจะใช้ระยะเวลาในการคืนเงินตั้งแต่ 30-60 วัน นับจากวันที่ลูกค้าได้รับการแจ้งจาก Call Center"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "ลูกค้าไม่สามารถดำเนินการยกเลิก เปลี่ยนแปลง แก้ไข รายการสั่งซื้อสินค้า ในกรณีต่างๆ ดังนี้"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีที่เกิดขึ้นจากความผิดพลาดในการสั่งซื้อสินค้า ผิดสี, ผิดรุ่น, ผิดประเภท"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีที่เกิดขึ้นจากการเปลี่ยนแปลงของราคาสินค้าที่อาจเกิดขึ้นได้ในอนาคตรวมถึง Gift Voucher ต่างๆ ทุกกรณีที่เกิดขึ้นจากความต้องการใส่ส่วนลดเพิ่มเติม, ลืมใส่ส่วนลด หรือ Coupon"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีที่เกิดขึ้นจากการเปลี่ยนใจ (Change of mind) ของผู้สั่งซื้อสินค้าทุกกรณี"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "บริษัทฯ จะไม่ดำเนินการจัดส่งสินค้า และต้องทำการคืนเงินเท่านั้น เนื่องจากกรณีต่างๆ ดังนี้"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีที่เกิดขึ้นจากสินค้าหมด (เช่น สินค้าหมด Stock, สินค้ายกเลิกการผลิตฯ)"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "กรณีที่เกิดขึ้นจากราคาสินค้าที่ระบุทางหน้าเว็บไซต์ไม่ตรงกับราคาที่จำหน่ายจริง"
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("กรณีที่เกิดขึ้นจากเหตุสุดวิสัย (System Error) ที่อาจเกิดขึ้น"),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "บริษัทฯ ขอสงวนสิทธิ์ในการคืนเงินเกินระยะเวลาที่กำหนด หากเกิดเหตุสุดวิสัยและขอสงวนสิทธิในการเปลี่ยนแปลงเงื่อนไขใดๆ โดยไม่จำต้องแจ้งให้ทราบล่วงหน้า"
        ),
      ]),
    ])
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

/***/ "./resources/js/pages/trueonline/success/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/trueonline/success/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=75a01801&scoped=true& */ "./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& */ "./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75a01801",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trueonline/success/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=75a01801&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trueonline/success/index.vue?vue&type=template&id=75a01801&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75a01801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trueonline/success/locale.json":
/*!***********************************************************!*\
  !*** ./resources/js/pages/trueonline/success/locale.json ***!
  \***********************************************************/
/*! exports provided: title, orderreceived, ordermessage, ordersummary, ordernumber, installation_location, billing_address, invoice_address, print, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"th\":\"ทำรายการเรียบร้อยแล้ว\",\"en\":\"Order Completed\"},\"orderreceived\":{\"th\":\"ร้านค้าได้รับคำสั่งซื้อของคุณแล้ว หมายเลขการสั่งซื้อ\",\"en\":\"The store has received your order. Order number\"},\"ordermessage\":{\"th\":\"ระบบได้ส่งอีเมลยืนยันการสั่งซื้อให้คุณเรียบร้อย\",\"en\":\"The system has sent you an SMS and a confirmation email.\"},\"ordersummary\":{\"th\":\"สรุปรายการสั่งซื้อ\",\"en\":\"Order summary\"},\"ordernumber\":{\"th\":\"หมายเลขการสั่งซื้อ:\",\"en\":\"Order number:\"},\"installation_location\":{\"th\":\"สถานที่ติดตั้ง\",\"en\":\"Installation Location\"},\"billing_address\":{\"th\":\"ที่อยู่จัดส่งเอกสาร\",\"en\":\"Billing Address\"},\"invoice_address\":{\"th\":\"ใบเสร็จ / ใบกำกับภาษี\",\"en\":\"Invoice Address\"},\"print\":{\"th\":\"พิมพ์ออเดอร์\",\"en\":\"Print Order\"}}");

/***/ }),

/***/ "./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/trueonline/success/style.scss?vue&type=style&index=0&id=75a01801&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_75a01801_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);