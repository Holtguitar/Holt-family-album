<template>
  <section class="preview" @click.prevent="previewToggle">
    <img v-bind:src="url" />
  </section>
  <section v-if="preview" class="fullview" @click.prevent="previewToggle">
    <img v-bind:src="url" />
  </section>
</template>

<script>
export default {
  props: ["url", "key"],
  data() {
    return {
      preview: false,
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
  width: fit-content;
  height: fit-content;
  margin: 15px;
}

.preview img {
  width: 250px;
  user-select: none;
  margin: 15px;
  object-fit: cover;
  box-shadow: 5px 5px 5px rgba(8, 8, 8, 0.3);
}

/*   full-view Styling    */

.fullview img {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 75vw;
  box-shadow: 10rem 10rem 10rem 100rem rgba(8, 8, 8, 0.3);
  z-index: 1000;
  transition: all 0.5s;
  overflow-y: scroll;
  max-height: 100vh;
  min-height: 85vh;
  margin-top: 15px;
  margin-bottom: 50px;
}

.btn--close-modal {
  font-family: inherit;
  color: rgb(82, 82, 82);
  position: sticky;
  top: 0%;
  margin-left: 100%;
  top: 0.5rem;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.btn--close-modal:active {
  text-shadow: 2px 2px 20px grey;
}

/*iPad Air */
@media only screen and (max-width: 900px) {
}

/*iPad mini */
@media only screen and (max-width: 800px) {
}

/*iPhone */
@media only screen and (max-width: 450px) {
  .fullview img {
    position: fixed;
    top: 50%;
    left: 46%;
    transform: translate(-50%, -50%);
    box-shadow: 10rem 10rem 10rem 100rem rgba(8, 8, 8, 0.3);
    z-index: 1000;
    transition: all 0.5s;
    overflow-y: scroll;
    max-height: 90vh;
    max-width: 110vw;
    min-height: 25vh;
    min-width: 80vw;
    margin-top: 15px;
    margin-bottom: 50px;
  }
}
</style>
