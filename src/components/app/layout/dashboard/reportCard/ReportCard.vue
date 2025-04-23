<template>
  <div
    v-for="report in modelValue"
    :key="report"
    class="reportBar w-full bg-white border border-lightBorder rounded-md mb-6 overflow-hidden"
  >
    <!-- Report Header -->
    <div
      :class="report.reportType === 'lost' ? 'bg-danger/30' : 'bg-success/30'"
      class="reportHeader w-full flex justify-between px-4 py-2 border-b border-lightBorder"
    >
      <span class="title capitalize">{{ report.reportType }} Report</span>
      <span class="id"
        >ID: <span class="font-semibold">{{ report.id }}</span></span
      >
    </div>
    <!-- Report Container -->
    <div class="reportContainer px-4 py-2">
      <!-- Report Details -->
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <div class="details">
          <p v-if="report.isWhere === 'location'">
            <span class="font-semibold">Location :</span> {{ report.where.areas }}
          </p>
          <p v-else>
            <span class="font-semibold">Transport :</span> {{ report.where.transportType }}
          </p>

          <p><span class="font-semibold">Category :</span> {{ report.what.category }}</p>
          <p><span class="font-semibold">Item :</span> {{ report.what.subCategory }}</p>
          <p><span class="font-semibold">Lost Date :</span> {{ formattedDateTime(report.when) }}</p>
        </div>
        <div class="date">
          <p><span class="font-semibold">Status :</span> {{ report.status }}</p>
          <template v-if="report.reportType === 'lost'">
            <p>
              <span class="font-semibold">Matched Report :</span>
              {{ report.matchedReport?.length || 0 }}
            </p>
          </template>
          <template v-else>
            <p>
              <span class="font-semibold">Get Request :</span>
              {{ report.requestReport?.length || 0 }}
            </p>
          </template>
        </div>
      </div>

      <!-- Matched Reoprts -->
      <transition name="shutter">
        <div
          v-show="isMatchedVisible(report.id)"
          class="matchedReport transition-all duration-300 ease-in-out w-full mt-2 py-2 grid md:grid-cols-3 gap-3 border-t border-lightBorder"
        >
          <MatchedReportCard
            v-if="report.reportType === 'lost'"
            v-model="report.matchedReport"
            :reportId="report.id"
            :reportType="report.reportType"
          />

          <MatchedReportCard
            v-else
            v-model="report.requestReport"
            :reportId="report.id"
            :reportType="report.reportType"
          />
        </div>
      </transition>
    </div>
    <!-- Report Footer -->
    <div class="reportFooter px-4 py-2 mb-2 grid grid-cols-1 gap-4 md:flex justify-between">
      <template v-if="report.reportType === 'lost'">
        <div class="findingMsg text-lg flex items-center gap-6">
          <span class="findSearchIcon text-3xl"><Icon icon="flowbite:search-outline" /></span>
          <p>Finding to matche ...</p>
        </div>
      </template>
      <template v-else>
        <div class="waitingMsg text-lg flex items-center gap-6">
          <span class="waitTimeIcon text-3xl"><Icon icon="game-icons:sands-of-time" /></span>
          <p>Wating for request ...</p>
        </div>
      </template>

      <div class="buttons flex gap-2 justify-end">
        <button
          @click="toggleShowMatched(report.id)"
          class="px-4 py-1 rounded bg-primary/80 hover:bg-primary"
        >
          {{ isMatchedVisible(report.id) ? "See less" : "See more" }}
        </button>
        <button class="px-4 py-1 rounded bg-danger/80 hover:bg-danger">Delete</button>
      </div>
    </div>
  </div>
  <button class="p-2 bg-info" @click="reportStore.resetLocalStorage">Clear Storage</button>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useDateFormat } from "@vueuse/core";
import { ref } from "vue";
import MatchedReportCard from "../matchedReportCard/MatchedReportCard.vue";
import { useReportStore } from "@/stores/report";

const props = defineProps({
  modelValue: Object,
});

const reportStore = useReportStore();

const formattedDateTime = (date) => {
  return useDateFormat(date, "DD MMM YYYY, hh:mm a");
};

// Initialize the map with all reports defaulting to true
const isShowMatchedMap = ref(Object.fromEntries((props.modelValue || []).map((r) => [r.id, true])));

const toggleShowMatched = (id) => {
  isShowMatchedMap.value[id] = !isShowMatchedMap.value[id];
};

const isMatchedVisible = (id) => isShowMatchedMap.value[id];
</script>
