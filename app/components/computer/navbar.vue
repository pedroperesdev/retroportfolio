<template>
  <div class="flex h-[60px] navbar-apps border-t-[4px] border-t-blue-800 w-full">
    <div class="flex justify-center w-[140px] -mt-[4px]" :class="props.clicked ? 'navbar-start-clicked' : 'navbar-start'" @click.stop="$emit('openStartbar')">
        <div class="relative">
            <h1 class="font-jersey text-black">{{ $t('computer.desktop.start')}}</h1>
            <h1 class="font-jersey text-white absolute top-[1px] left-[3px]">{{ $t('computer.desktop.start')}}</h1>
        </div>
    </div>
    <div class="flex items-center gap-[12px]">
        <Icon
            v-for="tab in tabs"
            :key="tab.id"
            :icon="tab.icon" 
            :active="tab.id == props.activeId"
            icon-place="navbar"
            @click="$emit('openMinimized', tab.id)"
        />
    </div>
    <div class="flex justify-center items-center px-[12px] ml-auto border-blue-400 border-[4px] gap-[8px]">
        <LanguageSwitcherDesktop
            class="cursor-interact-sprite"
        />
        <h2 class="font-pixel">{{ currTime.getHours() }}:{{ formattedMinutes() }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IconType } from '~/types/computer.ts';
import Icon from './design/icon.vue';
import LanguageSwitcherDesktop from './language-switcher-desktop.vue';
const props = withDefaults(defineProps<{
    clicked?: boolean
    tabs?: { id: number, icon: IconType }[]
    activeId?: number
}>(), {
    clicked : false,
    tabs: () => [],
    activeId: 0
})

const currTime = ref<Date>(new Date())

onMounted(() => {
    setInterval(() => {
        currTime.value = new Date()
    }, 1000)
})

function formattedMinutes() {
    if(currTime.value.getMinutes() < 10)
        return '0' + currTime.value.getMinutes();
    return currTime.value.getMinutes();
}


</script>

<style scoped>
@reference "tailwindcss";

h1 {
    @apply text-5xl font-semibold
}

h2 {
    @apply text-2xl text-white
}

.navbar-apps {
    background: linear-gradient(
        to top, 
        var(--color-blue-800),
        var(--color-blue-800) 33%,
        var(--color-blue-700) 33%,
        var(--color-blue-700) 66%,
        var(--color-blue-600) 66%,
        var(--color-blue-600) 100%
    );
}

.navbar-start {
    background: linear-gradient(
        to top, 
        var(--color-green-800),
        var(--color-green-800) 33%,
        var(--color-green-700) 33%,
        var(--color-green-700) 66%,
        var(--color-green-600) 66%,
        var(--color-green-600) 100%
    );
    border-top: 4px solid var(--color-green-800);
    border-right: 4px solid var(--color-green-800);
}

.navbar-start-clicked {
    background: linear-gradient(
        to bottom, 
        var(--color-green-800),
        var(--color-green-800) 33%,
        var(--color-green-700) 33%,
        var(--color-green-700) 66%,
        var(--color-green-600) 66%,
        var(--color-green-600) 100%
    );
    border-top: 4px solid var(--color-green-800);
    border-right: 4px solid var(--color-green-800);
}

</style>