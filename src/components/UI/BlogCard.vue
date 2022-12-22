<template>
    <div class=" w-full space-y-5 group">
        <div class=" w-full h-[170px] border border-stroke p-4">
            <div class=" w-full h-[300px] -mt-40 overflow-hidden">
                <img :src="props.image" class=" object-cover w-full h-full group-hover:scale-125 transform ease-in-out duration-500" alt="">
            </div>
        </div>
        <div class=" w-full flex flex-col items-start space-y-4">
            <h1 class=" text-white font-normal text-lg md:text-2xl font-marcellus  cursor-pointer duration-500 hover:text-opacity-50">{{props.title}}</h1>
            <span class=" text-base md:text-lg text-white font-normal font-markpro text-opacity-50">{{props.date}}</span>
        </div>
        <div class=" w-full flex justify-end">
            <a href="#" class=" flex items-center space-x-2">
                <span class=" text-stroke text-base md:text-lg font-normal font-markpro hover:text-opacity-50 duration-500">Read More</span>
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0088 0.25853L17.7364 5.87585C18.0879 6.22056 18.0879 6.77944 17.7364 7.12415L12.0088 12.7415C11.6574 13.0862 11.0875 13.0862 10.736 12.7415C10.3846 12.3968 10.3846 11.8379 10.736 11.4932L14.9272 7.38268L0 7.38268L0 5.61732L14.9272 5.61732L10.736 1.50682C10.3846 1.16212 10.3846 0.603237 10.736 0.25853C11.0875 -0.0861767 11.6574 -0.0861767 12.0088 0.25853Z" fill="#D3D0FF"/>
                </svg>

            </a>
        </div>
    </div>
</template>


<script setup>
 const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
 })
</script>