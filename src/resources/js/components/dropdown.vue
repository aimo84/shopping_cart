<template>
  <div class='select' :name='name' :error='error'>
    <input
      class='input'
      type='text'
      readonly
      :placeholder='placeholder'
      :value='text'
      :disabled='disabled'
      @focus='toggle(true)'
      @blur='toggle(false)'
    >
    <div class='options' v-show='opened'>
      <div class='option'
        v-for='option in computedOptions'
        :key='option.id'
        :disabled='option.disabled'
        :selected="option.id.toString() === value"
        @mousedown='change(option)'>
        {{ option.value || option }}
      </div>
    </div>
    <div class='caret' />
  </div>
</template>

<script>
  export default {
    model: {
      event: 'change'
    },

    props: {
      placeholder: String,
      value: String,
      disabled: Boolean,
      options: Array,
      error: Boolean,
      selected: Object,
      name: String
    },

    data: () => ({
      opened: false
    }),

    computed: {
      text () {
        if (this.options) {
          const selected = typeof this.options[0] === 'string'
            ? this.options.find(option => option === this.value)
            : this.options.find(option => option.id.toString() === this.value)
          return selected ? selected.value || selected : ''
        }
      },
      computedOptions () {
        if (this.options) {
          return typeof this.options[0] === 'string'
            ? this.options.map(option => ({ id: option, value: option }))
            : this.options
        }
      }
    },

    methods: {
      change (option) {
        if (option.disabled) return
        this.$emit('change', option.id.toString())
      },
      toggle (opened) {
        this.opened = opened
        this.$emit(opened ? 'focus' : 'blur')
      }
    }
  }
</script>

<style lang='scss' scoped>
  .select {
    position: relative;
    width: 100%;

    &.white-bg .input {
      background-color: #fff;
    }

    &[invalid] .input {
      border-color: red;
      color: red;
    }
  }

  .input {
    font-size: 15px;
    padding: 0 26px 0 12px;
    border: 1px solid #000;
    width: 100%;
    min-width: 0;
    height: 40px;
    box-sizing: border-box;
    border-radius: 8px;
    -webkit-appearance: none;

    &:focus,
    &:hover {
      outline: none;
      border-color: #000;
    }

    &:disabled {
      color: #949494;
      border-color: #ccc;
      opacity: 1;
      pointer-events: none;
      -webkit-text-fill-color: #949494;
    }

    [error] > & {
      border-color: red;
    }
  }

  .input::placeholder {
    color: #9b9b9b;
  }

  .options {
    position: absolute;
    top: 40px;
    right: 0;
    left: 0;
    z-index: 1;
    overflow-y: auto;
    margin-bottom: 24px;
    border: 1px solid #a7a7a7;
    max-height: calc(40px * 5 + 20px);
    background-color: white;
    border-radius: 0 0 4px 4px;
  }

  .option {
    overflow: hidden;
    padding: 8px 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    text-align: left;
    font-family: system-ui;
    font-size: 15px;

    &:hover {
      background-color: #eaeaea;
    }

    &[disabled] {
      cursor: default;
      color: #9b9b9b;

      &:hover {
        background-color: #fff;
      }
    }

    &[selected] {
      background-color: #d5d5d5;
    }
  }

  .caret {
    position: absolute;
    top: 4px;
    right: 8px;
    pointer-events: none;
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cD\
    ovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48cG\
    F0aCBmaWxsPSJ0cmFuc3BhcmVudCIgZD0iTTAgMGg0Ljk1djEwSDB6Ii8+PHBhdG\
    ggZmlsbD0iIzQ0NCIgZD0iTTEuNDEgNC42N2wxLjA3LTEuNDkgMS4wNiAxLjQ5SDE\
    uNDF6bTIuMTMuNjZMMi40OCA2LjgyIDEuNDEgNS4zM2g\
    yLjEzeiIvPjwvc3ZnPg==') no-repeat;
    height: 32px;
    width: 16px;
  }
</style>
