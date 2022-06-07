<template>
    <div class="login-section">
        <loading-element v-if="loading" />
        <popup-element ref="popup"/>
        <div v-if="!loading" class="content-section">
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
            <p class="title-text">ล็อกอินงานขายเบอร์ฟันธง</p>
            <div class="image">
                <a v-if="isIE" @click="popUpError()"><img src="/images/icons/login-fundtong.png" /></a>
                <a v-else :href="url+'employee'"><img src="/images/icons/login-fundtong.png" /></a>
                
                <a v-if="isIE" @click="popUpError()"><img src="/images/icons/login-fundtong2.png" /></a>
                <a v-else :href="url+'dealer'"><img src="/images/icons/login-fundtong2.png" /></a>
            </div>
        </div>
    </div>
</template>

<script>
  import Loading from '@components/loading'
  import Popup from './popup'

  import {
    clearLocalStorageOffline,
    checkAgentIE
  } from '@utils/common'

  export default {
    components: {
      'loading-element': Loading,
      'popup-element': Popup
    },
    data: () => ({
      loading: false,
      url: '/api/true/v2/vhora/offline/login?type=',
      cartErrors: [],
      isHaveDataLogin: false
    }),
    computed: {
      isIE () {
        return checkAgentIE()
      }
    },
    mounted () {
      clearLocalStorageOffline()
      this.agentIE()
      const error = this.$route.query.error
      switch (error) {
        case '010':
          this.cartErrors.push({
            th: 'ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง',
            en: 'ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง'
          })
          break
        case '020':
          this.cartErrors.push({
            th: 'คุณไม่มีสิทธิเข้าใช้งานระบบ',
            en: 'คุณไม่มีสิทธิเข้าใช้งานระบบ'
          })
          break
      }
    },
    methods: {
      agentIE () {
        if (this.isIE) {
          this.popUpError()
        }
      },
      popUpError () {
        this.$refs.popup.open()
      },
    }
  }

</script>

<style scoped lang="scss" src="./style.scss"></style>
