<template>
  <div>
    <div class="mobile-number">{{ Locale.ussd.mobile_number[$i18n.locale] }} <span>{{ mobileNumber }}</span></div>
    <img class="banner" :src="`/images/mnp/ussd-banner-${$i18n.locale}.jpg`" />
    <div class="subtitle">{{ Locale.ussd.subtitle[$i18n.locale] }}</div>
    <form
      @submit.prevent
      :disabled="loading"
    >
      <label>{{ Locale.ussd.ussd[$i18n.locale] }}</label>
      <input-element
        :placeholder="Locale.ussd.ussd_placeholder[$i18n.locale]"
        v-model="data.ussd.code"
      />
      <div v-if="error.pin" class="error">{{ error.pin[$i18n.locale] }}</div>
    </form>
    <div class="terms-container">
      <a
        class="info-button"
        :href="tnc"
        target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2
            12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        <span>{{ Locale.ussd.tnc[$i18n.locale] }}</span>
      </a>
      <label>
        <input type="checkbox" v-model="agreement">
        <span>{{ Locale.ussd.agreement[$i18n.locale] }}</span>
      </label>
    </div>
    <button-element
      id="mnp_number"
      @click="checkPin"
      :disabled="!data.ussd.code || !agreement || loading"
    >{{ Locale.ussd.move_number[$i18n.locale] }}</button-element>
  </div>
</template>

<script>
  import Input from '@components/input'
  import Button from '@components/button'
  import Locale from './locale.json'
  import qs from 'qs'
  import {
    CHECK_MNP_PIN
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
      loading: false,
      agreement: false,
      error: {
        pin: false
      }
    }),
    computed: {
      mnpOtp () {
        return this.$store.state.mnp.mnpOtp
      },
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      },
      mnpType () {
        if (this.$route.name === 'mnp-bundle-verify') return 'mnpoposs2'
        const simType = this.productInfo.sim_data.sim_type
        return simType === 'postpaid' ? 'mnpoposs2' : 'mnpopres2'
      },
      mobileNumber () {
        const number = this.data.otp.phoneNumber
        const regex = number.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return number.replace(regex, '$1-$2-$3')
      },
      tnc () {
        if (this.$route.name === 'mnp-bundle-verify') return '/files/mnp/MNP_Post_T_C.pdf'
        const simType = this.productInfo.sim_data.sim_type
        if (simType === 'postpaid') {
          return '/files/mnp/MNP_Post_T_C.pdf'
        } else {
          return '/files/mnp/MNP_Pre_T_C.pdf'
        }
      },
      isMnpOneStep () {
        return this.data.bundle.bundle.campaign_mnp_type === 'one_step'
      },
      isMnpSharePlan () {
        return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify'
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return (this.isMnpOneStep || this.isMnpSharePlan) && skip
      }
    },
    methods: {
      trackAnalytics () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'Move to True',
          event_action: 'Click',
          event_label: 'move_number_to_true'
        })
      },
      async checkPin () {
        try {
          this.trackAnalytics()
          this.error.pin = false
          this.loading = true

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify ussd',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })

          await this.$store.dispatch(CHECK_MNP_PIN, {
            mobile_number: this.$route.query.flow === 'mnp-two' && this.$route.query.mobile ? this.$route.query.mobile : this.data.otp.phoneNumber,
            pin_code: this.data.ussd.code,
            security_key: this.mnpOtp.security_key,
            mnp_type: this.mnpType
          })

          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify ussd success',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })

          this.loading = false
          this.skipEkyc ? this.$emit('route', 'info-form') : this.$emit('route', 'ekyc')
        } catch (e) {
          loggerAddon({
            event: 'Verify MNP Sim only',
            status: 'verify ussd fail',
            productId: this.$route.params.id,
            mobileNumber: this.data.otp.phoneNumber
          })
          if (this.$route.query.flow === 'mnp-two') this.swapToMnp2StepURLQuery()
          this.error.pin = e.message
          this.loading = false
        }
      },
      swapToMnp2StepURLQuery () {
        const query = {
          type: '4',
          camptype: 'mnp_bundling_existing',
          pp: this.$route.query.pp,
          token: this.$route.query.token,
          accs: this.$route.query.accs
        }
        const newurl = `${window.location.origin}/online-store/privilege/verify/${this.$route.params.id}/${this.$route.params.inventory}/${this.$route.query.promotion}?${qs.stringify(query)}`
        window.history.replaceState({ path: newurl }, '', newurl)
      }
    }
  }
</script>

<style lang="scss" scoped src="./style.scss"></style>
<style lang="scss" scoped>
  .mobile-number {
    margin-top: 8px;
    line-height: 24px;

    span {
      font-family: 'TrueBold';
      color: #ff0000;
    }
  }
  .banner {
    display: block;
    max-width: 480px;
    margin: 24px auto;
    width: 100%;
  }
  .subtitle {
    max-width: 420px;
    margin: auto;
    white-space: pre-line;
  }
  .ussd {
    font-family: 'TrueBold';
    color: #ff0000;
    font-size: 48px;
    margin: 16px 0;
    line-height: 40px;
  }
  .terms-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0 24px 0;

    .info-button {
      color: #484848;
      text-decoration: none;
      align-items: center;
      background-color: #f9c947;
      border-radius: 24px;
      height: 38px;
      padding: 8px 20px 8px 8px;
      display: inline-flex;
      line-height: 26px;
      font-size: 22px;
      font-family: "TrueMedium";
      cursor: pointer;
      margin-bottom: 8px;

      svg {
        margin-right: 6px;
      }
    }

    label {
      display: inline-grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-gap: 8px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 860px) {
    .ussd {
      font-size: 40px;
      line-height: 32px;
    }
  }
</style>
