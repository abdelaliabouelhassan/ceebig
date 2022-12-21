<template>
    <section class=" w-full py-28 relative overflow-hidden">
        <div  class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative text-center">
            <div>
                <span class=" text-white text-4xl font-medium font-markpro text-center">Our Blogs</span>
            </div>

            <div class=" w-full grid md:grid-cols-3 space-y-60 md:space-y-0 md:gap-10 pt-72">
                <BlogCard image="images/blog1.png" title="Technical Recruiting Handbook" date="02-13-2021" />
                <BlogCard image="images/blog3.png" title="Technical Recruiting Handbook" date="02-13-2021" />
                <BlogCard image="images/blog2.png" title="Technical Recruiting Handbook" date="02-13-2021" />
            </div>
        </div>
        <Circle  class=" w-[190px] h-[190px] absolute -right-24 top-80"/>
    </section>
</template>


<script setup>
import BlogCard from "../../UI/BlogCard.vue";
import Circle from "../../UI/Circle.vue";
</script>