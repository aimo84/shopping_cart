<template>
  <dialog-element class="dialog" ref="dialog">
    <template slot="content">
      <div class="header">
        <span>Terms &amp; Conditions</span>
        <div class="close-btn" @click="$refs.dialog.close()">
          <svg width="16" height="16" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 11.1094C0.914062 11.4531 0.898438 12.0625 1.25781 12.4141C1.61719 12.7656 2.21875 12.7578 2.5625 12.4219L7 7.98438L11.4297 12.4219C11.7812 12.7656 12.3828 12.7734 12.7344 12.4141C13.0859 12.0547 13.0938 11.4609 12.7422 11.1094L8.30469 6.67188L12.7422 2.24219C13.0938 1.89062 13.0938 1.28906 12.7344 0.9375C12.375 0.585938 11.7812 0.585938 11.4297 0.929688L7 5.36719L2.5625 0.929688C2.21875 0.59375 1.60938 0.578125 1.25781 0.9375C0.90625 1.29688 0.914062 1.89844 1.25 2.23438L5.6875 6.67188L1.25 11.1094Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="tnc-content">
        <div class="title">5G Super Max Speed Plus</div>
        <div>ข้อกำหนดและเงื่อนไขรายการส่งเสริมการขาย5G Super Max Speed Plus</div>
        <p>รายการส่งเสริมการขายนี้สำหรับผู้สมัครที่ซื้อเครื่องรุ่น 5G ที่กำหนด พร้อมใช้บริการเลขหมายโทรศัพท์เคลื่อนที่ ทรูมูฟ เอช (“ผู้ใช้บริการ”) ของบริษัท ทรูมูฟ เอช  ยูนิเวอร์แซล คอมมิวนิเคชั่น จำกัด (“บริษัทฯ”) แบบชำระค่าบริการเหมาจ่ายรายเดือน (Post Paid)  ในนามบุคคลธรรมดา ระหว่างวันที่ 15 มกราคม 2564 ถึงวันที่ 30 มิถุนายน 2564 เท่านั้น หรือจนกว่าบริษัทฯจะมีการเปลี่ยนแปลง</p>
        <p>ผู้ใช้บริการซึ่งเปิดใช้บริการด้วยรายการส่งเสริมขาย “5G Super Max Speed Plus” จะได้รับสิทธิพิเศษ ดังนี้</p>
        <p>2.1 รับสิทธิเปิดใช้บริการเลขหมายใหม่ ทรูมูฟ เอช พร้อมการใช้บริการอินเทอร์เน็ต 3G 4G และ 5G จำนวน 50 กิกะไบต์ (GB) และโทรทุกเครือข่าย50 นาที โดยไม่มีค่าบริการเพิ่มเติม เป็นระยะเวลา 15 รอบค่าบริการ รายละเอียด ดังนี้ </p>
        <p>2.1.1 สำหรับรายการส่งเสริมการขายรายการส่งเสริมการขาย 5G Super Max Speed</p>
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
    methods: {
      open () {
        this.$refs.dialog.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog::v-deep {
    .content {
      border-radius: 8px;
    }
    .dialog-content {
      padding: 0;
    }
  }
  .header {
    background: #FEB800;
    color: #fff;
    font-family: "TrueBold";
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 8px;
    padding: 12px 16px;
    align-items: center;

    .close-btn {
      height: 16px;
      cursor: pointer;
    }
  }

  .tnc-content {
    padding: 16px;

    .title {
      font-family: 'TrueBold';
      color: #E63129;
      font-size: 24px;
    }
  }
</style>
