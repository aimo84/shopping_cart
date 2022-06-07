(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/privilege/verify/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    back: function back() {
      this.$router.push({
        name: 'online-store-detail',
        params: {
          id: this.$route.query.product_id
        },
        query: {
          token: this.$route.query.token,
          paysmooth_token: this.$route.query.paysmooth_token
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-771eced4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 1.5em;\n  max-width: 1100px;\n  width: calc(100% - 40px);\n  margin: 24px auto;\n  padding: 76px 24px 50px 24px;\n  font-family: \"Thonburi\";\n}\n.result-container .icon[data-v-771eced4] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-771eced4] {\n  fill: #fff;\n}\n.result-container .icon.failed[data-v-771eced4] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .icon.header[data-v-771eced4] {\n  color: #ffffff;\n  font-size: 30px;\n  margin-bottom: 0;\n  min-width: 58px;\n}\n.result-container .result-title[data-v-771eced4] {\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  text-align: center;\n  max-width: 600px;\n}\n.result-container .result-title.success[data-v-771eced4] {\n  color: #e4a20f;\n}\n.result-container .result-title.failed[data-v-771eced4] {\n  color: #ff0000;\n}\n.result-container .result-button-container[data-v-771eced4] {\n  margin-top: 32px;\n  display: flex;\n}\n.result-container .result-button-container .button[data-v-771eced4] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-771eced4] {\n  background-color: #666;\n}\n.result-container .mnp-step[data-v-771eced4] {\n  padding: 0 30px 0 30px;\n}\n.result-container .step-header[data-v-771eced4] {\n  font-size: 36px;\n  margin: 30px 0px 30px 0px;\n  font-family: \"TrueBold\";\n  text-align: left;\n}\n.result-container .step[data-v-771eced4] {\n  width: 100%;\n  padding-bottom: 30px;\n}\n.result-container .step ul[data-v-771eced4] {\n  margin: 0;\n}\n.result-container .sub-step[data-v-771eced4] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.result-container .step-title[data-v-771eced4] {\n  margin-left: 20px;\n  text-align: left;\n  font-size: 24px;\n  font-weight: bold;\n  width: 100%;\n}\n.result-container .step-detail[data-v-771eced4] {\n  width: 100%;\n  margin-left: 100px;\n  text-align: left;\n  font-size: 20px;\n}\n.result-container .step-detail li[data-v-771eced4] {\n  margin-bottom: 10px;\n}\n.result-container .info[data-v-771eced4] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 30px;\n}\n.result-container .sub-info[data-v-771eced4] {\n  margin: 10px 0 10px 0;\n  min-width: 258px;\n}\n.result-container .info-icon[data-v-771eced4] {\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .info-text[data-v-771eced4] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.result-container .info-button .button[data-v-771eced4] {\n  min-width: 160px;\n}\n@media screen and (max-width: 1148px) {\n.result-outer-container[data-v-771eced4] {\n    padding-top: 24px;\n}\n.result-container[data-v-771eced4] {\n    margin: 0 auto;\n}\n}\n@media screen and (max-width: 813px) {\n.result-container .icon.header[data-v-771eced4] {\n    margin-bottom: 15px;\n}\n.result-container .mnp-step[data-v-771eced4] {\n    padding: 0;\n}\n.result-container .step-header[data-v-771eced4] {\n    text-align: center;\n}\n.result-container .sub-step[data-v-771eced4] {\n    flex-direction: column;\n}\n.result-container .step-title[data-v-771eced4] {\n    margin-left: 0;\n}\n.result-container .step-detail[data-v-771eced4] {\n    margin-left: 0;\n}\n.result-container .step-detail span[data-v-771eced4] {\n    display: block;\n}\n.result-container .info[data-v-771eced4] {\n    display: unset;\n}\n.result-container .sub-info[data-v-771eced4] {\n    margin: 0 0 50px 0;\n}\n}\n@media screen and (max-width: 640px) {\n.result-container[data-v-771eced4] {\n    padding: 30px 24px 50px 24px;\n}\n.result-container .icon[data-v-771eced4] {\n    margin-bottom: 16px;\n}\n.result-container .result-title[data-v-771eced4] {\n    font-size: 28px;\n    line-height: 30px;\n}\n.result-container .step-header[data-v-771eced4] {\n    font-size: 27px;\n}\n.result-container .step-title[data-v-771eced4] {\n    font-size: 17px;\n}\n.result-container .step-detail[data-v-771eced4] {\n    font-size: 18px;\n}\n.result-container .info-text[data-v-771eced4] {\n    font-size: 17px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "result-outer-container" }, [
    _c("div", { staticClass: "result-container" }, [
      _c("div", { staticClass: "icon failed" }, [
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
      _c("div", { staticClass: "result-title failed" }, [
        _vm._v("ขออภัยค่ะ คุณไม่สามารถรับสิทธิพิเศษนี้"),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _c("div", { staticClass: "sub-info" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "info-text" }, [
            _vm._v("\n          แชทกับเจ้าหน้าที่ทรู\n        "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-button" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://galb.truecorp.co.th/iservice/widgetgmsResponsive.html?Product=TMH&User_intent=MNP&Language=TH&SubmitterSourceName=truemoveh&Channel=web&Subject=MNP_Port_In",
                  target: "_blank",
                },
              },
              [
                _c("button-element", { staticClass: "button" }, [
                  _vm._v("Live chat"),
                ]),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sub-info" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "info-text" }, [
            _vm._v("\n          โทรหาเจ้าหน้าที่ทรูสโตร์\n        "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-button" }, [
            _c(
              "a",
              { attrs: { href: "tel:027008855" } },
              [
                _c("button-element", { staticClass: "button" }, [
                  _vm._v("โทรเลย"),
                ]),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sub-info" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "info-text" }, [
            _vm._v("\n          ย้ายที่ทรูช้อป/ทรูพาร์ทเนอร์\n        "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-button" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://iservice.truecorp.co.th/store-locator",
                  target: "_blank",
                },
              },
              [
                _c("button-element", { staticClass: "button" }, [
                  _vm._v("ค้นหาสาขาใกล้บ้าน"),
                ]),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "result-button-container" },
        [
          _c(
            "button-element",
            {
              staticClass: "button back",
              on: {
                click: function ($event) {
                  return _vm.back()
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mnp-step" }, [
      _c("div", { staticClass: "step-header" }, [
        _vm._v("ขั้นตอนการย้ายค่ายผ่านช่องทาง Online"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "step" }, [
        _c("div", { staticClass: "sub-step" }, [
          _c("div", { staticClass: "icon failed header" }, [_vm._v("1")]),
          _vm._v(" "),
          _c("div", { staticClass: "step-title" }, [
            _vm._v("ขั้นตอนที่ 1 เช็คความพร้อมก่อนย้าย"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sub-step" }, [
          _c("div", { staticClass: "step-detail" }, [
            _c("ul", [
              _c("li", [
                _vm._v("ระบบรายเดือน "),
                _c("span", [
                  _vm._v(
                    "ตรวจสอบไม่มียอดค้างชำระค่าบริการ ไม่อยู่ระหว่างการโอนเปลี่ยนเจ้าของ และไม่ติดสัญญาแพ็กเกจ หรือสัญญาอื่น ๆ กับเครือข่ายเดิม"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("ระบบเติมเงิน "),
                _c("span", [
                  _vm._v(
                    "หมายเลขต้องจดทะเบียนภายใต้เลขบัตรประชาชน และชื่อของลูกค้า หากมีเงินที่เหลืออยู่ต้องใช้เงินให้หมดหรือติดต่อเครือข่ายเดิม เนื่องจากการย้ายค่ายจะไม่สามารถโอนเงิน และโอนวันจากเครือข่ายเดิมได้"
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "step" }, [
        _c("div", { staticClass: "sub-step" }, [
          _c("div", { staticClass: "icon failed header" }, [_vm._v("2")]),
          _vm._v(" "),
          _c("div", { staticClass: "step-title" }, [
            _vm._v(
              "ขั้นตอนที่ 2 เลือกแพ็กเกจพิเศษมากมาย หรือเลือกรับสิทธิพิเศษส่วนลดสมาร์ทโฟนตรงใจ"
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "step" }, [
        _c("div", { staticClass: "sub-step" }, [
          _c("div", { staticClass: "icon failed header" }, [_vm._v("3")]),
          _vm._v(" "),
          _c("div", { staticClass: "step-title" }, [
            _vm._v("ขั้นตอนที่ 3 เตรียมเอกสารสำหรับย้ายค่าย"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sub-step" }, [
          _c("div", { staticClass: "step-detail" }, [
            _c("ul", [
              _c("li", [
                _vm._v("เบอร์ที่ต้องการย้ายค่าย "),
                _c("span", [
                  _vm._v("โดยจดทะเบียนภายใต้เลขบัตรประชาชน และชื่อของลูกค้า"),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("บัตรประจำตัวประชาชน")]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "รหัสย้ายค่าย กด *151* เลขที่บัตรประชาชน # โทรออก รอผลการตรวจสอบ 10 นาที สำหรับลูกค้าชาวต่างชาติ กรุณาพิมพ์ SMS หมายเลขพาสปอร์ตแล้วส่งมาที่เบอร์ 444415 โดยรหัสแสดงตนเพื่อย้ายค่าย 8 หลัก สามารถใช้เพื่อขอดำเนินการย้ายค่ายได้ภายในเวลา 24.00 น. ของวันเดียวกัน กรณีข้ามวันต้องกดขอรหัสแสดงตนใหม่"
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "ในกรณีต้องการรับสิทธิ์ส่วนลดสำหรับซื้อเครื่องพร้อมแพ็คเก็จ สามารถแจ้งเจ้าหน้าที่ย้ายค่ายเพื่อมาซื้อเครื่อง"
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-icon" }, [
      _c("img", { attrs: { src: "/images/icons/icon-true-chat.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-icon" }, [
      _c("img", { attrs: { src: "/images/icons/icon-true-care.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-icon" }, [
      _c("img", { attrs: { src: "/images/icons/icon-true-shop.png" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/one-step-failed.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/one-step-failed.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-step-failed.vue?vue&type=template&id=771eced4&scoped=true& */ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true&");
/* harmony import */ var _one_step_failed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-step-failed.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& */ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _one_step_failed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "771eced4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/privilege/verify/one-step-failed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./one-step-failed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=style&index=0&id=771eced4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_style_index_0_id_771eced4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./one-step-failed.vue?vue&type=template&id=771eced4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/privilege/verify/one-step-failed.vue?vue&type=template&id=771eced4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_one_step_failed_vue_vue_type_template_id_771eced4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);