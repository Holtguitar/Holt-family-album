<script>
import { RouterLink } from "vue-router";

export default {
  components: {},
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Wedding</page-title>
</template>

<style scoped>
page-title {
  left: 35%;
  margin-bottom: 5rem;
}

li {
  list-style-type: none;
}
</style>
