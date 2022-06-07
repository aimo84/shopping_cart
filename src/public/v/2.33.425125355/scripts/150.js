(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.json */ "./resources/js/components/trueonline-tracking/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/components/trueonline-tracking/locale.json", 1);
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_1__
    };
  },
  computed: {
    tolDueDate: function tolDueDate() {
      return this.$store.state.trueonline.tolDueDate;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fail-container[data-v-081ec655] {\n  margin-top: 20px;\n}\n.fail-container .title[data-v-081ec655] {\n  font-size: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.fail-container .fail[data-v-081ec655] {\n  margin-top: 36px;\n  text-align: center;\n}\n.fail-container .fail .icon[data-v-081ec655] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  margin: auto;\n}\n.fail-container .fail .icon svg[data-v-081ec655] {\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n}\n.fail-container .fail .label[data-v-081ec655] {\n  margin: 24px auto 36px auto;\n  font-family: \"TrueBold\";\n  font-size: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "fail-container" }, [
    _c("div", { staticClass: "title" }, [
      _vm._v(_vm._s(_vm.Locale.title_2[_vm.$i18n.locale])),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fail" }, [
      _c("div", { staticClass: "icon" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
            },
          },
          [
            _c("path", { attrs: { d: "M0 0h24v24H0V0z", fill: "none" } }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
              },
            }),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "label" }, [
        _vm._v(_vm._s(_vm.tolDueDate.message[_vm.$i18n.locale])),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "buttons" },
        [
          _c(
            "button-element",
            {
              on: {
                click: function ($event) {
                  return _vm.$emit("route", "modify")
                },
              },
            },
            [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
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

/***/ "./resources/js/components/trueonline-tracking/fail.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/trueonline-tracking/fail.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fail.vue?vue&type=template&id=081ec655&scoped=true& */ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true&");
/* harmony import */ var _fail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fail.vue?vue&type=script&lang=js& */ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& */ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "081ec655",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/trueonline-tracking/fail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./fail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=style&index=0&id=081ec655&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_style_index_0_id_081ec655_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fail.vue?vue&type=template&id=081ec655&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trueonline-tracking/fail.vue?vue&type=template&id=081ec655&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fail_vue_vue_type_template_id_081ec655_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/trueonline-tracking/locale.json":
/*!*****************************************************************!*\
  !*** ./resources/js/components/trueonline-tracking/locale.json ***!
  \*****************************************************************/
/*! exports provided: title, title_2, name_dear, form, change_timeslot, back, confirm_change_timeslot, close, installation_date, time, status, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"th\":\"ตรวจสอบสถานะการติดตั้ง TrueOnline\",\"en\":\"TrueOnline Installation Location\"},\"title_2\":{\"th\":\"สถานะการติดตั้ง TrueOnline\",\"en\":\"TrueOnline Installation Location\"},\"name_dear\":{\"th\":\"สวัสดี คุณ\",\"en\":\"Dear\"},\"form\":{\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"thai_id_placeholder\":{\"th\":\"กรอกหมายเลขบัตรประชาชนที่ได้ลงทะเบียนไว้\",\"en\":\"Enter Thai ID/Passsport\"},\"phone_number\":{\"th\":\"เบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Registered Phone Number\"},\"phone_number_placeholder\":{\"th\":\"กรอกเบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Enter contact phone number\"},\"fetch_otp\":{\"th\":\"ขอรหัส OTP\",\"en\":\"Request OTP\"},\"otp\":{\"th\":\"กรอกรหัส OTP\",\"en\":\"Enter the OTP that you received\"},\"request_otp_again\":{\"th\":\"ขอรหัสอีกครั้ง\",\"en\":\"Resend\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Submit\"}},\"change_timeslot\":{\"th\":\"เปลี่ยนวันติดตั้ง\",\"en\":\"Change Installation Date\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"confirm_change_timeslot\":{\"th\":\"ยืนยันการเปลี่ยนเวลา\",\"en\":\"Confirm\"},\"close\":{\"th\":\"ปิด\",\"en\":\"Close\"},\"installation_date\":{\"th\":\"วันเวลาการติดตั้ง\",\"en\":\"Installation Date\"},\"time\":{\"th\":\"เวลา\",\"en\":\"Time\"},\"status\":{\"th\":\"สถานะ:\",\"en\":\"Status:\"}}");

/***/ })

}]);