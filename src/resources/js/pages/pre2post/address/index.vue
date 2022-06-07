<template>
  <div v-if="loaded" class="container">
    <dialog-element
      ref="dialog"
      class="terms-dialog"
      show-close-button
    >
      <div slot="content">
        <terms-element />
      </div>
    </dialog-element>
    <form
      ref="form"
      :class="{ 'invalid-form': showFormInvalid }"
    >
      <div class="label">{{ Locale.billing_title[$i18n.locale] }}</div>
      <form-element
        class="form-container billing-form"
        :data="data.billing_addr"
        :form="Address.billing_addr"
      />
      <div class="agreement-grid">
        <div>
          <div
            class="info-button"
            @click="showTermsDialog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2
                12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <span>{{ Locale.tnc[$i18n.locale] }}</span>
          </div>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="agreement" v-model="agreeTnc" />
          <label for="agreement">{{ Locale.agreement[$i18n.locale] }}</label>
        </div>
      </div>
    </form>
    <div class="button">
      <button-element
        type="button"
        :disabled="!valid"
        @click="next"
      >
        {{ Locale.next[$i18n.locale] }}
      </button-element>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Form from '@components/form'
  import Dialog from '@components/dialog'
  import Terms from '@components/terms'
  import Address from './address.json'
  import Locale from './locale.json'
  import {
    FETCH_ADDRESS
  } from '@store/actions.type'
  import { Mixins } from '../mixin.js'

  export default {
    components: {
      'button-element': Button,
      'form-element': Form,
      'dialog-element': Dialog,
      'terms-element': Terms

    },
    mixins: [Mixins],
    props: {
      data: Object
    },
    data: () => ({
      Locale,
      Address,
      form: {},
      showFormInvalid: false,
      formValid: true,
      agreeTnc: false,
      addressLoading: true,
      loaded: false
    }),
    computed: {
      packages () {
        return this.$store.state.postpaid.package.record[0]
      },
      plans () {
        return this.$store.state.postpaid.pricePlan.data.record
      },
      address () {
        return this.$store.state.address.address[this.$i18n.locale]
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
      computePostcode () {
        return (city, id) => {
          if (!id) return ''
          id = parseFloat(id)
          if (!this.address.district[city]) return ''
          const result = this.address.district[city].find((item) => item.id === id)
          return result.zip_code
        }
      },
      valid () {
        return this.formValid && this.agreeTnc
      }
    },
    watch: {
      'data.billing_addr.province_id' (id) {
        if (this.addressLoading) return
        this.formChanged('province_id', id)
      },
      'data.billing_addr.city_id' (id) {
        if (this.addressLoading) return
        this.formChanged('city_id', id)
      },
      'data.billing_addr.district_id' (id) {
        if (this.addressLoading) return
        this.formChanged('district_id', id)
      }
    },
    async mounted () {
      try {
        this.$emit('loading', true)
        if (!this.data.ekyc_passed) {
          await this.loadData()
          this.data.billing_addr = this.getAddress()
        }

        const requestAddress = [
          this.setAddress('province', this.data.billing_addr.country_id, this.data.billing_addr),
          this.setAddress('city', this.data.billing_addr.province_id, this.data.billing_addr)
        ]

        if (this.data.billing_addr.city_id) {
          requestAddress.push(
            this.setAddress('district', this.data.billing_addr.city_id, this.data.billing_addr)
          )
        }

        if (!this.data.billing_addr.city_id || !this.data.billing_addr.district_id) {
          this.data.billing_addr.postcode = ''
        }

        await Promise.all(requestAddress)
        this.addressLoading = false
        this.data.ekyc_passed = true
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        this.$router.push({
          name: 'pre2post-noneligible',
          query: {
            verify_fail: true
          }
        })
      }
    },
    methods: {
      showTermsDialog () {
        this.$refs.dialog.open()
      },
      async formChanged (type, id) {
        if (id === '_') return
        const data = JSON.parse(JSON.stringify(this.data.billing_addr))
        switch (type) {
          case 'province_id':
            this.setAddressLoading('city')
            await this.setAddress('city', id, data)
            break
          case 'city_id':
            this.setAddressLoading('district')
            await this.setAddress('district', id, data)
            break
          case 'district_id':
            await this.setPostcode()
            break
        }
      },
      setAddressLoading (type) {
        const contentId = `${type}_id`
        this.data.billing_addr[contentId] = '_'
        this.data.billing_addr.postcode = ''
        this.Address.billing_addr[contentId].disabled = true
        this.Address.billing_addr[contentId].options = [
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
        payload.language = this.$i18n.locale
        const params = Object.keys(payload)
          .map(item => `${item}=${payload[item]}`).join('&')
        return this.$store.dispatch(FETCH_ADDRESS, { type, params })
      },
      async setAddress (type, id, data) {
        this.formValid = false
        const content = this.Address.billing_addr
        const contentId = `${type}_id`
        if (!this.address[type][id]) await this.fetchAddress(type, id)
        content[contentId].disabled = false
        content[contentId].options = this.computeDropdown(type, id)
        const options = content[contentId].options.map((option) => option.id)
        const exist = options.includes(parseFloat(data[contentId]))
        this.data.billing_addr[contentId] = exist ? data[contentId] : content[contentId].options[0].id.toString()
        this.formValid = true
      },
      async setPostcode () {
        const form = this.data.billing_addr
        form.postcode = this.computePostcode(form.city_id, form.district_id)
      },
      setAddressName () {
        const address = ['city', 'province', 'district']
        address.forEach((e) => {
          const options = this.Address.billing_addr[`${e}_id`].options
          const selected = options.find(i => i.id.toString() === this.data.billing_addr[`${e}_id`])
          this.data.billing_addr[e] = selected.value
        })
      },
      async next () {
        if (!this.$refs.form.checkValidity()) {
          window.scrollTo(0, 0)
          this.showFormInvalid = true
          return
        }
        this.setAddressName()
        this.$router.push({
          name: 'pre2post-order',
          params: this.$route.params,
          query: this.$route.query
        })
      }
    }
  }
</script>

<style lang="scss">
  .terms-dialog {
    .content {
      max-height: 85%;
      max-width: 860px;
      .dialog-content {
        padding: 36px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .container {
    background: #fff;
    border-radius: 8px;
    padding: 36px 16px;
    line-height: 1em;

    form {
      max-width: 800px;
      margin: auto;

      &.invalid-form .form-container::v-deep {
        .input input:invalid {
          border-color: #ff0000;
          color: #ff0000;
        }
      }

      .label {
        margin-bottom: 16px;
        font-size: 28px;
      }

      .billing-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0 16px;
        width: calc(100% - 48px);
        margin: auto;
      }
    }

    .agreement-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 24px;
      align-items: center;

      .info-button {
        align-items: center;
        background-color: #f9c947;
        border-radius: 24px;
        height: 38px;
        padding: 8px 20px 8px 8px;
        display: inline-flex;
        line-height: 26px;
        font-size: 22px;
        cursor: pointer;
        color: #484848;
        text-decoration: none;

        svg {
          margin-right: 6px;
        }
      }

      .checkbox {
        justify-self: center;

        input {
          margin-right: 12px;
        }

        input, label {
          cursor: pointer;
        }
      }
    }

    .button {
      display: grid;
      place-items: center;
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      padding: 16px;

      .agreement-grid {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-gap: 16px;
      }
      form .billing-form {
        grid-template-columns: 1fr;
        width: 100%;
      }
    }
  }
</style>
