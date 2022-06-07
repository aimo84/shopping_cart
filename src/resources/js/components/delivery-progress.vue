<template>
  <div class="tracking-container">
    <div class="tracking">
      <div
        class="tracking-indicator"
        :active="status === '001' || status === '100' || status === '200' || status === '301'"
      >
        <img
          src="/images/icons/icon-purchase-order.png"
        />
      </div>
      <div class="tracking-label">
        {{ $t('tracking.place-order') }}
      </div>
    </div>
    <div class="tracking-line" :class="{ 'bg-true': status === '100' || status === '200' || status === '301' }" />
    <div class="tracking">
      <div
        class="tracking-indicator"
        :active="status === '100' || status === '200' || status === '301'"
      >
        <img
          src="/images/icons/icon-credit-card.png"
        />
      </div>
      <div class="tracking-label">
         {{ $t('tracking.payment-success') }}
      </div>
    </div>
    <div class="tracking-line" :class="{ 'bg-true': status === '200' || status === '301' }" />
    <div class="tracking">
      <div
        class="tracking-indicator"
        :active="status === '200' || status === '301'"
      >
        <img
          src="/images/icons/icon-delivery-white.png"
        />
      </div>
      <div class="tracking-label">
        {{ $t('tracking.delivery-waiting') }}
      </div>
    </div>
    <div class="tracking-line" :class="{ 'bg-true': status === '301' }" />
    <div class="tracking">
      <div
        class="tracking-indicator"
        :active="status === '301'"
      >
        <img
          src="/images/icons/icon-product.png"
        />
      </div>
      <div class="tracking-label">
        {{ $t('tracking.delivery-success') }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      status: [String, Number],
    },
  };
</script>

<style scoped lang="scss">
  .tracking-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0 16px;

    .tracking-line {
      height: 7px;
      background-color: #ccc;
      margin: 22px 4px 0 4px;
      flex: 1;
    }

    .tracking {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 41px;

      .tracking-indicator {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        border-radius: 50%;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 30px;
        }

        &[active] {
          background-color: #EC232C;

          img {
              display: block; 
          }
        }

      }
      .tracking-label {
        text-align: center;
        line-height: 24px;
        font-family: 'TrueMedium';
        font-size: 20px;
        color: #37474f;
        line-height: 14px;
        margin-top: 4px;
        width: 86px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .tracking-container {
      .tracking {
        .tracking-indicator {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
</style>
