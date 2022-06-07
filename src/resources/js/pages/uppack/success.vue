<template>
  <div class="page-container text-center">
    <loading-element v-if="isLoading" />
    <div v-else>
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

      <div class="my-1 text-left font-size-2">
        <span class="font-bold ml-1">สรุปรายการ</span>
      </div>

      <div class="table-header">สรุปแพ็กเกจใหม่</div>
      <div class="table table-success">
        <table>
          <thead>
            <tr>
              <th>แพ็กเกจ</th>
              <th>Voice</th>
              <th>Data</th>
              <th>WiFi</th>
              <th>ราคา</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight text-left">{{ selectedPackage.name }}</td>
              <td class="min-w-100">{{ selectedPackage.voice }}</td>
              <td class="min-w-100">{{ selectedPackage.data }}</td>
              <td>{{ selectedPackage.wifi }}</td>
              <td class="highlight">{{ selectedPackage.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="footer-container">
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
  import Input from '@components/input'
  import Button from '@components/button'
  import Content from './content.json'
  import Loading from '@components/loading'

  import {
    validateNumber,
  } from '@utils/common'

  import {
    FETCH_STORE_BANNER,
    FETCH_STORE_FILTER,
    SEARCH_STORE,
    FETCH_VERIFY_CONFIG,
    FETCH_PACKAGES,
    POST_CLM_SUCCESS
  } from '@store/actions.type'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'loading-element': Loading,
    },
    data: () => ({
      isLoading: true,
      Content,
      error: false,
      errorMessage: '',
      mobileNo: ''
    }),
    computed: {
      locale () {
        if (!this.$i18n || this.$i18n.locale === undefined) return 'TH'

        return this.$i18n.locale.toUpperCase()
      },
      selectedPackage () {
        const selectedOffer = localStorage.getItem('selectedOffer')

        return this.$store.state.clm.clmPackageList.moi ? this.$store.state.clm.clmPackageList.moi.offerSummaryList.map(offer => {
          const term = offer.offerSummaryInfo[0].termConditionInfo
            ? offer.offerSummaryInfo[0].termConditionInfo.filter(t => t.languageCode == this.locale)
            : [];

          const fixSpeedData = offer.offerSummaryInfo[0].bundleInfo.data.filter(d => d.dataGroup === 'FIX SPEED' && d.subKey === 'Internet Vol')
          let checkFixSpeed = false
          let fixSpeedWording = Content.packages.fix_speed[this.locale.toLowerCase()]

          if (fixSpeedData.length > 0) {
            checkFixSpeed = true
            if (fixSpeedData[0].maxSpeedUnit === 'Kbps') {
              let result = parseInt(fixSpeedData[0].maxSpeed) / 1024
              if (result >= 1024) {
                fixSpeedWording += (result / 1024).toString() + ' Gbps'
              } else {
                fixSpeedWording += result.toString() + ' Mbps'
              }
            } else {
              fixSpeedWording += fixSpeedData[0].maxSpeed + ' ' + fixSpeedData[0].maxSpeedUnit
            }
          }

          return {
            name: offer.offerSummaryInfo[0].offerInfo.offerDescription,
            voice: offer.messageInfo.bundle.voice ? offer.messageInfo.bundle.voice.filter(v => v.languageCode == this.locale)[0]?.message : '-',
            data: checkFixSpeed ? fixSpeedWording : offer.messageInfo.bundle.data.filter(d => d.subKey == 'Internet Vol' && d.languageCode == this.locale)[0]?.message,
            wifi: offer.messageInfo.bundle.data.filter(d => d.subKey == 'WiFi' && d.languageCode == this.locale)[0]?.message,
            price: offer.messageInfo.cost.filter(c => c.languageCode == this.locale)[0]?.message,
            termCondition: term.length > 0 ? term[0].termCondition : '-',
            offerName: offer.offerSummaryInfo[0].offerInfo.offerName
          }
        }).filter(m => m.offerName === selectedOffer)[0] : {}
      },
    },
    async mounted () {
      this.postSuccess()
    },
    methods: {
      validateNumber,
      async postSuccess () {
        const body = {
          identity: localStorage.getItem('clm-identity'),
          correlation_id: localStorage.getItem('correlationId')
        }

        this.$store.dispatch(POST_CLM_SUCCESS, body)
          .then((data) => {
            this.isLoading = false

            if (data.is_pass) {
              this.mobileNo = data.clm_verify_redis_data_json_decode?.input.mobile_number || '-'
              this.mobileNo = this.mobileNo.length === 10 ? `${this.mobileNo.slice(0, 3)}-${this.mobileNo.slice(3, 6)}-${this.mobileNo.slice(6)}`
                : this.mobileNo.length === 9 ? `${this.mobileNo.slice(0, 2)}-${this.mobileNo.slice(2, 5)}-${this.mobileNo.slice(5)}`
                : '-';
            }
          })
          .catch((error) => {
            this.isLoading = false
            this.error = true
            this.errorMessage = error[this.$i18n.locale]
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table {
    &.table-success thead tr th:first-child,
    &.table-success tbody tr td:first-child {
      min-width: 180px;
    }
  }

  .min-w-100 {
    min-width: 100px;
  }
</style>

<style scoped lang="scss" src="./style.scss"></style>
