<template>
  <div class="h-screen computer-bg">
    <component 
      :is="screenMapper[currScreen]"
      @done-booting="init"
      @is-desktop="changeToDesktop"
    />
  </div>
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts'
import Cmd from './cmd.vue';
import Login from './login.vue';
import Logo from './logo.vue';
import Desktop from './desktop.vue';
import type { Screen } from '~/types/computer.ts';

const currScreen = ref<Screen>('cmd')

const screenMapper = {
  'cmd': Cmd,
  'booting': Logo,
  'login': Login,
  'desktop': Desktop,
  'none' : null
}

onMounted(() => {
  useSound('initial-beep');
  currScreen.value = 'cmd';
})

function init() {
  useSound('initial-beep');
  currScreen.value = 'none'
  setTimeout(() => {
    currScreen.value = 'booting'
    useSound('desktop-sound');
  }, 2000)
  setTimeout(() => {
    currScreen.value = 'login'
    useSound('click-sound');
  }, 8000)
}

function changeToDesktop() {
  useSound('click-sound');
  currScreen.value = 'desktop'
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
    var(--color-blue-300) 650px,
    var(--color-blue-200) 650px,
    var(--color-blue-200) 800px,
    var(--color-blue-200) 1000px
  );
}
</style>