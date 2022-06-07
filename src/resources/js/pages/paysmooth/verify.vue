<template>
  <div class="verify-container">
    <dialog-element ref="paysmoothErrorDialog" key="paysmoothErrorDialog" extendClass="paysmooth-error-dialog">
      <div
        slot="content"
        class="confirm-payment-dialog"
      >
        <div class="image">
          <img class="error-image" src="/images/icons/paysmooth-error.png" />
        </div>
        <div class="dialog-title">{{ Locale.verify_error.title[$i18n.locale] }}</div>
        <div class="dialog-subtitle">{{ Locale.verify_error.message[verifyError][$i18n.locale] }}</div>
        <button-element
          id="accept-ekyc"
          class="red-bg-button"
          @click="closeDialog()"
        >{{ verifyError === '0' ? Locale.verify_error.reselect[$i18n.locale] : Locale.verify_error.close[$i18n.locale]}}</button-element>
        <a v-if="verifyError === '3'" class="paysmooth-register" :href="registerLink">{{ Locale.verify_error.register[$i18n.locale] }}</a>
      </div>
    </dialog-element>
    <template v-if="page === 'mobile'">
      <div>
        <div class="title">{{ Locale.verify.mobile.title[$i18n.locale] }}</div>
      </div>
      <div class="divider" />
      <form class="form" @submit.prevent>
        <label for="">{{ Locale.verify.mobile.label[$i18n.locale] }}</label>
        <div class="input">
          <input
            v-model="mobileNumber"
            :class="'text-center'"
            :disabled="loading"
            :placeholder="Locale.verify.mobile.placeholder[$i18n.locale]"
            inputmode="tel"
            type="text"
          >
          <div v-if="mobileError" class="error">{{ Locale.verify.mobile.error[$i18n.locale] }}</div>
        </div>
        <button
          id="get-otp"
          @click="requestOtp"
          :disabled="loading"
        >{{ Locale.verify.mobile.button[$i18n.locale] }}</button>
      </form>
      <a class="notApplyYet" :href="registerLink">{{ Locale.notApplyYet[$i18n.locale] }}</a>
    </template>
    <template v-if="page === 'otp'">
      <div class="title otp">{{ Locale.verify.otp.title[$i18n.locale] }} <div class="number">{{ parsedMobileNumber }} </div></div>
      <form class="form" @submit.prevent>
        <div class="input otp" ref="otp">
          <label class="otp">{{ Locale.verify.otp.label[$i18n.locale] }}</label>
          <input
            autocomplete="one-time-code"
            type="number"
            inputmode="decimal"
            :disabled="loading"
            :error="otpError"
            @paste="otpPaste"
            @click="otpOnclick"
            @keydown="otpKeydown($event, 0)"
            v-model="otp[0]"
            autofocus
          />
          <input
            type="number"
            inputmode="decimal"
            :disabled="loading"
            :error="otpError"
            @click="otpOnclick"
            @keydown="otpKeydown($event, 1)"
            v-model="otp[1]"
          />
          <input
            type="number"
            inputmode="decimal"
            :disabled="loading"
            :error="otpError"
            @click="otpOnclick"
            @keydown="otpKeydown($event, 2)"
            v-model="otp[2]"
          />
          <input
            type="number"
            inputmode="decimal"
            :disabled="loading"
            :error="otpError"
            @click="otpOnclick"
            @keydown="otpKeydown($event, 3)"
            v-model="otp[3]"
          />
          <div v-if="otpError" class="error otp">{{ Locale.verify.otp.error[$i18n.locale] }}</div>
        </div>
        <div class="divider otp" />
        <button
          id="verify-otp"
          @click="verifyOtp"
          :disabled="!validOtp || loading"
        >{{ Locale.verify.otp.button[$i18n.locale] }}</button>
        <div
          class="resend"
          v-if="!loading"
        >{{ Locale.verify.otp.resend[$i18n.locale] }} <span @click="resendOtp">{{ Locale.verify.otp.resend_action[$i18n.locale] }}</span></div>
      </form>
    </template>
    <template v-if="page === 'checking'">
      <div class="checking">
        <div class="checking-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path d="M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z" />
            <path d="M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z" />
            <path d="M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z" />
            <path d="M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z" />
            <path d="M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z" />
            <path d="M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z" />
            <path d="M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z" />
            <path d="M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z" />
          </svg>
        </div>
        <div class="checking-label">{{ Locale.checking[$i18n.locale] }}</div>
      </div>
    </template>
  </div>
</template>

