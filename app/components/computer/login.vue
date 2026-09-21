<template>
    <div class="flex flex-col border-blue-800 bg-blue-800 border-[2px] w-[490px] rounded-t-lg">
        <div class="flex justify-start items-center px-[24px] top-grad h-[54px] border-t-blue-400 border-l-blue-400 border-r-blue-400 border-t-[3px] border-l-[3px] border-r-[3px] rounded-t-md">
            <h1 class="font-jersey">Welcome to OceanOS</h1>
        </div>
        <div class="border-t-blue-600 border-l-blue-400 border-r-blue-400 border-b-blue-400 border-l-[3px] border-r-[3px] border-b-[3px] border-t-[1px]">
            <div class="flex flex-col gap-[20px] bg-gray-200 border-blue-600 border-[2px] px-[24px] py-[16px]">
                <div>
                    <h2 class="font-pixel">Enter your username and password to login to the system.</h2>
                </div>
                <div class="flex gap-[28px]">
                    <div class="user-sprite bg-white border-b-gray-300 border-r-gray-300 border-t-gray-600 border-l-gray-600 border-[4px] rounded-md"/>
                    <div class="flex flex-col justify-center items-end gap-[12px]">
                        <div class="flex gap-[16px]">
                            <h2 class="font-pixel font-bold">Username</h2>
                            <input type="text" value="Guest" class="max-w-[160px] px-[8px] border-[1.5px] bg-white hover:bg-gray-300 font-pixel text-xl" readonly/>
                        </div>
                        <div class="flex gap-[16px]">
                            <h2 class="font-pixel font-bold">Password</h2>
                            <input type="password" class="max-w-[160px] px-[8px] border-[1.5px] bg-white hover:bg-gray-300 font-pixel text-xl"/>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <Button text="OK" @isDesktop="$emit('isDesktop')"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
import Button from './design/option-button.vue'

</script>

<style scoped>
@import "tailwindcss";

.top-grad {
    background-image: linear-gradient(to top, var(--color-blue-800), var(--color-blue-500), var(--color-blue-300))
}
h1 {
    @apply text-4xl text-white font-semibold
}

h2 {
    @apply text-xl text-black
}

.user-sprite {
    width: 108px;
    height: 108px;
    background-image: url('sprites/user.png');
    background-size: 100px 100px;
    image-rendering: pixelated;
}

</style>