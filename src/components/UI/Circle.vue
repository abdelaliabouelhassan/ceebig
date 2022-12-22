<template>
    <div class="" :id="id">
        <img
            src="../../assets/images/Ellipse.png"
            class="w-full h-full rounded-full"
            id="circle1"
            alt=""
        />
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "@vue/runtime-core";
    const id  = "circle-" + Math.random().toString(36).substr(2, 9);
    onMounted(() => {
        const circle = document.getElementById(id);
        const tl = circle.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: "translate(0, 10px)" },
                { transform: "translate(0, 0)" },
                { transform: "translate(0, -10px)" },
                { transform: "translate(0, 0)" },
            ],
            {
                duration: 5000,
                iterations: Infinity,
            }
        );
        
    });


</script>