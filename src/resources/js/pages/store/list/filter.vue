<template>
  <div
    v-if="!isShopPage || isShopPageFilter"
    class="filter"
    :class="{ active }"
  >
    <div
      class="filter-overlay"
      @click="close()"
    />
    <div class="filters-container">
      <div class="filter-title-container">
        <div class="filter-title">{{ Locale.filter[$i18n.locale] }}</div>
        <div
          class="filter-close"
          @click="close()"
        >&times;</div>
      </div>
      <div
        class="filter-category-container"
        :disabled="loadingProducts"
      >
        <div class="filter-container mobile-only">
          <div class="filter-items">
            <div
              v-if="!isShopPage"
              class="filter-item category"
              @click="goToNewSim"
            >{{ Locale.new_sim_register[$i18n.locale] }}</div>
            <div
              v-if="!isShopPage"
              class="filter-item category"
              id="pre-to-post-self-service-mobile"
              @click="goToPreToPostSelfservice"
            >{{ Locale.pre_to_post_ss[$i18n.locale] }}</div>
            <div
              v-if="!isShopPage"
              class="filter-item category"
              id="tol-apply-trueonline-mobile"
              @click="openCoverageDialog"
            >{{ Locale.tol_check_coverage[$i18n.locale] }}</div>
            <div
              v-if="!isShopPage"
              class="filter-item category small"
              :class="$i18n.locale"
              @click="openTrueOnlineTracking"
            >{{ Locale.tol_tracking[$i18n.locale] }}</div>
          </div>
        </div>
        <div class="filter-container">
          <div class="filter-title">{{ Locale.categories[$i18n.locale] }}</div>
          <div class="filter-items">
            <template v-if="filters">
              <div
                class="filter-item category"
                :class="{ active: category.filters[0].value === filter.category }"
                @click="filter.category = category.filters[0].value"
                v-for="(category, key) in categories.options"
                :key="key"
              >
                {{ category.title[$i18n.locale] || category.title.th }}
              </div>
              <br />
              <div
                v-if="!isShopPage"
                class="filter-item category desktop-only"
                @click="goToNewSim"
              >{{ Locale.new_sim_register[$i18n.locale] }}</div>
              <div
                v-if="!isShopPage"
                class="filter-item category desktop-only"
                @click="goToLucky9999"
              >{{ Locale.lucky9999[$i18n.locale] }}</div>
              <div
                v-if="!isShopPage"
                class="filter-item category desktop-only"
                id="pre-to-post-self-service"
                @click="goToPreToPostSelfservice"
              >{{ Locale.pre_to_post_ss[$i18n.locale] }}</div>
              <div
                v-if="!isShopPage"
                class="filter-item category desktop-only"
                id="tol-apply-trueonline"
                @click="openCoverageDialog"
              >{{ Locale.tol_check_coverage[$i18n.locale] }}</div>
              <div
                v-if="!isShopPage"
                class="filter-item category desktop-only"
                @click="openTrueOnlineTracking"
              >{{ Locale.tol_tracking[$i18n.locale] }}</div>
            </template>
            <template v-else>
              <div
                v-for="index in 10"
                :key="index"
                class="skeleton filter-item category"
              />
            </template>
          </div>
        </div>
        <div class="filter-container">
          <div class="filter-title">{{ Locale.brands[$i18n.locale] }}</div>
          <div class="filter-items">
            <template v-if="filters">
              <label
                class="filter-item"
                v-for="(brand, key) in brands.options"
                :key="key"
              >
                <input
                  type="radio"
                  v-model="filter.brands"
                  :value="brand.filters[0].value"
                  hidden
                >
                <div class="checkbox" />
                <span>{{ brand.title[$i18n.locale] || brand.title.th }}</span>
              </label>
            </template>
            <template v-else>
              <div
                v-for="index in 10"
                :key="index"
                class="skeleton filter-item category"
              />
            </template>
          </div>
        </div>
        <div class="filter-container">
          <template v-if="filter.category !== '0000'">
            <div class="filter-title">Price Range</div>
            <div class="filter-items price">
              <input
                type="number"
                placeholder="Min"
                v-model.number="price.min_price"
                :disabled="loading"
                @blur="validateMinPrice"
              />
              <div>-</div>
              <input
                type="number"
                placeholder="Max"
                v-model.number="price.max_price"
                :disabled="loading"
                @blur="validateMaxPrice"
              />
              <button-element
                @click="setPriceRange"
                :disabled="loading"
              >Apply</button-element>
            </div>
          </template>
          <div class="filter-items reset">
            <button-element
              class="button reset"
              @click="reset()"
              :disabled="loading"
            >{{ Locale.reset[$i18n.locale] }}</button-element>
          </div>
        </div>
      </div>
      <div class="filter-action-container">
        <button-element
          class="button reset"
          @click="reset()"
        >{{ Locale.reset[$i18n.locale] }}</button-element>
        <button-element
          class="button"
          @click="confirm()"
        >{{ Locale.confirm[$i18n.locale] }}</button-element>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@components/button";
