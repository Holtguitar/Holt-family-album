<script>
import { RouterLink } from "vue-router";
import TheNavBar from "../navigation/TheNavBar.vue";

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
  background: url("../../public/familyhome.png") no-repeat center center fixed;
  border-radius: 15px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>
