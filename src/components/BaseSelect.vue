<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      filterData: "Choose an archetype",
    };
  },
};
</script>

<template>
  <div class="input-group">
    <select class="custom-select" id="select-type" v-model="filterData">
      <option v-for="card in store.archetypes" :value="card.archetype_name">
        {{ card.archetype_name }}
      </option>
      <option value="Toon">Toon</option>
      <option value="War Rock">War Rock</option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
