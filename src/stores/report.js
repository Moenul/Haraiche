import { defineStore } from "pinia";

export const useReportStore = defineStore("reportStore", {
  state: () => {
    return {
      lost: [],
      found: [],
    };
  },
  actions: {
    addReport(reportType, report) {
      this[reportType].push(report);
    },
  },
});
