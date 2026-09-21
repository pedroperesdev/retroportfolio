<template>
  <div class="flex gap-[16px]">
    <Icon 
        :icon=iconType
        text="PrayingP..." 
        icon-place="infolder"
        @click="$emit('openFile', 'prayingpetals' as OpenableFiles, iconType)"
    />
  </div>
</template>

<script lang="ts" setup>
import Icon from './design/icon.vue';
import type { OpenableFiles, IconType } from '~/types/computer.ts';

const iconType = 'file' as IconType

</script>

<style>

</style>