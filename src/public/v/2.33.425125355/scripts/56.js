(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_activate_sim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/activate-sim */ "./resources/js/components/activate-sim.vue");
/* harmony import */ var _components_clm_benefit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/clm-benefit */ "./resources/js/components/clm-benefit.vue");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'activate-sim': _components_activate_sim__WEBPACK_IMPORTED_MODULE_2__["default"],
    'clm-benefit': _components_clm_benefit__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    cart: [Object],
    data: [Object],
    inventory: [Object],
    disableQuantity: [Array],
    loading: Boolean
  },
  data: function data() {
    return {
      code5g: '',
      Content: {
        iot_desciption: {
          detail: {
            th: 'รับฟรี กล้อง CCTV จำนวน',
            en: 'Free CCTV'
          },
          unit: {
            th: ' เครื่อง',
            en: ' unit'
          },
          units: {
            th: ' เครื่อง',
            en: ' units'
          },
          subscribe: {
            th: 'พร้อมสมัครบริการ CCTV Cloud เดือนละ',
            en: 'Subscribe CCTV Cloud'
          },
          price: {
            th: ' บาท',
            en: '฿ per month'
          },
          vat_datail: {
            th: '(ชำระ VAT 7%)',
            en: '(pay 7% VAT) '
          },
          two_unit: {
            th: ' (2 รายการ)',
            en: ' x2'
          }
        },
        monthly_service_fee: {
          th: 'ค่าบริการรายเดือน',
          en: 'Monthly service fee'
        },
        monthly_service_baht: {
          th: 'บาท',
          en: '฿'
        },
        netprice: {
          th: 'ราคา',
          en: 'Price'
        },
        totalprice: {
          th: 'มูลค่าสินค้า',
          en: 'Total Price'
        },
        baht: {
          th: '.-',
          en: '.-'
        },
        quantity: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        "delete": {
          th: 'เอาสินค้าออก',
          en: 'Delete'
        },
        redeem: {
          th: 'แลกทรูพอยท์',
          en: 'Redeem TruePoint'
        },
        points: {
          th: 'คะแนน',
          en: 'points'
        },
        removeCartError: {
          th: 'สินค้าไม่มีจำหน่ายในขณะนี้ กรุณานำสินค้าออกจะตะกร้า',
          en: 'Product is not available at the moment. Please remove this product.'
        },
        truecard_free: {
          th: '*ครั้งแรกรับบัตรฟรี',
          en: '*Get Free for first time'
        },
        truecard_msg: {
          th: 'ค่าจัดส่งบัตรทรูการ์ด: 25.-/ใบ \n\n ลูกค้าสามารถอัพเกรดประเภทของทรูการ์ดได้ เมื่อสั่งซื้อร่วมกับซิมหรือเครื่องพร้อมแพ็กเกจรายเดือน \n\n จัดส่งแบบลงทะเบียนโดยไปรษณีย์ไทยประมาณ 15 วันทำการนับจากวันที่สั่งบัตรทรูการ์ด \n\n (กรณีสั่งบัตรทรูการ์ดพร้อมสินค้าอื่นๆ จะจัดส่งแยกกัน)',
          en: 'True Card Delivery fee: 25 thb/item \n\n Customer can upgrade True Card by purchasing sim or device with monthly package \n\n Delivery by Thailand Post will be approximately 15 days from the order date (the delivery will be separated in the case that the True Card was ordered with other products)'
        },
        truecard_upgrade: {
          th: '*คุณได้รับสิทธ์การอัพเกรดเป็น ',
          en: '*You can upgrade True Card to '
        },
        "package": {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        mnp_title: {
          th: 'เบอร์ที่คุณลงทะเบียนซิม',
          en: 'The number that you have registered for the SIM'
        },
        pre2post_title: {
          th: 'Prepaid number switch to postpaid:',
          en: 'Prepaid number switch to postpaid:'
        },
        thai_id_number: {
          th: 'หมายเลขบัตรประชาชน',
          en: 'Thai ID number'
        },
        passport_number: {
          th: 'หมายเลขพาสปอร์ต',
          en: 'Passport Number'
        },
        mobile_number: {
          th: 'หมายเลขโทรศัพท์',
          en: 'Mobile Number'
        },
        flagship_discount: {
          th: 'ราคานี้ได้รับส่วนลด มูลค่า ${discount} บาท จาก coupon code: ${code}',
          en: 'This price included ${discount} THB discount from coupon code: ${code}'
        },
        credit_card_only: {
          th: 'โปรโมชั่นนี้สำหรับการชำระผ่านบัตรเครดิตเท่านั้น',
          en: 'This promotion is for credit card payment only.'
        },
        cart_quantity: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        cart_price: {
          th: 'ราคา/หน่วย',
          en: 'Unit Price'
        },
        advance_payment: {
          th: 'ชำระค่าบริการล่วงหน้า',
          en: 'Advance Payment'
        }
      }
    };
  },
  computed: {
    isTrueCard: function isTrueCard() {
      return this.data.product_type === 'truecard' && this.data.true_card;
    },
    isMnp: function isMnp() {
      return this.data.product_type === 'mnp';
    },
    isPre2Post: function isPre2Post() {
      return this.data.product_type === 'pre_to_post' && this.data.existing_campaign;
    },
    isPrepaidBundleSim: function isPrepaidBundleSim() {
      return this.data.product_type === 'device_bundle_prepaid_sim';
    },
    isDeviceBundle: function isDeviceBundle() {
      return ['device_bundle_new_customer', 'device_bundle_existing', 'pre_to_post', 'mnp_one_step', 'mnp_two_step', 'device_mnp_bundle'].includes(this.data.product_type);
    },
    isPrepaidList: function isPrepaidList() {
      return this.data.sim_meta && this.data.sim_meta[0] && this.data.sim_meta[0].sim_type === 'prepaid' || this.$parent.config.prepaid_search.includes(this.data.id);
    },
    isCreditOnly: function isCreditOnly() {
      var _this$$store$state$ca;

      return (_this$$store$state$ca = this.$store.state.cart.cart.data) === null || _this$$store$state$ca === void 0 ? void 0 : _this$$store$state$ca.credit_card_only;
    },
    isVhoraPrepaid: function isVhoraPrepaid() {
      var _this$data, _this$data$sim_meta, _this$data$sim_meta$, _this$data$sim_meta$$, _this$data2, _this$data2$sim_meta, _this$data2$sim_meta$;

      var isTypePostpaid = this.data.product_type === 'postpaid';
      var isLowTier = (_this$data = this.data) === null || _this$data === void 0 ? void 0 : (_this$data$sim_meta = _this$data.sim_meta) === null || _this$data$sim_meta === void 0 ? void 0 : (_this$data$sim_meta$ = _this$data$sim_meta[0]) === null || _this$data$sim_meta$ === void 0 ? void 0 : (_this$data$sim_meta$$ = _this$data$sim_meta$.berfuntong) === null || _this$data$sim_meta$$ === void 0 ? void 0 : _this$data$sim_meta$$.package_code;
      var isSimPrepaid = ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : (_this$data2$sim_meta = _this$data2.sim_meta) === null || _this$data2$sim_meta === void 0 ? void 0 : (_this$data2$sim_meta$ = _this$data2$sim_meta[0]) === null || _this$data2$sim_meta$ === void 0 ? void 0 : _this$data2$sim_meta$.sim_type) === 'prepaid';
      return isTypePostpaid && isLowTier && isSimPrepaid;
    },
    price: function price() {
      if (this.isDeviceBundle) return this.data.price - this.data.discount;
      return this.data.price;
    },
    totalPrice: function totalPrice() {
      return this.price * this.data.quantity;
    },
    totalFullPrice: function totalFullPrice() {
      return this.data.compare_at_price * this.data.quantity;
    },
    showOriginalPrice: function showOriginalPrice() {
      if (this.isDeviceBundle) return this.data.compare_at_price > 0;
      return this.data.compare_at_price > 0 && this.data.compare_at_price !== this.data.price;
    },
    hideQuantity: function hideQuantity() {
      if (!this.disableQuantity) return true;
      if (this.data.error) return true;
      var type = ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'advancepayment', 'device_bundle_existing', 'device_bundle_new_customer', 'truecard', 'mnp', 'entertainment', 'pre_to_post', 'restriction', 'mnp_two_step', 'device_bundle_prepaid_sim', 'device_bundle_prepaid'];
      var campaign = this.data.campaigns;
      var quantityLimit = campaign ? campaign.reduce(function (i, e) {
        if (e.quantity_limit > 0) i = true;
        return i;
      }, false) : false;
      return type.includes(this.data.product_type) || this.disableQuantity.includes(this.data.id) || this.data.campaign || this.data.bundle || this.data.is_addon || quantityLimit;
    },
    hideDelete: function hideDelete() {
      return ['advancepayment', 'entertainment'].includes(this.data.product_type);
    },
    monthlyServiceFee: function monthlyServiceFee() {
      var fee = this.data.existing_campaign && this.data.existing_campaign.price_plan.price;
      return fee;
    },
    isClmBenefit: function isClmBenefit() {
      return !!localStorage.getItem('is-clmbundle-campain');
    }
  },
  mounted: function mounted() {
    var _this$$store$state$ca2;

    this.code5g = (_this$$store$state$ca2 = this.$store.state.cart.cart.data) === null || _this$$store$state$ca2 === void 0 ? void 0 : _this$$store$state$ca2.code_5g;
  },
  methods: {
    checkPointStatus: _utils_common__WEBPACK_IMPORTED_MODULE_4__["checkPointStatus"],
    computeBalance: _utils_common__WEBPACK_IMPORTED_MODULE_4__["computeBalance"],
    computePrice: _utils_common__WEBPACK_IMPORTED_MODULE_4__["computePrice"],
    computeMobileNumber: function computeMobileNumber(e) {
      var regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/;
      return e.replace(regex, '$1-$2-$3');
    },
    forceUpdate: function forceUpdate() {
      this.$forceUpdate();
      this.$emit('update', {
        product_id: this.data.id,
        inventory_id: this.data.inventory_id,
        quantity: this.data.quantity,
        is_edit_product_quantity: 1
      });
    },
    deleteItem: function deleteItem() {
      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_5__["loggerAddon"])({
        event: 'Cart',
        status: 'remove',
        productId: this.data.id,
        matcode: this.data.sku,
        quantity: this.data.quantity,
        amount: this.data.price - this.data.discount,
        discount: this.data.discount
      });
      this.$emit('delete', {
        product_id: this.data.id,
        inventory_id: this.data.inventory_id,
        ga: true
      });
    },
    increaseQuantity: function increaseQuantity() {
      if (this.data.quantity >= this.data.total_quantity) return;
      this.$set(this.data, 'quantity', this.data.quantity + 1);
      this.forceUpdate();
    },
    decreaseQuantity: function decreaseQuantity() {
      if (this.data.quantity <= 1) return;
      this.$set(this.data, 'quantity', this.data.quantity - 1);
      this.forceUpdate();
    },
    showBalance: function showBalance(cart, data) {
      return Object.keys(cart).length === 1 && data.quantity === 1 && data.points && Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkPointStatus"])(data.points);
    },
    image: function image(data) {
      var _data$sim_meta;

      if (((_data$sim_meta = data.sim_meta) === null || _data$sim_meta === void 0 ? void 0 : _data$sim_meta.length) > 0 && data.sim_meta[0].sim_image) {
        return data.sim_meta[0].sim_image;
      }

      return data.image;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cart[data-v-bfae042a] {\n  padding: 10px 10px 10px 10px;\n  background: #fff;\n  border-radius: 0px 0px 0px 0px;\n  margin-bottom: 8px;\n  font-size: 26px;\n  font-family: \"TrueLight\";\n}\n.cart .cart-delete-desktop[data-v-bfae042a] {\n  display: flex;\n  cursor: pointer;\n  height: 30px;\n  justify-content: flex-end;\n}\n.cart .cart-delete-mobile[data-v-bfae042a] {\n  display: none;\n}\n.cart .cart-container[data-v-bfae042a] {\n  display: grid;\n  grid-template-columns: 140px auto;\n  grid-gap: 0 20px;\n}\n.cart .cart-container .cart-image[data-v-bfae042a] {\n  width: 140px;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.cart .cart-container .cart-image img[data-v-bfae042a] {\n  width: 100%;\n  max-height: 140px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.cart .cart-container .cart-content[data-v-bfae042a] {\n  display: grid;\n  grid-template-columns: 1fr 95px minmax(100px, auto);\n  grid-gap: 20px;\n}\n.cart .cart-container .cart-content .cart-info[data-v-bfae042a] {\n  font-family: \"TrueBold\";\n  flex: 1;\n}\n.cart .cart-container .cart-content .cart-info .cart-title[data-v-bfae042a] {\n  display: flex;\n  color: #000;\n  font-size: 28px;\n  line-height: 33.59px;\n  margin-top: 8px;\n}\n.cart .cart-container .cart-content .cart-info .cart-title .option[data-v-bfae042a] {\n  font-size: 26px;\n  font-family: \"TrueLight\";\n  font-weight: 400;\n  line-height: 31.19px;\n}\n.cart .cart-container .cart-content .cart-info .true-card-message[data-v-bfae042a] {\n  color: #6b6b6b;\n  font-size: 22px;\n}\n.cart .cart-container .cart-content .cart-info .true-card-message-long[data-v-bfae042a] {\n  font-family: \"TrueMedium\";\n  font-size: 20px;\n  line-height: 20px;\n  white-space: pre-line;\n  margin-bottom: 12px;\n}\n.cart .cart-container .cart-content .cart-info .cart-postpaid-chip[data-v-bfae042a] {\n  font-size: 18px;\n  line-height: 20px;\n  padding: 0 14px;\n  display: inline-flex;\n  color: #fff;\n  background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);\n  border-radius: 3px;\n  margin-bottom: 16px;\n  text-transform: capitalize;\n  font-family: \"TrueLight\";\n}\n.cart .cart-container .cart-content .cart-info .cart-postpaid-chip ~ .cart-price-container[data-v-bfae042a] {\n  margin-top: 0;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container[data-v-bfae042a] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price[data-v-bfae042a] {\n  line-height: 20px;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price.special[data-v-bfae042a] {\n  font-size: 28px;\n  color: #E62627;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price.original[data-v-bfae042a] {\n  font: \"TrueLight\";\n  font-size: 21px;\n  text-decoration: line-through;\n}\n.cart .cart-container .cart-content .cart-info .cart-tax[data-v-bfae042a] {\n  font-size: 20px;\n  color: #E62627;\n  font-family: \"TrueMedium\";\n}\n.cart .cart-container .cart-content .cart-action[data-v-bfae042a] {\n  display: flex;\n  flex-direction: column;\n}\n.cart .cart-container .cart-content .cart-action.quantity[data-v-bfae042a] {\n  min-width: 95px;\n  align-items: flex-start;\n  margin-top: 42.75px;\n}\n.cart .cart-container .cart-content .cart-action .total-price[data-v-bfae042a] {\n  white-space: nowrap;\n}\n.cart .cart-container .cart-content .cart-action .total-price .discount-price[data-v-bfae042a] {\n  margin-top: 9px;\n  display: inherit;\n  color: #404040;\n  text-align: center;\n}\n.cart .cart-container .cart-content .cart-action .total-price .full-price[data-v-bfae042a] {\n  display: none;\n}\n.cart .cart-container .cart-content .cart-action .cart-action-label[data-v-bfae042a], .cart .cart-container .cart-content .cart-action .cart-quantity-label[data-v-bfae042a] {\n  display: none;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity[data-v-bfae042a] {\n  display: flex;\n  align-items: center;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-label[data-v-bfae042a] {\n  color: #999;\n  margin-right: 18px;\n  font-size: 24px;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-fixed[data-v-bfae042a] {\n  color: #000;\n  margin-left: 12px;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-container[data-v-bfae042a] {\n  display: flex;\n  width: 95px;\n  height: 32px;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-container .cart-quantity-button[data-v-bfae042a] {\n  width: 30px;\n  height: 30px;\n  background: #f4f4f4;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n  font-size: 25px;\n  border-radius: 3px;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-container .cart-quantity-button[disabled][data-v-bfae042a] {\n  background-color: #F9F9F9;\n  color: #CCCCCC;\n  cursor: default;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-container .cart-quantity-button.increase[disabled][data-v-bfae042a] {\n  background-color: #EBECF3;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-container .cart-quantity-value[data-v-bfae042a] {\n  flex: 1;\n  line-height: 32px;\n  text-align: center;\n  color: #404040;\n}\n.cart .cart-container .cart-content.bottom[data-v-bfae042a] {\n  padding-left: 160px;\n  padding-top: 12px;\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 36px;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container[data-v-bfae042a] {\n  display: flex;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point[data-v-bfae042a] {\n  background-color: #f5f5f5;\n  border: 1px dashed #cccccc;\n  padding: 2px 10px;\n  border-radius: 4px;\n  color: #e9242b;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  font-size: 18px;\n  line-height: 24px;\n  flex-wrap: wrap;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point.upgrade[data-v-bfae042a] {\n  font-family: \"TrueBold\";\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point span[data-v-bfae042a] {\n  white-space: nowrap;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point img[data-v-bfae042a] {\n  width: 13px;\n  height: 14px;\n  margin: 0 6px;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point .black[data-v-bfae042a] {\n  margin: 0 4px;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point .number[data-v-bfae042a] {\n  display: inline-flex;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container .balance-point .number span[data-v-bfae042a] {\n  display: inline-flex;\n}\n.cart .cart-container .cart-content.bottom .cart-delete[data-v-bfae042a] {\n  white-space: nowrap;\n}\n.cart .cart-container .cart-content.bottom .cart-delete .cart-delete-button[data-v-bfae042a] {\n  cursor: pointer;\n  color: #999;\n  display: flex;\n  align-items: center;\n}\n.cart .cart-container .cart-content.bottom .cart-delete .cart-delete-button svg[data-v-bfae042a] {\n  width: 30px;\n  height: 30px;\n  margin-right: 6px;\n}\n.cart .sim-container[data-v-bfae042a] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cart .sim-container .sim-info-container[data-v-bfae042a] {\n  font-size: 26px;\n  line-height: 25.6px;\n  color: #000;\n  padding: 20px;\n  font-family: \"TrueLight\";\n}\n.cart .sim-container .sim-info-container .sim-info-title[data-v-bfae042a] {\n  font-family: \"TrueBold\";\n  font-size: 28px;\n}\n.cart .sim-container .sim-info-container .sim-info-title.margin-top[data-v-bfae042a] {\n  margin-top: 16px;\n}\n.cart .sim-container .sim-info-container .iot-title[data-v-bfae042a] {\n  font-family: \"TrueMedium\";\n}\n.cart .sim-container .sim-info-container .iot-title.margin-top[data-v-bfae042a] {\n  margin-top: 16px;\n}\n.cart .sim-container .sim-info-container .red[data-v-bfae042a] {\n  color: #ff0000;\n}\n.cart .sim-container .sim-info-container .bold[data-v-bfae042a] {\n  font-family: \"TrueBold\";\n}\n.camp-bean[data-v-bfae042a] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  border: 1px solid #b4b4b4;\n}\n.camp-bean img[data-v-bfae042a] {\n  width: 100%;\n}\n.camp-bean .headline[data-v-bfae042a] {\n  font-size: 2rem;\n}\n.camp-bean .headline[data-v-bfae042a] :first-child {\n  margin-top: 0.5rem !important;\n  margin-bottom: 1.25rem !important;\n}\n.camp-bean .sub-headline[data-v-bfae042a] :first-child {\n  font-size: 27px;\n  margin-top: 1rem;\n}\n.camp-bean .terms[data-v-bfae042a] :first-child {\n  margin-top: 0.75rem;\n}\n@media screen and (max-width: 860px) {\n.cart[data-v-bfae042a] {\n    padding: 10px;\n}\n.cart .cart-delete-desktop[data-v-bfae042a] {\n    display: none;\n}\n.cart .cart-delete-mobile[data-v-bfae042a] {\n    display: flex;\n}\n.cart .cart-container[data-v-bfae042a] {\n    display: grid;\n    grid-template-columns: 80px auto;\n    grid-gap: 20px;\n}\n.cart .cart-container .cart-image[data-v-bfae042a] {\n    height: 80px;\n    width: 80px;\n    border-radius: 4px;\n}\n.cart .cart-container .cart-content[data-v-bfae042a] {\n    grid-template-columns: auto auto;\n    grid-gap: 8px 0;\n}\n.cart .cart-container .cart-content .cart-info[data-v-bfae042a] {\n    flex: 0;\n    grid-column: 1/-1;\n    padding: 0;\n}\n.cart .cart-container .cart-content .cart-info .cart-title[data-v-bfae042a] {\n    font-size: 24px;\n    line-height: 20px;\n    margin-top: 4px;\n    margin-bottom: 8px;\n    justify-content: space-between;\n}\n.cart .cart-container .cart-content .cart-info .cart-title .option[data-v-bfae042a] {\n    font-size: 20px;\n    line-height: 20px;\n    font-family: \"TrueLight\";\n}\n.cart .cart-container .cart-content .cart-info .true-card-message[data-v-bfae042a] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container[data-v-bfae042a] {\n    margin-top: 8px;\n    display: none;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price[data-v-bfae042a] {\n    line-height: 24px;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price.special[data-v-bfae042a] {\n    font-size: 24px;\n}\n.cart .cart-container .cart-content .cart-info .cart-price-container .cart-price.original[data-v-bfae042a] {\n    font-size: 18px;\n}\n.cart .cart-container .cart-content .cart-action[data-v-bfae042a] {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n}\n.cart .cart-container .cart-content .cart-action .total-price .discount-price[data-v-bfae042a] {\n    font-size: 34px;\n    line-height: 24px;\n    font-family: \"TrueBold\";\n    color: #E62627;\n}\n.cart .cart-container .cart-content .cart-action .total-price .full-price[data-v-bfae042a] {\n    display: inherit;\n    line-height: 15px;\n    text-align: right;\n    font-size: 21px;\n    font-family: \"TrueLight\";\n    text-decoration: line-through;\n}\n.cart .cart-container .cart-content .cart-action.quantity[data-v-bfae042a] {\n    margin-top: 0;\n}\n.cart .cart-container .cart-content .cart-action .cart-action-label[data-v-bfae042a], .cart .cart-container .cart-content .cart-action .cart-quantity-label[data-v-bfae042a] {\n    display: flex;\n    font-family: \"TrueLight\";\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity[data-v-bfae042a] {\n    margin-right: 10px;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-fixed[data-v-bfae042a] {\n    margin-left: 0;\n}\n.cart .cart-container .cart-content .cart-action .cart-quantity .cart-quantity-label[data-v-bfae042a] {\n    font-size: 18px;\n    line-height: 18px;\n    margin-bottom: 6px;\n}\n.cart .cart-container .cart-content .cart-action .cart-delete[data-v-bfae042a] {\n    font-size: 18px;\n}\n.cart .cart-container .cart-content .cart-action .cart-delete.mobile[data-v-bfae042a] {\n    display: none;\n}\n.cart .cart-container .cart-content.bottom[data-v-bfae042a] {\n    padding-left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}\n.cart .cart-container .cart-content.bottom .balance-point-container[data-v-bfae042a],\n.cart .cart-container .cart-content.bottom .balance-point[data-v-bfae042a] {\n    width: 100%;\n}\n.cart .cart-container .cart-content.bottom .cart-delete[data-v-bfae042a] {\n    margin-top: 8px;\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 480px) {\n.cart .cart-container .cart-content[data-v-bfae042a] {\n    grid-template-columns: 1fr;\n    grid-gap: 0;\n}\n.cart .cart-container .cart-content .cart-action[data-v-bfae042a] {\n    font-size: 20px;\n    align-items: flex-start;\n}\n.cart .cart-container .cart-content .cart-quantity .cart-quantity-container .cart-quantity-value.onlylabel[data-v-bfae042a] {\n    text-align: center;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "cart" },
    [
      _c("div", { staticClass: "cart-container" }, [
        _c("div", { staticClass: "cart-image" }, [
          _c("img", { attrs: { src: _vm.image(_vm.data) } }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cart-content" }, [
          _c("div", { staticClass: "cart-info" }, [
            _c("div", { staticClass: "cart-title" }, [
              _c("div", { staticStyle: { display: "grid" } }, [
                _vm.data.product_type === "advancepayment"
                  ? _c("span", [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.Content.advance_payment[_vm.$i18n.locale]
                          ) +
                          "\n            "
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.data.title) +
                          "\n            "
                      ),
                    ]),
                _vm._v(" "),
                _vm.data.product_type === "advancepayment"
                  ? _c("span", { staticClass: "option" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.data.title) +
                          "\n            "
                      ),
                    ])
                  : _vm.data.options &&
                    !_vm.isTrueCard &&
                    _vm.data.product_type !== "sim"
                  ? _c("span", { staticClass: "option" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.data.options) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "cart-delete cart-delete-button cart-delete-mobile",
                },
                [
                  !["advancepayment"].includes(_vm.data.product_type)
                    ? _c(
                        "svg",
                        {
                          attrs: {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          on: { click: _vm.deleteItem },
                        },
                        [
                          _c("circle", {
                            attrs: {
                              cx: "15",
                              cy: "15",
                              r: "14",
                              stroke: "#E62627",
                              "stroke-width": "2",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "g",
                            { attrs: { "clip-path": "url(#clip0_840_276)" } },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M11 11L18.1 18.1",
                                  stroke: "#E62627",
                                  "stroke-width": "2",
                                  "stroke-miterlimit": "10",
                                  "stroke-linecap": "round",
                                },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d: "M18.1 11L11 18.1",
                                  stroke: "#E62627",
                                  "stroke-width": "2",
                                  "stroke-miterlimit": "10",
                                  "stroke-linecap": "round",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("defs", [
                            _c("clipPath", { attrs: { id: "clip0_840_276" } }, [
                              _c("rect", {
                                attrs: {
                                  width: "9.1",
                                  height: "9.1",
                                  fill: "white",
                                  transform: "translate(10 10)",
                                },
                              }),
                            ]),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm.isTrueCard && _vm.data.true_card.first_time
              ? _c("div", { staticClass: "true-card-message" }, [
                  _vm._v(_vm._s(_vm.Content.truecard_free[_vm.$i18n.locale])),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isTrueCard
              ? _c("div", { staticClass: "true-card-message-long" }, [
                  _vm._v(_vm._s(_vm.Content.truecard_msg[_vm.$i18n.locale])),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "cart-price-container" }, [
              typeof _vm.data.meta !== "undefined" &&
              typeof _vm.data.meta.free_device !== "undefined"
                ? _c("div", { staticClass: "cart-price special" }, [
                    _vm._v("0.00.-"),
                  ])
                : _c("div", { staticClass: "cart-price special" }, [
                    _vm._v(
                      _vm._s(_vm.computePrice(_vm.price)) +
                        _vm._s(_vm.Content.baht[_vm.$i18n.locale])
                    ),
                  ]),
              _vm._v(" "),
              _vm.showOriginalPrice
                ? _c("div", { staticClass: "cart-price original" }, [
                    _vm._v(
                      _vm._s(_vm.computePrice(_vm.data.compare_at_price)) +
                        _vm._s(_vm.Content.baht[_vm.$i18n.locale])
                    ),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _vm.isPrepaidList && _vm.data.sim_meta
              ? _c("div", { staticClass: "cart-postpaid-chip" }, [
                  _vm._v("Prepaid"),
                ])
              : _vm.isPrepaidBundleSim
              ? _c("div", { staticClass: "cart-postpaid-chip" }, [
                  _vm._v("Prepaid"),
                ])
              : _vm.isMnp
              ? _c("div", { staticClass: "cart-postpaid-chip" }, [
                  _vm._v(_vm._s(_vm.data.sim_meta[0].sim_type)),
                ])
              : _vm.isVhoraPrepaid
              ? _c("div", { staticClass: "cart-postpaid-chip" }, [
                  _vm._v("Prepaid"),
                ])
              : _vm.data.postpaid &&
                _vm.data.postpaid.meta.sim_type === "postpaid"
              ? _c("div", { staticClass: "cart-postpaid-chip" }, [
                  _vm._v("Postpaid"),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isPrepaidList && _vm.data.sim_meta
              ? _c("div", [
                  _vm.data.sim_meta[0].number
                    ? _c("div", { staticClass: "sim-container" }, [
                        _c(
                          "div",
                          { staticClass: "sim-info-container" },
                          [
                            _c("div", { staticClass: "sim-info-title" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.Content.mobile_number[_vm.$i18n.locale]
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.data.sim_meta, function (item, index) {
                              return _c("div", { key: index }, [
                                _c("span", { staticClass: "red" }, [
                                  _vm._v(_vm._s(item.number)),
                                ]),
                              ])
                            }),
                          ],
                          2
                        ),
                      ])
                    : _vm._e(),
                ])
              : _vm._e(),
            _vm._v(" "),
            typeof _vm.data.meta !== "undefined" &&
            typeof _vm.data.meta.free_device !== "undefined"
              ? _c("div", { staticClass: "cart-tax" }, [
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm.data.meta.free_device.label_cart[_vm.$i18n.locale]
                      ) +
                      " " +
                      _vm._s(_vm.computePrice(_vm.price)) +
                      ".-"
                  ),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "cart-action quantity" }, [
            _c("div", { staticClass: "cart-quantity-label" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.Content.cart_quantity[_vm.$i18n.locale]) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cart-quantity" }, [
              _c("div", { staticClass: "cart-quantity-container" }, [
                !_vm.hideQuantity
                  ? _c(
                      "button",
                      {
                        staticClass: "cart-quantity-button",
                        attrs: {
                          disabled: _vm.hideQuantity || _vm.data.quantity <= 1,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.decreaseQuantity()
                          },
                        },
                      },
                      [_vm._v("\n              -\n            ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "cart-quantity-value",
                    class: { onlylabel: _vm.hideQuantity },
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.data.quantity) +
                        "\n            "
                    ),
                  ]
                ),
                _vm._v(" "),
                !_vm.hideQuantity
                  ? _c(
                      "button",
                      {
                        staticClass: "cart-quantity-button increase",
                        attrs: {
                          disabled:
                            _vm.hideQuantity ||
                            _vm.data.quantity >= _vm.data.total_quantity,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.increaseQuantity()
                          },
                        },
                      },
                      [_vm._v("\n              +\n            ")]
                    )
                  : _vm._e(),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "cart-action" }, [
            _c("div", { staticClass: "cart-action-label" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.Content.cart_price[_vm.$i18n.locale]) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "cart-delete cart-delete-button cart-delete-desktop",
              },
              [
                !["advancepayment"].includes(_vm.data.product_type)
                  ? _c(
                      "svg",
                      {
                        attrs: {
                          width: "30",
                          height: "30",
                          viewBox: "0 0 30 30",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        on: { click: _vm.deleteItem },
                      },
                      [
                        _c("circle", {
                          attrs: {
                            cx: "15",
                            cy: "15",
                            r: "14",
                            stroke: "#E62627",
                            "stroke-width": "2",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "g",
                          { attrs: { "clip-path": "url(#clip0_840_276)" } },
                          [
                            _c("path", {
                              attrs: {
                                d: "M11 11L18.1 18.1",
                                stroke: "#E62627",
                                "stroke-width": "2",
                                "stroke-miterlimit": "10",
                                "stroke-linecap": "round",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d: "M18.1 11L11 18.1",
                                stroke: "#E62627",
                                "stroke-width": "2",
                                "stroke-miterlimit": "10",
                                "stroke-linecap": "round",
                              },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("defs", [
                          _c("clipPath", { attrs: { id: "clip0_840_276" } }, [
                            _c("rect", {
                              attrs: {
                                width: "9.1",
                                height: "9.1",
                                fill: "white",
                                transform: "translate(10 10)",
                              },
                            }),
                          ]),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "total-price" }, [
              _c("div", { staticClass: "discount-price" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.computePrice(_vm.totalPrice)) +
                    _vm._s(_vm.Content.baht[_vm.$i18n.locale]) +
                    "\n          "
                ),
              ]),
              _vm._v(" "),
              _vm.totalFullPrice > 0
                ? _c("div", { staticClass: "full-price" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.computePrice(_vm.totalFullPrice)) +
                        _vm._s(_vm.Content.baht[_vm.$i18n.locale]) +
                        "\n          "
                    ),
                  ])
                : _vm._e(),
            ]),
          ]),
        ]),
        _vm._v(" "),
        [
          "product",
          "sim",
          "postpaid",
          "mnp",
          "device_bundle_new_customer",
          "device_bundle_existing",
        ].includes(_vm.data.product_type) &&
        !_vm.isPrepaidList &&
        _vm.isClmBenefit
          ? _c(
              "div",
              { staticClass: "cart-content bottom" },
              [
                _c("clm-benefit", {
                  attrs: {
                    type: "bundle",
                    "product-type": _vm.data.product_type,
                    "product-id": _vm.data.id,
                    matcode: _vm.data.sku,
                    propocode: _vm.data.sim_meta
                      ? _vm.data.sim_meta[0].price_plan.code
                      : "",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.data.error && _vm.data.product_type !== "truecard"
          ? _c("div", { staticClass: "cart-content bottom" }, [
              _c("div", { staticClass: "balance-point-container" }, [
                _c("div", { staticClass: "balance-point" }, [
                  _vm._v(_vm._s(_vm.Content.removeCartError[_vm.$i18n.locale])),
                ]),
              ]),
              _vm._v(" "),
              _vm.isTrueCard && _vm.data.true_card.card_upgrade
                ? _c("div", { staticClass: "balance-point-container" }, [
                    _c("div", { staticClass: "balance-point upgrade" }, [
                      _vm._v(
                        _vm._s(_vm.Content.truecard_upgrade[_vm.$i18n.locale]) +
                          " " +
                          _vm._s(_vm.data.true_card.grade.title)
                      ),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "balance-point-container" }, [
                _vm.showBalance(_vm.cart, _vm.data)
                  ? _c("div", { staticClass: "balance-point" }, [
                      _c("span", [
                        _vm._v(_vm._s(_vm.Content.redeem[_vm.$i18n.locale])),
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: { src: "/images/icons/true-point-heart.png" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "number" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.computeBalance(_vm.data.points.point)) +
                            "\n            "
                        ),
                        _c("span", { staticClass: "black" }, [
                          _vm._v(_vm._s(_vm.Content.points[_vm.$i18n.locale])),
                        ]),
                        _vm._v(" "),
                        _vm.data.price - _vm.data.points.discount !== 0
                          ? _c("span", [
                              _c("span", { staticClass: "black" }, [
                                _vm._v(" +"),
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.computePrice(
                                      _vm.data.price - _vm.data.points.discount
                                    )
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "black" }, [
                                _vm._v(
                                  _vm._s(_vm.Content.baht[_vm.$i18n.locale])
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.data.postpaid
        ? _c("activate-sim", { attrs: { postpaid: _vm.data.postpaid } })
        : _vm._e(),
      _vm._v(" "),
      _vm.data.existing_campaign &&
      (_vm.data.existing_campaign.campaign_type === "3" ||
        _vm.data.existing_campaign.campaign_type === "4") &&
      _vm.data.existing_campaign.price_plan.description
        ? _c("div", { staticClass: "sim-container" }, [
            _c("div", { staticClass: "sim-info-container" }, [
              _c("div", { staticClass: "sim-info-title" }, [
                _vm._v(_vm._s(_vm.Content.package[_vm.$i18n.locale])),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  _vm._s(_vm.data.existing_campaign.price_plan.description)
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  _vm._s(_vm.Content.monthly_service_fee[_vm.$i18n.locale]) +
                    " " +
                    _vm._s(_vm.monthlyServiceFee) +
                    " " +
                    _vm._s(_vm.Content.monthly_service_baht[_vm.$i18n.locale])
                ),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isMnp || _vm.isPre2Post || _vm.isPrepaidBundleSim
        ? _c("div", { staticClass: "sim-container" }, [
            _c(
              "div",
              { staticClass: "sim-info-container" },
              [
                _c(
                  "div",
                  { staticClass: "sim-info-title" },
                  [
                    _vm.isMnp
                      ? [
                          _vm._v(
                            _vm._s(_vm.Content.mnp_title[_vm.$i18n.locale])
                          ),
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isPre2Post
                      ? [
                          _vm._v(
                            _vm._s(_vm.Content.pre2post_title[_vm.$i18n.locale])
                          ),
                        ]
                      : _vm._e(),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.isMnp
                  ? _c("div", [
                      _c(
                        "span",
                        [
                          _vm.data.sim_meta[0].identity_type === "I"
                            ? [
                                _vm._v(
                                  _vm._s(
                                    _vm.Content.thai_id_number[_vm.$i18n.locale]
                                  ) + " "
                                ),
                              ]
                            : [
                                _vm._v(
                                  _vm._s(
                                    _vm.Content.passport_number[
                                      _vm.$i18n.locale
                                    ]
                                  ) + " "
                                ),
                              ],
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.data.sim_meta[0].thai_id) +
                              ": "
                          ),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "red" }, [
                        _vm._v(
                          _vm._s(_vm.Content.mobile_number[_vm.$i18n.locale]) +
                            " " +
                            _vm._s(
                              _vm.computeMobileNumber(
                                _vm.data.sim_meta[0].number
                              )
                            )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPre2Post
                  ? _c("div", [
                      _c("div", { staticClass: "red bold" }, [
                        _vm._v(
                          _vm._s(
                            _vm.computeMobileNumber(
                              _vm.data.sim_meta.user_information.telephone
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(_vm.Content.thai_id_number[_vm.$i18n.locale]) +
                            ": " +
                            _vm._s(_vm.data.sim_meta.user_information.thai_id)
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isMnp
                  ? _c(
                      "div",
                      {
                        class:
                          "sim-info-title " + (_vm.isPre2Post && "margin-top"),
                      },
                      [_vm._v(_vm._s(_vm.Content.package[_vm.$i18n.locale]))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPre2Post
                  ? [
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.data.existing_campaign.price_plan.description
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.Content.monthly_service_fee[_vm.$i18n.locale]
                          ) +
                            " " +
                            _vm._s(_vm.monthlyServiceFee) +
                            " " +
                            _vm._s(
                              _vm.Content.monthly_service_baht[_vm.$i18n.locale]
                            )
                        ),
                      ]),
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPrepaidBundleSim
                  ? _c("div", [
                      _vm._v(
                        _vm._s(_vm.data.sim_meta[0].proposition.term_short)
                      ),
                    ])
                  : _vm._e(),
              ],
              2
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isDeviceBundle && _vm.isCreditOnly
        ? _c("div", { staticClass: "sim-container" }, [
            _c("div", { staticClass: "sim-info-container" }, [
              _c("div", { staticClass: "sim-info-title" }, [
                _vm._v(
                  _vm._s(
                    _vm.Content.flagship_discount[_vm.$i18n.locale]
                      .replace(
                        "${discount}",
                        _vm.computePrice(_vm.data.discount)
                      )
                      .replace("${code}", _vm.code5g)
                  )
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "red" }, [
                _vm._v(_vm._s(_vm.Content.credit_card_only[_vm.$i18n.locale])),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.data.meta &&
      _vm.data.meta.cloud &&
      _vm.data.meta.cloud_description &&
      _vm.data.meta.iot_type
        ? _c("div", { staticClass: "sim-container" }, [
            _c("div", { staticClass: "sim-info-container" }, [
              _c(
                "div",
                { staticClass: "iot-title" },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        _vm.Content.iot_desciption.detail[_vm.$i18n.locale]
                      ) +
                      "\n        "
                  ),
                  _vm.data.meta.cloud === "99" || _vm.data.meta.cloud === "159"
                    ? [_vm._v("1")]
                    : [_vm._v("2")],
                  _vm._v(" "),
                  _vm.data.meta.cloud === "99x2" ||
                  _vm.data.meta.cloud === "159x2"
                    ? [
                        _vm._v(
                          _vm._s(
                            _vm.Content.iot_desciption.units[_vm.$i18n.locale]
                          )
                        ),
                      ]
                    : [
                        _vm._v(
                          _vm._s(
                            _vm.Content.iot_desciption.unit[_vm.$i18n.locale]
                          )
                        ),
                      ],
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        _vm.Content.iot_desciption.vat_datail[_vm.$i18n.locale]
                      ) +
                      "\n      "
                  ),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "iot-title" },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        _vm.Content.iot_desciption.subscribe[_vm.$i18n.locale]
                      ) +
                      "\n        "
                  ),
                  _vm.data.meta.cloud === "99x2"
                    ? [_vm._v("99")]
                    : _vm.data.meta.cloud === "159x2"
                    ? [_vm._v("159")]
                    : [_vm._v(_vm._s(_vm.data.meta.cloud))],
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.Content.iot_desciption.price[_vm.$i18n.locale])
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.data.meta.cloud === "99x2" ||
                  _vm.data.meta.cloud === "159x2"
                    ? _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.Content.iot_desciption.two_unit[
                              _vm.$i18n.locale
                            ]
                          ) + " "
                        ),
                      ])
                    : _vm._e(),
                ],
                2
              ),
            ]),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cart.vue":
/*!******************************************!*\
  !*** ./resources/js/components/cart.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=bfae042a&scoped=true& */ "./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true&");
/* harmony import */ var _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.vue?vue&type=script&lang=js& */ "./resources/js/components/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& */ "./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bfae042a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cart.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/cart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=style&index=0&id=bfae042a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_bfae042a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=template&id=bfae042a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart.vue?vue&type=template&id=bfae042a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_bfae042a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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