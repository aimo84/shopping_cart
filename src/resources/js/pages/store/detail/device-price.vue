<template>
    <div class="grid gap-4">
        <div class="grid gap-2">
        <div class="flex justify-between">
            <!-- Title -->
            <div class="text-4xl font-bold text-black">{{ productInfo.title[$i18n.locale] || productInfo.title.th }}</div>
        </div>
        <div v-if="spacialDetail && spacialDetail.sub_header" class="font-light">
            {{spacialDetail.sub_header[$i18n.locale]}}
        </div>
        <!-- Rating -->
        <!-- <div class="grid gap-2 grid-flow-col justify-start items-center">
            <div>
            <template v-for="(j, key) in 5" >
                <svg :key="key" width="15" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m10.434 3.812 2.886.416a.998.998 0 0 1 .555 1.7L11.79 7.968a.998.998 0 0 0-.286.883L12 11.723a.998.998 0 0 1-1.446 1.054L7.97 11.423a.997.997 0 0 0-.929.001l-2.579 1.36a.998.998 0 0 1-1.449-1.05l.49-2.875a.999.999 0 0 0-.289-.883l-2.09-2.032a.997.997 0 0 1 .551-1.702l2.885-.423a.998.998 0 0 0 .751-.547L6.599.656A.998.998 0 0 1 8.39.653l1.294 2.614a.997.997 0 0 0 .75.545Z" fill="#FFCB4D"/>
                </svg>
            </template>
            </div>
            <div class="underline text-cyan text-xl">725 Ratings</div>
        </div> -->
        </div>
        <!-- Price -->
        <div class="grid gap-2 lg:gap-4 items-center justify-start grid-flow-row lg:grid-flow-col">
        <!-- <div
            v-if="inventory.original_price !== inventory.price"
            class="line-through text-gray-500"
        >
            {{ inventory.original_price.toLocaleString() }} {{ Locale.baht[$i18n.locale ]}}
        </div> -->
        <div class="grid items-center gap-4 grid-flow-col justify-start items-center h-[29px]">
            <div class="font-bold text-2xl flex items-end h-full" v-if="productInfo.product_type !== 'postpaid' && productInfo.product_type !== 'sim' ">
                {{Locale.start_price[$i18n.locale]}}
            </div>
            <div class="text-red font-bold text-4xl">
                {{minPrice.toLocaleString()}} {{Locale.baht[$i18n.locale]}}
            </div>
            <div
                v-if="discountPercentage"
                class="font-medium text-xl border border-red-500 rounded text-white bg-red-500 py-1 px-2 w-[60px]"
                :class="{'visible' : maxPrice === minPrice}"
              >
                <div class="flex justify-center items-center">{{discountPercentage}}</div>
            </div>
            <!-- <div
            v-if="inventory.original_price !== inventory.price"
            class="grid place-items-center bg-red-600 text-white text-2xl px-3 rounded"
            >31%</div> -->
        </div>
        <div v-if="isEntertainmentSIM" class="font-bold text-2xl flex items-end h-full">
            {{Locale.ent_sim.starting_price[$i18n.locale]}}
            {{startingPriceEntSIM.toLocaleString()}}{{Locale.ent_sim.baht[$i18n.locale]}}
            {{Locale.ent_sim.price_per_month[$i18n.locale]}}
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'productInfo',
      'maxPrice',
      'minPrice',
      'Locale',
      'isWishlist',
      'spacialDetail',
      'discountPercentage',
      'isEntertainmentSIM',
      'startingPriceEntSIM'
    ],
    method: {
      addWishlist () {
        this.$parent.addWishlist()
      },
      deleteWishlist () {
        this.$parent.deleteWishlist()
      }
    }
  }
</script>

<style lang="scss">
    // @import './styles.scss';
</style>
