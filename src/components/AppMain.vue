<script>
import AppCards from "./AppCards.vue";
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
      search: "&archetype=alien",
    };
  },
  components: {
    AppCards,
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      axios
        .get(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0" +
            this.search
        )
        .then((response) => {
          this.cards = response.data.data;
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="input-group">
      <select class="custom-select" id="select-type">
        <option selected>Choose a type</option>
        <option value="&archetype=alien">One</option>
        <option value="&archetype=elemental">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="card">
      <div class="card-counter">Found this amount {{ cards.length }}</div>
      <div class="card-container row-cols-2 row-cols-md-3 row-cols-lg-4">
        <AppCards
          v-for="card in cards"
          :key="card.id"
          :archetype="card.archetype"
          :image="card.card_images[0].image_url"
          :name="card.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem 0;

  .card {
    margin: 1rem 0;
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
