<template>
  <div class="absolute computer-bg h-[640px] w-[640px] z-20">
    <div class="flex h-[640px]" :class="!isWritingCmd? 'justify-center items-center' : ''">
      <Cmd v-if="isWritingCmd" @done-booting="Init"/>
      <Logo v-if="isBooting"/>
      <Login v-if="isLoggingIn" @is-desktop="changeToDesktop"/>
      <Desktop v-if="isDesktop"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts'
import Cmd from './cmd.vue';
import Login from './login.vue';
import Logo from './logo.vue';
import Desktop from './desktop.vue';

let isWritingCmd = ref(false);
let isBooting = ref(false);
let isLoggingIn = ref(false);
let isDesktop = ref(false);

onMounted(() => {
  useSound('initial-beep');
  isWritingCmd.value = true;
})

function Init() {
  useSound('initial-beep');
  isWritingCmd.value = false;
  setTimeout(() => {
    isBooting.value = true;
    useSound('desktop-sound');
  }, 2000)
  setTimeout(() => {
    isBooting.value = false;
    isLoggingIn.value = true;
    useSound('click-sound');
  }, 8000)
}

function changeToDesktop() {
  useSound('click-sound');
  isLoggingIn.value = false;
  isDesktop.value = true;
}

</script>

<style scoped>

.computer-bg {
  background: linear-gradient(
    315deg,
    var(--color-blue-500) 0px,
    var(--color-blue-600) 150px,
    var(--color-blue-600) 200px,
    var(--color-blue-400) 500px,
    var(--color-blue-200) 650px,
    var(--color-blue-200) 800px
  );
}
</style>