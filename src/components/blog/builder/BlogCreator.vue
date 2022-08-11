<template>
  <section v-if="$store.state.user">
    <base-card class="blog-builder">
      <button @click.prevent="closeModal" class="btn--close-modal">
        &times;
      </button>
      <h2>New Blog</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control-title">
          <input
            type="text"
            id="blog-title"
            name="blog-title"
            v-model.trim="blogTitle"
            placeholder="Blog Title"
            maxlength="35"
          />
        </div>
        <div class="form-control-body">
          <input
            type="text"
            id="blog-body"
            name="blog-body"
            v-model="blogBody"
            placeholder="Blog Body"
            spellcheck="true"
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
          date: new Date().toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          body: this.blogBody,
        }),
      })
        .then((res) => {
          if (res.ok) {
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
      this.blogID = "";
    },
  },
};
</script>

<style scoped>
.blog-builder {
  background-color: rgb(255, 255, 255);
  border: double;
  border-radius: 10px;
  margin-top: 4rem;
  align-items: center;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  display: block;
  width: fit-content;
  margin-top: 0.5rem;
  background-color: rgb(223, 221, 221);
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

/*iPad air */
@media only screen and (max-width: 900px) {
  .blog-builder {
    display: flex;
    flex-direction: column;
  }
}

/*iPad/mini */
@media only screen and (max-width: 900px) {
}

/*iPhone/Mobile */
@media only screen and (max-width: 450px) {
}
</style>
