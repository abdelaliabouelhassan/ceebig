<template>
    <div class=" w-full flex bg-background border-0 border-b border-stroke z-50 relative">
       <router-link to="/" class=" m-auto">
         <img :src="logo" alt="">
       </router-link>
    </div>
</template>

<script setup>
    import logo from '../../assets/images/logo.png'
</script>