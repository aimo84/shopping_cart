<template>
    <div>
        <dialog-element ref="dialog" class="error-popup">
            <div slot="content">
                <div class="title">
                    {{ Content.input_form[$i18n.locale] }}
                </div>
                <div class="label-form">
                    <label>{{ Content.customer_number[$i18n.locale] }}</label>
                    <input-element
                        :placeholder="Content.placeholder_phone[$i18n.locale]"
                        v-model="phoneNumber"
                    />
                </div>
                <div v-if="errors.invalid_mobile_number.length > 0" class="error">
                    <p  v-for="(invalid_mobile_number, index) in errors.invalid_mobile_number" :key="index">
                        {{ Content.invalid_mobile[$i18n.locale] }}
                    </p>
                </div>
                <div>
                    <button-element
                        @click="salerSubmit"
                        :disabled="!phoneNumber"
                        >{{Content.button_submit[$i18n.locale] }}</button-element
                    >
                    <button-element
                        @click="salerQrCode"
                        :disabled="!phoneNumber"
                        class="margin-left20"
                        >{{Content.show_qrcode[$i18n.locale] }}</button-element
                    >
                </div>
            </div>
        </dialog-element>
        <div v-if="salerSuccess">
            <dialog-element ref="check_dialog" class="error-popup">
                <div slot="content">
                    <div>
                        <img src="/images/icons/checked.png" />
                        <div class="bottom-line-dialog">
                            {{Content.sms_sent[$i18n.locale] }} <br />
                        </div>
                        <div>
                            <button-element @click="checkSms">
                                {{Content.sms_button[$i18n.locale] }}
                            </button-element>
                        </div>
                    </div>
                </div>
            </dialog-element>
        </div>
        <div v-else-if="successQr">
              <dialog-element ref="check_dialog" class="error-popup">
                <div slot="content">
                    <div class="title">
                        {{Content.qr_code[$i18n.locale] }}
                    </div>
                    <div class="div-qr top20">
                        <vue-qrious v-bind:value="qrValue" :size="200" />
                    </div>
                    <div>
                        <button-element class="button-qrcode" @click="checkSms">
                            {{Content.sms_button[$i18n.locale] }}
                        </button-element>
                    </div>
                </div>
            </dialog-element>
        </div>
        <div v-else>
            <dialog-element ref="check_dialog" class="error-popup">
                <div slot="content">
                    <div>
                        <img
                          class="img-dialog"
                          src="/images/icons/cancel.png"
                        />
                        <div class="title">
                            {{Content.notification[$i18n.locale] }} <br />
                        </div>
                        <div class="bottom-line-dialog">
                            {{Content.retry[$i18n.locale] }} <br />
                        </div>
                        <div>
                            <button-element @click="checkSms">
                              {{Content.sms_button2[$i18n.locale] }}
                            </button-element>
                        </div>
                    </div>
                </div>
            </dialog-element>
        </div>
    </div>
</template>
<script>
  import ButtonElement from '@components/button'
  import Dialog from '@components/dialog'
  import Input from '@components/input'
  import Content from './content.json'
  import vueQrious from 'vue-qrious'

  import {
    SEND_SMS,
    CREATE_QR
  } from '@store/actions.type'

  import {
    fetchCampaignWeomni
  } from '@utils/common'

  export default {
    components: {
      'button-element': ButtonElement,
      'dialog-element': Dialog,
      'input-element': Input,
      vueQrious
    },
    data: () => ({
      qrValue: '',
      phoneNumber: '',
      errors: {
        invalid_mobile_number: {}
      },
      Content,
      salerSuccess: false,
      successQr: false
    }),
    computed: {
      isError () {
        return !!this.errors.invalid_mobile_number
      }
    },
    beforeDestroy () {
      window.localStorage.removeItem('TMH-DIRECT-URL')
    },
    methods: {
      salerQrCode () {
        if (this.checkForm() === true) {
          this.salerSuccess = false
          this.successQr = false
          const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
          const url = localStorage.getItem('TMH-DIRECT-URL') ?? window.location.href
          const campaignLocalData = fetchCampaignWeomni()
          const campaignCode = this.$route.query.campaign ?? campaignLocalData

          const submitData = {
            'sale_alias': saleLocalData?.sale_alias,
            'sale_id': saleLocalData?.sale_code,
            'msisdn': this.phoneNumber,
            'sale_channel': saleLocalData?.sale_channel,
            'campaign': campaignCode,
            'shop_code': saleLocalData?.shop_code && saleLocalData?.shop_code !== '' ? saleLocalData?.shop_code : saleLocalData?.non_shop_code ? saleLocalData?.non_shop_code : saleLocalData?.sale_alias,
            'sale_mobile': saleLocalData?.sale_mobile,
            "url": url,
            'ads_campaign': saleLocalData?.ads_campaign_code
          }
          this.$store.dispatch(CREATE_QR, submitData)
            .then(async (res) => {
              if (res.status_code === 200) {
                this.qrValue = res.data.url
                this.successQr = true
                this.$refs.dialog.close()
                this.$refs.check_dialog.open()
                this.saleChannel = ''
                this.sale_id = ''
                this.phoneNumber = ''
              } else {
                this.salerSuccess = false
                this.$refs.dialog.close()
                this.$refs.check_dialog.open()
              }
            })
            .catch((error) => {
              this.successQr = false
              this.$refs.dialog.close()
              this.$refs.check_dialog.open()
            })
        }
      },
      salerSubmit () {
        if (this.checkForm() === true) {
          this.salerSuccess = false
          this.successQr = false
          const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
          const url = localStorage.getItem('TMH-DIRECT-URL') ?? window.location.href
          const campaignLocalData = fetchCampaignWeomni()
          const campaignCode = this.$route.query.campaign ?? campaignLocalData

          const submitData = {
            'sale_alias': saleLocalData?.sale_alias,
            'sale_id': saleLocalData?.sale_code,
            'msisdn': this.phoneNumber,
            'sale_channel': saleLocalData?.sale_channel,
            'campaign': campaignCode,
            'shop_code': saleLocalData?.shop_code && saleLocalData?.shop_code !== '' ? saleLocalData?.shop_code : saleLocalData?.non_shop_code ? saleLocalData?.non_shop_code : saleLocalData?.sale_alias,
            'sale_mobile': saleLocalData?.sale_mobile,
            "url": url,
            'ads_campaign': saleLocalData?.ads_campaign_code
          }
          this.$store.dispatch(SEND_SMS, submitData)
            .then(async (res) => {
              if (res.status_code === 200) {
                this.salerSuccess = true
                this.$refs.dialog.close()
                this.$refs.check_dialog.open()
                this.saleChannel = ''
                this.sale_id = ''
                this.phoneNumber = ''
              } else {
                this.salerSuccess = false
                this.$refs.dialog.close()
                this.$refs.check_dialog.open()
              }
            })
            .catch((error) => {
              this.salerSuccess = false
              this.$refs.dialog.close()
              this.$refs.check_dialog.open()
            })
        }
      },
      checkForm () {
        this.errors.invalid_mobile_number = []
        const valid = /^[0]{1}[0-9]{9}$/.test(
          this.phoneNumber.toString()
        )
        if (!valid) {
          this.errors.invalid_mobile_number.push('')
        }
        if (!this.errors.invalid_mobile_number.length) {
          return true
        }
        return false
      },
      open () {
        this.$refs.dialog.open()
        document.body.style.top = '0px'
      },
      checkSms () {
        this.$refs.check_dialog.close()
      }
    }
  }
</script>
<style lang="scss" scoped src="./popup.scss"></style>
