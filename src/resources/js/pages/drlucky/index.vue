<template>
  <div class="drlucky-container">
    <div class="berfuntong-top-banner">
      <!-- top banner will goes here -->
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
  import Loading from '@components/loading';

  export default {
    components: {
      'loading-element': Loading,
    },
    data: () => ({
      loading: true
    }),
    computed: {
      isOffline () {
        return this.$route.path.includes('offline-store')
      }
    },
    watch: {
      '$route.name' () {
        window.scrollTo(0, 0)
      }
    },
    mounted () {
      if (this.$route.query.afc) {
        const afcData = {
          afc: this.$route.query.afc,
          timestamp_expired: Date.now() + 86400000
        }
        localStorage.setItem('truestore-afc', JSON.stringify(afcData))
      }
    },
    methods: {
      trackAnalytics () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event_category: 'lucky_sim',
          event_action: 'switch_luck_feature',
          event_label: 'เบอร์คู่มงคล'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .drlucky-container {
    font-size: 1.5em;
    line-height: 1em;
    padding: 24px;

    .header-container {
      margin: 0 auto;
      margin-bottom: 15px;
      text-align: center;
      max-width: 1100px;
    }

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

  @media screen and (max-width: 860px) {
    .drlucky-container {
      padding: 24px 0;
    }
  }
</style>
