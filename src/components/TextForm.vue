<template lang="pug">
  form(@submit.prevent='send')
    fieldset
      legend Texto
      label Título
      input(v-model='post.title', type='text')
      label Texto
      textarea(v-model='post.text')
      button(type='submit') Enviar
</template>

<script>
  import { database } from '../application'

  export default {
    props: {
      post: {
        type: Object,
        default() {
          return {
            id: null,
            type: 'text',
            title: '',
            text: '',
            updated: null,
            created: null
          }
        }
      }
    },
    methods: {
      async send() {
        const isEditing = this.post.id !== null

        database.goOnline()

        const posts = database.ref('posts')

        if (isEditing) {
          this.post.updated = new Date().toString()
          await posts.child(this.post.id).update(this.post)
        } else {
          this.post.id = await posts.push(null).key
          this.post.created = new Date().toString()
          await posts.child(this.post.id).set(this.post)
        }
      }
    }
  }
</script>
