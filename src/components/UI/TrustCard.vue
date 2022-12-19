<template>
        <div class=" w-full relative border-0 border-b-2 border-stroke py-10">
            <div class=" w-full flex lg:flex-row flex-col items-start space-y-5 lg:space-y-0 lg:justify-between lg:items-center lg:pr-28">
                <h2 class=" font-marcellus font-normal md:text-2xl lg:text-4xl text-white">{{props.title}}</h2>
                <p class=" lg:text-base text-sm text-white font-normal font-markpro max-w-[418px]">
                   {{props.body}}
                </p>
            </div>

            <div class=" w-[60px] h-[60px] lg:w-[76px] lg:h-[76px] rounded-full bg-primary flex hover:bg-opacity-70 cursor-pointer absolute right-0 top-0 lg:top-8">
                <svg class=" m-auto" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.435 2.56476C30.435 1.46019 29.5396 0.564757 28.435 0.564756L10.435 0.564758C9.33043 0.564757 8.435 1.46019 8.435 2.56476C8.435 3.66933 9.33043 4.56476 10.435 4.56476L26.435 4.56476L26.435 20.5648C26.435 21.6693 27.3304 22.5648 28.435 22.5648C29.5396 22.5648 30.435 21.6693 30.435 20.5648L30.435 2.56476ZM2.97915 30.849L29.8492 3.97897L27.0208 1.15054L0.150728 28.0206L2.97915 30.849Z" fill="white"/>
                </svg>
            </div>
        </div>
</template>

<script setup>
const props  = defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})
</script>