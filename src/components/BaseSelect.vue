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
  <div class="input-group">
    <select
      class="custom-select"
      id="select-type"
      placeholder="this"
      v-model="store.filterData"
      @change="$emit('change')"
    >
      <option disabled value="">Choose an archetype</option>
      <option v-for="card in store.archetypes" :value="card.archetype_name">
        {{ card.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
