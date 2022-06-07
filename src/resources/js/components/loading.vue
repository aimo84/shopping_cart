<template>
  <div class="loading-container" :fitHeight="fitHeight">
    <div class="loading" />
    <div class="processing-text" v-if="isProcessing">
      <div>{{ processing[$i18n.locale] }}</div>
      <div>{{ noRefresh[$i18n.locale] }}</div>
    </div>
     <div class="loading-text" v-else>{{ loading[$i18n.locale] }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      isProcessing: [Boolean],
      fitHeight: Boolean
    },
    data: () => ({
      loading: {
        en: 'Loading ...',
        th: 'กำลังโหลด ...'
      },
      processing: {
        en: 'Processing ...',
        th: 'กำลังประมวลผล ...'
      },
      noRefresh: {
        en: 'DO NOT refresh the page or click on the BACK button.',
        th: 'กรุณาอย่าทำการรีเฟรช หรือ กดปุ่มย้อนกลับ'
      }
    })
  }
</script>

<style scoped lang="scss">
.loading-container {
  padding: 24px 0;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &[fitHeight] {
    min-height: unset;
  }

  .loading {
    margin-right: 2px;
    border-radius: 100%;
    border: 4px solid #ff0000;
    border-bottom-color: transparent;
    height: 36px;
    width: 36px;
    background: 0 0!important;
    animation: loading .9s linear infinite;
  }
  .loading-text,
  .processing-text {
    line-height: 24px;
    text-align: center;
    margin-left: 2px;
    margin-top: 20px;
    font-size: 22px;
    color: #777777;
  }
  .processing-text {
    color: #484848;
    font-size: 24px;
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
