<template>
  <router-view :user="user" />
</template>

<script>
  export default {
    props: {
      user: [Object, Boolean]
    }
  }
</script>

<style lang="scss">
  @import "../profile/custom.scss";
  .page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0;
    background: #E5E5E5;;
  }
</style>
