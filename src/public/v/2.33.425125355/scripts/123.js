(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json", 1);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    result: Object,
    verifyForm: Object,
    simMeta: Object
  },
  data: function data() {
    return {
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_7__,
      status: true,
      showOtpError: false,
      products: {},
      config: {},
      failedLists: [],
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
      var error;
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this.loading = true;
              _context.next = 4;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["FETCH_VERIFY_CONFIG"]);

            case 4:
              _this.config = _context.sent;
              _context.next = 7;
              return _this.fetchProducts();

            case 7:
              error = _this.result.error_message;
              _this.failedLists = _this.verifyForm.product_id_list.filter(function (n) {
                return !_this.result.product_id_list_pass.includes(n);
              });

              if (error && error.en) {
                if (error.en === 'not pass because of otp check') {
                  _this.status = false;
                  _this.showOtpError = true;
                } else if (_this.result.product_id_list_pass.length === 0) {
                  _this.status = false;
                }
              }

              _this.loading = false;
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log('error', _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }))();
  },
  methods: {
    checkAllowAddCart: function checkAllowAddCart(id) {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
        var productStatusData, cartid, result, hash, product, types;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                productStatusData = {
                  product_id: id
                };
                cartid = window.localStorage.getItem('cart-id');
                if (cartid) productStatusData.hash = cartid;
                _context2.next = 5;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["FETCH_PRODUCT_STATUS"], productStatusData);

              case 5:
                result = _context2.sent;

                if (!(result.data.allow_addcart.shop === false)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", {
                  id: id,
                  status: false
                });

              case 8:
                hash = result.data.hash;
                if (hash) window.localStorage.setItem('cart-id', hash);
                product = _this2.products[id];
                types = {
                  trueidtv: 'bdbc',
                  postpaid: 'sim_only',
                  prepaid: 'product'
                };
                return _context2.abrupt("return", {
                  id: id,
                  status: result.data.allow_addcart[types[product.type]]
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updatePrivilege: function updatePrivilege() {
      var _this3 = this;

      if (this.result.privilege_placeorder) {
        var key = 'privilege-placeorder';
        var privileges = JSON.parse(localStorage.getItem(key)) || [];
        if (!Array.isArray(privileges)) privileges = [];
        var privilege = privileges.filter(function (item) {
          return !_this3.result.product_id_list_pass.includes(item.product_id);
        });

        if (this.result.privilege_placeorder[0]) {
          this.result.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000;
        }

        localStorage.setItem(key, JSON.stringify([].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.result.privilege_placeorder), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(privilege))));
      }
    },
    setEkyc: function setEkyc(ekyc, id) {
      var key = 'postpaid-ekyc-data';
      var data = JSON.parse(localStorage.getItem(key)) || {};
      if (Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data) !== 'object') data = {};
      data[id] = ekyc;
      localStorage.setItem(key, JSON.stringify(data));
    },
    back: function back() {
      this.$parent.goTo('address');
    },
    next: function next() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
        var cart, promises, results, addCartError, _loop, i;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.loading = true;
                cart = Object.keys(_this4.products).map(function (id) {
                  var product = _this4.products[id];

                  if (_this4.result.product_id_list_pass.includes(product.id)) {
                    var data = {
                      product_id: product.id,
                      inventory_id: product.inventory_id,
                      store_id: product.store_id,
                      section: product.section,
                      quantity: 1,
                      channel: 'tmh-website'
                    };

                    if (product.type === 'postpaid') {
                      var meta = JSON.parse(JSON.stringify(_this4.simMeta));

                      _this4.setEkyc(meta.ekyc, product.id);

                      delete meta.ekyc;
                      data.sim_meta = [meta];
                    }

                    return data;
                  }
                }).filter(function (item) {
                  return item;
                });
                promises = [];
                cart.forEach(function (e) {
                  return promises.push(_this4.checkAllowAddCart(e.product_id));
                });
                _context3.next = 6;
                return Promise.all(promises);

              case 6:
                results = _context3.sent;
                addCartError = false;

                _loop = function _loop(i) {
                  if (!results[i].status) {
                    var index = cart.findIndex(function (e) {
                      return e.product_id === results[i].id;
                    });
                    cart.splice(index, 1);
                    addCartError = true;
                  }
                };

                for (i = 0; i < results.length; i++) {
                  _loop(i);
                }

                if (!(cart.length === 0 && addCartError)) {
                  _context3.next = 13;
                  break;
                }

                _this4.$router.push('/cart?error=012');

                return _context3.abrupt("return");

              case 13:
                _this4.updatePrivilege();

                _this4.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["UPDATE_POSTPAID_CART"], {
                  data: cart
                }).then(function (result) {
                  localStorage.removeItem('verify-form');
                  localStorage.removeItem('verify-result');

                  if (addCartError) {
                    _this4.$router.push("/cart?id=".concat(result.cart_hash, "&error=012"));
                  } else {
                    _this4.$router.push("/cart?id=".concat(result.cart_hash));
                  }
                })["catch"](function () {
                  _this4.loading = false;
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchProducts: function fetchProducts() {
      var _this5 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
        var product, item;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().keys(_this5.config.verify);

              case 1:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 9;
                  break;
                }

                product = _context4.t1.value;
                item = _this5.config.verify[product];

                if (!_this5.verifyForm.product_id_list.includes(item.id)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return _this5.fetchProduct(item);

              case 7:
                _context4.next = 1;
                break;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchProduct: function fetchProduct(product) {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
        var data, item;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["FETCH_PRODUCT_INFO"], {
                  id: product.id,
                  tmvhAuth: _this6.$route.query.token
                });

              case 2:
                data = _context5.sent;
                item = data.data.record;
                _this6.products[product.id] = {
                  id: product.id,
                  type: product.type,
                  title: item.title.th,
                  price: parseFloat(item.price),
                  image: item.images[0].url,
                  inventory_id: item.inventories[0].id,
                  section: item.section,
                  store_id: item.store_id
                };

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result-container[data-v-034fbe64] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1100px;\n  margin: 50px auto;\n  background-color: #fff;\n  padding: 76px 24px 50px 24px;\n  border-radius: 8px;\n}\n.result-container.loading[data-v-034fbe64] {\n  padding: 160px 24px;\n}\n.result-container.loading .checking-icon svg[data-v-034fbe64] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 50px;\n  -webkit-animation: loading-data-v-034fbe64 2s linear infinite;\n          animation: loading-data-v-034fbe64 2s linear infinite;\n  fill: #ff0000;\n}\n.result-container.loading .checking-label[data-v-034fbe64] {\n  color: #000;\n  font-size: 30px;\n  line-height: 30px;\n}\n.result-container .icon[data-v-034fbe64] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  margin-bottom: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-container .icon svg[data-v-034fbe64] {\n  fill: #fff;\n}\n.result-container .icon.success[data-v-034fbe64] {\n  background-color: #54c74c;\n  box-shadow: 1px 1px 0 #1f9716;\n}\n.result-container .icon.failed[data-v-034fbe64] {\n  background-color: #ff0000;\n  box-shadow: 1px 1px 0 #8e0000;\n}\n.result-container .result-title[data-v-034fbe64] {\n  font-size: 40px;\n  line-height: 30px;\n  font-family: \"TrueBold\";\n  text-align: center;\n}\n.result-container .result-title.success[data-v-034fbe64] {\n  color: #54c74c;\n}\n.result-container .result-title.failed[data-v-034fbe64] {\n  color: #ff0000;\n}\n.result-container .privilege-container[data-v-034fbe64] {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: center;\n  margin: 15px auto;\n}\n.result-container .privilege-container .privilege-label[data-v-034fbe64] {\n  color: #4a4a4a;\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 4px;\n}\n.result-container .privilege-container .privilege-items[data-v-034fbe64] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  line-height: 30px;\n  color: #000;\n}\n.result-container .privilege-container .privilege-items .privilege-item[data-v-034fbe64] {\n  margin-bottom: 4px;\n}\n.result-container .otp-message[data-v-034fbe64] {\n  font-size: 24px;\n  max-width: 400px;\n  margin: 36px auto 0;\n  text-align: center;\n  line-height: 24px;\n  color: red;\n}\n.result-container .result-warning[data-v-034fbe64] {\n  display: flex;\n  max-width: 396px;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n.result-container .result-warning.margin-top[data-v-034fbe64] {\n  margin-top: 24px;\n}\n.result-container .result-warning .warning-icon[data-v-034fbe64] {\n  fill: #ff0000;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  margin-bottom: 6px;\n}\n.result-container .result-warning .warning-message[data-v-034fbe64] {\n  color: #ff0000;\n  font-size: 20px;\n  line-height: 20px;\n}\n.result-container .result-message[data-v-034fbe64] {\n  margin-top: 16px;\n  font-size: 24px;\n  line-height: 28px;\n  max-width: 620px;\n  text-align: center;\n  color: #000;\n}\n.result-container .result-message span[data-v-034fbe64] {\n  font-family: \"TrueBold\";\n}\n.result-container .result-button-container[data-v-034fbe64] {\n  margin-top: 44px;\n  display: flex;\n}\n.result-container .result-button-container .button[data-v-034fbe64] {\n  background-color: #ff0000;\n}\n.result-container .result-button-container .button.back[data-v-034fbe64] {\n  background-color: #666;\n}\n.result-container .result-button-container .button.next[data-v-034fbe64] {\n  margin-left: 20px;\n}\n@media screen and (max-width: 1148px) {\n.page-container[data-v-034fbe64] {\n    padding: 24px 0;\n}\n.result-container[data-v-034fbe64] {\n    margin: 0 24px;\n}\n}\n@media screen and (max-width: 640px) {\n.result-container[data-v-034fbe64] {\n    padding: 30px 24px 50px 24px;\n}\n.result-container .icon[data-v-034fbe64] {\n    margin-bottom: 16px;\n}\n.result-container .result-button-container[data-v-034fbe64] {\n    flex-direction: column-reverse;\n}\n.result-container .result-button-container .button.back[data-v-034fbe64] {\n    margin-top: 12px;\n}\n.result-container .result-button-container .button.next[data-v-034fbe64] {\n    margin-left: 0;\n    margin-bottom: 12px;\n}\n}\n@-webkit-keyframes loading-data-v-034fbe64 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-034fbe64 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-container" }, [
    _vm.loading
      ? _c("div", { staticClass: "result-container loading" }, [
          _c("div", { staticClass: "checking-icon" }, [
            _c(
              "svg",
              {
                attrs: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  width: "512",
                  height: "512",
                  viewBox: "0 0 512 512",
                },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z",
                  },
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "checking-label" }, [
            _vm._v(_vm._s(_vm.Locale.checking[_vm.$i18n.locale])),
          ]),
        ])
      : _c("div", { staticClass: "result-container" }, [
          _vm.status
            ? _c("div", { staticClass: "icon success" }, [
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
              ])
            : _c("div", { staticClass: "icon failed" }, [
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
                      attrs: { d: "M0 0h24v24H0V0z", fill: "none" },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        stroke: "#fff",
                        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
                      },
                    }),
                  ]
                ),
              ]),
          _vm._v(" "),
          _vm.status
            ? _c("div", { staticClass: "result-title success" }, [
                _vm._v(_vm._s(_vm.Locale.passedCheck[_vm.$i18n.locale])),
              ])
            : _c("div", { staticClass: "result-title failed" }, [
                _vm._v(_vm._s(_vm.result.message[_vm.$i18n.locale])),
              ]),
          _vm._v(" "),
          _vm.status
            ? _c("div", { staticClass: "privilege-container" }, [
                _c("div", { staticClass: "privilege-label" }, [
                  _vm._v(
                    _vm._s(_vm.Locale.privilegedCustomer[_vm.$i18n.locale])
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "privilege-items" },
                  _vm._l(_vm.products, function (product, key) {
                    return _c(
                      "div",
                      { key: key, staticClass: "privilege-item" },
                      [
                        _vm.result.product_id_list_pass.includes(product.id)
                          ? [_vm._v(_vm._s(product.title))]
                          : _vm._e(),
                      ],
                      2
                    )
                  }),
                  0
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.failedLists.length > 0
            ? _c(
                "div",
                {
                  staticClass: "result-warning",
                  class: { "margin-top": _vm.failedLists.length > 0 },
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "warning-icon",
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
                          d: "M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z",
                          opacity: "0",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "warning-message" },
                    [
                      _c("span", [
                        _vm._v(_vm._s(_vm.Locale.warning1[_vm.$i18n.locale])),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.failedLists, function (item, key) {
                        return [
                          _c(
                            "span",
                            {
                              key: key,
                              staticStyle: {
                                "margin-right": "-4px",
                                "white-space": "nowrap",
                              },
                            },
                            [_vm._v(_vm._s(_vm.products[item].title))]
                          ),
                          _vm._v(" "),
                          key === _vm.failedLists.length - 2
                            ? _c("span", { key: "b-" + key }, [
                                _vm._v(
                                  ", " +
                                    _vm._s(
                                      _vm.Locale.warning_and[_vm.$i18n.locale]
                                    ) +
                                    " "
                                ),
                              ])
                            : key < _vm.failedLists.length - 1
                            ? _c("span", { key: "a-" + key }, [_vm._v(", ")])
                            : _vm._e(),
                        ]
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v(".")]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(_vm._s(_vm.Locale.warning2[_vm.$i18n.locale])),
                      ]),
                    ],
                    2
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showOtpError
            ? _c("div", { staticClass: "otp-message" }, [
                _vm._v(_vm._s(_vm.Locale.otp[_vm.$i18n.locale])),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.status
            ? _c("div", { staticClass: "result-message" }, [
                _vm._v(_vm._s(_vm.Locale.resultNext[_vm.$i18n.locale])),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "result-button-container" },
            [
              _c(
                "button-element",
                { staticClass: "button back", on: { click: _vm.back } },
                [_vm._v(_vm._s(_vm.Locale.back[_vm.$i18n.locale]))]
              ),
              _vm._v(" "),
              _vm.status
                ? _c(
                    "button-element",
                    { staticClass: "button next", on: { click: _vm.next } },
                    [_vm._v(_vm._s(_vm.Locale.next[_vm.$i18n.locale]))]
                  )
                : _vm._e(),
            ],
            1
          ),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/family/result.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/family/result.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=034fbe64&scoped=true& */ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "034fbe64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/family/result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=style&index=0&id=034fbe64&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_style_index_0_id_034fbe64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./result.vue?vue&type=template&id=034fbe64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/family/result.vue?vue&type=template&id=034fbe64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_034fbe64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/locale.json":
/*!**************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/locale.json ***!
  \**************************************************************/
/*! exports provided: checking, passedCheck, passedFailed, privilegedCustomer, resultNext, back, warning1, warning2, warning_and, otp, backHomepage, next, verify, address_next, agreement1, agreement2, agreement3, instantsim, user_information_form, option_Page, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"checking\":{\"en\":\"Checking ...\",\"th\":\"กำลังตรวจสอบ ...\"},\"passedCheck\":{\"en\":\"Verification Passed\",\"th\":\"การตรวจสอบสิทธิ์สำเร็จ\"},\"passedFailed\":{\"en\":\"Verification Failed\",\"th\":\"การตรวจสอบสิทธิ์ล้มเหลว\"},\"privilegedCustomer\":{\"en\":\"Congratulations! You can enjoy the following privileges.\",\"th\":\"ยินดีด้วย! คุณสามารถรับสิทธิพิเศษดังต่อไปนี้\"},\"resultNext\":{\"en\":\"Click “Next” to continue ordering.\",\"th\":\"กด \\\"ถัดไป\\\" เพื่อทำรายการต่อ\"},\"back\":{\"en\":\"Back\",\"th\":\"ย้อนกลับ\"},\"warning1\":{\"en\":\"You did not pass the authorization to purchase \",\"th\":\"คุณไม่สามารถทำการสั่งซื้อได้เนื่องจากการตรวจสอบสิทธิ์ล้มเหลว \"},\"warning2\":{\"en\":\" If you have any questions, please contact Call center 1242\",\"th\":\" หากคุณมีข้อสงสัย สามารถติดต่อ Call Center 1242\"},\"warning_and\":{\"en\":\"and\",\"th\":\"และ\"},\"otp\":{\"en\":\"You did not pass the authorization to purchase due to not eligible to get the privilege.\",\"th\":\"คุณไม่สามารถรับสิทธิ์พิเศษนี้ เนื่องจากหมายเลขสมาชิกของคุณ ไม่เป็นไปตามเงื่อนไข\"},\"backHomepage\":{\"en\":\"Back to Homepage\",\"th\":\"กลับสู่หน้าหลัก\"},\"next\":{\"en\":\"Next\",\"th\":\"ต่อไป\"},\"verify\":{\"en\":\"Verify\",\"th\":\"ตรวจสอบสิทธิ์\"},\"address_next\":{\"th\":\"ดำเนินการต่อ\",\"en\":\"Next\"},\"agreement1\":{\"th\":\"กรอกข้อมูลให้ครบถ้วน และกด \\\"ดำเนินการต่อ\\\" เพื่อบันทึก\",\"en\":\"Please complete the information. Click \\\"Next\\\" to save the information.\"},\"agreement2\":{\"th\":\"ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี\",\"en\":\"I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.\"},\"agreement3\":{\"th\":\"ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี\",\"en\":\"The company reserves the right to cancel the order and refund all cases.\"},\"instantsim\":{\"title\":{\"th\":\"ก่อนเปิดใช้งานซิม\",\"en\":\"Ready to start?\"},\"subtitle_postpaid\":{\"th\":\"กรุณาตรวจเช็กว่าเบอร์ และค่าบริการรายเดือนตรงกับที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"subtitle_prepaid\":{\"th\":\"กรุณาตรวจเช็คว่าเบอร์ และบริการที่เลือกไว้\",\"en\":\"Please make sure this is your preferred mobile number and price plan.\"},\"selected_number\":{\"th\":\"เบอร์ที่เลือก\",\"en\":\"Selected number\"},\"selected_plan\":{\"th\":\"ค่าบริการรายเดือนที่เลือก\",\"en\":\"Selected price plan\"},\"selected_prepaid_plan\":{\"th\":\"บริการที่เลือก\",\"en\":\"Selected price plan\"},\"msg_postpaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และค่าบริการรายเดือนใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"msg_prepaid\":{\"th\":\"เมื่อเปิดใช้งานซิมแล้ว จะไม่สามารถย้อนกลับมาเลือกเบอร์ และบริการที่เลือกใหม่ได้\",\"en\":\"Once SIM is activated, you can no longer come back to change mobile number or price plan.\"},\"start\":{\"th\":\"เปิดใช้งานซิม\",\"en\":\"Start activation\"},\"back\":{\"th\":\"ย้อนกลับ\",\"en\":\"Back\"}},\"user_information_form\":{\"title\":{\"th\":\"เบอร์รายเดือน ทรูมูฟ เอช\",\"en\":\"TrueMove H Postpaid\"},\"title_prepaid\":{\"th\":\"เบอร์เติมเงิน ทรูมูฟ เอช\",\"en\":\"TrueMove H Prepaid\"},\"sub_title_1\":{\"th\":\"กรุณากรอกข้อมูลส่วนตัวของผู้ที่จะใช้งานเบอร์นี้\",\"en\":\"Please enter personal information for the mobile number\"},\"sub_title_2\":{\"th\":\"(สำหรับผู้มีอายุ 17 ปี ขึ้นไป)\",\"en\":\"(you must be at least 17 years old)\"},\"date_of_birth\":{\"th\":\"วันเกิด\",\"en\":\"Date of Birth\"},\"thai_id\":{\"th\":\"หมายเลขบัตรประชาชน\",\"en\":\"Thai ID\"},\"agreement\":{\"th\":\"ยอมรับข้อกำหนดและเงื่อนไข\",\"en\":\"Accept Terms and Condition\"},\"read_agreement\":{\"th\":\"อ่านข้อกำหนดและเงื่อนไข\",\"en\":\"Read terms and conditions\"},\"customerDetail\":{\"thai_id\":{\"placeholder\":{\"th\":\"13 หลัก\",\"en\":\"13 digits of Thai ID number\"},\"error\":{\"th\":\"กรุณากรอกข้อมูลให้ถูกต้อง\",\"en\":\"Please enter 13-digit Thai ID number\"},\"type\":\"text\",\"required\":true}}},\"option_Page\":{\"option_page_header_line_1\":{\"en\":\"กรุณาเลือกทำรายการ\",\"th\":\"กรุณาเลือกทำรายการ\"},\"option_page_header_line_2\":{\"en\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\",\"th\":\"ซื้่อเบอร์พร้อมเครื่องเพื่อรับส่วนลดพิเศษ\"},\"option_page_button_1_1\":{\"en\":\"ซื้อเครื่องพร้อม\",\"th\":\"ซื้อเครื่องพร้อม\"},\"option_page_button_1_2\":{\"en\":\"พร้อมเบอร์ฟันธง\",\"th\":\"พร้อมเบอร์ฟันธง\"},\"option_page_button_1_3\":{\"en\":\"(Device Bundling)\",\"th\":\"(Device Bundling)\"},\"option_page_button_2_1\":{\"en\":\"เปิดเบอร์ฟันธง\",\"th\":\"เปิดเบอร์ฟันธง\"},\"option_page_button_2_2\":{\"en\":\"(SIM Only)\",\"th\":\"(SIM Only)\"}}}");

/***/ })

}]);