<template>
  <div 
    class="flex relative wallpaper w-full h-full z-25"
    :style="{'--windowW': width + 'px', '--windowH': height + 'px'}"
    @click="closeStartbar">
    <!--only the currently active one has ref windowElem-->
    <DesktopWindow
      v-for="window in visibleWindows"
      :key="window.id"
      :ref="(el) => {if(openedWindows.find(w => w.z == 4)?.id === window.id) windowElement = el}"
      :style="{position: 'absolute', zIndex: window.z, left: window.x + 'px', top: window.y + 'px'}"
      :name="window.name"
      :active="openedWindows.find(w => w.z == 4)?.id === window.id" 
      :maximized="window.status === 'maximized'"
      :can-maximize="window.canMax"
      @start-drag="(e: PointerEvent) => startDrag(e, window.id)"
      @minimize-window="minimizeWindow(window.id)"
      @maximize-window="maximizeWindow(window.id)"
      @close-window="closeWindow(window.id)"
      @open-file="openFile"
      @shake-window="shakeWindow(window.id)"
    />
    <div class="flex flex-col flex-wrap gap-[8px] p-[24px] w-full">
      <Icon icon="recyclebin" file-name="Recycle Bin" :shorten="false" icon-place="desktop" @add-new-window="addNewWindow"/>
      <Icon icon="folder" file-name="web projects" :shorten="false" icon-place="desktop" @add-new-window="addNewWindow"/>
      <Icon icon="folder" file-name="game projects" :shorten="false" icon-place="desktop" @add-new-window="addNewWindow"/>
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
    <div class="absolute bottom-[60px] z-40">
      <Startbar 
        v-if="startbar" 
        ref="navbarElem"
        @hover-apps="hoverApps"
        @unhover-apps="unhoverApps"
        @turnoff="turnoffPc"
        @click.stop
      />
    </div>
    <div class="absolute bottom-[400px] left-[200px] z-50">
      <Apps
        v-if="hoveringApps"
        @hover-apps-inside="hoverAppsInside"
        @unhover-apps-inside="unhoverAppsInside"
        @openApp="openFile"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './navbar.vue';
import DesktopWindow from './design/desktop-window.vue';
import Startbar from './startbar.vue';
import Icon from './design/icon.vue';
import Apps from './apps.vue';
import { useSound } from '../../composables/useSound.ts';
import type {WindowState, OpenableFoldersOrFiles, IconType } from '~/types/computer.ts';
import { useWindowSize, useElementSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const windowElement = ref<any>(null);
const { width:elemW, height:elemH } = useElementSize(windowElement);



onMounted(() => {
  useSound('computer-boot');
  stopSound('main-music');
  startKeepAudioAwake();
})

onUnmounted(() => {
  stopKeepAudioAwake();
})

const emit = defineEmits(['turnOff']);
const startbar = ref(false);
const hoveringApps = ref(false);
const insideApps = ref(false);
let closeTimer: ReturnType<typeof setTimeout>;
const openedWindows = ref<WindowState[]>([]);
const visibleWindows = computed(() => {
  return openedWindows.value.filter(w => w.status !== 'minimized')
})
const clickOffset = ref({ x: 0, y: 0 });
let id = 0;
const currWindow = ref<WindowState | null>();

function openFile(file: OpenableFoldersOrFiles, iconType: IconType) {
  addNewWindow(file.toString(), iconType)
}

function hoverAppsInside() {
  clearTimeout(closeTimer)
  insideApps.value = true;
  hoveringApps.value = true;
}

function unhoverAppsInside() {
  insideApps.value = false;
  hoveringApps.value = false;
}

function hoverApps() {
  insideApps.value = false;
  hoveringApps.value = true;
}

function unhoverApps() {
  closeTimer = setTimeout(() => {
    if(!insideApps.value)
      hoveringApps.value = false;
  }, 100);
}

function turnoffPc() {
  emit('turnOff');
}

function shakeWindow(windowId: number) {
  if(!makeSelectedWindowCurrent(windowId)) return;
  const win = currWindow.value;
  if(!win) return;
  const { x, y } = win;
  if( !x || !y) return;
  let delay = 85;
  const glitchOffsets: [number, number][] = [
    [x + 50,  y + 50],
    [x - 30,  y + 100],
    [x + 80,  y - 20],
    [x - 60,  y - 40],
    [x + 20,  y + 70],
    [x + 50,  y + 50],
    [x - 30,  y + 100],
    [x + 80,  y - 20],
    [x - 60,  y - 40],
    [x + 20,  y + 70],
    [x + 50,  y + 50],
    [x, y],
  ];
  glitchOffsets.forEach(([ox, oy]) => {
    setTimeout(() => {
      win.x = ox;
      win.y = oy;
    }, delay)
    delay += 85;
  })
}

function addNewWindow(name: string, icon: IconType) {
  if(openedWindows.value.length >= 4 || openedWindows.value.find(w => w.name == name)) return;
  openedWindows.value.map(w => w.z -= 1)
  let window = { id: id++, x: 100, y: 100, z: 4, name: name, icon: icon, canMax: true, status: 'normal'} as WindowState;
  if(window.name === 'Minesweeper') window.canMax = false;
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
  useSound('click-pc');
  if(!makeSelectedWindowCurrent(windowId)) return;
  currWindow.value!.x = 0;
  currWindow.value!.y = 0;
  if(currWindow.value!.status === 'maximized') currWindow.value!.status = 'normal';
  else if(currWindow.value!.status === 'normal') currWindow.value!.status = 'maximized';
}

function minimizeWindow(windowId: number) {
  useSound('click-pc');
  if(!makeSelectedWindowCurrent(windowId)) return;
  const temp = openedWindows.value.find(w => w.id === windowId);
  if(!temp) return;
  temp.status = 'minimized';
  temp.z = 1;
  openedWindows.value.filter(w => w.id != windowId).map(w => w.z += 1)
}

function closeWindow(windowId: number) {
  useSound('click-pc');
  if(!makeSelectedWindowCurrent(windowId)) return;
  openedWindows.value.map(w => w.z += 1)
  openedWindows.value = openedWindows.value.filter(win => win.id != windowId);
}

function openMinimized(windowId: number) {
  //can be minimized or just open but in background
  useSound('click-pc');
  if(!makeSelectedWindowCurrent(windowId)) return;
  const temp = openedWindows.value.find(w => w.id === windowId)
  if(temp) temp.status = 'normal'
}

function openStartbar() {
  useSound('click-pc');
  startbar.value = true;
}

function closeStartbar() {
  useSound('click-pc');
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
  currWindow.value!.x = Math.max(0, Math.min(currWindow.value!.x, width.value - elemW.value))
  currWindow.value!.y = Math.max(0, Math.min(currWindow.value!.y, height.value - elemH.value))
}

function stopDrag(e : PointerEvent) {
  window.removeEventListener('pointermove', onDrag);
  window.removeEventListener('pointerup', stopDrag);
}


</script>

<style scoped>
.wallpaper {
  width: var(--windowW);
  height: var(--windowH);
  background-image: url('/sprites/wallpaper.png');
  background-size: var(--windowW) var(--windowH);
  image-rendering: pixelated;
}
</style>