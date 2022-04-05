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
    const elementSUccessBox = document.querySelector('[cqpath="/content/vue/vue/succes-tab/jcr:content/root/responsivegrid/responsivegrid_16067"] div')

    if (elementSUccessBox) {
      elementSUccessBox.style.backgroundColor = '#fff'
      elementSUccessBox.style.borderRadius = '20px'
      elementSUccessBox.style.marginTop = '2% '
    }
  }
}

</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
