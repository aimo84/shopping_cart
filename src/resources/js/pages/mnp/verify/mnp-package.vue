<template>
  <div class="package">
    <div class="title">{{ this.mnpPackage.name }}</div>
    <div class="subtitle">{{ this.mnpPackage.description }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    },
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      mnpPackage () {
        if (this.$route.name === 'mnp-bundle-verify' || this.$route.name === 'mnp-auto-verify') {
          return this.data.bundle.plan
        } else {
          return this.productInfo.mnp_package.find((e) => e.code === this.$route.params.code)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .package {
    border-bottom: 1px solid #efefef;
    line-height: 24px;
    padding-bottom: 24px;

    .title {
      font-family: 'TrueBold';
      font-size: 30px;
      line-height: 30px;
    }
  }
</style>
