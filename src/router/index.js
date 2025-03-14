import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/mainLayout/MainLayout.vue";
import DashboardLayout from "@/layouts/dashboardLayout/DashboardLayout.vue";

// Public View
import HomeView from "../views/HomeView.vue";

// Dashboard View
import OverviewView from "@/views/dashboard/OverviewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "HomeView",
          component: HomeView,
        },
      ],
    },
    {
      path: "/dashboard",
      name: "DashboardLayout",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "OverviewView",
          component: OverviewView,
        },
      ],
    },
  ],
});

export default router;
