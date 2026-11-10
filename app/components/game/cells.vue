<template>
    <div v-if="canInteract" class="grid grid-cols-8 gap-0">
        <div
            v-for="n in 48"
            :key="n"
            class="cell"
            :class="clickableCells.includes(n) ? 'cell-hover' : 'none'"
            @click="() => { $emit('walking'); getPos(n)}"
        >
        </div>

    </div>

</template>

<script setup lang="ts">

const emit = defineEmits(['getPos', 'walking']);
defineProps<{
    canInteract: boolean;
}>()

function getPos(cell:number){
    if(clickableCells.includes(cell)) {
        emit('getPos', cell);
    }
}

const forbiddenCells = [1, 2, 3, 4, 5, 6, 7, 8, 38, 39, 40, 46, 47, 48]


const clickableCells = Array.from({ length:48 }, (v, i) => i + 1).filter(n => !forbiddenCells.includes(n))

</script>

<style>

.cell {
    width: 64px;
    height: 64px;
}

.cell-hover:hover {
    background: #b453093d;
}

</style>