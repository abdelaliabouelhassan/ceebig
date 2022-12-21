<template>
    <div class=" w-full py-10">
        <div class="max-w-[1136px] w-full m-auto pl-24 pr-2 xl:pr-0 xl:pl-0 z-10 relative">
            <div  class=" w-full flex flex-col items-center space-y-20">
                <h1 class=" text-white text-4xl font-medium font-markpro">Trending Documents</h1>

                <div class=" w-full grid md:grid-cols-2 gap-20 max-w-[735px] m-auto">
                     <DocumentContainer title="Technical Recruiting Handbook" price="$27.95" status="new" />
                      <DocumentContainer title="Software Engineer Handbook" price="$30.95" status="new" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DocumentContainer from "../../UI/DocumentContainer.vue"
</script>