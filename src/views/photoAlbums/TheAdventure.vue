<script>
import { RouterLink } from "vue-router";
import GalleryView from "./GalleryView.vue";

export default {
  components: {
    GalleryView,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Adventures</page-title>
  <gallery-view></gallery-view>
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
