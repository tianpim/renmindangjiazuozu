import Vue from 'vue'
import App from './App.vue'

import router from "./router/router"

import axios from './common/common'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
import store from './vuex/store'
Vue.prototype.$axios = axios

Vue.use(VueAxios);

Vue.config.productionTip = false;
axios.defaults.baseURL= "http://tt.linweiqin.com/api/tt";

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App),
})
