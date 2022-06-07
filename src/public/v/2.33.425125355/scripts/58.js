(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/list/product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_discount_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/discount-banner */ "./resources/js/components/discount-banner.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/list/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/list/locale.json", 1);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_2__["default"],
    'discount-banner': _components_discount_banner__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    index: Number,
    data: Object,
    postpaid: Array,
    prepaid: Array,
    loading: Boolean,
    trueonline: Boolean,
    coupon: Object,
    isExpandedPage: Boolean
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_4__,
      tracked: false
    };
  },
  computed: {
    config: function config() {
      return this.$store.state.config.verifyConfig;
    },
    verifySim: function verifySim() {
      return this.config.verify && this.config.verify.filter(function (item) {
        return item.type === 'postpaid' || item.type === 'prepaid';
      });
    },
    blackSim: function blackSim() {
      return this.config.family_black_truecard;
    },
    discount: function discount() {
      var original = parseFloat(this.data.compare_at_price_max);
      return Math.floor(this.saving / original * 100);
    },
    saving: function saving() {
      var original = parseFloat(this.data.compare_at_price_max);
      var price = parseFloat(this.data.price);
      return original - price;
    },
    postpaidSim: function postpaidSim() {
      var packages = this.postpaid.map(function (item) {
        return "L".concat(item.product_id);
      });
      var black = this.blackSim && Object.keys(this.blackSim);
      return [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(packages), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(black || []));
    },
    prepaidSim: function prepaidSim() {
      var packages = this.prepaid.map(function (item) {
        return "L".concat(item.product_id);
      });
      var verify = this.verifySim && this.verifySim.filter(function (item) {
        return item.type === 'prepaid';
      }).map(function (item) {
        return item.id;
      });
      return [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(packages), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(verify || []));
    },
    soldout: function soldout() {
      var _this$data;

      return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.quantity) === 0;
    },
    isTrueOnline: function isTrueOnline() {
      return this.trueonline;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.loading && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) {
          return entry.intersectionRatio > 0;
        })) {
          _this.trackAnalytics(true);

          _this.observer.disconnect();
        }
      });
      this.observer.observe(this.$refs.product);
    }
  },
  methods: {
    computeBalance: _utils_common__WEBPACK_IMPORTED_MODULE_6__["computeBalance"],
    trackAnalytics: function trackAnalytics(isView) {
      var data = this.data;
      var sim = ['sim', 'vlearn'];
      var isSim = sim.includes(data.type_of_product) || this.prepaidSim.includes(data.id) || this.postpaidSim.includes(data.id);
      var isPrepaid = this.prepaidSim.includes(data.id);
      var event = {
        event: 'ecommerce_event',
        event_category: isSim ? 'SIM' : 'device',
        event_action: isView ? 'impression' : 'click',
        event_label: isView ? isSim ? 'SIM_impression' : 'device_impression' : isSim ? 'SIM_click' : 'device_click',
        ecommerce: {
          currencyCode: 'THB'
        }
      };
      var impressions = {
        name: data.title.th,
        id: data.id,
        price: parseFloat(data.price).toFixed(2),
        category: isSim ? 'SIM' : 'device',
        brand: '',
        position: this.index,
        dimension6: parseFloat(data.compare_at_price_max).toFixed(2),
        dimension7: parseFloat(data.price).toFixed(2)
      };

      if (isSim) {
        impressions.variant = isPrepaid ? 'Prepaid' : 'Postpaid';
        impressions.dimension9 = isPrepaid ? 'Prepaid SIM' : 'Postpaid SIM';
        impressions.dimension10 = '';
        impressions.dimension11 = '';
      } else {
        impressions.variant = '';
        impressions.dimension8 = '';
      }

      if (isView) {
        impressions.list = isSim ? 'SIM' : 'device';
        event.ecommerce.impressions = [impressions];
      } else {
        event.ecommerce.click = {
          products: [impressions]
        };
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(event);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".product_container[data-v-4b003a15] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  overflow: hidden;\n  position: relative;\n  border: 3px solid transparent;\n  text-decoration: none;\n  width: 190px;\n  height: 365px;\n}\n.product_container.removeFixedHeight[data-v-4b003a15] {\n  height: auto;\n}\n.product_container[data-v-4b003a15]:hover {\n  transition: 150ms border-color ease;\n  border-color: #000;\n}\n.product_container:hover .product_container .product_price_container .special_price[data-v-4b003a15] {\n  transition: 150ms color ease;\n  color: #000;\n}\n.product_container:hover .product_buy_container .button[data-v-4b003a15] {\n  transition: 150ms background-color ease;\n  background-color: #000;\n}\n.product_container .discount[data-v-4b003a15] {\n  position: absolute;\n  background-color: #000;\n  font-size: 24px;\n  font-family: \"TrueBold\";\n  color: #fff;\n  right: 0;\n  padding: 0 16px 0 8px;\n  height: 30px;\n  line-height: 30px;\n  text-transform: uppercase;\n}\n.product_container .discount[data-v-4b003a15]:before {\n  content: \"\";\n  position: absolute;\n  left: -12px;\n  width: 0;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 12px solid #000;\n}\n.product_container .product_image_container[data-v-4b003a15] {\n  padding: 45px 10px 20px 10px;\n  background-color: #fff;\n}\n.product_container .product_image_container .skeleton[data-v-4b003a15],\n.product_container .product_image_container .image[data-v-4b003a15] {\n  max-width: 200px;\n  height: auto;\n  margin: auto;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n}\n.product_container .product_image_container .skeleton img[data-v-4b003a15],\n.product_container .product_image_container .image img[data-v-4b003a15] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.product_container .product_image_container .skeleton .image_soldout[data-v-4b003a15],\n.product_container .product_image_container .image .image_soldout[data-v-4b003a15] {\n  filter: opacity(0.5);\n}\n.product_container .product_image_container .skeleton[data-v-4b003a15]::after,\n.product_container .product_image_container .image[data-v-4b003a15]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.product_container .product_title[data-v-4b003a15] {\n  font-size: 24px;\n  line-height: 22px;\n  font-family: \"TrueMedium\";\n  padding: 0px 10px;\n  text-align: left;\n  color: #000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: 55px;\n  text-align: center;\n}\n.product_container .product_title.skeleton[data-v-4b003a15] {\n  width: 60%;\n  margin: 12px 20px;\n  padding: 16px 20px;\n}\n.product_container .installment-payment-badge[data-v-4b003a15] {\n  position: absolute;\n  text-align: left;\n  padding-top: 10px;\n  padding-left: 10px;\n}\n.product_container .installment-payment-badge .discount-img[data-v-4b003a15] {\n  height: 25px;\n  width: 50px;\n}\n.product_container .product_title_soldout[data-v-4b003a15] {\n  color: #DC4333;\n  border: 1px solid #DC4333;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 3px;\n  background: white;\n  font-family: \"TrueBold\";\n}\n.product_container .product_price_container[data-v-4b003a15] {\n  text-align: center;\n  min-height: 60px;\n  flex: 1;\n}\n.product_container .product_price_container .special_price[data-v-4b003a15] {\n  font-size: 30px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  color: #E62627;\n  margin-right: 8px;\n}\n.product_container .product_price_container .special_price .start_at_text[data-v-4b003a15] {\n  font-family: \"TrueLight\";\n  font-size: 24px;\n  color: #404040;\n}\n.product_container .product_price_container .special_price .price_text[data-v-4b003a15] {\n  margin-left: 5px;\n  font-size: 36px;\n}\n.product_container .product_price_container .special_price.skeleton[data-v-4b003a15] {\n  height: 30px;\n  width: 45%;\n}\n.product_container .product_price_container .original_price[data-v-4b003a15] {\n  font-size: 20px;\n  line-height: 30px;\n  font-family: \"TrueMedium\";\n  color: #999;\n  text-decoration: line-through;\n}\n.product_container .package_detail[data-v-4b003a15] {\n  background: #f8f8f8;\n  color: #0091ff;\n  font-size: 22px;\n  padding: 4px 12px;\n  display: block;\n}\n.product_container .package_detail[data-v-4b003a15]:hover {\n  color: #0d61b7;\n}\n.product_container .product_buy_container[data-v-4b003a15] {\n  padding-top: 12px;\n}\n.product_container .product_buy_container.no_padding[data-v-4b003a15] {\n  padding-top: 0;\n}\n.product_container .product_buy_container.no_padding button[data-v-4b003a15] {\n  min-width: 187px;\n  border-radius: 1px 1px 5px 5px;\n}\n.product_container .product_buy_container.skeleton[data-v-4b003a15] {\n  margin-top: 12px;\n  height: 50px;\n}\n.product_container .product_buy_container .button[data-v-4b003a15] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n  background-color: #ee3124;\n}\n.product_container .product_buy_container .button_soldout[data-v-4b003a15] {\n  background-color: #C1C1C1 !important;\n  cursor: default;\n}\n@media screen and (max-width: 1024px) {\n.product_container .installment-payment-badge .discount-img[data-v-4b003a15] {\n    height: 20px;\n    width: 40px;\n}\n}\n@media screen and (max-width: 860px) {\n.product_container .discount[data-v-4b003a15] {\n    height: 26px;\n    line-height: 26px;\n    font-size: 20px;\n}\n.product_container .discount[data-v-4b003a15]:before {\n    border-top: 13px solid transparent;\n    border-bottom: 13px solid transparent;\n}\n.product_container .product_image_container[data-v-4b003a15] {\n    padding: 45px 15px 20px 15px;\n}\n.product_container .product_image_container .skeleton[data-v-4b003a15],\n.product_container .product_image_container .image[data-v-4b003a15] {\n    max-width: 160px;\n    height: auto;\n}\n.product_container .product_title[data-v-4b003a15] {\n    padding: 5px 5px;\n    font-size: 24px;\n    line-height: 21px;\n}\n.product_container .product_title.skeleton[data-v-4b003a15] {\n    margin: 12px 14px;\n    padding: 12px;\n    width: 70%;\n}\n.product_container .product_price_container[data-v-4b003a15] {\n    min-height: 50px;\n}\n.product_container .product_price_container .special_price[data-v-4b003a15] {\n    font-size: 24px;\n    line-height: 25px;\n}\n.product_container .product_price_container .special_price.skeleton[data-v-4b003a15] {\n    height: 20px;\n    width: 45%;\n}\n.product_container .product_price_container .original_price[data-v-4b003a15] {\n    font-size: 16px;\n    line-height: 25px;\n}\n.product_container .product_buy_container[data-v-4b003a15] {\n    padding-top: 4px;\n}\n.product_container .product_buy_container.skeleton[data-v-4b003a15] {\n    margin-top: 0;\n    height: 40px;\n}\n.product_container .product_buy_container .button[data-v-4b003a15] {\n    height: 40px;\n    padding: 8px;\n    min-width: 100%;\n}\n}\n@media screen and (max-width: 720px) and (min-width: 430px) {\n.product_container[data-v-4b003a15] {\n    width: 200px;\n}\n}\n@media screen and (min-width: 415px) {\n.product_container .product_price_container .special_price .start_at_text[data-v-4b003a15] {\n    font-size: 24px;\n}\n.product_container .product_price_container .special_price .price_text[data-v-4b003a15] {\n    font-size: 36px;\n}\n}\n@media screen and (max-width: 414px) {\n.product_container[data-v-4b003a15] {\n    height: 330px;\n}\n.product_container .product_image_container image[data-v-4b003a15] {\n    max-height: 140px;\n}\n.product_container .product_title[data-v-4b003a15] {\n    font-size: 20px;\n}\n.product_container .product_price_container .special_price .start_at_text[data-v-4b003a15] {\n    font-size: 18px;\n}\n.product_container .product_price_container .special_price .price_text[data-v-4b003a15] {\n    font-size: 30px;\n}\n.product_container .product_buy_container.no_padding button[data-v-4b003a15] {\n    min-width: 100%;\n}\n}\n@media screen and (max-width: 405px) {\n.product_container[data-v-4b003a15] {\n    height: 330px;\n}\n}\n@media screen and (max-width: 395px) {\n.product_container[data-v-4b003a15] {\n    height: 300px;\n    max-width: 155px;\n    min-width: 145px;\n}\n}\n.product_container_soldout[data-v-4b003a15] {\n  border-color: #C1C1C1 !important;\n  cursor: default;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "product_container",
      class: [
        _vm.soldout ? "product_container_soldout" : { skeleton: _vm.loading },
        _vm.isTrueOnline ? "removeFixedHeight" : "",
      ],
      on: {
        click: function ($event) {
          return _vm.trackAnalytics()
        },
      },
    },
    [
      _vm.loading
        ? [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "product_title skeleton" }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "product_buy_container skeleton dark" }),
          ]
        : [
            _vm.saving > 0
              ? _c(
                  "div",
                  { staticClass: "discount" },
                  [
                    _vm.$i18n.locale === "th"
                      ? [
                          _vm._v(
                            _vm._s(_vm.Locale.off[_vm.$i18n.locale]) +
                              " " +
                              _vm._s(_vm.discount) +
                              "%"
                          ),
                        ]
                      : [
                          _vm._v(
                            _vm._s(_vm.discount) +
                              "% " +
                              _vm._s(_vm.Locale.off[_vm.$i18n.locale])
                          ),
                        ],
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.data.installment
              ? _c("div", { staticClass: "installment-payment-badge" }, [
                  _c("img", {
                    staticClass: "discount-img",
                    attrs: { src: "/images/store/discount.jpg" },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "product_image_container" }, [
              _c("div", { staticClass: "image" }, [
                _c("img", {
                  class: _vm.soldout && "image_soldout",
                  attrs: {
                    src: _vm.data.images[0].url,
                    loading: "lazy",
                    alt: _vm.data.title[_vm.$i18n.locale] || _vm.data.title.th,
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product_title" }, [
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm.data.title[_vm.$i18n.locale] || _vm.data.title.th
                  ) +
                  "\n        "
              ),
              _vm.soldout
                ? _c("button", { staticClass: "product_title_soldout" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.product_soldout[_vm.$i18n.locale])
                    ),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product_price_container" }, [
              _c(
                "div",
                { staticClass: "special_price" },
                [
                  _vm.data.price === "0"
                    ? [_vm._v(_vm._s(_vm.Locale.free[_vm.$i18n.locale]) + "*")]
                    : [
                        _c("span", { staticClass: "start_at_text" }, [
                          _vm._v(_vm._s(_vm.Locale.start_at[_vm.$i18n.locale])),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "price_text" }, [
                          _vm._v(
                            _vm._s(
                              _vm
                                .computeBalance(Math.trunc(_vm.data.price))
                                .toLocaleString()
                            ) + ".-"
                          ),
                        ]),
                      ],
                ],
                2
              ),
              _vm._v(" "),
              _vm.saving > 0
                ? _c("div", { staticClass: "original_price" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm
                            .computeBalance(
                              Math.trunc(_vm.data.compare_at_price_max)
                            )
                            .toLocaleString()
                        ) + ".-"
                      ),
                    ]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _vm.trueonline
              ? _c(
                  "router-link",
                  {
                    staticClass: "package_detail",
                    attrs: {
                      to: "/trueonline/item/" + _vm.data.id,
                      id: "tol-lvc-package-detail",
                    },
                  },
                  [_vm._v(_vm._s(_vm.Locale.packagedetail[_vm.$i18n.locale]))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "product",
                staticClass: "product_buy_container",
                class: _vm.trueonline && "no_padding",
              },
              [
                !_vm.isExpandedPage
                  ? _c(
                      "button-element",
                      {
                        staticClass: "button",
                        class: _vm.soldout && "button_soldout",
                        attrs: { id: "view_product" },
                      },
                      [
                        _vm.soldout
                          ? [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.Locale.soldout[_vm.$i18n.locale]) +
                                  "\n        "
                              ),
                            ]
                          : _vm.trueonline
                          ? [
                              _vm._v(
                                "\n          " +
                                  _vm._s(
                                    _vm.Locale.applynow[_vm.$i18n.locale]
                                  ) +
                                  "\n        "
                              ),
                            ]
                          : _vm.blackSim && _vm.blackSim[_vm.data.id]
                          ? [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.Locale.verify[_vm.$i18n.locale]) +
                                  "\n        "
                              ),
                            ]
                          : [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.Locale.buynow[_vm.$i18n.locale]) +
                                  "\n        "
                              ),
                            ],
                      ],
                      2
                    )
                  : _vm._e(),
              ],
              1
            ),
          ],
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product_image_container" }, [
      _c("div", { staticClass: "skeleton dark animate" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product_price_container" }, [
      _c("div", { staticClass: "special_price skeleton" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/list/product.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/store/list/product.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=4b003a15&scoped=true& */ "./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/list/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& */ "./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b003a15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/list/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/list/product.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/store/list/product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=style&index=0&id=4b003a15&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_4b003a15_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=4b003a15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/list/product.vue?vue&type=template&id=4b003a15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_4b003a15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);