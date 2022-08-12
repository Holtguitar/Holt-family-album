<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="album-links">
    <div class="album">
      <RouterLink to="/photo-albums/family">
        <div class="family-link" id="image-container"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/family">Family</RouterLink>
    </div>
    <div class="album">
      <RouterLink to="/photo-albums/maternity">
        <div class="maternity-link"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/maternity">Maternity</RouterLink>
    </div>
    <div class="album">
      <RouterLink to="/photo-albums/wedding">
        <div class="wedding-link"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/wedding">Wedding</RouterLink>
    </div>
    <div class="album">
      <RouterLink to="/photo-albums/adventure">
        <div class="adventure-link"></div>
      </RouterLink>
      <RouterLink to="/photo-albums/adventure">Adventures</RouterLink>
    </div>
  </section>
</template>

<style>
.album-links {
  justify-content: center;
  display: flex;
  text-align: center;
}

a {
  text-decoration: none;
  color: inherit;
}

.family-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/family.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
  font-size: 30px;
  text-align: center;
  color: white;
}

.family-link:hover,
.maternity-link:hover,
.wedding-link:hover,
.adventure-link:hover {
  box-shadow: 2px 2px 2px 2px grey;
  text-decoration: underline !important;
}

.maternity-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/maternity.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

.wedding-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/wedding.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

.adventure-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/public/adventure.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

div {
  margin: 25px;
}

@media only screen and (max-width: 450px) {
  .album-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  
