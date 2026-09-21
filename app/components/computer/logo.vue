<template>
    <div class="flex justify-center items-center h-screen">
        <div class="logo-container flex flex-col gap-4 items-center">
            <div class="logo" />
            <div class="relative z-0">
                <h1 class="font-pixel text-white">OceanOS</h1>
                <h1 class="absolute z-1 top-[2px] left-[2px] font-pixel text-black">OceanOS</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-4xl font-bold
}

.logo-container {
    animation: appear 5s ease-in forwards;
}

@keyframes appear {
    0% { opacity: 0;;}
    40%, 80% { opacity: 1;}
    100% { opacity: 0;}
}

.logo {
    width: 224px;
    height: 220px;
    background-image: url('sprites/logo.png');
    background-color: rgba(255, 255, 255, 0);
    background-size: 224px 220px;
    image-rendering: pixelated;
}


</style>