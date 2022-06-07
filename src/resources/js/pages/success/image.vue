<template>
  <div class="image-container">
    <div v-if="hasPreToPost" class="pre-to-post">
      <div class="pre-to-post-download">
        <a class="button" href="https://iservice.truecorp.co.th/" target="_blank" />
      </div>
      <picture>
        <source :srcset="`/images/success/pre-to-post-success-${$i18n.locale}.webp`" type="image/webp">
        <img class="img" :src="`/images/success/pre-to-post-success-${$i18n.locale}.png`">
      </picture>
    </div>

    <template v-if="hasMnpBundle">
      <picture>
        <source :srcset="`/images/success/${mnpBundleImg}-${$i18n.locale}.webp`" type="image/webp">
        <img class="img" :src="`/images/success/${mnpBundleImg}-${$i18n.locale}.png`">
      </picture>
    </template>

    <template v-if="hasMnpOneStep">
      <picture>
        <source :srcset="`/images/success/mnp-one-step-success-${$i18n.locale}.webp`" type="image/webp">
        <img class="img" :src="`/images/success/mnp-one-step-success-${$i18n.locale}.png`">
      </picture>
      <div class="mnp-one-step-cannot-move">
        <div class="title">{{ Content.cannot_move_to_us_title[$i18n.locale] }}</div>
        <div>{{ Content.cannot_move_to_us_content[$i18n.locale] }}</div>
      </div>
    </template>

    <template v-if="hasPrepaidBundle">
      <picture>
        <source :srcset="`/images/success/prepaid-bundle-${$i18n.locale}.webp`" type="image/webp">
        <img class="img" :src="`/images/success/prepaid-bundle-${$i18n.locale}.png`">
      </picture>
    </template>
  </div>
</template>

<script>
  import Content from './Content.json'

  export default {
    props: {
      products: Array
    },
    data: () => ({
      Content
    }),
    computed: {
      productTypes () {
        return this.products.map((e) => e.product_type)
      },
      hasPreToPost () {
        return this.productTypes.indexOf('pre_to_post') >= 0
      },
      hasMnpBundle () {
        return this.productTypes.indexOf('device_mnp_bundle') >= 0
      },
      hasMnpOneStep () {
        return this.productTypes.indexOf('mnp_one_step') >= 0
      },
      hasPrepaidBundle () {
        return this.productTypes.indexOf('device_bundle_prepaid') >= 0
      },
      hasEntertainment () {
        return this.productTypes.indexOf('entertainment') >= 0
      },
      mnpBundleImg () {
        return this.isEntertainment ? 'mnp-success' : 'mnp-no-ep-success'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-container:empty {
    display: none;
  }

  .img {
    max-width: 480px;
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .pre-to-post {
    position: relative;

    .pre-to-post-download {
      position: absolute;
      max-width: 480px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      left: 0;
      right: 0;

      .button {
        cursor: pointer;
        width: 50%;
        height: 10%;
        position: absolute;
        bottom: 8.5%;
        left: 25%;
      }
    }
  }

  .mnp-one-step-cannot-move {
    background-color: #F5F6F4;
    border-radius: 12px;
    padding: 20px;
    color: #666;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    max-width: 480px;
    margin: 24px auto auto;

    .title {
      color: #000;
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 860px) {
    .mnp-one-step-cannot-move {
      font-size: 24px;
      line-height: 24px;
      border-radius: 8px;
    }
  }
</style>
