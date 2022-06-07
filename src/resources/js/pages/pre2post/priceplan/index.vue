<template>
  <div class="container" v-if="loaded">
    <priceplan-info
      :data="status"
      bundle
    />
    <priceplan-chooser
      :cancel-label="cancelLabel"
      :cancel-url="cancelUrl"
      @next="pricePlanSelected"
      pre2post
    />
  </div>
</template>

<script>
  import PricePlanInfo from '@sections/priceplan-info'
  import PricePlanChooser from '@sections/priceplan-chooser'
  import {
    FETCH_PACKAGE,
    FETCH_PRICE_PLAN,
    CREATE_NEW_EKYC
  } from '@store/actions.type'

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
      loaded: false,
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
      nascode () {
        return ''
      },
      cancelUrl () {
        const route = this.$router.resolve({
          name: 'pre2post-listing',
          params: this.$route.params,
          query: this.$route.query
        })
        return route.href
      },
      cancelLabel () {
        return {
          th: 'ย้อนกลับ',
          en: 'Cancel'
        }
      }
    },
    beforeRouteLeave (to, from, next) {
      this.$emit('loading', true)
      next()
    },
    async mounted () {
      try {
        this.$emit('loading', true)
        if (!this.data.verify_passed) throw new Error()
        await Promise.all([
          this.$store.dispatch(FETCH_PACKAGE, this.$route.params.nas_code),
          this.$store.dispatch(FETCH_PRICE_PLAN, {
            section: 'wemall',
            sim_type: 'postpaid',
            nas_code: this.$route.params.nas_code
          })
        ])
        if (!this.packages) throw new Error()
        if (!this.plans) throw new Error()
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        this.$router.push({
          name: 'pre2post-listing',
          query: this.$route.query
        })
      }
    },
    methods: {
      async pricePlanSelected (e) {
        this.$emit('loading', true)
        const route = this.$router.resolve({
          name: 'pre2post-address',
          params: this.$route.params,
          query: {
            ...this.$route.query,
            pp: e.id
          }
        })
        const result = await this.$store.dispatch(CREATE_NEW_EKYC, {
          answers: {
            callback_url: `${location.origin}${route.href}`
          }
        })
        window.location.href = result.form_url
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1100px;
    margin: auto;
    padding: 48px 0;
  }
  @media screen and (max-width: 1148px) {
    .container {
      margin: 0 24px 24px 24px;
    }
  }
  @media screen and (max-width: 860px) {
    .container {
      margin: 0;
      padding: 16px 0;
    }
  }
</style>
