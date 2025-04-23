/* eslint-disable no-unused-vars */
import router from "@/router";
import { defineStore } from "pinia";

export const useReportStore = defineStore("reportStore", {
  state: () => {
    return {
      reports: [
        // Lost Item Report
        {
          reportType: "lost",
          id: "437L",
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
          isActive: true,
          matchedReport: [
            {
              id: "557F",
              isWhere: "location",
              where: {
                areas: "Dhaka, Dhaka",
              },
              when: "2025-04-15T06:00:00.000",
              what: {
                category: "Bags and Suitcases",
                subCategory: "Suitcase",
              },
              questions: [
                {
                  question: "What color is it on this cats legs?",
                  answer: "",
                },
                {
                  question: "What is name wite on his loket?",
                  answer: "",
                },
              ],
              matchRate: "60%",
              status: "Waiting",
              isActive: true,
            },
          ],
        },
        // Found Item Report
        {
          reportType: "found",
          id: "557F",
          isWhere: "location",
          where: {
            areas: "Dhaka, Dhanmondi",
            localAreas: ["Dhanmondi, West Rajabazar", "Firmgate"],
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
          isActive: true,
          requestReport: [
            {
              id: "437L",
              isWhere: "location",
              where: {
                areas: "Dhaka, Dhanmondi",
                localAreas: ["Rajabazar", "Dhanmondi, West Rajabazar"],
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
              matchRate: "70%",
              questions: [
                {
                  question: "What color is it on this cats legs?",
                  answer: "There are a black sport no the left leg.",
                },
                {
                  question: "What is name wite on his loket?",
                  answer: "The name on the loket is Jemmy.",
                },
              ],
              status: "Request",
              isActive: true,
            },
          ],
        },
      ],
    };
  },
  getters: {
    // getters
    getActiveReports: (state) => {
      return state.reports
        .filter((r) => r.isActive)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    getReportById: (state) => {
      return (id) => {
        const report = state.reports.find((r) => r.id === id);
        if (!report) return null;

        // Return a shallow copy without `requestedReports`
        const { requestReport, ...rest } = report;
        return rest;
      };
    },
  },
  actions: {
    addReport(report) {
      this.reports.push(report);
      router.push("/dashboard/active-reports");
    },
    async submitRequest(reportId, matchedId) {
      const lostReport = this.reports.find((report) => report.id === reportId);

      const requestedMatchedReport = lostReport.matchedReport.find(
        (matchR) => matchR.id === matchedId
      );

      const requestForm = {
        id: lostReport.id,
        isWhere: lostReport.isWhere,
        where: lostReport.where,
        when: lostReport.when,
        what: lostReport.what,
        date: lostReport.date,
        matchRate: requestedMatchedReport.matchRate,
        questions: requestedMatchedReport.questions,
        status: "Request",
        isActive: true,
      };

      const matchedFoundReport = this.reports.find((report) => report.id === matchedId);

      try {
        return [
          matchedFoundReport.requestReport.push(requestForm),
          (requestedMatchedReport.status = "Requested"),
        ];
      } catch (e) {
        console.error("Submission error:", e);
        return false;
      }
    },
    acceptRequest(mainFoundReportId, matchedLostReport) {
      try {
        // Found report status
        const foundRepoer = this.reports.find(
          (report) => report.reportType === "found" && report.id === mainFoundReportId
        );
        foundRepoer.status = "Matched";
        foundRepoer.requestReport.find((report) => report.id === matchedLostReport).status =
          "Accepted";

        // Lost report status
        const lostReport = this.reports.find(
          (report) => report.reportType === "lost" && report.id === matchedLostReport
        );
        lostReport.status = "Founded";
        lostReport.matchedReport.find((report) => report.id === mainFoundReportId).status =
          "Approved";
      } catch (e) {
        console.error("Error accepting request:", e);
      }
    },
    rejectRequest(mainFoundReportId, matchedLostReport) {
      try {
        // Found report status
        const foundRepoer = this.reports.find(
          (report) => report.reportType === "found" && report.id === mainFoundReportId
        );
        foundRepoer.status = "Waiting";
        foundRepoer.requestReport.find((report) => report.id === matchedLostReport).status =
          "Canceled";

        // Lost report status
        const lostReport = this.reports.find(
          (report) => report.reportType === "lost" && report.id === matchedLostReport
        );
        lostReport.status = "Finding";
        lostReport.matchedReport.find((report) => report.id === mainFoundReportId).status =
          "Rejected";
      } catch (e) {
        console.error("Error accepting request:", e);
      }
    },

    resetLocalStorage() {
      localStorage.removeItem("reportStore");
      localStorage.removeItem("verifyReportStore");
      this.$reset();
      console.log("Local storage cleared");
      router.go(0);
    },
  },
  persist: true,
});
