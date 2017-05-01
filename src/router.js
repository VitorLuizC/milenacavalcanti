import Vue from 'vue'
import VueRouter from 'vue-router'
import { Admin, Dashboard, Home, Login, Posts } from './views/index'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      component: Home
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          alias: '/login',
          component: Login
        },
        {
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/posts',
          component: Posts
        }
      ]
    }
  ]
})
