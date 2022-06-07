<template>
  <div>
    <loading-element v-if="instantLoading" />
    <div v-else>
    <clm-vas-tnc-verify ref="tnc" />

    <a
      class="banner_container"
      href="https://store.truecorp.co.th/online-store/item/L91693116?utm_source=truestore&utm_medium=web_banner&utm_campaign=trueidtv50thb&utm_content=leveld"
    >
      <picture>
        <source :srcset="bannerUrl" media="(min-width: 640px)">
        <img :srcset="bannerUrl">
      </picture>
    </a>
    <div class="page-container text-center">
      <div class="instant-text" v-if="instantBenefit.headline"> {{instantBenefit.headline.content}}</div>
      <div>
        <div class="title">กรุณายืนยันตัวตนเพื่อรับสิทธิ์</div>
        <div class="my-1">
          <div class="input-title">หมายเลขทรูมูฟ เอช ของคุณ</div>
          <input-element
            class="input"
            type="number"
            :placeholder="Content.mobile_no.placeholder[$i18n.locale]"
            maxlength="10"
            inputmode="numeric"
            :customCSS="inputCustomCSS"
            v-model="mobileNo"
          />
          <div v-show="!isValidMobileNo" class="err-msg text-left">{{ mobileNoErrMsg }}</div>
        </div>
        <button-element
          :class="`button ${!completedInput || otp.otpLoading || isVerifying ? 'disabled' : ''}`"
          :disabled="!completedInput || otp.otpLoading || isVerifying"
          @click="fetchOtp"
        >
            {{ Content.otp.request[$i18n.locale] }}
        </button-element>

        <loading-element v-if="otp.otpLoading || isVerifying" fitHeight />
        <div v-else-if="!otp.otpLoading && otp.otpReceived" class="my-2">
          <div class="input-title">กรอกรหัส OTP</div>
          <div class="otp-input">
            <input-element
              class="input"
              type="number"
              @keydown="validateNumber"
              inputmode="numeric"
              :customCSS="inputCustomCSS"
              v-model="otp.value"
            />
            <button-element
              :class="`button ${!completedInput || otp.otpLoading || isVerifying ? 'disabled' : ''}`"
              :disabled="!completedInput || otp.otpLoading || isVerifying"
              @click="fetchOtp"
            >
              {{ Content.otp.resend[$i18n.locale] }}
            </button-element>
          </div>
          <div class="input-title" style="display: none;">REF : CXOLD654</div>
          <div v-show="error" class="err-msg text-center mt-1">{{ errorMessage }}</div>
          <button-element
            class="my-1"
            @click="postVerify"
          >{{ Content.otp.confirm[$i18n.locale] }}</button-element>
        </div>
        <div
          v-else-if="Object.keys(otp.otpError).length > 0 && Object.keys(otp.otpError.message).length > 0"
          class="err-msg my-1"
        >
          {{ otp.otpError.message[$i18n.locale] }}
        </div>
        <router-view></router-view>
      </div>
      <div class="instant-text" v-if="instantBenefit.message"> {{instantBenefit.message.content}} </div>
      <div class="term-text" v-if="instantBenefit.term" @click="showTnC(instantBenefit.term)"> Term and Conditions </div>
    </div>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Content from './content.json'
  import ClmVasTncVerify from '@components/clm-vas-tnc-verify'

  import {
    validateNumber,
    getCLMQueries
  } from '@utils/common'

  import {
    FETCH_OTP,
    VERIFY_OTP,
    UPDATE_CLM_CAMP_ID,
    UPDATE_CLM_MOBILE_NO,
    GET_INSTANT_BENEFIT
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'loading-element': Loading,
      'clm-vas-tnc-verify': ClmVasTncVerify
    },
    data: () => ({
      instantLoading: true,
      loading: true,
      Content,
      inputCustomCSS: {
        fontFamily: 'TrueMedium',
        borderColor: '#c1c1c1',
        lineHeight: '31px',
        fontSize: '26px'
      },
      citizenID: '',
      mobileNo: '',
      isValidMobileNo: true,
      mobileNoErrMsg: 'ขออภัย ท่านใส่หมายเลขเบอร์โทรศัพท์ไม่ถูกต้อง (ใส่ 9 - 10 หลัก)',
      citizenIDErrMsg: 'ขออภัย ท่านใส่หมายเลขบัตรประชาชนไม่ถูกต้อง',
      otp: {
        otpLoading: false,
        otpReceived: false,
        otpError: {},
        value: ''
      },
      errorMessage: '',
      error: false,
      isVerifying: false,
      instantBenefit: {
        banner: {},
        headline: {},
        message: {},
        term: {}
      }
    }),
    computed: {
      campId () {
        const queries = Object.keys(this.$route.query)
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter]
      },
      completedInput () {
        return this.isValidMobileNo && (this.mobileNo.length === 9 || this.mobileNo.length === 10)
      },
      bannerUrl () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return '/images/store/banner-true-id-best-deal-best-choice.png'
        }
      }
    },
    watch: {
      mobileNo (value) {
        this.isValidMobileNo = /^[0-9]{9,10}$/.test(value.toString())
      },
      citizenID (value) {
        this.isValidCitizenID = this.validateCitizenId(value)
      }
    },
    mounted () {
      this.$store.dispatch(UPDATE_CLM_CAMP_ID, null)
      this.$store.dispatch(UPDATE_CLM_MOBILE_NO, null)
      localStorage.removeItem('clm-camp-id')
      localStorage.removeItem('clm-mobile-number')
      localStorage.removeItem('is-clmbundle-campain')
      const campCode = { campCode: this.$route.query.campId || this.$route.query.campId }
      this.$store.dispatch(GET_INSTANT_BENEFIT, campCode)
        .then((data) => {
          const instantBenefitList = data.knowledgeList
          this.instantBenefit.banner = instantBenefitList.find((item) => item.topic === 'Instant Benefit Banner')
          this.instantBenefit.headline = instantBenefitList.find((item) => item.topic === 'Instant Benefit Headline')
          this.instantBenefit.message = instantBenefitList.find((item) => item.topic === 'Instant Benefit Message')
          this.instantBenefit.term = instantBenefitList.find((item) => item.topic === 'Instant Benefit Term and Conditions')
          this.instantLoading = false
        })
    },
    methods: {
      validateNumber,
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
      fetchOtp () {
        this.otp = {
          otpError: {},
          otpReceived: false,
          otpLoading: true
        }
        this.$store.dispatch(FETCH_OTP, this.mobileNo)
          .then((data) => {
            if (data.status_code !== 200) throw data.message
            this.otp.otpLoading = false
            this.otp.otpReceived = true
            this.error = false
            this.errorMessage = ''
          })
          .catch((error) => {
            this.otp = {
              otpError: error,
              otpReceived: false,
              otpLoading: false
            }
          })
      },
      postVerify () {
        if (!this.completedInput || !this.campId || !this.otp.value) {
          this.error = true
          this.errorMessage = Content.error_message.no_campaign_id[this.$i18n.locale]
          return
        }

        const body = {
          mobile_number: this.mobileNo,
          otp: this.otp.value,
          camp_id: this.campId
        }

        let logData = {
          event: 'Verify CLM uppack',
          status: 'verify',
          type: 'UPPACK',
          selectedCampId: this.campId,
          mobileNumber: this.mobileNo
        }

        loggerAddon(logData)

        this.isVerifying = true
        this.$store.dispatch(VERIFY_OTP, body)
          .then((data) => {
            this.isVerifying = false
            if (!data.is_pass) {
              this.error = true
              this.errorMessage = data.message[this.$i18n.locale]

              logData.status = 'fail'
              loggerAddon(logData)

              throw data.message
            } else if (data.is_pass) {
              this.error = false

              logData.status = 'success'
              loggerAddon(logData)

              localStorage.setItem('clm-identity', data.identity)
              localStorage.setItem('clm-camp-id', this.campId)
              localStorage.setItem('clm-mobile-number', this.mobileNo)
              this.$store.dispatch(UPDATE_CLM_CAMP_ID, this.campId)
              this.$store.dispatch(UPDATE_CLM_MOBILE_NO, this.mobileNo)

              this.$router.push({
                name: 'uppack-step1',
                query: {
                  campId: this.campId
                }
              })
            }
          })
          .catch((error) => {
            logData.status = 'fail'
            loggerAddon(logData)
            this.isVerifying = false
            this.error = true
            this.errorMessage = error.message[this.$i18n.locale]
          })
      },
      showTnC (tnc) {
        this.$refs.tnc.verifytnc = tnc.content
        this.$refs.tnc.showTermsDialog()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    position: relative;
    background-color: #fff;
    padding-bottom: 36px;
    max-width: 500px !important;
    padding-left: 16px;
    padding-right: 16px;
  }

  .text-center {
    text-align: center;
  }

  .title {
    font-size: 36px;
    font-weight: 600;
    margin-top: .8rem;
  }

  .input-title {
    font-size: 1.75rem;
  }

  .instant-text {
  margin-top: .8rem;
  font-size: 1.75rem;
  }

  .term-text {
    font-size: 23px;
    color: #48baf8;
    margin-top: 8px;
    text-decoration: underline;
    cursor: pointer;
  }

  button {
    &.disabled {
      color: white;
      background-color: #f2f2f2;
      cursor: unset;
    }
  }

  .otp-input {
    position: relative;

    .button {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      transform: translate(-6px, 6px);
      min-width: max-content;
      height: calc(100% - 12px);
      line-height: 6px;
      font-size: 18px;
    }
  }

  .banner_container {
    margin-bottom: 4rem;
  }

</style>

<style scoped lang="scss" src="./style.scss"></style>
