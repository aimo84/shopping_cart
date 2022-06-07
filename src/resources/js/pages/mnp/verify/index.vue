<template>
  <div class="mnp-verify-container">
    <div
      class="verify-container"
      :class="{ 'no-bg': component === 'plan' || component === 'ekyc' }"
    >
      <mnp-package v-if="showPackage" :data="data" />
      <component
        :is="`mnp-${component}`"
        @route="component = $event"
        :data="data"
        :isCampaignFreeDevice="isCampaignFreeDevice"
      />
    </div>
  </div>
</template>

<script>
  import MnpPackage from './mnp-package'
  import MnpLoading from './mnp-loading'
  import {
    FETCH_PRODUCT_INFO,
    FETCH_PACKAGE,
    FETCH_PRICE_PLAN,
    HOLD_MNP_RANDOM_NUMBER,
    CHECK_MNP_OTP
  } from '@store/actions.type'

  export default {
    components: {
      'mnp-package': MnpPackage,
      'mnp-loading': MnpLoading,
      'mnp-plan': () => import('./mnp-plan'),
      'mnp-checklist': () => import('./mnp-checklist'),
      'mnp-otp': () => import('./mnp-otp'),
      'mnp-ussd': () => import('./mnp-ussd'),
      'mnp-ekyc': () => import('./mnp-ekyc'),
      'mnp-info-form': () => import('./mnp-info-form'),
      'mnp-result': () => import('./mnp-result')
    },
    data: () => ({
      component: 'loading',
      data: {
        bundle: {
          nas: '',
          bundle: false,
          plan: {},
          custom_name: 'Move to Us Online Exclusive Package'
        },
        otp: {
          phoneNumber: ''
        },
        ussd: {
          code: ''
        },
        entPack: {
          error: false
        },
        ekyc: {
          retry: 0
        },
        formInfo: {
        }
      }
    }),
    computed: {
      showPackage () {
        const components = ['otp', 'ussd']
        return components.includes(this.component)
      },
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      plans () {
        return this.$store.state.postpaid.pricePlan.data.record
      },
      isMnpOneStep () {
        return this.data.bundle.bundle.campaign_mnp_type === 'one_step'
      },
      isMnpSharePlan () {
        return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify'
      },
      pricePlanSelected () {
        if (!this.$store.state.store.selectedPricePlanData) return
        return this.$store.state.store.selectedPricePlanData
      },
      isCampaignFreeDevice () {
        const bundles = this.productInfo.bundles
        if (bundles) {
            const bundle = bundles.find(b => b.id === this.$route.params.bundle)
            if (bundle && bundle.privilege_type === 'campaign_free_device' && typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[this.$route.query.camptype]) {
                return true
            }
        }
        return false
      }
    },
    watch: {
      component () {
        window.scrollTo(0, 0)
      }
    },
    async mounted () {
      try {
        this.data.bundle.plan = this.pricePlanSelected
        await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: this.$route.params.id,
          tmvhAuth: this.$route.query.token
        })
        if (this.$route.name === 'mnp-bundle-verify') {
          await this.initMnpBundle()
        } else if (this.$route.name === 'mnp-auto-verify') {
          await this.initMnpAuto()
        } else {
          await this.initMnp()
        }
      } catch (e) {
        const route = this.$route.name === 'mnp-auto-verify' ? {
          name: 'online-store-mnp-auto-share-plan',
          params: {
            id: this.$route.params.id,
            nas_code: this.$route.params.nas_code,
            bundle_id: this.$route.params.bundle_id
          },
          query: {
            token: this.$route.query.token
          }
        } : {
          name: 'online-store-detail',
          params: {
            id: this.$route.params.id
          },
          query: {
            token: this.$route.query.token
          }
        }
        this.$router.push(route)
      }
    },
    methods: {
      async initMnpBundle () {
        if (!localStorage.getItem('cart-id')) throw new Error()
        if (!this.productInfo.is_mnp_bundling) throw new Error()
        const inventory = this.productInfo.inventories.find(inventory => (
          inventory.id.toString() === this.$route.params.inventory
        ))
        this.data.bundle.bundle = this.productInfo.bundles.find(bundle => (
          bundle.id === this.$route.params.bundle
        ))

        if (!inventory || !this.data.bundle.bundle) throw new Error()
        this.data.bundle.nas = this.data.bundle.bundle.proposition_mobile[0].nas_code
        const requests = [
          this.$store.dispatch(FETCH_PACKAGE, this.data.bundle.bundle.propo_code),
          this.$store.dispatch(FETCH_PRICE_PLAN, {
            nas_code: this.data.bundle.nas,
            bundle_propo_code: this.data.bundle.bundle.propo_code
          })
        ]
        if (!this.$route.query.hash) {
          if (!this.isMnpOneStep) {
            const isTyphoon = this.data.bundle.bundle.is_typhoon
            if (isTyphoon && !this.$route.query.reserve_hash) throw new Error()
            requests.push(this.$store.dispatch(HOLD_MNP_RANDOM_NUMBER, {
              nas_code: this.data.bundle.bundle.propo_code,
              reserve_hash: isTyphoon && this.$route.query.reserve_hash
            }))
          } else {
            this.data.bundle.custom_name = this.data.bundle.bundle.proposition_mobile[0].name
          }
        }
        await Promise.all(requests)
        if (!this.plans) throw new Error()
        if (this.$route.query.hash) {
          if (!this.$route.query.pp) throw new Error()
          this.data.bundle.plan = this.plans.find(e => e.id.toString() === this.$route.query.pp)
          if (!this.data.bundle.plan) throw new Error()
          this.component = 'ekyc'
          return
        }
        if (this.$route.query.flow === 'mnp-two') {
          if (!this.$route.query.pp) throw new Error()
          if (this.$route.query.mobile && this.$route.query.otp && this.$route.query.mnp_otp_key) {
            try {
              await this.$store.dispatch(CHECK_MNP_OTP, {
                mobile_number: this.$route.query.mobile,
                otp: this.$route.query.otp,
                mnp_otp_key: this.$route.query.mnp_otp_key
              })
              this.data.bundle.plan = this.plans.find(e => e.id.toString() === this.$route.query.pp)
              this.component = 'ussd'
            } catch (e) {
              this.$router.push({
                name: 'online-store-trueidbox-verify',
                params: {
                  product: this.$route.params.id,
                  inventory: this.$route.params.inventory,
                  promotion: this.$route.query.promotion
                },
                query: {
                  accs: this.$route.query.accs,
                  token: this.$route.query.token,
                  type: '4',
                  camptype: 'mnp_bundling_existing',
                  paysmooth_token: this.$route.query.paysmooth_token,
                  pp: this.$route.query.pp
                }
              })
            }
            return
          } else {
            this.data.bundle.plan = this.plans.find(e => e.id.toString() === this.$route.query.pp)
            this.component = 'otp'
            return
          }
        }
        if (this.pricePlanSelected) {
          this.component = window.localStorage.getItem('route')
          return
        }
        this.component = 'plan'
      },
      async initMnp () {
        if (this.productInfo.product_type !== 'mnp') throw new Error()
        const mnpPackage = this.productInfo.mnp_package.find((e) => e.code === this.$route.params.code)
        if (!mnpPackage) throw new Error()
        this.component = this.$route.query.hash ? 'ekyc' : 'otp'
      },
      async initMnpAuto () {
        if (!localStorage.getItem('cart-id')) throw new Error()
        const inventory = this.productInfo.inventories[0]
        this.data.bundle.bundle = this.productInfo.bundles.find((e) => e.id === this.$route.params.bundle_id)
        if (!inventory || !this.data.bundle.bundle) throw new Error()
        this.data.bundle.nas = this.$route.params.nas_code
        const requests = [
          this.$store.dispatch(FETCH_PACKAGE, this.$route.params.nas_code),
          this.$store.dispatch(FETCH_PRICE_PLAN, {
            nas_code: this.$route.params.nas_code,
            bundle_propo_code: this.productInfo.bundles.find((e) => e.id === this.$route.params.bundle_id).propo_code
          })
        ]
        if (!this.$route.query.hash) {
          if (!this.$route.query.reserve_hash) throw new Error()
          requests.push(this.$store.dispatch(HOLD_MNP_RANDOM_NUMBER, {
            nas_code: this.$route.params.nas_code,
            reserve_hash: this.$route.query.reserve_hash
          }))
        }
        await Promise.all(requests)
        if (this.$route.query.hash) {
          if (!this.$route.query.pp) throw new Error()
          this.data.bundle.plan = this.plans.find(e => e.id.toString() === this.$route.query.pp)
          if (!this.data.bundle.plan) throw new Error()
          this.component = 'ekyc'
          return
        }
        this.component = 'plan'
      },
      updateFormInfo (data) {
        this.data.formInfo = data
        this.component = 'ekyc'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mnp-verify-container {
    margin: 0 24px 24px 24px;
  }
  .verify-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 24px 24px 36px;
    max-width: 1100px;
    margin: auto 12px;

    &.no-bg {
      padding: 0;
      background-color: #0000;
    }
  }

  @media screen and (max-width: 860px) {
    .mnp-verify-container {
      margin: 0;
      padding-top: 24px;
    }
  }
</style>
