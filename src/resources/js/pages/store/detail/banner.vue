<template>
  <div>
    <div
      v-if="customBannerImg && !customBannerUrl"
      class="banner-container"
    >
      <img :src="customBannerImg" />
    </div>
    <a
      v-else
      class="banner-container"
      :href="customBannerImg ? customBannerUrl : bannerUrl"
      target="_blank"
    >
      <img :src="customBannerImg || bannerImg">
    </a>
  </div>
</template>

<script>
  export default {
    data: () => ({
      bannerUrl: 'https://iphone12.truemoveh.com/triplebonus',
      bannerImg: '/images/store/banner-jan-2020.jpg'
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data ? this.$store.state.products.productInfo.data.record : ''
      },
      customBannerImg () {
        return this.productInfo.additional?.banner
      },
      customBannerUrl () {
        return this.productInfo.additional?.['banner_url']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner-container {
    border-bottom: 6px solid #666;

    img {
      width: 100%;
      display: block;
    }
  }
</style>
