<template>
    <div v-if="this.tracking">
    <a
      v-if="this.tracking"
      :href="this.tracking.tracking_url">
    <img
      v-if="$i18n.locale === 'th'"
      class="tracking-status"
      src="/images/icons/tracking-status-th.svg"
      alt="Tracking Status"
    >
    <img
      v-else-if="$i18n.locale === 'en'"
      class="tracking-status"
      src="/images/icons/tracking-status-en.svg"
      alt="Tracking Status"
    >
    </a>
    </div>
    <div v-else class="packing-text">{{ Content.packing[$i18n.locale] }}</div>
</template>

<script>
  export default {
    props: {
      productId: Number,
      orderTracking: Array
    },
    data: () => ({
      tracking: null,
      Content: {
        packing: {
          th: 'กำลังแพ็กสินค้า...',
          en: 'Packing...'
        }
      }
    }),
    mounted () {
      this.getTracking(this.orderTracking, this.productId)
    },
    methods: {
      getTracking () {
        this.tracking = this.orderTracking.find((e) => e.id === this.productId)
      }
    }
  }
</script>
