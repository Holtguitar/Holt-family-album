<script>
import { RouterLink } from "vue-router";
import PhotoView from "./PhotoView.vue";

export default {
  components: {
    PhotoView,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Adventures</page-title>
  <photo-view></photo-view>
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
