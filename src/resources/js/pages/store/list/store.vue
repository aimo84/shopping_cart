<template>
  <div
    class="store-container"
    :class="{ 'expanded-width': isExpandedPage, 'exclusive-page': isShopPage }"
  >
    <div class="store-products-container">
      <filter-element
        v-show="!isFlashsale && !isShopPage && !isCategoryPage && !isCategoryPageSlug"
        ref="filter"
        @change="filterChanged"
        :loading="loading"
        :loading-products="loadingProducts"
        :store-slug-config="storeSlugConfig"
      />
      <div class="product-container">
        <div
          class="flash-sale-container"
          v-if="isFlashsale && !loadingProducts"
        >
          <div class="on-sale">{{ Locale.flashsale.on_sale[$i18n.locale] }}</div>
          <div class="deal-end-container">
            <div class="deal-end">{{ Locale.flashsale.deal_end[$i18n.locale] }}</div>
            <countdown-element :timestamp="flashsaleEndTime" />
          </div>
        </div>
        <div
          :class="{'sort-filter-product-container':filters && sorts && isShopPageFilter}"
          v-else-if="isShopPage"
        >
          <div
            class="sort-filter-product"
            v-if="filters && sorts && isShopPageFilter"
          >
            <div class="sort-filter">
              <div
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugCategory)"
                class="label"
              >{{ Locale.categories[$i18n.locale] }}</div>
              <select-element
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugCategory)"
                :options="categories"
                v-model="filter.category"
                class="dropdown"
                :id="'c-categories-filter'"
              />
              <div
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugBrand)"
                class="label filter-brands"
              >{{ Locale.brands[$i18n.locale] }}</div>
              <select-element
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugBrand)"
                :options="brands"
                v-model="filter.brands"
                class="dropdown"
                :id="'c-brands-filter'"
              />
            </div>
            <div class="sort-filter">
              <div class="c-sort-mobile">
                <select-element
                  :options="sorts"
                  v-model="sort"
                  class="dropdown c-sort-mobile"
                  :id="'c-sort'"
                  :template="'red'"
                />
              </div>
              <div class="c-sort-desktop">
                <div class="label filter-by">{{ Locale.sortby[$i18n.locale] }}</div>
                <radio-element
                  :options="sorts"
                  name="c-sort"
                  v-model="sort"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="sort-filter-product-container category"
          v-else-if="isCategoryPage || isCategoryPageSlug"
        >
          <div
            class="sort-filter-product"
            v-if="filters && sorts"
          >
            <div class="sort-filter">
              <div
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugCategory)"
                class="label"
              >{{ Locale.categories[$i18n.locale] }}</div>
              <select-element
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugCategory)"
                @getCatagoryText="getCatagoryText"
                :options="categories"
                v-model="filter.category"
                class="dropdown"
                :id="'c-categories-filter'"
              />
              <div
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugBrand)"
                class="label filter-brands"
              >{{ Locale.brands[$i18n.locale] }}</div>
              <select-element
                v-if="!isCategoryPageSlug || (isCategoryPageSlug && !isCategoryPageSlugBrand)"
                :options="brands"
                v-model="filter.brands"
                class="dropdown"
                :id="'c-brands-filter'"
              />
            </div>
            <div class="sort-filter">
              <div class="c-sort-mobile">
                <select-element
                  :options="sorts"
                  v-model="sort"
                  class="dropdown c-sort-mobile"
                  :id="'c-sort'"
                  :template="'red'"
                />
              </div>
              <div class="c-sort-desktop">
                <div class="label filter-by">{{ Locale.sortby[$i18n.locale] }}</div>
                <radio-element
                  :options="sorts"
                  name="c-sort"
                  v-model="sort"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <search-element
            v-model='searchQuery'
            @search='search'
            :disabled="loadingProducts"
          />
          <div class="product-header-container">
            <div class="product-header mobile">
              <div
                class="product-header-filter"
                v-if="filters && sorts"
              >
                <dropdown-element
                  v-if="!isShopPage || isShopPageFilter"
                  :options="categories"
                  v-model="filter.category"
                  class="dropdown"
                />
                <dropdown-element
                  :options="sorts"
                  v-model="sort"
                  class="dropdown"
                />
              </div>
              <div
                class="product-header-filter"
                v-else
              >
                <div
                  v-if="!isShopPage || isShopPageFilter"
                  class="dropdown skeleton"
                />
                <div class="dropdown skeleton" />
              </div>
              <div
                class="filter-button"
                @click="$refs.filter.open()"
                v-if="filters && sorts && (!isShopPage || isShopPageFilter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </div>
              <div
                v-else-if="isShopPage && !isShopPageFilter"
                class="filter-button"
              />
              <div
                v-else
                class="filter-button skeleton"
              />
            </div>
            <div class="product-header">
              <div
                class="product-header-title"
                v-if="filters"
              >
                <span>{{ categoriesTitle[filter.category] }} </span>
                <span v-if="!isEPPCategory">
                  <span
                    class="subtitle"
                    v-if="!loadingProducts"
                  >({{ total }} </span>
                  <span
                    class="subtitle"
                    v-if="!loadingProducts"
                  >{{ total > 1 ? Locale.results[$i18n.locale] : Locale.result[$i18n.locale] }})</span>
                </span>
              </div>
              <div
                class="product-header-title"
                v-else
              >
                <div class="skeleton" />
              </div>
              <div
                class="product-header-sort"
                v-if="sorts"
              >
                <span>{{ Locale.sortby[$i18n.locale] }}: </span>
                <dropdown-element
                  :options="sorts"
                  v-model="sort"
                  class="dropdown"
                />
              </div>
              <div
                class="product-header-sort"
                v-else
              >
                <div class="skeleton" />
              </div>
            </div>
            <div
              class="brands"
              v-if="filters"
            >
              <span v-if="filter.brands !== '0000'">{{ brandsTitle[filter.brands] }} </span>
            </div>
          </div>
        </div>
        <div
          class="products-grid-container"
          :class="(isShopPage || isFlashsale || isCategoryPage || isCategoryPageSlug) && 'min-gap'"
          v-show="!loading && products && products.length > 0"
        >
          <template v-for="(product, key) in products">
            <a
              v-if="!loading && isWemall(product)"
              :href="isWemall(product)"
              :key="key"
              target="_blank"
              class="product"
            >
              <product-element
                :index="key"
                :data="product"
                :prepaid="prepaid"
                :postpaid="postpaid"
                :isExpandedPage="isExpandedPage"
              />
            </a>
            <router-link
              v-if="!loading && !isWemall(product)"
              :is="product.quantity === 0 ? 'span' : 'router-link'"
              :to="link(product)"
              :key="key"
              class="product"
            >
              <product-modern-element
                v-if="isShopPage || isFlashsale || isCategoryPage || isCategoryPageSlug"
                :component-type="isShopPage || isCategoryPage || isCategoryPageSlug ? 'exclusive_or_best_seller' : isFlashsale ? 'flash_sale' : 'new_arrival'"
                :index="key"
                :product-data="product"
                :prepaid="prepaid"
                :postpaid="postpaid"
                :coupon="coupons[product.id]"
                :isExclusiveOrBestSellerOnDetailPage="isShopPage"
                :campBean="campBean"
                :paramsID="paramsID"
                @handleBtnclick="trackAnalytics"
              />
              <product-element
                v-else
                :index="key"
                :data="product"
                :prepaid="prepaid"
                :postpaid="postpaid"
                :coupon="coupons[product.id]"
              />
            </router-link>
          </template>
          <div
            class="products-placeholder no-padding"
            v-if="!loadingProducts && !isLast"
          >
            <div
              class="load-more"
              ref="loadMore"
              @click="$parent.loadMore()"
            >{{ Locale.load_content[$i18n.locale] }}</div>
          </div>
        </div>
        <div
          class="products-grid-container"
          :class="(isShopPage || isFlashsale || isCategoryPage || isCategoryPageSlug) && 'min-gap'"
          v-if="loading || loadingProducts"
        >
          <product-element
            v-for="index in 6"
            :key="index"
            loading
          />
        </div>
        <div
          v-else-if="products.length <= 0"
          class="products-placeholder"
        >
          <div class="not-found">
            <img
              class="not-found-img"
              src="/images/icons/not_found.png"
              alt="back-img"
            >
            <p class="title">{{Locale.not_found.title[$i18n.locale]}}</p>
            <p
              v-if="filter.q"
              class="desc"
            >{{Locale.not_found.description[$i18n.locale]}}</p>
          </div>
        </div>
      </div>
    </div>
    <script type="application/ld+json">
    {
      {
        websiteJson
      }
    }
    </script>
    <script type="application/ld+json">
    {
      {
        breaddcrumListJson
      }
    }
    </script>
  </div>
