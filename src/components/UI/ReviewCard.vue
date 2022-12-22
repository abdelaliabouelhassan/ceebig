<template>
    <div  class=" w-full border border-stroke py-10 px-4  relative overflow-hidden">
        <div class="w-full h-full absolute -bottom-5 left-0">
        <img
            src="../../assets/images/bg1.png"
            alt=""
            class="w-full h-full object-cover md:object-fill opacity-10"
        />
        </div>
        <div class=" w-full flex flex-col items-start sm:items-center space-y-10 relative z-10">
            <div>
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="42" cy="42" r="42" fill="#4E46E5"/>
                    <path d="M35.8625 54L38.9185 28H32.348L27 54H35.8625ZM53.944 54L57 28H50.4295L45.0815 54H53.944Z" fill="white"/>
                </svg>
            </div>
            <p class=" text-lg font-markpro text-white font-normal text-start sm:text-center max-w-[650px]">
                {{props.paragraph}}
            </p>

            <div class=" flex flex-col items-start space-y-4">
                <div class=" relative">
                    <span class=" text-lg font-markpro font-medium text-white z-10  relative">{{props.name}}</span>
                    <div class=" w-[33px] h-[33px] rounded-full absolute -top-1 -left-1" style="background: linear-gradient(123.96deg, #4E46E5 14.5%, #A3A2B3 86.56%);transform: rotate(90deg);"></div>
                </div>
                <span class=" text-stroke text-sm font-normal font-markpro">{{props.subtitle}}</span>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
})
</script>