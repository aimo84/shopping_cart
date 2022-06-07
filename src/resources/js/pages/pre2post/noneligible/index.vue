<template>
  <div class="result-outer-container" v-if="loaded">
    <div class="result-container">
      <div class="title">{{ Locale.prepaid.title[$i18n.locale] }}</div>
      <div class="divider" />
      <div class="subtitle red">{{ Locale.prepaid.subtitle[$i18n.locale] }}</div>
      <div class="options">
        <router-link
          class="option"
          id="new_number"
          :to="{
            name: 'packages',
            query: {
              type: 'postpaid'
            }
          }"
        >
          <img class="icon" src="/images/verify/true-new-postpaid.png" />
          <div class="option-title">{{ Locale.prepaid.device_only_title[$i18n.locale] }}</div>
        </router-link>
        <a href="https://store.truecorp.co.th/online-store?category=3165" class="option" id="lucky_number_with_device">
          <img class="icon" src="/images/verify/true-prepaid-lucky.png" />
          <div class="option-title">{{ Locale.prepaid.lucky_title[$i18n.locale] }}</div>
        </a>
      </div>
      <div class="other">{{ Locale.prepaid.other_option[$i18n.locale] }}</div>
      <router-link
        class="other link"
        :to="{
          name: 'online-store-list'
        }"
      >
        <button-element class="button back">{{ Locale.prepaid.back[$i18n.locale] }}</button-element>
      </router-link>
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
    props: {
      data: Object
    },
    data: () => ({
      Locale,
      loaded: false
    }),
    mounted () {
      try {
        this.$emit('loading', true)
        if (!this.data.verify_failed && !this.$route.query.verify_fail) throw new Error()
        this.loaded = true
        this.$emit('loading', false)
      } catch (e) {
        return this.$router.push({
          name: 'pre2post-verify'
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
    font-size: 24px;
    color: #3e4a50;

    .title {
      font-family: "TrueBold";
      font-size: 32px;
      line-height: 28px;
      max-width: 600px;
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
      font-family: 'TrueBold';
    }

    .options {
      display: grid;
      grid-template-columns: repeat(auto-fit, 180px);
      justify-content: center;
      grid-gap: 24px;
      margin: 24px auto;
      width: 100%;

      .option {
        background-color: #f0f0f0;
        border-radius: 8px;
        padding: 48px 12px 24px 12px;
        line-height: 20px;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
        border: 2px solid #fff;
        transition: 50ms ease border-color;

        &:hover {
          border-color: #ed3833;
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
          height: 100px;
          width: auto;
          margin: auto auto 24px;
        }

        .option-title {
          font-family: 'TrueBold';
        }
      }
    }

    .other {
      margin-bottom: 40px;
      font-family: 'TrueBold';

      &.link {
        text-decoration: none;

        .button {
          background-color: #666666;
        }
      }
    }

    .tnc-container {
      max-width: 400px;
      margin-bottom: 24px;

      .tnc-label {
        cursor: pointer;
        display: flex;
        justify-content: center;
        user-select: none;

        svg {
          margin-left: 8px;
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

  @media screen and (max-width: 640px) {
    .result-container {
      padding: 30px 24px 50px 24px;
    }
  }
</style>
