<template>
    <div class="pt-8">
      <div class="qr-container">
          <div class="title">{{ Locale.payment.title[$i18n.locale] }}</div>
          <div class="subtitle">{{ Locale.payment.subtitle[$i18n.locale] }}<img :src="'/images/icons/truemoney_paysmooth.png'"></div>
          <qr-element :id="'qrcode'" :level="'L'" :value="deepLink" :size="250" :render-as="'canvas'">
          </qr-element>
          <div class="save-qr" href="#" @click="downloadQRcode"><img :src="'/images/icons/download_paysmooth.png'">{{ Locale.payment.save[$i18n.locale] }}</div>
          <div class="contact">{{ Locale.payment.contact[$i18n.locale] }}</div>
      </div>
    </div>
</template>

<script>
  import {
  } from '@utils/common'
  import QrcodeVue from 'qrcode.vue'
  import Locale from './content.json'
  export default {
    components: {
      'qr-element': QrcodeVue
    },
    data: () => ({
      Locale
    }),
    computed: {
      isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      },
      deepLink () {
        const url = this.$route.query['deep-link'].split('ascendmoney')
        return url[0] + 'ascendmoney' + encodeURIComponent(url[1])
      }
    },
    async mounted () {
      localStorage.removeItem('cart-id')
      localStorage.removeItem('paysmooth-data')
      localStorage.removeItem('cart-length')
      if (this.isMobile) {
        window.location.href = this.deepLink
      }
    },
    methods: {
      downloadQRcode () {
        const canvas = document.getElementById('qrcode').getElementsByTagName('canvas')[0]
        var image = canvas.toDataURL()
        var aDownloadLink = document.createElement('a')
        aDownloadLink.download = 'paysmooth_truemoney_payment.png'
        aDownloadLink.href = image
        aDownloadLink.click()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qr-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 32px;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: auto;
    display: grid;
    grid-gap: 16px;
    .title {
      font-family: 'TrueBold';
    }
    .subtitle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .save-qr {
      font-size: 24px;
      color: #1EACD9;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'TrueBold';
      cursor: pointer;
      text-decoration: underline;
      img {
        width: 19px;
        height: 19px;
      }
    }
    .contact {
      color: #ea3223;
      font-size: 20px;
    }
  }
    @media screen and (max-width: 1000px) {
    .pt-8 {
      padding-top: 16px;
    }
  }

  @media screen and (max-width: 500px) {
    .qr-container {
      width: 100% !important;
      margin: 0px !important;
      padding: 30px 5px !important;
    }
  }
</style>
