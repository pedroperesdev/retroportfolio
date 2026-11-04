<template>
    <div 
        class="flex justify-center items-center h-screen"
    >
        <div 
            class="relative room main-content"
            :style="{'--windowH': height, '--windowW': width}"
        >
            <Carpet class="absolute z-1 top-[200px] left-[68px]"/>
            <Bed class="absolute z-1 top-[448px] left-[384px]"/>
            <Desk class="absolute z-1 top-[160px] left-[268px]"/>
            <Shelf class="absolute z-1 top-[116px] left-[464px]"/>
            <Pc :canInteract="!interactingWith" class="absolute z-3 top-[120px] left-[284px]" @open-pc-dialogue="openPcDialogue"/>
            <Console :canInteract="!interactingWith" class="absolute z-3 top-[216px] left-[120px]" @open-console-dialogue="openConsoleDialogue"/>
            <Cells :canInteract="!interactingWith" class="absolute z-2 top-[192px] left-[64px]" @get-pos="calcPos"/>
            <Player ref="player" class="absolute z-4 top-[320px] left-[256px]"/>
            <Dialogue 
              v-if="interactingWith != null" 
              :item="interactingWith" 
              class="absolute z-4 top-[416px] left-[16px]"
              @close-dialogue="closeDialogue"
              @open-computer="openComputer"
              @open-console="openConsole"
            />
        </div>
    </div>

</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import Carpet from './carpet.vue';
import Bed from './bed.vue';
import Desk from './desk.vue';
import Shelf from './shelf.vue';
import Pc from './pc.vue';
import Console from './console.vue';
import Cells from './cells.vue';
import Player from './player.vue';
import Dialogue from './dialogue.vue';
import { useSound } from '../../composables/useSound.ts'
import type { ItemsWithDialogue } from '~/types/game.ts';
const { width, height } = useWindowSize()

const emit = defineEmits(['changeWindow'])

const interactingWith = ref<ItemsWithDialogue | null>(null);
const player = useTemplateRef<any>('player');
const invertedMovementCells = [33, 34, 35, 36, 37, 41, 42, 43, 44, 45]

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
  if(invertedMovementCells.includes(cell)) player.value.moveToCell(row, col, true);
  else player.value.moveToCell(row, col, false);
}

//Dialogue popup logic
function openPcDialogue() {
  interactingWith.value = "pc";
  useSound('click-sound');
}

function openConsoleDialogue() {
  interactingWith.value = "console";
  useSound('click-sound');
}

function closeDialogue() {
  interactingWith.value = null;  
  useSound('click-sound');
}

function openComputer() {
  interactingWith.value = null;  
  useSound('click-sound');
  emit('changeWindow', 'computer')
  stopSound('main-music');
}

function openConsole() {
  interactingWith.value = null;  
  useSound('click-sound');
  emit('changeWindow', 'console')
  stopSound('main-music');
}
</script>

<style>
.room {
    width: 640px;
    height: 640px;
    image-rendering: pixelated;
    background-image: url('sprites/room.png');
    background-size: 640px 640px;
}

.main-content {
    scale: calc(min(var(--windowW), var(--windowH))/640)
}

</style>