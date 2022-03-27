<template>
    <div :id="Id" class="button-vue">
        <i :class="ClassLeft"></i>
        <button >{{field}}</button>
        <i :class="Class"></i>
    </div>
</template>

<script>
export default {
  name: 'buttonVue',
  props: {
    field: {
      type: String,
      default: 'Button Text'
    },
    Id: {
      type: String,
      default: 'button-vue'
    },
    Class: {
      type: String,
      default: ''
    },
    ClassLeft: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
