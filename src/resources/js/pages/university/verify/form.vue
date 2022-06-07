<template>
  <div>
    <terms-element ref="terms" />
    <picture>
      <source srcset="/images/university/StirpEDU_sendTMH.jpg" media="(min-width: 640px)">
      <img class="cover" srcset="/images/university/StirpEDU_sendTMH.jpg">
    </picture>
    <div class="verify-container">
      <div class="verify-form-container">
        <div class="title">{{ Locale.verify_title[$i18n.locale] }}</div>
        <div class="subtitle">{{ Locale.verify_subtitle[$i18n.locale] }}</div>
        <form ref="form">
          <form-element
            :data="data"
            :form="Content"
            class="form"
            :class="{ 'invalid-form': showFormInvalid }"
          >
            <template v-slot:cardtype="item">
              <div class="input_container radio">
                <label>{{ item.data.label[$i18n.locale] }}: <span class="required">*</span></label>
                <div class="radio-container">
                  <div class="radio">
                    <input type="radio" v-model="data.cardtype" value="idcard" id="idcard">
                    <label for="idcard">{{ item.data.value.idcard[$i18n.locale] }}</label>
                  </div>
                  <div class="radio">
                    <input type="radio" v-model="data.cardtype" value="passport" id="passport">
                    <label for="passport">{{ item.data.value.passport[$i18n.locale] }}</label>
                  </div>
                </div>
              </div>
            </template>
            <template slot="university">
              <div class="input_container">
                <label>{{ Content.university.label[$i18n.locale] }}: <span class="required">*</span></label>
                <university-input
                  class="input"
                  type="text"
                  v-model="university"
                  :placeholder="Content.university.placeholder"
                  @select="selectUniversity"
                  @blur="validateUniversity"
                />
              </div>
            </template>
          </form-element>
        </form>
      </div>
    </div>
    <div class="confirm-container">
      <div class="agreement">
        <input name="agreement" id="agreement" type="checkbox" v-model="agreement">
        <span class="agreement-label">
          <label for="agreement">{{ Locale.tnc_1[$i18n.locale] }}</label>
          <span class="a" @click="$refs.terms.open()">{{ Locale.tnc_2[$i18n.locale] }}</span>
          <label for="agreement">{{ Locale.tnc_3[$i18n.locale] }}</label>
        </span>
      </div>
      <div class="verify-button-container">
        <a href="/online-store">
          <button-element
            class="button back"
          >{{ Locale.backHomepage[$i18n.locale] }}</button-element>
        </a>
        <button-element
          class="button"
          @click="verify"
          :disabled="!agreement"
        >{{ Locale.verify[$i18n.locale] }}</button-element>
      </div>
    </div>
    <div class="social-banner" ref="social">
      <div class="close-btn" @click="$refs.social.setAttribute('hidden', '')">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <img src="/images/university/supercooltrueteen.png" />
      <div class="social-banner-text">
        <span>ติดตามสิทธิพิเศษ</span>
        <span>สำหรับวัยทีนที่แท้ทรู </span>
        <span>ได้ที่ Line</span>
        <span class="bold">@supercooltrueteens</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Form from '@components/form'
  import Button from '@components/button'
  import UniversityInput from './university-input'
  import Terms from './terms'
  import Content from './Content.json'
  import Locale from './locale.json'

  export default {
    components: {
      'form-element': Form,
      'button-element': Button,
      'university-input': UniversityInput,
      'terms-element': Terms
    },
    data: () => ({
      data: {
        cardtype: 'idcard',
        id: '',
        name: '',
        msisdn: '',
        university: {}
      },
      university: '',
      agreement: false,
      Locale,
      Content,
      showFormInvalid: false
    }),
    watch: {
      'data.id' (value) {
        if (this.data.cardtype === 'idcard') {
          this.setThaiIdInvalid(this.validateCitizenId(value))
        }
      },
      'data.cardtype' (value) {
        if (value === 'passport') {
          this.setThaiIdInvalid(true)
          this.Content.id = {
            class: 'id-input',
            inputmode: '',
            type: 'text',
            required: true,
            pattern: '.{1,13}',
            placeholder: {
              th: 'หมายเลขพาสปอร์ต',
              en: 'Enter your passport'
            },
            error: {
              th: 'กรุณากรอกพาสปอร์ตให้ถูกต้อง',
              en: 'Please enter correct passport'
            }
          }
        } else {
          this.Content.id = {
            class: 'id-input',
            inputmode: 'numeric',
            type: 'text',
            required: true,
            pattern: '[0-9]{13,13}',
            placeholder: {
              th: 'หมายเลขบัตรประจำตัวประชาชน 13 หลัก',
              en: 'Enter your Thai ID (13 Digits).'
            },
            error: {
              th: 'กรุณากรอกบัตรประชาชนให้ถูกต้อง',
              en: 'Please enter correct Thai ID'
            }
          }
        }
      }
    },
    methods: {
      setThaiIdInvalid (valid) {
        const value = valid ? '' : 'invalid'
        this.$refs.form.querySelector('input[name="id"]').setCustomValidity(value)
      },
      selectUniversity (value) {
        this.university = value.name
        this.data.university = value
      },
      verify () {
        const validId = this.data.cardtype === 'idcard' ? this.validateCitizenId(this.data.id) : true
        if (!this.$refs.form.checkValidity() || !validId) {
          this.showFormInvalid = true
          return
        }
        this.$parent.verify({
          name: this.data.name,
          msisdn: this.data.msisdn,
          channel: `${this.data.university.prefix}-web`,
          university: this.data.university.name,
          'certificate-number': this.data.id
        })
      },
      validateUniversity (value) {
        if (!value) return
        if (value !== this.data.university.name) {
          this.university = ''
          this.data.university = {}
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cover {
    width: 100%;
    display: block;
    margin-bottom: 30px;
  }

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
    }
    .subtitle {
      margin-bottom: 24px;
      line-height: 24px;
      white-space: pre-line;
    }

    .form::v-deep {
      max-width: 600px;
      margin: auto;

      .input_container {
        &.radio {
          margin-bottom: 8px;
        }

        &.id-input {
          min-height: 40px;
        }
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
    }

    .radio-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      text-align: left;

      input,
      label {
        cursor: pointer;
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
  .social-banner {
    padding: 48px 30px 36px 30px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.21);
    background-color: #e9242b;
    max-width: 220px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    line-height: 24px;
    position: fixed;
    right: 0;
    bottom: 24px;
    z-index: 1;
    transition: 150ms right ease;

    &[hidden] {
      right: -240px;
      display: block;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      left: 12px;
      top: 12px;
      color: #fff;
      padding: 4px;
      cursor: pointer;

      svg {
        fill: #fff;
      }

      &:hover {
        background: #ffffff50;
      }
    }

    img {
      width: 148px;
      height: 148px;
      margin-bottom: 15px;
      border-radius: 8px;
    }

    .bold {
      font-family: "TrueBold";
    }
  }

  @media screen and (max-width: 860px) {
    .social-banner {
      position: relative;
      top: 24px;
      padding: 20px;
      max-width: 400px;
      display: flex;
      align-items: center;
      margin: auto;
      border-radius: 20px;

      &[hidden] {
        right: auto;
        display: flex;
      }

      .close-btn {
        display: none;
      }

      img {
        margin: 0 16px 0 0;
      }

      .social-banner-text {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .social-banner {
      margin: 0 20px;
      font-size: 20px;
      line-height: 20px;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
