<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <label class="font-bold"
      >Where you <span>{{ $route.params.type }}</span
      >?</label
    >

    <fieldset class="px-2 md:px-4 py-2 max-w-full md:max-w-xl">
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
          <input
            id="location"
            name="lostWhere"
            type="radio"
            v-model="modelValue.lostWhere"
            value="location"
            class="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
          />
          <label
            for="location"
            class="block text-sm/6 cursor-pointer font-medium text-gray-900 capitalize"
            >Location</label
          >
        </div>
        <div class="flex items-center gap-2">
          <input
            id="transport"
            name="lostWhere"
            v-model="modelValue.lostWhere"
            value="transport"
            type="radio"
            class="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
          />
          <label
            for="transport"
            class="block text-sm/6 cursor-pointer font-medium text-gray-900 capitalize"
            >Transport</label
          >
        </div>
      </div>

      <div v-if="modelValue.lostWhere === 'location'" class="mt-4">
        <div class="mb-2">
          <label for="localAreas" class="inputLabel"
            ><span class="capitalize">{{ $route.params.type }}</span> location</label
          >
          <input
            type="text"
            name="areas"
            v-model="modelValue.areas"
            class="textInput"
            :placeholder="`Enter ${$route.params.type} location`"
            required
          />
        </div>

        <label for="localAreas" class="inputLabel"
          ><span class="capitalize">{{ $route.params.type }}</span> Local location</label
        >
        <div
          class="flex gap-2 items-center"
          v-for="(area, index) in modelValue.localAreas"
          :key="index"
        >
          <input
            type="text"
            name="localAreas"
            v-model="modelValue.localAreas[index]"
            class="textInput"
            :placeholder="`Enter ${$route.params.type} local location`"
          />
          <button
            :disabled="modelValue.localAreas.length === 1"
            @click.prevent="$emit('removeLocalArea', index)"
            class="px-1 mb-2 text-2xl text-danger"
          >
            <Icon icon="system-uicons:cross-circle" />
          </button>
        </div>

        <button
          @click.prevent="$emit('addLocalArea')"
          class="mt-3 text-success bg-background px-3 text-sm md:text-base md:px-5 py-2 rounded-full border border-lightBorder"
        >
          + Add additional address ?
        </button>
      </div>

      <!-- Transport Fields -->
      <div v-if="modelValue.lostWhere === 'transport'" class="mt-4">
        <label for="transportType" class="inputLabel">Choose Transport</label>
        <select
          v-model="modelValue.transportType"
          id="transportType"
          class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option v-for="transport in modelValue.transports" :key="transport" :value="transport">
            {{ transport }}
          </option>
        </select>

        <label for="transportRoute" class="inputLabel">Transport Name</label>
        <input
          type="text"
          name="transportName"
          v-model="modelValue.transportName"
          class="textInput"
          :placeholder="`Enter transport name`"
        />
        <label for="transportRoute" class="inputLabel">Transport Route Area</label>
        <div
          id="transportRouteArea"
          v-for="(route, index) in modelValue.transportRouteArea"
          :key="index"
          class="mb-2 flex gap-2 items-center"
        >
          <input
            type="text"
            name="transportRouteArea"
            v-model="modelValue.transportRouteArea[index]"
            class="textInput"
            :placeholder="`Enter ${$route.params.type} route area`"
          />
          <button
            :disabled="modelValue.transportRouteArea.length === 1"
            @click.prevent="$emit('removeTransportRouteArea', index)"
            class="px-1 mb-2 text-2xl text-danger"
          >
            <Icon icon="system-uicons:cross-circle" />
          </button>
        </div>

        <button
          @click.prevent="$emit('addTransportRouteArea')"
          class="mt-3 text-success bg-background px-3 md:px-5 py-2 text-sm md:text-base rounded-full border border-lightBorder"
        >
          + Add additional Route Area ?
        </button>
      </div>
    </fieldset>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: Object,
});
defineEmits([
  "update:modelValue",
  "addLocalArea",
  "removeLocalArea",
  "addTransportRouteArea",
  "removeTransportRouteArea",
]);
</script>
