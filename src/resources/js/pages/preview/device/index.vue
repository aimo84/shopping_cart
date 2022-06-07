<template>
  <div>
    <loading-element class="loading-container" v-if="loading" />
    <template v-else>
    <banner-element />
    <div class="store_container">
      <div class="product_container">
        <div class="product_header">
          <div class="arw-orange-sm-right sprite-icons" />
          <div class="product_header_content">
            <div class="title">{{ Content.selectmodel[$i18n.locale] }}</div>
            <div class="product_info">
              <span class="product_name">
                {{ products.title }} <span
                    v-if="product.options.ความจุ"
                  >- {{ products.options.ความจุ[product.options.ความจุ].name }} / </span>
              </span>
              <span
                class="product_color"
                v-if="product.options.สี"
              >{{ Content.สี[$i18n.locale] }} {{ products.options.สี[product.options.สี].name }}</span>
            </div>
          </div>
        </div>
        <div class="product_content">
            <image-element
              ref="imageEle"
              :images="images"
            />
            <div class="product_details">
              <div class="product_details_container">
                <div class="product_detail">
                  <div class="product_label">{{ Content.modelname[$i18n.locale] }}</div>
                  <div class="product_option title">
                    <template
                      v-if="products.product_type === 'truecard' && user && truecard"
                    >{{ truecard.product_detail.name }}</template>
                    <template v-else>{{ products.title }}</template>
                  </div>
                </div>
                <!-- benefit on top -->
                <div class="product_detail">
                  <div class="product_label"></div>
                  <div class="product_option">
                    <template v-if="product.product_type === 'mnp'">
                      <clm-benefit-element
                      type="demo"
                      :campCode="campCode"
                      :product-id="products.id"
                    ></clm-benefit-element>
                    </template>
                    <template v-else>
                      <clm-benefit-element
                        type="demo"
                        v-model="subModule"
                        :product-type="products.product_type"
                        :product-id="products.id"
                        :promotion="promotion"
                        :matcode="$route.query.matcode"
                        :promotion_type="promotion_type"
                        :campCode="campCode"
                      ></clm-benefit-element>
                    </template>
                  </div>
                </div>
                <!-- end benefit on top -->
                <!-- product_type: "device_bundle_new_customer" -->
                <template v-if="products.product_type !== 'truecard'">
                  <div
                    class="product_detail"
                    v-for="(options, key) in products.options"
                    :key="key"
                  >
                    <div class="product_label">{{ Content[key] ? Content[key][$i18n.locale] : key }}</div>
                    <div class="product_option grid">
                      <div
                        class="option"
                        :class="[option.id === product.options[key] ? 'selected' : '']"
                        v-for="option in sortedOptions(options)"
                        :key="option.id"
                        @click="changeProduct(key, option.id)"
                      >
                        {{ option.name }}
                      </div>
                    </div>
                  </div>
                </template>
                <!-- product_type: "truecard" -->
                <template v-else>
                  <div class="product_detail">
                    <div class="product_label"></div>
                    <div class="product_option">
                      <div class="truecard_msg">{{ Content.truecard_msg[$i18n.locale] }}</div>
                    </div>
                  </div>
                </template>
                <div class="product_detail" v-if="product.id && normalPrice !== 1 && normalPrice !== specialPrice">
                  <div class="product_label">{{ Content.regularprice[$i18n.locale] }}</div>
                  <div class="product_option price">
                    <span class="line-through">{{ computeBalance(normalPrice) }}</span>฿
                  </div>
                </div>
                <div class="product_detail special_price" v-if="product.id">
                  <div class="product_label">
                    <template v-if="showDiscountOnTop">{{ Content.regularprice[$i18n.locale] }}</template>
                    <template v-else>{{ Content.specialprice[$i18n.locale] }}</template>
                  </div>
                  <div class="product_option status" v-if="specialPrice === '0'">
                    <span class="red">{{ Content.free[$i18n.locale] }} *</span>
                  </div>
                  <div class="product_option price" v-else>
                    <span class="red">{{ computeBalance(actualSpecialPrice) }}</span>฿
                  </div>
                </div>
                <!-- store detail line 103 to 151 -->
                <div class="product_detail" v-if="product.id && status">
                  <div class="product_label">{{ Content.status[$i18n.locale] }}</div>
                  <div class="product_option status">
                    <span :class="status.status ? 'green' : 'red'">{{ status.value }}</span>
                  </div>
                </div>
                <div class="product_detail" v-else>
                  <div class="product_label">{{ Content.status[$i18n.locale] }}</div>
                  <div class="product_option status">
                    <span class="red">{{ Content.outofstock[$i18n.locale] }}</span>
                  </div>
                </div>
                <!-- store detail line 164 to 169 payLater -->
                <!-- mnp case -->
                <template v-if="product.product_type === 'mnp'">
                  <template v-if="productInfo.sim_data.sim_type === 'postpaid'">
                    <div class="product_detail mnp">
                      <div class="product_label align-flex-start">{{ Content.mnp_select_package[$i18n.locale] }}</div>
                      <div class="product_option">
                        <mnp-element :disabled="product.id && status.status" />
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="product_detail mnp">
                      <div class="product_label" />
                      <div class="product_option">
                        <!-- store detail line 183 to 209 -->
                      </div>
                    </div>
                  </template>
                </template>
                <!-- end nmp case -->
                <template v-else>
                  <device-bundle
                    v-if="['device_bundle_existing', 'device_bundle_new_customer'].includes(product.product_type) || products.multiCampaign"
                    v-model="promotion"
                    :promotion_type="promotion_type"
                    @promotion_type="promotion_type = $event"
                    :products="products"
                    :product="product"
                    :normal-price="normalPrice"
                    :special-price="specialPrice"
                    :demo="demo"
                  />
                  <div
                    class="product_detail"
                    v-if="
                      isDeviceBundleNewCustomer ||
                      isMnpBundling ||
                      isMnpBundlingExisting ||
                      isMnpBundlingOneStep ||
                      isPre2Post ||
                      (['truemoveh', 'trueonline'].includes(this.promotion) && products.multiCampaign)
                    "
                  >
                    <div class="product_label align-flex-start" />
                    <device-bundle-promo
                      v-model="promotion_sim"
                      :products="products"
                      :product="product"
                      :promotion="promotion"
                      :special-price="specialPrice"
                    />
                  </div>
                  <div
                    class="product_detail"
                    v-if="isDeviceBundleExisting"
                  >
                    <div class="product_label align-flex-start" />
                    <device-bundle-existing
                      @type-changed="existing_bundle.type = $event"
                      @pp-changed="existing_bundle.pp = $event"
                      :existing_bundle="existing_bundle"
                      :products="products"
                      :product="product"
                      :promotion="promotion"
                      :special-price="specialPrice"
                    />
                  </div>
                </template>
                <div class="product_detail" v-if="productInfo.accessories && showAddon">
                  <div class="product_label align-flex-start">{{ Content.Accessories[$i18n.locale] }}</div>
                  <promo-addon
                    name="accessories"
                    :type="productInfo.only_one_accessory ? 'radio' : 'checkbox'"
                    v-model="accessories"
                    :promos="productInfo.accessories"
                  />
                </div>
                <div class="product_detail" v-if="productInfo.entertainment_packages && showAddon">
                  <div class="product_label align-flex-start">Entertainment Package</div>
                  <promo-addon
                    name="entertainment_packages"
                    type="radio"
                    v-model="entertainment_packages"
                    :promos="productInfo.entertainment_packages"
                  />
                </div>
                <div class="product_detail" v-if="products.product_type === 'truecard'">
                  <div class="product_label"></div>
                  <div class="product_option">
                    <div class="truecard_msg">{{ Content.truecard_login_msg[$i18n.locale] }}</div>
                  </div>
                </div>
                <div class="product_detail" v-if="coupon">
                  <div class="product_label align-flex-start">{{ Content.discount_label[$i18n.locale] }}</div>
                  <div class="product_option">
                    <div>{{ Content.discount_description.enter_the_code[$i18n.locale] }} <span class="red coupon-code">{{ coupon.code }}</span> {{ Content.discount_description.in_order_summary_page_to_get[$i18n.locale] }} {{ coupon.discount }} {{ Content.discount_description.on_top_discount[$i18n.locale] }}</div>
                  </div>
                </div>
                <div class="product_detail" v-if="product.id && status.status">
                  <!-- && checkAllowAddcart after status -->
                  <div class="product_label" />
                  <div class="product_option">
                    <!-- line 294 to 609-->
                    <template v-if="products.product_type === 'mnp'" />
                    <template v-else-if="products.product_type === 'device_bundle_new_customer' && promotion" />
                    <template v-else>
                      <!-- button class="red-bg-button" id="buy_now_device"-->
                    </template>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <div class="tab_container">
            <div class="tab">{{ Content.specsfeatures[$i18n.locale] }}</div>
          </div>
          <div class="product_promo">
            <div v-html="products.body_html[$i18n.locale] || products.body_html.th" />
          </div>
      </div>
    </div>
    </template>
    <div class="slanted_container">
      <div class="slanted" />
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import Banner from '../../store/detail/banner'
  import Loading from '@components/loading'
  import Content from './content.json'
  import Image from '../../store/detail/image'
  import DeviceBundle from '../../store/detail/device-bundle'
  import DeviceBundlePromo from '../../store/detail/device-bundle-promo'
  import DeviceBundleExisting from '../../store/detail/device-bundle-existing'
  import ClmBenefit from '@components/clm-benefit'

  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_INFO
  } from '@store/actions.type'

  import {
    computeBalance,
    checkPointStatus,
    getCLMQueries
  } from '@utils/common'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'banner-element': Banner,
      'loading-element': Loading,
      'image-element': Image,
      'clm-benefit-element': ClmBenefit,
      'device-bundle': DeviceBundle,
      'device-bundle-promo': DeviceBundlePromo,
      'device-bundle-existing': DeviceBundleExisting,
      'mnp-element': () => import('../../store/detail/mnp')
    },
    data: () => ({
      demo: true,
      product: {},
      products: {},
      loading: true,
      Content,
      subModule: '',
      promotion: '',
      promotion_type: '',
      promotion_sim: '',
      existing_bundle: {
        type: '',
        pp: ''
      }
    }),
    computed: {
      config () {
        return this.$store.state.config.verifyConfig
      },
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      inventoriesImages () {
        return Object.keys(this.products.inventories).map((e) => {
          const inventory = this.products.inventories[e]
          return inventory.image
        })
      },
      images () {
        if (this.product.product_type === 'truecard') {
          if (this.truecard) {
            const inventoryId = this.truecard.product_detail.inventory_id
            return [this.products.inventories[inventoryId].image]
          }
          return [this.products.image]
        }
        const images = [...this.products.images, ...this.inventoriesImages]
        return [...new Set(images.filter(e => e))]
      },
      coupon () {
        const data = this.$store.state.products.productInfo.data
        const couponData = data?.['coupon_data_from_bff']?.[data.record.id]
        if (!couponData || !couponData.coupon_status) return
        const coupon = couponData.coupon[0]
        const discount = computeBalance(coupon.discount)
        return {
          code: coupon.code,
          discount: coupon.discount_type === 'percent' ? `${discount}%` : `฿${discount}`
        }
      },
      normalPrice () {
        return this.computePrice('compare_at_price')
      },
      specialPrice () {
        return this.computePrice('price')
      },
      actualSpecialPrice () {
        if (this.promotion === '' && this.products.device_only && this.product.sku) {
          const discount = this.products.device_only[this.product.sku]
          if (discount) return this.specialPrice - discount
        }
        return this.specialPrice
      },
      balancePrice () {
        const id = this.product.id
        if (id) {
          const product = this.products.inventories[id]
          const price = product.price - this.products.points[id].discount
          return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return ''
      },
      status () {
        if (this.product.id) {
          const product = this.products.inventories[this.product.id]
          const status = product.quantity > 0 && product.allow_addcart
          return {
            value: status ? this.Content.instock[this.$i18n.locale] : this.Content.outofstock[this.$i18n.locale],
            status
          }
        }
        return ''
      },
      campaign () {
        return this.config.campaigns[this.products.promotion.id]
      },
      bundle () {
        return this.products.bundles && this.products.bundles.find(bundle => bundle.id === this.promotion_sim)
      },
      isDeviceBundleNewCustomer () {
        return this.promotion && this.config.verify_ui[this.promotion] && this.product.product_type === 'device_bundle_new_customer'
      },
      isDeviceBundleExisting () {
        return this.promotion &&
          this.config.campaigns[this.promotion] &&
          ['device_bundle_new_customer', 'device_bundle_existing'].includes(this.product.product_type)
      },
      isMnpBundling () {
        return this.promotion === 'mnp_bundling'
      },
      isMnpBundlingExisting () {
        return this.promotion === 'mnp_bundling_existing'
      },
      isMnpBundlingOneStep () {
        return this.promotion === 'mnp_bundling_one_step'
      },
      isMnpBundlingTyphoon () {
        return this.promotion === 'mnp_bundling' && this.bundle && this.bundle.is_typhoon
      },
      isPrepaidBundle () {
        return this.promotion === 'prepaid_bundle'
      },
      isPre2Post () {
        return this.promotion === 'pre2post'
      },
      ep () {
        return this.entertainment_packages || undefined
      },
      accs () {
        if (this.productInfo.only_one_accessory) return this.accessories || undefined
        return this.accessories.length > 0 ? this.accessories.join(',') : undefined
      },
      showAddon () {
        const product = this.productInfo
        const types = ['sim', 'postpaid', 'vlearn', 'happy_digital', 'truecard', 'gigatex', 'family_black_truecard']
        if (product.product_type === 'mnp' && product.sim_data.sim_type === 'postpaid') return false
        if (types.includes(product.product_type)) return false
        return true
      },
      sortedOptions () {
        return (options) => {
          return Object.keys(options).map(e => ({
            id: e,
            name: options[e].name,
            pos: options[e].position
          })).sort((a, b) => (a.pos - b.pos))
        }
      },
      showDiscountOnTop () {
        return this.productInfo?.additional?.['discount_on_top']
      },
      campCode () {
        const queries = Object.keys(this.$route.query);
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter];
      }
    },
    watch: {
      promotion (value) {
        switch (value) {
          case '': {
            this.updateURLQuery('usecase', 4)
            this.updateURLQuery('selected_campaign', 'device_only')
            break
          }
          case 'device_bundle_new_customer': {
            this.updateURLQuery('usecase', 1)
            this.updateURLQuery('selected_campaign', 'new_number')
            break
          }
          case 'pre2post': {
            this.updateURLQuery('usecase', undefined)
            this.updateURLQuery('selected_campaign', 'switch_to_postpaid')
            break
          }
          case 'prepaid_bundle':
          case 'mnp_bundling':
          case 'mnp_bundling_existing':
          case 'mnp_bundling_one_step': {
            this.updateURLQuery('usecase', undefined)
            this.updateURLQuery('selected_campaign', value)
            break
          }
          default: {
            this.updateURLQuery('selected_campaign', 'existing_postpaid')
            const promo = this.products.promotions.find(e => e.id === value)
            if (!this.existing_bundle.type) return
            if (promo?.type !== 'promotions') this.updateURLQuery('usecase', undefined)
            break
          }
        }
      },
      promotion_type (value) {
        this.promotion_type = value
      },
      promotion_sim (value) {
        if (value === '') this.promotion = ''
      },
      existing_bundle: {
        deep: true,
        handler () {
          if (this.existing_bundle.type === '3') {
            const bundle = this.products.bundle_existing.find(e => e.campaign_type === '3')
            const discount = bundle.discount_list.find(e => e.id.toString() === this.existing_bundle.pp)
            if (discount) {
              this.updateURLQuery('usecase', 2)
              this.updateURLQuery('rc', discount.rc)
            }
          } else {
            this.updateURLQuery('rc', undefined)
          }
        }
      },
      'existing_bundle.type' (value) {
        const promo = this.products.promotions.find(e => e.id === this.promotion)
        if (promo?.type !== 'promotions') return
        this.updateURLQuery('usecase', value === '2' ? 5 : undefined)
      }
    },
    mounted () {
      Promise.all([
        this.$store.dispatch(FETCH_VERIFY_CONFIG),
        this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: window.clm_preview.DEVICE,
          tmvhAuth: this.$route.query.token
        })
      ]).then(() => {
        this.computeProductInfo()
      }).catch((e) => {
        location.replace('/online-store')
      })
    },
    methods: {
      computeBalance,
      checkPointStatus,
      async computeProductInfo () {
        this.products = this.computeProducts()
        this.product = {
          sku: '',
          id: '',
          title: this.products.title,
          product_type: this.products.product_type,
          options: {}
        }

        const options = this.products.options
        if (options) {
          let inventory
          if (this.$route.query.matcode) {
            const inventoryId = Object.keys(this.products.inventories).find((e) => {
              return this.products.inventories[e].sku === this.$route.query.matcode
            })
            if (inventoryId) inventory = this.products.inventories[inventoryId]
          }
          Object.keys(options).forEach((option) => {
            const value = inventory ? inventory.options[option].toString() : this.sortedOptions(options[option])[0].id
            this.product.options[option] = value
          })
        }
        this.computeProduct()
        this.loading = false
      },
      computeProducts () {
        const data = this.productInfo
        const product = {
          id: data.id,
          title: data.title.th,
          inventories: {},
          images: data.images.map(e => e.url),
          image: data.images[0].url,
          points: {},
          options: {},
          body_html: data.body_html,
          product_type: data.product_type,
          bundle_existing: data.bundle_existing || [],
          device_only: data.device_only,
          token_coupon: data.token_coupon,
          is_mnp_bundling: data.is_mnp_bundling,
          is_addon: data.is_addon,
          promotion: data.promotion && data.promotion[0],
          promotions: data.campaign && data.campaign.map(promo => ({
            active: promo.active,
            start: promo.start,
            end: promo.end,
            id: promo.id.toString(),
            max_discount: promo.max_discount,
            title: (this.config.campaigns[promo.id] && this.config.campaigns[promo.id].campaign_name) || promo.title,
            type: 'promotions'
          })).filter(item => this.config.campaigns[item.id]),
          bundles: data.bundles && data.bundles.filter((bundle) => {
            const current = new Date()
            const start = new Date(bundle.start_date * 1000)
            const end = new Date(bundle.end_date * 1000)
            const dateActive = (current >= start && current <= end)
            return dateActive && bundle.enable
          })
        }
        if (product.product_type === 'device_bundle_new_customer') {
          const promo = Object.keys(this.config.verify_ui).map((item) => ({
            id: item,
            title: this.config.verify_ui[item].campaign_name,
            type: 'device_bundle_new_customer'
          }))
          product.promotions = [...product.promotions || [], ...promo]
        }
        if (product.is_mnp_bundling) {
          const promo = [{
            id: 'mnp_bundling',
            title: {
              th: 'ลูกค้าย้ายค่าย ออนไลน์เท่านั้น',
              en: 'Move to Us <span class="red">Online Exclusive</div>'
            },
            type: 'mnp_bundling'
          }, {
            id: 'mnp_bundling_existing',
            title: {
              th: 'ลูกค้าย้ายค่าย ออนไลน์เท่านั้น',
              en: 'Move to Us'
            },
            type: 'mnp_bundling_existing'
          }, {
            id: 'mnp_bundling_one_step',
            title: {
              th: 'Move to TrueMove H',
              en: 'Move to TrueMove H'
            },
            type: 'mnp_bundling_one_step'
          }]
          product.promotions = [...product.promotions || [], ...promo]
        }
        if (data.promotion && data.promotion.length > 0) {
          const promo = [{
            id: 'truemoveh',
            title: {
              th: 'ลูกค้าปัจจุบัน ทรูมูฟ เอช',
              en: 'Existing TrueMove H'
            },
            type: 'multi_campaign'
          }, {
            id: 'trueonline',
            title: {
              th: 'ลูกค้า ทรูออนไลน์',
              en: 'TrueOnline Customer'
            },
            type: 'multi_campaign'
          }]
          data.promotion.forEach((item) => { item.id = item.id.toString() })
          product.promotions = [...product.promotions || [], ...promo]
          product.bundles = [...product.bundles || [], ...data.promotion]
          product.multiCampaign = true
        }
        if (data.points && data.points.length > 0) {
          const point = data.points[0]
          const inventories = point.inventories
          if (inventories && inventories.length > 0) {
            inventories.forEach((inventory) => {
              product.points[inventory.inventory_id] = {
                point: inventory.point,
                discount: inventory.discount,
                status: point.status,
                start_date: point.start_date,
                end_date: point.end_date
              }
            })
          }
        }
        data.inventories.forEach((inventory) => {
          product.inventories[inventory.id] = {
            sku: inventory.sku,
            price: inventory.price,
            compare_at_price: inventory.compare_at_price,
            quantity: inventory.quantity,
            image: inventory.image.url,
            allow_addcart: inventory.allow_addcart,
            options: {}
          }
          inventory.options.forEach((option) => {
            const id = option.title.th
            product.inventories[inventory.id].options[id] = option.values.id
            if (!product.options[id]) product.options[id] = {}
            product.options[id][option.values.id] = {
              name: option.values.title.th,
              position: option.values.position
            }
          })
        })
        if (data.group_type) {
          localStorage.setItem('typhoon-group', data.group_type)
        } else {
          localStorage.removeItem('typhoon-group')
        }
        if (data.only_one_accessory) this.accessories = ''
        return product
      },
      computeProduct () {
        const inventories = this.products.inventories
        let productExists = false
        Object.keys(inventories).some((inventory) => {
          let sameProduct = true
          const options = inventories[inventory].options
          if (options) {
            Object.keys(options).forEach((option) => {
              const valid = options[option].toString() === this.product.options[option]
              if (!valid) sameProduct = false
            })
          }
          if (sameProduct) {
            this.product.id = inventory
            this.product.sku = inventories[inventory].sku
            this.updateURLQuery('matcode', inventories[inventory].sku)

            loggerAddon({
              event: 'Visit product',
              productId: this.products.id,
              matcode: inventories[inventory].sku
            })

            productExists = true
          }
        })
        if (!productExists) {
          this.product.id = ''
        }
      },
      checkPoint () {
        if (this.products.points[this.product.id]) {
          if (this.userBalance.point >= this.products.points[this.product.id].point) {
            this.showBalanceError = false
          }
        }
      },
      changeProduct (key, value) {
        if (this.product.options[key] === value) return
        this.product.options[key] = value
        this.computeProduct()
        const image = this.products.inventories[this.product.id].image
        if (image) this.$refs.imageEle.goTo(image)
      },
      computePrice (key) {
        if (this.product.id) {
          const product = this.products.inventories[this.product.id]
          return product[key]
        }
      },
      updateURLQuery (key, value) {
        const query = this.$route.query
        query[key] = value
        const newurl = `${window.location.origin}${window.location.pathname}?${qs.stringify(query)}`
        window.history.replaceState({ path: newurl }, '', newurl)
      }
    }
  }
</script>

<style lang="scss">
  .product_promo {
    font-size: 1.5em;
    word-break: break-all;

    img {
      max-width: 100%;
    }
  }
</style>
<style scoped lang="scss" src="./store.scss"></style>
<style scoped lang="scss" src="./style.scss"></style>
