import Vue from 'vue'
import App from './App.vue'
import './styles/bootstrap.css'

Vue.config.productionTip = false

Vue.filter('formatPrice', input => parseFloat(input).toFixed(2))

new Vue({
  render: h => h(App),
}).$mount('#app')
