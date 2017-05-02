<template lang="pug">
  div
    view-header(:items='items')
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
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
