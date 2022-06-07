<template>
  <div>
    <true-online-dialog ref="trueOnlineDialog" />
    <div class="verify-container">
      <div class="verify-form-container">
        <div class="title">{{ verifyTitle[$i18n.locale] }} <span> <a href="#" @click="openReason()"> {{ verifyLink[$i18n.locale] }} </a></span></div>
          <template>
              <dialog-element class="dialog" ref="dialog">
                  <template slot="content">
                      <div class="header">
                          <span class="header-title">เหตุผลดีๆ ที่ควรเปลี่ยนเป็นรายเดือน</span>
                          <div class="close-btn" @click="$refs.dialog.close()">
                              <svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.25 11.1094C0.914062 11.4531 0.898438 12.0625 1.25781 12.4141C1.61719 12.7656 2.21875 12.7578 2.5625 12.4219L7 7.98438L11.4297 12.4219C11.7812 12.7656 12.3828 12.7734 12.7344 12.4141C13.0859 12.0547 13.0938 11.4609 12.7422 11.1094L8.30469 6.67188L12.7422 2.24219C13.0938 1.89062 13.0938 1.28906 12.7344 0.9375C12.375 0.585938 11.7812 0.585938 11.4297 0.929688L7 5.36719L2.5625 0.929688C2.21875 0.59375 1.60938 0.578125 1.25781 0.9375C0.90625 1.29688 0.914062 1.89844 1.25 2.23438L5.6875 6.67188L1.25 11.1094Z" fill="white"/>
                              </svg>
                          </div>
                      </div>
                      <div class="tnc-content">
                          <div class="container">
                              <div class="items">
                                  <img src="/images/pre2post/group_note.png" alt="">
                                  <h5 class="sub-header">จ่ายบิลสะดวก รวดเร็ว</h5>
                                  <p class="description">
                                      หลากหลายช่องทางที่ทรูช้อป, ธนาคาร, <br>
                                      เคาน์เตอร์เซอร์วิส, 7-eleven, <br>
                                      ที่ทำการไปรษณีย์ และ True Money Wallet
                                  </p>
                              </div>
                              <div class="items">
                                  <img src="/images/pre2post/group_message.png" alt="">
                                  <h5 class="sub-header">เปลี่ยนเป็นรายเดือนได้โทรฟรี</h5>
                                  <p class="description">
                                      เงินที่เติมไว้ยังใช้ไม่ไม่หมด <br>
                                      "เปลี่ยนเป็นรายเดือนได้โทรฟรี" สิทธิพิเศษ <br>
                                      ให้โทรเท่าเงินคงเหลือเมื่อเกินโปรโมชั่น
                                  </p>
                              </div>
                              <div class="items">
                                  <img src="/images/pre2post/group_pig.png" alt="">
                                  <h5 class="sub-header">ค่าใช้จ่ายไม่บานปลาย</h5>
                                  <p class="description">
                                      แจ้งเตือนเมื่อเกินแพ็กเกจ
                                  </p>
                              </div>
                              <div class="items">
                                  <img src="/images/pre2post/group_cal.png" alt="">
                                  <h5 class="sub-header">ใช้งานได้ต่อเนื่อง</h5>
                                  <p class="description">
                                      ไม่ต้องเติมเงิน เติมวัน ใช้ก่อนจ่าย <br>
                                      ทีหลังไม่พลาดทุกการติดต่อ
                                  </p>
                              </div>
                          </div>
                      </div>
                  </template>
              </dialog-element>
          </template>
        <div class="subtitle">{{ verifySubtitle[$i18n.locale] }}</div>
        <form ref="form">
          <form-element
            :data="data"
            :form="Content.form"
            class="form"
            :class="{ 'invalid-form': showFormInvalid }"
          >
            <template slot="birthday">
              <div class="input_container">
                <label>{{ Content.form.birthday.label[$i18n.locale] }}: <span class="required">*</span></label>
                <div class="birthday-container">
                  <dropdown-element
                    v-model="data.birthday.day"
                    :options="Content.date.day"
                  />
                  <dropdown-element
                    v-model="data.birthday.month"
                    :options="Content.date.month[$i18n.locale]"
                  />
                  <dropdown-element
                    v-model="data.birthday.year"
                    :options="Content.date.year"
                  />
                </div>
              </div>
            </template>
            <template v-if="!isRestriction" slot="truemoveh">
              <div class="input_container text">
                <label>{{ Content.form.truemoveh.label[$i18n.locale] }}: <span class="required">*</span></label>
                <div class="otp-container">
                  <div class="input">
                    <input-element
                      type="text"
                      :placeholder="Content.form.truemoveh.placeholder[$i18n.locale]"
                      v-model="data.truemovehNumber"
                      pattern="[0-9]{9,10}"
                      inputmode="tel"
                      required
                    />
                  </div>
                  <button-element
                    class="button"
                    :disabled="!validTruemovehNumber || otp.otpLoading"
                    @click="fetchOtp"
                  >{{ Content.form.otp.button[$i18n.locale] }}</button-element>
                </div>
                <div
                  class="otp-error-message"
                  v-if="Object.keys(otp.otpError).length !== 0"
                >{{ otp.otpError[$i18n.locale] }}</div>
              </div>
            </template>
          </form-element>
        </form>
      </div>
    </div>
    <div class="confirm-container">
      <div
        v-if="typeId === '5' || pre2post"
        class="info-button-container"
      >
        <a
          class="info-button"
          :href="tncUrl"
          download
        >
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
          <span>{{ Locale.tnc_label[$i18n.locale] }}</span>
        </a>
      </div>
      <div
        class="agreement"
        v-if="data.service !== 'trueonline'"
      >
        <input name="agreement" id="agreement" type="checkbox" v-model="agreement">
        <span class="agreement-label">
          <label for="agreement">{{ Locale.tnc[$i18n.locale] }}</label>
        </span>
      </div>
      <div class="verify-button-container">
        <router-link
          v-if="!pre2post"
          :to="`/online-store/item/${product.id}`"
        >
          <button-element
            class="button back"
            id="back_homepage"
          >{{ Locale.backHomepage[$i18n.locale] }}</button-element>
        </router-link>
        <button-element
          class="button"
          :id="(existingCampaign && 'submit_existing_details') || (pre2post && 'check_eligibility')"
          @click="verify"
          :disabled="!formValid"
        >
          <template
            v-if="data.service === 'trueonline'"
          >{{ Locale.next[$i18n.locale] }}</template>
          <template
            v-else-if="pre2post"
          >{{ Locale.check_eligibility[$i18n.locale] }}</template>
          <template v-else> {{ Locale.submit[$i18n.locale] }}</template>
        </button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Form from '@components/form'
  import Button from '@components/button'
  import Input from '@components/input'
  import Dropdown from '@components/dropdown'
  import TrueOnlineDialog from '@components/true-online-dialog'
  import Content from './Content.json'
  import Locale from './locale.json'
  import Dialog from '@components/dialog'

  import {
    FETCH_OTP
  } from '@store/actions.type'

  export default {
    components: {
      'form-element': Form,
      'button-element': Button,
      'input-element': Input,
      'dropdown-element': Dropdown,
      'true-online-dialog': TrueOnlineDialog,
      'dialog-element': Dialog
    },
    props: {
      config: Object,
      product: Object,
      multiCampaign: Boolean,
      existingCampaign: Boolean,
      typeId: String,
      title: Object,
      link: Object,
      subtitle: Object,
      pre2post: Boolean
    },
    data: () => ({
      data: {
        id: '',
        truemovehNumber: '',
        service: '',
        birthday: {
          day: '1',
          month: '1',
          year: '1'
        }
      },
      otp: {
        otpLoading: false,
        otpReceived: false,
        otpError: {}
      },
      validTruemovehNumber: false,
      showFormInvalid: false,
      agreement: false,
      Content,
      Locale
    }),
    computed: {
      tncUrl () {
        if (this.pre2post) return '/files/pre2post-self-service.pdf'
        return '/files/pre2post.pdf'
      },
      formValid () {
        if (this.isRestriction) return this.agreement
        if (this.data.service === 'trueonline') return this.otp.otpReceived
        return this.otp.otpReceived && this.agreement
      },
      birthday () {
        const day = ('0' + this.data.birthday.day).slice(-2)
        const month = ('0' + this.data.birthday.month).slice(-2)
        const year = this.data.birthday.year - 543
        return `${day}/${month}/${year}`
      },
      isRestriction () {
        return this.product.product_type === 'restriction'
      },
      verifyTitle () {
        return this.title || this.Locale.verify_title
      },
      verifyLink () {
        return this.link || this.Locale.verify_link
      },
      verifySubtitle () {
        return this.subtitle || this.Locale.verify_subtitle
      }
    },
    watch: {
      'data.id' (value) {
        this.setThaiIdInvalid(this.validateCitizenId(value))
      },
      'data.truemovehNumber' (value) {
        this.validTruemovehNumber = /^[0-9]{9,10}$/.test(value.toString())
      },
      'data.birthday.month' (month) {
        this.generateDay(this.data.birthday.year, month)
      },
      'data.birthday.year' (year) {
        this.generateDay(year, this.data.birthday.month)
      }
    },
    mounted () {
      if (this.product.autofill) {
        this.data.id = this.product.autofill.thai_id
        if (this.product.autofill.thai_id) this.Content.form.id.disabled = true
      }
      const options = this.config.options
      if (this.multiCampaign) {
        const type = this.$route.query.type
        this.data.service = (type === 'truemoveh') ? 'truemove' : type
      } else {
        if (options.trueonline) {
          this.data.service = 'trueonline'
        }
        if (options.truemoveh) {
          this.data.service = 'truemove'
        }
      }
      if (this.typeId === '5') {
        this.Content.form.birthday.hidden = false
        this.generateYear()
      }
      if (this.isRestriction) {
        this.Content.form.otp.hidden = true
        this.Content.form.otp.required = false
        this.Content.form.otp.pattern = ''
      }
      if (this.pre2post) {
        this.Content.form.id.hidden = true
        this.Content.form.id.required = false
        this.Content.form.id.pattern = ''
        this.Content.form.truemoveh.label = {
          th: 'หมายเลขโทรศัพท์ที่จะเปลี่ยนเป็นรายเดือน',
          en: 'Number switching to postpaid'
        }
        this.Content.form.truemoveh.placeholder = {
          th: 'กรอกหมายเลขโทรศัพท์ที่จะเปลี่ยนเป็นรายเดือน',
          en: 'Enter TMH prepaid number'
        }
      }
    },
    methods: {
      openReason () {
        this.$refs.dialog.open()
      },
      // Day / Month / Year of Birth
      generateYear () {
        const currentYear = new Date().getFullYear() + 543 - 18
        const years = []
        for (let year = currentYear; year > 2442; year--) years.push(year)
        this.Content.date.year = years.map((year) => ({
          id: year,
          value: year
        }))
        this.data.birthday.year = currentYear.toString()
      },
      generateDay (year, month) {
        const total = new Date(year - 543, month, 0).getDate()
        this.Content.date.day = [...Array(total).keys()].map((day) => ({
          id: day + 1,
          value: day + 1
        }))
        if (parseFloat(this.data.birthday.day) > total) {
          this.data.birthday.day = total.toString()
        }
      },
      fetchOtp () {
        this.otp = {
          otpError: {},
          otpReceived: false,
          otpLoading: true
        }
        this.$store.dispatch(FETCH_OTP, this.data.truemovehNumber)
          .then((data) => {
            if (data.status_code !== 200) throw data.message
            this.otp.otpLoading = false
            this.otp.otpReceived = true
          })
          .catch((error) => {
            this.otp = {
              otpError: error,
              otpReceived: false,
              otpLoading: false
            }
          })
      },
      setThaiIdInvalid (valid) {
        const value = valid ? '' : 'invalid'
        this.$refs.form.querySelector('input[name="id"]').setCustomValidity(value)
      },
      async verify () {
        const recaptcha = await this.$recaptcha('login')
        this.showFormInvalid = false
        if (!this.$refs.form.checkValidity() || !this.validateCitizenId(this.data.id)) {
          window.scrollTo(0, 0)
          this.showFormInvalid = true
          return
        }
        const data = {
          id_number: this.data.id,
          service_name: this.data.service,
          mobile_number: this.data.truemovehNumber,
          otp: this.data.otp,
          g_recaptcha: recaptcha
        }
        if (this.typeId === '5') data.birthday = this.birthday
        this.$parent.checkVerify(data)
      },
      validateCitizenId (id) {
        if (this.Content.form.id.hidden) return true
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .verify-container {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 16px 24px 40px 24px;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: auto;

    .verify-form-container {
      max-width: 540px;
      margin: auto;
    }

    .title {
      font-family: "TrueBold";
      font-size: 30px;
      line-height: 30px;
      margin: 24px 0 16px 0;
      span {
        a {
          color: #3b99f0;
        }
      }
    }
    .subtitle {
      margin-bottom: 24px;
      line-height: 24px;
      font-size: 24px;
    }

    .form::v-deep {
      max-width: 600px;
      margin: auto;

      .see-example {
        margin-top: -4px;
        margin-bottom: 8px;
        text-decoration: underline;
        color: #ff0000;
        cursor: pointer;
      }

      .input {
        width: 100%;
      }

      &.invalid-form {
        .input input:invalid {
          border-color: #ff0000;
          color: #ff0000;

          & ~ .error {
            display: block;
          }
        }
      }

      .input input::placeholder {
        color: #b2b2b2;
      }

      .birthday-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;
      }

      .otp-container {
        display: flex;
        width: 100%;

        .button {
          background-color: #ff0000;
          min-width: 120px;
          height: 40px;
          padding: 0 12px;
          margin-left: 8px;
          border-radius: 4px;

          &[disabled] {
            pointer-events: none;
            background-color: #666;
          }
        }
      }

      .otp-error-message {
        margin: 4px 0;
        color: #ff0000;
      }
    }

    .input_container.text {
      text-align: left;
      font-size: 20px;
      margin-bottom: 16px;

      label {
        width: 100%;
        min-width: 100%;
        text-align: left;
        margin-right: 0;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .input {
        flex: 1;
      }

      .required {
        color: #fc5c65;
        font-weight: 600;
        font-size: 24px;
      }
    }
  }

  .confirm-container {
    margin-top: 24px;
    text-align: center;
    padding: 0 16px;

    .info-button-container {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;

      .info-button {
        margin: auto;
        align-items: center;
        background-color: #f9c947;
        color: #000;
        border-radius: 24px;
        height: 38px;
        padding: 8px 20px 8px 8px;
        display: flex;
        line-height: 26px;
        font-size: 22px;
        font-family: "TrueMedium";
        width: auto;
        cursor: pointer;
        text-decoration: none;

        svg {
          margin-right: 6px;
        }
      }
    }

    .agreement {
      margin-bottom: 24px;

      .agreement-label {
        line-height: 22px;
        font-size: 22px;
        cursor: pointer;

        label {
          cursor: pointer;
        }

        .a {
          color: #ff0000;
          text-decoration: underline;
        }
      }
    }

    .verify-button-container {
      display: grid;
      grid-gap: 8px 20px;
      max-width: 420px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin: 24px auto 0 auto;

      .button {
        width: 100%;
        background-color: #ff0000;

        &.back {
          background-color: #666;
        }

        &[disabled] {
          pointer-events: none;
          background-color: #666;
        }
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
      .container {
          display: grid;
          grid-template-columns: 100%;
          grid-gap: 5px;
      }
      .header-title {
          font-family: 'TrueBold';
          font-style: normal;
          font-weight: 400;
          font-size: 4.3vw;
          line-height: 4vw;
      }
      .dialog::v-deep {
          .content {
              overflow: scroll;
          }
      }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
      .container {
          display: grid;
          grid-template-columns: 100%;
      }
      .dialog::v-deep {
          .content {
              overflow: scroll;
          }
      }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
      .container {
          display: grid;
          grid-template-columns: 50% 50%;
          grid-gap: 5px;
          row-gap: 1.5em;
      }
      .dialog::v-deep {
          .content {
              overflow: hidden;
          }
      }
      .header-title {
          font-family: 'TrueBold';
          font-style: normal;
          font-weight: 400;
          font-size: 48px;
          line-height: 57px;
      }
  }
  @media screen and (max-width: 451px) {
      .confirm-container {
          .verify-button-container {
              display: flex;
              flex-direction: column-reverse;
          }
      }
  }
  .dialog::v-deep {
      .content {
          border-radius: 8px;
          max-width: 850px;
          height: 100%;
          max-height: 632px;
          .sub-header {
              font-family: 'TrueBold';
              color: #E10732;
              font-size: 30px;
              line-height: 36px;
              margin-top: 0px;
              margin-bottom: 0px;
          }
          .description {
              font-family: 'TrueMedium';
              font-size: 22px;
              line-height: 26px;
              margin-top: 0px;
          }
      }
      .dialog-content {
          padding: 0;
      }
  }

  @media only screen and (max-width: 600px) {
      .dialog::v-deep {
        .content {
          .sub-header {
              font-family: 'TrueBold';
              color: #E10732;
              font-size: 6.3vw;
              line-height: 7vw;
              margin-top: 0px;
              margin-bottom: 0px;
          }
          .description {
              font-family: 'TrueMedium';
              font-size: 5.3vw;
              line-height: 6vw;
              margin-top: 0px;
          }
        }
      }
      .header-title {
          font-family: 'TrueBold';
          font-size: 6.5vw;
          line-height: 6.3vw;
      }

  }

  .header {
      background: linear-gradient(90deg, #F29137 -6.22%, #F12084 49.53%, #A91FCC 112.39%);
      color: #fff;
      font-family: "TrueBold";
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 8px;
      padding: 12px 16px;
      align-items: center;

      .close-btn {
          width: 20px;
          height: 20px;
          cursor: pointer;
      }
  }

  .tnc-content {
      padding: 30px;

      .title {
          font-family: 'TrueBold';
          color: #E63129;
          font-size: 24px;
      }
  }
</style>
