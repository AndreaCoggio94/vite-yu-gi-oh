<script>
import AppCards from "./AppCards.vue";
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
      search: "",
      filter: "&archetype=",
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
    filterSearch(event) {
      this.search = this.filter + event.target.value;

      this.fetchCards();
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="input-group">
      <select
        class="custom-select"
        @change="filterSearch($event)"
        id="select-type"
      >
        <option selected>Choose a type</option>
        <option value="Alien">Alien</option>
        <option value="Toon">Toon</option>
        <option value="War Rock">War Rock</option>
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
  padding: 1rem;
  margin: 2rem auto;
  background-color: white;

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
