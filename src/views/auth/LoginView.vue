<template>
  <div class="container">
    <div class="flex items-center justify-center min-h-screen">
      <div
        class="w-full max-w-md p-6 space-y-4 bg-white rounded-lg border border-lightBorder shadow-md"
      >
        <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email" class="inputLabel !mb-0 ml-1">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="textInput"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label for="password" class="inputLabel !mb-0 ml-1">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="textInput"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full mt-2 px-4 py-2 text-white text-lg bg-primaryDeep/90 rounded-md hover:bg-primaryDeep focus:outline-none focus:ring-2 focus:ring-primaryDeep"
          >
            Login
          </button>
        </form>
        <p class="text-sm text-center text-gray-600">
          Don't have an account?
          <router-link to="/register" class="text-indigo-600 hover:underline">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const email = ref("demo@email.test");
const password = ref("123456");

const handleLogin = async () => {
  userStore.login(email.value, password.value);
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
