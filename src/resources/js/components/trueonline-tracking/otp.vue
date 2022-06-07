<template>
  <div class="otp-container">
    <div class="title">{{ Locale.title[$i18n.locale] }}</div>
    <form
      @submit.prevent
      :disabled="showOtpForm || loading"
    >
      <label>{{ Locale.form.thai_id[$i18n.locale] }}</label>
      <input-element
        :placeholder="Locale.form.thai_id_placeholder[$i18n.locale]"
        v-model="form.idNumber"
      />
      <label>{{ Locale.form.phone_number[$i18n.locale] }}</label>
      <input-element
        :placeholder="Locale.form.phone_number_placeholder[$i18n.locale]"
        v-model="form.phoneNumber"
      />
      <div v-if="error.otp" class="error">{{ error.otp[$i18n.locale] }}</div>
      <div>
        <button-element
          :disabled="!form.idNumber || !form.phoneNumber"
          @click="fetchAppointment"
        >{{ Locale.form.fetch_otp[$i18n.locale] }}</button-element>
      </div>
    </form>
    <form
      v-if="showOtpForm"
      @submit.prevent
    >
      <label>{{ Locale.form.otp[$i18n.locale] }}</label>
      <div class="otp">
        <input-element
          type="text"
          v-model="form.otp"
        />
        <button-element
          @click="fetchOtp"
          :disabled="loading"
        >{{ Locale.form.request_otp_again[$i18n.locale] }}</button-element>
      </div>
      <div v-if="error.appointment" class="error">{{ error.appointment[$i18n.locale] }}</div>
      <div>
        <button-element
          @click="checkOtp"
          :disabled="!form.otp || loading"
        >{{ Locale.form.confirm[$i18n.locale] }}</button-element>
      </div>
    </form>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Locale from './locale.json'
  import {
    FETCH_TOL_APPOINTMENT,
    FETCH_OTP,
    FETCH_TOL_OTP_STATUS
  } from '@store/actions.type'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button
    },
    data: () => ({
      Locale,
      showOtpForm: false,
      loading: false,
      form: {
        idNumber: '',
        phoneNumber: '',
        otp: ''
      },
      error: {
        otp: {},
        appointment: {}
      }
    }),
    computed: {
      tolAppointment () {
        return this.$store.state.trueonline.tolAppointment
      }
    },
    methods: {
      async fetchAppointment () {
        try {
          this.error.otp = {}
          this.loading = true
          await this.$store.dispatch(FETCH_TOL_APPOINTMENT, {
            id_number: this.form.idNumber,
            phone_number: this.form.phoneNumber
          })
          if (this.tolAppointment.status_code !== 200) {
            this.error.otp = this.tolAppointment.message
            this.loading = false
            return
          }
          await this.fetchOtp()
        } catch (e) {
          this.error.otp = e.message
          this.loading = false
        }
      },
      async fetchOtp () {
        try {
          this.error.otp = {}
          this.loading = true
          await this.$store.dispatch(FETCH_OTP, this.form.phoneNumber)
          this.loading = false
          this.showOtpForm = true
        } catch (e) {
          this.error.otp = e.message
          this.loading = false
        }
      },
      async checkOtp () {
        try {
          this.error.appointment = {}
          this.loading = true
          await this.$store.dispatch(FETCH_TOL_OTP_STATUS, {
            mobile_number: this.form.phoneNumber,
            otp: this.form.otp,
            _identity: this.tolAppointment._identity
          })
          this.loading = false
          this.$emit('route', 'slot')
        } catch (e) {
          this.error.appointment = e.message
          this.loading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .otp-container {
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-family: 'TrueBold';
      text-align: center;
    }

    form {
      display: grid;
      grid-gap: 8px;
      margin: 16px auto;
      max-width: 400px;
      text-align: center;

      &[disabled] {
        pointer-events: none;
        opacity: 0.7;
        filter: saturate(0);
      }

      label {
        margin-top: 12px;
        font-size: 24px;
      }

      button {
        margin-top: 8px;
        height: 40px;
        padding: 0 16px;
        min-width: 120px;
        border-radius: 4px;
      }

      .error {
        margin-top: 4px;
        color: #ff0000;
      }

      .otp {
        position: relative;

        button {
          position: absolute;
          top: 5px;
          right: 6px;
          height: 30px;
          margin: 0;
          font-size: 20px;
          padding: 0 8px;
          min-width: 100px;
        }
      }
    }
  }
</style>
