import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style/reset.css'
import './assets/style/index.css'
import App from './App.vue'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
