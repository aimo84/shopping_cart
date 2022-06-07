(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav */ "./resources/js/pages/profile/nav.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/profile/tracking/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/profile/tracking/content.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'nav-profile': _nav__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user: [Object, Boolean]
  },
  data: function data() {
    return {
      data: {},
      orders: [],
      trackingId: '',
      selectedFilter: {
        'all': false,
        'recently': true,
        '001': false,
        '002|003|004|005': false,
        '100|101|102': false,
        '200': false,
        '301': false,
        '400|401': false
      },
      loading: false,
      haveOrder: false,
      page: 1,
      total: 0,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_2__
    };
  },
  computed: {
    selectedFilterKey: function selectedFilterKey() {
      var _this = this;

      return Object.keys(this.selectedFilter).find(function (key) {
        return _this.selectedFilter[key] === true;
      });
    }
  },
  watch: {
    user: function user() {
      this.getOrderHistory();
    }
  },
  mounted: function mounted() {
    var _this$$route$params;

    if (['001', '100|101|102', '200'].includes((_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.orderStatus)) {
      var _this$$route$params2, _this$$route$params3;

      document.getElementById((_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.orderStatus).scrollIntoView({
        block: 'start'
      });
      this.filterOrder((_this$$route$params3 = this.$route.params) === null || _this$$route$params3 === void 0 ? void 0 : _this$$route$params3.orderStatus);
    } else {
      this.getOrderHistory();
    }

    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll);
      this.onScroll();
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    getOrderHistory: function getOrderHistory() {
      var _this2 = this;

      var orderStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.user) {
        this.loading = true;
        this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_3__["ORDER_HISTORY"], {
          is_success: true,
          page: this.page,
          limit: 5,
          show_all: true,
          order_statuses_code: orderStatus
        }).then(function (data) {
          if (_this2.orders.length > 0) {
            _this2.orders = _this2.orders.concat(data.body.data);
          } else {
            _this2.orders = data.body.data;
          }

          _this2.total = data.body.total;
        })["catch"](function (e) {})["finally"](function (data) {
          _this2.loading = false;
          _this2.haveOrder = _this2.orders.length > 0 ? true : false;
        });
      }
    },
    filterOrder: function filterOrder(orderStatus) {
      if (!this.loading) {
        this.loading = true;
        this.orders = [];
        this.haveOrder = false;
        this.page = 1;

        for (var key in this.selectedFilter) {
          this.selectedFilter[key] = key === orderStatus;
        }

        orderStatus = orderStatus === 'all' || orderStatus === 'recently' ? '' : orderStatus;
        this.getOrderHistory(orderStatus);
      }
    },
    onScroll: function onScroll() {
      var ordersHeading = this.$refs["orders"];

      if (ordersHeading && this.orders.length > 0 && this.orders.length < this.total && !this.selectedFilter.recently) {
        var marginTopOrders = ordersHeading.getBoundingClientRect().top;

        if (marginTopOrders + ordersHeading.scrollHeight < 873 && !this.loading) {
          console.log('Start');
          this.loading = true;
          this.page++;
          var orderStatus = this.selectedFilterKey === 'all' || this.selectedFilterKey === 'recently' ? '' : this.selectedFilterKey;
          this.getOrderHistory(orderStatus);
        }
      }
    },
    convertDate: function convertDate(dateString) {
      var date = new Date(dateString);
      return this.$i18n.locale === 'th' ? "".concat(date.getDate(), " ").concat(date.toLocaleString('th-TH', {
        month: 'short'
      }), " ").concat(date.getFullYear()) : "".concat(date.getDay(), " ").concat(date.toLocaleString('default', {
        month: 'short'
      }), " ").concat(date.getFullYear());
    },
    checkOrderStatus: function checkOrderStatus(escrowProduct, statuses, orderStatus) {
      var status = false;

      if (statuses.includes(escrowProduct === null || escrowProduct === void 0 ? void 0 : escrowProduct.order_statuses_code)) {
        status = true;
      } else if (statuses.includes(orderStatus)) {
        status = true;
      }

      return status;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".border-bottom-danger[data-v-6095c56e] {\n  border-bottom: 3px solid #dc3545 !important;\n}\n.line-height-30[data-v-6095c56e] {\n  line-height: 30px;\n}\n@media (min-width: 576px) {\n.border-none[data-v-6095c56e] {\n    border-bottom: none !important;\n}\n}\n@media (max-width: 576px) {\n.box-filter-status[data-v-6095c56e] {\n    scrollbar-width: none;\n    flex-wrap: inherit;\n    overflow-x: scroll;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "mx-lg-5 py-3 row mx-0" },
    [
      _c("nav-profile"),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "font-bold h2 col-md-12 d-none d-md-block" },
            [_vm._v(_vm._s(_vm.Content.label.header[_vm.$i18n.locale]))]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-4 px-0 d-md-none",
              attrs: { role: "button" },
              on: {
                click: function ($event) {
                  return _vm.$router.push("/profile")
                },
              },
            },
            [
              _c("img", {
                staticStyle: { width: "30px" },
                attrs: { src: "/images/icons/icon-left.png" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "font-light h5 mb-0" }, [
                _vm._v(_vm._s(_vm.Content.label.header[_vm.$i18n.locale])),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              { staticClass: "row bg-white box-filter-status box-shadow-true" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter.recently,
                      "text-danger": _vm.selectedFilter.recently,
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("recently")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.Content.label.recentOrder[_vm.$i18n.locale]
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter["001"],
                      "text-danger": _vm.selectedFilter["001"],
                    },
                    attrs: { id: "001" },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("001")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.Content.label.waitingForPayment[
                              _vm.$i18n.locale
                            ]
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-75 col-5 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter["100|101|102"],
                      "text-danger": _vm.selectedFilter["100|101|102"],
                    },
                    attrs: { id: "100|101|102" },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("100|101|102")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.Content.label.waitingForShip[_vm.$i18n.locale]
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-5 col-5 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter["200"],
                      "text-danger": _vm.selectedFilter["200"],
                    },
                    attrs: { id: "200" },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("200")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.shipping[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter["301"],
                      "text-danger": _vm.selectedFilter["301"],
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("301")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.received[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-5 col-5 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter.all,
                      "text-danger": _vm.selectedFilter.all,
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("all")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.Content.label.orderHistory[_vm.$i18n.locale]
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1 col-3 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger":
                        _vm.selectedFilter["002|003|004|005"],
                      "text-danger": _vm.selectedFilter["002|003|004|005"],
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("002|003|004|005")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.cancel[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center padding-order-status col-md-1-75 col-5 font-bold h4 mb-0 py-2 status",
                    class: {
                      "border-bottom-danger": _vm.selectedFilter["400|401"],
                      "text-danger": _vm.selectedFilter["400|401"],
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.filterOrder("400|401")
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.Content.label.refund[_vm.$i18n.locale])
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { ref: "orders", staticClass: "row" },
              [
                _vm._l(_vm.orders, function (order) {
                  return _c(
                    "div",
                    {
                      key: order.secure_key,
                      staticClass: "col-12 mt-3 bg-white box-shadow-true",
                      class: {
                        "d-none": _vm.loading && _vm.haveOrder === false,
                      },
                    },
                    [
                      _c("div", { staticClass: "row py-3 border-bottom" }, [
                        _c("div", { staticClass: "col-7 col-md-7" }, [
                          _c("span", { staticClass: "font-light h5 mb-0" }, [
                            _vm._v(
                              _vm._s(_vm.Content.label.title[_vm.$i18n.locale])
                            ),
                          ]),
                          _c(
                            "span",
                            {
                              staticClass: "font-bold h5 mb-0",
                              attrs: { role: "button" },
                            },
                            [_vm._v(" " + _vm._s(order.secure_key))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-3 text-right d-none",
                            class:
                              order.order_product.length > 1
                                ? "d-md-none"
                                : "d-md-block",
                          },
                          [
                            _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["102", "200", "301"],
                              "001"
                            )
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "font-light h5 text-primary mb-0",
                                    on: {
                                      click: function ($event) {
                                        return _vm.$router.push({
                                          path:
                                            "/profile/tracking/" +
                                            order.secure_key,
                                          query: {
                                            productId:
                                              order.order_product[0]
                                                .escrow_product
                                                .order_product_id,
                                          },
                                        })
                                      },
                                    },
                                  },
                                  [
                                    _c("ins", { attrs: { role: "button" } }, [
                                      _c("img", {
                                        attrs: {
                                          src: "/images/icons/icon-car-blue.svg",
                                        },
                                      }),
                                      _vm._v(
                                        _vm._s(
                                          _vm.Content.label.orderTracking[
                                            _vm.$i18n.locale
                                          ]
                                        )
                                      ),
                                    ]),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _vm.checkOrderStatus(
                          order.order_product[0].escrow_product,
                          ["001"],
                          order.order_status.code
                        )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-waiting-payment h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.waitingForPayment[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["002"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-payment-fail h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.paymentFail[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["003"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-payment-expire h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.paymentExpire[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["004", "005"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-cancel h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.paymentCancel[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["301"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded h5 mb-0 text-white bg-true",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.received[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["400", "406"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.requestedRefund[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["401", "405"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund-success",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.refundSuccess[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["402"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.refundDeclined[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["100", "101", "102"]
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-warning h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.waitingForShip[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm.checkOrderStatus(
                              order.order_product[0].escrow_product,
                              ["200"],
                              order.order_status.code
                            )
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-5 col-md-2 text-center d-block",
                                class: {
                                  "d-md-none": order.order_product.length > 1,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-bold line-height-30 rounded bg-success h5 mb-0 text-white",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.shipping[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _vm._l(order.order_product, function (product, index) {
                        return _c(
                          "div",
                          {
                            key: product.id,
                            staticClass: "row border-bottom pt-2",
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "col-12",
                                class: {
                                  "d-none": index === 0,
                                  "d-md-block": index >= 0,
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-end" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-md-3 text-right d-none",
                                        class: {
                                          "d-md-block":
                                            order.order_product.length > 1,
                                        },
                                      },
                                      [
                                        _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["102", "200", "301"],
                                          "001"
                                        )
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "font-light h5 text-primary mb-0",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.$router.push({
                                                      path:
                                                        "/profile/tracking/" +
                                                        order.secure_key,
                                                      query: {
                                                        productId: product.id,
                                                      },
                                                    })
                                                  },
                                                },
                                              },
                                              [
                                                _c(
                                                  "ins",
                                                  { attrs: { role: "button" } },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src: "/images/icons/icon-car-blue.svg",
                                                      },
                                                    }),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.Content.label
                                                          .orderTracking[
                                                          _vm.$i18n.locale
                                                        ]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.checkOrderStatus(
                                      order.order_product[index].escrow_product,
                                      ["001"],
                                      order.order_status.code
                                    )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-waiting-payment h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .waitingForPayment[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["002"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-payment-fail h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .paymentFail[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["003"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-payment-expire h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .paymentExpire[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["004", "005"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-cancel h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .paymentCancel[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["301"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-true h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label.received[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["400", "406"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .requestedRefund[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["401", "405"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund-success",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .refundSuccess[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["402"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded h5 mb-0 text-white bg-refund",
                                                staticStyle: {
                                                  background: "#FF4500",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .refundDeclined[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["100", "101", "102"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-warning h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label
                                                      .waitingForShip[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm.checkOrderStatus(
                                          order.order_product[index]
                                            .escrow_product,
                                          ["200"],
                                          order.order_status.code
                                        )
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-5 col-md-2 text-center",
                                            class: {
                                              "d-none":
                                                order.order_product.length < 2,
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-bold line-height-30 rounded bg-success h5 mb-0 text-white",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.Content.label.shipping[
                                                      _vm.$i18n.locale
                                                    ]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-4 col-md-2 py-3" }, [
                              _c("img", {
                                staticClass: "w-100",
                                attrs: { src: product.image_url },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-8 col-md-10 py-3" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-12 col-md-6" }, [
                                  _c("span", { staticClass: "font-bold h4" }, [
                                    _vm._v(_vm._s(product.title)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 col-md-3" }, [
                                  _c("span", { staticClass: "font-light h4" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.label.quantity[
                                          _vm.$i18n.locale
                                        ]
                                      ) + ": "
                                    ),
                                    _c("span", { staticClass: "font-bold" }, [
                                      _vm._v(_vm._s(product.quantity)),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 col-md-3" }, [
                                  _c("span", { staticClass: "font-bold h4" }, [
                                    _vm._v(
                                      _vm._s(parseInt(product.final_price)) +
                                        ".-"
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _vm.checkOrderStatus(
                              product.escrow_product,
                              ["102", "200", "301"],
                              "001"
                            )
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 d-block d-md-none border-top py-2",
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/images/icons/icon-car-blue.svg",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-light h5 text-primary mb-0",
                                        on: {
                                          click: function ($event) {
                                            return _vm.$router.push({
                                              path:
                                                "/profile/tracking/" +
                                                order.secure_key,
                                              query: { productId: product.id },
                                            })
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "ins",
                                          { attrs: { role: "button" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.Content.label.orderTracking[
                                                  _vm.$i18n.locale
                                                ]
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.checkOrderStatus(
                              product.escrow_product,
                              ["102", "200", "301"],
                              "001"
                            )
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 d-block d-md-none border-top py-2",
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/images/icons/icon-car-gray.svg",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-light h5 color-blank mb-0",
                                      },
                                      [
                                        _c("ins", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.Content.label.orderTracking[
                                                _vm.$i18n.locale
                                              ]
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row border-bottom border-none" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-6 d-md-none font-light h5 mt-3",
                            },
                            [
                              _vm._v(
                                _vm._s(order.order_product.length) +
                                  " " +
                                  _vm._s(
                                    _vm.Content.label.piece[_vm.$i18n.locale]
                                  )
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6 col-md-12 text-right" },
                            [
                              _c("span", { staticClass: "font-light h5" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.Content.label.total[_vm.$i18n.locale]
                                  )
                                ),
                              ]),
                              _c(
                                "span",
                                { staticClass: "font-bold text-danger h1" },
                                [
                                  _vm._v(
                                    "  " + _vm._s(parseInt(order.total)) + ".-"
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row py-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-7 mt-auto text-center text-md-left",
                          },
                          [
                            order.order_product[0] &&
                            order.order_product[0].escrow_product &&
                            order.order_product[0].escrow_product
                              .order_statuses_code === "100"
                              ? _c("span", { staticClass: "font-light h5" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.Content.label.shippedBy[
                                        _vm.$i18n.locale
                                      ]
                                    ) +
                                      " " +
                                      _vm._s(
                                        _vm.convertDate(
                                          order.order_product[0].escrow_product
                                            .ship_expired_time
                                        )
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
                            staticClass:
                              "col-12 col-md-7 mt-auto text-center text-md-left",
                          },
                          [
                            order.order_product[0] &&
                            order.order_product[0].escrow_product &&
                            order.order_product[0].escrow_product
                              .order_statuses_code === "200"
                              ? _c("span", { staticClass: "font-light h5" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.Content.label.receivedBy[
                                        _vm.$i18n.locale
                                      ]
                                    ) +
                                      " " +
                                      _vm._s(
                                        _vm.convertDate(
                                          order.order_product[0].escrow_product
                                            .receive_expired_time
                                        )
                                      )
                                  ),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ]),
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-12 h-100 text-center py-5",
                    class: { "d-none": !_vm.loading },
                  },
                  [_vm._m(0)]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mt-3 bg-white col-12 text-center py-5",
                    class: { "d-none": _vm.loading || _vm.haveOrder === true },
                  },
                  [
                    _c("span", { staticClass: "font-light" }, [
                      _vm._v("ไม่พบรายการสินค้า"),
                    ]),
                  ]
                ),
              ],
              2
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "spinner-border", attrs: { role: "status" } },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/profile/tracking/content.json":
/*!**********************************************************!*\
  !*** ./resources/js/pages/profile/tracking/content.json ***!
  \**********************************************************/
/*! exports provided: label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"label\":{\"header\":{\"th\":\"คำสั่งซื้อของฉัน\",\"en\":\"My Orders\"},\"title\":{\"th\":\"เลขที่คำสั่งซื้อ\",\"en\":\"Order number\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"},\"recentOrder\":{\"th\":\"รายการล่าสุด\",\"en\":\"Recent Order\"},\"waitingForPayment\":{\"th\":\"ที่ต้องชำระเงิน\",\"en\":\"Waiting For Payment\"},\"waitingForShip\":{\"th\":\"กำลังเตรียมจัดส่ง\",\"en\":\"Preparing\"},\"shipping\":{\"th\":\"อยู่ระหว่างขนส่ง\",\"en\":\"Delivering\"},\"received\":{\"th\":\"ส่งสินค้าสำเร็จ\",\"en\":\"Delivered\"},\"orderHistory\":{\"th\":\"ประวัติการสั่งซื้อ\",\"en\":\"Order History\"},\"orderTracking\":{\"th\":\"ติดตามสถานะการจัดส่ง\",\"en\":\"Order Tracking\"},\"quantity\":{\"th\":\"จำนวน\",\"en\":\"Quantity\"},\"total\":{\"th\":\"ยอดรวม\",\"en\":\"Total\"},\"noContent\":{\"th\":\"ไม่มีรายการที่ชอบ\",\"en\":\"No Wish List\"},\"orderDetail\":{\"th\":\"รายละเอียดการจัดส่งสินค้า\",\"en\":\"Order Tranking Detail\"},\"senderDetail\":{\"th\":\"ข้อมูลผู้จัดส่ง\",\"en\":\"Sender Detail\"},\"sender\":{\"th\":\"จัดส่งโดย\",\"en\":\"Sender\"},\"orderTrackingNo\":{\"th\":\"หมายเลขสินค้า\",\"en\":\"Tracking No.\"},\"receiverDetail\":{\"th\":\"ข้อมูลผู้รับ\",\"en\":\"Receiver Detail\"},\"preparePackage\":{\"th\":\"ผู้ส่งกำลังเตรียมพัสดุ\",\"en\":\"Preparing\"},\"sendingPackage\":{\"th\":\"พัสดุถูกส่งมอบให้บริษัทขนส่งเรียบร้อยแล้ว\",\"en\":\"Sent to courier\"},\"shippedBy\":{\"th\":\"จัดส่งสินค้าภายในวันที่\",\"en\":\"Shipped By\"},\"receivedBy\":{\"th\":\"ได้รับสินค้าภายในวันที่\",\"en\":\"Received By\"},\"piece\":{\"th\":\"ชิ้น\",\"en\":\"Piece\"},\"paymentFail\":{\"th\":\"ชำระเงินไม่สำเร็จ\",\"en\":\"Incomplete Payment\"},\"paymentExpire\":{\"th\":\"หมดเวลาการชำระเงิน\",\"en\":\"Payment Expired\"},\"paymentCancel\":{\"th\":\"ยกเลิกสินค้า\",\"en\":\"Cancel Order\"},\"requestedRefund\":{\"th\":\"ขอคืนเงิน\",\"en\":\"Refund\"},\"refundSuccess\":{\"th\":\"ขอคืนเงินสำเร็จ\",\"en\":\"Refunded\"},\"refundDeclined\":{\"en\":\"Refund Declined\",\"th\":\"ขอคืนเงินไม่สำเร็จ\"},\"partialAcceptRefund\":{\"en\":\"Partial Refunded\",\"th\":\"ขอคืนเงินสำเร็จบางรายการ\"},\"acceptRefundAndWaiting\":{\"th\":\"ยอมรับการขอเงินคืนรอการตรวจสอบจากคลัง\",\"en\":\"Warehouse confirming\"},\"cancel\":{\"en\":\"Cancelled\",\"th\":\"ยกเลิกแล้ว\"},\"refund\":{\"th\":\"การคืนเงิน/คืนสินค้า\",\"en\":\"Refund\"},\"orderTrackingNoMobile\":{\"th\":\"หมายเลขติดตามพัสดุ\",\"en\":\"Tracking No.\"}}}");

/***/ }),

/***/ "./resources/js/pages/profile/tracking/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/profile/tracking/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6095c56e&scoped=true& */ "./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& */ "./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6095c56e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/tracking/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=style&index=0&id=6095c56e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095c56e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6095c56e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/tracking/index.vue?vue&type=template&id=6095c56e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6095c56e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);