<template>
  <div style="margin-bottom: 16px;">
    <div class="panel-header multi-address">
      <div>
        {{ Content.label.shipping[$i18n.locale] }}
      </div>
      <div class="add-address desktop" @click="openDialog()">
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="10.25" stroke="white" stroke-width="1.5"/>
          <g clip-path="url(#clip0_890_4244)">
            <path d="M11.2998 7.8V14.8" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M14.7998 11.3H7.7998" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
          </g>
          <defs>
            <clipPath id="clip0_890_4244">
            <rect width="8.5" height="8.5" fill="white" transform="translate(7 7)"/>
            </clipPath>
          </defs>
        </svg>
        <span class="add-address-label">
          {{ Content.label.create_address[$i18n.locale] }}
        </span>
      </div>
    </div>

    <div class="panel-content multi-address">
      <template v-if="loading">
        <loading-element />
      </template>

      <template v-else>
        <div class="add-address mobile" @click="openDialog()">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10.25" stroke="#E62627" stroke-width="1.5"/>
            <g clip-path="url(#clip0_890_4244)">
              <path d="M11.2998 7.8V14.8" stroke="#E62627" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M14.7998 11.3H7.7998" stroke="#E62627" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_890_4244">
              <rect width="8.5" height="8.5" fill="white" transform="translate(7 7)"/>
              </clipPath>
            </defs>
          </svg>
          <span class="add-address-label">
            {{ Content.label.create_address[$i18n.locale] }}
          </span>
        </div>
        <div v-for="(item, index) in addresses" :key="index" class="information" :class="{ last: index === addresses.length - 1 && mode === 'selected' }">
          <div class="address-container">
            <div class="choose-address" v-if="mode === 'change'" @click="selectedAddressId = +item.id">
              <svg v-if="+selectedAddressId === +item.id" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#E62627"/>
                <path d="M16.61 9.12988L10.12 15.5099C9.89999 15.8399 9.45999 15.9499 9.12999 15.9499C8.79999 15.9499 8.35999 15.8399 8.02999 15.5099L4.83999 12.3199C4.28999 11.7699 4.28999 10.7799 4.83999 10.2299C5.38999 9.67988 6.37999 9.67988 6.92999 10.2299L9.12999 12.4299L14.52 7.03988C15.07 6.48988 16.06 6.48988 16.61 7.03988C17.16 7.58988 17.16 8.57988 16.61 9.12988Z" fill="white"/>
              </svg>
              <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10.5" stroke="#CCCCCC"/>
                <path d="M16.61 9.1299L10.12 15.5099C9.89999 15.8399 9.45999 15.9499 9.12999 15.9499C8.79999 15.9499 8.35999 15.8399 8.02999 15.5099L4.83999 12.3199C4.28999 11.7699 4.28999 10.7799 4.83999 10.2299C5.38999 9.6799 6.37999 9.6799 6.92999 10.2299L9.12999 12.4299L14.52 7.0399C15.07 6.4899 16.06 6.4899 16.61 7.0399C17.16 7.5899 17.16 8.5799 16.61 9.1299Z" fill="#CCCCCC"/>
              </svg>
            </div>
            <div class="address-detail">
              <div class="edit-address" @click="openDialog(item)">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.49971 10.8L0.699707 10.9L0.899707 8.19999L8.69971 0.399994L11.2997 2.99999L3.49971 10.8Z" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0.899902 8.2L3.4999 10.8" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.19971 1.89999L9.79971 4.49999" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.0999 12.3H0.399902" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="edit-address-label">
                  {{ Content.label.edit[$i18n.locale] }}
                </span>
              </div>
              <div class="topic main">
                <span>{{ `${item.firstname} ${item.lastname}` }}</span>
                <span class="red" v-if="+item.address_default && mode === 'selected'"> ({{ Content.label.default_address[$i18n.locale] }})</span>
                <span class="detail" :class="{'new-line': mode === 'selected'}">
                  {{ `${item.address_1} ${item.address_2 || ''} ${item.district} ${item.province} ${item.postcode}` }}
                </span>
                <span class="red" v-if="+item.address_default && mode === 'change'"> ({{ Content.label.default_address[$i18n.locale] }})</span>
              </div>
              <div v-if="mode === 'selected'">
                <span class="topic">{{ Content.label.phone[$i18n.locale] }}: </span>
                <span>{{ item.phone }} </span>
                <br />
                <span class="topic">{{ Content.label.email[$i18n.locale] }}: </span>
                <span>{{ item.shipping_email }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <button-element class="red-btn" v-if="mode === 'selected'" @click="changeMode('change')">
            {{ Content.label.change[$i18n.locale] }}
          </button-element>
          <button-element class="red-btn" v-if="mode === 'change'" @click="changeMode('cancel')">
            {{ Content.label.cancel[$i18n.locale] }}
          </button-element>
          <button-element v-if="mode === 'change'" @click="changeMode('save')">
            {{ Content.label.save[$i18n.locale] }}
          </button-element>
        </div>
        <slot></slot>
      </template>
    </div>

    <dialog-element
      ref="dialog"
      class=""
      @onClose="clearAddress"
      showCloseButton
      newDesign
    >
      <div slot="content">
        <loading-element v-if="loading" />
        <template v-else>
          <div class="dialog-address">
            <div>
              {{ !addressId ? Content.label.create_address[$i18n.locale] : Content.label.edit_address[$i18n.locale] }}
            </div>
            <div class="delete-address" v-if="addressId && shippingAddress.length > 1" @click="deleteAddress()">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1868_330)">
                  <path d="M0.400024 3.80001C0.400024 2.90001 1.20002 2.10001 2.10002 2.10001H11.7C12.6 2.10001 13.4 2.90001 13.4 3.80001" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.40005 2.09999H3.80005C3.80005 1.19999 4.60005 0.399994 5.50005 0.399994H7.80005C8.70005 0.399994 9.40005 1.09999 9.40005 2.09999Z" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.7 3.19998V13.4H2.09998V3.19998" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.30005 4.89999V11.7" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.20007 4.89999V11.7" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 4.89999V11.7" stroke="#999999" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_1868_330">
                  <rect width="13.8" height="13.8" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span class="delete-address-label">{{ Content.label.delete_address[$i18n.locale] }}</span>
            </div>
          </div>
          <form
            ref="addressForm"
            :class="{'confirm': isSubmitForm}"
          >
            <form-element
              class="form-container address-form"
              :data="deliveryAddress"
              :form="Content.delivery_address"
            />

            <div class="info-container">
              <div class="form-label">
                <input
                  type="checkbox"
                  id="address-default"
                  v-model.number="deliveryAddress.address_default"
                >
                <label class="new-design-checkbox" for="address-default">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.5" :stroke="deliveryAddress.address_default || '#CCCCCC'" :fill="!deliveryAddress.address_default || '#E62627'"/>
                    <path d="M15.0999 8.2999L9.1999 14.0999C8.9999 14.3999 8.5999 14.4999 8.2999 14.4999C7.9999 14.4999 7.5999 14.3999 7.2999 14.0999L4.3999 11.1999C3.8999 10.6999 3.8999 9.7999 4.3999 9.2999C4.8999 8.7999 5.7999 8.7999 6.2999 9.2999L8.2999 11.2999L13.1999 6.3999C13.6999 5.8999 14.5999 5.8999 15.0999 6.3999C15.5999 6.8999 15.5999 7.7999 15.0999 8.2999Z" :fill="deliveryAddress.address_default ? 'white' :'#CCCCCC'"/>
                  </svg>
                </label>
                <label
                  class="font-light"
                  for="address-default"
                >{{ Content.label.address_default[$i18n.locale] }}</label>
              </div>

              <button-element
                @click="submitForm"
                :disabled="!formValid"
                class="btn-next save-button"
              >
                {{ Content.label.save[$i18n.locale] }}
              </button-element>
            </div>

          </form>

        </template>
      </div>
    </dialog-element>

    <dialog-element ref="noDelDialog" newDesign showCloseButton>
      <div
        slot="content"
        class="login-dialog"
      >
        <div class="dialog-header">{{ Content.cannot_delete.label[$i18n.locale] }}</div>
        <div class="dialog-action">
          <button-element
            class="newDesignButton loginButton text-bold"
            @click="$refs.noDelDialog.close()"
          >{{ Content.cannot_delete.button[$i18n.locale] }}
          </button-element>
        </div>
      </div>
    </dialog-element>
  </div>
