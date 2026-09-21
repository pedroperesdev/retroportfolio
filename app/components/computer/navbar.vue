<template>
  <div class="flex h-[60px] navbar-apps border-t-[4px] border-t-blue-800 w-full">
    <div class="w-[140px] -mt-[3px]" :class="props.clicked ? 'navbar-start-clicked' : 'navbar-start'" @click.stop="$emit('openStartbar')">
        <h1 class="font-jersey text-white absolute z-2 top-1 left-[24px]">start</h1>
        <h1 class="font-jersey text-black absolute z-1 top-1 left-[22px]">start</h1>
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
    <div class="flex justify-center items-center px-[12px] ml-auto border-blue-400 border-[4px]">
        <h2 class="font-pixel">{{ currTime.getHours() }}:{{ currTime.getMinutes() }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from './design/icon.vue';
const props = withDefaults(defineProps<{
    clicked?: boolean
    tabs?: { id: number, icon: string }[]
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
    border-top: 3px solid var(--color-green-800);
    border-right: 3px solid var(--color-green-800);
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
    border-top: 3px solid var(--color-green-800);
    border-right: 3px solid var(--color-green-800);
}

</style>