<template>
  <div>
    <div class="verify-container">
      <div class="verify-form-container">
        <div class="title">{{ Locale.verify_title[$i18n.locale] }}</div>
        <div class="subtitle">{{ Locale.verify_subtitle[$i18n.locale] }}</div>
      </div>
      <form-element
        :data="data"
        :form="Content.trueonline"
        class="form"
      />
    </div>
    <div class="confirm-container">
      <div class="agreement">
        <input name="agreement" id="agreement" type="checkbox" v-model="agreement">
        <span class="agreement-label">
          <label for="agreement">{{ Locale.tnc[$i18n.locale] }}</label>
        </span>
      </div>
      <div class="verify-button-container">
        <button-element
          class="button back"
          @click="$parent.goTo('form')"
        >{{ Locale.back[$i18n.locale] }}</button-element>
        <button-element
          class="button"
          @click="$parent.verify(data.trueonline, hash)"
          :disabled="!agreement"
        >{{ Locale.submit[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
  import Form from '@components/form'
  import Button from '@components/button'
  import Content from './Content.json'
  import Locale from './locale.json'

  export default {
    components: {
      'form-element': Form,
      'button-element': Button
    },
    data: () => ({
      data: {
        trueonline: ''
      },
      agreement: false,
      Content,
      Locale
    }),
    computed: {
      tol () {
        return this.$store.state.verify.tolList
      },
      tolList () {
        return this.tol.trueonline_number_list
      },
      hash () {
        return this.tol.random_hash_for_otp
      }
    },
    mounted () {
      const options = this.tolList.map((e) => ({
        id: e.tol_number,
        value: `Circuit ID: ${e.tol_number} (${e.address} ...)`
      }))
      this.Content.trueonline.trueonline.options = options
      this.data.trueonline = options[0].id
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
    }
    .subtitle {
      margin-bottom: 24px;
      line-height: 24px;
    }

    .form::v-deep {
      max-width: 600px;
      margin: auto;
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
</style>
