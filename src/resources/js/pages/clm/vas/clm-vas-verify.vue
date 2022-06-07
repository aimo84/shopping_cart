<template>
  <div class="clm-page">
    <loading-element v-if="instantLoading" />
    <div v-else>
    <clm-vas-tnc-verify ref="tnc" />

    <div class="banner-container">
      <picture>
        <source :srcset="bannerUrl680webp" type="image/webp" media="(max-width: 680px)">
        <source :srcset="bannerUrl680jpg" type="image/jpeg" media="(max-width: 680px)">
        <source :srcset="bannerUrlwebp" type="image/webp">
        <source :srcset="bannerUrljpg" type="image/jpeg">
        <img :src="bannerUrl">
      </picture>
    </div>
    <div class="page-container text-center">
      <div class="instant-text" v-if="instantBenefit.headline"> {{ instantBenefit.headline.content }}</div>
      <template v-if="$route.name === 'clmtmvhvas'">
        <div class="title">หมายเลขโทรศัพท์</div>
        <form
          @submit.prevent
          :disabled="showOtpForm || loading"
        >
          <input-element
            inputmode="numeric"
            :placeholder="Locale.otp.phone_number_placeholder[$i18n.locale]"
            v-model="data.otp.phoneNumber"
          />
          <div v-if="error.phone" class="error">{{ error.phone[$i18n.locale] }}</div>
          <div>
            <button-element
              :disabled="!/^[0-9]{9,10}$/.test(data.otp.phoneNumber)"
              @click="fetchOtp"
            >{{ Locale.otp.fetch_otp[$i18n.locale] }}</button-element>
          </div>
        </form>
        <form @submit.prevent>
          <label>{{ Locale.otp.otp[$i18n.locale] }}</label>
          <div class="otp">
            <input-element
              type="text"
              inputmode="numeric"
              v-model="data.otp.otp"
              :placeholder="Locale.otp.otp_placeholder[$i18n.locale]"
              :disabled="!showOtpForm"
            />
            <button-element
              @click="fetchOtp"
              :disabled="loading || !showOtpForm"
            >{{ Locale.otp.request_otp_again[$i18n.locale] }}</button-element>
          </div>
          <div v-if="error.otp" class="error">{{ error.otp[$i18n.locale] }}</div>
          <div class="confirm-button">
            <button-element
              @click="checkOtp"
              :disabled="!data.otp.otp || !showOtpForm || loading"
            >{{ Locale.otp.confirm[$i18n.locale] }}</button-element>
          </div>
        </form>
      </template>

      <template v-if="$route.name === 'clmtolvas'">
        <div class="title">หมายเลขทรูออนไลน์และหมายเลขบัตรประชาชน</div>
        <form
          @submit.prevent
          :disabled="showOtpForm || loading"
        >
          <label>{{ Locale.otp.circuit_id[$i18n.locale] }}</label>
          <input-element
            inputmode="numeric"
            :placeholder="Locale.otp.circuit_id__placeholder[$i18n.locale]"
            v-model="data.tol.circuit_id"
          />
          <label style="margin-top: 16px">{{ Locale.thai_id.label[$i18n.locale] }}</label>
          <input-element
            inputmode="numeric"
            :placeholder="Locale.thai_id.placeholder[$i18n.locale]"
            v-model="data.tol.thai_id"
          />
          <div v-if="error.tol" class="error">{{ error.tol[$i18n.locale] }}</div>
          <div class="confirm-button">
            <button-element
              :disabled="!/\d/.test(data.tol.circuit_id) || !validThaiId"
              @click="verifyTol"
            >{{ Locale.otp.confirm_tol[$i18n.locale] }}</button-element>
          </div>
        </form>
      </template>
      <div class="instant-text" v-if="instantBenefit.message"> {{instantBenefit.message.content}}</div>
      <div class="term-text" v-if="instantBenefit.term" @click="showTnC(instantBenefit.term)"> Term and Conditions </div>
    </div>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Locale from './locale.json'
  import Loading from '@components/loading'
  import ClmVasTncVerify from '@components/clm-vas-tnc-verify'

  import {
    FETCH_OTP,
    VERIFY_CLM_VAS,
    UPDATE_CLM_CAMP_ID,
    UPDATE_CLM_MOBILE_NO,
    GET_INSTANT_BENEFIT
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'loading-element': Loading,
      'input-element': Input,
      'button-element': Button,
      'clm-vas-tnc-verify': ClmVasTncVerify
    },
    props: {
      data: Object
    },
    data: () => ({
      instantLoading: true,
      Locale,
      loading: false,
      showOtpForm: false,
      error: {
        phone: false,
        otp: false,
        tol: false
      },
      instantBenefit: {
        banner: {},
        headline: {},
        message: {},
        term: {}
      }
    }),
    computed: {
      validThaiId () {
        const id = this.data.tol.thai_id
        if (id.length !== 13) return false
        let sum = 0
        for (let i = 0; i < 12; i++) {
          sum += parseFloat(id.charAt(i)) * (13 - i)
        }
        if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) {
          return false
        }
        return true
      },
      imageId () {
        return this.$route.name === 'clmtmvhvas' ? 'tmvh' : 'tol'
      },
      bannerUrl680webp () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return `/images/clm/clm-vas-${this.imageId}-680.webp`
        }
      },
      bannerUrl680jpg () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return `/images/clm/clm-vas-${this.imageId}-680.jpg`
        }
      },
      bannerUrlwebp () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return `/images/clm/clm-vas-${this.imageId}.webp`
        }
      },
      bannerUrljpg () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return `/images/clm/clm-vas-${this.imageId}.jpg`
        }
      },
      bannerUrl () {
        if (this.instantBenefit && this.instantBenefit.banner) {
          return this.instantBenefit.banner.image
        } else {
          return `/images/clm/clm-vas-${this.imageId}.jpg`
        }
      }
    },
    mounted () {
      this.$store.dispatch(UPDATE_CLM_CAMP_ID, null)
      this.$store.dispatch(UPDATE_CLM_MOBILE_NO, null)
      localStorage.removeItem('clm-camp-id')
      localStorage.removeItem('clm-mobile-number')
      localStorage.removeItem('is-clmbundle-campain')
      const campCode = { campCode: this.data.campId }
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
      async fetchOtp () {
        try {
          this.error.phone = false
          this.loading = true
          await this.$store.dispatch(FETCH_OTP, this.data.otp.phoneNumber)
          this.loading = false
          this.showOtpForm = true
        } catch (e) {
          this.error.phone = e.message
          this.loading = false
        }
      },
      async checkOtp () {
        let logData = {
          event: 'Verify CLM TMVH Vas',
          status: 'verify',
          type: 'TMVHVAS',
          selectedCampId: this.data.campId,
          mobileNumber: this.data.otp.phoneNumber
        }

        try {
          if (!this.data.campId) throw new Error('no-camp-id')
          this.error.otp = false
          this.loading = true

          loggerAddon(logData)

          await this.$store.dispatch(VERIFY_CLM_VAS, {
            id: 'tmvh',
            data: {
              camp_id: this.data.campId,
              mobile_number: this.data.otp.phoneNumber,
              otp: this.data.otp.otp
            }
          })

          logData.status = 'success'

          localStorage.setItem('clm-camp-id', this.data.campId)
          localStorage.setItem('clm-mobile-number', this.data.otp.phoneNumber)
          this.$store.dispatch(UPDATE_CLM_CAMP_ID, this.data.campId)
          this.$store.dispatch(UPDATE_CLM_MOBILE_NO, this.data.otp.phoneNumber)

          loggerAddon(logData)

          this.loading = false
          this.$parent.page = 'package'
        } catch (e) {
          if (e.message === 'no-camp-id') {
            this.error.otp = this.Locale.error_message.no_campaign_id
          } else {
            this.error.otp = e.message
          }

          logData.status = 'fail'
          loggerAddon(logData)

          this.loading = false
        }
      },
      async verifyTol () {
        let logData = {
          event: 'Verify CLM TOL Vas',
          status: 'verify',
          type: 'TOLVAS',
          selectedCampId: this.data.campId,
          circuitId: this.data.tol.circuit_id,
          thaiId: this.data.tol.thai_id
        }

        try {
          if (!this.data.campId) throw new Error('no-camp-id')
          this.error.tol = false
          this.loading = true

          loggerAddon(logData)

          await this.$store.dispatch(VERIFY_CLM_VAS, {
            id: 'tol',
            data: {
              camp_id: this.data.campid,
              circuit_id: this.data.tol.circuit_id,
              thai_id: this.data.tol.thai_id
            }
          })

          logData.status = 'success'

          localStorage.setItem('clm-camp-id', this.data.campId)
          this.$store.dispatch(UPDATE_CLM_CAMP_ID, this.data.campId)

          loggerAddon(logData)

          this.loading = false
          this.$parent.page = 'package'
        } catch (e) {
          if (e.message === 'no-camp-id') {
            this.error.tol = this.Locale.error_message.no_campaign_id
          } else {
            this.error.tol = e.message
          }

          logData.status = 'fail'
          loggerAddon(logData)

          this.loading = false
        }
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
  .page-container {
    position: relative;
    background-color: #fff;
    padding-bottom: 36px;
    max-width: 500px !important;
    padding-left: 16px;
    padding-right: 16px;
  }

  .instant-text {
  margin-top: .8rem;
  font-size: 1.75rem;
  }

  .banner-container {
    margin-bottom: 2.5rem;
  }

  .term-text {
    font-size: 23px;
    color: #48baf8;
    margin-top: 8px;
    text-decoration: underline;
    cursor: pointer;
  }

  form {
    margin: 8px auto;

    .otp {
      position: relative;

      button {
        position: absolute;
        top: 5px;
        right: 6px;
        height: 30px;
        margin: 0;
        font-size: 20px;
        padding: 0 14px;
        min-width: auto;
      }
    }
  }
</style>
