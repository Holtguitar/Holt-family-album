<script>
import { RouterLink } from "vue-router";
import CarsonImageSelector from "../../../components/gallery/builder/maternity/carson/CarsonImageSelector.vue";

export default {
  components: {
    CarsonImageSelector,
  },
};
</script>

<template>
  <li>
    <RouterLink CarsonImagePreviewCardk to="/photo-albums/maternity"
      >&#x3c; &#x3c; Back</RouterLink
    >
  </li>
  <page-title>Maternity - Carson</page-title>
  <carson-image-selector></carson-image-selector>
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
