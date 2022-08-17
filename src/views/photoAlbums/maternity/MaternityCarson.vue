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
  <h1>Carson</h1>
  <carson-image-selector></carson-image-selector>
</template>

<style scoped>
h1 {
  left: 40%;
  font-size: 3rem;
}

li {
  list-style-type: none;
}

/*iPad/Mini*/
@media only screen and (max-width: 900px) {
  h1 {
    font-size: 3rem;
    margin-top: 50% !important;
  }

  li {
  }
}

/*iPad air*/
@media only screen and (max-width: 800px) {
  h1 {
    font-size: 3rem;
    top: 1%;
    margin-top: 50% !important;
  }

  li {
  }
}

/*iPhone*/
@media only screen and (max-width: 450px) {
  h1 {
    font-size: 2rem;
    left: 40%;
    margin-top: 5% !important;
  }

  li {
    position: relative;
    margin-top: 30%;
    left: 5%;
  }
}
</style>
