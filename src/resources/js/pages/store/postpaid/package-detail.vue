<template>
  <div class="package-detail">
    <div class="page-container">
      <div class="tabs-container" :class="tab">
        <div class="tab-highlight" :class="tab" />
        <div class="tab-label detail" @click="tab = 'detail'">
          {{ Locale.package_detail[$i18n.locale] }}
        </div>
        <div class="tab-label term" @click="tab = 'term'">
          {{ Locale.tnc[$i18n.locale] }}
        </div>
      </div>
      <div class="package-view">
        <template v-if="tab === 'detail'">
          <img class="desktop" loading="lazy" :src="packages.package_detail_desktop" />
          <img class="mobile" loading="lazy" :src="packages.package_detail_mobile" />
        </template>
        <template v-if="tab === 'term'">
          <div class="terms-container" v-html="packages.term_long" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    props: {
      packages: Object,
      product: Object
    },
    data: () => ({
      tab: 'detail',
      Locale
    }),
    methods: {
      toggleNumber (e) {
        e.target.toggleAttribute('active')
      }
    }
  }
</script>

<style lang="scss" scoped>
.package-detail {
  background-color: #941b18;
  text-align: center;

  .page-container {
    padding: 32px 24px;
    max-width: 1100px;
    margin: auto;
  }

  .tabs-container {
    position: relative;
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    grid-gap: 2px;
    margin-bottom: 16px;

    .tab-highlight {
      position: absolute;
      width: calc(50% - 2px);
      background: #ff0000;
      border-radius: 8px;
      top: 2px;
      bottom: 2px;
      left: 2px;
      pointer-events: none;
      transition: 300ms transform ease;

      &.term {
        transform: translateX(100%);
      }
    }

    .tab-label {
      padding: 0 36px;
      cursor: pointer;
      z-index: 1;
      font-family: 'TrueBold';
    }

    &.detail .tab-label.detail,
    &.term .tab-label.term {
      color: #fff;
    }
  }

  .package-view {
    padding: 24px 0;

    img {
      max-width: 100%;
      margin: auto;

      &.mobile {
        display: none;
      }
    }

    .terms-container {
      background: #fff;
      text-align: left;
      padding: 8px 24px;
      border-radius: 8px;
      max-height: 520px;
      overflow: auto;
      line-height: 40px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .package-detail .tabs-container {
    padding: 5px;
  }

  .package-detail .package-view img {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
}

@media screen and (max-width: 860px) {
  .package-detail .tabs-container .tab-label {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .package-detail .package-view .terms-container {
    line-height: 35px;
  }
}
</style>
