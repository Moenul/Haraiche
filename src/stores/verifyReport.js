import { defineStore } from "pinia";
import router from "@/router";

export const useVerifyReportStore = defineStore("verifyReportStore", {
  state: () => {
    return {
      verifiedReport: {},
    };
  },
  actions: {
    async verifyData(matched, currentReport) {
      console.log(matched);
      console.log(currentReport);

      router.push({
        name: "VerifyReport",
        params: { id: currentReport.id },
        query: { request_id: matched.id },
      });
    },
  },
  getters: {},
});
