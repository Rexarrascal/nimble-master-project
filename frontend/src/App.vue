<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  },

  created() {
    this.$store.dispatch('initAuth')
  }
}
</script>

<template>
<div>
  <Header />
    <div class="container">
      <router-view />
    </div>
</div>

</template>

<style>

</style>
