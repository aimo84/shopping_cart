<template>
  <div class="dr-lucky">
    <div class="zodiac-outer-container">
      <div class="zodiac-container">
        <div class="success-container">
          <div class="inner-container">
            <p class="title-text">{{ successTitle }}</p>
            <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5 55a27.5 27.5 0 100-55 27.5 27.5 0 000 55z" fill="#F9B72D"/>
              <path d="M14.76 29.4l7.22 7.23 18.25-18.26" stroke="#fff" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
            <div v-if="this.txtSuccess == undefined || this.txtSuccess == ''" class="title">กรุณาชำระค่าบริการที่เคาน์เตอร์</div>
            <div v-else>
                <div class="success-title"> {{ this.txtSuccess }}</div>
                <barcode-element class="barcode" v-bind:value="this.barcodeImage" format="CODE128"></barcode-element>
            </div>
            <div class="number-section">
              <div class="number-title">เบอร์โทรศัพท์ที่คุณเลือก</div>
              <div class="number">{{ number }}</div>
            </div>
          </div>
        </div>
        <div class="inner-container" v-if="!lowtier">
          <video-player :url="funtong.ascendant.clipname2"/>
          <div class="zodiac-section">
            <div class="zodiac-content">
              <zodiac-element :funtong="funtong" />
              <div class="description">
                <div class="p">
                  <div v-html="userInfo.userInfo1"></div>
                  <div>{{ userInfo.userInfo2 }}</div>
                </div>
                <div v-html="funtong.ascendant.detail1" />
                <div v-if="showDetail2" v-html="funtong.ascendant.detail2" />
              </div>
            </div>
            <div
                v-if="funtong.ascendant.detail2"
                @click="showDetail2 = !showDetail2"
                class="show-more"
            >
              <template v-if="!showDetail2">ดูเนื้อหาเพิ่มเติม</template>
              <template v-else>ปิดเนื้อหาบางส่วน</template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button-element class="back-home"
                    @click="backHome"
    >กลับไปหน้าแรก</button-element>
  </div>
</template>

