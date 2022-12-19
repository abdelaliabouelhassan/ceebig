<template>
    <section class=" w-full py-28">
        <div  class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative">
            <div class=" flex flex-col items-center space-y-1">
                <h1 class=" font-markpro md:text-[48px] text-[34px] lg:text-[56px] text-white font-medium">Build with Trust</h1>
                <p class=" lg:text-2xl text-base md:text-lg font-markpro font-light text-white text-center max-w-[856px]">With comprehensive cross domain service offerings, we are your one-stop shop to scale your business and vision.</p>
            </div>
            <div class=" w-full flex flex-col items-start space-y-8 pt-20">
                <TrustCard title="Cloud Infrastructure" body="Migrate your on-premise data center to the cloud, and take advantage of distributed computing"/>
                <TrustCard title="Cyber Security" body="Secure your online system and your network with ease, protecting core business operations from attacks"/>
                <TrustCard title="Continuous Improvement" body="Ongoing advancement of products, services, and processes through incremental and breakthrough improvements"/>
                <TrustCard title="SOC 2 Compliance" body="Customer data is managed by maintaining the following principles: security, availability, processing integrity, confidentiality, and privacy"/>
                <TrustCard title="Global R&D" body="Ceebig has R&D centers cross the globe in over 30 countries across 15+ timezones. We provide attention to your needs 24/7"/>
                <TrustCard title="Digital Transformation" body="We guide your digital migration by transforming manual processes into automation and unlocking unlimited operational efficiencies"/>
            </div>
        </div>
    </section>
</template>


<script setup>
import TrustCard from "../../UI/TrustCard.vue";
</script>