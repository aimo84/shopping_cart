<template>
  <div>
    <div class="group d-flex">
      <picture>
        <source :srcset="getBannerDesktop" media="(min-width: 420px)">
        <source :srcset="getBannerMobile" media="(max-width: 420px)">
        <img :src="getBannerDesktop">
      </picture>
    </div>
    <div class="section d-flex">
      <div v-html="detailsData.custom_fields.partner_detail"></div>
    </div>
    <div class="content d-flex">
      <router-link to="/online-store/partner-privilege">
        <div class="button-back-detail">
          ย้อนกลับ        
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import {
  FETCH_PARTNER_CONTENT,
} from '@store/actions.type'

export default {
  name: 'online-store-partner-privilege-details',
  data() {
    return {
        id: this.$route.params.id,
        detailsData: {}
    }
  },
  methods: {
    async getDataPartner () {
      await this.$store.dispatch(FETCH_PARTNER_CONTENT , this.id)
      .then(res => {
         this.detailsData = res
      })
    }
  },
  computed: {
    getBannerDesktop () {
      return this.detailsData.custom_fields ? this.detailsData.custom_fields.base_url + this.detailsData.custom_fields.partner_detail_desktop : ''
    },
    getBannerMobile () {
      return this.detailsData.custom_fields ? this.detailsData.custom_fields.base_url + this.detailsData.custom_fields.partner_detail_mobile : ''
    },
  },
  async mounted () {
    await this.getDataPartner()
  },
}
</script>

<style lang="scss" scoped>

.group {
  margin-top: 200px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  background: #F0F0F0;
  img {
    width: 100%;
  }
}
.section {
  margin-top: 5px;
  h3 {
    text-align: left;
  }
  label {
    font-size: 18px;
  }
}                 
.content {
  height: 100px;
  position: relative;
  .button-back-detail {
    margin-top: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 0 24px;
    font-size: 22px;
    border-radius: 30px;
    min-width: 200px;
    font-weight: 500;
    font-family: 'TrueMedium';
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: rgb(242,14,57);
    background-image: linear-gradient(90deg, rgba(221,27,36,1) 0%, rgba(221,27,36,1) 27%, rgba(236,41,123,1) 100%);
  }
}  

@media screen and (max-width: 860px) {
  .section {
    margin: 10px;
  }
}

@media only screen and (min-width: 420px) {
  .section {
    margin: 10px;
  }
}
</style>