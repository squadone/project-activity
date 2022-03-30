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
      const age = localStorage.getItem('age')
      const ageBox = document.querySelector('#age-box')
      if (ageBox) {
        ageBox.innerHTML = age
      }
    }

  },

  updated () {
    setInterval(this.setAge, 1000)
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

@import "./index.scss";
</style>
