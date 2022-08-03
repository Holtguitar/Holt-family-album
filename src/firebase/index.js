import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const firebaseConfig = {
  apiKey: "AIzaSyCf1drJl6oMsExFTT9FUf0cJHYzMmXVpdQ",
  authDomain: "holt-gallery.firebaseapp.com",
  databaseURL: "https://holt-gallery-default-rtdb.firebaseio.com",
  projectId: "holt-gallery",
  storageBucket: "holt-gallery.appspot.com",
  messagingSenderId: "68891870749",
  appId: "1:68891870749:web:68bdc3fe761dc2cefc68f4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const realdb = getDatabase();

export {
  auth,
  realdb,
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
  getStorage,
  sRef,
  uploadBytesResumable,
  getDownloadURL,
  initializeApp,
  firebaseConfig,
};
