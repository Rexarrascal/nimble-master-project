<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      pharmacies: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.pharmacies = await this.fetchPharmacies();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchPharmacies"]),
  },
};
</script>

<template>
  <div class="home">
    <h1>Pharmacies</h1>
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <p>There are {{ pharmacies.length }} Pharmacies waiting...</p>
      <ol>
        <li v-for="pharmacy in pharmacies" :key="pharmacy">
          <a :href="`/pharmacies/${pharmacy._id}`">{{ pharmacy.name }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>
