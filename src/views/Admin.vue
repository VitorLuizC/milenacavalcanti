<template lang="pug">
  view-container(:menuItems='items')
    router-view(v-if='isAuthLoaded')
    button(v-if='isAuth', @click.prevent='signOut', slot='header', type='button') Sair
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'
  import { authentication } from '../application'
  import ViewContainer from '../components/view/ViewContainer'

  export default {
    components: { ViewContainer },
    computed: mapGetters({ user: types.USER_DATA, isAuth: types.USER_AUTH }),
    data() {
      return {
        isAuthLoaded: false,
        items: [
          {
            link: '/admin/dashboard',
            text: 'Dashboard'
          },
          {
            link: '/admin/posts',
            text: 'Fotos e Publicações'
          },
          {
            link: '/',
            text: 'Voltar para a Página'
          }
        ]
      }
    },
    methods: {
      authenticate(user) {
        const isLoginRoute = (['/admin', '/admin/login'].includes(this.$route.path))

        if (!user && !isLoginRoute) {
          this.isAuthLoaded = true
          this.$store.dispatch(types.ERROR_SHOW, 'Sem permissão para acessar essa área do site.')
          this.$router.go('/admin/login')
          return
        }

        if (user)
          this.$store.dispatch(types.USER_UPDATE, user)
        this.isAuthLoaded = true
      },
      async signOut() {
        await this.$store.dispatch(USER_SIGNOUT)
        this.$router.push('/')
      }
    },
    created() {
      authentication.onAuthStateChanged(this.authenticate)
    }
  }
</script>
