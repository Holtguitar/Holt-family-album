<script>
import { RouterLink } from "vue-router";
import JudahImageSelector from "../../../components/gallery/builder/maternity/judah/JudahImageSelector.vue";

export default {
  components: {
    JudahImageSelector,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/maternity">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <page-title>Maternity - Judah</page-title>
  <judah-image-selector></judah-image-selector>
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
