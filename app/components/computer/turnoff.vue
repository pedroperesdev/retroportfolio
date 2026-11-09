<template>
  <div class="flex flex-col h-screen bg-black p-10 font-pixel gap-16 justify-center items-center">
    <h1>{{ $t('computer.shutdown.line1') }}</h1>
    <h1>{{ $t('computer.shutdown.line2') }}</h1>
  </div>
</template>

<script lang="ts" setup>

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