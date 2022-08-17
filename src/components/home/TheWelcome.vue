<script setup>
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <div class="welcome">
      <h1>We are the Holt family</h1>
      <br />
      Our desire is to glorify God in all that we do. We invite you to explore
      our journey through photos and stories of our experiences!
    </div>
  </WelcomeItem>
</template>

<style scoped>
/*iPad*/
@media only screen and (max-width: 900px) {
  .welcome h1 {
    font-size: 2.5rem;
  }
  .welcome {
    font-size: 1.75rem;
    top: 15%;
    left: 6%;
    text-align: center;
  }
}

/*iPad Air/Mini/ */
@media only screen and (max-width: 800px) {
  .welcome h1 {
    font-size: 2.5rem;
  }
  .welcome {
    font-size: 1.75rem;
    top: 15%;
    left: 6%;
    text-align: center;
  }
}

/*Mobile*/
@media only screen and (max-width: 450px) {
  .welcome h1 {
    font-size: 2.5rem;
  }
  .welcome {
    font-size: 1.75rem;
    margin: -9px;
  }
}
</style>
