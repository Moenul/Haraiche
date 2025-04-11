<template>
  <div class="container pt-20">
    <div class="overViewContainer grid md:flex md:justify-between gap-8">
      <div
        class="sidebarNav w-full md:w-96 h-fit bg-white border border-lightBorder rounded-lg overflow-hidden"
      >
        <div
          class="profileViewContainer p-4 border-b border-lightBorder grid justify-center items-center relative"
        >
          <div
            class="verificationBadge size-5 flex justify-center items-center text-xl text-success absolute top-4 left-20 right-0 m-auto"
          >
            <!-- text-muted  -->
            <Icon icon="flowbite:badge-check-solid" />
          </div>
          <div
            class="profileImage size-14 rounded-full overflow-hidden m-auto border border-lightBorder"
          >
            <img
              class="object-cover"
              src="https://webwriterspotlight.com/sites/default/files/styles/sidebar_first_thumbnail/public/default_images/blank%20user%20avatar_1.jpg?itok=jgMQNf78"
              alt=""
            />
          </div>
          <p class="profileName text-lg font-medium text-center">Moenul Islam Bijoy</p>
          <p
            class="profileStarBage w-24 m-auto mt-2 flex justify-center items-center gap-1 text-lg font-semibold rounded-full bg-reportInfo/10 text-reportInfo border border-reportInfo/20"
          >
            <span class=" ">3022</span>
            <Icon icon="fluent:ribbon-star-20-filled" />
          </p>
        </div>
        <div class="navLinkContainer">
          <ul
            class="flex justify-center md:grid md:grid-flow-row md:justify-normal divide-y divide-lightBorder text-textSecondary"
          >
            <router-link to="/dashboard/active-reports"
              ><li
                :class="{
                  'bg-secondary/30': $route.name === 'ActiveReport',
                }"
                class="routerLinkButton"
              >
                <Icon
                  class="text-success text-4xl md:text-lg"
                  icon="fluent:text-bullet-list-square-clock-20-regular"
                />
                <span class="hidden md:block">Active Report</span>
              </li></router-link
            >
            <router-link to="/dashboard/previous-reports"
              ><li
                :class="{
                  'bg-secondary/30': $route.name === 'PreviousReport',
                }"
                class="routerLinkButton"
              >
                <Icon
                  class="text-info text-4xl md:text-lg"
                  icon="ph:clock-counter-clockwise-fill"
                />
                <span class="hidden md:block">Previous Report</span>
              </li></router-link
            >
            <router-link to="/dashboard/manage-profile"
              ><li
                :class="{
                  'bg-secondary/30': $route.name === 'ManageProfile',
                }"
                class="routerLinkButton"
              >
                <Icon
                  class="text-warning text-4xl md:text-lg"
                  icon="material-symbols:manage-accounts-outline-rounded"
                />
                <span class="hidden md:block">Manage Profile</span>
              </li></router-link
            >
          </ul>
        </div>
      </div>
      <main class="contentWrapper w-full overflow-hidden">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
</script>

<style scoped lang="postcss">
.routerLinkButton {
  @apply w-full flex gap-2 items-center px-4 py-2 transition-all duration-300 ease-in-out hover:bg-secondary/30 hover:text-text;
}
</style>
