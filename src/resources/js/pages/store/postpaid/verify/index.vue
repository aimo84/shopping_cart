<template>
  <div class="address-page">
    <loading-element v-if="loading" />
    <template v-else>
      <template v-if="page === 'address'">
        <priceplan-info
          v-if="
            (!isPrepaid || simSourceType === 'e-sim') && !isNoEkyc && !isDrluckyZodiac && !isDrLuckyOffline
          "
          :data="status"
          :packages="packages"
          :verify-form="verifyForm"
          :is-existing="isExisting"
          :postpaid-result="postpaidResult"
        />
        <info-form
          v-if="isNoEkyc || isDrluckyZodiac || isDrLuckyOffline"
          :packages="packages"
          :product="product"
          :postpaid-result="postpaidResult"
          :selected-price-plan="selectedPricePlan"
          :no-ekyc-cart-form="noEkycCartForm"
        />
        <address-element
          v-else
          :status="status"
          :packages="packages"
          :product="product"
          :verify-form="verifyForm"
          :verify-result="verifyResult"
          :postpaid-result="postpaidResult"
          :selected-price-plan="selectedPricePlan"
          :is-prepaid="isPrepaid"
          :isCampaignRedeemFreeDevice="isCampaignRedeemFreeDevice"
          :price-plans="pricePlans"
          :isCampaignFreeDevice="isCampaignFreeDevice"
        />
      </template>
      <template v-if="page === 'plan'">
        <priceplan-info
          :data="status"
          :packages="packages"
          :verify-form="verifyForm"
          :is-existing="isExisting"
        />
        <priceplan-chooser
          clm
          :cancel-url="cancelUrl"
          @next="pricePlanSelected"
          :demo="demo"
        />
      </template>
      <template v-if="page === 'lucky-plan'">
        <lucky-priceplan-info
          :data="status"
          :packages="packages"
          @select-drlucky-prepaid-plan="selectDrluckyPrepaidPlan"
        />
        <priceplan-chooser
          clm
          :cancel-url="cancelUrl"
          @next="pricePlanSelected"
        />
        <drlucky-result
          ref="drluckydialog"
          :offline="isDrLuckyOffline"
          :default-open="isDrLuckyError"
        />
      </template>
      <template v-if="page === 'verify'">
        <verify-element
          :product="product"
          :price-plans="pricePlans"
          :price-plan="selectedPricePlan"
          :isCampaignRedeem="isCampaignRedeem"
          :isCampaignRedeemFreeDevice="isCampaignRedeemFreeDevice"
        />
      </template>
      <template v-if="page === 'result'">
        <result-element
          :verify-form="verifyForm"
          :result="verifyResult"
          :sim-meta="simMeta"
        />
      </template>
      <template v-if="page === 'instantsim-confirm'">
        <instantsim-confirm
          :status="status"
          :packages="packages"
          :price-plan="selectedPricePlan"
        />
      </template>
      <template v-if="page === 'option-page'">
        <option-page-element
          v-if="isNoEkyc || isDrluckyZodiac || isDrLuckyOffline"
          :packages="packages"
          :product="product"
          :postpaid-result="postpaidResult"
          :selected-price-plan="selectedPricePlan"
          :no-ekyc-cart-form="noEkycCartForm"
          :berfuntong-type="berfuntongType"
        />
      </template>
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import qs from 'qs'

  import {
    CHECK_NUMBER,
    FETCH_PRODUCT_INFO,
    FETCH_PACKAGE,
    FETCH_VERIFY_CONFIG,
    FETCH_PRICE_PLAN,
    POST_VHORA_MOBILE,
    POST_VHORA_ZODIAC_MOBILE
  } from '@store/actions.type'

  import { loggerAddon } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'address-element': () => import('./address.vue'),
      'info-form': () => import('./info-form.vue'),
      'result-element': () => import('./family/result.vue'),
      'verify-element': () => import('./postpaid/verify.vue'),
      'priceplan-info': () => import('@sections/priceplan-info'),
      'priceplan-chooser': () => import('@sections/priceplan-chooser'),
      'lucky-priceplan-info': () => import('@sections/lucky-priceplan-info'),
      'instantsim-confirm': () => import('./instantsim-confirm.vue'),
      'drlucky-result': () => import('./drlucky-result'),
      'option-page-element': () => import('./optionPage.vue')
    },
    data: () => ({
      status: {},
      product: {},
      packages: {},
      verifyForm: {},
      verifyResult: {},
      postpaidResult: {},
      simMeta: {},
      pricePlans: [],
      selectedPricePlan: {},
      page: 'address',
      loading: true,
      isExisting: true,
      isDrLuckyError: false,
      isPrepaid: false,
      noEkycCartForm: {},
      berfuntongType: ''
    }),
    computed: {
      isLucky () {
        return (
          this.$route.name === 'online-store-lucky-verify' ||
          this.$route.name.includes('drlucky-verify')
        )
      },
      isLucky9999 () {
        return (
          this.$route.name === 'online-store-lucky-9999-verify'
        )
      },
      isDrLuckyOffline () {
        return (
          this.$route.name.includes('drlucky-verify-offline') ||
          this.$route.path.includes('offline-store')
        )
      },
      isDrLuckyZodiacOffline () {
        return this.$route.name === 'drlucky-zodiac-verify-offline'
      },
      luckyNas () {
        return localStorage.getItem('truestore-berfuntong-nascode') || ''
      },
      refcode () {
        return window.localStorage.getItem('truestore-berfuntong-refcode')
      },
      zodiacRefcode () {
        return window.localStorage.getItem('truestore-berfuntong-zodiac-refcode')
      },
      zodiacPack () {
        return window.localStorage.getItem('truestore-berfuntong-zodiac-pack')
      },
      vhoraMobile () {
        return this.$store.state.vhora.vhoraMobile
      },
      vhoraZodiacMobile () {
        return this.$store.state.vhora.vhoraZodiacMobile
      },
      cancelUrl () {
        let name = 'online-store-postpaid'
        if (this.$route.name.includes('drlucky-verify')) {
          return this.$router.resolve({
            name: 'drlucky-select' + (this.isDrLuckyOffline ? '-offline' : '')
          }).href
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          return this.$router.resolve({
            name:
              'drlucky-zodiac-home' +
              (this.isDrLuckyZodiacOffline ? '-offline' : '')
          }).href
        }
        if (this.$route.name === 'online-store-bundle-verify') {
          name = 'online-store-bundle'
        }
        if (this.$route.name === 'online-store-instantsim-verify') {
          name = 'online-store-instantsim'
        }
        if (this.$route.name === 'online-store-lucky-verify') {
          name = 'online-store-lucky'
        }
        if (this.$route.query.demo) {
          return this.$router.resolve({
            name: 'tmvhsim',
            query: {
              campId: this.$route.query.campId,
              productid: this.$route.query.productid,
              nas_code: this.$route.query.nas_code
            }
          }).href
        }
        if (this.$route.name === 'online-store-lucky-9999-verify') {
          return this.$router.resolve({
            name: 'online-store-lucky999-home'
          }).href
        }
        const route = this.$router.resolve({
          name,
          params: this.$route.params,
          query: {
            nas_code: this.$route.params.nas || this.luckyNas,
            ...this.$route.query
          }
        })
        return route.href
      },
      isInstantSimPrepaid () {
        return (
          this.$route.name === 'online-store-instantsim-verify' &&
          this.product.product_type === 'prepaid'
        )
      },
      demo () {
        return this.$route.query.demo
      },
      isNoEkyc () {
        return (
          localStorage.getItem('no_ekyc') === 'true' &&
          this.$route.name === 'drlucky-verify'
        )
      },
      isDrluckyZodiac () {
        return this.$route.name.includes('drlucky-zodiac-verify')
      },
      isCampaignRedeem () {
        const bundles = this.product.bundles
        if (!bundles) {
          return false
        }
        const bundle = bundles.find(b => b.id === this.$route.params.bundle)
        return bundle && bundle.privilege_type === 'campaign_redeem'
      },
      isCampaignRedeemFreeDevice () {
        const bundles = this.product.bundles
        if (!bundles) {
          return false
        }
        const bundle = bundles.find(b => b.id === this.$route.params.bundle)
        if (bundle && bundle.privilege_type === 'campaign_redeem_free_device' && typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[this.$route.query.camptype]) {
          return true
        }
        return false
      },
      simSourceType () {
        return this.$route.query.source_type
      },
      isCampaignFreeDevice () {
        const bundles = this.product.bundles
        if (bundles) {
          const bundle = bundles.find(b => b.id === this.$route.params.bundle)
          if (bundle && bundle.privilege_type === 'campaign_free_device' && typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[this.$route.query.camptype]) {
            return true
          }
        }
        return false
      }
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    async mounted () {
      if (this.$route.name === 'online-store-postpaid-verify' && window.localStorage.getItem('sim_family_info') && !this.$route.query.token) return this.$router.push('/online-store')
      if (this.$route.query.afc) {
        const afcData = {
          afc: this.$route.query.afc,
          timestamp_expired: Date.now() + 86400000
        }
        localStorage.setItem('truestore-afc', JSON.stringify(afcData))
      }
      try {
        await this.fetchProduct()
        await this.fetchVerify()
        await this.checkNumber()
        await this.fetchPackage()

        loggerAddon({
          event: 'Visit Sim',
          status: 'select package',
          productId: this.$route.params.id,
          matcode: this.nas || this.$route.params.nas || this.luckyNas,
          mobileNumber: this.$route.params.number
        })

        this.loading = false
      } catch (e) {
        if (e.message === 'notVerified') {
          this.$router.push('/online-store/verify')
        } else {
          this.$router.push(`/online-store/postpaid/${this.$route.params.id}`)
        }
      }
    },
    methods: {
      selectDrluckyPrepaidPlan () {
        this.pricePlanSelected(this.pricePlans[0])
      },
      async pricePlanSelected (e) {
        window.localStorage.removeItem('offline_bundle')
        this.selectedPricePlan = {
          id: e.id,
          description: e.description,
          name: e.name,
          code: e.code,
          sim_type: e.sim_type,
          price: e.price,
          recommended: e.recommended,
          proposition_nas_code: e.proposition_nas_code,
          proposition_term_short: e.proposition_term_short,
          campaign_code: e.campaign_code,
          price_plan_rc: e.price_plan_rc
        }

        window.dataLayer.push({
          event: 'track_event',
          event_category:
            this.$route.name === 'drlucky-verify'
              ? 'dr_luck_sim'
              : 'choose_the_package',
          event_action:
            this.$route.name === 'drlucky-verify'
              ? 'choose_the_package'
              : 'verify',
          event_label: `${this.selectedPricePlan.name} ${this.selectedPricePlan.price} Baht`
        })

        if (this.$route.name === 'drlucky-verify') {
          try {
            this.loading = true
            await this.$store.dispatch(POST_VHORA_MOBILE, {
              msisdn: this.$route.params.number,
              ref_code: this.refcode
            })

            if (
              this.vhoraMobile.status_code !== 200 ||
              this.vhoraMobile.data.code === 2001 ||
              this.vhoraMobile.data.code === 2002
            ) {
              this.loading = false
              this.$nextTick(() => {
                this.$refs.drluckydialog.open(this.vhoraMobile.data.code + '')
              })
              return
            }
            localStorage.setItem('no_ekyc', this.vhoraMobile.data.no_ekyc)
            localStorage.setItem('truestore-berfuntong-timestamp', Date.now())
            if (this.vhoraMobile.data.no_ekyc) {
              this.loading = false
              this.goTo('address')
              return
            }
          } catch (e) {
            this.loading = false
            this.$nextTick(() => {
              this.$refs.drluckydialog.open('')
            })
            return
          }
          this.loading = false
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          try {
            this.loading = true
            if (!this.$route.name.includes('offline')) {
              await this.$store.dispatch(POST_VHORA_ZODIAC_MOBILE, {
                msisdn: this.$route.params.number,
                ref_code: this.zodiacRefcode,
                pack: this.zodiacPack
              })

              if (
                this.vhoraZodiacMobile.status_code !== 200 ||
                this.vhoraZodiacMobile.data.code === 2001 ||
                this.vhoraZodiacMobile.data.code === 2002
              ) {
                this.loading = false
                this.$nextTick(() => {
                  this.$refs.drluckydialog.open(
                    this.vhoraZodiacMobile.data.code + ''
                  )
                })
                return
              }
              localStorage.setItem('truestore-berfuntong-timestamp', Date.now())
            } else {
              window.localStorage.setItem(
                'vhora-priceplan',
                JSON.stringify(this.selectedPricePlan)
              )
            }
            localStorage.setItem('no_ekyc', 'true')
            this.loading = false

            if (
              JSON.parse(localStorage.getItem('vhora-zodiac-form')).bundling
            ) {
              this.berfuntongType = 'low-tier'
              this.goTo('option-page')
            } else {
              this.goTo('address')
            }
            return
          } catch (e) {
            this.loading = false
            this.$nextTick(() => {
              this.$refs.drluckydialog.open('')
            })
            return
          }
        }
        if (this.isDrLuckyOffline) {
          window.localStorage.setItem(
            'vhora-priceplan',
            JSON.stringify(this.selectedPricePlan)
          )
          if (JSON.parse(localStorage.getItem('vhora-form')).bundling) {
            this.berfuntongType = 'high-tier'
            this.goTo('option-page')
          } else {
            this.$router.push('/offline-store/berfuntong/pre-validation')
          }
        } else if (this.$route.name === 'online-store-instantsim-verify') {
          this.goTo('instantsim-confirm')
        } else if (this.product.product_type === 'family_black_truecard') {
          this.goTo('address')
        } else {
          this.goTo('verify')
        }
      },
      async checkNumber () {
        if (this.$route.name.includes('drlucky-verify')) {
          this.status = { mobile: this.$route.params.number }
          const vhoraForm = window.localStorage.getItem('vhora-form')
          if (
            !vhoraForm ||
            JSON.parse(vhoraForm).selected_msisdn !== this.$route.params.number
          ) {
            this.$router.push('/online-store/berfuntong/select')
          }
          this.isDrLuckyError = this.luckyNas === ''
          return
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          this.status = { mobile: this.$route.params.number }
          const vhoraZodiacForm = window.localStorage.getItem(
            'vhora-zodiac-form'
          )
          if (
            !vhoraZodiacForm ||
            JSON.parse(vhoraZodiacForm).selected_msisdn !==
            this.$route.params.number
          ) {
            this.$router.push('/online-store/berfuntong-zodiac')
          }
          this.isDrLuckyError = this.luckyNas === ''
          return
        }

        let params = null
        if (this.$route.name === 'online-store-bundle-verify') {
          params = qs.stringify(
            {
              mobiles: this.$route.params.number
            },
            { arrayFormat: 'indices' }
          )
        } else {
          params = qs.stringify(
            {
              mobiles: this.$route.params.number,
              nas_code: this.$route.params.nas || this.luckyNas
            },
            { arrayFormat: 'indices' }
          )
        }

        if (!this.$route.query.hasRefId) {
          const data = await this.$store.dispatch(CHECK_NUMBER, params)
          const record = data.record[0]

          if (record && record.hold_expired_date) {
            if (new Date() > new Date(record.hold_expired_date.replace(/-/g, '/'))) {
              throw new Error()
            }
            this.status = record
          } else {
            throw new Error()
          }
        } else {
          this.status = { mobile: this.$route.params.number }
        }
      },
      async fetchProduct () {
        window.localStorage.removeItem('sim_family_info')
        const product = await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: this.$route.params.id,
          tmvhAuth: this.$route.query.token,
          paysmoothToken: this.$route.query.paysmooth_token,
          type: 'sim'
        })
        this.product = product.data.record
        if (this.product.sim_family_info) window.localStorage.setItem('sim_family_info', JSON.stringify(product.data.record.sim_family_info))
      },
      async fetchPackage () {
        const data = await this.$store.dispatch(
          FETCH_PACKAGE,
          this.$route.params.nas || this.luckyNas
        )
        this.packages = data.record[0]
        window.localStorage.setItem('proposition_amdoc', this.packages.proposition_amdoc)
      },
      async fetchPricePlan () {
        let params = {
          nas_code: this.$route.params.nas || this.luckyNas,
          token: this.$route.query.token,
          product_id: this.$route.params.id
        }
        if (this.product.product_type === 'device_bundle_new_customer') {
          params.bundle_propo_code = this.$route.params.propo
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          params.sim_type = this.$route.query.sim_type || 'postpaid'
        }
        if (this.product.product_sim && this.product.product_sim.sim_type === 'prepaid') {
          params = {
            nas_code: this.$route.params.nas,
            sim_type: this.product.product_sim.sim_type
          }
        }
        const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
          params,
          headers: { 'tmvh-token': this.$route.query.token }
        })
        this.pricePlans = data.data.record
      },
      async fetchVerify () {
        if (this.$route.name.includes('drlucky-verify')) {
          try {
            const form = window.localStorage.getItem('truestore-berfuntong-form')
            if (!form) throw new Error()
            JSON.parse(form)
          } catch (e) {
            throw new Error()
          }
          this.isExisting = false
          await this.fetchPricePlan()
          this.page = this.$route.query.hash ? 'verify' : 'lucky-plan'
          return
        }
        if (this.$route.name.includes('drlucky-zodiac-verify')) {
          this.isExisting = false
          await this.fetchPricePlan()
          this.page = 'lucky-plan'
          return
        }
        const config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
        const postpaidList = config.verify
          .map((product) => {
            if (product.type === 'postpaid') return product.id
          })
          .filter((item) => item)

        this.isPrepaid = (this.product.product_sim && this.product.product_sim.sim_type === 'prepaid') || config.prepaid_search.includes(this.$route.params.id)
        const familySim = postpaidList.includes(this.$route.params.id)
        const postpaidSim = [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'device_bundle_new_customer'
        ].includes(this.product.product_type)
        if (this.isPrepaid) {
          if (this.product.product_sim && this.product.product_sim.sim_type === 'prepaid') {
            await this.fetchPricePlan()
          }
          if (this.simSourceType === 'e-sim') {
            this.isExisting = false
            this.page = 'verify'
          } else {
            this.page = 'address'
          }
          this.loading = false
          return
        }
        if (this.isInstantSimPrepaid) {
          this.page = this.$route.query.hash ? 'verify' : 'instantsim-confirm'
          return
        }
        if (familySim) {
          try {
            const verifyForm = localStorage.getItem('verify-form')
            const verifyResult = localStorage.getItem('verify-result')
            if (!verifyForm || !verifyResult) throw new Error()
            this.verifyForm = JSON.parse(verifyForm)
            this.verifyResult = JSON.parse(verifyResult)
            await this.fetchPricePlan()
            const plan = this.pricePlans[0]
            this.selectedPricePlan = {
              id: plan.id,
              description: plan.description,
              name: plan.name,
              code: plan.code,
              sim_type: plan.sim_type,
              price: plan.price,
              recommended: plan.recommended,
              proposition_nas_code: plan.proposition_nas_code,
              campaign_code: plan.campaign_code
            }
          } catch (e) {
            throw new Error('notVerified')
          }
        } else if (postpaidSim) {
          if (this.product.product_type === 'family_black_truecard') {
            const familyBlackVerify = localStorage.getItem(
              'family-black-verify-form'
            )
            if (!familyBlackVerify) throw new Error()
            this.postpaidResult = JSON.parse(familyBlackVerify)
          }
          if (this.product.product_type === 'device_bundle_new_customer') {
            const bundle = this.product.bundles.find(
              (bundle) => bundle.id === this.$route.params.bundle
            )
            if (!bundle) throw new Error()
          }
          this.isExisting = false
          this.page = this.isLucky || this.isLucky9999 ? 'lucky-plan' : 'plan'
          await this.fetchPricePlan()
          if (this.$route.query.hash) this.page = 'verify'
          const priceplanId = this.$route.query.pp
          if (priceplanId) {
            const priceplan = this.pricePlans.find(priceplan => priceplan.id === priceplanId)
            if (priceplan) {
              this.pricePlanSelected(priceplan)
            }
          }
        } else {
          throw new Error('error')
        }
      },
      setSimMeta (simMeta) {
        this.simMeta = simMeta
      },
      goTo (page) {
        this.page = page
      },
      updatePostpaidResult (data) {
        this.postpaidResult = data
        if (this.$route.query.hash) this.postpaidResult.ekyc_hash = this.$route.query.hash
      },
      updateNoEkycCartForm (data) {
        this.noEkycCartForm = data
      }
    }
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1148px) {
  .address-page {
    margin: 0 24px 24px 24px;
    padding-top: 24px;
  }
}

@media screen and (max-width: 860px) {
  .address-page {
    margin: 0;
    padding-top: 24px;
  }
}
</style>
