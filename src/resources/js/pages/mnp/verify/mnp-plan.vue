<template>
  <div class="plan">
    <priceplan-info
      :data="data"
      bundle
    />
    <priceplan-chooser
      :cancel-url="cancelUrl"
      :cancel-label="cancelLabel"
      :data="data"
      @next="next"
      @route="$emit('route', $event)"
    />
  </div>
</template>

<script>
  import PricePlanInfo from '@sections/priceplan-info'
  import PricePlanChooser from '@sections/priceplan-chooser'

  export default {
    components: {
      'priceplan-info': PricePlanInfo,
      'priceplan-chooser': PricePlanChooser
    },
    props: {
      data: Object
    },
    computed: {
      cancelUrl () {
        const route = this.$router.resolve(
          this.$route.name === 'mnp-auto-verify' ? {
            name: 'online-store-mnp-auto-share-plan',
            params: {
              id: this.$route.params.id,
              nas_code: this.$route.params.nas_code,
              bundle_id: this.$route.params.bundle_id
            },
            query: {
              token: this.$route.query.token
            }
          }
          : {
            name: 'online-store-detail',
            params: {
              id: this.$route.params.id
            },
            query: {
              token: this.$route.query.token
            }
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
    methods: {
      next (e) {
        this.data.bundle.plan = e
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'choose_the_package',
          event_action: 'verify',
          event_label: `${e.name} ${e.price} Baht`
        })
        const isOneStep = this.data.bundle.bundle.campaign_mnp_type === 'one_step'
        return isOneStep ? this.$emit('route', 'checklist') : this.$emit('route', 'otp')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .plan {
    line-height: 24px;
    padding-bottom: 24px;
    text-align: left;
  }
</style>
