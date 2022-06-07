import store from '@store'
import { computePrice } from '@utils/common'

export default {
  computed: {
    success () {
      return store.state.tracking.trackingSuccess
    },
    successData () {
      return this.success.body.data[0]
    },
    orderProducts () {
      const products = [...this.successData.order_product]
      products.forEach((product) => {
        const isSim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'mnp']
        if (isSim.includes(product.product_type) && product.sim_meta) {
          const meta = this.isString(product.sim_meta) ? JSON.parse(product.sim_meta) : product.sim_meta
          product.postpaid = { meta: meta[0] }
        }

        const isTruecard = product.product_type === 'truecard'
        if (isTruecard && product.meta && this.isString(product.meta)) product.meta = JSON.parse(product.meta)
      })

      if (this.successData.advance_payment && this.successData.contract) {
        products.push({
          image_url: '/images/icons/cart-placeholder.png',
          title: `${computePrice(this.successData.advance_payment)}฿ advance payment with ${this.successData.contract} months contract`,
          compare_at_price: 0,
          price: this.successData.advance_payment,
          quantity: 1,
          product_type: 'advancepayment'
        })
      }

      if (this.successData.entertainment) {
        products.push({
          image_url: this.successData.entertainment.image_url,
          title: this.successData.entertainment.name,
          hide_price: true,
          compare_at_price: 0,
          price: 0,
          quantity: 1,
          product_type: 'entertainment'
        })
      }
      return products.filter(product => product.id)
    },
    productTypes () {
      return this.orderProducts.map((e) => e.product_type)
    }
  },
  methods: {
    isString (str) {
      return typeof str === 'string' || str instanceof String
    },
    setPrint () {
      document.body.setAttribute('print', '')
    },
    removePrint () {
      document.body.removeAttribute('print')
    },
    checkFirstTimeQuery () {
      const query = Object.assign({}, this.$route.query)
      if (query.ft) {
        this.ft = true
        delete query.ft
        this.$router.replace({ query })
      }
    },
    firstTime () {
      this.clearLocalStorage()
      window.dispatchEvent(new CustomEvent('cart-updated', {
        detail: { cart: 0 }
      }))
      this.trackAnalytics()
    },
    clearLocalStorage () {
      window.localStorage.removeItem('agreement')
      window.localStorage.removeItem('cart-id')
      window.localStorage.removeItem('cart-v1')
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
      window.localStorage.removeItem('clm-upsell')
      window.localStorage.removeItem('truestore-campaign-weomni')
      window.localStorage.removeItem('truestore-berfuntong-timestamp')
      window.localStorage.removeItem('ekyc_hash')
      window.localStorage.removeItem('paysmooth-data')
      window.localStorage.removeItem('sim_family_info')
      window.localStorage.removeItem('company_code')
      window.localStorage.removeItem('proposition_amdoc')
      window.localStorage.removeItem('installments')
      window.localStorage.removeItem('iot-package')
    },
    print () {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'track_event',
        event_category: 'ThankYouPage',
        event_action: 'Print'
      })
      window.print()
    },
    trackAnalytics () {
      const billingTax = this.successData.order_address.billing_tax_no
      const billingBranch = this.successData.order_address.billing_branch
      const eventLabel = this.successData.order_product.map((e) => e.title).join('_')
      const products = this.orderProducts.map((e) => {
        const isSim = ['sim', 'postpaid', 'vlearn', 'family_black_truecard', 'mnp']
        const promo = e.order_product_promotion ? e.order_product_promotion[0] : ''
        const coupon = promo && promo.order_promotion.type === '6'
          ? {
              coupon: promo.order_promotion_code,
              metric3: (parseFloat(promo.discount) || 0).toFixed(2)
            }
          : {}

        let price = e.price
        let originalPrice = e.price
        if ([
          'device_bundle_new_customer',
          'device_bundle_existing',
          'pre_to_post',
          'device_mnp_bundle',
          'mnp_one_step',
          'mnp_two_step'
        ].includes(e.product_type)) {
          if (this.successData.advance_payment) {
            price -= parseInt(this.successData.advance_payment)
          }
          originalPrice = e.compare_at_price
        }

        return {
          name: e.title,
          id: e.product_id,
          price: parseFloat(price).toFixed(2),
          category: isSim.includes(e.product_type) ? 'SIM' : 'device',
          brand: '',
          variant: e.sku || '',
          quantity: e.quantity,
          dimension6: parseFloat(e.compare_at_price).toFixed(2),
          dimension7: parseFloat(originalPrice).toFixed(2),
          dimension8: '',
          dimension13: e.capacity || '',
          dimension14: e.status || true,
          ...this.getEcommerceProductDimensions(e),
          ...coupon
        }
      })
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'ecommerce_event',
        event_category: 'purchase_thankyou',
        event_action: 'purchase_success',
        event_label: eventLabel,
        request_tax_invoice: billingTax ? 'yes' : 'no',
        customer_type: billingTax ? (billingBranch === '-' ? 'individual' : 'cooperate') : '',
        ecommerce: {
          currencyCode: 'THB',
          purchase: {
            actionField: {
              id: this.successData.order_id,
              revenue: parseFloat(this.successData.price).toFixed(2),
              shipping: parseFloat(this.successData.shipping_price).toFixed(2),
              tax: '',
              coupon: ''
            },
            products
          }
        }
      })
    },
    getEcommerceProductDimensions (e) {
      const bundle = e.order_product_promotion?.[0]?.order_promotion
      switch (e.product_type) {
        case 'pre_to_post': {
          return {
            dimension30: 'Switch to Postpaid',
            dimension31: '',
            dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
            dimension33: `${e.title} เปลี่ยนเติมเงินเป็นรายเดือน พร้อมสมัครแพ็กเกจ ${this.successData?.existing_campaign.rc} ขึ้นไปชำระค่าบริการล่วงหน้า: ${(this.successData?.existing_campaign.advance_payment || 0).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment).toFixed(2)
          }
        }
        case 'device_mnp_bundle': {
          return {
            dimension30: 'Move to Us Online Exclusive',
            dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
            dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
            dimension33: `${bundle.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(this.successData.advance_payment).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment).toFixed(2)
          }
        }
        case 'mnp_one_step': {
          return {
            dimension30: 'Move to TrueMove H',
            dimension31: '',
            dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
            dimension33: `${bundle.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(this.successData.advance_payment).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment).toFixed(2)
          }
        }
        case 'device_bundle_prepaid': {
          return {
            dimension30: 'Device with Free Prepaid SIM',
            dimension31: '',
            dimension32: parseFloat(e.price).toFixed(2),
            dimension33: '',
            metric2: '0.00'
          }
        }
        case 'device_bundle_existing': {
          return {
            dimension30: 'Existing TrueMove H Postpaid',
            dimension31: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only',
            dimension32: parseFloat(e.price - parseFloat(this.successData.advance_payment || 0)).toFixed(2),
            dimension33: `${e.title} ลูกค้าปัจจุบัน พร้อมสมัครแพ็กเกจ ${this.successData?.existing_campaign.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${(this.successData?.existing_campaign.advance_payment || 0).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment || 0).toFixed(2)
          }
        }
        case 'mnp_two_step': {
          return {
            dimension30: 'Move to Us',
            dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
            dimension32: parseFloat(e.price - parseFloat(this.successData.advance_payment || 0)).toFixed(2),
            dimension33: `${e.title} ย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจ ${this.successData?.existing_campaign.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${(this.successData?.existing_campaign.advance_payment || 0).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment || 0).toFixed(2)
          }
        }
        case 'device_bundle_new_customer': {
          return {
            dimension30: 'New Customer',
            dimension31: '',
            dimension32: (parseFloat(e.price) - parseFloat(this.successData.advance_payment)).toFixed(2),
            dimension33: `${bundle.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(this.successData.advance_payment).toFixed(2)}฿`,
            metric2: parseFloat(this.successData.advance_payment).toFixed(2)
          }
        }
        case 'product': {
          return {
            dimension30: 'Handset only',
            dimension31: '',
            dimension32: '',
            dimension33: '',
            metric2: '0.00'
          }
        }
        case 'mnp':
        case 'sim': {
          let result = {}
          if (e.postpaid.meta) {
            result = {
              ...result,
              dimension9: e.postpaid.meta.sim_type === 'prepaid' ? 'Prepaid SIM' : 'Postpaid SIM',
              dimension10: '', // TODO: SIM Package
              dimension11: e.postpaid.meta.price_plan.name,
              dimension12: parseFloat(e.postpaid.meta.price_plan.price).toFixed(2),
              dimension22: '', // TODO: Package Download Speed
              dimension24: '', // TODO: Talk Time Allowance
              dimension25: '' // TODO: Mobile Internet Allowance
            }
          }
          if (e.postpaid.meta.campaign_type === 'vhora') {
            result = {
              ...result,
              dimension17: e.postpaid.meta.birth_date,
              dimension18: e.postpaid.meta.birth_time,
              dimension19: e.postpaid.meta.timezone,
              dimension20: e.postpaid.meta.berfuntong.group_title,
              dimension21: e.postpaid.meta.berfuntong.subgroup_title,
              dimension40: e.postpaid.meta.berfuntong.grade,
              dimension41: e.postpaid.meta.number
            }
          }
          return result
        }
        default: {
          return {}
        }
      }
    }
  }
}
