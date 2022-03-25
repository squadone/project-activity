<template>
    <div class="button-vue">
        <button>{{field}}</button>
    </div>
</template>

<script>
export default {
  name: 'buttonVue',
  props: {
    field: {
      type: String,
      default: 'Button Text'
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
