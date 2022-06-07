<template>
  <div class="search-item">
    <input
      type="text"
      name="search-suggest"
      class="search"
      ref="searchSuggest"
      autocomplete="off"
      :placeholder="data.option_bar_mb_placeholder[$i18n.locale]"
      @keyup.enter="search"
      @input="onInput"
      :error="error"
      :value="value"
      @touchstart="searchPage"
      @click="getSearchHistory(value)"
      @focus="toggle(true)"
      @blur="toggle(false)"
    />
    <button
      v-if="checkQuery() && this.value"
      @click="clearQuery()"
      class="search-query-clear-btn"
    >
      <span class="cross-sign-big">X</span>
      <span class="cross-sign-small">x</span>
    </button>

    <div
      class="desktop-placeholder"
      :style="value.length > 0 ? 'display: none;' : ''"
    >
      {{data.option_bar_placeholder[$i18n.locale]}}
    </div>
    <img
      src="/images/icons/icon-search.svg"
      alt="Search icon"
      class="search-icon"
      @click="search"
    >
    <div
      class="dropdown-content suggest"
      v-if="opened && showSuggestion && this.value && !showHistory"
    >
      <div class="search-section">
        <div
          v-for="(suggest, item) in suggestion"
          :key="item"
        >
          <a @mousedown="selectSearch(suggest)"><span>{{ suggest }}</span></a>
        </div>
      </div>
    </div>
    <div
      class="dropdown-content"
      v-if="opened && showHistory"
    >
      <div class="history-header">
        <span class="history-text">{{data.history_search_text[$i18n.locale]}}</span>
        <a
          class="clear-history-text"
          @mousedown="clearHistory"
        >{{data.clear_search_text[$i18n.locale]}}</a>
      </div>
      <div class="search-section">
        <div
          v-for="(history, item) in historySearchData"
          :key="item"
        >
          <a @mousedown="selectSearch(history)"><span>{{ history }}</span></a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import data from "./header/header.json";
import {
  GET_SEARCH_SUGGEST,
  GET_HISTORY_SEARCH,
  CLEAR_HISTORY_SEARCH,
  SET_HISTORY_SEARCH,
} from "@store/actions.type";

export default {
  props: {
    value: String,
  },
  data: () => ({
    data,
    error: false,
    showSuggestion: false,
    showHistory: false,
    suggestion: [],
    historySearchData: [],
    q: "",
    opened: false,
  }),
  methods: {
    selectSearch(keyword) {
      this.q = keyword.trim();
      this.setSearchHistory();
    },
    search() {
      this.error = !this.value;
      if (!this.value && this.$route.query.q) {
        window.location.href = "/online-store";
      }
      this.setSearchHistory();
    },
    onInput(e) {
      this.$emit("input", e.target.value);
      this.callSearchSuggestion(e.target.value.trim());
      if (!this.error) return;
      this.error = !e.target.value;
    },
    searchPage() {
      if (this.$route.query.q) {
        this.$router.push({
          path: "/search",
          query: { q: this.$route.query.q },
        });
      } else {
        this.$router.push("/search");
      }
    },
    async callSearchSuggestion(keyword) {
      this.showSuggestion = false;
      this.showHistory = false;
      if (keyword !== "") {
        await this.$store
          .dispatch(GET_SEARCH_SUGGEST, { q: keyword })
          .then((res) => {
            if (res.data.length > 0 && keyword) {
              this.suggestion = res.data;
              this.showSuggestion = true;
            } else {
              this.clearSuggestion(keyword);
            }
          })
          .catch((err) => {
            this.clearSuggestion(keyword);
          });
      } else {
        this.clearSuggestion(keyword);
      }
    },
    clearSuggestion(keyword) {
      this.q = "";
      this.suggestion = [];
      this.showSuggestion = false;
      if (keyword === "") {
        this.getSearchHistory(keyword);
      }
    },
    async getSearchHistory(keyword) {
      const searchKey = keyword.trim();
      if (searchKey === "") {
        await this.$store.dispatch(GET_HISTORY_SEARCH).then((res) => {
          this.historySearchData = res;
        });
        if (this.historySearchData.length > 0) {
          this.showHistory = true;
        }
      } else {
        this.callSearchSuggestion(searchKey);
      }
    },
    async setSearchHistory() {
      let keyword = this.$refs.searchSuggest.value.trim();
      if (keyword || this.q) {
        if (this.q !== "") {
          keyword = this.q;
        }
        this.$emit("input", keyword);
        await this.$store.dispatch(SET_HISTORY_SEARCH, { keyword: keyword });
        this.$emit("search");
      }
    },
    toggle(opened) {
      this.opened = opened;
      this.$emit(opened ? "focus" : "blur");
    },
    async clearHistory() {
      await this.$store.dispatch(CLEAR_HISTORY_SEARCH).then((res) => {
        this.showHistory = false;
        this.historySearchData = [];
      });
    },
    checkQuery() {
      if (this.$route.query?.q) return true;
      return false;
    },
    clearQuery() {
      window.location.href = "/online-store";
      this.$router.replace({ query: {} });
      this.q = "";
      this.value = "";
    },
  },
};
</script>