<script>
  import {
    FETCH_OTP,
    PAYSMOOTH_VERIFY,
    FETCH_PRODUCT_INFO
  } from '@store/actions.type'
  import Locale from './content.json'
  import qs from 'qs'
  import Dialog from '@components/dialog'
  import Button from '@components/button'

  export default {
    components: {
      'dialog-element': Dialog,
      'button-element': Button
    },
    data: () => ({
      Locale,
      page: 'mobile',
      mobileNumber: '',
      otp: ['', '', '', ''],
      loading: false,
      mobileError: false,
      otpError: false,
      verifyError: '0'
    }),
    computed: {
      productInfo () {
        if (!this.$store.state.products.productInfo.data) return
        return this.$store.state.products.productInfo.data.record
      },
      parsedMobileNumber () {
        return this.mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      validOtp () {
        return (this.otp.filter(e => e)).length === 4
      },
      minPrice () {
        const minPriceExisting = this.productInfo.price_min - Math.max(...this.productInfo.bundle_existing.reduce((prev, cur) => [...prev, Math.max(...cur.discount_list.reduce((previ, curr) => [...previ, curr.discount], []))], []))
        const minPriceBundles = Math.min(...this.productInfo.bundles.reduce((prev, cur) => [...prev, cur.price_after_discount_device_bundle_new_customer], []))
        return Math.min(minPriceExisting, minPriceBundles)
      },
      minAR () {
        return this.minPrice * (100 - Math.max(...this.productInfo.pay_smooth.down_payment_rate)) / 100
      },
      registerLink () {
        if (this.isMobile) return 'https://tmn.app.link/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000022%3Ftype%3Dcontent%26method%3D%257B%250A%2522url%2522%253A%2522https%253A%252F%252Fstudentloan-frontend.truemoneyservices.com%252Fapi%252Fv1%252Fentrypoint%253Fdata%253DewogICJ0eXBlIjoib25saW5lIgp9%2522%252C%250A%2520%2520%2522title_th%2522%253A%2522Truemoney%2522%252C%250A%2520%2520%2522title_en%2522%253A%2522Truemoney%2522%250A%257D&deeplink_no_attribution=true'
        return 'https://www.truemoney.com/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000022%3Ftype%3Dcontent%26method%3D%257B%250A%2522url%2522%253A%2522https%253A%252F%252Fstudentloan-frontend.truemoneyservices.com%252Fapi%252Fv1%252Fentrypoint%253Fdata%253DewogICJ0eXBlIjoib25saW5lIgp9%2522%252C%250A%2520%2520%2522title_th%2522%253A%2522Truemoney%2522%252C%250A%2520%2520%2522title_en%2522%253A%2522Truemoney%2522%250A%257D&deeplink_no_attribution=true&_branch_match_id=984356425047063031&_branch_referrer=H4sIAAAAAAAAA42RUU%2FDIBDHPw2%2B2VaadtFkMW5Nk%2Fpsom8NK7cVpUDgumXf3gNtjU9KyP8Ojv%2FlB4yILjzkOU4mE85lWpmP%2FFECuJhtRRjAyMkauLLyifGW5kVoDZihnyEVssFmOFKB%2FKR1XXwPzlnZ4tUBK5vBGgSDjNcT4GglbTFebXYkBfWtOJ%2B9TpGk%2FNoZI9u6bJMEnCX10VaY26NPTeUPSgB%2FVgMEQprSceFUiue7FMjpr86qCFKVrRQoYtLAxZ66%2FXMBbzvdvVt14FUQr5XuTu5%2BgeL7lbVYhaNCDX28%2Fi%2F0l4XoP24wf7mTcdPcLP%2FSG9sLRK8OMyprtvEBPgH7b5QmygEAAA%3D%3D'
      },
      isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      }
    },
    methods: {
      closeDialog () {
        window.location.href = 'https://www.true.th/truemoveh/site/true-pay-next-extra-you'
      },
      async requestOtp () {
        try {
          if (this.loading) return
          this.mobileError = false
          this.loading = true
          if (!/^[0-9]{10,10}$/.test(this.mobileNumber)) throw new Error('input-invalid')
          await this.$store.dispatch(FETCH_OTP, this.mobileNumber)
          this.loading = false
          this.page = 'otp'
        } catch (e) {
          this.loading = false
          this.mobileError = true
        }
      },
      async resendOtp () {
        this.loading = true
        await this.$store.dispatch(FETCH_OTP, this.mobileNumber)
        this.loading = false
      },
      async verifyOtp () {
        try {
          if (this.loading) return
          this.loading = true
          const result = await this.$store.dispatch(PAYSMOOTH_VERIFY, {
            mobile_number: this.mobileNumber,
            otp: this.otp.join('')
          })
          if (!result.is_pass) throw new Error()
          const productId = this.$route.params.id.replace(/[^\w\s]/gi, '')
          await this.$store.dispatch(FETCH_PRODUCT_INFO, {
            id: productId,
            tmvhAuth: this.$route.query.token,
            paysmoothToken: result.paysmooth_token
          })
          this.loading = false
          if (result.credit / 100 < this.minAR) {
            this.page = 'mobile'
            this.verifyError = '0'
            this.$refs.paysmoothErrorDialog.open()
          } else {
            return this.$router.push({
              name: 'online-store-detail',
              params: {
                id: this.$route.params.id
              },
              query: {
                token: this.$route.query.token,
                paysmooth_token: result.paysmooth_token
              }
            })
          }
        } catch (e) {
          this.loading = false
          if (e?.['is_pass'] === false) {
            this.otpFailed()
          }
          if (e.result_code) {
            this.page = 'mobile'
            this.otpError = false
            this.verifyError = e.result_code.toString()
            this.$refs.paysmoothErrorDialog.open()
          }
        }
      },
      otpFailed () {
        this.loading = false
        this.otpError = true
      },
      otpPaste (e) {
        e.preventDefault()
        const value = e.clipboardData.getData('Text')
        if (!/^\d{4}$/.test(value)) return
        this.otp = value.split('')
        this.$refs.otp.querySelectorAll('input')[3].focus()
      },
      otpKeydown (e, i) {
        if (e.key === 'Ctrl' || e.key === 'Meta' || e.key === 'v' || e.key === 'Enter') return
        e.preventDefault()
        if (e.key === 'ArrowLeft' && i > 0) {
          this.$refs.otp.querySelectorAll('input')[i - 1].focus()
        } else if (e.key === 'ArrowRight' && i < 3) {
          this.$refs.otp.querySelectorAll('input')[i + 1].focus()
        } else if (e.key === 'Backspace' || e.key === 'Delete') {
          this.$set(this.otp, i, '')
          if (i === 0) return
          const input = this.$refs.otp.querySelectorAll('input')[i - 1]
          input.focus()
          input.value && input.select()
        } else if (/^\d$/.test(e.key)) {
          this.$set(this.otp, i, e.key)
          if (i === 3) return
          const input = this.$refs.otp.querySelectorAll('input')[i + 1]
          input.focus()
          input.value && input.select()
        }
      },
      otpOnclick (e) {
        if (e.target.value) e.target.select()
      },
      updateURLQuery (key, value) {
        const query = this.$route.query
        query[key] = value
        const newurl = `${window.location.origin}${window.location.pathname}?${qs.stringify(query)}`
        window.history.replaceState({ path: newurl }, '', newurl)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .verify-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: auto;
    display: grid;
    grid-gap: 16px;

    .title {
      font-family: 'TrueBold';
      font-size: 30px;
      line-height: 30px;
      color: #EC1D24;

      &.otp {
        font-size: 24px;
        line-height: 20px;
        color: #000;
        padding-top: 16px;

        .number {
          font-size: 40px;
          line-height: 40px;
          color: #EC1D24;
        }
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: #DCDDE0;

      &.otp {
        margin: 16px 0;
      }
    }

    .form {
      display: grid;
      grid-gap: 16px;
      width: 100%;
      max-width: 400px;
      margin: auto;

      label {
        font-family: 'TrueBold';
        font-size: 24px;
        line-height: 24px;
        color: #000;

        &.otp {
          color: #979797;
          grid-column: 1/-1;
          text-align: left;
          font-family: 'TrueMedium';
          font-size: 22px;
        }
      }
      .input {
        display: grid;
        grid-gap: 8px;

        input {
          border-radius: 8px;
          height: 45px;
          border: 1px solid #000000;
          padding: 0 12px;
          font-family: 'TrueMedium';
          font-size: 22px;

          &:focus {
            outline: none;
          }
        }

        .text-center {
            text-align: center;
        }

        .error {
          color: #F32525;
          font-size: 20px;
          line-height: 20px;
          text-align: left;

          &.otp {
            grid-column: 1/-1;
          }
        }
      }
      .input.otp {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 8px 12px;

        input {
          min-width: 0;
          height: 60px;
          border-radius: 8px;
          border: 1px solid #929292;
          font-family: 'TrueMedium';
          font-size: 36px;
          text-align: center;

          &:focus {
            outline: none;
          }

          &[error] {
            border-color: #F32525;
          }
        }
      }
      button {
        cursor: pointer;
        border-radius: 8px;
        font-family: 'TrueBold';
        font-size: 26px;
        height: 50px;
        background-color: #F32525;
        color: #fff;
        border: none;

        &[disabled] {
          background-color: #9e9e9e;
        }
      }
      .resend {
        color: #666;
        font-size: 22px;

        span {
          color: #F32525;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .notApplyYet {
      color:#1EACD9;
      font-size: 26px;
      display: grid;
      margin: 15px auto 0px auto;
      max-width: 450px;
      width: 100%;
    }

    .checking {
      padding: 160px 0;

      .checking-icon {
        margin-bottom: 50px;

        svg {
          width: 40px;
          height: 40px;
          animation: loading 2s linear infinite;
          fill: #ff0000;
        }
      }

      .checking-label {
        color: #000;
        font-size: 30px;
        line-height: 30px;
      }
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .confirm-payment-dialog {
  text-align: center;
  padding: 50px 5px 5px 5px;

  .dialog-title {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
  }

  .dialog-subtitle {
    font-size: 26px;
    white-space:pre-wrap;
    line-height: 1;
  }

  .red-bg-button {
    margin-top: 30px;
    width: 100%;
    background: #EA3019;
    border-radius: 7px;
    font-size: 26px;
    font-family: 'TrueBold';
    margin-bottom: 20px;
  }
  .paysmooth-register {
    color:#1EACD9;
    font-size: 26px;
  }
  .error-image {
    width: 120px;
  }
}
</style>
