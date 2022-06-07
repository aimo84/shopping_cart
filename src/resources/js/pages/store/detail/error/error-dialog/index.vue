<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <header>
            <slot name="header">
            </slot>
          </header>
          <section>
            <slot></slot>
          </section>
          <section class="actions">
            <slot name="actions"></slot>
          </section>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped lang="scss" src="./style.scss"></style>
