<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="reportBoard relative">
    <div class="container py-14">
      <header class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-semibold text-text">RECENTS REPORTED STATUS</h1>
        <p class="text-xl py-2">Realtime report log</p>
      </header>

      <div class="logContainer">
        <div
          class="relative w-full md:w-8/12 h-auto max-h-[70vh] md:h-96 m-auto overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:bg-primary/20 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-lg shadow-md rounded-md md:rounded-lg bg-white border border-muted"
        >
          <table class="w-full text-sm text-left rtl:text-right text-text">
            <thead
              class="text-xs text-text uppercase bg-white border-b border-lightBorder shadow-sm sticky top-0"
            >
              <tr>
                <th scope="col" class="px-6 py-3 text-center">Area</th>
                <th scope="col" class="px-6 py-3">Report Date</th>
                <th scope="col" class="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr v-for="log in formattedLogs" :key="log.id" class="bg-white hover:bg-primary/30">
                <th scope="row" class="px-6 py-3 font-medium text-text whitespace-nowrap">
                  <span
                    :class="log.type == 'lost' ? 'text-danger' : 'text-primaryDeep'"
                    class="font-semibold capitalize"
                    >{{ log.type }}</span
                  >
                  something in {{ log.area }} areas.
                </th>
                <td class="px-6 py-3 whitespace-nowrap">
                  <strong>{{ log.timeAgo }}</strong>
                </td>
                <td class="px-6 py-3">
                  <strong
                    :class="{
                      'text-success': ['recived', 'handovered'].includes(log.status),
                      'text-blue-400': ['founded', 'matched'].includes(log.status),
                      'text-yellow-600': log.status === 'waiting',
                      'text-danger': log.status === 'finding',
                      'text-primary': !log.status, // Default color
                    }"
                    class="capitalize"
                    >{{ log.status }}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useTimeAgo } from "@vueuse/core";
// const timeAgo = useTimeAgo(new Date(2021, 0, 1));

const reportLogs = ref([
  {
    id: 10,
    type: "lost",
    area: "Uttara, Sector 12",
    date: "01/20/2025",
    status: "finding",
  },
  {
    id: 11,
    type: "found",
    area: "Banani, Gulshan 2",
    date: "01/15/2025",
    status: "waiting",
  },
  {
    id: 12,
    type: "found",
    area: "Mohakhali, Wireless Gate",
    date: "02/10/2025",
    status: "handovered",
  },
  {
    id: 13,
    type: "lost",
    area: "Farmgate, Tejgaon",
    date: "02/25/2025",
    status: "finding",
  },
  {
    id: 14,
    type: "found",
    area: "Rampura, Hatirjheel",
    date: "03/05/2025",
    status: "matched",
  },
  {
    id: 15,
    type: "lost",
    area: "Shahbagh, Motijheel",
    date: "02/12/2025",
    status: "finding",
  },
  {
    id: 16,
    type: "found",
    area: "Jatrabari, Sayedabad",
    date: "01/22/2025",
    status: "waiting",
  },
  {
    id: 17,
    type: "lost",
    area: "Khilgaon, Malibagh",
    date: "02/28/2025",
    status: "recived",
  },
  {
    id: 18,
    type: "found",
    area: "Lalbagh, Azimpur",
    date: "03/03/2025",
    status: "handovered",
  },
  {
    id: 19,
    type: "lost",
    area: "Demra, Shonir Akhra",
    date: "03/01/2025",
    status: "founded",
  },
]);

// Convert date strings to Date objects and apply useTimeAgo
const formattedLogs = reportLogs.value.map((log) => ({
  ...log,
  timeAgo: useTimeAgo(new Date(log.date)),
}));
</script>
