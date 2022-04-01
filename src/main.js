import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/reset.css'
import './assets/index.css'
import App from './App.vue'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
