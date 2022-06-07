<template>
  <div class="popup-advertisement-container">
    <template v-if="advertisementInfo">
      <a class="infoA" :href="advertisementInfo.link">
        <img 
          v-if="advertisementInfo && advertisementInfo.banner && advertisementInfo.custom_fields && advertisementInfo.custom_fields.base_url"
          :src="`${advertisementInfo.custom_fields.base_url}${advertisementInfo.banner}`"
        />
      </a>
      <a :href="advertisementInfo.link">
        <button class="bg_gradient">{{ advertisementInfo.title[$i18n.locale] }}</button>
      </a>
    </template>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isFirstTime: false,
      advertisementInfo: null,
    }),
    props : ['advertisementInfoProps'],
    created() {
      if (sessionStorage.getItem('runPopupAdvCompFirstTime') === null) {
        this.isFirstTime = true
        this.fecthAdevertisementInformationFromAPI(this.isFirstTime)
        sessionStorage.setItem('runPopupAdvCompFirstTime', false)
      } else {
        this.isFirstTime = false
        this.fecthAdevertisementInformationFromAPI(this.isFirstTime)
      }
    },
    methods: {
      fecthAdevertisementInformationFromAPI (isFirstTimeStatus) {
        if (this.advertisementInfoProps) {
          if (isFirstTimeStatus) {
            this.advertisementInfo = this.advertisementInfoProps[0]
          } else {
            this.advertisementInfo = this.advertisementInfoProps[Math.floor(Math.random() * 4)]
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .popup-advertisement-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    a {
      img {
        width: 360px;
        height: 550px;
      }
    }

    button {
      margin-top: 15px;
      outline: none;
      border: none;
      min-width: 180px;
      padding: 0px 0px;
      font-family: "TrueBold";
      font-style: normal;
      font-size: 22px;
      line-height: 180%;
      color: #fff;
      text-align: center;
      border-radius: 30px;
      cursor: pointer;
    }

    button.bg_gradient {
      background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
    }

    @media screen and (max-width: 525px) {
      a {
        img {
          width: 275px;
          height: 350px;
        }
      }
    }

    @media screen and (max-width: 450px) {
      a {
        img {
          width: 220px;
          height: 300px;
        }
      }
    }
  }
</style>