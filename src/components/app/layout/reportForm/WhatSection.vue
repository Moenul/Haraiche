<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="mt-6">
    <label class="font-bold"
      >What type of item you <span>{{ $route.params.type }}</span
      >?</label
    >

    <fieldset class="md:px-4 py-2 w-full">
      <div
        v-if="errors?.selectedCategory"
        class="text-sm text-danger font-sans font-semibold"
        role="alert"
      >
        {{ errors.selectedCategory }}
      </div>
      <div class="grid grid-cols-2 md:flex md:flex-wrap gap-2 mt-2">
        <button
          v-for="category in categories"
          :key="category.name"
          @click.prevent="modelValue.selectedCategory = category.name"
          class="md:w-40 h-24 border border-lightBorder shadow-sm p-2 rounded-sm flex flex-col items-center text-center cursor-pointer"
          :class="{
            ' bg-primary/30 border-2 border-primaryDeep':
              modelValue.selectedCategory === category.name,
          }"
        >
          <span class="size-14 md:size-16 text-3xl overflow-hidden justify-center"
            ><img class="w-full object-cover" :src="category.icon" :alt="category.icon"
          /></span>
          <span>{{ category.name }}</span>
        </button>
      </div>

      <!-- Item type subcategories -->
      <label for="transportRoute" class="!mt-4 !font-bold inputLabel">Sub Categories:</label>
      <div
        v-if="errors?.selectedSubCategory"
        class="text-sm text-danger font-sans font-semibold"
        role="alert"
      >
        {{ errors.selectedSubCategory }}
      </div>
      <div
        v-if="modelValue.selectedCategory"
        class="grid grid-cols-2 md:flex md:flex-wrap gap-2 mt-2 p-2 rounded-sm border border-lightBorder"
      >
        <button
          v-for="sub in subCategories"
          :key="sub.name"
          @click.prevent="modelValue.selectedSubCategory = sub.name"
          class="md:w-40 h-24 border border-lightBorder shadow-sm p-2 rounded-sm flex flex-col items-center text-center cursor-pointer"
          :class="{
            'bg-primary/30 border-2 border-primaryDeep':
              modelValue.selectedSubCategory === sub.name,
          }"
        >
          <span class="size-14 md:size-16 text-3xl overflow-hidden justify-center"
            ><img class="w-full object-cover" :src="sub.icon" :alt="sub.icon"
          /></span>
          <span>{{ sub.name }}</span>
        </button>
      </div>
      <div v-else class="text-center text-danger/60 mt-2 p-2 rounded-sm border border-danger/60">
        <p>Category not selected!</p>
      </div>

      <!-- Item type details input -->

      <!-- Description -->
      <div class="mt-6">
        <label class="!font-bold !text-base inputLabel"
          >Describe <span>{{ $route.params.type }}</span> item:</label
        >

        <fieldset class="py-2 max-w-xl">
          <div v-if="modelValue.selectedCategory" class="grid gap-2 mt-2">
            <DetailsInput
              :details="categoryDetails"
              v-model="modelValue.dynamicFields"
              :errors="errors"
            ></DetailsInput>

            <DetailsInput
              v-if="modelValue.selectedSubCategory"
              :details="subCategoryDetails"
              v-model="modelValue.dynamicFields"
              :errors="errors"
            ></DetailsInput>
          </div>
          <label for="details" class="inputLabel !mb-1">Details</label>

          <textarea
            v-model="modelValue.itemDetails"
            class="textInput"
            name="details"
            placeholder="Descibe in details"
          ></textarea>
          <div
            v-if="errors?.itemDetails"
            class="text-sm text-danger font-sans font-semibold"
            role="alert"
          >
            {{ errors.itemDetails }}
          </div>
        </fieldset>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import DetailsInput from "@/components/app/layout/reportForm/DetailsInput.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: Object,
  categories: Object,
  subCategories: Object,
  categoryDetails: Object,
  subCategoryDetails: Object,
  errors: Object,
});
defineEmits(["update:modelValue"]);
</script>
