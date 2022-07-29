<script>
import { RouterLink } from "vue-router";
import TheSignInModal from "../AccountManagement/TheSignInModal.vue";

export default {
  components: {
    TheSignInModal,
  },
  methods: {
    toggleClickSignIn() {
      this.$store.state.clickSignIn = !this.$store.state.clickSignIn;
    },
  },
};
</script>

<template>
  <div class="page-header">
    <ul>
      <li>
        <RouterLink class="header-nav" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="header-nav" to="/photo-albums">Albums</RouterLink>
      </li>
      <li>
        <RouterLink class="header-nav" to="/blog">Blog</RouterLink>
      </li>
      <li class="sign-button">
        <RouterLink
          class="header-nav"
          to="/"
          v-if="!$store.state.user"
          @click="toggleClickSignIn"
        >
          Sign In
        </RouterLink>
        <RouterLink
          class="header-nav"
          to="/"
          v-if="$store.state.user"
          @click="$store.dispatch('logout')"
          >Sign Out</RouterLink
        >
      </li>
    </ul>
  </div>
  <br />

  <the-sign-in-modal></the-sign-in-modal>
</template>

<style>
ul {
  display: flex;
  list-style-type: none;
  margin-top: 2rem;
  margin-left: -20px;
  margin-right: 30px;
}

.page-header {
  position: relative;
  justify-content: flex-end;
  display: flex;
  width: 100vw;
  height: 80vh;
  margin-top: -3%;
  margin-left: -6.5%;
}

li {
  margin-right: 20px;
}

.header-nav {
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 2px rgb(118, 119, 121);
  font-family: "Noto Serif", serif;
  font-size: 23px;
  font-weight: 600;
  text-decoration: none;
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

    flex-direction: right;
    right: 12%;
  }

  li {
    list-style-type: none;
    padding: 10px;
  }
} */

/* @media only screen and (max-width: 800px) {
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
