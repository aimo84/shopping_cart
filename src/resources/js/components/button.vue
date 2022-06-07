<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  button {
    border: none;
    outline: none;
    color: #fff;
    padding: 12px 24px;
    font-size: 24px;
    border-radius: 8px;
    min-width: 200px;
    background-color: #ff0000;
    cursor: pointer;
    font-weight: 500;
    transition: 150ms background-color ease;
    user-select: none;
    font-family: 'TrueMedium';

    &[disabled] {
      background-color: #9e9e9e;
      pointer-events: none;
      cursor: default;
    }
  }

  @media screen and (max-width: 860px) {
    button {
      font-size: 22px;
      padding: 12px;
    }
  }
</style>
