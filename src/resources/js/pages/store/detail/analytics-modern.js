export const AnalyticsMixins = {
  computed: {
    capacityText () {
      try {
        return this.options
          .find((option) => option.title === 'ความจุ').options
          .find((e) => e.id === this.selectedOptions.ความจุ).title.th
      } catch (e) {
        return false
      }
    },
    colorText () {
      try {
        return this.options
          .find((option) => option.title === 'สี').options
          .find((e) => e.id === this.selectedOptions.สี).title.th
      } catch (e) {
        return false
      }
    },
    promoAnalytics () {
      const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
      const packages = promotions.find((e) => e.id === this.promotion)?.packages
      switch (this.promotion) {
        case 'device_bundle_new_customer': {
          const selectedPackageObj = packages.find((e) => e.id === this.selectedPackage)
          return ({
            dimension30: 'New Customer',
            dimension31: '',
            dimension32: selectedPackageObj.price_after_discount_device_bundle_new_customer.toFixed(2),
            dimension33: `${selectedPackageObj.name} ชำระค่าบริการล่วงหน้า: ${selectedPackageObj.advance_payment}฿`,
            metric2: selectedPackageObj.advance_payment
          })
        }
        case 'mnp_bundling_existing': {
          const selectedPackageObj = packages.find((e) => e.id === this.selectedPackage)
          return ({
            dimension30: 'Move to Us',
            dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
            dimension32: (this.inventory.price - selectedPackageObj.discount).toFixed(2),
            dimension33: `${this.productInfo.title.th} ย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจ ${selectedPackageObj.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${selectedPackageObj.advance_payment.toFixed(2)}฿`,
            metric2: selectedPackageObj.advance_payment.toFixed(2)
          })
        }
        case 'mnp_bundling': {
          const selectedPackageObj = packages.find((e) => e.id === this.selectedPackage)
          return ({
            dimension30: 'Move to Us Online Exclusive',
            dimension31: '',
            dimension32: selectedPackageObj.price_after_discount_device_bundle_new_customer.toFixed(2),
            dimension33: `${selectedPackageObj.name} ชำระค่าบริการล่วงหน้า: ${selectedPackageObj.advance_payment}฿`,
            metric2: selectedPackageObj.advance_payment
          })
        }
        case 'mnp_bundling_one_step': {
          const selectedPackageObj = packages.find((e) => e.id === this.selectedPackage)
          return ({
            dimension30: 'Move to TrueMove H',
            dimension31: '',
            dimension32: selectedPackageObj.price_after_discount_device_bundle_new_customer.toFixed(2),
            dimension33: `${selectedPackageObj.name} ชำระค่าบริการล่วงหน้า: ${selectedPackageObj.advance_payment}฿`,
            metric2: selectedPackageObj.advance_payment
          })
        }
        case 'pre2post': {
          const selectedPackageObj = packages.find((e) => e.id === this.selectedPackage)
          return ({
            dimension30: 'Switch to Postpaid',
            dimension31: '',
            dimension32: (this.inventory.price - selectedPackageObj.discount).toFixed(2),
            dimension33: `${this.productInfo.title.th} เปลี่ยนเติมเงินเป็นรายเดือน พร้อมสมัครแพ็กเกจ ${selectedPackageObj.rc} ขึ้นไปชำระค่าบริการล่วงหน้า: ${selectedPackageObj.advance_payment}฿`,
            metric2: selectedPackageObj.advance_payment.toFixed(2)
          })
        }
        case 'prepaid_bundle': {
          return ({
            dimension30: 'Device with Free Prepaid SIM',
            metric2: '0.00'
          })
        }
        case 'device_bundle_existing': {
          const selectedPackages = packages.find((e) => e.campaign_type === this.selectedCampaignType).discount_list
          const selectedPackageObj = selectedPackages.find((e) => e.id === this.selectedPackage)
          const labels = {
            1: 'Only for True Move H Postpaid customers aged over 1 year',
            2: 'Only for True Move H Postpaid customers aged less then 3 months',
            3: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only'
          }
          const dimension32 = []
          const dimension33 = []
          const metric2 = []
          selectedPackages.forEach((e) => {
            if (this.selectedCampaignType === '3') {
              if (this.inventory.sku !== e.product_code) return
              if (selectedPackageObj !== e.id.toString()) return
              dimension32.push((this.inventory.price - e.discount).toFixed(2))
              dimension33.push(`${this.productInfo.title.th} ลูกค้าปัจจุบัน พร้อมสมัครแพ็กเกจ ${e.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${e.advance_payment.toFixed(2)}฿`)
              metric2.push(e.advance_payment.toFixed(2))
            } else {
              dimension32.push((this.inventory.price - e.discount).toFixed(2))
              dimension33.push(`${this.productInfo.title.th} ใช้หรือสมัครแพ็กเกจรายเดือน ${e.rc} ขึ้นไป`)
              metric2.push('0.00')
            }
          })
          return {
            dimension30: 'Existing TrueMove H Postpaid',
            dimension31: labels[this.selectedCampaignType],
            dimension32: dimension32.join(', '),
            dimension33: dimension33.join(', '),
            metric2: metric2.join(', ')
          }
        }
        case 'handset_only': {
          return ({
            dimension30: 'Handset only',
            dimension31: '',
            dimension32: '',
            dimension33: '',
            metric2: '0.00'
          })
        }
        default: {
          return {}
        }
      }
    }
  },
  methods: {
    trackAnalytics (isBuy) {
      const eventLabel = [
        this.productInfo.title.th,
        this.capacityText,
        this.colorText
      ].filter((e) => e).join('_')
      const eventAction = isBuy ? 'product_add_to_cart' : 'product_detail'
      const ecommerceAction = isBuy ? 'add' : 'detail'
      const data = {
        event: 'ecommerce_event',
        event_category: 'device_detail',
        event_action: eventAction,
        event_label: eventLabel,
        ecommerce: {
          currencyCode: 'THB',
          [ecommerceAction]: {
            actionField: { list: 'device' },
            products: [{
              name: this.productInfo.title.th,
              id: this.productInfo.id,
              price: parseFloat(this.inventory.price).toFixed(2),
              category: 'device',
              brand: '',
              variant: this.colorText || '',
              dimension6: parseFloat(this.inventory.compare_at_price).toFixed(2),
              dimension7: parseFloat(this.inventory.price).toFixed(2),
              dimension8: '',
              dimension13: this.capacityText || '',
              dimension14: this.inventory.quantity > 0,
              ...this.promoAnalytics
            }]
          }
        }
      }
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(data)
    }
  }
}