<style scoped lang="scss">
.search-item {
  height: 44px;
  font-size: 20px;
  position: relative;
  width: 100%;
  input {
    font-family: "TrueMedium";
    width: 100%;
    height: 100%;
    border-radius: 99px;
    border: 1px solid #cccccc;
    margin-top: 5px;
    font-size: 20px;
    padding-left: 15px;
    outline: none;
    color: #404040;
  }
  .desktop-placeholder {
    font-family: "TrueMedium";
    display: block;
    position: absolute;
    font-size: 20px;
    top: 11px;
    left: 17px;
    color: #8e8e8e;
    pointer-events: none;
  }
  .search-icon {
    position: absolute;
    right: 8px;
    top: 9px;
    width: 38px;
    height: 35px;
  }

  .dropdown-content {
    position: absolute;
    background-color: white;
    width: 93%;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 2;
    margin-left: 12px;
    &.suggest {
      padding-top: 15px;
    }
    .history-header {
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      .history-text {
        color: #8c8c8c;
      }
      .clear-history-text {
        color: #e62627;
      }
    }
    .search-section {
      padding-bottom: 10px;
    }
  }

  .dropdown-content a {
    color: black;
    padding: 0px 15px;
    text-decoration: none;
    display: block;
    &.clear-history-text {
      padding: 0px;
      &:hover {
        background-color: transparent;
        cursor: pointer;
      }
    }
    &:hover {
      color: #e62627;
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 1280px) {
  header {
    .search-item {
      input::placeholder {
        color: transparent;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  header {
    .options-bar {
      .search-item {
        input {
          height: 30px;
          padding-left: 10px;
          margin-top: 7px;
        }
        .desktop-placeholder {
          display: none;
        }
        .search-icon {
          width: 24px;
          height: 24px;
          top: 10px;
        }
      }
      .options {
        margin-top: 2px;
        .option-item {
          grid-gap: 0;
        }
      }
      .user {
        display: none;
      }
    }
  }
}

.search-query-clear-btn {
  margin-left: -5rem;
  color: black;
  font-weight: 500;
  border: none;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
}

@media screen and (min-width: 1281px) {
  .cross-sign-big {
    display: inline-block;
  }

  .cross-sign-small {
    display: none;
  }
}

@media screen and (max-width: 1280px) {
  .search-query-clear-btn {
    margin-left: -3.5rem;
    height: 1rem;
    width: 1rem;
  }

  .cross-sign-big {
    display: none;
  }

  .cross-sign-small {
    position: relative;
    left: -3px;
    top: -1px;
  }
}

@media screen and (max-width: 678px) {
  .search-query-clear-btn {
    margin-left: -3.15rem;
    padding-left: 7px !important;
    padding-right: 7px !important;
  }

  .cross-sign-small {
    position: relative;
    left: -2px !important;
    top: -1px !important;
  }
}

@media screen and (max-width: 374px) {
  .search-query-clear-btn {
    display: none;
  }
}
</style>
