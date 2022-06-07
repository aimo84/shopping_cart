<template>
  <div class="page-container text-center">
    <div>
      <div class="success-container mb-2">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
          </svg>
        </div>
        <div class="font-bold my-1 font-size-2">ระบบได้ดำเนินการเรียบร้อยแล้ว</div>
        <div>กรุณารอรับข้อความยืนยันทาง SMS ที่หมายเลข<br>
          <span class="font-bold font-size-2">{{ mobileNo }}</span>
        </div>
        <div>*ท่านสามารถตรวจสอบแพ็กเกจการใช้งานได้ที่ iService</div>
      </div>

      <div class="footer-container non-sticky">
        <div class="footer-actions">
          <button-element @click="$router.push('/online-store')">กลับสู่หน้าแรก</button-element>
        </div>
      </div>

      <div class="bottom-actions-container my-2">
        <div class="footer-actions">
          <button-element @click="$router.push('/online-store')">กลับสู่หน้าแรก</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      data: Object
    },
    computed: {
      isTol () {
        return this.$route.name === 'clmtolvas'
      },
      mobileNo () {
        const number = this.$store.state.clm.clmVasPackageList.mobile_phone
        const regex = number.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return number.replace(regex, '$1-$2-$3')
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
