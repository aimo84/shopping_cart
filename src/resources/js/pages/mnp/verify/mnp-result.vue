<template>
  <div class="result-container">
    <div class="icon success" v-if="success">
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
    <div class="result-title success" v-if="success">{{ Locale.result.result_success[$i18n.locale] }}</div>
    <div class="result-title failed" v-else v-html="message[$i18n.locale]"></div>
    <div class="privilege-container" v-if="identifyId">
      <div class="privilege-label">{{ Locale.result.thai_id[$i18n.locale] }}</div>
      <div class="privilege-items">
        <div class="privilege-item">{{ identifyId }}</div>
      </div>
    </div>
    <div class="result-message" v-if="success">{{ Locale.result.result_status_success[$i18n.locale] }}</div>
    <div class="result-message" v-else>{{ Locale.result.result_status_fail[$i18n.locale] }}</div>
    <div class="result-button-container">
      <button-element
        v-if="success"
        class="button next"
        id="add_package_to_cart"
        @click="next"
      >{{ Locale.ekyc.next[$i18n.locale] }}</button-element>
      <router-link
        v-if="!success && ekycStatus.is_pass"
        :to="isMNPAutoRoute ? {
          name: 'online-store-mnp-auto-share-plan',
          params: {
            id: $route.params.id,
            nas_code: $route.params.nas_code,
            bundle_id: $route.params.bundle_id
          },
          query: {
            token: $route.query.token
          }
        } : {
          name: 'online-store-detail',
          params: {
            id: $route.params.id
          },
          query: {
            token: $route.query.token
          }
        }"
      >
        <button-element class="button back">{{ Locale.ekyc.back[$i18n.locale] }}</button-element>
      </router-link>
      <template v-if="!ekycStatus.is_pass && !(skipEkyc && success)">
        <button-element
          class="button next"
          @click="$emit('route', 'ekyc')"
        >{{ Locale.result.retry[$i18n.locale] }}</button-element>
        <button-element
          class="button next"
          @click="linkOutSearchTrueshop()">{{ Locale.ekyc.next_trueshop[$i18n.locale] }}
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
      data: Object
    },
    data: () => ({
      Locale
    }),
    computed: {
      message () {
        return this.mnpInfo.message || {
          th: 'Something went wrong. Please try again.',
          en: 'Something went wrong. Please try again.'
        }
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return {}
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      identifyId () {
        return this.ekycAnswers.national_id
      },
      mnpInfo () {
        return this.$store.state.mnp.mnpInfo
      },
      mnpOtp () {
        return this.$store.state.mnp.mnpOtp
      },
      isMnpBundle () {
        return this.$route.name === 'mnp-bundle-verify'
      },
      isMNPAutoRoute () {
        return this.$route.name === 'mnp-auto-verify'
      },
      isMnpOneStep () {
        return this.data.bundle.bundle.campaign_mnp_type === 'one_step'
      },
      isMnpSharePlan () {
        return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify'
      },
      success () {
        if (this.isMnpBundle || this.isMNPAutoRoute) return this.mnpInfo.is_pass
        return this.mnpInfo.status === 'success'
      },
      simProduct () {
        return this.isMNPAutoRoute ? this.data.bundle.bundle.inventories.find(inventory => (
          inventory.product_id === this.$route.params.id
        )) : this.data.bundle.bundle.inventories.find(inventory => (
          inventory.product_id !== this.$route.params.id
        ))
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return (this.isMnpOneStep || this.isMnpSharePlan) && skip
      },
      isCampaignFreeDevice () {
        return this.$attrs.isCampaignFreeDevice || false
      }
    },
    methods: {
      updatePrivilege () {
        const privilegePlaceorder = this.mnpInfo.privilege_placeorder
        if (privilegePlaceorder) {
          const key = 'privilege-placeorder'
          let privileges = JSON.parse(localStorage.getItem(key)) || []
          if (!Array.isArray(privileges)) privileges = []
          const privilege = privileges.filter((item) => item.product_id !== privilegePlaceorder[0].product_id)
          if (privilegePlaceorder[0]) privilegePlaceorder[0].timestamp_expired = Date.now() + 172800000
          localStorage.setItem(key, JSON.stringify([...privilegePlaceorder, ...privilege]))
        }
      },
      setEkyc (id) {
        const key = 'postpaid-ekyc-data'
        let data = JSON.parse(localStorage.getItem(key)) || {}
        if (typeof data !== 'object') data = {}
        const dataEkyc = {
          channel: this.ekycStatus.channel,
          id_number: this.identifyId,
          face_recog_cust_capture: this.ekycStatus.image_liveness,
          'face-recog-cust-certificate': this.ekycStatus.image_front,
          face_recog_cust_capture_filename: '',
          'face-recog-cust-certificate-filename': ''
        }
        let tempContent = {}

        if (this.ekycStatus.channel === 'trueagent') {
          tempContent = {
            'temp-content-data': {
              FACE_RECOGNITION_STATUS: this.ekycStatus.face_recognition_status,
              IS_IDENTICAL: this.ekycStatus.is_identical,
              CONFIDENT_RATIO: this.ekycStatus.confident_raito,
              APPROVER: this.ekycStatus.approver,
              CUST_CERTIFICATE_LASER_ID: this.ekycStatus.cust_certificate_laser_id
            }
          }
        };
        data[id] = { ...dataEkyc, ...tempContent }
        localStorage.setItem(key, JSON.stringify(data))
      },
      next () {
        if (this.isMnpBundle || this.isMNPAutoRoute) {
          this.setEkyc(this.simProduct.product_id)
          this.updatePrivilege()
        }
        const securityKey = this.skipEkyc ? this.mnpOtp.security_key : this.ekycStatus.additional_data.security_key
        localStorage.setItem('mnp-security-key', securityKey)
        const referenceProductId = this.$route.query.reference_product_id
        if (referenceProductId) {
          localStorage.setItem('mnp-reference-product-id', referenceProductId)
        } else {
          localStorage.removeItem('mnp-reference-product-id', referenceProductId)
        }
        if (this.data.entPack.error) {
          this.$router.push(`/cart?id=${this.mnpInfo.cart_hash}&error=030`)
        } else {
          this.$router.push(`/address?id=${this.mnpInfo.cart_hash}`)
        }
      },
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
