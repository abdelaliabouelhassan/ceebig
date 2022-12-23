<template>
    <section class=" w-full py-28">
        <div  class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative">
            <div class=" flex flex-col items-center space-y-1">
                <h1 class=" font-markpro md:text-[28px] text-[24px] lg:text-[36px] text-white font-medium">Our Core Values</h1>
            </div>
            <div class=" w-full flex flex-col items-start space-y-8 pt-20">
                <TrustCard title="Insist on High Standards" body="Standards matter and we constantly raise them internally, we are proud to put our names behind every product and service we deliver to our customers."/>
                <TrustCard title="Go Above and Beyond" body="We don’t just do what we were asked to do, we reflect and we walk the extra mile to raise the bar, identify inefficiencies, explore enhancements and plan multiple steps ahead."/>
                <TrustCard title="Take Ownership and Initiative" body="We treat each project as our own internal venture project, we care about your success as it will justify our success. We evaluate everything critically and take every opportunity to be extraordinary."/>
                <TrustCard title="See Big and Dream Big" body="We are innovative individuals who always think outside the box; we envision the future and what we could achieve, and then we work backwards to implement our visions."/>
                <TrustCard title="Be Passionate and Be Curious" body="We love and enjoy what we do, we want to be extraordinary and we are eager to acquire all the skills that take us there, so we could serve our customers better."/>
                <TrustCard title="Rebel and Grow" body="When we are frustrated with where we are at, we don’t just settle and accept fate, we rebel; we change the reality and we grow from it."/>
            </div>
        </div>
    </section>
</template>


<script setup>
import TrustCard from "../../UI/TrustCard.vue";
</script>