import Vue from 'vue'
import VueRouter from 'vue-router'

import  Home from '@/page/home/Home'
import ShoppingCart from '@/page/shoppingcart/ShoppingCart'
import Order from  '@/page/order/Order'
import MyClothes from '@/page/myclothes/MyClothes'
import AboutHome from '@/page/about/AboutHome'
import Login from  '@/page/login/Login'
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/cart',
    component:ShoppingCart
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/clothes',
    component:MyClothes
  },
  {
    path:'/about',
    component:AboutHome
  },
  {
    path:'/login',
    component:Login
  }
  ]

var router =  new VueRouter({
  routes
})

export default router;

