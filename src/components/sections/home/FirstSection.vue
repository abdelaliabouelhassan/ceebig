<template>
  <section class="w-full h-full pb-40 pt-28 relative overflow-hidden">
    <div class="w-full h-full absolute -bottom-0 left-0">
      <img
        src="../../../assets/images/bg1.png"
        alt=""
        class="w-full h-full opacity-10"
      />
    </div>
    <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0">
      <div class="w-full flex flex-col sm:-space-y-5 xl:-space-y-14 relative">
        <span
          class="text-white font-bold font-markpro text-[30px] sm:text-[60px] md:text-[90px] xl:text-[128px] z-10"
          >Turn your vision</span
        >
        <span
          class="text-white text-[30px] sm:text-[60px] md:text-[90px] xl:text-[128px] font-normal font-marcellus text-end z-10"
          >into Reality</span
        >
        <div class="absolute right-10 lg:right-80 top-0 lg:top-5 z-0">
          <div class="relative">
            <div
              class="lg:w-[264px] w-[190px] h-[190px] lg:h-[264px] rounded-full z-0"
            >
              <img
                src="../../../assets/images/Ellipse.png"
                class="w-full h-full rounded-full"
                id="circle1"
                alt=""
              />
            </div>
            <div
              class="lg:w-[73px] w-[60px] h-[60px] lg:h-[73px] absolute -right-4 bottom-2 z-0"
            >
              <img
                src="../../../assets/images/Ellipse.png"
                class="w-full h-full rounded-full rotate-90"
                id="circle2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-[390px] z-50 pt-28 sm:pt-20 md:pt-0">
        <p
          class="text-white sm:text-base text-sm font-normal font-markpro z-50 relative"
        >
          At Ceebig, every customer receives extraordinary service with the
          highest standard powered by passionate individuals obsessed with
          self-actualization.
        </p>
      </div>

      <div class="w-full pt-40 z-10">
        <BookSession class="z-10" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import BookSession from "../../UI/BookSession.vue";

onMounted(() => {
  const circle1 = document.getElementById("circle1");
  const circle2 = document.getElementById("circle2");

  document.addEventListener("mousemove", (e) => {
    let width = window.innerWidth;
    if (width > 768) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;

      circle1.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
      circle2.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    }
  });
});
</script>
