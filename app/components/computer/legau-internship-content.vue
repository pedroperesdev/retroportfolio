<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/images/legau/logo.png" class="max-w-full" />
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.skills') }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t('computer.projects.legau.skills') }}</h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.description') }}</h1>
        <h2 class="font-pixel bg-gray-300">
            {{ $t('computer.projects.legau.p1') }}
        </h2>
        <h2 class="font-pixel bg-gray-300">
            {{ $t('computer.projects.legau.p2') }}
        </h2>
        <h2 class="font-pixel bg-gray-300">
            {{ $t('computer.projects.legau.p3') }}
        </h2>
        <h2 class="font-pixel bg-gray-300">
            {{ $t('computer.projects.legau.p4') }}
        </h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Screenshots:</h1>
        <NuxtImg src="/images/legau/legau4.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau1.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau2.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau3.png" loading="lazy" class="max-w-full legau-image" />
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

.legau-image {
    image-rendering: auto;
}

</style>
