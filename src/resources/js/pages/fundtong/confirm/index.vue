<template>
    <div class="confirm-fundtong-section">
        <div
            class="error-container"
            v-if="!loading && errors.length > 0"
        >
            <ul>
                <li
                    v-for="(error, key) in errors"
                    :key="key"
                >{{ error[$i18n.locale] }}</li>
            </ul>
        </div>
        <loading-element v-if="loading" />
        <div v-if="!loading" class="content">
            <div class="content-section">
                <div class="title-text">เบอร์ฟันธง ตามลัคนาราศี</div>
                  <p class="text-grey" v-if="!isLowTier && !this.isShopData">กรุณากรอกอีเมลเพื่อรับคำทำนายดวงชะตาตามลัคนาราศีเกิด</p>
                  <p class="text-grey" v-if="!isLowTier && this.isShopData">{{this.highTitleShopText}}</p>
                  <p class="text-grey" v-if="isLowTier && this.isShopData">{{this.lowTitleShopText}}</p>
                  <div v-if="!isLowTier || isShopData">
                  <form class="form-confirm bottom-line"
                        ref="confirmSimForm" >
                      <div v-if="!isLowTier">
                          <form-element
                              class="form-container"
                              :data="data"
                              :form="Content.dataEmail"
                              :class="{'invalid-form': showFormInvalid}"
                          />
                      </div>
                      <div v-if="isShopData">
                          <form-element
                              class="form-container"
                              :data="data"
                              :form="Content.dataPhone"
                              :class="{'invalid-form': showPhoneInvalid}"
                          />
                      </div>
                  </form>
                </div>
                <div class="mobile-number-block top-line">
                    <span>เบอร์โทรศัพท์ที่คุณเลือก</span>
                    <div class="mobile-number">{{this.selectedNumber}}</div>
                </div>
                <form class="form-confirm">
                    <form-element
                        class="form-container"
                        :data="dataContact"
                        :form="Content.dataContact"
                    />
                </form>
                <div>
                    <p class="confirm-detail"><span class="text-red">แพ็กเกจของคุณ: </span>{{this.packageName}}</p>
                    <p class="confirm-detail" v-show="this.shopName && !this.isShopData"><span class="text-red">สาขา: </span>{{this.shopName}}</p>
                    <p class="confirm-detail" v-show="this.shopName && this.isShopData"><span class="text-red">{{this.posBranchText}}</span> {{this.shopName}}</p>
                    <span class="confirm-detail text-red" v-if="!this.isShopData">*ระบบจะทำการจองเบอร์ที่ท่านเลือกไว้เป็นเวลา 24 ชั่วโมง*</span>
                    <span class="confirm-detail text-red" v-if="this.isShopData">{{this.remarkShopText}}</span>
                </div>
            </div>
            <div class="button-section">
                <button-element class="button"
                                @click="verify"
                >ยืนยันข้อมูล</button-element>
                <dialog-element ref="dialog" class="error-popup">
                  <div slot="content">
                    <div>
                      <h2 class="text-red">
                        ขออภัย
                      </h2>
                      <img
                        class="img-dialog"
                        src="/images/icons/clarity_alert-line.png"
                      />
                      <div class="bottom-line-dialog">
                        กรุณากรอก อีเมล <br />
                        เพื่อรับผลคำทำนายและจุดเปิดดวงเฉพาะคุณ <br />
                        ต้องการดำเนินการต่อหรือไม่
                      </div>
                      <div>
                        <button-element
                          class="button-back"
                          @click="back"
                        >
                          กลับไปกรอกอีเมล
                        </button-element>
                        <button-element
                          @click="next"
                        >
                          ดำเนินการต่อ
                        </button-element>
                      </div>
                    </div>
                  </div>
                </dialog-element>
            </div>
        </div>
    </div>
</template>

