<template>
  <main class="blogView" v-if="$store.state.showFullBlog && showFullBlog">
    <button @click.prevent="closeModal" class="btn--close-modal">
      &times;
    </button>
    <li>
      <h1>
        <div class="title">{{ title }}</div>
        <div class="date">{{ date }}</div>
      </h1>
      <p>
        <br />
        <span class="body">{{ body }}</span>
      </p>
      <br />
    </li>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      showFullBlog: false,
    };
  },
  methods: {
    closeBlog() {
      if (
        this.$store.state.showFullBlog === true &&
        this.showFullBlog === true
      ) {
        this.$store.state.showFullBlog = false;
        this.showFullBlog = false;
      }
    },
    openBlog() {
      if (
        this.$store.state.showFullBlog === false &&
        this.showFullBlog === false
      ) {
        this.$store.state.showFullBlog = false;
        this.showFullBlog = true;
      }
    },
  },
};
</script>

<style>
.btn--close-modal {
  font-family: inherit;
  color: rgb(82, 82, 82);
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.btn--close-modal:active {
  text-shadow: 2px 2px 20px grey;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
}
</style>
