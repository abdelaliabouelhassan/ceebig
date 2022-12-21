<template>
    <div class=" w-full space-y-10">
        <div class=" w-full grid md:grid-cols-3 gap-10">
            <div class=" w-full md:col-span-2  grid sm:grid-cols-3 gap-5">
                <div v-for="(item,index,key) in props.data[index].items" :key="key" class=" w-full border border-[#D3D0FF] h-[203px] p-4 flex flex-col justify-between cursor-pointer group">
                   <button class=" w-full">
                    <svg class=" float-right" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="29" cy="29" r="29" transform="rotate(90 29 29)" fill="#4E46E5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0241 17.7342L41.0875 21.2346C41.8891 21.4494 42.3649 22.2734 42.1501 23.075L38.6497 36.1384C38.4349 36.9401 37.6109 37.4158 36.8093 37.201C36.0077 36.9862 35.5319 36.1622 35.7467 35.3606L38.3081 25.8014L16.7238 38.263L15.2212 35.6603L36.8054 23.1986L27.2462 20.6372C26.4446 20.4224 25.9689 19.5984 26.1837 18.7968C26.3984 17.9952 27.2224 17.5194 28.0241 17.7342Z" fill="white"/>
                    </svg>
                   </button>
                   <span class=" font-markpro font-normal text-white text-xl sm:text-2xl group-hover:underline decoration-wavy">{{item.title}}</span>
                </div>
            </div>
            <div class=" w-full flex flex-col items-end space-y-4 xl:pl-14">
                <span class=" font-marcellus font-normal text-lg sm:text-xl  lg:text-xl xl:text-2xl text-white text-end">{{props.data[index].title}}</span>
                <h2 class=" font-markpro font-medium text-[36px] sm:text-[40px] xl:text-[56px] text-white text-end">{{props.data[index].header}}</h2>
                <div class=" flex items-center space-x-8">
                    <ArrowButton direction="left" @click="prev" :disabled="index == 0" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"/>
                    <ArrowButton  direction="right" @click="next"  :disabled="index >=  props.data.length - 1" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"/>
                </div>
            </div>
        </div>
        <div class=" w-full h-1 bg-stroke bg-opacity-20 transition-all duration-500 ease-in-out">
                <div class=" h-full bg-primary" :style="slideProgressStyle"></div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core";
import ArrowButton from "./ArrowButton.vue"
const props = defineProps({
    data:{
        type: Array,
        default: () => [],
        required: true,
    },
})
const index = ref(0);
const next = () => {
    if(index.value < props.data.length - 1){
        index.value++;
    }
}

const prev = () => {
    if(index.value > 0){
        index.value--;
    }
}



const slideProgress = computed(() => {
    return (index.value / (props.data.length - 1)) * 100;
})

const slideProgressStyle = computed(() => {
    return {
         width: `${slideProgress.value}%`,
         transition: "width 1s ease-in-out"
    }
})







</script>