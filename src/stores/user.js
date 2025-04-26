import { defineStore } from "pinia";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// Firebase Database setup
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/main";

import router from "../router";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        profileImage: "",
        isVerified: false,
      },
      isLoggedIn: false,
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setIsLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
    //  login function
    async login(email, password) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        this.setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          profileImage: user.photoURL,
          isVerified: user.emailVerified,
        });
        this.setIsLoggedIn(true);
        router.push({ name: "ActiveReport" });
      } catch (error) {
        console.error("Error logging in:", error);
        this.setIsLoggedIn(false);
      }
    },
    // register function
    async register(email, password, fullName, phone) {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 1️⃣ Update the display name in Firebase Auth
        await updateProfile(user, {
          displayName: fullName,
          phoneNumber: phone,
        });

        // 2️⃣ Save extra user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          fullName: fullName,
          phone: phone,
          email: user.email,
          createdAt: new Date(),
        });

        this.setUser({
          id: user.uid,
          name: fullName,
          email: user.email,
          phone: phone,
          profileImage: user.photoURL,
          isVerified: user.emailVerified,
        });
        this.setIsLoggedIn(true);

        console.log(this.user);

        router.push({ name: "ManageProfile" });
      } catch (error) {
        console.error("Error registering:", error);
        this.setIsLoggedIn(false);
      }
    },
    // logout function
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.setUser({
          id: "",
          name: "",
          email: "",
          phone: "",
          profileImage: "",
          isVerified: false,
        });
        this.setIsLoggedIn(false);
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
    // initialize user state
    initAuthListener() {
      console.log("Initializing auth listener...");

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.setUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
            profileImage: user.photoURL,
            isVerified: user.emailVerified,
          });
          this.setIsLoggedIn(true);
          console.log("User is logged in:", user);
        } else {
          this.setUser({
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            profileImage: "",
            isVerified: false,
          });
          this.setIsLoggedIn(false);
          console.log("User is logged out");
        }
      });
    },
  },
});
