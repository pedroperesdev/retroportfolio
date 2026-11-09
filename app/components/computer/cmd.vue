<template>
  <div class="flex flex-col h-screen bg-black p-10 font-pixel gap-16" @click="clickToContinue ? triggerEmit() : {}">
    <h1>{{ currText }}</h1>
    <div v-if="clickToContinue">
      <h2>> {{ $t('computer.boot.message') }} <</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const emit = defineEmits(['doneBooting'])
const phrases =  [
  computed(() => t('computer.boot.line1')),
  computed(() => t('computer.boot.line2')),
  computed(() => t('computer.boot.line3')),
  computed(() => t('computer.boot.line4')),
  computed(() => t('computer.boot.line5')),
  computed(() => t('computer.boot.line6'))
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
    if(index != phrases[phraseNum]?.value.length) {
      currText.value += phrases[phraseNum]!.value[index++];
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
    @apply text-2xl text-gray-200 whitespace-pre-wrap leading-14
}

h2 {
    @apply text-2xl text-blue-700
}
</style>