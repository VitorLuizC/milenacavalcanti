import Vue from 'vue'
import VueRouter from 'vue-router'
import { Admin, Dashboard, Home, Login, Posts } from './views/index'
import * as types from './store/types'
import store from './store'

Vue.use(VueRouter)

let router = null
let authenticated = true

export default router = new VueRouter({
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
          alias: 'login',
          component: Login
        },
        {
          path: 'dashboard',
          component: Dashboard,
          meta: {
            authenticated
          }
        },
        {
          path: 'posts',
          component: Posts,
          meta: {
            authenticated
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('Hello!')
  let isAuthenticated = (store.getters[types.USER_DATA] !== null)
  let allowGuest = (!to.meta || !to.meta.authenticated)

  if (!allowGuest && !isAuthenticated) {
    store.dispatch(types.ERROR_SHOW, 'Sem permissão para acessar essa área do site.')
    return next('/admin/login')
  }

  return next()
})
