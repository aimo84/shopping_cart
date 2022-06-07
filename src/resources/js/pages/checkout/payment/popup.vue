<template>
  <dialog-element
  ref="dialog"
  class="dialog"
  showCloseButton
  newDesign
  >
    <div
      class="content-inner"
      slot="content"
    >
      <div class="popup">
        <div class="popup-inner">
            <div class="label">
              <label class="topic">{{ Content.popup.topic[$i18n.locale] }}</label> <br>
              <label class="sub">{{ Content.popup.sub1[$i18n.locale] }}</label> <br>
              <label class="sub">{{ Content.popup.sub2[$i18n.locale] }}</label>
            </div>
            <div class="button">
              <button
                class="button-cancel"
                @click="$refs.dialog.close()">
                {{ Content.popup.btn_cancel[$i18n.locale] }}
              </button>
              <button
                class="button-submit"
                @click="payment">
                {{ Content.popup.btn_submit[$i18n.locale] }}
              </button>
            </div>
        </div>
      </div>
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '../../../components/dialog.vue'
  import Content from './content.json'

  export default {
    components: {
      'dialog-element': Dialog
    },
    props: {
      callPopup: Boolean
    },
    data: () => ({
      Content
    }),
    watch: {
      callPopup () {
        this.$refs.dialog.open()
        this.$emit('resetPopup', this.callPopup)
      }
    },
    methods: {
      payment () {
        this.$refs.dialog.close()
        this.$emit('payment')
      }
    }
  }

</script>

<style lang="scss">

  .content {
    text-align: center;
    width: 500px;

    .dialog {
      background-color: #fff;
    }
    .content-inner {
      .popup {
        .popup-inner {
          .label {
            text-align: center;

            .topic {
              font-family: "TrueBold";
              font-size: 22px;
            }
            .sub {
              font-family: "TrueLight";
              font-size: 22px;
            }
          }
          .button {
            margin-top: 1.5rem;

            .button-cancel {
              height: 40px;
              width: 200px;
              border-radius: 20px;
              cursor: pointer;
              margin-left: 1rem;
              margin-right: 0.5rem;
              border: none;
              color: red;
              border-style: solid;
              border-color: red;
              font-size: 22px;
              background: #fff;
              font-family: "TrueBold";
            }
            .button-submit {
              height: 40px;
              cursor: pointer;
              font-size: 22px;
              border: none;
              color: #fff;
              margin-left: 0.5rem;
              margin-right: 1rem;
              border-radius: 20px;
              width: 200px;
              font-family: "TrueBold";
              background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .content {
      width: 300px;

      .content-inner {
        .popup {
          .popup-inner {
            .button {
              .button-cancel {
                margin-left: 0;
                margin-right: 0;
              }
              .button-submit {
                margin-top: 7px;
                margin-left: 0;
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

</style>
