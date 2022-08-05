<template>
  <section v-if="preview" class="preview">
    <li>
      <!-- <button class="btn--edit-blog">
        <img
          class="edit-icon"
          src="../../../assets/public/icons/edit-icon.png"
        />
      </button> -->
      <h1>
        <div class="title">{{ title }} {{ key }}</div>
        <div class="date">{{ date }}</div>
      </h1>
      <p>
        <br />
        <span class="body">{{ body.slice(0, 175) }}</span>
        <span class="body-last">{{ body.slice(175, 302) }}</span>
      </p>
      <br />
      <section class="read-more" @click="previewToggle">Read More</section>
    </li>
  </section>
  <section v-else class="full-view">
    <button @click.prevent="previewToggle" class="btn--close-modal">
      &times;
    </button>
    <li>
      <h1>
        <div class="title">{{ title }} {{ key }}</div>
        <div class="date">{{ date }}</div>
      </h1>
      <hr />
      <p>
        <br />
        <span class="body">{{ body }}</span>
      </p>
      <br />
      <section class="read-less" @click="previewToggle">Read Less</section>
    </li>
  </section>
</template>

<script>
// import BlogFullViewCard from "./BlogFullViewCard.vue";
export default {
  props: ["key", "title", "date", "body"],
  components: {
    // BlogFullViewCard,
  },
  data() {
    return {
      preview: true,
    };
  },
  methods: {
    previewToggle() {
      this.preview = !this.preview;
    },
  },
};
</script>

<style scoped>
/*   Preview Styling */
.preview {
}

.preview h1 {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.preview .title {
  font-weight: 700;
  font-size: 1.5rem;
}

.preview .date {
  font-weight: 600;
  font-size: 0.75rem;
}

.preview .read-more {
  margin-left: 80%;
  border: none;
  background-color: transparent;
}

.preview .read-more:hover {
  text-decoration: underline;
  cursor: pointer;
}

.preview li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px grey;
  background-color: rgb(255, 255, 255);
}

.preview p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.preview .body-last {
  opacity: 55%;
}

.preview .btn--edit-blog {
  width: 1px;
  height: 1px;
  background-color: transparent;
}

.preview .btn--edit-blog {
  width: fit-content;
}

/*   full-view Styling    */

.full-view {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  /* min-height: 95vh;
  max-height: fit-content; */
  padding: 2rem 6rem;
  box-shadow: 10rem 10rem 10rem 100rem rgba(39, 39, 39, 0.3);
  z-index: 1000;
  transition: all 0.5s;
  border-radius: 10px;
  border-top: solid 20px rgb(252, 252, 252);
  /* border-left: solid 20px rgb(252, 252, 252); */
  border-bottom: solid 20px rgb(252, 252, 252);
  background-color: rgb(252, 252, 252);
  overflow-y: scroll;
  max-height: 85vh;
  min-height: 85vh;
  margin-top: 15px;
  margin-bottom: 50px;
}

.full-view h1 {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.full-view .title {
  font-weight: 700;
  font-size: 1.5rem;
}

.full-view .date {
  font-weight: 600;
  font-size: 0.75rem;
}

.full-view .read-less {
  margin-bottom: 5%;
  margin-left: 80%;
  border: none;
  background-color: transparent;
}

.full-view .read-less:hover {
  text-decoration: underline;
  cursor: pointer;
}

.full-view li {
  margin: 1rem 0;
}

.full-view p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.full-view .body {
  height: 80vh;
  overflow-y: scroll;
}

.full-view .btn--edit-blog {
  width: 1px;
  height: 1px;
  background-color: transparent;
}

.full-view .btn--edit-blog {
  width: fit-content;
}

.hidden {
  display: none;
  opacity: 0%;
}

.btn--close-modal {
  font-family: inherit;
  color: rgb(82, 82, 82);
  position: sticky;
  top: 0%;
  margin-left: 100%;
  /* top: 0.5rem; */
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.btn--close-modal:active {
  text-shadow: 2px 2px 20px grey;
}
</style>
