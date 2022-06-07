<template>
    <div class="mx-2 mx-lg-5 py-3 row">
        <nav-profile />
        <popup-element ref="popup"/>
        <div class="col-md-9">
            <div class="row">
                <div class="font-bold h2 col-md-12">{{ Content.label.header[$i18n.locale ]}}</div>
                <loading-element class="loading-container" v-if="loading" />
                <div v-if="!loading" class="col-12 bg-white">
                    <div class="row p-2">
                        <div class="col-8 font-bold h4 mb-0">{{ Content.label.title[$i18n.locale ]}}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-12 rounded" v-for="addressData in addressList" :key="addressData.id">
                            <div class="row">
                                <div class="col-md-12 text-left">
                                    <div class="row">
                                        <div class="col-md-1 d-none d-md-block"></div>
                                        <div class="text-blue col-md-2 d-none d-md-block font-bold h5">{{ Content.label.displayName[$i18n.locale ]}}</div>
                                        <div class="row col-md-7 font-bold h5 tag-default-name" :class="addressData.address_default ? 'col-8' : 'col-7'">
                                            {{ addressData.firstname }} {{ addressData.lastname }}
                                            <div v-if="addressData.address_default" class="font-bold rounded bg-true h5 mb-0 text-white tag-width margin-left-icon tag-default-address">ที่อยู่หลัก</div>
                                        </div>
                                        <div class="row col-md-2 justify-content-right" :class="addressData.address_default ? 'col-3' : 'col-5'" >
                                            <div class="text-blue font-bold margin-right-icon" @click="popUpAddress($event, addressData)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M4.09999 10.7999L1.29999 10.8999L1.49999 8.1999L9.29999 0.399902L11.9 2.9999L4.09999 10.7999Z" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M1.5 8.19991L4.1 10.7999" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7.79999 1.8999L10.4 4.4999" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.7 12.2999H1" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                {{ Content.label.edit[$i18n.locale ] }}
                                            </div>
                                            <div v-if="!addressData.address_default" class="text-blue font-bold" @click="deleteUserAddress($event, addressData.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M0.344971 3.27681C0.344971 2.50072 1.03483 1.81087 1.81091 1.81087H10.0892C10.8653 1.81087 11.5551 2.50072 11.5551 3.27681" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.10584 1.81087H3.27686C3.27686 1.03478 3.96671 0.344925 4.7428 0.344925H6.72613C7.50222 0.344925 8.10584 0.948548 8.10584 1.81087Z" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M10.0892 2.75941V11.5551H1.81091V2.75941" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M3.70801 4.22536V10.0891" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.20874 4.22536V10.0891" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.62323 4.22536V10.0891" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                {{ Content.label.delete[$i18n.locale ] }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1 d-none d-md-block"></div>
                                        <div class="text-blue col-md-2 d-none d-md-block font-bold h5">{{ Content.label.phone[$i18n.locale ] }}</div>
                                        <div class="text-blue col-7 col-md-7 font-medium h5">{{ addressData.phone }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1 d-none d-md-block"></div>
                                        <div class="text-blue col-md-2 d-none d-md-block font-bold h5">{{ Content.label.address[$i18n.locale ] }}</div>
                                        <div class="text-blue col-7 col-md-7 font-medium h5">{{ addressData.address_1 }} {{ addressData.address_2 }} {{ addressData.district }}    {{ addressData.city }} {{ addressData.province }} {{ addressData.postcode }}</div>
                                        <div class="row col-5 col-md-2 justify-content-right" @click="addressData.address_default ? 'disabled' : setDefaultUserAddress($event, addressData.id)">
                                            <div class="grid place-items-center border border-gray rounded-full w-[20px] h-[20px] margin-right-icon"
                                            :class="{'bg-red-500 border-red-500': addressData.address_default }">
                                                <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                        :fill="`${addressData.address_default ? '#FFF' : '#E0E0E0'}`"
                                                    />
                                                </svg>
                                            </div>
                                            <div class="text-blue font-bold">{{ Content.label.default[$i18n.locale ] }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pass-through-line margin-bottom-20"></div>
                        </div>
                    </div>
                    <div class="row justify-content-right">
                        <button-element
                            class="btn-lg border border-danger rounded-pill bg-white create-address-button margin-right-20"
                            type="button"
                            @click="popUpAddress($event)"
                        >{{ Content.label.create[$i18n.locale ] }}</button-element>
                    </div>
                </div>
            </div>
        </div v-iv->
    </div>
</template>

<script>
  import NavProfile from './../nav'
  import Popup from './popup'
  import Content from './content.json'
  import Button from '@components/button'
  import Loading from '@components/loading'

  import {
    SET_DEFAULT_USER_ADDRESS,
    DELETE_USER_ADDRESS,
    GET_USER_ADDRESS
  } from '@store/actions.type'

  export default {
    components: {
      'nav-profile': NavProfile,
      'popup-element': Popup,
      'button-element': Button,
      'loading-element': Loading
    },
    data: () => ({
      addressList: [],
      Content,
      loading: true
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      }
    },
    watch: {
      user () {
        this.getUserAddress()
      }
    },
    async mounted () {
      this.getUserAddress()
    },
    methods: {
      getUserAddress () {
        if (this.user) {
          this.loading = true
          this.$store.dispatch(GET_USER_ADDRESS, { user_id: this.user?.user_id }).then(data => {
            this.addressList = data?.data?.record
          }).catch(e => {
          }).finally(data => {
            this.loading = false
          })
        }
      },
      popUpAddress (event, editData = {}) {
        this.$refs.popup.open(editData)
      },
      deleteUserAddress (event, id) {
        if (this.user) {
          this.loading = true
          this.$store.dispatch(DELETE_USER_ADDRESS, { user_id: this.user?.user_id, address_id: id }).then(data => {
            window.location.reload()
          }).catch(e => {
          }).finally(data => {
            this.loading = false
          })
        }
      },
      setDefaultUserAddress (event, id) {
        if (this.user) {
          this.loading = true
          this.$store.dispatch(SET_DEFAULT_USER_ADDRESS, { user_id: this.user?.user_id, address_id: id }).then(data => {
            window.location.reload()
          }).catch(e => {
          }).finally(data => {
            this.loading = false
          })
        }
      }
    }
  }
</script>
