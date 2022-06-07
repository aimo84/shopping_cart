<template>
  <div class="mx-lg-5 py-3 row mx-0">
    <nav-profile />
    <div class="col-md-9 d-none d-md-block">
      <div class="row">
        <div class="font-bold h2 col-md-12">{{ Content.label.header[$i18n.locale ]}}</div>
        <div class="col-12 my-3 bg-white box-shadow-true">
          <div class="row py-3 border-bottom">
            <div class="col-3" role="button" @click="$router.push('/profile/tracking')">
              <img src="/images/icons/icon-left.png" style="width: 30px;">
              <span class="font-light h5 mb-0">{{ Content.label.back[$i18n.locale ]}}</span>
            </div>
            <div class="col-6 text-right"><span class="font-light h5 mb-0">{{ Content.label.title[$i18n.locale ]}}</span><span class="font-bold h5 mb-0">  {{ orderId }}</span></div>
            <div class="col-3 text-center" v-if="orderDetail.status === '001'"><div class="font-bold rounded bg-waiting-payment h5 mb-0 text-white">{{ Content.label.waitingForPayment[$i18n.locale ]}}</div></div>
            <div class="col-3 text-center" v-if="orderDetail.status === '100'"><div class="font-bold rounded bg-warning h5 mb-0 text-white">{{ Content.label.waitingForShip[$i18n.locale ]}}</div></div>
            <div class="col-3 text-center" v-if="orderDetail.status === '200'"><div class="font-bold rounded bg-success h5 mb-0 text-white">{{ Content.label.shipping[$i18n.locale ]}}</div></div>
            <div class="col-3 text-center" v-if="orderDetail.status === '301'"><div class="font-bold rounded bg-true h5 mb-0 text-white">{{ Content.label.received[$i18n.locale ]}}</div></div>
          </div>
          <div class="row border-bottom py-3 px-3 px-md-5">
            <delivery-progress :status="orderDetail.status" />
          </div>
<!--          <div class="row py-3">-->
<!--            <div class="col-12">-->
<!--              <div class="row justify-content-end pr-md-3">-->
<!--                <button class="col-12 col-md-2 btn-lg border border-danger rounded-pill bg-white">-->
<!--                  <span class="font-bold text-danger h5">ยกเลิกคำสั่งซื้อ</span>-->
<!--                </button>-->
<!--                <button class="col-12 col-md-2  btn-lg border border-0 rounded-pill" style="background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);">-->
<!--                  <span class="font-bold text-white h5">ติดต่อทรูสโตร์</span>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <delivery-detail :orderDetail="orderDetail" />
      </div>
    </div>
    <mobile-sites :orderDetail="orderDetail" />
  </div>
</template>

<script>
  import NavProfile from './../../nav'

  import { ORDER_HISTORY } from '@store/actions.type'
  import DeliveryProgress from '@components/delivery-progress'
  import DeliveryDetail from './../../tracking/detail/delivery-detail.vue'
  import MobileSites from './index-mobile.vue'
  import Content from './../content.json'

  export default {
    components: {
      'nav-profile': NavProfile,
      'delivery-progress': DeliveryProgress,
      'delivery-detail': DeliveryDetail,
      'mobile-sites': MobileSites
    },
    data: () => ({
      orderDetail: [Object, Array],
      Content
    }),
    computed: {
      orderId () {
        return this.$route.params.order_id
      }
    },
    mounted: function () {
      this.$store.dispatch(ORDER_HISTORY, { secure_key: this.orderId, is_success: true })
        .then(data => {
          this.orderDetail = data.body.data[0]
        })
    }
  }
</script>
