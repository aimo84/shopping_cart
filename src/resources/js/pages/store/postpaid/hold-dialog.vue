<template>
  <dialog-element ref="dialog" class="dialog" @onClose="$emit('on-close')">
    <div slot="content">
      <div class="close-container">
        <div class="close" @click="$refs.dialog.close()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <img class="timeout-icon" src="/images/icons/timeout.png" />
      <div class="title">{{ locale.sorry[$i18n.locale] }}</div>
      <div class="number-container">
        <div class="number-label">{{ locale.number[$i18n.locale] }}</div>
        <div class="number-value">{{ number }}</div>
      </div>
      <div class="error-message-container">
        <div>{{ locale.error1[$i18n.locale] }}</div>
        <div>{{ locale.error2[$i18n.locale] }}</div>
      </div>
      <div class="message-container">{{ locale.message[$i18n.locale] }} <span>{{ locale.messageBack[$i18n.locale] }}</span></div>
      <div class="button-container">
        <button-element class="button" @click="$refs.dialog.close()">{{ locale.back[$i18n.locale] }}</button-element>
      </div>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  import Button from '@components/button'

  export default {
    components: {
      'dialog-element': Dialog,
      'button-element': Button
    },
    data: () => ({
      number: '',
      locale: {
        sorry: {
          en: 'This number is no longer valid. Please select another number and proceed again.',
          th: 'เบอร์ที่ท่านเลือกได้ถูกจองไว้ก่อนแล้ว กรุณามาเลือกเบอร์อื่นแล้วทำรายการใหม่อีกครั้ง'
        },
        number: {
          en: 'Your mobile number',
          th: 'ขณะนี้เบอร์'
        },
        error1: {
          en: 'Another customer reserved this mobile number already.',
          th: 'มีลูกค้าท่านอื่นทำการจองเรียบร้อยแล้ว'
        },
        error2: {
          en: 'The system will remove this mobile number from your reservation.',
          th: 'ระบบจะทำการลบเบอร์ออกจากการจองของคุณอัตโนมัติ'
        },
        message: {
          en: 'You could back to select mobile number by click ',
          th: 'คุณสามารถกลับไปเลือกเบอร์เพิ่มเติมโดยกดปุ่ม '
        },
        messageBack: {
          en: '"Back to select mobile number"',
          th: '"กลับไปเลือกเบอร์"'
        },
        back: {
          en: 'Back to select mobile number',
          th: 'กลับไปเลือกเบอร์'
        }
      }
    }),
    methods: {
      open (number) {
        this.number = number
        this.$refs.dialog.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
.dialog::v-deep .content {
  max-width: 900px;
}

.dialog {
  text-align: center;

  .close-container {
    display: flex;
    justify-content: flex-end;

    .close {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        fill: #9a9a9a;
      }

      &:hover {
        background: #e3e3e3;
      }
    }
  }

  .timeout-icon {
    width: 120px;
  }
  .title {
    margin: 18px auto 10px auto;
    max-width: 720px;
    font-family: "TrueBold";
    font-size: 40px;
    line-height: 38px;
    color: #ff0000;
  }
  .number-container {
    padding: 14px;
    max-width: 400px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: auto auto 14px auto;

    .number-label {
      color: #4a4a4a;
      font-size: 20px;
      line-height: 20px;
    }
    .number-value {
      margin-top: 14px;
      font-family: "TrueBold";
      font-size: 40px;
      line-height: 20px;
      color: #000;
    }
  }
  .error-message-container {
    color: #ff0000;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .message-container {
    color: #666;
    font-size: 24px;
    line-height: 24px;

    span {
      font-family: "TrueBold";
    }
  }
  .button-container {
    margin: 14px auto 36px auto;

    .button {
      background-color: #ff0000;
    }
  }
}
</style>
