<template>
  <div class="requestReport w-full bg-white px-4 py-2 pb-4 border border-lightBorder rounded-md">
    <h1 class="text-xl text-textSecondary py-2 border-b border-lightBorder">Verify Report</h1>

    <div class="reportDataStatus mt-4">
      <ul class="w-full grid gap-1">
        <li
          v-for="[key, report] in verifiedFields"
          :key="key"
          class="md:flex justify-normal items-center gap-1 text-md"
        >
          <!-- <template v-if="key !== 'questions' && key !== 'details' && key !== 'matchRate'"> -->
          <label class="font-semibold w-fit inline-block mr-1 capitalize"
            >{{ keyFormatter(key) }}:
          </label>
          <template v-if="Array.isArray(report.lost)">
            <div class="inline-block divide-x-2 divide-lightBorder">
              <span
                class="inline-block mr-1 pl-1"
                v-for="(item, index) in report.lost"
                :key="index"
              >
                {{ item }}</span
              >
            </div>
          </template>

          <template v-else-if="!Array.isArray(report.lost) && !isNaN(Date.parse(report.lost))">
            <span class="inline-block mr-1">{{ dateTimeFormatter(report.lost) }}</span>
          </template>

          <template v-else>
            <span class="inline-block mr-1">{{ report.lost }}</span>
          </template>
          <Icon
            v-if="report.isMatched"
            class="text-2xl text-success inline-block"
            icon="flowbite:badge-check-solid"
          />

          <Icon
            v-else
            class="text-2xl text-danger inline-block"
            icon="material-symbols:brightness-alert-rounded"
          />
          <!-- </template> -->
        </li>
        <li>
          <label class="font-semibold w-fit inline-block mr-1 capitalize">Details: </label>
          <span class="inline-block mr-1">{{ verifiedReport["details"].lost }}</span>
        </li>
      </ul>

      <div v-if="verifiedReport['questions']" class="questionAndAnswer mt-4">
        <ol class="list-decimal list-outside ml-4 grid gap-1">
          <li v-for="(lost, index) in verifiedReport.questions.lost" :key="index">
            <p class="question font-semibold">{{ lost.question }}</p>
            <p class="answred text-textSecondary">
              <span class="text-muted font-semibold">Answer:</span> {{ lost.answer }}
            </p>
          </li>
        </ol>
      </div>

      <div class="dataMatchRate text-xl font-mono px-4 py-2 mt-4 bg-success/30 rounded">
        {{ verifiedReport["matchRate"].lost }} matchd data.
      </div>

      <!-- validationConfirmation Section -->
      <div
        v-show="!verifiedReport['isApproved']"
        class="validationConfirmationSection w-full p-2 mt-4 bg-info/10 border border-info rounded shadow-sm"
      >
        <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
          <span class="text-muted w-6 flex-none text-center text-2xl font-mono">!</span>
          <p>
            Is this request are looks valid? <br />
            If valid click to
            <span class="font-semibold text-primaryDeep text-nowrap">"Approve Request"</span> to
            share your contact info. Otherwise click to
            <span class="font-semibold text-reportInfo text-nowrap">"Not Valid"</span> to deny this
            request.
          </p>
        </div>
        <div class="validationButtons flex rounded overflow-hidden">
          <button
            @click="verifiedReportStore.denyRequest(route.params.id, route.query.request_id)"
            class="w-full px-4 py-2 text-lg text-nowrap bg-reportInfo/70 hover:bg-reportInfo transition-all duration-300 ease-in-out"
          >
            Not Valid
          </button>
          <button
            @click="verifiedReportStore.approveRequest(route.params.id, route.query.request_id)"
            class="w-full px-4 py-2 text-lg text-nowrap bg-primaryDeep/70 hover:bg-primaryDeep transition-all duration-300 ease-in-out"
          >
            Approve Request
          </button>
        </div>
      </div>

      <!-- Validation Success Section -->
      <transition name="fade">
        <div
          v-show="verifiedReport['isApproved']"
          class="validationSuccessSection w-full p-2 mt-4 bg-primary/10 border border-primary rounded shadow-sm"
        >
          <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
            <span class="text-muted w-6 flex-none text-center text-2xl font-mono">!</span>
            <p>
              Thank you! We've notified the item owner to confirm the match. They can now get in
              touch with you. Please wait for their call or message.
            </p>
          </div>

          <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
            <span class="text-muted w-6 flex-none text-center text-2xl font-mono mt-1"
              ><Icon icon="fluent:ribbon-star-32-filled"
            /></span>
            <p>
              Once the owner confirms the handover, you will earn
              <span class="font-semibold text-reportInfo text-nowrap">"Respect"</span> reward points
              as a thank-you for your honesty. We really appreciate what you have done!
            </p>
          </div>

          <div
            class="successButtons w-full py-2 text-lg text-center bg-primary/20 border-2 border-primary rounded"
          >
            Request successfully approved
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { useVerifyReportStore } from "@/stores/verifyReport";
import { computed } from "vue";
import { keyFormatter, dateTimeFormatter } from "@/utils/formatters";

const route = useRoute();

const verifiedReportStore = useVerifyReportStore();

const { verifiedReport } = useVerifyReportStore();

const verifiedFields = computed(() =>
  Object.entries(verifiedReport).filter(
    ([key]) =>
      key !== "details" && key !== "questions" && key !== "matchRate" && key !== "isApproved"
  )
);
</script>
