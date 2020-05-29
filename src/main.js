import './consoleWelcome'

import Vue from 'vue'
import router from './router'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'

import './assets/scss/main.scss'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

