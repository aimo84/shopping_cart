<template>
  <div>
    <header>
      <div class="search-header">
        <img
          class="back-img"
          src="/images/icons/back.svg"
          alt="back-img"
          @click="$router.go(-1)"
        >
        <div class="search-item">
          <input
            type="text"
            :placeholder="data.option_bar_mb_placeholder[$i18n.locale]"
            v-on:keyup="searchSuggest"
            v-on:keyup.enter="search(value)"
            v-model="value"
          />
        </div>
        <div class="search-clear-btn">
          <button
            v-if="checkQuery()"
            @click="clearQuery()"
            class="search-query-clear-btn"
          >X</button>
        </div>
      </div>

      <div
        v-if="historyData.length > 0 && searchData.length == 0 && !this.emptySearch"
        class="history-lists"
      >
        <p class="title">{{Locale.search_history[$i18n.locale]}}</p>
        <div
          v-for="(item,key) in historyData"
          :key="key"
        >
          <p
            class="history-list"
            @click="search(item)"
            :key="key"
          >{{item}}</p>
        </div>
        <p
          class="clear-history"
          @click="clearHistory"
        >
          {{Locale.clear_history[$i18n.locale]}}
        </p>
      </div>
      <div class="search-result">
        <div
          v-if="searchData.length > 0 && this.value"
          class="search-result-lists"
        >
          <div
            v-for="(item,key) in searchData"
            :key="key"
          >
            <p
              class="search-result-list"
              @click="search(item)"
              :key="key"
            >{{item}}</p>
          </div>
        </div>
        <div v-else-if="searchData <= 0 && this.value && this.emptySearch == true">
          <div class="not-found">
            <img
              class="not-found-img"
              src="/images/icons/not_found.png"
              alt="back-img"
            >
            <p class="title">{{Locale.not_found.title[$i18n.locale]}}</p>
            <p class="decs">{{Locale.not_found.description[$i18n.locale]}}</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Locale from "./locale.json";
import data from "../../components/header/header.json";
import qs from "qs";
import {
  GET_HISTORY_SEARCH,
  CLEAR_HISTORY_SEARCH,
  GET_SEARCH_SUGGEST,
  SET_HISTORY_SEARCH,
} from "@store/actions.type";
export default {
  data: () => ({
    data,
    Locale,
    historyData: [],
    searchData: [],
    value: "",
    emptySearch: false,
  }),
  async created() {
    this.historyData = await this.$store.dispatch(GET_HISTORY_SEARCH);
    this.value = await this.$route.query.q;
  },
  methods: {
    async clearHistory() {
      const resultHistory = await this.$store.dispatch(CLEAR_HISTORY_SEARCH);
      if (resultHistory === "success") {
        this.historyData.splice(0);
      }
      return this.historyData;
    },
    async search(value) {
      if (!this.value && this.$route.query.q) {
        window.location.href = "/online-store";
      }
      const valueSearch = value.trim();
      if (valueSearch && valueSearch !== "") {
        await this.$store.dispatch(SET_HISTORY_SEARCH, {
          keyword: valueSearch,
        });
        this.updateURLQuery("q", valueSearch);
      }
    },
    updateURLQuery(key, value) {
      const query = {};
      query[key] = value;
      const newurl = `${window.location.origin}/online-store?${qs.stringify(
        query
      )}`;
      window.history.pushState(query, "", newurl);
      location.reload(newurl);
    },
    async searchSuggest() {
      this.emptySearch = false;
      await this.searchData.splice(0);
      const valueSearch = this.value.trim();
      if (valueSearch && valueSearch !== "") {
        await this.$store
          .dispatch(GET_SEARCH_SUGGEST, { q: valueSearch })
          .then((result) => {
            if (result.data.length !== 0) {
              this.searchData = result.data;
            } else {
              this.emptySearch = true;
            }
          });
      }
    },
    checkQuery() {
      if (this.$route.query?.q) return true;
      return false;
    },
    clearQuery() {
      window.location.href = "/online-store";
      this.$router.replace({ query: {} });
      this.value = "";
    },
  },
};
</script>
<style scoped lang="scss">
.search-header {
  display: flex;
  .back-img {
    margin-right: 16px;
  }
}
.history-lists {
  p {
    font-family: "TrueMedium";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
  }
  .title {
    color: #404040;
    opacity: 0.6;
    margin-bottom: 0;
  }
  .history-list {
    border-bottom: 0.5px solid #cccccc;
    margin: 0;
    padding: 9px 0;
  }
  .clear-history {
    text-align: center;
    color: #e62627;
  }
}
.search-result {
  margin-top: 20px;
  .search-result-lists {
    .search-result-list {
      border-bottom: 0.5px solid #cccccc;
      margin: 0;
      padding: 9px 0;
      font-family: "TrueMedium";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 22px;
    }
  }
  .not-found {
    text-align: center;
    margin-top: 70px;
    p {
      font-family: "TrueMedium";
      line-height: 22px;
      margin: 15px;
    }
    .title {
      color: #000;
      font-size: 30px;
    }
    .desc {
      color: #404040;
      font-size: 20px;
    }
  }
}

.search-item {
  height: 44px;
  font-size: 20px;
  width: 100%;
  input {
    font-family: "TrueMedium";
    width: 100%;
    height: 100%;
    border-radius: 99px;
    border: 1px solid #cccccc;
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
  }
  .search-icon {
    position: absolute;
    right: 8px;
    top: 9px;
    width: 38px;
    height: 35px;
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
  position: relative;
  top: 0.7rem;
  margin-left: -2.3rem;
  color: black;
  font-weight: 500;
  border: none;
  border-radius: 50%;
  height: 1.3rem;
  width: 1.3rem;
}

@media screen and (max-width: 678px) {
  .search-query-clear-btn {
    padding-left: 6px !important;
    padding-right: 7px !important;
  }
}
</style>
