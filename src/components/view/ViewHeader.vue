<template lang="pug">
  header
    h1 {{ app.title }}
    figure(slot='header')
      img(src='', :src='app.logo', :alt='app.title', :title='app.title')
    view-menu(:items='menuItems')
    slot
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'
  import ViewMenu from './ViewMenu'

  export default {
    computed: mapGetters({ app: types.APP_DATA }),
    components: { ViewMenu },
    props: {
      menuItems: {
        type: Array,
        required: true
      }
    }
  }
</script>
