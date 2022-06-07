(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[177],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.json */ "./resources/js/sections/priceplan-chooser/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/sections/priceplan-chooser/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    plan: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_1__
    };
  },
  computed: {
    product: function product() {
      return this.$store.state.products.productInfo.data.record;
    }
  },
  methods: {
    updateSelected: function updateSelected() {
      this.$emit('update', this.$vnode.key);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gradient-container[data-v-784290e5] {\n  background: linear-gradient(to bottom, #e8e8e8 10px, #fdfdfd 10px);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n  padding: 4px 0;\n  display: flex;\n  flex-direction: column;\n}\n.gradient-container .package-detail-container[data-v-784290e5] {\n  background-color: #fdfdfd;\n  border-radius: 5px;\n  overflow: hidden;\n  flex: 1;\n}\n.gradient-container .package-detail-container .package-detail[data-v-784290e5] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.gradient-container .package-detail-container .price-container[data-v-784290e5] {\n  text-align: center;\n  padding: 16px 0;\n  background: #e8e8e8;\n  color: #555;\n}\n.gradient-container .package-detail-container .price-container .price[data-v-784290e5] {\n  font-size: 80px;\n  line-height: 48px;\n  font-family: \"TrueBold\";\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n}\n.gradient-container .package-detail-container .price-container .price .baht[data-v-784290e5] {\n  font-size: 48px;\n  line-height: 36px;\n  margin-left: 4px;\n}\n.gradient-container .package-detail-container .price-container .label[data-v-784290e5] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  line-height: 24px;\n}\n.gradient-container .package-detail-container .package-name[data-v-784290e5] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-family: \"TrueBold\";\n  font-size: 26px;\n  line-height: 22px;\n  padding: 16px 8px;\n  color: #212121;\n  position: relative;\n}\n.gradient-container .package-detail-container .package-name[data-v-784290e5]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 12px solid #e8e8e8;\n}\n.gradient-container .package-detail-container .feature-container[data-v-784290e5] {\n  font-size: 24px;\n  line-height: 24px;\n  padding: 0 16px;\n  flex: 1;\n}\n.gradient-container .package-detail-container .feature-container[data-v-784290e5] p {\n  margin: 12px 0;\n}\n.gradient-container .package-detail-container .feature-container[data-v-784290e5] hr {\n  background: #ddd;\n  height: 2px;\n  border: none;\n}\n.gradient-container .package-detail-container .feature-container[data-v-784290e5] img {\n  max-width: 100%;\n}\n.gradient-container .package-detail-container .button[data-v-784290e5] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px auto 20px auto;\n  background-color: #ff0000;\n  min-width: initial;\n  width: 80%;\n}\n@media screen and (max-width: 1000px) {\n.gradient-container .package-detail-container .price-container[data-v-784290e5] {\n    padding-top: 12px;\n}\n.gradient-container .package-detail-container .price-container .price[data-v-784290e5] {\n    font-size: 60px;\n    line-height: 60px;\n    height: 50px;\n}\n.gradient-container .package-detail-container .price-container .price .baht[data-v-784290e5] {\n    font-size: 30px;\n    line-height: 60px;\n}\n.gradient-container .package-detail-container .price-container .label[data-v-784290e5] {\n    font-size: 18px;\n}\n.gradient-container .package-detail-container .price-container .button[data-v-784290e5] {\n    margin: 8px auto;\n}\n.gradient-container .package-detail-container .feature-container[data-v-784290e5] {\n    font-size: 20px;\n    line-height: 20px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "gradient-container" }, [
    _c("div", { staticClass: "package-detail-container" }, [
      _c(
        "div",
        { staticClass: "package-detail" },
        [
          _c("div", { staticClass: "price-container" }, [
            _c("div", { staticClass: "price" }, [
              _c("span", [_vm._v(_vm._s(_vm.plan.price))]),
              _vm._v(" "),
              _c("span", { staticClass: "baht" }, [_vm._v("฿")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "label" }, [
              _vm._v(_vm._s(_vm.Locale.per_month[_vm.$i18n.locale])),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "package-name" }, [
            _vm._v(_vm._s(_vm.plan.name)),
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "feature-container",
            domProps: { innerHTML: _vm._s(_vm.plan.long_description) },
          }),
          _vm._v(" "),
          _c(
            "button-element",
            {
              staticClass: "button",
              attrs: { id: "verify_package" },
              on: { click: _vm.updateSelected },
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.Locale.plan_select[_vm.$i18n.locale]) +
                  "\n      "
              ),
            ]
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

/***/ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true& */ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true&");
/* harmony import */ var _lucky_priceplan_chooser_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js& */ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& */ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _lucky_priceplan_chooser_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "784290e5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=style&index=0&id=784290e5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_style_index_0_id_784290e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/priceplan-chooser/lucky-priceplan-chooser-detail.vue?vue&type=template&id=784290e5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lucky_priceplan_chooser_detail_vue_vue_type_template_id_784290e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);