<template>
  <div class="tracking-table">
    <div class="table-header">
      <div
        class="td"
        id="order-no"
      >{{ $t('tracking.order-number') }}</div>
      <div
        class="td"
        id="order-date"
      >{{ $t('tracking.order-date') }}</div>
      <div
        class="td"
        id="order-price"
      >{{ $t('tracking.order-price') }}</div>
      <div
        class="td"
        id="order-status"
      >{{ $t('tracking.order-status') }}</div>
    </div>
    <div class="table-body">
      <div
        v-for="(item, key) in data"
        :key="key"
      >
        <div
          class="tr"
        >
          <div
           class="td"
           id="order-no"
          >
            <span class="mobile">{{ $t('tracking.order-number') }}: </span>{{item.order_id}}
          </div>
          <template v-if="item.loading">
            <div class="loading">
              <template v-if="item.error">Order Not Found.</template>
              <template v-else>Loading ...</template>
            </div>
          </template>
          <template v-else>
            <div
             class="td"
             id="order-date"
            >{{item.created_at}}</div>
            <div
              class="td"
               id="order-price"
           >{{computePrice(item.price)}} {{ $t('tracking.baht') }}</div>
            <div
              class="td"
              id="order-status"
           >
              <tracking-element :status="item.status" :orderTracking="item.order_tracking"/>
            </div>
          </template>
        </div>

        <div
          class="tr-title"
           v-if="item.status === '100' ||item.status === '200' || item.status === '301'"
        >
          <div
            class="td"
            id="order-detail-name"
          >
            {{Content.product_name[$i18n.locale]}}
          </div>

          <div
            class="td"
            id="order-detail-quantity"
          >
            {{Content.quantity[$i18n.locale]}}
          </div>
          <div
            class="td"
            id="order-detail-description"
          >
            {{Content.detail[$i18n.locale]}}
          </div>
        </div>

        <div
          v-if="item.status === '100' ||item.status === '200' || item.status === '301'"
        >
            <div
              v-for="(prod, key) in item.order_product"
              :key="key"
              class="tr-description border-dotted"
            >
              <div class="td" id="description-name">{{prod.title}}{{prod.option}}</div>
              <div class="td" id="description-quantity">{{prod.quantity}}</div>
              <div class="td" id="description-tracking">
                <tracking-detail-element :productId="prod.tracking_id" :orderTracking="item.order_tracking"/>
              </div>
            </div>
            <div class="border-bottom" style="margin-top: 30px"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Tracking from '@components/tracking'
  import TrackingDetail from './tracking-detail'

  export default {
    components: {
      'tracking-element': Tracking,
      'tracking-detail-element': TrackingDetail
    },
    props: {
      data: [Object, Array],
      order: Object
    },
    data: () => ({
      Content: {
        product_name: {
          th: 'ชื่อสินค้า',
          en: 'Product name'
        },
        quantity: {
          th: 'จำนวน',
          en: 'Quantity'
        },
        detail: {
          th: 'รายละเอียด',
          en: 'Detail'
        }
      },
      orderDreail: [
        {
          id: 1,
          orderName: 'Iphone 12 Pro Max ความจุ: 128GB สี: Gold เกจแบบรายเดือนMax Speed Unlimited',
          quantity: 1,
          decription: true
        },
        {
          id: 2,
          orderName: 'Iphone 12 Pro Max ความจุ: 128GB สี: Gold',
          quantity: 1,
          decription: false
        }
      ]
    }),
    methods: {
      computePrice(value) {
        return parseFloat(value).toFixed(2);
      }
    }
  }
</script>

<style scoped lang="scss">

.tracking-table {
  margin: 16px 0 128px;
  display: flex;
  flex-direction: column;
  font-family: "TrueMedium";
  font-size: 24px;

  .td {
    padding: 4px 16px;

    &#order-no,
    &#order-date,
    &#order-price {
      width: 20%;
    }

    &#order-status {
      width: 40%;
    }

  }

  .tr {
    display: flex;
    min-height: 82px;
    border-bottom: 1px solid #d0d0d0;
  }
    .border-bottom {
      border-bottom: 1px solid #d0d0d0;
    }
  .tr-title {
    display: flex;
    min-height: 82px;
    font-size: 24px;
    font-weight: 700;
    font-family: "TrueBold";
    border-bottom: 1px solid #d0d0d0;

    .td{
      &#order-detail-name {
        width: 40%;
      }
      &#order-detail-quantity,
      &#order-detail-description {
        width: 19%;
      }
    }
  }
  .tr-description {
    display: flex;
    min-height: 82px;
    font-size: 20px;
    font-weight: 500;
    border:none;
    height:1px;

    .td {

      &#description-name {
        width: 40%;
      }

      &#description-quantity,
      &#description-tracking {
        width: 19%;

        .packing-text {
          padding-left: 3px;
        }
      }

    }
  }
  .border-dotted {
    border-bottom:1px dotted #D1D1D1;
  }
  .table-header {
    display: flex;
    font-weight: 600;
    border-bottom: 1px solid #b2b2b2;
  }
  .table-description {
    color: #333D45;
    font-weight: 600;
    border-bottom: 1px solid #b2b2b2;
  }
  .table-body {
    .td {
      padding: 16px;
      display: flex;
      align-items: center;

      &#order-no {
        text-transform: uppercase;
      }
    }
  }

  span.mobile {
    display: none;
  }

  .loading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .visible {
    visibility: hidden;
  }

}

  .tracking-status {
    max-width: 120px;
    cursor: pointer;
  }

@media screen and (max-width: 1000px) {
  .tracking-table {
    margin-top: 0;

    .table-header {
      display: none;
    }
    .tr {
      flex-wrap: wrap;
      padding: 16px 0;
      line-height: 20px;
    }

    .tr-title {
      .td {
        &#order-detail-name {
          width: 60%;
        }
      }
    }
    .tr-description {
      line-height: 20px;
      min-height: 100px;
      overflow: hidden;
      font-size: 20px;

      .td {

        &#description-name {
        width: 60%;
      }

    }

    }
    .table-body .td {
      padding: 4px 16px;

      &#order-no,
      &#order-status {
        width: 100%;
      }

      &#order-no {
        font-size: 26px;
        line-height: 28px;
        padding-bottom: 0;
      }

      &#order-date,
      &#order-price {
        width: 33.33%;
        padding: 4px 0 16px 16px;
        font-size: 22px;
        color: #696969;
      }

      &#description-empty {
        width: 23%;
      }
    }

    span.mobile {
      display: inline-block;
      margin-right: 4px;
    }

    .loading {
      padding: 16px 0 12px 0;
    }
  }
}

@media screen and (max-width: 700px) {
    .tracking-table {
      .tr-title {
        .td {
          &#order-detail-name {
            width: 60%;
          }
        }
      }
      .tr-description {
        .td {
          &#description-name {
           width: 60%;
          }
          &#description-tracking {
            justify-content: start;
            width: auto;
            padding-right: 0;

          }
        }
      }
    }
    .tracking-status {
      max-width: 100px;
    }
}

@media screen and (max-width: 490px) {
    .tracking-table {
      .tr-title {
        .td {
          &#order-detail-quantity {
            width: auto;
          }
          &#order-detail-description {
            justify-content: end;
            width: 40%;
          }
        }
      }
      .tr-description {
        .td {
          &#description-name {
           width: 50%;
          }
          &#description-quantity {
            width: 13%;
            justify-content: center;
          }
          &#description-tracking {
              margin-left: auto;
          }
        }
      }
    }

}
</style>
