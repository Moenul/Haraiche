import { defineStore } from "pinia";
import { useReportStore } from "./report";

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
    submitReport(reportType) {
      const status = () => (reportType === "lost" ? "Finding" : "Waiting");
      const forms = {
        id: "#" + Math.ceil(Math.random() * 1000),
        isWhere: this.whereSection.isWhere,
        where: this.getWhereFields,
        when: new Date(this.getWhen),
        what: this.getWhat,
        date: new Date(Date.now()),
        status: status(),
      };
      const reportStore = useReportStore();

      return reportStore.addReport(reportType, forms);
    },
  },
});
