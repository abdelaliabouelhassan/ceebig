<template>
    <section class=" w-full py-10">
        <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative space-y-28">
          <div class="flex flex-col items-start space-y-2">
            <div
                class=" text-white w-full font-markpro font-medium text-[36px] md:text-[40px] lg:text-[56px] lg:leading-[70.98px]"
            >
                Case Studies
            </div>
            <div class="border-0 border-l max-w-[558px] border-stroke text-white font-markpro font-light text-lg md:text-xl lg:text-2xl pl-4">
            Recent Ceebig Innovative solutions. Can we help you in a similar way?
            </div>
          </div>
         <div class=" w-full grid md:grid-cols-2 gap-10">
            <Screen />
            <ContentSlide class=" lg:pl-28" :data="data"/>
         </div>
        </div>
    </section>
</template>


<script setup>
 import Screen from "../../UI/Screen.vue";
 import ContentSlide from "../../UI/ContentSlide.vue";
 import { ref } from "@vue/reactivity";

 const data = ref([
    {
        title:'Ceebig and Porsche Club of America - Carolinas',
        body:'Ceebig rebuilt the website for Porsche Club of America Carolinas Region. With the new site design, PCA CR is aiming to attract more younger Porsche owners to be part of the community.',
    },
    {
        title:'lululemon - Digital Transformation',
        body:'lululemon is a Canadian athletic apparel company that designs and manufactures athletic wear for yoga, running, training, and most other sweaty pursuits. Ceebig helped lululemon to transform their digital presence by building a new website and a mobile app.', 
    },
    {
        title:'Loreal - Digital Transformation',
        body:'Loreal is a French cosmetics company that owns many of the world’s best-known beauty brands and is the world’s largest cosmetics company. Ceebig helped Loreal to transform their digital presence by building a new website and a mobile app.',
    }
 ])
</script>