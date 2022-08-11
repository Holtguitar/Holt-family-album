<template>
  <blog-creator></blog-creator>
  <section @submit.prevent="loadBlogPreviews">
    <base-card>
      <h2>Read up on our journey!</h2>
      <p v-if="isLoading">Loading results. . .</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No results found.
      </p>
      <ul v-else>
        <blog-preview-card
          v-for="result in results.slice(firstIndex, lastIndex)"
          :key="result.key"
          :title="result.title"
          :date="result.date"
          :body="result.body"
        ></blog-preview-card>
      </ul>
    </base-card>
    <section v-if="results.length" class="blog-nav">
      <img
        class="arrow-left"
        @click="decrease"
        v-if="!firstPage"
        src="../../../assets/public/icons/left-arrow.png"
      />
      <page-number class="current-number" v-model="currentNumber">{{
        currentNumber
      }}</page-number>
      <img
        class="arrow-right"
        @click="increase"
        v-if="!lastPage"
        src="../../../assets/public/icons/right-arrow.png"
      />
    </section>
  </section>
</template>

<script>
import BlogPreviewCard from "./BlogPreviewCard.vue";
import BlogCreator from "./BlogCreator.vue";
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: {
    BlogPreviewCard,
    BaseCard,
    BaseButton,
    BlogCreator,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
      preview: true,
      currentNumber: 1,
      firstIndex: 0,
      lastIndex: 4,
      lastPage: false,
      firstPage: true,
    };
  },
  methods: {
    incrementIndex() {
      if (this.currentNumber >= Math.floor(this.results.length / 5)) {
        this.lastPage = true;
      } else {
        this.lastPage = false;
      }
      if (this.currentNumber === 1) {
        this.firstPage = true;

        this.firstIndex = 0;
        this.lastIndex = 4;
      } else {
        this.firstPage = false;
        this.firstIndex = (this.currentNumber - 1) * 5;
        this.lastIndex = this.firstIndex + 4;
      }
    },
    increase() {
      this.currentNumber++;
      this.incrementIndex();
    },
    decrease() {
      this.currentNumber--;
      this.incrementIndex();
    },
    loadBlogPreviews() {
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
              key: id,
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
    this.loadBlogPreviews();
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

/*iPad air */
@media only screen and (max-width: 900px) {
  h2 {
    font-size: 1.25rem;
    margin: 0;
    margin-top: 50px;
    text-decoration: none;
    left: 30%;
  }
}

/*iPad/mini */
@media only screen and (max-width: 800px) {
  h2 {
    font-size: 1.25rem;
    margin: 0;
    margin-top: 50px;
    text-decoration: none;
    left: 30%;
  }
}

/*iPhone/Mobile */
@media only screen and (max-width: 450px) {
  h2 {
    font-size: 1.25rem;
    margin: 0;
    margin-top: 50px;
    left: 5%;
  }
}
</style>
