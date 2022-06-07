(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[162],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json", 1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "button-element": _components_button__WEBPACK_IMPORTED_MODULE_1__["default"],
    "info-form": function infoForm() {
      return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, /*! ./info-form.vue */ "./resources/js/pages/store/postpaid/verify/info-form.vue"));
    }
  },
  props: {
    product: Object,
    postpaidResult: Object,
    selectedPricePlan: Object,
    packages: Object,
    noEkycCartForm: Object,
    berfuntongType: String
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_2__
    };
  },
  methods: {
    deviceBundling: function deviceBundling() {
      var vhoraPricePlan = JSON.parse(localStorage.getItem("vhora-priceplan"));
      var lowTierForm = JSON.parse(localStorage.getItem("vhora-zodiac-form"));
      var heightTierForm = JSON.parse(localStorage.getItem("vhora-form"));

      if (this.berfuntongType === "low-tier") {
        lowTierForm.original_proposition_amdoc = lowTierForm.proposition_amdoc;
        lowTierForm.original_proposition_code = lowTierForm.proposition_code;
        lowTierForm.proposition_amdoc = lowTierForm.bundling.proposition_amdoc;
        lowTierForm.proposition_code = lowTierForm.bundling.proposition_code;
        window.localStorage.setItem("vhora-zodiac-form", JSON.stringify(lowTierForm));
        window.localStorage.removeItem("offline_bundle");
        window.localStorage.setItem("offline_bundle", true);
        vhoraPricePlan.proposition_nas_code = lowTierForm.bundling.proposition_code;
        window.localStorage.setItem("vhora-priceplan", JSON.stringify(vhoraPricePlan));
        this.$parent.goTo("address");
      } else if (this.berfuntongType === "high-tier") {
        heightTierForm.original_proposition_amdoc = heightTierForm.proposition_amdoc;
        heightTierForm.original_proposition_code = heightTierForm.proposition_code;
        heightTierForm.proposition_amdoc = heightTierForm.bundling.proposition_amdoc;
        heightTierForm.proposition_code = heightTierForm.bundling.proposition_code;
        window.localStorage.setItem("vhora-form", JSON.stringify(heightTierForm));
        window.localStorage.removeItem("offline_bundle");
        window.localStorage.setItem("offline_bundle", true);
        vhoraPricePlan.proposition_nas_code = heightTierForm.bundling.proposition_code;
        window.localStorage.setItem("vhora-priceplan", JSON.stringify(vhoraPricePlan));
        this.$router.push("/offline-store/berfuntong/pre-validation");
      }
    },
    simOnly: function simOnly() {
      var vhoraPricePlan = JSON.parse(localStorage.getItem("vhora-priceplan"));
      var lowTierForm = JSON.parse(localStorage.getItem("vhora-zodiac-form"));
      var heightTierForm = JSON.parse(localStorage.getItem("vhora-form"));

      if (this.berfuntongType === "low-tier") {
        if (lowTierForm["original_proposition_amdoc"] && lowTierForm["original_proposition_code"]) {
          lowTierForm.proposition_amdoc = lowTierForm.original_proposition_amdoc;
          lowTierForm.proposition_code = lowTierForm.original_proposition_code;
          vhoraPricePlan.proposition_nas_code = lowTierForm.original_proposition_code;
        }

        window.localStorage.setItem("vhora-zodiac-form", JSON.stringify(lowTierForm));
        this.$parent.goTo("address");
      } else if (this.berfuntongType === "high-tier") {
        if (heightTierForm["original_proposition_amdoc"] && heightTierForm["original_proposition_code"]) {
          heightTierForm.proposition_amdoc = heightTierForm.original_proposition_amdoc;
          heightTierForm.proposition_code = heightTierForm.original_proposition_code;
          vhoraPricePlan.proposition_nas_code = heightTierForm.original_proposition_code;
        }

        window.localStorage.setItem("vhora-form", JSON.stringify(heightTierForm));
        this.$router.push("/offline-store/berfuntong/pre-validation");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".option-page-container[data-v-9a984a24] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.option-page-header-group[data-v-9a984a24] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.option-page-header-group .header-line-1[data-v-9a984a24] {\n  margin-top: 40px;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 50px;\n  line-height: 59.99px;\n}\n.option-page-header-group .header-line-2[data-v-9a984a24] {\n  margin-top: 3px;\n  font-weight: 500px;\n  font-style: normal;\n  font-size: 32px;\n  line-height: 38.39px;\n}\n.option-page-header-button-group[data-v-9a984a24] {\n  margin-top: 27px;\n  display: flex;\n  flex-direction: row;\n}\n.option-page-header-button-group .device-bundling-button[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button[data-v-9a984a24] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(#ff0000, #bf0000);\n}\n.option-page-header-button-group .device-bundling-button .dot[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .dot[data-v-9a984a24] {\n  margin-top: 16px;\n  height: 106px;\n  width: 106px;\n  background-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n.option-page-header-button-group .device-bundling-button .dot .device-bundling-img[data-v-9a984a24],\n.option-page-header-button-group .device-bundling-button .dot .sim-only-img[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .dot .device-bundling-img[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .dot .sim-only-img[data-v-9a984a24] {\n  margin-top: 16px;\n}\n.option-page-header-button-group .device-bundling-button .dot .device-bundling-img[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .dot .device-bundling-img[data-v-9a984a24] {\n  margin-top: 15px;\n  margin: 15px 10.64px 19px 9.64px;\n  width: 85.71px;\n  height: 72px;\n}\n.option-page-header-button-group .device-bundling-button .dot .sim-only-img[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .dot .sim-only-img[data-v-9a984a24] {\n  margin-top: 18px;\n  margin: 18px 18.36px 19px 18.64px;\n  width: 69px;\n  height: 69px;\n}\n.option-page-header-button-group .device-bundling-button .device-bundling-text-group[data-v-9a984a24],\n.option-page-header-button-group .device-bundling-button .sim-only-text-group[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .device-bundling-text-group[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .sim-only-text-group[data-v-9a984a24] {\n  display: flex;\n  flex-direction: column;\n}\n.option-page-header-button-group .device-bundling-button .device-bundling-text-group[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .device-bundling-text-group[data-v-9a984a24] {\n  margin-top: 21px;\n}\n.option-page-header-button-group .device-bundling-button .sim-only-text-group[data-v-9a984a24],\n.option-page-header-button-group .sim-only-button .sim-only-text-group[data-v-9a984a24] {\n  margin-top: 33px;\n  justify-content: center;\n  align-items: center;\n}\n.option-page-header-button-group .sim-only-button[data-v-9a984a24] {\n  margin-left: 20px;\n}\n@media screen and (max-width: 680px) {\n.option-page-header-group .header-line-1[data-v-9a984a24] {\n    font-size: 43px;\n}\n.option-page-header-group .header-line-2[data-v-9a984a24] {\n    font-size: 25px;\n}\n.option-page-header-button-group[data-v-9a984a24] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.option-page-header-button-group .sim-only-button[data-v-9a984a24] {\n    margin: 20px 0 0 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "option-page-container" }, [
    _c("div", { staticClass: "option-page-header-group" }, [
      _c("span", { staticClass: "header-line-1" }, [
        _vm._v(
          _vm._s(
            _vm.Locale.option_Page.option_page_header_line_1[_vm.$i18n.locale]
          )
        ),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "header-line-2" }, [
        _vm._v(
          _vm._s(
            _vm.Locale.option_Page.option_page_header_line_2[_vm.$i18n.locale]
          )
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "option-page-header-button-group" },
      [
        _c(
          "button-element",
          {
            staticClass: "device-bundling-button",
            on: { click: _vm.deviceBundling },
          },
          [
            _c("div", { staticClass: "dot" }, [
              _c("img", {
                staticClass: "device-bundling-img",
                attrs: { src: "/images/icons/device-bundling-option-page.png" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "device-bundling-text-group" }, [
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.Locale.option_Page.option_page_button_1_1[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.Locale.option_Page.option_page_button_1_2[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.Locale.option_Page.option_page_button_1_3[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "button-element",
          { staticClass: "sim-only-button", on: { click: _vm.simOnly } },
          [
            _c("div", { staticClass: "dot" }, [
              _c("img", {
                staticClass: "sim-only-img",
                attrs: { src: "/images/icons/sim-only-option-page.png" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sim-only-text-group" }, [
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.Locale.option_Page.option_page_button_2_1[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.Locale.option_Page.option_page_button_2_2[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]),
            ]),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/locale.json":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/locale.json ***!
  \**************************************************************/
/*! exports provided: checking, passedCheck, passedFailed, privilegedCustomer, resultNext, back, warning1, warning2, warning_and, otp, backHomepage, next, verify, address_next, agreement1, agreement2, agreement3, instantsim, user_information_form, option_Page, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"checking\":{\"en\":\"Checking ...\",\"th\":\"กำลังตรวจสอบ ...\"},\"passedCheck\":{\"en\":\"Verification Passed\",\"th\":\"การตรวจสอบสิทธิ์สำเร็จ\"},\"passedFailed\":{\"en\":\"Verification Failed\",\"th\":\"การตรวจสอบสิทธิ์ล้มเหลว\"},\"privilegedCustomer\":{\"en\":\"Congratulations! You can enjoy the following privileges.\",\"th\":\"ยินดีด้วย! คุณสามารถรับสิทธิพิเศษดังต่อไปนี้\"},\"resultNext\":{\"en\":\"Click “Next” to continue ordering.\",\"th\":\"กด \\\"ถัดไป\\\" เพื่อทำรายการต่อ\"},\"back\":{\"en\":\"Back\",\"th\":\"ย้อนกลับ\"},\"warning1\":{\"en\":\"You did not pass the authorization to purchase \",\"th\":\"คุณไม่สามารถทำการสั่งซื้อได้เนื่องจากการตรวจสอบสิทธิ์ล้มเหลว \"},\"warning2\":{\"en\":\" If you have any questions, please contact Call center 1242\",\"th\":\" หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\"},\"warning_and\":{\"en\":\"and\",\"th\":\"และ\"},\"otp\":{\"en\":\"You did not pass the authorization to purchase due to not eligible to get the privilege.\",\"th\":\"คุณไม่สามารถรับสิทธิ์พิเศษนี้ เนื่องจากหมายเลขสมาชิกของคุณ ไม่เป็นไปตามเงื่อนไข\"},\"backHomepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"next\":{\"en\":\"Next\",\"th\":\"ต่อไป\"},\"verify\":{\"en\":\"Verify\",\"th\":\"ตรวจสอบสิทธิ์\"},\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"agreement1\":{\"th\":\"กรอกข้อมูลให้ครบถ้วน และกด \\\"ดำเนินการต่อ\\\" เพื่อบันทึก\",\"en\":\"Please complete the information. Click \\\"Next\\\" to save the information.\"},\"agreement2\":{\"th\":\"ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี\",\"en\":\"I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.\"},\"agreement3\":{\"th\":\"ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี\",\"en\":\"The company reserves the right to cancel the order and refund all cases.\"},\"instantsim\":{\"title\":{\"th\":\"ก่อนเปิดใช้งานซิม\",\"en\":\"Ready to start?\"},\"subtitle_postpaid\":{\"th\":\"กรุณาตรวจเช็กว่าเบอร์ และค่าบริการรายเดือนตรงกับที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"subtitle_prepaid\":{\"th\":\"กรุณาตรวจเช็คว่าเบอร์ และบริการที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"selected_number\":{\"th\":\"เบอร์ที่เลือก\",\"en\":\"Selected number\"},\"selected_plan\":{\"th\":\"ค่าบริการรายเดือนที่เลือก\",\"en\":\"Selected price plan\"},\"selected_prepaid_plan\":{\"th\":\"บริการที่เลือก\",\"en\":\"Selected price plan\"},\"msg_postpaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และค่าบริการรายเดือนใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"msg_prepaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และบริการที่เลือกใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"start\":{\"th\":\"เปิดใช้งานซิม\",\"en\":\"Start activation\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"}},\"user_information_form\":{\"title\":{\"th\":\"เบอร์รายเดือน ทรูมูฟ เอช\",\"en\":\"TrueMove H Postpaid\"},\"title_prepaid\":{\"th\":\"เบอร์เติมเงิน ทรูมูฟ เอช\",\"en\":\"TrueMove H Prepaid\"},\"sub_title_1\":{\"th\":\"กรุณากรอกข้อมูลส่วนตัวของผู้ที่จะใช้งานเบอร์นี้\",\"en\":\"Please enter personal information for the mobile number\"},\"sub_title_2\":{\"th\":\"(สำหรับผู้มีอายุ 17 ปี ขึ้นไป)\",\"en\":\"(you must be at least 17 years old)\"},\"date_of_birth\":{\"th\":\"วันเกิด\",\"en\":\"Date of Birth\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Terms and Condition\"},\"read_agreement\":{\"th\":\"อ่านข้อกำหนดและเงื่อนไข\",\"en\":\"Read terms and conditions\"},\"customerDetail\":{\"thai_id\":{\"placeholder\":{\"th\":\"13 หลัก\",\"en\":\"13 digits of Thai ID number\"},\"error\":{\"th\":\"กรุณากรอกข้อมูลให้ถูกต้อง\",\"en\":\"Please enter 13-digit Thai ID number\"},\"type\":\"text\",\"required\":true}}},\"option_Page\":{\"option_page_header_line_1\":{\"en\":\"กรุณาเลือกทำรายการ\",\"th\":\"กรุณาเลือกทำรายการ\"},\"option_page_header_line_2\":{\"en\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\",\"th\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\"},\"option_page_button_1_1\":{\"en\":\"ซื้อเครื่องพร้อม\",\"th\":\"ซื้อเครื่องพร้อม\"},\"option_page_button_1_2\":{\"en\":\"พร้อมเบอร์ฟันธง\",\"th\":\"พร้อมเบอร์ฟันธง\"},\"option_page_button_1_3\":{\"en\":\"(Device Bundling)\",\"th\":\"(Device Bundling)\"},\"option_page_button_2_1\":{\"en\":\"เปิดเบอร์ฟันธง\",\"th\":\"เปิดเบอร์ฟันธง\"},\"option_page_button_2_2\":{\"en\":\"(SIM Only)\",\"th\":\"(SIM Only)\"}}}");

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/optionPage.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/optionPage.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionPage.vue?vue&type=template&id=9a984a24&scoped=true& */ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true&");
/* harmony import */ var _optionPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _optionPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a984a24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/optionPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./optionPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=style&index=0&id=9a984a24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_style_index_0_id_9a984a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./optionPage.vue?vue&type=template&id=9a984a24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/optionPage.vue?vue&type=template&id=9a984a24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionPage_vue_vue_type_template_id_9a984a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);