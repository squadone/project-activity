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
          } else {
            document.querySelector('#nameErro').style.visibility = 'hidden'
          }
          if (!sessionStorage.getItem('Email *')) {
            document.querySelector('#emailError').style.visibility = 'visible'
          } else {
            document.querySelector('#emailError').style.visibility = 'hidden'
          }
          if (!document.querySelector('#checkboxVueJs').checked) {
            document.querySelector('#messageErro').style.visibility = 'visible'
          } else {
            document.querySelector('#messageErro').style.visibility = 'hidden'
          }
        }
      } else if (this.ButtonId === 'secondPage') {
        if (sessionStorage.getItem('Github *')) {
          this.$router.push({ name: 'Third-Tab' })
          location.reload()
        } else { document.querySelector('#gitError').style.visibility = 'visible' }
      }
      if (this.ButtonId === 'ThirdTab') {
        if (sessionStorage.getItem('Team Name *') && sessionStorage.getItem('Institution *') && sessionStorage.getItem('Graduation *')) {
          this.$router.push({ name: 'Success-Tab' })
          location.reload()
        } else {
          if (!sessionStorage.getItem('Team Name *')) {
            document.querySelector('#teamNameError').style.visibility = 'visible'
          } else {
            document.querySelector('#teamNameError').style.visibility = 'hidden'
          }
          if (!sessionStorage.getItem('Institution *')) {
            document.querySelector('#institutinError').style.visibility = 'visible'
          } else {
            document.querySelector('#institutinError').style.visibility = 'hidden'
          }
          if (!sessionStorage.getItem('Graduation *')) {
            document.querySelector('#graduationError').style.visibility = 'visible'
          } else {
            document.querySelector('#graduationError').style.visibility = 'hidden'
          }
        }
      }
      if (this.ButtonId === 'returnPage') {
        this.$router.push({ name: 'First-Tab' })
        sessionStorage.clear()
        location.reload()
      }

      if (this.ButtonId === 'third') {
        const containerBox = document.querySelector('[name="Certificates"]')

        if (sessionStorage.getItem('Cert1') && sessionStorage.getItem('Cert2') && sessionStorage.getItem('Cert3') && sessionStorage.getItem('Cert4') && sessionStorage.getItem('Cert5')) {
          document.querySelector('#textNotMore').style.display = 'flex'
        } else {
          document.querySelector('#textNotMore').style.display = 'none'
        }

        if (containerBox.value) {
          document.querySelector('#moreButton').style.display = 'none'
        } else {
          document.querySelector('#moreButton').style.display = 'flex'
        }
        containerBox.value = null
      }
    }
  },

  updated () {
    const elementThirdBox = document.querySelector('[cqpath="/content/vue/vue/trird-tab/jcr:content/root/responsivegrid/responsivegrid_25683"] div')
    elementThirdBox.style.cssText = 'background-color: #fff; border-radius: 20px; display: flex; justify-content: space-between ;  flex-direction: column; margin-top: 2%; '
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
