<template>
  <div
    class="container"
    v-if="loaded"
  >
    <verify-element
      :show-ascendant="showAscendant"
      @update-show-ascendant="showAscendant = $event"
      @update-verify="verify = $event"
    />
    <filter-element
      @update-packs="packs = $event; updateNumbers()"
      @update-filters="filters = $event; updateNumbers()"
    />
    <result-element
      @update="updateNumbers($event)"
      @hold-number="holdNumber($event)"
      @update-sort="sort = $event; updateNumbers()"
    />
  </div>
</template>

<script>
import VideoPlayer from '@components/video-player.vue'
import Verify from './verify.vue'
import Filter from './filter.vue'
import Result from './result.vue'
import { POST_VHORA_FUNTONG, FETCH_PACKAGES } from '@store/actions.type'

export default {
  components: {
    'video-player': VideoPlayer,
    'verify-element': Verify,
    'filter-element': Filter,
    'result-element': Result,
  },
  data: () => ({
    loaded: false,
    loading: false,
    showAscendant: false,
    verify: {},
    packs: [],
    filters: {
      number_like: [],
      number_dislike: [],
    },
    refCode: '',
    sort: ''
  }),
  computed: {
    vhoraFuntong() {
      return this.$store.state.vhora.vhoraFuntong
    },
    packages() {
      return this.$store.state.postpaid.packages
    },
    product() {
      return this.packages.data.record[0]
    },
    isOffline() {
      return this.$route.path.includes('offline-store')
    },
  },
  watch: {
    async verify() {
      try {
        await this.updateNumbers()
        this.showAscendant = true
      } catch (e) {}
    },
  },
  async mounted() {
    try {
      await this.updateNumbers()
      this.packs = Object.keys(this.vhoraFuntong.packs)
    } catch (e) {
      console.log('e', e)
    }
  },
  methods: {
    async updateNumbers(page = 1) {
      try {
        const data = {
          ...this.verify,
          ...this.filters,
          packs: this.packs,
          page: page,
          channel: this.$parent.isOffline ? 'offline' : 'online',
          sort: this.sort
        }
        if (
          this.$parent.isOffline &&
          window.localStorage.getItem('vhora-authen-type')
        ) {
          const vhoraAuthen = window.localStorage.getItem(
            'vhora-authen-data-' +
              window.localStorage.getItem('vhora-authen-type')
          )
          const parseVhoraAuthen = JSON.parse(vhoraAuthen || '{}')
          data.alias = parseVhoraAuthen.channel
          const vhoraOfflineData = JSON.parse(localStorage.getItem('vhora-offline-shop'))
          if (vhoraOfflineData?.is_shop && this.$parent?.isOffline) {
            data.shop = vhoraOfflineData?.shop
          }
        }

        await this.$store.dispatch(POST_VHORA_FUNTONG, data)
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        setTimeout(() => {
          this.updateNumbers()
        }, 1000)
      }
    },
    setVhoraZodiacForm(e) {
      window.localStorage.removeItem('vhora-zodiac-form')
      let data = {
        selected_msisdn: e.msisdn.replace(/-/g, ''),
        proposition_amdoc: e.propo_amdoc,
        proposition_code: e.propo_code,
        product_id: `L${this.product.product_id}`,
        inventory_id: this.product.inventory_id,
        store_id: this.product.store_id,
        companyCode: e.company,
        dealerCode: this.vhoraFuntong.dealer_code,
      }
      if (e['bundling']) {
        data.bundling = e.bundling
      }
      window.localStorage.setItem('vhora-zodiac-form', JSON.stringify(data))
    },
    async holdNumber(e) {
      try {
        window.scrollTo(0, 0)
        this.$emit('loading', true)
        const number = e.msisdn.replace(/-/g, '')
        const params = `section=wemall&page=1&sim_type=all&nas_code=${e.propo_code}&all=true`
        await this.$store.dispatch(FETCH_PACKAGES, params)
        if (!this.packages.data.record) throw new Error()
        this.setVhoraZodiacForm(e)
        localStorage.setItem('truestore-berfuntong-zodiac-pack', e.pack)
        localStorage.setItem('truestore-berfuntong-nascode', e.propo_code)
        localStorage.setItem(
          'truestore-berfuntong-zodiac-refcode',
          this.vhoraFuntong.ref_code
        )
        localStorage.setItem('truestore-berfuntong-nascode', e.propo_code)
        this.$router.push({
          name:
            'drlucky-zodiac-verify' +
            (this.$parent.isOffline ? '-offline' : ''),
          params: {
            id: `L${this.product.product_id}`,
            number,
          },
          query: {
            sim_type: this.vhoraFuntong.packs[e.pack].type,
          },
        })
      } catch (e) {
        console.log(e)
        this.$emit('loading', false)
      }
    },
  },
}
</script>

<style lang="scss" src="../../drlucky/home/styles.scss" scoped></style>
<style lang="scss" scoped>
.container .banner {
  max-width: 720px;
  margin: auto;
  padding: 8px 0;

  img {
    width: 100%;
  }
}

@media screen and (max-width: 860px) {
  .container .banner {
    padding: 8px 16px;
  }
}
</style>
