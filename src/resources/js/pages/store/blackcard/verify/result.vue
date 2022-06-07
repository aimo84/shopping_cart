<template>
  <div class="result-outer-container">
    <div class="result-container">
      <div class="icon success" v-if="result.is_pass">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
        </svg>
      </div>
      <div class="icon failed" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path stroke="#fff" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <template  v-if="result.is_pass">
        <div class="result-title success">{{ Locale.result_success[$i18n.locale] }}</div>
        <div class="result-title success-msg">ขอต้อนรับเข้าสู่ครอบครัวทรูแบล็ค (TrueBlack Family) เริ่มการสมัครบริการทรูมูฟเอชจากแคมเปญครอบครัวทรูแบล็ค เมื่อสมัครบริการสำเร็จ กรุณารอ SMS ยืนยันเพื่อเริ่มรับสิทธิประโยชน์ทรูแบล็คภายใน 30วันหลังจากนี้ และทรูแบล็คการ์ดจะจัดส่งให้คุณตามที่อยู่จัดส่งเอกสารภายใน 60 วัน</div>
      </template>
      <div class="result-title failed" v-else>{{ result.message[$i18n.locale] }}</div>
      <div class="privilege-container" :class="{ failed: !result.is_pass }">
        <div class="privilege-label">{{ Locale.thai_id[$i18n.locale] }}</div>
        <div class="privilege-items">{{ thaiid }}</div>
      </div>
      <div class="result-button-container">
        <button-element
          v-if="result.is_pass"
          @click="next"
          class="button next"
        >{{ Locale.next[$i18n.locale] }}</button-element>
        <router-link
          v-else
          :to="`/online-store/item/${$route.params.product}`"
        >
          <button-element class="button back">{{ Locale.back[$i18n.locale] }}</button-element>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      id: [String],
      data: [Object],
      result: [Object],
      product: [Object]
    },
    data: () => ({
      Locale
    }),
    computed: {
      thaiid () {
        return this.data.id_number.substring(0, 3) + 'XXXXXX' + this.data.id_number.substring(9, 13)
      }
    },
    methods: {
      computeVerifyTime () {
        const dt = new Date()
        const year = dt.getFullYear()
        let month = dt.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        let date = dt.getDate()
        date = date < 10 ? `0${date}` : date
        let hours = dt.getHours()
        hours = hours < 10 ? `0${hours}` : hours
        let mins = dt.getMinutes()
        mins = mins < 10 ? `0${mins}` : mins
        let secs = dt.getSeconds()
        secs = secs < 10 ? `0${secs}` : secs
        return `${year}-${month}-${date} ${hours}:${mins}:${secs}`
      },
      next () {
        window.localStorage.setItem('family-black-verify-form', JSON.stringify({
          thai_id: this.data.id_number,
          verify_time: this.computeVerifyTime(),
          birth_date: `${this.data.date_birth}/${this.data.month_birth}/${this.data.year_birth}`,
          ekyc: {
            id_number: this.data.id_number,
            face_recog_cust_capture: this.data.ekyc.temp.face,
            'face-recog-cust-certificate': this.data.ekyc.temp.front,
            face_recog_cust_capture_filename: this.data.ekyc.filename.face,
            'face-recog-cust-certificate-filename': this.data.ekyc.filename.front
          }
        }))
        this.$router.push(`/online-store/postpaid/${this.id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 24px auto;
    padding: 76px 24px 50px 24px;

    .icon {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      margin-bottom: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #fff;
      }

      &.success {
        background-color: #54c74c;
        box-shadow: 1px 1px 0 #1f9716;
      }

      &.failed {
        background-color: #ff0000;
        box-shadow: 1px 1px 0 #8e0000
      }
    }
    .result-title {
      font-size: 40px;
      line-height: 40px;
      font-family: 'TrueBold';
      text-align: center;
      max-width: 600px;
      white-space: pre-line;

      &.success {
        color: #e4a20f;
      }

      &.success-msg {
        font-family: Tahoma;
        font-size: 14px;
        line-height: 20px;
        color: #000;
        margin-top: 8px;
      }

      &.failed {
        color: #ff0000;
      }
    }
    .privilege-container {
      max-width: 400px;
      width: 100%;
      border-radius: 8px;
      background-color: #f5f5f5;
      padding: 12px;
      text-align: center;
      margin: 20px auto;

      &.failed {
        border: solid 1px #ff0000;
        background-color: rgba(255, 0, 0, 0.1);
      }

      .privilege-label {
        color: #4a4a4a;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 4px;
      }
      .privilege-items {
        font-family: 'TrueBold';
        font-size: 30px;
        line-height: 30px;
        color: #000;
      }
    }
    .result-button-container {
      margin-top: 32px;
      display: flex;

      .button {
        background-color: #ff0000;

        &.back {
          background-color: #666;
        }
      }
    }
  }

  @media screen and (max-width: 1148px) {
    .result-outer-container {
      padding-top: 24px;
    }
    .result-container {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 640px) {
    .result-container {
      padding: 30px 24px 50px 24px;

      .icon {
        margin-bottom: 16px;
      }

      .result-title {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
</style>
