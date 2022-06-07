<template>
  <div class="search-container">
    <search-number-dialog
      :isSearchResult="false"
      :numbers="horoscopesList"
      :details="horoscopesDetail"
      v-model="selectedNumber"
      ref="dialog"
    />
    <div class="page-container">
      <div class="lucky-or" v-if="isLuckyHome">OR</div>
      <div class="title" v-if="isLuckyHome || isLucky|| isLucky9999Home || isLucky9999" :class="{ lucky: isLuckyHome || isLucky || isLucky9999Home || isLucky9999 }">{{ Locale.search_number_title[$i18n.locale] }}</div>
      <div class="card-container">
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
        </div>
        <div class="button-container">
          <div class="sum-number-container">
            <div class="sum-number-title">{{ Locale.sum[$i18n.locale] }}</div>
            <div class="sum-number-button">
              <dropdown-element :options="horoscopesList" v-model="selectedNumber" />
              <button-element
                class="meaning"
                @click="$refs.dialog.open()"
              >{{ Locale.meaning[$i18n.locale] }}</button-element>
            </div>
          </div>
          <div class="buttons">
            <button-element
              class="button reset"
              :style="isLucky9999Home || isLucky9999 ? 'margin-right: 4px;' : ''"
              @click="reset"
            >{{ Locale.reset[$i18n.locale] }}</button-element>
            <button-element
              class="button search"
              :style="isLucky9999Home || isLucky9999 ? 'margin-left: 4px;' : ''"
              @click="search"
              :disabled="loadingResult"
            >{{ Locale.search[$i18n.locale] }}</button-element>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@components/button";
import Dropdown from "@components/dropdown";
import SearchNumberDialog from "./new-design-search-number-dialog";
import Locale from "../locale.json";

export default {
    components: {
      "button-element": Button,
      "dropdown-element": Dropdown,
      "search-number-dialog": SearchNumberDialog
    },
    props: {
      loadingResult: Boolean
    },
    data: () => ({
      favorite: [],
      dislike: [],
      selectedNumber: "0",
      Locale
    }),
    computed: {
      isLucky9999Home() {
          return this.$route.name === "online-store-lucky999-home";
      },
      isLucky9999() {
          return this.$route.name === "online-store-lucky999";
      },
      isLuckyHome() {
          return this.$route.name === "online-store-lucky-home";
      },
      isLucky() {
          return this.$route.name === "online-store-lucky";
      },
      horoscopes() {
          return this.$store.state.postpaid.horoscopes.record;
      },
      horoscopesDetail() {
          return this.horoscopes.reduce((obj, item) => {
              obj[item.score] = {
                  title: item.title,
                  description: item.description
              };
              return obj;
          }, {});
      },
      horoscopesList() {
          const data = this.horoscopes
              .map(horoscope => {
                  if (horoscope.status === "active" && horoscope.score > 9)
                      return horoscope.score;
              })
              .filter(item => item)
              .sort((a, b) => a - b);
          data.unshift("00");
          return data;
      }
    },
    mounted() {
      this.selectedNumber = this.horoscopesList[0];
    },
    methods: {
      trackAnalytics(e) {
        const fav = e.favorite.sort().join("_") || "-";
        const dis = e.dislike.sort().join("_") || "-";
        const sum = e.sum || "-";
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "track_event",
            event_category: "search_mobile_number",
            event_action: "search_number",
            event_label: `fav ${fav} | dis ${dis} | sum ${sum}`
        });
      },
      toggleNumber(value, type) {
        value = value.toString();
        const index = this[type].indexOf(value);
        if (index > -1) this[type].splice(index, 1);
        else this[type].push(value);
        // Prevent same value between "Favorite" and "Dislike"
        const reverse = type === "favorite" ? "dislike" : "favorite";
        const reverseIndex = this[reverse].indexOf(value);
        if (reverseIndex > -1) this[reverse].splice(reverseIndex, 1);
        this.$emit("getValue", {
            favorite: this.favorite,
            dislike: this.dislike
        });
      },
      reset() {
        this.favorite = [];
        this.dislike = [];
        this.selectedNumber = "00";
        this.$emit("update", {
            favorite: [],
            dislike: [],
            sum: "00",
            page: 1
        });
      },
      search() {
        const data = {
            favorite: this.favorite,
            dislike: this.dislike,
            sum: this.selectedNumber,
            page: 1
        };
        this.trackAnalytics(data);
        this.$emit("update", data);
      },
      setValue(e) {
        this.favorite = e.favorite;
        this.dislike = e.dislike;
        this.selectedNumber = e.sum;
        this.search();
      }
    }
};
</script>

<style lang="scss" scoped>
  .search-container {
    font-size: 1em;
    text-align: center;

    .page-container {
      margin: auto;
      position: relative;

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
    padding: 0 48px 39px;
    background: #fff;
    text-align: left;
    font-family: 'TrueLight';

    .description {
      margin-bottom: 25px;
      line-height: 26px;
    }

    .number-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 30px;

      .number-field-container {
        text-align: left;

        .number-title {
          margin-bottom: 15px;
        }

        .number-button-container {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-gap: 8px;

          .number-button {
            color: #CCCCCC;
            background-color: #FFFFFF;
            border: 1px solid #CCCCCC;
            border-radius: 4px;
            text-align: center;
            height: 50px;
            line-height: 50px;
            cursor: pointer;

            &[active] {
              color: #fff;
              background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
            }

            &::selection {
              background-color: transparent;
            }

            @media (hover: hover) {
              &:hover {
                border-color: #E62627;
              }
            }
          }
        }
      }
    }

    .button-container {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 30px;

      .sum-number-container {
        .sum-number-title {
          margin-bottom: 10px;
        }

        .sum-number-button {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;

          .select {
            min-width: 145px;
          }

          .meaning {
            height: 40px;
            padding: 0;
            min-width: 145px;
            border-radius: 4px;
            background-color: #666666;
          }
        }
      }

      .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: end;
        justify-self: end;
        grid-gap: 15px;

        .reset {
          background-color: #fff;
          border: 2px solid #E62627;
          border-radius: 40px;
          color: #E62627;
          min-width: 160px;
          padding: 0;
          height: 40px;
        }

        .search {
          background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
          border-radius: 40px;
          min-width: 160px;
          padding: 0;
          height: 40px;

          &[disabled] {
            background-color: #cacaca;
          }
        }

        .button {
          cursor: pointer;
        }
      }
      input.input {
        border: 2px solid #E62627 !important;
        border-radius: 4px !important;
      }
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 451px) {
    .card-container {
      margin-top: 30px;
      padding-left: 30px;
    }
  }

  @media screen and (max-width: 450px) {
    .search-container {
      margin-bottom: 33px;

      .card-container {
      padding: 0;
      }

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

        grid-template-columns : repeat(1, minmax(150px, 1fr));
        grid-gap: 30px;

        .sum-number-container {
          width: 100%;

          .sum-number-button {
            grid-gap: 10px;

            .select, .meaning {
              max-width: 180px;
              min-width: 140px;
            }
          }
        }

        .buttons {
          width: 100%;
          grid-gap: 10px;

          button.button {
            max-width: 180px;
            min-width: 140px;
            margin-right: 0px;
          }
        }
      }

      .number-container {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;

        .number-field-container .number-button-container {
          grid-gap: 0px;

          .number-button {
            width: 30px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
</style>
