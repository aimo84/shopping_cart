<template>
  <div class="stick-banner-container">
    <template v-for="(banner, index) in banners">
      <div class="item" :key="`item-${index}`">
        <a :href="banner.link" @click="trackAnalytics('click', index)">
          <img 
            width="392"
            height="180"
            v-if="banner && banner.custom_fields.base_url && banner.banner" 
            :src="`${banner.custom_fields.base_url}${banner.banner}`" 
          />
        </a>
      </div>
      <div v-if="index === 0" :key="`break-${index}`" class="break-desktop" />
    </template>
  </div>
</template>

<script>

  export default {
    props: {
      banners: Array
    },
    mounted () {
      this.trackAnalytics('view')
    },
    methods: {
      trackAnalytics (type, key) {
        const banners = key >= 0 ? [this.banners[key]] : this.banners
        const promoKey = type === 'view' ? 'promoView' : 'promoClick'
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'ecommerce_event',
          event_category: 'internal_promotions',
          event_action: 'promotion_' + (type || 'view'),
          event_label: 'stick_banner',
          ecommerce: {
            [promoKey]: {
              promotions: banners.map((banner, index) => ({
                id: banner.slug?.th,
                name: banner.description?.th,
                creative: 'store-cat-slider',
                position: `slide-${index + 1}`
              }))
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.stick-banner-container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 6px 12px;
  margin: 0 0 0 0;

  img {
    width: 100%;
    height: auto;
  }

  a {
    display: contents;
    line-height: 0;
  }

  .item {
    flex: 1;
    display: flex;  
  }

  .break-desktop {
    gap: 0 0;
    width: 100%
  }
  
  @media screen and (min-width: 800px) {
    .break-desktop {
      display: none;
    }
  }
}
</style>
