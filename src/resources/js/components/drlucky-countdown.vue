<template>
  <div class="countdown-container">
    <div class="countdown-banner">
      <div>ไม่อยากพลาดเบอร์นี้ กรุณาทำรายการใน</div>
      <div class="tick" ref="tick">
        <div data-layout="horizontal">
          <span data-key="minutes" data-transform="pad(00)" data-view="flip"></span>
          <span data-view="text" data-key="sep" class="tick-text-inline"></span>
          <span data-key="seconds" data-transform="pad(00)" data-view="flip"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tick from '@pqina/flip'
  import '@pqina/flip/dist/flip.min.css'

  export default {
    mounted () {
      const timestamp = window.localStorage.getItem('truestore-berfuntong-timestamp')
      const time = new Date(parseInt(timestamp) + 1800000).toISOString()
      this.counter = Tick.count.down(time, {
        format: ['m', 's']
      })
      this.counter.onupdate = (value) => {
        this._tick.value = {
          sep: ':',
          minutes: value[0],
          seconds: value[1]
        }
      }
      this._tick = Tick.DOM.create(this.$refs.tick, {
        value: {
          sep: ':',
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
.countdown-container {
  padding-bottom: 24px;
  .countdown-banner {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    grid-gap: 24px;
    background: #E63129;
    border: 1px solid #FF0000;
    box-sizing: border-box;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    color: #fff;
    font-size: 24px;
    height: 72px;
    font-family: 'TrueBold';
    padding: 0 16px;
  }
  .tick {
    font-size: 48px;
    max-height: 48px;
    line-height: 48px;
    text-align: center;
  }
  .tick-flip {
    letter-spacing: 2px;
    text-indent: 2px;
    min-width: 60px;
  }
  .tick-text {
    min-width: 16px;
  }
}
@media screen and (max-width: 680px) {
  .countdown-container {
    padding-top: 16px;
    padding-bottom: 0;
    .countdown-banner {
      grid-gap: 12px;
      font-size: 18px;
      line-height: 18px;
      padding: 0 8px;
      height: 52px;
    }
    .tick {
      font-size: 32px;
      max-height: 32px;
      line-height: 32px;
    }
    .tick-flip {
      min-width: 36px;
    }
    .tick-text {
      min-width: 8px;
    }
  }
}
</style>
