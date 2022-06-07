<template v-if="productData">
  <a
    class="product_card_item"
    :class="[
      containerClass,
      isExclusiveOrBestSellerOnDetailPage ? 'detail_page' : '',
      componentType === `exclusive` || componentType === `best_seller` || componentType === `new_arrival` ? 'home_page': '',
    ]"
    :disabled="isSoldOut"
    :href="pageLink"
    @click="$emit('handleBtnclick', productData, route = false)"
  >
    <div v-if="showBenefit(productData)">
      <div class="benefit">
        <div class="headline" v-html="campBean.headline"></div>
      </div>
    </div>
    <div v-if="componentType !== 'new_arrival' && componentType !== 'flash_sale' && isInstallment" class="installment-payment-badge">
      <img v-if="isSoldOut" class="discount-img" :disabled="isSoldOut" src="/images/store/discount-out-of-stock-case.png" />
      <img v-else class="discount-img" src="/images/store/discount.jpg" />
    </div>
    <img
      class="product_img"
      :src="imgUrl"
      :alt="productName"
      :disabled="isSoldOut"
    />
    <svg
      v-if="componentType === 'flash_sale'"
      class="flash_sale_badge"
      viewBox="0 0 32 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.94118 3.08818V4.67641H4.67647V5.99994H1.94118V8.91171H0V1.76465H4.76471V2.29406C4.76471 2.73524 4.41176 3.08818 3.97059 3.08818H1.94118Z" fill="#FF0000"/>
      <path d="M16.0588 8.82382L15.5294 7.32382H12.8824L12.353 8.82382H10.4118L13.1471 1.67676H14.5588C15.0883 1.67676 15.6177 2.0297 15.7941 2.55911L18.2647 8.82382H16.0588ZM14.2941 3.17676L13.3236 6.00029H15.0883L14.2941 3.17676Z" fill="#FF0000"/>
      <path d="M24.0882 6.61779C24.0882 7.05897 23.9999 7.50014 23.8235 7.76485C23.647 8.02955 23.3823 8.29426 23.1176 8.47073C22.8529 8.6472 22.4999 8.73544 22.0588 8.82367C21.7058 8.91191 21.2646 8.91191 20.9117 8.91191C20.5588 8.91191 20.2058 8.91191 19.8529 8.82367C19.4999 8.73544 19.147 8.73544 18.7941 8.55897L18.9705 7.05897C19.2352 7.1472 19.4999 7.32367 19.8529 7.41191C20.2058 7.50014 20.5588 7.58838 20.9117 7.58838C21.0882 7.58838 21.1764 7.58838 21.3529 7.58838C21.5294 7.58838 21.6176 7.50014 21.7058 7.50014C21.7941 7.41191 21.8823 7.41191 21.9705 7.32367C22.0588 7.05897 22.0588 6.97073 22.0588 6.79426C22.0588 6.61779 21.9705 6.52955 21.8823 6.35308C21.7941 6.17661 21.7058 6.26485 21.5294 6.17661C21.3529 6.08838 21.1764 6.00014 20.9999 6.00014C20.8235 5.91191 20.5588 5.91191 20.3823 5.82367C20.2058 5.73544 19.9411 5.6472 19.7646 5.55897C19.5882 5.3825 19.4117 5.29426 19.2352 5.11779C19.0588 4.94132 18.9705 4.76485 18.8823 4.58838C18.7941 4.32367 18.7058 4.05897 18.7058 3.79426C18.7058 3.35308 18.7941 3.00014 18.9705 2.73544C19.147 2.47073 19.4117 2.20603 19.6764 2.02956C19.9411 1.85308 20.2941 1.76485 20.647 1.67661C20.9999 1.58838 21.3529 1.58838 21.7058 1.58838C22.0588 1.58838 22.4117 1.58838 22.6764 1.67661C23.0294 1.76485 23.2941 1.76485 23.5588 1.85308L23.4705 3.35308C23.2058 3.26485 22.9411 3.17661 22.6764 3.08838C22.4117 3.00014 22.147 3.00014 21.8823 3.00014C21.7941 3.00014 21.6176 3.00014 21.4411 3.00014C21.2646 3.00014 21.1764 3.00014 20.9999 3.08838C20.9117 3.17661 20.7352 3.17661 20.647 3.26485C20.5588 3.35308 20.4705 3.44132 20.4705 3.61779C20.4705 3.79426 20.5588 3.8825 20.647 3.97073C20.7352 4.05897 20.9117 4.1472 20.9999 4.23544C21.1764 4.32367 21.3529 4.32367 21.5294 4.41191C21.7058 4.50014 21.9705 4.50014 22.147 4.58838C22.3235 4.67661 22.5882 4.76485 22.7646 4.85308C22.9411 4.94132 23.1176 5.11779 23.2941 5.20603C23.4705 5.3825 23.5588 5.55897 23.647 5.73544C23.9999 6.00014 24.0882 6.26485 24.0882 6.61779Z" fill="#FF0000"/>
      <path d="M29.3823 8.82382V5.73558H27.0882V8.82382H25.2353V1.67676H26.2059C26.7353 1.67676 27.1765 2.11793 27.1765 2.64735V4.41205H29.4706V1.67676H31.3235V8.82382H29.3823Z" fill="#FF0000"/>
      <path d="M16.7647 14.8236L16.4118 13.7648H14.5588L14.2059 14.8236H12.8823L14.7353 9.9707H16.3235L18.1765 14.8236H16.7647ZM15.5294 10.9413L14.9118 12.8825H16.147L15.5294 10.9413Z" fill="#333333"/>
      <path d="M19.4117 14.8236V9.9707H20.0294C20.3823 9.9707 20.647 10.2354 20.647 10.5884V13.8531H22.6764V14.8236H19.4117Z" fill="#333333"/>
      <path d="M23.6471 14.8236V9.9707H27.0883V10.3236C27.0883 10.6766 26.8236 10.8531 26.5589 10.8531H24.9706V11.8236H27.0001V12.706H24.9706V13.8531H27.1765V14.7354H23.6471V14.8236Z" fill="#333333"/>
      <path d="M6.8824 0H12.6177L8.20593 7.41176H10.1471L4.32358 15L6.8824 8.82353H4.67652L6.8824 0Z" fill="#FF0000"/>
      <path d="M12.0882 13.3236C12.0882 13.6766 12 13.9413 11.9118 14.1178C11.8235 14.2942 11.647 14.4707 11.3823 14.6472C11.2059 14.7354 10.9412 14.8236 10.6765 14.9119C10.4118 15.0001 10.147 15.0001 9.88234 15.0001C9.61763 15.0001 9.44116 15.0001 9.17646 14.9119C8.91175 14.9119 8.64705 14.8236 8.47058 14.7354L8.55881 13.6766C8.73528 13.7648 8.91175 13.8531 9.17646 13.9413C9.44116 14.0295 9.61763 14.0295 9.88234 14.0295C9.97057 14.0295 10.0588 14.0295 10.147 14.0295C10.2353 14.0295 10.3235 14.0295 10.4118 13.9413C10.5 13.9413 10.5882 13.8531 10.5882 13.7648C10.5882 13.6766 10.6765 13.5884 10.6765 13.5001C10.6765 13.4119 10.6765 13.3236 10.5882 13.2354C10.5 13.1472 10.4118 13.0589 10.3235 13.0589C10.2353 12.9707 10.0588 12.9707 9.97057 12.8825C9.7941 12.8825 9.70587 12.7942 9.5294 12.7942C9.35293 12.706 9.26469 12.706 9.08822 12.6178C8.91175 12.5295 8.82352 12.4413 8.73528 12.3531C8.64705 12.2648 8.55881 12.0884 8.47058 12.0001C8.38234 11.8236 8.38234 11.6472 8.38234 11.4707C8.38234 11.206 8.47057 10.9413 8.55881 10.7648C8.64705 10.5883 8.82352 10.4119 9.08822 10.3236C9.35293 10.2354 9.5294 10.1472 9.7941 10.0589C10.0588 9.9707 10.3235 9.9707 10.5 9.9707C10.7647 9.9707 10.9412 9.9707 11.2059 10.0589C11.4706 10.0589 11.647 10.1472 11.8235 10.1472L11.7353 11.206C11.5588 11.1178 11.3823 11.0295 11.2059 11.0295C11.0294 11.0295 10.8529 10.9413 10.6765 10.9413C10.5882 10.9413 10.5 10.9413 10.4118 10.9413C10.3235 10.9413 10.2353 10.9413 10.147 11.0295C10.0588 11.0295 9.97057 11.1178 9.88234 11.206C9.7941 11.2942 9.7941 11.3825 9.7941 11.4707C9.7941 11.5589 9.7941 11.6472 9.88234 11.7354C9.97057 11.8236 10.0588 11.8236 10.147 11.9119C10.2353 11.9119 10.4118 12.0001 10.5 12.0001C10.6765 12.0001 10.7647 12.0883 10.9412 12.0883C11.1176 12.1766 11.2059 12.1766 11.3823 12.2648C11.5588 12.3531 11.647 12.4413 11.7353 12.5295C11.8235 12.6178 11.9118 12.7942 12 12.8825C12.0882 12.8825 12.0882 13.0589 12.0882 13.3236Z" fill="#333333"/>
    </svg>
    <template v-else-if="containerClass === 'exclusive_or_best_seller'">
      <div
        v-if="isSoldOut"
        class="sold_out_badge"
      >
        {{ Locale.sold_out[$i18n.locale] }}
      </div>
      <div
        v-else-if="isPreBooking"
        class="pre_booking_badge"
      >
        {{ Locale.pre_booking[$i18n.locale] }}
      </div>
    </template>
    <div class="content-info">
        <div class="infor_1">
            <p class="product_name">{{ productName }}</p>
            <p v-if="componentType !== 'flash_sale'" class="min_price">
              <template v-if="Math.trunc(minPrice) > 0">
                        <span> {{ Locale.start_at[$i18n.locale] }} </span>
                        {{ Math.trunc(minPrice).toLocaleString() }}.-
              </template>
              <template v-else>
                        {{ Locale.free[$i18n.locale] }}
              </template>
            </p>
        </div>
        <div
            v-if="componentType !== 'new_arrival'"
            class="infor_2"
            :class="(isSoldOut && !isExclusiveOrBestSellerOnDetailPage) ? 'opacity-0' : ''"
        >
          <p v-if="componentType === `flash_sale`">
            <span class="product_special_discount_rice">
              {{ Math.trunc(productSpecialDiscountPrice).toLocaleString() }}.-
            </span>
            <span v-if="Math.trunc(productOriginalPrice) > Math.trunc(productSpecialDiscountPrice)" class="product_original_rice">
              {{ Math.trunc(productOriginalPrice).toLocaleString() }}.-
            </span>

            <span
              v-if="RoundedPercentDiscount > 0"
              class="percentage_of_discount_value hidden"
            >
              {{ -RoundedPercentDiscount }}%
            </span>
          </p>
        </div>
        <button
            v-if="!isExclusiveOrBestSellerOnDetailPage && isFlashsalePage || componentType === `flash_sale` || componentType === `exclusive` || componentType === `best_seller` || componentType === `new_arrival`"
            class="hidden btn bg_gradient"
            :class="isPreBooking ? 'btn_pre_booking' : ''"
            :disabled="isSoldOut"
            @click="$emit('handleBtnclick', productData)"
        >
            {{ Locale[isPreBooking ? 'pre_booking' : 'buy_now'][$i18n.locale] }}
        </button>
    </div>
  </a>
