<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/images/prayingpetals/title.png" class="max-w-full" />
    </div>
    <NuxtLink href="https://rovkin.itch.io/prayingpetals" target="_blank" class="font-pixel cursor-interact-sprite w-fit">https://rovkin.itch.io/prayingpetals</NuxtLink>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.skills') }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t('computer.projects.prayingpetals.skills') }}</h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.description') }}</h1>
    <p class="font-pixel bg-blue-600 inline-block px-2 py-1">
        {{ $t('computer.projects.prayingpetals.award') }}
    </p>
    <h2 class="font-pixel bg-gray-300">
        {{ $t('computer.projects.prayingpetals.description') }}
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