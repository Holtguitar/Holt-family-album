<template>
  <main class="login" v-if="$store.state.clickSignIn && !$store.state.user">
    <section class="forms">
      <button @click.prevent="closeModal" class="btn--close-modal">
        &times;
      </button>
      <section>
        <h2 class="login-header">Admin Login</h2>
        <form class="login" @submit.prevent="login">
          <input
            type="email"
            placeholder="Email address"
            v-model="login_form.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />
          <input type="submit" value="Login" />
        </form>
      </section>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);

      setTimeout(function () {
        login_form.value = "";
      }, 800);
    };

    return {
      login_form,
      login,
    };
  },
  methods: {
    closeModal() {
      if (this.$store.state.clickSignIn === true) {
        this.$store.state.clickSignIn = false;
      }
    },
  },
};
</script>

<style>
h2 {
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.forms {
  position: fixed;
  top: 30%;
  left: 82.5%;
  transform: translate(-50%, -50%);
  max-width: fit-content;
  max-height: 20rem;
  background-color: #f3f3f3;
  opacity: 95%;
  padding: 1rem 3rem;
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.5s;
  border-radius: 20px;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: fit-content;
  max-width: 400px;
  margin-top: 15px;
  font-size: 1rem;
  margin-bottom: 0rem;
  padding: 10px 10px;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
  padding-left: 1px;
  opacity: 50%;
}

form.login input:not([type="submit"]),
form.register input:not([type="submit"]) {
  color: #2c3e50;
  border: 2px solid #2c3e50;
  border-radius: 8px;
}

form.login input[type="submit"],
form.register input[type="submit"] {
  background-color: rgb(15, 40, 109);
  color: #fff;
  font-weight: 100;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

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

.hidden {
  opacity: 0%;
  visibility: none;
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
