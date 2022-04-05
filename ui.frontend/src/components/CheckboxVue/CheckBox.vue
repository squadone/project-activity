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
    const selectContainerDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid"] div div')
    const selectContainer = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid"] div ')
    const elementBasic = document.querySelector('[ cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] ')
    const elementTitle = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] div')
    const element = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885"] div')
    const elementAgeBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid/responsivegrid_15929"]')

    selectContainer.style.cssText = 'display:flex; align-items:center; justify-content: space-around;'
    selectContainerDiv.style.cssText = 'margin:0 '

    element.style.cssText = 'background-color: #fff; border-radius: 20px; margin-top:2%; display: flex; flex-direction: column; justify-content: space-between ; '
    elementTitle.style.cssText = 'display: flex; justify-content: center; width: 100%;'
    elementBasicDiv.style.cssText = 'width: 30%; margin: 0;'
    elementBasic.style.cssText = 'display: flex; justify-content: center;'
    elementAgeBox.style.cssText = 'display: flex; justify-content: center; margin-left: 14%;'
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
