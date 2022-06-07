<template>
  <div>
    <div class='adb'>
      <input-element
        type='text'
        ref='input'
        :value='value'
        :placeholder="placeholder"
        @input='input'
        @focus='toggle(true)'
        @blur='toggle(false)'
        required
      />
      <div class='adb-s' v-if='opened && filteredList.length'>
        <div class='adb-i' v-for='(university, index) in filteredList'
          :key='index'
          @mousedown='$emit("select", university)'>
          {{ university.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '@components/input'
  import escapeRegExp from 'lodash.escaperegexp'

  export default {
    components: {
      'input-element': Input
    },
    props: {
      value: String,
      placeholder: Object
    },
    data: () => ({
      opened: false
    }),
    computed: {
      filteredList () {
        if (!this.value) return this.$store.state.vlearn.university.slice(0, 15)
        const exp = new RegExp(escapeRegExp(this.value), 'i')
        return this.$store.state.vlearn.university
          .filter(address => exp.test(address.name))
          .slice(0, 15)
      }
    },
    methods: {
      toggle (opened) {
        this.$emit(opened ? 'focus' : 'blur')
        this.opened = opened
        if (!this.opened) {
          this.$emit('blur', this.value)
        }
      },
      input (value) {
        this.$emit('input', value)
        this.$refs.input.$forceUpdate()
      }
    }
  }
</script>

<style lang='scss' scoped>
  .adb {
    position: relative;
  }

  .adb-s {
    position: absolute;
    top: 40px;
    right: 0;
    left: 0;
    z-index: 3;
    overflow-y: auto;
    margin-bottom: 24px;
    border: 1px solid gray;
    max-height: calc(40px * 5 + 20px);
    background-color: white;
    border-radius: 0 0 4px 4px;
  }

  .adb-i {
    overflow: hidden;
    padding: 8px 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    text-align: left;

    &:hover {
      background-color: gray;
    }
  }
</style>
