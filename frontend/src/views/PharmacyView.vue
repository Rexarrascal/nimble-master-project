<script>
import { mapActions } from "vuex";
export default {
  name: "PharmacyView",
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

<template lang="pug">
.pharmacy
  p(v-if="isLoading") Please wait...
  div(v-else)
    h2 Pharmacy Detail
    h3 {{ pharmacy.name }} / {{ pharmacy.location }}

    h4 Druglist
    div(v-if="pharmacy.druglist.length")
      ol
        li(v-for="drug in pharmacy.druglist")
          |{{ drug.name }}
    p(v-else) There is no item in {{ pharmacy.name }}'s inventory
</template>
