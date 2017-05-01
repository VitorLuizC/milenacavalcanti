<template lang="pug">
  div
    view-header(:menuItems='menuItems')
      slot(name='header')
    view-content
      slot
    view-footer
</template>

<script>
  import ViewContent from './ViewContent'
  import ViewFooter from './ViewFooter'
  import ViewHeader from './ViewHeader'

  export default {
    components: { ViewContent, ViewFooter, ViewHeader },
    props: {
      menuItems: {
        type: Array,
        required: true
      }
    }
  }
</script>
