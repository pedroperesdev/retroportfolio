<template>
  <div class="border-r-[4px] border-t-[4px] border-blue-800">
    <div class="border-r-[4px] border-t-[4px] border-blue-400 bg-blue-800">
      <div class="flex border-r-[4px] border-t-[4px] border-blue-600">
        <div class="flex items-end p-[12px] bg-blue-800 h-100 border-r-[2px] border-blue-400">
          <h1 class="font-pixel" style="writing-mode:sideways-lr">OceanOS</h1>
        </div>
        <div class="flex flex-col bg-blue-200 h-100 w-50 border-l-[2px] border-blue-400">
          <div 
            class="flex items-center gap-[8px] text-black hover:bg-blue-800 hover:text-white p-[8px]" 
            @mouseenter="$emit('hoverApps')" 
            @mouseleave="$emit('unhoverApps')"
          >
            <Icon 
                icon="apps"
                icon-place="startbar"
            />
            <h2 class="font-pixel">Apps</h2>
            <div class="w-full flex justify-end">
              <h2 class="font-pixel">></h2>
            </div>
          </div>
          <div class="flex h-full flex-col justify-end">
            <div class="flex text-black hover:bg-blue-800 hover:text-white p-[12px] border-t-[2px]">
              <h2 class="font-pixel">Turn off...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from './design/icon.vue';

</script>

<style scoped>
@reference "tailwindcss";

h1 {
  @apply text-white text-3xl
}

h2 {
  @apply text-2xl
}

</style>