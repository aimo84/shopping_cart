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
          <span>{{ profile.name.firstName }} {{ profile.name.lastName }}</span>
        </div>
        <div class="personal-info">
          <span class="font-bold">หมายเลข ทรูมฟ เอช : </span>
          <span>{{ tmvhmobile }}</span>
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
            <template v-for="(item, key) in packages">
              <tr :key="`package_${key}`">
                <td>{{ item.name }}</td>
                <td class="min-w-100">{{ item.voice }}</td>
                <td class="min-w-100">{{ item.data }}</td>
                <td>{{ item.wifi }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </template>
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
    validateNumber,
    getCLMQueries
  } from '@utils/common'

  import {
    GET_CURRENT_PACKAGE
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
      errorMessage: ''
    }),
    computed: {
      campId() {
        const queries = Object.keys(this.$route.query)
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter]
      },
      locale () {
        if (!this.$i18n || this.$i18n.locale === undefined) return 'TH'

        return this.$i18n.locale.toUpperCase()
    },
      profile () {
        return this.$store.state.clm.clmProfile.int ? this.$store.state.clm.clmProfile.int.getBillingProfileInfoResponse.return.billingProfileInfo.billingInfo : { name: {} }
      },
      tmvhmobile () {
        return this.$store.state.clm.clmProfile.int ? this.$store.state.clm.clmProfile.int.getBillingProfileInfoResponse.return.billingProfileInfo.productInfo.subscriberInfo.exernalId : ''
      },
      packages () {
        return this.$store.state.clm.clmProfile.moi ? this.$store.state.clm.clmProfile.moi.offerSummaryList.map(offer => {
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
            voice: offer.messageInfo.bundle.voice ? offer.messageInfo.bundle.voice.filter(v => v.languageCode == this.locale)[0].message : '-',
            data: checkFixSpeed ? fixSpeedWording : offer.messageInfo.bundle.data.filter(d => d.subKey == 'Internet Vol' && d.languageCode == this.locale)[0].message,
            wifi: offer.messageInfo.bundle.data.filter(d => d.subKey == 'WiFi' && d.languageCode == this.locale)[0]?.message,
            price: offer.messageInfo.cost.filter(c => c.languageCode == this.locale)[0].message
          }
        }) : []
      }
    },
    async mounted () {
      this.fetchClmProfile()
    },
    methods: {
      validateNumber,
      fetchClmProfile () {
        let data = {
          'identity': localStorage.getItem('clm-identity') || '',
          'camp_id': this.campId
        }

        this.$store.dispatch(GET_CURRENT_PACKAGE, data)
          .then((data) => {
            this.isLoading = false
          })
          .catch((error) => {
            this.isLoading = false
            this.error = true
            this.errorMessage = error[this.$i18n.locale]
            this.$router.push('/uppack?campId=' + this.campId)
          })
      },
      nextStep () {
        this.$router.push({
          name: 'uppack-step2',
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
