<template>
  <div class="package-container">
    <div class="page-container">
      <div class="package-banner">
        <div class="title">{{ packages.name }}</div>
        <div class="package-cover">
          <img :src="image" />
        </div>
        <div class="package-information">
          <div class="title">{{ packages.name }}</div>
          <div class="description">{{ packages.term_short }}</div>
          <div class="mobile-number">{{ mobileNumber }}</div>
          <div class="price-container" v-if="!isDrLuckyPrepaid">
            <div>{{ Locale.start[$i18n.locale] }} <span class="baht">฿</span><span class="price">{{ price }}</span></div>
          </div>
          <div class="button-container" v-if="isDrLucky || isDrLucky9999">
            <div
              v-if="isDrLuckyPrepaid"
              class="button"
              @click="$emit('select-drlucky-prepaid-plan')"
            >{{ Locale.buy_now[$i18n.locale] }}</div>
            <div v-else class="button" @click="showDetail = !showDetail" :active="showDetail">
              <template v-if="showDetail">{{ Locale.hide_detail[$i18n.locale] }}</template>
              <template v-else>{{ Locale.show_detail[$i18n.locale] }}</template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <package-detail
      v-if="(isDrLucky || isDrLucky9999) && showDetail"
      class="package-detail"
      :packages="packages"
      :product="product"
    />
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    components: {
      'package-detail': () => import('../../pages/store/postpaid/package-detail')
    },
    props: {
      data: {
        type: Object,
        default: () => ({})
      },
      packages: Object
    },
    data: () => ({
      Locale,
      showDetail: false
    }),
    computed: {
      isDrLucky () {
        return this.$route.name === 'drlucky-verify' || this.$route.name.includes('drlucky-zodiac-verify')
      },
      isDrLucky9999 () {
        return this.$route.name === 'online-store-lucky-9999-verify'
      },
      isDrLuckyPrepaid () {
        return this.$route.name.includes('drlucky-zodiac-verify') && this.$route.query.sim_type === 'prepaid'
      },
      product () {
        return this.$store.state.products.productInfo.data.record
      },
      packageInfo () {
        return this.$store.state.postpaid.package.record[0]
      },
      pricePlans () {
        return this.$store.state.postpaid.pricePlan.data.record
      },
      name () {
        return this.packageInfo.name
      },
      price () {
        const plans = this.pricePlans.map(item => item.price)
        return Math.min(...plans)
      },
      image () {
        return this.packages.package_image_desktop
      },
      mobileNumber () {
        return this.data.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      }
    },
    mounted () {
      this.showDetail = this.isDrLuckyPrepaid
    }
  }
</script>

<style lang="scss" scoped>
.package-container {
  font-size: 1.5em;
  color: #212121;

  .page-container {
    max-width: 1300px;
    margin: auto;
  }

  .package-banner {
    display: grid;
    grid-template-columns: auto 1fr;

    & > .title {
      display: none;
    }

    .package-cover {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      padding: 32px;
      min-height: 280px;

      img {
        width: 100%;
        max-width: 240px;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
      }
    }

    .package-information {
      padding: 32px 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: #333;

      .title {
        font-family: 'TrueBold';
        font-size: 40px;
        line-height: 30px;
        margin-bottom: 16px;
      }
      .description {
        line-height: 32px;
        font-size: 32px;
      }
      .mobile-number {
        font-size: 60px;
        line-height: 60px;
        font-family: 'TrueBold';
        margin-top: 4px;
        flex: 1;
      }
      .price-container {
        margin-top: 8px;
        font-size: 30px;

        .price {
          color: #f00;
          font-family: 'TrueBold';
          font-size: 48px;
          line-height: 48px;
        }
        .baht {
          color: #f00;
          font-family: 'TrueBold';
        }
      }
      .button-container {
        display: flex;
        margin-top: 16px;

        .button {
          color: #fff;
          padding: 0 24px;
          font-size: 24px;
          border-radius: 8px;
          background-color: #ff0000;
          min-width: 200px;
          font-weight: 500;
          font-family: 'TrueMedium';
          height: 50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;

          &[active] {
            background-color: #000;
          }
        }
      }
    }
  }

  .package-detail {
    margin-bottom: 24px;
  }
}

@media screen and (max-width: 860px) {
  .package-container {
    .package-banner {
      grid-template-columns: 30% 1fr;
      padding: 0 24px 24px;

      & > .title {
        display: block;
        grid-column: 1/-1;
        font-size: 34px;
        line-height: 30px;
        font-family: 'TrueBold';
        padding: 8px 0 16px;
        color: #212121;
      }
      .package-cover {
        padding: 4px 20px 0 0;
        min-height: 0;
        align-items: flex-start;

        img {
          max-width: 180px;
        }
      }
      .package-information {
        padding: 0;

        .title {
          display: none;
        }
        .description {
          line-height: 24px;
          font-size: 24px;
        }
        .mobile-number {
          font-size: 40px;
          line-height: 40px;
        }
        .price-container {
          margin: 8px 0;

          .price {
            font-size: 30px;
            line-height: 30px;
          }
        }
        .button-container {
          margin-top: 0;

          .button {
            height: 40px;
            line-height: 40px;
            min-width: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .package-container {
    .package-banner {
      grid-template-columns: 35% 1fr;
      padding: 0 24px 24px;
    }
  }
}
</style>
