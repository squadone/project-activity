<template>

  <p :id="Id" class="text-vue" :style="{color: Color, fontSize: size +'px'}">{{text}}</p>

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
    }

  },
  methods: {
    setAge () {
      const age = localStorage.getItem('age')
      const ageBox = document.querySelector('#age-box')
      ageBox.innerHTML = age
    }
  },
  updated () {
    setInterval(this.setAge, 1000)
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
