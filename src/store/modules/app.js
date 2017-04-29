import { APP_DATA, OWNER_DATA, AUTHOR_DATA, LICENSE_DATA } from '../types.js'

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
  [APP_DATA](state) {
    return state.app
  },
  [OWNER_DATA](state) {
    return state.app.owner
  },
  [AUTHOR_DATA](state) {
    return state.app.author
  },
  [LICENSE_DATA](state) {
    return state.app.author.license
  }
}
