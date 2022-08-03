<script>
import { RouterLink } from "vue-router";
import ImageUploader from "../../components/gallery/builder/ImageUploader.vue";

export default {
  components: {
    ImageUploader,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Our Family</page-title>
  <image-uploader></image-uploader>
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
