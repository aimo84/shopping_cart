<template>
  <div :class="'input' + (suffix ? ' suffix' : '')">
    <input
      :type="type"
      :placeholder="(placeholder && placeholder[$i18n.locale]) || placeholder"
      :disabled="disabled"
      :value="value"
      :title="title"
      :name="name"
      :aria-label="ariaLabel"
      :autocomplete="autocomplete"
      :required="required"
      :pattern="pattern"
      :min="min"
      :max="max"
      :maxlength="maxlength"
      :inputmode="inputmode"
      ref="input"
      @input="input"
      @keyup='$emit("keyup", $event)'
      @keydown='$emit("keydown", $event)'
      @blur='$emit("blur", $event)'
      @focus='$emit("focus", $event)'
      :style="customVars"
      @change='$emit("change", $event)'
      @keypress='$emit("keypress", $event)'
    >
    <div class="error" v-if="error">{{ (error && error[$i18n.locale]) || error }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      name: String,
      type: String,
      placeholder: [Object, String],
      error: [Object, String],
      disabled: [Boolean, String],
      ariaLabel: String,
      autocomplete: String,
      required: [Boolean, String],
      value: [String, Number],
      suffix: String,
      pattern: String,
      min: String,
      max: String,
      maxlength: String,
      inputmode: String,
      customCSS: Object
    },

    computed: {
      customVars () {
        if (this.customCSS === undefined) {
          return {
            '--border-color': '#000',
            '--font-family': 'TrueMedium',
            '--font-size': '24px',
            '--line-height': 'normal',
            '--font-weight': 'lighter'
          }
        }

        return {
          '--border-color': this.customCSS.borderColor,
          '--font-family': this.customCSS.fontFamily,
          '--font-size': this.customCSS.fontSize,
          '--line-height': this.customCSS.lineHeight,
          '--font-weight': this.customCSS.fontWeight,
          'padding': this.customCSS.padding,
        }
      }
    },

    mounted () {
      if ('OTPCredential' in window && this.$refs.input.getAttribute('autocomplete') === 'one-time-code') {
        navigator.credentials.get({
          otp: {
            transport: ['sms']
          }
        })
        .then(otp => {
          this.$emit('input', otp.code)
        })
      }
    },

    methods: {
      input (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang='scss' scoped>
.input {
  display: block;
  width: 100%;
  min-width: 0;

  input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    font-size: var(--font-size);
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 8px;
    transition: 150ms border-color ease;
    font-family: var(--font-family);
    line-height: var(--line-height);
    font-weight: var(--font-weight);

    &:focus {
      border-color: #000;
      outline: none;
    }

    &::placeholder {
      font-family: 'TrueLight';
      color: #9b9b9b;
    }

    &[disabled] {
      color: #949494;
      border-color: #ccc;
      -webkit-text-fill-color: #949494;
    }
  }

  .error {
    text-align: left;
    color: #ff0000;
    display: none;
  }
}

@media screen and (max-width: 860px) {
  .input input {
    padding: 0 10px;
  }
}
</style>
