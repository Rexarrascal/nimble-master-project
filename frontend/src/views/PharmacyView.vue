<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: true,
      pharmacy: {},
      customers: [],
      drugslit: [],
    };
  },
  async mounted() {
    this.pharmacy = await this.fetchPharmacy(this.$route.params.pharmacyId);
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchPharmacy"]),
  },
};
</script>

<template>
  <div class="pharmacy">
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <h2>Pharmacy Detail</h2>
      <h3>{{ pharmacy.name }} / {{ pharmacy.location }}</h3>
      <h4>Druglist</h4>
      <div v-if="pharmacy.druglist.length">
        <ol>
          <li v-for="drug in pharmacy.druglist">{{ drug.name }}</li>
        </ol>
      </div>
      <p v-else>There is no item in {{ pharmacy.name }}'s inventory</p>
    </div>
  </div>
</template>
