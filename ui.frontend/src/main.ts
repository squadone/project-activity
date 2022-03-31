import './map-components'
import { AuthoringUtils, ModelManager } from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import { Constants } from '@mavice/aem-vue-editable-components'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      router: new VueRouter({
        mode: 'history',
        routes: [
          {

            path: '/content/vue/vue/first-tab.html?wcmmode=disabled',
            name: 'First-Tab'

          },
          {
            path: '/content/vue/vue/second-tab.html?wcmmode=disabled',
            name: 'Second-Tab'

          },
          {
            path: '/content/vue/vue/trird-tab.html?wcmmode=disabled',
            name: 'Third-Tab'

          },
          {
            path: '/content/vue/vue/succes-tab.html?wcmmode=disabled',
            name: 'Success-Tab'
          }

        ]
      }),
      render (createElement: Function) {
        return createElement(App, {
          props: {
            cqChildren: pageModel[Constants.CHILDREN_PROP],
            cqItems: pageModel[Constants.ITEMS_PROP],
            cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
            cqPath: pageModel[Constants.PATH_PROP],
            isInEditor: AuthoringUtils.isInEditor(),
            locationPathname: window.location.pathname,
            injectPropsOnInit: true
          }
        })
      }
    }).$mount('#spa-root')
  })
})
