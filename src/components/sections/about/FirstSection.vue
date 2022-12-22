<template>
  <section class="w-full h-full xl:h-screen pb-40 pt-28 relative overflow-hidden">
    <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 relative z-10 space-y-10">
     <div class=" w-full grid md:grid-cols-3 gap-10">
        <div class=" w-full col-span-2 flex flex-col items-start space-y-4">
            <span class=" text-lg sm:text-2xl font-normal text-white font-marcellus" id="about">About Us</span>
            <h1  class=" text-[50px] sm:text-[100px] md:text-[90px] lg:text-[100px] xl:text-[128px] font-markpro text-white font-bold" id="headertitle">Ceebig US</h1>
            <span class=" font-marcellus font-bold text-white text-[25px] sm:text-[40px] lg:text-[56px]" id="headersubtitle">our Global Network</span>
        </div>

        <div class=" w-full flex flex-col items-start space-y-8 xl:pl-2">
            <span class=" text-white font-normal font-marcellus text-xl sm:text-2xl" v-html="title"></span>
            <p class="  text-sm sm:text-base font-normal text-white font-markpro" v-html="paragraph1"></p>
            <p class=" text-sm sm:text-base font-normal text-white font-markpro" v-html="paragraph2"></p>
        </div>
     </div>

      <div class="w-full pt-16 z-10">
        <BookSession class="z-10" />
      </div>
    </div>
    <div class="w-full h-full absolute -top-40 left-0">
      <img
        src="../../../assets/images/bg1.png"
        alt=""
        class="w-full h-full object-cover md:object-fill opacity-10"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import BookSession from "../../UI/BookSession.vue";

const title = ref("Your envision, our motivation")
const paragraph1 = ref("Here at Ceebig, every customer receives an extraordinary service that comes with the highest standard provided by individuals who are passionate, obsessed and desperate for self-actualization. We strive to create a diversified, equal and inclusive environment to promote innovation, trust and collaboration.")
const paragraph2 = ref("Here at Ceebig, every customer receives an extraordinary service that comes with the highest standard provided by individuals who are passionate, obsessed and desperate for self-actualization. We strive to create a diversified, equal and inclusive environment to promote innovation, trust and collaboration.")


onMounted(()=>{
    const titleClone = title.value.split("")
    const paragraph1Clone = paragraph1.value.split("")
    const paragraph2Clone = paragraph2.value.split("")
    title.value = ""
    paragraph1.value = ""
    paragraph2.value = ""
    let i = 0
    let j = 0
    let k = 0
    const typing = setInterval(()=>{
        if(i < titleClone.length){
            title.value += titleClone[i]
            i++
        }else if(j < paragraph1Clone.length){
            paragraph1.value += paragraph1Clone[j]
            j++
        }else if(k < paragraph2Clone.length){
            paragraph2.value += paragraph2Clone[k]
            k++
        }else{
            clearInterval(typing)
        }
    }, 15)

    const headertitle = document.getElementById("headertitle")
    const headersubtitle = document.getElementById("headersubtitle")
    const about = document.getElementById("about")

   //parallax effect to right
    window.addEventListener("scroll", ()=>{
        const scroll = window.scrollY
        headertitle.style.transform = `translateX(${-scroll * 0.3}px)`
        headersubtitle.style.transform = `translateX(${-scroll * 0.2}px)`
        about.style.transform = `translateX(${-scroll * 0.4}px)`
    })

   
   

    

});

</script>
