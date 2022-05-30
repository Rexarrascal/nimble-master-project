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

<template lang="pug">
.home
  h1 Drugs
  p(v-if="isLoading") Please wait...
  div(v-else)
    p There are {{drugs.length}} drugs waiting...

    ol
      li(v-for="drug in drugs")
        a(:href="`/drugs/${drug._id}`") {{ drug.name }}
</template>
