<template>
    <div class="pt-8">
      <loading-element
        v-if="page === 'loading'"
      />
      <verify-element
      v-if="page === 'verify'"
      ref="verify"
    />
    </div>
</template>

<script>
  import Loading from '@components/loading'
  import Verify from './verify'
  import {
  } from '@utils/common'
  import {
    FETCH_PRODUCT_INFO
  } from '@store/actions.type'
  export default {
    components: {
      'loading-element': Loading,
      'verify-element': Verify
    },
    data: () => ({
      page: 'loading'
    }),
    computed: {
      productInfo () {
        if (!this.$store.state.products.productInfo.data) return
        return this.$store.state.products.productInfo.data.record
      },
      isPaysmooth () {
        return this.productInfo.is_paysmooth
      }
    },
    async mounted () {
      const productId = this.$route.params.id.replace(/[^\w\s]/gi, '')
      try {
        await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: productId,
          tmvhAuth: this.$route.query.token,
          paysmoothToken: this.$route.query.paysmooth_token
        })
        if (!this.productInfo.is_paysmooth_tmvh_token) {
          this.$router.push(`/online-store/item/${productId}`)
        }
        this.page = 'verify'
      } catch (e) {
        this.$router.push('/online-store')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @media screen and (max-width: 1000px) {
    .pt-8 {
      padding-top: 16px;
    }
 }
</style>
