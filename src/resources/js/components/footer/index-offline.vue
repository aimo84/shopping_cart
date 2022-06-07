<template>
    <footer>
        <div class="anti-shadow-div">
            <div class="offline-footer shadow-div">
                <a v-show="showLogout && !isLoginPage"
                   @changeShowLogout="showLogout = true"
                   @click="logout()"
                >
                    <img v-bind:src="convertToCdn('/images/icons/offline-logout.png')" class="logout-image"/>
                </a>
                <img v-bind:src="convertToCdn('/images/icons/offline-footer.png')" class="footer-logo-image"/>
                <span class="text-shop-name">{{textShopName}}</span>
            </div>
        </div>
    </footer>
</template>

<script>
  import { clearLocalStorageOffline } from '@utils/common'
  import { convertToCdn } from '@utils/cdn'

  import {
    FETCH_OFFLINE_CHANNEL
  } from '@store/actions.type'

  export default {
    data: () => ({
      url: '',
      showLogout: false,
      isLoginPage: false,
      textShopName: '',
      convertToCdn
    }),
    mounted: function () {
      this.setLogout()
      this.setShopName()

      this.$root.$on('setShowLogout', () => {
        this.setLogout()
      })

      this.$root.$on('setShopName', () => {
        this.setShopName()
      })
    },
    methods: {
      setShopName () {
        let offlineData = localStorage.getItem('vhora-offline-data')
        offlineData = JSON.parse(offlineData) || {}
        const getShopName = offlineData.shopName || { en: '', th: '' }
        this.textShopName = getShopName.th
      },
      async setLogout () {
        this.isLoginPage = global.location.pathname === '/offline-store/berfuntong/login'

        const type = localStorage.getItem('vhora-authen-type')
        if (type !== 'employee' && type !== 'dealer') return

        this.showLogout = true
        let offlineData = localStorage.getItem('vhora-authen-data-' + type)
        offlineData = JSON.parse(offlineData)

        let loginChannel = ''
        if (offlineData) {
          loginChannel = offlineData.channel
          const key = offlineData.key || ''
          this.url = '/api/true/v2/vhora/offline/logout?type=' + type + '&key=' + key
        }
        const allowedChannel = await this.$store.dispatch(FETCH_OFFLINE_CHANNEL)

        if (!allowedChannel.data.includes(loginChannel)) {
          this.url += '&error=020'
          this.logout()
        }
      },
      logout () {
        clearLocalStorageOffline()
        location.replace(this.url)
      }
    }
  }
</script>

<style
    scoped
    lang="scss"
    src="./footer-desktop-offline.scss"
></style>
<style
    scoped
    lang="scss"
    src="./footer-mobile-offline.scss"
></style>
