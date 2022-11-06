<script>
import { mapActions } from "vuex";
export default {
  name: "DrugView",
  data() {
    return {
      isLoading: true,
      drug: {},
      sellers: [],
    };
  },
  async mounted() {
    this.drug = await this.fetchDrug(this.$route.params.drugId);
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchDrug"]),
  },
};
</script>

<template>
  <div class="pharmacy">
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <h3>{{ drug.name }}</h3>
      <div v-if="drug.sellers.length">
        <h4>Seller List</h4>
        <ol>
          <li v-for="pharmacy in drug.sellers" :key="pharmacy">
            {{ pharmacy.name }}.
          </li>
        </ol>
      </div>
      <p v-else>There is not a stock in the pharmacies.</p>
    </div>
  </div>
</template>
