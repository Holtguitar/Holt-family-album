<script>
import BlogCreator from "../components/blog/builder/BlogCreator.vue";
import BlogSelector from "../components/blog/builder/BlogSelector.vue";
export default {
  components: {
    BlogCreator,
    BlogSelector,
  },
};
</script>

<template>
  <blog-creator> </blog-creator>
  <blog-selector></blog-selector>
</template>
