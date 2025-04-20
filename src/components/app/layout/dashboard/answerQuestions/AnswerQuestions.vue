<template>
  <transition name="fade">
    <div
      v-show="answerModal === true"
      class="answerModal fixed top-0 left-0 w-full h-screen bg-black/10 z-50"
    >
      <div
        class="modalContainer w-11/12 md:max-w-2xl absolute left-0 right-0 m-auto top-36 md:top-20 px-4 py-2 bg-white border border-lightBorder ring-1 ring-secondaryDeep rounded shadow-sm"
      >
        <div
          class="modalNav pt-1 pb-2 flex justify-between items-center border-b border-lightBorder"
        >
          <p class="text-lg">Answer to verify</p>
          <button @click.prevent="$emit('closeModal')" class="text-danger text-3xl">
            <Icon icon="typcn:delete" />
          </button>
        </div>
        <form @submit.prevent="handleSubmit(reportId, matchedId)">
          <div class="answerBar my-2 px-2 md:px-4">
            <ul class="grid gap-1">
              <li v-for="qs in modelValue" :key="qs" class="mb-2">
                <div class="grid gap-1">
                  <p class="question font-semibold capitalize">{{ qs.question }}</p>
                  <input
                    class="w-full px-4 py-2 border border-lightBorder text-sm rounded-md shadow-sm focus:outline focus:outline-secondary"
                    type="text"
                    v-model="qs.answer"
                    placeholder="Enter your answer"
                    required
                  />
                </div>
              </li>
            </ul>

            <button
              type="submit"
              class="submitMakeRequest w-full py-2 text-md md:text-lg bg-secondary/70 hover:bg-secondary rounded-sm capitalize mt-4 focus:ring-2 focus:ring-secondaryDeep"
            >
              Submit to make request
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useReportStore } from "@/stores/report";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: Array,
  answerModal: Boolean,
  reportId: String,
  matchedId: String,
});

const emit = defineEmits(["closeModal"]);

const reportStore = useReportStore();

async function handleSubmit(reportId, matchedId) {
  const success = await reportStore.submitRequest(reportId, matchedId);

  if (success) {
    emit("closeModal");
  } else {
    alert("Submission failed. Try again!");
  }
}
</script>
