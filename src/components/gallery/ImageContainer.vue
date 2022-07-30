<template>
  <div class="hero-section">
    <div class="row">
      <div class="container" @click="input.click">
        <img src="../../assets/public/family/IMG_5101.JPG" alt="image" />
      </div>
      <button @click="getPaths">Get Paths</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageSRC: import.meta.glob("../../assets/public/family/"),
      folder: "../../assets/public/family",
    };
  },
  methods: {
    getImagePaths() {},
    getPaths() {
      for (files in this.folder) {
        console.log(files);
      }
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
}

.container {
  width: 20%;
  position: relative;
  transition: tramsform 900ms;
  display: block;
}

.container img {
  width: 100%;
  opacity: 1;
  height: auto;
  display: block;
}
</style>
