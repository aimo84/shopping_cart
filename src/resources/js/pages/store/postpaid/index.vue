<template>
  <div
    class="selection-number-container"
    :class="[isOnlineStoreDetail ? 'OnlineStoreDetailClass' : '']"
  >
    <hold-dialog
      ref="dialog"
      @on-close="onDialogClose()"
    />
    <loading-element v-if="loading || !product" />
    <template v-else>
      <lucky-carousel
        v-if="isLuckyHome || isLucky9999Home"
        :packages="packages"
      />
      <template v-if="isLucky9999Home">
        <div class="banner-container">
          <img :src="lucky9999Banner" />
        </div>
      </template>
      <package-element
        v-if="!isLuckyHome && !isLucky9999Home "
        :packages="packages"
        :product="product"
        :price-plans="pricePlans"
        :sim-source-type="simSourceType"
        :bundle-param="newCustomerParams ? newCustomerParams.bundle : $route.params.bundle"
      />
      <search-number
        v-if="!(isPrepaid && isEsim)"
        ref="searchNumber"
        @update="numberUpdated"
        :loadingResult="loadingResult"
        @getValue="getFavoriteAndDislike"
      />

      <!-- LuckySim filter package -->
      <div
        v-if="isLuckyHome"
        class="filter-container"
      >
        <div class="filter-card price">
          <div class="filter-title">{{ Locale.lucky9999.select_package[$i18n.locale] }}</div>
          <div class="filter-content">
            <template v-for="(item, key) in packagesFilter">
              <input
                type="checkbox"
                name="price"
                :id="`price-${key}`"
                :key="`price-input-${key}`"
                v-model="selectedPackagePrice"
                :value="item.baseline"
              />
              <div
                class="price-item"
                :class="`package${item.baseline}`"
                :key="`price-label-${key}`"
              >
                <div class="content">
                  <div class="description">{{ Locale.lucky9999.minimun_price[$i18n.locale] }}</div>
                  <div class="price">{{ item.baseline }}<span>฿</span></div>
                </div>
                <label
                  class="button"
                  :for="`price-${key}`"
                >
                  <svg
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.83l3.33 3.34L11 1.5"
                      stroke="#fff"
                      stroke-width="2"
                    />
                  </svg>
                  <span>{{ Locale.lucky9999.select[$i18n.locale] }}</span>
                </label>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- LuckySim filter package -->

      <div
        v-if="(isLucky9999 || isLucky9999Home) && this.numberTypes.length > 0"
        class="filter-container"
      >
        <!-- filter price -->
        <div class="filter-card price">
          <div class="filter-title">{{ Locale.lucky9999.select_package[$i18n.locale] }}</div>
          <div class="filter-content">
            <template v-for="(item, key) in packagesFilter">
              <input
                type="checkbox"
                name="price"
                :id="`price-${key}`"
                :key="`price-input-${key}`"
                v-model="selectedPackagePrice"
                :value="item.baseline"
              />
              <div
                class="price-item"
                :class="`package${item.baseline}`"
                :key="`price-label-${key}`"
              >
                <div class="content">
                  <div class="description">{{ Locale.lucky9999.minimun_price[$i18n.locale] }}</div>
                  <div class="price">{{ item.baseline }}<span>฿</span></div>
                </div>
                <label
                  class="button"
                  :for="`price-${key}`"
                >
                  <svg
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.83l3.33 3.34L11 1.5"
                      stroke="#fff"
                      stroke-width="2"
                    />
                  </svg>
                  <span>{{ Locale.lucky9999.select[$i18n.locale] }}</span>
                </label>
              </div>
            </template>
          </div>
        </div>

        <!-- filter number types -->
        <div class="filter-card group">
          <div class="filter-title">{{ Locale.lucky9999.number_format[$i18n.locale] }}</div>
          <div class="filter-content">
            <div
              v-for="(item, key) in this.numberTypes"
              :key="key"
              class="filter-group"
            >
              <div class="type">
                <span :class="item.pattern.charAt(0) === 'X' ? `text-${types[key + 1]}` : ''">{{item.pattern.charAt(0)}}</span>
                <span :class="item.pattern.charAt(1) === 'X' ? `text-${types[key + 1]}` : ''">{{item.pattern.charAt(1)}}</span>
                <span :class="item.pattern.charAt(2) === 'X' ? `text-${types[key + 1]}` : ''">{{item.pattern.charAt(2)}}</span>
                <span :class="item.pattern.charAt(3) === 'X' ? `text-${types[key + 1]}` : ''">{{item.pattern.charAt(3)}}</span>
              </div>
              <div class="filter-options">
                <input
                  type="checkbox"
                  :name="key"
                  :id="key"
                  :value="item.id"
                  v-model="selectedGroup"
                />
                <label :for="`${key}`">
                  <div
                    class="checkbox"
                    :class="`checkbox-${types[key + 1]}`"
                  >
                    <svg
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="tick"
                        d="M1 5.5L5 9.5L13 1.5"
                        stroke="#DBDBDB"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <span>
                    <template v-if="$i18n.locale === 'th'">{{item.name_th}}</template>
                    <template v-if="$i18n.locale === 'en'">{{item.name_en}}</template>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <search-result
        :result="result"
        :favorite="favorite"
        :packages="packages"
        :loading="loadingResult"
        :is-last="isLast"
        :product="product"
        :price-plans="pricePlans"
        :totalNumberItem="totalNumberItem"
        :numberTypes="numberTypes"
        :types="types"
        :selectedPackagePrice="selectedPackagePrice"
        :selectedGroup="selectedGroup"
        @load-more="loadMore"
        @update="numberUpdated"
      />
      <div
        v-if="loadingResult"
        class="loading-result"
      >Loading ...</div>
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import HoldDialog from './hold-dialog'
  import Package from './package'
  import SearchNumber from './search-number'
  import SearchResult from './search-result'
  import LuckyCarousel from './lucky-carousel'
  import qs from 'qs'
  import Locale from './locale.json'

  import {
    FETCH_PRODUCT_INFO,
    FETCH_VERIFY_CONFIG,
    FETCH_POSTPAID,
    FETCH_PACKAGE,
    FETCH_PRODUCT_STATUS,
    FETCH_PRODUCT_VERIFY_ESIM,
    FETCH_HOROSCOPES,
    SEARCH_NUMBER,
    HOLD_NUMBER,
    FETCH_PRICE_PLAN,
    FETCH_PACKAGES,
    HOLD_MNP_RANDOM_NUMBER,
    FETCH_NUMBER_PATTERN,
    FETCH_LUCKY9999_CONFIG
  } from '@store/actions.type'

  import { loggerAddon } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'hold-dialog': HoldDialog,
      'package-element': Package,
      'search-number': SearchNumber,
      'search-result': SearchResult,
      'lucky-carousel': LuckyCarousel
    },
    beforeRouteLeave (to, from, next) {
      if (
        to.name === 'online-store-lucky' ||
        to.name === 'online-store-lucky-home' ||
        to.name === 'online-store-lucky999-home' ||
        to.name === 'online-store-lucky999'
      ) {
        this.loading = true
      }
      next()
    },
    async beforeRouteEnter (to, from, next) {
      next(async (vm) => {
        try {
          if (vm.isMNPAutoRoute) {
            await vm.$store.dispatch(FETCH_PRODUCT_STATUS, {
              product_id: vm.$route.params.id
            })
            const hash = window.localStorage.getItem('cart-id')
            if (!hash) {
              window.localStorage.setItem('cart-id', vm.allowAddcart.hash)
            }
          }

          await vm.loadNewCustomerData()
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
      packages: [],
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
      totalPagePaginate: 0,
      totalNumberItem: 0,
      hasRefId: false
    }),
    computed: {
      packagesFilter () {
        if ((this.isLucky9999Home || this.isLuckyHome) && this.packages.length > 0) {
          return this.packages.sort((a, b) => b.baseline - a.baseline)
        }
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
        return this.$store.state.products.productInfo?.data?.record
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
      isOnlineStoreDetail () {
        return this.$route.name === 'online-store-detail'
      },
      isMnpBundle () {
        const validRoute = this.$route.name === 'online-store-mnp-bundle'
        const isMnpBundling = this.product.is_mnp_bundling
        const inventory = this.product.inventories.find(
          (inventory) => inventory.id.toString() === this.$route.params.inventory
        )
        const bundle = this.product.bundles.find(
          (bundle) => bundle.id === this.$route.params.bundle
        )
        return (
          validRoute && isMnpBundling && inventory && bundle && bundle.is_typhoon
        )
      },
      isMNPBundleRoute () {
        return this.$route.name === 'online-store-mnp-bundle'
      },
      isMNPAutoRoute () {
        return this.$route.name === 'online-store-mnp-auto-share-plan'
      },
      isInstantSimPrepaid () {
        return (
          this.$route.name === 'online-store-instantsim' &&
          this.product.product_type === 'prepaid'
        )
      },
      mnpBundleNas () {
        const bundle = this.product.bundles.find(
          (bundle) => bundle.id === this.$route.params.bundle
        )
        return bundle.proposition_mobile[0].nas_code
      },
      mnpAutoNas () {
        return this.$route.params.nas_code
      },
      allowAddcart () {
        return this.$store.state.products.productStatus.data
      },
      simSourceType () {
        return this.$store.state.products.productSim.data?.sim_source_type || []
      },
      lucky9999Banner () {
        return (
          this.$store.state.postpaid.lucky9999Config?.banner ||
          '/images/lucky-9999/lucky-9999-banner-2.jpg'
        )
      },
      isEsim () {
        return this.$route.query.source_type === 'e-sim'
      }
    },
    async mounted () {
      if (this.$route.query.afc) {
        const afcData = {
          afc: this.$route.query.afc,
          timestamp_expired: Date.now() + 86400000
        }
        localStorage.setItem('truestore-afc', JSON.stringify(afcData))
      }
      if (this.isLucky9999Home) { await this.$store.dispatch(FETCH_LUCKY9999_CONFIG) }
    },
    methods: {
      async loadNewCustomerData () {
        try {
          this.loading = true
          await this.fetchProduct()
          this.nas = await this.fetchPostpaid()
          await this.fetchPackage(this.nas)
          await this.$store.dispatch(FETCH_HOROSCOPES)
          await this.fetchPricePlan()
          await this.fetchPattern()
          await this.numberUpdated({
            favorite: [],
            dislike: [],
            sum: '00',
            page: 1
          })

          // [TODO] call new API for check
          if (this.product && this.product.product_sim_source_type && this.product.product_sim_source_type === true) {
            let bundle = null
            let simProduct = null

            if (this.$route.params.bundle) {
              bundle = this.product.bundles.find(
                (bundle) => bundle.id === this.$route.params.bundle
              )
            } else if (this.newCustomerParams) {
              bundle = this.product.bundles.find(
                (bundle) => bundle.id === this.newCustomerParams.bundle
              )
            }

            if (bundle && bundle.inventories) {
              simProduct = bundle.inventories.find(
                (inventory) => inventory.product_id !== this.product.id
              )

              await this.$store.dispatch(FETCH_PRODUCT_VERIFY_ESIM, {
                id: simProduct.product_id
              })
            }
          }

          if (this.$route.params.id) {
            loggerAddon({
              event: 'Visit Sim',
              status: 'search number',
              productId: this.$route.params.id,
              matcode: this.nas
            })
          } else if (this.newCustomerParams) {
            loggerAddon({
              event: 'Visit Sim',
              status: 'search number',
              productId: this.newCustomerParams.id,
              matcode: this.nas
            })
          }

          if (this.isMNPAutoRoute) {
            await this.$store.dispatch(FETCH_PRODUCT_STATUS, {
              product_id: this.$route.params.id
            })
            const hash = window.localStorage.getItem('cart-id')
            if (!hash) {
              window.localStorage.setItem('cart-id', this.allowAddcart.hash)
            }
          }
          this.loading = false
        } catch (e) {
          throw new Error(e)
        }
      },
      trackAnalytics (action, e) {
        let label = ''
        window.dataLayer = window.dataLayer || []
        if (action === 'select_number_failed') label = 'invalid_number'
        if (action === 'select_number') {
          const regex =
            e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
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
        else if (this.product.product_type === 'device_bundle_new_customer') { nas = this.propo }

        let mobilePatternIds = null
        let baselines = null
        if (this.numberTypes) {
          mobilePatternIds = this.numberTypes.map((e) => e.id)
        }
        if (this.selectedGroup.length > 0) {
          mobilePatternIds = this.selectedGroup.join(',')
        }
        if (
          (this.selectedPackagePrice.length > 0 && value.page !== 1) ||
          value.favorite ||
          value.dislike
        ) {
          baselines = this.selectedPackagePrice.join(',')
        }
        const data = {
          section: 'wemall',
          sim_type:
            this.isInstantSimPrepaid || this.isPrepaid ? 'prepaid' : 'postpaid',
          nas_code: nas,
          filter_likes: value.favorite,
          filter_dislikes: value.dislike,
          limit: document.body.clientWidth > 860 ? 36 : 10,
          page: value.page,
          token: this.$route.query.token,
          product_id: this.$route.params.id
        }

        if (this.$route.query.source_type) {
          data.sim_source_type = this.$route.query.source_type
        }

        if (this.isLucky9999Home) {
          data.mobile_pattern_ids = mobilePatternIds
          data.baselines = baselines
          data.filter_likes = this.isFavorite
          data.filter_dislikes = this.isDislike
        }
        if (this.isLuckyHome) {
          data.mobile_pattern_ids = mobilePatternIds
          data.baselines = baselines
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

        if ((results.status_code === 0 || results.status_code === 200) && results.data.record[0] && results.data.record[0].refId) {
          this.hasRefId = true
        }

        if (results.status_code === 0 || results.status_code === 200) {
          const totalNumberItem = results.data.pagination.total
          this.totalPagePaginate = Math.round(totalNumberItem / data.limit)
          this.totalNumberItem = totalNumberItem
          this.result = [...this.result, ...results.data.record]
          if (results.data.record.length === 0) this.isLast = true
        }
        this.favorite = JSON.parse(
          JSON.stringify(value.favorite || this.isFavorite)
        )
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
      async fetchProduct () {
        if (this.isLuckyHome || this.isLucky9999Home) return
        window.localStorage.removeItem('sim_family_info')
        await this.$store
          .dispatch(FETCH_PRODUCT_INFO, {
            id: this.$route.params.id,
            tmvhAuth: this.$route.query.token,
            type: this.isMNPAutoRoute ? 'mnp_auto' : 'sim',
            paysmoothToken: this.$route.query.paysmooth_token
          })
          .then(({ data }) => {
            if (data.record && data.record.sim_family_info) {
              window.localStorage.setItem(
                'sim_family_info',
                JSON.stringify(data.record.sim_family_info)
              )
            }
          })
        const config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
        const type = this.product.product_type
        const postpaidList = config.verify
          .map((product) => {
            if (product.type === 'postpaid') return product.id
          })
          .filter((item) => item)

        const isPrepaidList = (this.product.product_sim && this.product.product_sim.sim_type === 'prepaid') ||
          config.prepaid_search.includes(
            this.$route.params.id
          )
        const familySim = postpaidList.includes(this.$route.params.id)
        this.postpaidSim = [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'device_bundle_new_customer'
        ].includes(type)
        if (this.isInstantSimPrepaid) return
        if (this.isMNPBundleRoute && this.isMnpBundle) return
        if (this.isMNPAutoRoute) return
        if (!familySim && !this.postpaidSim && !isPrepaidList) throw new Error()
        if (type === 'family_black_truecard') {
          const familyBlackVerify = localStorage.getItem(
            'family-black-verify-form'
          )
          if (!familyBlackVerify) throw new Error()
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
          if (this.isLucky9999Home || this.isLuckyHome) {
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
            let bundle = null
            if (this.$route.params.bundle) {
              bundle = this.product.bundles.find(
                (bundle) => bundle.id === this.$route.params.bundle
              )
            } else {
              bundle = this.product.bundles.find(
                (bundle) => bundle.id === this.newCustomerParams.bundle
              )
            }

            let proposition = null
            if (this.$route.params.nas) {
              proposition = bundle.proposition_mobile.find(
                (proposition) => proposition.nas_code === this.$route.params.nas
              )
            } else {
              proposition = bundle.proposition_mobile.find(
                (proposition) =>
                  proposition.nas_code === this.newCustomerParams.nas
              )
            }
            if (!bundle || !proposition) throw new Error()
            this.propo = bundle.propo_code
            return this.$route.params.nas || this.newCustomerParams.nas
          } catch {
            throw new Error()
          }
        }
        if (this.$route.query.nas_code) {
          const params = qs.stringify(
            {
              section: 'wemall',
              page: 1,
              sim_type: 'all',
              product_id: id
            },
            { arrayFormat: 'brackets' }
          )
          const headers = this.isInstantSimPrepaid
            ? {}
            : { 'tmvh-token': this.$route.query.token }
          const packages = await this.$store.dispatch(FETCH_PACKAGES, {
            params,
            headers
          })
          const nas = packages.data.record.map((item) => item.nas_code)
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
        this.packages = data.record[0]
        if (this.packages && this.packages.proposition_amdoc) {
          this.updateURLQuery(
            'proposition_amdoc',
            this.packages.proposition_amdoc
          )
          window.localStorage.setItem(
            'proposition_amdoc',
            this.packages.proposition_amdoc
          )
        }
      },
      async holdNumber (id, e) {
        try {
          this.loading = true
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

          let nas = this.$route.query.nas_code || this.$route.params.nas
          if (this.isLuckyHome || this.isLucky9999Home) { nas = e.product_info.propo_code }

          let data = null
          if (!this.hasRefId) {
            data = await this.$store.dispatch(HOLD_NUMBER, {
              id,
              nas_code: nas
            })
          } else {
            data = {
              data: {
                mobile: id
              }
            }
          }

          if (!this.hasRefId) {
            if (this.postpaidSim) {
              localStorage.setItem('postpaid-sim-data', JSON.stringify(data.data))
            } else {
              localStorage.setItem('postpaid-data', JSON.stringify(data.data))
            }
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
              if (e.company_code) {
                localStorage.setItem('company_code', e.company_code)
              }
              if (this.hasRefId && e.refId) {
                localStorage.setItem('ref_id', e.refId)
              }
              localStorage.setItem('prepaid-sim-number', data.data.mobile)
              this.$router.push({
                name: 'online-store-prepaid-verify',
                params: {
                  id: this.$route.params.id,
                  nas: this.nas,
                  number: data.data.mobile
                },
                query: { ...this.$route.query, hasRefId: this.hasRefId }
              })
            } else if (this.product.product_type === 'device_bundle_new_customer') {
              this.$router.push({
                name: 'online-store-bundle-verify',
                params: {
                  id: this.$route.params.id || this.newCustomerParams.id,
                  nas: this.nas,
                  number: data.data.mobile,
                  bundle:
                    this.$route.params.bundle || this.newCustomerParams.bundle,
                  propo: this.propo
                },
                query: { ...this.$route.query }
              })
            } else if (this.isLucky || this.isLuckyHome) {
              const productId = this.isLuckyHome
                ? `L${e.product_info.product_id}`
                : this.$route.params.id
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
              const productId = this.isLucky9999Home
                ? `L${e.product_info.product_id}`
                : this.$route.params.id
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
        const newurl = `${window.location.origin}${
          window.location.pathname
        }?${qs.stringify(query)}`
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
  padding: 18px 0px 0px 0px;

  &.OnlineStoreDetailClass {
    background-color: transparent;
    color: #37474f;
    padding: 0px;
    margin-top: -25px;
  }
}
.pagination {
  list-style-type: none;
  margin: 40px 0 18px;
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    border: 2px solid #e62627;
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
    background: linear-gradient(
      286.62deg,
      #df1584 10.96%,
      #df1e5f 36.51%,
      #e02542 61.07%,
      #e02932 82.54%,
      #e02b2c 98.54%
    );
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
    padding: 20px 0px 0px 0px;

    &.OnlineStoreDetailClass {
      padding: 0px;
    }
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
      font-family: "TrueBold";
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
          font-family: "TrueBold";
          z-index: 1;
          font-size: 2.125rem;
          font-weight: 700;

          img {
            width: 35px;
            height: 35px;
          }
          .text-blue {
            color: #20639b;
          }
          .text-red {
            color: #ea3019;
          }
          .text-green {
            color: #219653;
          }
          .text-yellow {
            color: #eabc19;
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
              border-color: #20639b;
              background-color: #20639b;
            }
            &.checkbox-red {
              border-color: #ea3019;
              background-color: #ea3019;
            }
            &.checkbox-green {
              border-color: #219653;
              background-color: #219653;
            }
            &.checkbox-yellow {
              border-color: #eabc19;
              background-color: #eabc19;
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
          border: 2px solid #eabc19;

          .button {
            font-size: 24px;
            background-color: #eabc19;
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
          border: 2px solid #ea9619;

          .button {
            font-size: 24px;
            background-color: #ea9619;
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
          border: 2px solid #ea7119;

          .button {
            font-size: 24px;
            background-color: #ea7119;
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
          border: 2px solid #ea4b19;

          .button {
            font-size: 24px;
            background-color: #ea4b19;
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
          border: 2px solid #e62627;

          .button {
            font-size: 24px;
            background-color: #e62627;
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
            font-family: "TrueBold";
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
