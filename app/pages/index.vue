<template>
    <!--index page is responsible for switching between the following states: Menu, Select-screen, Game (room area), Console and Computer-->
    <div class="flex bg-black h-screen  overflow-hidden">
        <div class="cursor-sprite flex-1">
            <component :is="activeScreen" @change-window="changeWindow" @open-link="openLink" @change-state="changeWindow"/>   
        </div>
    </div>
    <SoundToggle
        v-if="activeScreen !== Computer"
        class="absolute top-[40px] right-[220px]"
    />
    <LanguageSwitcher
        v-if="activeScreen !== Computer"
        class="absolute top-[40px] right-[128px]"
    />
</template>

<script lang="ts" setup>
import Menu from '~/components/menu/menu.vue';
import Select from '~/components/select/select.vue';
import Game from '~/components/game/game.vue';
import Prayingpetalsgame from '~/components/prayingpetalsgame/prayingpetalsgame.vue';
import Computer from '~/components/computer/computer.vue';
import { useSound } from '../composables/useSound.ts'
import type { GameState } from '~/types/start.ts';
import LanguageSwitcher from '~/components/computer/language-switcher.vue';
import SoundToggle from '~/components/computer/sound-toggle.vue';

const currState = ref<GameState | null>(null);
const screens = {
  "menu": Menu,
  "select": Select,
  "game": Game,
  "console": Prayingpetalsgame,
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
      window.open("/files/cv.pdf")
      break;
  }
}



</script>

<style>

.cursor-sprite {
  cursor: url('/sprites/cursor_normal.png') 15 5, auto;
}

</style>