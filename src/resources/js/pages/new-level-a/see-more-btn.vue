<template>
  <a class="see_more_btn">
    SEE MORE
  </a>
</template>

<style lang="scss">
  .see_more_btn {
    display: block;
    width: 180px;
    height: 38px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 4.5px;
    padding-bottom: 4.5px;
    font-family: "TrueMedium";
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    color: #E62627;
    text-decoration: none;
    text-align: center;
    border-radius: 30px;
    border: 2px solid #E62627;

    &[disabled] {
      background-color: #E1E1E1;
      background-image: none;
      pointer-events: none;
      cursor: default;
    }
  }
</style>
