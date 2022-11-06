<script>
import { mapActions } from "vuex";

export default {
  name: "CustomersView",
  data() {
    return {
      customers: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.customers = await this.fetchCustomers();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchCustomers"]),
  },
};
</script>

<template>
  <div class="home">
    <h1>Customers</h1>
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <p>There are {{ customers.length }} customers waiting...</p>
      <ol>
        <li v-for="customer in customers" :key="customer">
          <a :href="`/customers/${customer._id}`">{{ customer.name }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>
