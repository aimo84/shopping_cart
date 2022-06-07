<template>
  <div class="trueonline-container">
    <template v-if="step">
      <div class="checkout-title">{{ orderProcess[$i18n.locale] }}</div>
      <progress-element :step="step" />
    </template>
    <router-view
      :data="data"
      :loading="loading"
      :lang="lang"
      :token="token"
    />
  </div>
</template>

<script>
  import Progress from '@components/progress'
  import {
    FETCH_TOL_PRODUCT,
    FETCH_TOL_ADDRESS
  } from '@store/actions.type'

  export default {
    components: {
      'progress-element': Progress
    },
    data: () => ({
      loading: true,
      step: 2,
      lang: '',
      orderProcess: {
        th: 'รายการสั่งซื้อ',
        en: 'Order Process'
      },
      token: {
        certificateId: false,
        correlationId: false,
        _identity: false
      },
      data: {
        instl_addr: {
          address1: '',
          firstname: '',
          lastname: '',
          email: '',
          mobilePhone: '',
          birthDate: new Date(),
          installation_time: '_',
          gender: 'M',
          identificationType: 'I',
          points: '1'
        },
        invoice_addr: {
          name: '',
          lastname: '',
          houseNo: '',
          moo: '',
          soi: '',
          streetName: '',
          district_id: '1',
          city_id: '1',
          province_id: '1',
          country_id: '209',
          postcode: '10200',
          city: '',
          province: '',
          district: ''
        },
        billing_addr: {
          name: '',
          lastname: '',
          houseNo: '',
          moo: '',
          soi: '',
          streetName: '',
          district_id: '1',
          city_id: '1',
          province_id: '1',
          country_id: '209',
          postcode: '10200',
          city: '',
          province: '',
          district: ''
        },
        ekyc: {
          upload_picture: '',
          upload_id_card: ''
        },
        result: {},
        copy_invoice_addr: true,
        copy_billing_addr: true,
        address_form_submitted: false,
        order_form_submitted: false
      }
    }),
    computed: {
      tolAddress () {
        return this.$store.state.trueonline.tolAddress
      }
    },
    watch: {
      '$route.name' (name) {
        this.setProgress(name)
        window.scrollTo(0, 0)
      }
    },
    async mounted () {
      this.lang = this.$i18n.locale
      this.setProgress(this.$route.name)
      try {
        this.token = {
          certificateId: localStorage.getItem('tol-certificate-id'),
          correlationId: localStorage.getItem('tol-correlation-id'),
          _identity: localStorage.getItem('tol-identity')
        }
        if (!this.token.certificateId || !this.token.correlationId || !this.token._identity) {
          return new Error('missing-token')
        }
        await Promise.all([
          this.$store.dispatch(FETCH_TOL_PRODUCT, this.$route.params.id),
          this.$store.dispatch(FETCH_TOL_ADDRESS, {
            certificateId: this.token.certificateId,
            correlationId: this.token.correlationId,
            _identity: this.token._identity
          })
        ])
        this.data.instl_addr = { ...this.tolAddress, ...this.data.instl_addr }
        this.loading = false
      } catch (e) {
        localStorage.removeItem('tol-certificate-id')
        localStorage.removeItem('tol-correlation-id')
        localStorage.removeItem('tol-identity')
        this.$router.push('/online-store')
      }
    },
    methods: {
      setProgress (name) {
        this.step = [
          'cart',
          'trueonline-address',
          'trueonline-order',
          'trueonline-success'
        ].indexOf(name) + 1
      },
      updateForm (data) {
        this.data = data
      }
    }
  }
</script>

<style scoped lang="scss">
  .trueonline-container {
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
