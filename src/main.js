import Vue from 'vue'

import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


Vue.use(VueResource);

Vue.http.options.root = "http://127.0.0.1:8000/api/"

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
