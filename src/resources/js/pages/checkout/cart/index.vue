<template>
  <div>
    <dialog-element ref="dialog">
      <div
        slot="content"
        class="login-dialog"
      >
        <div class="dialog-header text-bold">{{ Content.login[$i18n.locale] }}</div>
        <button-element
          class="newDesignButton loginButton text-bold"
          @click="login"
        >{{ Content.loginwith[$i18n.locale] }} <img src="/images/icons/true-id.png" />
        </button-element>
        <button-element
          class="newDesignButton guestButton text-bold"
          @click="goToAddress"
        >{{ Content.guest[$i18n.locale] }}
        </button-element>
      </div>
    </dialog-element>
    <div>
      <div
        class="error-container"
        v-if="cartErrors.length > 0"
      >
        <ul>
          <li
            v-for="(error, key) in cartErrors"
            :key="key"
          >{{ error[$i18n.locale] }}</li>
        </ul>
      </div>
      <div
        class="success-container"
        v-if="Object.keys(cartSuccess).length > 0"
      >
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
        </svg>
        <div>{{ cartSuccess[$i18n.locale] }}</div>
      </div>
      <div
        class="cart-container"
        v-if="Object.keys(this.cart).length > 0"
      >
        <div class="cart-item-container">
          <div class="cart-label">
            <div class="cart-product">
              {{ Content.cartlabel[$i18n.locale] }}
            </div>
            <div class="cart-quantity">
              {{ Content.cart_quantity[$i18n.locale] }}
            </div>
            <div class="cart-price">
              {{ Content.cart_price[$i18n.locale] }}
            </div>
          </div>
          <div class="cart-item-panel">
            <div class="panel-content">
              <cart-element
                v-for="(item, key) in cart"
                :cart="cart"
                :key="key"
                :data="item"
                :disable-quantity="disableQuantity"
                @delete="deleteCart"
                @update="updateCart"
              />
              <div
                v-if="hasMultiCampaign"
                class="multi-campaign-message"
              >{{ Content.multiCampaignMsg[$i18n.locale] }}</div>
            </div>
          </div>

          <div v-if="paymentBanner && !Array.isArray(paymentBanner)" class="payment-banner-container">
            <a :href="paymentBanner[isMobile ? 'banner_small' : 'banner_large'].link" target="_blank" >
              <img :src="paymentBanner[isMobile ? 'banner_small' : 'banner_large'].url" />
            </a>
          </div>
        </div>

        <div class="cart-info-container">
          <div>
            <div class="cart-label">
              {{ Content.summary[$i18n.locale] }}
            </div>
            <summary-element
              :cart="cart"
              :shipping="shipping"
              :advance-payment="advancePayment"
              :total-discount="totalDiscount"
              :total-price="totalPrice"
              :final-price="finalPrice"
            />
          </div>
          <div class="button-container">
            <button-element
              v-if="userLoading"
              class="button"
              disabled
            >Loading ...</button-element>
            <button-element
              v-else
              @click="checkUser"
              :disabled="disableCheckout"
              class="button"
              id="go_shipping"
            >{{ Content.next[$i18n.locale] }}</button-element>
          </div>

          <div v-if="paymentBanner && !Array.isArray(paymentBanner)" class="payment-banner-container">
            <a :href="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].link" target="_blank" >
              <img :src="paymentBanner[isMobile ? 'banner_large' : 'banner_small'].url" />
            </a>
          </div>
        </div>
        <div class="cart-info-sticky">
          <div class="price-container">
            <div class="price-label">{{ Content.total_price[$i18n.locale] }}</div>
            <div class="price-value">{{ finalPrice }}{{ Content.baht[$i18n.locale] }}</div>
          </div>
          <button-element
            v-if="userLoading"
            class="button"
            disabled
          >Loading ...</button-element>
          <button-element
            v-else
            @click="checkUser"
            :disabled="disableCheckout"
            class="button"
            id="go_shipping"
          >{{ Content.next[$i18n.locale] }}</button-element>
        </div>
      </div>
      <div
        class="empty-cart"
        v-else
      >{{ Content.emptycart[$i18n.locale] }}</div>
    </div>
  </div>
</template>

