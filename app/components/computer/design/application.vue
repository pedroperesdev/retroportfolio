<template>
    <div      
        class="flex items-center justify-start text-black hover:bg-blue-800 hover:text-white p-[8px]"
        @click="$emit('openApp', fileName, icon)"
    >
        <Icon 
            :icon="icon"
            :file-name="fileName"
            :icon-place="iconPlace"
        />
        <h2 class="font-pixel">{{ capitalize(fileName) }}</h2>
    </div>
</template>

<script lang="ts" setup>
import Icon from './icon.vue';
import type { IconType, OpenableFoldersOrFiles } from '~/types/computer.ts';

const iconPlace = "startbar"

const props = withDefaults(defineProps<{
    icon?: IconType,
    fileName?: OpenableFoldersOrFiles
}>(), {
    icon: 'file',
    fileName: 'calculator'
})

function capitalize(word: string) {
    return (word[0]?.toUpperCase() + word.slice(1));
}

</script>

<style scoped>
@reference "tailwindcss";


h2 {
  @apply text-2xl
}
</style>