</template>

<script>
  import Dropdown from '@components/dropdown'
  import Select from '@components/select'
  import Product from './product'
  import ProductModern from '../../new-level-a/product-card-item'
  import Filter from './filter'
  import Search from './search'
  import Locale from './locale.json'
  import Countdown from '@components/countdown'
  import Radio from './c-filter-radio'
  import { getProductsQueries } from '@utils/common'

  import {
    GET_BENEFIT_ON_TOP
  } from '@store/actions.type'

  export default {
    components: {
      'dropdown-element': Dropdown,
      'select-element': Select,
      'product-element': Product,
      'product-modern-element': ProductModern,
      'filter-element': Filter,
      'search-element': Search,
      'countdown-element': Countdown,
      'radio-element': Radio
    },
    props: {
      loading: Boolean,
      loadingProducts: Boolean,
      products: Array,
      isLast: Boolean,
      postpaid: Array,
      prepaid: Array,
      total: Number,
      coupons: Object,
      storeSlugConfig: Object
    },
    data: () => ({
      Locale,
      options: [],
      sort: '{"order":"score","sort":"desc"}',
      filter: {
        category: '',
        brands: '',
        q: ''
      },
      params: {},
      queryParams: null,
      searchQuery: '',
      filterLoading: false,
      template: 'flashsale',
      subModule: '',
      promotion_type: '',
      paramsID: [],
      prodGet: [],
      campBean: {
        headline: '',
        subHeadline: '',
        img: '',
        terms: '',
        hasValue: false
      },
      type: 'demo',
      offeringBeanList: null,
      checkBenefit: false
    }),
    computed: {
      productId () {
        const queries = Object.keys(this.$route.query)
        const parameter = getProductsQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter]
      },
      config () {
        return this.$store.state.config.verifyConfig
      },
      blackSim () {
        return this.config.family_black_truecard
      },
      isWemall () {
        return (product) => {
          if (product.type_of_product === 'ecoupon') {
            return `https://www.wemall.com/d/${product.id}`
          }
          return false
        }
      },
      link () {
        return (product) => {
          if (this.blackSim[product.id]) {
            return '/packages?type=family_sim_blackcard'
          }
          if (this.$route.query.token) {
            return `/online-store/item/${product.id}?token=${this.$route.query.token}`
          }

          return `/online-store/item/${product.id}`
        }
      },
      sortId () {
        return (filters) => {
          const data = filters.reduce((obj, filter) => {
            obj[filter.field_name] = filter.value
            return obj
          }, {})
          return JSON.stringify(data)
        }
      },
      filters () {
        if (!this.$store.state.store?.filter?.data) return false
        const record = this.$store.state.store?.filter?.data.record
        if (!record) return false
        return record.find((item) => item.type === 'filter').options
      },
      categories () {
        let filters = this.filters.find((item) => item.section === 'category')
        filters = JSON.parse(JSON.stringify(filters))
        const categories = filters.options.map((category) => ({
          id: category.filters[0].value,
          value:
            this.formatTitle(category.title)[this.$i18n.locale] ||
            category.title.th
        }))
        const title = { en: 'All Categories', th: 'ทั้งหมด' }
        categories.unshift({
          id: '0000',
          value: title[this.$i18n.locale] || title.th
        })
        return categories
      },
      brands () {
        let filters = this.filters.find((item) => item.section === 'brand') || {
          options: []
        }
        filters = JSON.parse(JSON.stringify(filters))
        const brands = filters.options.map((brand) => ({
          id: brand.filters[0].value,
          value:
            this.formatTitle(brand.title)[this.$i18n.locale] || brand.title.th
        }))
        const title = { en: 'All Brands', th: 'ทั้งหมด' }
        brands.unshift({
          id: '0000',
          value: title[this.$i18n.locale] || title.th
        })
        return brands
      },
      categoriesTitle () {
        return Object.values(this.categories).reduce((obj, category) => {
          obj[category.id] = category.value
          return obj
        }, {})
      },
      brandsTitle () {
        return Object.values(this.brands).reduce((obj, brand) => {
          obj[brand.id] = brand.value
          return obj
        }, {})
      },
      sorts () {
        if (!this.$store.state.store.filter.data) return false
        const record = this.$store.state.store.filter.data.record
        if (!record) return false
        const sorts = record.find((item) => item.type === 'sort').options
        return sorts.map((sort) => ({
          id: this.sortId(sort.filters),
          value: sort.title[this.$i18n.locale] || sort.title.th
        }))
      },
      isShopPage () {
        return this.$route.name === 'online-store-shop'
      },
      isCategoryPage () {
        return this.$route.name === 'online-store-list'
      },
      isCategoryPageSlug () {
        return this.$route.name === 'online-store-list-slug'
      },
      isShopPageFilter () {
        let filter = this.$route.name === 'online-store-shop' && String(this.$store.state.store?.shop?.hide_filter).toLowerCase() !== 'true'
        if (filter) {
          filter = true
          document.body.classList.add('has-filter')
        } else {
          filter = false
          document.body.classList.remove('has-filter')
        }
        return filter
      },
      isCategoryPageSlugCategory () {
        return this.storeSlugConfig?.category_id
      },
      isCategoryPageSlugBrand () {
        return this.storeSlugConfig?.brand_id
      },
      flashsaleInfo () {
        return this.$store.state.store.flashsale.data
      },
      isFlashsale () {
        return this.$route.name === 'online-store-flashsale'
      },
      flashsaleEndTime () {
        return this.flashsaleInfo.record[0].published_end
      },
      isPartnerPage () {
        return this.$route.name === 'online-store-partner-privilege'
      },
      isExpandedPage () {
        return (
          this.isShopPage ||
          this.isFlashsale ||
          this.isPartnerPage ||
          this.isCategoryPage ||
          this.isCategoryPageSlug
        )
      },
      isEPPCategory () {
        return window.url.EPP_CAT === this.filter.category
      },
      websiteJson () {
        return {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          url: 'https://truemoveh.truecorp.co.th/',
          potentialAction: {
            '@type': 'SearchAction',
            target:
              window.url.MIX_APP_URL +
              '?q=' +
              (!this.searchQuery ? 'search_term_string' : this.searchQuery),
            'query-input':
              'required name=' +
              (!this.searchQuery ? 'search_term_string' : this.searchQuery)
          },
          name: 'Truemove H',
          sameAs: [
            'https://www.facebook.com/TrueMoveH',
            'https://twitter.com/truemoveh',
            'https://www.youtube.com/user/TrueMoveH'
          ]
        }
      },
      breaddcrumListJson () {
        return {
          '@type': 'BreadcrumbList',
          '@context': 'https://schema.org',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': window.url.MIX_APP_URL,
                name: 'TrueMove H'
              }
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': window.url.MIX_APP_URL + '/online-store',
                name: 'All Products'
              }
            }
          ]
        }
      }
    },
    watch: {
      sort () {
        this.$parent.search({
          ...this.params,
          ...JSON.parse(this.sort),
          ...{ page: 1 }
        })
      },
      filter: {
        deep: true,
        async handler (value) {
          const filter = {}
          if (value.category !== '0000') {
            filter.plaza_category_id = value.category
          }
          if (value.brands !== '0000') {
            filter.feature_value_ids = value.brands
          }
          if (value.min_price !== '') {
            filter.min_price = value.min_price
          }
          if (value.max_price !== '') {
            filter.max_price = value.max_price
          }
          if (value.q) {
            filter.q = value.q
          }
          this.params = filter
          if (this.filterLoading) return
          this.filterLoading = true
          await this.$parent.search({
            ...this.params,
            ...JSON.parse(this.sort),
            ...{ page: 1 }
          })
          this.filterLoading = false
        }
      },
      'filter.category' (value) {
        this.$refs.filter.filter.category = value
        this.$refs.filter.filter.brands = '0000'
      },
      'filter.brands' (value) {
        this.$refs.filter.filter.brands = value
      },
      loading (value) {
        if (value) return
        if (this.sorts) this.sort = this.sorts[0].id
      }
    },
    mounted () {
      this.searchQuery = this.$route.query.q
      const shopCode = this.$route.query.shop_code ?? ''
      const saleMode = this.$route.query.sale_mode ?? ''

      if (saleMode === '0') {
        window.localStorage.removeItem('TMH-SALE-DATA')
      }

      if (shopCode && saleMode !== '0') {
        const saleData = {
          shop_code: shopCode,
          sale_mode: saleMode
        }
        this.queryParams = JSON.stringify(saleData)
        window.localStorage.setItem('TMH-SALE-DATA', this.queryParams)
        this.$root.$emit('setShowSaleFooter')
      }
      this.callProdID()
      this.benefitCall()
    },
    methods: {
      callProdID () {
        this.paramsID = this.productId.split(',')
      },
      benefitCall () {
        const clmUpsellIden = localStorage.getItem('clm-upsell')
        if (!clmUpsellIden) {
          localStorage.removeItem('clm-camp-id')
          return
        }
        const data = { identity: clmUpsellIden }
        this.$store.dispatch(GET_BENEFIT_ON_TOP, data).then((data) => {
          if (data.campId) {
            localStorage.setItem('clm-camp-id', data.campId)
          }
          const headlineObj = data.knowledgeDetailList.filter(k => k.topic === 'Headline')
          let headline = '-'
          let img = ''
          if (headlineObj.length > 0) {
            headline = headlineObj[0].script
            if (headlineObj[0].knowledgeAttachList?.length > 0) {
              img = headlineObj[0].knowledgeAttachList[0].image
            }
          }
          const subHeadline = data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Sub Headline')[0].script : '-'
          const terms = data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions').length > 0 ? data.knowledgeDetailList.filter(k => k.topic === 'Term and Conditions')[0].script : '-'
          this.campBean = {
            headline,
            subHeadline,
            img,
            terms,
            hasValue: true
          }
          if (this.propocode) {
            if (data.propocodeList.length > 0) {
              this.isClmBenefit = data.propocodeList.some(pp => pp === this.propocode)
            } else {
              this.isClmBenefit = false
            }
          }
          this.propocodeList = data.propocodeList
        }).catch(() => {
          this.isClmBenefit = false
          localStorage.removeItem('clm-upsell')
          localStorage.removeItem('clm-camp-id')
        })
      },
      trackAnalytics (productData) {
        const product = [productData]
        const sim = ['sim", "vlearn']
        const isSim = sim.includes(product[0].type_of_product)
        const event = {
          event: 'ecommerce_event',
          event_category: isSim ? 'SIM' : 'device',
          event_action: 'click',
          event_label: isSim ? 'SIM_click' : 'device_click',
          ecommerce: {
            currencyCode: 'THB'
          }
        }
        const impressions = product.map((data, index) => ({
          name: data.title.th,
          id: data.id,
          price: parseFloat(data.price).toFixed(2),
          category: 'device',
          brand: '',
          position: index,
          dimension6: parseFloat(data.compare_at_price_max).toFixed(2),
          dimension7: parseFloat(data.price).toFixed(2),
          variant: '',
          dimension9: '',
          dimension10: '',
          dimension11: '',
          dimension8: '',
          list: isSim ? 'SIM' : 'device'
        }))
        event.ecommerce.click = { products: impressions }
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(event)
      },
      getCatagoryText (value) {
        this.$emit('categoryPageText', value)
      },
      filterChanged (value) {
        if (!this.filter) return
        const oldVal = JSON.stringify(this.filter)
        const newVal = JSON.stringify(value)
        if (oldVal !== newVal) {
          this.filter = JSON.parse(JSON.stringify(value))
        }
      },
      search () {
        this.$set(this.filter, 'q', this.searchQuery)
        this.$refs.filter.updateSearchQuery(this.searchQuery)
      },
      formatTitle (title) {
        let titles = {}
        Object.keys(title).forEach((lang) => {
          const split = title[lang].split('_')
          titles = {
            ...titles,
            [lang]: title[lang].includes('_') ? split[1] : split[0]
          }
        })
        return titles
      }
    }
  }
</script>

<style lang="scss" scoped src="./store.scss"></style>
