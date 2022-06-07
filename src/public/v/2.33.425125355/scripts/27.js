(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.json */ "./resources/js/sections/thaiid-form/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/sections/thaiid-form/locale.json", 1);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _components_terms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/terms */ "./resources/js/components/terms.vue");
/* harmony import */ var _components_ekyc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/ekyc */ "./resources/js/components/ekyc/index.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_6__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_7__["default"],
    'terms-element': _components_terms__WEBPACK_IMPORTED_MODULE_8__["default"],
    'ekyc-element': _components_ekyc__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: ['next', 'product', 'productInfo', 'isCampaignRedeem', 'isVlearn', 'isCampaignRedeemFreeDevice'],
  data: function data() {
    return {
      loading: false,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_5__,
      thaiId: '',
      redeemCode: '',
      thaiIdError: false,
      redeemCodeError: false,
      ageError: false,
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      expDate: {
        day: 0,
        month: 0,
        year: ''
      },
      agreeTnc: false,
      ekyc: {
        status: {
          vlearn: false
        },
        data: {
          vlearn: ''
        },
        temp: {
          vlearn: ''
        },
        filename: {
          vlearn: ''
        },
        error: {
          vlearn: {}
        }
      },
      statusCheckBox: false
    };
  },
  computed: {
    currentYear: function currentYear() {
      return new Date().getFullYear();
    },
    years: function years() {
      var years = [];

      for (var year = this.currentYear; year > 1899; year--) {
        years.push(year);
      }

      return years;
    },
    expYears: function expYears() {
      var years = [];

      for (var year = this.currentYear + 543; year < 2644; year++) {
        years.push(year);
      }

      return years;
    },
    months: function months() {
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    },
    days: function days() {
      var total = new Date(this.date.year, this.date.month + 1, 0).getDate();
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(total).keys());
    },
    birthdate: function birthdate() {
      var options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var d = new Date(this.date.year, this.date.month, this.date.day + 1);
      return d.toLocaleDateString('en-GB', options);
    },
    expdate: function expdate() {
      var options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var d = new Date(this.expDate.year - 543, this.expDate.month, this.expDate.day + 1);
      return d.toLocaleDateString('en-GB', options);
    },
    termAndCondtionCheckboxDisabled: function termAndCondtionCheckboxDisabled() {
      if (this.isVlearn) {
        return !this.agreeTnc || !this.statusCheckBox;
      } else {
        return !this.statusCheckBox;
      }
    },
    simType: function simType() {
      return this.productInfo && this.productInfo.product_sim ? this.productInfo.product_sim.simType : '';
    }
  },
  watch: {
    agreeTnc: function agreeTnc() {
      if (this.isVlearn) {
        if (this.ekyc.data.vlearn && this.ekyc.filename.vlearn && this.statusCheckBox) {
          this.agreeTnc = true;
        } else {
          this.agreeTnc = false;
        }
      }
    }
  },
  mounted: function mounted() {
    this.date.year = this.currentYear;
    this.expDate.year = this.expYears[0];
  },
  methods: {
    save: function save() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.invalidateBirthdate()) {
                  _context.next = 4;
                  break;
                }

                _this.ageError = true;
                window.scrollTo(0, 0);
                return _context.abrupt("return");

              case 4:
                if (!((_this.isCampaignRedeem || _this.isCampaignRedeemFreeDevice) && !_this.checkRedeemCode())) {
                  _context.next = 8;
                  break;
                }

                _this.redeemCodeError = true;
                window.scrollTo(0, 0);
                return _context.abrupt("return");

              case 8:
                if (_this.product === 'pre_to_post' && !_this.invalidateBirthdate()) {
                  _this.next('', _this.birthdate, _this.redeemCode);
                } else if (_this.product === 'sim' && _this.validateThaiNationalID() && !_this.invalidateBirthdate()) {
                  _this.next(_this.thaiId, _this.birthdate, _this.expdate);
                } else if (_this.validateThaiNationalID() && !_this.invalidateBirthdate() && _this.ekyc.data.vlearn && _this.ekyc.filename.vlearn && _this.statusCheckBox) {
                  _this.next(_this.thaiId, _this.birthdate, null, _this.redeemCode, _this.ekyc);
                } else if (_this.validateThaiNationalID() && !_this.invalidateBirthdate()) {
                  _this.next(_this.thaiId, _this.birthdate, null, _this.redeemCode);
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateThaiNationalID: function validateThaiNationalID() {
      var id = this.thaiId;

      if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
        this.thaiIdError = true;
        return false;
      }

      var i;
      var sum = 0;

      for (i = 0, sum = 0; i < 12; i++) {
        sum += parseInt(id.charAt(i)) * (13 - i);
      }

      var check = (11 - sum % 11) % 10;

      if (check === parseInt(id.charAt(12))) {
        this.thaiIdError = false;
        return true;
      }

      this.thaiIdError = true;
      return false;
    },
    invalidateBirthdate: function invalidateBirthdate() {
      var current = new Date();
      var age = current.getFullYear() - this.date.year - 1;

      if (current.getMonth() - this.date.month > 0 || current.getMonth() - this.date.month === 0 && current.getDate() - this.date.day >= 0) {
        age++;
      }

      this.ageError = age < 17;
      return this.ageError;
    },
    checkRedeemCode: function checkRedeemCode() {
      if (!this.redeemCode) {
        this.redeemCodeError = true;
        return false;
      }

      this.redeemCodeError = false;
      return true;
    },
    showTermsDialog: function showTermsDialog() {
      this.trackAnalytics('track_event', 'personal_information_and_address', 'click', 'next');
      this.$refs.dialog.open();
    },
    trackAnalytics: function trackAnalytics(event, eventCategory, eventAction, eventLabel) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: event,
        event_category: eventCategory,
        event_action: eventAction,
        event_label: eventLabel
      });
    },
    getEkycData: function getEkycData(ekycData) {
      if (ekycData) {
        this.ekyc = ekycData;
      }

      if (this.isVlearn) {
        if (this.ekyc.data.vlearn && this.ekyc.filename.vlearn && this.statusCheckBox) {
          this.agreeTnc = true;
        }
      }
    },
    setStatusCheckBox: function setStatusCheckBox() {
      if (this.statusCheckBox === false) {
        this.statusCheckBox = true;
      } else {
        this.statusCheckBox = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terms-dialog .content[data-v-3447ce0c] {\n  max-height: 85%;\n  max-width: 860px;\n}\n.terms-dialog .content .dialog-content[data-v-3447ce0c] {\n  padding: 36px;\n}\n.address-container[data-v-3447ce0c] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 36px 16px;\n  font-size: 24px;\n}\n.address-container .address-inner-container[data-v-3447ce0c] {\n  max-width: 950px;\n  margin: auto;\n}\n.address-container .line[data-v-3447ce0c] {\n  border-top: 1px solid #ddd;\n  margin: 25px 0px 25px 0px;\n}\n.thaiid-input[data-v-3447ce0c] {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #000;\n  box-sizing: border-box;\n  border-radius: 8px;\n  transition: 150ms border-color ease;\n  font-family: TrueMedium;\n  font-size: 24px;\n  line-height: normal;\n  font-weight: lighter;\n  outline: none;\n}\n.redeemcode-input[data-v-3447ce0c] {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #000;\n  box-sizing: border-box;\n  border-radius: 8px;\n  transition: 150ms border-color ease;\n  font-family: TrueMedium;\n  font-size: 24px;\n  line-height: normal;\n  font-weight: lighter;\n  outline: none;\n}\n.text-error[data-v-3447ce0c] {\n  font-size: 20px;\n  color: red !important;\n}\n.input-error[data-v-3447ce0c] {\n  border: 1px solid red !important;\n}\n.save-button-container[data-v-3447ce0c] {\n  display: flex;\n  justify-content: center;\n  max-width: 300px;\n  margin: auto;\n}\n.save-button-container button[data-v-3447ce0c] {\n  width: 100%;\n}\n.title[data-v-3447ce0c] {\n  font-size: 40px;\n  text-align: center;\n}\n.sub-title[data-v-3447ce0c] {\n  font-size: 21px;\n  text-align: center;\n}\n.sub-title-2[data-v-3447ce0c] {\n  line-height: 15px;\n  color: #777;\n}\nform .form-label[data-v-3447ce0c] {\n  margin: auto;\n  max-width: 300px;\n  font-size: 30px;\n  text-align: center;\n}\nform .form-input[data-v-3447ce0c] {\n  margin: auto;\n  max-width: 300px;\n  margin-bottom: 20px;\n}\n.date[data-v-3447ce0c] {\n  margin: auto;\n  max-width: 300px;\n  display: grid;\n  grid-template-columns: 3fr 3fr 3fr;\n  grid-gap: 8px;\n}\n.date .dropdown[data-v-3447ce0c] {\n  position: relative;\n}\n.date .dropdown .dropdown-label[data-v-3447ce0c] {\n  pointer-events: none;\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 8px;\n  border: 1px solid black;\n  color: #333;\n  padding: 0 12px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  grid-gap: 4px;\n}\n.date .dropdown .dropdown-label span[data-v-3447ce0c] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.date .dropdown .dropdown-label[data-v-3447ce0c]:after {\n  content: \"\";\n  width: 11px;\n  height: 6px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDUuNSA1LjVMMTIgMSIgc3Ryb2tlPSIjMjIyMjIzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=\");\n}\n.date .dropdown select[data-v-3447ce0c] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  font-size: 16px;\n  font-family: Arial;\n}\n.ekyc-container[data-v-3447ce0c] {\n  text-align: center;\n  margin: 80px auto auto auto;\n  max-width: 600px;\n}\n.ekyc-container.hide-ekyc-element[data-v-3447ce0c] {\n  display: none;\n}\n.term-condition[data-v-3447ce0c] {\n  margin-top: 30px;\n  text-align: center;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n}\n.term-condition label .first-line[data-v-3447ce0c] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.term-condition label .first-line input[data-v-3447ce0c] {\n  margin-top: 6.5px;\n}\n.term-condition label .first-line .text[data-v-3447ce0c] {\n  margin-left: 3px;\n  color: #000;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 26.39px;\n}\n.term-condition label .second-line .showTermsDialogClass[data-v-3447ce0c] {\n  color: #29ABE2;\n  cursor: pointer;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 26.39px;\n  margin-left: 8px;\n  text-decoration: underline;\n}\n@media only screen and (max-width: 600px) {\n.sub-title[data-v-3447ce0c] {\n    width: 270px;\n    margin: auto;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true& ***!
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
    [
      _c(
        "dialog-element",
        {
          ref: "dialog",
          staticClass: "terms-dialog",
          attrs: { showCloseButton: "" },
        },
        [
          _c(
            "div",
            { attrs: { slot: "content" }, slot: "content" },
            [_c("terms-element")],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("loading-element", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading",
          },
        ],
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.loading,
              expression: "!loading",
            },
          ],
          staticClass: "address-container",
        },
        [
          _c("div", { staticClass: "address-inner-container" }, [
            _c(
              "div",
              { staticClass: "title" },
              [
                (_vm.product === "sim" && _vm.simType === "postpaid") ||
                _vm.product === "postpaid"
                  ? [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.Locale.user_information_form
                              .postpaid_sim_only_title[_vm.$i18n.locale]
                          )
                      ),
                    ]
                  : _vm.product === "sim" && _vm.simType === "prepaid"
                  ? [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.user_information_form
                            .prepaid_sim_only_title[_vm.$i18n.locale]
                        )
                      ),
                    ]
                  : [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.user_information_form.title[
                            _vm.$i18n.locale
                          ]
                        )
                      ),
                    ],
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sub-title",
                class: { "text-error": _vm.ageError },
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.Locale.user_information_form.sub_title_1[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sub-title sub-title-2",
                class: { "text-error": _vm.ageError },
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.Locale.user_information_form.sub_title_2[
                      _vm.$i18n.locale
                    ]
                  )
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "line" }),
            _vm._v(" "),
            _c("div", { staticClass: "form-wrap" }, [
              _c(
                "form",
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.isCampaignRedeem ||
                            _vm.isCampaignRedeemFreeDevice,
                          expression:
                            "isCampaignRedeem || isCampaignRedeemFreeDevice",
                        },
                      ],
                      staticClass: "form-label",
                    },
                    [_vm._v(_vm._s(_vm.Locale.redeem_code[_vm.$i18n.locale]))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.isCampaignRedeem ||
                            _vm.isCampaignRedeemFreeDevice,
                          expression:
                            "isCampaignRedeem || isCampaignRedeemFreeDevice",
                        },
                      ],
                      staticClass: "form-input",
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.redeemCode,
                            expression: "redeemCode",
                          },
                        ],
                        staticClass: "redeemcode-input",
                        class: { "input-error": _vm.redeemCodeError },
                        attrs: {
                          type: "text",
                          placeholder: [
                            [
                              _vm.Locale.redeem_code.placeholder[
                                _vm.$i18n.locale
                              ],
                            ],
                          ],
                        },
                        domProps: { value: _vm.redeemCode },
                        on: {
                          input: [
                            function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.redeemCode = $event.target.value
                            },
                            _vm.checkRedeemCode,
                          ],
                        },
                      }),
                      _vm._v(" "),
                      _vm.redeemCodeError
                        ? _c("div", { staticClass: "text-error" }, [
                            _vm._v(
                              _vm._s(
                                _vm.Locale.redeem_code.error[_vm.$i18n.locale]
                              )
                            ),
                          ])
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.product !== "pre_to_post",
                          expression: "product !== 'pre_to_post'",
                        },
                      ],
                      staticClass: "form-label",
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.user_information_form.thai_id[
                            _vm.$i18n.locale
                          ]
                        )
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.product !== "pre_to_post",
                          expression: "product !== 'pre_to_post'",
                        },
                      ],
                      staticClass: "form-input",
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.thaiId,
                            expression: "thaiId",
                          },
                        ],
                        staticClass: "thaiid-input",
                        class: { "input-error": _vm.thaiIdError },
                        attrs: {
                          type: "text",
                          placeholder: [
                            [
                              _vm.Locale.user_information_form.customerDetail
                                .thai_id.placeholder[_vm.$i18n.locale],
                            ],
                          ],
                        },
                        domProps: { value: _vm.thaiId },
                        on: {
                          input: [
                            function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.thaiId = $event.target.value
                            },
                            _vm.validateThaiNationalID,
                          ],
                        },
                      }),
                      _vm._v(" "),
                      _vm.thaiIdError
                        ? _c("div", { staticClass: "text-error" }, [
                            _vm._v(
                              _vm._s(
                                _vm.Locale.user_information_form.customerDetail
                                  .thai_id.error[_vm.$i18n.locale]
                              )
                            ),
                          ])
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-label" }, [
                    _vm._v(
                      _vm._s(
                        _vm.Locale.user_information_form.date_of_birth[
                          _vm.$i18n.locale
                        ]
                      )
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "date" }, [
                    _c("div", { staticClass: "dropdown" }, [
                      _c("div", { staticClass: "dropdown-label" }, [
                        _c("span", [_vm._v(_vm._s(_vm.date.day + 1))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.day,
                              expression: "date.day",
                            },
                          ],
                          attrs: { id: "day" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.date,
                                "day",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.days, function (day, key) {
                          return _c(
                            "option",
                            { key: key, domProps: { value: day } },
                            [_vm._v(_vm._s(day + 1))]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown" }, [
                      _c("div", { staticClass: "dropdown-label" }, [
                        _c("span", [
                          _vm._v(_vm._s(_vm.months[_vm.date.month])),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.month,
                              expression: "date.month",
                            },
                          ],
                          attrs: { id: "month" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.date,
                                "month",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.months, function (month, key) {
                          return _c(
                            "option",
                            { key: key, domProps: { value: key } },
                            [_vm._v(_vm._s(month))]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown" }, [
                      _c("div", { staticClass: "dropdown-label" }, [
                        _c("span", [_vm._v(_vm._s(_vm.date.year + 543))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.year,
                              expression: "date.year",
                            },
                          ],
                          attrs: { id: "year" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.date,
                                "year",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.years, function (year, key) {
                          return _c(
                            "option",
                            { key: key, domProps: { value: year } },
                            [_vm._v(_vm._s(year + 543))]
                          )
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("ekyc-element", {
                    class: { "hide-ekyc-element": !_vm.isVlearn },
                    attrs: {
                      vlearn: _vm.isVlearn,
                      "hide-note": "",
                      "vlearn-only": "",
                    },
                    on: { input: _vm.getEkycData },
                    model: {
                      value: _vm.ekyc,
                      callback: function ($$v) {
                        _vm.ekyc = $$v
                      },
                      expression: "ekyc",
                    },
                  }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "term-condition" }, [
              _c("label", [
                _c("div", { staticClass: "first-line" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.agreeTnc,
                        expression: "agreeTnc",
                      },
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.agreeTnc)
                        ? _vm._i(_vm.agreeTnc, null) > -1
                        : _vm.agreeTnc,
                    },
                    on: {
                      click: _vm.setStatusCheckBox,
                      change: function ($event) {
                        var $$a = _vm.agreeTnc,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.agreeTnc = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.agreeTnc = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.agreeTnc = $$c
                        }
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text" }, [
                    _vm._v(
                      _vm._s(
                        _vm.Locale.user_information_form.agreement[
                          _vm.$i18n.locale
                        ]
                      )
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("label", [
                _c("div", { staticClass: "second-line" }, [
                  _c(
                    "div",
                    {
                      staticClass: "showTermsDialogClass",
                      on: { click: _vm.showTermsDialog },
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.Locale.user_information_form.read_agreement[
                              _vm.$i18n.locale
                            ]
                          ) +
                          "\n            "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "save-button-container" },
              [
                _c(
                  "button-element",
                  {
                    staticClass: "button",
                    attrs: {
                      id: "prevalidate-ekyc",
                      disabled: _vm.termAndCondtionCheckboxDisabled,
                    },
                    on: { click: _vm.save },
                  },
                  [_vm._v(_vm._s(_vm.Locale.address_next[_vm.$i18n.locale]))]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/sections/thaiid-form/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/sections/thaiid-form/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3447ce0c&scoped=true& */ "./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& */ "./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3447ce0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/sections/thaiid-form/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=style&index=0&id=3447ce0c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3447ce0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3447ce0c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/sections/thaiid-form/index.vue?vue&type=template&id=3447ce0c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3447ce0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/sections/thaiid-form/locale.json":
/*!*******************************************************!*\
  !*** ./resources/js/sections/thaiid-form/locale.json ***!
  \*******************************************************/
/*! exports provided: address_next, user_information_form, redeem_code, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"user_information_form\":{\"title\":{\"th\":\"ตรวจสอบสิทธิ์การซื้อสินค้าและบริการกับ ทรูมูฟ เอช\",\"en\":\"Verify your privilege with TrueMove H\"},\"postpaid_sim_only_title\":{\"th\":\"เบอร์รายเดือน ทรูมูฟ เอช\",\"en\":\"TrueMove H Postpaid\"},\"prepaid_sim_only_title\":{\"th\":\"เบอร์เติมเงิน ทรูมูฟ เอช\",\"en\":\"TrueMove H Prepaid\"},\"sub_title_1\":{\"th\":\"กรุณากรอกข้อมูลส่วนตัวของผู้ที่จะใช้งานเบอร์นี้\",\"en\":\"Please enter personal information for the mobile number\"},\"sub_title_2\":{\"th\":\"(สำหรับผู้มีอายุ 17 ปี ขึ้นไป)\",\"en\":\"(you must be at least 17 years old)\"},\"date_of_birth\":{\"th\":\"วันเกิด\",\"en\":\"Date of Birth\"},\"exp_date\":{\"th\":\"วันบัตรหมดอายุ\",\"en\":\"Expiration Date of Thai ID\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Terms and Condition\"},\"read_agreement\":{\"th\":\"อ่านข้อกำหนดและเงื่อนไข\",\"en\":\"Read terms and conditions\"},\"customerDetail\":{\"thai_id\":{\"placeholder\":{\"th\":\"13 หลัก\",\"en\":\"13 digits of Thai ID number\"},\"error\":{\"th\":\"กรุณากรอกข้อมูลให้ถูกต้อง\",\"en\":\"Please enter 13-digit Thai ID number\"},\"type\":\"text\",\"required\":true}}},\"redeem_code\":{\"th\":\"รหัสคูปองสิทธิพิเศษทรูการ์ด\",\"en\":\"True Card Redeem Code\",\"placeholder\":{\"th\":\"กรอกรหัสคูปองสิทธิพิเศษทรูการ์ดของท่าน\",\"en\":\"Please fill in True Card Redeem Code\"},\"error\":{\"th\":\"รหัสไม่ถูกต้องกรุณาลองใหม่อีกครั้ง\",\"en\":\"The code was incorrect. Please try again.\"}}}");

/***/ })

}]);