<template>
  <div>
    <div class="address-container">
      <div class="address-inner-container">
        <postpaid-address
          ref="postpaidAddress"
          @loading="formValid = !$event"
          @ready="loading = false"
        />
        <div class="agreement-container">
          <div>{{ Locale.agreement1[$i18n.locale] }}</div>
          <div>
            <label>
              <input type="checkbox" v-model="agreeTnc" />
              {{ Locale.agreement2[$i18n.locale] }}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" v-model="agreeCancel" />
              {{ Locale.agreement3[$i18n.locale] }}
            </label>
          </div>
        </div>
        <div class="save-button-container">
          <button-element
            @click="save"
            class="button"
            :disabled="!valid"
          >{{ Locale.address_next[$i18n.locale] }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import PostpaidAddress from '@sections/postpaid-address'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'postpaid-address': PostpaidAddress
    },
    props: ['setCustomEkyc', 'ekycAnswer', 'data'],
    data: () => ({
      Locale,
      agreeTnc: false,
      agreeCancel: false,
      formValid: true
    }),
    computed: {
      valid () {
        return this.formValid && this.agreeTnc && this.agreeCancel
      },
      isMnpOneStep () {
        return this.data.bundle.bundle.campaign_mnp_type === 'one_step'
      },
      isMnpSharePlan () {
        return this.$route.name === 'mnp-auto-verify' || this.$route.name === 'mnp-bundle-verify'
      },
      skipEkyc () {
        const skip = window.no_ekyc_device_bundle
        return (this.isMnpOneStep || this.isMnpSharePlan) && skip
      }
    },
    methods: {
      save () {
        const postpaidAddress = this.$refs.postpaidAddress
        if (!postpaidAddress.checkValidity()) {
          window.scrollTo(0, 0)
          postpaidAddress.showFormInvalid = true
          return
        }
        this.prefillShippingAddress(postpaidAddress.getFormValue())
        const postpaidAddressData = postpaidAddress.getFormValue()
        const userDetails = postpaidAddressData.userDetails
        const idCardForm = postpaidAddressData.idCardForm
        const prefix = {
          mr: 'นาย',
          mrs: 'นาง',
          miss: 'นางสาว'
        }
        const formAddress = {
          callback_url: this.skipEkyc ? null : this.ekycAnswer.callback_url,
          national_id: this.skipEkyc ? this.data.formInfo.id : this.ekycAnswer.national_id,
          prefix: (userDetails.title in prefix) ? prefix[userDetails.title] : userDetails.title,
          txt_title_other: userDetails.txt_title_other,
          first_name: userDetails.first_name,
          last_name: userDetails.last_name,
          gender: this.skipEkyc ? (userDetails.title in prefix) ? prefix[userDetails.title] === 'นาย' ? 'ชาย' : 'หญิง' : 'อื่นๆ' : this.ekycAnswer.gender,
          date_of_birth: this.skipEkyc ? this.data.formInfo.date : this.ekycAnswer.date_of_birth,
          date_of_expiration: `${userDetails.thai_id_expire_day}-${userDetails.thai_id_expire_month}-${userDetails.thai_id_expire_year - 543}`,
          mobile_no: userDetails.telephone,
          email: userDetails.email,
          home_address: idCardForm.address,
          home_district_id: idCardForm.city_id,
          home_province_id: idCardForm.province_id,
          home_subdistrict_id: idCardForm.district_id,
          home_zipcode: idCardForm.postcode,
          idCardForm: idCardForm,
          billingAddress: postpaidAddressData.useIdForm === 'true' ? idCardForm : postpaidAddressData.billingAddress
        }
        this.setCustomEkyc(formAddress)
      },
      prefillShippingAddress (data) {
        const deliveryAddress = {
          district_id: data.idCardForm.district_id,
          city_id: data.idCardForm.city_id,
          province_id: data.idCardForm.province_id,
          country_id: '209',
          postcode: data.idCardForm.district_id,
          firstname: data.userDetails.first_name,
          lastname: data.userDetails.last_name,
          phone: data.userDetails.telephone,
          email: data.userDetails.email,
          address1: data.idCardForm.address,
          address2: data.idCardForm.alley,
          useIdForm: data.useIdForm
        }
        const prefillAddress = { delivery_address: deliveryAddress }
        if (data.useIdForm !== 'true') {
          prefillAddress.billing_address = {
            district_id: data.billingAddress.district_id,
            city_id: data.billingAddress.city_id,
            province_id: data.billingAddress.province_id,
            country_id: '209',
            postcode: data.billingAddress.postcode,
            firstname: data.userDetails.first_name,
            lastname: data.userDetails.last_name,
            phone: data.userDetails.telephone,
            email: data.userDetails.email,
            address1: data.billingAddress.address,
            address2: data.billingAddress.alley,
            account_type: 'individual'
          }
        } else {
          prefillAddress.billing_address = {
            district_id: data.billingAddress.district_id,
            city_id: data.billingAddress.city_id,
            province_id: data.billingAddress.province_id,
            country_id: '209',
            postcode: data.billingAddress.postcode,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            account_type: 'individual'
          }
        }
        localStorage.setItem('address', JSON.stringify(prefillAddress))
      }
    }
  }
