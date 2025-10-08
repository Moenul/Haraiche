<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="infoSection relative">
    <div class="max-w-5xl mx-auto py-14">
      <header class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-semibold text-text">HOW HARAICHE HELP YOU</h1>
        <p class="text-xl py-2">How it's works</p>
      </header>
      <div
        class="infoContainer grid md:flex justify-evenly [&>div:nth-child(1)]:-rotate-6 md:[&>div:nth-child(1)]:top-5 [&>div:nth-child(1)]:-skew-3 [&>div:nth-child(3)]:-rotate-6 md:[&>div:nth-child(3)]:rotate-6 md:[&>div:nth-child(3)]:top-5"
      >
        <div
          v-for="info in infos"
          :class="info.color ? `bg-${info.color}` : 'bg-primary'"
          class="infoBox relative size-72 p-4 mb-6 border-2 border-border rounded-md hover:animate-shake"
        >
          <div
            class="infoIcon size-16 rounded-full bg-white border-2 border-border text-border flex justify-center items-center text-4xl"
          >
            <Icon :icon="`${info.icon}`" />
          </div>
          <div class="infoTitle text-md font-semibold my-6 text-text">{{ info.title }}</div>
          <div class="infoDesc text-sm text-textSecondary">{{ info.desc }}</div>
          <div
            class="styleLine w-3/5 absolute bottom-5 m-auto left-0 right-0 border-b-2 border-dashed border-white"
          ></div>
        </div>
      </div>
    </div>

    <div class="roadDraw w-full absolute bottom-0 -z-10">
      <svg width="100%" height="200" viewBox="0 0 100% 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect x="0" y="0" width="100%" height="160" fill="rgba(0, 0, 0, 0.1)" />

        <!-- Road Base (Semi-transparent) -->
        <rect x="0" y="20" width="100%" height="120" fill="rgba(0, 0, 0, 0.1)" />

        <!-- Lane Markings (Dashed Center Line) -->
        <line
          x1="0"
          y1="82"
          x2="100%"
          y2="82"
          stroke="white"
          stroke-width="2"
          stroke-dasharray="20, 15"
        />

        <!-- Roadside Borders (Thinner & Moved Outwards) -->
        <rect x="0" y="20" width="100%" height="2" fill="white" />
        <rect x="0" y="140" width="100%" height="2" fill="white" />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const infos = [
  {
    icon: "system-uicons:document-stack",
    title: "Report for Lost or Found item",
    desc: `Fill the declaration and give as much detail as possible (the location of loss, the type
          of item, the description) to help the algorithm to identify it quickly`,
    color: "reportInfo",
  },
  {
    icon: "hugeicons:passport-valid",
    title: "Prove Ownership of this item",
    desc: `Fill the declaration and give as much detail as possible (the location of loss, the type
          of item, the description) to help the algorithm to identify it quickly`,
    color: "verifyInfo",
  },
  {
    icon: "ph:handshake-light",
    title: "Get it Back",
    desc: `Fill the declaration and give as much detail as possible (the location of loss, the type
          of item, the description) to help the algorithm to identify it quickly`,
    color: "successInfo",
  },
];
</script>
