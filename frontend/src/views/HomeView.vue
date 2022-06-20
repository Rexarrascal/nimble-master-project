<script>
import Counter from "@/components/Counter";
import { mapState } from "vuex";

export default {
  components: {
    Counter,
  },

  computed: {
    ...mapState(["countHome"]),
  },
};
</script>

<template lang="pug">
.about
  h1 This is an home page
  Counter(type="countHome" :count="countHome" msg="")
</template>