</template>

<script>
  const [FLAST_SALE_TYPE, EXCLUSIVE_TYPE, BEST_SELLER_TYPE, NEW_ARRIVAL_TYPE, EXCLUSIVE_OR_BEST_SELLER_TYPE] = ['flash_sale', 'exclusive', 'best_seller', 'new_arrivals', 'exclusive_or_best_seller']

  export default {
    props: {
      componentType: {
        type: String,
        required: true
      },
      /*
        prop isCustomSize ONLY FOR 'exclusive' and 'best_seller'
        default false value (no need to set): component have default size for level A - FULL PAGE;
        true value (need to set): compoent have CUSTOM SIZE for levle A - EXCLUSIVE PAGE or BEST_SELLER PAGE
      */
      isCustomSize: {
        type: Boolean,
        default: false
      },
      productData: {
        default: () => ({
          pageLink: '#'
        })
      },
      campBean: Object,
      paramsID: Array
    },
    data () {
      return {
        Locale: {
          start_at: {
            en: 'Start at',
            th: 'เริ่มต้น'
          },
          up_to: {
            th: 'สูงสุด',
            en: 'Up to'
          },
          months: {
            th: 'เดือน',
            en: 'm'
          },
          buy_now: {
            th: 'ซื้อเลย',
            en: 'BUY NOW'
          },
          pre_booking: {
            th: 'จองล่วงหน้า',
            en: 'PRE BOOKING'
          },
          sold_out: {
            th: 'ขายหมดแล้ว',
            en: 'SOLD OUT'
          },
          free: {
            th: 'ฟรี*',
            en: 'Free*'
          }
        }
      }
    },
    computed: {
      showBenefit () {
        return (productData) => {
          if (this.paramsID) {
            if (this.paramsID.find(element => element === productData.id)) {
              return true
            } else {
              return false
            }
          }
          return false
        }
      },
      isCategoryPage () {
        return this.$route.name === 'online-store-list'
      },
      isFlashsalePage () {
        return this.$route.name === 'online-store-flashsale'
      },
      containerClass () {
        if (this.componentType === EXCLUSIVE_TYPE || this.componentType === BEST_SELLER_TYPE) return EXCLUSIVE_OR_BEST_SELLER_TYPE
        return this.componentType
      },

      isExclusiveOrBestSellerOnDetailPage () {
        if ((this.isCustomSize && this.containerClass === EXCLUSIVE_OR_BEST_SELLER_TYPE) || this.$route.name === 'online-store-list') {
          return true
        }

        return false
      },
      RoundedPercentDiscount () {
        if (this.componentType === FLAST_SALE_TYPE) {
          if (this.productOriginalPrice > this.productSpecialDiscountPrice) {
            let percentDiscount = (this.productOriginalPrice - this.productSpecialDiscountPrice) * 100 / this.productOriginalPrice
            if (percentDiscount < 10) {
              percentDiscount = Math.round(percentDiscount * 10) / 10
            } else {
              percentDiscount = Math.round(percentDiscount)
            }
            return percentDiscount
          } else {
            return 0
          }
        } else {
          return 0
        }
      },
      productName () {
        return this.productData.title.th
      },
      imgUrl () {
        return this.productData.images[0].url
      },
      productOriginalPrice () {
        return this.productData.compare_at_price_max
      },
      productSpecialDiscountPrice () {
        return this.productData.price_min
      },
      minPrice () {
        return this.productData.price_min
      },
      pageLink () {
        return window.url.MIX_APP_URL + '/online-store/item/' + this.productData.id
      },
      isSoldOut () {
        return this.productData.quantity === 0
      },
      isInstallment () {
        return this.productData.installment
      },
      isPreBooking () {
        return this.productData.preorder
      }
    }
  }
