<template>
  <div>
    <template>
      <div class="header">
        <div class="title">{{ Content.pickup.title[$i18n.locale] }}</div>
        <Button v-show="page === 'pickup'" @click="setCurrentPos">
          {{ Content.pickup.search[$i18n.locale] }}
        </Button>
      </div>

      <div v-show="mapStatus" id="set-store" class="set-store">
        <div class="set-store-inner-wrap">
          <div class="closebtn"><span @click="hideStoreList">×</span></div>
          <hr />
          <div v-if="neabyStatus === 'ready'" class="store-list-wrap">
            <div
              v-for="store in sevenStore"
              v-bind:key="store.storeCode"
              class="store-list-card"
            >
              <div class="store-list" @click="selectStore(store)">
                <div class="store-detail">
                  <b>7-ELEVEN เลขสาขาที่ {{ store.storeCode }}</b
                  ><br />
                  {{ store.locationName + ' ' + store.zipCode }}
                </div>
                <div class="store-sub-details">
                  <div>
                    ห่างจากคุณ
                    <div class="store-distance">
                      {{ (store.distance / 1000).toFixed(2) }} km
                    </div>
                  </div>
                  <div class="store-sub-detail-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="26"
                      viewBox="0 0 21 37"
                      fill="none"
                    >
                      <path
                        d="M1.33459 35.8656C1.86792 36.3989 2.73277 36.3989 3.26606 35.8656L19.6661 19.4656C20.1994 18.9322 20.1994 18.0674 19.6661 17.5341L3.26606 1.1341C2.72953 0.615206 1.87751 0.6232 1.35058 1.15012C0.82365 1.67703 0.815655 2.52907 1.33457 3.0656L16.7674 18.5L1.33457 33.9345C0.801238 34.4678 0.801238 35.3327 1.33457 35.866L1.33459 35.8656Z"
                        fill="#BEBEBE"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <loading-element v-if="neabyStatus === 'loading'" />
      </div>
      <div v-show="mapStatus" id="set-store-m" class="set-store-m">
        <div class="close-btn-m"><div @click="hideStoreList"></div></div>
        <hr />
        <div v-if="neabyStatus === 'ready'" class="store-list-wrap">
          <div
            v-for="store in sevenStore"
            v-bind:key="store.storeCode"
            class="store-list-card"
          >
            <div class="store-list" @click="selectStore(store)">
              <div class="store-detail">
                <b>7-ELEVEN เลขสาขาที่ {{ store.storeCode }}</b
                ><br />
                {{ store.locationName + ' ' + store.zipCode }}
              </div>
              <div class="store-sub-details">
                <div>
                  ห่างจากคุณ
                  <div class="store-distance">
                    {{ (store.distance / 1000).toFixed(2) }} km
                  </div>
                </div>
                <div class="store-sub-detail-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="26"
                    viewBox="0 0 21 37"
                    fill="none"
                  >
                    <path
                      d="M1.33459 35.8656C1.86792 36.3989 2.73277 36.3989 3.26606 35.8656L19.6661 19.4656C20.1994 18.9322 20.1994 18.0674 19.6661 17.5341L3.26606 1.1341C2.72953 0.615206 1.87751 0.6232 1.35058 1.15012C0.82365 1.67703 0.815655 2.52907 1.33457 3.0656L16.7674 18.5L1.33457 33.9345C0.801238 34.4678 0.801238 35.3327 1.33457 35.866L1.33459 35.8656Z"
                      fill="#BEBEBE"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <loading-element v-if="neabyStatus === 'loading'" />
      </div>

      <div id="auto-place" class="input auto-place">
        <div class="search-input">
          <div>
            <img
              class="search-icon"
              src="/images/icons/search.svg"
              @click="setPlace"
            />
          </div>
          <div class="place-search-input">
            <input
              ref="search"
              class="text-input"
              type="text"
              placeholder="ค้นหาจาก จังหวัด /เขต /อำเภอ"
            />
          </div>
        </div>
      </div>

      <div v-show="page === 'pickup'" ref="maps" class="maps" />
    </template>
    <div v-show="page === 'form'">
      <div class="form-wrap">
        <div class="error-container" v-if="errors.length > 0">
          <ul>
            <li v-for="(error, key) in errors" :key="key">
              {{ error[$i18n.locale] }}
            </li>
          </ul>
        </div>
        <form
          ref="customerDetailForm"
          :class="invalidDeliveryForm ? 'invalid' : undefined"
        >
          <form-element
            v-if="mapStatus"
            class="form-container customer-detail-form"
            :data="customerDetail"
            :form="Content.customerDetail"
          />
        </form>
        <div>{{ Content.pickup.selectstore[$i18n.locale] }} :</div>
        <div>
          {{ selectedStore.storeCode }} 7Eleven สาขา
          {{ selectedStore.storeName }} {{ selectedStore.tamName }}
          {{ selectedStore.ampName }} {{ selectedStore.provName }}
          {{ selectedStore.zipCode }}
        </div>
        <div class="flex-center">
          <button class="next-button" @click="submitForm">
            {{ Content.pickup.next[$i18n.locale] }}
          </button>
        </div>
        <div class="flex-center">
          <button class="back-button" @click="backToSelectStore">
            {{ Content.pickup.back[$i18n.locale] }}
          </button>
        </div>
      </div>
    </div>
    <div v-show="page === 'loading'">
      <loading-element />
    </div>
  </div>
