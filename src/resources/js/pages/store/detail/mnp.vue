<template>
  <div class="promotions">
    <div
      v-for="(item, key) in productInfo.mnp_package"
      :key="key"
      class="promotion"
    >
      <div class="content">
        <div class="title">{{ item.name }}</div>
        <div class="subtitle">{{ item.description }}</div>
      </div>
      <template v-if="disabled">
        <div
          class="link"
          disabled
        >{{ Locale.apply_now[$i18n.locale] }}</div>
      </template>
      <template v-else>
        <router-link
          class="link"
          :to="{
            name: 'mnp-verify',
            params: {
              id: $route.params.id,
              code: item.code
            },
            query: {
              token: $route.query.token
            }
          }"
        >{{ Locale.apply_now[$i18n.locale] }}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disabled: Boolean
    },
    data: () => ({
      Locale: {
        apply_now: {
          th: 'สมัครบริการ',
          en: 'Apply Now'
        }
      }
    }),
    computed: {
      productInfo () {
        return this.$store.state.products.productInfo.data.record
      }
    }
  }
</script>

<style lang="scss" scoped>
.promotions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 12px;
  width: 100%;

  .promotion {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .content {
      padding: 12px;
      flex: 1;

      .title {
        font-family: 'TrueBold';
      }
      .subtitle {
        font-size: 22px;
        line-height: 22px;
      }
    }
    .link {
      background: #ff0000;
      width: 100%;
      border: none;
      outline: none;
      color: #fff;
      padding: 8px;
      font-family: 'TrueBold';
      font-size: 22px;
      display: block;
      text-align: center;
      text-decoration: none;

      &[disabled] {
        background-color: #9e9e9e;
        cursor: default;
      }
    }
  }
}
</style>
