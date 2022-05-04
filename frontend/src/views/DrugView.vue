<script>
import { mapActions } from 'vuex'
export default {
  name: 'DrugView',
  data () {
    return {
      isLoading: true,
      drug: {},
      sellers: []
    }
  },
  async mounted () {
    this.drug = await this.fetchDrug(this.$route.params.drugId)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchDrug'])
  }
}
</script>

<template lang="pug">
.pharmacy
  p(v-if="isLoading") Please wait...
  div(v-else)
    h3 {{ drug.name }}

    div(v-if="drug.sellers.length")
      h4 Seller List
      ol
        li(v-for="pharmacy in drug.sellers")
          | {{ pharmacy.name }}.
    p(v-else) There is not a stock in the pharmacies.
</template>
