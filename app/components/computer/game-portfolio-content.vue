<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/sprites/title.png" width="210" height="68" class="max-w-full portfolio-title" />
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.skills') }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t('computer.projects.portfolio.skills') }}</h2>
    </div>
    <div v-for="section in sections" :key="section" class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t(`computer.projects.portfolio.${section}.title`) }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t(`computer.projects.portfolio.${section}.text`) }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sections = ['overview', 'structure', 'desktop', 'room', 'apps', 'patterns', 'audio'] as const;
</script>

<style scoped>
@reference "tailwindcss";

h1 {
    @apply text-2xl font-bold
}

h2 {
    @apply text-xl
}

.portfolio-title {
    image-rendering: pixelated;
}


</style>
