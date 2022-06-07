<template>
  <div class="container">
    <loading-element
      v-if="page === 'loading'"
    />
<!--    <package-element-->
<!--      v-if="page === 'package'"-->
<!--      :type-id="typeId"-->
<!--      :data="data"-->
<!--    />-->
    <!-- <result-element
      v-if="page === 'result'"
      :data="data"
      :result="result"
      :product="product"
    /> -->
    <package-failed-element
      v-if="page === 'package-failed'"
    />
    <verify-element
      v-if="page === 'verify'"
      ref="verify"
      :itemPromotionSelected="itemPromotionSelected"
    />
    <prepaid-element
        v-if="page === 'prepaid'"
        :errorVerify="errorVerify"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Package from '../privilege/verify/package'
  import PackageFailed from '../privilege/verify/package-failed'
  import Verify from './verify'
  import Result from './result'
  import Prepaid from './prepaid.vue'
  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_INFO,
    VERIFY,
    UPDATE_CART,
    FETCH_CART,
    FETCH_PACKAGE,
    FETCH_PRICE_PLAN,
    FETCH_EKYC_STATUS,
    FETCH_PRE_TO_POST_EKYC
  } from '@store/actions.type'

  import {
    computeAddons,
    updateEntPack,
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'package-element': Package,
      'package-failed-element': PackageFailed,
      'verify-element': Verify,
      'result-element': Result,
      'prepaid-element': Prepaid
    },
    props: {
      productId: String,
      inventoryId: String,
      promotionId: String,
      changeVerifyOTP: Function,
      queryString: Object,
      promotionName: String,
      promotionVerifyOtp: String,
      resultVerify: Object,
      itemPromotionSelected: {
          type: String,
          "default": ''
      }
    },
    data: () => ({
      page: '',
      data: {},
      result: {},
      pricePlan: false,
      existingCampaign: false,
      ekycStatusRetry: 0,
      formInfo: {},
      errorVerify: '',
      mobile: '',
      promotionVerify: ''
    }),
    computed: {
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      preToPostEkycStatus () {
        return this.$store.state.ekyc.preToPostEkycStatus
      },
      product () {
        if (this.$parent.productInfo) {
          return this.$parent.productInfo
        }
        return this.$store.state.products.productInfo.data.record
      },
      plans () {
        return this.$store.state.postpaid.pricePlan.data?.record
      },
      typeId () {
        return this.queryString.type
      },
      ppId () {
        return this.queryString.pp
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return {}
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      config () {
        if (this.product.product_type === 'restriction') {
          if (this.typeId) return
          return {
            path: 'restriction',
            options: { truemoveh: true }
          }
        }
        /* COMMENT OUT: do not use this component for case promotion === 'mnp_bundling_existing' (typeId === '4')
        if (this.typeId === '4') {
          return {
            path: 'device_bundle_existing',
            options: { truemoveh: true }
          }
        }
        */
        if (this.typeId === '5') {
          return {
            path: 'pre_to_post',
            options: { truemoveh: true }
          }
        }
        const config = this.$store.state.config.verifyConfig
        return config.campaigns[this.promotionId]
      },
      inventory () {
        return this.product.inventories.find(e => e.id.toString() === this.inventoryId)
      },
      promotion () {
        return this.product.promotion.find((item) => item.id.toString() === this.promotionId)
      },
      multiCampaign () {
        return this.product.promotion && this.product.promotion.length > 0 && this.promotion
      },
      campaign () {
        return this.product.bundle_existing.find(e => e.campaign_type === this.typeId)
      },
      discountList () {
        const id = this.campaign.campaign_type === '3' ? this.ppId : this.promotionId
        return this.campaign.discount_list.find(e => e.id.toString() === id)
      },
      selectedPackage () {
        return this.$parent.selectedPackage
      }
    },
    watch: {
      promotionVerify: function (val) {
        this.$parent.promotionVerify = this.promotionVerify
      },
      mobile: function (val) {
        this.$parent.dataVerify = this.data
      },
      result: function (val) {
        this.$parent.resultVerify = val
        this.$parent.plans = this.plans
      },
      discountList: function () {
        if (['1', '3', '5'].includes(this.typeId)) {
          this.page = 'verify'
        }
      }
    },
    async mounted () {
      try {
        if (!window.localStorage.getItem('cart-id') && this.typeId === '5') throw new Error('no-cart-id')
        if (!this.config) throw new Error('no-config')
        if (this.multiCampaign && !this.config.options[this.typeId]) throw new Error()
        if (['device_bundle_existing', 'pre_to_post'].includes(this.config.path)) {
          if (!this.campaign) throw new Error('no-campaign')
          if (['3', '4', '5'].includes(this.campaign.campaign_type) && !this.discountList) throw new Error('no-discount-list')
          this.existingCampaign = true
          if (this.campaign.campaign_type === '4') {
            this.page = 'package'
            return
          }
          if (this.campaign.campaign_type === '5') {
            if (!this.queryString.hash) {
              this.page = 'verify'
              return
            }
            if (!this.queryString.pp) throw new Error('no-pp-query')
            this.pricePlan = this.plans.find(e => e.id.toString() === this.queryString.pp)
            if (!this.pricePlan) throw new Error('no-priceplan')
            const ekyc = await this.fetchEkyc()
            if (!ekyc) return
            const result = await this.$store.dispatch(VERIFY, {
              id: 'pre_to_post',
              data: {
                id_number: this.ekycAnswers.national_id,
                service_name: 'truemove',
                mobile_number: this.ekycAnswers.mobile_no,
                birthday: this.ekycAnswers.date_of_birth,
                priceplan: this.pricePlan.code,
                cart_hash: window.localStorage.getItem('cart-id'),
                is_pre2post_bundle: 1,
                campaign_code_list: [this.discountList.campaign_code],
                product_id_list: [this.productId],
                product_sku_list: [this.inventory.sku]
              }
            })
            if (!result.is_pass) {
              return this.$router.push({
                name: 'online-store-existing-verify-fail',
                query: { product_id: this.productId }
              })
            }
            return
          }
        }
        if (!this.inventory) throw new Error('no-inventory')
        if (['1', '2', '3'].includes(this.typeId)) {
          this.page = 'verify'
          return
        }
      } catch (e) {
        if (!e.is_pass && this.typeId === '5') {
          return this.$router.push({
            name: 'online-store-existing-verify-fail',
            query: { product_id: this.productId }
          })
        }
        this.$router.push({
          name: 'online-store-detail',
          params: {
            id: this.productId
          },
          query: {
            token: this.queryString.token
          }
        })
      }
    },
    methods: {
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      trackAnalytics (label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'EKYC_verification',
          event_action: 'EKYC_result',
          event_label: label
        })
      },
      async fetchEkyc () {
        try {
          this.page = 'loading'
          if (this.ekycStatusRetry < 3) await this.sleep(2000)
          await this.$store.dispatch(FETCH_EKYC_STATUS, this.queryString.hash)
          if (!this.ekycStatus.is_pass) throw new Error('ekyc-not-passed')
          await this.$store.dispatch(FETCH_PRE_TO_POST_EKYC, {
            cart_hash: window.localStorage.getItem('cart-id'),
            answers: this.ekycStatus.answers,
            image_liveness: this.ekycStatus.image_liveness,
            is_pre2post_bundle: 1
          })
          if (!this.preToPostEkycStatus.is_pass) throw new Error('pre2post-ekyc-not-passed')
          this.trackAnalytics('verification_passed')
          return true
        } catch (e) {
          this.ekycStatusRetry++
          if (this.ekycStatusRetry > 2) {
            this.trackAnalytics('verification_failed')
            this.result = {
              is_pass: false,
              is_ekyc: true,
              message: this.ekycStatus.message || { th: 'Error', en: 'Error' }
            }
            this.page = 'result'
            return
          }
          await this.fetchEkyc()
        }
      },
      goTo (page) {
        this.page = page
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 16px 0;
  }
</style>
