<template>
  <dialog-element
    ref="dialogError"
    class="modal-error"
  >
    <div slot="content" >
      <loading-element v-if="loading" />
      <template v-else>
        <div class="content-section">
          <img src="/images/icons/feather-alert-triangle-2.png" />
          <div class="title-error">{{Content.textError.titleError[$i18n.locale]}}</div>
          <p>{{Content.textError.textError1[$i18n.locale]}}</p>
          <p>{{Content.textError.textError2[$i18n.locale]}}</p>
        </div>
        <div class="footer-section">
          <button-element class="button"
                          @click="closeDialog"
          >{{Content.textError.buttonText[$i18n.locale]}}</button-element>
        </div>
      </template>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Loading from '@components/loading'
  import ButtonElement from '@components/button'
  import Content from './content.json'

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
      data: {},
      Content
    }),
    methods: {
      async open () {
        this.loading = true
        this.$refs.dialogError.open()
        this.loading = false
      },
      closeDialog () {
        this.$refs.dialogError.close()
      }
    }
  }
</script>
