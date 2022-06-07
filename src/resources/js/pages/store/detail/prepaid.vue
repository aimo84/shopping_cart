<template>
  <div class="result-outer-container">
    <div class="result-container">
      <div class="title">{{ title[$i18n.locale] }}</div>
      <div class="reason">{{ Locale.prepaid.see_reason[$i18n.locale] }}</div>
      <div class="divider" />
      <div class="subtitle red">{{ Locale.prepaid.subtitle[$i18n.locale] }}</div>
      <div class="options" :class="error">
        <button
                v-for="(option, key) in options"
                :key="key"
                :data-test-option-id="option.id"
                class="h-full rounded-xl"
                :class="{
                'shadow-lg': (
                    (selectedOption === option.id)
                    )
                }"
                @click="handleSelectOption(option)"
            >
            <div
              class="flex flex-col rounded-lg shadow-gray-500 h-full overflow-hidden option"
              :class="{'shadow-thick-red-500': (
                (selectedOption === option.id)
                ),
              }"
              :key="key"
              :id="option.id"
            >
              <div class="option-title">{{ Locale.prepaid[option.label][$i18n.locale] }}</div>
              <img class="icon" :src="`/images/verify/${option.image}.svg`" alt="Verification icon" />
              <div
                class="check-box grid place-items-center border border-gray rounded-full w-[20px] h-[20px]"
                :class="{
                        'bg-red-500 border-red-500': selectedOption === option.id
                }"
              >
                  <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                      :fill="`${(selectedOption === option.id) ? '#FFF' : '#E0E0E0'}`"
                  />
                  </svg>
              </div>
            </div>
        </button>
      </div>
      <div class="other link" @click="back">
        {{ Locale.prepaid.other_option[$i18n.locale] }}
      </div>
      <div
        v-if="error === 'not_true_customer'"
        class="true-shop"
      >{{ Locale.prepaid.true_shop[$i18n.locale] }}</div>
      <div class="divider" />
      <div class="tnc-container">
        <div class="tnc-label" @click="showTnc = !showTnc">
          <span>{{ Locale.prepaid.tnc_label[$i18n.locale] }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#3E4A50" :active="showTnc">
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
          </svg>
        </div>
        <div class="tnc-content" v-if="showTnc">
          <div>{{ Locale.prepaid.tnc_content[$i18n.locale] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'
  import qs from 'qs'

  export default {
    props: [
      'errorVerify'
    ],
    data: () => ({
      Locale,
      showTnc: false,
      selectedOption: ''
    }),
    computed: {
      error () {
        return this.errorVerify
      },
      title () {
        if (this.error === 'not_true_customer_existing') {
          return this.Locale.prepaid.title
        } else if (this.error === 'existing_prepaid') {
          return this.Locale.prepaid.existing_prepaid_title
        } else if (this.error === 'existing_postpaid') {
          return this.Locale.prepaid.existing_postpaid_title
        }
        return this.Locale.prepaid.pre2post_title
      },
      options () {
        switch (this.error) {
          case 'not_true_customer': {
            return [{
              id: 'notfundid-offer_freesim',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'notfundid-mnpsharedplan',
              image: 'true-prepaid-move',
              campaign: 'mnp_bundling',
              label: 'move_title'
            }]
          }
          case 'not_true_customer_existing': {
            return [{
              id: 'new_number',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'device_only',
              image: 'true-prepaid-device',
              campaign: 'device_only',
              label: 'device_only_title'
            }, {
              id: 'switch_to_postpaid',
              image: 'true-prepaid-switch',
              campaign: 'switch_to_postpaid',
              label: 'switch_to_postpaid_title'
            }]
          }
          case 'not_prepaid': {
            return [{
              id: 'notprepaid-offer_freesim',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'notprepaid-existingbundle',
              image: 'true-prepaid-change',
              campaign: 'existing_postpaid',
              label: 'change_title'
            }]
          }
          case 'existing_postpaid': {
            return [{
              id: 'notprepaid-offer_freesim',
              button: 'existing_postpaid_notprepaid_offer_freesim',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'notprepaid-existingbundle',
              button: 'existing_postpaid_notprepaid_existingbundle',
              image: 'true-prepaid-change',
              campaign: 'existing_postpaid',
              label: 'change_title'
            }]
          }
          case 'existing_prepaid': {
            return [{
              id: 'new_number',
              button: 'existing_prepaid_new_number',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'switch_to_postpaid_device',
              button: 'existing_prepaid_switch_to_postpaid_device',
              image: 'true-prepaid-switch-device',
              campaign: 'switch_to_postpaid',
              label: 'switch_to_postpaid_device_title'
            }]
          }
          default: {
            return [{
              id: 'noteligi-offer_freesim',
              image: 'true-prepaid-lucky',
              campaign: 'new_number',
              label: 'lucky_title'
            }, {
              id: 'noteligi-offer_deviceonly',
              image: 'true-prepaid-device',
              campaign: 'device_only',
              label: 'device_only_title'
            }]
          }
        }
      }
    },
    methods: {
      back () {
        this.$parent.goTo('verify')
      },
      handleSelectOption (option) {
        this.selectedOption = option.id
        if (option.campaign === 'new_number') {
          this.updateURLQuery('selected_campaign', 'mnp_bundling')
        } else if (option.campaign === 'existing_postpaid') {
          this.updateURLQuery('selected_campaign', 'existing_postpaid')
        }
      },
      updateURLQuery (key, value) {
        const query = {}
        query[key] = value
        const newurl = `${window.location.origin}/online-store/item/${this.$route.params.id}?${qs.stringify(query)}`
        window.history.pushState(query, '', newurl)
        location.reload(newurl)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result-container {
    background: #F7F7F7;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    font-size: 1.5em;
    max-width: 550px;
    margin: auto;
    padding: 10px 24px;
    line-height: 24px;
    color: #000000;
    min-height: 340px;

    .title {
      font-family: "TrueBold";
      font-size: 24px;
      line-height: 28.79px;
      color: #404040;
    }

    .reason {
      color: #000000;
      font-size: 20px;
      line-height: 23.99px;
      font-family: "TrueLight";
    }

    .divider {
      border: 0.5px solid #CCCCCC;
      width: 100%;
      margin: 10px 0px 10px 0px;
    }

    .subtitle {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
      color: #404040;
    }

    .options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      justify-content: center;
      margin: auto;
      width: 100%;
      max-width: 390px;

      &.not_true_customer_existing {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 860px;

        .option {
          padding: 48px 16px 24px;
          border-radius: 0;
          max-width: none;

          button {
            height: 50px;
            width: 180px;
            border-radius: 8px;
          }
        }
      }

      .option {
        background: #FFFFFF;
        line-height: 20px;
        max-width: 180px;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        text-decoration: none;
        height: 140px;
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 10px;
        position: relative;

        .option-content {
        }
        .save {
          font-family: "TrueBold";
          position: absolute;
          background-color: #f32525;
          color: #fff;
          top: 0;
          left: 0;
          padding: 6px 0 6px 10px;
          font-size: 20px;

          &:after {
            content: "";
            position: absolute;
            top: 0;
            right: -32px;
            width: 32px;
            height: 100%;
            background: #ed3833;
            border-bottom-right-radius: 100%;
          }
        }

        .icon {
          width: 80%;
          max-height: 85px;
          object-fit: contain;
          margin: auto;
        }

        .option-title {
          padding-top: 12px;
          font-family: 'TrueMedium';
          font-style: normal;
          font-weight: normal;
          font-size: 19px;
          line-height: 20px;
          color: #000000;
        }

        button {
          height: 40px;
          width: 100%;
          min-width: auto;
          border-radius: 0;
          padding: 0;
        }
      }
    }

    .other {
      font-family: 'TrueLight';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      text-decoration-line: underline;
      color: #29ABE2;
      margin-top: 10px;
      cursor: pointer;
    }

    .true-shop {
      margin: 16px 0;
      font-family: 'TrueBold';
      color: #3E4A50;
    }

    .tnc-container {
      /* max-width: 400px; */

      .tnc-label {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'TrueLight';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #404040;

        span {
          margin-right: 4px;
        }

        svg {
          border: 1px solid #CCCCCC;
          box-sizing: border-box;
          width: 16px;
          border-radius: 50px;
          height: 16px;
          transition: 50ms ease transform;
          &[active] {
            transform: rotate(180deg);
          }
        }
      }

      .tnc-content {
        text-align: left;
        margin-top: 8px;
        font-family: 'TrueLight';
        font-size: 22px;
        line-height: 22px;
        white-space: pre-line;
      }
    }
  }

  .check-box {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 1148px) {
    .result-outer-container {
      padding-top: 24px;
    }
    .result-container {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 860px) {
    .result-container .options {
      grid-gap: 16px;

      &.not_true_customer_existing {
        grid-template-columns: 1fr;

        .option {
          grid-template-columns: 40% 1fr;
          grid-template-rows: 1fr;
          padding: 16px;
          align-items: center;

          .option-content {
            grid-gap: 12px;
          }

          .option-title {
            font-size: 24px;
            line-height: 20px;
            padding: 0;
            min-height: 0;
          }

          button {
            padding: 0;
            width: 50%;
            height: 40px;
            min-width: 120px;
            min-height: 40px;
            margin: auto;
          }
        }
      }

      .option {
        padding-top: 24px;

        .option-title {
          font-size: 20px;
          line-height: 18px;
          padding: 0 8px;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .result-container {
      padding: 24px;
    }
  }
</style>
<style>
.grid {
  display: grid;
}
.place-items-center {
  place-items: center;
}
.rounded-full {
  border-radius: 9999px;
}
.w-\[20px\] {
  width: 20px;
}
.h-\[20px\] {
  height: 20px;
}
.bg-red-500 {
  background-color: #E12836;
}
.border-red-500 {
  border-color: #E12836;
}
.h-full {
  height: 100%;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
</style>
