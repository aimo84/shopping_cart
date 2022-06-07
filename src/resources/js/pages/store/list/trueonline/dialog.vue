<template>
  <dialog-element
    ref="dialog"
    class="dialog"
    show-close-button
  >
    <div slot="content">
      <coverage-element
        @success="success"
      />
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Coverage from './coverage'

  export default {
    components: {
      'dialog-element': Dialog,
      'coverage-element': Coverage
    },
    mounted () {
      this.$emit('loaded')
    },
    methods: {
      open () {
        this.$refs.dialog.open()
        document.body.style.top = '0px'
      },
      success () {
        this.$refs.dialog.close()
        this.$emit('success')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    &::v-deep .content {
      max-width: 900px;
      max-height: 90%;

      .close-btn {
        top: 17px;
      }
    }
  }
</style>
