<template>
  <div>
    <checking-element
      v-if="page === 'checking'"
    />
    <result-element
      v-if="page === 'result'"
      :result="verifyResult"
      :product="product"
    />
    <info-form
      v-if="page === 'info-form'"
      :updateFormInfo="updateFormInfo"
      :product="product.product_type"
      :productInfo="product"
      :isCampaignRedeem="isCampaignRedeem"
      :isCampaignRedeemFreeDevice="isCampaignRedeemFreeDevice"
      :isVlearn="isVlearn"
    />
  </div>
</template>

<script>
  import Checking from './checking'
  import Result from './result'
  import Locale from './locale.json'
  import InfoForm from './info-form'

  import {
    loggerAddon
  } from '@utils/addon'

  import {
    VERIFY,
    CREATE_NEW_EKYC,
    FETCH_EKYC_STATUS,
    SUBMIT_INSTANT_SIM,
    VERIFY_SIM_OFFLINE,
    SIM_ACTIVATION_VERIFY
  } from '@store/actions.type'

  export default {
    components: {
      'checking-element': Checking,
      'result-element': Result,
      'info-form': InfoForm
    },
    props: {
      product: Object,
      pricePlans: Array,
      pricePlan: Object,
      isCampaignRedeem: Boolean,
      isCampaignRedeemFreeDevice: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      Locale,
      page: 'checking',
      verifyData: {},
      verifyResult: {},
      ekycStatusRetry: 0,
      formInfoData: {}
    }),
    computed: {
      newEkyc () {
        return this.$store.state.ekyc.newEkyc
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      ekycAnswers () {
        const answers = {}
        this.ekycStatus.answers && this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      isVlearn () {
        return this.product.product_type === 'vlearn'
      },
      isInstantSimPrepaid () {
        return this.$route.name === 'online-store-instantsim-verify' && this.product.product_type === 'prepaid'
      },
      skipEkyc () {
        if (this.$route.name === 'online-store-lucky-9999-verify' && window.no_ekyc_sim_only) return true
        if (window.localStorage.getItem('sim_family_info') !== null && (this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.is_f_and_f_remove_ekyc) return true
        if (window.localStorage.getItem('sim_family_info') === null && (this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only) return true
        const skip = window.no_ekyc_device_bundle
        return (this.product.product_type === 'device_bundle_new_customer' || this.product.product_type === 'vlearn') && skip
      }
    },
    mounted () {
      const noEkyc = localStorage.getItem('no_ekyc') === 'true'
      const isDrluckyVerify = this.$route.name.includes('drlucky-verify')
      const isDrluckyZodiacVerify = this.$route.name === 'drlucky-zodiac-verify'
      const isDrluckyZodiacVerifyOffline = this.$route.name === 'drlucky-zodiac-verify-offline'
      if (noEkyc && isDrluckyVerify) {
        this.fetchVerify()
      } else if (isDrluckyZodiacVerify) {
        this.fetchVerify()
      } else if (isDrluckyZodiacVerifyOffline) {
        const zodiacForm = JSON.parse(localStorage.getItem('vhora-zodiac-form'))
        const zodiacPack = localStorage.getItem('truestore-berfuntong-zodiac-pack')
        zodiacForm.package_code = zodiacPack
        zodiacForm.birthdate = this.convertDateOffline(this.$parent.noEkycCartForm.birth_date)
        localStorage.setItem('vhora-form', JSON.stringify(zodiacForm))
        this.$router.push('/offline-store/berfuntong/pre-validation')
      } else if (this.skipEkyc) {
        this.page = 'info-form'
      } else {
        this.$route.query.hash ? this.fetchEkyc() : this.createEkyc()
      }
    },
    methods: {
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      goTo (page) {
        if (page === 'plan') {
          const query = Object.assign({}, this.$route.query)
          if (query.pp || query.hash) {
            delete query.pp
            delete query.hash
            this.$router.replace({ query })
          }
        }
        this.$parent.goTo(page)
      },
      updatePrivilege () {
        if (this.verifyResult.privilege_placeorder) {
          const key = 'privilege-placeorder'
          let privileges = JSON.parse(localStorage.getItem(key)) || []
          if (!Array.isArray(privileges)) privileges = []
          const privilege = privileges.filter((item) => item.product_id !== this.product.id)
          if (this.verifyResult.privilege_placeorder[0]) {
            this.verifyResult.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000
          }
          localStorage.setItem(key, JSON.stringify([...this.verifyResult.privilege_placeorder, ...privilege]))
        }
      },
      setFormatDataEkyc () {
        let tempContent = {}
        const dataEkyc = {
          channel: this.ekycStatus.channel,
          id_number: this.ekycAnswers.national_id,
          face_recog_cust_capture: this.ekycStatus.image_liveness,
          'face-recog-cust-certificate': this.ekycStatus.image_front,
          face_recog_cust_capture_filename: '',
          'face-recog-cust-certificate-filename': '',
          gender: this.ekycAnswers.gender
        }

        if (this.ekycStatus.channel === 'trueagent') {
          tempContent = {
            'temp-content-data': {
              FACE_RECOGNITION_STATUS: this.ekycStatus.face_recognition_status,
              IS_IDENTICAL: this.ekycStatus.is_identical,
              CONFIDENT_RATIO: this.ekycStatus.confident_raito,
              APPROVER: this.ekycStatus.approver,
              CUST_CERTIFICATE_LASER_ID: this.ekycStatus.cust_certificate_laser_id
            }
          }
        };

        return { ...dataEkyc, ...tempContent }
      },
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
      trackAnalytics (label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'EKYC_verification',
          event_action: 'EKYC_result',
          event_label: label
        })
      },
      async createEkyc () {
        try {
          const params = new URLSearchParams(location.search)
          params.set('pp', this.pricePlan.id)
          loggerAddon({
            event: 'Ekyc',
            status: 'verify',
            productId: this.$route.params.id,
            matcode: this.$route.params.nas,
            mobileNumber: this.$route.params.number
          })

          await this.$store.dispatch(CREATE_NEW_EKYC, {
            answers: {
              callback_url: `${location.origin}${this.$route.path}?${params}`
            }
          })
          window.location.href = this.newEkyc.form_url
        } catch (e) {
          this.goTo('plan')
        }
      },
      async fetchEkyc () {
        try {
          this.page = 'checking'
          if (!this.isInstantSimPrepaid) {
            const plan = this.pricePlans.find(e => e.id === this.$route.query.pp)
            this.$parent.selectedPricePlan = plan
            if (!this.$route.query.pp || !plan) throw new Error()
          }
          if (this.ekycStatusRetry < 3) await this.sleep(2000)
          await this.$store.dispatch(FETCH_EKYC_STATUS, this.$route.query.hash)
          if (!this.ekycStatus.is_pass) throw new Error()
          if (this.isInstantSimPrepaid) {
            this.submitInstantSimPrepaid()
          } else if (this.isVlearn) {
            this.page = 'vlearn'
          } else {
            this.fetchVerify()
          }

          loggerAddon({
            event: 'Ekyc',
            status: 'success',
            productId: this.$route.params.id,
            matcode: this.$route.params.nas,
            addressData: [
              this.ekycAnswers.first_name,
              this.ekycAnswers.last_name,
              this.ekycAnswers.email,
              this.ekycAnswers.home_address,
              this.ekycAnswers.home_district,
              this.ekycAnswers.home_subdistrict,
              this.ekycAnswers.home_province,
              this.ekycAnswers.home_zipcode,
              this.ekycAnswers.mobile_no,
              this.ekycAnswers.national_id
            ]
          })
        } catch (e) {
          this.ekycStatusRetry++
          if (this.ekycStatusRetry > 2) {
            this.trackAnalytics('verification_failed')
            this.verifyResult = {
              status: false,
              thaiid: this.ekycAnswers.national_id,
              message: this.ekycStatus.message,
              ekyc: this.ekycStatus
            }
            this.page = 'result'
            return
          }
          await this.fetchEkyc()
        }
      },
      async submitInstantSimPrepaid () {
        try {
          const result = await this.$store.dispatch(SUBMIT_INSTANT_SIM, {
            correlation_id: this.$route.query.correlation_id,
            ekyc_hash: this.$route.query.hash
          })
          this.verifyResult = {
            status: result.is_pass,
            message: result.message,
            thaiid: result.id_number,
            mobilenumber: result.subscriber_number,
            ekyc: this.ekycStatus
          }
          this.page = 'result'
        } catch (e) {
          this.verifyResult = {
            status: false,
            message: e.message,
            ekyc: this.ekycStatus
          }
          this.page = 'result'
        }
      },
      verifyVlearn () {
        this.page = 'checking'
        this.fetchVerify()
      },
      async fetchVerify () {
        this.page = 'checking'
        const isDeviceBundle = this.product.product_type === 'device_bundle_new_customer'
        const id = isDeviceBundle ? this.product.product_type : 'postpaid'
        const cartid = window.localStorage.getItem('cart-id') || ''
        const noEkyc = localStorage.getItem('no_ekyc') === 'true' && this.$route.name.includes('drlucky-verify')

        const thaiid = noEkyc ? this.$parent.noEkycCartForm.thai_id : this.skipEkyc ? this.formInfoData.id : this.ekycAnswers.national_id
        const dateOfBirth = noEkyc ? this.$parent.noEkycCartForm.birth_date : this.skipEkyc ? this.formInfoData.date : this.ekycAnswers.date_of_birth
        let matcode = ''
        let logData = {}
        let selectedBundle = {}

        this.verifyData = {
          cart_hash: cartid,
          id_number: thaiid,
          date_birth: dateOfBirth ? dateOfBirth.split('-')[0] : '',
          month_birth: dateOfBirth ? dateOfBirth.split('-')[1] : '',
          year_birth: dateOfBirth ? dateOfBirth.split('-')[2] : '',
          product_id: this.product.id,
          nas_code: this.$route.params.nas,
          redeem_code: this.formInfoData.redeem_code,
          source_type: this.$route.query.source_type
        }

        if (isDeviceBundle) {
          this.verifyData.product_id_list = [this.product.id]
          this.verifyData.product_bundle_id = [this.$route.params.bundle]
          this.verifyData.product_nas_code_list = [this.$route.params.propo]
          this.verifyData.inventory_id_list = [this.$route.params.inventory_id]
          if (this.$route.query.paysmooth_token) {
            this.verifyData['paysmooth-token'] = this.$route.query.paysmooth_token
          }

          const inventoryId = this.$route.params.inventory_id
          matcode = this.product.inventories.find(inventory => inventory.id.toString() === inventoryId.toString()).sku

          selectedBundle = this.product.bundles.find(bundle => bundle.id === this.$route.params.bundle)

          logData = {
            event: 'Verify New',
            status: 'verify',
            productId: this.product.id,
            matcode: matcode,
            mobileNumber: this.$route.params.number,
            advancePayment: parseInt(selectedBundle.advance_payment)
          }

          loggerAddon(logData)
        }

        if (this.product.product_type === 'postpaid' || this.product.product_type === 'sim') {
          logData = {
            event: 'Verify Sim only',
            status: 'verify',
            productId: this.product.id,
            matcode: this.$route.params.nas,
            mobileNumber: this.$route.params.number
          }
          loggerAddon(logData)
        }

        let verifyType = VERIFY
        let dealerCode = ''
        let propositionAmdoc = ''
        let companyCode = ''

        if (this.$route.name.includes('drlucky-verify')) {
          let vhoraForm = window.localStorage.getItem('vhora-form')
          vhoraForm = JSON.parse(vhoraForm)
          this.verifyData = {
            sim_type: 'postpaid',
            id_card: thaiid,
            shop_code: vhoraForm.dealerCode,
            company_code: vhoraForm.companyCode,
            proposition: vhoraForm.proposition_amdoc,
            birth_date: dateOfBirth.replace(/\//g, '')
          }
          dealerCode = vhoraForm.dealerCode
          propositionAmdoc = vhoraForm.proposition_amdoc
          companyCode = vhoraForm.companyCode
          verifyType = VERIFY_SIM_OFFLINE
        }

        if (this.$route.name === 'drlucky-zodiac-verify') {
          let vhoraZodiacForm = window.localStorage.getItem('vhora-zodiac-form')
          vhoraZodiacForm = JSON.parse(vhoraZodiacForm)
          this.verifyData = {
            sim_type: this.$route.query.sim_type || 'postpaid',
            id_card: this.$parent.noEkycCartForm.thai_id,
            shop_code: vhoraZodiacForm.dealerCode,
            company_code: vhoraZodiacForm.companyCode,
            proposition: vhoraZodiacForm.proposition_amdoc,
            birth_date: this.$parent.noEkycCartForm.birth_date.replace(/\//g, '')
          }
          dealerCode = vhoraZodiacForm.dealerCode
          propositionAmdoc = vhoraZodiacForm.proposition_amdoc
          companyCode = vhoraZodiacForm.companyCode
          verifyType = VERIFY_SIM_OFFLINE
        }

        if (((this.product.product_type === 'sim' || this.product.product_type === 'postpaid' || this.isVlearn) && (window.no_ekyc_sim_only || window.is_f_and_f_remove_ekyc) && (!this.$route.name.includes('drlucky-verify') && !this.$route.name.includes('drlucky-zodiac-verify')))) {
          companyCode = localStorage.getItem('company_code')
          const propoAmdoc = localStorage.getItem('proposition_amdoc')
          this.verifyData = {
            sim_type: 'postpaid',
            id_card: this.formInfoData.id || this.ekycAnswers.national_id,
            proposition: propoAmdoc,
            birth_date: (this.formInfoData.date || this.ekycAnswers.date_of_birth).replace(/\//g, ''),
            company_code: companyCode,
            validateDopa: 'Y',
            redeem_code: this.formInfoData.redeem_code
          }

          if (this.product.product_sim && this.product.product_sim.sim_type === 'prepaid') {
            this.verifyData.sim_type = 'prepaid'
          }

          if (this.product.product_sim && this.product.product_sim.sim_source_type && this.$route.query.source_type) {
            this.verifyData.sim_source_type = this.$route.query.source_type
          }

          verifyType = SIM_ACTIVATION_VERIFY
        }
        this.$store.dispatch(verifyType, {
          id,
          data: this.verifyData,
          tmvhAuth: this.$route.query.token
        })
          .then((result) => {
            result.is_pass = result.is_pass || (result.status_code === 200)
            this.verifyResult = {
              thaiid,
              message: result.message,
              status: result.is_pass,
              privilege_placeorder: result.privilege_placeorder,
              ekyc: this.ekycStatus,
              correlation_id: result?.result?.correlationId,
              dealer_code: result.dealer_code
            }
            if (result.is_pass) {
              this.updatePrivilege()
              logData.status = 'success'

              if (isDeviceBundle || this.product.product_type === 'postpaid' || this.product.product_type === 'sim') {
                loggerAddon(logData)
              }

              const result = {
                thai_id: thaiid,
                birth_date: dateOfBirth,
                verify_time: this.computeVerifyTime(),
                ekyc: this.setFormatDataEkyc(),
                correlation_id: this.verifyResult.correlation_id,
                dealer_code: dealerCode || this.verifyResult.dealer_code,
                proposition_amdoc: propositionAmdoc,
                company_code: companyCode
              }

              if (this.isVlearn && thaiid && this.formInfoData.ekyc_data) {
                result.ekyc.id_number = thaiid
                result.ekyc.vlearn = this.formInfoData.ekyc_data.temp.vlearn
                result.ekyc.vlearn_filename = this.formInfoData.ekyc_data.filename.vlearn
              } else {
                this.trackAnalytics('verification_passed')
              }
              this.$parent.updatePostpaidResult(result)
              localStorage.setItem('no_ekyc', 'true')
            } else {
              logData.status = 'fail'
              if (isDeviceBundle || this.product.product_type === 'postpaid' || this.product.product_type === 'sim') {
                loggerAddon(logData)
              }
            }
            this.page = 'result'
          }).catch((e) => {
            if (e.status_code !== 200) {
              e.is_pass = false
              e.message = e.message || {
                th: 'ขออภัยในความไม่สะดวก คุณไม่สามารถลงทะเบียนใช้งานได้ กรุณาติดต่อเคาน์เตอร์บริการ',
                en: 'Sorry, the system cannot process your request at the moment.'
              }
            }
            if (e && e.message && e.is_pass === false) {
              this.verifyResult = {
                message: e.message,
                status: e.is_pass,
                thaiid: this.verifyData.id_number,
                ekyc: this.ekycStatus
              }
              logData.status = 'fail'
              loggerAddon(logData)
              if (!this.isVlearn) this.trackAnalytics('verification_failed')
              this.page = 'result'
            } else {
              this.goTo('plan')
            }
          })
      },
      updateFormInfo (data) {
        this.formInfoData = data
        this.fetchVerify()
      },
      convertDateOffline (birthDate) {
        const newbirthDate = birthDate.split('/')
        return newbirthDate[0] + newbirthDate[1] + (Number(newbirthDate[2]) + 543 + '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .error-container {
    margin: 0 12px 16px;
  }
  .verify-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 1.5em;
    max-width: 1100px;
    margin: auto 12px;

    .title {
      font-family: "TrueBold";
      font-size: 30px;
      line-height: 30px;
      margin: 24px 0 16px 0;
    }
    .subtitle {
      margin-bottom: 24px;
      line-height: 24px;
    }

    .form::v-deep {
      max-width: 600px;
      margin: auto;

      .input input,
      .select input {
        background-color: #fff;
      }

      &.invalid-form .input input:invalid {
        border-color: #ff0000;
        color: #ff0000;
      }

      .input input::placeholder {
        color: #b2b2b2;
      }

      .birthday-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;
      }
    }

    .input_container.text {
      text-align: left;
      font-size: 20px;
      margin-bottom: 16px;

      label {
        width: 100%;
        min-width: 100%;
        text-align: left;
        margin-right: 0;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .input {
        flex: 1;
      }

      .required {
        color: #fc5c65;
        font-weight: 600;
        font-size: 24px;
      }
    }
    .verify-button-container {
      display: grid;
      grid-gap: 8px 20px;
      max-width: 420px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin: 24px auto 0 auto;

      .button {
        background-color: #ff0000;

        &.cancel {
          background-color: #666;
        }

        &[disabled] {
          pointer-events: none;
          background-color: #666;
        }
      }
    }
  }
</style>
