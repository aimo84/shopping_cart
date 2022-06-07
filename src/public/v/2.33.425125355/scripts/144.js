(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/preview/uppack/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/preview/uppack/content.json", 1);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_0__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_2__,
      error: false,
      errorMessage: ''
    };
  },
  computed: {
    campId: function campId() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    },
    locale: function locale() {
      if (!this.$i18n || this.$i18n.locale === undefined) return 'TH';
      return this.$i18n.locale.toUpperCase();
    }
  },
  methods: {
    nextStep: function nextStep() {
      this.$router.push({
        name: 'preview-uppack-step2',
        query: {
          campId: this.campId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table.table-step1 th[data-v-dab178cc], .table.table-step1 td[data-v-dab178cc] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.table.table-step1 td[data-v-dab178cc]:first-child {\n  width: 33.33%;\n  text-align: center;\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.min-w-100[data-v-dab178cc] {\n  min-width: 100px;\n}\n@media screen and (max-width: 860px) {\n.table.table-step1 th[data-v-dab178cc]:first-child, .table.table-step1 td[data-v-dab178cc]:first-child {\n    width: 50%;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner_container[data-v-dab178cc] {\n  border-bottom: 6px solid #666;\n}\n.banner_container img[data-v-dab178cc] {\n  width: 100%;\n  display: block;\n}\n.page-container[data-v-dab178cc] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 750px;\n  margin: auto;\n}\n.text-center[data-v-dab178cc] {\n  text-align: center;\n}\n.my-1[data-v-dab178cc] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-dab178cc] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-dab178cc] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-dab178cc] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-dab178cc] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-dab178cc] {\n  margin-left: 1rem;\n}\n.step-container[data-v-dab178cc] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-dab178cc] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-dab178cc] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-dab178cc] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-dab178cc] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-dab178cc] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.table-header[data-v-dab178cc] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-dab178cc] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-dab178cc] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-dab178cc] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-dab178cc] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-dab178cc] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-dab178cc] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-dab178cc] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-dab178cc] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-dab178cc]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-dab178cc] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-dab178cc] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-dab178cc] {\n  flex-direction: column;\n}\n.table .row .col[data-v-dab178cc]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-dab178cc] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-dab178cc] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-dab178cc] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-dab178cc] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-dab178cc] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-dab178cc] {\n  color: #e02020;\n}\n.color-lightblue[data-v-dab178cc] {\n  color: #0091ff;\n}\n.text-underline[data-v-dab178cc] {\n  text-decoration: underline;\n}\n.text-left[data-v-dab178cc] {\n  text-align: left;\n}\n.cursor-pointer[data-v-dab178cc] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-dab178cc] {\n  min-width: unset;\n}\n.min-width-max[data-v-dab178cc] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-dab178cc] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n}\n.term-cond .title[data-v-dab178cc] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-dab178cc] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-dab178cc] {\n  display: none;\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n}\n.footer-container .footer-actions[data-v-dab178cc] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-dab178cc] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-dab178cc] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-dab178cc] {\n  font-size: 2rem;\n}\n.success-container[data-v-dab178cc] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-dab178cc] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-dab178cc] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-dab178cc] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-dab178cc] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-dab178cc] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-dab178cc] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-dab178cc] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-dab178cc]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-dab178cc]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-dab178cc] {\n  font-size: 16px;\n  color: #ff0000;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-dab178cc] {\n    width: 100%;\n}\n.table-header[data-v-dab178cc] {\n    font-size: 24px;\n}\n.table .highlight[data-v-dab178cc] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-dab178cc] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-dab178cc] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-dab178cc] {\n    display: block;\n}\n.bottom-actions-container[data-v-dab178cc] {\n    display: none;\n}\n.step1-grid-row-2[data-v-dab178cc] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-dab178cc] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-dab178cc] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-dab178cc] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "page-container text-center" },
    [
      _c(
        "div",
        { staticClass: "step-container my-2" },
        [
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/personal-info.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("ข้อมูลส่วนตัว")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step not-reached" }, [
            _c("img", { attrs: { src: "/images/icons/choose-package.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("เลือกแพ็กเกจ")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step not-reached" }, [
            _c("img", { attrs: { src: "/images/icons/summary.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("สรุปรายการ")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element", { attrs: { fitHeight: "" } })
        : _c(
            "div",
            [
              _c("div", { staticClass: "my-2" }, [
                _c("div", { staticClass: "personal-info" }, [
                  _c("span", { staticClass: "font-bold" }, [
                    _vm._v("ยินดีต้อนรับ : "),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("ตัวอย่างชื่อ ตัวอย่างนามสกุล")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "personal-info" }, [
                  _c("span", { staticClass: "font-bold" }, [
                    _vm._v("หมายเลข ทรูมฟ เอช : "),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v(" 0899999999 ")]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-header" }, [
                _vm._v("แพ็กเกจปัจจุบัน"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table table-step1" }, [
                _c("table", [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("แพ็กเกจ")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Voice")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Data")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Wifi")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ราคา")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "TrueSmartChoice 4G No Limit 499, Net speed 4 Mbps"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "min-w-100" }, [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "min-w-100" }, [
                        _vm._v("อินเตอร์เน็ตไม่อั้น|ความเร็วคงที่ 4 Mbps"),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("WiFi|ไม่จำกัด")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("499 บาท")]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.error,
                      expression: "error",
                    },
                  ],
                  staticClass: "err-msg text-center my-1",
                },
                [_vm._v(_vm._s(_vm.errorMessage))]
              ),
              _vm._v(" "),
              _c(
                "button-element",
                { staticClass: "mt-4 next-btn", on: { click: _vm.nextStep } },
                [_vm._v("ถัดไป")]
              ),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/preview/uppack/step1.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step1.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue?vue&type=template&id=dab178cc&scoped=true& */ "./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true&");
/* harmony import */ var _step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1.vue?vue&type=script&lang=js& */ "./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& */ "./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& */ "./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dab178cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/preview/uppack/step1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=style&index=0&id=dab178cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_dab178cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=template&id=dab178cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step1.vue?vue&type=template&id=dab178cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_dab178cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=dab178cc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_dab178cc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);