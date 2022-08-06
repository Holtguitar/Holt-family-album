<script>
import { RouterLink } from "vue-router";
import WeddingImageSelector from "../../components/gallery/builder/wedding/WeddingImageSelector.vue";

export default {
  components: {
    WeddingImageSelector,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Wedding</page-title>
  <wedding-image-selector></wedding-image-selector>
</template>

<style scoped>
page-title {
  left: 40%;
  font-size: 3rem;
}

li {
  list-style-type: none;
}
</style>
