<template>
    <div class="box-myprofile-menu col-md-3 d-none d-md-block">
        <div class="box-user-display p-2 text-center">
            <img :src = "avatar" class="rounded-circle w-25">
            <div class="box-detail font-bold">
                <div class="user-name text-truncate h4">{{ displayName }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 item-header font-bold h4" :class="{ 'text-danger' : $route.name === 'profile-overview' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                            <path d="M14.2515 6.27878C14.3854 8.90577 12.3508 11.1509 9.69724 11.2846C7.04368 11.4182 4.79119 9.38905 4.65728 6.76206C4.52336 4.13507 6.55796 1.88993 9.21152 1.75626C11.8651 1.6226 14.1176 3.65179 14.2515 6.27878Z" stroke="url(#paint0_linear_15_1185)" stroke-width="1.5"/>
                            <path d="M7.16253 20.2524C5.24619 20.2524 3.53238 20.013 2.32224 19.645C1.71248 19.4595 1.27261 19.2539 1.0018 19.0599C0.802614 18.9173 0.758274 18.8301 0.750026 18.8094C0.759813 16.1603 3.49167 13.7472 7.16253 13.7472H11.7466C15.4172 13.7472 18.1493 16.1625 18.1591 18.8094C18.1508 18.8301 18.1065 18.9173 17.9073 19.0599C17.6365 19.2539 17.1966 19.4595 16.5869 19.645C15.3767 20.013 13.6629 20.2524 11.7466 20.2524H7.16253Z" stroke="url(#paint1_linear_15_1185)" stroke-width="1.5"/>
                            <defs>
                                <linearGradient id="paint0_linear_15_1185" x1="11.9652" y1="18.908" x2="0.214825" y2="16.0214" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_15_1185" x1="12.65" y1="26.0618" x2="-1.71229" y2="15.9327" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span role="button" @click="profile">{{ Content.label.account[$i18n.locale ]}}</span>
                    </div>
                    <div class="col-md-12 item-body ml-lg-4 font-light">
                        <div>
                            <a class="margin-left-icon d-block h5" @click="detail" :class="{ 'text-danger' : $route.name === 'profile-detail'}"><span role="button">{{ Content.label.profile[$i18n.locale ]}}</span></a>
                            <a class="margin-left-icon d-block h5" @click="address" :class="{ 'text-danger' : $route.name === 'profile-address'}"><span role="button">{{ Content.label.address[$i18n.locale ]}}</span></a>
                            <!-- <a class="d-block h5 ">เปลี่ยนรหัสผ่าน</a> -->
                        </div>
                    </div>
                    <div class="col-md-12 item-header font-bold h4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                            <path d="M13.9165 3.08337H15.5832V20.5834H5.58317H1.4165V16.4167V3.08337H3.08317" stroke="url(#paint0_linear_15_1189)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.2498 4.75008H4.74985V3.08341C4.74985 2.16675 5.49985 1.41675 6.41651 1.41675H10.5832C11.4998 1.41675 12.2498 2.16675 12.2498 3.08341V4.75008Z" stroke="url(#paint1_linear_15_1189)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.74985 8.91675H12.2498" stroke="url(#paint2_linear_15_1189)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.74985 13.0834H12.2498" stroke="url(#paint3_linear_15_1189)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_15_1189" x1="10.8939" y1="31.6437" x2="-4.329" y2="27.9643" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_15_1189" x1="9.76728" y1="6.8568" x2="3.88979" y2="2.90838" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_15_1189" x1="9.76728" y1="10.5488" x2="8.34902" y2="7.37288" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_15_1189" x1="9.76728" y1="14.7154" x2="8.34902" y2="11.5395" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span role="button" @click="orderTracking" :class="{ 'text-danger' : $route.name === 'profile-order-tracking' || $route.name === 'profile-order-tracking-detail' }">{{ Content.label.orderList[$i18n.locale ]}}</span>
                    </div>
<!--                    <div class="col-md-12 item-body ml-lg-4 font-light">-->
<!--                        <div>-->
<!--                             <a class="d-block h5 ">การยกเลิกสินค้า</a> -->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="col-md-12 item-header font-bold h4" :class="{ 'text-danger' : $route.name === 'profile-wish-list' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                            <path d="M4.60078 1.09918C2.90078 1.39918 1.50078 2.79918 1.10078 4.49918C0.800777 5.89918 1.20078 7.19918 1.90078 8.19918L9.40078 16.8992C9.80078 17.2992 10.4008 17.2992 10.8008 16.8992L18.3008 8.19918C19.1008 7.19918 19.4008 5.89918 19.1008 4.49918C18.7008 2.79918 17.3008 1.39918 15.6008 1.09918C12.7008 0.499181 10.1008 2.69918 10.1008 5.59918C10.1008 2.79918 7.50078 0.599181 4.60078 1.09918Z" stroke="url(#paint0_linear_15_1188)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_15_1188" x1="13.1856" y1="27.4373" x2="-5.43233" y2="21.1868" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DF1584"/>
                                    <stop offset="0.2917" stop-color="#DF1E5F"/>
                                    <stop offset="0.5722" stop-color="#E02542"/>
                                    <stop offset="0.8173" stop-color="#E02932"/>
                                    <stop offset="1" stop-color="#E02B2C"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span role="button" @click="wishList">{{ Content.label.wishList[$i18n.locale ]}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Content from './content.json'

  export default {
    data: () => ({
      Content
    }),
    computed: {
      user () {
        return this.$store.state.auth.profile.data
      },
      avatar () {
        return this.user?.avatar + this.user?.user_id
      },
      displayName () {
        return this.user?.display_name
      }
    },
    methods: {
      profile () {
        this.$router.push('/profile')
      },
      detail () {
        this.$router.push('/profile/detail')
      },
      orderTracking () {
        this.$router.push('/profile/tracking')
      },
      wishList () {
        this.$router.push('/profile/wishlist')
      },
      address () {
        this.$router.push('/profile/address')
      },
      collapse () {
        if (this.$refs.wls_navbar_collapse_1.classList.contains('open')) {
          this.$refs.wls_navbar_collapse_1.classList.remove('open')
          this.$refs.wls_navbar_collapse_1.style.height = '0px'
        } else {
          this.$refs.wls_navbar_collapse_1.classList.add('open')
          this.$refs.wls_navbar_collapse_1.style.height = '150px'
        }
      }
    }
  }
</script>
