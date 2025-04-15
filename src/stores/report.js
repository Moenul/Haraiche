import router from "@/router";
import { defineStore } from "pinia";

export const useReportStore = defineStore("reportStore", {
  state: () => {
    return {
      lost: [
        {
          id: "#437L",
          isWhere: "location",
          where: {
            areas: "Dhaka, Dhaka",
            localAreas: ["Dhanmondi, Panthapath", "Dhanmondi, West Rajabazar"],
          },
          when: "2025-04-15T06:00:00.000",
          what: {
            category: "Bags and Suitcases",
            subCategory: "Suitcase",
            specification: {
              Brand: "Apex",
              Colors: ["Beige", "Navy Blue"],
            },
            itemManualDetails:
              "I lost a suitcase in the Dhanmondi area. It may be in the Panthapath or West Razabazar area. This sutecase has a scratch back to this sutecase. It looks like it is in used.",
          },
          date: "2025-04-15T10:08:46.718",
          status: "Finding",
        },
      ],
      found: [
        {
          id: "#557F",
          isWhere: "location",
          where: {
            areas: "dhaka",
            localAreas: [""],
          },
          when: "2025-04-15T06:00:00.000",
          what: {
            category: "Jewelry",
            subCategory: "Earrings",
            specification: {
              Material: "Diamond",
              Model: "adsa",
              Colors: ["Pearl White", "Ivory"],
              "Weight (grams)": "2",
            },
            itemManualDetails: "dsadas",
          },
          questions: {
            questions: [
              "report by asking specific question?",
              "Do you want to verify this report?",
            ],
          },
          date: "2025-04-15T09:54:48.241",
          status: "Waiting",
        },
      ],
    };
  },
  actions: {
    addReport(reportType, report) {
      this[reportType].push(report);
      router.push("/dashboard/active-reports");
    },
  },
});
