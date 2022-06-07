<template>
  <div>
    <div
      v-for="(item, key) in form"
      :key="item.id"
      class="form"
      :class="item.classForm"
      :hidden="item.hidden"
    >
      <div v-if="item.id">
        <slot
          :name="item.id"
          :data="item"
        />
      </div>
      <div
        v-else-if="['text', 'email', 'tel', 'password', 'url']
          .includes(item.type)"
        class="input_container text"
        :class="item.class"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <input-element
          :type="item.type"
          :name="key"
          v-model="data[key]"
          :placeholder="item.placeholder"
          :error="item.error"
          :autocomplete="item.autocomplete"
          :disabled="item.disabled"
          :required="item.required"
          :pattern="item.pattern"
          :maxlength="item.maxlength"
          :inputmode="item.inputmode"
        />
      </div>
      <div
        v-else-if="item.type === 'number'"
        class="input_container text"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <input-element
          :type="item.type"
          :name="key"
          v-model.number="data[key]"
          :placeholder="item.placeholder"
          :error="item.error"
          :suffix="item.suffix"
          :disabled="item.disabled"
          :pattern="item.pattern"
          :required="item.required"
          :min="item.min"
          :max="item.max"
          :maxlength="item.maxlength"
          :inputmode="item.inputmode"
        />
      </div>
      <div
        v-else-if="item.type === 'textarea'"
        class="input_container text"
        :class="item.class"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <textarea
          :name="key"
          v-model="data[key]"
          :required="item.required"
          :rows="item.rows"
        />
      </div>
      <div
        v-else-if="item.type === 'checkbox'"
        class="input_container radio"
        :class="item.variant"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <div class="radio-container checkbox">
          <div
            class="radio-item"
            v-for="radio in item.options"
            :key="radio.value"
          >
            <input
              :id="`${item.checkbox_id}-${radio.value}`"
              :name="item.checkbox_id"
              v-model="data[key][radio.value]"
              type="checkbox"
            >
            <label
              :for="`${item.checkbox_id}-${radio.value}`"
            >{{ radio.label }}</label>
          </div>
        </div>
      </div>
      <div
        v-else-if="item.type === 'single-checkbox'"
        class="input_container radio single-checkbox"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <div class="radio-container checkbox">
          <div
            class="radio-item"
            v-for="radio in item.options"
            :key="radio.value"
          >
            <input
              :id="`${item.checkbox_id}-${radio.value}`"
              :value="radio.id"
              :name="item.checkbox_id"
              v-model="data[key]"
              type="checkbox"
            >
            <label
              :for="`${item.checkbox_id}-${radio.value}`"
            >{{ radio.label }}</label>
          </div>
        </div>
      </div>
      <div
        v-else-if="item.type === 'dropdown'"
        class="input_container"
      >
        <label v-if="item.label">
          {{ item.label[$i18n.locale] }}:
          <span
            class="required"
            v-if="item.required"
          >*</span>
        </label>
        <dropdown-element
          :required="item.required"
          :disabled="item.disabled"
          :options="item.options[$i18n.locale] || item.options"
          :pattern="item.pattern"
          :name="key"
          v-model="data[key]"
        />
      </div>
      <search-dropdown
        v-else-if="item.type === 'search-dropdown'"
        :item="item"
        :name="key"
        v-model="data[key]"
      />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      'input-element': () => import('./input'),
      'dropdown-element': () => import('./dropdown'),
      'search-dropdown': () => import('./search-dropdown')
    },
    props: {
      form: [Object, Array],
      data: [Object, Array]
    }
  }
</script>

<style lang='scss' scoped src="../styles/form.scss" />
