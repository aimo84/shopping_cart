<template>
  <div
    v-if="errorCode === 'invalid_paynext_payment'"
    class="payment-error-container"
  >
    <div class="d-flex column align-items-center">
      <div class="x-cross-icon">
        <svg
          width="45"
          height="45"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
                c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
                c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
                c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
            stroke-linejoin="round"
            stroke="white"
            stroke-width="1"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>
      <div
        v-for="(error, key) in errors"
        :key="key"
        class="title"
      >{{ Content.errorCode.invalid_paynext_payment.title[$i18n.locale] }}</div>
      <div class="info d-info">
        <span class="text-center">{{ Content.errorCode.invalid_paynext_payment.message_1[$i18n.locale] }}</span>
        <span class="text-center">{{ Content.errorCode.invalid_paynext_payment.message_2[$i18n.locale] }}</span>
      </div>
      <div class="mt-[15px] text-center">
        <span class="info">
          <span class="text-center"><a
              href="https://tmn.app.link/?deeplink=ascendmoney%3A%2F%2Fwallet.truemoney.co.th%2Fapp%2F660000000030%3Ftype%3Dsmartpay&deeplink_no_attribution=true"
              target="_blank"
            >{{ Content.errorCode.invalid_paynext_payment.link_status[$i18n.locale] }}</a></span>
          <span class="text-center"><a
              href="https://tmn.app.link/paynext"
              target="_blank"
            >{{ Content.errorCode.invalid_paynext_payment.link_setting[$i18n.locale] }}</a></span>
        </span>
      </div>
      <div class="button-container mt-[70px]">

        <router-link
          to="/payment"
          v-on:click.native="trackAnalytics('track_event', 'personal_information_and_address', 'back', 'Back')"
        >
          <button-element id="go_order_summary">
            {{ Content.go_checkout[$i18n.locale] }}
          </button-element>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Content from './content.json'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      Content,
      errors: [],
      errorCode: ''
    }),
    async mounted () {
      this.errorCode = this.$route.query.error
      if (this.errorCode in Content.errorCode) {
        this.errors = [Content.errorCode[this.errorCode]]
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
