<template>
    <div 
        :class="variant.wrapperClass"
        class="flex flex-col justify-center items-center icon-text-bg"
        :style="{ 'background-color': (props.active) ? 'var(--color-blue-800)' : '' }"
        @click="variant.emitAction"
    >
        <div 
            :class="variant.iconClass"
            :style="{ '--icon-url': `url(${computeIconUrl()})` }"
        />
        <h2 :class="variant.textType">{{ props.text }}</h2>
    </div>
</template>

<script lang="ts" setup>
import type { IconType, IconPlace } from '~/types/computer.ts';

const props = withDefaults(defineProps<{
    icon?: IconType,
    text?: string,
    iconPlace?: IconPlace,
    active?: boolean
}>(), {
    icon: 'folder',
    text: '',
    iconPlace: 'navbar',
    active: false,

})

const emit = defineEmits(['addNewWindow', 'changeTabState'])

const propMapper = {
    'desktop': {
        wrapperClass: 'text-center gap-[4px] w-[140px] h-[140px]', 
        iconClass: 'icon-desktop', 
        textType: 'text-2xl font-pixel leading-[30px]',
        emitAction: () => emit('addNewWindow', props.text, props.icon)
    },
    'navbar': {
        wrapperClass: 'w-[80px] h-[56px]', 
        iconClass: 'icon-navbar', 
        textType: '', 
        emitAction: () => emit('changeTabState', props.icon)
    },
    'infolder': {
        wrapperClass: 'text-center gap-[4px] w-[88px] h-[88px]', 
        iconClass: 'icon-infolder', 
        textType: 'text-md font-pixel',
        emitAction: () => emit('changeTabState', props.icon)
    },
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

</style>