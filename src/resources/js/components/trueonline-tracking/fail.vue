<template>
  <div class="fail-container">
    <div class="title">{{ Locale.title_2[$i18n.locale] }}</div>
    <div class="fail">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <div class="label">{{ tolDueDate.message[$i18n.locale] }}</div>
      <div class="buttons">
        <button-element @click="$emit('route', 'modify')">{{ Locale.back[$i18n.locale] }}</button-element>
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
  .fail-container {
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-family: 'TrueBold';
      text-align: center;
    }

    .fail {
      margin-top: 36px;
      text-align: center;

      .icon {
        background-color: #ff0000;
        box-shadow: 1px 1px 0 #8e0000;
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
