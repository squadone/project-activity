<template>
  <p :id="Id" class="title-vue" :style="{color: Color, fontSize: size +'px'}" >{{ text }}</p>
</template>

<script>
export default {
  name: 'TitleVue',
  props: {
    text: {
      type: String,
      default: 'Full Name'
    },
    size: {
      type: String,
      default: '16'
    },
    Color: {
      type: String,
      default: '#222'
    },
    Id: {
      type: String,
      default: 'title-vue'
    }
  },
  updated () {
    const elementCertificatesDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_1450046854"]')
    const elementSocialDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_236760537"] ')
    const elementBasicDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue"] ')
    const elementBasic = document.querySelector('[ cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] ')
    const elementTitle = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] div')
    const element = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885"] div')
    const elementAgeBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid/responsivegrid_15929"]')
    element.style.backgroundColor = '#fff'
    element.style.height = '80vh'
    element.style.borderRadius = '20px'
    element.style.display = 'flex'
    element.style.flexDirection = 'column'
    element.style.justifyContent = 'space-between'
    element.style.margin = '2% auto'
    element.style.width = '70%'

    elementTitle.style.display = 'flex'
    elementTitle.style.justifyContent = 'center'
    elementTitle.style.width = '100%'
    elementAgeBox.style.marginLeft = '14%'
    elementBasic.style.display = 'flex'
    elementBasic.style.justifyContent = 'certer'

    elementCertificatesDiv.style.width = '30%'
    elementCertificatesDiv.style.margin = '0'
    elementSocialDiv.style.width = '30%'
    elementSocialDiv.style.margin = '0'
    elementBasicDiv.style.width = '30%'
    elementBasicDiv.style.margin = '0'
  }
}

</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
