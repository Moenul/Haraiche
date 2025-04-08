<template>
  <div>
    <ul class="flex flex-wrap gap-5 w-full mb-2">
      <li v-for="option in options" :key="option.values" class="flex flex-col items-center">
        <input
          type="checkbox"
          :id="`${option.values}-option`"
          :value="option.name"
          v-model="selectedColors"
          class="hidden peer"
        />

        <!-- Rounded Color Swatch -->
        <label
          :for="`${option.values}-option`"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer border-2 border-white/50 shadow-lg peer-checked:ring-2 ring-primaryDeep ring-offset-2 peer-checked:scale-105 transition-all duration-300 ease-in-out hover:scale-105 relative flex items-center justify-center"
          :style="`background-color: ${option.values}`"
        >
          <!-- Checkmark -->
          <Icon
            v-if="selectedColors.includes(option.name)"
            class="w-6 h-6 text-slate-200 drop-shadow-md pointer-events-none"
            icon="material-symbols:done-rounded"
          />
        </label>

        <!-- Color Name Below -->
        <span class="text-sm text-gray-700 mt-1">{{ option.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  modelValue: {
    type: Array, // multi-select
    default: () => [],
  },
  options: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

// Use computed to handle v-model synchronization
const selectedColors = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>
