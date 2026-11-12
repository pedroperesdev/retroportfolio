<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/sprites/title.png" width="210" height="68" class="max-w-full portfolio-title" />
    </div>
    <p class="font-pixel bg-blue-600 inline-block px-2 py-1">
        {{ $t('computer.projects.portfolio.banner') }}
    </p>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.labels.skills') }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t('computer.projects.portfolio.skills') }}</h2>
    </div>
    <div v-for="section in sections" :key="section" class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t(`computer.projects.portfolio.${section}.title`) }}</h1>
        <h2 class="font-pixel bg-gray-300">{{ $t(`computer.projects.portfolio.${section}.text`) }}</h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">{{ $t('computer.projects.portfolio.credits.title') }}</h1>
        <div class="flex flex-col bg-gray-300">
            <div v-for="credit in soundCredits" :key="credit.url" class="flex flex-col">
                <h2 class="font-pixel">{{ credit.name }} - {{ credit.author }}</h2>
                <NuxtLink
                    :href="credit.url"
                    target="_blank"
                    class="font-pixel text-xl cursor-interact-sprite w-fit break-all"
                >{{ credit.url }}</NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sections = ['overview', 'structure', 'desktop', 'room', 'apps', 'patterns', 'audio'] as const;

const soundCredits: { name: string; author: string; url: string }[] = [
    { name: 'UI Pop Up', author: 'eminyildirim', url: 'https://freesound.org/people/eminyildirim/sounds/540568/' },
    { name: 'Short Computer Beep', author: 'pazonyrecords', url: 'https://freesound.org/people/pazonyrecords/sounds/501204/' },
    { name: 'Computer Mouse Click', author: 'florianreichelt', url: 'https://freesound.org/people/florianreichelt/sounds/683099/' },
    { name: '15 Perrito Guau Tierno', author: 'caap', url: 'https://freesound.org/people/caap/sounds/427167/' },
    { name: 'Just Relax', author: 'sethamakessounds', url: 'https://soundcloud.com/sethamakessounds/justrelax' },
    { name: 'Bubbles', author: 'Glaneur de sons', url: 'https://freesound.org/people/Glaneur%20de%20sons/sounds/104950/' },
    { name: 'Startup P6 227', author: 'beetlemuse', url: 'https://freesound.org/people/beetlemuse/sounds/692846/' },
    { name: 'Startup Sound Computer', author: 'xkeril', url: 'https://freesound.org/people/xkeril/sounds/827123/' },
    { name: 'Explosion', author: 'LilMati', url: 'https://freesound.org/people/LilMati/sounds/403298/' },
    { name: 'Flag', author: 'sora955', url: 'https://freesound.org/people/sora955/sounds/231321/' },
];
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
