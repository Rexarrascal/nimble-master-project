<script>
import { mapActions } from 'vuex'

export default {
  name: 'PharmaciesView',
  data () {
    return {
      pharmacies: [],
      isLoading: true
    }
  },
  async mounted () {
    this.pharmacies = await this.fetchPharmacies()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchPharmacies'])
  }
}
</script>

<template lang="pug">
.home
  h1 Pharmacies
  p(v-if="isLoading") Please wait...
  div(v-else)
    p There are {{ pharmacies.length }} Pharmacies waiting...

    ol
      li(v-for="pharmacy in pharmacies")
        a(:href="`/pharmacies/${pharmacy._id}`") {{ pharmacy.name }}
</template>
