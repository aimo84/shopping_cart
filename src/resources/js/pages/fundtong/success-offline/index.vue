<template>
  <div class="success-offline">
    <loading-element v-if="loading" />
    <template v-else>
      <div
            class="error-container"
            v-if="cartErrors.length > 0">
        <ul>
          <li
              v-for="(error, key) in cartErrors"
              :key="key"
          >{{ error[$i18n.locale] }}</li>
        </ul>
      </div>
      <drlucky-element
        v-if="fortuneFuntong && cartErrors.length == 0"
        :funtong="fortuneFuntong"
        :data="data"
        :lowtier="fortuneFuntong.lowtier"
        :pos-data="posData"
      />
    </template>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import DrLucky from './drlucky'
  import {
    FETCH_FORTUNE_FUNTONG
  } from '@store/actions.type'

  export default {
    components: {
      'loading-element': Loading,
      'drlucky-element': DrLucky
    },
    data: () => ({
      loading: true,
      data: {},
      fortuneFuntong: false,
      posData: {},
      cartErrors: [],
      errorText: {
        th: 'ระบบขัดข้องในการแสดงผล แต่ท่านได้ทำการจองหมายเลขที่ท่านเลือกสำเร็จ กรุณาติดต่อสาขาที่ท่านได้ทำการจองเบอร์เพื่อรับซิม',
        en: 'ระบบขัดข้องในการแสดงผล แต่ท่านได้ทำการจองหมายเลขที่ท่านเลือกสำเร็จ กรุณาติดต่อสาขาที่ท่านได้ทำการจองเบอร์เพื่อรับซิม'
      }
    }),
    computed: {
    },
    async mounted () {
      const error = this.$route.query.error
      if (error == '001' || error == '002') {
        this.cartErrors.push(this.errorText)
      }

      const code = this.$route.query.success_code
      if (code && this.cartErrors.length == 0) {
        if (localStorage.getItem('vhora-offline-data') && localStorage.getItem('vhora-authen-type')) {
          const vhoraLoginData = JSON.parse(localStorage.getItem('vhora-offline-data'))
          localStorage.setItem('authen-type', localStorage.getItem('vhora-authen-type'))
          localStorage.setItem('shop-code', vhoraLoginData.shopCode)
        }

        this.cleanLocalStorage()
        try {
          await this.$store.dispatch(FETCH_FORTUNE_FUNTONG, { 'secure_key': code })
            .then((res) => {
              this.data = res.data.order
              this.fortuneFuntong = res.data.fortune
              this.posData = res.data.pos
              this.loading = false
            })
            .catch(() => {
              this.cartErrors.push(this.errorText)
              this.loading = false
            })
        } catch {
          this.goBerfuntong()
        }
      } else if (this.cartErrors.length > 0) {
        this.cleanLocalStorage()
        this.loading = false
      } else {
        this.goBerfuntong()
      }
    },
    methods: {
      goBerfuntong () {
        location.replace('/offline-store/berfuntong')
      },
      cleanLocalStorage () {
        window.localStorage.removeItem('truestore-berfuntong-refcode')
        window.localStorage.removeItem('truestore-berfuntong-ctoken')
        window.localStorage.removeItem('truestore-berfuntong-form')
        window.localStorage.removeItem('truestore-berfuntong-vhora-image')

        window.localStorage.removeItem('vhora-form')
        window.localStorage.removeItem('vhora-priceplan')
        window.localStorage.removeItem('vhora-id-data')

        const typeLogin = window.localStorage.getItem('vhora-authen-type')

        if (typeLogin == 'customer') {
          window.localStorage.removeItem('tmvh_store_offline')
          window.localStorage.removeItem('vhora-offline-data')
          window.localStorage.removeItem('vhora-authen-data-customer')
          window.localStorage.removeItem('vhora-authen-type')
          window.localStorage.removeItem('web_view')
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
