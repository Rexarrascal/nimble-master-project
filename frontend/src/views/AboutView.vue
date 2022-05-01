<script>
import HelloWorld from '@/components/HelloWorld'
import { mapState } from 'vuex'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  },

  computed: {
    ...mapState(['countAbout'])
  }
}
</script>

<template lang="pug">
.about
  h1 This is an about page
  HelloWorld(type="countAbout" :count="countAbout" msg="")
</template>
