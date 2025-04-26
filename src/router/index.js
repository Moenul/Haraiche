import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";

import MainLayout from "@/layouts/mainLayout/MainLayout.vue";
import DashboardLayout from "@/layouts/dashboardLayout/DashboardLayout.vue";

// Public View
import HomeView from "../views/HomeView.vue";
import ReportFormView from "@/views/ReportFormView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";

// Dashboard View
import OverviewView from "@/views/dashboard/OverviewView.vue";
import ActiveReport from "@/components/app/layout/dashboard/ActiveReport.vue";
import PreviousReport from "@/components/app/layout/dashboard/PreviousReport.vue";
import ManageProfile from "@/components/app/layout/dashboard/ManageProfile.vue";
import VerifyReport from "@/components/app/layout/dashboard/VerifyReport.vue";
import GetItem from "@/components/app/layout/dashboard/GetItem.vue";

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
        {
          path: "/report/:type",
          name: "ReportFormView",
          component: ReportFormView,
          props: true,
        },
        {
          path: "/register",
          name: "RegisterView",
          component: RegisterView,
        },
        {
          path: "/login",
          name: "LoginView",
          component: LoginView,
        },
      ],
    },
    {
      path: "/dashboard",
      name: "DashboardLayout",
      component: DashboardLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "OverviewView",
          component: OverviewView,
          children: [
            {
              path: "/dashboard/active-reports",
              name: "ActiveReport",
              component: ActiveReport,
            },
            {
              path: "/dashboard/previous-reports",
              name: "PreviousReport",
              component: PreviousReport,
            },
            {
              path: "/dashboard/manage-profile",
              name: "ManageProfile",
              component: ManageProfile,
            },
            {
              path: "/dashboard/verify-report/:id",
              name: "VerifyReport",
              component: VerifyReport,
            },
            {
              path: "/dashboard/get-item",
              name: "GetItem",
              component: GetItem,
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isLoggedIn = userStore.isLoggedIn;

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: "LoginView" });
  } else {
    next();
  }
});

export default router;
