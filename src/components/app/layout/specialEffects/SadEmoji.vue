<template>
  <div>
    <svg
      width="{{ width }}"
      height="{{ width }}"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faceGradient" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stop-color="white" stop-opacity="0.9" />
          <stop offset="30%" stop-color="white" stop-opacity="0.5" />
          <stop offset="70%" stop-color="white" stop-opacity="0.3" />
          <stop offset="100%" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
      </defs>

      <!-- Face -->
      <circle cx="100" cy="100" r="80" fill="orange" stroke="black" stroke-width="3" />
      <circle cx="100" cy="96" r="75" fill="url(#faceGradient)" />

      <!-- Eyebrows -->
      <path d="M50 55 Q65 55 75 40" fill="none" stroke="black" stroke-width="6" />
      <path d="M125 40 Q135 55 150 55" fill="none" stroke="black" stroke-width="6" />

      <!-- Eyes -->
      <ellipse cx="75" cy="85" rx="16" ry="20" fill="black" />
      <ellipse cx="125" cy="85" rx="16" ry="20" fill="black" />

      <!-- Eye Reflection (smooth and restricted) -->
      <circle :cx="eyeLeftReflectionX" :cy="eyeLeftReflectionY" r="5" fill="#fffffff0" />
      <circle :cx="eyeRightReflectionX" :cy="eyeRightReflectionY" r="5" fill="#fffffff0" />

      <!-- Mouth (Sad Curve) -->
      <path
        d="M 70 145 Q 70 140 72 137 Q 102 110 130 137 Q 133 140 133 145 Q 130 154 121 149 Q 102 141 81 149 Q 73 154 70 145 Z"
        fill="black"
      />
    </svg>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";

const props = defineProps({
  width: Number, // Accept width as a prop
});
console.log(props.width);

// Reflection positions
const eyeLeftReflectionX = ref(75);
const eyeLeftReflectionY = ref(90);
const eyeRightReflectionX = ref(125);
const eyeRightReflectionY = ref(90);

// Maximum allowed movement inside the eyes
const maxOffsetX = 6; // Horizontal limit
const maxOffsetY = 6; // Vertical limit

const updateEyePosition = (event) => {
  const faceCenterX = window.innerWidth / 2;
  const faceCenterY = window.innerHeight / 2;

  // Normalize movement direction (-1 to 1)
  let dx = (event.clientX - faceCenterX) / faceCenterX;
  let dy = (event.clientY - faceCenterY) / faceCenterY;

  // Constrain within the allowed range
  dx = Math.max(-1, Math.min(1, dx));
  dy = Math.max(-1, Math.min(1, dy));

  // Apply movement inside the eye area
  eyeLeftReflectionX.value = 75 + dx * maxOffsetX;
  eyeLeftReflectionY.value = 90 + dy * maxOffsetY;
  eyeRightReflectionX.value = 125 + dx * maxOffsetX;
  eyeRightReflectionY.value = 90 + dy * maxOffsetY;
};

onMounted(() => {
  window.addEventListener("mousemove", updateEyePosition);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateEyePosition);
});
</script>
