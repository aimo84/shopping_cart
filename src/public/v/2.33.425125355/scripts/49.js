(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      packageName: String,
      isTol: Boolean
    };
  },
  methods: {
    showTermsDialog: function showTermsDialog() {
      this.$refs.dialog.open();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".long-terms > div[data-v-a97428a0] {\n  margin-bottom: 8px;\n}\n.long-terms .left[data-v-a97428a0] {\n  text-align: left;\n}\n.long-terms .tol[data-v-a97428a0] {\n  text-align: left;\n  line-height: 1.1;\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("dialog-element", { ref: "dialog", staticClass: "terms-dialog" }, [
    _c("div", { attrs: { slot: "content" }, slot: "content" }, [
      _vm.isTol
        ? _c("div", { staticClass: "long-terms" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v(
                "เงื่อนไขการสมัครบริการแพ็กเกจทรู ซูเปอร์ ไฟเบอร์ สปีด บูทส์ (True Super Fiber Speed Boost) แบบต่ออายุอัตโนมัติ"
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tol" }, [
              _c("div", [
                _vm._v(
                  "เงื่อนไขทั่วไป สำหรับการสมัคร และใช้บริการแพ็กเกจทรู ซูเปอร์ ไฟเบอร์ สปีด บูทส์ (True Super Fiber Speed Boost) แบบต่ออายุอัตโนมัติ แพ็กเกจทรู ซูเปอร์ ไฟเบอร์ สปีด บูทส์ (“True Super Fiber Speed Boost”) แบบต่ออายุอัตโนมัติ ให้บริการโดยบริษัท ทรู อินเทอร์เน็ต คอรปอเรชั่น จำกัด (“ทรู อินเทอร์เน็ต คอร์ปอเรชั่น”) โดยผู้ใช้บริการสามารถซื้อแพ็กเกจดังกล่าวได้ในระหว่างวันที่ 5 มีนาคม 2563 – 31 ธันวาคม 2563True Super Fiber Speed Boost แบบต่ออายุอัตโนมัติ แบ่งเป็น 3 แพ็กเกจ โดยมีรายละเอียดดังนี้"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "1. บริการอินเทอร์เน็ตความเร็วสูงสุด (ดาวน์โหลด/อัพโหลด) 300/300 Mbps. แบบต่ออายุอัตโนมัติ ราคา 59 บาท/30 วัน (ราคานี้ยังไม่รวม Vat 7%)"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "2. บริการอินเทอร์เน็ตความเร็วสูงสุด (ดาวน์โหลด/อัพโหลด) 500/500Mbps. แบบต่ออายุอัตโนมัติ อัตโนมัติ ราคา 89 บาท/30 วัน (ราคานี้ยังไม่รวม Vat 7%)"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "3. บริการอินเทอร์เน็ตความเร็วสูงสุด (ดาวน์โหลด/อัพโหลด) 1000/200Mbps. แบบต่ออายุอัตโนมัติ อัตโนมัติ ราคา 99 บาท/30 วัน (ราคานี้ยังไม่รวม Vat 7%)"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "title left" }, [
              _vm._v("เงื่อนไขการรับสิทธิ :"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tol" }, [
              _c("div", [
                _vm._v(
                  "1. ผู้ใช้บริการต้องจดทะเบียนใช้บริการอินเตอร์เน็ตกับ ทรู อินเทอร์เน็ต คอร์ปอเรชั่น ในนามบุคคลธรรมดาแบบรายเดือนตามแพ็กเกจอินเตอร์เน็ตหลักก่อน (เฉพาะประเภท 1 บัญชีผู้ใช้บริการ/BAN ต่อ 1 ผู้ใช้บริการ/Subscriber) จึงจะมีสิทธิสมัครใช้บริการแพ็กเกจเสริม True Super Fiber Speed Boost เพื่อใช้ความเร็วสูงสุดเพิ่มขึ้นตามแพ็กเกจเสริมดังกล่าว โดยผู้ใช้บริการรับทราบและตกลงปฏิบัติตามข้อกำหนดและเงื่อนไขนี้ทุกประการ"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "2. ความเร็วสูงสุด คือ ความเร็วสูงสุดที่สัญญาณวิ่งมาจากชุมสายมาจนถึงอุปกรณ์โมเด็ม หรือ อุปกรณ์กระจายสัญญาที่ติดตั้งภายในที่พักอาศัย ทั้งนี้ ขึ้นอยู่กับปัจจัยแวดล้อมอื่นด้วย อาทิ อุปกรณ์ภาครับและภาคส่ง และการใช้งานเว็บไซต์ต่างๆ เป็นต้น ผู้ใช้บริการจะได้รับบิลแจ้งค่าบริการ True Super Fiber Speed Boost ตามระยะเวลาของแพ็กเกจที่สมัคร และจะเป็นการคิดค่าบริการต่อเนื่องแบบอัตโนมัติ ตลอดอายุการใช้งาน จนกว่าจะมีการแจ้งขอยกเลิกบริการตามเงื่อนไขที่บริษัทกำหนด โดยผู้ใช้บริการตกลงชำระค่าบริการตามแพ็กเกจหลักภายในระยะเวลากำหนดชำระตามบิลแจ้งค่าบริการ เพื่อหลีกเลี่ยงการถูกยุติสิทธิการใช้บริการ True Super Fiber Speed Boost นี้ และถูกระงับการใช้บริการอินเทอร์เน็ตตามแพ็กเกจหลักด้วย ทั้งนี้ ผู้ใช้บริการสามารถชำระเงินได้สะดวกมากขึ้น ผ่านแอปพลิเคชั่นทรูไอเซอร์วีส, ทรูมันนี่เซอร์วีส, เซเว่น อิเลฟเว่น, เทสโก้โลตัส, ทรูช้อป, เคาน์เตอร์เซอร์วีส, ธนาคาร, ผ่านเครื่อง ATM หรือระบบอินเตอร์เน็ตแบงค์กิ้ง, หักผ่านบัตรเครดิต หรือบัญชีธนาคาร เป็นต้น"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "3. ผู้ใช้บริการสามารถเลือกรับสิทธิยืมอุปกรณ์เพิ่มเติม เพื่อเชื่อมต่ออินเทอร์เน็ต “อุปกรณ์ Gigabit WiFi Router” ตามมาตรฐานการติดตั้งบริการที่ทางบริษัทกำหนด ซึ่งการรับสิทธิพิเศษข้างต้น ถือเป็นส่วนหนึ่งของคําขอ/สัญญาใช้บริการในกลุ่มทรู โดยผู้ใช้บริการตกลงต่ออายุและใช้บริการตามคําขอ/สัญญาใช้บริการดังกล่าวต่อเนื่องไปอีก เป็นระยะเวลา 12 เดือน สำหรับการสมัครบริการ แพ็กเกจเสริม True Super Fiber Speed Boost ความเร็ว 300/100 mbps. และความเร็ว 500/100 mbps. /หรือ/ ระยะเวลา 24 เดือน สำหรับการสมัครบริการ แพ็กเกจเสริม True Super Fiber Speed Boost ความเร็ว 1000/100 mbps. “นับจากวันที่ครบระยะเวลาการใช้บริการตามคําขอ/สัญญาใช้บริการเดิม” กรณี อุปกรณ์ Gigabit WiFi Router ที่ยืม ชำรุด หรือไม่สามารถใช้งานได้ ด้วยเหตุจากผู้ผลิต หรือเกิดจากการใช้งานตามปกติ, บริษัทฯ มีสิทธิในการเปลี่ยนอุปกรณ์ทดแทนให้ ภายในช่วงระยะเวลาสัญญารับสิทธิยืม และมีสิทธิในการเรียกเก็บคืนอุปกรณ์ชุดที่ไม่สามารถใช้งานได้"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "4. อุปกรณ์ตามสิทธิยืมนี้เป็นทรัพย์สินของบริษัทฯ และเนื่องจากผู้ยืมได้สมัครใช้บริการฯ ตามสัญญานี้ บริษัทฯ จึงนำอุปกรณ์ที่ยืมดังกล่าวข้างต้นออกให้ผู้ใช้บริการยืมตาม สัญญานี้ และผู้ใช้บริการไม่สามารถโอนสิทธิให้กับบุคคลอื่นได้ และต้องส่งคืนบริษัทฯเมื่อยกเลิกบริการ หากไม่ส่งคืนจะต้องชำระเงินค่าอุปกรณ์ Gigabit WiFi Router คืนให้กับบริษัทฯ เป็นเงิน 3,900 บาท โดยราคายังไม่รวมภาษีมูลค่าเพิ่ม"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "5. ทรู อินเทอร์เน็ต คอร์ปอเรชั่น มีสิทธิที่จะบอกเลิก/ระงับการให้บริการ True Super Fiber Speed Boost ได้ทันที หากมีการนำบริการ แพ็กเกจ True Super Fiber Speed Boost ไปใช้งานในทางที่ไม่ถูกต้อง หรือขัดต่อกฎหมาย หรือเป็นเหตุให้เกิดความ เสียหายต่อชื่อเสียงของทรู อินเทอร์เน็ต คอร์ปอเรชั่น หรือมีการเคลื่อนย้าย ดัดแปลง แก้ไข หรือนำอุปกรณ์อื่นมาเชื่อมต่อ หรือผู้ใช้บริการผิดสัญญาข้อหนึ่งข้อใด ทรู อินเทอร์เน็ต คอร์ปอเรชั่น มีสิทธิที่จะบอกเลิก/ระงับการให้บริการอินเทอร์เน็ต หากผู้ใช้บริการเข้าข่ายการใช้งานผิดประเภท อาทิ การใช้งานในลักษณะแชร์โครงข่ายอินเทอร์เน็ตเพื่อการค้าอีกทอดหนึ่งไปยังกลุ่มผู้ใช้บริการของตนเอง หรือ ใช้งานเพื่อโหลดบิตทอร์เรนต์จำนวนมากไปยังโครงข่ายคอมพิวเตอร์หรือเซิร์ฟเวอร์ที่ใดที่หนึ่งเป็นประจำและเป็นระยะเวลาต่อเนื่อง จนเป็นเหตุให้ผู้ใช้บริการรายอื่นได้รับผลกระทบในการใช้งานอินเทอร์เน็ตในพื้นที่เดียวกัน หรือสร้างความเสียหายอย่างใดอย่างหนึ่งกับโครงข่ายอินเทอร์เน็ตของบริษัทในภาพรวม"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "6. ผู้ใช้บริการยินยอมให้เก็บรวบรวมใช้ หรือเปิดเผยข้อมูลส่วนบุคคลที่ใช้สมัครบริการ รวมถึงข้อมูลส่วนบุคคล หรือข้อมูลการใช้บริการหรือข้อมูลใดๆ ที่บริษัทได้รับหรือรวบรวมผ่านการใช้บริการที่ได้สมัครไว้ เพื่อวัตถุประสงค์ในการให้บริการที่มีประสิทธิภาพหรือเพื่อการเสนอหรือให้สิทธิประโยชน์แก่ผู้ใช้บริการ หรือเพื่อวัตถุประสงค์ในการวิจัยตลาดและการส่งเสริมการขาย หรือเพื่อการพัฒนาเครือข่าย หรือเพื่อการพัฒนาปรับปรุงบริการ หรือเพื่ออำนวยความสะดวกในการแจ้งหรือการชำระค่าบริการ หรือเพื่อวิเคราะห์และนำเสนอบริการ หรือเพื่อความปลอดภัย หรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพอนามัยของบุคคล รวมตลอดถึงกิจการที่จะต้องปฏิบัติตามกฎหมายและ/หรือมีเหตุจำเป็นอื่นใดตามที่เห็นสมควร โดยบริษัทสามารถเปิดเผยข้อมูลดังกล่าวข้างต้นให้แก่บริษัทในเครือ เครือกิจการ เครือธุรกิจ หรือนิติบุคคลหรือบุคลลอื่นใดๆ ที่บริษัทเป็นคู่สัญญาหรือมีนิติสัมพันธ์อยู่ด้วย ทั้งนี้ เอกสารตัวจริงสำหรับผู้ใช้บริการเก็บไว้เป็นหลักฐาน เอกสารอิเลกทรอนิกส์จะจัดเก็บที่บริษัทในกลุ่มทรู"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "7. ในกรณีที่ผู้ใช้บริการมีหนี้ค้างชำระใดๆ ในแพ็กเกจการใช้บริการหลัก ผู้ใช้บริการจะต้องดำเนินการชำระหนี้ที่ค้างให้ครบถ้วนทั้งจำนวนก่อน จึงจะสามารถสมัคร แพ็กเกจเสริม True Super Fiber Speed Boost ได้ และหากผู้ใช้บริการสมัครแพ็กเกจเสริม True Super Fiber Speed Boost แล้ว ผู้ใช้บริการสามารถใช้บริการตามความเร็วสูงสุดดาวน์โหลด/อัพโหลดที่แพ็กเกจเสริมกำหนดไว้เท่านั้น และเมื่อครบกำหนดระยะเวลาและผู้ใช้บริการขอยกเลิกแพ็กเกจเสริม True Super Fiber Speed Boost กับทรู อินเทอร์เน็ต คอร์ปอเรชั่น แล้ว ความเร็วการดาวน์โหลด/อัพโหลด"
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "8. ทรู อินเทอร์เน็ต คอร์ปอเรชั่นมีสิทธิในการยกเลิกการให้สิทธิพิเศษข้างต้นนี้ได้ทันที หากมีข้อกำหนด คำสั่ง หรือนโยบายของหน่วยงานของรัฐที่เกี่ยวข้องกำหนดให้มีการแก้ไข เปลี่ยนแปลง ระงับ หรือยกเลิกเงื่อนไขของบริการใดๆ หรือคำสั่งดังกล่าวเป็นการเพิ่มภาระในการดำเนินการของ ทรู อินเทอร์เน็ต คอร์ปอเรชั่น เว้นแต่จะได้ระบุไว้โดยชัดแจ้งเป็นอย่างอื่น ทรู อินเทอร์เน็ต คอร์ปอเรชั่น มีสิทธิในการแก้ไข เปลี่ยนแปลง ระงับ หรือยกเลิกเงื่อนไขใดๆ ในสิทธิพิเศษข้างต้นนี้ได้ตามความเหมาะสมโดยจะแจ้งให้ทราบล่วงหน้าอย่างน้อย 30 วัน ผ่านช่องทางที่ “ทรู อินเทอร์เน็ต คอร์ปอเรชั่น” พิจารณาเห็นสมควร ผู้ใช้บริการได้อ่านและเข้าใจข้อกำหนดและเงื่อนไขในแต่ละบริการ รวมทั้งเงื่อนไขของแพ็กเกจที่สมัครใช้บริการโดยตลอดก่อนขอรับสิทธิและ/หรือสมัครใช้บริการแล้ว ตกลงปฏิบัติตามข้อกำหนดและเงื่อนไขข้างต้นโดยเคร่งครัดทุกประการด้วยความสมัครใจ"
                ),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.isTol
        ? _c("div", { staticClass: "long-terms" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("ข้อกำหนดและเงื่อนไข"),
            ]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.packageName))]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "สอบถามข้อกำหนดและเงื่อนไขเพิ่มเติม กรุณาติดต่อ True Call Center โทร. 1242"
              ),
            ]),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/pages/clm/vas/clm-vas-tnc.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-tnc.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true&");
/* harmony import */ var _clm_vas_tnc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clm-vas-tnc.vue?vue&type=script&lang=js& */ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& */ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _clm_vas_tnc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a97428a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/clm/vas/clm-vas-tnc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-tnc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=style&index=0&id=a97428a0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_style_index_0_id_a97428a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/clm/vas/clm-vas-tnc.vue?vue&type=template&id=a97428a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_vas_tnc_vue_vue_type_template_id_a97428a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);