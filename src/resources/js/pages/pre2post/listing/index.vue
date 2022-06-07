<template>
  <div class="container" v-if="loaded">
    <banner-element />
    <store-element />
  </div>
</template>

<script>
  import Banner from '../../store/list/banner'
  import Store from './store'
  import {
    FETCH_STORE_BANNER,
    FETCH_STORE_FILTER,
    FETCH_PACKAGES
  } from '@store/actions.type'

  export default {
    components: {
      'banner-element': Banner,
      'store-element': Store
    },
    beforeRouteLeave (to, from, next) {
      this.$emit('loading', true)
      next()
    },
    props: {
      data: Object
    },
    data: () => ({
      loaded: false
    }),
    async mounted () {
      try {
        this.$emit('loading', true)
        if (!this.data.verify_passed) throw new Error()
        if (!this.data.listing_loaded) {
          const params = 'section=wemall&sim_type=postpaid&proposition_group_code=p2p_self_service&limit=36&all=true'
          await Promise.all([
            this.$store.dispatch(FETCH_STORE_BANNER),
            this.$store.dispatch(FETCH_STORE_FILTER),
            this.$store.dispatch(FETCH_PACKAGES, {
              params,
              headers: {
                'tmvh-token': this.$route.query.token
              }
            })
          ])
        }
        this.data.listing_loaded = true
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        return this.$router.push({
          name: 'pre2post-verify',
          query: this.$route.query
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: auto;
    max-width: 1100px;
    line-height: 1em;
  }
</style>
