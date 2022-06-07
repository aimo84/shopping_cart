<template>
  <dialog-element
    ref="dialogError"
    class="modal-error"
  >
    <div slot="content" style="align-content: center;" >
      <loading-element v-if="loading" />
      <template v-else>
        <div class="content-section">
          <div class="title-error">ขออภัยในความไม่สะดวก</div>
          <p>เมนูฟันธงไม่ support บน IE version นี้ กรุณา copy link และไปใช้บน Chrome เท่านั้น</p>
          <p>
            <input type="text" name="url" class="input-text" id="url" v-model="url">
            <button class="button footer-section btn-copy" @click="copyText">คัดลอกลิงก์ </button>
          </p>
        </div>
      </template>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Loading from '@components/loading'

  export default {
    components: {
      'dialog-element': Dialog,
      'loading-element': Loading,
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
        this.url = window.location.href
      },
      copyText: function () {
        const urlCopy = document.querySelector('#url')
        urlCopy.setAttribute('type', 'text')
        urlCopy.focus()
        urlCopy.select()
        try {
          const successful = document.execCommand('copy')
          const msg = successful ? 'สำเร็จ' : 'ไม่สำเร็จ'
          alert('คัดลอกลิงก์' + msg)
        } catch (err) {
          alert('ขออภัยคัดลอก, ไม่สำเร็จ')
        }
      }
    }
  }

</script>
<style>
  .input-text {
    width: 75%;
    min-width: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 28px;
  }
  .btn-copy {
    border: none;
    outline: none;
    color: #fff;
    padding: 8px 12px;
    font-size: 20px;
    border-radius: 8px;
    min-width: 80px;
    background-color: #ff0000;
    cursor: pointer;
    font-weight: 400;
    transition: 150ms background-color ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "TrueMedium";
  }
  .content {
     margin-left: auto;
     margin-right: auto;
     width: 600px;
  }
</style>
