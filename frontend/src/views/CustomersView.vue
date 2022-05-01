<script>
import { mapActions } from 'vuex'

export default {
  name: 'CustomersView',
  data () {
    return {
      customers: [],
      isLoading: true
    }
  },
  async mounted () {
    this.customers = await this.fetchCustomers()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchCustomers'])
  }
}
</script>

<template lang="pug">
.home
  h1 Customers
  p(v-if="isLoading") Please wait...
  div(v-else)
    p There are {{customers.length}} customers waiting...

    ol
      li(v-for="customer in customers")
        a(:href="`/customers/${customer._id}`") {{ customer.name }}
</template>
