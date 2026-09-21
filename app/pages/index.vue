<template>
  <!--index page is responsible for switching between the following states: Menu, Select-screen, Game and Computer-->
  <div class="flex bg-black h-screen overflow-hidden">
      <div class="cursor-sprite flex-1">
        <component :is="activeScreen" @change-window="changeWindow" @open-link="openLink" @change-state="changeWindow"/>   
      </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from '~/components/menu/menu.vue';
import Select from '~/components/select/select.vue';
import Game from '~/components/game/game.vue';
import Computer from '~/components/computer/computer.vue';
import { useSound } from '../composables/useSound.ts'
import type { GameState } from '~/types/start.ts';

const currState = ref<GameState | null>(null);
const screens = {
  "menu": Menu,
  "select": Select,
  "game": Game,
  "computer": Computer,
}
const activeScreen = computed(() => currState.value ? screens[currState.value] : null);

onMounted(() => {
  currState.value = "menu";
  useSound('main-music');
})

function changeWindow(result : GameState){
  currState.value = result;
  useSound('click-sound');
}

function openLink(target:string) {
  useSound('click-sound');
  switch(target){
    case 'mail':
      window.open("mailto:pedroperes.dev@gmail.com");
      break;
    case 'linkedin':
      window.open("https://www.linkedin.com/in/pmbperes/");
      break;
    case 'github':
      window.open("https://github.com/pedroperesdev/");
      break;
    case 'cv':
      window.open("files/cv.pdf")
      break;
  }
}



</script>

<style>

.cursor-sprite {
  cursor: url('sprites/cursor.png') 15 5, auto;
}

</style>