(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/zodiac.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    funtong: Object,
    showAscendant: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    ascendant: function ascendant() {
      return this.funtong.ascendant.position;
    },
    type: function type() {
      return this.ascendant.findIndex(function (e) {
        return e.rueanphop === 'ตนุ';
      });
    },
    stars: function stars() {
      var _this = this;

      return this.ascendant.map(function (e, i) {
        var stars = e.stars || [];
        if (_this.type === i && stars.length > 0) stars.splice(-1, 1);
        return stars;
      });
    },
    resizeRatio: function resizeRatio() {
      return 17 / 30;
    },
    fontSize: function fontSize() {
      return [36, 36, 36, 32, 32, 32, 28];
    },
    positions: function positions() {
      return [[[[285, 180]], [[220, 195]], [[170, 245]], [[155, 310]], [[170, 380]], [[220, 425]], [[285, 445]], [[355, 425]], [[405, 380]], [[420, 310]], [[405, 245]], [[355, 195]]], [[[285, 180], [285, 225]], [[210, 185], [225, 220]], [[150, 250], [185, 250]], [[150, 310], [190, 310]], [[150, 375], [190, 375]], [[230, 405], [215, 440]], [[285, 405], [285, 445]], [[345, 405], [360, 445]], [[380, 375], [420, 375]], [[380, 310], [420, 310]], [[380, 250], [420, 250]], [[360, 190], [345, 220]]], [[[290, 165], [290, 200], [290, 230]], [[230, 165], [230, 200], [230, 230]], [[140, 255], [175, 255], [210, 255]], [[150, 310], [185, 310], [225, 310]], [[140, 365], [175, 365], [210, 365]], [[230, 385], [230, 420], [230, 445]], [[290, 385], [290, 420], [290, 445]], [[345, 385], [345, 415], [345, 445]], [[365, 365], [395, 365], [430, 365]], [[350, 310], [390, 310], [425, 310]], [[365, 255], [395, 255], [430, 255]], [[345, 165], [345, 200], [345, 230]]], [[[290, 165], [290, 195], [290, 220], [290, 250]], [[235, 165], [235, 195], [235, 225], [205, 195]], [[145, 255], [180, 255], [215, 255], [180, 225]], [[150, 310], [175, 310], [205, 310], [235, 310]], [[145, 365], [180, 365], [215, 365], [180, 390]], [[235, 385], [235, 420], [235, 445], [205, 420]], [[290, 365], [290, 395], [290, 425], [290, 455]], [[345, 385], [345, 415], [345, 445], [375, 415]], [[365, 365], [400, 365], [435, 365], [400, 390]], [[345, 310], [375, 310], [405, 310], [435, 310]], [[365, 255], [400, 255], [435, 255], [400, 225]], [[345, 165], [345, 195], [345, 230], [375, 195]]], [[[290, 175], [265, 205], [290, 205], [315, 205], [290, 240]], [[240, 155], [240, 180], [240, 210], [240, 235], [215, 195]], [[145, 255], [165, 255], [190, 255], [215, 255], [180, 230]], [[230, 310], [175, 310], [205, 290], [205, 325], [150, 310]], [[145, 360], [165, 360], [190, 360], [215, 360], [180, 385]], [[240, 380], [240, 405], [240, 430], [240, 455], [215, 420]], [[290, 370], [265, 400], [290, 400], [315, 400], [290, 430]], [[345, 380], [345, 405], [345, 430], [345, 455], [365, 420]], [[365, 360], [385, 360], [410, 360], [435, 360], [400, 385]], [[350, 310], [400, 310], [375, 290], [375, 320], [430, 310]], [[365, 255], [385, 255], [410, 255], [435, 255], [400, 230]], [[345, 155], [345, 185], [345, 210], [345, 235], [365, 195]]], [[[290, 160], [290, 190], [290, 220], [290, 250], [270, 205], [315, 205]], [[240, 155], [240, 180], [240, 210], [240, 235], [215, 185], [215, 210]], [[140, 255], [165, 255], [190, 255], [215, 255], [165, 230], [190, 230]], [[150, 310], [175, 310], [205, 310], [235, 310], [210, 285], [210, 330]], [[145, 360], [165, 360], [190, 360], [215, 360], [165, 385], [190, 385]], [[240, 380], [240, 405], [240, 430], [240, 455], [215, 410], [215, 430]], [[290, 365], [290, 400], [290, 430], [290, 460], [270, 410], [315, 410]], [[345, 380], [345, 405], [345, 430], [345, 455], [365, 405], [365, 430]], [[365, 360], [385, 360], [410, 360], [435, 360], [390, 385], [415, 385]], [[345, 310], [375, 310], [400, 310], [430, 310], [375, 285], [375, 330]], [[365, 255], [385, 255], [410, 255], [435, 255], [390, 230], [415, 230]], [[345, 155], [345, 185], [345, 210], [345, 235], [365, 185], [365, 210]]], [[[290, 160], [290, 185], [290, 210], [290, 230], [290, 260], [268, 208], [310, 208]], [[243, 155], [243, 183], [243, 208], [243, 235], [220, 185], [225, 205], [195, 185]], [[145, 255], [165, 255], [190, 255], [215, 255], [165, 230], [190, 230], [165, 205]], [[145, 305], [170, 305], [195, 305], [220, 305], [243, 305], [220, 285], [215, 330]], [[145, 360], [165, 360], [190, 360], [215, 360], [168, 380], [190, 380], [165, 400]], [[243, 380], [243, 405], [243, 430], [243, 455], [223, 405], [223, 430], [195, 430]], [[290, 355], [290, 380], [290, 405], [290, 430], [290, 458], [270, 405], [310, 405]], [[345, 380], [345, 405], [345, 430], [345, 455], [365, 405], [365, 430], [383, 430]], [[365, 360], [388, 360], [410, 360], [435, 360], [390, 380], [415, 380], [410, 400]], [[345, 308], [365, 308], [390, 308], [415, 308], [440, 308], [368, 283], [365, 330]], [[360, 255], [385, 255], [410, 255], [435, 255], [385, 230], [410, 230], [408, 205]], [[343, 158], [343, 183], [343, 208], [343, 235], [365, 183], [365, 208], [385, 183]]]];
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var fontPath, font;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fontPath = 'url(/fonts/ChulabhornLikitDisplay/chulabhornlikitdisplay-medium.woff2)';
              font = new FontFace('ChulabhornLikitDisplay', fontPath);
              _context.next = 4;
              return font.load();

            case 4:
              _this2.img = new Image();
              _this2.img.src = "/images/drlucky/zodiac-".concat(_this2.type, ".png");
              _context.next = 8;
              return _this2.img.decode();

            case 8:
              _this2.draw(_this2.$refs.canvas);

              if (_this2.showAscendant) {
                _this2.$emit('resend-email');
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    draw: function draw(canvas, jpg) {
      var _this3 = this;

      canvas.width = 600 * this.resizeRatio;
      canvas.height = 600 * this.resizeRatio;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = jpg ? '#fff' : '#ffffff00';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#4F4F4F';
      this.stars.forEach(function (star, textIndex) {
        var len = star.length - 1;
        ctx.font = "".concat(_this3.fontSize[len] * _this3.resizeRatio, "px ChulabhornLikitDisplay");
        star.forEach(function (letter, letterIndex) {
          var e = _this3.positions[len][textIndex][letterIndex];
          ctx.fillText(letter, e[0] * _this3.resizeRatio, e[1] * _this3.resizeRatio);
        });
      });
    },
    getBase64: function getBase64() {
      this.draw(this.$refs.jpegCanvas, true);
      return this.$refs.jpegCanvas.toDataURL('image/jpeg', 0.95);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".zodiac[data-v-ac4247b2] {\n  width: 100%;\n  max-width: 340px;\n  margin: 0 auto;\n  font-family: \"ChulabhornLikitDisplay\";\n}\n.zodiac canvas[data-v-ac4247b2] {\n  width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "zodiac" }, [
    _c("canvas", { ref: "canvas" }),
    _vm._v(" "),
    _c("canvas", { ref: "jpegCanvas", attrs: { hidden: "" } }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/zodiac.vue":
/*!********************************************!*\
  !*** ./resources/js/components/zodiac.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zodiac.vue?vue&type=template&id=ac4247b2&scoped=true& */ "./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true&");
/* harmony import */ var _zodiac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zodiac.vue?vue&type=script&lang=js& */ "./resources/js/components/zodiac.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& */ "./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _zodiac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ac4247b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/zodiac.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/zodiac.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/zodiac.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./zodiac.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=style&index=0&id=ac4247b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_style_index_0_id_ac4247b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./zodiac.vue?vue&type=template&id=ac4247b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/zodiac.vue?vue&type=template&id=ac4247b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_zodiac_vue_vue_type_template_id_ac4247b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);