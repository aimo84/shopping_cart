<template>
  <div class="summary">
    <div class="cart-header">
      <div class="info">
        {{ Locale.item_title[$i18n.locale] }}
      </div>
      <div class="quantity">
        {{ Locale.item_qty[$i18n.locale] }}
      </div>
      <div class="cart-value">
        {{ Locale.price[$i18n.locale] }}
      </div>
    </div>
    <div class="cart-content" v-for="(item, index) in cartNoAdvance" :key="index">
      <div class="info">
        <div class="product-title" >{{ item.title }}</div>
        <div class="product-option" v-if="item.product_type === 'sim'">
          <div class="product-title" v-if="item.sim_meta || item.postpaid">{{ Locale.sim_title[$i18n.locale] }}</div>
          <div v-if="item.sim_meta.number || item.postpaid">{{ phoneNumber(index) }}</div>
          <div class="product-title" v-if="item.postpaid">{{ Locale.sim_package[$i18n.locale] }}</div>
          <div v-if="item.postpaid">{{ item.postpaid.meta.price_plan.description }}</div>
          <div v-if="item.postpaid">{{ Locale.monthly_service_fee[$i18n.locale] }} {{ item.postpaid.meta.price_plan && item.postpaid.meta.price_plan.price }} {{ Locale.monthly_service_baht[$i18n.locale] }} </div>
        </div>
        <div class="product-option" v-else>
          {{ item.options }}
        </div>
        <div class="product-option" v-if="typeof item.meta !== 'undefined' && typeof item.meta.free_device !== 'undefined'">
           ({{item.meta.free_device.label_checkout[$i18n.locale]}} {{ computePrice(item.price - item.discount) }}.-)
        </div>
      </div>
      <div class="quantity">
        {{ item.quantity }}
      </div>
      <div class="cart-value">
        {{ computePrice(item.price) }}.-
      </div>
    </div>
    <burn-point
      v-if="showBurnPoint"
      :cart="cart"
      :user="user"
      :total-quantity="totalQuantity"
      :redeem-confirmed="redeemConfirmed"
      @onShowRedeem="$emit('onShowRedeem', true)"
      @onRedeemConfirmed="$emit('onRedeemConfirmed', true)"
    />

    <div class="cart-content" v-if="couponDiscount || eCouponDiscount > 0">
      <div class="info red">
        Special Discount
      </div>
      <div class="cart-value red">
        -{{ computePrice((couponDiscount || 0) + eCouponDiscount) }}฿
      </div>
    </div>
    <div class="cart-content" v-if="advancePayment">
      <div class="info">
        <div class="product-title" >
          {{ Locale.advance_payment[$i18n.locale] }}
        </div>
        <div class="product-option" v-if="advancePaymentInfo">
          {{ advancePaymentInfo }}
        </div>
      </div>
      <div class="quantity">1</div>
      <div class="cart-value">
        {{ computePrice(advancePayment) }}.-
      </div>
    </div>
    <div class="cart-content" :class="{'border-0' : this.$route.name === 'payment'}">
      <div class="info">
        {{ Locale.shipping[$i18n.locale] }}
      </div>
      <div class="quantity">1</div>
      <div class="cart-value black">
        {{ computePrice(shipping) }}.-
      </div>
    </div>
    <slot class="cart-content"></slot>
    <div class="cart-content" v-if="totalDiscount">
      <div class="info red">
        {{ Locale.save[$i18n.locale] }}
      </div>
      <div class="cart-value red">
        -{{ computePrice(totalDiscount) }}.-
      </div>
    </div>
    <div class="cart-content total-price">
      <div class="info black">
        {{ Locale.total_price[$i18n.locale] }}
      </div>
      <div class="cart-value red">
        {{ finalPrice }}.-
      </div>
    </div>
  </div>
</template>

