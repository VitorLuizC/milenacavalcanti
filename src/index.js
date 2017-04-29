import './index.pug'
import Vue from 'vue'
import Main from './components/Main.vue'

export default new Vue({
  el: '#application',
  render: append => append(Main)
})
