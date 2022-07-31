<template>
  <section @submit.prevent="loadExperiences">
    <base-card>
      <h2>Catch up on our journey!</h2>
      <p v-if="isLoading">Loading results. . .</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No results found.
      </p>
      <ul v-else>
        <blog-preview-card
          v-for="result in results"
          :key="result.id"
          :title="result.title"
          :date="result.date"
          :body="result.body"
        ></blog-preview-card>
      </ul>
    </base-card>
  </section>
</template>

<script>
import BlogPreviewCard from "./BlogPreviewCard.vue";
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: {
    BlogPreviewCard,
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
      imageURL:
        "gs://holt-gallery.appspot.com/Holt-Family-Gallery/Adventures.json",
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch("https://holt-gallery-default-rtdb.firebaseio.com/blogs.json")
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
              id: id,
              title: data[id].title,
              date: data[id].date,
              body: data[id].body,
            });
          }
          this.results = results.reverse();
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = "Failed to load results. Please try again later.";
          console.error(`Custom Error: ${error}`);
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
h2 {
  margin-left: 20%;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
