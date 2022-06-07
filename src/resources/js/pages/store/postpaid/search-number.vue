<template>
  <div class="search-container" :class="[isOnlineStoreDetail ? 'OnlineStoreDetailClass' : '']">
    <search-number-dialog
      :isSearchResult="false"
      :numbers="horoscopesList"
      :details="horoscopesDetail"
      v-model="selectedNumber"
      ref="dialog"
    />
    <div class="page-container" :class="[isOnlineStoreDetail ? 'OnlineStoreDetailClass' : '']">
      <div class="lucky-or" v-if="isLuckyHome">OR</div>
      <div class="title" v-if="isLuckyHome || isLucky|| isLucky9999Home || isLucky9999" :class="{ lucky: isLuckyHome || isLucky || isLucky9999Home || isLucky9999 }">{{ Locale.search_number_title[$i18n.locale] }}</div>
      <div class="card-container">
        <div class="description">{{ Locale.search_number_subtitle[$i18n.locale] }}</div>
        <div class="number-container">
          <div class="number-field-container">
            <div class="number-title">{{ Locale.favorite[$i18n.locale] }}</div>
            <div class="number-button-container">
              <template v-for="i in 10">
                <div
                  :key="i"
                  :active="favorite.includes((i - 1).toString())"
                  class="number-button"
                  @click="toggleNumber(i - 1, 'favorite')"
                >{{ i - 1 }}</div>
              </template>
            </div>
          </div>
          <div class="number-field-container">
            <div class="number-title">{{ Locale.dislike[$i18n.locale] }}</div>
            <div class="number-button-container">
              <template v-for="i in 10">
                <div
                  :key="i"
                  :active="dislike.includes((i - 1).toString())"
                  class="number-button"
                  @click="toggleNumber(i - 1, 'dislike')"
                >{{ i - 1 }}</div>
              </template>
            </div>
          </div>
          <div class="number-field-container">
            <div>{{ Locale.sum[$i18n.locale] }}</div>
            <div class="sum-number-container">
              <dropdown-element :options="horoscopesList" v-model="selectedNumber" />
              <button-element
                class="meaning"
                @click="$refs.dialog.open()"
              >{{ Locale.meaning[$i18n.locale] }}</button-element>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button-element
            class="button reset"
            @click="reset"
          >{{ Locale.reset[$i18n.locale] }}</button-element>
          <button-element
            class="button search"
            @click="search"
            :disabled="loadingResult"
          >{{ Locale.search[$i18n.locale] }}</button-element>
        </div>
        <div :style="isOnlineStoreDetail ? `margin-top: 10px;` : ``">{{ Locale.serach_number_bottom[$i18n.locale] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@components/button'
  import Dropdown from '@components/dropdown'
  import SearchNumberDialog from './search-number-dialog'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'dropdown-element': Dropdown,
      'search-number-dialog': SearchNumberDialog
    },
    props: {
      loadingResult: Boolean
    },
    data: () => ({
      favorite: [],
      dislike: [],
      selectedNumber: '0',
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
      isLucky () {
        return this.$route.name === 'online-store-lucky'
      },
      isOnlineStoreDetail () {
        return this.$route.name === 'online-store-detail'
      },
      horoscopes () {
        return this.$store.state.postpaid.horoscopes.record
      },
      horoscopesDetail () {
        if (this.horoscopes) {
          return this.horoscopes.reduce((obj, item) => {
            obj[item.score] = {
              title: item.title,
              description: item.description
            }
            return obj
          }, {})
        }
      },
      horoscopesList () {
        if (this.horoscopes) {
          const data = this.horoscopes
            .map((horoscope) => {
              if (horoscope.status === 'active' && horoscope.score > 9) return horoscope.score
            })
            .filter(item => item)
            .sort((a, b) => a - b)
          data.unshift('00')
          return data
        }
      }
    },
    mounted () {
      if (this.horoscopesList) {
        this.selectedNumber = this.horoscopesList[0]
      }
    },
    methods: {
      trackAnalytics (e) {
        const fav = e.favorite.sort().join('_') || '-'
        const dis = e.dislike.sort().join('_') || '-'
        const sum = e.sum || '-'
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'search_mobile_number',
          event_action: 'search_number',
          event_label: `fav ${fav} | dis ${dis} | sum ${sum}`
        })
      },
      toggleNumber (value, type) {
        value = value.toString()
        const index = this[type].indexOf(value)
        if (index > -1) this[type].splice(index, 1)
        else this[type].push(value)
        // Prevent same value between "Favorite" and "Dislike"
        const reverse = type === 'favorite' ? 'dislike' : 'favorite'
        const reverseIndex = this[reverse].indexOf(value)
        if (reverseIndex > -1) this[reverse].splice(reverseIndex, 1)
        this.$emit('getValue', {
          favorite: this.favorite,
          dislike: this.dislike
        })
      },
      reset () {
        this.$parent.isFavorite = []
        this.$parent.isDislike = []
        this.favorite = []
        this.dislike = []
        this.selectedNumber = '00'
        this.$emit('update', {
          favorite: [],
          dislike: [],
          sum: '00',
          page: 1
        })
      },
      search () {
        const data = {
          favorite: this.favorite,
          dislike: this.dislike,
          sum: this.selectedNumber,
          page: 1
        }
        this.trackAnalytics(data)
        this.$emit('update', data)
      },
      setValue (e) {
        this.favorite = e.favorite
        this.dislike = e.dislike
        this.selectedNumber = e.sum
        this.search()
      }
    }
  }
