<template>
  <div class="promo-addon">
    <div
      v-if="onlyOneAccessory"
      class="promo only-one-accessory"
      :active="value === ''"
      @click="updatePromo('')"
    >
      <radio-element
        :name="name"
        value=""
        data-value=""
        v-model="value"
      />
      <div class="promo-container">
        <div class="promo-title">ไม่สนใจซื้อสินค้าเสริม</div>
      </div>
    </div>
    <template
      v-for="(item, key) in promos"
    >
      <div
        class="promo"
        :key="key"
        :active="value.includes(item.matcode)"
        @click="updatePromo(item.matcode)"
      >
        <template v-if="type === 'checkbox'">
          <checkbox-element
            :name="name"
            :value="item.matcode"
            :data-value="item.matcode"
            v-model="value"
          />
        </template>
        <template v-else>
          <radio-element
            :name="name"
            :value="item.matcode"
            :data-value="item.matcode"
            v-model="value"
          />
        </template>
        <img :src="item.image_url" />
        <div class="promo-container">
          <div class="promo-title">{{ item.name }}</div>
          <div class="promo-price">
            <div class="promo-price-label">
              <template
                v-if="item.compare_at_price !== item.price"
              >{{ computeBalance(item.compare_at_price) }} ฿</template>
            </div>
            <div class="promo-price-value">
              {{ computeBalance(item.price) }} ฿
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import Checkbox from '@components/checkbox'
  import Radio from '@components/radio'
  import Content from './content.json'
  import { computeBalance } from '@utils/common'

  export default {
    components: {
      'checkbox-element': Checkbox,
      'radio-element': Radio
    },
    props: {
      value: [String, Array],
      name: String,
      type: String,
      promos: Array
    },
    data: () => ({
      Content
    }),
    computed: {
      onlyOneAccessory () {
        const product = this.$store.state.products.productInfo.data.record
        return product.only_one_accessory && this.name === 'accessories'
      }
    },
    mounted () {
      const promo = this.promos[0]
      if (this.onlyOneAccessory) return this.$emit('input', '')
      if (this.type === 'radio') return this.$emit('input', promo.matcode)
      if (this.type === 'checkbox') return this.$emit('input', [promo.matcode])
    },
    methods: {
      computeBalance,
      updatePromo (e) {
        if (this.type === 'radio') {
          this.$emit('input', e)
          return
        }
        const val = [...this.value]
        if (this.value.includes(e)) {
          val.splice(val.indexOf(e), 1)
        } else {
          val.push(e)
        }
        this.$emit('input', val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .promo-addon {
    display: flex;
    padding-left: 8px;
    flex: 3;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;

    .promo {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px;
      display: flex;
      color: #000;
      cursor: pointer;
      height: 100%;
      max-width: 300px;
      min-height: 48px;

      &.only-one-accessory {
        align-items: center;

        .promo-container {
          margin-left: 12px;
        }
      }

      &[active] {
        border-color: #ff0000;
      }

      .input {
        pointer-events: none;
      }

      img {
        width: 60px;
        height: 60px;
        margin: 0 4px 0 8px;
        border-radius: 8px;
        object-fit: contain;
      }

      .promo-container {
        flex: 1;
        margin-left: 6px;
        display: flex;
        flex-direction: column;

        .promo-title {
          font-size: 22px;
          font-family: "TrueBold";
          line-height: 21px;
          flex: 1;
          word-break: break-word;

          &::v-deep .red {
            color: #ff0000;
          }
        }

        .promo-price {
          display: flex;
          font-size: 20px;
          margin-top: 2px;

          .promo-price-label {
            flex: 1;
            text-decoration: line-through;
            color: #ccc;
          }

          .promo-price-value {
            font-size: 30px;
            font-family: "TrueBold";
            color: #ff0000;
            text-align: right;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .promo-addon {
      grid-template-columns: auto;

      .promo img {
        width: 48px;
        height: 48px;
      }
    }
  }
</style>
