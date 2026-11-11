<template>
  <div>
    <div v-if="showingHeart" class="heart absolute top-[-60px] left-[-12px]"/>
    <div class="dog_sleep cursor-interact-sprite" @click="showHeart"/>
  </div>

  
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts';

const showingHeart = ref<boolean>(false)

function showHeart(){
  if(showingHeart.value == true) return;
  showingHeart.value = true;
  useSound('dog-sound');
  setTimeout(() => {
    showingHeart.value = false;
  }, 1000)
}

</script>

<style scoped>

.heart {
    width: 60px;
    height: 56px;
    background-image: url('/sprites/heart.png');
    background-size: 60px 56px;
    image-rendering: pixelated;
}

.dog_sleep {
    width: 104px;
    height: 68px;
    background-image: url('/sprites/dog_sleep.png');
    background-size: 312px 68px;
    image-rendering: pixelated;
    background-position-x: -104px;
    animation: move 3s steps(1) infinite;
}



@keyframes move {
    0% {background-position-x: 0;}
    33% {background-position-x: -104px;}
    66% {background-position-x: -208px;}
}
</style>