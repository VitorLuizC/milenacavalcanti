import * as types from '../types'
import { authentication } from '../../application'

export const state = {
  user: null
}

export const getters = {
  [types.USER_AUTH](state) {
    return state.user !== null
  },
  [types.USER_DATA](state) {
    return state.user
  }
}

export const mutations = {
  [types.USER_UPDATE](state, payload) {
    state.user = { ...payload }
  }
}

export const actions = {
  [types.USER_UPDATE]({ commit }, payload) {
    commit(types.USER_UPDATE, payload)
  },
  async [types.USER_SIGNIN]({ commit, dispatch }, payload) {
    let user = null
    let { email, password } = payload

    try {
      user = await authentication.signInWithEmailAndPassword(email, password)
      dispatch(types.USER_UPDATE, user)
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }
  },
  async [types.USER_SIGNOUT]({ commit, dispatch }) {
    try {
      await authentication.signOut()
      dispatch(types.USER_UPDATE, null)
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }
  }
}
