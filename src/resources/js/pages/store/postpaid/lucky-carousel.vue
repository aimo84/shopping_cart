<template>
  <div :class="{'lucky-carousel mb-64px mobile-mb-40px' : !isLucky9999Home}">
    <div class="header-container header-container-mg">
      <div class="tabs-container" :class="isLucky9999Home ? 'mobile-mb-8px mobile-tab-pd' : 'boarder-bottom tab-pd mobile-grid-grap'">
        <div class="header mobile-lh lucky-9999-header-padding" v-if="isLucky9999Home"><span>{{ Locale.lucky_9999_title.prefix[$i18n.locale] }}</span><span class="block">{{ Locale.lucky_9999_title.suffix[$i18n.locale] }}</span></div>
        <div class="header" v-else>{{ Locale.lucky_title[$i18n.locale] }}</div>
      </div>
      <div class="subtitle lucky-9999-subtitle-padding" v-if="isLucky9999Home" v-html="Locale.lucky_9999_subtitle[$i18n.locale]"></div>
      <div class="subtitle subtitle-padding" v-else v-html="Locale.lucky_subtitle[$i18n.locale]"></div>
    </div>
    <VueSlickCarousel
      v-if="!isLucky9999Home"
      v-bind="settings"
      class="carousel"
    >
      <div>
        <router-link
          class="item"
          :to="{
            name: 'drlucky-home',
          }"
        >
          <img
            src="/images/drlucky/berfuntong-cover-2.png"
            alt="SIM Funtong Package Image"
          />
        </router-link>
      </div>
      <div
        v-for="(item, key) in packages"
        :key="key"
      >
        <router-link
          class="item"
          :to="{
            name: 'online-store-lucky',
            params: {
              id: `L${item.product_id}`
            },
            query: {
              ...$route.query,
              nas_code: item.nas_code,
            }
          }"
        >
          <img
            :src="item.package_image_desktop"
            alt="SIM Package Image"
          />
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import Locale from './locale.json'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components: {
      VueSlickCarousel
    },
    props: {
      packages: Array
    },
    data: () => ({
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        responsive: [{
          breakpoint: 860,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      },
      Locale
    }),
    computed: {
      isLucky9999Home () {
        return this.$route.name === 'online-store-lucky999-home'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lucky-carousel {
    padding: 0 16px;
  }

  .mb-64px {
    margin-bottom: 64px;
  }

  .header-container {
    font-size: 1.5em;
    line-height: 1em;

    .tabs-container {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      font-family: 'TrueBold';
      margin-bottom: 8px;

      .header {
        font-size: 46px;
        color: #212121;
      }
    }

    .tab-pd {
      padding: 0px 16px 10px 16px;
    }

    .boarder-bottom {
        border-bottom: 4px solid #616161;
    }

    .subtitle {
      font-size: 28px;
      line-height: 28px;

      span {
        color: #ff0000;
      }
    }
    .subtitle-padding {
      padding-left: 16px;
    }
  }

  .header-container-mg {
    margin: auto auto 16px;
  }

  .item {
    display: block;
    padding: 6px;

    img {
      width: 100%;
      max-width: 220px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      border-radius: 8px;
      margin: auto;
      aspect-ratio: 1/1;
    }
  }
  .carousel::v-deep {
    .slick-dots li {
      width: 10px;
      height: 10px;
      margin: 0 4px;

      button {
        width: 10px;
        height: 10px;

        &:before {
          content: '';
          background: black;
          width: 10px;
          height: 10px;
          border-radius: 10px;
          transition: 150ms width ease;
        }
      }
      &.slick-active {
        width: 30px;

        button {
          width: 30px;
          height: 10px;

          &:before {
            background-color: #ff0000;
            width: 30px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .lucky-carousel {
      padding: 16px;
    }

    .mobile-mb-40px {
      margin-bottom: 40px
    }

    .mobile-lh {
      line-height: 1
    }

    .block {
      display: block;
    }

    .lucky-9999-header-padding {
      padding-left: 24px
    }

    .header-container {
      margin-left: -16px;
      margin-right: -16px;

      .tabs-container {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
      }

      .mobile-grid-grap {
        grid-gap: 16px
      }

      .mobile-mb-8px {
        margin-bottom: 0;
      }

      .mobile-tab-pd {
        padding: 0px 16px 0 16px;
      }

      .lucky-9999-subtitle-padding {
        padding-left: 37px;
      }
    }
  }
</style>
