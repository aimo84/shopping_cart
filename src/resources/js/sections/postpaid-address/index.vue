<template>
  <div class="address-form">
    <form
      ref="form"
      class="form"
      :class="{ 'invalid-form': showFormInvalid }"
    >
      <div class="form-label">{{ Locale.enter_user_detail[$i18n.locale] }}</div>
      <form-element
        class="form-container user-details-form"
        :data="user_details"
        :form="AddressForm.user_details_form"
      >
        <template slot="title">
          <div class="input_container">
            <label>{{ Locale.name_title[$i18n.locale] }}: <span class="required">*</span></label>
            <div class="name-title-container">
              <div class="radio-input-container">
                <input type="radio" id="mr" v-model="user_details.title" value="mr">
                <label for="mr">{{ Locale.mr[$i18n.locale] }}</label>
              </div>
              <div class="radio-input-container">
                <input type="radio" id="mrs" v-model="user_details.title" value="mrs">
                <label for="mrs">{{ Locale.mrs[$i18n.locale] }}</label>
              </div>
              <div class="radio-input-container">
                <input type="radio" id="miss" v-model="user_details.title" value="miss">
                <label for="miss">{{ Locale.miss[$i18n.locale] }}</label>
              </div>
              <div class="radio-input-container">
                <input type="radio" id="other" v-model="user_details.title" value="">
                <label for="other">{{ Locale.other_title[$i18n.locale] }}</label>
                <input-element
                  class="custom-name-title-input"
                  v-model="user_details.txt_title_other"
                  :disabled="user_details.title !== ''"
                  :placeholder="{th: 'กรุณากรอก', en: 'Please specify'}"
                />
              </div>
            </div>
          </div>
        </template>
        <template slot="expiration">
          <div class="input_container">
            <label>{{ Locale.id_expiration[$i18n.locale] }}: <span class="required">*</span></label>
            <div class="expiration-container">
              <dropdown-element
                v-model="user_details.thai_id_expire_day"
                :options="AddressForm.date.day"
              />
              <dropdown-element
                v-model="user_details.thai_id_expire_month"
                :options="AddressForm.date.month[$i18n.locale]"
              />
              <dropdown-element
                v-model="user_details.thai_id_expire_year"
                :options="AddressForm.date.year"
              />
            </div>
          </div>
        </template>
      </form-element>
      <div class="form-label">{{ Locale.id_address_title[$i18n.locale] }}</div>
      <form-element
        class="form-container id-card-form"
        :data="id_card_form"
        :form="AddressForm.id_card_form"
      />
      <div class="form-label">{{ Locale.enter_billing[$i18n.locale] }}</div>
      <div class="billing-address-same">
        <div class="radio-input-container">
          <input type="radio" id="true" v-model="useIdForm" value="true">
          <label for="true">{{ Locale.use_id_address[$i18n.locale] }}</label>
        </div>
        <div class="radio-input-container">
          <input type="radio" id="false" v-model="useIdForm" value="false">
          <label for="false">{{ Locale.use_different_address[$i18n.locale] }}</label>
        </div>
      </div>
      <form-element
        class="form-container id-card-form"
        :data="billing_address"
        :form="AddressForm.billing_address"
        v-if="useIdForm === 'false'"
      />
    </form>
  </div>
</template>

