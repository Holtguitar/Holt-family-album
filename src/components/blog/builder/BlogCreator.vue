<template>
  <section>
    <base-card>
      <button @click.prevent="closeModal" class="btn--close-modal">
        &times;
      </button>
      <h2>New Blog</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Date: </label>
          <input type="date" id="date" name="date" v-model="date" />
        </div>

        <div class="form-control">
          <label for="name">Blog Title</label>
          <input
            type="text"
            id="blog-title"
            name="blog-title"
            v-model.trim="blogTitle"
          />
        </div>
        <div class="form-control">
          <input
            type="text"
            id="blog-body"
            name="blog-body"
            v-model="blogBody"
          />
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Post</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: {
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      blogTitle: "",
      date: null,
      blogBody: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    submitSurvey() {
      if (this.blogTitle === "" || this.blogBody === "") {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.error = null;

      fetch("https://holt-gallery-default-rtdb.firebaseio.com/blogs.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.blogTitle,
          date: this.date,
          body: this.blogBody,
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(this.date);
          } else {
            throw new Error("Could not save your survey response.");
          }
        })
        .catch((error) => {
          console.error(`Custom Error: ${error}`);
          this.error = error.message;
        });

      this.blogTitle = "";
      this.date = null;
      this.blogBody = "";
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
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
</style>
