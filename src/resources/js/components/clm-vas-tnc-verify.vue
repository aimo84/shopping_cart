<template>
  <dialog-element
    ref="dialog"
    class="terms-dialog"
  >
    <div slot="content">
        <div class="long-terms">
          <div class="title">Term and Conditions</div>
          <div>{{ verifytnc }}</div>
        </div>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'

  export default {
    components: {
      'dialog-element': Dialog
    },
    data: () => ({
      verifytnc: String
    }),
    methods: {
      showTermsDialog () {
        this.$refs.dialog.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .long-terms > div {
    margin-bottom: 8px;
  }

  .long-terms .left {
    text-align: left;
  }

  .long-terms .tol {
    text-align: left;
    line-height: 1.1;
  }
</style>
