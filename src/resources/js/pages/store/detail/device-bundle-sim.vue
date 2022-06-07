<template>
  <div class="device-bundle-sim">
    <div class="header">
      <div class="header-title">
        <span>Promotion</span>
        <svg class="header-triangle" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="100,100 100,0 0,100" />
        </svg>
      </div>
      <div class="header-content">Special price for you: <span>{{ price && computeBalance(price) }}฿</span></div>
    </div>
    <div class="content">
      <div class="title bold">เงื่อนไข/สิทธิพิเศษ</div>
      <div class="title">{{ bundle.name }}</div>
      <div class="products">
        <div
          class="product"
          v-for="(item, key) in bundle.proposition_mobile"
          :key="key"
        >
          <div class="product-image">
            <img :src="item.package_image_desktop" />
          </div>
          <div class="product-title">{{ item.name }}</div>
          <div class="product-action">
            <router-link
              v-on:click.native="setAnalytics(item)"
              :to="{
                name: 'online-store-bundle',
                params: {
                  id: products.id,
                  bundle: bundle.id,
                  nas: item.nas_code
                },
                query: {
                  ep,
                  accs,
                  token: $route.query.token
                }
              }"
            >
              <button-element class="button">{{ Content.buynow[$i18n.locale] }}</button-element>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Content from './content.json'
  import {
    computeBalance,
    computeGtagProductLabel,
    computeGtagProductDetail
  } from '@utils/common'

  export default {
    components: {
      'button-element': Button
    },
    props: {
      bundle: Object,
      specialPrice: Number,
      products: Object,
      product: Object,
      accs: String,
      ep: String
    },
    data: () => ({
      Content
    }),
    computed: {
      price () {
        return this.bundle.price_after_discount_device_bundle_new_customer
      }
    },
    methods: {
      computeBalance,
      setAnalytics (item) {
        window.dataLayer = window.dataLayer || []
        console.log({
          event: 'ecommerce_event',
          event_category: 'SIM_bundle',
          event_action: 'product_click',
          event_label: computeGtagProductLabel(this.products, this.product),
          ecommerce: {
            currencyCode: 'THB',
            click: {
              actionField: {
                list: 'SIM'
              },
              products: [
                computeGtagProductDetail(this.products, this.product, true, 'postpaid', true)
              ]
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .device-bundle-sim {
    background: #f5f5f5;
    margin: 20px;
    font-size: 24px;
    border-radius: 8px;
    .header {
      background-color: #dddddd;
      font-family: "TrueBold";
      min-height: 50px;
      display: flex;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      overflow: hidden;
      .header-title {
        background-color: #a00000;
        font-size: 24px;
        color: #fff;
        padding-left: 20px;
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 20px;
      }
      .header-triangle {
        position: absolute;
        right: -20px;
        height: 100%;
        transform: rotate(180deg);
        width: 20px;
        fill: #a00000;
      }
      .header-content {
        height: 100%;
        align-items: baseline;
        display: flex;
        width: 100%;
        padding: 14px 4px;
        font-family: "TrueBold";
        line-height: 20px;
        span {
          font-size: 40px;
          color: #ff0000;
          margin-left: 8px;
        }
      }
    }
    .content {
      padding: 12px 22px;
      .title {
        color: #000;
        font-size: 24px;
        line-height: 20px;
        &.bold {
          font-family: "TrueBold";
        }
      }
      .products {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        margin: 16px 0;
        .product {
          padding: 16px;
          box-shadow: 0 3px 15px 0 rgba(0,0,0,.12);
          background-color: #fff;
          border-radius: 8px;
          text-align: left;
          display: flex;
          flex-direction: column;
          width: 100%;
          .product-image {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            height: 160px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .product-title {
            font-size: 24px;
            line-height: 24px;
            flex: 1;
            margin-bottom: 8px;
          }
          .product-price {
            font-family: "TrueBold";
            color: #000;
            font-size: 30px;
            margin-top: 24px;
            line-height: 30px;
          }
          .product-action {
            margin-top: 8px;
            .button {
              min-width: 100%;
              height: 40px;
              padding: 0 8px;
              line-height: 40px;
              font-family: "TrueBold"
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .device-bundle-sim .header {
      .header-title {
        padding-left: 8px;
      }
      .header-content {
        align-items: center;
        padding-right: 8px;
      }
    }
  }
</style>
