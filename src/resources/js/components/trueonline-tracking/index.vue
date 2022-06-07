<template>
  <dialog-element
    ref="dialog"
    show-close-button
  >
    <div slot="content">
      <component
        :is="`${component}-element`"
        :timeslot="selectedTimeSlot"
        @route="component = $event"
        @timeslot-changed="selectedTimeSlot = $event"
        @overflow="updateDialogOverflowY($event)"
      />
    </div>
  </dialog-element>
</template>

<script>
  import Dialog from '@components/dialog'

  export default {
    components: {
      'dialog-element': Dialog,
      'slot-element': () => import('./slot'),
      'otp-element': () => import('./otp'),
      'modify-element': () => import('./modify'),
      'success-element': () => import('./success'),
      'fail-element': () => import('./fail')
    },
    data: () => ({
      component: null,
      selectedTimeSlot: {}
    }),
    mounted () {
      this.$emit('loaded')
    },
    methods: {
      open () {
        this.component = 'otp'
        this.$refs.dialog.open()
      },
      close () {
        this.$refs.dialog.close()
      },
      updateDialogOverflowY (e) {
        const ele = this.$refs.dialog.$el.querySelector('.content')
        ele.style.overflowY = e
      }
    }
  }
</script>
