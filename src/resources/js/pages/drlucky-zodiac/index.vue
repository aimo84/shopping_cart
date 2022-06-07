<template>
  <div class="drlucky-container">
    <div class="berfuntong-top-banner">
      <div class="banner" v-if="loaded">
        <img
          :src="urlImage"
          alt="Berfuntong Zodiac"
        />
      </div>
    </div>

    <div class="header-container">
      <div class="title">เบอร์ฟันธง</div>
      <div class="subtitle">โดย อ. ลักษณ์ ราชสีห์ โหรฟันธง</div>
      <div class='divider' />
    </div>
    <loading-element
      v-show="loading"
    />
    <router-view
      @loading="loading = $event"
      v-show="!loading"
    />
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import { POST_VHORA_FUNTONG} from '@store/actions.type'

  export default {
    components: {
      'loading-element': Loading,
    },
    computed: {
      isOffline () {
        return this.$route.path.includes('offline-store')
      },
      vhoraFuntong () {
        return this.$store.state.vhora.vhoraFuntong
      },
    },
    data: () => ({
      loaded: false,
      loading: true,
      urlImage: '',
      shopData: [],
    }),
    async mounted() {
      try {
        await this.imageHelper()
        await this.setImage()
        await this.checkDataVhora()
      } catch (e) {
        console.log('e', e)
      }
    },
    methods: {
        async setImage () {
        this.urlImage = this.vhoraFuntong.dealer_info.config.config.url_image_low_index
      },
      async checkDataVhora () {
        this.shopData = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        if (this.shopData !== null && this.shopData?.config?.url_image_low_index && this.isOffline) {
          this.urlImage = this.shopData?.config?.url_image_low_index
        } else if (this.shopData !== null && !this.shopData?.config?.url_image_low_index && this.isOffline) {
          this.urlImage = this.vhoraFuntong.dealer_info.config.config.url_image_low_index
        }
      },
      async imageHelper () {
        try {
          const data = {
            channel: this.isOffline ? 'offline' : 'online',
          }
            if (
              this.isOffline &&
              window.localStorage.getItem('vhora-authen-type')
            ) {
            const vhoraAuthen = window.localStorage.getItem(
              'vhora-authen-data-' +
                window.localStorage.getItem('vhora-authen-type')
            )
            const parseVhoraAuthen = JSON.parse(vhoraAuthen || '{}')
            data.alias = parseVhoraAuthen.channel
            const vhoraOfflineData = JSON.parse(localStorage.getItem('vhora-offline-shop'))
            if (vhoraOfflineData?.is_shop && this.isOffline) {
              data.shop = vhoraOfflineData?.shop
            }
          }
          await this.$store.dispatch(POST_VHORA_FUNTONG, data)
          this.loaded = true
        } catch (e) {
          setTimeout(() => {
            this.imageHelper()
          }, 1000)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .drlucky-container {
    font-size: 1.5em;
    line-height: 1em;
    padding: 24px;

    .berfuntong-top-banner {
      .banner {
        max-width: 1199px;
        margin: 0 auto 25px auto;

        img {
          width: 100%;
        }
      }
    }

    .header-container {
      margin: 0 auto;
      margin-bottom: 15px;
      text-align: center;
      max-width: 1199px;

      .title {
        font-family: 'TrueBold';
        line-height: 25px;
        color: #000000;
        font-size: 48px;
        margin-bottom: 4px;
      }

      .subtitle {
        font-size: 28px;
        line-height: 36px;
        color: #404040;
      }

      .divider {
        margin: 0 auto;
        width: 300px;
        height: 4px;
        background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .drlucky-container {
      padding: 24px 0;

      .berfuntong-top-banner {
        .banner {
            padding: 8px 16px;
        }
      }
    }
  }
</style>
