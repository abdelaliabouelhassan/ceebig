<template>
  <div class="w-full h-full bg-background relative">
    <Header />
    <div>
      <slot></slot>
    </div>
    <SideBar />
  </div>
</template>

<script setup>
import Header from "../includes/Header.vue";
import SideBar from "../includes/SideBar.vue";
</script>
