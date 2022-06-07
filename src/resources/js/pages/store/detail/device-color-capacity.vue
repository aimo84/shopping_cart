<template>
    <div class="grid lg:grid-col-[80px-1fr] gap-4 lg:gap-4" v-if="product.product_type !== 'postpaid' && product.product_type !== 'sim' ">
        <template v-for="(option, key) in options">
            <div
                :key="option.title"
                class="mt-4 lg:mt-0 font-bold text-black"
                style="margin-top: 1rem;"
            >
                <template v-if="option.title === 'ความจุ'">
                {{ Locale.capacities[$i18n.locale] }}
                </template>
                <template v-else-if="option.title === 'สี'">
                {{ Locale.colors[$i18n.locale] }}
                </template>
                <template v-else>
                {{ option.title }}
                </template>
            </div>
            <div
                :key="key"
                class="grid gap-2 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll"
                :class="{'gap-8 text-xl text-center': option.title === 'สี'}"
            >
                <template v-if="option.title === 'สี'">
                    <div
                        v-for="(item, key) in option.options"
                        :key="key"
                        class="flex flex-col items-center gap-2 text-center w-[52px] relative"
                    >
                        <div
                            class="color-out-of-stock border bg-gray-80 border-gray-80 rounded"
                            :class="`${ $i18n.locale === 'en' ? 'text-xs' : 'text-base'}`"
                            style="padding: 0 2px"
                            v-if="item.quantity === 0"
                        >
                            {{ Locale.out_of_stock[$i18n.locale] }}
                    </div>
                        <button
                        class="grid place-items-center w-[46px] h-[46px] rounded-full disabled:opacity-20 not-disabled-hover:[2px-solid-red-500]"
                        :class="{'border border-2 border-red-500': item.id === selectedOptions[option.title]}"
                        v-bind="{[`data-options-${option.title}-id`]: item.id}"
                        :disabled="item.quantity === 0"
                        @click="changeselectedOptions(option.title, item.id, item.quantity)"
                        >
                            <div
                                class="w-[38px] h-[38px] rounded-full shadow-inset"
                                :style="`background-color: ${item.code}`"
                            >
                            </div>
                        </button>
                        <label
                            class="w-full break-word"
                            :style="{opacity: (item.quantity === 0) ? 0.5 : 1}"
                        >
                            {{ item.title[$i18n.locale] || item.title.th }}
                        </label>
                    </div>
                </template>
                <div
                    v-else
                    v-for="(item, key) in option.options"
                    :key="key"
                    class="relative"
                >
                    <div
                        class="capacity-out-of-stock border bg-gray-80 border-gray-80 rounded"
                        :class="`${ $i18n.locale === 'en' ? 'text-xs' : 'text-base'}`"
                        v-if="item.quantity === 0 && option.title !== 'ขนาด'"
                    >
                        {{ Locale.out_of_stock[$i18n.locale] }}
                    </div>
                    <button
                        class="p-4 py-2 font-bold rounded-lg shadow-gray-500 disabled:bg-gray-600 disabled:text-white mt-4"
                        :class="{'shadow-red-500': item.id === selectedOptions[option.title]}"
                        v-bind="{[`data-options-${option.title}-id`]: item.id}"
                        :disabled="item.quantity === 0"
                        @click="changeselectedOptions(option.title, item.id, item.quantity)"
                    >{{ item.title[$i18n.locale] || item.title.th }}</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
  import {
    loggerAddon
  } from '@utils/addon'

  export default {
    props: [
      'Locale',
      'options',
      'selectedOptions',
      'changeselectedOption'
    ],
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      productId () {
        if (this.$parent.productId) {
          return this.$parent.productId
        }
        return this.$route.params.product
      },
      inventoryId () {
        if (this.$parent.inventory) {
          return this.$parent.inventory ? this.$parent.inventory.id : ''
        }
        return this.$route.params.inventory
      },
      inventory () {
        if (this.$parent.inventory) {
          return this.$parent.inventory ? this.$parent.inventory : ''
        }
        return this.product.inventories.find(e => e.id.toString() === this.inventoryId)
      }
    },
    methods: {
      changeselectedOptions (title, item, quantity, is_hide_device_only) {
        const selectedOption = {
          title: title,
          item: item,
          quantity: quantity,
          is_hide_device_only: is_hide_device_only
        }
        this.$emit('changeselectedOption', selectedOption)
        loggerAddon({
          event: 'visit product',
          productId: this.product.id,
          matcode: this.inventory?.sku
        })
      }
    }
  }
</script>

<style lang="scss">
    // @import './styles.scss';
</style>
