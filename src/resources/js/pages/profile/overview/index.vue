<template>
  <div class="mx-lg-5 py-3 row mx-0">
    <nav-profile />
    <div class="col-md-9 d-none d-md-block">
      <div class="row">
        <div class="font-bold h2 col-md-12">{{ Content.label.account[$i18n.locale ]}}</div>
        <div class="group-overview col-md-12 py-3">
          <div class="row">
            <detail-profile />
            <address-profile />
          </div>
        </div>
        <div class="group-overview col-md-12 py-3 bg-white mt-3">
          <div class="row">
            <order-history />
          </div>
        </div>
      </div>
    </div>
    <index-mobile />
  </div>
</template>

<script>
  import NavProfile from './../nav'
  import ProfileDetail from './../overview/profile'
  import ProfileAddress from './../overview/address'
  import IndexMobile from './../overview/index-mobile'
  import OrderHistory from './../overview/order-history'
  import Content from './content.json'

  export default {
    components: {
      'nav-profile': NavProfile,
      'detail-profile': ProfileDetail,
      'address-profile': ProfileAddress,
      'index-mobile': IndexMobile,
      'order-history': OrderHistory
    },
    data: () => ({
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      firstName () {
        return this.user?.first_name
      },
      lastName () {
        return this.user?.last_name
      },
      birthday () {
        return this.user?.birthday
      },
      email () {
        return this.user?.email
      },
      phone () {
        return this.user?.phone
      }
    }
  }
</script>

<style lang="scss">
.group-overview {
  background: #FFFFFF;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
