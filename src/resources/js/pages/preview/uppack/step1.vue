<template>
  <div class="page-container text-center">
    <div class="step-container my-2">
      <button-element class="step">
        <img src="/images/icons/personal-info.png" />
        <div class="">ข้อมูลส่วนตัว</div>
      </button-element>
      <button-element class="step not-reached">
        <img src="/images/icons/choose-package.png" />
        <div class="">เลือกแพ็กเกจ</div>
      </button-element>
      <button-element class="step not-reached">
        <img src="/images/icons/summary.png" />
        <div class="">สรุปรายการ</div>
      </button-element>
    </div>

    <loading-element v-if="isLoading" fitHeight />

    <div v-else>
      <div class="my-2">
        <div class="personal-info">
          <span class="font-bold">ยินดีต้อนรับ : </span>
          <span>ตัวอย่างชื่อ ตัวอย่างนามสกุล</span>
        </div>
        <div class="personal-info">
          <span class="font-bold">หมายเลข ทรูมฟ เอช : </span>
          <span> 0899999999 </span>
        </div>
      </div>

      <div class="table-header">แพ็กเกจปัจจุบัน</div>
      <div class="table table-step1">
        <table>
          <thead>
            <tr>
              <th>แพ็กเกจ</th>
              <th>Voice</th>
              <th>Data</th>
              <th>Wifi</th>
              <th>ราคา</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>TrueSmartChoice 4G No Limit 499, Net speed 4 Mbps</td>
                <td class="min-w-100">-</td>
                <td class="min-w-100">อินเตอร์เน็ตไม่อั้น|ความเร็วคงที่ 4 Mbps</td>
                <td>WiFi|ไม่จำกัด</td>
                <td>499 บาท</td>
              </tr>
          </tbody>
        </table>
      </div>
      <div v-show="error" class="err-msg text-center my-1">{{ errorMessage }}</div>
      <button-element
        class="mt-4 next-btn"
        @click='nextStep'
      >ถัดไป</button-element>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Content from './content.json'
  import Loading from '@components/loading'

  import {
    getCLMQueries
  } from '@utils/common'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'loading-element': Loading,
    },
    data: () => ({
      isLoading: false,
      Content,
      error: false,
      errorMessage: ''
    }),
    computed: {
      campId () {
        const queries = Object.keys(this.$route.query);
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter];
      },
      locale () {
        if (!this.$i18n || this.$i18n.locale === undefined) return 'TH'

        return this.$i18n.locale.toUpperCase()
      },
    },
    methods: {
      nextStep () {
        this.$router.push({
          name: 'preview-uppack-step2',
          query: {
            campId: this.campId
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table {

    &.table-step1 th,
    &.table-step1 td {
      color: #808080;
      font-size: 23px;
      line-height: 23px;
    }

    &.table-step1 td:first-child {
      width: 33.33%;
      text-align: center;
      color: #e02020;
      font-size: 29px;
      line-height: 28px;
      font-weight: 600;
    }
  }

  .min-w-100 {
    min-width: 100px;
  }

  @media screen and (max-width: 860px) {

    .table {
      &.table-step1 th:first-child,
      &.table-step1 td:first-child {
        width: 50%;
      }
    }
}
</style>

<style scoped lang="scss" src="./style.scss"></style>