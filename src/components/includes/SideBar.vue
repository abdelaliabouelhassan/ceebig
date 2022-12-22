<template>
  <div
    class=" absolute top-0 left-0 border-0 border-r border-stroke h-full pt-48 w-20 z-50 "
  >
    <div class="flex flex-col items-center space-y-56">
      <div class="rotate-90 rounded-full bg-[#2E2E2E]">
        <div class="flex items-start space-x-10 px-6 py-1">
          <Arrow class="-rotate-90" />
          <span
            class="text-white -rotate-180 whitespace-nowrap font-markpro font-[450] text-base"
            >Submit RFP</span
          >
        </div>
      </div>
      <div class="-rotate-90 py-14">
        <p
          class="text-base text-white font-normal font-markpro whitespace-nowrap"
        >
          Setup a free consultation today.
        </p>
      </div>
      <div class="-rotate-90">
        <p
          class="text-2xl text-white font-normal font-marcellus whitespace-nowrap"
        >
          CEEBIG
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Arrow from "../icons/Arrow.vue";
</script>


