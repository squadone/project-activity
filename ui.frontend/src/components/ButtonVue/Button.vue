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
      if (document.querySelector('#checkboxVueJs')) {
        if (document.querySelector('#checkboxVueJs').checked) {
          this.$router.push({ name: 'Second-Tab' })
          location.reload()
        } else {
          document.querySelector('#birthdayMessage').style.visibility = 'visible'
          document.querySelector('#messageErro').style.visibility = 'visible'
          document.querySelector('#textError').style.visibility = 'visible'
        }
      } else {
        if (this.ButtonId === 'secondPage') {
          this.$router.push({ name: 'Third-Tab' })
        } else if (this.ButtonId === 'ThirdTab') {
          this.$router.push({ name: 'Success-Tab' })
        } else if (this.ButtonId === 'returnPage') {
          this.$router.push({ name: 'First-Tab' })
        }
        location.reload()
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
