<template>
  <dialog-element ref="trueOnlineDialog" class="true-online-dialog">
    <div slot="content">
      <div class="close-container">
        <div class="close" @click="$refs.trueOnlineDialog.close()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <img src="/images/verify/true-online-example.jpg" />
      <div class="dialog-text">
        <span>{{ Locale.see_example_popup[$i18n.locale] }}</span>
        <span>
          <a
            href="https://iservice.truecorp.co.th/"
            target="_blank"
            rel="noopener noreferrer"
          >{{ Locale.see_example_service[$i18n.locale] }}</a>.
        </span>
      </div>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'
  export default {
    components: {
      'dialog-element': Dialog
    },
    data: () => ({
      Locale: {
        see_example_popup: {
          en: 'You can find it on your bill and the sticker on the router or go to ',
          th: 'สามารถดูหมายเลขบริการของคุณได้ในใบแจ้งค่าบริการ สติกเกอร์บนเราเตอร์ หรือดูผ่าน '
        },
        see_example_service: {
          en: 'iService',
          th: 'TrueiService'
        }
      }
    }),
    methods: {
      open () {
        this.$refs.trueOnlineDialog.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .true-online-dialog::v-deep {
    .content {
      max-width: 420px;
      text-align: center;
    }
    .dialog-content {
      padding: 48px 48px 36px;
      position: relative;
    }
    .close-container {
      position: absolute;
      top: 8px;
      right: 8px;

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
    img {
      width: 100%;
    }
    .dialog-text {
      margin-top: 16px;
    }
    a {
      color: #FF0000;
    }
  }

  @media screen and (max-width: 480px) {
    .true-online-dialog::v-deep .dialog-content {
      padding: 48px 16px 24px;
      line-height: 18px;
      font-size: 19px;
    }
  }
</style>
