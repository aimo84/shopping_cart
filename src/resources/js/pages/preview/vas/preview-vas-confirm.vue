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
        <span class="color-red">{{ selectedPackage.vat  }} ฿</span>
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
      <div class="footer-actions">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
      </div>
    </div>

    <div v-show="!isLoading" class="bottom-actions-container my-2">
      <div v-if="error" class="footer-actions">
        <div class="err-msg text-center my-1">
          {{ errorMessage }}
        </div>
      </div>
      <div class="footer-actions">
        <button-element class="bg-secondary" @click="goBack">ย้อนกลับ</button-element>
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
      packageList () {
        return this.$store.state.clm.clmVasPackageListDemo
      },
      selectedPackage () {
        const data = this.$store.state.clm.clmVasPackageListDemo.tierBeanList[this.data.package.tier].offeringList
        const offer = data.find((d) => d.campOfferingID === this.data.package.id)

        const name = this.isTol ? offer.vasDesc : offer.convertDesc
        const chargeType = offer.chargeType
        const price = offer.chargeAmount ? parseFloat(offer.chargeAmount).toFixed(2) : 'N/A'
        const vat = offer.chargeAmount ? parseFloat(offer.chargeAmount * 0.07).toFixed(2) : 'N/A'
        const totalPrice = offer.chargeAmount ? parseFloat(offer.chargeAmount * (this.isTmvhPrepaid ? 1 : 1.07)).toFixed(2) : 'N/A'
        return {
          name: name || '',
          chargeType: chargeType || '',
          price,
          vat,
          totalPrice
        }
      },
      isTol () {
        return this.$route.name === 'tolvas'
      },
      isTmvhPostpaid () {
        return this.$route.name === 'tmvhvas' && this.packageList.type === 'postpaid'
      },
      isTmvhPrepaid () {
        return this.$route.name === 'tmvhvas' && this.packageList.type === 'prepaid'
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
      goBack () {
        this.$parent.page = 'package'
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
