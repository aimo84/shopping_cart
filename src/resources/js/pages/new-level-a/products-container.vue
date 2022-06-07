<template>
  <div
    v-if="itemsNumber > 0"
    class="products_container"
    :class="[
      (componentType === 'flash_sale' && !isDetailPage) ? 'col_gap_6px' : 'col_gap_10px',
      (componentType === 'flash_sale' || isDetailPage) ? 'sm:col_gap_12px' : '',
      (componentType === 'new_arrival' || isDetailPage) ? 'flex_wrap row_gap_10px' : '',
      isDetailPage ? 'sm:row_gap_20px' : '',
      componentType === 'new_arrival' ? 'sm:max_w_640px' : '',
    ]"
    ref="productsContainer"
  >
    <product-card-item-element
      v-for="index in itemsNumber"
      :key="index - 1"
      :component-type="componentType"
      :is-custom-size="isDetailPage"
      :product-data="productsList[index - 1]"
      @handleBtnclick="productAction"
    />
  </div>
</template>

<script>
  import ProductCardItemElement from './product-card-item.vue'

  export default {
    components: { ProductCardItemElement },
    props: {
      componentType: {
        type: String,
        default: 'exclusive'
      },
      isDetailPage: {
        type: Boolean,
        /*
          false: for lvA full page
          true: for lvA detail pages (flash sale page, exclusive page, category page, top brand page)
        */
        default: false
      },
      productsList: Array,
      maxDisplayItems: [String, Number]
    },
    computed: {
      itemsNumber () {
        if (this.productsList) {
          return Math.min(this.productsList.length, Number(this.maxDisplayItems))
        }
      }
    },
    mounted () {
      this.trackAnalytics(true)
    },
    methods: {
      productAction (value, route = true) {
        if (route) this.$router.push(value.pageLink)
        this.trackAnalytics(false, value)
      },
      trackAnalytics (isView = false, value) {
        const product = value ? [value] : this.productsList
        const sim = ['sim', 'vlearn']
        const isSim = value ? sim.includes(product[0].type_of_product) : false
        const event = {
          event: 'ecommerce_event',
          event_category: isSim ? 'SIM' : 'device',
          event_action: isView ? 'impression' : 'click',
          event_label: isView
            ? (isSim ? 'SIM_impression' : 'device_impression')
            : (isSim ? 'SIM_click' : 'device_click'),
          ecommerce: {
            currencyCode: 'THB'
          },
        }
        const impressions = product.map((data, index) => ({
          name: data.title.th,
          id: data.id,
          price: parseFloat(data.price).toFixed(2),
          category: 'device',
          brand: '',
          position: index,
          dimension6: parseFloat(data.compare_at_price_max).toFixed(2),
          dimension7: parseFloat(data.price).toFixed(2),
          variant: '',
          dimension9: '',
          dimension10: '',
          dimension11: '',
          dimension8: '',
          list: isSim ? 'SIM' : 'device'
        }))

        if (isView) {
          event.ecommerce.impressions = impressions
        } else {
          event.ecommerce.click = { products: impressions }
        }
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(event)
      }
    }
  }
</script>

<style lang="scss">
  .products_container {
    display: flex;
  }

  .flex_wrap {
    flex-wrap: wrap;
  }

  .col_gap_6px {
    column-gap: 6px;
  }

  .col_gap_10px {
    column-gap: 10px;
  }

  .row_gap_10px {
    row-gap: 10px;
  }

  @media only screen and (min-width: 1200px) {
    .sm\:col_gap_12px {
      column-gap: 12px;
    }

    .sm\:row_gap_20px {
      row-gap: 20px;
    }

    .sm\:max_w_640px {
      max-width: 640px;
    }
  }
</style>
