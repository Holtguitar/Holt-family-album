<template>
  <!-- <image-uploader></image-uploader> -->
  <section
    class="gallery"
    style="
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
    "
    @submit.prevent="loadImages"
  >
    <image-preview-card
      v-for="result in results"
      :key="result.key"
      :url="result.url"
    >
    </image-preview-card>
  </section>
</template>

<script>
import ImageUploader from "./ImageUploader.vue";
import ImagePreviewCard from "./ImagePreviewCard.vue";

export default {
  components: {
    ImagePreviewCard,
    ImageUploader,
  },
  data() {
    return {
      results: [],
      URLS: [],
      isLoading: false,
      error: null,
      preview: true,
    };
  },
  methods: {
    loadImages() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://holt-gallery-default-rtdb.firebaseio.com/images/family.json"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];

          for (const id in data) {
            results.push({
              key: id,
              url: data[id].URL,
            });
          }

          this.results = results;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = "Failed to load results. Please try again later.";
          console.error(`Custom Error: ${error}`);
        });
    },
  },
  mounted() {
    this.loadImages();
  },
};
</script>

<style scoped>
h2 {
  margin-left: 20%;
  text-decoration: underline;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.blog-nav {
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 15px;
  /* width: 40vw; */
  left: 29%;
  user-select: none;
}

.arrow-left:hover {
  cursor: pointer;
}

.arrow-right:hover {
  cursor: pointer;
}

.current-number {
  position: absolute;
  left: 20%;
}

.arrow-left {
  position: absolute;
  left: 3%;
  width: 30px;
}

.arrow-right {
  position: absolute;
  left: 35%;
  width: 30px;
}

.arrow-icon {
  width: 5%;
}
</style>
