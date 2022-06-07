<template>
  <div>
    <div
      class="result-container"
      v-show="filterResult && filterResult.length > 0"
    >
      <search-number-dialog
        :isSearchResult="true"
        :numbers="horoscopesList"
        :details="horoscopesDetail"
        ref="dialogs"
      />
      <div class="page-container">
        <div
          class="title"
          :class="[isOnlineStoreDetail ? 'OnlineStoreDetailClass' : '']"
        >
          <span
            v-if="isLucky9999Home"
            class="text-bold"
          >{{ Locale.search_result[$i18n.locale] }} </span>
          <span v-else>{{ Locale.search_result[$i18n.locale] }} </span>
          <span class="label">
            <span>({{ filterResult.length }} </span>
            <span>{{ Locale.search_result_numbers[$i18n.locale] }})</span>
          </span>
        </div>
        <div
          v-if="isLucky9999Home"
          class="description"
        >
          {{ Locale.lucky9999.search_result_description_prefix[$i18n.locale] }}
          <span class="text-bold">{{ Locale.lucky9999.time_out[$i18n.locale] }}</span>
          {{ Locale.lucky9999.search_result_description_suffix[$i18n.locale] }}
        </div>
        <div
          v-else
          :class="[isOnlineStoreDetail ? 'description OnlineStoreDetailClass' : 'description']"
        >{{ Locale.search_result_description[$i18n.locale] }}</div>
        <div class="result-grid-container">
          <div
            class="result-item"
            v-for="(item, key) in filterResult"
            :key="key"
          >
            <div
              class="result-card"
              :class="{'card-padding' : !isLucky9999Home}"
              :set="numType = (numberTypes.find(type => type.id === item.mobile_pattern_id) || {})"
            >
              <template v-if="isLucky9999Home">
                <div
                  class="result-banner-lucky-9999"
                  :id="`type-${numType.pattern}`"
                >
                  <div class="lucky-9999-title">
                    <template v-if="$i18n.locale === 'th'">{{numType.name_th}}</template>
                    <template v-else>{{numType.name_en}}</template>
                  </div>
                </div>
              </template>
              <div
                class="result-banner"
                v-else
              >
                <template v-if="isPrepaid">{{ Locale.prepaid[$i18n.locale] }}</template>
                <template v-else>{{ Locale.postpaid[$i18n.locale] }}</template>
              </div>
              <div :class="{'card-padding' : isLucky9999Home}">
                <div
                  class="number-type"
                  v-for="(num, key) in numberTypes"
                  :key="key"
                >
                  <template v-if="item.mobile_pattern_id === num.id">
                    <span :class="num.pattern.charAt(0) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(0)}}</span>
                    <span :class="num.pattern.charAt(1) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(1)}}</span>
                    <span :class="num.pattern.charAt(2) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(2)}}</span>
                    <span :class="num.pattern.charAt(3) === 'X' ? `text-${types[key + 1]}` : 'text-black'">{{num.pattern.charAt(3)}}</span>
                  </template>
                </div>
                <div class="number">
                  <template v-for="(i, index) in item.number">
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

                <div class="sum">{{ Locale.sum[$i18n.locale] }} {{ item.sum }}</div>
                <!-- <div @click="open(item.sum)" v-if="item.hasProphecy">
                    <span class="underline">{{Locale.meaning_title[$i18n.locale]}}</span>
                </div> -->
                <div class="price">
                  <template v-if="isLuckyHome">{{ Locale.start[$i18n.locale] }} {{ item.product_info.proposition_baseline }} ฿</template>
                  <template v-else-if="isPrepaid">{{ Locale.pricePrepaid[$i18n.locale] }} {{ prepaidPrice }} ฿</template>
                  <template v-else-if="isLucky9999Home">{{ Locale.start[$i18n.locale] }} {{ item.product_info.proposition_baseline }} ฿</template>
                  <template v-else>{{ Locale.start[$i18n.locale] }} {{ price }} ฿</template>
                </div>
                <button-element
                  class="button"
                  :class="{'bg-red' : isLucky9999Home}"
                  id="select_number"
                  @click="hold(item)"
                >{{ Locale.select[$i18n.locale] }}</button-element>
              </div>
            </div>
          </div>
        </div>
        <div
          v-show="!loading && !isLast"
          class="load-more"
          @click="$emit('load-more')"
          ref="loadMore"
        >Load more</div>
      </div>
    </div>
    <div
      v-if="!loading && (!filterResult || filterResult.length <= 0)"
      class="no-result"
    >{{ Locale.no_result[$i18n.locale] }}</div>
  </div>
