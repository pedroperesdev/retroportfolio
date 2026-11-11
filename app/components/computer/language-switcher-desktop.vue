<template>
    <div
        v-if="flagUrl != null" 
        class="flex gap-4 cursor-interact-sprite"
        @click="swapLocale"
    >
        <div 
            class="flag-desktop"
            :style="{'--flagUrl': `url(${flagUrl})`}"
        >
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSound } from '../../composables/useSound.ts';
const { locale, locales, setLocale } = useI18n()
const flagUrl = computed(() => {
    switch(currLocaleName.value){
        case 'English': {
            return '/sprites/english_desktop.png';
        }
        case 'Portuguese': {
            return '/sprites/portuguese_desktop.png';
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
.flag-desktop {
    width: 48px;
    height: 28px;
    background-image: var(--flagUrl);
    background-size: 48px 28px;
    image-rendering: pixelated;
}
</style>