<script>
  import Cart from '@components/cart'
  import Button from '@components/button'
  import Dialog from '@components/dialog'
  import Summary from '@components/summary'
  import Content from './content.json'

  import { computePrice } from '@utils/common'

  export default {
    components: {
      'cart-element': Cart,
      'button-element': Button,
      'dialog-element': Dialog,
      'summary-element': Summary
    },
    props: {
      cart: [Object],
      id: [String],
      cartErrors: [Array],
      config: Object
    },
    data: () => ({
      quantity: {},
      Content,
      userLoading: false,
      cartSuccess: {},
      isMobile: false
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      couponData () {
        return this.$store.state.cart.cart.data.coupon_data_from_bff
      },
      couponDiscount () {
        return this.couponData?.total_coupon_discount_amount || 0
      },
      hasTrueCard () {
        const card = Object.keys(this.cart).filter((key) => this.cart[key].product_type === 'truecard')
        return card.length > 0 && !this.user
      },
      hasMultiCampaign () {
        const result = Object.keys(this.cart).filter((key) => this.cart[key].campaign)
        return result.length > 0
      },
      disableCheckout () {
        const error = Object.keys(this.cart).map((key) => this.cart[key].error)
        return error.includes(true)
      },
      disableQuantity () {
        const config = this.$store.state.config.verifyConfig
        if (!config) return []
        return config.verify.map((product) => {
          if (product.type === 'postpaid' || product.type === 'trueidtv') return product.id
        }).filter(item => item)
      },
      totalDiscount () {
        return Object.keys(this.cart).reduce((result, item) => {
          return result + parseFloat(this.cart[item].discount)
        }, 0)
      },
      totalPrice () {
        return Object.keys(this.cart).reduce((result, item) => {
          if (this.cart[item].product_type === 'advancepayment') return result
          return result + this.cart[item].price * this.cart[item].quantity
        }, 0)
      },
      advancePayment () {
        return this.$store.state.cart.cart.data.advance_payment || 0
      },
      shipping () {
        return this.$store.state.cart.cart.data.shipping_fee
      },
      eCouponDiscount () {
        return Object.keys(this.cart).reduce((total, key) => {
          return total + parseFloat((this.cart[key]?.privilege?.ecoupon_discount || 0))
        }, 0)
      },
      finalPrice () {
        return computePrice(this.shipping + this.totalPrice - this.totalDiscount + this.advancePayment - this.couponDiscount - this.eCouponDiscount)
      },
      paymentBanner () {
        return this.$store.state.cart.cart.data.payment_banner
      }
    },
    watch: {
      user () {
        if (this.user && this.userLoading) {
          if (this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP) {
            this.$router.push('/pickup')
          } else {
            this.$router.push('/address')
          }
          this.userLoading = false
        }
      }
    },
    mounted () {
      // Track screen size
      this.isMobile = screen.width <= 1000
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.isMobile = screen.width <= 1000
        })
      })
      const error = this.$route.query.error
      switch (error) {
        case '010':
          this.cartErrors.push({
            th: 'ขออภัยค่ะไม่สามารถเลือกสินค้าเดียวกันภายในออเดอร์นี้ได้ ❤️กรุณาชำระเงินรายการปัจจุบัน และทำรายการซื้อเพิ่มเติมใหม่❤️อีกครั้ง',
            en: 'Sorry, your transaction can\'t be done concurrently in this same order, please pay for your current order and then buy more later again.'
          })
          break
        case '011':
          this.cartErrors.push({
            th: 'ขออภัยค่ะไม่สามารถทำรายการพร้อมกันภายในออเดอร์นี้ได้ กรุณาชำระเงินรายการปัจจุบันและทำรายการซื้อเพิ่มเติมใหม่อีกครั้ง',
            en: 'Sorry, your transaction can\'t be done concurrently in this same order, please pay for your current order and then buy more later again.'
          })
          break
        case '012':
          this.cartErrors.push({
            th: 'ขออภัยค่ะไม่สามารถทำรายการพร้อมกันภายในออเดอร์นี้ได้ กรุณาชำระเงินรายการปัจจุบันและทำรายการซื้อเพิ่มเติมใหม่อีกครั้ง',
            en: 'We have detected that you already have another service item or product service item in your shopping cart. Sorry, but you are unable to verify for this item in the same checkout transaction.'
          })
          break
        case '013':
          this.checkOverQuantity(this.$route.query.pql_pid, this.$route.query.pql_iid)
          break
        case '020':
          this.cartErrors.push({
            th: 'ไม่สามารถซื้อสินค้าลักษณะเดียวกันได้พร้อมกัน',
            en: 'Unable to buy the product with the same feature.'
          })
          break
        case '040':
          this.cartErrors.push({
            th: 'ไม่สามารถสั่งซื้อสินค้าอื่นร่วมกับสินค้าที่รับที่ 7 eleven ได้',
            en: 'Please complete product picked up at 7 eleven before adding other products.'
          })
          break
        case '050':
          this.cartErrors.push({
            th: 'ท่านไม่ได้รับอนุญาตให้ขอบริการสินเชื่อ PayLater',
            en: 'You are no authorized to apply for PayLater'
          })
          break
      }
      if (error) {
        const query = Object.assign({}, this.$route.query)
        delete query.error
        delete query.pql_pid
        delete query.pql_iid
        this.$router.replace({ query })
      }
      const privilegeId = this.$route.query['privilege-id']
      if (privilegeId) {
        const id = Object.keys(this.cart).filter((i) => this.cart[i].id === privilegeId)
        if (id && id.length > 0) {
          const cart = this.cart[id]
          this.cartSuccess = {
            th: `ท่านได้ผ่านการตรวจสอบสิทธิ์สำหรับสินค้า ${cart.title}.`,
            en: `You have successfully verified for the privilege of ${cart.title}.`
          }
        }
        const query = Object.assign({}, this.$route.query)
        delete query['privilege-id']
        this.$router.replace({ query })
      }
    },
    methods: {
      computePrice,
      async updateCart (data) {
        await this.$parent.updateCart(data)
      },
      async deleteCart (data) {
        await this.$parent.deleteCart(data)
      },
      checkOverQuantity (productId, inventoryId) {
        const key = Object.keys(this.cart).find((i) => {
          const cart = this.cart[i]
          return cart.id === productId && cart.inventory_id.toString() === inventoryId
        })
        if (!key) return
        const product = this.cart[key]
        this.cartErrors.push({
          th: `สินค้า ${product.title} มีการจำกัดสิทธิ์การซื้อได้ ${product.quantity_limit} ชิ้นต่อการสั่งซื้อ`,
          en: `${product.quantity_limit} item(s) of ${product.title} is allowed per order`
        })
      },
      checkUser () {
        if (this.hasTrueCard) {
          this.login()
          return
        }
        if (this.user) {
          if (this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP) {
            this.$router.push('/pickup')
          } else {
            this.$router.push('/address')
          }
        } else {
          this.$refs.dialog.open()
        }
      },
      login () {
        this.userLoading = true
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'login_popup',
          event_action: 'login',
          event_label: 'Login with TrueID'
        })
        this.$refs.dialog.close()
        window.dispatchEvent(new Event('login'))
        window.addEventListener('true-login-cancelled', () => {
          this.userLoading = false
        }, {
          once: true
        })
      },
      goToAddress () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'login_popup',
          event_action: 'register',
          event_label: 'Guest Checkout'
        })
        this.$refs.dialog.close()
        if (this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP) {
          this.$router.push('/pickup')
        } else {
          this.$router.push('/address')
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style scoped lang="scss">
    .newDesignButton {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #F0F0F0;
      border-color: transparent;
      border-radius: 9999px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 22px;
      width: 100%;
      max-width: 280px;
      margin: 8px 0;

      &[disabled] {
       color:#989898;
       background:#D9D9D9;
     }
    }
    .loginButton {
     color: #fff;
     background: linear-gradient(91.95deg, #E02C2D 0%, #E01974 100%);
  }

    .guestButton {
     color: #E62627;
     background: #fff;
     box-shadow: 0 0 0 1px #E62627;
  }

  .payment-banner-container {
    img {
      width: 100%
    }
  }

  @media screen and (max-width: 860px) {
    .payment-banner-container {
      display: flex;
      flex-direction: column;
      margin: 16px auto 16px auto;
      img {
        width: 100%;
      }
    }
  }
</style>
