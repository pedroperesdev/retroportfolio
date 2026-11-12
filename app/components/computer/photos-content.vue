<template>
    <div class="flex flex-col justify-between items-center w-full h-full overflow-auto gap-[24px]">
        <div class="flex flex-col items-center overflow-hidden min-h-30 max-h-300 w-fit">
            <NuxtImg :src=imageSrc loading="lazy" class="w-fit h-full object-contain overflow-hidden border-blue-600 border-[4px]" />
            <h1 class="font-pixel">{{getNameFromPath(imageSrc)}}</h1>
        </div>
        <div class="flex flex-col overflow-hidden shrink-0 gap-[12px] w-full bg-white border-blue-600 border-[4px]">
            <div class="flex overflow-auto h-15 gap-[32px] p-[4px]">
                <NuxtImg src="/images/gallery/spike.png" loading="lazy" @click="changeCurrImgSrc('/images/gallery/spike.png')" class="cursor-interact-sprite border-blue-600 border-[4px]"/>
                <NuxtImg src="/images/gallery/sevilha.png" loading="lazy" @click="changeCurrImgSrc('/images/gallery/sevilha.png')" class="cursor-interact-sprite border-blue-600 border-[4px]"/>
                <NuxtImg src="/images/gallery/donuts.png" loading="lazy" @click="changeCurrImgSrc('/images/gallery/donuts.png')" class="cursor-interact-sprite border-blue-600 border-[4px]"/>
                <NuxtImg src="/images/gallery/bubbletea.png" loading="lazy" @click="changeCurrImgSrc('/images/gallery/bubbletea.png')" class="cursor-interact-sprite border-blue-600 border-[4px]"/>
                <NuxtImg src="/images/gallery/meatloaf.png" loading="lazy" @click="changeCurrImgSrc('/images/gallery/meatloaf.png')" class="cursor-interact-sprite border-blue-600 border-[4px]"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const imageSrc = ref<string>('/images/gallery/spike.png');

function changeCurrImgSrc(newSrc: string) {
    imageSrc.value = newSrc;
}

function getNameFromPath(path: string){
    return path.split('/')[3];
}

</script>

<style scoped>
@reference "tailwindcss";

h1 {
    @apply text-base font-bold
}

h2 {
    @apply text-xl
}

a {
    @apply text-blue-600 bg-gray-300 hover:bg-blue-200
}


</style>