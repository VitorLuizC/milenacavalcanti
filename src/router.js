import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Admin } from './views/index'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})
