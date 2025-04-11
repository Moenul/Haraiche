<template>
  <!-- Lost Report -->
  <div
    class="reportBar w-full bg-white border border-lightBorder text-textSecondary/70 rounded-md mb-6 overflow-hidden"
  >
    <div
      class="reportHeader w-full flex justify-between px-4 py-2 bg-danger/30 border-b border-lightBorder"
    >
      <span class="title">Lost Report</span>
      <span class="id">ID: <span class="font-semibold">#23423</span></span>
    </div>
    <div class="reportContainer px-4 py-2">
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <div>
          <p><span class="font-semibold">Location :</span> Dhanmondi, Panthapath</p>
          <p><span class="font-semibold">Category :</span> Electronics</p>
          <p><span class="font-semibold">Item :</span> Keyboard</p>
          <p><span class="font-semibold">Lost Date :</span> 23/03/2025</p>
        </div>
        <div>
          <p><span class="font-semibold">Status :</span> Founded</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Found Report -->
  <div
    class="reportBar w-full bg-white border border-lightBorder text-textSecondary/70 rounded-md mb-6 overflow-hidden"
  >
    <div
      class="reportHeader w-full flex justify-between px-4 py-2 bg-success/30 border-b border-lightBorder"
    >
      <span class="title">Found Report</span>
      <span class="id">ID: <span class="font-semibold">#23423</span></span>
    </div>
    <div class="reportContainer px-4 py-2">
      <div class="reportDetails w-full grid md:flex justify-between text-md">
        <!-- {{ report }} -->
        <div>
          <p><span class="font-semibold">Location :</span> Dhanmondi, Panthapath</p>
          <p><span class="font-semibold">Category :</span> Electronics</p>
          <p><span class="font-semibold">Item :</span> Keyboard</p>
          <p><span class="font-semibold">Found Date :</span> 23/03/2025</p>
        </div>
        <div>
          <p><span class="font-semibold">Status :</span> Handovered</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
