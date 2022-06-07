<template>
  <div>
    <drlucky-countdown v-if="!loading && isDrLucky && this.$route.name !== 'error'"/>
    <div class="checkout-title" v-if="this.$route.name !== 'error'">
      <div style="flex: auto;">
        {{ title[$i18n.locale] }}
      </div>
      <progress-element :step="step"  v-if="this.$route.name !== 'pickup'"/>
    </div>
    <loading-element v-if="loading" />
    <template v-else>
      <router-view
        :cart="cart"
        :id="id"
        :config="config"
        :payment="payment"
        :cart-errors="cartErrors"
      />
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Progress from '@components/progress'
  import DrluckyCountdown from '@components/drlucky-countdown'
  import qs from 'qs'

  import {
    FETCH_VERIFY_CONFIG,
    FETCH_CART,
    UPDATE_CART,
    DELETE_CART,
    CHECK_NUMBER,
    FETCH_PROFILE,
    FETCH_TRUECARD
  } from '@store/actions.type'
  import {
    computeBalance,
    computeGtagProducts
  } from '@utils/common'

  export default {
    components: {
      'loading-element': Loading,
      'progress-element': Progress,
      'drlucky-countdown': DrluckyCountdown
    },
    data: () => ({
      loading: true,
      ekyc: {},
      cart: {},
      config: {},
      postpaid: {},
      cartErrors: [],
      payment: {
        coupon_code: undefined,
        payment_channel: 'EW',
        gateway: ''
      },
      id: '',
      step: 1,
      title: {
        th: 'ขั้นตอนการสั่งซื้อ',
        en: 'Order Process'
      }
    }),
    computed: {
      profile () {
        return this.$store.state.auth.profile.data
      },
      truecard () {
        return this.$store.state.auth.truecard.data
      },
      familySim () {
        return this.config.verify.map((product) => {
          if (product.type === 'postpaid' || product.type === 'prepaid') return product.id
        }).filter(item => item)
      },
      isMnp () {
        if (Object.keys(this.cart) <= 0) return false
        return Object.keys(this.cart).find((e) => this.cart[e].product_type === 'mnp')
      },
      isDrLucky () {
        if (Object.keys(this.cart) <= 0) return false
        return Object.keys(this.cart).find((e) => this.cart[e]?.sim_meta?.[0]?.campaign_type === 'vhora')
      }
    },
    watch: {
      '$route.name' (name) {
        this.setProgress(name)
        window.scrollTo(0, 0)
      },
      truecard () {
        if (!this.loading) {
          this.fetchCart(this.$store.state.cart.cart)
        }
      }
    },
    async mounted () {
      this.id = this.$route.query.id || localStorage.getItem('cart-id')
      if (!this.id) {
        this.loading = false
        window.dispatchEvent(new CustomEvent('cart-updated', {
          detail: { cart: 0 }
        }))
        return
      }
      try {
        const paysmoothData = localStorage.getItem('paysmooth-data')
        localStorage.setItem('cart-id', this.id)
        this.setProgress(this.$route.name)
        const response = await Promise.all([
          this.$store.dispatch(FETCH_VERIFY_CONFIG),
          this.$store.dispatch(FETCH_CART, {
            id: this.id,
            paysmoothToken: paysmoothData && JSON.parse(paysmoothData).paysmooth_token,
            ...this.payment
          }),
          this.fetchProfile()
        ])
        this.initEkyc()
        this.config = response[0]
        await this.fetchCart(response[1])
        this.loading = false
      } catch (e) {
        console.log(e)
        this.$router.push('/online-store')
      }
    },
    methods: {
      initEkyc () {
        const ekycData = localStorage.getItem('postpaid-ekyc-data')
        this.ekyc = ekycData ? JSON.parse(ekycData) : {}
      },
      verifyLocalStorage () {
        const products = Object.keys(this.cart).map((key) => this.cart[key].id)

        Object.keys(this.ekyc).forEach((key) => {
          if (!products.includes(key)) delete this.ekyc[key]
        })
        localStorage.setItem('postpaid-ekyc-data', JSON.stringify(this.ekyc))

        let privileges = localStorage.getItem('privilege-placeorder')
        if (privileges) {
          privileges = JSON.parse(privileges)
          privileges.forEach((privilege, index) => {
            if (!products.includes(privilege.product_id)) privileges.splice(index, 1)
          })
          localStorage.setItem('privilege-placeorder', JSON.stringify(privileges))
        }

        if (!this.isMnp) {
          localStorage.removeItem('mnp-reference-product-id')
          localStorage.removeItem('mnp-security-key')
        }
      },
      async fetchProfile () {
        try {
          if (this.truecard) return
          if (!this.profile) {
            const user = await this.$store.dispatch(FETCH_PROFILE)
            if (user.status_code !== 0) return
          }
          return await this.$store.dispatch(FETCH_TRUECARD)
        } catch {}
      },
      getPrivilege (id) {
        let privileges = localStorage.getItem('privilege-placeorder')
        if (privileges) {
          privileges = JSON.parse(privileges)
          if (!Array.isArray(privileges)) throw new Error('missing-privilege')
          for (const i in privileges) {
            const privilege = privileges[i]
            if (privilege.product_id === id) {
              const isValid = privilege.timestamp_expired > Date.now()
              if (!isValid) throw new Error('missing-privilege')
              return privilege
            }
          }
          throw new Error('missing-privilege')
        } else {
          throw new Error('missing-privilege')
        }
      },
      computePrivilege (cart) {
        try {
          const isDeviceBundle = ['device_bundle_new_customer', 'device_bundle_existing'].includes(cart.product_type)
          if (isDeviceBundle) {
            if (cart.is_mnp1step) return false
            return this.getPrivilege(cart.id)
          }
          if (cart.product_type === 'happy_digital') {
            for (const p in this.config.verify) {
              const product = this.config.verify[p]
              if (product.id === cart.id && (product.type === 'postpaid' || product.type === 'trueidtv')) {
                return this.getPrivilege(cart.id)
              }
            }
          }
          const cartPrivilege = this.$store.state.cart.cart.data.privilege_placeorder
          const privilege = cartPrivilege?.[cart.id]?.[cart.inventory.sku]
          if (privilege && privilege.timestamp_expired) {
            const isValid = privilege.timestamp_expired * 1000 > Date.now()
            if (!isValid) throw new Error('missing-privilege')
            return privilege
          }
          return false
        } catch {
          return { error: true }
        }
      },
      async computePostpaidData (cart) {
        try {
          const meta = cart.sim_meta[0]

          if (meta.ref_id) {
            return { meta }
          }

          if (meta.campaign_type === 'vhora') {
            const ekyc = this.ekyc[cart.id]
            if (!ekyc) return { error: true }
            meta.ekyc = ekyc
            const timestamp = window.localStorage.getItem('truestore-berfuntong-timestamp')
            if (!timestamp) return { error: true }
            if ((parseInt(timestamp) - Date.now()) >= 1800000) return { error: true }
            if (meta.berfuntong.package_code) return { meta }
            const ctoken = window.localStorage.getItem('truestore-berfuntong-ctoken')
            if (!ctoken) return { error: true }
            const vhoraImage = window.localStorage.getItem('truestore-berfuntong-vhora-image')
            if (!vhoraImage) return { error: true }
            return { meta }
          }
          const params = qs.stringify(
            { mobiles: meta.number },
            { arrayFormat: 'indices' }
          )
          const result = await this.$store.dispatch(CHECK_NUMBER, params)
          const record = result.record[0]
          const ekyc = this.ekyc[cart.id]
          if (!ekyc) return { error: true }
          meta.ekyc = ekyc
          if (record && record.hold_expired_date) {
            const current = new Date()
            const expired = new Date(record.hold_expired_date.replace(/-/g, '/'))
            if (current > expired) return { error: true }
            return { ...record, meta }
          } else {
            return { error: true }
          }
        } catch (e) {
          return { error: true }
        }
      },
      async computePostpaid (cart) {
        const family = this.config.verify.map((product) => {
          if (product.type === 'postpaid') return product.id
        }).filter(item => item)
        const isFamily = family.includes(cart.id)
        const isPrepaidList = (cart.product_sim && cart.product_sim.sim_type === 'prepaid') || (cart.sim_meta && cart.sim_meta[0] && cart.sim_meta[0].sim_type === 'prepaid') || this.config.prepaid_search.includes(cart.id)
        const isDeviceBundle = cart.product_type === 'sim' && cart.advance_payment && cart.contract
        const isSim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard'].includes(cart.product_type)
        if ((isFamily || isDeviceBundle || isSim) && !isPrepaidList) {
          return await this.computePostpaidData(cart, isDeviceBundle)
        }
        return false
      },
      async computeCart (cart) {
        let color = ''
        let capacity = ''
        const totalQuantity = parseFloat(cart.inventory.quantity)
        const productOptions = cart.inventory.options
          .map(item => item.values.title.th)
          .join(' - ')
        cart.inventory.options.forEach(option => {
          if (option.title.th === 'ความจุ') { capacity = option.values.title.th }
          if (option.title.th === 'สี') color = option.values.title.th
        })
        const postpaid = await this.computePostpaid(cart)
        const privilege = this.computePrivilege(cart)
        if (totalQuantity < 1) {
          const name = `${cart.title.th}${productOptions && ' - ' + productOptions}`
          this.cartErrors.push({
            th: `สินค้า '${name}' ถูกลบออกจากตะกร้าสินค้า เนื่องจากสินค้าหมด`,
            en: `The product '${name}' was removed from your cart because it is out of stock.`
          })
        }
        if (postpaid.error || privilege.error || totalQuantity < 1) {
          let reason
          if (totalQuantity < 1) reason = 'product out of stock'
          if (privilege.error) reason = 'missing privilege'
          if (postpaid.error) reason = 'missing sim meta'
          console.log(`Checkout Error: ${cart.title.th} (${cart.id} / ${cart.product_type}) removed from cart due to ${reason}.`)
          return {
            error: {
              product_id: cart.id,
              inventory_id: cart.inventory.id
            }
          }
        }
        let customCategory
        if (this.familySim.includes(cart.id) || [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'mnp'
        ].includes(cart.product_type)) {
          customCategory = 'SIM'
        }
        let campaign, freeShipping
        const promotion = cart.promotion && cart.promotion[0]
        if (promotion) {
          const campaigns = this.config.campaigns[promotion.id]
          if (campaigns) {
            campaign = promotion.id
            freeShipping = campaigns.options.shipping_free
          }
        }
        let discount = cart.discount || 0
        if ([
          'device_bundle_new_customer',
          'mnp_one_step',
          'device_mnp_bundle'
        ].includes(cart.product_type)) {
          if (cart.bundles && cart.bundles[0] && cart.bundles[0].benefit) {
            discount = cart.bundles[0].benefit.amount
            cart.inventory.compare_at_price = cart.inventory.price
          }
        }
        this.config.verify.forEach((item) => {
          if (item.id === cart.id) freeShipping = item.shipping_free
        })
        let id = `${cart.id}-${cart.inventory.id}-${cart.product_type}`
        if (cart.product_type === 'device_bundle_new_customer') {
          const bundle = cart.product_bundles[0]
          id = `${bundle.product_id}-${bundle.inventory_id}-bundle`
        }
        let error = false
        if (cart.product_type === 'truecard') {
          const grades = ['WHITE', 'GREEN', 'BLUE', 'RED', 'BLACK']
          const allowCheckout = cart.allow_checkout === false
          const additionalData = cart.true_card.additional_data
          const deliveryStatus = additionalData && additionalData.card_delivery_status === 'C'
          const firstTime = cart.true_card.first_time
          const grade = cart.true_card.grade.level
          const isBlack = grade === 'BLACK'
          if (this.truecard) {
            const userGrade = this.truecard.more_info.account_grade.level
            const gradeIndex = grades.indexOf(grade)
            const userGradeIndex = grades.indexOf(userGrade)
            if (userGradeIndex > gradeIndex) {
              error = true
              this.cartErrors.push({
                th: 'ขออภัยค่ะไม่สามารถทำรายการในออเดอร์นี้ได้ กรุณาลบสินค้าทรูการ์ดและทำรายการใหม่อีกครั้ง',
                en: 'Sorry, this order cannot be processed. Please remove True Card product and checkout again.'
              })
            }
          }
          if ((allowCheckout && deliveryStatus) || (allowCheckout && firstTime && isBlack)) {
            error = true
            this.cartErrors.push({
              th: 'ขออภัยค่ะไม่สามารถทำรายการในออเดอร์นี้ได้ เนื่องจากบัตรทรูการ์ดของท่านกำลังอยู่ในขณะจัดส่ง กรุณาลบสินค้าทรูการ์ดและทำรายการใหม่อีกครั้ง',
              en: 'Sorry, this order cannot be processed because your True Card is currently being delivered. Please remove True Card product and checkout again.'
            })
          }
        }
        const quantityLimit = cart.campaign
          ? cart.campaign.reduce((i, e) => {
            if (e.quantity_limit > 0) i = e.quantity_limit
            return i
          }, false)
          : false
        return {
          id: id.replace(/\s/g, ''),
          data: {
            advance_payment: cart.advance_payment,
            bundle: cart.bundles && cart.bundles[0],
            error: cart.is_unable_to_access_product_api || error,
            id: cart.id,
            image: cart.images[0].url,
            installments: cart.installments,
            inventory_id: cart.inventory.id,
            store_id: cart.store_id,
            campaign,
            campaigns: cart.campaign,
            capacity,
            contract: cart.contract,
            color,
            compare_at_price: cart.inventory.compare_at_price,
            custom_category: customCategory,
            discount,
            existing_campaign: cart.existing_campaign,
            free_shipping: freeShipping,
            is_addon: cart.is_addon,
            is_mnp1step: cart.is_mnp1step,
            options: productOptions,
            over_quantity: quantityLimit && cart.quantity > quantityLimit,
            quantity_limit: quantityLimit,
            points: cart.points,
            postpaid,
            price: cart.inventory.price,
            privilege,
            product_type: cart.product_type,
            quantity: cart.quantity > totalQuantity ? totalQuantity : (cart.quantity || 1),
            sim_meta: cart.sim_meta,
            sku: cart.inventory.sku,
            status: cart.inventory.status,
            title: cart.title.th,
            total_quantity: totalQuantity,
            true_card: cart.true_card,
            meta: cart.meta
          }
        }
      },
      setProgress (route) {
        this.step = ['cart', 'address', 'payment'].indexOf(route) + 1
      },
      clearLocalStorage () {
        window.localStorage.removeItem('cart-id')
        window.localStorage.removeItem('verify-form')
        window.localStorage.removeItem('verify-result')
        window.localStorage.removeItem('postpaid-ekyc')
        window.localStorage.removeItem('sim-meta')
        window.localStorage.removeItem('sim-meta-postpaid')
        window.localStorage.removeItem('postpaid-data')
        window.localStorage.removeItem('postpaid-sim-data')
        window.localStorage.removeItem('privilege-placeorder')
        window.localStorage.removeItem('family-black-verify-form')
        window.localStorage.removeItem('postpaid-ekyc-data')
        window.localStorage.removeItem('mnp-reference-product-id')
        window.localStorage.removeItem('mnp-security-key')
        window.localStorage.removeItem('truestore-berfuntong-refcode')
        window.localStorage.removeItem('truestore-berfuntong-ctoken')
        window.localStorage.removeItem('truestore-berfuntong-form')
        window.localStorage.removeItem('truestore-berfuntong-vhora-image')
        window.localStorage.removeItem('truestore-berfuntong-timestamp')
        window.localStorage.removeItem('vhora-form')
      },
      async fetchCart (e) {
        const paysmoothData = localStorage.getItem('paysmooth-data')
        this.cartErrors = []
        if (!e) {
          await this.$store.dispatch(FETCH_CART, {
            id: this.id,
            paysmoothToken: paysmoothData && JSON.parse(paysmoothData).paysmooth_token,
            ...this.payment
          })
        }
        this.cart = {}
        const cart = {}
        const removeProducts = []
        const overQuantity = []
        const store = this.$store.state.cart.cart
        if (store && store.message) {
          if (store.message.en === 'product not found in the cart') {
            this.clearLocalStorage()
            const query = Object.assign({}, this.$route.query)
            if (query.id) {
              delete query.id
              this.$router.replace({ query })
            }
          }
        }
        if (store && store.data && store.data.record) {
          const result = store.data.record
          for (const i in result) {
            if (result[i].products.length === 0) {
              this.clearLocalStorage()
              const query = Object.assign({}, this.$route.query)
              if (query.id) {
                delete query.id
                this.$router.replace({ query })
              }
            }
            for (const j in result[i].products) {
              const product = result[i].products[j]
              product.store_id = result[i].store.id
              const data = await this.computeCart(product)
              if (data.error) {
                removeProducts.push(data.error)
                break
              }
              if (data.data.over_quantity) {
                overQuantity.push(data.data)
                break
              }
              if (data.data.product_type === 'mnp') {
                if (!localStorage.getItem('mnp-security-key')) {
                  localStorage.removeItem('cart-id')
                  return location.replace('/online-store')
                }
              }
              cart[data.id] = data.data
              const isDeviceBundle = [
                'device_bundle_new_customer',
                'device_bundle_existing',
                'device_mnp_bundle',
                'pre_to_post',
                'mnp_one_step',
                'mnp_two_step'
              ].includes(product.product_type)
              if (isDeviceBundle && product.advance_payment && product.contract) {
                const isDeviceBundleNewCustomer = product.product_type === 'device_bundle_new_customer'
                const bundle = isDeviceBundleNewCustomer
                  ? product.product_bundles[0]
                  : {
                    product_id: product.id,
                    inventory_id: product.inventory_id
                  }
                const advancePayment = {
                  id: `z-${bundle.product_id}-${bundle.inventory_id}-zadvancepayment`,
                  data: {
                    id: `${product.id}-advancepayment`,
                    image: '/images/icons/cart-placeholder.png',
                    discount: 0,
                    price: product.advance_payment,
                    product_type: 'advancepayment',
                    quantity: 1,
                    status: true,
                    title: `${computeBalance(product.advance_payment)}฿ advance payment with ${product.contract} months contract`,
                    total_quantity: 1
                  }
                }
                cart[advancePayment.id] = advancePayment.data
              }
            }
            if (store.data.entertainment) {
              const ent = store.data.entertainment
              cart[`z-${ent.matcode}`] = {
                id: ent.matcode,
                image: ent.image_url,
                discount: 0,
                price: ent.price,
                product_type: 'entertainment',
                quantity: 1,
                status: true,
                title: ent.name,
                total_quantity: 1
              }
            }
          }
        }
        window.dispatchEvent(new CustomEvent('cart-updated', {
          detail: {
            cart: Object.keys(cart).reduce((result, item) => {
              return result + cart[item].quantity
            }, 0)
          }
        }))
        if (removeProducts.length > 0) {
          for (const i in removeProducts) {
            await this.$store.dispatch(DELETE_CART, {
              id: this.id,
              data: removeProducts[i]
            })
          }
          await this.fetchCart()
        } else if (overQuantity.length > 0) {
          for (const i in overQuantity) {
            await this.$store.dispatch(UPDATE_CART, {
              id: this.id,
              data: {
                product_id: overQuantity[i].id,
                inventory_id: overQuantity[i].inventory_id,
                quantity: overQuantity[i].quantity_limit
              }
            })
          }
          await this.fetchCart()
          overQuantity.forEach(e => {
            this.cartErrors.push({
              th: `สินค้า ${e.title} มีการจำกัดสิทธิ์การซื้อได้ ${e.quantity_limit} ชิ้นต่อการสั่งซื้อ`,
              en: `${e.quantity_limit} item(s) of ${e.title} is allowed per order`
            })
          })
        } else {
          if (this.cartErrors.length > 0 && this.$route.name !== 'cart') {
            this.$router.push('/cart')
          }
          const orderedCart = {}
          Object.keys(cart).sort().forEach((key) => {
            orderedCart[key] = cart[key]
          })
          this.cart = orderedCart
        }
        this.verifyLocalStorage()
      },
      async updateCart (data) {
        this.loading = true
        try {
          await this.$store.dispatch(UPDATE_CART, {
            id: this.id,
            data
          })
          await this.fetchCart()
          this.loading = false
        } catch {
          this.loading = false
        }
      },
      async deleteCart (data) {
        this.loading = true
        try {
          const results = await this.$store.dispatch(DELETE_CART, {
            id: this.id,
            data: {
              inventory_id: data.inventory_id,
              product_id: data.product_id
            }
          })
          if (data.ga) {
            const deleteItems = Object.keys(this.cart).map((key) => {
              const item = this.cart[key]
              return results.delete_related_product_list.some((e) => (
                e.product_id === item.id &&
                e.inventory_id.toString() === item.inventory_id.toString()
              ))
                ? item
                : false
            }).filter((e) => e)
            window.dataLayer.push({
              event: 'ecommerce_event',
              event_category: 'order_summary',
              event_action: 'remove_from_cart',
              event_label: deleteItems.map((e) => e.title).join('_'),
              ecommerce: {
                currencyCode: 'THB',
                remove: {
                  products: computeGtagProducts(deleteItems)
                }
              }
            })
          }
          await this.fetchCart()
          this.loading = false
        } catch {
          this.loading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkout-title {
    display: flex;
    justify-content: space-between;
    font-size: 38px;
    line-height: 40px;
    margin: 0 0 5px;
    padding-top: 12px;
    font-family: "TrueBold";
    color: #000000;
  }

  @media screen and (max-width: 1000px) {
    .checkout-title {
      display: block;
      padding: 24px 0 0px;
      font-size: 38px;
      line-height: 38px;
      margin-bottom: 0;
    }
  }
</style>
