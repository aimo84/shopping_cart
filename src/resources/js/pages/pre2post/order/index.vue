<template>
  <div v-if="loaded">
    <div class="grid">
      <div v-if="error" class="error-container">
        <ul>
          <li>{{ error[$i18n.locale] }}</li>
        </ul>
      </div>
      <div class="grid-item">
        <div class="label black bold">{{ Locale.product_items[$i18n.locale] }}</div>
        <div class="card">
          <div class="package-info">
            <div class="black bold">{{ Locale.pre2post_title[$i18n.locale] }}</div>
            <div class="red bold">{{ mobileNumber }} ({{ packageInfo.contract }} {{ Locale.months_contract[$i18n.locale] }})</div>
            <div>{{ Locale.thai_id_number[$i18n.locale] }}: {{ thaiId }}</div>
            <br />
            <div class="bold">{{ Locale.package[$i18n.locale] }}</div>
            <div>{{ packageInfo.term_short }}</div>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="label black bold">{{ Locale.billing_address[$i18n.locale] }}</div>
        <div class="card address">
          <div class="black bold">
            <div>{{ this.data.billing_addr.firstname }} {{ this.data.billing_addr.lastname }}</div>
            <router-link
              class="black"
              :to="{
                name: 'pre2post-address',
                param: $route.param,
                query: $route.query
              }"
            >{{ Locale.edit[$i18n.locale] }}</router-link>
          </div>
          <div class="address-text">{{ address }}</div>
          <br />
          <div>{{ Locale.mobile_number[$i18n.locale] }}: {{ this.data.billing_addr.phone }}</div>
          <div>{{ Locale.email[$i18n.locale] }}: {{ this.data.billing_addr.email }}</div>
        </div>
      </div>
      <button-element class="button" @click="next">{{ Locale.confirm[$i18n.locale] }}</button-element>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'
  import {
    CREATE_PRE2POST_PLACEORDER
  } from '@store/actions.type'
  import { Mixins } from '../mixin.js'

  export default {
    components: {
      'button-element': Button
    },
    mixins: [Mixins],
    props: {
      data: Object
    },
    data: () => ({
      Locale,
      loaded: false,
      error: false
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo?.data?.record
      },
      packageInfo () {
        return this.$store.state.postpaid.package.record[0]
      },
      verify () {
        return this.$store.state.verify.verify
      },
      placeorder () {
        return this.$store.state.placeorder.pre2postPlaceorder
      },
      description () {
        return {
          th: this.product.description_th,
          en: this.product.description_en
        }
      },
      mobileNumber () {
        const e = this.verify.creditok_data.tmp_check_result.input.mobile_number
        const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
        return e.replace(regex, '$1-$2-$3')
      },
      thaiId () {
        return this.getThaiId()
      },
      address () {
        const e = this.data.billing_addr
        const address = [e.address1, e.address2].filter(e => e).join(' ')
        return `${address},\n${e.district},\n${e.city},\n${e.province} ${e.postcode}`
      }
    },
    async mounted () {
      try {
        this.$emit('loading', true)
        if (!this.data.ekyc_passed) {
          return this.$router.push({
            name: 'pre2post-address',
            params: this.$route.params,
            query: this.$route.query
          })
        }
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        this.$router.push({
          name: 'pre2post-verify'
        })
      }
    },
    methods: {
      async next () {
        try {
          this.$emit('loading', true)
          this.error = false
          await this.$store.dispatch(CREATE_PRE2POST_PLACEORDER, {
            cart_id: this.$route.query.id,
            billing_address: this.data.billing_addr
          })
          if (!this.placeorder.is_pass) throw new Error()
          this.$router.push({
            name: 'pre2post-success',
            params: {
              secure_key: this.placeorder.submit_data.secure_key
            }
          })
        } catch (e) {
          if (!this.placeorder.is_pass && this.placeorder.message) this.error = this.placeorder.message
          this.$emit('loading', false)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr;
    color: #666;
    line-height: 1em;
    margin: 24px 0;

    .black {
      color: #000;
    }

    .red {
      color: #F32525;
    }

    .bold {
      font-family: 'TrueBold';
    }

    .error-container {
      grid-column: 1 / -1;
    }

    .grid-item {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-gap: 16px;

      .label {
        font-size: 32px;
      }
      .card {
        background-color: #fff;
        border-radius: 8px;
        padding: 16px;

        .package-info {
          background-color: #F5F6F4;
          border-radius: 8px;
          padding: 16px;
        }

        &.address {
          a {
            text-decoration: underline;
          }
          & > div:first-child {
            display: grid;
            grid-template-columns: 1fr auto;
            margin-bottom: 8px;
          }
          .address-text {
            white-space: pre-line;
          }
        }
      }
    }

    .button {
      grid-column: 1/-1;
      max-width: 250px;
      width: 100%;
      margin: auto;
    }
  }

  @media screen and (max-width: 860px) {
    .grid {
      grid-template-columns: 1fr;

      .button {
        max-width: initial;
      }
    }
  }
</style>
