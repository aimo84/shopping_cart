<template>
  <div>
    <div class="result-container" v-show="filterResult && filterResult.length > 0">
      <div class="page-container">
        <div class="title">
          <span>{{ Locale.search_result[$i18n.locale] }} </span>
          <span class="label">
            <span>({{ totalNumberItem }} </span>
            <span>{{ Locale.search_result_numbers[$i18n.locale] }})</span>
          </span>
        </div>
        <div class="description">{{ Locale.search_result_description[$i18n.locale] }}</div>
        <div class="result-grid-container" v-if="!loading">
          <div class="result-item" v-for="(item, key) in result" :key="key" @click="hold(item, key)">
            <div class="result-card card-padding" :set="numType = (numberTypes.find(type => type.id === item.mobile_pattern_id) || {})">
              <div class="result-banner">
                <template v-if="isPrepaid">{{ Locale.prepaid[$i18n.locale] }}</template>
                <template v-else>{{ Locale.postpaid[$i18n.locale] }}</template>
              </div>
              <div>
                <div class="number-type" v-for="(num, key) in numberTypes" :key="key">
                  <template v-if="item.mobile_pattern_id === num.id">
                    <span :class="num.pattern.charAt(0) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(0)}}</span>
                    <span :class="num.pattern.charAt(1) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(1)}}</span>
                    <span :class="num.pattern.charAt(2) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(2)}}</span>
                    <span :class="num.pattern.charAt(3) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(3)}}</span>
                  </template>
                </div>
                <div class="number">
                  <template v-for="(i, index) in item.number" >
                    <span
                      :key="`dash-${index}`"
                      v-if="index === 3 || index === 6"
                    >-</span>
                    <span
                      :key="index"
                      :class="{ favorite: (favorite.includes(i) && index > 2 )}"
                    >{{ i }}</span>
                  </template>
                </div>

                <span class="sum">{{ Locale.sum[$i18n.locale] }} <strong>{{ item.sum }}</strong></span>
                <span class="price">
                  <template v-if="isLuckyHome">{{ Locale.start[$i18n.locale] }} <strong>{{ item.product_info.proposition_baseline }} ฿</strong></template>
                  <template v-else-if="isPrepaid">{{ Locale.pricePrepaid[$i18n.locale] }} <strong>{{ prepaidPrice }} ฿</strong></template>
                  <template v-else>{{ Locale.start[$i18n.locale] }} <strong>{{ price }} ฿</strong></template>
                </span>

                <div class="select-button">
                  <div
                    class="grid place-items-center border border-gray rounded-full w-[30px] h-[30px]"
                    style="float: right;"
                    :class="{
                    'bg-red-500 border-red-500': selectedNumberIndexProp == key
                    }"
                  >
                    <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                        :fill="`${(selectedNumberIndexProp == key) ? '#FFF' : '#E0E0E0'}`"
                    />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <item-skeleton-element v-if="loading"/>
      </div>
    </div>
    <div class="result-container" v-if="result.length <= 0">
      <div v-if="loading">
        <div class="page-container">
          <div class="title">
            <span>{{ Locale.search_result[$i18n.locale] }} </span>
            <span class="label">
              <span>( 0 </span>
              <span>{{ Locale.search_result_numbers[$i18n.locale] }})</span>
            </span>
          </div>
          <item-skeleton-element />
        </div>
      </div>
      <div v-if="!loading && filterResult.length <= 0" class="no-result">{{ Locale.no_result[$i18n.locale] }}</div>
    </div>
  </div>
</template>

