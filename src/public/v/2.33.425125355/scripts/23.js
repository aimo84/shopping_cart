(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.json */ "./resources/js/sections/priceplan-chooser/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/sections/priceplan-chooser/locale.json", 1);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'package-detail': function packageDetail() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(178)]).then(__webpack_require__.bind(null, /*! ./priceplan-chooser-detail */ "./resources/js/sections/priceplan-chooser/priceplan-chooser-detail.vue"));
    },
    'lucky-package-detail': function luckyPackageDetail() {
      return __webpack_require__.e(/*! import() */ 177).then(__webpack_require__.bind(null, /*! ./lucky-priceplan-chooser-detail */ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue"));
    },
    'clm-benefit-terms': function clmBenefitTerms() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @components/clm-benefit-terms */ "./resources/js/components/clm-benefit-terms.vue"));
    } // 'pre2post-package-detail': () => import('./pre2post-priceplan-chooser-detail'),
    // 'pre2post-tnc': () => import('./pre2post-tnc')

  },
  props: {
    camptype: String,
    cancelUrl: String,
    cancelLabel: [Object, Boolean],
    clm: Boolean,
    data: Object,
    moveToUs: Boolean,
    pre2post: Boolean,
    demo: String
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_3__,
      sliderIndex: 0,
      selected: 0
    };
  },
  computed: {
    isMnpBundlingExisting: function isMnpBundlingExisting() {
      return this.camptype === 'mnp_bundling_existing';
    },
    isDeviceBundleExisting: function isDeviceBundleExisting() {
      return this.camptype === 'device_bundle_existing';
    },
    isPre2Post: function isPre2Post() {
      return this.camptype === 'pre2post';
    },
    isDrLuckyPrepaid: function isDrLuckyPrepaid() {
      return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid';
    },
    isLucky: function isLucky() {
      if (this.$route.name === 'online-store-lucky-verify') return true;
      if (this.$route.name.includes('drlucky-verify')) return true;
      if (this.$route.name.includes('drlucky-zodiac-verify')) return true;
      return false;
    },
    // isPre2Post () {
    //   return this.$route.name === 'online-store-trueidbox-verify' && this.$route.query.type === '5'
    // },
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    },
    plans: function plans() {
      var plans = this.$store.state.postpaid.pricePlan.data.record;
      return plans.sort(function (a, b) {
        if (a.recommended === '1' !== (b.recommended === '1')) {
          return a.recommended === '1' ? -1 : 1;
        }

        return parseFloat(a.price) - parseFloat(b.price);
      });
    },
    next: function next() {
      if (this.pre2post) return this.Locale.verify;
      if (this.product.product_type === 'family_black_truecard') return this.Locale.next;
      if (this.product.product_type === 'bundle_existing_verify') return this.Locale.check;
      return this.Locale.verify;
    }
  },
  mounted: function mounted() {
    this.scrollToPackage();
  },
  methods: {
    scrollToPackage: function scrollToPackage() {
      var _this = this;

      if (!this.$route.query.rc) return;
      var index = this.plans.findIndex(function (e) {
        return e.price === _this.$route.query.rc;
      });
      if (index < 0) return;
      this.selected = index;
      this.sliderIndex = Math.floor(index / 3) * 3;
      var packages = this.$refs.packageDetailSlider.querySelectorAll('.package-item');

      if (packages[index]) {
        packages[index].scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    },
    nextPackage: function nextPackage() {
      this.sliderIndex = this.sliderIndex + 3;
    },
    previousPackage: function previousPackage() {
      this.sliderIndex = this.sliderIndex - 3;
    },
    updateSelected: function updateSelected(key) {
      if (this.isLucky) return this.$emit('next', this.plans[key]);
      this.selected = key;
    },
    openClmDialog: function openClmDialog(e) {
      this.$refs.clmBenefitDialog.open(e);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".package-chooser-container.drlucky-prepaid[data-v-45e6fb00] {\n  background: transparent;\n  padding-bottom: 0;\n}\n.package-chooser-container.drlucky-prepaid .package-chooser-button-container[data-v-45e6fb00] {\n  margin-top: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".package-chooser-container[data-v-45e6fb00] {\n  background-color: #fff;\n  padding: 30px;\n  border-radius: 8px;\n}\n.package-chooser-container .package-chooser-title[data-v-45e6fb00] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  margin-bottom: 18px;\n  color: #000;\n  text-align: center;\n}\n.package-chooser-container .package-chooser-button-container[data-v-45e6fb00] {\n  display: grid;\n  grid-gap: 8px 20px;\n  max-width: 452px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  margin: 24px auto 0 auto;\n  padding: 0 16px;\n}\n.package-chooser-container .package-chooser-button-container.lucky a[data-v-45e6fb00] {\n  display: block;\n  margin: auto;\n}\n.package-chooser-container .package-chooser-button-container .button[data-v-45e6fb00] {\n  background-color: #ff0000;\n  width: 100%;\n}\n.package-chooser-container .package-chooser-button-container .button.cancel[data-v-45e6fb00] {\n  background-color: #666;\n}\n.package-chooser-container .package-slider-container[data-v-45e6fb00] {\n  display: flex;\n  align-items: center;\n}\n.package-chooser-container .package-slider-container .button[data-v-45e6fb00] {\n  width: 49px;\n  height: 49px;\n  min-width: 49px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n  background-color: #9b9b9b;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  fill: #fff;\n  cursor: pointer;\n}\n.package-chooser-container .package-slider-container .button[disabled][data-v-45e6fb00] {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0;\n}\n.package-chooser-container .package-slider-container .package-detail-container[data-v-45e6fb00] {\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  padding: 24px 0;\n  margin: 0 16px;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider[data-v-45e6fb00] {\n  display: flex;\n  width: 100%;\n  transition: 150ms transform ease;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item[data-v-45e6fb00] {\n  width: calc(33.3333333333% - 40px);\n  margin: 0 20px;\n  flex-shrink: 0;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item-mobile[data-v-45e6fb00] {\n  display: none;\n}\n.package-chooser-container .slider-indicator-container[data-v-45e6fb00] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10px, 10px));\n  grid-gap: 10px;\n  justify-content: center;\n  margin: 24px 0 40px 0;\n}\n.package-chooser-container .slider-indicator-container .slider-indicator[data-v-45e6fb00] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(74, 74, 74, 0.5019607843);\n  cursor: pointer;\n}\n.package-chooser-container .slider-indicator-container .slider-indicator.active[data-v-45e6fb00] {\n  background-color: #f00b22;\n}\n.package-chooser-container .tnc[data-v-45e6fb00] {\n  text-align: center;\n}\n.package-chooser-container .tnc span[data-v-45e6fb00] {\n  font-size: 18px;\n  text-align: center;\n  color: #3E4A50;\n  text-decoration: underline;\n  cursor: pointer;\n}\n@media screen and (max-width: 1000px) {\n.package-chooser-container[data-v-45e6fb00] {\n    padding: 30px 0;\n}\n.package-chooser-container .package-chooser-title[data-v-45e6fb00] {\n    margin-bottom: 0;\n}\n.package-chooser-container .package-slider-container .button[data-v-45e6fb00] {\n    display: none;\n}\n.package-chooser-container .package-slider-container .package-detail-container[data-v-45e6fb00] {\n    margin: 0;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider[data-v-45e6fb00] {\n    overflow: auto;\n    padding: 16px 0;\n    transform: translateX(0%) !important;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item[data-v-45e6fb00] {\n    width: 300px;\n    margin: 0 6px;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item[data-v-45e6fb00]:first-child {\n    margin-left: 24px;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item.pre2post[data-v-45e6fb00] {\n    width: 240px;\n}\n.package-chooser-container .package-slider-container .package-detail-container .package-detail-slider .package-item-mobile[data-v-45e6fb00] {\n    min-width: 24px;\n    display: block;\n}\n.package-chooser-container .slider-indicator-container[data-v-45e6fb00] {\n    display: none;\n}\n}\n@media screen and (max-width: 449px) {\n.package-chooser-container .package-chooser-button-container[data-v-45e6fb00] {\n    display: flex;\n    flex-direction: column-reverse;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "package-chooser-container",
      class: { "drlucky-prepaid": _vm.isDrLuckyPrepaid },
    },
    [
      !_vm.isDrLuckyPrepaid
        ? [
            _vm.clm
              ? _c("clm-benefit-terms", { ref: "clmBenefitDialog" })
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "package-chooser-title" }, [
              _vm._v(_vm._s(_vm.Locale.choose_package_title[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "package-slider-container" }, [
              _c(
                "div",
                {
                  staticClass: "button",
                  attrs: { disabled: _vm.sliderIndex === 0 },
                  on: { click: _vm.previousPackage },
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
                      _c("path", {
                        attrs: {
                          d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { d: "M0 0h24v24H0z", fill: "none" },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "package-detail-container" }, [
                _c(
                  "div",
                  {
                    ref: "packageDetailSlider",
                    staticClass: "package-detail-slider",
                    style:
                      "transform: translateX(calc(-100% / 3 * " +
                      _vm.sliderIndex +
                      "));",
                  },
                  [
                    _vm.isLucky
                      ? _vm._l(_vm.plans, function (item, key) {
                          return _c("lucky-package-detail", {
                            key: key,
                            staticClass: "package-item",
                            attrs: { plan: item },
                            on: { update: _vm.updateSelected },
                          })
                        })
                      : _vm._l(_vm.plans, function (item, key) {
                          return _c("package-detail", {
                            key: key,
                            staticClass: "package-item",
                            attrs: {
                              demo: _vm.demo,
                              clm: _vm.clm,
                              plan: item,
                              "move-to-us": _vm.moveToUs,
                              selected: _vm.selected === key,
                            },
                            on: {
                              update: _vm.updateSelected,
                              "open-clm-dialog": _vm.openClmDialog,
                            },
                          })
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "package-item-mobile" }),
                  ],
                  2
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "button",
                  attrs: { disabled: _vm.plans.length - 3 <= _vm.sliderIndex },
                  on: { click: _vm.nextPackage },
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
                      _c("path", {
                        attrs: {
                          d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { d: "M0 0h24v24H0z", fill: "none" },
                      }),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "slider-indicator-container" },
              _vm._l(Math.ceil(_vm.plans.length / 3), function (item, key) {
                return _c("div", {
                  key: key,
                  staticClass: "slider-indicator",
                  class: { active: _vm.sliderIndex === 3 * (item - 1) },
                  on: {
                    click: function ($event) {
                      _vm.sliderIndex = 3 * (item - 1)
                    },
                  },
                })
              }),
              0
            ),
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "package-chooser-button-container",
          class: {
            lucky: _vm.isLucky,
            "drlucky-prepaid": _vm.isDrLuckyPrepaid,
          },
        },
        [
          _c(
            "router-link",
            { attrs: { to: _vm.cancelUrl } },
            [
              _vm.isMnpBundlingExisting ||
              _vm.isDeviceBundleExisting ||
              _vm.isPre2Post
                ? [
                    _c("button-element", { staticClass: "button cancel" }, [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.other_campaign_cancel[_vm.$i18n.locale]
                        )
                      ),
                    ]),
                  ]
                : [
                    _c("button-element", { staticClass: "button cancel" }, [
                      _vm._v(
                        _vm._s(
                          _vm.cancelLabel[_vm.$i18n.locale] ||
                            _vm.Locale.cancel[_vm.$i18n.locale]
                        )
                      ),
                    ]),
                  ],
            ],
            2
          ),
          _vm._v(" "),
          !_vm.isLucky
            ? _c(
                "button-element",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.demo,
                      expression: "!demo",
                    },
                  ],
                  staticClass: "button",
                  attrs: { id: "verify_package" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("next", _vm.plans[_vm.selected])
                    },
                  },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.next[_vm.$i18n.locale]) +
                      "\n      "
                  ),
                ]
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45e6fb00&scoped=true& */ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& */ "./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& */ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45e6fb00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/sections/priceplan-chooser/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=style&index=1&id=45e6fb00&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45e6fb00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/index.vue?vue&type=template&id=45e6fb00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45e6fb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/locale.json":
/*!*************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/locale.json ***!
  \*************************************************************/
/*! exports provided: selected_number, your_package, per_month, plan_select, plan_selected, choose_package_title, cancel, verify, move, other_campaign_cancel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"selected_number\":{\"th\":\"เบอร์โทรศัพท์ที่คุณเลือก\",\"en\":\"The number you selected\"},\"your_package\":{\"th\":\"แพ็กเกจของคุณ:\",\"en\":\"Your Package:\"},\"per_month\":{\"th\":\"รายเดือน\",\"en\":\"per month\"},\"plan_select\":{\"th\":\"เลือก\",\"en\":\"Select\"},\"plan_selected\":{\"th\":\"สินค้าที่เลือก\",\"en\":\"Selected\"},\"choose_package_title\":{\"th\":\"เลือกแพ็กเกจที่ต้องการ\",\"en\":\"Choose the package\"},\"cancel\":{\"th\":\"กลับไปหน้าเลือกเบอร์\",\"en\":\"Cancel\"},\"verify\":{\"th\":\"ตรวจสอบสิทธิ์\",\"en\":\"Verify\"},\"move\":{\"th\":\"ย้ายค่ายออนไลน์ ข้อเสนอพิเศษ\",\"en\":\"Move to Us Online Exclusive\"},\"other_campaign_cancel\":{\"th\":\"ย้อนกลับ\",\"en\":\"Cancel\"}}");

/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/sections/priceplan-chooser/style.scss?vue&type=style&index=0&id=45e6fb00&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_45e6fb00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);