</template>

<script>
  import Form from '@components/form-address'
  import Content from './content.json'
  import Button from '@components/button'
  import Loading from '@components/loading'
  import Dialog from '@components/dialog'
  import {
    GET_SHIPPING_ADDRESS,
    CREATE_SHIPPING_ADDRESS,
    EDIT_SHIPPING_ADDRESS,
    DELETE_SHIPPING_ADDRESS
  } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'form-element': Form,
      'button-element': Button,
      'loading-element': Loading
    },

    props: {
      user: [Object, Boolean]
    },

    data: () => ({
      Content,
      mode: 'selected',
      loading: true,
      addressId: null,
      defaultDeliveryAddress: {
        district_id: '_',
        city_id: '_',
        province_id: '_',
        country_id: '209',
        postcode: '',
        address_default: 0,
        title: '-'
      },
      deliveryAddress: {
        district_id: '_',
        city_id: '_',
        province_id: '_',
        country_id: '209',
        postcode: '',
        address_default: 0,
        title: '-'
      },
      selectedAddressId: 0,
      isSubmitForm: false
    }),
    computed: {
      formValid () {
        const form = this.Content.delivery_address
        const exceptCase = ['phone', 'shipping_email']
        return Object.keys(form).every((item) => {
          if (exceptCase.includes(item)) return true
          const passRequired = form[item]?.required ? this.deliveryAddress[item] : true
          const passRegex = new RegExp(form[item].pattern).test(this.deliveryAddress[item])
          return passRequired && passRegex
        })
      },

      shippingAddress () {
        return this.$store.state.address.shippingAddress || []
      },

      addresses () {
        return this.mode === 'change'
          ? this.shippingAddress
          : this.shippingAddress.filter((e, i) => {
            return +e.id === +this.selectedAddressId || e.newAddress
          })
      }
    },

    watch: {
      'deliveryAddress.province_id' (newVal, oldVal) {
        if (newVal === '_') return
        this.$parent.fetchCity(newVal, 'delivery_address').then(result => {
          if (oldVal !== '_') {
            this.deliveryAddress.city_id = this.deliveryAddress.district_id = '_'
            this.deliveryAddress.postcode = ''
          }
          this.Content.delivery_address.city_id.options = result
        })
      },
      'deliveryAddress.city_id' (newVal, oldVal) {
        if (newVal === '_') return
        this.$parent.fetchDistrict(newVal, 'delivery_address').then(result => {
          if (oldVal !== '_') {
            this.deliveryAddress.district_id = '_'
            this.deliveryAddress.postcode = ''
          }
          this.Content.delivery_address.district_id.options = result
        })
      },
      'deliveryAddress.district_id' (newVal) {
        if (newVal === '_') return
        this.$parent.fetchPostcode(newVal, 'delivery_address').then(result => {
          this.deliveryAddress.postcode = result
        })
      }
    },

    async mounted () {
      setTimeout(async () => {
        return await this.$store.dispatch(GET_SHIPPING_ADDRESS, { user_id: this.user.user_id })
          .then(() => {
            this.loading = false
            const defaultAddr = this.shippingAddress.find(addr => +addr.address_default)
            const savedAddr = this.shippingAddress.find(addr => {
              return +addr.id === +window.sessionStorage.getItem('selected-address-id')
            })
            this.selectedAddressId = savedAddr?.id > 0 ? +savedAddr?.id : defaultAddr?.id > 0 ? defaultAddr?.id : 0
            window.sessionStorage.setItem('selected-address-id', this.selectedAddressId)
            this.$emit('updateProfileAddress', this.formatAddress())
          })
      }, 3000)
    },

    methods: {

      changeMode (mode) {
        if (mode === 'change') {
          this.mode = 'change'
        } else if (mode === 'cancel') {
          this.mode = 'selected'
          this.selectedAddressId = window.sessionStorage.getItem('selected-address-id')
        } else {
          this.mode = 'selected'
          const address = this.shippingAddress.find(e => +e.id === +this.selectedAddressId)
          if (address) window.sessionStorage.setItem('selected-address-id', address.id)
          this.$emit('updateProfileAddress', this.formatAddress())
        }
        this.shippingAddress.forEach(e => delete e.newAddress)
      },

      convertAddrToString (address) {
        const listConvert = ['district_id', 'city_id', 'province_id', 'postcode', 'country_id']
        listConvert.forEach(key => {
          if ([key] in address) address[key] = address[key].toString()
        })
        return address
      },

      formatAddress () {
        const address = this.shippingAddress.find(e => +e.id === +window.sessionStorage.getItem('selected-address-id'))
        const { address_1: address1, address_2: address2, shipping_email: email, ...restAddr } = address
        const formatAddress = {
          address1,
          address2,
          email,
          ...restAddr
        }
        return this.convertAddrToString(formatAddress)
      },

      clearAddress () {
        this.deliveryAddress = Object.assign({}, this.defaultDeliveryAddress)
        this.Content.delivery_address.province_id.options = []
        this.Content.delivery_address.city_id.options = []
        this.Content.delivery_address.district_id.options = []
        this.deliveryAddress.postcode = ''
      },

      async fetchProvince () {
        this.loading = true
        return await this.$parent.fetchProvince(
          this.deliveryAddress.country_id,
          'delivery_address'
        ).then(result => {
          this.Content.delivery_address.province_id.options = result
          this.$nextTick(() => {
            this.loading = false
          })
        })
      },

      async openDialog (item = null) {
        this.addressId = item?.id
        this.isSubmitForm = false
        if (item) {
          const selectedAddress = Object.assign({}, this.shippingAddress.find(address => address.id === item.id))
          this.deliveryAddress = this.convertAddrToString(selectedAddress)
        }
        this.fetchProvince()
        this.$refs.dialog.open()
      },

      setAddressName (type) {
        for (const item of this.Content.delivery_address[`${type}_id`].options) {
          if (item.id.toString() === this.deliveryAddress[`${type}_id`]) {
            this.deliveryAddress[type] = item.value
            return
          }
        }
      },

      async submitForm () {
        this.loading = this.isSubmitForm = true
        this.setAddressName('district')
        this.setAddressName('city')
        this.setAddressName('province')
        const { address_default: isDefault, ...restAddress } = this.deliveryAddress

        const validateForm = this.$refs.addressForm.checkValidity()
        if (!validateForm) {
          this.$nextTick(() => {
            this.loading = false
          })
          return
        }

        if (!this.addressId) { // case add new address
          await this.$store.dispatch(CREATE_SHIPPING_ADDRESS, {
            user_id: this.user.user_id,
            address_default: isDefault === true ? 1 : 0,
            ...restAddress
          }).then((data) => {
            if (isDefault) this.shippingAddress.forEach(e => { e.address_default = e.id === data?.data?.id })
          })
        } else { // case update existing address
          if (isDefault) restAddress.is_truestore = 1
          await this.$store.dispatch(EDIT_SHIPPING_ADDRESS, {
            address_id: this.addressId,
            user_id: this.user.user_id,
            ...restAddress
          }).then((data) => {
            const index = this.shippingAddress.findIndex(e => +e.id === +this.addressId)
            this.shippingAddress.splice(index, 1, data?.data)
            if (isDefault) this.shippingAddress.forEach(e => { e.address_default = +this.addressId === +e.id })
          })
        }
        this.addressId = null
        this.loading = false
        this.$refs.dialog.close()
      },

      async deleteAddress () {
        const addressObj = this.shippingAddress.find(e => +e.id === +this.addressId)
        // block user delete default address
        if (+addressObj?.address_default) {
          this.$refs.dialog.close()
          this.$nextTick(() => {
            this.$refs.noDelDialog.open()
          })
          return
        }
        this.loading = true
        await this.$store.dispatch(DELETE_SHIPPING_ADDRESS, {
          address_id: this.addressId,
          user_id: this.user.user_id
        }).then(() => {
          // when remove selected address auto select default
          if (+this.addressId === +this.selectedAddressId) {
            const defaultAddress = this.shippingAddress.find(address => +address.address_default)
            this.selectedAddressId = defaultAddress?.id
            window.sessionStorage.setItem('selected-address-id', defaultAddress?.id)
            this.$emit('updateProfileAddress', this.formatAddress())
          }
          this.addressId = null
          this.loading = false
          this.$refs.dialog.close()
        })
      }
    }
  }
</script>

<style lang="scss">
form.confirm {
  .input_container {
    .input input:invalid,
    .input input[invalid],
    select[invalid] {
      border-color: red;
    }
  }
}
</style>

<style scoped lang="scss" src="../style.scss"></style>