<script>
  import 'intersection-observer'
  import Button from '@components/button'
  import Locale from '../locale.json'
  import RadioButton from '@components/radio'
  import ItemSkeleton from './new-design-item-skeleton.vue'

  export default {
    components: {
      'button-element': Button,
      'radio-element': RadioButton,
      'item-skeleton-element': ItemSkeleton
    },
    props: {
      result: Array,
      favorite: Array,
      packages: [Object, Array],
      loading: Boolean,
      isLast: Boolean,
      product: Object,
      pricePlans: Array,
      totalNumberItem: Number,
      selectedNumberIndexProp: Number,
      types: Object,
      numberTypes: Array,
      selectedPackagePrice: Array,
      selectedGroup: Array
    },
    data: () => ({
      Locale
    }),
    computed: {
      isLucky9999Home () {
        return this.$route.name === 'online-store-lucky999-home'
      },
      isLucky9999 () {
        return this.$route.name === 'online-store-lucky999'
      },
      isLuckyHome () {
        return this.$route.name === 'online-store-lucky-home'
      },
      isPrepaid () {
        return (this.$route.name === 'online-store-prepaid' || this.$route.name === 'online-store-instantsim') && this.product.product_type === 'prepaid'
      },
      price () {
        if (this.pricePlans && this.pricePlans.length > 0) {
          const plans = this.pricePlans.map(item => item.price)
          return Math.min(...plans)
        }
        return this.packages.baseline
      },
      prepaidPrice () {
        return this.packages.baseline
      },
      filterResult () {
        if (!this.isLucky9999Home) return this.result
        return this.result.filter((e) => {
          return this.selectedPackagePrice.includes(parseInt(e.product_info.proposition_baseline)) && this.selectedGroup.includes(e.mobile_pattern_id)
        })
      }
    },
    watch: {
      selectedPackagePrice () {
        this.$emit('update', {
          sum: '00',
          page: 1,
          baselines: this.selectedPackagePrice.join(','),
          mobile_pattern_ids: this.selectedGroup.join(',')
        })
      },
      selectedGroup () {
        this.$emit('update', {
          sum: '00',
          page: 1,
          baselines: this.selectedPackagePrice.join(','),
          mobile_pattern_ids: this.selectedGroup.join(',')
        })
      }
    },
    mounted () {
    },
    methods: {
      hold (item, key) {
        this.$parent.updateSelectedNumber(item.number, key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text-bold {
    font-family: 'TrueBold';
  }
  .card-padding {
    padding: 0 8px 16px 8px;
    margin-top: 8px;
    font-size: 24px;
    font-weight: 300;

    .number-type {
      display: inline-flex;
      margin-bottom: 5px;

      .text-black {
        color: #37474f;
        margin-top: -1px;
      }
      .text-blue {
        color: #20639B;
        font-family: 'TrueBold';
      }
      .text-red {
        color: #EA3019;
        font-family: 'TrueBold';
      }
      .text-green {
        color: #219653;
        font-family: 'TrueBold';
      }
      .text-yellow {
        color: #EABC19;
        font-family: 'TrueBold';
      }
      .text-gray {
        color: #535353;
        font-family: 'TrueBold';
      }

    }
  }
  .no-result {
    padding: 64px 24px;
    text-align: center;
    font-size: 22px;
  }
  .result-container {
    font-size: 1em;
    text-align: center;

    .page-container {
      margin: auto;
    }

    .title {
      font-size: 36px;
      margin-bottom: 15px;

      .label {
        color: #696969;
        font-size: 24px;

        .mobile {
          display: none;
        }
      }
    }

    .description {
      line-height: 24px;
      max-width: 860px;
      margin: auto;
    }
  }
  .result-grid-container {
    margin-top: 27px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 22px;
  }
  .result-item {
    min-height: 152px;
    cursor: pointer;

    .result-card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
      position: relative;
      padding: 8px;
      text-align: center;
      font-family: 'TrueLight';
      font-size: 18px;
      line-height: 23px;
      overflow: auto;
      border: 2px solid transparent;

      @media (hover: hover) {
        &:hover {
          border-color: #E62627;
        }
      }

      .result-banner {
        color: #fff;
        background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
        font-size: 20px;
        margin-bottom: 20px;
        border-radius: 3px;
        align-items: center;
        width: 70px;
        height: 25px;
      }
      .result-banner-lucky-9999 {
        border-radius: 8px 8px 0 0;
        color: #fff;

        &#type-YXXX {
          background-color: #20639B;
        }
        &#type-XXXY {
          background-color: #EABC19;
        }
        &#type-XXYY {
          background-color: #276733;
        }
        &#type-XYXY {
          background-color: #EA3019;
        }
        &#type-XYYX {
          background-color: #535353;
        }

        .lucky-9999-title {
          text-align: start;
          font-size: 24px;
          font-family: 'TrueBold';
          padding: 5px 0 5px 16px;
        }
      }

      .number {
        font-size: 48px;
        color: #404040;
        font-family: 'TrueBold';
        font-weight: bold;
        line-height: 33px;
        clear: left;
        display: flex;
        justify-content: center;

        span.favorite {
          color: #f00;
        }
      }
      .content strong {
        font-family: 'TrueBold';
        font-size: 22px;
      }
      .sum {
        padding-right: 5px;
      }
      strong {
        font-family: 'TrueBold';
      }
      .select-button {
        display: flex;
        justify-content: flex-end;
      }
      .button {
        margin-top: 16px;
        height: 40px;
        line-height: 40px;
        padding: 0;
        background-color: #666;
        cursor: pointer;

        &:hover {
          background-color: #ff0000;
        }
      }
      .bg-red {
        background-color: #ff0000;
      }
    }
  }

  .load-more {
    display: inline-block;
    margin: 48px 24px 0;
    background: #828282;
    color: #fff;
    padding: 6px 24px;
    border-radius: 8px;
    font-size: 22px;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {

    .result-container {
      .title {
        font-size: 30px;
        margin-bottom: 16px;
        .label {
          .desktop {
            display: none;
          }
          .mobile {
            display: inline-block;
          }
        }
      }
      .result-grid-container {
        margin-top: 0;
      }
    }

    .result-item {
      min-width: 188px;
      min-height: 105px;

      .result-card {
        padding: 3px;
        line-height: 18px;

        .result-banner {
          margin-bottom: 0;
          max-width: 48px;
          max-height: 20px;
          line-height: 20px;
          font-size: 14px;
        }
        .number {
          font-size: 32px;
        }
        .sum {
          word-spacing: -2px;
        }
        .button {
          min-width: 100%;
        }
        .select-button {
          margin-top: 4px;

          div {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .result-item .result-card .result-banner-lucky-9999 {
      .lucky-9999-title {
        padding-left: 5px;
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .result-item .result-card .number {
      font-size: 26px;
    }
  }

</style>