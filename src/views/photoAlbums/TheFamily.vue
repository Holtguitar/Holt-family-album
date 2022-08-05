<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Family</page-title>
  <image-selector></image-selector>
</template>

<script>
import { RouterLink } from "vue-router";
import ImageSelector from "../../components/gallery/builder/ImageSelector.vue";

export default {
  components: {
    ImageSelector,
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
