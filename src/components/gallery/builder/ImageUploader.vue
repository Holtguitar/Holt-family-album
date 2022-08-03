<template>
  <section>
    <image-uploader>
      <!-- <button @click.prevent="closeModal" class="btn--close-modal">
        &times;
      </button>
      <h2>New Photo</h2>
      <label>Image Name</label>
      <input type="file" ref="file" style="display: none" />
      <input type="text" id="namebox" style="background-color: #e6e1e9" />
      <label id="extlab"></label>
      <br />
      <br />
      <img id="myimg" />
      <label id="upprogress"></label>
      <br />
      <br />
      <base-button id="selbtn" @click="$refs.file.click()"
        >Select Image</base-button
      >
      <base-button id="upbtn">Upload</base-button>
      <base-button id="downbtn">Download</base-button> -->
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange" />
      </div>
      <div v-else>
        <img :src="image" />
        <base-button @click.prevent="removeImage">Remove image</base-button>
        <base-button @click.prevent="UploadImage">Upload</base-button>
      </div>
    </image-uploader>
  </section>
</template>

<script>
import ImageUploader from "./UI/ImageContainer.vue";
import BaseButton from "../../blog/UI/BaseButton.vue";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "../../../firebase";

// Firebase Realtime
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
} from "../../../firebase";

export default {
  components: {
    ImageUploader,
    BaseButton,
  },
  data() {
    return {
      image: "",
      images: [],
      reader: new FileReader(),
      // name: "Image_" + Math.floor(100000 + Math.random() * 900000),
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.images.push(files);
      // this.name = files[0];
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var vm = this;

      this.reader.onload = (e) => {
        vm.image = e.target.result;
      };
      this.reader.readAsDataURL(file);
    },
    removeImage(e) {
      this.image = "";
    },
    GetFileName(file) {
      const temp = file.name.split(".");
      const fname = temp.slice(0, -1).join(".");
      return fname;
    },
    GetFileExt(file) {
      const temp = file.name.split(".");
      const ext = temp.slice(temp.length - 1, temp.length);
      return "." + ext[0];
    },
    async UploadImage() {
      const ImgToUpload = this.images[0];
      const ImageName = "bob-tester";

      const metaData = {
        contentType: ImgToUpload.type,
        downloadSource: this.downloadURL,
      };

      const storage = getStorage();

      const storageRef = ref(storage, "Images/" + ImageName);

      const UploadTask = uploadBytesResumable(
        storageRef,
        ImgToUpload,
        metaData
      );

      UploadTask.on(
        "state-change",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          proglab.innerHTML = "Upload Progress: " + progress + "%";
        },
        (error) => {
          alert("Image not uploaded!");
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            fetch(
              "https://holt-gallery-default-rtdb.firebaseio.com/images/family.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  URL: downloadURL,
                }),
              }
            )
              .then((res) => {
                if (res.ok) {
                } else {
                  throw new Error("Could not save your URL.");
                }
              })
              .catch((error) => {
                console.error(`Custom Error: ${error}`);
                this.error = error.message;
              });
          });
        }
      );
    },
  },
};
</script>

<style scoped>
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

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
