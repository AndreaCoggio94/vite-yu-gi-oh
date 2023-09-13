<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="card-counter">Found this amount {{ store.cards.length }}</div>
</template>

<style lang="scss" scoped>
.card-counter {
  color: white;
  background-color: rgb(28, 26, 26);
  text-align: center;
  padding: 0.25rem;
}
</style>
