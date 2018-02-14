import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from "./router/index.js"


new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})
