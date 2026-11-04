<template>
  <div class="flex flex-col bg-blue-200 border-[4px] border-blue-800" @mouseenter="$emit('hoverAppsInside')" @mouseleave="$emit('unhoverAppsInside')">
    <div
      v-for="app in apps"
    >
      <Application
        :icon="app.icon"
        :file-name="app.fileName"
        @open-app="(app: OpenableFoldersOrFiles, icon: IconType) => {$emit('openApp', app, icon); $emit('unhoverAppsInside') }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Application from './design/application.vue';
import type { AppType, IconType, OpenableFoldersOrFiles } from '../../types/computer.ts';

const apps = ref<AppType[]>([
  {icon: 'calculator', fileName: 'calculator'},
  {icon: 'photos', fileName: 'photos'},
  {icon: 'minesweeper', fileName: 'minesweeper'}
])

</script>

<style scoped>

</style>