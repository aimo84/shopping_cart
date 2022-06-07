<template>
  <dialog-element
    ref="dialog"
    show-close-button
  >
    <template slot="content">
      <div class="dialog-container">
        <template v-if="code === '2001'">
          <div>ขออภัย หมายเลขที่ท่านเลือกได้ถูกทำรายการไปแล้ว</div>
        </template>
        <template v-else-if="code === '2002'">
          <div>ขออภัย หมายเลขที่ท่านเลือกไม่สามารถทำรายการได้ขณะนี้</div>
        </template>
        <template v-else-if="code === '404-nas'">
          <div>กรุณาเลือกเบอร์ใหม่อีกครั้ง</div>
        </template>
        <template v-else>
          <div>ขออภัย ไม่สามารถทำรายการได้</div>
        </template>
        <button @click="back">กลับไปหน้าเลือกเบอร์</button>
      </div>
    </template>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'

  export default {
    components: {
      'dialog-element': Dialog
    },
    data: () => ({
      code: ''
    }),
    props: {
      offline: Boolean,
      defaultOpen: Boolean
    },
    mounted () {
      if (this.defaultOpen) {
        this.open('404-nas')
      }
    },
    methods: {
      open (code) {
        this.code = code
        this.$refs.dialog.open()
      },
      back () {
        this.$refs.dialog.close()
        this.$router.push({ name: 'drlucky-select' + (this.offline ? '-offline' : '') })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog-container {
    max-width: 320px;
    padding: 48px 0;
    margin: auto;
    text-align: center;
    display: grid;
    grid-gap: 24px;

    button {
      height: 50px;
      background-color: #E63129;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      color: #fff;
      padding: 0 32px;
      font-family: 'TrueBold';
      font-size: 20px;
    }
  }
</style>
