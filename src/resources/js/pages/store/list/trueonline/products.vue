<template>
  <div class="store-container">
    <div class="store-products-container">
      <div class="filters-container">
        <div class="categories">
          <div class="category" selected>{{ Locale.levelc.tol_check_coverage[$i18n.locale] }}</div>
          <div
            class="category"
            @click="$parent.$parent.$parent.openTrueOnlineTracking()"
          >{{ Locale.levelc.tol_tracking[$i18n.locale] }}</div>
        </div>
        <div class="button-container">
          <button-element
            @click="back"
            class="button"
          >{{ Locale.levelc.back[$i18n.locale] }}</button-element>
        </div>
      </div>
      <div class="product-container">
        <div class="product-header-container">
          <div class="product-header">
            <div class="product-header-title">
              <span>{{ Locale.levelc.title[$i18n.locale] }}</span>
              <span class="green-indicator" />
            </div>
          </div>
        </div>
        <div
          class="products-grid-container"
          v-if="products && products.length > 0"
        >
          <template v-for="(product, key) in products">
            <router-link
              :to="`/trueonline/address/${product.id}`"
              :key="key"
              class="product"
              id="tol-lvd-apply-new"
            >
              <product-element
                :index="key"
                :data="product"
                :prepaid="[]"
                :postpaid="[]"
                trueonline
              />
            </router-link>
          </template>
        </div>
        <div class="products-grid-container" v-else>
          <product-element
            v-for="index in 3"
            :key="index"
            loading
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Product from '../product'
  import Locale from '../locale.json'

  export default {
    components: {
      'button-element': Button,
      'product-element': Product
    },
    data: () => ({
      Locale
    }),
    computed: {
      tol () {
        return this.$store.state.trueonline?.tolProducts
      },
      tolProducts () {
        return this.tol?.data
      },
      products () {
        if (!this.tolProducts) return []
        return this.tolProducts.map((e) => ({
          id: e.product_id,
          title: {
            th: e.product_data.description_th,
            en: e.product_data.description_en
          },
          price: e.product_data.price,
          compare_at_price_max: e.product_data.price,
          type_of_product: 'product',
          images: [{
            url: e.product_data.image.url || 'https://res.wemall.com/952117/w_400,h_400,c_crop/3672dce88e80aecff1841833a171383c/product-happy-family-1000x1000.png'
          }]
        }))
      }
    },
    methods: {
      back () {
        const query = JSON.parse(JSON.stringify(this.$route.query))
        Object.keys(query).forEach(key => !query[key] && delete query[key])
        delete query.trueonline
        this.$router.replace({ query }).catch(() => {})
        this.$parent.showTol = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.store-container {
  padding: 0;
  max-width: 1100px;
  margin: auto;
  position: relative;
  background-color: transparent;

  .store-products-container {
    padding: 24px 0;
    display: flex;

    .filters-container {
      width: 280px;
      min-width: 280px;
      font-size: 24px;
      color: #000;
      line-height: 30px;
      padding: 20px 0;

      .categories {
        padding-bottom: 18px;
        max-width: 220px;
        display: grid;
        grid-gap: 8px;
        line-height: 18px;

        .category {
          min-height: 30px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        [selected] {
          font-family: "TrueBold";
          color: red;
        }
      }

      .button-container {
        max-width: 220px;
        border-top: 1px solid #ddd;
        padding-top: 18px;

        .button {
          background-color: #666;
          height: 40px;
          padding: 0;
          border-radius: 4px;
        }
      }
    }

    .product-container {
      width: 100%;

      .product-header-container {
        color: #000;

        .product-header {
          line-height: 30px;
          display: flex;
          align-items: center;
          margin: 20px 0;

          .product-header-title {
            font-size: 40px;
            font-family: "TrueBold";
            flex: 1;
            text-transform: capitalize;
            display: flex;

            .green-indicator {
              border: 3px solid #fff;
              box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
              background-color: #6dd400;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              margin-left: 10px;
              margin-top: -2px;
            }
          }
        }
      }
    }

    .products-grid-container {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      margin-bottom: 20px;

      .product {
        flex: 1;
        display: flex;
        text-decoration: none;
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 1132px) {
  .store-container .store-products-container {
    padding: 24px 16px;
  }
}

@media screen and (max-width: 860px) {
  .store-container {
    .store-products-container {
      padding: 0;
      flex-direction: column;

      .filters-container {
        width: 100%;
        padding: 20px 16px;

        .categories {
          max-width: 100%;
        }
      }

      .product-container {
        padding: 0 16px;

        .product-header-container {
          .product-header {
            margin: 16px 0;

            .product-header-title {
              font-size: 30px;
            }
          }
        }

        .products-grid-container {
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .store-container {
    .store-products-container {
      .product-container {
        .products-grid-container {
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
      }
    }
  }
}
</style>
