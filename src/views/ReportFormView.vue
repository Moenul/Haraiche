<template>
  <div class="container pt-20">
    <div class="reportSection bg-white px-2 md:px-4 py-4 border border-lightBorder rounded-lg">
      <h1 class="text-2xl md:text-3xl text-center">
        Report your <span>{{ $route.params.type }}</span> items
      </h1>

      <!-- <div v-if="errors.message" class="alert alert-info" role="alert">
        {{ errors.message }}
      </div> -->

      <form @submit.prevent="submitForm" class="p-2 md:p-6 mt-4">
        <!-- Where You Lost? -->
        <WhereSection
          v-model="form.whereSection"
          @addLocalArea="addLocalArea"
          @removeLocalArea="removeLocalArea"
          @addTransportRouteArea="addTransportRouteArea"
          @removeTransportRouteArea="removeTransportRouteArea"
        ></WhereSection>
        <!-- Where section end -->

        <!-- When You Lost? -->
        <WhenSection v-model="form.whenSection"></WhenSection>

        <!-- What Type of Item? -->
        <WhatSection
          v-model="form.whatSection"
          :categories="categoryStore.categories"
          :subCategories="subCategories"
          :categoryDetails="categoryDetails"
          :subCategoryDetails="subCategoryDetails"
        ></WhatSection>

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
import { computed, reactive, watch } from "vue";
import { useCategoryStore } from "@/stores/category";
import WhereSection from "@/components/app/layout/reportForm/WhereSection.vue";
import WhenSection from "@/components/app/layout/reportForm/WhenSection.vue";
import WhatSection from "@/components/app/layout/reportForm/WhatSection.vue";

const form = reactive({
  whereSection: {
    lostWhere: "location",
    areas: "",
    localAreas: [""],
    transports: ["Bus", "Car", "Train", "Plane"],
    transportType: "Car",
    transportName: "",
    transportRouteArea: [""],
  },
  whenSection: {
    lostDate: "",
    lostTime: "06:00",
  },
  whatSection: {
    selectedCategory: "",
    selectedSubCategory: "",
    itemDetails: "",
    dynamicFields: {},
  },
});

// Additional Area
const addLocalArea = () => form.whereSection.localAreas.push("");

const removeLocalArea = (index) => {
  form.whereSection.localAreas.splice(index, 1);
};

// Additional Transport Area
const addTransportRouteArea = () => form.whereSection.transportRouteArea.push("");

const removeTransportRouteArea = (index) => {
  form.whereSection.transportRouteArea.splice(index, 1);
};

// initialize category store
const categoryStore = useCategoryStore();

const subCategories = computed(() => {
  return categoryStore.getSubCategories(form.whatSection.selectedCategory);
});

const categoryDetails = computed(() => {
  return categoryStore.getCategoryDetails(form.whatSection.selectedCategory);
});

// Watch selectedCategory and update dynamicFields
// Category Details dynamicFields input genarate
watch(
  () => form.whatSection.selectedCategory,
  (newCategory) => {
    const details = categoryStore.getCategoryDetails(newCategory);

    // Clear only existing keys and add new ones
    Object.keys(form.whatSection.dynamicFields).forEach(
      (key) => delete form.whatSection.dynamicFields[key]
    );

    details.forEach((detail) => {
      if (detail.type === "select") {
        form.whatSection.dynamicFields[detail.name] = "Select " + detail.name;
      } else if (detail.type === "colorPicker") {
        form.whatSection.dynamicFields[detail.name] = [""];
      } else {
        form.whatSection.dynamicFields[detail.name] = "";
      }
    });
  }
);

// Sub Category Details
const subCategoryDetails = computed(() => {
  return categoryStore.getSubCategoryDetails(
    form.whatSection.selectedCategory,
    form.whatSection.selectedSubCategory
  );
});

let temp;

// Sub Category Details dynamicFields input genarate
watch(
  () => form.whatSection.selectedSubCategory,
  (newCategory) => {
    const details = categoryStore.getSubCategoryDetails(
      form.whatSection.selectedCategory,
      newCategory
    );

    // Clear only previous keys
    if (temp) {
      Object.keys(temp).forEach((key) => delete form.whatSection.dynamicFields[temp[key].name]);
    } else {
      console.log("No Temp Data");
    }

    temp = details;

    details.forEach((detail) => {
      if (detail.type === "select") {
        form.whatSection.dynamicFields[detail.name] = "Select " + detail.name;
      } else if (detail.type === "colorPicker") {
        form.whatSection.dynamicFields[detail.name] = [""];
      } else {
        form.whatSection.dynamicFields[detail.name] = "";
      }
    });
  }
);

const submitForm = () => {
  console.log("Form Submitted");
};
</script>
<style scoped lang="postcss">
.textInput {
  @apply mb-2 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryDeep focus:border-primaryDeep block w-full p-2.5;
}
</style>
