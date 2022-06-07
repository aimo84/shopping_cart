<template>
    <div class="pre-verify-section">
        <loading-element v-if="loading" />
        <popup-element ref="popup"
                       :textError="textError"
        />
        <div v-if="!loading" class="content">
            <div class="content-section">
                <div class="title-text">เบอร์ฟันธง ตามลัคนาราศี</div>
                <form class="form-verify"
                      ref="verifySimForm" >
                    <form-element
                        class="form-container"
                        :data="data"
                        :form="Content"
                        :class="{ 'invalid-form': showFormInvalid }"
                    />
                </form>
            </div>
            <div class="button-section">
                <button-element class="button button-back"
                                @click="back"
                >ย้อนกลับ</button-element>
                <button-element class="button button-verify"
                                @click="verify"
                >ส่งข้อมูลเพื่อตรวจสอบ</button-element>
            </div>
        </div>
    </div>
</template>

<script>
  import Form from '@components/form'
  import Loading from '@components/loading'
  import ButtonElement from '@components/button'
  import Content from './content.json'
  import Popup from './popup'
  import {
    VERIFY_SIM_OFFLINE
  } from '@store/actions.type'
  export default {
    components: {
      'button-element': ButtonElement,
      'loading-element': Loading,
      'form-element': Form,
      'popup-element': Popup
    },
    data: () => ({
      loading: true,
      data: {
        thai_id: ''
      },
      showFormInvalid: false,
      textError: {
        commonError: true,
        titleError: '',
        textError1: '',
        textError2: '',
        textError3: '',
        buttonText: '',
        buttonPath: ''
      },
      noLocalData: false,
      verifyData: {},
      mobileNumber: '',
      nas: '',
      productId: '',
      Content
    }),
    watch: {
      'data.thai_id' (value) {
        this.setThaiIdInvalid(this.validateCitizenId(value))
      }
    },
    mounted () {
      this.noLocalData = false
      localStorage.removeItem('vhora-id-data')
      this.checkDataVhora()
      this.loading = false
    },
    methods: {
      setTextErrorPopupExceed () {
        this.textError.commonError = false
        this.textError.titleError = 'คุณเปิดบริการครบตามจำนวนแล้ว'
        this.textError.textError1 = 'หากต้องการเปิดบริการเพิ่มเติม'
        this.textError.textError2 = 'กรุณาติดต่อเคาน์เตอร์บริการ เพื่อขอ Approve code'
        this.textError.textError3 = 'ก่อนที่จะดำเนินการต่อ'
        this.textError.buttonText = 'ดำเนินการต่อ'
        this.textError.buttonPath = '/offline-store/berfuntong/confirm'
      },
      setTextErrorPopupCommon () {
        this.textError.commonError = true
        this.textError.titleError = 'ขออภัยในความไม่สะดวก'
        this.textError.textError1 = 'คุณไม่สามารถลงทะเบียนใช้งานได้'
        this.textError.textError2 = 'กรุณาติดต่อเคาน์เตอร์บริการ'
        this.textError.textError3 = false
        this.textError.buttonText = 'ย้อนกลับ'
        this.textError.buttonPath = '/offline-store/berfuntong/pre-validation'
      },
      setTextErrorPopupLock () {
        this.textError.commonError = true
        this.textError.titleError = 'ขออภัยในความไม่สะดวก'
        this.textError.textError1 = 'เนื่องจากหมายของคุณมีการล็อค'
        this.textError.textError2 = 'ด้วยแอปพลิเคชั่น Lock 3 ชั้น ของ กสทช.'
        this.textError.textError3 = 'กรุณาปลดล็อคและทำรายการใหม่อีกครั้ง'
        this.textError.buttonText = 'ย้อนกลับ'
        this.textError.buttonPath = '/offline-store/berfuntong/pre-validation'
      },
      setTextErrorPopupPayment () {
        this.textError.commonError = true
        this.textError.titleError = 'ขออภัยในความไม่สะดวก'
        this.textError.textError1 = 'กรุณาตรวจสอบยอดค้าง'
        this.textError.textError2 = 'และติดต่อทรูช็อปเพื่อชำระค่าบริการ'
        this.textError.textError3 = false
        this.textError.buttonText = 'ย้อนกลับ'
        this.textError.buttonPath = '/offline-store/berfuntong/pre-validation'
      },
      setThaiIdInvalid (valid) {
        const value = valid ? '' : 'invalid'
        this.$refs.verifySimForm.querySelector('input[name="thai_id"]').setCustomValidity(value)
      },
      verify () {
        if (this.noLocalData) {
          this.popUpError()
        } else {
          if (!this.validateCitizenId(this.data.thai_id)) {
            this.showFormInvalid = true
          } else {
            this.showFormInvalid = false
            this.verifySimOffline()
          }
        }
      },
      validateCitizenId (id) {
        if (id.length !== 13) {
          return false
        }
        let sum = 0
        for (let i = 0; i < 12; i++) {
          sum += parseFloat(id.charAt(i)) * (13 - i)
        }
        if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) {
          return false
        }
        return true
      },
      verifySimOffline () {
        this.loading = true
        this.verifyData.data.id_card = this.data.thai_id
        this.$store.dispatch(VERIFY_SIM_OFFLINE, this.verifyData)
          .then((data) => {
            localStorage.setItem('vhora-id-data', JSON.stringify({
              id: this.data.thai_id,
              correlationId: data.correlation_id
            }))
            location.replace('/offline-store/berfuntong/confirm')
          })
          .catch((error) => {
            if (error.is_exceed_limit && error.is_exceed_limit === true) {
              localStorage.setItem('vhora-id-data', JSON.stringify({
                id: this.data.thai_id,
                correlationId: error.correlation_id
              }))
              this.setTextErrorPopupExceed()
            } else if (error.result && error.result.code == 101) {
              this.setTextErrorPopupLock()
            } else if (error.result && (error.result.code == 103 || error.result.code == 104)) {
              this.setTextErrorPopupPayment()
            } else {
              this.setTextErrorPopupCommon()
            }
            this.$refs.popup.open()
            this.loading = false
          })
      },
      checkDataVhora () {
        const vhoraLoginData = JSON.parse(localStorage.getItem('vhora-offline-data'))
        const vhoraFormData = JSON.parse(localStorage.getItem('vhora-form'))
        const vhoraPriceplanData = JSON.parse(localStorage.getItem('vhora-priceplan'))

        if (vhoraFormData === null || vhoraPriceplanData === null || vhoraLoginData === null
          || vhoraFormData.birthdate === undefined || vhoraFormData.companyCode === undefined
          || vhoraFormData.selected_msisdn === undefined || vhoraFormData.product_id === undefined || vhoraFormData.proposition_amdoc === undefined
          || vhoraPriceplanData.sim_type === undefined || vhoraPriceplanData.proposition_nas_code === undefined
          || vhoraLoginData.shopCode === undefined) {
          this.noLocalData = true
          this.popUpError()
        } else {
          this.verifyData.data = {
            birth_date: vhoraFormData.birthdate,
            shop_code: vhoraLoginData.shopCode,
            sim_type: vhoraPriceplanData.sim_type,
            company_code: vhoraFormData.companyCode,
            proposition: vhoraFormData.proposition_amdoc
          }
          this.mobileNumber = vhoraFormData.selected_msisdn
          this.productId = vhoraFormData.product_id
          this.nas = vhoraPriceplanData.proposition_nas_code
        }
      },
      popUpError () {
        this.setTextErrorPopupCommon()
        this.$refs.popup.open()
      },
      back () {
        const vhoraForm = JSON.parse(localStorage.getItem('vhora-form'))
        if (vhoraForm.package_code) {
          let url = `/offline-store/berfuntong-zodiac/${this.productId}/${this.mobileNumber}`
          if (vhoraForm.package_code.includes('pre')) {
            url += '?sim_type=prepaid'
          } else {
            url += '?sim_type=postpaid'
          }
          location.replace(url)
        } else {
          location.replace(`/offline-store/berfuntong/${this.productId}/${this.mobileNumber}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
