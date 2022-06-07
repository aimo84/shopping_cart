(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json");
var _locale_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale.json */ "./resources/js/pages/store/postpaid/verify/locale.json", 1);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _components_terms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/terms */ "./resources/js/components/terms.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_9__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_7__["default"],
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_10__["default"],
    'terms-element': _components_terms__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    product: Object,
    postpaidResult: Object,
    selectedPricePlan: Object,
    packages: Object,
    noEkycCartForm: Object
  },
  data: function data() {
    return {
      loading: false,
      Locale: _locale_json__WEBPACK_IMPORTED_MODULE_8__,
      thaiId: '',
      thaiIdError: false,
      ageError: false,
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      agreeTnc: false
    };
  },
  computed: {
    isDrLuckyPrepaid: function isDrLuckyPrepaid() {
      return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid';
    },
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
    months: function months() {
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    },
    days: function days() {
      var total = new Date(this.date.year, this.date.month + 1, 0).getDate();
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Array(total).keys());
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
    isDrluckyZodiacVerifyOffline: function isDrluckyZodiacVerifyOffline() {
      return this.$route.name === 'drlucky-zodiac-verify-offline';
    }
  },
  mounted: function mounted() {
    if (this.noEkycCartForm.thai_id && this.postpaidResult.correlation_id) {
      this.loading = true;
      this.computeCart(this.noEkycCartForm);
    }

    this.date.year = this.currentYear;
  },
  methods: {
    checkAllowAddcart: function checkAllowAddcart() {
      var _this = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.$route.name.includes('drlucky-verify')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", true);

              case 2:
                if (!_this.$route.name.includes('drlucky-zodiac-verify')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", true);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeProduct: function removeProduct() {
      var _this2 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var cartId, error, removeProducts, store, result, i, j, item, sim, bundle, deviceProduct, sameProductId, sameInventoryId, sameMat, isDevBundle, isSim, _isDevBundle, _isSim, _i, _item;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cartId = window.localStorage.getItem('cart-id');

                if (!cartId) {
                  _context2.next = 19;
                  break;
                }

                error = '';
                removeProducts = [];
                _context2.next = 6;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_CART"], {
                  id: cartId
                });

              case 6:
                store = _this2.$store.state.cart.cart;

                if (store && store.data && store.data.record) {
                  result = store.data.record;

                  for (i in result) {
                    for (j in result[i].products) {
                      item = result[i].products[j];
                      sim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard'];

                      if (_this2.product.product_type === 'device_bundle_new_customer') {
                        bundle = _this2.product.bundles.find(function (e) {
                          return e.id === _this2.$route.params.bundle;
                        });
                        deviceProduct = bundle.inventories.find(function (e) {
                          return e.product_id === _this2.product.id;
                        });
                        sameProductId = item.id === _this2.product.id;
                        sameInventoryId = item.inventory.id.toString() === deviceProduct.inventory_id.toString();
                        sameMat = sameProductId && sameInventoryId;
                        isDevBundle = item.product_type.startsWith('device_bundle_');
                        isSim = sim.includes(item.product_type);
                        if (isDevBundle) error = sameMat ? '010' : '011';
                        if (isSim && error !== '010') error = '011';
                      }

                      if (sim.includes(_this2.product.product_type)) {
                        _isDevBundle = item.product_type.startsWith('device_bundle_');
                        _isSim = sim.includes(item.product_type);
                        if (_isDevBundle || _isSim) error = '011';
                      }
                    }
                  }
                }

                if (!error) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", error);

              case 10:
                if (!(removeProducts.length > 0)) {
                  _context2.next = 19;
                  break;
                }

                _context2.t0 = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().keys(removeProducts);

              case 12:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 19;
                  break;
                }

                _i = _context2.t1.value;
                _item = removeProducts[_i];
                _context2.next = 17;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["DELETE_CART"], {
                  id: cartId,
                  data: {
                    product_id: _item.product_id,
                    inventory_id: _item.inventory_id
                  }
                });

              case 17:
                _context2.next = 12;
                break;

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    computeCart: function computeCart(meta) {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee3() {
        var _meta$ekyc;

        var inventoryId, gender, drluckNumber, form, data, hash, result, _e$message;

        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                inventoryId = _this3.product.inventories[0].id.toString();
                gender = (_meta$ekyc = meta.ekyc) === null || _meta$ekyc === void 0 ? void 0 : _meta$ekyc.gender;

                if (!_this3.isPrepaid) {
                  _this3.setEkyc(meta.ekyc, _this3.product.id);

                  delete meta.ekyc;
                  delete meta.price_plan.long_description;
                  delete meta.price_plan.proposition_term_long;
                  meta.sim_image = _this3.packages.package_image_desktop;
                }

                if (_this3.$route.name === 'drlucky-verify') {
                  drluckNumber = window.localStorage.getItem('truestore-berfuntong-number');
                  form = window.localStorage.getItem('truestore-berfuntong-form');
                  form = JSON.parse(form);
                  drluckNumber = JSON.parse(drluckNumber);
                  meta.campaign_type = 'vhora';
                  meta.birth_date = form.birthdate;
                  meta.birth_time = form.birthtime;
                  meta.timezone = form.timezone;
                  meta.correlation_id = _this3.postpaidResult.correlation_id;
                  meta.dealer_code = _this3.postpaidResult.dealer_code;
                  meta.price_plan.proposition_amdoc = _this3.postpaidResult.proposition_amdoc;
                  meta.price_plan.company_code = _this3.postpaidResult.company_code;
                  meta.user_information.iden_type = 'I';
                  meta.berfuntong = {
                    first_name: form.firstname,
                    last_name: form.lastname,
                    grade: drluckNumber.grade,
                    group: drluckNumber.group,
                    subgroup: drluckNumber.subgroup,
                    group_title: drluckNumber.group_title,
                    subgroup_title: drluckNumber.subgroup_title
                  };
                  meta.user_information.gender = gender === 'ชาย' ? '1' : '2';
                }

                if (_this3.$route.name === 'drlucky-zodiac-verify') {
                  meta.campaign_type = 'vhora';
                  meta.correlation_id = _this3.postpaidResult.correlation_id;
                  meta.dealer_code = _this3.postpaidResult.dealer_code;
                  meta.price_plan.proposition_amdoc = _this3.postpaidResult.proposition_amdoc;
                  meta.price_plan.company_code = _this3.postpaidResult.company_code;
                  meta.user_information.iden_type = 'I';
                  meta.user_information.gender = '2';
                  meta.sim_image = _this3.packages.package_image_desktop;
                  meta.sim_type = _this3.$route.query.sim_type || 'postpaid';
                  meta.berfuntong = {
                    package_code: localStorage.getItem('truestore-berfuntong-zodiac-pack')
                  };
                }

                data = {
                  product_id: _this3.$route.params.id,
                  inventory_id: inventoryId,
                  store_id: _this3.product.store_id,
                  section: _this3.product.section,
                  quantity: 1,
                  sim_meta: [meta],
                  channel: 'tmh-website'
                };
                hash = window.localStorage.getItem('cart-id');
                if (hash) data.hash = hash;
                _context3.prev = 8;
                _context3.next = 11;
                return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["UPDATE_POSTPAID_CART"], {
                  data: data
                });

              case 11:
                result = _context3.sent;
                window.localStorage.setItem('cart-id', result.cart_hash); // Add log for add to cart

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_12__["FETCH_CART"], {
                  id: result.cart_hash
                }).then(function (_ref) {
                  var data = _ref.data;
                  data.record[0].products.forEach(function (product) {
                    var amount = product.inventory.price;
                    var quantity = product.quantity;
                    Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["loggerAddon"])({
                      event: 'Cart',
                      status: 'add',
                      productId: product.id,
                      matcode: product.inventory.sku,
                      quantity: quantity,
                      amount: amount
                    });
                  });
                });

                _context3.next = 16;
                return Object(_utils_addon__WEBPACK_IMPORTED_MODULE_13__["updateEntPack"])(_this3.$route.query.ep, _this3.$route.query, _this3.product, result.cart_hash, {
                  id: inventoryId,
                  nas: _this3.$route.params.nas
                });

              case 16:
                if (_this3.isPrepaid) {
                  localStorage.removeItem('prepaid-sim-number');
                }

                _this3.$router.push("/cart?id=".concat(result.cart_hash));

                _context3.next = 29;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](8);

                if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) === 'err-ent-pack')) {
                  _context3.next = 26;
                  break;
                }

                return _context3.abrupt("return", _this3.$router.push('/cart?error=030'));

              case 26:
                if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : (_e$message = _context3.t0.message) === null || _e$message === void 0 ? void 0 : _e$message.en) === 'sku_limit')) {
                  _context3.next = 28;
                  break;
                }

                return _context3.abrupt("return", _this3.$router.push('/cart?error=020'));

              case 28:
                _this3.loading = false;

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[8, 20]]);
      }))();
    },
    setEkyc: function setEkyc(ekyc, id) {
      var key = 'postpaid-ekyc-data';
      var data = JSON.parse(localStorage.getItem(key)) || {};
      if (Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data) !== 'object') data = {};
      data[id] = ekyc;
      localStorage.setItem(key, JSON.stringify(data));
    },
    save: function save() {
      var _this4 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee4() {
        var error, userData, form;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                error = '';

                if (!_this4.invalidateBirthdate()) {
                  _context4.next = 5;
                  break;
                }

                _this4.ageError = true;
                window.scrollTo(0, 0);
                return _context4.abrupt("return");

              case 5:
                if (!(!_this4.validateThaiNationalID() && !_this4.isDrluckyZodiacVerifyOffline)) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return");

              case 7:
                _this4.loading = true;
                _context4.t0 = _this4.isPostpaid;

                if (!_context4.t0) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 12;
                return _this4.checkAllowAddcart();

              case 12:
                _context4.t0 = !_context4.sent;

              case 13:
                if (!_context4.t0) {
                  _context4.next = 16;
                  break;
                }

                _this4.$router.push('/cart?error=012');

                return _context4.abrupt("return");

              case 16:
                userData = {
                  thai_id: _this4.thaiId,
                  birth_date: _this4.birthdate
                };
                form = {
                  number: _this4.$route.params.number,
                  sim_type: 'postpaid',
                  product_info: {
                    product_id: _this4.$route.params.id.replace(/\D/g, ''),
                    product_type: 'sim',
                    propo_code: _this4.$route.params.nas,
                    store_id: _this4.product.store_id,
                    inventory_id: _this4.product.inventories[0].id.toString()
                  },
                  price_plan: _this4.selectedPricePlan,
                  is_verify: 'true',
                  thai_id: userData.thai_id,
                  birth_date: userData.birth_date,
                  user_information: {
                    thai_id: userData.thai_id,
                    birth_date: userData.birth_date
                  },
                  ekyc: {}
                };

                if (!_this4.isPostpaid) {
                  _context4.next = 22;
                  break;
                }

                _context4.next = 21;
                return _this4.removeProduct();

              case 21:
                error = _context4.sent;

              case 22:
                if (error && _this4.$route.name !== 'drlucky-verify') {
                  _this4.$router.push("/cart?error=".concat(error));
                } else if (error && _this4.$route.name !== 'drlucky-zodiac-verify') {
                  _this4.$router.push("/cart?error=".concat(error));
                } else {
                  _this4.$parent.updateNoEkycCartForm(form);

                  _this4.$parent.goTo('verify');
                }

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terms-dialog .content[data-v-3ac5c3a9] {\n  max-height: 85%;\n  max-width: 860px;\n}\n.terms-dialog .content .dialog-content[data-v-3ac5c3a9] {\n  padding: 36px;\n}\n.address-container[data-v-3ac5c3a9] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 36px 16px;\n  font-size: 24px;\n}\n.address-container .address-inner-container[data-v-3ac5c3a9] {\n  max-width: 950px;\n  margin: auto;\n}\n.address-container .line[data-v-3ac5c3a9] {\n  border-top: 1px solid #ddd;\n  margin: 25px 0px 25px 0px;\n}\n.thaiid-input[data-v-3ac5c3a9] {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #000;\n  box-sizing: border-box;\n  border-radius: 8px;\n  transition: 150ms border-color ease;\n  font-family: TrueMedium;\n  font-size: 24px;\n  line-height: normal;\n  font-weight: lighter;\n  outline: none;\n}\n.text-error[data-v-3ac5c3a9] {\n  font-size: 20px;\n  color: red !important;\n}\n.input-error[data-v-3ac5c3a9] {\n  border: 1px solid red !important;\n}\n.save-button-container[data-v-3ac5c3a9] {\n  display: flex;\n  justify-content: center;\n  max-width: 300px;\n  margin: auto;\n}\n.save-button-container button[data-v-3ac5c3a9] {\n  width: 100%;\n}\n.title[data-v-3ac5c3a9] {\n  font-size: 40px;\n  text-align: center;\n}\n.sub-title[data-v-3ac5c3a9] {\n  font-size: 21px;\n  text-align: center;\n}\n.sub-title-2[data-v-3ac5c3a9] {\n  line-height: 15px;\n  color: #777;\n}\n.form-wrap[data-v-3ac5c3a9] {\n  margin: auto;\n  max-width: 300px;\n}\nform .form-label[data-v-3ac5c3a9] {\n  font-size: 30px;\n  text-align: center;\n}\nform .form-input[data-v-3ac5c3a9] {\n  margin-bottom: 20px;\n}\n.date[data-v-3ac5c3a9] {\n  display: grid;\n  grid-template-columns: 3fr 3fr 3fr;\n  grid-gap: 8px;\n}\n.date .dropdown[data-v-3ac5c3a9] {\n  position: relative;\n}\n.date .dropdown .dropdown-label[data-v-3ac5c3a9] {\n  pointer-events: none;\n  height: 40px;\n  font-size: 24px;\n  font-family: \"TrueMedium\";\n  border-radius: 8px;\n  border: 1px solid black;\n  color: #333;\n  padding: 0 12px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  grid-gap: 4px;\n}\n.date .dropdown .dropdown-label span[data-v-3ac5c3a9] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.date .dropdown .dropdown-label[data-v-3ac5c3a9]:after {\n  content: \"\";\n  width: 11px;\n  height: 6px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDUuNSA1LjVMMTIgMSIgc3Ryb2tlPSIjMjIyMjIzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=\");\n}\n.date .dropdown select[data-v-3ac5c3a9] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  font-size: 16px;\n  font-family: Arial;\n}\n.term-condition[data-v-3ac5c3a9] {\n  margin-top: 30px;\n  text-align: center;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n}\n.term-condition label .first-line[data-v-3ac5c3a9] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.term-condition label .first-line input[data-v-3ac5c3a9] {\n  margin-top: 6.5px;\n}\n.term-condition label .first-line .text[data-v-3ac5c3a9] {\n  margin-left: 3px;\n  color: #000;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 26.39px;\n}\n.term-condition label .second-line .showTermsDialogClass[data-v-3ac5c3a9] {\n  color: #29ABE2;\n  cursor: pointer;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 26.39px;\n  margin-left: 8px;\n  text-decoration: underline;\n}\n@media only screen and (max-width: 600px) {\n.sub-title[data-v-3ac5c3a9] {\n    width: 270px;\n    margin: auto;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                _vm.isDrLuckyPrepaid
                  ? [
                      _vm._v(
                        _vm._s(
                          _vm.Locale.user_information_form.title_prepaid[
                            _vm.$i18n.locale
                          ]
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
              _c("form", [
                !_vm.isDrluckyZodiacVerifyOffline
                  ? _c("div", [
                      _c("div", { staticClass: "form-label" }, [
                        _vm._v(
                          _vm._s(
                            _vm.Locale.user_information_form.thai_id[
                              _vm.$i18n.locale
                            ]
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-input" }, [
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
                                  _vm.Locale.user_information_form
                                    .customerDetail.thai_id.error[
                                    _vm.$i18n.locale
                                  ]
                                )
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ])
                  : _vm._e(),
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
                      _c("span", [_vm._v(_vm._s(_vm.months[_vm.date.month]))]),
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
              ]),
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
                    attrs: { id: "prevalidate-ekyc", disabled: !_vm.agreeTnc },
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

/***/ "./resources/js/pages/store/postpaid/verify/info-form.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/info-form.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true& */ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true&");
/* harmony import */ var _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-form.vue?vue&type=script&lang=js& */ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& */ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ac5c3a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/store/postpaid/verify/info-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=style&index=0&id=3ac5c3a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_style_index_0_id_3ac5c3a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/store/postpaid/verify/info-form.vue?vue&type=template&id=3ac5c3a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_form_vue_vue_type_template_id_3ac5c3a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);