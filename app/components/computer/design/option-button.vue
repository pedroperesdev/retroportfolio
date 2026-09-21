<template>
    <div class="border-[4px] border-blue-600 bg-blue-600 w-[100px]" @click="$emit('isDesktop')">
        <div class="flex font-pixel text-black text-2xl bg-blue-200 hover:bg-gray-50 justify-center">
            {{ props.text }}
        </div>
    </div>

</template>

<script lang="ts" setup>
const props = defineProps<{
    text: string;
}>();

</script>

<style scoped>

</style>