</script>
<style lang="scss" scoped>
  .address-container {
    background-color: #fff;
    padding: 30px 30px 60px 30px;
    border-radius: 8px;

    .address-inner-container {
      max-width: 720px;
      margin: 0 auto;
    }

    .address-title {
      font-size: 40px;
      line-height: 40px;
      font-family: "TrueBold";
      margin-bottom: 18px;
      color: #000;
      text-align: center;
    }

    .address-form {
      padding-bottom: 16px;
    }

    .form-label {
      color: #000;
      font-size: 30px;
      line-height: 27px;
      margin: 6px 0;
    }

    .form-container {
      margin-bottom: 26px;

      &::v-deep {
        label {
          line-height: 27px;
          font-family: "TrueMedium";
          font-size: 24px;
          color: #4a4a4a;
        }

        input {
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #000;
          font-family: "TrueBold";
          font-size: 24px;

          &::placeholder {
            color: #9b9b9b;
            font-family: "TrueMedium";
          }

          &[disabled] {
            border-color: #cccccc;
          }
        }
      }
    }

    .form.invalid-form .form-container::v-deep {
      .input input:invalid {
        border-color: #ff0000;
        color: #ff0000;
      }
    }

    .user-details-form::v-deep {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 14px 20px;

      .form:nth-child(1),
      .form:nth-child(4)  {
        grid-column: 1 / -1;
      }

      .name-title-container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        width: 100%;
        grid-gap: 20px;
        color: #4a4a4a;
        font-size: 24px;

        input[type="radio"] {
          margin-right: 8px;
        }

        .radio-input-container {
          display: flex;
          align-items: center;
          grid-column-end: span 2;
        }

        .radio-input-container:last-child {
          grid-column: 7/-1;
        }

        .custom-name-title-input {
          margin-left: 10px;
        }
      }

      .expiration-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        grid-gap: 20px;
      }
    }

    .id-card-form::v-deep {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 14px 20px;

      .form:first-child {
        grid-column: 1 / -1;
      }
    }

    .billing-address-same {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      margin: 10px 0;

      label {
        font-size: 24px;
        line-height: 27px;
        color: #4a4a4a;
        margin-left: 10px;
      }
    }

    .agreement-container {
      font-size: 24px;
      line-height: 35px;
      color: #666;
      border-top: 1px solid #ddd;
      padding-top: 16px;

      span {
        font-family: "TrueBold";
      }

      label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      }

      input {
        margin-right: 8px;
      }

      a {
        margin: 0 4px;
        color: #ff0000;
      }
    }

    .save-button-container {
      margin-top: 36px;
      text-align: center;

      .button {
        background: #ff0000;

        &[disabled] {
          background: #9e9e9e;
        }
      }
    }
  }
</style>
