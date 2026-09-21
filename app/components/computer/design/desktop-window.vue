<template>
    <div 
        class="flex flex-col border-[4px]" 
        :class="[!maximized ? 'w-[440px]' : 'w-[640px]', active ? 'border-blue-800 bg-blue-800' : 'border-gray-800 bg-gray-800', ]"
    >
        <div 
            class="flex justify-between items-center px-[12px] bg-blue-800 h-[76px]
            border-t-[4px] border-l-[4px] border-r-[4px]"
            :class="active ? 'bg-blue-800 border-t-blue-400 border-l-blue-400 border-r-blue-400' : 'bg-gray-800 border-t-gray-400 border-l-gray-400 border-r-gray-400'"
            @pointerdown.stop="$emit('startDrag', $event)"
        >
            <h1 class="font-pixel">{{name}}</h1>
            <div class="flex gap-[16px] justify-center items-center">
                <div :class="active ? 'minimize-button' : 'minimize-button-inactive'" @pointerdown.stop @click.stop="$emit('minimizeWindow')"/>
                <div :class="active ? 'maximize-button' : 'maximize-button-inactive'" @pointerdown.stop @click.stop="$emit('maximizeWindow')"/>
                <div :class="active ? 'close-button' : 'close-button-inactive'" @pointerdown.stop @click.stop="$emit('closeWindow')"/>
            </div>
        </div>
        <div 
            class="border-l-[4px] border-r-[4px] border-b-[4px]"
            :class="active ? 'border-t-blue-600 border-l-blue-400 border-r-blue-400 border-b-blue-400' : 'border-t-gray-600 border-l-gray-400 border-r-gray-400 border-b-gray-400 '"
        >
            <div 
                class="flex flex-col gap-[20px] bg-gray-200 border-[4px] px-[24px] py-[16px]" 
                :class="[!maximized ? 'h-[300px]' : 'h-[496px]', active ? 'border-blue-600' : 'border-gray-600']">
                <component :is="resolveName(props.name)" @open-file="(file: OpenableFiles, iconType: IconType) => $emit('openFile', file, iconType)"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import GameProjectsContent from '../game-projects-content.vue';
import WebProjectsContent from '../web-projects-content.vue';
import type { PossibleFolders, OpenableFiles, IconType } from '~/types/computer.ts';


const props = withDefaults(defineProps<{
    name?: PossibleFolders,
    maximized?: boolean,
    active?: boolean
}>(), {
    name: 'web projects',
    maximized: false,
    active: false,
})


function resolveName(name: PossibleFolders) {
    const nameMapper = {
        'web projects': WebProjectsContent,
        'game projects': GameProjectsContent,
        'Calculator': null
    }
    return nameMapper[name];
}

</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-3xl text-white font-semibold
}

h2 {
    @apply text-xl text-black
}

.close-button {
    width: 48px;
    height: 48px;
    background-image: url('sprites/exit_button.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

.maximize-button {
    width: 48px;
    height: 48px;
    background-image: url('sprites/maximize_button.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

.minimize-button {
    width: 48px;
    height: 48px;
    background-image: url('sprites/min_tab.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

.close-button-inactive {
    width: 48px;
    height: 48px;
    background-image: url('sprites/close_button_inactive.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

.maximize-button-inactive  {
    width: 48px;
    height: 48px;
    background-image: url('sprites/max_button_inactive.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

.minimize-button-inactive  {
    width: 48px;
    height: 48px;
    background-image: url('sprites/min_tab_inactive.png');
    background-size: 48px 48px;
    image-rendering: pixelated;
}

</style>