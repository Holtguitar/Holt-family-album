<script>
import { RouterLink } from "vue-router";
import TheMaternityNav from "../../components/navigation/TheMaternityNav.vue";

export default {
  components: {
    TheMaternityNav,
  },
};
</script>

<template>
  <li>
    <RouterLink to="/photo-albums/">&#x3c; &#x3c; Back</RouterLink>
  </li>
  <the-maternity-nav></the-maternity-nav>
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
