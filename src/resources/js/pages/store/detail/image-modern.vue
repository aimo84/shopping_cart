<template>
  <div class="stickypic top-0 left-0 right-0">
    <div class="image-container">
      <VueSlickCarousel
        ref="preview"
        class="preview-carousel"
        v-bind="previewSettings"
        @afterChange="selectedChanged"
        @swipe="previewSwiped"
        style="max-width: min(100vw, 400px); margin: auto; padding: 0 1rem;"
      >
        <div
          v-for="(image, key) in images"
          :key="key"
        >
          <div class="preview">
            <div
              v-if="inventory.quantity === 0"
              class="no-stock"
            >
              <div class="ring">{{ Locale.out_of_stock[$i18n.locale] }}</div>
            </div>
            <img
              :src="image"
              alt="Product Image"
              loading="lazy"
              :class="{'saturate-50 opacity-50': inventory.quantity === 0}"
            />
          </div>
        </div>
      </VueSlickCarousel>
      <discount-banner :coupon="coupon" v-if="!isPaysmooth"/>
      <div
        class="grid scroll-container"
        v-if="images"
      >
        <button
          aria-label="Scroll left"
          class="hidden lg:grid place-items-center p-1"
          @click="scroll('images', -300)"
          >
            <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
            </svg>
          </button>
            <div
              v-if="images"
              class="carousel-product grid gap-2 grid-flow-col items-start justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
              ref="images"
            >
              <div
                v-for="(image, key) in images"
                :key="key"
                class="shadow-lg rounded-xl"
              >
                <button
                  :data-test-image-id="image"
                  class="h-full img-box rounded-xl"
                  :class="{
                      'shadow-thick-red-500' : selected === image
                    }"
                  @click="selected = image"
                >
                  <div class="img-px">
                    <img :src="image" class="carousel" alt="Product Image">
                  </div>
                </button>
              </div>
            </div>
          <button
            aria-label="Scroll right"
            class="hidden lg:grid place-items-center p-1"
             @click="scroll('images', 300)"
          >
            <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
            </svg>
         </button>
      </div>
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
      inventory: {
        type: Object
      }
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
        // responsive: [
        //   {
        //     breakpoint: 1000,
        //     settings: {
        //       dots: true
        //     }
        //   }
        // ]
      },
      Locale: {
        out_of_stock: {
          th: 'สินค้าหมด',
          en: 'Out of stock'
        }
      }
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      isPaysmooth () {
        return this.productInfo.is_pay_smooth && this.productInfo.is_paysmooth_tmvh_token && this.productInfo.paysmooth_verified_info && this.productInfo.paysmooth_verified_info?.pay_smooth_verify_result?.response?.is_pass
      },
      images () {
        const images = this.productInfo.images.map((e) => e.url)
        const inventoriesImages = this.productInfo.inventories.map((e) => e.image.url)
        return [...new Set([...images, ...inventoriesImages].filter(e => e))]
      },
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
      'inventory.id' () {
        this.goTo(this.inventory.image.url)
      },
      selected (url) {
        const index = this.images.findIndex(e => e === url)
        this.$refs.preview.goTo(index)
      }
    },
    mounted () {
      this.inventory.image.url && this.goTo(this.inventory.image.url)
    },
    methods: {
      scroll (ref, offset) {
        this.$refs[ref].scrollBy({ left: offset, behavior: 'smooth' })
      },
      goTo (url) {
        this.selected = url
        const index = this.images.findIndex(e => e === url)
      },
      selectedChanged (e) {
        this.selected = this.images[e]
      },
      previewSwiped () {
        setTimeout(() => {
          const index = this.images.findIndex(e => e === this.selected)
          this.$refs.images.goTo(Math.floor(index / 4) * 4)
        }, 650)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 1280px) {
    .stickypic {
      padding-top: 0;
    }
  }

  @media (max-width: 1024px) {
    .stickypic {
      padding-top: 0;
    }
    .hidden {
      visibility: hidden;
    }
  }

  @media (max-width: 1023px) {
    .carousel-product {
      width: 95%;
    }
  }

  @media (max-width: 480px) {
    .carousel-product {
      width: 90%;
    }
  }
</style>

<style lang="scss" scoped>
  .stickypic {
    position: sticky;
  
    .image-container {
      width: 100%;
      text-align: center;

      .opacity-50 {
        opacity: 0.5;
      }

      .saturate-50 {
        filter: saturate(50%);
      }

      .carousel {
        width: 100%;
        max-width: 400px;
        margin: auto;
      }

      .preview {
        padding-bottom: 100%;
        position: relative;
        margin: 0 0 8px 0;

        &:focus {
          outline: none;
        }

        .no-stock {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #ffffff80;
          z-index: 9;

          .ring {
            position: absolute;
            width: 128px;
            height: 128px;
            background: #ffffff99;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #686868;
            font-family: 'TrueBold';
          }
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
  }

  .level-d {
    font-size: 1.5em;
    line-height: 1em;
    color: #2D2D2D;
  }
  .img-box {
    width: 85px;
  }
  .img-px {
    margin-top: 5px;
    margin-left: 3px;
  }
  button {
    outline: none;
    border: none;
    color: #000;
    background: #fff;
    font-family: inherit;
    font-size: 1em;
    line-height: 1em;
    cursor: pointer;
    padding: 0;
  }
  button:disabled {
    cursor: default;
  }
  ul {
    padding-left: 26px;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .bg-white {
    background-color: #fff;
  }
  .bg-red-100 {
    background-color: #f8d7da;
  }
  .bg-red-500 {
    background-color: #E12836;
  }
  .bg-red-600 {
    background-color: #C51B30;
  }
  .bg-gray-300 {
    background-color:#F7F7F7;
  }
  .bg-gray-500 {
    background-color:#D9D9D9;
  }
  .disabled\:bg-gray-500:disabled {
    background:#D9D9D9;
  }
  .disabled\:bg-gray-600:disabled {
    background-color:#E1E1E1;
  }
  .disabled\:text-gray-500:disabled {
    color:#989898;
  }
  .disabled\:opacity-20:disabled {
    opacity: 0.2;
  }
  .disabled\:border-transparent:disabled {
    border-color: transparent;
  }
  .disabled\:text-white:disabled {
    color: #fff;
  }
  .bg-black-gray-gradient {
    background: linear-gradient(90deg, #565656 0%, #1A1A1A 100.24%);
  }
  .bg-red-pink-gradient {
    background: linear-gradient(91.95deg, #E02C2D 0%, #E01974 100%);
  }
  .text-white {
    color: #fff;
  }
  .text-gray-500 {
    color: #989898;
  }
  .text-gray-600 {
    color: #8A8A8A;
  }
  .text-red {
    color: #D80027;
  }
  .text-red-900 {
    color: #721c24;
  }
  .text-cyan {
    color: #25BFC9;
  }
  .text-blue {
    color: #4F93E3;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-xs {
    font-size: 0.75rem;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .text-base {
    font-size: 1rem;
  }
  .text-lg {
    font-size: 1.125rem;
  }
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
  .text-3xl {
    font-size: 1.875rem;
  }
  .text-4xl {
    font-size: 2.25rem;
  }
  .text-5xl {
    font-size: 3rem;
  }
  .text-6xl {
    font-size: 3.75rem;
  }
  .text-7xl {
    font-size: 4.5rem;
  }
  .text-8xl {
    font-size: 6rem;
  }
  .text-9xl {
    font-size: 8rem;
  }
  .font-light {
    font-family: 'TrueLight';
  }
  .font-medium {
    font-family: 'TrueMedium';
  }
  .font-bold {
    font-family: 'TrueBold';
  }
  .border {
    border: 1px solid #F0F0F0;
  }
  .border-gray {
    border-color: #F0F0F0;
  }
  .border-gray-700 {
    border-color: #C4C4C4;
  }
  .border-red-200 {
    border-color: #f5c6cb;
  }
  .border-red-500 {
    border-color: #E12836;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-2 {
    border-width: 2px;
  }
  .border-solid {
    border-style: solid;
  }
  .border-b-7 {
    border-bottom-width: 7px;
  }
  .grid {
    display: grid;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  .gap-3 {
    gap: 0.75rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .gap-8 {
    gap: 2rem;
  }
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .place-items-center {
    place-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  .m-auto {
    margin: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .p-1 {
    padding: 0.25rem;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .p-3 {
    padding: 0.75rem;
  }
  .p-4 {
    padding: 1rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .pt-4 {
    padding-top: 1rem;
  }
  .shadow-lg {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  .shadow-inset {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
  .shadow-gray-500 {
    box-shadow: 0 0 0 1px #F0F0F0;
  }
  .shadow-red-500 {
    box-shadow: 0 0 0 2px #E12836;
  }
  .shadow-thick-red-500 {
    box-shadow: 0 0 0 3px #E12836;
  }
  .accessories-shadow-thick-red-500 {
    box-shadow: 0 0 0 3px #E01B6C;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .rounded-xl {
    border-radius: 0.75rem;
  }
  .rounded-2xl {
    border-radius: 1rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .underline {
    text-decoration: underline;
  }
  .no-underline {
    text-decoration: none;
  }
  .line-through {
    text-decoration: line-through;
  }
  .divide-x > * + * {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    border-top: 0;
    border-bottom: 0;
    border-style: solid;
  }
  .divide-gray-600 > * + * {
    border-color: #CECECE;
  }
  .w-\[20px\] {
    width: 20px;
  }
  .w-\[30px\] {
    width: 30px;
  }
  .w-\[38px\] {
    width: 38px;
  }
  .w-\[46px\] {
    width: 46px;
  }
  .w-\[52px\] {
    width: 52px;
  }
  .w-\[50\%\] {
    width: 50%;
  }
  .w-\[80\%\] {
    width: 80%;
  }
  .w-full {
    width: 100%;
  }
  .max-w-lg {
    max-width: 32rem;
  }
  .h-\[20px\] {
    height: 20px;
  }
  .h-\[30px\] {
    height: 30px;
  }
  .h-\[38px\] {
    height: 38px;
  }
  .h-\[46px\] {
    height: 46px;
  }
  .h-full {
    height: 100%;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-y-hidden {
    overflow-y: hidden;
  }
  .scroll-container {
    grid-template-columns: auto 1fr auto;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .full-width-scroll {
    // margin: 0 -16px;
    padding: 2px 16px;
  }
  .full-width-scroll-thick {
    padding: 15px 16px;
    margin-top: -10px;
  }
  .divider {
    border-top: 1px solid #F7F7F7;
  }
  .divider-3 {
    border-width: 3px;
  }
  .divider-gray-600 {
    border-color: #CECECE;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-default {
    cursor: default;
  }
  .opacity-50 {
    opacity: 0.5
  }
  .transition-transform {
    transition: transform;
  }
  .duration-300 {
    transition-duration: 300ms;
  }
  .transform-x-full {
    transform: translateX(100%)
  }
  .top-15 {
    top: 3.75rem;
  }
  .-bottom-1\.35 {
    bottom: -0.35rem;
  }
  .top-0 {
    top: 0;
  }

  @media screen and (max-width: 1023px) {
    .stickypic {
      position: none;

      .image-container {
        margin: 0 -1rem 0.5rem -1rem;
        width: auto;

        .carousel-product {
          margin: auto;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  // TODO: Migrate all the CSS to tailwind
  @media (min-width: 1024px) {
    .lg\:grid {
      display: grid;
    }
    .lg\:grid-flow-col {
      grid-auto-flow: column;
    }
    .lg\:grid-col-\[80px-1fr\] {
      grid-template-columns: 80px 1fr;
    }
    .lg\:grid-col-\[4fr-7fr\] {
      grid-template-columns: 4fr 7fr;
    }
    .lg\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\:col-start-2 {
      grid-column-start: 2;
    }
    .lg\:col-span-full {
      grid-column: 1 / -1;
    }
    .lg\:gap-4 {
      gap: 1rem;
    }
    .lg\:gap-8 {
      gap: 2rem;
    }
    .lg\:p-4 {
      padding: 1rem;
    }
    .lg\:p-6 {
      padding: 1.5rem;
    }
    .lg\:px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .lg\:mt-0 {
      margin-top: 0;
    }
    .lg\:ml-\[15\%\] {
      margin-left: 15%;
    }
    .full-width-scroll {
      margin: 0;
      padding: 2px;
    }
    .full-width-scroll-thick {
      padding: 12px 9px;
    }
    .lg\:top-9 {
      top: 2.25rem;
    }
    .lg\:text-4xl {
      font-size: 2.25rem;
    }
    .lg\:cursor-pointer {
      cursor: pointer;
    }
  }
</style>

<style lang="scss" scoped>
  // TODO: Migrate all the CSS to tailwind
  @media (min-width: 1024px) {
    .xl\:mx-0 {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>


