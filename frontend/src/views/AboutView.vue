<script>
import Counter from "@/components/Counter";
import { mapState } from "vuex";

export default {
  components: {
    Counter,
  },

  computed: {
    ...mapState(["countAbout"]),
  },
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter type="countAbout" :count="countAbout" msg="" />
  </div>
</template>
