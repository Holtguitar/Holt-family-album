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
  <h1>Our Adventures</h1>
  <adventures-image-selector></adventures-image-selector>
</template>

<style scoped>
h1 {
  left: 35%;
  margin-bottom: 5rem;
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
    left: 20%;
    margin-top: 5% !important;
  }

  li {
    position: relative;
    margin-top: 30%;
    left: 5%;
  }
}
</style>
