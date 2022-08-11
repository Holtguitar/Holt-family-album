<template>
  <div class="page-header-full">
    <ul>
      <li class="header-home">
        <RouterLink class="header-nav" to="/">Home</RouterLink>
      </li>
      <li class="header-albums">
        <RouterLink class="header-nav" to="/photo-albums">Albums</RouterLink>
      </li>
      <li class="header-blog">
        <RouterLink class="header-nav" to="/blog">Blogs</RouterLink>
      </li>
      <li class="sign-button">
        <div
          class="header-nav-signin"
          v-if="!$store.state.user"
          @click="toggleClickSignIn"
        >
          Sign In
        </div>
        <div
          class="header-nav-signout"
          v-if="$store.state.user"
          @click="$store.dispatch('logout')"
        >
          Sign Out
        </div>
      </li>
    </ul>
  </div>
  <div class="page-header-mobile">
    <ul>
      <li class="header-home-mobile">
        <RouterLink class="header-nav" to="/"
          ><img src="../../assets/public/icons/home.png"
        /></RouterLink>
      </li>
      <li class="header-albums-mobile">
        <RouterLink class="header-nav-mobile" to="/photo-albums"
          ><img src="../../assets/public/icons/photos.png"
        /></RouterLink>
      </li>
      <li class="header-blog-mobile">
        <RouterLink class="header-nav-mobile" to="/blog"
          ><img src="../../assets/public/icons/blog.png"
        /></RouterLink>
      </li>
      <li class="sign-button-mobile">
        <div
          class="header-nav-signin-mobile"
          v-if="!$store.state.user"
          @click="toggleClickSignIn"
        >
          <img src="../../assets/public/icons/login.png" />
        </div>
        <div
          class="header-nav-signout-mobile"
          v-if="$store.state.user"
          @click="$store.dispatch('logout')"
        >
          <img src="../../assets/public/icons/logout.png" />
        </div>
      </li>
    </ul>
  </div>
  <br />

  <the-sign-in-modal></the-sign-in-modal>
</template>

<script>
import { RouterLink } from "vue-router";
import TheSignInModal from "../AccountManagement/TheSignInModal.vue";

export default {
  components: {
    TheSignInModal,
  },
  data() {
    return {};
  },
  methods: {
    toggleClickSignIn() {
      this.$store.state.clickSignIn = !this.$store.state.clickSignIn;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  margin-top: 2rem;
  margin-left: -20px;
  margin-right: 30px;
}

.page-header-full {
  position: relative;
  justify-content: flex-end;
  display: flex;
  width: 100vw;
  height: 80vh;
  margin-top: -3%;
  margin-left: -6.5%;
}

.page-header-mobile {
  display: none;
}

.header-nav-signin-mobile,
.header-nav-signout-mobile {
  margin-top: 2%;
  margin-top: 0%;
  margin-left: 0;
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
  margin-top: 2%;
}

.header-nav-signin,
.header-nav-signout {
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 2px rgb(118, 119, 121);
  font-family: "Noto Serif", serif;
  font-size: 23px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 2%;
  margin-top: 0%;
  margin-left: 0;
}

.header-nav-signin:hover,
.header-nav-signout:hover {
  cursor: pointer;
}

/*iPad Air*/
@media only screen and (max-width: 900px) {
  .page-header-full {
    display: none;
  }

  .page-header-mobile {
    position: relative;
    justify-content: center space-between;
    align-items: center;
    display: flex;
    width: fit-content;
    height: 50px;
    top: 90%;
  }

  img {
    width: 30px;
    margin: 5px;
  }

  .header-albums-mobile {
    margin-top: 2%;
  }
}

/*iPad/Mini*/
@media only screen and (max-width: 780px) {
  .page-header-full {
    display: none;
  }

  .page-header-mobile {
    position: relative;
    justify-content: center space-between;
    align-items: center;
    display: flex;
    width: fit-content;
    height: 50px;
    top: 95%;
    left: 20%;
    /* background-color: rgb(103, 103, 163); */
  }

  img {
    width: 40px;
    margin: 15px;
  }

  .header-albums-mobile {
    margin-top: 2%;
  }
}

/*Mobile Size*/
@media only screen and (max-width: 450px) {
  .page-header-full {
    display: none;
  }

  .page-header-mobile {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 80vw;
    height: 50px;
    left: 5%;
    top: 90%;
    /* background-color: rgb(103, 103, 163); */
  }

  img {
    width: 30px;
    /* background-color: rgb(0, 17, 255); */
  }
}
</style>
