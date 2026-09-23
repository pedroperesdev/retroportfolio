<template>
  <div class="flex flex-col h-[200px] w-[200px] bg-blue-200 border-[4px] border-blue-800" @mouseenter="$emit('hoverAppsInside')" @mouseleave="$emit('unhoverAppsInside')">
    <div class="flex items-center text-black hover:bg-blue-800 hover:text-white p-[8px]">
      <Icon 
          icon="calculator"
          icon-place="startbar"
      />
      <h2 class="font-pixel">Calculator</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from './design/icon.vue';

</script>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-2xl
}
</style>