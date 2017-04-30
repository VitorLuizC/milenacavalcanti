<template lang="pug">
  router-view(v-if='isAuthLoaded')
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '../store/types'
  import { authentication } from '../application'

  export default {
    data() {
      return {
        isAuthLoaded: false
      }
    },
    methods: {
      ...mapActions({
        showError: types.SHOW_ERROR,
        updateUser: types.USER_UPDATE
      }),
      authenticate(user) {
        const isLoginRoute = (this.$route.path === '/admin/login')

        if (!user && !isLoginRoute) {
          this.isAuthLoaded = true
          this.showError('Sem permissão para acessar essa área do site.')
          this.$router.go('/admin/login')
          return
        }

        if (user)
          this.updateUser(user)
        this.isAuthLoaded = true
      }
    },
    created() {
      authentication.onAuthStateChanged(this.authenticate)
    }
  }
</script>
