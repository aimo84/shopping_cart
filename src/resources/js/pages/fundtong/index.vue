<template>
    <div class="index-section">
        <loading-element v-if="loading" />
        <template v-else>
            <router-view/>
        </template>
    </div>
</template>

<script>
  import Loading from '@components/loading'
  export default {
    name: 'FundTong',
    components: {
      'loading-element': Loading
    },
    data: () => ({
      loading: false
    }),
    mounted () {
      if (this.$route.query.afc) {
        const afcData = {
          afc: this.$route.query.afc,
          timestamp_expired: Date.now() + 86400000
        }
        localStorage.setItem('truestore-afc', JSON.stringify(afcData))
      }
    }
  }
</script>
