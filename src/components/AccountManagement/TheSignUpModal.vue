<script>
export default {
  data() {
    return {
      modal: "modal hidden",
    };
  },
  methods: {
    closeModal() {
      this.modal = "modal hidden";
    },
    openModal() {
      this.modal = "modal";
    },
  },
};
</script>

<template>
  <div :class="modal">
    <button @click="closeModal" class="btn--close-modal">&times;</button>
    <h2 class="modal__header">
      Send us a request for more information about our services!
    </h2>
    <form
      action="https://formsubmit.co/holtguitar@gmail.com"
      method="POST"
      class="modal__form"
    >
      <input
        type="hidden"
        name="_subject"
        value="Request for more information - Doppio Designs"
      />
      <input type="email" name="email" placeholder="Email Address" required />
      <input
        type="hidden"
        name="_next"
        value="https://doppio-web-designs.netlify.app/index.html"
      />
      <input
        type="text"
        name="message"
        placeholder="Write your message here . . ."
        required
      />
      <button type="submit" class="button-submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
/* MODAL WINDOW */
.hidden {
  opacity: 0%;
  visibility: none;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: fit-content;
  max-height: 60rem;
  background-color: #f3f3f3;
  padding: 5rem 6rem;
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.5s;
  border-radius: 10px;
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

.modal__header {
  font-size: 40px;
  /* margin-bottom: 4.5rem; */
  line-height: 1.5;
  color: #1c1d25;
  text-align: center;
  text-decoration: none;
}

.modal__form {
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 2.5rem;
}

.modal__form label {
  font-size: 1.7rem;
  font-weight: 500;
}

.modal__form input {
  font-size: 30px;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.modal__form button {
  grid-column: 1 / span 2;
  justify-self: center;
  margin-top: 1rem;
}

.btn--close-modal {
  font-family: inherit;
  color: rgb(82, 82, 82);
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  font-size: 60px;
  cursor: pointer;
  border: none;
  background: none;
}

.btn--close-modal:active {
  text-shadow: 2px 2px 20px grey;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}

.button-submit {
  width: 200px;
  height: 55px;
  background-color: rgb(162, 165, 197);
  border-radius: 20px;
  text-align: center;
  font-weight: 100;
  font-size: 30px;
  padding-top: 5px;
  margin-top: 20px;
}

.button-submit:hover {
  background-color: azure;
  color: #808080;
  cursor: pointer;
}

.button-submit:active {
  background-color: azure;
  color: #808080;
  cursor: pointer;
  box-shadow: 5px 5px 20px rgb(59, 59, 59);
}
</style>
