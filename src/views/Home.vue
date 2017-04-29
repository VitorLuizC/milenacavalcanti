<template lang="pug">
  #application
    header
      figure
        img(src='', :src='app.logo', :alt='app.title', :title='app.title')
      h1 {{ app.title }}
    main
    footer
      p {{ owner.name }} &copy; {{ owner.year }}
      p Desenvolvido por <a :href='author.link'>{{ author.name }}</a> sob a licença <a :href='license.link'>{{ license.name }}</a>.
</template>

<script>
  import { mapGetters } from 'vuex'
  import { APP_DATA, AUTHOR_DATA, OWNER_DATA, LICENSE_DATA } from '../store/types.js'

  export default {
    computed: mapGetters({
      app: APP_DATA,
      author: AUTHOR_DATA,
      owner: OWNER_DATA,
      license: LICENSE_DATA
    })
  }
</script>
