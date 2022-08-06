<script>
import { RouterLink } from "vue-router";
import AdventuresImageSelector from "../../components/gallery/builder/adventures/AdventuresImageSelector.vue";

export default {
  components: {
    AdventuresImageSelector,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Adventures</page-title>
  <adventures-image-selector></adventures-image-selector>
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
