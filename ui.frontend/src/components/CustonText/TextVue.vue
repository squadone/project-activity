<template>

  <p :id="Id" class="text-vue" :style="{color: Color, fontSize: size +'px'}">{{text}}</p>

</template>

<script>
export default {
  name: 'TextVue',
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
      default: 'text-vue'
    }

  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
