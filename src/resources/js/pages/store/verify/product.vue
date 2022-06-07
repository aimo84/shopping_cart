<template>
  <div class="products-container">
    <div class="inner-page-container">
      <div class="title">{{ Locale.title[$i18n.locale] }}</div>
      <div class="products-grid-container">
        <template
          class="product-item"
          v-for="(item, key) in value"
        >
          <div
            class="product-item"
            :key="key"
          >
            <div class="product-image">
              <img :src="item.image" />
              </div>
            <div class="product-content">
              <div class="product-title">{{ item.title }}</div>
              <div class="product-description" v-if="item.custom_text">{{ item.custom_text[$i18n.locale] }}</div>
              <div class="product-price-container">
                <div class="product-price">
                  <template v-if="item.price === 0">{{ Locale.free[$i18n.locale] }} <span class="tnc">*</span></template>
                  <template v-else>{{ item.price }} ฿</template>
                </div>
                <div class="product-original-price" v-if="item.original_price">{{ item.original_price }}฿</div>
              </div>
              <button-element
                class="button"
                :class="{ selected: item.selected }"
                @click="updateProducts(item)"
              >
                <template v-if="item.selected">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
                  </svg>
                  <span>{{ Locale.selected[$i18n.locale] }}</span>
                </template>
                <template v-else>{{ Locale.select[$i18n.locale] }}</template>
              </button-element>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      value: Array
    },
    data: () => ({
      Locale
    }),
    methods: {
      updateProducts (item) {
        item.selected = !item.selected
        this.$emit('input', this.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .inner-page-container {
    max-width: 1100px;
    margin: auto;
  }

  .products-container {
    padding: 16px 24px 48px;
    background: #fff;
    margin-bottom: 28px;
    border-radius: 8px;
    font-size: 1.5em;

    .title {
      text-align: center;
      margin: 24px auto;
      font-size: 30px;
      line-height: 30px;
      font-family: 'TrueBold';
    }

    .products-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 16px;
      margin: 0 auto;

      .product-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        overflow: hidden;
        border-radius: 8px;

        .product-image {
          width: 100%;
          height: 0;
          padding-top: 100%;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
          }
        }

        .product-content {
          width: 100%;
          padding: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #fdfdfd;

          .product-title {
            font-size: 24px;
            line-height: 20px;
            color: #000;
            margin-bottom: 4px;
          }

          .product-description {
            font-size: 16px;
            line-height: 14px;
            color: #666;
            margin-bottom: 4px;
          }

          .product-price-container {
            display: flex;
            align-items: flex-end;
            flex: 1;
            padding: 8px 0 12px;

            .product-price {
              line-height: 20px;
              font-size: 30px;
              color: #ff0000;
              font-family: 'TrueBold';

              .tnc {
                font-size: 24px;
                vertical-align: text-top;
              }
            }

            .product-original-price {
              font-size: 18px;
              line-height: 17px;
              text-decoration: line-through;
              color: #999;
              margin-left: 8px;
            }
          }

          .button {
            width: 100%;
            height: 40px;
            padding: 0;
            background-color: #666;
            min-width: 100%;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;

            &.selected {
              background-color: #ff0000;
            }

            svg {
              fill: #fff;
              width: 20px;
              height: 20px;
              margin-right: 4px;
            }
          }
        }
      }
    }
  }

@media screen and (max-width: 860px) {
  .products-container {
    .products-grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 640px) {
  .products-container {
    .products-grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .products-container {
    .products-grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
