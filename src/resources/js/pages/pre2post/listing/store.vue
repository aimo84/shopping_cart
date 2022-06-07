<template>
  <div class="store-container">
    <div class="store-products-container">
      <filter-element ref="filter" />
      <div class="product-container">
        <div class="product-header-container">
          <div class="product-header">
            <div class="product-header-title">
              <span>SIM </span>
              <span
                class="subtitle"
              >({{ packages.length }} {{ result[$i18n.locale] }})</span>
            </div>
            <div
              class="filter-button mobile"
              @click="$refs.filter.open()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="products-grid-container">
          <router-link
            :to="{
              name: 'pre2post-priceplan',
              params: {
                nas_code: item.nas_code
              },
              query: $route.query
            }"
            v-for="(item, key) in packages"
            :key="key"
            class="item"
            :id="`pre2post-${item.nas_code}`"
          >
            <div class="image-container">
              <div class="image">
                <img :src="item.package_image_desktop" loading="lazy" />
              </div>
            </div>
            <div class="title">{{ item.package_name }}</div>
            <div class="buy">{{Locale.buy[$i18n.locale]}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Filter from './filter'
  import Locale from './locale.json'

  export default {
    components: {
      'filter-element': Filter
    },
    data: () => ({
      Locale
    }),
    computed: {
      packages () {
        return this.$store.state.postpaid.packages.data.record
      },
      result () {
        return this.packages.length > 1 ? this.Locale.results : this.Locale.result
      }
    }
  }
</script>

<style lang="scss" scoped src="../../store/list/store.scss"></style>
<style lang="scss" scoped>
  .store-container .store-products-container {
    width: 100%;

    .product-container .product-header-container .product-header .filter-button.mobile {
      display: none;
    }

    .products-grid-container {
      .item {
        border: 1px solid #ddd;
        overflow: hidden;
        border-radius: 8px;
        text-decoration: none;
        display: flex;
        flex-direction: column;

        &:hover {
          border-color: #000;

          .buy {
            background-color: #000;
          }
        }

        .image-container {
          padding: 20px;
          border-bottom: 1px solid #ddd;

          .image {
            position: relative;

            &:after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }

            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              -o-object-fit: contain;
              object-fit: contain;
            }
          }
        }

        .title {
          padding: 16px;
          color: #000;
          flex: 1;
        }

        .buy {
          display: grid;
          place-items: center;
          height: 50px;
          background-color: #ee3124;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    .store-container .store-products-container {
      .product-container .product-header-container .product-header .filter-button.mobile {
        display: flex;
      }
      .products-grid-container {
        font-size: 20px;
        line-height: 20px;
        .item .buy {
          height: 40px;
        }
      }
    }
  }
</style>
