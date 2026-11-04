<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/images/prayingpetals/title.png" class="max-w-full" />
    </div>
    <NuxtLink href="https://rovkin.itch.io/prayingpetals" target="_blank" class="font-pixel cursor-interact-sprite w-fit">https://rovkin.itch.io/prayingpetals</NuxtLink>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Skills used:</h1>
        <h2 class="font-pixel bg-gray-300">C#, Unity, Game Design, State Management, Animation, Prototyping</h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Description:</h1>
    <p class="font-pixel bg-blue-600 inline-block px-2 py-1">
        [★] 2nd place · 2D GAME JAM #REBORN · June 2026
    </p>
    <h2 class="font-pixel bg-gray-300">
        Praying Petals is a small 2D horror game developed in Unity in one week,
        combining a cozy flower shop with unsettling horror elements.
        The player takes on the role of a mantis shopkeeper, serving customers,
        trimming flowers (through a minigame), and hiding from threats, all
        while secretly being the parasite. The game was built around the
        jam themes <strong>Invisibility</strong> and <strong>You Are the Enemy</strong>,
        using the contrast between a peaceful environment and sudden moments
        of tension to create an unsettling atmosphere. It was developed as a
        short game jam project, with a focus on quickly prototyping and
        delivering a complete playable experience.
    </h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Screenshots:</h1>
        <NuxtImg src="/images/prayingpetals/prayingpetals1.png" loading="lazy" class="max-w-full" />
        <NuxtImg src="/images/prayingpetals/prayingpetals2.png" loading="lazy" class="max-w-full" />
        <NuxtImg src="/images/prayingpetals/prayingpetals3.png" loading="lazy" class="max-w-full" />
    </div>



  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@reference "tailwindcss";

h1 {
    @apply text-2xl font-bold
}

h2 {
    @apply text-xl
}

a {
    @apply text-blue-600 bg-gray-300 hover:bg-blue-200
}


</style>