<template>
     <section class=" w-full pt-40 pb-10 relative overflow-hidden">
         <div class="w-full  absolute top-10 left-0">
            <img
                src="../../../assets/images/bg2.png"
                alt=""
                class="   object-cover opacity-10"
            />
        </div>
        <div class="max-w-[1236px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative space-y-28">
         <div class=" w-full">
                <ContentSlideProgress :data="data" />
         </div>
        </div>
    </section>
</template>

<script setup>
 import { ref } from "@vue/reactivity";
import ContentSlideProgress from "../../UI/ContentSlideProgress.vue";
 const data = ref([
    {
        title: "Everything You Need",
        header: "Industries We Serve in",
        items: [
            {
                title: "Automotive",
            },
            {
                title: "Government & Education",
            },
            {
                title: "Public Services"
            }
           
        ],
    },
    {
        title: "Lorem ipsum dolor sit amet",
        header: "Lorem ipsum dolor",
        items: [
            {
                title: "Donec auctor",
            },
            {
                title: "Bibendum",
            },
            {
                title: "Tincidunt"
            }
           
        ],
    },
    {
        title: "Risus nec, aliquet",
        header: "Mauris euismod",
        items: [
            {
                title: "Sed ut perspiciatis",
            },
            {
                title: "Bibendum",
            },
            {
                title: "Tincidunt"
            }
           
        ],
    }
    
 ])
</script>