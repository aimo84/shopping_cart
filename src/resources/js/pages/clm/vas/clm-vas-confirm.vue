<template>
  <div class="page-container text-center">
    <div class="step-container">
      <button-element class="step">
        <img src="/images/icons/personal-info.png" />
        <div class="">ข้อมูลส่วนตัว</div>
      </button-element>
      <button-element class="step">
        <img src="/images/icons/choose-package.png" />
        <div class="">เลือกแพ็กเกจ</div>
      </button-element>
      <button-element class="step">
        <img src="/images/icons/summary.png" />
        <div class="">สรุปรายการ</div>
      </button-element>
    </div>

    <div class="table-header">สรุปรายการแพ็กเกจเสริมที่สั่งซื้อ</div>

    <loading-element v-if="isLoading" />

    <div v-else class="my-1">
      <div class="personal-info">
        <span class="font-bold">แพ็กเกจ : </span>
        <span class="color-red">
          {{ selectedPackage.name }}
          <span class="package_chargetype" v-if="selectedPackage.chargeType === 'RC'"><br>(แบบต่อเนื่อง ตามรอบบิลของแพ็คเกจหลัก)</span>
          <span class="package_chargetype" v-if="selectedPackage.chargeType === 'OC'"><br>(แบบรายครั้ง)</span>
        </span>
      </div>
      <div class="personal-info" v-if="isTol || isTmvhPostpaid">
        <span class="font-bold">ราคา : </span>
        <span class="color-red">{{ selectedPackage.price }} ฿</span>
      </div>
      <div class="personal-info" v-if="isTol || isTmvhPostpaid">
        <span class="font-bold">ภาษีมูลค่าเพิ่ม (Vat 7%): </span>
        <span class="color-red">{{ selectedPackage.vat }} ฿</span>
      </div>
      <div class="personal-info">
        <span class="font-bold">ราคารวม : </span>
        <span class="color-red">{{ selectedPackage.totalPrice }} ฿</span>
      </div>
      <div class="personal-info personal-info-extend">
        <span v-if="isTol">คิดค่าบริการต่อเนื่องบนใบแจ้งค่าบริการ ทรูออนไลน์</span>
        <span v-if="isTmvhPostpaid">เรียกเก็บค่าบริการบนใบแจ้งค่าบริการทรูมูฟ เอช</span>
      </div>
    </div>

    <div v-show="!isLoading" class="footer-container" ref="footer">
      <div v-if="error" class="footer-actions">
        <div class="err-msg text-center my-1">
          {{ errorMessage }}
        </div>
      </div>
      <div class="footer-actions grid-row-2">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
        <button-element @click="submitOffer">{{ isTol ? 'ยืนยันการสั่งซื้อแพ็กเกจ' : 'ยอมรับ' }}</button-element>
      </div>
    </div>

    <div v-show="!isLoading" class="bottom-actions-container my-2">
      <div v-if="error" class="footer-actions">
        <div class="err-msg text-center my-1">
          {{ errorMessage }}
        </div>
      </div>
      <div class="footer-actions grid-row-2">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
        <button-element @click="submitOffer">{{ isTol ? 'ยืนยันการสั่งซื้อแพ็กเกจ' : 'ยอมรับ' }}</button-element>
      </div>
    </div>

    <div ref="footerIO" />
  </div>
</template>


<script>
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Locale from './locale.json'

  import {
    POST_CLM_VAS_CONFIRM_PACKAGE
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading
    },
    props: {
      data: Object
    },
    data: () => ({
      Locale,
      isLoading: false,
      error: false,
      errorMessage: '',
      footerObserver: false
    }),
    computed: {
      clmVasVerify () {
        return this.$store.state.clm.clmVasVerify
      },
      packageList () {
        return this.$store.state.clm.clmVasPackageList
      },
      selectedPackage () {
        const data = this.$store.state.clm.clmVasPackageList.tierBeanList[this.data.package.tier].offeringBeanList
        const offer = data.find((d) => d.campOfferingID === this.data.package.id)
        return {
          name: this.isTol ? offer.vasDesc : offer.convertDesc,
          chargeType: offer.chargeType,
          price: offer.chargeAmount ? (offer.chargeAmount).toFixed(2) : 'N/A',
          vat: offer.chargeAmount ? (offer.chargeAmount * 0.07).toFixed(2) : 'N/A',
          totalPrice: offer.chargeAmount ? (offer.chargeAmount * (this.isTmvhPrepaid ? 1 : 1.07)).toFixed(2) : 'N/A'
        }
      },
      isTol () {
        return this.$route.name === 'clmtolvas'
      },
      isTmvhPostpaid () {
        return this.$route.name === 'clmtmvhvas' && this.packageList.type === 'postpaid'
      },
      isTmvhPrepaid () {
        return this.$route.name === 'clmtmvhvas' && this.packageList.type === 'prepaid'
      }
    },
    async mounted () {
      this.stickyFooter()
    },
    beforeDestroy () {
      if (this.footerObserver) this.footerObserver.disconnect()
    },
    methods: {
      stickyFooter () {
        if (
          !('IntersectionObserver' in window) ||
          !('IntersectionObserverEntry' in window) ||
          !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
        ) return
        this.footerObserver = new IntersectionObserver(([e]) => {
          this.$refs.footer.classList.toggle('is-sticky', e.intersectionRatio < 1)
        }, {
          threshold: [1]
        })
        this.footerObserver.observe(this.$refs.footerIO)
      },
      async submitOffer () {
        try {
          this.isLoading = true

          const clmPackageData = [
            this.selectedPackage.name,
            this.selectedPackage.chargeType
          ]

          let logData = {
            status: 'confirm',
            selectedCampId: this.data.campid,
            clmPackageData,
            clmPrice: this.selectedPackage.price
          }

          if (this.$route.name === 'clmtolvas') {
            logData.event = 'CLM TOL Vas package'
            logData.type = 'TOLVAS'
            logData.circuitId = this.data.tol.circuit_id
            logData.thaiId = this.data.tol.thai_id
          } else {
            logData.event = 'CLM TMVH Vas package'
            logData.type = 'TMVHVAS'
            logData.mobileNumber = this.data.otp.phoneNumber
          }

          loggerAddon(logData)

          await this.$store.dispatch(POST_CLM_VAS_CONFIRM_PACKAGE, {
            id: this.isTol ? 'tol' : 'tmvh',
            data: {
              identity: this.clmVasVerify.identity,
              camp_id: this.data.campId,
              selected_offer: this.data.package.id,
              selected_package: clmPackageData.join(','),
              selected_price: this.selectedPackage.price
            }
          })
          this.$parent.page = 'result'
        } catch (e) {
          this.isLoading = false
          this.error = true
          this.errorMessage = e.message[this.$i18n.locale]
        }
      },
      goBack () {
        this.$parent.page = 'package'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .err-msg {
    font-size: 24px !important;
  }

  @media screen and (max-width: 860px) {
    .footer-container {
      .footer-actions {

        button {
          min-width: 50%;
        }
      }
    }
  }
</style>

<style scoped lang="scss" src="./style.scss"></style>
