import { defineStore } from "pinia";
import router from "@/router";
import { useReportStore } from "@/stores/report";

export const useVerifyReportStore = defineStore("verifyReportStore", {
  state: () => {
    return {
      verifiedReport: {},
    };
  },
  actions: {
    async verifyData(mainFoundReport, matchedLostReport) {
      if (this.verifiedReport.isApproved) {
        return router.push({
          name: "VerifyReport",
          params: { id: mainFoundReport.id },
          query: { request_id: matchedLostReport.id },
        });
      }

      const validationResult = {};

      const validateField = (key, lost, found, isArray = false) => {
        let isMatched = false;

        if (isArray) {
          const matchedData = lost.filter((data) =>
            (found || []).map((f) => f.toLowerCase()).includes(data.toLowerCase())
          );
          if (matchedData.length > 0) isMatched = true;
        } else {
          isMatched = lost === found;
        }

        validationResult[key] = {
          lost: lost,
          isMatched,
        };
      };

      if (matchedLostReport.isWhere === "location") {
        // Compare area
        Object.entries(matchedLostReport.where).forEach(([key, value]) => {
          let isArray = false;
          if (typeof value === "object") {
            isArray = true;
          }
          validateField(key, value, mainFoundReport.where?.[key], isArray);
        });
      } else {
        // Compare transport
        Object.entries(matchedLostReport.where).forEach(([key, value]) => {
          let isArray = false;
          if (typeof value === "object") {
            isArray = true;
          }
          validateField(key, value, mainFoundReport.where?.[key], isArray);
        });
      }

      // Compare date
      validationResult.date = {
        lost: matchedLostReport.when,
        isMatched: new Date(matchedLostReport.when) <= new Date(mainFoundReport.when),
      };

      // Compare category
      validateField("category", matchedLostReport.what?.category, mainFoundReport.what?.category);

      // Compare subCategory
      validateField("item", matchedLostReport.what?.subCategory, mainFoundReport.what?.subCategory);

      // Compare item spacification
      Object.entries(matchedLostReport.what?.specification).forEach(([key, value]) => {
        let isArray = false;
        if (typeof value === "object") {
          isArray = true;
        }
        validateField(key, value, mainFoundReport.what?.specification?.[key], isArray);
      });

      validationResult["details"] = {
        lost: matchedLostReport.what?.itemManualDetails,
      };
      validationResult["questions"] = {
        lost: matchedLostReport.questions,
      };

      const totalFields = Object.keys(validationResult).filter(
        (key) => key !== "details" && key !== "questions"
      ).length;

      const matchedFields = Object.values(validationResult).filter(
        (field) => field?.isMatched
      ).length;

      const matchRate = Math.round((matchedFields / totalFields) * 100);

      validationResult["matchRate"] = {
        lost: `${matchRate}%`,
      };

      validationResult["isApproved"] = false;

      this.verifiedReport = validationResult;

      // Navigate to the VerifyReport page with the matchedLostReport ID and current report ID
      router.push({
        name: "VerifyReport",
        params: { id: mainFoundReport.id },
        query: { request_id: matchedLostReport.id },
      });
    },
    approveRequest(mainFoundReportId, matchedLostReport) {
      try {
        const reportStore = useReportStore();
        reportStore.acceptRequest(mainFoundReportId, matchedLostReport);
        this.verifiedReport.isApproved = true;
      } catch (e) {
        console.error("Error accepting request:", e);
      }
    },
    denyRequest(mainFoundReportId, matchedLostReport) {
      try {
        const reportStore = useReportStore();
        reportStore.rejectRequest(mainFoundReportId, matchedLostReport);
        router.back();
      } catch (e) {
        console.error("Error accepting request:", e);
      }
    },
  },
  getters: {},
  persist: true,
});
