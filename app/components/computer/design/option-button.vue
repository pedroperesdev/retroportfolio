<template>
    <div class="border-[2px] border-blue-600 bg-blue-600 w-[100px] rounded-md" @click="$emit('isDesktop')">
        <div class="flex font-pixel text-black text-2xl border-[2px] border-blue-400 stripes rounded-sm justify-center">
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

.stripes {
    background: linear-gradient(
        var(--color-gray-50) 0px,
        var(--color-blue-100) 10px,
        var(--color-blue-300) 28px
    )
}

.stripes:hover {
    background: var(--color-gray-300)
}
</style>