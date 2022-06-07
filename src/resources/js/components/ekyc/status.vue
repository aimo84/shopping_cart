<template>
  <div>
    <div v-if="status === 'loading'" class="loading">
      <div class="loading-icon" />
    </div>
    <div
      v-else-if="status"
      class="ekyc-success-icon"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
      </svg>
      <div>{{ Locale.success[$i18n.locale] }}</div>
    </div>
    <div
      class="ekyc-icon"
      v-else
    >
      <img :src="`/images/icons/${icon}.png`" />
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    props: {
      status: [String, Boolean],
      icon: String
    },
    data: () => ({
      Locale
    })
  }
</script>

<style lang="scss" scoped>
  .ekyc-icon {
    height: 100px;
    width: 100px;
    background: #eee;
    border-radius: 8px;

    img {
      height: 100px;
      width: 100px;
    }
  }

  .loading {
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;

    .loading-icon {
      border-radius: 100%;
      border: 4px solid #e4a20f;
      border-bottom-color: transparent;
      width: 30px;
      height: 30px;
      background: 0 0!important;
      animation: loading .9s linear infinite;
    }
  }

  .ekyc-success-icon {
    width: 100px;
    height: 100px;
    background: #e4a20f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "TrueBold";
    color: #fff;
    font-size: 22px;
    line-height: 20px;

    svg {
      fill: #fff;
    }
  }

  @media screen and (max-width: 860px) {
    .ekyc-icon,
    .ekyc-icon img,
    .loading {
      height: 60px;
      width: 60px;
    }
    .ekyc-success-icon {
      width: 60px;
      height: 60px;
      font-size: 14px;
      line-height: 14px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
