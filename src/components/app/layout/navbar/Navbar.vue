<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="navbarClass" class="navbar fixed top-0 left-0 w-full py-2 text-text z-50 md:z-40">
    <div class="container flex justify-between">
      <div class="brand_logo w-16 h-auto overflow-hidden">
        <router-link to="/">
          <LogoView />
        </router-link>
      </div>

      <div class="buttons flex items-center gap-4">
        <template v-if="userStore.isLoggedIn">
          <router-link to="/dashboard/active-reports">
            <button
              class="px-5 py-1 rounded-full border-2 border-slate-700 hover:bg-black/10 hover:text-black transition-all duration-300 ease-in-out"
            >
              Dashboard
            </button>
          </router-link>
          <button
            @click="userStore.logout"
            class="px-5 py-1 rounded-full border-2 border-slate-700 hover:bg-black/10 hover:text-black transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <router-link to="/login">
            <button
              class="px-5 py-1 rounded-full border-2 border-slate-700 hover:bg-black/10 hover:text-black transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LogoView from "../../LogoView.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const scrollPosition = ref(0);
const navbarClass = ref("bg-transparent");

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  const opacity = Math.min(scrollPosition.value / 300, 1); // Max opacity at 300px scroll
  navbarClass.value = `bg-custom`;
  document.documentElement.style.setProperty("--navbar-opacity", opacity);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.bg-custom {
  background-color: rgba(168, 230, 207, var(--navbar-opacity, 0));
}
</style>
