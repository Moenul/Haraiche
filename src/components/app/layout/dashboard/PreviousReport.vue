<template>
  <!-- Previous Report -->
  <div
    v-for="report in getPreviousReports"
    :key="report.id"
    class="reportBar w-full bg-white border border-lightBorder text-textSecondary/70 rounded-md mb-6 overflow-hidden"
  >
    <div
      :class="report.reportType === 'lost' ? 'bg-danger/30' : 'bg-success/30'"
      class="reportHeader w-full flex justify-between px-4 py-2 border-b border-lightBorder"
    >
      <span class="title">{{ report.reportType }} Report</span>
      <span class="id"
        >ID: <span class="font-semibold">{{ report.id }}</span></span
      >
    </div>
    <div class="reportContainer px-4 py-2">
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <div>
          <p v-if="report.isWhere === 'location'">
            <span class="font-semibold">Location :</span> {{ report.where.areas }}
          </p>
          <p v-else>
            <span class="font-semibold">Transport :</span> {{ report.where.transportType }}
          </p>
          <p><span class="font-semibold">Category :</span> {{ report.what.category }}</p>
          <p><span class="font-semibold">Item :</span> {{ report.what.subCategory }}</p>
          <p>
            <span class="font-semibold">Lost Date :</span>
            {{ formattedDateTime(report.when) }}
          </p>
        </div>
        <div>
          <p><span class="font-semibold">Status :</span> {{ report.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useReportStore } from "@/stores/report";
import { useDateFormat } from "@vueuse/core";

const { getPreviousReports } = useReportStore();

const formattedDateTime = (date) => {
  if (date && date.seconds) {
    const timestamp = date.seconds * 1000; // Convert seconds to milliseconds
    return useDateFormat(new Date(timestamp), "DD MMM YYYY, hh:mm a");
  } else {
    return useDateFormat(date, "DD MMM YYYY, hh:mm a");
  }
};
</script>
