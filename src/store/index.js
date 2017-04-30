import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './modules/app'
import * as user from './modules/user'
import * as error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { app, user, error }
})
