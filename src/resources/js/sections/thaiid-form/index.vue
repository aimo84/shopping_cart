<template>
  <div>
    <dialog-element
      ref="dialog"
      class="terms-dialog"
      showCloseButton
    >
      <div slot="content">
        <terms-element />
      </div>
    </dialog-element>
    <loading-element v-show="loading" />
    <div v-show="!loading" class="address-container">
      <div class="address-inner-container">
        <div class="title">
          <template v-if="(product === 'sim' && simType === 'postpaid') || product === 'postpaid'"> {{ Locale.user_information_form.postpaid_sim_only_title[$i18n.locale] }}</template>
          <template v-else-if="(product === 'sim' && simType === 'prepaid')">{{ Locale.user_information_form.prepaid_sim_only_title[$i18n.locale] }}</template>
          <template v-else>{{ Locale.user_information_form.title[$i18n.locale] }}</template>
        </div>
        <div class="sub-title" :class="{'text-error':ageError}">{{ Locale.user_information_form.sub_title_1[$i18n.locale] }}</div>
        <div class="sub-title sub-title-2" :class="{'text-error':ageError}">{{ Locale.user_information_form.sub_title_2[$i18n.locale] }}</div>
        <div class="line"></div>
        <div class="form-wrap">
          <form>
            <!-- Redeem Code -->
            <div class="form-label" v-show='isCampaignRedeem || isCampaignRedeemFreeDevice'>{{ Locale.redeem_code[$i18n.locale] }}</div>
            <div class="form-input" v-show='isCampaignRedeem || isCampaignRedeemFreeDevice'>
              <input :class="{'input-error':redeemCodeError}" class="redeemcode-input" type="text" v-model="redeemCode" @input="checkRedeemCode" :placeholder="[[Locale.redeem_code.placeholder[$i18n.locale]]]">
              <div v-if="redeemCodeError" class="text-error">{{ Locale.redeem_code.error[$i18n.locale] }}</div>
            </div>
            <!-- Thai ID -->
            <div class="form-label" v-show="product !== 'pre_to_post'">{{ Locale.user_information_form.thai_id[$i18n.locale] }}</div>
            <div class="form-input" v-show="product !== 'pre_to_post'">
              <input :class="{'input-error':thaiIdError}" class="thaiid-input" type="text" v-model="thaiId" @input="validateThaiNationalID" :placeholder="[[Locale.user_information_form.customerDetail.thai_id.placeholder[$i18n.locale]]]">
              <div v-if="thaiIdError" class="text-error">{{ Locale.user_information_form.customerDetail.thai_id.error[$i18n.locale] }}</div>
            </div>
            <!-- Birth Date -->
            <div class="form-label">{{ Locale.user_information_form.date_of_birth[$i18n.locale] }}</div>
            <div class="date">
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ date.day + 1 }}</span>
                </div>
                <select id="day" v-model="date.day">
                  <option v-for="(day, key) in days" :key="key" :value="day">{{
                    day + 1
                  }}</option>
                </select>
              </div>
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ months[date.month] }}</span>
                </div>
                <select id="month" v-model="date.month">
                  <option v-for="(month, key) in months" :key="key" :value="key">{{
                    month
                  }}</option>
                </select>
              </div>
              <div class="dropdown">
                <div class="dropdown-label">
                  <span>{{ date.year + 543 }}</span>
                </div>
                <select id="year" v-model="date.year">
                  <option v-for="(year, key) in years" :key="key" :value="year">{{
                    year + 543
                  }}</option>
                </select>
              </div>
            </div>
            <!-- Ekyc element -->
            <ekyc-element :class="{'hide-ekyc-element': !isVlearn}" v-model="ekyc" :vlearn="isVlearn" hide-note vlearn-only  @input="getEkycData" />
          </form>
        </div>
        <div class="term-condition">
          <label>
            <div class="first-line">
              <input type="checkbox" v-model="agreeTnc" @click="setStatusCheckBox" />
              <div class="text">{{ Locale.user_information_form.agreement[$i18n.locale] }}</div>
            </div>
          </label>
          <label>
            <div class="second-line">
              <div class="showTermsDialogClass" @click="showTermsDialog">
                {{ Locale.user_information_form.read_agreement[$i18n.locale] }}
              </div>
            </div>
          </label>
        </div>
        <div class="save-button-container">
          <button-element id="prevalidate-ekyc" @click="save" class="button" :disabled="termAndCondtionCheckboxDisabled">{{ Locale.address_next[$i18n.locale] }}</button-element>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '@components/loading'
  import Locale from './locale.json'
  import Button from '@components/button'
  import Dialog from '@components/dialog'
  import Terms from '@components/terms'
  import Ekyc from '@components/ekyc'

  export default {
    components: {
      'button-element': Button,
      'loading-element': Loading,
      'dialog-element': Dialog,
      'terms-element': Terms,
      'ekyc-element': Ekyc
    },
    props: ['next', 'product', 'productInfo', 'isCampaignRedeem', 'isVlearn', 'isCampaignRedeemFreeDevice'],
    data: () => ({
      loading: false,
      Locale,
      thaiId: '',
      redeemCode: '',
      thaiIdError: false,
      redeemCodeError: false,
      ageError: false,
      date: {
        day: 0,
        month: 0,
        year: ''
      },
      expDate: {
        day: 0,
        month: 0,
        year: ''
      },
      agreeTnc: false,
      ekyc: {
        status: {
          vlearn: false
        },
        data: {
          vlearn: ''
        },
        temp: {
          vlearn: ''
        },
        filename: {
          vlearn: ''
        },
        error: {
          vlearn: {}
        }
      },
      statusCheckBox: false
    }),
    computed: {
      currentYear () {
        return new Date().getFullYear()
      },
      years () {
        const years = []
        for (let year = this.currentYear; year > 1899; year--) years.push(year)
        return years
      },
      expYears () {
        const years = []
        for (let year = this.currentYear + 543; year < 2644; year++) years.push(year)
        return years
      },
      months () {
        return [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12'
        ]
      },
      days () {
        const total = new Date(this.date.year, this.date.month + 1, 0).getDate()
        return [...Array(total).keys()]
      },
      birthdate () {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const d = new Date(this.date.year, this.date.month, this.date.day + 1)
        return d.toLocaleDateString('en-GB', options)
      },
      expdate () {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }
        const d = new Date(this.expDate.year - 543, this.expDate.month, this.expDate.day + 1)
        return d.toLocaleDateString('en-GB', options)
      },
      termAndCondtionCheckboxDisabled () {
        if (this.isVlearn) {
          return !this.agreeTnc || !this.statusCheckBox
        } else {
          return !this.statusCheckBox
        }
      },
      simType () {
        return this.productInfo && this.productInfo.product_sim ? this.productInfo.product_sim.simType : ''
      }
    },
    watch: {
      agreeTnc () {
        if (this.isVlearn) {
          if (this.ekyc.data.vlearn && this.ekyc.filename.vlearn && this.statusCheckBox) {
            this.agreeTnc = true
          } else {
            this.agreeTnc = false
          }
        }
      }
    },
    mounted () {
      this.date.year = this.currentYear
      this.expDate.year = this.expYears[0]
    },
    methods: {
      async save () {
        if (this.invalidateBirthdate()) {
          this.ageError = true
          window.scrollTo(0, 0)
          return
        }
        if ((this.isCampaignRedeem || this.isCampaignRedeemFreeDevice) && !this.checkRedeemCode()) {
          this.redeemCodeError = true
          window.scrollTo(0, 0)
          return
        }

        if (this.product === 'pre_to_post' && !this.invalidateBirthdate()) {
          this.next('', this.birthdate, this.redeemCode)
        } else if (this.product === 'sim' && this.validateThaiNationalID() && !this.invalidateBirthdate()) {
          this.next(this.thaiId, this.birthdate, this.expdate)
        } else if (this.validateThaiNationalID() && !this.invalidateBirthdate() && this.ekyc.data.vlearn && this.ekyc.filename.vlearn && this.statusCheckBox) {
          this.next(this.thaiId, this.birthdate, null, this.redeemCode, this.ekyc)
        } else if (this.validateThaiNationalID() && !this.invalidateBirthdate()) {
          this.next(this.thaiId, this.birthdate, null, this.redeemCode)
        }
      },
      validateThaiNationalID () {
        const id = this.thaiId
        if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
          this.thaiIdError = true
          return false
        }
        let i; let sum = 0
        for ((i = 0), (sum = 0); i < 12; i++) {
          sum += parseInt(id.charAt(i)) * (13 - i)
        }
        const check = (11 - sum % 11) % 10
        if (check === parseInt(id.charAt(12))) {
          this.thaiIdError = false
          return true
        }
        this.thaiIdError = true
        return false
      },
      invalidateBirthdate () {
        const current = new Date()
        let age = current.getFullYear() - this.date.year - 1
        if (current.getMonth() - this.date.month > 0 || (current.getMonth() - this.date.month === 0 && current.getDate() - this.date.day >= 0)) {
          age++
        }
        this.ageError = age < 17
        return this.ageError
      },
      checkRedeemCode () {
        if (!this.redeemCode) {
          this.redeemCodeError = true
          return false
        }
        this.redeemCodeError = false
        return true
      },
      showTermsDialog () {
        this.trackAnalytics(
          'track_event',
          'personal_information_and_address',
          'click',
          'next'
        )
        this.$refs.dialog.open()
      },
      trackAnalytics (event, eventCategory, eventAction, eventLabel) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event,
          event_category: eventCategory,
          event_action: eventAction,
          event_label: eventLabel
        })
      },
      getEkycData (ekycData) {
        if (ekycData) {
          this.ekyc = ekycData
        }

        if (this.isVlearn) {
          if (this.ekyc.data.vlearn && this.ekyc.filename.vlearn && this.statusCheckBox) {
            this.agreeTnc = true
          }
        }
      },
      setStatusCheckBox () {
        if (this.statusCheckBox === false) {
          this.statusCheckBox = true
        } else {
          this.statusCheckBox = false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

.terms-dialog {
  .content {
    max-height: 85%;
    max-width: 860px;
    .dialog-content {
      padding: 36px;
    }
  }
}

.address-container {
  background: #fff;
  border-radius: 8px;
  padding: 36px 16px;
  font-size: 24px;

  .address-inner-container {
    max-width: 950px;
    margin: auto;
  }
  .line {
    border-top: 1px solid #ddd;
    margin: 25px 0px 25px 0px;
  }
}

.thaiid-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 150ms border-color ease;
  font-family: TrueMedium;
  font-size: 24px;
  line-height: normal;
  font-weight: lighter;
  outline: none;
}

.redeemcode-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 150ms border-color ease;
  font-family: TrueMedium;
  font-size: 24px;
  line-height: normal;
  font-weight: lighter;
  outline: none;
}

