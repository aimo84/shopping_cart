<template>
  <div class="input">
    <input
      ref="input"
      type="radio"
      :name="name"
      :id="id"
      :value="dataValue"
      :checked="dataValue === value"
      @change="$emit('input', $event.target.value)"
    >
    <div class="radio" @click="$refs.input.click()" />
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      value: String,
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

      &:checked ~ .radio {
        border-color: #ff0000;

        &:after {
          content: '';
          position: absolute;
          background-color: #ff0000;
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
      }
    }

    .radio {
      position: relative;
      background: #fff;
      width: 20px;
      height: 20px;
      border: solid 1px #cccccc;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: transparent;
      cursor: pointer;
      border-radius: 50%;
    }
  }
</style>
