<template>
  <div>
    <loading-element v-if="loading || addressLoading" />
    <div v-else class="address-container">
      <div class="address-inner-container">
        <form
          ref="form"
          class="forms"
          :class="{ 'invalid-form': showFormInvalid }"
        >
          <div class="form">
            <div class="form-label">{{ Locale.installation_address[$i18n.locale] }}</div>
            <form-element
              class="form-container installation-form"
              :data="data.instl_addr"
              :form="Address.instl_addr"
            >
              <template slot="birthDate">
                <div class="input_container">
                  <label>
                    {{ Address.instl_addr.birthDate.label[$i18n.locale] }}:
                    <span class="required">*</span>
                  </label>
                  <vuejs-datepicker
                    class="datepicker"
                    :disabled-dates="disabledDates"
                    v-model="data.instl_addr.birthDate"
                  />
                </div>
              </template>
              <template slot="identification">
                <div class="input_container">
                  <label>
                    {{ Address.instl_addr.identification.label[$i18n.locale] }}:
                    <span class="required">*</span>
                  </label>
                  <input-element
                    @change="fetchTimeslot"
                    :disabled="Address.instl_addr.identification.disabled"
                    :type="Address.instl_addr.identification.type"
                    :required="Address.instl_addr.identification.required"
                    :pattern="Address.instl_addr.identification.pattern"
                    v-model="data.instl_addr.identification"
                  />
                  <div class="error" v-if="timeslotError">{{ timeslotError }}</div>
                </div>
              </template>
            </form-element>
            <div class="ekyc-container">
              <div class="title">{{ Locale.ekyc.title[$i18n.locale] }}</div>
              <div class="button-container">
                <div class="ekyc">
                  <input
                    ref="pictureInput"
                    accept="image/*"
                    type="file"
                    @change="fileChanged($event, 'upload_picture')"
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.pictureInput.click()"
                    :disabled="data.ekyc.upload_picture === 'loading'"
                  >
                    <div
                      v-if="data.ekyc.upload_picture === 'loading'"
                      class="loading"
                    />
                    <template v-else-if="data.ekyc.upload_picture">
                      <svg class="done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/>
                      </svg>
                    </template>
                    <img v-else src="/images/icons/upload_picture.svg" />
                  </button>
                  <div class="label">{{ Locale.ekyc.face_label[$i18n.locale] }} *</div>
                  <div class="sublabel">{{ Locale.ekyc.limit[$i18n.locale] }}</div>
                  <div v-if="ekycError.upload_picture" class="error">{{ Locale.ekyc.limit_error[$i18n.locale] }}</div>
                </div>
                <div class="ekyc">
                  <input
                    ref="idCardInput"
                    accept="image/*"
                    type="file"
                    @change="fileChanged($event, 'upload_id_card')"
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.idCardInput.click()"
                    :disabled="data.ekyc.upload_id_card === 'loading'"
                  >
                    <div
                      v-if="data.ekyc.upload_id_card === 'loading'"
                      class="loading"
                    />
                    <template v-if="data.ekyc.upload_id_card">
                      <svg class="done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/>
                      </svg>
                    </template>
                    <img v-else src="/images/icons/upload_id_card.svg" />
                  </button>
                  <div class="label">{{ Locale.ekyc.id_label[$i18n.locale] }} *</div>
                  <div class="sublabel">{{ Locale.ekyc.limit[$i18n.locale] }}</div>
                  <div v-if="ekycError.upload_id_card" class="error">{{ Locale.ekyc.limit_error[$i18n.locale] }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="form">
            <div class="form-label">{{ Locale.billing_title[$i18n.locale] }}</div>
            <div class="form-label-action">
              <label>
                <input
                  type="checkbox"
                  v-model="data.copy_billing_addr"
                >
                {{ Locale.copy_form[$i18n.locale] }}
              </label>
            </div>
            <form-element
              v-if="!data.copy_billing_addr"
              class="form-container installation-form"
              :data="data.billing_addr"
              :form="Address.billing_addr"
            />
          </div> -->
          <!-- <div class="form">
            <div class="form-label">{{ Locale.invoice_title[$i18n.locale] }}</div>
            <div class="invoice-container">
              <label>
                <input
                  type="checkbox"
                  v-model="data.copy_invoice_addr"
                />
                {{ Locale.copy_form[$i18n.locale] }}
              </label>
            </div>
            <form-element
              v-if="!data.copy_invoice_addr"
              class="form-container installation-form"
              :data="data.invoice_addr"
              :form="Address.invoice_addr"
            />
          </div> -->
        </form>
        <div class="agreement-container">
          <div />
          <div class="agreement">
            <a
              class="info-button"
              href="/files/trueonline-terms.pdf"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2
                  12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span>{{ Locale.tnc[$i18n.locale] }}</span>
            </a>
          </div>
          <div />
          <div />
          <div class="agreement">
            <label>
              <input type="checkbox" v-model="agreeTnc" />
              {{ Locale.agreement[$i18n.locale] }}
            </label>
          </div>
          <div />
        </div>
        <div class="save-button-container">
          <router-link
            to="/online-store?trueonline=true"
            id="tol-address-back"
          >
            <button-element class="button back">{{ Locale.back[$i18n.locale] }}</button-element>
          </router-link>
          <button-element
            @click="save"
            class="button"
            id="tol-address-next"
            :disabled="!valid"
          >{{ Locale.next[$i18n.locale] }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import Input from '@components/input'
  import Button from '@components/button'
  import Form from '@components/form'
  import Loading from '@components/loading'
  import Address from './address.json'
  import Locale from './locale.json'
  import {
    FETCH_ADDRESS,
    FETCH_TOL_TIMESLOT
  } from '@store/actions.type'
  import {
    toBase64,
    forceCompressImage
  } from '@utils/image'

  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    components: {
      'input-element': Input,
      'button-element': Button,
      'form-element': Form,
      'loading-element': Loading,
      'vuejs-datepicker': Datepicker
    },
    props: {
      data: Object,
      loading: Boolean,
      lang: String,
      token: Object
    },
    data: () => ({
      Locale,
      Address,
      form: {},
      showFormInvalid: false,
      formValid: true,
      agreeTnc: false,
      addressLoading: true,
      timeslotLoading: true,
      timeslotError: '',
      disabledDates: {
        to: new Date(1903, 0, 1),
        from: new Date()
      },
      ekycError: {
        upload_picture: false,
        upload_id_card: false
      }
    }),
    computed: {
      product () {
        return this.$store.state.trueonline.tolProduct.data
      },
      address () {
        return this.$store.state.address.address[this.lang || this.$i18n.locale]
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
      valid () {
        const ekyc = this.data.ekyc.upload_picture && this.data.ekyc.upload_id_card
        const timeslot = this.data.instl_addr.installation_time.includes(';')
        return ekyc && timeslot && this.formValid && this.agreeTnc
      }
    },
    watch: {
      'data.instl_addr.identificationType' (value) {
        this.timeslotError = ''
        this.data.instl_addr.identification = ''
        this.data.instl_addr.installation_time = '_'
        const label = (value === 'I') ? {
          en: 'Enter your Thai ID (13 Digits)',
          th: 'กรอกหมายเลขบัตรประชาชน'
        } : {
          en: 'Enter your Passport',
          th: 'กรอกหมายเลขพาสปอร์ต'
        }
        this.Address.instl_addr.identification.label = label
        this.Address.instl_addr.installation_time.options = {
          th: [{
            id: '_',
            value: 'กรุณากรอกหมายเลขบัตรประชาชนก่อน'
          }],
          en: [{
            id: '_',
            value: 'Please enter your passport no./Thai ID first'
          }]
        }
      },
      'data.invoice_addr.province_id' (id) {
        if (this.addressLoading) return
        this.formChanged('invoice_addr', 'province_id', id)
      },
      'data.invoice_addr.city_id' (id) {
        if (this.addressLoading) return
        this.formChanged('invoice_addr', 'city_id', id)
      },
      'data.invoice_addr.district_id' (id) {
        if (this.addressLoading) return
        this.formChanged('invoice_addr', 'district_id', id)
      },
      'data.billing_addr.province_id' (id) {
        if (this.addressLoading) return
        this.formChanged('billing_addr', 'province_id', id)
      },
      'data.billing_addr.city_id' (id) {
        if (this.addressLoading) return
        this.formChanged('billing_addr', 'city_id', id)
      },
      'data.billing_addr.district_id' (id) {
        if (this.addressLoading) return
        this.formChanged('billing_addr', 'district_id', id)
      },
      'loading' (value) {
        if (!value) {
          loggerAddon({
            type: 'TOL',
            event: 'TOL user address',
            status: 'visit',
            tolProductData: [
              this.product.contract_code,
              this.product.entry_fee,
              this.product.media,
              this.product.service_code
            ],
            tolPrice: this.product.price,
            tolInvoice: this.product.invoice_tol,
            tolEntryFee: this.product.tol_entry_fee
          })
        }
      }
    },
    async mounted () {
      await Promise.all([
        this.setAddress('invoice_addr', 'province', this.data.invoice_addr.country_id, this.data.invoice_addr),
        this.setAddress('invoice_addr', 'city', this.data.invoice_addr.province_id, this.data.invoice_addr),
        this.setAddress('invoice_addr', 'district', this.data.invoice_addr.city_id, this.data.invoice_addr)
      ])
      await Promise.all([
        this.setAddress('billing_addr', 'province', this.data.billing_addr.country_id, this.data.billing_addr),
        this.setAddress('billing_addr', 'city', this.data.billing_addr.province_id, this.data.billing_addr),
        this.setAddress('billing_addr', 'district', this.data.billing_addr.city_id, this.data.billing_addr)
      ])
      this.addressLoading = false

      if (!this.loading) {
        loggerAddon({
          type: 'TOL',
          event: 'TOL user address',
          status: 'visit',
          tolProductData: [
            this.product.contract_code,
            this.product.entry_fee,
            this.product.media,
            this.product.service_code
          ],
          tolPrice: this.product.price,
          tolInvoice: this.product.invoice_tol,
          tolEntryFee: this.product.tol_entry_fee
        })
      }
    },
    methods: {
      async fileChanged (event, id) {
        this.ekycError[id] = false
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0]
          event.target.value = ''
          if (file.size <= 5000000) {
            if (file.size > 200000) {
              this.data.ekyc[id] = 'loading'
              const output = await forceCompressImage(file)
              if (!output) {
                this.ekycError[id] = true
                this.data.ekyc[id] = false
                return
              }
              this.data.ekyc[id] = output
            } else {
              const base64 = await toBase64(file)
              this.data.ekyc[id] = base64
            }
          } else {
            this.ekycError[id] = true
            this.data.ekyc[id] = false
          }
        }
      },
      validateCitizenId (id) {
        if (id.length !== 13) {
          return false
        }
        let sum = 0
        for (let i = 0; i < 12; i++) {
          sum += parseFloat(id.charAt(i)) * (13 - i)
        }
        if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) {
          return false
        }
        return true
      },
      computeDate (date) {
        const lang = this.$i18n.locale === 'th' ? 'th-TH' : 'en-MY'
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString(lang, options)
      },
      async fetchTimeslot () {
        try {
          const identification = this.data.instl_addr.identification
          this.timeslotError = ''
          this.timeslotLoading = true
          this.Address.instl_addr.identificationType.disabled = true
          this.Address.instl_addr.identification.disabled = true
          this.Address.instl_addr.installation_time.disabled = true
          this.Address.instl_addr.installation_time.options = [{
            id: '_',
            value: this.$i18n.locale === 'th' ? 'กำลังโหลด ...' : 'Loading ...'
          }]
          this.data.instl_addr.installation_time = '_'
          if (!identification) throw new Error('invalid-identification')
          const isThaiId = this.data.instl_addr.identificationType === 'I'
          if (isThaiId && !this.validateCitizenId(identification)) {
            throw new Error('invalid-identification')
          }
          const result = await this.$store.dispatch(FETCH_TOL_TIMESLOT, {
            correlationId: this.token.correlationId,
            certificateId: this.token.certificateId,
            _identity: this.token._identity,
            id_number: identification
          })
          const options = result.timeSlotList.filter((e) => {
            const cap = e.installationCapacity.split('/')
            return parseInt(cap[0]) > 0
          }).map((e) => ({
            id: `${e.appointmentDate};${e.timeSlot}`,
            value: `${this.computeDate(e.appointmentDate)} ${e.timeSlot}`
          }))
          if (options.length <= 0) throw new Error('no-timeslot')
          this.data.instl_addr.installation_time = options[0].id
          this.Address.instl_addr.installation_time.options = options
          this.Address.instl_addr.identificationType.disabled = false
          this.Address.instl_addr.identification.disabled = false
          this.Address.instl_addr.installation_time.disabled = false
          this.timeslotLoading = false
        } catch (error) {
          const e = error
          if (e.message === 'invalid-identification') {
            e.message = this.Locale.invalid_identification
          }
          if (e.message === 'no-timeslot') {
            e.message = this.Locale.no_timeslot
          }
          this.timeslotLoading = true
          this.Address.instl_addr.identificationType.disabled = false
          this.Address.instl_addr.identification.disabled = false
          this.Address.instl_addr.installation_time.disabled = true
          this.Address.instl_addr.installation_time.options = [{
            id: '_',
            value: e?.message[this.$i18n.locale] || 'ERR'
          }]
          this.timeslotError = e?.message[this.$i18n.locale] || 'ERR'
        }
      },
      async formChanged (form, type, id) {
        if (id === '_') return
        const data = JSON.parse(JSON.stringify(this.data[form]))
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
        this.data[form][contentId] = '_'
        this.data[form].postcode = ''
        this.Address[form][contentId].disabled = true
        this.Address[form][contentId].options = [
          {
            id: '_',
            value: this.$i18n.locale === 'th' ? 'กำลังโหลด ...' : 'Loading ...'
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
        payload.language = this.lang || this.$i18n.locale
        const params = Object.keys(payload)
          .map(item => `${item}=${payload[item]}`).join('&')
        return this.$store.dispatch(FETCH_ADDRESS, { type, params })
      },
      async setAddress (form, type, id, data) {
        this.formValid = false
        const content = this.Address[form]
        const contentId = `${type}_id`
        if (!this.address[type][id]) await this.fetchAddress(type, id)
        content[contentId].disabled = (form === 'instl_addr') || false
        content[contentId].options = this.computeDropdown(type, id)
        const options = content[contentId].options.map((option) => option.id)
        const exist = options.includes(parseFloat(data[contentId]))
        this.data[form][contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString()
        this.formValid = true
      },
      async setPostcode (name) {
        const form = this.data[name]
        form.postcode = this.computePostcode(form.city_id, form.district_id)
      },
      setAddressName (f) {
        const address = ['city', 'province', 'district']
        address.forEach((e) => {
          const options = this.Address[f][`${e}_id`].options
          const selected = options.find(i => i.id.toString() === this.data[f][`${e}_id`])
          this.data[f][e] = selected.value
        })
      },
      copyForm (form) {
        this.setAddressName(form)
        if (!this.data[`copy_${form}`]) return
        const addr = this.data.instl_addr
        this.data[form] = {
          name: addr.firstname,
          lastname: addr.lastname,
          houseNo: addr.HOUSE_NO,
          moo: addr.MOO,
          soi: addr.SOI,
          streetName: addr.STREET,
          district_id: '1',
          city_id: '1',
          province_id: '1',
          country_id: '209',
          postcode: addr.ZIP_CODE,
          city: addr.DISTRICT,
          province: addr.PROVINCE,
          district: addr.SUB_DISTRICT
        }
      },
      async save () {
        if (!this.$refs.form.checkValidity()) {
          window.scrollTo(0, 0)
          this.showFormInvalid = true
          return
        }
        this.showFormInvalid = false
        this.copyForm('invoice_addr')
        this.copyForm('billing_addr')
        const date = new Date(this.data.instl_addr.birthDate).setHours(0, 0, 0, 0)
        this.data.instl_addr.birthDate = new Date(date)
        this.data.address_form_submitted = true

        loggerAddon({
          type: 'TOL',
          event: 'TOL user address',
          status: 'verify',
          tolProductData: [
            this.product.contract_code,
            this.product.entry_fee,
            this.product.media,
            this.product.service_code
          ],
          tolPrice: this.product.price,
          tolInvoice: this.product.invoice_tol,
          tolEntryFee: this.product.tol_entry_fee,
          tolUserAddress: [
            this.data.billing_addr.name,
            this.data.billing_addr.lastname,
            this.data.billing_addr.houseNo,
            this.data.billing_addr.soi,
            this.data.billing_addr.streetName,
            this.data.billing_addr.district,
            this.data.billing_addr.city,
            this.data.billing_addr.province,
            this.data.billing_addr.postcode
          ]
        })
        this.$router.push(`/trueonline/order/${this.$route.params.id}`)
      }
    }
  }
</script>

<style lang="scss">
  .vdp-datepicker__calendar {
    font-size: 1.2em;
  }

  .info-button {
    color: #484848;
    text-decoration: none;
  }
</style>

<style lang="scss" scoped src="./style.scss" />
