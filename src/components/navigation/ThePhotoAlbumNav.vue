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
  background: url("../../assets/family.jpg");
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
  box-shadow: 3px 3px 3px 3px grey;
}

.maternity-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/maternity-judah.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

.wedding-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/wedding.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

.adventure-link {
  width: 200px;
  height: 200px;
  background: url("../../assets/adventure.jpg");
  background-size: cover;
  border-radius: 15px;
  text-decoration: none;
}

div {
  margin: 25px;
}

/* @media only screen and (max-width: 1500px) {
  .header-nav {
    margin: 5px;
    color: rgb(39, 76, 117);
    text-shadow: 1px 1px 1px rgb(95, 145, 202);
    font-family: "Noto Serif", serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }

  ul {
    display: flex;
    right: 12%;
  }

  li {
    list-style-type: none;
    padding: 10px;
  }
} */
/* 
@media only screen and (max-width: 800px) {
  .header-nav {
    margin: 5px;
    color: rgb(39, 76, 117);
    text-shadow: 1px 1px 1px rgb(95, 145, 202);
    font-family: "Noto Serif", serif;
    font-size: 13px;
    font-weight: 200;
    text-decoration: none;
  }

  ul {
    display: flex;
    right: 16%;
  }

  li {
    list-style-type: none;
    padding: 10px;
  }
} */
</style>