<script>
  import BurnPoint from '@components/burn-point'

  import {
    computePrice
  } from '@utils/common'

  export default {
    components: {
      'burn-point': BurnPoint
    },
    props: {
      cart: [Object],
      user: [Object, Boolean],
      totalDiscount: [Number],
      totalPrice: [Number],
      shipping: [Number],
      advancePayment: [Number],
      finalPrice: [String],
      redeemConfirmed: [Boolean],
      showBurnPoint: [Boolean]
    },
    data: () => ({
      Locale: {
        item_title: {
          th: 'รายการสินค้า',
          en: 'Item'
        },
        item_qty: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        item: {
          th: 'รายการ',
          en: 'Item'
        },
        items: {
          th: 'รายการ',
          en: 'Items'
        },
        price: {
          th: 'ราคา',
          en: 'Price'
        },
        shipping: {
          th: 'ค่าจัดส่ง',
          en: 'Shipping'
        },
        total_price: {
          th: 'มูลค่าสินค้า',
          en: 'Total Price'
        },
        save: {
          th: 'ประหยัด',
          en: 'Save'
        },
        advance_payment: {
          th: 'ชำระค่าบริการล่วงหน้า',
          en: 'Advance Payment'
        },
        ecoupon_discount: {
          th: 'ส่วนลด Ecoupon',
          en: 'Ecoupon Disount'
        },
        sim_title: {
          th: 'เบอร์ใหม่',
          en: 'Number'
        },
        sim_package: {
          th: 'แพ็กเกจ',
          en: 'Package'
        },
        monthly_service_fee: {
          th: 'ค่าบริการรายเดือน',
          en: 'Monthly service fee'
        },
        monthly_service_baht: {
          th: 'บาท',
          en: '฿'
        }
      }
    }),
    computed: {
      cartNoAdvance () {
        return Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type !== 'advancepayment') result.push(this.cart[item])
          return result
        }, [])
      },
      totalQuantity () {
        return Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type === 'advancepayment') return result
          return result + this.cart[item].quantity
        }, 0)
      },
      couponData () {
        return this.$store.state.cart.cart.data.coupon_data_from_bff
      },
      couponDiscount () {
        return this.couponData?.total_coupon_discount_amount
      },
      eCouponDiscount () {
        return Object.keys(this.cart).reduce((total, key) => {
          return total + parseFloat((this.cart[key]?.privilege?.ecoupon_discount || 0))
        }, 0)
      },
      advancePaymentInfo () {
        const advancePayment = Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type === 'advancepayment') result = this.cart[item]
          return result
        }, {})
        return advancePayment?.title
      }
    },
    methods: {
      computePrice,

      phoneNumber (index) {
        const cart = this.cartNoAdvance[index]
        const telNum = cart.postpaid?.meta?.number || (cart.sim_meta && cart.sim_meta[0]?.number)
        return telNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .summary {
    font-size: 15px;
    font-weight: 500;
    padding: 10px 20px;
    background-color: #fff;

    .cart-header,
    .cart-content {
      display: flex;
      font-size: 22px;

      .info {
        flex: 4;
        padding-right: 2px;
        color: #000;
        font-family: "TrueBold";

        .product-title {
          color: #000000;
        }

        .product-option {
          font-family: 'TrueLight';
          font-size: 20px;
          color: #000000;
        }
      }

      .quantity {
        color: #000;
        font-family: 'TrueBold';
        flex: 1;
        text-align: center;
      }

      .cart-value {
        color: #000;
        flex: 2;
        text-align: right;
        font-family: "TrueBold";
      }
    }

    .cart-content {
      padding: 12px 0;
      font-size: 22px;
      line-height: 22px;

      .cart-value {
        flex: 2;
        text-align: right;
        font-family: "TrueBold";
      }

      &.redeem {
        .info {
          .red {
            color: #E62627;
            font-family: "TrueBold";
          }
          .label-img {
            width: 18px;
            height: 18px;
            margin-bottom: -2px;
          }
        }
      }
    }

    .cart-header {
      padding-bottom: 10px;
      font-size: 28px;
      line-height: 24px;
      color: #666;
      font-family: "TrueBold";
      border-bottom: 1px solid #808080;
    }

    .cart-content {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      font-size: 22px;
      line-height: 24px;

      .red {
        color: #E62627;
      }

      .black {
        color: #000;
      }

      &.total-price {
        font-size: 28px;
        font-family: "TrueBold";

        .red {
          font-size: 38px;
        }
      }
    }

    .cart-content:last-child {
      border-bottom: none;
      border-top: solid 1px #808080
    }

    .cart-content:nth-last-child(2) {
      border-bottom: 1px solid #808080;
    }

    .button-container {
      padding: 0px 12px 12px 12px;
      margin-bottom: 10px;
      background: #fff;
      display: flex;
      justify-content: center;

      .button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .summary .cart-content.total-price {
      display: none;
    }
  }

  .border-0 {
    border: none !important;
  }
</style>