</template>

<script>
  import 'intersection-observer'
  import Button from '@components/button'
  import Locale from './locale.json'
  import SearchNumberDialog from './search-number-dialog'

  export default {
    components: {
      'button-element': Button,
      'search-number-dialog': SearchNumberDialog
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
      types: Object,
      numberTypes: Array,
      selectedPackagePrice: Array,
      selectedGroup: Array
    },
    data: () => ({
      Locale,
      horoscopesDetail: {},
      horoscopesList: []
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
        return (
          this.$route.name === 'online-store-prepaid' ||
          this.$route.name === 'online-store-instantsim'
        )
      },
      isOnlineStoreDetail () {
        return this.$route.name === 'online-store-detail'
      },
      price () {
        if (this.pricePlans.length && this.pricePlans.length > 0) {
          const plans = this.pricePlans.map((item) => item.price)
          return Math.min(...plans)
        }
        return this.packages.baseline
      },
      prepaidPrice () {
        return this.product.price
      },
      filterResult () {
        if (this.isLucky9999Home) {
          const filterResult = this.result.filter((e) => {
            return (
              this.selectedPackagePrice.includes(
                parseInt(e.product_info.proposition_baseline)
              ) && this.selectedGroup.includes(e.mobile_pattern_id)
            )
          })
          return filterResult
        } else if (this.isLuckyHome) {
          if (this.$store.state.postpaid.horoscopes.record) {
            this.result.forEach((item) => {
              const objVal = this.$store.state.postpaid.horoscopes.record.filter(function (items) {
                return items.status === 'active' && items.score === item.sum
              })
              if (objVal.length > 0) {
                item.hasProphecy = true
              } else {
                item.hasProphecy = false
              }
            })
          }
          const filterResult = this.result.filter((e) => {
            return this.selectedPackagePrice.includes(
              parseInt(e.product_info.proposition_baseline)
            )
          })
          return filterResult.sort(
            (a, b) =>
              parseInt(b.product_info.proposition_baseline) -
              parseInt(a.product_info.proposition_baseline)
          )
        }
        return this.result
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
      if ('IntersectionObserver' in window) {
        const intersectionObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.intersectionRatio > 0)) {
            if (!this.loading && !this.isLast) this.$emit('load-more')
          }
        })
        intersectionObserver.observe(this.$refs.loadMore)
      }
    },
    methods: {
      hold (item) {
        this.$parent.holdNumber(item.number, item)
      },
      open (score) {
        this.horoscopesList = []
        this.horoscopesDetail = {}
        this.horoscopesList.push(score)
        this.horoscopesDetail = this.findHoroscopesDetail(score)
        this.$refs.dialogs.open()
      },
      findHoroscopesDetail (score) {
        const obj = {}
        if (this.$store.state.postpaid.horoscopes.record) {
          const objVal = this.$store.state.postpaid.horoscopes.record.filter(function (item) {
            return item.score === score
          })

          if (objVal.length > 0) {
            obj[objVal[0].score] = {
              title: objVal[0].title,
              description: objVal[0].description
            }
          }
        }
        return obj
      }
    }
  }
</script>

<style lang="scss" scoped>
.text-bold {
  font-family: "TrueBold";
}

