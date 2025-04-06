<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="pt-20 h-auto md:h-screen overflow-hidden bg-gradient-to-r from-primary from-10% via-secondary via-60% to-secondary to-90%"
  >
    <div class="container">
      <header
        class="flex justify-between flex-col-reverse md:flex-row md:h-screen border border-white rounded-t-2xl border-b-0"
      >
        <div class="heroInfo w-full md:w-2/5 py-4 md:py-10 px-4">
          <h1
            class="text-text text-[4rem] md:text-[6rem] font-serif font-bold leading-none mt-2 md:mt-4"
          >
            <MorphingText :texts="texts" />
          </h1>
          <p class="text-2xl">
            No Tension,<br />
            Now it's easy to found.
          </p>
          <a href="">
            <div
              class="guidLink w-44 py-1 px-3 mt-4 flex gap-2 items-center border border-text rounded-full text-black font-semibold hover:bg-text/10 transition-all duration-300"
            >
              <Icon icon="icon-park-solid:play" />
              <p>How to report</p>
            </div>
          </a>
          <div
            class="lostAndFoundBtn relative w-72 bg-background border-1 border-white shadow-md p-6 rounded-lg overflow-hidden grid cols-1 gap-1.5 my-8 m-auto"
          >
            <router-link to="report/lost">
              <button
                class="lostBtn bg-secondary hover:bg-secondaryDeep transition-all duration-300 ease-in-out w-full py-3 text-center font-semibold relative before:content-[''] before:absolute before:w-16 before:h-16 before:rounded-full before:top-9 before:m-auto before:left-0 before:right-0 before:bg-background z-10"
              >
                I HAVE LOST
              </button>
            </router-link>

            <router-link to="report/found">
              <button
                class="foundBtn bg-primary hover:bg-primaryDeep hover:before:bg-primaryDeep transition-all duration-300 ease-in-out before:transition-all before:duration-300 before:ease-in-out w-full py-3 text-center font-semibold relative before:content-[''] before:absolute before:w-12 before:h-12 before:rounded-full before:-top-3 before:m-auto before:left-0 before:right-0 before:bg-primary before:-z-10 z-30"
              >
                I HAVE FOUND
              </button>
              <BorderBeam :size="150" :duration="6" :delay="9" :border-width="2" />
            </router-link>
          </div>
        </div>

        <div class="heroAnimation w-full md:w-3/5 relative">
          <div
            class="animationContainer w-[310px] h-[310px] md:w-[450px] md:h-[450px] relative m-auto mt-5 md:absolute left-0 right-0 md:top-20 md:right-20 border border-white bg-white/30 backdrop-blur-md rounded-[70px]"
          >
            <div
              ref="animationBoxRef"
              class="animationBox w-[90%] h-[90%] absolute top-3 right-3 border-4 border-white bg-secondaryDeep rounded-[80px]"
            >
              <SadEmoji :width="clientWidth"></SadEmoji>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import BorderBeam from "@/components/ui/border-beam/BorderBeam.vue";
import MorphingText from "@/components/ui/morphing-text/MorphingText.vue";
import SadEmoji from "@/components/app/layout/specialEffects/SadEmoji.vue";
const texts = ["Haraiche!", "হারাইছে!"];

const animationBoxRef = ref(null);
const clientWidth = ref(0);

// Compute clientWidth dynamically
const updateClientWidth = () => {
  clientWidth.value = animationBoxRef.value?.clientWidth || 0;
};

// Watch for window resize
onMounted(() => {
  updateClientWidth();
  window.addEventListener("resize", updateClientWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateClientWidth);
});
</script>
