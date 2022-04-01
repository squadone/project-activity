<template>

  <p :id="Id" class="text-vue" :style="{fontFamily: fontFamily, color: Color, fontSize: size +'px'}">{{text}}</p>

</template>

<script>
export default {
  name: 'TextVue',
  props: {
    text: {
      type: String,
      default: '18'
    },
    size: {
      type: String,
      default: '16'
    },
    Color: {
      type: String,
      default: '#767676'
    },
    Id: {
      type: String,
      default: 'text-vue'
    },
    fontFamily: {
      type: String,
      default: 'Nunito'
    }
  },
  methods: {
    setAge () {
      const age = sessionStorage.getItem('age')
      const ageBox = document.querySelector('#age-box')
      if (ageBox) {
        ageBox.innerHTML = age
      }
    }

  },

  updated () {
    setInterval(this.setAge, 1000)
    const elementThirdBox = document.querySelector('[cqpath="/content/vue/vue/trird-tab/jcr:content/root/responsivegrid/responsivegrid_25683"] div')
    const certificatesBox2Page = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449"] div ')
    const certificatesBox2PageDiv1 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue"] ')
    const certificatesBox2PageDiv2 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue_236760537"] ')
    const certificatesBox2PageDiv3 = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449/responsivegrid_26449/text_vue_1450046854"] ')

    elementThirdBox.style.backgroundColor = '#fff'
    elementThirdBox.style.height = '70vh'
    elementThirdBox.style.display = 'flex'
    elementThirdBox.style.flexDirection = 'column'
    elementThirdBox.style.borderRadius = '20px'
    elementThirdBox.style.margin = '2% auto'
    elementThirdBox.style.width = '50%'
    elementThirdBox.style.justifyContent = 'space-between'

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
<style lang="scss" scoped>

@import "./index.scss";
</style>
