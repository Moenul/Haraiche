<template>
  <div class="container">
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="bg-white p-6 space-y-4 rounded-lg border border-lightBorder shadow-md w-full max-w-md"
      >
        <h2 class="text-2xl font-bold text-center">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-2">
            <label for="fullName" class="inputLabel !mb-0 ml-1">Full Name</label>
            <input
              v-model="fullName"
              type="fullName"
              id="fullName"
              class="textInput"
              placeholder="Enter your fullName"
              required
            />
          </div>
          <div class="mb-2">
            <label for="phone" class="inputLabel !mb-0 ml-1">Phone</label>
            <div class="flex items-center">
              <button class="w-11 absolute z-10 p-2.5 text-sm text-nowrap">+880</button>
              <input
                v-model="phone"
                @input="validateInput"
                type="tel"
                id="phone"
                class="textInput !pl-11 !mb-0"
                placeholder="171XXXXXXX"
                minlength="10"
                maxlength="10"
                required
              />
            </div>
          </div>
          <div class="mb-2">
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
          <div class="mb-2">
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
          <div class="mb-2">
            <label for="confirmPassword" class="inputLabel !mb-0 ml-1">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              id="confirmPassword"
              class="textInput"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full mt-2 px-4 py-2 text-white text-lg bg-primaryDeep/90 rounded-md hover:bg-primaryDeep focus:outline-none focus:ring-2 focus:ring-primaryDeep"
          >
            Register
          </button>
        </form>
        <p class="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <router-link to="/login" class="text-indigo-600 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const fullName = ref("");
const phone = ref("");
const validateInput = () => {
  // Optionally, remove invalid characters live
  if (!/^[1-9][0-9]*$/.test(phone.value)) {
    // Prevent invalid characters but still allow typing
    phone.value = phone.value.replace(/^0+|[^0-9]/g, "");
  }
};

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  try {
    userStore.register(email.value, password.value, fullName.value, "+880" + phone.value);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
