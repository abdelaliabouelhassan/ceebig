<template>
    <div class=" w-full overflow-hidden">
        <div  class=" w-full flex items-center justify-between">
            <ArrowButton @click="Prev" direction="left" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px] hidden sm:block"/>
             <div class=" w-full  max-w-[826px] px-4 lg:px-0 ">
                <div class=" w-full flex items-center justify-between">
                    <div class=" flex items-center justify-between w-full">
                        <div class=" w-[40px] h-[40px] md:w-[77px] md:h-[77px] rounded-full bg-gray-400 opacity-[0.3]" v-if="maxIndex >= 2">
                        <img :src="users[0].img" alt="" class=" w-full h-full" >
                    </div>
                     <div class="w-[40px] h-[40px] md:w-[77px] md:h-[77px] rounded-full bg-gray-400 opacity-[0.6]"  v-if="maxIndex >= 3">
                        <img :src="users[1].img" alt="" class=" w-full h-full">
                     </div>
                    </div>
                     <div class=" w-full flex justify-center items-center ">
                    <div class=" w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-full bg-gray-400  bg-gradient-to-br from-[#4E46E5] to-[#A3A2B2] p-[3px]  ">
                        <div class=" w-full h-full rounded-full bg-gray-400">
                            <img :src="users[maxIndex > 5 ? 2 : getActiveIndex()].img" alt="" class=" w-full h-full">
                        </div>
                      </div>
                     </div>
                     <div class=" flex items-center justify-between w-full">
                       <div class=" w-[40px] h-[40px] md:w-[77px] md:h-[77px] rounded-full bg-gray-400 opacity-[0.6]"  v-if="maxIndex >= 4">
                        <img :src="users[3].img" alt="" class=" w-full h-full">
                      </div>
                      <div class="w-[40px] h-[40px] md:w-[77px] md:h-[77px] rounded-full bg-gray-400 opacity-[0.3]" v-if="maxIndex >= 5">
                        <img :src="users[4].img" alt="" class=" w-full h-full">
                      </div>
                     </div>
                </div>
             </div>
            <ArrowButton @click="Next" direction="right" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]  hidden sm:block"/>
        </div>

        <div class=" w-full flex items-center justify-center pt-10">
            <div class=" flex items-center space-y-2 flex-col">
                <span class=" text-white font-markpro text-lg font-medium"> {{users[maxIndex > 5 ? 2 : getActiveIndex()].name}}</span>
                <span class=" text-[#D3D0FF] font-normal font-markpro text-sm">{{users[maxIndex > 5 ? 2 : getActiveIndex()].position}}</span>
            </div>
        </div>


        <div class=" w-full flex items-center justify-between pt-2 sm:hidden">
            <ArrowButton @click="Prev" direction="left" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"/>
            <ArrowButton @click="Next" direction="right" class="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"/>

        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import ArrowButton from "./ArrowButton.vue"



const props = defineProps({
    users: {
        type: Array,
        default: [],
        required: true
    }
})

const emit = defineEmits(['changed'])


const users = ref(props.users)

const Next = () => {
    users.value.push(users.value.shift())
    emit('changed', users.value[maxIndex > 5 ? 2 : getActiveIndex()])
    
}

const Prev = () => {
    users.value.unshift(users.value.pop())
    emit('changed', users.value[maxIndex > 5 ? 2 : getActiveIndex()])
}

const getActiveIndex = () => {
    return Math.floor(users.value.length / 2)
}

const maxIndex = ref(users.value.length)

onMounted(() => {
    emit('changed', users.value[maxIndex > 5 ? 2 : getActiveIndex()])
})



</script>
