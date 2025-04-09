<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="mt-6">
    <label class="font-bold"
      >When you <span>{{ $route.params.type }}</span
      >?</label
    >
    <fieldset class="px-2 md:px-4 py-2 max-w-full md:max-w-xl">
      <div class="grid gap-2 md:flex md:gap-4">
        <label for="lostDate" class="inputLabel !mb-0"
          ><span class="capitalize">{{ $route.params.type }}</span> Day
          <input
            type="date"
            name="lostDate"
            v-model="modelValue.lostDate"
            :max="formatted"
            class="textInput md:!w-48 border p-2 mt-1"
            required
          />
        </label>

        <label for="lostDate" class="inputLabel !mb-0"
          ><span class="capitalize">{{ $route.params.type }}</span> Time
          <div class="relative">
            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="time"
              id="time"
              class="textInput mt-1 md:!w-40"
              v-model="modelValue.lostTime"
            />
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useDateFormat, useNow } from "@vueuse/core";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: Object,
});
defineEmits(["update:modelValue"]);

const formatted = useDateFormat(useNow(), "YYYY-MM-DD");
</script>
