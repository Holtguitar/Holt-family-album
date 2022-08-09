<template></template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width, this.height);
    },
  },
};
</script>
