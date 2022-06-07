<template>
  <div>
    <div class="input">
      <div class='popularity-sort sort-input' :class="value === options.popularity && 'sort-selected'" @click="change('popularity')">{{Locale.levelc.sort.popularity[$i18n.locale]}}</div>
      <div class='latest-sort sort-input' :class="value === options.latest && 'sort-selected'" @click="change('latest')">{{Locale.levelc.sort.latest[$i18n.locale]}}</div>
      <div class='price-sort sort-input' :class="(value === options.lowPrice || value === options.highPrice) && 'sort-selected'" @click="change('price')">
        <div v-if="value === options.lowPrice">{{Locale.levelc.sort.price[$i18n.locale]}}
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7998 0.800003L6.7998 7L0.799805 0.800003" stroke="#FFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-else-if="value === options.highPrice">{{Locale.levelc.sort.price[$i18n.locale]}}
          <svg class="high-price-arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7998 0.800003L6.7998 7L0.799805 0.800003" stroke="#FFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-else>{{Locale.levelc.sort.price[$i18n.locale]}}
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 8.60001L3.5 11.7L0.5 8.60001" stroke="#404040" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.5 3.6L3.5 0.5L6.5 3.6" stroke="#404040" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'

  export default {
    model: {
      event: 'change'
    },
    props: {
      value: String,
      disabled: Boolean,
      error: Boolean,
      selected: Object,
      name: String,
      id: String
    },
    data: () => ({
      Locale,
      options: {
        popularity: '{"order":"score","sort":"desc"}',
        latest: '{"order":"created_at","sort":"desc"}',
        lowPrice: '{"order":"price","sort":"asc"}',
        highPrice: '{"order":"price","sort":"desc"}'
      }
    }),
    computed: {

      computedOptions () {
        return typeof this.options[0] === 'string'
          ? this.options.map(option => ({ id: option, value: option }))
          : this.options
      }
    },
    methods: {
      change (selected) {
        if (selected === 'price') {
          const data = this.options.lowPrice === this.value ? this.options.highPrice : this.options.lowPrice
          this.$emit('change', data.toString())
        } else {
          this.$emit('change', this.options[selected].toString())
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: end !important;
  font-family: 'TrueLight';
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  .sort-input {
    font-size: 24px;
    padding: 0px;
    border: 0px;
    // min-width: 180px;
    height: 40px;
    box-sizing: border-box;
    -webkit-appearance: none;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    div {
      display: flex;
      align-items: center;
    }
    svg {
      margin-left: 10.5px;
    }
    .high-price-arrow {
      transform: rotate(180deg);
    }
  }
  .popularity-sort {
    min-width: 120px;
    border-right: solid 1px #CCC;
  }
  .price-sort {
    min-width: 100px;
  }
  .latest-sort {
    min-width: 80px;
    border-right: solid 1px #CCC;
  }
}
.sort-selected {
  background: linear-gradient(298.29deg, #DF1584 4.92%, #DF1E5F 26.53%, #E02543 47.31%, #E02932 65.46%, #E02B2C 79%);
  color: #fff;
}

</style>
