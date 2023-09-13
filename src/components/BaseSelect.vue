<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      filterData: "",
    };
  },
  methods: {},
};
</script>
<!-- @change="$emit('cambio')" -->

<template>
  <div class="input-group">
    <select
      class="custom-select"
      id="select-type"
      placeholder="this"
      v-model="filterData"
    >
      <option disabled value="">Choose an archetype</option>
      <option v-for="card in store.archetypes" :value="card.archetype_name">
        {{ card.archetype_name }}
      </option>
    </select>
    <div class="btn btn-primary" @click="cambio">Filter</div>
  </div>
</template>

<style lang="scss" scoped></style>
