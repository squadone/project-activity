<template>
  <div class="select-vue">
      <label :for="label">{{label}}</label>

        <select :name="label" :id="`${label}-id`" @mouseleave="calcAge" >
          <option v-if="label=='Certificate'" value="default">Certificate</option>
        </select>
  </div>
</template>

<script>
export default {
  name: 'selectVue',
  props: {
    label: {
      type: String,
      default: 'Time Period'
    }
  },
  methods: {
    setOptions () {
      if (this.label === 'Day') {
        const dayBox = document.querySelector(`#${this.label}-id`)
        for (let days = 1; days < 32; days++) {
          const element = document.createElement('option')
          element.value = days
          if (days < 10) {
            days = '0' + days
          }
          element.innerText = days
          dayBox.appendChild(element)
        }
      } else if (this.label === 'Month') {
        const monthBox = document.querySelector(`#${this.label}-id`)
        for (let months = 1; months < 13; months++) {
          const element = document.createElement('option')
          element.value = months
          if (months < 10) {
            months = '0' + months
          }
          element.innerText = months
          monthBox.appendChild(element)
        }
      } else if (this.label === 'Year') {
        const yearBox = document.querySelector(`#${this.label}-id`)
        for (let years = 1980; years < 2023; years++) {
          const element = document.createElement('option')
          element.value = years
          element.innerText = years
          yearBox.appendChild(element)
        }
      }
    },
    setCertif () {
      const certBox = document.querySelector(`#${this.label}-id`)
      if (sessionStorage.getItem('Cert1') && !document.querySelector('#Cert1')) {
        const cert1 = document.createElement('option')
        cert1.value = 'Cert1'
        cert1.id = 'Cert1'
        cert1.innerText = sessionStorage.getItem('Cert1')
        certBox.appendChild(cert1)
      } if (sessionStorage.getItem('Cert2') && !document.querySelector('#Cert2')) {
        const cert2 = document.createElement('option')
        cert2.value = 'Cert2'
        cert2.id = 'Cert2'
        cert2.innerText = sessionStorage.getItem('Cert2')
        certBox.appendChild(cert2)
      } if (sessionStorage.getItem('Cert3') && !document.querySelector('#Cert3')) {
        const cert3 = document.createElement('option')
        cert3.value = 'Cert3'
        cert3.id = 'Cert3'
        cert3.innerText = sessionStorage.getItem('Cert3')
        certBox.appendChild(cert3)
      } if (sessionStorage.getItem('Cert4') && !document.querySelector('#Cert4')) {
        const cert4 = document.createElement('option')
        cert4.value = 'Cert4'
        cert4.id = 'Cert4'
        cert4.innerText = sessionStorage.getItem('Cert4')
        certBox.appendChild(cert4)
      } if (sessionStorage.getItem('Cert5') && !document.querySelector('#Cert5')) {
        const cert5 = document.createElement('option')
        cert5.value = 'Cert5'
        cert5.id = 'Cert5'
        cert5.innerText = sessionStorage.getItem('Cert5')
        certBox.appendChild(cert5)
      }
    },
    delCertif () {
      const certBox = document.querySelector(`#${this.label}-id`)
      if (certBox.options[certBox.selectedIndex].value !== 'default') {
        const cert = certBox.options[certBox.selectedIndex].value
        sessionStorage.removeItem(`${cert}`)
        certBox.removeChild(document.querySelector(`#${cert}`))
      }
    },
    calcAge () {
      const date = new Date()
      const year = date.getFullYear()
      const day = date.getDate()
      const month = date.getMonth()

      const yearBox = document.querySelector('#Year-id')
      const monthBox = document.querySelector('#Month-id')
      const dayBox = document.querySelector('#Day-id')

      let age = 18
      if (monthBox.options[monthBox.selectedIndex].value > month) {
        age = year - yearBox.options[yearBox.selectedIndex].value - 1
      } else if (monthBox.options[monthBox.selectedIndex].value < month) {
        age = year - yearBox.options[yearBox.selectedIndex].value
      } else {
        if (dayBox.options[dayBox.selectedIndex].value > day) {
          age = year - yearBox.options[yearBox.selectedIndex].value - 1
        } else {
          age = year - yearBox.options[yearBox.selectedIndex].value
        }
      }
      sessionStorage.setItem('age', age)
    }
  },
  updated () {
    this.setOptions()
    if (this.label === 'Certificate') {
      document.querySelector('[for="Certificate"]').style.display = 'none'
      setInterval(this.setCertif, 1000)
      setInterval(this.delCertif, 1000)
    } else {
      this.calcAge()
    }

    const socialBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_236760537"] ')
    const certificatesBox = document.querySelector('[cqpath="/content/vue/vue/first-tab/jcr:content/root/responsivegrid/responsivegrid_20885/responsivegrid_26449/responsivegrid_26449_963665979/text_vue_1450046854"] ')

    socialBox.style.width = '30%'
    socialBox.style.margin = '0 '

    certificatesBox.style.width = '30%'
    certificatesBox.style.margin = '0 '
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
