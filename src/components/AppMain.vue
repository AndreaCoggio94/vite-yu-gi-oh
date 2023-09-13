<script>
import AppCards from "./AppCards.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      filterData: "Choose an archetype",
    };
  },
  components: {
    AppCards,
  },
  created() {},
  methods: {
    filterSearch(event) {
      this.search = this.filter + event.target.value;
    },
  },
};
</script>

<!-- @change="filterSearch($event)" -->
<template>
  <div class="container">
    <div class="input-group">
      <select class="custom-select" id="select-type" v-model="filterData">
        <option v-for="card in store.archetypes" :value="card.archetype_name">
          {{ card.archetype_name }}
        </option>
        <option value="Toon">Toon</option>
        <option value="War Rock">War Rock</option>
      </select>
    </div>

    <div class="card">
      <div class="card-counter">Found this amount {{ store.cards.length }}</div>

      <div class="card-container row-cols-2 row-cols-md-3 row-cols-lg-4">
        <AppCards
          v-for="card in store.cards"
          :key="card.id"
          :archetype="card.archetype"
          :image="card.image"
          :name="card.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  margin: 2rem auto;
  background-color: white;

  .card {
    margin: 1rem 0;

    .active {
      display: block;
      background-color: red;
    }

    .hidden {
      display: none;
    }
    .card-counter {
      color: white;
      background-color: rgb(28, 26, 26);
      text-align: center;
      padding: 0.25rem;
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      //   justify-content: space-around;
    }
  }
}
</style>
