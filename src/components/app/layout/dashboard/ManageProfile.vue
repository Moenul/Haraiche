<template>
  <div class="manageProfile w-full bg-white px-4 py-2 border border-lightBorder rounded-md">
    <!-- Profile View -->
    <div
      class="profileViewContainer p-3 md:p-4 border-b border-lightBorder flex justify-between relative"
    >
      <div class="profileImage size-24 rounded-full overflow-hidden border border-lightBorder">
        <img
          class="object-cover"
          src="https://webwriterspotlight.com/sites/default/files/styles/sidebar_first_thumbnail/public/default_images/blank%20user%20avatar_1.jpg?itok=jgMQNf78"
          alt=""
        />
      </div>
      <div class="profileDetails">
        <p class="text-lg md:text-xl font-medium text-right">{{ user.name }}</p>
        <p
          :class="user.isVerified ? 'text-success' : 'text-muted'"
          class="text-base md:text-md font-medium flex justify-end items-center gap-2"
        >
          <span v-if="user.isVerified">Verified</span> <span v-else>Not Verified</span>
          <Icon icon="flowbite:badge-check-solid" />
        </p>
        <p
          class="profileStarBage w-24 float-end mt-2 flex justify-center items-center gap-1 text-lg font-semibold rounded-full bg-reportInfo/10 text-reportInfo border border-reportInfo/20"
        >
          <span>3022</span>
          <Icon icon="fluent:ribbon-star-20-filled" />
        </p>
      </div>
    </div>

    <!-- Profile Details -->
    <div class="infoViewContainer p-3 md:p-4">
      <ul class="grid gap-2">
        <li class="grid md:flex md:gap-3">
          <label for="phone" class="font-semibold w-20"
            >Phone <span class="md:float-end">:</span></label
          >{{ user.phoneNumber }}

          <p
            class="-mt-6 md:mt-0 text-md font-medium flex justify-end items-center gap-1 text-muted"
          >
            <Icon icon="flowbite:badge-check-solid" />
            <a href="" class="text-blue-400 underline hover:text-blue-500">Click to verify</a>
          </p>
        </li>
        <li class="grid md:flex md:gap-3">
          <label for="email" class="font-semibold w-20"
            >Email <span class="md:float-end">:</span></label
          >{{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();
</script>
