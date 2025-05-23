import { defineStore } from "pinia";
import { useReportStore } from "./report";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useUserStore } from "./user";
import router from "@/router";
import { db } from "@/main";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    whereSection: {
      isWhere: "location",
      areas: "",
      localAreas: [""],
      transportType: "Bus",
      transportName: "",
      transportRouteArea: [""],
    },
    whenSection: {
      lostDate: "",
      lostTime: "06:00",
    },
    whatSection: {
      selectedCategory: "",
      selectedSubCategory: "",
      itemDetails: "",
      dynamicFields: {},
    },
    questionSection: {
      questions: [],
    },
  }),
  getters: {
    getWhereFields: (state) => {
      if (state.whereSection.isWhere === "location") {
        return {
          areas: state.whereSection.areas,
          localAreas: state.whereSection.localAreas,
        };
      } else {
        return {
          transportType: state.whereSection.transportType,
          transportName: state.whereSection.transportName,
          transportRouteArea: state.whereSection.transportRouteArea,
        };
      }
    },

    getWhen: (state) => {
      return state.whenSection.lostDate + " " + state.whenSection.lostTime;
    },

    getWhat: (state) => {
      return {
        category: state.whatSection.selectedCategory,
        subCategory: state.whatSection.selectedSubCategory,
        specification: state.whatSection.dynamicFields,
        itemManualDetails: state.whatSection.itemDetails,
      };
    },
    getQuestion: (state) => {
      return {
        questions: state.questionSection,
      };
    },
  },
  actions: {
    // Actions
    // Additional area
    addLocalArea() {
      this.whereSection.localAreas.push("");
    },
    removeLocalArea(index) {
      this.whereSection.localAreas.splice(index, 1);
    },

    // Transport Additional area
    addTransportRouteArea() {
      this.whereSection.transportRouteArea.push("");
    },
    removeTransportRouteArea(index) {
      this.whereSection.transportRouteArea.splice(index, 1);
    },

    // Add question
    addQuestion(question) {
      // Trim and check if it already ends with a question mark
      const trimmedQuestion = question.trim();
      const hasQuestionMark = /\?\s*$/.test(trimmedQuestion);

      if (hasQuestionMark) {
        this.questionSection.questions.push(trimmedQuestion);
      } else {
        this.questionSection.questions.push(trimmedQuestion + "?");
      }
    },

    // Remove question

    removeQuestion(questionToRemove) {
      this.questionSection.questions = this.questionSection.questions.filter(
        (q) => q !== questionToRemove
      );
    },

    validateForm() {
      const errors = {};

      // Validate What Section
      if (!this.whatSection.selectedCategory) {
        errors.selectedCategory = "Please select a category.";
      }
      if (!this.whatSection.selectedSubCategory) {
        errors.selectedSubCategory = "Please select a subcategory.";
      }
      if (!this.whatSection.itemDetails.trim()) {
        errors.itemDetails = "Please provide item details.";
      }
      for (const [key, value] of Object.entries(this.whatSection.dynamicFields)) {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          errors[key] = `Please fill the ${key} field.`;
        }
      }

      // Return validation result
      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      };
    },

    // Submit report
    async submitReport(reportType) {
      let forms = {};

      if (reportType === "lost") {
        forms = {
          reportType: "lost",
          id: Math.ceil(Math.random() * 1000) + "L",
          isWhere: this.whereSection.isWhere,
          where: this.getWhereFields,
          when: new Date(this.getWhen),
          what: this.getWhat,
          createdAt: serverTimestamp(),
          status: "Finding",
          isActive: true,
          matchedReport: [],
        };
      } else if (reportType === "found") {
        forms = {
          reportType: "found",
          id: Math.ceil(Math.random() * 1000) + "F",
          isWhere: this.whereSection.isWhere,
          where: this.getWhereFields,
          when: new Date(this.getWhen),
          what: this.getWhat,
          questions: this.getQuestion,
          createdAt: serverTimestamp(),
          status: "Waiting",
          isActive: true,
          requestReport: [],
        };
      } else {
        this.validateForm();
      }

      const userStore = useUserStore();
      const reportStore = useReportStore();

      if (userStore.isLoggedIn) {
        try {
          // const { db } = await import("firebase/firestore");
          await addDoc(collection(db, "reports"), {
            ...forms,
            userId: userStore.user.id,
          });
          reportStore.addReport(forms);
          console.log("Report submitted successfully");
        } catch (error) {
          console.error("Faild submitting report:", error);
        }
      } else {
        userStore.setPendingReport(forms);
        router.push("/login");
      }
    },
  },
});
