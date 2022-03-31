<template>
  <header>
    <h1>OLÁ, SOU UM HEADER</h1>
    <p>SOU O TEXTO DO HEADER</p>
  </header>
</template>

<script>
// Imports

export default {
  name: 'CustomHeader',

  updated () {
    const certificatesBox2Page = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449"] div ')
    const certificatesBox2PageDiv1 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue"] ')
    const certificatesBox2PageDiv2 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue_236760537"] ')
    const certificatesBox2PageDiv3 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue_1450046854"] ')

    certificatesBox2Page.style.display = 'flex'
    certificatesBox2Page.style.justifyContent = 'center'

    certificatesBox2PageDiv1.style.width = '30%'
    certificatesBox2PageDiv1.style.margin = '0 '

    certificatesBox2PageDiv2.style.width = '30%'
    certificatesBox2PageDiv2.style.margin = '0 '

    certificatesBox2PageDiv3.style.width = '30%'
    certificatesBox2PageDiv3.style.margin = '0 '
  }
}

</script>

<style>
header {
  background-color: #eee;
}
h1 {
  color: red;
}
</style>
