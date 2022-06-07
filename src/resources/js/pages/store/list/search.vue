<template>
  <div class="search-container" :disabled="disabled">
    <div class="input-container">
      <input
        type="text"
        :placeholder="Locale.search_text[$i18n.locale]"
        :value="value"
        :error="error"
        @input="onInput"
        @keyup.enter="search"
      />
      <div class="close" @click="reset" v-if="value">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      </div>
    </div>
    <button @click="search">{{ Locale.search_button[$i18n.locale] }}</button>
  </div>
</template>

<script>
  import Locale from './locale.json'
  export default {
    props: {
      value: String,
      disabled: Boolean
    },
    data: () => ({
      Locale,
      error: false
    }),
    methods: {
      search () {
        this.error = !this.value
        if (!this.value) return
        this.$emit('search')
      },
      reset () {
        this.error = false
        this.$emit('input', '')
        this.$emit('search')
      },
      onInput (e) {
        this.$emit('input', e.target.value)
        if (!this.error) return
        this.error = !e.target.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-container {
    font-size: 1.5em;
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 20px 0 36px 0;

    &[disabled] {
      pointer-events: none;
    }

    .input-container {
      position: relative;

      .close {
        position: absolute;
        right: 8px;
        top: 0;
        bottom: 0;
        display: flex;
        cursor: pointer;

        svg {
          margin: auto;
          fill: #666666;
        }
      }
    }

    input {
      height: 40px;
      outline: none;
      width: 100%;
      padding: 0 40px 0 20px;
      border-right: none;
      border-radius: 8px 0 0 8px;
      font-size: 16px;
      border: 1px solid #ddd;

      &::placeholder {
        color: #ddd;
      }

      &[error] {
        border-color: #ff0000;
      }
    }

    button {
      height: 40px;
      min-width: 160px;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 0 8px 8px 0;
      font-family: 'TrueBold';
      font-size: 24px;
    }
  }

  @media screen and (max-width: 860px) {
    .search-container {
      margin-bottom: 20px;

      button {
        min-width: auto;
        padding: 0 24px;
      }
    }
  }
</style>
