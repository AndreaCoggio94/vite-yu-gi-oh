<script>
export default {
  data() {
    return {};
  },
  props: {
    archetype: String,
    image: String,
    name: String,
  },
};
</script>

<template>
  <div class="card col">
    <img class="card-img-top" :src="image" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: orange;
  img {
    max-width: 100%;
  }
}
</style>
