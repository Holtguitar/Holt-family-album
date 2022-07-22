<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Maternity Albums</h1>
  </div>
  <ul>
    <li>
      <RouterLink to="/photo-albums/maternity/judah"
        >Maternity - Judah</RouterLink
      >
    </li>

    <li>
      <RouterLink to="/photo-albums/maternity/carson"
        >Maternity - Carson</RouterLink
      >
    </li>
  </ul>
</template>

<style scoped>
h1 {
  font-size: 15px;
  left: 35%;
}

li {
  list-style-type: none;
}
</style>
