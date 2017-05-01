<template lang="pug">
  form(@submit.prevent='signIn')
    fieldset
      legend Login
      label E-Mail
      input(v-model='email', type='text')
      label Senha
      input(v-model='password', type='password')
      button(type='submit') Entrar
</template>

<script>
  import * as types from '../store/types'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signIn() {
        await this.$store.dispatch(types.USER_SIGNIN, {
          email: this.email,
          password: this.password
        })
        this.$router.push('/admin/dashboard')
      }
    }
  }
</script>
