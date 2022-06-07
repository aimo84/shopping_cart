<template>
    <div
        v-if="promotions && promotions.length > 0 && productInfo.product_type !== 'mnp'"
        class="grid scroll-container"
    >
        <button
        aria-label="Scroll left"
        class="hidden lg:grid place-items-center p-1"
        @click="scroll('promotions', -300)"
        >
        <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
        </svg>
        </button>
        <div
        v-if="promotions && promotions.length > 0"
        class="grid gap-1 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
        ref="promotions"
        >
        <button
            v-for="(item, key) in promotions"
            :key="key"
            :data-test-promotion-id="item.id"
            class="rounded-xl w-full hover:shadow-lg"
            :class="{'shadow-lg': promotion === item.id && !isSpecialPromotion}"
            style="width: 150px; padding: 3px;"
            @click="changePromotions(item.id, false, item)"
        >
            <div
            class="flex flex-col p-2 rounded-lg text-left shadow-gray-500 h-full hover:shadow-thick-red-500"
            :class="{'shadow-thick-red-500': promotion === item.id && !isSpecialPromotion}"
            >
            <div class="flex-1 text-center font-medium" style="font-size: 20px">
                <template v-if="item.id === 'mnp_bundling_one_step'">
                <template v-if="$i18n.locale == 'en'">
                  {{Locale.mnp_bundling_one_step_top[$i18n.locale]}} <br/>
                  {{Locale.mnp_bundling_one_step_bottom[$i18n.locale]}}
                </template>
                <template v-else>
                  {{Locale.mnp_bundling_one_step_top[$i18n.locale]}}
                </template>
                </template>
                <template v-else>
                  {{ item.title[$i18n.locale] }}
                </template>
            </div>
            <div
                v-if="item.description"
                class="text-xl text-center font-light"
                style="margin: 0.5rem 0;"
            >{{ item.description }}</div>
            <div
              v-if="item.id === 'mnp_bundling_existing' && item.packages.find((i) => i.meta === 'entertainment_sim') ||
                    item.id === 'pre2post' && item.packages.find((i) => i.meta === 'entertainment_sim') ||
                    item.id === 'device_bundle_new_customer' && item.packages.find((i) => i.privilege_type === 'entertainment_sim')"
              class="font-light text-20"
            >
              {{ Locale.ent_sim.text[$i18n.locale]}}
            </div>
            <div v-else-if="typeof productInfo.config_free_device !== 'undefined' && typeof productInfo.config_free_device[item.id] !== 'undefined' && item.haveFreeDevice" class="text-20 font-light text-grey" v-html="productInfo.config_free_device[item.id].label_promotion[$i18n.locale]"></div>
            <div v-else class="text-20 font-light text-grey">{{ Locale.start_at[$i18n.locale] }}</div>
            <div class="flex justify-between items-end">
                <div
                  v-if="item.id === 'mnp_bundling_existing' && item.packages.find((i) => i.meta === 'entertainment_sim') ||
                        item.id === 'pre2post' && item.packages.find((i) => i.meta === 'entertainment_sim') ||
                        item.id === 'device_bundle_new_customer' && item.packages.find((i) => i.privilege_type === 'entertainment_sim')"
                  class="text-red text-3xl font-bold"
                >
                  <template v-if="item.min_price == 0">{{ Locale.ent_sim.free_price[$i18n.locale]}}</template>
                  <template v-else>{{ item.min_price.toLocaleString() }}.-</template>
                </div>
                <div v-else class="text-red text-3xl font-bold">{{ item.min_price.toLocaleString() }}.-</div>
                <div
                  class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                  :class="{'bg-red-500 border-red-500': promotion === item.id && !isSpecialPromotion}"
                >
                <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                    :fill="`${promotion === item.id && !isSpecialPromotion ? '#FFF' : '#CCC'}`"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        </div>
        <button
        aria-label="Scroll right"
        class="hidden lg:grid place-items-center p-1"
        @click="scroll('promotions', 300)"
        >
        <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
        </svg>
        </button>
    </div>
</template>

<script>
  export default {
    props: [
      'promotions',
      'promotion',
      'isSpecialPromotion',
      'Locale',
      'changePromotion',
      'productInfo'
    ],
    methods: {
      scroll (ref, offset) {
        const reference = Array.isArray(this.$refs[ref]) ? this.$refs[ref][0] : this.$refs[ref]
        reference.scrollBy({ left: offset, behavior: 'smooth' })
      },
      changePromotions (id, isSpecialPromotion, item) {
        const dataPromotion = {
          promotion: id,
          isSpecialPromotion: isSpecialPromotion,
          item: item
        }
        this.$emit('changePromotion', dataPromotion)
      }
    }
  }
</script>

<style lang="scss">
    // @import './styles.scss';
</style>
