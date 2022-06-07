<template>
  <div class="tick" ref="tick">
    <div>
      <span data-key="hours" data-transform="pad(00)" data-view="flip"></span>
      <span data-view="text" data-key="sep" class="tick-text-inline"></span>
      <span data-key="minutes" data-transform="pad(00)" data-view="flip"></span>
      <span data-view="text" data-key="sep" class="tick-text-inline"></span>
      <span data-key="seconds" data-transform="pad(00)" data-view="flip"></span>
    </div>
  </div>
</template>

<script>
  import Tick from '@pqina/flip'
  import '@pqina/flip/dist/flip.min.css'

  export default {
    props: {
      timestamp: String
    },
    data : () => ({
      counter: null
    }),
    mounted () {
      let timestampFromProps = this.timestamp.replace(' ', 'T')
      let time = new Date(timestampFromProps)
      this.counter = Tick.count.down(time, {
        format: ['h', 'm', 's']
      })
      this.counter.onupdate = (value) => {
        this._tick.value = {
          sep: ':',
          hours: value[0],
          minutes: value[1],
          seconds: value[2]
        }
      }
      this._tick = Tick.DOM.create(this.$refs.tick, {
        value: {
          sep: ':',
          hours: '23',
          minutes: '59',
          seconds: '59'
        }
      })
    },
    destroyed () {
      Tick.DOM.destroy(this.$refs.tick)
      console.log(this.counter)
    }
  }
</script>

<style lang="scss" scoped>
  .tick {
    font-size: 24px;
    max-height: 40px;
    max-width: 40px;
    line-height: 40px;
    text-align: center;
    div {
      display: flex;
    }
  }
  .tick-flip {
    letter-spacing: 2px;
    text-indent: 2px;
    min-width: 40px;
  }
  .tick-text {
    min-width: 16px;
  }
  .tick-text-inline {
    font-family: 'TrueBold'
  }
@media screen and (max-width: 680px) {
    .tick {
      font-size: 20px;
      max-height: 30px;
      max-width: 30px;
      line-height: 30px;
    }
    .tick-flip {
      min-width: 30px;
    }
    .tick-text {
    min-width: 8px;
  }
}
</style>
