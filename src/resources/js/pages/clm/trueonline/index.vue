<template>
  <div>
    <loading-element v-if="instantLoading" />
    <div v-else>
    <clm-vas-tnc-verify ref="tnc" />

    <a
      class="banner_container"
      href="#"
    >
      <picture>
        <source :srcset="bannerUrl" media="(min-width: 640px)">
        <a href="https://bit.ly/3ymMnQc"><img :srcset="bannerUrl"></a>
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
      <div class="instant-text" v-if="instantBenefit.message"> {{instantBenefit.message.content}}</div>
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
    VERIFY_OTP_MOBILE_ONLY,
    UPDATE_CLM_CAMP_ID,
    UPDATE_CLM_MOBILE_NO,
    GET_INSTANT_BENEFIT
  } from '@store/actions.type'

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
        'fontFamily': 'TrueMedium',
        'borderColor': '#c1c1c1',
        'lineHeight': '31px',
        'fontSize': '26px',
      },
      mobileNo: '',
      isValidMobileNo: true,
      mobileNoErrMsg: 'ขออภัย ท่านใส่หมายเลขเบอร์โทรศัพท์ไม่ถูกต้อง (ใส่ 9 - 10 หลัก)',
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
        const queries = Object.keys(this.$route.query);
        const parameter = getCLMQueries(queries)
        if (!parameter) return ''
        return this.$route.query[parameter];
      },
      completedInput () {
        return this.isValidMobileNo && (this.mobileNo.length === 9 || this.mobileNo.length === 10)
      },
      bannerUrl () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return '/images/store/clm-trueonline-bundle-V2.jpg'
        }
      }
    },
    watch: {
      mobileNo (value) {
        this.isValidMobileNo = /^[0-9]{9,10}$/.test(value.toString())
      }
    },
    mounted () {
      this.$store.dispatch(UPDATE_CLM_CAMP_ID, null)
      this.$store.dispatch(UPDATE_CLM_MOBILE_NO, null)
      localStorage.removeItem('clm-camp-id')
      localStorage.removeItem('clm-mobile-number')
      localStorage.removeItem('is-clmbundle-campain')
      const campCode = { campCode: this.$route.query.campId }
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
          camp_id: this.campId,
          type: 'trueonline'
        }

        this.isVerifying = true
        this.$store.dispatch(VERIFY_OTP_MOBILE_ONLY, body)
          .then((data) => {
            this.isVerifying = false
            if (!data.is_pass) {
              this.error = true
              this.errorMessage = data.message[this.$i18n.locale]
              throw data.message
            } else if (data.is_pass) {
              this.error = false
              localStorage.setItem('clm-upsell', data.identity)
              localStorage.setItem('clm-camp-id', this.campId)
              localStorage.setItem('clm-mobile-number', this.mobileNo)
              this.$store.dispatch(UPDATE_CLM_CAMP_ID, this.campId)
              this.$store.dispatch(UPDATE_CLM_MOBILE_NO, this.mobileNo)
              this.$router.push(`/online-store?menupick=trueonline_checkcoverage`)
            }
          })
          .catch((error) => {
            this.isVerifying = false
            this.error = true
            localStorage.removeItem('clm-upsell')
            this.errorMessage = error.message[this.$i18n.locale] + ' ' + Content.error_message.redirect[this.$i18n.locale]
            setTimeout(() => {
              this.$router.push(`/online-store?menupick=trueonline_checkcoverage`)
            }, 5000)
          })
      },
      showTnC (tnc) {
        this.$refs.tnc.verifytnc = tnc.content
        this.$refs.tnc.showTermsDialog()
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss" scoped>
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
</style>
