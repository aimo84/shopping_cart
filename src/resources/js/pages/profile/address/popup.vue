<template>
    <dialog-element
        ref="addressDialog"
    >
        <div slot="content">
            <div class="px-0 d-md-none margin-bottom-20" role="button" @click="$router.push('/profile/address')">
                <img src="/images/icons/icon-left.png" style="width: 30px;">
                <span v-if="isCreate" class="mb-0 font-bold">{{ Content.label.createTitle[$i18n.locale] }}</span>
                <span v-if="!isCreate" class="mb-0 font-bold">{{ Content.label.editTitle[$i18n.locale] }}</span>
            </div>
            <div class="px-0 d-none d-md-block margin-bottom-20">
                <span v-if="isCreate" class="h4 mb-0"> {{ Content.label.createTitle[$i18n.locale] }}</span>
                <span v-if="!isCreate" class="h4 mb-0"> {{ Content.label.editTitle[$i18n.locale] }}</span>
            </div>
            <form ref="addressForm">
                <form-element
                    class="form-container address-form row"
                    :data="address"
                    :form="Content.address"
                />
            </form>
            <div class="row col-12 col-md-12 no-padding-right">
                <div class="col-6 col-md-6 text-center">
                    <button-element
                        class="btn-lg border border-danger rounded-pill bg-white create-address-button"
                        @click="closePopup"
                    >
                        {{ Content.label.cancelButton[$i18n.locale] }}
                    </button-element>
                </div>
                <div class="col-6 col-md-6 text-center">
                    <button-element
                        class="btn-lg border border-danger rounded-pill bg-true create-address-button-white"
                        @click="editUserAddress($event, address.id)"
                        v-if="!isCreate"
                        :disabled="!isFormValid"
                    >
                        {{ Content.label.submitButton[$i18n.locale] }}
                    </button-element>
                    <button-element
                        class="btn-lg border border-danger rounded-pill bg-true create-address-button-white"
                        @click="createUserAddress"
                        v-if="isCreate"
                        :disabled="!isFormValid"
                    >
                        {{ Content.label.submitButton[$i18n.locale] }}
                    </button-element>
                </div>
            </div>
        </div>
    </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Content from './content.json'
  import Form from '@components/form'
  import Button from '@components/button'

  import {
    CREATE_USER_ADDRESS,
    EDIT_USER_ADDRESS,
    FETCH_ADDRESS
  } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'form-element': Form,
      'button-element': Button
    },
    data: () => ({
      loading: true,
      data: {},
      Content,
      selected_address: {},
      isCreate: true,
      formValid: false,
      address: {
        district_id: '_',
        city_id: '_',
        province_id: '_',
        country_id: '209',
        postcode: ''
      }
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      isFormValid () {
        return this.formValid
      }
    },
    watch: {
      address: {
        deep: true,
        handler (data) {
          this.updateAddress(data, 'address')
        }
      }
    },
    async mounted () {
      this.fetchAllAddress()
    },
    methods: {
      async open (editData) {
        if (editData?.id) {
          this.isCreate = false
          this.address.address_id = editData.id
          this.address.province_id = editData.province_id.toString()
          this.address.city_id = editData.city_id.toString()
          this.address.district_id = editData.district_id.toString()
          this.address.firstname = editData.firstname
          this.address.lastname = editData.lastname
          this.address.phone = editData.phone
          this.address.address_1 = editData.address_1
          this.address.address_2 = editData.address_2
          this.address.shipping_email = editData.shipping_email
        } else {
          this.isCreate = true
          this.address = {
            district_id: '_',
            city_id: '_',
            province_id: '_',
            country_id: '209',
            postcode: ''
          }
          this.Content.address.city_id.options = []
          this.Content.address.district_id.options = []
          this.selected_address = {}
        }
        this.fetchAllAddress(this.addressData)
        this.loading = true
        this.$refs.addressDialog.open()
        this.loading = false
        this.url = window.location.href
      },
      closePopup () {
        this.$refs.addressDialog.close()
      },
      createUserAddress () {
        if (this.user) {
          this.loading = true
          this.setAddressName('district')
          this.setAddressName('city')
          this.setAddressName('province')
          this.$store.dispatch(CREATE_USER_ADDRESS, { ...this.address, user_id: this.user?.user_id, title: this.address.firstname + ' ' + this.address.lastname }).then(data => {
            window.location.reload()
          }).catch(e => {
          }).finally(data => {
            this.loading = false
          })
        }
      },
      editUserAddress (event, id) {
        if (this.user) {
          this.loading = true
          this.setAddressName('district')
          this.setAddressName('city')
          this.setAddressName('province')
          this.$store.dispatch(EDIT_USER_ADDRESS, { ...this.address, user_id: this.user?.user_id }).then(data => {
            window.location.reload()
          }).catch(e => {
          }).finally(data => {
            this.loading = false
          })
        }
      },
      fetchAddress (type, id, payload) {
        payload.language = this.$i18n.locale || 'th'
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
            this.formValid = true
            const options = data.map(item => ({
              id: item.id,
              value: item.name
            }))
            options.unshift({
              id: '_',
              value: this.$i18n.locale === 'en' ? 'Please Select' : 'กรุณาเลือก',
              disabled: true
            })
            return options
          })
      },
      fetchAllAddress () {
        const fetch = [
          this.fetchProvince(this.address.country_id, 'address')
        ]
        if (this.address?.province_id !== '_' && this.address?.city_id !== '_' && this.address?.district_id !== '_') {
          fetch.push(this.fetchCity(this.address.province_id, 'address'))
          fetch.push(this.fetchDistrict(this.address.city_id, 'address'))
          fetch.push(this.fetchPostcode(this.address.district_id, 'address'))
        }
        Promise.all(fetch).then(results => {
          this.Content.address.province_id.options = results[0]
          if (results[1] && results[2] && results[3]) {
            this.Content.address.city_id.options = results[1]
            this.Content.address.district_id.options = results[2]
            this.Content.address.postcode.options = results[3]
          }
          this.$nextTick(() => {
            this.loading = false
          })
        })
      },
      fetchProvince (id) {
        return this.fetchAddress('province', 'province_id', { country_id: '209' })
      },
      fetchCity (id) {
        return this.fetchAddress('city', 'city_id', { province_id: id })
      },
      fetchDistrict (id) {
        return this.fetchAddress('district', 'district_id', { city_id: id })
      },
      fetchPostcode (id) {
        return this.fetchAddressPostcode('district', 'district_id', { id })
      },
      fetchAddressPostcode (type, id, payload) {
        payload.language = this.$i18n.locale || 'th'
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
            this.formValid = true
            return data[0].zip_code
          })
      },
      updateAddress (data, type) {
        const current = this[`selected_${type}`]
        if (current.district_id !== data.district_id) {
          this[type].postcode = ''
          this.fetchPostcode(data.district_id).then(data => {
            this[type].postcode = data
          })
        } else if (current.city_id !== data.city_id) {
          this.setLoading(type, 'district_id')
          this[type].postcode = ''
          this.fetchDistrict(data.city_id).then(data => {
            this.Content[type].district_id.options = data
            this.Content[type].district_id.disabled = false
            this[type].district_id = '_'
          })
        } else if (current.province_id !== data.province_id) {
          this.setLoading(type, 'city_id')
          this.setPlaceholder(type, 'district_id')
          this[type].postcode = ''
          this.fetchCity(data.province_id).then(data => {
            this.Content[type].city_id.options = data
            this.Content[type].city_id.disabled = false
            this[type].city_id = '_'
          })
        }
        this[`selected_${type}`] = {
          district_id: data.district_id,
          city_id: data.city_id,
          province_id: data.province_id,
          country_id: '209'
        }
        this.validateDropdown('addressForm', this.address)
      },
      validateDropdown (type, form) {
        if (!this.$refs[type]) return
        const elements = this.$refs[type].querySelectorAll('.select')
        let valid = true
        for (let i = 0; i < elements.length; i++) {
          if (form[elements[i].getAttribute('name')] === '_') {
            elements[i].setAttribute('invalid', '')
            valid = false
          } else {
            elements[i].removeAttribute('invalid')
          }
        }
        return valid
      },
      setLoading (form, id) {
        this[form][id] = '_'
        this.formValid = false
        this.Content[form][id].disabled = true
        this.Content[form][id].options = [
          {
            id: '_',
            value: 'Loading ...'
          }
        ]
      },
      setAddressName (type) {
        for (const item of this.Content.address[`${type}_id`].options) {
          if (item.id.toString() === this.address[`${type}_id`]) {
            this.address[type] = item.value
            return
          }
        }
      },
      setPlaceholder (form, input) {
        this[form][input] = '_'
        this.Content[form][input].options = [
          {
            id: '_',
            value: this.$i18n.locale === 'en' ? 'Please Select' : 'กรุณาเลือก',
            disabled: true
          }
        ]
      }
    }
  }
</script>
