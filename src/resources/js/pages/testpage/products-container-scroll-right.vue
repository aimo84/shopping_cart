<template>
  <button
    aria-label="Scroll right"
    @click="$parent.$refs[productsContainerRef][0].$refs['productsContainer'].scrollBy({ left: 300, behavior: 'smooth' })"
  >
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999904 0.999999L11.3999 11L0.999903 21" stroke="#CCCCCC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script>
  export default {
    props: { productsContainerRef: String }
  }
</script>
