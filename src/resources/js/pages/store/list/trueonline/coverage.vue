<template>
  <div>
    <template v-if="page === 'form'">
      <div class="header">
        <div class="title">{{ Locale.coverage.title[$i18n.locale] }}</div>
        <a class="manual" href="/files/checkcoverage_manual.pdf" download>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z" />
          </svg>
          {{ Locale.coverage.manual[$i18n.locale] }}
        </a>
      </div>
      <div class="form search">
        <div class="input">
          <label class="search">
            <span>{{ Locale.coverage.search[$i18n.locale] }}
              <img src="/images/icons/search.svg" width="24px" />
            </span>
          </label>
          <div class="search-input">
            <input
              ref="search"
              class="text-input"
              type="text"
            />
            <img
              src="/images/icons/search.svg"
              @click="setPlace"
            />
          </div>
        </div>
        <div class="input">
          <label>{{ Locale.coverage.address_type[$i18n.locale] }}</label>
          <dropdown-element
            :options="building[$i18n.locale]"
            v-model="data.BUILDING_TYPE"
          />
        </div>
      </div>
      <div
        ref="maps"
        class="maps"
      />
      <form
        v-if="showForm"
        class="form"
        ref="form"
        :invalid="invalidForm"
        @submit.prevent
      >
        <div class="input">
          <label>{{ Locale.coverage.house_no[$i18n.locale] }} <span class="required">*</span></label>
          <input-element v-model="data.HOUSE_NO" required />
        </div>
        <div class="input" v-if="data.BUILDING_TYPE === 'Y'">
          <label>{{ Locale.coverage.room[$i18n.locale] }} <span class="required">*</span></label>
          <input-element v-model="data.ROOM" :required="data.BUILDING_TYPE === 'Y'" />
        </div>
        <div class="input" v-if="data.BUILDING_TYPE === 'Y'">
          <label>{{ Locale.coverage.floor[$i18n.locale] }} <span class="required">*</span></label>
          <input-element v-model="data.FLOOR" :required="data.BUILDING_TYPE === 'Y'" />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.moo[$i18n.locale] }}</label>
          <input-element v-model="data.MOO" />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.street_name[$i18n.locale] }}</label>
          <input-element v-model="form.street_number" />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.soi[$i18n.locale] }}</label>
          <input-element v-model="form.route" />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.province[$i18n.locale] }}</label>
          <input-element v-model="form.province" disabled />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.district[$i18n.locale] }}</label>
          <input-element v-model="form.district" disabled />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.subdistrict[$i18n.locale] }}</label>
          <input-element v-model="form.subdistrict" disabled />
        </div>
        <div class="input">
          <label>{{ Locale.coverage.zipcode[$i18n.locale] }}</label>
          <input-element v-model="form.zipcode" disabled />
        </div>
      </form>
      <div class="button" v-if="showForm">
        <button-element
          @click="submit"
          id="tol-coverage-submit"
        >{{ Locale.coverage.submit[$i18n.locale] }}</button-element>
      </div>
    </template>
    <loading-element v-if="page === 'loading'" />
    <error-element v-if="page === 'error'" :error="error" />
  </div>
</template>

