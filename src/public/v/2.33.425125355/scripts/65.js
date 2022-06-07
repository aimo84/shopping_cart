(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/testpage/see-more-btn.vue");
/* harmony import */ var _deal_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-item.vue */ "./resources/js/pages/testpage/deal-item.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_banner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-banner.vue */ "./resources/js/pages/testpage/main-banner.vue");
/* harmony import */ var _stick_banner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stick-banner.vue */ "./resources/js/pages/testpage/stick-banner.vue");
/* harmony import */ var _deals_container_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deals-container.vue */ "./resources/js/pages/testpage/deals-container.vue");
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/testpage/see-more-btn.vue");
/* harmony import */ var _products_container_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-container.vue */ "./resources/js/pages/testpage/products-container.vue");
/* harmony import */ var _products_container_scroll_left_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-container-scroll-left.vue */ "./resources/js/pages/testpage/products-container-scroll-left.vue");
/* harmony import */ var _products_container_scroll_right_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-container-scroll-right.vue */ "./resources/js/pages/testpage/products-container-scroll-right.vue");
/* harmony import */ var _top_brands_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-brands.vue */ "./resources/js/pages/testpage/top-brands.vue");
/* harmony import */ var _components_dialog_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/dialog.vue */ "./resources/js/components/dialog.vue");
/* harmony import */ var _popup_advertisement_component_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popup-advertisement-component.vue */ "./resources/js/pages/testpage/popup-advertisement-component.vue");
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var FLAST_SALE_TYPE = 'flash_sale',
    EXCLUSIVE_TYPE = 'exclusive',
    BEST_SELLER_TYPE = 'best_seller',
    NEW_ARRIVAL_TYPE = 'new_arrivals',
    EXCLUSIVE_OR_BEST_SELLER_TYPE = 'exclusive_or_best_seller';
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    componentType: {
      type: String,
      required: true
    },

    /*
      prop isCustomSize ONLY FOR 'exclusive' and 'best_seller'
      default false value (no need to set): component have default size for level A - FULL PAGE;
      true value (need to set): compoent have CUSTOM SIZE for levle A - EXCLUSIVE PAGE or BEST_SELLER PAGE
    */
    isCustomSize: {
      type: Boolean,
      "default": false
    },
    productData: {
      "default": function _default() {
        return {
          pageLink: '#'
        };
      }
    },
    campBean: Object,
    paramsID: Array
  },
  data: function data() {
    return {
      Locale: {
        start_at: {
          en: 'Start at',
          th: 'เริ่มต้น'
        },
        up_to: {
          th: 'สูงสุด',
          en: 'Up to'
        },
        months: {
          th: 'เดือน',
          en: 'm'
        },
        buy_now: {
          th: 'ซื้อเลย',
          en: 'BUY NOW'
        },
        pre_booking: {
          th: 'จองล่วงหน้า',
          en: 'PRE BOOKING'
        },
        sold_out: {
          th: 'ขายหมดแล้ว',
          en: 'SOLD OUT'
        },
        free: {
          th: 'ฟรี*',
          en: 'Free*'
        }
      }
    };
  },
  computed: {
    showBenefit: function showBenefit() {
      var _this = this;

      return function (productData) {
        if (_this.paramsID) {
          if (_this.paramsID.find(function (element) {
            return element === productData.id;
          })) {
            return true;
          } else {
            return false;
          }
        }

        return false;
      };
    },
    isCategoryPage: function isCategoryPage() {
      return this.$route.name === 'online-store-list';
    },
    isFlashsalePage: function isFlashsalePage() {
      return this.$route.name === 'online-store-flashsale';
    },
    containerClass: function containerClass() {
      if (this.componentType === EXCLUSIVE_TYPE || this.componentType === BEST_SELLER_TYPE) return EXCLUSIVE_OR_BEST_SELLER_TYPE;
      return this.componentType;
    },
    isExclusiveOrBestSellerOnDetailPage: function isExclusiveOrBestSellerOnDetailPage() {
      if (this.isCustomSize && this.containerClass === EXCLUSIVE_OR_BEST_SELLER_TYPE || this.$route.name === 'online-store-list') {
        return true;
      }

      return false;
    },
    RoundedPercentDiscount: function RoundedPercentDiscount() {
      if (this.componentType === FLAST_SALE_TYPE) {
        if (this.productOriginalPrice > this.productSpecialDiscountPrice) {
          var percentDiscount = (this.productOriginalPrice - this.productSpecialDiscountPrice) * 100 / this.productOriginalPrice;

          if (percentDiscount < 10) {
            percentDiscount = Math.round(percentDiscount * 10) / 10;
          } else {
            percentDiscount = Math.round(percentDiscount);
          }

          return percentDiscount;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    productName: function productName() {
      return this.productData.title.th;
    },
    imgUrl: function imgUrl() {
      return this.productData.images[0].url;
    },
    productOriginalPrice: function productOriginalPrice() {
      return this.productData.compare_at_price_max;
    },
    productSpecialDiscountPrice: function productSpecialDiscountPrice() {
      return this.productData.price_min;
    },
    minPrice: function minPrice() {
      return this.productData.price_min;
    },
    pageLink: function pageLink() {
      return window.url.MIX_APP_URL + '/online-store/item/' + this.productData.id;
    },
    isSoldOut: function isSoldOut() {
      return this.productData.quantity === 0;
    },
    isInstallment: function isInstallment() {
      return this.productData.installment;
    },
    isPreBooking: function isPreBooking() {
      return this.productData.preorder;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_card_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-card-item.vue */ "./resources/js/pages/testpage/product-card-item.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue */ "./resources/js/pages/testpage/see-more-btn.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".deal[data-v-d88eb8e2] {\n  min-width: 284px;\n  min-height: 300px;\n  background: #F7F7F7;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.deal .deal-logo[data-v-d88eb8e2] {\n  height: 100px;\n  width: 100%;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.deal .deal-logo img[data-v-d88eb8e2] {\n  max-width: 240px;\n  max-height: 90px;\n}\n.deal .deal-content[data-v-d88eb8e2] {\n  text-align: center;\n}\n.deal .deal-content .content[data-v-d88eb8e2] {\n  font-family: \"TrueLight\";\n  color: #000;\n  margin: 10px 0 15px;\n  min-height: 110px;\n  overflow: hidden;\n}\n.deal .deal-content button[data-v-d88eb8e2] {\n  cursor: pointer;\n  width: 180px;\n  height: 38px;\n  border-radius: 20px;\n  background: #f7f7f7;\n  font-family: \"TrueBold\";\n  font-size: 22px;\n  border: 2px solid #999;\n  cursor: pointer;\n}\n@media screen and (max-width: 450px) {\n.deal[data-v-d88eb8e2]:not(:last-child) {\n    margin-right: 10px;\n}\n.deal[data-v-d88eb8e2] {\n    min-width: 175px;\n    min-height: 220px;\n    height: 220px;\n}\n.deal .deal-logo[data-v-d88eb8e2] {\n    height: 60px;\n}\n.deal .deal-logo img[data-v-d88eb8e2] {\n    max-width: 160px;\n    max-height: 60px;\n}\n.deal .deal-content .content[data-v-d88eb8e2] {\n    min-height: 100px;\n    margin: 10px 0 5px;\n}\n.deal .deal-content button[data-v-d88eb8e2] {\n    width: 150px;\n    height: 35px;\n    font-size: 20px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner-container[data-v-3715bebb] {\n  position: relative;\n  width: 100%;\n}\n.banner-container[data-v-3715bebb]::before {\n  content: \"\";\n  display: block;\n}\n.banner-container .carousel-container[data-v-3715bebb] {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.banner-container .VueCarousel-slide[data-v-3715bebb] {\n  position: relative;\n}\n.banner-container .VueCarousel-slide img[data-v-3715bebb] {\n  width: 100%;\n  max-height: 320px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-pagination {\n  position: absolute;\n  line-height: 0;\n  bottom: -50px;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-pagination {\n    bottom: 20px;\n}\n}\n@media screen and (max-width: 415px) {\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-pagination {\n    bottom: -37px;\n}\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-dot {\n  padding: 0 !important;\n  margin-left: 4px;\n  margin-right: 4px;\n  border-radius: 4px;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-dot {\n    display: none;\n}\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-dot:hover {\n  background-color: #e62627 !important;\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-dot[aria-selected=true] {\n  width: 24px !important;\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button {\n  display: none;\n  padding: 0 !important;\n  transform: translateY(-50%);\n}\n@media screen and (min-width: 1200px) {\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button {\n    display: block;\n}\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button:focus {\n  outline: none;\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button:hover path {\n  stroke: #e62627;\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button.VueCarousel-navigation-prev {\n  left: calc(50% - 600px);\n}\n.banner-container .VueCarousel[data-v-3715bebb] .VueCarousel-navigation-button.VueCarousel-navigation-next {\n  right: calc(50% - 600px);\n}\n.banner-container .pagination-button-container[data-v-3715bebb] {\n  width: 100%;\n  overflow-x: hidden;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: auto;\n}\n@media screen and (max-width: 1199px) {\n.banner-container .pagination-button-container[data-v-3715bebb] {\n    display: none;\n}\n}\n.banner-container .pagination-button-focus[data-v-3715bebb] {\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom-width: 5px;\n  border-bottom: 0.25rem solid;\n  border-bottom-color: #dd1b24;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-size: 24px;\n}\n.banner-container .pagination-button-nonfocus[data-v-3715bebb] {\n  cursor: pointer;\n  background-color: #fff;\n  border: none;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-size: 18px;\n}\n.banner-container .title-mobile-container[data-v-3715bebb] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1280px;\n  margin: auto;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .title-mobile-container[data-v-3715bebb] {\n    display: none;\n}\n}\n.banner-container .title-mobile[data-v-3715bebb] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: \"TrueMediumNew\";\n  -webkit-font-smoothing: antialiased;\n  font-weight: bold;\n}\n@media screen and (max-width: 415px) {\n.banner-container .title-mobile[data-v-3715bebb] {\n    margin-bottom: 29px;\n}\n}\n.banner-container .content[data-v-3715bebb] {\n  position: absolute;\n  top: 16px;\n  left: 17px;\n}\n.banner-container .font-true-medium[data-v-3715bebb] {\n  font-family: \"TrueMedium\";\n}\n.banner-container .font-sans-serif[data-v-3715bebb] {\n  font-family: \"sans-serif\";\n}\n.banner-container .line-height-1[data-v-3715bebb] {\n  line-height: 1;\n}\n.banner-container .font-weight-500[data-v-3715bebb] {\n  font-weight: 500;\n}\n.banner-container .font-weight-600[data-v-3715bebb] {\n  font-weight: 600;\n}\n.banner-container .font-weight-700[data-v-3715bebb] {\n  font-weight: 700;\n}\n.banner-container .font-weight-900[data-v-3715bebb] {\n  font-weight: 900;\n}\n.banner-container .text-white[data-v-3715bebb] {\n  color: white;\n}\n.banner-container .text-gray[data-v-3715bebb] {\n  color: #928e94;\n}\n.banner-container .flex[data-v-3715bebb] {\n  display: flex;\n}\n.banner-container .text-1[data-v-3715bebb] {\n  font-size: 18px;\n}\n.banner-container .text-2[data-v-3715bebb] {\n  margin-top: 10.3px;\n  font-size: 31px;\n  letter-spacing: -1.45px;\n  word-spacing: 3px;\n}\n.banner-container .text-3[data-v-3715bebb] {\n  margin-top: 4px;\n  margin-bottom: 18px;\n  font-size: 22px;\n}\n.banner-container .text-4[data-v-3715bebb] {\n  margin-left: 2px;\n  margin-bottom: 12px;\n  font-size: 16.5px;\n  letter-spacing: 0.7px;\n}\n.banner-container .text-5-container[data-v-3715bebb] {\n  line-height: 8px;\n}\n.banner-container .text-5a[data-v-3715bebb] {\n  font-size: 45px;\n  letter-spacing: 2px;\n}\n.banner-container .text-5b[data-v-3715bebb] {\n  font-size: 25px;\n}\n.banner-container .border-right[data-v-3715bebb] {\n  margin-right: 14px;\n  padding-right: 11px;\n  border-right: 2px solid #928e94;\n}\n@media screen and (min-width: 1200px) {\n.banner-container .content[data-v-3715bebb] {\n    top: 19px;\n    left: calc(50% - 570px);\n}\n.banner-container .text-1[data-v-3715bebb] {\n    font-size: 23.5px;\n}\n.banner-container .text-2[data-v-3715bebb] {\n    font-size: 39px;\n    letter-spacing: -2px;\n    word-spacing: 4px;\n}\n.banner-container .text-3[data-v-3715bebb] {\n    margin-top: 0;\n    margin-bottom: 25px;\n    font-size: 33px;\n}\n.banner-container .text-4[data-v-3715bebb] {\n    margin-left: 2px;\n    margin-bottom: 20px;\n    font-size: 23px;\n    line-height: 16px;\n}\n.banner-container .text-5-container[data-v-3715bebb] {\n    line-height: 10px;\n}\n.banner-container .text-5a[data-v-3715bebb] {\n    font-size: 55px;\n    letter-spacing: 2.5px;\n}\n.banner-container .text-5b[data-v-3715bebb] {\n    font-size: 35px;\n}\n.banner-container .border-right[data-v-3715bebb] {\n    margin-right: 22px;\n    padding-right: 20px;\n    border-right: 2px solid #928e94;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".popup-advertisement-container[data-v-4b25a94f] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n}\n.popup-advertisement-container a img[data-v-4b25a94f] {\n  width: 360px;\n  height: 550px;\n}\n.popup-advertisement-container button[data-v-4b25a94f] {\n  margin-top: 15px;\n  outline: none;\n  border: none;\n  min-width: 180px;\n  padding: 0px 0px;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 22px;\n  line-height: 180%;\n  color: #fff;\n  text-align: center;\n  border-radius: 30px;\n  cursor: pointer;\n}\n.popup-advertisement-container button.bg_gradient[data-v-4b25a94f] {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n}\n@media screen and (max-width: 525px) {\n.popup-advertisement-container a img[data-v-4b25a94f] {\n    width: 275px;\n    height: 350px;\n}\n}\n@media screen and (max-width: 450px) {\n.popup-advertisement-container a img[data-v-4b25a94f] {\n    width: 220px;\n    height: 300px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".home-page .product_card_item .product_img {\n  margin: 45px auto;\n}\n@media only screen and (min-width: 415px) {\n.home-page .product_card_item.exclusive_or_best_seller {\n    width: 232px;\n    height: 400px;\n}\n}\n@media only screen and (max-width: 414px) and (min-width: 400px) {\n.home-page .product_card_item.flash_sale:nth-child(odd) {\n    margin-left: 0px;\n}\n}\n.product_card_item {\n  position: relative;\n  display: inline-block;\n  background: #FFFFFF;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  flex-shrink: 0;\n  border: 3px solid transparent;\n  text-decoration: none;\n}\n.product_card_item[disabled] {\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item .installment-payment-badge {\n  position: absolute;\n  text-align: left;\n  padding: 15px 0px 0px 15px;\n}\n.product_card_item .installment-payment-badge .discount-img {\n  height: 25px;\n  width: 50px;\n}\n@media screen and (max-width: 1024px) {\n.product_card_item .installment-payment-badge .discount-img {\n    height: 20px;\n    width: 40px;\n}\n}\n.product_card_item .installment-payment-badge .discount-img[disabled] {\n  opacity: 0.3;\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item.flash_sale {\n  width: 134px;\n  height: 192px;\n  border-radius: 6px;\n  font-family: \"TrueLight\";\n}\n.product_card_item.flash_sale .product_img {\n  width: 90px;\n  height: 90px;\n  margin: 22px 22px 0px 22px;\n}\n.product_card_item.flash_sale:hover:not([disabled]) {\n  border: 3px solid #E62627;\n}\n.product_card_item.flash_sale .infor_1 {\n  margin-top: 4px;\n  margin-left: 7px;\n  margin-right: 7px;\n  color: #404040;\n  font-size: 18px;\n  line-height: 18px;\n  overflow: hidden;\n}\n.product_card_item.flash_sale .product_name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 21px;\n  max-height: 48px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.product_card_item.flash_sale .infor_2 {\n  margin-left: 7px;\n  margin-right: 7px;\n}\n.product_card_item.flash_sale .infor_2 > p {\n  height: 34px;\n}\n.product_card_item.flash_sale .infor_2 .product_special_discount_rice {\n  font-family: \"TrueBold\";\n  color: #E62627;\n  font-size: 36px;\n  line-height: 34px;\n}\n.product_card_item.flash_sale .infor_2 .product_original_rice {\n  float: right;\n  margin-top: 10px;\n  color: #404040;\n  font-size: 20px;\n  line-height: 24px;\n  -webkit-text-decoration-line: line-through;\n          text-decoration-line: line-through;\n}\n.product_card_item.exclusive_or_best_seller {\n  width: 180px;\n  height: 330px;\n  border-radius: 10px;\n  font-family: \"TrueMedium\";\n}\n.product_card_item.exclusive_or_best_seller:hover:not([disabled]) {\n  border: 3px solid #E62627;\n}\n.product_card_item.exclusive_or_best_seller .benefit {\n  text-align: center;\n}\n.product_card_item.exclusive_or_best_seller .benefit .headline {\n  font-size: 23px;\n  padding-top: 10px;\n}\n.product_card_item.exclusive_or_best_seller .product_img {\n  width: 150px;\n  height: 150px;\n}\n.product_card_item.exclusive_or_best_seller .infor_1 {\n  margin-top: 9.38px;\n  height: 46px;\n  text-align: center;\n  line-height: 24px;\n}\n.product_card_item.exclusive_or_best_seller .product_name {\n  color: #000000;\n  font-size: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 21px;\n  max-height: 48px;\n  height: 41px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.product_card_item.exclusive_or_best_seller .min_price {\n  font-family: \"TrueBold\";\n  color: #E62627;\n  font-size: 30px;\n}\n.product_card_item.exclusive_or_best_seller .min_price span {\n  font-family: \"TrueLight\";\n  color: #404040;\n  font-size: 18px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 {\n  margin-top: 6px;\n  margin-left: 17px;\n  margin-right: 17px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment .percent {\n  display: inline-block;\n  height: 25px;\n  width: 46px;\n  padding: 0 1.5px 1px;\n  font-family: \"TrueBold\";\n  color: #FFFFFF;\n  font-size: 15px;\n  line-height: 25px;\n  vertical-align: middle;\n  border-radius: 4px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment .percent .zero {\n  margin-left: 1px;\n  font-size: 36px;\n  vertical-align: -2px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment .percent[disabled] {\n  background-color: #E1E1E1;\n  background-image: none;\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment .months {\n  float: right;\n  height: 25px;\n  padding-top: 2px;\n  font-family: \"TrueMedium\";\n  color: #404040;\n  font-size: 18px;\n  line-height: 25px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page {\n  width: 180px;\n  height: 330px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .product_img {\n  width: 150px;\n  height: 150px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .infor_1 {\n  margin-top: 20.58px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .infor_2 {\n  margin-top: 10px;\n}\n.product_card_item.new_arrival {\n  width: 200px;\n  height: 210px;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);\n  font-family: \"TrueLight\";\n}\n@media only screen and (max-width: 374px) {\n.product_card_item.new_arrival {\n    width: 154px;\n}\n}\n@media only screen and (min-width: 375px) and (max-width: 412px) {\n.product_card_item.new_arrival {\n    width: 180px;\n}\n}\n.product_card_item.new_arrival .product_img {\n  padding-top: 20px;\n  padding-bottom: 5px;\n  width: 126px;\n  height: 126px;\n  margin: auto;\n}\n.product_card_item.new_arrival:hover:not([disabled]) {\n  border: 3px solid #E62627;\n}\n.product_card_item.new_arrival .infor_1 {\n  margin-top: 10px;\n  height: 42px;\n  text-align: center;\n}\n.product_card_item.new_arrival .product_name {\n  color: #000000;\n  font-size: 20px;\n  line-height: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 21px;\n  max-height: 48px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.product_card_item.new_arrival .min_price {\n  font-family: \"TrueBold\";\n  color: #E62627;\n  font-size: 28px;\n  line-height: 20.8px;\n}\n.product_card_item.new_arrival .min_price span {\n  font-family: \"TrueLight\";\n  color: #404040;\n  font-size: 18px;\n}\n.product_card_item .product_img {\n  display: block;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: 2px;\n  margin-top: 45px;\n  margin-bottom: 20px;\n}\n.product_card_item .product_img[disabled] {\n  opacity: 0.3;\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item .flash_sale_badge {\n  position: absolute;\n  height: 15px;\n  top: 3px;\n  left: 7px;\n}\n.product_card_item .tag_badge {\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  padding-left: 12px;\n  padding-right: 13px;\n  font-family: \"TrueLight\";\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: 13px;\n  border-radius: 3px;\n}\n.product_card_item .tag_badge[disabled] {\n  background-color: #E1E1E1;\n  background-image: none;\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item .sold_out_badge, .product_card_item .pre_booking_badge {\n  position: absolute;\n  top: 13px;\n  right: 7px;\n  padding: 3px 5px;\n  font-family: \"TrueBold\";\n  color: #DC4333;\n  font-size: 16px;\n  line-height: 16px;\n  vertical-align: middle;\n  border: 1px solid #E62627;\n  border-radius: 4px;\n}\n.product_card_item .bg_gradient {\n  background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n}\n.product_card_item p {\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product_card_item .hidden {\n  display: none;\n}\n.product_card_item .btn {\n  outline: none;\n  border: none;\n  min-width: 100px;\n  padding-left: 0;\n  padding-right: 0;\n  font-family: \"TrueBold\";\n  color: #FFFFFF;\n  font-size: 22px;\n  line-height: 26px;\n  text-align: center;\n  border-radius: 30px;\n  cursor: pointer;\n}\n.product_card_item .btn[disabled] {\n  background-color: #E1E1E1;\n  background-image: none;\n  pointer-events: none;\n  cursor: default;\n}\n.product_card_item .btn.btn_pre_booking {\n  color: #E62627;\n  background-color: #FFFFFF;\n  background-image: none;\n  border: 2px solid #E62627;\n}\n.product_card_item .opacity-0 {\n  opacity: 0;\n}\n@media screen and (max-width: 720px) and (min-width: 430px) {\n.product_card_item.exclusive_or_best_seller, .product_card_item.exclusive_or_best_seller.detail_page {\n    width: 200px;\n}\n.product_card_item.exclusive_or_best_seller .product_img, .product_card_item.exclusive_or_best_seller.detail_page .product_img {\n    margin-left: 11px;\n}\n}\n@media only screen and (min-width: 415px) {\n.product_card_item.flash_sale {\n    width: 190px;\n    height: 340px;\n    border-radius: 10px;\n}\n.product_card_item.flash_sale .product_img {\n    width: 120px;\n    height: 120px;\n    margin: 44px 35px 26px 35px;\n}\n.product_card_item.flash_sale .infor_1 {\n    margin-top: 26px;\n    margin-left: 12px;\n    margin-right: 12px;\n    height: 53px;\n    font-size: 24px;\n    line-height: 24px;\n}\n.product_card_item.flash_sale .infor_2 {\n    margin-top: 3px;\n    margin-left: 12px;\n    margin-right: 12px;\n}\n.product_card_item.flash_sale .infor_2 .product_original_rice {\n    float: unset;\n    margin-top: unset;\n}\n.product_card_item.flash_sale .infor_2 .percentage_of_discount_value {\n    display: inline;\n    float: right;\n    margin-top: 6px;\n    padding-top: 2.5px;\n    padding-bottom: 2.5px;\n    padding-left: 9.5px;\n    padding-right: 9.5px;\n    font-family: \"TrueBold\";\n    color: #E62627;\n    font-size: 15px;\n    line-height: 18px;\n    text-align: center;\n    border: 1px solid #E62627;\n    border-radius: 4px;\n}\n.product_card_item.flash_sale .btn {\n    width: 170px;\n    margin-top: 8px;\n    margin-left: 7px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n}\n.product_card_item.exclusive_or_best_seller {\n    height: 365px;\n}\n.product_card_item.exclusive_or_best_seller:hover:not([disabled]) {\n    border: 3px solid #E62627;\n}\n.product_card_item.exclusive_or_best_seller:hover:not([disabled]) .btn_pre_booking {\n    color: #FFFFFF;\n    background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n    border: 2px solid transparent;\n}\n.product_card_item.exclusive_or_best_seller .product_img {\n    width: 170px;\n    height: 170px;\n}\n.product_card_item.exclusive_or_best_seller .infor_1 {\n    margin-top: -7.94px;\n    height: 57px;\n    line-height: 30px;\n}\n.product_card_item.exclusive_or_best_seller .product_name {\n    font-size: 24px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    line-height: 21px;\n    max-height: 48px;\n    height: 41px;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    margin-bottom: 4px;\n}\n.product_card_item.exclusive_or_best_seller .min_price {\n    font-size: 36px;\n}\n.product_card_item.exclusive_or_best_seller .min_price span {\n    font-size: 24px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 {\n    margin-top: 11px;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment {\n    text-align: center;\n}\n.product_card_item.exclusive_or_best_seller .infor_2 .installment .months {\n    float: unset;\n    margin-left: 6px;\n    padding-top: 0;\n    font-size: 20px;\n    line-height: 1;\n    vertical-align: -4px;\n}\n.product_card_item.exclusive_or_best_seller .btn {\n    width: 165px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    margin: 30px auto;\n}\n.product_card_item.exclusive_or_best_seller .btn.btn_pre_booking {\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page {\n    height: 365px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .product_img {\n    width: 170px;\n    height: 170px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .infor_1 {\n    margin-top: -7.94px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .infor_2 {\n    margin-top: 19px;\n}\n.product_card_item.new_arrival {\n    width: 315px;\n    height: 235px;\n    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);\n}\n.product_card_item.new_arrival .content-info {\n    display: flex;\n    align-items: center;\n    height: 32%;\n}\n.product_card_item.new_arrival .product_img {\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 180px;\n    height: 150px;\n    margin: auto;\n}\n.product_card_item.new_arrival .infor_1 {\n    margin-top: 0px;\n    margin-left: 17px;\n    width: 166px;\n    height: auto;\n    text-align: left;\n}\n.product_card_item.new_arrival .product_name {\n    font-size: 24px;\n    line-height: 25px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    line-height: 21px;\n    max-height: 48px;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n.product_card_item.new_arrival .min_price {\n    font-size: 34px;\n    line-height: 25px;\n}\n.product_card_item.new_arrival .min_price span {\n    font-size: 20px;\n}\n.product_card_item.new_arrival .btn {\n    margin-left: 10px;\n    width: 48px;\n    height: 36px;\n}\n.product_card_item .flash_sale_badge {\n    height: 20px;\n    top: 5px;\n}\n.product_card_item .tag_badge {\n    top: 12px;\n    left: 12px;\n    padding-top: 0;\n    padding-bottom: 1px;\n    padding-left: 14px;\n    padding-right: 15px;\n    font-size: 20px;\n    line-height: 24px;\n}\n.product_card_item .sold_out_badge, .product_card_item .pre_booking_badge {\n    top: 13.5px;\n    right: 10px;\n}\n.product_card_item .btn {\n    display: block;\n}\n}\n@media screen and (max-width: 414px) {\n.product_card_item.flash_sale {\n    height: 200px;\n}\n.product_card_item.exclusive_or_best_seller .product_img, .product_card_item.exclusive_or_best_seller.detail_page .product_img {\n    margin: 45px 0px 20px 12px;\n}\n.product_card_item.exclusive_or_best_seller.home_page {\n    height: 290px;\n}\n}\n@media screen and (max-width: 414px) and (min-width: 400px) {\n.product_card_item.flash_sale:nth-child(odd) {\n    margin-left: 10px;\n}\n}\n@media screen and (max-width: 414px) and (min-width: 375px) {\n.product_card_item.flash_sale {\n    width: 170px;\n}\n.product_card_item.flash_sale .product_img {\n    background-color: grey;\n    margin-left: 35px;\n}\n}\n@media only screen and (max-width: 405px) and (min-width: 396px) {\n.product_card_item.exclusive_or_best_seller {\n    height: 330px;\n}\n.product_card_item.exclusive_or_best_seller .product_img {\n    margin: 40px 0px 0px 10px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page {\n    height: 330px;\n}\n.product_card_item.exclusive_or_best_seller.detail_page .product_img {\n    margin: 40px 0px 0px 12px;\n}\n}\n@media screen and (max-width: 395px) {\n.product_card_item.exclusive_or_best_seller, .product_card_item.exclusive_or_best_seller.detail_page {\n    max-width: 150px;\n    min-width: 145px;\n    height: 300px;\n}\n.product_card_item.exclusive_or_best_seller .product_img, .product_card_item.exclusive_or_best_seller.detail_page .product_img {\n    margin: 45px 0px 0px 4px;\n    width: 135px;\n    height: 135px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stick-banner-container[data-v-be8f41c4] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  gap: 6px 12px;\n  margin: 0 0 0 0;\n}\n.stick-banner-container img[data-v-be8f41c4] {\n  width: 100%;\n  height: auto;\n}\n.stick-banner-container a[data-v-be8f41c4] {\n  display: contents;\n  line-height: 0;\n}\n.stick-banner-container .item[data-v-be8f41c4] {\n  flex: 1;\n  display: flex;\n}\n.stick-banner-container .break-desktop[data-v-be8f41c4] {\n  gap: 0 0;\n  width: 100%;\n}\n@media screen and (min-width: 800px) {\n.stick-banner-container .break-desktop[data-v-be8f41c4] {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page.new-level-a[data-v-6b3ea30d], .page.product-items[data-v-6b3ea30d] {\n  max-width: 1200px;\n  padding: 0;\n}\n.store-container[data-v-6b3ea30d] {\n  padding: 0;\n  max-width: 1200px;\n  margin: auto;\n  position: relative;\n  background-color: transparent;\n}\n.store-container .store-products-container[data-v-6b3ea30d] {\n  clear: both;\n  padding: 24px 0;\n  display: flex;\n}\n.store-container .store-products-container .filters-container[data-v-6b3ea30d] {\n  width: 280px;\n  min-width: 280px;\n  font-size: 24px;\n  color: #000;\n  line-height: 30px;\n  padding: 20px 0;\n}\n.store-container .store-products-container .filters-container .filter-container[data-v-6b3ea30d] {\n  margin-bottom: 30px;\n}\n.store-container .store-products-container .filters-container .filter-container .filter-title[data-v-6b3ea30d] {\n  font-family: \"TrueBold\";\n  font-size: 30px;\n  margin-bottom: 4px;\n}\n.store-container .store-products-container .filters-container .filter-container .filter-item[data-v-6b3ea30d] {\n  display: block;\n  cursor: pointer;\n}\n.store-container .store-products-container .product-container[data-v-6b3ea30d] {\n  width: 100%;\n}\n.store-container .store-products-container .product-container .product-header-container[data-v-6b3ea30d] {\n  color: #000;\n  margin-bottom: 40px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header[data-v-6b3ea30d] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  margin: 20px 0;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header.mobile[data-v-6b3ea30d] {\n  display: none;\n  margin-bottom: 24px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title[data-v-6b3ea30d] {\n  font-size: 40px;\n  font-family: \"TrueBold\";\n  flex: 1;\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .subtitle[data-v-6b3ea30d] {\n  font-family: \"TrueMedium\";\n  font-size: 24px;\n  color: #666;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .skeleton[data-v-6b3ea30d] {\n  width: 100%;\n  max-width: 240px;\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-filter[data-v-6b3ea30d] {\n  display: grid;\n  width: 100%;\n  grid-gap: 10px;\n  grid-template-columns: repeat(2, 1fr);\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-filter .skeleton[data-v-6b3ea30d] {\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .dropdown[data-v-6b3ea30d] input {\n  border-color: #ddd;\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .dropdown[data-v-6b3ea30d] .options {\n  text-transform: capitalize;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .filter-button[data-v-6b3ea30d] {\n  min-width: 40px;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  padding: 8px;\n  color: #666;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort[data-v-6b3ea30d] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  line-height: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .dropdown[data-v-6b3ea30d],\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .skeleton[data-v-6b3ea30d] {\n  margin-left: 8px;\n  width: 220px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort .skeleton[data-v-6b3ea30d] {\n  height: 40px;\n  border-radius: 8px;\n}\n.store-container .store-products-container .product-container .product-header-container .brands[data-v-6b3ea30d] {\n  font-size: 25px;\n  margin-bottom: -20px;\n  margin-top: -20px;\n}\n.store-container .store-products-container .products-grid-container[data-v-6b3ea30d] {\n  width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  margin-bottom: 20px;\n}\n.store-container .store-products-container .products-grid-container .product[data-v-6b3ea30d] {\n  flex: 1;\n  display: flex;\n  text-decoration: none;\n}\n.store-container .store-products-container .terms-container[data-v-6b3ea30d] {\n  display: flex;\n  justify-content: center;\n  margin: 24px 0;\n}\n.store-container .store-products-container .terms-container a[data-v-6b3ea30d] {\n  min-width: 260px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #555;\n  color: #fff;\n  font-family: \"TrueBold\";\n  font-size: 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: 50ms ease background-color;\n}\n.store-container .store-products-container .terms-container a[data-v-6b3ea30d]:hover {\n  background-color: #000;\n}\n.store-container .store-products-container .products-placeholder[data-v-6b3ea30d] {\n  font-size: 22px;\n  text-align: center;\n  grid-column: 1/-1;\n  padding: 96px 0;\n}\n.store-container .store-products-container .products-placeholder.no-padding[data-v-6b3ea30d] {\n  padding: 0;\n}\n.store-container .store-products-container .products-placeholder .load-more[data-v-6b3ea30d] {\n  display: inline-block;\n  margin: 24px 0;\n  background: #828282;\n  color: #fff;\n  padding: 6px 24px;\n  border-radius: 8px;\n  font-size: 22px;\n  cursor: pointer;\n}\n@media screen and (max-width: 1132px) {\n.store-container .store-products-container[data-v-6b3ea30d] {\n    padding: 24px 16px;\n}\n}\n@media screen and (max-width: 860px) {\n.store-container .store-products-container[data-v-6b3ea30d] {\n    padding: 0;\n}\n.store-container .store-products-container .filters-container[data-v-6b3ea30d] {\n    display: none;\n}\n.store-container .store-products-container .product-container[data-v-6b3ea30d] {\n    padding: 0 16px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header[data-v-6b3ea30d] {\n    margin: 16px 0;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header.mobile[data-v-6b3ea30d] {\n    display: flex;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title[data-v-6b3ea30d] {\n    font-size: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-title .skeleton[data-v-6b3ea30d] {\n    height: 30px;\n}\n.store-container .store-products-container .product-container .product-header-container .product-header .product-header-sort[data-v-6b3ea30d] {\n    display: none;\n}\n.store-container .store-products-container .product-container .products-grid-container[data-v-6b3ea30d] {\n    grid-gap: 10px;\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n}\n@media screen and (max-width: 520px) {\n.store-container .store-products-container .product-container .products-grid-container[data-v-6b3ea30d] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n}\n@media screen and (max-width: 320px) {\n.store-container .store-products-container .product-container .products-grid-container[data-v-6b3ea30d] {\n    grid-template-columns: 1fr;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-item.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("center", [_c("H1", [_vm._v("TEST BY ISARA")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData& ***!
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
    "a",
    {
      staticClass: "product_card_item",
      class: [
        _vm.containerClass,
        _vm.isExclusiveOrBestSellerOnDetailPage ? "detail_page" : "",
        _vm.componentType === "exclusive" ||
        _vm.componentType === "best_seller" ||
        _vm.componentType === "new_arrival"
          ? "home_page"
          : "",
      ],
      attrs: { disabled: _vm.isSoldOut, href: _vm.pageLink },
      on: {
        click: function ($event) {
          return _vm.$emit(
            "handleBtnclick",
            _vm.productData,
            (_vm.route = false)
          )
        },
      },
    },
    [
      _vm.showBenefit(_vm.productData)
        ? _c("div", [
            _c("div", { staticClass: "benefit" }, [
              _c("div", {
                staticClass: "headline",
                domProps: { innerHTML: _vm._s(_vm.campBean.headline) },
              }),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.componentType !== "new_arrival" &&
      _vm.componentType !== "flash_sale" &&
      _vm.isInstallment
        ? _c("div", { staticClass: "installment-payment-badge" }, [
            _vm.isSoldOut
              ? _c("img", {
                  staticClass: "discount-img",
                  attrs: {
                    disabled: _vm.isSoldOut,
                    src: "/images/store/discount-out-of-stock-case.png",
                  },
                })
              : _c("img", {
                  staticClass: "discount-img",
                  attrs: { src: "/images/store/discount.jpg" },
                }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("img", {
        staticClass: "product_img",
        attrs: {
          src: _vm.imgUrl,
          alt: _vm.productName,
          disabled: _vm.isSoldOut,
        },
      }),
      _vm._v(" "),
      _vm.componentType === "flash_sale"
        ? _c(
            "svg",
            {
              staticClass: "flash_sale_badge",
              attrs: {
                viewBox: "0 0 32 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              _c("path", {
                attrs: {
                  d: "M1.94118 3.08818V4.67641H4.67647V5.99994H1.94118V8.91171H0V1.76465H4.76471V2.29406C4.76471 2.73524 4.41176 3.08818 3.97059 3.08818H1.94118Z",
                  fill: "#FF0000",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M16.0588 8.82382L15.5294 7.32382H12.8824L12.353 8.82382H10.4118L13.1471 1.67676H14.5588C15.0883 1.67676 15.6177 2.0297 15.7941 2.55911L18.2647 8.82382H16.0588ZM14.2941 3.17676L13.3236 6.00029H15.0883L14.2941 3.17676Z",
                  fill: "#FF0000",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M24.0882 6.61779C24.0882 7.05897 23.9999 7.50014 23.8235 7.76485C23.647 8.02955 23.3823 8.29426 23.1176 8.47073C22.8529 8.6472 22.4999 8.73544 22.0588 8.82367C21.7058 8.91191 21.2646 8.91191 20.9117 8.91191C20.5588 8.91191 20.2058 8.91191 19.8529 8.82367C19.4999 8.73544 19.147 8.73544 18.7941 8.55897L18.9705 7.05897C19.2352 7.1472 19.4999 7.32367 19.8529 7.41191C20.2058 7.50014 20.5588 7.58838 20.9117 7.58838C21.0882 7.58838 21.1764 7.58838 21.3529 7.58838C21.5294 7.58838 21.6176 7.50014 21.7058 7.50014C21.7941 7.41191 21.8823 7.41191 21.9705 7.32367C22.0588 7.05897 22.0588 6.97073 22.0588 6.79426C22.0588 6.61779 21.9705 6.52955 21.8823 6.35308C21.7941 6.17661 21.7058 6.26485 21.5294 6.17661C21.3529 6.08838 21.1764 6.00014 20.9999 6.00014C20.8235 5.91191 20.5588 5.91191 20.3823 5.82367C20.2058 5.73544 19.9411 5.6472 19.7646 5.55897C19.5882 5.3825 19.4117 5.29426 19.2352 5.11779C19.0588 4.94132 18.9705 4.76485 18.8823 4.58838C18.7941 4.32367 18.7058 4.05897 18.7058 3.79426C18.7058 3.35308 18.7941 3.00014 18.9705 2.73544C19.147 2.47073 19.4117 2.20603 19.6764 2.02956C19.9411 1.85308 20.2941 1.76485 20.647 1.67661C20.9999 1.58838 21.3529 1.58838 21.7058 1.58838C22.0588 1.58838 22.4117 1.58838 22.6764 1.67661C23.0294 1.76485 23.2941 1.76485 23.5588 1.85308L23.4705 3.35308C23.2058 3.26485 22.9411 3.17661 22.6764 3.08838C22.4117 3.00014 22.147 3.00014 21.8823 3.00014C21.7941 3.00014 21.6176 3.00014 21.4411 3.00014C21.2646 3.00014 21.1764 3.00014 20.9999 3.08838C20.9117 3.17661 20.7352 3.17661 20.647 3.26485C20.5588 3.35308 20.4705 3.44132 20.4705 3.61779C20.4705 3.79426 20.5588 3.8825 20.647 3.97073C20.7352 4.05897 20.9117 4.1472 20.9999 4.23544C21.1764 4.32367 21.3529 4.32367 21.5294 4.41191C21.7058 4.50014 21.9705 4.50014 22.147 4.58838C22.3235 4.67661 22.5882 4.76485 22.7646 4.85308C22.9411 4.94132 23.1176 5.11779 23.2941 5.20603C23.4705 5.3825 23.5588 5.55897 23.647 5.73544C23.9999 6.00014 24.0882 6.26485 24.0882 6.61779Z",
                  fill: "#FF0000",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M29.3823 8.82382V5.73558H27.0882V8.82382H25.2353V1.67676H26.2059C26.7353 1.67676 27.1765 2.11793 27.1765 2.64735V4.41205H29.4706V1.67676H31.3235V8.82382H29.3823Z",
                  fill: "#FF0000",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M16.7647 14.8236L16.4118 13.7648H14.5588L14.2059 14.8236H12.8823L14.7353 9.9707H16.3235L18.1765 14.8236H16.7647ZM15.5294 10.9413L14.9118 12.8825H16.147L15.5294 10.9413Z",
                  fill: "#333333",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M19.4117 14.8236V9.9707H20.0294C20.3823 9.9707 20.647 10.2354 20.647 10.5884V13.8531H22.6764V14.8236H19.4117Z",
                  fill: "#333333",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M23.6471 14.8236V9.9707H27.0883V10.3236C27.0883 10.6766 26.8236 10.8531 26.5589 10.8531H24.9706V11.8236H27.0001V12.706H24.9706V13.8531H27.1765V14.7354H23.6471V14.8236Z",
                  fill: "#333333",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M6.8824 0H12.6177L8.20593 7.41176H10.1471L4.32358 15L6.8824 8.82353H4.67652L6.8824 0Z",
                  fill: "#FF0000",
                },
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M12.0882 13.3236C12.0882 13.6766 12 13.9413 11.9118 14.1178C11.8235 14.2942 11.647 14.4707 11.3823 14.6472C11.2059 14.7354 10.9412 14.8236 10.6765 14.9119C10.4118 15.0001 10.147 15.0001 9.88234 15.0001C9.61763 15.0001 9.44116 15.0001 9.17646 14.9119C8.91175 14.9119 8.64705 14.8236 8.47058 14.7354L8.55881 13.6766C8.73528 13.7648 8.91175 13.8531 9.17646 13.9413C9.44116 14.0295 9.61763 14.0295 9.88234 14.0295C9.97057 14.0295 10.0588 14.0295 10.147 14.0295C10.2353 14.0295 10.3235 14.0295 10.4118 13.9413C10.5 13.9413 10.5882 13.8531 10.5882 13.7648C10.5882 13.6766 10.6765 13.5884 10.6765 13.5001C10.6765 13.4119 10.6765 13.3236 10.5882 13.2354C10.5 13.1472 10.4118 13.0589 10.3235 13.0589C10.2353 12.9707 10.0588 12.9707 9.97057 12.8825C9.7941 12.8825 9.70587 12.7942 9.5294 12.7942C9.35293 12.706 9.26469 12.706 9.08822 12.6178C8.91175 12.5295 8.82352 12.4413 8.73528 12.3531C8.64705 12.2648 8.55881 12.0884 8.47058 12.0001C8.38234 11.8236 8.38234 11.6472 8.38234 11.4707C8.38234 11.206 8.47057 10.9413 8.55881 10.7648C8.64705 10.5883 8.82352 10.4119 9.08822 10.3236C9.35293 10.2354 9.5294 10.1472 9.7941 10.0589C10.0588 9.9707 10.3235 9.9707 10.5 9.9707C10.7647 9.9707 10.9412 9.9707 11.2059 10.0589C11.4706 10.0589 11.647 10.1472 11.8235 10.1472L11.7353 11.206C11.5588 11.1178 11.3823 11.0295 11.2059 11.0295C11.0294 11.0295 10.8529 10.9413 10.6765 10.9413C10.5882 10.9413 10.5 10.9413 10.4118 10.9413C10.3235 10.9413 10.2353 10.9413 10.147 11.0295C10.0588 11.0295 9.97057 11.1178 9.88234 11.206C9.7941 11.2942 9.7941 11.3825 9.7941 11.4707C9.7941 11.5589 9.7941 11.6472 9.88234 11.7354C9.97057 11.8236 10.0588 11.8236 10.147 11.9119C10.2353 11.9119 10.4118 12.0001 10.5 12.0001C10.6765 12.0001 10.7647 12.0883 10.9412 12.0883C11.1176 12.1766 11.2059 12.1766 11.3823 12.2648C11.5588 12.3531 11.647 12.4413 11.7353 12.5295C11.8235 12.6178 11.9118 12.7942 12 12.8825C12.0882 12.8825 12.0882 13.0589 12.0882 13.3236Z",
                  fill: "#333333",
                },
              }),
            ]
          )
        : _vm.containerClass === "exclusive_or_best_seller"
        ? [
            _vm.isSoldOut
              ? _c("div", { staticClass: "sold_out_badge" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.Locale.sold_out[_vm.$i18n.locale]) +
                      "\n    "
                  ),
                ])
              : _vm.isPreBooking
              ? _c("div", { staticClass: "pre_booking_badge" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.Locale.pre_booking[_vm.$i18n.locale]) +
                      "\n    "
                  ),
                ])
              : _vm._e(),
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "content-info" }, [
        _c("div", { staticClass: "infor_1" }, [
          _c("p", { staticClass: "product_name" }, [
            _vm._v(_vm._s(_vm.productName)),
          ]),
          _vm._v(" "),
          _vm.componentType !== "flash_sale"
            ? _c(
                "p",
                { staticClass: "min_price" },
                [
                  Math.trunc(_vm.minPrice) > 0
                    ? [
                        _c("span", [
                          _vm._v(
                            " " +
                              _vm._s(_vm.Locale.start_at[_vm.$i18n.locale]) +
                              " "
                          ),
                        ]),
                        _vm._v(
                          "\n                      " +
                            _vm._s(Math.trunc(_vm.minPrice).toLocaleString()) +
                            ".-\n            "
                        ),
                      ]
                    : [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.Locale.free[_vm.$i18n.locale]) +
                            "\n            "
                        ),
                      ],
                ],
                2
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _vm.componentType !== "new_arrival"
          ? _c(
              "div",
              {
                staticClass: "infor_2",
                class:
                  _vm.isSoldOut && !_vm.isExclusiveOrBestSellerOnDetailPage
                    ? "opacity-0"
                    : "",
              },
              [
                _vm.componentType === "flash_sale"
                  ? _c("p", [
                      _c(
                        "span",
                        { staticClass: "product_special_discount_rice" },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                Math.trunc(
                                  _vm.productSpecialDiscountPrice
                                ).toLocaleString()
                              ) +
                              ".-\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      Math.trunc(_vm.productOriginalPrice) >
                      Math.trunc(_vm.productSpecialDiscountPrice)
                        ? _c("span", { staticClass: "product_original_rice" }, [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  Math.trunc(
                                    _vm.productOriginalPrice
                                  ).toLocaleString()
                                ) +
                                ".-\n          "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.RoundedPercentDiscount > 0
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "percentage_of_discount_value hidden",
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(-_vm.RoundedPercentDiscount) +
                                  "%\n          "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ])
                  : _vm._e(),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        (!_vm.isExclusiveOrBestSellerOnDetailPage && _vm.isFlashsalePage) ||
        _vm.componentType === "flash_sale" ||
        _vm.componentType === "exclusive" ||
        _vm.componentType === "best_seller" ||
        _vm.componentType === "new_arrival"
          ? _c(
              "button",
              {
                staticClass: "hidden btn bg_gradient",
                class: _vm.isPreBooking ? "btn_pre_booking" : "",
                attrs: { disabled: _vm.isSoldOut },
                on: {
                  click: function ($event) {
                    return _vm.$emit("handleBtnclick", _vm.productData)
                  },
                },
              },
              [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm.Locale[_vm.isPreBooking ? "pre_booking" : "buy_now"][
                        _vm.$i18n.locale
                      ]
                    ) +
                    "\n      "
                ),
              ]
            )
          : _vm._e(),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/pages/testpage/deal-item.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/testpage/deal-item.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true& */ "./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true&");
/* harmony import */ var _deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-item.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& */ "./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d88eb8e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/deal-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=style&index=0&id=d88eb8e2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_style_index_0_id_d88eb8e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deal-item.vue?vue&type=template&id=d88eb8e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deal_item_vue_vue_type_template_id_d88eb8e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/deals-container.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/testpage/deals-container.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deals-container.vue?vue&type=template&id=0deb71b6& */ "./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6&");
/* harmony import */ var _deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deals-container.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/deals-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./deals-container.vue?vue&type=template&id=0deb71b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/deals-container.vue?vue&type=template&id=0deb71b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_container_vue_vue_type_template_id_0deb71b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/testpage/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6b3ea30d&scoped=true& */ "./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& */ "./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=2&lang=scss& */ "./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b3ea30d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/testpage/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6b3ea30d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/index.vue?vue&type=template&id=6b3ea30d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b3ea30d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/main-banner.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/testpage/main-banner.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-banner.vue?vue&type=template&id=3715bebb&scoped=true& */ "./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true&");
/* harmony import */ var _main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-banner.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& */ "./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3715bebb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/main-banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=style&index=0&id=3715bebb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_style_index_0_id_3715bebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main-banner.vue?vue&type=template&id=3715bebb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/main-banner.vue?vue&type=template&id=3715bebb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_banner_vue_vue_type_template_id_3715bebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/popup-advertisement-component.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/testpage/popup-advertisement-component.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true& */ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true&");
/* harmony import */ var _popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& */ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b25a94f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/popup-advertisement-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=style&index=0&id=4b25a94f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_style_index_0_id_4b25a94f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/popup-advertisement-component.vue?vue&type=template&id=4b25a94f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_advertisement_component_vue_vue_type_template_id_4b25a94f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/product-card-item.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/testpage/product-card-item.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData& */ "./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData&");
/* harmony import */ var _product_card_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-card-item.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-card-item.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_card_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/product-card-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-item.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/product-card-item.vue?vue&type=template&id=94d60be6&v-if=productData&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_item_vue_vue_type_template_id_94d60be6_v_if_productData___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-left.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-left.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container-scroll-left.vue?vue&type=template&id=42698b32& */ "./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32&");
/* harmony import */ var _products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container-scroll-left.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/products-container-scroll-left.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-left.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-left.vue?vue&type=template&id=42698b32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-left.vue?vue&type=template&id=42698b32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_left_vue_vue_type_template_id_42698b32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-right.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-right.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container-scroll-right.vue?vue&type=template&id=37e12c6c& */ "./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c&");
/* harmony import */ var _products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container-scroll-right.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/products-container-scroll-right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container-scroll-right.vue?vue&type=template&id=37e12c6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container-scroll-right.vue?vue&type=template&id=37e12c6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_scroll_right_vue_vue_type_template_id_37e12c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/products-container.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-container.vue?vue&type=template&id=0a848ba6& */ "./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6&");
/* harmony import */ var _products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-container.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-container.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/products-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products-container.vue?vue&type=template&id=0a848ba6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/products-container.vue?vue&type=template&id=0a848ba6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_container_vue_vue_type_template_id_0a848ba6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/see-more-btn.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/testpage/see-more-btn.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-more-btn.vue?vue&type=template&id=67a4149a& */ "./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a&");
/* harmony import */ var _see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/see-more-btn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./see-more-btn.vue?vue&type=template&id=67a4149a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/see-more-btn.vue?vue&type=template&id=67a4149a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_see_more_btn_vue_vue_type_template_id_67a4149a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/stick-banner.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/testpage/stick-banner.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true& */ "./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true&");
/* harmony import */ var _stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& */ "./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "be8f41c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/stick-banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=style&index=0&id=be8f41c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_style_index_0_id_be8f41c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/stick-banner.vue?vue&type=template&id=be8f41c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stick_banner_vue_vue_type_template_id_be8f41c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/testpage/store.scss?vue&type=style&index=1&id=6b3ea30d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_store_scss_vue_type_style_index_1_id_6b3ea30d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/top-brands.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/testpage/top-brands.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-brands.vue?vue&type=template&id=05c57319& */ "./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319&");
/* harmony import */ var _top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-brands.vue?vue&type=script&lang=js& */ "./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__["render"],
  _top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/testpage/top-brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./top-brands.vue?vue&type=template&id=05c57319& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/testpage/top-brands.vue?vue&type=template&id=05c57319&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_brands_vue_vue_type_template_id_05c57319___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);