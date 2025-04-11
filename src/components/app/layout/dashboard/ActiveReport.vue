<template>
  <!-- Lost Report -->
  <div class="reportBar w-full bg-white border border-lightBorder rounded-md mb-6 overflow-hidden">
    <!-- Report Header -->
    <div
      class="reportHeader w-full flex justify-between px-4 py-2 bg-danger/30 border-b border-lightBorder"
    >
      <span class="title">Lost Report</span>
      <span class="id">ID: <span class="font-semibold">#23423</span></span>
    </div>
    <!-- Report Container -->
    <div class="reportContainer px-4 py-2">
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <div class="details">
          <p><span class="font-semibold">Location :</span> Dhanmondi, Panthapath</p>
          <p><span class="font-semibold">Category :</span> Electronics</p>
          <p><span class="font-semibold">Item :</span> Keyboard</p>
          <p><span class="font-semibold">Lost Date :</span> 23/03/2025</p>
        </div>
        <div class="date">
          <p><span class="font-semibold">Status :</span> Finding</p>
          <p><span class="font-semibold">Matched Report :</span> 3</p>
        </div>
      </div>

      <!-- Matched Reoprts -->
      <div
        class="matchedReport w-full mt-2 py-2 grid md:grid-cols-3 gap-3 border-t border-lightBorder"
      >
        <div v-for="i in 3" :key="i" class="matchedItem rounded-sm overflow-hidden shadow">
          <div class="matchedValue w-full px-2 py-1 bg-primary">66% matchd data</div>
          <div class="matchedDetails w-full px-2 py-1 bg-primary/40 text-base">
            <p class="flex gap-2 items-center">
              <Icon icon="tdesign:location-filled" /> <span>Dhanmondi, Panthapath</span>
            </p>

            <p class="flex gap-2 items-center">
              <Icon icon="iconoir:plug-type-l" /> <span>Electronics, Headphone</span>
            </p>
            <p class="flex gap-2 items-center">
              <Icon icon="uim:calender" /> <span>24/03/2025</span>
            </p>
          </div>
          <div class="triggerBtn">
            <button class="w-full py-2 md:py-1 bg-secondary hover:bg-secondaryDeep">
              Make Request
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Report Footer -->
    <div class="reportFooter px-4 py-2 mb-2 grid grid-cols-1 gap-4 md:flex justify-between">
      <div class="findingMsg text-lg flex items-center gap-6">
        <span class="findSearchIcon text-3xl"><Icon icon="flowbite:search-outline" /></span>
        <p>Finding to matche ...</p>
      </div>
      <div class="buttons flex gap-2 justify-end">
        <button class="px-4 py-1 rounded bg-primary/80 hover:bg-primary">See less</button>
        <button class="px-4 py-1 rounded bg-danger/80 hover:bg-danger">Delete</button>
      </div>
    </div>
  </div>
  <!-- Lost Report End -->

  <!-- ---------- -->

  <!-- Found Report -->
  <div class="reportBar w-full bg-white border border-lightBorder rounded-md mb-6 overflow-hidden">
    <!-- Report Header -->
    <div
      class="reportHeader w-full flex justify-between px-4 py-2 bg-success/30 border-b border-lightBorder"
    >
      <span class="title">Found Report</span>
      <span class="id">ID: <span class="font-semibold">#23423</span></span>
    </div>
    <!-- Report Container -->
    <div class="reportContainer px-4 py-2">
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <!-- {{ report }} -->
        <div class="details">
          <p><span class="font-semibold">Location :</span> Dhanmondi, Panthapath</p>
          <p><span class="font-semibold">Category :</span> Electronics</p>
          <p><span class="font-semibold">Item :</span> Keyboard</p>
          <p><span class="font-semibold">Found Date :</span> 23/03/2025</p>
        </div>
        <div class="date">
          <p><span class="font-semibold">Status :</span> Waiting</p>
          <p><span class="font-semibold">Matched Request :</span> 2</p>
        </div>
      </div>

      <!-- Request Reports -->
      <div
        class="reuquestReport w-full mt-2 py-2 grid md:grid-cols-3 gap-3 border-t border-lightBorder"
      >
        <div v-for="i in 2" :key="i" class="matchedItem rounded-sm overflow-hidden shadow">
          <div class="matchedValue w-full px-2 py-1 bg-secondaryDeep">66% matchd data</div>
          <div class="matchedDetails w-full px-2 py-1 bg-secondary/40 text-base">
            <p class="flex gap-2 items-center">
              <Icon icon="tdesign:location-filled" /> <span>Dhanmondi, Panthapath</span>
            </p>

            <p class="flex gap-2 items-center">
              <Icon icon="iconoir:plug-type-l" /> <span>Electronics, Headphone</span>
            </p>
            <p class="flex gap-2 items-center">
              <Icon icon="uim:calender" /> <span>24/03/2025</span>
            </p>
          </div>
          <div class="triggerBtn flex">
            <button class="w-1/2 py-2 md:py-1 bg-reportInfo/60 hover:bg-reportInfo/80">Deny</button>
            <button class="w-1/2 py-2 md:py-1 bg-primary/80 hover:bg-primary">Verify</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Report Footer -->
    <div class="reportFooter px-4 py-2 mb-2 grid grid-cols-1 gap-4 md:flex justify-between">
      <div class="waitingMsg text-lg flex items-center gap-6">
        <span class="waitTimeIcon text-3xl"><Icon icon="game-icons:sands-of-time" /></span>
        <p>Wating to matche ...</p>
      </div>
      <div class="buttons flex gap-2 justify-end">
        <button class="px-4 py-1 rounded bg-primary/80 hover:bg-primary">See less</button>
        <button class="px-4 py-1 rounded bg-danger/80 hover:bg-danger">Delete</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style>
.findSearchIcon {
  animation-name: findSearchIcon;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.waitTimeIcon {
  animation-name: waitTimeIcon;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes findSearchIcon {
  from {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(20px) rotate(90deg);
  }
  to {
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes waitTimeIcon {
  from {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(25deg);
  }
  to {
    transform: rotate(-25deg);
  }
}
</style>