<script>
  import Form from '@components/form'
  import Dropdown from '@components/dropdown'
  import Input from '@components/input'
  import AddressForm from './address.json'
  import Locale from './locale.json'
  import {
    FETCH_ADDRESS
  } from '@store/actions.type'

  export default {
    components: {
      'form-element': Form,
      'dropdown-element': Dropdown,
      'input-element': Input
    },
    data: () => ({
      Locale,
      AddressForm,
      user_details: {
        title: 'mr',
        txt_title_other: '',
        thai_id_expire_day: '01',
        thai_id_expire_month: '01',
        thai_id_expire_year: '1'
      },
      id_card_form: {
        address: '',
        swine: '',
        village: '',
        building: '',
        floor: '',
        room: '',
        alley: '',
        road: '',
        district_id: '1',
        city_id: '1',
        province_id: '1',
        country_id: '209',
        postcode: '10200'
      },
      billing_address: {
        address: '',
        swine: '',
        village: '',
        building: '',
        floor: '',
        room: '',
        alley: '',
        road: '',
        district_id: '1',
        city_id: '1',
        province_id: '1',
        country_id: '209',
        postcode: '10200'
      },
      useIdForm: 'true',
      showFormInvalid: false,
      loading: true
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      address () {
        return this.$store.state.address.address[this.$i18n.locale]
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      computeDropdown () {
        return (type, id) => (
          this.address[type][id]
            .map((item) => ({
              id: item.id,
              value: item.name
            }))
            .sort((a, b) =>
              (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
            )
        )
      },
      computePostcode (city, id) {
        return (city, id) => {
          id = parseFloat(id)
          if (!this.address.district[city]) return ''
          const result = this.address.district[city].find((item) => item.id === id)
          return result.zip_code
        }
      },
      isPostpaid () {
        return [
          'sim',
          'postpaid',
          'vlearn',
          'family_black_truecard',
          'device_bundle_new_customer',
          'mnp'
        ].includes(this.product.product_type)
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      }
    },
    watch: {
      'user_details.title' (title) {
        if (title !== '') this.user_details.txt_title_other = ''
      },
      'user_details.thai_id_expire_month' (month) {
        this.generateDay(this.user_details.thai_id_expire_year, month)
      },
      'user_details.thai_id_expire_year' (year) {
        this.generateDay(year, this.user_details.thai_id_expire_month)
      },
      'id_card_form.province_id' (id) {
        this.formChanged('id_card_form', 'province_id', id)
      },
      'id_card_form.city_id' (id) {
        this.formChanged('id_card_form', 'city_id', id)
      },
      'id_card_form.district_id' (id) {
        this.formChanged('id_card_form', 'district_id', id)
      },
      'billing_address.province_id' (id) {
        this.formChanged('billing_address', 'province_id', id)
      },
      'billing_address.city_id' (id) {
        this.formChanged('billing_address', 'city_id', id)
      },
      'billing_address.district_id' (id) {
        this.formChanged('billing_address', 'district_id', id)
      }
    },
    async mounted () {
      this.generateYear()
      this.prefillForm()
      Promise.all([
        this.setAddress('id_card_form', 'province', '209', this.id_card_form),
        this.setAddress('id_card_form', 'city', this.id_card_form.province_id, this.id_card_form),
        this.setAddress('id_card_form', 'district', this.id_card_form.city_id, this.id_card_form)
      ]).then(() => {
        this.setAddress('billing_address', 'province', '209', this.id_card_form)
        this.setAddress('billing_address', 'city', this.billing_address.province_id, this.id_card_form)
        this.setAddress('billing_address', 'district', this.billing_address.city_id, this.id_card_form)
        this.loading = false
        this.$emit('ready')
      })
    },
    methods: {
      getFormValue () {
        return {
          userDetails: this.user_details,
          idCardForm: this.id_card_form,
          billingAddress: this.billing_address,
          useIdForm: this.useIdForm
        }
      },
      checkValidity () {
        return this.$refs.form.checkValidity()
      },
      prefillForm () {
        if (!this.isPostpaid || !this.ekycAnswers) return
        if (
          this.ekycAnswers.home_province_id &&
          this.ekycAnswers.home_subdistrict_id &&
          this.ekycAnswers.home_district_id
        ) {
          this.id_card_form.province_id = this.ekycAnswers.home_province_id.toString()
          this.id_card_form.city_id = this.ekycAnswers.home_district_id.toString()
          this.id_card_form.district_id = this.ekycAnswers.home_subdistrict_id.toString()
          this.id_card_form.postcode = this.ekycAnswers.home_zipcode
          this.billing_address.province_id = this.ekycAnswers.home_province_id.toString()
          this.billing_address.city_id = this.ekycAnswers.home_district_id.toString()
          this.billing_address.district_id = this.ekycAnswers.home_subdistrict_id.toString()
          this.billing_address.postcode = this.ekycAnswers.home_zipcode
        }
        const idExpiration = this.ekycAnswers.date_of_expiration ? this.ekycAnswers.date_of_expiration.split('-') : ''
        this.user_details.thai_id_expire_year = idExpiration ? (parseFloat(idExpiration[2]) + 543).toString().padStart(2, 0) : ''
        this.user_details.thai_id_expire_month = idExpiration ? parseFloat(idExpiration[1]).toString().padStart(2, 0) : ''
        this.user_details.thai_id_expire_day = idExpiration ? parseFloat(idExpiration[0]).toString().padStart(2, 0) : ''
        this.user_details.first_name = this.ekycAnswers.first_name
        this.user_details.last_name = this.ekycAnswers.last_name
        this.user_details.email = this.ekycAnswers.email
        this.user_details.telephone = this.ekycAnswers.mobile_no
        this.id_card_form.address = this.ekycAnswers.home_address
        this.billing_address.address = this.ekycAnswers.home_address
        const prefix = {
          นาย: 'mr',
          นาง: 'mrs',
          นางสาว: 'miss'
        }
        if (this.ekycAnswers.prefix in prefix) {
          this.user_details.title = prefix[this.ekycAnswers.prefix]
        } else {
          this.user_details.title = ''
          this.user_details.txt_title_other = this.ekycAnswers.prefix
        }
      },
      generateYear () {
        const currentYear = new Date().getFullYear() + 543
        const years = []
        for (let year = currentYear; year < 2644; year++) years.push(year)
        this.AddressForm.date.year = years.map((year) => ({
          id: year,
          value: year
        }))
        this.user_details.thai_id_expire_year = currentYear.toString()
      },
      generateDay (year, month) {
        const total = new Date(year - 543, parseInt(month), 0).getDate()
        this.AddressForm.date.day = [...Array(total).keys()].map((day) => ({
          id: (day + 1).toString().padStart(2, 0),
          value: day + 1
        }))
        if (parseFloat(this.user_details.thai_id_expire_day) > total) {
          this.user_details.thai_id_expire_day = total.toString().padStart(2, 0)
        }
      },
      async formChanged (form, type, id) {
        if (this.loading) return
        if (id === '_') return
        const data = JSON.parse(JSON.stringify(this[form]))
        switch (type) {
          case 'province_id':
            this.setAddressLoading(form, 'city')
            await this.setAddress(form, 'city', id, data)
            break
          case 'city_id':
            this.setAddressLoading(form, 'district')
            await this.setAddress(form, 'district', id, data)
            break
          case 'district_id':
            await this.setPostcode(form)
            break
        }
      },
      setAddressLoading (form, type) {
        const contentId = `${type}_id`
        this[form][contentId] = '_'
        this[form].postcode = ''
        this.AddressForm[form][contentId].disabled = true
        this.AddressForm[form][contentId].options = [
          {
            id: '_',
            value: 'Loading ...'
          }
        ]
      },
      async fetchAddress (type, id) {
        const payload = {}
        const types = {
          province: 'country_id',
          city: 'province_id',
          district: 'city_id'
        }
        payload[types[type]] = id
        payload.language = this.$i18n.locale || 'th'
        const params = Object.keys(payload)
          .map(item => `${item}=${payload[item]}`).join('&')
        return this.$store.dispatch(FETCH_ADDRESS, { type, params })
      },
      async setAddress (form, type, id, data) {
        this.$emit('loading', true)
        const content = this.AddressForm[form]
        const contentId = `${type}_id`
        if (!this.address[type][id]) await this.fetchAddress(type, id)
        content[contentId].disabled = false
        content[contentId].options = this.computeDropdown(type, id)
        const options = content[contentId].options.map((option) => option.id)
        const exist = options.includes(parseFloat(data[contentId]))
        this[form][contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString()
        this.$emit('loading', false)
      },
      async setPostcode (form) {
        this[form].postcode = this.computePostcode(this[form].city_id, this[form].district_id)
      }
    }
  }
</script>

<style lang="scss" src="./style.scss" scoped />
