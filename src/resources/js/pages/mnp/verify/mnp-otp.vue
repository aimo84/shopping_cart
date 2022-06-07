<template>
  <div>
    <div class="title">{{ Locale.otp.title[$i18n.locale] }}</div>
    <form
      @submit.prevent
      :disabled="showOtpForm || loading"
    >
      <input-element
        :placeholder="Locale.otp.phone_number_placeholder[$i18n.locale]"
        v-model="data.otp.phoneNumber"
      />
      <div v-if="error.phone" class="error">{{ error.phone[$i18n.locale] }}</div>
      <div>
        <button-element
          :disabled="!/^[0-9]{9,10}$/.test(data.otp.phoneNumber)"
          @click="requestOtp"
        >{{ Locale.otp.fetch_otp[$i18n.locale] }}</button-element>
      </div>
    </form>
    <form
      @submit.prevent
    >
      <label>{{ Locale.otp.otp[$i18n.locale] }}</label>
      <div class="otp">
        <input-element
          type="text"
          v-model="otp"
          :placeholder="Locale.otp.otp_placeholder[$i18n.locale]"
          :disabled="!showOtpForm"
        />
        <button-element
          @click="resendOtp"
          :disabled="loading || !showOtpForm"
        >{{ Locale.otp.request_otp_again[$i18n.locale] }}</button-element>
      </div>
      <div v-if="error.otp" class="error">{{ error.otp[$i18n.locale] }}</div>
      <div>
        <button-element
          id="submit_otp"
          @click="checkOtp"
          :disabled="!otp || !showOtpForm || loading"
        >{{ Locale.otp.confirm[$i18n.locale] }}</button-element>
      </div>
    </form>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Locale from './locale.json'
  import {
    FETCH_OTP,
    CHECK_MNP_OTP
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button
    },
    props: {
      data: Object
    },
    data: () => ({
      Locale,
      showOtpForm: false,
      loading: false,
      otp: '',
      error: {
        phone: false,
        otp: false
      }
    }),
    methods: {
      trackAnalytics (label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'Move to True',
          event_action: 'Click',
          event_label: label
        })
      },
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
      async requestOtp () {
        this.trackAnalytics('request_otp')
        await this.fetchOtp()
      },
      async resendOtp () {
        this.trackAnalytics('resend_otp')
        await this.fetchOtp()
      },
      async checkOtp () {
        try {
          this.trackAnalytics('submit_otp')
          this.error.otp = false
          this.loading = true

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify mobile',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })

          await this.$store.dispatch(CHECK_MNP_OTP, {
            mobile_number: this.data.otp.phoneNumber,
            otp: this.otp
          })

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify mobile success',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })

          this.loading = false
          this.$emit('route', 'ussd')
        } catch (e) {
          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify mobile fail',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })

          this.error.otp = e.message
          this.loading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped src="./style.scss"></style>
<style lang="scss" scoped>
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
