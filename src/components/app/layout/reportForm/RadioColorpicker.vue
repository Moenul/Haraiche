<template>
  <div
    v-for="option in props.options"
    :key="option"
    class="flex items-center bg-primary/15 border border-primary px-3 py-1.5 rounded-sm shadow-sm cursor-pointer"
  >
    <input
      :id="`${option.values}-radio`"
      type="radio"
      :value="`${option.values}`"
      name="colored-radio"
      :style="`background-color:${option.values}; color:${option.values};`"
      class="w-4 h-4 bg-gray-100 border border-primaryDeep focus:ring-primaryDeep focus:ring-2 checked:ring-2 checked:ring-primaryDeep"
    />
    <label
      :for="`${option.values}-radio`"
      class="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
      >{{ option.name }}</label
    >
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});
</script>
