<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <div class="body">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
.body {
  background-color: orange;
}
</style>