import Locale from "./locale.json";
import { FETCH_STORE_FILTER } from "@store/actions.type";

export default {
  components: {
    "button-element": Button,
  },
  props: {
    loading: Boolean,
    loadingProducts: Boolean,
    storeSlugConfig: Object,
  },
  data: () => ({
    Locale,
    active: false,
    temp: {},
    filter: {
      category: "",
      brands: "",
      max_price: "",
      min_price: "",
      q: "",
    },
    price: {
      max_price: "",
      min_price: "",
    },
  }),
  computed: {
    filters() {
      if (!this.$store.state.store?.filter?.data) return false;
      const record = this.$store.state.store?.filter?.data.record;
      if (!record) return false;
      return record.find((item) => item.type === "filter").options;
    },
    categories() {
      let categories = this.filters?.find(
        (item) => item.section === "category"
      );
      categories = JSON.parse(JSON.stringify(categories));
      categories.options.unshift({
        title: {
          en: "All Categories",
          th: "ทั้งหมด",
        },
        filters: [
          {
            field_name: "plaza_category_id",
            value: "0000",
          },
        ],
      });
      categories.options = categories.options.map((option) => ({
        ...option,
        title: this.formatTitle(option.title),
      }));
      return categories;
    },
    brands() {
      let brands = this.filters.find((item) => item.section === "brand") || {
        options: [],
      };
      brands = JSON.parse(JSON.stringify(brands));
      brands.options.unshift({
        title: {
          en: "All Brands",
          th: "ทั้้งหมด",
        },
        filters: [
          {
            field_name: "feature_value_ids",
            value: "0000",
          },
        ],
      });
      return brands;
    },
    isShopPage() {
      return this.$route.name === "online-store-shop";
    },
    isCategoryPageSlug() {
      return this.$route.name === "online-store-list-slug";
    },
    isShopPageFilter() {
      return (
        this.$route.name === "online-store-shop" &&
        this.$store.state.store?.shop?.hide_filter !== true
      );
    },
  },
  watch: {
    "filter.category"(val) {
      if (this.active) this.updateFilterCategory(val);
      this.clearSearchQuery();
      this.change();
    },
    "filter.brands"() {
      this.clearSearchQuery();
      this.change();
    },
    "price.min_price"(value) {
      this.price.min_price = parseFloat(value);
      if (this.price.min_price < 0) this.price.min_price = 0;
    },
    "price.max_price"(value) {
      this.price.max_price = parseFloat(value);
      if (this.price.max_price < 0) this.price.max_price = 0;
    },
  },
  mounted() {
    const query = this.$route.query;
    this.filter = {
      category: query.category || "0000",
      brands: query.brand || "0000",
      q: query.q,
      min_price: Number(query.min_price),
      max_price: Number(query.max_price),
    };
    this.price = {
      min_price: this.filter.min_price ?? "",
      max_price: this.filter.max_price ?? "",
    };
    this.$emit("change", this.filter);
    window.addEventListener("resize", (e) => {
      const width = document.documentElement.clientWidth;
      if (width > 860 && this.active) this.reset();
    });
  },
  methods: {
    openCoverageDialog() {
      this.active = false;
      this.$parent.$parent.openCoverageDialog();
    },
    openTrueOnlineTracking() {
      this.active = false;
      this.$parent.$parent.$parent.$parent.openTrueOnlineTracking();
    },
    goToPreToPostSelfservice() {
      this.$router.push("/pre2post/verify");
    },
    goToNewSim() {
      this.$router.push("/packages");
    },
    goToLucky9999() {
      this.$router.push("/online-store/lucky9999");
    },
    validateMinPrice() {
      if (!this.price.max_price) return;
      if (this.price.min_price > this.price.max_price) {
        this.price.min_price = this.price.max_price;
      }
    },
    validateMaxPrice() {
      if (!this.price.min_price) return;
      if (this.price.max_price < this.price.min_price) {
        this.price.max_price = this.price.min_price;
      }
    },
    updateFilterCategory(id) {
      const params = {};
      if (id !== "0000") params.plaza_category_id = id;
      if (this.isShopPage) params.shop = this.$route.params.id;
      if (this.isCategoryPageSlug && this.storeSlugConfig?.category_id) {
        params.plaza_category_id = this.storeSlugConfig?.category_id;
      }
      this.$store.dispatch(FETCH_STORE_FILTER, params);
    },
    change() {
      if (this.active) return;
      if (this.filter.category === "0000") {
        this.price.min_price = "";
        this.price.max_price = "";
        delete this.filter.min_price;
        delete this.filter.max_price;
      }
      this.$emit("change", this.filter);
    },
    open() {
      this.temp = JSON.parse(JSON.stringify(this.filter));
      this.active = true;
    },
    close() {
      if (this.filter.category !== this.temp.category) {
        this.updateFilterCategory(this.temp.category);
      }
      this.filter = this.temp;
      this.active = false;
    },
    reset() {
      this.filter = {
        category: "0000",
        brands: "0000",
        min_price: "",
        max_price: "",
        q: this.filter.q,
        // brands: ['0000']
      };
      this.price.min_price = "";
      this.price.max_price = "";
      this.active = false;
      this.$emit("change", this.filter);
    },
    confirm() {
      this.active = false;
      this.setPriceRange();
    },
    setPriceRange() {
      delete this.filter.min_price;
      delete this.filter.max_price;
      if (this.price.min_price !== "") {
        this.filter.min_price = this.price.min_price;
      }
      if (this.price.max_price !== "") {
        this.filter.max_price = this.price.max_price;
      }
      this.change();
    },
    clearSearchQuery() {
      if (!this.filters || this.loading) return;
      if (!this.$route.query.q) return (this.filter.q = "");
      this.$parent.searchQuery = "";
      this.price.min_price = "";
      this.price.max_price = "";
      delete this.filter.min_price;
      delete this.filter.max_price;
    },
    updateSearchQuery(e) {
      this.filter.q = e;
    },
    formatTitle(title) {
      let titles = {};
      Object.keys(title).forEach((lang) => {
        let split = title[lang].split("_");
        titles = {
          ...titles,
          [lang]: title[lang].includes("_") ? split[1] : split[0],
        };
      });
      return titles;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 280px;
  min-width: 280px;
  font-size: 1.5em;
  color: #000;

  .filter-overlay {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    z-index: 1;
    transition: 150ms opacity ease;
  }

  .filters-container {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 330px;
    margin-left: auto;
    display: flex;
    flex-direction: column;

    .filter-title-container {
      display: none;
      height: 56px;
      border-bottom: 1px solid #ddd;
      padding: 0 16px;
      align-items: center;
      font-family: "TrueBold";
      font-size: 30px;

      .filter-title {
        flex: 1;
      }
      .filter-close {
        cursor: pointer;
      }
    }

    .filter-category-container {
      padding: 20px 24px 8px 0;
      flex: 1;
      overflow: auto;

      &[disabled] {
        pointer-events: none;
      }

      .filter-container {
        margin-bottom: 24px;

        &.mobile-only {
          display: none;
        }
      }

      .filter-title {
        font-size: 30px;
        font-family: "TrueBold";
        margin-bottom: 8px;
        line-height: 30px;
      }
      .filter-items {
        display: grid;

        &.price {
          grid-template-columns: 1fr auto 1fr;
          grid-gap: 8px 12px;
          color: #999;
          max-width: 220px;
          margin-bottom: 18px;

          [disabled] {
            opacity: 0.5;
          }

          input {
            text-align: center;
            min-width: 0;
            font-size: 18px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 36px;
            line-height: 36px;
          }

          button {
            grid-column: 1/-1;
            height: 40px;
            padding: 0;
            border-radius: 4px;
          }
        }

        &.reset {
          max-width: 220px;
          border-top: 1px solid #ddd;
          padding-top: 18px;

          .button.reset {
            background-color: #666;
            height: 40px;
            padding: 0;
            border-radius: 4px;
          }
        }

        .filter-item {
          display: flex;
          padding: 8px 0;
          cursor: pointer;

          &.category.skeleton {
            height: 26px;
            margin: 2px 0;
            background-color: #e3e3e3;
            position: relative;
            overflow: hidden;
            border-radius: 2px;
            width: 60%;

            &:nth-child(2n) {
              width: 70%;
            }

            &:nth-child(3n) {
              width: 40%;
            }

            &:nth-child(4n) {
              width: 60%;
            }

            &:nth-child(5n) {
              width: 70%;
            }
          }

          @keyframes skeleton-loading {
            from {
              left: -100px;
            }
            to {
              left: 100%;
            }
          }

          &.category {
            padding: 0;
            height: 30px;
            align-items: center;
            text-transform: capitalize;
          }

          &.active {
            margin-top: 1px;
            font-family: "TrueBold";
            color: #ff0000;
          }
          input:checked ~ .checkbox {
            border-color: #ff0000;
            color: #fff;
            &:after {
              content: "";
              position: absolute;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ff0000;
            }
          }
          .checkbox {
            min-width: 20px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: solid 1px #cccccc;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          span {
            line-height: 20px;
          }
        }
      }
    }

    .filter-action-container {
      padding: 16px;
      display: none;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;

      .button {
        min-width: initial;
        width: 100%;

        &.reset {
          background-color: #666;
        }
      }
    }
  }
}

@media screen and (max-width: 860px) {
  .filter {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;

    .filters-container {
      transform: translateX(330px);
      transition: 150ms transform ease;
    }

    &.active {
      display: block;
      opacity: 1;
      pointer-events: visible;

      .filter-overlay {
        opacity: 1;
        pointer-events: visible;
      }

      .filters-container {
        width: 90%;
        background: #fff;
        z-index: 4;
        transform: translateX(0);

        .filter-title-container {
          display: flex;
        }

        .filter-category-container {
          padding: 8px 16px;

          .filter-container.mobile-only {
            display: block;
          }

          .filter-title {
            font-size: 24px;
          }
          .filter-items {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;

            &.price {
              grid-template-columns: 1fr auto 1fr;
              max-width: 100%;

              button {
                display: none;
              }
            }

            &.reset {
              display: none;
            }

            .filter-item {
              &.category {
                border: 2px solid #eee;
                background-color: #eee;
                height: 50px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                line-height: 20px;
                padding: 0 4px;

                &.active {
                  border-color: #ff0000;
                  background: #fff;
                }
                &.small.en {
                  font-size: 20px;
                  line-height: 18px;
                }
              }
              &.desktop-only {
                display: none;
              }
            }
          }
        }

        .filter-action-container {
          display: grid;
        }
      }
    }
  }
}
</style>
