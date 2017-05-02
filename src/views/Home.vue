<template lang="pug">
  view-container(:items='[]')
    p
      code kkk eae men
</template>

<script>
  import ViewContainer from '../components/view/ViewContainer'
  import { mapGetters } from 'vuex'
  import * as types from '../store/types.js'

  export default {
    components: { ViewContainer }
  }
</script>
