<template>
    <div class=" w-full py-20 md:py-40 relative overflow-hidden">
        <div class="w-full h-[600px] absolute -top-28 left-0">
        <img
            src="../../../assets/images/bg1.png"
            alt=""
            class="w-full h-full  opacity-10"
        />
        </div>
        <div class="max-w-[1236px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative space-y-20">
            <div class=" w-full flex flex-col  items-center space-y-5">
                <span class=" font-markpro font-medium text-[40px] md:text-[56px] text-white">Testimonials</span>
                <h1 class=" text-white text-sm md:text-base font-markpro font-normal text-center ">We’re entrepreneurs, engineers, & designers creating your future</h1>
            </div>
            <div class=" w-full flex flex-col  items-center space-y-5">
                <div>
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.79457 20L9.13752 0H4.10017L0 20H6.79457ZM20.657 20L23 0H17.9626L13.8625 20H20.657Z" fill="#4E46E5"/>
                    </svg>
                </div>
                <p class=" text-base md:text-lg font-normal font-markpro text-white text-center max-w-[650px]">
                    Everyone at Ceebig has a vision and they have actionable plans to achieve it, just like you, if we are alike, let us make the impact together and be proud of it!
                </p>
            </div>


        <div class=" w-full">
            <Testimonial :users="users"/>
        </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "@vue/reactivity";
import Testimonial from "../../UI/Testimonial.vue";

const users = ref([
    {
        img: "images/user1.png",
        name: "Howard & Parrish",
        position: "Founders at Ceebig Inc."
    },
    {
        img: "images/user2.png",
        name: "abo & piy",
        position: "Founders at master Inc."
    },
    {
        img: "images/user3.png",
        name: "jhon & Parrish",
        position: "Founders at google Inc."
    },
    {
        img: "images/user4.png",
        name: "nashi & fado",
        position: "Founders at facebook Inc."
    },
    {
        img: "images/user5.png",
        name: "loran & miya",
        position: "Founders at boys Inc."
    },
    
])

</script>