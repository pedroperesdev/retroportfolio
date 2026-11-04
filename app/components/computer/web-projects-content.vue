<template>
  <div class="flex gap-[16px]">
    <Icon 
        icon='file'
        file-name="legau_internship.pdf" 
        icon-place="infolder"
        @open-file="(name:OpenableFoldersOrFiles, icon:IconType) => $emit('openFile', name, icon)"
    />
  </div>
</template>

<script lang="ts" setup>
import Icon from './design/icon.vue';
import type { IconType, OpenableFoldersOrFiles } from '~/types/computer.ts';

</script>

<style>

</style>