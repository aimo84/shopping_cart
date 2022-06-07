<template>
    <div class="grid">
        <div class="grid grid-cols-2 relative">
          <div class="lg:text-4xl text-3xl font-bold px-3 py-2 text-center lg:cursor-pointer"
            :class="`${tab !== 'detail' ? 'opacity-50' : ''}`"
            @click="tab = 'detail'">
            {{ tabDetailTitle }} {{ productInfo.title[$i18n.locale] || productInfo.title.th }}
          </div>
          <div class="lg:text-4xl text-3xl font-bold px-3 py-2 text-center lg:cursor-pointer"
            v-if="productInfo.body_custom_html && productInfo.body_custom_html[$i18n.locale]"
            :class="`${tab !== 'term' ? 'opacity-50' : ''}`"
            @click="tab = 'term'">
            {{ tabTermTitle }}
          </div>
          <div class="grid grid-cols-2 border-b-7 border-solid border-red-500 -bottom-1.35 absolute w-[50%] transition-transform duration-300"
            :class="`${tab === 'term' ? 'transform-x-full' : ''}`" />
        </div>
        <div class="bg-white px-4 lg:px-6">
            <template v-if="tab === 'detail'">
              <div
                class="pt-4"
                v-if="productInfo.body_custom_html && productInfo.body_custom_html[$i18n.locale]"
                v-html="productInfo.body_custom_html[$i18n.locale]" />
              <div
                class="body-html"
                v-else
                v-html="productInfo.body_html[$i18n.locale] || productInfo.body_html.th" />
            </template>
            <template v-if="tab === 'term' && (productInfo.body_custom_html && productInfo.body_custom_html[$i18n.locale])">
              <div class="body-html" v-html="productInfo.body_html[$i18n.locale] || productInfo.body_html.th" />
            </template>
        </div>
      </div>
</template>

<script>
  export default {
    props: [
      'productInfo',
      'Locale',
      'tab'
    ],
    computed: {
      tabDetailTitle () {
        return this.productInfo.body_custom_html?.tab_detail?.[this.$i18n.locale] ||
          this.Locale.product_detail[this.$i18n.locale]
      },
      tabTermTitle () {
        return this.productInfo.body_custom_html?.tab_term_and_condition?.[this.$i18n.locale] ||
          this.Locale.product_detail_term[this.$i18n.locale]
      }
    }
  }
</script>
