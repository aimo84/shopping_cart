<template>
  <div class="progress-container">
    <template v-for="(item, key) in progress">
      <div
        class="progress"
        :active="step >= key + 1"
        :key="`progress-${key}`"
      >
        <div class="progress-indicator">

          <!-- svg cart -->
          <svg v-if="key === 0" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8 5.80005H23.8L21 16.1C20.9 16.5 20.5 16.8 20.1 16.8H8.6C8.1 16.8 7.7 16.4 7.6 15.9L4.8 0.800049H0.800003" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.8 23.8C20.9046 23.8 21.8 22.9046 21.8 21.8C21.8 20.6955 20.9046 19.8 19.8 19.8C18.6954 19.8 17.8 20.6955 17.8 21.8C17.8 22.9046 18.6954 23.8 19.8 23.8Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.8 23.8C9.90457 23.8 10.8 22.9046 10.8 21.8C10.8 20.6955 9.90457 19.8 8.8 19.8C7.69543 19.8 6.8 20.6955 6.8 21.8C6.8 22.9046 7.69543 23.8 8.8 23.8Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- svg address -->
          <svg v-if="key === 1" width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.80002 20.8V8.80005V1.80005C5.80002 1.20005 6.20002 0.800049 6.80002 0.800049H21.8C22.4 0.800049 22.8 1.20005 22.8 1.80005V20.8C22.8 22.5 21.5 23.8 19.8 23.8H7.80002H5.80002" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.20001 23.8C1.80001 23.8 0.700012 22.7 0.700012 21.3V11.8C0.700012 11.2 1.10001 10.8 1.70001 10.8H5.70001V21.3C5.80001 22.6 4.60001 23.8 3.20001 23.8Z" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.80002 23.8H3.80002" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.80002 4.80005H18.8" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.80002 8.80005H18.8" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.80002 12.8H18.8" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- svg payment -->
          <svg v-if="key === 2" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8 15.8H1.79999C1.19999 15.8 0.799988 15.4 0.799988 14.8V1.80005C0.799988 1.20005 1.19999 0.800049 1.79999 0.800049H22.8C23.4 0.800049 23.8 1.20005 23.8 1.80005V14.8C23.8 15.3 23.3 15.8 22.8 15.8Z" :stroke="step > 2 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.8 3.80005H0.799988V6.80005H23.8V3.80005Z" :stroke="step > 2 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.8 12.8H20.8" :stroke="step > 1 ? '#fff' : '#B3B3B3'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="progress-label" :active="step > key + 1">
          {{ item[$i18n.locale] }}
        </div>
      </div>
      <div
        class="progress-line"
        :active="step > key + 1"
        :key="`line-${key}`"
      />
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      data: [Object],
      step: [Number],
      progressLabel: Array
    },
    computed: {
      progress () {
        if (this.progressLabel) return this.progressLabel
        return [
          {
            th: 'ตะกร้าสินค้า',
            en: 'Confirm Order'
          },
          {
            th: 'ที่อยู่จัดส่ง',
            en: 'Shipping Address'
          },
          {
            th: 'ชำระเงิน',
            en: 'Order Summary'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 738px;
    margin: auto;
    overflow: hidden;

    .progress-line {
      height: 8px;
      background-color: #E1E1E1;
      margin: 24px 0 0 0;
      flex: 1;

      &:last-child {
        display: none;
      }

      &[active] {
        background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);;
      }
    }

    .progress {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 42px;

      &:first-child {
        margin-left: 35px;
      }

      &:nth-child(5) {
        margin-right: 35px;
      }

      .progress-indicator {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        border-radius: 50%;
        background-color: #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
      }

      &[active] {
        .progress-indicator {
          background-image: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);

          svg {
            display: block;
          }
        }
      }

      .progress-label {
        text-align: center;
        font-family: "TrueLight";
        font-size: 24px;
        font-style: normal;
        color: #000;
        line-height: 28.79px;
        margin-top: 2px;
        width: 170px;

        &[active] {
          color: #E62627;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .progress-container {
      padding-top: 24px;

      .progress-line {
        margin: 3% 4px 0 4px;
      }
      .progress {
        .progress-indicator {
          margin-bottom: 8px;
        }
        .progress-label {
          font-size: 22px;
          line-height: 20px;
          width: 140px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .progress-container {
      padding-top: 24px;

      .progress-line {
        margin: 20px 4px 0 4px;
      }
      .progress {
        .progress-indicator {
          margin-bottom: 8px;
        }
        .progress-label {
          font-size: 22px;
          line-height: 20px;
          width: 140px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .progress-container {
      padding: 20px 0px 0px;
      .progress-line {
        margin: 20px 4px 0 4px;
      }
    }
    .progress-container .progress .progress-label {
      width: 100px;
    }
  }

  @media screen and (max-width: 380px) {
    .progress-container .progress .progress-label {
      width: 80px;
      font-size: 20px;
      line-height: 18px;
    }
  }
</style>
