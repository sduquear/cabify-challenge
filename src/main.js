import Vue from 'vue'
import App from './App.vue'
import { Dialog, Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'

Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
