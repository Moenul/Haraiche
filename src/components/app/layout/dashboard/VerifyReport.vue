<template>
  <div class="requestReport w-full bg-white px-4 py-2 pb-4 border border-lightBorder rounded-md">
    <h1 class="text-xl text-textSecondary py-2 border-b border-lightBorder">Verify Report</h1>

    <div class="reportDataStatus mt-4">
      <ul class="w-full grid gap-1">
        <li class="md:flex justify-normal items-center gap-1 text-md">
          <label class="font-semibold w-fit inline-block mr-1">Location: </label>
          <span class="inline-block mr-1">Dhaka, Dhanmondi.</span>
          <Icon class="text-2xl text-success inline-block" icon="flowbite:badge-check-solid" />
        </li>
        <li class="md:flex justify-normal items-center gap-1 text-md">
          <label class="font-semibold w-fit inline-block mr-1">Local Location: </label>
          <span class="inline-block mr-1">Panthapath, West Rajabajar, new goli.</span>
          <Icon
            class="text-2xl text-danger inline-block"
            icon="material-symbols:brightness-alert-rounded"
          />
        </li>
        <li class="md:flex justify-normal items-center gap-1 text-md">
          <label class="font-semibold w-fit inline-block mr-1">Date: </label>
          <span class="inline-block mr-1">15 March 2025 02:30 PM</span>
          <Icon class="text-2xl text-success inline-block" icon="flowbite:badge-check-solid" />
        </li>
        <li class="md:flex justify-normal items-center gap-1 text-md">
          <label class="font-semibold w-fit inline-block mr-1">Item: </label>
          <span class="inline-block mr-1">Pendrive</span>
          <Icon class="text-2xl text-success inline-block" icon="flowbite:badge-check-solid" />
        </li>
      </ul>

      <div class="questionAndAnswer mt-4">
        <ol class="list-decimal list-outside ml-4 grid gap-1">
          <li>
            <p class="question font-semibold">Is there have any broken parts of this item?</p>
            <p class="answred text-textSecondary">
              <span class="text-muted font-semibold">Answer:</span> Its in used condition. There are
              a spot back to this item.
            </p>
          </li>
          <li>
            <p class="question font-semibold">What condition is this item?</p>
            <p class="answred text-textSecondary">
              <span class="text-muted font-semibold">Answer:</span> Its in used condition. There are
              a spot back to this item.
            </p>
          </li>
        </ol>
      </div>

      <div class="dataMatchRate text-xl font-mono px-4 py-2 mt-4 bg-success/30 rounded">
        45% matchd data.
      </div>

      <!-- validationConfirmation Section -->
      <div
        class="validationConfirmationSection w-full p-2 mt-4 bg-info/10 border border-info rounded shadow-sm"
      >
        <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
          <span class="text-muted w-6 flex-none text-center text-2xl font-mono">!</span>
          <p>
            Is this request are looks valid? <br />
            If valid click to
            <span class="font-semibold text-primaryDeep text-nowrap">"Accept Request"</span> to
            share your contact info. Otherwise click to
            <span class="font-semibold text-reportInfo text-nowrap">"Not Valid"</span> to deny this
            request.
          </p>
        </div>
        <div class="validationButtons flex rounded overflow-hidden">
          <button
            class="w-full px-4 py-2 text-lg text-nowrap bg-reportInfo/70 hover:bg-reportInfo transition-all duration-300 ease-in-out"
          >
            Not Valid
          </button>
          <button
            class="w-full px-4 py-2 text-lg text-nowrap bg-primaryDeep/70 hover:bg-primaryDeep transition-all duration-300 ease-in-out"
          >
            Accept Request
          </button>
        </div>
      </div>

      <!-- Validation Success Section -->
      <div
        v-if="false"
        class="validationSuccessSection w-full p-2 mt-4 bg-primary/10 border border-primary rounded shadow-sm"
      >
        <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
          <span class="text-muted w-6 flex-none text-center text-2xl font-mono">!</span>
          <p>
            Thank you! We've notified the item owner to confirm the match. They can now get in touch
            with you. Please wait for their call or message.
          </p>
        </div>

        <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
          <span class="text-muted w-6 flex-none text-center text-2xl font-mono mt-1"
            ><Icon icon="fluent:ribbon-star-32-filled"
          /></span>
          <p>
            Once the owner confirms the handover, you will earn
            <span class="font-semibold text-reportInfo text-nowrap">"Respect"</span> reward points
            as a thank-you for your honesty. We really appreciate what you have done!
          </p>
        </div>

        <div
          class="successButtons w-full py-2 text-lg text-center bg-primary/20 border-2 border-primary rounded"
        >
          Request successfully approved
        </div>
      </div>
    </div>
  </div>
  {{ route.params }}
  {{ route.query }}
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
