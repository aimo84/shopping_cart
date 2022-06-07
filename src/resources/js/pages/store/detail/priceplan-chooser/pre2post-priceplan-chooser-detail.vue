<template>
  <div class="priceplan-container">
    <div class="top-container" :class="{ selected }">
      <div v-if="$vnode.key === 0" class="best-value">BEST VALUE</div>
      <div class="label">Postpaid package</div>
      <div class="price">฿<span>{{ computeBalance(plan.price) }}</span>/mo</div>
      <div
        v-html="plan.long_description"
        class="feature-container"
      />
    </div>
    <div class="bottom-container" :class="{ selected }">
      <div>Device discount</div>
      <div class="price">฿<span>14,000</span></div>
      <button
        :class="{ selected }"
        @click="updateSelected"
      >
        <template v-if="selected">{{ Locale.plan_selected[$i18n.locale] }}</template>
        <template v-else>{{ Locale.plan_select[$i18n.locale] }}</template>
      </button>
    </div>
  </div>
</template>

<script>
  import Locale from './locale.json'
  import {
    computeBalance
  } from '@utils/common'

  export default {
    props: {
      plan: Object,
      selected: Boolean
    },
    data: () => ({
      Locale
    }),
    methods: {
      computeBalance,
      updateSelected () {
        this.$emit('update', this.$vnode.key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .priceplan-container {
    font-size: 1.5em;
    line-height: 1em;
    color: #000;
    display: flex;
    flex-direction: column;

    .top-container {
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      background-color: #f9f7f7;
      padding: 28px 16px 16px;
      position: relative;
      flex: 1;

      &.selected {
        background: linear-gradient(67.74deg, #ffeede 0%, #ffcaca 100%);
        border-color: #dd5d5d;
      }

      .best-value {
        position: absolute;
        background-color: #eb606c;
        padding: 4px 16px;
        color: #fff;
        font-family: 'TrueBold';
        right: -1px;
        top: -8px;
        border-bottom-left-radius: 16px;
        border-top-right-radius: 16px;
      }

      .label {
        font-family: 'TrueBold';
      }
      .price {
        margin-top: 4px;
        font-family: 'TrueBold';
        color: #e63631;

        span {
          margin-left: 1px;
          font-size: 40px;
        }
      }
      .feature-container {
        width: 100%;
      }
    }
    .bottom-container {
      position: relative;
      margin-top: -1px;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      background-color: #fff;
      padding: 16px;
      text-align: center;
      font-family: 'TrueBold';

      &.selected {
        border-color: #dd5d5d;
      }

      .price span {
        color: #cd2f2a;
        font-size: 30px;
      }

      button {
        margin-top: 4px;
        cursor: pointer;
        border: 1px solid #e63631;
        background: #fff;
        height: 32px;
        border-radius: 32px;
        color: #e63631;
        font-family: 'TrueBold';
        font-size: 20px;
        width: 100%;
        max-width: 80%;

        &.selected {
          background: #e63631;
          color: #fff;
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: -1px;
        left: 10px;
        right: 10px;
        background: #fff;
        height: 1px;
      }
    }
  }
</style>
