<template>
  <div class='select' :name='name' :error='error'>
    <label :for="id">
      <div class="select-label-icon" v-if="template === 'red'">
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5262 13.1053C18.265 12.8441 17.8731 12.8441 17.6119 13.1053L15.7833 14.9339V1.80736C15.7833 1.44817 15.4895 1.1543 15.1303 1.1543C14.7711 1.1543 14.4772 1.44817 14.4772 1.80736V14.9339L12.6487 13.1053C12.3874 12.8441 11.9956 12.8441 11.7344 13.1053C11.4731 13.3665 11.4731 13.7584 11.7344 14.0196L14.6731 16.9584C14.8038 17.089 14.967 17.1543 15.1303 17.1543C15.2936 17.1543 15.4568 17.089 15.5874 16.9584L18.5262 14.0196C18.7874 13.7584 18.7874 13.3665 18.5262 13.1053Z" fill="url(#paint0_linear_1878_3754)"/>
            <path d="M6.98775 3.13469L4.04898 0.195918C4.01633 0.163265 3.98367 0.130612 3.95102 0.130612C3.91837 0.130612 3.91837 0.0979592 3.88571 0.0979592C3.85306 0.0979592 3.85306 0.0653061 3.82041 0.0653061C3.78776 0.0653061 3.78776 0.0653061 3.7551 0.0326531C3.72245 0.0326531 3.72245 0.0326531 3.6898 0C3.62449 0 3.55918 0 3.46122 0C3.42857 0 3.42857 0 3.39592 0.0326531C3.36327 0.0326531 3.36327 0.0326531 3.33061 0.0653061C3.29796 0.0653061 3.29796 0.0979592 3.26531 0.0979592C3.23265 0.0979592 3.23265 0.130612 3.2 0.130612C3.2 0.130612 3.16735 0.163265 3.13469 0.195918L0.195918 3.13469C-0.0653061 3.39592 -0.0653061 3.78776 0.195918 4.04898C0.326531 4.17959 0.489796 4.2449 0.653061 4.2449C0.816326 4.2449 0.979592 4.17959 1.1102 4.04898L2.93878 2.22041V15.3469C2.93878 15.7061 3.23265 16 3.59184 16C3.95102 16 4.2449 15.7061 4.2449 15.3469V2.22041L6.07347 4.04898C6.20408 4.17959 6.36735 4.2449 6.53061 4.2449C6.69388 4.2449 6.85714 4.17959 6.98775 4.04898C7.24898 3.78776 7.24898 3.39592 6.98775 3.13469Z" fill="url(#paint1_linear_1878_3754)"/>
            <defs>
            <linearGradient id="paint0_linear_1878_3754" x1="16.3443" y1="27.2666" x2="8.31828" y2="26.1906" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DF1584"/>
            <stop offset="0.2917" stop-color="#DF1E5F"/>
            <stop offset="0.5722" stop-color="#E02542"/>
            <stop offset="0.8173" stop-color="#E02932"/>
            <stop offset="1" stop-color="#E02B2C"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1878_3754" x1="4.80581" y1="26.1123" x2="-3.22017" y2="25.0363" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DF1584"/>
            <stop offset="0.2917" stop-color="#DF1E5F"/>
            <stop offset="0.5722" stop-color="#E02542"/>
            <stop offset="0.8173" stop-color="#E02932"/>
            <stop offset="1" stop-color="#E02B2C"/>
            </linearGradient>
            </defs>
          </svg>
      </div>
      <div v-else class="select-label"  :class="[template === 'red' && 'red-template', id]">
        <div>{{text}}</div><img :src="template === 'red' ? '/images/icons/select-arrow-white.svg' : '/images/icons/select-arrow.svg'"/>
      </div>
    </label>
    <input
      class='input'
      type='text'
      readonly
      :id="id"
      :placeholder='placeholder'
      :value='text'
      :disabled='disabled'
      @focus='toggle(true)'
      @blur='toggle(false)'
    >
    <div class='options' v-show='opened' :class="[template === 'red' && 'last-filter']">
      <div class="bubble-spike">
        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L14.8612 6.75H0.138784L7.5 0Z" :fill="computedOptions[0].id.toString() === value ? '#d5d5d5' : optionHover ? '#eaeaea' : 'white'"/>
        </svg>
      </div>
      <div class="option-container">
        <div class='option'
          v-for='(option, index) in computedOptions'
          :key='option.id'
          :disabled='option.disabled'
          :selected="option.id.toString() === value"
          @mouseover="optionHover = index === 0 && true"
          @mouseleave="optionHover = index === 0 && false"
          @mousedown='change(option)'>
          {{ option.value || option }}
        </div>
      </div>
    </div>
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
      name: String,
      id: String,
      template: String
    },

    data: () => ({
      opened: false,
      optionHover: false
    }),

    computed: {
      text () {
        const selected = typeof this.options[0] === 'string'
          ? this.options.find(option => option === this.value)
          : this.options.find(option => option.id.toString() === this.value)
        this.$emit('getCatagoryText', selected ? selected.value || selected : '')
        return selected ? selected.value || selected : ''
      },

      computedOptions () {
        return typeof this.options[0] === 'string'
          ? this.options.map(option => ({ id: option, value: option }))
          : this.options
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
    display: flex;
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

  .select-label {
    color: #000;
    font-size: 24px;
    padding: 0px;
    border: 0px;
    width: 100%;
    min-width: 180px;
    height: 40px;
    box-sizing: border-box;
    -webkit-appearance: none;

    height: 40px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5px;
    }
  }

  .select-label-icon {
    padding: 0px;
    border: 0px;
    width: 100%;
    min-width: 40px;
    height: 40px;
    box-sizing: border-box;
    -webkit-appearance: none;

    height: 40px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .last-filter {
    margin-left: -110px;
  }

  .red-template {
    background: linear-gradient(298.29deg, #DF1584 4.92%, #DF1E5F 26.53%, #E02543 47.31%, #E02932 65.46%, #E02B2C 79%);
    color: #fff;
  }

  .c-brands-filter {
    min-width: 150px;
  }

  .input {
    font-size: 15px;
    border: 0px;
    width: 0px;
    overflow: none;
    min-width: 0;
    height: 40px;
    box-sizing: border-box;
    -webkit-appearance: none;
    height: 40px;
    cursor: pointer;
    padding: 0px;

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
    margin-bottom: 24px;
    min-width: 150px;
    max-height: calc(40px * 5 + 20px);

    margin-top: 15px;
    .bubble-spike {
      position: relative;
      svg {
        position: absolute;
        top: -6.25px;
        right: 15px;
      }
    }
    .option-container {
      box-shadow: 4px 4px 20px 0px #0000001A;
      overflow-y: auto;
      background-color: white;
      border-radius: 10px;
      text-transform: capitalize;
    }
  }

  .option {
    overflow: hidden;
    padding: 1px 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    text-align: left;
    font-family: 'TrueMediumNew';
    font-size: 18px;

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

  @media screen and (max-width: 860px) {
    .select-label {
      font-size: 20px;
      min-width: 160px;
      justify-content: space-around;
    }

    .red-template {
      min-width: 100px;
    }
  }
  @media screen and (max-width: 400px) {
    .select-label {
      font-size: 20px;
      min-width: 130px;
      justify-content: space-around;
    }

    .select-label {
      div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100px;
      }
    }
  }
  @media screen and (max-width: 350px) {
    .select-label {
      padding: 0px 10px;
      min-width: 0px;
    }

    .c-categories-filter {
      max-width: 118px;
    }

    .c-brands-filter {
      max-width: 98px;
    }
    .options {
      min-width: 0px;
    }
  }
</style>