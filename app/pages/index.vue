<template>
  <div class="flex bg-black h-screen">
    <div class="flex mx-[20vw] my-[10vh] w-full justify-center items-center">
      <div class="relative z-0 cursor-sprite">
        <component :is="activeScreen" @change-window="changeWindow" @open-link="openLink"/>   
        <Room/>
        <Carpet class="absolute z-1 top-[200px] left-[68px]"/>
        <Bed class="absolute z-1 top-[448px] left-[384px]"/>
        <Desk class="absolute z-1 top-[160px] left-[268px]"/>
        <Shelf class="absolute z-1 top-[116px] left-[464px]"/>
        <Pc :canInteract="!interactingWith" class="absolute z-3 top-[120px] left-[284px]" @open-pc-dialogue="openPcDialogue"/>
        <Console :canInteract="!interactingWith" class="absolute z-3 top-[216px] left-[120px]"/>
        <Cells :canInteract="!interactingWith" class="absolute z-2 top-[192px] left-[64px]" @get-pos="calcPos"/>
        <Player ref="player" class="absolute z-4 top-[320px] left-[256px]"/>
        <Dialogue 
          v-if="interactingWith != null" 
          :item="interactingWith" 
          class="absolute z-4 top-[416px] left-[16px]"
          @close-dialogue="closeDialogue"
          @open-computer="openComputer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted } from 'vue'
import { useSound } from '../composables/useSound.ts'
import { stopSound } from '../composables/stopSound.ts'
import Menu from '~/components/menu.vue';
import Select from '~/components/select.vue';
import Game from '~/components/game.vue';
import Computer from '~/components/computer/computer.vue';

const player = useTemplateRef<any>('player');
type GameState = "menu" | "select" | "game" | "computer";
const currState = ref<GameState | null>(null);
const screens = {
  "menu": Menu,
  "select": Select,
  "game": Game,
  "computer": Computer,
}
const activeScreen = computed(() => currState.value ? screens[currState.value] : null);
type ItemsWithDialogue = "pc" | "console"
const interactingWith = ref<ItemsWithDialogue | null>(null);

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

function calcPos(cell:number){
  let col;
  let row;
  if(cell % 8 != 0) {
    col = cell % 8
    row = Math.floor(cell/8);
  }
  else {
    col = 8;
    row = cell/8 - 1;
  }
  player.value.moveToCell(row, col);
}

//Dialogue popup logic
function openPcDialogue() {
  interactingWith.value = "pc";
  useSound('click-sound');
}

function openConsoleDialogue() {
  interactingWith.value = "console";
}

function closeDialogue() {
  interactingWith.value = null;  
  useSound('click-sound');
}

function openComputer() {
  interactingWith.value = null;  
  useSound('click-sound');
  currState.value = "computer";
  stopSound('main-music');
}

</script>

<style>

.cursor-sprite {
  cursor: url('sprites/cursor.png') 15 5, auto;
  width: 640px;
  height: 640px;
}

</style>