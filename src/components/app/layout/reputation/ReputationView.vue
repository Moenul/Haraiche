<template>
  <div class="reputationSection relative">
    <div class="container py-14">
      <!-- Feature Highlight -->
      <div
        class="featureHighlite w-full md:w-8/12 m-auto h-56 flex justify-between items-center bg-gradient-to-r from-background from-10% to-primary relative rounded-lg overflow-hidden"
      >
        <div
          class="locationGearBox w-full absolute top-0 -left-24 z-10 md:block md:left-0 md:w-4/12 p-2 h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="full" height="full">
            <!-- Wrapping only the gear inside <g class="gear"> -->
            <g class="gear">
              <path
                fill="#A8E6CF"
                d="M17.796 17.948a2 2 0 0 1-1.441 2.496l-1.024.254a6.8 6.8 0 0 0 .008 2.152l.976.235a2 2 0 0 1 1.45 2.51l-.324 1.098a6.2 6.2 0 0 0 1.753 1.1l.843-.886a2 2 0 0 1 2.899 0l.85.895a6.2 6.2 0 0 0 1.751-1.09l-.335-1.16a2 2 0 0 1 1.441-2.496l1.026-.253a6.8 6.8 0 0 0-.008-2.152l-.977-.235a2 2 0 0 1-1.45-2.51l.324-1.1a6.2 6.2 0 0 0-1.753-1.1l-.843.888a2 2 0 0 1-2.9 0l-.849-.895a6.2 6.2 0 0 0-1.751 1.09zM21.5 23a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
              />
            </g>

            <!-- The rest of the SVG (static parts, not rotating) -->
            <path
              fill="#A8E6CF"
              d="M14 2.25A9.75 9.75 0 0 1 23.75 12a9.5 9.5 0 0 1-.281 2.261a7.5 7.5 0 0 0-1.486-.246q.267-1.035.267-2.015a8.25 8.25 0 0 0-16.5 0c0 3.502 2.548 7.537 7.714 12.057l.373.323a.25.25 0 0 0 .326 0l.306-.265c.181.49.413.954.688 1.389l-.017.014a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12A9.75 9.75 0 0 1 14 2.25m0 6a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"
            />
          </svg>
        </div>
        <div class="neonLightBox w-full md:w-8/12 absolute right-0 h-full p-4 flex justify-around">
          <div
            v-for="i in 10"
            :key="i"
            :class="`neonCell${i}`"
            class="h-full flex flex-col justify-around"
          >
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
            <div class="neonBulb size-1.5 rounded-full bg-white"></div>
          </div>
        </div>
        <p
          class="w-full px-2 text-lg md:w-[60%] absolute m-auto left-0 right-0 z-30 md:text-2xl font-mono text-text text-center [text-shadow:_0_2px_4px_rgb(130_130_130_/_0.8)]"
        >
          We build Strong algorithm to find your lost item without searching and we dynamically
          authorize item ownership.
        </p>
      </div>

      <!-- Raputation Highlight -->
      <div
        class="reputationHighlight w-full relative h-auto md:h-60 mt-20 grid gap-6 md:flex justify-around items-center"
      >
        <!-- Reputation Box -->
        <div
          v-for="reputation in reputations"
          :key="reputation"
          class="reputationBox group relative size-56 border border-lightBorder bg-white rounded-full flex flex-col justify-center items-center"
        >
          <div class="reputationNumber text-5xl font-bold font-mono">{{ reputation.numbers }}+</div>
          <div class="reputationTitle text-lg px-4">{{ reputation.title }}</div>
          <!-- Rotating Ball -->
          <div
            class="ball absolute w-full h-full top-0 left-0 rounded-full before:contents[''] before:w-5 before:h-5 before:rounded-full before:bg-secondaryDeep before:absolute before:-right-2 before:top-[50%]"
          ></div>

          <!-- Ripple Effect -->
          <div
            class="absolute w-full h-full bg-secondary opacity-60 scale-0 rounded-full transition-all duration-500 ease-in-out group-hover:opacity-10 group-hover:scale-100"
          ></div>
          <div
            class="absolute w-full h-full bg-secondary opacity-60 scale-0 rounded-full transition-all duration-700 delay-300 ease-in-out group-hover:opacity-10 group-hover:scale-100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const reputations = [
  {
    title: "Report in last months",
    numbers: 240,
  },
  {
    title: "People got help from us",
    numbers: 315,
  },
  {
    title: "Successful match Item",
    numbers: 188,
  },
];
</script>
<style>
/* Fix transform origin to keep gear in place */
.gear {
  transform-origin: 21.5px 21.5px; /* Set this to the exact center of the gear */
  animation: rotateGear 10s linear infinite;
}

.neonCell1 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
}
.neonCell2 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 0.5s;
}
.neonCell3 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 1s;
}
.neonCell4 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 1.5s;
}
.neonCell5 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 2s;
}
.neonCell6 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 2.5s;
}
.neonCell7 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 3s;
}
.neonCell8 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 3.5s;
}
.neonCell9 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 4s;
}
.neonCell10 {
  opacity: 0;
  animation: fadeBulb 6s linear infinite;
  animation-delay: 4.5s;
}

.ball {
  transform: rotate(0deg);
  animation: rotateBall 6s linear infinite;
}
.reputationBox:nth-child(2) .ball::before {
  top: null;
  bottom: -8px;
  left: -8px;
}
.reputationBox:nth-child(3) .ball::before {
  top: -8px;
  left: 50%;
}

/* Rotate Gare */
@keyframes rotateGear {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* FadeBulb */
@keyframes fadeBulb {
  from {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

/* Ball rotation */
@keyframes rotateBall {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