</template>

<script>
  import Form from '@components/form'
  import { Loader } from '@googlemaps/js-api-loader'
  import Loading from '@components/loading'
  import Content from './content.json'
  import { FETCH_NEAR_ME_SEVEN_STORE, FETCH_ADDRESS } from '@store/actions.type'

  export default {
    components: {
      'form-element': Form,
      'loading-element': Loading
    },
    props: {
      cart: [Object]
    },
    data: () => ({
      errors: [],
      Content,
      googleMapApi: null,
      selectedStore: {},
      page: 'pickup',
      neabyStatus: 'ready',
      data: {
        G_LATITUDE: '',
        G_LONGITUDE: ''
      },
      sevenStore: [],
      customerDetail: {},
      invalidDeliveryForm: false,
      mapStatus: false
    }),
    computed: {
      mapConfig () {
        return {
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoom: 16,
          center: {
            lat: 13.685581,
            lng: 100.6113077
          },
          disableDefaultUI: true
        }
      }
    },
    async mounted () {
      if (!this.cart || Object.keys(this.cart).length < 1) {
        this.$router.push('/cart')
        return
      } else if (
        !this.$store.state.cart.cart.data.record[0].store.shipping_method.PICKUP
      ) {
        this.$router.push('/address')
        return
      }
      if (!window.google?.maps) {
        await new Loader({
          apiKey: 'AIzaSyCGJCo7IFGUvkSLhc3zYaFF-E993fyd5uw',
          version: 'weekly',
          language: 'th',
          region: 'TH',
          libraries: ['places']
        }).load()
      }
      await this.init()
      const address = window.localStorage.getItem('address')
      if (address) {
        const parsedAdd = JSON.parse(address)
        this.customerDetail.firstname = parsedAdd.delivery_address.firstname
        this.customerDetail.lastname = parsedAdd.delivery_address.lastname
        this.customerDetail.phone = parsedAdd.delivery_address.phone
        this.customerDetail.email = parsedAdd.delivery_address.email
      }
      this.mapStatus = true
    },
    methods: {
      init () {
        this.initializeMap()
        this.initializeMarker()
        this.initializeInfoWindow()
        this.initializeSearch()
      },
      async initializeMap () {
        const mapContainer = this.$refs.maps
        this.map = new window.google.maps.Map(mapContainer, this.mapConfig)
        const autoPlace = document.getElementById('auto-place')
        this.map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
          autoPlace
        )
        this.map.setClickableIcons(false)
        this.map.addListener('click', e => {
          this.marker.setPosition(e.latLng)
          this.geocodeLatLng(e.latLng, this.geocoder)
        })
        const setStore = document.getElementById('set-store')
        const setStoreM = document.getElementById('set-store-m')
        this.map.controls[window.google.maps.ControlPosition.RIGHT_CENTER].push(
          setStore
        )
        this.map.controls[window.google.maps.ControlPosition.BOTTOM_CENTER].push(
          setStoreM
        )
      },
      initializeInfoWindow () {
        var vm = this
        this.infowindow = new window.google.maps.InfoWindow({
          content: `<div class="info-window-content" onclick="submitStore()">${
            this.Content.pickup.select[this.$i18n.locale]
          }</div>`
        })
        window.submitStore = function () {
          vm.submitStore()
        }
      },
      submitStore () {
        this.page = 'form'
        window.scrollTo(0, 0)
      },
      backToSelectStore () {
        this.page = 'pickup'
        window.scrollTo(0, 0)
      },
      initializeMarker () {
        this.geocoder = new window.google.maps.Geocoder()
        this.marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
            this.mapConfig.center.lat,
            this.mapConfig.center.lng
          ),
          map: this.map,
          draggable: true
        })
        this.marker.addListener('dragend', e => {
          this.geocodeLatLng(e.latLng, this.geocoder)
        })
        this.marker.addListener('dragstart', e => {
          this.infowindow.close()
          this.marker.setIcon('')
        })
      },
      setPlace () {
        this.searchBox.set('place', {
          name: this.$refs.search.value
        })
      },
      hideStoreList () {
        document.getElementById('set-store').style.marginRight = '-50%'
        document.getElementById('set-store-m').style.height = '0px'
      },
      showStoreList () {
        document.getElementById('set-store').style.marginRight = '0px'
        document.getElementById('set-store-m').style.height = '50%'
        document.getElementById('set-store').style.width = '50%'
      },
      setCurrentPos () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            const latLng = new window.google.maps.LatLng(pos.lat, pos.lng)
            this.marker.setPosition(latLng)
            this.geocodeLatLng(latLng, this.geocoder)
          })
        } else {
          console.log('ใช้ GPS ไม่ได้')
        }
      },
      validateEmail (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      submitForm () {
        this.errors = []
        const customerDetailForm = this.$refs.customerDetailForm.checkValidity()
        const validDeliverEmail = this.validateEmail(this.customerDetail.email)
        if (customerDetailForm && validDeliverEmail) {
          this.page = 'loading'
          this.fetchProvince().then(result => {
            const provId = result.find(
              prov => prov.name === this.selectedStore.provName
            ).id
            this.selectedStore.provId = provId
            this.fetchCity(provId).then(result => {
              const cityId = result.find(
                city => city.name === this.selectedStore.ampName
              ).id
              this.selectedStore.ampId = cityId
              this.fetchDistrict(cityId).then(result => {
                const districtId = result.find(
                  district => district.name === this.selectedStore.tamName
                ).id
                this.selectedStore.tamId = districtId
                window.localStorage.setItem(
                  'address',
                  JSON.stringify(this.getFormattedAddressData())
                )
                this.$router.push('/payment')
              })
            })
          })
        } else {
          window.scrollTo(0, 0)
          this.errors = [
            {
              th:
                'มีปัญหาการชำระเงินจากการใส่ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูลอีกครั้ง',
              en:
                'One or more fields contain have an error. Please check and try again.'
            }
          ]
          this.invalidDeliveryForm = true
        }
      },
      getFormattedAddressData () {
        const formattedAddress = {
          address1: `${this.selectedStore.storeCode} 7-ELEVEN สาขา ${this.selectedStore.storeName}`,
          address2: '',
          city: this.selectedStore.ampName,
          city_id: this.selectedStore.ampId,
          country_id: '209',
          district: this.selectedStore.tamName,
          district_id: this.selectedStore.tamId,
          email: this.customerDetail.email,
          firstname: this.customerDetail.firstname,
          lastname: this.customerDetail.lastname,
          phone: this.customerDetail.phone,
          postcode: this.selectedStore.zipCode,
          province: this.selectedStore.provName,
          province_id: this.selectedStore.provId
        }

        var storeAddress = this.selectedStore
        storeAddress.address1 = `${this.selectedStore.storeCode} 7Eleven สาขา ${this.selectedStore.storeName}`
        storeAddress.address2 = `${this.selectedStore.tamName} ${this.selectedStore.ampId} ${this.selectedStore.provName} ${this.selectedStore.zipCode}`

        const address = {
          billing_address: formattedAddress,
          delivery_address: formattedAddress,
          sevenstore_address: storeAddress
        }
        return address
      },
      fetchProvince (id) {
        return this.fetchAddress('province', 'province_id', {
          country_id: '209'
        })
      },
      fetchCity (id) {
        return this.fetchAddress('city', 'city_id', {
          province_id: id
        })
      },
      fetchDistrict (id) {
        return this.fetchAddress('district', 'district_id', {
          city_id: id
        })
      },
      fetchAddress (type, id, payload) {
        payload.language = 'th'
        const params = Object.keys(payload)
          .map(item => {
            return `${item}=${payload[item]}`
          })
          .join('&')
        return this.$store
          .dispatch(FETCH_ADDRESS, {
            type,
            params
          })
          .then(data => {
            return data
          })
      },
      selectStore (store) {
        const latLng = new window.google.maps.LatLng(
          store.latitude,
          store.longitude
        )
        this.marker.setPosition(latLng)
        this.geocodeLatLng(latLng, this.geocoder, false)
        this.marker.setIcon('/images/icons/seven-eleven.svg')
        this.infowindow.open(this.map, this.marker)
        this.hideStoreList()
        this.selectedStore = store
      },
      initializeSearch () {
        this.searchBox = new window.google.maps.places.Autocomplete(
          this.$refs.search,
          {
            componentRestrictions: {
              country: 'th'
            }
          }
        )
        window.google.maps.event.addListener(
          this.searchBox,
          'place_changed',
          () => {
            let lat, lng
            const place = this.searchBox.getPlace()
            if (place.geometry) {
              lat = place.geometry.location.lat()
              lng = place.geometry.location.lng()
            } else {
              const regex = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/
              const isLatLng = regex.test(place.name)
              if (!isLatLng) return
              const latlng = place.name.split(',')
              lat = parseFloat(latlng[0])
              lng = parseFloat(latlng[1])
            }
            this.map.setCenter({ lat, lng })
            const latLng = new window.google.maps.LatLng(lat, lng)
            this.marker.setPosition(latLng)
            this.setLocation({ lat, lng })
            this.geocodeLatLng(latLng, this.geocoder)
          }
        )
      },
      geocodeLatLng (l, geocoder, fetchData = true) {
        this.marker.setIcon('')
        if (this.infowindow) {
          this.infowindow.close()
        }
        const latlng = {
          lat: l.lat(),
          lng: l.lng()
        }
        geocoder.geocode({ location: latlng }, results => {
          if (results[0]) {
            this.setLocation(latlng)
          }
        })
        this.map.panTo(latlng)

        fetchData && this.fetchSevenStore(latlng)
        this.showStoreList()
      },
      fetchSevenStore (latlng) {
        this.neabyStatus = 'loading'
        const payload = `lat=${latlng.lat}&lng=${latlng.lng}`
        return this.$store
          .dispatch(FETCH_NEAR_ME_SEVEN_STORE, {
            payload
          })
          .then(data => {
            this.sevenStore = this.$store.state.sevenStore.sevenStore
          })
          .then(() => {
            this.neabyStatus = 'ready'
          })
      },
      setLocation (e) {
        this.data.G_LATITUDE = e.lat
        this.data.G_LONGITUDE = e.lng
      }
    }
  }
</script>

<style lang="scss">
@media only screen and (max-width: 1000px) {
  .checkout-title {
    display: none !important;
  }
}

.info-window-content {
  cursor: pointer;
  color: white;
  font-family: 'TrueBold';
  font-size: 20px;
  margin-top: -7px;
}

.gm-style {
  font: 400 11px 'TrueMedium';
  .gm-style-iw-c {
    background: red !important;
    padding: 12px 17px 20px 17px !important;
    height: 30px;
    border-radius: 20px;
  }
  .gm-style-iw-t::after {
    background: red !important;
  }
}

.gm-style-iw {
  .info-window {
    text-align: center;
  }
  button {
    display: none !important;
  }
  .gm-style-iw-d {
    overflow: visible !important;
  }
}

form.invalid {
  .input_container {
    .input input:invalid,
    .input input[invalid],
    select[invalid] {
      border-color: red;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .page {
    padding: 0px;
  }
}
</style>

<style scoped lang="scss" src="./style.scss"></style>
