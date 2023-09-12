<script></script>

<template>
  <div class="container">
    <div class="input-group">
      <select class="custom-select" id="select-type">
        <option selected>Choose a type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="card">
      <div>Found this amount</div>
      <div class="card-container">
        <div class="playing-card"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem 0;

  .card {
    margin: 1rem 0;
  }
}
</style>
