export const PromoMixins = {
  computed: {
    specialPromotions () {
      if (!this.productInfo) return []
      const promotions = [{
        id: 'device_bundle_new_customer',
        url: 'new_number',
        title: {
          th: 'ลูกค้าใหม่',
          en: 'New Customer'
        },
        packages: this.deviceBundleNewCustomer,
        min_price_key: 'price_after_discount_device_bundle_new_customer'
      }, {
        id: 'device_bundle_existing',
        url: 'existing_postpaid',
        title: {
          th: 'ลูกค้าปัจจุบันทรูมูฟ เอช',
          en: 'Existing TrueMove H Postpaid'
        },
        packages: this.deviceBundleExisting,
        min_price_key: 'discount'
      }, {
        id: 'pre2post',
        url: 'switch_to_postpaid',
        title: {
          th: 'เปลี่ยนเติมเงินเป็นรายเดือน',
          en: 'Switch to Postpaid'
        },
        packages: this.pre2post,
        min_price_key: 'discount'
      }, {
        id: 'mnp_bundling_existing',
        url: 'mnp_bundling_existing',
        title: {
          th: 'ย้ายค่าย ออนไลน์เท่านั้น',
          en: 'Move to us'
        },
        packages: this.mnpBundlesExisting,
        min_price_key: 'discount'
      }, {
        id: 'mnp_bundling',
        url: 'mnp_bundling',
        title: {
          th: 'ย้ายค่ายเบอร์เดิม พร้อมเปิดเบอร์ใหม่',
          en: 'Move to us (MNP Share Plan)'
        },
        packages: this.mnpBundles,
        min_price_key: 'price_after_discount_device_bundle_new_customer'
      }]
      const filteredPromotion = this.isPaysmooth ? promotions.filter(p => { return this.paysmoothPromotion.includes(p.id) }) : promotions
      return filteredPromotion
        .map((e) => {
          let isFreeDeviceSpecialPromotions = false
          if (!e.packages) return {}
          if (e.id === 'device_bundle_existing') {
            const packages = e.packages
              .map((e) => ({
                ...e,
                discount_list: e.discount_list.filter((e) => e.is_trueblack)
              }))
              .filter((e) => e.discount_list.length > 0)
            if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
              packages.forEach((item) => {
                  const discountList = item.discount_list.filter((e) => (e.meta == 'campaign_redeem_free_device' || e.meta == 'campaign_free_device'))
                  if (discountList.length > 0) {
                      isFreeDeviceSpecialPromotions = true
                  }
              })
            }
            return {
              ...e,
              packages,
              min_price: this.getDeviceBundleExistingMinPrice(packages),
              haveFreeDevice: isFreeDeviceSpecialPromotions
            }
          }
          const packages = e.packages
            .filter((e) => e.is_trueblack)
            .sort((a, b) => {
              return e.min_price_key === 'discount'
                ? b[e.min_price_key] - a[e.min_price_key]
                : a[e.min_price_key] - b[e.min_price_key]
            })

          if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
            const discountList = packages.filter((e) => (e.meta == 'campaign_redeem_free_device' || e.privilege_type == 'campaign_redeem_free_device' || e.meta == 'campaign_free_device' || e.privilege_type == 'campaign_free_device'))
            if (discountList.length > 0) {
                isFreeDeviceSpecialPromotions = true
            }
          }
          return {
            ...e,
            packages,
            min_price: this.min_price || this.getMinPrice(packages, e.min_price_key),
            haveFreeDevice: isFreeDeviceSpecialPromotions
          }
        })
        .filter((e) => {
          return e?.packages?.length > 0
        })
    },
    promotions () {
      if (!this.productInfo) return []
      const promotions = [{
        id: 'device_bundle_new_customer',
        url: 'new_number',
        title: {
          th: 'ลูกค้าใหม่',
          en: 'New Customer'
        },
        packages: this.deviceBundleNewCustomer,
        min_price_key: 'price_after_discount_device_bundle_new_customer'
      }, {
        id: 'device_bundle_existing',
        url: 'existing_postpaid',
        title: {
          th: 'ลูกค้าปัจจุบันทรูมูฟ เอช',
          en: 'Existing TrueMove H Postpaid'
        },
        packages: this.deviceBundleExisting,
        min_price_key: 'discount'
      }, {
        id: 'pre2post',
        url: 'switch_to_postpaid',
        title: {
          th: 'เปลี่ยนเติมเงินเป็นรายเดือน',
          en: 'Switch to Postpaid'
        },
        packages: this.pre2post,
        min_price_key: 'discount'
      }, {
        id: 'mnp_bundling_existing',
        url: 'mnp_bundling_existing',
        title: {
          th: 'ย้ายค่าย ออนไลน์เท่านั้น',
          en: 'Move to us'
        },
        packages: this.mnpBundlesExisting,
        min_price_key: 'discount'
      }, {
        id: 'mnp_bundling',
        url: 'mnp_bundling',
        title: {
          th: 'ย้ายค่ายเบอร์เดิม พร้อมเปิดเบอร์ใหม่',
          en: 'Move to us (MNP Share Plan)'
        },
        packages: this.mnpBundles,
        min_price_key: 'price_after_discount_device_bundle_new_customer'
      }, {
        id: 'prepaid_bundle',
        url: 'prepaid_bundle',
        title: {
          th: 'เครื่องพร้อมซิมเติมเงิน',
          en: 'Device with Free Prepaid SIM'
        },
        packages: this.prepaidBundle,
        min_price_key: 'price_after_discount_device_bundle_new_customer'
      }]

      // check multi campaign
      if (this.productInfo.promotion && this.productInfo.promotion.length > 0) {
        const promoMatch = this.productInfo.promotion.find(e => this.config.campaigns[e.id])
        const campaign = this.config.campaigns[promoMatch?.id]
        if (promoMatch && campaign?.options?.truemoveh) {
          promotions.push({
            id: 'truemoveh',
            url: 'multi_campaign_truemoveh',
            title: {
              th: 'ลูกค้าปัจจุบัน ทรูมูฟ เอช',
              en: 'Existing TrueMove H'
            },
            type: 'multi_campaign',
            min_price: promoMatch.custom_price,
            promoId: promoMatch.id
          })
        }
        if (promoMatch && campaign?.options?.trueonline) {
          promotions.push({
            id: 'trueonline',
            url: 'multi_campaign_trueonline',
            title: {
              th: 'ลูกค้า ทรูออนไลน์',
              en: 'TrueOnline Customer'
            },
            type: 'multi_campaign',
            min_price: promoMatch.custom_price,
            promoId: promoMatch.id
          })
        }
      }

      if (this.productInfo?.no_free_shipping_products && this.productInfo?.no_free_shipping_products === true) {
        promotions.push({
          id: 'handset_only',
          url: 'device_only',
          title: {
            th: 'สินค้า',
            en: 'Product'
          },
          min_price: this.inventory.price - (this.productInfo?.device_only?.[this.inventory.sku] || 0)
        })
      } else if (this.productInfo.product_type === 'postpaid' || this.productInfo.product_type === 'sim' || this.productInfo.product_type === 'vlearn') {
        if (this.productInfo.product_sim && Array.isArray(this.productInfo.product_sim.sim_source_type)) {
          this.productInfo.product_sim.sim_source_type.forEach((simSourceType) => {
            if (simSourceType.toString() === 'physical-sim') {
              promotions.push({
                id: 'physical-sim-campaign',
                url: 'physical-sim-campaign',
                title: {
                  th: 'ซิมแข็ง',
                  en: 'physical-sim'
                },
                min_price: this.inventory.price
              })
            } else if (simSourceType.toString() === 'e-sim') {
              promotions.push({
                id: 'e-sim-campaign',
                url: 'e-sim-campaign',
                title: {
                  th: 'eSIM',
                  en: 'eSIM'
                },
                min_price: this.inventory.price
              })
            }
          })
        }
      } else {
        promotions.push({
          id: 'handset_only',
          url: 'device_only',
          title: {
            th: 'เครื่องเปล่า',
            en: 'Handset only'
          },
          min_price: this.inventory.price - (this.productInfo?.device_only?.[this.inventory.sku] || 0)
        })
      }
      const filteredPromotion = this.isPaysmooth ? promotions.filter(p => this.paysmoothPromotion.includes(p.id)) : promotions
      return filteredPromotion
        .map((e) => {
          let isFreeDevicePromotions = false
          if (e.id === 'handset_only') {
              if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
                  e.haveFreeDevice = true
              }
          }
          if (!e.packages) return e
          if (e.id === 'prepaid_bundle') {
            const packages = e.packages
            if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
              const discountList = packages.filter((e) => (e.meta == 'campaign_redeem_free_device' || e.privilege_type == 'campaign_redeem_free_device' || e.meta == 'campaign_free_device' || e.privilege_type == 'campaign_free_device'))
              if (discountList.length > 0) {
                  isFreeDevicePromotions = true
              }
            }
            return {
              ...e,
              packages,
              min_price: this.min_price || this.getMinPrice(packages, e.min_price_key),
              description: packages?.[0]?.proposition_data?.api_output?.term_short || false,
              haveFreeDevice: isFreeDevicePromotions
            }
          }
          if (e.id === 'device_bundle_existing') {
            const packages = e.packages
              .map((e) => ({
                ...e,
                discount_list: e.discount_list.filter((e) => e.is_trueblack !== true),
              }))
              .filter((e) => e.discount_list.length > 0)
            if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
                packages.forEach((item) => {
                    const discountList = item.discount_list.filter((e) => e.meta == 'campaign_redeem_free_device' || e.meta == 'campaign_free_device')
                    if (discountList.length > 0) {
                        isFreeDevicePromotions = true
                    }
                })
            }
            return {
              ...e,
              packages,
              min_price: this.getDeviceBundleExistingMinPrice(packages),
              haveFreeDevice: isFreeDevicePromotions
            }
          }
          const packages = e.packages
            .filter((e) => e.is_trueblack !== true)
            .sort((a, b) => {
              return e.min_price_key === 'discount'
                ? b[e.min_price_key] - a[e.min_price_key]
                : a[e.min_price_key] - b[e.min_price_key]
            })

          if (typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[e.id] !== 'undefined') {
              const discountList = packages.filter((e) => (e.meta == 'campaign_redeem_free_device' || e.privilege_type == 'campaign_redeem_free_device' || e.meta == 'campaign_free_device' || e.privilege_type == 'campaign_free_device'))
              if (discountList.length > 0) {
                  isFreeDevicePromotions = true
              }
          }
          return {
            ...e,
            packages,
            min_price: this.min_price || this.getMinPrice(packages, e.min_price_key),
            haveFreeDevice: isFreeDevicePromotions
          }
        })
        .filter((e) => {
          if (e.id === 'physical-sim-campaign' || e.id === 'e-sim-campaign') return true
          if (e.id === 'handset_only' && !this.inventory.is_hide_device_only) return true
          if (e.type === 'multi_campaign') return true
          return e?.packages?.length > 0
        })
    },
    packages () {
      if (this.productInfo.product_type === 'mnp') return this.productInfo.mnp_package
      if (this.promotion === 'prepaid_bundle') return
      const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
      const packages = promotions.find((e) => e.id === this.promotion)?.packages
      const paysmoothPackages = (this.isPaysmooth && packages) && this.getPaysmoothPackages(packages)
      return this.isPaysmooth && paysmoothPackages ? paysmoothPackages.length && paysmoothPackages : packages
    },
    mnpBundles () {
      if (!this.productInfo.bundles) return
      const bundles = JSON.parse(JSON.stringify(this.productInfo.bundles))
      return bundles.filter(bundle => {
        const inventories = this.bundlesInventories[bundle.id]
        return inventories.includes(this.inventory.id.toString()) &&
          bundle.campaign_sim_type === 'mnp' &&
          bundle.campaign_mnp_type !== 'one_step' &&
          bundle.sim_type !== 'prepaid' &&
          bundle.active &&
          bundle.enable &&
          Object.prototype.hasOwnProperty.call(bundle, 'price_after_discount_device_bundle_new_customer')
      })
    },
    mnpBundlesExisting () {
      if (!this.productInfo.bundle_existing) return
      const bundlesExisting = JSON.parse(JSON.stringify(this.productInfo.bundle_existing))
      const bundle = bundlesExisting.find((e) => e.campaign_type === '4')
      return bundle ? bundle.discount_list.filter((e) => e.product_code === this.inventory.sku) : []
    },
    mnpBundlesOneStep () {
      if (!this.productInfo.bundles) return
      const bundles = JSON.parse(JSON.stringify(this.productInfo.bundles))
      return bundles.filter(bundle => {
        const inventories = this.bundlesInventories[bundle.id]
        return inventories.includes(this.inventory.id.toString()) &&
          bundle.campaign_sim_type === 'mnp' &&
          bundle.campaign_mnp_type === 'one_step' &&
          bundle.sim_type !== 'prepaid' &&
          bundle.active &&
          bundle.enable
      })
    },
    deviceBundleNewCustomer () {
      if (!this.productInfo.bundles) return
      const bundles = JSON.parse(JSON.stringify(this.productInfo.bundles))
      return bundles.filter(bundle => {
        const inventories = this.bundlesInventories[bundle.id]
        this.inventory_id = this.inventory.id
        return inventories.includes(this.inventory.id.toString()) &&
          bundle.campaign_sim_type !== 'mnp' &&
          bundle.sim_type !== 'prepaid' &&
          bundle.active &&
          bundle.enable &&
          bundle.is_enable_bundle_device_bundle_new_customer !== false &&
          Object.prototype.hasOwnProperty.call(bundle, 'price_after_discount_device_bundle_new_customer')
      })
    },
    deviceBundleExisting () {
      if (!this.productInfo.bundle_existing) return
      const bundlesExisting = JSON.parse(JSON.stringify(this.productInfo.bundle_existing))
      const bundleExisting = bundlesExisting.reduce((i, e) => {
        if (e.campaign_type === '4') return i
        if (e.campaign_type === '5') return i
        if (e.campaign_type === '3') {
          e.discount_list.forEach((d) => {
            if (d.product_code !== this.inventory.sku) return
            const aging = ['', '0', 0].includes(d.aging) ? '0' : d.aging
            const dd = i.findIndex((b) => b.campaign_type === '3' && b.aging === aging)
            if (dd >= 0) {
              i[dd].discount_list.push(d)
              i[dd].discount_list.sort((a, b) => a.discount < b.discount ? 1 : -1)
              return
            }
            i.push({
              product_id: e.product_id,
              campaign_type: e.campaign_type,
              aging,
              discount_list: [d]
            })
          })
          return i
        }
        e.discount_list.sort((a, b) => a.discount < b.discount ? 1 : -1)
        e.discount_list = e.discount_list.filter((e) => e.product_code === this.inventory.sku)
        if (e.discount_list.length > 0) i.push(e)
        return i
      }, [])
      return bundleExisting
        .sort((a, b) => a.campaign_type < b.campaign_type ? 1 : -1)
        .sort((a, b) => !a.aging ? 1 : (parseInt(a.aging) < parseInt(b.aging) ? 1 : -1))
    },
    pre2post () {
      if (!this.productInfo.bundle_existing) return
      const bundlesExisting = JSON.parse(JSON.stringify(this.productInfo.bundle_existing))
      const bundle = bundlesExisting.find((e) => e.campaign_type === '5')
      return bundle ? bundle.discount_list.filter((e) => e.product_code === this.inventory.sku) : []
    },
    prepaidBundle () {
      if (!this.productInfo.bundles) return
      const bundles = JSON.parse(JSON.stringify(this.productInfo.bundles))
      return bundles.filter(bundle => {
        const inventories = this.bundlesInventories[bundle.id]
        return inventories.includes(this.inventory.id.toString()) &&
          bundle.sim_type === 'prepaid' &&
          bundle.active &&
          bundle.enable &&
          Object.prototype.hasOwnProperty.call(bundle, 'price_after_discount_device_bundle_new_customer')
      })
    },
    bundlesInventories () {
      if (!this.productInfo.bundles) return {}
      const bundles = JSON.parse(JSON.stringify(this.productInfo.bundles))
      const bundlesInventories = {}
      bundles.forEach(bundle => {
        if (!bundlesInventories[bundle.id]) {
          bundlesInventories[bundle.id] = []
        }
        if (!bundle.inventories) return
        bundle.inventories.forEach(inv => {
          if (inv.product_type === 'main_item') {
            bundlesInventories[bundle.id].push(inv.inventory_id.toString())
          }
        })
      })
      return bundlesInventories
    }
  },
  methods: {
    getMinPrice (packages, key) {
      const minPrice = packages.length > 0 && packages.reduce((prev, curr) => {
        if (key === 'discount') return prev[key] > curr[key] ? prev : curr
        return prev[key] < curr[key] ? prev : curr
      })
      if (key === 'discount') return minPrice ? (this.inventory.price - minPrice[key]) : 0
      return minPrice?.[key] || 0
    },
    getDeviceBundleExistingMinPrice (bundleExisting) {
      const minPrice = bundleExisting.map((e) => {
        return e.discount_list.reduce((max, p) => {
          if (p.discount > max) return p.discount
          return max
        }, e.discount_list[0].discount)
      })
      return this.inventory.price - Math.max(...minPrice) || 0
    },
    getPaysmoothPackages (packages) {
      if (this.promotion === 'device_bundle_new_customer') {
        return packages.filter(item => (item.down_payment_rate === this.downrate.toString()))
      } else if (this.promotion === 'mnp_bundling_existing' || this.promotion === 'pre2post') {
        return packages.filter(item => (item.bundle_campaign_student_loan.down_payment_rate === this.downrate.toString()))
      } else if (this.promotion === 'device_bundle_existing') {
        const filterPaysmooth = (camp) => {
          const discountList = JSON.parse(JSON.stringify(camp))

          const campaigns = discountList.discount_list.filter(item => item.bundle_campaign_student_loan.down_payment_rate === this.downrate?.toString() || 0)
          discountList.discount_list = campaigns
          return discountList
        }
        return packages.filter(item => ['3', '4', '5'].includes(item.campaign_type)).reduce((prev, cur) => { const filtered = filterPaysmooth(cur); return filtered.discount_list.length ? [...prev, filtered] : prev }, [])
      } else {
        return []
      }
    }
  }
}
