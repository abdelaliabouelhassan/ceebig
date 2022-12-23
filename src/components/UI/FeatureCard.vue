<template>
    <div class=" w-full p-5 border-0 border-t border-stroke relative flex h-full">
        <div class=" w-full left-0   h-[90px] absolute hidden md:flex" v-if="header">
            <div class=" h-full border-0 border-r border-stroke  -mt-[111px]  m-auto"></div>
        </div>

        <div class=" w-full h-full flex flex-col justify-between" :style="{'align-items': position}">
          <div class=" flex flex-col  space-y-4" :style="{'align-items': position}">
             <div class=" w-16 h-16 md:w-20 md:h-20 rounded-full  flex" :class="{'bg-primary':!icon_outline,' border-2 border-stroke':icon_outline}">
                <div class=" m-auto">
                    <Rocket v-if="props.icon == 'rocket'" />
                    <Check  v-else-if="props.icon == 'check'"/>
                    <Time v-else-if="props.icon == 'time'"/>
                </div>
                
               
            </div>
            <span class=" text-white font-normal font-marcellus  text-xl md:text-2xl">{{props.title}}</span>
            <p class=" text-center text-stroke text-sm md:text-base font-markpro " :style="{'text-align': position}">
               {{props.description}}
            </p>
          </div>
           <div  :class="{'w-full':position == 'left'}" class=" pt-5">
             <span class=" text-white text-xs md:text-lg font-normal font-markpro text-opacity-50" :class="{'float-right':position == 'left'}">{{props.date}}</span>
           </div>
        </div>
    </div>
</template>


<script setup>
 import Rocket from "../../components/icons/Rocket.vue"
 import Check from "../../components/icons/Check.vue"
 import Time from "../../components/icons/Time.vue"
 const props = defineProps({
     title: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     date: {
         type: String,
         required: true
     },
     icon:{
        type:String,
        default:'check',
     },
     icon_outline:{
        type:Boolean,
        default:false
     },
     position: {
         type: String,
         default: 'left'
     },
     header:{
        type:Boolean,
        default:false
     }
 })
</script>