.text-error {
  font-size: 20px;
  color: red !important
}

.input-error {
  border: 1px solid red !important;
}

.save-button-container {
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: auto;
  button {
    width: 100%;
  }
}

.title {
  font-size: 40px;
  text-align: center;
}

.sub-title {
  font-size: 21px;
  text-align: center;
}
.sub-title-2 {
    line-height: 15px;
    color: #777;
}

form {
  .form-label {
    margin: auto;
    max-width: 300px;
    font-size: 30px;
    text-align: center;
  }
  .form-input {
    margin: auto;
    max-width: 300px;
    margin-bottom: 20px;
  }
}

.date {
  margin: auto;
  max-width: 300px;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 8px;

  .dropdown {
    position: relative;

    .dropdown-label {
      pointer-events: none;
      height: 40px;
      font-size: 24px;
      font-family: 'TrueMedium';
      border-radius: 8px;
      border: 1px solid black;
      color: #333;
      padding: 0 12px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-gap: 4px;

      span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &:after {
        content: '';
        width: 11px;
        height: 6px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxbDUuNSA1LjVMMTIgMSIgc3Ryb2tlPSIjMjIyMjIzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=');
      }
    }

    select {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      font-size: 16px;
      font-family: Arial;
    }
  }
}

.ekyc-container {
  &.hide-ekyc-element {
    display: none;
  }

  text-align: center;
  margin: 80px auto auto auto;
  max-width: 600px;
}

.term-condition {
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  display: flex;
  flex-direction: column;
}
.term-condition label .first-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.term-condition label .first-line input {
  margin-top: 6.5px;
}
.term-condition label .first-line .text {
  margin-left: 3px;
  color: #000;
  font-family: "TrueBold";
  font-style: normal;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.39px;
}
.term-condition label .second-line .showTermsDialogClass {
  color : #29ABE2;
  cursor: pointer;
  font-family: "TrueBold";
  font-style: normal;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.39px;
  margin-left: 8px;
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  .sub-title {
    width: 270px;
    margin: auto;
  }
}
</style>
