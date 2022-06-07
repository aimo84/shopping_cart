(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    base_url: String,
    logo: String,
    description: String,
    content: String,
    themeColor: String,
    buttonColor: String,
    className: String,
    pageLink: String,
    type: String
  },
  data: function data() {
    return {};
  },
  computed: {
    imageUrl: function imageUrl() {
      if (this.base_url) {
        return "".concat(this.base_url).concat(this.logo);
      } else {
        return "".concat(this.logo);
      }
    },
    themeStyle: function themeStyle() {
      return {
        background: this.themeColor
      };
    },
    buttonStyle: function buttonStyle() {
      return {
        color: this.buttonColor,
        borderColor: this.themeColor
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/new-level-a/see-more-btn.vue");
/* harmony import */ var _deal_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-item.vue */ "./resources/js/pages/new-level-a/deal-item.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SeeMoreButtonElement: _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DealElement: _deal_item_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    dealsConfig: Object,
    dealsList: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_banner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-banner.vue */ "./resources/js/pages/new-level-a/main-banner.vue");
/* harmony import */ var _stick_banner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stick-banner.vue */ "./resources/js/pages/new-level-a/stick-banner.vue");
/* harmony import */ var _deals_container_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deals-container.vue */ "./resources/js/pages/new-level-a/deals-container.vue");
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/new-level-a/see-more-btn.vue");
/* harmony import */ var _products_container_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-container.vue */ "./resources/js/pages/new-level-a/products-container.vue");
/* harmony import */ var _products_container_scroll_left_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-container-scroll-left.vue */ "./resources/js/pages/new-level-a/products-container-scroll-left.vue");
/* harmony import */ var _products_container_scroll_right_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-container-scroll-right.vue */ "./resources/js/pages/new-level-a/products-container-scroll-right.vue");
/* harmony import */ var _top_brands_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-brands.vue */ "./resources/js/pages/new-level-a/top-brands.vue");
/* harmony import */ var _components_dialog_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/dialog.vue */ "./resources/js/components/dialog.vue");
/* harmony import */ var _popup_advertisement_component_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popup-advertisement-component.vue */ "./resources/js/pages/new-level-a/popup-advertisement-component.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainBannerElement: _main_banner_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    StickBannerElement: _stick_banner_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DealsFromPartner: _deals_container_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SeeMoreButtonElement: _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ProductsContainerElement: _products_container_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProductsContainerScrollLeftButtonElement: _products_container_scroll_left_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ProductsContainerScrollRightButtonElement: _products_container_scroll_right_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    TopBrandsElement: _top_brands_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    DialogElement: _components_dialog_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    PopupAdvertisementComponent: _popup_advertisement_component_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      templateTypeList: ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals'],
      templateFullTypeList: ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals', 'top_brands', 'deals_from_partner'],
      lvaConfigs: [],
      lvaContent: [],
      flashSaleDeadlineTime: null,
      flashSaleRemainingSeconds: null,
      flashSaleHour: null,
      flashSaleMinute: null,
      flashSaleSecond: null,
      flashSaleCampaign: [],
      isAdvertisementInfoNullOrNot: null
    };
  },
  computed: {
    isMobile: function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  },
  watch: {
    flashSaleRemainingSeconds: {
      handler: function handler(value) {
        var _this = this;

        if (value > 0) {
          setTimeout(function () {
            _this.flashSaleRemainingSeconds--;
            var totalSeconds = parseInt(_this.flashSaleRemainingSeconds, 10);
            _this.flashSaleHour = Math.floor(totalSeconds / 3600);
            _this.flashSaleMinute = Math.floor((totalSeconds - _this.flashSaleHour * 3600) / 60);
            _this.flashSaleSecond = totalSeconds - _this.flashSaleHour * 3600 - _this.flashSaleMinute * 60;

            if (_this.flashSaleHour < 10) {
              _this.flashSaleHour = '0' + _this.flashSaleHour;
            }

            if (_this.flashSaleMinute < 10) {
              _this.flashSaleMinute = '0' + _this.flashSaleMinute;
            }

            if (_this.flashSaleSecond < 10) {
              _this.flashSaleSecond = '0' + _this.flashSaleSecond;
            }
          }, 1000);
        }
      },
      immediate: true
    }
  },
  created: function created() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_13__["FETCH_ALL_CONTENT"], {
                code: 'Truestore_level_a_config'
              }).then(function (results) {
                _this2.lvaConfigs = results.config;
                results.content.forEach(function (resultContent, i) {
                  if (resultContent.key === 'new_arrivals_left' || resultContent.key === 'new_arrivals_right') {
                    _this2.lvaContent.push({
                      highlightProduct: {
                        isBannerDisplayFirst: resultContent.key.split('new_arrivals_')[1] === 'left'
                      },
                      newArrivalsList: resultContent.data
                    });
                  } else if (resultContent.key === 'flash_sale') {
                    _this2.lvaContent.push(resultContent.data.campaign_data);

                    _this2.flashSaleCampaign = resultContent.data.flash_sale_campaign;
                    var now = new Date();
                    var startDate = new Date(_this2.flashSaleCampaign.published_start.replace(/ /g, 'T'));
                    var endDate = new Date(_this2.flashSaleCampaign.published_end.replace(/ /g, 'T'));
                    startDate = startDate.setHours(startDate.getHours() + 7);
                    endDate = endDate.setHours(endDate.getHours() + 7);

                    if (startDate <= now && endDate >= now && _this2.flashSaleCampaign.status === 1) {
                      _this2.flashSaleDeadlineTime = new Date(endDate);
                      _this2.flashSaleRemainingSeconds = (_this2.flashSaleDeadlineTime.getTime() - now.getTime()) / 1000;
                    }
                  } else {
                    _this2.lvaContent.push(resultContent.data);
                  }
                });
              })["catch"](function () {});

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_13__["FECTH_LVA_POP_UP_ADVERTISEMENT"]);

            case 2:
              _this3.isAdvertisementInfoNullOrNot = _context2.sent;

              if (_this3.isAdvertisementInfoNullOrNot && _this3.isAdvertisementInfoNullOrNot.length > 0) {
                _this3.$refs.dialog.open();
              }

              _this3.$nextTick(function () {
                window.onscroll = function () {
                  if ( // For Chrome, Firefox, IE and Opera
                  document.documentElement.scrollTop > 100 || // For Safari
                  document.body.scrollTop > 100) {
                    document.getElementsByClassName('floating_menu')[0].style.display = 'block';
                  } else {
                    document.getElementsByClassName('floating_menu')[0].style.display = 'none';
                  }
                };
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: {
    scrollable: function scrollable(config) {
      return config.custom_fields.display_products && (config.custom_fields.display_products > 5 || config.custom_fields.template_type === 'flash_sale' && config.custom_fields.display_products > 6);
    },
    backToTop: function backToTop() {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["smoothScrollToElementInCommon"])('app');
    },
    smoothScrollToElement: function smoothScrollToElement(index) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["smoothScrollToElementInCommon"])(index);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_1__["Slide"]
  },
  props: {
    banners: Array
  },
  data: function data() {
    return {
      page: 0,
      paginationButtonTextShow: [],
      index: 0,
      autoplayTimeoutInMilliseconds: 8000,
      left: "<svg width=\"13\" height=\"22\" viewBox=\"0 0 13 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M11.4 21L1 11L11.4 1\" stroke=\"#CCCCCC\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>",
      right: "<svg width=\"13\" height=\"22\" viewBox=\"0 0 13 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1.6 0.999999L12 11L1.6 21\" stroke=\"#CCCCCC\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>",
      pageCurrent: 0,
      titleMobile: '',
      pagenumber: 8
    };
  },
  computed: {
    isMobile: function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  },
  watch: {
    '$i18n.locale': function $i18nLocale(value) {
      this.updatePaginationText();
    }
  },
  mounted: function mounted() {
    this.trackAnalytics('view');
    this.splitBanner(this.pagenumber);
    this.titleMobile = this.banners[0].title[this.$i18n.locale];
  },
  methods: {
    trackAnalytics: function trackAnalytics(type, key) {
      var promoKey = type === 'view' ? 'promoView' : 'promoClick';
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'internal_promotions',
        event_action: 'promotion_' + (type || 'view'),
        event_label: 'main_banner',
        ecommerce: Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, promoKey, {
          promotions: this.banners.map(function (banner, index) {
            var _banner$slug, _banner$description;

            return {
              id: (_banner$slug = banner.slug) === null || _banner$slug === void 0 ? void 0 : _banner$slug.th,
              name: (_banner$description = banner.description) === null || _banner$description === void 0 ? void 0 : _banner$description.th,
              creative: 'store-cat-slider',
              position: "slide-".concat(index + 1)
            };
          })
        })
      });
    },
    goToPage: function goToPage(bannerTitle) {
      var _this = this;

      this.banners.forEach(function (value, index) {
        if (value.title[_this.$i18n.locale] === bannerTitle) {
          _this.page = index;

          if (index >= _this.paginationButtonTextShow.length - 2 + _this.index) {
            var shiftIndex = _this.index - index + _this.paginationButtonTextShow.length;

            _this.paginationButtonTextShow.push(_this.banners[index + shiftIndex].title[_this.$i18n.locale]);

            _this.paginationButtonTextShow.shift();

            _this.index++;
          }

          if (_this.index > 0) {
            if (index === _this.index) {
              _this.paginationButtonTextShow.pop();

              _this.paginationButtonTextShow.unshift(_this.banners[index - 1].title[_this.$i18n.locale]);

              _this.index--;
            } else if (index === _this.index + 1) {
              _this.paginationButtonTextShow.pop();

              _this.paginationButtonTextShow.unshift(_this.banners[index - 2].title[_this.$i18n.locale]);

              _this.index--;
            }
          }
        }
      });
    },
    onPageChange: function onPageChange(pageCurrent) {
      this.pageCurrent = pageCurrent;
      this.titleMobile = this.banners[this.pageCurrent].title[this.$i18n.locale];

      if (pageCurrent === this.index + this.pagenumber - 2) {
        this.paginationButtonTextShow.push(this.banners[pageCurrent + 2].title[this.$i18n.locale]);
        this.paginationButtonTextShow.shift();
        this.index++;
      }

      if (this.index > 0) {
        var lastIndex = this.banners.length - this.paginationButtonTextShow.length;

        if (pageCurrent === this.index + 1) {
          this.paginationButtonTextShow.pop();
          this.paginationButtonTextShow.unshift(this.banners[pageCurrent - 2].title[this.$i18n.locale]);
          this.index--;
        }

        if (pageCurrent === this.index - lastIndex) {
          this.paginationButtonTextShow = [];

          for (var index = 0; index < this.pagenumber; index++) {
            this.paginationButtonTextShow.push(this.banners[index].title[this.$i18n.locale]);
          }

          this.index = 0;
        }
      } else {
        if (pageCurrent === this.banners.length - 1) {
          var _lastIndex = this.banners.length - this.paginationButtonTextShow.length;

          this.paginationButtonTextShow = [];

          for (var _index = _lastIndex; _index < this.banners.length; _index++) {
            this.paginationButtonTextShow.push(this.banners[_index].title[this.$i18n.locale]);
          }

          this.index = _lastIndex;
        }
      }
    },
    isCurrentPage: function isCurrentPage(bannerTitle) {
      return bannerTitle === this.banners[this.pageCurrent].title[this.$i18n.locale];
    },
    splitBanner: function splitBanner(pagenumber) {
      var _this2 = this;

      this.banners.forEach(function (value, index) {
        _this2.paginationButtonTextShow.push(value.title[_this2.$i18n.locale]);
      });
      this.paginationButtonTextShow.splice(pagenumber, this.banners.length);
    },
    updatePaginationText: function updatePaginationText() {
      this.titleMobile = this.banners[this.pageCurrent].title[this.$i18n.locale];
      this.paginationButtonTextShow = [];

      for (var index = this.index; index < this.pagenumber + this.index; index++) {
        this.paginationButtonTextShow.push(this.banners[index].title[this.$i18n.locale]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isFirstTime: false,
      advertisementInfo: null
    };
  },
  props: ['advertisementInfoProps'],
  created: function created() {
    if (sessionStorage.getItem('runPopupAdvCompFirstTime') === null) {
      this.isFirstTime = true;
      this.fecthAdevertisementInformationFromAPI(this.isFirstTime);
      sessionStorage.setItem('runPopupAdvCompFirstTime', false);
    } else {
      this.isFirstTime = false;
      this.fecthAdevertisementInformationFromAPI(this.isFirstTime);
    }
  },
  methods: {
    fecthAdevertisementInformationFromAPI: function fecthAdevertisementInformationFromAPI(isFirstTimeStatus) {
      if (this.advertisementInfoProps) {
        if (isFirstTimeStatus) {
          this.advertisementInfo = this.advertisementInfoProps[0];
        } else {
          this.advertisementInfo = this.advertisementInfoProps[Math.floor(Math.random() * 4)];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
    productsContainerRef: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
    productsContainerRef: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_card_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-card-item.vue */ "./resources/js/pages/new-level-a/product-card-item.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductCardItemElement: _product_card_item_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    componentType: {
      type: String,
      "default": 'exclusive'
    },
    isDetailPage: {
      type: Boolean,

      /*
        false: for lvA full page
        true: for lvA detail pages (flash sale page, exclusive page, category page, top brand page)
      */
      "default": false
    },
    productsList: Array,
    maxDisplayItems: [String, Number]
  },
  computed: {
    itemsNumber: function itemsNumber() {
      if (this.productsList) {
        return Math.min(this.productsList.length, Number(this.maxDisplayItems));
      }
    }
  },
  mounted: function mounted() {
    this.trackAnalytics(true);
  },
  methods: {
    productAction: function productAction(value) {
      var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (route) this.$router.push(value.pageLink);
      this.trackAnalytics(false, value);
    },
    trackAnalytics: function trackAnalytics() {
      var isView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var value = arguments.length > 1 ? arguments[1] : undefined;
      var product = value ? [value] : this.productsList;
      var sim = ['sim', 'vlearn'];
      var isSim = value ? sim.includes(product[0].type_of_product) : false;
      var event = {
        event: 'ecommerce_event',
        event_category: isSim ? 'SIM' : 'device',
        event_action: isView ? 'impression' : 'click',
        event_label: isView ? isSim ? 'SIM_impression' : 'device_impression' : isSim ? 'SIM_click' : 'device_click',
        ecommerce: {
          currencyCode: 'THB'
        }
      };
      var impressions = product.map(function (data, index) {
        return {
          name: data.title.th,
          id: data.id,
          price: parseFloat(data.price).toFixed(2),
          category: 'device',
          brand: '',
          position: index,
          dimension6: parseFloat(data.compare_at_price_max).toFixed(2),
          dimension7: parseFloat(data.price).toFixed(2),
          variant: '',
          dimension9: '',
          dimension10: '',
          dimension11: '',
          dimension8: '',
          list: isSim ? 'SIM' : 'device'
        };
      });

      if (isView) {
        event.ecommerce.impressions = impressions;
      } else {
        event.ecommerce.click = {
          products: impressions
        };
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

//
//
//
//
//
//
//
//
//
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
    banners: Array
  },
  mounted: function mounted() {
    this.trackAnalytics('view');
  },
  methods: {
    trackAnalytics: function trackAnalytics(type, key) {
      var banners = key >= 0 ? [this.banners[key]] : this.banners;
      var promoKey = type === 'view' ? 'promoView' : 'promoClick';
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'internal_promotions',
        event_action: 'promotion_' + (type || 'view'),
        event_label: 'stick_banner',
        ecommerce: Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, promoKey, {
          promotions: banners.map(function (banner, index) {
            var _banner$slug, _banner$description;

            return {
              id: (_banner$slug = banner.slug) === null || _banner$slug === void 0 ? void 0 : _banner$slug.th,
              name: (_banner$description = banner.description) === null || _banner$description === void 0 ? void 0 : _banner$description.th,
              creative: 'store-cat-slider',
              position: "slide-".concat(index + 1)
            };
          })
        })
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/new-level-a/see-more-btn.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SeeMoreButtonElement: _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    topBrandsConfig: Object,
    topBrandsList: Array
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".deal[data-v-2ef27e57] {\n  min-width: 284px;\n  min-height: 300px;\n  background: #F7F7F7;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.deal .deal-logo[data-v-2ef27e57] {\n  height: 100px;\n  width: 100%;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.deal .deal-logo img[data-v-2ef27e57] {\n  max-width: 240px;\n  max-height: 90px;\n}\n.deal .deal-content[data-v-2ef27e57] {\n  text-align: center;\n}\n.deal .deal-content .content[data-v-2ef27e57] {\n  font-family: \"TrueLight\";\n  color: #000;\n  margin: 10px 0 15px;\n  min-height: 110px;\n  overflow: hidden;\n}\n.deal .deal-content button[data-v-2ef27e57] {\n  cursor: pointer;\n  width: 180px;\n  height: 38px;\n  border-radius: 20px;\n  background: #f7f7f7;\n  font-family: \"TrueBold\";\n  font-size: 22px;\n  border: 2px solid #999;\n  cursor: pointer;\n}\n@media screen and (max-width: 450px) {\n.deal[data-v-2ef27e57]:not(:last-child) {\n    margin-right: 10px;\n}\n.deal[data-v-2ef27e57] {\n    min-width: 175px;\n    min-height: 220px;\n    height: 220px;\n}\n.deal .deal-logo[data-v-2ef27e57] {\n    height: 60px;\n}\n.deal .deal-logo img[data-v-2ef27e57] {\n    max-width: 160px;\n    max-height: 60px;\n}\n.deal .deal-content .content[data-v-2ef27e57] {\n    min-height: 100px;\n    margin: 10px 0 5px;\n}\n.deal .deal-content button[data-v-2ef27e57] {\n    width: 150px;\n    height: 35px;\n    font-size: 20px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".deals_from_partner_section {\n  display: flex;\n  flex-direction: column;\n  margin-top: 23px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section {\n    margin-top: 60px;\n    flex-direction: row;\n}\n}\n.deals_from_partner_section .product_header {\n  max-width: 374px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .product_header {\n    margin-right: 30px;\n}\n}\n.deals_from_partner_section .product_header .see_more_btn {\n  display: none;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .product_header .see_more_btn {\n    display: block;\n    margin-top: 28px;\n    margin-left: 0;\n}\n}\n.deals_from_partner_section .content_container {\n  margin-top: 23px;\n  margin-left: 18px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .content_container {\n    margin-top: 0;\n    margin-left: 0;\n}\n}\n.deals_from_partner_section .content_container .deals_list {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 15px;\n  font-size: 15px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .content_container .deals_list {\n    font-size: 20px;\n}\n}\n.deals_from_partner_section .content_container .deals_list .deal:not(:last-child) {\n  margin-right: 10px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .content_container .deals_list .deal:not(:last-child) {\n    margin-right: 14px;\n}\n}\n.deals_from_partner_section .content_container .see_more_btn {\n  margin-top: 15px;\n}\n@media screen and (min-width: 1200px) {\n.deals_from_partner_section .content_container .see_more_btn {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page.new-level-a {\n  margin: 0;\n  padding: 0;\n  max-width: unset;\n}\n.page.home-page {\n  max-width: unset !important;\n  padding: 16px 0px 36px 0px;\n}\n@media (max-width: 1200px) {\n.page.home-page {\n    margin-top: 50px;\n}\n}\n@media (max-width: 1000px) {\n.page.home-page {\n    margin-top: 0px;\n}\n}\n.page-container {\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n}\n.max-w-1200px {\n  max-width: 1200px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.floating_menu {\n  display: none;\n  z-index: 998;\n  position: fixed;\n  font-family: \"TrueLight\", sans-serif;\n  font-size: 20px;\n  line-height: 25px;\n  cursor: pointer;\n  bottom: 99px;\n  right: 0;\n}\n@media (min-width: 576px) {\n.floating_menu {\n    right: 10px;\n}\n}\n@media (min-width: 1376px) {\n.floating_menu {\n    right: calc(50vw - 688px);\n}\n}\n.floating_menu .icons {\n  display: none;\n  background-color: white;\n  color: #404040;\n  border-radius: 4px 4px 0 0;\n}\n@media (min-width: 1200px) {\n.floating_menu .icons {\n    display: flex;\n    flex-direction: column;\n}\n}\n.floating_menu .icons > div {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 39px;\n  border: 1px solid #CCCCCC;\n  border-bottom: none;\n}\n.floating_menu .icons > div:hover {\n  background-color: #F7F7F7;\n  color: red;\n}\n.floating_menu .icons > div:hover > img {\n  filter: invert(17%) sepia(99%) saturate(6607%) hue-rotate(359deg) brightness(97%) contrast(115%);\n}\n.floating_menu .icons > div:hover > .title {\n  display: block;\n}\n.floating_menu .icons > div > .title {\n  display: none;\n  position: absolute;\n  top: -1px;\n  right: 100%;\n  padding: 6.5px 9px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n  white-space: nowrap;\n  border: 1px solid #CCCCCC;\n  background-color: #F7F7F7;\n}\n.floating_menu .back_to_top {\n  width: 40px;\n  height: 40px;\n  padding-top: 15px;\n  line-height: 10px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #E1E1E1;\n  color: black;\n}\n.floating_menu .back_to_top:hover {\n  background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  color: white;\n}\n@media (min-width: 1200px) {\n.floating_menu .back_to_top {\n    border-radius: 0 0 4px 4px;\n    background-color: #CCCCCC;\n    background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n    color: white;\n}\n.floating_menu .back_to_top:hover {\n    background-image: none;\n    color: red;\n}\n}\n.home-page-dialog .content {\n  max-width: 415px;\n  max-height: 90%;\n}\n@media screen and (max-width: 800px) {\n.home-page-dialog .content {\n    width: 425px;\n}\n}\n@media screen and (max-width: 525px) {\n.home-page-dialog .content {\n    width: 325px;\n}\n}\n@media screen and (max-width: 450px) {\n.home-page-dialog .content {\n    width: 275px;\n}\n.home-page-dialog .content .dialog-content {\n    border-bottom: 0px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".overflow_x_scroll {\n  overflow-x: scroll;\n}\n.hide_scrollbar {\n  -ms-overflow-style: none;\n  /* for Internet Explorer, Edge */\n  scrollbar-width: none;\n  /* for Firefox */\n}\n.hide_scrollbar::-webkit-scrollbar {\n  display: none;\n  /* for Chrome, Safari, and Opera */\n}\n.flash_sale_header {\n  display: flex;\n  align-items: flex-end;\n  margin-left: 18px;\n}\n@media screen and (min-width: 1200px) {\n.flash_sale_header {\n    margin-left: 0;\n}\n}\n.flash_sale_header img {\n  margin-right: 28px;\n  margin-bottom: 2px;\n  width: 121px;\n  height: 20px;\n}\n@media screen and (min-width: 1200px) {\n.flash_sale_header img {\n    margin-right: 43.11px;\n    margin-bottom: 0;\n    width: 188.89px;\n    height: 31px;\n}\n}\n.product_header {\n  color: #333333;\n  min-width: 330px;\n  max-width: 927px;\n  margin-left: 18px;\n}\n@media screen and (min-width: 1200px) {\n.product_header {\n    margin-left: 0;\n}\n}\n.product_header h2 {\n  margin: 0;\n  font-family: \"TrueBold\";\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 32.8px;\n}\n@media screen and (min-width: 1200px) {\n.product_header h2 {\n    font-size: 48px;\n    line-height: 42px;\n}\n}\n.product_header h2 a {\n  text-decoration: none;\n  color: #000000;\n}\n.product_header p {\n  margin: 0;\n  font-family: \"TrueLight\";\n  font-size: 20px;\n  line-height: 19.6px;\n}\n@media screen and (min-width: 1200px) {\n.product_header p {\n    font-size: 28px;\n    line-height: 25px;\n}\n}\n.countdown_timer {\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-weight: normal;\n  color: #000000;\n  font-size: 24px;\n  line-height: 29px;\n}\n.countdown_timer .back_box {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #FFFFFF;\n  background-color: #000000;\n  border-radius: 4px;\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 24px;\n}\n@media screen and (min-width: 1200px) {\n.countdown_timer .back_box {\n    width: 40px;\n    height: 40px;\n    font-size: 24px;\n    line-height: 29px;\n}\n}\n.countdown_timer .colon {\n  width: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n@media screen and (min-width: 1200px) {\n.countdown_timer .colon {\n    margin-left: 7.8px;\n    margin-right: 7.8px;\n}\n}\n.flash_sale_section {\n  margin-top: 28px;\n}\n@media screen and (min-width: 1200px) {\n.flash_sale_section {\n    margin-top: 42px;\n}\n}\n.exclusive_section {\n  margin-top: 23px;\n}\n@media screen and (min-width: 1200px) {\n.exclusive_section {\n    margin-top: 30px;\n}\n}\n.best_seller_section {\n  position: relative;\n  margin-top: 20px;\n}\n@media screen and (min-width: 1200px) {\n.best_seller_section {\n    margin-top: 32px;\n}\n}\n.new_arrivals_section {\n  margin-top: 20px;\n}\n@media screen and (min-width: 1200px) {\n.new_arrivals_section {\n    margin-top: 32px;\n}\n}\n.new_arrivals_section .new_arrival_content {\n  display: flex;\n  justify-content: space-between;\n  row-gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n@media screen and (min-width: 965px) and (max-width: 1200px) {\n.new_arrivals_section .new_arrival_content {\n    margin-top: 30px;\n}\n.new_arrivals_section .new_arrival_content.pic-left {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.new_arrivals_section .new_arrival_content.pic-right {\n    padding-right: 23px;\n}\n}\n@media screen and (min-width: 1200px) {\n.new_arrivals_section .new_arrival_content {\n    margin-top: 30px;\n}\n}\n.new_arrivals_section .new_arrival_banner {\n  width: 100%;\n  height: 200px;\n  padding-top: 10px;\n  padding-left: 20px;\n  font-family: \"TrueBold\";\n  color: #000000;\n  font-size: 48px;\n  line-height: 40px;\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n@media screen and (min-width: 965px) and (max-width: 1200px) {\n.new_arrivals_section .new_arrival_banner {\n    padding-top: 20px;\n    width: 30%;\n    height: 478px;\n    font-size: 64px;\n    line-height: 50px;\n}\n}\n@media screen and (min-width: 1200px) {\n.new_arrivals_section .new_arrival_banner {\n    padding-top: 20px;\n    width: 525px;\n    height: 478px;\n    font-size: 64px;\n    line-height: 50px;\n}\n}\n.new_arrivals_section .new_arrival_banner .product_name {\n  max-width: 214px;\n}\n@media screen and (max-width: 964px) {\n.new_arrivals_section .new_arrival_banner.order_1 {\n    order: 0;\n}\n}\n.new_arrivals_section .products_container {\n  width: 100%;\n  justify-content: center;\n}\n@media screen and (min-width: 965px) and (max-width: 1200px) {\n.new_arrivals_section .products_container {\n    width: 70%;\n}\n}\n.product_section {\n  position: relative;\n}\n.product_section .scroll_btn {\n  bottom: 258px;\n}\n.product_section .scroll_btn.left {\n  left: -22px;\n}\n.product_section .scroll_btn.right {\n  right: -22px;\n}\n.product_section .products_container {\n  margin-left: 9px;\n}\n@media screen and (min-width: 1200px) {\n.product_section .products_container {\n    margin-left: -6px;\n    margin-right: -6px;\n}\n}\n.product_section .products_container .product_card_item {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n@media screen and (min-width: 1200px) {\n.product_section .products_container .product_card_item {\n    margin-top: 30px;\n}\n}\n.product_section .products_container .product_card_item:first-child {\n  margin-left: 6px;\n}\n.product_section .products_container .product_card_item:last-child {\n  margin-right: 6px;\n}\n.product_sections {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 45px;\n}\n@media screen and (max-width: 415px) {\n.product_sections {\n    margin-bottom: 3px;\n}\n}\n.order_1 {\n  order: 1;\n}\n.order_2 {\n  order: 2;\n}\n.order_3 {\n  order: 3;\n}\n.order_4 {\n  order: 4;\n}\n.order_5 {\n  order: 5;\n}\n.order_6 {\n  order: 6;\n}\n.order_7 {\n  order: 7;\n}\n.order_8 {\n  order: 8;\n}\n.order_9 {\n  order: 9;\n}\n.order_10 {\n  order: 10;\n}\n.scroll_btn {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  display: none;\n}\n@media screen and (min-width: 1200px) {\n.scroll_btn {\n    display: block;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner-container[data-v-2977f0fa] {\n  position: relative;\n  width: 100%;\n}\n.banner-container[data-v-2977f0fa]::before {\n  content: \"\";\n  display: block;\n}\n.banner-container .carousel-container[data-v-2977f0fa] {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.banner-container .VueCarousel-slide[data-v-2977f0fa] {\n  position: relative;\n}\n.banner-container .VueCarousel-slide img[data-v-2977f0fa] {\n  width: 100%;\n  max-height: 320px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-pagination {\n  position: absolute;\n  line-height: 0;\n  bottom: -50px;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-pagination {\n    bottom: 20px;\n}\n}\n@media screen and (max-width: 415px) {\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-pagination {\n    bottom: -37px;\n}\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-dot {\n  padding: 0 !important;\n  margin-left: 4px;\n  margin-right: 4px;\n  border-radius: 4px;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-dot {\n    display: none;\n}\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-dot:hover {\n  background-color: #e62627 !important;\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-dot[aria-selected=true] {\n  width: 24px !important;\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button {\n  display: none;\n  padding: 0 !important;\n  transform: translateY(-50%);\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button {\n    display: block;\n}\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button:focus {\n  outline: none;\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button:hover path {\n  stroke: #e62627;\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button.VueCarousel-navigation-prev {\n  left: calc(50% - 600px);\n}\n.banner-container .VueCarousel[data-v-2977f0fa] .VueCarousel-navigation-button.VueCarousel-navigation-next {\n  right: calc(50% - 600px);\n}\n.banner-container .pagination-button-container[data-v-2977f0fa] {\n  width: 100%;\n  overflow-x: hidden;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: auto;\n}\n@media screen and (max-width: 1199px) {\n.banner-container .pagination-button-container[data-v-2977f0fa] {\n    display: none;\n}\n}\n.banner-container .pagination-button-focus[data-v-2977f0fa] {\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom-width: 5px;\n  border-bottom: 0.25rem solid;\n  border-bottom-color: #dd1b24;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-size: 24px;\n}\n.banner-container .pagination-button-nonfocus[data-v-2977f0fa] {\n  cursor: pointer;\n  background-color: #fff;\n  border: none;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-size: 18px;\n}\n.banner-container .title-mobile-container[data-v-2977f0fa] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1280px;\n  margin: auto;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .title-mobile-container[data-v-2977f0fa] {\n    display: none;\n}\n}\n.banner-container .title-mobile[data-v-2977f0fa] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-weight: bold;\n}\n@media screen and (max-width: 415px) {\n.banner-container .title-mobile[data-v-2977f0fa] {\n    margin-bottom: 29px;\n}\n}\n.banner-container .content[data-v-2977f0fa] {\n  position: absolute;\n  top: 16px;\n  left: 17px;\n}\n.banner-container .font-true-medium[data-v-2977f0fa] {\n  font-family: \"TrueMedium\";\n}\n.banner-container .font-sans-serif[data-v-2977f0fa] {\n  font-family: \"sans-serif\";\n}\n.banner-container .line-height-1[data-v-2977f0fa] {\n  line-height: 1;\n}\n.banner-container .font-weight-500[data-v-2977f0fa] {\n  font-weight: 500;\n}\n.banner-container .font-weight-600[data-v-2977f0fa] {\n  font-weight: 600;\n}\n.banner-container .font-weight-700[data-v-2977f0fa] {\n  font-weight: 700;\n}\n.banner-container .font-weight-900[data-v-2977f0fa] {\n  font-weight: 900;\n}\n.banner-container .text-white[data-v-2977f0fa] {\n  color: white;\n}\n.banner-container .text-gray[data-v-2977f0fa] {\n  color: #928e94;\n}\n.banner-container .flex[data-v-2977f0fa] {\n  display: flex;\n}\n.banner-container .text-1[data-v-2977f0fa] {\n  font-size: 18px;\n}\n.banner-container .text-2[data-v-2977f0fa] {\n  margin-top: 10.3px;\n  font-size: 31px;\n  letter-spacing: -1.45px;\n  word-spacing: 3px;\n}\n.banner-container .text-3[data-v-2977f0fa] {\n  margin-top: 4px;\n  margin-bottom: 18px;\n  font-size: 22px;\n}\n.banner-container .text-4[data-v-2977f0fa] {\n  margin-left: 2px;\n  margin-bottom: 12px;\n  font-size: 16.5px;\n  letter-spacing: 0.7px;\n}\n.banner-container .text-5-container[data-v-2977f0fa] {\n  line-height: 8px;\n}\n.banner-container .text-5a[data-v-2977f0fa] {\n  font-size: 45px;\n  letter-spacing: 2px;\n}\n.banner-container .text-5b[data-v-2977f0fa] {\n  font-size: 25px;\n}\n.banner-container .border-right[data-v-2977f0fa] {\n  margin-right: 14px;\n  padding-right: 11px;\n  border-right: 2px solid #928e94;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .content[data-v-2977f0fa] {\n    top: 19px;\n    left: calc(50% - 570px);\n}\n.banner-container .text-1[data-v-2977f0fa] {\n    font-size: 23.5px;\n}\n.banner-container .text-2[data-v-2977f0fa] {\n    font-size: 39px;\n    letter-spacing: -2px;\n    word-spacing: 4px;\n}\n.banner-container .text-3[data-v-2977f0fa] {\n    margin-top: 0;\n    margin-bottom: 25px;\n    font-size: 33px;\n}\n.banner-container .text-4[data-v-2977f0fa] {\n    margin-left: 2px;\n    margin-bottom: 20px;\n    font-size: 23px;\n    line-height: 16px;\n}\n.banner-container .text-5-container[data-v-2977f0fa] {\n    line-height: 10px;\n}\n.banner-container .text-5a[data-v-2977f0fa] {\n    font-size: 55px;\n    letter-spacing: 2.5px;\n}\n.banner-container .text-5b[data-v-2977f0fa] {\n    font-size: 35px;\n}\n.banner-container .border-right[data-v-2977f0fa] {\n    margin-right: 22px;\n    padding-right: 20px;\n    border-right: 2px solid #928e94;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".popup-advertisement-container[data-v-286e5017] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n}\n.popup-advertisement-container a img[data-v-286e5017] {\n  width: 360px;\n  height: 550px;\n}\n.popup-advertisement-container button[data-v-286e5017] {\n  margin-top: 15px;\n  outline: none;\n  border: none;\n  min-width: 180px;\n  padding: 0px 0px;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  line-height: 180%;\n  color: #fff;\n  text-align: center;\n  border-radius: 30px;\n  cursor: pointer;\n}\n.popup-advertisement-container button.bg_gradient[data-v-286e5017] {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n}\n@media screen and (max-width: 525px) {\n.popup-advertisement-container a img[data-v-286e5017] {\n    width: 275px;\n    height: 350px;\n}\n}\n@media screen and (max-width: 450px) {\n.popup-advertisement-container a img[data-v-286e5017] {\n    width: 220px;\n    height: 300px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".products_container {\n  display: flex;\n}\n.flex_wrap {\n  flex-wrap: wrap;\n}\n.col_gap_6px {\n  -moz-column-gap: 6px;\n       column-gap: 6px;\n}\n.col_gap_10px {\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n.row_gap_10px {\n  row-gap: 10px;\n}\n@media only screen and (min-width: 1200px) {\n.sm\\:col_gap_12px {\n    -moz-column-gap: 12px;\n         column-gap: 12px;\n}\n.sm\\:row_gap_20px {\n    row-gap: 20px;\n}\n.sm\\:max_w_640px {\n    max-width: 640px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".see_more_btn {\n  display: block;\n  width: 180px;\n  height: 38px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 4.5px;\n  padding-bottom: 4.5px;\n  font-family: \"TrueMedium\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 22px;\n  line-height: 25px;\n  color: #E62627;\n  text-decoration: none;\n  text-align: center;\n  border-radius: 30px;\n  border: 2px solid #E62627;\n}\n.see_more_btn[disabled] {\n  background-color: #E1E1E1;\n  background-image: none;\n  pointer-events: none;\n  cursor: default;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stick-banner-container[data-v-72532f56] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  gap: 6px 12px;\n  margin: 0 0 0 0;\n}\n.stick-banner-container img[data-v-72532f56] {\n  width: 100%;\n  height: auto;\n}\n.stick-banner-container a[data-v-72532f56] {\n  display: contents;\n  line-height: 0;\n}\n.stick-banner-container .item[data-v-72532f56] {\n  flex: 1;\n  display: flex;\n}\n.stick-banner-container .break-desktop[data-v-72532f56] {\n  gap: 0 0;\n  width: 100%;\n}\n@media screen and (min-width: 800px) {\n.stick-banner-container .break-desktop[data-v-72532f56] {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".top_brands_section {\n  font-family: \"TrueBold\";\n  font-size: 28px;\n  margin-top: 23px;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section {\n    margin-top: 60px;\n}\n}\n.top_brands_section .content_container {\n  margin-top: 12px;\n  margin-bottom: 15px;\n  margin-left: 18px;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container {\n    margin-top: 15px;\n    margin-left: 0;\n}\n}\n.top_brands_section .content_container .brands_list {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.top_brands_section .content_container .brands_list .brand {\n  min-width: 104px;\n  min-height: 140px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  color: #000;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container .brands_list .brand {\n    min-width: 190px;\n    min-height: 280px;\n}\n}\n.top_brands_section .content_container .brands_list .brand:not(:last-child) {\n  margin-right: 10px;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container .brands_list .brand:not(:last-child) {\n    margin-right: 12px;\n}\n}\n.top_brands_section .content_container .brands_list .brand .brand_img_container {\n  width: 100%;\n  height: 90px;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container .brands_list .brand .brand_img_container {\n    height: 200px;\n}\n}\n.top_brands_section .content_container .brands_list .brand .brand_img_container .brand_img {\n  width: 100%;\n  height: 100%;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container {\n  top: 65px;\n  left: 27px;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  border: 2px solid #fff;\n  background: #f7f7f7;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container .brands_list .brand .brand_logo_container {\n    top: 160px;\n    left: 55px;\n    width: 80px;\n    height: 80px;\n}\n}\n@media screen and (max-width: 1199px) {\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo {\n    max-width: 80%;\n    height: auto;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.apple {\n    max-width: 30px;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.samsung {\n    max-width: 40px;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.huawei {\n    max-width: 30px;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.oppo {\n    max-width: 45px;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.vivo {\n    max-width: 34px;\n}\n.top_brands_section .content_container .brands_list .brand .brand_logo_container .brand_logo.xiaomi {\n    max-width: 28px;\n}\n}\n.top_brands_section .content_container .brands_list .brand .brand-name {\n  text-transform: capitalize;\n  font-size: 20px;\n  padding-top: 24px;\n  height: 50px;\n}\n@media screen and (min-width: 1200px) {\n.top_brands_section .content_container .brands_list .brand .brand-name {\n    font-size: 30px;\n    padding-top: 39px;\n    height: 80px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page.new-level-a[data-v-4ee521d5], .page.product-items[data-v-4ee521d5] {\n  max-width: 1200px;\n  padding: 0;\n}\n.store-container[data-v-4ee521d5] {\n  padding: 0;\n  max-width: 1200px;\n  margin: auto;\n  position: relative;\n  background-color: transparent;\n}\n.store-container .store-products-container[data-v-4ee521d5] {\n  clear: both;\n  padding: 24px 0;\n  display: flex;\n}\n.store-container .store-products-container .filters-container[data-v-4ee521d5] {\n  width: 280px;\n  min-width: 280px;\n  font-size: 24px;\n  color: #000;\n  line-height: 30px;\n  padding: 20px 0;\n}\n.store-container .store-products-container .filters-container .filter-container[data-v-4ee521d5] {\n  margin-bottom: 30px;\n}\n.store-container .store-products-container .filters-container .filter-container .filter-title[data-v-4ee521d5] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  margin-bottom: 4px;\n}\n.store-container .store-products-container .filters-container .filter-container .filter-item[data-v-4ee521d5] {\n  display: block;\n  cursor: pointer;\n}\n.store-container .store-products-container .product-container[data-v-4ee521d5] {\n  width: 100%;\n}\n.store-container .store-products-container .product-container .product-header-container[data-v-4ee521d5] {\n  color: #000;\n  margin-bottom: 40px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header[data-v-4ee521d5] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  margin: 20px 0;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header.mobile[data-v-4ee521d5] {\n  display: none;\n  margin-bottom: 24px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title[data-v-4ee521d5] {\n  font-size: 40px;\n  font-family: \"TrueBold\";\n  flex: 1;\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .subtitle[data-v-4ee521d5] {\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #666;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .skeleton[data-v-4ee521d5] {\n  width: 100%;\n  max-width: 240px;\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-filter[data-v-4ee521d5] {\n  display: grid;\n  width: 100%;\n  grid-gap: 10px;\n  grid-template-columns: repeat(2, 1fr);\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-filter .skeleton[data-v-4ee521d5] {\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .dropdown[data-v-4ee521d5] input {\n  border-color: #ddd;\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .dropdown[data-v-4ee521d5] .options {\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .filter-button[data-v-4ee521d5] {\n  min-width: 40px;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  padding: 8px;\n  color: #666;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort[data-v-4ee521d5] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  line-height: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .dropdown[data-v-4ee521d5],\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .skeleton[data-v-4ee521d5] {\n  margin-left: 8px;\n  width: 220px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .skeleton[data-v-4ee521d5] {\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .brands[data-v-4ee521d5] {\n  font-size: 25px;\n  margin-bottom: -20px;\n  margin-top: -20px;\n}\n.store-container .store-products-container .products-grid-container[data-v-4ee521d5] {\n  width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  margin-bottom: 20px;\n}\n.store-container .store-products-container .products-grid-container .product[data-v-4ee521d5] {\n  flex: 1;\n  display: flex;\n  text-decoration: none;\n}\n.store-container .store-products-container .terms-container[data-v-4ee521d5] {\n  display: flex;\n  justify-content: center;\n  margin: 24px 0;\n}\n.store-container .store-products-container .terms-container a[data-v-4ee521d5] {\n  min-width: 260px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #555;\n  color: #fff;\n  font-family: \"TrueBold\";\n  font-size: 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: 50ms ease background-color;\n}\n.store-container .store-products-container .terms-container a[data-v-4ee521d5]:hover {\n  background-color: #000;\n}\n.store-container .store-products-container .products-placeholder[data-v-4ee521d5] {\n  font-size: 22px;\n  text-align: center;\n  grid-column: 1/-1;\n  padding: 96px 0;\n}\n.store-container .store-products-container .products-placeholder.no-padding[data-v-4ee521d5] {\n  padding: 0;\n}\n.store-container .store-products-container .products-placeholder .load-more[data-v-4ee521d5] {\n  display: inline-block;\n  margin: 24px 0;\n  background: #828282;\n  color: #fff;\n  padding: 6px 24px;\n  border-radius: 8px;\n  font-size: 22px;\n  cursor: pointer;\n}\n@media screen and (max-width: 1132px) {\n.store-container .store-products-container[data-v-4ee521d5] {\n    padding: 24px 16px;\n}\n}\n@media screen and (max-width: 860px) {\n.store-container .store-products-container[data-v-4ee521d5] {\n    padding: 0;\n}\n.store-container .store-products-container .filters-container[data-v-4ee521d5] {\n    display: none;\n}\n.store-container .store-products-container .product-container[data-v-4ee521d5] {\n    padding: 0 16px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header[data-v-4ee521d5] {\n    margin: 16px 0;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header.mobile[data-v-4ee521d5] {\n    display: flex;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title[data-v-4ee521d5] {\n    font-size: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .skeleton[data-v-4ee521d5] {\n    height: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort[data-v-4ee521d5] {\n    display: none;\n}\n.store-container .store-products-container .product-container .products-grid-container[data-v-4ee521d5] {\n    grid-gap: 10px;\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n}\n@media screen and (max-width: 520px) {\n.store-container .store-products-container .product-container .products-grid-container[data-v-4ee521d5] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n}\n@media screen and (max-width: 320px) {\n.store-container .store-products-container .product-container .products-grid-container[data-v-4ee521d5] {\n    grid-template-columns: 1fr;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true& ***!
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
  return _c("div", { staticClass: "deal", class: _vm.className }, [
    _c("div", { staticClass: "deal-logo", style: _vm.themeStyle }, [
      _c("img", {
        attrs: {
          width: "120",
          height: "50",
          src: _vm.imageUrl,
          alt: _vm.description,
        },
      }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "deal-content" },
      [
        _c("div", {
          staticClass: "content",
          domProps: { innerHTML: _vm._s(_vm.content) },
        }),
        _vm._v(" "),
        _c("router-link", { attrs: { to: _vm.pageLink } }, [
          _c("button", { style: _vm.buttonStyle }, [_vm._v("SEE DETAILS")]),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304& ***!
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
  return _c("section", { staticClass: "deals_from_partner_section" }, [
    _c(
      "div",
      { staticClass: "product_header" },
      [
        _c("h2", [
          _c("a", { attrs: { href: _vm.dealsConfig.link || "#" } }, [
            _vm._v(
              _vm._s(
                _vm.dealsConfig.title[_vm.$i18n.locale] ||
                  _vm.dealsConfig.title.th
              )
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.dealsConfig.description[_vm.$i18n.locale] ||
                  _vm.dealsConfig.description.th
              ) +
              "\n    "
          ),
        ]),
        _vm._v(" "),
        _c("see-more-button-element", {
          attrs: { href: _vm.dealsConfig.link || "#" },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content_container" },
      [
        _c(
          "div",
          { staticClass: "deals_list hide_scrollbar" },
          _vm._l(_vm.dealsList, function (deal) {
            return _c("deal-element", {
              key: deal.title.th,
              attrs: {
                id: deal.title.th,
                logo:
                  deal.custom_fields.base_url + deal.custom_fields.partner_logo,
                description: deal.description.th,
                "theme-color": deal.custom_fields.theme_color,
                content: deal.custom_fields.deal_content,
                "button-color": deal.custom_fields.button_color,
                "class-name": deal.className,
                type: deal.custom_fields.content_type,
                "page-link": deal.link,
              },
            })
          }),
          1
        ),
        _vm._v(" "),
        _c("see-more-button-element", {
          attrs: { href: _vm.dealsConfig.link || "#" },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          staticClass: "home-page-dialog",
          attrs: { "show-close-button": "" },
        },
        [
          _c(
            "div",
            { attrs: { slot: "content" }, slot: "content" },
            [
              _c("popup-advertisement-component", {
                attrs: {
                  advertisementInfoProps: _vm.isAdvertisementInfoNullOrNot,
                },
              }),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.lvaConfigs && _vm.lvaConfigs.length > 0 && _vm.lvaContent.length > 0
        ? _c(
            "div",
            { staticClass: "page-container" },
            _vm._l(_vm.lvaConfigs, function (config, index) {
              return _c(
                "div",
                { key: config.custom_fields.template_type + index },
                [
                  config &&
                  config.custom_fields &&
                  config.custom_fields.template_type === "main_banner"
                    ? [
                        _vm.lvaContent[index] &&
                        _vm.lvaContent[index].length > 0
                          ? _c("main-banner-element", {
                              attrs: { banners: _vm.lvaContent[index] },
                            })
                          : _vm._e(),
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "max-w-1200px mx-auto" },
                    [
                      config &&
                      config.custom_fields &&
                      config.custom_fields.template_type === "stick_banner"
                        ? [
                            _c("stick-banner-element", {
                              key: index,
                              attrs: { banners: _vm.lvaContent[index] },
                            }),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      (config &&
                        config.custom_fields &&
                        config.custom_fields.template_type !== "flash_sale") ||
                      (config.custom_fields.template_type === "flash_sale" &&
                        _vm.flashSaleRemainingSeconds > 0)
                        ? _c(
                            "div",
                            {
                              ref: "section",
                              refInFor: true,
                              staticClass: "product_sections",
                            },
                            [
                              _vm.templateTypeList.indexOf(
                                config.custom_fields.template_type
                              ) !== -1
                                ? [
                                    _c(
                                      "section",
                                      {
                                        key: "section_" + index,
                                        class: [
                                          config.custom_fields.template_type ===
                                          "new_arrivals"
                                            ? "new_arrivals_section"
                                            : "product_section " +
                                              config.custom_fields
                                                .template_type +
                                              "_section",
                                          "order_" + index,
                                        ],
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            class:
                                              config.custom_fields
                                                .template_type === "flash_sale"
                                                ? "flash_sale_header"
                                                : "product_header",
                                          },
                                          [
                                            config.custom_fields
                                              .template_type === "flash_sale" &&
                                            _vm.flashSaleRemainingSeconds > 0
                                              ? [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          config.link || "#",
                                                      },
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          width: "189",
                                                          height: "31",
                                                          src: "/images/level-a/flash-sale.svg",
                                                          alt: "flash sale icon",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "countdown_timer",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "back_box",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.flashSaleHour
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "colon",
                                                        },
                                                        [_vm._v(":")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "back_box",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.flashSaleMinute
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "colon",
                                                        },
                                                        [_vm._v(":")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "back_box",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.flashSaleSecond
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              : [
                                                  _c(
                                                    "h2",
                                                    [
                                                      [
                                                        _vm._v(
                                                          "\n                      " +
                                                            _vm._s(
                                                              config.title[
                                                                _vm.$i18n.locale
                                                              ] ||
                                                                config.title.th
                                                            ) +
                                                            "\n                    "
                                                        ),
                                                      ],
                                                    ],
                                                    2
                                                  ),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(
                                                        config.description[
                                                          _vm.$i18n.locale
                                                        ] ||
                                                          config.description.th
                                                      )
                                                    ),
                                                  ]),
                                                ],
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        config &&
                                        config.custom_fields &&
                                        config.custom_fields.template_type ===
                                          "new_arrivals"
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "new_arrival_content",
                                                class:
                                                  _vm.lvaContent[index]
                                                    .highlightProduct
                                                    .isBannerDisplayFirst ===
                                                  false
                                                    ? "pic-right"
                                                    : "pic-left",
                                              },
                                              [
                                                _vm.isMobile &&
                                                config.custom_fields
                                                  .mobile_image
                                                  ? _c("a", {
                                                      staticClass:
                                                        "new_arrival_banner",
                                                      class:
                                                        _vm.lvaContent[index]
                                                          .highlightProduct
                                                          .isBannerDisplayFirst ===
                                                        false
                                                          ? "order_1"
                                                          : "",
                                                      style:
                                                        "background-image: url('" +
                                                        config.custom_fields
                                                          .base_url +
                                                        config.custom_fields
                                                          .mobile_image +
                                                        "')",
                                                    })
                                                  : _c("a", {
                                                      staticClass:
                                                        "new_arrival_banner",
                                                      class:
                                                        _vm.lvaContent[index]
                                                          .highlightProduct
                                                          .isBannerDisplayFirst ===
                                                        false
                                                          ? "order_1"
                                                          : "",
                                                      style:
                                                        "background-image: url('" +
                                                        config.custom_fields
                                                          .base_url +
                                                        config.custom_fields
                                                          .image +
                                                        "')",
                                                    }),
                                                _vm._v(" "),
                                                _c(
                                                  "products-container-element",
                                                  {
                                                    attrs: {
                                                      "component-type":
                                                        "new_arrival",
                                                      "products-list":
                                                        _vm.lvaContent[index]
                                                          .newArrivalsList,
                                                      "max-display-items": 4,
                                                    },
                                                  }
                                                ),
                                              ],
                                              1
                                            )
                                          : [
                                              _c("products-container-element", {
                                                ref:
                                                  "product-container-" + index,
                                                refInFor: true,
                                                staticClass:
                                                  "overflow_x_scroll hide_scrollbar",
                                                attrs: {
                                                  "component-type":
                                                    config.custom_fields
                                                      .template_type,
                                                  "products-list":
                                                    _vm.lvaContent[index],
                                                  "max-display-items":
                                                    config.custom_fields
                                                      .display_products || 10,
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("see-more-button-element", {
                                                attrs: {
                                                  href: config.link || "#",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _vm.scrollable(config)
                                                ? [
                                                    _c(
                                                      "products-container-scroll-left-button-element",
                                                      {
                                                        staticClass:
                                                          "scroll_btn left",
                                                        attrs: {
                                                          "products-container-ref":
                                                            "product-container-" +
                                                            index,
                                                        },
                                                      }
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "products-container-scroll-right-button-element",
                                                      {
                                                        staticClass:
                                                          "scroll_btn right",
                                                        attrs: {
                                                          "products-container-ref":
                                                            "product-container-" +
                                                            index,
                                                        },
                                                      }
                                                    ),
                                                  ]
                                                : _vm._e(),
                                            ],
                                      ],
                                      2
                                    ),
                                  ]
                                : config &&
                                  config.custom_fields &&
                                  config.custom_fields.template_type ===
                                    "top_brands"
                                ? [
                                    _vm.lvaContent[index] &&
                                    _vm.lvaContent[index].length > 0
                                      ? _c("top-brands-element", {
                                          key: index,
                                          class: index + " order_" + index,
                                          attrs: {
                                            topBrandsConfig: config,
                                            topBrandsList:
                                              _vm.lvaContent[index],
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                : config &&
                                  config.custom_fields &&
                                  config.custom_fields.template_type ===
                                    "deals_from_partner"
                                ? [
                                    _vm.lvaContent[index] &&
                                    _vm.lvaContent[index].length > 0
                                      ? _c("deals-from-partner", {
                                          key: index,
                                          class: index + " order_" + index,
                                          attrs: {
                                            dealsConfig: config,
                                            dealsList: _vm.lvaContent[index],
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                : _c(
                                    "section",
                                    { key: index, class: "order_" + index },
                                    [
                                      config &&
                                      config.custom_fields &&
                                      !["main_banner", "stick_banner"].includes(
                                        config.custom_fields.template_type
                                      ) &&
                                      (config.custom_fields.template_type !==
                                        "flash_sale" ||
                                        (config.custom_fields.template_type ===
                                          "flash_sale" &&
                                          _vm.flashSaleRemainingSeconds > 0))
                                        ? _c(
                                            "div",
                                            { staticClass: "product_header" },
                                            [
                                              _c("h2", [
                                                _vm._v(
                                                  ' Displaying for "' +
                                                    _vm._s(
                                                      config.custom_fields
                                                        .template_type
                                                    ) +
                                                    '" is not available!'
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  " template_type must be " +
                                                    _vm._s(
                                                      _vm.templateFullTypeList
                                                    )
                                                ),
                                              ]),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                            ],
                            2
                          )
                        : _vm._e(),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "floating_menu" }, [
                    _c(
                      "div",
                      { staticClass: "icons" },
                      [
                        _vm._l(_vm.lvaConfigs, function (config, index) {
                          return [
                            config &&
                            config.custom_fields &&
                            _vm.templateFullTypeList.indexOf(
                              config.custom_fields.template_type
                            ) !== -1 &&
                            (config.custom_fields.template_type !==
                              "flash_sale" ||
                              (config.custom_fields.template_type ===
                                "flash_sale" &&
                                _vm.flashSaleRemainingSeconds > 0))
                              ? [
                                  _c(
                                    "div",
                                    {
                                      key: index,
                                      on: {
                                        click: function ($event) {
                                          return _vm.smoothScrollToElement(
                                            "order_" + index
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "" +
                                            config.custom_fields.base_url +
                                            config.custom_fields.icon,
                                          alt: config.title.th + " icon",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "title" }, [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              config.title[_vm.$i18n.locale] ||
                                                config.title.th
                                            ) +
                                            "\n                "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              : _vm._e(),
                          ]
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "back_to_top",
                        on: { click: _vm.backToTop },
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "17",
                              height: "10",
                              viewBox: "0 0 17 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M0.800049 8.5998L8.20005 0.799805L15.8 8.5998",
                                stroke: "currentColor",
                                "stroke-width": "1.5",
                                "stroke-miterlimit": "10",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ],
                2
              )
            }),
            0
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "banner-container" }, [
    _vm.banners
      ? _c(
          "div",
          { staticClass: "carousel-container" },
          [
            _c(
              "carousel",
              {
                attrs: {
                  "navigate-to": _vm.page,
                  "per-page": 1,
                  "pagination-size": 8,
                  "pagination-active-color": "#E62627",
                  "pagination-color": "#e0e0e0",
                  "navigation-enabled": "",
                  "navigation-prev-label": _vm.left,
                  "navigation-next-label": _vm.right,
                  loop: "",
                  autoplay: true,
                  "autoplay-timeout": _vm.autoplayTimeoutInMilliseconds,
                  "autoplay-hover-pause": "",
                },
                on: { "page-change": _vm.onPageChange },
              },
              _vm._l(_vm.banners, function (banner, key) {
                return _c("slide", { key: key }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: banner.link,
                        "data-position": "slide-" + (key + 1),
                      },
                      on: {
                        click: function ($event) {
                          return _vm.trackAnalytics("click", key)
                        },
                      },
                    },
                    [
                      _vm.isMobile
                        ? _c("img", {
                            attrs: {
                              height: "100%",
                              width: "100%",
                              src:
                                banner.custom_fields.base_url +
                                banner.custom_fields.banner_mobile,
                              alt: banner.title[_vm.$i18n.locale],
                              loading: key !== 0 ? "lazy" : "",
                            },
                          })
                        : _c("img", {
                            attrs: {
                              height: "100%",
                              width: "100%",
                              src:
                                banner.custom_fields.base_url + banner.banner,
                              alt: banner.title[_vm.$i18n.locale],
                              loading: key !== 0 ? "lazy" : "",
                            },
                          }),
                    ]
                  ),
                ])
              }),
              1
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "title-mobile-container" }, [
      _c("span", { staticClass: "title-mobile" }, [
        _vm._v(
          _vm._s(
            _vm.titleMobile.length >= 50
              ? _vm.titleMobile.substring(0, 50) + "..."
              : _vm.titleMobile
          )
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pagination-button-container" },
      _vm._l(_vm.paginationButtonTextShow, function (banner, key) {
        return _c("div", { key: key, staticClass: "pagination-button" }, [
          _c(
            "button",
            {
              class: _vm.isCurrentPage(banner)
                ? "pagination-button-focus"
                : "pagination-button-nonfocus",
              on: {
                click: function ($event) {
                  return _vm.goToPage(banner)
                },
              },
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(
                    banner.length >= 25
                      ? banner.substring(0, 25) + "..."
                      : banner
                  ) +
                  "\n      "
              ),
            ]
          ),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "popup-advertisement-container" },
    [
      _vm.advertisementInfo
        ? [
            _c(
              "a",
              {
                staticClass: "infoA",
                attrs: { href: _vm.advertisementInfo.link },
              },
              [
                _vm.advertisementInfo &&
                _vm.advertisementInfo.banner &&
                _vm.advertisementInfo.custom_fields &&
                _vm.advertisementInfo.custom_fields.base_url
                  ? _c("img", {
                      attrs: {
                        src:
                          "" +
                          _vm.advertisementInfo.custom_fields.base_url +
                          _vm.advertisementInfo.banner,
                      },
                    })
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.advertisementInfo.link } }, [
              _c("button", { staticClass: "bg_gradient" }, [
                _vm._v(_vm._s(_vm.advertisementInfo.title[_vm.$i18n.locale])),
              ]),
            ]),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      attrs: { "aria-label": "Scroll left" },
      on: {
        click: function ($event) {
          return _vm.$parent.$refs[_vm.productsContainerRef][0].$refs[
            "productsContainer"
          ].scrollBy({ left: -300, behavior: "smooth" })
        },
      },
    },
    [
      _c(
        "svg",
        {
          attrs: {
            width: "13",
            height: "22",
            viewBox: "0 0 13 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              d: "M11.4 21L1 11L11.4 1",
              stroke: "#CCCCCC",
              "stroke-width": "2",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            },
          }),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98& ***!
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
    "button",
    {
      attrs: { "aria-label": "Scroll right" },
      on: {
        click: function ($event) {
          return _vm.$parent.$refs[_vm.productsContainerRef][0].$refs[
            "productsContainer"
          ].scrollBy({ left: 300, behavior: "smooth" })
        },
      },
    },
    [
      _c(
        "svg",
        {
          attrs: {
            width: "13",
            height: "22",
            viewBox: "0 0 13 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              d: "M0.999904 0.999999L11.3999 11L0.999903 21",
              stroke: "#CCCCCC",
              "stroke-width": "2",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            },
          }),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _vm.itemsNumber > 0
    ? _c(
        "div",
        {
          ref: "productsContainer",
          staticClass: "products_container",
          class: [
            _vm.componentType === "flash_sale" && !_vm.isDetailPage
              ? "col_gap_6px"
              : "col_gap_10px",
            _vm.componentType === "flash_sale" || _vm.isDetailPage
              ? "sm:col_gap_12px"
              : "",
            _vm.componentType === "new_arrival" || _vm.isDetailPage
              ? "flex_wrap row_gap_10px"
              : "",
            _vm.isDetailPage ? "sm:row_gap_20px" : "",
            _vm.componentType === "new_arrival" ? "sm:max_w_640px" : "",
          ],
        },
        _vm._l(_vm.itemsNumber, function (index) {
          return _c("product-card-item-element", {
            key: index - 1,
            attrs: {
              "component-type": _vm.componentType,
              "is-custom-size": _vm.isDetailPage,
              "product-data": _vm.productsList[index - 1],
            },
            on: { handleBtnclick: _vm.productAction },
          })
        }),
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a& ***!
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
  return _c("a", { staticClass: "see_more_btn" }, [_vm._v("\n  SEE MORE\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "stick-banner-container" },
    [
      _vm._l(_vm.banners, function (banner, index) {
        return [
          _c("div", { key: "item-" + index, staticClass: "item" }, [
            _c(
              "a",
              {
                attrs: { href: banner.link },
                on: {
                  click: function ($event) {
                    return _vm.trackAnalytics("click", index)
                  },
                },
              },
              [
                banner && banner.custom_fields.base_url && banner.banner
                  ? _c("img", {
                      attrs: {
                        width: "392",
                        height: "180",
                        src: "" + banner.custom_fields.base_url + banner.banner,
                      },
                    })
                  : _vm._e(),
              ]
            ),
          ]),
          _vm._v(" "),
          index === 0
            ? _c("div", { key: "break-" + index, staticClass: "break-desktop" })
            : _vm._e(),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "top_brands_section" },
    [
      _vm.topBrandsConfig
        ? _c("div", { staticClass: "product_header" }, [
            _c("h2", [
              _c("a", { attrs: { href: _vm.topBrandsConfig.link || "#" } }, [
                _vm._v(
                  _vm._s(
                    _vm.topBrandsConfig.title[_vm.$i18n.locale] ||
                      _vm.topBrandsConfig.title.th
                  )
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n      " +
                  _vm._s(
                    _vm.topBrandsConfig.description[_vm.$i18n.locale] ||
                      _vm.topBrandsConfig.description.th
                  ) +
                  "\n    "
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.topBrandsList
        ? _c("div", { staticClass: "content_container" }, [
            _c(
              "div",
              { staticClass: "brands_list hide_scrollbar" },
              _vm._l(_vm.topBrandsList, function (brand, index) {
                return _c(
                  "a",
                  {
                    key: index,
                    staticClass: "brand",
                    attrs: { href: brand.link },
                  },
                  [
                    _c("div", { staticClass: "brand_img_container" }, [
                      _c("img", {
                        staticClass: "brand_img",
                        attrs: {
                          src:
                            brand.custom_fields.base_url +
                            brand.custom_fields.background_image,
                          alt: brand.title,
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "brand_logo_container" }, [
                      _c("img", {
                        staticClass: "brand_logo",
                        class:
                          brand.title.en.toLowerCase() ||
                          brand.title.th.toLowerCase(),
                        attrs: {
                          width: "50",
                          height: "50",
                          src:
                            brand.custom_fields.base_url +
                            brand.custom_fields.logo,
                          alt: brand.title[_vm.$i18n.locale] || brand.title.th,
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "brand-name" }, [
                      _vm._v(
                        _vm._s(brand.title[_vm.$i18n.locale] || brand.title.th)
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("see-more-button-element", {
        attrs: { href: _vm.topBrandsConfig.link || "#" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/new-level-a/deal-item.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/new-level-a/deal-item.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deal-item.vue?vue&type=template&id=2ef27e57&scoped=true& */ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true&");
/* harmony import */ var _deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-item.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& */ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ef27e57",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/deal-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=style&index=0&id=2ef27e57&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_2ef27e57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=template&id=2ef27e57&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deal-item.vue?vue&type=template&id=2ef27e57&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_2ef27e57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/deals-container.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deals-container.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deals-container.vue?vue&type=template&id=068fd304& */ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304&");
/* harmony import */ var _deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deals-container.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/deals-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=template&id=068fd304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/deals-container.vue?vue&type=template&id=068fd304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_068fd304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/new-level-a/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4ee521d5&scoped=true& */ "./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& */ "./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=2&lang=scss& */ "./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ee521d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4ee521d5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/index.vue?vue&type=template&id=4ee521d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ee521d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/main-banner.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/new-level-a/main-banner.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-banner.vue?vue&type=template&id=2977f0fa&scoped=true& */ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true&");
/* harmony import */ var _main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-banner.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& */ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2977f0fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/main-banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=style&index=0&id=2977f0fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_2977f0fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=template&id=2977f0fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/main-banner.vue?vue&type=template&id=2977f0fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_2977f0fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/popup-advertisement-component.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/popup-advertisement-component.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true& */ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true&");
/* harmony import */ var _popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& */ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "286e5017",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/popup-advertisement-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=style&index=0&id=286e5017&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_286e5017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/popup-advertisement-component.vue?vue&type=template&id=286e5017&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_286e5017_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-left.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-left.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container-scroll-left.vue?vue&type=template&id=aad126c2& */ "./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2&");
/* harmony import */ var _products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container-scroll-left.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/products-container-scroll-left.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-left.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-left.vue?vue&type=template&id=aad126c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-left.vue?vue&type=template&id=aad126c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_aad126c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-right.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-right.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container-scroll-right.vue?vue&type=template&id=34c97d98& */ "./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98&");
/* harmony import */ var _products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container-scroll-right.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/products-container-scroll-right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-right.vue?vue&type=template&id=34c97d98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container-scroll-right.vue?vue&type=template&id=34c97d98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_34c97d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container.vue?vue&type=template&id=53598065& */ "./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065&");
/* harmony import */ var _products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-container.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/products-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=template&id=53598065& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/products-container.vue?vue&type=template&id=53598065&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_53598065___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/see-more-btn.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/new-level-a/see-more-btn.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue?vue&type=template&id=c46e742a& */ "./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a&");
/* harmony import */ var _see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/see-more-btn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=template&id=c46e742a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/see-more-btn.vue?vue&type=template&id=c46e742a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_c46e742a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/stick-banner.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/new-level-a/stick-banner.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=template&id=72532f56&scoped=true& */ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true&");
/* harmony import */ var _stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& */ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72532f56",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/stick-banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=style&index=0&id=72532f56&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_72532f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=template&id=72532f56&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/stick-banner.vue?vue&type=template&id=72532f56&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_72532f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/new-level-a/store.scss?vue&type=style&index=1&id=4ee521d5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_4ee521d5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/top-brands.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/new-level-a/top-brands.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-brands.vue?vue&type=template&id=5c721d5e& */ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e&");
/* harmony import */ var _top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-brands.vue?vue&type=script&lang=js& */ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/new-level-a/top-brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=template&id=5c721d5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/new-level-a/top-brands.vue?vue&type=template&id=5c721d5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_5c721d5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);