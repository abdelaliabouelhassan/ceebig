<template>
    <div class=" w-full  max-w-[874px] m-auto py-4 lg:py-2 text-white rounded-md  lg:rounded-full flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:items-center lg:justify-between pl-10 pr-2" style="background: linear-gradient(90.13deg, rgba(255, 255, 255, 0.1) 0.11%, rgba(237, 237, 237, 0.1) 24.12%, rgba(214, 214, 214, 0.1) 56.26%, rgba(237, 237, 237, 0.09) 78.54%, rgba(255, 255, 255, 0.08) 99.94%);backdrop-filter: blur(1.5px);" >
        <span class=" text-lg text-white font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300 ">About Us</span>
        <span class=" text-lg text-white font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300">Services</span>
        <span class=" text-lg text-white font-markpro font-[450] cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300">Solutions</span>
        <span class=" text-lg text-white font-markpro font-[450] cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300">Online Store</span>
        <div class=" flex items-center space-x-2">
            <Phone />
            <span class=" text-lg text-white font-markpro font-[450]">+1 (800) 981-7758</span>
        </div>
        <button class="  z-10 transform ease-in-out delay-100 duration-300  text-lg font-bold font-markpro text-center py-2 px-6 rounded-full bg-primary hover:bg-stroke hover:text-background">Book Session</button>
    </div>
</template>


<script setup>
 import Phone from '../icons/Phone.vue'
</script>