<script>
import AppCards from "./AppCards.vue";
import { store } from "../data/store";
import BaseSelect from "./BaseSelect.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCards,
    BaseSelect,
  },
  created() {},
  methods: {
    newFilter(value) {
      this.$emit("change", value);
    },
    fetchArchetypes(endpoint) {
      axios.get(endpoint).then((response) => {
        console.log(response.data);
        const archetypesData = response.data;

        store.archetypes = archetypesData;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <BaseSelect @change="newFilter" />

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
