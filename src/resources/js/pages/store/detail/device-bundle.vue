<template>
  <div
    class="product_detail"
    v-if="promotions.length > 0"
  >
    <div class="product_label">{{ Content.promotion[$i18n.locale] }}</div>
    <div class="device_bundle">
      <template v-for="(item, key) in promotions">
        <div
          class="promo"
          :key="key"
          :active="value === item.id"
          @click="changePromotion(item.id, item.type)"
        >
          <radio-element
            name="promotion"
            :value="item.id"
            :data-value="item.id"
            v-model="value"
          />
          <div class="promo-container">
            <div class="promo-title" v-html="item.title[$i18n.locale] || item.title.th" />
            <div class="promo-description" v-html="item.description" />
            <div class="promo-price" v-if="showDiscountOnTop(item.type)">
              <div class="promo-discount-on-top">{{ discountOnTopLabel[$i18n.locale] }}</div>
            </div>
            <div v-else-if="is5g">
              <div class="promo-price" >
                <div class="promo-price-label">{{ Content.fee_device[$i18n.locale] }}</div>
                <div class="promo-price-value">0 {{ Content.baht[$i18n.locale] }}</div>
              </div>
              <div class="promo-price" >
                <div class="promo-price-label">{{ Content.vat[$i18n.locale] }}</div>
                <div class="promo-price-value">{{ computeBalance(item.price) }} {{ Content.baht[$i18n.locale] }}</div>
              </div>
            </div>
            <div class="promo-price" v-else>
              <div class="promo-price-label">{{ Content.start_at[$i18n.locale] }}</div>
              <div class="promo-price-value">{{ computeBalance(item.price) }} ฿</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Radio from '@components/radio'
  import Content from './content.json'
  import { computeBalance } from '@utils/common'

  export default {
    components: {
      'radio-element': Radio
    },
    props: {
      demo: Boolean,
      value: String,
      products: Object,
      product: Object,
      normalPrice: Number,
      specialPrice: Number,
      promotion_type: String,
      is5g: Boolean
    },
    data: () => ({
      Content
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      config () {
        return this.$store.state.config.verifyConfig
      },
      promotions () {
        const promos = [...this.products.promotions]
        promos.forEach((promo) => {
          promo.price = this.price(promo)
          promo.description = this.promoDescription(promo.type)
        })
        if (this.showDeviceOnly(this.product.sku, this.product.id)) {
          promos.unshift({
            id: '',
            type: '',
            title: Content.device_only,
            price: this.deviceOnlyPrice(this.product.sku)
          })
        }
        // Note: Hack for pre2post
        promos.unshift({
          id: 'pre2post',
          type: 'pre2post',
          title: {
            th: 'เปลี่ยนเติมเงินเป็นรายเดือน',
            en: 'Switch to Postpaid'
          },
          price: this.price({ type: 'pre2post' })
        })
        if (this.prepaidBundle && this.prepaidBundle.length > 0) {
          promos.unshift({
            id: 'prepaid_bundle',
            type: 'prepaid_bundle',
            title: {
              th: 'เครื่องพร้อมซิมเติมเงิน',
              en: 'Device with Free Prepaid SIM'
            },
            description: this.prepaidBundle[0].proposition_data.api_output.term_short,
            price: this.price({ type: 'prepaid_bundle' })
          })
        }
        const sortedBy = {
          mnp_bundling: 0,
          mnp_bundling_existing: 1,
          mnp_bundling_one_step: 2,
          device_bundle_new_customer: 3,
          promotions: 4,
          multi_campaign: 5,
          pre2post: 6,
          prepaid_bundle: 7,
          '': 8
        }
        return promos
          .filter((e) => this.showPromo(e))
          .sort((a, b) => sortedBy[a.type] - sortedBy[b.type])
      },
      showPromo () {
        return (item) => {
          if (this.hideNonTyphoonPromo(item.type)) return false
          if (item.type === '') return true
          if (item.type === 'promotions') {
            return this.campaignStatus(item) && this.bundleExisting.length > 0
          }
          if (item.type === 'device_bundle_new_customer') {
            return this.bundles.length > 0
          }
          if (item.type === 'mnp_bundling') {
            return this.mnpBundles.length > 0
          }
          if (item.type === 'mnp_bundling_existing') {
            return this.mnpBundlesExisting.length > 0
          }
          if (item.type === 'mnp_bundling_one_step') {
            return this.mnpBundlesOneStep.length > 0
          }
          if (item.type === 'pre2post') {
            return this.pre2post.length > 0
          }
          if (item.type === 'prepaid_bundle') {
            return this.prepaidBundle.length > 0
          }
          if (this.products.multiCampaign) {
            return this.multiCampaign(item).length > 0
          }
          return this.campaignStatus(item) && this.bundles.length > 0
        }
      },
      hideNonTyphoonPromo () {
        return (type) => {
          const isTyphoonProduct = this.productInfo.is_typhoon_product
          return isTyphoonProduct && (type === '' || (type === 'multi_campaign' && this.products.multiCampaign))
        }
      },
      multiCampaign () {
        return (item) => {
          return this.products.bundles.filter(bundle => {
            const campaign = this.config.campaigns[bundle.id]
            return campaign && campaign.options[item.id]
          })
        }
      },
      bundleExisting () {
        const bundles = JSON.parse(JSON.stringify(this.products.bundle_existing))
        return bundles.reduce((i, e) => {
          if (e.campaign_type === '4' || e.campaign_type === '5') return i
          if (e.campaign_type !== '1') {
            e.discount_list = e.discount_list.filter((e) => e.product_code === this.product.sku)
          }
          if (e.discount_list.length > 0) i.push(e)
          return i
        }, [])
      },
      bundles () {
        return this.products.bundles.filter(bundle => {
          return bundle.inventory_id &&
            (this.product.id === bundle.inventory_id.toString()) &&
            bundle.campaign_sim_type !== 'mnp' &&
            bundle.sim_type !== 'prepaid' &&
            bundle.active &&
            bundle.enable
        })
      },
      prepaidBundle () {
        if (!this.products.bundles) return
        return this.products.bundles.filter(bundle => {
          if (!bundle.inventory_id) {
            return false
          }
          const item = bundle.inventories.find((e) => e.product_type === 'main_item')
          return item.inventory_id &&
            (this.product.id === item.inventory_id.toString()) &&
            bundle.sim_type === 'prepaid' &&
            bundle.active &&
            bundle.enable
        })
      },
      mnpBundles () {
        return this.products.bundles.filter(bundle => {
          return bundle.inventory_id &&
            (this.product.id === bundle.inventory_id.toString()) &&
            bundle.campaign_sim_type === 'mnp' &&
            bundle.campaign_mnp_type !== 'one_step' &&
            bundle.sim_type !== 'prepaid' &&
            bundle.active &&
            bundle.enable
        })
      },
      mnpBundlesOneStep () {
        return this.products.bundles.filter(bundle => {
          return bundle.inventory_id &&
            (this.product.id === bundle.inventory_id.toString()) &&
            bundle.campaign_sim_type === 'mnp' &&
            bundle.campaign_mnp_type === 'one_step' &&
            bundle.sim_type !== 'prepaid' &&
            bundle.active &&
            bundle.enable
        })
      },
      mnpBundlesExisting () {
        const bundles = JSON.parse(JSON.stringify(this.products.bundle_existing))
        const bundle = bundles.find((e) => e.campaign_type === '4')
        return bundle ? bundle.discount_list.filter((e) => e.product_code === this.product.sku) : []
      },
      pre2post () {
        const bundles = JSON.parse(JSON.stringify(this.products.bundle_existing))
        const bundle = bundles.find((e) => e.campaign_type === '5')
        return bundle ? bundle.discount_list.filter((e) => e.product_code === this.product.sku) : []
      },
      campaignStatus () {
        return (promo) => {
          const current = new Date()
          const start = new Date(promo.start.replace(/-/g, '/'))
          const end = new Date(promo.end.replace(/-/g, '/'))
          const dateActive = (current >= start && current <= end)
          return dateActive && promo.active
        }
      },
      price () {
        return (item) => {
          const key = 'price_after_discount_device_bundle_new_customer'
          if (item.type === 'promotions') {
            const discount = this.bundleExisting.map((e) => {
              return e.discount_list.reduce((max, p) => {
                if (p.discount > max) return p.discount
                return max
              }, e.discount_list[0].discount)
            })
            return this.specialPrice - Math.max(...discount)
          }
          if (item.type === 'multi_campaign') {
            if (this.multiCampaign(item).length === 0) return 0
            return this.multiCampaign(item).reduce((min, p) => {
              if (p.custom_price < min) return p.custom_price
              return min
            }, this.multiCampaign(item)[0].custom_price)
          }
          if (item.type === 'device_bundle_new_customer') {
            if (this.bundles.length === 0) return 0
            return this.bundles.reduce((min, p) => {
              if (p[key] < min) return p[key]
              return min
            }, this.bundles[0][key])
          }
          if (item.type === 'prepaid_bundle') {
            if (this.prepaidBundle.length === 0) return 0
            return this.prepaidBundle[0][key]
          }
          if (item.type === 'mnp_bundling') {
            if (this.mnpBundles.length === 0) return 0
            return this.mnpBundles.reduce((min, p) => {
              if (p[key] < min) return p[key]
              return min
            }, this.mnpBundles[0][key])
          }
          if (item.type === 'mnp_bundling_one_step') {
            if (this.mnpBundlesOneStep.length === 0) return 0
            return this.mnpBundlesOneStep.reduce((min, p) => {
              if (p[key] < min) return p[key]
              return min
            }, this.mnpBundlesOneStep[0][key])
          }
          if (item.type === 'mnp_bundling_existing') {
            if (this.mnpBundlesExisting.length === 0) return 0
            const val = this.mnpBundlesExisting.reduce((max, p) => {
              if (p.discount > max) return p.discount
              return max
            }, this.mnpBundlesExisting[0].discount)
            return this.normalPrice - val
          }
          // Note: Hack for pre2post
          if (item.type === 'pre2post') {
            if (this.pre2post.length === 0) return 0
            const val = this.pre2post.reduce((maxDiscount, p) => {
              return p.discount > maxDiscount ? p.discount : maxDiscount
            }, this.pre2post[0].discount)
            return this.normalPrice - val
          }
          return this.specialPrice - item.max_discount
        }
      },
      showDiscountOnTop () {
        return (type) => {
          if (type !== 'promotions' && type !== 'device_bundle_new_customer') return
          return this.productInfo?.additional?.['discount_on_top']
        }
      },
      discountOnTop () {
        return this.productInfo.additional.discount_on_top
      },
      discountOnTopLabel () {
        return {
          th: `ลดเพิ่ม ${computeBalance(this.discountOnTop)} ฿`,
          en: `Save ${computeBalance(this.discountOnTop)} ฿ on top`
        }
      },
      inventory () {
        return this.productInfo.inventories.find((e) => e.id.toString() === this.product.id)
      }
    },
    watch: {
      'product.sku' () {
        if (this.promotions.length <= 0) return
        const promo = this.promotions.find((e) => (this.value === e.type) || this.value === e.id)
        if (promo) return
        const item = this.promotions[0]
        return this.$emit('input', item.type === 'promotions' ? item.id : item.type)
      }
    },
    mounted () {
      if (this.promotions.length > 0) {
        this.getPromotionType(this.promotions[0].type)
      }
      switch (this.$route.query.selected_campaign || this.$route.query.usecase) {
        case 'switch_to_postpaid': {
          if (this.pre2post.length > 0) return this.$emit('input', 'pre2post')
          break
        }
        case 'prepaid_bundle': {
          if (this.prepaidBundle.length > 0) return this.$emit('input', 'prepaid_bundle')
          break
        }
        case 'mnp_bundling': {
          if (this.mnpBundles.length > 0) return this.$emit('input', 'mnp_bundling')
          break
        }
        case 'mnp_bundling_existing': {
          if (this.mnpBundlesExisting.length > 0) return this.$emit('input', 'mnp_bundling_existing')
          break
        }
        case 'mnp_bundling_one_step': {
          if (this.mnpBundlesOneStep.length > 0) return this.$emit('input', 'mnp_bundling_one_step')
          break
        }
        case 'device_only': {
          return this.$emit('input', '')
        }
        case 'new_number':
        case '1': {
          const type = 'device_bundle_new_customer'
          const exist = this.promotions.find(e => e.type === type)
          if (exist) return this.$emit('input', type)
          break
        }
        case 'existing_postpaid':
        case '2': {
          const type = 'promotions'
          const exist = this.promotions.find(e => e.type === type)
          if (exist) return this.$emit('input', exist.id)
          break
        }
        case '4': {
          return this.$emit('input', '')
        }
        case '5': {
          const type = 'promotions'
          const exist = this.promotions.find(e => e.type === type)
          if (exist) return this.$emit('input', exist.id)
          break
        }
      }
      const id = this.promotions?.[0]?.id
      if (id) this.$emit('input', id)
    },
    methods: {
      computeBalance,
      getPromotionType (promotionType) {
        this.$emit('promotion_type', promotionType)
      },
      promoDescription (type) {
        const specialCampaign = this.productInfo.special_campaign
        if (!specialCampaign) return ''
        const campaignType = {
          device_bundle_new_customer: 'new-customer',
          mnp_bundling: 'mnp-bundle',
          mnp_bundling_existing: 'mnp-bundle-existing'
        }
        const description = specialCampaign.find(e => e.type === campaignType[type])
        return description ? description.html : ''
      },
      deviceOnlyPrice (productSku) {
        if (this.products.device_only && productSku) {
          const discount = this.products.device_only[productSku]
          if (discount) return this.specialPrice - discount
        }
        return this.specialPrice
      },
      showDeviceOnly () {
        if (this.inventory.is_hide_device_only) return false
        const notDeviceBundle = !['device_bundle_existing', 'device_bundle_new_customer'].includes(this.products.product_type)
        if (this.products.multiCampaign && notDeviceBundle) return this.productInfo.promotion.length > 1
        return true
      },
      changePromotion (e, promotionType) {
        this.getPromotionType(promotionType)
        if (this.value === e) return
        this.$emit('input', e)
        if (!this.demo) setTimeout(() => this.$parent.setAnalytics(), 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product_detail {
    display: flex;
    margin-bottom: 28px;

    .product_label {
      flex: 1;
      padding-right: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      color: #000;
      min-width: 100px;
      align-items: flex-start;
    }
  }
  .device_bundle {
    display: flex;
    padding-left: 8px;
    flex: 3;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 10px;

    .promo {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px;
      display: flex;
      color: #000;
      cursor: pointer;
      height: 100%;

      &[active] {
        border-color: #ff0000;
      }

      .input {
        pointer-events: none;
      }

      .promo-container {
        flex: 1;
        margin-left: 6px;
        display: flex;
        flex-direction: column;

        .promo-title {
          font-size: 22px;
          font-family: "TrueBold";
          line-height: 21px;
          word-break: break-word;

          &::v-deep .red {
            color: #ff0000;
          }
        }

        .promo-description::v-deep {
          flex: 1;
          color: #464646;
          font-size: 22px;
          line-height: 20px;
          margin-bottom: 8px;

          ul {
            margin: 4px 0;
            padding-left: 16px;

            li {
              margin-bottom: 4px;
            }

            img {
              height: 22px;
              vertical-align: top;
            }
          }
        }

        .promo-price {
          display: flex;
          font-size: 20px;
          margin-top: 2px;

          .promo-price-label {
            flex: 1;
          }

          .promo-price-value {
            font-size: 30px;
            font-family: "TrueBold";
            color: #ff0000;
            text-align: right;
          }

          .promo-discount-on-top {
            color: #f00;
            font-size: 24px;
            font-family: 'TrueBold';
          }
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .product_detail .product_label {
      justify-content: flex-start;
      text-align: left;
    }
  }
  @media screen and (max-width: 480px) {
    .product_detail .product_label {
      min-width: 86px;
    }
    .device_bundle {
      grid-template-columns: auto;
    }
  }
</style>
