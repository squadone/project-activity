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
  },
  updated () {
    const elementThirdBox = document.querySelector('[cqpath="/content/vue/vue/trird-tab/jcr:content/root/responsivegrid/responsivegrid_25683"] div')
    elementThirdBox.style.backgroundColor = '#fff'
    elementThirdBox.style.height = '76vh'
    elementThirdBox.style.display = 'flex'
    elementThirdBox.style.flexDirection = 'column'
    elementThirdBox.style.borderRadius = '20px'
    elementThirdBox.style.margin = '2% auto'
    elementThirdBox.style.width = '70%'
    elementThirdBox.style.justifyContent = 'space-between'
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
