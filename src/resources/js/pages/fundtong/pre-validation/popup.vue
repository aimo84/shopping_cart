<template>
  <dialog-element
    ref="dialogError"
    class="modal-error"
  >
    <div slot="content" >
      <loading-element v-if="loading" />
      <template v-else>
        <div class="content-section">
          <div class="title-error">{{ this.textError.titleError }}</div>
          <img v-if="this.textError.commonError" src="/images/icons/feather-alert-triangle.png" />
          <p>{{ this.textError.textError1 }}</p>
          <p>{{ this.textError.textError2 }}</p>
          <p v-if="this.textError.textError3">{{ this.textError.textError3 }}</p>
        </div>
        <div class="footer-section">
          <button-element class="button"
                          @click="goToButton"
          >{{ this.textError.buttonText }}</button-element>
        </div>
      </template>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Loading from '@components/loading'
  import ButtonElement from '@components/button'

  export default {
    components: {
      'dialog-element': Dialog,
      'loading-element': Loading,
      'button-element': ButtonElement
    },
    props: {
      textError: Object
    },
    data: () => ({
      loading: true,
      data: {}
    }),
    methods: {
      async open () {
        this.loading = true
        this.$refs.dialogError.open()
        this.loading = false
      },
      goToButton () {
        location.replace(this.textError.buttonPath)
      }
    }
  }
</script>
