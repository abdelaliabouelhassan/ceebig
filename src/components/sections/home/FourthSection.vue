<template>
  <section class="w-full py-5 md:py-20 relative overflow-hidden">
    <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative">
      <div class="w-full grid lg:grid-cols-2 gap-10">
        <div class="w-full">
          <div class="relative sm:w-[466px] sm:h-[358px] flex">
            <div class="w-full h-full z-10">
              <img
                src="../../../assets/images/border.png"
                class="w-full h-full"
                alt=""
              />
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center pt-5 z-10"
            >
              <CogScreen />
            </div>
            <div
              class="lg:w-[86px] w-[66px] h-[66px] lg:h-[86px] rounded-full z-0 rotate-45 absolute -bottom-10   -left-10"
            >
              <Circle />
            </div>
          </div>
        </div>

        <div class="w-full text-end space-y-5">
          <h1 class=" text-white w-full font-markpro font-medium text-[36px] md:text-[40px] lg:text-[56px] lg:leading-[70.98px]">
            Software Engineering
          </h1>
          <p class="border-0 border-r border-stroke text-white font-markpro font-light text-lg md:text-xl lg:text-2xl pr-4">
            Software engineering and coding are two completely different
            concepts, coding a product out is called implementation, but
            software engineering covers more than just implementation, instead,
            it is a more comprehensive engineering process.
          </p>
        </div>
      </div>
    </div>
    <Circle class="w-[119.39px] h-[119.39px]  rounded-full  rotate-90 absolute top-80 -right-16 "/>
     <DotPath class=" w-full absolute bottom-0"/>
  </section>
</template>

<script setup>
import CogScreen from "../../UI/CogScreen.vue";
import Circle from "../../UI/Circle.vue";
import DotPath from "../../UI/DotPath.vue"
</script>
