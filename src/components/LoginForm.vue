<template lang="pug">
  form
    fieldset
      legend Login
      label E-Mail
      input(v-model='mail', type='text')
      label Senha
      input(v-model='pass', type='password')
      button(type='submit') Entrar
</template>

<script>

</script>
