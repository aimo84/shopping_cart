<template>
  <div class="input_container select search-dropdown" :name="name">
    <label v-if="item.label">
      {{ item.label[$i18n.locale] }}:
      <span
        class="required"
        v-if="item.required"
      >*</span>
    </label>
    <v-select
      label="value"
      :disabled="item.disabled"
      :options="options"
      :clearable="false"
      :selectable="option => option.id !== '_'"
      :reduce="options => options.id"
      v-model="selectValue"
      @input="$emit('input', selectValue.toString())"
    />
  </div>
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    components: {
      'v-select': vSelect
    },
    props: {
      item: Object,
      value: String,
      name: String
    },
    data: () => ({
      selectValue: ''
    }),
    computed: {
      options () {
        return this.item.options
      },
      selected () {
        return this.options.find((e) => e.id.toString() === this.value)
      }
    },
    watch: {
      value () {
        if (!this.selected) return
        this.selectValue = this.selected.id
      },
      options () {
        if (!this.selected) return
        this.selectValue = this.selected.id
      }
    },
    mounted () {
      if (!this.selected) return
      this.selectValue = this.selected.id
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/form.scss";
</style>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";

  .v-select {
    width: 100%;
    font-size: 22px;

    .vs__dropdown-toggle {
      border-color: #000;
      border-radius: 8px;
      height: 40px;
      overflow-y: clip;
    }
    &.vs--disabled .vs__dropdown-toggle {
      border-color: #ccc;

      .vs__selected {
        color: #949494;
      }
    }
    .vs__search {
      font: 22px "TrueMedium";
      line-height: 1.4;
      padding-left: 8px;
    }
  }
  .select.search-dropdown[invalid] {
    .v-select {
      .vs__dropdown-toggle {
        border-color: red;
      }
      .vs__selected {
        color: red;
      }
    }
  }
</style>
