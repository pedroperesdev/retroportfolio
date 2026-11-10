<template>
  <div :class="[playerAnimState, direction]" id="player-sprite">
    
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['walking']);
const props = defineProps(["destPoint"]);
let currRow:number;
let currCol:number;
let distSoFarX:number;
let distSoFarY:number;
let totalDistX = 0;
let totalDistY = 0;
let lastFrameTime = 0;
let moveSpeed = 0.4;
let signX:number;
let signY:number;
let posX = 0;
let posY = 0;
let isMoving = false;
let invertedMovement = false;


let direction = ref('down')
let playerAnimState = ref('idle')

onMounted(() => {
    currRow = 3;
    currCol = 4;
})

defineExpose({
    moveToCell
});

function moveToCell(row:number, col:number, invertOrder:boolean){
    invertedMovement = invertOrder;
    if(isMoving === false) {
        playerAnimState.value = 'moving'
        isMoving = true;
        totalDistY = (row - currRow) * 64;
        distSoFarY = 0;
        totalDistX = (col - currCol) * 64;
        distSoFarX = 0;
        signY = totalDistY < 0 ? -1 : 1;
        signX = totalDistX < 0 ? -1 : 1;
        lastFrameTime = performance.now();
        //move vertically first
        if(!invertOrder){
            direction.value = signY < 0 ? 'up' : 'down'
            requestAnimationFrame(moveY);
        }
        else{
            direction.value = signX < 0 ? 'left' : 'right'
            requestAnimationFrame(moveX);
        }
        currRow = row;
        currCol = col;
    }
}

function moveY(timestamp:number){
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    const player = document.getElementById('player-sprite');
    const frameDist = moveSpeed * deltaTime;
    player!.style.transform = `translateX(${posX}px) translateY(${posY + distSoFarY + frameDist * signY}px)`
    distSoFarY += frameDist * signY;
    if(Math.abs(distSoFarY) < Math.abs(totalDistY)) {
        requestAnimationFrame(moveY);
    }
    else {
        posY += totalDistY;
        if(invertedMovement){
            isMoving = false;
            emit('walking');
            playerAnimState.value = 'idle'
        }
        else{
            direction.value = signX < 0 ? 'left' : 'right'
            requestAnimationFrame(moveX);
        }
    }
}

function moveX(timestamp:number){
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    const player = document.getElementById('player-sprite');
    const frameDist = moveSpeed * deltaTime;
    player!.style.transform = `translateY(${posY}px) translateX(${posX + distSoFarX + frameDist * signX}px)`
    distSoFarX += frameDist * signX
    if(Math.abs(distSoFarX) < Math.abs(totalDistX)) {
        requestAnimationFrame(moveX);
    }
    else {
        posX += totalDistX;
        if(invertedMovement){
            direction.value = signY < 0 ? 'up' : 'down'
            requestAnimationFrame(moveY);
        }
        else{
            isMoving = false;
            emit('walking');
            playerAnimState.value = 'idle'
        }
    }
}

</script>

<style>
.moving {
    image-rendering: pixelated;
    width: 64px;
    height: 128px;
    background-image: url('sprites/player.png');
    background-size: 384px 1280px;
    background-position-x: -64px;
    background-position-y: var(--row, 0px);
    animation: move 0.8s steps(1) infinite;
}

.moving.down {
    --row: 0px;
}

.moving.up {
    --row: -384px;
}

.moving.left {
    --row: -128px;
}

.moving.right {
    --row: -256px;
}

@keyframes move {
    0% {background-position-x: -64px;}
    25% {background-position-x: 0;}
    50% {background-position-x: -128px;}
    75% {background-position-x: 0;}
}

.idle {
    image-rendering: pixelated;
    width: 64px;
    height: 128px;
    background-image: url('sprites/player.png');
    background-size: 384px 1280px;
    background-position: -64px 0;
}

</style>