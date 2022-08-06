<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Family</page-title>
  <family-image-selector></family-image-selector>
</template>

<script>
import { RouterLink } from "vue-router";
import FamilyImageSelector from "../../components/gallery/builder/family/FamilyImageSelector.vue";

export default {
  components: {
    FamilyImageSelector,
  },
};
</script>

<style scoped>
page-title {
  left: 40%;
  font-size: 3rem;
}

li {
  list-style-type: none;
}
</style>
