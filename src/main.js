import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import { useUserStore } from "./stores/user";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrXv1ZgiBeHjnSQdbY-c7aFryzxDsBx_s",
  authDomain: "haraiche-922a7.firebaseapp.com",
  projectId: "haraiche-922a7",
  storageBucket: "haraiche-922a7.firebasestorage.app",
  messagingSenderId: "488825166038",
  appId: "1:488825166038:web:3105da582b5662a5819177",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Export db and auth
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

const userStore = useUserStore();
userStore.initAuthListener?.(); // optional chaining to avoid error if not defined

app.mount("#app");
