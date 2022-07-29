<template>
  <div>
    <img :src="image" />
  </div>
</template>
<script>
export default {
  mounted: function () {
    if (this.source) {
      //is it empty
      this.image = this.source; //replace placeholder
    }
    this.loading = false;
  },
  data() {
    return {
      image: somePlaceholderImage, //url for placeholder image
      loading: true,
    };
  },
  props: ["source"],
};
</script>

<style></style>
