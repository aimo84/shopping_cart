<template>
  <dialog-element
    ref="dialog"
    class="product-detail"
    show-close-button
  >
    <div slot="content" >
      <loading-element v-if="loading" />
      <template v-else>
        <img class="desktop" :src="data.package_detail_desktop" />
        <img class="mobile" :src="data.package_detail_mobile" />
      </template>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Loading from '@components/loading'
  import { FETCH_PACKAGE } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'loading-element': Loading
    },
    data: () => ({
      loading: true,
      data: {}
    }),
    methods: {
      async open (id) {
        this.loading = true
        this.$refs.dialog.open()
        const data = await this.$store.dispatch(FETCH_PACKAGE, id)
        this.data = data.record[0]
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-detail::v-deep {
    .content {
      max-width: 860px;
      min-height: 400px;

      .dialog-content {
        padding-top: 48px;
        border-bottom: none;
      }

      img {
        max-width: 100%;
        margin: auto;
        display: block;

        &.mobile {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .product-detail::v-deep .content img {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }
  }
</style>
