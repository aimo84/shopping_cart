(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isProcessing: [Boolean],
    fitHeight: Boolean
  },
  data: function data() {
    return {
      loading: {
        en: 'Loading ...',
        th: 'กำลังโหลด ...'
      },
      processing: {
        en: 'Processing ...',
        th: 'กำลังประมวลผล ...'
      },
      noRefresh: {
        en: 'DO NOT refresh the page or click on the BACK button.',
        th: 'กรุณาอย่าทำการรีเฟรช หรือ กดปุ่มย้อนกลับ'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_detail_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/detail/banner */ "./resources/js/pages/store/detail/banner.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/preview/mnpsim/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/preview/mnpsim/content.json", 1);
/* harmony import */ var _store_detail_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/detail/image */ "./resources/js/pages/store/detail/image.vue");
/* harmony import */ var _store_detail_device_bundle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/detail/device-bundle */ "./resources/js/pages/store/detail/device-bundle.vue");
/* harmony import */ var _store_detail_device_bundle_promo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/detail/device-bundle-promo */ "./resources/js/pages/store/detail/device-bundle-promo.vue");
/* harmony import */ var _store_detail_device_bundle_existing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/detail/device-bundle-existing */ "./resources/js/pages/store/detail/device-bundle-existing.vue");
/* harmony import */ var _components_clm_benefit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/clm-benefit */ "./resources/js/components/clm-benefit.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'banner-element': _store_detail_banner__WEBPACK_IMPORTED_MODULE_7__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_8__["default"],
    'image-element': _store_detail_image__WEBPACK_IMPORTED_MODULE_10__["default"],
    'clm-benefit-element': _components_clm_benefit__WEBPACK_IMPORTED_MODULE_14__["default"],
    'device-bundle': _store_detail_device_bundle__WEBPACK_IMPORTED_MODULE_11__["default"],
    'device-bundle-promo': _store_detail_device_bundle_promo__WEBPACK_IMPORTED_MODULE_12__["default"],
    'device-bundle-existing': _store_detail_device_bundle_existing__WEBPACK_IMPORTED_MODULE_13__["default"],
    'mnp-element': function mnpElement() {
      return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ../../store/detail/mnp */ "./resources/js/pages/store/detail/mnp.vue"));
    }
  },
  data: function data() {
    return {
      demo: true,
      product: {},
      products: {},
      loading: true,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_9__,
      subModule: '',
      promotion: '',
      promotion_type: '',
      promotion_sim: '',
      existing_bundle: {
        type: '',
        pp: ''
      }
    };
  },
  computed: {
    config: function config() {
      return this.$store.state.config.verifyConfig;
    },
    productInfo: function productInfo() {
      return this.$store.state.products.productInfo.data.record;
    },
    inventoriesImages: function inventoriesImages() {
      var _this = this;

      return Object.keys(this.products.inventories).map(function (e) {
        var inventory = _this.products.inventories[e];
        return inventory.image;
      });
    },
    images: function images() {
      if (this.product.product_type === 'truecard') {
        if (this.truecard) {
          var inventoryId = this.truecard.product_detail.inventory_id;
          return [this.products.inventories[inventoryId].image];
        }

        return [this.products.image];
      }

      var images = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.products.images), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.inventoriesImages));
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(new Set(images.filter(function (e) {
        return e;
      })));
    },
    coupon: function coupon() {
      var _data$coupon_data_fro;

      var data = this.$store.state.products.productInfo.data;
      var couponData = data === null || data === void 0 ? void 0 : (_data$coupon_data_fro = data['coupon_data_from_bff']) === null || _data$coupon_data_fro === void 0 ? void 0 : _data$coupon_data_fro[data.record.id];
      if (!couponData || !couponData.coupon_status) return;
      var coupon = couponData.coupon[0];
      var discount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_16__["computeBalance"])(coupon.discount);
      return {
        code: coupon.code,
        discount: coupon.discount_type === 'percent' ? "".concat(discount, "%") : "\u0E3F".concat(discount)
      };
    },
    normalPrice: function normalPrice() {
      return this.computePrice('compare_at_price');
    },
    specialPrice: function specialPrice() {
      return this.computePrice('price');
    },
    actualSpecialPrice: function actualSpecialPrice() {
      if (this.promotion === '' && this.products.device_only && this.product.sku) {
        var discount = this.products.device_only[this.product.sku];
        if (discount) return this.specialPrice - discount;
      }

      return this.specialPrice;
    },
    balancePrice: function balancePrice() {
      var id = this.product.id;

      if (id) {
        var product = this.products.inventories[id];
        var price = product.price - this.products.points[id].discount;
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      return '';
    },
    status: function status() {
      if (this.product.id) {
        var product = this.products.inventories[this.product.id];
        var status = product.quantity > 0 && product.allow_addcart;
        return {
          value: status ? this.Content.instock[this.$i18n.locale] : this.Content.outofstock[this.$i18n.locale],
          status: status
        };
      }

      return '';
    },
    campaign: function campaign() {
      return this.config.campaigns[this.products.promotion.id];
    },
    bundle: function bundle() {
      var _this2 = this;

      return this.products.bundles && this.products.bundles.find(function (bundle) {
        return bundle.id === _this2.promotion_sim;
      });
    },
    isDeviceBundleNewCustomer: function isDeviceBundleNewCustomer() {
      return this.promotion && this.config.verify_ui[this.promotion] && this.product.product_type === 'device_bundle_new_customer';
    },
    isDeviceBundleExisting: function isDeviceBundleExisting() {
      return this.promotion && this.config.campaigns[this.promotion] && ['device_bundle_new_customer', 'device_bundle_existing'].includes(this.product.product_type);
    },
    isMnpBundling: function isMnpBundling() {
      return this.promotion === 'mnp_bundling';
    },
    isMnpBundlingExisting: function isMnpBundlingExisting() {
      return this.promotion === 'mnp_bundling_existing';
    },
    isMnpBundlingOneStep: function isMnpBundlingOneStep() {
      return this.promotion === 'mnp_bundling_one_step';
    },
    isMnpBundlingTyphoon: function isMnpBundlingTyphoon() {
      return this.promotion === 'mnp_bundling' && this.bundle && this.bundle.is_typhoon;
    },
    isPrepaidBundle: function isPrepaidBundle() {
      return this.promotion === 'prepaid_bundle';
    },
    isPre2Post: function isPre2Post() {
      return this.promotion === 'pre2post';
    },
    ep: function ep() {
      return this.entertainment_packages || undefined;
    },
    accs: function accs() {
      if (this.productInfo.only_one_accessory) return this.accessories || undefined;
      return this.accessories.length > 0 ? this.accessories.join(',') : undefined;
    },
    showAddon: function showAddon() {
      var product = this.productInfo;
      var types = ['sim', 'postpaid', 'vlearn', 'happy_digital', 'truecard', 'gigatex', 'family_black_truecard'];
      if (product.product_type === 'mnp' && product.sim_data.sim_type === 'postpaid') return false;
      if (types.includes(product.product_type)) return false;
      return true;
    },
    sortedOptions: function sortedOptions() {
      return function (options) {
        return Object.keys(options).map(function (e) {
          return {
            id: e,
            name: options[e].name,
            pos: options[e].position
          };
        }).sort(function (a, b) {
          return a.pos - b.pos;
        });
      };
    },
    showDiscountOnTop: function showDiscountOnTop() {
      var _this$productInfo, _this$productInfo$add;

      return (_this$productInfo = this.productInfo) === null || _this$productInfo === void 0 ? void 0 : (_this$productInfo$add = _this$productInfo.additional) === null || _this$productInfo$add === void 0 ? void 0 : _this$productInfo$add['discount_on_top'];
    },
    campCode: function campCode() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_16__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    }
  },
  watch: {
    promotion: function promotion(value) {
      switch (value) {
        case '':
          {
            this.updateURLQuery('usecase', 4);
            this.updateURLQuery('selected_campaign', 'device_only');
            break;
          }

        case 'device_bundle_new_customer':
          {
            this.updateURLQuery('usecase', 1);
            this.updateURLQuery('selected_campaign', 'new_number');
            break;
          }

        case 'pre2post':
          {
            this.updateURLQuery('usecase', undefined);
            this.updateURLQuery('selected_campaign', 'switch_to_postpaid');
            break;
          }

        case 'prepaid_bundle':
        case 'mnp_bundling':
        case 'mnp_bundling_existing':
        case 'mnp_bundling_one_step':
          {
            this.updateURLQuery('usecase', undefined);
            this.updateURLQuery('selected_campaign', value);
            break;
          }

        default:
          {
            this.updateURLQuery('selected_campaign', 'existing_postpaid');
            var promo = this.products.promotions.find(function (e) {
              return e.id === value;
            });
            if (!this.existing_bundle.type) return;
            if ((promo === null || promo === void 0 ? void 0 : promo.type) !== 'promotions') this.updateURLQuery('usecase', undefined);
            break;
          }
      }
    },
    promotion_type: function promotion_type(value) {
      this.promotion_type = value;
    },
    promotion_sim: function promotion_sim(value) {
      if (value === '') this.promotion = '';
    },
    existing_bundle: {
      deep: true,
      handler: function handler() {
        var _this3 = this;

        if (this.existing_bundle.type === '3') {
          var bundle = this.products.bundle_existing.find(function (e) {
            return e.campaign_type === '3';
          });
          var discount = bundle.discount_list.find(function (e) {
            return e.id.toString() === _this3.existing_bundle.pp;
          });

          if (discount) {
            this.updateURLQuery('usecase', 2);
            this.updateURLQuery('rc', discount.rc);
          }
        } else {
          this.updateURLQuery('rc', undefined);
        }
      }
    },
    'existing_bundle.type': function existing_bundleType(value) {
      var _this4 = this;

      var promo = this.products.promotions.find(function (e) {
        return e.id === _this4.promotion;
      });
      if ((promo === null || promo === void 0 ? void 0 : promo.type) !== 'promotions') return;
      this.updateURLQuery('usecase', value === '2' ? 5 : undefined);
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    Promise.all([this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_15__["FETCH_VERIFY_CONFIG"]), this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_15__["FETCH_PRODUCT_INFO"], {
      id: window.clm_preview.MNP_SIM,
      tmvhAuth: this.$route.query.token
    })]).then(function () {
      _this5.computeProductInfo();
    })["catch"](function (e) {
      location.replace('/online-store');
    });
  },
  methods: {
    computeBalance: _utils_common__WEBPACK_IMPORTED_MODULE_16__["computeBalance"],
    checkPointStatus: _utils_common__WEBPACK_IMPORTED_MODULE_16__["checkPointStatus"],
    computeProductInfo: function computeProductInfo() {
      var _this6 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var options, inventory, inventoryId;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.products = _this6.computeProducts();
                _this6.product = {
                  sku: '',
                  id: '',
                  title: _this6.products.title,
                  product_type: _this6.products.product_type,
                  options: {}
                };
                options = _this6.products.options;

                if (options) {
                  if (_this6.$route.query.matcode) {
                    inventoryId = Object.keys(_this6.products.inventories).find(function (e) {
                      return _this6.products.inventories[e].sku === _this6.$route.query.matcode;
                    });
                    if (inventoryId) inventory = _this6.products.inventories[inventoryId];
                  }

                  Object.keys(options).forEach(function (option) {
                    var value = inventory ? inventory.options[option].toString() : _this6.sortedOptions(options[option])[0].id;
                    _this6.product.options[option] = value;
                  });
                }

                _this6.computeProduct();

                _this6.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    computeProducts: function computeProducts() {
      var _this7 = this;

      var data = this.productInfo;
      var product = {
        id: data.id,
        title: data.title.th,
        inventories: {},
        images: data.images.map(function (e) {
          return e.url;
        }),
        image: data.images[0].url,
        points: {},
        options: {},
        body_html: data.body_html,
        product_type: data.product_type,
        bundle_existing: data.bundle_existing || [],
        device_only: data.device_only,
        token_coupon: data.token_coupon,
        is_mnp_bundling: data.is_mnp_bundling,
        is_addon: data.is_addon,
        promotion: data.promotion && data.promotion[0],
        promotions: data.campaign && data.campaign.map(function (promo) {
          return {
            active: promo.active,
            start: promo.start,
            end: promo.end,
            id: promo.id.toString(),
            max_discount: promo.max_discount,
            title: _this7.config.campaigns[promo.id] && _this7.config.campaigns[promo.id].campaign_name || promo.title,
            type: 'promotions'
          };
        }).filter(function (item) {
          return _this7.config.campaigns[item.id];
        }),
        bundles: data.bundles && data.bundles.filter(function (bundle) {
          var current = new Date();
          var start = new Date(bundle.start_date * 1000);
          var end = new Date(bundle.end_date * 1000);
          var dateActive = current >= start && current <= end;
          return dateActive && bundle.enable;
        })
      };

      if (product.product_type === 'device_bundle_new_customer') {
        var promo = Object.keys(this.config.verify_ui).map(function (item) {
          return {
            id: item,
            title: _this7.config.verify_ui[item].campaign_name,
            type: 'device_bundle_new_customer'
          };
        });
        product.promotions = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(product.promotions || []), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(promo));
      }

      if (product.is_mnp_bundling) {
        var _promo = [{
          id: 'mnp_bundling',
          title: {
            th: 'ลูกค้าย้ายค่าย ออนไลน์เท่านั้น',
            en: 'Move to Us <span class="red">Online Exclusive</div>'
          },
          type: 'mnp_bundling'
        }, {
          id: 'mnp_bundling_existing',
          title: {
            th: 'ลูกค้าย้ายค่าย ออนไลน์เท่านั้น',
            en: 'Move to Us'
          },
          type: 'mnp_bundling_existing'
        }, {
          id: 'mnp_bundling_one_step',
          title: {
            th: 'Move to TrueMove H',
            en: 'Move to TrueMove H'
          },
          type: 'mnp_bundling_one_step'
        }];
        product.promotions = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(product.promotions || []), _promo);
      }

      if (data.promotion && data.promotion.length > 0) {
        var _promo2 = [{
          id: 'truemoveh',
          title: {
            th: 'ลูกค้าปัจจุบัน ทรูมูฟ เอช',
            en: 'Existing TrueMove H'
          },
          type: 'multi_campaign'
        }, {
          id: 'trueonline',
          title: {
            th: 'ลูกค้า ทรูออนไลน์',
            en: 'TrueOnline Customer'
          },
          type: 'multi_campaign'
        }];
        data.promotion.forEach(function (item) {
          item.id = item.id.toString();
        });
        product.promotions = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(product.promotions || []), _promo2);
        product.bundles = [].concat(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(product.bundles || []), Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.promotion));
        product.multiCampaign = true;
      }

      if (data.points && data.points.length > 0) {
        var point = data.points[0];
        var inventories = point.inventories;

        if (inventories && inventories.length > 0) {
          inventories.forEach(function (inventory) {
            product.points[inventory.inventory_id] = {
              point: inventory.point,
              discount: inventory.discount,
              status: point.status,
              start_date: point.start_date,
              end_date: point.end_date
            };
          });
        }
      }

      data.inventories.forEach(function (inventory) {
        product.inventories[inventory.id] = {
          sku: inventory.sku,
          price: inventory.price,
          compare_at_price: inventory.compare_at_price,
          quantity: inventory.quantity,
          image: inventory.image.url,
          allow_addcart: inventory.allow_addcart,
          options: {}
        };
        inventory.options.forEach(function (option) {
          var id = option.title.th;
          product.inventories[inventory.id].options[id] = option.values.id;
          if (!product.options[id]) product.options[id] = {};
          product.options[id][option.values.id] = {
            name: option.values.title.th,
            position: option.values.position
          };
        });
      });

      if (data.group_type) {
        localStorage.setItem('typhoon-group', data.group_type);
      } else {
        localStorage.removeItem('typhoon-group');
      }

      if (data.only_one_accessory) this.accessories = '';
      return product;
    },
    computeProduct: function computeProduct() {
      var _this8 = this;

      var inventories = this.products.inventories;
      var productExists = false;
      Object.keys(inventories).some(function (inventory) {
        var sameProduct = true;
        var options = inventories[inventory].options;

        if (options) {
          Object.keys(options).forEach(function (option) {
            var valid = options[option].toString() === _this8.product.options[option];

            if (!valid) sameProduct = false;
          });
        }

        if (sameProduct) {
          _this8.product.id = inventory;
          _this8.product.sku = inventories[inventory].sku;

          _this8.updateURLQuery('matcode', inventories[inventory].sku);

          Object(_utils_addon__WEBPACK_IMPORTED_MODULE_17__["loggerAddon"])({
            event: 'Visit product',
            productId: _this8.products.id,
            matcode: inventories[inventory].sku
          });
          productExists = true;
        }
      });

      if (!productExists) {
        this.product.id = '';
      }
    },
    checkPoint: function checkPoint() {
      if (this.products.points[this.product.id]) {
        if (this.userBalance.point >= this.products.points[this.product.id].point) {
          this.showBalanceError = false;
        }
      }
    },
    changeProduct: function changeProduct(key, value) {
      if (this.product.options[key] === value) return;
      this.product.options[key] = value;
      this.computeProduct();
      var image = this.products.inventories[this.product.id].image;
      if (image) this.$refs.imageEle.goTo(image);
    },
    computePrice: function computePrice(key) {
      if (this.product.id) {
        var product = this.products.inventories[this.product.id];
        return product[key];
      }
    },
    updateURLQuery: function updateURLQuery(key, value) {
      var query = this.$route.query;
      query[key] = value;
      var newurl = "".concat(window.location.origin).concat(window.location.pathname, "?").concat(qs__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(query));
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-container[data-v-664164c1] {\n  padding: 24px 0;\n  width: 100%;\n  min-height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loading-container[fitHeight][data-v-664164c1] {\n  min-height: unset;\n}\n.loading-container .loading[data-v-664164c1] {\n  margin-right: 2px;\n  border-radius: 100%;\n  border: 4px solid #ff0000;\n  border-bottom-color: transparent;\n  height: 36px;\n  width: 36px;\n  background: 0 0 !important;\n  -webkit-animation: loading-data-v-664164c1 0.9s linear infinite;\n          animation: loading-data-v-664164c1 0.9s linear infinite;\n}\n.loading-container .loading-text[data-v-664164c1],\n.loading-container .processing-text[data-v-664164c1] {\n  line-height: 24px;\n  text-align: center;\n  margin-left: 2px;\n  margin-top: 20px;\n  font-size: 22px;\n  color: #777777;\n}\n.loading-container .processing-text[data-v-664164c1] {\n  color: #484848;\n  font-size: 24px;\n}\n@-webkit-keyframes loading-data-v-664164c1 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-data-v-664164c1 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".product_promo {\n  font-size: 1.5em;\n  word-break: break-all;\n}\n.product_promo img {\n  max-width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-container[data-v-71d4d25b] {\n  background-color: #fff;\n}\n.store_container[data-v-71d4d25b] {\n  background-color: #fff;\n  padding: 30px 26px;\n}\n.slanted_container[data-v-71d4d25b] {\n  height: 125px;\n  background: #fff;\n  border-bottom-left-radius: 125px;\n  overflow: hidden;\n  position: relative;\n}\n.slanted_container .slanted[data-v-71d4d25b] {\n  width: 1120px;\n  height: 88px;\n  margin-top: -87px;\n  bottom: -51px;\n  background: #edeff3;\n  position: absolute;\n  transform: rotate(-5deg);\n}\n@media screen and (max-width: 1000px) {\n.store_container[data-v-71d4d25b] {\n    padding: 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".store_container .product_container[data-v-71d4d25b] {\n  border: 2px solid #f7f7f7;\n}\n.store_container .product_container .product_header[data-v-71d4d25b] {\n  background-color: #f7f7f7;\n  color: #666;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  font-family: \"TrueMedium\";\n  font-size: 32px;\n}\n.store_container .product_container .product_header .sprite-icons[data-v-71d4d25b] {\n  transform: rotate(90deg);\n}\n.store_container .product_container .product_header .product_header_content[data-v-71d4d25b] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 16px;\n}\n.store_container .product_container .product_header .title[data-v-71d4d25b] {\n  flex: 1;\n  font-size: 33px;\n  white-space: nowrap;\n  margin-right: 24px;\n}\n.store_container .product_container .product_header .product_info[data-v-71d4d25b] {\n  font-family: \"TrueBold\";\n  line-height: 24px;\n}\n.store_container .product_container .product_header .product_info .product_name[data-v-71d4d25b] {\n  color: #555;\n}\n.store_container .product_container .product_header .product_info .product_color[data-v-71d4d25b] {\n  color: #989898;\n}\n.store_container .product_container .product_content[data-v-71d4d25b] {\n  padding: 40px 20px 0;\n  display: flex;\n}\n.store_container .product_container .product_content .product_image[data-v-71d4d25b] {\n  width: 40%;\n  text-align: center;\n}\n.store_container .product_container .product_content .product_image img[data-v-71d4d25b] {\n  max-width: 80%;\n}\n.store_container .product_container .product_content .product_details[data-v-71d4d25b] {\n  width: 60%;\n}\n.store_container .product_container .product_promo[data-v-71d4d25b] {\n  padding: 0 30px 30px;\n}\n.store_container .product_container .product_details_container[data-v-71d4d25b] {\n  display: flex;\n  flex-direction: column;\n  font-size: 28px;\n  line-height: 28px;\n  font-family: \"TrueMedium\";\n}\n.store_container .product_container .product_details_container .product_detail[data-v-71d4d25b] {\n  display: flex;\n  margin-bottom: 28px;\n}\n.store_container .product_container .product_details_container .product_detail.balance_point[data-v-71d4d25b] {\n  margin-top: -10px;\n}\n.store_container .product_container .product_details_container .product_detail.mnp[data-v-71d4d25b] {\n  margin-bottom: 16px;\n}\n.store_container .product_container .product_details_container .product_label[data-v-71d4d25b] {\n  flex: 1;\n  padding-right: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  color: #000;\n  min-width: 100px;\n}\n.store_container .product_container .product_details_container .product_label.align-flex-start[data-v-71d4d25b] {\n  align-items: flex-start;\n}\n.store_container .product_container .product_details_container .product_option[data-v-71d4d25b] {\n  display: flex;\n  padding-left: 8px;\n  flex: 3;\n  align-items: center;\n}\n.store_container .product_container .product_details_container .product_option.title[data-v-71d4d25b] {\n  color: #333;\n  font-size: 30px;\n  line-height: 20px;\n  font-family: \"TrueBold\";\n}\n.store_container .product_container .product_details_container .product_option.grid[data-v-71d4d25b] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  grid-gap: 2px;\n}\n.store_container .product_container .product_details_container .product_option.grid .option[data-v-71d4d25b] {\n  margin-right: 0;\n}\n.store_container .product_container .product_details_container .product_option.price[data-v-71d4d25b] {\n  align-items: baseline;\n  font-size: 22px;\n}\n.store_container .product_container .product_details_container .product_option.price span[data-v-71d4d25b] {\n  font-size: 48px;\n  line-height: 36px;\n  margin-right: 8px;\n}\n.store_container .product_container .product_details_container .product_option.price span.line-through[data-v-71d4d25b] {\n  margin-top: 6px;\n  line-height: 28px;\n  font-size: 35px;\n  text-decoration: line-through;\n  color: #ccc;\n}\n.store_container .product_container .product_details_container .product_option.status[data-v-71d4d25b] {\n  font-family: \"TrueBold\";\n}\n.store_container .product_container .product_details_container .product_option .green[data-v-71d4d25b] {\n  color: #269717;\n  line-height: 27px;\n}\n.store_container .product_container .product_details_container .product_option .red[data-v-71d4d25b] {\n  color: #ee3124;\n  line-height: 27px;\n}\n.store_container .product_container .product_details_container .product_option .red.coupon-code[data-v-71d4d25b] {\n  line-height: 22px;\n}\n.store_container .product_container .product_details_container .product_option .orange[data-v-71d4d25b] {\n  color: #F19E38;\n  line-height: 27px;\n}\n.store_container .product_container .product_details_container .product_option .option[data-v-71d4d25b] {\n  border-radius: 8px;\n  margin-right: 8px;\n  border: 3px solid #fff;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #fff;\n  padding: 6px 8px;\n  background: linear-gradient(to bottom, #585858 0%, #040404 100%);\n  min-width: 86px;\n}\n.store_container .product_container .product_details_container .product_option .option.selected[data-v-71d4d25b] {\n  border-color: #ee3023;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container[data-v-71d4d25b] {\n  background-color: #f5f5f5;\n  border: 1px dashed #cccccc;\n  width: 100%;\n  padding: 12px;\n  border-radius: 8px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .text[data-v-71d4d25b] {\n  font-family: \"TrueBold\";\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  color: #e9242b;\n  margin-bottom: 4px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .text img[data-v-71d4d25b] {\n  width: 18px;\n  height: 18px;\n  margin: 0 4px 2px 4px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .text .number[data-v-71d4d25b] {\n  font-size: 30px;\n  display: inline-flex;\n  align-items: baseline;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .text .black[data-v-71d4d25b] {\n  color: #000;\n  font-family: \"TrueMedium\";\n  font-size: 18px;\n  margin: 0 4px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .button[data-v-71d4d25b] {\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 20px;\n  background-color: #e9242b;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .button[disabled][data-v-71d4d25b] {\n  background-color: #9e9e9e;\n  pointer-events: none;\n  cursor: default;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container[data-v-71d4d25b] {\n  border-radius: 5px;\n  background-color: #e5e5e5;\n  padding: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container.error[data-v-71d4d25b] {\n  background: #ffeaec;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container .gray_text[data-v-71d4d25b] {\n  font-family: \"TrueMedium\";\n  font-size: 18px;\n  color: #000;\n  line-height: 21px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container .gray_text .number[data-v-71d4d25b] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  color: #e9242b;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container .error_text[data-v-71d4d25b] {\n  color: #e9242b;\n  font-size: 18px;\n  line-height: 18px;\n  width: 50%;\n  max-width: 165px;\n}\n.store_container .product_container .product_details_container .product_option .balance_point_container .gray_container .button img[data-v-71d4d25b] {\n  filter: brightness(0) invert(1);\n  width: 16px;\n  height: 18px;\n  margin-left: 6px;\n}\n.store_container .product_container .product_details_container .product_option .disable_addcart .message[data-v-71d4d25b] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 4px;\n  font-size: 22px;\n  margin-top: 16px;\n  padding: 8px 12px;\n  line-height: 20px;\n}\n.tab_container[data-v-71d4d25b] {\n  margin: 48px 0;\n  display: flex;\n  justify-content: center;\n  border-bottom: 6px solid #666;\n}\n.tab_container .tab[data-v-71d4d25b] {\n  background-color: #666;\n  height: 42px;\n  font-size: 23px;\n  font-family: \"TrueMedium\";\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 10px;\n  border-radius: 8px 8px 0 0;\n  cursor: pointer;\n}\n.red-bg-button[data-v-71d4d25b] {\n  box-shadow: none;\n}\n.inquiry_container[data-v-71d4d25b] {\n  background: #fff;\n  padding: 30px 30px 16px 30px;\n  text-align: center;\n  font-size: 18px;\n  line-height: 18px;\n}\n.inquiry_container .inquiry[data-v-71d4d25b] {\n  max-width: 600px;\n  margin: auto;\n}\n.truecard_msg[data-v-71d4d25b] {\n  font-size: 22px;\n  line-height: 20px;\n  white-space: pre-line;\n  margin-bottom: 12px;\n}\n@media screen and (max-width: 1000px) {\n.store_container .product_container .product_header[data-v-71d4d25b] {\n    height: 74px;\n    padding: 0 20px;\n}\n.store_container .product_container .product_header .sprite-icons[data-v-71d4d25b] {\n    height: 19px;\n    width: 10px;\n}\n.store_container .product_container .product_header .product_header_content[data-v-71d4d25b] {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.store_container .product_container .product_header .product_header_content .title[data-v-71d4d25b] {\n    font-size: 34px;\n    line-height: 23px;\n    margin-bottom: 4px;\n}\n.store_container .product_container .product_header .product_header_content .product_info[data-v-71d4d25b] {\n    font-size: 22px;\n    line-height: 16px;\n}\n.store_container .product_container .product_content[data-v-71d4d25b] {\n    flex-direction: column;\n}\n.store_container .product_container .product_content .product_image[data-v-71d4d25b],\n.store_container .product_container .product_content .product_details[data-v-71d4d25b] {\n    width: 100%;\n}\n.store_container .product_container[data-v-71d4d25b] {\n    border: none;\n}\n.store_container .product_container .product_details_container[data-v-71d4d25b] {\n    font-size: 25px;\n}\n.store_container .product_container .product_details_container .product_detail[data-v-71d4d25b] {\n    margin-bottom: 16px;\n}\n.store_container .product_container .product_details_container .product_detail.balance_point .product_label[data-v-71d4d25b] {\n    display: none;\n}\n.store_container .product_container .product_details_container .product_detail.balance_point .product_option[data-v-71d4d25b] {\n    padding-left: 0;\n}\n.store_container .product_container .product_details_container .product_label[data-v-71d4d25b] {\n    justify-content: flex-start;\n    text-align: left;\n}\n.store_container .product_container .product_details_container .product_option .option[data-v-71d4d25b] {\n    margin-right: 4px;\n}\n.store_container .product_container .product_promo[data-v-71d4d25b] {\n    padding: 0 20px 20px;\n}\n.tab_container[data-v-71d4d25b] {\n    margin: 48px 0 24px 0;\n}\n.red-bg-button[data-v-71d4d25b] {\n    min-width: 120px;\n}\n}\n@media screen and (max-width: 480px) {\n.store_container .product_container .product_header[data-v-71d4d25b] {\n    height: 64px;\n}\n.store_container .product_container .product_header .product_header_content .title[data-v-71d4d25b] {\n    font-size: 28px;\n    line-height: 20px;\n}\n.store_container .product_container .product_header .product_header_content .product_info[data-v-71d4d25b] {\n    font-size: 18px;\n    line-height: 15px;\n}\n.store_container .product_container .product_content[data-v-71d4d25b] {\n    padding-top: 20px;\n}\n.store_container .product_container .product_details_container[data-v-71d4d25b] {\n    font-size: 20px;\n    line-height: 22px;\n}\n.store_container .product_container .product_details_container .product_label[data-v-71d4d25b] {\n    min-width: 86px;\n}\n.store_container .product_container .product_details_container .product_detail[data-v-71d4d25b] {\n    margin-bottom: 12px;\n}\n.store_container .product_container .product_details_container .product_option.title[data-v-71d4d25b] {\n    font-size: 26px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "loading-container", attrs: { fitHeight: _vm.fitHeight } },
    [
      _c("div", { staticClass: "loading" }),
      _vm._v(" "),
      _vm.isProcessing
        ? _c("div", { staticClass: "processing-text" }, [
            _c("div", [_vm._v(_vm._s(_vm.processing[_vm.$i18n.locale]))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.noRefresh[_vm.$i18n.locale]))]),
          ])
        : _c("div", { staticClass: "loading-text" }, [
            _vm._v(_vm._s(_vm.loading[_vm.$i18n.locale])),
          ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true& ***!
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
      _vm.loading
        ? _c("loading-element", { staticClass: "loading-container" })
        : [
            _c("banner-element"),
            _vm._v(" "),
            _c("div", { staticClass: "store_container" }, [
              _c("div", { staticClass: "product_container" }, [
                _c("div", { staticClass: "product_header" }, [
                  _c("div", {
                    staticClass: "arw-orange-sm-right sprite-icons",
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "product_header_content" }, [
                    _c("div", { staticClass: "title" }, [
                      _vm._v(_vm._s(_vm.Content.selectmodel[_vm.$i18n.locale])),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "product_info" }, [
                      _c("span", { staticClass: "product_name" }, [
                        _vm._v(
                          "\n              " + _vm._s(_vm.products.title) + " "
                        ),
                        _vm.product.options.ความจุ
                          ? _c("span", [
                              _vm._v(
                                "- " +
                                  _vm._s(
                                    _vm.products.options.ความจุ[
                                      _vm.product.options.ความจุ
                                    ].name
                                  ) +
                                  " / "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _vm.product.options.สี
                        ? _c("span", { staticClass: "product_color" }, [
                            _vm._v(
                              _vm._s(_vm.Content.สี[_vm.$i18n.locale]) +
                                " " +
                                _vm._s(
                                  _vm.products.options.สี[
                                    _vm.product.options.สี
                                  ].name
                                )
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "product_content" },
                  [
                    _c("image-element", {
                      ref: "imageEle",
                      attrs: { images: _vm.images },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "product_details" }, [
                      _c(
                        "div",
                        { staticClass: "product_details_container" },
                        [
                          _c("div", { staticClass: "product_detail" }, [
                            _c("div", { staticClass: "product_label" }, [
                              _vm._v(
                                _vm._s(_vm.Content.modelname[_vm.$i18n.locale])
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "product_option title" },
                              [
                                _vm.products.product_type === "truecard" &&
                                _vm.user &&
                                _vm.truecard
                                  ? [
                                      _vm._v(
                                        _vm._s(_vm.truecard.product_detail.name)
                                      ),
                                    ]
                                  : [_vm._v(_vm._s(_vm.products.title))],
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "product_detail" }, [
                            _c("div", { staticClass: "product_label" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "product_option" },
                              [
                                _vm.product.product_type === "mnp"
                                  ? [
                                      _c("clm-benefit-element", {
                                        attrs: {
                                          type: "demo",
                                          campCode: _vm.campCode,
                                          "product-id": _vm.products.id,
                                        },
                                      }),
                                    ]
                                  : [
                                      _c("clm-benefit-element", {
                                        attrs: {
                                          type: "demo",
                                          "product-type":
                                            _vm.products.product_type,
                                          "product-id": _vm.products.id,
                                          promotion: _vm.promotion,
                                          matcode: _vm.$route.query.matcode,
                                          promotion_type: _vm.promotion_type,
                                          campCode: _vm.campCode,
                                        },
                                        model: {
                                          value: _vm.subModule,
                                          callback: function ($$v) {
                                            _vm.subModule = $$v
                                          },
                                          expression: "subModule",
                                        },
                                      }),
                                    ],
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.products.product_type !== "truecard"
                            ? _vm._l(
                                _vm.products.options,
                                function (options, key) {
                                  return _c(
                                    "div",
                                    { key: key, staticClass: "product_detail" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "product_label" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.Content[key]
                                                ? _vm.Content[key][
                                                    _vm.$i18n.locale
                                                  ]
                                                : key
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "product_option grid" },
                                        _vm._l(
                                          _vm.sortedOptions(options),
                                          function (option) {
                                            return _c(
                                              "div",
                                              {
                                                key: option.id,
                                                staticClass: "option",
                                                class: [
                                                  option.id ===
                                                  _vm.product.options[key]
                                                    ? "selected"
                                                    : "",
                                                ],
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.changeProduct(
                                                      key,
                                                      option.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(option.name) +
                                                    "\n                    "
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  )
                                }
                              )
                            : [
                                _c("div", { staticClass: "product_detail" }, [
                                  _c("div", { staticClass: "product_label" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "product_option" }, [
                                    _c("div", { staticClass: "truecard_msg" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.Content.truecard_msg[
                                            _vm.$i18n.locale
                                          ]
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ],
                          _vm._v(" "),
                          _vm.product.id &&
                          _vm.normalPrice !== 1 &&
                          _vm.normalPrice !== _vm.specialPrice
                            ? _c("div", { staticClass: "product_detail" }, [
                                _c("div", { staticClass: "product_label" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.Content.regularprice[_vm.$i18n.locale]
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product_option price" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "line-through" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.computeBalance(_vm.normalPrice)
                                          )
                                        ),
                                      ]
                                    ),
                                    _vm._v("฿\n                "),
                                  ]
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.id
                            ? _c(
                                "div",
                                { staticClass: "product_detail special_price" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "product_label" },
                                    [
                                      _vm.showDiscountOnTop
                                        ? [
                                            _vm._v(
                                              _vm._s(
                                                _vm.Content.regularprice[
                                                  _vm.$i18n.locale
                                                ]
                                              )
                                            ),
                                          ]
                                        : [
                                            _vm._v(
                                              _vm._s(
                                                _vm.Content.specialprice[
                                                  _vm.$i18n.locale
                                                ]
                                              )
                                            ),
                                          ],
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm.specialPrice === "0"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "product_option status",
                                        },
                                        [
                                          _c("span", { staticClass: "red" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.Content.free[
                                                  _vm.$i18n.locale
                                                ]
                                              ) + " *"
                                            ),
                                          ]),
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        { staticClass: "product_option price" },
                                        [
                                          _c("span", { staticClass: "red" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.computeBalance(
                                                  _vm.actualSpecialPrice
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v("฿\n                "),
                                        ]
                                      ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.id && _vm.status
                            ? _c("div", { staticClass: "product_detail" }, [
                                _c("div", { staticClass: "product_label" }, [
                                  _vm._v(
                                    _vm._s(_vm.Content.status[_vm.$i18n.locale])
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product_option status" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        class: _vm.status.status
                                          ? "green"
                                          : "red",
                                      },
                                      [_vm._v(_vm._s(_vm.status.value))]
                                    ),
                                  ]
                                ),
                              ])
                            : _c("div", { staticClass: "product_detail" }, [
                                _c("div", { staticClass: "product_label" }, [
                                  _vm._v(
                                    _vm._s(_vm.Content.status[_vm.$i18n.locale])
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product_option status" },
                                  [
                                    _c("span", { staticClass: "red" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.Content.outofstock[
                                            _vm.$i18n.locale
                                          ]
                                        )
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                          _vm._v(" "),
                          _vm.product.product_type === "mnp"
                            ? [
                                _vm.productInfo.sim_data.sim_type === "postpaid"
                                  ? [
                                      _c(
                                        "div",
                                        { staticClass: "product_detail mnp" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "product_label align-flex-start",
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.Content
                                                    .mnp_select_package[
                                                    _vm.$i18n.locale
                                                  ]
                                                )
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "product_option" },
                                            [
                                              _c("mnp-element", {
                                                attrs: {
                                                  disabled:
                                                    _vm.product.id &&
                                                    _vm.status.status,
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        { staticClass: "product_detail mnp" },
                                        [
                                          _c("div", {
                                            staticClass: "product_label",
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "product_option",
                                          }),
                                        ]
                                      ),
                                    ],
                              ]
                            : [
                                [
                                  "device_bundle_existing",
                                  "device_bundle_new_customer",
                                ].includes(_vm.product.product_type) ||
                                _vm.products.multiCampaign
                                  ? _c("device-bundle", {
                                      attrs: {
                                        promotion_type: _vm.promotion_type,
                                        products: _vm.products,
                                        product: _vm.product,
                                        "normal-price": _vm.normalPrice,
                                        "special-price": _vm.specialPrice,
                                        demo: _vm.demo,
                                      },
                                      on: {
                                        promotion_type: function ($event) {
                                          _vm.promotion_type = $event
                                        },
                                      },
                                      model: {
                                        value: _vm.promotion,
                                        callback: function ($$v) {
                                          _vm.promotion = $$v
                                        },
                                        expression: "promotion",
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isDeviceBundleNewCustomer ||
                                _vm.isMnpBundling ||
                                _vm.isMnpBundlingExisting ||
                                _vm.isMnpBundlingOneStep ||
                                _vm.isPre2Post ||
                                (["truemoveh", "trueonline"].includes(
                                  this.promotion
                                ) &&
                                  _vm.products.multiCampaign)
                                  ? _c(
                                      "div",
                                      { staticClass: "product_detail" },
                                      [
                                        _c("div", {
                                          staticClass:
                                            "product_label align-flex-start",
                                        }),
                                        _vm._v(" "),
                                        _c("device-bundle-promo", {
                                          attrs: {
                                            products: _vm.products,
                                            product: _vm.product,
                                            promotion: _vm.promotion,
                                            "special-price": _vm.specialPrice,
                                          },
                                          model: {
                                            value: _vm.promotion_sim,
                                            callback: function ($$v) {
                                              _vm.promotion_sim = $$v
                                            },
                                            expression: "promotion_sim",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isDeviceBundleExisting
                                  ? _c(
                                      "div",
                                      { staticClass: "product_detail" },
                                      [
                                        _c("div", {
                                          staticClass:
                                            "product_label align-flex-start",
                                        }),
                                        _vm._v(" "),
                                        _c("device-bundle-existing", {
                                          attrs: {
                                            existing_bundle:
                                              _vm.existing_bundle,
                                            products: _vm.products,
                                            product: _vm.product,
                                            promotion: _vm.promotion,
                                            "special-price": _vm.specialPrice,
                                          },
                                          on: {
                                            "type-changed": function ($event) {
                                              _vm.existing_bundle.type = $event
                                            },
                                            "pp-changed": function ($event) {
                                              _vm.existing_bundle.pp = $event
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ],
                          _vm._v(" "),
                          _vm.productInfo.accessories && _vm.showAddon
                            ? _c(
                                "div",
                                { staticClass: "product_detail" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "product_label align-flex-start",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.Content.Accessories[
                                            _vm.$i18n.locale
                                          ]
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("promo-addon", {
                                    attrs: {
                                      name: "accessories",
                                      type: _vm.productInfo.only_one_accessory
                                        ? "radio"
                                        : "checkbox",
                                      promos: _vm.productInfo.accessories,
                                    },
                                    model: {
                                      value: _vm.accessories,
                                      callback: function ($$v) {
                                        _vm.accessories = $$v
                                      },
                                      expression: "accessories",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.productInfo.entertainment_packages &&
                          _vm.showAddon
                            ? _c(
                                "div",
                                { staticClass: "product_detail" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "product_label align-flex-start",
                                    },
                                    [_vm._v("Entertainment Package")]
                                  ),
                                  _vm._v(" "),
                                  _c("promo-addon", {
                                    attrs: {
                                      name: "entertainment_packages",
                                      type: "radio",
                                      promos:
                                        _vm.productInfo.entertainment_packages,
                                    },
                                    model: {
                                      value: _vm.entertainment_packages,
                                      callback: function ($$v) {
                                        _vm.entertainment_packages = $$v
                                      },
                                      expression: "entertainment_packages",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.products.product_type === "truecard"
                            ? _c("div", { staticClass: "product_detail" }, [
                                _c("div", { staticClass: "product_label" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "product_option" }, [
                                  _c("div", { staticClass: "truecard_msg" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.truecard_login_msg[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]),
                                ]),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.coupon
                            ? _c("div", { staticClass: "product_detail" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "product_label align-flex-start",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.discount_label[
                                          _vm.$i18n.locale
                                        ]
                                      )
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "product_option" }, [
                                  _c("div", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.Content.discount_description
                                          .enter_the_code[_vm.$i18n.locale]
                                      ) + " "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "red coupon-code" },
                                      [_vm._v(_vm._s(_vm.coupon.code))]
                                    ),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.Content.discount_description
                                            .in_order_summary_page_to_get[
                                            _vm.$i18n.locale
                                          ]
                                        ) +
                                        " " +
                                        _vm._s(_vm.coupon.discount) +
                                        " " +
                                        _vm._s(
                                          _vm.Content.discount_description
                                            .on_top_discount[_vm.$i18n.locale]
                                        )
                                    ),
                                  ]),
                                ]),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.id && _vm.status.status
                            ? _c("div", { staticClass: "product_detail" }, [
                                _c("div", { staticClass: "product_label" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product_option" },
                                  [
                                    _vm.products.product_type === "mnp"
                                      ? void 0
                                      : _vm.products.product_type ===
                                          "device_bundle_new_customer" &&
                                        _vm.promotion
                                      ? void 0
                                      : void 0,
                                  ],
                                  2
                                ),
                              ])
                            : _vm._e(),
                        ],
                        2
                      ),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tab_container" }, [
                  _c("div", { staticClass: "tab" }, [
                    _vm._v(_vm._s(_vm.Content.specsfeatures[_vm.$i18n.locale])),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product_promo" }, [
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.products.body_html[_vm.$i18n.locale] ||
                          _vm.products.body_html.th
                      ),
                    },
                  }),
                ]),
              ]),
            ]),
          ],
      _vm._v(" "),
      _vm._m(0),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slanted_container" }, [
      _c("div", { staticClass: "slanted" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/loading.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/loading.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=664164c1&scoped=true& */ "./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/components/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "664164c1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=style&index=0&id=664164c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_664164c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=664164c1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loading.vue?vue&type=template&id=664164c1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_664164c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/content.json":
/*!********************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/content.json ***!
  \********************************************************/
/*! exports provided: selectmodel, modelname, ความจุ, สี, regularprice, specialprice, redeemtruepoint, points, baht, yourtruepoint, redeem, checkbalance, balanceerror, buynow, buynow_verify, buynow_postpaid, status, instock, outofstock, specsfeatures, free, promotion, start_at, device_only, advance_payment, signin, truecard_msg, truecard_login_msg, unable_add_cart, hotdeal, hotdeal_existing, user_package, mnp_user_package, pretopost_user_package, user_package_above, user_package_advance_payment, mnp_select_package, mnp_select_prepaid, payLater, payLaterContent, payLaterRegister, select_promotion, discount_label, discount_description, Accessories, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"selectmodel\":{\"th\":\"เลือกรุ่น\",\"en\":\"Select Model\"},\"modelname\":{\"th\":\"ชื่อรุ่น\",\"en\":\"Phone\"},\"ความจุ\":{\"th\":\"ความจุ\",\"en\":\"Capacity\"},\"สี\":{\"th\":\"สี\",\"en\":\"Color\"},\"regularprice\":{\"th\":\"ราคาปกติ\",\"en\":\"Regular price\"},\"specialprice\":{\"th\":\"ราคาปกติ\",\"en\":\"Retail price\"},\"redeemtruepoint\":{\"th\":\"แลกทรูพอยท์\",\"en\":\"Redeem TruePoint\"},\"points\":{\"th\":\"คะแนน\",\"en\":\"points\"},\"baht\":{\"th\":\"฿\",\"en\":\"฿\"},\"yourtruepoint\":{\"th\":\"คะแนนคงเหลือของคุณคือ\",\"en\":\"Your TruePoint\"},\"redeem\":{\"th\":\"แลกทรูพอยท์\",\"en\":\"Redeem\"},\"checkbalance\":{\"th\":\"ตรวจสอบคะแนนคงเหลือ\",\"en\":\"Check Balance Point\"},\"balanceerror\":{\"th\":\"ไม่สามารถแลกทรูพอยท์ได้ เนื่องจากคะแนนสะสมทรูพอยท์ของคุณไม่เพียงพอ\",\"en\":\"Sorry, your balance point is not enough to redeem.\"},\"buynow\":{\"th\":\"ซื้อเลย\",\"en\":\"Buy Now\"},\"buynow_verify\":{\"th\":\"ซื้อเลย\",\"en\":\"Buy Now\"},\"buynow_postpaid\":{\"th\":\"เลือกเบอร์ที่คุณต้องการ\",\"en\":\"Choose the number you want\"},\"status\":{\"th\":\"สถานะสินค้า\",\"en\":\"Status\"},\"instock\":{\"th\":\"มีสินค้า\",\"en\":\"In-Stock\"},\"outofstock\":{\"th\":\"ไม่มีสินค้า\",\"en\":\"Out-of-Stock\"},\"specsfeatures\":{\"th\":\"รายละเอียดเพิ่มเติม\",\"en\":\"More detail\"},\"free\":{\"en\":\"Free\",\"th\":\"ฟรี\"},\"promotion\":{\"en\":\"Promotion\",\"th\":\"โปรโมชั่น\"},\"start_at\":{\"en\":\"Start at\",\"th\":\"เริ่มต้น\"},\"device_only\":{\"en\":\"Handset only\",\"th\":\"เครื่องเปล่า\"},\"advance_payment\":{\"th\":\"ชำระค่าบริการล่วงหน้า\",\"en\":\"Advance Payment\"},\"signin\":{\"th\":\"เข้าสู่ระบบ\",\"en\":\"Sign In\"},\"truecard_msg\":{\"th\":\"ค่าจัดส่งบัตรทรูการ์ด: 25.-/ใบ \\n\\n ลูกค้าสามารถอัพเกรดประเภทของทรูการ์ดได้ เมื่อสั่งซื้อร่วมกับซิมหรือเครื่องพร้อมแพ็กเกจรายเดือน \\n\\n จัดส่งแบบลงทะเบียนโดยไปรษณีย์ไทยประมาณ 15 วันทำการนับจากวันที่สั่งบัตรทรูการ์ด \\n (กรณีสั่งบัตรทรูการ์ดพร้อมสินค้าอื่นๆ จะจัดส่งแยกกัน)\",\"en\":\"True Card Delivery fee: 25 thb/item \\n\\n Customer can upgrade True Card by purchasing sim or device with monthly package \\n\\n Delivery by Thailand Post will be approximately 15 days from the order date (the delivery will be separated in the case that the True Card was ordered with other products)\"},\"truecard_login_msg\":{\"th\":\"กรุณาเข้าสู่ระบบด้วยบัญชีทรูไอดีก่อนทำรายการ\",\"en\":\"Please login TrueID account before add to cart\"},\"unable_add_cart\":{\"th\":\"ขออภัยค่ะไม่สามารถทำรายการพร้อมกันภายในออเดอร์นี้ได้ กรุณาชำระเงินรายการปัจจุบันและทำรายการซื้อเพิ่มเติมใหม่อีกครั้ง\",\"en\":\"We have detected that you already have another service item or product service item in your shopping cart. Sorry, but you are unable to verify for this item in the same checkout transaction.\"},\"hotdeal\":{\"th\":\"Hot Deal New ลูกค้าเปิดเบอร์ใหม่ (ราคาลดพิเศษ / ชำระค่าบริการล่วงหน้า / พร้อมแพ็กเกจ)\",\"en\":\"Hot Deal New Customer (Discount / Advance Payment / Package)\"},\"hotdeal_existing\":{\"th\":\"ราคาลดพิเศษ\",\"en\":\"Special Price\"},\"user_package\":{\"th\":\"ลูกค้าปัจจุบัน พร้อมสมัครแพ็กเกจ\",\"en\":\"Apply to package\"},\"mnp_user_package\":{\"th\":\"ย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจ\",\"en\":\"Move to us with package\"},\"pretopost_user_package\":{\"th\":\"เปลี่ยนเติมเงินเป็นรายเดือน พร้อมสมัครแพ็กเกจ\",\"en\":\"Switch to Postpaid with package\"},\"user_package_above\":{\"th\":\"ขึ้นไป\",\"en\":\"and up\"},\"user_package_advance_payment\":{\"th\":\"ชำระค่าบริการล่วงหน้า\",\"en\":\"with advance payment\"},\"mnp_select_package\":{\"th\":\"เลือกแพกเก็จ\",\"en\":\"Select Package\"},\"mnp_select_prepaid\":{\"th\":\"เลือกแพ็กเกจ\",\"en\":\"Choose Package\"},\"payLater\":{\"th\":\"วงเงินพร้อมใช้\",\"en\":\"Loan\"},\"payLaterContent\":{\"th\":\"Pay Later\",\"en\":\"TrueMoney PayLater\"},\"payLaterRegister\":{\"th\":\"กดรับเลย\",\"en\":\"Apply Online>\"},\"select_promotion\":{\"th\":\"เลือกโปรโมชั่นที่จะใช้กับ\",\"en\":\"Select promotion for\"},\"discount_label\":{\"th\":\"โค้ดส่วนลด\",\"en\":\"Discount Code\"},\"discount_description\":{\"enter_the_code\":{\"th\":\"ใส่โค้ดส่วนลด\",\"en\":\"Enter the code\"},\"in_order_summary_page_to_get\":{\"th\":\"ในหน้าสรุปรายการสั่งซื้อรับส่วนลดเพิ่มอีก\",\"en\":\"in Order Summary page to get\"},\"on_top_discount\":{\"th\":\"ทันที\",\"en\":\"on-top discount.\"}},\"Accessories\":{\"th\":\"อุปกรณ์เสริม\",\"en\":\"Accessories\"}}");

/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=71d4d25b&scoped=true& */ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& */ "./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&");
/* harmony import */ var _style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& */ "./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71d4d25b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/preview/mnpsim/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=71d4d25b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/mnpsim/index.vue?vue&type=template&id=71d4d25b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d4d25b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/store.scss?vue&type=style&index=1&id=71d4d25b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/mnpsim/style.scss?vue&type=style&index=2&id=71d4d25b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_2_id_71d4d25b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);