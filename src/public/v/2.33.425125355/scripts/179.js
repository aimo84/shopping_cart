(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[179],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../nav */ "./resources/js/pages/profile/nav.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/profile/detail/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/profile/detail/content.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'nav-profile': _nav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      Content: _content_json__WEBPACK_IMPORTED_MODULE_1__
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.auth.profile.data;
    },
    displayName: function displayName() {
      var _this$user, _this$user2;

      return (_this$user = this.user) !== null && _this$user !== void 0 && _this$user.display_name ? (_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.display_name : '-';
    },
    sex: function sex() {
      var _this$user3, _this$user4;

      return (_this$user3 = this.user) !== null && _this$user3 !== void 0 && _this$user3.sex ? (_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.sex : '-';
    },
    birthday: function birthday() {
      var _this$user5, _this$user6;

      return (_this$user5 = this.user) !== null && _this$user5 !== void 0 && _this$user5.birthday ? (_this$user6 = this.user) === null || _this$user6 === void 0 ? void 0 : _this$user6.birthday : '-';
    },
    email: function email() {
      var _this$user7, _this$user8;

      return (_this$user7 = this.user) !== null && _this$user7 !== void 0 && _this$user7.email ? (_this$user8 = this.user) === null || _this$user8 === void 0 ? void 0 : _this$user8.email : '-';
    },
    phone: function phone() {
      var _this$user9, _this$user10;

      return (_this$user9 = this.user) !== null && _this$user9 !== void 0 && _this$user9.phone ? (_this$user10 = this.user) === null || _this$user10 === void 0 ? void 0 : _this$user10.phone : '-';
    },
    avatar: function avatar() {
      var _this$user11, _this$user12;

      return ((_this$user11 = this.user) === null || _this$user11 === void 0 ? void 0 : _this$user11.avatar) + ((_this$user12 = this.user) === null || _this$user12 === void 0 ? void 0 : _this$user12.user_id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-2 mx-lg-5 py-3 row" },
    [
      _c("nav-profile"),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "font-bold h2 col-md-12" }, [
            _vm._v(_vm._s(_vm.Content.label.header[_vm.$i18n.locale])),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "group-overview col-md-12 py-3" }, [
            _c(
              "div",
              { staticClass: "px-0 d-none d-md-block margin-bottom-20" },
              [
                _c("div", { staticClass: "font-bold h4 mb-0" }, [
                  _vm._v(_vm._s(_vm.Content.label.title[_vm.$i18n.locale])),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "px-0 d-block d-md-none margin-bottom-20",
                attrs: { role: "button" },
                on: {
                  click: function ($event) {
                    return _vm.$router.push("/profile")
                  },
                },
              },
              [
                _c("div", { staticClass: "font-bold h4 mb-0" }, [
                  _c("img", {
                    staticStyle: { width: "30px" },
                    attrs: { src: "/images/icons/icon-left.png" },
                  }),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.Content.label.title[_vm.$i18n.locale]) +
                      "\n            "
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "box-user-display p-2 d-block d-md-none text-center",
              },
              [
                _c("img", {
                  staticClass: "rounded-circle w-25",
                  attrs: { src: _vm.avatar },
                }),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 col-12 rounded" }, [
              _c("div", { staticClass: "col-md-12 text-left" }, [
                _c("div", { staticClass: "row font-medium" }, [
                  _c("div", { staticClass: "row col-md-12 py-1" }, [
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-2 h5 font-bold" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.Content.label.displayName[_vm.$i18n.locale]
                          )
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-10 h5 font-medium" },
                      [_vm._v(_vm._s(_vm.displayName))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row col-md-12 py-1" }, [
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-2 h5 font-bold" },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.email[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-10 h5 font-medium" },
                      [_vm._v(_vm._s(_vm.email))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row col-md-12 py-1" }, [
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-2 h5 font-bold" },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.phone[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-10 h5 font-medium" },
                      [_vm._v(_vm._s(_vm.phone))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row col-md-12 py-1" }, [
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-2 h5 font-bold" },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.birthday[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-10 h5 font-medium" },
                      [_vm._v(_vm._s(_vm.birthday))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row col-md-12 py-1" }, [
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-2 h5 font-bold" },
                      [_vm._v(_vm._s(_vm.Content.label.sex[_vm.$i18n.locale]))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-blue col-md-10 h5 font-medium" },
                      [_vm._v(_vm._s(_vm.sex))]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/profile/detail/content.json":
/*!********************************************************!*\
  !*** ./resources/js/pages/profile/detail/content.json ***!
  \********************************************************/
/*! exports provided: label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"label\":{\"header\":{\"th\":\"ข้อมูลส่วนตัว\",\"en\":\"Profile\"},\"title\":{\"th\":\"จัดการบัญชีของคุณ\",\"en\":\"Manage your account\"},\"displayName\":{\"th\":\"ชื่อผู้ใช้\",\"en\":\"Name\"},\"phone\":{\"th\":\"เบอร์โทรศัพท์\",\"en\":\"Phone\"},\"email\":{\"th\":\"อีเมล\",\"en\":\"Email\"},\"birthday\":{\"th\":\"วันเกิด\",\"en\":\"Birthday\"},\"sex\":{\"th\":\"เพศ\",\"en\":\"Sex\"}}}");

/***/ }),

/***/ "./resources/js/pages/profile/detail/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/profile/detail/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=652bffba& */ "./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/detail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/detail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=652bffba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/detail/index.vue?vue&type=template&id=652bffba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_652bffba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);