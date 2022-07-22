<script>
import { RouterLink } from "vue-router";
import TheSignInModal from "../AccountManagement/TheSignInModal.vue";

export default {
  components: {
    TheSignInModal,
  },
  data() {
    return {
      adminSignedIn: true,
      subscriberSignedIn: false,
      ShowSignIn: false,
    };
  },
  methods: {
    signOut() {
      if (this.adminSignedIn === true) {
        this.adminSignedIn = false;
      }
      if (this.subscriberSignedIn === true) {
        this.subscriberSignedIn = false;
      }
      if (adminSignedIn === true || subscriberSignedIn === true) {
        signedIn = true;
      }
    },
    signIn() {
      // this.ShowSignIn = true;
      this.adminSignedIn = true;
    },
  },
};
</script>

<template>
  <div class="page-header">
    <ul>
      <li v-if="adminSignedIn || SubscriberSignedIn">
        <RouterLink class="header-nav" to="/">Home</RouterLink>
      </li>
      <li v-if="adminSignedIn || SubscriberSignedIn">
        <RouterLink class="header-nav" to="/photo-albums">Albums</RouterLink>
      </li>
      <li v-if="adminSignedIn || SubscriberSignedIn">
        <RouterLink class="header-nav" to="/blog">Blog</RouterLink>
      </li>
      <li v-if="adminSignedIn">
        <RouterLink class="header-nav" to="/account-management">
          Accounts
        </RouterLink>
      </li>
      <li class="sign-button">
        <RouterLink
          class="header-nav"
          to="/"
          v-if="!adminSignedIn && !SubscriberSignedIn"
          @click="signIn"
        >
          Sign In
        </RouterLink>
        <RouterLink class="header-nav" to="/" @click="signOut" v-else
          >Sign Out</RouterLink
        >
      </li>
    </ul>
  </div>
  <the-sign-in-modal v-if="ShowSignIn"></the-sign-in-modal>
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
  /* padding: 50px; */
  width: 100vw;
  height: 80vh;
  margin-top: -3%;
  margin-left: -6.5%;
  background: url("src/assets/family-home.JPG") no-repeat center center fixed;
  border-radius: 15px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
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
