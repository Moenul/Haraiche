<template>
  <div
    class="questionSection w-full p-2 mt-4 bg-secondary/20 border border-secondary rounded shadow-sm"
  >
    <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
      <span class="text-muted w-12 md:w-7 text-center text-2xl font-mono">Q</span>
      <p>Do you want to verify this report by asking specific question?</p>
    </div>

    <div
      :class="modelValue.questions.length > 0 ? 'block' : 'hidden'"
      class="askedQuestionAndAnswer w-full px-4 py-2 mb-4 bg-info/20 border border-info rounded"
    >
      <ol class="list-decimal list-outside ml-3 grid gap-1">
        <li v-for="question in modelValue.questions" :key="question">
          <div class="flex gap-2">
            <p class="question font-semibold">{{ question }}</p>
            <button
              @click.prevent="formStore.removeQuestion(question)"
              class="text-danger text-2xl"
            >
              <Icon icon="typcn:delete" />
            </button>
          </div>
        </li>
      </ol>
    </div>
    <div class="grid md:flex w-full">
      <input
        v-model="questionInput"
        type="text"
        placeholder="There are any scratch on your item?"
        class="w-full rounded-t-sm md:rounded-r-none md:rounded-l-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-info"
      />
      <button
        @click.prevent="[formStore.addQuestion(questionInput), clearQuestionInput()]"
        :disabled="!questionInput"
        type="submit"
        class="text-nowrap px-4 py-2 rounded-b-sm md:rounded-l-none md:rounded-r-sm bg-info/70 hover:bg-info transition-all duration-300 ease-in-out"
      >
        Add question +
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useFormStore } from "@/stores/form";

const formStore = useFormStore();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: Array,
});
// defineEmits(["update:modelValue"]);

// Questions
const questionInput = ref();

const clearQuestionInput = () => {
  questionInput.value = "";
};
</script>
