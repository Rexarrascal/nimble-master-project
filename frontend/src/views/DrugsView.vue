<script>
import { mapActions } from "vuex";

export default {
  name: "DrugsView",
  data() {
    return {
      drugs: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.drugs = await this.fetchDrugs();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchDrugs"]),
  },
};
</script>

<template>
  <div class="home">
    <h1>Drugs</h1>
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <p>There are {{drugs.length}} drugs waiting...</p>
      <ol>
        <li v-for="drug in drugs" :key="drug">
          <a :href="`/drugs/${drug._id}`">{{ drug.name }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>
