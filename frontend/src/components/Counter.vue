<script>
import { mapActions } from 'vuex'

export default {
  name: 'CounterComponent',
  props: {
    msg: String,
    type: String,
    count: Number
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <div class="counter">{{ count }}</div>
    <button class="increment" @click="increment(type)">Increment</button>
    <button class="decrement" @click="decrement(type)">Decrement</button>
  </div>
</template>

<style scoped lang="scss">
</style>
