<template>
  <div class="text-vue">
    <p>{{text}}</p>
    </div>
</template>

<script>
export default {
  name: 'TextVue',
  props: {
    text: {
      type: String,
      default: 'Full Name'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
