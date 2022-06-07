<template>
  <form
    ref="ccwForm"
    class="payment-form-container"
    :class="invalidCCWForm ? 'invalid' : undefined"
  >
    <div class="card-info">
      <div class="input-container">
        <label>{{ Content.cardnumber[$i18n.locale] }} <span class="required">*</span></label>
        <div
          class="cc-number"
          ref="ccNumber"
        >
          <template v-for="index in 4">
            <input-element
              :key="index"
              type="text"
              maxlength="4"
              inputmode="numeric"
              @keydown="validateNumber"
              @keyup="ccKeyup"
              @blur="validNumber"
              v-model="ccw_data.cardnumber[index - 1]"
              required
            />
          </template>
        </div>
      </div>
      <div class="input-container">
        <label>{{ Content.cardname[$i18n.locale] }} <span class="required">*</span></label>
        <input-element
          autocomplete="cc-name"
          v-model="ccw_data.ccname"
          name="ccname"
          required
        />
      </div>
    </div>
    <div class="card-cvv">
      <div class="input-container">
        <label>{{ Content.cardexpiry[$i18n.locale] }} <span class="required">*</span></label>
        <input-element
          type="text"
          name="cc-exp"
          v-model="ccw_data['cc-exp']"
          placeholder="MM/YYYY"
          maxlength="7"
          @blur="validExpiryDate"
          required
        />
      </div>
      <div class="input-container">
        <label>{{ Content.cvv[$i18n.locale] }} <span class="required">*</span></label>
        <input-element
          type="text"
          name="cvv"
          autocomplete="cc-csc"
          maxlength="3"
          inputmode="numeric"
          v-model="ccw_data.cvv"
          @keydown="validateNumber"
          @keyup="ccKeyup"
          @blur="validCVV"
          required
        />
      </div>
    </div>
  </form>
</template>


