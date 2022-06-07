<template>
    <div class="col-md-12 border-right">
        <div class="row">
            <div class="col-md-12 h4 font-bold">{{ Content.label.lastOrder[$i18n.locale ]}}</div>
        </div>
        <div class="row py-2 h5" style="background: #F7F7F7;">
            <div class="col-2"><span class="font-medium">{{ Content.label.orderId[$i18n.locale ]}}</span></div>
            <div class="col-2"><span class="font-medium">{{ Content.label.createdAt[$i18n.locale ]}}</span></div>
            <div class="col-5"><span class="font-medium">{{ Content.label.order[$i18n.locale ]}}</span></div>
            <div class="col-2"><span class="font-medium">{{ Content.label.price[$i18n.locale ]}}</span></div>
        </div>
        <div class="row pb-2" v-for="order in orders" :key="order.secure_key">
            <div class="col-2"><span class="font-bold h5">{{ order.secure_key }}</span></div>
            <div class="col-2"><span class="font-light h5">{{ order.created_at }}</span></div>
            <div class="col-5">
                <div class="row">
                    <div class="col-12 pt-2 mb-2p" v-for="product in order.order_product" :key="product.id">
                        <img class="w-25" :src="product.image_url">
                        <span class="font-light h5">{{ product.title }}</span>
                    </div>
                </div>
            </div>
            <div class="col-3 font-bold h5 d-flex align-items-center">{{ parseInt(order.total) }}.-</div>
            <div class="col-12 pass-through-line"></div>
        </div>
        <div class="col-12 text-center py-5" v-if="orders.length === 0 && !loading">
          <span class="font-light">{{ Content.label.orderNotFound[$i18n.locale ]}}</span>
        </div>
        <loading-element class="loading-container" v-if="loading" />
    </div>
</template>

<script>
  import {
    ORDER_HISTORY
  } from '@store/actions.type'
  import Loading from '@components/loading'
  import Content from './content.json'

  export default {
    components: {
      'loading-element': Loading
    },
    data () {
      return {
        orders: [],
        loading: true,
        Content
      }
    },
    mounted: function () {
      this.getOrderHistory()
    },
    methods: {
      getOrderHistory () {
        this.$store.dispatch(ORDER_HISTORY, { is_success: true, limit: 5, show_all: true }).then(data => {
          this.orders = data.body.data
        }).finally(data => {
          this.loading = false
        })
      }
    }
  }
</script>
<style lang="scss">
.mb-2p{
  margin-bottom: 10px;
}
</style>