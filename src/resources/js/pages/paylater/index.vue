<template>
    <div class="pay-later-section">
        <div class="error-container"
             v-if="!loading && errors.length > 0">
            <ul>
                <li v-for="(error, key) in errors"
                    :key="key">
                    {{ error[$i18n.locale] }}
                </li>
            </ul>
        </div>
        <loading-element v-if="loading" />
        <div v-if="!loading" >
            <div class="image">
                <img src="/images/icons/icon-paylater-logo.png" />
            </div>
            <div class="pay-later-title">
                <div class="title">{{ Content.title[$i18n.locale] }}</div>
                <div class="description">{{ Content.description[$i18n.locale] }}</div>
            </div>
            <div class="condition-section">
                <div class="row condition">
                    <img class="icon1" src="/images/icons/icon-pay-later1.png" />
                    <p>{{ Content.condition1[$i18n.locale] }}</p>
                </div>
                <div class="row condition">
                    <img class="icon2" src="/images/icons/icon-pay-later2.png" />
                    <p>{{ Content.condition2[$i18n.locale] }}</p>
                </div>
                <div class="row condition">
                    <img class="icon3" src="/images/icons/icon-pay-later3.png" />
                    <p>{{ Content.condition3[$i18n.locale] }}</p>
                </div>
            </div>
            <div class="button-section">
                <button-element v-if="eligible"
                        class="button"
                        id="register_pay_later"
                        @click="deepLinkPayLater"
                >{{ Content.buttonRegister[$i18n.locale] }}</button-element>
                <button-element v-if="haveDataPlaceOrder"
                        class="button"
                        id="confirm_checkout_pay_later"
                        @click="makePayment"
                >{{ Content.buttonCheckout[$i18n.locale] }}</button-element>
            </div>
        </div>
    </div>
</template>

<script>
  import ButtonElement from '@components/button'
  import Content from './content.json'
  import Loading from '@components/loading'
  import {
    CREATE_PLACEORDER,
    CREATE_MNP_PLACEORDER,
    FETCH_PROFILE
  } from '@store/actions.type'
  import {
    showPayLater
  } from '@utils/common'
  export default {
    name: 'PayLater',
    components: {
      'button-element': ButtonElement,
      'loading-element': Loading
    },
    data: () => ({
      loading: true,
      isProcessing: false,
      errors: [],
      eligible: false,
      haveDataPlaceOrder: false,
      mnp: false,
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      placeOrderData () {
        return this.$store.state.placeorder.placeOrderData
      },
      isMnp () {
        return this.$store.state.placeorder.isMnp
      },
      placeOrderAction () {
        return this.isMnp ? CREATE_MNP_PLACEORDER : CREATE_PLACEORDER
      },
      errorSomethingWrong () {
        return [
          {
            th: 'Something went wrong. Please try again.',
            en: 'Something went wrong. Please try again.'
          }
        ]
      }
    },
    async mounted () {
      try {
        this.checkUserEligible()
      } catch (e) {
        this.$router.push('/online-store')
      }
    },
    methods: {
      async checkUserEligible () {
        await Promise.all([
          this.fetchProfile()
        ])
        if (this.user) {
          this.eligible = showPayLater(this.user)
        }
        if (this.placeOrderData.pay_later !== undefined) {
          this.haveDataPlaceOrder = true
        }
        if (!this.eligible) {
          this.$router.push('/cart?error=050')
        }

        this.loading = false
      },
      async fetchProfile () {
        try {
          if (!this.user) {
            const user = await this.$store.dispatch(FETCH_PROFILE)
            if (user.status_code !== 0) return
          }
        } catch {}
      },
      async makePayment () {
        try {
          if (this.placeOrderData && this.placeOrderData.pay_later !== undefined) {
            this.loading = true
            window.scrollTo(0, 0)
            this.errors = []

            this.$store
              .dispatch(this.placeOrderAction, this.placeOrderData)
              .then(async (data) => {
                if (data.code === 200) {
                  const redirectUrl = data.redirectUrl
                  if (redirectUrl.includes('/order/process/weomni/ew/')) {
                    this.createWeomniEWPaymentForm(redirectUrl)
                  } else {
                    window.location.href = redirectUrl
                  }
                } else {
                  this.errors.push(this.Content.error)
                  this.loading = false
                }
              })
              .catch(error => {
                const message = error.message ? this.Content.error : this.Content.error
                this.errors.push(message)
                this.loading = false
              })
          } else {
            this.errors.push(this.Content.error)
            this.loading = false
            setTimeout(() => { this.$router.push('payment') }, 5000)
          }
        } catch (e) {
          this.errors = this.errorSomethingWrong
          this.loading = false
        }
      },
      deepLinkPayLater () {
        window.location.href = window.url.MIX_TMN_PAY_LATER_DEEP_LINK
      },
      async createWeomniEWPaymentForm (redirectUrl) {
        window.loadingPlaceorder = false
        const form = document.createElement('form')
        try {
          form.method = 'post'
          form.action = redirectUrl

          const data = {
            user_id: this.user.id,
            channel: 'tmh-website'
          }

          Object.keys(data).forEach(item => {
            const element = document.createElement('input')
            element.setAttribute('value', data[item])
            element.name = item
            form.appendChild(element)
          })

          document.body.appendChild(form)
          form.submit()
          document.body.removeChild(form)
        } catch (e) {
          window.location = redirectUrl
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
