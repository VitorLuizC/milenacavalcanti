<template lang="pug">
  nav.menu-container(role='navigation')
    ul.menu-items
      li.menu-item(v-for='item in items')
        router-link.link(:to='item.link') {{ item.text }}
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
