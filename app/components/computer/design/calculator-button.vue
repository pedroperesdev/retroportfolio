<template>
  <div 
    class="flex items-center cursor-interact-sprite hover:bg-blue-200 justify-center flex-1 border-[4px] border-blue-800 bg-white"
    @click="$emit('clicked', symbol)"
  >
    <h2 class="font-pixel">{{ symbol }}</h2>
  </div>
</template>

<script lang="ts" setup>
import type { CalcSymbol } from '~/types/computer.ts';


const props = withDefaults(defineProps<{
    symbol?: CalcSymbol
}>(), {
    symbol: '0'
})

</script>

<style scoped>
@reference "tailwindcss";


h2 {
  @apply text-2xl
}
</style>