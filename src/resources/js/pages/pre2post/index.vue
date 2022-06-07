<template>
  <div class="pre2post-container">
    <template v-if="step">
      <div class="checkout-title">{{ orderProcess[$i18n.locale] }}</div>
      <progress-element
        :step="step"
        :progress-label="progressLabel"
      />
    </template>
    <loading-element
      v-show="loading"
      class="loading-container"
    />
    <router-view
      @loading="loading = $event"
      :data="data"
      v-show="!loading"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Progress from '@components/progress'

  export default {
    components: {
      'loading-element': Loading,
      'progress-element': Progress
    },
    data: () => ({
      loading: true,
      step: -1,
      data: {
        billing_addr: {
          firstname: '',
          lastname: '',
          address1: '',
          address2: '',
          district_id: '1',
          city_id: '1',
          province_id: '1',
          postcode: '10200',
          country_id: '209',
          phone: '',
          email: ''
        },
        listing_loaded: false,
        verify_passed: false,
        verify_failed: false,
        ekyc_passed: false
      }
    }),
    computed: {
      orderProcess () {
        return {
          th: 'รายการสั่งซื้อ',
          en: 'Order Process'
        }
      },
      progressLabel () {
        return [
          {
            th: 'ยืนยันการสั่งซื้อ',
            en: 'Confirm Order'
          },
          {
            th: 'ที่อยู่จัดส่งค่าบริการ',
            en: 'Billing Address'
          },
          {
            th: 'สรุปรายการสั่งซื้อ',
            en: 'Order Summary'
          }
        ]
      }
    },
    watch: {
      '$route.name' (name) {
        this.setProgress(name)
        window.scrollTo(0, 0)
      }
    },
    mounted () {
      this.setProgress(this.$route.name)
    },
    methods: {
      setProgress (name) {
        this.step = [
          'cart',
          'pre2post-address',
          'pre2post-order',
          'pre2post-success'
        ].indexOf(name) + 1
      }
    }
  }
</script>

<style scoped lang="scss">
  .pre2post-container {
    font-size: 1.5em;
  }
  .checkout-title {
    font-size: 50px;
    line-height: 40px;
    margin: 0 0 24px;
    font-family: "TrueMedium";
  }

  @media screen and (max-width: 1000px) {
    .checkout-title {
      padding: 24px 0;
      font-size: 38px;
      line-height: 38px;
      margin-bottom: 0;
    }
  }
</style>
