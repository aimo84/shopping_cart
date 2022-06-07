<template>
  <div>
    <div class="block-header">
      <h1>
        {{ $t('tracking.check-delivery') }}
      </h1>
    </div>
    <div class="page-container">
      <div class="search-container">
        <input
          :placeholder="$t('tracking.placeholder')"
          type="text"
          class="tracking-input"
          v-model="trackingId"
          @keyup.enter="searchTracking"
        />
        <div
          class="search-icon"
          @click="searchTracking"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
          </svg>
        </div>
      </div>
      <tracking-table :data="data" />
      <template v-if="user">
        <div class="block-header">
          <h1>{{ $t('tracking.all-order') }}</h1>
        </div>
        <tracking-table :data="order" />
      </template>
    </div>
    <div
      class="tracking-description"
      v-if="$i18n.locale === 'th'"
    >
      <div>ข้อมูลการจัดส่งสินค้า</div>
      <ol>
        <li>สินค้าปกติจะส่งถึงมือคุณภายใน 2-5 วันทำการในเขตกทม.และปริมณฑล และ 2-7 วันทำการทั่วประเทศ</li>
      </ol>
    </div>
    <div
      class="tracking-description"
      v-if="$i18n.locale === 'en'"
    >
      <div>Delivery information</div>
      <ol>
        <li>Normal products will be delivered within 2-5 working days in BMA and within 2-7 working days across nation</li>
      </ol>
    </div>
  </div>
</template>

<script>
import TrackingTable from "./tracking-table";
import {
  FETCH_TRACKING,
  FETCH_ORDER_HISTORY,
  ORDER_HISTORY
} from "@store/actions.type";

export default {
  components: {
    "tracking-table": TrackingTable
  },
  props: {
    user: [Object, Boolean]
  },
  watch: {
    user() {
      this.getOrderHistory();
    }
  },
  data: () => ({
    data: {},
    order: [],
    trackingId: ""
  }),
  mounted: function() {
    this.getOrderHistory();
    this.trackingId = this.$route.query.id
    if (this.$route.query.id !== undefined) this.searchTracking()
  },
  methods: {
    getOrderHistory: function() {
      if (this.user) {
        this.$store.dispatch(ORDER_HISTORY).then(data => {
          this.order = data.body.data;
        });
      }
    },
    searchTracking: function() {
      const id = this.trackingId;
      if (id.replace(/\s/g, "").length === 0) return;
      this.trackingId = "";
      this.$set(this.data, id, {
        order_id: id,
        loading: true
      });
      const api_type = this.user ? FETCH_ORDER_HISTORY : FETCH_TRACKING;
      this.$store
        .dispatch(api_type, id)
        .then(data => {
          this.$set(this.data, id, data.body.data[0]);
        })
        .catch(error => {
          this.$set(this.data, id, {
            order_id: id,
            loading: true,
            error: true
          });
        });
    }
  }
};
</script>

<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tracking-description {
  margin-top: 32px;
  font-size: 22px;
  line-height: 22px;
}

.search-container {
  margin: 16px auto 8px;
  width: 80%;
  position: relative;

  .search-icon {
    position: absolute;
    right: 6px;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    margin: auto;
    border-radius: 50%;
    transition: 150ms background-color ease;
    cursor: pointer;
    background: white;

    &:hover {
      background-color: #e6e6e6;
    }
  }

  .tracking-input {
    border-radius: 24px;
    padding: 16px 24px;
    border: 1px solid #b2b2b2;
    transition: 50ms border-color ease;
    font-size: 16px;
    width: 100%;

    &:focus {
      outline: none;
      border-color: #7d7d7d;
    }
  }
}

@media screen and (max-width: 1000px) {
  .search-container {
    margin: 16px auto 8px auto;
    width: 100%;

    .search-icon {
      right: 5px;
      width: 36px;
      height: 36px;
    }

    .tracking-input {
      padding: 12px 20px;

      &::placeholder {
        font-size: 20px;
        font-family: "TrueMedium";
      }
    }
  }
  .tracking-description {
    margin-top: 16px;
    font-size: 20px;
    line-height: 20px;
  }
}
</style>
