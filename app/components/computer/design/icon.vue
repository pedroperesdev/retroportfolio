<template>
    <div 
        :class="variant.wrapperClass"
        class="flex flex-col justify-center items-center cursor-interact-sprite"
        :style="{ 'background-color': (props.active) ? 'var(--color-blue-800)' : '' }"
        @click="variant.emitAction"
    >
        <div 
            :class="variant.iconClass"
            :style="{ '--icon-url': `url(${computeIconUrl()})` }"
        />
        <h2 v-if="variant.textType" :class="variant.textType">{{ shorten? shortenTxt(fileName) : fileName }}</h2>
    </div>
</template>

<script lang="ts" setup>
import type { IconType, IconPlace, OpenableFoldersOrFiles } from '~/types/computer.ts';

const props = withDefaults(defineProps<{
    icon?: IconType,
    fileName?: OpenableFoldersOrFiles,
    iconPlace?: IconPlace,
    active?: boolean,
    shorten?: boolean
}>(), {
    icon: 'folder',
    fileName: '',
    iconPlace: 'navbar',
    active: false,
    shorten: true
})

const emit = defineEmits(['addNewWindow', 'changeTabState', 'openFile'])

const propMapper = {
    'desktop': {
        wrapperClass: 'text-center gap-[4px] w-[140px] h-[140px] icon-text-bg', 
        iconClass: 'icon-desktop', 
        textType: 'text-2xl font-pixel leading-[30px]',
        emitAction: () => emit('addNewWindow', props.fileName, props.icon)
    },
    'navbar': {
        wrapperClass: 'w-[80px] h-[56px] icon-text-bg', 
        iconClass: 'icon-navbar', 
        textType: '', 
        emitAction: () => emit('changeTabState', props.icon)
    },
    'infolder': {
        wrapperClass: 'text-center gap-[4px] w-[88px] h-[88px] icon-text-bg', 
        iconClass: 'icon-infolder', 
        textType: 'text-md font-pixel',
        emitAction: () => emit('openFile', props.fileName, props.icon)
    },
    'startbar': {
        wrapperClass: 'w-[52px] h-[52px]', 
        iconClass: 'icon-startbar', 
        textType: '', 
        emitAction: () => emit('openFile', props.fileName, props.icon)
    },
}

function shortenTxt(fileName: OpenableFoldersOrFiles) {
    if(fileName.toString().length < 8) return fileName.toString()
    else return `${fileName.toString().slice(0,8)}...`
}

const variant = propMapper[props.iconPlace]

function computeIconUrl() {
    return `sprites/icons/${props.icon}_${props.iconPlace}.png`
}

</script>

<style scoped>
@reference "tailwindcss";

h2 {
    @apply text-black font-semibold
}

.icon-text-bg:hover {
    background-color: var(--color-blue-300);
    opacity: 0.8;
}

.icon-desktop {
    width: 60px;
    height: 60px;
    background-image: var(--icon-url);
    background-size: 60px 60px;
    image-rendering: pixelated;
}

.icon-navbar {
    width: 44px;
    height: 44px;
    background-image: var(--icon-url);
    background-size: 44px 44px;
    image-rendering: pixelated;
}

.icon-infolder {
    width: 44px;
    height: 44px;
    background-image: var(--icon-url);
    background-size: 44px 44px;
    image-rendering: pixelated;
}

.icon-startbar {
    width: 44px;
    height: 44px;
    background-image: var(--icon-url);
    background-size: 44px 44px;
    image-rendering: pixelated;
}

</style>