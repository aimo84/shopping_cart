(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activate-sim.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    postpaid: [Object, Boolean]
  },
  data: function data() {
    return {
      Locale: {
        monthly_service_fee: {
          th: 'ค่าบริการรายเดือน',
          en: 'Monthly service fee'
        },
        monthly_service_baht: {
          th: 'บาท',
          en: '฿'
        },
        title: {
          th: 'เบอร์ที่คุณลงทะเบียนซิม',
          en: 'The number that you have registered for the SIM'
        },
        "package": {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        thai_id: {
          th: 'หมายเลขบัตรประชาชน',
          en: 'Thai ID number'
        },
        start_time: {
          th: 'เริ่มนับเวลา',
          en: 'Start time'
        },
        end_time: {
          th: 'หมดเวลา',
          en: 'End time'
        },
        note: {
          th: 'หมายเหตุ',
          en: 'Note'
        },
        note_1: {
          th: 'ระบบจะจองเบอร์ที่คุณเลือกไว้ 2 ชั่วโมง กรุณาชำระเงินให้สำเร็จภายใน เวลาที่กำหนด เพื่อหลีกเลี่ยงการหลุดจองเบอร์',
          en: 'The system will reserve your chosen number for 2 hours. Please complete the payment within time required to avoid booking numbers'
        },
        note_2: {
          th: 'บริษัทฯ ขอสงวนสิทธิ์ในการยกเลิกการสั่งซื้อและขอคืนเงินทุกกรณี',
          en: 'The company reserves the right to cancel the order and refund all cases.'
        },
        step: {
          th: 'ขั้นตอนการเปิดใช้งานเบอร์ใหม่',
          en: 'Steps to activate a new number'
        },
        step_1: {
          th: 'เลือกและลงทะเบียนผ่านระบบออนไลน์',
          en: 'Search and book numbers online'
        },
        step_2: {
          th: 'ยืนยันการเปิดใช้บริการผ่านพนักงาน Call center',
          en: 'Activate the telephone number by confirming confirm with the call center staff'
        },
        step_3: {
          th: 'ยืืนยันการเปิดใช้งานสำเร็จ',
          en: 'Activate completely new number'
        }
      }
    };
  },
  computed: {
    phoneNumber: function phoneNumber() {
      return this.postpaid.meta.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    startTime: function startTime() {
      var date = this.postpaid.updated_at;
      if (date) return this.computeTime(date.replace(/-/g, '/'));
      return false;
    },
    endTime: function endTime() {
      var date = this.postpaid.hold_expired_date;
      if (date) return this.computeTime(date.replace(/-/g, '/'));
      return false;
    },
    monthlyServiceFee: function monthlyServiceFee() {
      var fee = this.postpaid.meta.price_plan && this.postpaid.meta.price_plan.price;
      return fee;
    },
    isLowTier: function isLowTier() {
      var _meta$berfuntong;

      var meta = this.postpaid.meta;
      var isVhora = meta.campaign_type === 'vhora';
      var hasPackageCode = (_meta$berfuntong = meta.berfuntong) === null || _meta$berfuntong === void 0 ? void 0 : _meta$berfuntong.package_code;
      return isVhora && hasPackageCode;
    },
    showImage: function showImage() {
      if (this.isLowTier) return true;
      return this.postpaid.meta.sim_type !== 'prepaid';
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sim-container[data-v-30ea8370] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sim-container .sim-info-container[data-v-30ea8370] {\n  font-size: 26px;\n  line-height: 33.2px;\n  font-family: \"TrueLight\";\n  color: #000;\n  padding: 20px;\n}\n.sim-container .sim-info-container .sim-info-title[data-v-30ea8370] {\n  font-family: \"TrueBold\";\n  font-size: 28px;\n  line-height: 25.6px;\n}\n.sim-container .sim-info-container .sim-info-title.package[data-v-30ea8370] {\n  margin-top: 16px;\n}\n.sim-container .sim-info-container .red[data-v-30ea8370] {\n  color: #E62627;\n  white-space: nowrap;\n  font-family: \"TrueBold\";\n}\n.sim-container .sim-info-container .gray[data-v-30ea8370] {\n  color: #666;\n}\n.sim-container .sim-note-container[data-v-30ea8370] {\n  font-size: 16px;\n  line-height: 16px;\n  color: #666;\n  font-family: \"TrueBold\";\n  padding: 0 20px 20px 20px;\n}\n.sim-container .sim-note-container .time-container[data-v-30ea8370] {\n  background-color: #e4a20f;\n  border-radius: 8px;\n  padding: 0 20px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 20px;\n  line-height: 30px;\n  margin-bottom: 12px;\n}\n.sim-container .sim-note-container ul[data-v-30ea8370] {\n  margin: 0;\n  color: #9b9b9b;\n  font-family: \"TrueMedium\";\n  padding-left: 20px;\n}\n.sim-container .sim-activate-guide-container[data-v-30ea8370] {\n  background: #cccccc;\n  padding-bottom: 16px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide-label[data-v-30ea8370] {\n  border-bottom-right-radius: 40px;\n  background: #b50000;\n  line-height: 24px;\n  display: inline-flex;\n  padding: 8px 30px 8px 20px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide[data-v-30ea8370] {\n  display: grid;\n  grid-template-columns: 1fr 30px 1fr 30px 1fr;\n  grid-gap: 24px;\n  margin: 0 24px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .guide img[data-v-30ea8370] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .guide .guide-label[data-v-30ea8370] {\n  text-align: center;\n  font-size: 18px;\n  line-height: 18px;\n  color: #000;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .right[data-v-30ea8370] {\n  text-align: center;\n  padding-top: 34px;\n}\n@media screen and (max-width: 860px) {\n.sim-container .sim-activate-guide-container .sim-activate-guide[data-v-30ea8370] {\n    grid-template-columns: 1fr;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .guide[data-v-30ea8370] {\n    display: flex;\n    align-items: center;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .guide img[data-v-30ea8370] {\n    width: 50%;\n    max-width: 200px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .guide .guide-label[data-v-30ea8370] {\n    width: 50%;\n    text-align: left;\n    padding-left: 16px;\n}\n.sim-container .sim-activate-guide-container .sim-activate-guide .right[data-v-30ea8370] {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return this.postpaid
    ? _c("div", { staticClass: "sim-container" }, [
        _c(
          "div",
          { staticClass: "sim-info-container" },
          [
            _c("div", { staticClass: "sim-info-title" }, [
              _vm._v(_vm._s(_vm.Locale.title[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", [
              _vm.postpaid.meta.thai_id
                ? _c("span", [
                    _vm._v(
                      "Thai ID number " +
                        _vm._s(_vm.postpaid.meta.thai_id) +
                        ": "
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "red" }, [
                _vm._v(_vm._s(_vm.phoneNumber)),
              ]),
            ]),
            _vm._v(" "),
            _vm.postpaid.meta.price_plan &&
            _vm.postpaid.meta.price_plan.description
              ? [
                  _c("div", { staticClass: "sim-info-title package" }, [
                    _vm._v(_vm._s(_vm.Locale.package[_vm.$i18n.locale])),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(_vm._s(_vm.postpaid.meta.price_plan.description)),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      _vm._s(_vm.Locale.monthly_service_fee[_vm.$i18n.locale]) +
                        " " +
                        _vm._s(_vm.monthlyServiceFee) +
                        " " +
                        _vm._s(
                          _vm.Locale.monthly_service_baht[_vm.$i18n.locale]
                        ) +
                        " "
                    ),
                  ]),
                ]
              : _vm._e(),
          ],
          2
        ),
        _vm._v(" "),
        _vm.postpaid
          ? _c("div", { staticClass: "sim-note-container" }, [
              _vm.startTime && _vm.endTime
                ? _c("div", { staticClass: "time-container" }, [
                    _vm._v(
                      _vm._s(_vm.Locale.start_time[_vm.$i18n.locale]) +
                        " " +
                        _vm._s(_vm.startTime) +
                        " - " +
                        _vm._s(_vm.Locale.end_time[_vm.$i18n.locale]) +
                        " " +
                        _vm._s(_vm.endTime)
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.Locale.note[_vm.$i18n.locale]))]),
              _vm._v(" "),
              _c("ul", [
                _c("li", [_vm._v(_vm._s(_vm.Locale.note_1[_vm.$i18n.locale]))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.Locale.note_2[_vm.$i18n.locale]))]),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showImage
          ? _c("div", { staticClass: "sim-activate-guide-container" }, [
              _c("div", { staticClass: "sim-activate-guide-label" }, [
                _vm._v(_vm._s(_vm.Locale.step[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sim-activate-guide" }, [
                _c("div", { staticClass: "guide" }, [
                  _c("img", {
                    attrs: { src: "/images/success/activate-number-1.png" },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "guide-label" }, [
                    _vm._v(_vm._s(_vm.Locale.step_1[_vm.$i18n.locale])),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "guide" }, [
                  _c("img", {
                    attrs: { src: "/images/success/activate-number-2.png" },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "guide-label" }, [
                    _vm._v(_vm._s(_vm.Locale.step_2[_vm.$i18n.locale])),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "guide" }, [
                  _c("img", {
                    attrs: { src: "/images/success/activate-number-3.png" },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "guide-label" }, [
                    _vm._v(_vm._s(_vm.Locale.step_3[_vm.$i18n.locale])),
                  ]),
                ]),
              ]),
            ])
          : _vm._e(),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("img", { attrs: { src: "/images/success/right.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("img", { attrs: { src: "/images/success/right.png" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/activate-sim.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/activate-sim.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-sim.vue?vue&type=template&id=30ea8370&scoped=true& */ "./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true&");
/* harmony import */ var _activate_sim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-sim.vue?vue&type=script&lang=js& */ "./resources/js/components/activate-sim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& */ "./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _activate_sim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30ea8370",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/activate-sim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/activate-sim.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/activate-sim.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activate-sim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=style&index=0&id=30ea8370&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_style_index_0_id_30ea8370_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activate-sim.vue?vue&type=template&id=30ea8370&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activate-sim.vue?vue&type=template&id=30ea8370&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_sim_vue_vue_type_template_id_30ea8370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);