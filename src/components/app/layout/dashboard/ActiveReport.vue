<template>
  <ReportCard v-model="getActiveReports" v-if="getActiveReports.length >= 0"></ReportCard>
  <p v-else class="text-center text-lg text-errors">No Active Request Found!</p>
</template>
<script setup>
import { useReportStore } from "@/stores/report";
import ReportCard from "./reportCard/ReportCard.vue";

const { getActiveReports } = useReportStore();
</script>
<style>
.findSearchIcon {
  animation-name: findSearchIcon;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.waitTimeIcon {
  animation-name: waitTimeIcon;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes findSearchIcon {
  from {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(20px) rotate(90deg);
  }
  to {
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes waitTimeIcon {
  from {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(25deg);
  }
  to {
    transform: rotate(-25deg);
  }
}
</style>
