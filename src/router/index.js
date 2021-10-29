import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // layout布局
  {
    path:'/layout',
    name:'layout',
    component:() => import('@/views/layout.vue')
  },
  {
    path:'/container',
    name:'container',
    component:() => import('@/views/container.vue')
  },
  {
    path:'/icon',
    name:'icon',
    component:() => import('@/views/icon.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
  
})

export default router