</script>

<style lang="scss">
  .home-page {
   .product_card_item {
     .product_img {
        margin: 45px auto;
     }
     @media only screen and (min-width: 415px) {
       &.exclusive_or_best_seller {
         width: 232px;
         height: 400px;
       }
     }
     @media only screen and (max-width: 414px) and (min-width: 400px) {
       &.flash_sale:nth-child(odd) {
         margin-left: 0px;
       }
     }
   }
  }
  .product_card_item {
    position: relative;
    display: inline-block;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    flex-shrink: 0;
    border: 3px solid transparent;
    text-decoration: none;

    &[disabled] {
      pointer-events: none;
      cursor: default;
    }

    .installment-payment-badge {
      position: absolute;
      text-align: left;
      padding: 15px 0px 0px 15px;
      .discount-img {
          height: 25px;
          width: 50px;
          @media screen and (max-width: 1024px) {
              height: 20px;
              width: 40px;
          }

          &[disabled] {
            opacity: 0.3;
            pointer-events: none;
            cursor: default;
          }
      }
    }

    &.flash_sale {
      width: 134px;
      height: 192px;
      border-radius: 6px;
      font-family: "TrueLight";

      .product_img {
        width: 90px;
        height: 90px;
        margin: 22px 22px 0px 22px;
      }

      &:hover:not([disabled]) {
        border: 3px solid #E62627;
      }

      .infor_1 {
        margin-top: 4px;
        margin-left: 7px;
        margin-right: 7px;
        color: #404040;
        font-size: 18px;
        line-height: 18px;
        overflow: hidden;
      }

      .product_name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 21px;
        max-height: 48px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .infor_2 {
        margin-left: 7px;
        margin-right: 7px;

        >p {
          height: 34px;
        }

        .product_special_discount_rice {
          font-family: "TrueBold";
          color: #E62627;
          font-size: 36px;
          line-height: 34px;
        }

        .product_original_rice {
          float: right;
          margin-top: 10px;
          color: #404040;
          font-size: 20px;
          line-height: 24px;
          text-decoration-line: line-through;
        }
      }
    }

    &.exclusive_or_best_seller {
      width: 180px;
      height: 330px;
      border-radius: 10px;
      font-family: "TrueMedium";

      &:hover:not([disabled]) {
        border: 3px solid #E62627;
      }

      .benefit {
        text-align: center;
        .headline {
          font-size: 23px;
          padding-top: 10px;
        }
      }

      .product_img {
        width: 150px;
        height: 150px;
      }

      .infor_1 {
        margin-top: 9.38px;
        height: 46px;
        text-align: center;
        line-height: 24px;
      }

      .product_name {
        color: #000000;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 21px;
        max-height: 48px;
        height: 41px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .min_price {
        font-family: "TrueBold";
        color: #E62627;
        font-size: 30px;

        span {
          font-family: "TrueLight";
          color: #404040;
          font-size: 18px;
        }
      }

      .infor_2 {
        margin-top: 6px;
        margin-left: 17px;
        margin-right: 17px;

        .installment {
          .percent {
            display: inline-block;
            height: 25px;
            width: 46px;
            padding: 0 1.5px 1px;
            font-family: "TrueBold";
            color: #FFFFFF;
            font-size: 15px;
            line-height: 25px;
            vertical-align: middle;
            border-radius: 4px;

            .zero {
              margin-left: 1px;
              font-size: 36px;
              vertical-align: -2px;
            }

            &[disabled] {
              background-color: #E1E1E1;
              background-image: none;
              pointer-events: none;
              cursor: default;
            }
          }

          .months {
            float: right;
            height: 25px;
            padding-top: 2px;
            font-family: "TrueMedium";
            color: #404040;
            font-size: 18px;
            line-height: 25px;
          }
        }
      }
    }

    &.exclusive_or_best_seller.detail_page {
      width: 180px;
      height: 330px;

      .product_img {
        width: 150px;
        height: 150px;
      }

      .infor_1 {
        margin-top: 20.58px;
      }

      .infor_2 {
        margin-top: 10px;
      }
    }

    &.new_arrival {
      width: 200px;
      height: 210px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
      font-family: "TrueLight";
      @media only screen and (max-width: 374px) {
        width: 154px;
      }

      @media only screen and (min-width: 375px) and (max-width: 412px) {
        width: 180px;
      }

      .product_img {
        padding-top: 20px;
        padding-bottom: 5px;
        width: 126px;
        height: 126px;
        margin: auto;
      }

      &:hover:not([disabled]) {
        border: 3px solid #E62627;
      }

      .infor_1 {
        margin-top: 10px;
        height: 42px;
        text-align: center;
      }

      .product_name {
        color: #000000;
        font-size: 20px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 21px;
        max-height: 48px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .min_price {
        font-family: "TrueBold";
        color: #E62627;
        font-size: 28px;
        line-height: 20.8px;

        span {
          font-family: "TrueLight";
          color: #404040;
          font-size: 18px;

        }
      }
    }

    .product_img {
      display: block;
      object-fit: contain;
      margin-left: 2px;
      margin-top: 45px;
      margin-bottom: 20px;

      &[disabled] {
        opacity: 0.3;
        pointer-events: none;
        cursor: default;
      }
    }

    .flash_sale_badge {
      position: absolute;
      height: 15px;
      top: 3px;
      left: 7px;
    }

    .tag_badge {
      position: absolute;
      top: 7px;
      left: 7px;
      padding-top: 3px;
      padding-bottom: 4px;
      padding-left: 12px;
      padding-right: 13px;
      font-family: "TrueLight";
      color: #FFFFFF;
      font-size: 14px;
      line-height: 13px;
      border-radius: 3px;

      &[disabled] {
        background-color: #E1E1E1;
        background-image: none;
        pointer-events: none;
        cursor: default;
      }
    }

    .sold_out_badge, .pre_booking_badge {
      position: absolute;
      top: 13px;
      right: 7px;
      padding: 3px 5px;
      font-family: "TrueBold";
      color: #DC4333;
      font-size: 16px;
      line-height: 16px;
      vertical-align: middle;
      border: 1px solid #E62627;
      border-radius: 4px;
    }

    .bg_gradient {
      background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
    }

    p {
      margin-top: 0;
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .hidden {
      display: none;
    }

    .btn {
      outline: none;
      border: none;
      min-width: 100px;
      padding-left: 0;
      padding-right: 0;
      font-family: "TrueBold";
      color: #FFFFFF;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      border-radius: 30px;
      cursor: pointer;

      &[disabled] {
        background-color: #E1E1E1;
        background-image: none;
        pointer-events: none;
        cursor: default;
      }

      &.btn_pre_booking {
        color: #E62627;
        background-color: #FFFFFF;
        background-image: none;
        border: 2px solid #E62627;
      }
    }

    .opacity-0 {
      opacity: 0;
    }

    @media screen and (max-width: 720px) and (min-width: 430px) {
      &.exclusive_or_best_seller,
      &.exclusive_or_best_seller.detail_page {
        width: 200px;

        .product_img {
          margin-left: 11px;
        }
      }
    }

    @media only screen and (min-width: 415px) {
      &.flash_sale {
        width: 190px;
        height: 340px;
        border-radius: 10px;

        .product_img {
          width: 120px;
          height: 120px;
          margin: 44px 35px 26px 35px;
        }

        .infor_1 {
          margin-top: 26px;
          margin-left: 12px;
          margin-right: 12px;
          height: 53px;
          font-size: 24px;
          line-height: 24px;
        }

        .infor_2 {
          margin-top: 3px;
          margin-left: 12px;
          margin-right: 12px;

          .product_original_rice {
            float: unset;
            margin-top: unset;
          }

          .percentage_of_discount_value {
            display: inline;
            float: right;
            margin-top: 6px;
            padding-top: 2.5px;
            padding-bottom: 2.5px;
            padding-left: 9.5px;
            padding-right: 9.5px;
            font-family: "TrueBold";
            color: #E62627;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            border: 1px solid #E62627;
            border-radius: 4px;
          }
        }

        .btn {
          width: 170px;
          margin-top: 8px;
          margin-left: 7px;
          padding-top: 6px;
          padding-bottom: 6px;
        }
      }

      &.exclusive_or_best_seller {
        height: 365px;

        &:hover:not([disabled]) {
          border: 3px solid #E62627;

          .btn_pre_booking {
            color: #FFFFFF;
            background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
            border: 2px solid transparent;
          }
        }

        .product_img {
          width: 170px;
          height: 170px;
        }

        .infor_1 {
          margin-top: -7.94px;
          height: 57px;
          line-height: 30px;
        }

        .product_name {
          font-size: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 21px;
          max-height: 48px;
          height: 41px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 4px;
        }

        .min_price {
          font-size: 36px;

          span {
            font-size: 24px;
          }
        }

        .infor_2 {
          margin-top: 11px;

          .installment {
            text-align: center;
            .months {
              float: unset;
              margin-left: 6px;
              padding-top: 0;
              font-size: 20px;
              line-height: 1;
              vertical-align: -4px;
            }
          }
        }

        .btn {
          width: 165px;
          padding-top: 6px;
          padding-bottom: 6px;
          margin: 30px auto;

          &.btn_pre_booking {
            padding-top: 4px;
            padding-bottom: 4px;
          }
        }
      }

      &.exclusive_or_best_seller.detail_page {
        height: 365px;

        .product_img {
          width: 170px;
          height: 170px;
        }

        .infor_1 {
          margin-top: -7.94px;
        }

        .infor_2 {
          margin-top: 19px;
        }
      }

      &.new_arrival {
        width: 315px;
        height: 235px;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

        .content-info {
          display: flex;
          align-items: center;
          height: 32%;
        }

        .product_img {
          padding-top: 7px;
          padding-bottom: 7px;
          width: 180px;
          height: 150px;
          margin: auto;
        }

        .infor_1 {
          margin-top: 0px;
          margin-left: 17px;
          width: 166px;
          height: auto;
          text-align: left;
        }

        .product_name {
          font-size: 24px;
          line-height: 25px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 21px;
          max-height: 48px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .min_price {
          font-size: 34px;
          line-height: 25px;

          span {
            font-size: 20px;
          }
        }

        .btn {
          margin-left: 10px;
          width: 48px;
          height: 36px;
        }
      }

      .flash_sale_badge {
        height: 20px;
        top: 5px;
      }

      .tag_badge {
        top: 12px;
        left: 12px;
        padding-top: 0;
        padding-bottom: 1px;
        padding-left: 14px;
        padding-right: 15px;
        font-size: 20px;
        line-height: 24px;
      }

      .sold_out_badge, .pre_booking_badge {
        top: 13.5px;
        right: 10px;
      }

      .btn {
        display: block;
      }
    }

    @media screen and (max-width: 414px) {
      &.flash_sale {
        height: 200px;
      }
      &.exclusive_or_best_seller,
      &.exclusive_or_best_seller.detail_page {
        .product_img {
          margin: 45px 0px 20px 12px;
        }
      }
      &.exclusive_or_best_seller.home_page {
        height: 290px;
      }
    }

    @media screen and (max-width: 414px) and (min-width: 400px) {
      &.flash_sale:nth-child(odd) {
        margin-left: 10px;
      }
    }

    @media screen and (max-width: 414px) and (min-width: 375px) {
      &.flash_sale {
        width: 170px;

        .product_img {
          background-color: grey;
          margin-left: 35px;
        }
      }
    }

    @media only screen and (max-width: 405px) and (min-width: 396px){
      &.exclusive_or_best_seller {
        height: 330px;
        .product_img {
          margin: 40px 0px 0px 10px;
        }
      }
      &.exclusive_or_best_seller.detail_page {
        height: 330px;
        .product_img {
          margin: 40px 0px 0px 12px;
        }
      }
    }

    @media screen and (max-width: 395px) {
      &.exclusive_or_best_seller,
      &.exclusive_or_best_seller.detail_page {
        max-width: 150px;
        min-width: 145px;
        height: 300px;
        .product_img {
          margin: 45px 0px 0px 4px;
          width: 135px;
          height: 135px;
        }
      }
    }
  }
</style>
