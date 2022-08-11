<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="album-links">
    <div class="album">
      <RouterLink to="/photo-albums/maternity/judah">
        <div class="maternity-judah" id="image-container"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/maternity/judah">Judah</RouterLink>
    </div>
    <div class="album">
      <RouterLink to="/photo-albums/maternity/carson">
        <div class="maternity-carson" id="image-container"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/maternity/carson">New Baby</RouterLink>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 15px;
  left: 35%;
}

li {
  list-style-type: none;
}

.maternity-judah {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/maternity-judah.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

.maternity-carson {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/maternity-carson.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}
</style>
