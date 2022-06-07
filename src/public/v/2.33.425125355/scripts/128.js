(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _store_postpaid_package__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/postpaid/package */ "./resources/js/pages/store/postpaid/package.vue");
/* harmony import */ var _store_postpaid_search_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/postpaid/search-number */ "./resources/js/pages/store/postpaid/search-number.vue");
/* harmony import */ var _store_postpaid_search_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/postpaid/search-result */ "./resources/js/pages/store/postpaid/search-result.vue");
/* harmony import */ var _store_postpaid_hold_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/postpaid/hold-dialog */ "./resources/js/pages/store/postpaid/hold-dialog.vue");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_5__["default"],
    'package-element': _store_postpaid_package__WEBPACK_IMPORTED_MODULE_6__["default"],
    'hold-dialog': _store_postpaid_hold_dialog__WEBPACK_IMPORTED_MODULE_9__["default"],
    'search-number': _store_postpaid_search_number__WEBPACK_IMPORTED_MODULE_7__["default"],
    'search-result': _store_postpaid_search_result__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              next( /*#__PURE__*/function () {
                var _ref = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee(vm) {
                  return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          vm.loading = true;
                          _context.next = 4;
                          return vm.fetchNasCode();

                        case 4:
                          _context.next = 6;
                          return vm.fetchProduct();

                        case 6:
                          _context.next = 8;
                          return vm.fetchPostpaid();

                        case 8:
                          vm.nas = _context.sent;
                          _context.next = 11;
                          return vm.fetchPackage(vm.nas);

                        case 11:
                          _context.next = 13;
                          return vm.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["FETCH_HOROSCOPES"]);

                        case 13:
                          _context.next = 15;
                          return vm.fetchPricePlan();

                        case 15:
                          _context.next = 17;
                          return vm.numberUpdated({
                            favorite: [],
                            dislike: [],
                            sum: '00',
                            page: 1
                          });

                        case 17:
                          Object(_utils_addon__WEBPACK_IMPORTED_MODULE_12__["loggerAddon"])({
                            event: 'Visit Sim',
                            status: 'search number',
                            productId: vm.$route.params.id,
                            matcode: vm.nas
                          });
                          vm.loading = false;
                          _context.next = 24;
                          break;

                        case 21:
                          _context.prev = 21;
                          _context.t0 = _context["catch"](0);
                          vm.$router.push('/');

                        case 24:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 21]]);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    return {
      loading: true,
      packages: {},
      pricePlans: [],
      demo: true,
      strDemo: 'demo',
      loadingResult: false,
      result: [],
      favorite: [],
      nas: '',
      propo: '',
      params: {},
      isLast: false,
      page: 1,
      nasCode: String
    };
  },
  computed: {
    product: function product() {
      var _this$$store$state$pr;

      return (_this$$store$state$pr = this.$store.state.products.productInfo.data) === null || _this$$store$state$pr === void 0 ? void 0 : _this$$store$state$pr.record;
    },
    isMNPBundleRoute: function isMNPBundleRoute() {
      return this.$route.name === 'online-store-mnp-bundle';
    },
    isMnpBundle: function isMnpBundle() {
      var _this = this;

      var validRoute = this.$route.name === 'online-store-mnp-bundle';
      var isMnpBundling = this.product.is_mnp_bundling;
      var inventory = this.product.inventories.find(function (inventory) {
        return inventory.id.toString() === _this.$route.params.inventory;
      });
      var bundle = this.product.bundles.find(function (bundle) {
        return bundle.id === _this.$route.params.bundle;
      });
      return validRoute && isMnpBundling && inventory && bundle && bundle.is_typhoon;
    },
    mnpBundleNas: function mnpBundleNas() {
      var _this2 = this;

      var bundle = this.product.bundles.find(function (bundle) {
        return bundle.id === _this2.$route.params.bundle;
      });
      return bundle.proposition_mobile[0].nas_code;
    }
  },
  methods: {
    fetchNasCode: function fetchNasCode() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
        var paramsData;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                paramsData = {
                  campCode: _this3.$route.query.campId,
                  productId: window.clm_preview.TMVH_SIM
                };

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["GET_BENEFIT_ON_TOP_DEMO"], paramsData).then(function (data) {
                  _this3.nasCode = data.nasCodeList[0];
                  var nasCode = _this3.nasCode;
                  var newquery = {
                    campId: _this3.$route.query.campId,
                    productid: window.clm_preview.TMVH_SIM,
                    nas_code: nasCode
                  };
                  var newurl = "".concat(window.location.origin).concat(window.location.pathname, "?").concat(qs__WEBPACK_IMPORTED_MODULE_10___default.a.stringify(newquery));
                  window.history.replaceState({
                    path: newurl
                  }, '', newurl);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    trackAnalytics: function trackAnalytics(action, e) {
      var label = '';
      window.dataLayer = window.dataLayer || [];
      if (action === 'select_number_failed') label = 'invalid_number';

      if (action === 'select_number') {
        var regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/;
        label = e.replace(regex, '$1-$2-$3');
      }

      window.dataLayer.push({
        event: 'track_event',
        event_category: 'search_mobile_number',
        event_action: action,
        event_label: label
      });
    },
    loadMore: function loadMore() {
      this.numberUpdated({
        favorite: this.params.favorite,
        dislike: this.params.dislike,
        sum: this.params.sum,
        page: this.params.page + 1
      });
    },
    numberUpdated: function numberUpdated(value) {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
        var nas, data, params, results;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (value.page === 1) {
                  _this4.result = [];
                  _this4.isLast = false;
                }

                _this4.params = value;
                _this4.loadingResult = true;
                nas = _this4.nas;
                if (_this4.product.product_type === 'device_bundle_new_customer') nas = _this4.propo;
                data = {
                  section: 'wemall',
                  sim_type: _this4.isInstantSimPrepaid || _this4.isPrepaid ? 'prepaid' : 'postpaid',
                  nas_code: nas,
                  filter_likes: value.favorite,
                  filter_dislikes: value.dislike,
                  limit: document.body.clientWidth > 860 ? 36 : 10,
                  page: value.page,
                  token: _this4.$route.query.token,
                  product_id: _this4.$route.params.id
                };
                if (value.sum !== '00') data.filter_sum = value.sum;
                if (value.page) _this4.page = value.page;
                params = qs__WEBPACK_IMPORTED_MODULE_10___default.a.stringify(data, {
                  arrayFormat: 'indices'
                });
                _context4.next = 11;
                return _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["SEARCH_NUMBER"], {
                  params: params,
                  headers: {
                    'tmvh-token': _this4.$route.query.token
                  }
                });

              case 11:
                results = _context4.sent;

                if (results.status_code === 0) {
                  _this4.result = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_this4.result), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(results.data.record));
                  if (results.data.record.length === 0) _this4.isLast = true;
                }

                _this4.favorite = JSON.parse(JSON.stringify(value.favorite));
                _this4.loadingResult = false;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchPricePlan: function fetchPricePlan() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(_this5.product.product_type === 'device_bundle_new_customer')) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 3;
                return _this5.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["FETCH_PRICE_PLAN"], {
                  nas_code: _this5.nas,
                  bundle_propo_code: _this5.propo
                });

              case 3:
                data = _context5.sent;
                _this5.pricePlans = data.data.record;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fetchProduct: function fetchProduct() {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee6() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this6.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["FETCH_PRODUCT_INFO"], {
                  id: window.clm_preview.TMVH_SIM,
                  tmvhAuth: _this6.$route.query.token,
                  type: 'sim'
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    fetchPostpaid: function fetchPostpaid() {
      var _this7 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee7() {
        var id, params, packages, nas;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = window.clm_preview.TMVH_SIM.replace(/\D/g, '');

                if (!_this7.nasCode) {
                  _context7.next = 8;
                  break;
                }

                params = qs__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                  section: 'wemall',
                  page: 1,
                  sim_type: 'all',
                  product_id: id
                }, {
                  arrayFormat: 'brackets'
                });
                _context7.next = 5;
                return _this7.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["FETCH_PACKAGES"], params);

              case 5:
                packages = _context7.sent;
                nas = packages.data.record.map(function (item) {
                  return item.nas_code;
                });
                return _context7.abrupt("return", _this7.nasCode);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    fetchPackage: function fetchPackage(id) {
      var _this8 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee8() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["FETCH_PACKAGE"], id);

              case 2:
                data = _context8.sent;
                _this8.packages = data.record[0];

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    holdNumber: function holdNumber(id, e) {
      var _this9 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee9() {
        var nas, data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _this9.loading = true;

                _this9.trackAnalytics('select_number', id);

                nas = _this9.nasCode || _this9.$route.params.nas;
                if (_this9.isLuckyHome) nas = e.product_info.propo_code;
                _context9.next = 7;
                return _this9.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_11__["HOLD_NUMBER"], {
                  id: id,
                  nas_code: nas
                });

              case 7:
                data = _context9.sent;
                window.dispatchEvent(new Event('check-postpaid'));

                if (data.data.mobile) {
                  window.scrollTo(0, 0);

                  _this9.$router.push({
                    name: 'online-store-postpaid-verify',
                    params: {
                      id: window.clm_preview.TMVH_SIM,
                      nas: _this9.nas,
                      number: data.data.mobile,
                      demo: _this9.demo
                    },
                    query: Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this9.$route.query), {}, {
                      rc: _this9.$route.query.rc,
                      demo: _this9.strDemo
                    })
                  });
                } else {
                  _this9.loading = false;
                }

                _context9.next = 16;
                break;

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](0);

                _this9.trackAnalytics('select_number_failed');

                _this9.$refs.dialog.open(id);

              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 12]]);
      }))();
    },
    onDialogClose: function onDialogClose() {
      var _this10 = this;

      this.loading = false;
      this.$nextTick(function () {
        _this10.$refs.searchNumber.setValue(_this10.params);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-result[data-v-43a2336f] {\n  background-color: #eeeff3;\n  padding: 24px 24px 64px;\n  text-align: center;\n  font-size: 22px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("hold-dialog", {
        ref: "dialog",
        on: {
          "on-close": function ($event) {
            return _vm.onDialogClose()
          },
        },
      }),
      _vm._v(" "),
      _vm.loading
        ? _c("loading-element")
        : [
            _c("package-element", {
              attrs: {
                packages: _vm.packages,
                product: _vm.product,
                "price-plans": _vm.pricePlans,
                demo: _vm.demo,
              },
            }),
            _vm._v(" "),
            _c("search-number", {
              ref: "searchNumber",
              attrs: { loadingResult: _vm.loadingResult },
              on: { update: _vm.numberUpdated },
            }),
            _vm._v(" "),
            _c("search-result", {
              attrs: {
                result: _vm.result,
                favorite: _vm.favorite,
                packages: _vm.packages,
                loading: _vm.loadingResult,
                "is-last": _vm.isLast,
                product: _vm.product,
                "price-plans": _vm.pricePlans,
              },
              on: { "load-more": _vm.loadMore },
            }),
            _vm._v(" "),
            _vm.loadingResult
              ? _c("div", { staticClass: "loading-result" }, [
                  _vm._v("Loading ..."),
                ])
              : _vm._e(),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/preview/tmvhsim/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/preview/tmvhsim/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=43a2336f&scoped=true& */ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& */ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43a2336f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/preview/tmvhsim/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=style&index=0&id=43a2336f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43a2336f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=43a2336f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/tmvhsim/index.vue?vue&type=template&id=43a2336f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_43a2336f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);