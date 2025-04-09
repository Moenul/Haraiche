<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div v-for="detail in props.details" :key="detail.name">
    <label :for="`${detail.name}`" class="inputLabel !mb-1">{{ detail.name }}</label>
    <template v-if="detail.type === 'text'">
      <input
        type="text"
        :name="detail.name"
        v-model="modelValue[detail.name]"
        class="textInput"
        :placeholder="`Enter ` + detail.name"
      />
      <div
        v-if="errors?.[detail.name]"
        class="text-sm text-danger font-sans font-semibold"
        role="alert"
      >
        {{ errors[detail.name] }}
      </div>
    </template>
    <template v-else-if="detail.type === 'select'">
      <select id="countries" class="textInput" v-model="modelValue[detail.name]">
        <option selected disabled>Select {{ detail.name }}</option>
        <option v-for="option in detail.option" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </template>
    <template v-else-if="detail.type === 'colorPicker'">
      <div class="w-full">
        <CheckboxColorpicker :options="detail.option" v-model="modelValue[detail.name]" />
        <!-- <RadioColorpicker :options="detail.option"></RadioColorpicker> -->
      </div>
      <div
        v-if="errors?.[detail.name]"
        class="text-sm text-danger font-sans font-semibold"
        role="alert"
      >
        {{ errors[detail.name] }}
      </div>
    </template>

    <template v-else>
      <input
        :type="detail.type"
        :name="detail.name"
        v-model="modelValue[detail.name]"
        class="textInput"
        :placeholder="`Enter ` + detail.name"
      />
      <div
        v-if="errors?.[detail.name]"
        class="text-sm text-danger font-sans font-semibold"
        role="alert"
      >
        {{ errors[detail.name] }}
      </div>
    </template>
  </div>
</template>
<script setup>
import CheckboxColorpicker from "./CheckboxColorpicker.vue";
// import RadioColorpicker from './RadioColorpicker.vue';
import { defineProps } from "vue";

const props = defineProps({
  modelValue: Object,
  details: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
  },
});

defineEmits(["update:modelValue"]);
</script>
