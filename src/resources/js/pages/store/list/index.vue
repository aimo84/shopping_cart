<template>
  <div class="page-container" v-if="!flashsaleLoading">
    <component
      ref="component"
      :is="componentName"
      @loaded="$refs.component.open()"
      @success="showTol = true"
    />
    <div
      v-if="isShopPage && this.cCampaign !== null"
      class="lg:grid grid-flow-col gap-4 text-xl justify-start text-black px-3 mb-2 flex-breadcrumb-mobile"
    >
        <a
          href="/"
          class="text-cyan no-underline"
        >
          {{ Locale.true_online_store[$i18n.locale] }}
        </a>
        <div>></div>
        <div>{{ cCampaign.title[$i18n.locale] ||  cCampaign.title.th }}</div>
    </div>
    <div
      v-if="isFlashsale || isPartnerPage || isCategoryPage || isCategoryPageSlug"
      class="lvC-breadcrumb text-xl text-black"
    >
        <a
          href="/"
          class="text-cyan no-underline"
        >
          {{ Locale.true_online_store[$i18n.locale] }}
        </a>
        <div>></div>
        <template v-if="isFlashsale">
          {{ Locale.page.flash_sale[$i18n.locale] }}
        </template>
        <template v-else-if="isPartnerPage">
          {{ Locale.page.exclusive[$i18n.locale] }}
        </template>
        <template v-else-if="isCategoryPage">
          {{categoryText}}
        </template>
    </div>
    <banner-element />
    <div class="video-banner shop-page-video-banner" v-if="isShopPage && videoBannerURL" >
      <video-player-element :url="videoBannerURL" />
    </div>
    <partner-privilege-element v-if="isPartnerPage" :partners="partners"/>
    <trueonline-products v-else-if="showTol && !isShopPage" />
    <store-element
      v-else
      :loading="loading"
      :loadingProducts="loadingProducts"
      :products="products"
      :is-last="isLast"
      :postpaid="postpaid"
      :prepaid="prepaid"
      :total="total"
      :coupons="coupons"
      :store-slug-config="storeSlugConfig"
      @categoryPageText="categoryPageText"
    />
    <div class="floating_menu_store_list">
      <!-- back to top icon -->
      <div class="back_to_top_store_list" @click="backToTopStorelist">
        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800049 8.5998L8.20005 0.799805L15.8 8.5998" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>TOP</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './banner'
  import VideoPlayer from '@components/video-player'
  import qs from 'qs'
  import Locale from './locale.json'

  import {
    FETCH_STORE_BANNER,
    FETCH_STORE_FILTER,
    SEARCH_STORE,
    SEARCH_STORE_SLUG,
    FETCH_VERIFY_CONFIG,
    FETCH_PACKAGES,
    FETCH_TOL_ADDRESS,
    FETCH_TOL_PRODUCTS,
    FETCH_SHOP_CONFIG,
    FETCH_C_CAMPAIGN,
    FETCH_FLASHSALE,
    FETCH_PARTNERS,
    FETCH_CMS_CONTENT
  } from '@store/actions.type'
  import {
    setCampaignWeomniQuery,
    smoothScrollToElementInCommon
  } from '@utils/common'
  import { COMMON_METADATA_STORE } from '../../../store/actions.type'
  import Partner from './partner.vue'
  import moment from 'moment/moment'

  export default {
    components: {
      'banner-element': Banner,
      'video-player-element': VideoPlayer,
      'store-element': () => import('./store'),
      'trueonline-products': () => import('./trueonline/products'),
      'trueonline-coverage': () => import('./trueonline/dialog'),
      'partner-privilege-element': Partner
    },
    data: () => ({
      loading: true,
      loadingProducts: true,
      isLast: false,
      params: {},
      options: [],
      products: [],
      postpaid: [],
      prepaid: [],
      coupons: {},
      total: 0,
      componentName: null,
      showTol: false,
      Locale,
      cCampaign: null,
      metaDatas: {},
      flashsale: {},
      flashsaleLoading: true,
      categoryText: '',
      lvaConfigs: [],
      campaignData: [],
      storeSlugConfig: {}
    }),
    metaInfo () {
      return {
        meta: [
          { name: 'title', content: this.metaDatas ? this.metaDatas.title : '' },
          { name: 'description', content: this.metaDatas ? this.metaDatas.description : '' },
          { name: 'keywords', content: this.metaDatas ? this.metaDatas.keywords : '' }
        ]
      }
    },

    computed: {
      partners () {
        return this.$store.state.store.partners.data.record
      },
      isMenu () {
        return this.$route.name === 'online-store-shop' && this.$store.state.store?.shop?.hide_menu === false
      },
      banners () {
        return this.$store.state.store.banner.data && this.$store.state.store.banner.data.record.sections[0].contents
      },
      videoBannerURL () {
        return this.$store.state.store?.shop?.video
      },
      filters () {
        return this.$store.state.store.filter.data
      },
      isShopPage () {
        return this.$route.name === 'online-store-shop'
      },
      isShopPageFilter () {
        return this.$route.name === 'online-store-shop' &&
          String(this.$store.state.store?.shop?.hide_filter).toLowerCase() !== 'true'
      },
      isFlashsale () {
        return this.$route.name === 'online-store-flashsale'
      },
      isPartnerPage () {
        return this.$route.name === 'online-store-partner-privilege'
      },
      flashsaleInfo () {
        return this.$store.state.store.flashsale.data
      },
      isCategoryPage () {
        return this.$route.name === 'online-store-list'
      },
      isCategoryPageSlug () {
        return this.$route.name === 'online-store-list-slug'
      }
    },
    watch: {
      videoBannerURL () {
        if (this.$route.name === 'online-store-shop' && this.$route.params.id && this.videoBannerURL !== '' && this.banners) {
          document.body.classList.add('online-store-shop-has-video')
        } else if (this.$route.name === 'online-store-shop' && this.$route.params.id && this.videoBannerURL !== '') {
          document.body.classList.add('online-store-shop-has-video-only')
        } else if (this.$route.name === 'online-store-shop' && this.$route.params.id && this.banners) {
          document.body.classList.add('online-store-shop-has-banner-only')
        }
      },
      isShopPageFilter (value) {
        if (this.$route.name === 'online-store-shop') {
          if (value) {
            document.body.classList.add('has-filter')
          }
        }
      }
    },
    async created () {
      if (this.isCategoryPageSlug) {
        if (Object.keys(this.storeSlugConfig).length == 0) {
          this.storeSlugConfig = await this.convertSlugToFilter()
        }
      }
    },
    async mounted () {
      if (this.isFlashsale) {
        this.lvaConfigs = await this.$store.dispatch(FETCH_CMS_CONTENT, { code: 'Truestore_level_a_config' })
        this.lvaConfigs = this.lvaConfigs.filter(function (item) {
          return item.custom_fields.template_type.match(/flash_sale/)
        })
        if (this.lvaConfigs.length > 0) {
          this.flashsale = await this.$store.dispatch(FETCH_C_CAMPAIGN, { id: this.lvaConfigs[0].custom_fields.product_campaign_id, field: true })
          if (this.flashsale.data) {
            this.campaignData[0] = this.flashsale.data.record
            this.flashsale = await this.$store.dispatch(FETCH_FLASHSALE, {})
            this.flashsale.data.record = this.campaignData
            const now = new Date()
            const endDate = new Date(this.flashsale.data.record[0].published_end.replace(/ /g, 'T'))
            const startDate = new Date(this.flashsale.data.record[0].published_start.replace(/ /g, 'T'))
            endDate.setHours(endDate.getHours() + 7)
            startDate.setHours(startDate.getHours() + 7)
            this.flashsale.data.record[0].published_end = moment(endDate).format('YYYY-MM-DD HH:mm:ss')
            this.flashsale.data.record[0].published_start = moment(startDate).format('YYYY-MM-DD HH:mm:ss')
            if (this.flashsale.data.record[0].status === 0 || startDate >= now || endDate <= now) {
              this.$router.push('/home')
            }
          } else {
            this.$router.push('/home')
          }
        } else {
          this.$router.push('/home')
        }
      }
      if (this.isPartnerPage) {
        const code = 'truestore-level-a-partner'
        await this.$store.dispatch(FETCH_PARTNERS, {
          code: code
        })
      }
      this.flashsaleLoading = false
      setCampaignWeomniQuery()
      const param = {
        section: 'wemall',
        page: 1
      }
      const prepaidParams = qs.stringify(
        { ...param, ...{ sim_type: 'prepaid' } },
        { arrayFormat: 'brackets' }
      )
      const postpaidParams = qs.stringify(
        { ...param, ...{ sim_type: 'postpaid' } },
        { arrayFormat: 'brackets' }
      )

      this.loadTrueOnline()

      const bannerParams = {}
      if (this.isShopPage) {
        bannerParams.shop = this.$route.params.id
      }

      const result = await Promise.all([
        this.$store.dispatch(FETCH_STORE_BANNER, bannerParams),
        this.$store.dispatch(FETCH_VERIFY_CONFIG),
        this.$store.dispatch(FETCH_PACKAGES, prepaidParams),
        this.$store.dispatch(FETCH_PACKAGES, postpaidParams)
      ])
      this.prepaid = result[2].data.record
      this.postpaid = result[3].data.record

      if (this.isShopPage) {
        const param = {
          shop: this.$route.params.id
        }
        const shopData = await this.$store.dispatch(FETCH_SHOP_CONFIG, param)
        if (shopData && !shopData.campaign_id) location.replace('/online-store')
        if (shopData && shopData.campaign_id) {
          await this.$store.dispatch(FETCH_C_CAMPAIGN, { id: shopData.campaign_id }).then((data) => {
            if (data && data.data.record) this.cCampaign = data.data.record
          })
        }
      }

      this.metaData()
      this.loading = false

      this.$nextTick(function () {
        window.onscroll = function () {
          if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            document.getElementsByClassName('floating_menu_store_list')[0].style.display = 'block'
          } else {
            document.getElementsByClassName('floating_menu_store_list')[0].style.display = 'none'
          }
        }
      })
    },
    methods: {
      categoryPageText (value) {
        this.categoryText = value
      },
      async loadTrueOnline () {
        if (this.$route.query.menupick === 'trueonline_checkcoverage') {
          this.openCoverageDialog()
        }
        if (this.$route.query.menupick === 'trueonline_tracking') {
          this.$parent.$parent.openTrueOnlineTracking()
        }
        if (this.$route.query.trueonline === 'true') {
          try {
            this.showTol = true
            const token = {
              certificateId: localStorage.getItem('tol-certificate-id'),
              correlationId: localStorage.getItem('tol-correlation-id'),
              _identity: localStorage.getItem('tol-identity')
            }
            if (!token.certificateId || !token.correlationId || !token._identity) {
              throw new Error('missing-token')
            }
            const result = await this.$store.dispatch(FETCH_TOL_ADDRESS, token)
            await this.$store.dispatch(FETCH_TOL_PRODUCTS, {
              G_LATITUDE: result.CENTROID_LATITUDE,
              G_LONGITUDE: result.CENTROID_LONGITUDE,
              BUILDING_TYPE: ((result.ROOM && result.FLOOR) && (result.ROOM !== '-' && result.FLOOR !== '-')) ? 'Y' : 'N',
              HOUSE_NO: result.HOUSE_NO,
              FLOOR: (result.FLOOR !== '-') ? result.FLOOR : '',
              ROOM: (result.ROOM !== '-') ? result.ROOM : ''
            })
          } catch (e) {
            const query = JSON.parse(JSON.stringify(this.$route.query))
            Object.keys(query).forEach(key => !query[key] && delete query[key])
            delete query.trueonline
            this.$router.replace({ query }).catch(() => {})
            this.showTol = false
          }
        }
      },
      openCoverageDialog () {
        if (this.$refs.component) {
          this.$refs.component.open()
          return
        }
        this.componentName = 'trueonline-coverage'
      },
      updateQuery (query) {
        Object.keys(query).forEach(key => !query[key] && delete query[key])
        if (this.$route.query.trueonline === 'true') query.trueonline = true
        this.$router.replace({ query }).catch(() => {})
      },
      updateFilterCategory (id) {
        const filter = {
          plaza_category_id: id
        }
        if (this.isShopPage) {
          filter.shop = this.$route.params.id
        }

        if (this.isCategoryPageSlug && this.storeSlugConfig?.category_id) {
          filter.plaza_category_id = this.storeSlugConfig?.category_id
        }

        this.$store.dispatch(FETCH_STORE_FILTER, filter)
      },
      async metaData () {
        const param = []
        param.code = 'Truestore_metadata_level_d'
        const metaDatas = await this.$store.dispatch(COMMON_METADATA_STORE, {
          params: param
        })

        metaDatas.data.record?.sections.map(element => {
          element.contents.map(value => {
            let response = value.custom_fields.metadata.replace(/(<p>|<\/p>)/g, '')
            response = JSON.parse(response)

            this.metaDatas = response
          })
        })
      },
      async search (value) {
        this.updateQuery({
          ...this.$route.query,
          category: value.plaza_category_id,
          brand: value.feature_value_ids,
          q: value.q,
          min_price: value.min_price,
          max_price: value.max_price
        })
        if (value.page === 1) {
          this.products = []
          this.isLast = false
        }
        if ((this.params.plaza_category_id !== value.plaza_category_id) || !this.filters) {
          this.updateFilterCategory(value.plaza_category_id)
        }

        const limit = { limit: document.body.clientWidth > 860 ? 36 : 20 }
        this.params = { ...value, ...limit }
        this.loadingProducts = true
        // [Hotfix] remove order, sort when order=score
        if (this.params.order === 'score') {
          delete this.params.sort
          delete this.params.order
        }

        if (this.isShopPage) {
          this.params.shop = this.$route.params.id
        }

        if (this.$route.query.token) {
          this.params.token = this.$route.query.token
        }

        if (this.isCategoryPageSlug) {
          if (Object.keys(this.storeSlugConfig).length == 0) {
            this.storeSlugConfig = await this.convertSlugToFilter()
          }
          if (this.storeSlugConfig?.category_id) {
            this.params.plaza_category_id = this.storeSlugConfig?.category_id
          }
          if (this.storeSlugConfig?.brand_id) {
            this.params.feature_value_ids = this.storeSlugConfig?.brand_id
          }
        }

        if (this.isFlashsale && this.flashsaleInfo) {
          if (!this.flashsaleInfo?.record?.length) {
            this.$router.push('/home')
          }
          this.params.campaign_id = this.flashsaleInfo.record[0].id
        }

        Object.keys(this.params).forEach(key => !this.params[key] && delete this.params[key])
        const products = await this.$store.dispatch(SEARCH_STORE, {
          params: this.params,
          headers: {
            'tmvh-token': this.$route.query.token
          }
        })

        if (products.data.length === 0) location.replace('/online-store')
        this.coupons = { ...this.coupons, ...products.data.coupon_data_from_bff }
        this.products = [...this.products, ...products.data.record]
        this.products.forEach(element => {
        })

        if (this.products.length >= products.data.pagination.total) this.isLast = true
        this.total = products.data.pagination.total
        this.loadingProducts = false
      },
      async loadMore () {
        this.params.page = this.params.page + 1
        await this.search(this.params)
      },
      backToTopStorelist () {
        smoothScrollToElementInCommon('app')
      },
      async convertSlugToFilter () {
        const slug = {
          filter: this.$route.params.slug
        }
        const slugData = await this.$store.dispatch(SEARCH_STORE_SLUG, slug.filter)
        const storeSlugObj = JSON.parse(JSON.stringify(slugData))
        if (Object.keys(storeSlugObj.body).length === 0) {
          location.replace('/online-store')
        }
        return storeSlugObj.body
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    position: relative;
    background-color: #fff;
    padding-bottom: 36px;

    .video-banner {
      padding: 15px 0;
    }
  }

  @media screen and (min-width: 768px) {
      .page-container {
      .video-banner {
        display: grid;
        grid-template: 370px / 658px;
        justify-content: center;
        justify-items: center;
        position: relative;

        .video {
          display: grid;
          grid-template: 370px / 658px;
        }
      }
    }
  }
</style>

<style scoped lang="scss" src="../store.scss"></style>

<style lang="scss" scoped>
    .grid-flow-col {
    grid-auto-flow: column;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .gap-4 {
    gap: 0.5rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mt-40 {
    margin-top: -40px
  }
  .text-xl {
    font-size: 1.125rem;
    line-height: 1.25rem;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .text-black {
    color: #000;
  }
  .text-cyan {
    color: #25BFC9;
  }
  .no-underline {
    text-decoration: none;
  }
</style>

<style lang="scss" scoped>
    .flex-breadcrumb-mobile {
      display: flex;
      flex-direction: row;
    }
    .lvC-breadcrumb {
      display: none;
    }

    @media (max-width: 1280px) {
      .flex-breadcrumb-mobile {
        margin-top: 45px;
        margin-bottom: 10px;
      }
      .lvC-breadcrumb {
        margin-top: 75px;
        display: grid;
        grid-auto-flow: column;
        grid-gap: .5rem;
        align-content: center;
        padding-left: 0.75rem;
        justify-content: flex-start;
        margin-bottom: -1.25rem;
      }
    }

    @media (max-width: 1000px) {
      .flex-breadcrumb-mobile {
        margin-top: 30px;
      }
      .lvC-breadcrumb {
        margin-top: 24px;
      }
    }

</style>

<style lang="scss" scoped>
  // TODO: Migrate all the CSS to tailwind
  @media (min-width: 1024px) {
    .lg\:grid {
      display: grid;
    }
  }
</style>
<style lang="scss" scoped>
  @media (max-width: 1024px) {
    .mt-40 {
      margin-top: 10px
    }
    .mb-2 {
      margin-bottom: 0.5rem;
    }
  }
</style>

<style lang="scss" scoped>
  .floating_menu_store_list {
    display: none;
    z-index: 998;
    position: fixed;
    font-family: 'TrueLight', sans-serif;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
    bottom: 99px;
    right: 0;

    @media screen and (max-width: 575px) {
      right: 25px;
    }

    @media (min-width: 576px) {
      right: 20px;
    }
    @media (min-width: 1376px) {
      right: calc(50vw - 688px);
    }

    .back_to_top_store_list {
      width: 50px;
      height: 50px;
      line-height: 10px;
      text-align: center;

      background-color: whitesmoke;
      border-radius: 4px;
      border: 2px solid #E62627;
      color: #E62627;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-family: "TrueMedium";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        margin-top: 5.7px;
      }

      &:hover {
        background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        color: white;
      }
    }
  }
</style>
