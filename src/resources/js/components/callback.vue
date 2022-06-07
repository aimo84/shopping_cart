<template>
  <div v-if="fabShow && !callbackType">
    <div
      class="fab"
      :class="{'show-text': fabShowText}"
      @click="$refs.dialog.open()"
    >
      <img src="/images/icons/call-center.svg" />
      <div class="label">{{content.title_top[$i18n.locale]}} <br/> {{content.title_bottom[$i18n.locale]}}</div>
    </div>
    <dialog-element
      ref="dialog"
      class="dialog"
    >
      <template slot="content">
        <div class="header">
          <img src="/images/icons/call-center.svg" />
          <div class="bubble">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5 7.4" width="8.85" fill="none">
              <path clip-rule="evenodd" d="M14.014 1a5 5 0 00-5 5v22.4L2 35h7.014v4a5 5 0 005 5H154.5a5 5 0 005-5V6a5 5 0 00-5-5z"/>
              <path d="M8.313.254l.343.364.157-.148V.254zm-7.014 6.6L.956 6.49l-.918.864h1.26zm7.014 0h.5v-.5h-.5zm.5-29a4.5 4.5 0 014.5-4.5v-1a5.5 5.5 0 00-5.5 5.5zm0 22.4v-22.4h-1v22.4zM1.64 7.218l7.015-6.6L7.97-.11.956 6.49zm6.672-.864H1.299v1h7.014zm.5 4.5v-4h-1v4zm4.5 4.5a4.5 4.5 0 01-4.5-4.5h-1a5.5 5.5 0 005.5 5.5zm140.486 0H13.313v1h140.486zm4.5-4.5a4.5 4.5 0 01-4.5 4.5v1a5.5 5.5 0 005.5-5.5zm0-33v33h1v-33zm-4.5-4.5a4.5 4.5 0 014.5 4.5h1a5.5 5.5 0 00-5.5-5.5zm-140.486 0h140.486v-1H13.313z" fill="#ccc"/>
            </svg>
            <span>{{content.pleasure_text[$i18n.locale]}}</span>
          </div>
        </div>
        <div class="title">{{content.contact[$i18n.locale]}}</div>
            <form ref="form">
              <form-element
                class="form"
                :form="form"
                :data="data"
              />
            </form>
        <div class="success" v-if="isSuccess">{{content.success[$i18n.locale]}}</div>
        <div class="error" v-if="error">{{content.error[$i18n.locale]}}</div>
        <template v-if="!isSuccess">
          <div class="buttons">
           <button-element
             class="back"
             @click="$refs.dialog.close()"
           >{{content.cancel[$i18n.locale]}}</button-element>
           <button-element
             :disabled="!valid"
             @click="save"
            >{{content.send[$i18n.locale]}}</button-element>
         </div>
        </template>
        <template v-else-if="isSuccess">
          <div class="close-button">
            <button-element
              class="close"
              @click="$refs.dialog.close()"
            >{{content.close[$i18n.locale]}}</button-element>
          </div>
        </template>
      </template>
    </dialog-element>
  </div>
</template>

