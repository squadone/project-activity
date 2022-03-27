<template>
  <div class="select-vue">
      <label :for="label">{{label}}</label>

        <select :name="label" :id="`${label}-id`" @mouseleave="calcAge" >

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
      localStorage.setItem('age', age)
    }
  },
  updated () {
    this.setOptions()
    this.calcAge()
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
