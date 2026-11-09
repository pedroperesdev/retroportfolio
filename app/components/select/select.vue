<template>
    <div class="flex h-screen justify-center items-center stripes">
        <div 
            class="flex flex-col justify-center items-center gap-20 main-content"
            :style="{'--windowW': width, '--windowH': height}"
        >
            <div class="text-bg px-4 prevent-select blink">
                <h1 class="text-3xl text-purple-200 font-pixel">{{ $t('select.message') }}</h1>
            </div>
            <div class="flex items-end gap-34">
                <div class="flex flex-col gap-4">
                    <div class="icon-cv cursor-interact-sprite" @click="$emit('openLink', 'cv')"/>
                    <div class="flex justify-center text-bg prevent-select">
                        <h1 class="text-xl text-purple-200 font-pixel">CV.pdf</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="icon-play ml-6 cursor-interact-sprite" @click="$emit('changeWindow', 'game')"/>
                    <div class="flex text-bg px-4 justify-center prevent-select">
                        <h1 class="text-xl text-purple-200 font-pixel">{{ $t('select.game') }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

</script>

<style scoped>

.icon-cv {
    image-rendering: pixelated;
    width: 88px;
    height: 112px;
    background-image: url('sprites/cv.png');
    background-size: 88px 112px ;
}

.icon-cv:hover {
    background-image: url('sprites/cv_border.png');
    transform: scale(1.2);
}

.icon-play {
    image-rendering: pixelated;
    width: 88px;
    height: 152px;
    background-image: url('sprites/playerfront.png');
    background-size: 88px 152px ;
}

.icon-play:hover {
    background-image: url('sprites/playerfront_border.png');
    transform: scale(1.2);
}

.text-bg {
    background-color: rgba(30, 25, 32, 0.8);
}

.blink {
    animation-name: blink;
    animation-duration: 2s;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
}
.blink-hover:hover {
    animation-name: blink;
    animation-duration: 0.2s;
    animation-timing-function: steps(1);
}

@keyframes blink {
    0%, 20% {opacity: 0;}
    30% {opacity: 1;}
    100% {opacity: 0;}
}

.stripes {
    background: repeating-linear-gradient(#E07A48, #E07A48 4px, #C24E4E 4px, #C24E4E 8px);
}

.main-content {
    scale: calc(min(var(--windowW), var(--windowH))/640)
}

</style>