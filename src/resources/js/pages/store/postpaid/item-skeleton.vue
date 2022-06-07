<template>
  <div class="result-grid-container">
    <div class="result-item" v-for="index in 12" :key="index">
      <div class="result-card">
        <div class="result-banner-skeleton skeleton animate">
        </div>
        <div class="number-skeleton skeleton animate"></div>
        <div class="sum-price-skeleton skeleton animate"></div>
        <div class="select-button-skeleton skeleton"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped lang="scss">
  .result-grid-container {

    .result-item {
      min-width: 271px;
      min-height: 152px;

      .result-card {
        border-radius: 10px;
        box-shadow: 4px 4px 20px rgb(0 0 0 / 10%);
        padding: 10px;
        overflow: auto;
        
        .skeleton {
          background: #ccc !important;
        }

        .result-banner-skeleton {
          width: 35%;
          height: 25px;
          margin-bottom: 20px;
        }

        .number-skeleton {
          width: 80%;
          height: 30px;
          margin: 0 auto;
          margin-bottom: 5px;
        }

        .sum-price-skeleton {
          width: 70%;
          height: 10px;
          margin: auto;
          margin-bottom: 10px;
        }

        .select-button-skeleton {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          float: right;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .result-grid-container {
      .result-item {
        min-width: 188px;
        width: 188px;
        min-height: 105px;

        .result-card {
          padding: 5px;

          .result-banner-skeleton {
            margin-bottom: 5px;
            height: 20px;
          }

          .number-skeleton {
            margin-bottom: 10px;
            height: 22px;
          }

          .sum-price-skeleton {
            width: 90%;
            height: 10px;
            margin: auto;
            margin-bottom: 10px;
          }

          .select-button-skeleton {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    
  }
</style>