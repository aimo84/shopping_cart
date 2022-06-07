(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/preview/uppack/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/preview/uppack/content.json", 1);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/dialog */ "./resources/js/components/dialog.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_3__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_4__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_6__["default"],
    'dialog-element': _components_dialog__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      isLoading: true,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_5__,
      error: false,
      errorMessage: '',
      campBean: {
        headline: '',
        subHeadline: '',
        img: '',
        terms: '',
        hasValue: false
      },
      packageKey: 0,
      packageIndex: 0
    };
  },
  computed: {
    campId: function campId() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    },
    locale: function locale() {
      if (!this.$i18n || this.$i18n.locale === undefined) return 'TH';
      return this.$i18n.locale.toUpperCase();
    },
    packages: function packages() {
      var _this$$store$state$cl,
          _this = this;

      return this.$store.state.clm.clmPackageListDemo.tierBeanList ? (_this$$store$state$cl = this.$store.state.clm.clmPackageListDemo.tierBeanList) === null || _this$$store$state$cl === void 0 ? void 0 : _this$$store$state$cl.map(function (tier) {
        var _this$$store$state$cl2;

        var offerList = _this.$store.state.clm.clmPackageListDemo.moiTierList ? (_this$$store$state$cl2 = _this.$store.state.clm.clmPackageListDemo.moiTierList.offerSummaryList) === null || _this$$store$state$cl2 === void 0 ? void 0 : _this$$store$state$cl2.filter(function (offer) {
          if (tier.offeringBeanList.some(function (e) {
            return e.pricePlanCode === offer.offerSummaryInfo[0].offerInfo.offerName;
          })) return true;
        }) : [];
        return offerList === null || offerList === void 0 ? void 0 : offerList.map(function (offer) {
          var _offer$messageInfo$bu, _offer$messageInfo$bu2, _offer$messageInfo$bu3, _offer$messageInfo$co;

          var fixSpeedData = offer.offerSummaryInfo[0].bundleInfo.data.filter(function (d) {
            return d.dataGroup === 'FIX SPEED' && d.subKey === 'Internet Vol';
          });
          var termData = offer.offerSummaryInfo[0].termConditionInfo ? offer.offerSummaryInfo[0].termConditionInfo.filter(function (t) {
            return t.languageCode == _this.locale;
          }) : [];
          var checkFixSpeed = false;

          var fixSpeedWording = _content_json__WEBPACK_IMPORTED_MODULE_5__.packages.fix_speed[_this.locale.toLowerCase()];

          if (fixSpeedData.length > 0) {
            checkFixSpeed = true;

            if (fixSpeedData[0].maxSpeedUnit === 'Kbps') {
              var result = parseInt(fixSpeedData[0].maxSpeed) / 1024;

              if (result >= 1024) {
                fixSpeedWording += (result / 1024).toString() + ' Gbps';
              } else {
                fixSpeedWording += result.toString() + ' Mbps';
              }
            } else {
              fixSpeedWording += fixSpeedData[0].maxSpeed + ' ' + fixSpeedData[0].maxSpeedUnit;
            }
          }

          var term = _content_json__WEBPACK_IMPORTED_MODULE_5__.packages.term_not_found[_this.locale.toLowerCase()];

          if (termData.length > 0 && termData[0].termCondition !== '') {
            term = termData[0].termCondition;
          }

          return {
            name: offer.offerSummaryInfo[0].offerInfo.offerDescription,
            voice: offer.messageInfo.bundle.voice ? (_offer$messageInfo$bu = offer.messageInfo.bundle.voice.filter(function (v) {
              return v.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu === void 0 ? void 0 : _offer$messageInfo$bu.message : '-',
            data: checkFixSpeed ? fixSpeedWording : (_offer$messageInfo$bu2 = offer.messageInfo.bundle.data.filter(function (d) {
              return d.subKey == 'Internet Vol' && d.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu2 === void 0 ? void 0 : _offer$messageInfo$bu2.message,
            wifi: (_offer$messageInfo$bu3 = offer.messageInfo.bundle.data.filter(function (d) {
              return d.subKey == 'WiFi' && d.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$bu3 === void 0 ? void 0 : _offer$messageInfo$bu3.message,
            price: (_offer$messageInfo$co = offer.messageInfo.cost.filter(function (c) {
              return c.languageCode == _this.locale;
            })[0]) === null || _offer$messageInfo$co === void 0 ? void 0 : _offer$messageInfo$co.message,
            termCondition: term,
            offerName: offer.offerSummaryInfo[0].offerInfo.offerName
          };
        });
      }) : [];
    },
    termConditionContent: function termConditionContent() {
      if (!this.packages.length) {
        return '-';
      }

      var target = null;

      if (this.packages[this.packageIndex]) {
        target = this.packages[this.packageIndex][this.packageKey];
      }

      if (!target) {
        return '-';
      }

      return target.termCondition;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.fetchClmPackages();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchClmPackages: function fetchClmPackages() {
      var _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var data;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  campCode: _this3.campId
                };

                _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_8__["GET_LIST_PACKAGE_DEMO"], data).then(function (data) {
                  _this3.isLoading = false;

                  if (data.step_3_clm && data.step_3_clm.campaignBeanList.length > 0 && data.step_3_clm.campaignBeanList[0] && data.step_3_clm.campaignBeanList[0].knowledgeDetailList && data.step_3_clm.campaignBeanList[0].knowledgeDetailList.length > 0) {
                    var headlineObj = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(function (k) {
                      return k.topic === 'Headline';
                    });
                    var headline = '-';
                    var img = '';

                    if (headlineObj.length > 0) {
                      headline = headlineObj[0].script;

                      if (headlineObj[0].knowledgeAttachList && headlineObj[0].knowledgeAttachList.length > 0) {
                        img = headlineObj[0].knowledgeAttachList[0].image;
                      }
                    }

                    var subHeadline = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(function (k) {
                      return k.topic === 'Sub Headline';
                    }).length > 0 ? data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(function (k) {
                      return k.topic === 'Sub Headline';
                    })[0].script : '-';
                    var terms = data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(function (k) {
                      return k.topic === 'Term and Conditions';
                    }).length > 0 ? data.step_3_clm.campaignBeanList[0].knowledgeDetailList.filter(function (k) {
                      return k.topic === 'Term and Conditions';
                    })[0].script : '-';
                    _this3.campBean = {
                      headline: headline,
                      subHeadline: subHeadline,
                      img: img,
                      terms: terms,
                      hasValue: true
                    };
                  } else {
                    _this3.campBean = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.campBean), {}, {
                      hasValue: false
                    });
                  }
                })["catch"](function (error) {
                  _this3.isLoading = false;
                  _this3.error = true;
                  _this3.errorMessage = error[_this3.$i18n.locale];

                  _this3.$router.push('/preview/uppack?campId=' + _this3.campId);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    selectOffer: function selectOffer(selectedOfferName, index, key) {
      var data = {
        campId: this.campId,
        identity: localStorage.getItem('clm-identity') || '',
        selected_offer: selectedOfferName
      };
      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_9__["loggerAddon"])({
        event: 'CLM uppack package',
        status: 'select',
        type: 'UPPACK',
        selectedCampId: this.campId,
        // mobileNumber: this.userData.mobile_number,
        clmPackageData: [this.packages[index][key].name, this.packages[index][key].offerName, this.packages[index][key].voice, this.packages[index][key].wifi],
        clmPrice: this.packages[index][key].price
      });
      this.isLoading = true;
      localStorage.setItem('selectedOffer', selectedOfferName);
      this.$router.push({
        name: 'preview-uppack-step3',
        query: {
          campId: this.campId
        },
        params: {
          selectedOffer: selectedOfferName
        }
      });
    },
    openPopup: function openPopup(index, key) {
      this.packageIndex = index;
      this.packageKey = key;
      this.$refs.popup.open();
    },
    goBack: function goBack() {
      this.$router.push({
        name: 'preview-uppack-step1',
        query: {
          campId: this.campId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-container[data-v-da9549ca] {\n  margin-top: 20px;\n}\n.page-container[data-v-da9549ca] {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n.table.table-step2 thead tr th[data-v-da9549ca]:first-child, .table.table-step2 tbody tr td[data-v-da9549ca]:first-child {\n  min-width: 180px;\n}\n.term-dialog[data-v-da9549ca] :first-child {\n  margin-top: 0;\n}\n.camp-bean[data-v-da9549ca] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  border: 1px solid #b4b4b4;\n}\n.camp-bean .headline[data-v-da9549ca] {\n  font-size: 2rem;\n}\n.camp-bean .headline[data-v-da9549ca] :first-child {\n  margin-top: 0.5rem !important;\n  margin-bottom: 1.25rem !important;\n}\n.camp-bean .sub-headline[data-v-da9549ca] :first-child {\n  font-size: 27px;\n  margin-top: 1rem;\n}\n.camp-bean .terms[data-v-da9549ca] :first-child {\n  margin-top: 0.75rem;\n}\n.camp-bean tr td[data-v-da9549ca] {\n  width: 50%;\n}\n.step-container .step[data-v-da9549ca] {\n  min-width: 100% !important;\n  min-height: -webkit-max-content !important;\n  min-height: -moz-max-content !important;\n  min-height: max-content !important;\n}\n.select-pack-btn[data-v-da9549ca] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  word-break: keep-all;\n  padding: 8px 12px;\n}\n.min-w-100[data-v-da9549ca] {\n  min-width: 100px;\n}\n.mt-15[data-v-da9549ca] {\n  margin-top: 1.5rem;\n}\n.font-truebold[data-v-da9549ca] {\n  font-family: \"TrueBold\";\n}\n@media screen and (max-width: 480px) {\n.page-container[data-v-da9549ca] {\n    min-width: 100%;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner_container[data-v-da9549ca] {\n  border-bottom: 6px solid #666;\n}\n.banner_container img[data-v-da9549ca] {\n  width: 100%;\n  display: block;\n}\n.page-container[data-v-da9549ca] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 750px;\n  margin: auto;\n}\n.text-center[data-v-da9549ca] {\n  text-align: center;\n}\n.my-1[data-v-da9549ca] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-da9549ca] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-da9549ca] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-da9549ca] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-da9549ca] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-da9549ca] {\n  margin-left: 1rem;\n}\n.step-container[data-v-da9549ca] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-da9549ca] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-da9549ca] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-da9549ca] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-da9549ca] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-da9549ca] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.table-header[data-v-da9549ca] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-da9549ca] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-da9549ca] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-da9549ca] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-da9549ca] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-da9549ca] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-da9549ca] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-da9549ca] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-da9549ca] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-da9549ca]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-da9549ca] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-da9549ca] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-da9549ca] {\n  flex-direction: column;\n}\n.table .row .col[data-v-da9549ca]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-da9549ca] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-da9549ca] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-da9549ca] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-da9549ca] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-da9549ca] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-da9549ca] {\n  color: #e02020;\n}\n.color-lightblue[data-v-da9549ca] {\n  color: #0091ff;\n}\n.text-underline[data-v-da9549ca] {\n  text-decoration: underline;\n}\n.text-left[data-v-da9549ca] {\n  text-align: left;\n}\n.cursor-pointer[data-v-da9549ca] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-da9549ca] {\n  min-width: unset;\n}\n.min-width-max[data-v-da9549ca] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-da9549ca] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n}\n.term-cond .title[data-v-da9549ca] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-da9549ca] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-da9549ca] {\n  display: none;\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n}\n.footer-container .footer-actions[data-v-da9549ca] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-da9549ca] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-da9549ca] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-da9549ca] {\n  font-size: 2rem;\n}\n.success-container[data-v-da9549ca] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-da9549ca] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-da9549ca] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-da9549ca] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-da9549ca] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-da9549ca] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-da9549ca] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-da9549ca] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-da9549ca]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-da9549ca]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-da9549ca] {\n  font-size: 16px;\n  color: #ff0000;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-da9549ca] {\n    width: 100%;\n}\n.table-header[data-v-da9549ca] {\n    font-size: 24px;\n}\n.table .highlight[data-v-da9549ca] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-da9549ca] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-da9549ca] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-da9549ca] {\n    display: block;\n}\n.bottom-actions-container[data-v-da9549ca] {\n    display: none;\n}\n.step1-grid-row-2[data-v-da9549ca] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-da9549ca] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-da9549ca] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-da9549ca] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true& ***!
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
    { staticClass: "page-container text-center" },
    [
      _c(
        "div",
        { staticClass: "step-container my-2" },
        [
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/personal-info.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("ข้อมูลส่วนตัว")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step" }, [
            _c("img", { attrs: { src: "/images/icons/choose-package.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("เลือกแพ็กเกจ")]),
          ]),
          _vm._v(" "),
          _c("button-element", { staticClass: "step not-reached" }, [
            _c("img", { attrs: { src: "/images/icons/summary.png" } }),
            _vm._v(" "),
            _c("div", {}, [_vm._v("สรุปรายการ")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("loading-element", { attrs: { fitHeight: "" } })
        : _c(
            "div",
            [
              _vm._l(_vm.packages, function (tier, index) {
                return [
                  _c("div", { key: index, staticClass: "table-container" }, [
                    _c("div", { staticClass: "table-header" }, [
                      _vm._v("แพ็กเกจนำเสนอ " + _vm._s(index + 1)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table table-step2" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("แพ็กเกจ")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Voice")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Data")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Wifi")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("ราคา")]),
                            _vm._v(" "),
                            _c("th"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(tier, function (item, key) {
                              return [
                                _c("tr", { key: "package_" + key }, [
                                  _c(
                                    "td",
                                    { staticClass: "highlight text-left" },
                                    [_vm._v(_vm._s(item.name))]
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "min-w-100" }, [
                                    _vm._v(_vm._s(item.voice)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "min-w-100" }, [
                                    _vm._v(_vm._s(item.data)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.wifi))]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "highlight" }, [
                                    _vm._v(_vm._s(item.price)),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "button-element",
                                        {
                                          staticClass: "select-pack-btn",
                                          on: {
                                            click: function ($event) {
                                              return _vm.selectOffer(
                                                item.offerName,
                                                index,
                                                key
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("เลือกแพ็กเกจนี้")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "more-detail",
                                          on: {
                                            click: function ($event) {
                                              return _vm.openPopup(index, key)
                                            },
                                          },
                                        },
                                        [
                                          _c("div", [
                                            _vm._v(
                                              "เงื่อนไขรายการส่งเสริมการขาย"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "detail-container" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "topic" },
                                                [_vm._v("รายละเอียดแพ็กเกจ")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ]
              }),
            ],
            2
          ),
      _vm._v(" "),
      _c(
        "dialog-element",
        {
          ref: "popup",
          staticClass: "product-detail",
          attrs: { "show-close-button": "" },
        },
        [
          _c(
            "div",
            { attrs: { slot: "content" }, slot: "content" },
            [
              _vm.isLoading
                ? _c("loading-element")
                : _c("div", [
                    _c("div", {
                      staticClass: "term-dialog text-left",
                      domProps: { innerHTML: _vm._s(_vm.termConditionContent) },
                    }),
                  ]),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.campBean.hasValue
        ? _c("div", { staticClass: "mt-4 camp-bean" }, [
            _c("div", {
              staticClass: "headline",
              domProps: { innerHTML: _vm._s(_vm.campBean.headline) },
            }),
            _vm._v(" "),
            _c("div", [
              _c("img", { attrs: { src: _vm.campBean.img, width: "100%" } }),
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "sub-headline",
              domProps: { innerHTML: _vm._s(_vm.campBean.subHeadline) },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mt-15 font-truebold" }, [
              _vm._v("ข้อกำหนดการรับสิทธิพิเศษ :"),
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "terms",
              domProps: { innerHTML: _vm._s(_vm.campBean.terms) },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isLoading,
              expression: "!isLoading",
            },
          ],
          staticClass: "footer-container",
        },
        [
          _vm.error
            ? _c("div", { staticClass: "footer-actions" }, [
                _c("div", { staticClass: "err-msg text-center my-1" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.errorMessage) + "\n        "
                  ),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "footer-actions" },
            [
              _c(
                "button-element",
                { staticClass: "bg-secondary", on: { click: _vm.goBack } },
                [_vm._v("ย้อนกลับ")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isLoading,
              expression: "!isLoading",
            },
          ],
          staticClass: "bottom-actions-container my-2",
        },
        [
          _vm.error
            ? _c("div", { staticClass: "footer-actions" }, [
                _c("div", { staticClass: "err-msg text-center my-1" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.errorMessage) + "\n        "
                  ),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "footer-actions" },
            [
              _c(
                "button-element",
                { staticClass: "bg-secondary", on: { click: _vm.goBack } },
                [_vm._v("ย้อนกลับ")]
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/preview/uppack/step2.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step2.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step2.vue?vue&type=template&id=da9549ca&scoped=true& */ "./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true&");
/* harmony import */ var _step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2.vue?vue&type=script&lang=js& */ "./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& */ "./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& */ "./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "da9549ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/preview/uppack/step2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=style&index=0&id=da9549ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_style_index_0_id_da9549ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=template&id=da9549ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/preview/uppack/step2.vue?vue&type=template&id=da9549ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_da9549ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/preview/uppack/style.scss?vue&type=style&index=1&id=da9549ca&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_da9549ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/utils/addon.js":
/*!*************************************!*\
  !*** ./resources/js/utils/addon.js ***!
  \*************************************/
/*! exports provided: updateEntPack, computeAddons, computeAddon, loggerAddon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntPack", function() { return updateEntPack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddons", function() { return computeAddons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddon", function() { return computeAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerAddon", function() { return loggerAddon; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");








function updateEntPack(_x, _x2, _x3, _x4) {
  return _updateEntPack.apply(this, arguments);
}

function _updateEntPack() {
  _updateEntPack = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(matcode, query, product, hash) {
    var inventory,
        data,
        packages,
        _args = arguments;
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inventory = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};

            if (query.token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            data = {
              cart_hash: hash,
              product_id: product.id,
              inventory_id: inventory.id
            };
            if (inventory.nas) data.nas_code = inventory.nas;

            if (matcode) {
              packages = product.entertainment_packages;

              if (packages.find(function (e) {
                return e.matcode === matcode;
              })) {
                data.matcode = matcode;
              }
            }

            _context.prev = 6;
            _context.next = 9;
            return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ENT_PACK"], {
              tmvhAuth: query.token,
              data: data
            });

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            throw new Error('err-ent-pack');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 11]]);
  }));
  return _updateEntPack.apply(this, arguments);
}

function computeAddons(query, product) {
  var products = [];

  if (query.accs) {
    var accessories = query.accs.split(',');
    if (product.only_one_accessory && accessories.length > 1) return products;
    accessories.forEach(function (accessory) {
      var accs = computeAddon(accessory, 'accessories', product);
      if (accs) products.push(accs);
    });
  }

  return products;
}
function computeAddon(matcode, key, product) {
  var addon = product[key].find(function (e) {
    return e.matcode === matcode;
  });
  return addon ? {
    product_id: addon.product_id,
    inventory_id: addon.inventory_id,
    quantity: 1,
    store_id: addon.store_id,
    section: addon.section || 'wemall',
    channel: 'tmh-website'
  } : false;
}
function loggerAddon(data) {
  try {
    var type = data.type,
        event = data.event,
        _data$status = data.status,
        status = _data$status === void 0 ? '' : _data$status,
        _data$productId = data.productId,
        productId = _data$productId === void 0 ? '' : _data$productId,
        _data$matcode = data.matcode,
        matcode = _data$matcode === void 0 ? '' : _data$matcode,
        _data$quantity = data.quantity,
        quantity = _data$quantity === void 0 ? '' : _data$quantity,
        _data$amount = data.amount,
        amount = _data$amount === void 0 ? '' : _data$amount,
        _data$discount = data.discount,
        discount = _data$discount === void 0 ? '' : _data$discount,
        _data$thaiId = data.thaiId,
        thaiId = _data$thaiId === void 0 ? '' : _data$thaiId,
        _data$circuitId = data.circuitId,
        circuitId = _data$circuitId === void 0 ? '' : _data$circuitId,
        _data$mobileNumber = data.mobileNumber,
        mobileNumber = _data$mobileNumber === void 0 ? '' : _data$mobileNumber,
        _data$tolProductData = data.tolProductData,
        tolProductData = _data$tolProductData === void 0 ? [] : _data$tolProductData,
        _data$tolPrice = data.tolPrice,
        tolPrice = _data$tolPrice === void 0 ? '' : _data$tolPrice,
        _data$tolInvoice = data.tolInvoice,
        tolInvoice = _data$tolInvoice === void 0 ? '' : _data$tolInvoice,
        _data$tolEntryFee = data.tolEntryFee,
        tolEntryFee = _data$tolEntryFee === void 0 ? '' : _data$tolEntryFee,
        _data$tolAddress = data.tolAddress,
        tolAddress = _data$tolAddress === void 0 ? [] : _data$tolAddress,
        _data$tolUserAddress = data.tolUserAddress,
        tolUserAddress = _data$tolUserAddress === void 0 ? [] : _data$tolUserAddress,
        _data$clmPackageData = data.clmPackageData,
        clmPackageData = _data$clmPackageData === void 0 ? [] : _data$clmPackageData,
        _data$addressData = data.addressData,
        addressData = _data$addressData === void 0 ? [] : _data$addressData,
        _data$clmPrice = data.clmPrice,
        clmPrice = _data$clmPrice === void 0 ? '' : _data$clmPrice,
        _data$selectedCampId = data.selectedCampId,
        selectedCampId = _data$selectedCampId === void 0 ? '' : _data$selectedCampId,
        _data$advancePayment = data.advancePayment,
        advancePayment = _data$advancePayment === void 0 ? '' : _data$advancePayment,
        _data$rcDiff = data.rcDiff,
        rcDiff = _data$rcDiff === void 0 ? '' : _data$rcDiff,
        _data$campName = data.campName,
        campName = _data$campName === void 0 ? '' : _data$campName,
        _data$clmName = data.clmName,
        clmName = _data$clmName === void 0 ? '' : _data$clmName,
        _data$vasCode = data.vasCode,
        vasCode = _data$vasCode === void 0 ? '' : _data$vasCode;
    var typhoonGroupType = localStorage.getItem('typhoon-group') || '';
    var campId = localStorage.getItem('clm-camp-id') || '';
    var log = '';
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var UTM = queryString.includes('utm') ? ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'].map(function (key) {
      return "".concat(key, "=").concat(urlParams.get(key));
    }).join('&') : '';

    switch (type) {
      case 'TOL':
        log = [event, status, tolProductData.join(','), tolPrice, tolInvoice, tolEntryFee, tolAddress.join(','), tolUserAddress.join(','), campId, UTM].join('|');
        break;

      case 'TOLVAS':
        log = [event, status, selectedCampId, vasCode, thaiId, circuitId, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'TMVHVAS':
        log = [event, status, selectedCampId, clmPrice, mobileNumber, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'UPPACK':
        log = [event, status, selectedCampId, thaiId, mobileNumber, encodeURIComponent(clmPackageData.join(',')), clmPrice, UTM].join('|');
        break;

      default:
        log = [event, status, productId, matcode, quantity, amount, discount, advancePayment, rcDiff, campId, campName, typhoonGroupType, addressData.join(',') || mobileNumber, UTM].join('|');
        break;
    }

    return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_LOG"], {
      data: log
    });
  } catch (e) {}
}

/***/ })

}]);