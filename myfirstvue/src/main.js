import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from "./router/index.js"
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Select } from 'element-ui'
//
// Vue.use(Button);
// Vue.use(Select);


new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})
