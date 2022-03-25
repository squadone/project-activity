<template>
  <div class="input-vue">
      <label :for="field">{{field}}</label>
      <input type="text"
      :name="field"
      :placeholder="field"
      v-model="fieldData"
      @blur="setData"
      :id="`${type}-box`">
  </div>
</template>

<script>
export default {
  name: 'inputVue',
  props: {
    field: {
      type: String,
      default: 'Full Name'
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      fieldData: ''
    }
  },
  methods: {
    setData () {
      localStorage.setItem(`${this.field}`, this.fieldData)
    },
    updateDisplay () {
      if (this.type !== 'Text') {
        const element = document.querySelector(`#${this.type}-box`)
        if (this.type === 'Mail') {
          element.type = 'email'
          element.placeholder = 'your@mail.com'
        } else if (this.type === 'Phone') {
          element.type = 'tel'
          element.placeholder = '(83)00000-000'
        }
      }
    }
  },
  updated () {
    this.updateDisplay()
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
