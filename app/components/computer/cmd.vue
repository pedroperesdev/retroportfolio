<template>
  <div class="flex flex-col bg-black/90 h-[640px] tracking-tighter w-full p-20 font-vt323 gap-16" @click="clickToContinue ? triggerEmit() : {}">
    <h1>{{ currText }}</h1>
    <div v-if="clickToContinue" class="flex justify-center">
      <h2>> Click to continue <</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['doneBooting'])
const phrases =  [
  "Booting up OceanOS (inspired by WinVista/XP)\n",
  "Inspired by WinVista/XP\n",
  "...Loading OceanOS kernel [OK]\n",
  "...Initializing system services [OK]\n",
  "...Detecting hardware [OK]\n",
  "...Initializing graphics [OK]\n",
  "...Starting OceanOS Desktop [OK]\n"
];
const currText = ref("");
let index = 0;
let phraseNum = 0;
const element = document.querySelector("div1");
const clickToContinue = ref(false);

onMounted(() => {
  setTimeout(() => {
    runTimer();
  }, 1000)
})

function runTimer() {
  if(phraseNum != phrases.length) {
    if(index != phrases[phraseNum]?.length) {
      currText.value += phrases[phraseNum]![index++];
      let timeout = 20;
      setTimeout(runTimer, timeout);
    }
    else {
      phraseNum++;
      index = 0;
      let timeout = 300;
      const br = document.createElement("br");
      element?.appendChild(br);
      setTimeout(runTimer, timeout);
    }
  }
  else {
    clickToContinue.value = true;
    return;
  }
}

function triggerEmit() {
  emit('doneBooting')
}

</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-3xl text-gray-200 whitespace-pre-wrap leading-10
}

h2 {
    @apply text-3xl text-blue-700
}
</style>