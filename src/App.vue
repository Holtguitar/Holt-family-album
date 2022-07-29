<script>
import { RouterLink } from "vue-router";
import TheNavBar from "../src/components/navigation/TheNavBar.vue";

export default {
  components: {
    TheNavBar,
  },
};
</script>

<template>
  <div class="app-header">
    <the-nav-bar></the-nav-bar>
  </div>
  <RouterView />
</template>

<style>
.app-header {
  position: relative;
  justify-content: flex-end;
  display: flex;
  padding-top: 50px;
  padding-right: 20px;
  width: 100vw;
  height: 80vh;
  margin-top: -3%;
  margin-left: -6.5%;
  background: url("../src/assets/family-home.JPG") no-repeat center center fixed !important;
  border-radius: 15px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>

<!-- 
<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view />
  <login></login>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import Login from "../src/components/AccountManagement/Login.vue";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },

  components: {
    Login,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
