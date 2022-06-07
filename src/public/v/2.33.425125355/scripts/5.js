(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  model: {
    event: 'change'
  },
  props: {
    placeholder: String,
    value: String,
    disabled: Boolean,
    options: Array,
    error: Boolean,
    selected: Object,
    name: String
  },
  data: function data() {
    return {
      opened: false
    };
  },
  computed: {
    text: function text() {
      var _this = this;

      if (this.options) {
        var selected = typeof this.options[0] === 'string' ? this.options.find(function (option) {
          return option === _this.value;
        }) : this.options.find(function (option) {
          return option.id.toString() === _this.value;
        });
        return selected ? selected.value || selected : '';
      }
    },
    computedOptions: function computedOptions() {
      if (this.options) {
        return typeof this.options[0] === 'string' ? this.options.map(function (option) {
          return {
            id: option,
            value: option
          };
        }) : this.options;
      }
    }
  },
  methods: {
    change: function change(option) {
      if (option.disabled) return;
      this.$emit('change', option.id.toString());
    },
    toggle: function toggle(opened) {
      this.opened = opened;
      this.$emit(opened ? 'focus' : 'blur');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      number: '',
      locale: {
        sorry: {
          en: 'This number is no longer valid. Please select another number and proceed again.',
          th: 'เบอร์ที่ท่านเลือกได้ถูกจองไว้ก่อนแล้ว กรุณามาเลือกเบอร์อื่นแล้วทำรายการใหม่อีกครั้ง'
        },
        number: {
          en: 'Your mobile number',
          th: 'ขณะนี้เบอร์'
        },
        error1: {
          en: 'Another customer reserved this mobile number already.',
          th: 'มีลูกค้าท่านอื่นทำการจองเรียบร้อยแล้ว'
        },
        error2: {
          en: 'The system will remove this mobile number from your reservation.',
          th: 'ระบบจะทำการลบเบอร์ออกจากการจองของคุณอัตโนมัติ'
        },
        message: {
          en: 'You could back to select mobile number by click ',
          th: 'คุณสามารถกลับไปเลือกเบอร์เพิ่มเติมโดยกดปุ่ม '
        },
        messageBack: {
          en: '"Back to select mobile number"',
          th: '"กลับไปเลือกเบอร์"'
        },
        back: {
          en: 'Back to select mobile number',
          th: 'กลับไปเลือกเบอร์'
        }
      }
    };
  },
  methods: {
    open: function open(number) {
      this.number = number;
      this.$refs.dialog.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".select[data-v-7e7894dc] {\n  position: relative;\n  width: 100%;\n}\n.select.white-bg .input[data-v-7e7894dc] {\n  background-color: #fff;\n}\n.select[invalid] .input[data-v-7e7894dc] {\n  border-color: red;\n  color: red;\n}\n.input[data-v-7e7894dc] {\n  font-size: 15px;\n  padding: 0 26px 0 12px;\n  border: 1px solid #000;\n  width: 100%;\n  min-width: 0;\n  height: 40px;\n  box-sizing: border-box;\n  border-radius: 8px;\n  -webkit-appearance: none;\n}\n.input[data-v-7e7894dc]:focus, .input[data-v-7e7894dc]:hover {\n  outline: none;\n  border-color: #000;\n}\n.input[data-v-7e7894dc]:disabled {\n  color: #949494;\n  border-color: #ccc;\n  opacity: 1;\n  pointer-events: none;\n  -webkit-text-fill-color: #949494;\n}\n[error] > .input[data-v-7e7894dc] {\n  border-color: red;\n}\n.input[data-v-7e7894dc]::-moz-placeholder {\n  color: #9b9b9b;\n}\n.input[data-v-7e7894dc]::placeholder {\n  color: #9b9b9b;\n}\n.options[data-v-7e7894dc] {\n  position: absolute;\n  top: 40px;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  overflow-y: auto;\n  margin-bottom: 24px;\n  border: 1px solid #a7a7a7;\n  max-height: 220px;\n  background-color: white;\n  border-radius: 0 0 4px 4px;\n}\n.option[data-v-7e7894dc] {\n  overflow: hidden;\n  padding: 8px 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  text-align: left;\n  font-family: system-ui;\n  font-size: 15px;\n}\n.option[data-v-7e7894dc]:hover {\n  background-color: #eaeaea;\n}\n.option[disabled][data-v-7e7894dc] {\n  cursor: default;\n  color: #9b9b9b;\n}\n.option[disabled][data-v-7e7894dc]:hover {\n  background-color: #fff;\n}\n.option[selected][data-v-7e7894dc] {\n  background-color: #d5d5d5;\n}\n.caret[data-v-7e7894dc] {\n  position: absolute;\n  top: 4px;\n  right: 8px;\n  pointer-events: none;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cD  ovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48cG  F0aCBmaWxsPSJ0cmFuc3BhcmVudCIgZD0iTTAgMGg0Ljk1djEwSDB6Ii8+PHBhdG  ggZmlsbD0iIzQ0NCIgZD0iTTEuNDEgNC42N2wxLjA3LTEuNDkgMS4wNiAxLjQ5SDE  uNDF6bTIuMTMuNjZMMi40OCA2LjgyIDEuNDEgNS4zM2g  yLjEzeiIvPjwvc3ZnPg==\") no-repeat;\n  height: 32px;\n  width: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dialog[data-v-d0acffec] .content {\n  max-width: 900px;\n}\n.dialog[data-v-d0acffec] {\n  text-align: center;\n}\n.dialog .close-container[data-v-d0acffec] {\n  display: flex;\n  justify-content: flex-end;\n}\n.dialog .close-container .close[data-v-d0acffec] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.dialog .close-container .close svg[data-v-d0acffec] {\n  fill: #9a9a9a;\n}\n.dialog .close-container .close[data-v-d0acffec]:hover {\n  background: #e3e3e3;\n}\n.dialog .timeout-icon[data-v-d0acffec] {\n  width: 120px;\n}\n.dialog .title[data-v-d0acffec] {\n  margin: 18px auto 10px auto;\n  max-width: 720px;\n  font-family: \"TrueBold\";\n  font-size: 40px;\n  line-height: 38px;\n  color: #ff0000;\n}\n.dialog .number-container[data-v-d0acffec] {\n  padding: 14px;\n  max-width: 400px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n  margin: auto auto 14px auto;\n}\n.dialog .number-container .number-label[data-v-d0acffec] {\n  color: #4a4a4a;\n  font-size: 20px;\n  line-height: 20px;\n}\n.dialog .number-container .number-value[data-v-d0acffec] {\n  margin-top: 14px;\n  font-family: \"TrueBold\";\n  font-size: 40px;\n  line-height: 20px;\n  color: #000;\n}\n.dialog .error-message-container[data-v-d0acffec] {\n  color: #ff0000;\n  font-size: 24px;\n  line-height: 24px;\n  margin-bottom: 8px;\n}\n.dialog .message-container[data-v-d0acffec] {\n  color: #666;\n  font-size: 24px;\n  line-height: 24px;\n}\n.dialog .message-container span[data-v-d0acffec] {\n  font-family: \"TrueBold\";\n}\n.dialog .button-container[data-v-d0acffec] {\n  margin: 14px auto 36px auto;\n}\n.dialog .button-container .button[data-v-d0acffec] {\n  background-color: #ff0000;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "select", attrs: { name: _vm.name, error: _vm.error } },
    [
      _c("input", {
        staticClass: "input",
        attrs: {
          type: "text",
          readonly: "",
          placeholder: _vm.placeholder,
          disabled: _vm.disabled,
        },
        domProps: { value: _vm.text },
        on: {
          focus: function ($event) {
            return _vm.toggle(true)
          },
          blur: function ($event) {
            return _vm.toggle(false)
          },
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.opened,
              expression: "opened",
            },
          ],
          staticClass: "options",
        },
        _vm._l(_vm.computedOptions, function (option) {
          return _c(
            "div",
            {
              key: option.id,
              staticClass: "option",
              attrs: {
                disabled: option.disabled,
                selected: option.id.toString() === _vm.value,
              },
              on: {
                mousedown: function ($event) {
                  return _vm.change(option)
                },
              },
            },
            [_vm._v("\n      " + _vm._s(option.value || option) + "\n    ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "caret" }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true& ***!
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
  return _c(
    "dialog-element",
    {
      ref: "dialog",
      staticClass: "dialog",
      on: {
        onClose: function ($event) {
          return _vm.$emit("on-close")
        },
      },
    },
    [
      _c("div", { attrs: { slot: "content" }, slot: "content" }, [
        _c("div", { staticClass: "close-container" }, [
          _c(
            "div",
            {
              staticClass: "close",
              on: {
                click: function ($event) {
                  return _vm.$refs.dialog.close()
                },
              },
            },
            [
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
                  _c("path", {
                    attrs: {
                      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                    },
                  }),
                  _vm._v(" "),
                  _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
                ]
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "timeout-icon",
          attrs: { src: "/images/icons/timeout.png" },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm.locale.sorry[_vm.$i18n.locale])),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "number-container" }, [
          _c("div", { staticClass: "number-label" }, [
            _vm._v(_vm._s(_vm.locale.number[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "number-value" }, [
            _vm._v(_vm._s(_vm.number)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "error-message-container" }, [
          _c("div", [_vm._v(_vm._s(_vm.locale.error1[_vm.$i18n.locale]))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.locale.error2[_vm.$i18n.locale]))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "message-container" }, [
          _vm._v(_vm._s(_vm.locale.message[_vm.$i18n.locale]) + " "),
          _c("span", [
            _vm._v(_vm._s(_vm.locale.messageBack[_vm.$i18n.locale])),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "button-container" },
          [
            _c(
              "button-element",
              {
                staticClass: "button",
                on: {
                  click: function ($event) {
                    return _vm.$refs.dialog.close()
                  },
                },
              },
              [_vm._v(_vm._s(_vm.locale.back[_vm.$i18n.locale]))]
            ),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/dropdown.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.vue?vue&type=template&id=7e7894dc&scoped=true& */ "./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true&");
/* harmony import */ var _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.vue?vue&type=script&lang=js& */ "./resources/js/components/dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& */ "./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e7894dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=style&index=0&id=7e7894dc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_7e7894dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdown.vue?vue&type=template&id=7e7894dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dropdown.vue?vue&type=template&id=7e7894dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_7e7894dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/hold-dialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/store/postpaid/hold-dialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true& */ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true&");
/* harmony import */ var _hold_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hold-dialog.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hold_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d0acffec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/hold-dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hold-dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=style&index=0&id=d0acffec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_style_index_0_id_d0acffec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/hold-dialog.vue?vue&type=template&id=d0acffec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hold_dialog_vue_vue_type_template_id_d0acffec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/locale.json":
/*!*******************************************************!*\
  !*** ./resources/js/pages/store/postpaid/locale.json ***!
  \*******************************************************/
/*! exports provided: package_detail, hide_detail, tnc, meaning_title, lucky_title, lucky_9999_title, lucky_subtitle, lucky_9999_subtitle, choose_meaning, search_number_title, search_number_title_9999, search_number_subtitle, serach_number_bottom, favorite, dislike, sum, meaning, search, reset, search_result, search_result_numbers, search_result_description, postpaid, prepaid, start, select, no_result, pricePrepaid, select_your_new_num, lucky9999, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"package_detail\":{\"th\":\"รายละเอียดแพ็กเกจ\",\"en\":\"Package Detail\"},\"hide_detail\":{\"th\":\"ซ่อนหน้าข้อมูล\",\"en\":\"Hide Detail\"},\"tnc\":{\"th\":\"ข้อกำหนดและเงื่อนไขการให้บริการ\",\"en\":\"Term & Condition\"},\"meaning_title\":{\"th\":\"ความหมายของผลรวมที่ได้\",\"en\":\"Meaning sum of number\"},\"lucky_title\":{\"th\":\"เบอร์มงคล ทรูมูฟ เอช\",\"en\":\"Lucky Number\"},\"lucky_9999_title\":{\"prefix\":{\"th\":\"ขุมทรัพย์เบอร์สวย \",\"en\":\"Bersuay \"},\"suffix\":{\"th\":\"เสริมมงคล\",\"en\":\"mongkol\"}},\"lucky_subtitle\":{\"en\":\"<span style='color: #ff0000;'>Select number</span> from these categories\",\"th\":\"เลือกเบอร์มงคลจากหมวดหมู่\"},\"lucky_9999_subtitle\":{\"th\":\"คัดพิเศษ 9999 เบอร์\",\"en\":\"Special selection 9999 numbers\"},\"choose_meaning\":{\"th\":\"เลือกผลรวมนี้\",\"en\":\"Choose this sum\"},\"search_number_title\":{\"th\":\"ค้นหาหมายเลขที่ต้องการ\",\"en\":\"Search mobile number\"},\"search_number_title_9999\":{\"th\":\"ค้นหาแบบระบุตัวเลขที่ชอบและไม่ชอบ ช่องที่ไม่ต้องการระบุสามารถเว้นว่างได้\",\"en\":\"ค้นหาแบบระบุตัวเลขที่ชอบและไม่ชอบ ช่องที่ไม่ต้องการระบุสามารถเว้นว่างได้\"},\"search_number_subtitle\":{\"th\":\"ค้นหาแบบระบุตัวเลขที่ชอบและไม่ชอบ  ช่องที่ไม่ต้องการระบุสามารถเว้นว่างได้\",\"en\":\"Search by specifying the number and position of the desired number. Unwanted field you can leave it blank.\"},\"serach_number_bottom\":{\"th\":\"ผลลัพธ์ของการค้นหาตัวเลขที่ชอบและไม่ชอบจะค้นหาเฉพาะตำแหน่ง 7 ตัวท้ายของหมายเลขเท่านั้น\",\"en\":\"The search results for likes and dislikes number will only search for the last 7 digits of the mobile number.\"},\"favorite\":{\"th\":\"ตัวเลขที่ชอบ\",\"en\":\"Favorite numbers\"},\"dislike\":{\"th\":\"ตัวเลขที่ไม่ชอบ\",\"en\":\"Dislike numbers\"},\"sum\":{\"th\":\"ผลรวม\",\"en\":\"Sum of numbers\"},\"meaning\":{\"th\":\"ดูความหมาย\",\"en\":\"Meaning\"},\"search\":{\"th\":\"ค้นหาเบอร์\",\"en\":\"Search\"},\"reset\":{\"th\":\"ล้างข้อมูล\",\"en\":\"Reset\"},\"search_result\":{\"th\":\"ผลการค้นหา\",\"en\":\"Search results\"},\"search_result_numbers\":{\"th\":\"เบอร์\",\"en\":\"numbers\"},\"search_result_description\":{\"th\":\"กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้เสร็จสิ้นภายใน 2 ชั่วโมง ในกรณีที่มีการทำรายการเข้ามาเป็นจำนวนมาก เบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้\",\"en\":\"Please select the number and fill in the user details within 2 hours after you have verified the privileges. In case of over-transaction, the reserved number will be canceled immediately\"},\"postpaid\":{\"th\":\"รายเดือน\",\"en\":\"Postpaid\"},\"prepaid\":{\"th\":\"เติมเงิน\",\"en\":\"Prepaid\"},\"start\":{\"th\":\"แพ็กเกจเริ่มต้น\",\"en\":\"Start\"},\"select\":{\"th\":\"เลือกเบอร์\",\"en\":\"Select\"},\"no_result\":{\"th\":\"ไม่พบเบอร์\",\"en\":\"Number not found\"},\"pricePrepaid\":{\"th\":\"ราคา\",\"en\":\"Price\"},\"select_your_new_num\":{\"th\":\"ค้นหาเบอร์ใหม่ของคุณ\",\"en\":\"Select your new number\"},\"lucky9999\":{\"number_format\":{\"th\":\"เลือกลักษณะเบอร์สวย\",\"en\":\"Number formatting\"},\"select_package\":{\"th\":\"เลือกแพ็กเกจ\",\"en\":\"Choose the package\"},\"minimun_price\":{\"th\":\"แพ็กเก็จเริ่มต้น\",\"en\":\"starting price\"},\"select\":{\"th\":\"เลือก\",\"en\":\"select\"},\"search_result_description_prefix\":{\"th\":\"กรุณาเลือกเบอร์และยืนยันการส่งข้อมูลตรวจสอบสิทธิให้เสร็จสิ้น\",\"en\":\"Please select the number and fill in the user details\"},\"time_out\":{\"th\":\"ภายใน 2 ชั่วโมง\",\"en\":\"within 2 hours\"},\"search_result_description_suffix\":{\"th\":\"ในกรณีที่มีการทำรายการเข้ามาเป็นจำนวนมาก เบอร์ที่ท่านเลือกไว้จะถูกถอดออกได้\",\"en\":\"after you have verified the privileges. In case of over-transaction, the reserved number will be canceled immediately\"}}}");

/***/ })

}]);