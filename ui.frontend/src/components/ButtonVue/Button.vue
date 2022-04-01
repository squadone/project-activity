<template>
    <div :id="Id" class="button-vue">
        <i :class="ClassLeft"></i>

        <button :id="ButtonId" type="button" @click="next">{{field}}</button>
        <i :class="Class"></i>
    </div>
</template>

<script>
export default {
  name: 'buttonVue',
  props: {
    field: {
      type: String,
      default: 'Button Text'
    },
    Id: {
      type: String,
      default: 'button-vue'
    },
    Class: {
      type: String,
      default: ''
    },
    ClassLeft: {
      type: String,
      default: ''
    },
    ButtonId: {
      type: String,
      default: ''
    }
  },

  methods: {

    next () {
      if (this.ButtonId === 'firstPage') {
        if (sessionStorage.getItem('Full Name') && sessionStorage.getItem('Email *') && document.querySelector('#checkboxVueJs').checked) {
          this.$router.push({ name: 'Second-Tab' })
          location.reload()
        } else {
          if (!sessionStorage.getItem('Full Name')) {
            document.querySelector('#nameErro').style.visibility = 'visible'
          }
          if (!sessionStorage.getItem('Email *')) {
            document.querySelector('#emailError').style.visibility = 'visible'
          }
          if (!document.querySelector('#checkboxVueJs').checked) {
            document.querySelector('#messageErro').style.visibility = 'visible'
          }
        }
      } else {
        if (this.ButtonId === 'secondPage' && sessionStorage.getItem('Github *')) {
          this.$router.push({ name: 'Third-Tab' })
          location.reload()
        } else if (!sessionStorage.getItem('Github *')) {
          document.querySelector('#gitError').style.visibility = 'visible'
        } else if (this.ButtonId === 'ThirdTab') {
          this.$router.push({ name: 'Success-Tab' })
          location.reload()
        } else if (this.ButtonId === 'returnPage') {
          this.$router.push({ name: 'First-Tab' })
          location.reload()
        }
      }
    }
  },

  updated () {
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
  @import './index.scss';
</style>
