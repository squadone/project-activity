<template>
  <div class="checkbox-vue" id="ckeckbox">
    <input id="checkboxVueJs" type="checkbox" :name="field" />
    <label :for="field">{{ field }}</label>
    <p id="messageErro">{{textErrorMessase}}</p>
  </div>
</template>

<script>
export default {
  name: 'checkboxVue',
  props: {
    field: {
      type: String,
      default: 'Full Name'
    },
    textErrorMessase: {
      type: String,
      default: ''
    }
  },
  updated () {
    const elementBasicDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue"] ')
    const elementBasic = document.querySelector('[ cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] ')
    const elementTitle = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] div')
    const element = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885"] div')
    const elementAgeBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid/responsivegrid_15929"]')

    element.style.backgroundColor = '#fff'
    element.style.height = '70vh'
    element.style.borderRadius = '20px'
    element.style.display = 'flex'
    element.style.flexDirection = 'column'
    element.style.justifyContent = 'space-between'
    element.style.margin = '2% auto'
    element.style.width = '40%'

    elementTitle.style.display = 'flex'
    elementTitle.style.justifyContent = 'center'
    elementTitle.style.width = '100%'
    elementAgeBox.style.marginLeft = '14%'
    elementBasic.style.display = 'flex'
    elementBasic.style.justifyContent = 'certer'

    elementBasicDiv.style.width = '30%'
    elementBasicDiv.style.margin = '0'
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
