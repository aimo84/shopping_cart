<template>
  <div class="gradient-container">
    <div class="package-detail-container">
      <div class="package-detail">
        <div class="price-container">
          <div class="price">
            <span>{{ plan.price }}</span>
            <span class="baht">฿</span>
          </div>
          <div class="label">{{ Locale.per_month[$i18n.locale] }}</div>
        </div>
        <div class="package-name">{{ plan.name }}</div>
        <div
          v-html="plan.long_description"
          class="feature-container"
        />
        <button-element
          class="button"
          @click="updateSelected"
          id="verify_package"
        >
          {{ Locale.plan_select[$i18n.locale] }}
        </button-element>
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
      plan: Object
    },
    data: () => ({
      Locale
    }),
    computed: {
      product () {
        return this.$store.state.products.productInfo.data.record
      }
    },
    methods: {
      updateSelected () {
        this.$emit('update', this.$vnode.key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gradient-container {
    background: linear-gradient(to bottom, #e8e8e8 10px, #fdfdfd 10px);
    border-radius: 8px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    padding: 4px 0;
    display: flex;
    flex-direction: column;

    .package-detail-container {
      background-color: #fdfdfd;
      border-radius: 5px;
      overflow: hidden;
      flex: 1;

      .package-detail {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .price-container {
        text-align: center;
        padding: 16px 0;
        background: #e8e8e8;
        color: #555;

        .price {
          font-size: 80px;
          line-height: 48px;
          font-family: "TrueBold";
          display: flex;
          align-items: baseline;
          justify-content: center;

          .baht {
            font-size: 48px;
            line-height: 36px;
            margin-left: 4px;
          }
        }
        .label {
          font-family: "TrueBold";
          font-size: 24px;
          line-height: 24px;
        }
      }

      .package-name {
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'TrueBold';
        font-size: 26px;
        line-height: 22px;
        padding: 16px 8px;
        color: #212121;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid #e8e8e8;
        }
      }

      .feature-container {
        font-size: 24px;
        line-height: 24px;
        padding: 0 16px;
        flex: 1;

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

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px auto 20px auto;
        background-color: #ff0000;
        min-width: initial;
        width: 80%;
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
