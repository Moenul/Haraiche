<template>
  <span class="col-span-3 text-center text-lg text-danger" v-if="isEmpty">No Matched found!</span>
  <div
    v-else
    v-for="matched in modelValue"
    :key="matched.id"
    :class="{
      'text-text/50': ['Approved', 'Rejected', 'Accepted', 'Canceled'].includes(matched.status),
    }"
    class="matchedItem rounded-sm overflow-hidden shadow"
  >
    <div
      :class="reportType === 'lost' ? 'bg-primary' : 'bg-secondary'"
      class="matchedValue w-full px-2 py-1"
    >
      {{ matched.matchRate }} matchd data

      <!-- status notify -->
      <template v-if="['Approved', 'Rejected', 'Accepted', 'Canceled'].includes(matched.status)">
        <span
          class="float-right text-black font-semibold px-2 rounded shadow-sm"
          :class="{
            'bg-primaryDeep': ['Approved', 'Accepted'].includes(matched.status),
            'bg-danger': ['Rejected', 'Canceled'].includes(matched.status),
          }"
        >
          {{ matched.status }}
        </span>
      </template>
      <!-- status notify -->
    </div>
    <div
      :class="reportType === 'lost' ? 'bg-primary/40' : 'bg-secondary/40'"
      class="matchedDetails w-full px-2 py-1 text-base"
    >
      <p class="flex gap-2 items-center">
        <template v-if="matched.isWhere === 'location'"
          ><Icon class="min-w-4" icon="tdesign:location-filled" />
          <span>{{ matched.where.areas }}</span></template
        >
        <template v-else
          ><Icon class="min-w-4" icon="streamline:street-road-solid" />
          <span>{{ matched.where.transportType }}</span></template
        >
      </p>

      <p class="flex gap-2 items-center">
        <Icon class="min-w-4" icon="garden:shapes-26" />
        <span class="flex items-center text-nowrap">
          {{ matched.what.category }}
          <Icon icon="material-symbols:arrow-right" />
          {{ matched.what.subCategory }}
        </span>
      </p>
      <p class="flex gap-2 items-center">
        <Icon class="min-w-4" icon="uim:calender" />
        <span>{{ dateTimeFormatter(matched.when, { date: true }) }}</span>
      </p>
    </div>
    <div class="triggerBtn">
      <!-- Lost portal -->
      <template v-if="matched.status === 'Waiting'">
        <button
          @click="makeRequest(matched.id, matched.questions)"
          class="w-full py-2 md:py-1 bg-secondary hover:bg-secondaryDeep"
        >
          Make Request
        </button>
      </template>
      <template v-if="matched.status === 'Requested'">
        <button class="w-full py-2 md:py-1 bg-info" disabled>Wait for approve</button>
      </template>
      <template v-if="matched.status === 'Approved'">
        <RouterLink to="/dashboard/get-item">
          <button class="w-full py-2 md:py-1 text-text bg-primary hover:bg-primaryDeep">
            Get Item
          </button>
        </RouterLink>
      </template>
      <template v-if="matched.status === 'Rejected'">
        <button
          @click="makeRequest(matched.id, matched.questions)"
          class="w-full py-2 md:py-1 text-text bg-secondary hover:bg-secondaryDeep"
        >
          Make Re Request
        </button>
      </template>

      <!-- Found portal -->
      <template v-if="matched.status === 'Request'">
        <button
          @click="goToVerify(matched)"
          class="w-full py-2 md:py-1 text-center bg-primary/80 hover:bg-primary"
        >
          Verify Request
        </button>
      </template>
      <template v-if="matched.status === 'Accepted'">
        <button
          @click="goToVerify(matched)"
          class="w-full py-2 md:py-1 text-text text-center bg-secondary hover:bg-secondaryDeep"
        >
          View Request
        </button>
      </template>
      <template v-if="matched.status === 'Canceled'">
        <router-link to="/dashboard/verify-report"
          ><button disabled class="w-full py-2 md:py-1 text-center bg-secondary">
            View Request
          </button></router-link
        >
      </template>
    </div>
  </div>

  <!-- Answer Question Modal -->
  <AnswerQuestions
    v-model="allQuestions"
    :answerModal="answerModal"
    :reportId="reportId"
    :matchedId="requestReportId"
    @closeModal="closeModal()"
  ></AnswerQuestions>
  <!-- Answer Question Modal -->
</template>
<script setup>
import { Icon } from "@iconify/vue";
// import { useDateFormat } from "@vueuse/core";
import AnswerQuestions from "../answerQuestions/AnswerQuestions.vue";
import { computed, ref } from "vue";
import { useReportStore } from "@/stores/report";
import { useVerifyReportStore } from "@/stores/verifyReport";
import { dateTimeFormatter } from "@/utils/formatters";

const props = defineProps({
  modelValue: Array,
  reportId: String,
  reportType: String,
});

const isEmpty = computed(() => {
  return !props.modelValue || props.modelValue.length === 0;
});

// const formattedDate = (date) => {
//   return useDateFormat(date, "DD MMM YYYY");
// };

const reportStore = useReportStore();

const answerModal = ref(false);

const closeModal = () => {
  answerModal.value = false;
};

const allQuestions = ref({});

const requestReportId = ref();

const makeRequest = (id, questions) => {
  if (questions.length !== 0) {
    answerModal.value = true;
    requestReportId.value = id;
    allQuestions.value = questions;
  } else {
    reportStore.submitRequest(props.reportId, id);
  }
};

const verifyReportStore = useVerifyReportStore();

const goToVerify = (matchedLostReport) => {
  const mainFoundReport = reportStore.getReportById(props.reportId);
  verifyReportStore.verifyData(mainFoundReport, matchedLostReport);
};
</script>
