<template>
    <div
        v-if="flagUrl != null" 
        class="flex gap-4 cursor-interact-sprite"
        @click="() => { useSound('click-sound'); swapLocale() }"
    >
        <div 
            class="flag"
            :style="{'--flagUrl': `url(${flagUrl})`}"
        >
        </div>
        <div
            class="absolute left-[64px] top-[12px] h-fit p-[4px] w-[132px] bg-white"
        >
            <p class="font-vt323 text-3xl">
                {{ currLocaleName! }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts';
const { locale, locales, setLocale } = useI18n()
const flagUrl = computed(() => {
    switch(currLocaleName.value){
        case 'English': {
            return '/sprites/english.png';
        }
        case 'Portuguese': {
            return '/sprites/portuguese.png';
        }
    }
})
const currLocaleName = computed(() =>
    locales.value.find(l => l.code === locale.value)?.name
)

function swapLocale(){
    if(locale.value === 'pt'){
        setLocale('en')
    }
    else {
        setLocale('pt')
    }
}

</script>

<style scope>
.flag {
    width: 68px;
    height: 68px;
    background-image: var(--flagUrl);
    background-size: 68px 68px;
    image-rendering: pixelated;
}
</style>