<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
    },
    onUpload() {},
  },
};
</script>

<template>
  <div class="import-form">
    <input type="file" @change="onFileSelected" />
    <button class="submit-button" @click="onUpload">Upload Photo</button>
  </div>
</template>

<style scoped>
.import-form {
  border: 1px solid;
  border-color: black;
  border-radius: 10px;
  width: 20rem;
  height: 10rem;
  text-align: center;
  justify-content: center;
}

.import-form .submit-button {
  margin-top: 2rem;
}
</style>
