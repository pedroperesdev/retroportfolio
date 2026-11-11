<template>
    <div class="flex h-screen justify-center items-center">
        <div class="flex flex-col border-blue-800 bg-blue-800 border-[4px] w-[490px]">
            <div class="flex justify-start items-center px-[24px] top-grad h-[54px] border-t-blue-400 border-l-blue-400 border-r-blue-400 border-t-[4px] border-l-[4px] border-r-[4px]">
                <h1 class="font-pixel">{{ $t('computer.login.title') }}</h1>
            </div>
            <div class="border-t-blue-600 border-l-blue-400 border-r-blue-400 border-b-blue-400 border-l-[4px] border-r-[4px] border-b-[4px]">
                <div class="flex flex-col gap-[20px] bg-gray-200 border-blue-600 border-[4px] px-[24px] py-[16px]">
                    <div>
                        <h2 class="font-pixel">{{ $t('computer.login.instructions') }}</h2>
                    </div>
                    <div class="flex gap-[28px]">
                        <div class="user-sprite shrink-0 bg-white border-b-gray-300 border-r-gray-300 border-t-gray-600 border-l-gray-600 border-[4px]"/>
                        <div class="flex flex-col justify-center gap-[12px]">
                            <div class="flex gap-[16px] justify-end">
                                <h2 class="font-pixel font-bold">{{ $t('computer.login.username') }}</h2>
                                <input type="text" :value="t('computer.login.guest')" class="max-w-[160px] px-[8px] border-[1.5px] bg-white hover:bg-gray-300 font-pixel text-xl" readonly/>
                            </div>
                            <div class="flex gap-[16px] justify-end">
                                <h2 class="font-pixel font-bold">{{ $t('computer.login.password') }}</h2>
                                <input type="password" class="max-w-[160px] px-[8px] border-[1.5px] bg-white hover:bg-gray-300 font-pixel text-xl"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end cursor-interact-sprite">
                        <Button text="OK" @isDesktop="$emit('isDesktop')"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from './design/option-button.vue'
const { t } = useI18n();


</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-3xl text-white font-semibold
}

h2 {
    @apply text-xl text-black
}

.user-sprite {
    width: 108px;
    height: 108px;
    background-image: url('/sprites/user.png');
    background-size: 100px 100px;
    image-rendering: pixelated;
}

</style>