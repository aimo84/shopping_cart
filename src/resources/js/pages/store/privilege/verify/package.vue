<template>
  <div class="container">
    <priceplan-info
      :data="status"
      bundle
    />
    <priceplan-chooser
      :cancel-url="cancelUrl"
      @next="pricePlanSelected"
      :camptype="this.$route.query.camptype"
    />
  </div>
</template>

<script>
  import PricePlanInfo from '@sections/priceplan-info'
  import PricePlanChooser from '@sections/priceplan-chooser'
  import qs from 'qs'

  export default {
    components: {
      'priceplan-info': PricePlanInfo,
      'priceplan-chooser': PricePlanChooser
    },
    props: {
      data: Object,
      typeId: String
    },
    data: () => ({
      product: {
        product_type: 'bundle_existing_verify'
      },
      status: {
        mobile: ''
      }
    }),
    computed: {
      packages () {
        return this.$store.state.postpaid.package.record[0]
      },
      plans () {
        return this.$store.state.postpaid.pricePlan.data.record
      },
      cancelUrl () {
        if (this.$route.query.paysmooth_token) return `/online-store/item/${this.$route.params.product}?token=${this.$route.query.token}&paysmooth_token=${this.$route.query.paysmooth_token}`
        /* refactor because add 'verify-device-bundle-existing' COMPONENT :
        if (this.$route.query.type === '3' || this.$route.query.type === '4' || this.$route.query.type === '5') return `/online-store/item/${this.$route.params.product}`
        */
        if (this.$route.query.type === '3' || this.$route.query.type === '4' || this.$route.query.type === '5') return `/online-store/item/${this.$parent.productId}`
        return '/online-store/'
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return skip && this.typeId === '5'
      }
    },
    mounted () {
      this.status.mobile = this.data.mobile_number
    },
    methods: {
      pricePlanSelected (e) {
        if (this.typeId === '3') return this.$parent.verifyBundle(e)
        if (this.typeId === '5') {
          this.$parent.setPricePlan(e)
          if (this.skipEkyc) {
            this.updateURLQuery('pp', e.id)
            return this.$parent.goTo('info-form')
          } else {
            this.$parent.createEkyc()
            return
          }
        }
        this.$parent.setPricePlan(e)
        if (this.typeId === '4') {
          return this.$parent.goTo('verify')
        }
        return this.$parent.goTo('form')
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

<style lang="scss" scoped>
  .container {
    max-width: 1100px;
    margin: auto;
  }
  @media screen and (max-width: 1148px) {
    .container {
      margin: 0 24px 24px 24px;
    }
  }
  @media screen and (max-width: 860px) {
    .container {
      margin: 0;
    }
  }
</style>
