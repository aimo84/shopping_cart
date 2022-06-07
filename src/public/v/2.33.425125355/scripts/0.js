(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  props: {
    campBean: Object
  },
  data: function data() {
    return {
      shortTerms: ''
    };
  },
  computed: {
    terms: function terms() {
      return this.campBean ? this.campBean.terms : this.shortTerms;
    }
  },
  methods: {
    open: function open(e) {
      if (e) this.shortTerms = e.terms;
      this.$refs.dialog.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".long-terms[data-v-4fd71da6] {\n  text-align: left;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "long-terms" }, [
        _c("div", { staticClass: "title" }, [_vm._v("ข้อกำหนดและเงื่อนไข")]),
        _vm._v(" "),
        _c("div", {
          staticClass: "short-terms",
          domProps: { innerHTML: _vm._s(_vm.terms) },
        }),
        _vm._v(" "),
        _c("p", { staticClass: "content" }, [
          _vm._v(
            "\n        เงื่อนไขและรายละเอียดรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล"
          ),
          _c("br"),
          _vm._v(
            "\n\n        1. ข้อเสนอและสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายโครงการ ทรู สเปเชียล นี้สำหรับลูกค้าผู้ใช้บริการทรูปัจจุบัน “ลูกค้า” ที่ใช้บริการต่างๆ อันได้แก่ บริการอินเทอร์เน็ต ของบริษัท ทรู อินเทอร์เน็ต คอร์ปอเรชั่น จำกัด (“ทรู อินเทอร์เน็ต”), บริการโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช ทั้งแบบรายเดือนและแบบเติมเงิน ของบริษัท ทรู มูฟ เอช ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด(“ทรูมูฟ เอช”) และ บริการโทรทัศน์ในระบบบอกรับเป็นสมาชิก จากบริษัท ทรู วิชั่นส์ กรุ๊ป จำกัด (“ทรู วิชั่นส์”) และ/หรือบุคคลที่สาม (ถ้ามี) รวมเรียกว่า “บริษัท”"
          ),
          _c("br"),
          _vm._v(
            "\n\n        2. ข้อเสนอและสิทธิพิเศษต่างๆในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้จะถูกแบ่งเป็นรายการส่งเสริมการขายย่อยตามประเภทการสมัครบริการในรูปแบบต่อไปนี้"
          ),
          _c("br"),
          _vm._v("\n          - การสมัครเปิดใช้บริการใหม่"),
          _c("br"),
          _vm._v(
            "\n          - การสมัครเพิ่มบริการ หรือ การเปลี่ยนแปลงแพ็กเกจที่สูงขึ้น"
          ),
          _c("br"),
          _vm._v("\n          - การซื้อบริการเสริมหรือแพ็กเกจเสริมต่างๆ "),
          _c("br"),
          _vm._v(
            "\n\n        โดยข้อเสนอบริการต่างๆ ในรายการส่งเสริมการขายย่อยถือเป็นส่วนหนึ่งตามเงื่อนไขและข้อกำหนดของรายการส่งเสริมการขายต่างๆ ของบริษัท ที่เสนอให้กับบุคคลทั่วไป หรือ ลูกค้าปัจจุบัน ที่ใช้รายการส่งเสริมการขายอื่นนอกจากรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล"
          ),
          _c("br"),
          _vm._v(
            "\n\n        3. การรับข้อเสนอรูปแบบต่างๆ ที่ระบุไว้ในรายการส่งเสริมการขายย่อย อาจมีสิทธิพิเศษเพิ่มเติมและข้อกำหนดแตกต่างกันไป โดยสิทธิพิเศษต่างๆ ลูกค้าจะได้รับต่อเมื่อลูกค้ามีการปฏิบัติตามข้อเสนอที่มีการแจ้งไว้ในสื่อประชาสัมพันธ์แล้วเท่านั้น"
          ),
          _c("br"),
          _vm._v(
            "\n\n        4. ข้อเสนอ และหรือสิทธิพิเศษต่างๆ ของรายการส่งเสริมการขายย่อยในรายการส่งเสริมการขายโครงการ  ทรู สเปเชียลไม่สามารถใช้ร่วมกับรายการส่งเสริมการขาย โปรโมชั่น หรือส่วนลดอื่น ๆ ได้"
          ),
          _c("br"),
          _vm._v(
            "\n\n        5. ข้อเสนอและสิทธิพิเศษ ดังกล่าว เป็นการเสนอระบุให้เฉพาะตัวบุคคล ไม่สามารถโอนสิทธิ์หรือส่งต่อให้กับผู้อื่นได้ เว้นแต่มีการกำหนดไว้เป็นกรณีไป อันได้แก่ การโอนสิทธิ์ส่งต่อให้กับ บุคคลในครอบครัว และบุคคลที่มีการระบุตัวตนชัดเจน"
          ),
          _c("br"),
          _vm._v(
            "\n\n        6. กรณีที่ลูกค้ามีการเปลี่ยนแปลงรายละเอียดการใช้งานที่ไม่เป็นไปตามเงื่อนไขของรายการส่งเสริมการขายย่อยรวมถึงมีค่าบริการค้างชำระ หรือค่าธรรมเนียมใด ๆ ที่เกี่ยวข้องกับการใช้บริการตามบริการแพ็กเกจหลัก จนทำให้เกิดการระงับสัญญาณ หรือกระทำผิดเงื่อนไขของการใช้บริการของ บริษัท สิทธิพิเศษต่างๆ ที่ได้รับเพิ่มจะสิ้นสุดลงทันที"
          ),
          _c("br"),
          _vm._v(
            "\n\n        7. ช่องทางในการประชาสัมพันธ์และ การรับข้อเสนอของลูกค้า ประกอบด้วย ศูนย์บริการข้อมูลลูกค้าทางโทรศัพท์ (Call Center), ทรูช้อป, เว็บไซด์, ข้อความสั้น (SMS), แอพพลิเคชั่นต่างๆ ของบริษัท ซึ่งขึ้นอยู่กับการให้บริการแต่ละประเภทตามรายการส่งเสริมการขายที่กำหนด"
          ),
          _c("br"),
          _vm._v(
            "\n\n        8. ระยะเวลา ของรายการส่งเสริมการขายโครงการ  ทรู สเปเชียล นี้ เริ่มตั้งแต่วันที่ 1 มิถุนายน 2563 ถึงวันที่ 31 ธันวาคม 2563  โดยที่แต่ละรายการส่งเสริมการขายย่อยจะมีเวลาเริ่มต้นและสิ้นสุดไม่เท่ากัน ซึ่งบริษัทจะมีการระบุไว้ในข้อความหรือชิ้นงานโฆษณาประชาสัมพันธ์ตามแต่ละรายการส่งเสริมการขายย่อย"
          ),
          _c("br"),
          _vm._v(
            "\n\n        9. หากลูกค้ากระทำการอันเป็นการอย่างใดอย่างหนึ่งดังต่อไปนี้ บริษัท มีสิทธิในการยกเลิกการให้บริการตามสัญญาได้ทันที"
          ),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v(
              '9.1 กระทำการฝ่าฝืนข้อห้ามในสัญญา: หากลูกค้ากระทำผิดวัตถุประสงค์แห่งสัญญา ให้ถือเป็นการฝ่าฝืนข้อห้ามในสัญญา\n        "วัตถุประสงค์แห่งสัญญา": ลูกค้าจะต้อง'
            ),
            _c("br"),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v(
              "(ก.) ใช้บริการตามรายการส่งเสริมการขายนี้เพื่อการสื่อสารเฉพาะตนโดยมีเจตนาสุจริตตามวิธีการใช้ บริการเยี่ยงปกติประเพณีของบุคคลธรรมดาทั่วไปที่จะพึงกระทำเท่านั้น มิใช่เพื่อประโยชน์ หรือสิ่งอื่นใดที่อาจถือเอาประโยชน์ได้ และจะไม่นำบริการไปใช้แสวงหาประโยชน์ไม่ว่าในลักษณะใด ๆ ในเชิงพาณิชย์หรือนำไปให้บริการต่อ"
            ),
            _c("br"),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v(
              "(ข.) ไม่ใช้ ไม่นำบริการมาใช้ ไม่ดัดแปลง หรือไม่กระทำการใดๆ ในเทคโนโลยีหรือระบบหรือสิ่งอื่นใดเพื่อเชื่อมต่อหรือเกี่ยวข้องกับการใช้บริการดังกล่าว รวมทั้งไม่กระทำการ อันมีลักษณะหรือคาดหมายได้หรือ เชื่อได้ว่าจะก่อให้เกิดการผิดศีลธรรมหรือเกิดความเสียหายหรือเกิดความไม่เป็นธรรมต่อบริษัท หรือบุคคลอื่นใด ทั้งในทางตรงและทางอ้อม หรือไม่ทำการรบกวน หรือก่อความไม่สะดวก หรือเป็นอันตรายต่อเครือข่าย หรือทำให้ประสิทธิภาพการปฏิบัติงานของเครือข่ายหรือส่วนใดๆ ของเครือข่าย เกิดความขัดข้องไม่เป็นไปตามปกติ"
            ),
            _c("br"),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v(
              "(ค.) ลูกค้าจะโอนสิทธิการใช้บริการตามสัญญานี้ให้แก่บุคคลอื่นก่อนครบกำหนดระยะเวลาตามสัญญามิได้ เว้นแต่จะได้รับความยินยอมจากบริษัท"
            ),
            _c("br"),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v(
              "9.2 กระทำการที่มีเหตุผลอันเชื่อได้ว่าลูกค้าทุจริตหรือมีการปลอมแปลงเอกสารในการสมัครใช้หรือรับข้อเสนอของบริการหรือมีพฤติกรรมฉ้อฉลในการใช้บริการหรือนำบริการไปใช้โดยผิดกฎหมาย"
            ),
            _c("br"),
          ]),
          _vm._v(
            "\n\n        10. บริษัท มีสิทธิในการแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อกำหนดและเงื่อนไขใดๆ โดยจะแจ้งให้ทราบล่วงหน้าผ่านช่องทางตามที่บริษัท พิจารณาเห็นสมควร และเว้นแต่จะได้ระบุไว้โดยแจ้งชัดเป็นอย่างอื่น กรณีข้อกำหนดและเงื่อนไขการใช้บริการข้างต้นของโครงการนี้ ขัดหรือแย้งกับข้อกำหนดของเงื่อนไขฉบับเต็ม ให้ยึดตามข้อกำหนดและเงื่อนไขฉบับเต็มเป็นหลัก"
          ),
          _c("br"),
          _vm._v(
            "\n        11. รายการส่งเสริมการขายนี้อยู่ภายใต้เงื่อนไขที่บริษัทกำหนด ลูกค้าจะต้องศึกษาข้อมูลเพิ่มเติมก่อนเลือกใช้บริการที่ www.truemoveh.com หรือ ทรูมูฟ เอช แคร์ โทร 1242 หรือสอบถามพนักงานขาย"
          ),
          _c("br"),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/clm-benefit-terms.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/clm-benefit-terms.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true& */ "./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true&");
/* harmony import */ var _clm_benefit_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clm-benefit-terms.vue?vue&type=script&lang=js& */ "./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& */ "./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _clm_benefit_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fd71da6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clm-benefit-terms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clm-benefit-terms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=style&index=0&id=4fd71da6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_style_index_0_id_4fd71da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clm-benefit-terms.vue?vue&type=template&id=4fd71da6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clm_benefit_terms_vue_vue_type_template_id_4fd71da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);