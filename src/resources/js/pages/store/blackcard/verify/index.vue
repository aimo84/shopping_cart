<template>
  <div class="container">
    <loading-element
      v-if="page === 'loading'"
    />
    <checking-element
      v-if="page === 'checking'"
    />
    <result-element
      v-if="page === 'result'"
      :id="productId"
      :data="data"
      :result="result"
      :product="product"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Checking from './checking'
  import Result from './result'
  import {
    FETCH_VERIFY_CONFIG,
    FETCH_PRODUCT_INFO,
    VERIFY,
    CREATE_NEW_EKYC,
    FETCH_EKYC_STATUS
  } from '@store/actions.type'

  export default {
    components: {
      'loading-element': Loading,
      'checking-element': Checking,
      'result-element': Result
    },
    data: () => ({
      productId: '',
      inventoryId: '',
      promotionId: '',
      skuId: '',
      page: 'loading',
      product: {},
      data: {},
      result: {},
      config: {},
      ekycStatusRetry: 0
    }),
    computed: {
      newEkyc () {
        return this.$store.state.ekyc.newEkyc
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      ekycAnswers () {
        const answers = {}
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      }
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    async mounted () {
      this.productId = this.$route.params.product
      try {
        const config = await this.$store.dispatch(FETCH_VERIFY_CONFIG)
        const product = await this.$store.dispatch(FETCH_PRODUCT_INFO, {
          id: this.productId,
          tmvhAuth: this.$route.query.token
        })
        this.product = product.data.record
        this.config = config.family_black_truecard[this.productId]
        if (!this.config) throw new Error()
        if (this.product.product_type !== 'family_black_truecard') throw new Error()
        this.$route.query.hash ? this.fetchEkyc() : this.createEkyc()
      } catch {
        location.replace('/online-store')
      }
    },
    methods: {
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      trackAnalytics (label) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'EKYC_verification',
          event_action: 'EKYC_result',
          event_label: label
        })
      },
      async createEkyc () {
        try {
          await this.$store.dispatch(CREATE_NEW_EKYC, {
            answers: {
              callback_url: location.href
            }
          })
          window.location.href = this.newEkyc.form_url
        } catch (e) {
          this.$router.push(`/online-store/item/${this.$route.params.product}`)
        }
      },
      async fetchEkyc () {
        try {
          await this.sleep(2000)
          await this.$store.dispatch(FETCH_EKYC_STATUS, this.$route.query.hash)
          if (!this.ekycStatus.is_pass) {
            this.verifyResult = {
              status: false,
              thaiid: this.ekycAnswers.national_id,
              message: this.ekycStatus.message
            }
            return
          }
          this.verify()
        } catch (e) {
          this.ekycStatusRetry++
          if (this.ekycStatusRetry > 2) {
            this.trackAnalytics('verification_failed')
            this.$router.push(`/online-store/item/${this.$route.params.product}`)
            return
          }
          await this.fetchEkyc()
        }
      },
      goTo (page) {
        this.page = page
      },
      updatePrivilege () {
        if (this.result.privilege_placeorder) {
          const key = 'privilege-placeorder'
          let privileges = JSON.parse(localStorage.getItem(key)) || []
          if (!Array.isArray(privileges)) privileges = []
          const privilege = privileges.filter((item) => {
            return !this.result.product_id_list_pass.includes(item.product_id)
          })
          if (this.result.privilege_placeorder[0]) {
            this.result.privilege_placeorder[0].timestamp_expired = Date.now() + 172800000
          }
          localStorage.setItem(key, JSON.stringify([...this.result.privilege_placeorder, ...privilege]))
        }
      },
      async verify () {
        this.page = 'checking'
        const cartId = window.localStorage.getItem('cart-id')
        const dateOfBirth = this.ekycAnswers.date_of_birth
        this.data = {
          id_number: this.ekycAnswers.national_id,
          date_birth: dateOfBirth ? dateOfBirth.split('-')[0] : '',
          month_birth: dateOfBirth ? dateOfBirth.split('-')[1] : '',
          year_birth: dateOfBirth ? dateOfBirth.split('-')[2] : '',
          face_recog_cust_capture: this.ekycStatus.image_liveness,
          'face-recog-cust-certificate': this.ekycStatus.image_front,
          face_recog_cust_capture_filename: '',
          'face-recog-cust-certificate-filename': '',
          product_id_list: [this.productId]
        }
        if (cartId) this.data.cart_hash = cartId
        try {
          this.result = await this.$store.dispatch(VERIFY, {
            id: 'family_black_truecard',
            data: this.data
          })
        } catch (e) {
          this.result = {
            is_pass: false,
            message: e.message
          }
        }
        if (this.result.is_pass) {
          this.trackAnalytics('verification_passed')
        } else {
          this.trackAnalytics('verification_failed')
          localStorage.removeItem('family-black-verify-form')
        }
        const ekyc = {
          temp: {
            face: this.ekycStatus.image_liveness,
            front: this.ekycStatus.image_front
          },
          filename: {
            face: '',
            front: ''
          }
        }
        this.data = { ...this.data, ...{ ekyc } }
        this.page = 'result'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 16px 0;
  }
</style>
