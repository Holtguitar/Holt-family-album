<template>
  <section class="preview">
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
    </li>
  </section>
</template>

<script>
export default {
  props: ["key", "title", "date", "body"],
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
h1 {
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}

.title {
  font-weight: 700;
  font-size: 1.5rem;
}

.date {
  font-weight: 600;
  font-size: 0.75rem;
}

.read-more {
  margin-left: 80%;
  border: none;
  background-color: transparent;
}

.read-more:hover {
  text-decoration: underline;
  cursor: pointer;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px grey;
}

li:hover {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 3px 3px 3px 3px grey;
  cursor: pointer;
}

li:active {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 5px 5px 5px 5px grey;
  cursor: pointer;
  text-decoration: underline;
}

p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.body-last {
  opacity: 55%;
}

.btn--edit-blog {
  width: 1px;
  height: 1px;
  background-color: transparent;
}

.btn--edit-blog {
  width: fit-content;
}

.hidden {
  display: none;
  opacity: 0%;
}
</style>
