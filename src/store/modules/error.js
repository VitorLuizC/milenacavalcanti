import * as types from '../types'

export const state = {
  error: null
}

export const getters = {
  [types.ERROR_DATA](state) {
    return {
      message: state.error,
      show: !!state.error
    }
  }
}

export const mutations = {
  [types.ERROR_UPDATE](state, payload) {
    if (payload instanceof Error)
      state.error = payload.message
    else
      state.error = payload
  }
}

export const actions = {
  [types.ERROR_SHOW]({ commit }, payload) {
    commit(types.ERROR_UPDATE, payload)
  },
  [types.ERROR_HIDE]({ commit }) {
    commit(types.ERROR_UPDATE, null)
  }
}
