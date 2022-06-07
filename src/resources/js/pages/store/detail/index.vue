<template>
    <div>
      <loading-element
        class="loading-container"
        v-if="loading"
      />
      <template v-else>
        <legacy-element v-if="mode === 'legacy'" />
        <modern-element v-if="mode === 'modern'" />
      </template>
    </div>
</template>

<script>
  import Loading from '@components/loading'

  import {
    FETCH_PRODUCT_INFO,
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_STATUS
  } from '@store/actions.type'

  export default {
    components: {
      'loading-element': Loading,
      'legacy-element': () => import('./legacy'),
      'modern-element': () => import('./modern')
    },
    data: () => ({
      loading: true
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      mode () {
        if (this.productInfo.iot_type === 'trueonline') return 'legacy'
        if (this.productInfo.product_type === 'restriction') return 'legacy'
        if (localStorage.getItem('TMH-SALE-DATA')) return 'modern'
        if (this.productInfo.product_type === 'device_bundle_existing') return 'modern'
        if (this.productInfo.product_type === 'device_bundle_new_customer') return 'modern'
        if (this.productInfo.product_type === 'product') return 'modern'
        if (this.productInfo.product_type === 'mnp') return 'modern'
        if (this.productInfo.product_type === 'multi_campaign_type') return 'modern'
        if (this.productInfo.product_type === 'sim' || this.productInfo.product_type === 'postpaid') return 'modern'
        return 'modern'
      }
    },
    async mounted () {
      try {
        const productId = this.$route.params.id.replace(/[^\w\s]/gi, '')
        const productStatusData = { product_id: productId }
        const hash = window.localStorage.getItem('cart-id')
        if (hash) productStatusData.hash = hash

        const tmhSaleData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
        if (tmhSaleData?.token) {
          const query = Object.assign({}, this.$route.query)
          query.token = tmhSaleData?.token
          this.$router.replace({ query })
        }

        await Promise.all([
          this.$store.dispatch(FETCH_PRODUCT_STATUS, productStatusData),
          this.$store.dispatch(FETCH_VERIFY_CONFIG),
          this.$store.dispatch(FETCH_PRODUCT_INFO, {
            id: productId,
            tmvhAuth: this.$route.query.token,
            paysmoothToken: this.$route.query.paysmooth_token
          })
        ])
        if (this.productInfo && this.productInfo.sim_family_info) window.localStorage.setItem('sim_family_info', JSON.stringify(this.productInfo.sim_family_info))
        if (this.allowAddcart.hash) window.localStorage.setItem('cart-id', this.allowAddcart.hash)

        if (this.$route.query.afc) {
          const afcData = {
            afc: this.$route.query.afc,
            timestamp_expired: Date.now() + 86400000
          }
          localStorage.setItem('truestore-afc', JSON.stringify(afcData))
        }

        this.loading = false
      } catch (e) {
        this.$router.push('/online-store/error')
      }
    }
  }
</script>
