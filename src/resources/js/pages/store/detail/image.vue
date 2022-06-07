<template>
  <div class="image-container">
    <div class="image-inner-container">
      <VueSlickCarousel
        ref="preview"
        v-bind="previewSettings"
        @afterChange="selectedChanged"
        @swipe="previewSwiped"
      >
        <div
          v-for="(image, key) in images"
          :key="key"
        >
          <div class="preview">
            <img
              :src="image"
              alt="Product Image"
              loading="lazy"
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <discount-banner :coupon="coupon" />
    <div class="image-inner-container">
      <VueSlickCarousel
        v-show="images.length > 1"
        ref="carousel"
        v-bind="settings"
        class="carousel"
      >
        <div
          class="carousel-item"
          v-for="(image, key) in images"
          :key="key"
        >
          <div
            class="carousel-img"
            @click="selected = image"
            :active="selected === image"
          >
            <img
              :src="image"
              alt="Product Image"
              loading="lazy"
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import DiscountBanner from '@components/discount-banner'

  export default {
    components: {
      VueSlickCarousel,
      'discount-banner': DiscountBanner
    },
    props: {
      images: Array
    },
    data: () => ({
      selected: '',
      previewSettings: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }),
    computed: {
      settings () {
        const max = Math.min(Math.max(this.images.length, 1), 4)
        return {
          infinite: true,
          speed: 500,
          slidesToShow: max,
          slidesToScroll: max
        }
      },
      coupon () {
        const data = this.$store.state.products.productInfo.data
        return data?.['coupon_data_from_bff']?.[data.record.id]
      }
    },
    watch: {
      selected (url) {
        const index = this.images.findIndex(e => e === url)
        this.$refs.preview.goTo(index)
      }
    },
    mounted () {
      this.selected = this.images[0]
    },
    methods: {
      goTo (url) {
        this.selected = url
        const index = this.images.findIndex(e => e === url)
        this.$refs.carousel.goTo(index)
      },
      selectedChanged (e) {
        this.selected = this.images[e]
      },
      previewSwiped () {
        setTimeout(() => {
          const index = this.images.findIndex(e => e === this.selected)
          this.$refs.carousel.goTo(Math.floor(index / 4) * 4)
        }, 650)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto 48px auto;
    text-align: center;

    .image-inner-container {
      padding: 0 24px;
    }

    .preview {
      padding-bottom: 100%;
      position: relative;
      margin: 0 0 8px 0;

      &:focus {
        outline: none;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .carousel-item {
      padding: 4px;

      &:focus {
        outline: none;
      }

      .carousel-img {
        width: 100%;
        height: 100%;
        position: relative;
        padding-bottom: 100%;
        border: 2px solid transparent;
        cursor: pointer;

        &[active] {
          border-color: red;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          margin: auto;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
    }

    .carousel::v-deep {
      width: 80%;
      margin: auto;

      .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .slick-slide {
        max-width: 96px;
      }

      .slick-prev,
      .slick-next {
        color: red;

        &:before {
          color: red;
          opacity: 1;
        }

        &.slick-disabled {
          pointer-events: none;
          opacity: 0;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .image-container {
      margin: 0 -20px 48px -20px;
      padding: 0;
      max-width: initial;
      width: auto;

      .image-inner-container {
        margin: auto;
        max-width: 400px;
      }
    }
  }
</style>
