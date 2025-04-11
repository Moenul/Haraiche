<template>
  <main>
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>
  </main>
</template>
<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/app/layout/navbar/Navbar.vue";
import Footer from "@/components/app/layout/footer/Footer.vue";
</script>