<script>
  import Dialog from '@components/dialog'
  import Form from '@components/form'
  import Button from '@components/button'
  import {
    POST_CLM_CALLBACK
  } from '@store/actions.type'

  export default {
    components: {
      'dialog-element': Dialog,
      'form-element': Form,
      'button-element': Button
    },
    data: () => ({
      isSuccess: false,
      loading: false,
      campId: false,
      fabShowText: true,
      error: false,
      content: {
        title_top: {
          th: 'ให้พนักงาน',
          en: 'Contact Us'
        },
        title_bottom: {
          th: 'ติดต่อกลับ'
        },
        cancel: {
          th: 'ยกเลิก',
          en: 'Cancel'
        },
        send: {
          th: 'ส่ง',
          en: 'Send'
        },
        close: {
          th: 'ปิด',
          en: 'Close'
        },
        pleasure_text: {
          th: 'พนักงานทรูยินดีให้บริการค่ะ',
          en: 'Our pleasure to service you!'
        },
        welcome: {
          th: 'ทรูยินดีให้บริการค่ะ',
          en: 'TRUE is welcome to service you!'
        },
        contact: {
          th: 'กรุณาใส่ข้อมูลเพื่อให้พนักงานติดต่อกลับ',
          en: 'Please enter your information and we will contact you back.'
        },
        success: {
          th: 'ขอบคุณสำหรับข้อมูล พนักงานจะติดต่อกลับท่านในภายหลัง',
          en: 'Thank you! We will contact you shortly'
        },
        error: {
          th: 'ระบบไม่สามารถดำเนินการในขณะนี้  กรุณาทำรายการใหม่อีกครั้ง',
          en: 'Sorry, we cannot complete your request now. Please try again in a moment.'
        }
      },
      form: {
        contact_name: {
          label: {
            th: 'ชื่อ - นามสกุล',
            en: 'Name'
          },
          type: 'text',
          required: true
        },
        mobile_number: {
          label: {
            th: 'เบอร์ติดต่อ',
            en: 'Phone number'
          },
          type: 'text',
          required: true,
          inputmode: 'tel',
          disabled: true
        }
      },
      data: {
        contact_name: '',
        mobile_number: ''
      },
      callbackType: null
    }),
    computed: {
      valid () {
        if (this.loading) return
        if (!/\S/.test(this.data.contact_name)) return
        return true
      },
      clmCampId () {
        return this.$store.state.clm.clmCampId
      },
      clmMobileNo () {
        return this.$store.state.clm.clmMobileNo
      },
      fabShow () {
        const storage = this.campId && this.data.mobile_number && !localStorage.getItem('is-clmbundle-campain')
        const state = this.clmCampId && this.clmMobileNo && !localStorage.getItem('is-clmbundle-campain')
        return storage || state
      }
    },
    watch: {
      '$store.state.clm.clmMobileNo' () {
        this.handleLocalStorage()
      },
      callbackType () {
        this.callbackType = localStorage.getItem('is-clmbundle-campain')
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
      window.addEventListener('storage', this.handleLocalStorage)
      this.handleScroll()
      this.handleLocalStorage()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll, { passive: true })
      window.removeEventListener('storage', this.handleLocalStorage)
    },
    mounted () {
      this.campId = false
      this.data.mobile_number = ''
      setTimeout(() => this.fetchCallback(), 1000)
    },
    methods: {
      fetchCallback () {
        this.callbackType = localStorage.getItem('is-clmbundle-campain')
      },
      handleScroll () {
        const top = document.body.getBoundingClientRect().top
        this.fabShowText = top > -50
      },
      handleLocalStorage () {
        this.campId = localStorage.getItem('clm-camp-id') || false
        this.data.mobile_number = localStorage.getItem('clm-mobile-number') || ''
      },
      async save () {
        try {
          this.error = false
          this.loading = true
          await this.$store.dispatch(POST_CLM_CALLBACK, {
            ...this.data,
            camp_code: this.campId,
            offer_product: 'True Mobile'
          })
          this.loading = false
          this.isSuccess = true
        } catch (e) {
          this.error = true
          this.loading = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fab {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    max-width: 55px;
    height: 55px;
    border-radius: 55px;
    background-color: #fff;
    color: #DA1515;
    position: fixed;
    z-index: 9;
    bottom: 26px;
    right: 260px;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto auto;
    font-family: 'TrueBold';
    font-size: 22px;
    line-height: 18px;
    align-items: center;
    grid-gap: 8px;
    padding: 4px 16px 4px 4px;
    overflow-x: hidden;
    transition: 200ms max-width ease;

    &.show-text {
      max-width: 160px;
    }

    img {
      width: 47px;
      background-color: #FFC9C9;
      border-radius: 50%;
    }

    .label {
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .dialog {
    &::v-deep {
      .content {
        max-width: 360px;
        border-radius: 16px;
      }
      .dialog-content {
        display: grid;
        grid-gap: 12px;
        padding: 22px 18px
      }
    }
    .header {
      display: grid;
      grid-template-columns: auto auto;
      align-items: flex-start;
      justify-content: flex-start;
      grid-gap: 12px;

      img {
        height: 64px;
      }

      .bubble {
        border: 1px solid #C4C4C4;
        border-radius: 6px;
        padding: 14px 20px;
        font-family: 'TrueBold';
        font-size: 22px;
        color: #DC5050;
        position: relative;

        svg {
          background-color: #fff;
          position: absolute;
          left: -11px;
          bottom: 12px;
          width: 12px;
        }
      }
    }

    .title {
      font-family: 'TrueBold';
      color: #696969;
      font-size: 24px;
      line-height: 30px;
    }
    .form::v-deep .input_container {
      label {
        color: #999;
        font-size: 22px;
        .required {
          display: none;
        }
      }
      input {
        color: #4d4d4d;
        border-radius: 4px;
        border-color: #cdcdcd;
      }
    }
    .success {
      text-align: center;
      color: #4CC764;
      line-height: 0.9em;
      margin-bottom: 16px;
      font-size: 20px;
    }
    .error {
      text-align: center;
      color: #ff0000;
      line-height: 0.9em;
      margin-bottom: 16px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;

      button {
        min-width: auto;
        background-color: #CE4242;
        &.back {
          background-color: #c0c0c0;
        }
        &[disabled] {
          background-color: #e9e9e9;
        }
      }
    }
    .close-button{
      text-align: center;
      button {
        background-color: #CE4242;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .fab {
      right: 260px;
      bottom: 16px;
    }
    .dialog {
      .buttons button {
        padding: 0;
        height: 40px;
      }
    }
  }
</style>
