<template>
  <div :class="Class" id="inputVue">
    <div class="Input">

      <label :for="field">{{field}}</label>
      <p id="textError">{{textErrorMessase}}</p>

    </div>

      <input type="text"
      :name="field"
      :placeholder="field"
      v-model="fieldData"
      @blur="setData"
      :id="`${type}-box`">
  </div>
</template>

<script>
export default {
  name: 'inputVue',
  props: {
    field: {
      type: String,
      default: 'Full Name'
    },
    type: {
      type: String
    },
    Class: {
      type: String,
      default: 'input-vue'
    },
    textErrorMessase: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fieldData: ''
    }
  },
  methods: {
    setData () {
      if (this.field === 'Certificates') {
        if (!sessionStorage.getItem('Cert1')) {
          sessionStorage.setItem('Cert1', this.fieldData)
        } else if (!sessionStorage.getItem('Cert2')) {
          sessionStorage.setItem('Cert2', this.fieldData)
        } else if (!sessionStorage.getItem('Cert3')) {
          sessionStorage.setItem('Cert3', this.fieldData)
        } else if (!sessionStorage.getItem('Cert4')) {
          sessionStorage.setItem('Cert4', this.fieldData)
        } else if (!sessionStorage.getItem('Cert5')) {
          sessionStorage.setItem('Cert5', this.fieldData)
        }
      } else {
        sessionStorage.setItem(`${this.field}`, this.fieldData)
      }
    },
    updateDisplay () {
      if (this.type !== 'Text') {
        const element = document.querySelector(`#${this.type}-box`)
        if (this.type === 'Mail') {
          element.type = 'email'
          element.placeholder = 'your@mail.com'
        } else if (this.type === 'Phone') {
          element.type = 'tel'
          element.placeholder = '(83) 00000 - 0000'
        }
      }
    }
  },
  updated () {
    this.updateDisplay()

    const elementCertificatesDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_1450046854"]')
    const elementSocialDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_236760537"] ')
    const elementBasicDiv = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue"] ')
    const elementBasic = document.querySelector('[ cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] ')
    const elementTitle = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979"] div')
    const element = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885"] div')
    const elementAgeBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid/responsivegrid_15929"]')
    const elementSecondBox = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067"] div')
    const elementSecondBoxTitle = document.querySelector('[cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_26449"] ')
    const elementSecondBoxInput = document.querySelector('[ cqpath="/content/vue/vue/second-tab/jcr:content/root/responsivegrid/responsivegrid_16067/responsivegrid_25683"] ')

    elementSecondBox.style.backgroundColor = '#fff'
    elementSecondBox.style.height = '67vh'
    elementSecondBox.style.display = 'flex'
    elementSecondBox.style.flexDirection = 'column'
    elementSecondBox.style.borderRadius = '20px'
    elementSecondBox.style.margin = '2% auto'
    elementSecondBox.style.width = '40%'
    elementSecondBox.style.paddingTop = '30px'
    elementSecondBoxTitle.style.margin = '30px auto'
    elementSecondBoxInput.style.marginBottom = '32vh'

    element.style.backgroundColor = '#fff'
    element.style.height = '80vh'
    element.style.borderRadius = '20px'
    element.style.display = 'flex'
    element.style.flexDirection = 'column'
    element.style.justifyContent = 'space-between'
    element.style.margin = '2% auto'
    element.style.width = '70%'

    elementTitle.style.display = 'flex'
    elementTitle.style.justifyContent = 'center'
    elementTitle.style.width = '100%'
    elementAgeBox.style.marginLeft = '14%'
    elementBasic.style.display = 'flex'
    elementBasic.style.justifyContent = 'certer'

    elementCertificatesDiv.style.width = '30%'
    elementCertificatesDiv.style.margin = '0'
    elementSocialDiv.style.width = '30%'
    elementSocialDiv.style.margin = '0'
    elementBasicDiv.style.width = '30%'
    elementBasicDiv.style.margin = '0'
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