</script>

<style lang="scss" scoped>
.search-container {
  font-size: 1.5em;
  text-align: center;
  background-color: #eeeff3;

  &.OnlineStoreDetailClass {
    font-size: 1em;
  }

  .page-container {
    padding: 24px;
    max-width: 1100px;
    margin: auto;
    position: relative;

    &.OnlineStoreDetailClass {
      padding: 5px 24px 24px 24px;
    }

    .lucky-or {
      position: absolute;
      left: 0;
      right: 0;
      top: -20px;
      margin: auto;
      width: 40px;
      height: 40px;
      background: #616161;
      border-radius: 50%;
      color: #fff;
      display: grid;
      place-items: center;
      font-family: 'TrueBold';
      line-height: 15px;
    }
  }

  .title {
    font-size: 36px;
  }
}

.card-container {
  margin: 16px 0;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(173, 173, 173, 0.78);
  text-align: center;

  .description {
    margin-bottom: 16px;
    line-height: 26px;
  }

  .number-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px;

    .number-field-container {
      text-align: left;

      .number-button-container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 2px;

        .number-button {
          color: #d9d9d9;
          background-color: #f5f5f5;
          border: 1px solid #ededed;
          border-radius: 4px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          cursor: pointer;

          &[active] {
            color: #fff;
            background-color: #f00;
          }

          &::selection {
            background-color: transparent;
          }
        }
      }

      .sum-number-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 8px;

        .meaning {
          height: 40px;
          padding: 0;
          min-width: 100px;
          border-radius: 4px;
          background-color: #666;
        }
      }
    }
  }

  .button-container {
    margin-top: 32px;

    .button {
      cursor: pointer;
    }

    .reset {
      margin-right: 4px;
      background-color: #999;
    }

    .search {
      margin-left: 4px;
      background-color: #f00;

      &[disabled] {
        background-color: #cacaca;
      }
    }
  }
}

@media screen and (max-width: 860px) {
  .search-container {
    .page-container .lucky-or {
      font-size: 20px;
      width: 36px;
      height: 36px;
      top: -18px
    }
    .title.lucky {
      font-size: 30px;
      line-height: 30px;
      text-align: left;
      font-family: 'TrueBold';

      span {
        color: #ff0000;
      }
    }
  }

  .card-container {
    .button-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;

      .button {
        min-width: auto;
      }
    }

    .number-container {
      grid-template-columns: repeat(1, 1fr);

      .number-field-container .number-button-container {
        grid-gap: 4px;
      }
    }
  }
}
</style>
