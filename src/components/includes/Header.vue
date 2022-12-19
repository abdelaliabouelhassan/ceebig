<template>
    <div class=" w-full flex bg-background border-0 border-b border-stroke z-50 relative">
      <div class=" w-20 h-20 absolute bg-background left-0 top-0"></div>
       <div class=" m-auto">
         <img :src="logo" alt="">
       </div>
    </div>
</template>

<script setup>
    import logo from '../../assets/images/logo.png'
</script>