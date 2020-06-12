import Vue from 'vue'
import App from './App.vue'
//引入自定义请求库axios
import axios from "./commom/axios"
// 挂载到vue的原型上
Vue.prototype.$axios = axios;
//a.1 引入路由配置信息
import router from "./router/index"
Vue.config.productionTip = false

new Vue({
  //a.2 配置路由信息
  router,
  render: h => h(App),
}).$mount('#app')
