import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/mainLayout/MainLayout.vue";
import DashboardLayout from "@/layouts/dashboardLayout/DashboardLayout.vue";

// Public View
import HomeView from "../views/HomeView.vue";
import ReportFormView from "@/views/ReportFormView.vue";

// Dashboard View
import OverviewView from "@/views/dashboard/OverviewView.vue";
import ActiveReport from "@/components/app/layout/dashboard/ActiveReport.vue";
import PreviousReport from "@/components/app/layout/dashboard/PreviousReport.vue";
import ManageProfile from "@/components/app/layout/dashboard/ManageProfile.vue";

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
          ],
        },
      ],
    },
  ],
});

export default router;