<script>
  import Form from '@components/form'
  import Loading from '@components/loading'
  import ButtonElement from '@components/button'
  import Content from './content.json'
  import Dialog from '@components/dialog'

  import {
    CREATE_PLACEORDER_OFFLINE,
    OFFLINE_THANK_YOU
  } from '@store/actions.type'

  export default {
    components: {
      'button-element': ButtonElement,
      'loading-element': Loading,
      'form-element': Form,
      'dialog-element': Dialog
    },
    data: () => ({
      loading: false,
      data: {
        email: '',
        phone: ''
      },
      dataContact: {
        thai_id: ''
      },
      mobileNumber: '',
      mobileError: false,
      errors: [],
      selectedNumber: '',
      packageName: '',
      shopName: '',
      showFormInvalid: false,
      showPhoneInvalid: false,
      formData: {},
      pricePlanData: {},
      offlineData: {},
      idData: {},
      shopData: {},
      shopDataName: '',
      isShopData: false,
      isLowTier: false,
      posBranchText: '',
      remarkShopText: '',
      highTitleShopText: '',
      lowTitleShopText: '',
      Content
    }),
    watch: {
      'data.email' (value) {
        this.validateEmailInput(this.validateEmail(value))
      },
      'data.phone' (value) {
        this.validateMobileInput(this.validateMobile(value))
      }
    },
    mounted () {
      this.noLocalData = false
      this.checkDataVhora()
      this.loading = false
    },
    methods: {
      verify () {
        this.errors = []
        if (this.isLowTier) {
          if (this.checkMobileValid()) {
            this.submitPlaceOrder()
          }
          return false
        }

        if (!this.validateEmail(this.data.email) && this.data.email !== '') {
          this.checkMobileValid()
          this.showFormInvalid = true
        } else if (this.data.email == '') {
          this.showFormInvalid = false
          if (this.checkMobileValid()) {
            this.$refs.dialog.open()
          }
        } else {
          this.showFormInvalid = false
          if (this.checkMobileValid()) {
            this.submitPlaceOrder()
          }
        }
      },
      checkMobileValid () {
        let result = true
        if (this.isShopData) {
          this.showPhoneInvalid = false
          if (!this.validateMobile(this.data.phone)) {
            this.showPhoneInvalid = true
            result = false
          }
        }
        return result
      },
      back () {
        this.$refs.dialog.close()
      },
      next () {
        this.showFormInvalid = false
        this.submitPlaceOrder()
      },
      validateEmail (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      validateEmailInput (type, value) {
        const element = this.$refs.confirmSimForm.querySelector('input[name="email"]')
        if (element) {
          value
            ? element.removeAttribute('invalid')
            : element.setAttribute('invalid', '')
        }
      },
      validateMobile (phone) {
        const re = /^[0-9]{9,10}$/
        return re.test(phone)
      },
      validateMobileInput (type, value) {
        const element = this.$refs.confirmSimForm.querySelector('input[name="phone"]')
        if (element) {
          value
            ? element.removeAttribute('invalid')
            : element.setAttribute('invalid', '')
        }
      },
      checkDataVhora () {
        this.formData = JSON.parse(localStorage.getItem('vhora-form'))
        this.pricePlanData = JSON.parse(localStorage.getItem('vhora-priceplan'))
        this.offlineData = JSON.parse(localStorage.getItem('vhora-offline-data'))
        this.idData = JSON.parse(localStorage.getItem('vhora-id-data'))
        this.shopData = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        if (this.formData === null || this.pricePlanData === null || this.offlineData === null || this.idData === null ||
          this.idData.id === undefined || this.formData.selected_msisdn === undefined || this.offlineData.shopName === undefined || this.offlineData.shopName.th === undefined) {
          this.errors.push(this.Content.error)
        } else {
          this.dataContact.thai_id = this.idData.id
          this.selectedNumber = this.formData.selected_msisdn
          this.packageName = this.pricePlanData.name
          this.shopName = this.offlineData.shopName.th
        }

        if (this.formData.package_code) {
          this.isLowTier = true
        }
        if (this.shopData !== null) {
          this.isShopData = this.shopData?.is_shop
          this.shopDataName = this.shopData?.shop
          this.posBranchText = this.shopData?.config?.txt_confirm
          this.remarkShopText = this.shopData?.config?.txt_remark_confirm
          this.highTitleShopText = this.shopData?.config?.txt_high_title_confirm
          this.lowTitleShopText = this.shopData?.config?.txt_low_title_confirm
        }
      },
      getError (code) {
        const codeError = code.toLowerCase()
        const errorMsgTH = this.Content.error.th + ' (' + code + ')'
        const errorMsgEN = this.Content.error.en + ' (' + code + ')'
        let errorMsg = {
          th: errorMsgTH,
          en: errorMsgEN
        }
        if (this.Content[codeError] != undefined) {
          errorMsg = this.Content[codeError]
        }
        return errorMsg
      },
      submitPlaceOrder () {
        const form = this.formData || {}
        const pricePlan = this.pricePlanData
        const shopOffline = this.offlineData
        const id = this.idData

        if (this.data.email) {
          form.email = this.data.email
        }

        if (this.data.phone && this.shopDataName) {
          form.phone_submit = this.data.phone
          form.shop_data_name = this.shopDataName
        }

        const request = {
          form,
          pricePlan,
          shopOffline,
          id
        }

        request.cToken = localStorage.getItem('truestore-berfuntong-ctoken')
        request.image = localStorage.getItem('truestore-berfuntong-vhora-image')

        this.loading = true
        this.$store
          .dispatch(CREATE_PLACEORDER_OFFLINE, request)
          .then(async (res) => {
            if (res.status_code === 200) {
              if (res.data.offline_skip) {
                delete request.id
                request.payment_method = 'STOREOFFLINE'
                request.secure_key = this.idData.correlationId
                request.offline_skip = 1
                request.correlation_id = this.idData.correlationId

                this.$store
                  .dispatch(OFFLINE_THANK_YOU, request)
                  .then(async (res2) => {
                    window.loadingPlaceorder = false
                    location.replace(res2.data.redirect_url)
                  })
              } else {
                window.loadingPlaceorder = false
                window.location.href = res.data.redirectUrl
              }
            } else {
              this.errors.push(this.Content.error)
              this.loading = false
            }
          })
          .catch(error => {
            let errorMessage = this.Content.error
            if (typeof error.data.code !== 'undefined' && error.data.code) {
              errorMessage = this.getError(error.data.code)
            }
            this.loading = false
            this.errors.push(errorMessage)
          })
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss" src="./global.scss"></style>
