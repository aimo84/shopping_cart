<template>
  <dialog-element ref="dialog" class="meaning-dialog">
    <div slot="content">
      <div class="close-container">
        <div class="close" @click="$refs.dialog.close()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <div class="title" v-if="!isSearchResult">{{ Locale.meaning_title[$i18n.locale] }}</div>
      <div class="title" v-else>{{ Locale.meaning_title[$i18n.locale] }} {{activeValue}}</div>
      <div class="meaning-number-container" v-if="!isSearchResult">
        <div class="button" @click="previous">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div class="number-container">
          <div
            class="number-scroll-container"
            ref="numberContainer"
            :style="`transform: translateX(${translateValue}px)`"
          >
            <div class="number" />
            <template
              v-for="(i, key) in numbers"
            >
              <div
                class="number"
                v-if="i !== '00'"
                :key="key"
                :active="activeValue === i"
                @click="changeActiveValue(i)"
              >
                <div class="number-button">{{ i }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="button" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
      <div class="meaning-explain" v-if="detail">
        <div class="title">{{ detail.title }}</div>
        <div class="description">{{ detail.description }}</div>
      </div>
      <button-element
        class="button choose"
        @click="close"
        v-if="!isSearchResult"
      >{{ Locale.choose_meaning[$i18n.locale] }}</button-element>
    </div>
  </dialog-element>
</template>

<script>
  import Button from '@components/button'
  import Dialog from '@components/dialog'
  import Locale from './locale.json'

  export default {
    components: {
      'button-element': Button,
      'dialog-element': Dialog
    },
    props: {
      isSearchResult: Boolean,
      numbers: Array,
      details: Object,
      value: String
    },
    data: () => ({
      translateValue: 0,
      activeValue: 0,
      Locale
    }),
    computed: {
      detail () {
        if (this.isSearchResult) {
            this.activeValue = this.numbers[0];
        }
        if (this.details) {
          return this.details[this.activeValue]
        }
      }
    },
    watch: {
      activeValue (value) {
        this.updateNumberPos(value)
      }
    },
    methods: {
      trackAnalytics (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'track_event',
          event_category: 'search_mobile_number',
          event_action: 'see_meaning',
          event_label: `${e} | ${this.detail.title}`
        })
      },
      changeActiveValue (e) {
        this.activeValue = e
        this.trackAnalytics(e)
      },
      updateNumberPos (value) {
        const numberContainer = this.$refs.numberContainer
        if (numberContainer) {
          let min = 3
          let max = 7
          if (document.body.clientWidth < 860) {
            min = 1
            max = 3
          }
          const number = numberContainer.querySelector('.number')
          const index = this.numbers.indexOf(value)
          const numberWidth = number.clientWidth
          const totalWidth = numberWidth * this.numbers.length
          const minTranslate = numberWidth * min
          const maxTranslate = totalWidth - numberWidth * max
          const translate = numberWidth * index - minTranslate
          if (translate > 0 && translate <= maxTranslate) this.translateValue = -translate
          else if (translate <= 0) this.translateValue = 0
          else this.translateValue = -maxTranslate
        }
      },
      open () {
        this.$refs.dialog.open()
        this.activeValue = this.value === '00' ? this.numbers[1] : this.value
        this.$nextTick(() => {
          this.updateNumberPos(this.activeValue)
          this.trackAnalytics(this.activeValue)
        })
      },
      close () {
        this.$emit('input', this.activeValue)
        this.$refs.dialog.close()
      },
      previous () {
        const numberContainer = this.$refs.numberContainer
        const number = numberContainer.querySelector('.number')
        if (this.translateValue < 0) this.translateValue = this.translateValue + number.clientWidth
      },
      next () {
        let max = 7
        if (document.body.clientWidth < 860) {
          max = 3
        }
        const numberContainer = this.$refs.numberContainer
        const number = numberContainer.querySelector('.number')
        const totalWidth = number.clientWidth * this.numbers.length
        const visibleWidth = number.clientWidth * max
        if (totalWidth + this.translateValue > visibleWidth) {
          this.translateValue = this.translateValue - number.clientWidth
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.meaning-dialog::v-deep .content {
  max-width: 720px;
}
.meaning-dialog {
  .content {
    max-width: 720px;
  }
  .close-container {
    display: flex;
    justify-content: flex-end;

    .close {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        fill: #9a9a9a;
      }

      &:hover {
        background: #e3e3e3;
      }
    }
  }
  .title {
    font-family: 'TrueBold';
  }
  .meaning-number-container {
    margin: 36px 16px 24px 16px;
    display: flex;
    align-items: center;

    .button {
      min-width: 40px;
      width: 40px;
      height: 40px;
      background: #ffb800;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        fill: #fff;
      }

      &::selection {
        background-color: transparent;
      }
    }
    .number-container {
      margin: 0 16px;
      display: flex;
      overflow: hidden;
      width: 100%;

      .number-scroll-container {
        display: flex;
        width: 100%;
        transition: 150ms transform ease;
      }

      .number {
        width: calc(100% / 7);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &[active] .number-button {
          background-color: #f00b22;
        }

        .number-button {
          width: 64px;
          height: 64px;
          background-color: #ebebeb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          color: #fff;
          font-family: 'TrueBold';
          line-height: 38px;

          &::selection {
            background-color: transparent;
          }
        }
      }
    }
  }
  .meaning-explain {
    padding: 24px 36px 36px 36px;

    .title {
      color: #f00b22;
      margin-bottom: 16px;
      font-family: 'TrueBold';
    }
    .description {
      text-align: left;
      padding: 0 36px;
    }
  }
  .button.choose {
    background-color: #f00b22;
    margin-bottom: 24px;
  }
}

@media screen and (max-width: 860px) {
  .meaning-dialog {
    .meaning-number-container .number-container .number {
      width: calc(100% / 3);

      .number-button {
        width: 54px;
        height: 54px;
      }
    }
    .meaning-explain {
      padding: 24px 0;

      .description {
        padding: 0 16px;
      }
    }
  }
}
</style>
