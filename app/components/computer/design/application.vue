<template>
    <div      
        class="flex items-center justify-start cursor-interact-sprite text-black hover:bg-blue-800 hover:text-white p-[8px]"
        @click="$emit('openApp', fileName, icon)"
    >
        <Icon 
            :icon="icon"
            :file-name="fileName"
            :icon-place="iconPlace"
        />
        <h2 class="font-pixel">{{ translateFileName(fileName) }}</h2>
    </div>
</template>

<script lang="ts" setup>
import Icon from './icon.vue';
import type { IconType, OpenableFoldersOrFiles } from '~/types/computer.ts';
const { t, te } = useI18n()

const iconPlace = "startbar"


const props = withDefaults(defineProps<{
    icon?: IconType,
    fileName?: OpenableFoldersOrFiles
}>(), {
    icon: 'file',
    fileName: 'Calculator'
})

function translateFileName(fname: OpenableFoldersOrFiles) : string {
    //need to swap whitespace for hyphen and make it lowercase
    const name = fname.replaceAll(' ', '-').toLowerCase();
    return te('computer.desktop.' + name) ? t('computer.desktop.' + name) : fname
}

</script>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-2xl
}
</style>