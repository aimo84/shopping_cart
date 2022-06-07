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
