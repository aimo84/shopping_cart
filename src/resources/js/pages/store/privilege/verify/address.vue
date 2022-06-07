<template>
  <div>
    <priceplan-info
      class="price-plan"
      :data="status"
      :postpaid-result="skipEkyc ? formInfo : postpaidResult"
      bundle
    />
    <loading-element v-show="loading" />
    <div v-show="!loading" class="address-container">
      <div class="address-container">
        <div class="address-form-container">
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
              @click="next"
              id="confirm_personal_info"
              class="button"
              :disabled="!valid"
            >{{ Locale.next[$i18n.locale] }}</button-element>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import PricePlanInfo from '@sections/priceplan-info'
  import PostpaidAddress from '@sections/postpaid-address'
  import Loading from '@components/loading'

  export default {
    components: {
      'button-element': Button,
      'priceplan-info': PricePlanInfo,
      'postpaid-address': PostpaidAddress,
      'loading-element': Loading
    },
    props: {
      formInfo: Object,
      skipEkyc: Boolean
    },
    data: () => ({
      agreeTnc: false,
      agreeCancel: false,
      formValid: false,
      loading: true,
      status: {},
      Locale: {
        next: {
          th: 'ดำเนินการต่อ',
          en: 'Next'
        },
        agreement1: {
          th: 'กรอกข้อมูลให้ครบถ้วน และกด "ดำเนินการต่อ" เพื่อบันทึก',
          en: 'Please complete the information. Click "Next" to save the information.'
        },
        agreement2: {
          th: 'ฉันยอมรับข้อและตกลงเงื่อนไขการให้บริการสำหรับลงทะเบียนและสั่งซื้อซิมออนไลน์ในทุกกรณี',
          en: 'I accept Terms and conditions ordering SIMs and registering SIMs online in all respects.'
        },
        agreement3: {
          th: 'ทางบริษัทขอสงวนสิทธิ์ในการแจ้งยกเลิกการให้บริการในทุกกรณี',
          en: 'The company reserves the right to cancel the order and refund all cases.'
        }
      }
    }),
    computed: {
      valid () {
        return this.formValid && this.agreeTnc && this.agreeCancel
      },
      ekycStatus () {
        return this.$store.state.ekyc.ekycStatus
      },
      ekycAnswers () {
        const answers = {}
        if (!this.ekycStatus.answers) return
        this.ekycStatus.answers.forEach((e) => {
          answers[e.question] = e.value
        })
        return answers
      },
      postpaidResult () {
        return {
          thai_id: this.ekycAnswers.national_id,
          birth_date: this.ekycAnswers.date_of_birth
        }
      }
    },
    methods: {
      next () {
        const postpaidAddress = this.$refs.postpaidAddress
        this.prefillShippingAddress(postpaidAddress.getFormValue())             
        if (!postpaidAddress.checkValidity()) {
          window.scrollTo(0, 0)
          postpaidAddress.showFormInvalid = true
          return
        }
        this.$parent.page = 'checking'
        this.$parent.computeCart()
        this.loading = true
        postpaidAddress.showFormInvalid = false
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
  .price-plan {
    max-width: 1100px;
    margin: 24px auto;
  }
  .address-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: auto;

    .address-form-container {
      max-width: 720px;
      margin: auto;
      text-align: left;
      padding: 24px 0;
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

  @media screen and (max-width: 1148px) {
    .price-plan {
      margin: 24px 16px;
    }
  }

  @media screen and (max-width: 860px) {
    .price-plan {
      margin: 16px auto;
    }

    .address-container {
      .agreement-container {
        line-height: 20px;
        font-size: 20px;

        & > div {
          margin-bottom: 8px;
        }

        label {
          display: block;
        }
      }
    }
  }
</style>
