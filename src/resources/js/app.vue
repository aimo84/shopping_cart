<template>
  <div class="app">
    <component
      ref="component"
      :is="componentName"
      @loaded="$refs.component.open()"
    />
    <header-element v-if="this.page != 'search-page'" :is="getComponentElement('header')" />
    <topbar-element :is="getComponentElement('topbar')" />
    <timeout-element ref="timeoutDialog" />
    <callback-element/>
    <div class="page" :class="page">
      <router-view :user="user" />
    </div>
    <footer-element :is="getComponentElement('footer')" />
  </div>
</template>

<script>
  import Header from '@components/header/index.vue'
  import Topbar from '@components/mobile-topbar'
  import Footer from '@components/footer/index.vue'
  import HeaderOffline from '@components/header/index-offline.vue'
  import TopbarOffline from '@components/mobile-topbar-offline.vue'
  import FooterOffline from '@components/footer/index-offline.vue'
  import Timeout from '@components/timeout'
  import Callback from '@components/callback'
  import LineButton from '@components/line-button'
  import JwtService from './common/jwt.service'
  import qs from 'qs'
  import 'es6-promise'

  import {
    FETCH_PROFILE,
    LOGIN,
    LOGIN_TOKEN,
    CHECK_NUMBER,
    FETCH_TRUECARD
  } from './store/actions.type'

  import {
    getLocalStorageWithExpire
  } from '@utils/common'

  export default {
    components: {
      'timeout-element': Timeout,
      'callback-element': Callback,
      'line-button-element': LineButton,
      'trueonline-tracking': () => import('@components/trueonline-tracking/index.vue'),
      'header-dropdown-menu' : () => import('@components/header-dropdown-menu/index.vue')
    },
    data: () => ({
      user: null,
      page: '',
      componentName: null
    }),
    watch: {
      $route (to) {
        this.page = to.name
        document.body.className = to.name
        if (this.user !== null) this.pushViewMetadata()
      }
    },
    mounted: function () {
      window.addEventListener('true-login', () => this.getProfile())
      window.addEventListener('true-logout', () => (this.user = false))
      window.addEventListener('login', () => {
        const loginPopupName = `loginPopup-${Date.now()}`
        window.localStorage.setItem('login-popup-name', loginPopupName)
        const loginPopup = window.open(window.url.MIX_LOGIN_URL, loginPopupName, '')
        window.localStorage.removeItem('true-login-code')
        this.loginPopupInterval = setInterval(() => {
          try {
            const code = window.localStorage.getItem('true-login-code')
            if (loginPopup.closed) {
              if (!code) window.dispatchEvent(new Event('true-login-cancelled'))
              clearInterval(this.loginPopupInterval)
            } else {
              if (code) {
                loginPopup.close()
                this.user = null
                this.$store.dispatch(LOGIN, { code })
                  .then(() => this.getProfile())
              }
            }
          } catch (e) {};
        }, 1000)
      })
      window.addEventListener('check-postpaid', () => {
        this.checkPostpaid()
        this.validateDrLucky()
      })
      window.dispatchEvent(new Event('check-postpaid'))
      if (!window.trueLoginLoading) {
        this.getProfile()
      } else {
        this.user = null
      }
      this.setTrueIdSSO()
      this.setLanguage()
    },
    methods: {
      getComponentElement (element) {
        const elementList = {
          online: {
            header: Header,
            topbar: Topbar,
            footer: Footer
          },
          offline: {
            header: HeaderOffline,
            topbar: TopbarOffline,
            footer: FooterOffline
          }
        }

        const locationPathName = global.location.pathname
        const offlineChannel = locationPathName.includes('offline-store')

        if (locationPathName.includes('payment-offline')) return;

        if (offlineChannel) return elementList.offline[element]
        return elementList.online[element]
      },
      openTrueOnlineTracking () {
        this.componentName = 'trueonline-tracking'
        if (this.$refs.component) {
          this.$refs.component.open()
          return
        }
      },
      openMultiMenu () {
        this.componentName = 'header-dropdown-menu' 
        if (this.$refs.component) {
          this.$refs.component.open()
          return
        }
      },
      pushViewMetadata () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'page_view_metadata',
          msisdn: this.user ? btoa(this.user.phone) : '',
          sso_id: this.user ? btoa(JwtService.getTrueUserId()) : 'nologin',
          is_allow_cookie: 'true'
        })
      },
      async getProfile () {
        try {
          const user = await this.$store.dispatch(FETCH_PROFILE)
          if (user.status_code !== 0) throw new Error()
          this.user = user.data
          this.pushViewMetadata()
          await this.$store.dispatch(FETCH_TRUECARD)
        } catch {
          this.user = false
        }
      },
      setTrueIdSSO () {
        window.idAsyncInit = event => {
          window.TID.init({
            clientID: '2331',
            version: 1.1,
            redirect_uri: encodeURIComponent(window.url.MIX_APP_URL)
          })
          window.TID.getstatus(response => {
            if (response.status === 'connected') {
              const accessToken = response.access_token
              if (!JwtService.getToken()) {
                this.user = null
                this.$store
                  .dispatch(LOGIN_TOKEN, accessToken)
                  .then(() => window.dispatchEvent(new Event('true-login')))
              }
            }
          })
        }
      },
      checkPostpaid () {
        const data = {
          'postpaid-data': 'mobile',
          'postpaid-sim-data': 'mobile'
        }
        for (const key in data) {
          const item = localStorage.getItem(key)
          if (item) this.validatePostpaid(item, key, data[key])
        }
      },
      async validatePostpaid (item, type, key) {
        item = JSON.parse(item)
        try {
          const params = qs.stringify(
            { mobiles: item[key] },
            { arrayFormat: 'indices' }
          )
          const result = await this.$store.dispatch(CHECK_NUMBER, params)
          const record = result.record[0]
          if (record && record.hold_expired_date) {
            const current = new Date()
            const expired = new Date(record.hold_expired_date.replace(/-/g, '/'))
            if (current > expired) {
              this.$refs.timeoutDialog.open(item[key], type)
            } else {
              let timer = Math.min(expired.getTime() - current.getTime(), 0x7FFFFFFF)

              setTimeout((e) => {
                this.$refs.timeoutDialog.open(e.number, e.type)
              }, timer, {
                number: item[key],
                type
              })
            }
          }
        } catch {
          this.$refs.timeoutDialog.open(item[key], type)
        }
      },
      validateDrLucky () {
        try {
          const timestamp = window.localStorage.getItem('truestore-berfuntong-timestamp')
          const form = JSON.parse(window.localStorage.getItem('vhora-form'))
          if (!timestamp) return
          const expired = parseInt(timestamp) + 1800000
          if (expired > Date.now()) {
            const timer = expired - Date.now()
            setTimeout((e) => {
              this.$refs.timeoutDialog.open(e.selected_msisdn, 'drlucky')
            }, timer, {
              msisdn: form.selected_msisdn
            })
          } else {
            this.$refs.timeoutDialog.open(form.selected_msisdn, 'drlucky')
          }
        } catch {}
      },
      setLanguage () {
        const params = new URLSearchParams(document.location.search)
        const val = params.get('ln')
        const lang = ['th', 'en'].includes(val) && val
        if (!lang) return
        document.documentElement.lang = lang
        this.$i18n.locale = lang
        window.localStorage.setItem('lang', lang)
      }
    }
  }
</script>

<style lang='scss'>
@import "./styles/styles";
</style>
