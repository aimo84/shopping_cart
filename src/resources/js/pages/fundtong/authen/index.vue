<template>
    <div class="authen-section" id="app">
        <loading-element v-if="loading" />
        <div v-if="!loading" class="content-section">
            <div class="title">
                <p class="title-text">กรุณาเลือกช็อปหรือเคาน์เตอร์</p>
            </div>
            <div class="div-select-branch">
                <span style="float: left">รายชื่อร้านค้าหรือเคาน์เตอร์</span><br>
                <dropdown-element
                    id="dropdownBranch"
                    :options="getbranchLists"
                    v-model="branchLists"
                    class="dropdown dropdown-vhora-authen" />
            </div>
            <div class="div-generate-qr top20">
                <button-element
                    class="red-bg-button"
                    id="btn-generate-qr"
                    @click="generateQR"
                    :disabled="!selectedBranch"
                >ยืนยันข้อมูล</button-element>
            </div>
            <div class="div-qr top20">
                <vue-qrious v-if="showQr" v-bind:value="qrValue" :size="200" />
            </div>
            <div class="div-next top20" v-if="showQr">
                <button-element
                    class="red-bg-button"
                    id="btn-next"
                    @click="goNext"
                    :disabled="selectedBranch"
                >ทำรายการ</button-element>
            </div>
        </div>
    </div>
</template>

<script>
  import Loading from '@components/loading'
  import Dropdown from '@components/dropdown'
  import Button from '@components/button'
  import vueQrious from 'vue-qrious'

  import {
    FETCH_OFFLINE_AUTHENTICATION,
    FETCH_OFFLINE_DEALER_INFO
  } from '@store/actions.type'

  import {
    clearLocalStorageOffline,
    setLocalStorageWithExpire
  } from '@utils/common'

  export default {
    components: {
      'loading-element': Loading,
      'dropdown-element': Dropdown,
      'button-element': Button,
      vueQrious
    },
    data: () => ({
      loading: true,
      branchData: [],
      branchLists: 'default',
      qrValue: 'before',
      selectedBranch: false,
      showQr: false
    }),
    computed: {
      getbranchLists () {
        return this.branchData.map(item => ({
          id: item.code,
          value: item.code === 'default' ? item.name.th : item.code
        }))
      }
    },
    watch: {
      branchLists () {
        if (this.branchLists !== 'default') {
          this.selectedBranch = true
          this.showQr = false
        } else {
          this.selectedBranch = false
          this.showQr = false

          let offlineData = localStorage.getItem('vhora-offline-data')
          offlineData = JSON.parse(offlineData)

          offlineData.shopCode = ''
          offlineData.shopName = { en: '', th: '' }

          localStorage.setItem('vhora-offline-data', JSON.stringify(offlineData))

          this.$root.$emit('setShopName')
        }
      }
    },
    async mounted () {
      localStorage.setItem('tmvh_store_offline', true)
      setLocalStorageWithExpire('web_view', true, 1000 * 60 * 60 * 3)
      await this.fetchOfflineData()
      this.loading = false
    },
    methods: {
      async fetchOfflineData () {
        try {
          const type = this.$route.query.type || localStorage.getItem('vhora-authen-type') || 'customer'
          localStorage.setItem('vhora-authen-type', type)

          let authenData = localStorage.getItem('vhora-authen-data-' + type)
          authenData = JSON.parse(authenData)

          if (!authenData || type === 'customer') {
            const fetchDataOfflineAuthen = await this.$store.dispatch(FETCH_OFFLINE_AUTHENTICATION, this.$route.query)
            authenData = fetchDataOfflineAuthen.data
            localStorage.setItem('vhora-authen-data-' + type, JSON.stringify(authenData))
            if (authenData?.shop?.vhora_offline_shop && authenData?.shop?.vhora_offline_shop?.is_shop) {
              localStorage.setItem('vhora-offline-shop', JSON.stringify(authenData?.shop?.vhora_offline_shop))
            } else {
              localStorage.removeItem('vhora-offline-shop')
            }
          }

          if (authenData.type === 'employee' || authenData.type === 'dealer') {
            this.$root.$emit('setShowLogout')

            const defaultBranch = [{
              code: 'default',
              name: {
                th: '------ กรุณาเลือกสาขา ------',
                en: '------ Please select branch ------'
              }
            }]

            this.branchData = [...defaultBranch, ...authenData.shop]
            const offlineData = {
              type: authenData.type,
              saleCode: authenData.sale_code,
              saleName: authenData.sale_name
            }
            localStorage.setItem('vhora-offline-data', JSON.stringify(offlineData))
          } else {
            const offlineData = {
              type: authenData.type,
              shopCode: authenData.shop.code,
              shopName: authenData.shop.name
            }
            localStorage.setItem('vhora-offline-data', JSON.stringify(offlineData))
            this.goNext()
          }
        } catch (e) {
          clearLocalStorageOffline()
          location.replace('/offline-store/berfuntong/login')
        }
      },
      async generateQR () {
        this.loading = true
        let fetchDataDealerInfo = await this.$store.dispatch(FETCH_OFFLINE_DEALER_INFO, { sale_code: this.branchLists })
        fetchDataDealerInfo = fetchDataDealerInfo.data || {}

        let offlineData = localStorage.getItem('vhora-offline-data')
        offlineData = JSON.parse(offlineData)

        const getShopData = fetchDataDealerInfo.shop || {}
        const getShopName = getShopData.name || { en: '', th: '' }

        offlineData.shopCode = getShopData.code || ''
        offlineData.shopName = getShopName

        localStorage.setItem('vhora-offline-data', JSON.stringify(offlineData))
        this.$root.$emit('setShopName')

        this.qrValue = window.location.origin + window.location.pathname + '?shop_code=' + this.branchLists
        this.selectedBranch = false
        this.showQr = true

        this.loading = false
      },
      goNext () {
        const vhoraOfflineShop = JSON.parse(localStorage.getItem('vhora-offline-shop'))
        const url = vhoraOfflineShop?.config?.default_tab === 'low' ? '/offline-store/berfuntong-zodiac' : '/offline-store/berfuntong'
        location.replace(url)
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
