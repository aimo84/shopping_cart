<template>
    <div class="col-12 my-3 bg-white box-shadow-true">
        <div class="row py-3">
            <div class="col-12"><span class="font-bold h4 mb-0">{{ Content.label.orderDetail[$i18n.locale ]}}</span></div>
        </div>
        <div class="row border-bottom py-3 px-3 px-md-5">
            <div class="rounded-circle true-circle">
                <img class="w-75 ml-2 mt-4" src="/images/icons/icon-delivery-white.png">
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="col-12"><span class="font-bold">{{ Content.label.senderDetail[$i18n.locale ]}}</span></div>
                    <div class="col-12"><span class="font-light">{{ Content.label.sender[$i18n.locale ]}}: True Online Store</span></div>
                </div>
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="col-12"><span class="font-bold">{{ Content.label.orderTrackingNo[$i18n.locale ]}}</span></div>
                    <div class="col-12"><a class="font-light" :href="trackingUrl" target="_blank">{{ trackingNo }}</a></div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12"><span class="font-bold">{{ Content.label.receiverDetail[$i18n.locale ]}}</span></div>
                    <div class="col-12"><span class="font-bold">{{ addressName }}</span></div>
                    <div class="col-12"><span class="font-light">{{ phone }}</span></div>
                    <div class="col-12"><span class="font-light">{{ address }}</span></div>
                </div>
            </div>
        </div>
        <div class="col-12 py-3">
            <div class="row">
                <div v-if="['200', '301'].includes(orderDetail.status)" class="col-11 pl-md-5 ml-md-5">
                    <div class="rounded-circle tracking-circle mr-3"></div>
                    <span class="font-light h5">{{ trackingCreate }} {{ Content.label.sendingPackage[$i18n.locale ]}}</span>
                </div>
                <div v-if="['200', '301'].includes(orderDetail.status)" class="line-delivery-info"></div>
                <div v-if="['100', '200', '301'].includes(orderDetail.status)" class="col-11 pl-md-5 ml-md-5">
                    <div class="rounded-circle tracking-circle mr-3"></div>
                    <span class="font-light h5">{{ orderDetail.created_at }} {{ Content.label.preparePackage[$i18n.locale ]}}</span>
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
      orderStatus () {
        return this.orderDetail?.status
      },
      addressName () {
        return this.orderDetail?.order_address?.delivery_firstname + ' ' + this.orderDetail?.order_address?.delivery_lastname
      },
      address () {
        return this.orderDetail?.order_address?.delivery_address_1 + ' ' + this.orderDetail?.order_address?.delivery_address_2 + ' ' +
            this.orderDetail?.order_address?.delivery_district + ' ' + this.orderDetail?.order_address?.delivery_city + ' ' +
            this.orderDetail?.order_address?.delivery_province + ' ' + this.orderDetail?.order_address?.delivery_country + ' ' +
            this.orderDetail?.order_address?.delivery_postcode
      },
      phone () {
        return '(+66) ' + this.orderDetail?.order_address?.delivery_phone
      },
      taxAddressName () {
        return this.orderDetail?.order_address?.billing_firstname + ' ' + this.orderDetail?.order_address?.billing_lastname
      },
      taxAddress () {
        return this.orderDetail?.order_address?.billing_firstname + ' ' + this.orderDetail?.order_address?.billing_lastname + ' ' +
            this.orderDetail?.order_address?.billing_address_1 + ' ' + this.orderDetail?.order_address?.billing_address_2 + ' ' +
            this.orderDetail?.order_address?.billing_district + ' ' + this.orderDetail?.order_address?.billing_city + ' ' +
            this.orderDetail?.order_address?.billing_province + ' ' + this.orderDetail?.order_address?.billing_country + ' ' +
            this.orderDetail?.order_address?.billing_postcode
      },
      taxAddressContact () {
        return this.orderDetail?.order_address?.billing_phone + ' ' + this.orderDetail?.order_address?.billing_email
      },
      paymentMethod () {
        return this.orderDetail?.payment_method
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
