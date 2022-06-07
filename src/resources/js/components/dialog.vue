<template>
  <div class="dialog">
    <transition v-if="name==`dropdown`">
      <div
        class="dropdown-container"
        :class='[{"mobile-size": mobileSize}, extendClass]'
        v-if="visible"
      >
        <div class="dropdown-content"
          :class='{ "no-padding": noPadding }'
        >
          <div
            class="close-btn-dropdown"
            @click="close"
            v-if="showCloseButton"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
            </svg>
          </div>
          <slot name="dropdown" />
        </div>
      </div>
    </transition>
    <transition v-else>
      <div
        class="content"
        :class='[{"mobile-size": mobileSize}, extendClass]'
        v-if="visible"
      >
        <div
          class="new-close-btn"
          @click="close"
          v-if="showCloseButton && newDesign"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L21 21" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M21 1L1 21" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="dialog-content"
          :class='{ "no-padding": noPadding }'
        >
          <div
            class="close-btn"
            @click="close"
            v-if="showCloseButton && !newDesign"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
            </svg>
          </div>
          <slot name="content" />
        </div>
      </div>
    </transition>
    <transition name="backdrop">
      <div
        class="backdrop"
        v-if="visible"
        @click="close"
      />
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      mobileSize: Boolean,
      noPadding: Boolean,
      showCloseButton: Boolean,
      extendClass: String,
      name: String,
      newDesign: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      visible: false
    }),
    methods: {
      lockScroll () {
        const html = document.documentElement
        const body = document.body
        const top = html.scrollTop
        const hasScroll = html.scrollHeight > window.innerHeight
        body.style.position = 'fixed'
        body.style.top = -top + 'px'
        body.style.right = '0'
        body.style.left = '0'
        body.style.overflowY = hasScroll ? 'scroll' : ''
      },

      unlockScroll () {
        const html = document.documentElement
        const body = document.body
        const top = parseInt(body.style.top, 10)
        body.style.position = ''
        body.style.top = ''
        body.style.right = ''
        body.style.left = ''
        body.style.overflowY = ''
        html.scrollTop = -top
      },

      open () {
        if (this.visible) return
        this.visible = true
        this.lockScroll()
      },

      close () {
        if (!this.visible) return
        this.visible = false
        this.unlockScroll()
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang='scss' scoped>
.dialog {
  position: absolute;
}

.dialog.deleteDialog {
  text-align: center;
}

.paysmooth-error-dialog {
  max-width: 380px !important;
  border-radius: 26px !important;
}

.content {
  position: fixed;
  top: 50%;
  right: 24px;
  left: 24px;
  z-index: 2400;
  overflow-y: auto;
  max-width: 600px;
  max-height: 70%;
  transform: translateY(-50%);
  margin: auto;

  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(1.025);
  }
}

.dialog.deleteDialog .content {
  max-width: 480px;
}

.new-close-btn {
  text-align: right;
  cursor: pointer;
}

.close-btn, .close-btn-dropdown {
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 12px;
  color: #484848;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
}

.close-btn-dropdown {
  z-index: 2500;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2390;
  background-color: rgba(0, 0, 0, .8);

  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

.dialog-content {
  padding: 16px;

  &.no-padding {
    padding: 0;
  }
}
.dialog-content {
  font-size: 22px;
  line-height: 22px;
  border-bottom: 1px solid #e4eaec;

  border-radius: 4px;
  background-color: #fff;
}

.dropdown-container {
  position: fixed;
  bottom: 0;
  z-index: 2400;
  overflow-y: auto;
  border-radius: 24px 24px 0 0;
  background-color: #fff;
  width: 100%;
  height: 200px;

  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(1.025);
  }
}

.dropdown-container .dropdown-content {
  font-size: 22px;
}

@media screen and (min-width: 1000px) {
  .dropdown-container {
    display: none;
  }
}

@media media and (max-width: 860px) {
  .content {
    top: 48px;
  }
  .close-btn {
    top: 8px;
    right: 8px;
  }
}

@media screen and (max-width: 1000px) {
  .content {
    &.mobile-size {
      top: 100%;
      transform: translateY(-100%);
      left: 0;
      right: 0;
      max-width: 100%;
    }
    max-height: 100% !important;
  }
}
</style>
