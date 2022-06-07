<template>
  <div>
      <div class="text-3xl font-bold px-3" style="padding-bottom: 1rem"> {{ Locale.accessories[$i18n.locale] }}</div>
      <div class="grid scroll-container bg-white" style="max-width:1200px; margin-left: 0px; padding: 10px">
          <button
                aria-label="Scroll left"
                class="hidden lg:grid place-items-center p-1"
                @click="scroll('productInfo.accessories', -300)"
              >
                <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
                </svg>
          </button>
          <div
            v-if="proAccessories"
            class="grid gap-4 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
            ref="productInfo.accessories"
          >
          <div
            v-for="(item, key) in proAccessories"
            :key="key"
            class="shadow-lg rounded-lg accessories-card-width"
          >
            
            <item-element
              :item="item"
              :accessories="accessories"
              :Locale="Locale"
            />
          </div>
          </div>
          <button
            aria-label="Scroll right"
            class="hidden lg:grid place-items-center p-1"
            @click="scroll('productInfo.accessories', 300)"
          >
          <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
          </svg>
          </button>
        </div>
  </div>
</template>

<script>
import Item from './item-accessories.vue'

export default {
  props: [
    'proAccessories',
    'accessories',
    'Locale'
  ],
  components: {
    'item-element': Item
  },
  methods: {
     scroll (ref, offset) {
        this.$refs[ref].scrollBy({ left: offset, behavior: 'smooth' })
      },
  }
}
</script>

<style lang="scss" scoped>
    // @import "./styles.scss";
</style>