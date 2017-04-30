import * as types from '../types.js'

export const state = {
  app: {
    title: 'Milena Cavalcanti',
    logo: '/',
    owner: {
      name: 'Milena Cavalcanti',
      year: 2017
    },
    author: {
      name: 'Vitor Cavalcanti',
      link: 'https://vitorluizc.github.io/',
      license: {
        name: 'Apache 2.0',
        link: 'https://github.com/VitorLuizC/milenacavalcanti/blob/master/LICENSE.md'
      }
    }
  },
}

export const getters = {
  [types.APP_DATA](state) {
    return state.app
  },
  [types.OWNER_DATA](state) {
    return state.app.owner
  },
  [types.AUTHOR_DATA](state) {
    return state.app.author
  },
  [types.LICENSE_DATA](state) {
    return state.app.author.license
  }
}
