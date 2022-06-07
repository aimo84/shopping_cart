(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/payment-offline/qr/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/payment-offline/qr/content.json", 1);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_8__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      Content: _content_json__WEBPACK_IMPORTED_MODULE_7__,
      loading: true,
      data: {},
      qrCode: null,
      expiresAt: null,
      referenceCode: null,
      saved: false,
      statusNotsuccess: ['FAILED', 'EXPIRED'],
      orderNotsuccess: ['002', '003'],
      statusSuccess: ['SUCCESS'],
      intervalId: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var _order$body$data, code, order, qrCode, dataQR;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              code = _this.$route.query.order_code;

              if (code) {
                _context.next = 5;
                break;
              }

              throw new Error('order_code not found');

            case 5:
              _context.next = 7;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["FETCH_TRACKING_SUCCESS"], code);

            case 7:
              order = _context.sent;
              _this.data = (_order$body$data = order.body.data) === null || _order$body$data === void 0 ? void 0 : _order$body$data[0];

              if (_this.data) {
                _context.next = 12;
                break;
              }

              throw new Error('data not found');

            case 12:
              if (!(_this.data.payment_method !== 'OMISEPROMPTPAY')) {
                _context.next = 15;
                break;
              }

              throw new Error('Invalid payment_method');

            case 15:
              if (!_this.statusNotsuccess.includes(_this.data.omise_status)) {
                _context.next = 18;
                break;
              }

              _this.goExpire();

              return _context.abrupt("return");

            case 18:
              if (!_this.orderNotsuccess.includes(_this.data.status)) {
                _context.next = 21;
                break;
              }

              _this.goExpire();

              return _context.abrupt("return");

            case 21:
              if (!_this.statusSuccess.includes(_this.data.omise_status)) {
                _context.next = 24;
                break;
              }

              _this.goLanding();

              return _context.abrupt("return");

            case 24:
              qrCode = _this.data.order_omise.qr_code;

              if (qrCode) {
                _context.next = 28;
                break;
              }

              throw new Error('qr_code not found');

            case 28:
              _context.next = 30;
              return _this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["FETCH_QR_CODE"], {
                url: qrCode
              });

            case 30:
              dataQR = _context.sent;
              _context.next = 33;
              return _this.svgStringToImage(dataQR.replace('<svg', '<svg width="498" height="707"'), 498, 707, 'png');

            case 33:
              _this.qrCode = _context.sent;

              if (_this.qrCode) {
                _this.expiresAt = _this.data.order_omise.expires_at;
                _this.referenceCode = _this.data.order_omise.charge_id;
                _this.loading = false;

                _this.triggerPaymentStatus();
              }

              _context.next = 40;
              break;

            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](0);

              _this.goExpire();

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 37]]);
    }))();
  },
  computed: {
    showQR: function showQR() {
      return !this.loading && !this.saved;
    },
    showSaveQR: function showSaveQR() {
      return !this.loading && this.saved;
    }
  },
  methods: {
    computePrice: _utils_common__WEBPACK_IMPORTED_MODULE_10__["computePrice"],
    triggerPaymentStatus: function triggerPaymentStatus() {
      var _this2 = this;

      this.intervalId = setInterval( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _eventOrder$data;

        var now, expire, eventOrder, omiseStatus;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                now = new Date().getTime();
                expire = new Date(_this2.expiresAt.replace(/\s/, 'T')).getTime();

                if (now > expire) {
                  _this2.goExpire();
                }

                _context2.next = 5;
                return _this2.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_9__["FETCH_EVENT_ORDER"], {
                  order_code: _this2.$route.query.order_code,
                  v: now
                });

              case 5:
                eventOrder = _context2.sent;
                omiseStatus = (_eventOrder$data = eventOrder.data) === null || _eventOrder$data === void 0 ? void 0 : _eventOrder$data.status;

                if (omiseStatus === true) {
                  _this2.goPaymentSuccess();
                } else if (omiseStatus === false) {
                  _this2.goExpire();
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), 5000);
    },
    generateExpireAt: function generateExpireAt() {
      var dateFormat = this.dateObj();
      var dateExpire = '';
      dateExpire = "".concat(dateFormat.day, "/").concat(dateFormat.month, "/").concat(dateFormat.year, ", ").concat(dateFormat.time);

      if (this.$i18n.locale.toLowerCase() == 'th') {
        dateExpire = dateExpire + " \u0E19.";
      }

      return '(' + dateExpire + ')';
    },
    dateObj: function dateObj() {
      var date = new Date(this.expiresAt.replace(/\s/, 'T'));
      var hours = date.getHours();
      var dateExpire = this.expiresAt.split(' ')[0];
      var time = this.expiresAt.split(' ')[1];
      time = time.split(':');
      time = "".concat(hours, ".").concat(time[1]);
      var year = Number(dateExpire.split('-')[0]);
      var month = dateExpire.split('-')[1];
      var day = dateExpire.split('-')[2];
      if (this.$i18n.locale.toLowerCase() == 'th') year = parseInt(year + 543);
      return {
        year: year,
        month: month,
        day: day,
        time: time
      };
    },
    downloadQR: function downloadQR() {
      var _arguments = arguments,
          _this3 = this;

      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var option, data, filename, link;
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                option = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;

                try {
                  if (option) _this3.loading = true;
                  data = _this3.qrCode;
                  filename = "".concat(_this3.referenceCode, ".png");
                  link = document.createElement('a');
                  link.href = data;
                  link.setAttribute('id', "link_".concat(_this3.referenceCode));
                  link.setAttribute('title', filename);
                  link.setAttribute('download', filename);
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  _this3.loading = false;

                  _this3.flushInterval();

                  _this3.flushCart();

                  if (option) _this3.saved = true;
                } catch (error) {
                  _this3.loading = false;

                  _this3.goPayment();
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    svgStringToImage: function svgStringToImage(svgString, width, height, format) {
      return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  format = format ? format : 'png';
                  var svgData = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
                  var canvas = document.createElement('canvas');
                  var context = canvas.getContext('2d');
                  canvas.width = width;
                  canvas.height = height;
                  var image = new Image();

                  image.onload = function () {
                    context.clearRect(0, 0, width, height);
                    context.drawImage(image, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/' + format));
                  };

                  image.src = svgData;
                  image.crossOrigin = 'anonymous';
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    flushInterval: function flushInterval() {
      clearInterval(this.intervalId);
    },
    historyBack: function historyBack() {
      this.goPayment();
    },
    goLanding: function goLanding() {
      this.flushInterval();
      this.$router.push('/online-store');
    },
    goPayment: function goPayment() {
      this.flushInterval();
      this.$router.push('/payment');
    },
    goExpire: function goExpire() {
      this.flushInterval();
      this.$router.push("/payment-offline/unsuccess");
    },
    goPaymentSuccess: function goPaymentSuccess() {
      this.flushInterval();
      this.loading = true;
      this.$router.push("/success?success_code=".concat(this.$route.query.order_code, "&ft=true"));
    },
    flushCart: function flushCart() {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["clearLocalStoragePaymentSuccess"])();
      window.localStorage.removeItem('cart-length');
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".store-container[data-v-4a8c63e0] {\n  border-radius: 6px;\n}\n.store-container .how-to-container[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .btn-previous[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .suggestion-container[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .qr-container[data-v-4a8c63e0] {\n  max-width: 1125px;\n  min-height: 570px;\n  margin: 30px auto;\n  background: white;\n  padding: 50px;\n  border-radius: 6px;\n}\n.store-container .qr-container .content-section[data-v-4a8c63e0] {\n  text-align: center;\n}\n.store-container .qr-container .content-section .payment-content[data-v-4a8c63e0] {\n  display: flex;\n}\n.store-container .qr-container .content-section .payment-content .how-to-containers-saved[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container[data-v-4a8c63e0] {\n  width: 50%;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail[data-v-4a8c63e0] {\n  text-align: center;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail img[data-v-4a8c63e0] {\n  max-width: 80%;\n}\n.store-container .qr-container .content-section .payment-content .payment-details[data-v-4a8c63e0] {\n  width: 50%;\n}\n.store-container .qr-container .content-section .qr-detail-container[data-v-4a8c63e0] {\n  border: 1px solid #979797;\n  border-radius: 6px;\n  width: 430px;\n  height: 390px;\n}\n.store-container .qr-container .content-section .qr-detail-container.saved[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail-header[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 18px;\n  text-align: center;\n  color: #FFFFFF;\n  background: #2E3C43;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n  position: relative;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail-header .arrow[data-v-4a8c63e0] {\n  position: absolute;\n  left: 0;\n  width: 0;\n  height: 0;\n  margin-left: 48%;\n  margin-top: 29px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #2E3C43;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 26px;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail .qr-image img[data-v-4a8c63e0] {\n  max-width: 203px;\n  max-height: 288px;\n  background: #FFFFFF;\n  border: 1px solid #979797;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail .title-expire[data-v-4a8c63e0] {\n  margin: 17px 0 14px 0;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail .title-expire .title-text[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  font-family: \"TrueMedium\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail .title-expire .expire-text[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 26px;\n  line-height: 26px;\n  text-align: center;\n  color: #000000;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-detail .payment-ref[data-v-4a8c63e0] {\n  font-family: \"TrueMedium\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #979797;\n  width: 100%;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-remark[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.store-container .qr-container .content-section .qr-detail-container .qr-remark .payment-info-text[data-v-4a8c63e0] {\n  font-family: \"TrueMedium\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 20px;\n  text-align: center;\n  color: #666666;\n  width: 100%;\n}\n.store-container .qr-container .content-section .payment-details-container[data-v-4a8c63e0] {\n  display: flex;\n  flex-direction: column;\n  font-family: \"TrueMedium\";\n  font-size: 32px;\n  line-height: 32px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail[data-v-4a8c63e0] {\n  display: flex;\n  margin-bottom: 25px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.line-bottom[data-v-4a8c63e0] {\n  border-bottom: 1px solid #DCDDE0;\n  margin-right: 50px;\n  padding-bottom: 14px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.line-bottom.pay-amount[data-v-4a8c63e0] {\n  margin-bottom: 16px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.payment-expire[data-v-4a8c63e0] {\n  justify-content: center;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.bank-info-text[data-v-4a8c63e0] {\n  margin-top: 35px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail-bank-info[data-v-4a8c63e0] {\n  margin-bottom: 28px;\n  margin-right: 50px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-label[data-v-4a8c63e0] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: right;\n  color: #000;\n  min-width: 100px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-label.align-flex-start[data-v-4a8c63e0] {\n  align-items: flex-start;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-label.align-flex-end[data-v-4a8c63e0] {\n  align-items: flex-end;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info[data-v-4a8c63e0] {\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-weight: bold;\n  line-height: 24px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.pay-to[data-v-4a8c63e0] {\n  font-size: 24px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.pay-amount[data-v-4a8c63e0] {\n  font-size: 32px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info .currency[data-v-4a8c63e0], .store-container .qr-container .content-section .payment-details-container .payment-info .digit[data-v-4a8c63e0] {\n  font-size: 20px;\n  line-height: 29px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-text-expire[data-v-4a8c63e0] {\n  font-size: 18px;\n  color: #EC1D24;\n  font-weight: normal;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-date-expire[data-v-4a8c63e0] {\n  font-size: 18px;\n  font-weight: normal;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info-bank-text[data-v-4a8c63e0] {\n  font-family: \"TrueBold\";\n  font-style: normal;\n  font-size: 32px;\n  line-height: 32px;\n  text-align: center;\n  color: #000000;\n}\n.store-container .qr-container .content-section .payment-details-container .bank-info-image[data-v-4a8c63e0] {\n  display: flex;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.store-container .qr-container .content-section .payment-details-container .bank-info-image img[data-v-4a8c63e0] {\n  height: 113px;\n  width: 441px;\n}\n.store-container .qr-container .content-section .payment-details-container .download-text-btn[data-v-4a8c63e0] {\n  display: none;\n}\n.store-container .qr-container .content-section .payment-details-container .download-text[data-v-4a8c63e0] {\n  display: flex;\n  flex: 1;\n  font-family: \"TrueMedium\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #666666;\n  justify-content: flex-end;\n  margin-right: 50px;\n}\n.store-container .qr-container .content-section .payment-details-container .download-text a[data-v-4a8c63e0] {\n  text-decoration: underline;\n  color: #666666;\n}\n@media screen and (max-width: 1000px) {\n.store-container .qr-container[data-v-4a8c63e0] {\n    margin: 0;\n    padding: 0;\n}\n.store-container .qr-container .content-section .payment-content[data-v-4a8c63e0] {\n    position: relative;\n    flex-direction: column;\n}\n.store-container .qr-container .content-section .payment-content .how-to-containers-saved[data-v-4a8c63e0] {\n    display: inline;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container[data-v-4a8c63e0] {\n    width: 100%;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container[data-v-4a8c63e0] {\n    border: 0;\n    width: 100%;\n    height: 515px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container.saved[data-v-4a8c63e0] {\n    display: flex;\n    height: 160px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .qr-remark[data-v-4a8c63e0] {\n    display: none;\n    margin-top: 205px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .saved-detail[data-v-4a8c63e0] {\n    margin: 17px 0 14px 0;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .saved-detail .success-icon[data-v-4a8c63e0] {\n    width: 54px;\n    height: 54px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    background: #ffb800;\n    border-radius: 50%;\n    box-shadow: 2px 3px 0px #e7a700;\n    margin-top: 29px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .saved-detail .success-icon svg[data-v-4a8c63e0] {\n    fill: #fff;\n    width: 40px;\n    height: 40px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .saved-detail .saved-success[data-v-4a8c63e0] {\n    display: flex;\n    flex-direction: column;\n    font-family: \"TrueMedium\";\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 24px;\n    text-align: center;\n    color: #000000;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .saved-detail .saved-text[data-v-4a8c63e0] {\n    margin-bottom: 28px;\n    display: flex;\n    flex-direction: column;\n    font-family: \"TrueBold\";\n    font-style: normal;\n    font-size: 40px;\n    line-height: 40px;\n    text-align: center;\n    color: #000000;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail[data-v-4a8c63e0] {\n    margin-top: 23px;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail img[data-v-4a8c63e0] {\n    max-width: 80%;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail .payment-ref[data-v-4a8c63e0] {\n    margin-top: 5px;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail[data-v-4a8c63e0], .store-container .qr-container .content-section .payment-content .payment-details[data-v-4a8c63e0] {\n    width: 100%;\n}\n.store-container .qr-container .content-section .payment-content .payment-details[data-v-4a8c63e0] {\n    position: absolute;\n    top: calc(50% - 20px + 100.38px);\n    padding: 16px;\n}\n.store-container .qr-container .content-section .payment-detail-bank-info[data-v-4a8c63e0] {\n    display: none;\n}\n.store-container .qr-container .content-section .payment-details-container[data-v-4a8c63e0] {\n    margin-top: 30px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail .bank-info-image[data-v-4a8c63e0] {\n    display: none;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.line-bottom[data-v-4a8c63e0] {\n    margin-right: 0;\n    padding-bottom: 10px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.line-bottom.payment-expire[data-v-4a8c63e0] {\n    border-bottom: none;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-detail.btn-qr-download[data-v-4a8c63e0] {\n    display: none;\n    position: absolute;\n    top: -5px;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding-right: 32px;\n}\n.store-container .qr-container .content-section .payment-details-container .download-text-btn[data-v-4a8c63e0] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n.store-container .qr-container .content-section .payment-details-container .download-text[data-v-4a8c63e0] {\n    display: none;\n}\n.store-container .download-text-btn[data-v-4a8c63e0] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n.store-container .download-text-btn.saved[data-v-4a8c63e0] {\n    padding: 16px;\n}\n.store-container .download-text-btn .btn-qr[data-v-4a8c63e0] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.store-container .download-text-btn .red-bg-button[data-v-4a8c63e0] {\n    width: 100%;\n}\n.store-container .how-to-container[data-v-4a8c63e0] {\n    margin-top: 20px;\n    background: #CBCCCD;\n    border-radius: 6px;\n    display: flex;\n}\n.store-container .how-to-container.saved[data-v-4a8c63e0] {\n    text-align: left;\n    margin: 0 16px 16px 16px;\n}\n.store-container .how-to-container .how-to-content[data-v-4a8c63e0] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n.store-container .how-to-container .how-to-content .how-to-header[data-v-4a8c63e0] {\n    padding: 10px;\n    flex-direction: column;\n    font-family: \"TrueBold\";\n    font-style: normal;\n    font-size: 22px;\n    line-height: 22px;\n    background: #970000;\n    border-top-left-radius: 6px;\n    border-bottom-right-radius: 50px;\n    color: #FFFFFF;\n    margin-right: 9px;\n}\n.store-container .how-to-container .how-to-content .how-to-detail-container[data-v-4a8c63e0] {\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 10.3013px;\n    background: #E2E2E2;\n    margin: 10px;\n}\n.store-container .how-to-container .how-to-content .how-to-detail-container .how-to-detail[data-v-4a8c63e0] {\n    font-family: \"TrueMedium\";\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 20px;\n    display: flex;\n}\n.store-container .how-to-container .how-to-content .how-to-detail-container .how-to-detail.header[data-v-4a8c63e0] {\n    font-family: \"TrueBold\";\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 20px;\n    color: #970000;\n}\n.store-container .how-to-container .how-to-content .how-to-detail-container .how-to-detail img[data-v-4a8c63e0] {\n    mix-blend-mode: multiply;\n    margin: 10px 0 10px 10px;\n    width: 95%;\n}\n.store-container .how-to-container .how-to-content .how-to-detail-container .how-to-detail .how-to-text[data-v-4a8c63e0] {\n    font-size: 20px;\n    line-height: 17px;\n    margin-left: 5px;\n}\n.store-container .suggestion-container[data-v-4a8c63e0] {\n    display: block;\n    margin-top: 16px;\n    width: 100%;\n}\n.store-container .suggestion-container .suggestion-detail[data-v-4a8c63e0] {\n    font-family: \"TrueMedium\";\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 24px;\n    text-align: center;\n}\n.store-container .suggestion-container .suggestion-detail.red[data-v-4a8c63e0] {\n    color: #EC1D24;\n}\n.store-container .btn-previous[data-v-4a8c63e0] {\n    margin-top: 16px;\n    display: flex;\n    flex: 1;\n    font-family: \"TrueMedium\";\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 24px;\n    text-align: center;\n    justify-content: center;\n}\n.store-container .btn-previous a[data-v-4a8c63e0] {\n    text-decoration: underline;\n    color: #666666;\n}\n.store-container .btn-previous span[data-v-4a8c63e0] {\n    color: #666666;\n    border-bottom: 1px solid #666666;\n}\n}\n@media screen and (max-width: 480) {\n.store-container .qr-container[data-v-4a8c63e0] {\n    margin: 0;\n    padding: 0;\n}\n.store-container .qr-container .content-section .payment-content[data-v-4a8c63e0] {\n    position: relative;\n    flex-direction: column;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container[data-v-4a8c63e0] {\n    width: 100%;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container[data-v-4a8c63e0] {\n    border: 0;\n    max-width: 382px;\n    height: 699px;\n}\n.store-container .qr-container .content-section .payment-content .qr-details-container .qr-detail-container .qr-remark[data-v-4a8c63e0] {\n    margin-top: 210px;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail[data-v-4a8c63e0] {\n    margin: 0;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail img[data-v-4a8c63e0] {\n    max-width: 80%;\n}\n.store-container .qr-container .content-section .payment-content .qr-detail[data-v-4a8c63e0], .store-container .qr-container .content-section .payment-content .product_details[data-v-4a8c63e0] {\n    width: 100%;\n}\n.store-container .qr-container .content-section .payment-detail-bank-info[data-v-4a8c63e0] {\n    display: none;\n}\n.store-container .qr-container .content-section .payment-detail .bank-info-image[data-v-4a8c63e0] {\n    display: none;\n}\n}\n@media screen and (device-aspect-ratio: 40/71) {\n.store-container .qr-container .content-section .qr-detail-container .qr-remark .payment-info-text[data-v-4a8c63e0] {\n    font-size: 16px;\n}\n.store-container .how-to-container .how-to-content .how-to-header.saved[data-v-4a8c63e0] {\n    font-size: 21px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-text-expire[data-v-4a8c63e0] {\n    font-size: 16px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-date-expire[data-v-4a8c63e0] {\n    font-size: 16px;\n}\n.store-container .suggestion-container .suggestion-detail[data-v-4a8c63e0] {\n    font-size: 20px;\n}\n}\n@media (max-width: 280px) {\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-text-expire[data-v-4a8c63e0] {\n    font-size: 13px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.payment-date-expire[data-v-4a8c63e0] {\n    font-size: 15px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-info.pay-to[data-v-4a8c63e0] {\n    font-size: 20px;\n}\n.store-container .qr-container .content-section .payment-details-container .payment-label[data-v-4a8c63e0] {\n    font-size: 20px;\n}\n.store-container .suggestion-container .suggestion-detail[data-v-4a8c63e0] {\n    font-size: 17px;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true& ***!
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
  return _c("div", { staticClass: "store-container" }, [
    _c(
      "div",
      { staticClass: "qr-container" },
      [
        _vm.loading ? _c("loading-element") : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "content-section" }, [
          _c("div", { staticClass: "payment-content" }, [
            _c("div", { staticClass: "qr-details-container" }, [
              _vm.showQR
                ? _c("div", { staticClass: "qr-detail-container" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "qr-detail" }, [
                      _c("div", { staticClass: "qr-image" }, [
                        _c("img", { attrs: { src: _vm.qrCode } }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "payment-ref" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.Content.ref_no[_vm.$i18n.locale]) +
                              ": " +
                              _vm._s(_vm.referenceCode)
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "qr-remark" }, [
                      _c("div", { staticClass: "payment-info-text" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.Content.payment_info_1[_vm.$i18n.locale])
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "payment-info-text" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.Content.payment_info_2[_vm.$i18n.locale])
                          ),
                        ]),
                      ]),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.showSaveQR
                ? _c("div", { staticClass: "qr-detail-container saved" }, [
                    _c("div", { staticClass: "qr-detail" }, [
                      _c("div", { staticClass: "saved-detail" }, [
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
                              _c("path", {
                                attrs: { d: "M0 0h24v24H0z", fill: "none" },
                              }),
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
                        _c("span", { staticClass: "saved-text" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.Content.title_saved_qr[_vm.$i18n.locale]
                              ) +
                              "\n                                "
                          ),
                        ]),
                      ]),
                    ]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _vm.showQR
              ? _c("div", { staticClass: "payment-details" }, [
                  _c("div", { staticClass: "payment-details-container" }, [
                    _c("div", { staticClass: "payment-detail-bank-info" }, [
                      _c("div", { staticClass: "payment-info-bank-text" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.Content.payment_info_bank_1[_vm.$i18n.locale]
                            )
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "payment-info-bank-text" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.Content.payment_info_bank_2[_vm.$i18n.locale]
                            )
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "payment-detail line-bottom" }, [
                      _c("div", { staticClass: "payment-label" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.Content.pay_to[_vm.$i18n.locale]) +
                            "\n                            "
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "payment-detail line-bottom pay-amount" },
                      [
                        _c("div", { staticClass: "payment-label" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.Content.pay_amount[_vm.$i18n.locale]) +
                              "\n                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "payment-info pay-amount" }, [
                          _c("div", { staticClass: "currency" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s("฿") +
                                " \n                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "amount" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.computePrice(_vm.data.price).split(".")[0]
                                ) +
                                "\n                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "digit" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  "." +
                                    _vm
                                      .computePrice(_vm.data.price)
                                      .split(".")[1]
                                ) +
                                "\n                                "
                            ),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "payment-detail line-bottom payment-expire",
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "payment-info payment-text-expire" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.Content.expire_qr[_vm.$i18n.locale]
                                ) +
                                " \n                            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "payment-info payment-date-expire" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.generateExpireAt()) +
                                "\n                            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "payment-detail btn-qr-download" },
                      [
                        _c(
                          "div",
                          { staticClass: "download-text-btn" },
                          [
                            _c(
                              "button-element",
                              {
                                staticClass: "red-bg-button btn-qr",
                                on: {
                                  click: function ($event) {
                                    return _vm.downloadQR(true)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.Content.download[_vm.$i18n.locale]
                                    ) +
                                    "\n                                "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "download-text" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "javascript:void(0);",
                                alt: _vm.referenceCode,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.downloadQR(false)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.Content.download[_vm.$i18n.locale]
                                  ) +
                                  " >\n                                "
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showSaveQR
              ? _c("div", { staticClass: "how-to-containers-saved" }, [
                  _c("div", { staticClass: "how-to-container saved" }, [
                    _c("div", { staticClass: "how-to-content" }, [
                      _c("div", { staticClass: "how-to-header saved" }, [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(
                              _vm.Content.how_to_pay_saved_header[
                                _vm.$i18n.locale
                              ]
                            ) +
                            "\n                                    "
                        ),
                        _vm._m(3),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "how-to-detail-container" }, [
                        _c("div", { staticClass: "how-to-detail" }, [
                          _c("div", { staticClass: "how-to-label" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s("1. ") +
                                "\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "how-to-text" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm.Content.how_to_pay_saved_1[
                                    _vm.$i18n.locale
                                  ]
                                ) +
                                "\n                                    "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "how-to-detail" }, [
                          _c("div", { staticClass: "how-to-label" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s("2. ") +
                                "\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "how-to-text" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm.Content.how_to_pay_saved_2[
                                    _vm.$i18n.locale
                                  ]
                                ) +
                                "\n                                    "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "how-to-detail" }, [
                          _c("div", { staticClass: "how-to-label" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s("3. ") +
                                "\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "how-to-text" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm.Content.how_to_pay_saved_3[
                                    _vm.$i18n.locale
                                  ]
                                ) +
                                "\n                                    "
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "download-text-btn saved" },
                    [
                      _c(
                        "button-element",
                        {
                          staticClass: "red-bg-button btn-qr",
                          on: { click: _vm.goLanding },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.Content.btn_saved[_vm.$i18n.locale]) +
                              "\n                        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _vm.showQR
      ? _c("div", { staticClass: "suggestion-container" }, [
          _c("div", { staticClass: "suggestion-detail red" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.Content.suggestion_1[_vm.$i18n.locale]) +
                "\n        "
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "suggestion-detail" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.Content.suggestion_2[_vm.$i18n.locale]) +
                "\n        "
            ),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.showQR
      ? _c("div", { staticClass: "how-to-container" }, [
          _c("div", { staticClass: "how-to-content" }, [
            _c("div", { staticClass: "how-to-header" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.Content.how_to_pay_header[_vm.$i18n.locale]) +
                  "\n                    "
              ),
              _vm._m(5),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "how-to-detail-container" }, [
              _c("div", { staticClass: "how-to-detail header" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.Content.how_to_pay_title[_vm.$i18n.locale]) +
                    "\n                "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "how-to-detail" }, [
                _c("div", { staticClass: "how-to-label" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s("1. ") +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "how-to-text" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.Content.how_to_pay_detail_1[_vm.$i18n.locale]
                      ) +
                      "\n                    "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "how-to-detail" }, [
                _c("div", { staticClass: "how-to-label" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s("2. ") +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "how-to-text" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.Content.how_to_pay_detail_2[_vm.$i18n.locale]
                      ) +
                      "\n                    "
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.showQR
      ? _c("div", { staticClass: "btn-previous" }, [
          _c(
            "span",
            {
              on: {
                click: function ($event) {
                  return _vm.historyBack()
                },
              },
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.Content.back_to_payment[_vm.$i18n.locale]) +
                  "\n        "
              ),
            ]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "qr-detail-header" }, [
      _vm._v(
        "\n                            PromptPay\n                            "
      ),
      _c("div", { staticClass: "arrow" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "payment-detail" }, [
      _c("div", { staticClass: "bank-info-image" }, [
        _c("img", { attrs: { src: "/images/qr/bank_infox2.png" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "payment-info pay-to" }, [
      _c("span", [_vm._v("True Store")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slanted-container" }, [
      _c("div", { staticClass: "slanted" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "how-to-detail bank" }, [
      _c("img", { attrs: { src: "/images/qr/bank_infox2.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slanted-container" }, [
      _c("div", { staticClass: "slanted" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "how-to-detail bank" }, [
      _c("img", { attrs: { src: "/images/qr/bank_infox2.png" } }),
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

/***/ "./resources/js/pages/payment-offline/qr/content.json":
/*!************************************************************!*\
  !*** ./resources/js/pages/payment-offline/qr/content.json ***!
  \************************************************************/
/*! exports provided: title, expire_qr, payment_info, payment_info_1, payment_info_2, payment_info_bank, payment_info_bank_1, payment_info_bank_2, ref_no, pay_to, pay_amount, download, back_to_payment, how_to_pay_header, how_to_pay_title, how_to_pay_detail_1, how_to_pay_detail_2, how_to_pay_saved_header, how_to_pay_saved_1, how_to_pay_saved_2, how_to_pay_saved_3, title_saved_qr, btn_saved, suggestion_1, suggestion_2, date, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":{\"th\":\"QR code ใช้ได้ถึง\",\"en\":\"QR code is valid until\"},\"expire_qr\":{\"th\":\"ชำระเงินภายใน 15 นาที\",\"en\":\"Please pay within 15 minutes\"},\"payment_info\":{\"th\":\"หากชำระเงินเรียบร้อย สามารถออกจากหน้าจอนี้ได้ หรือกด “บันทึก QR code” เก็บไว้ใช้ชำระเงิน\",\"en\":\"Once completing the payment, you can close this page.  Or, tap “Save QR code” to make payment.\"},\"payment_info_1\":{\"th\":\"หากชำระเงินเรียบร้อย สามารถออกจากหน้าจอนี้ได้ \",\"en\":\"Once completing the payment, you can close this page.\"},\"payment_info_2\":{\"th\":\"หรือกด “บันทึก QR code” เก็บไว้ใช้ชำระเงิน\",\"en\":\"Or, tap “Save QR code” to make payment.\"},\"payment_info_bank\":{\"th\":\"เปิดแอปธนาคารบนมือถือของคุณ แล้วสแกน QR code นี้ เพื่อชำระเงิน\",\"en\":\"Please scan QR code via your mobile banking application\"},\"payment_info_bank_1\":{\"th\":\"เปิดแอปธนาคารบนมือถือของคุณ\",\"en\":\"Please scan QR code\"},\"payment_info_bank_2\":{\"th\":\"แล้วสแกน QR code นี้ เพื่อชำระเงิน\",\"en\":\"via your mobile banking application\"},\"ref_no\":{\"th\":\"เลขอ้างอิง\",\"en\":\"Ref No\"},\"pay_to\":{\"th\":\"ชำระเงินให้กับ\",\"en\":\"Pay to\"},\"pay_amount\":{\"th\":\"ยอดที่ต้องชำระ\",\"en\":\"Amount to pay\"},\"download\":{\"th\":\"บันทึก QR code\",\"en\":\"Save QR code\"},\"back_to_payment\":{\"th\":\"กลับ\",\"en\":\"Back to previous\"},\"how_to_pay_header\":{\"th\":\"วิธีชำระเงินด้วยพร้อมเพย์\",\"en\":\"How to pay with PromptPay\"},\"how_to_pay_title\":{\"th\":\"ชำระเงินด้วย QR code\",\"en\":\"Pay with saved QR code\"},\"how_to_pay_detail_1\":{\"th\":\"แตะปุ่ม “บันทึก QR code’’ เพื่อบันทึกลงบนมือถือ จากนั้นเปิดแอปธนาคารที่ต้องการ\",\"en\":\"Save QR code in your mobile phone. Then, open your mobile banking application.\"},\"how_to_pay_detail_2\":{\"th\":\"ไปที่ “สแกน QR” อัปโหลด QR code ที่บันทึกไว้จากอัลบั้มรูปภาพ แล้วทำการชำระเงิน\",\"en\":\"Go to “Scan QR code” menu on the app, choose the saved QR code photo, and make payment.\"},\"how_to_pay_saved_header\":{\"th\":\"ขั้นตอนชำระเงินด้วย QR code\",\"en\":\"How to pay with saved QR code\"},\"how_to_pay_saved_1\":{\"th\":\"เปิดแอปธนาคาร แล้วไปที่ \\\"สแกน QR\\\"\",\"en\":\"Open mobile banking application. Go to “Scan QR code” menu.\"},\"how_to_pay_saved_2\":{\"th\":\"อัปโหลด QR code ที่บันทึกไว้จากอัลบั้มรูปภาพ\",\"en\":\"Choose the saved QR code photo from gallery.\"},\"how_to_pay_saved_3\":{\"th\":\"ชำระเงิน\",\"en\":\"Pay\"},\"title_saved_qr\":{\"th\":\"บันทึก QR code แล้ว\",\"en\":\"QR code saved\"},\"btn_saved\":{\"th\":\"เข้าใจแล้ว\",\"en\":\"Got it\"},\"suggestion_1\":{\"th\":\"กรุณาแคปภาพหน้าจอ เพื่อบันทึก QR code\",\"en\":\"Please take screenshot to save QR code\"},\"suggestion_2\":{\"th\":\"และเปิดหน้าจอนี้ไว้ เพื่อดูผลการทำรายการ\",\"en\":\"and stay on this page to see payment status.\"},\"date\":{\"day\":[],\"year\":[],\"month\":{\"th\":[{\"id\":\"1\",\"value\":\"ม.ค.\"},{\"id\":\"2\",\"value\":\"ก.พ.\"},{\"id\":\"3\",\"value\":\"มี.ค.\"},{\"id\":\"4\",\"value\":\"เม.ย.\"},{\"id\":\"5\",\"value\":\"พ.ค.\"},{\"id\":\"6\",\"value\":\"มิ.ย.\"},{\"id\":\"7\",\"value\":\"ก.ค.\"},{\"id\":\"8\",\"value\":\"ส.ค.\"},{\"id\":\"9\",\"value\":\"ก.ย.\"},{\"id\":\"10\",\"value\":\"ต.ค.\"},{\"id\":\"11\",\"value\":\"พ.ย.\"},{\"id\":\"12\",\"value\":\"ธ.ค.\"}],\"en\":[{\"id\":\"1\",\"value\":\"January\"},{\"id\":\"2\",\"value\":\"February\"},{\"id\":\"3\",\"value\":\"March\"},{\"id\":\"4\",\"value\":\"April\"},{\"id\":\"5\",\"value\":\"May\"},{\"id\":\"6\",\"value\":\"June\"},{\"id\":\"7\",\"value\":\"July\"},{\"id\":\"8\",\"value\":\"August\"},{\"id\":\"9\",\"value\":\"September\"},{\"id\":\"10\",\"value\":\"October\"},{\"id\":\"11\",\"value\":\"November\"},{\"id\":\"12\",\"value\":\"December\"}]}}}");

/***/ }),

/***/ "./resources/js/pages/payment-offline/qr/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/payment-offline/qr/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4a8c63e0&scoped=true& */ "./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& */ "./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a8c63e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/payment-offline/qr/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/payment-offline/qr/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4a8c63e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/payment-offline/qr/index.vue?vue&type=template&id=4a8c63e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a8c63e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/payment-offline/qr/style.scss?vue&type=style&index=0&id=4a8c63e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_0_id_4a8c63e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);