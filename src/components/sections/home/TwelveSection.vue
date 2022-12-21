<template>
    <section class=" w-full py-28 relative overflow-hidden">
        <div class="w-full h-[600px] absolute top-5 left-0">
            <img
                src="../../../assets/images/bg1.png"
                alt=""
                class="w-full h-full  opacity-10"
            />
        </div>
        <div  class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative text-center">
           <NewsletterCard />
        </div>
           
    </section>
</template>


<script setup>
import NewsletterCard from "../../UI/NewsletterCard.vue";
</script>