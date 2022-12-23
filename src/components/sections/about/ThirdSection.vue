<template>
    <div class=" w-full pt-20">
        <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative py-10 md:space-y-28">
           <div class=" w-full grid  lg:grid-cols-3 gap-x-0 gap-y-24">
              <div></div>
              <FeatureCard position="center" :header="false" icon="rocket" title="Ceebig Inc. Launched" date="June 2013" description="Ceebig Incorporation (C-Corporation) launched in North Carolina, United States in summer of 2013" />
              <div></div>
           </div>
           <div class=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 md:gap-y-40">
                <FeatureCard v-for="(item,index,key) in data" :key="key" :icon_outline="item.icon_outline" :icon="item.icon" :position="item.position" :header="item.header" :title="item.title" :date="item.date" :description="item.description" />
           </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "@vue/reactivity"
import FeatureCard from "../../UI/FeatureCard.vue"
const data = ref([
    {
        title: "First Employee",
        date: "August 2013",
        description: "Ceebig Inc. hired its first full time U.S. based employee 2 months after the company is launched",
        icon: "check",
        position: "left",
        header: false,
        icon_outline:false,
    },
    {
        title: "First Offshore Office",
        date: "July 2014",
        description: "Ceebig Inc. opened its first office and R&D center in China",
        icon: "check",
        position: "left",
        header: true,
        icon_outline:false,
    },
    {
        title: "6 Global Locations",
        date: "October 2015",
        description: "Ceebig Inc. continuously expanded its footprints into Japan, Singapore, UK and Australia",
        icon: "check",
        position: "left",
        header: false,
        icon_outline:false,
    },
    {
        title: "Cloud Migration",
        date: "May 2016",
        description: "Ceebig Inc. fully migrated its infrastructure to the cloud and launched Ceebig Cloud Services Department",
        icon: "check",
        position: "left",
        header: false,
        icon_outline:false,
    },
    {
        title: "Venture Studio",
        date: "September 2018",
        description: "Ceebig Inc. launched Venture Studio and committed to help individual with visions and dreams",
        icon: "check",
        position: "left",
        header: true,
        icon_outline:false,
    },
    {
        title: "Ceebig Acquired GetArt LLC",
        date: "June 2020",
        description: "Ceebig Inc. acquired GetArt LLC and expanded into Artwork Technology Industry",
        icon: "check",
        position: "left",
        header: false,
        icon_outline:false,
    },
    {
        title: "Ceebig Acquired J.R. Revolution Technologies LLC",
        date: "September 2021",
        description: "Ceebig Inc. Acquired J.R. Revolution Technologies and expanded into Web 3 technologies and Metaverse",
        icon: "check",
        position: "left",
        header: false,
        icon_outline:false,
    },
    {
        title: "Global Partnership Network Launch",
        date: "July 2022",
        description: "Ceebig Inc. announced and launched the Global Partnership Network Program to better serve our global customers",
        icon: "check",
        position: "left",
        header: true,
        icon_outline:false,
    },
    {
        title: "Ceebig Achieved SOC2 Certification",
        date: "October 2022",
        description: "Ceebig Inc. qualified and achieved SOC2 Compliance.",
        icon: "time",
        position: "left",
        header: false,
        icon_outline:true,
    },
])
</script>