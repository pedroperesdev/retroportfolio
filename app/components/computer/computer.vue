<template>
  <div class="h-screen computer-bg relative z-0">
    <div v-if="currScreen==='booting'">
      <div class="absolute bottom-0 left-40 bubbles bubble-left"/>
      <div class="absolute bottom-40 right-40 bubbles bubble-right"/>
      <div class="absolute bottom-80 right-80 bubbles bubble-left"/>
      <div class="absolute bottom-40 right-80 bubbles bubble-right"/>
      <div class="absolute bottom-80 right-180 bubbles bubble-right"/>
      <div class="absolute bottom-0 left-120 bubbles bubble-left"/>
      <div class="absolute bottom-30 right-150 bubbles bubble-right"/>

    </div>
    <component
      :is="screenMapper[currScreen]"
      @done-booting="init"
      @is-desktop="changeToDesktop"
      @turn-off="turnOff"
    />
  </div>
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts'
import Cmd from './cmd.vue';
import Login from './login.vue';
import Logo from './logo.vue';
import Desktop from './desktop.vue';
import TurnOff from './turnoff.vue';
import type { Screen } from '~/types/computer.ts';

const currScreen = ref<Screen>('cmd')

const screenMapper = {
  'cmd': Cmd,
  'booting': Logo,
  'login': Login,
  'desktop': Desktop,
  'turnoff': TurnOff,
  'none' : null
}

onMounted(() => {
  currScreen.value = 'cmd';
})

function init() {
  useSound('initial-beep');
  currScreen.value = 'none'
  setTimeout(() => {
    currScreen.value = 'booting'
    useSound('desktop-sound');
    setTimeout(() => {
      useSound('bubbles-sound');
    }, 1000)
  }, 2000)
  setTimeout(() => {
    currScreen.value = 'login'
    useSound('click-pc');
  }, 8000)
}

function changeToDesktop() {
  useSound('click-pc');
  currScreen.value = 'desktop'
}

function turnOff() {
  //useSound('turnoff-sound');
  currScreen.value = 'turnoff'
}

</script>

<style scoped>

.computer-bg {
  background: linear-gradient(
    315deg,
    var(--color-blue-500) 0px,
    var(--color-blue-500) 150px,
    var(--color-blue-600) 150px,
    var(--color-blue-600) 200px,
    var(--color-blue-300) 200px,
    var(--color-blue-300) 450px,
    var(--color-blue-200) 450px,
    var(--color-blue-200) 800px,
    var(--color-blue-200) 1000px
  );
}

.bubbles {
    width: 136px;
    height: 216px;
    background-image: url('/sprites/bubbles.png');
    background-size: 136px 216px;
    image-rendering: pixelated;
}

.bubble-left {
  animation: bubble-up-left 6s linear forwards
}

.bubble-right {
  animation: bubble-up-right 6s linear forwards
}

@keyframes bubble-up-left {
  0% { transform: translate(0, 0) }
  50% { transform: translate(-50%, -350%) scale(1.5) }
  100% { transform: translate(0, -700%) scale(2) }
}

@keyframes bubble-up-right {
  0% { transform: translate(0, 0) }
  50% { transform: translate(100%, -350%) scale(1.5)  }
  100% { transform: translate(0, -700%) scale(2)  }
}
</style>