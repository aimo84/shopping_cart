<template>
  <dialog-element
    ref="dialog"
    show-close-button
  >
    <template slot="content">
      <div class="dialog-container">
        <template v-if="type === 'unknown-birthtime'">
        <div class="title">เบอร์ฟันธง ตามลัคนาราศี</div>
        <div class="subtitle">
          <div>โปรแกรมจะกำหนดเวลาเกิดที่เวลา 06.18น.</div>
          <div>ทั้งนี้อาจเกิดความคลาดเคลื่อนในการคำนวณได้ ซึ่งเป็นข้อจำกัดตามการดูพื้นดวงชะตาตามลัคนาราศี</div>
        </div>
        </template>
        <template v-if="type === 'tnc'">
          <div class="title">นโยบายคุ้มครองข้อมูลส่วนบุคคล</div>
          <div class="subtitle">
            <div>เพื่อความแม่นยำในการเลือกเบอร์ตามลัคนาราศี จำเป็นต้องใช้ข้อมูลของท่านเพื่อ</div>
            <div>การคำนวณหาเบอร์ฟันธงที่เหมาะสมกับท่านเท่านั้น </div>
            <div>ทั้งนี้ตามนโยบายคุ้มครองข้อมูลส่วนบุคคล ข้อมูลของท่านจะไม่ถูกเก็บ รวบรวม และ/หรือนำไปใช้ เพื่อการอื่นแต่อย่างใด</div>
          </div>
        </template>
        <button @click="$refs.dialog.close()">ยอมรับ</button>
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
      type: ''
    }),
    methods: {
      open (type) {
        this.type = type
        this.$refs.dialog.open()
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

    .title {
      font-family: 'TrueBold';
      color: #424242;
      font-size: 24px;
    }

    button {
      height: 50px;
      background-color: #E63129;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      color: #fff;
      padding: 0 32px;
      margin-top: 24px;
      font-family: 'TrueBold';
      font-size: 20px;
    }
  }
</style>
