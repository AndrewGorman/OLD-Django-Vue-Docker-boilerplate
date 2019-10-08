import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store'

// Bootstrap javascript components
import 'bootstrap'

// FONTS
import 'font-awesome-webpack'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
