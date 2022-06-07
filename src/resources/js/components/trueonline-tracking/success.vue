<template>
  <div class="success-container">
    <div class="title">{{ Locale.title_2[$i18n.locale] }}</div>
    <div class="success">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      </div>
      <div class="label">{{ tolDueDate.message[$i18n.locale] }}</div>
      <div class="buttons">
        <button-element @click="$parent.close()">{{ Locale.close[$i18n.locale] }}</button-element>
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
      Locale
    }),
    computed: {
      tolDueDate () {
        return this.$store.state.trueonline.tolDueDate
      }
    }
  }
</script>

<style lang="scss" scoped>
  .success-container {
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-family: 'TrueBold';
      text-align: center;
    }

    .success {
      margin-top: 36px;
      text-align: center;

      .icon {
        background-color: #ffb800;
        box-shadow: 1px 1px 0 #e7a700;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: #fff;
        margin: auto;

        svg {
          fill: #fff;
          width: 30px;
          height: 30px;
        }
      }

      .label {
        margin: 24px auto 36px auto;
        font-family: 'TrueBold';
        font-size: 24px;
      }
    }
  }
</style>
