<template>
  <div class="pc" :class="hover" @click="openPcDialogue">
    
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
.pc {
    width: 104px;
    height: 100px;
    background-image: url('sprites/pc.png');
    background-size: 104px 100px;
    image-rendering: pixelated;
}

.pc-container:hover {
    background-image: url('sprites/pc_hover.png');
    animation: increase-size 1s forwards reverse;
}

.pc-hover:hover {
    background-image: url('sprites/pc_hover.png');
    animation: increase-size 0.6s forwards;
}

@keyframes increase-size {
    0% {transform: scale(1)}
    50%, 60% {transform: scale(1.2)}
    100% {transform: scale(1)}
}
</style>