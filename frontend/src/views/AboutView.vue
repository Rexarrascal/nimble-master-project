<script>
import Counter from "@/components/Counter";
import { mapState } from "vuex";

export default {
  name: "AboutView",
  components: {
    Counter,
  },

  computed: {
    ...mapState(["countAbout"]),
  },
};
</script>

<template lang="pug">
.about
  h1 This is an about page
  Counter(type="countAbout" :count="countAbout" msg="")
</template>
