<script>
import TheHeader from "../src/components/home/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <the-header></the-header>
  <RouterView />
</template>