<script>
  import VideoPlayer from '@components/video-player.vue'
  import Zodiac from '@components/zodiac'
  import ButtonElement from '@components/button'
  import VueBarcode from 'vue-barcode'

  export default {
    components: {
      'video-player': VideoPlayer,
      'zodiac-element': Zodiac,
      'button-element': ButtonElement,
      'barcode-element': VueBarcode
    },
    props: {
      data: Object,
      funtong: Object,
      lowtier: Boolean,
      posData: Object
    },
    data: () => ({
      showDetail2: false
    }),
    computed: {
      number () {
        return this.data.selected_msisdn.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      },
      dateObj () {
        const date = this.data.birthdate.split('/')
        const year = Number(date[2])
        const month = Number(date[1]) - 1
        const day = Number(date[0])
        return { year, month, day }
      },
      date () {
        const dateObject = this.dateObj
        const date = new Date(dateObject.year, dateObject.month, dateObject.day)
        const result = date.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return result
      },
      userInfo () {
        return {
          userInfo1: `ดวงชะตาของคุณ <span style="font-family: 'TrueBold'">${this.data.firstname} ${this.data.lastname}</span>`,
          userInfo2: `เกิดวันที่ ${this.date} เวลา ${this.data.birthtime} น. มีลัคนาสถิต อยู่ในราศี ${this.funtong.ascendant.zodiac || ''}`
        }
      },
      successTitle () {
        let offlineBundle = localStorage.getItem('offline_bundle')
        return offlineBundle ? 'ซื้อเครื่องพร้อมเบอร์มงคลฟันธง ตามลัคนาราศี' : 'เบอร์มงคลฟันธง ตามลัคนาราศี'
      },
      txtSuccess () {
        const vhoraOfflineShop = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const txtSuccess = vhoraOfflineShop?.config?.txt_success
        return txtSuccess
      },
      showBarcode () {
        const vhoraOfflineShop = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const barcodeConfig = vhoraOfflineShop?.config?.show_barcode_thankyou
        return barcodeConfig
      },
      barcodeImage () {
        const data = this.posData.order_id
        return data
      }
    },
    methods: {
      backHome () {
        let param = localStorage.getItem('authen-type') === 'customer' ? '?shop_code=' + localStorage.getItem('shop-code') : ''
        const vhoraOfflineShop = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        if (vhoraOfflineShop?.is_shop) {
          param = '?shop=' + vhoraOfflineShop.shop
        }
        localStorage.removeItem('authen-type')
        localStorage.removeItem('shop-code')
        location.replace('/offline-store/berfuntong/authentication' + param)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dr-lucky {
    display: grid;
    grid-gap: 16px;
    .title-text {
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 43px;
      color: #374754;
      margin-bottom: 32px;
      margin-top: 10px;
      text-align: center;
    }

    .number-section {
      border: 1px solid #DCDDE0;
      width: 400px;
      margin: auto;
      padding: 10px;
      text-align: center;

      .number {
        color: red;
      }
    }
    button.back-home {
      width: 275px;
      margin: auto;
      margin-bottom: 30px;
      background-color: #616161;
      color: white;
      border-radius: 8px;
    }
  }
  .inner-container {
    max-width: 680px;
    margin: auto;
    display: grid;
    grid-gap: 16px;
  }
  .success-container {
    margin-bottom: 20px;
    svg {
      margin: auto;
    }
    .title {
      font-size: 38px;
      font-family: 'TrueBold';
      color: #424242;
    }
    .subtitle {
      font-size: 24px;
      color: #333;
      max-width: 480px;
      margin: auto;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
    }
    .number-title {
      font-size: 25px;
      font-family: 'TrueBold';
      color: #424242;
    }
    .number {
      font-size: 45px;
      line-height: 30px;
      font-family: 'TrueBold';
      color: #000;
      letter-spacing: 1px;
    }
    .barcode {
      text-align: center
    }
    .success-title {
      font-size: 23px;
      font-family: 'TrueBold';
      color: #424242;
      text-align: center;
    }
  }

  .zodiac-outer-container {
    .zodiac-container {
      padding: 36px 12px;
      background: white;
      max-width: 1000px;
      margin: auto;
      border-radius: 8px;

      .change-date {
        color: red;
        text-align: center;
        cursor: pointer;
        text-decoration: underline;
        font-size: 18px;
      }

      .zodiac-section {
        background: linear-gradient(100.7deg, #EEEFF3 25.91%, #DDE1F0 100%);
        border-radius: 8px;
      }

      .player {
        display: block;
        max-width: 860px;
        margin: auto;
      }
      .title {
        font-family: 'TrueBold';
        color: #424242;
        font-size: 40px;
        text-align: center;
      }
      .zodiac-content {
        min-height: 365px;
        .zodiac {
          float: left;
          margin: 16px;
        }
      }

      .description {
        font-size: 24px;
        color: #333;
        grid-gap: 16px;
        padding: 0 25px;

        .p {
          margin: 1em 0;
        }
      }
      .show-more {
        color: #2F80ED;
        cursor: pointer;
        text-decoration: underline;
        font-size: 18px;
        justify-self: center;
        text-align: center;
      }
    }
  }

  .footer-container {
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    display: grid;
    grid-gap: 16px;
    justify-content: center;

    .link {
      color: #ff0000;
      text-decoration: underline;
      font-size: 18px;
    }

    a {
      text-decoration: none;
    }

    button {
      font-family: 'TrueBold';
      background: #E63129;
      border-radius: 6px;
      height: 50px;
      width: 100%;
      display: grid;
      place-items: center;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 680px) {
    .success-container {
      padding: 24px 16px;
    }
    .zodiac-outer-container {
      .zodiac-container {
        padding: 12px;

        .title {
          font-size: 33px;
        }

        .zodiac-content {

          .zodiac {
            float: none;
            margin: 0 auto;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .dr-lucky {
      .title-text {
        font-size: 27px !important;
      }

      .title {
        font-size: 29px !important;
      }
    }

    .number-section {
      max-width: 228px !important;

      .number-title {
        font-size: 22px !important;
      }

      .number {
        font-size: 38px !important;
      }

      .success-title {
        font-size: 25px;
        font-family: 'True';
        color: #424242;
      }
    }
  }
</style>
