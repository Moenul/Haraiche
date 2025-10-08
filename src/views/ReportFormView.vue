<template>
  <div class="max-w-5xl mx-auto pt-20">
    <div class="reportSection bg-white px-2 md:px-4 py-4 border border-lightBorder rounded-lg">
      <h1 class="text-2xl md:text-3xl text-center">
        Report your <span>{{ reportType }}</span> items
      </h1>

      <!-- <div v-if="errors.message" class="alert alert-info" role="alert">
        {{ errors.message }}
      </div> -->

      <form @submit.prevent="submitForm" class="p-2 md:p-6 mt-4">
        <!-- Where You Lost? -->
        <WhereSection v-model="formStore.whereSection"></WhereSection>
        <!-- Where section end -->

        <!-- When You Lost? -->
        <WhenSection v-model="formStore.whenSection"></WhenSection>

        <!-- What Type of Item? -->
        <WhatSection
          v-model="formStore.whatSection"
          :categories="categoryStore.categories"
          :subCategories="subCategories"
          :categoryDetails="categoryDetails"
          :subCategoryDetails="subCategoryDetails"
          :errors="validationErrors"
        ></WhatSection>

        <!-- Question Section -->
        <QuestionSection
          v-if="$route.params.type === 'found'"
          v-model="formStore.questionSection"
        ></QuestionSection>

        <!-- Submit Button -->
        <button
          type="submit"
          class="mt-6 w-full rounded-full bg-primary text-text px-6 py-3 text-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryDeep focus:ring-offset-2"
        >
          SUBMIT REPORT
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { computed, watch, ref } from "vue";
import { useCategoryStore } from "@/stores/category";
import WhereSection from "@/components/app/layout/reportForm/WhereSection.vue";
import WhenSection from "@/components/app/layout/reportForm/WhenSection.vue";
import WhatSection from "@/components/app/layout/reportForm/WhatSection.vue";
import QuestionSection from "@/components/app/layout/reportForm/QuestionSection.vue";
import { useFormStore } from "@/stores/form";
import router from "@/router";

const formStore = useFormStore();

// initialize category store
const categoryStore = useCategoryStore();

const subCategories = computed(() => {
  return categoryStore.getSubCategories(formStore.whatSection.selectedCategory);
});

const categoryDetails = computed(() => {
  return categoryStore.getCategoryDetails(formStore.whatSection.selectedCategory);
});

// Watch selectedCategory and update dynamicFields
// Category Details dynamicFields input genarate
watch(
  () => formStore.whatSection.selectedCategory,
  (newCategory) => {
    const details = categoryStore.getCategoryDetails(newCategory);

    // Clear only existing keys and add new ones
    Object.keys(formStore.whatSection.dynamicFields).forEach(
      (key) => delete formStore.whatSection.dynamicFields[key]
    );

    details.forEach((detail) => {
      if (detail.type === "select") {
        formStore.whatSection.dynamicFields[detail.name] = "Select " + detail.name;
      } else if (detail.type === "colorPicker") {
        formStore.whatSection.dynamicFields[detail.name] = [];
      } else {
        formStore.whatSection.dynamicFields[detail.name] = "";
      }
    });
  }
);

// Sub Category Details
const subCategoryDetails = computed(() => {
  return categoryStore.getSubCategoryDetails(
    formStore.whatSection.selectedCategory,
    formStore.whatSection.selectedSubCategory
  );
});

// Sub Category Details dynamicFields input genarate
let temp;

watch(
  () => formStore.whatSection.selectedSubCategory,
  (newCategory) => {
    const details = categoryStore.getSubCategoryDetails(
      formStore.whatSection.selectedCategory,
      newCategory
    );

    // Clear only previous keys
    if (temp) {
      Object.keys(temp).forEach(
        (key) => delete formStore.whatSection.dynamicFields[temp[key].name]
      );
    } else {
      console.log("No Temp Data");
    }

    temp = details;

    details.forEach((detail) => {
      if (detail.type === "select") {
        formStore.whatSection.dynamicFields[detail.name] = "Select " + detail.name;
      } else if (detail.type === "colorPicker") {
        formStore.whatSection.dynamicFields[detail.name] = [];
      } else {
        formStore.whatSection.dynamicFields[detail.name] = "";
      }
    });
  }
);

const reportType = computed(() => {
  return router.currentRoute.value.params.type;
});

const validationErrors = ref({});

const submitForm = () => {
  const { isValid, errors } = formStore.validateForm();
  if (!isValid) {
    validationErrors.value = errors; // Store errors in a reactive object
  } else {
    formStore.submitReport(reportType.value);
  }
};
</script>
