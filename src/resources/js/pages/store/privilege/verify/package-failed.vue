<template>
  <div class="result-outer-container">
    <div class="result-container">
      <div class="icon failed">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path stroke="#fff" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <div class="result-title failed">{{ Locale.package_failed[$i18n.locale] }}</div>
      <div class="result-button-container">
        <button-element
          @click="$parent.goTo('package')"
          class="button back"
        >{{ Locale.back[$i18n.locale] }}</button-element>
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
    })
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
    padding: 76px 24px 50px 24px;

    .icon {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      margin-bottom: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #fff;
      }

      &.failed {
        background-color: #ff0000;
        box-shadow: 1px 1px 0 #8e0000
      }
    }
    .result-title {
      font-size: 40px;
      line-height: 40px;
      font-family: 'TrueBold';
      text-align: center;
      max-width: 600px;

      &.success {
        color: #e4a20f;
      }

      &.failed {
        color: #ff0000;
      }
    }
    .result-button-container {
      margin-top: 32px;
      display: flex;

      .button {
        background-color: #ff0000;

        &.back {
          background-color: #666;
        }
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

      .icon {
        margin-bottom: 16px;
      }

      .result-title {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
</style>
