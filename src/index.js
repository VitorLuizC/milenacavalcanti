import './view'
import Vue from 'vue'
import Main from './components/Main'
import router from './router'
import store from './store'

export default new Vue({
  router,
  store,
  el: '#application',
  render: append => append(Main)
})
