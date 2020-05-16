import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icont/iconfont.css'
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"


Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
