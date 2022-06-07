<template>
  <div id="search-number-title-id">
    <div class="selection-number-header text-3xl font-bold px-3">{{ Locale.select_your_new_num[$i18n.locale] }}</div>
    <div class="selection-number-container">
      <hold-dialog ref="dialog" @on-close="onDialogClose()" />
      <loading-element v-if="loading" />
      <template v-else>
        <search-number
          ref="searchNumber"
          @update="numberUpdated"
          @getValue="getFavoriteAndDislike"
        />

        <search-result
          :result="result"
          :favorite="favorite"
          :packages="packages"
          :loading="loadingResult"
          :is-last="isLast"
          :product="product"
          :price-plans="pricePlans"
          :totalNumberItem="totalNumberItem"
          :selectedNumberIndexProp="selectedNumberIndex"
          :numberTypes="numberTypes"
        />

        <paginate-element v-if="result.length > 0"
          :page-count="totalPagePaginate"
          :page-range="configPaginate.pageRange"
          :margin-pages="configPaginate.marginPage"
          :click-handler="loadMore"
          :prev-text="'Prev Page'"
          :next-text="'Next Page'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :hide-prev-next="true">
        </paginate-element>

      </template>
    </div>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import HoldDialog from '../hold-dialog.vue'
  import SearchNumber from './new-design-search-number'
  import SearchResult from './new-design-search-result'
  import qs from 'qs'
  import Locale from '../locale.json'

  import {
    FETCH_POSTPAID,
    FETCH_PACKAGE,
    FETCH_PRODUCT_STATUS,
    FETCH_HOROSCOPES,
    SEARCH_NUMBER,
    HOLD_NUMBER,
    FETCH_PRICE_PLAN,
    FETCH_PACKAGES,
    HOLD_MNP_RANDOM_NUMBER,
    FETCH_NUMBER_PATTERN
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  import Paginate from 'vuejs-paginate'

  export default {
    components: {
      'loading-element': Loading,
      'hold-dialog': HoldDialog,
      'search-number': SearchNumber,
      'search-result': SearchResult,
      'paginate-element': Paginate
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'online-store-lucky' || to.name === 'online-store-lucky-home' || to.name === 'online-store-lucky999-home' || to.name === 'online-store-lucky999') {
        this.loading = true
      }
      next()
    },
    async beforeRouteEnter (to, from, next) {
      next(async (vm) => {
        try {
          vm.loading = true
          if (vm.isMNPAutoRoute) {
            await vm.$store.dispatch(FETCH_PRODUCT_STATUS, { product_id: vm.$route.params.id })
            const hash = window.localStorage.getItem('cart-id')
            if (!hash) {
              window.localStorage.setItem('cart-id', vm.allowAddcart.hash)
            }
          }
          vm.loading = false
        } catch (e) {
          vm.$router.push('/')
        }
      })
    },
    props: {
      newCustomerParams: Object,
      selectedPackage: { Number, String },
      selectedNumberIndex: Number
    },
    data: () => ({
      Locale,
      packages: {},
      result: [],
      favorite: [],
      loading: true,
      loadingResult: false,
      postpaidSim: [],
      nas: '',
      propo: '',
      pricePlans: [],
      params: {},
      isLast: false,
      page: 1,
      numberTypes: [],
      patternId: '',
      baselines: '',
      selectedPackagePrice: [],
      selectedGroup: [],
      isFavorite: [],
      isDislike: [],
      console: false,
      totalPagePaginate: 0,
      totalNumberItem: 0
    }),
    computed: {
      packagesFilter () {
        if (this.isLucky9999Home && this.packages.length > 0) return this.packages.sort((a, b) => b.baseline - a.baseline)
        return this.packages
      },
      types () {
        return {
          1: 'blue',
          2: 'yellow',
          3: 'green',
          4: 'red',
          5: 'gray'
        }
      },
      product () {
        if (this.isLuckyHome || this.isLucky9999Home) return {}
        if (this.$parent.productInfo) {
          return this.$parent.productInfo
        }
        return this.$store.state.products.productInfo.data.record
      },
      isLucky9999Home () {
        return this.$route.name === 'online-store-lucky999-home'
      },
      isLucky9999 () {
        return this.$route.name === 'online-store-lucky999'
      },
      isLuckyHome () {
        return this.$route.name === 'online-store-lucky-home'
      },
      isLucky () {
        return this.$route.name === 'online-store-lucky'
      },
      isPrepaid () {
        return this.$route.name === 'online-store-prepaid'
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
      isMNPBundleRoute () {
        return this.$route.name === 'online-store-mnp-bundle'
      },
      isMNPAutoRoute () {
        return this.$route.name === 'online-store-mnp-auto-share-plan'
      },
      isInstantSimPrepaid () {
        return this.$route.name === 'online-store-instantsim' && this.product.product_type === 'prepaid'
      },
      mnpBundleNas () {
        const bundle = this.product.bundles.find(bundle => (
          bundle.id === this.newCustomerParams.bundle
        ))
        return bundle.proposition_mobile[0].nas_code
      },
      mnpAutoNas () {
        return this.$route.params.nas_code
      },
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      configPaginate () {
        if (document.body.clientWidth < 860) {
          return {
            pageRange: 2,
            marginPage: 1
          }
        }
        return {
          pageRange: 3,
          marginPage: 2
        }
      }
    },
    async mounted () {
      await this.loadNewCustomerData()
      if (this.$route.query.afc) {
        const afcData = {
          afc: this.$route.query.afc,
          timestamp_expired: Date.now() + 86400000
        }
        localStorage.setItem('truestore-afc', JSON.stringify(afcData))
      }

      this.$watch('selectedPackage', () => {
        this.loadNewCustomerData()
      })
    },
    methods: {
      updateSelectedNumber (number, itemIndex) {
        this.$parent.selectedNumberIndex = itemIndex
        this.$parent.isSelectedNumbers = true
        this.$parent.selectedNumbers = { mobile: number }
      },
      async loadNewCustomerData () {
        try {
          this.loading = true
          this.nas = await this.fetchPostpaid()
          await this.fetchPackage(this.nas)
          await this.$store.dispatch(FETCH_HOROSCOPES)
          if (this.product.product_type === 'device_bundle_new_customer') {
            await this.fetchPricePlan()
          }
          await this.numberUpdated({
            favorite: [],
            dislike: [],
            sum: '00',
            page: 1
          })
          loggerAddon({
            event: 'Visit Sim',
            status: 'search number',
            productId: this.newCustomerParams.id,
            matcode: this.nas
          })

          this.loading = false
        } catch (e) {
          console.log(e)
        }
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
      loadMore (pageNum) {
        this.numberUpdated({
          favorite: this.params.favorite,
          dislike: this.params.dislike,
          sum: this.params.sum,
          page: pageNum
        })
      },
      getFavoriteAndDislike (value) {
        this.isFavorite = value.favorite
        this.isDislike = value.dislike
      },
      async fetchPattern () {
        if (this.isLucky9999Home) {
          await this.$store.dispatch(FETCH_NUMBER_PATTERN).then(({ data }) => {
            this.numberTypes = data.record.filter((e) => e.pattern !== 'NONE')
            this.selectedGroup = this.numberTypes.map((e) => e.id)
          })
        }
      },
      async numberUpdated (value) {
        if (value.page === 1) {
          this.result = []
          this.isLast = false
        }
        this.params = value
        this.loadingResult = true
        let nas = this.nas
        if (this.isMNPBundleRoute && this.isMnpBundle) nas = this.mnpBundleNas
        else if (this.isMNPAutoRoute) nas = this.mnpAutoNas
        else if (this.product.product_type === 'device_bundle_new_customer') nas = this.propo

        let mobilePatternIds = null
        let baselines = null
        if (this.numberTypes) {
          mobilePatternIds = this.numberTypes.map((e) => e.id)
        }
        if (this.selectedGroup.length > 0) {
          mobilePatternIds = this.selectedGroup.join(',')
        }
        if ((this.selectedPackagePrice.length > 0 && value.page !== 1) || (value.favorite || value.dislike)) {
          baselines = this.selectedPackagePrice.join(',')
        }
        const data = {
          section: 'wemall',
          sim_type: this.isInstantSimPrepaid || this.isPrepaid ? 'prepaid' : 'postpaid',
          nas_code: nas,
          filter_likes: value.favorite,
          filter_dislikes: value.dislike,
          limit: 12,
          page: value.page,
          token: this.$route.query.token,
          product_id: this.$route.params.id
        }
        if (this.isLucky9999Home) {
          data.mobile_pattern_ids = mobilePatternIds
          data.baselines = baselines
          data.filter_likes = this.isFavorite
          data.filter_dislikes = this.isDislike
        }
        if (value.baselines) data.baselines = value.baselines
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
          const totalNumberItem = results.data.pagination.total
          this.totalPagePaginate = Math.round(totalNumberItem / data.limit)
          this.totalNumberItem = totalNumberItem
          this.result = results.data.record
          if (results.data.record.length === 0) this.isLast = true
        }
        this.favorite = JSON.parse(JSON.stringify(value.favorite || this.isFavorite))
        this.loadingResult = false
      },
      async fetchPricePlan () {
        if (this.isMNPBundleRoute && this.isMnpBundle) return
        if (this.isMNPAutoRoute) return
        if (this.product.product_type === 'device_bundle_new_customer') {
          const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
            nas_code: this.nas,
            bundle_propo_code: this.propo
          })
          this.pricePlans = data.data.record
        }
      },
      async fetchPostpaid () {
        if (this.isLuckyHome) {
          const params = qs.stringify({
            section: 'wemall',
            sim_type: 'postpaid',
            proposition_group_code: 'nice_number',
            limit: 36
          }, { arrayFormat: 'brackets' })
          const packages = await this.$store.dispatch(FETCH_PACKAGES, params)
          this.packages = packages.data.record
          if (this.isLucky9999Home) {
            this.selectedPackagePrice = this.packages.map((e) => e.baseline)
          }
          const nas = this.packages.reduce((acc, cur) => {
            acc.push(cur.nas_code)
            return acc
          }, [])
          return nas.join(',')
        }
        if (this.isLucky9999Home) {
          const params = qs.stringify({
            section: 'wemall',
            sim_type: 'postpaid',
            proposition_group_code: 'lucky_number',
            limit: 36
          }, { arrayFormat: 'brackets' })
          const packages = await this.$store.dispatch(FETCH_PACKAGES, params)
          this.packages = packages.data.record
          if (this.isLucky9999Home) {
            this.selectedPackagePrice = this.packages.map((e) => e.baseline)
          }
          const nas = this.packages.reduce((acc, cur) => {
            acc.push(cur.nas_code)
            return acc
          }, [])
          return nas.join(',')
        }
        const id = this.$route.params.id.replace(/\D/g, '')
        if (this.isMNPBundleRoute && this.isMnpBundle) return this.mnpBundleNas
        if (this.isMNPAutoRoute) return this.mnpAutoNas
        if (this.product.product_type === 'device_bundle_new_customer') {
          try {
            const bundle = this.product.bundles.find(bundle => (
              bundle.id === this.newCustomerParams.bundle
            ))
            const proposition = bundle.proposition_mobile.find(proposition => (
              proposition.nas_code === this.newCustomerParams.nas
            ))
            if (!bundle || !proposition) throw new Error()
            this.propo = bundle.propo_code
            return this.newCustomerParams.nas
          } catch {
            throw new Error()
          }
        }
        if (this.$route.query.nas_code) {
          const params = qs.stringify({
            section: 'wemall',
            page: 1,
            sim_type: 'all',
            product_id: id
          }, { arrayFormat: 'brackets' })
          const headers = this.isInstantSimPrepaid ? {} : { 'tmvh-token': this.$route.query.token }
          const packages = await this.$store.dispatch(FETCH_PACKAGES, {
            params,
            headers
          })
          const nas = packages.data.record.map(item => item.nas_code)
          if (nas.includes(this.$route.query.nas_code)) {
            return this.$route.query.nas_code
          } else {
            throw new Error()
          }
        }
        if (this.product.product_type === 'happy_digital') {
          const postpaid = await this.$store.dispatch(FETCH_POSTPAID, id)
          return postpaid.propo_code
        }
        throw new Error()
      },
      async fetchPackage (id) {
        if (this.isLuckyHome || this.isLucky9999Home) return
        const data = await this.$store.dispatch(FETCH_PACKAGE, id)
        if (data.record[0]) {
          this.packages = data.record[0]
        }
        if (this.packages && this.packages.proposition_amdoc) {
          this.updateURLQuery('proposition_amdoc', this.packages.proposition_amdoc)
          window.localStorage.setItem('proposition_amdoc', this.packages.proposition_amdoc)
        }
      },
      async holdNumber (id, e) {
        try {
          this.trackAnalytics('select_number', id)
          if (this.isMNPBundleRoute && this.isMnpBundle) {
            const result = await this.$store.dispatch(HOLD_MNP_RANDOM_NUMBER, {
              nas_code: this.mnpBundleNas,
              mobile_number: id
            })
            return this.$router.push({
              name: 'mnp-bundle-verify',
              params: {
                id: this.$route.params.id,
                inventory: this.$route.params.inventory,
                bundle: this.$route.params.bundle
              },
              query: {
                ...this.$route.query,
                reserve_hash: result.number_random_ticket_hash,
                mobile_number: id
              }
            })
          }
          if (this.isMNPAutoRoute) {
            const result = await this.$store.dispatch(HOLD_MNP_RANDOM_NUMBER, {
              nas_code: this.mnpAutoNas,
              mobile_number: id
            })
            return this.$router.push({
              name: 'mnp-auto-verify',
              params: {
                id: this.$route.params.id,
                nas_code: this.$route.params.nas_code,
                bundle_id: this.$route.params.bundle_id
              },
              query: {
                ...this.$route.query,
                reserve_hash: result.number_random_ticket_hash
              }
            })
          }

          let nas = this.$route.query.nas_code || this.newCustomerParams.nas
          if (this.isLuckyHome || this.isLucky9999Home) nas = e.product_info.propo_code

          const data = await this.$store.dispatch(HOLD_NUMBER, {
            id,
            nas_code: nas
          })

          if (this.postpaidSim) {
            localStorage.setItem('postpaid-sim-data', JSON.stringify(data.data))
          } else {
            localStorage.setItem('postpaid-data', JSON.stringify(data.data))
          }
          window.dispatchEvent(new Event('check-postpaid'))
          if (data.data.mobile) {
            // window.scrollTo(0, 0)
            if (this.$route.name === 'online-store-instantsim') {
              this.$router.push({
                name: 'online-store-instantsim-verify',
                params: {
                  id: this.$route.params.id,
                  nas: this.nas,
                  number: data.data.mobile
                },
                query: { ...this.$route.query }
              })
            } else if (this.isPrepaid) {
              localStorage.setItem('prepaid-sim-number', data.data.mobile)
              this.$router.push({
                name: 'online-store-prepaid-verify',
                params: {
                  id: this.$route.params.id,
                  nas: this.nas,
                  number: data.data.mobile
                },
                query: { ...this.$route.query }
              })
            } else if (this.product.product_type === 'device_bundle_new_customer') {
              this.$emit('selectedNumbers', { selectedNumbers: data.data.mobile })
              this.loading = false
            } else if (this.isLucky || this.isLuckyHome) {
              const productId = this.isLuckyHome ? `L${e.product_info.product_id}` : this.$route.params.id
              localStorage.setItem('company_code', e.company_code)
              this.$router.push({
                name: 'online-store-lucky-verify',
                params: {
                  id: productId,
                  number: data.data.mobile,
                  nas
                },
                query: {
                  ...this.$route.query
                }
              })
            } else if (this.isLucky9999Home || this.isLucky9999) {
              const productId = this.isLucky9999Home ? `L${e.product_info.product_id}` : this.$route.params.id
              localStorage.setItem('company_code', e.company_code)
              this.$router.push({
                name: 'online-store-lucky-9999-verify',
                params: {
                  id: productId,
                  number: data.data.mobile,
                  nas
                },
                query: {
                  ...this.$route.query
                }
              })
            } else {
              localStorage.setItem('company_code', e.company_code)
              this.$router.push({
                name: 'online-store-postpaid-verify',
                params: {
                  id: this.$route.params.id,
                  nas: this.nas,
                  number: data.data.mobile
                },
                query: {
                  ...this.$route.query,
                  rc: this.$route.query.rc
                }
              })
            }
          } else {
            this.loading = false
          }
        } catch (e) {
          this.trackAnalytics('select_number_failed')
          if (this.product.product_type === 'device_bundle_new_customer') {
            this.$parent.isSelectedNumbers = false
            this.selectedNumberIndex = null
          }
          this.$refs.dialog.open(id)
        }
      },
      onDialogClose () {
        this.loading = false
        this.$nextTick(() => {
          this.$refs.searchNumber.setValue(this.params)
        })
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

<style lang="scss">
  .selection-number-header {
    padding-bottom: 7px;
  }
  .selection-number-container {
    background-color: #fff;
    padding: 18px 27px;

  }
  .pagination {
    list-style-type: none;
    margin: 40px 0 18px;
    padding: 0;
    text-align: center;

    li {
      display: inline-block;
      border: 2px solid #E62627;
      border-radius: 4px;
    }

    li:not(:last-child) {
      margin-right: 10px;
    }

    a {
      padding: 5px 12px;
      min-width: 32px;
      font-size: 24px;
      line-height: 29px;
      display: block;
    }

    .active {
      color: #fff;
      background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
    }
  }

  .loading-result {
    background-color: #fff;
    height: 550px;
    line-height: 550px;
    text-align: center;
    font-size: 22px;
  }

  @media screen and (max-width: 450px) {
    .selection-number-container {
      padding: 20px 12px;
    }
    .pagination {
      font-size: 15px;
      margin: 30px 0 8px;

      li:not(:last-child) {
        margin-right: 5px;
      }

      a {
        padding: 2px 6px;
      }
    }
  }
  .banner-container {
    img {
      width: 100%;
      display: block;
    }
  }

  .filter-container {
    background: #eeeff2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 24px;

    & > .title {
      font-size: 32px;
      text-align: center;
      font-family: "TrueBold";
    }

    .filter-card {
      background-color: #fff;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      width: 1050px;
      margin-bottom: 20px;

      .filter-title {
        padding: 16px;
        text-align: center;
        font-size: 32px;
        font-family: 'TrueBold';
        color: #000;
      }
      &.group .filter-content {
        display: grid;
        justify-content: center;
        font-size: 1.5rem;
        line-height: 1em;
        margin-bottom: 20px;

        .filter-group {
          padding: 5px 12px;
          display: grid;
          grid-template-columns: 60px 1fr;
          justify-content: center;
          align-items: center;
          grid-gap: 28px;
          position: relative;

          .type {
            display: inline-flex;
            font-family: 'TrueBold';
            z-index: 1;
            font-size: 2.125rem;
            font-weight: 700;

            img {
              width: 35px;
              height: 35px;
            }
            .text-blue {
              color: #20639B;
            }
            .text-red {
              color: #EA3019;
            }
            .text-green {
              color: #219653;
            }
            .text-yellow {
              color: #EABC19;
            }
            .text-gray {
              color: #535353;
            }
          }

          .filter-options {
            display: grid;
            grid-gap: 14px;
            z-index: 1;

            input {
              display: none;
            }

            input:checked + label .checkbox {
              &.checkbox-orange {
                border-color: #f2994a;
                background-color: #f2994a;
              }
              &.checkbox-blue {
                border-color: #20639B;
                background-color: #20639B;
              }
              &.checkbox-red {
                border-color: #EA3019;
                background-color: #EA3019;
              }
              &.checkbox-green {
                border-color: #219653;
                background-color: #219653;
              }
              &.checkbox-yellow {
                border-color: #EABC19;
                background-color: #EABC19;
              }
              &.checkbox-gray {
                border-color: #535353;
                background-color: #535353;
              }

              svg .tick {
                stroke: #fff;
              }
            }

            label {
              display: grid;
              grid-template-columns: auto 1fr;
              grid-gap: 12px;
              align-items: center;

              .checkbox {
                width: 18px;
                height: 18px;
                border: 1px solid #dbdbdb;
                border-radius: 2px;
                display: grid;
                place-items: center;
                cursor: pointer;

                svg {
                  height: 12px;
                  width: 12px;
                }
              }

              span {
                cursor: pointer;
              }
            }
          }
        }
      }
      &.price .filter-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 32px 28px;

        input {
          display: none;
        }

        .price-item {
          padding: 9px 11px;
           border: 2px solid #3b3534;
          .button {
            width: 100%;
            color: #fff;
            background-color: #3b3534;
            height: 26px;
            border-radius: 8px;
            font-size: 24px;
            display: grid;
            align-content: space-around;
            grid-gap: 6px;
            cursor: pointer;

            svg {
              display: none;
            }
          }
        }

        input:checked + .price-item {
          padding: 9px 11px;
          border: 2px solid #3b3534;

          .button {
            font-size: 24px;
            background-color: #3b3534;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }

          &.package399 {
            border: 2px solid #EABC19;

          .button {
            font-size: 24px;
            background-color: #EABC19;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }
          }

          &.package599 {
            border: 2px solid #EA9619;

          .button {
            font-size: 24px;
            background-color: #EA9619;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }
          }

          &.package899 {
            border: 2px solid #EA7119;

          .button {
            font-size: 24px;
            background-color: #EA7119;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }
          }

          &.package1199 {
            border: 2px solid #EA4B19;

          .button {
            font-size: 24px;
            background-color: #EA4B19;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }
          }

          &.package1399 {
            border: 2px solid #E62627;

          .button {
            font-size: 24px;
            background-color: #E62627;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            grid-gap: 6px;
            height: 26px;

              svg {
                  display: block;
              }
           }
          }

        }

        .price-item {
          border: 1px solid #979797;
          margin: 6px;
          border-radius: 8px;
          padding: 10px 12px;
          display: grid;
          justify-items: center;
          text-align: center;
          grid-gap: 6px;
          width: 128px;
          grid-template-rows: auto 1fr auto;

          .grade {
            color: #eb5757;
            font-size: 48px;
            font-family: "TrueBold";
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: flex-start;

            span {
              font-size: 24px;
            }
          }

          .content {
            display: grid;
            grid-gap: 6px;
            grid-template-rows: 1fr auto;

            .description {
              font-size: 20px;
              font-family: 'TrueBold';
              line-height: 14px;
            }
            .price {
              color: #000;
              font-size: 40px;
              font-family: "TrueBold";

              span {
                font-size: 18px;
              }
            }
          }

        }
      }
    }
  }

@media screen and (max-width: 640px) {
    .filter-container {
      padding: 16px;

      .filter-card.group .filter-content {

        .filter-group {
          grid-gap: 22px;
        }
      }

      .filter-card.price .filter-content {
        padding: 0 16px 16px;
      }
    }
    .number-container .numbers {
      padding: 16px;
      grid-template-columns: 1fr 1fr;

      .number .title {
        font-size: 20px;
      }
    }
}

</style>
