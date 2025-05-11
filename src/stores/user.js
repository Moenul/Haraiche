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
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/main";

import router from "../router";
import { useReportStore } from "./report";

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
      pendingReport: null,
      loading: false,
    };
  },
  actions: {
    // Report management functions

    // Set pending report
    setPendingReport(report) {
      this.pendingReport = report;
    },
    // Clear pending report
    clearPendingReport() {
      this.pendingReport = null;
    },

    // Handle pending report submission
    async handlePendingReportSubmit() {
      const reportStore = useReportStore();
      if (this.pendingReport) {
        try {
          await addDoc(collection(db, "reports"), {
            ...this.pendingReport,
            userId: this.user.id,
            submittedAt: serverTimestamp(),
          });
          reportStore.addReport(this.pendingReport);
          this.clearPendingReport();
          console.log("Pending report submitted after login:");
        } catch (error) {
          console.error("Error submitting pending report:", error);
        }
      }
    },

    // User management functions
    setUser(user) {
      this.user = user;
    },
    setIsLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
    //  login function
    async login(email, password) {
      const auth = getAuth();
      const reportStore = useReportStore();
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
        await this.handlePendingReportSubmit();
        await reportStore.init();
        router.push({ name: "ActiveReport" });
      } catch (error) {
        console.error("Error logging in:", error);
        this.setIsLoggedIn(false);
      }
    },
    // register function
    async register(email, password, fullName, phone) {
      const auth = getAuth();
      const reportStore = useReportStore();
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

        await this.handlePendingReportSubmit();
        await reportStore.init();
        router.push({ name: "ManageProfile" });
      } catch (error) {
        console.error("Error registering:", error);
        this.setIsLoggedIn(false);
      }
    },
    // logout function
    async logout() {
      const auth = getAuth();
      const reportStore = useReportStore();
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

        reportStore.clearReports();
        localStorage.clear();
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
    // initialize user state
    initAuthListener() {
      this.loading = true;
      const auth = getAuth();
      const reportStore = useReportStore();
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            this.setUser({
              id: user.uid,
              name: user.displayName,
              email: user.email,
              phone: user.phoneNumber,
              profileImage: user.photoURL,
              isVerified: user.emailVerified,
            });
            await reportStore.init();
            this.setIsLoggedIn(true);
            router.push({ name: "ActiveReport" });
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
            reportStore.clearReports();
            localStorage.clear();
            router.push({ name: "HomeView" });
          }
        });
      } catch (error) {
        console.error("Error initializing auth listener:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
