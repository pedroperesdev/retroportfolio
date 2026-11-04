<template>
  <div class="console cursor-interact-sprite" :class="hover" @click="$emit('openConsoleDialogue')">
    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    canInteract: boolean;
}>()

const hover = computed(() => props.canInteract ? "console-hover" : null)

</script>

<style scoped>

.cursor-interact-sprite {
  cursor: url('sprites/cursor_interact.png') 15 5, auto;
}

.console {
    width: 88px;
    height: 52px;
    background-image: url('sprites/console.png');
    background-size: 88px 52px;
    image-rendering: pixelated;
}

.console-hover:hover {
    background-image: url('sprites/console_hover.png');
    animation: increase-size 0.6s forwards;
}

@keyframes increase-size {
    0% {transform: scale(1)}
    50%, 60% {transform: scale(1.2)}
    100% {transform: scale(1)}
}
</style>