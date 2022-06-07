<template>
  <div class="coupon-container cart-content" :loading="loading">
    <div class='coupon-title-container'>
      <div class="coupon-title">{{ Content.discount_text[$i18n.locale] }}</div>
    </div>
    <div class="coupon-input-container" :error="error">
      <input-element class="coupon-input" v-model="couponInput" @keyup.enter="applyCoupon" :placeholder="Content.discount_placeholder[$i18n.locale]"/>
      <div class="coupon-button" @click="applyCoupon">{{ Content.discount_button[$i18n.locale] }}</div>
      <div class="coupon-clear"  @click="removeCoupon">
        <svg height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="10.5" stroke="#E62627"/>
          <g clip-path="url(#clip0_901_638)">
          <path d="M8.06689 8.06689L13.2736 13.2736" stroke="#E62627" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M13.2736 8.06689L8.06689 13.2736" stroke="#E62627" stroke-miterlimit="10" stroke-linecap="round"/>
          </g>
          <defs>
          <clipPath id="clip0_901_638">
          <rect width="6.67333" height="6.67333" fill="white" transform="translate(7.3335 7.3335)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <span class="coupon-status loading" v-if="loading">{{ locale.loadingMsg[$i18n.locale] }}</span>
    </div>
    <div class="coupon-status" v-if="message" :error="error">
      <svg class="success-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18">
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.29,14.89 c0.39,0.39,0.39,1.02,0,1.41c-0.39,0.39-1.02,0.39-1.41,0L12,13.41l-2.89,2.89c-0.39,0.39-1.02,0.39-1.41,0 c-0.39-0.39-0.39-1.02,0-1.41L10.59,12L7.71,9.11c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0L12,10.59l2.89-2.89 c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,0.39,1.02,0,1.41L13.41,12L16.29,14.89z"/>
      </svg>
      <div>{{ message[$i18n.locale] }}</div>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Content from './content.json'
  import { computeGtagProducts } from '@utils/common'
  export default {
    components: {
      'input-element': Input
    },
    props: {
      cart: Object,
      coupon: String,
      paymentChannel: String
    },
    data: () => ({
      Content,
      couponInput: '',
      loading: false,
      locale: {
        loadingMsg: {
          th: 'Loading ...',
          en: 'Loading ...'
        },
        successMsg: {
          th: 'Discount applied.',
          en: 'Discount applied.'
        },
        dialog: {
          title: {
            en: 'How to use discount code',
            th: 'วิธีใช้โค้ดส่วนลด'
          },
          step1: {
            en: 'Enter discount code. Then, tap \'Use\' button. The discount will show in the Summary.',
            th: 'ใส่โค้ดส่วนลด แล้วกดปุ่ม "ใช้" ส่วนลดที่ได้รับจะแสดงในส่วนสรุปรายงานการสั่งซื้อ'
          },
          step2: {
            en: 'You can use 1 discount code per 1 purchase.',
            th: '1 โค้ดส่วนลด ใช้ได้ต่อ 1 คำสั่งซื้อเท่านั้น'
          },
          button: {
            en: 'OK',
            th: 'เข้าใจแล้ว'
          }
        },
        applyCoupon: {
          en: 'Use',
          th: 'ใช้'
        }
      }
    }),
    computed: {
      couponData () {
        return this.$store.state.cart.cart.data.coupon_data_from_bff
      },
      isPass () {
        return this.couponData.is_pass
      },
      error () {
        if (!this.couponData) return false
        if (this.loading) return false
        return !this.couponData.is_pass
      },
      message () {
        if (!this.couponData) return false
        if (this.loading) return false
        return this.isPass ? this.locale.successMsg : this.couponData.message
      }
    },
    watch: {
      coupon (value) {
        this.couponInput = value
      }
    },
    mounted () {
      if (this.coupon) this.couponInput = this.coupon
    },
    methods: {
      trackAnalytics () {
        const coupon = {
          coupon: this.coupon,
          metric3: (this.couponData.total_coupon_discount_amount || 0).toFixed(2)
        }
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'order_summary',
          event_action: 'redeem_product_coupon',
          event_label: this.isPass ? `${this.coupon}_success` : `${this.coupon}_failure`,
          ecommerce: {
            currencyCode: 'THB',
            checkout: {
              actionField: {
                step: 2,
                option: this.paymentChannel
              },
              products: computeGtagProducts(this.cart, coupon)
            }
          }
        })
      },
      async applyCoupon () {
        if (!this.couponInput.trim()) return
        this.loading = true
        await this.$parent.$parent.applyCoupon(this.couponInput)
        this.trackAnalytics()
        this.loading = false
      },
      async removeCoupon () {
        if (!this.couponInput.trim()) return
        this.loading = true
        await this.$parent.$parent.applyCoupon('')
        this.couponInput = ''
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .coupon-container {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;

    &[loading] .coupon-input-container {
      pointer-events: none;

      .coupon-input::v-deep input {
        border-color: #ccc;
      }
      .coupon-button {
        background-color: #ccc;
      }
    }

    .info-icon {
      width: 18px;
      height: 18px;
      fill: #37474f;
    }

    .coupon-dialog {
      .dialog-content {
        padding: 36px;
        position: relative;
      }

      .content {
        max-height: 85%;
        max-width: 860px;

        .title-container {
          padding: 16px 16px 0;
          border-bottom: 1px solid #e4eaec;

          .title-header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
          }

          .title {
            margin-left: 8px;
            font-family: "TrueBold";
            font-size: 32px;
            display: inline-block;
          }

          .close-container {
            position: absolute;
            top: 8px;
            right: 8px;

            .close {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;

              svg {
                fill: #37474f;
              }

              &:hover {
                background: #e3e3e3;
              }
            }
          }
        }

        .content-container {
          padding: 16px;
          color: #666;

          ul {
            margin-top: 0;
            margin-bottom: 0;
          }

          .item {
            margin-bottom: 12px;
          }
        }

        .button-container {
          padding: 16px;
          text-align: center;

          .button {
            background-color: #ff0000;
          }
        }
      }
    }

    .coupon-title-container {
      display: flex;
      align-items: center;
      flex: 1 1 40%;

      .discount-info-icon {
        margin-left: 8px;
        display: flex;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .coupon-title {
      color: #000;
      font-family: "TrueBold";
    }

    .coupon-input-container {
      position: relative;
      display: grid;
      grid-template-columns: 1fr auto;

      &[error] .coupon-input::v-deep input {
        border-color: #ff0000;
      }

      .coupon-input::v-deep input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
        padding-right: 36px;
        border-color: #ddd;
      }

      .coupon-button {
        background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);;
        color: #fff;
        height: 40px;
        width: 72px;
        border: 1px solid #CCCCCC;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 20px;
        font-family: 'TrueLight';
        display: grid;
        place-items: center;
        cursor: pointer;
      }

      .coupon-clear {
        display: grid;
        place-items: center;
        margin: auto;
        position: absolute;
        right: 78px;
        height: 40px;
        cursor: pointer;
      }
    }

    .coupon-status {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 4px;
      align-items: center;
      font-size: 20px;
      line-height: 18px;
      color: #2cae24;

      &.loading {
        color: #666;
      }

      &[error] {
        color: #ff0000;

        .success-icon {
          display: none;
        }
        .error-icon {
          display: block;
        }
      }

      svg {
        fill: currentColor;
      }

      .error-icon {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .coupon-dialog {
      .content {
        .button-container {
          .button {
            width: 100%;
          }
        }
      }
    }
  }
</style>
