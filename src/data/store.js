import { reactive } from "vue";

export const store = reactive({
  startCardsLink:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  searchCardsLink: "https://db.ygoprodeck.com/api/v7/cardinfo.php?",
  archetypesLink: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  archetypesFilter: "&archetype=",
  cards: [],
  archetypes: [],
  choosenFilter: "",
});
