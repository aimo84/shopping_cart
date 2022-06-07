(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/pre2post/noneligible/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/pre2post/noneligible/locale.json", 1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_2__,
      loaded: false
    };
  },
  mounted: function mounted() {
    try {
      this.$emit('loading', true);
      if (!this.data.verify_failed && !this.$route.query.verify_fail) throw new Error();
      this.loaded = true;
      this.$emit('loading', false);
    } catch (e) {
      return this.$router.push({
        name: 'pre2post-verify'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-176da760] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: 24px auto;\n  padding: 36px 24px;\n  line-height: 24px;\n  font-size: 24px;\n  color: #3e4a50;\n}\n.result-container .title[data-v-176da760] {\n  font-family: \"TrueBold\";\n  font-size: 32px;\n  line-height: 28px;\n  max-width: 600px;\n}\n.result-container .divider[data-v-176da760] {\n  height: 1px;\n  width: 100%;\n  background-color: #e2e2e2;\n  margin: 20px 0;\n}\n.result-container .subtitle[data-v-176da760] {\n  font-size: 24px;\n  line-height: 24px;\n  max-width: 600px;\n  font-family: \"TrueBold\";\n}\n.result-container .options[data-v-176da760] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 180px);\n  justify-content: center;\n  grid-gap: 24px;\n  margin: 24px auto;\n  width: 100%;\n}\n.result-container .options .option[data-v-176da760] {\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  padding: 48px 12px 24px 12px;\n  line-height: 20px;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid #fff;\n  transition: 50ms ease border-color;\n}\n.result-container .options .option[data-v-176da760]:hover {\n  border-color: #ed3833;\n}\n.result-container .options .option .save[data-v-176da760] {\n  font-family: \"TrueBold\";\n  position: absolute;\n  background-color: #f32525;\n  color: #fff;\n  top: 0;\n  left: 0;\n  padding: 6px 0 6px 10px;\n  font-size: 20px;\n}\n.result-container .options .option .save[data-v-176da760]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -32px;\n  width: 32px;\n  height: 100%;\n  background: #ed3833;\n  border-bottom-right-radius: 100%;\n}\n.result-container .options .option .icon[data-v-176da760] {\n  height: 100px;\n  width: auto;\n  margin: auto auto 24px;\n}\n.result-container .options .option .option-title[data-v-176da760] {\n  font-family: \"TrueBold\";\n}\n.result-container .other[data-v-176da760] {\n  margin-bottom: 40px;\n  font-family: \"TrueBold\";\n}\n.result-container .other.link[data-v-176da760] {\n  text-decoration: none;\n}\n.result-container .other.link .button[data-v-176da760] {\n  background-color: #666666;\n}\n.result-container .tnc-container[data-v-176da760] {\n  max-width: 400px;\n  margin-bottom: 24px;\n}\n.result-container .tnc-container .tnc-label[data-v-176da760] {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.result-container .tnc-container .tnc-label svg[data-v-176da760] {\n  margin-left: 8px;\n  transition: 50ms ease transform;\n}\n.result-container .tnc-container .tnc-label svg[active][data-v-176da760] {\n  transform: rotate(180deg);\n}\n.result-container .tnc-container .tnc-content[data-v-176da760] {\n  text-align: left;\n  margin-top: 8px;\n  font-family: \"TrueLight\";\n  font-size: 22px;\n  line-height: 22px;\n  white-space: pre-line;\n}\n@media screen and (max-width: 1148px) {\n.result-outer-container[data-v-176da760] {\n    padding-top: 24px;\n}\n.result-container[data-v-176da760] {\n    margin: 0 auto;\n}\n}\n@media screen and (max-width: 640px) {\n.result-container[data-v-176da760] {\n    padding: 30px 24px 50px 24px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true& ***!
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
  return _vm.loaded
    ? _c("div", { staticClass: "result-outer-container" }, [
        _c(
          "div",
          { staticClass: "result-container" },
          [
            _c("div", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.Locale.prepaid.title[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "subtitle red" }, [
              _vm._v(_vm._s(_vm.Locale.prepaid.subtitle[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "options" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "option",
                    attrs: {
                      id: "new_number",
                      to: {
                        name: "packages",
                        query: {
                          type: "postpaid",
                        },
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "icon",
                      attrs: { src: "/images/verify/true-new-postpaid.png" },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "option-title" }, [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.prepaid.device_only_title[_vm.$i18n.locale]
                        )
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "option",
                    attrs: {
                      href: "https://store.truecorp.co.th/online-store?category=3165",
                      id: "lucky_number_with_device",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "icon",
                      attrs: { src: "/images/verify/true-prepaid-lucky.png" },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "option-title" }, [
                      _vm._v(
                        _vm._s(_vm.Locale.prepaid.lucky_title[_vm.$i18n.locale])
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "other" }, [
              _vm._v(_vm._s(_vm.Locale.prepaid.other_option[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "other link",
                attrs: {
                  to: {
                    name: "online-store-list",
                  },
                },
              },
              [
                _c("button-element", { staticClass: "button back" }, [
                  _vm._v(_vm._s(_vm.Locale.prepaid.back[_vm.$i18n.locale])),
                ]),
              ],
              1
            ),
          ],
          1
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/pre2post/noneligible/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/pre2post/noneligible/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=176da760&scoped=true& */ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& */ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "176da760",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pre2post/noneligible/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=style&index=0&id=176da760&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_176da760_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=176da760&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/noneligible/index.vue?vue&type=template&id=176da760&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_176da760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/pre2post/noneligible/locale.json":
/*!*************************************************************!*\
  !*** ./resources/js/pages/pre2post/noneligible/locale.json ***!
  \*************************************************************/
/*! exports provided: tnc_label, prepaid, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tnc_label\":{\"th\":\"เงื่อนไขสั่งซื้อ\",\"en\":\"Term and Condition\"},\"prepaid\":{\"title\":{\"en\":\"Offers is not available for your prepaid number\",\"th\":\"Offers is not available for your prepaid number\"},\"subtitle\":{\"en\":\"Still interested? You can choose other ways to get postpaid number:\",\"th\":\"Still interested? You can choose other ways to get postpaid number:\"},\"save\":{\"en\":\"Save\",\"th\":\"ลดเพิ่ม\"},\"baht\":{\"en\":\"฿\",\"th\":\".-\"},\"lucky_title\":{\"en\":\"Free Lucky number & Device\",\"th\":\"ซื้อเครื่องพร้อมเปิดเบอร์มงคล\"},\"device_only_title\":{\"en\":\"Open new postpaid number\",\"th\":\"Open new postpaid number\"},\"other_option\":{\"en\":\"or switch to postpaid at True Shop\",\"th\":\"หรือติดต่อทรูช็อปทุกสาขาเพื่อเปลี่ยนจากระบบเติมเงินเป็นรายเดือน\"},\"back\":{\"en\":\"View other promotions\",\"th\":\"View other promotions\"},\"tnc_label\":{\"en\":\"Terms & Conditions\",\"th\":\"เงื่อนไขการเปลี่ยนจากระบบเติมเงินเป็นรายเดือน\"},\"tnc_content\":{\"en\":\"ในการเปลี่ยนจากระบบเติมเงินเป็นรายเดือน ลูกค้าต้องไม่ติดเงื่อนไขดังนี้\\n1.มีอายุการใช้งานมากกว่าหรือเท่ากับ 90 วัน\\n2.เป็นเบอร์ระบบเติมเงินที่ได้รับการลงทะเบียนแล้ว\\n3.เบอร์ที่ลงทะเบียนกับบัตรประชาชนต้องยังไม่เกินจำนวนสูงสุดที่ระบบให้ลงทะเบียนได้\",\"th\":\"ในการเปลี่ยนจากระบบเติมเงินเป็นรายเดือน ลูกค้าต้องไม่ติดเงื่อนไขดังนี้\\n1.มีอายุการใช้งานมากกว่าหรือเท่ากับ 90 วัน\\n2.เป็นเบอร์ระบบเติมเงินที่ได้รับการลงทะเบียนแล้ว\\n3.เบอร์ที่ลงทะเบียนกับบัตรประชาชนต้องยังไม่เกินจำนวนสูงสุดที่ระบบให้ลงทะเบียนได้\"}}}");

/***/ })

}]);