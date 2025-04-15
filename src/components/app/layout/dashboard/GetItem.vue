<template>
  <div class="requestReport w-full bg-white px-4 py-2 pb-4 border border-lightBorder rounded-md">
    <h1 class="text-xl text-textSecondary py-2 border-b border-lightBorder">Get Your Item</h1>

    <div class="reportDataStatus mt-4 grid md:flex justify-between gap-2">
      <div class="validateData w-full md:w-8/12">
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
                <span class="text-muted font-semibold">Answer:</span> Its in used condition. There
                are a spot back to this item.
              </p>
            </li>
            <li>
              <p class="question font-semibold">What condition is this item?</p>
              <p class="answred text-textSecondary">
                <span class="text-muted font-semibold">Answer:</span> Its in used condition. There
                are a spot back to this item.
              </p>
            </li>
          </ol>
        </div>
        <div class="dataMatchRate text-xl font-mono px-4 py-2 mt-4 bg-success/30 rounded">
          45% matchd data.
        </div>
      </div>

      <!-- Finder Info -->
      <div class="finderInfo w-full md:w-4/12">
        <div class="profileViewContainer p-2 md:p-2 border border-lightBorder rounded relative">
          <div
            class="profileImage size-20 m-auto rounded-full overflow-hidden border border-lightBorder"
          >
            <img
              class="object-cover"
              src="https://webwriterspotlight.com/sites/default/files/styles/sidebar_first_thumbnail/public/default_images/blank%20user%20avatar_1.jpg?itok=jgMQNf78"
              alt=""
            />
          </div>
          <div class="profileDetails">
            <p
              class="text-lg ml-2 md:text-xl font-medium text-center relative flex items-center justify-center"
            >
              Moenul Islam Bijoy
              <span class="text-md ml-2"><Icon icon="flowbite:badge-check-solid" /></span>
            </p>

            <p
              class="profileStarBage w-24 m-auto mt-2 flex justify-center items-center gap-1 text-base font-semibold rounded-full bg-reportInfo/10 text-reportInfo border border-reportInfo/20"
            >
              <span>3022</span>
              <Icon icon="fluent:ribbon-star-20-filled" />
            </p>

            <!-- Contact info -->

            <li class="flex items-center justify-center gap-2 mt-2 text-lg">
              <label for="phone" class="text-2xl"><Icon icon="mage:contact-book-fill" /> </label>
              +880 1795243628
            </li>

            <!-- Contact Buttons -->
            <div
              class="contactButtons w-full mt-2 grid border border-lightBorder rounded overflow-hidden"
            >
              <a href="tel:+8801795243628">
                <button
                  class="callButton w-full px-2 py-2 md:text-sm text-nowrap flex justify-center items-center gap-1 bg-primary/70 hover:bg-primary transition-all duration-200 ease-in-out"
                >
                  <Icon icon="fluent:call-16-filled" class="text-xl" /> Make Call
                </button>
              </a>

              <a
                href="sms:+8801795243628?body=Hello%20Sir,%20I%20informd%20by%20Haraiche.com%20you%20found%20a%20item%20..."
              >
                <button
                  class="messageButton w-full px-2 py-2 md:text-sm text-nowrap flex justify-center items-center gap-1 bg-verifyInfo/70 hover:bg-verifyInfo transition-all duration-200 ease-in-out"
                >
                  <Icon icon="mage:message-fill" class="text-xl" /> Direct Message
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- validationConfirmation Section -->
    <div
      class="validationConfirmationSection w-full p-2 mt-4 bg-info/10 border border-info rounded shadow-sm"
    >
      <div class="infoMessage text-md mb-2 text-textSecondary flex items-start">
        <span class="text-muted w-6 flex-none text-center text-2xl font-mono mt-1"
          ><Icon icon="fluent:ribbon-star-32-filled"
        /></span>
        <p>
          If you’ve got your item back, click to
          <span class="font-semibold text-primaryDeep text-nowrap">"Confirm Received"</span>. We
          will give <span class="font-semibold text-reportInfo text-nowrap">"Respect"</span> reward
          points as a thank-you for finder honesty. And also you will get some reward points. Thank
          you for trust with use.
        </p>
      </div>

      <div class="validationButtons flex rounded overflow-hidden">
        <button
          class="w-full px-4 py-2 text-lg text-nowrap bg-primaryDeep/70 hover:bg-primaryDeep transition-all duration-300 ease-in-out"
        >
          Confirm Received
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
