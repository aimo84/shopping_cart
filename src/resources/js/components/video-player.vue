<template>
  <div class="video">
    <iframe
      :src="url"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameborder="0"
      allowfullscreen
      loading="lazy"
      scrolling="no"
    />
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: () => ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .video {
    position: relative;
    padding-bottom: 56.25%;
  }
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
