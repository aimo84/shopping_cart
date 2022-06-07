<template>
  <div class="result-container">
    <div class="icon success" v-if="result.status">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
      </svg>
    </div>
    <div class="icon failed" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path stroke="#fff" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
      </svg>
    </div>
    <div class="result-title success" v-if="result.status">{{ Locale.result_success[$i18n.locale] }}</div>
    <template v-else>
      <div
        v-if="isDrluckyZodiac"
        class="result-title failed"
      >
        {{ result.message[$i18n.locale] }}
      </div>
      <div
        v-else
        v-html="result.message[$i18n.locale]"
        class="result-title failed"
      />
    </template>
    <div class="privilege-container" v-if="thaiid">
      <div class="privilege-label">{{ Locale.id_card_number[$i18n.locale] }}</div>
      <div class="privilege-items">
        <div class="privilege-item">{{ thaiid }}</div>
      </div>
      <template v-if="isInstantSimPrepaid && mobilenumber">
        <div class="privilege-label instant-sim">{{ Locale.mobile_number[$i18n.locale] }}</div>
        <div class="privilege-items">
          <div class="privilege-item">{{ mobilenumber }}</div>
        </div>
      </template>
    </div>
    <template v-if="!isInstantSimPrepaid">
      <div class="result-message" v-if="result.status">{{ Locale.result_status_success[$i18n.locale] }}</div>
      <div class="result-message" v-else>{{ Locale.result_status_fail[$i18n.locale] }}</div>
    </template>
    <div class="result-button-container">
      <template v-if="result.status">
        <router-link
          v-if="isInstantSimPrepaid"
          to="/online-store"
        >
          <button-element
            class="button next"
          >{{ Locale.back_homepage[$i18n.locale] }}</button-element>
        </router-link>
        <button-element
          class="button next"
          id="add_package_to_cart"
          @click="$parent.goTo('address')"
          v-else
        >{{ Locale.next[$i18n.locale] }}</button-element>
      </template>
      <template v-if="!result.status && result.ekyc.is_pass">
        <router-link
        v-if="!isFnF"
        :to="$route.name === 'drlucky-verify' ? '/online-store/berfuntong/select' : `/online-store/item/${$route.params.id}`"
      >
        <button-element
          class="button back">{{ Locale.back[$i18n.locale] }}
        </button-element>
        </router-link>
        <button-element
          v-else
          class="button back"
          @click="$parent.goTo('plan')"
        >{{ Locale.back[$i18n.locale] }}
        </button-element>
      </template>
      <template v-if="isNoEkyc && !result.correlation_id">
         <button-element
          class="button back"
          @click="$parent.goTo('address')"
          >{{ Locale.back[$i18n.locale] }}
        </button-element>
      </template>
      <template v-if="(!result.ekyc.is_pass && !isNoEkyc) && !(skipEkyc && result.status)">
        <template v-if="isFnF">
          <button-element
            class="button next"
            @click="$parent.goTo('plan')"
          >{{ Locale.retry[$i18n.locale] }}
          </button-element>
        </template>
        <template v-else>
          <button-element
            class="button next"
            @click="skipEkyc ? $parent.page = ('info-form') : $parent.fetchEkyc()"
          >{{ Locale.retry[$i18n.locale] }}
          </button-element>
        </template>
        <button-element
          class="button next"
          @click="linkOutSearchTrueshop()"
        >{{ Locale.next_trueshop[$i18n.locale] }}
        </button-element>
      </template>

    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      result: [Object],
      product: [Object]
    },
    data: () => ({
      Locale
    }),
    computed: {
      thaiid () {
        if (!this.result.thaiid) return
        return this.result.thaiid.substring(0, 3) + 'XXXXXX' + this.result.thaiid.substring(9, 13)
      },
      mobilenumber () {
        const e = this.result.mobilenumber
        const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return e.replace(regex, '$1-$2-$3')
      },
      isInstantSimPrepaid () {
        return this.$route.name === 'online-store-instantsim-verify'
      },
      isNoEkyc () {
        if (this.isDrluckyZodiac) return true
        const isDrlucky = this.$route.name.includes('drlucky-verify')
        const noEkyc = localStorage.getItem('no_ekyc') === 'true'
        return isDrlucky && noEkyc
      },
      isDrluckyZodiac () {
        return this.$route.name.includes('drlucky-zodiac-verify')
      },
      skipEkyc () {
        if (this.$route.name === 'online-store-lucky-9999-verify' && window.no_ekyc_sim_only) return true
        if ((this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only) return ((this.product.product_type === 'sim' || this.product.product_type === 'postpaid') && window.no_ekyc_sim_only)
        const skip = window.no_ekyc_device_bundle
        return (this.product.product_type === 'device_bundle_new_customer' || this.product.product_type === 'vlearn') && skip
      },
      isFnF () {
        return window.localStorage.getItem('sim_family_info') !== null
      }
    },
    methods: {
      linkOutSearchTrueshop () {
        window.open('https://www3.truecorp.co.th/cm/shop', '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 1.5em;
    max-width: 1100px;
    margin: auto 12px;
    padding: 76px 24px 50px 24px;

    .icon {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      margin-bottom: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #fff;
      }

      &.success {
        background-color: #54c74c;
        box-shadow: 1px 1px 0 #1f9716;
      }

      &.failed {
        background-color: #ff0000;
        box-shadow: 1px 1px 0 #8e0000
      }
    }
    .result-title {
      font-size: 40px;
      line-height: 40px;
      font-family: 'TrueBold';
      text-align: center;
      max-width: 600px;

      &.success {
        color: #e4a20f;
      }

      &.failed {
        color: #ff0000;
      }
    }
    .privilege-container {
      max-width: 400px;
      width: 100%;
      border-radius: 8px;
      background-color: #f5f5f5;
      padding: 12px;
      text-align: center;
      margin: 15px auto;

      .privilege-label {
        color: #4a4a4a;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 4px;

        &.instant-sim {
          margin-top: 8px;
        }
      }
      .privilege-items {
        font-family: 'TrueBold';
        font-size: 30px;
        line-height: 30px;
        color: #000;
      }
    }
    .result-message {
      margin-top: 16px;
      font-size: 24px;
      line-height: 28px;
      max-width: 620px;
      text-align: center;
      color: #4a4a4a;

      span {
        font-family: 'TrueBold';
      }
    }
    .result-button-container {
      margin-top: 44px;
      display: flex;

      .button {
        background-color: #ff0000;

        &.back {
          background-color: #666;
        }

        &:nth-child(2) {
          margin-left: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .result-container {
      .result-button-container {
        flex-direction: column;

        .button {
          &:nth-child(2) {
            margin-top: 8px;
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
