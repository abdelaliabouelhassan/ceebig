<template>
  <div class="w-full space-y-5">
    <DocumentCard />
    <div class="flex flex-col items-start space-y-8">
      <span class="text-2xl font-marcellus font-normal text-white max-w-[316px]  duration-200 cursor-pointer hover:text-primary"
        >{{props.title}}</span
      >
      <div class="w-full flex justify-between items-center">
        <span class=" text-white font-medium font-markpro text-2xl">{{props.price}}</span>
        <span class=" text-primary font-normal font-markpro text-lg">{{props.status}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import DocumentCard from "./DocumentCard.vue";

const props = defineProps({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
  },
});


</script>
