<template>
  <div class="verify-container">
    <template v-if="page === 'mobile'">
      <div>
        <!-- <div class="title">{{ this.typeId === '5' ? Locale.verify.mobile.pre2post_title[$i18n.locale] : this.typeId === '4' ? this.Mnp2StepPackageName : Locale.verify.mobile.title[$i18n.locale] }}</div> -->
        <!-- <div class="subtitle" v-if="typeId === '4'">{{ this.$parent.pricePlan.name }}</div> -->
      </div>
      <form class="form phone-number" @submit.prevent>
        <label
          for=""
          :style="{
            fontSize: ($i18n.locale === 'th' ? '20px' : '18px'),
            flex: isShowEcouponInput || (this.typeId !== '5' && (isCampaignRedeem || isCampaignRedeemFreeDevice)) ? null : '1 1 auto'
          }"
        >
          <template v-if="promotion === 'pre2post'">{{ Locale.verify.mobile.pre2post_label[$i18n.locale] }}</template>
          <template v-else>{{ Locale.verify.mobile.label[$i18n.locale] }}</template>
        </label>
        <div class="input">
          <input
            v-model.trim="mobileNumber"
            :disabled="loading"
            :placeholder="this.typeId === '4' ? Locale.verify.mobile.mnp2step_placeholder[$i18n.locale] : Locale.verify.mobile.placeholder[$i18n.locale]"
            inputmode="tel"
            type="text"
            ref="phone"
            @click="setForcus()"
            :class="`${isValidMobile ? '' : 'error-input'}`"
          >
          <span
            v-if="!isValidMobile"
            class="error-message"
            :style="{ fontSize: ($i18n.locale === 'th' ? '12px' : '14px')}"
          >
            {{ Locale.verify.mobile.validate_verify[$i18n.locale] }}
          </span>
        </div>
        <!-- ecoupon part -->
        <template v-if="isShowEcouponInput">
          <div class="line-break" />
          <label
            for=""
            :style="{ fontSize: ($i18n.locale === 'th'? '20px' : '18px')}"
          >
            {{ Locale.verify.mobile.ecoupon_label[$i18n.locale] }}
          </label>
          <div class="input">
            <input
              v-model.trim="couponCode"
              :disabled="loading"
              :placeholder="Locale.verify.mobile.ecoupon_placeholder[$i18n.locale]"
              type="text"
              ref="coupon"
              @click="setForcus()"
              :class="`${isValidEcoupon ? '' : 'error-input'}`"
            >
            <span v-if="!isValidEcoupon" class="error-message">{{ Locale.verify.mobile.validate_verify[$i18n.locale] }}</span>
          </div>
          <div class="line-break" />
        </template>
        <!-- Redeem Code -->
        <template v-if="this.typeId !== '5' && (isCampaignRedeem || isCampaignRedeemFreeDevice)">
          <div class="line-break" />
          <label
            for=""
            :style="{fontSize: ($i18n.locale === 'th'? '20px' : '18px')}"
          >
            {{ Locale.verify.redeem_code.label[$i18n.locale] }}
          </label>
          <div class="input">
            <input
              v-model.trim="redeemCode"
              :disabled="loading"
              :placeholder="Locale.verify.redeem_code.placeholder[$i18n.locale]"
              type="text"
              ref="redeem_code"
              @click="setForcus()"
              :class="`${isValidRedeemCode ? '' : 'error-input'}`"
            >
            <span v-if="!isValidRedeemCode" class="error-message">{{ Locale.verify.redeem_code.error[$i18n.locale] }}</span>
          </div>
          <div class="line-break" />
        </template>
        <div class="button">
          <button
            id="get-otp"
            @click="requestOtp"
            :disabled="loading || !(isValidEcoupon && isValidMobile)"
          >{{ isShowEcouponInput ? Locale.verify.mobile.ecoupon_button[$i18n.locale] : Locale.verify.mobile.button[$i18n.locale] }}</button>
        </div>
      </form>
    </template>
    <div v-if="page == 'mobile'" class="divider otp" />
    <div v-if="Object.keys(message).length != 0 && message.is_pass === false" class="divider otp" />
    <template v-if="page === 'mobile' & !redirectOTP">
      <form class="form verify-otp" @submit.prevent>
          <!-- otp title for mobile -->
          <div class="title-otp title-otp-mobile" :style="{ width: ($i18n.locale === 'th' ? '181px' : '192px')}">
            <label class="otp" :style="{ fontSize: ($i18n.locale === 'th'? '20px' : '18px')}">
              {{ Locale.verify.otp.label[$i18n.locale] }}
            </label>
            <div class="title otp" :style="{ marginLeft: '5px' }">
              <div class="number">+{{parsedMobileNumber}}</div>
            </div>
          </div>
          <br class="title-otp-mobile" />
          <!-- end otp title for mobile -->

          <div class="input otp" ref="otp" :style="{ gridGap: ($i18n.locale === 'th' ? '0px 10px' : '0px 6px')}">
            <div class="title-otp title-otp-desktop" :style="{ width: ($i18n.locale === 'th' ? '181px' : '185px')}">
              <label class="otp" :style="{ fontSize: ($i18n.locale === 'th'? '20px' : '18px')}">{{ Locale.verify.otp.label[$i18n.locale] }}</label>
              <div class="title otp"><div class="number">+{{parsedMobileNumber}}</div></div>
            </div>
            <div class="input-otp">
              <input
                autocomplete="one-time-code"
                type="number"
                inputmode="decimal"
                :disabled="redirectOTP"
                :error="otpError"
                @paste="otpPaste"
                @click="otpOnclick"
                @keydown="otpKeydown($event, 0)"
                ref="otp"
                v-model="otp[0]"
                autofocus
              />
              <input
                type="number"
                inputmode="decimal"
                :disabled="redirectOTP"
                :error="otpError"
                @click="otpOnclick"
                @keydown="otpKeydown($event, 1)"
                v-model="otp[1]"
                ref="otp"
              />
              <input
                type="number"
                inputmode="decimal"
                :disabled="redirectOTP"
                :error="otpError"
                @click="otpOnclick"
                @keydown="otpKeydown($event, 2)"
                v-model="otp[2]"
                ref="otp"
              />
              <input
                type="number"
                inputmode="decimal"
                :disabled="redirectOTP"
                :error="otpError"
                @click="otpOnclick"
                @keydown="otpKeydown($event, 3)"
                v-model="otp[3]"
                ref="otp"
              />
              <div v-if="otpError" class="error otp">{{ Locale.verify.otp.error[$i18n.locale] }}</div>
            </div>
          </div>
          <button
            id="verify-otp"
            type="button"
            @click="verifyOtp"
            :disabled="!validOtp || redirectOTP"
          >{{ Locale.verify.otp.button[$i18n.locale] }}</button>
          <div
            class="resend"
            v-if="!loading"
          >
            {{ Locale.verify.otp.resend[$i18n.locale] }} <img class="icon" :src="`/images/verify/Frame.png`" /> <span @click="resendOtp">{{ Locale.verify.otp.resend_action[$i18n.locale] }}</span>
          </div>
      </form>
    </template>

    <div v-if="mobileError">
      <div class="message">
        <div class="messageOne">{{Locale.verify.mobile.error[$i18n.locale]}}</div>
        <div class="messageTwo">{{Locale.verify.mobile.errorTwo[$i18n.locale]}}</div>
      </div>
    </div>

    <div v-if="page === 'mobile' && !mobileError && redirectOTP && Object.keys(message).length == 0">
      <div class="message">
        <div class="messageOne">{{ Locale.verify.notice.first[$i18n.locale] }}</div>
        <div class="messageTwo">{{ Locale.verify.notice.second[$i18n.locale] }}</div>
      </div>
    </div>

    <div v-if="Object.keys(message).length != 0 && !message.is_pass">
      <div class="message">
        <div class="result-title failed">{{ message.message[$i18n.locale] }} </div>
      </div>
    </div>
    <template v-if="page === 'checking'">
      <div class="checking">
        <div class="checking-label">{{ Locale.checking[$i18n.locale] }}</div>
        <div class="checking-icon">
          <div class="dot-stretching"></div>
        </div>
      </div>
    </template>
    <template v-if="page === 'success'">
      <div class="checking">
        <div
            class="checking-success">
            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                :fill="`${'#FFF'}`"
            />
            </svg>
        </div>
        <div class="checking-success-label">{{ Locale.checking_success[$i18n.locale] }}</div>
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
  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    props: {
      itemPromotionSelected: {
        type: String,
        "default": ''
      }
    },
    data: () => ({
      Locale,
      page: 'mobile',
      mobileNumber: '',
      couponCode: '',
      otp: ['', '', '', ''],
      loading: false,
      mobileError: false,
      otpError: false,
      redirectOTP: true,
      message: {},
      redeemCode: '',
      isValidRedeemCode: true
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
        if (this.$parent.inventory) {
          return this.$parent.inventory ? this.$parent.inventory : ''
        }
        return this.product.inventories.find(e => e.id.toString() === this.inventoryId)
      },
      parsedMobileNumber () {
        const regex = /(^[0])/g
        return regex.test(this.mobileNumber) ? this.mobileNumber.replace(/(^[0])/, '66') : '66' + this.mobileNumber
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
        const id = this.campaign.campaign_type === '3' ? this.ppId : this.$parent.selectedPackage
        return this.campaign.discount_list.find(e => e.id.toString() === id.toString())
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
      promotion () {
        return this.$parent.promotionName ? this.$parent.promotionName : ''
      },
      verifyData () {
        if (this.$parent.queryString) {
          return {
            advance_payment: this.$parent.queryString.advance_payment,
            contract: this.$parent.queryString.contract
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
      },
      isCampaignRedeem () {
        const selectedPackageObj = this.discountList
        if (selectedPackageObj?.meta === 'campaign_redeem') {
          return true
        }
        return false
      },
      isCampaignRedeemFreeDevice () {
        const selectedPackageObj = this.discountList
        if (selectedPackageObj?.meta === 'campaign_redeem_free_device' && typeof this.product.config_free_device !== 'undefined' && typeof this.product.config_free_device[this.itemPromotionSelected] !== 'undefined') {
            return true
        }
        return false
      },
      isValidEcoupon () {
        return this.couponCode === '' || this.couponCode.length <= 25
      },
      isValidMobile () {
        return this.mobileNumber === '' || (this.mobileNumber.length === 10 && /^-?\d+$/.test(this.mobileNumber))
      },
      isShowEcouponInput () {
        return +this.typeId === 3 && this.campaign.discount_list && this.campaign.discount_list.some(campaign => campaign.meta && campaign.meta === 'campaign_ecoupon')
      }
    },
    mounted () {
      this.goToSuccess()
      this.$watch('promotion', (promotion) => {
        this.message = {}
        this.otp = ['', '', '', '']
        this.mobileError = false
        this.mobileNumber = ''
        this.redeemCode = ''
        this.redirectOTP = true
        this.goToSuccess()
      })
      this.$watch('discountList', (promotion) => {
        this.message = {}
        this.otp = ['', '', '', '']
        this.mobileError = false
        this.mobileNumber = ''
        this.redeemCode = ''
        this.redirectOTP = true
        this.goToSuccess()
      })
    },
    methods: {
      setForcus () {
        this.message = {}
        this.otp = ['', '', '', '']
        this.mobileError = false
        this.isValidRedeemCode = true
      },
      async requestOtp () {
        loggerAddon({
          event: 'verify existing(Type3)',
          status: 'verify',
          productId: this.productId,
          matcode: this.inventory?.sku,
          mobileNumber: this.mobileNumber
        })
        try {
          if (this.loading) return
          if ((this.isCampaignRedeem || this.isCampaignRedeemFreeDevice) && this.campaign.campaign_type === '3' && this.redeemCode === '') {
            this.isValidRedeemCode = false
            return
          }
          this.isValidRedeemCode = true
          this.mobileError = false
          this.loading = true
          if (!/^[0-9]{10,10}$/.test(this.mobileNumber)) throw new Error('input-invalid')
          await this.$store.dispatch(FETCH_OTP, this.mobileNumber)
          this.loading = false
          this.redirectOTP = false
          // this.page = 'otp'
        } catch (e) {
          this.redirectOTP = true
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
        this.redirectOTP = true
        if (this.typeId === '5') return this.verifyPreToPost()
        if (this.typeId === '4') return this.verifyMnpTwoStep()
        this.verifyExisting()
      },
      async verifyPreToPost () {
        try {
          if (this.loading) return
          this.otpError = false
          this.page = 'checking'
          const result = await this.$store.dispatch(VERIFY, {
            id: 'pre_to_post/pre_ekyc',
            data: {
              mobile_number: this.mobileNumber,
              otp: this.otp.join(''),
              is_pre2post_bundle: true
            }
          })
          if (!result.is_pass) throw new Error()
          this.page = 'success'
          window.localStorage.setItem('cart-id', result.cart_hash)
          this.updateURLQuery('mobile', this.mobileNumber)
          this.$parent.promotionVerify = this.promotion
          this.$parent.result = result
        } catch (e) {
          this.loading = false
          if (e?.tmp_check_result?.A?.is_pass === false) {
            this.page = 'mobile'
            this.mobileNumber = ''
            this.message = {
              is_pass: false,
              message: {
                th: Locale.verify.otp.error.th,
                en: Locale.verify.otp.error.en
              }
            }
            return
          }
          this.$parent.goTo('prepaid')
          this.$parent.errorVerify = e.is_not_found_thai_id ? 'not_true_customer' : 'not_prepaid'
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

          if (this.verifyData?.advance_payment !== undefined && this.verifyData?.contract !== undefined) {
            data.verify_data = this.verifyData
          }

          // add related field when ecoupon code is completely filled
          if (this.couponCode.length > 0 && this.couponCode.length <= 25) {
            data.ecoupon_code = this.couponCode
            const selectedCampaign = this.campaign.discount_list.find(e => e.id.toString() === this.ppId)
            data.selected_campaign_code = selectedCampaign?.campaign_code
          }

          if (this.typeId === '3') data.rc = this.discountList.rc

          if (this.product.is_iot && this.product.is_iot === true && this.discountList) {
            data.rc = this.discountList.rc
            data.meta = this.discountList.meta
            data.discount = this.discountList.discount
          }

          const result = await this.$store.dispatch(VERIFY, {
            id: this.config.path,
            tmvhAuth: this.$route.query.token,
            data
          })
          if (!result.is_pass) throw new Error()
          this.$parent.promotionVerify = this.promotion
          this.$parent.data.mobile_number = this.mobileNumber
          this.$parent.mobile = this.mobileNumber
          this.$parent.result = result
          this.message = result
          this.page = 'success'
          loggerAddon({
            event: 'verify existing(Type3)',
            status: 'success',
            productId: this.productId,
            matcode: this.inventory?.sku,
            mobileNumber: this.mobileNumber,
            advancePayment: this.verifyData.advance_payment
          })
        } catch (e) {
          loggerAddon({
            event: 'verify existing(Type3)',
            status: 'failed',
            productId: this.productId,
            matcode: this.inventory?.sku,
            mobileNumber: this.mobileNumber
          })
          if (e?.tmp_check_result?.A?.is_pass === false) {
            this.page = 'mobile'
            this.mobileNumber = ''
            this.message = {
              is_pass: false,
              message: {
                th: Locale.verify.otp.error.th,
                en: Locale.verify.otp.error.en
              }
            }
            return
          }
          this.message = {
            is_pass: false,
            prever_mnp_sim_product_id: e.prever_mnp_sim_product_id,
            message: e.message || {
              th: 'Something went wrong. Please try again later.',
              en: 'Something went wrong. Please try again later.'
            }
          }
          this.$parent.result = {
            is_pass: false,
            prever_mnp_sim_product_id: e.prever_mnp_sim_product_id,
            message: e.message || {
              th: 'Something went wrong. Please try again later.',
              en: 'Something went wrong. Please try again later.'
            }
          }
          this.page = 'mobile'
          this.redirectOTP = true
          this.mobileNumber = ''
          this.redeemCode = ''
          this.couponCode = ''
          this.otp = ['', '', '', '']
          // this.$parent.goTo('result')
        }
      },
      verifyMnpTwoStep () {
        this.loading = true
        const data = {
          service_name: this.mnpTwoStepService(),
          mobile_number: this.mobileNumber,
          otp: this.otp.join('')
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
      },
      goToSuccess () {
        if (this.$parent.promotionVerifyOtp === this.promotion && this.$parent.resultVerify.is_pass) {
          return this.page = 'success'
        }
        return this.page = 'mobile'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .verify-container {
    border-radius: 0px 0px 10px 10px;
    margin: auto;
    display: grid;
    max-width: 550px;
    min-width: 60px;
    background: #F7F7F7;
    .divider {
      width: 94.5%;
      border: 0.5px solid #CCCCCC;
      background: #F7F7F7;
      margin-left: 3%;
    }
    .form {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 16px;
      width: 100%;
      max-width: 550px;
      height: 60px;
      margin: auto;

      label {
        font-family: 'TrueLight';
        font-size: 20px;
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
    }
    .verify-otp, .phone-number {
      button {
        cursor: pointer;
        margin-top: 2px;
        background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        border-radius: 20px;
        font-family: 'TrueBold';
        font-size: 20px;
        height: 30px;
        color: #fff;
        border: none;
        width: 120px;

        &[disabled] {
          background-color: #FFFFFF;
          background: #E1E1E1;
        }
      }
    }
    .verify-otp {
      /* background: #F7F7F7; */
      display: grid;
      grid-gap: 0px 28px;
      grid-template-columns: repeat(2, 1fr);
      max-width: 550px;
      height: auto;
      margin: auto;
      padding: 20px;

      label {
        font-family: 'TrueLight';
        font-size: 20px;
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

      .resend {
        width: 180px;
        font-family: 'TrueLight';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        clear: left;
        grid-column: 1 / 3;
        margin-left: 39.5%;
        color: #404040;

        span {
          color: #29ABE2;
          cursor: pointer;
          text-decoration: underline;
          font-family: 'TrueLight';
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 20px;
        }
      }

      @media screen and (max-width: 550px) {
        grid-gap: 0px 5px;

        .resend {
          margin-left: 0;
          margin-top: 10px;
        }
      }

      .input.otp {
        grid-gap: 0px 10px;
        display: grid;
        grid-template-columns: auto auto;
        .title-otp {
          width: 181px;
          .otp {
            font-size: 20px;
            line-height: 20px;
            font-family: 'TrueLight';
            font-style: normal;
            font-weight: normal;
            color: #404040;
          }
          .number {
            font-size: 24px;
            line-height: 24px;
            font-family: 'TrueBold';
            text-align: left;
            font-style: normal;
            color: #404040;
            font-weight: normal;
          }
        }
        .input-otp {
          width: 145px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          grid-gap: 15px;
          margin-top: 10px;
        }
        input {
          min-width: 0;
          height: 30px;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #CCCCCC;
          font-family: 'TrueMedium';
          font-size: 19px;
          text-align: center;
          width: 29px;

          &:focus {
            outline: none;
          }

          &[error] {
            border-color: #F32525;
          }
        }
      }
      button {
        margin-top: 10px;
      }
    }
    .phone-number{
      /* background: #F7F7F7; */
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      grid-gap: 6px 0;
      width: 100%;
      max-width: 550px;
      height: auto;
      margin: auto;
      padding: 16px;

      label {
        font-family: 'TrueLight';
        font-size: 20px;
        height: 24px;
        line-height: 24px;
        margin-top: 2px;
        color: #000;
        text-align: left;
        flex: 1.5;

        &.otp {
          color: #979797;
          grid-column: 1/-1;
          text-align: left;
          font-family: 'TrueMedium';
          font-size: 22px;
        }

        @media screen and (max-width: 860px) {
          flex: 1 1 100%;
        }
      }

      .input {
        display: grid;
        flex: 1 2 auto;
        max-width: 304px;

        input {
          border-radius: 6px;
          height: 30px;
          border: 1px solid #CCCCCC;
          padding: 0 12px;
          font-family: 'TrueLight';
          font-size: 20px;
          box-sizing: border-box;
          font-style: normal;
          font-weight: 300;
          width: 100%;
          line-height: 24px;

          &:focus {
            outline: none;
          }
        }

        .error-message {
          color: #E02B2C;
          text-align: left;
          font-size: 14px;
          font-family: "TrueLight";
          line-height: normal;
        }

        .error-input {
          border-color: #E02B2C;
          color: #E02B2C;
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
        @media screen and (max-width: 860px) {
          flex: 1 2 100%;
        }
      }

      .button {
        flex: 1 1 auto;
      }

      .line-break {
        width: 100%;
      }

      @media screen and (max-width: 550px) {
        .input {
          max-width: 100%;
        }
      }
    }
    .checking {
      text-align: center;
      max-width: 550px;
      height: 156px;
      background: #F7F7F7;
      border-radius: 0px 0px 10px 10px;
      position: relative;
      &::before {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 5px;
        content: attr(data-title);
        font-size: .75rem;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        color: white;
        background-color: rgb(255, 25, 100);
        border-radius: .25rem 0 .25rem 0;
      }
      .checking-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;
        overflow: hidden;
        .dot-stretching {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #FFFFFF;
          color: #FFFFFF;
          transform: scale(1.25, 1.25);
          // animation: dotStretching 2s infinite ease-in;
        }
        .dot-stretching::before, .dot-stretching::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
        }
        .dot-stretching::before {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #E62627;
          color: #E62627;
          animation: dotStretchingBefore 2s infinite ease-in-out;
        }
        .dot-stretching::after {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #F4BD50;
          color: #F4BD50;
          animation: dotStretchingAfter 2s infinite ease-in-out;
        }
      }

      .checking-label {
        padding-top: 50px;
        color: #000;
        font-size: 24px;
        line-height: 20px;
        font-family: 'TrueLight';
        font-style: normal;
        font-weight: normal;
      }
      .checking-success {
        margin: auto;
        margin-top: 50px;
        margin-bottom: 10px;
        width: 30px;
        height: 30px;
        background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        box-shadow: 3px 3px 10px rgba(230, 38, 39, 0.25);
        border-radius: 50%;
      }
      .checking-success-label {
        font-family: 'TrueLight';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 20px;
        text-align: center;
      }
    }

    @media screen and (max-width: 550px) {
      max-width: 91vw;
      overflow: auto;
    }
  }

  .message {
    padding: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #404040;
    max-width: 550px;
    height: 96px;
    .messageOne {
      font-size: 20px;
      line-height: 24px;
      font-family: 'TrueLight';
    }
    .messageTwo {
      font-size: 24px;
      line-height: 28.79px;
      font-family: 'TrueBold';
    }
  }
  .true-light {
    font-family: 'TrueLight';
  }
  .weight-400 {
    font-weight: 400;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .result-title {
      font-family: 'TrueLight';
      text-align: center;
      max-width: 600px;

      &.success {
        color: #e4a20f;
        font-size: 20px;
        line-height: 23.99px;
      }

      &.failed {
        font-family: 'TrueBold';
        font-size: 24px;
        line-height: 28.79px;
        color: #ff0000;
      }
    }
  @keyframes dotStretchingBefore {
    0% {
      transform: translate(-20px);
    }
    50% {
      transform: translate(20px);
    }
    100% {
      transform: translate(-20px);
    }
  }

  @keyframes dotStretchingAfter {
    0% {
      transform: translate(20px);
    }
    50% {
      transform: translate(-20px);
    }
    100% {
      transform: translate(20px);
    }
  }
  .title-otp-mobile {
    display: -webkit-box;
  }
  @media screen and (min-width: 551px) {
    .title-otp-mobile {
      display: none;
    }
  }
  @media screen and (max-width: 551px) {
    .title-otp-desktop {
      display: none;
    }
  }
</style>
