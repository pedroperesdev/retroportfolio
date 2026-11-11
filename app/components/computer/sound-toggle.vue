<template>
    <div
        class="sound cursor-interact-sprite"
        :style="{'--soundUrl': `url(${spriteUrl})`}"
        @click="() => { soundOn = !soundOn; soundOn? resumeSound('main-music') : stopSound('main-music') }"
    >

    </div>
</template>

<script lang="ts" setup>
import { resumeSound } from '../../composables/resumeSound.ts';
import { stopSound } from '../../composables/stopSound.ts';

const soundOn = ref<boolean>(true);
const spriteUrl = computed(() =>
    soundOn.value === true ? 'sprites/sound_on.png' : 'sprites/sound_off.png'
)

</script>

<style scope>
.sound {
    width: 68px;
    height: 68px;
    background-image: var(--soundUrl);
    background-size: 68px 68px;
    image-rendering: pixelated;
}
</style>