.card-padding {
  padding: 0 8px 16px;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 300;

  .number-type {
    display: inline-flex;
    margin-bottom: 5px;

    .text-black {
      color: #37474f;
      font-family: "TrueMedium", "sans-serif";
    }
    .text-blue {
      color: #20639b;
      font-family: "TrueBold";
    }
    .text-red {
      color: #ea3019;
      font-family: "TrueBold";
    }
    .text-green {
      color: #219653;
      font-family: "TrueBold";
    }
    .text-yellow {
      color: #eabc19;
      font-family: "TrueBold";
    }
    .text-gray {
      color: #535353;
      font-family: "TrueBold";
    }
  }
}

.no-result {
  padding: 64px 24px;
  text-align: center;
  font-size: 22px;
}

.result-container {
  background: #eeeff2;
  font-size: 1.5em;
  text-align: center;

  .page-container {
    padding: 24px 24px 48px;
    max-width: 1100px;
    margin: auto;
  }

  .title {
    font-size: 36px;

    &.OnlineStoreDetailClass {
      line-height: 1.5;
      font-size: 36px;
    }

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

    &.OnlineStoreDetailClass {
      font-size: 24px;
    }
  }
}

.result-grid-container {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 28px;
}

.result-item {
  padding-top: 16px;

  .result-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 6px 0 hsl(0deg 0% 68% / 78%);
    position: relative;
    text-align: center;
    font-family: "TrueLight";
    line-height: 23px;

    @media (hover: hover) {
      &:hover {
        border-color: #e62627;
      }
    }

    .result-banner {
      color: #fff;
      background-color: #f00;
      display: inline-flex;
      padding: 8px 24px;
      font-family: "TrueBold";
      font-size: 18px;
      border-radius: 28px;
      align-items: center;
      line-height: 24px;
      height: 28px;
      transform: translateY(-15px);
    }

    .result-banner-lucky-9999 {
      border-radius: 8px 8px 0 0;
      color: #fff;

      &#type-YXXX {
        background-color: #20639b;
      }
      &#type-XXXY {
        background-color: #eabc19;
      }
      &#type-XXYY {
        background-color: #276733;
      }
      &#type-XYXY {
        background-color: #ea3019;
      }
      &#type-XYYX {
        background-color: #535353;
      }

      .lucky-9999-title {
        text-align: start;
        font-size: 24px;
        font-family: "TrueBold";
        padding: 5px 0 5px 16px;
      }
    }

    .number {
      font-size: 44px;
      color: #979797;
      font-family: "TrueBold";
      font-weight: 300;
      line-height: 32px;
      display: flex;
      width: 100%;
      justify-content: center;

      span.favorite {
        color: #f00;
      }
    }

    .content strong {
      font-family: "TrueBold";
      font-size: 22px;
    }

    .price,
    .sum {
      font-family: "TrueMedium", sans-serif;
      line-height: 22px;
    }
    .underline {
        cursor: pointer;
        line-height: 32px;
        color: blue;
        text-decoration: underline;
    }
    strong {
      font-family: "TrueBold";
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

@media screen and (max-width: 1000px) {
  .result-grid-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

@media screen and (max-width: 860px) {
  .result-grid-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .result-item .result-card .number {
    font-size: 32px;
  }

  .result-item .result-card .button {
    min-width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .result-item .result-card {
    .result-banner-lucky-9999 {
      .lucky-9999-title {
        padding-left: 5px;
        margin-left: 5px;
      }
    }

    .price,
    .sum {
      font-size: 21px;
    }
  }
}

@media screen and (max-width: 400px) {
  .result-item .result-card {
    .number {
      font-size: 26px;
    }
  }
}

@media screen and (max-width: 350px) {
  .result-item .result-card {
    .result-banner-lucky-9999 {
      .lucky-9999-title {
        margin-left: 2px;
      }
    }
  }
}
</style>
