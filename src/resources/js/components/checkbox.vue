<template>
  <div class="input">
    <input
      ref="input"
      type="checkbox"
      :name="name"
      :id="id"
      :value="dataValue"
      :checked="value.includes(dataValue)"
    >
    <div class="checkbox" @click="$refs.input.click()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px" fill="#fff">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" stroke-width="1px" />
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      value: Array,
      dataValue: String
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 20px;

    input {
      opacity: 0;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;

      &:checked ~ .checkbox {
        border-color: #ff0000;

        svg {
          z-index: 1;
        }

        &:after {
          content: '';
          position: absolute;
          background-color: #ff0000;
          border-radius: 4px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .checkbox {
      position: relative;
      background: #fff;
      width: 20px;
      height: 20px;
      border-radius: 2px;
      border: solid 1px #cccccc;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: transparent;
      cursor: pointer;
      border-radius: 4px;
    }
  }
</style>
