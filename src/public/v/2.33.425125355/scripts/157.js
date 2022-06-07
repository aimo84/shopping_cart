(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/pre2post/success/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/pre2post/success/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: Object,
    loading: Boolean
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_4__,
      loaded: false
    };
  },
  computed: {
    order: function order() {
      return this.$store.state.placeorder.pre2postOrder;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var key;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.$emit('loading', true);

              key = _this.$route.params.secure_key;
              _context.next = 5;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_5__["FETCH_PRE2POST_PLACEORDER"], key);

            case 5:
              if (_this.order.is_pass) {
                _context.next = 7;
                break;
              }

              throw new Error();

            case 7:
              window.addEventListener('beforeprint', _this.setPrint);
              window.addEventListener('afterprint', _this.removePrint);
              _this.data.listing_loaded = false;
              _this.data.verify_passed = false;
              _this.data.ekyc_passed = false;
              _this.loaded = true;

              _this.$emit('loading', false);

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _this.$router.push({
                name: 'pre2post-verify'
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('beforeprint', this.setPrint);
    window.removeEventListener('afterprint', this.removePrint);
  },
  methods: {
    print: function print() {
      window.print();
    },
    setPrint: function setPrint() {
      document.body.setAttribute('print', '');
    },
    removePrint: function removePrint() {
      document.body.removeAttribute('print');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-container[data-v-1fbeea6f] {\n  font-family: \"TrueMedium\";\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 8px;\n  padding-bottom: 48px;\n  margin-top: 24px;\n}\n.page-container .inner-page-container[data-v-1fbeea6f] {\n  max-width: 726px;\n  margin: auto;\n}\n.success-container[data-v-1fbeea6f] {\n  text-align: center;\n  font-size: 26px;\n  line-height: 28px;\n  padding: 36px 16px;\n  width: 100%;\n  border-bottom: 1px dashed #ccc;\n}\n.success-container .success-icon[data-v-1fbeea6f] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-container .success-icon svg[data-v-1fbeea6f] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.success-container .success-message[data-v-1fbeea6f] {\n  color: #000;\n  font-size: 42px;\n  line-height: 48px;\n  margin: 24px 0 8px 0;\n  font-family: \"TrueBold\";\n}\n.success-container .order-id[data-v-1fbeea6f] {\n  color: #212121;\n  font-size: 40px;\n  line-height: 40px;\n  font-family: \"TrueBold\";\n  margin-bottom: 8px;\n}\n.pre-to-post[data-v-1fbeea6f] {\n  position: relative;\n}\n.pre-to-post .pre-to-post-download[data-v-1fbeea6f] {\n  position: absolute;\n  max-width: 480px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n.pre-to-post .pre-to-post-download .button[data-v-1fbeea6f] {\n  cursor: pointer;\n  width: 50%;\n  height: 10%;\n  position: absolute;\n  bottom: 8.5%;\n  left: 25%;\n}\n.pre-to-post img[data-v-1fbeea6f] {\n  max-width: 480px;\n  display: block;\n  margin: 24px auto;\n  width: 100%;\n}\n.button-container[data-v-1fbeea6f] {\n  margin-top: 32px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button-container span[data-v-1fbeea6f] {\n  display: block;\n  margin: 0 8px;\n}\n.button-container .back[data-v-1fbeea6f] {\n  background-color: #666;\n}\n@media screen and (max-width: 860px) {\n.page-container[data-v-1fbeea6f] {\n    padding-bottom: 36px;\n}\n.page-container .inner-page-container[data-v-1fbeea6f] {\n    padding: 0 16px;\n}\n.success-container[data-v-1fbeea6f] {\n    padding: 24px 0;\n}\n.success-container .success-icon[data-v-1fbeea6f] {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 16px;\n}\n.success-container .success-icon svg[data-v-1fbeea6f] {\n    width: 24px;\n    height: 24px;\n}\n.success-container .success-message[data-v-1fbeea6f] {\n    margin-top: 0;\n}\n.button-container[data-v-1fbeea6f] {\n    flex-direction: column-reverse;\n}\n.button-container > *[data-v-1fbeea6f],\n.button-container .button[data-v-1fbeea6f] {\n    width: 100%;\n}\n.button-container span ~ span[data-v-1fbeea6f] {\n    margin-bottom: 20px;\n}\n}\n@media print {\nbody[print] .page-container[data-v-1fbeea6f] {\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\nbody[print] .success-icon[data-v-1fbeea6f],\nbody[print] .button-container[data-v-1fbeea6f] {\n    display: none;\n}\nbody[print] .success-container[data-v-1fbeea6f] {\n    padding-top: 0;\n}\nbody[print] .success-container .success-message[data-v-1fbeea6f] {\n    margin-top: 0;\n}\nbody[print] .print-break[data-v-1fbeea6f] {\n    page-break-after: always;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true& ***!
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
  return _vm.loaded
    ? _c("div", { staticClass: "page-container" }, [
        _c("div", { staticClass: "inner-page-container" }, [
          _c("div", { staticClass: "success-container" }, [
            _c("div", { staticClass: "success-icon" }, [
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "success-message" }, [
              _vm._v(_vm._s(_vm.Locale.title[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(_vm._s(_vm.Locale.order_number[_vm.$i18n.locale])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-id" }, [
              _vm._v(_vm._s(_vm.$route.params.secure_key)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "success-description" }, [
              _vm._v(_vm._s(_vm.Locale.subtitle[_vm.$i18n.locale])),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pre-to-post" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("picture", [
              _c("source", {
                attrs: {
                  srcset: "/images/success/pre-to-post-2-success-en.webp",
                  type: "image/webp",
                },
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "/images/success/pre-to-post-2-success-en.png" },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "button-container" }, [
            _c("span", [
              _c(
                "a",
                { attrs: { href: "/online-store" } },
                [
                  _c(
                    "button-element",
                    {
                      staticClass: "button back",
                      attrs: { id: "back_homepage" },
                    },
                    [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "span",
              [
                _c(
                  "button-element",
                  { staticClass: "button", on: { click: _vm.print } },
                  [_vm._v(_vm._s(_vm.Locale.print[_vm.$i18n.locale]))]
                ),
              ],
              1
            ),
          ]),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pre-to-post-download" }, [
      _c("a", {
        staticClass: "button",
        attrs: { href: "https://iservice.truecorp.co.th/", target: "_blank" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/pre2post/success/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/pre2post/success/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1fbeea6f&scoped=true& */ "./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& */ "./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1fbeea6f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pre2post/success/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/success/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1fbeea6f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pre2post/success/index.vue?vue&type=template&id=1fbeea6f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1fbeea6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/pre2post/success/locale.json":
/*!*********************************************************!*\
  !*** ./resources/js/pages/pre2post/success/locale.json ***!
  \*********************************************************/
/*! exports provided: title, subtitle, order_number, back, print, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"en\":\"All done!\",\"th\":\"All done!\"},\"subtitle\":{\"en\":\"Your switch to postpaid request has been received.\",\"th\":\"ทรูได้รับคำขอเปลี่ยนการใช้งานจากระบบเติมเงินมาเป็นรายเดือนของคุณเรียบร้อยแล้ว\"},\"order_number\":{\"en\":\"Order number:\",\"th\":\"หมายเลขการสั่งซื้อ:\"},\"back\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"print\":{\"th\":\"พิมพ์ออเดอร์\",\"en\":\"Print Order\"}}");

/***/ }),

/***/ "./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/pre2post/success/style.scss?vue&type=style&index=0&id=1fbeea6f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_1fbeea6f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);