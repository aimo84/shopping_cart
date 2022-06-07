<template>
  <div class="banner-container">
    <div
      v-if="banners"
      class="carousel-container"
    >
      <carousel
        @page-change="onPageChange"
        :navigate-to="page"
        :per-page="1"
        :pagination-size="8"
        pagination-active-color="#E62627"
        pagination-color="#e0e0e0"
        navigation-enabled
        :navigation-prev-label="left"
        :navigation-next-label="right"
        loop
        :autoplay="true"
        :autoplay-timeout="autoplayTimeoutInMilliseconds"
        autoplay-hover-pause
      >
        <slide
          v-for="(banner, key) in banners"
          :key="key"
        >
          <a
            :href="banner.link"
            :data-position="`slide-${key + 1}`"
            @click="trackAnalytics('click', key)"
          >
            <img
              height="100%"
              width="100%"
              v-if="isMobile"
              :src="banner.custom_fields.base_url + banner.custom_fields.banner_mobile"
              :alt="banner.title[$i18n.locale]"
              :loading=" key  !== 0 ? 'lazy' : ''"
            />
            <img
              v-else
              height="100%"
              width="100%"
              :src="banner.custom_fields.base_url + banner.banner"
              :alt="banner.title[$i18n.locale]"
              :loading=" key !== 0 ? 'lazy' : ''"
            />
          </a>
        </slide>
      </carousel>
    </div>
    <div class="title-mobile-container">
      <span class="title-mobile">{{titleMobile.length>=50? titleMobile.substring(0,50)+'...':titleMobile}}</span>
    </div>
    <div class="pagination-button-container">

      <div
        class="pagination-button"
        v-for="(banner, key) in paginationButtonTextShow"
        :key="key"
      >
        <button
          :class="isCurrentPage(banner)? 'pagination-button-focus':'pagination-button-nonfocus'"
          @click="goToPage(banner)"
        >
          {{banner.length>=25? banner.substring(0,25)+'...':banner}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide
    },
    props: {
      banners: Array
    },
    data () {
      return {
        page: 0,
        paginationButtonTextShow: [],
        index: 0,
        autoplayTimeoutInMilliseconds: 8000,
        left: `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 21L1 11L11.4 1" stroke="#CCCCCC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        right: `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.6 0.999999L12 11L1.6 21" stroke="#CCCCCC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        pageCurrent: 0,
        titleMobile: '',
        pagenumber: 8
      }
    },
    computed: {
      isMobile () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      }
    },
    watch: {
      '$i18n.locale' (value) {
        this.updatePaginationText()
      }
    },
    mounted () {
      this.trackAnalytics('view')
      this.splitBanner(this.pagenumber)
      this.titleMobile = this.banners[0].title[this.$i18n.locale]
    },
    methods: {
      trackAnalytics (type, key) {
        const promoKey = type === 'view' ? 'promoView' : 'promoClick'
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'internal_promotions',
          event_action: 'promotion_' + (type || 'view'),
          event_label: 'main_banner',
          ecommerce: {
            [promoKey]: {
              promotions: this.banners.map((banner, index) => ({
                id: banner.slug?.th,
                name: banner.description?.th,
                creative: 'store-cat-slider',
                position: `slide-${index + 1}`
              }))
            }
          }
        })
      },
      goToPage (bannerTitle) {
        this.banners.forEach((value, index) => {
          if (value.title[this.$i18n.locale] === bannerTitle) {
            this.page = index
            if (index >= this.paginationButtonTextShow.length - 2 + this.index) {
              const shiftIndex = this.index - index + this.paginationButtonTextShow.length
              this.paginationButtonTextShow.push(
                this.banners[index + shiftIndex].title[this.$i18n.locale]
              )
              this.paginationButtonTextShow.shift()
              this.index++
            }
            if (this.index > 0) {
              if (index === this.index) {
                this.paginationButtonTextShow.pop()
                this.paginationButtonTextShow.unshift(
                  this.banners[index - 1].title[this.$i18n.locale]
                )
                this.index--
              } else if (index === this.index + 1) {
                this.paginationButtonTextShow.pop()
                this.paginationButtonTextShow.unshift(
                  this.banners[index - 2].title[this.$i18n.locale]
                )
                this.index--
              }
            }
          }
        })
      },
      onPageChange (pageCurrent) {
        this.pageCurrent = pageCurrent
        this.titleMobile = this.banners[this.pageCurrent].title[this.$i18n.locale]
        if (pageCurrent === this.index + this.pagenumber - 2) {
          this.paginationButtonTextShow.push(
            this.banners[pageCurrent + 2].title[this.$i18n.locale]
          )
          this.paginationButtonTextShow.shift()
          this.index++
        }
        if (this.index > 0) {
          const lastIndex = this.banners.length - this.paginationButtonTextShow.length
          if (pageCurrent === this.index + 1) {
            this.paginationButtonTextShow.pop()
            this.paginationButtonTextShow.unshift(
              this.banners[pageCurrent - 2].title[this.$i18n.locale]
            )
            this.index--
          }
          if (pageCurrent === this.index - lastIndex) {
            this.paginationButtonTextShow = []
            for (let index = 0; index < this.pagenumber; index++) {
              this.paginationButtonTextShow.push(
                this.banners[index].title[this.$i18n.locale]
              )
            }
            this.index = 0
          }
        } else {
          if (pageCurrent === this.banners.length - 1) {
            const lastIndex = this.banners.length - this.paginationButtonTextShow.length
            this.paginationButtonTextShow = []
            for (let index = lastIndex; index < this.banners.length; index++) {
              this.paginationButtonTextShow.push(
                this.banners[index].title[this.$i18n.locale]
              )
            }
            this.index = lastIndex
          }
        }
      },
      isCurrentPage (bannerTitle) {
        return (
          bannerTitle === this.banners[this.pageCurrent].title[this.$i18n.locale]
        )
      },
      splitBanner (pagenumber) {
        this.banners.forEach((value, index) => {
          this.paginationButtonTextShow.push(value.title[this.$i18n.locale])
        })
        this.paginationButtonTextShow.splice(pagenumber, this.banners.length)
      },
      updatePaginationText () {
        this.titleMobile = this.banners[this.pageCurrent].title[this.$i18n.locale]
        this.paginationButtonTextShow = []
        for (
          let index = this.index;
          index < this.pagenumber + this.index;
          index++
        ) {
          this.paginationButtonTextShow.push(
            this.banners[index].title[this.$i18n.locale]
          )
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  width: 100%;

  &::before {
    content: "";
    display: block;
  }

  .carousel-container {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .VueCarousel-slide {
    position: relative;
    img {
      width: 100%;
      max-height: 320px;
      object-fit: cover;
      object-position: center;
    }
  }

  .VueCarousel::v-deep {
    .VueCarousel-pagination {
      position: absolute;
      line-height: 0;
      bottom: -50px;
      @media screen and (min-width: 1200px) {
        bottom: 20px;
      }
      @media screen and (max-width: 415px) {
        bottom: -37px;
      }
    }

    .VueCarousel-dot {
      @media screen and (min-width: 1200px) {
        display: none;
      }
      padding: 0 !important;
      margin-left: 4px;
      margin-right: 4px;
      border-radius: 4px;
      &:hover {
        background-color: #e62627 !important;
      }
      &[aria-selected="true"] {
        width: 24px !important;
      }
    }

    .VueCarousel-navigation-button {
      display: none;
      @media screen and (min-width: 1200px) {
        display: block;
      }
      padding: 0 !important;
      transform: translateY(-50%);
      &:focus {
        outline: none;
      }
      &:hover path {
        stroke: #e62627;
      }
      &.VueCarousel-navigation-prev {
        left: calc(50% - 600px);
      }
      &.VueCarousel-navigation-next {
        right: calc(50% - 600px);
      }
    }
  }
  .pagination-button-container {
    @media screen and (max-width: 1199px) {
      display: none;
    }
    width: 100%;
    overflow-x: hidden;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: auto;
  }
  .pagination-button-focus {
    border: none;
    cursor: pointer;
    background-color: #fff;
    border-bottom-width: 5px;
    border-bottom: 0.25rem solid;
    border-bottom-color: #dd1b24;
    font-family: "TrueMediumNew";
    -webkit-font-smoothing: antialiased;
    font-size: 24px;
  }
  .pagination-button-nonfocus {
    cursor: pointer;
    background-color: #fff;
    border: none;
    font-family: "TrueMediumNew";
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
  }
  .title-mobile-container {
    @media screen and (min-width: 1200px) {
      display: none;
    }
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    margin: auto;
  }
  .title-mobile {
    @media screen and (max-width: 415px) {
      margin-bottom: 29px;
    }
    margin-bottom: 10px;
    font-size: 20px;
    font-family: "TrueMediumNew";
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
  }

  .content {
    position: absolute;
    top: 16px;
    left: 17px;
  }
  .font-true-medium {
    font-family: "TrueMedium";
  }
  .font-sans-serif {
    font-family: "sans-serif";
  }
  .line-height-1 {
    line-height: 1;
  }
  .font-weight-500 {
    font-weight: 500;
  }
  .font-weight-600 {
    font-weight: 600;
  }
  .font-weight-700 {
    font-weight: 700;
  }
  .font-weight-900 {
    font-weight: 900;
  }
  .text-white {
    color: white;
  }
  .text-gray {
    color: #928e94;
  }
  .flex {
    display: flex;
  }
  .text-1 {
    font-size: 18px;
  }
  .text-2 {
    margin-top: 10.3px;
    font-size: 31px;
    letter-spacing: -1.45px;
    word-spacing: 3px;
  }
  .text-3 {
    margin-top: 4px;
    margin-bottom: 18px;
    font-size: 22px;
  }
  .text-4 {
    margin-left: 2px;
    margin-bottom: 12px;
    font-size: 16.5px;
    letter-spacing: 0.7px;
  }
  .text-5-container {
    line-height: 8px;
  }
  .text-5a {
    font-size: 45px;
    letter-spacing: 2px;
  }
  .text-5b {
    font-size: 25px;
  }
  .border-right {
    margin-right: 14px;
    padding-right: 11px;
    border-right: 2px solid #928e94;
  }

  @media screen and (min-width: 1200px) {
    .content {
      top: 19px;
      left: calc(50% - 570px);
    }
    .text-1 {
      font-size: 23.5px;
    }
    .text-2 {
      font-size: 39px;
      letter-spacing: -2px;
      word-spacing: 4px;
    }
    .text-3 {
      margin-top: 0;
      margin-bottom: 25px;
      font-size: 33px;
    }
    .text-4 {
      margin-left: 2px;
      margin-bottom: 20px;
      font-size: 23px;
      line-height: 16px;
      // letter-spacing: 0.7px;
    }
    .text-5-container {
      line-height: 10px;
    }
    .text-5a {
      font-size: 55px;
      letter-spacing: 2.5px;
    }
    .text-5b {
      font-size: 35px;
    }
    .border-right {
      margin-right: 22px;
      padding-right: 20px;
      border-right: 2px solid #928e94;
    }
  }
}
</style>
