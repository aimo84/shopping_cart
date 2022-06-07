<template>
  <div class="verify-container">
    <loading-element v-if="loading" />
    <template v-else>
      <div class="title">{{ Locale.instantsim.title[$i18n.locale] }}</div>
      <div class="subtitle">
        <template v-if="isInstantSimPrepaid">{{ Locale.instantsim.subtitle_prepaid[$i18n.locale] }}</template>
        <template v-else>{{ Locale.instantsim.subtitle_postpaid[$i18n.locale] }}</template>
      </div>
      <div class="package-container">
        <div class="label">{{ Locale.instantsim.selected_number[$i18n.locale] }}</div>
        <div class="value">
          <div>{{ mobileNumber }}</div>
          <router-link
            :to="{
              name: 'online-store-instantsim',
              params: {
                id: $route.params.id
              },
              query: {
                ...$route.query
              }
            }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="package-container">
        <div class="label">{{ isInstantSimPrepaid ? Locale.instantsim.selected_prepaid_plan[$i18n.locale] : Locale.instantsim.selected_plan[$i18n.locale] }}</div>
        <div class="value">
          <div v-if="isInstantSimPrepaid">{{ product.title.th}}</div>
          <div v-else>{{ pricePlan.name }}</div>
          <svg
            v-if="!isInstantSimPrepaid"
            @click="$parent.goTo('plan')"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </div>
        <img :src="imageUrl" />
      </div>
      <div class="info-text">
        <template v-if="isInstantSimPrepaid">{{ Locale.instantsim.msg_prepaid[$i18n.locale] }}</template>
        <template v-else>{{ Locale.instantsim.msg_postpaid[$i18n.locale] }}</template>
      </div>
      <button-element id="start_activation" @click="activate">{{ Locale.instantsim.start[$i18n.locale] }}</button-element>
      <div v-if="error" class="error-msg">{{ error[$i18n.locale] }}</div>
      <div>
        <div class="back-link" @click="back">{{ Locale.instantsim.back[$i18n.locale] }}</div>
      </div>
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Button from '@components/button'
  import {
    ACTIVATE_INSTANT_SIM,
    CREATE_INSTANT_SIM,
    CREATE_NEW_EKYC
  } from '@store/actions.type'
  import Locale from './locale.json'

  export default {
    components: {
      'loading-element': Loading,
      'button-element': Button
    },
    props: {
      status: Object,
      packages: Object,
      pricePlan: Object
    },
    data: () => ({
      Locale,
      loading: false,
      error: false
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      newEkyc () {
        return this.$store.state.ekyc.newEkyc
      },
      isInstantSimPrepaid () {
        return this.product.product_type === 'prepaid'
      },
      mobileNumber () {
        return this.status.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      imageUrl () {
        return this.isInstantSimPrepaid ? this.product.images[0].url : this.packages.package_image_desktop
      }
    },
    methods: {
      trackAnalytics () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'scanInstantSim',
          event_category: 'instant_sim',
          event_action: 'ekyc_redirect',
          event_label: ''
        })
      },
      back () {
        if (this.isInstantSimPrepaid) {
          this.$router.push({
            name: 'online-store-instantsim',
            params: {
              id: this.$route.params.id
            },
            query: {
              ...this.$route.query
            }
          })
        } else {
          this.$parent.goTo('plan')
        }
      },
      async createEkyc () {
        try {
          await this.$store.dispatch(CREATE_NEW_EKYC, {
            answers: {
              callback_url: location.href
            }
          })
          this.trackAnalytics()
          window.location.href = this.newEkyc.form_url
        } catch (e) {
          this.error = {
            th: 'Something went wrong. Please try again',
            en: 'Something went wrong. Please try again'
          }
          this.loading = false
        }
      },
      async activate () {
        try {
          this.loading = true
          const action = this.isInstantSimPrepaid ? CREATE_INSTANT_SIM : ACTIVATE_INSTANT_SIM
          let activeJsonBody = {
            correlation_id: this.$route.query.correlation_id,
            phone_no: this.status.mobile,
            priceplan: this.pricePlan.code,
            lang: this.$i18n.locale.toUpperCase(),
            sale_id: "",
          }
          let data = {}

          if(localStorage.getItem('saleId')){
            activeJsonBody.sale_id = localStorage.getItem('saleId')
            data = await this.$store.dispatch(action, activeJsonBody )
          }
          else {
            data = await this.$store.dispatch(action, activeJsonBody )
          }

          if (!data.is_pass) {
            this.error = {
              th: 'Something went wrong. Please try again',
              en: 'Something went wrong. Please try again'
            }
            this.loading = false
            return
          }
          if (this.isInstantSimPrepaid) {
            await this.createEkyc()
          } else {
            window.location.href = data.deeplink
          }
        } catch (e) {
          this.error = e.message
          this.loading = false
        }
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
    margin: auto 12px;

    .title {
      font-family: "TrueBold";
      font-size: 30px;
      line-height: 30px;
      margin: 24px 0 16px 0;
    }
    .subtitle {
      margin-bottom: 24px;
      line-height: 24px;
    }
    .package-container {
      border: 1px solid #DCDDE0;
      border-radius: 8px;
      padding: 16px;
      width: 100%;
      max-width: 640px;
      margin: auto auto 16px;

      .label {
        color: #666;
      }

      .value {
        color: #000;
        font-family: 'TrueBold';
        font-size: 26px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          line-height: 0;
        }

        svg {
          width: 18px;
          height: 18px;
          margin-left: 12px;
          margin-bottom: 2px;
          fill: #1565c0;
          cursor: pointer;
        }
      }

      img {
        margin-top: 8px;
        max-width: 200px;
        width: 100%;
      }
    }
    .info-text {
      margin: 0 auto 24px;
      max-width: 640px;
      line-height: 22px;
    }
    .error-msg {
      margin-top: 16px;
      color: #ff0000;
    }
    .back-link {
      margin-top: 16px;
      text-decoration: underline;
      cursor: pointer;
      display: inline-block;
    }
  }
</style>
