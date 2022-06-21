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

<template>
  <div class="about">
    <h1>This is an home page</h1>
    <Counter type="countHome" :count="countHome" msg="" />
  </div>
</template>
