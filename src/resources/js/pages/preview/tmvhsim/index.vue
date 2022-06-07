<template>
  <div>
    <hold-dialog ref="dialog" @on-close="onDialogClose()" />
    <loading-element v-if="loading" />
    <template v-else>
      <package-element
        :packages="packages"
        :product="product"
        :price-plans="pricePlans"
        :demo="demo"
      />
      <search-number
        ref="searchNumber"
        @update="numberUpdated"
        :loadingResult="loadingResult"
      />
      <search-result
        :result="result"
        :favorite="favorite"
        :packages="packages"
        :loading="loadingResult"
        :is-last="isLast"
        :product="product"
        :price-plans="pricePlans"
        @load-more="loadMore"
      />
      <div v-if="loadingResult" class="loading-result">Loading ...</div>
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Package from '../../store/postpaid/package'
  import SearchNumber from '../../store/postpaid/search-number'
  import SearchResult from '../../store/postpaid/search-result'
  import HoldDialog from '../../store/postpaid/hold-dialog'
  import qs from 'qs'

  import {
    FETCH_PRODUCT_INFO,
    FETCH_PACKAGES,
    FETCH_PACKAGE,
    FETCH_HOROSCOPES,
    FETCH_PRICE_PLAN,
    SEARCH_NUMBER,
    HOLD_NUMBER,
    GET_BENEFIT_ON_TOP_DEMO
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'package-element': Package,
      'hold-dialog': HoldDialog,
      'search-number': SearchNumber,
      'search-result': SearchResult
    },
    async beforeRouteEnter (to, from, next) {
      next(async (vm) => {
        try {
          vm.loading = true
          await vm.fetchNasCode()
          await vm.fetchProduct()
          vm.nas = await vm.fetchPostpaid()
          await vm.fetchPackage(vm.nas)
          await vm.$store.dispatch(FETCH_HOROSCOPES)
          await vm.fetchPricePlan()
          await vm.numberUpdated({
            favorite: [],
            dislike: [],
            sum: '00',
            page: 1
          })
          loggerAddon({
            event: 'Visit Sim',
            status: 'search number',
            productId: vm.$route.params.id,
            matcode: vm.nas
          })
          vm.loading = false
        } catch (e) {
          vm.$router.push('/')
        }
      })
    },
    data: () => ({
      loading: true,
      packages: {},
      pricePlans: [],
      demo: true,
      strDemo: 'demo',
      loadingResult: false,
      result: [],
      favorite: [],
      nas: '',
      propo: '',
      params: {},
      isLast: false,
      page: 1,
      nasCode: String
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data?.record
      },
      isMNPBundleRoute () {
        return this.$route.name === 'online-store-mnp-bundle'
      },
      isMnpBundle () {
        const validRoute = this.$route.name === 'online-store-mnp-bundle'
        const isMnpBundling = this.product.is_mnp_bundling
        const inventory = this.product.inventories.find(inventory => (
          inventory.id.toString() === this.$route.params.inventory
        ))
        const bundle = this.product.bundles.find(bundle => (
          bundle.id === this.$route.params.bundle
        ))
        return validRoute && isMnpBundling && inventory && bundle && bundle.is_typhoon
      },
      mnpBundleNas () {
        const bundle = this.product.bundles.find(bundle => (
          bundle.id === this.$route.params.bundle
        ))
        return bundle.proposition_mobile[0].nas_code
      }
    },
    methods: {
      async fetchNasCode () {
        const paramsData = { campCode: this.$route.query.campId, productId: window.clm_preview.TMVH_SIM }
        this.$store.dispatch(GET_BENEFIT_ON_TOP_DEMO, paramsData).then((data) => {
          this.nasCode = data.nasCodeList[0]
          const nasCode = this.nasCode
          const newquery = {
            campId: this.$route.query.campId,
            productid: window.clm_preview.TMVH_SIM,
            nas_code: nasCode
          }
          const newurl = `${window.location.origin}${window.location.pathname}?${qs.stringify(newquery)}`
          window.history.replaceState({ path: newurl }, '', newurl)
        })
      },
      trackAnalytics (action, e) {
        let label = ''
        window.dataLayer = window.dataLayer || []
        if (action === 'select_number_failed') label = 'invalid_number'
        if (action === 'select_number') {
          const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
          label = e.replace(regex, '$1-$2-$3')
        }
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'search_mobile_number',
          event_action: action,
          event_label: label
        })
      },
      loadMore () {
        this.numberUpdated({
          favorite: this.params.favorite,
          dislike: this.params.dislike,
          sum: this.params.sum,
          page: this.params.page + 1
        })
      },
      async numberUpdated (value) {
        if (value.page === 1) {
          this.result = []
          this.isLast = false
        }
        this.params = value
        this.loadingResult = true
        let nas = this.nas
        if (this.product.product_type === 'device_bundle_new_customer') nas = this.propo
        const data = {
          section: 'wemall',
          sim_type: this.isInstantSimPrepaid || this.isPrepaid ? 'prepaid' : 'postpaid',
          nas_code: nas,
          filter_likes: value.favorite,
          filter_dislikes: value.dislike,
          limit: document.body.clientWidth > 860 ? 36 : 10,
          page: value.page,
          token: this.$route.query.token,
          product_id: this.$route.params.id
        }
        if (value.sum !== '00') data.filter_sum = value.sum
        if (value.page) this.page = value.page
        const params = qs.stringify(data, { arrayFormat: 'indices' })
        const results = await this.$store.dispatch(SEARCH_NUMBER, {
          params,
          headers: {
            'tmvh-token': this.$route.query.token
          }
        })
        if (results.status_code === 0) {
          this.result = [...this.result, ...results.data.record]
          if (results.data.record.length === 0) this.isLast = true
        }
        this.favorite = JSON.parse(JSON.stringify(value.favorite))
        this.loadingResult = false
      },
      async fetchPricePlan () {
        if (this.product.product_type === 'device_bundle_new_customer') {
          const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
            nas_code: this.nas,
            bundle_propo_code: this.propo
          })
          this.pricePlans = data.data.record
        }
      },
      async fetchProduct () {
        await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: window.clm_preview.TMVH_SIM,
          tmvhAuth: this.$route.query.token,
          type: 'sim'
        })
      },
      async fetchPostpaid () {
        const id = window.clm_preview.TMVH_SIM.replace(/\D/g, '')
        if (this.nasCode) {
          const params = qs.stringify({
            section: 'wemall',
            page: 1,
            sim_type: 'all',
            product_id: id
          }, { arrayFormat: 'brackets' })
          const packages = await this.$store.dispatch(FETCH_PACKAGES, params)
          const nas = packages.data.record.map(item => item.nas_code)
          return this.nasCode
        }
      },
      async fetchPackage (id) {
        const data = await this.$store.dispatch(FETCH_PACKAGE, id)
        this.packages = data.record[0]
      },
      async holdNumber (id, e) {
        try {
          this.loading = true
          this.trackAnalytics('select_number', id)

          let nas = this.nasCode || this.$route.params.nas
          if (this.isLuckyHome) nas = e.product_info.propo_code

          const data = await this.$store.dispatch(HOLD_NUMBER, {
            id,
            nas_code: nas
          })

          window.dispatchEvent(new Event('check-postpaid'))
          if (data.data.mobile) {
            window.scrollTo(0, 0)
            this.$router.push({
              name: 'online-store-postpaid-verify',
              params: {
                id: window.clm_preview.TMVH_SIM,
                nas: this.nas,
                number: data.data.mobile,
                demo: this.demo
              },
              query: {
                ...this.$route.query,
                rc: this.$route.query.rc,
                demo: this.strDemo
              }
            })
          } else {
            this.loading = false
          }
        } catch (e) {
          this.trackAnalytics('select_number_failed')
          this.$refs.dialog.open(id)
        }
      },
      onDialogClose () {
        this.loading = false
        this.$nextTick(() => {
          this.$refs.searchNumber.setValue(this.params)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .loading-result {
    background-color: #eeeff3;
    padding: 24px 24px 64px;
    text-align: center;
    font-size: 22px;
  }
</style>
