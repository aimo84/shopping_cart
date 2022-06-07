<template>
  <div class="result-outer-container">
    <div class="result-container">
      <div class="title">{{ title[$i18n.locale] }}</div>
      <div class="reason">{{ Locale.prepaid.see_reason[$i18n.locale] }}</div>
      <div class="divider" />
      <div class="subtitle red">{{ Locale.prepaid.subtitle[$i18n.locale] }}</div>
      <div class="options" :class="error">
        <template v-for="(option, key) in options">
          <router-link
            class="option"
            :key="key"
            :id="option.id"
            :to="{
              name: 'online-store-detail',
              params: { id: $route.query.product_id },
              query: { selected_campaign: option.campaign }
            }"
          >
            <img class="icon" :src="`/images/verify/${option.image}.svg`" />
            <div class="option-content">
              <div class="option-title">{{ Locale.prepaid[option.label][$i18n.locale] }}</div>
              <button-element :id="option.button">{{ Locale.prepaid.select[$i18n.locale] }}</button-element>
            </div>
          </router-link>
        </template>
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
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    data: () => ({
      Locale,
      showTnc: false
    }),
    computed: {
      error () {
        return this.$route.query.error
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
        this.$router.push({
          name: 'online-store-detail',
          params: {
            id: this.$route.query.product_id
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 1.5em;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 24px auto;
    padding: 36px 24px;
    line-height: 24px;
    color: #3e4a50;

    .title {
      font-family: "TrueBold";
      font-size: 32px;
      line-height: 28px;
      max-width: 600px;
    }

    .reason {
      margin-top: 8px;
      color: #787878;
    }

    .divider {
      height: 1px;
      width: 100%;
      background-color: #e2e2e2;
      margin: 20px 0;
    }

    .subtitle {
      font-size: 24px;
      line-height: 24px;
      max-width: 600px;
    }

    .options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px;
      justify-content: center;
      margin: 24px auto;
      width: 100%;
      max-width: 424px;

      &.not_true_customer_existing {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 860px;

        .option {
          padding: 48px 16px 24px;
          border-radius: 0;
          max-width: none;

          button {
            height: 50px;
            border-radius: 8px;
          }
        }
      }

      .option {
        display: grid;
        grid-template-rows: 1fr auto;
        grid-gap: 24px;
        background-color: #f0f0f0;
        padding: 36px 0 0;
        line-height: 20px;
        max-width: 200px;
        width: 100%;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        text-decoration: none;

        .option-content {
          display: grid;
          grid-template-rows: 1fr auto;
          grid-gap: 16px;
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
          max-height: 120px;
          object-fit: contain;
          margin: auto;
        }

        .option-title {
          font-family: 'TrueBold';
          white-space: pre-line;
          padding: 0 16px;
          color: #3E4A50;
          min-height: 40px;
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
      margin: 16px 0;
      text-decoration: underline;
      text-underline-position: under;
      color: #524E4E;
      cursor: pointer;
    }

    .true-shop {
      margin: 16px 0;
      font-family: 'TrueBold';
      color: #3E4A50;
    }

    .tnc-container {
      max-width: 400px;

      .tnc-label {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin-right: 4px;
        }

        svg {
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
