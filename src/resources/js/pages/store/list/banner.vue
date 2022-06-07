<template>
  <div class="banner-container" :class="isExpandedPage && 'expanded-width'" :style="isCategoryPage || isFlashsale || isPartnerPage ? 'margin-top: 30px;' : ''">
    <div v-if="banners" class="carousel-container">
      <div class="carousel-inner-container">
        <carousel
          :per-page="1"
          pagination-active-color="#ff0000"
          pagination-color="#ffffff80"
          :pagination-size="8"
          navigation-enabled
          :navigation-prev-label="left"
          :navigation-next-label="right"
          loop
          autoplay
          autoplay-hover-pause
          :autoplay-timeout="8000"
          class="carousel"
        >
          <template v-if="banners">
            <slide v-for="(banner, key) in banners" :key="key">
              <a
                class="carousel-link"
                :href="banner.link"
                :id="banner.slug.th"
                :data-position="`slide-${key + 1}`"
                @click="trackPromoClick(banner, key)"
              >
                <img
                  :src="image(banner)"
                  :alt="banner.title.th"
                  loading="lazy"
                />
              </a>
            </slide>
          </template>
        </carousel>
      </div>
    </div>
    <div v-else-if="!isShopPage" class="skeleton dark animate" />
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide
    },
    data: () => ({
      left: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>`,
      right: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                <path d="M0 0h24v24H0V0z" fill="none"/>
              </svg>`
    }),
    computed: {
      banners () {
        return (
          this.$store.state.store.banner.data &&
          this.$store.state.store.banner.data.record.sections[0].contents
        )
      },
      isShopPage () {
        return this.$route.name === 'online-store-shop'
      },
      isCategoryPage () {
        return this.$route.name === 'online-store-list'
      },
      isFlashsale () {
        return this.$route.name === 'online-store-flashsale'
      },
      isPartnerPage () {
        return this.$route.name === 'online-store-partner-privilege'
      },
      isExpandedPage () {
        return this.isShopPage || this.isFlashsale || this.isPartnerPage || this.isCategoryPage
      }
    },
    watch: {
      banners (val) {
        if (val) this.trackPromoView()
      }
    },
    methods: {
      image (item) {
        return `${item.custom_fields.base_url}${item.banner}`
      },
      trackPromoView () {
        if (sessionStorage.getItem('truestore-ga-level-c-banner')) return
        sessionStorage.setItem('truestore-ga-level-c-banner', Date.now())
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'internal_promotions',
          event_action: 'promotion_view',
          event_label: 'store_banner',
          ecommerce: {
            promoView: {
              promotions: this.banners.map((e, i) => ({
                id: e.slug.th,
                name: e.description.th,
                creative: 'store-cat-slider',
                position: `slide-${i + 1}`
              }))
            }
          }
        })
      },
      trackPromoClick (e, i) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'internal_promotions',
          event_action: 'promotion_click',
          event_label: 'store_banner',
          ecommerce: {
            promoClick: {
              promotions: [
                {
                  id: e.slug.th,
                  name: e.description.th,
                  creative: 'store-cat-slider',
                  position: `slide-${i + 1}`
                }
              ]
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner-container {
    background-color: #fff;
    position: relative;
    max-width: 1100px;
    max-height: 400px;
    margin: auto auto 20px auto;

    .skeleton {
      padding-bottom: calc(400% / 11);
      width: 100%;

      &::before {
        animation-duration: 2000ms;
        width: 300px;
      }
    }

    .carousel-container {
      &::before {
        content: "";
        padding-bottom: calc(400% / 11);
        display: block;
      }
    }

    .carousel-inner-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ccc;
    }

    .carousel-link {
      display: block;
      max-height: 400px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin: 0;
      }
    }

    .carousel::v-deep {
      height: 100%;

      .VueCarousel-pagination {
        position: absolute;
        bottom: 10px;

        .VueCarousel-dot-container {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 22px;
          margin-top: 20px;
          height: 22px;
          padding: 0 4px;
          line-height: 0;

          button[style] {
            margin-top: 0 !important;
            padding: 7px 5px !important;
          }
        }
      }
      .VueCarousel-navigation-prev,
      .VueCarousel-navigation-next {
        padding: 4px !important;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        width: 40px;
        height: 40px;

        svg {
          width: 32px;
          height: 32px;
          fill: #fff;
        }
      }

      .VueCarousel-navigation-prev {
        margin-left: 20px;
      }

      .VueCarousel-navigation-next {
        margin-right: 20px;
      }

      .VueCarousel-dot:focus,
      .VueCarousel-navigation-button:focus {
        outline: none;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .banner-container {
      margin-bottom: 0;
    }
  }

  .expanded-width {
    max-width: 1280px;
  }
</style>
