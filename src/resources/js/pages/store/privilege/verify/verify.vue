<template>
  <div class="verify-container">
    <template v-if="page === 'mobile'">
      <div>
        <div class="title">{{ this.typeId === '5' ? Locale.verify.mobile.pre2post_title[$i18n.locale] : this.typeId === '4' ? this.Mnp2StepPackageName : Locale.verify.mobile.title[$i18n.locale] }}</div>
        <div class="subtitle" v-if="typeId === '4'">{{ this.$parent.pricePlan.name }}</div>
      </div>
      <div class="divider" />
      <form class="form" @submit.prevent>
        <label
            v-if="(this.typeId === '3' || this.typeId === '4') && (isCampaignRedeem || isCampaignRedeemFreeDevice)"
            for=""
        >
          {{ Locale.redeem_code[$i18n.locale] }}
        </label>
        <div class="input">
          <input
            v-if="(this.typeId === '3' || this.typeId === '4') && (isCampaignRedeem || isCampaignRedeemFreeDevice)"
            v-model="redeemCode"
            :disabled="loading"
            :placeholder="Locale.redeem_code.placeholder[$i18n.locale]"
            type="text"
          >
          <div v-if="redeemCodeError" class="error">{{ Locale.redeem_code.error[$i18n.locale] }}</div>
        </div>
        <label for="">{{ this.typeId === '5' ? Locale.verify.mobile.pre2post_label[$i18n.locale] : this.typeId === '4' ? Locale.verify.mobile.mnp2step_label[$i18n.locale] : Locale.verify.mobile.label[$i18n.locale] }}</label>
        <div class="input">
          <input
            v-model="mobileNumber"
            :disabled="loading"
            :placeholder="this.typeId === '4' ? Locale.verify.mobile.mnp2step_placeholder[$i18n.locale] : Locale.verify.mobile.placeholder[$i18n.locale]"
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
    VERIFY
  } from '@store/actions.type'
  import Locale from './locale.json'
  import qs from 'qs'

  export default {
    props: ['isCampaignRedeem', 'isCampaignRedeemFreeDevice', 'isCampaignFreeDevice'],
    data: () => ({
      Locale,
      page: 'mobile',
      mobileNumber: '',
      redeemCode: '',
      otp: ['', '', '', ''],
      loading: false,
      mobileError: false,
      otpError: false,
      redeemCodeError: false
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      productId () {
        if (this.$parent.productId) {
          return this.$parent.productId
        }

        return this.$route.params.product
      },
      inventoryId () {
       if (this.$parent.inventory) {
          return this.$parent.inventory ? this.$parent.inventory.id : ''
        }

        return this.$route.params.inventory
      },
      typeId () {
        if (this.$parent.typeId) {
          return this.$parent.typeId
        }

        return this.$route.query.type
      },
      ppId () {
        if (this.$parent.ppId) {
          return this.$parent.ppId
        }

        return this.$route.query.pp
      },

      inventory () {
        return this.product.inventories.find(e => e.id.toString() === this.inventoryId)
      },
      parsedMobileNumber () {
        return this.mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      validOtp () {
        return (this.otp.filter(e => e)).length === 4
      },
      config () {
        const config = this.$store.state.config.verifyConfig
        /* refactor because add 'verify-device-bundle-existing' COMPONENT :
        return config.campaigns[this.$route.params.promotion]
        */
        return config.campaigns[this.$parent.promotionId]
      },
      campaign () {
        return this.product.bundle_existing.find(e => e.campaign_type === this.typeId)
      },
      discountList () {
        const id = this.campaign.campaign_type === '3' ? this.ppId : this.promotionId
        return this.campaign.discount_list.find(e => e.id.toString() === id)
      },
      promotionId () {
        /* refactor because add 'verify-device-bundle-existing' COMPONENT :
        return this.$route.params.promotion
        */
        if (this.$parent.promotionId) {
            return this.$parent.promotionId
        }

        return this.$route.params.promotion
      },
      verifyData () {
        if (this.$parent.queryString) {
          return {
            advance_payment: this.$parent.queryString.advance_payment ? this.$parent.queryString.advance_payment : '',
            contract: this.$parent.queryString.contract ? this.$parent.queryString.contract : ''
          }
        }

        return {
          advance_payment: this.$route.query?.advance_payment,
          contract: this.$route.query?.contract
        }
      },
      Mnp2StepPackageName () {
        const discountList = (this.product.bundle_existing.filter(product => product.campaign_type === '4')[0].discount_list)
        const packages = discountList.filter(list => list.id === parseInt(this.promotionId))[0]
        return packages.package_name
      },
      aging () {
        let aging = ''
        if (this.campaign.campaign_type === '3') {
          if (this.$parent.queryString) {
            return this.$parent.queryString.aging ? this.$parent.queryString.aging : ''
          }

          return this.$route.query.aging
        }
        if (this.campaign.campaign_type === '1') {
          const objList = this.campaign.discount_list && this.campaign.discount_list.find(item => item.aging !== '')
          if (objList) {
            aging = objList.aging
            return aging
          }
        }
        return aging
      }
    },
    methods: {
      async requestOtp () {
        try {
          if (this.loading) return
          this.mobileError = false
          this.redeemCodeError = false
          this.loading = true
          if ((this.typeId === '3' || this.typeId === '4') && (this.isCampaignRedeem || this.isCampaignRedeemFreeDevice) && !this.redeemCode) {
            this.redeemCodeError = true
            this.loading = false
            return
          }
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
      verifyOtp () {
        if (this.typeId === '5') return this.verifyPreToPost()
        if (this.typeId === '4') return this.verifyMnpTwoStep()
        this.verifyExisting()
      },
      async verifyPreToPost () {
        try {
          if (this.loading) return
          this.otpError = false
          this.loading = true
          const result = await this.$store.dispatch(VERIFY, {
            id: 'pre_to_post/pre_ekyc',
            data: {
              mobile_number: this.mobileNumber,
              otp: this.otp.join(''),
              is_pre2post_bundle: true
            }
          })
          if (!result.is_pass) throw new Error()
          window.localStorage.setItem('cart-id', result.cart_hash)
          this.updateURLQuery('mobile', this.mobileNumber)
          this.$parent.goTo('package')
        } catch (e) {
          this.loading = false
          if (e?.['tmp_check_result']?.A?.['is_pass'] === false) {
            this.otpError = true
            return
          }
          return this.$router.push({
            name: 'online-store-existing-verify-fail',
            query: {
              /* refactor because add 'verify-device-bundle-existing' COMPONENT :
              product_id: this.$route.params.product,
              */
              product_id: this.$parent.productId,
              error: e.is_not_found_thai_id ? 'not_true_customer' : 'not_prepaid'
            }
          })
        }
      },
      async verifyExisting () {
        try {
          this.page = 'checking'
          this.otpError = false
          const data = {
            service_name: 'truemove',
            mobile_number: this.mobileNumber,
            otp: this.otp.join(''),
            product_id_list: [this.productId],
            product_sku_list: [this.inventory ? this.inventory.sku : null],
            campaign_type: this.typeId,
            cart_hash: window.localStorage.getItem('cart-id'),
            redeem_code: this.redeemCode,
            is_trueblack: this.$route.query.trueblack
          }
          if (this.aging !== '') {
            data.aging = this.aging
          }

          if (this.$route.query.paysmooth_token && localStorage.getItem('paysmooth-data')) {
            const paysmoothData = JSON.parse(localStorage.getItem('paysmooth-data'))
            data.tenor = parseInt(paysmoothData.tenor)
            data.down_payment_rate = parseInt(paysmoothData.down_rate)
          }

          if (this.verifyData?.advance_payment !== undefined && this.verifyData?.contract !== undefined) {
            data.verify_data = this.verifyData
          }
          if (this.typeId === '3') data.rc = this.discountList.rc
          const result = await this.$store.dispatch(VERIFY, {
            id: this.config.path,
            tmvhAuth: this.$route.query.token,
            data
          })
          if (!result.is_pass) throw new Error()
          this.$parent.data.mobile_number = this.mobileNumber
          this.$parent.result = result
          if (this.typeId === '3') {
            await this.$parent.fetchPackage(this.discountList)
            return this.$parent.goTo('package')
          }
          await this.$parent.computeCart()
        } catch (e) {
          if (e?.['tmp_check_result']?.A?.['is_pass'] === false) {
            this.otpError = true
            this.page = 'otp'
            return
          }
          this.$parent.result = {
            is_pass: false,
            prever_mnp_sim_product_id: e.prever_mnp_sim_product_id,
            message: e.message || {
              th: 'Something went wrong. Please try again later.',
              en: 'Something went wrong. Please try again later.'
            }
          }
          this.$parent.goTo('result')
        }
      },
      verifyMnpTwoStep () {
        this.loading = true
        const data = {
          service_name: this.mnpTwoStepService(),
          mobile_number: this.mobileNumber,
          otp: this.otp.join(''),
          redeem_code: this.redeemCode
        }
        this.$parent.checkVerify(data)
      },
      mnpTwoStepService () {
        const options = this.$parent.config.options
        if (this.$parent.multiCampaign) {
          const type = this.$route.query.type
          return (type === 'truemoveh') ? 'truemove' : type
        } else {
          if (options.trueonline) {
            return 'trueonline'
          }
          if (options.truemoveh) {
            return 'truemove'
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
</style>
