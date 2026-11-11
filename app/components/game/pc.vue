<template>
  <div class="pc cursor-interact-sprite" :class="hover" @click="openPcDialogue">
    <span v-if="canInteract" class="hover-label font-pixel">{{ $t('game.pcHover') }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    canInteract: boolean;
}>()

const hover = computed(() => props.canInteract ? "pc-hover" : null)

const emit = defineEmits(['openPcDialogue'])
function openPcDialogue() {
    emit('openPcDialogue')
}

</script>

<style scoped>

.cursor-interact-sprite {
  cursor: url('/sprites/cursor_interact.png') 15 5, auto;
}

.pc {
    width: 104px;
    height: 100px;
    background-image: url('/sprites/pc.png');
    background-size: 104px 100px;
    image-rendering: pixelated;
}

.pc-container:hover {
    background-image: url('/sprites/pc_hover.png');
    animation: increase-size 1s forwards reverse;
}

.pc-hover:hover {
    background-image: url('/sprites/pc_hover.png');
    animation: increase-size 0.6s forwards;
}

.hover-label {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-20%);
    display: none;
    white-space: nowrap;
    font-size: 18px;
    color: white;
    background-color: black;
    padding: 0 4px;
    pointer-events: none;
}

.pc-hover:hover .hover-label {
    display: block;
}

@keyframes increase-size {
    0% {transform: scale(1)}
    50%, 60% {transform: scale(1.2)}
    100% {transform: scale(1)}
}
</style>