<script>
  import cardValidator from 'card-validator'
  import Input from '@components/input'
  import Content from './content.json'
  import { validateNumber } from '@utils/common'
  import {
    GET_TOGGLE_OMISE
  } from '@store/actions.type'
  export default {
    components: {
      'input-element': Input
    },
    props: {
      truepoint_id: [String],
      cart: [Object]
    },
    data: () => ({
      Content,
      ccw_data: {
        cardnumber: ['', '', '', ''],
        ccname: '',
        cvv: '',
        'cc-exp': ''
      },
      omiseData: {},
      invalidCCWForm: false,
      ccw2C2P: false,
      isMnpOneStep: false,
    }),
    mounted() {
      let recaptcha_script = document.createElement('script')
      recaptcha_script.setAttribute('src', 'https://cdn.omise.co/omise.js')
      document.head.appendChild(recaptcha_script)

      this.isMnpOneStep = Object.keys(this.cart).find((e) => this.cart[e].is_mnp1step)
      this.ccw2C2P = this.$store.state.cart.cart.data.ccw_2c2p
    },
    methods: {
      validateNumber,
      ccKeyup (e) {
        const keyCode = e.keyCode ? e.keyCode : e.which
        if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
          if (e.target.value.toString().length > 3) {
            const next = e.target.parentElement.nextElementSibling
            if (next) next.querySelector('input').focus()
          }
        }
      },
      setInvalidForm (e, valid) {
        valid ? e.removeAttribute('invalid') : e.setAttribute('invalid', '')
      },
      validNumber () {
        const value = this.ccw_data.cardnumber.join('')
        if (value.length > 15) {
          const valid = cardValidator.number(value).isValid
          this.setInvalidForm(this.$refs.ccNumber, valid)
        }
      },
      validCVV (e) {
        const valid = cardValidator.cvv(e.target.value).isValid
        this.setInvalidForm(e.target, valid)
      },
      validExpiryDate (e) {
        const valid =
          /(0[1-9]|10|11|12)\/20[0-9]{2}$/.test(e.target.value) &&
          cardValidator.expirationDate(e.target.value).isValid
        this.setInvalidForm(e.target, valid)
      },
      computeCardType (value) {
        const first = value.toString()[0]
        return first === '5' ? '002' : '001'
      },
      computeExpiryDate (value) {
        return value.replace(/\//g, '-')
      },
      computeCreditCard (e) {
        const detail = e.cybs_detail
        const cybs = detail.cybs_credit_card_detail
        const data = {
          amount: detail.amount,
          currency: detail.currency,
          locale: detail.locale,
          reference_number: detail.reference_number,
          signed_date_time: detail.signed_date_time,
          transaction_type: detail.transaction_type,
          transaction_uuid: detail.transaction_uuid,
          card_type: this.computeCardType(this.ccw_data.cardnumber[0]),
          card_number: this.ccw_data.cardnumber.join(''),
          card_name: this.ccw_data.ccname,
          card_cvn: this.ccw_data.cvv,
          card_expiry_date: this.computeExpiryDate(this.ccw_data['cc-exp'])
        }
        const formData = { ...cybs, ...data }
        delete formData.action_url
        return formData
      },
      async createPaymentForm (e) {
        window.loadingPlaceorder = false
        var form = document.createElement('form')
        var response = e
        try {
          if (response.wepayment_detail) {
            form.method = response.wepayment_detail.method
            form.action = response.wepayment_detail.action_url
          } else {
            form.method = 'post'
            form.action = e.cybs_detail.action_url

            const data = this.computeCreditCard(e)
            Object.keys(data).forEach(item => {
              const element = document.createElement('input')
              element.setAttribute('value', data[item])
              element.name = item
              form.appendChild(element)
            })
          }
          document.body.appendChild(form)
          form.submit()
          document.body.removeChild(form)
        } catch (e) {
          try {
            window.location = response.redirectUrl;
          } catch (e) {
            window.location = response.action_url;
          }
        }

      },
      showErrors (validCardNumber, validExpiryDate, validCVV, validName, validTruePointId) {
        this.invalidCCWForm = true
        const errors = []
        if (!validCardNumber) {
          errors.push({
            th: 'หมายเลขบัตรไม่ถูกต้อง.',
            en: 'Invalid Credit Card Number.'
          })
          this.$refs.ccNumber.setAttribute('invalid', '')
        }
        if (!validExpiryDate) {
          errors.push({
            th: 'วันหมดอายุไม่ถูกต้อง.',
            en: 'Invalid Expiry Date.'
          })
        }
        if (!validCVV) {
          errors.push({
            th: 'CVV ไม่ถูกต้อง.',
            en: 'Invalid CVV.'
          })
        }
        if (!validName) {
          errors.push({
            th: 'ชื่อ-นามสกุล ที่แสดงบนบัตรไม่ถูกต้อง.',
            en: 'Invalid Card Holder Name.'
          })
        }
        if (!validTruePointId) {
          errors.push({
            th: 'True Point ID ไม่ถูกต้อง.',
            en: 'Invalid True Point ID.'
          })
        }

        this.$emit('error', errors)
      },
      validateForm () {
        this.invalidCCWForm = false
        this.$refs.ccNumber.removeAttribute('invalid')
        const ccw = JSON.parse(JSON.stringify(this.ccw_data))
        const validCardNumber = cardValidator.number(ccw.cardnumber.join('')).isValid
        const validExpiryDate =
          /(0[1-9]|10|11|12)\/20[0-9]{2}$/.test(ccw['cc-exp']) &&
          cardValidator.expirationDate(ccw['cc-exp']).isValid
        const validCVV = cardValidator.cvv(ccw.cvv).isValid
        const validName = /[^-\s]/.test(ccw.ccname)
        const validTruePointId = /^(\d{13}|)$/.test(this.truepoint_id)
        this.$refs.ccwForm.checkValidity()

        if (
          (this.ccw2C2P && !this.isMnpOneStep) ||
          (
            validCardNumber &&
            validExpiryDate &&
            validCVV &&
            validName &&
            validTruePointId
          )
        ) return ccw

        this.showErrors(validCardNumber, validExpiryDate, validCVV, validName, validTruePointId)
        return false
      },
      showErrorsOmise (validToken) {
        const errors = []
        if (!validToken) {
          errors.push({
            th: 'ไม่สามารถชำระเงินได้ในขณะนี้ กรุณาลองอีกครั้ง หรือ เลือกช่องทางการชำระเงินอื่น\nหมายเหตุ: กรณีแลกด้วย TruePoint กรุณาติดต่อ Call Center 02-020-2354',
            en: 'unable to process the payment at the moment, please try again, or choose another payment method.\nRemark: in case you redeem TruePoint, please contact Call Center 02-020-2354'
          })
        }

        this.$emit('error', errors)
      },
      createOmiseToken (form, publicKey) {
        return new Promise(function(resolve) {
          Omise.setPublicKey(publicKey);
            var cardInformation = {
              name:             form.ccname,
              number:           form.cardnumber.join(''),
              expiration_month: form.cc_exp.substring(0, 2),
              expiration_year:  form.cc_exp.substring(3, 7),
              security_code:    form.cvv
            };
              Omise.createToken('card', cardInformation,  function(statusCode, response) {
              if (statusCode === 200) {
                resolve(response)
              } else {
                resolve(false)
              }
            })
          })
      },
      getToggleCCW (data) {
        return this.$store.dispatch(GET_TOGGLE_OMISE, data)
      },
      async submit (data, placeorderAction, ccOnly = false) {
        const form = this.validateForm()
        const card_expiry_date = this.computeExpiryDate(this.ccw_data['cc-exp'])
        form.cc_exp = card_expiry_date;
        if (form) {
          data.payment_detail = {
            method: 'CCW',
            credit_number: form.cardnumber.join('').substring(0, 6)
          }

          try {
            const toggleCCW = await this.getToggleCCW({ store_id: data.products[0].store_id })
            if (
              !(this.ccw2C2P && !this.isMnpOneStep) &&
              (toggleCCW.omise_toggle === true || toggleCCW.weomni_toggle === true)
            ) {
              const creditData = await this.createOmiseToken(form, toggleCCW.token_auth)
              if (creditData) {
                this.omiseData = creditData
                data.payment_detail.card_token = creditData.id
                data.payment_detail.o_card_id = creditData.card.id
              } else {
                this.showErrorsOmise(false)
                return false
              }
            }
          } catch (e) {
            this.showErrorsOmise(false)
            return false
          }
          if (this.truepoint_id) data.point_idcard = this.truepoint_id
          if (ccOnly) {
            return { omiseData: this.omiseData, data: data }
          }
          this.$store
            .dispatch(placeorderAction, data)
            .then(result => {
              if (this.$parent.skipEkyc) localStorage.setItem('ekyc_hash', result.ekyc_hash)
              this.createPaymentForm(result)
            })
            .catch(error => {
              this.$parent.onCCWError([error.message ? error.message : this.Content.error])
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-container {
    margin-bottom: 6px;
  }

  .cc-number {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
  }

  .card-cvv {
    display: flex;

    .input-container:first-child {
      width: calc(65% - 16px);
      margin-right: 16px;
    }

    .input-container:last-child {
      width: 35%;
    }
  }

  label {
    font-size: 20px;
    line-height: 20px;
    color: #37474f;
    font-weight: 500;

    .required {
      font-family: "TrueMedium";
      color: #fc5c65;
      font-weight: 600;
      font-size: 24px;
    }
  }
</style>
