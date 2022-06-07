<template>
  <div class="mx-lg-5 py-3 row mx-0">
    <nav-profile />
    <div class="col-md-9">
      <div class="row">
        <div class="font-bold h2 col-md-12 d-none d-md-block">{{ Content.label.header[$i18n.locale ]}}</div>
        <div class="col-4 px-0 d-md-none" role="button" @click="$router.push('/profile')">
          <img src="/images/icons/icon-left.png" style="width: 30px;">
          <span class="font-light h5 mb-0">{{ Content.label.header[$i18n.locale ]}}</span>
        </div>
        <div class="col-12">
          <div class="row bg-white box-filter-status box-shadow-true">
            <div class="text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status" :class="{ 'border-bottom-danger': selectedFilter.recently, 'text-danger': selectedFilter.recently }"><span role="button" @click="filterOrder('recently')">{{ Content.label.recentOrder[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status" id="001" :class="{ 'border-bottom-danger': selectedFilter['001'], 'text-danger': selectedFilter['001'] }"><span role="button" @click="filterOrder('001')">{{ Content.label.waitingForPayment[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-75 col-5 font-bold h4 mb-0 py-2 status" id="100|101|102" :class="{ 'border-bottom-danger': selectedFilter['100|101|102'], 'text-danger': selectedFilter['100|101|102'] }"><span role="button" @click="filterOrder('100|101|102')">{{ Content.label.waitingForShip[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-5 col-5 font-bold h4 mb-0 py-2 status" id="200" :class="{ 'border-bottom-danger': selectedFilter['200'], 'text-danger': selectedFilter['200'] }"><span role="button" @click="filterOrder('200')">{{ Content.label.shipping[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-5 col-4 font-bold h4 mb-0 py-2 status" :class="{ 'border-bottom-danger': selectedFilter['301'], 'text-danger': selectedFilter['301'] }"><span role="button" @click="filterOrder('301')">{{ Content.label.received[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-5 col-5 font-bold h4 mb-0 py-2 status" :class="{ 'border-bottom-danger': selectedFilter.all, 'text-danger': selectedFilter.all }"><span role="button" @click="filterOrder('all')">{{ Content.label.orderHistory[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1 col-3 font-bold h4 mb-0 py-2 status" :class="{ 'border-bottom-danger': selectedFilter['002|003|004|005'], 'text-danger': selectedFilter['002|003|004|005'] }"><span role="button" @click="filterOrder('002|003|004|005')">{{ Content.label.cancel[$i18n.locale] }}</span></div>
            <div class="text-center padding-order-status col-md-1-75 col-5 font-bold h4 mb-0 py-2 status" :class="{ 'border-bottom-danger': selectedFilter['400|401'], 'text-danger': selectedFilter['400|401'] }"><span role="button" @click="filterOrder('400|401')">{{ Content.label.refund[$i18n.locale] }}</span></div>
          </div>
          <div class="row" ref="orders">
            <div class="col-12 mt-3 bg-white box-shadow-true" v-for="order in orders" :key="order.secure_key" :class="{ 'd-none': loading && (haveOrder === false) }">
              <div class="row py-3 border-bottom">
                <div class="col-7 col-md-7"><span class="font-light h5 mb-0">{{ Content.label.title[$i18n.locale ]}}</span><span class="font-bold h5 mb-0" role="button"> {{ order.secure_key }}</span></div>
                <div class="col-3 text-right d-none" :class="order.order_product.length > 1 ? 'd-md-none' : 'd-md-block'"><span v-if="checkOrderStatus(order.order_product[0].escrow_product, ['102', '200', '301'], '001')" class="font-light h5 text-primary mb-0" @click="$router.push({path: '/profile/tracking/' + order.secure_key, query: { productId: order.order_product[0].escrow_product.order_product_id }})"><ins role="button"><img src="/images/icons/icon-car-blue.svg">{{ Content.label.orderTracking[$i18n.locale ]}}</ins></span></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}" v-if="checkOrderStatus(order.order_product[0].escrow_product, ['001'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-waiting-payment h5 mb-0 text-white">{{ Content.label.waitingForPayment[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['002'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-payment-fail h5 mb-0 text-white">{{ Content.label.paymentFail[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['003'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-payment-expire h5 mb-0 text-white">{{ Content.label.paymentExpire[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['004', '005'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-cancel h5 mb-0 text-white">{{ Content.label.paymentCancel[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['301'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-true">{{ Content.label.received[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['400', '406'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund">{{ Content.label.requestedRefund[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['401', '405'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund-success">{{ Content.label.refundSuccess[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['402'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund">{{ Content.label.refundDeclined[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['100', '101', '102'])"><div class="font-bold line-height-30 rounded bg-warning h5 mb-0 text-white">{{ Content.label.waitingForShip[$i18n.locale ]}}</div></div>
                <div class="col-5 col-md-2 text-center d-block" :class="{'d-md-none': order.order_product.length > 1}"  v-else-if="checkOrderStatus(order.order_product[0].escrow_product, ['200'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-success h5 mb-0 text-white">{{ Content.label.shipping[$i18n.locale ]}}</div></div>
              </div>
              <div class="row border-bottom pt-2" v-for="(product, index) in order.order_product" :key="product.id">
                <div class="col-12" :class="{ 'd-none': index === 0, 'd-md-block': index >= 0 }">
                  <div class="row justify-content-end">
                    <div class="col-md-3 text-right d-none" :class="{'d-md-block': order.order_product.length > 1}"><span v-if="checkOrderStatus(order.order_product[index].escrow_product, ['102', '200', '301'], '001')" class="font-light h5 text-primary mb-0" @click="$router.push({path: '/profile/tracking/' + order.secure_key, query: { productId: product.id }})"><ins role="button"><img src="/images/icons/icon-car-blue.svg">{{ Content.label.orderTracking[$i18n.locale ]}}</ins></span></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-if="checkOrderStatus(order.order_product[index].escrow_product, ['001'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-waiting-payment h5 mb-0 text-white">{{ Content.label.waitingForPayment[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['002'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-payment-fail h5 mb-0 text-white">{{ Content.label.paymentFail[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['003'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-payment-expire h5 mb-0 text-white">{{ Content.label.paymentExpire[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['004', '005'], order.order_status.code)" ><div class="font-bold line-height-30 rounded bg-cancel h5 mb-0 text-white">{{ Content.label.paymentCancel[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['301'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-true h5 mb-0 text-white">{{ Content.label.received[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['400', '406'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund">{{ Content.label.requestedRefund[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['401', '405'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund-success">{{ Content.label.refundSuccess[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['402'], order.order_status.code)"><div class="font-bold line-height-30 rounded h5 mb-0 text-white bg-refund" style="background:#FF4500;">{{ Content.label.refundDeclined[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['100', '101', '102'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-warning h5 mb-0 text-white">{{ Content.label.waitingForShip[$i18n.locale ]}}</div></div>
                    <div class="col-5 col-md-2 text-center" :class="{'d-none': order.order_product.length < 2}" v-else-if="checkOrderStatus(order.order_product[index].escrow_product, ['200'], order.order_status.code)"><div class="font-bold line-height-30 rounded bg-success h5 mb-0 text-white">{{ Content.label.shipping[$i18n.locale ]}}</div></div>
                  </div>
                </div>
                <div class="col-4 col-md-2 py-3"><img class="w-100" :src="product.image_url" /></div>
                <div class="col-8 col-md-10 py-3">
                  <div class="row">
                    <div class="col-12 col-md-6"><span class="font-bold h4">{{ product.title }}</span></div>
                    <div class="col-6 col-md-3"><span class="font-light h4">{{ Content.label.quantity[$i18n.locale ]}}: <span class="font-bold">{{ product.quantity }}</span></span></div>
                    <div class="col-6 col-md-3"><span class="font-bold h4">{{ parseInt(product.final_price) }}.-</span></div>
                  </div>
                </div>
                <div class="col-12 d-block d-md-none border-top py-2" v-if="checkOrderStatus(product.escrow_product, ['102', '200', '301'], '001')">
                  <img src="/images/icons/icon-car-blue.svg">
                  <span class="font-light h5 text-primary mb-0" @click="$router.push({path: '/profile/tracking/' + order.secure_key, query: { productId: product.id }})">
                    <ins role="button">{{ Content.label.orderTracking[$i18n.locale ]}}</ins>
                  </span>
                </div>
                <div class="col-12 d-block d-md-none border-top py-2" v-if="!checkOrderStatus(product.escrow_product, ['102', '200', '301'], '001')">
                  <img src="/images/icons/icon-car-gray.svg">
                  <span class="font-light h5 color-blank mb-0">
                    <ins>{{ Content.label.orderTracking[$i18n.locale ]}}</ins>
                  </span>
                </div>
              </div>
              <div class="row border-bottom border-none">
                <div class="col-6 d-md-none font-light h5 mt-3">{{ order.order_product.length }} {{ Content.label.piece[$i18n.locale ]}}</div>
                <div class="col-6 col-md-12 text-right"><span class="font-light h5">{{ Content.label.total[$i18n.locale ]}}</span><span class="font-bold text-danger h1">  {{ parseInt(order.total) }}.-</span></div>
              </div>
              <div class="row py-3">
                <div class="col-12 col-md-7 mt-auto text-center text-md-left"><span class="font-light h5" v-if="order.order_product[0] && order.order_product[0].escrow_product && order.order_product[0].escrow_product.order_statuses_code === '100'">{{ Content.label.shippedBy[$i18n.locale ]}} {{ convertDate(order.order_product[0].escrow_product.ship_expired_time) }}</span></div>
                <div class="col-12 col-md-7 mt-auto text-center text-md-left"><span class="font-light h5" v-if="order.order_product[0] && order.order_product[0].escrow_product && order.order_product[0].escrow_product.order_statuses_code === '200'">{{ Content.label.receivedBy[$i18n.locale ]}} {{ convertDate(order.order_product[0].escrow_product.receive_expired_time) }}</span></div>
<!--                <div class="col-12 col-md-5 text-right pr-md-3">-->
<!--                  <div class="row">-->
<!--                    <button class="col-6 col-md-6 btn-lg border border-danger rounded-pill bg-white">-->
<!--                      <span class="font-bold text-danger h5">ยกเลิกคำสั่งซื้อ</span>-->
<!--                    </button>-->
<!--                    <button class="col-6 col-md-6  btn-lg border border-0 rounded-pill" style="background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);">-->
<!--                      <span class="font-bold text-white h5">ติดต่อทรูสโตร์</span>-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
            <div class="col-12 h-100 text-center py-5" :class="{ 'd-none': !loading }">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div class="mt-3 bg-white col-12 text-center py-5" :class="{ 'd-none': loading || (haveOrder === true) }">
              <span class="font-light">ไม่พบรายการสินค้า</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavProfile from './../nav'
  import Content from './content.json'

  import {
    ORDER_HISTORY
  } from '@store/actions.type'

  export default {
    components: {
      'nav-profile': NavProfile
    },
    props: {
      user: [Object, Boolean]
    },
    data: () => ({
      data: {},
      orders: [],
      trackingId: '',
      selectedFilter: {
        'all': false,
        'recently': true,
        '001': false,
        '002|003|004|005': false,
        '100|101|102': false,
        '200': false,
        '301': false,
        '400|401': false
      },
      loading: false,
      haveOrder: false,
      page: 1,
      total: 0,
      Content
    }),
    computed: {
      selectedFilterKey () {
        return Object.keys(this.selectedFilter).find(key => this.selectedFilter[key] === true)
      }
    },
    watch: {
      user () {
        this.getOrderHistory()
      }
    },
    mounted: function () {
      if (['001', '100|101|102', '200'].includes(this.$route.params?.orderStatus)) {
        document.getElementById(this.$route.params?.orderStatus).scrollIntoView({ block: 'start' })
        this.filterOrder(this.$route.params?.orderStatus)
      } else {
        this.getOrderHistory()
      }
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
        this.onScroll()
      })
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      getOrderHistory (orderStatus = '') {
        if (this.user) {
          this.loading = true
          this.$store.dispatch(ORDER_HISTORY, { is_success: true, page: this.page, limit: 5, show_all: true, order_statuses_code: orderStatus }).then(data => {
            if (this.orders.length > 0) {
              this.orders = this.orders.concat(data.body.data)
            } else {
              this.orders = data.body.data
            }
            this.total = data.body.total
          }).catch(e => {
          }).finally(data => {
            this.loading = false
            this.haveOrder = this.orders.length > 0 ? true : false
          })
        }
      },
      filterOrder (orderStatus) {
        if (!this.loading) {
          this.loading = true
          this.orders = []
          this.haveOrder = false
          this.page = 1
          for (const key in this.selectedFilter) {
            this.selectedFilter[key] = (key === orderStatus)
          }
          orderStatus = orderStatus === 'all' || orderStatus === 'recently' ? '' : orderStatus
          this.getOrderHistory(orderStatus)
        }
      },
      onScroll () {
        const ordersHeading = this.$refs["orders"]
        if (ordersHeading && (this.orders.length > 0 && this.orders.length < this.total) && !this.selectedFilter.recently) {
          const marginTopOrders = ordersHeading.getBoundingClientRect().top
          if ((marginTopOrders + ordersHeading.scrollHeight < 873) && !this.loading) {
            console.log('Start')
            this.loading = true
            this.page++
            const orderStatus = this.selectedFilterKey === 'all' || this.selectedFilterKey === 'recently' ? '' : this.selectedFilterKey
            this.getOrderHistory(orderStatus)
          }
        }
      },
      convertDate (dateString) {
        const date = new Date(dateString)
        return this.$i18n.locale === 'th' ? `${date.getDate()} ${date.toLocaleString('th-TH', { month: 'short' })} ${date.getFullYear()}` : `${date.getDay()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
      },
      checkOrderStatus (escrowProduct, statuses, orderStatus) {
        let status = false
        if (statuses.includes(escrowProduct?.order_statuses_code)) {
          status = true
        } else if (statuses.includes(orderStatus)) {
          status = true
        }
        return status
      }
    }
  }
</script>

<style scoped lang="scss">
.border-bottom-danger {
  border-bottom: 3px solid #dc3545 !important
}

.line-height-30{
  line-height: 30px;
}

@media (min-width: 576px) {
  .border-none {
    border-bottom: none !important;
  }
}

@media (max-width: 576px) {
  .box-filter-status {
    scrollbar-width: none;
    flex-wrap: inherit;
    overflow-x: scroll;
  }
}
</style>
