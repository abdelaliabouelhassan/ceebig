<template>
  <div class="w-full flex flex-col items-start space-y-8 transition-all duration-100 ease-in-out"  
 >
    <h1   class="font-marcellus font-normal text-3xl md:text-4xl text-white">
      {{ slide.title }}
    </h1>
    <p class=" font-normal font-markpro text-white text-sm md:text-base">
     {{ slide.body }}
    </p>

    <div class=" flex items-center space-x-8">
        <ArrowButton direction="left" @click="prev" :disabled="index == 0" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
        <ArrowButton  direction="right" @click="next"  :disabled="index >=  props.data.length - 1" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"/>
    </div>

    <a href="#"  class=" flex items-center space-x-4" target="_blank">
       <span class=" text-base md:text-lg font-markpro font-normal text-stroke hover:underline decoration-wavy"> View More Client Success Stories</span>
       <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0088 0.25853L17.7364 5.87585C18.0879 6.22056 18.0879 6.77944 17.7364 7.12415L12.0088 12.7415C11.6574 13.0862 11.0875 13.0862 10.736 12.7415C10.3846 12.3968 10.3846 11.8379 10.736 11.4932L14.9272 7.38268L0 7.38268L0 5.61732L14.9272 5.61732L10.736 1.50682C10.3846 1.16212 10.3846 0.603237 10.736 0.25853C11.0875 -0.0861768 11.6574 -0.0861768 12.0088 0.25853Z" fill="#D3D0FF"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import ArrowButton from "./ArrowButton.vue"

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const index = ref(0);

const next = () => {
    if (index.value < props.data.length - 1) {
        index.value++;
    }
};

const prev = () => {
    if (index.value > 0) {
        index.value--;
    }
};

const slide = computed(() => {
    return props.data[index.value];
});

// const slideStyle = computed(() => {
//     return {
//         transform: `translateX(-${index.value * 100}%)`
//     };
// });

// const slideClass = computed(() => {
//     return {
//         "transition-all duration-500 ease-in-out": true
//     };
// });

</script>

