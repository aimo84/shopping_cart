<template>
    <div class="col-12 d-md-none">
      <div class="row">
        <div class="col-4 px-0" role="button" @click="$router.push('/profile/tracking')">
          <img src="/images/icons/icon-left.png" style="width: 30px;">
          <span class="font-light h5 mb-0">{{ Content.label.back[$i18n.locale ]}}</span>
        </div>
      </div>
      <div class="row bg-white">
        <div class="col-12">
          <div class="row py-2 border-bottom">
            <div class="col-7"><span class="font-light h5 mb-0">{{ Content.label.title[$i18n.locale ]}}</span><span class="font-bold h5 mb-0">  {{ orderId }}</span></div>
            <div class="col-5 text-center">
                <!-- เช็ค condition ในการแสดงปุ่ม -->
              <div class="font-bold rounded bg-waiting-payment h5 mb-0 text-white" v-if="orderDetail.status === '001'">{{ Content.label.waitingForPayment[$i18n.locale ]}}</div>
              <div class="font-bold rounded bg-warning h5 mb-0 text-white" v-if="orderDetail.status === '100'">{{ Content.label.waitingForShip[$i18n.locale ]}}</div>
              <div class="font-bold rounded bg-success h5 mb-0 text-white" v-if="orderDetail.status === '200'">{{ Content.label.shipping[$i18n.locale ]}}</div>
              <div class="font-bold rounded bg-true h5 mb-0 text-white" v-if="orderDetail.status === '301'">{{ Content.label.received[$i18n.locale ]}}</div>
            </div>
          </div>
          <div class="row p-3">
            <div class="col-12" v-if="orderDetail.status === '001'">
                <div class="row">
                    <div class="rounded-circle true-circle" style="width: 65px; height:65px">
                        <img class="w-75 ml-2 mt-3" src="/images/icons/icon-purchase-order.png">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <span class="font-light text-danger h4">{{ $t('tracking.place-order') }}</span><span class="font-light h5">  {{ orderDetail.created_at }}</span>
                            </div>
                            <div class="col-12">
                                <span class="font-light h5">{{ Content.label.waitingForPayment[$i18n.locale ]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-if="orderDetail.status === '100'">
                <div class="row">
                    <div class="rounded-circle true-circle" style="width: 65px; height:65px">
                        <img class="w-75 ml-2 mt-3" src="/images/icons/icon-credit-card.png">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <span class="font-light text-danger h4">{{ $t('tracking.payment-success') }}</span><span class="font-light h5">  {{ orderDetail.created_at }}</span>
                            </div>
                            <div class="col-12">
                                <span class="font-light h5">{{ Content.label.waitingForShip[$i18n.locale ]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-if="orderDetail.status === '200'">
                <div class="row">
                    <div class="rounded-circle true-circle" style="width: 65px; height:65px">
                        <img class="w-75 ml-2 mt-3" src="/images/icons/icon-delivery.png">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <span class="font-light text-danger h4">{{ $t('tracking.delivery-waiting') }}</span><span class="font-light h5">  {{ trackingCreate }}</span>
                            </div>
                            <div class="col-12">
                                <span class="font-light h5">{{ Content.label.shipping[$i18n.locale ]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-if="orderDetail.status === '301'">
                <div class="row">
                    <div class="rounded-circle true-circle" style="width: 65px; height:65px">
                        <img class="w-75 ml-2 mt-3" src="/images/icons/icon-product.png">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <span class="font-light text-danger h4">{{ $t('tracking.delivery-success') }}</span><span class="font-light h5">  {{ orderDetail.created_at }}</span>
                            </div>
                            <div class="col-12">
                                <span class="font-light h5">{{ Content.label.received[$i18n.locale ]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="row py-3">-->
<!--        <div class="col-12">-->
<!--            <div class="row justify-content-end pr-md-3">-->
<!--            <button class="col-6 btn-lg border border-danger rounded-pill bg-white">-->
<!--                <span class="font-bold text-danger h5">ยกเลิกคำสั่งซื้อ</span>-->
<!--            </button>-->
<!--            <button class="col-6 btn-lg border border-0 rounded-pill" style="background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);">-->
<!--                <span class="font-bold text-white h5">ติดต่อทรูสโตร์</span>-->
<!--            </button>-->
<!--            </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="row bg-white">
        <div class="col-12">
          <div class="row py-2 border-bottom">
            <div class="col-7"><span class="font-light h5 mb-0">{{ Content.label.orderTrackingNoMobile[$i18n.locale ]}}</span></div>
            <div class="col-5 text-right">
                <!-- ใส่หมายเลข tracking kerry -->
              <a class="font-light h5 mb-0 text-primary" :href="trackingUrl" target="_blank">{{ trackingNo }}</a>
            </div>
          </div>
          <div class="row py-2">
              <div class="col-12">
            <div class="row">
                <!-- ใช้ condition การแสดง progress info -->
                <div class="col-12" v-if="orderDetail.status === '200' || orderDetail.status === '301'">
                    <div class="rounded-circle tracking-circle"></div>
                    <span class="font-light h6">{{ trackingCreate }} {{ Content.label.sendingPackage[$i18n.locale ]}}</span>
                </div>
                <div class="line-delivery-info" v-if="orderDetail.status === '200' || orderDetail.status === '301'"></div>
                <div class="col-12" v-if="orderDetail.status === '001' || orderDetail.status === '100' || orderDetail.status === '200' || orderDetail.status === '301'">
                    <div class="rounded-circle tracking-circle"></div>
                    <span class="font-light h6">{{ orderDetail.created_at }} {{ Content.label.preparePackage[$i18n.locale ]}}</span>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Content from './../content.json'

  export default {
    props: {
      orderDetail: [Object, Array]
    },
    data: () => ({
      Content
    }),
    computed: {
      orderId () {
        return this.$route.params.order_id
      },
      trackingUrl () {
        if (this.orderDetail?.order_tracking) {
          for (let index = 0; index < this.orderDetail.order_tracking.length; index++) {
            const productIds = JSON.parse(this.orderDetail.order_tracking[index].product_ids)
            if (productIds.includes(parseInt(this.$route.query?.productId))) {
              return this.orderDetail.order_tracking[index].tracking_url || ''
            }
          }
        }
        return ''
      },
      trackingNo () {
        if (this.orderDetail?.order_tracking) {
          for (let index = 0; index < this.orderDetail.order_tracking.length; index++) {
            const productIds = JSON.parse(this.orderDetail.order_tracking[index].product_ids)
            if (productIds.includes(parseInt(this.$route.query?.productId))) {
              return this.orderDetail.order_tracking[index].tracking_number || this.orderDetail.order_tracking[index].tracking_desc
            }
          }
        }
        return ''
      },
      trackingCreate () {
        if (this.orderDetail?.order_tracking) {
          for (let index = 0; index < this.orderDetail.order_tracking.length; index++) {
            const productIds = JSON.parse(this.orderDetail.order_tracking[index].product_ids)
            if (productIds.includes(parseInt(this.$route.query?.productId))) {
              return this.orderDetail.order_tracking[index].created_at
            }
          }
        }
        return ''
      }
    }
  }
</script>
