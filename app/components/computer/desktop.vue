<template>
  <div class="flex relative wallpaper w-full h-full z-25" @click="closeStartbar">
    <DesktopWindow
      v-for="window in visibleWindows"
      :key="window.id"
      :style="{position: 'absolute', zIndex: window.z, left: window.x + 'px', top: window.y + 'px'}"
      :name="window.name"
      :active="openedWindows.find(w => w.z == 4)?.id === window.id" 
      :maximized="window.status === 'maximized'"
      @start-drag="(e: PointerEvent) => startDrag(e, window.id)"
      @minimize-window="minimizeWindow(window.id)"
      @maximize-window="maximizeWindow(window.id)"
      @close-window="closeWindow(window.id)"
      @open-file="openFile"
    />
    <div class="flex flex-col gap-[4px] p-[24px] w-full h-[400px]">
      <Icon icon="folder" text="web projects" icon-place="desktop" @add-new-window="addNewWindow"/>
      <Icon icon="folder" text="game projects" icon-place="desktop" @add-new-window="addNewWindow"/>
    </div>
    <div class="absolute bottom-0 w-full">
      <Navbar 
        :clicked="startbar" 
        :tabs="openedWindows" 
        :activeId="openedWindows.find(w => w.z == 4)?.id" 
        @open-startbar="openStartbar"
        @open-minimized="openMinimized"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './navbar.vue';
import DesktopWindow from './design/desktop-window.vue';
import Startbar from './startbar.vue';
import Icon from './design/icon.vue';
import { useSound } from '../../composables/useSound.ts';
import type { PossibleFolders, WindowStatus, WindowState, OpenableFiles, IconType } from '~/types/windows.ts';


onMounted(() => {
  useSound('computer-boot');
})

const startbar = ref(false);
const openedWindows = ref<WindowState[]>([]);
const visibleWindows = computed(() => {
  return openedWindows.value.filter(w => w.status !== 'minimized')
})
const clickOffset = ref({ x: 0, y: 0 });
let id = 0;
const currWindow = ref<WindowState | null>();

function openFile(file: OpenableFiles, iconType: IconType) {
  addNewWindow(file.toString(), iconType)
}

function addNewWindow(name: string, icon: string) {
  if(openedWindows.value.length >= 4 || openedWindows.value.find(w => w.name == name)) return;
  useSound('click-sound');
  openedWindows.value.map(w => w.z -= 1)
  let window = { id: id++, x: 0, y: 0, z: 4, name: name, icon: icon, status: 'normal'} as WindowState;
  openedWindows.value.push(window);
}

function makeSelectedWindowCurrent(windowId: number) {
  currWindow.value = openedWindows.value.find(w => w.id === windowId);
  if(!currWindow.value) return false;
  if(currWindow.value.z != 4) {
    //map new correct z positions
    const temp = openedWindows.value.find(w => w.z === 4)
    if(temp) temp.z = 3;
    currWindow.value.z = 4;
    const lowerIndexes = openedWindows.value.filter(w => w.z <= 2).map(w => w.z)
    const sec_low = openedWindows.value.find(w => w.z === Math.max(...lowerIndexes))
    if(sec_low) sec_low.z = 2;
    const fst_low = openedWindows.value.find(w => w.z === Math.min(...lowerIndexes))
    if(fst_low) fst_low.z = 1;
  }
  return true;
}

function maximizeWindow(windowId: number) {
  useSound('click-sound');
  if(!makeSelectedWindowCurrent(windowId)) return;
  currWindow.value!.x = 0;
  currWindow.value!.y = 0;
  if(currWindow.value!.status === 'maximized') currWindow.value!.status = 'normal';
  else if(currWindow.value!.status === 'normal') currWindow.value!.status = 'maximized';
}

function minimizeWindow(windowId: number) {
  useSound('click-sound');
  if(!makeSelectedWindowCurrent(windowId)) return;
  const temp = openedWindows.value.find(w => w.id === windowId);
  if(!temp) return;
  temp.status = 'minimized';
  temp.z = 1;
  openedWindows.value.filter(w => w.id != windowId).map(w => w.z += 1)
}

function closeWindow(windowId: number) {
  useSound('click-sound');
  if(!makeSelectedWindowCurrent(windowId)) return;
  openedWindows.value.map(w => w.z += 1)
  openedWindows.value = openedWindows.value.filter(win => win.id != windowId);
}

function openMinimized(windowId: number) {
  //can be minimized or just open but in background
  useSound('click-sound');
  if(!makeSelectedWindowCurrent(windowId)) return;
  const temp = openedWindows.value.find(w => w.id === windowId)
  if(temp) temp.status = 'normal'
  console.log(openedWindows.value)
}

function openStartbar() {
  startbar.value = true;
}

function closeStartbar() {
  startbar.value = false;
}

function startDrag(e : PointerEvent, windowId: number ) {
  if(!makeSelectedWindowCurrent(windowId)) return;
  if(currWindow.value!.status === 'maximized') currWindow.value!.status = 'normal';
  clickOffset.value = { x: e.clientX - currWindow.value!.x, y: e.clientY - currWindow.value!.y };
  window.addEventListener('pointermove', onDrag);
  window.addEventListener('pointerup', stopDrag);
}

function onDrag(e : PointerEvent) {
  currWindow.value!.x = e.clientX - clickOffset.value.x;
  currWindow.value!.y = e.clientY - clickOffset.value.y;
  currWindow.value!.x = Math.max(0, Math.min(currWindow.value!.x, 200))
  currWindow.value!.y = Math.max(0, Math.min(currWindow.value!.y, 252))
}

function stopDrag(e : PointerEvent) {
  window.removeEventListener('pointermove', onDrag);
  window.removeEventListener('pointerup', stopDrag);
}


</script>

<style scoped>
.wallpaper {
  width: 640px;
  height: 640px;
  background-image: url('sprites/wallpaper.png');
  background-size: 640px 640px;
  image-rendering: pixelated;
}
</style>