<script>
import ImageContainer from "../../components/gallery/ImageContainer.vue";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
} from "firebase/database";

export default {
  components: { ImageContainer },
  data() {
    return {
      realdb: getDatabase(),
      files: [],
      reader: new FileReader(),
      input: document.createElement("input"),
    };
  },
  methods: {
    async UploadProcess() {
      var ImgToUpload = files[0];

      var ImgName = namebox.value + extlab.innerHTML;

      if (!validateName) {
        alert("Image name contains invalid characters: . # $ [ ]");
        return;
      }

      const metaData = {
        contentType: ImgToUpload.type,
      };

      const storage = getStorage();

      const storageRef = sRef(storage, "Holt-Family-Gallery/" + ImgName);

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
            console.log(downloadURL);
          });
        }
      );
    },
    SaveURLtoRealtimeDB(URL) {
      var name = namebox.value;
      var ext = extlab.innerHTML;

      set(ref(realdb, "ImagesLinks/" + name), {
        ImgName: name + ext,
        ImgURL: URL,
      });
    },
    async GetURLFromRealtimeDB() {
      var name = namebox.value;
      var dbRef = ref(realdb);

      get(child(dbRef, "ImagesLinks/" + name)).then((snapshot) => {
        if (snapshot.exists()) {
          myimg.src = snapshot.val().ImgURL;
        }
      });
    },
    validateName() {
      var regex = /[\.#$\[\]]/;
      return !regex.test(namebox.value);
    },
  },
};
</script>

<template>
  <!-- <image-container></image-container> -->
  <div class="hero-section">
    <div class="row">
      <div class="container" @click="input.click">
        <img src="../../assets/public/images/add-new.jpeg" alt="image" />
      </div>
      <div class="container">
        <img
          src="https://drive.google.com/file/d/1Z261hDj6cN9rQYGlSzMi1CZlbHpdwV9v/view?usp=sharing"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/common-blue-butterfly-4658565_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/flowers-6234161_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img src="../../assets/public/images/fog-3776796_640.jpg" alt="image" />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/little-bird-6036530_640.jpg"
          alt="image"
        />
      </div>
    </div>
    <div class="row">
      <div class="container">
        <img
          src="../../assets/public/images/mosque-6231915_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/mountains-5051149_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/road-6175186_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/sunset-6227740_640.jpg"
          alt="image"
        />
      </div>
      <div class="container">
        <img
          src="../../assets/public/images/tulips-5902188_640.jpg"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.container {
  width: 20%;
  position: relative;
  transition: tramsform 900ms;
  display: block;
}

.container img {
  width: 100%;
  opacity: 1;
  height: auto;
  display: block;
}
</style>
