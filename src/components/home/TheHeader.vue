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
  <div class="app-header-mobile">
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

.app-header-mobile {
  display: none;
}

/*iPad Size */
@media only screen and (max-width: 768px) {
  .app-header {
    display: none;
  }

  .app-header {
    position: relative;
    justify-content: flex-end;
    display: block;
    width: 90vw;
    height: 50vh;
    left: 2%;
    top: -10%;
    background: url("../../public/familyhome.png") center;
    background-size: 15px;
    border-radius: 150px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
}

/*iPad air */
@media only screen and (max-width: 900px) {
  .app-header {
    display: none;
  }

  .app-header {
    display: block;
    width: 90vw;
    height: 40vh;
    background: url("../../public/familyhome.png") center;
    background-size: 15px;
    border-radius: 150px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
}

/*iPad/mini */
@media only screen and (max-width: 900px) {
  .app-header {
    display: none;
  }

  .app-header {
    display: block;
    width: 90vw;
    height: 40vh;
    left: 7%;
    background: url("../../public/familyhome.png") center;
    background-size: 15px;
    border-radius: 150px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
}

/*iPhone/Mobile */
@media only screen and (max-width: 450px) {
  .app-header {
    display: none;
  }

  .app-header {
    left: 7px;
    display: block;
    width: 87w;
    height: 40vh;
    background: url("../../public/familyhome.png") no-repeat center center;
    border-radius: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
}
</style>
