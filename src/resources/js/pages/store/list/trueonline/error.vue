<template>
  <div class="error">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
      </svg>
    </div>
    <div class="label">{{ error[$i18n.locale] }}</div>
    <button-element
      class="button"
      @click="$parent.page = 'form'"
    >Go back</button-element>
  </div>
</template>

<script>
  import Button from '@components/button'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      error: Object
    }
  }
</script>

<style lang="scss" scoped>
  .error {
    padding: 160px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      background-color: #ff0000;
      box-shadow: 1px 1px 0 #8e0000;
      margin-bottom: 50px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;

      svg {
        fill: #fff;
        width: 30px;
        height: 30px;
      }
    }
    .label {
      color: red;
      font-size: 40px;
      line-height: 40px;
      font-family: "TrueBold";
      text-align: center;
      max-width: 600px;
      margin-bottom: 50px;
    }
    .button {
      background-color: #666;
    }
  }
</style>
