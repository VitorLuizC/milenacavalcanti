<template lang="pug">
  footer
    p {{ owner.name }} &copy; {{ owner.year }}
    p Desenvolvido por <a :href='author.link'>{{ author.name }}</a> sob a licença <a :href='license.link'>{{ license.name }}</a>.
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    computed: mapGetters({
      app: types.APP_DATA,
      author: types.AUTHOR_DATA,
      owner: types.OWNER_DATA,
      license: types.LICENSE_DATA
    })
  }
</script>
