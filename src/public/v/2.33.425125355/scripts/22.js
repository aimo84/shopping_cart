(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./resources/js/components/button.vue");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./resources/js/components/ekyc/status.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.json */ "./resources/js/components/ekyc/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/components/ekyc/locale.json", 1);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/image */ "./resources/js/utils/image.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _button__WEBPACK_IMPORTED_MODULE_2__["default"],
    'ekyc-status': _status__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    value: Object,
    hideNote: Boolean,
    showDescription: Boolean,
    vlearnOnly: {
      type: Boolean,
      "default": false
    },
    vlearn: Boolean,
    limit: {
      type: Number,
      "default": 1500000
    }
  },
  emits: ['input'],
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_4__
    };
  },
  methods: {
    fileChanged: function fileChanged(event, id) {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var value, file, output, temp, fileSize, uploadFailed, base64, _base;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _this.value;
                value.data[id] = '';
                value.filename[id] = '';
                value.temp[id] = '';
                value.status[id] = false;

                if (!(event.target.files && event.target.files[0])) {
                  _context.next = 48;
                  break;
                }

                file = event.target.files[0];

                if (!(file.size <= 5000000)) {
                  _context.next = 47;
                  break;
                }

                if (!(file.size > _this.limit)) {
                  _context.next = 36;
                  break;
                }

                uploadFailed = false;

                if (!(_this.limit !== 1500000)) {
                  _context.next = 18;
                  break;
                }

                value.status[id] = 'loading';
                _context.next = 14;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_5__["forceCompressImage"])(file, 0.8, _this.limit);

              case 14:
                temp = _context.sent;
                if (!temp) uploadFailed = true;
                _context.next = 24;
                break;

              case 18:
                _context.next = 20;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_5__["compressImage"])(file);

              case 20:
                output = _context.sent;
                temp = output.split(',')[1];
                fileSize = temp.length * (3 / 4);
                if (fileSize > _this.limit) uploadFailed = true;

              case 24:
                if (!uploadFailed) {
                  _context.next = 28;
                  break;
                }

                value.status[id] = false;
                value.error[id] = {
                  th: 'กรุณาอัปโหลดภาพที่เล็กลง',
                  en: 'Unable to upload. Please add smaller photo'
                };
                return _context.abrupt("return");

              case 28:
                _context.next = 30;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_5__["toBase64"])(file);

              case 30:
                base64 = _context.sent;
                value.data[id] = base64;
                value.filename[id] = file.name;
                value.temp[id] = temp;
                _context.next = 42;
                break;

              case 36:
                _context.next = 38;
                return Object(_utils_image__WEBPACK_IMPORTED_MODULE_5__["toBase64"])(file);

              case 38:
                _base = _context.sent;
                value.data[id] = _base;
                value.filename[id] = file.name;
                value.temp[id] = _base;

              case 42:
                value.status[id] = true;
                value.error[id] = {};
                event.target.value = '';
                _context.next = 48;
                break;

              case 47:
                value.error[id] = {
                  th: 'กรุณาอัปโหลดภาพที่เล็กลง',
                  en: 'Unable to upload. Please add smaller photo'
                };

              case 48:
                _this.$emit('input', value);

              case 49:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/status.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ "./resources/js/components/ekyc/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/components/ekyc/locale.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    status: [String, Boolean],
    icon: String
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_0__
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ekyc-container[data-v-7561a33e] {\n  max-width: 600px;\n  margin: 48px auto auto;\n  text-align: left;\n}\n.ekyc-container .ekyc-note[data-v-7561a33e] {\n  color: #ff0000;\n  line-height: 24px;\n}\n.ekyc-container .ekyc-note .ekyc-note-label[data-v-7561a33e] {\n  font-family: \"TrueBold\";\n}\n.ekyc-container .ekyc-title[data-v-7561a33e] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 24px;\n  margin: 24px 0;\n}\n.ekyc-container .ekyc-title.no-margin-bottom[data-v-7561a33e] {\n  margin-bottom: 0;\n}\n.ekyc-container .ekyc-description[data-v-7561a33e] {\n  margin-bottom: 24px;\n  line-height: 20px;\n}\n.ekyc-container .ekyc-upload-container[data-v-7561a33e] {\n  background-color: #f8f8f8;\n  border: 1px dashed #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  grid-gap: 24px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-label[data-v-7561a33e] {\n  font-family: \"TrueBold\";\n  line-height: 24px;\n  margin-bottom: 14px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input[data-v-7561a33e] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  grid-gap: 16px;\n  margin-bottom: 8px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input .ekyc-button[data-v-7561a33e] {\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background: #666;\n  min-width: 180px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input .ekyc-button[disabled][data-v-7561a33e] {\n  background: #a9a9a9;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input .ekyc-info[data-v-7561a33e] {\n  color: #999;\n  line-height: 20px;\n  font-size: 20px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-error[data-v-7561a33e] {\n  font-size: 18px;\n  line-height: 18px;\n  color: #ff0000;\n  margin-top: 12px;\n}\n@media screen and (max-width: 860px) {\n.ekyc-container .ekyc-title[data-v-7561a33e] {\n    font-size: 24px;\n}\n.ekyc-container .ekyc-upload-container[data-v-7561a33e] {\n    grid-template-columns: 60px 1fr;\n    align-items: flex-start;\n    grid-gap: 14px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input[data-v-7561a33e] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 8px;\n}\n.ekyc-container .ekyc-upload-container .ekyc-input .ekyc-button[data-v-7561a33e] {\n    min-width: auto;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ekyc-icon[data-v-1bb2d336] {\n  height: 100px;\n  width: 100px;\n  background: #eee;\n  border-radius: 8px;\n}\n.ekyc-icon img[data-v-1bb2d336] {\n  height: 100px;\n  width: 100px;\n}\n.loading[data-v-1bb2d336] {\n  width: 100px;\n  height: 100px;\n  display: grid;\n  place-items: center;\n}\n.loading .loading-icon[data-v-1bb2d336] {\n  border-radius: 100%;\n  border: 4px solid #e4a20f;\n  border-bottom-color: transparent;\n  width: 30px;\n  height: 30px;\n  background: 0 0 !important;\n  -webkit-animation: loading-data-v-1bb2d336 0.9s linear infinite;\n          animation: loading-data-v-1bb2d336 0.9s linear infinite;\n}\n.ekyc-success-icon[data-v-1bb2d336] {\n  width: 100px;\n  height: 100px;\n  background: #e4a20f;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-family: \"TrueBold\";\n  color: #fff;\n  font-size: 22px;\n  line-height: 20px;\n}\n.ekyc-success-icon svg[data-v-1bb2d336] {\n  fill: #fff;\n}\n@media screen and (max-width: 860px) {\n.ekyc-icon[data-v-1bb2d336],\n.ekyc-icon img[data-v-1bb2d336],\n.loading[data-v-1bb2d336] {\n    height: 60px;\n    width: 60px;\n}\n.ekyc-success-icon[data-v-1bb2d336] {\n    width: 60px;\n    height: 60px;\n    font-size: 14px;\n    line-height: 14px;\n}\n.ekyc-success-icon svg[data-v-1bb2d336] {\n    width: 20px;\n    height: 20px;\n}\n}\n@-webkit-keyframes loading-data-v-1bb2d336 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-1bb2d336 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ekyc-container" },
    [
      _c("input", {
        ref: "face",
        attrs: { accept: "image/*", type: "file", hidden: "" },
        on: {
          change: function ($event) {
            return _vm.fileChanged($event, "face")
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        ref: "front",
        attrs: { accept: "image/*", type: "file", hidden: "" },
        on: {
          change: function ($event) {
            return _vm.fileChanged($event, "front")
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        ref: "vlearn",
        attrs: { accept: "image/*", type: "file", hidden: "" },
        on: {
          change: function ($event) {
            return _vm.fileChanged($event, "vlearn")
          },
        },
      }),
      _vm._v(" "),
      !_vm.hideNote
        ? _c("div", { staticClass: "ekyc-note" }, [
            _c("div", { staticClass: "ekyc-note-label" }, [
              _vm._v(_vm._s(_vm.Locale.note[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.Locale.noteDescription[_vm.$i18n.locale])),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showDescription
        ? [
            _c("div", { staticClass: "ekyc-title no-margin-bottom" }, [
              _vm._v(_vm._s(_vm.Locale.ekycTitle[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ekyc-description" }, [
              _vm._v(_vm._s(_vm.Locale.ekycDescription[_vm.$i18n.locale])),
            ]),
          ]
        : _vm.vlearn
        ? _c("div", { staticClass: "ekyc-title" }, [
            _vm._v(_vm._s(_vm.Locale.ekycTitle[_vm.$i18n.locale])),
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.vlearnOnly
        ? _c(
            "div",
            { staticClass: "ekyc-upload-container" },
            [
              _c("ekyc-status", {
                attrs: { icon: "face", status: _vm.value.status.face },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "ekyc-form" }, [
                _c("div", { staticClass: "ekyc-label" }, [
                  _vm._v(_vm._s(_vm.Locale.faceCard[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ekyc-input" },
                  [
                    _c(
                      "button-element",
                      {
                        staticClass: "ekyc-button",
                        attrs: {
                          type: "button",
                          disabled: _vm.value.status.face === "loading",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$refs.face.click()
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.Locale.browse[_vm.$i18n.locale]))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "ekyc-info" }, [
                      _vm._v(_vm._s(_vm.Locale.acceptFile[_vm.$i18n.locale])),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.value.error.face
                  ? _c("div", { staticClass: "ekyc-error" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.value.error.face[_vm.$i18n.locale]) +
                          "\n      "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.vlearnOnly
        ? _c(
            "div",
            { staticClass: "ekyc-upload-container" },
            [
              _c("ekyc-status", {
                attrs: { icon: "front_card", status: _vm.value.status.front },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "ekyc-form" }, [
                _c("div", { staticClass: "ekyc-label" }, [
                  _vm._v(_vm._s(_vm.Locale.frontCard[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ekyc-input" },
                  [
                    _c(
                      "button-element",
                      {
                        staticClass: "ekyc-button",
                        attrs: {
                          type: "button",
                          disabled: _vm.value.status.front === "loading",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$refs.front.click()
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.Locale.browse[_vm.$i18n.locale]))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "ekyc-info" }, [
                      _vm._v(_vm._s(_vm.Locale.acceptFile[_vm.$i18n.locale])),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.value.error.front
                  ? _c("div", { staticClass: "ekyc-error" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.value.error.front[_vm.$i18n.locale]) +
                          "\n      "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.vlearn
        ? _c(
            "div",
            { staticClass: "ekyc-upload-container" },
            [
              _c("ekyc-status", {
                attrs: { icon: "front_card", status: _vm.value.status.vlearn },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "ekyc-form" }, [
                _c("div", { staticClass: "ekyc-label" }, [
                  _vm._v(_vm._s(_vm.Locale.vlearn[_vm.$i18n.locale])),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ekyc-input" },
                  [
                    _c(
                      "button-element",
                      {
                        staticClass: "ekyc-button",
                        attrs: {
                          type: "button",
                          disabled: _vm.value.status.vlearn === "loading",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$refs.vlearn.click()
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.Locale.browse[_vm.$i18n.locale]))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "ekyc-info" }, [
                      _vm._v(_vm._s(_vm.Locale.acceptFile[_vm.$i18n.locale])),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.value.error.vlearn
                  ? _c("div", { staticClass: "ekyc-error" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.value.error.vlearn[_vm.$i18n.locale]) +
                          "\n      "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ],
            1
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.status === "loading"
      ? _c("div", { staticClass: "loading" }, [
          _c("div", { staticClass: "loading-icon" }),
        ])
      : _vm.status
      ? _c("div", { staticClass: "ekyc-success-icon" }, [
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
              _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                  stroke: "#fff",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.Locale.success[_vm.$i18n.locale]))]),
        ])
      : _c("div", { staticClass: "ekyc-icon" }, [
          _c("img", { attrs: { src: "/images/icons/" + _vm.icon + ".png" } }),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ekyc/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ekyc/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7561a33e&scoped=true& */ "./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/ekyc/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& */ "./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7561a33e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ekyc/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ekyc/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ekyc/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=style&index=0&id=7561a33e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7561a33e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7561a33e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/index.vue?vue&type=template&id=7561a33e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7561a33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ekyc/locale.json":
/*!**************************************************!*\
  !*** ./resources/js/components/ekyc/locale.json ***!
  \**************************************************/
/*! exports provided: note, noteDescription, ekycTitle, ekycDescription, faceCard, frontCard, vlearn, browse, acceptFile, success, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"note\":{\"en\":\"*Note\",\"th\":\"*คำแนะนำ\"},\"noteDescription\":{\"en\":\"In case of buying Family Sim, the online E-KYC will be required to confirm your identity before complete this order.\",\"th\":\"ในกรณีที่ซื้อ Family Sim จะต้องผ่านการตรวจสอบยืนยันอัตลักษณ์ออนไลน์ โดยการยืนยันข้อมูลของท่านให้ถูกต้อง\"},\"ekycTitle\":{\"en\":\"E-KYC: Verify identity online\",\"th\":\"E-KYC: ตรวจสอบยืนยันอัตลักษณ์ออนไลน์\"},\"ekycDescription\":{\"en\":\"Please confirm your identity via E-KYC before placing an order.\",\"th\":\"Please confirm your identity via E-KYC before placing an order.\"},\"faceCard\":{\"en\":\"Upload your image in a neutral face expression and facing the camera\",\"th\":\"อัปโหลดรูปภาพหน้าตรงของคุณ\"},\"frontCard\":{\"en\":\"Upload your Thai ID card image\",\"th\":\"อัปโหลดรูปบัตรประชาชน\"},\"vlearn\":{\"en\":\"Please upload Your student card or employee card\",\"th\":\"กรุณาอัพโหลดรูปถ่าย บัตรนักเรียน, นักศึกษา หรือ บัตรพนักงาน\"},\"browse\":{\"en\":\"Browse File\",\"th\":\"แนบไฟล์\"},\"acceptFile\":{\"en\":\"Only .JPG, .PNG, with maximum size of 5MB.\",\"th\":\"ไฟล์ภาพสกุล .JPG หรือ .PNG และมีขนาดไม่เกิน 5MB\"},\"success\":{\"en\":\"Success\",\"th\":\"สำเร็จ\"}}");

/***/ }),

/***/ "./resources/js/components/ekyc/status.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ekyc/status.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.vue?vue&type=template&id=1bb2d336&scoped=true& */ "./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true&");
/* harmony import */ var _status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.vue?vue&type=script&lang=js& */ "./resources/js/components/ekyc/status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& */ "./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bb2d336",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ekyc/status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ekyc/status.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ekyc/status.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=style&index=0&id=1bb2d336&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_1bb2d336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./status.vue?vue&type=template&id=1bb2d336&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ekyc/status.vue?vue&type=template&id=1bb2d336&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_1bb2d336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/image.js":
/*!*************************************!*\
  !*** ./resources/js/utils/image.js ***!
  \*************************************/
/*! exports provided: toBase64, compressImage, forceCompressImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return toBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCompressImage", function() { return forceCompressImage; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);



function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result.split(',')[1]);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}
function compressImage(file) {
  var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      var img = new Image();

      img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var width = img.width;
        var height = img.height;
        var max = 500;
        var ratio = Math.min(max / width, max / height);
        width = width * ratio;
        height = height * ratio;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };

      img.src = reader.result;
    };

    reader.onerror = function (error) {
      return reject(error);
    };

    reader.readAsDataURL(file);
  });
}
function forceCompressImage(_x) {
  return _forceCompressImage.apply(this, arguments);
}

function _forceCompressImage() {
  _forceCompressImage = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(file) {
    var quality,
        limit,
        output,
        temp,
        fileSize,
        _args = arguments;
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            quality = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0.8;
            limit = _args.length > 2 ? _args[2] : undefined;
            _context.prev = 2;
            _context.next = 5;
            return compressImage(file, quality);

          case 5:
            output = _context.sent;
            temp = output.split(',')[1];
            fileSize = temp.length * (3 / 4);

            if (!(fileSize > limit)) {
              _context.next = 10;
              break;
            }

            throw new Error();

          case 10:
            return _context.abrupt("return", temp);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            if (!(quality - 0.05 <= 0.05)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return");

          case 17:
            _context.next = 19;
            return forceCompressImage(file, quality - 0.05, limit);

          case 19:
            return _context.abrupt("return", _context.sent);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _forceCompressImage.apply(this, arguments);
}

/***/ })

}]);