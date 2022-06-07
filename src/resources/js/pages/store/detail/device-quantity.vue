<template>
    <div class="grid grid-col-[80px-1fr] gap-4 lg:gap-4">
        <div class="mt-4 lg:mt-0 mt-0 font-bold text-black">{{ Locale.quantity[$i18n.locale] }}</div>
        <div class="grid gap-2">
            <div class="grid gap-2 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll">
            <button
                aria-label="Decrease Quantity"
                class="grid place-items-center w-[30px] h-[30px] bg-gray-300 disabled:bg-gray-500 rounded"
                @click="changeQuantities(quantity = quantity - 1)"
                :disabled="promotion !== 'handset_only' || quantity <= 1"
            >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="2" fill="#9C9C9C"/>
                </svg>
            </button>
            <button class="grid place-items-center w-[30px] h-[30px] font-bold">
                <template v-if="promotion === 'handset_only'">{{ quantity }}</template>
                <template v-else>1</template>
            </button>
            <button
                aria-label="Increase Quantity"
                class="grid place-items-center w-[30px] h-[30px] bg-gray-300 disabled:bg-gray-500 rounded"
                @click="changeQuantities(quantity = quantity + 1)"
                :disabled="promotion !== 'handset_only' || quantity >= inventory.quantity || this.productInfo.product_type === 'mnp'"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" fill="#9C9C9C"/>
                <rect x="9" width="16" height="2" transform="rotate(90 9 0)" fill="#9C9C9C"/>
                </svg>
            </button>
            <span
            v-if="inventory.quantity <=20"
            class="text-20 font-light text-grey"
            :class="{'text-red':inventory.quantity <=10}"
            style="line-height:1.5em">
            {{ Locale.stock_exist.first[$i18n.locale] }} {{inventory.quantity}} {{ Locale.stock_exist.last[$i18n.locale]}}
            </span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'Locale',
      'quantities',
      'promotion',
      'inventory',
      'changeQuantity',
      'productInfo'
    ],
    computed: {
      quantity: {
        get () {
          return this.quantities
        },
        set () {
        }
      }
    },
    methods: {
      changeQuantities (data) {
        this.$emit('changeQuantity', data)
      }
    }
  }
</script>

<style lang="scss">
    // @import './styles.scss';
</style>