<script>
  import Input from '@components/input'
  import Dropdown from '@components/dropdown'
  import Button from '@components/button'
  import { Loader } from '@googlemaps/js-api-loader'
  import Locale from './locale.json'
  import {
    FETCH_TOL_PRODUCTS
  } from '@store/actions.type'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'dropdown-element': Dropdown,
      'loading-element': () => import('./loading'),
      'error-element': () => import('./error')
    },
    data: () => ({
      Locale,
      googleMapApi: null,
      page: 'form',
      showForm: false,
      form: {
        street_number: '',
        route: '',
        subdistrict: '',
        district: '',
        province: '',
        zipcode: ''
      },
      data: {
        BUILDING_TYPE: 'N',
        HOUSE_NO: '',
        ROOM: '',
        FLOOR: '',
        G_LATITUDE: '',
        G_LONGITUDE: '',
        MOO: ''
      },
      building: {
        en: [
          {
            id: 'N',
            value: 'House'
          },
          {
            id: 'Y',
            value: 'Condo'
          }
        ],
        th: [
          {
            id: 'N',
            value: 'บ้าน'
          },
          {
            id: 'Y',
            value: 'คอนโด'
          }
        ]
      },
      error: {},
      invalidForm: false
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
          }
        }
      },
      tol () {
        return this.$store.state.trueonline.tolProducts
      }
    },
    watch: {
      page (value) {
        if (value === 'form') {
          if (this.data.G_LATITUDE && this.data.G_LONGITUDE) {
            this.mapConfig.center = {
              lat: this.data.G_LATITUDE,
              lng: this.data.G_LONGITUDE
            }
          }
          this.$nextTick(() => this.init())
        }
      }
    },
    async mounted () {
      if (!window.google?.maps) {
        await new Loader({
          apiKey: 'AIzaSyCGJCo7IFGUvkSLhc3zYaFF-E993fyd5uw',
          version: 'weekly',
          language: 'th',
          region: 'TH',
          libraries: ['places']
        }).load()
      }
      if (this.page === 'form') this.init()
    },
    methods: {
      init () {
        this.initializeMap()
        this.initializeMarker()
        this.initializeInfoWindow()
        this.initializeSearch()
        this.addGeoButton()
      },
      initializeMap () {
        const mapContainer = this.$refs.maps
        this.map = new window.google.maps.Map(mapContainer, this.mapConfig)
      },
      initializeInfoWindow () {
        this.infowindow = new window.google.maps.InfoWindow({
          content: '<div class="info-window"></div>'
        })
        this.marker.addListener('click', () => {
          this.infowindow.open(this.map, this.marker)
        })
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
        this.geocodeLatLng(this.marker.position, this.geocoder)
        this.marker.addListener('dragend', (e) => {
          this.showForm = true
          this.geocodeLatLng(e.latLng, this.geocoder)
        })
      },
      addGeoButton () {
        if (!navigator.geolocation || location.protocol !== 'https:') return
        const controlDiv = document.createElement('div')
        this.geoButton = document.createElement('div')
        this.geoButton.className = 'gmaps-geolocation-btn'
        this.geoButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
          </svg>
        `
        controlDiv.appendChild(this.geoButton)
        this.geoButton.addEventListener('click', () => {
          navigator.geolocation.getCurrentPosition((position) => {
            this.searchBox.set('place', {
              name: `${position.coords.latitude},${position.coords.longitude}`
            })
          }, (e) => {
            console.log(e)
          })
        })
        this.map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv)

        // use current inmidiately
        navigator.geolocation.getCurrentPosition((position) => {
          this.searchBox.set('place', {
            name: `${position.coords.latitude},${position.coords.longitude}`
          })
        }, (e) => {
          console.log(e)
        })
      },
      setPlace () {
        this.searchBox.set('place', {
          name: this.$refs.search.value
        })
      },
      initializeSearch () {
        this.searchBox = new window.google.maps.places.Autocomplete(this.$refs.search, {
          componentRestrictions: {
            country: 'th'
          }
        })
        window.google.maps.event.addListener(this.searchBox, 'place_changed', () => {
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
          this.showForm = true
          this.map.setCenter({ lat, lng })
          const latLng = new window.google.maps.LatLng(lat, lng)
          this.marker.setPosition(latLng)
          this.clearForm()
          this.setLocation({ lat, lng })
          this.geocodeLatLng(latLng, this.geocoder)
        })
      },
      clearForm () {
        this.form = {
          moo: '',
          street_name: '',
          soi: '',
          street_number: '',
          route: '',
          subdistrict: '',
          district: '',
          province: '',
          zipcode: ''
        }
        this.data.HOUSE_NO = ''
        this.data.ROOM = ''
        this.data.FLOOR = ''
        this.data.MOO = ''
      },
      geocodeLatLng (l, geocoder) {
        const latlng = {
          lat: l.lat(),
          lng: l.lng()
        }
        geocoder.geocode({ location: latlng }, (results) => {
          this.clearForm()
          if (results[0]) {
            this.setLocation(latlng)
            this.setAddress(results[0])
          }
        })
      },
      setAddress (result) {
        const formatted = result.formatted_address.split(' ')
        const len = formatted.length
        if (len > 4) {
          this.form.subdistrict = formatted[len - 5]
          this.form.district = formatted[len - 4]
          this.form.province = formatted[len - 3]
          this.form.zipcode = formatted[len - 2]
        }
        const label = [
          this.form.street_number,
          this.form.route,
          this.form.subdistrict,
          this.form.district,
          this.form.province,
          this.form.zipcode
        ]
        this.infowindow.setContent(`<div class='info-window'>${label.filter(e => e).join(', ')}</div>`)
        this.infowindow.open(this.map, this.marker)
      },
      setLocation (e) {
        this.data.G_LATITUDE = e.lat
        this.data.G_LONGITUDE = e.lng
      },
      async submit () {
        this.invalidForm = false
        if (!this.$refs.form.reportValidity()) {
          this.invalidForm = true
          return
        }

        let logData = {
          type: 'TOL',
          event: 'TOL check coverage',
          status: 'verify',
          tolAddress: [
            this.data.G_LATITUDE,
            this.data.G_LONGITUDE,
            this.form.street_number,
            this.form.route,
            this.form.subdistrict,
            this.form.district,
            this.form.province,
            this.form.zipcode
          ]
        }

        try {
          this.page = 'loading'
          const form = {
            ...this.data,
            ...{
              STREET: this.form.street_number,
              SOI: this.form.route
            }
          }
          if (form.BUILDING_TYPE === 'N') {
            delete form.ROOM
            delete form.FLOOR
          }

          loggerAddon(logData)
          await this.$store.dispatch(FETCH_TOL_PRODUCTS, form)

          logData.status = 'success'
          loggerAddon(logData)

          localStorage.setItem('tol-certificate-id', this.tol.certificateId)
          localStorage.setItem('tol-correlation-id', this.tol.correlationId)
          localStorage.setItem('tol-identity', this.tol._identity)
          this.$emit('success')
        } catch (e) {
          this.error = e.message
          this.page = 'error'

          logData.status = 'fail'
          loggerAddon(logData)

          localStorage.removeItem('tol-certificate-id')
          localStorage.removeItem('tol-correlation-id')
          localStorage.removeItem('tol-identity')
        }
      }
    }
  }
</script>

<style lang="scss">
  .pac-container {
    z-index: 2401;
  }

  .gm-style-iw {
    .info-window {
      max-width: 280px;
      text-align: center;
    }
  }

  .gmaps-geolocation-btn {
    background-color: #fff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    display: grid;
    place-items: center;
    border-radius: 2px;

    &:hover svg {
      fill: #333333;
    }

    svg {
      fill: #666666;
    }
  }
</style>

<style lang="scss" scoped>
  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 24px;
    margin-right: 32px;
    align-items: center;

    .title {
      font-family: 'TrueBold';
      font-size: 28px;
      line-height: 28px;
    }
    .manual {
      align-items: center;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 4px;
      color: #79c5ec;
      background-color: #fff;
      text-decoration: none;

      svg {
        width: 16px;
      }
    }
  }

  .maps {
    width: 100%;
    min-height: 350px;
    background-color: gray;
    margin: 24px 0;
  }

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

    &.search {
      grid-gap: 8px 16px;
    }

    & > .input {
      display: grid;
      grid-gap: 4px;
      grid-template-rows: 1fr auto;

      label.search {
        display: flex;
        align-items: center;

        img {
          width: 18px;
          vertical-align: middle;
        }
      }

      .search-input {
        position: relative;

        .text-input {
          padding-right: 40px;
        }

        img {
          position: absolute;
          height: 24px;
          right: 8px;
          top: 0;
          bottom: 0;
          margin: auto;
          cursor: pointer;
        }
      }
    }

    .text-input {
      width: 100%;
      height: 40px;
      padding: 0 12px;
      font-size: 15px;
      border: 1px solid #000;
      box-sizing: border-box;
      border-radius: 8px;
    }

    label .required {
      color: #ff0000;
    }

    &[invalid] .input::v-deep input {
      &:invalid:focus,
      &:invalid {
        outline-color: red;
        border-color: red;
      }
    }
  }

  .button {
    text-align: center;
    margin: 36px 0 16px 0;
  }

  @media screen and (max-width: 860px) {
    .header {
      grid-template-columns: 1fr;
      grid-gap: 4px;
      margin-top: 0;
    }
    .form {
      grid-template-columns: 1fr;
    }
  }
</style>
