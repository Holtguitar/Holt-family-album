<script>
export default {
  data() {
    return {
      blogBodyMore:
        "This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body. This is a blog body.",
      //   blogBodyLess: this.blogBodyMore.substring(0, 30),
    };
  },
  methods: {
    showMore() {},
    showLess() {},
  },
};
</script>

<template>
  <div>
    <blog-title>This is a blog</blog-title>
    <p class="blog-body">{{ blogBodyMore }}</p>
    <button>Show More</button>
  </div>
</template>

<style scoped>
blog-title {
  justify-content: center;
  text-align: center;
  margin: 15px;
}
</style>
