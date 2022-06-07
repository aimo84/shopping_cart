<template>
  <div class="gradient-container" :class="{ selected }">
    <img v-if="plan.recommended === '1'" class="hot-package" src="/images/icons/hot-package.png" />
    <div class="package-detail-container">
      <div class="">
        <div class="price-container">
          <div class="price">
            <span>{{ plan.price }}</span>
            <span class="baht">฿</span>
          </div>
          <div class="label">{{ Locale.per_month[$i18n.locale] }}</div>
          <button-element
            class="button"
            :class="{ selected }"
            @click="updateSelected"
          >
            <template v-if="selected">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
              </svg>
              <span>{{ Locale.plan_selected[$i18n.locale] }}</span>
            </template>
            <template v-else>{{ Locale.plan_select[$i18n.locale] }}</template>
          </button-element>
        </div>
        <div
          v-if="moveToUs"
          class="move-description"
        >{{ Locale.move[$i18n.locale] }}</div>
        <!-- benefit on top -->
        <template v-if="demo">
          <clm-benefit-element
            v-if="clm"
            type="demo"
            external-dialog
            @open-clm-dialog="openClmDialog"
            :product-type="product.product_type"
            :product-id="product.id"
            :propocode="plan.code"
            :nascode="$route.query.nas_code"
            :campCode="campCode"
            :productId="productId"
          />
        </template>
       <template v-else>
          <clm-benefit-element
            v-if="clm"
            type="bundle"
            external-dialog
            @open-clm-dialog="openClmDialog"
            :product-type="product.product_type"
            :product-id="product.id"
            :propocode="plan.code"
            :nascode="$route.query.nas_code"
          />
        </template>
        <!-- end of benefit on top -->
        <div
          v-html="plan.long_description"
          class="feature-container"
          :class="{ selected }"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import ClmBenefit from '@components/clm-benefit'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'clm-benefit-element': ClmBenefit
    },
    props: {
      plan: Object,
      clm: Boolean,
      moveToUs: Boolean,
      selected: Boolean,
      demo: String
    },
    data: () => ({
      Locale
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      campCode () {
        return this.$route.query.campId
      },
      productId () {
        return this.$route.query.productid
      }
    },
    methods: {
      updateSelected () {
        this.$emit('update', this.$vnode.key)
      },
      openClmDialog (e) {
        this.$emit('open-clm-dialog', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gradient-container {
    background-color: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    padding: 4px 0;
    display: flex;
    flex-direction: column;

    &.selected {
      padding: 4px;
      background: linear-gradient(180deg, #e57f07 0%, #ffe587 31%, #e4a20f 100%);
    }

    .hot-package {
      position: absolute;
      top: -6px;
      right: -2px;
      width: 55px;
    }

    .package-detail-container {
      background-color: #fdfdfd;
      border-radius: 5px;
      overflow: hidden;
      flex: 1;

      .price-container {
        text-align: center;
        padding: 4px 0;

        .price {
          font-size: 100px;
          line-height: 80px;
          font-family: "TrueBold";
          color: #e9242b;
          display: flex;
          align-items: baseline;
          justify-content: center;
          height: 70px;

          .baht {
            font-size: 48px;
            line-height: 80px;
            color: #999;
            margin-left: 4px;
          }
        }
        .label {
          font-family: "TrueBold";
          font-size: 24px;
          line-height: 30px;
          color: #999;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
          background-color: #666;
          min-width: initial;
          width: 80%;

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

      .move-description {
        text-align: center;
        padding: 16px 0;
      }

      .feature-container {
        font-size: 24px;
        line-height: 24px;
        padding: 12px 16px;

        &.selected {
          padding: 12px;
        }

        &::v-deep {
          p {
            margin: 12px 0;
          }
          hr {
            background: #ddd;
            height: 2px;
            border: none;
          }
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .gradient-container {
      .package-detail-container {
        .price-container {
          padding-top: 12px;

          .price {
            font-size: 60px;
            line-height: 60px;
            height: 50px;

            .baht {
              font-size: 30px;
              line-height: 60px;
            }
          }
          .label {
            font-size: 18px;
          }
          .button {
            margin: 8px auto;
          }
        }
        .feature-container {
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
</style>
