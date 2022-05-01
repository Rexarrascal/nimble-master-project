<script>
import { mapActions } from 'vuex'

export default {
  name: 'CustomerView',
  data () {
    return {
      isLoading: true,
      customer: {},
      pharmacies: [],
      drug: ''
    }
  },
  async mounted () {
    this.customer = await this.fetchCustomer(this.$route.params.customerId)
    this.pharmacies = await this.fetchPharmacies()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchCustomer', 'fetchPharmacies', 'orderDrug'])
  }
}
</script>

<template lang="pug">
.customer
  p(v-if="isLoading") Please wait...
  div(v-else)
    h2 Customer Detail
    h3 {{ customer.name }} / {{ customer.age }}

    h2 Order History
    div(v-if="customer.orders.length")
      ol
        li(v-for="order in customer.orders")
          | {{ customer.name }} wants to order a(an) {{ order.drug.name }} from {{ order.pharmacy.name }}
    p(v-else) No orders.
    h2 Create New Order
    h3 Pharmacies
    input(v-model="drug")
    div(v-if="pharmacies.length")
      ol
        li(v-for="pharmacy in pharmacies")
          | {{ pharmacy.name }} is ready for your order at {{ pharmacy.location }}
          button.order(@click="orderDrug({pharmacyId: pharmacy._id, customerId: customer._id, drugId: drug._id})") Order Drug
</template>
