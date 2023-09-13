<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    filterArchetype() {
      this.store.choosenFilter = store.filterData;
      const newLink =
        this.store.searchCardsLink +
        this.store.archetypesFilter +
        this.store.choosenFilter;

      this.fetchCards(newLink);
    },
    fetchCards(endpoint) {
      axios.get(endpoint).then((response) => {
        const cardsData = response.data.data.map((card) => {
          const { id, archetype, name, card_images } = card;
          return { id, archetype, name, image: card_images[0].image_url };
        });

        store.cards = cardsData;
      });
    },
    fetchArchetypes(endpoint) {
      axios.get(endpoint).then((response) => {
        console.log(response.data);
        const archetypesData = response.data;

        store.archetypes = archetypesData;
      });
    },
  },
  created() {
    this.fetchCards(store.startCardsLink);
    this.fetchArchetypes(store.archetypesLink);
  },
};
</script>

<template>
  <div class="body">
    <AppHeader />
    <AppMain @change="filterArchetype" />
  </div>
</template>

<style lang="scss">
.body {
  background-color: orange;
}
</style>
