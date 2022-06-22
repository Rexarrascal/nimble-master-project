<script>
import { mapActions } from "vuex";

export default {
  name: "CustomerView",
  data() {
    return {
      isLoading: true,
      customer: {},
      orders: [],
      pharmacies: [],
      drugs: [],
    };
  },
  async mounted() {
    await this.updateCustomer();
    this.pharmacies = await this.fetchPharmacies();
    // this.drugs = await this.fetchDrugs()
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchCustomer", "fetchPharmacies", "orderDrug"]),
    async orderDrugAndUpdate({ pharmacyId, customerId, drugId }) {
      await this.orderDrug({ pharmacyId, customerId, drugId });
      this.updateCustomer();
    },
    async updateCustomer() {
      this.customer = await this.fetchCustomer(this.$route.params.customerId);
    },
  },
};
</script>

<template>
  <div class="customer">
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <h2>Customer Detail</h2>
      <h3>{{ customer.name }} / {{ customer.age }}</h3>
      <h4>Order History</h4>
      <div v-if="customer.orders.length">
        <ol>
          <li v-for="order in customer.orders" :key="order">{{ customer.name }} wants to order a(an) {{ order.drug.name }} from {{ order.pharmacy.name }}</li>
        </ol>
      </div>
      <p v-else>No orders.</p>
      <h3>Create New Order</h3>
      <h4>Pharmacies</h4>
      <div v-if="pharmacies.length">
        <ol>
          <li class="pharmacy" v-for="pharmacy in pharmacies" :key="pharmacy"><strong>{{ pharmacy.name }}</strong>
            <ul>
              <li class="drug" v-for="drug in pharmacy.druglist" :key="drug">
                {{ drug.name }}
                <button class="order" 
                        @click="orderDrugAndUpdate({
                          pharmacyId: pharmacy._id, 
                          customerId: customer._id, 
                          drugId: drug._id})">
                          +
                </button>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
button.order {
  background: #0b6dff;
  border: 0;
  padding: 5px 5px;
  margin-left: 10px;
  color: white;
  border-radius: 50%;
}
.order {
  font-size: 30%;
  text-align: center;
}

.pharmacy {
  margin-bottom: 15px;
  text-align: center;
}

.drug {
  margin-top: 10px;
}
</style>
